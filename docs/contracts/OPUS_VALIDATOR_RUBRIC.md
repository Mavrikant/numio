# Opus Validator Rubric

> Faz 5'te Opus validator agentlerinin her batch için uyguladığı kabul kriterleri.
> Verdict üçlüsü: **APPROVE / REJECT-WITH-FIXES / FIX-TRIVIAL**

---

## Validator akışı

```
1. Worktree branch'i fetch et
2. Otomatik kontrolleri çalıştır (script)
3. Manuel okuma + karar
4. Verdict ver
5. (APPROVE ise) dispatcher'a "merge edilebilir" sinyali
   (REJECT ise) Sonnet'e structured feedback
   (FIX-TRIVIAL ise) tek commit ile düzelt + APPROVE
```

---

## 1. OTOMATIK KONTROLLER (önce çalıştır, herhangi biri fail = REJECT)

Tüm bunlar Sonnet'in worktree branch'inde çalıştırılır:

| Komut | Beklenti | Fail = |
|---|---|---|
| `npm run typecheck` | 0 error | REJECT |
| `npm run test -- src/calculators/{category}/` | All pass | REJECT |
| `npm run lint -- src/calculators/{category}/` | 0 error, ≤5 warning | REJECT eğer error |
| `npm run validate:i18n -- {slug}` | 12/12 dil var | REJECT |
| `npm run validate:slugs` | Çakışma yok | REJECT |
| `git diff main --stat -- src/lib/ src/types/ package.json` | Boş | REJECT (yasak dosya değiştirilmiş) |
| `git diff main --stat -- src/i18n/ui.json src/i18n/categories/ src/i18n/slugs/` | Boş | REJECT |

Otomatik fail = manuel okumaya bile gerek yok. Sonnet'e log paste, "şu komut kırmızı, düzelt" geri ver.

---

## 2. MANUEL KONTROLLER (otomatikler yeşilse)

### 2.1 Formül doğruluğu (ÖNEMİ: ⭐⭐⭐⭐⭐)

Her hesaplayıcı için:
- `meta.references` URL'lerini aç, formülü orada bul
- `compute.ts`'deki implementasyonla karşılaştır
- 1-2 numeric edge case'i kafadan hesapla (örn. mortgage: $100k, 5%, 30yr → $536.82/ay) — test'le tutarlı mı?
- **YAYGIN HATALAR**:
  - Birim dönüşümü unutulmuş (örn. yıllık faiz → aylık)
  - Yüzde gözden kaçırılmış (5 vs 0.05)
  - Off-by-one (n vs n-1 ödeme dönemi)
  - Integer vs float (Math.floor yerine Math.round)

**Reject = formül yanlış.** Fix Sonnet'in işi (kaynak link + counter example ile geri).

### 2.2 Edge case kapsamı (ÖNEMİ: ⭐⭐⭐⭐)

`edge-cases.test.ts` şunları test ediyor mu:
- `0` input (örn. 0 yıl kredi, 0 kg kilo)
- Negatif input (Zod schema reddetmeli, test bunu doğrulamalı)
- Çok büyük input (overflow riski varsa)
- Float precision (örn. 0.1 + 0.2)
- Boundary değerleri (min, max)
- Empty array / undefined optional fields

**Eksik edge case = REJECT.** "Şu case'i de ekle" ile geri.

### 2.3 Çeviri kalitesi (ÖNEMİ: ⭐⭐⭐⭐)

12 dilin hepsini okuma zorunlu değil — örneklem yeterli:
- **AR**: RTL doğru render olur mu, dilbilgisi natural mi, "literal MT" değil mi
- **ZH/JA/KO**: Karakterleri doğru, simplified/traditional karışmamış
- **DE**: Bileşik kelimeler doğru (örn. "Kreditrechner" değil "Loan Hesaplayıcısı")
- **TR**: Türkçe gramer doğru, "machine-translated" hissi vermiyor
- **EN**: Native English okur, gerekirse re-write
- Diğerleri: spot-check (1-2 alan)

**Reject = "literal MT"** veya **dilbilgisi hatası**. Sonnet'e specific line + suggestion ile geri.

### 2.4 SEO içeriği (ÖNEMİ: ⭐⭐⭐)

`content.mdx` per-locale:
- **Word count**: EN+TR ≥500 kelime (`wc -w`)
- **Heading structure**: H1 tek, H2/H3 hiyerarşik
- **Keyword density**: doğal, stuffing yok (%2-4 aralığı)
- **Unique content**: 12 dil birbirinin literal çevirisi değil, lokal idiomatic
- **Schema.org references**: FAQ varsa JSON-LD'ye geçirilebilir formatta
- **External links**: Authority sites only (wiki, gov, edu, recognized industry)

### 2.5 Code quality (ÖNEMİ: ⭐⭐⭐)

- **Naming**: `camelCase` value, `PascalCase` type, `UPPER_SNAKE` const
- **Import order**: external → internal alias → relative
- **No dead code**: TODO comments, commented-out blocks
- **Helper reuse**: Aynı şeyi 2 hesaplayıcı yapıyorsa shared helper'a çıkarılmış mı
- **Magic numbers**: Yorumla açıklanmış mı (örn. `// WHO threshold` öncesi)

