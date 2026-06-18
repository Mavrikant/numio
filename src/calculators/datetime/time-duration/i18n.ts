import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Time Duration Calculator",
    short: "Calculate the hours and minutes between a start and end time, minus breaks.",
    description:
      "Free time duration calculator. Enter a start and end time (and an optional break) to get the elapsed time as hours and minutes, total hours and total minutes. Handles overnight shifts that cross midnight.",
    keywords: ["time duration calculator", "hours calculator", "time card calculator", "hours between two times", "timesheet calculator", "work hours"],
    inputs: {
      startTime: { label: "Start time", help: "24-hour format, e.g. 09:00.", placeholder: "09:00" },
      endTime: { label: "End time", help: "24-hour format, e.g. 17:30. If earlier than start, crosses midnight.", placeholder: "17:30" },
      breakMinutes: { label: "Break (minutes)", help: "Unpaid break time to subtract." },
    },
    outputs: {
      formatted: { label: "Duration" },
      totalHours: { label: "Total hours" },
      totalMinutes: { label: "Total minutes" },
      hoursPart: { label: "Hours" },
      minutesPart: { label: "Minutes" },
    },
    faq: [
      { q: "How do I calculate hours between two times?", a: "Subtract the start time from the end time. For 09:00 to 17:30 that is 8 hours 30 minutes; subtracting a 30-minute break leaves 8 hours." },
      { q: "What about overnight shifts?", a: "If the end time is earlier than the start time (e.g. 22:00 to 06:00), the calculator assumes the shift crosses midnight and adds 24 hours, giving 8 hours." },
      { q: "Why convert to decimal hours?", a: "Payroll systems often use decimal hours — 8 hours 30 minutes is 8.5 hours. The 'Total hours' output gives this directly." },
      { q: "How do I enter a time that crosses noon correctly?", a: "Use 24-hour format (e.g., 09:00 for 9 AM, 17:30 for 5:30 PM). The calculator works correctly with any 24-hour times, including overnight shifts that go past midnight." },
      { q: "Does the break time include lunch and coffee breaks?", a: "Enter any unpaid break time in minutes. This could be a lunch break, coffee break, or any other time you were not working. The total is subtracted from the elapsed time." },
    ],
  },
  nl: {
    title: "Tijdsduur Calculator",
    short: "Bereken the uren and minuten between a start and end time, minus breaks.",
    description:
      "Gratis time duration calculator. Enter a start and end time (and an optional break) to get the elapsed time as uren and minuten, total uren and total minuten. Handles overnight shifts that cross midnight.",
    keywords: ["time duration calculator", "uren calculator", "time card calculator", "uren between two times", "timesheet calculator", "work uren"],
    inputs: {
      startTime: { label: "Start time", help: "24-hour formatteer, e.g. 09:00.", placeholder: "09:00" },
      endTime: { label: "End time", help: "24-hour formatteer, e.g. 17:30. If earlier than start, crosses midnight.", placeholder: "17:30" },
      breakMinutes: { label: "Break (minuten)", help: "Unpaid break time to subtract." },
    },
    outputs: {
      formatted: { label: "Duration" },
      totalHours: { label: "Total uren" },
      totalMinutes: { label: "Total minuten" },
      hoursPart: { label: "Hours" },
      minutesPart: { label: "Minutes" },
    },
    faq: [
      { q: "How do I bereken uren between two times?", a: "Subtract the start time from the end time. For 09:00 to 17:30 that is 8 uren 30 minuten; subtracting a 30-minute break leaves 8 uren." },
      { q: "What about overnight shifts? ", a: "If the end time is earlier than the start time (e.g. 22:00 to 06:00), the calculator assumes the shift crosses midnight and adds 24 uren, giving 8 uren." },
      { q: "Why converteer to decimal uren?", a: "Payroll systems often use decimal uren — 8 uren 30 minuten is 8.5 uren. The 'Total uren' output gives this directly." },
    ],
  },

  pl: {
    title: "Czas Trwania Kalkulator",
    short: "Oblicz the godzin and minut between a start and end time, minus breaks.",
    description:
      "Darmowy time duration kalkulator. Enter a start and end time (and an optional break) to get the elapsed time as godzin and minut, total godzin and total minut. Handles overnight shifts that cross midnight.",
    keywords: ["time duration kalkulator", "godzin kalkulator", "time card kalkulator", "godzin between two times", "timesheet kalkulator", "work godzin"],
    inputs: {
      startTime: { label: "Start time", help: "24-hour formatuj, e.g. 09:00.", placeholder: "09:00" },
      endTime: { label: "End time", help: "24-hour formatuj, e.g. 17:30. If earlier than start, crosses midnight.", placeholder: "17:30" },
      breakMinutes: { label: "Break (minut)", help: "Unpaid break time to subtract." },
    },
    outputs: {
      formatted: { label: "Duration" },
      totalHours: { label: "Total godzin" },
      totalMinutes: { label: "Total minut" },
      hoursPart: { label: "Hours" },
      minutesPart: { label: "Minutes" },
    },
    faq: [
      { q: "How do I oblicz godzin between two times?", a: "Subtract the start time from the end time. For 09:00 to 17:30 that is 8 godzin 30 minut; subtracting a 30-minute break leaves 8 godzin." },
      { q: "What about overnight shifts? ", a: "If the end time is earlier than the start time (e.g. 22:00 to 06:00), the kalkulator assumes the shift crosses midnight and adds 24 godzin, giving 8 godzin." },
      { q: "Why konwertuj to decimal godzin?", a: "Payroll systems often use decimal godzin — 8 godzin 30 minut is 8.5 godzin. The 'Total godzin' output gives this directly." },
    ],
  },
  pt: {
    title: "Calculadora de Duração de Tempo",
    short: "Calcule a duração entre duas horas em horas, minutos e segundos.",
    description:
      "Calculadora gratuita de duração. Calcule a diferença entre duas horas, com suporte para múltiplos formatos (24h, AM/PM).",
    keywords: ["duração tempo", "horas entre", "calcular tempo", "diferença horas", "minutos segundos"],
    inputs: {
      startTime: { label: "Start time", help: "24-hour format, e.g. 09:00.", placeholder: "09:00" },
      endTime: { label: "End time", help: "24-hour format, e.g. 17:30. If earlier than start, crosses midnight.", placeholder: "17:30" },
      breakMinutes: { label: "Break (minutes)", help: "Unpaid break time to subtract." },
    },
    outputs: {
      formatted: { label: "Duration" },
      totalHours: { label: "Total hours" },
      totalMinutes: { label: "Total minutes" },
      hoursPart: { label: "Hours" },
      minutesPart: { label: "Minutes" },
    },
    faq: [
      { q: "How do I calculate hours between two times?", a: "Subtract the start time from the end time. For 09:00 to 17:30 that is 8 hours 30 minutes; subtracting a 30-minute break leaves 8 hours." },
      { q: "What about overnight shifts?", a: "If the end time is earlier than the start time (e.g. 22:00 to 06:00), the calculator assumes the shift crosses midnight and adds 24 hours, giving 8 hours." },
      { q: "Why convert to decimal hours?", a: "Payroll systems often use decimal hours — 8 hours 30 minutes is 8.5 hours. The 'Total hours' output gives this directly." },
    ],
  },
  id: {
    title: "Kalkulator Durasi Waktu",
    short: "Hitung durasi antara dua waktu dalam jam, menit, dan detik.",
    description:
      "Kalkulator durasi gratis. Hitung selisih antara dua waktu, mendukung berbagai format (24 jam, AM/PM).",
    keywords: ["durasi waktu", "jam antara", "hitung waktu", "selisih jam", "menit detik"],
    inputs: {
      startTime: { label: "Start time", help: "24-hour format, e.g. 09:00.", placeholder: "09:00" },
      endTime: { label: "End time", help: "24-hour format, e.g. 17:30. If earlier than start, crosses midnight.", placeholder: "17:30" },
      breakMinutes: { label: "Break (minutes)", help: "Unpaid break time to subtract." },
    },
    outputs: {
      formatted: { label: "Duration" },
      totalHours: { label: "Total hours" },
      totalMinutes: { label: "Total minutes" },
      hoursPart: { label: "Hours" },
      minutesPart: { label: "Minutes" },
    },
    faq: [
      { q: "How do I calculate hours between two times?", a: "Subtract the start time from the end time. For 09:00 to 17:30 that is 8 hours 30 minutes; subtracting a 30-minute break leaves 8 hours." },
      { q: "What about overnight shifts?", a: "If the end time is earlier than the start time (e.g. 22:00 to 06:00), the calculator assumes the shift crosses midnight and adds 24 hours, giving 8 hours." },
      { q: "Why convert to decimal hours?", a: "Payroll systems often use decimal hours — 8 hours 30 minutes is 8.5 hours. The 'Total hours' output gives this directly." },
    ],
  },

  tr: {
    title: "Zaman Aralığı Hesaplama",
    short: "İki saat arasındaki saat ve dakikayı hesaplayın, mola süresini düşün.",
    description:
      "Ücretsiz zaman aralığı hesaplama. Başlangıç ve bitiş saatleri (ve isteğe bağlı mola) girerek geçen süreyi saat ve dakika olarak alın. Gece yarısını geçen vardiyaları destekler.",
    keywords: ["zaman aralığı", "saat hesaplama", "mesai saati", "iki saat arası", "çalışma saati"],
    inputs: {
      startTime: { label: "Başlangıç", help: "24 saat formatı, örn. 09:00.", placeholder: "09:00" },
      endTime: { label: "Bitiş", help: "24 saat formatı, örn. 17:30. Başlangıçtan önceyse gece yarısını geçer.", placeholder: "17:30" },
      breakMinutes: { label: "Mola (dakika)", help: "Düşülecek ücretsiz mola süresi." },
    },
    outputs: {
      formatted: { label: "Süre" },
      totalHours: { label: "Toplam saat" },
      totalMinutes: { label: "Toplam dakika" },
      hoursPart: { label: "Saat" },
      minutesPart: { label: "Dakika" },
    },
    faq: [],
  },
  de: {
    title: "Zeitdauer-Rechner",
    short: "Berechnen Sie die Stunden und Minuten zwischen einer Start- und Endzeit abzüglich Pausen.",
    description:
      "Kostenloser Zeitdauer-Rechner. Geben Sie eine Start- und Endzeit (und eine optionale Pause) ein, um die verstrichene Zeit in Stunden und Minuten, Gesamtstunden und Gesamtminuten zu erhalten. Unterstützt Nachtschichten, die Mitternacht überschreiten.",
    keywords: ["Zeitdauer", "Stundenrechner", "Arbeitszeit", "Stunden zwischen zwei Zeiten", "Arbeitszeitrechner"],
    inputs: {
      startTime: { label: "Startzeit", help: "24-Stunden-Format, z.B. 09:00.", placeholder: "09:00" },
      endTime: { label: "Endzeit", help: "24-Stunden-Format, z.B. 17:30. Früher als Start = Mitternacht überschritten.", placeholder: "17:30" },
      breakMinutes: { label: "Pause (Minuten)", help: "Unbezahlte Pausenzeit zum Abziehen." },
    },
    outputs: {
      formatted: { label: "Dauer" },
      totalHours: { label: "Gesamtstunden" },
      totalMinutes: { label: "Gesamtminuten" },
      hoursPart: { label: "Stunden" },
      minutesPart: { label: "Minuten" },
    },
    faq: [],
  },
  fr: {
    title: "Calculateur de Durée",
    short: "Calculez les heures et minutes entre une heure de début et de fin, moins les pauses.",
    description:
      "Calculateur de durée gratuit. Entrez une heure de début et de fin (ainsi qu'une pause facultative) pour obtenir le temps écoulé en heures et minutes, le total d'heures et de minutes. Gère les quarts de nuit dépassant minuit.",
    keywords: ["durée", "calcul heures", "feuille de temps", "heures entre deux horaires", "calcul travail"],
    inputs: {
      startTime: { label: "Heure de début", help: "Format 24h, ex. 09:00.", placeholder: "09:00" },
      endTime: { label: "Heure de fin", help: "Format 24h, ex. 17:30. Avant le début = nuit.", placeholder: "17:30" },
      breakMinutes: { label: "Pause (minutes)", help: "Temps de pause non rémunéré à déduire." },
    },
    outputs: {
      formatted: { label: "Durée" },
      totalHours: { label: "Total heures" },
      totalMinutes: { label: "Total minutes" },
      hoursPart: { label: "Heures" },
      minutesPart: { label: "Minutes" },
    },
    faq: [],
  },
  es: {
    title: "Calculadora de Duración de Tiempo",
    short: "Calcule las horas y minutos entre una hora de inicio y fin, menos descansos.",
    description:
      "Calculadora de duración gratuita. Ingrese una hora de inicio y fin (y un descanso opcional) para obtener el tiempo transcurrido en horas y minutos. Maneja turnos nocturnos que cruzan la medianoche.",
    keywords: ["duración", "calculadora de horas", "horas entre dos tiempos", "jornada laboral", "horas trabajadas"],
    inputs: {
      startTime: { label: "Hora inicio", help: "Formato 24h, ej. 09:00.", placeholder: "09:00" },
      endTime: { label: "Hora fin", help: "Formato 24h, ej. 17:30. Anterior al inicio = cruza medianoche.", placeholder: "17:30" },
      breakMinutes: { label: "Descanso (minutos)", help: "Tiempo de descanso no remunerado a deducir." },
    },
    outputs: {
      formatted: { label: "Duración" },
      totalHours: { label: "Horas totales" },
      totalMinutes: { label: "Minutos totales" },
      hoursPart: { label: "Horas" },
      minutesPart: { label: "Minutos" },
    },
    faq: [],
  },
  it: {
    title: "Calcolatore di Durata Temporale",
    short: "Calcola ore e minuti tra un'ora di inizio e fine, meno le pause.",
    description:
      "Calcolatore di durata gratuito. Inserisci un'ora di inizio e fine (e una pausa opzionale) per ottenere il tempo trascorso in ore e minuti. Gestisce i turni notturni che superano la mezzanotte.",
    keywords: ["durata", "calcolo ore", "ore tra due orari", "timesheet", "ore lavorative"],
    inputs: {
      startTime: { label: "Ora inizio", help: "Formato 24h, es. 09:00.", placeholder: "09:00" },
      endTime: { label: "Ora fine", help: "Formato 24h, es. 17:30. Se prima dell'inizio, supera mezzanotte.", placeholder: "17:30" },
      breakMinutes: { label: "Pausa (minuti)", help: "Tempo di pausa non retribuito da sottrarre." },
    },
    outputs: {
      formatted: { label: "Durata" },
      totalHours: { label: "Ore totali" },
      totalMinutes: { label: "Minuti totali" },
      hoursPart: { label: "Ore" },
      minutesPart: { label: "Minuti" },
    },
    faq: [],
  },
  ar: {
    title: "حاسبة المدة الزمنية",
    short: "احسب الساعات والدقائق بين وقت البداية والنهاية، مطروحًا منها فترات الراحة.",
    description:
      "حاسبة مدة زمنية مجانية. أدخل وقت البداية والنهاية (وفترة راحة اختيارية) للحصول على الوقت المنقضي بالساعات والدقائق. تتعامل مع المناوبات الليلية التي تعبر منتصف الليل.",
    keywords: ["مدة زمنية", "حاسبة ساعات", "ساعات بين وقتين", "وقت العمل", "ساعات العمل"],
    inputs: {
      startTime: { label: "وقت البداية", help: "تنسيق 24 ساعة، مثلاً 09:00.", placeholder: "09:00" },
      endTime: { label: "وقت النهاية", help: "تنسيق 24 ساعة، مثلاً 17:30. إذا كان قبل البداية، يعبر منتصف الليل.", placeholder: "17:30" },
      breakMinutes: { label: "استراحة (دقائق)", help: "وقت الاستراحة غير المدفوع للخصم." },
    },
    outputs: {
      formatted: { label: "المدة" },
      totalHours: { label: "إجمالي الساعات" },
      totalMinutes: { label: "إجمالي الدقائق" },
      hoursPart: { label: "ساعات" },
      minutesPart: { label: "دقائق" },
    },
    faq: [],
  },
  ru: {
    title: "Калькулятор Длительности Времени",
    short: "Рассчитайте часы и минуты между началом и концом, за вычетом перерывов.",
    description:
      "Бесплатный калькулятор длительности. Введите время начала и окончания (и необязательный перерыв), чтобы получить прошедшее время в часах и минутах. Обрабатывает ночные смены, пересекающие полночь.",
    keywords: ["длительность", "калькулятор часов", "часы между двумя времени", "рабочее время", "табель"],
    inputs: {
      startTime: { label: "Начало", help: "24-часовой формат, напр. 09:00.", placeholder: "09:00" },
      endTime: { label: "Конец", help: "24-часовой формат, напр. 17:30. Если раньше начала — пересекает полночь.", placeholder: "17:30" },
      breakMinutes: { label: "Перерыв (минуты)", help: "Неоплачиваемое время перерыва для вычитания." },
    },
    outputs: {
      formatted: { label: "Длительность" },
      totalHours: { label: "Всего часов" },
      totalMinutes: { label: "Всего минут" },
      hoursPart: { label: "Часы" },
      minutesPart: { label: "Минуты" },
    },
    faq: [],
  },
  zh: {
    title: "时间时长计算器",
    short: "计算开始时间和结束时间之间的小时和分钟，减去休息时间。",
    description:
      "免费的时长计算器。输入开始和结束时间（以及可选的休息时间），即可得到经过的时间（小时和分钟）、总小时数和总分钟数。支持跨越午夜的值班计算。",
    keywords: ["时长计算器", "小时计算器", "工时计算", "两个时间之间的小时", "考勤计算"],
    inputs: {
      startTime: { label: "开始时间", help: "24小时格式，例如 09:00。", placeholder: "09:00" },
      endTime: { label: "结束时间", help: "24小时格式，例如 17:30。如果早于开始时间，则跨越午夜。", placeholder: "17:30" },
      breakMinutes: { label: "休息（分钟）", help: "要扣除的无薪休息时间。" },
    },
    outputs: {
      formatted: { label: "时长" },
      totalHours: { label: "总小时" },
      totalMinutes: { label: "总分钟" },
      hoursPart: { label: "小时" },
      minutesPart: { label: "分钟" },
    },
    faq: [],
  },
  ja: {
    title: "時間計算機",
    short: "開始時間と終了時間の間の時間と分を計算し、休憩時間を差し引きます。",
    description:
      "無料の時間計算機。開始時間と終了時間（および任意の休憩時間）を入力すると、経過時間（時間と分）、合計時間、合計分が得られます。深夜をまたぐシフトにも対応。",
    keywords: ["時間計算", "勤務時間計算", "時間差", "時間管理", "タイムカード"],
    inputs: {
      startTime: { label: "開始時間", help: "24時間形式（例: 09:00）", placeholder: "09:00" },
      endTime: { label: "終了時間", help: "24時間形式（例: 17:30）。開始より前の場合、深夜をまたぎます。", placeholder: "17:30" },
      breakMinutes: { label: "休憩（分）", help: "差し引く無給の休憩時間。" },
    },
    outputs: {
      formatted: { label: "時間" },
      totalHours: { label: "合計時間" },
      totalMinutes: { label: "合計分" },
      hoursPart: { label: "時間" },
      minutesPart: { label: "分" },
    },
    faq: [],
  },
  ko: {
    title: "시간 계산기",
    short: "시작 시간과 종료 시간 사이의 시간과 분을 계산하고 휴식 시간을 뺍니다.",
    description:
      "무료 시간 계산기. 시작 시간과 종료 시간(및 선택적 휴식 시간)을 입력하면 경과 시간(시간과 분), 총 시간, 총 분을 얻을 수 있습니다. 자정을 넘는 야간 교대 근무도 처리합니다.",
    keywords: ["시간 계산", "근무 시간 계산", "시간 차이", "시간 관리", "타임카드"],
    inputs: {
      startTime: { label: "시작 시간", help: "24시간 형식 (예: 09:00)", placeholder: "09:00" },
      endTime: { label: "종료 시간", help: "24시간 형식 (예: 17:30). 시작보다 빠르면 자정을 넘습니다.", placeholder: "17:30" },
      breakMinutes: { label: "휴식(분)", help: "차감할 무급 휴식 시간입니다." },
    },
    outputs: {
      formatted: { label: "시간" },
      totalHours: { label: "총 시간" },
      totalMinutes: { label: "총 분" },
      hoursPart: { label: "시간" },
      minutesPart: { label: "분" },
    },
    faq: [],
  },
  hi: {
    title: "समय अवधि कैलकुलेटर",
    short: "प्रारंभ और समाप्ति समय के बीच घंटे और मिनट की गणना करें, ब्रेक घटाएँ।",
    description:
      "मुफ्त समय अवधि कैलकुलेटर। प्रारंभ और समाप्ति समय (और एक वैकल्पिक ब्रेक) दर्ज करें और बीता हुआ समय घंटे और मिनट में प्राप्त करें। मध्यरात्रि पार करने वाली शिफ्टों को संभालता है।",
    keywords: ["समय अवधि", "घंटे कैलकुलेटर", "समय पत्रक", "दो समय के बीच घंटे", "कार्य घंटे"],
    inputs: {
      startTime: { label: "प्रारंभ समय", help: "24-घंटे प्रारूप, जैसे 09:00।", placeholder: "09:00" },
      endTime: { label: "समाप्ति समय", help: "24-घंटे प्रारूप, जैसे 17:30। प्रारंभ से पहले होने पर मध्यरात्रि पार करता है।", placeholder: "17:30" },
      breakMinutes: { label: "ब्रेक (मिनट)", help: "घटाने के लिए अवैतनिक ब्रेक समय।" },
    },
    outputs: {
      formatted: { label: "अवधि" },
      totalHours: { label: "कुल घंटे" },
      totalMinutes: { label: "कुल मिनट" },
      hoursPart: { label: "घंटे" },
      minutesPart: { label: "मिनट" },
    },
    faq: [],
  },
};

export default i18n;