import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Square Root Calculator",
    short: "Calculate square roots and nth roots, check perfect squares, and simplify radical expressions.",
    description:
      "Free square root calculator. Compute the square root or any nth root of a number. Instantly check if the number is a perfect square, and get the simplified radical form (e.g., √12 = 2√3).",
    keywords: [
      "square root calculator",
      "nth root calculator",
      "perfect square checker",
      "simplify radical",
      "cube root calculator",
      "radical expression",
      "sqrt",
    ],
    inputs: {
      value: {
        label: "Number",
        help: "Enter a non-negative number to find its root. Can be a decimal.",
      },
      nthRoot: {
        label: "Root index (n)",
        help: "Set to 2 for square root (default), 3 for cube root, etc.",
      },
    },
    outputs: {
      root: {
        label: "Root Value",
        help: "The computed nth root of the number, rounded to 6 decimal places.",
      },
      simplifiedCoefficient: {
        label: "Simplified — Coefficient",
        help: "The coefficient outside the radical sign after simplification (integer part).",
      },
      simplifiedRadicand: {
        label: "Simplified — Radicand",
        help: "The number remaining under the radical sign after simplification.",
      },
      isPerfectSquare: {
        label: "Is Perfect Square?",
        help: "True if the number is a perfect square (e.g., 4, 9, 16, 25).",
      },
      isPerfectNthRoot: {
        label: "Is Perfect nth Root?",
        help: "True if the nth root is an integer (no decimal remainder).",
      },
    },
    faq: [
      {
        q: "What is a perfect square?",
        a: "A perfect square is an integer that is the square of another integer. Examples: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Their square roots are all whole numbers.",
      },
      {
        q: "What does simplified radical form mean?",
        a: "Simplified radical form means pulling out any perfect-square factors from under the radical. For example, √12 = √(4×3) = 2√3. The coefficient is 2 and the radicand is 3.",
      },
      {
        q: "How do you calculate the cube root?",
        a: "Set the root index (n) to 3. The cube root of 27 = 27^(1/3) = 3. The cube root of 8 = 2.",
      },
      {
        q: "Can you take the square root of a negative number?",
        a: "In the real number system, negative numbers don't have square roots. This calculator requires a non-negative input. Imaginary numbers (i = √(−1)) are a separate topic in complex number theory.",
      },
    ],
  },

  tr: {
    title: "Karekök Hesaplayıcı",
    short: "Karekök ve n'inci kök hesaplayın, tam kare kontrolü yapın ve radikal ifadeyi sadeleştirin.",
    description:
      "Ücretsiz karekök hesaplayıcı. Bir sayının karekökünü veya herhangi bir n'inci kökünü hesaplayın. Sayının tam kare olup olmadığını kontrol edin ve sadeleştirilmiş radikal formu alın.",
    keywords: [
      "karekök hesaplayıcı",
      "n'inci kök",
      "tam kare kontrolü",
      "radikal sadeleştirme",
      "küp kök hesaplayıcı",
      "kök hesaplama",
      "sqrt",
    ],
    inputs: {
      value: {
        label: "Sayı",
        help: "Kökünü bulmak istediğiniz negatif olmayan sayıyı girin. Ondalık sayı olabilir.",
      },
      nthRoot: {
        label: "Kök indisi (n)",
        help: "Karekök için 2 (varsayılan), küp kök için 3, vb. ayarlayın.",
      },
    },
    outputs: {
      root: {
        label: "Kök Değeri",
        help: "Sayının n'inci kök değeri, 6 ondalık basamağa yuvarlanmış.",
      },
      simplifiedCoefficient: {
        label: "Sadeleştirilmiş — Katsayı",
        help: "Sadeleştirmeden sonra radikal işaretinin dışında kalan tam sayı kısım.",
      },
      simplifiedRadicand: {
        label: "Sadeleştirilmiş — Radikan",
        help: "Sadeleştirmeden sonra radikal işaretinin altında kalan sayı.",
      },
      isPerfectSquare: {
        label: "Tam Kare mi?",
        help: "Sayı tam kare ise doğru döner (ör: 4, 9, 16, 25).",
      },
      isPerfectNthRoot: {
        label: "Tam n'inci Kök mü?",
        help: "n'inci kök tam sayı ise doğru döner.",
      },
    },
    faq: [
      {
        q: "Tam kare nedir?",
        a: "Tam kare, başka bir tam sayının karesi olan pozitif tam sayılardır. Örnekler: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Bunların karekökü tam sayıdır.",
      },
      {
        q: "Sadeleştirilmiş radikal form ne demektir?",
        a: "Radikal işaretinin altındaki tam kare çarpanları dışarı çıkarmak demektir. Örnek: √12 = √(4×3) = 2√3. Burada katsayı 2, radikan ise 3'tür.",
      },
      {
        q: "Küp kökü nasıl hesaplanır?",
        a: "Kök indisini 3 olarak ayarlayın. 27'nin küp kökü = 27^(1/3) = 3. 8'in küp kökü = 2.",
      },
      {
        q: "Negatif sayının karekökü alınabilir mi?",
        a: "Gerçek sayı sisteminde negatif sayıların karekökü yoktur. Bu hesaplayıcı negatif olmayan girişler gerektirir. Karmaşık sayılar farklı bir konudur.",
      },
    ],
  },

  de: {
    title: "Quadratwurzel-Rechner",
    short: "Quadratwurzeln und n-te Wurzeln berechnen, perfekte Quadrate prüfen und Wurzelausdrücke vereinfachen.",
    description:
      "Kostenloser Quadratwurzel-Rechner. Berechnen Sie die Quadratwurzel oder beliebige n-te Wurzel einer Zahl. Prüfen Sie, ob die Zahl eine perfekte Quadratzahl ist, und erhalten Sie die vereinfachte Radikalform.",
    keywords: [
      "Quadratwurzel Rechner",
      "n-te Wurzel",
      "perfekte Quadratzahl",
      "Wurzel vereinfachen",
      "Kubikwurzel",
      "Radikalausdruck",
      "sqrt",
    ],
    inputs: {
      value: { label: "Zahl", help: "Nicht-negative Zahl, deren Wurzel berechnet werden soll." },
      nthRoot: { label: "Wurzelexponent (n)", help: "2 für Quadratwurzel (Standard), 3 für Kubikwurzel usw." },
    },
    outputs: {
      root: { label: "Wurzelwert", help: "Berechnete n-te Wurzel, auf 6 Dezimalstellen gerundet." },
      simplifiedCoefficient: { label: "Vereinfacht — Koeffizient", help: "Ganzzahliger Teil außerhalb des Wurzelzeichens nach Vereinfachung." },
      simplifiedRadicand: { label: "Vereinfacht — Radikand", help: "Zahl unter dem Wurzelzeichen nach Vereinfachung." },
      isPerfectSquare: { label: "Perfektes Quadrat?", help: "Wahr, wenn die Zahl ein perfektes Quadrat ist (z.B. 4, 9, 16)." },
      isPerfectNthRoot: { label: "Perfekte n-te Wurzel?", help: "Wahr, wenn die n-te Wurzel eine ganze Zahl ist." },
    },
    faq: [
      {
        q: "Was ist eine perfekte Quadratzahl?",
        a: "Eine perfekte Quadratzahl ist das Quadrat einer ganzen Zahl. Beispiele: 1, 4, 9, 16, 25. Ihre Quadratwurzeln sind ganze Zahlen.",
      },
      {
        q: "Was bedeutet vereinfachte Radikalform?",
        a: "Man zieht perfekte Quadratfaktoren aus dem Wurzelzeichen heraus. Beispiel: √12 = √(4×3) = 2√3. Koeffizient ist 2, Radikand ist 3.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Racine Carrée",
    short: "Calculez des racines carrées et des racines n-ièmes, vérifiez les carrés parfaits et simplifiez les expressions radicales.",
    description:
      "Calculateur de racine carrée gratuit. Calculez la racine carrée ou toute racine n-ième d'un nombre. Vérifiez si c'est un carré parfait et obtenez la forme radicale simplifiée.",
    keywords: [
      "calculateur racine carrée",
      "racine n-ième",
      "carré parfait",
      "simplifier radical",
      "racine cubique",
      "expression radicale",
      "sqrt",
    ],
    inputs: {
      value: { label: "Nombre", help: "Nombre non négatif dont vous souhaitez calculer la racine." },
      nthRoot: { label: "Indice de la racine (n)", help: "2 pour la racine carrée (défaut), 3 pour la racine cubique, etc." },
    },
    outputs: {
      root: { label: "Valeur de la racine", help: "Racine n-ième calculée, arrondie à 6 décimales." },
      simplifiedCoefficient: { label: "Simplifié — Coefficient", help: "Partie entière à l'extérieur du radical après simplification." },
      simplifiedRadicand: { label: "Simplifié — Radicande", help: "Nombre sous le radical après simplification." },
      isPerfectSquare: { label: "Carré parfait ?", help: "Vrai si le nombre est un carré parfait (ex: 4, 9, 16)." },
      isPerfectNthRoot: { label: "Racine n-ième parfaite ?", help: "Vrai si la racine n-ième est un entier." },
    },
    faq: [
      {
        q: "Qu'est-ce qu'un carré parfait ?",
        a: "Un carré parfait est le carré d'un entier. Exemples : 1, 4, 9, 16, 25. Leurs racines carrées sont des entiers.",
      },
      {
        q: "Que signifie la forme radicale simplifiée ?",
        a: "On extrait les facteurs qui sont des carrés parfaits du radical. Exemple : √12 = √(4×3) = 2√3. Le coefficient est 2, la radicande est 3.",
      },
    ],
  },

  es: {
    title: "Calculadora de Raíz Cuadrada",
    short: "Calcula raíces cuadradas y raíces n-ésimas, verifica cuadrados perfectos y simplifica expresiones radicales.",
    description:
      "Calculadora de raíz cuadrada gratuita. Calcula la raíz cuadrada o cualquier raíz n-ésima de un número. Verifica si es un cuadrado perfecto y obtén la forma radical simplificada.",
    keywords: [
      "calculadora raíz cuadrada",
      "raíz n-ésima",
      "cuadrado perfecto",
      "simplificar radical",
      "raíz cúbica",
      "expresión radical",
      "sqrt",
    ],
    inputs: {
      value: { label: "Número", help: "Número no negativo del que calcular la raíz." },
      nthRoot: { label: "Índice de la raíz (n)", help: "2 para raíz cuadrada (predeterminado), 3 para raíz cúbica, etc." },
    },
    outputs: {
      root: { label: "Valor de la raíz", help: "Raíz n-ésima calculada, redondeada a 6 decimales." },
      simplifiedCoefficient: { label: "Simplificado — Coeficiente", help: "Parte entera fuera del signo radical después de simplificar." },
      simplifiedRadicand: { label: "Simplificado — Radicando", help: "Número bajo el signo radical después de simplificar." },
      isPerfectSquare: { label: "¿Cuadrado perfecto?", help: "Verdadero si el número es un cuadrado perfecto (ej: 4, 9, 16)." },
      isPerfectNthRoot: { label: "¿Raíz n-ésima perfecta?", help: "Verdadero si la raíz n-ésima es un entero." },
    },
    faq: [
      {
        q: "¿Qué es un cuadrado perfecto?",
        a: "Un cuadrado perfecto es el cuadrado de un entero. Ejemplos: 1, 4, 9, 16, 25. Sus raíces cuadradas son enteros.",
      },
      {
        q: "¿Qué significa la forma radical simplificada?",
        a: "Se extraen los factores que son cuadrados perfectos del radical. Ejemplo: √12 = √(4×3) = 2√3. El coeficiente es 2 y el radicando es 3.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Radice Quadrata",
    short: "Calcola radici quadrate e radici n-esime, verifica quadrati perfetti e semplifica espressioni radicali.",
    description:
      "Calcolatore di radice quadrata gratuito. Calcola la radice quadrata o qualsiasi radice n-esima di un numero. Verifica se è un quadrato perfetto e ottieni la forma radicale semplificata.",
    keywords: [
      "calcolatore radice quadrata",
      "radice n-esima",
      "quadrato perfetto",
      "semplificare radicale",
      "radice cubica",
      "espressione radicale",
      "sqrt",
    ],
    inputs: {
      value: { label: "Numero", help: "Numero non negativo di cui calcolare la radice." },
      nthRoot: { label: "Indice della radice (n)", help: "2 per radice quadrata (predefinito), 3 per radice cubica, ecc." },
    },
    outputs: {
      root: { label: "Valore della radice", help: "Radice n-esima calcolata, arrotondata a 6 decimali." },
      simplifiedCoefficient: { label: "Semplificato — Coefficiente", help: "Parte intera fuori dal segno radicale dopo semplificazione." },
      simplifiedRadicand: { label: "Semplificato — Radicando", help: "Numero sotto il segno radicale dopo semplificazione." },
      isPerfectSquare: { label: "Quadrato perfetto?", help: "Vero se il numero è un quadrato perfetto (es: 4, 9, 16)." },
      isPerfectNthRoot: { label: "Radice n-esima perfetta?", help: "Vero se la radice n-esima è un intero." },
    },
    faq: [
      {
        q: "Cos'è un quadrato perfetto?",
        a: "Un quadrato perfetto è il quadrato di un intero. Esempi: 1, 4, 9, 16, 25. Le loro radici quadrate sono interi.",
      },
      {
        q: "Cosa significa forma radicale semplificata?",
        a: "Si estraggono i fattori che sono quadrati perfetti dal radicale. Esempio: √12 = √(4×3) = 2√3. Il coefficiente è 2 e il radicando è 3.",
      },
    ],
  },

  ar: {
    title: "حاسبة الجذر التربيعي",
    short: "احسب الجذر التربيعي والجذر النوني، تحقق من المربعات الكاملة، وبسّط العبارات الجذرية.",
    description:
      "حاسبة جذر تربيعي مجانية. احسب الجذر التربيعي أو أي جذر نوني لعدد ما. تحقق مما إذا كان العدد مربعًا كاملًا، واحصل على الصورة الجذرية المبسّطة.",
    keywords: [
      "حاسبة الجذر التربيعي",
      "الجذر النوني",
      "المربع الكامل",
      "تبسيط الجذر",
      "الجذر التكعيبي",
      "التعبير الجذري",
      "sqrt",
    ],
    inputs: {
      value: { label: "العدد", help: "عدد غير سالب لحساب جذره." },
      nthRoot: { label: "مؤشر الجذر (n)", help: "2 للجذر التربيعي (الافتراضي)، 3 للجذر التكعيبي، وهكذا." },
    },
    outputs: {
      root: { label: "قيمة الجذر", help: "الجذر النوني المحسوب، مقرّبًا إلى 6 منازل عشرية." },
      simplifiedCoefficient: { label: "المبسّط — المعامل", help: "الجزء الصحيح خارج إشارة الجذر بعد التبسيط." },
      simplifiedRadicand: { label: "المبسّط — الكمية تحت الجذر", help: "العدد المتبقي تحت إشارة الجذر بعد التبسيط." },
      isPerfectSquare: { label: "مربع كامل؟", help: "صحيح إذا كان العدد مربعًا كاملًا (مثال: 4، 9، 16)." },
      isPerfectNthRoot: { label: "جذر نوني كامل؟", help: "صحيح إذا كان الجذر النوني عددًا صحيحًا." },
    },
    faq: [
      {
        q: "ما هو المربع الكامل؟",
        a: "المربع الكامل هو عدد صحيح يمثّل مربع عدد صحيح آخر. أمثلة: 1، 4، 9، 16، 25. جذورها التربيعية أعداد صحيحة.",
      },
      {
        q: "ما معنى الصورة الجذرية المبسّطة؟",
        a: "يعني استخراج العوامل التي هي مربعات كاملة من تحت الجذر. مثال: √12 = √(4×3) = 2√3. المعامل 2 والكمية تحت الجذر 3.",
      },
    ],
  },

  ru: {
    title: "Калькулятор Квадратного Корня",
    short: "Вычислите квадратный и n-й корень, проверьте совершенные квадраты и упростите радикальные выражения.",
    description:
      "Бесплатный калькулятор квадратного корня. Вычислите квадратный корень или любой n-й корень числа. Проверьте, является ли число точным квадратом, и получите упрощённую форму радикала.",
    keywords: [
      "калькулятор квадратного корня",
      "n-й корень",
      "точный квадрат",
      "упростить радикал",
      "кубический корень",
      "радикальное выражение",
      "sqrt",
    ],
    inputs: {
      value: { label: "Число", help: "Неотрицательное число, корень которого нужно вычислить." },
      nthRoot: { label: "Показатель корня (n)", help: "2 для квадратного корня (по умолчанию), 3 для кубического и т.д." },
    },
    outputs: {
      root: { label: "Значение корня", help: "Вычисленный n-й корень, округлённый до 6 знаков." },
      simplifiedCoefficient: { label: "Упрощено — Коэффициент", help: "Целочисленная часть перед знаком корня после упрощения." },
      simplifiedRadicand: { label: "Упрощено — Подкоренное выражение", help: "Число под знаком корня после упрощения." },
      isPerfectSquare: { label: "Точный квадрат?", help: "Истина, если число является точным квадратом (напр., 4, 9, 16)." },
      isPerfectNthRoot: { label: "Точный n-й корень?", help: "Истина, если n-й корень является целым числом." },
    },
    faq: [
      {
        q: "Что такое точный квадрат?",
        a: "Точный квадрат — это целое число, равное квадрату другого целого числа. Примеры: 1, 4, 9, 16, 25. Их квадратные корни — целые числа.",
      },
      {
        q: "Что означает упрощённая радикальная форма?",
        a: "Нужно извлечь из-под корня все множители, являющиеся точными квадратами. Пример: √12 = √(4×3) = 2√3. Коэффициент — 2, подкоренное выражение — 3.",
      },
    ],
  },

  zh: {
    title: "平方根计算器",
    short: "计算平方根和 n 次方根，检查完全平方数，并化简根式表达式。",
    description:
      "免费平方根计算器。计算任意数的平方根或 n 次方根。检查该数是否为完全平方数，并获得化简后的根式形式（如 √12 = 2√3）。",
    keywords: [
      "平方根计算器",
      "n次方根",
      "完全平方数",
      "化简根式",
      "立方根计算器",
      "根式表达式",
      "sqrt",
    ],
    inputs: {
      value: { label: "数值", help: "输入需要计算根的非负数，可以是小数。" },
      nthRoot: { label: "根指数 (n)", help: "平方根设为 2（默认），立方根设为 3，以此类推。" },
    },
    outputs: {
      root: { label: "根值", help: "计算出的 n 次方根，精确到 6 位小数。" },
      simplifiedCoefficient: { label: "化简 — 系数", help: "化简后根号外的整数部分。" },
      simplifiedRadicand: { label: "化简 — 被开方数", help: "化简后根号内的数。" },
      isPerfectSquare: { label: "是否完全平方数？", help: "若该数是完全平方数（如 4、9、16），则为真。" },
      isPerfectNthRoot: { label: "是否完全 n 次方？", help: "若 n 次方根为整数，则为真。" },
    },
    faq: [
      {
        q: "什么是完全平方数？",
        a: "完全平方数是某个整数的平方。例如：1、4、9、16、25。它们的平方根是整数。",
      },
      {
        q: "化简根式是什么意思？",
        a: "将根号内所有完全平方因子提取到根号外。例如：√12 = √(4×3) = 2√3。系数为 2，被开方数为 3。",
      },
    ],
  },

  ja: {
    title: "平方根計算機",
    short: "平方根とn乗根を計算し、完全平方数を確認し、根号式を簡略化します。",
    description:
      "無料の平方根計算機。任意の数の平方根またはn乗根を計算します。完全平方数かどうかを確認し、簡略化された根号形式（例：√12 = 2√3）を取得します。",
    keywords: [
      "平方根計算機",
      "n乗根",
      "完全平方数",
      "根号を簡略化",
      "立方根計算機",
      "根号式",
      "sqrt",
    ],
    inputs: {
      value: { label: "数値", help: "根を求めたい非負の数を入力してください。小数も可能です。" },
      nthRoot: { label: "根の指数 (n)", help: "平方根は2（デフォルト）、立方根は3など。" },
    },
    outputs: {
      root: { label: "根の値", help: "計算されたn乗根。小数点以下6桁に丸められます。" },
      simplifiedCoefficient: { label: "簡略化 — 係数", help: "簡略化後に根号の外に出る整数部分。" },
      simplifiedRadicand: { label: "簡略化 — 被開方数", help: "簡略化後に根号内に残る数。" },
      isPerfectSquare: { label: "完全平方数？", help: "完全平方数（例：4、9、16）であれば真。" },
      isPerfectNthRoot: { label: "完全n乗根？", help: "n乗根が整数であれば真。" },
    },
    faq: [
      {
        q: "完全平方数とは何ですか？",
        a: "完全平方数は整数の2乗です。例：1、4、9、16、25。これらの平方根は整数です。",
      },
      {
        q: "簡略化された根号形式とは何ですか？",
        a: "根号内の完全平方因子を外に取り出します。例：√12 = √(4×3) = 2√3。係数は2、被開方数は3です。",
      },
    ],
  },

  ko: {
    title: "제곱근 계산기",
    short: "제곱근과 n제곱근을 계산하고, 완전제곱수를 확인하며, 근호 식을 간소화합니다.",
    description:
      "무료 제곱근 계산기. 임의의 수의 제곱근 또는 n제곱근을 계산합니다. 완전제곱수인지 확인하고 간소화된 근호 형식(예: √12 = 2√3)을 얻습니다.",
    keywords: [
      "제곱근 계산기",
      "n제곱근",
      "완전제곱수",
      "근호 간소화",
      "세제곱근 계산기",
      "근호 식",
      "sqrt",
    ],
    inputs: {
      value: { label: "숫자", help: "근을 구할 음수가 아닌 숫자를 입력하세요. 소수도 가능합니다." },
      nthRoot: { label: "근 지수 (n)", help: "제곱근은 2 (기본), 세제곱근은 3 등으로 설정합니다." },
    },
    outputs: {
      root: { label: "근 값", help: "계산된 n제곱근. 소수점 6자리로 반올림됩니다." },
      simplifiedCoefficient: { label: "간소화 — 계수", help: "간소화 후 근호 밖의 정수 부분." },
      simplifiedRadicand: { label: "간소화 — 피개방수", help: "간소화 후 근호 안에 남는 수." },
      isPerfectSquare: { label: "완전제곱수?", help: "완전제곱수이면 참 (예: 4, 9, 16)." },
      isPerfectNthRoot: { label: "완전 n제곱근?", help: "n제곱근이 정수이면 참." },
    },
    faq: [
      {
        q: "완전제곱수란 무엇인가요?",
        a: "완전제곱수는 어떤 정수의 제곱인 수입니다. 예: 1, 4, 9, 16, 25. 이들의 제곱근은 정수입니다.",
      },
      {
        q: "간소화된 근호 형식이란 무엇인가요?",
        a: "근호 안의 완전제곱 인수를 밖으로 꺼내는 것입니다. 예: √12 = √(4×3) = 2√3. 계수는 2, 피개방수는 3입니다.",
      },
    ],
  },

  hi: {
    title: "वर्गमूल कैलकुलेटर",
    short: "वर्गमूल और n-वाँ मूल गणना करें, पूर्ण वर्ग जाँचें, और मूलांक व्यंजक सरल करें।",
    description:
      "मुफ़्त वर्गमूल कैलकुलेटर। किसी संख्या का वर्गमूल या कोई भी n-वाँ मूल गणना करें। जाँचें कि संख्या पूर्ण वर्ग है या नहीं, और सरलीकृत मूलांक रूप प्राप्त करें।",
    keywords: [
      "वर्गमूल कैलकुलेटर",
      "n-वाँ मूल",
      "पूर्ण वर्ग",
      "मूलांक सरलीकरण",
      "घनमूल कैलकुलेटर",
      "मूलांक व्यंजक",
      "sqrt",
    ],
    inputs: {
      value: { label: "संख्या", help: "वह अऋणात्मक संख्या दर्ज करें जिसका मूल निकालना है। दशमलव हो सकती है।" },
      nthRoot: { label: "मूल सूचकांक (n)", help: "वर्गमूल के लिए 2 (डिफ़ॉल्ट), घनमूल के लिए 3, आदि।" },
    },
    outputs: {
      root: { label: "मूल मान", help: "गणना किया गया n-वाँ मूल, 6 दशमलव स्थान तक पूर्णांकित।" },
      simplifiedCoefficient: { label: "सरलीकृत — गुणांक", help: "सरलीकरण के बाद मूलांक चिह्न के बाहर का पूर्णांक भाग।" },
      simplifiedRadicand: { label: "सरलीकृत — मूलांक", help: "सरलीकरण के बाद मूलांक चिह्न के अंदर बची संख्या।" },
      isPerfectSquare: { label: "क्या पूर्ण वर्ग है?", help: "यदि संख्या पूर्ण वर्ग है (जैसे 4, 9, 16) तो सत्य।" },
      isPerfectNthRoot: { label: "क्या पूर्ण n-वाँ मूल है?", help: "यदि n-वाँ मूल एक पूर्णांक है तो सत्य।" },
    },
    faq: [
      {
        q: "पूर्ण वर्ग क्या है?",
        a: "पूर्ण वर्ग वह पूर्णांक है जो किसी अन्य पूर्णांक का वर्ग हो। उदाहरण: 1, 4, 9, 16, 25। इनके वर्गमूल पूर्णांक होते हैं।",
      },
      {
        q: "सरलीकृत मूलांक रूप का क्या अर्थ है?",
        a: "मूलांक चिह्न के अंदर से पूर्ण वर्ग गुणनखंड बाहर निकालना। उदाहरण: √12 = √(4×3) = 2√3। गुणांक 2 और मूलांक 3 है।",
      },
    ],
  },
};

export default i18n;
