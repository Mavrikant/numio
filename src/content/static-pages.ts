import type { Locale } from "@/config/site";

export type StaticPageSlug = "about" | "contact" | "privacy";

export const STATIC_PAGE_SLUGS: readonly StaticPageSlug[] = [
  "about",
  "contact",
  "privacy",
];

interface StaticPageContent {
  readonly title: string;
  /** Markdown body. Rendered with prose classes. */
  readonly body: string;
}

type StaticPageBundle = {
  readonly [K in Locale]?: StaticPageContent;
};

const SUPPORT_EMAIL = "m.serdar.karaman@gmail.com";

// ─── ABOUT ────────────────────────────────────────────────────────────────────

const about: StaticPageBundle = {
  en: {
    title: "About",
    body: `Karaman Calculators is a free, multilingual collection of online calculators for everyday life — finance, health, engineering, math, and unit conversion.

## Our mission

Make accurate, well-sourced calculations available to anyone, in any language, on any device — without sign-ups, tracking, or paywalls. Every calculator cites its formula and references the standard or authority it follows.

## How it works

- **100% client-side.** Calculations run in your browser. Nothing you type is sent to any server.
- **Open formulas.** Each calculator links to the published formula or standard (WHO, NIST, IEEE, etc.) it implements.
- **12 languages.** UI, content, and number formatting all adapt to your locale.
- **Built for the web.** Static pages, fast loading, works offline once visited.

## Built by AI

This entire site — architecture, components, calculators, translations, and tests — was built and reviewed by a team of AI agents working in parallel, then merged by a coordinating agent. The process is open and documented in the repository.

## Roadmap

We are growing from a single golden-reference calculator (BMI) to 100+ calculators across all five categories. Health and finance get priority, since they're the most commonly searched.`,
  },
  tr: {
    title: "Hakkında",
    body: `Karaman Hesaplayıcılar, günlük hayat için ücretsiz, çok dilli bir çevrimiçi hesaplayıcı koleksiyonudur — finans, sağlık, mühendislik, matematik ve birim dönüşümü.

## Misyonumuz

Doğru, güvenilir kaynaklı hesaplamaları herkese, her dilde, her cihazda — kayıt, takip veya ödeme duvarı olmadan — sunmak. Her hesaplayıcı, izlediği formülü ve referans aldığı standardı veya otoriteyi belirtir.

## Nasıl çalışır

- **%100 istemci tarafı.** Hesaplamalar tarayıcınızda çalışır. Yazdıklarınızın hiçbiri sunucuya gönderilmez.
- **Açık formüller.** Her hesaplayıcı, uyguladığı yayımlanmış formüle veya standarda (WHO, NIST, IEEE, vb.) bağlantı verir.
- **12 dil.** Arayüz, içerik ve sayı biçimlendirmesi diliniz için uyarlanır.
- **Web için tasarlandı.** Statik sayfalar, hızlı yükleme, ilk ziyaretten sonra çevrimdışı çalışır.

## Yapay zekâ ile inşa edildi

Bu sitenin tamamı — mimari, bileşenler, hesaplayıcılar, çeviriler ve testler — paralel çalışan bir yapay zekâ ajanı ekibi tarafından oluşturuldu ve incelendi, sonra bir koordinatör ajan tarafından birleştirildi. Süreç açık ve depo içinde belgelenmiştir.

## Yol haritası

Tek bir altın referans hesaplayıcıdan (VKİ) başlayarak beş kategorinin tamamında 100+ hesaplayıcıya ulaşacağız. Sağlık ve finans öncelikli, çünkü en çok aranan kategoriler.`,
  },
};

// ─── CONTACT ──────────────────────────────────────────────────────────────────

const contact: StaticPageBundle = {
  en: {
    title: "Contact",
    body: `We'd love to hear from you — questions, corrections, calculator requests, or partnership ideas.

## Email

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

We read every message. Please allow a few days for a reply.

## Report a problem

If a calculator gives a wrong answer, please include:

1. The calculator name and URL
2. The inputs you used
3. The result you got and the result you expected
4. The source you're comparing against (Wikipedia, textbook, official standard)

We treat numerical accuracy as a bug, not an opinion — a confirmed mistake gets fixed and the test suite updated.

## Suggest a calculator

Tell us what calculator you wish existed. Helpful details:

- What problem does it solve?
- Who would use it?
- Do you have a link to an authoritative formula or standard?

## Press / partnerships

For press, embeds, or partnership inquiries, email the address above with **[Partnership]** in the subject line.`,
  },
  tr: {
    title: "İletişim",
    body: `Sizden haber almak isteriz — sorular, düzeltmeler, hesaplayıcı istekleri veya iş birliği fikirleri.

## E-posta

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

Her mesajı okuyoruz. Yanıt için birkaç gün izin verin lütfen.

## Bir sorun bildirin

Bir hesaplayıcı yanlış sonuç veriyorsa, lütfen şunları belirtin:

1. Hesaplayıcının adı ve URL'si
2. Girdiğiniz değerler
3. Aldığınız sonuç ve beklediğiniz sonuç
4. Karşılaştırdığınız kaynak (Wikipedia, ders kitabı, resmi standart)

Sayısal doğruluğu fikir değil hata olarak görüyoruz — doğrulanan bir hata düzeltilir ve test takımı güncellenir.

## Bir hesaplayıcı önerin

Olmasını istediğiniz hesaplayıcıyı bize söyleyin. Yararlı ayrıntılar:

- Hangi problemi çözer?
- Kim kullanır?
- Yetkili bir formül veya standart bağlantınız var mı?

## Basın / iş birliği

Basın, gömme veya iş birliği talepleri için yukarıdaki adrese **[İş birliği]** konulu bir e-posta gönderin.`,
  },
};