**Fix-trivial uygun**: import order, naming inconsistency.
**Reject**: structural code smell, dead code.

### 2.6 Security (ÖNEMİ: ⭐⭐⭐⭐⭐)

- `eval`, `Function()`, `dangerouslySetInnerHTML` → REJECT (no exceptions)
- User input HTML olarak render ediliyor mu → escape var mı
- External resource yükleniyor mu (compute içinde fetch) → REJECT
- localStorage write → izin yok (compute pure olmalı)

**Reject. Asla fix-trivial değil.**

### 2.7 Performance (ÖNEMİ: ⭐⭐⭐)

- Bundle size: hesaplayıcı island bundle <50KB (sonraki adımda Lighthouse ölçecek)
- Compute time: bilinen big-input test'i için <10ms
- `moment`, `lodash`, `axios` gibi import varsa → REJECT (alternatives önerilir)
- React hook'ları içinde infinite re-render trigger var mı

---

## 3. VERDICT KARARI

### APPROVE
Tüm otomatik kontroller yeşil + manuel kritik (formül, security) doğru + minor issue yok veya fix-trivial uygulanmış.

**Aksiyon:**
1. Dispatcher'a sinyal ver: "batch-{N} APPROVE, merge edilebilir"
2. Worktree branch'i listede `ready-to-merge`'e geç

### REJECT-WITH-FIXES
Otomatik fail VEYA manuel kritik hata (formül, çeviri, security).

**Aksiyon:**
1. Sonnet'e structured feedback:
   ```
   BATCH {N} REJECT
   
   Sebep: {kategori — formül/çeviri/test/security}
   
   Detaylar:
   - {dosya:satır}: {ne yanlış, ne olmalı, neden}
   - {kaynak/karşı-örnek/öneri}
   
   Yeniden commit ettiğinde re-validate edeceğim.
   ```
2. Aynı Sonnet, aynı worktree
3. Max 2 retry. 3. fail sonrası batch dağıt, dispatcher'a eskalasyon.

### FIX-TRIVIAL
Sadece kozmetik issue (typo, import order, magic number comment, naming consistency).

**Aksiyon:**
1. Opus küçük commit ekler:
   ```
   chore({slug}): minor cleanup (typo + import order)
   ```
2. APPROVE olarak işaretler
3. Sonnet'e "şunları düzelttim, bir dahaki sefere dikkat" notu (öğrenmesi için)

**FIX-TRIVIAL ASLA UYGUN DEĞİL:**
- Formül hatası
- Eksik dil
- Eksik test
- Security issue
- Yanlış reference URL

---

## 4. ESKALASYON

Aşağıdaki durumlarda Opus durup dispatcher'a (Main Claude) eskale eder:

1. **Spec belirsizliği**: Sonnet bir konuda spec'i farklı yorumlamış, validator olarak da emin değilsem
2. **Formül belirsiz**: İki otoriter kaynak farklı formül diyor, hangisini kabul edeceğiz
3. **Çeviri kalite eşiği**: AR/CJK'da "good enough" tanımı belirsiz, kullanıcı kararı lazım
4. **Reach to user**: 2. reject sonrası Sonnet aynı hatayı yapıyorsa, brief'te bir gap var

Eskalasyon formatı:
```
ESKALASYON — Batch {N}, {slug}

Konu: {kısa başlık}
Sonnet'in iddiası: {ne yapmış, neden öyle düşünmüş}
Benim endişem: {neden onaylayamıyorum}
Karar verilmesi gereken: {a) X b) Y c) Z}

Dispatcher'a soruyorum, cevap geldikten sonra Sonnet'i yönlendireceğim.
```

---

## 5. Validator çalışma örneği

```
> Validator: batch-5-finance (loan-amortization, mortgage, auto-loan, student-loan, refinance)

[1/8] npm run typecheck ............... PASS
[2/8] npm test src/calculators/finance/. PASS (47 tests)
[3/8] npm run lint .................... PASS (2 warnings, no errors)
[4/8] validate:i18n loan-amortization .. PASS (12/12)
[5/8] validate:i18n mortgage ........... PASS (12/12)
[6/8] validate:i18n auto-loan .......... FAIL (zh.outputs.totalInterest missing)
[7/8] -
[8/8] -

Otomatik fail. REJECT.

→ Sonnet'e: "auto-loan/i18n.ts zh bundle'ında outputs.totalInterest eksik. 
   12/12 dil zorunlu (SPEC §2.3). Tüm dosyaları kontrol et, retry."
```

---

## 6. Validator'ın yapmayacağı şeyler

- Spec'e yeni kural eklemek (kontrat değişimi dispatcher onayı ister)
- Sonnet'in kodunu büyük ölçekli refactor (fix-trivial dışında değişiklik yapmaz)
- Reject sebebini "estetik" olarak vermek (rubric'te yazılı kriter olmalı)
- 3. retry zorlamak (eskale et)
- Native speaker iddiası (12 dil ana dili değil — "natural mı" sezgisel kontrol)
