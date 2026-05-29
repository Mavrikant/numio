import type { CalculatorI18n } from "@/types/i18n";

const io = (r: string, y72: string, y70: string, y69: string, ex: string) => ({
  inputs: { rate: { label: r } },
  outputs: { years72: { label: y72 }, years70: { label: y70 }, years69: { label: y69 }, exactYears: { label: ex } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Rule of 72 Calculator", short: "Estimate how many years it takes an investment to double.",
    description: "Free Rule of 72 calculator. Enter an annual return to estimate how many years it takes your money to double, using the 72, 70 and 69.3 rules, alongside the mathematically exact doubling time.",
    keywords: ["rule of 72", "doubling time calculator", "investment doubling", "rule of 70", "how long to double money"],
    ...io("Annual return rate", "Doubling time (÷72)", "Doubling time (÷70)", "Doubling time (÷69.3)", "Exact doubling time"),
    faq: [
      { q: "How does the Rule of 72 work?", a: "Divide 72 by the annual percentage return to estimate the years to double. At 8%, money doubles in about 72/8 = 9 years." },
      { q: "When should I use 70 or 69.3 instead?", a: "72 is easiest for mental math and is most accurate around 6–10%. The 70 and 69.3 variants are closer for lower rates and continuous compounding." },
    ],
  },
  pt: {
    title: "Calculadora da Regra de 72", short: "Veja em quantos anos o seu dinheiro duplica com uma dada taxa de juro.",
    description: "Calculadora gratuita da regra de 72. Estime rapidamente os anos necessários para duplicar um investimento dividindo 72 pela taxa anual.",
    keywords: ["regra de 72", "duplicar dinheiro", "tempo duplicação", "investimento composto", "regra investimento"],
    ...io("Annual return rate", "Doubling time (÷72)", "Doubling time (÷70)", "Doubling time (÷69.3)", "Exact doubling time"),
    faq: [
      { q: "How does the Rule of 72 work?", a: "Divide 72 by the annual percentage return to estimate the years to double. At 8%, money doubles in about 72/8 = 9 years." },
      { q: "When should I use 70 or 69.3 instead?", a: "72 is easiest for mental math and is most accurate around 6–10%. The 70 and 69.3 variants are closer for lower rates and continuous compounding." },
    ],
  },
  id: {
    title: "Kalkulator Aturan 72", short: "Lihat berapa tahun uang Anda menggandakan diri dengan suku bunga tertentu.",
    description: "Kalkulator aturan 72 gratis. Perkirakan dengan cepat tahun yang diperlukan untuk menggandakan investasi dengan membagi 72 dengan tingkat tahunan.",
    keywords: ["aturan 72", "gandakan uang", "waktu penggandaan", "investasi majemuk", "aturan investasi"],
    ...io("Annual return rate", "Doubling time (÷72)", "Doubling time (÷70)", "Doubling time (÷69.3)", "Exact doubling time"),
    faq: [
      { q: "How does the Rule of 72 work?", a: "Divide 72 by the annual percentage return to estimate the years to double. At 8%, money doubles in about 72/8 = 9 years." },
      { q: "When should I use 70 or 69.3 instead?", a: "72 is easiest for mental math and is most accurate around 6–10%. The 70 and 69.3 variants are closer for lower rates and continuous compounding." },
    ],
  },

  tr: {
    title: "72 Kuralı Hesaplayıcı", short: "Bir yatırımın kaç yılda ikiye katlanacağını tahmin edin.",
    description: "Ücretsiz 72 Kuralı hesaplayıcı. Yıllık getiriyi girerek paranızın kaç yılda ikiye katlanacağını 72, 70 ve 69,3 kurallarıyla, ayrıca matematiksel olarak tam katlanma süresiyle birlikte tahmin edin.",
    keywords: ["72 kuralı", "ikiye katlanma süresi", "yatırım katlanması", "70 kuralı", "para kaç yılda ikiye katlanır"],
    ...io("Yıllık getiri oranı", "Katlanma süresi (÷72)", "Katlanma süresi (÷70)", "Katlanma süresi (÷69,3)", "Tam katlanma süresi"),
    faq: [
      { q: "72 Kuralı nasıl çalışır?", a: "İkiye katlanma yılını tahmin etmek için 72'yi yıllık yüzde getiriye bölün. %8'de para yaklaşık 72/8 = 9 yılda ikiye katlanır." },
      { q: "Ne zaman 70 veya 69,3 kullanmalıyım?", a: "72 zihinsel hesap için en kolaydır ve %6–10 civarında en doğrudur. 70 ve 69,3 daha düşük oranlar ve sürekli bileşik için daha yakındır." },
    ],
  },
  de: { title: "72er-Regel-Rechner", short: "Schätzen Sie, in wie vielen Jahren sich eine Investition verdoppelt.", description: "Kostenloser 72er-Regel-Rechner. Geben Sie eine jährliche Rendite ein, um zu schätzen, in wie vielen Jahren sich Ihr Geld verdoppelt — mit den Regeln 72, 70 und 69,3 sowie der exakten Verdopplungszeit.", keywords: ["72er regel", "verdopplungszeit", "investition verdoppeln", "70er regel", "wie lange geld verdoppeln"], ...io("Jährliche Rendite", "Verdopplung (÷72)", "Verdopplung (÷70)", "Verdopplung (÷69,3)", "Exakte Verdopplungszeit") },
  fr: { title: "Calculateur Règle de 72", short: "Estimez en combien d'années un investissement double.", description: "Calculateur de la règle de 72 gratuit. Saisissez un rendement annuel pour estimer en combien d'années votre argent double, avec les règles 72, 70 et 69,3, ainsi que le temps de doublement exact.", keywords: ["règle de 72", "temps de doublement", "doublement d'investissement", "règle de 70", "doubler son argent"], ...io("Rendement annuel", "Doublement (÷72)", "Doublement (÷70)", "Doublement (÷69,3)", "Temps de doublement exact") },
  es: { title: "Calculadora de la Regla del 72", short: "Estima en cuántos años se duplica una inversión.", description: "Calculadora de la regla del 72 gratuita. Introduce un rendimiento anual para estimar en cuántos años se duplica tu dinero, con las reglas 72, 70 y 69,3, junto al tiempo de duplicación exacto.", keywords: ["regla del 72", "tiempo de duplicación", "duplicar inversión", "regla del 70", "duplicar el dinero"], ...io("Rendimiento anual", "Duplicación (÷72)", "Duplicación (÷70)", "Duplicación (÷69,3)", "Tiempo de duplicación exacto") },
  it: { title: "Calcolatore Regola del 72", short: "Stima in quanti anni un investimento raddoppia.", description: "Calcolatore della regola del 72 gratuito. Inserisci un rendimento annuo per stimare in quanti anni il tuo denaro raddoppia, con le regole 72, 70 e 69,3, oltre al tempo di raddoppio esatto.", keywords: ["regola del 72", "tempo di raddoppio", "raddoppio investimento", "regola del 70", "raddoppiare i soldi"], ...io("Rendimento annuo", "Raddoppio (÷72)", "Raddoppio (÷70)", "Raddoppio (÷69,3)", "Tempo di raddoppio esatto") },
  ar: { title: "حاسبة قاعدة 72", short: "قدّر عدد السنوات اللازمة لتضاعف الاستثمار.", description: "حاسبة قاعدة 72 مجانية. أدخل العائد السنوي لتقدير عدد السنوات اللازمة لتضاعف أموالك، باستخدام قواعد 72 و70 و69.3، إلى جانب زمن التضاعف الدقيق رياضيًا.", keywords: ["قاعدة 72", "زمن التضاعف", "تضاعف الاستثمار", "قاعدة 70", "كم سنة لتضاعف المال"], ...io("معدل العائد السنوي", "التضاعف (÷72)", "التضاعف (÷70)", "التضاعف (÷69.3)", "زمن التضاعف الدقيق") },
  ru: { title: "Калькулятор Правила 72", short: "Оцените, за сколько лет удвоится инвестиция.", description: "Бесплатный калькулятор правила 72. Введите годовую доходность, чтобы оценить, за сколько лет удвоятся ваши деньги, по правилам 72, 70 и 69,3, а также точное время удвоения.", keywords: ["правило 72", "время удвоения", "удвоение инвестиций", "правило 70", "за сколько удвоить деньги"], ...io("Годовая доходность", "Удвоение (÷72)", "Удвоение (÷70)", "Удвоение (÷69,3)", "Точное время удвоения") },
  zh: { title: "72法则计算器", short: "估算投资翻倍需要多少年。", description: "免费的 72 法则计算器。输入年回报率，使用 72、70 和 69.3 法则估算资金翻倍所需年数，并给出数学上精确的翻倍时间。", keywords: ["72法则", "翻倍时间", "投资翻倍", "70法则", "资金多久翻倍"], ...io("年回报率", "翻倍时间 (÷72)", "翻倍时间 (÷70)", "翻倍时间 (÷69.3)", "精确翻倍时间") },
  ja: { title: "72の法則 計算機", short: "投資が2倍になるまでの年数を推定します。", description: "無料の72の法則計算機。年利回りを入力すると、72・70・69.3 の法則でお金が2倍になる年数を推定し、数学的に正確な倍化時間も表示します。", keywords: ["72の法則", "倍化時間", "投資 倍増", "70の法則", "お金 2倍 年数"], ...io("年利回り", "倍化時間 (÷72)", "倍化時間 (÷70)", "倍化時間 (÷69.3)", "正確な倍化時間") },
  ko: { title: "72의 법칙 계산기", short: "투자가 두 배가 되는 데 걸리는 연수를 추정합니다.", description: "무료 72의 법칙 계산기. 연수익률을 입력하면 72, 70, 69.3 법칙으로 돈이 두 배가 되는 연수를 추정하고 수학적으로 정확한 배가 시간도 제공합니다.", keywords: ["72의 법칙", "배가 시간", "투자 두 배", "70의 법칙", "돈 두 배 연수"], ...io("연수익률", "배가 시간 (÷72)", "배가 시간 (÷70)", "배가 시간 (÷69.3)", "정확한 배가 시간") },
  hi: { title: "72 का नियम कैलकुलेटर", short: "अनुमान लगाएं कि निवेश दोगुना होने में कितने वर्ष लगते हैं।", description: "मुफ्त 72 का नियम कैलकुलेटर। वार्षिक रिटर्न दर्ज करें और 72, 70 तथा 69.3 नियमों से अनुमान लगाएं कि आपका पैसा कितने वर्षों में दोगुना होगा, साथ ही गणितीय रूप से सटीक दोगुना होने का समय।", keywords: ["72 का नियम", "दोगुना होने का समय", "निवेश दोगुना", "70 का नियम", "पैसा कब दोगुना"], ...io("वार्षिक रिटर्न दर", "दोगुना (÷72)", "दोगुना (÷70)", "दोगुना (÷69.3)", "सटीक दोगुना समय") },
};

export default i18n;
