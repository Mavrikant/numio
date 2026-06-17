import type { CalculatorI18n } from "@/types/i18n";

const io = (s: string, c: string, b: string, cm: string, tp: string, er: string) => ({
  inputs: { saleAmount: { label: s }, commissionRate: { label: c }, baseSalary: { label: b } },
  outputs: { commission: { label: cm }, totalPay: { label: tp }, effectiveRate: { label: er } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Sales Commission Calculator", short: "Calculate commission earnings from a sale amount and rate.",
    description: "Free sales commission calculator. Enter a sale amount and commission rate (plus an optional base salary) to get the commission earned, total pay and your effective rate on the sale.",
    keywords: ["sales commission calculator", "commission calculator", "commission rate", "base plus commission", "commission earnings"],
    ...io("Sale amount", "Commission rate", "Base salary (optional)", "Commission", "Total pay", "Effective rate"),
    faq: [
      { q: "How is sales commission calculated?", a: "Multiply the sale amount by the commission rate. A 5% commission on a $50,000 sale is $2,500. Add any base salary for total pay." },
      { q: "What is the effective rate?", a: "It's total pay (commission plus base) as a percentage of the sale amount — useful when a base salary is included." },
    ],
  },
  nl: {
    title: "Sales Commissie Calculator", short: "Bereken commission earnings from a sale amount and rate.",
    description: "Gratis sales commission calculator. Enter a sale amount and commission rate (plus an optional base salary) to get the commission earned, total pay and your effective rate on the sale.",
    keywords: ["sales commission calculator", "commission calculator", "commission rate", "base plus commission", "commission earnings"],
    ...io("Sale amount", "Commissie rate", "Base salary (optional)", "Commissie", "Total pay", "Effective rate"),
    faq: [
      { q: "How is sales commission berekend?", a: "Multiply the sale amount by the commission rate. A 5% commission on a $50,000 sale is $2,500. Add any base salary for total pay." },
      { q: "What is the effective rate?", a: "It's total pay (commission plus base) as a percentage of the sale amount — useful when a base salary is included." },
    ],
  },

  pl: {
    title: "Sales Prowizja Kalkulator", short: "Oblicz commission earnings from a sale amount and rate.",
    description: "Darmowy sales commission kalkulator. Enter a sale amount and commission rate (plus an optional base salary) to get the commission earned, total pay and your effective rate on the sale.",
    keywords: ["sales commission kalkulator", "commission kalkulator", "commission rate", "base plus commission", "commission earnings"],
    ...io("Sale amount", "Prowizja rate", "Base salary (optional)", "Prowizja", "Total pay", "Effective rate"),
    faq: [
      { q: "How is sales commission obliczd?", a: "Multiply the sale amount by the commission rate. A 5% commission on a $50,000 sale is $2,500. Add any base salary for total pay." },
      { q: "What is the effective rate?", a: "It's total pay (commission plus base) as a percentage of the sale amount — useful when a base salary is included." },
    ],
  },
  pt: {
    title: "Calculadora de Comissão de Vendas", short: "Calcule a sua comissão de vendas com base no valor vendido.",
    description: "Calculadora gratuita de comissão. Calcule a comissão a receber com base no valor vendido e na percentagem acordada.",
    keywords: ["comissão vendas", "calculadora comissão", "remuneração vendedor", "percentagem vendas", "vendedor"],
    ...io("Sale amount", "Commission rate", "Base salary (optional)", "Commission", "Total pay", "Effective rate"),
    faq: [
      { q: "How is sales commission calculated?", a: "Multiply the sale amount by the commission rate. A 5% commission on a $50,000 sale is $2,500. Add any base salary for total pay." },
      { q: "What is the effective rate?", a: "It's total pay (commission plus base) as a percentage of the sale amount — useful when a base salary is included." },
    ],
  },
  id: {
    title: "Kalkulator Komisi Penjualan", short: "Hitung komisi penjualan Anda berdasarkan jumlah penjualan.",
    description: "Kalkulator komisi gratis. Hitung komisi yang diterima berdasarkan jumlah penjualan dan persentase yang disepakati.",
    keywords: ["komisi penjualan", "kalkulator komisi", "gaji sales", "persentase penjualan", "sales"],
    ...io("Sale amount", "Commission rate", "Base salary (optional)", "Commission", "Total pay", "Effective rate"),
    faq: [
      { q: "How is sales commission calculated?", a: "Multiply the sale amount by the commission rate. A 5% commission on a $50,000 sale is $2,500. Add any base salary for total pay." },
      { q: "What is the effective rate?", a: "It's total pay (commission plus base) as a percentage of the sale amount — useful when a base salary is included." },
    ],
  },

  tr: {
    title: "Satış Komisyonu Hesaplayıcı", short: "Satış tutarı ve orandan komisyon kazancını hesaplayın.",
    description: "Ücretsiz satış komisyonu hesaplayıcı. Bir satış tutarı ve komisyon oranı (ve isteğe bağlı bir taban maaş) girerek kazanılan komisyonu, toplam ödemeyi ve satıştaki efektif oranınızı öğrenin.",
    keywords: ["satış komisyonu hesaplama", "komisyon hesaplama", "komisyon oranı", "taban artı komisyon", "komisyon kazancı"],
    ...io("Satış tutarı", "Komisyon oranı", "Taban maaş (isteğe bağlı)", "Komisyon", "Toplam ödeme", "Efektif oran"),
    faq: [
      { q: "Satış komisyonu nasıl hesaplanır?", a: "Satış tutarını komisyon oranıyla çarpın. 50.000 ₺'lik satışta %5 komisyon 2.500 ₺'dir. Toplam ödeme için taban maaşı ekleyin." },
      { q: "Efektif oran nedir?", a: "Toplam ödemenin (komisyon artı taban) satış tutarına oranıdır — taban maaş dâhil olduğunda kullanışlıdır." },
    ],
  },
  de: { title: "Verkaufsprovisions-Rechner", short: "Berechnen Sie die Provision aus Verkaufsbetrag und Satz.", description: "Kostenloser Verkaufsprovisions-Rechner. Geben Sie einen Verkaufsbetrag und Provisionssatz (plus optionales Grundgehalt) ein, um die verdiente Provision, das Gesamtgehalt und den effektiven Satz zu erhalten.", keywords: ["verkaufsprovision rechner", "provisionsrechner", "provisionssatz", "grundgehalt plus provision"], ...io("Verkaufsbetrag", "Provisionssatz", "Grundgehalt (optional)", "Provision", "Gesamtgehalt", "Effektiver Satz") },
  fr: { title: "Calculateur de Commission de Vente", short: "Calculez la commission gagnée à partir d'un montant de vente et d'un taux.", description: "Calculateur de commission de vente gratuit. Saisissez un montant de vente et un taux de commission (plus un salaire de base optionnel) pour obtenir la commission gagnée, la rémunération totale et votre taux effectif.", keywords: ["calculateur commission vente", "calculateur de commission", "taux de commission", "fixe plus commission"], ...io("Montant de la vente", "Taux de commission", "Salaire de base (optionnel)", "Commission", "Rémunération totale", "Taux effectif") },
  es: { title: "Calculadora de Comisión de Ventas", short: "Calcula la comisión ganada a partir de un monto de venta y una tasa.", description: "Calculadora de comisión de ventas gratuita. Introduce un monto de venta y una tasa de comisión (más un salario base opcional) para obtener la comisión ganada, el pago total y tu tasa efectiva.", keywords: ["calculadora comisión ventas", "calculadora de comisión", "tasa de comisión", "base más comisión"], ...io("Monto de venta", "Tasa de comisión", "Salario base (opcional)", "Comisión", "Pago total", "Tasa efectiva") },
  it: { title: "Calcolatore Commissione di Vendita", short: "Calcola la commissione guadagnata da un importo di vendita e un tasso.", description: "Calcolatore di commissione di vendita gratuito. Inserisci un importo di vendita e un tasso di commissione (più uno stipendio base opzionale) per ottenere la commissione guadagnata, la retribuzione totale e il tasso effettivo.", keywords: ["calcolatore commissione vendita", "calcolatore di commissione", "tasso di commissione", "base più commissione"], ...io("Importo vendita", "Tasso di commissione", "Stipendio base (opzionale)", "Commissione", "Retribuzione totale", "Tasso effettivo") },
  ar: { title: "حاسبة عمولة المبيعات", short: "احسب عمولة المبيعات من مبلغ البيع والنسبة.", description: "حاسبة عمولة مبيعات مجانية. أدخل مبلغ البيع ونسبة العمولة (مع راتب أساسي اختياري) للحصول على العمولة المكتسبة وإجمالي الأجر ونسبتك الفعلية على البيع.", keywords: ["حاسبة عمولة المبيعات", "حاسبة العمولة", "نسبة العمولة", "أساسي زائد عمولة"], ...io("مبلغ البيع", "نسبة العمولة", "الراتب الأساسي (اختياري)", "العمولة", "إجمالي الأجر", "النسبة الفعلية") },
  ru: { title: "Калькулятор Комиссии с Продаж", short: "Рассчитайте комиссию по сумме продажи и ставке.", description: "Бесплатный калькулятор комиссии с продаж. Введите сумму продажи и ставку комиссии (плюс необязательный оклад), чтобы получить заработанную комиссию, общую выплату и вашу эффективную ставку.", keywords: ["калькулятор комиссии с продаж", "калькулятор комиссии", "ставка комиссии", "оклад плюс комиссия"], ...io("Сумма продажи", "Ставка комиссии", "Оклад (необяз.)", "Комиссия", "Общая выплата", "Эффективная ставка") },
  zh: { title: "销售佣金计算器", short: "根据销售金额和佣金率计算佣金收入。", description: "免费的销售佣金计算器。输入销售金额和佣金率（以及可选的底薪），即可得到所得佣金、总收入以及你在该笔销售上的有效费率。", keywords: ["销售佣金计算器", "佣金计算器", "佣金率", "底薪加佣金"], ...io("销售金额", "佣金率", "底薪（可选）", "佣金", "总收入", "有效费率") },
  ja: { title: "販売手数料（コミッション）計算機", short: "売上金額と料率から手数料収入を計算します。", description: "無料の販売手数料計算機。売上金額と手数料率（および任意の基本給）を入力すると、得られる手数料、総支給額、その売上における実効率が得られます。", keywords: ["販売手数料 計算機", "コミッション 計算機", "手数料率", "基本給 プラス 手数料"], ...io("売上金額", "手数料率", "基本給（任意）", "手数料", "総支給額", "実効率") },
  ko: { title: "판매 수수료 계산기", short: "판매 금액과 수수료율로 수수료 수입을 계산합니다.", description: "무료 판매 수수료 계산기. 판매 금액과 수수료율(및 선택적 기본급)을 입력하면 받은 수수료, 총 급여, 해당 판매에 대한 실효율을 얻을 수 있습니다.", keywords: ["판매 수수료 계산기", "수수료 계산기", "수수료율", "기본급 플러스 수수료"], ...io("판매 금액", "수수료율", "기본급(선택)", "수수료", "총 급여", "실효율") },
  hi: { title: "बिक्री कमीशन कैलकुलेटर", short: "बिक्री राशि और दर से कमीशन आय की गणना करें।", description: "मुफ्त बिक्री कमीशन कैलकुलेटर। बिक्री राशि और कमीशन दर (और वैकल्पिक मूल वेतन) दर्ज करें और अर्जित कमीशन, कुल भुगतान तथा उस बिक्री पर अपनी प्रभावी दर पाएं।", keywords: ["बिक्री कमीशन कैलकुलेटर", "कमीशन कैलकुलेटर", "कमीशन दर", "मूल वेतन प्लस कमीशन"], ...io("बिक्री राशि", "कमीशन दर", "मूल वेतन (वैकल्पिक)", "कमीशन", "कुल भुगतान", "प्रभावी दर") },
};

export default i18n;
