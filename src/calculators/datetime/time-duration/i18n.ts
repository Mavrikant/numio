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
    title: "Süre Hesaplama",
    short: "Başlangıç ve bitiş saati arasındaki saat ve dakikayı, molalar düşülerek hesaplayın.",
    description:
      "Ücretsiz süre hesaplama. Başlangıç ve bitiş saatini (ve isteğe bağlı bir molayı) girerek geçen süreyi saat ve dakika, toplam saat ve toplam dakika olarak öğrenin. Gece yarısını geçen vardiyaları da hesaplar.",
    keywords: ["süre hesaplama", "saat hesaplama", "mesai hesaplama", "iki saat arası", "puantaj hesaplama", "çalışma saati"],
    inputs: {
      startTime: { label: "Başlangıç saati", help: "24 saat biçimi, örn. 09:00.", placeholder: "09:00" },
      endTime: { label: "Bitiş saati", help: "24 saat biçimi, örn. 17:30. Başlangıçtan önceyse gece yarısını geçer.", placeholder: "17:30" },
      breakMinutes: { label: "Mola (dakika)", help: "Düşülecek ücretsiz mola süresi." },
    },
    outputs: {
      formatted: { label: "Süre" },
      totalHours: { label: "Toplam saat" },
      totalMinutes: { label: "Toplam dakika" },
      hoursPart: { label: "Saat" },
      minutesPart: { label: "Dakika" },
    },
    faq: [
      { q: "İki saat arasını nasıl hesaplarım?", a: "Bitiş saatinden başlangıç saatini çıkarın. 09:00–17:30 için bu 8 saat 30 dakikadır; 30 dakikalık molayı düşünce 8 saat kalır." },
      { q: "Gece vardiyaları için ne olur?", a: "Bitiş saati başlangıçtan önceyse (örn. 22:00–06:00), hesaplayıcı vardiyanın gece yarısını geçtiğini varsayar ve 24 saat ekler; sonuç 8 saat olur." },
      { q: "Neden ondalık saate çevrilir?", a: "Bordro sistemleri genellikle ondalık saat kullanır — 8 saat 30 dakika, 8,5 saattir. 'Toplam saat' çıktısı bunu doğrudan verir." },
    ],
  },
  de: {
    title: "Zeitdauer-Rechner",
    short: "Berechnen Sie Stunden und Minuten zwischen Start- und Endzeit abzüglich Pausen.",
    description: "Kostenloser Zeitdauer-Rechner. Geben Sie Start- und Endzeit (und optional eine Pause) ein, um die verstrichene Zeit in Stunden und Minuten zu erhalten. Auch Nachtschichten über Mitternacht.",
    keywords: ["Zeitdauer-Rechner", "Stundenrechner", "Arbeitszeitrechner", "Stunden zwischen zwei Zeiten", "Stundenzettel"],
    inputs: {
      startTime: { label: "Startzeit", placeholder: "09:00" },
      endTime: { label: "Endzeit", placeholder: "17:30" },
      breakMinutes: { label: "Pause (Minuten)" },
    },
    outputs: {
      formatted: { label: "Dauer" },
      totalHours: { label: "Gesamtstunden" },
      totalMinutes: { label: "Gesamtminuten" },
      hoursPart: { label: "Stunden" },
      minutesPart: { label: "Minuten" },
    },
  },
  fr: {
    title: "Calculateur de Durée",
    short: "Calculez les heures et minutes entre une heure de début et de fin, pauses déduites.",
    description: "Calculateur de durée gratuit. Saisissez une heure de début et de fin (et une pause optionnelle) pour obtenir le temps écoulé en heures et minutes. Gère les services de nuit après minuit.",
    keywords: ["calculateur de durée", "calculateur d'heures", "heures entre deux heures", "feuille de temps", "heures de travail"],
    inputs: {
      startTime: { label: "Heure de début", placeholder: "09:00" },
      endTime: { label: "Heure de fin", placeholder: "17:30" },
      breakMinutes: { label: "Pause (minutes)" },
    },
    outputs: {
      formatted: { label: "Durée" },
      totalHours: { label: "Total d'heures" },
      totalMinutes: { label: "Total de minutes" },
      hoursPart: { label: "Heures" },
      minutesPart: { label: "Minutes" },
    },
  },
  es: {
    title: "Calculadora de Duración",
    short: "Calcula las horas y minutos entre una hora de inicio y fin, menos descansos.",
    description: "Calculadora de duración gratuita. Introduce una hora de inicio y fin (y un descanso opcional) para obtener el tiempo transcurrido en horas y minutos. Maneja turnos nocturnos que cruzan la medianoche.",
    keywords: ["calculadora de duración", "calculadora de horas", "horas entre dos horas", "hoja de tiempo", "horas de trabajo"],
    inputs: {
      startTime: { label: "Hora de inicio", placeholder: "09:00" },
      endTime: { label: "Hora de fin", placeholder: "17:30" },
      breakMinutes: { label: "Descanso (minutos)" },
    },
    outputs: {
      formatted: { label: "Duración" },
      totalHours: { label: "Total de horas" },
      totalMinutes: { label: "Total de minutos" },
      hoursPart: { label: "Horas" },
      minutesPart: { label: "Minutos" },
    },
  },
  it: {
    title: "Calcolatore di Durata",
    short: "Calcola le ore e i minuti tra un orario di inizio e fine, meno le pause.",
    description: "Calcolatore di durata gratuito. Inserisci un orario di inizio e fine (e una pausa opzionale) per ottenere il tempo trascorso in ore e minuti. Gestisce i turni notturni che superano la mezzanotte.",
    keywords: ["calcolatore di durata", "calcolatore di ore", "ore tra due orari", "foglio presenze", "ore di lavoro"],
    inputs: {
      startTime: { label: "Orario di inizio", placeholder: "09:00" },
      endTime: { label: "Orario di fine", placeholder: "17:30" },
      breakMinutes: { label: "Pausa (minuti)" },
    },
    outputs: {
      formatted: { label: "Durata" },
      totalHours: { label: "Ore totali" },
      totalMinutes: { label: "Minuti totali" },
      hoursPart: { label: "Ore" },
      minutesPart: { label: "Minuti" },
    },
  },
  ar: {
    title: "حاسبة المدة الزمنية",
    short: "احسب الساعات والدقائق بين وقت البداية والنهاية، مطروحًا منها الاستراحات.",
    description: "حاسبة مدة زمنية مجانية. أدخل وقت البداية والنهاية (واستراحة اختيارية) للحصول على الوقت المنقضي بالساعات والدقائق. تتعامل مع المناوبات الليلية التي تتجاوز منتصف الليل.",
    keywords: ["حاسبة المدة", "حاسبة الساعات", "الساعات بين وقتين", "بطاقة الوقت", "ساعات العمل"],
    inputs: {
      startTime: { label: "وقت البداية", placeholder: "09:00" },
      endTime: { label: "وقت النهاية", placeholder: "17:30" },
      breakMinutes: { label: "الاستراحة (دقائق)" },
    },
    outputs: {
      formatted: { label: "المدة" },
      totalHours: { label: "إجمالي الساعات" },
      totalMinutes: { label: "إجمالي الدقائق" },
      hoursPart: { label: "ساعات" },
      minutesPart: { label: "دقائق" },
    },
  },
  ru: {
    title: "Калькулятор Длительности",
    short: "Рассчитайте часы и минуты между началом и концом за вычетом перерывов.",
    description: "Бесплатный калькулятор длительности. Введите время начала и окончания (и необязательный перерыв), чтобы получить прошедшее время в часах и минутах. Учитывает ночные смены через полночь.",
    keywords: ["калькулятор длительности", "калькулятор часов", "часы между двумя временами", "табель", "рабочие часы"],
    inputs: {
      startTime: { label: "Время начала", placeholder: "09:00" },
      endTime: { label: "Время окончания", placeholder: "17:30" },
      breakMinutes: { label: "Перерыв (минуты)" },
    },
    outputs: {
      formatted: { label: "Длительность" },
      totalHours: { label: "Всего часов" },
      totalMinutes: { label: "Всего минут" },
      hoursPart: { label: "Часы" },
      minutesPart: { label: "Минуты" },
    },
  },
  zh: {
    title: "时长计算器",
    short: "计算开始与结束时间之间的小时和分钟，并扣除休息时间。",
    description: "免费的时长计算器。输入开始和结束时间（以及可选的休息时间），即可得到以小时和分钟表示的经过时间。支持跨越午夜的夜班。",
    keywords: ["时长计算器", "小时计算器", "两个时间之间的小时", "考勤表", "工作时间"],
    inputs: {
      startTime: { label: "开始时间", placeholder: "09:00" },
      endTime: { label: "结束时间", placeholder: "17:30" },
      breakMinutes: { label: "休息（分钟）" },
    },
    outputs: {
      formatted: { label: "时长" },
      totalHours: { label: "总小时" },
      totalMinutes: { label: "总分钟" },
      hoursPart: { label: "小时" },
      minutesPart: { label: "分钟" },
    },
  },
  ja: {
    title: "時間計算機",
    short: "開始時刻と終了時刻の間の時間と分を、休憩を差し引いて計算します。",
    description: "無料の時間計算機。開始時刻と終了時刻（および任意の休憩）を入力すると、経過時間が時間と分で得られます。深夜をまたぐ夜勤にも対応します。",
    keywords: ["時間計算機", "時間計算", "2つの時刻の間の時間", "タイムカード", "労働時間"],
    inputs: {
      startTime: { label: "開始時刻", placeholder: "09:00" },
      endTime: { label: "終了時刻", placeholder: "17:30" },
      breakMinutes: { label: "休憩（分）" },
    },
    outputs: {
      formatted: { label: "所要時間" },
      totalHours: { label: "合計時間" },
      totalMinutes: { label: "合計分" },
      hoursPart: { label: "時間" },
      minutesPart: { label: "分" },
    },
  },
  ko: {
    title: "시간 길이 계산기",
    short: "시작 시각과 종료 시각 사이의 시간과 분을 휴식 시간을 빼고 계산합니다.",
    description: "무료 시간 길이 계산기. 시작 시각과 종료 시각(및 선택적 휴식)을 입력하면 경과 시간을 시간과 분으로 구합니다. 자정을 넘기는 야간 근무도 처리합니다.",
    keywords: ["시간 길이 계산기", "시간 계산기", "두 시각 사이 시간", "근무 시간표", "근무 시간"],
    inputs: {
      startTime: { label: "시작 시각", placeholder: "09:00" },
      endTime: { label: "종료 시각", placeholder: "17:30" },
      breakMinutes: { label: "휴식 (분)" },
    },
    outputs: {
      formatted: { label: "소요 시간" },
      totalHours: { label: "총 시간" },
      totalMinutes: { label: "총 분" },
      hoursPart: { label: "시간" },
      minutesPart: { label: "분" },
    },
  },
  hi: {
    title: "अवधि कैलकुलेटर",
    short: "आरंभ और समाप्ति समय के बीच घंटे और मिनट की गणना करें, ब्रेक घटाकर।",
    description: "मुफ्त अवधि कैलकुलेटर। आरंभ और समाप्ति समय (और वैकल्पिक ब्रेक) दर्ज करें और बीता समय घंटे व मिनट में पाएं। आधी रात पार करने वाली रात की पाली को भी संभालता है।",
    keywords: ["अवधि कैलकुलेटर", "घंटे कैलकुलेटर", "दो समय के बीच घंटे", "टाइमशीट", "कार्य घंटे"],
    inputs: {
      startTime: { label: "आरंभ समय", placeholder: "09:00" },
      endTime: { label: "समाप्ति समय", placeholder: "17:30" },
      breakMinutes: { label: "ब्रेक (मिनट)" },
    },
    outputs: {
      formatted: { label: "अवधि" },
      totalHours: { label: "कुल घंटे" },
      totalMinutes: { label: "कुल मिनट" },
      hoursPart: { label: "घंटे" },
      minutesPart: { label: "मिनट" },
    },
  },
};

export default i18n;
