import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Time Unit Converter",
    short: "Convert between seconds, minutes, hours, days, weeks, months, and years.",
    description:
      "Free time converter for converting between seconds, minutes, hours, days, weeks, months, and years using precise Gregorian calendar averages.",
    keywords: ["time converter", "unit conversion", "hours to days", "days to years", "time calculator"],
    inputs: {
      value: { label: "Value", help: "Amount to convert." },
      fromUnit: { label: "From unit", help: "Source time unit." },
      toUnit: { label: "To unit", help: "Target time unit." },
    },
    outputs: {
      result: { label: "Result", help: "Converted time value." },
    },
    options: {
      second: "Second", minute: "Minute", hour: "Hour", day: "Day", week: "Week", month: "Month", year: "Year",
    },
    errors: { invalidValue: "Value must be positive." },
    faq: [
      { q: "Why does 1 year = 365.25 days?", a: "The Gregorian calendar averages leap years: every 4 years, with exceptions for centuries not divisible by 400." },
      { q: "Why does 1 month ≈ 30.4375 days?", a: "Average calendar month: 365.25 days / 12 = 30.4375 days." },
    ],
  },

  tr: {
    title: "Zaman Birimi Dönüştürücü",
    short: "Saniye, dakika, saat, gün, hafta, ay ve yıl arasında dönüşüm yapın.",
    description: "Gregoryen takvim ortalamalarını kullanarak zaman birimlerini dönüştürmek için ücretsiz zaman dönüştürücü.",
    keywords: ["zaman dönüştürücü", "birim dönüşümü", "saatleri günlere", "günleri yıllara", "zaman hesaplayıcı"],
    inputs: {
      value: { label: "Değer", help: "Dönüştürülecek miktar." },
      fromUnit: { label: "Kaynak birim", help: "Kaynak zaman birimi." },
      toUnit: { label: "Hedef birim", help: "Hedef zaman birimi." },
    },
    outputs: {
      result: { label: "Sonuç", help: "Dönüştürülen zaman değeri." },
    },
    options: {
      second: "Saniye", minute: "Dakika", hour: "Saat", day: "Gün", week: "Hafta", month: "Ay", year: "Yıl",
    },
    errors: { invalidValue: "Değer pozitif olmalıdır." },
    faq: [
      { q: "Neden 1 yıl = 365,25 gün?", a: "Gregoryen takvimi artık yılları ortalar: her 4 yılda bir, 100'e bölünemeyenler hariç." },
    ],
  },

  de: {
    title: "Zeit-Umrechner",
    short: "Konvertieren Sie zwischen Sekunden, Minuten, Stunden, Tagen, Wochen, Monaten und Jahren.",
    description: "Kostenloser Zeit-Umrechner mit präzisen gregorianischen Kalenderdurchschnitten.",
    keywords: ["Zeit-Umrechner", "Einheitskonvertierung", "Stunden in Tage", "Tage in Jahre", "Zeitrechner"],
    inputs: {
      value: { label: "Wert", help: "Menge zum Konvertieren." },
      fromUnit: { label: "Von Einheit", help: "Quellzeiteinheit." },
      toUnit: { label: "Zu Einheit", help: "Zielzeiteinheit." },
    },
    outputs: {
      result: { label: "Ergebnis", help: "Konvertierter Zeitwert." },
    },
    options: {
      second: "Sekunde", minute: "Minute", hour: "Stunde", day: "Tag", week: "Woche", month: "Monat", year: "Jahr",
    },
    errors: { invalidValue: "Wert muss positiv sein." },
    faq: [
      { q: "Warum ist 1 Jahr = 365,25 Tage?", a: "Der gregorianische Kalender mittelt Schaltjahre: alle 4 Jahre, mit Ausnahmen für Jahrhunderte." },
    ],
  },

  fr: {
    title: "Convertisseur de Temps",
    short: "Convertissez entre secondes, minutes, heures, jours, semaines, mois et années.",
    description: "Convertisseur de temps gratuit avec moyennes précises du calendrier grégorien.",
    keywords: ["convertisseur de temps", "conversion d'unités", "heures en jours", "jours en années", "calculatrice de temps"],
    inputs: {
      value: { label: "Valeur", help: "Quantité à convertir." },
      fromUnit: { label: "Unité source", help: "Unité de temps source." },
      toUnit: { label: "Unité cible", help: "Unité de temps cible." },
    },
    outputs: {
      result: { label: "Résultat", help: "Valeur de temps convertie." },
    },
    options: {
      second: "Seconde", minute: "Minute", hour: "Heure", day: "Jour", week: "Semaine", month: "Mois", year: "Année",
    },
    errors: { invalidValue: "La valeur doit être positive." },
    faq: [
      { q: "Pourquoi 1 an = 365,25 jours?", a: "Le calendrier grégorien moyenne les années bissextiles: tous les 4 ans, sauf exceptions." },
    ],
  },

  es: {
    title: "Convertidor de Tiempo",
    short: "Convierta entre segundos, minutos, horas, días, semanas, meses y años.",
    description: "Convertidor de tiempo gratuito con promedios precisos del calendario gregoriano.",
    keywords: ["convertidor de tiempo", "conversión de unidades", "horas a días", "días a años", "calculadora de tiempo"],
    inputs: {
      value: { label: "Valor", help: "Cantidad a convertir." },
      fromUnit: { label: "Unidad de origen", help: "Unidad de tiempo de origen." },
      toUnit: { label: "Unidad de destino", help: "Unidad de tiempo de destino." },
    },
    outputs: {
      result: { label: "Resultado", help: "Valor de tiempo convertido." },
    },
    options: {
      second: "Segundo", minute: "Minuto", hour: "Hora", day: "Día", week: "Semana", month: "Mes", year: "Año",
    },
    errors: { invalidValue: "El valor debe ser positivo." },
    faq: [
      { q: "¿Por qué 1 año = 365,25 días?", a: "El calendario gregoriano promedia años bisiestos: cada 4 años, con excepciones." },
    ],
  },

  it: {
    title: "Convertitore di Tempo",
    short: "Converti tra secondi, minuti, ore, giorni, settimane, mesi e anni.",
    description: "Convertitore di tempo gratuito con medie precise del calendario gregoriano.",
    keywords: ["convertitore di tempo", "conversione di unità", "ore in giorni", "giorni in anni", "calcolatore di tempo"],
    inputs: {
      value: { label: "Valore", help: "Quantità da convertire." },
      fromUnit: { label: "Unità di origine", help: "Unità di tempo di origine." },
      toUnit: { label: "Unità di destinazione", help: "Unità di tempo di destinazione." },
    },
    outputs: {
      result: { label: "Risultato", help: "Valore di tempo convertito." },
    },
    options: {
      second: "Secondo", minute: "Minuto", hour: "Ora", day: "Giorno", week: "Settimana", month: "Mese", year: "Anno",
    },
    errors: { invalidValue: "Il valore deve essere positivo." },
    faq: [
      { q: "Perché 1 anno = 365,25 giorni?", a: "Il calendario gregoriano media gli anni bisestili: ogni 4 anni, con eccezioni." },
    ],
  },

  ar: {
    title: "محول الوقت",
    short: "تحويل بين الثواني والدقائق والساعات والأيام والأسابيع والأشهر والسنوات.",
    description: "محول وقت مجاني بمتوسطات دقيقة للتقويم الجريجوري.",
    keywords: ["محول الوقت", "تحويل الوحدات", "الساعات إلى الأيام", "الأيام إلى السنوات", "حاسبة الوقت"],
    inputs: {
      value: { label: "القيمة", help: "الكمية المراد تحويلها." },
      fromUnit: { label: "من الوحدة", help: "وحدة الوقت المصدر." },
      toUnit: { label: "إلى الوحدة", help: "وحدة الوقت الهدف." },
    },
    outputs: {
      result: { label: "النتيجة", help: "قيمة الوقت المحولة." },
    },
    options: {
      second: "ثانية", minute: "دقيقة", hour: "ساعة", day: "يوم", week: "أسبوع", month: "شهر", year: "سنة",
    },
    errors: { invalidValue: "يجب أن تكون القيمة موجبة." },
    faq: [
      { q: "لماذا 1 سنة = 365.25 يوم؟", a: "يعدل التقويم الجريجوري السنوات الكبيسة: كل 4 سنوات، مع استثناءات للقرون." },
    ],
  },

  ru: {
    title: "Конвертер времени",
    short: "Конвертируйте между секундами, минутами, часами, днями, неделями, месяцами и годами.",
    description: "Бесплатный конвертер времени с точными средними значениями григорианского календаря.",
    keywords: ["конвертер времени", "преобразование единиц", "часы в дни", "дни в годы", "калькулятор времени"],
    inputs: {
      value: { label: "Значение", help: "Количество для преобразования." },
      fromUnit: { label: "Из единицы", help: "Исходная единица времени." },
      toUnit: { label: "В единицу", help: "Целевая единица времени." },
    },
    outputs: {
      result: { label: "Результат", help: "Преобразованное значение времени." },
    },
    options: {
      second: "Секунда", minute: "Минута", hour: "Час", day: "День", week: "Неделя", month: "Месяц", year: "Год",
    },
    errors: { invalidValue: "Значение должно быть положительным." },
    faq: [
      { q: "Почему 1 год = 365,25 дней?", a: "Григорианский календарь усредняет високосные годы: каждые 4 года, с исключениями для веков." },
    ],
  },

  zh: {
    title: "时间转换器",
    short: "在秒、分钟、小时、天、周、月和年之间转换。",
    description: "免费时间转换器，使用精确的格里历日历平均值。",
    keywords: ["时间转换器", "单位转换", "小时到天", "天到年", "时间计算器"],
    inputs: {
      value: { label: "值", help: "要转换的数量。" },
      fromUnit: { label: "源单位", help: "源时间单位。" },
      toUnit: { label: "目标单位", help: "目标时间单位。" },
    },
    outputs: {
      result: { label: "结果", help: "转换后的时间值。" },
    },
    options: {
      second: "秒", minute: "分钟", hour: "小时", day: "天", week: "周", month: "月", year: "年",
    },
    errors: { invalidValue: "值必须为正数。" },
    faq: [
      { q: "为什么1年 = 365.25天？", a: "格里历平均闰年：每4年一次，世纪有例外。" },
    ],
  },

  ja: {
    title: "時間変換ツール",
    short: "秒、分、時間、日、週、月、年の間で変換します。",
    description: "グレゴリオ暦の平均値を使用した無料の時間変換ツール。",
    keywords: ["時間変換", "単位変換", "時間から日へ", "日から年へ", "時間計算機"],
    inputs: {
      value: { label: "値", help: "変換する量。" },
      fromUnit: { label: "元の単位", help: "元の時間単位。" },
      toUnit: { label: "目的地の単位", help: "対象の時間単位。" },
    },
    outputs: {
      result: { label: "結果", help: "変換された時間値。" },
    },
    options: {
      second: "秒", minute: "分", hour: "時間", day: "日", week: "週", month: "月", year: "年",
    },
    errors: { invalidValue: "値は正の数である必要があります。" },
    faq: [
      { q: "なぜ1年 = 365.25日なのか？", a: "グレゴリオ暦は閏年を平均化しています：4年ごと、ただし世紀の例外。" },
    ],
  },

  ko: {
    title: "시간 변환기",
    short: "초, 분, 시간, 일, 주, 월, 연도 간에 변환하세요.",
    description: "정확한 그레고리력 평균값을 사용한 무료 시간 변환기입니다.",
    keywords: ["시간 변환기", "단위 변환", "시간에서 일로", "일에서 연도로", "시간 계산기"],
    inputs: {
      value: { label: "값", help: "변환할 수량입니다." },
      fromUnit: { label: "원본 단위", help: "원본 시간 단위입니다." },
      toUnit: { label: "대상 단위", help: "대상 시간 단위입니다." },
    },
    outputs: {
      result: { label: "결과", help: "변환된 시간 값입니다." },
    },
    options: {
      second: "초", minute: "분", hour: "시간", day: "일", week: "주", month: "월", year: "연도",
    },
    errors: { invalidValue: "값은 양수여야 합니다." },
    faq: [
      { q: "1년이 365.25일인 이유는?", a: "그레고리력은 윤년을 평균화합니다: 4년마다, 세기의 예외를 제외하고." },
    ],
  },

  hi: {
    title: "समय रूपांतरण उपकरण",
    short: "सेकंड, मिनट, घंटे, दिन, सप्ताह, महीने और साल के बीच रूपांतरण करें।",
    description: "सटीक ग्रेगोरियन कैलेंडर औसत के साथ मुफ्त समय कनवर्टर।",
    keywords: ["समय कनवर्टर", "इकाई रूपांतरण", "घंटे से दिन", "दिन से साल", "समय कैलकुलेटर"],
    inputs: {
      value: { label: "मान", help: "रूपांतरित की जाने वाली मात्रा।" },
      fromUnit: { label: "स्रोत इकाई", help: "स्रोत समय इकाई।" },
      toUnit: { label: "लक्ष्य इकाई", help: "लक्ष्य समय इकाई।" },
    },
    outputs: {
      result: { label: "परिणाम", help: "रूपांतरित समय मान।" },
    },
    options: {
      second: "सेकंड", minute: "मिनट", hour: "घंटा", day: "दिन", week: "सप्ताह", month: "महीना", year: "साल",
    },
    errors: { invalidValue: "मान सकारात्मक होना चाहिए।" },
    faq: [
      { q: "1 साल = 365.25 दिन क्यों?", a: "ग्रेगोरियन कैलेंडर लीप वर्षों को औसत करता है: हर 4 साल में, शताब्दी के अपवाद के साथ।" },
    ],
  },
};

export default i18n;
