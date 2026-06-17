import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Prime Factorization Calculator",
    short:
      "Decompose any number into its prime factors and view the exponent notation.",
    description:
      "Free prime factorization tool. Enter a number and instantly see its prime factors with exponents. Learn the fundamental theorem of arithmetic.",
    keywords: [
      "prime factorization",
      "prime factors",
      "number theory",
      "fundamental theorem",
      "factorization calculator",
      "prime decomposition",
      "exponent notation",
    ],
    inputs: {
      number: {
        label: "Number",
        help: "Enter an integer between 2 and 1,000,000 to factorize.",
      },
    },
    outputs: {
      notation: {
        label: "Prime Factorization",
        help: "The number expressed as a product of prime powers (e.g., 2³ × 3² × 5).",
      },
      factors: {
        label: "Prime Factors",
        help: "List of prime factors with their exponents.",
      },
    },
    errors: {
      numberOutOfRange: "Number must be between 2 and 1,000,000.",
    },
    faq: [
      {
        q: "What is prime factorization?",
        a: "Prime factorization is the process of expressing a number as a product of its prime factors. Every integer greater than 1 has a unique prime factorization (Fundamental Theorem of Arithmetic).",
      },
      {
        q: "What is a prime number?",
        a: "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Examples: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "What does the exponent mean?",
        a: "The exponent indicates how many times a prime factor appears in the factorization. For example, in 2³, the exponent 3 means 2 × 2 × 2.",
      },
      {
        q: "Why is prime factorization important?",
        a: "Prime factorization is fundamental in number theory, cryptography, and mathematics. It helps simplify fractions, find GCD/LCM, and understand the structure of numbers.",
      },
      {
        q: "Can 1 be factorized?",
        a: "No. Prime factorization is only defined for integers greater than 1, since 1 has no prime factors.",
      },
    ],
  },
  nl: {
    title: "Priemgetal Factorization Calculator",
    short:
      "Decompose any nummer into its prime factors and view the exponent notation.",
    description:
      "Gratis prime factorization tool. Enter a nummer and direct see its prime factors with exponents. Learn the fundamental theorem of arithmetic.",
    keywords: [
      "prime factorization",
      "prime factors",
      "nummer theory",
      "fundamental theorem",
      "factorization calculator",
      "prime decomposition",
      "exponent notation",
    ],
    inputs: {
      number: {
        label: "Nummer",
        help: "Enter an integer between 2 and 1,000,000 to factorize.",
      },
    },
    outputs: {
      notation: {
        label: "Priemgetal Factorization",
        help: "The nummer expressed as a product of prime powers (e.g., 2³ × 3² × 5).",
      },
      factors: {
        label: "Priemgetal Factors",
        help: "List of prime factors with their exponents.",
      },
    },
    errors: {
      numberOutOfRange: "Nummer must be between 2 and 1,000,000.",
    },
    faq: [
      {
        q: "What is prime factorization?",
        a: "Priemgetal factorization is the process of expressing a nummer as a product of its prime factors. Every integer greater than 1 has a unique prime factorization (Fundamental Theorem of Arithmetic).",
      },
      {
        q: "What is a prime nummer?",
        a: "A prime nummer is a natural nummer greater than 1 that has no positive divisors other than 1 and itself. Examples: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "What does the exponent mean?",
        a: "The exponent indicates how many times a prime factor appears in the factorization. For example, in 2³, the exponent 3 means 2 × 2 × 2.",
      },
      {
        q: "Why is prime factorization important?",
        a: "Priemgetal factorization is fundamental in nummer theory, cryptography, and mathematics. It helps simplify fractions, find GCD/LCM, and understand the structure of nummers.",
      },
      {
        q: "Can 1 be factorized?",
        a: "No. Priemgetal factorization is only defined for integers greater than 1, since 1 has no prime factors.",
      },
    ],
  },

  pl: {
    title: "Liczba Pierwsza Factorization Kalkulator",
    short:
      "Decompose any liczba into its prime factors and view the exponent notation.",
    description:
      "Darmowy prime factorization narzędzie. Enter a liczba and natychmiast see its prime factors with exponents. Learn the fundamental theorem of arithmetic.",
    keywords: [
      "prime factorization",
      "prime factors",
      "liczba theory",
      "fundamental theorem",
      "factorization kalkulator",
      "prime decomposition",
      "exponent notation",
    ],
    inputs: {
      number: {
        label: "Liczba",
        help: "Enter an integer between 2 and 1,000,000 to factorize.",
      },
    },
    outputs: {
      notation: {
        label: "Liczba Pierwsza Factorization",
        help: "The liczba expressed as a product of prime powers (e.g., 2³ × 3² × 5).",
      },
      factors: {
        label: "Liczba Pierwsza Factors",
        help: "List of prime factors with their exponents.",
      },
    },
    errors: {
      numberOutOfRange: "Liczba must be between 2 and 1,000,000.",
    },
    faq: [
      {
        q: "What is prime factorization?",
        a: "Liczba Pierwsza factorization is the process of expressing a liczba as a product of its prime factors. Every integer greater than 1 has a unique prime factorization (Fundamental Theorem of Arithmetic).",
      },
      {
        q: "What is a prime liczba?",
        a: "A prime liczba is a natural liczba greater than 1 that has no positive divisors other than 1 and itself. Examples: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "What does the exponent mean?",
        a: "The exponent indicates how many times a prime factor appears in the factorization. For example, in 2³, the exponent 3 means 2 × 2 × 2.",
      },
      {
        q: "Why is prime factorization important?",
        a: "Liczba Pierwsza factorization is fundamental in liczba theory, cryptography, and mathematics. It helps simplify fractions, find GCD/LCM, and understand the structure of liczbas.",
      },
      {
        q: "Can 1 be factorized?",
        a: "No. Liczba Pierwsza factorization is only defined for integers greater than 1, since 1 has no prime factors.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Fatoração em Primos",
    short:
      "Decomponha qualquer número inteiro nos seus fatores primos.",
    description:
      "Calculadora gratuita de fatoração. Encontre a decomposição em fatores primos de qualquer número inteiro positivo.",
    keywords: ["fatoração primos", "fatores primos", "decomposição números", "calculadora primos", "fatorar"],
    inputs: {
      number: {
        label: "Number",
        help: "Enter an integer between 2 and 1,000,000 to factorize.",
      },
    },
    outputs: {
      notation: {
        label: "Prime Factorization",
        help: "The number expressed as a product of prime powers (e.g., 2³ × 3² × 5).",
      },
      factors: {
        label: "Prime Factors",
        help: "List of prime factors with their exponents.",
      },
    },
    errors: {
      numberOutOfRange: "Number must be between 2 and 1,000,000.",
    },
    faq: [
      {
        q: "What is prime factorization?",
        a: "Prime factorization is the process of expressing a number as a product of its prime factors. Every integer greater than 1 has a unique prime factorization (Fundamental Theorem of Arithmetic).",
      },
      {
        q: "What is a prime number?",
        a: "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Examples: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "What does the exponent mean?",
        a: "The exponent indicates how many times a prime factor appears in the factorization. For example, in 2³, the exponent 3 means 2 × 2 × 2.",
      },
      {
        q: "Why is prime factorization important?",
        a: "Prime factorization is fundamental in number theory, cryptography, and mathematics. It helps simplify fractions, find GCD/LCM, and understand the structure of numbers.",
      },
      {
        q: "Can 1 be factorized?",
        a: "No. Prime factorization is only defined for integers greater than 1, since 1 has no prime factors.",
      },
    ],
  },
  id: {
    title: "Kalkulator Faktorisasi Prima",
    short:
      "Uraikan bilangan bulat menjadi faktor-faktor primanya.",
    description:
      "Kalkulator faktorisasi prima gratis. Temukan dekomposisi faktor prima dari bilangan bulat positif apa pun.",
    keywords: ["faktorisasi prima", "faktor prima", "dekomposisi bilangan", "kalkulator prima", "faktor"],
    inputs: {
      number: {
        label: "Number",
        help: "Enter an integer between 2 and 1,000,000 to factorize.",
      },
    },
    outputs: {
      notation: {
        label: "Prime Factorization",
        help: "The number expressed as a product of prime powers (e.g., 2³ × 3² × 5).",
      },
      factors: {
        label: "Prime Factors",
        help: "List of prime factors with their exponents.",
      },
    },
    errors: {
      numberOutOfRange: "Number must be between 2 and 1,000,000.",
    },
    faq: [
      {
        q: "What is prime factorization?",
        a: "Prime factorization is the process of expressing a number as a product of its prime factors. Every integer greater than 1 has a unique prime factorization (Fundamental Theorem of Arithmetic).",
      },
      {
        q: "What is a prime number?",
        a: "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Examples: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "What does the exponent mean?",
        a: "The exponent indicates how many times a prime factor appears in the factorization. For example, in 2³, the exponent 3 means 2 × 2 × 2.",
      },
      {
        q: "Why is prime factorization important?",
        a: "Prime factorization is fundamental in number theory, cryptography, and mathematics. It helps simplify fractions, find GCD/LCM, and understand the structure of numbers.",
      },
      {
        q: "Can 1 be factorized?",
        a: "No. Prime factorization is only defined for integers greater than 1, since 1 has no prime factors.",
      },
    ],
  },

  tr: {
    title: "Asal Çarpanlarına Ayırma Hesaplayıcısı",
    short:
      "Herhangi bir sayıyı asal çarpanlarına ayırın ve üs gösterimini görüntüleyin.",
    description:
      "Ücretsiz asal çarpanlarına ayırma aracı. Bir sayı girin ve anında asal çarpanlarını ve üslerini görün. Aritmetiğin temel teoremini öğrenin.",
    keywords: [
      "asal çarpanlarına ayırma",
      "asal çarpanlar",
      "sayı teorisi",
      "temel teorem",
      "çarpanlarına ayırma",
      "asal çarpanlar",
      "üs gösterimi",
    ],
    inputs: {
      number: {
        label: "Sayı",
        help: "Çarpanlarına ayırmak için 2 ile 1.000.000 arasında bir sayı girin.",
      },
    },
    outputs: {
      notation: {
        label: "Asal Çarpanlarına Ayırma",
        help: "Sayı asal sayıların kuvvetlerinin çarpımı olarak ifade edilmiştir (örn., 2³ × 3² × 5).",
      },
      factors: {
        label: "Asal Çarpanlar",
        help: "Üsleri ile birlikte asal çarpanların listesi.",
      },
    },
    errors: {
      numberOutOfRange: "Sayı 2 ile 1.000.000 arasında olmalıdır.",
    },
    faq: [
      {
        q: "Asal çarpanlarına ayırma nedir?",
        a: "Asal çarpanlarına ayırma, bir sayıyı asal çarpanlarının çarpımı olarak ifade etme işlemidir. 1'den büyük her tam sayının benzersiz bir asal çarpanlarına ayırması vardır (Aritmetiğin Temel Teoremi).",
      },
      {
        q: "Asal sayı nedir?",
        a: "Asal sayı, 1'den büyük ve sadece 1 ile kendisine bölünen doğal sayıdır. Örnekler: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "Üs ne anlama gelir?",
        a: "Üs, bir asal çarpanın çarpanlarına ayırmada kaç kez göründüğünü gösterir. Örneğin, 2³'te, üs 3 anlamına gelir 2 × 2 × 2.",
      },
      {
        q: "Asal çarpanlarına ayırma neden önemlidir?",
        a: "Asal çarpanlarına ayırma, sayı teorisi, kriptografi ve matematik için temeldir. Kesirleri sadeleştirmeye, EKOK/EBOB bulunmasına ve sayıların yapısını anlamaya yardımcı olur.",
      },
      {
        q: "1 çarpanlarına ayrılabilir mi?",
        a: "Hayır. Asal çarpanlarına ayırma sadece 1'den büyük tam sayılar için tanımlanır, çünkü 1'in hiç asal çarpanı yoktur.",
      },
    ],
  },
  de: {
    title: "Primfaktorzerlegung-Rechner",
    short:
      "Zerlegen Sie jede Zahl in ihre Primfaktoren und zeigen Sie die Exponentenschreibweise an.",
    description:
      "Kostenloses Primfaktorzerlegungs-Tool. Geben Sie eine Zahl ein und sehen Sie sofort ihre Primfaktoren mit Exponenten. Lernen Sie den Fundamentalsatz der Arithmetik.",
    keywords: [
      "Primfaktorzerlegung",
      "Primfaktoren",
      "Zahlentheorie",
      "Fundamentalsatz",
      "Faktorisierung",
      "Primzerlegung",
      "Exponentenschreibweise",
    ],
    inputs: {
      number: {
        label: "Zahl",
        help: "Geben Sie eine ganze Zahl zwischen 2 und 1.000.000 ein.",
      },
    },
    outputs: {
      notation: {
        label: "Primfaktorzerlegung",
        help: "Die Zahl als Produkt von Primpotenzen ausgedrückt (z. B. 2³ × 3² × 5).",
      },
      factors: {
        label: "Primfaktoren",
        help: "Liste der Primfaktoren mit ihren Exponenten.",
      },
    },
    errors: {
      numberOutOfRange: "Die Zahl muss zwischen 2 und 1.000.000 liegen.",
    },
    faq: [
      {
        q: "Was ist Primfaktorzerlegung?",
        a: "Primfaktorzerlegung ist der Prozess, eine Zahl als Produkt ihrer Primfaktoren auszudrücken. Jede ganze Zahl größer als 1 hat eine eindeutige Primfaktorzerlegung (Fundamentalsatz der Arithmetik).",
      },
      {
        q: "Was ist eine Primzahl?",
        a: "Eine Primzahl ist eine natürliche Zahl größer als 1, die nur durch 1 und sich selbst teilbar ist. Beispiele: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "Was bedeutet der Exponent?",
        a: "Der Exponent zeigt, wie oft ein Primfaktor in der Zerlegung vorkommt. Zum Beispiel bedeutet 2³, dass 2 × 2 × 2.",
      },
      {
        q: "Warum ist Primfaktorzerlegung wichtig?",
        a: "Primfaktorzerlegung ist fundamental in Zahlentheorie, Kryptographie und Mathematik. Sie hilft beim Vereinfachen von Brüchen, beim Finden von ggT/kgV und beim Verstehen der Zahlenstruktur.",
      },
      {
        q: "Kann die Zahl 1 faktorisiert werden?",
        a: "Nein. Primfaktorzerlegung ist nur für ganze Zahlen größer als 1 definiert, da 1 keine Primfaktoren hat.",
      },
    ],
  },
  fr: {
    title: "Calculateur de Décomposition en Facteurs Premiers",
    short:
      "Décomposez n'importe quel nombre en ses facteurs premiers et affichez la notation exponentielle.",
    description:
      "Outil de décomposition en facteurs premiers. Entrez un nombre et voyez immédiatement ses facteurs premiers avec exposants. Apprenez le théorème fondamental de l'arithmétique.",
    keywords: [
      "décomposition en facteurs premiers",
      "facteurs premiers",
      "théorie des nombres",
      "théorème fondamental",
      "factorisation",
      "décomposition des nombres",
      "notation exponentielle",
    ],
    inputs: {
      number: {
        label: "Nombre",
        help: "Entrez un entier entre 2 et 1.000.000 à décomposer.",
      },
    },
    outputs: {
      notation: {
        label: "Décomposition en Facteurs Premiers",
        help: "Le nombre exprimé comme produit de puissances premières (ex: 2³ × 3² × 5).",
      },
      factors: {
        label: "Facteurs Premiers",
        help: "Liste des facteurs premiers avec leurs exposants.",
      },
    },
    errors: {
      numberOutOfRange: "Le nombre doit être entre 2 et 1.000.000.",
    },
    faq: [
      {
        q: "Qu'est-ce que la décomposition en facteurs premiers?",
        a: "La décomposition en facteurs premiers est le processus d'exprimer un nombre comme produit de ses facteurs premiers. Chaque entier plus grand que 1 a une décomposition unique (Théorème Fondamental de l'Arithmétique).",
      },
      {
        q: "Qu'est-ce qu'un nombre premier?",
        a: "Un nombre premier est un entier naturel plus grand que 1 qui n'est divisible que par 1 et par lui-même. Exemples: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "Que signifie l'exposant?",
        a: "L'exposant indique combien de fois un facteur premier apparaît dans la décomposition. Par exemple, dans 2³, l'exposant 3 signifie 2 × 2 × 2.",
      },
      {
        q: "Pourquoi la décomposition en facteurs premiers est-elle importante?",
        a: "Elle est fondamentale en théorie des nombres, cryptographie et mathématiques. Elle aide à simplifier des fractions, trouver le PGCD/PPCM et comprendre la structure des nombres.",
      },
      {
        q: "Peut-on factoriser 1?",
        a: "Non. La décomposition en facteurs premiers est définie uniquement pour les entiers plus grands que 1, car 1 n'a pas de facteurs premiers.",
      },
    ],
  },
  es: {
    title: "Calculadora de Descomposición en Factores Primos",
    short:
      "Descomponga cualquier número en sus factores primos y vea la notación exponencial.",
    description:
      "Herramienta gratuita de descomposición en factores primos. Ingrese un número y vea instantáneamente sus factores primos con exponentes. Aprenda el Teorema Fundamental de la Aritmética.",
    keywords: [
      "descomposición en factores primos",
      "factores primos",
      "teoría de números",
      "teorema fundamental",
      "factorización",
      "descomposición de números",
      "notación exponencial",
    ],
    inputs: {
      number: {
        label: "Número",
        help: "Ingrese un entero entre 2 y 1.000.000 para descomponer.",
      },
    },
    outputs: {
      notation: {
        label: "Descomposición en Factores Primos",
        help: "El número expresado como producto de potencias primas (ej: 2³ × 3² × 5).",
      },
      factors: {
        label: "Factores Primos",
        help: "Lista de factores primos con sus exponentes.",
      },
    },
    errors: {
      numberOutOfRange: "El número debe estar entre 2 y 1.000.000.",
    },
    faq: [
      {
        q: "¿Qué es la descomposición en factores primos?",
        a: "Es el proceso de expresar un número como producto de sus factores primos. Todo entero mayor que 1 tiene una descomposición única (Teorema Fundamental de la Aritmética).",
      },
      {
        q: "¿Qué es un número primo?",
        a: "Un número primo es un entero natural mayor que 1 divisible solo por 1 y por sí mismo. Ejemplos: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "¿Qué significa el exponente?",
        a: "El exponente indica cuántas veces aparece un factor primo en la descomposición. Por ejemplo, en 2³, el exponente 3 significa 2 × 2 × 2.",
      },
      {
        q: "¿Por qué es importante la descomposición en factores primos?",
        a: "Es fundamental en teoría de números, criptografía y matemáticas. Ayuda a simplificar fracciones, encontrar MCD/MCM y entender la estructura de los números.",
      },
      {
        q: "¿Se puede factorizar el 1?",
        a: "No. La descomposición en factores primos se define solo para enteros mayores que 1, ya que 1 no tiene factores primos.",
      },
    ],
  },
  it: {
    title: "Calcolatore di Fattorizzazione in Numeri Primi",
    short:
      "Scomponi qualsiasi numero nei suoi fattori primi e visualizza la notazione esponenziale.",
    description:
      "Strumento gratuito di fattorizzazione in numeri primi. Inserisci un numero e visualizza istantaneamente i suoi fattori primi con esponenti. Impara il Teorema Fondamentale dell'Aritmetica.",
    keywords: [
      "fattorizzazione in numeri primi",
      "fattori primi",
      "teoria dei numeri",
      "teorema fondamentale",
      "fattorizzazione",
      "scomposizione in numeri",
      "notazione esponenziale",
    ],
    inputs: {
      number: {
        label: "Numero",
        help: "Inserisci un intero tra 2 e 1.000.000 da fattorizzare.",
      },
    },
    outputs: {
      notation: {
        label: "Fattorizzazione in Numeri Primi",
        help: "Il numero espresso come prodotto di potenze di numeri primi (es: 2³ × 3² × 5).",
      },
      factors: {
        label: "Fattori Primi",
        help: "Elenco dei fattori primi con i loro esponenti.",
      },
    },
    errors: {
      numberOutOfRange: "Il numero deve essere tra 2 e 1.000.000.",
    },
    faq: [
      {
        q: "Cos'è la fattorizzazione in numeri primi?",
        a: "È il processo di esprimere un numero come prodotto dei suoi fattori primi. Ogni intero maggiore di 1 ha una fattorizzazione unica (Teorema Fondamentale dell'Aritmetica).",
      },
      {
        q: "Cos'è un numero primo?",
        a: "Un numero primo è un numero naturale maggiore di 1 divisibile solo per 1 e per se stesso. Esempi: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "Cosa significa l'esponente?",
        a: "L'esponente indica quante volte un fattore primo appare nella fattorizzazione. Per esempio, in 2³, l'esponente 3 significa 2 × 2 × 2.",
      },
      {
        q: "Perché la fattorizzazione in numeri primi è importante?",
        a: "È fondamentale nella teoria dei numeri, crittografia e matematica. Aiuta a semplificare le frazioni, trovare MCD/MCM e comprendere la struttura dei numeri.",
      },
      {
        q: "Si può fattorizzare l'1?",
        a: "No. La fattorizzazione in numeri primi è definita solo per interi maggiori di 1, poiché 1 non ha fattori primi.",
      },
    ],
  },
  ar: {
    title: "حاسبة التحليل إلى عوامل أولية",
    short: "قم بتحليل أي عدد إلى عوامله الأولية واعرض الترميز الأسي.",
    description:
      "أداة مجانية للتحليل إلى عوامل أولية. أدخل رقماً واعرض على الفور عوامله الأولية مع الأسس. تعرف على النظرية الأساسية للحسابات.",
    keywords: [
      "التحليل إلى عوامل أولية",
      "عوامل أولية",
      "نظرية الأعداد",
      "النظرية الأساسية",
      "التحليل",
      "تحليل الأعداد",
      "الترميز الأسي",
    ],
    inputs: {
      number: {
        label: "الرقم",
        help: "أدخل عدداً صحيحاً بين 2 و 1.000.000 لتحليله.",
      },
    },
    outputs: {
      notation: {
        label: "التحليل إلى عوامل أولية",
        help: "الرقم معبراً عنه كحاصل ضرب قوى أولية (مثل: 2³ × 3² × 5).",
      },
      factors: {
        label: "العوامل الأولية",
        help: "قائمة العوامل الأولية مع أسسها.",
      },
    },
    errors: {
      numberOutOfRange: "يجب أن يكون الرقم بين 2 و 1.000.000.",
    },
    faq: [
      {
        q: "ما هو التحليل إلى عوامل أولية؟",
        a: "هو عملية التعبير عن عدد كحاصل ضرب عوامله الأولية. كل عدد صحيح أكبر من 1 له تحليل أولي فريد (النظرية الأساسية للحسابات).",
      },
      {
        q: "ما هو العدد الأولي؟",
        a: "العدد الأولي هو عدد طبيعي أكبر من 1 لا يقبل القسمة إلا على 1 وعلى نفسه. أمثلة: 2، 3، 5، 7، 11، 13.",
      },
      {
        q: "ماذا يعني الأس؟",
        a: "يشير الأس إلى عدد مرات ظهور عامل أولي في التحليل. على سبيل المثال، في 2³، الأس 3 يعني 2 × 2 × 2.",
      },
      {
        q: "لماذا التحليل إلى عوامل أولية مهم؟",
        a: "إنه أساسي في نظرية الأعداد والتشفير والرياضيات. يساعد في تبسيط الكسور وإيجاد العامل المشترك الأكبر والمضاعف المشترك الأصغر.",
      },
      {
        q: "هل يمكن تحليل الرقم 1؟",
        a: "لا. التحليل إلى عوامل أولية معرّف فقط للأعداد الصحيحة الأكبر من 1، لأن 1 لا يملك عوامل أولية.",
      },
    ],
  },
  ru: {
    title: "Калькулятор Разложения на Простые Множители",
    short:
      "Разложите любое число на его простые множители и просмотрите экспоненциальную запись.",
    description:
      "Бесплатный инструмент разложения на простые множители. Введите число и сразу же увидите его простые множители с показателями. Изучите основную теорему арифметики.",
    keywords: [
      "разложение на простые множители",
      "простые множители",
      "теория чисел",
      "основная теорема",
      "факторизация",
      "разложение чисел",
      "экспоненциальная запись",
    ],
    inputs: {
      number: {
        label: "Число",
        help: "Введите целое число от 2 до 1.000.000 для разложения.",
      },
    },
    outputs: {
      notation: {
        label: "Разложение на Простые Множители",
        help: "Число, выраженное как произведение степеней простых чисел (напр.: 2³ × 3² × 5).",
      },
      factors: {
        label: "Простые Множители",
        help: "Список простых множителей с их показателями.",
      },
    },
    errors: {
      numberOutOfRange: "Число должно быть между 2 и 1.000.000.",
    },
    faq: [
      {
        q: "Что такое разложение на простые множители?",
        a: "Это процесс представления числа как произведения его простых множителей. Каждое целое число больше 1 имеет уникальное разложение (Основная теорема арифметики).",
      },
      {
        q: "Что такое простое число?",
        a: "Простое число — это натуральное число больше 1, которое делится только на 1 и на себя. Примеры: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "Что означает показатель?",
        a: "Показатель указывает, сколько раз простой множитель появляется в разложении. Например, в 2³ показатель 3 означает 2 × 2 × 2.",
      },
      {
        q: "Почему разложение на простые множители важно?",
        a: "Это основополагающее понятие в теории чисел, криптографии и математике. Помогает упрощать дроби, находить НОД/НОК и понимать структуру чисел.",
      },
      {
        q: "Можно ли разложить число 1?",
        a: "Нет. Разложение на простые множители определено только для целых чисел больше 1, так как 1 не имеет простых множителей.",
      },
    ],
  },
  zh: {
    title: "质因数分解计算器",
    short: "将任何数字分解为其质因数，并查看指数表示法。",
    description:
      "免费的质因数分解工具。输入一个数字，立即看到其质因数和指数。学习算术基本定理。",
    keywords: [
      "质因数分解",
      "质因数",
      "数论",
      "基本定理",
      "因式分解",
      "数字分解",
      "指数表示法",
    ],
    inputs: {
      number: {
        label: "数字",
        help: "输入2到1,000,000之间的整数进行分解。",
      },
    },
    outputs: {
      notation: {
        label: "质因数分解",
        help: "数字表示为质数的幂的乘积（例：2³ × 3² × 5）。",
      },
      factors: {
        label: "质因数",
        help: "质因数及其指数的列表。",
      },
    },
    errors: {
      numberOutOfRange: "数字必须在2到1,000,000之间。",
    },
    faq: [
      {
        q: "什么是质因数分解？",
        a: "质因数分解是将一个数表示为其质因数的乘积的过程。每个大于1的整数都有一个唯一的质因数分解（算术基本定理）。",
      },
      {
        q: "什么是质数？",
        a: "质数是大于1的自然数，只能被1和自身整除。例子：2、3、5、7、11、13。",
      },
      {
        q: "指数是什么意思？",
        a: "指数表示质因数在分解中出现的次数。例如，在2³中，指数3表示2 × 2 × 2。",
      },
      {
        q: "为什么质因数分解很重要？",
        a: "这是数论、密码学和数学的基础。它有助于简化分数、找到最大公约数/最小公倍数和理解数字结构。",
      },
      {
        q: "能分解1吗？",
        a: "不能。质因数分解仅对大于1的整数定义，因为1没有质因数。",
      },
    ],
  },
  ja: {
    title: "素因数分解計算機",
    short: "任意の数を素因数に分解し、指数表記を表示します。",
    description:
      "無料の素因数分解ツール。数字を入力すると、その素因数と指数が即座に表示されます。算術の基本定理を学びます。",
    keywords: [
      "素因数分解",
      "素因数",
      "整数論",
      "基本定理",
      "因数分解",
      "数分解",
      "指数表記",
    ],
    inputs: {
      number: {
        label: "数字",
        help: "2から1,000,000の間の整数を入力して分解します。",
      },
    },
    outputs: {
      notation: {
        label: "素因数分解",
        help: "数を素数の累乗の積として表します（例：2³ × 3² × 5）。",
      },
      factors: {
        label: "素因数",
        help: "素因数と指数のリスト。",
      },
    },
    errors: {
      numberOutOfRange: "数は2から1,000,000の間である必要があります。",
    },
    faq: [
      {
        q: "素因数分解とは何ですか？",
        a: "素因数分解は、数を素因数の積として表すプロセスです。1より大きいすべての整数には一意の素因数分解があります（算術の基本定理）。",
      },
      {
        q: "素数とは何ですか？",
        a: "素数は1より大きく、1とそれ自身でのみ割り切れる自然数です。例：2、3、5、7、11、13。",
      },
      {
        q: "指数は何を意味しますか？",
        a: "指数は、素因数が分解に現れる回数を示します。たとえば、2³では、指数3は2 × 2 × 2を意味します。",
      },
      {
        q: "素因数分解が重要なのはなぜですか？",
        a: "整数論、暗号、数学の基礎です。分数の簡素化、最大公約数/最小公倍数の検出、数の構造の理解に役立ちます。",
      },
      {
        q: "1を分解できますか？",
        a: "いいえ。素因数分解は1より大きい整数に対してのみ定義され、1には素因数がないためです。",
      },
    ],
  },
  ko: {
    title: "소인수분해 계산기",
    short: "모든 수를 소인수로 분해하고 지수 표기법을 확인하세요.",
    description:
      "무료 소인수분해 도구입니다. 숫자를 입력하면 즉시 소인수와 지수를 확인할 수 있습니다. 산술의 기본정리를 배워보세요.",
    keywords: [
      "소인수분해",
      "소인수",
      "수론",
      "기본정리",
      "인수분해",
      "수 분해",
      "지수 표기법",
    ],
    inputs: {
      number: {
        label: "수",
        help: "분해할 2부터 1,000,000 사이의 정수를 입력하세요.",
      },
    },
    outputs: {
      notation: {
        label: "소인수분해",
        help: "소수의 거듭제곱의 곱으로 표현된 수(예: 2³ × 3² × 5).",
      },
      factors: {
        label: "소인수",
        help: "소인수와 지수의 목록.",
      },
    },
    errors: {
      numberOutOfRange: "수는 2부터 1,000,000 사이여야 합니다.",
    },
    faq: [
      {
        q: "소인수분해란 무엇입니까?",
        a: "소인수분해는 수를 소인수의 곱으로 표현하는 과정입니다. 1보다 큰 모든 정수는 고유한 소인수분해를 가집니다(산술의 기본정리).",
      },
      {
        q: "소수란 무엇입니까?",
        a: "소수는 1과 자기 자신으로만 나누어지는 1보다 큰 자연수입니다. 예: 2, 3, 5, 7, 11, 13.",
      },
      {
        q: "지수는 무엇을 의미합니까?",
        a: "지수는 소인수가 분해에서 나타나는 횟수를 나타냅니다. 예를 들어 2³에서 지수 3은 2 × 2 × 2를 의미합니다.",
      },
      {
        q: "소인수분해가 중요한 이유는 무엇입니까?",
        a: "수론, 암호학, 수학의 기초입니다. 분수 단순화, 최대공약수/최소공배수 찾기, 수 구조 이해를 돕습니다.",
      },
      {
        q: "1을 분해할 수 있습니까?",
        a: "아니요. 소인수분해는 1보다 큰 정수에 대해서만 정의되며, 1은 소인수가 없기 때문입니다.",
      },
    ],
  },
  hi: {
    title: "अभाज्य गुणनखंड कैलकुलेटर",
    short:
      "किसी भी संख्या को उसके अभाज्य गुणनखंड में विघटित करें और घातीय संकेतन देखें।",
    description:
      "निःशुल्क अभाज्य गुणनखंड उपकरण। एक संख्या दर्ज करें और तुरंत उसके अभाज्य गुणनखंड और घातांक देखें। अंकगणित के मौलिक प्रमेय को जानें।",
    keywords: [
      "अभाज्य गुणनखंड",
      "अभाज्य गुणनखंड",
      "संख्या सिद्धांत",
      "मौलिक प्रमेय",
      "गुणनखंडन",
      "संख्या विघटन",
      "घातीय संकेतन",
    ],
    inputs: {
      number: {
        label: "संख्या",
        help: "विघटित करने के लिए 2 और 1,000,000 के बीच पूर्णांक दर्ज करें।",
      },
    },
    outputs: {
      notation: {
        label: "अभाज्य गुणनखंड",
        help: "अभाज्य संख्याओं की घातों के गुणनफल के रूप में व्यक्त संख्या (जैसे: 2³ × 3² × 5)।",
      },
      factors: {
        label: "अभाज्य गुणनखंड",
        help: "अभाज्य गुणनखंड और उनके घातांक की सूची।",
      },
    },
    errors: {
      numberOutOfRange: "संख्या 2 और 1,000,000 के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "अभाज्य गुणनखंड क्या है?",
        a: "अभाज्य गुणनखंड किसी संख्या को उसके अभाज्य गुणनखंड के गुणनफल के रूप में व्यक्त करने की प्रक्रिया है। 1 से अधिक प्रत्येक पूर्णांक का एक अद्वितीय अभाज्य गुणनखंड है (अंकगणित का मौलिक प्रमेय)।",
      },
      {
        q: "अभाज्य संख्या क्या है?",
        a: "अभाज्य संख्या 1 से अधिक एक प्राकृतिक संख्या है जो केवल 1 और स्वयं से विभाज्य है। उदाहरण: 2, 3, 5, 7, 11, 13।",
      },
      {
        q: "घातांक का क्या अर्थ है?",
        a: "घातांक यह दर्शाता है कि कोई अभाज्य गुणनखंड गुणनखंडन में कितनी बार प्रकट होता है। उदाहरण के लिए, 2³ में, घातांक 3 का अर्थ 2 × 2 × 2 है।",
      },
      {
        q: "अभाज्य गुणनखंड महत्वपूर्ण क्यों है?",
        a: "यह संख्या सिद्धांत, क्रिप्टोग्राफी और गणित में मौलिक है। यह भिन्नों को सरल बनाने, GCD/LCM खोजने और संख्याओं की संरचना को समझने में मदद करता है।",
      },
      {
        q: "क्या 1 को गुणनखंडित किया जा सकता है?",
        a: "नहीं। अभाज्य गुणनखंड केवल 1 से अधिक पूर्णांकों के लिए परिभाषित है, क्योंकि 1 के कोई अभाज्य गुणनखंड नहीं हैं।",
      },
    ],
  },
};

export default i18n;
