import type { CalculatorI18n } from "@/types/i18n";

const io = (fv: string, r: string, p: string, pv: string, td: string, df: string) => ({
  inputs: { futureValue: { label: fv }, rate: { label: r }, periods: { label: p } },
  outputs: { presentValue: { label: pv }, totalDiscount: { label: td }, discountFactor: { label: df } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Present Value Calculator", short: "Find what a future sum of money is worth today.",
    description: "Free present value (PV) calculator. Enter a future amount, a discount rate and the number of periods to find what it's worth today, using PV = FV/(1+r)ⁿ, plus the total discount and discount factor.",
    keywords: ["present value calculator", "pv calculator", "discounted value", "time value of money", "discount rate"],
    ...io("Future value", "Discount rate", "Periods (years)", "Present value", "Total discount", "Discount factor"),
    faq: [
      { q: "What is present value?", a: "It's how much a future amount is worth today, given a discount rate that reflects the time value of money. $10,000 in 10 years at 5% is worth about $6,139 today." },
      { q: "What discount rate should I use?", a: "Use your required rate of return or cost of capital — e.g. an expected investment return, or an interest rate. Higher rates produce lower present values." },
      { q: "What is the difference between present value and future value?", a: "Present value (PV) discounts future money to today's value. Future value (FV) grows today's money to a future amount. They are inverse calculations: FV = PV × (1+r)ⁿ and PV = FV / (1+r)ⁿ." },
      { q: "How does the number of periods affect present value?", a: "More periods (years) reduce the present value because money is discounted over a longer time. $10,000 at 5% is worth $9,524 in 1 year, $6,139 in 10 years, and only $376 in 50 years." },
      { q: "What is the discount factor and how is it used?", a: "The discount factor is 1/(1+r)ⁿ. Multiply any future cash flow by the discount factor to get its present value. A factor of 0.6139 means the future amount is worth about 61.4% of its face value today." },
    ],
  },
  nl: {
    title: "Present Waarde Calculator", short: "Find what a future sum of money is worth today.",
    description: "Gratis present value (PV) calculator. Enter a future amount, a discount rate and the nummer of periods to find what it's worth today, using PV = FV/(1+r)ⁿ, plus the total discount and discount factor.",
    keywords: ["present value calculator", "pv calculator", "discounted value", "time value of money", "discount rate"],
    ...io("Future value", "Korting rate", "Periods (jaren)", "Present value", "Total discount", "Korting factor"),
    faq: [
      { q: "What is present value?", a: "It's how much a future amount is worth today, given a discount rate that reflects the time value of money. $10,000 in 10 jaren at 5% is worth about $6,139 today." },
      { q: "What discount rate should I use?", a: "Use your required rate of return or cost of capital — e.g. an expected investment return, or an interest rate. Higher rates produce lower present values." },
    ],
  },

  pl: {
    title: "Present Wartość Kalkulator", short: "Find what a future sum of money is worth today.",
    description: "Darmowy present value (PV) kalkulator. Enter a future amount, a discount rate and the liczba of periods to find what it's worth today, using PV = FV/(1+r)ⁿ, plus the total discount and discount factor.",
    keywords: ["present value kalkulator", "pv kalkulator", "discounted value", "time value of money", "discount rate"],
    ...io("Future value", "Rabat rate", "Periods (lat)", "Present value", "Total discount", "Rabat factor"),
    faq: [
      { q: "What is present value?", a: "It's how much a future amount is worth today, given a discount rate that reflects the time value of money. $10,000 in 10 lat at 5% is worth about $6,139 today." },
      { q: "What discount rate should I use?", a: "Use your required rate of return or cost of capital — e.g. an expected investment return, or an interest rate. Higher rates produce lower present values." },
    ],
  },
  pt: {
    title: "Calculadora de Valor Presente", short: "Calcule o valor presente de fluxos de caixa futuros.",
    description: "Calculadora gratuita de valor presente (VP). Calcule quanto vale hoje uma quantia a receber no futuro, descontada pela taxa de desconto.",
    keywords: ["valor presente", "VP", "valor atualizado", "fluxo de caixa descontado", "taxa desconto"],
    ...io("Future value", "Discount rate", "Periods (years)", "Present value", "Total discount", "Discount factor"),
    faq: [
      { q: "What is present value?", a: "It's how much a future amount is worth today, given a discount rate that reflects the time value of money. $10,000 in 10 years at 5% is worth about $6,139 today." },
      { q: "What discount rate should I use?", a: "Use your required rate of return or cost of capital — e.g. an expected investment return, or an interest rate. Higher rates produce lower present values." },
    ],
  },
  id: {
    title: "Kalkulator Nilai Sekarang", short: "Hitung nilai sekarang dari arus kas masa depan.",
    description: "Kalkulator nilai sekarang (PV) gratis. Hitung berapa nilai sekarang dari jumlah yang akan diterima di masa depan, didiskon dengan tingkat diskonto.",
    keywords: ["nilai sekarang", "PV", "discounted cash flow", "DCF", "tingkat diskonto"],
    ...io("Future value", "Discount rate", "Periods (years)", "Present value", "Total discount", "Discount factor"),
    faq: [
      { q: "What is present value?", a: "It's how much a future amount is worth today, given a discount rate that reflects the time value of money. $10,000 in 10 years at 5% is worth about $6,139 today." },
      { q: "What discount rate should I use?", a: "Use your required rate of return or cost of capital — e.g. an expected investment return, or an interest rate. Higher rates produce lower present values." },
    ],
  },

  tr: {
    title: "Bugünkü Değer Hesaplayıcı", short: "Gelecekteki bir para tutarının bugün ne ettiğini bulun.",
    description: "Ücretsiz bugünkü değer (PV) hesaplayıcı. Gelecekteki tutarı, iskonto oranını ve dönem sayısını girerek PV = FV/(1+r)ⁿ ile bugünkü değerini, ayrıca toplam iskontoyu ve iskonto faktörünü öğrenin.",
    keywords: ["bugünkü değer hesaplama", "pv hesaplama", "iskonto edilmiş değer", "paranın zaman değeri", "iskonto oranı"],
    ...io("Gelecekteki değer", "İskonto oranı", "Dönem (yıl)", "Bugünkü değer", "Toplam iskonto", "İskonto faktörü"),
    faq: [
      { q: "Bugünkü değer nedir?", a: "Gelecekteki bir tutarın, paranın zaman değerini yansıtan bir iskonto oranı verildiğinde bugün ne ettiğidir. %5 ile 10 yıl sonraki 10.000 ₺ bugün yaklaşık 6.139 ₺ eder." },
      { q: "Hangi iskonto oranını kullanmalıyım?", a: "Gerekli getiri oranınızı veya sermaye maliyetinizi kullanın — örn. beklenen yatırım getirisi veya bir faiz oranı. Yüksek oranlar daha düşük bugünkü değer verir." },
    ],
  },
  de: { title: "Barwert-Rechner", short: "Ermitteln Sie, was ein zukünftiger Geldbetrag heute wert ist.", description: "Kostenloser Barwert-Rechner (PV). Geben Sie einen zukünftigen Betrag, einen Diskontsatz und die Periodenzahl ein, um den heutigen Wert mit PV = FV/(1+r)ⁿ zu berechnen, samt Gesamtdiskont und Diskontfaktor.", keywords: ["barwert rechner", "pv rechner", "abgezinster wert", "zeitwert des geldes", "diskontsatz"], ...io("Zukunftswert", "Diskontsatz", "Perioden (Jahre)", "Barwert", "Gesamtdiskont", "Diskontfaktor") },
  fr: { title: "Calculateur de Valeur Actuelle", short: "Trouvez ce qu'une somme future vaut aujourd'hui.", description: "Calculateur de valeur actuelle (VA) gratuit. Saisissez un montant futur, un taux d'actualisation et le nombre de périodes pour trouver sa valeur d'aujourd'hui avec VA = VF/(1+r)ⁿ.", keywords: ["calculateur valeur actuelle", "va calculateur", "valeur actualisée", "valeur temps de l'argent", "taux d'actualisation"], ...io("Valeur future", "Taux d'actualisation", "Périodes (années)", "Valeur actuelle", "Actualisation totale", "Facteur d'actualisation") },
  es: { title: "Calculadora de Valor Presente", short: "Halla cuánto vale hoy una suma de dinero futura.", description: "Calculadora de valor presente (VP) gratuita. Introduce un monto futuro, una tasa de descuento y el número de periodos para hallar su valor de hoy con VP = VF/(1+r)ⁿ.", keywords: ["calculadora valor presente", "vp calculadora", "valor descontado", "valor temporal del dinero", "tasa de descuento"], ...io("Valor futuro", "Tasa de descuento", "Periodos (años)", "Valor presente", "Descuento total", "Factor de descuento") },
  it: { title: "Calcolatore Valore Attuale", short: "Trova quanto vale oggi una somma di denaro futura.", description: "Calcolatore del valore attuale (VA) gratuito. Inserisci un importo futuro, un tasso di sconto e il numero di periodi per trovare il valore odierno con VA = VF/(1+r)ⁿ.", keywords: ["calcolatore valore attuale", "va calcolatore", "valore scontato", "valore temporale del denaro", "tasso di sconto"], ...io("Valore futuro", "Tasso di sconto", "Periodi (anni)", "Valore attuale", "Sconto totale", "Fattore di sconto") },
  ar: { title: "حاسبة القيمة الحالية", short: "اعرف كم تساوي مبلغًا مستقبليًا اليوم.", description: "حاسبة القيمة الحالية (PV) مجانية. أدخل مبلغًا مستقبليًا ومعدل خصم وعدد الفترات لمعرفة قيمته اليوم باستخدام PV = FV/(1+r)ⁿ، مع إجمالي الخصم ومعامل الخصم.", keywords: ["حاسبة القيمة الحالية", "pv", "القيمة المخصومة", "القيمة الزمنية للنقود", "معدل الخصم"], ...io("القيمة المستقبلية", "معدل الخصم", "الفترات (سنوات)", "القيمة الحالية", "إجمالي الخصم", "معامل الخصم") },
  ru: { title: "Калькулятор Приведённой Стоимости", short: "Узнайте, сколько будущая сумма денег стоит сегодня.", description: "Бесплатный калькулятор приведённой стоимости (PV). Введите будущую сумму, ставку дисконтирования и число периодов, чтобы найти её сегодняшнюю стоимость по PV = FV/(1+r)ⁿ.", keywords: ["калькулятор приведённой стоимости", "pv калькулятор", "дисконтированная стоимость", "временная стоимость денег", "ставка дисконтирования"], ...io("Будущая стоимость", "Ставка дисконтирования", "Периоды (годы)", "Приведённая стоимость", "Всего дисконт", "Коэффициент дисконтирования") },
  zh: { title: "现值计算器", short: "计算未来一笔钱今天值多少。", description: "免费的现值 (PV) 计算器。输入未来金额、折现率和期数，使用 PV = FV/(1+r)ⁿ 计算其今天的价值，并给出总折现额和折现系数。", keywords: ["现值计算器", "pv计算器", "折现值", "货币时间价值", "折现率"], ...io("未来值", "折现率", "期数（年）", "现值", "总折现额", "折现系数") },
  ja: { title: "現在価値計算機", short: "将来の金額が今いくらの価値かを求めます。", description: "無料の現在価値 (PV) 計算機。将来の金額、割引率、期間数を入力すると、PV = FV/(1+r)ⁿ で今日の価値、総割引額、割引係数が得られます。", keywords: ["現在価値 計算機", "pv 計算機", "割引価値", "貨幣の時間価値", "割引率"], ...io("将来価値", "割引率", "期間（年）", "現在価値", "総割引額", "割引係数") },
  ko: { title: "현재 가치 계산기", short: "미래의 금액이 오늘 얼마의 가치인지 구합니다.", description: "무료 현재 가치(PV) 계산기. 미래 금액, 할인율, 기간 수를 입력하면 PV = FV/(1+r)ⁿ로 오늘의 가치, 총 할인액, 할인 계수를 얻을 수 있습니다.", keywords: ["현재 가치 계산기", "pv 계산기", "할인 가치", "화폐의 시간 가치", "할인율"], ...io("미래 가치", "할인율", "기간(년)", "현재 가치", "총 할인액", "할인 계수") },
  hi: { title: "वर्तमान मूल्य कैलकुलेटर", short: "भविष्य की राशि आज कितनी मूल्यवान है, जानें।", description: "मुफ्त वर्तमान मूल्य (PV) कैलकुलेटर। भविष्य की राशि, छूट दर और अवधियों की संख्या दर्ज करें और PV = FV/(1+r)ⁿ से आज का मूल्य, कुल छूट तथा छूट गुणक पाएं।", keywords: ["वर्तमान मूल्य कैलकुलेटर", "pv कैलकुलेटर", "रियायती मूल्य", "धन का समय मूल्य", "छूट दर"], ...io("भविष्य मूल्य", "छूट दर", "अवधि (वर्ष)", "वर्तमान मूल्य", "कुल छूट", "छूट गुणक") },
};

export default i18n;
