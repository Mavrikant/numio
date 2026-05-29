import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Combinations & Permutations Calculator",
    short: "Calculate nCr (combinations) and nPr (permutations) for any n and r instantly.",
    description:
      "Free combinations and permutations calculator. Enter n (total items) and r (chosen items) to compute C(n,r) and P(n,r) using exact factorial formulas. Ideal for probability, statistics, and combinatorics problems.",
    keywords: [
      "combinations calculator",
      "permutations calculator",
      "nCr calculator",
      "nPr calculator",
      "combinatorics",
      "binomial coefficient",
      "choose function",
    ],
    inputs: {
      n: {
        label: "n (total items)",
        help: "Total number of items in the set. Must be a non-negative integer (0–1000).",
      },
      r: {
        label: "r (items chosen)",
        help: "Number of items to choose or arrange. Must be between 0 and n.",
      },
    },
    outputs: {
      nCr: {
        label: "C(n, r) — Combinations",
        help: "Number of ways to choose r items from n without regard to order.",
      },
      nPr: {
        label: "P(n, r) — Permutations",
        help: "Number of ways to arrange r items from n where order matters.",
      },
    },
    errors: {
      rGreaterThanN: "r cannot be greater than n.",
      outOfRange: "n and r must be integers between 0 and 1000.",
    },
    faq: [
      {
        q: "What is the difference between combinations and permutations?",
        a: "Combinations count selections where order does not matter — choosing a committee of 3 from 10 people. Permutations count arrangements where order matters — awarding 1st, 2nd, and 3rd place from 10 competitors. C(n,r) = n! / (r!(n-r)!) while P(n,r) = n! / (n-r)!.",
      },
      {
        q: "Why is C(n,r) always less than or equal to P(n,r)?",
        a: "For any selection of r items, there are r! ways to arrange those same items. So P(n,r) = C(n,r) × r!. Because r! ≥ 1, permutations are always at least as large as combinations (equal only when r = 0 or r = 1).",
      },
      {
        q: "What does C(n, 0) equal and why?",
        a: "C(n, 0) = 1 for any n. There is exactly one way to choose nothing from a set — the empty selection. Mathematically, 0! = 1 and the formula gives n! / (0! × n!) = 1.",
      },
      {
        q: "Can r be larger than n?",
        a: "No. You cannot choose more items than exist in the set. C(n,r) and P(n,r) are both defined as 0 when r > n.",
      },
      {
        q: "Where are combinations used in real life?",
        a: "Combinations appear in lottery odds, card game hands, genetic analysis, committee selection, network path counting, and the binomial theorem in algebra. Permutations arise in scheduling, password generation, race rankings, and cryptographic key counting.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Combinações e Permutações",
    short: "Calcule combinações C(n,k) e permutações P(n,k) com facilidade.",
    description:
      "Calculadora gratuita de combinatória. Calcule combinações C(n,k), permutações P(n,k) e arranjos com ou sem repetição.",
    keywords: ["combinações", "permutações", "combinatória", "C(n,k)", "fatorial"],
    inputs: {
      n: {
        label: "n (total items)",
        help: "Total number of items in the set. Must be a non-negative integer (0–1000).",
      },
      r: {
        label: "r (items chosen)",
        help: "Number of items to choose or arrange. Must be between 0 and n.",
      },
    },
    outputs: {
      nCr: {
        label: "C(n, r) — Combinations",
        help: "Number of ways to choose r items from n without regard to order.",
      },
      nPr: {
        label: "P(n, r) — Permutations",
        help: "Number of ways to arrange r items from n where order matters.",
      },
    },
    errors: {
      rGreaterThanN: "r cannot be greater than n.",
      outOfRange: "n and r must be integers between 0 and 1000.",
    },
    faq: [
      {
        q: "What is the difference between combinations and permutations?",
        a: "Combinations count selections where order does not matter — choosing a committee of 3 from 10 people. Permutations count arrangements where order matters — awarding 1st, 2nd, and 3rd place from 10 competitors. C(n,r) = n! / (r!(n-r)!) while P(n,r) = n! / (n-r)!.",
      },
      {
        q: "Why is C(n,r) always less than or equal to P(n,r)?",
        a: "For any selection of r items, there are r! ways to arrange those same items. So P(n,r) = C(n,r) × r!. Because r! ≥ 1, permutations are always at least as large as combinations (equal only when r = 0 or r = 1).",
      },
      {
        q: "What does C(n, 0) equal and why?",
        a: "C(n, 0) = 1 for any n. There is exactly one way to choose nothing from a set — the empty selection. Mathematically, 0! = 1 and the formula gives n! / (0! × n!) = 1.",
      },
      {
        q: "Can r be larger than n?",
        a: "No. You cannot choose more items than exist in the set. C(n,r) and P(n,r) are both defined as 0 when r > n.",
      },
      {
        q: "Where are combinations used in real life?",
        a: "Combinations appear in lottery odds, card game hands, genetic analysis, committee selection, network path counting, and the binomial theorem in algebra. Permutations arise in scheduling, password generation, race rankings, and cryptographic key counting.",
      },
    ],
  },
  id: {
    title: "Kalkulator Kombinasi dan Permutasi",
    short: "Hitung kombinasi C(n,k) dan permutasi P(n,k) dengan mudah.",
    description:
      "Kalkulator kombinatorik gratis. Hitung kombinasi C(n,k), permutasi P(n,k), dan susunan dengan atau tanpa pengulangan.",
    keywords: ["kombinasi", "permutasi", "kombinatorik", "C(n,k)", "faktorial"],
    inputs: {
      n: {
        label: "n (total items)",
        help: "Total number of items in the set. Must be a non-negative integer (0–1000).",
      },
      r: {
        label: "r (items chosen)",
        help: "Number of items to choose or arrange. Must be between 0 and n.",
      },
    },
    outputs: {
      nCr: {
        label: "C(n, r) — Combinations",
        help: "Number of ways to choose r items from n without regard to order.",
      },
      nPr: {
        label: "P(n, r) — Permutations",
        help: "Number of ways to arrange r items from n where order matters.",
      },
    },
    errors: {
      rGreaterThanN: "r cannot be greater than n.",
      outOfRange: "n and r must be integers between 0 and 1000.",
    },
    faq: [
      {
        q: "What is the difference between combinations and permutations?",
        a: "Combinations count selections where order does not matter — choosing a committee of 3 from 10 people. Permutations count arrangements where order matters — awarding 1st, 2nd, and 3rd place from 10 competitors. C(n,r) = n! / (r!(n-r)!) while P(n,r) = n! / (n-r)!.",
      },
      {
        q: "Why is C(n,r) always less than or equal to P(n,r)?",
        a: "For any selection of r items, there are r! ways to arrange those same items. So P(n,r) = C(n,r) × r!. Because r! ≥ 1, permutations are always at least as large as combinations (equal only when r = 0 or r = 1).",
      },
      {
        q: "What does C(n, 0) equal and why?",
        a: "C(n, 0) = 1 for any n. There is exactly one way to choose nothing from a set — the empty selection. Mathematically, 0! = 1 and the formula gives n! / (0! × n!) = 1.",
      },
      {
        q: "Can r be larger than n?",
        a: "No. You cannot choose more items than exist in the set. C(n,r) and P(n,r) are both defined as 0 when r > n.",
      },
      {
        q: "Where are combinations used in real life?",
        a: "Combinations appear in lottery odds, card game hands, genetic analysis, committee selection, network path counting, and the binomial theorem in algebra. Permutations arise in scheduling, password generation, race rankings, and cryptographic key counting.",
      },
    ],
  },


  tr: {
    title: "Kombinasyon ve Permütasyon Hesaplayıcı",
    short: "Herhangi bir n ve r için nCr (kombinasyon) ve nPr (permütasyon) değerlerini anında hesaplayın.",
    description:
      "Ücretsiz kombinasyon ve permütasyon hesaplayıcı. n (toplam eleman) ve r (seçilen eleman) değerlerini girerek C(n,r) ve P(n,r) sonuçlarını kesin faktöriyel formülleriyle hesaplayın. Olasılık, istatistik ve kombinatorik problemleri için idealdir.",
    keywords: [
      "kombinasyon hesaplayıcı",
      "permütasyon hesaplayıcı",
      "nCr hesaplama",
      "nPr hesaplama",
      "kombinatorik",
      "binom katsayısı",
      "seçim hesabı",
    ],
    inputs: {
      n: {
        label: "n (toplam eleman)",
        help: "Kümedeki toplam eleman sayısı. Negatif olmayan bir tam sayı olmalıdır (0–1000).",
      },
      r: {
        label: "r (seçilen eleman)",
        help: "Seçilecek veya sıralanacak eleman sayısı. 0 ile n arasında olmalıdır.",
      },
    },
    outputs: {
      nCr: {
        label: "C(n, r) — Kombinasyon",
        help: "n elemandan r tanesini seçmenin kaç farklı yolu olduğunu verir (sıra önemsiz).",
      },
      nPr: {
        label: "P(n, r) — Permütasyon",
        help: "n elemandan r tanesini sıralı şekilde dizmenin kaç farklı yolu olduğunu verir (sıra önemli).",
      },
    },
    errors: {
      rGreaterThanN: "r, n'den büyük olamaz.",
      outOfRange: "n ve r, 0 ile 1000 arasında tam sayı olmalıdır.",
    },
    faq: [
      {
        q: "Kombinasyon ile permütasyon arasındaki fark nedir?",
        a: "Kombinasyonlar, sıranın önemsiz olduğu seçim sayısını verir — örneğin 10 kişiden 3 kişilik komite seçimi. Permütasyonlar, sıranın önemli olduğu düzenleme sayısını verir — örneğin 10 yarışmacı arasından 1., 2. ve 3. belirleme. C(n,r) = n! / (r!(n-r)!), P(n,r) = n! / (n-r)!.",
      },
      {
        q: "C(n,r) neden her zaman P(n,r)'den küçük veya eşittir?",
        a: "Seçilen r eleman r! farklı biçimde sıralanabilir. Bu nedenle P(n,r) = C(n,r) × r!. r! ≥ 1 olduğundan permütasyonlar her zaman en az kombinasyonlar kadar büyüktür (r = 0 veya r = 1 durumunda eşittirler).",
      },
      {
        q: "C(n, 0) neden 1'e eşittir?",
        a: "C(n, 0) = 1 her n için geçerlidir. Bir kümeden hiçbir şey seçmemenin tam olarak bir yolu vardır: boş seçim. Matematiksel olarak 0! = 1 ve formül n! / (0! × n!) = 1 sonucunu verir.",
      },
      {
        q: "r, n'den büyük olabilir mi?",
        a: "Hayır. Kümede var olandan daha fazla eleman seçilemez. r > n olduğunda C(n,r) ve P(n,r) her ikisi de 0 olarak tanımlanır.",
      },
      {
        q: "Kombinasyonlar günlük hayatta nerede kullanılır?",
        a: "Kombinasyonlar; piyango olasılıklarında, kart oyunu ellerinde, genetik analizde, komite seçimlerinde ve binom teoreminde karşımıza çıkar. Permütasyonlar ise çizelgeleme, şifre oluşturma, yarış sıralamaları ve kriptografi alanlarında kullanılır.",
      },
    ],
  },

  de: {
    title: "Kombinationen & Permutationen Rechner",
    short: "Berechnen Sie nCr (Kombinationen) und nPr (Permutationen) für beliebige n und r.",
    description:
      "Kostenloser Kombinationen- und Permutationen-Rechner. Geben Sie n (Gesamtelemente) und r (gewählte Elemente) ein und erhalten Sie C(n,r) und P(n,r) mit exakten Formeln.",
    keywords: [
      "Kombinationen Rechner",
      "Permutationen Rechner",
      "nCr berechnen",
      "nPr berechnen",
      "Kombinatorik",
      "Binomialkoeffizient",
      "Auswahlrechner",
    ],
    inputs: {
      n: { label: "n (Gesamtelemente)", help: "Gesamtanzahl der Elemente in der Menge (0–1000)." },
      r: { label: "r (gewählte Elemente)", help: "Anzahl der zu wählenden oder anzuordnenden Elemente (0 bis n)." },
    },
    outputs: {
      nCr: { label: "C(n, r) — Kombinationen", help: "Anzahl der Möglichkeiten, r Elemente aus n ohne Berücksichtigung der Reihenfolge zu wählen." },
      nPr: { label: "P(n, r) — Permutationen", help: "Anzahl der Möglichkeiten, r Elemente aus n in geordneter Weise anzuordnen." },
    },
    errors: {
      rGreaterThanN: "r darf nicht größer als n sein.",
      outOfRange: "n und r müssen ganze Zahlen zwischen 0 und 1000 sein.",
    },
    faq: [
      {
        q: "Was ist der Unterschied zwischen Kombinationen und Permutationen?",
        a: "Kombinationen zählen Auswahlen, bei denen die Reihenfolge keine Rolle spielt. Permutationen zählen Anordnungen, bei denen die Reihenfolge entscheidend ist.",
      },
      {
        q: "Wo werden Kombinationen im Alltag verwendet?",
        a: "Kombinationen tauchen bei Lotteriewahrscheinlichkeiten, Kartenspielblättern, genetischen Analysen und dem Binomialsatz auf. Permutationen finden Anwendung bei Terminplanung, Passwortgenerierung und kryptografischen Schlüsseln.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Combinaisons & Permutations",
    short: "Calculez nCr (combinaisons) et nPr (permutations) pour n'importe quels n et r.",
    description:
      "Calculateur gratuit de combinaisons et permutations. Entrez n (éléments totaux) et r (éléments choisis) pour obtenir C(n,r) et P(n,r) avec des formules factorielles exactes.",
    keywords: [
      "calculateur combinaisons",
      "calculateur permutations",
      "nCr calcul",
      "nPr calcul",
      "combinatoire",
      "coefficient binomial",
      "calcul probabilité",
    ],
    inputs: {
      n: { label: "n (éléments totaux)", help: "Nombre total d'éléments dans l'ensemble (0–1000)." },
      r: { label: "r (éléments choisis)", help: "Nombre d'éléments à choisir ou à disposer (0 à n)." },
    },
    outputs: {
      nCr: { label: "C(n, r) — Combinaisons", help: "Nombre de façons de choisir r éléments parmi n sans tenir compte de l'ordre." },
      nPr: { label: "P(n, r) — Permutations", help: "Nombre de façons d'arranger r éléments parmi n où l'ordre compte." },
    },
    errors: {
      rGreaterThanN: "r ne peut pas être supérieur à n.",
      outOfRange: "n et r doivent être des entiers entre 0 et 1000.",
    },
    faq: [
      {
        q: "Quelle est la différence entre combinaisons et permutations ?",
        a: "Les combinaisons comptent les sélections où l'ordre n'a pas d'importance. Les permutations comptent les arrangements où l'ordre est important.",
      },
      {
        q: "Où les combinaisons sont-elles utilisées ?",
        a: "Les combinaisons apparaissent dans les probabilités de loterie, les mains de cartes, l'analyse génétique et le théorème binomial. Les permutations sont utilisées en planification, génération de mots de passe et cryptographie.",
      },
    ],
  },

  es: {
    title: "Calculadora de Combinaciones y Permutaciones",
    short: "Calcula nCr (combinaciones) y nPr (permutaciones) para cualquier n y r.",
    description:
      "Calculadora gratuita de combinaciones y permutaciones. Introduce n (elementos totales) y r (elementos elegidos) para obtener C(n,r) y P(n,r) con fórmulas factoriales exactas.",
    keywords: [
      "calculadora combinaciones",
      "calculadora permutaciones",
      "nCr calcular",
      "nPr calcular",
      "combinatoria",
      "coeficiente binomial",
      "probabilidad",
    ],
    inputs: {
      n: { label: "n (elementos totales)", help: "Número total de elementos en el conjunto (0–1000)." },
      r: { label: "r (elementos elegidos)", help: "Número de elementos a elegir o disponer (0 a n)." },
    },
    outputs: {
      nCr: { label: "C(n, r) — Combinaciones", help: "Número de formas de elegir r elementos de n sin importar el orden." },
      nPr: { label: "P(n, r) — Permutaciones", help: "Número de formas de ordenar r elementos de n donde el orden importa." },
    },
    errors: {
      rGreaterThanN: "r no puede ser mayor que n.",
      outOfRange: "n y r deben ser enteros entre 0 y 1000.",
    },
    faq: [
      {
        q: "¿Cuál es la diferencia entre combinaciones y permutaciones?",
        a: "Las combinaciones cuentan selecciones donde el orden no importa. Las permutaciones cuentan disposiciones donde el orden sí importa.",
      },
      {
        q: "¿Dónde se usan las combinaciones en la vida real?",
        a: "Las combinaciones aparecen en probabilidades de lotería, manos de cartas, análisis genético y el teorema binomial. Las permutaciones se usan en programación, generación de contraseñas y criptografía.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Combinazioni e Permutazioni",
    short: "Calcola nCr (combinazioni) e nPr (permutazioni) per qualsiasi n e r.",
    description:
      "Calcolatore gratuito di combinazioni e permutazioni. Inserisci n (elementi totali) e r (elementi scelti) per ottenere C(n,r) e P(n,r) con formule fattoriali esatte.",
    keywords: [
      "calcolatore combinazioni",
      "calcolatore permutazioni",
      "nCr calcolo",
      "nPr calcolo",
      "combinatoria",
      "coefficiente binomiale",
      "probabilità combinatoria",
    ],
    inputs: {
      n: { label: "n (elementi totali)", help: "Numero totale di elementi nell'insieme (0–1000)." },
      r: { label: "r (elementi scelti)", help: "Numero di elementi da scegliere o disporre (0 a n)." },
    },
    outputs: {
      nCr: { label: "C(n, r) — Combinazioni", help: "Numero di modi per scegliere r elementi da n senza considerare l'ordine." },
      nPr: { label: "P(n, r) — Permutazioni", help: "Numero di modi per disporre r elementi da n dove l'ordine conta." },
    },
    errors: {
      rGreaterThanN: "r non può essere maggiore di n.",
      outOfRange: "n e r devono essere interi tra 0 e 1000.",
    },
    faq: [
      {
        q: "Qual è la differenza tra combinazioni e permutazioni?",
        a: "Le combinazioni contano selezioni dove l'ordine non conta. Le permutazioni contano disposizioni dove l'ordine è importante.",
      },
      {
        q: "Dove si usano le combinazioni nella vita reale?",
        a: "Le combinazioni appaiono nelle probabilità delle lotterie, nelle mani a carte, nell'analisi genetica e nel teorema binomiale. Le permutazioni si usano in pianificazione, generazione di password e crittografia.",
      },
    ],
  },

  ar: {
    title: "حاسبة التوافيق والتباديل",
    short: "احسب nCr (التوافيق) وnPr (التباديل) لأي قيمتي n وr.",
    description:
      "حاسبة مجانية للتوافيق والتباديل. أدخل n (إجمالي العناصر) وr (العناصر المختارة) للحصول على C(n,r) وP(n,r) باستخدام صيغ المضروب الدقيقة. مثالية لمسائل الاحتمالات والإحصاء ونظرية التوافيق.",
    keywords: [
      "حاسبة التوافيق",
      "حاسبة التباديل",
      "حساب nCr",
      "حساب nPr",
      "التوافيق والتباديل",
      "المعامل الثنائي",
      "نظرية التوافيق",
    ],
    inputs: {
      n: { label: "n (إجمالي العناصر)", help: "العدد الكلي للعناصر في المجموعة (0–1000)." },
      r: { label: "r (العناصر المختارة)", help: "عدد العناصر المراد اختيارها أو ترتيبها (من 0 إلى n)." },
    },
    outputs: {
      nCr: { label: "C(n, r) — التوافيق", help: "عدد طرق اختيار r عنصرًا من n بغض النظر عن الترتيب." },
      nPr: { label: "P(n, r) — التباديل", help: "عدد طرق ترتيب r عنصرًا من n حيث يُهم الترتيب." },
    },
    errors: {
      rGreaterThanN: "لا يمكن أن يكون r أكبر من n.",
      outOfRange: "يجب أن تكون n وr أعدادًا صحيحة بين 0 و1000.",
    },
    faq: [
      {
        q: "ما الفرق بين التوافيق والتباديل؟",
        a: "التوافيق تعدّ الاختيارات التي لا يهم فيها الترتيب. التباديل تعدّ الترتيبات التي يهم فيها الترتيب.",
      },
      {
        q: "أين تُستخدم التوافيق في الحياة اليومية؟",
        a: "تظهر التوافيق في احتمالات اليانصيب وأوراق اللعب والتحليل الجيني ونظرية ذات الحدين. وتُستخدم التباديل في الجدولة الزمنية وتوليد كلمات المرور والتشفير.",
      },
    ],
  },

  ru: {
    title: "Калькулятор Сочетаний и Перестановок",
    short: "Вычислите nCr (сочетания) и nPr (перестановки) для любых n и r.",
    description:
      "Бесплатный калькулятор сочетаний и перестановок. Введите n (общее число элементов) и r (выбранные элементы), чтобы получить C(n,r) и P(n,r) по точным факториальным формулам.",
    keywords: [
      "калькулятор сочетаний",
      "калькулятор перестановок",
      "вычислить nCr",
      "вычислить nPr",
      "комбинаторика",
      "биномиальный коэффициент",
      "число сочетаний",
    ],
    inputs: {
      n: { label: "n (всего элементов)", help: "Общее число элементов в множестве (0–1000)." },
      r: { label: "r (выбранные элементы)", help: "Число элементов для выбора или расстановки (от 0 до n)." },
    },
    outputs: {
      nCr: { label: "C(n, r) — Сочетания", help: "Число способов выбрать r элементов из n без учёта порядка." },
      nPr: { label: "P(n, r) — Перестановки", help: "Число способов упорядочить r элементов из n с учётом порядка." },
    },
    errors: {
      rGreaterThanN: "r не может быть больше n.",
      outOfRange: "n и r должны быть целыми числами от 0 до 1000.",
    },
    faq: [
      {
        q: "В чём разница между сочетаниями и перестановками?",
        a: "Сочетания подсчитывают выборки, в которых порядок не важен. Перестановки подсчитывают расположения, в которых порядок имеет значение.",
      },
      {
        q: "Где используются сочетания на практике?",
        a: "Сочетания применяются в теории вероятностей лотерей, карточных играх, генетике и теореме о биноме. Перестановки используются при составлении расписаний, генерации паролей и криптографии.",
      },
    ],
  },

  zh: {
    title: "组合与排列计算器",
    short: "即时计算任意 n 和 r 的 nCr（组合数）和 nPr（排列数）。",
    description:
      "免费的组合与排列计算器。输入 n（元素总数）和 r（选取元素数），使用精确的阶乘公式计算 C(n,r) 和 P(n,r)。适用于概率、统计和组合数学问题。",
    keywords: [
      "组合数计算器",
      "排列数计算器",
      "nCr计算",
      "nPr计算",
      "组合数学",
      "二项式系数",
      "概率计算",
    ],
    inputs: {
      n: { label: "n（元素总数）", help: "集合中的元素总数（0–1000）。" },
      r: { label: "r（选取元素数）", help: "要选取或排列的元素数量（0 至 n）。" },
    },
    outputs: {
      nCr: { label: "C(n, r) — 组合数", help: "从 n 个元素中选取 r 个且不考虑顺序的方案数。" },
      nPr: { label: "P(n, r) — 排列数", help: "从 n 个元素中选取 r 个并考虑顺序的方案数。" },
    },
    errors: {
      rGreaterThanN: "r 不能大于 n。",
      outOfRange: "n 和 r 必须是 0 到 1000 之间的整数。",
    },
    faq: [
      {
        q: "组合与排列有什么区别？",
        a: "组合计算不考虑顺序的选取方案数；排列计算考虑顺序的排列方案数。",
      },
      {
        q: "组合数在日常生活中有哪些应用？",
        a: "组合数出现在彩票概率、扑克手牌、遗传分析和二项式定理中；排列数用于日程安排、密码生成和密码学。",
      },
    ],
  },

  ja: {
    title: "組み合わせ・順列計算機",
    short: "任意の n と r に対して nCr（組み合わせ）と nPr（順列）を即座に計算します。",
    description:
      "無料の組み合わせ・順列計算機。n（全要素数）と r（選択要素数）を入力するだけで、C(n,r) と P(n,r) を正確な階乗公式で計算します。確率・統計・組み合わせ論の問題に最適です。",
    keywords: [
      "組み合わせ計算機",
      "順列計算機",
      "nCr計算",
      "nPr計算",
      "組み合わせ論",
      "二項係数",
      "確率計算",
    ],
    inputs: {
      n: { label: "n（全要素数）", help: "集合の要素の総数（0〜1000）。" },
      r: { label: "r（選択要素数）", help: "選択または配置する要素の数（0〜n）。" },
    },
    outputs: {
      nCr: { label: "C(n, r) — 組み合わせ数", help: "n 個の要素から r 個を順序を考慮せずに選ぶ方法の数。" },
      nPr: { label: "P(n, r) — 順列数", help: "n 個の要素から r 個を順序を考慮して並べる方法の数。" },
    },
    errors: {
      rGreaterThanN: "r は n より大きくできません。",
      outOfRange: "n と r は 0〜1000 の整数でなければなりません。",
    },
    faq: [
      {
        q: "組み合わせと順列の違いは何ですか？",
        a: "組み合わせは順序を考慮しない選択の数を数えます。順列は順序を考慮した配置の数を数えます。",
      },
      {
        q: "組み合わせは実生活のどこで使われますか？",
        a: "組み合わせは宝くじの確率、カードゲームの手札、遺伝子解析、二項定理に登場します。順列はスケジューリング、パスワード生成、暗号学で使われます。",
      },
    ],
  },

  ko: {
    title: "조합 & 순열 계산기",
    short: "임의의 n과 r에 대해 nCr(조합)과 nPr(순열)을 즉시 계산합니다.",
    description:
      "무료 조합 및 순열 계산기. n(전체 원소 수)과 r(선택 원소 수)을 입력하면 정확한 팩토리얼 공식으로 C(n,r)과 P(n,r)을 계산합니다. 확률, 통계, 조합론 문제에 최적입니다.",
    keywords: [
      "조합 계산기",
      "순열 계산기",
      "nCr 계산",
      "nPr 계산",
      "조합론",
      "이항 계수",
      "확률 계산",
    ],
    inputs: {
      n: { label: "n (전체 원소 수)", help: "집합의 전체 원소 수 (0–1000)." },
      r: { label: "r (선택 원소 수)", help: "선택하거나 배열할 원소의 수 (0에서 n 사이)." },
    },
    outputs: {
      nCr: { label: "C(n, r) — 조합수", help: "n개의 원소 중 r개를 순서 없이 선택하는 방법의 수." },
      nPr: { label: "P(n, r) — 순열수", help: "n개의 원소 중 r개를 순서 있게 배열하는 방법의 수." },
    },
    errors: {
      rGreaterThanN: "r은 n보다 클 수 없습니다.",
      outOfRange: "n과 r은 0에서 1000 사이의 정수여야 합니다.",
    },
    faq: [
      {
        q: "조합과 순열의 차이는 무엇인가요?",
        a: "조합은 순서를 고려하지 않는 선택의 수를 셉니다. 순열은 순서를 고려한 배열의 수를 셉니다.",
      },
      {
        q: "조합은 실생활에서 어디에 쓰이나요?",
        a: "조합은 복권 확률, 카드 패, 유전자 분석, 이항 정리에 등장합니다. 순열은 스케줄링, 비밀번호 생성, 암호학에 사용됩니다.",
      },
    ],
  },

  hi: {
    title: "संयोजन और क्रमचय कैलकुलेटर",
    short: "किसी भी n और r के लिए nCr (संयोजन) और nPr (क्रमचय) तुरंत गणना करें।",
    description:
      "मुफ़्त संयोजन और क्रमचय कैलकुलेटर। n (कुल तत्व) और r (चुने गए तत्व) दर्ज करें और सटीक भाज्य सूत्रों से C(n,r) और P(n,r) की गणना करें। संभाविता, सांख्यिकी और संयोजन-विज्ञान के लिए आदर्श।",
    keywords: [
      "संयोजन कैलकुलेटर",
      "क्रमचय कैलकुलेटर",
      "nCr गणना",
      "nPr गणना",
      "संयोजन-विज्ञान",
      "द्विपद गुणांक",
      "संभाविता गणना",
    ],
    inputs: {
      n: { label: "n (कुल तत्व)", help: "समुच्चय में कुल तत्वों की संख्या (0–1000)।" },
      r: { label: "r (चुने गए तत्व)", help: "चुने जाने या व्यवस्थित किए जाने वाले तत्वों की संख्या (0 से n तक)।" },
    },
    outputs: {
      nCr: { label: "C(n, r) — संयोजन संख्या", help: "n तत्वों में से r तत्व क्रम की परवाह किए बिना चुनने के तरीकों की संख्या।" },
      nPr: { label: "P(n, r) — क्रमचय संख्या", help: "n तत्वों में से r तत्व क्रम का ध्यान रखते हुए व्यवस्थित करने के तरीकों की संख्या।" },
    },
    errors: {
      rGreaterThanN: "r, n से बड़ा नहीं हो सकता।",
      outOfRange: "n और r, 0 से 1000 के बीच पूर्णांक होने चाहिए।",
    },
    faq: [
      {
        q: "संयोजन और क्रमचय में क्या अंतर है?",
        a: "संयोजन उन चयनों की गिनती करते हैं जहाँ क्रम महत्वपूर्ण नहीं होता। क्रमचय उन व्यवस्थाओं की गिनती करते हैं जहाँ क्रम महत्वपूर्ण होता है।",
      },
      {
        q: "संयोजन वास्तविक जीवन में कहाँ उपयोग होते हैं?",
        a: "संयोजन लॉटरी की प्रायिकता, ताश के खेल, आनुवंशिक विश्लेषण और द्विपद प्रमेय में प्रकट होते हैं। क्रमचय कार्यक्रम निर्धारण, पासवर्ड निर्माण और क्रिप्टोग्राफी में उपयोग होते हैं।",
      },
    ],
  },
};

export default i18n;
