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
      { q: "What happens if I add 1 month to January 31?", a: "The calculator clamps to the last valid day of the month. January 31 + 1 month = February 28 (or 29 in a leap year), since February has no 31st day." },
      { q: "Can I add weeks and days together?", a: "Yes. You can enter values in years, months, weeks, and days simultaneously. They are all applied to the start date in sequence: years/months first (with clamping), then weeks and days as exact 24-hour periods." },
    ],
  },
  nl: {
    title: "Date Add / Subtract Calculator",
    short: "Add or subtract jaren, maanden, weeks and dagen from any date.",
    description:
      "Gratis add/subtract date calculator. Pick a start date, choose to add or subtract, and enter jaren, maanden, weeks and dagen to get the resulting date and the total day offset.",
    keywords: ["add dagen to date", "subtract dagen from date", "date calculator", "date plus dagen", "future date calculator", "dagen from today"],
    inputs: {
      startDate: { label: "Start date" },
      operation: { label: "Operation" },
      years: { label: "Years" },
      months: { label: "Months" },
      weeks: { label: "Weeks" },
      days: { label: "Days" },
    },
    outputs: {
      resultDate: { label: "Resultaat date" },
      totalDaysOffset: { label: "Total day offset" },
    },
    options: { operation: op("Add (+)", "Subtract (−)") },
    faq: [
      { q: "How do I add dagen to a date?", a: "Pick the start date, leave the operation on 'Add', and enter the nummer of dagen (and optionally weeks, maanden, jaren). The result date updates direct." },
      { q: "How are maanden and jaren added?", a: "Years and maanden are applied first as calendar units, clamping to the last valid day (Jan 31 + 1 month = Feb 28/29). Weeks and dagen are then added as exact 24-hour dagen." },
      { q: "What is the total day offset?", a: "It is the net nummer of calendar dagen between the start date and the result — positive when adding, negative when subtracting." },
    ],
  },

  pl: {
    title: "Date Add / Subtract Kalkulator",
    short: "Add or subtract lat, miesięcy, weeks and dni from any date.",
    description:
      "Darmowy add/subtract date kalkulator. Pick a start date, choose to add or subtract, and enter lat, miesięcy, weeks and dni to get the resulting date and the total day offset.",
    keywords: ["add dni to date", "subtract dni from date", "date kalkulator", "date plus dni", "future date kalkulator", "dni from today"],
    inputs: {
      startDate: { label: "Start date" },
      operation: { label: "Operation" },
      years: { label: "Years" },
      months: { label: "Months" },
      weeks: { label: "Weeks" },
      days: { label: "Days" },
    },
    outputs: {
      resultDate: { label: "Wynik date" },
      totalDaysOffset: { label: "Total day offset" },
    },
    options: { operation: op("Add (+)", "Subtract (−)") },
    faq: [
      { q: "How do I add dni to a date?", a: "Pick the start date, leave the operation on 'Add', and enter the liczba of dni (and optionally weeks, miesięcy, lat). The result date updates natychmiast." },
      { q: "How are miesięcy and lat added?", a: "Years and miesięcy are applied first as calendar units, clamping to the last valid day (Jan 31 + 1 month = Feb 28/29). Weeks and dni are then added as exact 24-hour dni." },
      { q: "What is the total day offset?", a: "It is the net liczba of calendar dni between the start date and the result — positive when adding, negative when subtracting." },
    ],
  },
  pt: {
    title: "Calculadora de Soma de Datas",
    short: "Some ou subtraia dias, semanas, meses ou anos a uma data.",
    description:
      "Calculadora gratuita de soma de datas. Adicione ou subtraia dias, semanas, meses ou anos a uma data específica.",
    keywords: ["somar datas", "subtrair datas", "adicionar dias", "calcular data futura", "data passada"],
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
    title: "Kalkulator Tambah Tanggal",
    short: "Tambah atau kurangi hari, minggu, bulan, atau tahun pada tanggal.",
    description:
      "Kalkulator tambah tanggal gratis. Tambah atau kurangi hari, minggu, bulan, atau tahun pada tanggal tertentu.",
    keywords: ["tambah tanggal", "kurang tanggal", "tambah hari", "hitung tanggal depan", "tanggal lampau"],
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
      "Ücretsiz tarih ekleme/çıkarma hesaplama. Bir başlangıç tarihi seçin, ekle veya çıkar işlemini belirleyin ve yıl, ay, hafta, gün girin.",
    keywords: ["tarihe gün ekle", "tarihten gün çıkar", "tarih hesaplama", "gelecek tarih", "bugünden günler"],
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
    faq: [],
  },
  de: {
    title: "Datum Addieren / Subtrahieren Rechner",
    short: "Addieren oder subtrahieren Sie Jahre, Monate, Wochen und Tage zu einem Datum.",
    description:
      "Kostenloser Datumsrechner: Wählen Sie ein Startdatum, Addieren oder Subtrahieren und geben Sie Jahre, Monate, Wochen und Tage ein.",
    keywords: ["Tage zu Datum addieren", "Tage von Datum subtrahieren", "Datum plus Tage", "Zukunftstag", "Tage ab heute"],
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
      totalDaysOffset: { label: "Gesamttage" },
    },
    options: { operation: op("Addieren (+)", "Subtrahieren (−)") },
    faq: [],
  },
  fr: {
    title: "Calculateur d'Addition / Soustraction de Dates",
    short: "Ajoutez ou soustrayez des années, mois, semaines et jours à une date.",
    description:
      "Calculateur gratuit d'addition/soustraction de dates. Choisissez une date de début, ajoutez ou soustrayez, et entrez années, mois, semaines et jours.",
    keywords: ["ajouter jours à date", "soustraire jours d'une date", "calcul date", "date future", "jours depuis aujourd'hui"],
    inputs: {
      startDate: { label: "Date de début" },
      operation: { label: "Opération" },
      years: { label: "Années" },
      months: { label: "Mois" },
      weeks: { label: "Semaines" },
      days: { label: "Jours" },
    },
    outputs: {
      resultDate: { label: "Date résultante" },
      totalDaysOffset: { label: "Écart total en jours" },
    },
    options: { operation: op("Ajouter (+)", "Soustraire (−)") },
    faq: [],
  },
  es: {
    title: "Calculadora de Suma/Resta de Fechas",
    short: "Sume o reste años, meses, semanas y días a cualquier fecha.",
    description:
      "Calculadora gratuita de suma/resta de fechas. Elija una fecha de inicio, sume o reste, e ingrese años, meses, semanas y días.",
    keywords: ["sumar días a fecha", "restar días de fecha", "calculadora de fechas", "fecha futura", "días desde hoy"],
    inputs: {
      startDate: { label: "Fecha inicio" },
      operation: { label: "Operación" },
      years: { label: "Años" },
      months: { label: "Meses" },
      weeks: { label: "Semanas" },
      days: { label: "Días" },
    },
    outputs: {
      resultDate: { label: "Fecha resultado" },
      totalDaysOffset: { label: "Diferencia total días" },
    },
    options: { operation: op("Sumar (+)", "Restar (−)") },
    faq: [],
  },
  it: {
    title: "Calcolatore Aggiungi/Sottrai Date",
    short: "Aggiungi o sottrai anni, mesi, settimane e giorni da qualsiasi data.",
    description:
      "Calcolatore gratuito di aggiunta/sottrazione date. Scegli una data di inizio, aggiungi o sottrai, e inserisci anni, mesi, settimane e giorni.",
    keywords: ["aggiungi giorni a data", "sottrai giorni da data", "calcolatore date", "data futura", "giorni da oggi"],
    inputs: {
      startDate: { label: "Data inizio" },
      operation: { label: "Operazione" },
      years: { label: "Anni" },
      months: { label: "Mesi" },
      weeks: { label: "Settimane" },
      days: { label: "Giorni" },
    },
    outputs: {
      resultDate: { label: "Data risultato" },
      totalDaysOffset: { label: "Differenza giorni totale" },
    },
    options: { operation: op("Aggiungi (+)", "Sottrai (−)") },
    faq: [],
  },
  ar: {
    title: "حاسبة إضافة / طرح التواريخ",
    short: "أضف أو اطرح سنوات أو أشهر أو أسابيع أو أيام من أي تاريخ.",
    description:
      "حاسبة مجانية لإضافة / طرح التواريخ. اختر تاريخ بداية، اختر إضافة أو طرح، وأدخل السنوات والأشهر والأسابيع والأيام.",
    keywords: ["إضافة أيام إلى تاريخ", "طرح أيام من تاريخ", "حاسبة تاريخ", "تاريخ مستقبلي", "أيام من اليوم"],
    inputs: {
      startDate: { label: "تاريخ البداية" },
      operation: { label: "العملية" },
      years: { label: "سنوات" },
      months: { label: "أشهر" },
      weeks: { label: "أسابيع" },
      days: { label: "أيام" },
    },
    outputs: {
      resultDate: { label: "تاريخ النتيجة" },
      totalDaysOffset: { label: "إجمالي فرق الأيام" },
    },
    options: { operation: op("إضافة (+)", "طرح (−)") },
    faq: [],
  },
  ru: {
    title: "Калькулятор Добавления / Вычитания Дат",
    short: "Добавьте или вычтите годы, месяцы, недели и дни из любой даты.",
    description:
      "Бесплатный калькулятор добавления/вычитания дат. Выберите начальную дату, добавьте или вычтите, и введите годы, месяцы, недели и дни.",
    keywords: ["добавить дни к дате", "вычесть дни из даты", "калькулятор дат", "будущая дата", "дней от сегодня"],
    inputs: {
      startDate: { label: "Начальная дата" },
      operation: { label: "Операция" },
      years: { label: "Годы" },
      months: { label: "Месяцы" },
      weeks: { label: "Недели" },
      days: { label: "Дни" },
    },
    outputs: {
      resultDate: { label: "Дата результата" },
      totalDaysOffset: { label: "Общее смещение дней" },
    },
    options: { operation: op("Добавить (+)", "Вычесть (−)") },
    faq: [],
  },
  zh: {
    title: "日期加减计算器",
    short: "在任意日期上增加或减少年、月、周和天。",
    description:
      "免费的日期加减计算器。选择一个开始日期，选择加或减，然后输入年、月、周和天。",
    keywords: ["日期加天数", "日期减天数", "日期计算器", "未来日期", "从今天算起"],
    inputs: {
      startDate: { label: "开始日期" },
      operation: { label: "操作" },
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
    faq: [],
  },
  ja: {
    title: "日付加算/減算計算機",
    short: "任意の日付に年、月、週、日を加算または減算します。",
    description:
      "無料の日付加減計算機。開始日を選択し、加算または減算を選び、年、月、週、日を入力します。",
    keywords: ["日付に日を追加", "日付から日を減算", "日付計算", "未来日付", "今日からの日数"],
    inputs: {
      startDate: { label: "開始日" },
      operation: { label: "操作" },
      years: { label: "年" },
      months: { label: "月" },
      weeks: { label: "週" },
      days: { label: "日" },
    },
    outputs: {
      resultDate: { label: "結果日付" },
      totalDaysOffset: { label: "総日数オフセット" },
    },
    options: { operation: op("加算 (+)", "減算 (−)") },
    faq: [],
  },
  ko: {
    title: "날짜 더하기/빼기 계산기",
    short: "모든 날짜에 년, 월, 주, 일을 더하거나 뺍니다.",
    description:
      "무료 날짜 더하기/빼기 계산기. 시작일을 선택하고 더하기 또는 빼기를 선택한 후 년, 월, 주, 일을 입력하세요.",
    keywords: ["날짜에 일 더하기", "날짜에서 일 빼기", "날짜 계산기", "미래 날짜", "오늘부터 일수"],
    inputs: {
      startDate: { label: "시작일" },
      operation: { label: "작업" },
      years: { label: "년" },
      months: { label: "월" },
      weeks: { label: "주" },
      days: { label: "일" },
    },
    outputs: {
      resultDate: { label: "결과 날짜" },
      totalDaysOffset: { label: "총 일수 차이" },
    },
    options: { operation: op("더하기 (+)", "빼기 (−)") },
    faq: [],
  },
  hi: {
    title: "दिनांक जोड़ें / घटाएँ कैलकुलेटर",
    short: "किसी भी तारीख में वर्ष, महीने, सप्ताह और दिन जोड़ें या घटाएँ।",
    description:
      "मुफ्त तारीख जोड़/घटाव कैलकुलेटर। एक प्रारंभ तिथि चुनें, जोड़ें या घटाएँ चुनें, और वर्ष, महीने, सप्ताह और दिन दर्ज करें।",
    keywords: ["तारीख में दिन जोड़ें", "तारीख से दिन घटाएँ", "तारीख कैलकुलेटर", "भविष्य की तारीख", "आज से दिन"],
    inputs: {
      startDate: { label: "प्रारंभ तिथि" },
      operation: { label: "संक्रिया" },
      years: { label: "वर्ष" },
      months: { label: "महीने" },
      weeks: { label: "सप्ताह" },
      days: { label: "दिन" },
    },
    outputs: {
      resultDate: { label: "परिणाम तिथि" },
      totalDaysOffset: { label: "कुल दिन ऑफ़सेट" },
    },
    options: { operation: op("जोड़ें (+)", "घटाएँ (−)") },
    faq: [],
  },
};

export default i18n;