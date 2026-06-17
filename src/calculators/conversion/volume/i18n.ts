import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Volume Converter",
    short: "Convert between liters, gallons, cubic meters, fluid ounces and more.",
    description:
      "Free volume unit converter. Convert between m³, L, mL, cm³, ft³, in³, US/UK gallons, quarts, pints, and fluid ounces with NIST-grade precision.",
    keywords: [
      "volume converter",
      "liters to gallons",
      "ml to oz",
      "cubic meters",
      "us gallon vs uk gallon",
      "fluid ounce",
    ],
    inputs: {
      value: { label: "Value", help: "The volume value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: { result: { label: "Result", help: "The converted volume value." } },
    options: {
      m3: "Cubic meter (m³)",
      L: "Liter (L)",
      mL: "Milliliter (mL)",
      cm3: "Cubic centimeter (cm³)",
      ft3: "Cubic foot (ft³)",
      in3: "Cubic inch (in³)",
      gal_us: "US gallon",
      gal_uk: "UK (imperial) gallon",
      qt_us: "US quart",
      pt_us: "US pint",
      fl_oz_us: "US fluid ounce",
    },
    errors: { invalidVolume: "Volume must be a positive number." },
    faq: [
      {
        question: "What is the difference between a US gallon and a UK gallon?",
        answer: "A US gallon is 3.78541 L while a UK (imperial) gallon is 4.54609 L — the imperial gallon is about 20% larger.",
      },
      {
        question: "How many milliliters are in a US fluid ounce?",
        answer: "1 US fluid ounce equals exactly 29.5735295625 mL (about 29.57 mL).",
      },
      {
        question: "How many liters are in a cubic meter?",
        answer: "1 cubic meter equals exactly 1,000 liters (1 m³ = 1000 L).",
      },
      {
        question: "How do I convert cubic feet to liters?",
        answer: "Multiply the cubic feet value by 28.3168466 to get liters. For example, 10 ft³ ≈ 283.17 L.",
      },
    ],
  },
  nl: {
    title: "Volume Converteerer",
    short: "Converteer between liters, gallons, cubic meters, fluid ounces and more.",
    description:
      "Gratis volume unit converteerer. Converteer between m³, L, mL, cm³, ft³, in³, US/UK gallons, quarts, pints, and fluid ounces with NIST-grade precision.",
    keywords: [
      "volume converteerer",
      "liters to gallons",
      "ml to oz",
      "cubic meters",
      "us gallon vs uk gallon",
      "fluid ounce",
    ],
    inputs: {
      value: { label: "Waarde", help: "The volume value to converteer." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: { result: { label: "Resultaat", help: "The converteered volume value." } },
    options: {
      m3: "Cubic meter (m³)",
      L: "Liter (L)",
      mL: "Milliliter (mL)",
      cm3: "Cubic centimeter (cm³)",
      ft3: "Cubic foot (ft³)",
      in3: "Cubic inch (in³)",
      gal_us: "US gallon",
      gal_uk: "UK (imperial) gallon",
      qt_us: "US quart",
      pt_us: "US pint",
      fl_oz_us: "US fluid ounce",
    },
    errors: { invalidVolume: "Volume must be a positive nummer." },
    faq: [
      {
        question: "What is the difference between a US gallon and a UK gallon?",
        answer: "A US gallon is 3.78541 L while a UK (imperial) gallon is 4.54609 L — the imperial gallon is about 20% larger.",
      },
      {
        question: "How many milliliters are in a US fluid ounce?",
        answer: "1 US fluid ounce equals exactly 29.5735295625 mL (about 29.57 mL).",
      },
      {
        question: "How many liters are in a cubic meter?",
        answer: "1 cubic meter equals exactly 1,000 liters (1 m³ = 1000 L).",
      },
      {
        question: "How do I converteer cubic feet to liters?",
        answer: "Multiply the cubic feet value by 28.3168466 to get liters. For example, 10 ft³ ≈ 283.17 L.",
      },
    ],
  },

  pl: {
    title: "Volume Konwerter",
    short: "Konwertuj between liters, gallons, cubic meters, fluid ounces and more.",
    description:
      "Darmowy volume unit konwerter. Konwertuj between m³, L, mL, cm³, ft³, in³, US/UK gallons, quarts, pints, and fluid ounces with NIST-grade precision.",
    keywords: [
      "volume konwerter",
      "liters to gallons",
      "ml to oz",
      "cubic meters",
      "us gallon vs uk gallon",
      "fluid ounce",
    ],
    inputs: {
      value: { label: "Wartość", help: "The volume value to konwertuj." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: { result: { label: "Wynik", help: "The konwertujed volume value." } },
    options: {
      m3: "Cubic meter (m³)",
      L: "Liter (L)",
      mL: "Milliliter (mL)",
      cm3: "Cubic centimeter (cm³)",
      ft3: "Cubic foot (ft³)",
      in3: "Cubic inch (in³)",
      gal_us: "US gallon",
      gal_uk: "UK (imperial) gallon",
      qt_us: "US quart",
      pt_us: "US pint",
      fl_oz_us: "US fluid ounce",
    },
    errors: { invalidVolume: "Volume must be a positive liczba." },
    faq: [
      {
        question: "What is the difference between a US gallon and a UK gallon?",
        answer: "A US gallon is 3.78541 L while a UK (imperial) gallon is 4.54609 L — the imperial gallon is about 20% larger.",
      },
      {
        question: "How many milliliters are in a US fluid ounce?",
        answer: "1 US fluid ounce equals exactly 29.5735295625 mL (about 29.57 mL).",
      },
      {
        question: "How many liters are in a cubic meter?",
        answer: "1 cubic meter equals exactly 1,000 liters (1 m³ = 1000 L).",
      },
      {
        question: "How do I konwertuj cubic feet to liters?",
        answer: "Multiply the cubic feet value by 28.3168466 to get liters. For example, 10 ft³ ≈ 283.17 L.",
      },
    ],
  },
  pt: {
    title: "Conversor de Volume",
    short: "Converta entre litros, galões, mililitros e outras unidades de volume.",
    description:
      "Conversor gratuito de volume. Converta entre litros, mililitros, galões, onças fluidas, copos e outras unidades.",
    keywords: ["conversor volume", "litros galões", "ml fl oz", "capacidade", "unidades volume"],
    inputs: {
      value: { label: "Value", help: "The volume value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: { result: { label: "Result", help: "The converted volume value." } },
    options: {
      m3: "Cubic meter (m³)",
      L: "Liter (L)",
      mL: "Milliliter (mL)",
      cm3: "Cubic centimeter (cm³)",
      ft3: "Cubic foot (ft³)",
      in3: "Cubic inch (in³)",
      gal_us: "US gallon",
      gal_uk: "UK (imperial) gallon",
      qt_us: "US quart",
      pt_us: "US pint",
      fl_oz_us: "US fluid ounce",
    },
    errors: { invalidVolume: "Volume must be a positive number." },
    faq: [
      {
        question: "What is the difference between a US gallon and a UK gallon?",
        answer: "A US gallon is 3.78541 L while a UK (imperial) gallon is 4.54609 L — the imperial gallon is about 20% larger.",
      },
      {
        question: "How many milliliters are in a US fluid ounce?",
        answer: "1 US fluid ounce equals exactly 29.5735295625 mL (about 29.57 mL).",
      },
      {
        question: "How many liters are in a cubic meter?",
        answer: "1 cubic meter equals exactly 1,000 liters (1 m³ = 1000 L).",
      },
      {
        question: "How do I convert cubic feet to liters?",
        answer: "Multiply the cubic feet value by 28.3168466 to get liters. For example, 10 ft³ ≈ 283.17 L.",
      },
    ],
  },
  id: {
    title: "Konverter Volume",
    short: "Konversi antara liter, galon, mililiter, dan satuan volume lainnya.",
    description:
      "Konverter volume gratis. Konversi antara liter, mililiter, galon, fluid ounce, cup, dan satuan lainnya.",
    keywords: ["konverter volume", "liter galon", "ml fl oz", "kapasitas", "satuan volume"],
    inputs: {
      value: { label: "Value", help: "The volume value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: { result: { label: "Result", help: "The converted volume value." } },
    options: {
      m3: "Cubic meter (m³)",
      L: "Liter (L)",
      mL: "Milliliter (mL)",
      cm3: "Cubic centimeter (cm³)",
      ft3: "Cubic foot (ft³)",
      in3: "Cubic inch (in³)",
      gal_us: "US gallon",
      gal_uk: "UK (imperial) gallon",
      qt_us: "US quart",
      pt_us: "US pint",
      fl_oz_us: "US fluid ounce",
    },
    errors: { invalidVolume: "Volume must be a positive number." },
    faq: [
      {
        question: "What is the difference between a US gallon and a UK gallon?",
        answer: "A US gallon is 3.78541 L while a UK (imperial) gallon is 4.54609 L — the imperial gallon is about 20% larger.",
      },
      {
        question: "How many milliliters are in a US fluid ounce?",
        answer: "1 US fluid ounce equals exactly 29.5735295625 mL (about 29.57 mL).",
      },
      {
        question: "How many liters are in a cubic meter?",
        answer: "1 cubic meter equals exactly 1,000 liters (1 m³ = 1000 L).",
      },
      {
        question: "How do I convert cubic feet to liters?",
        answer: "Multiply the cubic feet value by 28.3168466 to get liters. For example, 10 ft³ ≈ 283.17 L.",
      },
    ],
  },

  tr: {
    title: "Hacim Dönüştürücü",
    short: "Litre, galon, metreküp, sıvı ons ve daha fazlası arasında dönüşüm yapın.",
    description:
      "Ücretsiz hacim birimi dönüştürücü. m³, L, mL, cm³, ft³, in³, ABD/İngiliz galonu, quart, pint ve sıvı ons arasında NIST hassasiyetiyle dönüşüm.",
    keywords: ["hacim dönüştürücü", "litre galon", "metreküp", "sıvı ons", "ml ons", "galon"],
    inputs: {
      value: { label: "Değer", help: "Dönüştürülecek hacim değeri." },
      fromUnit: { label: "Kaynak", help: "Kaynak birimi seçin." },
      toUnit: { label: "Hedef", help: "Hedef birimi seçin." },
    },
    outputs: { result: { label: "Sonuç", help: "Dönüştürülen hacim değeri." } },
    options: {
      m3: "Metreküp (m³)",
      L: "Litre (L)",
      mL: "Mililitre (mL)",
      cm3: "Santimetreküp (cm³)",
      ft3: "Fit küp (ft³)",
      in3: "İnç küp (in³)",
      gal_us: "ABD galonu",
      gal_uk: "İngiliz galonu",
      qt_us: "ABD quart'ı",
      pt_us: "ABD pint'i",
      fl_oz_us: "ABD sıvı onsu",
    },
    errors: { invalidVolume: "Hacim pozitif bir sayı olmalıdır." },
    faq: [
      {
        question: "ABD galonu ile İngiliz galonu arasındaki fark nedir?",
        answer: "ABD galonu 3,78541 L, İngiliz (imperial) galonu ise 4,54609 L'dir — İngiliz galonu yaklaşık %20 daha büyüktür.",
      },
      {
        question: "Bir ABD sıvı onsunda kaç mililitre vardır?",
        answer: "1 ABD sıvı onsu tam olarak 29,5735295625 mL'ye (yaklaşık 29,57 mL) eşittir.",
      },
      {
        question: "Bir metreküpte kaç litre vardır?",
        answer: "1 metreküp tam olarak 1.000 litreye eşittir (1 m³ = 1000 L).",
      },
      {
        question: "Fit küpü litreye nasıl dönüştürürüm?",
        answer: "Fit küp değerini 28,3168466 ile çarpın. Örneğin, 10 ft³ ≈ 283,17 L.",
      },
    ],
  },
  de: {
    title: "Volumenumrechner",
    short: "Rechnen Sie zwischen Litern, Gallonen, Kubikmetern, Flüssigunzen und mehr um.",
    description:
      "Kostenloser Volumeneinheiten-Umrechner. Umrechnung zwischen m³, L, mL, cm³, ft³, in³, US-/UK-Gallonen, Quart, Pint und Flüssigunzen mit NIST-Genauigkeit.",
    keywords: ["volumenumrechner", "liter gallone", "kubikmeter", "flüssigunze", "ml unze"],
    inputs: {
      value: { label: "Wert", help: "Der umzurechnende Volumenwert." },
      fromUnit: { label: "Von", help: "Ausgangseinheit auswählen." },
      toUnit: { label: "Zu", help: "Zieleinheit auswählen." },
    },
    outputs: { result: { label: "Ergebnis", help: "Der umgerechnete Volumenwert." } },
    options: {
      m3: "Kubikmeter (m³)",
      L: "Liter (L)",
      mL: "Milliliter (mL)",
      cm3: "Kubikzentimeter (cm³)",
      ft3: "Kubikfuß (ft³)",
      in3: "Kubikzoll (in³)",
      gal_us: "US-Gallone",
      gal_uk: "UK-Gallone (imperial)",
      qt_us: "US-Quart",
      pt_us: "US-Pint",
      fl_oz_us: "US-Flüssigunze",
    },
    errors: { invalidVolume: "Das Volumen muss eine positive Zahl sein." },
    faq: [
      {
        question: "Was ist der Unterschied zwischen einer US- und einer UK-Gallone?",
        answer: "Eine US-Gallone beträgt 3,78541 L, eine UK-Gallone 4,54609 L — die imperiale Gallone ist etwa 20 % größer.",
      },
      {
        question: "Wie viele Milliliter sind in einer US-Flüssigunze?",
        answer: "1 US-Flüssigunze entspricht genau 29,5735295625 mL (ca. 29,57 mL).",
      },
      {
        question: "Wie viele Liter sind in einem Kubikmeter?",
        answer: "1 Kubikmeter entspricht genau 1.000 Litern (1 m³ = 1000 L).",
      },
      {
        question: "Wie konvertiere ich Kubikfuß in Liter?",
        answer: "Multiplizieren Sie den Kubikfuß-Wert mit 28,3168466 für Liter. Beispiel: 10 ft³ ≈ 283,17 L.",
      },
    ],
  },
  fr: {
    title: "Convertisseur de volume",
    short: "Convertissez entre litres, gallons, mètres cubes, onces liquides et plus.",
    description:
      "Convertisseur d'unités de volume gratuit. Conversion entre m³, L, mL, cm³, ft³, in³, gallons US/UK, quarts, pintes et onces liquides avec précision NIST.",
    keywords: ["convertisseur volume", "litres gallons", "mètre cube", "once liquide", "ml once"],
    inputs: {
      value: { label: "Valeur", help: "Le volume à convertir." },
      fromUnit: { label: "De", help: "Sélectionnez l'unité source." },
      toUnit: { label: "À", help: "Sélectionnez l'unité cible." },
    },
    outputs: { result: { label: "Résultat", help: "Le volume converti." } },
    options: {
      m3: "Mètre cube (m³)",
      L: "Litre (L)",
      mL: "Millilitre (mL)",
      cm3: "Centimètre cube (cm³)",
      ft3: "Pied cube (ft³)",
      in3: "Pouce cube (in³)",
      gal_us: "Gallon US",
      gal_uk: "Gallon UK (impérial)",
      qt_us: "Quart US",
      pt_us: "Pinte US",
      fl_oz_us: "Once liquide US",
    },
    errors: { invalidVolume: "Le volume doit être un nombre positif." },
    faq: [
      {
        question: "Quelle est la différence entre un gallon US et un gallon UK ?",
        answer: "Un gallon US vaut 3,78541 L tandis qu'un gallon UK (impérial) vaut 4,54609 L — le gallon impérial est environ 20 % plus grand.",
      },
      {
        question: "Combien de millilitres y a-t-il dans une once liquide US ?",
        answer: "1 once liquide US équivaut exactement à 29,5735295625 mL (environ 29,57 mL).",
      },
      {
        question: "Combien de litres y a-t-il dans un mètre cube ?",
        answer: "1 mètre cube équivaut exactement à 1 000 litres (1 m³ = 1000 L).",
      },
      {
        question: "Comment convertir les pieds cubes en litres ?",
        answer: "Multipliez la valeur en pieds cubes par 28,3168466 pour obtenir des litres. Par exemple, 10 ft³ ≈ 283,17 L.",
      },
    ],
  },
  es: {
    title: "Conversor de volumen",
    short: "Convierte entre litros, galones, metros cúbicos, onzas líquidas y más.",
    description:
      "Conversor gratuito de unidades de volumen. Convierte entre m³, L, mL, cm³, ft³, in³, galones EE.UU./RU, cuartos, pintas y onzas líquidas con precisión NIST.",
    keywords: ["conversor volumen", "litros galones", "metro cúbico", "onza líquida", "ml onza"],
    inputs: {
      value: { label: "Valor", help: "El volumen a convertir." },
      fromUnit: { label: "De", help: "Seleccione la unidad de origen." },
      toUnit: { label: "A", help: "Seleccione la unidad de destino." },
    },
    outputs: { result: { label: "Resultado", help: "El volumen convertido." } },
    options: {
      m3: "Metro cúbico (m³)",
      L: "Litro (L)",
      mL: "Mililitro (mL)",
      cm3: "Centímetro cúbico (cm³)",
      ft3: "Pie cúbico (ft³)",
      in3: "Pulgada cúbica (in³)",
      gal_us: "Galón EE.UU.",
      gal_uk: "Galón RU (imperial)",
      qt_us: "Cuarto EE.UU.",
      pt_us: "Pinta EE.UU.",
      fl_oz_us: "Onza líquida EE.UU.",
    },
    errors: { invalidVolume: "El volumen debe ser un número positivo." },
    faq: [
      {
        question: "¿Cuál es la diferencia entre un galón estadounidense y uno británico?",
        answer: "Un galón estadounidense equivale a 3,78541 L mientras que un galón británico (imperial) equivale a 4,54609 L — el imperial es aproximadamente un 20 % más grande.",
      },
      {
        question: "¿Cuántos mililitros hay en una onza líquida estadounidense?",
        answer: "1 onza líquida estadounidense equivale exactamente a 29,5735295625 mL (aprox. 29,57 mL).",
      },
      {
        question: "¿Cuántos litros hay en un metro cúbico?",
        answer: "1 metro cúbico equivale exactamente a 1.000 litros (1 m³ = 1000 L).",
      },
      {
        question: "¿Cómo convierto pies cúbicos a litros?",
        answer: "Multiplique los pies cúbicos por 28,3168466 para obtener litros. Por ejemplo, 10 ft³ ≈ 283,17 L.",
      },
    ],
  },
  it: {
    title: "Convertitore di volume",
    short: "Converti tra litri, galloni, metri cubi, once liquide e altro.",
    description:
      "Convertitore gratuito di unità di volume. Conversione tra m³, L, mL, cm³, ft³, in³, galloni USA/UK, quarti, pinte e once liquide con precisione NIST.",
    keywords: ["convertitore volume", "litri galloni", "metro cubo", "oncia liquida", "ml oncia"],
    inputs: {
      value: { label: "Valore", help: "Il volume da convertire." },
      fromUnit: { label: "Da", help: "Selezionare l'unità di origine." },
      toUnit: { label: "A", help: "Selezionare l'unità di destinazione." },
    },
    outputs: { result: { label: "Risultato", help: "Il volume convertito." } },
    options: {
      m3: "Metro cubo (m³)",
      L: "Litro (L)",
      mL: "Millilitro (mL)",
      cm3: "Centimetro cubo (cm³)",
      ft3: "Piede cubo (ft³)",
      in3: "Pollice cubo (in³)",
      gal_us: "Gallone USA",
      gal_uk: "Gallone UK (imperiale)",
      qt_us: "Quarto USA",
      pt_us: "Pinta USA",
      fl_oz_us: "Oncia liquida USA",
    },
    errors: { invalidVolume: "Il volume deve essere un numero positivo." },
    faq: [
      {
        question: "Qual è la differenza tra un gallone USA e uno UK?",
        answer: "Un gallone USA equivale a 3,78541 L, un gallone UK (imperiale) a 4,54609 L — quello imperiale è circa il 20% più grande.",
      },
      {
        question: "Quanti millilitri ci sono in un'oncia liquida USA?",
        answer: "1 oncia liquida USA equivale esattamente a 29,5735295625 mL (circa 29,57 mL).",
      },
      {
        question: "Quanti litri ci sono in un metro cubo?",
        answer: "1 metro cubo equivale esattamente a 1.000 litri (1 m³ = 1000 L).",
      },
      {
        question: "Come converto i piedi cubi in litri?",
        answer: "Moltiplicare i piedi cubi per 28,3168466 per ottenere i litri. Esempio: 10 ft³ ≈ 283,17 L.",
      },
    ],
  },
  ar: {
    title: "محول الحجم",
    short: "حوّل بين اللترات والجالونات والمتر المكعب والأوقية السائلة وأكثر.",
    description:
      "محوّل وحدات الحجم المجاني. تحويل بين م³ ولتر ومل وسم³ وقدم³ وبوصة³ والجالون الأمريكي/البريطاني والكوارت والباينت والأوقية السائلة بدقة NIST.",
    keywords: ["محول الحجم", "لتر جالون", "متر مكعب", "أوقية سائلة", "مل أوقية"],
    inputs: {
      value: { label: "القيمة", help: "قيمة الحجم المراد تحويلها." },
      fromUnit: { label: "من", help: "اختر الوحدة المصدر." },
      toUnit: { label: "إلى", help: "اختر الوحدة المستهدفة." },
    },
    outputs: { result: { label: "النتيجة", help: "قيمة الحجم المحولة." } },
    options: {
      m3: "متر مكعب (م³)",
      L: "لتر (ل)",
      mL: "مليلتر (مل)",
      cm3: "سنتيمتر مكعب (سم³)",
      ft3: "قدم مكعب (قدم³)",
      in3: "بوصة مكعبة (بوصة³)",
      gal_us: "جالون أمريكي",
      gal_uk: "جالون بريطاني (إمبراطوري)",
      qt_us: "كوارت أمريكي",
      pt_us: "باينت أمريكي",
      fl_oz_us: "أوقية سائلة أمريكية",
    },
    errors: { invalidVolume: "يجب أن يكون الحجم رقماً موجباً." },
    faq: [
      {
        question: "ما الفرق بين الجالون الأمريكي والجالون البريطاني؟",
        answer: "الجالون الأمريكي يساوي 3.78541 لتر، بينما الجالون البريطاني (الإمبراطوري) يساوي 4.54609 لتر — الإمبراطوري أكبر بنحو 20%.",
      },
      {
        question: "كم مليلتر في الأوقية السائلة الأمريكية الواحدة؟",
        answer: "1 أوقية سائلة أمريكية تساوي بالضبط 29.5735295625 مل (حوالي 29.57 مل).",
      },
      {
        question: "كم لتر في المتر المكعب؟",
        answer: "1 متر مكعب يساوي بالضبط 1000 لتر (1 م³ = 1000 ل).",
      },
      {
        question: "كيف أحوّل القدم المكعب إلى لتر؟",
        answer: "اضرب قيمة القدم المكعب في 28.3168466 للحصول على اللترات. مثال: 10 قدم³ ≈ 283.17 ل.",
      },
    ],
  },
  ru: {
    title: "Конвертер объёма",
    short: "Преобразование между литрами, галлонами, кубическими метрами, унциями жидкости и др.",
    description:
      "Бесплатный конвертер единиц объёма. Преобразование между м³, л, мл, см³, ft³, in³, галлонами США/Великобритании, квартами, пинтами и унциями жидкости с точностью NIST.",
    keywords: ["конвертер объёма", "литры галлоны", "кубический метр", "унция жидкости", "мл унция"],
    inputs: {
      value: { label: "Значение", help: "Значение объёма для преобразования." },
      fromUnit: { label: "От", help: "Выберите исходную единицу." },
      toUnit: { label: "К", help: "Выберите целевую единицу." },
    },
    outputs: { result: { label: "Результат", help: "Преобразованное значение объёма." } },
    options: {
      m3: "Кубический метр (м³)",
      L: "Литр (л)",
      mL: "Миллилитр (мл)",
      cm3: "Кубический сантиметр (см³)",
      ft3: "Кубический фут (ft³)",
      in3: "Кубический дюйм (in³)",
      gal_us: "Галлон США",
      gal_uk: "Британский галлон (имперский)",
      qt_us: "Кварта США",
      pt_us: "Пинта США",
      fl_oz_us: "Жидкая унция США",
    },
    errors: { invalidVolume: "Объём должен быть положительным числом." },
    faq: [
      {
        question: "Чем отличается американский галлон от британского?",
        answer: "Американский галлон — это 3,78541 л, а британский (имперский) — 4,54609 л; имперский галлон примерно на 20% больше.",
      },
      {
        question: "Сколько миллилитров в одной жидкой унции США?",
        answer: "1 жидкая унция США равна точно 29,5735295625 мл (≈ 29,57 мл).",
      },
      {
        question: "Сколько литров в одном кубическом метре?",
        answer: "1 кубический метр равен точно 1000 литрам (1 м³ = 1000 л).",
      },
      {
        question: "Как преобразовать кубические футы в литры?",
        answer: "Умножьте значение в кубических футах на 28,3168466, чтобы получить литры. Пример: 10 ft³ ≈ 283,17 л.",
      },
    ],
  },
  zh: {
    title: "体积转换器",
    short: "在升、加仑、立方米、液量盎司等单位之间转换。",
    description:
      "免费的体积单位转换器。在 m³、L、mL、cm³、ft³、in³、美制/英制加仑、夸脱、品脱和液量盎司之间以 NIST 级精度进行转换。",
    keywords: ["体积转换", "升 加仑", "立方米", "液量盎司", "毫升"],
    inputs: {
      value: { label: "数值", help: "要转换的体积值。" },
      fromUnit: { label: "从", help: "选择源单位。" },
      toUnit: { label: "到", help: "选择目标单位。" },
    },
    outputs: { result: { label: "结果", help: "转换后的体积值。" } },
    options: {
      m3: "立方米 (m³)",
      L: "升 (L)",
      mL: "毫升 (mL)",
      cm3: "立方厘米 (cm³)",
      ft3: "立方英尺 (ft³)",
      in3: "立方英寸 (in³)",
      gal_us: "美制加仑",
      gal_uk: "英制加仑（帝国）",
      qt_us: "美制夸脱",
      pt_us: "美制品脱",
      fl_oz_us: "美制液量盎司",
    },
    errors: { invalidVolume: "体积必须是正数。" },
    faq: [
      {
        question: "美制加仑和英制加仑有什么区别？",
        answer: "1 美制加仑 = 3.78541 L，而 1 英制（帝国）加仑 = 4.54609 L，帝国加仑约大 20%。",
      },
      {
        question: "1 美制液量盎司等于多少毫升？",
        answer: "1 美制液量盎司精确等于 29.5735295625 mL（约 29.57 mL）。",
      },
      {
        question: "1 立方米等于多少升？",
        answer: "1 立方米精确等于 1,000 升（1 m³ = 1000 L）。",
      },
      {
        question: "如何将立方英尺转换为升？",
        answer: "将立方英尺值乘以 28.3168466 即得升。例如 10 ft³ ≈ 283.17 L。",
      },
    ],
  },
  ja: {
    title: "体積コンバーター",
    short: "リットル、ガロン、立方メートル、液量オンスなどの間で変換します。",
    description:
      "無料の体積単位コンバーター。m³、L、mL、cm³、ft³、in³、米/英ガロン、クォート、パイント、液量オンスを NIST 級の精度で変換します。",
    keywords: ["体積コンバーター", "リットル ガロン", "立方メートル", "液量オンス", "mL"],
    inputs: {
      value: { label: "値", help: "変換する体積の値。" },
      fromUnit: { label: "から", help: "ソース単位を選択します。" },
      toUnit: { label: "へ", help: "ターゲット単位を選択します。" },
    },
    outputs: { result: { label: "結果", help: "変換された体積の値。" } },
    options: {
      m3: "立方メートル (m³)",
      L: "リットル (L)",
      mL: "ミリリットル (mL)",
      cm3: "立方センチメートル (cm³)",
      ft3: "立方フィート (ft³)",
      in3: "立方インチ (in³)",
      gal_us: "米ガロン",
      gal_uk: "英ガロン（帝国）",
      qt_us: "米クォート",
      pt_us: "米パイント",
      fl_oz_us: "米液量オンス",
    },
    errors: { invalidVolume: "体積は正の数である必要があります。" },
    faq: [
      {
        question: "米ガロンと英ガロンの違いは？",
        answer: "1 米ガロン = 3.78541 L、1 英（帝国）ガロン = 4.54609 L で、帝国ガロンの方が約 20% 大きいです。",
      },
      {
        question: "1 米液量オンスは何ミリリットルですか？",
        answer: "1 米液量オンスは正確に 29.5735295625 mL（約 29.57 mL）です。",
      },
      {
        question: "1 立方メートルは何リットルですか？",
        answer: "1 立方メートルは正確に 1,000 リットルです（1 m³ = 1000 L）。",
      },
      {
        question: "立方フィートをリットルに変換するには？",
        answer: "立方フィートの値に 28.3168466 を掛けるとリットルになります。例: 10 ft³ ≈ 283.17 L。",
      },
    ],
  },
  ko: {
    title: "부피 변환기",
    short: "리터, 갤런, 세제곱미터, 액량 온스 등 사이에서 변환하세요.",
    description:
      "무료 부피 단위 변환기. m³, L, mL, cm³, ft³, in³, 미국/영국 갤런, 쿼트, 파인트, 액량 온스 사이를 NIST 수준의 정밀도로 변환합니다.",
    keywords: ["부피 변환기", "리터 갤런", "세제곱미터", "액량 온스", "mL"],
    inputs: {
      value: { label: "값", help: "변환할 부피 값." },
      fromUnit: { label: "에서", help: "원본 단위 선택." },
      toUnit: { label: "으로", help: "대상 단위 선택." },
    },
    outputs: { result: { label: "결과", help: "변환된 부피 값." } },
    options: {
      m3: "세제곱미터 (m³)",
      L: "리터 (L)",
      mL: "밀리리터 (mL)",
      cm3: "세제곱센티미터 (cm³)",
      ft3: "세제곱피트 (ft³)",
      in3: "세제곱인치 (in³)",
      gal_us: "미국 갤런",
      gal_uk: "영국 갤런(임피리얼)",
      qt_us: "미국 쿼트",
      pt_us: "미국 파인트",
      fl_oz_us: "미국 액량 온스",
    },
    errors: { invalidVolume: "부피는 양수여야 합니다." },
    faq: [
      {
        question: "미국 갤런과 영국 갤런의 차이는?",
        answer: "1 미국 갤런 = 3.78541 L, 1 영국(임피리얼) 갤런 = 4.54609 L 로 임피리얼 갤런이 약 20% 더 큽니다.",
      },
      {
        question: "1 미국 액량 온스는 몇 밀리리터입니까?",
        answer: "1 미국 액량 온스는 정확히 29.5735295625 mL (약 29.57 mL) 입니다.",
      },
      {
        question: "1 세제곱미터는 몇 리터입니까?",
        answer: "1 세제곱미터는 정확히 1,000 리터입니다 (1 m³ = 1000 L).",
      },
      {
        question: "세제곱피트를 리터로 변환하려면?",
        answer: "세제곱피트 값에 28.3168466 을 곱하면 리터가 됩니다. 예: 10 ft³ ≈ 283.17 L.",
      },
    ],
  },
  hi: {
    title: "आयतन परिवर्तक",
    short: "लीटर, गैलन, घन मीटर, तरल औंस और अन्य के बीच रूपांतरण करें।",
    description:
      "मुफ्त आयतन इकाई परिवर्तक। m³, L, mL, cm³, ft³, in³, यूएस/यूके गैलन, क्वार्ट, पिंट और तरल औंस के बीच NIST स्तर की सटीकता से रूपांतरण।",
    keywords: ["आयतन परिवर्तक", "लीटर गैलन", "घन मीटर", "तरल औंस", "एमएल औंस"],
    inputs: {
      value: { label: "मान", help: "रूपांतरण के लिए आयतन मान।" },
      fromUnit: { label: "से", help: "स्रोत इकाई चुनें।" },
      toUnit: { label: "को", help: "लक्ष्य इकाई चुनें।" },
    },
    outputs: { result: { label: "परिणाम", help: "रूपांतरित आयतन मान।" } },
    options: {
      m3: "घन मीटर (m³)",
      L: "लीटर (L)",
      mL: "मिलीलीटर (mL)",
      cm3: "घन सेंटीमीटर (cm³)",
      ft3: "घन फुट (ft³)",
      in3: "घन इंच (in³)",
      gal_us: "यूएस गैलन",
      gal_uk: "यूके गैलन (इंपीरियल)",
      qt_us: "यूएस क्वार्ट",
      pt_us: "यूएस पिंट",
      fl_oz_us: "यूएस तरल औंस",
    },
    errors: { invalidVolume: "आयतन एक धनात्मक संख्या होनी चाहिए।" },
    faq: [
      {
        question: "यूएस गैलन और यूके गैलन में क्या अंतर है?",
        answer: "1 यूएस गैलन = 3.78541 L जबकि 1 यूके (इंपीरियल) गैलन = 4.54609 L — इंपीरियल गैलन लगभग 20% बड़ा है।",
      },
      {
        question: "एक यूएस तरल औंस में कितने मिलीलीटर होते हैं?",
        answer: "1 यूएस तरल औंस ठीक 29.5735295625 mL (लगभग 29.57 mL) के बराबर है।",
      },
      {
        question: "एक घन मीटर में कितने लीटर होते हैं?",
        answer: "1 घन मीटर ठीक 1,000 लीटर के बराबर है (1 m³ = 1000 L)।",
      },
      {
        question: "घन फुट को लीटर में कैसे बदलें?",
        answer: "घन फुट को 28.3168466 से गुणा करें। उदाहरण: 10 ft³ ≈ 283.17 L।",
      },
    ],
  },
};

export default i18n;
