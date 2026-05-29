import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Factorial Calculator — n! for Any Integer",
    short: "Compute the factorial of any integer from 0 to 170, including large numbers using arbitrary precision.",
    description:
      "Free factorial calculator. Enter n between 0 and 170 and instantly get n! — the product of all positive integers up to n. Handles huge numbers with BigInt precision above 21!. Perfect for combinatorics, probability, and math coursework.",
    keywords: [
      "factorial calculator",
      "n factorial",
      "n! calculator",
      "factorial math",
      "big factorial",
      "combinatorics calculator",
      "0 factorial",
    ],
    inputs: {
      n: {
        label: "n (integer)",
        help: "Non-negative integer between 0 and 170. Values above 21 use BigInt for exact results.",
      },
    },
    outputs: {
      value: {
        label: "n! (Factorial)",
        help: "The exact product 1 × 2 × 3 × … × n. Displayed as a BigInt string for n &gt; 21.",
      },
      isBigInt: {
        label: "Big Integer?",
        help: "True when the result exceeds JavaScript's safe integer range and BigInt arithmetic is used.",
      },
    },
    errors: {
      outOfRange: "n must be a non-negative integer between 0 and 170.",
    },
    faq: [
      {
        q: "What is a factorial?",
        a: "The factorial of a non-negative integer n, written n!, is the product of all positive integers from 1 to n. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120. By convention, 0! = 1.",
      },
      {
        q: "Why is 0! equal to 1?",
        a: "0! = 1 is a mathematical convention that makes combinatorial formulas consistent. For example, C(n,0) = n! / (0! × n!) = 1, which correctly states there is exactly one way to choose zero items. The empty product is defined as 1.",
      },
      {
        q: "Why is the maximum n limited to 170?",
        a: "170! ≈ 7.26 × 10^306 is the largest factorial that fits in a IEEE 754 double-precision float. 171! would be Infinity in standard floating-point. This calculator uses exact BigInt arithmetic for values above 21!, so results up to 170! are exact integers.",
      },
      {
        q: "Where are factorials used?",
        a: "Factorials appear in combinations C(n,r) = n!/(r!(n-r)!), permutations P(n,r) = n!/(n-r)!, Taylor series expansions (e.g., e^x = Σ x^n/n!), the gamma function, Stirling's approximation, and probability distributions like the Poisson and binomial.",
      },
      {
        q: "What is Stirling's approximation for large factorials?",
        a: "For large n, ln(n!) ≈ n·ln(n) − n + ½·ln(2πn). This approximation becomes very accurate for n above 10 and is used in statistical mechanics and information theory where exact computation is impractical.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Fatorial — n! para qualquer inteiro",
    short: "Calcule o fatorial de qualquer inteiro de 0 a 170, incluindo números grandes.",
    description:
      "Calculadora gratuita de fatorial. Introduza n entre 0 e 170 e obtenha n! — o produto de todos os inteiros positivos até n. Suporta números enormes com BigInt.",
    keywords: ["fatorial", "calculadora fatorial", "n!", "0 fatorial", "combinatória fatorial"],
    inputs: {
      n: {
        label: "n (integer)",
        help: "Non-negative integer between 0 and 170. Values above 21 use BigInt for exact results.",
      },
    },
    outputs: {
      value: {
        label: "n! (Factorial)",
        help: "The exact product 1 × 2 × 3 × … × n. Displayed as a BigInt string for n &gt; 21.",
      },
      isBigInt: {
        label: "Big Integer?",
        help: "True when the result exceeds JavaScript's safe integer range and BigInt arithmetic is used.",
      },
    },
    errors: {
      outOfRange: "n must be a non-negative integer between 0 and 170.",
    },
    faq: [
      {
        q: "What is a factorial?",
        a: "The factorial of a non-negative integer n, written n!, is the product of all positive integers from 1 to n. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120. By convention, 0! = 1.",
      },
      {
        q: "Why is 0! equal to 1?",
        a: "0! = 1 is a mathematical convention that makes combinatorial formulas consistent. For example, C(n,0) = n! / (0! × n!) = 1, which correctly states there is exactly one way to choose zero items. The empty product is defined as 1.",
      },
      {
        q: "Why is the maximum n limited to 170?",
        a: "170! ≈ 7.26 × 10^306 is the largest factorial that fits in a IEEE 754 double-precision float. 171! would be Infinity in standard floating-point. This calculator uses exact BigInt arithmetic for values above 21!, so results up to 170! are exact integers.",
      },
      {
        q: "Where are factorials used?",
        a: "Factorials appear in combinations C(n,r) = n!/(r!(n-r)!), permutations P(n,r) = n!/(n-r)!, Taylor series expansions (e.g., e^x = Σ x^n/n!), the gamma function, Stirling's approximation, and probability distributions like the Poisson and binomial.",
      },
      {
        q: "What is Stirling's approximation for large factorials?",
        a: "For large n, ln(n!) ≈ n·ln(n) − n + ½·ln(2πn). This approximation becomes very accurate for n above 10 and is used in statistical mechanics and information theory where exact computation is impractical.",
      },
    ],
  },
  id: {
    title: "Kalkulator Faktorial — n! untuk Bilangan Bulat",
    short: "Hitung faktorial dari bilangan bulat 0 sampai 170, termasuk bilangan besar.",
    description:
      "Kalkulator faktorial gratis. Masukkan n antara 0 dan 170 untuk mendapatkan n! — hasil perkalian semua bilangan positif sampai n. Mendukung bilangan besar dengan BigInt.",
    keywords: ["faktorial", "kalkulator faktorial", "n!", "0 faktorial", "kombinatorik"],
    inputs: {
      n: {
        label: "n (integer)",
        help: "Non-negative integer between 0 and 170. Values above 21 use BigInt for exact results.",
      },
    },
    outputs: {
      value: {
        label: "n! (Factorial)",
        help: "The exact product 1 × 2 × 3 × … × n. Displayed as a BigInt string for n &gt; 21.",
      },
      isBigInt: {
        label: "Big Integer?",
        help: "True when the result exceeds JavaScript's safe integer range and BigInt arithmetic is used.",
      },
    },
    errors: {
      outOfRange: "n must be a non-negative integer between 0 and 170.",
    },
    faq: [
      {
        q: "What is a factorial?",
        a: "The factorial of a non-negative integer n, written n!, is the product of all positive integers from 1 to n. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120. By convention, 0! = 1.",
      },
      {
        q: "Why is 0! equal to 1?",
        a: "0! = 1 is a mathematical convention that makes combinatorial formulas consistent. For example, C(n,0) = n! / (0! × n!) = 1, which correctly states there is exactly one way to choose zero items. The empty product is defined as 1.",
      },
      {
        q: "Why is the maximum n limited to 170?",
        a: "170! ≈ 7.26 × 10^306 is the largest factorial that fits in a IEEE 754 double-precision float. 171! would be Infinity in standard floating-point. This calculator uses exact BigInt arithmetic for values above 21!, so results up to 170! are exact integers.",
      },
      {
        q: "Where are factorials used?",
        a: "Factorials appear in combinations C(n,r) = n!/(r!(n-r)!), permutations P(n,r) = n!/(n-r)!, Taylor series expansions (e.g., e^x = Σ x^n/n!), the gamma function, Stirling's approximation, and probability distributions like the Poisson and binomial.",
      },
      {
        q: "What is Stirling's approximation for large factorials?",
        a: "For large n, ln(n!) ≈ n·ln(n) − n + ½·ln(2πn). This approximation becomes very accurate for n above 10 and is used in statistical mechanics and information theory where exact computation is impractical.",
      },
    ],
  },


  tr: {
    title: "Faktöriyel Hesaplayıcı — Herhangi Bir Tamsayının n! Değeri",
    short: "0'dan 170'e kadar herhangi bir tamsayının faktöriyelini, büyük sayılar dahil, anında hesaplayın.",
    description:
      "Ücretsiz faktöriyel hesaplayıcı. 0 ile 170 arasında bir n girin ve n!'yi anında öğrenin. 21!'in üzerindeki değerler için BigInt hassasiyeti kullanılır. Kombinatorik, olasılık ve matematik dersleri için idealdir.",
    keywords: [
      "faktöriyel hesaplayıcı",
      "n faktöriyel",
      "n! hesaplama",
      "faktöriyel matematik",
      "büyük faktöriyel",
      "kombinatorik hesaplayıcı",
      "0 faktöriyel",
    ],
    inputs: {
      n: {
        label: "n (tamsayı)",
        help: "0 ile 170 arasında negatif olmayan bir tamsayı. 21'in üzerindeki değerler kesin sonuçlar için BigInt kullanır.",
      },
    },
    outputs: {
      value: {
        label: "n! (Faktöriyel)",
        help: "1 × 2 × 3 × … × n çarpımının kesin sonucu. n &gt; 21 için BigInt dizesi olarak gösterilir.",
      },
      isBigInt: {
        label: "Büyük Tamsayı mı?",
        help: "Sonuç JavaScript'in güvenli tamsayı aralığını aştığında ve BigInt aritmetiği kullanıldığında true döner.",
      },
    },
    errors: {
      outOfRange: "n, 0 ile 170 arasında negatif olmayan bir tamsayı olmalıdır.",
    },
    faq: [
      {
        q: "Faktöriyel nedir?",
        a: "Negatif olmayan bir n tamsayısının faktöriyeli, n! olarak yazılır ve 1'den n'e kadar tüm pozitif tamsayıların çarpımıdır. Örneğin 5! = 5 × 4 × 3 × 2 × 1 = 120. Kural olarak 0! = 1'dir.",
      },
      {
        q: "Neden 0! = 1'dir?",
        a: "0! = 1 tanımı, kombinatorik formüllerin tutarlı olmasını sağlayan matematiksel bir kuraldır. Örneğin C(n,0) = n!/(0!×n!) = 1 sonucu, sıfır eleman seçmenin tam olarak bir yolu olduğunu doğru biçimde ifade eder.",
      },
      {
        q: "Maksimum n neden 170 ile sınırlıdır?",
        a: "170! ≈ 7.26 × 10^306, IEEE 754 çift duyarlıklı kayan nokta sayısına sığan en büyük faktöriyeldir. Bu hesaplayıcı, 21!'in üzerindeki değerler için BigInt aritmetiği kullandığından sonuçlar tam tamsayıdır.",
      },
      {
        q: "Faktöriyeller nerede kullanılır?",
        a: "Faktöriyeller; kombinasyon C(n,r)=n!/(r!(n-r)!), permütasyon P(n,r)=n!/(n-r)!, Taylor serisi açılımları, gama fonksiyonu ve Poisson ile binom dağılımları gibi alanlarda kullanılır.",
      },
      {
        q: "Büyük faktöriyeller için Stirling yaklaşımı nedir?",
        a: "Büyük n için ln(n!) ≈ n·ln(n) − n + ½·ln(2πn). Bu yaklaşım n &gt; 10 için oldukça isabetli olup istatistiksel mekanik ve bilgi teorisinde kullanılır.",
      },
    ],
  },

  de: {
    title: "Fakultätsrechner — n! für jede ganze Zahl",
    short: "Berechnen Sie die Fakultät einer ganzen Zahl von 0 bis 170, auch für sehr große Zahlen.",
    description:
      "Kostenloser Fakultätsrechner. Geben Sie n zwischen 0 und 170 ein und erhalten Sie sofort n!. Für Werte über 21 wird BigInt-Arithmetik für genaue Ergebnisse verwendet.",
    keywords: [
      "Fakultätsrechner",
      "n Fakultät",
      "n! berechnen",
      "Fakultät Mathematik",
      "Kombinatorik Rechner",
      "Fakultät Formel",
      "0 Fakultät",
    ],
    inputs: {
      n: { label: "n (ganze Zahl)", help: "Nicht-negative ganze Zahl zwischen 0 und 170." },
    },
    outputs: {
      value: { label: "n! (Fakultät)", help: "Das exakte Produkt 1 × 2 × 3 × … × n." },
      isBigInt: { label: "Große Zahl?", help: "True, wenn BigInt-Arithmetik für das Ergebnis verwendet wird." },
    },
    errors: {
      outOfRange: "n muss eine nicht-negative ganze Zahl zwischen 0 und 170 sein.",
    },
    faq: [
      {
        q: "Was ist eine Fakultät?",
        a: "Die Fakultät einer nicht-negativen ganzen Zahl n, geschrieben n!, ist das Produkt aller positiven ganzen Zahlen von 1 bis n. Zum Beispiel: 5! = 120. Per Konvention gilt 0! = 1.",
      },
      {
        q: "Wo werden Fakultäten verwendet?",
        a: "Fakultäten kommen in Kombinationen, Permutationen, Taylor-Reihen, der Gamma-Funktion und der Poisson- sowie Binomialverteilung vor.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Factorielle — n! pour tout entier",
    short: "Calculez la factorielle de n'importe quel entier de 0 à 170, y compris les très grands nombres.",
    description:
      "Calculateur gratuit de factorielle. Entrez n entre 0 et 170 pour obtenir instantanément n!. Pour les valeurs supérieures à 21, la précision BigInt est utilisée.",
    keywords: [
      "calculateur factorielle",
      "n factorielle",
      "calcul n!",
      "factorielle mathématique",
      "calculateur combinatoire",
      "factorielle formule",
      "0 factorielle",
    ],
    inputs: {
      n: { label: "n (entier)", help: "Entier non négatif entre 0 et 170." },
    },
    outputs: {
      value: { label: "n! (Factorielle)", help: "Le produit exact 1 × 2 × 3 × … × n." },
      isBigInt: { label: "Grand entier ?", help: "Vrai lorsque l'arithmétique BigInt est utilisée pour le résultat." },
    },
    errors: {
      outOfRange: "n doit être un entier non négatif entre 0 et 170.",
    },
    faq: [
      {
        q: "Qu'est-ce qu'une factorielle ?",
        a: "La factorielle d'un entier non négatif n, notée n!, est le produit de tous les entiers positifs de 1 à n. Par exemple : 5! = 120. Par convention, 0! = 1.",
      },
      {
        q: "Où les factorielles sont-elles utilisées ?",
        a: "Les factorielles apparaissent dans les combinaisons, permutations, séries de Taylor, la fonction gamma et les distributions de Poisson et binomiale.",
      },
    ],
  },

  es: {
    title: "Calculadora de Factorial — n! para cualquier entero",
    short: "Calcula el factorial de cualquier entero de 0 a 170, incluyendo números muy grandes.",
    description:
      "Calculadora gratuita de factorial. Introduce n entre 0 y 170 y obtén n! al instante. Para valores superiores a 21 se usa precisión BigInt para resultados exactos.",
    keywords: [
      "calculadora factorial",
      "n factorial",
      "calcular n!",
      "factorial matemáticas",
      "calculadora combinatoria",
      "fórmula factorial",
      "factorial de 0",
    ],
    inputs: {
      n: { label: "n (entero)", help: "Entero no negativo entre 0 y 170." },
    },
    outputs: {
      value: { label: "n! (Factorial)", help: "El producto exacto 1 × 2 × 3 × … × n." },
      isBigInt: { label: "¿Entero grande?", help: "Verdadero cuando se usa aritmética BigInt para el resultado." },
    },
    errors: {
      outOfRange: "n debe ser un entero no negativo entre 0 y 170.",
    },
    faq: [
      {
        q: "¿Qué es un factorial?",
        a: "El factorial de un entero no negativo n, escrito n!, es el producto de todos los enteros positivos del 1 al n. Por ejemplo: 5! = 120. Por convención, 0! = 1.",
      },
      {
        q: "¿Dónde se usan los factoriales?",
        a: "Los factoriales aparecen en combinaciones, permutaciones, series de Taylor, la función gamma y las distribuciones de Poisson y binomial.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Fattoriale — n! per qualsiasi intero",
    short: "Calcola il fattoriale di qualsiasi intero da 0 a 170, anche per numeri molto grandi.",
    description:
      "Calcolatore gratuito di fattoriale. Inserisci n tra 0 e 170 per ottenere istantaneamente n!. Per valori superiori a 21 viene usata l'aritmetica BigInt per risultati esatti.",
    keywords: [
      "calcolatore fattoriale",
      "n fattoriale",
      "calcolo n!",
      "fattoriale matematica",
      "calcolatore combinatoria",
      "formula fattoriale",
      "fattoriale di 0",
    ],
    inputs: {
      n: { label: "n (intero)", help: "Intero non negativo tra 0 e 170." },
    },
    outputs: {
      value: { label: "n! (Fattoriale)", help: "Il prodotto esatto 1 × 2 × 3 × … × n." },
      isBigInt: { label: "Numero grande?", help: "Vero quando l'aritmetica BigInt è utilizzata per il risultato." },
    },
    errors: {
      outOfRange: "n deve essere un intero non negativo tra 0 e 170.",
    },
    faq: [
      {
        q: "Cos'è un fattoriale?",
        a: "Il fattoriale di un intero non negativo n, scritto n!, è il prodotto di tutti gli interi positivi da 1 a n. Ad esempio: 5! = 120. Per convenzione, 0! = 1.",
      },
      {
        q: "Dove si usano i fattoriali?",
        a: "I fattoriali compaiono in combinazioni, permutazioni, serie di Taylor, funzione gamma e distribuzioni di Poisson e binomiale.",
      },
    ],
  },

  ar: {
    title: "حاسبة المضروب — n! لأي عدد صحيح",
    short: "احسب مضروب أي عدد صحيح من 0 إلى 170، بما في ذلك الأعداد الكبيرة جداً.",
    description:
      "حاسبة مجانية للمضروب. أدخل n بين 0 و170 للحصول على n! فوراً. تستخدم الحاسبة دقة BigInt للقيم الأكبر من 21 لضمان النتائج الدقيقة.",
    keywords: [
      "حاسبة المضروب",
      "n مضروب",
      "حساب n!",
      "المضروب الرياضي",
      "حاسبة التوافيق",
      "صيغة المضروب",
      "مضروب الصفر",
    ],
    inputs: {
      n: { label: "n (عدد صحيح)", help: "عدد صحيح غير سالب بين 0 و170." },
    },
    outputs: {
      value: { label: "n! (المضروب)", help: "حاصل ضرب 1 × 2 × 3 × … × n بشكل دقيق." },
      isBigInt: { label: "عدد كبير؟", help: "يكون صحيحاً عند استخدام حسابات BigInt للنتيجة." },
    },
    errors: {
      outOfRange: "يجب أن يكون n عدداً صحيحاً غير سالب بين 0 و170.",
    },
    faq: [
      {
        q: "ما هو المضروب؟",
        a: "مضروب عدد صحيح غير سالب n، يُكتب n!، هو حاصل ضرب جميع الأعداد الصحيحة الموجبة من 1 إلى n. مثلاً: 5! = 120. بالتعريف، 0! = 1.",
      },
      {
        q: "أين يُستخدم المضروب؟",
        a: "يظهر المضروب في التوافيق والتباديل ومتسلسلات تايلور ودالة غاما وتوزيعات بواسون والتوزيع الثنائي.",
      },
    ],
  },

  ru: {
    title: "Калькулятор Факториала — n! для любого целого числа",
    short: "Вычислите факториал любого целого числа от 0 до 170, включая очень большие числа.",
    description:
      "Бесплатный калькулятор факториала. Введите n от 0 до 170 и мгновенно получите n!. Для значений больше 21 используется точная арифметика BigInt.",
    keywords: [
      "калькулятор факториала",
      "n факториал",
      "вычислить n!",
      "факториал математика",
      "комбинаторный калькулятор",
      "формула факториала",
      "факториал нуля",
    ],
    inputs: {
      n: { label: "n (целое число)", help: "Неотрицательное целое число от 0 до 170." },
    },
    outputs: {
      value: { label: "n! (Факториал)", help: "Точное произведение 1 × 2 × 3 × … × n." },
      isBigInt: { label: "Большое целое?", help: "True, когда используется арифметика BigInt для результата." },
    },
    errors: {
      outOfRange: "n должно быть неотрицательным целым числом от 0 до 170.",
    },
    faq: [
      {
        q: "Что такое факториал?",
        a: "Факториал неотрицательного целого числа n, обозначаемый n!, — это произведение всех положительных целых чисел от 1 до n. Например, 5! = 120. По определению, 0! = 1.",
      },
      {
        q: "Где применяются факториалы?",
        a: "Факториалы встречаются в комбинациях, перестановках, рядах Тейлора, гамма-функции, а также в распределениях Пуассона и биномиальном.",
      },
    ],
  },

  zh: {
    title: "阶乘计算器 — 任意整数的 n!",
    short: "即时计算 0 到 170 之间任意整数的阶乘，支持大整数精确计算。",
    description:
      "免费阶乘计算器。输入 0 到 170 之间的 n，立即得到 n!。超过 21! 时使用 BigInt 精确算法。适用于组合数学、概率和数学课程。",
    keywords: [
      "阶乘计算器",
      "n阶乘",
      "n!计算",
      "阶乘数学",
      "组合数计算",
      "阶乘公式",
      "0的阶乘",
    ],
    inputs: {
      n: { label: "n（整数）", help: "0 到 170 之间的非负整数。" },
    },
    outputs: {
      value: { label: "n!（阶乘）", help: "1 × 2 × 3 × … × n 的精确乘积。" },
      isBigInt: { label: "大整数？", help: "当使用 BigInt 运算时为真。" },
    },
    errors: {
      outOfRange: "n 必须是 0 到 170 之间的非负整数。",
    },
    faq: [
      {
        q: "什么是阶乘？",
        a: "非负整数 n 的阶乘，写作 n!，是从 1 到 n 所有正整数的乘积。例如：5! = 120。规定 0! = 1。",
      },
      {
        q: "阶乘有哪些应用？",
        a: "阶乘出现在组合数、排列数、泰勒级数、伽马函数以及泊松分布和二项分布中。",
      },
    ],
  },

  ja: {
    title: "階乗計算機 — 任意の整数の n!",
    short: "0 から 170 までの任意の整数の階乗を即座に計算します。大きな数も BigInt で正確に処理。",
    description:
      "無料の階乗計算機。0〜170 の n を入力するだけで n! を瞬時に計算します。21! を超える値は BigInt 演算で正確に処理されます。組み合わせ論・確率・数学の学習に最適です。",
    keywords: [
      "階乗計算機",
      "n階乗",
      "n!計算",
      "階乗 数学",
      "組み合わせ論 計算機",
      "階乗公式",
      "0の階乗",
    ],
    inputs: {
      n: { label: "n（整数）", help: "0〜170 の非負整数。" },
    },
    outputs: {
      value: { label: "n!（階乗）", help: "1 × 2 × 3 × … × n の正確な積。" },
      isBigInt: { label: "大きな整数？", help: "BigInt 演算が使用される場合に true になります。" },
    },
    errors: {
      outOfRange: "n は 0〜170 の非負整数でなければなりません。",
    },
    faq: [
      {
        q: "階乗とは何ですか？",
        a: "非負整数 n の階乗（n! と表記）は、1 から n までの全正整数の積です。例：5! = 120。定義上、0! = 1 です。",
      },
      {
        q: "階乗はどこで使われますか？",
        a: "階乗は組み合わせ数・順列数・テイラー展開・ガンマ関数・ポアソン分布・二項分布などで登場します。",
      },
    ],
  },

  ko: {
    title: "팩토리얼 계산기 — 임의의 정수의 n!",
    short: "0부터 170까지 임의의 정수의 팩토리얼을 즉시 계산합니다. 큰 수는 BigInt로 정확하게 처리됩니다.",
    description:
      "무료 팩토리얼 계산기. n을 0부터 170 사이에서 입력하면 n!을 즉시 계산합니다. 21! 초과 값은 BigInt 정밀도 연산을 사용합니다. 조합론, 확률, 수학 학습에 최적입니다.",
    keywords: [
      "팩토리얼 계산기",
      "n 팩토리얼",
      "n! 계산",
      "팩토리얼 수학",
      "조합론 계산기",
      "팩토리얼 공식",
      "0의 팩토리얼",
    ],
    inputs: {
      n: { label: "n (정수)", help: "0부터 170 사이의 음이 아닌 정수." },
    },
    outputs: {
      value: { label: "n! (팩토리얼)", help: "1 × 2 × 3 × … × n의 정확한 곱." },
      isBigInt: { label: "큰 정수?", help: "BigInt 산술이 사용될 때 true입니다." },
    },
    errors: {
      outOfRange: "n은 0에서 170 사이의 음이 아닌 정수여야 합니다.",
    },
    faq: [
      {
        q: "팩토리얼이란 무엇인가요?",
        a: "음이 아닌 정수 n의 팩토리얼(n!로 표기)은 1부터 n까지 모든 양의 정수의 곱입니다. 예: 5! = 120. 정의상 0! = 1입니다.",
      },
      {
        q: "팩토리얼은 어디에 사용되나요?",
        a: "팩토리얼은 조합수, 순열수, 테일러 급수, 감마 함수, 포아송 분포 및 이항 분포에 등장합니다.",
      },
    ],
  },

  hi: {
    title: "भाज्य कैलकुलेटर — किसी भी पूर्णांक का n!",
    short: "0 से 170 तक किसी भी पूर्णांक का भाज्य तुरंत गणना करें, बड़े संख्याओं के लिए BigInt सटीकता के साथ।",
    description:
      "मुफ़्त भाज्य कैलकुलेटर। 0 से 170 के बीच n दर्ज करें और n! तुरंत प्राप्त करें। 21! से ऊपर के मानों के लिए BigInt अंकगणित का उपयोग किया जाता है। संयोजन-विज्ञान, संभाविता और गणित के लिए आदर्श।",
    keywords: [
      "भाज्य कैलकुलेटर",
      "n भाज्य",
      "n! गणना",
      "भाज्य गणित",
      "संयोजन कैलकुलेटर",
      "भाज्य सूत्र",
      "0 का भाज्य",
    ],
    inputs: {
      n: { label: "n (पूर्णांक)", help: "0 से 170 के बीच गैर-ऋणात्मक पूर्णांक।" },
    },
    outputs: {
      value: { label: "n! (भाज्य)", help: "1 × 2 × 3 × … × n का सटीक गुणनफल।" },
      isBigInt: { label: "बड़ा पूर्णांक?", help: "जब BigInt अंकगणित का उपयोग किया जाता है तब सच होता है।" },
    },
    errors: {
      outOfRange: "n, 0 से 170 के बीच गैर-ऋणात्मक पूर्णांक होना चाहिए।",
    },
    faq: [
      {
        q: "भाज्य क्या होता है?",
        a: "किसी गैर-ऋणात्मक पूर्णांक n का भाज्य, n! के रूप में लिखा जाता है, 1 से n तक सभी धनात्मक पूर्णांकों का गुणनफल है। उदाहरण: 5! = 120. परिभाषानुसार 0! = 1।",
      },
      {
        q: "भाज्य का उपयोग कहाँ होता है?",
        a: "भाज्य संयोजन, क्रमचय, टेलर श्रेणी, गामा फ़ंक्शन तथा पॉइसन और द्विपद वितरणों में प्रकट होता है।",
      },
    ],
  },
};

export default i18n;
