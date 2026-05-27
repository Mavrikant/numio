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
    body: `numio is a free, multilingual collection of online calculators for everyday life — finance, health, engineering, math, and unit conversion.

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
    body: `numio, günlük hayat için ücretsiz, çok dilli bir çevrimiçi hesaplayıcı koleksiyonudur — finans, sağlık, mühendislik, matematik ve birim dönüşümü.

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
  de: {
    title: "Über uns",
    body: `numio ist eine kostenlose, mehrsprachige Sammlung von Online-Rechnern für den Alltag — Finanzen, Gesundheit, Technik, Mathematik und Einheitenumrechnung.

## Unsere Mission

Genaue, gut belegte Berechnungen jedem zugänglich machen — in jeder Sprache, auf jedem Gerät — ohne Anmeldung, Tracking oder Bezahlschranken. Jeder Rechner gibt seine Formel und den Standard oder die Behörde an, auf die er sich stützt.

## Wie es funktioniert

- **100% clientseitig.** Berechnungen laufen in Ihrem Browser. Nichts, was Sie eingeben, wird an einen Server gesendet.
- **Offene Formeln.** Jeder Rechner verlinkt auf die veröffentlichte Formel oder den Standard (WHO, NIST, IEEE usw.), den er implementiert.
- **12 Sprachen.** Benutzeroberfläche, Inhalte und Zahlenformatierung passen sich Ihrem Gebietsschema an.
- **Für das Web gebaut.** Statische Seiten, schnelles Laden, funktioniert offline nach dem ersten Besuch.

## Von KI gebaut

Diese gesamte Website — Architektur, Komponenten, Rechner, Übersetzungen und Tests — wurde von einem Team von KI-Agenten erstellt und überprüft, das parallel arbeitet, und dann von einem koordinierenden Agenten zusammengeführt. Der Prozess ist offen und im Repository dokumentiert.

## Roadmap

Wir wachsen von einem einzigen Goldstandard-Rechner (BMI) auf 100+ Rechner in allen fünf Kategorien. Gesundheit und Finanzen haben Priorität, da sie am häufigsten gesucht werden.`,
  },
  fr: {
    title: "À propos",
    body: `numio est une collection gratuite et multilingue de calculateurs en ligne pour la vie quotidienne — finances, santé, ingénierie, mathématiques et conversion d'unités.

## Notre mission

Rendre des calculs précis et bien sourcés accessibles à tous, dans n'importe quelle langue, sur n'importe quel appareil — sans inscription, sans suivi, sans abonnement payant. Chaque calculateur cite sa formule et la norme ou l'autorité qu'il suit.

## Comment ça fonctionne

- **100% côté client.** Les calculs s'exécutent dans votre navigateur. Rien de ce que vous tapez n'est envoyé à un serveur.
- **Formules ouvertes.** Chaque calculateur renvoie vers la formule ou la norme publiée (OMS, NIST, IEEE, etc.) qu'il implémente.
- **12 langues.** L'interface, le contenu et le formatage des nombres s'adaptent à votre langue.
- **Conçu pour le web.** Pages statiques, chargement rapide, fonctionne hors ligne après la première visite.

## Construit par l'IA

L'intégralité de ce site — architecture, composants, calculateurs, traductions et tests — a été construite et révisée par une équipe d'agents d'IA travaillant en parallèle, puis fusionnée par un agent coordinateur. Le processus est ouvert et documenté dans le dépôt.

## Feuille de route

Nous passons d'un seul calculateur de référence (IMC) à 100+ calculateurs dans les cinq catégories. La santé et les finances sont prioritaires, car ce sont les plus recherchées.`,
  },
  es: {
    title: "Acerca de",
    body: `numio es una colección gratuita y multilingüe de calculadoras en línea para la vida cotidiana — finanzas, salud, ingeniería, matemáticas y conversión de unidades.

## Nuestra misión

Hacer que los cálculos precisos y bien documentados estén disponibles para todos, en cualquier idioma, en cualquier dispositivo — sin registros, sin seguimiento, sin barreras de pago. Cada calculadora cita su fórmula y el estándar o autoridad que sigue.

## Cómo funciona

- **100% del lado del cliente.** Los cálculos se ejecutan en tu navegador. Nada de lo que escribes se envía a ningún servidor.
- **Fórmulas abiertas.** Cada calculadora enlaza a la fórmula o estándar publicado (OMS, NIST, IEEE, etc.) que implementa.
- **12 idiomas.** La interfaz, el contenido y el formato de números se adaptan a tu idioma.
- **Construido para la web.** Páginas estáticas, carga rápida, funciona sin conexión después de la primera visita.

## Construido por IA

Todo este sitio — arquitectura, componentes, calculadoras, traducciones y pruebas — fue construido y revisado por un equipo de agentes de IA trabajando en paralelo, luego fusionado por un agente coordinador. El proceso es abierto y está documentado en el repositorio.

## Hoja de ruta

Estamos creciendo desde una única calculadora de referencia dorada (IMC) hasta 100+ calculadoras en las cinco categorías. La salud y las finanzas tienen prioridad, ya que son las más buscadas.`,
  },
  it: {
    title: "Chi siamo",
    body: `numio è una raccolta gratuita e multilingue di calcolatori online per la vita quotidiana — finanza, salute, ingegneria, matematica e conversione di unità.

## La nostra missione

Rendere calcoli accurati e ben documentati accessibili a tutti, in qualsiasi lingua, su qualsiasi dispositivo — senza registrazioni, senza tracciamento, senza paywall. Ogni calcolatore cita la sua formula e lo standard o l'autorità che segue.

## Come funziona

- **100% lato client.** I calcoli vengono eseguiti nel tuo browser. Nulla di ciò che digiti viene inviato a nessun server.
- **Formule aperte.** Ogni calcolatore rimanda alla formula o allo standard pubblicato (OMS, NIST, IEEE, ecc.) che implementa.
- **12 lingue.** L'interfaccia, il contenuto e la formattazione dei numeri si adattano alla tua lingua.
- **Costruito per il web.** Pagine statiche, caricamento veloce, funziona offline dopo la prima visita.

## Costruito dall'IA

L'intero sito — architettura, componenti, calcolatori, traduzioni e test — è stato costruito e revisionato da un team di agenti IA che lavorano in parallelo, poi unificato da un agente coordinatore. Il processo è aperto e documentato nel repository.

## Roadmap

Stiamo crescendo da un unico calcolatore di riferimento (IMC) a 100+ calcolatori in tutte e cinque le categorie. Salute e finanza hanno la priorità, essendo le più ricercate.`,
  },
  ar: {
    title: "حول",
    body: `numio هو مجموعة مجانية متعددة اللغات من الآلات الحاسبة عبر الإنترنت للحياة اليومية — المالية والصحة والهندسة والرياضيات وتحويل الوحدات.

## مهمتنا

جعل الحسابات الدقيقة والموثقة جيداً متاحة للجميع، بأي لغة، على أي جهاز — بدون تسجيل، بدون تتبع، بدون حواجز للدفع. تستشهد كل حاسبة بصيغتها والمعيار أو الجهة التي تتبعها.

## كيف يعمل

- **100% من جانب العميل.** تعمل الحسابات في متصفحك. لا شيء مما تكتبه يُرسل إلى أي خادم.
- **صيغ مفتوحة.** ترتبط كل حاسبة بالصيغة أو المعيار المنشور (منظمة الصحة العالمية، NIST، IEEE، إلخ) الذي تنفذه.
- **12 لغة.** تتكيف الواجهة والمحتوى وتنسيق الأرقام مع لغتك.
- **مبني للويب.** صفحات ثابتة، تحميل سريع، يعمل دون اتصال بعد الزيارة الأولى.

## مبني بالذكاء الاصطناعي

تم بناء هذا الموقع بالكامل — البنية والمكونات والحاسبات والترجمات والاختبارات — ومراجعته من قِبل فريق من وكلاء الذكاء الاصطناعي يعملون بالتوازي، ثم دمجه بواسطة وكيل منسق. العملية مفتوحة وموثقة في المستودع.

## خارطة الطريق

ننمو من حاسبة مرجعية واحدة (مؤشر كتلة الجسم) إلى أكثر من 100 حاسبة في جميع الفئات الخمس. الصحة والمالية لها الأولوية، لأنها الأكثر بحثاً.`,
  },
  ru: {
    title: "О нас",
    body: `numio — это бесплатная многоязычная коллекция онлайн-калькуляторов для повседневной жизни — финансы, здоровье, инженерия, математика и конвертация единиц.

## Наша миссия

Сделать точные, хорошо обоснованные расчёты доступными для всех, на любом языке, на любом устройстве — без регистрации, отслеживания или платных барьеров. Каждый калькулятор ссылается на свою формулу и стандарт или орган, которому он следует.

## Как это работает

- **100% на стороне клиента.** Вычисления выполняются в вашем браузере. Ничто из того, что вы вводите, не отправляется ни на один сервер.
- **Открытые формулы.** Каждый калькулятор ссылается на опубликованную формулу или стандарт (ВОЗ, NIST, IEEE и т.д.), который он реализует.
- **12 языков.** Интерфейс, содержание и форматирование чисел адаптируются к вашей языковой среде.
- **Создан для веба.** Статические страницы, быстрая загрузка, работает офлайн после первого посещения.

## Создан с помощью ИИ

Весь этот сайт — архитектура, компоненты, калькуляторы, переводы и тесты — был создан и проверен командой агентов ИИ, работающих параллельно, а затем объединён координирующим агентом. Процесс открыт и задокументирован в репозитории.

## Дорожная карта

Мы растём от одного эталонного калькулятора (ИМТ) до 100+ калькуляторов во всех пяти категориях. Здоровье и финансы в приоритете, так как они наиболее часто ищут.`,
  },
  zh: {
    title: "关于",
    body: `numio 是一个免费的多语言在线计算器集合，服务于日常生活 — 金融、健康、工程、数学和单位换算。

## 我们的使命

让精准、有据可查的计算对所有人开放，无论使用何种语言、何种设备 — 无需注册、无追踪、无付费墙。每个计算器都引用其公式及所遵循的标准或权威机构。

## 工作原理

- **100% 客户端运行。** 计算在您的浏览器中运行。您输入的任何内容都不会发送到任何服务器。
- **开放公式。** 每个计算器都链接到其实现的已发布公式或标准（WHO、NIST、IEEE 等）。
- **12 种语言。** 界面、内容和数字格式均适应您的语言环境。
- **为网络而生。** 静态页面、快速加载，首次访问后可离线使用。

## 由 AI 构建

整个网站 — 架构、组件、计算器、翻译和测试 — 由并行工作的 AI 代理团队构建和审查，然后由协调代理合并。该过程是开放的，并在存储库中有记录。

## 路线图

我们正在从单一的黄金参考计算器（BMI）扩展到五个类别中的 100 多个计算器。健康和金融优先，因为它们是搜索最频繁的类别。`,
  },
  ja: {
    title: "概要",
    body: `numio は、日常生活のための無料の多言語オンライン計算ツールのコレクションです — 金融、健康、工学、数学、単位換算。

## 私たちのミッション

正確で十分な根拠を持つ計算を、あらゆる言語、あらゆるデバイスで誰でも利用できるようにすること — サインアップ、追跡、ペイウォールなし。各計算ツールは数式と参照する基準や機関を明示しています。

## 仕組み

- **100% クライアントサイド。** 計算はブラウザ内で実行されます。入力した内容はどのサーバーにも送信されません。
- **オープンな数式。** 各計算ツールは実装する公開された数式または基準（WHO、NIST、IEEE等）にリンクしています。
- **12言語対応。** UI、コンテンツ、数値フォーマットがすべてお使いのロケールに適応します。
- **Web向けに構築。** 静的ページ、高速読み込み、初回訪問後はオフラインで動作。

## AIによって構築

このサイト全体 — アーキテクチャ、コンポーネント、計算ツール、翻訳、テスト — は並行して作業するAIエージェントチームによって構築・レビューされ、その後コーディネーターエージェントによってマージされました。プロセスはオープンでリポジトリに記録されています。

## ロードマップ

単一のゴールデンリファレンス計算ツール（BMI）から、5つすべてのカテゴリにわたる100以上の計算ツールへと成長しています。健康と金融が最も検索されるため優先されます。`,
  },
  ko: {
    title: "소개",
    body: `numio는 일상생활을 위한 무료 다국어 온라인 계산기 모음입니다 — 금융, 건강, 공학, 수학, 단위 변환.

## 우리의 사명

정확하고 근거가 충분한 계산을 누구나, 어떤 언어로든, 어떤 기기에서든 이용할 수 있게 하는 것 — 회원가입, 추적, 유료 장벽 없이. 각 계산기는 수식과 따르는 표준 또는 기관을 명시합니다.

## 작동 방식

- **100% 클라이언트 사이드.** 계산은 브라우저에서 실행됩니다. 입력한 내용은 어떤 서버에도 전송되지 않습니다.
- **공개 수식.** 각 계산기는 구현하는 공개된 수식 또는 표준(WHO, NIST, IEEE 등)에 링크합니다.
- **12개 언어.** UI, 콘텐츠, 숫자 형식이 모두 사용자의 로케일에 맞게 조정됩니다.
- **웹을 위해 제작.** 정적 페이지, 빠른 로딩, 첫 방문 후 오프라인에서도 작동.

## AI로 구축됨

이 전체 사이트 — 아키텍처, 컴포넌트, 계산기, 번역, 테스트 — 는 병렬로 작업하는 AI 에이전트 팀에 의해 구축 및 검토되었으며, 그 후 조정 에이전트에 의해 병합되었습니다. 프로세스는 공개되어 있으며 저장소에 문서화되어 있습니다.

## 로드맵

단일 황금 참조 계산기(BMI)에서 5개 카테고리 전반에 걸쳐 100개 이상의 계산기로 성장하고 있습니다. 건강과 금융이 가장 많이 검색되기 때문에 우선순위가 높습니다.`,
  },
  hi: {
    title: "हमारे बारे में",
    body: `numio रोज़मर्रा की ज़िंदगी के लिए मुफ़्त, बहुभाषी ऑनलाइन कैलकुलेटर का एक संग्रह है — वित्त, स्वास्थ्य, इंजीनियरिंग, गणित और इकाई रूपांतरण।

## हमारा मिशन

सटीक, अच्छी तरह से स्रोत-संबद्ध गणनाओं को सभी के लिए, किसी भी भाषा में, किसी भी डिवाइस पर उपलब्ध कराना — बिना साइन-अप, बिना ट्रैकिंग, बिना पेवॉल के। प्रत्येक कैलकुलेटर अपना सूत्र और जिस मानक या प्राधिकरण का वह अनुसरण करता है, उसका हवाला देता है।

## यह कैसे काम करता है

- **100% क्लाइंट-साइड।** गणनाएं आपके ब्राउज़र में चलती हैं। आप जो कुछ भी टाइप करते हैं वह किसी भी सर्वर पर नहीं भेजा जाता।
- **खुले सूत्र।** प्रत्येक कैलकुलेटर प्रकाशित सूत्र या मानक (WHO, NIST, IEEE, आदि) से जोड़ता है जिसे वह लागू करता है।
- **12 भाषाएं।** UI, सामग्री और संख्या प्रारूपण सभी आपकी लोकेल के अनुसार अनुकूलित होते हैं।
- **वेब के लिए बनाया गया।** स्थैतिक पृष्ठ, तेज़ लोडिंग, पहली यात्रा के बाद ऑफ़लाइन काम करता है।

## AI द्वारा निर्मित

यह पूरी साइट — आर्किटेक्चर, कंपोनेंट, कैलकुलेटर, अनुवाद और परीक्षण — AI एजेंटों की एक टीम द्वारा समानांतर में काम करते हुए बनाई और समीक्षा की गई, फिर एक समन्वय एजेंट द्वारा मर्ज की गई। प्रक्रिया खुली है और रिपॉजिटरी में दस्तावेज़ीकृत है।

## रोडमैप

हम एक एकल सुनहरे संदर्भ कैलकुलेटर (BMI) से सभी पांच श्रेणियों में 100+ कैलकुलेटर तक बढ़ रहे हैं। स्वास्थ्य और वित्त को प्राथमिकता मिलती है, क्योंकि वे सबसे अधिक खोजे जाते हैं।`,
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
  de: {
    title: "Kontakt",
    body: `Wir freuen uns von Ihnen zu hören — Fragen, Korrekturen, Rechneranfragen oder Partnerschaftsideen.

## E-Mail

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

Wir lesen jede Nachricht. Bitte erlauben Sie einige Tage für eine Antwort.

## Ein Problem melden

Wenn ein Rechner ein falsches Ergebnis liefert, geben Sie bitte an:

1. Den Rechnernamen und die URL
2. Die von Ihnen verwendeten Eingaben
3. Das erhaltene Ergebnis und das erwartete Ergebnis
4. Die Quelle, mit der Sie vergleichen (Wikipedia, Lehrbuch, offizieller Standard)

Wir behandeln numerische Genauigkeit als Fehler, nicht als Meinung — ein bestätigter Fehler wird behoben und die Testsuite aktualisiert.

## Einen Rechner vorschlagen

Teilen Sie uns mit, welchen Rechner Sie sich wünschen. Hilfreiche Details:

- Welches Problem löst er?
- Wer würde ihn nutzen?
- Haben Sie einen Link zu einer maßgeblichen Formel oder einem Standard?

## Presse / Partnerschaften

Für Presse-, Einbettungs- oder Partnerschaftsanfragen senden Sie eine E-Mail an die obige Adresse mit **[Partnerschaft]** in der Betreffzeile.`,
  },
  fr: {
    title: "Contact",
    body: `Nous serions ravis de vous entendre — questions, corrections, demandes de calculateurs ou idées de partenariat.

## E-mail

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

Nous lisons chaque message. Veuillez prévoir quelques jours pour une réponse.

## Signaler un problème

Si un calculateur donne une mauvaise réponse, veuillez inclure :

1. Le nom du calculateur et l'URL
2. Les valeurs que vous avez utilisées
3. Le résultat obtenu et le résultat attendu
4. La source avec laquelle vous comparez (Wikipedia, manuel, norme officielle)

Nous traitons la précision numérique comme un bug, pas comme une opinion — une erreur confirmée est corrigée et la suite de tests mise à jour.

## Suggérer un calculateur

Dites-nous quel calculateur vous aimeriez voir exister. Détails utiles :

- Quel problème résout-il ?
- Qui l'utiliserait ?
- Avez-vous un lien vers une formule ou un standard faisant autorité ?

## Presse / partenariats

Pour les demandes de presse, d'intégration ou de partenariat, envoyez un e-mail à l'adresse ci-dessus avec **[Partenariat]** dans l'objet.`,
  },
  es: {
    title: "Contacto",
    body: `Nos encantaría saber de ti — preguntas, correcciones, solicitudes de calculadoras o ideas de asociación.

## Correo electrónico

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

Leemos cada mensaje. Por favor, espera unos días para recibir respuesta.

## Reportar un problema

Si una calculadora da una respuesta incorrecta, por favor incluye:

1. El nombre de la calculadora y la URL
2. Los valores que usaste
3. El resultado que obtuviste y el resultado que esperabas
4. La fuente con la que estás comparando (Wikipedia, libro de texto, estándar oficial)

Tratamos la precisión numérica como un error, no como una opinión — un error confirmado se corrige y se actualiza la suite de pruebas.

## Sugerir una calculadora

Cuéntanos qué calculadora desearías que existiera. Detalles útiles:

- ¿Qué problema resuelve?
- ¿Quién la usaría?
- ¿Tienes un enlace a una fórmula o estándar autorizado?

## Prensa / asociaciones

Para consultas de prensa, integración o asociación, envía un correo a la dirección anterior con **[Asociación]** en el asunto.`,
  },
  it: {
    title: "Contatti",
    body: `Ci farebbe piacere sentirti — domande, correzioni, richieste di calcolatori o idee di partnership.

## E-mail

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

Leggiamo ogni messaggio. Si prega di concedere qualche giorno per una risposta.

## Segnala un problema

Se un calcolatore fornisce una risposta errata, includi:

1. Il nome del calcolatore e l'URL
2. I valori che hai utilizzato
3. Il risultato ottenuto e il risultato atteso
4. La fonte con cui stai confrontando (Wikipedia, libro di testo, standard ufficiale)

Trattiamo l'accuratezza numerica come un bug, non come un'opinione — un errore confermato viene corretto e la suite di test aggiornata.

## Suggerisci un calcolatore

Dicci quale calcolatore vorresti esistesse. Dettagli utili:

- Quale problema risolve?
- Chi lo userebbe?
- Hai un link a una formula o standard autorevole?

## Stampa / partnership

Per richieste di stampa, incorporamento o partnership, invia un'e-mail all'indirizzo sopra con **[Partnership]** nell'oggetto.`,
  },
  ar: {
    title: "اتصل بنا",
    body: `يسعدنا سماع منك — أسئلة أو تصحيحات أو طلبات حاسبات أو أفكار شراكة.

## البريد الإلكتروني

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

نقرأ كل رسالة. يُرجى السماح ببضعة أيام للرد.

## الإبلاغ عن مشكلة

إذا أعطت حاسبة إجابة خاطئة، يُرجى تضمين:

1. اسم الحاسبة والرابط
2. القيم التي استخدمتها
3. النتيجة التي حصلت عليها والنتيجة التي توقعتها
4. المصدر الذي تقارن به (ويكيبيديا، كتاب مدرسي، معيار رسمي)

نتعامل مع الدقة العددية كخطأ برمجي وليس رأياً — الخطأ المؤكد يُصحح وتُحدَّث مجموعة الاختبارات.

## اقترح حاسبة

أخبرنا بالحاسبة التي تتمنى وجودها. تفاصيل مفيدة:

- ما المشكلة التي تحلها؟
- من سيستخدمها؟
- هل لديك رابط لصيغة أو معيار موثوق؟

## الصحافة / الشراكات

لاستفسارات الصحافة أو التضمين أو الشراكة، أرسل بريداً إلكترونياً على العنوان أعلاه مع **[شراكة]** في سطر الموضوع.`,
  },
  ru: {
    title: "Контакты",
    body: `Мы будем рады услышать от вас — вопросы, исправления, запросы калькуляторов или идеи партнёрства.

## Электронная почта

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

Мы читаем каждое сообщение. Пожалуйста, подождите несколько дней для ответа.

## Сообщить о проблеме

Если калькулятор даёт неверный ответ, пожалуйста, укажите:

1. Название калькулятора и URL
2. Использованные вами входные данные
3. Полученный результат и ожидаемый результат
4. Источник, с которым вы сравниваете (Википедия, учебник, официальный стандарт)

Мы рассматриваем числовую точность как ошибку, а не как мнение — подтверждённая ошибка исправляется и набор тестов обновляется.

## Предложить калькулятор

Расскажите нам, какой калькулятор вы хотели бы видеть. Полезные детали:

- Какую проблему он решает?
- Кто будет его использовать?
- Есть ли у вас ссылка на авторитетную формулу или стандарт?

## Пресса / партнёрства

По вопросам прессы, встраивания или партнёрства отправьте письмо на указанный адрес с **[Партнёрство]** в теме.`,
  },
  zh: {
    title: "联系我们",
    body: `我们很乐意听到您的声音 — 问题、更正、计算器请求或合作想法。

## 电子邮件

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

我们阅读每一条消息。请允许几天时间回复。

## 报告问题

如果计算器给出了错误答案，请包括：

1. 计算器名称和 URL
2. 您使用的输入值
3. 您得到的结果和您期望的结果
4. 您比较的来源（维基百科、教科书、官方标准）

我们将数值准确性视为错误，而非观点 — 确认的错误会被修复，测试套件也会更新。

## 建议一个计算器

告诉我们您希望存在什么计算器。有用的细节：

- 它解决什么问题？
- 谁会使用它？
- 您有权威公式或标准的链接吗？

## 媒体 / 合作

有关媒体、嵌入或合作咨询，请发送电子邮件至上述地址，并在主题行中注明 **[合作]**。`,
  },
  ja: {
    title: "お問い合わせ",
    body: `ご意見をお待ちしております — ご質問、修正、計算ツールのリクエスト、パートナーシップのアイデアなど。

## メール

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

すべてのメッセージを拝読しています。返信には数日かかる場合があります。

## 問題を報告する

計算ツールが間違った答えを出した場合は、以下をご記入ください：

1. 計算ツールの名前とURL
2. 使用した入力値
3. 得られた結果と期待した結果
4. 比較している情報源（Wikipedia、教科書、公式標準）

数値の正確性はバグとして扱います。意見ではありません — 確認されたミスは修正され、テストスイートが更新されます。

## 計算ツールを提案する

どんな計算ツールが欲しいかお知らせください。役立つ詳細：

- どんな問題を解決しますか？
- 誰が使いますか？
- 権威ある数式または標準へのリンクはありますか？

## プレス / パートナーシップ

プレス、埋め込み、またはパートナーシップのお問い合わせは、上記のアドレスに **[パートナーシップ]** を件名に含めてメールを送ってください。`,
  },
  ko: {
    title: "문의",
    body: `여러분의 의견을 듣고 싶습니다 — 질문, 수정 사항, 계산기 요청 또는 파트너십 아이디어.

## 이메일

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

모든 메시지를 읽습니다. 답변까지 며칠이 걸릴 수 있습니다.

## 문제 신고

계산기가 잘못된 답을 제공하면 다음을 포함해 주세요:

1. 계산기 이름과 URL
2. 사용한 입력값
3. 얻은 결과와 기대한 결과
4. 비교하는 출처 (위키피디아, 교과서, 공식 표준)

수치 정확성을 의견이 아닌 버그로 취급합니다 — 확인된 실수는 수정되고 테스트 스위트가 업데이트됩니다.

## 계산기 제안

있었으면 하는 계산기를 알려 주세요. 도움이 되는 세부 정보:

- 어떤 문제를 해결합니까?
- 누가 사용합니까?
- 권위 있는 공식이나 표준으로의 링크가 있습니까?

## 언론 / 파트너십

언론, 임베드 또는 파트너십 문의는 위 주소로 제목에 **[파트너십]**을 포함하여 이메일을 보내 주세요.`,
  },
  hi: {
    title: "संपर्क",
    body: `हम आपसे सुनना पसंद करेंगे — प्रश्न, सुधार, कैलकुलेटर अनुरोध, या साझेदारी विचार।

## ईमेल

**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})**

हम हर संदेश पढ़ते हैं। कृपया उत्तर के लिए कुछ दिन प्रतीक्षा करें।

## एक समस्या रिपोर्ट करें

यदि कोई कैलकुलेटर गलत उत्तर देता है, तो कृपया शामिल करें:

1. कैलकुलेटर का नाम और URL
2. आपके द्वारा उपयोग किए गए इनपुट
3. आपको मिला परिणाम और आपने जो परिणाम अपेक्षित किया था
4. वह स्रोत जिससे आप तुलना कर रहे हैं (विकिपीडिया, पाठ्यपुस्तक, आधिकारिक मानक)

हम संख्यात्मक सटीकता को राय नहीं, बल्कि एक बग के रूप में मानते हैं — एक पुष्टि की गई गलती ठीक की जाती है और परीक्षण सूट अपडेट किया जाता है।

## एक कैलकुलेटर सुझाएं

हमें बताएं कि आप कौन सा कैलकुलेटर चाहते हैं। उपयोगी विवरण:

- यह किस समस्या को हल करता है?
- इसे कौन उपयोग करेगा?
- क्या आपके पास किसी आधिकारिक सूत्र या मानक का लिंक है?

## प्रेस / साझेदारी

प्रेस, एम्बेड, या साझेदारी पूछताछ के लिए, ऊपर दिए गए पते पर विषय पंक्ति में **[साझेदारी]** के साथ ईमेल करें।`,
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
  de: {
    title: "Datenschutzerklärung",
    body: `Zuletzt überprüft: 2026

Wir respektieren Ihre Privatsphäre. Diese Seite erklärt genau, was wir mit Ihren Daten tun — und was nicht.

## Was wir sammeln

**Nichts, was Sie in einen Rechner eingeben, verlässt Ihren Browser.** Alle Berechnungen erfolgen lokal auf Ihrem Gerät. Eingaben und Ergebnisse werden niemals an unsere Server übertragen.

Wir sammeln:

- **Anonyme Verkehrsanalysen** — nur wenn Sie das Analyse-Cookie akzeptieren. Zählt Seitenaufrufe und Sprachpopularität. Keine persönlichen Kennungen, kein Cross-Site-Tracking.
- **Werbe-Cookies** — nur wenn Sie das Werbe-Cookie akzeptieren. Wird von Google AdSense verwendet, um relevante Werbung anzuzeigen.
- **Essenzielle Cookies** — Ihre Design-Einstellung (hell/dunkel/auto) und Ihre Einwilligungswahl. Nie optional; die Website kann ohne sie nicht funktionieren.

## Cookie-Banner

Sie sehen beim ersten Besuch ein Banner. Sie können alles akzeptieren, alles ablehnen oder anpassen. Ihre Wahl wird 30 Tage gespeichert, dann erneut gefragt.

## Dritte

Wenn Sie Werbung akzeptieren:

- **Google AdSense** kann Cookies setzen und Ihre IP-Adresse lesen. Siehe [Googles Datenschutzerklärung](https://policies.google.com/privacy).

Wir verwenden kein Facebook Pixel, TikTok, Hotjar oder einen anderen Social-Media-Tracker.

## Ihre Rechte (DSGVO / CCPA)

Sie können:

- Die Einwilligung jederzeit über das Cookie-Banner widerrufen (nach der Einwilligung erscheint ein "Cookies zurücksetzen"-Link in der Fußzeile)
- Anfragen, welche Daten wir über Sie haben — da wir keine persönlichen Daten sammeln, lautet die Antwort normalerweise "keine"
- Löschung von Analysedaten Ihrer Sitzung beantragen

Senden Sie eine E-Mail an [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) für alle Datenschutzanfragen.

## Kinder

Diese Website richtet sich nicht an Kinder unter 13 Jahren. Wir sammeln wissentlich keine Daten von Personen unter 13 Jahren.

## Änderungen

Wenn wir diese Richtlinie ändern, zeigen wir das Cookie-Banner erneut mit einem klar gekennzeichneten Versionsupdate an, damit Sie Ihre Entscheidungen erneut überprüfen können.`,
  },
  fr: {
    title: "Politique de confidentialité",
    body: `Dernière révision : 2026

Nous respectons votre vie privée. Cette page explique exactement ce que nous faisons — et ne faisons pas — avec vos données.

## Ce que nous collectons

**Rien de ce que vous tapez dans un calculateur ne quitte votre navigateur.** Tous les calculs se font localement sur votre appareil. Les saisies et les résultats ne sont jamais transmis à nos serveurs.

Nous collectons :

- **Des analyses de trafic anonymes** — uniquement si vous acceptez le cookie analytique. Compte les pages vues et la popularité des langues. Aucun identifiant personnel, aucun suivi cross-site.
- **Des cookies publicitaires** — uniquement si vous acceptez le cookie publicitaire. Utilisés par Google AdSense pour afficher des publicités pertinentes.
- **Des cookies essentiels** — votre préférence de thème (clair/sombre/auto) et votre choix de consentement. Jamais optionnels ; le site ne peut pas fonctionner sans eux.

## Bannière de cookies

Vous voyez une bannière lors de votre première visite. Vous pouvez tout accepter, tout refuser, ou personnaliser. Votre choix est stocké pendant 30 jours, puis re-demandé.

## Tiers

Lorsque vous acceptez la publicité :

- **Google AdSense** peut déposer des cookies et lire votre adresse IP. Voir [la politique de confidentialité de Google](https://policies.google.com/privacy).

Nous n'utilisons pas Facebook Pixel, TikTok, Hotjar, ni aucun autre traceur de réseaux sociaux.

## Vos droits (RGPD / CCPA)

Vous pouvez :

- Retirer votre consentement à tout moment via la bannière de cookies (un lien "Réinitialiser les cookies" apparaîtra dans le pied de page après le consentement)
- Demander quelles données nous avons sur vous — comme nous ne collectons pas de données personnelles, la réponse est généralement "aucune"
- Demander la suppression des données analytiques liées à votre session

Envoyez un e-mail à [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) pour toute demande relative à la vie privée.

## Enfants

Ce site ne s'adresse pas aux enfants de moins de 13 ans. Nous ne collectons sciemment aucune donnée de personnes de moins de 13 ans.

## Modifications

Si nous modifions cette politique, nous réafficherons la bannière de cookies avec un numéro de version clairement indiqué pour que vous puissiez revoir vos choix.`,
  },
  es: {
    title: "Política de privacidad",
    body: `Última revisión: 2026

Respetamos tu privacidad. Esta página explica exactamente lo que hacemos — y no hacemos — con tus datos.

## Qué recopilamos

**Nada de lo que escribes en una calculadora sale de tu navegador.** Todos los cálculos ocurren localmente en tu dispositivo. Las entradas y resultados nunca se transmiten a nuestros servidores.

Sí recopilamos:

- **Análisis de tráfico anónimo** — solo si aceptas la cookie de análisis. Cuenta las vistas de página y la popularidad del idioma. Sin identificadores personales, sin seguimiento entre sitios.
- **Cookies de publicidad** — solo si aceptas la cookie de anuncios. Usadas por Google AdSense para mostrar anuncios relevantes.
- **Cookies esenciales** — tu preferencia de tema (claro/oscuro/auto) y tu elección de consentimiento. Nunca opcionales; el sitio no puede funcionar sin ellas.

## Banner de cookies

Ves un banner en tu primera visita. Puedes aceptar todo, rechazar todo o personalizar. Tu elección se almacena durante 30 días, luego se vuelve a preguntar.

## Terceros

Cuando aceptas publicidad:

- **Google AdSense** puede establecer cookies y leer tu dirección IP. Ver [la Política de privacidad de Google](https://policies.google.com/privacy).

No usamos Facebook Pixel, TikTok, Hotjar ni ningún rastreador de redes sociales.

## Tus derechos (GDPR / CCPA)

Puedes:

- Retirar el consentimiento en cualquier momento a través del banner de cookies (aparecerá un enlace "Restablecer cookies" en el pie de página después del consentimiento)
- Solicitar qué datos tenemos sobre ti — como no recopilamos datos personales, la respuesta suele ser "ninguno"
- Solicitar la eliminación de los datos de análisis vinculados a tu sesión

Envía un correo a [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) con cualquier solicitud de privacidad.

## Niños

Este sitio no está dirigido a menores de 13 años. No recopilamos conscientemente datos de nadie menor de 13 años.

## Cambios

Si cambiamos esta política, volveremos a mostrar el banner de cookies con un cambio de versión claramente marcado para que puedas revisar tus elecciones.`,
  },
  it: {
    title: "Informativa sulla privacy",
    body: `Ultima revisione: 2026

Rispettiamo la tua privacy. Questa pagina spiega esattamente cosa facciamo — e non facciamo — con i tuoi dati.

## Cosa raccogliamo

**Nulla di ciò che digiti in un calcolatore lascia il tuo browser.** Tutti i calcoli avvengono localmente sul tuo dispositivo. Input e risultati non vengono mai trasmessi ai nostri server.

Raccogliamo:

- **Analisi del traffico anonime** — solo se accetti il cookie di analisi. Conta le visualizzazioni di pagina e la popolarità delle lingue. Nessun identificatore personale, nessun tracciamento cross-site.
- **Cookie pubblicitari** — solo se accetti il cookie pubblicitario. Usati da Google AdSense per mostrare annunci pertinenti.
- **Cookie essenziali** — la tua preferenza di tema (chiaro/scuro/auto) e la tua scelta di consenso. Mai opzionali; il sito non può funzionare senza di essi.

## Banner dei cookie

Vedi un banner alla tua prima visita. Puoi accettare tutto, rifiutare tutto o personalizzare. La tua scelta viene memorizzata per 30 giorni, poi riadomandata.

## Terze parti

Quando accetti la pubblicità:

- **Google AdSense** può impostare cookie e leggere il tuo indirizzo IP. Vedi [l'Informativa sulla privacy di Google](https://policies.google.com/privacy).

Non utilizziamo Facebook Pixel, TikTok, Hotjar o altri tracker di social media.

## I tuoi diritti (GDPR / CCPA)

Puoi:

- Revocare il consenso in qualsiasi momento tramite il banner dei cookie (apparirà un link "Reimposta cookie" nel piè di pagina dopo il consenso)
- Richiedere quali dati abbiamo su di te — poiché non raccogliamo dati personali, la risposta di solito è "nessuno"
- Richiedere la cancellazione dei dati analitici legati alla tua sessione

Invia una email a [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) per qualsiasi richiesta sulla privacy.

## Bambini

Questo sito non è rivolto a bambini sotto i 13 anni. Non raccogliamo consapevolmente dati da chiunque abbia meno di 13 anni.

## Modifiche

Se modifichiamo questa politica, mostreremo nuovamente il banner dei cookie con un aggiornamento di versione chiaramente indicato in modo da poter rivedere le tue scelte.`,
  },
  ar: {
    title: "سياسة الخصوصية",
    body: `آخر مراجعة: 2026

نحن نحترم خصوصيتك. تشرح هذه الصفحة بالضبط ما نفعله — وما لا نفعله — ببياناتك.

## ما نجمعه

**لا شيء مما تكتبه في الحاسبة يغادر متصفحك.** تجري جميع الحسابات محلياً على جهازك. لا تُرسَل المدخلات والنتائج أبداً إلى خوادمنا.

نجمع:

- **تحليلات مرور مجهولة** — فقط إذا قبلت ملف تعريف ارتباط التحليلات. يحسب مشاهدات الصفحة وشعبية اللغة. لا معرّفات شخصية، لا تتبع عبر المواقع.
- **ملفات تعريف ارتباط الإعلانات** — فقط إذا قبلت ملف تعريف ارتباط الإعلانات. يستخدمها Google AdSense لعرض الإعلانات ذات الصلة.
- **ملفات تعريف الارتباط الأساسية** — تفضيل السمة (فاتح/داكن/تلقائي) وخيار موافقتك. ليست اختيارية أبداً؛ لا يمكن للموقع العمل بدونها.

## لافتة ملفات تعريف الارتباط

تظهر لك لافتة في زيارتك الأولى. يمكنك قبول الكل أو رفض الكل أو تخصيص. يُخزَّن اختيارك لمدة 30 يوماً ثم يُسأل مجدداً.

## الأطراف الثالثة

عند قبول الإعلانات:

- **Google AdSense** قد يضع ملفات تعريف الارتباط ويقرأ عنوان IP الخاص بك. انظر [سياسة خصوصية Google](https://policies.google.com/privacy).

لا نستخدم Facebook Pixel أو TikTok أو Hotjar أو أي متتبع وسائل التواصل الاجتماعي.

## حقوقك (GDPR / CCPA)

يمكنك:

- سحب الموافقة في أي وقت عبر لافتة ملفات تعريف الارتباط (سيظهر رابط "إعادة تعيين ملفات تعريف الارتباط" في التذييل بعد الموافقة)
- طلب البيانات التي لدينا عنك — نظراً لأننا لا نجمع بيانات شخصية، فالإجابة عادةً "لا شيء"
- طلب حذف بيانات التحليلات المرتبطة بجلستك

أرسل بريداً إلكترونياً إلى [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) لأي طلب خصوصية.

## الأطفال

هذا الموقع غير موجّه للأطفال دون سن 13. نحن لا نجمع بيانات من أي شخص دون سن 13 عن علم.

## التغييرات

إذا غيّرنا هذه السياسة، سنُعيد عرض لافتة ملفات تعريف الارتباط مع زيادة واضحة في رقم الإصدار حتى تتمكن من مراجعة خياراتك.`,
  },
  ru: {
    title: "Политика конфиденциальности",
    body: `Последний пересмотр: 2026

Мы уважаем вашу конфиденциальность. На этой странице точно объяснено, что мы делаем — и не делаем — с вашими данными.

## Что мы собираем

**Ничто из того, что вы вводите в калькулятор, не покидает ваш браузер.** Все вычисления выполняются локально на вашем устройстве. Входные данные и результаты никогда не передаются на наши серверы.

Мы собираем:

- **Анонимную аналитику трафика** — только если вы принимаете аналитический cookie. Считает просмотры страниц и популярность языков. Никаких личных идентификаторов, никакого межсайтового отслеживания.
- **Рекламные cookie** — только если вы принимаете рекламный cookie. Используется Google AdSense для показа релевантной рекламы.
- **Необходимые cookie** — ваши настройки темы (светлая/тёмная/авто) и ваш выбор согласия. Никогда не опциональны; без них сайт не может функционировать.

## Баннер cookie

Вы увидите баннер при первом посещении. Вы можете принять всё, отклонить всё или настроить. Ваш выбор хранится 30 дней, затем снова запрашивается.

## Третьи стороны

Когда вы принимаете рекламу:

- **Google AdSense** может устанавливать cookie и считывать ваш IP-адрес. Смотрите [Политику конфиденциальности Google](https://policies.google.com/privacy).

Мы не используем Facebook Pixel, TikTok, Hotjar или другие трекеры социальных сетей.

## Ваши права (GDPR / CCPA)

Вы можете:

- Отозвать согласие в любое время через баннер cookie (ссылка "Сбросить cookie" появится в подвале после согласия)
- Запросить, какие данные мы имеем о вас — поскольку мы не собираем личные данные, ответ обычно "никаких"
- Запросить удаление аналитических данных, связанных с вашей сессией

Отправьте письмо на [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) по любому запросу о конфиденциальности.

## Дети

Этот сайт не предназначен для детей до 13 лет. Мы намеренно не собираем данные от лиц до 13 лет.

## Изменения

Если мы изменим эту политику, мы снова покажем баннер cookie с чётко обозначенным обновлением версии, чтобы вы могли пересмотреть свой выбор.`,
  },
  zh: {
    title: "隐私政策",
    body: `最后审查时间：2026年

我们尊重您的隐私。本页面解释了我们对您的数据所做和不做的事情。

## 我们收集什么

**您在计算器中输入的任何内容都不会离开您的浏览器。** 所有计算都在您的设备上本地进行。输入和结果从不传输到我们的服务器。

我们收集：

- **匿名流量分析** — 仅当您接受分析Cookie时。统计页面浏览量和语言受欢迎程度。无个人标识符，无跨站跟踪。
- **广告Cookie** — 仅当您接受广告Cookie时。由Google AdSense用于显示相关广告。
- **必要Cookie** — 您的主题偏好（浅色/深色/自动）和您的同意选择。从不可选；没有它们网站无法运行。

## Cookie横幅

您在首次访问时会看到横幅。您可以全部接受、全部拒绝或自定义。您的选择存储30天，然后重新询问。

## 第三方

当您接受广告时：

- **Google AdSense** 可能会设置Cookie并读取您的IP地址。请参阅[Google的隐私政策](https://policies.google.com/privacy)。

我们不使用Facebook Pixel、TikTok、Hotjar或任何社交媒体跟踪器。

## 您的权利（GDPR / CCPA）

您可以：

- 随时通过Cookie横幅撤回同意（同意后页脚将出现"重置Cookie"链接）
- 请求我们拥有您的哪些数据 — 由于我们不收集个人数据，答案通常是"无"
- 请求删除与您会话相关的分析数据

请发送电子邮件至 [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) 提出任何隐私请求。

## 儿童

本网站不针对13岁以下儿童。我们不会故意收集13岁以下任何人的数据。

## 变更

如果我们更改此政策，我们将重新显示Cookie横幅，并附上清晰标记的版本更新，以便您重新审查您的选择。`,
  },
  ja: {
    title: "プライバシーポリシー",
    body: `最終確認：2026年

私たちはあなたのプライバシーを尊重します。このページでは、あなたのデータに対して私たちが行うこと — そして行わないこと — を正確に説明します。

## 収集するもの

**計算ツールに入力した内容はブラウザの外に出ません。** すべての計算はデバイス上でローカルに実行されます。入力と結果がサーバーに送信されることはありません。

私たちが収集するもの：

- **匿名のトラフィック分析** — 分析クッキーを受け入れた場合のみ。ページビューと言語の人気を集計します。個人識別子なし、クロスサイトトラッキングなし。
- **広告クッキー** — 広告クッキーを受け入れた場合のみ。Google AdSenseが関連広告を表示するために使用します。
- **必須クッキー** — テーマ設定（ライト/ダーク/自動）と同意の選択。オプションではありません。これなしにサイトは機能できません。

## クッキーバナー

初回訪問時にバナーが表示されます。すべて受け入れる、すべて拒否する、またはカスタマイズすることができます。選択は30日間保存され、その後再度確認されます。

## 第三者

広告を受け入れた場合：

- **Google AdSense** がクッキーを設定し、IPアドレスを読み取る可能性があります。[Googleのプライバシーポリシー](https://policies.google.com/privacy)を参照してください。

Facebook Pixel、TikTok、Hotjar、またはその他のソーシャルメディアトラッカーは使用していません。

## あなたの権利（GDPR / CCPA）

あなたは次のことができます：

- クッキーバナーからいつでも同意を撤回する（同意後、フッターに「クッキーをリセット」リンクが表示されます）
- 私たちがあなたについて持っているデータを確認する — 個人データを収集しないため、通常は「なし」です
- セッションに関連した分析データの削除をリクエストする

プライバシーに関するご要望は [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) にメールをお送りください。

## 子供

このサイトは13歳未満の子供を対象としていません。13歳未満の方からのデータを意図的に収集することはありません。

## 変更

このポリシーを変更する場合は、選択を再確認できるよう、明確にマークされたバージョン更新とともにクッキーバナーを再表示します。`,
  },
  ko: {
    title: "개인정보처리방침",
    body: `마지막 검토: 2026년

저희는 귀하의 개인정보를 존중합니다. 이 페이지는 귀하의 데이터로 저희가 하는 일 — 그리고 하지 않는 일 — 을 정확하게 설명합니다.

## 수집하는 정보

**계산기에 입력한 내용은 브라우저 밖을 나가지 않습니다.** 모든 계산은 귀하의 기기에서 로컬로 수행됩니다. 입력값과 결과는 절대 서버로 전송되지 않습니다.

저희가 수집하는 것:

- **익명 트래픽 분석** — 분석 쿠키를 수락한 경우에만. 페이지 조회수와 언어 인기도를 집계합니다. 개인 식별자 없음, 사이트 간 추적 없음.
- **광고 쿠키** — 광고 쿠키를 수락한 경우에만. Google AdSense가 관련 광고를 표시하는 데 사용합니다.
- **필수 쿠키** — 테마 설정(밝게/어둡게/자동)과 동의 선택. 선택 사항이 아닙니다. 이것 없이 사이트가 작동할 수 없습니다.

## 쿠키 배너

첫 방문 시 배너가 표시됩니다. 전체 수락, 전체 거부 또는 맞춤 설정을 할 수 있습니다. 선택은 30일 동안 저장되며 이후 다시 물어봅니다.

## 제3자

광고를 수락하면:

- **Google AdSense**가 쿠키를 설정하고 IP 주소를 읽을 수 있습니다. [Google의 개인정보처리방침](https://policies.google.com/privacy)을 참조하세요.

저희는 Facebook Pixel, TikTok, Hotjar 또는 기타 소셜 미디어 트래커를 사용하지 않습니다.

## 귀하의 권리 (GDPR / CCPA)

귀하는 다음을 할 수 있습니다:

- 쿠키 배너를 통해 언제든지 동의를 철회할 수 있습니다 (동의 후 푸터에 "쿠키 초기화" 링크가 나타납니다)
- 저희가 귀하에 대해 보유한 데이터 확인 요청 — 개인 데이터를 수집하지 않으므로 답변은 대개 "없음"입니다
- 세션과 연결된 분석 데이터 삭제 요청

개인정보 관련 요청은 [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})으로 이메일을 보내 주세요.

## 아동

이 사이트는 13세 미만 아동을 대상으로 하지 않습니다. 저희는 13세 미만의 누구로부터도 의도적으로 데이터를 수집하지 않습니다.

## 변경사항

이 정책을 변경하는 경우, 귀하가 선택을 재검토할 수 있도록 명확하게 표시된 버전 업데이트와 함께 쿠키 배너를 다시 표시합니다.`,
  },
  hi: {
    title: "गोपनीयता नीति",
    body: `अंतिम समीक्षा: 2026

हम आपकी गोपनीयता का सम्मान करते हैं। यह पृष्ठ बताता है कि हम आपके डेटा के साथ क्या करते हैं — और क्या नहीं करते।

## हम क्या एकत्र करते हैं

**एक कैलकुलेटर में आप जो कुछ भी टाइप करते हैं वह आपके ब्राउज़र से बाहर नहीं जाता।** सभी गणनाएं आपके डिवाइस पर स्थानीय रूप से होती हैं। इनपुट और परिणाम कभी भी हमारे सर्वर पर नहीं भेजे जाते।

हम एकत्र करते हैं:

- **अनाम ट्रैफ़िक विश्लेषण** — केवल तभी जब आप विश्लेषण कुकी स्वीकार करते हैं। पृष्ठ दृश्य और भाषा लोकप्रियता की गणना करता है। कोई व्यक्तिगत पहचानकर्ता नहीं, कोई क्रॉस-साइट ट्रैकिंग नहीं।
- **विज्ञापन कुकीज़** — केवल तभी जब आप विज्ञापन कुकी स्वीकार करते हैं। Google AdSense द्वारा प्रासंगिक विज्ञापन दिखाने के लिए उपयोग किया जाता है।
- **आवश्यक कुकीज़** — आपकी थीम प्राथमिकता (हल्का/गहरा/स्वतः) और आपकी सहमति विकल्प। कभी वैकल्पिक नहीं; इनके बिना साइट काम नहीं कर सकती।

## कुकी बैनर

आपकी पहली यात्रा पर एक बैनर दिखाई देता है। आप सभी को स्वीकार कर सकते हैं, सभी को अस्वीकार कर सकते हैं, या अनुकूलित कर सकते हैं। आपकी पसंद 30 दिनों के लिए संग्रहीत होती है, फिर दोबारा पूछी जाती है।

## तृतीय पक्ष

जब आप विज्ञापन स्वीकार करते हैं:

- **Google AdSense** कुकीज़ सेट कर सकता है और आपका IP पता पढ़ सकता है। [Google की गोपनीयता नीति](https://policies.google.com/privacy) देखें।

हम Facebook Pixel, TikTok, Hotjar, या किसी भी सोशल-मीडिया ट्रैकर का उपयोग नहीं करते।

## आपके अधिकार (GDPR / CCPA)

आप कर सकते हैं:

- कुकी बैनर के माध्यम से किसी भी समय सहमति वापस लें (सहमति के बाद फ़ुटर में "कुकीज़ रीसेट करें" लिंक दिखाई देगा)
- अनुरोध करें कि हमारे पास आपके बारे में क्या डेटा है — चूंकि हम कोई व्यक्तिगत डेटा एकत्र नहीं करते, उत्तर आमतौर पर "कोई नहीं" है
- अपने सत्र से जुड़े विश्लेषण डेटा को हटाने का अनुरोध करें

किसी भी गोपनीयता अनुरोध के लिए [${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL}) पर ईमेल करें।

## बच्चे

यह साइट 13 साल से कम उम्र के बच्चों के लिए निर्देशित नहीं है। हम जानबूझकर 13 साल से कम उम्र के किसी से भी डेटा एकत्र नहीं करते।

## परिवर्तन

यदि हम इस नीति को बदलते हैं, तो हम कुकी बैनर को स्पष्ट रूप से चिह्नित संस्करण बंप के साथ फिर से दिखाएंगे ताकि आप अपनी पसंद की समीक्षा कर सकें।`,
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
