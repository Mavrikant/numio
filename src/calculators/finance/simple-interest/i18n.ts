import type { CalculatorI18n } from "@/types/i18n";

const tu = (y: string, mo: string, d: string) => ({ years: y, months: mo, days: d });

const i18n: CalculatorI18n = {
  en: {
    title: "Simple Interest Calculator",
    short: "Calculate interest earned or owed using the simple interest formula I = P·r·t.",
    description:
      "Free simple interest calculator. Enter a principal, annual rate and time period to get the interest and the total amount, using I = P·r·t. Unlike compound interest, simple interest accrues only on the original principal.",
    keywords: ["simple interest calculator", "simple interest formula", "I=Prt", "principal interest", "interest calculator", "loan interest"],
    inputs: {
      principal: { label: "Principal amount", help: "The original sum invested or borrowed." },
      annualRatePct: { label: "Annual interest rate (%)", help: "Yearly rate as a percentage." },
      timeValue: { label: "Time period", help: "Length of the investment or loan." },
      timeUnit: { label: "Time unit" },
    },
    outputs: {
      interest: { label: "Interest", help: "Total simple interest over the period." },
      totalAmount: { label: "Total amount", help: "Principal plus interest." },
      years: { label: "Time in years", help: "Time period converted to years." },
    },
    options: { timeUnit: tu("Years", "Months", "Days") },
    errors: { nonPositive: "Principal and time must be greater than zero." },
    faq: [
      { q: "What is simple interest?", a: "Simple interest is calculated only on the original principal, using I = P·r·t. It does not earn interest on previously earned interest, which is what makes it 'simple' compared with compound interest." },
      { q: "How is simple interest different from compound interest?", a: "Simple interest grows linearly — the same amount each period. Compound interest grows faster because each period's interest is added to the balance and itself earns interest. Over long periods the difference is large." },
      { q: "When is simple interest used?", a: "It is common for short-term loans, some car loans, and certain bonds and Treasury instruments. Most savings accounts and mortgages use compound interest instead." },
    ],
  },
  nl: {
    title: "Enkelvoudige Rente Calculator",
    short: "Bereken interest earned or owed using the simple interest formula I = P·r·t.",
    description:
      "Gratis simple interest calculator. Enter a principal, annual rate and time period to get the interest and the total amount, using I = P·r·t. Unlike compound interest, simple interest accrues only on the original principal.",
    keywords: ["simple interest calculator", "simple interest formula", "I=Prt", "principal interest", "interest calculator", "loan interest"],
    inputs: {
      principal: { label: "Principal amount", help: "The original sum invested or borrowed." },
      annualRatePct: { label: "Annual interest rate (%)", help: "Yearly rate as a percentage." },
      timeValue: { label: "Time period", help: "Lengte of the investment or loan." },
      timeUnit: { label: "Time unit" },
    },
    outputs: {
      interest: { label: "Interest", help: "Total simple interest over the period." },
      totalAmount: { label: "Total amount", help: "Principal plus interest." },
      years: { label: "Time in jaren", help: "Time period converteered to jaren." },
    },
    options: { timeUnit: tu("Years", "Months", "Days") },
    errors: { nonPositive: "Principal and time must be greater than zero." },
    faq: [
      { q: "What is simple interest?", a: "Simple interest is berekend only on the original principal, using I = P·r·t. It does not earn interest on previously earned interest, which is what makes it 'simple' compared with compound interest." },
      { q: "How is simple interest different from compound interest?", a: "Simple interest grows linearly — the same amount each period. Compound interest grows faster because each period's interest is added to the balance and itself earns interest. Over long periods the difference is large." },
      { q: "When is simple interest used?", a: "It is common for short-term loans, some car loans, and certain bonds and Treasury instruments. Most savings accounts and mortgages use compound interest instead." },
    ],
  },

  pl: {
    title: "Procent Prosty Kalkulator",
    short: "Oblicz interest earned or owed using the simple interest formula I = P·r·t.",
    description:
      "Darmowy simple interest kalkulator. Enter a principal, annual rate and time period to get the interest and the total amount, using I = P·r·t. Unlike compound interest, simple interest accrues only on the original principal.",
    keywords: ["simple interest kalkulator", "simple interest formula", "I=Prt", "principal interest", "interest kalkulator", "loan interest"],
    inputs: {
      principal: { label: "Principal amount", help: "The original sum invested or borrowed." },
      annualRatePct: { label: "Annual interest rate (%)", help: "Yearly rate as a percentage." },
      timeValue: { label: "Time period", help: "Długość of the investment or loan." },
      timeUnit: { label: "Time unit" },
    },
    outputs: {
      interest: { label: "Interest", help: "Total simple interest over the period." },
      totalAmount: { label: "Total amount", help: "Principal plus interest." },
      years: { label: "Time in lat", help: "Time period konwertujed to lat." },
    },
    options: { timeUnit: tu("Years", "Months", "Days") },
    errors: { nonPositive: "Principal and time must be greater than zero." },
    faq: [
      { q: "What is simple interest?", a: "Simple interest is obliczd only on the original principal, using I = P·r·t. It does not earn interest on previously earned interest, which is what makes it 'simple' compared with compound interest." },
      { q: "How is simple interest different from compound interest?", a: "Simple interest grows linearly — the same amount each period. Compound interest grows faster because each period's interest is added to the balance and itself earns interest. Over long periods the difference is large." },
      { q: "When is simple interest used?", a: "It is common for short-term loans, some car loans, and certain bonds and Treasury instruments. Most savings accounts and mortgages use compound interest instead." },
    ],
  },
  pt: {
    title: "Calculadora de Juros Simples",
    short: "Calcule os juros simples sobre um capital ao longo de um prazo.",
    description:
      "Calculadora gratuita de juros simples. Introduza o capital, taxa de juro anual e prazo para obter os juros pagos e o montante final.",
    keywords: ["juros simples", "cálculo juros", "empréstimo simples", "taxa de juro", "interesse simples"],
    inputs: {
      principal: { label: "Principal amount", help: "The original sum invested or borrowed." },
      annualRatePct: { label: "Annual interest rate (%)", help: "Yearly rate as a percentage." },
      timeValue: { label: "Time period", help: "Length of the investment or loan." },
      timeUnit: { label: "Time unit" },
    },
    outputs: {
      interest: { label: "Interest", help: "Total simple interest over the period." },
      totalAmount: { label: "Total amount", help: "Principal plus interest." },
      years: { label: "Time in years", help: "Time period converted to years." },
    },
    options: { timeUnit: tu("Years", "Months", "Days") },
    errors: { nonPositive: "Principal and time must be greater than zero." },
    faq: [
      { q: "What is simple interest?", a: "Simple interest is calculated only on the original principal, using I = P·r·t. It does not earn interest on previously earned interest, which is what makes it 'simple' compared with compound interest." },
      { q: "How is simple interest different from compound interest?", a: "Simple interest grows linearly — the same amount each period. Compound interest grows faster because each period's interest is added to the balance and itself earns interest. Over long periods the difference is large." },
      { q: "When is simple interest used?", a: "It is common for short-term loans, some car loans, and certain bonds and Treasury instruments. Most savings accounts and mortgages use compound interest instead." },
    ],
  },
  id: {
    title: "Kalkulator Bunga Sederhana",
    short: "Hitung bunga sederhana atas pokok selama jangka waktu tertentu.",
    description:
      "Kalkulator bunga sederhana gratis. Masukkan pokok, suku bunga tahunan, dan jangka waktu untuk mendapatkan bunga yang dibayarkan dan jumlah akhir.",
    keywords: ["bunga sederhana", "kalkulator bunga", "pinjaman sederhana", "suku bunga", "perhitungan bunga"],
    inputs: {
      principal: { label: "Principal amount", help: "The original sum invested or borrowed." },
      annualRatePct: { label: "Annual interest rate (%)", help: "Yearly rate as a percentage." },
      timeValue: { label: "Time period", help: "Length of the investment or loan." },
      timeUnit: { label: "Time unit" },
    },
    outputs: {
      interest: { label: "Interest", help: "Total simple interest over the period." },
      totalAmount: { label: "Total amount", help: "Principal plus interest." },
      years: { label: "Time in years", help: "Time period converted to years." },
    },
    options: { timeUnit: tu("Years", "Months", "Days") },
    errors: { nonPositive: "Principal and time must be greater than zero." },
    faq: [
      { q: "What is simple interest?", a: "Simple interest is calculated only on the original principal, using I = P·r·t. It does not earn interest on previously earned interest, which is what makes it 'simple' compared with compound interest." },
      { q: "How is simple interest different from compound interest?", a: "Simple interest grows linearly — the same amount each period. Compound interest grows faster because each period's interest is added to the balance and itself earns interest. Over long periods the difference is large." },
      { q: "When is simple interest used?", a: "It is common for short-term loans, some car loans, and certain bonds and Treasury instruments. Most savings accounts and mortgages use compound interest instead." },
    ],
  },

  tr: {
    title: "Basit Faiz Hesaplayıcı",
    short: "I = P·r·t basit faiz formülüyle kazanılan veya ödenen faizi hesaplayın.",
    description:
      "Ücretsiz basit faiz hesaplayıcı. Anapara, yıllık oran ve süre girerek I = P·r·t ile faizi ve toplam tutarı bulun. Bileşik faizin aksine, basit faiz yalnızca orijinal anapara üzerinden işler.",
    keywords: ["basit faiz hesaplama", "basit faiz formülü", "I=Prt", "anapara faizi", "faiz hesaplama", "kredi faizi"],
    inputs: {
      principal: { label: "Anapara tutarı", help: "Yatırılan veya borç alınan orijinal tutar." },
      annualRatePct: { label: "Yıllık faiz oranı (%)", help: "Yıllık oran, yüzde olarak." },
      timeValue: { label: "Süre", help: "Yatırımın veya kredinin süresi." },
      timeUnit: { label: "Zaman birimi" },
    },
    outputs: {
      interest: { label: "Faiz", help: "Süre boyunca toplam basit faiz." },
      totalAmount: { label: "Toplam tutar", help: "Anapara artı faiz." },
      years: { label: "Yıl cinsinden süre", help: "Süre yıla çevrildi." },
    },
    options: { timeUnit: tu("Yıl", "Ay", "Gün") },
    errors: { nonPositive: "Anapara ve süre sıfırdan büyük olmalıdır." },
    faq: [
      { q: "Basit faiz nedir?", a: "Basit faiz, yalnızca orijinal anapara üzerinden I = P·r·t ile hesaplanır. Daha önce kazanılan faiz üzerinden faiz işletmez; bu da onu bileşik faize göre 'basit' yapar." },
      { q: "Basit faiz ile bileşik faiz arasındaki fark nedir?", a: "Basit faiz doğrusal büyür — her dönem aynı miktar. Bileşik faiz daha hızlı büyür çünkü her dönemin faizi bakiyeye eklenir ve kendisi de faiz kazanır. Uzun vadede fark büyüktür." },
      { q: "Basit faiz ne zaman kullanılır?", a: "Kısa vadeli krediler, bazı taşıt kredileri ve belirli tahvil ile Hazine araçları için yaygındır. Çoğu mevduat hesabı ve konut kredisi bunun yerine bileşik faiz kullanır." },
    ],
  },
  de: {
    title: "Zinsrechner (einfache Zinsen)",
    short: "Berechnen Sie Zinsen mit der Formel für einfache Zinsen I = P·r·t.",
    description: "Kostenloser Rechner für einfache Zinsen. Geben Sie Kapital, Jahreszins und Laufzeit ein, um Zinsen und Gesamtbetrag mit I = P·r·t zu erhalten.",
    keywords: ["einfache Zinsen", "Zinsrechner", "I=Prt", "Kapitalzins", "Zinsen berechnen"],
    inputs: {
      principal: { label: "Kapital" },
      annualRatePct: { label: "Jährlicher Zinssatz (%)" },
      timeValue: { label: "Laufzeit" },
      timeUnit: { label: "Zeiteinheit" },
    },
    outputs: {
      interest: { label: "Zinsen" },
      totalAmount: { label: "Gesamtbetrag" },
      years: { label: "Zeit in Jahren" },
    },
    options: { timeUnit: tu("Jahre", "Monate", "Tage") },
  },
  fr: {
    title: "Calculateur d'Intérêts Simples",
    short: "Calculez les intérêts avec la formule des intérêts simples I = P·r·t.",
    description: "Calculateur d'intérêts simples gratuit. Saisissez un capital, un taux annuel et une durée pour obtenir les intérêts et le montant total avec I = P·r·t.",
    keywords: ["intérêts simples", "calculateur d'intérêts", "I=Prt", "intérêt du capital", "calcul d'intérêts"],
    inputs: {
      principal: { label: "Capital" },
      annualRatePct: { label: "Taux d'intérêt annuel (%)" },
      timeValue: { label: "Durée" },
      timeUnit: { label: "Unité de temps" },
    },
    outputs: {
      interest: { label: "Intérêts" },
      totalAmount: { label: "Montant total" },
      years: { label: "Durée en années" },
    },
    options: { timeUnit: tu("Années", "Mois", "Jours") },
  },
  es: {
    title: "Calculadora de Interés Simple",
    short: "Calcula los intereses con la fórmula del interés simple I = P·r·t.",
    description: "Calculadora de interés simple gratuita. Introduce un capital, una tasa anual y un periodo para obtener los intereses y el monto total con I = P·r·t.",
    keywords: ["interés simple", "calculadora de interés", "I=Prt", "interés del capital", "calcular intereses"],
    inputs: {
      principal: { label: "Capital" },
      annualRatePct: { label: "Tasa de interés anual (%)" },
      timeValue: { label: "Periodo" },
      timeUnit: { label: "Unidad de tiempo" },
    },
    outputs: {
      interest: { label: "Interés" },
      totalAmount: { label: "Monto total" },
      years: { label: "Tiempo en años" },
    },
    options: { timeUnit: tu("Años", "Meses", "Días") },
  },
  it: {
    title: "Calcolatore di Interesse Semplice",
    short: "Calcola gli interessi con la formula dell'interesse semplice I = P·r·t.",
    description: "Calcolatore di interesse semplice gratuito. Inserisci capitale, tasso annuo e periodo per ottenere gli interessi e l'importo totale con I = P·r·t.",
    keywords: ["interesse semplice", "calcolatore di interessi", "I=Prt", "interesse sul capitale", "calcolo interessi"],
    inputs: {
      principal: { label: "Capitale" },
      annualRatePct: { label: "Tasso di interesse annuo (%)" },
      timeValue: { label: "Periodo" },
      timeUnit: { label: "Unità di tempo" },
    },
    outputs: {
      interest: { label: "Interesse" },
      totalAmount: { label: "Importo totale" },
      years: { label: "Tempo in anni" },
    },
    options: { timeUnit: tu("Anni", "Mesi", "Giorni") },
  },
  ar: {
    title: "حاسبة الفائدة البسيطة",
    short: "احسب الفائدة باستخدام صيغة الفائدة البسيطة I = P·r·t.",
    description: "حاسبة فائدة بسيطة مجانية. أدخل المبلغ الأساسي والمعدل السنوي والمدة للحصول على الفائدة والمبلغ الإجمالي باستخدام I = P·r·t.",
    keywords: ["الفائدة البسيطة", "حاسبة الفائدة", "I=Prt", "فائدة رأس المال", "حساب الفائدة"],
    inputs: {
      principal: { label: "المبلغ الأساسي" },
      annualRatePct: { label: "معدل الفائدة السنوي (%)" },
      timeValue: { label: "المدة" },
      timeUnit: { label: "وحدة الزمن" },
    },
    outputs: {
      interest: { label: "الفائدة" },
      totalAmount: { label: "المبلغ الإجمالي" },
      years: { label: "المدة بالسنوات" },
    },
    options: { timeUnit: tu("سنوات", "أشهر", "أيام") },
  },
  ru: {
    title: "Калькулятор Простых Процентов",
    short: "Рассчитайте проценты по формуле простых процентов I = P·r·t.",
    description: "Бесплатный калькулятор простых процентов. Введите основную сумму, годовую ставку и срок, чтобы получить проценты и итоговую сумму по формуле I = P·r·t.",
    keywords: ["простые проценты", "калькулятор процентов", "I=Prt", "проценты на капитал", "расчёт процентов"],
    inputs: {
      principal: { label: "Основная сумма" },
      annualRatePct: { label: "Годовая процентная ставка (%)" },
      timeValue: { label: "Срок" },
      timeUnit: { label: "Единица времени" },
    },
    outputs: {
      interest: { label: "Проценты" },
      totalAmount: { label: "Итоговая сумма" },
      years: { label: "Срок в годах" },
    },
    options: { timeUnit: tu("Годы", "Месяцы", "Дни") },
  },
  zh: {
    title: "单利计算器",
    short: "使用单利公式 I = P·r·t 计算利息。",
    description: "免费的单利计算器。输入本金、年利率和期限，使用 I = P·r·t 得到利息和总额。与复利不同，单利只按原始本金计息。",
    keywords: ["单利计算器", "单利公式", "I=Prt", "本金利息", "利息计算"],
    inputs: {
      principal: { label: "本金" },
      annualRatePct: { label: "年利率 (%)" },
      timeValue: { label: "期限" },
      timeUnit: { label: "时间单位" },
    },
    outputs: {
      interest: { label: "利息" },
      totalAmount: { label: "总额" },
      years: { label: "以年计的时间" },
    },
    options: { timeUnit: tu("年", "月", "天") },
  },
  ja: {
    title: "単利計算機",
    short: "単利の公式 I = P·r·t を使って利息を計算します。",
    description: "無料の単利計算機。元金・年利・期間を入力すると、I = P·r·t を用いて利息と合計額が得られます。複利と違い、単利は元金にのみ付きます。",
    keywords: ["単利計算", "単利の公式", "I=Prt", "元金利息", "利息計算"],
    inputs: {
      principal: { label: "元金" },
      annualRatePct: { label: "年利 (%)" },
      timeValue: { label: "期間" },
      timeUnit: { label: "時間の単位" },
    },
    outputs: {
      interest: { label: "利息" },
      totalAmount: { label: "合計額" },
      years: { label: "年単位の期間" },
    },
    options: { timeUnit: tu("年", "月", "日") },
  },
  ko: {
    title: "단리 계산기",
    short: "단리 공식 I = P·r·t로 이자를 계산합니다.",
    description: "무료 단리 계산기. 원금, 연이율, 기간을 입력하면 I = P·r·t로 이자와 총액을 구합니다. 복리와 달리 단리는 원금에만 붙습니다.",
    keywords: ["단리 계산기", "단리 공식", "I=Prt", "원금 이자", "이자 계산"],
    inputs: {
      principal: { label: "원금" },
      annualRatePct: { label: "연이율 (%)" },
      timeValue: { label: "기간" },
      timeUnit: { label: "시간 단위" },
    },
    outputs: {
      interest: { label: "이자" },
      totalAmount: { label: "총액" },
      years: { label: "연 단위 기간" },
    },
    options: { timeUnit: tu("년", "개월", "일") },
  },
  hi: {
    title: "साधारण ब्याज कैलकुलेटर",
    short: "साधारण ब्याज सूत्र I = P·r·t का उपयोग करके ब्याज की गणना करें।",
    description: "मुफ्त साधारण ब्याज कैलकुलेटर। मूलधन, वार्षिक दर और अवधि दर्ज करें और I = P·r·t का उपयोग करके ब्याज तथा कुल राशि पाएं।",
    keywords: ["साधारण ब्याज कैलकुलेटर", "साधारण ब्याज सूत्र", "I=Prt", "मूलधन ब्याज", "ब्याज गणना"],
    inputs: {
      principal: { label: "मूलधन राशि" },
      annualRatePct: { label: "वार्षिक ब्याज दर (%)" },
      timeValue: { label: "अवधि" },
      timeUnit: { label: "समय इकाई" },
    },
    outputs: {
      interest: { label: "ब्याज" },
      totalAmount: { label: "कुल राशि" },
      years: { label: "वर्षों में अवधि" },
    },
    options: { timeUnit: tu("वर्ष", "महीने", "दिन") },
  },
};

export default i18n;
