import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Capacitor Calculator",
    short: "Calculate capacitor charge, energy, reactance, and RC time constant.",
    description: "Free capacitor calculator. Enter capacitance, voltage, and frequency to calculate charge (Coulombs), energy (Joules), reactance (Ohms), and RC time constant.",
    keywords: ["capacitor", "capacitance", "charge", "energy", "reactance", "RC time constant", "electronics"],
    inputs: {
      capacitance: { label: "Capacitance", help: "Value in Farads (F). Use prefixes: μ=1e-6, n=1e-9, p=1e-12" },
      voltage: { label: "Voltage", help: "Voltage across capacitor in Volts" },
      frequency: { label: "Frequency", help: "AC frequency in Hz. Leave 0 for DC." },
    },
    outputs: {
      charge: { label: "Charge", help: "Charge stored in Coulombs (Q = CV)" },
      energy: { label: "Energy", help: "Energy stored in Joules (E = 0.5 * C * V²)" },
      reactance: { label: "Reactance", help: "Capacitive reactance in Ohms (Xc = 1/(2πfC))" },
      timeConstantFor1k: { label: "RC time constant (1kΩ)", help: "Time to charge to 63% with 1kΩ resistor" },
    },
    options: {},
    errors: {
      capacitancePositive: "Capacitance must be positive.",
      voltagePositive: "Voltage must be positive.",
      frequencyNonNegative: "Frequency must be non-negative.",
    },
    faq: [
      {
        q: "What is capacitance?",
        a: "Capacitance is the ability of a device (capacitor) to store electrical charge. It is measured in Farads (F). Common prefixes: μF (microfarad = 1e-6 F), nF (nanofarad = 1e-9 F), pF (picofarad = 1e-12 F).",
      },
      {
        q: "What is charge on a capacitor?",
        a: "Charge (Q) is the amount of electrical charge stored, measured in Coulombs (C). Formula: Q = C × V. A 1 μF capacitor at 10 V stores 10 μC of charge.",
      },
      {
        q: "What is capacitor energy?",
        a: "Energy (E) stored in a charged capacitor is measured in Joules. Formula: E = 0.5 × C × V². A 1 mF capacitor at 100 V stores 5 Joules.",
      },
      {
        q: "What is capacitive reactance?",
        a: "Reactance (Xc) is the opposition to AC current offered by a capacitor, measured in Ohms. Xc = 1/(2πfC). At higher frequencies or larger capacitances, reactance decreases.",
      },
      {
        q: "What is the RC time constant?",
        a: "The RC time constant (τ = R × C) is the time for a capacitor to charge to 63% of applied voltage through a resistor. Used in timing circuits and filters.",
      },
    ],
  },
  tr: {
    title: "Kapasitör Hesaplayıcısı",
    short: "Kapasitör yükü, enerjisi, reaktansı ve RC zaman sabitini hesaplayın.",
    description: "Ücretsiz kapasitör hesaplayıcısı. Kapasitans, gerilim ve frekansı girin. Yük (Coulomb), enerji (Joule), reaktans (Ohm) ve RC zaman sabitini hesaplayın.",
    keywords: ["kapasitör", "kapasitans", "yük", "enerji", "reaktans", "RC zaman sabiti", "elektronik"],
    inputs: {
      capacitance: { label: "Kapasitans", help: "Farad (F) cinsinden değer. Ön ekler: μ=1e-6, n=1e-9, p=1e-12" },
      voltage: { label: "Gerilim", help: "Kapasitör üzerindeki gerilim (Volt)" },
      frequency: { label: "Frekans", help: "AC frekansı (Hz). DC için 0 bırakın." },
    },
    outputs: {
      charge: { label: "Yük", help: "Depolanan yük (Coulomb cinsinden)" },
      energy: { label: "Enerji", help: "Depolanan enerji (Joule cinsinden)" },
      reactance: { label: "Reaktans", help: "Kapasitif reaktans (Ohm cinsinden)" },
      timeConstantFor1k: { label: "RC zaman sabiti (1kΩ)", help: "1kΩ dirençle %63'e şarj edilme süresi" },
    },
    options: {},
    errors: {
      capacitancePositive: "Kapasitans pozitif olmalıdır.",
      voltagePositive: "Gerilim pozitif olmalıdır.",
      frequencyNonNegative: "Frekans negatif olamaz.",
    },
    faq: [
      {
        q: "Kapasitans nedir?",
        a: "Kapasitans, bir cihazın (kapasitör) elektrik yükü depolamacı kalabilme yeteneğidir. Farad (F) cinsinden ölçülür. Ön ekler: μF, nF, pF.",
      },
      {
        q: "Kapasitördeki yük nedir?",
        a: "Yük (Q), depolanan elektrik yükünün miktarıdır, Coulomb (C) cinsinden ölçülür. Formül: Q = C × V.",
      },
      {
        q: "Kapasitör enerjisi nedir?",
        a: "Enerji (E), şarjlı kapasitörde depolanan enerji olup Joule cinsinden ölçülür. Formül: E = 0,5 × C × V².",
      },
      {
        q: "Kapasitif reaktans nedir?",
        a: "Reaktans (Xc), kapasitörün AC akımına karşı sunduğu direnç olup Ohm cinsinden ölçülür. Xc = 1/(2πfC).",
      },
      {
        q: "RC zaman sabiti nedir?",
        a: "RC zaman sabiti (τ = R × C), bir kapasitörün dirençten geçerek gerilimin %63'üne şarj edilme süresidir.",
      },
    ],
  },
  de: {
    title: "Kondensator-Rechner",
    short: "Berechnen Sie Ladung, Energie, Reaktanz und RC-Zeitkonstante.",
    description: "Kostenloser Kondensator-Rechner. Geben Sie Kapazität, Spannung und Frequenz ein.",
    keywords: ["kondensator", "kapazität", "ladung", "energie", "reaktanz", "RC-zeitkonstante", "elektronik"],
    inputs: {
      capacitance: { label: "Kapazität", help: "Wert in Farad (F)" },
      voltage: { label: "Spannung", help: "Spannung über Kondensator in Volt" },
      frequency: { label: "Frequenz", help: "AC-Frequenz in Hz. 0 für DC." },
    },
    outputs: {
      charge: { label: "Ladung", help: "Gespeicherte Ladung in Coulomb" },
      energy: { label: "Energie", help: "Gespeicherte Energie in Joule" },
      reactance: { label: "Reaktanz", help: "Kapazitive Reaktanz in Ohm" },
      timeConstantFor1k: { label: "RC-Zeitkonstante (1kΩ)", help: "Zeit für 63% Aufladung mit 1kΩ" },
    },
    options: {},
    errors: {
      capacitancePositive: "Kapazität muss positiv sein.",
      voltagePositive: "Spannung muss positiv sein.",
      frequencyNonNegative: "Frequenz darf nicht negativ sein.",
    },
    faq: [
      {
        q: "Was ist Kapazität?",
        a: "Kapazität ist die Fähigkeit eines Kondensators, elektrische Ladung zu speichern. Sie wird in Farad (F) gemessen.",
      },
      {
        q: "Was ist Ladung auf einem Kondensator?",
        a: "Ladung (Q) ist die Menge der gespeicherten elektrischen Ladung. Formel: Q = C × V.",
      },
      {
        q: "Was ist Kondensator-Energie?",
        a: "Energie (E) ist in Joule gemessen. Formel: E = 0,5 × C × V².",
      },
      {
        q: "Was ist kapazitive Reaktanz?",
        a: "Reaktanz (Xc) ist der Widerstand eines Kondensators gegen Wechselstrom. Xc = 1/(2πfC).",
      },
      {
        q: "Was ist die RC-Zeitkonstante?",
        a: "RC-Zeitkonstante (τ = R × C) ist die Zeit zum Aufladen auf 63% der angelegten Spannung.",
      },
    ],
  },
  fr: {
    title: "Calculatrice de Condensateur",
    short: "Calculez la charge, l'énergie, la réactance et la constante RC.",
    description: "Calculatrice gratuite de condensateur. Entrez la capacité, la tension et la fréquence.",
    keywords: ["condensateur", "capacité", "charge", "énergie", "réactance", "constante RC", "électronique"],
    inputs: {
      capacitance: { label: "Capacité", help: "Valeur en Farad (F)" },
      voltage: { label: "Tension", help: "Tension aux bornes du condensateur en Volts" },
      frequency: { label: "Fréquence", help: "Fréquence CA en Hz. 0 pour CC." },
    },
    outputs: {
      charge: { label: "Charge", help: "Charge stockée en Coulomb" },
      energy: { label: "Énergie", help: "Énergie stockée en Joule" },
      reactance: { label: "Réactance", help: "Réactance capacitive en Ohm" },
      timeConstantFor1k: { label: "Constante RC (1kΩ)", help: "Temps pour 63% de charge avec 1kΩ" },
    },
    options: {},
    errors: {
      capacitancePositive: "La capacité doit être positive.",
      voltagePositive: "La tension doit être positive.",
      frequencyNonNegative: "La fréquence ne peut pas être négative.",
    },
    faq: [
      {
        q: "Qu'est-ce que la capacité?",
        a: "La capacité est la capacité d'un condensateur à stocker une charge électrique. Elle se mesure en Farad (F).",
      },
      {
        q: "Qu'est-ce que la charge?",
        a: "La charge (Q) est la quantité de charge électrique stockée. Formule: Q = C × V.",
      },
      {
        q: "Qu'est-ce que l'énergie du condensateur?",
        a: "L'énergie (E) se mesure en Joule. Formule: E = 0,5 × C × V².",
      },
      {
        q: "Qu'est-ce que la réactance capacitive?",
        a: "La réactance (Xc) est l'opposition d'un condensateur au courant alternatif. Xc = 1/(2πfC).",
      },
      {
        q: "Qu'est-ce que la constante RC?",
        a: "La constante RC (τ = R × C) est le temps pour charger à 63% de la tension appliquée.",
      },
    ],
  },
  es: {
    title: "Calculadora de Capacitor",
    short: "Calcule la carga, energía, reactancia y constante RC.",
    description: "Calculadora gratuita de capacitor. Ingrese capacidad, tensión y frecuencia.",
    keywords: ["capacitor", "capacitancia", "carga", "energía", "reactancia", "constante RC", "electrónica"],
    inputs: {
      capacitance: { label: "Capacitancia", help: "Valor en Farad (F)" },
      voltage: { label: "Tensión", help: "Tensión a través del capacitor en Voltios" },
      frequency: { label: "Frecuencia", help: "Frecuencia AC en Hz. 0 para CC." },
    },
    outputs: {
      charge: { label: "Carga", help: "Carga almacenada en Culombios" },
      energy: { label: "Energía", help: "Energía almacenada en Julios" },
      reactance: { label: "Reactancia", help: "Reactancia capacitiva en Ohmios" },
      timeConstantFor1k: { label: "Constante RC (1kΩ)", help: "Tiempo para 63% de carga con 1kΩ" },
    },
    options: {},
    errors: {
      capacitancePositive: "La capacitancia debe ser positiva.",
      voltagePositive: "La tensión debe ser positiva.",
      frequencyNonNegative: "La frecuencia no puede ser negativa.",
    },
    faq: [
      {
        q: "¿Qué es la capacitancia?",
        a: "La capacitancia es la capacidad de un capacitor para almacenar carga eléctrica. Se mide en Faradios (F).",
      },
      {
        q: "¿Qué es la carga?",
        a: "La carga (Q) es la cantidad de carga eléctrica almacenada. Fórmula: Q = C × V.",
      },
      {
        q: "¿Qué es la energía?",
        a: "La energía (E) se mide en Julios. Fórmula: E = 0,5 × C × V².",
      },
      {
        q: "¿Qué es la reactancia capacitiva?",
        a: "La reactancia (Xc) es la oposición de un capacitor a la corriente alterna. Xc = 1/(2πfC).",
      },
      {
        q: "¿Qué es la constante RC?",
        a: "La constante RC (τ = R × C) es el tiempo para cargar al 63% de la tensión aplicada.",
      },
    ],
  },
  it: {
    title: "Calcolatore Condensatore",
    short: "Calcola carica, energia, reattanza e costante RC.",
    description: "Calcolatore gratuito di condensatore. Immetti capacità, tensione e frequenza.",
    keywords: ["condensatore", "capacità", "carica", "energia", "reattanza", "costante RC", "elettronica"],
    inputs: {
      capacitance: { label: "Capacità", help: "Valore in Farad (F)" },
      voltage: { label: "Tensione", help: "Tensione ai capi del condensatore in Volt" },
      frequency: { label: "Frequenza", help: "Frequenza CA in Hz. 0 per CC." },
    },
    outputs: {
      charge: { label: "Carica", help: "Carica immagazzinata in Coulomb" },
      energy: { label: "Energia", help: "Energia immagazzinata in Joule" },
      reactance: { label: "Reattanza", help: "Reattanza capacitiva in Ohm" },
      timeConstantFor1k: { label: "Costante RC (1kΩ)", help: "Tempo per 63% carica con 1kΩ" },
    },
    options: {},
    errors: {
      capacitancePositive: "La capacità deve essere positiva.",
      voltagePositive: "La tensione deve essere positiva.",
      frequencyNonNegative: "La frequenza non può essere negativa.",
    },
    faq: [
      {
        q: "Cos'è la capacità?",
        a: "La capacità è la capacità di un condensatore di immagazzinare carica elettrica. Si misura in Farad (F).",
      },
      {
        q: "Cos'è la carica?",
        a: "La carica (Q) è la quantità di carica elettrica immagazzinata. Formula: Q = C × V.",
      },
      {
        q: "Cos'è l'energia?",
        a: "L'energia (E) si misura in Joule. Formula: E = 0,5 × C × V².",
      },
      {
        q: "Cos'è la reattanza capacitiva?",
        a: "La reattanza (Xc) è l'opposizione di un condensatore alla corrente alternata. Xc = 1/(2πfC).",
      },
      {
        q: "Cos'è la costante RC?",
        a: "La costante RC (τ = R × C) è il tempo per caricare al 63% della tensione applicata.",
      },
    ],
  },
  ar: {
    title: "آلة حساب المكثف",
    short: "احسب الشحنة والطاقة والمفاعلة وثابت RC.",
    description: "آلة حساب المكثف المجانية. أدخل السعة والجهد والتردد.",
    keywords: ["مكثف", "سعة", "شحنة", "طاقة", "مفاعلة", "ثابت RC", "إلكترونيات"],
    inputs: {
      capacitance: { label: "السعة", help: "القيمة بالفاراد (F)" },
      voltage: { label: "الجهد", help: "الجهد عبر المكثف بالفولت" },
      frequency: { label: "التردد", help: "تردد التيار المتردد بالهرتز. 0 للتيار المباشر." },
    },
    outputs: {
      charge: { label: "الشحنة", help: "الشحنة المخزنة بالكولوم" },
      energy: { label: "الطاقة", help: "الطاقة المخزنة بالجول" },
      reactance: { label: "المفاعلة", help: "المفاعلة السعوية بالأوم" },
      timeConstantFor1k: { label: "ثابت RC (1kΩ)", help: "الوقت لتشحن 63% مع 1kΩ" },
    },
    options: {},
    errors: {
      capacitancePositive: "السعة يجب أن تكون موجبة.",
      voltagePositive: "الجهد يجب أن يكون موجباً.",
      frequencyNonNegative: "التردد لا يمكن أن يكون سالباً.",
    },
    faq: [
      {
        q: "ما هي السعة؟",
        a: "السعة هي قدرة المكثف على تخزين الشحنة الكهربائية. تُقاس بالفاراد (F).",
      },
      {
        q: "ما هي الشحنة؟",
        a: "الشحنة (Q) هي كمية الشحنة الكهربائية المخزنة. الصيغة: Q = C × V.",
      },
      {
        q: "ما هي الطاقة؟",
        a: "الطاقة (E) تُقاس بالجول. الصيغة: E = 0,5 × C × V².",
      },
      {
        q: "ما هي المفاعلة السعوية؟",
        a: "المفاعلة (Xc) هي معارضة المكثف للتيار المتردد. Xc = 1/(2πfC).",
      },
      {
        q: "ما هو ثابت RC؟",
        a: "ثابت RC (τ = R × C) هو الوقت للشحن إلى 63% من الجهد المطبق.",
      },
    ],
  },
  ru: {
    title: "Калькулятор Конденсатора",
    short: "Рассчитайте заряд, энергию, реактивное сопротивление и постоянную RC.",
    description: "Бесплатный калькулятор конденсатора. Введите емкость, напряжение и частоту.",
    keywords: ["конденсатор", "емкость", "заряд", "энергия", "реактивное сопротивление", "постоянная RC", "электроника"],
    inputs: {
      capacitance: { label: "Емкость", help: "Значение в Фарадах (F)" },
      voltage: { label: "Напряжение", help: "Напряжение на конденсаторе в Вольтах" },
      frequency: { label: "Частота", help: "Частота переменного тока в Герцах. 0 для постоянного тока." },
    },
    outputs: {
      charge: { label: "Заряд", help: "Накопленный заряд в Кулонах" },
      energy: { label: "Энергия", help: "Накопленная энергия в Джоулях" },
      reactance: { label: "Реактивное сопротивление", help: "Емкостное реактивное сопротивление в Омах" },
      timeConstantFor1k: { label: "Постоянная RC (1kΩ)", help: "Время зарядки до 63% с 1kΩ" },
    },
    options: {},
    errors: {
      capacitancePositive: "Емкость должна быть положительной.",
      voltagePositive: "Напряжение должно быть положительным.",
      frequencyNonNegative: "Частота не может быть отрицательной.",
    },
    faq: [
      {
        q: "Что такое емкость?",
        a: "Емкость — это способность конденсатора накапливать электрический заряд. Измеряется в Фарадах (F).",
      },
      {
        q: "Что такое заряд?",
        a: "Заряд (Q) — это величина накопленного электрического заряда. Формула: Q = C × V.",
      },
      {
        q: "Что такое энергия?",
        a: "Энергия (E) измеряется в Джоулях. Формула: E = 0,5 × C × V².",
      },
      {
        q: "Что такое емкостное реактивное сопротивление?",
        a: "Реактивное сопротивление (Xc) — это сопротивление конденсатора переменному току. Xc = 1/(2πfC).",
      },
      {
        q: "Что такое постоянная RC?",
        a: "Постоянная RC (τ = R × C) — это время зарядки до 63% от приложенного напряжения.",
      },
    ],
  },
  zh: {
    title: "电容器计算器",
    short: "计算电容器的电荷、能量、抗阻和RC时间常数。",
    description: "免费电容器计算器。输入电容、电压和频率。",
    keywords: ["电容器", "电容", "电荷", "能量", "抗阻", "RC时间常数", "电子"],
    inputs: {
      capacitance: { label: "电容", help: "法拉德(F)值" },
      voltage: { label: "电压", help: "电容器上的电压(伏特)" },
      frequency: { label: "频率", help: "交流频率(赫兹)。直流为0。" },
    },
    outputs: {
      charge: { label: "电荷", help: "存储的电荷(库仑)" },
      energy: { label: "能量", help: "存储的能量(焦耳)" },
      reactance: { label: "抗阻", help: "电容抗阻(欧姆)" },
      timeConstantFor1k: { label: "RC时间常数(1kΩ)", help: "用1kΩ充到63%的时间" },
    },
    options: {},
    errors: {
      capacitancePositive: "电容必须为正。",
      voltagePositive: "电压必须为正。",
      frequencyNonNegative: "频率不能为负。",
    },
    faq: [
      {
        q: "什么是电容?",
        a: "电容是电容器储存电荷的能力。以法拉德(F)衡量。",
      },
      {
        q: "什么是电荷?",
        a: "电荷(Q)是储存的电荷量。公式: Q = C × V.",
      },
      {
        q: "什么是能量?",
        a: "能量(E)以焦耳衡量。公式: E = 0.5 × C × V².",
      },
      {
        q: "什么是电容抗阻?",
        a: "抗阻(Xc)是电容器对交流的阻抗。Xc = 1/(2πfC).",
      },
      {
        q: "什么是RC时间常数?",
        a: "RC时间常数(τ = R × C)是充到施加电压63%的时间。",
      },
    ],
  },
  ja: {
    title: "コンデンサ計算機",
    short: "コンデンサの電荷、エネルギー、リアクタンス、RC時間定数を計算します。",
    description: "無料のコンデンサ計算機。静電容量、電圧、周波数を入力します。",
    keywords: ["コンデンサ", "静電容量", "電荷", "エネルギー", "リアクタンス", "RC時間定数", "電子"],
    inputs: {
      capacitance: { label: "静電容量", help: "ファラッド(F)単位の値" },
      voltage: { label: "電圧", help: "コンデンサ間の電圧(ボルト)" },
      frequency: { label: "周波数", help: "交流周波数(ヘルツ)。直流は0。" },
    },
    outputs: {
      charge: { label: "電荷", help: "蓄積された電荷(クーロン)" },
      energy: { label: "エネルギー", help: "蓄積されたエネルギー(ジュール)" },
      reactance: { label: "リアクタンス", help: "容量性リアクタンス(オーム)" },
      timeConstantFor1k: { label: "RC時間定数(1kΩ)", help: "1kΩで63%充電される時間" },
    },
    options: {},
    errors: {
      capacitancePositive: "静電容量は正である必要があります。",
      voltagePositive: "電圧は正である必要があります。",
      frequencyNonNegative: "周波数は負にできません。",
    },
    faq: [
      {
        q: "静電容量とは何ですか?",
        a: "静電容量はコンデンサの電荷を保存する能力です。ファラッド(F)で測定されます。",
      },
      {
        q: "電荷とは何ですか?",
        a: "電荷(Q)は蓄積された電荷の量です。公式: Q = C × V.",
      },
      {
        q: "エネルギーとは何ですか?",
        a: "エネルギー(E)はジュールで測定されます。公式: E = 0.5 × C × V².",
      },
      {
        q: "容量性リアクタンスとは何ですか?",
        a: "リアクタンス(Xc)はコンデンサの交流への阻止です。Xc = 1/(2πfC).",
      },
      {
        q: "RC時間定数とは何ですか?",
        a: "RC時間定数(τ = R × C)は加印電圧の63%まで充電される時間です。",
      },
    ],
  },
  ko: {
    title: "축전기 계산기",
    short: "축전기의 전하, 에너지, 리액턴스 및 RC 시간 상수를 계산합니다.",
    description: "무료 축전기 계산기. 정전용량, 전압, 주파수를 입력합니다.",
    keywords: ["축전기", "정전용량", "전하", "에너지", "리액턴스", "RC 시간 상수", "전자"],
    inputs: {
      capacitance: { label: "정전용량", help: "패러드(F) 단위의 값" },
      voltage: { label: "전압", help: "축전기 상의 전압(볼트)" },
      frequency: { label: "주파수", help: "교류 주파수(헤르츠). 직류는 0." },
    },
    outputs: {
      charge: { label: "전하", help: "저장된 전하(쿨롱)" },
      energy: { label: "에너지", help: "저장된 에너지(줄)" },
      reactance: { label: "리액턴스", help: "용량성 리액턴스(오옴)" },
      timeConstantFor1k: { label: "RC 시간 상수(1kΩ)", help: "1kΩ로 63% 충전 시간" },
    },
    options: {},
    errors: {
      capacitancePositive: "정전용량은 양수여야 합니다.",
      voltagePositive: "전압은 양수여야 합니다.",
      frequencyNonNegative: "주파수는 음수일 수 없습니다.",
    },
    faq: [
      {
        q: "정전용량이란 무엇입니까?",
        a: "정전용량은 축전기의 전하를 저장하는 능력입니다. 패러드(F)로 측정됩니다.",
      },
      {
        q: "전하란 무엇입니까?",
        a: "전하(Q)는 저장된 전하의 양입니다. 공식: Q = C × V.",
      },
      {
        q: "에너지란 무엇입니까?",
        a: "에너지(E)는 줄 단위로 측정됩니다. 공식: E = 0.5 × C × V².",
      },
      {
        q: "용량성 리액턴스란 무엇입니까?",
        a: "리액턴스(Xc)는 축전기의 교류에 대한 저항입니다. Xc = 1/(2πfC).",
      },
      {
        q: "RC 시간 상수란 무엇입니까?",
        a: "RC 시간 상수(τ = R × C)는 인가된 전압의 63%까지 충전되는 시간입니다.",
      },
    ],
  },
  hi: {
    title: "कैपेसिटर कैलकुलेटर",
    short: "कैपेसिटर के चार्ज, एनर्जी, रिएक्टेंस और RC टाइम कॉन्स्टेंट की गणना करें।",
    description: "मुफ्त कैपेसिटर कैलकुलेटर। कैपेसिटेंस, वोल्टेज और फ्रीक्वेंसी दर्ज करें।",
    keywords: ["कैपेसिटर", "कैपेसिटेंस", "चार्ज", "एनर्जी", "रिएक्टेंस", "RC टाइम कॉन्स्टेंट", "इलेक्ट्रॉनिक्स"],
    inputs: {
      capacitance: { label: "कैपेसिटेंस", help: "फैराड (F) में मान" },
      voltage: { label: "वोल्टेज", help: "कैपेसिटर में वोल्टेज (वोल्ट)" },
      frequency: { label: "फ्रीक्वेंसी", help: "AC फ्रीक्वेंसी (Hz). DC के लिए 0." },
    },
    outputs: {
      charge: { label: "चार्ज", help: "संग्रहित चार्ज (कूलॉम)" },
      energy: { label: "एनर्जी", help: "संग्रहित ऊर्जा (जूल)" },
      reactance: { label: "रिएक्टेंस", help: "कैपेसिटिव रिएक्टेंस (ओम)" },
      timeConstantFor1k: { label: "RC टाइम कॉन्स्टेंट (1kΩ)", help: "1kΩ से 63% चार्ज का समय" },
    },
    options: {},
    errors: {
      capacitancePositive: "कैपेसिटेंस सकारात्मक होना चाहिए।",
      voltagePositive: "वोल्टेज सकारात्मक होना चाहिए।",
      frequencyNonNegative: "फ्रीक्वेंसी नकारात्मक नहीं हो सकती।",
    },
    faq: [
      {
        q: "कैपेसिटेंस क्या है?",
        a: "कैपेसिटेंस एक कैपेसिटर की विद्युत चार्ज को स्टोर करने की क्षमता है। इसे फैराड (F) में मापा जाता है।",
      },
      {
        q: "चार्ज क्या है?",
        a: "चार्ज (Q) संग्रहित विद्युत चार्ज की मात्रा है। सूत्र: Q = C × V.",
      },
      {
        q: "एनर्जी क्या है?",
        a: "एनर्जी (E) जूल में मापी जाती है। सूत्र: E = 0.5 × C × V².",
      },
      {
        q: "कैपेसिटिव रिएक्टेंस क्या है?",
        a: "रिएक्टेंस (Xc) एक कैपेसिटर की AC करंट से विरोध है। Xc = 1/(2πfC).",
      },
      {
        q: "RC टाइम कॉन्स्टेंट क्या है?",
        a: "RC टाइम कॉन्स्टेंट (τ = R × C) लागू वोल्टेज के 63% तक चार्ज होने का समय है।",
      },
    ],
  },
};

export default i18n;
