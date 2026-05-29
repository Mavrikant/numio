import type { CalculatorI18n } from "@/types/i18n";

const op = (a: string, s: string) => ({ add: a, subtract: s });

const i18n: CalculatorI18n = {
  en: {
    title: "Date Add / Subtract Calculator",
    short: "Add or subtract years, months, weeks and days from any date.",
    description:
      "Free add/subtract date calculator. Pick a start date, choose to add or subtract, and enter years, months, weeks and days to get the resulting date and the total day offset.",
    keywords: ["add days to date", "subtract days from date", "date calculator", "date plus days", "future date calculator", "days from today"],
    inputs: {
      startDate: { label: "Start date" },
      operation: { label: "Operation" },
      years: { label: "Years" },
      months: { label: "Months" },
      weeks: { label: "Weeks" },
      days: { label: "Days" },
    },
    outputs: {
      resultDate: { label: "Result date" },
      totalDaysOffset: { label: "Total day offset" },
    },
    options: { operation: op("Add (+)", "Subtract (−)") },
    faq: [
      { q: "How do I add days to a date?", a: "Pick the start date, leave the operation on 'Add', and enter the number of days (and optionally weeks, months, years). The result date updates instantly." },
      { q: "How are months and years added?", a: "Years and months are applied first as calendar units, clamping to the last valid day (Jan 31 + 1 month = Feb 28/29). Weeks and days are then added as exact 24-hour days." },
      { q: "What is the total day offset?", a: "It is the net number of calendar days between the start date and the result — positive when adding, negative when subtracting." },
    ],
  },
  pt: {
    title: "Date Add / Subtract Calculator",
    short: "Add or subtract years, months, weeks and days from any date.",
    description:
      "Free add/subtract date calculator. Pick a start date, choose to add or subtract, and enter years, months, weeks and days to get the resulting date and the total day offset.",
    keywords: ["add days to date", "subtract days from date", "date calculator", "date plus days", "future date calculator", "days from today"],
    inputs: {
      startDate: { label: "Start date" },
      operation: { label: "Operation" },
      years: { label: "Years" },
      months: { label: "Months" },
      weeks: { label: "Weeks" },
      days: { label: "Days" },
    },
    outputs: {
      resultDate: { label: "Result date" },
      totalDaysOffset: { label: "Total day offset" },
    },
    options: { operation: op("Add (+)", "Subtract (−)") },
    faq: [
      { q: "How do I add days to a date?", a: "Pick the start date, leave the operation on 'Add', and enter the number of days (and optionally weeks, months, years). The result date updates instantly." },
      { q: "How are months and years added?", a: "Years and months are applied first as calendar units, clamping to the last valid day (Jan 31 + 1 month = Feb 28/29). Weeks and days are then added as exact 24-hour days." },
      { q: "What is the total day offset?", a: "It is the net number of calendar days between the start date and the result — positive when adding, negative when subtracting." },
    ],
  },
  id: {
    title: "Date Add / Subtract Calculator",
    short: "Add or subtract years, months, weeks and days from any date.",
    description:
      "Free add/subtract date calculator. Pick a start date, choose to add or subtract, and enter years, months, weeks and days to get the resulting date and the total day offset.",
    keywords: ["add days to date", "subtract days from date", "date calculator", "date plus days", "future date calculator", "days from today"],
    inputs: {
      startDate: { label: "Start date" },
      operation: { label: "Operation" },
      years: { label: "Years" },
      months: { label: "Months" },
      weeks: { label: "Weeks" },
      days: { label: "Days" },
    },
    outputs: {
      resultDate: { label: "Result date" },
      totalDaysOffset: { label: "Total day offset" },
    },
    options: { operation: op("Add (+)", "Subtract (−)") },
    faq: [
      { q: "How do I add days to a date?", a: "Pick the start date, leave the operation on 'Add', and enter the number of days (and optionally weeks, months, years). The result date updates instantly." },
      { q: "How are months and years added?", a: "Years and months are applied first as calendar units, clamping to the last valid day (Jan 31 + 1 month = Feb 28/29). Weeks and days are then added as exact 24-hour days." },
      { q: "What is the total day offset?", a: "It is the net number of calendar days between the start date and the result — positive when adding, negative when subtracting." },
    ],
  },

  tr: {
    title: "Tarih Ekle / Çıkar Hesaplama",
    short: "Herhangi bir tarihe yıl, ay, hafta ve gün ekleyin veya çıkarın.",
    description:
      "Ücretsiz tarih ekleme/çıkarma hesaplayıcı. Bir başlangıç tarihi seçin, ekleme veya çıkarmayı belirleyin ve yıl, ay, hafta ve gün girerek sonuç tarihini ve toplam gün farkını öğrenin.",
    keywords: ["tarihe gün ekleme", "tarihten gün çıkarma", "tarih hesaplama", "tarih artı gün", "gelecek tarih hesaplama", "bugünden gün"],
    inputs: {
      startDate: { label: "Başlangıç tarihi" },
      operation: { label: "İşlem" },
      years: { label: "Yıl" },
      months: { label: "Ay" },
      weeks: { label: "Hafta" },
      days: { label: "Gün" },
    },
    outputs: {
      resultDate: { label: "Sonuç tarihi" },
      totalDaysOffset: { label: "Toplam gün farkı" },
    },
    options: { operation: op("Ekle (+)", "Çıkar (−)") },
    faq: [
      { q: "Bir tarihe nasıl gün eklerim?", a: "Başlangıç tarihini seçin, işlemi 'Ekle' bırakın ve gün sayısını (isteğe bağlı hafta, ay, yıl) girin. Sonuç tarihi anında güncellenir." },
      { q: "Ay ve yıl nasıl eklenir?", a: "Yıl ve ay önce takvim birimi olarak uygulanır ve son geçerli güne sabitlenir (31 Ocak + 1 ay = 28/29 Şubat). Hafta ve günler ardından tam 24 saatlik gün olarak eklenir." },
      { q: "Toplam gün farkı nedir?", a: "Başlangıç tarihi ile sonuç arasındaki net takvim günü sayısıdır — eklerken pozitif, çıkarırken negatiftir." },
    ],
  },
  de: {
    title: "Datum Addieren / Subtrahieren",
    short: "Addieren oder subtrahieren Sie Jahre, Monate, Wochen und Tage zu einem Datum.",
    description: "Kostenloser Rechner zum Addieren/Subtrahieren von Datumswerten. Wählen Sie ein Startdatum, addieren oder subtrahieren Sie Jahre, Monate, Wochen und Tage und erhalten Sie das Ergebnisdatum.",
    keywords: ["Tage zum Datum addieren", "Tage vom Datum abziehen", "Datumsrechner", "zukünftiges Datum"],
    inputs: {
      startDate: { label: "Startdatum" },
      operation: { label: "Operation" },
      years: { label: "Jahre" },
      months: { label: "Monate" },
      weeks: { label: "Wochen" },
      days: { label: "Tage" },
    },
    outputs: {
      resultDate: { label: "Ergebnisdatum" },
      totalDaysOffset: { label: "Gesamttagesversatz" },
    },
    options: { operation: op("Addieren (+)", "Subtrahieren (−)") },
  },
  fr: {
    title: "Calculateur Ajouter / Soustraire des Dates",
    short: "Ajoutez ou soustrayez des années, mois, semaines et jours à une date.",
    description: "Calculateur d'ajout/soustraction de dates gratuit. Choisissez une date de départ, ajoutez ou soustrayez des années, mois, semaines et jours pour obtenir la date résultante.",
    keywords: ["ajouter des jours à une date", "soustraire des jours", "calculateur de date", "date future"],
    inputs: {
      startDate: { label: "Date de départ" },
      operation: { label: "Opération" },
      years: { label: "Années" },
      months: { label: "Mois" },
      weeks: { label: "Semaines" },
      days: { label: "Jours" },
    },
    outputs: {
      resultDate: { label: "Date résultante" },
      totalDaysOffset: { label: "Décalage total en jours" },
    },
    options: { operation: op("Ajouter (+)", "Soustraire (−)") },
  },
  es: {
    title: "Calculadora Sumar / Restar Fechas",
    short: "Suma o resta años, meses, semanas y días a cualquier fecha.",
    description: "Calculadora gratuita para sumar/restar fechas. Elige una fecha de inicio, suma o resta años, meses, semanas y días para obtener la fecha resultante.",
    keywords: ["sumar días a una fecha", "restar días a una fecha", "calculadora de fechas", "fecha futura"],
    inputs: {
      startDate: { label: "Fecha de inicio" },
      operation: { label: "Operación" },
      years: { label: "Años" },
      months: { label: "Meses" },
      weeks: { label: "Semanas" },
      days: { label: "Días" },
    },
    outputs: {
      resultDate: { label: "Fecha resultante" },
      totalDaysOffset: { label: "Desfase total en días" },
    },
    options: { operation: op("Sumar (+)", "Restar (−)") },
  },
  it: {
    title: "Calcolatore Aggiungi / Sottrai Date",
    short: "Aggiungi o sottrai anni, mesi, settimane e giorni a una data.",
    description: "Calcolatore gratuito per aggiungere/sottrarre date. Scegli una data di partenza, aggiungi o sottrai anni, mesi, settimane e giorni per ottenere la data risultante.",
    keywords: ["aggiungere giorni a una data", "sottrarre giorni", "calcolatore di date", "data futura"],
    inputs: {
      startDate: { label: "Data di partenza" },
      operation: { label: "Operazione" },
      years: { label: "Anni" },
      months: { label: "Mesi" },
      weeks: { label: "Settimane" },
      days: { label: "Giorni" },
    },
    outputs: {
      resultDate: { label: "Data risultante" },
      totalDaysOffset: { label: "Scostamento totale in giorni" },
    },
    options: { operation: op("Aggiungi (+)", "Sottrai (−)") },
  },
  ar: {
    title: "حاسبة إضافة / طرح التواريخ",
    short: "أضف أو اطرح سنوات وأشهر وأسابيع وأيام من أي تاريخ.",
    description: "حاسبة مجانية لإضافة/طرح التواريخ. اختر تاريخ البداية، أضف أو اطرح سنوات وأشهر وأسابيع وأيام للحصول على التاريخ الناتج.",
    keywords: ["إضافة أيام إلى تاريخ", "طرح أيام من تاريخ", "حاسبة التاريخ", "تاريخ مستقبلي"],
    inputs: {
      startDate: { label: "تاريخ البداية" },
      operation: { label: "العملية" },
      years: { label: "سنوات" },
      months: { label: "أشهر" },
      weeks: { label: "أسابيع" },
      days: { label: "أيام" },
    },
    outputs: {
      resultDate: { label: "التاريخ الناتج" },
      totalDaysOffset: { label: "إجمالي إزاحة الأيام" },
    },
    options: { operation: op("إضافة (+)", "طرح (−)") },
  },
  ru: {
    title: "Калькулятор Прибавления / Вычитания Дат",
    short: "Прибавьте или вычтите годы, месяцы, недели и дни к дате.",
    description: "Бесплатный калькулятор прибавления/вычитания дат. Выберите начальную дату, прибавьте или вычтите годы, месяцы, недели и дни, чтобы получить итоговую дату.",
    keywords: ["прибавить дни к дате", "вычесть дни из даты", "калькулятор дат", "будущая дата"],
    inputs: {
      startDate: { label: "Начальная дата" },
      operation: { label: "Операция" },
      years: { label: "Годы" },
      months: { label: "Месяцы" },
      weeks: { label: "Недели" },
      days: { label: "Дни" },
    },
    outputs: {
      resultDate: { label: "Итоговая дата" },
      totalDaysOffset: { label: "Общее смещение в днях" },
    },
    options: { operation: op("Прибавить (+)", "Вычесть (−)") },
  },
  zh: {
    title: "日期加减计算器",
    short: "在任意日期上加上或减去年、月、周和天。",
    description: "免费的日期加减计算器。选择起始日期，加上或减去年、月、周和天，即可得到结果日期。",
    keywords: ["日期加天数", "日期减天数", "日期计算器", "未来日期"],
    inputs: {
      startDate: { label: "起始日期" },
      operation: { label: "运算" },
      years: { label: "年" },
      months: { label: "月" },
      weeks: { label: "周" },
      days: { label: "天" },
    },
    outputs: {
      resultDate: { label: "结果日期" },
      totalDaysOffset: { label: "总天数偏移" },
    },
    options: { operation: op("加 (+)", "减 (−)") },
  },
  ja: {
    title: "日付加算 / 減算計算機",
    short: "任意の日付に年・月・週・日を加算または減算します。",
    description: "無料の日付加減計算機。開始日を選び、年・月・週・日を加算または減算すると、結果の日付が得られます。",
    keywords: ["日付に日数を加算", "日付から日数を減算", "日付計算機", "未来の日付"],
    inputs: {
      startDate: { label: "開始日" },
      operation: { label: "演算" },
      years: { label: "年" },
      months: { label: "月" },
      weeks: { label: "週" },
      days: { label: "日" },
    },
    outputs: {
      resultDate: { label: "結果の日付" },
      totalDaysOffset: { label: "合計日数オフセット" },
    },
    options: { operation: op("加算 (+)", "減算 (−)") },
  },
  ko: {
    title: "날짜 더하기 / 빼기 계산기",
    short: "어떤 날짜에 연·월·주·일을 더하거나 뺍니다.",
    description: "무료 날짜 더하기/빼기 계산기. 시작일을 선택하고 연·월·주·일을 더하거나 빼면 결과 날짜를 얻을 수 있습니다.",
    keywords: ["날짜에 일수 더하기", "날짜에서 일수 빼기", "날짜 계산기", "미래 날짜"],
    inputs: {
      startDate: { label: "시작일" },
      operation: { label: "연산" },
      years: { label: "년" },
      months: { label: "개월" },
      weeks: { label: "주" },
      days: { label: "일" },
    },
    outputs: {
      resultDate: { label: "결과 날짜" },
      totalDaysOffset: { label: "총 일수 오프셋" },
    },
    options: { operation: op("더하기 (+)", "빼기 (−)") },
  },
  hi: {
    title: "तिथि जोड़ / घटाव कैलकुलेटर",
    short: "किसी भी तिथि में वर्ष, माह, सप्ताह और दिन जोड़ें या घटाएं।",
    description: "मुफ्त तिथि जोड़/घटाव कैलकुलेटर। आरंभ तिथि चुनें, वर्ष, माह, सप्ताह और दिन जोड़ें या घटाएं और परिणामी तिथि पाएं।",
    keywords: ["तिथि में दिन जोड़ें", "तिथि से दिन घटाएं", "तिथि कैलकुलेटर", "भविष्य की तिथि"],
    inputs: {
      startDate: { label: "आरंभ तिथि" },
      operation: { label: "संक्रिया" },
      years: { label: "वर्ष" },
      months: { label: "महीने" },
      weeks: { label: "सप्ताह" },
      days: { label: "दिन" },
    },
    outputs: {
      resultDate: { label: "परिणामी तिथि" },
      totalDaysOffset: { label: "कुल दिन ऑफसेट" },
    },
    options: { operation: op("जोड़ें (+)", "घटाएं (−)") },
  },
};

export default i18n;
