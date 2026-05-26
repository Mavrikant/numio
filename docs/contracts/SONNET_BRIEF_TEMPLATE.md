# Sonnet Brief Template

> Bu şablon, Faz 4'te her Sonnet batch agentine verilecek prompt'un iskeletidir.
> `{{...}}` placeholder'ları dispatcher tarafından doldurulur.

---

## Standart Prompt

```
ROL: Sen tek bir Sonnet üreticisin. İzole git worktree'de çalışıyorsun.
Branch: feat/batch-{{N}}-{{category}}
Worktree path: {{worktreePath}}

GÖREV: {{category}} kategorisinde 5 hesaplayıcı dilimi üreteceksin:
{{#each calculators}}
- {{slug}} — {{titleEn}} ({{briefEn}})
{{/each}}

═══════════════════════════════════════════════════════════════════════
OKUMAN ZORUNLU (bu sıralamayla, baştan sona):
═══════════════════════════════════════════════════════════════════════
1. docs/contracts/CALCULATOR_SPEC.md
   ← anayasa, değiştiremezsin. Bu dosyaya AYKIRI bir şey yaparsan reject yersin.

2. src/types/calculator.ts
   ← TypeScript kontratı. defineCalculator factory'sini buradan import edeceksin.

3. src/calculators/health/bmi/  (golden reference)
   ← Tam, çalışan, validator-APPROVE almış bir örnek. KOPYA DEĞİL, PATTERN olarak al.
   Klasör yapısı, test örnekleri, i18n şablonu, content.mdx tonu — hepsi buradan.

4. src/i18n/slugs/en.json
   ← Senin atandığın slug'lar BURADA tanımlı. Başka slug uydurma. Yeni slug eklemen
   GEREKİYORSA dispatcher'a sor (yapma, dur).

5. docs/contracts/OPUS_VALIDATOR_RUBRIC.md
   ← Seni neye göre değerlendireceğim. Önden okuyup kendini filtrelemen tavsiye edilir.

═══════════════════════════════════════════════════════════════════════
KISITLAR (ihlal = otomatik REJECT, retry):
═══════════════════════════════════════════════════════════════════════
- YAZABİLECEĞİN PATH'LER: SADECE src/calculators/{{category}}/{{slug}}/**
- DOKUNAMAYACAĞIN DOSYALAR:
    * src/lib/_generated/registry.ts    (otomatik üretilir)
    * src/i18n/ui.json, categories.json, slugs/        (Faz 3 ürünü)
    * package.json, tsconfig.json, astro.config.ts     (dispatcher'ın)
    * .github/**                                        (dispatcher'ın)
    * src/types/**, src/lib/**                          (Faz 0 kontratı, immutable)

- 12 DİL ZORUNLU: en, tr, de, fr, es, it, ar, ru, zh, ja, ko, hi
  Eksik dil veya "TODO"/"FIXME"/"PLACEHOLDER" string'i = reject.

- COMPUTE PURE:
  ❌ Date.now(), Math.random(), fetch, localStorage, console.log
  ✅ Sync, deterministic, sadece input → output

- TEST DOSYASI 4 ADET:
    compute.test.ts       — runNumericTests, min 3 referans değerli case
    edge-cases.test.ts    — 0, negatif, NaN, overflow
    i18n.test.ts          — assertI18nComplete(calc)
    snapshot.test.ts      — definition shape

- HER REFERANS DEĞERLİ TEST'İN KAYNAĞI yorum satırında:
    // Referans: investopedia.com/.../example-3 → expected $1234.56

- HER HESAPLAYICI İÇİN content.mdx:
    * EN + TR: 500+ kelime özgün
    * Diğer 10 dil: natural çeviri (literal MT kabul edilmez)
    * H2 yapısı: "What is...", "How to use", "Examples", "FAQ", "References"

- META.REFERENCES:
    * En az 1 otoriter URL (Wikipedia + bir tane uzman kaynak)
    * Investopedia, NIH, IEEE, NIST, vs.

═══════════════════════════════════════════════════════════════════════
ÇIKTI AKIŞI:
═══════════════════════════════════════════════════════════════════════
1. Her hesaplayıcı bittiğinde:
   git add src/calculators/{{category}}/{{slug}}/
   git commit -m "feat({{category}}): add {{slug}} calculator"

2. 5 commit + npm test (kendi worktree'inde) yeşil = bitti.

3. Bana DÖNERKEN ÖZET VER:
   - Her hesaplayıcı için kullandığın referans formül kaynağı (URL)
   - Çeviri tonunda emin olmadığın yerler (Opus bunları kontrol edecek)
   - Re-use ettiğin / oluşturduğun shared helper dosyaları
   - Karşılaştığın belirsizlikler veya kontrat boşlukları

═══════════════════════════════════════════════════════════════════════
DİKKAT EDİLECEK PERFORMANS HEDEFLERİ:
═══════════════════════════════════════════════════════════════════════
- Bundle: hesaplayıcı başına island bundle <50KB (lazy hydrate)
- Compute: <1ms typical input için
- Ağır kütüphane YASAK: moment ❌ (Intl ✅), lodash ❌ (native ✅), jquery ❌

═══════════════════════════════════════════════════════════════════════
SORUYA UĞRARSAN:
═══════════════════════════════════════════════════════════════════════
- Spec belirsizse: spec'in lafzına sıkı sıkıya bağlı kal, "tahminim" yorum yapma.
- Slug çakışıyorsa: dur, "{{slug}} zaten src/i18n/slugs/'ta var" diye raporla.
- Test yeşil değil: COMMIT ETME. Düzelt, sonra commit.
- Formül belirsiz: meta.references'a 2 kaynak ekle, ikisinde de tutarlı sonuçla
  matematik göster, yorumda "İki kaynak da X formülü kullanıyor" yaz.
```

