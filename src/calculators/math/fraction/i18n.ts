import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Fraction Calculator",
    short: "Simplify fractions and perform addition, subtraction, multiplication, and division with exact results.",
    description:
      "Free fraction calculator. Simplify any fraction to its lowest terms using GCD, or add, subtract, multiply, and divide two fractions. Instantly get the simplified fraction, decimal equivalent, and mixed number form.",
    keywords: [
      "fraction calculator",
      "simplify fraction",
      "fraction simplifier",
      "add fractions",
      "subtract fractions",
      "multiply fractions",
      "divide fractions",
      "GCD",
      "lowest terms",
    ],
    inputs: {
      numerator1: {
        label: "Numerator (top)",
        help: "The top number of the first fraction.",
      },
      denominator1: {
        label: "Denominator (bottom)",
        help: "The bottom number of the first fraction. Cannot be zero.",
      },
      operation: {
        label: "Operation",
        help: "Choose to simplify the first fraction, or perform arithmetic with both fractions.",
      },
      numerator2: {
        label: "Numerator 2 (top)",
        help: "The top number of the second fraction. Used for add, subtract, multiply, divide.",
      },
      denominator2: {
        label: "Denominator 2 (bottom)",
        help: "The bottom number of the second fraction. Cannot be zero.",
      },
    },
    outputs: {
      numerator: {
        label: "Result Numerator",
        help: "The top number of the simplified result fraction.",
      },
      denominator: {
        label: "Result Denominator",
        help: "The bottom number of the simplified result fraction.",
      },
      decimal: {
        label: "Decimal Value",
        help: "The fraction expressed as a decimal number.",
      },
      mixedWhole: {
        label: "Mixed Number — Whole Part",
        help: "The whole-number part of the mixed number form.",
      },
      mixedNumerator: {
        label: "Mixed Number — Numerator",
        help: "The fractional numerator of the mixed number form.",
      },
      mixedDenominator: {
        label: "Mixed Number — Denominator",
        help: "The fractional denominator of the mixed number form.",
      },
    },
    options: {
      operation: {
        simplify: "Simplify",
        add: "Add (+)",
        subtract: "Subtract (−)",
        multiply: "Multiply (×)",
        divide: "Divide (÷)",
      },
    },
    errors: {
      zeroDenominator: "Denominator cannot be zero.",
      zeroDivisor: "Cannot divide by a zero fraction.",
    },
    faq: [
      {
        q: "How does the fraction simplifier work?",
        a: "The simplifier finds the Greatest Common Divisor (GCD) of the numerator and denominator using the Euclidean algorithm, then divides both by that GCD. For example, 6/8 → GCD(6,8)=2 → 3/4.",
      },
      {
        q: "How do you add fractions with different denominators?",
        a: "Use the formula a/b + c/d = (a×d + c×b) / (b×d). For example, 1/2 + 1/3 = (1×3 + 1×2) / (2×3) = 5/6. The result is then simplified.",
      },
      {
        q: "How do you divide fractions?",
        a: "Dividing by a fraction is the same as multiplying by its reciprocal: a/b ÷ c/d = a/b × d/c = (a×d)/(b×c). For example, 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2.",
      },
      {
        q: "What is a mixed number?",
        a: "A mixed number combines a whole number and a proper fraction. For example, 7/4 = 1 and 3/4, written as 1¾. Mixed numbers are easier to visualize for values greater than 1.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Frações",
    short: "Some, subtraia, multiplique e divida frações com passos detalhados.",
    description:
      "Calculadora gratuita de frações. Some, subtraia, multiplique e divida frações com simplificação automática para o termo mínimo.",
    keywords: ["frações", "calculadora frações", "somar frações", "simplificar frações", "frações mistas"],
    inputs: {
      numerator1: {
        label: "Numerator (top)",
        help: "The top number of the first fraction.",
      },
      denominator1: {
        label: "Denominator (bottom)",
        help: "The bottom number of the first fraction. Cannot be zero.",
      },
      operation: {
        label: "Operation",
        help: "Choose to simplify the first fraction, or perform arithmetic with both fractions.",
      },
      numerator2: {
        label: "Numerator 2 (top)",
        help: "The top number of the second fraction. Used for add, subtract, multiply, divide.",
      },
      denominator2: {
        label: "Denominator 2 (bottom)",
        help: "The bottom number of the second fraction. Cannot be zero.",
      },
    },
    outputs: {
      numerator: {
        label: "Result Numerator",
        help: "The top number of the simplified result fraction.",
      },
      denominator: {
        label: "Result Denominator",
        help: "The bottom number of the simplified result fraction.",
      },
      decimal: {
        label: "Decimal Value",
        help: "The fraction expressed as a decimal number.",
      },
      mixedWhole: {
        label: "Mixed Number — Whole Part",
        help: "The whole-number part of the mixed number form.",
      },
      mixedNumerator: {
        label: "Mixed Number — Numerator",
        help: "The fractional numerator of the mixed number form.",
      },
      mixedDenominator: {
        label: "Mixed Number — Denominator",
        help: "The fractional denominator of the mixed number form.",
      },
    },
    options: {
      operation: {
        simplify: "Simplify",
        add: "Add (+)",
        subtract: "Subtract (−)",
        multiply: "Multiply (×)",
        divide: "Divide (÷)",
      },
    },
    errors: {
      zeroDenominator: "Denominator cannot be zero.",
      zeroDivisor: "Cannot divide by a zero fraction.",
    },
    faq: [
      {
        q: "How does the fraction simplifier work?",
        a: "The simplifier finds the Greatest Common Divisor (GCD) of the numerator and denominator using the Euclidean algorithm, then divides both by that GCD. For example, 6/8 → GCD(6,8)=2 → 3/4.",
      },
      {
        q: "How do you add fractions with different denominators?",
        a: "Use the formula a/b + c/d = (a×d + c×b) / (b×d). For example, 1/2 + 1/3 = (1×3 + 1×2) / (2×3) = 5/6. The result is then simplified.",
      },
      {
        q: "How do you divide fractions?",
        a: "Dividing by a fraction is the same as multiplying by its reciprocal: a/b ÷ c/d = a/b × d/c = (a×d)/(b×c). For example, 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2.",
      },
      {
        q: "What is a mixed number?",
        a: "A mixed number combines a whole number and a proper fraction. For example, 7/4 = 1 and 3/4, written as 1¾. Mixed numbers are easier to visualize for values greater than 1.",
      },
    ],
  },
  id: {
    title: "Kalkulator Pecahan",
    short: "Tambah, kurang, kali, dan bagi pecahan dengan langkah rinci.",
    description:
      "Kalkulator pecahan gratis. Tambah, kurang, kali, dan bagi pecahan dengan penyederhanaan otomatis ke bentuk paling sederhana.",
    keywords: ["pecahan", "kalkulator pecahan", "operasi pecahan", "sederhanakan pecahan", "pecahan campuran"],
    inputs: {
      numerator1: {
        label: "Numerator (top)",
        help: "The top number of the first fraction.",
      },
      denominator1: {
        label: "Denominator (bottom)",
        help: "The bottom number of the first fraction. Cannot be zero.",
      },
      operation: {
        label: "Operation",
        help: "Choose to simplify the first fraction, or perform arithmetic with both fractions.",
      },
      numerator2: {
        label: "Numerator 2 (top)",
        help: "The top number of the second fraction. Used for add, subtract, multiply, divide.",
      },
      denominator2: {
        label: "Denominator 2 (bottom)",
        help: "The bottom number of the second fraction. Cannot be zero.",
      },
    },
    outputs: {
      numerator: {
        label: "Result Numerator",
        help: "The top number of the simplified result fraction.",
      },
      denominator: {
        label: "Result Denominator",
        help: "The bottom number of the simplified result fraction.",
      },
      decimal: {
        label: "Decimal Value",
        help: "The fraction expressed as a decimal number.",
      },
      mixedWhole: {
        label: "Mixed Number — Whole Part",
        help: "The whole-number part of the mixed number form.",
      },
      mixedNumerator: {
        label: "Mixed Number — Numerator",
        help: "The fractional numerator of the mixed number form.",
      },
      mixedDenominator: {
        label: "Mixed Number — Denominator",
        help: "The fractional denominator of the mixed number form.",
      },
    },
    options: {
      operation: {
        simplify: "Simplify",
        add: "Add (+)",
        subtract: "Subtract (−)",
        multiply: "Multiply (×)",
        divide: "Divide (÷)",
      },
    },
    errors: {
      zeroDenominator: "Denominator cannot be zero.",
      zeroDivisor: "Cannot divide by a zero fraction.",
    },
    faq: [
      {
        q: "How does the fraction simplifier work?",
        a: "The simplifier finds the Greatest Common Divisor (GCD) of the numerator and denominator using the Euclidean algorithm, then divides both by that GCD. For example, 6/8 → GCD(6,8)=2 → 3/4.",
      },
      {
        q: "How do you add fractions with different denominators?",
        a: "Use the formula a/b + c/d = (a×d + c×b) / (b×d). For example, 1/2 + 1/3 = (1×3 + 1×2) / (2×3) = 5/6. The result is then simplified.",
      },
      {
        q: "How do you divide fractions?",
        a: "Dividing by a fraction is the same as multiplying by its reciprocal: a/b ÷ c/d = a/b × d/c = (a×d)/(b×c). For example, 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2.",
      },
      {
        q: "What is a mixed number?",
        a: "A mixed number combines a whole number and a proper fraction. For example, 7/4 = 1 and 3/4, written as 1¾. Mixed numbers are easier to visualize for values greater than 1.",
      },
    ],
  },


  tr: {
    title: "Kesir Hesaplayıcı",
    short: "Kesirleri sadeleştirin ya da toplama, çıkarma, çarpma ve bölme işlemleri yapın.",
    description:
      "Ücretsiz kesir hesaplayıcı. Herhangi bir kesri EBOB kullanarak en sade hale getirin veya iki kesir arasında aritmetik işlemler yapın. Sonucu sadeleştirilmiş kesir, ondalık ve karma sayı olarak görün.",
    keywords: [
      "kesir hesaplayıcı",
      "kesir sadeleştirme",
      "kesirler toplama",
      "kesirler çıkarma",
      "kesirler çarpma",
      "kesirler bölme",
      "EBOB",
      "matematik hesaplayıcı",
    ],
    inputs: {
      numerator1: {
        label: "Pay (üst sayı)",
        help: "Birinci kesrin pay kısmı.",
      },
      denominator1: {
        label: "Payda (alt sayı)",
        help: "Birinci kesrin payda kısmı. Sıfır olamaz.",
      },
      operation: {
        label: "İşlem",
        help: "Birinci kesri sadeleştirin ya da iki kesir arasında işlem yapın.",
      },
      numerator2: {
        label: "Pay 2 (üst sayı)",
        help: "İkinci kesrin pay kısmı. Toplama, çıkarma, çarpma, bölme için kullanılır.",
      },
      denominator2: {
        label: "Payda 2 (alt sayı)",
        help: "İkinci kesrin payda kısmı. Sıfır olamaz.",
      },
    },
    outputs: {
      numerator: {
        label: "Sonuç Pay",
        help: "Sadeleştirilmiş sonuç kesrinin üst sayısı.",
      },
      denominator: {
        label: "Sonuç Payda",
        help: "Sadeleştirilmiş sonuç kesrinin alt sayısı.",
      },
      decimal: {
        label: "Ondalık Değer",
        help: "Kesrin ondalık sayı olarak ifadesi.",
      },
      mixedWhole: {
        label: "Karma Sayı — Tam Kısım",
        help: "Karma sayının tam sayı kısmı.",
      },
      mixedNumerator: {
        label: "Karma Sayı — Pay",
        help: "Karma sayının pay kısmı.",
      },
      mixedDenominator: {
        label: "Karma Sayı — Payda",
        help: "Karma sayının payda kısmı.",
      },
    },
    options: {
      operation: {
        simplify: "Sadeleştir",
        add: "Topla (+)",
        subtract: "Çıkar (−)",
        multiply: "Çarp (×)",
        divide: "Böl (÷)",
      },
    },
    errors: {
      zeroDenominator: "Payda sıfır olamaz.",
      zeroDivisor: "Sıfır kesre bölünemez.",
    },
    faq: [
      {
        q: "Kesir sadeleştirici nasıl çalışır?",
        a: "Sadeleştirici, Öklit algoritmasıyla pay ve paydanın En Büyük Ortak Bölenini (EBOB) bulur, ardından her ikisini de EBOB'a böler. Örnek: 6/8 → EBOB(6,8)=2 → 3/4.",
      },
      {
        q: "Farklı paydalar nasıl toplanır?",
        a: "Formül: a/b + c/d = (a×d + c×b) / (b×d). Örnek: 1/2 + 1/3 = (3+2)/6 = 5/6.",
      },
      {
        q: "Kesirler nasıl bölünür?",
        a: "a/b ÷ c/d = a/b × d/c = (a×d)/(b×c). Örnek: 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2.",
      },
      {
        q: "Karma sayı nedir?",
        a: "Karma sayı, tam sayı ve düzgün kesri bir araya getirir. Örneğin 7/4 = 1 ve 3/4 yani 1¾.",
      },
    ],
  },

  de: {
    title: "Bruch-Rechner",
    short: "Brüche vereinfachen sowie addieren, subtrahieren, multiplizieren und dividieren.",
    description:
      "Kostenloser Bruch-Rechner. Vereinfachen Sie Brüche mit dem ggT oder rechnen Sie zwei Brüche zusammen. Ergebnis als gekürzter Bruch, Dezimalzahl und gemischte Zahl.",
    keywords: [
      "Bruch Rechner",
      "Brüche kürzen",
      "Brüche addieren",
      "Brüche subtrahieren",
      "Brüche multiplizieren",
      "Brüche dividieren",
      "ggT",
      "gemischte Zahl",
    ],
    inputs: {
      numerator1: { label: "Zähler 1", help: "Der Zähler (obere Zahl) des ersten Bruchs." },
      denominator1: { label: "Nenner 1", help: "Der Nenner (untere Zahl) des ersten Bruchs. Darf nicht null sein." },
      operation: { label: "Operation", help: "Kürzen oder Rechenoperation mit zwei Brüchen." },
      numerator2: { label: "Zähler 2", help: "Der Zähler des zweiten Bruchs." },
      denominator2: { label: "Nenner 2", help: "Der Nenner des zweiten Bruchs. Darf nicht null sein." },
    },
    outputs: {
      numerator: { label: "Ergebnis-Zähler", help: "Zähler des gekürzten Ergebnisbruchs." },
      denominator: { label: "Ergebnis-Nenner", help: "Nenner des gekürzten Ergebnisbruchs." },
      decimal: { label: "Dezimalwert", help: "Der Bruch als Dezimalzahl." },
      mixedWhole: { label: "Gemischte Zahl — Ganzzahl", help: "Ganzzahliger Anteil der gemischten Zahl." },
      mixedNumerator: { label: "Gemischte Zahl — Zähler", help: "Bruchzähler der gemischten Zahl." },
      mixedDenominator: { label: "Gemischte Zahl — Nenner", help: "Bruchnenner der gemischten Zahl." },
    },
    options: {
      operation: {
        simplify: "Kürzen",
        add: "Addieren (+)",
        subtract: "Subtrahieren (−)",
        multiply: "Multiplizieren (×)",
        divide: "Dividieren (÷)",
      },
    },
    faq: [
      {
        q: "Wie funktioniert das Kürzen von Brüchen?",
        a: "Der ggT (größter gemeinsamer Teiler) von Zähler und Nenner wird berechnet (Euklidischer Algorithmus), dann werden beide durch ihn dividiert. Beispiel: 6/8 → ggT=2 → 3/4.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Fractions",
    short: "Simplifiez des fractions et effectuez des opérations d'addition, soustraction, multiplication et division.",
    description:
      "Calculateur de fractions gratuit. Simplifiez une fraction au minimum à l'aide du PGCD, ou calculez la somme, la différence, le produit ou le quotient de deux fractions.",
    keywords: [
      "calculateur fractions",
      "simplifier fraction",
      "additionner fractions",
      "soustraire fractions",
      "multiplier fractions",
      "diviser fractions",
      "PGCD",
      "nombre mixte",
    ],
    inputs: {
      numerator1: { label: "Numérateur 1", help: "Le numérateur (nombre du haut) de la première fraction." },
      denominator1: { label: "Dénominateur 1", help: "Le dénominateur (nombre du bas) de la première fraction. Ne peut pas être zéro." },
      operation: { label: "Opération", help: "Simplifier ou effectuer une opération avec deux fractions." },
      numerator2: { label: "Numérateur 2", help: "Le numérateur de la deuxième fraction." },
      denominator2: { label: "Dénominateur 2", help: "Le dénominateur de la deuxième fraction. Ne peut pas être zéro." },
    },
    outputs: {
      numerator: { label: "Numérateur résultat", help: "Numérateur de la fraction résultat simplifiée." },
      denominator: { label: "Dénominateur résultat", help: "Dénominateur de la fraction résultat simplifiée." },
      decimal: { label: "Valeur décimale", help: "La fraction exprimée en nombre décimal." },
      mixedWhole: { label: "Nombre mixte — Partie entière", help: "La partie entière du nombre mixte." },
      mixedNumerator: { label: "Nombre mixte — Numérateur", help: "Le numérateur de la partie fractionnaire." },
      mixedDenominator: { label: "Nombre mixte — Dénominateur", help: "Le dénominateur de la partie fractionnaire." },
    },
    options: {
      operation: {
        simplify: "Simplifier",
        add: "Additionner (+)",
        subtract: "Soustraire (−)",
        multiply: "Multiplier (×)",
        divide: "Diviser (÷)",
      },
    },
    faq: [
      {
        q: "Comment fonctionne la simplification de fractions ?",
        a: "On calcule le PGCD du numérateur et du dénominateur (algorithme d'Euclide), puis on divise les deux par ce PGCD. Exemple : 6/8 → PGCD=2 → 3/4.",
      },
    ],
  },

  es: {
    title: "Calculadora de Fracciones",
    short: "Simplifica fracciones y realiza operaciones de suma, resta, multiplicación y división.",
    description:
      "Calculadora de fracciones gratuita. Simplifica cualquier fracción al mínimo con el MCD, o suma, resta, multiplica y divide dos fracciones con resultados exactos.",
    keywords: [
      "calculadora fracciones",
      "simplificar fracciones",
      "sumar fracciones",
      "restar fracciones",
      "multiplicar fracciones",
      "dividir fracciones",
      "MCD",
      "número mixto",
    ],
    inputs: {
      numerator1: { label: "Numerador 1", help: "El numerador (número superior) de la primera fracción." },
      denominator1: { label: "Denominador 1", help: "El denominador (número inferior) de la primera fracción. No puede ser cero." },
      operation: { label: "Operación", help: "Simplificar o realizar una operación con dos fracciones." },
      numerator2: { label: "Numerador 2", help: "El numerador de la segunda fracción." },
      denominator2: { label: "Denominador 2", help: "El denominador de la segunda fracción. No puede ser cero." },
    },
    outputs: {
      numerator: { label: "Numerador resultado", help: "El numerador de la fracción resultado simplificada." },
      denominator: { label: "Denominador resultado", help: "El denominador de la fracción resultado simplificada." },
      decimal: { label: "Valor decimal", help: "La fracción expresada como número decimal." },
      mixedWhole: { label: "Número mixto — Parte entera", help: "La parte entera del número mixto." },
      mixedNumerator: { label: "Número mixto — Numerador", help: "El numerador de la parte fraccionaria." },
      mixedDenominator: { label: "Número mixto — Denominador", help: "El denominador de la parte fraccionaria." },
    },
    options: {
      operation: {
        simplify: "Simplificar",
        add: "Sumar (+)",
        subtract: "Restar (−)",
        multiply: "Multiplicar (×)",
        divide: "Dividir (÷)",
      },
    },
    faq: [
      {
        q: "¿Cómo funciona la simplificación de fracciones?",
        a: "Se calcula el MCD del numerador y denominador (algoritmo de Euclides), luego se dividen ambos entre ese MCD. Ejemplo: 6/8 → MCD=2 → 3/4.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Frazioni",
    short: "Semplifica frazioni ed esegui addizione, sottrazione, moltiplicazione e divisione.",
    description:
      "Calcolatore di frazioni gratuito. Semplifica qualsiasi frazione ai minimi termini con il MCD, o calcola la somma, la differenza, il prodotto o il quoziente di due frazioni.",
    keywords: [
      "calcolatore frazioni",
      "semplificare frazioni",
      "sommare frazioni",
      "sottrarre frazioni",
      "moltiplicare frazioni",
      "dividere frazioni",
      "MCD",
      "numero misto",
    ],
    inputs: {
      numerator1: { label: "Numeratore 1", help: "Il numeratore (numero in alto) della prima frazione." },
      denominator1: { label: "Denominatore 1", help: "Il denominatore (numero in basso) della prima frazione. Non può essere zero." },
      operation: { label: "Operazione", help: "Semplificare o eseguire un'operazione con due frazioni." },
      numerator2: { label: "Numeratore 2", help: "Il numeratore della seconda frazione." },
      denominator2: { label: "Denominatore 2", help: "Il denominatore della seconda frazione. Non può essere zero." },
    },
    outputs: {
      numerator: { label: "Numeratore risultato", help: "Il numeratore della frazione risultato semplificata." },
      denominator: { label: "Denominatore risultato", help: "Il denominatore della frazione risultato semplificata." },
      decimal: { label: "Valore decimale", help: "La frazione espressa come numero decimale." },
      mixedWhole: { label: "Numero misto — Parte intera", help: "La parte intera del numero misto." },
      mixedNumerator: { label: "Numero misto — Numeratore", help: "Il numeratore della parte frazionaria." },
      mixedDenominator: { label: "Numero misto — Denominatore", help: "Il denominatore della parte frazionaria." },
    },
    options: {
      operation: {
        simplify: "Semplifica",
        add: "Addizione (+)",
        subtract: "Sottrazione (−)",
        multiply: "Moltiplicazione (×)",
        divide: "Divisione (÷)",
      },
    },
    faq: [
      {
        q: "Come funziona la semplificazione delle frazioni?",
        a: "Si calcola il MCD di numeratore e denominatore (algoritmo di Euclide), poi si dividono entrambi per quel MCD. Esempio: 6/8 → MCD=2 → 3/4.",
      },
    ],
  },

  ar: {
    title: "حاسبة الكسور",
    short: "بسّط الكسور وأجرِ عمليات الجمع والطرح والضرب والقسمة.",
    description:
      "حاسبة كسور مجانية. بسّط أي كسر إلى أبسط صورة باستخدام القاسم المشترك الأكبر، أو أجرِ العمليات الحسابية على كسرين وأحصل على الناتج مبسّطًا وبشكل عشري وكعدد مختلط.",
    keywords: [
      "حاسبة كسور",
      "تبسيط الكسور",
      "جمع الكسور",
      "طرح الكسور",
      "ضرب الكسور",
      "قسمة الكسور",
      "القاسم المشترك الأكبر",
      "عدد مختلط",
    ],
    inputs: {
      numerator1: { label: "البسط 1", help: "البسط (الرقم العلوي) للكسر الأول." },
      denominator1: { label: "المقام 1", help: "المقام (الرقم السفلي) للكسر الأول. لا يمكن أن يكون صفرًا." },
      operation: { label: "العملية", help: "تبسيط الكسر أو إجراء عملية مع كسرين." },
      numerator2: { label: "البسط 2", help: "البسط للكسر الثاني." },
      denominator2: { label: "المقام 2", help: "المقام للكسر الثاني. لا يمكن أن يكون صفرًا." },
    },
    outputs: {
      numerator: { label: "بسط الناتج", help: "بسط الكسر الناتج المبسّط." },
      denominator: { label: "مقام الناتج", help: "مقام الكسر الناتج المبسّط." },
      decimal: { label: "القيمة العشرية", help: "الكسر معبّرًا عنه كعدد عشري." },
      mixedWhole: { label: "العدد المختلط — الجزء الصحيح", help: "الجزء الصحيح من العدد المختلط." },
      mixedNumerator: { label: "العدد المختلط — البسط", help: "بسط الجزء الكسري من العدد المختلط." },
      mixedDenominator: { label: "العدد المختلط — المقام", help: "مقام الجزء الكسري من العدد المختلط." },
    },
    options: {
      operation: {
        simplify: "تبسيط",
        add: "جمع (+)",
        subtract: "طرح (−)",
        multiply: "ضرب (×)",
        divide: "قسمة (÷)",
      },
    },
    faq: [
      {
        q: "كيف يعمل تبسيط الكسور؟",
        a: "يُحسب القاسم المشترك الأكبر (ق.م.أ) للبسط والمقام باستخدام خوارزمية إقليدس، ثم يُقسم كلاهما عليه. مثال: 6/8 ← ق.م.أ = 2 ← 3/4.",
      },
    ],
  },

  ru: {
    title: "Калькулятор Дробей",
    short: "Сокращайте дроби и выполняйте сложение, вычитание, умножение и деление.",
    description:
      "Бесплатный калькулятор дробей. Сократите любую дробь до несократимой с помощью НОД, или вычислите сумму, разность, произведение или частное двух дробей.",
    keywords: [
      "калькулятор дробей",
      "сократить дробь",
      "сложение дробей",
      "вычитание дробей",
      "умножение дробей",
      "деление дробей",
      "НОД",
      "смешанное число",
    ],
    inputs: {
      numerator1: { label: "Числитель 1", help: "Числитель (верхнее число) первой дроби." },
      denominator1: { label: "Знаменатель 1", help: "Знаменатель (нижнее число) первой дроби. Не может быть нулём." },
      operation: { label: "Операция", help: "Сокращение или арифметическая операция с двумя дробями." },
      numerator2: { label: "Числитель 2", help: "Числитель второй дроби." },
      denominator2: { label: "Знаменатель 2", help: "Знаменатель второй дроби. Не может быть нулём." },
    },
    outputs: {
      numerator: { label: "Числитель результата", help: "Числитель сокращённой дроби-результата." },
      denominator: { label: "Знаменатель результата", help: "Знаменатель сокращённой дроби-результата." },
      decimal: { label: "Десятичное значение", help: "Дробь, выраженная десятичным числом." },
      mixedWhole: { label: "Смешанное число — целая часть", help: "Целая часть смешанного числа." },
      mixedNumerator: { label: "Смешанное число — числитель", help: "Числитель дробной части смешанного числа." },
      mixedDenominator: { label: "Смешанное число — знаменатель", help: "Знаменатель дробной части смешанного числа." },
    },
    options: {
      operation: {
        simplify: "Сократить",
        add: "Сложить (+)",
        subtract: "Вычесть (−)",
        multiply: "Умножить (×)",
        divide: "Разделить (÷)",
      },
    },
    faq: [
      {
        q: "Как работает сокращение дробей?",
        a: "Вычисляется НОД числителя и знаменателя (алгоритм Евклида), затем оба делятся на него. Пример: 6/8 → НОД=2 → 3/4.",
      },
    ],
  },

  zh: {
    title: "分数计算器",
    short: "化简分数，或对两个分数进行加、减、乘、除运算。",
    description:
      "免费分数计算器。利用最大公约数将任意分数化为最简形式，或对两个分数进行四则运算，结果显示为最简分数、小数和带分数。",
    keywords: [
      "分数计算器",
      "化简分数",
      "分数加法",
      "分数减法",
      "分数乘法",
      "分数除法",
      "最大公约数",
      "带分数",
    ],
    inputs: {
      numerator1: { label: "分子 1", help: "第一个分数的分子（上方数字）。" },
      denominator1: { label: "分母 1", help: "第一个分数的分母（下方数字）。不能为零。" },
      operation: { label: "运算", help: "化简分数或对两个分数进行运算。" },
      numerator2: { label: "分子 2", help: "第二个分数的分子。" },
      denominator2: { label: "分母 2", help: "第二个分数的分母。不能为零。" },
    },
    outputs: {
      numerator: { label: "结果分子", help: "化简后结果分数的分子。" },
      denominator: { label: "结果分母", help: "化简后结果分数的分母。" },
      decimal: { label: "小数值", help: "分数的小数表示形式。" },
      mixedWhole: { label: "带分数 — 整数部分", help: "带分数的整数部分。" },
      mixedNumerator: { label: "带分数 — 分子", help: "带分数分数部分的分子。" },
      mixedDenominator: { label: "带分数 — 分母", help: "带分数分数部分的分母。" },
    },
    options: {
      operation: {
        simplify: "化简",
        add: "加法 (+)",
        subtract: "减法 (−)",
        multiply: "乘法 (×)",
        divide: "除法 (÷)",
      },
    },
    faq: [
      {
        q: "分数化简是如何工作的？",
        a: "用欧几里得算法求分子和分母的最大公约数（GCD），再将两者都除以该 GCD。例如：6/8 → GCD=2 → 3/4。",
      },
    ],
  },

  ja: {
    title: "分数計算機",
    short: "分数を約分したり、2つの分数の加減乗除を行います。",
    description:
      "無料の分数計算機。GCDを使って任意の分数を最簡分数に約分するか、2つの分数の四則演算を行います。結果は約分された分数、小数、帯分数で表示されます。",
    keywords: [
      "分数計算機",
      "分数を約分",
      "分数の足し算",
      "分数の引き算",
      "分数の掛け算",
      "分数の割り算",
      "最大公約数",
      "帯分数",
    ],
    inputs: {
      numerator1: { label: "分子 1", help: "1つ目の分数の分子（上の数）。" },
      denominator1: { label: "分母 1", help: "1つ目の分数の分母（下の数）。ゼロは不可。" },
      operation: { label: "演算", help: "分数を約分するか、2つの分数で演算を行う。" },
      numerator2: { label: "分子 2", help: "2つ目の分数の分子。" },
      denominator2: { label: "分母 2", help: "2つ目の分数の分母。ゼロは不可。" },
    },
    outputs: {
      numerator: { label: "結果の分子", help: "約分後の結果分数の分子。" },
      denominator: { label: "結果の分母", help: "約分後の結果分数の分母。" },
      decimal: { label: "小数値", help: "分数の小数表現。" },
      mixedWhole: { label: "帯分数 — 整数部分", help: "帯分数の整数部分。" },
      mixedNumerator: { label: "帯分数 — 分子", help: "帯分数の分数部分の分子。" },
      mixedDenominator: { label: "帯分数 — 分母", help: "帯分数の分数部分の分母。" },
    },
    options: {
      operation: {
        simplify: "約分",
        add: "足し算 (+)",
        subtract: "引き算 (−)",
        multiply: "掛け算 (×)",
        divide: "割り算 (÷)",
      },
    },
    faq: [
      {
        q: "分数の約分はどのように行われますか？",
        a: "ユークリッドのアルゴリズムで分子と分母の最大公約数(GCD)を求め、両方をGCDで割ります。例：6/8 → GCD=2 → 3/4。",
      },
    ],
  },

  ko: {
    title: "분수 계산기",
    short: "분수를 약분하거나 두 분수의 사칙연산을 수행합니다.",
    description:
      "무료 분수 계산기. GCD를 이용해 분수를 최소 공약수로 약분하거나, 두 분수를 더하고 빼고 곱하고 나눕니다. 결과를 기약분수, 소수, 대분수로 표시합니다.",
    keywords: [
      "분수 계산기",
      "분수 약분",
      "분수 더하기",
      "분수 빼기",
      "분수 곱하기",
      "분수 나누기",
      "최대공약수",
      "대분수",
    ],
    inputs: {
      numerator1: { label: "분자 1", help: "첫 번째 분수의 분자 (위쪽 숫자)." },
      denominator1: { label: "분모 1", help: "첫 번째 분수의 분모 (아래쪽 숫자). 0일 수 없습니다." },
      operation: { label: "연산", help: "분수를 약분하거나 두 분수로 연산을 수행합니다." },
      numerator2: { label: "분자 2", help: "두 번째 분수의 분자." },
      denominator2: { label: "분모 2", help: "두 번째 분수의 분모. 0일 수 없습니다." },
    },
    outputs: {
      numerator: { label: "결과 분자", help: "약분된 결과 분수의 분자." },
      denominator: { label: "결과 분모", help: "약분된 결과 분수의 분모." },
      decimal: { label: "소수 값", help: "분수를 소수로 표현한 값." },
      mixedWhole: { label: "대분수 — 정수 부분", help: "대분수의 정수 부분." },
      mixedNumerator: { label: "대분수 — 분자", help: "대분수 분수 부분의 분자." },
      mixedDenominator: { label: "대분수 — 분모", help: "대분수 분수 부분의 분모." },
    },
    options: {
      operation: {
        simplify: "약분",
        add: "덧셈 (+)",
        subtract: "뺄셈 (−)",
        multiply: "곱셈 (×)",
        divide: "나눗셈 (÷)",
      },
    },
    faq: [
      {
        q: "분수 약분은 어떻게 이루어지나요?",
        a: "유클리드 알고리즘으로 분자와 분모의 최대공약수(GCD)를 구한 뒤, 둘 다 GCD로 나눕니다. 예: 6/8 → GCD=2 → 3/4.",
      },
    ],
  },

  hi: {
    title: "भिन्न कैलकुलेटर",
    short: "भिन्नों को सरल करें या दो भिन्नों का जोड़, घटाव, गुणा और भाग करें।",
    description:
      "मुफ़्त भिन्न कैलकुलेटर। महत्तम समापवर्तक (HCF/GCD) की सहायता से किसी भी भिन्न को सरलतम रूप में बदलें, या दो भिन्नों पर अंकगणितीय क्रियाएँ करें।",
    keywords: [
      "भिन्न कैलकुलेटर",
      "भिन्न सरलीकरण",
      "भिन्न जोड़",
      "भिन्न घटाव",
      "भिन्न गुणा",
      "भिन्न भाग",
      "HCF",
      "मिश्रित संख्या",
    ],
    inputs: {
      numerator1: { label: "अंश 1", help: "पहली भिन्न का अंश (ऊपरी अंक)।" },
      denominator1: { label: "हर 1", help: "पहली भिन्न का हर (निचला अंक)। शून्य नहीं हो सकता।" },
      operation: { label: "क्रिया", help: "भिन्न सरल करें या दो भिन्नों पर क्रिया करें।" },
      numerator2: { label: "अंश 2", help: "दूसरी भिन्न का अंश।" },
      denominator2: { label: "हर 2", help: "दूसरी भिन्न का हर। शून्य नहीं हो सकता।" },
    },
    outputs: {
      numerator: { label: "परिणाम अंश", help: "सरलीकृत परिणाम भिन्न का अंश।" },
      denominator: { label: "परिणाम हर", help: "सरलीकृत परिणाम भिन्न का हर।" },
      decimal: { label: "दशमलव मान", help: "भिन्न का दशमलव रूप।" },
      mixedWhole: { label: "मिश्रित संख्या — पूर्ण भाग", help: "मिश्रित संख्या का पूर्ण संख्या भाग।" },
      mixedNumerator: { label: "मिश्रित संख्या — अंश", help: "मिश्रित संख्या के भिन्न भाग का अंश।" },
      mixedDenominator: { label: "मिश्रित संख्या — हर", help: "मिश्रित संख्या के भिन्न भाग का हर।" },
    },
    options: {
      operation: {
        simplify: "सरल करें",
        add: "जोड़ (+)",
        subtract: "घटाव (−)",
        multiply: "गुणा (×)",
        divide: "भाग (÷)",
      },
    },
    faq: [
      {
        q: "भिन्न सरलीकरण कैसे काम करता है?",
        a: "यूक्लिड एल्गोरिदम द्वारा अंश और हर का महत्तम समापवर्तक (HCF/GCD) निकाला जाता है, फिर दोनों को उससे विभाजित किया जाता है। उदाहरण: 6/8 → HCF=2 → 3/4।",
      },
    ],
  },
};

export default i18n;
