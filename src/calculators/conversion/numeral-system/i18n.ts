import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Number Base Converter",
    short: "Convert numbers between decimal, binary, octal, and hexadecimal bases.",
    description:
      "Free number base converter supporting decimal, binary, octal, and hexadecimal conversions. Handles negative numbers and fractional parts.",
    keywords: ["base converter", "binary", "hexadecimal", "number system", "octal", "decimal conversion", "base 2 4 8 16"],
    inputs: {
      sourceBase: {
        label: "From base",
        help: "Select the input number base.",
      },
      value: {
        label: "Number",
        help: "Enter the number to convert. Supports negative numbers and fractional parts (e.g., -10.5, 255, 1010, FF).",
      },
    },
    outputs: {
      decimal: {
        label: "Decimal (Base 10)",
      },
      binary: {
        label: "Binary (Base 2)",
      },
      octal: {
        label: "Octal (Base 8)",
      },
      hexadecimal: {
        label: "Hexadecimal (Base 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "Decimal (Base 10)",
        binary: "Binary (Base 2)",
        octal: "Octal (Base 8)",
        hexadecimal: "Hexadecimal (Base 16)",
      },
    },
    errors: {
      invalidInput: "Invalid number format for the selected base.",
      outOfRange: "Number is out of range.",
    },
    faq: [
      {
        q: "What is a number base?",
        a: "A number base (or radix) is the number of unique digits used in a positional numeral system. Decimal uses base 10 (0-9), binary uses base 2 (0-1), octal uses base 8 (0-7), and hexadecimal uses base 16 (0-9, A-F).",
      },
      {
        q: "Why is hexadecimal used in computing?",
        a: "Hexadecimal is widely used in computing because it is a compact representation of binary. Each hexadecimal digit represents exactly 4 binary digits, making it easier for humans to read and write binary data.",
      },
      {
        q: "How does binary conversion work?",
        a: "To convert decimal to binary, repeatedly divide by 2 and collect remainders. For example, 10 ÷ 2 = 5 remainder 0, 5 ÷ 2 = 2 remainder 1, 2 ÷ 2 = 1 remainder 0, 1 ÷ 2 = 0 remainder 1, giving 1010 in binary.",
      },
      {
        q: "Can I convert negative numbers?",
        a: "Yes! This converter supports negative numbers in all bases. The negative sign is preserved, so -10 in decimal converts to -1010 in binary.",
      },
      {
        q: "What about fractional numbers?",
        a: "Fractional numbers can be converted using repeated multiplication. For example, 0.5 decimal = 0.1 binary. Some fractions create repeating patterns (like 0.1 decimal repeating in binary), which are limited to 20 digits.",
      },
    ],
  },
  pt: {
    title: "Conversor de Sistema Numérico",
    short: "Converta entre binário, decimal, octal e hexadecimal.",
    description:
      "Conversor gratuito de sistema numérico. Converta números entre bases 2 (binário), 8 (octal), 10 (decimal) e 16 (hexadecimal).",
    keywords: ["sistema numérico", "binário decimal", "hexadecimal", "octal", "conversão bases"],
    inputs: {
      sourceBase: {
        label: "From base",
        help: "Select the input number base.",
      },
      value: {
        label: "Number",
        help: "Enter the number to convert. Supports negative numbers and fractional parts (e.g., -10.5, 255, 1010, FF).",
      },
    },
    outputs: {
      decimal: {
        label: "Decimal (Base 10)",
      },
      binary: {
        label: "Binary (Base 2)",
      },
      octal: {
        label: "Octal (Base 8)",
      },
      hexadecimal: {
        label: "Hexadecimal (Base 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "Decimal (Base 10)",
        binary: "Binary (Base 2)",
        octal: "Octal (Base 8)",
        hexadecimal: "Hexadecimal (Base 16)",
      },
    },
    errors: {
      invalidInput: "Invalid number format for the selected base.",
      outOfRange: "Number is out of range.",
    },
    faq: [
      {
        q: "What is a number base?",
        a: "A number base (or radix) is the number of unique digits used in a positional numeral system. Decimal uses base 10 (0-9), binary uses base 2 (0-1), octal uses base 8 (0-7), and hexadecimal uses base 16 (0-9, A-F).",
      },
      {
        q: "Why is hexadecimal used in computing?",
        a: "Hexadecimal is widely used in computing because it is a compact representation of binary. Each hexadecimal digit represents exactly 4 binary digits, making it easier for humans to read and write binary data.",
      },
      {
        q: "How does binary conversion work?",
        a: "To convert decimal to binary, repeatedly divide by 2 and collect remainders. For example, 10 ÷ 2 = 5 remainder 0, 5 ÷ 2 = 2 remainder 1, 2 ÷ 2 = 1 remainder 0, 1 ÷ 2 = 0 remainder 1, giving 1010 in binary.",
      },
      {
        q: "Can I convert negative numbers?",
        a: "Yes! This converter supports negative numbers in all bases. The negative sign is preserved, so -10 in decimal converts to -1010 in binary.",
      },
      {
        q: "What about fractional numbers?",
        a: "Fractional numbers can be converted using repeated multiplication. For example, 0.5 decimal = 0.1 binary. Some fractions create repeating patterns (like 0.1 decimal repeating in binary), which are limited to 20 digits.",
      },
    ],
  },
  id: {
    title: "Konverter Sistem Bilangan",
    short: "Konversi antara biner, desimal, oktal, dan heksadesimal.",
    description:
      "Konverter sistem bilangan gratis. Konversi bilangan antara basis 2 (biner), 8 (oktal), 10 (desimal), dan 16 (heksadesimal).",
    keywords: ["sistem bilangan", "biner desimal", "heksadesimal", "oktal", "konversi basis"],
    inputs: {
      sourceBase: {
        label: "From base",
        help: "Select the input number base.",
      },
      value: {
        label: "Number",
        help: "Enter the number to convert. Supports negative numbers and fractional parts (e.g., -10.5, 255, 1010, FF).",
      },
    },
    outputs: {
      decimal: {
        label: "Decimal (Base 10)",
      },
      binary: {
        label: "Binary (Base 2)",
      },
      octal: {
        label: "Octal (Base 8)",
      },
      hexadecimal: {
        label: "Hexadecimal (Base 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "Decimal (Base 10)",
        binary: "Binary (Base 2)",
        octal: "Octal (Base 8)",
        hexadecimal: "Hexadecimal (Base 16)",
      },
    },
    errors: {
      invalidInput: "Invalid number format for the selected base.",
      outOfRange: "Number is out of range.",
    },
    faq: [
      {
        q: "What is a number base?",
        a: "A number base (or radix) is the number of unique digits used in a positional numeral system. Decimal uses base 10 (0-9), binary uses base 2 (0-1), octal uses base 8 (0-7), and hexadecimal uses base 16 (0-9, A-F).",
      },
      {
        q: "Why is hexadecimal used in computing?",
        a: "Hexadecimal is widely used in computing because it is a compact representation of binary. Each hexadecimal digit represents exactly 4 binary digits, making it easier for humans to read and write binary data.",
      },
      {
        q: "How does binary conversion work?",
        a: "To convert decimal to binary, repeatedly divide by 2 and collect remainders. For example, 10 ÷ 2 = 5 remainder 0, 5 ÷ 2 = 2 remainder 1, 2 ÷ 2 = 1 remainder 0, 1 ÷ 2 = 0 remainder 1, giving 1010 in binary.",
      },
      {
        q: "Can I convert negative numbers?",
        a: "Yes! This converter supports negative numbers in all bases. The negative sign is preserved, so -10 in decimal converts to -1010 in binary.",
      },
      {
        q: "What about fractional numbers?",
        a: "Fractional numbers can be converted using repeated multiplication. For example, 0.5 decimal = 0.1 binary. Some fractions create repeating patterns (like 0.1 decimal repeating in binary), which are limited to 20 digits.",
      },
    ],
  },


  tr: {
    title: "Sayı Tabanı Dönüştürücüsü",
    short: "Sayıları onluk, ikili, sekizli ve onaltılı tabanlara çevirin.",
    description:
      "Ücretsiz sayı tabanı dönüştürücü: onluk, ikili, sekizli ve onaltılı tabanlara dönüşüm. Negatif sayılar ve kesirli kısımları destekler.",
    keywords: [
      "taban dönüştürme",
      "ikili sayı",
      "onaltılı",
      "sayı sistemi",
      "sekizli",
      "onluk dönüşüm",
      "tabanlar",
    ],
    inputs: {
      sourceBase: {
        label: "Kaynak taban",
        help: "Giriş sayısının tabanını seçin.",
      },
      value: {
        label: "Sayı",
        help: "Dönüştürmek istediğiniz sayıyı girin. Negatif sayılar ve kesirli kısımları destekler (örn. -10.5, 255, 1010, FF).",
      },
    },
    outputs: {
      decimal: {
        label: "Onluk (Taban 10)",
      },
      binary: {
        label: "İkili (Taban 2)",
      },
      octal: {
        label: "Sekizli (Taban 8)",
      },
      hexadecimal: {
        label: "Onaltılı (Taban 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "Onluk (Taban 10)",
        binary: "İkili (Taban 2)",
        octal: "Sekizli (Taban 8)",
        hexadecimal: "Onaltılı (Taban 16)",
      },
    },
    errors: {
      invalidInput: "Seçilen taban için geçersiz sayı biçimi.",
      outOfRange: "Sayı aralık dışıdır.",
    },
    faq: [
      {
        q: "Sayı tabanı nedir?",
        a: "Sayı tabanı (radix), konumsal sayı sisteminde kullanılan benzersiz rakamların sayısıdır. Onluk sistem taban 10'u (0-9), ikili sistem taban 2'yi (0-1), sekizli sistem taban 8'i (0-7) ve onaltılı sistem taban 16'yı (0-9, A-F) kullanır.",
      },
      {
        q: "Bilgisayarlarda neden onaltılı kullanılır?",
        a: "Onaltılı ikiliyi kompakt şekilde temsil eder. Her onaltılı rakam tam olarak 4 ikili rakama karşılık gelir, bu da insanların ikili verileri okumayı ve yazmayı kolaylaştırır.",
      },
      {
        q: "İkili dönüşümü nasıl çalışır?",
        a: "Onluk sayıyı ikiliye çevirmek için tekrarlı olarak 2'ye bölüp kalanları toplayın. Örneğin, 10 ÷ 2 = 5 kalan 0, 5 ÷ 2 = 2 kalan 1, 2 ÷ 2 = 1 kalan 0, 1 ÷ 2 = 0 kalan 1, sonuç ikili olarak 1010'dur.",
      },
      {
        q: "Negatif sayıları dönüştürebilir miyim?",
        a: "Evet! Bu dönüştürücü tüm tabanlarda negatif sayıları destekler. Negatif işareti korunur, yani -10 onluk sistem -1010 ikiliye dönüşür.",
      },
      {
        q: "Kesirli sayılar hakkında ne söyleyebilirsiniz?",
        a: "Kesirli sayılar tekrarlı çarpma kullanılarak dönüştürülebilir. Örneğin, 0.5 onluk = 0.1 ikili. Bazı kesirler tekrarlayan desenler oluşturur (örneğin 0.1 onluk ikilide tekrarlanan), bunlar 20 rakamla sınırlıdır.",
      },
    ],
  },

  de: {
    title: "Zahlensystem-Konverter",
    short: "Konvertieren Sie Zahlen zwischen dezimal, binär, oktal und hexadezimal.",
    description:
      "Kostenlos Zahlen zwischen Dezimal, Binär, Oktal und Hexadezimal konvertieren. Unterstützt negative Zahlen und Dezimalstellen.",
    keywords: [
      "Zahlensystem-Umrechnung",
      "Binärzahl",
      "Hexadezimal",
      "Zahlensysteme",
      "Oktal",
      "Dezimal-Konvertierung",
      "Basen",
    ],
    inputs: {
      sourceBase: {
        label: "Von Basis",
        help: "Wählen Sie die Basis der Eingabezahl.",
      },
      value: {
        label: "Zahl",
        help: "Geben Sie die zu konvertierende Zahl ein. Unterstützt negative Zahlen und Dezimalstellen (z.B. -10.5, 255, 1010, FF).",
      },
    },
    outputs: {
      decimal: {
        label: "Dezimal (Basis 10)",
      },
      binary: {
        label: "Binär (Basis 2)",
      },
      octal: {
        label: "Oktal (Basis 8)",
      },
      hexadecimal: {
        label: "Hexadezimal (Basis 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "Dezimal (Basis 10)",
        binary: "Binär (Basis 2)",
        octal: "Oktal (Basis 8)",
        hexadecimal: "Hexadezimal (Basis 16)",
      },
    },
    errors: {
      invalidInput: "Ungültiges Zahlenformat für die ausgewählte Basis.",
      outOfRange: "Zahl liegt außerhalb des Bereichs.",
    },
    faq: [
      {
        q: "Was ist ein Zahlensystem?",
        a: "Ein Zahlensystem (oder Basis) ist die Anzahl der eindeutigen Ziffern in einem Positionszahlensystem. Dezimal verwendet Basis 10 (0-9), Binär verwendet Basis 2 (0-1), Oktal verwendet Basis 8 (0-7) und Hexadezimal verwendet Basis 16 (0-9, A-F).",
      },
      {
        q: "Warum wird Hexadezimal in der Informatik verwendet?",
        a: "Hexadezimal wird häufig in der Informatik verwendet, weil es eine kompakte Darstellung von Binär ist. Jede Hexadezimalziffer stellt genau 4 Binärziffern dar, was es für Menschen einfacher macht, Binärdaten zu lesen und zu schreiben.",
      },
      {
        q: "Wie funktioniert die Binärkonvertierung?",
        a: "Um eine Dezimalzahl in Binär umzuwandeln, teilen Sie wiederholt durch 2 und sammeln die Reste. Zum Beispiel: 10 ÷ 2 = 5 Rest 0, 5 ÷ 2 = 2 Rest 1, 2 ÷ 2 = 1 Rest 0, 1 ÷ 2 = 0 Rest 1, ergibt 1010 in Binär.",
      },
      {
        q: "Kann ich negative Zahlen konvertieren?",
        a: "Ja! Dieser Konverter unterstützt negative Zahlen in allen Basen. Das Minuszeichen bleibt erhalten, daher wird -10 dezimal zu -1010 binär.",
      },
      {
        q: "Was ist mit Dezimalzahlen?",
        a: "Dezimalzahlen können durch wiederholte Multiplikation konvertiert werden. Zum Beispiel: 0,5 dezimal = 0,1 binär. Einige Brüche erzeugen wiederholte Muster (wie 0,1 dezimal wiederholend in Binär), die auf 20 Ziffern begrenzt sind.",
      },
    ],
  },

  fr: {
    title: "Convertisseur de Bases Numériques",
    short: "Convertissez les nombres entre les bases décimale, binaire, octale et hexadécimale.",
    description:
      "Convertisseur de base numérique gratuit pour décimal, binaire, octal et hexadécimal. Supporte les nombres négatifs et les parties fractionnaires.",
    keywords: [
      "convertisseur de base",
      "binaire",
      "hexadécimal",
      "système numérique",
      "octal",
      "conversion décimale",
      "bases",
    ],
    inputs: {
      sourceBase: {
        label: "De la base",
        help: "Sélectionnez la base du nombre d'entrée.",
      },
      value: {
        label: "Nombre",
        help: "Entrez le nombre à convertir. Supporte les nombres négatifs et les parties fractionnaires (p.ex. -10.5, 255, 1010, FF).",
      },
    },
    outputs: {
      decimal: {
        label: "Décimal (Base 10)",
      },
      binary: {
        label: "Binaire (Base 2)",
      },
      octal: {
        label: "Octal (Base 8)",
      },
      hexadecimal: {
        label: "Hexadécimal (Base 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "Décimal (Base 10)",
        binary: "Binaire (Base 2)",
        octal: "Octal (Base 8)",
        hexadecimal: "Hexadécimal (Base 16)",
      },
    },
    errors: {
      invalidInput: "Format de nombre invalide pour la base sélectionnée.",
      outOfRange: "Le nombre est hors limite.",
    },
    faq: [
      {
        q: "Qu'est-ce qu'une base numérique?",
        a: "Une base numérique (ou radix) est le nombre de chiffres uniques utilisés dans un système numérique positionnel. Le décimal utilise la base 10 (0-9), le binaire utilise la base 2 (0-1), l'octal utilise la base 8 (0-7) et l'hexadécimal utilise la base 16 (0-9, A-F).",
      },
      {
        q: "Pourquoi l'hexadécimal est-il utilisé en informatique?",
        a: "L'hexadécimal est largement utilisé en informatique car c'est une représentation compacte du binaire. Chaque chiffre hexadécimal représente exactement 4 chiffres binaires, ce qui facilite la lecture et l'écriture de données binaires.",
      },
      {
        q: "Comment fonctionne la conversion binaire?",
        a: "Pour convertir le décimal en binaire, divisez répétitivement par 2 et collectez les restes. Par exemple: 10 ÷ 2 = 5 reste 0, 5 ÷ 2 = 2 reste 1, 2 ÷ 2 = 1 reste 0, 1 ÷ 2 = 0 reste 1, donnant 1010 en binaire.",
      },
      {
        q: "Puis-je convertir des nombres négatifs?",
        a: "Oui! Ce convertisseur supporte les nombres négatifs dans toutes les bases. Le signe négatif est conservé, donc -10 en décimal se convertit en -1010 en binaire.",
      },
      {
        q: "Et les nombres fractionnaires?",
        a: "Les nombres fractionnaires peuvent être convertis en utilisant la multiplication répétée. Par exemple: 0,5 décimal = 0,1 binaire. Certaines fractions créent des motifs répétitifs (comme 0,1 décimal qui se répète en binaire), limités à 20 chiffres.",
      },
    ],
  },

  es: {
    title: "Convertidor de Bases Numéricas",
    short: "Convierte números entre bases decimal, binaria, octal y hexadecimal.",
    description:
      "Convertidor de bases gratuito para decimal, binario, octal y hexadecimal. Admite números negativos y partes fraccionarias.",
    keywords: [
      "convertidor de base",
      "binario",
      "hexadecimal",
      "sistema numérico",
      "octal",
      "conversión decimal",
      "bases",
    ],
    inputs: {
      sourceBase: {
        label: "Desde base",
        help: "Selecciona la base del número de entrada.",
      },
      value: {
        label: "Número",
        help: "Ingresa el número a convertir. Admite números negativos y partes fraccionarias (p.ej. -10.5, 255, 1010, FF).",
      },
    },
    outputs: {
      decimal: {
        label: "Decimal (Base 10)",
      },
      binary: {
        label: "Binario (Base 2)",
      },
      octal: {
        label: "Octal (Base 8)",
      },
      hexadecimal: {
        label: "Hexadecimal (Base 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "Decimal (Base 10)",
        binary: "Binario (Base 2)",
        octal: "Octal (Base 8)",
        hexadecimal: "Hexadecimal (Base 16)",
      },
    },
    errors: {
      invalidInput: "Formato de número inválido para la base seleccionada.",
      outOfRange: "El número está fuera de rango.",
    },
    faq: [
      {
        q: "¿Qué es una base numérica?",
        a: "Una base numérica (o radix) es la cantidad de dígitos únicos utilizados en un sistema numérico posicional. El decimal usa base 10 (0-9), el binario usa base 2 (0-1), el octal usa base 8 (0-7) y el hexadecimal usa base 16 (0-9, A-F).",
      },
      {
        q: "¿Por qué se usa hexadecimal en informática?",
        a: "El hexadecimal se usa ampliamente en informática porque es una representación compacta del binario. Cada dígito hexadecimal representa exactamente 4 dígitos binarios, lo que facilita a los humanos leer y escribir datos binarios.",
      },
      {
        q: "¿Cómo funciona la conversión binaria?",
        a: "Para convertir decimal a binario, divide repetidamente entre 2 y recopila los residuos. Por ejemplo: 10 ÷ 2 = 5 residuo 0, 5 ÷ 2 = 2 residuo 1, 2 ÷ 2 = 1 residuo 0, 1 ÷ 2 = 0 residuo 1, dando 1010 en binario.",
      },
      {
        q: "¿Puedo convertir números negativos?",
        a: "¡Sí! Este convertidor admite números negativos en todas las bases. El signo negativo se conserva, así que -10 en decimal se convierte en -1010 en binario.",
      },
      {
        q: "¿Qué hay sobre números fraccionarios?",
        a: "Los números fraccionarios pueden convertirse usando multiplicación repetida. Por ejemplo: 0.5 decimal = 0.1 binario. Algunas fracciones crean patrones repetitivos (como 0.1 decimal repitiendo en binario), limitados a 20 dígitos.",
      },
    ],
  },

  it: {
    title: "Convertitore di Sistemi Numerici",
    short: "Converti i numeri tra i sistemi decimale, binario, ottale ed esadecimale.",
    description:
      "Convertitore di basi numerico gratuito per decimale, binario, ottale ed esadecimale. Supporta numeri negativi e parti frazionarie.",
    keywords: [
      "convertitore di base",
      "binario",
      "esadecimale",
      "sistema numerico",
      "ottale",
      "conversione decimale",
      "basi",
    ],
    inputs: {
      sourceBase: {
        label: "Dalla base",
        help: "Seleziona la base del numero di input.",
      },
      value: {
        label: "Numero",
        help: "Inserisci il numero da convertire. Supporta numeri negativi e parti frazionarie (ad es. -10.5, 255, 1010, FF).",
      },
    },
    outputs: {
      decimal: {
        label: "Decimale (Base 10)",
      },
      binary: {
        label: "Binario (Base 2)",
      },
      octal: {
        label: "Ottale (Base 8)",
      },
      hexadecimal: {
        label: "Esadecimale (Base 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "Decimale (Base 10)",
        binary: "Binario (Base 2)",
        octal: "Ottale (Base 8)",
        hexadecimal: "Esadecimale (Base 16)",
      },
    },
    errors: {
      invalidInput: "Formato di numero non valido per la base selezionata.",
      outOfRange: "Il numero è fuori portata.",
    },
    faq: [
      {
        q: "Cos'è un sistema numerico?",
        a: "Un sistema numerico (o radice) è il numero di cifre uniche utilizzate in un sistema numerico posizionale. Decimale utilizza base 10 (0-9), binario utilizza base 2 (0-1), ottale utilizza base 8 (0-7) e esadecimale utilizza base 16 (0-9, A-F).",
      },
      {
        q: "Perché l'esadecimale viene utilizzato nell'informatica?",
        a: "L'esadecimale è ampiamente utilizzato in informatica perché è una rappresentazione compatta del binario. Ogni cifra esadecimale rappresenta esattamente 4 cifre binarie, facilitando la lettura e la scrittura di dati binari.",
      },
      {
        q: "Come funziona la conversione binaria?",
        a: "Per convertire da decimale a binario, dividi ripetutamente per 2 e raccogli i resti. Ad esempio: 10 ÷ 2 = 5 resto 0, 5 ÷ 2 = 2 resto 1, 2 ÷ 2 = 1 resto 0, 1 ÷ 2 = 0 resto 1, risultato 1010 in binario.",
      },
      {
        q: "Posso convertire numeri negativi?",
        a: "Sì! Questo convertitore supporta numeri negativi in tutte le basi. Il segno negativo viene mantenuto, quindi -10 in decimale si converte in -1010 in binario.",
      },
      {
        q: "Che dire dei numeri frazionari?",
        a: "I numeri frazionari possono essere convertiti usando la moltiplicazione ripetuta. Ad esempio: 0,5 decimale = 0,1 binario. Alcune frazioni creano schemi ripetitivi (come 0,1 decimale che si ripete in binario), limitate a 20 cifre.",
      },
    ],
  },

  ar: {
    title: "محول أنظمة الأعداد",
    short: "حول الأعداد بين الأنظمة العشري والثنائي والثماني والسادس عشر.",
    description:
      "محول أساس أعداد مجاني يدعم التحويل بين العشري والثنائي والثماني والسادس عشر. يدعم الأعداد السالبة والكسور العشرية.",
    keywords: [
      "محول الأساس",
      "ثنائي",
      "سادس عشر",
      "نظام أعداد",
      "ثماني",
      "تحويل عشري",
      "أساسات",
    ],
    inputs: {
      sourceBase: {
        label: "من الأساس",
        help: "اختر أساس العدد المدخل.",
      },
      value: {
        label: "الرقم",
        help: "أدخل الرقم المراد تحويله. يدعم الأعداد السالبة والكسور (مثلاً -10.5، 255، 1010، FF).",
      },
    },
    outputs: {
      decimal: {
        label: "عشري (الأساس 10)",
      },
      binary: {
        label: "ثنائي (الأساس 2)",
      },
      octal: {
        label: "ثماني (الأساس 8)",
      },
      hexadecimal: {
        label: "سادس عشر (الأساس 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "عشري (الأساس 10)",
        binary: "ثنائي (الأساس 2)",
        octal: "ثماني (الأساس 8)",
        hexadecimal: "سادس عشر (الأساس 16)",
      },
    },
    errors: {
      invalidInput: "صيغة رقمية غير صحيحة للأساس المختار.",
      outOfRange: "الرقم خارج النطاق.",
    },
    faq: [
      {
        q: "ما هو نظام الأعداد؟",
        a: "نظام الأعداد (أو الأساس) هو عدد الأرقام الفريدة المستخدمة في نظام العد الموضعي. يستخدم النظام العشري الأساس 10 (0-9)، والنظام الثنائي الأساس 2 (0-1)، والنظام الثماني الأساس 8 (0-7)، والنظام السادس عشر الأساس 16 (0-9، A-F).",
      },
      {
        q: "لماذا يتم استخدام النظام السادس عشر في الحوسبة؟",
        a: "يُستخدم النظام السادس عشر على نطاق واسع في الحوسبة لأنه يمثل النظام الثنائي بشكل مضغوط. كل رقم سادس عشر يمثل بالضبط 4 أرقام ثنائية، مما يجعل من السهل على البشر قراءة وكتابة البيانات الثنائية.",
      },
      {
        q: "كيف يعمل التحويل الثنائي؟",
        a: "لتحويل عشري إلى ثنائي، قسّم بشكل متكرر على 2 واجمع الباقي. على سبيل المثال: 10 ÷ 2 = 5 الباقي 0، 5 ÷ 2 = 2 الباقي 1، 2 ÷ 2 = 1 الباقي 0، 1 ÷ 2 = 0 الباقي 1، النتيجة 1010 بالنظام الثنائي.",
      },
      {
        q: "هل يمكنني تحويل أرقام سالبة؟",
        a: "نعم! يدعم هذا المحول الأرقام السالبة في جميع الأساسات. يتم الحفاظ على العلامة السالبة، لذلك -10 العشري يتحول إلى -1010 الثنائي.",
      },
      {
        q: "ماذا عن الأرقام الكسرية؟",
        a: "يمكن تحويل الأرقام الكسرية باستخدام الضرب المتكرر. على سبيل المثال: 0.5 عشري = 0.1 ثنائي. تنتج بعض الكسور أنماطاً متكررة (مثل 0.1 عشري المتكرر في ثنائي)، مقيدة بـ 20 رقماً.",
      },
    ],
  },

  ru: {
    title: "Конвертер систем счисления",
    short: "Конвертируйте числа между десятичной, двоичной, восьмеричной и шестнадцатеричной системами.",
    description:
      "Бесплатный конвертер оснований для преобразования между десятичной, двоичной, восьмеричной и шестнадцатеричной системами. Поддерживает отрицательные числа и дробные части.",
    keywords: [
      "конвертер оснований",
      "двоичная",
      "шестнадцатеричная",
      "системы счисления",
      "восьмеричная",
      "преобразование десятичной",
      "основания",
    ],
    inputs: {
      sourceBase: {
        label: "Исходное основание",
        help: "Выберите основание входного числа.",
      },
      value: {
        label: "Число",
        help: "Введите число для преобразования. Поддерживает отрицательные числа и дробные части (например, -10.5, 255, 1010, FF).",
      },
    },
    outputs: {
      decimal: {
        label: "Десятичная (Основание 10)",
      },
      binary: {
        label: "Двоичная (Основание 2)",
      },
      octal: {
        label: "Восьмеричная (Основание 8)",
      },
      hexadecimal: {
        label: "Шестнадцатеричная (Основание 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "Десятичная (Основание 10)",
        binary: "Двоичная (Основание 2)",
        octal: "Восьмеричная (Основание 8)",
        hexadecimal: "Шестнадцатеричная (Основание 16)",
      },
    },
    errors: {
      invalidInput: "Неверный формат числа для выбранного основания.",
      outOfRange: "Число выходит за пределы диапазона.",
    },
    faq: [
      {
        q: "Что такое система счисления?",
        a: "Система счисления (или основание) — это количество уникальных цифр, используемых в позиционной системе счисления. Десятичная система использует основание 10 (0-9), двоичная использует основание 2 (0-1), восьмеричная использует основание 8 (0-7), а шестнадцатеричная использует основание 16 (0-9, A-F).",
      },
      {
        q: "Почему в компьютерах используется шестнадцатеричная система?",
        a: "Шестнадцатеричная система широко используется в компьютерах, так как это компактное представление двоичной системы. Каждая шестнадцатеричная цифра представляет ровно 4 двоичные цифры, что облегчает чтение и запись двоичных данных.",
      },
      {
        q: "Как работает двоичное преобразование?",
        a: "Чтобы преобразовать десятичное число в двоичное, многократно делите на 2 и собирайте остатки. Например: 10 ÷ 2 = 5 остаток 0, 5 ÷ 2 = 2 остаток 1, 2 ÷ 2 = 1 остаток 0, 1 ÷ 2 = 0 остаток 1, результат 1010 в двоичной системе.",
      },
      {
        q: "Могу ли я преобразовать отрицательные числа?",
        a: "Да! Этот конвертер поддерживает отрицательные числа во всех системах счисления. Знак минус сохраняется, так что -10 в десятичной системе преобразуется в -1010 в двоичной.",
      },
      {
        q: "Что с дробными числами?",
        a: "Дробные числа можно преобразовать, используя повторное умножение. Например: 0,5 в десятичной системе = 0,1 в двоичной. Некоторые дроби создают повторяющиеся паттерны (например, 0,1 в десятичной системе повторяется в двоичной), ограниченные 20 цифрами.",
      },
    ],
  },

  zh: {
    title: "数制转换器",
    short: "在十进制、二进制、八进制和十六进制之间转换数字。",
    description:
      "免费数制转换器，支持十进制、二进制、八进制和十六进制之间的转换。支持负数和小数部分。",
    keywords: ["进制转换", "二进制", "十六进制", "数制", "八进制", "十进制转换", "进制"],
    inputs: {
      sourceBase: {
        label: "源进制",
        help: "选择输入数字的进制。",
      },
      value: {
        label: "数字",
        help: "输入要转换的数字。支持负数和小数部分（例如 -10.5、255、1010、FF）。",
      },
    },
    outputs: {
      decimal: {
        label: "十进制（进制 10）",
      },
      binary: {
        label: "二进制（进制 2）",
      },
      octal: {
        label: "八进制（进制 8）",
      },
      hexadecimal: {
        label: "十六进制（进制 16）",
      },
    },
    options: {
      sourceBase: {
        decimal: "十进制（进制 10）",
        binary: "二进制（进制 2）",
        octal: "八进制（进制 8）",
        hexadecimal: "十六进制（进制 16）",
      },
    },
    errors: {
      invalidInput: "所选进制的数字格式无效。",
      outOfRange: "数字超出范围。",
    },
    faq: [
      {
        q: "什么是数制？",
        a: "数制（或基数）是位置记数系统中使用的唯一数字的个数。十进制使用基数 10（0-9），二进制使用基数 2（0-1），八进制使用基数 8（0-7），十六进制使用基数 16（0-9、A-F）。",
      },
      {
        q: "为什么在计算中使用十六进制？",
        a: "十六进制在计算中广泛使用，因为它是二进制的紧凑表示。每个十六进制数字恰好代表 4 个二进制数字，使人们更容易读写二进制数据。",
      },
      {
        q: "二进制转换如何工作？",
        a: "要将十进制转换为二进制，反复除以 2 并收集余数。例如：10 ÷ 2 = 5 余 0，5 ÷ 2 = 2 余 1，2 ÷ 2 = 1 余 0，1 ÷ 2 = 0 余 1，得到二进制的 1010。",
      },
      {
        q: "我可以转换负数吗？",
        a: "是的！此转换器支持所有进制中的负数。负号得以保留，因此十进制的 -10 转换为二进制的 -1010。",
      },
      {
        q: "小数怎么办？",
        a: "小数可以使用重复乘法转换。例如：十进制的 0.5 = 二进制的 0.1。某些分数会产生重复模式（如十进制的 0.1 在二进制中重复），限制为 20 位。",
      },
    ],
  },

  ja: {
    title: "数値体系コンバーター",
    short: "10進法、2進法、8進法、16進法の間で数値を変換します。",
    description:
      "10進法、2進法、8進法、16進法の変換をサポートする無料の数値体系コンバーター。負の数と小数部をサポートします。",
    keywords: ["進数変換", "2進法", "16進法", "数値体系", "8進法", "10進法変換", "進法"],
    inputs: {
      sourceBase: {
        label: "変換元の進法",
        help: "入力数値の進法を選択します。",
      },
      value: {
        label: "数値",
        help: "変換する数値を入力します。負の数と小数部をサポートします（例：-10.5、255、1010、FF）。",
      },
    },
    outputs: {
      decimal: {
        label: "10進法（進数 10）",
      },
      binary: {
        label: "2進法（進数 2）",
      },
      octal: {
        label: "8進法（進数 8）",
      },
      hexadecimal: {
        label: "16進法（進数 16）",
      },
    },
    options: {
      sourceBase: {
        decimal: "10進法（進数 10）",
        binary: "2進法（進数 2）",
        octal: "8進法（進数 8）",
        hexadecimal: "16進法（進数 16）",
      },
    },
    errors: {
      invalidInput: "選択した進法の数値形式が無効です。",
      outOfRange: "数値が範囲外です。",
    },
    faq: [
      {
        q: "数値体系とは何ですか？",
        a: "数値体系（または基数）は、位置記数法で使用される一意の数字の数です。10進法は基数10（0～9）、2進法は基数2（0～1）、8進法は基数8（0～7）、16進法は基数16（0～9、A～F）を使用します。",
      },
      {
        q: "コンピューティングになぜ16進法を使用しますか？",
        a: "16進法はコンピューティングで広く使用されています。これは2進法のコンパクトな表現だからです。各16進数は正確に4つの2進数を表し、人間がバイナリデータを読み書きしやすくなります。",
      },
      {
        q: "2進数変換はどのように機能しますか？",
        a: "10進数を2進数に変換するには、2で繰り返し除算し、余りを集めます。たとえば：10÷2 = 5余り0、5÷2 = 2余り1、2÷2 = 1余り0、1÷2 = 0余り1、結果は2進数で1010です。",
      },
      {
        q: "負の数を変換できますか？",
        a: "はい！このコンバーターはすべての進法で負の数をサポートしています。マイナス記号が保持されるため、10進数の-10は2進数の-1010に変換されます。",
      },
      {
        q: "小数についてはどうですか？",
        a: "小数は繰り返し乗算を使用して変換できます。たとえば、10進数の0.5 = 2進数の0.1です。一部の分数は繰り返しパターン（10進数の0.1が2進法で繰り返すなど）を作成し、20桁に制限されます。",
      },
    ],
  },

  ko: {
    title: "수치체계 변환기",
    short: "십진수, 이진수, 팔진수, 십육진수 간에 숫자를 변환합니다.",
    description:
      "십진수, 이진수, 팔진수 및 십육진수 간의 변환을 지원하는 무료 수치체계 변환기입니다. 음수와 소수 부분을 지원합니다.",
    keywords: ["진법 변환", "이진수", "십육진수", "수체계", "팔진수", "십진수 변환", "진법"],
    inputs: {
      sourceBase: {
        label: "출발 진법",
        help: "입력 숫자의 진법을 선택하세요.",
      },
      value: {
        label: "숫자",
        help: "변환할 숫자를 입력하세요. 음수와 소수 부분을 지원합니다(예: -10.5, 255, 1010, FF).",
      },
    },
    outputs: {
      decimal: {
        label: "십진법(진법 10)",
      },
      binary: {
        label: "이진법(진법 2)",
      },
      octal: {
        label: "팔진법(진법 8)",
      },
      hexadecimal: {
        label: "십육진법(진법 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "십진법(진법 10)",
        binary: "이진법(진법 2)",
        octal: "팔진법(진법 8)",
        hexadecimal: "십육진법(진법 16)",
      },
    },
    errors: {
      invalidInput: "선택한 진법에 대해 숫자 형식이 올바르지 않습니다.",
      outOfRange: "숫자가 범위를 벗어났습니다.",
    },
    faq: [
      {
        q: "수체계란 무엇입니까?",
        a: "수체계(또는 기수)는 위치 기수법에서 사용되는 고유한 숫자의 개수입니다. 십진법은 기수 10(0-9), 이진법은 기수 2(0-1), 팔진법은 기수 8(0-7), 십육진법은 기수 16(0-9, A-F)을 사용합니다.",
      },
      {
        q: "컴퓨팅에서 십육진법을 사용하는 이유는 무엇입니까?",
        a: "십육진법은 컴퓨팅에서 널리 사용됩니다. 이진법의 간단한 표현이기 때문입니다. 각 십육진수는 정확히 4개의 이진수를 나타내어 사람들이 이진 데이터를 더 쉽게 읽고 쓸 수 있습니다.",
      },
      {
        q: "이진 변환은 어떻게 작동합니까?",
        a: "십진수를 이진수로 변환하려면 2로 반복적으로 나누고 나머지를 수집하세요. 예를 들어: 10÷2 = 5 나머지 0, 5÷2 = 2 나머지 1, 2÷2 = 1 나머지 0, 1÷2 = 0 나머지 1, 결과는 이진법으로 1010입니다.",
      },
      {
        q: "음수를 변환할 수 있습니까?",
        a: "네! 이 변환기는 모든 진법에서 음수를 지원합니다. 음수 기호가 유지되므로 십진수의 -10은 이진법의 -1010으로 변환됩니다.",
      },
      {
        q: "분수에 대해서는 어떻습니까?",
        a: "분수는 반복 곱셈을 사용하여 변환할 수 있습니다. 예를 들어, 십진수 0.5 = 이진수 0.1입니다. 일부 분수는 반복 패턴(십진수 0.1이 이진법에서 반복되는 경우 등)을 만들며, 20자리로 제한됩니다.",
      },
    ],
  },

  hi: {
    title: "अंक प्रणाली परिवर्तक",
    short: "दशमलव, बाइनरी, ऑक्टल और हेक्साडेसिमल के बीच संख्याओं को परिवर्तित करें।",
    description:
      "दशमलव, बाइनरी, ऑक्टल और हेक्साडेसिमल के बीच रूपांतरण का समर्थन करने वाला मुफ्त संख्या प्रणाली परिवर्तक। नकारात्मक संख्याओं और भिन्नात्मक भागों को समर्थन करता है।",
    keywords: [
      "आधार परिवर्तक",
      "बाइनरी",
      "हेक्साडेसिमल",
      "संख्या प्रणाली",
      "ऑक्टल",
      "दशमलव रूपांतरण",
      "आधार",
    ],
    inputs: {
      sourceBase: {
        label: "स्रोत आधार",
        help: "इनपुट संख्या का आधार चुनें।",
      },
      value: {
        label: "संख्या",
        help: "परिवर्तित करने के लिए संख्या दर्ज करें। नकारात्मक संख्याओं और भिन्नात्मक भागों को समर्थन करता है (जैसे -10.5, 255, 1010, FF)।",
      },
    },
    outputs: {
      decimal: {
        label: "दशमलव (आधार 10)",
      },
      binary: {
        label: "बाइनरी (आधार 2)",
      },
      octal: {
        label: "ऑक्टल (आधार 8)",
      },
      hexadecimal: {
        label: "हेक्साडेसिमल (आधार 16)",
      },
    },
    options: {
      sourceBase: {
        decimal: "दशमलव (आधार 10)",
        binary: "बाइनरी (आधार 2)",
        octal: "ऑक्टल (आधार 8)",
        hexadecimal: "हेक्साडेसिमल (आधार 16)",
      },
    },
    errors: {
      invalidInput: "चयनित आधार के लिए अमान्य संख्या प्रारूप।",
      outOfRange: "संख्या सीमा से बाहर है।",
    },
    faq: [
      {
        q: "संख्या प्रणाली क्या है?",
        a: "एक संख्या प्रणाली (या आधार) स्थितीय संख्या प्रणाली में उपयोग किए जाने वाले अद्वितीय अंकों की संख्या है। दशमलव आधार 10 (0-9) का उपयोग करता है, बाइनरी आधार 2 (0-1) का उपयोग करता है, ऑक्टल आधार 8 (0-7) का उपयोग करता है और हेक्साडेसिमल आधार 16 (0-9, A-F) का उपयोग करता है।",
      },
      {
        q: "कंप्यूटिंग में हेक्साडेसिमल का उपयोग क्यों किया जाता है?",
        a: "हेक्साडेसिमल कंप्यूटिंग में व्यापक रूप से उपयोग किया जाता है क्योंकि यह बाइनरी का एक सघन प्रतिनिधित्व है। प्रत्येक हेक्साडेसिमल अंक बिल्कुल 4 बाइनरी अंकों का प्रतिनिधित्व करता है, जिससे मनुष्यों के लिए बाइनरी डेटा को पढ़ना और लिखना आसान हो जाता है।",
      },
      {
        q: "बाइनरी रूपांतरण कैसे काम करता है?",
        a: "दशमलव को बाइनरी में परिवर्तित करने के लिए, 2 से बार-बार विभाजित करें और शेष को एकत्र करें। उदाहरण के लिए: 10 ÷ 2 = 5 शेष 0, 5 ÷ 2 = 2 शेष 1, 2 ÷ 2 = 1 शेष 0, 1 ÷ 2 = 0 शेष 1, बाइनरी में 1010 परिणाम।",
      },
      {
        q: "क्या मैं नकारात्मक संख्याओं को परिवर्तित कर सकता हूँ?",
        a: "हाँ! यह परिवर्तक सभी आधारों में नकारात्मक संख्याओं का समर्थन करता है। ऋणात्मक चिन्ह संरक्षित रहता है, इसलिए दशमलव में -10 बाइनरी में -1010 में परिवर्तित होता है।",
      },
      {
        q: "भिन्नात्मक संख्याओं के बारे में क्या?",
        a: "भिन्नात्मक संख्याओं को बार-बार गुणन का उपयोग करके परिवर्तित किया जा सकता है। उदाहरण के लिए: 0.5 दशमलव = 0.1 बाइनरी। कुछ भिन्न दोहराए जाने वाले पैटर्न बनाते हैं (जैसे 0.1 दशमलव बाइनरी में दोहराया जा रहा है), जो 20 अंकों तक सीमित हैं।",
      },
    ],
  },
};

export default i18n;
