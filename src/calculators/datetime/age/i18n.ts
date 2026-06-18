import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Age Calculator",
    short: "Find your exact age in years, months and days, plus totals and your next birthday.",
    description:
      "Free age calculator. Enter your date of birth to see your exact age in years, months and days, your age in total months, weeks and days, and how long until your next birthday.",
    keywords: ["age calculator", "how old am I", "age from date of birth", "exact age", "age in days", "next birthday calculator"],
    inputs: {
      birthDate: { label: "Date of birth", help: "The day you were born." },
      asOfDate: { label: "Age at date", help: "Calculate age as of this date (defaults to today)." },
    },
    outputs: {
      ageYears: { label: "Years", help: "Completed calendar years." },
      ageMonths: { label: "Months", help: "Months beyond the completed years." },
      ageDays: { label: "Days", help: "Days beyond the completed months." },
      totalMonths: { label: "Age in months" },
      totalWeeks: { label: "Age in weeks" },
      totalDays: { label: "Age in days" },
      nextBirthday: { label: "Next birthday" },
      daysToNextBirthday: { label: "Days to next birthday" },
    },
    faq: [
      { q: "How is age calculated?", a: "We count completed calendar years from your birth date to the chosen date, then the leftover months and days. For example, someone born 1990-06-15 is 33 years, 0 months and 0 days old on 2023-06-15." },
      { q: "How is a Feb 29 birthday handled?", a: "For the next-birthday calculation in a non-leap year, a Feb 29 birthday is treated as Feb 28. The exact-age count itself is unaffected." },
      { q: "Can I calculate age at a past or future date?", a: "Yes — change the 'Age at date' field. It defaults to today, but you can set any date to find someone's age then." },
      { q: "How many days old is someone who is 30 years old?", a: "A 30-year-old has lived approximately 10,957 days (30 x 365.25 accounting for leap years). The calculator gives the exact count by comparing the birth date to the as-of date." },
      { q: "Does the calculator account for time of birth?", a: "No. The calculator uses calendar dates only, ignoring the exact time of day. Age is counted in completed years, months, and days from the date of birth to the as-of date." },
    ],
  },
  nl: {
    title: "Leeftijd Calculator",
    short: "Find your exact age in jaren, maanden and dagen, plus totals and your next birthday.",
    description:
      "Gratis age calculator. Enter your date of birth to see your exact age in jaren, maanden and dagen, your age in total maanden, weeks and dagen, and how long until your next birthday.",
    keywords: ["age calculator", "how old am I", "age from date of birth", "exact age", "age in dagen", "next birthday calculator"],
    inputs: {
      birthDate: { label: "Date of birth", help: "The day you were born." },
      asOfDate: { label: "Leeftijd at date", help: "Bereken age as of this date (defaults to today)." },
    },
    outputs: {
      ageYears: { label: "Years", help: "Completed calendar jaren." },
      ageMonths: { label: "Months", help: "Months beyond the completed jaren." },
      ageDays: { label: "Days", help: "Days beyond the completed maanden." },
      totalMonths: { label: "Leeftijd in maanden" },
      totalWeeks: { label: "Leeftijd in weeks" },
      totalDays: { label: "Leeftijd in dagen" },
      nextBirthday: { label: "Next birthday" },
      daysToNextBirthday: { label: "Days to next birthday" },
    },
    faq: [
      { q: "How is age berekend?", a: "We count completed calendar jaren from your birth date to the chosen date, then the leftover maanden and dagen. For example, someone born 1990-06-15 is 33 jaren, 0 maanden and 0 dagen old on 2023-06-15." },
      { q: "How is a Feb 29 birthday handled?", a: "For the next-birthday calculation in a non-leap year, a Feb 29 birthday is treated as Feb 28. The exact-age count itself is unaffected." },
      { q: "Can I bereken age at a past or future date?", a: "Yes — change the 'Leeftijd at date' field. It defaults to today, but you can set any date to find someone's age then." },
    ],
  },

  pl: {
    title: "Wiek Kalkulator",
    short: "Find your exact age in lat, miesięcy and dni, plus totals and your next birthday.",
    description:
      "Darmowy age kalkulator. Enter your date of birth to see your exact age in lat, miesięcy and dni, your age in total miesięcy, weeks and dni, and how long until your next birthday.",
    keywords: ["age kalkulator", "how old am I", "age from date of birth", "exact age", "age in dni", "next birthday kalkulator"],
    inputs: {
      birthDate: { label: "Date of birth", help: "The day you were born." },
      asOfDate: { label: "Wiek at date", help: "Oblicz age as of this date (defaults to today)." },
    },
    outputs: {
      ageYears: { label: "Years", help: "Completed calendar lat." },
      ageMonths: { label: "Months", help: "Months beyond the completed lat." },
      ageDays: { label: "Days", help: "Days beyond the completed miesięcy." },
      totalMonths: { label: "Wiek in miesięcy" },
      totalWeeks: { label: "Wiek in weeks" },
      totalDays: { label: "Wiek in dni" },
      nextBirthday: { label: "Next birthday" },
      daysToNextBirthday: { label: "Days to next birthday" },
    },
    faq: [
      { q: "How is age obliczd?", a: "We count completed calendar lat from your birth date to the chosen date, then the leftover miesięcy and dni. For example, someone born 1990-06-15 is 33 lat, 0 miesięcy and 0 dni old on 2023-06-15." },
      { q: "How is a Feb 29 birthday handled?", a: "For the next-birthday calculation in a non-leap year, a Feb 29 birthday is treated as Feb 28. The exact-age count itself is unaffected." },
      { q: "Can I oblicz age at a past or future date?", a: "Yes — change the 'Wiek at date' field. It defaults to today, but you can set any date to find someone's age then." },
    ],
  },
  pt: {
    title: "Calculadora de Idade",
    short: "Calcule a sua idade exacta em anos, meses, dias e horas.",
    description:
      "Calculadora gratuita de idade. Calcule a idade em anos, meses, dias, horas e até segundos a partir da data de nascimento.",
    keywords: ["calculadora idade", "anos meses dias", "idade exacta", "data nascimento", "idade real"],
    inputs: {
      birthDate: { label: "Date of birth", help: "The day you were born." },
      asOfDate: { label: "Age at date", help: "Calculate age as of this date (defaults to today)." },
    },
    outputs: {
      ageYears: { label: "Years", help: "Completed calendar years." },
      ageMonths: { label: "Months", help: "Months beyond the completed years." },
      ageDays: { label: "Days", help: "Days beyond the completed months." },
      totalMonths: { label: "Age in months" },
      totalWeeks: { label: "Age in weeks" },
      totalDays: { label: "Age in days" },
      nextBirthday: { label: "Next birthday" },
      daysToNextBirthday: { label: "Days to next birthday" },
    },
    faq: [
      { q: "How is age calculated?", a: "We count completed calendar years from your birth date to the chosen date, then the leftover months and days. For example, someone born 1990-06-15 is 33 years, 0 months and 0 days old on 2023-06-15." },
      { q: "How is a Feb 29 birthday handled?", a: "For the next-birthday calculation in a non-leap year, a Feb 29 birthday is treated as Feb 28. The exact-age count itself is unaffected." },
      { q: "Can I calculate age at a past or future date?", a: "Yes — change the 'Age at date' field. It defaults to today, but you can set any date to find someone's age then." },
    ],
  },
  id: {
    title: "Kalkulator Usia",
    short: "Hitung usia Anda dalam tahun, bulan, hari, dan jam yang tepat.",
    description:
      "Kalkulator usia gratis. Hitung usia dalam tahun, bulan, hari, jam, bahkan detik dari tanggal lahir.",
    keywords: ["kalkulator usia", "tahun bulan hari", "usia tepat", "tanggal lahir", "umur"],
    inputs: {
      birthDate: { label: "Date of birth", help: "The day you were born." },
      asOfDate: { label: "Age at date", help: "Calculate age as of this date (defaults to today)." },
    },
    outputs: {
      ageYears: { label: "Years", help: "Completed calendar years." },
      ageMonths: { label: "Months", help: "Months beyond the completed years." },
      ageDays: { label: "Days", help: "Days beyond the completed months." },
      totalMonths: { label: "Age in months" },
      totalWeeks: { label: "Age in weeks" },
      totalDays: { label: "Age in days" },
      nextBirthday: { label: "Next birthday" },
      daysToNextBirthday: { label: "Days to next birthday" },
    },
    faq: [
      { q: "How is age calculated?", a: "We count completed calendar years from your birth date to the chosen date, then the leftover months and days. For example, someone born 1990-06-15 is 33 years, 0 months and 0 days old on 2023-06-15." },
      { q: "How is a Feb 29 birthday handled?", a: "For the next-birthday calculation in a non-leap year, a Feb 29 birthday is treated as Feb 28. The exact-age count itself is unaffected." },
      { q: "Can I calculate age at a past or future date?", a: "Yes — change the 'Age at date' field. It defaults to today, but you can set any date to find someone's age then." },
    ],
  },

  tr: {
    title: "Yaş Hesaplama",
    short: "Yaşınızı yıl, ay ve gün olarak tam olarak bulun, ayrıca toplamlar ve bir sonraki doğum gününüzü görün.",
    description:
      "Ücretsiz yaş hesaplama. Doğum tarihinizi girerek tam yaşınızı yıl, ay ve gün olarak, toplam ay, hafta ve gün olarak yaşınızı ve bir sonraki doğum gününüze ne kadar kaldığını görün.",
    keywords: ["yaş hesaplama", "kaç yaşındayım", "doğum tarihinden yaş", "tam yaş", "gün olarak yaş", "sonraki doğum günü"],
    inputs: {
      birthDate: { label: "Doğum tarihi", help: "Doğduğunuz gün." },
      asOfDate: { label: "Tarihteki yaş", help: "Bu tarihteki yaşı hesapla (varsayılan bugün)." },
    },
    outputs: {
      ageYears: { label: "Yıl", help: "Tamamlanan takvim yılı." },
      ageMonths: { label: "Ay", help: "Tamamlanan yılların ötesindeki aylar." },
      ageDays: { label: "Gün", help: "Tamamlanan ayların ötesindeki günler." },
      totalMonths: { label: "Ay olarak yaş" },
      totalWeeks: { label: "Hafta olarak yaş" },
      totalDays: { label: "Gün olarak yaş" },
      nextBirthday: { label: "Sonraki doğum günü" },
      daysToNextBirthday: { label: "Sonraki doğum gününe kalan gün" },
    },
    faq: [],
  },
  de: {
    title: "Altersrechner",
    short: "Finden Sie Ihr genaues Alter in Jahren, Monaten und Tagen, plus Gesamtsummen und Ihren nächsten Geburtstag.",
    description:
      "Kostenloser Altersrechner. Geben Sie Ihr Geburtsdatum ein, um Ihr genaues Alter in Jahren, Monaten und Tagen, Ihr Alter in Gesamtmonaten, -wochen und -tagen zu sehen.",
    keywords: ["Altersrechner", "Wie alt bin ich", "Alter ab Geburtsdatum", "genaues Alter", "Alter in Tagen"],
    inputs: {
      birthDate: { label: "Geburtsdatum", help: "Der Tag, an dem Sie geboren wurden." },
      asOfDate: { label: "Alter am", help: "Alter zu diesem Datum berechnen (Standard heute)." },
    },
    outputs: {
      ageYears: { label: "Jahre", help: "Abgeschlossene Kalenderjahre." },
      ageMonths: { label: "Monate", help: "Monate über die abgeschlossenen Jahre hinaus." },
      ageDays: { label: "Tage", help: "Tage über die abgeschlossenen Monate hinaus." },
      totalMonths: { label: "Alter in Monaten" },
      totalWeeks: { label: "Alter in Wochen" },
      totalDays: { label: "Alter in Tagen" },
      nextBirthday: { label: "Nächster Geburtstag" },
      daysToNextBirthday: { label: "Tage bis zum nächsten Geburtstag" },
    },
    faq: [],
  },
  fr: {
    title: "Calculateur d'Age",
    short: "Trouvez votre âge exact en années, mois et jours, plus les totaux et votre prochain anniversaire.",
    description:
      "Calculateur d'âge gratuit. Entrez votre date de naissance pour voir votre âge exact en années, mois et jours, votre âge total en mois, semaines et jours.",
    keywords: ["calculateur âge", "quel âge", "âge date naissance", "âge exact", "âge en jours"],
    inputs: {
      birthDate: { label: "Date de naissance", help: "Le jour où vous êtes né." },
      asOfDate: { label: "Age au", help: "Calculer l'âge à cette date (défaut aujourd'hui)." },
    },
    outputs: {
      ageYears: { label: "Années", help: "Années civiles complètes." },
      ageMonths: { label: "Mois", help: "Mois au-delà des années complètes." },
      ageDays: { label: "Jours", help: "Jours au-delà des mois complets." },
      totalMonths: { label: "Age en mois" },
      totalWeeks: { label: "Age en semaines" },
      totalDays: { label: "Age en jours" },
      nextBirthday: { label: "Prochain anniversaire" },
      daysToNextBirthday: { label: "Jours avant prochain anniversaire" },
    },
    faq: [],
  },
  es: {
    title: "Calculadora de Edad",
    short: "Encuentre su edad exacta en años, meses y días, más totales y su próximo cumpleaños.",
    description:
      "Calculadora de edad gratuita. Ingrese su fecha de nacimiento para ver su edad exacta en años, meses y días, su edad total en meses, semanas y días.",
    keywords: ["calculadora edad", "cuantos años tengo", "edad desde fecha nacimiento", "edad exacta", "edad en días"],
    inputs: {
      birthDate: { label: "Fecha de nacimiento", help: "El día que nació." },
      asOfDate: { label: "Edad en fecha", help: "Calcular edad a esta fecha (defecto hoy)." },
    },
    outputs: {
      ageYears: { label: "Años", help: "Años calendario completados." },
      ageMonths: { label: "Meses", help: "Meses más allá de los años completados." },
      ageDays: { label: "Días", help: "Días más allá de los meses completados." },
      totalMonths: { label: "Edad en meses" },
      totalWeeks: { label: "Edad en semanas" },
      totalDays: { label: "Edad en días" },
      nextBirthday: { label: "Próximo cumpleaños" },
      daysToNextBirthday: { label: "Días hasta próximo cumpleaños" },
    },
    faq: [],
  },
  it: {
    title: "Calcolatore di Età",
    short: "Trova la tua età esatta in anni, mesi e giorni, più totali e il tuo prossimo compleanno.",
    description:
      "Calcolatore di età gratuito. Inserisci la tua data di nascita per vedere la tua età esatta in anni, mesi e giorni, la tua età totale in mesi, settimane e giorni.",
    keywords: ["calcolatore età", "quanti anni ho", "età da data di nascita", "età esatta", "età in giorni"],
    inputs: {
      birthDate: { label: "Data di nascita", help: "Il giorno in cui sei nato." },
      asOfDate: { label: "Età al", help: "Calcola età a questa data (predefinito oggi)." },
    },
    outputs: {
      ageYears: { label: "Anni", help: "Anni di calendario completati." },
      ageMonths: { label: "Mesi", help: "Mesi oltre gli anni completati." },
      ageDays: { label: "Giorni", help: "Giorni oltre i mesi completati." },
      totalMonths: { label: "Età in mesi" },
      totalWeeks: { label: "Età in settimane" },
      totalDays: { label: "Età in giorni" },
      nextBirthday: { label: "Prossimo compleanno" },
      daysToNextBirthday: { label: "Giorni al prossimo compleanno" },
    },
    faq: [],
  },
  ar: {
    title: "حاسبة العمر",
    short: "اعثر على عمرك الدقيق بالسنوات والأشهر والأيام، بالإضافة إلى الإجماليات وعيد ميلادك القادم.",
    description:
      "حاسبة عمر مجانية. أدخل تاريخ ميلادك لترى عمرك الدقيق بالسنوات والأشهر والأيام، وعمرك الإجمالي بالأشهر والأسابيع والأيام.",
    keywords: ["حاسبة العمر", "كم عمري", "العمر من تاريخ الميلاد", "العمر بالضبط", "العمر بالأيام"],
    inputs: {
      birthDate: { label: "تاريخ الميلاد", help: "اليوم الذي ولدت فيه." },
      asOfDate: { label: "العمر في تاريخ", help: "احسب العمر في هذا التاريخ (الافتراضي اليوم)." },
    },
    outputs: {
      ageYears: { label: "سنوات", help: "السنوات التقويمية المكتملة." },
      ageMonths: { label: "أشهر", help: "الأشهر بعد السنوات المكتملة." },
      ageDays: { label: "أيام", help: "الأيام بعد الأشهر المكتملة." },
      totalMonths: { label: "العمر بالأشهر" },
      totalWeeks: { label: "العمر بالأسابيع" },
      totalDays: { label: "العمر بالأيام" },
      nextBirthday: { label: "عيد الميلاد القادم" },
      daysToNextBirthday: { label: "الأيام حتى عيد الميلاد القادم" },
    },
    faq: [],
  },
  ru: {
    title: "Калькулятор Возраста",
    short: "Узнайте свой точный возраст в годах, месяцах и днях, плюс итоги и следующий день рождения.",
    description:
      "Бесплатный калькулятор возраста. Введите дату рождения, чтобы увидеть точный возраст в годах, месяцах и днях, возраст в месяцах, неделях и днях.",
    keywords: ["калькулятор возраста", "сколько мне лет", "возраст по дате рождения", "точный возраст", "возраст в днях"],
    inputs: {
      birthDate: { label: "Дата рождения", help: "День, когда вы родились." },
      asOfDate: { label: "Возраст на", help: "Рассчитать возраст на эту дату (по умолчанию сегодня)." },
    },
    outputs: {
      ageYears: { label: "Лет", help: "Завершенные календарные годы." },
      ageMonths: { label: "Месяцев", help: "Месяцев сверх завершенных лет." },
      ageDays: { label: "Дней", help: "Дней сверх завершенных месяцев." },
      totalMonths: { label: "Возраст в месяцах" },
      totalWeeks: { label: "Возраст в неделях" },
      totalDays: { label: "Возраст в днях" },
      nextBirthday: { label: "Следующий день рождения" },
      daysToNextBirthday: { label: "Дней до следующего дня рождения" },
    },
    faq: [],
  },
  zh: {
    title: "年龄计算器",
    short: "找出您的精确年龄（年、月、日），以及总年龄和下一个生日。",
    description:
      "免费的年龄计算器。输入您的出生日期，即可查看您的精确年龄（年、月、日）、总月龄、总周龄和总日龄。",
    keywords: ["年龄计算器", "我多大了", "从出生日期算年龄", "精确年龄", "天数年龄"],
    inputs: {
      birthDate: { label: "出生日期", help: "您出生的那一天。" },
      asOfDate: { label: "截止日期", help: "计算在此日期的年龄（默认为今天）。" },
    },
    outputs: {
      ageYears: { label: "年", help: "已完成的日历年。" },
      ageMonths: { label: "月", help: "超出完整年的月数。" },
      ageDays: { label: "日", help: "超出完整月的天数。" },
      totalMonths: { label: "月龄" },
      totalWeeks: { label: "周龄" },
      totalDays: { label: "日龄" },
      nextBirthday: { label: "下一个生日" },
      daysToNextBirthday: { label: "距离下一个生日" },
    },
    faq: [],
  },
  ja: {
    title: "年齢計算機",
    short: "正確な年齢を年、月、日で表示し、合計と次の誕生日も表示します。",
    description:
      "無料の年齢計算機。生年月日を入力すると、正確な年齢（年、月、日）、月数、週数、日数で年齢が表示されます。",
    keywords: ["年齢計算", "何歳", "生年月日から年齢", "正確な年齢", "日数での年齢"],
    inputs: {
      birthDate: { label: "生年月日", help: "あなたが生まれた日。" },
      asOfDate: { label: "基準日", help: "この日付での年齢を計算（デフォルトは今日）。" },
    },
    outputs: {
      ageYears: { label: "年", help: "完了した暦年。" },
      ageMonths: { label: "月", help: "完了した年を超えた月数。" },
      ageDays: { label: "日", help: "完了した月を超えた日数。" },
      totalMonths: { label: "月数での年齢" },
      totalWeeks: { label: "週数での年齢" },
      totalDays: { label: "日数での年齢" },
      nextBirthday: { label: "次の誕生日" },
      daysToNextBirthday: { label: "次の誕生日までの日数" },
    },
    faq: [],
  },
  ko: {
    title: "나이 계산기",
    short: "정확한 나이를 년, 월, 일로 확인하고 총계와 다음 생일을 확인하세요.",
    description:
      "무료 나이 계산기. 생년월일을 입력하면 정확한 나이(년, 월, 일), 총 개월 수, 주 수, 일 수를 확인할 수 있습니다.",
    keywords: ["나이 계산기", "몇 살", "생년월일로 나이", "정확한 나이", "일수 나이"],
    inputs: {
      birthDate: { label: "생년월일", help: "태어난 날." },
      asOfDate: { label: "기준일", help: "이 날짜 기준 나이 계산 (기본값 오늘)." },
    },
    outputs: {
      ageYears: { label: "년", help: "완료된 역년." },
      ageMonths: { label: "월", help: "완료된 년을 초과한 개월 수." },
      ageDays: { label: "일", help: "완료된 월을 초과한 일 수." },
      totalMonths: { label: "개월 수 나이" },
      totalWeeks: { label: "주 수 나이" },
      totalDays: { label: "일 수 나이" },
      nextBirthday: { label: "다음 생일" },
      daysToNextBirthday: { label: "다음 생일까지 남은 일" },
    },
    faq: [],
  },
  hi: {
    title: "आयु कैलकुलेटर",
    short: "अपनी सटीक आयु वर्षों, महीनों और दिनों में जानें, साथ ही कुल और अगला जन्मदिन।",
    description:
      "मुफ्त आयु कैलकुलेटर। अपनी जन्म तिथि दर्ज करें और अपनी सटीक आयु वर्षों, महीनों और दिनों में, कुल महीनों, सप्ताहों और दिनों में आयु देखें।",
    keywords: ["आयु कैलकुलेटर", "मैं कितना पुराना हूँ", "जन्म तिथि से आयु", "सटीक आयु", "दिनों में आयु"],
    inputs: {
      birthDate: { label: "जन्म तिथि", help: "वह दिन जब आप पैदा हुए।" },
      asOfDate: { label: "इस तिथि पर आयु", help: "इस तिथि पर आयु की गणना करें (डिफ़ॉल्ट आज)।" },
    },
    outputs: {
      ageYears: { label: "वर्ष", help: "पूर्ण कैलेंडर वर्ष।" },
      ageMonths: { label: "महीने", help: "पूर्ण वर्षों से अधिक महीने।" },
      ageDays: { label: "दिन", help: "पूर्ण महीनों से अधिक दिन।" },
      totalMonths: { label: "महीनों में आयु" },
      totalWeeks: { label: "सप्ताहों में आयु" },
      totalDays: { label: "दिनों में आयु" },
      nextBirthday: { label: "अगला जन्मदिन" },
      daysToNextBirthday: { label: "अगले जन्मदिन तक दिन" },
    },
    faq: [],
  },
};

export default i18n;