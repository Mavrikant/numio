import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Data Storage Converter",
    short: "Convert between data storage units with binary (1024) or decimal (1000) mode.",
    description:
      "Free data storage converter supporting binary (KiB, MiB, GiB) and decimal (KB, MB, GB) conversions between bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes.",
    keywords: [
      "data storage converter",
      "bytes converter",
      "MB to GB",
      "binary decimal conversion",
      "storage units",
      "disk space calculator",
      "data size converter",
    ],
    inputs: {
      value: {
        label: "Value",
        help: "The amount to convert.",
      },
      fromUnit: {
        label: "From unit",
        help: "Source unit of measurement.",
      },
      toUnit: {
        label: "To unit",
        help: "Target unit of measurement.",
      },
      mode: {
        label: "Conversion mode",
        help: "Binary uses base 1024 (standard for RAM and SSDs). Decimal uses base 1000 (standard for HDD manufacturers).",
      },
    },
    outputs: {
      result: {
        label: "Result",
        help: "Converted value in target unit.",
      },
      explanation: {
        label: "Mode",
        help: "Explains which conversion standard was used.",
      },
    },
    options: {
      fromUnit: {
        B: "Byte (B)",
        KB: "Kilobyte",
        MB: "Megabyte",
        GB: "Gigabyte",
        TB: "Terabyte",
        PB: "Petabyte",
      },
      toUnit: {
        B: "Byte (B)",
        KB: "Kilobyte",
        MB: "Megabyte",
        GB: "Gigabyte",
        TB: "Terabyte",
        PB: "Petabyte",
      },
      mode: {
        binary: "Binary (1024-based)",
        decimal: "Decimal (1000-based)",
      },
      byte: "Byte",
      kilobyte: "Kilobyte",
      megabyte: "Megabyte",
      gigabyte: "Gigabyte",
      terabyte: "Terabyte",
      petabyte: "Petabyte",
      binary: "Binary",
      decimal: "Decimal",
    },
    errors: {
      invalidValue: "Value must be non-negative.",
      sameUnit: "Source and target units must be different.",
    },
    faq: [
      {
        q: "What is the difference between binary and decimal?",
        a: "Binary (KiB, MiB) uses base 1024: 1 KiB = 1024 bytes. Decimal (KB, MB) uses base 1000: 1 KB = 1000 bytes. RAM and SSDs use binary; hard drive manufacturers traditionally use decimal.",
      },
      {
        q: "Why does my 1 TB hard drive show as 931 GB?",
        a: "Hard drives use decimal (1000-based) capacity labeling, while Windows often displays sizes in binary (1024-based). 1,000,000,000,000 bytes ÷ 1,073,741,824 bytes/GiB ≈ 931 GiB.",
      },
      {
        q: "Which mode should I use?",
        a: "Use binary for RAM, SSDs, and USB drives. Use decimal for comparing manufacturer specifications of hard drives and external storage.",
      },
      {
        q: "What are the exact conversion factors?",
        a: "Binary: 1 KB=1024 B, 1 MB=1024² B, 1 GB=1024³ B. Decimal: 1 KB=1000 B, 1 MB=1000² B, 1 GB=1000³ B.",
      },
    ],
  },

  tr: {
    title: "Veri Depolama Dönüştürücü",
    short: "İkili (1024) veya ondalık (1000) mod ile veri depolama birimleri arasında dönüşüm yapın.",
    description:
      "Bayt, kilobayt, megabayt, gigabayt, terabayt ve petabayt arasında ikili (KiB, MiB, GiB) ve ondalık (KB, MB, GB) dönüşümlerini destekleyen ücretsiz veri depolama dönüştürücü.",
    keywords: [
      "veri depolama dönüştürücü",
      "bayt dönüştürücü",
      "MB'dan GB'ye",
      "ikili ondalık dönüşümü",
      "depolama birimleri",
      "disk alanı hesaplayıcı",
      "veri boyutu dönüştürücü",
    ],
    inputs: {
      value: {
        label: "Değer",
        help: "Dönüştürülecek miktar.",
      },
      fromUnit: {
        label: "Kaynak birim",
        help: "Ölçümün kaynak birimi.",
      },
      toUnit: {
        label: "Hedef birim",
        help: "Ölçümün hedef birimi.",
      },
      mode: {
        label: "Dönüşüm modu",
        help: "İkili, 1024 tabanını (RAM ve SSD'ler için standart) kullanır. Ondalık, 1000 tabanını (HDD üreticileri için standart) kullanır.",
      },
    },
    outputs: {
      result: {
        label: "Sonuç",
        help: "Hedef birimde dönüştürülen değer.",
      },
      explanation: {
        label: "Mod",
        help: "Hangi dönüşüm standardının kullanıldığını açıklar.",
      },
    },
    options: {
      fromUnit: {
        B: "Bayt (B)",
        KB: "Kilobayt",
        MB: "Megabayt",
        GB: "Gigabayt",
        TB: "Terabayt",
        PB: "Petabayt",
      },
      toUnit: {
        B: "Bayt (B)",
        KB: "Kilobayt",
        MB: "Megabayt",
        GB: "Gigabayt",
        TB: "Terabayt",
        PB: "Petabayt",
      },
      mode: {
        binary: "İkili (1024 tabanı)",
        decimal: "Ondalık (1000 tabanı)",
      },
      byte: "Bayt",
      kilobyte: "Kilobayt",
      megabyte: "Megabayt",
      gigabyte: "Gigabayt",
      terabyte: "Terabayt",
      petabyte: "Petabayt",
      binary: "İkili",
      decimal: "Ondalık",
    },
    errors: {
      invalidValue: "Değer negatif olmayan bir sayı olmalıdır.",
      sameUnit: "Kaynak ve hedef birimler farklı olmalıdır.",
    },
    faq: [
      {
        q: "İkili ve ondalık arasında fark nedir?",
        a: "İkili (KiB, MiB) 1024 tabanını kullanır: 1 KiB = 1024 bayt. Ondalık (KB, MB) 1000 tabanını kullanır: 1 KB = 1000 bayt. RAM ve SSD'ler ikiliyi kullanır; sabit disk üreticileri geleneksel olarak ondalığı kullanır.",
      },
      {
        q: "1 TB sabit diskimin neden 931 GB olarak gösteriliyor?",
        a: "Sabit diskler ondalık (1000 tabanı) kapasite etiketlemesi kullanırken, Windows genellikle boyutları ikili (1024 tabanı) cinsinden gösterir. 1.000.000.000.000 bayt ÷ 1.073.741.824 bayt/GiB ≈ 931 GiB.",
      },
      {
        q: "Hangi modu kullanmalıyım?",
        a: "RAM, SSD'ler ve USB sürücüler için ikiliyi kullanın. Sabit disk ve harici depolama üretici spesifikasyonlarını karşılaştırırken ondalığı kullanın.",
      },
      {
        q: "Tam dönüşüm faktörleri nelerdir?",
        a: "İkili: 1 KB=1024 B, 1 MB=1024² B, 1 GB=1024³ B. Ondalık: 1 KB=1000 B, 1 MB=1000² B, 1 GB=1000³ B.",
      },
    ],
  },

  de: {
    title: "Datenspeicher-Konverter",
    short: "Konvertieren Sie Datenspeichereinheiten im binären (1024) oder dezimalen (1000) Modus.",
    description:
      "Kostenloser Datenspeicher-Konverter mit Unterstützung für binäre (KiB, MiB, GiB) und dezimale (KB, MB, GB) Konvertierungen zwischen Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes und Petabytes.",
    keywords: [
      "Datenspeicher-Konverter",
      "Byte-Konverter",
      "MB in GB",
      "binäre dezimale Konvertierung",
      "Speichereinheiten",
      "Festplattenrechner",
      "Dateigröße-Konverter",
    ],
    inputs: {
      value: {
        label: "Wert",
        help: "Die Menge, die konvertiert werden soll.",
      },
      fromUnit: {
        label: "Von Einheit",
        help: "Ausgangsmaßeinheit.",
      },
      toUnit: {
        label: "Zu Einheit",
        help: "Zielmaßeinheit.",
      },
      mode: {
        label: "Konvertierungsmodus",
        help: "Binär verwendet Basis 1024 (Standard für RAM und SSDs). Dezimal verwendet Basis 1000 (Standard für Festplattenhersteller).",
      },
    },
    outputs: {
      result: {
        label: "Ergebnis",
        help: "Konvertierter Wert in der Zieleinheit.",
      },
      explanation: {
        label: "Modus",
        help: "Erklärt, welcher Konvertierungsstandard verwendet wurde.",
      },
    },
    options: {
      fromUnit: {
        B: "Byte (B)",
        KB: "Kilobyte",
        MB: "Megabyte",
        GB: "Gigabyte",
        TB: "Terabyte",
        PB: "Petabyte",
      },
      toUnit: {
        B: "Byte (B)",
        KB: "Kilobyte",
        MB: "Megabyte",
        GB: "Gigabyte",
        TB: "Terabyte",
        PB: "Petabyte",
      },
      mode: {
        binary: "Binär (1024er Basis)",
        decimal: "Dezimal (1000er Basis)",
      },
      byte: "Byte",
      kilobyte: "Kilobyte",
      megabyte: "Megabyte",
      gigabyte: "Gigabyte",
      terabyte: "Terabyte",
      petabyte: "Petabyte",
      binary: "Binär",
      decimal: "Dezimal",
    },
    errors: {
      invalidValue: "Der Wert muss eine nicht-negative Zahl sein.",
      sameUnit: "Quell- und Zieleinheiten müssen unterschiedlich sein.",
    },
    faq: [
      {
        q: "Was ist der Unterschied zwischen binär und dezimal?",
        a: "Binär (KiB, MiB) verwendet Basis 1024: 1 KiB = 1024 Bytes. Dezimal (KB, MB) verwendet Basis 1000: 1 KB = 1000 Bytes. RAM und SSDs verwenden Binär; Festplattenhersteller verwenden traditionell Dezimal.",
      },
      {
        q: "Warum wird meine 1 TB Festplatte als 931 GB angezeigt?",
        a: "Festplatten verwenden dezimale Kapazitätskennzeichnung (1000er Basis), während Windows Größen oft in Binär anzeigt. 1.000.000.000.000 Bytes ÷ 1.073.741.824 Bytes/GiB ≈ 931 GiB.",
      },
      {
        q: "Welchen Modus sollte ich verwenden?",
        a: "Verwenden Sie Binär für RAM, SSDs und USB-Laufwerke. Verwenden Sie Dezimal beim Vergleich von Spezifikationen von Festplatten und externen Speichern.",
      },
    ],
  },

  fr: {
    title: "Convertisseur de Stockage de Données",
    short: "Convertissez les unités de stockage de données en mode binaire (1024) ou décimal (1000).",
    description:
      "Convertisseur de stockage de données gratuit prenant en charge les conversions binaires (KiB, MiB, GiB) et décimales (KB, MB, GB) entre octets, kilooctets, mégaoctets, gigaoctets, téraoctets et pétaoctets.",
    keywords: [
      "convertisseur stockage données",
      "convertisseur octets",
      "MB en GB",
      "conversion binaire décimale",
      "unités stockage",
      "calculateur disque dur",
      "convertisseur taille fichier",
    ],
    inputs: {
      value: {
        label: "Valeur",
        help: "La quantité à convertir.",
      },
      fromUnit: {
        label: "Unité source",
        help: "Unité de mesure source.",
      },
      toUnit: {
        label: "Unité cible",
        help: "Unité de mesure cible.",
      },
      mode: {
        label: "Mode de conversion",
        help: "Binaire utilise la base 1024 (standard pour RAM et SSD). Décimal utilise la base 1000 (standard pour fabricants de disques durs).",
      },
    },
    outputs: {
      result: {
        label: "Résultat",
        help: "Valeur convertie dans l'unité cible.",
      },
      explanation: {
        label: "Mode",
        help: "Explique quel standard de conversion a été utilisé.",
      },
    },
    options: {
      fromUnit: {
        B: "Octet (B)",
        KB: "Kilooctet",
        MB: "Mégaoctet",
        GB: "Gigaoctet",
        TB: "Téraoctet",
        PB: "Pétaoctet",
      },
      toUnit: {
        B: "Octet (B)",
        KB: "Kilooctet",
        MB: "Mégaoctet",
        GB: "Gigaoctet",
        TB: "Téraoctet",
        PB: "Pétaoctet",
      },
      mode: {
        binary: "Binaire (base 1024)",
        decimal: "Décimal (base 1000)",
      },
      byte: "Octet",
      kilobyte: "Kilooctet",
      megabyte: "Mégaoctet",
      gigabyte: "Gigaoctet",
      terabyte: "Téraoctet",
      petabyte: "Pétaoctet",
      binary: "Binaire",
      decimal: "Décimal",
    },
    errors: {
      invalidValue: "La valeur doit être un nombre non négatif.",
      sameUnit: "Les unités source et cible doivent être différentes.",
    },
    faq: [
      {
        q: "Quelle est la différence entre binaire et décimal?",
        a: "Binaire (KiB, MiB) utilise la base 1024: 1 KiB = 1024 octets. Décimal (KB, MB) utilise la base 1000: 1 KB = 1000 octets. La RAM et les SSD utilisent binaire; les fabricants de disques durs utilisent traditionnellement décimal.",
      },
      {
        q: "Pourquoi mon disque dur 1 TB s'affiche-t-il comme 931 GB?",
        a: "Les disques durs utilisent l'étiquetage décimal de la capacité, tandis que Windows affiche souvent les tailles en binaire. 1 000 000 000 000 octets ÷ 1 073 741 824 octets/GiB ≈ 931 GiB.",
      },
    ],
  },

  es: {
    title: "Convertidor de Almacenamiento de Datos",
    short: "Convierta unidades de almacenamiento de datos en modo binario (1024) o decimal (1000).",
    description:
      "Convertidor de almacenamiento de datos gratuito que admite conversiones binarias (KiB, MiB, GiB) y decimales (KB, MB, GB) entre bytes, kilobytes, megabytes, gigabytes, terabytes y petabytes.",
    keywords: [
      "convertidor almacenamiento datos",
      "convertidor bytes",
      "MB a GB",
      "conversión binaria decimal",
      "unidades almacenamiento",
      "calculadora disco duro",
      "convertidor tamaño archivo",
    ],
    inputs: {
      value: {
        label: "Valor",
        help: "La cantidad a convertir.",
      },
      fromUnit: {
        label: "Unidad de origen",
        help: "Unidad de medida de origen.",
      },
      toUnit: {
        label: "Unidad de destino",
        help: "Unidad de medida de destino.",
      },
      mode: {
        label: "Modo de conversión",
        help: "Binario utiliza base 1024 (estándar para RAM y SSD). Decimal utiliza base 1000 (estándar para fabricantes de discos duro).",
      },
    },
    outputs: {
      result: {
        label: "Resultado",
        help: "Valor convertido en la unidad de destino.",
      },
      explanation: {
        label: "Modo",
        help: "Explica qué estándar de conversión se utilizó.",
      },
    },
    options: {
      fromUnit: {
        B: "Byte (B)",
        KB: "Kilobyte",
        MB: "Megabyte",
        GB: "Gigabyte",
        TB: "Terabyte",
        PB: "Petabyte",
      },
      toUnit: {
        B: "Byte (B)",
        KB: "Kilobyte",
        MB: "Megabyte",
        GB: "Gigabyte",
        TB: "Terabyte",
        PB: "Petabyte",
      },
      mode: {
        binary: "Binario (base 1024)",
        decimal: "Decimal (base 1000)",
      },
      byte: "Byte",
      kilobyte: "Kilobyte",
      megabyte: "Megabyte",
      gigabyte: "Gigabyte",
      terabyte: "Terabyte",
      petabyte: "Petabyte",
      binary: "Binario",
      decimal: "Decimal",
    },
    errors: {
      invalidValue: "El valor debe ser un número no negativo.",
      sameUnit: "Las unidades de origen y destino deben ser diferentes.",
    },
    faq: [
      {
        q: "¿Cuál es la diferencia entre binario y decimal?",
        a: "Binario (KiB, MiB) utiliza base 1024: 1 KiB = 1024 bytes. Decimal (KB, MB) utiliza base 1000: 1 KB = 1000 bytes. RAM y SSD utilizan binario; los fabricantes de discos duros tradicionalmente usan decimal.",
      },
    ],
  },

  it: {
    title: "Convertitore di Archiviazione Dati",
    short: "Converti unità di archiviazione dati in modalità binaria (1024) o decimale (1000).",
    description:
      "Convertitore di archiviazione dati gratuito che supporta conversioni binarie (KiB, MiB, GiB) e decimali (KB, MB, GB) tra byte, kilobyte, megabyte, gigabyte, terabyte e petabyte.",
    keywords: [
      "convertitore archiviazione dati",
      "convertitore byte",
      "da MB a GB",
      "conversione binaria decimale",
      "unità archiviazione",
      "calcolatore disco rigido",
      "convertitore dimensione file",
    ],
    inputs: {
      value: {
        label: "Valore",
        help: "La quantità da convertire.",
      },
      fromUnit: {
        label: "Unità di origine",
        help: "Unità di misura di origine.",
      },
      toUnit: {
        label: "Unità di destinazione",
        help: "Unità di misura di destinazione.",
      },
      mode: {
        label: "Modalità di conversione",
        help: "Binaria utilizza base 1024 (standard per RAM e SSD). Decimale utilizza base 1000 (standard per i produttori di dischi rigidi).",
      },
    },
    outputs: {
      result: {
        label: "Risultato",
        help: "Valore convertito nell'unità di destinazione.",
      },
      explanation: {
        label: "Modalità",
        help: "Spiega quale standard di conversione è stato utilizzato.",
      },
    },
    options: {
      fromUnit: {
        B: "Byte (B)",
        KB: "Kilobyte",
        MB: "Megabyte",
        GB: "Gigabyte",
        TB: "Terabyte",
        PB: "Petabyte",
      },
      toUnit: {
        B: "Byte (B)",
        KB: "Kilobyte",
        MB: "Megabyte",
        GB: "Gigabyte",
        TB: "Terabyte",
        PB: "Petabyte",
      },
      mode: {
        binary: "Binario (base 1024)",
        decimal: "Decimale (base 1000)",
      },
      byte: "Byte",
      kilobyte: "Kilobyte",
      megabyte: "Megabyte",
      gigabyte: "Gigabyte",
      terabyte: "Terabyte",
      petabyte: "Petabyte",
      binary: "Binario",
      decimal: "Decimale",
    },
    errors: {
      invalidValue: "Il valore deve essere un numero non negativo.",
      sameUnit: "Le unità di origine e di destinazione devono essere diverse.",
    },
    faq: [
      {
        q: "Qual è la differenza tra binario e decimale?",
        a: "Binario (KiB, MiB) utilizza base 1024: 1 KiB = 1024 byte. Decimale (KB, MB) utilizza base 1000: 1 KB = 1000 byte. RAM e SSD utilizzano binario; i produttori di dischi rigidi tradizionalmente usano decimale.",
      },
    ],
  },

  ar: {
    title: "محول تخزين البيانات",
    short: "تحويل وحدات تخزين البيانات بوضع ثنائي (1024) أو عشري (1000).",
    description:
      "محول تخزين بيانات مجاني يدعم التحويلات الثنائية (KiB و MiB و GiB) والعشرية (KB و MB و GB) بين البايتات والكيلوبايتات والميجابايتات والجيجابايتات والتيرابايتات والبيتابايتات.",
    keywords: [
      "محول تخزين البيانات",
      "محول البايتات",
      "MB إلى GB",
      "تحويل ثنائي عشري",
      "وحدات التخزين",
      "حاسبة القرص الصلب",
      "محول حجم الملف",
    ],
    inputs: {
      value: {
        label: "القيمة",
        help: "الكمية المراد تحويلها.",
      },
      fromUnit: {
        label: "من وحدة",
        help: "وحدة القياس المصدر.",
      },
      toUnit: {
        label: "إلى وحدة",
        help: "وحدة القياس الهدف.",
      },
      mode: {
        label: "وضع التحويل",
        help: "الثنائي يستخدم الأساس 1024 (معيار ذاكرة الوصول العشوائي والأقراص الصلبة). العشري يستخدم الأساس 1000 (معيار مصنعي محركات الأقراص الثابتة).",
      },
    },
    outputs: {
      result: {
        label: "النتيجة",
        help: "القيمة المحولة بالوحدة الهدف.",
      },
      explanation: {
        label: "الوضع",
        help: "يشرح معيار التحويل المستخدم.",
      },
    },
    options: {
      fromUnit: {
        B: "البايت (B)",
        KB: "الكيلوبايت",
        MB: "الميجابايت",
        GB: "الجيجابايت",
        TB: "التيرابايت",
        PB: "البيتابايت",
      },
      toUnit: {
        B: "البايت (B)",
        KB: "الكيلوبايت",
        MB: "الميجابايت",
        GB: "الجيجابايت",
        TB: "التيرابايت",
        PB: "البيتابايت",
      },
      mode: {
        binary: "ثنائي (الأساس 1024)",
        decimal: "عشري (الأساس 1000)",
      },
      byte: "البايت",
      kilobyte: "الكيلوبايت",
      megabyte: "الميجابايت",
      gigabyte: "الجيجابايت",
      terabyte: "التيرابايت",
      petabyte: "البيتابايت",
      binary: "ثنائي",
      decimal: "عشري",
    },
    errors: {
      invalidValue: "يجب أن تكون القيمة رقمًا غير سالب.",
      sameUnit: "يجب أن تكون وحدات المصدر والهدف مختلفة.",
    },
    faq: [
      {
        q: "ما الفرق بين النظام الثنائي والعشري؟",
        a: "النظام الثنائي (KiB و MiB) يستخدم الأساس 1024: 1 KiB = 1024 بايت. النظام العشري (KB و MB) يستخدم الأساس 1000: 1 KB = 1000 بايت. ذاكرة الوصول العشوائية والأقراص الصلبة تستخدم ثنائي؛ مصنعو محركات الأقراص يستخدمون تقليديًا عشري.",
      },
    ],
  },

  ru: {
    title: "Конвертер хранилища данных",
    short: "Конвертируйте единицы хранения данных в двоичном (1024) или десятичном (1000) режиме.",
    description:
      "Бесплатный конвертер хранилища данных, поддерживающий двоичные (КиБ, МиБ, ГиБ) и десятичные (КБ, МБ, ГБ) преобразования между байтами, килобайтами, мегабайтами, гигабайтами, терабайтами и петабайтами.",
    keywords: [
      "конвертер хранилища данных",
      "конвертер байтов",
      "МБ в ГБ",
      "двоично-десятичное преобразование",
      "единицы хранения",
      "калькулятор жесткого диска",
      "конвертер размера файла",
    ],
    inputs: {
      value: {
        label: "Значение",
        help: "Количество для преобразования.",
      },
      fromUnit: {
        label: "Из единицы",
        help: "Исходная единица измерения.",
      },
      toUnit: {
        label: "В единицу",
        help: "Целевая единица измерения.",
      },
      mode: {
        label: "Режим преобразования",
        help: "Двоичный использует основание 1024 (стандарт для ОЗУ и SSD). Десятичный использует основание 1000 (стандарт производителей жестких дисков).",
      },
    },
    outputs: {
      result: {
        label: "Результат",
        help: "Преобразованное значение в целевой единице.",
      },
      explanation: {
        label: "Режим",
        help: "Объясняет использованный стандарт преобразования.",
      },
    },
    options: {
      fromUnit: {
        B: "Байт (B)",
        KB: "Килобайт",
        MB: "Мегабайт",
        GB: "Гигабайт",
        TB: "Терабайт",
        PB: "Петабайт",
      },
      toUnit: {
        B: "Байт (B)",
        KB: "Килобайт",
        MB: "Мегабайт",
        GB: "Гигабайт",
        TB: "Терабайт",
        PB: "Петабайт",
      },
      mode: {
        binary: "Двоичный (основание 1024)",
        decimal: "Десятичный (основание 1000)",
      },
      byte: "Байт",
      kilobyte: "Килобайт",
      megabyte: "Мегабайт",
      gigabyte: "Гигабайт",
      terabyte: "Терабайт",
      petabyte: "Петабайт",
      binary: "Двоичный",
      decimal: "Десятичный",
    },
    errors: {
      invalidValue: "Значение должно быть неотрицательным числом.",
      sameUnit: "Исходная и целевая единицы должны быть разными.",
    },
    faq: [
      {
        q: "В чем разница между двоичной и десятичной системой?",
        a: "Двоичная (КиБ, МиБ) использует основание 1024: 1 КиБ = 1024 байта. Десятичная (КБ, МБ) использует основание 1000: 1 КБ = 1000 байт. ОЗУ и SSD используют двоичную; производители жестких дисков традиционно используют десятичную.",
      },
    ],
  },

  zh: {
    title: "数据存储转换器",
    short: "使用二进制（1024）或十进制（1000）模式转换数据存储单位。",
    description:
      "免费数据存储转换器，支持字节、千字节、兆字节、吉字节、太字节和拍字节之间的二进制（KiB、MiB、GiB）和十进制（KB、MB、GB）转换。",
    keywords: [
      "数据存储转换器",
      "字节转换器",
      "MB到GB",
      "二进制十进制转换",
      "存储单位",
      "硬盘计算器",
      "文件大小转换器",
    ],
    inputs: {
      value: {
        label: "数值",
        help: "要转换的数量。",
      },
      fromUnit: {
        label: "源单位",
        help: "测量的源单位。",
      },
      toUnit: {
        label: "目标单位",
        help: "测量的目标单位。",
      },
      mode: {
        label: "转换模式",
        help: "二进制使用基数1024（RAM和SSD的标准）。十进制使用基数1000（硬盘驱动器制造商的标准）。",
      },
    },
    outputs: {
      result: {
        label: "结果",
        help: "转换为目标单位的值。",
      },
      explanation: {
        label: "模式",
        help: "说明使用了哪种转换标准。",
      },
    },
    options: {
      fromUnit: {
        B: "字节 (B)",
        KB: "千字节",
        MB: "兆字节",
        GB: "吉字节",
        TB: "太字节",
        PB: "拍字节",
      },
      toUnit: {
        B: "字节 (B)",
        KB: "千字节",
        MB: "兆字节",
        GB: "吉字节",
        TB: "太字节",
        PB: "拍字节",
      },
      mode: {
        binary: "二进制（基数1024）",
        decimal: "十进制（基数1000）",
      },
      byte: "字节",
      kilobyte: "千字节",
      megabyte: "兆字节",
      gigabyte: "吉字节",
      terabyte: "太字节",
      petabyte: "拍字节",
      binary: "二进制",
      decimal: "十进制",
    },
    errors: {
      invalidValue: "值必须是非负数。",
      sameUnit: "源单位和目标单位必须不同。",
    },
    faq: [
      {
        q: "二进制和十进制有什么区别？",
        a: "二进制（KiB、MiB）使用基数1024：1 KiB = 1024字节。十进制（KB、MB）使用基数1000：1 KB = 1000字节。RAM和SSD使用二进制；硬盘驱动器制造商通常使用十进制。",
      },
    ],
  },

  ja: {
    title: "ストレージ容量変換ツール",
    short: "データストレージ単位をバイナリ（1024）またはデシマル（1000）モードで変換します。",
    description:
      "バイト、キロバイト、メガバイト、ギガバイト、テラバイト、ペタバイト間のバイナリ（KiB、MiB、GiB）およびデシマル（KB、MB、GB）変換をサポートする無料のストレージ容量変換ツール。",
    keywords: [
      "ストレージ容量変換",
      "バイト変換",
      "MBをGBに",
      "バイナリデシマル変換",
      "ストレージ単位",
      "HDD容量計算",
      "ファイルサイズ変換",
    ],
    inputs: {
      value: {
        label: "値",
        help: "変換する数量。",
      },
      fromUnit: {
        label: "変換元単位",
        help: "計測の変換元単位。",
      },
      toUnit: {
        label: "変換先単位",
        help: "計測の変換先単位。",
      },
      mode: {
        label: "変換モード",
        help: "バイナリは1024進法（RAM、SSDの標準）を使用します。デシマルは1000進法（HDD製造業者の標準）を使用します。",
      },
    },
    outputs: {
      result: {
        label: "結果",
        help: "変換先単位で表した値。",
      },
      explanation: {
        label: "モード",
        help: "使用した変換基準を説明します。",
      },
    },
    options: {
      fromUnit: {
        B: "バイト (B)",
        KB: "キロバイト",
        MB: "メガバイト",
        GB: "ギガバイト",
        TB: "テラバイト",
        PB: "ペタバイト",
      },
      toUnit: {
        B: "バイト (B)",
        KB: "キロバイト",
        MB: "メガバイト",
        GB: "ギガバイト",
        TB: "テラバイト",
        PB: "ペタバイト",
      },
      mode: {
        binary: "バイナリ（1024進法）",
        decimal: "デシマル（1000進法）",
      },
      byte: "バイト",
      kilobyte: "キロバイト",
      megabyte: "メガバイト",
      gigabyte: "ギガバイト",
      terabyte: "テラバイト",
      petabyte: "ペタバイト",
      binary: "バイナリ",
      decimal: "デシマル",
    },
    errors: {
      invalidValue: "値は負でない数である必要があります。",
      sameUnit: "変換元単位と変換先単位は異なる必要があります。",
    },
    faq: [
      {
        q: "バイナリとデシマルの違いは何ですか？",
        a: "バイナリ（KiB、MiB）は1024進法を使用します：1 KiB = 1024バイト。デシマル（KB、MB）は1000進法を使用します：1 KB = 1000バイト。RAMとSSDはバイナリを使用します；HDD製造業者は従来、デシマルを使用しています。",
      },
    ],
  },

  ko: {
    title: "데이터 저장 변환기",
    short: "이진 (1024) 또는 십진 (1000) 모드로 데이터 저장 단위를 변환합니다.",
    description:
      "바이트, 킬로바이트, 메가바이트, 기가바이트, 테라바이트 및 페타바이트 간의 이진 (KiB, MiB, GiB) 및 십진 (KB, MB, GB) 변환을 지원하는 무료 데이터 저장 변환기입니다.",
    keywords: [
      "데이터 저장 변환기",
      "바이트 변환기",
      "MB를 GB로",
      "이진 십진 변환",
      "저장 단위",
      "하드디스크 계산기",
      "파일 크기 변환기",
    ],
    inputs: {
      value: {
        label: "값",
        help: "변환할 수량입니다.",
      },
      fromUnit: {
        label: "원본 단위",
        help: "측정의 원본 단위입니다.",
      },
      toUnit: {
        label: "대상 단위",
        help: "측정의 대상 단위입니다.",
      },
      mode: {
        label: "변환 모드",
        help: "이진은 기수 1024를 사용합니다 (RAM 및 SSD 표준). 십진은 기수 1000을 사용합니다 (하드디스크 제조사 표준).",
      },
    },
    outputs: {
      result: {
        label: "결과",
        help: "대상 단위로 변환된 값입니다.",
      },
      explanation: {
        label: "모드",
        help: "어떤 변환 표준을 사용했는지 설명합니다.",
      },
    },
    options: {
      fromUnit: {
        B: "바이트 (B)",
        KB: "킬로바이트",
        MB: "메가바이트",
        GB: "기가바이트",
        TB: "테라바이트",
        PB: "페타바이트",
      },
      toUnit: {
        B: "바이트 (B)",
        KB: "킬로바이트",
        MB: "메가바이트",
        GB: "기가바이트",
        TB: "테라바이트",
        PB: "페타바이트",
      },
      mode: {
        binary: "이진 (기수 1024)",
        decimal: "십진 (기수 1000)",
      },
      byte: "바이트",
      kilobyte: "킬로바이트",
      megabyte: "메가바이트",
      gigabyte: "기가바이트",
      terabyte: "테라바이트",
      petabyte: "페타바이트",
      binary: "이진",
      decimal: "십진",
    },
    errors: {
      invalidValue: "값은 음이 아닌 수여야 합니다.",
      sameUnit: "원본 단위와 대상 단위는 달라야 합니다.",
    },
    faq: [
      {
        q: "이진과 십진의 차이는 무엇입니까?",
        a: "이진 (KiB, MiB)은 기수 1024를 사용합니다: 1 KiB = 1024바이트. 십진 (KB, MB)은 기수 1000을 사용합니다: 1 KB = 1000바이트. RAM과 SSD는 이진을 사용합니다; 하드디스크 제조사는 전통적으로 십진을 사용합니다.",
      },
    ],
  },

  hi: {
    title: "डेटा स्टोरेज कनवर्टर",
    short: "बाइनरी (1024) या दशमलव (1000) मोड में डेटा स्टोरेज इकाइयों को कनवर्ट करें।",
    description:
      "बाइट्स, किलोबाइट्स, मेगाबाइट्स, गीगाबाइट्स, टेराबाइट्स और पेटाबाइट्स के बीच बाइनरी (KiB, MiB, GiB) और दशमलव (KB, MB, GB) रूपांतरण का समर्थन करने वाला निःशुल्क डेटा स्टोरेज कनवर्टर।",
    keywords: [
      "डेटा स्टोरेज कनवर्टर",
      "बाइट कनवर्टर",
      "MB से GB",
      "बाइनरी दशमलव रूपांतरण",
      "स्टोरेज इकाइयां",
      "हार्ड ड्राइव कैलकुलेटर",
      "फाइल आकार कनवर्टर",
    ],
    inputs: {
      value: {
        label: "मूल्य",
        help: "रूपांतरित की जाने वाली मात्रा।",
      },
      fromUnit: {
        label: "स्रोत इकाई",
        help: "माप की स्रोत इकाई।",
      },
      toUnit: {
        label: "लक्ष्य इकाई",
        help: "माप की लक्ष्य इकाई।",
      },
      mode: {
        label: "रूपांतरण मोड",
        help: "बाइनरी आधार 1024 का उपयोग करता है (RAM और SSD के लिए मानक)। दशमलव आधार 1000 का उपयोग करता है (हार्ड ड्राइव निर्माताओं के लिए मानक)।",
      },
    },
    outputs: {
      result: {
        label: "परिणाम",
        help: "लक्ष्य इकाई में रूपांतरित मूल्य।",
      },
      explanation: {
        label: "मोड",
        help: "बताता है कि कौन सा रूपांतरण मानक उपयोग किया गया था।",
      },
    },
    options: {
      fromUnit: {
        B: "बाइट (B)",
        KB: "किलोबाइट",
        MB: "मेगाबाइट",
        GB: "गीगाबाइट",
        TB: "टेराबाइट",
        PB: "पेटाबाइट",
      },
      toUnit: {
        B: "बाइट (B)",
        KB: "किलोबाइट",
        MB: "मेगाबाइट",
        GB: "गीगाबाइट",
        TB: "टेराबाइट",
        PB: "पेटाबाइट",
      },
      mode: {
        binary: "बाइनरी (आधार 1024)",
        decimal: "दशमलव (आधार 1000)",
      },
      byte: "बाइट",
      kilobyte: "किलोबाइट",
      megabyte: "मेगाबाइट",
      gigabyte: "गीगाबाइट",
      terabyte: "टेराबाइट",
      petabyte: "पेटाबाइट",
      binary: "बाइनरी",
      decimal: "दशमलव",
    },
    errors: {
      invalidValue: "मूल्य एक गैर-नकारात्मक संख्या होनी चाहिए।",
      sameUnit: "स्रोत और लक्ष्य इकाइयां अलग होनी चाहिए।",
    },
    faq: [
      {
        q: "बाइनरी और दशमलव में क्या अंतर है?",
        a: "बाइनरी (KiB, MiB) आधार 1024 का उपयोग करता है: 1 KiB = 1024 बाइट्स। दशमलव (KB, MB) आधार 1000 का उपयोग करता है: 1 KB = 1000 बाइट्स। RAM और SSD बाइनरी का उपयोग करते हैं; हार्ड ड्राइव निर्माता परंपरागत रूप से दशमलव का उपयोग करते हैं।",
      },
    ],
  },
};

export default i18n;
