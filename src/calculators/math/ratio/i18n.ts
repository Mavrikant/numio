import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Ratio Simplifier",
    short: "Simplify any ratio to its lowest terms and see equivalent scales.",
    description:
      "Free ratio simplifier calculator. Reduce ratios to simplest form using GCD, view decimal and percent values, and equivalent scales.",
    keywords: [
      "ratio simplifier",
      "simplify ratio",
      "lowest terms",
      "GCD calculator",
      "ratio equivalence",
      "ratio to decimal",
      "ratio solver",
    ],
    inputs: {
      numerator: {
        label: "First number",
        help: "The numerator of the ratio.",
      },
      denominator: {
        label: "Second number",
        help: "The denominator of the ratio.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "Simplified first",
        help: "The first number after reduction by GCD.",
      },
      simplifiedDenominator: {
        label: "Simplified second",
        help: "The second number after reduction by GCD.",
      },
      decimal: {
        label: "Decimal value",
        help: "The ratio expressed as a decimal number.",
      },
      percentValue: {
        label: "Percent",
        help: "The ratio expressed as a percentage.",
      },
      oneToXForm: {
        label: "1:x form",
        help: "Ratio scaled so first number equals 1.",
      },
      xToOneForm: {
        label: "x:1 form",
        help: "Ratio scaled so second number equals 1.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "Both numbers must be positive integers.",
    },
    faq: [
      {
        q: "What is ratio simplification?",
        a: "Ratio simplification reduces a ratio to its simplest form by dividing both numbers by their Greatest Common Divisor (GCD). For example, 12:18 simplifies to 2:3.",
      },
      {
        q: "What is the GCD algorithm?",
        a: "The Euclidean algorithm repeatedly divides and takes remainders until reaching 0. GCD(12, 18): 18 mod 12 = 6, then 12 mod 6 = 0, so GCD = 6.",
      },
      {
        q: "What does 1:x form mean?",
        a: "The 1:x form scales the ratio so the first number becomes 1. Example: 2:3 becomes 1:1.5, meaning for every 1 unit of the first, there are 1.5 units of the second.",
      },
      {
        q: "How do I convert a ratio to a percentage?",
        a: "Divide the first number by the second and multiply by 100. A ratio of 3:4 equals 3÷4 = 0.75 = 75%.",
      },
    ],
  },
  nl: {
    title: "Verhouding Simplifier",
    short: "Simplify any ratio to its lowest terms and see equivalent scales.",
    description:
      "Gratis ratio simplifier calculator. Reduce ratios to simplest form using GCD, view decimal and percent values, and equivalent scales.",
    keywords: [
      "ratio simplifier",
      "simplify ratio",
      "lowest terms",
      "GCD calculator",
      "ratio equivalence",
      "ratio to decimal",
      "ratio solver",
    ],
    inputs: {
      numerator: {
        label: "First nummer",
        help: "The numerator of the ratio.",
      },
      denominator: {
        label: "Second nummer",
        help: "The denominator of the ratio.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "Simplified first",
        help: "The first nummer after reduction by GCD.",
      },
      simplifiedDenominator: {
        label: "Simplified second",
        help: "The second nummer after reduction by GCD.",
      },
      decimal: {
        label: "Decimal value",
        help: "The ratio expressed as a decimal nummer.",
      },
      percentValue: {
        label: "Percent",
        help: "The ratio expressed as a percentage.",
      },
      oneToXForm: {
        label: "1:x form",
        help: "Verhouding scaled so first nummer equals 1.",
      },
      xToOneForm: {
        label: "x:1 form",
        help: "Verhouding scaled so second nummer equals 1.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "Both nummers must be positive integers.",
    },
    faq: [
      {
        q: "What is ratio simplification?",
        a: "Verhouding simplification reduces a ratio to its simplest form by dividing both nummers by their Greatest Common Divisor (GCD). For example, 12:18 simplifies to 2:3.",
      },
      {
        q: "What is the GCD algorithm?",
        a: "The Euclidean algorithm repeatedly divides and takes remainders until reaching 0. GCD(12, 18): 18 mod 12 = 6, then 12 mod 6 = 0, so GCD = 6.",
      },
      {
        q: "What does 1:x form mean?",
        a: "The 1:x form scales the ratio so the first nummer becomes 1. Example: 2:3 becomes 1:1.5, meaning for every 1 unit of the first, there are 1.5 units of the second.",
      },
      {
        q: "How do I converteer a ratio to a percentage?",
        a: "Divide the first nummer by the second and multiply by 100. A ratio of 3:4 equals 3÷4 = 0.75 = 75%.",
      },
    ],
  },

  pl: {
    title: "Stosunek Simplifier",
    short: "Simplify any ratio to its lowest terms and see equivalent scales.",
    description:
      "Darmowy ratio simplifier kalkulator. Reduce ratios to simplest form using GCD, view decimal and percent values, and equivalent scales.",
    keywords: [
      "ratio simplifier",
      "simplify ratio",
      "lowest terms",
      "GCD kalkulator",
      "ratio equivalence",
      "ratio to decimal",
      "ratio solver",
    ],
    inputs: {
      numerator: {
        label: "First liczba",
        help: "The numerator of the ratio.",
      },
      denominator: {
        label: "Second liczba",
        help: "The denominator of the ratio.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "Simplified first",
        help: "The first liczba after reduction by GCD.",
      },
      simplifiedDenominator: {
        label: "Simplified second",
        help: "The second liczba after reduction by GCD.",
      },
      decimal: {
        label: "Decimal value",
        help: "The ratio expressed as a decimal liczba.",
      },
      percentValue: {
        label: "Percent",
        help: "The ratio expressed as a percentage.",
      },
      oneToXForm: {
        label: "1:x form",
        help: "Stosunek scaled so first liczba equals 1.",
      },
      xToOneForm: {
        label: "x:1 form",
        help: "Stosunek scaled so second liczba equals 1.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "Both liczbas must be positive integers.",
    },
    faq: [
      {
        q: "What is ratio simplification?",
        a: "Stosunek simplification reduces a ratio to its simplest form by dividing both liczbas by their Greatest Common Divisor (GCD). For example, 12:18 simplifies to 2:3.",
      },
      {
        q: "What is the GCD algorithm?",
        a: "The Euclidean algorithm repeatedly divides and takes remainders until reaching 0. GCD(12, 18): 18 mod 12 = 6, then 12 mod 6 = 0, so GCD = 6.",
      },
      {
        q: "What does 1:x form mean?",
        a: "The 1:x form scales the ratio so the first liczba becomes 1. Example: 2:3 becomes 1:1.5, meaning for every 1 unit of the first, there are 1.5 units of the second.",
      },
      {
        q: "How do I konwertuj a ratio to a percentage?",
        a: "Divide the first liczba by the second and multiply by 100. A ratio of 3:4 equals 3÷4 = 0.75 = 75%.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Razão e Proporção",
    short: "Simplifique razões e resolva proporções.",
    description:
      "Calculadora gratuita de razão. Simplifique uma razão para o termo mínimo e resolva proporções desconhecidas (regra de três).",
    keywords: ["razão", "proporção", "simplificar razão", "regra de três", "calculadora razão"],
    inputs: {
      numerator: {
        label: "First number",
        help: "The numerator of the ratio.",
      },
      denominator: {
        label: "Second number",
        help: "The denominator of the ratio.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "Simplified first",
        help: "The first number after reduction by GCD.",
      },
      simplifiedDenominator: {
        label: "Simplified second",
        help: "The second number after reduction by GCD.",
      },
      decimal: {
        label: "Decimal value",
        help: "The ratio expressed as a decimal number.",
      },
      percentValue: {
        label: "Percent",
        help: "The ratio expressed as a percentage.",
      },
      oneToXForm: {
        label: "1:x form",
        help: "Ratio scaled so first number equals 1.",
      },
      xToOneForm: {
        label: "x:1 form",
        help: "Ratio scaled so second number equals 1.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "Both numbers must be positive integers.",
    },
    faq: [
      {
        q: "What is ratio simplification?",
        a: "Ratio simplification reduces a ratio to its simplest form by dividing both numbers by their Greatest Common Divisor (GCD). For example, 12:18 simplifies to 2:3.",
      },
      {
        q: "What is the GCD algorithm?",
        a: "The Euclidean algorithm repeatedly divides and takes remainders until reaching 0. GCD(12, 18): 18 mod 12 = 6, then 12 mod 6 = 0, so GCD = 6.",
      },
      {
        q: "What does 1:x form mean?",
        a: "The 1:x form scales the ratio so the first number becomes 1. Example: 2:3 becomes 1:1.5, meaning for every 1 unit of the first, there are 1.5 units of the second.",
      },
      {
        q: "How do I convert a ratio to a percentage?",
        a: "Divide the first number by the second and multiply by 100. A ratio of 3:4 equals 3÷4 = 0.75 = 75%.",
      },
    ],
  },
  id: {
    title: "Kalkulator Rasio dan Proporsi",
    short: "Sederhanakan rasio dan selesaikan proporsi.",
    description:
      "Kalkulator rasio gratis. Sederhanakan rasio ke bentuk paling kecil dan selesaikan proporsi yang tidak diketahui.",
    keywords: ["rasio", "proporsi", "sederhanakan rasio", "perbandingan", "kalkulator rasio"],
    inputs: {
      numerator: {
        label: "First number",
        help: "The numerator of the ratio.",
      },
      denominator: {
        label: "Second number",
        help: "The denominator of the ratio.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "Simplified first",
        help: "The first number after reduction by GCD.",
      },
      simplifiedDenominator: {
        label: "Simplified second",
        help: "The second number after reduction by GCD.",
      },
      decimal: {
        label: "Decimal value",
        help: "The ratio expressed as a decimal number.",
      },
      percentValue: {
        label: "Percent",
        help: "The ratio expressed as a percentage.",
      },
      oneToXForm: {
        label: "1:x form",
        help: "Ratio scaled so first number equals 1.",
      },
      xToOneForm: {
        label: "x:1 form",
        help: "Ratio scaled so second number equals 1.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "Both numbers must be positive integers.",
    },
    faq: [
      {
        q: "What is ratio simplification?",
        a: "Ratio simplification reduces a ratio to its simplest form by dividing both numbers by their Greatest Common Divisor (GCD). For example, 12:18 simplifies to 2:3.",
      },
      {
        q: "What is the GCD algorithm?",
        a: "The Euclidean algorithm repeatedly divides and takes remainders until reaching 0. GCD(12, 18): 18 mod 12 = 6, then 12 mod 6 = 0, so GCD = 6.",
      },
      {
        q: "What does 1:x form mean?",
        a: "The 1:x form scales the ratio so the first number becomes 1. Example: 2:3 becomes 1:1.5, meaning for every 1 unit of the first, there are 1.5 units of the second.",
      },
      {
        q: "How do I convert a ratio to a percentage?",
        a: "Divide the first number by the second and multiply by 100. A ratio of 3:4 equals 3÷4 = 0.75 = 75%.",
      },
    ],
  },


  tr: {
    title: "Oran Sadeleştirici",
    short: "Herhangi bir oranı en basit biçimine indirgeyin ve eşdeğer ölçekleri görün.",
    description:
      "Ücretsiz oran sadeleştirme hesaplayıcısı. Oranları EBOB kullanarak en basit forma indirgeyin, ondalık ve yüzde değerlerini görüntüleyin.",
    keywords: [
      "oran sadeleştirici",
      "oranı sadeleştir",
      "en basit form",
      "EBOB hesaplayıcısı",
      "oran eşdeğerliği",
      "oranı ondalığa",
      "oran çözücü",
    ],
    inputs: {
      numerator: {
        label: "Birinci sayı",
        help: "Oranın ilk sayısı.",
      },
      denominator: {
        label: "İkinci sayı",
        help: "Oranın ikinci sayısı.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "Sadeleştirilmiş birinci",
        help: "EBOB'a bölündükten sonraki ilk sayı.",
      },
      simplifiedDenominator: {
        label: "Sadeleştirilmiş ikinci",
        help: "EBOB'a bölündükten sonraki ikinci sayı.",
      },
      decimal: {
        label: "Ondalık değer",
        help: "Oranın ondalık biçimiyle ifadesi.",
      },
      percentValue: {
        label: "Yüzde",
        help: "Oranın yüzde olarak ifadesi.",
      },
      oneToXForm: {
        label: "1:x biçimi",
        help: "Birinci sayı 1'e eşit olacak şekilde ölçeklenen oran.",
      },
      xToOneForm: {
        label: "x:1 biçimi",
        help: "İkinci sayı 1'e eşit olacak şekilde ölçeklenen oran.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "Her iki sayı da pozitif tam sayı olmalıdır.",
    },
    faq: [
      {
        q: "Oran sadeleştirmesi nedir?",
        a: "Oran sadeleştirmesi, bir oranı En Büyük Ortak Böleni (EBOB) kullanarak her iki sayıyı bölüp en basit forma indirgemedir. Örneğin, 12:18 oranı 2:3 olur.",
      },
      {
        q: "EBOB algoritması nedir?",
        a: "Öklid algoritması tekrarlı bölme ve kalanlar kullanarak 0'a ulaşana dek işlem yapar. EBOB(12, 18): 18 mod 12 = 6, sonra 12 mod 6 = 0, yani EBOB = 6.",
      },
      {
        q: "1:x biçimi ne demektir?",
        a: "1:x biçimi oranı birinci sayı 1 olacak şekilde ölçekler. Örnek: 2:3 oranı 1:1.5 olur, yani birincinin her 1 birimi için ikincinin 1.5 birimi vardır.",
      },
      {
        q: "Oranı yüzdeye nasıl dönüştürürüm?",
        a: "Birinci sayıyı ikinciye bölüp 100 ile çarpın. 3:4 oranı 3÷4 = 0.75 = %75'e eşittir.",
      },
    ],
  },

  de: {
    title: "Verhältnis-Vereinfacher",
    short: "Vereinfachen Sie jedes Verhältnis auf seine einfachste Form und sehen Sie äquivalente Skalen.",
    description:
      "Kostenlos Verhältnisse vereinfachen. Reduzieren Sie Verhältnisse mit ggT auf einfachste Form, zeigen Sie Dezimal- und Prozentwerte an.",
    keywords: [
      "Verhältnis vereinfacher",
      "Verhältnis kürzen",
      "ggT Rechner",
      "Verhältnisumwandlung",
      "einfachste Form",
      "Verhältnis zu Dezimal",
    ],
    inputs: {
      numerator: {
        label: "Erste Zahl",
        help: "Der Zähler des Verhältnisses.",
      },
      denominator: {
        label: "Zweite Zahl",
        help: "Der Nenner des Verhältnisses.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "Vereinfachte erste Zahl",
        help: "Die erste Zahl nach Reduktion durch ggT.",
      },
      simplifiedDenominator: {
        label: "Vereinfachte zweite Zahl",
        help: "Die zweite Zahl nach Reduktion durch ggT.",
      },
      decimal: {
        label: "Dezimalwert",
        help: "Das Verhältnis als Dezimalzahl ausgedrückt.",
      },
      percentValue: {
        label: "Prozent",
        help: "Das Verhältnis als Prozentsatz ausgedrückt.",
      },
      oneToXForm: {
        label: "1:x Form",
        help: "Verhältnis skaliert so, dass erste Zahl 1 ist.",
      },
      xToOneForm: {
        label: "x:1 Form",
        help: "Verhältnis skaliert so, dass zweite Zahl 1 ist.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "Beide Zahlen müssen positive ganze Zahlen sein.",
    },
    faq: [
      {
        q: "Was ist Verhältnisvereinigung?",
        a: "Verhältnisvereinigung reduziert ein Verhältnis auf seine einfachste Form, indem beide Zahlen durch ihren größten gemeinsamen Teiler (ggT) geteilt werden. Beispiel: 12:18 vereinfacht sich zu 2:3.",
      },
      {
        q: "Was ist der euklidische Algorithmus?",
        a: "Der euklidische Algorithmus teilt wiederholt und nimmt Reste, bis 0 erreicht wird. ggT(12, 18): 18 mod 12 = 6, dann 12 mod 6 = 0, also ggT = 6.",
      },
      {
        q: "Was bedeutet 1:x Form?",
        a: "Die 1:x Form skaliert das Verhältnis so, dass die erste Zahl 1 wird. Beispiel: 2:3 wird zu 1:1.5.",
      },
      {
        q: "Wie konvertiere ich ein Verhältnis zu Prozent?",
        a: "Teilen Sie die erste Zahl durch die zweite und multiplizieren Sie mit 100. Verhältnis 3:4 = 3÷4 = 0.75 = 75%.",
      },
    ],
  },

  fr: {
    title: "Simplificateur de Ratio",
    short: "Simplifiez n'importe quel ratio à sa forme la plus simple et voyez les échelles équivalentes.",
    description:
      "Calculatrice gratuite de simplification de ratios. Réduisez les ratios à la forme la plus simple avec le PGCD, consultez les valeurs décimales et en pourcentage.",
    keywords: [
      "simplificateur de ratio",
      "simplifier ratio",
      "forme réduite",
      "calculatrice PGCD",
      "équivalence de ratios",
      "ratio en décimal",
    ],
    inputs: {
      numerator: {
        label: "Premier nombre",
        help: "Le numérateur du ratio.",
      },
      denominator: {
        label: "Deuxième nombre",
        help: "Le dénominateur du ratio.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "Premier simplifié",
        help: "Le premier nombre après réduction par PGCD.",
      },
      simplifiedDenominator: {
        label: "Deuxième simplifié",
        help: "Le deuxième nombre après réduction par PGCD.",
      },
      decimal: {
        label: "Valeur décimale",
        help: "Le ratio exprimé en tant que nombre décimal.",
      },
      percentValue: {
        label: "Pourcentage",
        help: "Le ratio exprimé en pourcentage.",
      },
      oneToXForm: {
        label: "Forme 1:x",
        help: "Ratio échelonné pour que le premier nombre égale 1.",
      },
      xToOneForm: {
        label: "Forme x:1",
        help: "Ratio échelonné pour que le deuxième nombre égale 1.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "Les deux nombres doivent être des entiers positifs.",
    },
    faq: [
      {
        q: "Qu'est-ce que la simplification de ratio?",
        a: "La simplification de ratio réduit un ratio à sa forme la plus simple en divisant les deux nombres par leur plus grand commun diviseur (PGCD). Exemple: 12:18 se simplifie à 2:3.",
      },
      {
        q: "Qu'est-ce que l'algorithme euclidien?",
        a: "L'algorithme euclidien divise répétitivement et prend les restes jusqu'à atteindre 0. PGCD(12, 18): 18 mod 12 = 6, puis 12 mod 6 = 0, donc PGCD = 6.",
      },
      {
        q: "Que signifie la forme 1:x?",
        a: "La forme 1:x met le ratio à l'échelle pour que le premier nombre devienne 1. Exemple: 2:3 devient 1:1.5.",
      },
      {
        q: "Comment convertir un ratio en pourcentage?",
        a: "Divisez le premier nombre par le second et multipliez par 100. Un ratio 3:4 = 3÷4 = 0.75 = 75%.",
      },
    ],
  },

  es: {
    title: "Simplificador de Razón",
    short: "Simplifique cualquier razón a su forma más simple y vea escalas equivalentes.",
    description:
      "Calculadora gratuita de simplificación de razones. Reduzca razones a forma simple usando MCD, vea valores decimales y porcentuales.",
    keywords: [
      "simplificador de razón",
      "simplificar razón",
      "forma más simple",
      "calculadora MCD",
      "equivalencia de razones",
      "razón a decimal",
    ],
    inputs: {
      numerator: {
        label: "Primer número",
        help: "El numerador de la razón.",
      },
      denominator: {
        label: "Segundo número",
        help: "El denominador de la razón.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "Primer simplificado",
        help: "El primer número después de la reducción por MCD.",
      },
      simplifiedDenominator: {
        label: "Segundo simplificado",
        help: "El segundo número después de la reducción por MCD.",
      },
      decimal: {
        label: "Valor decimal",
        help: "La razón expresada como número decimal.",
      },
      percentValue: {
        label: "Porcentaje",
        help: "La razón expresada como porcentaje.",
      },
      oneToXForm: {
        label: "Forma 1:x",
        help: "Razón escalada para que el primer número sea 1.",
      },
      xToOneForm: {
        label: "Forma x:1",
        help: "Razón escalada para que el segundo número sea 1.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "Ambos números deben ser enteros positivos.",
    },
    faq: [
      {
        q: "¿Qué es la simplificación de razones?",
        a: "La simplificación de razones reduce una razón a su forma más simple dividiendo ambos números por su máximo común divisor (MCD). Ejemplo: 12:18 se simplifica a 2:3.",
      },
      {
        q: "¿Qué es el algoritmo euclidiano?",
        a: "El algoritmo euclidiano divide repetidamente y toma residuos hasta llegar a 0. MCD(12, 18): 18 mod 12 = 6, luego 12 mod 6 = 0, así que MCD = 6.",
      },
      {
        q: "¿Qué significa la forma 1:x?",
        a: "La forma 1:x escala la razón para que el primer número sea 1. Ejemplo: 2:3 se convierte en 1:1.5.",
      },
      {
        q: "¿Cómo convierto una razón a porcentaje?",
        a: "Divida el primer número entre el segundo y multiplique por 100. Una razón 3:4 = 3÷4 = 0.75 = 75%.",
      },
    ],
  },

  it: {
    title: "Semplificatore di Rapporto",
    short: "Semplifica qualsiasi rapporto alla forma più semplice e visualizza le scale equivalenti.",
    description:
      "Calcolatore gratuito di semplificazione di rapporti. Riduci i rapporti alla forma più semplice usando MCD, visualizza valori decimali e percentuali.",
    keywords: [
      "semplificatore rapporto",
      "semplificare rapporto",
      "forma semplice",
      "calcolatore MCD",
      "equivalenza rapporti",
      "rapporto decimale",
    ],
    inputs: {
      numerator: {
        label: "Primo numero",
        help: "Il numeratore del rapporto.",
      },
      denominator: {
        label: "Secondo numero",
        help: "Il denominatore del rapporto.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "Primo semplificato",
        help: "Il primo numero dopo riduzione per MCD.",
      },
      simplifiedDenominator: {
        label: "Secondo semplificato",
        help: "Il secondo numero dopo riduzione per MCD.",
      },
      decimal: {
        label: "Valore decimale",
        help: "Il rapporto espresso come numero decimale.",
      },
      percentValue: {
        label: "Percentuale",
        help: "Il rapporto espresso come percentuale.",
      },
      oneToXForm: {
        label: "Forma 1:x",
        help: "Rapporto scalato affinché il primo numero sia 1.",
      },
      xToOneForm: {
        label: "Forma x:1",
        help: "Rapporto scalato affinché il secondo numero sia 1.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "Entrambi i numeri devono essere interi positivi.",
    },
    faq: [
      {
        q: "Cos'è la semplificazione di rapporti?",
        a: "La semplificazione dei rapporti riduce un rapporto alla sua forma più semplice dividendo entrambi i numeri per il loro massimo comune divisore (MCD). Esempio: 12:18 si semplifica a 2:3.",
      },
      {
        q: "Cos'è l'algoritmo euclideo?",
        a: "L'algoritmo euclideo divide ripetutamente e prende i resti finché non raggiunge 0. MCD(12, 18): 18 mod 12 = 6, poi 12 mod 6 = 0, quindi MCD = 6.",
      },
      {
        q: "Cosa significa la forma 1:x?",
        a: "La forma 1:x scala il rapporto affinché il primo numero sia 1. Esempio: 2:3 diventa 1:1.5.",
      },
      {
        q: "Come converto un rapporto in percentuale?",
        a: "Dividi il primo numero per il secondo e moltiplica per 100. Un rapporto 3:4 = 3÷4 = 0.75 = 75%.",
      },
    ],
  },

  ar: {
    title: "مبسط النسبة",
    short: "ببساطة أي نسبة إلى أبسط صورة وشاهد المقاييس المكافئة.",
    description:
      "حاسبة مجانية لتبسيط النسب. قلل النسب إلى الشكل الأبسط باستخدام القاسم المشترك الأكبر، واعرض القيم العشرية والنسبية المئوية.",
    keywords: [
      "مبسط النسبة",
      "تبسيط النسبة",
      "الشكل الأبسط",
      "حاسبة القاسم المشترك",
      "تكافؤ النسب",
      "النسبة إلى عشري",
    ],
    inputs: {
      numerator: {
        label: "الرقم الأول",
        help: "بسط النسبة.",
      },
      denominator: {
        label: "الرقم الثاني",
        help: "مقام النسبة.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "الأول المبسط",
        help: "الرقم الأول بعد الاختزال بواسطة القاسم المشترك.",
      },
      simplifiedDenominator: {
        label: "الثاني المبسط",
        help: "الرقم الثاني بعد الاختزال بواسطة القاسم المشترك.",
      },
      decimal: {
        label: "القيمة العشرية",
        help: "النسبة معبرة عنها برقم عشري.",
      },
      percentValue: {
        label: "النسبة المئوية",
        help: "النسبة معبرة عنها كنسبة مئوية.",
      },
      oneToXForm: {
        label: "صيغة 1:x",
        help: "النسبة مقياسة بحيث يصبح الرقم الأول 1.",
      },
      xToOneForm: {
        label: "صيغة x:1",
        help: "النسبة مقياسة بحيث يصبح الرقم الثاني 1.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "يجب أن يكون كلا الرقمين أعداداً صحيحة موجبة.",
    },
    faq: [
      {
        q: "ما هو تبسيط النسب؟",
        a: "يقلل تبسيط النسب النسبة إلى أبسط صورة بقسمة كلا الرقمين على القاسم المشترك الأكبر. مثال: 12:18 يبسط إلى 2:3.",
      },
      {
        q: "ما هي خوارزمية إقليدس؟",
        a: "تقسم خوارزمية إقليدس بشكل متكرر وتأخذ الباقي حتى تصل إلى 0. القاسم(12، 18): 18 mod 12 = 6، ثم 12 mod 6 = 0، إذن القاسم = 6.",
      },
      {
        q: "ماذا تعني صيغة 1:x؟",
        a: "صيغة 1:x تقيس النسبة بحيث يصبح الرقم الأول 1. مثال: 2:3 يصبح 1:1.5.",
      },
      {
        q: "كيف أحول النسبة إلى نسبة مئوية؟",
        a: "اقسم الرقم الأول على الثاني واضرب في 100. نسبة 3:4 = 3÷4 = 0.75 = 75%.",
      },
    ],
  },

  ru: {
    title: "Упроститель Соотношения",
    short: "Упростите любое соотношение до простейшей формы и увидьте эквивалентные масштабы.",
    description:
      "Бесплатный калькулятор упрощения отношений. Уменьшите отношения до простейшей формы, используя НОД, просмотрите десятичные и процентные значения.",
    keywords: [
      "упроститель соотношений",
      "упростить отношение",
      "простейшая форма",
      "калькулятор НОД",
      "эквивалентность отношений",
      "отношение в десятичное",
    ],
    inputs: {
      numerator: {
        label: "Первое число",
        help: "Числитель отношения.",
      },
      denominator: {
        label: "Второе число",
        help: "Знаменатель отношения.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "Упрощённое первое",
        help: "Первое число после сокращения на НОД.",
      },
      simplifiedDenominator: {
        label: "Упрощённое второе",
        help: "Второе число после сокращения на НОД.",
      },
      decimal: {
        label: "Десятичное значение",
        help: "Отношение, выраженное в виде десятичного числа.",
      },
      percentValue: {
        label: "Процент",
        help: "Отношение, выраженное в процентах.",
      },
      oneToXForm: {
        label: "Форма 1:x",
        help: "Масштабированное отношение так, что первое число равно 1.",
      },
      xToOneForm: {
        label: "Форма x:1",
        help: "Масштабированное отношение так, что второе число равно 1.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "Оба числа должны быть положительными целыми числами.",
    },
    faq: [
      {
        q: "Что такое упрощение отношений?",
        a: "Упрощение отношений сокращает отношение до простейшей формы путём деления обоих чисел на их наибольший общий делитель (НОД). Пример: 12:18 упрощается до 2:3.",
      },
      {
        q: "Что такое алгоритм Евклида?",
        a: "Алгоритм Евклида повторно делит и берёт остатки до достижения 0. НОД(12, 18): 18 mod 12 = 6, затем 12 mod 6 = 0, так что НОД = 6.",
      },
      {
        q: "Что означает форма 1:x?",
        a: "Форма 1:x масштабирует отношение так, что первое число становится 1. Пример: 2:3 становится 1:1.5.",
      },
      {
        q: "Как преобразовать отношение в процент?",
        a: "Разделите первое число на второе и умножьте на 100. Отношение 3:4 = 3÷4 = 0.75 = 75%.",
      },
    ],
  },

  zh: {
    title: "比例简化器",
    short: "将任何比例化简到最简形式，查看等价缩放。",
    description:
      "免费比例简化计算器。使用最大公约数将比例化简至最简形式，查看小数和百分比值。",
    keywords: [
      "比例简化器",
      "化简比例",
      "最简形式",
      "最大公约数计算器",
      "比例等价",
      "比例转小数",
    ],
    inputs: {
      numerator: {
        label: "第一个数",
        help: "比例的分子。",
      },
      denominator: {
        label: "第二个数",
        help: "比例的分母。",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "化简后的第一个数",
        help: "按最大公约数缩减后的第一个数。",
      },
      simplifiedDenominator: {
        label: "化简后的第二个数",
        help: "按最大公约数缩减后的第二个数。",
      },
      decimal: {
        label: "小数值",
        help: "表示为小数的比例。",
      },
      percentValue: {
        label: "百分比",
        help: "表示为百分比的比例。",
      },
      oneToXForm: {
        label: "1:x 形式",
        help: "缩放使第一个数等于1的比例。",
      },
      xToOneForm: {
        label: "x:1 形式",
        help: "缩放使第二个数等于1的比例。",
      },
    },
    options: {},
    errors: {
      invalidRatio: "两个数都必须是正整数。",
    },
    faq: [
      {
        q: "什么是比例简化？",
        a: "比例简化是通过用最大公约数除以两个数来将比例化为最简形式。例如，12:18 化简为 2:3。",
      },
      {
        q: "什么是欧几里得算法？",
        a: "欧几里得算法通过重复除法和取余数，直到得到 0。GCD(12, 18)：18 mod 12 = 6，然后 12 mod 6 = 0，所以 GCD = 6。",
      },
      {
        q: "1:x 形式是什么意思？",
        a: "1:x 形式是将比例缩放使第一个数变为 1。例如，2:3 变为 1:1.5。",
      },
      {
        q: "如何将比例转换为百分比？",
        a: "将第一个数除以第二个数，再乘以 100。比例 3:4 = 3÷4 = 0.75 = 75%。",
      },
    ],
  },

  ja: {
    title: "比率シンプリファイア",
    short: "任意の比率を最も単純な形に簡略化し、等価スケールを表示します。",
    description:
      "無料の比率簡略化計算機。最大公約数を使用して比率を最も単純な形に削減し、小数とパーセント値を表示します。",
    keywords: [
      "比率シンプリファイア",
      "比率を簡略化",
      "最も単純な形",
      "最大公約数計算機",
      "比率の等価性",
      "比率を小数に",
    ],
    inputs: {
      numerator: {
        label: "最初の数",
        help: "比率の分子。",
      },
      denominator: {
        label: "2番目の数",
        help: "比率の分母。",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "簡略化された最初の数",
        help: "最大公約数で削減した後の最初の数。",
      },
      simplifiedDenominator: {
        label: "簡略化された2番目の数",
        help: "最大公約数で削減した後の2番目の数。",
      },
      decimal: {
        label: "小数値",
        help: "小数として表現された比率。",
      },
      percentValue: {
        label: "パーセント",
        help: "パーセンテージとして表現された比率。",
      },
      oneToXForm: {
        label: "1:x 形式",
        help: "最初の数が1になるようにスケーリングされた比率。",
      },
      xToOneForm: {
        label: "x:1 形式",
        help: "2番目の数が1になるようにスケーリングされた比率。",
      },
    },
    options: {},
    errors: {
      invalidRatio: "両方の数は正の整数である必要があります。",
    },
    faq: [
      {
        q: "比率の簡略化とは何ですか？",
        a: "比率の簡略化は、2つの数を最大公約数で割り、最も単純な形に削減することです。例：12:18は2:3に簡略化されます。",
      },
      {
        q: "ユークリッドの互除法とは何ですか？",
        a: "ユークリッドのアルゴリズムは、繰り返し除算と余りを取り、0に達するまで行います。GCD(12, 18)：18 mod 12 = 6、次に12 mod 6 = 0、したがってGCD = 6。",
      },
      {
        q: "1:x 形式とは何ですか？",
        a: "1:x 形式は、最初の数が1になるように比率をスケーリングします。例：2:3は1:1.5になります。",
      },
      {
        q: "比率をパーセンテージに変換するにはどうすればよいですか？",
        a: "最初の数を2番目の数で割り、100を掛けます。比率3:4 = 3÷4 = 0.75 = 75%。",
      },
    ],
  },

  ko: {
    title: "비율 단순화기",
    short: "모든 비율을 가장 간단한 형태로 단순화하고 동등한 스케일을 확인합니다.",
    description:
      "무료 비율 단순화 계산기. 최대공약수를 사용하여 비율을 가장 간단한 형태로 줄이고 소수 및 백분율 값을 봅니다.",
    keywords: [
      "비율 단순화기",
      "비율 단순화",
      "가장 간단한 형태",
      "최대공약수 계산기",
      "비율 동등성",
      "비율을 소수로",
    ],
    inputs: {
      numerator: {
        label: "첫 번째 숫자",
        help: "비율의 분자.",
      },
      denominator: {
        label: "두 번째 숫자",
        help: "비율의 분모.",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "단순화된 첫 번째",
        help: "최대공약수로 축약한 후의 첫 번째 숫자.",
      },
      simplifiedDenominator: {
        label: "단순화된 두 번째",
        help: "최대공약수로 축약한 후의 두 번째 숫자.",
      },
      decimal: {
        label: "소수 값",
        help: "소수로 표현된 비율.",
      },
      percentValue: {
        label: "백분율",
        help: "백분율로 표현된 비율.",
      },
      oneToXForm: {
        label: "1:x 형태",
        help: "첫 번째 숫자가 1이 되도록 축적한 비율.",
      },
      xToOneForm: {
        label: "x:1 형태",
        help: "두 번째 숫자가 1이 되도록 축적한 비율.",
      },
    },
    options: {},
    errors: {
      invalidRatio: "두 숫자 모두 양의 정수여야 합니다.",
    },
    faq: [
      {
        q: "비율 단순화란 무엇입니까?",
        a: "비율 단순화는 두 수를 최대공약수로 나누어 비율을 가장 간단한 형태로 줄입니다. 예: 12:18은 2:3으로 단순화됩니다.",
      },
      {
        q: "유클리드 호제법이란 무엇입니까?",
        a: "유클리드 알고리즘은 반복적으로 나누고 나머지를 취하여 0에 도달할 때까지 계속합니다. GCD(12, 18): 18 mod 12 = 6, 그다음 12 mod 6 = 0, 따라서 GCD = 6.",
      },
      {
        q: "1:x 형태는 무엇을 의미합니까?",
        a: "1:x 형태는 첫 번째 숫자가 1이 되도록 비율을 축적합니다. 예: 2:3은 1:1.5가 됩니다.",
      },
      {
        q: "비율을 백분율로 변환하는 방법은 무엇입니까?",
        a: "첫 번째 숫자를 두 번째로 나누고 100을 곱합니다. 비율 3:4 = 3÷4 = 0.75 = 75%.",
      },
    ],
  },

  hi: {
    title: "अनुपात सरलीकरण",
    short: "किसी भी अनुपात को सबसे सरल रूप में सरल करें और समान मापदंड देखें।",
    description:
      "मुफ़्त अनुपात सरलीकरण कैलकुलेटर। GCD का उपयोग करके अनुपातों को सबसे सरल रूप में कम करें, दशमलव और प्रतिशत मान देखें।",
    keywords: [
      "अनुपात सरलीकरण",
      "अनुपात सरल करें",
      "सबसे सरल रूप",
      "GCD कैलकुलेटर",
      "अनुपात समतुल्यता",
      "अनुपात को दशमलव में",
    ],
    inputs: {
      numerator: {
        label: "पहली संख्या",
        help: "अनुपात का अंश।",
      },
      denominator: {
        label: "दूसरी संख्या",
        help: "अनुपात का हर।",
      },
    },
    outputs: {
      simplifiedNumerator: {
        label: "सरलीकृत पहली",
        help: "GCD से कमी के बाद पहली संख्या।",
      },
      simplifiedDenominator: {
        label: "सरलीकृत दूसरी",
        help: "GCD से कमी के बाद दूसरी संख्या।",
      },
      decimal: {
        label: "दशमलव मान",
        help: "दशमलव संख्या के रूप में व्यक्त अनुपात।",
      },
      percentValue: {
        label: "प्रतिशत",
        help: "प्रतिशत के रूप में व्यक्त अनुपात।",
      },
      oneToXForm: {
        label: "1:x रूप",
        help: "अनुपात को स्केल किया गया ताकि पहली संख्या 1 हो।",
      },
      xToOneForm: {
        label: "x:1 रूप",
        help: "अनुपात को स्केल किया गया ताकि दूसरी संख्या 1 हो।",
      },
    },
    options: {},
    errors: {
      invalidRatio: "दोनों संख्याएँ सकारात्मक पूर्णांक होनी चाहिए।",
    },
    faq: [
      {
        q: "अनुपात सरलीकरण क्या है?",
        a: "अनुपात सरलीकरण दोनों संख्याओं को उनके सबसे बड़े सार्वनिरपेक्ष भाजक से विभाजित करके अनुपात को सबसे सरल रूप में कम करता है। उदाहरण: 12:18 को 2:3 में सरल किया जाता है।",
      },
      {
        q: "यूक्लिड एल्गोरिथम क्या है?",
        a: "यूक्लिड एल्गोरिथम बार-बार विभाजन करता है और शेष लेता है जब तक 0 तक न पहुंच जाए। GCD(12, 18): 18 mod 12 = 6, फिर 12 mod 6 = 0, तो GCD = 6।",
      },
      {
        q: "1:x रूप का क्या मतलब है?",
        a: "1:x रूप अनुपात को स्केल करता है ताकि पहली संख्या 1 हो। उदाहरण: 2:3 को 1:1.5 में बदला जाता है।",
      },
      {
        q: "अनुपात को प्रतिशत में कैसे परिवर्तित करें?",
        a: "पहली संख्या को दूसरी से विभाजित करें और 100 से गुणा करें। अनुपात 3:4 = 3÷4 = 0.75 = 75%।",
      },
    ],
  },
};

export default i18n;
