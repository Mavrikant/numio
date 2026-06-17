import type { CalculatorI18n } from "@/types/i18n";

const io = (m: string, r: string, c: string, apy: string, apr: string, diff: string, a2y: string, y2a: string, d: string, mo: string, q: string, s: string, an: string) => ({
  inputs: { mode: { label: m }, rate: { label: r }, compounding: { label: c } },
  outputs: { apy: { label: apy }, apr: { label: apr }, difference: { label: diff } },
  options: {
    mode: { "apr-to-apy": a2y, "apy-to-apr": y2a },
    compounding: { daily: d, monthly: mo, quarterly: q, semiannual: s, annual: an },
  },
});

const i18n: CalculatorI18n = {
  en: {
    title: "APR ⇄ APY Converter", short: "Convert between nominal APR and effective APY for any compounding frequency.",
    description: "Free APR to APY converter. Convert a nominal annual rate (APR) to the effective annual yield (APY/EAR) or back, for daily, monthly, quarterly, semi-annual or annual compounding. See the difference compounding makes.",
    keywords: ["apr to apy", "apy apr converter", "effective annual rate", "ear calculator", "nominal vs effective rate"],
    ...io("Conversion", "Rate", "Compounding", "APY (effective)", "APR (nominal)", "Difference", "APR → APY", "APY → APR", "Daily", "Monthly", "Quarterly", "Semi-annual", "Annual"),
    faq: [
      { q: "What's the difference between APR and APY?", a: "APR is the nominal annual rate ignoring compounding; APY (or EAR) includes it. A 12% APR compounded monthly is about 12.683% APY." },
      { q: "Why does it matter?", a: "Loans often quote APR (lower-looking) while savings quote APY (higher-looking). Converting to the same basis lets you compare offers fairly." },
    ],
  },
  nl: {
    title: "APR ⇄ APY Converteerer", short: "Converteer between nominal APR and effective APY for any compounding frequency.",
    description: "Gratis APR to APY converteerer. Converteer a nominal annual rate (APR) to the effective annual yield (APY/EAR) or back, for daily, monthly, quarterly, semi-annual or annual compounding. See the difference compounding makes.",
    keywords: ["apr to apy", "apy apr converteerer", "effective annual rate", "ear calculator", "nominal vs effective rate"],
    ...io("Conversion", "Rate", "Compounding", "APY (effective)", "APR (nominal)", "Verschilerence", "APR → APY", "APY → APR", "Daily", "Monthly", "Quarterly", "Semi-annual", "Annual"),
    faq: [
      { q: "What's the difference between APR and APY?", a: "APR is the nominal annual rate ignoring compounding; APY (or EAR) includes it. A 12% APR compounded monthly is about 12.683% APY." },
      { q: "Why does it matter?", a: "Lenings often quote APR (lower-looking) while savings quote APY (higher-looking). Converteering to the same basis lets you compare offers fairly." },
    ],
  },

  pl: {
    title: "APR ⇄ APY Konwerter", short: "Konwertuj between nominal APR and effective APY for any compounding frequency.",
    description: "Darmowy APR to APY konwerter. Konwertuj a nominal annual rate (APR) to the effective annual yield (APY/EAR) or back, for daily, monthly, quarterly, semi-annual or annual compounding. See the difference compounding makes.",
    keywords: ["apr to apy", "apy apr konwerter", "effective annual rate", "ear kalkulator", "nominal vs effective rate"],
    ...io("Conversion", "Rate", "Compounding", "APY (effective)", "APR (nominal)", "Różnicaerence", "APR → APY", "APY → APR", "Daily", "Monthly", "Quarterly", "Semi-annual", "Annual"),
    faq: [
      { q: "What's the difference between APR and APY?", a: "APR is the nominal annual rate ignoring compounding; APY (or EAR) includes it. A 12% APR compounded monthly is about 12.683% APY." },
      { q: "Why does it matter?", a: "Pożyczkas often quote APR (lower-looking) while savings quote APY (higher-looking). Konwertujing to the same basis lets you compare offers fairly." },
    ],
  },
  pt: {
    title: "Conversor APY/APR", short: "Converta entre taxa anual nominal (APR) e taxa anual efetiva (APY).",
    description: "Conversor gratuito entre APR e APY. APY inclui o efeito da capitalização — útil para comparar contas poupança e investimentos.",
    keywords: ["APR", "APY", "TAEG", "TANB", "taxa nominal efetiva"],
    ...io("Conversion", "Rate", "Compounding", "APY (effective)", "APR (nominal)", "Difference", "APR → APY", "APY → APR", "Daily", "Monthly", "Quarterly", "Semi-annual", "Annual"),
    faq: [
      { q: "What's the difference between APR and APY?", a: "APR is the nominal annual rate ignoring compounding; APY (or EAR) includes it. A 12% APR compounded monthly is about 12.683% APY." },
      { q: "Why does it matter?", a: "Loans often quote APR (lower-looking) while savings quote APY (higher-looking). Converting to the same basis lets you compare offers fairly." },
    ],
  },
  id: {
    title: "Konverter APY/APR", short: "Konversikan antara suku bunga nominal tahunan (APR) dan suku bunga efektif tahunan (APY).",
    description: "Konverter APR ke APY gratis. APY menyertakan efek bunga berbunga — berguna untuk membandingkan tabungan dan investasi.",
    keywords: ["APR", "APY", "bunga nominal", "bunga efektif", "kalkulator bunga"],
    ...io("Conversion", "Rate", "Compounding", "APY (effective)", "APR (nominal)", "Difference", "APR → APY", "APY → APR", "Daily", "Monthly", "Quarterly", "Semi-annual", "Annual"),
    faq: [
      { q: "What's the difference between APR and APY?", a: "APR is the nominal annual rate ignoring compounding; APY (or EAR) includes it. A 12% APR compounded monthly is about 12.683% APY." },
      { q: "Why does it matter?", a: "Loans often quote APR (lower-looking) while savings quote APY (higher-looking). Converting to the same basis lets you compare offers fairly." },
    ],
  },

  tr: {
    title: "APR ⇄ APY Dönüştürücü", short: "Herhangi bir bileşik sıklığı için nominal APR ile efektif APY arasında dönüştürün.",
    description: "Ücretsiz APR'den APY'ye dönüştürücü. Nominal yıllık oranı (APR) efektif yıllık getiriye (APY/EAR) veya geriye; günlük, aylık, üç aylık, altı aylık veya yıllık bileşik için çevirin. Bileşiğin yarattığı farkı görün.",
    keywords: ["apr apy", "apy apr dönüştürücü", "efektif yıllık oran", "ear hesaplama", "nominal efektif oran"],
    ...io("Dönüşüm", "Oran", "Bileşik", "APY (efektif)", "APR (nominal)", "Fark", "APR → APY", "APY → APR", "Günlük", "Aylık", "Üç aylık", "Altı aylık", "Yıllık"),
    faq: [
      { q: "APR ile APY arasındaki fark nedir?", a: "APR bileşiği yok sayan nominal yıllık orandır; APY (veya EAR) bileşiği içerir. Aylık bileşik %12 APR yaklaşık %12,683 APY'dir." },
      { q: "Neden önemli?", a: "Krediler genelde APR (daha düşük görünür), mevduatlar APY (daha yüksek görünür) verir. Aynı temele çevirmek teklifleri adil karşılaştırmanı sağlar." },
    ],
  },
  de: { title: "APR ⇄ APY Umrechner", short: "Zwischen nominalem APR und effektivem APY für jede Zinsperiode umrechnen.", description: "Kostenloser APR-zu-APY-Umrechner. Rechnen Sie den nominalen Jahreszins (APR) in den effektiven Jahresertrag (APY/EAR) um oder zurück, für tägliche, monatliche, vierteljährliche, halbjährliche oder jährliche Verzinsung.", keywords: ["apr zu apy", "apy apr umrechner", "effektiver jahreszins", "ear rechner", "nominal effektiv"], ...io("Umrechnung", "Zinssatz", "Verzinsung", "APY (effektiv)", "APR (nominal)", "Differenz", "APR → APY", "APY → APR", "Täglich", "Monatlich", "Vierteljährlich", "Halbjährlich", "Jährlich") },
  fr: { title: "Convertisseur TAEG ⇄ APY", short: "Convertissez entre taux nominal (APR) et rendement effectif (APY) selon la capitalisation.", description: "Convertisseur APR-APY gratuit. Convertissez un taux annuel nominal (APR) en rendement annuel effectif (APY/EAR) ou inversement, pour une capitalisation quotidienne, mensuelle, trimestrielle, semestrielle ou annuelle.", keywords: ["apr en apy", "convertisseur apy apr", "taux effectif annuel", "calculateur ear", "nominal vs effectif"], ...io("Conversion", "Taux", "Capitalisation", "APY (effectif)", "APR (nominal)", "Différence", "APR → APY", "APY → APR", "Quotidienne", "Mensuelle", "Trimestrielle", "Semestrielle", "Annuelle") },
  es: { title: "Conversor APR ⇄ APY", short: "Convierte entre tasa nominal (APR) y rendimiento efectivo (APY) según la capitalización.", description: "Conversor APR a APY gratuito. Convierte una tasa anual nominal (APR) al rendimiento anual efectivo (APY/EAR) o viceversa, para capitalización diaria, mensual, trimestral, semestral o anual.", keywords: ["apr a apy", "conversor apy apr", "tasa efectiva anual", "calculadora ear", "nominal vs efectiva"], ...io("Conversión", "Tasa", "Capitalización", "APY (efectiva)", "APR (nominal)", "Diferencia", "APR → APY", "APY → APR", "Diaria", "Mensual", "Trimestral", "Semestral", "Anual") },
  it: { title: "Convertitore TAN ⇄ APY", short: "Converti tra tasso nominale (APR) e rendimento effettivo (APY) per ogni capitalizzazione.", description: "Convertitore APR-APY gratuito. Converti un tasso annuo nominale (APR) nel rendimento annuo effettivo (APY/EAR) o viceversa, per capitalizzazione giornaliera, mensile, trimestrale, semestrale o annuale.", keywords: ["apr a apy", "convertitore apy apr", "tasso effettivo annuo", "calcolatore ear", "nominale vs effettivo"], ...io("Conversione", "Tasso", "Capitalizzazione", "APY (effettivo)", "APR (nominale)", "Differenza", "APR → APY", "APY → APR", "Giornaliera", "Mensile", "Trimestrale", "Semestrale", "Annuale") },
  ar: { title: "محوّل APR ⇄ APY", short: "حوّل بين المعدل الاسمي (APR) والعائد الفعلي (APY) لأي تردد مركب.", description: "محوّل APR إلى APY مجاني. حوّل المعدل السنوي الاسمي (APR) إلى العائد السنوي الفعلي (APY/EAR) أو العكس، للتركيب اليومي أو الشهري أو الفصلي أو نصف السنوي أو السنوي.", keywords: ["apr إلى apy", "محول apy apr", "المعدل الفعلي السنوي", "حاسبة ear", "اسمي مقابل فعلي"], ...io("التحويل", "المعدل", "التركيب", "APY (فعلي)", "APR (اسمي)", "الفرق", "APR → APY", "APY → APR", "يومي", "شهري", "فصلي", "نصف سنوي", "سنوي") },
  ru: { title: "Конвертер APR ⇄ APY", short: "Конвертируйте номинальную ставку (APR) и эффективную доходность (APY) при любом начислении.", description: "Бесплатный конвертер APR в APY. Преобразуйте номинальную годовую ставку (APR) в эффективную годовую доходность (APY/EAR) или обратно, для ежедневного, ежемесячного, ежеквартального, полугодового или годового начисления.", keywords: ["apr в apy", "конвертер apy apr", "эффективная годовая ставка", "калькулятор ear", "номинальная и эффективная"], ...io("Преобразование", "Ставка", "Начисление", "APY (эффект.)", "APR (номин.)", "Разница", "APR → APY", "APY → APR", "Ежедневно", "Ежемесячно", "Ежеквартально", "Полугодовое", "Годовое") },
  zh: { title: "APR ⇄ APY 转换器", short: "在名义年利率 (APR) 与有效年收益率 (APY) 之间按复利频率转换。", description: "免费的 APR 转 APY 转换器。将名义年利率 (APR) 转换为有效年收益率 (APY/EAR) 或反向，支持每日、每月、每季度、每半年或每年复利。查看复利带来的差异。", keywords: ["apr转apy", "apy apr转换器", "有效年利率", "ear计算器", "名义与有效利率"], ...io("转换", "利率", "复利频率", "APY（有效）", "APR（名义）", "差异", "APR → APY", "APY → APR", "每日", "每月", "每季度", "每半年", "每年") },
  ja: { title: "APR ⇄ APY 変換", short: "名目年率 (APR) と実効年利回り (APY) を複利頻度ごとに相互変換します。", description: "無料の APR ⇄ APY 変換ツール。名目年率 (APR) を実効年利回り (APY/EAR) に、またはその逆に、日次・月次・四半期・半年・年次の複利で変換します。複利の効果を確認できます。", keywords: ["apr apy 変換", "apy apr コンバーター", "実効年利率", "ear 計算機", "名目 実効 金利"], ...io("変換", "金利", "複利頻度", "APY（実効）", "APR（名目）", "差", "APR → APY", "APY → APR", "日次", "月次", "四半期", "半年", "年次") },
  ko: { title: "APR ⇄ APY 변환기", short: "복리 빈도별로 명목 연이율(APR)과 실효 연수익률(APY)을 변환합니다.", description: "무료 APR-APY 변환기. 명목 연이율(APR)을 실효 연수익률(APY/EAR)로, 또는 그 반대로 일별, 월별, 분기별, 반기별, 연별 복리로 변환합니다. 복리의 차이를 확인하세요.", keywords: ["apr를 apy로", "apy apr 변환기", "실효 연이율", "ear 계산기", "명목 실효 금리"], ...io("변환", "이율", "복리 빈도", "APY(실효)", "APR(명목)", "차이", "APR → APY", "APY → APR", "일별", "월별", "분기별", "반기별", "연별") },
  hi: { title: "APR ⇄ APY कन्वर्टर", short: "किसी भी चक्रवृद्धि आवृत्ति के लिए नाममात्र APR और प्रभावी APY के बीच बदलें।", description: "मुफ्त APR से APY कन्वर्टर। नाममात्र वार्षिक दर (APR) को प्रभावी वार्षिक प्रतिफल (APY/EAR) में या वापस बदलें — दैनिक, मासिक, त्रैमासिक, अर्धवार्षिक या वार्षिक चक्रवृद्धि के लिए।", keywords: ["apr से apy", "apy apr कन्वर्टर", "प्रभावी वार्षिक दर", "ear कैलकुलेटर", "नाममात्र बनाम प्रभावी"], ...io("रूपांतरण", "दर", "चक्रवृद्धि", "APY (प्रभावी)", "APR (नाममात्र)", "अंतर", "APR → APY", "APY → APR", "दैनिक", "मासिक", "त्रैमासिक", "अर्धवार्षिक", "वार्षिक") },
};

export default i18n;