// ─── PRIVACY ──────────────────────────────────────────────────────────────────

const privacy: StaticPageBundle = {
  en: {
    title: "Privacy Policy",
    body: `Last reviewed: 2026

We respect your privacy. This page explains exactly what we do — and don't — with your data.

## What we collect

**Nothing you type into a calculator leaves your browser.** All computation happens locally on your device. Inputs and results are never transmitted to our servers.

We do collect:

- **Anonymous traffic analytics** — only if you accept the analytics cookie. Counts page views and locale popularity. No personal identifiers, no cross-site tracking.
- **Advertising cookies** — only if you accept the ads cookie. Used by Google AdSense to show relevant ads.
- **Essential cookies** — your theme preference (light/dark/auto) and your consent choice. Never optional; the site can't function without them.

## Cookie banner

You see a banner on your first visit. You can accept all, reject all, or customize. Your choice is stored for 30 days, then re-asked.

## Third parties

When you accept advertising:

- **Google AdSense** may set cookies and read your IP address. See [Google's Privacy Policy](https://policies.google.com/privacy).

We don't use Facebook Pixel, TikTok, Hotjar, or any social-media tracker.

## Your rights (GDPR / CCPA)

You can:

- Withdraw consent any time via the cookie banner (a "Reset cookies" link in the footer will appear after consent)
- Request what data we have about you — though, since we collect no personal data, the answer is usually "none"
- Request deletion of analytics data tied to your session

Email [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) with any privacy request.

## Children

This site is not directed at children under 13. We don't knowingly collect data from anyone under 13.

## Changes

If we change this policy, we'll re-show the cookie banner with a clearly marked version bump so you can re-review your choices.`,
  },
  tr: {
    title: "Gizlilik Politikası",
    body: `Son inceleme: 2026

Gizliliğinize saygı duyuyoruz. Bu sayfa, verilerinizle tam olarak ne yaptığımızı — ve neyi yapmadığımızı — açıklar.

## Topladıklarımız

**Bir hesaplayıcıya yazdığınız hiçbir şey tarayıcınızdan dışarı çıkmaz.** Tüm hesaplamalar cihazınızda yerel olarak gerçekleşir. Girdiler ve sonuçlar asla sunucularımıza iletilmez.

Topladıklarımız:

- **Anonim trafik analizi** — yalnızca analitik çerezini kabul ederseniz. Sayfa görüntülemeleri ve dil popülerliğini sayar. Kişisel tanımlayıcı yok, siteler arası takip yok.
- **Reklam çerezleri** — yalnızca reklam çerezini kabul ederseniz. Google AdSense tarafından ilgili reklamları göstermek için kullanılır.
- **Zorunlu çerezler** — tema tercihiniz (açık/koyu/otomatik) ve onay seçiminiz. Asla isteğe bağlı değildir; site bunlar olmadan çalışamaz.

## Çerez bildirimi

İlk ziyaretinizde bir bildirim görürsünüz. Hepsini kabul edebilir, hepsini reddedebilir veya özelleştirebilirsiniz. Seçiminiz 30 gün boyunca saklanır, sonra yeniden sorulur.

## Üçüncü taraflar

Reklamı kabul ettiğinizde:

- **Google AdSense** çerezler yerleştirebilir ve IP adresinizi okuyabilir. [Google'ın Gizlilik Politikasına](https://policies.google.com/privacy) bakın.

Facebook Pixel, TikTok, Hotjar veya başka herhangi bir sosyal medya izleyicisi kullanmıyoruz.

## Haklarınız (GDPR / KVKK)

Şunları yapabilirsiniz:

- Çerez bildirimi üzerinden herhangi bir zamanda onayınızı geri çekin (onaydan sonra footer'da "Çerezleri sıfırla" bağlantısı görünecektir)
- Hakkınızda hangi verilere sahip olduğumuzu sorun — kişisel veri toplamadığımız için yanıt genellikle "hiçbir" olur
- Oturumunuza bağlı analitik verilerin silinmesini talep edin

Gizlilikle ilgili her türlü talep için [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) adresine e-posta gönderin.

## Çocuklar

Bu site 13 yaş altı çocuklara yönelik değildir. 13 yaşın altındaki kişilerden bilerek veri toplamayız.

## Değişiklikler

Bu politikayı değiştirirsek, seçimlerinizi yeniden gözden geçirebilmeniz için açıkça işaretlenmiş bir sürüm yükseltmesiyle çerez bildirimini yeniden göstereceğiz.`,
  },
};

// ─── Registry ─────────────────────────────────────────────────────────────────

const PAGES: Record<StaticPageSlug, StaticPageBundle> = {
  about,
  contact,
  privacy,
};

export function getStaticPage(
  slug: StaticPageSlug,
  locale: Locale,
): StaticPageContent {
  const bundle = PAGES[slug];
  return bundle[locale] ?? bundle.en!;
}

export function isStaticPageSlug(value: string): value is StaticPageSlug {
  return (STATIC_PAGE_SLUGS as readonly string[]).includes(value);
}
