import type { CalculatorI18n } from "@/types/i18n";

const io = (f: string, t: string, td: string, fw: string, bd: string, y: string, m: string, d: string) => ({
  inputs: { fromDate: { label: f }, targetDate: { label: t } },
  outputs: { totalDays: { label: td }, fullWeeks: { label: fw }, businessDays: { label: bd }, years: { label: y }, months: { label: m }, days: { label: d } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Countdown Calculator", short: "Count the days, weeks and business days until a target date.",
    description: "Free countdown calculator. Pick a target date to see how many days, full weeks and business days remain from today (or any start date), plus the years/months/days breakdown. Great for deadlines, holidays and events.",
    keywords: ["countdown", "days until", "how many days until", "days remaining", "time until date"],
    ...io("From date", "Target date", "Total days", "Full weeks", "Business days", "Years", "Months", "Days"),
    faq: [
      { q: "How many days until a date?", a: "Enter the target date and the tool counts whole days from today (the default start) to that date. Change the start date to count between any two dates." },
      { q: "Does it count business days?", a: "Yes — it also shows the number of business days (Monday–Friday) in the period, excluding weekends but not public holidays." },
    ],
  },
  nl: {
    title: "Aftellen Calculator", short: "Count the dagen, weeks and business dagen until a target date.",
    description: "Gratis countdown calculator. Pick a target date to see how many dagen, full weeks and business dagen remain from today (or any start date), plus the jaren/maanden/dagen breakdown. Great for deadlines, holidagen and events.",
    keywords: ["countdown", "dagen until", "how many dagen until", "dagen remaining", "time until date"],
    ...io("From date", "Target date", "Total dagen", "Full weeks", "Business dagen", "Years", "Months", "Days"),
    faq: [
      { q: "How many dagen until a date?", a: "Enter the target date and the tool counts whole dagen from today (the default start) to that date. Change the start date to count between any two dates." },
      { q: "Does it count business dagen?", a: "Yes — it also shows the nummer of business dagen (Monday–Friday) in the period, excluding weekends but not public holidagen." },
    ],
  },

  pl: {
    title: "Odliczanie Kalkulator", short: "Count the dni, weeks and business dni until a target date.",
    description: "Darmowy countdown kalkulator. Pick a target date to see how many dni, full weeks and business dni remain from today (or any start date), plus the lat/miesięcy/dni breakdown. Great for deadlines, holidni and events.",
    keywords: ["countdown", "dni until", "how many dni until", "dni remaining", "time until date"],
    ...io("From date", "Target date", "Total dni", "Full weeks", "Business dni", "Years", "Months", "Days"),
    faq: [
      { q: "How many dni until a date?", a: "Enter the target date and the narzędzie counts whole dni from today (the default start) to that date. Change the start date to count between any two dates." },
      { q: "Does it count business dni?", a: "Yes — it also shows the liczba of business dni (Monday–Friday) in the period, excluding weekends but not public holidni." },
    ],
  },
  pt: {
    title: "Contagem Regressiva", short: "Faça uma contagem regressiva até uma data futura.",
    description: "Contagem regressiva gratuita. Conte os dias, horas, minutos e segundos restantes até uma data futura — Natal, casamento, viagem.",
    keywords: ["contagem regressiva", "dias até", "countdown", "tempo restante", "evento futuro"],
    ...io("From date", "Target date", "Total days", "Full weeks", "Business days", "Years", "Months", "Days"),
    faq: [
      { q: "How many days until a date?", a: "Enter the target date and the tool counts whole days from today (the default start) to that date. Change the start date to count between any two dates." },
      { q: "Does it count business days?", a: "Yes — it also shows the number of business days (Monday–Friday) in the period, excluding weekends but not public holidays." },
    ],
  },
  id: {
    title: "Hitung Mundur", short: "Hitung mundur menuju tanggal masa depan.",
    description: "Hitung mundur gratis. Hitung hari, jam, menit, dan detik tersisa hingga tanggal masa depan — Natal, pernikahan, liburan.",
    keywords: ["hitung mundur", "hari menuju", "countdown", "waktu tersisa", "acara mendatang"],
    ...io("From date", "Target date", "Total days", "Full weeks", "Business days", "Years", "Months", "Days"),
    faq: [
      { q: "How many days until a date?", a: "Enter the target date and the tool counts whole days from today (the default start) to that date. Change the start date to count between any two dates." },
      { q: "Does it count business days?", a: "Yes — it also shows the number of business days (Monday–Friday) in the period, excluding weekends but not public holidays." },
    ],
  },

  tr: {
    title: "Geri Sayım Hesaplayıcı", short: "Bir hedef tarihe kadar gün, hafta ve iş günü sayın.",
    description: "Ücretsiz geri sayım hesaplayıcı. Bir hedef tarih seçin; bugünden (veya herhangi bir başlangıçtan) kaç gün, tam hafta ve iş günü kaldığını, ayrıca yıl/ay/gün dökümünü görün. Son tarihler, tatiller ve etkinlikler için harika.",
    keywords: ["geri sayım", "kaç gün kaldı", "tarihe kaç gün", "kalan gün", "tarihe kadar süre"],
    ...io("Başlangıç tarihi", "Hedef tarih", "Toplam gün", "Tam hafta", "İş günü", "Yıl", "Ay", "Gün"),
    faq: [
      { q: "Bir tarihe kaç gün kaldı?", a: "Hedef tarihi girin; araç bugünden (varsayılan başlangıç) o tarihe kadar tam günleri sayar. Başlangıç tarihini değiştirerek iki tarih arasını sayabilirsiniz." },
      { q: "İş günü sayar mı?", a: "Evet — dönemdeki iş günü (Pazartesi–Cuma) sayısını da gösterir; hafta sonları hariç ancak resmi tatiller dâhil değil." },
    ],
  },
  de: { title: "Countdown-Rechner", short: "Zählen Sie Tage, Wochen und Arbeitstage bis zu einem Zieldatum.", description: "Kostenloser Countdown-Rechner. Wählen Sie ein Zieldatum, um zu sehen, wie viele Tage, volle Wochen und Arbeitstage von heute (oder einem Startdatum) verbleiben, samt Jahre/Monate/Tage-Aufteilung.", keywords: ["countdown", "tage bis", "wie viele tage bis", "verbleibende tage", "zeit bis datum"], ...io("Startdatum", "Zieldatum", "Tage gesamt", "Volle Wochen", "Arbeitstage", "Jahre", "Monate", "Tage") },
  fr: { title: "Calculateur de Compte à Rebours", short: "Comptez les jours, semaines et jours ouvrés jusqu'à une date cible.", description: "Calculateur de compte à rebours gratuit. Choisissez une date cible pour voir combien de jours, semaines entières et jours ouvrés restent depuis aujourd'hui (ou une date de départ), avec la répartition années/mois/jours.", keywords: ["compte à rebours", "jours avant", "combien de jours avant", "jours restants", "temps avant une date"], ...io("Date de départ", "Date cible", "Total de jours", "Semaines entières", "Jours ouvrés", "Années", "Mois", "Jours") },
  es: { title: "Calculadora de Cuenta Regresiva", short: "Cuenta los días, semanas y días hábiles hasta una fecha objetivo.", description: "Calculadora de cuenta regresiva gratuita. Elige una fecha objetivo para ver cuántos días, semanas completas y días hábiles quedan desde hoy (o una fecha inicial), con el desglose años/meses/días.", keywords: ["cuenta regresiva", "días hasta", "cuántos días faltan", "días restantes", "tiempo hasta una fecha"], ...io("Fecha inicial", "Fecha objetivo", "Días totales", "Semanas completas", "Días hábiles", "Años", "Meses", "Días") },
  it: { title: "Calcolatore Conto alla Rovescia", short: "Conta i giorni, le settimane e i giorni lavorativi fino a una data obiettivo.", description: "Calcolatore di conto alla rovescia gratuito. Scegli una data obiettivo per vedere quanti giorni, settimane intere e giorni lavorativi mancano da oggi (o da una data iniziale), con la suddivisione anni/mesi/giorni.", keywords: ["conto alla rovescia", "giorni a", "quanti giorni a", "giorni rimanenti", "tempo a una data"], ...io("Data iniziale", "Data obiettivo", "Giorni totali", "Settimane intere", "Giorni lavorativi", "Anni", "Mesi", "Giorni") },
  ar: { title: "حاسبة العد التنازلي", short: "احسب الأيام والأسابيع وأيام العمل حتى تاريخ مستهدف.", description: "حاسبة عد تنازلي مجانية. اختر تاريخًا مستهدفًا لمعرفة كم يومًا وأسبوعًا كاملًا ويوم عمل متبقٍ من اليوم (أو من تاريخ بداية)، مع تقسيم السنوات/الأشهر/الأيام.", keywords: ["عد تنازلي", "أيام حتى", "كم يومًا حتى", "الأيام المتبقية", "الوقت حتى تاريخ"], ...io("تاريخ البداية", "التاريخ المستهدف", "إجمالي الأيام", "أسابيع كاملة", "أيام العمل", "سنوات", "أشهر", "أيام") },
  ru: { title: "Калькулятор Обратного Отсчёта", short: "Считайте дни, недели и рабочие дни до целевой даты.", description: "Бесплатный калькулятор обратного отсчёта. Выберите целевую дату, чтобы узнать, сколько дней, полных недель и рабочих дней осталось от сегодня (или от начальной даты), с разбивкой по годам/месяцам/дням.", keywords: ["обратный отсчёт", "дней до", "сколько дней до", "осталось дней", "время до даты"], ...io("Начальная дата", "Целевая дата", "Всего дней", "Полных недель", "Рабочих дней", "Годы", "Месяцы", "Дни") },
  zh: { title: "倒计时计算器", short: "计算到目标日期还有多少天、周和工作日。", description: "免费的倒计时计算器。选择目标日期，查看从今天（或任意起始日期）起还剩多少天、整周和工作日，以及年/月/日的细分。适合截止日期、假日和活动。", keywords: ["倒计时", "还有几天", "距离还有多少天", "剩余天数", "距某日期的时间"], ...io("起始日期", "目标日期", "总天数", "整周数", "工作日", "年", "月", "日") },
  ja: { title: "カウントダウン計算機", short: "目標日までの日数・週数・営業日を数えます。", description: "無料のカウントダウン計算機。目標日を選ぶと、今日（または開始日）から残りの日数・完全な週数・営業日が、年/月/日の内訳とともに表示されます。締切・祝日・イベントに最適。", keywords: ["カウントダウン", "あと何日", "までの日数", "残り日数", "日付までの時間"], ...io("開始日", "目標日", "合計日数", "完全な週数", "営業日", "年", "月", "日") },
  ko: { title: "카운트다운 계산기", short: "목표 날짜까지 남은 일수, 주수, 영업일을 셉니다.", description: "무료 카운트다운 계산기. 목표 날짜를 선택하면 오늘(또는 시작일)부터 남은 일수, 전체 주수, 영업일과 연/월/일 분석을 확인할 수 있습니다. 마감일, 휴일, 이벤트에 적합합니다.", keywords: ["카운트다운", "며칠 남음", "까지 며칠", "남은 일수", "날짜까지 시간"], ...io("시작일", "목표 날짜", "총 일수", "전체 주수", "영업일", "년", "개월", "일") },
  hi: { title: "काउंटडाउन कैलकुलेटर", short: "किसी लक्ष्य तिथि तक दिन, सप्ताह और कार्यदिवस गिनें।", description: "मुफ्त काउंटडाउन कैलकुलेटर। एक लक्ष्य तिथि चुनें और देखें कि आज से (या किसी आरंभ तिथि से) कितने दिन, पूर्ण सप्ताह और कार्यदिवस शेष हैं, साथ ही वर्ष/माह/दिन विभाजन। समय-सीमा, छुट्टियों और कार्यक्रमों के लिए बढ़िया।", keywords: ["काउंटडाउन", "कितने दिन बाकी", "तिथि तक कितने दिन", "शेष दिन", "तिथि तक समय"], ...io("आरंभ तिथि", "लक्ष्य तिथि", "कुल दिन", "पूर्ण सप्ताह", "कार्यदिवस", "वर्ष", "महीने", "दिन") },
};

export default i18n;
