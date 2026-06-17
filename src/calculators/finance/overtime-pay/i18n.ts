import type { CalculatorI18n } from "@/types/i18n";

const io = (hr: string, rh: string, oh: string, om: string, tp: string, rp: string, op: string, or_: string) => ({
  inputs: { hourlyRate: { label: hr }, regularHours: { label: rh }, overtimeHours: { label: oh }, overtimeMultiplier: { label: om } },
  outputs: { totalPay: { label: tp }, regularPay: { label: rp }, overtimePay: { label: op }, overtimeRate: { label: or_ } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Overtime Pay Calculator", short: "Calculate total pay from regular and overtime hours.",
    description: "Free overtime pay calculator. Enter your hourly rate, regular hours, overtime hours and overtime multiplier (e.g. 1.5× for time-and-a-half) to get regular pay, overtime pay and total gross pay.",
    keywords: ["overtime pay calculator", "overtime calculator", "time and a half", "hourly pay calculator", "overtime rate"],
    ...io("Hourly rate", "Regular hours", "Overtime hours", "Overtime multiplier", "Total pay", "Regular pay", "Overtime pay", "Overtime rate"),
    faq: [
      { q: "How is overtime pay calculated?", a: "Overtime hours are paid at your hourly rate times a multiplier — commonly 1.5× ('time and a half'). Total pay = regular hours × rate + overtime hours × (rate × multiplier)." },
      { q: "Is this gross or net pay?", a: "Gross — before taxes and deductions. Use a paycheck calculator for take-home pay." },
    ],
  },
  nl: {
    title: "Overuren Pay Calculator", short: "Bereken total pay from regular and overtime uren.",
    description: "Gratis overtime pay calculator. Enter your hourly rate, regular uren, overtime uren and overtime multiplier (e.g. 1.5× for time-and-a-half) to get regular pay, overtime pay and total gross pay.",
    keywords: ["overtime pay calculator", "overtime calculator", "time and a half", "hourly pay calculator", "overtime rate"],
    ...io("Hourly rate", "Regular uren", "Overuren uren", "Overuren multiplier", "Total pay", "Regular pay", "Overuren pay", "Overuren rate"),
    faq: [
      { q: "How is overtime pay berekend?", a: "Overuren uren are paid at your hourly rate times a multiplier — commonly 1.5× ('time and a half'). Total pay = regular uren × rate + overtime uren × (rate × multiplier)." },
      { q: "Is this gross or net pay?", a: "Gross — before taxes and deductions. Use a paycontroleer calculator for take-home pay." },
    ],
  },

  pl: {
    title: "Nadgodziny Pay Kalkulator", short: "Oblicz total pay from regular and overtime godzin.",
    description: "Darmowy overtime pay kalkulator. Enter your hourly rate, regular godzin, overtime godzin and overtime multiplier (e.g. 1.5× for time-and-a-half) to get regular pay, overtime pay and total gross pay.",
    keywords: ["overtime pay kalkulator", "overtime kalkulator", "time and a half", "hourly pay kalkulator", "overtime rate"],
    ...io("Hourly rate", "Regular godzin", "Nadgodziny godzin", "Nadgodziny multiplier", "Total pay", "Regular pay", "Nadgodziny pay", "Nadgodziny rate"),
    faq: [
      { q: "How is overtime pay obliczd?", a: "Nadgodziny godzin are paid at your hourly rate times a multiplier — commonly 1.5× ('time and a half'). Total pay = regular godzin × rate + overtime godzin × (rate × multiplier)." },
      { q: "Is this gross or net pay?", a: "Gross — before taxes and deductions. Use a paysprawdź kalkulator for take-home pay." },
    ],
  },
  pt: {
    title: "Calculadora de Horas Extras", short: "Calcule o valor a receber pelas horas extraordinárias trabalhadas.",
    description: "Calculadora gratuita de horas extras. Calcule o valor a receber pelas horas extraordinárias com base na taxa horária e multiplicador legal.",
    keywords: ["horas extras", "trabalho suplementar", "calculadora horas extras", "pagamento extras", "salário hora"],
    ...io("Hourly rate", "Regular hours", "Overtime hours", "Overtime multiplier", "Total pay", "Regular pay", "Overtime pay", "Overtime rate"),
    faq: [
      { q: "How is overtime pay calculated?", a: "Overtime hours are paid at your hourly rate times a multiplier — commonly 1.5× ('time and a half'). Total pay = regular hours × rate + overtime hours × (rate × multiplier)." },
      { q: "Is this gross or net pay?", a: "Gross — before taxes and deductions. Use a paycheck calculator for take-home pay." },
    ],
  },
  id: {
    title: "Kalkulator Upah Lembur", short: "Hitung jumlah yang Anda terima atas jam lembur kerja.",
    description: "Kalkulator upah lembur gratis. Hitung jumlah yang diterima atas jam lembur berdasarkan tarif per jam dan pengali sesuai aturan.",
    keywords: ["upah lembur", "kalkulator lembur", "jam lembur", "uang lembur", "gaji lembur"],
    ...io("Hourly rate", "Regular hours", "Overtime hours", "Overtime multiplier", "Total pay", "Regular pay", "Overtime pay", "Overtime rate"),
    faq: [
      { q: "How is overtime pay calculated?", a: "Overtime hours are paid at your hourly rate times a multiplier — commonly 1.5× ('time and a half'). Total pay = regular hours × rate + overtime hours × (rate × multiplier)." },
      { q: "Is this gross or net pay?", a: "Gross — before taxes and deductions. Use a paycheck calculator for take-home pay." },
    ],
  },

  tr: {
    title: "Fazla Mesai Ücreti Hesaplayıcı", short: "Normal ve fazla mesai saatlerinden toplam ücreti hesaplayın.",
    description: "Ücretsiz fazla mesai ücreti hesaplayıcı. Saatlik ücretinizi, normal saatleri, fazla mesai saatlerini ve fazla mesai çarpanını (örn. %50 zamlı için 1,5×) girerek normal ücret, fazla mesai ücreti ve toplam brüt ücreti öğrenin.",
    keywords: ["fazla mesai ücreti hesaplama", "fazla mesai hesaplama", "zamlı ücret", "saatlik ücret hesaplama", "mesai oranı"],
    ...io("Saatlik ücret", "Normal saat", "Fazla mesai saati", "Mesai çarpanı", "Toplam ücret", "Normal ücret", "Fazla mesai ücreti", "Mesai saat ücreti"),
    faq: [
      { q: "Fazla mesai ücreti nasıl hesaplanır?", a: "Fazla mesai saatleri, saatlik ücretin bir çarpanla (yaygın olarak 1,5×) çarpımıyla ödenir. Toplam = normal saat × ücret + fazla mesai saati × (ücret × çarpan)." },
      { q: "Bu brüt mü net mi?", a: "Brüt — vergi ve kesintilerden önce. Net ücret için maaş hesaplayıcı kullanın." },
    ],
  },
  de: { title: "Überstundenlohn-Rechner", short: "Berechnen Sie das Gesamtgehalt aus regulären und Überstunden.", description: "Kostenloser Überstundenlohn-Rechner. Geben Sie Stundenlohn, reguläre Stunden, Überstunden und Überstundenfaktor (z. B. 1,5×) ein, um regulären Lohn, Überstundenlohn und Bruttogesamtlohn zu erhalten.", keywords: ["überstundenlohn rechner", "überstunden rechner", "zuschlag", "stundenlohn rechner", "überstundensatz"], ...io("Stundenlohn", "Reguläre Stunden", "Überstunden", "Überstundenfaktor", "Gesamtlohn", "Regulärer Lohn", "Überstundenlohn", "Überstundensatz") },
  fr: { title: "Calculateur d'Heures Supplémentaires", short: "Calculez la rémunération totale des heures normales et supplémentaires.", description: "Calculateur d'heures supplémentaires gratuit. Saisissez votre taux horaire, vos heures normales, vos heures supplémentaires et le multiplicateur (ex. 1,5×) pour obtenir le salaire normal, le salaire des heures sup et le brut total.", keywords: ["calculateur heures supplémentaires", "heures sup", "majoration", "salaire horaire", "taux heures sup"], ...io("Taux horaire", "Heures normales", "Heures supplémentaires", "Multiplicateur", "Rémunération totale", "Salaire normal", "Salaire heures sup", "Taux heures sup") },
  es: { title: "Calculadora de Horas Extra", short: "Calcula el pago total de horas normales y horas extra.", description: "Calculadora de horas extra gratuita. Introduce tu tarifa por hora, horas normales, horas extra y el multiplicador (p. ej. 1,5×) para obtener el pago normal, el pago de horas extra y el bruto total.", keywords: ["calculadora horas extra", "pago horas extra", "tiempo y medio", "tarifa por hora", "tasa horas extra"], ...io("Tarifa por hora", "Horas normales", "Horas extra", "Multiplicador", "Pago total", "Pago normal", "Pago horas extra", "Tarifa horas extra") },
  it: { title: "Calcolatore Straordinari", short: "Calcola la retribuzione totale da ore normali e straordinarie.", description: "Calcolatore di straordinari gratuito. Inserisci la tariffa oraria, le ore normali, le ore di straordinario e il moltiplicatore (es. 1,5×) per ottenere la paga normale, la paga straordinaria e il lordo totale.", keywords: ["calcolatore straordinari", "paga straordinari", "maggiorazione", "tariffa oraria", "tasso straordinario"], ...io("Tariffa oraria", "Ore normali", "Ore straordinarie", "Moltiplicatore", "Retribuzione totale", "Paga normale", "Paga straordinari", "Tariffa straordinari") },
  ar: { title: "حاسبة أجر العمل الإضافي", short: "احسب إجمالي الأجر من ساعات العمل العادية والإضافية.", description: "حاسبة أجر عمل إضافي مجانية. أدخل أجرك بالساعة والساعات العادية وساعات العمل الإضافي والمضاعف (مثل 1.5×) للحصول على الأجر العادي وأجر العمل الإضافي وإجمالي الأجر.", keywords: ["حاسبة العمل الإضافي", "أجر إضافي", "ونصف", "أجر بالساعة", "معدل العمل الإضافي"], ...io("الأجر بالساعة", "الساعات العادية", "ساعات إضافية", "مضاعف الإضافي", "إجمالي الأجر", "الأجر العادي", "أجر إضافي", "أجر الساعة الإضافية") },
  ru: { title: "Калькулятор Сверхурочных", short: "Рассчитайте общую оплату по обычным и сверхурочным часам.", description: "Бесплатный калькулятор сверхурочных. Введите почасовую ставку, обычные часы, сверхурочные часы и множитель (напр. 1,5×), чтобы получить обычную оплату, сверхурочную и общий доход до вычетов.", keywords: ["калькулятор сверхурочных", "оплата сверхурочных", "полуторная ставка", "почасовая оплата", "ставка сверхурочных"], ...io("Почасовая ставка", "Обычные часы", "Сверхурочные часы", "Множитель", "Итого оплата", "Обычная оплата", "Сверхурочная оплата", "Сверхурочная ставка") },
  zh: { title: "加班工资计算器", short: "根据正常和加班工时计算总工资。", description: "免费的加班工资计算器。输入时薪、正常工时、加班工时和加班倍数（如 1.5×），即可得到正常工资、加班工资和总税前工资。", keywords: ["加班工资计算器", "加班计算器", "1.5倍工资", "时薪计算器", "加班费率"], ...io("时薪", "正常工时", "加班工时", "加班倍数", "总工资", "正常工资", "加班工资", "加班时薪") },
  ja: { title: "残業代計算機", short: "通常時間と残業時間から総支給額を計算します。", description: "無料の残業代計算機。時給、通常時間、残業時間、残業倍率（例: 1.5×）を入力すると、通常給、残業代、総支給額（税引前）が得られます。", keywords: ["残業代 計算機", "残業 計算機", "1.5倍 賃金", "時給 計算機", "残業 割増率"], ...io("時給", "通常時間", "残業時間", "残業倍率", "総支給額", "通常給", "残業代", "残業時給") },
  ko: { title: "초과근무 수당 계산기", short: "정규 및 초과근무 시간으로 총 급여를 계산합니다.", description: "무료 초과근무 수당 계산기. 시급, 정규 시간, 초과근무 시간, 초과근무 배수(예: 1.5×)를 입력하면 정규 급여, 초과근무 수당, 총 세전 급여를 얻을 수 있습니다.", keywords: ["초과근무 수당 계산기", "야근 수당 계산기", "1.5배 급여", "시급 계산기", "초과근무 요율"], ...io("시급", "정규 시간", "초과근무 시간", "초과근무 배수", "총 급여", "정규 급여", "초과근무 수당", "초과근무 시급") },
  hi: { title: "ओवरटाइम वेतन कैलकुलेटर", short: "नियमित और ओवरटाइम घंटों से कुल वेतन की गणना करें।", description: "मुफ्त ओवरटाइम वेतन कैलकुलेटर। अपनी प्रति घंटा दर, नियमित घंटे, ओवरटाइम घंटे और ओवरटाइम गुणक (जैसे 1.5×) दर्ज करें और नियमित वेतन, ओवरटाइम वेतन तथा कुल सकल वेतन पाएं।", keywords: ["ओवरटाइम वेतन कैलकुलेटर", "ओवरटाइम कैलकुलेटर", "डेढ़ गुना", "प्रति घंटा वेतन", "ओवरटाइम दर"], ...io("प्रति घंटा दर", "नियमित घंटे", "ओवरटाइम घंटे", "ओवरटाइम गुणक", "कुल वेतन", "नियमित वेतन", "ओवरटाइम वेतन", "ओवरटाइम दर") },
};

export default i18n;
