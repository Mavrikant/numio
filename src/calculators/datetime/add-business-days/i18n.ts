import type { CalculatorI18n } from "@/types/i18n";

const io = (sd: string, bd: string, rd: string, cd: string, wd: string) => ({
  inputs: { startDate: { label: sd }, businessDays: { label: bd } },
  outputs: { resultDate: { label: rd }, calendarDays: { label: cd }, weekendDays: { label: wd } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Add Business Days Calculator", short: "Add or subtract working days (Mon–Fri) from a date.",
    description: "Free business days calculator. Add or subtract a number of working days (Monday–Friday) from a start date to find a deadline or delivery date. Shows the resulting date and how many calendar and weekend days were spanned.",
    keywords: ["add business days", "working days calculator", "business days from date", "deadline calculator", "weekday calculator"],
    ...io("Start date", "Business days (±)", "Result date", "Calendar days spanned", "Weekend days spanned"),
    faq: [
      { q: "What counts as a business day?", a: "Monday through Friday. Weekends (Saturday and Sunday) are skipped. Public holidays are not excluded since they differ by country." },
      { q: "Can I count backwards?", a: "Yes — enter a negative number of business days to find a date that many working days before the start date." },
    ],
  },
  pt: {
    title: "Adicionar Dias Úteis a uma Data", short: "Adicione ou subtraia dias úteis a uma data, excluindo fins de semana.",
    description: "Calculadora gratuita de dias úteis. Adicione ou subtraia dias úteis a uma data, excluindo fins de semana e feriados configuráveis.",
    keywords: ["dias úteis", "adicionar dias úteis", "calcular prazo", "dias trabalho", "calendário útil"],
    ...io("Start date", "Business days (±)", "Result date", "Calendar days spanned", "Weekend days spanned"),
    faq: [
      { q: "What counts as a business day?", a: "Monday through Friday. Weekends (Saturday and Sunday) are skipped. Public holidays are not excluded since they differ by country." },
      { q: "Can I count backwards?", a: "Yes — enter a negative number of business days to find a date that many working days before the start date." },
    ],
  },
  id: {
    title: "Tambah Hari Kerja ke Tanggal", short: "Tambah atau kurangi hari kerja pada tanggal, tidak termasuk akhir pekan.",
    description: "Kalkulator hari kerja gratis. Tambah atau kurangi hari kerja pada tanggal, tidak termasuk akhir pekan dan libur yang dapat dikonfigurasi.",
    keywords: ["hari kerja", "tambah hari kerja", "hitung tenggat", "hari bisnis", "kalender kerja"],
    ...io("Start date", "Business days (±)", "Result date", "Calendar days spanned", "Weekend days spanned"),
    faq: [
      { q: "What counts as a business day?", a: "Monday through Friday. Weekends (Saturday and Sunday) are skipped. Public holidays are not excluded since they differ by country." },
      { q: "Can I count backwards?", a: "Yes — enter a negative number of business days to find a date that many working days before the start date." },
    ],
  },

  tr: {
    title: "İş Günü Ekleme Hesaplayıcı", short: "Bir tarihe iş günü (Pzt–Cum) ekleyin veya çıkarın.",
    description: "Ücretsiz iş günü hesaplayıcı. Bir başlangıç tarihine iş günü (Pazartesi–Cuma) ekleyin veya çıkarın; teslim veya son tarih bulun. Sonuç tarihini, kapsanan takvim ve hafta sonu günlerini gösterir.",
    keywords: ["iş günü ekle", "çalışma günü hesaplama", "tarihten iş günü", "son tarih hesaplama", "hafta içi hesaplama"],
    ...io("Başlangıç tarihi", "İş günü (±)", "Sonuç tarihi", "Kapsanan takvim günü", "Kapsanan hafta sonu günü"),
    faq: [
      { q: "İş günü olarak ne sayılır?", a: "Pazartesi'den Cuma'ya kadar. Hafta sonları (Cumartesi ve Pazar) atlanır. Resmi tatiller ülkeye göre değiştiği için hariç tutulmaz." },
      { q: "Geriye doğru sayabilir miyim?", a: "Evet — negatif iş günü sayısı girerek başlangıç tarihinden o kadar iş günü öncesini bulun." },
    ],
  },
  de: { title: "Arbeitstage-Addieren-Rechner", short: "Arbeitstage (Mo–Fr) zu einem Datum addieren oder abziehen.", description: "Kostenloser Arbeitstage-Rechner. Addieren oder subtrahieren Sie Arbeitstage (Montag–Freitag) von einem Startdatum, um eine Frist zu finden. Zeigt das Ergebnisdatum und die überspannten Kalender- und Wochenendtage.", keywords: ["arbeitstage addieren", "werktage rechner", "arbeitstage ab datum", "fristen rechner"], ...io("Startdatum", "Arbeitstage (±)", "Ergebnisdatum", "Kalendertage", "Wochenendtage") },
  fr: { title: "Calculateur d'Ajout de Jours Ouvrés", short: "Ajoutez ou soustrayez des jours ouvrés (lun–ven) à une date.", description: "Calculateur de jours ouvrés gratuit. Ajoutez ou soustrayez des jours ouvrés (lundi–vendredi) à une date de départ pour trouver une échéance. Affiche la date résultante et les jours calendaires et de week-end couverts.", keywords: ["ajouter jours ouvrés", "calculateur jours ouvrables", "jours ouvrés depuis une date", "calculateur d'échéance"], ...io("Date de départ", "Jours ouvrés (±)", "Date résultante", "Jours calendaires", "Jours de week-end") },
  es: { title: "Calculadora de Sumar Días Hábiles", short: "Suma o resta días laborables (lun–vie) a una fecha.", description: "Calculadora de días hábiles gratuita. Suma o resta días laborables (lunes–viernes) a una fecha inicial para hallar un plazo. Muestra la fecha resultante y los días naturales y de fin de semana abarcados.", keywords: ["sumar días hábiles", "calculadora días laborables", "días hábiles desde fecha", "calculadora de plazo"], ...io("Fecha inicial", "Días hábiles (±)", "Fecha resultante", "Días naturales", "Días de fin de semana") },
  it: { title: "Calcolatore Aggiungi Giorni Lavorativi", short: "Aggiungi o sottrai giorni lavorativi (lun–ven) a una data.", description: "Calcolatore di giorni lavorativi gratuito. Aggiungi o sottrai giorni lavorativi (lunedì–venerdì) a una data iniziale per trovare una scadenza. Mostra la data risultante e i giorni di calendario e di weekend coperti.", keywords: ["aggiungi giorni lavorativi", "calcolatore giorni lavorativi", "giorni lavorativi da data", "calcolatore scadenza"], ...io("Data iniziale", "Giorni lavorativi (±)", "Data risultante", "Giorni di calendario", "Giorni di weekend") },
  ar: { title: "حاسبة إضافة أيام العمل", short: "أضف أو اطرح أيام عمل (الإثنين–الجمعة) من تاريخ.", description: "حاسبة أيام عمل مجانية. أضف أو اطرح أيام عمل (الإثنين–الجمعة) من تاريخ بداية لإيجاد موعد نهائي. تعرض التاريخ الناتج وعدد الأيام التقويمية وأيام نهاية الأسبوع المشمولة.", keywords: ["إضافة أيام عمل", "حاسبة أيام العمل", "أيام العمل من تاريخ", "حاسبة الموعد النهائي"], ...io("تاريخ البداية", "أيام العمل (±)", "التاريخ الناتج", "الأيام التقويمية", "أيام نهاية الأسبوع") },
  ru: { title: "Калькулятор Добавления Рабочих Дней", short: "Добавьте или вычтите рабочие дни (пн–пт) к дате.", description: "Бесплатный калькулятор рабочих дней. Добавьте или вычтите рабочие дни (понедельник–пятница) от начальной даты, чтобы найти срок. Показывает итоговую дату и охваченные календарные и выходные дни.", keywords: ["добавить рабочие дни", "калькулятор рабочих дней", "рабочие дни от даты", "калькулятор срока"], ...io("Начальная дата", "Рабочие дни (±)", "Итоговая дата", "Календарные дни", "Выходные дни") },
  zh: { title: "增加工作日计算器", short: "在日期上增加或减少工作日（周一至周五）。", description: "免费的工作日计算器。在起始日期上增加或减少工作日（周一至周五）以查找截止或交付日期。显示结果日期以及跨越的日历天数和周末天数。", keywords: ["增加工作日", "工作日计算器", "从日期算工作日", "截止日期计算器"], ...io("起始日期", "工作日 (±)", "结果日期", "跨越日历天数", "跨越周末天数") },
  ja: { title: "営業日加算計算機", short: "日付に営業日（月〜金）を加算・減算します。", description: "無料の営業日計算機。開始日に営業日（月曜〜金曜）を加算または減算して、締切や納品日を求めます。結果の日付と、またいだ暦日数・週末日数を表示します。", keywords: ["営業日 加算", "稼働日 計算機", "日付から営業日", "締切 計算機"], ...io("開始日", "営業日 (±)", "結果の日付", "またいだ暦日数", "またいだ週末日数") },
  ko: { title: "영업일 더하기 계산기", short: "날짜에 영업일(월–금)을 더하거나 뺍니다.", description: "무료 영업일 계산기. 시작일에 영업일(월요일–금요일)을 더하거나 빼서 마감일이나 배송일을 찾습니다. 결과 날짜와 걸친 달력 일수 및 주말 일수를 표시합니다.", keywords: ["영업일 더하기", "근무일 계산기", "날짜에서 영업일", "마감일 계산기"], ...io("시작일", "영업일 (±)", "결과 날짜", "걸친 달력 일수", "걸친 주말 일수") },
  hi: { title: "कार्यदिवस जोड़ें कैलकुलेटर", short: "किसी तिथि में कार्यदिवस (सोम–शुक्र) जोड़ें या घटाएं।", description: "मुफ्त कार्यदिवस कैलकुलेटर। समय-सीमा या डिलीवरी तिथि खोजने के लिए आरंभ तिथि में कार्यदिवस (सोमवार–शुक्रवार) जोड़ें या घटाएं। परिणामी तिथि और कवर किए गए कैलेंडर व सप्ताहांत दिन दिखाता है।", keywords: ["कार्यदिवस जोड़ें", "कार्यदिवस कैलकुलेटर", "तिथि से कार्यदिवस", "समय-सीमा कैलकुलेटर"], ...io("आरंभ तिथि", "कार्यदिवस (±)", "परिणामी तिथि", "कैलेंडर दिन", "सप्ताहांत दिन") },
};

export default i18n;
