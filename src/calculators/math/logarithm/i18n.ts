import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Logarithm Calculator",
    short: "Calculate logarithms with any base. Find log, ln, log₁₀, and log₂ in one step.",
    description: "Free logarithm calculator using change of base formula. Calculate log with any base, natural log, common logarithm, and binary logarithm.",
    keywords: ["logarithm calculator", "log calculator", "natural log", "common logarithm", "ln", "log base"],
    inputs: {
      value: {
        label: "Value (x)",
        help: "The number to find the logarithm of. Must be positive.",
      },
      base: {
        label: "Base",
        help: "The logarithm base. Must be positive and not equal to 1.",
      },
    },
    outputs: {
      result: {
        label: "Log (result)",
        help: "The logarithm with specified base.",
      },
      natural_log: {
        label: "Natural Log (ln)",
        help: "The natural logarithm (base e).",
      },
      log10: {
        label: "Common Log (log₁₀)",
        help: "The common logarithm (base 10).",
      },
      log2: {
        label: "Binary Log (log₂)",
        help: "The binary logarithm (base 2).",
      },
    },
    errors: {
      valueNotPositive: "Value must be positive.",
      baseNotPositive: "Base must be positive.",
      baseCannotBeOne: "Base cannot be 1.",
    },
  },
  tr: {
    title: "Logaritma Hesaplayıcısı",
    short: "Herhangi bir tabanda logaritma hesaplayın. Log, ln, log₁₀ ve log₂'yi tek adımda bulun.",
    description: "Taban değiştirme formülü kullanan ücretsiz logaritma hesaplayıcı. Herhangi bir tabanda log, doğal log, onluk log ve ikili log hesaplayın.",
    keywords: ["logaritma hesaplayıcısı", "log hesaplayıcı", "doğal logaritma", "logaritma tabı", "ln", "log"],
    inputs: {
      value: {
        label: "Değer (x)",
        help: "Logaritması alınacak sayı. Pozitif olmalıdır.",
      },
      base: {
        label: "Taban",
        help: "Logaritmanın tabanı. Pozitif ve 1'e eşit olmamalıdır.",
      },
    },
    outputs: {
      result: {
        label: "Log (sonuç)",
        help: "Belirtilen tabanda logaritma.",
      },
      natural_log: {
        label: "Doğal Log (ln)",
        help: "Doğal logaritma (e tabanı).",
      },
      log10: {
        label: "Onluk Log (log₁₀)",
        help: "Onluk logaritma (10 tabanı).",
      },
      log2: {
        label: "İkili Log (log₂)",
        help: "İkili logaritma (2 tabanı).",
      },
    },
    errors: {
      valueNotPositive: "Değer pozitif olmalıdır.",
      baseNotPositive: "Taban pozitif olmalıdır.",
      baseCannotBeOne: "Taban 1 olamaz.",
    },
  },
  de: {
    title: "Logarithmus-Rechner",
    short: "Logarithmen mit beliebiger Basis berechnen. Log, ln, log₁₀ und log₂ in einem Schritt.",
    description: "Kostenloser Logarithmus-Rechner mit Basiswechselformel. Berechnen Sie den Logarithmus mit beliebiger Basis, natürlicher Logarithmus, dekadischer Logarithmus und binärer Logarithmus.",
    keywords: ["Logarithmus-Rechner", "log-Rechner", "natürlicher Logarithmus", "Logarithmusbasis", "ln", "Logarithmus"],
    inputs: {
      value: {
        label: "Wert (x)",
        help: "Die Zahl, deren Logarithmus berechnet wird. Muss positiv sein.",
      },
      base: {
        label: "Basis",
        help: "Die Basis des Logarithmus. Muss positiv sein und darf nicht 1 sein.",
      },
    },
    outputs: {
      result: {
        label: "Log (Ergebnis)",
        help: "Der Logarithmus mit der angegebenen Basis.",
      },
      natural_log: {
        label: "Natürlicher Log (ln)",
        help: "Der natürliche Logarithmus (Basis e).",
      },
      log10: {
        label: "Dekadischer Log (log₁₀)",
        help: "Der dekadische Logarithmus (Basis 10).",
      },
      log2: {
        label: "Binärer Log (log₂)",
        help: "Der binäre Logarithmus (Basis 2).",
      },
    },
    errors: {
      valueNotPositive: "Der Wert muss positiv sein.",
      baseNotPositive: "Die Basis muss positiv sein.",
      baseCannotBeOne: "Die Basis darf nicht 1 sein.",
    },
  },
  fr: {
    title: "Calculatrice Logarithme",
    short: "Calculez les logarithmes avec n'importe quelle base. Trouvez log, ln, log₁₀ et log₂ en une étape.",
    description: "Calculatrice logarithme gratuite utilisant la formule du changement de base. Calculez le logarithme avec n'importe quelle base, logarithme naturel, logarithme décimal et logarithme binaire.",
    keywords: ["calculatrice logarithme", "calculatrice log", "logarithme naturel", "base logarithme", "ln", "logarithme"],
    inputs: {
      value: {
        label: "Valeur (x)",
        help: "Le nombre dont on cherche le logarithme. Doit être positif.",
      },
      base: {
        label: "Base",
        help: "La base du logarithme. Doit être positive et différente de 1.",
      },
    },
    outputs: {
      result: {
        label: "Log (résultat)",
        help: "Le logarithme avec la base spécifiée.",
      },
      natural_log: {
        label: "Logarithme Naturel (ln)",
        help: "Le logarithme naturel (base e).",
      },
      log10: {
        label: "Logarithme Décimal (log₁₀)",
        help: "Le logarithme décimal (base 10).",
      },
      log2: {
        label: "Logarithme Binaire (log₂)",
        help: "Le logarithme binaire (base 2).",
      },
    },
    errors: {
      valueNotPositive: "La valeur doit être positive.",
      baseNotPositive: "La base doit être positive.",
      baseCannotBeOne: "La base ne peut pas être 1.",
    },
  },
  es: {
    title: "Calculadora de Logaritmo",
    short: "Calcula logaritmos con cualquier base. Encuentra log, ln, log₁₀ y log₂ en un paso.",
    description: "Calculadora de logaritmo gratuita usando la fórmula de cambio de base. Calcule logaritmos con cualquier base, logaritmo natural, logaritmo común y logaritmo binario.",
    keywords: ["calculadora de logaritmo", "calculadora log", "logaritmo natural", "base logarítmica", "ln", "logaritmo"],
    inputs: {
      value: {
        label: "Valor (x)",
        help: "El número cuyo logaritmo se desea calcular. Debe ser positivo.",
      },
      base: {
        label: "Base",
        help: "La base del logaritmo. Debe ser positiva y diferente de 1.",
      },
    },
    outputs: {
      result: {
        label: "Log (resultado)",
        help: "El logaritmo con la base especificada.",
      },
      natural_log: {
        label: "Logaritmo Natural (ln)",
        help: "El logaritmo natural (base e).",
      },
      log10: {
        label: "Logaritmo Común (log₁₀)",
        help: "El logaritmo común (base 10).",
      },
      log2: {
        label: "Logaritmo Binario (log₂)",
        help: "El logaritmo binario (base 2).",
      },
    },
    errors: {
      valueNotPositive: "El valor debe ser positivo.",
      baseNotPositive: "La base debe ser positiva.",
      baseCannotBeOne: "La base no puede ser 1.",
    },
  },
  it: {
    title: "Calcolatrice Logaritmo",
    short: "Calcola logaritmi con qualsiasi base. Trova log, ln, log₁₀ e log₂ in un passaggio.",
    description: "Calcolatrice logaritmo gratuita che utilizza la formula del cambio di base. Calcola logaritmi con qualsiasi base, logaritmo naturale, logaritmo decimale e logaritmo binario.",
    keywords: ["calcolatrice logaritmo", "calcolatrice log", "logaritmo naturale", "base logaritmica", "ln", "logaritmo"],
    inputs: {
      value: {
        label: "Valore (x)",
        help: "Il numero di cui si desidera calcolare il logaritmo. Deve essere positivo.",
      },
      base: {
        label: "Base",
        help: "La base del logaritmo. Deve essere positiva e diversa da 1.",
      },
    },
    outputs: {
      result: {
        label: "Log (risultato)",
        help: "Il logaritmo con la base specificata.",
      },
      natural_log: {
        label: "Logaritmo Naturale (ln)",
        help: "Il logaritmo naturale (base e).",
      },
      log10: {
        label: "Logaritmo Decimale (log₁₀)",
        help: "Il logaritmo decimale (base 10).",
      },
      log2: {
        label: "Logaritmo Binario (log₂)",
        help: "Il logaritmo binario (base 2).",
      },
    },
    errors: {
      valueNotPositive: "Il valore deve essere positivo.",
      baseNotPositive: "La base deve essere positiva.",
      baseCannotBeOne: "La base non può essere 1.",
    },
  },
  ar: {
    title: "حاسبة اللوغاريتم",
    short: "احسب اللوغاريتمات بأي أساس. ابحث عن log و ln و log₁₀ و log₂ في خطوة واحدة.",
    description: "حاسبة لوغاريتم مجانية تستخدم صيغة تغيير الأساس. احسب اللوغاريتم بأي أساس واللوغاريتم الطبيعي واللوغاريتم العشري واللوغاريتم الثنائي.",
    keywords: ["حاسبة لوغاريتم", "حاسبة log", "لوغاريتم طبيعي", "أساس لوغاريتم", "ln", "لوغاريتم"],
    inputs: {
      value: {
        label: "القيمة (x)",
        help: "الرقم الذي تريد حساب لوغاريتمه. يجب أن يكون موجباً.",
      },
      base: {
        label: "الأساس",
        help: "أساس اللوغاريتم. يجب أن يكون موجباً وليس مساوياً لـ 1.",
      },
    },
    outputs: {
      result: {
        label: "Log (النتيجة)",
        help: "اللوغاريتم بالأساس المحدد.",
      },
      natural_log: {
        label: "اللوغاريتم الطبيعي (ln)",
        help: "اللوغاريتم الطبيعي (الأساس e).",
      },
      log10: {
        label: "اللوغاريتم العشري (log₁₀)",
        help: "اللوغاريتم العشري (الأساس 10).",
      },
      log2: {
        label: "اللوغاريتم الثنائي (log₂)",
        help: "اللوغاريتم الثنائي (الأساس 2).",
      },
    },
    errors: {
      valueNotPositive: "القيمة يجب أن تكون موجبة.",
      baseNotPositive: "الأساس يجب أن يكون موجباً.",
      baseCannotBeOne: "الأساس لا يمكن أن يكون 1.",
    },
  },
  ru: {
    title: "Калькулятор Логарифма",
    short: "Вычисляйте логарифмы с любым основанием. Найдите log, ln, log₁₀ и log₂ за один шаг.",
    description: "Бесплатный калькулятор логарифма с использованием формулы замены основания. Вычисляйте логарифм с любым основанием, натуральный логарифм, десятичный логарифм и двоичный логарифм.",
    keywords: ["калькулятор логарифма", "калькулятор log", "натуральный логарифм", "основание логарифма", "ln", "логарифм"],
    inputs: {
      value: {
        label: "Значение (x)",
        help: "Число, логарифм которого нужно вычислить. Должно быть положительным.",
      },
      base: {
        label: "Основание",
        help: "Основание логарифма. Должно быть положительным и не равно 1.",
      },
    },
    outputs: {
      result: {
        label: "Log (результат)",
        help: "Логарифм с указанным основанием.",
      },
      natural_log: {
        label: "Натуральный Log (ln)",
        help: "Натуральный логарифм (основание e).",
      },
      log10: {
        label: "Десятичный Log (log₁₀)",
        help: "Десятичный логарифм (основание 10).",
      },
      log2: {
        label: "Двоичный Log (log₂)",
        help: "Двоичный логарифм (основание 2).",
      },
    },
    errors: {
      valueNotPositive: "Значение должно быть положительным.",
      baseNotPositive: "Основание должно быть положительным.",
      baseCannotBeOne: "Основание не может быть равно 1.",
    },
  },
  zh: {
    title: "对数计算器",
    short: "计算任何底的对数。一步找到 log、ln、log₁₀ 和 log₂。",
    description: "免费对数计算器，使用换底公式。计算任何底的对数、自然对数、常用对数和二进制对数。",
    keywords: ["对数计算器", "log计算器", "自然对数", "对数底", "ln", "对数"],
    inputs: {
      value: {
        label: "值 (x)",
        help: "要计算对数的数字。必须为正数。",
      },
      base: {
        label: "底",
        help: "对数的底。必须为正数且不等于 1。",
      },
    },
    outputs: {
      result: {
        label: "Log（结果）",
        help: "指定底的对数。",
      },
      natural_log: {
        label: "自然对数 (ln)",
        help: "自然对数（底 e）。",
      },
      log10: {
        label: "常用对数 (log₁₀)",
        help: "常用对数（底 10）。",
      },
      log2: {
        label: "二进制对数 (log₂)",
        help: "二进制对数（底 2）。",
      },
    },
    errors: {
      valueNotPositive: "值必须为正数。",
      baseNotPositive: "底必须为正数。",
      baseCannotBeOne: "底不能为 1。",
    },
  },
  ja: {
    title: "対数計算機",
    short: "任意の底を持つ対数を計算します。log、ln、log₁₀、log₂ を 1 ステップで見つけます。",
    description: "底の変換公式を使用した無料の対数計算機。任意の底の対数、自然対数、常用対数、二進対数を計算します。",
    keywords: ["対数計算機", "log計算機", "自然対数", "対数の底", "ln", "対数"],
    inputs: {
      value: {
        label: "値 (x)",
        help: "対数を計算する数値。正の数である必要があります。",
      },
      base: {
        label: "底",
        help: "対数の底。正の数である必要があり、1 ではなく、1 と等しくありません。",
      },
    },
    outputs: {
      result: {
        label: "Log（結果）",
        help: "指定された底の対数。",
      },
      natural_log: {
        label: "自然対数 (ln)",
        help: "自然対数（底 e）。",
      },
      log10: {
        label: "常用対数 (log₁₀)",
        help: "常用対数（底 10）。",
      },
      log2: {
        label: "二進対数 (log₂)",
        help: "二進対数（底 2）。",
      },
    },
    errors: {
      valueNotPositive: "値は正の数である必要があります。",
      baseNotPositive: "底は正の数である必要があります。",
      baseCannotBeOne: "底は 1 にすることはできません。",
    },
  },
  ko: {
    title: "로그 계산기",
    short: "모든 밑의 로그를 계산합니다. log, ln, log₁₀, log₂를 한 단계에서 찾습니다.",
    description: "밑 변환 공식을 사용한 무료 로그 계산기입니다. 모든 밑의 로그, 자연 로그, 상용 로그, 이진 로그를 계산합니다.",
    keywords: ["로그 계산기", "log 계산기", "자연 로그", "로그 밑", "ln", "로그"],
    inputs: {
      value: {
        label: "값 (x)",
        help: "로그를 계산할 수입니다. 양수여야 합니다.",
      },
      base: {
        label: "밑",
        help: "로그의 밑입니다. 양수여야 하며 1과 같지 않아야 합니다.",
      },
    },
    outputs: {
      result: {
        label: "Log (결과)",
        help: "지정된 밑의 로그입니다.",
      },
      natural_log: {
        label: "자연 로그 (ln)",
        help: "자연 로그입니다 (밑 e).",
      },
      log10: {
        label: "상용 로그 (log₁₀)",
        help: "상용 로그입니다 (밑 10).",
      },
      log2: {
        label: "이진 로그 (log₂)",
        help: "이진 로그입니다 (밑 2).",
      },
    },
    errors: {
      valueNotPositive: "값은 양수여야 합니다.",
      baseNotPositive: "밑은 양수여야 합니다.",
      baseCannotBeOne: "밑은 1이 될 수 없습니다.",
    },
  },
  hi: {
    title: "लॉगरिदम कैलकुलेटर",
    short: "किसी भी आधार के साथ लॉगरिदम की गणना करें। एक चरण में log, ln, log₁₀ और log₂ खोजें।",
    description: "आधार परिवर्तन सूत्र का उपयोग करने वाला मुफ़्त लॉगरिदम कैलकुलेटर। किसी भी आधार के साथ लॉगरिदम, प्राकृतिक लॉगरिदम, सामान्य लॉगरिदम और बाइनरी लॉगरिदम की गणना करें।",
    keywords: ["लॉगरिदम कैलकुलेटर", "log कैलकुलेटर", "प्राकृतिक लॉगरिदम", "लॉगरिदम आधार", "ln", "लॉगरिदम"],
    inputs: {
      value: {
        label: "मान (x)",
        help: "वह संख्या जिसका लॉगरिदम निकालना है। यह सकारात्मक होनी चाहिए।",
      },
      base: {
        label: "आधार",
        help: "लॉगरिदम का आधार। यह सकारात्मक होना चाहिए और 1 के बराबर नहीं होना चाहिए।",
      },
    },
    outputs: {
      result: {
        label: "Log (परिणाम)",
        help: "निर्दिष्ट आधार के साथ लॉगरिदम।",
      },
      natural_log: {
        label: "प्राकृतिक Log (ln)",
        help: "प्राकृतिक लॉगरिदम (आधार e)।",
      },
      log10: {
        label: "सामान्य Log (log₁₀)",
        help: "सामान्य लॉगरिदम (आधार 10)।",
      },
      log2: {
        label: "बाइनरी Log (log₂)",
        help: "बाइनरी लॉगरिदम (आधार 2)।",
      },
    },
    errors: {
      valueNotPositive: "मान सकारात्मक होना चाहिए।",
      baseNotPositive: "आधार सकारात्मक होना चाहिए।",
      baseCannotBeOne: "आधार 1 नहीं हो सकता।",
    },
  },
};

export default i18n;
