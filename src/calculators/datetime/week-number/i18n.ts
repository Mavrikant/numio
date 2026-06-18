import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Week Number Calculator", short: "Find the ISO-8601 week number for any date.",
    description: "Free week number calculator. Enter a date to get its ISO-8601 week number, the week-based year and the day of the year. Weeks start on Monday and week 1 contains the first Thursday.",
    keywords: ["week number", "iso week", "what week is it", "current week number", "week of the year"],
    inputs: { date: { label: "Date" } },
    outputs: { week: { label: "Week number" }, weekYear: { label: "Week-based year" }, dayOfYear: { label: "Day of year" } },
    faq: [
      { q: "How is the ISO week number defined?", a: "ISO-8601 weeks start on Monday, and week 1 is the week that contains the year's first Thursday (equivalently, the week containing January 4). A year has 52 or 53 weeks." },
      { q: "Why can early January be week 52 or 53?", a: "If the first days of January fall before that year's first Thursday, they belong to the last week of the previous year — so 1 January can be week 52 or 53 of the prior week-year." },
      { q: "What is the current ISO week number right now?", a: "You can use this calculator by selecting today's date to instantly find the current ISO-8601 week number, the week-based year, and the day of the year." },
      { q: "How many weeks are there in a year?", a: "Most years have 52 weeks, but approximately every 5–6 years there is a 53-week year. This happens when January 1 falls on a Thursday or when a leap year starts on a Wednesday." },
      { q: "Do all countries use the ISO week numbering system?", a: "No. While many European and Asian countries follow ISO-8601 week numbering (Monday start, week 1 contains the first Thursday), the US, Canada, and Australia often use Sunday-start weeks or different week-1 definitions." },
    ],
  },
  nl: {
    title: "Weeknummer Calculator", short: "Find the ISO-8601 week nummer for any date.",
    description: "Gratis week nummer calculator. Enter a date to get its ISO-8601 week nummer, the week-based year and the day of the year. Weeks start on Monday and week 1 contains the first Thursday.",
    keywords: ["week nummer", "iso week", "what week is it", "current week nummer", "week of the year"],
    inputs: { date: { label: "Date" } },
    outputs: { week: { label: "Week nummer" }, weekYear: { label: "Week-based year" }, dayOfYear: { label: "Day of year" } },
    faq: [
      { q: "How is the ISO week nummer defined?", a: "ISO-8601 weeks start on Monday, and week 1 is the week that contains the year's first Thursday (equivalently, the week containing January 4). A year has 52 or 53 weeks." },
      { q: "Why can early January be week 52 or 53?", a: "If the first dagen of January fall before that year's first Thursday, they belong to the last week of the previous year — so 1 January can be week 52 or 53 of the prior week-year." },
    ],
  },

  pl: {
    title: "Numer Tygodnia Kalkulator", short: "Find the ISO-8601 week liczba for any date.",
    description: "Darmowy week liczba kalkulator. Enter a date to get its ISO-8601 week liczba, the week-based year and the day of the year. Weeks start on Monday and week 1 contains the first Thursday.",
    keywords: ["week liczba", "iso week", "what week is it", "current week liczba", "week of the year"],
    inputs: { date: { label: "Date" } },
    outputs: { week: { label: "Week liczba" }, weekYear: { label: "Week-based year" }, dayOfYear: { label: "Day of year" } },
    faq: [
      { q: "How is the ISO week liczba defined?", a: "ISO-8601 weeks start on Monday, and week 1 is the week that contains the year's first Thursday (equivalently, the week containing January 4). A year has 52 or 53 weeks." },
      { q: "Why can early January be week 52 or 53?", a: "If the first dni of January fall before that year's first Thursday, they belong to the last week of the previous year — so 1 January can be week 52 or 53 of the prior week-year." },
    ],
  },
  pt: {
    title: "Calculadora de Número da Semana", short: "Descubra o número da semana ISO de qualquer data.",
    description: "Calculadora gratuita de número da semana. Descubra o número da semana ISO 8601 e o dia da semana de qualquer data.",
    keywords: ["número semana", "semana ISO", "ISO 8601", "número semana ano", "calendário ISO"],
    inputs: { date: { label: "Date" } },
    outputs: { week: { label: "Week number" }, weekYear: { label: "Week-based year" }, dayOfYear: { label: "Day of year" } },
    faq: [
      { q: "How is the ISO week number defined?", a: "ISO-8601 weeks start on Monday, and week 1 is the week that contains the year's first Thursday (equivalently, the week containing January 4). A year has 52 or 53 weeks." },
      { q: "Why can early January be week 52 or 53?", a: "If the first days of January fall before that year's first Thursday, they belong to the last week of the previous year — so 1 January can be week 52 or 53 of the prior week-year." },
    ],
  },
  id: {
    title: "Kalkulator Nomor Minggu", short: "Temukan nomor minggu ISO untuk tanggal apa pun.",
    description: "Kalkulator nomor minggu gratis. Temukan nomor minggu ISO 8601 dan hari dalam minggu untuk tanggal apa pun.",
    keywords: ["nomor minggu", "minggu ISO", "ISO 8601", "nomor minggu tahun", "kalender ISO"],
    inputs: { date: { label: "Date" } },
    outputs: { week: { label: "Week number" }, weekYear: { label: "Week-based year" }, dayOfYear: { label: "Day of year" } },
    faq: [
      { q: "How is the ISO week number defined?", a: "ISO-8601 weeks start on Monday, and week 1 is the week that contains the year's first Thursday (equivalently, the week containing January 4). A year has 52 or 53 weeks." },
      { q: "Why can early January be week 52 or 53?", a: "If the first days of January fall before that year's first Thursday, they belong to the last week of the previous year — so 1 January can be week 52 or 53 of the prior week-year." },
    ],
  },

  tr: {
    title: "Hafta Numarası Hesaplayıcı", short: "Herhangi bir tarih için ISO-8601 hafta numarasını bulun.",
    description: "Ücretsiz hafta numarası hesaplayıcı. Bir tarih girerek ISO-8601 hafta numarasını, hafta bazlı yılı ve yılın gününü öğrenin. Haftalar pazartesi başlar ve 1. hafta ilk perşembeyi içerir.",
    keywords: ["hafta numarası", "iso hafta", "hangi haftadayız", "güncel hafta numarası", "yılın haftası"],
    inputs: { date: { label: "Tarih" } },
    outputs: { week: { label: "Hafta numarası" }, weekYear: { label: "Hafta bazlı yıl" }, dayOfYear: { label: "Yılın günü" } },
    faq: [
      { q: "ISO hafta numarası nasıl tanımlanır?", a: "ISO-8601 haftaları pazartesi başlar ve 1. hafta, yılın ilk perşembesini içeren haftadır (yani 4 Ocak'ı içeren hafta). Bir yıl 52 veya 53 hafta içerir." },
      { q: "Ocak başı neden 52 veya 53. hafta olabilir?", a: "Ocak'ın ilk günleri o yılın ilk perşembesinden önceyse, önceki yılın son haftasına ait olurlar — bu yüzden 1 Ocak önceki hafta-yılının 52 veya 53. haftası olabilir." },
    ],
  },
  de: { title: "Kalenderwochen-Rechner", short: "Ermitteln Sie die ISO-8601-Kalenderwoche für ein Datum.", description: "Kostenloser Kalenderwochen-Rechner. Geben Sie ein Datum ein, um die ISO-8601-Kalenderwoche, das wochenbasierte Jahr und den Tag des Jahres zu erhalten.", keywords: ["kalenderwoche", "iso woche", "welche woche", "aktuelle kalenderwoche", "woche des jahres"], inputs: { date: { label: "Datum" } }, outputs: { week: { label: "Kalenderwoche" }, weekYear: { label: "Wochenbasiertes Jahr" }, dayOfYear: { label: "Tag des Jahres" } } },
  fr: { title: "Calculateur de Numéro de Semaine", short: "Trouvez le numéro de semaine ISO-8601 d'une date.", description: "Calculateur de numéro de semaine gratuit. Saisissez une date pour obtenir son numéro de semaine ISO-8601, l'année basée sur les semaines et le jour de l'année.", keywords: ["numéro de semaine", "semaine iso", "quelle semaine", "numéro de semaine actuel", "semaine de l'année"], inputs: { date: { label: "Date" } }, outputs: { week: { label: "Numéro de semaine" }, weekYear: { label: "Année (semaines)" }, dayOfYear: { label: "Jour de l'année" } } },
  es: { title: "Calculadora de Número de Semana", short: "Halla el número de semana ISO-8601 de una fecha.", description: "Calculadora de número de semana gratuita. Introduce una fecha para obtener su número de semana ISO-8601, el año basado en semanas y el día del año.", keywords: ["número de semana", "semana iso", "qué semana es", "número de semana actual", "semana del año"], inputs: { date: { label: "Fecha" } }, outputs: { week: { label: "Número de semana" }, weekYear: { label: "Año (semanas)" }, dayOfYear: { label: "Día del año" } } },
  it: { title: "Calcolatore Numero di Settimana", short: "Trova il numero di settimana ISO-8601 di una data.", description: "Calcolatore del numero di settimana gratuito. Inserisci una data per ottenere il numero di settimana ISO-8601, l'anno basato sulle settimane e il giorno dell'anno.", keywords: ["numero di settimana", "settimana iso", "che settimana è", "numero settimana attuale", "settimana dell'anno"], inputs: { date: { label: "Data" } }, outputs: { week: { label: "Numero di settimana" }, weekYear: { label: "Anno (settimane)" }, dayOfYear: { label: "Giorno dell'anno" } } },
  ar: { title: "حاسبة رقم الأسبوع", short: "أوجد رقم الأسبوع وفق ISO-8601 لأي تاريخ.", description: "حاسبة رقم أسبوع مجانية. أدخل تاريخًا للحصول على رقم الأسبوع وفق ISO-8601 والسنة المبنية على الأسابيع ويوم السنة.", keywords: ["رقم الأسبوع", "أسبوع iso", "أي أسبوع", "رقم الأسبوع الحالي", "أسبوع السنة"], inputs: { date: { label: "التاريخ" } }, outputs: { week: { label: "رقم الأسبوع" }, weekYear: { label: "السنة (بالأسابيع)" }, dayOfYear: { label: "يوم السنة" } } },
  ru: { title: "Калькулятор Номера Недели", short: "Найдите номер недели по ISO-8601 для любой даты.", description: "Бесплатный калькулятор номера недели. Введите дату, чтобы получить номер недели по ISO-8601, год по неделям и день года.", keywords: ["номер недели", "неделя iso", "какая неделя", "текущий номер недели", "неделя года"], inputs: { date: { label: "Дата" } }, outputs: { week: { label: "Номер недели" }, weekYear: { label: "Год (по неделям)" }, dayOfYear: { label: "День года" } } },
  zh: { title: "周数计算器", short: "查找任意日期的 ISO-8601 周数。", description: "免费的周数计算器。输入日期即可获得其 ISO-8601 周数、基于周的年份和一年中的第几天。", keywords: ["周数", "iso周", "现在第几周", "当前周数", "一年中的周"], inputs: { date: { label: "日期" } }, outputs: { week: { label: "周数" }, weekYear: { label: "周所属年份" }, dayOfYear: { label: "一年中的第几天" } } },
  ja: { title: "週番号計算機", short: "任意の日付の ISO-8601 週番号を求めます。", description: "無料の週番号計算機。日付を入力すると、ISO-8601 の週番号、週ベースの年、年内通算日が得られます。", keywords: ["週番号", "iso 週", "今は第何週", "現在の週番号", "年の週"], inputs: { date: { label: "日付" } }, outputs: { week: { label: "週番号" }, weekYear: { label: "週ベースの年" }, dayOfYear: { label: "年内通算日" } } },
  ko: { title: "주차 계산기", short: "임의의 날짜에 대한 ISO-8601 주차를 찾습니다.", description: "무료 주차 계산기. 날짜를 입력하면 ISO-8601 주차, 주 기준 연도, 연중 일자를 얻을 수 있습니다.", keywords: ["주차", "iso 주", "몇 주차", "현재 주차", "연중 주"], inputs: { date: { label: "날짜" } }, outputs: { week: { label: "주차" }, weekYear: { label: "주 기준 연도" }, dayOfYear: { label: "연중 일자" } } },
  hi: { title: "सप्ताह संख्या कैलकुलेटर", short: "किसी भी तिथि की ISO-8601 सप्ताह संख्या ज्ञात करें।", description: "मुफ्त सप्ताह संख्या कैलकुलेटर। एक तिथि दर्ज करें और उसकी ISO-8601 सप्ताह संख्या, सप्ताह-आधारित वर्ष और वर्ष का दिन पाएं।", keywords: ["सप्ताह संख्या", "iso सप्ताह", "कौन सा सप्ताह", "वर्तमान सप्ताह संख्या", "वर्ष का सप्ताह"], inputs: { date: { label: "तिथि" } }, outputs: { week: { label: "सप्ताह संख्या" }, weekYear: { label: "सप्ताह-आधारित वर्ष" }, dayOfYear: { label: "वर्ष का दिन" } } },
};

export default i18n;
