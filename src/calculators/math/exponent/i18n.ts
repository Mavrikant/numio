import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Exponent Calculator",
    short: "Calculate powers and exponents. Find base^exponent, expanded notation, and scientific notation.",
    description: "Free exponent calculator. Calculate powers with any base and exponent. Get expanded notation and scientific notation. Handles negative exponents and special cases.",
    keywords: ["exponent calculator", "power calculator", "base exponent", "scientific notation", "exponential"],
    inputs: {
      base: {
        label: "Base",
        help: "The number being raised to a power.",
      },
      exponent: {
        label: "Exponent",
        help: "The power to which the base is raised. Can be positive, negative, or zero.",
      },
    },
    outputs: {
      result: {
        label: "Result",
        help: "The value of base raised to the exponent.",
      },
      expanded: {
        label: "Expanded",
        help: "Shows the calculation in expanded form (for small exponents).",
      },
      scientific: {
        label: "Scientific Notation",
        help: "The result expressed in scientific notation.",
      },
    },
    errors: {
      invalidInput: "Invalid input values.",
    },
  },
  tr: {
    title: "Üssü Hesaplayıcısı",
    short: "Kuvvet ve üssü hesaplayın. Taban^üssü, açılmış gösterim ve bilimsel gösterimi bulun.",
    description: "Üssü hesaplayıcısı. Herhangi bir taban ve üssü ile kuvvetleri hesaplayın. Açılmış gösterim ve bilimsel gösterim alın. Negatif üssüler ve özel durumları işler.",
    keywords: ["üssü hesaplayıcısı", "kuvvet hesaplayıcısı", "taban üssü", "bilimsel gösterim", "üstel"],
    inputs: {
      base: {
        label: "Taban",
        help: "Kuvvete yükseltilen sayı.",
      },
      exponent: {
        label: "Üssü",
        help: "Tabanın yükseltildiği kuvvet. Pozitif, negatif veya sıfır olabilir.",
      },
    },
    outputs: {
      result: {
        label: "Sonuç",
        help: "Tabanın üssüye yükseltilmiş değeri.",
      },
      expanded: {
        label: "Açılmış",
        help: "Hesaplama açılmış biçimde gösterilir (küçük üssüler için).",
      },
      scientific: {
        label: "Bilimsel Gösterim",
        help: "Sonuç bilimsel gösterimde ifade edilir.",
      },
    },
    errors: {
      invalidInput: "Geçersiz giriş değerleri.",
    },
  },
  de: {
    title: "Exponenten-Rechner",
    short: "Berechne Potenzen und Exponenten. Finde Basis^Exponent, erweiterte Notation und wissenschaftliche Notation.",
    description: "Kostenloser Exponenten-Rechner. Berechne Potenzen mit beliebiger Basis und Exponent. Erhalten Sie erweiterte Notation und wissenschaftliche Notation. Handhabt negative Exponenten und Spezialfälle.",
    keywords: ["Exponenten-Rechner", "Potenz-Rechner", "Basis Exponent", "wissenschaftliche Notation", "exponentiell"],
    inputs: {
      base: {
        label: "Basis",
        help: "Die Zahl, die potenziert wird.",
      },
      exponent: {
        label: "Exponent",
        help: "Die Potenz, zu der die Basis erhöht wird. Kann positiv, negativ oder null sein.",
      },
    },
    outputs: {
      result: {
        label: "Ergebnis",
        help: "Der Wert der Basis erhöht zum Exponenten.",
      },
      expanded: {
        label: "Erweitert",
        help: "Zeigt die Berechnung in erweiterter Form (für kleine Exponenten).",
      },
      scientific: {
        label: "Wissenschaftliche Notation",
        help: "Das Ergebnis in wissenschaftlicher Notation ausgedrückt.",
      },
    },
    errors: {
      invalidInput: "Ungültige Eingabewerte.",
    },
  },
  fr: {
    title: "Calculatrice Exponentielle",
    short: "Calculez les puissances et les exposants. Trouvez base^exposant, notation développée et notation scientifique.",
    description: "Calculatrice d'exposant gratuite. Calculez les puissances avec n'importe quelle base et exposant. Obtenez la notation développée et la notation scientifique. Gère les exposants négatifs et les cas particuliers.",
    keywords: ["calculatrice exponentielle", "calculatrice de puissance", "base exposant", "notation scientifique", "exponentiel"],
    inputs: {
      base: {
        label: "Base",
        help: "Le nombre qui est élevé à une puissance.",
      },
      exponent: {
        label: "Exposant",
        help: "La puissance à laquelle la base est élevée. Peut être positif, négatif ou zéro.",
      },
    },
    outputs: {
      result: {
        label: "Résultat",
        help: "La valeur de la base élevée à l'exposant.",
      },
      expanded: {
        label: "Développé",
        help: "Affiche le calcul sous forme développée (pour les petits exposants).",
      },
      scientific: {
        label: "Notation Scientifique",
        help: "Le résultat exprimé en notation scientifique.",
      },
    },
    errors: {
      invalidInput: "Valeurs d'entrée invalides.",
    },
  },
  es: {
    title: "Calculadora de Exponentes",
    short: "Calcula potencias y exponentes. Encuentra base^exponente, notación expandida y notación científica.",
    description: "Calculadora de exponentes gratuita. Calcula potencias con cualquier base y exponente. Obtén notación expandida y notación científica. Maneja exponentes negativos y casos especiales.",
    keywords: ["calculadora de exponentes", "calculadora de potencias", "base exponente", "notación científica", "exponencial"],
    inputs: {
      base: {
        label: "Base",
        help: "El número que se eleva a una potencia.",
      },
      exponent: {
        label: "Exponente",
        help: "La potencia a la que se eleva la base. Puede ser positivo, negativo o cero.",
      },
    },
    outputs: {
      result: {
        label: "Resultado",
        help: "El valor de la base elevada al exponente.",
      },
      expanded: {
        label: "Expandido",
        help: "Muestra el cálculo en forma expandida (para exponentes pequeños).",
      },
      scientific: {
        label: "Notación Científica",
        help: "El resultado expresado en notación científica.",
      },
    },
    errors: {
      invalidInput: "Valores de entrada inválidos.",
    },
  },
  it: {
    title: "Calcolatrice Esponente",
    short: "Calcola potenze ed esponenti. Trova base^esponente, notazione espansa e notazione scientifica.",
    description: "Calcolatrice esponente gratuita. Calcola potenze con qualsiasi base ed esponente. Ottieni notazione espansa e notazione scientifica. Gestisce esponenti negativi e casi speciali.",
    keywords: ["calcolatrice esponente", "calcolatrice potenza", "base esponente", "notazione scientifica", "esponenziale"],
    inputs: {
      base: {
        label: "Base",
        help: "Il numero che viene elevato a potenza.",
      },
      exponent: {
        label: "Esponente",
        help: "La potenza a cui la base viene elevata. Può essere positiva, negativa o zero.",
      },
    },
    outputs: {
      result: {
        label: "Risultato",
        help: "Il valore della base elevata all'esponente.",
      },
      expanded: {
        label: "Espanso",
        help: "Mostra il calcolo in forma espansa (per esponenti piccoli).",
      },
      scientific: {
        label: "Notazione Scientifica",
        help: "Il risultato espresso in notazione scientifica.",
      },
    },
    errors: {
      invalidInput: "Valori di input non validi.",
    },
  },
  ar: {
    title: "حاسبة الأس",
    short: "احسب الأسس والقوى. ابحث عن الأساس^الأس، والتدوين الموسع والتدوين العلمي.",
    description: "حاسبة الأس مجانية. احسب القوى مع أي أساس وأس. احصل على التدوين الموسع والتدوين العلمي. يتعامل مع الأسس السالبة والحالات الخاصة.",
    keywords: ["حاسبة الأس", "حاسبة القوى", "أساس أس", "التدوين العلمي", "أسي"],
    inputs: {
      base: {
        label: "الأساس",
        help: "الرقم الذي يتم رفعه إلى قوة.",
      },
      exponent: {
        label: "الأس",
        help: "القوة التي يتم رفع الأساس إليها. يمكن أن تكون موجبة أو سالبة أو صفر.",
      },
    },
    outputs: {
      result: {
        label: "النتيجة",
        help: "قيمة الأساس مرفوعة إلى الأس.",
      },
      expanded: {
        label: "الموسع",
        help: "يعرض الحساب في شكل موسع (للأسس الصغيرة).",
      },
      scientific: {
        label: "التدوين العلمي",
        help: "النتيجة معبر عنها بالتدوين العلمي.",
      },
    },
    errors: {
      invalidInput: "قيم الإدخال غير صحيحة.",
    },
  },
  ru: {
    title: "Калькулятор Степеней",
    short: "Вычисляйте степени и показатели степени. Найдите базу^показатель, развернутую запись и научную запись.",
    description: "Бесплатный калькулятор степеней. Вычисляйте степени с любым основанием и показателем. Получите развернутую запись и научную запись. Обрабатывает отрицательные показатели и особые случаи.",
    keywords: ["калькулятор степеней", "калькулятор мощности", "основание показатель", "научная запись", "экспоненциальный"],
    inputs: {
      base: {
        label: "Основание",
        help: "Число, возводимое в степень.",
      },
      exponent: {
        label: "Показатель",
        help: "Степень, в которую возводится основание. Может быть положительной, отрицательной или нулевой.",
      },
    },
    outputs: {
      result: {
        label: "Результат",
        help: "Значение основания, возведенного в показатель.",
      },
      expanded: {
        label: "Развернуто",
        help: "Показывает расчет в развернутом виде (для малых показателей).",
      },
      scientific: {
        label: "Научная Запись",
        help: "Результат, выраженный в научной записи.",
      },
    },
    errors: {
      invalidInput: "Неверные входные значения.",
    },
  },
  zh: {
    title: "幂次计算器",
    short: "计算幂和指数。找到底数^指数、展开式和科学计数法。",
    description: "免费的幂次计算器。计算任何底数和指数的幂。获取展开式和科学计数法。处理负指数和特殊情况。",
    keywords: ["幂次计算器", "幂计算器", "底数指数", "科学计数法", "指数"],
    inputs: {
      base: {
        label: "底数",
        help: "被提升到幂的数字。",
      },
      exponent: {
        label: "指数",
        help: "底数被提升到的幂。可以是正数、负数或零。",
      },
    },
    outputs: {
      result: {
        label: "结果",
        help: "底数提升到指数的值。",
      },
      expanded: {
        label: "展开式",
        help: "以展开形式显示计算（对于小指数）。",
      },
      scientific: {
        label: "科学计数法",
        help: "用科学计数法表示的结果。",
      },
    },
    errors: {
      invalidInput: "输入值无效。",
    },
  },
  ja: {
    title: "指数計算機",
    short: "べき乗と指数を計算します。底^指数、展開形式と科学計数法を求めます。",
    description: "無料の指数計算機。任意の底と指数を使用したべき乗を計算します。展開形式と科学計数法を取得します。負の指数と特殊なケースを処理します。",
    keywords: ["指数計算機", "べき乗計算機", "底指数", "科学計数法", "指数関数"],
    inputs: {
      base: {
        label: "底",
        help: "べき乗で上げられる数値。",
      },
      exponent: {
        label: "指数",
        help: "底を上げるべき乗。正、負、またはゼロにすることができます。",
      },
    },
    outputs: {
      result: {
        label: "結果",
        help: "底を指数に上げた値。",
      },
      expanded: {
        label: "展開",
        help: "計算を展開形式で表示します（小さい指数の場合）。",
      },
      scientific: {
        label: "科学計数法",
        help: "科学計数法で表現された結果。",
      },
    },
    errors: {
      invalidInput: "入力値が無効です。",
    },
  },
  ko: {
    title: "지수 계산기",
    short: "거듭제곱과 지수를 계산합니다. 밑^지수, 전개 표기법 및 과학 표기법을 찾습니다.",
    description: "무료 지수 계산기입니다. 모든 밑과 지수로 거듭제곱을 계산합니다. 전개 표기법과 과학 표기법을 얻습니다. 음의 지수와 특수한 경우를 처리합니다.",
    keywords: ["지수 계산기", "거듭제곱 계산기", "밑 지수", "과학 표기법", "지수"],
    inputs: {
      base: {
        label: "밑",
        help: "거듭제곱으로 올려지는 숫자입니다.",
      },
      exponent: {
        label: "지수",
        help: "밑을 올릴 거듭제곱입니다. 양수, 음수 또는 0일 수 있습니다.",
      },
    },
    outputs: {
      result: {
        label: "결과",
        help: "밑을 지수로 올린 값입니다.",
      },
      expanded: {
        label: "전개",
        help: "계산을 전개된 형태로 표시합니다(작은 지수의 경우).",
      },
      scientific: {
        label: "과학 표기법",
        help: "과학 표기법으로 표현된 결과입니다.",
      },
    },
    errors: {
      invalidInput: "입력값이 유효하지 않습니다.",
    },
  },
  hi: {
    title: "घातांक कैलकुलेटर",
    short: "शक्तियों और घातांक की गणना करें। आधार^घातांक, विस्तृत संकेतन और वैज्ञानिक संकेतन खोजें।",
    description: "मुफ़्त घातांक कैलकुलेटर। किसी भी आधार और घातांक के साथ शक्तियों की गणना करें। विस्तृत संकेतन और वैज्ञानिक संकेतन प्राप्त करें। नकारात्मक घातांक और विशेष मामलों को संभालता है।",
    keywords: ["घातांक कैलकुलेटर", "शक्ति कैलकुलेटर", "आधार घातांक", "वैज्ञानिक संकेतन", "घातीय"],
    inputs: {
      base: {
        label: "आधार",
        help: "वह संख्या जिसे शक्ति तक बढ़ाया जा रहा है।",
      },
      exponent: {
        label: "घातांक",
        help: "वह शक्ति जिस तक आधार को बढ़ाया जाता है। सकारात्मक, नकारात्मक या शून्य हो सकता है।",
      },
    },
    outputs: {
      result: {
        label: "परिणाम",
        help: "आधार को घातांक तक बढ़ाया गया मान।",
      },
      expanded: {
        label: "विस्तृत",
        help: "गणना को विस्तृत रूप में दिखाता है (छोटे घातांक के लिए)।",
      },
      scientific: {
        label: "वैज्ञानिक संकेतन",
        help: "परिणाम वैज्ञानिक संकेतन में व्यक्त किया गया।",
      },
    },
    errors: {
      invalidInput: "अमान्य इनपुट मान।",
    },
  },
};

export default i18n;
