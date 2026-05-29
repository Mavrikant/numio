import type { CalculatorI18n } from "@/types/i18n";

const out = (a: string, b: string, c: string, d: string) => ({
  dayOfYear: { label: a },
  daysRemaining: { label: b },
  daysInYear: { label: c },
  percentElapsed: { label: d },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Day of the Year Calculator", short: "Find which day of the year a date is, and how many days remain.",
    description: "Free day-of-year calculator. Enter a date to get its ordinal day number (1–366), the days remaining in the year, the total days in that year, and the percentage of the year elapsed.",
    keywords: ["day of year", "ordinal date", "day number", "days left in year", "what day of the year"],
    inputs: { date: { label: "Date" } }, outputs: out("Day of year", "Days remaining", "Days in year", "Year elapsed"),
    faq: [
      { q: "What is the day of the year?", a: "It's the ordinal position of a date within its year — 1 January is day 1, 31 December is day 365 (or 366 in a leap year)." },
      { q: "How many days are in a year?", a: "365 in a common year and 366 in a leap year (when February has 29 days). This tool detects leap years automatically." },
    ],
  },
  pt: {
    title: "Calculadora do Dia do Ano", short: "Descubra que dia do ano corresponde a uma data específica.",
    description: "Calculadora gratuita do dia do ano. Descubra o número ordinal do dia (1-365 ou 366 em bissextos) para qualquer data.",
    keywords: ["dia do ano", "ordinal data", "dia juliano", "calendário ordinal", "número dia"],
    inputs: { date: { label: "Date" } }, outputs: out("Day of year", "Days remaining", "Days in year", "Year elapsed"),
    faq: [
      { q: "What is the day of the year?", a: "It's the ordinal position of a date within its year — 1 January is day 1, 31 December is day 365 (or 366 in a leap year)." },
      { q: "How many days are in a year?", a: "365 in a common year and 366 in a leap year (when February has 29 days). This tool detects leap years automatically." },
    ],
  },
  id: {
    title: "Kalkulator Hari dalam Tahun", short: "Temukan hari ke berapa dalam tahun untuk tanggal tertentu.",
    description: "Kalkulator hari dalam tahun gratis. Temukan nomor ordinal hari (1-365 atau 366 di tahun kabisat) untuk tanggal apa pun.",
    keywords: ["hari dalam tahun", "tanggal ordinal", "hari Julian", "kalender ordinal", "nomor hari"],
    inputs: { date: { label: "Date" } }, outputs: out("Day of year", "Days remaining", "Days in year", "Year elapsed"),
    faq: [
      { q: "What is the day of the year?", a: "It's the ordinal position of a date within its year — 1 January is day 1, 31 December is day 365 (or 366 in a leap year)." },
      { q: "How many days are in a year?", a: "365 in a common year and 366 in a leap year (when February has 29 days). This tool detects leap years automatically." },
    ],
  },

  tr: {
    title: "Yılın Günü Hesaplayıcı", short: "Bir tarihin yılın kaçıncı günü olduğunu ve kaç gün kaldığını bulun.",
    description: "Ücretsiz yılın günü hesaplayıcı. Bir tarih girerek sıra gün numarasını (1–366), yılda kalan günleri, o yıldaki toplam günü ve geçen yıl yüzdesini öğrenin.",
    keywords: ["yılın günü", "sıralı tarih", "gün numarası", "yılda kalan günler", "yılın kaçıncı günü"],
    inputs: { date: { label: "Tarih" } }, outputs: out("Yılın günü", "Kalan gün", "Yıldaki gün", "Geçen yıl %"),
    faq: [
      { q: "Yılın günü nedir?", a: "Bir tarihin yıl içindeki sıra konumudur — 1 Ocak 1. gün, 31 Aralık 365. gündür (artık yılda 366)." },
      { q: "Bir yılda kaç gün vardır?", a: "Normal yılda 365, artık yılda (Şubat 29 çekince) 366. Bu araç artık yılları otomatik algılar." },
    ],
  },
  de: { title: "Tag-des-Jahres-Rechner", short: "Ermitteln Sie, der wievielte Tag des Jahres ein Datum ist.", description: "Kostenloser Tag-des-Jahres-Rechner. Geben Sie ein Datum ein, um die Ordnungstagnummer (1–366), die verbleibenden Tage, die Gesamttage des Jahres und den vergangenen Jahresanteil zu erhalten.", keywords: ["tag des jahres", "ordinaldatum", "tagnummer", "verbleibende tage im jahr", "der wievielte tag"], inputs: { date: { label: "Datum" } }, outputs: out("Tag des Jahres", "Verbleibende Tage", "Tage im Jahr", "Jahr vergangen") },
  fr: { title: "Calculateur du Jour de l'Année", short: "Trouvez quel jour de l'année est une date et combien de jours restent.", description: "Calculateur du jour de l'année gratuit. Saisissez une date pour obtenir son numéro de jour ordinal (1–366), les jours restants, le total de jours de l'année et le pourcentage écoulé.", keywords: ["jour de l'année", "date ordinale", "numéro de jour", "jours restants dans l'année", "quel jour de l'année"], inputs: { date: { label: "Date" } }, outputs: out("Jour de l'année", "Jours restants", "Jours dans l'année", "Année écoulée") },
  es: { title: "Calculadora del Día del Año", short: "Halla qué día del año es una fecha y cuántos días quedan.", description: "Calculadora del día del año gratuita. Introduce una fecha para obtener su número de día ordinal (1–366), los días restantes, el total de días del año y el porcentaje transcurrido.", keywords: ["día del año", "fecha ordinal", "número de día", "días restantes del año", "qué día del año"], inputs: { date: { label: "Fecha" } }, outputs: out("Día del año", "Días restantes", "Días del año", "Año transcurrido") },
  it: { title: "Calcolatore del Giorno dell'Anno", short: "Trova che giorno dell'anno è una data e quanti giorni restano.", description: "Calcolatore del giorno dell'anno gratuito. Inserisci una data per ottenere il numero di giorno ordinale (1–366), i giorni rimanenti, i giorni totali dell'anno e la percentuale trascorsa.", keywords: ["giorno dell'anno", "data ordinale", "numero del giorno", "giorni rimanenti nell'anno", "che giorno dell'anno"], inputs: { date: { label: "Data" } }, outputs: out("Giorno dell'anno", "Giorni rimanenti", "Giorni nell'anno", "Anno trascorso") },
  ar: { title: "حاسبة يوم السنة", short: "اعرف اليوم الترتيبي من السنة وكم يومًا متبقيًا.", description: "حاسبة يوم السنة المجانية. أدخل تاريخًا للحصول على رقم اليوم الترتيبي (1–366) والأيام المتبقية وإجمالي أيام السنة ونسبة السنة المنقضية.", keywords: ["يوم السنة", "التاريخ الترتيبي", "رقم اليوم", "الأيام المتبقية في السنة", "اليوم الكم في السنة"], inputs: { date: { label: "التاريخ" } }, outputs: out("يوم السنة", "الأيام المتبقية", "أيام السنة", "السنة المنقضية") },
  ru: { title: "Калькулятор Дня Года", short: "Узнайте, какой это день года и сколько дней осталось.", description: "Бесплатный калькулятор дня года. Введите дату, чтобы получить порядковый номер дня (1–366), оставшиеся дни, всего дней в году и процент прошедшего года.", keywords: ["день года", "порядковая дата", "номер дня", "осталось дней в году", "какой день года"], inputs: { date: { label: "Дата" } }, outputs: out("День года", "Осталось дней", "Дней в году", "Год пройден") },
  zh: { title: "一年中的第几天计算器", short: "查找某个日期是一年中的第几天以及还剩多少天。", description: "免费的一年中的第几天计算器。输入日期即可获得序数日号（1–366）、剩余天数、当年总天数和已过去的年份百分比。", keywords: ["一年中的第几天", "序数日期", "天号", "一年中剩余天数", "今年第几天"], inputs: { date: { label: "日期" } }, outputs: out("一年中的第几天", "剩余天数", "全年天数", "已过去") },
  ja: { title: "年内通算日計算機", short: "日付が年内の何日目かと、残り日数を求めます。", description: "無料の年内通算日計算機。日付を入力すると、序数の日番号（1〜366）、残り日数、その年の総日数、経過した年の割合が得られます。", keywords: ["年内通算日", "序数日付", "日番号", "年内の残り日数", "今年の何日目"], inputs: { date: { label: "日付" } }, outputs: out("年内通算日", "残り日数", "年内日数", "経過割合") },
  ko: { title: "연중 일자 계산기", short: "날짜가 연중 며칠째인지와 남은 일수를 찾습니다.", description: "무료 연중 일자 계산기. 날짜를 입력하면 서수 일 번호(1–366), 남은 일수, 해당 연도의 총 일수, 경과한 연도 비율을 얻을 수 있습니다.", keywords: ["연중 일자", "서수 날짜", "일 번호", "연중 남은 일수", "올해 며칠째"], inputs: { date: { label: "날짜" } }, outputs: out("연중 일자", "남은 일수", "연중 일수", "경과 비율") },
  hi: { title: "वर्ष का दिन कैलकुलेटर", short: "कोई तिथि वर्ष का कौन-सा दिन है और कितने दिन शेष हैं, जानें।", description: "मुफ्त वर्ष-का-दिन कैलकुलेटर। एक तिथि दर्ज करें और उसका क्रमसूचक दिन नंबर (1–366), शेष दिन, उस वर्ष के कुल दिन तथा बीते वर्ष का प्रतिशत पाएं।", keywords: ["वर्ष का दिन", "क्रमसूचक तिथि", "दिन संख्या", "वर्ष में शेष दिन", "वर्ष का कौन सा दिन"], inputs: { date: { label: "तिथि" } }, outputs: out("वर्ष का दिन", "शेष दिन", "वर्ष में दिन", "वर्ष बीता") },
};

export default i18n;