---

## Dispatcher tarafından doldurulan alanlar

| Placeholder | Anlamı | Kaynağı |
|---|---|---|
| `{{N}}` | Batch numarası (1-20) | TaskCreate metadata |
| `{{category}}` | health/finance/engineering/math/conversion | CALCULATOR_INVENTORY.md |
| `{{worktreePath}}` | Agent'ın izole worktree absolute path | Agent isolation system |
| `{{calculators}}` | Liste of {slug, titleEn, briefEn} | INVENTORY batch tablosu |

---

## Acceptance kriterleri özet (Sonnet kendini filtrelesin)

Kendini şu sorularla denetle, hepsine "evet" değilse commit etme:

- [ ] 5 hesaplayıcının her biri için klasör tam (definition + compute + i18n + content + test)
- [ ] `npm test src/calculators/{{category}}/` yeşil
- [ ] `npm run typecheck` yeşil (en azından kendi dosyalarında error yok)
- [ ] Her i18n.ts 12 dilde, hiçbir TODO yok
- [ ] Her compute pure (eval mental: aynı input 5 kez = aynı output 5 kez)
- [ ] Her test'te en az 3 referans değerli case + kaynak yorum
- [ ] content.mdx'lerde EN+TR 500+ kelime, diğer 10 dil natural
- [ ] meta.references'ta her hesaplayıcı için ≥1 otoriter URL
- [ ] Slug çakışması yok (en.json kontrol edildi)
- [ ] Ortak dosyaya dokunulmadı (git diff bunu gösterir)

---

## Yasak prompt anti-patterns (Sonnet bunlara yenik düşmesin)

Eğer Sonnet kendine şu cümleleri söylüyorsa, yanlış yoldadır:

- "Şu helper'ı `src/lib/`'e eklersem daha temiz olur" → HAYIR, lib immutable
- "Bu bağımlılığı `package.json`'a eklemem lazım" → HAYIR, dispatcher'a sor
- "Bir hesaplayıcı için i18n'i sadece EN yazıp diğer 10 dili Faz 3'e bırakayım" → HAYIR, brief açık: 12 dil zorunlu
- "Test yazmak için zamanım yok, sonra eklenir" → HAYIR, test = APPROVE gate
- "Compute'da `fetch(API)` yapayım, daha güncel veri olur" → HAYIR, client-side static
