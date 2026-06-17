import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Area Converter",
    short: "Convert between square meters, hectares, acres, square feet and more.",
    description:
      "Free area unit converter. Convert between m², cm², mm², km², hectares, acres, ft², in², yd² and mi² with NIST-grade precision.",
    keywords: [
      "area converter",
      "square meters to square feet",
      "hectares to acres",
      "m2 to ft2",
      "acre converter",
      "land area",
    ],
    inputs: {
      value: { label: "Value", help: "The area value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: {
      result: { label: "Result", help: "The converted area value." },
    },
    options: {
      m2: "Square meter (m²)",
      cm2: "Square centimeter (cm²)",
      mm2: "Square millimeter (mm²)",
      km2: "Square kilometer (km²)",
      ha: "Hectare (ha)",
      acre: "Acre",
      ft2: "Square foot (ft²)",
      in2: "Square inch (in²)",
      yd2: "Square yard (yd²)",
      mi2: "Square mile (mi²)",
    },
    errors: { invalidArea: "Area must be a positive number." },
    faq: [
      {
        question: "How many square feet are in a square meter?",
        answer: "1 square meter equals approximately 10.7639 square feet (1 m² = 10.7639 ft²).",
      },
      {
        question: "How many acres are in a hectare?",
        answer: "1 hectare equals approximately 2.4711 acres. Conversely, 1 acre ≈ 0.4047 hectares.",
      },
      {
        question: "What is a hectare used for?",
        answer: "The hectare (10,000 m²) is the standard metric unit for land and agricultural areas in most countries.",
      },
      {
        question: "How big is an acre?",
        answer: "1 acre is defined as exactly 4,046.8564224 square meters (43,560 ft²), originally the area one team of oxen could plough in a day.",
      },
    ],
  },
  nl: {
    title: "Area Converteerer",
    short: "Converteer between square meters, hectares, acres, square feet and more.",
    description:
      "Gratis area unit converteerer. Converteer between m², cm², mm², km², hectares, acres, ft², in², yd² and mi² with NIST-grade precision.",
    keywords: [
      "area converteerer",
      "square meters to square feet",
      "hectares to acres",
      "m2 to ft2",
      "acre converteerer",
      "land area",
    ],
    inputs: {
      value: { label: "Waarde", help: "The area value to converteer." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: {
      result: { label: "Resultaat", help: "The converteered area value." },
    },
    options: {
      m2: "Square meter (m²)",
      cm2: "Square centimeter (cm²)",
      mm2: "Square millimeter (mm²)",
      km2: "Square kilometer (km²)",
      ha: "Hectare (ha)",
      acre: "Acre",
      ft2: "Square foot (ft²)",
      in2: "Square inch (in²)",
      yd2: "Square yard (yd²)",
      mi2: "Square mile (mi²)",
    },
    errors: { invalidArea: "Area must be a positive nummer." },
    faq: [
      {
        question: "How many square feet are in a square meter?",
        answer: "1 square meter equals approximately 10.7639 square feet (1 m² = 10.7639 ft²).",
      },
      {
        question: "How many acres are in a hectare?",
        answer: "1 hectare equals approximately 2.4711 acres. Conversely, 1 acre ≈ 0.4047 hectares.",
      },
      {
        question: "What is a hectare used for?",
        answer: "The hectare (10,000 m²) is the standard metric unit for land and agricultural areas in most countries.",
      },
      {
        question: "How big is an acre?",
        answer: "1 acre is defined as exactly 4,046.8564224 square meters (43,560 ft²), originally the area one team of oxen could plough in a day.",
      },
    ],
  },

  pl: {
    title: "Area Konwerter",
    short: "Konwertuj between square meters, hectares, acres, square feet and more.",
    description:
      "Darmowy area unit konwerter. Konwertuj between m², cm², mm², km², hectares, acres, ft², in², yd² and mi² with NIST-grade precision.",
    keywords: [
      "area konwerter",
      "square meters to square feet",
      "hectares to acres",
      "m2 to ft2",
      "acre konwerter",
      "land area",
    ],
    inputs: {
      value: { label: "Wartość", help: "The area value to konwertuj." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: {
      result: { label: "Wynik", help: "The konwertujed area value." },
    },
    options: {
      m2: "Square meter (m²)",
      cm2: "Square centimeter (cm²)",
      mm2: "Square millimeter (mm²)",
      km2: "Square kilometer (km²)",
      ha: "Hectare (ha)",
      acre: "Acre",
      ft2: "Square foot (ft²)",
      in2: "Square inch (in²)",
      yd2: "Square yard (yd²)",
      mi2: "Square mile (mi²)",
    },
    errors: { invalidArea: "Area must be a positive liczba." },
    faq: [
      {
        question: "How many square feet are in a square meter?",
        answer: "1 square meter equals approximately 10.7639 square feet (1 m² = 10.7639 ft²).",
      },
      {
        question: "How many acres are in a hectare?",
        answer: "1 hectare equals approximately 2.4711 acres. Conversely, 1 acre ≈ 0.4047 hectares.",
      },
      {
        question: "What is a hectare used for?",
        answer: "The hectare (10,000 m²) is the standard metric unit for land and agricultural areas in most countries.",
      },
      {
        question: "How big is an acre?",
        answer: "1 acre is defined as exactly 4,046.8564224 square meters (43,560 ft²), originally the area one team of oxen could plough in a day.",
      },
    ],
  },
  pt: {
    title: "Conversor de Área",
    short: "Converta entre m², ft², acres, hectares e outras unidades de área.",
    description:
      "Conversor gratuito de área. Converta entre metros quadrados, pés quadrados, acres, hectares e outras unidades.",
    keywords: ["conversor área", "m² ft²", "acres hectares", "metros quadrados", "unidades área"],
    inputs: {
      value: { label: "Value", help: "The area value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: {
      result: { label: "Result", help: "The converted area value." },
    },
    options: {
      m2: "Square meter (m²)",
      cm2: "Square centimeter (cm²)",
      mm2: "Square millimeter (mm²)",
      km2: "Square kilometer (km²)",
      ha: "Hectare (ha)",
      acre: "Acre",
      ft2: "Square foot (ft²)",
      in2: "Square inch (in²)",
      yd2: "Square yard (yd²)",
      mi2: "Square mile (mi²)",
    },
    errors: { invalidArea: "Area must be a positive number." },
    faq: [
      {
        question: "How many square feet are in a square meter?",
        answer: "1 square meter equals approximately 10.7639 square feet (1 m² = 10.7639 ft²).",
      },
      {
        question: "How many acres are in a hectare?",
        answer: "1 hectare equals approximately 2.4711 acres. Conversely, 1 acre ≈ 0.4047 hectares.",
      },
      {
        question: "What is a hectare used for?",
        answer: "The hectare (10,000 m²) is the standard metric unit for land and agricultural areas in most countries.",
      },
      {
        question: "How big is an acre?",
        answer: "1 acre is defined as exactly 4,046.8564224 square meters (43,560 ft²), originally the area one team of oxen could plough in a day.",
      },
    ],
  },
  id: {
    title: "Konverter Luas",
    short: "Konversi antara m², ft², acre, hektar, dan satuan luas lainnya.",
    description:
      "Konverter luas gratis. Konversi antara meter persegi, kaki persegi, acre, hektar, dan satuan lainnya.",
    keywords: ["konverter luas", "m² ft²", "acre hektar", "meter persegi", "satuan luas"],
    inputs: {
      value: { label: "Value", help: "The area value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: {
      result: { label: "Result", help: "The converted area value." },
    },
    options: {
      m2: "Square meter (m²)",
      cm2: "Square centimeter (cm²)",
      mm2: "Square millimeter (mm²)",
      km2: "Square kilometer (km²)",
      ha: "Hectare (ha)",
      acre: "Acre",
      ft2: "Square foot (ft²)",
      in2: "Square inch (in²)",
      yd2: "Square yard (yd²)",
      mi2: "Square mile (mi²)",
    },
    errors: { invalidArea: "Area must be a positive number." },
    faq: [
      {
        question: "How many square feet are in a square meter?",
        answer: "1 square meter equals approximately 10.7639 square feet (1 m² = 10.7639 ft²).",
      },
      {
        question: "How many acres are in a hectare?",
        answer: "1 hectare equals approximately 2.4711 acres. Conversely, 1 acre ≈ 0.4047 hectares.",
      },
      {
        question: "What is a hectare used for?",
        answer: "The hectare (10,000 m²) is the standard metric unit for land and agricultural areas in most countries.",
      },
      {
        question: "How big is an acre?",
        answer: "1 acre is defined as exactly 4,046.8564224 square meters (43,560 ft²), originally the area one team of oxen could plough in a day.",
      },
    ],
  },

  tr: {
    title: "Alan Dönüştürücü",
    short: "Metrekare, hektar, dönüm, fit kare ve daha fazlası arasında dönüşüm yapın.",
    description:
      "Ücretsiz alan birimi dönüştürücü. m², cm², mm², km², hektar, akre, ft², in², yd² ve mi² arasında NIST hassasiyetiyle dönüşüm.",
    keywords: ["alan dönüştürücü", "metrekare", "hektar", "akre", "fit kare", "arazi alanı"],
    inputs: {
      value: { label: "Değer", help: "Dönüştürülecek alan değeri." },
      fromUnit: { label: "Kaynak", help: "Kaynak birimi seçin." },
      toUnit: { label: "Hedef", help: "Hedef birimi seçin." },
    },
    outputs: {
      result: { label: "Sonuç", help: "Dönüştürülen alan değeri." },
    },
    options: {
      m2: "Metrekare (m²)",
      cm2: "Santimetrekare (cm²)",
      mm2: "Milimetrekare (mm²)",
      km2: "Kilometrekare (km²)",
      ha: "Hektar (ha)",
      acre: "Akre",
      ft2: "Fit kare (ft²)",
      in2: "İnç kare (in²)",
      yd2: "Yarda kare (yd²)",
      mi2: "Mil kare (mi²)",
    },
    errors: { invalidArea: "Alan pozitif bir sayı olmalıdır." },
    faq: [
      {
        question: "Bir metrekarede kaç fit kare vardır?",
        answer: "1 metrekare yaklaşık 10,7639 fit kareye eşittir (1 m² = 10,7639 ft²).",
      },
      {
        question: "Bir hektarda kaç akre vardır?",
        answer: "1 hektar yaklaşık 2,4711 akreye eşittir. Tersine, 1 akre ≈ 0,4047 hektar.",
      },
      {
        question: "Hektar ne için kullanılır?",
        answer: "Hektar (10.000 m²), birçok ülkede arazi ve tarımsal alanlar için standart metrik birimdir.",
      },
      {
        question: "Bir akre ne kadar büyüklüktedir?",
        answer: "1 akre, tam olarak 4.046,8564224 metrekare (43.560 ft²) olarak tanımlanır.",
      },
    ],
  },
  de: {
    title: "Flächenumrechner",
    short: "Rechnen Sie zwischen Quadratmetern, Hektar, Acres, Quadratfuß und mehr um.",
    description:
      "Kostenloser Flächeneinheiten-Umrechner. Umrechnung zwischen m², cm², mm², km², Hektar, Acre, ft², in², yd² und mi² mit NIST-Genauigkeit.",
    keywords: ["flächenumrechner", "quadratmeter", "hektar", "acre", "quadratfuß", "umrechnung"],
    inputs: {
      value: { label: "Wert", help: "Der umzurechnende Flächenwert." },
      fromUnit: { label: "Von", help: "Ausgangseinheit auswählen." },
      toUnit: { label: "Zu", help: "Zieleinheit auswählen." },
    },
    outputs: {
      result: { label: "Ergebnis", help: "Der umgerechnete Flächenwert." },
    },
    options: {
      m2: "Quadratmeter (m²)",
      cm2: "Quadratzentimeter (cm²)",
      mm2: "Quadratmillimeter (mm²)",
      km2: "Quadratkilometer (km²)",
      ha: "Hektar (ha)",
      acre: "Acre",
      ft2: "Quadratfuß (ft²)",
      in2: "Quadratzoll (in²)",
      yd2: "Quadratyard (yd²)",
      mi2: "Quadratmeile (mi²)",
    },
    errors: { invalidArea: "Die Fläche muss eine positive Zahl sein." },
    faq: [
      {
        question: "Wie viele Quadratfuß sind in einem Quadratmeter?",
        answer: "1 Quadratmeter entspricht etwa 10,7639 Quadratfuß (1 m² = 10,7639 ft²).",
      },
      {
        question: "Wie viele Acre sind in einem Hektar?",
        answer: "1 Hektar entspricht etwa 2,4711 Acre. Umgekehrt: 1 Acre ≈ 0,4047 Hektar.",
      },
      {
        question: "Wofür wird ein Hektar verwendet?",
        answer: "Der Hektar (10.000 m²) ist die metrische Standardeinheit für Land- und Agrarflächen.",
      },
      {
        question: "Wie groß ist ein Acre?",
        answer: "1 Acre ist genau als 4.046,8564224 Quadratmeter (43.560 ft²) definiert.",
      },
    ],
  },
  fr: {
    title: "Convertisseur de superficie",
    short: "Convertissez entre mètres carrés, hectares, acres, pieds carrés et plus.",
    description:
      "Convertisseur d'unités de superficie gratuit. Conversion entre m², cm², mm², km², hectares, acres, ft², in², yd² et mi² avec précision NIST.",
    keywords: ["convertisseur superficie", "mètre carré", "hectare", "acre", "pied carré", "aire"],
    inputs: {
      value: { label: "Valeur", help: "La superficie à convertir." },
      fromUnit: { label: "De", help: "Sélectionnez l'unité source." },
      toUnit: { label: "À", help: "Sélectionnez l'unité cible." },
    },
    outputs: {
      result: { label: "Résultat", help: "La superficie convertie." },
    },
    options: {
      m2: "Mètre carré (m²)",
      cm2: "Centimètre carré (cm²)",
      mm2: "Millimètre carré (mm²)",
      km2: "Kilomètre carré (km²)",
      ha: "Hectare (ha)",
      acre: "Acre",
      ft2: "Pied carré (ft²)",
      in2: "Pouce carré (in²)",
      yd2: "Yard carré (yd²)",
      mi2: "Mile carré (mi²)",
    },
    errors: { invalidArea: "La superficie doit être un nombre positif." },
    faq: [
      {
        question: "Combien de pieds carrés y a-t-il dans un mètre carré ?",
        answer: "1 mètre carré équivaut à environ 10,7639 pieds carrés (1 m² = 10,7639 ft²).",
      },
      {
        question: "Combien d'acres y a-t-il dans un hectare ?",
        answer: "1 hectare équivaut à environ 2,4711 acres. Inversement, 1 acre ≈ 0,4047 hectares.",
      },
      {
        question: "À quoi sert un hectare ?",
        answer: "L'hectare (10 000 m²) est l'unité métrique standard pour les superficies agricoles et foncières.",
      },
      {
        question: "Quelle est la taille d'un acre ?",
        answer: "1 acre est défini exactement comme 4 046,8564224 mètres carrés (43 560 ft²).",
      },
    ],
  },
  es: {
    title: "Conversor de área",
    short: "Convierte entre metros cuadrados, hectáreas, acres, pies cuadrados y más.",
    description:
      "Conversor gratuito de unidades de área. Convierte entre m², cm², mm², km², hectáreas, acres, ft², in², yd² y mi² con precisión NIST.",
    keywords: ["conversor área", "metros cuadrados", "hectáreas", "acres", "pies cuadrados", "superficie"],
    inputs: {
      value: { label: "Valor", help: "El área a convertir." },
      fromUnit: { label: "De", help: "Seleccione la unidad de origen." },
      toUnit: { label: "A", help: "Seleccione la unidad de destino." },
    },
    outputs: {
      result: { label: "Resultado", help: "El área convertida." },
    },
    options: {
      m2: "Metro cuadrado (m²)",
      cm2: "Centímetro cuadrado (cm²)",
      mm2: "Milímetro cuadrado (mm²)",
      km2: "Kilómetro cuadrado (km²)",
      ha: "Hectárea (ha)",
      acre: "Acre",
      ft2: "Pie cuadrado (ft²)",
      in2: "Pulgada cuadrada (in²)",
      yd2: "Yarda cuadrada (yd²)",
      mi2: "Milla cuadrada (mi²)",
    },
    errors: { invalidArea: "El área debe ser un número positivo." },
    faq: [
      {
        question: "¿Cuántos pies cuadrados hay en un metro cuadrado?",
        answer: "1 metro cuadrado equivale a aproximadamente 10,7639 pies cuadrados (1 m² = 10,7639 ft²).",
      },
      {
        question: "¿Cuántos acres hay en una hectárea?",
        answer: "1 hectárea equivale a aproximadamente 2,4711 acres. A la inversa, 1 acre ≈ 0,4047 hectáreas.",
      },
      {
        question: "¿Para qué se utiliza una hectárea?",
        answer: "La hectárea (10 000 m²) es la unidad métrica estándar para superficies agrícolas y terrenos.",
      },
      {
        question: "¿Qué tan grande es un acre?",
        answer: "1 acre se define exactamente como 4 046,8564224 metros cuadrados (43 560 ft²).",
      },
    ],
  },
  it: {
    title: "Convertitore di area",
    short: "Converti tra metri quadrati, ettari, acri, piedi quadrati e altro.",
    description:
      "Convertitore gratuito di unità di area. Conversione tra m², cm², mm², km², ettari, acri, ft², in², yd² e mi² con precisione NIST.",
    keywords: ["convertitore area", "metri quadrati", "ettari", "acri", "piedi quadrati", "superficie"],
    inputs: {
      value: { label: "Valore", help: "L'area da convertire." },
      fromUnit: { label: "Da", help: "Selezionare l'unità di origine." },
      toUnit: { label: "A", help: "Selezionare l'unità di destinazione." },
    },
    outputs: {
      result: { label: "Risultato", help: "L'area convertita." },
    },
    options: {
      m2: "Metro quadrato (m²)",
      cm2: "Centimetro quadrato (cm²)",
      mm2: "Millimetro quadrato (mm²)",
      km2: "Chilometro quadrato (km²)",
      ha: "Ettaro (ha)",
      acre: "Acro",
      ft2: "Piede quadrato (ft²)",
      in2: "Pollice quadrato (in²)",
      yd2: "Iarda quadrata (yd²)",
      mi2: "Miglio quadrato (mi²)",
    },
    errors: { invalidArea: "L'area deve essere un numero positivo." },
    faq: [
      {
        question: "Quanti piedi quadrati ci sono in un metro quadrato?",
        answer: "1 metro quadrato equivale a circa 10,7639 piedi quadrati (1 m² = 10,7639 ft²).",
      },
      {
        question: "Quanti acri ci sono in un ettaro?",
        answer: "1 ettaro equivale a circa 2,4711 acri. Viceversa, 1 acro ≈ 0,4047 ettari.",
      },
      {
        question: "A cosa serve un ettaro?",
        answer: "L'ettaro (10.000 m²) è l'unità metrica standard per superfici agricole e terreni.",
      },
      {
        question: "Quanto è grande un acro?",
        answer: "1 acro è definito esattamente come 4.046,8564224 metri quadrati (43.560 ft²).",
      },
    ],
  },
  ar: {
    title: "محول المساحة",
    short: "حوّل بين المتر المربع والهكتار والفدان والقدم المربع وأكثر.",
    description:
      "محوّل وحدات المساحة المجاني. تحويل بين م² و سم² و مم² و كم² والهكتارات والفدادين و قدم² و بوصة² و ياردة² و ميل² بدقة NIST.",
    keywords: ["محول المساحة", "متر مربع", "هكتار", "فدان", "قدم مربع", "مساحة الأرض"],
    inputs: {
      value: { label: "القيمة", help: "قيمة المساحة المراد تحويلها." },
      fromUnit: { label: "من", help: "اختر الوحدة المصدر." },
      toUnit: { label: "إلى", help: "اختر الوحدة المستهدفة." },
    },
    outputs: {
      result: { label: "النتيجة", help: "قيمة المساحة المحولة." },
    },
    options: {
      m2: "متر مربع (م²)",
      cm2: "سنتيمتر مربع (سم²)",
      mm2: "مليمتر مربع (مم²)",
      km2: "كيلومتر مربع (كم²)",
      ha: "هكتار (هك)",
      acre: "فدان (إيكر)",
      ft2: "قدم مربع (قدم²)",
      in2: "بوصة مربعة (بوصة²)",
      yd2: "ياردة مربعة (ياردة²)",
      mi2: "ميل مربع (ميل²)",
    },
    errors: { invalidArea: "يجب أن تكون المساحة رقماً موجباً." },
    faq: [
      {
        question: "كم قدم مربع في المتر المربع؟",
        answer: "1 متر مربع يساوي تقريباً 10.7639 قدم مربع.",
      },
      {
        question: "كم فدان (إيكر) في الهكتار؟",
        answer: "1 هكتار يساوي تقريباً 2.4711 فدان. وعلى العكس، 1 فدان ≈ 0.4047 هكتار.",
      },
      {
        question: "فيمَ يُستخدم الهكتار؟",
        answer: "الهكتار (10,000 م²) هو الوحدة المترية القياسية للأراضي الزراعية ومساحات الأرض.",
      },
      {
        question: "ما حجم الفدان (إيكر)؟",
        answer: "يُعرَّف الفدان (إيكر) بدقة على أنه 4,046.8564224 متر مربع (43,560 قدم²).",
      },
    ],
  },
  ru: {
    title: "Конвертер площади",
    short: "Преобразование между квадратными метрами, гектарами, акрами, квадратными футами и др.",
    description:
      "Бесплатный конвертер единиц площади. Преобразование между м², см², мм², км², гектарами, акрами, ft², in², yd² и mi² с точностью NIST.",
    keywords: ["конвертер площади", "квадратные метры", "гектар", "акр", "квадратный фут", "площадь"],
    inputs: {
      value: { label: "Значение", help: "Значение площади для преобразования." },
      fromUnit: { label: "От", help: "Выберите исходную единицу." },
      toUnit: { label: "К", help: "Выберите целевую единицу." },
    },
    outputs: {
      result: { label: "Результат", help: "Преобразованное значение площади." },
    },
    options: {
      m2: "Квадратный метр (м²)",
      cm2: "Квадратный сантиметр (см²)",
      mm2: "Квадратный миллиметр (мм²)",
      km2: "Квадратный километр (км²)",
      ha: "Гектар (га)",
      acre: "Акр",
      ft2: "Квадратный фут (ft²)",
      in2: "Квадратный дюйм (in²)",
      yd2: "Квадратный ярд (yd²)",
      mi2: "Квадратная миля (mi²)",
    },
    errors: { invalidArea: "Площадь должна быть положительным числом." },
    faq: [
      {
        question: "Сколько квадратных футов в квадратном метре?",
        answer: "1 квадратный метр равен примерно 10,7639 квадратного фута (1 м² = 10,7639 ft²).",
      },
      {
        question: "Сколько акров в гектаре?",
        answer: "1 гектар равен примерно 2,4711 акра. Наоборот, 1 акр ≈ 0,4047 гектара.",
      },
      {
        question: "Для чего используется гектар?",
        answer: "Гектар (10 000 м²) — это стандартная метрическая единица для земельных и сельскохозяйственных площадей.",
      },
      {
        question: "Насколько велик акр?",
        answer: "1 акр определён точно как 4 046,8564224 квадратного метра (43 560 ft²).",
      },
    ],
  },
  zh: {
    title: "面积转换器",
    short: "在平方米、公顷、英亩、平方英尺等单位之间转换。",
    description:
      "免费的面积单位转换器。在 m²、cm²、mm²、km²、公顷、英亩、ft²、in²、yd² 和 mi² 之间以 NIST 级精度进行转换。",
    keywords: ["面积转换", "平方米", "公顷", "英亩", "平方英尺", "土地面积"],
    inputs: {
      value: { label: "数值", help: "要转换的面积值。" },
      fromUnit: { label: "从", help: "选择源单位。" },
      toUnit: { label: "到", help: "选择目标单位。" },
    },
    outputs: {
      result: { label: "结果", help: "转换后的面积值。" },
    },
    options: {
      m2: "平方米 (m²)",
      cm2: "平方厘米 (cm²)",
      mm2: "平方毫米 (mm²)",
      km2: "平方公里 (km²)",
      ha: "公顷 (ha)",
      acre: "英亩",
      ft2: "平方英尺 (ft²)",
      in2: "平方英寸 (in²)",
      yd2: "平方码 (yd²)",
      mi2: "平方英里 (mi²)",
    },
    errors: { invalidArea: "面积必须是正数。" },
    faq: [
      {
        question: "1 平方米等于多少平方英尺？",
        answer: "1 平方米约等于 10.7639 平方英尺（1 m² = 10.7639 ft²）。",
      },
      {
        question: "1 公顷等于多少英亩？",
        answer: "1 公顷约等于 2.4711 英亩。反之，1 英亩 ≈ 0.4047 公顷。",
      },
      {
        question: "公顷用于什么？",
        answer: "公顷（10,000 m²）是大多数国家用于农业和土地面积的标准公制单位。",
      },
      {
        question: "1 英亩有多大？",
        answer: "1 英亩精确定义为 4,046.8564224 平方米（43,560 ft²）。",
      },
    ],
  },
  ja: {
    title: "面積コンバーター",
    short: "平方メートル、ヘクタール、エーカー、平方フィートなどの間で変換します。",
    description:
      "無料の面積単位コンバーター。m²、cm²、mm²、km²、ヘクタール、エーカー、ft²、in²、yd²、mi² の間を NIST 級の精度で変換します。",
    keywords: ["面積コンバーター", "平方メートル", "ヘクタール", "エーカー", "平方フィート", "土地面積"],
    inputs: {
      value: { label: "値", help: "変換する面積の値。" },
      fromUnit: { label: "から", help: "ソース単位を選択します。" },
      toUnit: { label: "へ", help: "ターゲット単位を選択します。" },
    },
    outputs: {
      result: { label: "結果", help: "変換された面積の値。" },
    },
    options: {
      m2: "平方メートル (m²)",
      cm2: "平方センチメートル (cm²)",
      mm2: "平方ミリメートル (mm²)",
      km2: "平方キロメートル (km²)",
      ha: "ヘクタール (ha)",
      acre: "エーカー",
      ft2: "平方フィート (ft²)",
      in2: "平方インチ (in²)",
      yd2: "平方ヤード (yd²)",
      mi2: "平方マイル (mi²)",
    },
    errors: { invalidArea: "面積は正の数である必要があります。" },
    faq: [
      {
        question: "1 平方メートルは何平方フィートですか？",
        answer: "1 平方メートルは約 10.7639 平方フィートです（1 m² = 10.7639 ft²）。",
      },
      {
        question: "1 ヘクタールは何エーカーですか？",
        answer: "1 ヘクタールは約 2.4711 エーカーです。逆に、1 エーカー ≈ 0.4047 ヘクタール。",
      },
      {
        question: "ヘクタールは何に使われますか？",
        answer: "ヘクタール（10,000 m²）は多くの国で土地および農地面積の標準的なメートル単位です。",
      },
      {
        question: "1 エーカーの大きさは？",
        answer: "1 エーカーは正確に 4,046.8564224 平方メートル（43,560 ft²）と定義されます。",
      },
    ],
  },
  ko: {
    title: "면적 변환기",
    short: "제곱미터, 헥타르, 에이커, 제곱피트 등 사이에서 변환하세요.",
    description:
      "무료 면적 단위 변환기. m², cm², mm², km², 헥타르, 에이커, ft², in², yd², mi² 사이를 NIST 수준의 정밀도로 변환합니다.",
    keywords: ["면적 변환기", "제곱미터", "헥타르", "에이커", "제곱피트", "토지 면적"],
    inputs: {
      value: { label: "값", help: "변환할 면적 값." },
      fromUnit: { label: "에서", help: "원본 단위 선택." },
      toUnit: { label: "으로", help: "대상 단위 선택." },
    },
    outputs: {
      result: { label: "결과", help: "변환된 면적 값." },
    },
    options: {
      m2: "제곱미터 (m²)",
      cm2: "제곱센티미터 (cm²)",
      mm2: "제곱밀리미터 (mm²)",
      km2: "제곱킬로미터 (km²)",
      ha: "헥타르 (ha)",
      acre: "에이커",
      ft2: "제곱피트 (ft²)",
      in2: "제곱인치 (in²)",
      yd2: "제곱야드 (yd²)",
      mi2: "제곱마일 (mi²)",
    },
    errors: { invalidArea: "면적은 양수여야 합니다." },
    faq: [
      {
        question: "1 제곱미터는 몇 제곱피트입니까?",
        answer: "1 제곱미터는 약 10.7639 제곱피트입니다 (1 m² = 10.7639 ft²).",
      },
      {
        question: "1 헥타르는 몇 에이커입니까?",
        answer: "1 헥타르는 약 2.4711 에이커입니다. 반대로 1 에이커 ≈ 0.4047 헥타르.",
      },
      {
        question: "헥타르는 어디에 사용됩니까?",
        answer: "헥타르(10,000 m²)는 대부분의 국가에서 토지 및 농지 면적을 위한 표준 미터 단위입니다.",
      },
      {
        question: "1 에이커는 얼마나 큽니까?",
        answer: "1 에이커는 정확히 4,046.8564224 제곱미터(43,560 ft²)로 정의됩니다.",
      },
    ],
  },
  hi: {
    title: "क्षेत्रफल परिवर्तक",
    short: "वर्ग मीटर, हेक्टेयर, एकड़, वर्ग फुट और अन्य के बीच रूपांतरण करें।",
    description:
      "मुफ्त क्षेत्रफल इकाई परिवर्तक। m², cm², mm², km², हेक्टेयर, एकड़, ft², in², yd² और mi² के बीच NIST स्तर की सटीकता से रूपांतरण।",
    keywords: ["क्षेत्रफल परिवर्तक", "वर्ग मीटर", "हेक्टेयर", "एकड़", "वर्ग फुट", "भूमि क्षेत्र"],
    inputs: {
      value: { label: "मान", help: "रूपांतरण के लिए क्षेत्रफल मान।" },
      fromUnit: { label: "से", help: "स्रोत इकाई चुनें।" },
      toUnit: { label: "को", help: "लक्ष्य इकाई चुनें।" },
    },
    outputs: {
      result: { label: "परिणाम", help: "रूपांतरित क्षेत्रफल मान।" },
    },
    options: {
      m2: "वर्ग मीटर (m²)",
      cm2: "वर्ग सेंटीमीटर (cm²)",
      mm2: "वर्ग मिलीमीटर (mm²)",
      km2: "वर्ग किलोमीटर (km²)",
      ha: "हेक्टेयर (ha)",
      acre: "एकड़",
      ft2: "वर्ग फुट (ft²)",
      in2: "वर्ग इंच (in²)",
      yd2: "वर्ग गज (yd²)",
      mi2: "वर्ग मील (mi²)",
    },
    errors: { invalidArea: "क्षेत्रफल एक धनात्मक संख्या होनी चाहिए।" },
    faq: [
      {
        question: "एक वर्ग मीटर में कितने वर्ग फुट होते हैं?",
        answer: "1 वर्ग मीटर लगभग 10.7639 वर्ग फुट के बराबर है (1 m² = 10.7639 ft²)।",
      },
      {
        question: "एक हेक्टेयर में कितने एकड़ होते हैं?",
        answer: "1 हेक्टेयर लगभग 2.4711 एकड़ के बराबर है। इसके विपरीत, 1 एकड़ ≈ 0.4047 हेक्टेयर।",
      },
      {
        question: "हेक्टेयर का उपयोग किसके लिए होता है?",
        answer: "हेक्टेयर (10,000 m²) अधिकांश देशों में भूमि और कृषि क्षेत्रों के लिए मानक मीट्रिक इकाई है।",
      },
      {
        question: "एक एकड़ कितना बड़ा है?",
        answer: "1 एकड़ को बिल्कुल 4,046.8564224 वर्ग मीटर (43,560 ft²) के रूप में परिभाषित किया गया है।",
      },
    ],
  },
};

export default i18n;
