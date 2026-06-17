import type { ToolI18n } from "@/types/tool";
import { COMMON_UI } from "../_shared/ui";

const data = {
  en: { title: "World Clock", short: "See the current time in major cities at a glance.", description: "Free world clock. Watch the live local time in San Francisco, New York, London, Istanbul, Tokyo and more — useful for distributed teams. Runs in your browser.", keywords: ["world clock", "city clocks", "global time", "current time worldwide", "time zone dashboard"] },
  nl: { title: "Wereldklok", short: "See the current time in major cities at a glance.", description: "Gratis world clock. Watch the live local time in San Francisco, New York, London, Istanbul, Tokyo and more — useful for distributed teams. Runs in uw browser.", keywords: ["world clock", "city clocks", "global time", "current time worldwide", "time zone dashboard"] },

  pl: { title: "Zegar Światowy", short: "See the current time in major cities at a glance.", description: "Darmowy world clock. Watch the live local time in San Francisco, New York, London, Istanbul, Tokyo and more — useful for distributed teams. Runs w Twojej przeglądarce.", keywords: ["world clock", "city clocks", "global time", "current time worldwide", "time zone dashboard"] },
  pt: { title: "Relógio Mundial", short: "See the current time em major cities at a glance.", description: "Gratuito - world clock. Watch the live local time em San Francisco, New York, London, Istanbul, Tokyo e more â useful para distributed teams. Runs no seu navegador.", keywords: ["world clock", "city clocks", "global time", "current time worldwide", "time zone dashboard"] },
  id: { title: "Jam Dunia", short: "See the current time in major cities at a glance.", description: "Gratis - world clock. Watch the live local time in San Francisco, New York, London, Istanbul, Tokyo dan more â useful for distributed teams. Runs di browser Anda.", keywords: ["world clock", "city clocks", "global time", "current time worldwide", "time zone dashboard"] },

  tr: { title: "Dünya Saati", short: "Büyük şehirlerdeki güncel saati tek bakışta görün.", description: "Ücretsiz dünya saati. San Francisco, New York, Londra, İstanbul, Tokyo ve daha fazlasında canlı yerel saati izleyin — dağıtık ekipler için kullanışlı. Tarayıcınızda çalışır.", keywords: ["dünya saati", "şehir saatleri", "küresel saat", "dünya genelinde güncel saat", "saat dilimi panosu"] },
  de: { title: "Weltuhr", short: "Sehen Sie die aktuelle Zeit in Großstädten auf einen Blick.", description: "Kostenlose Weltuhr. Beobachten Sie die Echtzeit-Ortszeit in San Francisco, New York, London, Istanbul, Tokio und mehr — nützlich für verteilte Teams. Läuft im Browser.", keywords: ["weltuhr", "stadt uhren", "globale zeit", "aktuelle zeit weltweit", "zeitzonen dashboard"] },
  fr: { title: "Horloge Mondiale", short: "Voyez l'heure actuelle dans les grandes villes d'un coup d'œil.", description: "Horloge mondiale gratuite. Suivez en temps réel l'heure locale à San Francisco, New York, Londres, Istanbul, Tokyo et plus — utile pour les équipes distribuées. Fonctionne dans votre navigateur.", keywords: ["horloge mondiale", "horloges villes", "heure globale", "heure actuelle mondiale", "tableau fuseaux"] },
  es: { title: "Reloj Mundial", short: "Mira la hora actual en grandes ciudades de un vistazo.", description: "Reloj mundial gratuito. Observa la hora local en vivo en San Francisco, Nueva York, Londres, Estambul, Tokio y más — útil para equipos distribuidos. Funciona en tu navegador.", keywords: ["reloj mundial", "relojes ciudades", "hora global", "hora actual mundial", "panel zonas horarias"] },
  it: { title: "Orologio Mondiale", short: "Vedi l'ora corrente nelle grandi città a colpo d'occhio.", description: "Orologio mondiale gratuito. Osserva l'ora locale in tempo reale a San Francisco, New York, Londra, Istanbul, Tokyo e altre — utile per team distribuiti. Funziona nel browser.", keywords: ["orologio mondiale", "orologi città", "ora globale", "ora corrente nel mondo", "dashboard fusi"] },
  ar: { title: "الساعة العالمية", short: "شاهد الوقت الحالي في المدن الكبرى بنظرة واحدة.", description: "ساعة عالمية مجانية. شاهد الوقت المحلي المباشر في سان فرانسيسكو ونيويورك ولندن واسطنبول وطوكيو والمزيد — مفيدة للفرق الموزعة. تعمل في متصفحك.", keywords: ["الساعة العالمية", "ساعات المدن", "الوقت العالمي", "الوقت الحالي حول العالم", "لوحة المناطق الزمنية"] },
  ru: { title: "Мировые часы", short: "Посмотрите текущее время в крупных городах с одного взгляда.", description: "Бесплатные мировые часы. Наблюдайте за местным временем в Сан-Франциско, Нью-Йорке, Лондоне, Стамбуле, Токио и других городах — полезно для распределённых команд. Работает в браузере.", keywords: ["мировые часы", "городские часы", "глобальное время", "текущее время по миру", "панель часовых поясов"] },
  zh: { title: "世界时钟", short: "一眼查看主要城市的当前时间。", description: "免费的世界时钟。实时查看旧金山、纽约、伦敦、伊斯坦布尔、东京等城市的本地时间——适合分布式团队。在浏览器中运行。", keywords: ["世界时钟", "城市时钟", "全球时间", "全球当前时间", "时区仪表板"] },
  ja: { title: "世界時計", short: "主要都市の現在時刻を一目で確認。", description: "無料の世界時計。サンフランシスコ、ニューヨーク、ロンドン、イスタンブール、東京などの現地時刻をリアルタイムで確認できます——分散チームに便利。ブラウザ内で動作します。", keywords: ["世界時計", "都市時計", "グローバル時刻", "世界中の現在時刻", "タイムゾーン ダッシュボード"] },
  ko: { title: "세계 시계", short: "주요 도시의 현재 시간을 한눈에 확인합니다.", description: "무료 세계 시계. 샌프란시스코, 뉴욕, 런던, 이스탄불, 도쿄 등의 현지 시간을 실시간으로 확인하세요 — 분산된 팀에 유용합니다. 브라우저에서 실행됩니다.", keywords: ["세계 시계", "도시 시계", "글로벌 시간", "세계 현재 시간", "시간대 대시보드"] },
  hi: { title: "विश्व घड़ी", short: "एक नज़र में प्रमुख शहरों का वर्तमान समय देखें।", description: "मुफ्त विश्व घड़ी। सैन फ्रांसिस्को, न्यूयॉर्क, लंदन, इस्तांबुल, टोक्यो और अन्य शहरों में लाइव स्थानीय समय देखें — वितरित टीमों के लिए उपयोगी। आपके ब्राउज़र में चलता है।", keywords: ["विश्व घड़ी", "शहर घड़ियाँ", "वैश्विक समय", "विश्वव्यापी वर्तमान समय", "टाइमज़ोन डैशबोर्ड"] },
};

const i18n = Object.fromEntries(
  (Object.keys(data) as Array<keyof typeof data>).map((loc) => {
    const { title, short, description, keywords, ...rest } = data[loc];
    return [loc, { title, short, description, keywords, ui: { ...COMMON_UI[loc], ...rest } }];
  }),
) as unknown as ToolI18n;

export default i18n;
