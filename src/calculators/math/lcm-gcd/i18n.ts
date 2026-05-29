import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "GCD and LCM Calculator",
    short: "Calculate the greatest common divisor and least common multiple of two numbers.",
    description:
      "Free GCD and LCM calculator using the Euclidean algorithm. Find both the greatest common divisor and least common multiple with step-by-step breakdown.",
    keywords: [
      "GCD calculator",
      "LCM calculator",
      "greatest common divisor",
      "least common multiple",
      "Euclidean algorithm",
      "common divisor",
      "common multiple",
    ],
    inputs: {
      a: {
        label: "First number",
        help: "Enter an integer between 1 and 1,000,000.",
      },
      b: {
        label: "Second number",
        help: "Enter an integer between 1 and 1,000,000.",
      },
    },
    outputs: {
      gcdValue: {
        label: "GCD (Greatest Common Divisor)",
        help: "The largest number that divides both a and b without remainder.",
      },
      lcmValue: {
        label: "LCM (Least Common Multiple)",
        help: "The smallest number that is a multiple of both a and b.",
      },
      product: {
        label: "Product (a × b)",
        help: "The product of the two input numbers. Note: GCD(a,b) × LCM(a,b) = a × b.",
      },
      gcdSteps: {
        label: "Euclidean Algorithm Steps",
        help: "Step-by-step breakdown of the Euclidean algorithm used to compute GCD.",
      },
    },
    errors: {
      numberOutOfRange: "Both numbers must be between 1 and 1,000,000.",
    },
    faq: [
      {
        q: "What is GCD (Greatest Common Divisor)?",
        a: "GCD is the largest number that divides both input numbers without leaving a remainder. For example, GCD(12, 18) = 6, because 6 divides both 12 and 18.",
      },
      {
        q: "What is LCM (Least Common Multiple)?",
        a: "LCM is the smallest number that is a multiple of both input numbers. For example, LCM(12, 18) = 36, because 36 is the smallest number divisible by both 12 and 18.",
      },
      {
        q: "What is the Euclidean algorithm?",
        a: "The Euclidean algorithm is an efficient method to compute GCD by repeatedly dividing and taking remainders: GCD(a, b) = GCD(b, a mod b) until b = 0. It is much faster than prime factorization for large numbers.",
      },
      {
        q: "How are GCD and LCM related?",
        a: "They are related by the formula: GCD(a, b) × LCM(a, b) = a × b. This identity is useful for computing LCM once GCD is known.",
      },
      {
        q: "What is GCD of two coprime numbers?",
        a: "Coprime numbers (also called relatively prime) have a GCD of 1, meaning they share no common factors other than 1. For example, GCD(7, 11) = 1.",
      },
    ],
  },
  pt: {
    title: "GCD and LCM Calculator",
    short: "Calculate the greatest common divisor and least common multiple of two numbers.",
    description:
      "Free GCD and LCM calculator using the Euclidean algorithm. Find both the greatest common divisor and least common multiple with step-by-step breakdown.",
    keywords: [
      "GCD calculator",
      "LCM calculator",
      "greatest common divisor",
      "least common multiple",
      "Euclidean algorithm",
      "common divisor",
      "common multiple",
    ],
    inputs: {
      a: {
        label: "First number",
        help: "Enter an integer between 1 and 1,000,000.",
      },
      b: {
        label: "Second number",
        help: "Enter an integer between 1 and 1,000,000.",
      },
    },
    outputs: {
      gcdValue: {
        label: "GCD (Greatest Common Divisor)",
        help: "The largest number that divides both a and b without remainder.",
      },
      lcmValue: {
        label: "LCM (Least Common Multiple)",
        help: "The smallest number that is a multiple of both a and b.",
      },
      product: {
        label: "Product (a × b)",
        help: "The product of the two input numbers. Note: GCD(a,b) × LCM(a,b) = a × b.",
      },
      gcdSteps: {
        label: "Euclidean Algorithm Steps",
        help: "Step-by-step breakdown of the Euclidean algorithm used to compute GCD.",
      },
    },
    errors: {
      numberOutOfRange: "Both numbers must be between 1 and 1,000,000.",
    },
    faq: [
      {
        q: "What is GCD (Greatest Common Divisor)?",
        a: "GCD is the largest number that divides both input numbers without leaving a remainder. For example, GCD(12, 18) = 6, because 6 divides both 12 and 18.",
      },
      {
        q: "What is LCM (Least Common Multiple)?",
        a: "LCM is the smallest number that is a multiple of both input numbers. For example, LCM(12, 18) = 36, because 36 is the smallest number divisible by both 12 and 18.",
      },
      {
        q: "What is the Euclidean algorithm?",
        a: "The Euclidean algorithm is an efficient method to compute GCD by repeatedly dividing and taking remainders: GCD(a, b) = GCD(b, a mod b) until b = 0. It is much faster than prime factorization for large numbers.",
      },
      {
        q: "How are GCD and LCM related?",
        a: "They are related by the formula: GCD(a, b) × LCM(a, b) = a × b. This identity is useful for computing LCM once GCD is known.",
      },
      {
        q: "What is GCD of two coprime numbers?",
        a: "Coprime numbers (also called relatively prime) have a GCD of 1, meaning they share no common factors other than 1. For example, GCD(7, 11) = 1.",
      },
    ],
  },
  id: {
    title: "GCD and LCM Calculator",
    short: "Calculate the greatest common divisor and least common multiple of two numbers.",
    description:
      "Free GCD and LCM calculator using the Euclidean algorithm. Find both the greatest common divisor and least common multiple with step-by-step breakdown.",
    keywords: [
      "GCD calculator",
      "LCM calculator",
      "greatest common divisor",
      "least common multiple",
      "Euclidean algorithm",
      "common divisor",
      "common multiple",
    ],
    inputs: {
      a: {
        label: "First number",
        help: "Enter an integer between 1 and 1,000,000.",
      },
      b: {
        label: "Second number",
        help: "Enter an integer between 1 and 1,000,000.",
      },
    },
    outputs: {
      gcdValue: {
        label: "GCD (Greatest Common Divisor)",
        help: "The largest number that divides both a and b without remainder.",
      },
      lcmValue: {
        label: "LCM (Least Common Multiple)",
        help: "The smallest number that is a multiple of both a and b.",
      },
      product: {
        label: "Product (a × b)",
        help: "The product of the two input numbers. Note: GCD(a,b) × LCM(a,b) = a × b.",
      },
      gcdSteps: {
        label: "Euclidean Algorithm Steps",
        help: "Step-by-step breakdown of the Euclidean algorithm used to compute GCD.",
      },
    },
    errors: {
      numberOutOfRange: "Both numbers must be between 1 and 1,000,000.",
    },
    faq: [
      {
        q: "What is GCD (Greatest Common Divisor)?",
        a: "GCD is the largest number that divides both input numbers without leaving a remainder. For example, GCD(12, 18) = 6, because 6 divides both 12 and 18.",
      },
      {
        q: "What is LCM (Least Common Multiple)?",
        a: "LCM is the smallest number that is a multiple of both input numbers. For example, LCM(12, 18) = 36, because 36 is the smallest number divisible by both 12 and 18.",
      },
      {
        q: "What is the Euclidean algorithm?",
        a: "The Euclidean algorithm is an efficient method to compute GCD by repeatedly dividing and taking remainders: GCD(a, b) = GCD(b, a mod b) until b = 0. It is much faster than prime factorization for large numbers.",
      },
      {
        q: "How are GCD and LCM related?",
        a: "They are related by the formula: GCD(a, b) × LCM(a, b) = a × b. This identity is useful for computing LCM once GCD is known.",
      },
      {
        q: "What is GCD of two coprime numbers?",
        a: "Coprime numbers (also called relatively prime) have a GCD of 1, meaning they share no common factors other than 1. For example, GCD(7, 11) = 1.",
      },
    ],
  },

  tr: {
    title: "EBOB ve EKOK Hesaplayıcısı",
    short: "İki sayının en büyük ortak bölenini ve en küçük ortak katını hesaplayın.",
    description:
      "Öklid algoritmasını kullanan ücretsiz EBOB ve EKOK hesaplayıcı. Adım adım açıklamayla her iki değeri bulun.",
    keywords: [
      "EBOB hesaplayıcı",
      "EKOK hesaplayıcı",
      "en büyük ortak bölen",
      "en küçük ortak kat",
      "Öklid algoritması",
      "ortak bölen",
      "ortak kat",
    ],
    inputs: {
      a: {
        label: "Birinci sayı",
        help: "1 ile 1.000.000 arasında bir tam sayı girin.",
      },
      b: {
        label: "İkinci sayı",
        help: "1 ile 1.000.000 arasında bir tam sayı girin.",
      },
    },
    outputs: {
      gcdValue: {
        label: "EBOB (En Büyük Ortak Bölen)",
        help: "Hem a'yı hem de b'yi kalansız bölen en büyük sayı.",
      },
      lcmValue: {
        label: "EKOK (En Küçük Ortak Kat)",
        help: "Hem a'nın hem de b'nin katı olan en küçük sayı.",
      },
      product: {
        label: "Çarpım (a × b)",
        help: "İki giriş sayısının çarpımı. Not: EBOB(a,b) × EKOK(a,b) = a × b.",
      },
      gcdSteps: {
        label: "Öklid Algoritması Adımları",
        help: "EBOB hesaplamak için kullanılan Öklid algoritmasının adım adım açıklaması.",
      },
    },
    errors: {
      numberOutOfRange: "Her iki sayı da 1 ile 1.000.000 arasında olmalıdır.",
    },
    faq: [
      {
        q: "EBOB (En Büyük Ortak Bölen) nedir?",
        a: "EBOB, her iki giriş sayısını kalansız bölen en büyük sayıdır. Örneğin, EBOB(12, 18) = 6, çünkü 6 hem 12'yi hem 18'i böler.",
      },
      {
        q: "EKOK (En Küçük Ortak Kat) nedir?",
        a: "EKOK, her iki giriş sayısının katı olan en küçük sayıdır. Örneğin, EKOK(12, 18) = 36, çünkü 36 hem 12'ye hem 18'e bölünür.",
      },
      {
        q: "Öklid algoritması nedir?",
        a: "Öklid algoritması, tekrar tekrar bölüm ve kalan alarak EBOB'u hesaplamanın verimli bir yöntemidir: EBOB(a, b) = EBOB(b, a mod b), b = 0 olana kadar. Büyük sayılar için asal çarpanlarına ayırmaktan çok daha hızlıdır.",
      },
      {
        q: "EBOB ve EKOK nasıl ilişkilidir?",
        a: "Bunlar şu formülla ilişkilidir: EBOB(a, b) × EKOK(a, b) = a × b. Bu özdeşlik, EBOB bilinince EKOK'u hesaplamak için kullanışlıdır.",
      },
      {
        q: "İki aralarında asal sayının EBOB'u nedir?",
        a: "Aralarında asal sayılar (veya ortak asallar olmayan sayılar) EBOB'u 1'dir, çünkü 1 dışında ortak faktör yoktur. Örneğin, EBOB(7, 11) = 1.",
      },
    ],
  },
  de: {
    title: "ggT und kgV Rechner",
    short:
      "Berechnen Sie den größten gemeinsamen Teiler und das kleinste gemeinsame Vielfache zweier Zahlen.",
    description:
      "Kostenloser ggT- und kgV-Rechner mit dem Euklidischen Algorithmus. Finden Sie beide Werte mit Schritt-für-Schritt-Erklärung.",
    keywords: [
      "ggT Rechner",
      "kgV Rechner",
      "größter gemeinsamer Teiler",
      "kleinstes gemeinsames Vielfaches",
      "Euklidischer Algorithmus",
      "gemeinsamer Teiler",
      "gemeinsames Vielfaches",
    ],
    inputs: {
      a: {
        label: "Erste Zahl",
        help: "Geben Sie eine ganze Zahl zwischen 1 und 1.000.000 ein.",
      },
      b: {
        label: "Zweite Zahl",
        help: "Geben Sie eine ganze Zahl zwischen 1 und 1.000.000 ein.",
      },
    },
    outputs: {
      gcdValue: {
        label: "ggT (Größter Gemeinsamer Teiler)",
        help: "Die größte Zahl, die sowohl a als auch b ohne Rest teilt.",
      },
      lcmValue: {
        label: "kgV (Kleinstes Gemeinsames Vielfaches)",
        help: "Die kleinste Zahl, die ein Vielfaches von sowohl a als auch b ist.",
      },
      product: {
        label: "Produkt (a × b)",
        help: "Das Produkt der beiden Eingabezahlen. Hinweis: ggT(a,b) × kgV(a,b) = a × b.",
      },
      gcdSteps: {
        label: "Schritte des Euklidischen Algorithmus",
        help: "Schritt-für-Schritt-Erklärung des Euklidischen Algorithmus zur Berechnung des ggT.",
      },
    },
    errors: {
      numberOutOfRange: "Beide Zahlen müssen zwischen 1 und 1.000.000 liegen.",
    },
    faq: [
      {
        q: "Was ist ggT (Größter Gemeinsamer Teiler)?",
        a: "ggT ist die größte Zahl, die beide Eingabezahlen ohne Rest teilt. Zum Beispiel ist ggT(12, 18) = 6, da 6 sowohl 12 als auch 18 teilt.",
      },
      {
        q: "Was ist kgV (Kleinstes Gemeinsames Vielfaches)?",
        a: "kgV ist die kleinste Zahl, die ein Vielfaches beider Eingabezahlen ist. Zum Beispiel ist kgV(12, 18) = 36, da 36 die kleinste Zahl ist, die durch 12 und 18 teilbar ist.",
      },
      {
        q: "Was ist der Euklidische Algorithmus?",
        a: "Der Euklidische Algorithmus ist eine effiziente Methode zur Berechnung des ggT durch wiederholtes Teilen und Restbildung: ggT(a, b) = ggT(b, a mod b) bis b = 0. Es ist viel schneller als Primfaktorisierung für große Zahlen.",
      },
      {
        q: "Wie hängen ggT und kgV zusammen?",
        a: "Sie sind durch die Formel verbunden: ggT(a, b) × kgV(a, b) = a × b. Diese Identität ist nützlich zum Berechnen des kgV, sobald der ggT bekannt ist.",
      },
      {
        q: "Was ist ggT zweier teilerfremder Zahlen?",
        a: "Teilerfremde Zahlen (auch relativ prim genannt) haben einen ggT von 1, da sie außer 1 keinen gemeinsamen Faktor haben. Zum Beispiel ist ggT(7, 11) = 1.",
      },
    ],
  },
  fr: {
    title: "Calculateur de PGCD et PPCM",
    short:
      "Calculez le plus grand commun diviseur et le plus petit commun multiple de deux nombres.",
    description:
      "Calculateur gratuit de PGCD et PPCM utilisant l'algorithme d'Euclide. Trouvez les deux valeurs avec une explication étape par étape.",
    keywords: [
      "calculateur PGCD",
      "calculateur PPCM",
      "plus grand commun diviseur",
      "plus petit commun multiple",
      "algorithme d'Euclide",
      "commun diviseur",
      "commun multiple",
    ],
    inputs: {
      a: {
        label: "Premier nombre",
        help: "Entrez un entier entre 1 et 1.000.000.",
      },
      b: {
        label: "Deuxième nombre",
        help: "Entrez un entier entre 1 et 1.000.000.",
      },
    },
    outputs: {
      gcdValue: {
        label: "PGCD (Plus Grand Commun Diviseur)",
        help: "Le plus grand nombre qui divise à la fois a et b sans reste.",
      },
      lcmValue: {
        label: "PPCM (Plus Petit Commun Multiple)",
        help: "Le plus petit nombre qui est un multiple de a et de b.",
      },
      product: {
        label: "Produit (a × b)",
        help: "Le produit des deux nombres d'entrée. Note: PGCD(a,b) × PPCM(a,b) = a × b.",
      },
      gcdSteps: {
        label: "Étapes de l'Algorithme d'Euclide",
        help: "Explication étape par étape de l'algorithme d'Euclide utilisé pour calculer le PGCD.",
      },
    },
    errors: {
      numberOutOfRange: "Les deux nombres doivent être entre 1 et 1.000.000.",
    },
    faq: [
      {
        q: "Qu'est-ce que le PGCD (Plus Grand Commun Diviseur)?",
        a: "Le PGCD est le plus grand nombre qui divise les deux nombres d'entrée sans reste. Par exemple, PGCD(12, 18) = 6, car 6 divise à la fois 12 et 18.",
      },
      {
        q: "Qu'est-ce que le PPCM (Plus Petit Commun Multiple)?",
        a: "Le PPCM est le plus petit nombre qui est un multiple des deux nombres d'entrée. Par exemple, PPCM(12, 18) = 36, car 36 est le plus petit nombre divisible par 12 et 18.",
      },
      {
        q: "Qu'est-ce que l'algorithme d'Euclide?",
        a: "L'algorithme d'Euclide est une méthode efficace pour calculer le PGCD en divisant répétitivement et en prenant les restes: PGCD(a, b) = PGCD(b, a mod b) jusqu'à b = 0. C'est beaucoup plus rapide que la factorisation en nombres premiers pour les grands nombres.",
      },
      {
        q: "Comment le PGCD et le PPCM sont-ils liés?",
        a: "Ils sont liés par la formule: PGCD(a, b) × PPCM(a, b) = a × b. Cette identité est utile pour calculer le PPCM une fois le PGCD connu.",
      },
      {
        q: "Quel est le PGCD de deux nombres premiers entre eux?",
        a: "Les nombres premiers entre eux (ou relativement premiers) ont un PGCD de 1, ce qui signifie qu'ils n'ont aucun facteur commun autre que 1. Par exemple, PGCD(7, 11) = 1.",
      },
    ],
  },
  es: {
    title: "Calculadora de MCD y MCM",
    short:
      "Calcule el máximo común divisor y el mínimo común múltiplo de dos números.",
    description:
      "Calculadora gratuita de MCD y MCM usando el algoritmo de Euclides. Encuentre ambos valores con explicación paso a paso.",
    keywords: [
      "calculadora MCD",
      "calculadora MCM",
      "máximo común divisor",
      "mínimo común múltiplo",
      "algoritmo de Euclides",
      "común divisor",
      "común múltiplo",
    ],
    inputs: {
      a: {
        label: "Primer número",
        help: "Ingrese un entero entre 1 y 1.000.000.",
      },
      b: {
        label: "Segundo número",
        help: "Ingrese un entero entre 1 y 1.000.000.",
      },
    },
    outputs: {
      gcdValue: {
        label: "MCD (Máximo Común Divisor)",
        help: "El número más grande que divide tanto a como b sin dejar residuo.",
      },
      lcmValue: {
        label: "MCM (Mínimo Común Múltiplo)",
        help: "El número más pequeño que es múltiplo de tanto a como b.",
      },
      product: {
        label: "Producto (a × b)",
        help: "El producto de los dos números de entrada. Nota: MCD(a,b) × MCM(a,b) = a × b.",
      },
      gcdSteps: {
        label: "Pasos del Algoritmo de Euclides",
        help: "Explicación paso a paso del algoritmo de Euclides usado para calcular el MCD.",
      },
    },
    errors: {
      numberOutOfRange: "Ambos números deben estar entre 1 y 1.000.000.",
    },
    faq: [
      {
        q: "¿Qué es el MCD (Máximo Común Divisor)?",
        a: "El MCD es el número más grande que divide ambos números de entrada sin dejar residuo. Por ejemplo, MCD(12, 18) = 6, porque 6 divide tanto a 12 como a 18.",
      },
      {
        q: "¿Qué es el MCM (Mínimo Común Múltiplo)?",
        a: "El MCM es el número más pequeño que es múltiplo de ambos números de entrada. Por ejemplo, MCM(12, 18) = 36, porque 36 es el número más pequeño divisible por 12 y 18.",
      },
      {
        q: "¿Qué es el algoritmo de Euclides?",
        a: "El algoritmo de Euclides es un método eficiente para calcular el MCD mediante división repetida y cálculo de residuos: MCD(a, b) = MCD(b, a mod b) hasta que b = 0. Es mucho más rápido que la factorización en números primos para números grandes.",
      },
      {
        q: "¿Cómo están relacionados el MCD y el MCM?",
        a: "Están relacionados por la fórmula: MCD(a, b) × MCM(a, b) = a × b. Esta identidad es útil para calcular el MCM una vez que se conoce el MCD.",
      },
      {
        q: "¿Cuál es el MCD de dos números coprimos?",
        a: "Los números coprimos (o relativamente primos) tienen un MCD de 1, lo que significa que no tienen factores comunes excepto 1. Por ejemplo, MCD(7, 11) = 1.",
      },
    ],
  },
  it: {
    title: "Calcolatore di MCD e mcm",
    short:
      "Calcola il massimo comune divisore e il minimo comune multiplo di due numeri.",
    description:
      "Calcolatore gratuito di MCD e mcm usando l'algoritmo di Euclide. Trova entrambi i valori con spiegazione passo dopo passo.",
    keywords: [
      "calcolatore MCD",
      "calcolatore mcm",
      "massimo comune divisore",
      "minimo comune multiplo",
      "algoritmo di Euclide",
      "comune divisore",
      "comune multiplo",
    ],
    inputs: {
      a: {
        label: "Primo numero",
        help: "Inserisci un intero tra 1 e 1.000.000.",
      },
      b: {
        label: "Secondo numero",
        help: "Inserisci un intero tra 1 e 1.000.000.",
      },
    },
    outputs: {
      gcdValue: {
        label: "MCD (Massimo Comune Divisore)",
        help: "Il numero più grande che divide sia a che b senza resto.",
      },
      lcmValue: {
        label: "mcm (Minimo Comune Multiplo)",
        help: "Il numero più piccolo che è un multiplo di a e b.",
      },
      product: {
        label: "Prodotto (a × b)",
        help: "Il prodotto dei due numeri di input. Nota: MCD(a,b) × mcm(a,b) = a × b.",
      },
      gcdSteps: {
        label: "Passi dell'Algoritmo di Euclide",
        help: "Spiegazione passo dopo passo dell'algoritmo di Euclide usato per calcolare il MCD.",
      },
    },
    errors: {
      numberOutOfRange: "Entrambi i numeri devono essere tra 1 e 1.000.000.",
    },
    faq: [
      {
        q: "Cos'è il MCD (Massimo Comune Divisore)?",
        a: "Il MCD è il numero più grande che divide entrambi i numeri di input senza resto. Ad esempio, MCD(12, 18) = 6, perché 6 divide sia 12 che 18.",
      },
      {
        q: "Cos'è il mcm (Minimo Comune Multiplo)?",
        a: "Il mcm è il numero più piccolo che è un multiplo di entrambi i numeri di input. Ad esempio, mcm(12, 18) = 36, perché 36 è il numero più piccolo divisibile per 12 e 18.",
      },
      {
        q: "Cos'è l'algoritmo di Euclide?",
        a: "L'algoritmo di Euclide è un metodo efficiente per calcolare il MCD mediante divisione ripetuta e calcolo dei resti: MCD(a, b) = MCD(b, a mod b) finché b = 0. È molto più veloce della fattorizzazione in numeri primi per numeri grandi.",
      },
      {
        q: "Come sono correlati il MCD e il mcm?",
        a: "Sono correlati dalla formula: MCD(a, b) × mcm(a, b) = a × b. Questa identità è utile per calcolare il mcm una volta noto il MCD.",
      },
      {
        q: "Qual è il MCD di due numeri coprimi?",
        a: "I numeri coprimi (o relativamente primi) hanno un MCD di 1, il che significa che non hanno fattori comuni a parte 1. Ad esempio, MCD(7, 11) = 1.",
      },
    ],
  },
  ar: {
    title: "حاسبة العامل المشترك الأكبر والمضاعف المشترك الأصغر",
    short:
      "احسب العامل المشترك الأكبر والمضاعف المشترك الأصغر لعددين.",
    description:
      "حاسبة مجانية للعامل المشترك الأكبر والمضاعف المشترك الأصغر باستخدام خوارزمية إقليدس. ابحث عن كلا القيمتين مع شرح خطوة بخطوة.",
    keywords: [
      "حاسبة ع.م.أ",
      "حاسبة م.م.أ",
      "عامل مشترك أكبر",
      "مضاعف مشترك أصغر",
      "خوارزمية إقليدس",
      "عامل مشترك",
      "مضاعف مشترك",
    ],
    inputs: {
      a: {
        label: "الرقم الأول",
        help: "أدخل عدداً صحيحاً بين 1 و 1.000.000.",
      },
      b: {
        label: "الرقم الثاني",
        help: "أدخل عدداً صحيحاً بين 1 و 1.000.000.",
      },
    },
    outputs: {
      gcdValue: {
        label: "ع.م.أ (العامل المشترك الأكبر)",
        help: "أكبر عدد يقسم كلا من a و b بدون باقٍ.",
      },
      lcmValue: {
        label: "م.م.أ (المضاعف المشترك الأصغر)",
        help: "أصغر عدد يكون مضاعفاً لكل من a و b.",
      },
      product: {
        label: "الحاصل (a × b)",
        help: "حاصل ضرب العددين المدخلين. ملاحظة: ع.م.أ(a,b) × م.م.أ(a,b) = a × b.",
      },
      gcdSteps: {
        label: "خطوات خوارزمية إقليدس",
        help: "شرح خطوة بخطوة لخوارزمية إقليدس المستخدمة لحساب ع.م.أ.",
      },
    },
    errors: {
      numberOutOfRange: "يجب أن يكون كلا الرقمين بين 1 و 1.000.000.",
    },
    faq: [
      {
        q: "ما هو ع.م.أ (العامل المشترك الأكبر)؟",
        a: "ع.م.أ هو أكبر عدد يقسم العددين المدخلين بدون باقٍ. على سبيل المثال، ع.م.أ(12، 18) = 6، لأن 6 يقسم كلاً من 12 و 18.",
      },
      {
        q: "ما هو م.م.أ (المضاعف المشترك الأصغر)؟",
        a: "م.م.أ هو أصغر عدد يكون مضاعفاً للعددين المدخلين. على سبيل المثال، م.م.أ(12، 18) = 36، لأن 36 هو أصغر عدد يقبل القسمة على 12 و 18.",
      },
      {
        q: "ما هي خوارزمية إقليدس؟",
        a: "خوارزمية إقليدس هي طريقة فعالة لحساب ع.م.أ بالقسمة المتكررة وأخذ الباقي: ع.م.أ(a، b) = ع.م.أ(b، a mod b) حتى b = 0. إنها أسرع بكثير من التحليل إلى عوامل أولية للأعداد الكبيرة.",
      },
      {
        q: "كيف يرتبط ع.م.أ وم.م.أ؟",
        a: "ترتبط بالصيغة: ع.م.أ(a، b) × م.م.أ(a، b) = a × b. هذه المعادلة مفيدة لحساب م.م.أ بمجرد معرفة ع.م.أ.",
      },
      {
        q: "ما هو ع.م.أ لعددين أوليين فيما بينهما؟",
        a: "الأعداد الأولية فيما بينهما (أو الأعداد المتعايشة) لها ع.م.أ = 1، مما يعني عدم وجود عوامل مشتركة سوى 1. على سبيل المثال، ع.م.أ(7، 11) = 1.",
      },
    ],
  },
  ru: {
    title: "Калькулятор НОД и НОК",
    short:
      "Вычислите наибольший общий делитель и наименьшее общее кратное двух чисел.",
    description:
      "Бесплатный калькулятор НОД и НОК с использованием алгоритма Евклида. Найдите оба значения с пошаговым объяснением.",
    keywords: [
      "калькулятор НОД",
      "калькулятор НОК",
      "наибольший общий делитель",
      "наименьшее общее кратное",
      "алгоритм Евклида",
      "общий делитель",
      "общее кратное",
    ],
    inputs: {
      a: {
        label: "Первое число",
        help: "Введите целое число от 1 до 1.000.000.",
      },
      b: {
        label: "Второе число",
        help: "Введите целое число от 1 до 1.000.000.",
      },
    },
    outputs: {
      gcdValue: {
        label: "НОД (Наибольший Общий Делитель)",
        help: "Наибольшее число, которое делит и a, и b без остатка.",
      },
      lcmValue: {
        label: "НОК (Наименьшее Общее Кратное)",
        help: "Наименьшее число, которое является кратным и a, и b.",
      },
      product: {
        label: "Произведение (a × b)",
        help: "Произведение двух входных чисел. Примечание: НОД(a,b) × НОК(a,b) = a × b.",
      },
      gcdSteps: {
        label: "Шаги Алгоритма Евклида",
        help: "Пошаговое объяснение алгоритма Евклида, используемого для вычисления НОД.",
      },
    },
    errors: {
      numberOutOfRange: "Оба числа должны быть между 1 и 1.000.000.",
    },
    faq: [
      {
        q: "Что такое НОД (Наибольший Общий Делитель)?",
        a: "НОД — это наибольшее число, которое делит оба входных числа без остатка. Например, НОД(12, 18) = 6, потому что 6 делит и 12, и 18.",
      },
      {
        q: "Что такое НОК (Наименьшее Общее Кратное)?",
        a: "НОК — это наименьшее число, которое является кратным обоих входных чисел. Например, НОК(12, 18) = 36, потому что 36 — это наименьшее число, которое делится и на 12, и на 18.",
      },
      {
        q: "Что такое алгоритм Евклида?",
        a: "Алгоритм Евклида — это эффективный метод вычисления НОД путём повторного деления и нахождения остатков: НОД(a, b) = НОД(b, a mod b) до b = 0. Он намного быстрее разложения на простые множители для больших чисел.",
      },
      {
        q: "Как связаны НОД и НОК?",
        a: "Они связаны формулой: НОД(a, b) × НОК(a, b) = a × b. Это тождество полезно для вычисления НОК после нахождения НОД.",
      },
      {
        q: "Чему равен НОД двух взаимно простых чисел?",
        a: "Взаимно простые числа (или относительно простые) имеют НОД = 1, что означает отсутствие общих делителей кроме 1. Например, НОД(7, 11) = 1.",
      },
    ],
  },
  zh: {
    title: "最大公约数和最小公倍数计算器",
    short: "计算两个数的最大公约数和最小公倍数。",
    description:
      "使用欧几里得算法的免费最大公约数和最小公倍数计算器。获得两个值及逐步说明。",
    keywords: [
      "最大公约数计算器",
      "最小公倍数计算器",
      "最大公约数",
      "最小公倍数",
      "欧几里得算法",
      "公约数",
      "公倍数",
    ],
    inputs: {
      a: {
        label: "第一个数字",
        help: "输入1到1,000,000之间的整数。",
      },
      b: {
        label: "第二个数字",
        help: "输入1到1,000,000之间的整数。",
      },
    },
    outputs: {
      gcdValue: {
        label: "最大公约数",
        help: "能整除a和b的最大数字（无余数）。",
      },
      lcmValue: {
        label: "最小公倍数",
        help: "既是a的倍数又是b的倍数的最小数字。",
      },
      product: {
        label: "乘积 (a × b)",
        help: "两个输入数字的乘积。注：最大公约数(a,b) × 最小公倍数(a,b) = a × b。",
      },
      gcdSteps: {
        label: "欧几里得算法步骤",
        help: "用于计算最大公约数的欧几里得算法的逐步说明。",
      },
    },
    errors: {
      numberOutOfRange: "两个数字都必须在1到1,000,000之间。",
    },
    faq: [
      {
        q: "什么是最大公约数？",
        a: "最大公约数是能整除两个输入数字的最大数字（无余数）。例如，最大公约数(12, 18) = 6，因为6既能整除12又能整除18。",
      },
      {
        q: "什么是最小公倍数？",
        a: "最小公倍数是既是a的倍数又是b的倍数的最小数字。例如，最小公倍数(12, 18) = 36，因为36是既能被12整除又能被18整除的最小数字。",
      },
      {
        q: "什么是欧几里得算法？",
        a: "欧几里得算法是通过重复除法和求余计算最大公约数的高效方法：最大公约数(a, b) = 最大公约数(b, a mod b)，直到b = 0。对于大数，它比质因数分解快得多。",
      },
      {
        q: "最大公约数和最小公倍数有什么关系？",
        a: "它们通过公式相关：最大公约数(a, b) × 最小公倍数(a, b) = a × b。一旦知道最大公约数，这个恒等式对计算最小公倍数很有用。",
      },
      {
        q: "互质数的最大公约数是什么？",
        a: "互质数（或相对素数）的最大公约数为1，这意味着除了1以外没有其他公因数。例如，最大公约数(7, 11) = 1。",
      },
    ],
  },
  ja: {
    title: "最大公約数と最小公倍数の計算機",
    short: "2つの数の最大公約数と最小公倍数を計算します。",
    description:
      "ユークリッドの互除法を使用した無料の最大公約数と最小公倍数の計算機。ステップバイステップの説明付きで両方の値を見つけます。",
    keywords: [
      "最大公約数計算機",
      "最小公倍数計算機",
      "最大公約数",
      "最小公倍数",
      "ユークリッドの互除法",
      "公約数",
      "公倍数",
    ],
    inputs: {
      a: {
        label: "最初の数",
        help: "1から1,000,000の間の整数を入力してください。",
      },
      b: {
        label: "2番目の数",
        help: "1から1,000,000の間の整数を入力してください。",
      },
    },
    outputs: {
      gcdValue: {
        label: "最大公約数",
        help: "aとbの両方を余りなく割り切る最大の数。",
      },
      lcmValue: {
        label: "最小公倍数",
        help: "aとbの両方の倍数である最小の数。",
      },
      product: {
        label: "積 (a × b)",
        help: "2つの入力数の積。注：最大公約数(a,b) × 最小公倍数(a,b) = a × b。",
      },
      gcdSteps: {
        label: "ユークリッドの互除法の手順",
        help: "最大公約数を計算するために使用されるユークリッドの互除法のステップバイステップ説明。",
      },
    },
    errors: {
      numberOutOfRange: "両方の数は1から1,000,000の間である必要があります。",
    },
    faq: [
      {
        q: "最大公約数とは何ですか？",
        a: "最大公約数は、2つの入力数を余りなく割り切る最大の数です。たとえば、最大公約数(12, 18) = 6、なぜなら6は12と18の両方を割り切るからです。",
      },
      {
        q: "最小公倍数とは何ですか？",
        a: "最小公倍数は、2つの入力数の両方の倍数である最小の数です。たとえば、最小公倍数(12, 18) = 36、なぜなら36は12と18の両方で割り切れる最小の数だからです。",
      },
      {
        q: "ユークリッドの互除法とは何ですか？",
        a: "ユークリッドの互除法は、繰り返し除算と余りの計算により最大公約数を計算する効率的な方法です：最大公約数(a, b) = 最大公約数(b, a mod b)（b = 0になるまで）。大きな数に対する素因数分解よりはるかに高速です。",
      },
      {
        q: "最大公約数と最小公倍数はどのように関連していますか？",
        a: "これらは式で関連しています：最大公約数(a, b) × 最小公倍数(a, b) = a × b。この恒等式は、最大公約数がわかった後に最小公倍数を計算するのに役立ちます。",
      },
      {
        q: "互いに素な2つの数の最大公約数は何ですか？",
        a: "互いに素な数（または相対的に素な数）の最大公約数は1です。これは1以外に共通の因数がないことを意味します。たとえば、最大公約数(7, 11) = 1。",
      },
    ],
  },
  ko: {
    title: "최대공약수와 최소공배수 계산기",
    short: "두 수의 최대공약수와 최소공배수를 계산하세요.",
    description:
      "유클리드 알고리즘을 사용한 무료 최대공약수 및 최소공배수 계산기입니다. 단계별 설명과 함께 두 값을 찾아보세요.",
    keywords: [
      "최대공약수 계산기",
      "최소공배수 계산기",
      "최대공약수",
      "최소공배수",
      "유클리드 알고리즘",
      "공약수",
      "공배수",
    ],
    inputs: {
      a: {
        label: "첫 번째 수",
        help: "1부터 1,000,000 사이의 정수를 입력하세요.",
      },
      b: {
        label: "두 번째 수",
        help: "1부터 1,000,000 사이의 정수를 입력하세요.",
      },
    },
    outputs: {
      gcdValue: {
        label: "최대공약수",
        help: "a와 b를 모두 나머지 없이 나누는 가장 큰 수입니다.",
      },
      lcmValue: {
        label: "최소공배수",
        help: "a와 b의 배수인 가장 작은 수입니다.",
      },
      product: {
        label: "곱 (a × b)",
        help: "두 입력 수의 곱입니다. 참고: 최대공약수(a,b) × 최소공배수(a,b) = a × b.",
      },
      gcdSteps: {
        label: "유클리드 알고리즘 단계",
        help: "최대공약수를 계산하는 데 사용되는 유클리드 알고리즘의 단계별 설명입니다.",
      },
    },
    errors: {
      numberOutOfRange: "두 수 모두 1부터 1,000,000 사이여야 합니다.",
    },
    faq: [
      {
        q: "최대공약수란 무엇입니까?",
        a: "최대공약수는 두 입력 수를 나머지 없이 나누는 가장 큰 수입니다. 예를 들어 최대공약수(12, 18) = 6인데, 6은 12와 18을 모두 나눕니다.",
      },
      {
        q: "최소공배수란 무엇입니까?",
        a: "최소공배수는 두 입력 수의 배수인 가장 작은 수입니다. 예를 들어 최소공배수(12, 18) = 36인데, 36은 12와 18 모두로 나누어지는 가장 작은 수입니다.",
      },
      {
        q: "유클리드 알고리즘이란 무엇입니까?",
        a: "유클리드 알고리즘은 반복된 나눗셈과 나머지 계산을 통해 최대공약수를 계산하는 효율적인 방법입니다: 최대공약수(a, b) = 최대공약수(b, a mod b)(b = 0이 될 때까지). 큰 수에서는 소인수분해보다 훨씬 빠릅니다.",
      },
      {
        q: "최대공약수와 최소공배수는 어떻게 관련되어 있습니까?",
        a: "이들은 다음 공식으로 연관됩니다: 최대공약수(a, b) × 최소공배수(a, b) = a × b. 이 항등식은 최대공약수를 알고 있을 때 최소공배수를 계산하는 데 유용합니다.",
      },
      {
        q: "서로소인 두 수의 최대공약수는 무엇입니까?",
        a: "서로소 수(또는 상대적으로 소수)의 최대공약수는 1입니다. 이는 1 외에 공통 인수가 없다는 의미입니다. 예를 들어 최대공약수(7, 11) = 1입니다.",
      },
    ],
  },
  hi: {
    title: "महत्तम समापवर्तक और लघुत्तम समापवर्त्य कैलकुलेटर",
    short: "दो संख्याओं का महत्तम समापवर्तक और लघुत्तम समापवर्त्य ज्ञात करें।",
    description:
      "यूक्लिड एल्गोरिथम का उपयोग करने वाला निःशुल्क महत्तम समापवर्तक और लघुत्तम समापवर्त्य कैलकुलेटर। चरण दर चरण स्पष्टीकरण के साथ दोनों मान ज्ञात करें।",
    keywords: [
      "महत्तम समापवर्तक कैलकुलेटर",
      "लघुत्तम समापवर्त्य कैलकुलेटर",
      "महत्तम समापवर्तक",
      "लघुत्तम समापवर्त्य",
      "यूक्लिड एल्गोरिथम",
      "समापवर्तक",
      "समापवर्त्य",
    ],
    inputs: {
      a: {
        label: "पहली संख्या",
        help: "1 और 1,000,000 के बीच एक पूर्णांक दर्ज करें।",
      },
      b: {
        label: "दूसरी संख्या",
        help: "1 और 1,000,000 के बीच एक पूर्णांक दर्ज करें।",
      },
    },
    outputs: {
      gcdValue: {
        label: "महत्तम समापवर्तक",
        help: "वह सबसे बड़ी संख्या जो a और b दोनों को बिना शेष के विभाजित करती है।",
      },
      lcmValue: {
        label: "लघुत्तम समापवर्त्य",
        help: "वह सबसे छोटी संख्या जो a और b दोनों का गुणज है।",
      },
      product: {
        label: "गुणनफल (a × b)",
        help: "दोनों इनपुट संख्याओं का गुणनफल। नोट: महत्तम समापवर्तक(a,b) × लघुत्तम समापवर्त्य(a,b) = a × b।",
      },
      gcdSteps: {
        label: "यूक्लिड एल्गोरिथम के चरण",
        help: "महत्तम समापवर्तक की गणना के लिए उपयोग किए जाने वाले यूक्लिड एल्गोरिथम की चरण दर चरण व्याख्या।",
      },
    },
    errors: {
      numberOutOfRange: "दोनों संख्याएं 1 और 1,000,000 के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "महत्तम समापवर्तक क्या है?",
        a: "महत्तम समापवर्तक वह सबसे बड़ी संख्या है जो दोनों इनपुट संख्याओं को बिना शेष के विभाजित करती है। उदाहरण के लिए, महत्तम समापवर्तक(12, 18) = 6, क्योंकि 6 12 और 18 दोनों को विभाजित करता है।",
      },
      {
        q: "लघुत्तम समापवर्त्य क्या है?",
        a: "लघुत्तम समापवर्त्य वह सबसे छोटी संख्या है जो दोनों इनपुट संख्याओं का गुणज है। उदाहरण के लिए, लघुत्तम समापवर्त्य(12, 18) = 36, क्योंकि 36 सबसे छोटी संख्या है जो 12 और 18 दोनों से विभाज्य है।",
      },
      {
        q: "यूक्लिड एल्गोरिथम क्या है?",
        a: "यूक्लिड एल्गोरिथम महत्तम समापवर्तक की गणना करने की एक कुशल विधि है जो बार-बार विभाजन और शेष लेने से करती है: महत्तम समापवर्तक(a, b) = महत्तम समापवर्तक(b, a mod b) जब तक b = 0 नहीं हो। यह बड़ी संख्याओं के लिए अभाज्य गुणनखंडन से बहुत तेजी से काम करता है।",
      },
      {
        q: "महत्तम समापवर्तक और लघुत्तम समापवर्त्य कैसे संबंधित हैं?",
        a: "वे सूत्र द्वारा संबंधित हैं: महत्तम समापवर्तक(a, b) × लघुत्तम समापवर्त्य(a, b) = a × b। जब महत्तम समापवर्तक ज्ञात हो तो लघुत्तम समापवर्त्य की गणना के लिए यह सर्वसमिका उपयोगी है।",
      },
      {
        q: "सहअभाज्य संख्याओं का महत्तम समापवर्तक क्या है?",
        a: "सहअभाज्य संख्याओं (या सापेक्ष अभाज्य संख्याओं) का महत्तम समापवर्तक 1 है, जिसका अर्थ है कि उनके पास 1 के अलावा कोई सामान्य कारक नहीं है। उदाहरण के लिए, महत्तम समापवर्तक(7, 11) = 1।",
      },
    ],
  },
};

export default i18n;
