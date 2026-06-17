import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Scientific Notation Converter",
    short: "Convert numbers between standard, scientific, and engineering notation instantly.",
    description:
      "Free scientific notation converter. Enter any number and choose a mode to instantly convert between standard decimal, scientific notation (a × 10^n), and engineering notation (exponents in multiples of 3). Great for physics, chemistry, and engineering calculations.",
    keywords: [
      "scientific notation converter",
      "scientific notation calculator",
      "standard form calculator",
      "engineering notation",
      "convert to scientific notation",
      "powers of ten",
      "exponential notation",
    ],
    inputs: {
      value: {
        label: "Number",
        help: "Enter any real number, including very large or very small values (e.g., 0.000123 or 6020000).",
      },
      mode: {
        label: "Conversion mode",
        help: "Choose whether to express the number in scientific, engineering, or standard decimal notation.",
      },
    },
    outputs: {
      scientific: {
        label: "Result (converted)",
        help: "The number expressed in the chosen notation format.",
      },
      standard: {
        label: "Standard decimal",
        help: "The number written as a standard decimal without exponents.",
      },
    },
    options: {
      mode: {
        toScientific: "To Scientific Notation (a × 10ⁿ)",
        toStandard: "To Standard Decimal",
        toEngineering: "To Engineering Notation (exponent multiple of 3)",
      },
    },
    errors: {
      invalidNumber: "Please enter a valid real number.",
    },
    faq: [
      {
        q: "What is scientific notation?",
        a: "Scientific notation expresses a number as a product of a coefficient (between 1 and 10) and a power of ten. For example, 0.000123 = 1.23 × 10⁻⁴ and 6,020,000 = 6.02 × 10⁶. It simplifies working with very large or very small numbers.",
      },
      {
        q: "What is engineering notation and how does it differ from scientific notation?",
        a: "Engineering notation is similar to scientific notation but restricts the exponent to multiples of 3 (0, ±3, ±6, ±9, …), which align with SI prefixes (kilo, mega, giga, milli, micro, nano). The coefficient can range from 1 to 999. For example, 0.000123 = 123 × 10⁻⁶ (123 microunits).",
      },
      {
        q: "How do I convert a number to scientific notation manually?",
        a: "Move the decimal point until there is exactly one non-zero digit to the left of it. Count the number of places moved — this is your exponent. Moving left gives a positive exponent; moving right gives a negative exponent. Example: 45,600 → 4.56 × 10⁴.",
      },
      {
        q: "What are SI prefixes and how do they relate to powers of ten?",
        a: "SI prefixes are standardised multipliers used in science and engineering: nano (10⁻⁹), micro (10⁻⁶), milli (10⁻³), kilo (10³), mega (10⁶), giga (10⁹), tera (10¹²). Engineering notation uses these same exponents so that values can be directly expressed with SI prefix units.",
      },
      {
        q: "Why do scientists use scientific notation instead of writing out all the zeros?",
        a: "Writing 602,214,076,000,000,000,000,000 (Avogadro's number) is cumbersome and error-prone. Scientific notation — 6.02214076 × 10²³ — is more concise, avoids counting zero errors, and makes the order of magnitude immediately apparent. It is the universal convention in physics and chemistry.",
      },
    ],
  },
  nl: {
    title: "Wetenschappelijke Notatie Converteerer",
    short: "Converteer nummers between standard, scientific, and engineering notation direct.",
    description:
      "Gratis scientific notation converteerer. Enter any nummer and choose a mode to direct converteer between standard decimal, scientific notation (a × 10^n), and engineering notation (exponents in multiples of 3). Great for physics, chemistry, and engineering calculations.",
    keywords: [
      "scientific notation converteerer",
      "scientific notation calculator",
      "standard form calculator",
      "engineering notation",
      "converteer to scientific notation",
      "powers of ten",
      "exponential notation",
    ],
    inputs: {
      value: {
        label: "Nummer",
        help: "Enter any real nummer, including very large or very small values (e.g., 0.000123 or 6020000).",
      },
      mode: {
        label: "Conversion mode",
        help: "Choose whether to express the nummer in scientific, engineering, or standard decimal notation.",
      },
    },
    outputs: {
      scientific: {
        label: "Resultaat (converteered)",
        help: "The nummer expressed in the chosen notation formatteer.",
      },
      standard: {
        label: "Standard decimal",
        help: "The nummer written as a standard decimal without exponents.",
      },
    },
    options: {
      mode: {
        toScientific: "To Wetenschappelijke Notatie (a × 10ⁿ)",
        toStandard: "To Standard Decimal",
        toEngineering: "To Engineering Notation (exponent multiple of 3)",
      },
    },
    errors: {
      invalidNumber: "Please enter a valid real nummer.",
    },
    faq: [
      {
        q: "What is scientific notation?",
        a: "Scientific notation expresses a nummer as a product of a coefficient (between 1 and 10) and a power of ten. For example, 0.000123 = 1.23 × 10⁻⁴ and 6,020,000 = 6.02 × 10⁶. It simplifies working with very large or very small nummers.",
      },
      {
        q: "What is engineering notation and how does it differ from scientific notation?",
        a: "Engineering notation is similar to scientific notation but restricts the exponent to multiples of 3 (0, ±3, ±6, ±9, …), which align with SI prefixes (kilo, mega, giga, milli, micro, nano). The coefficient can range from 1 to 999. For example, 0.000123 = 123 × 10⁻⁶ (123 microunits).",
      },
      {
        q: "How do I converteer a nummer to scientific notation manually?",
        a: "Move the decimal point until there is exactly one non-zero digit to the left of it. Count the nummer of places moved — this is your exponent. Moving left gives a positive exponent; moving right gives a negative exponent. Example: 45,600 → 4.56 × 10⁴.",
      },
      {
        q: "What are SI prefixes and how do they relate to powers of ten?",
        a: "SI prefixes are standardised multipliers used in science and engineering: nano (10⁻⁹), micro (10⁻⁶), milli (10⁻³), kilo (10³), mega (10⁶), giga (10⁹), tera (10¹²). Engineering notation uses these same exponents so that values can be directly expressed with SI prefix units.",
      },
      {
        q: "Why do scientists use scientific notation instead of writing out all the zeros?",
        a: "Writing 602,214,076,000,000,000,000,000 (Avogadro's nummer) is cumbersome and error-prone. Scientific notation — 6.02214076 × 10²³ — is more concise, avoids counting zero errors, and makes the order of magnitude immediately apparent. It is the universal convention in physics and chemistry.",
      },
    ],
  },

  pl: {
    title: "Notacja Naukowa Konwerter",
    short: "Konwertuj liczbas between standard, scientific, and engineering notation natychmiast.",
    description:
      "Darmowy scientific notation konwerter. Enter any liczba and choose a mode to natychmiast konwertuj between standard decimal, scientific notation (a × 10^n), and engineering notation (exponents in multiples of 3). Great for physics, chemistry, and engineering calculations.",
    keywords: [
      "scientific notation konwerter",
      "scientific notation kalkulator",
      "standard form kalkulator",
      "engineering notation",
      "konwertuj to scientific notation",
      "powers of ten",
      "exponential notation",
    ],
    inputs: {
      value: {
        label: "Liczba",
        help: "Enter any real liczba, including very large or very small values (e.g., 0.000123 or 6020000).",
      },
      mode: {
        label: "Conversion mode",
        help: "Choose whether to express the liczba in scientific, engineering, or standard decimal notation.",
      },
    },
    outputs: {
      scientific: {
        label: "Wynik (konwertujed)",
        help: "The liczba expressed in the chosen notation formatuj.",
      },
      standard: {
        label: "Standard decimal",
        help: "The liczba written as a standard decimal without exponents.",
      },
    },
    options: {
      mode: {
        toScientific: "To Notacja Naukowa (a × 10ⁿ)",
        toStandard: "To Standard Decimal",
        toEngineering: "To Engineering Notation (exponent multiple of 3)",
      },
    },
    errors: {
      invalidNumber: "Please enter a valid real liczba.",
    },
    faq: [
      {
        q: "What is scientific notation?",
        a: "Scientific notation expresses a liczba as a product of a coefficient (between 1 and 10) and a power of ten. For example, 0.000123 = 1.23 × 10⁻⁴ and 6,020,000 = 6.02 × 10⁶. It simplifies working with very large or very small liczbas.",
      },
      {
        q: "What is engineering notation and how does it differ from scientific notation?",
        a: "Engineering notation is similar to scientific notation but restricts the exponent to multiples of 3 (0, ±3, ±6, ±9, …), which align with SI prefixes (kilo, mega, giga, milli, micro, nano). The coefficient can range from 1 to 999. For example, 0.000123 = 123 × 10⁻⁶ (123 microunits).",
      },
      {
        q: "How do I konwertuj a liczba to scientific notation manually?",
        a: "Move the decimal point until there is exactly one non-zero digit to the left of it. Count the liczba of places moved — this is your exponent. Moving left gives a positive exponent; moving right gives a negative exponent. Example: 45,600 → 4.56 × 10⁴.",
      },
      {
        q: "What are SI prefixes and how do they relate to powers of ten?",
        a: "SI prefixes are standardised multipliers used in science and engineering: nano (10⁻⁹), micro (10⁻⁶), milli (10⁻³), kilo (10³), mega (10⁶), giga (10⁹), tera (10¹²). Engineering notation uses these same exponents so that values can be directly expressed with SI prefix units.",
      },
      {
        q: "Why do scientists use scientific notation instead of writing out all the zeros?",
        a: "Writing 602,214,076,000,000,000,000,000 (Avogadro's liczba) is cumbersome and error-prone. Scientific notation — 6.02214076 × 10²³ — is more concise, avoids counting zero errors, and makes the order of magnitude immediately apparent. It is the universal convention in physics and chemistry.",
      },
    ],
  },
  pt: {
    title: "Conversor de Notação Científica",
    short: "Converta entre notação científica e decimal padrão.",
    description:
      "Calculadora gratuita de notação científica. Converta números muito grandes ou pequenos entre notação científica, decimal e engenharia.",
    keywords: ["notação científica", "potência de 10", "ordem grandeza", "notação engenharia", "exponencial"],
    inputs: {
      value: {
        label: "Number",
        help: "Enter any real number, including very large or very small values (e.g., 0.000123 or 6020000).",
      },
      mode: {
        label: "Conversion mode",
        help: "Choose whether to express the number in scientific, engineering, or standard decimal notation.",
      },
    },
    outputs: {
      scientific: {
        label: "Result (converted)",
        help: "The number expressed in the chosen notation format.",
      },
      standard: {
        label: "Standard decimal",
        help: "The number written as a standard decimal without exponents.",
      },
    },
    options: {
      mode: {
        toScientific: "To Scientific Notation (a × 10ⁿ)",
        toStandard: "To Standard Decimal",
        toEngineering: "To Engineering Notation (exponent multiple of 3)",
      },
    },
    errors: {
      invalidNumber: "Please enter a valid real number.",
    },
    faq: [
      {
        q: "What is scientific notation?",
        a: "Scientific notation expresses a number as a product of a coefficient (between 1 and 10) and a power of ten. For example, 0.000123 = 1.23 × 10⁻⁴ and 6,020,000 = 6.02 × 10⁶. It simplifies working with very large or very small numbers.",
      },
      {
        q: "What is engineering notation and how does it differ from scientific notation?",
        a: "Engineering notation is similar to scientific notation but restricts the exponent to multiples of 3 (0, ±3, ±6, ±9, …), which align with SI prefixes (kilo, mega, giga, milli, micro, nano). The coefficient can range from 1 to 999. For example, 0.000123 = 123 × 10⁻⁶ (123 microunits).",
      },
      {
        q: "How do I convert a number to scientific notation manually?",
        a: "Move the decimal point until there is exactly one non-zero digit to the left of it. Count the number of places moved — this is your exponent. Moving left gives a positive exponent; moving right gives a negative exponent. Example: 45,600 → 4.56 × 10⁴.",
      },
      {
        q: "What are SI prefixes and how do they relate to powers of ten?",
        a: "SI prefixes are standardised multipliers used in science and engineering: nano (10⁻⁹), micro (10⁻⁶), milli (10⁻³), kilo (10³), mega (10⁶), giga (10⁹), tera (10¹²). Engineering notation uses these same exponents so that values can be directly expressed with SI prefix units.",
      },
      {
        q: "Why do scientists use scientific notation instead of writing out all the zeros?",
        a: "Writing 602,214,076,000,000,000,000,000 (Avogadro's number) is cumbersome and error-prone. Scientific notation — 6.02214076 × 10²³ — is more concise, avoids counting zero errors, and makes the order of magnitude immediately apparent. It is the universal convention in physics and chemistry.",
      },
    ],
  },
  id: {
    title: "Konverter Notasi Ilmiah",
    short: "Konversi antara notasi ilmiah dan desimal standar.",
    description:
      "Kalkulator notasi ilmiah gratis. Konversi bilangan sangat besar atau kecil antara notasi ilmiah, desimal, dan teknik.",
    keywords: ["notasi ilmiah", "pangkat 10", "orde besaran", "notasi teknik", "eksponensial"],
    inputs: {
      value: {
        label: "Number",
        help: "Enter any real number, including very large or very small values (e.g., 0.000123 or 6020000).",
      },
      mode: {
        label: "Conversion mode",
        help: "Choose whether to express the number in scientific, engineering, or standard decimal notation.",
      },
    },
    outputs: {
      scientific: {
        label: "Result (converted)",
        help: "The number expressed in the chosen notation format.",
      },
      standard: {
        label: "Standard decimal",
        help: "The number written as a standard decimal without exponents.",
      },
    },
    options: {
      mode: {
        toScientific: "To Scientific Notation (a × 10ⁿ)",
        toStandard: "To Standard Decimal",
        toEngineering: "To Engineering Notation (exponent multiple of 3)",
      },
    },
    errors: {
      invalidNumber: "Please enter a valid real number.",
    },
    faq: [
      {
        q: "What is scientific notation?",
        a: "Scientific notation expresses a number as a product of a coefficient (between 1 and 10) and a power of ten. For example, 0.000123 = 1.23 × 10⁻⁴ and 6,020,000 = 6.02 × 10⁶. It simplifies working with very large or very small numbers.",
      },
      {
        q: "What is engineering notation and how does it differ from scientific notation?",
        a: "Engineering notation is similar to scientific notation but restricts the exponent to multiples of 3 (0, ±3, ±6, ±9, …), which align with SI prefixes (kilo, mega, giga, milli, micro, nano). The coefficient can range from 1 to 999. For example, 0.000123 = 123 × 10⁻⁶ (123 microunits).",
      },
      {
        q: "How do I convert a number to scientific notation manually?",
        a: "Move the decimal point until there is exactly one non-zero digit to the left of it. Count the number of places moved — this is your exponent. Moving left gives a positive exponent; moving right gives a negative exponent. Example: 45,600 → 4.56 × 10⁴.",
      },
      {
        q: "What are SI prefixes and how do they relate to powers of ten?",
        a: "SI prefixes are standardised multipliers used in science and engineering: nano (10⁻⁹), micro (10⁻⁶), milli (10⁻³), kilo (10³), mega (10⁶), giga (10⁹), tera (10¹²). Engineering notation uses these same exponents so that values can be directly expressed with SI prefix units.",
      },
      {
        q: "Why do scientists use scientific notation instead of writing out all the zeros?",
        a: "Writing 602,214,076,000,000,000,000,000 (Avogadro's number) is cumbersome and error-prone. Scientific notation — 6.02214076 × 10²³ — is more concise, avoids counting zero errors, and makes the order of magnitude immediately apparent. It is the universal convention in physics and chemistry.",
      },
    ],
  },


  tr: {
    title: "Bilimsel Gösterim Dönüştürücü",
    short: "Sayıları standart, bilimsel ve mühendislik gösterimi arasında anında dönüştürün.",
    description:
      "Ücretsiz bilimsel gösterim dönüştürücü. Herhangi bir sayı girin ve standart ondalık, bilimsel gösterim (a × 10^n) veya mühendislik gösterimi (3'ün katları olan üsler) arasında anında dönüşüm yapın. Fizik, kimya ve mühendislik hesapları için idealdir.",
    keywords: [
      "bilimsel gösterim dönüştürücü",
      "bilimsel notasyon hesaplayıcı",
      "standart form hesaplayıcı",
      "mühendislik notasyonu",
      "bilimsel gösterime çevirme",
      "10 kuvvetleri",
      "üstel gösterim",
    ],
    inputs: {
      value: {
        label: "Sayı",
        help: "Çok büyük veya çok küçük değerler dahil herhangi bir gerçek sayı girin (örn. 0,000123 veya 6020000).",
      },
      mode: {
        label: "Dönüşüm modu",
        help: "Sayının bilimsel, mühendislik veya standart ondalık gösterimde ifade edilmesini seçin.",
      },
    },
    outputs: {
      scientific: {
        label: "Sonuç (dönüştürülmüş)",
        help: "Seçilen gösterim biçiminde ifade edilen sayı.",
      },
      standard: {
        label: "Standart ondalık",
        help: "Üs kullanılmadan standart ondalık biçimde yazılmış sayı.",
      },
    },
    options: {
      mode: {
        toScientific: "Bilimsel Gösterime Çevir (a × 10ⁿ)",
        toStandard: "Standart Ondalığa Çevir",
        toEngineering: "Mühendislik Gösterimine Çevir (üs 3'ün katı)",
      },
    },
    errors: {
      invalidNumber: "Lütfen geçerli bir gerçek sayı girin.",
    },
    faq: [
      {
        q: "Bilimsel gösterim nedir?",
        a: "Bilimsel gösterim, bir sayıyı 1 ile 10 arasındaki bir katsayı ile 10'un bir kuvvetinin çarpımı olarak ifade eder. Örneğin 0,000123 = 1,23 × 10⁻⁴ ve 6.020.000 = 6,02 × 10⁶. Çok büyük veya çok küçük sayılarla çalışmayı kolaylaştırır.",
      },
      {
        q: "Mühendislik gösterimi bilimsel gösterimden nasıl farklıdır?",
        a: "Mühendislik gösterimi, üssü 3'ün katlarıyla (0, ±3, ±6, ±9…) sınırlar; bu üsler SI önekleriyle (kilo, mega, giga, milli, mikro, nano) örtüşür. Katsayı 1 ile 999 arasında olabilir. Örneğin 0,000123 = 123 × 10⁻⁶ (123 mikrobirim).",
      },
      {
        q: "Bir sayı bilimsel gösterime nasıl çevrilir?",
        a: "Ondalık noktayı, ondalık noktanın solunda tam bir sıfır olmayan basamak kalacak şekilde kaydırın. Kaydırılan yer sayısı üstür. Sola kaydırma pozitif üs, sağa kaydırma negatif üs verir. Örnek: 45.600 → 4,56 × 10⁴.",
      },
      {
        q: "SI önekleri 10'un kuvvetleriyle nasıl ilişkilidir?",
        a: "SI önekleri bilim ve mühendislikte kullanılan standart çarpanlardır: nano (10⁻⁹), mikro (10⁻⁶), mili (10⁻³), kilo (10³), mega (10⁶), giga (10⁹), tera (10¹²). Mühendislik gösterimi, değerlerin doğrudan SI ön ekli birimlerle ifade edilebilmesi için aynı üsleri kullanır.",
      },
      {
        q: "Bilim insanları neden sıfırları yazmak yerine bilimsel gösterimi kullanır?",
        a: "602.214.076.000.000.000.000.000 (Avogadro sayısı) gibi değerleri yazmak hem zahmetli hem de hata yapmaya açıktır. 6,02214076 × 10²³ olarak yazılması daha özlüdür, sıfır sayma hatalarını ortadan kaldırır ve büyüklük mertebesini hemen görünür kılar.",
      },
    ],
  },

  de: {
    title: "Wissenschaftliche Notation Umrechner",
    short: "Zahlen zwischen Standardform, wissenschaftlicher und technischer Notation umrechnen.",
    description:
      "Kostenloser Umrechner für wissenschaftliche Notation. Geben Sie eine Zahl ein und konvertieren Sie sie sofort zwischen Dezimalschreibweise, wissenschaftlicher Notation (a × 10ⁿ) und technischer Notation.",
    keywords: [
      "Wissenschaftliche Notation",
      "Umrechner Wissenschaftliche Notation",
      "Standardform Rechner",
      "Technische Notation",
      "Exponentialschreibweise",
      "Zehnerpotenzen",
      "Wissenschaftliche Schreibweise",
    ],
    inputs: {
      value: { label: "Zahl", help: "Beliebige reelle Zahl, auch sehr groß oder sehr klein (z.B. 0,000123 oder 6020000)." },
      mode: { label: "Umrechnungsmodus", help: "Wählen Sie die Zieldarstellung: wissenschaftlich, technisch oder Dezimalform." },
    },
    outputs: {
      scientific: { label: "Ergebnis (umgerechnet)", help: "Die Zahl in der gewählten Darstellung." },
      standard: { label: "Dezimalschreibweise", help: "Die Zahl ohne Exponenten in Dezimalform." },
    },
    options: {
      mode: {
        toScientific: "In Wissenschaftliche Notation (a × 10ⁿ)",
        toStandard: "In Dezimalschreibweise",
        toEngineering: "In Technische Notation (Exponent als Vielfaches von 3)",
      },
    },
    errors: {
      invalidNumber: "Bitte geben Sie eine gültige reelle Zahl ein.",
    },
    faq: [
      {
        q: "Was ist wissenschaftliche Notation?",
        a: "Die wissenschaftliche Notation schreibt eine Zahl als Produkt einer Mantisse (zwischen 1 und 10) und einer Zehnerpotenz. Zum Beispiel: 0,000123 = 1,23 × 10⁻⁴.",
      },
      {
        q: "Was ist der Unterschied zwischen wissenschaftlicher und technischer Notation?",
        a: "Die technische Notation beschränkt den Exponenten auf Vielfache von 3, die den SI-Präfixen entsprechen (kilo, mega, giga, milli, mikro, nano). Die Mantisse liegt dann zwischen 1 und 999.",
      },
    ],
  },

  fr: {
    title: "Convertisseur de Notation Scientifique",
    short: "Convertissez des nombres entre notation décimale, scientifique et d'ingénierie instantanément.",
    description:
      "Convertisseur gratuit de notation scientifique. Entrez un nombre et convertissez-le instantanément entre décimal, notation scientifique (a × 10ⁿ) et notation d'ingénierie.",
    keywords: [
      "convertisseur notation scientifique",
      "calculateur notation scientifique",
      "notation scientifique en ligne",
      "notation d'ingénierie",
      "puissances de dix",
      "écriture scientifique",
      "forme standard",
    ],
    inputs: {
      value: { label: "Nombre", help: "Tout nombre réel, très grand ou très petit (ex. 0,000123 ou 6 020 000)." },
      mode: { label: "Mode de conversion", help: "Choisissez la notation cible : scientifique, d'ingénierie ou décimale." },
    },
    outputs: {
      scientific: { label: "Résultat (converti)", help: "Le nombre exprimé dans la notation choisie." },
      standard: { label: "Décimal standard", help: "Le nombre écrit en forme décimale sans exposant." },
    },
    options: {
      mode: {
        toScientific: "En notation scientifique (a × 10ⁿ)",
        toStandard: "En décimal standard",
        toEngineering: "En notation d'ingénierie (exposant multiple de 3)",
      },
    },
    errors: {
      invalidNumber: "Veuillez entrer un nombre réel valide.",
    },
    faq: [
      {
        q: "Qu'est-ce que la notation scientifique ?",
        a: "La notation scientifique exprime un nombre comme le produit d'un coefficient (entre 1 et 10) et d'une puissance de dix. Par exemple : 0,000123 = 1,23 × 10⁻⁴.",
      },
      {
        q: "Quelle est la différence entre notation scientifique et notation d'ingénierie ?",
        a: "La notation d'ingénierie limite l'exposant aux multiples de 3, correspondant aux préfixes SI (kilo, méga, giga, milli, micro, nano). Le coefficient peut alors aller de 1 à 999.",
      },
    ],
  },

  es: {
    title: "Convertidor de Notación Científica",
    short: "Convierte números entre notación estándar, científica e ingenieril al instante.",
    description:
      "Convertidor gratuito de notación científica. Introduce cualquier número y conviértelo entre decimal estándar, notación científica (a × 10ⁿ) y notación ingenieril.",
    keywords: [
      "convertidor notación científica",
      "calculadora notación científica",
      "forma estándar calculadora",
      "notación ingenieril",
      "potencias de diez",
      "escritura científica",
      "notación exponencial",
    ],
    inputs: {
      value: { label: "Número", help: "Cualquier número real, muy grande o muy pequeño (ej. 0,000123 o 6 020 000)." },
      mode: { label: "Modo de conversión", help: "Elige la notación destino: científica, ingenieril o decimal estándar." },
    },
    outputs: {
      scientific: { label: "Resultado (convertido)", help: "El número expresado en la notación elegida." },
      standard: { label: "Decimal estándar", help: "El número escrito en forma decimal sin exponentes." },
    },
    options: {
      mode: {
        toScientific: "A notación científica (a × 10ⁿ)",
        toStandard: "A decimal estándar",
        toEngineering: "A notación ingenieril (exponente múltiplo de 3)",
      },
    },
    errors: {
      invalidNumber: "Por favor, introduce un número real válido.",
    },
    faq: [
      {
        q: "¿Qué es la notación científica?",
        a: "La notación científica expresa un número como el producto de un coeficiente (entre 1 y 10) y una potencia de diez. Por ejemplo: 0,000123 = 1,23 × 10⁻⁴.",
      },
      {
        q: "¿En qué se diferencia la notación ingenieril de la científica?",
        a: "La notación ingenieril limita el exponente a múltiplos de 3, que coinciden con los prefijos SI (kilo, mega, giga, mili, micro, nano). El coeficiente puede ir de 1 a 999.",
      },
    ],
  },

  it: {
    title: "Convertitore di Notazione Scientifica",
    short: "Converti numeri tra notazione decimale, scientifica e ingegneristica all'istante.",
    description:
      "Convertitore gratuito di notazione scientifica. Inserisci qualsiasi numero e convertilo tra decimale standard, notazione scientifica (a × 10ⁿ) e notazione ingegneristica.",
    keywords: [
      "convertitore notazione scientifica",
      "calcolatore notazione scientifica",
      "forma standard calcolatore",
      "notazione ingegneristica",
      "potenze di dieci",
      "scrittura scientifica",
      "notazione esponenziale",
    ],
    inputs: {
      value: { label: "Numero", help: "Qualsiasi numero reale, molto grande o molto piccolo (es. 0,000123 o 6.020.000)." },
      mode: { label: "Modalità di conversione", help: "Scegli la notazione desiderata: scientifica, ingegneristica o decimale standard." },
    },
    outputs: {
      scientific: { label: "Risultato (convertito)", help: "Il numero espresso nella notazione scelta." },
      standard: { label: "Decimale standard", help: "Il numero scritto in forma decimale senza esponenti." },
    },
    options: {
      mode: {
        toScientific: "In notazione scientifica (a × 10ⁿ)",
        toStandard: "In decimale standard",
        toEngineering: "In notazione ingegneristica (esponente multiplo di 3)",
      },
    },
    errors: {
      invalidNumber: "Inserisci un numero reale valido.",
    },
    faq: [
      {
        q: "Cos'è la notazione scientifica?",
        a: "La notazione scientifica esprime un numero come prodotto di un coefficiente (tra 1 e 10) e una potenza di dieci. Ad esempio: 0,000123 = 1,23 × 10⁻⁴.",
      },
      {
        q: "Qual è la differenza tra notazione scientifica e ingegneristica?",
        a: "La notazione ingegneristica limita l'esponente ai multipli di 3, corrispondenti ai prefissi SI (chilo, mega, giga, milli, micro, nano). Il coefficiente può variare da 1 a 999.",
      },
    ],
  },

  ar: {
    title: "محوّل الصيغة العلمية",
    short: "حوّل الأعداد بين الصيغة الاعتيادية والعلمية والهندسية فوراً.",
    description:
      "محوّل مجاني للصيغة العلمية. أدخل أي رقم واختر الوضع للتحويل الفوري بين الكتابة العشرية الاعتيادية والصيغة العلمية (أ × 10ⁿ) والصيغة الهندسية.",
    keywords: [
      "محوّل الصيغة العلمية",
      "حاسبة الصيغة العلمية",
      "الكتابة العلمية للأعداد",
      "الصيغة الهندسية",
      "قوى العشرة",
      "الكتابة الأسية",
      "تحويل أعداد",
    ],
    inputs: {
      value: { label: "الرقم", help: "أدخل أي رقم حقيقي، سواء كان كبيراً جداً أو صغيراً جداً (مثلاً 0.000123 أو 6020000)." },
      mode: { label: "وضع التحويل", help: "اختر الصيغة المطلوبة: علمية أو هندسية أو عشرية اعتيادية." },
    },
    outputs: {
      scientific: { label: "النتيجة (بعد التحويل)", help: "الرقم معبّراً عنه بالصيغة المختارة." },
      standard: { label: "الصيغة العشرية الاعتيادية", help: "الرقم مكتوباً بالشكل العشري بدون أسس." },
    },
    options: {
      mode: {
        toScientific: "إلى الصيغة العلمية (أ × 10ⁿ)",
        toStandard: "إلى الصيغة العشرية الاعتيادية",
        toEngineering: "إلى الصيغة الهندسية (الأس من مضاعفات 3)",
      },
    },
    errors: {
      invalidNumber: "يرجى إدخال رقم حقيقي صحيح.",
    },
    faq: [
      {
        q: "ما هي الصيغة العلمية؟",
        a: "تعبّر الصيغة العلمية عن الرقم على هيئة حاصل ضرب معامل (بين 1 و10) وقوة من قوى العشرة. مثلاً: 0.000123 = 1.23 × 10⁻⁴.",
      },
      {
        q: "ما الفرق بين الصيغة العلمية والهندسية؟",
        a: "تقتصر الصيغة الهندسية على أسس من مضاعفات 3 تتوافق مع بادئات النظام الدولي للوحدات (كيلو وميغا وجيغا وميلي وميكرو ونانو)، ويتراوح المعامل فيها بين 1 و999.",
      },
    ],
  },

  ru: {
    title: "Конвертер Научной Нотации",
    short: "Мгновенно конвертируйте числа между стандартной, научной и инженерной записью.",
    description:
      "Бесплатный конвертер научной нотации. Введите любое число и мгновенно преобразуйте его из стандартной десятичной формы в научную запись (a × 10ⁿ) или инженерную нотацию.",
    keywords: [
      "конвертер научной нотации",
      "калькулятор научной нотации",
      "стандартная форма числа",
      "инженерная нотация",
      "степени десяти",
      "показательная запись",
      "перевод числа в научную запись",
    ],
    inputs: {
      value: { label: "Число", help: "Любое вещественное число, очень большое или очень маленькое (например, 0,000123 или 6020000)." },
      mode: { label: "Режим конвертации", help: "Выберите целевой формат: научная, инженерная или десятичная запись." },
    },
    outputs: {
      scientific: { label: "Результат (конвертированный)", help: "Число в выбранном формате записи." },
      standard: { label: "Десятичная запись", help: "Число в стандартной десятичной форме без экспоненты." },
    },
    options: {
      mode: {
        toScientific: "В научную нотацию (a × 10ⁿ)",
        toStandard: "В стандартную десятичную",
        toEngineering: "В инженерную нотацию (показатель кратен 3)",
      },
    },
    errors: {
      invalidNumber: "Пожалуйста, введите корректное вещественное число.",
    },
    faq: [
      {
        q: "Что такое научная нотация?",
        a: "Научная нотация записывает число в виде произведения мантиссы (от 1 до 10) и степени десяти. Например: 0,000123 = 1,23 × 10⁻⁴.",
      },
      {
        q: "Чем отличается инженерная нотация от научной?",
        a: "Инженерная нотация ограничивает показатель степени кратными тройки, соответствующими приставкам СИ (кило, мега, гига, милли, микро, нано). Мантисса может принимать значения от 1 до 999.",
      },
    ],
  },

  zh: {
    title: "科学计数法转换器",
    short: "即时在标准小数、科学计数法与工程计数法之间转换数字。",
    description:
      "免费科学计数法转换器。输入任意数字，立即在标准小数、科学计数法（a × 10ⁿ）和工程计数法之间进行转换。适用于物理、化学和工程计算。",
    keywords: [
      "科学计数法转换器",
      "科学计数法计算器",
      "标准形式计算器",
      "工程计数法",
      "10的幂次",
      "指数记法",
      "数字转换",
    ],
    inputs: {
      value: { label: "数字", help: "输入任意实数，包括极大或极小的数值（如 0.000123 或 6020000）。" },
      mode: { label: "转换模式", help: "选择目标表示形式：科学计数法、工程计数法或标准小数。" },
    },
    outputs: {
      scientific: { label: "结果（转换后）", help: "用所选记法表示的数字。" },
      standard: { label: "标准小数", help: "不含指数的标准小数形式。" },
    },
    options: {
      mode: {
        toScientific: "转为科学计数法（a × 10ⁿ）",
        toStandard: "转为标准小数",
        toEngineering: "转为工程计数法（指数为 3 的倍数）",
      },
    },
    errors: {
      invalidNumber: "请输入有效的实数。",
    },
    faq: [
      {
        q: "什么是科学计数法？",
        a: "科学计数法将数字表示为系数（1 到 10 之间）与 10 的幂次的乘积。例如：0.000123 = 1.23 × 10⁻⁴。",
      },
      {
        q: "工程计数法与科学计数法有何不同？",
        a: "工程计数法将指数限制为 3 的倍数，与 SI 前缀（千、兆、吉、毫、微、纳）对应，系数范围为 1 到 999。",
      },
    ],
  },

  ja: {
    title: "科学的記数法コンバーター",
    short: "数値を標準小数・科学的記数法・工学的記数法の間で即座に変換します。",
    description:
      "無料の科学的記数法コンバーター。任意の数値を入力し、標準小数・科学的記数法（a × 10ⁿ）・工学的記数法の間で瞬時に変換できます。物理・化学・工学の計算に最適です。",
    keywords: [
      "科学的記数法 変換",
      "科学的記数法 計算機",
      "標準形 計算機",
      "工学的記数法",
      "10の累乗",
      "指数表記",
      "数値変換",
    ],
    inputs: {
      value: { label: "数値", help: "任意の実数（非常に大きい数や小さい数も可）を入力してください（例：0.000123 または 6020000）。" },
      mode: { label: "変換モード", help: "変換先の表記法を選択してください：科学的記数法・工学的記数法・標準小数。" },
    },
    outputs: {
      scientific: { label: "結果（変換後）", help: "選択した記法で表された数値。" },
      standard: { label: "標準小数", help: "指数を使わない標準的な小数表記。" },
    },
    options: {
      mode: {
        toScientific: "科学的記数法へ変換（a × 10ⁿ）",
        toStandard: "標準小数へ変換",
        toEngineering: "工学的記数法へ変換（指数は 3 の倍数）",
      },
    },
    errors: {
      invalidNumber: "有効な実数を入力してください。",
    },
    faq: [
      {
        q: "科学的記数法とは何ですか？",
        a: "科学的記数法は、数値を係数（1〜10）と 10 の累乗の積として表します。例：0.000123 = 1.23 × 10⁻⁴。",
      },
      {
        q: "工学的記数法と科学的記数法の違いは何ですか？",
        a: "工学的記数法は指数を 3 の倍数（SI 接頭辞と対応）に限定し、係数は 1〜999 の範囲になります。",
      },
    ],
  },

  ko: {
    title: "과학적 표기법 변환기",
    short: "숫자를 표준 소수, 과학적 표기법, 공학적 표기법 사이에서 즉시 변환합니다.",
    description:
      "무료 과학적 표기법 변환기. 임의의 숫자를 입력하고 표준 소수, 과학적 표기법(a × 10ⁿ), 공학적 표기법 사이에서 즉시 변환합니다. 물리, 화학, 공학 계산에 최적입니다.",
    keywords: [
      "과학적 표기법 변환기",
      "과학적 표기법 계산기",
      "표준형 계산기",
      "공학적 표기법",
      "10의 거듭제곱",
      "지수 표기법",
      "숫자 변환",
    ],
    inputs: {
      value: { label: "숫자", help: "매우 크거나 작은 값을 포함한 임의의 실수를 입력하세요 (예: 0.000123 또는 6020000)." },
      mode: { label: "변환 모드", help: "목표 표기법을 선택하세요: 과학적, 공학적 또는 표준 소수." },
    },
    outputs: {
      scientific: { label: "결과 (변환됨)", help: "선택한 표기법으로 표현된 숫자." },
      standard: { label: "표준 소수", help: "지수 없이 표준 소수 형태로 작성된 숫자." },
    },
    options: {
      mode: {
        toScientific: "과학적 표기법으로 변환 (a × 10ⁿ)",
        toStandard: "표준 소수로 변환",
        toEngineering: "공학적 표기법으로 변환 (지수는 3의 배수)",
      },
    },
    errors: {
      invalidNumber: "유효한 실수를 입력해 주세요.",
    },
    faq: [
      {
        q: "과학적 표기법이란 무엇인가요?",
        a: "과학적 표기법은 숫자를 계수(1 이상 10 미만)와 10의 거듭제곱의 곱으로 표현합니다. 예: 0.000123 = 1.23 × 10⁻⁴.",
      },
      {
        q: "공학적 표기법과 과학적 표기법의 차이는 무엇인가요?",
        a: "공학적 표기법은 지수를 3의 배수(SI 접두사와 대응)로 제한하며, 계수는 1~999 범위가 됩니다.",
      },
    ],
  },

  hi: {
    title: "वैज्ञानिक संकेतन परिवर्तक",
    short: "संख्याओं को मानक दशमलव, वैज्ञानिक और इंजीनियरिंग संकेतन के बीच तुरंत परिवर्तित करें।",
    description:
      "मुफ़्त वैज्ञानिक संकेतन परिवर्तक। कोई भी संख्या दर्ज करें और मानक दशमलव, वैज्ञानिक संकेतन (a × 10ⁿ) और इंजीनियरिंग संकेतन के बीच तुरंत रूपांतरण करें। भौतिकी, रसायन और अभियांत्रिकी के लिए आदर्श।",
    keywords: [
      "वैज्ञानिक संकेतन परिवर्तक",
      "वैज्ञानिक संकेतन कैलकुलेटर",
      "मानक रूप कैलकुलेटर",
      "इंजीनियरिंग संकेतन",
      "दस की घातें",
      "घातांकीय संकेतन",
      "संख्या रूपांतरण",
    ],
    inputs: {
      value: { label: "संख्या", help: "कोई भी वास्तविक संख्या दर्ज करें, बहुत बड़ी या बहुत छोटी (जैसे 0.000123 या 6020000)।" },
      mode: { label: "रूपांतरण मोड", help: "लक्ष्य संकेतन चुनें: वैज्ञानिक, इंजीनियरिंग या मानक दशमलव।" },
    },
    outputs: {
      scientific: { label: "परिणाम (परिवर्तित)", help: "चुने गए संकेतन में व्यक्त संख्या।" },
      standard: { label: "मानक दशमलव", help: "घातांक के बिना मानक दशमलव रूप में संख्या।" },
    },
    options: {
      mode: {
        toScientific: "वैज्ञानिक संकेतन में (a × 10ⁿ)",
        toStandard: "मानक दशमलव में",
        toEngineering: "इंजीनियरिंग संकेतन में (घातांक 3 का गुणज)",
      },
    },
    errors: {
      invalidNumber: "कृपया एक मान्य वास्तविक संख्या दर्ज करें।",
    },
    faq: [
      {
        q: "वैज्ञानिक संकेतन क्या है?",
        a: "वैज्ञानिक संकेतन किसी संख्या को एक गुणांक (1 से 10 के बीच) और 10 की घात के गुणनफल के रूप में व्यक्त करता है। उदाहरण: 0.000123 = 1.23 × 10⁻⁴।",
      },
      {
        q: "इंजीनियरिंग संकेतन और वैज्ञानिक संकेतन में क्या अंतर है?",
        a: "इंजीनियरिंग संकेतन घातांक को 3 के गुणजों तक सीमित करता है जो SI उपसर्गों (किलो, मेगा, गीगा, मिली, माइक्रो, नैनो) से मेल खाते हैं। गुणांक 1 से 999 के बीच होता है।",
      },
    ],
  },
};

export default i18n;
