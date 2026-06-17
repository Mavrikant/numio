import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Pressure Converter",
    short:
      "Convert between Pa, kPa, bar, psi, atm, mmHg and more pressure units.",
    description:
      "Free pressure unit converter. Convert between Pa, kPa, MPa, bar, psi, atm, mmHg, torr and inHg with NIST-grade precision.",
    keywords: [
      "pressure converter",
      "psi to bar",
      "bar to kpa",
      "atm to mmhg",
      "pascal converter",
      "torr",
    ],
    inputs: {
      value: { label: "Value", help: "The pressure value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: {
      result: { label: "Result", help: "The converted pressure value." },
    },
    options: {
      Pa: "Pascal (Pa)",
      kPa: "Kilopascal (kPa)",
      MPa: "Megapascal (MPa)",
      bar: "Bar",
      psi: "Pounds per square inch (psi)",
      atm: "Standard atmosphere (atm)",
      mmHg: "Millimeters of mercury (mmHg)",
      torr: "Torr",
      inHg: "Inches of mercury (inHg)",
      mH2O: "Meter of water (mH₂O)",
    },
    errors: { invalidPressure: "Pressure must be a positive number." },
    faq: [
      {
        question: "What is the difference between bar and psi?",
        answer:
          "1 bar = 100,000 Pa ≈ 14.5038 psi. Bar is metric (used in Europe), psi is US customary (used for tires, hydraulics).",
      },
      {
        question: "How many pascals are in one atmosphere?",
        answer:
          "1 standard atmosphere (atm) equals exactly 101,325 Pa by definition (about 1.01325 bar or 14.696 psi).",
      },
      {
        question: "What is the difference between mmHg and torr?",
        answer:
          "They are nearly identical: 1 torr = 1/760 atm ≈ 133.3224 Pa, while 1 mmHg = 133.3224 Pa. The values differ by less than 1 part in 10⁷.",
      },
      {
        question: "How do I convert psi to kPa?",
        answer:
          "Multiply psi by 6.894757 to get kPa. For example, 30 psi ≈ 206.84 kPa (typical car tire pressure).",
      },
    ],
  },
  nl: {
    title: "Pressure Converteerer",
    short:
      "Converteer between Pa, kPa, bar, psi, atm, mmHg and more pressure units.",
    description:
      "Gratis pressure unit converteerer. Converteer between Pa, kPa, MPa, bar, psi, atm, mmHg, torr and inHg with NIST-grade precision.",
    keywords: [
      "pressure converteerer",
      "psi to bar",
      "bar to kpa",
      "atm to mmhg",
      "pascal converteerer",
      "torr",
    ],
    inputs: {
      value: { label: "Waarde", help: "The pressure value to converteer." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: {
      result: { label: "Resultaat", help: "The converteered pressure value." },
    },
    options: {
      Pa: "Pascal (Pa)",
      kPa: "Kilopascal (kPa)",
      MPa: "Megapascal (MPa)",
      bar: "Bar",
      psi: "Pounds per square inch (psi)",
      atm: "Standard atmosphere (atm)",
      mmHg: "Millimeters of mercury (mmHg)",
      torr: "Torr",
      inHg: "Inches of mercury (inHg)",
      mH2O: "Meter of water (mH₂O)",
    },
    errors: { invalidPressure: "Pressure must be a positive nummer." },
    faq: [
      {
        question: "What is the difference between bar and psi?",
        answer:
          "1 bar = 100,000 Pa ≈ 14.5038 psi. Bar is metric (used in Europe), psi is US customary (used for tires, hydraulics).",
      },
      {
        question: "How many pascals are in one atmosphere?",
        answer:
          "1 standard atmosphere (atm) equals exactly 101,325 Pa by definition (about 1.01325 bar or 14.696 psi).",
      },
      {
        question: "What is the difference between mmHg and torr?",
        answer:
          "They are nearly identical: 1 torr = 1/760 atm ≈ 133.3224 Pa, while 1 mmHg = 133.3224 Pa. The values differ by less than 1 part in 10⁷.",
      },
      {
        question: "How do I converteer psi to kPa?",
        answer:
          "Multiply psi by 6.894757 to get kPa. For example, 30 psi ≈ 206.84 kPa (typical car tire pressure).",
      },
    ],
  },

  pl: {
    title: "Pressure Konwerter",
    short:
      "Konwertuj between Pa, kPa, bar, psi, atm, mmHg and more pressure units.",
    description:
      "Darmowy pressure unit konwerter. Konwertuj between Pa, kPa, MPa, bar, psi, atm, mmHg, torr and inHg with NIST-grade precision.",
    keywords: [
      "pressure konwerter",
      "psi to bar",
      "bar to kpa",
      "atm to mmhg",
      "pascal konwerter",
      "torr",
    ],
    inputs: {
      value: { label: "Wartość", help: "The pressure value to konwertuj." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: {
      result: { label: "Wynik", help: "The konwertujed pressure value." },
    },
    options: {
      Pa: "Pascal (Pa)",
      kPa: "Kilopascal (kPa)",
      MPa: "Megapascal (MPa)",
      bar: "Bar",
      psi: "Pounds per square inch (psi)",
      atm: "Standard atmosphere (atm)",
      mmHg: "Millimeters of mercury (mmHg)",
      torr: "Torr",
      inHg: "Inches of mercury (inHg)",
      mH2O: "Meter of water (mH₂O)",
    },
    errors: { invalidPressure: "Pressure must be a positive liczba." },
    faq: [
      {
        question: "What is the difference between bar and psi?",
        answer:
          "1 bar = 100,000 Pa ≈ 14.5038 psi. Bar is metric (used in Europe), psi is US customary (used for tires, hydraulics).",
      },
      {
        question: "How many pascals are in one atmosphere?",
        answer:
          "1 standard atmosphere (atm) equals exactly 101,325 Pa by definition (about 1.01325 bar or 14.696 psi).",
      },
      {
        question: "What is the difference between mmHg and torr?",
        answer:
          "They are nearly identical: 1 torr = 1/760 atm ≈ 133.3224 Pa, while 1 mmHg = 133.3224 Pa. The values differ by less than 1 part in 10⁷.",
      },
      {
        question: "How do I konwertuj psi to kPa?",
        answer:
          "Multiply psi by 6.894757 to get kPa. For example, 30 psi ≈ 206.84 kPa (typical car tire pressure).",
      },
    ],
  },
  pt: {
    title: "Conversor de Pressão",
    short: "Converta entre Pa, bar, psi, atm e outras unidades de pressão.",
    description:
      "Conversor gratuito de pressão. Converta entre Pascal, bar, psi, atmosfera, mmHg, kPa e outras unidades.",
    keywords: [
      "conversor pressão",
      "bar psi",
      "Pa atm",
      "mmHg",
      "unidades pressão",
    ],
    inputs: {
      value: { label: "Value", help: "The pressure value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: {
      result: { label: "Result", help: "The converted pressure value." },
    },
    options: {
      Pa: "Pascal (Pa)",
      kPa: "Kilopascal (kPa)",
      MPa: "Megapascal (MPa)",
      bar: "Bar",
      psi: "Pounds per square inch (psi)",
      atm: "Standard atmosphere (atm)",
      mmHg: "Millimeters of mercury (mmHg)",
      torr: "Torr",
      inHg: "Inches of mercury (inHg)",
      mH2O: "Meter of water (mH₂O)",
    },
    errors: { invalidPressure: "Pressure must be a positive number." },
    faq: [
      {
        question: "What is the difference between bar and psi?",
        answer:
          "1 bar = 100,000 Pa ≈ 14.5038 psi. Bar is metric (used in Europe), psi is US customary (used for tires, hydraulics).",
      },
      {
        question: "How many pascals are in one atmosphere?",
        answer:
          "1 standard atmosphere (atm) equals exactly 101,325 Pa by definition (about 1.01325 bar or 14.696 psi).",
      },
      {
        question: "What is the difference between mmHg and torr?",
        answer:
          "They are nearly identical: 1 torr = 1/760 atm ≈ 133.3224 Pa, while 1 mmHg = 133.3224 Pa. The values differ by less than 1 part in 10⁷.",
      },
      {
        question: "How do I convert psi to kPa?",
        answer:
          "Multiply psi by 6.894757 to get kPa. For example, 30 psi ≈ 206.84 kPa (typical car tire pressure).",
      },
    ],
  },
  id: {
    title: "Konverter Tekanan",
    short: "Konversi antara Pa, bar, psi, atm, dan satuan tekanan lainnya.",
    description:
      "Konverter tekanan gratis. Konversi antara Pascal, bar, psi, atmosfer, mmHg, kPa, dan satuan lainnya.",
    keywords: [
      "konverter tekanan",
      "bar psi",
      "Pa atm",
      "mmHg",
      "satuan tekanan",
    ],
    inputs: {
      value: { label: "Value", help: "The pressure value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: {
      result: { label: "Result", help: "The converted pressure value." },
    },
    options: {
      Pa: "Pascal (Pa)",
      kPa: "Kilopascal (kPa)",
      MPa: "Megapascal (MPa)",
      bar: "Bar",
      psi: "Pounds per square inch (psi)",
      atm: "Standard atmosphere (atm)",
      mmHg: "Millimeters of mercury (mmHg)",
      torr: "Torr",
      inHg: "Inches of mercury (inHg)",
      mH2O: "Meter of water (mH₂O)",
    },
    errors: { invalidPressure: "Pressure must be a positive number." },
    faq: [
      {
        question: "What is the difference between bar and psi?",
        answer:
          "1 bar = 100,000 Pa ≈ 14.5038 psi. Bar is metric (used in Europe), psi is US customary (used for tires, hydraulics).",
      },
      {
        question: "How many pascals are in one atmosphere?",
        answer:
          "1 standard atmosphere (atm) equals exactly 101,325 Pa by definition (about 1.01325 bar or 14.696 psi).",
      },
      {
        question: "What is the difference between mmHg and torr?",
        answer:
          "They are nearly identical: 1 torr = 1/760 atm ≈ 133.3224 Pa, while 1 mmHg = 133.3224 Pa. The values differ by less than 1 part in 10⁷.",
      },
      {
        question: "How do I convert psi to kPa?",
        answer:
          "Multiply psi by 6.894757 to get kPa. For example, 30 psi ≈ 206.84 kPa (typical car tire pressure).",
      },
    ],
  },

  tr: {
    title: "Basınç Dönüştürücü",
    short:
      "Pa, kPa, bar, psi, atm, mmHg ve daha fazla basınç birimi arasında dönüşüm.",
    description:
      "Ücretsiz basınç birimi dönüştürücü. Pa, kPa, MPa, bar, psi, atm, mmHg, torr ve inHg arasında NIST hassasiyetiyle dönüşüm.",
    keywords: [
      "basınç dönüştürücü",
      "psi bar",
      "bar kpa",
      "atm mmhg",
      "pascal",
      "torr",
    ],
    inputs: {
      value: { label: "Değer", help: "Dönüştürülecek basınç değeri." },
      fromUnit: { label: "Kaynak", help: "Kaynak birimi seçin." },
      toUnit: { label: "Hedef", help: "Hedef birimi seçin." },
    },
    outputs: {
      result: { label: "Sonuç", help: "Dönüştürülen basınç değeri." },
    },
    options: {
      Pa: "Paskal (Pa)",
      kPa: "Kilopaskal (kPa)",
      MPa: "Megapaskal (MPa)",
      bar: "Bar",
      psi: "Pound/inç kare (psi)",
      atm: "Standart atmosfer (atm)",
      mmHg: "Milimetre cıva (mmHg)",
      torr: "Torr",
      inHg: "İnç cıva (inHg)",
      mH2O: "Metre su sütunu (mH₂O)",
    },
    errors: { invalidPressure: "Basınç pozitif bir sayı olmalıdır." },
    faq: [
      {
        question: "Bar ile psi arasındaki fark nedir?",
        answer:
          "1 bar = 100.000 Pa ≈ 14,5038 psi. Bar metrik birimdir (Avrupa), psi ABD birimidir (lastik, hidrolik).",
      },
      {
        question: "Bir atmosferde kaç pascal vardır?",
        answer:
          "1 standart atmosfer (atm), tanım gereği tam olarak 101.325 Pa'dır (yaklaşık 1,01325 bar veya 14,696 psi).",
      },
      {
        question: "mmHg ve torr arasındaki fark nedir?",
        answer:
          "Neredeyse aynıdırlar: 1 torr = 1/760 atm ≈ 133,3224 Pa, 1 mmHg = 133,3224 Pa. Aradaki fark 10⁷'de 1'den azdır.",
      },
      {
        question: "psi'yi kPa'ya nasıl dönüştürürüm?",
        answer:
          "psi değerini 6,894757 ile çarpın. Örneğin, 30 psi ≈ 206,84 kPa (tipik araba lastiği basıncı).",
      },
    ],
  },
  de: {
    title: "Druckumrechner",
    short:
      "Rechnen Sie zwischen Pa, kPa, bar, psi, atm, mmHg und weiteren Druckeinheiten um.",
    description:
      "Kostenloser Druckeinheiten-Umrechner. Umrechnung zwischen Pa, kPa, MPa, bar, psi, atm, mmHg, torr und inHg mit NIST-Genauigkeit.",
    keywords: [
      "druckumrechner",
      "psi bar",
      "bar kpa",
      "atm mmhg",
      "pascal",
      "torr",
    ],
    inputs: {
      value: { label: "Wert", help: "Der umzurechnende Druckwert." },
      fromUnit: { label: "Von", help: "Ausgangseinheit auswählen." },
      toUnit: { label: "Zu", help: "Zieleinheit auswählen." },
    },
    outputs: {
      result: { label: "Ergebnis", help: "Der umgerechnete Druckwert." },
    },
    options: {
      Pa: "Pascal (Pa)",
      kPa: "Kilopascal (kPa)",
      MPa: "Megapascal (MPa)",
      bar: "Bar",
      psi: "Pound per square inch (psi)",
      atm: "Physikalische Atmosphäre (atm)",
      mmHg: "Millimeter Quecksilbersäule (mmHg)",
      torr: "Torr",
      inHg: "Zoll Quecksilbersäule (inHg)",
      mH2O: "Meter Wassersäule (mH₂O)",
    },
    errors: { invalidPressure: "Der Druck muss eine positive Zahl sein." },
    faq: [
      {
        question: "Was ist der Unterschied zwischen bar und psi?",
        answer:
          "1 bar = 100.000 Pa ≈ 14,5038 psi. Bar ist metrisch (Europa), psi US-üblich (Reifen, Hydraulik).",
      },
      {
        question: "Wie viele Pascal sind in einer Atmosphäre?",
        answer:
          "1 standard atmosphere (atm) entspricht per Definition genau 101.325 Pa (etwa 1,01325 bar oder 14,696 psi).",
      },
      {
        question: "Was ist der Unterschied zwischen mmHg und torr?",
        answer:
          "Sie sind nahezu identisch: 1 torr = 1/760 atm ≈ 133,3224 Pa, während 1 mmHg = 133,3224 Pa. Die Werte unterscheiden sich um weniger als 1 zu 10⁷.",
      },
      {
        question: "Wie konvertiere ich psi in kPa?",
        answer:
          "Multiplizieren Sie psi mit 6,894757 für kPa. Beispiel: 30 psi ≈ 206,84 kPa (typischer Autoreifendruck).",
      },
    ],
  },
  fr: {
    title: "Convertisseur de pression",
    short: "Convertissez entre Pa, kPa, bar, psi, atm, mmHg et plus.",
    description:
      "Convertisseur d'unités de pression gratuit. Conversion entre Pa, kPa, MPa, bar, psi, atm, mmHg, torr et inHg avec précision NIST.",
    keywords: [
      "convertisseur pression",
      "psi bar",
      "bar kpa",
      "atm mmhg",
      "pascal",
      "torr",
    ],
    inputs: {
      value: { label: "Valeur", help: "La pression à convertir." },
      fromUnit: { label: "De", help: "Sélectionnez l'unité source." },
      toUnit: { label: "À", help: "Sélectionnez l'unité cible." },
    },
    outputs: { result: { label: "Résultat", help: "La pression convertie." } },
    options: {
      Pa: "Pascal (Pa)",
      kPa: "Kilopascal (kPa)",
      MPa: "Mégapascal (MPa)",
      bar: "Bar",
      psi: "Livre par pouce carré (psi)",
      atm: "Atmosphère standard (atm)",
      mmHg: "Millimètre de mercure (mmHg)",
      torr: "Torr",
      inHg: "Pouce de mercure (inHg)",
      mH2O: "Mètre de colonne d'eau (mH₂O)",
    },
    errors: { invalidPressure: "La pression doit être un nombre positif." },
    faq: [
      {
        question: "Quelle est la différence entre bar et psi ?",
        answer:
          "1 bar = 100 000 Pa ≈ 14,5038 psi. Le bar est métrique (Europe), le psi est US (pneus, hydraulique).",
      },
      {
        question: "Combien de pascals y a-t-il dans une atmosphère ?",
        answer:
          "1 atmosphère standard (atm) équivaut exactement à 101 325 Pa par définition (environ 1,01325 bar ou 14,696 psi).",
      },
      {
        question: "Quelle est la différence entre mmHg et torr ?",
        answer:
          "Ils sont quasiment identiques : 1 torr = 1/760 atm ≈ 133,3224 Pa, tandis que 1 mmHg = 133,3224 Pa. L'écart est inférieur à 1 sur 10⁷.",
      },
      {
        question: "Comment convertir psi en kPa ?",
        answer:
          "Multipliez les psi par 6,894757 pour obtenir des kPa. Par exemple, 30 psi ≈ 206,84 kPa (pression typique des pneus).",
      },
    ],
  },
  es: {
    title: "Conversor de presión",
    short: "Convierte entre Pa, kPa, bar, psi, atm, mmHg y más.",
    description:
      "Conversor gratuito de unidades de presión. Convierte entre Pa, kPa, MPa, bar, psi, atm, mmHg, torr e inHg con precisión NIST.",
    keywords: [
      "conversor presión",
      "psi bar",
      "bar kpa",
      "atm mmhg",
      "pascal",
      "torr",
    ],
    inputs: {
      value: { label: "Valor", help: "La presión a convertir." },
      fromUnit: { label: "De", help: "Seleccione la unidad de origen." },
      toUnit: { label: "A", help: "Seleccione la unidad de destino." },
    },
    outputs: { result: { label: "Resultado", help: "La presión convertida." } },
    options: {
      Pa: "Pascal (Pa)",
      kPa: "Kilopascal (kPa)",
      MPa: "Megapascal (MPa)",
      bar: "Bar",
      psi: "Libra por pulgada cuadrada (psi)",
      atm: "Atmósfera estándar (atm)",
      mmHg: "Milímetro de mercurio (mmHg)",
      torr: "Torr",
      inHg: "Pulgada de mercurio (inHg)",
      mH2O: "Metro de columna de agua (mH₂O)",
    },
    errors: { invalidPressure: "La presión debe ser un número positivo." },
    faq: [
      {
        question: "¿Cuál es la diferencia entre bar y psi?",
        answer:
          "1 bar = 100.000 Pa ≈ 14,5038 psi. Bar es métrico (Europa), psi es estadounidense (neumáticos, hidráulica).",
      },
      {
        question: "¿Cuántos pascales hay en una atmósfera?",
        answer:
          "1 atmósfera estándar (atm) equivale por definición exactamente a 101.325 Pa (≈ 1,01325 bar o 14,696 psi).",
      },
      {
        question: "¿Cuál es la diferencia entre mmHg y torr?",
        answer:
          "Son casi idénticos: 1 torr = 1/760 atm ≈ 133,3224 Pa, mientras que 1 mmHg = 133,3224 Pa. La diferencia es menor de 1 en 10⁷.",
      },
      {
        question: "¿Cómo convierto psi a kPa?",
        answer:
          "Multiplique psi por 6,894757 para obtener kPa. Por ejemplo, 30 psi ≈ 206,84 kPa (presión típica de neumático).",
      },
    ],
  },
  it: {
    title: "Convertitore di pressione",
    short: "Converti tra Pa, kPa, bar, psi, atm, mmHg e altro.",
    description:
      "Convertitore gratuito di unità di pressione. Conversione tra Pa, kPa, MPa, bar, psi, atm, mmHg, torr e inHg con precisione NIST.",
    keywords: [
      "convertitore pressione",
      "psi bar",
      "bar kpa",
      "atm mmhg",
      "pascal",
      "torr",
    ],
    inputs: {
      value: { label: "Valore", help: "La pressione da convertire." },
      fromUnit: { label: "Da", help: "Selezionare l'unità di origine." },
      toUnit: { label: "A", help: "Selezionare l'unità di destinazione." },
    },
    outputs: {
      result: { label: "Risultato", help: "La pressione convertita." },
    },
    options: {
      Pa: "Pascal (Pa)",
      kPa: "Kilopascal (kPa)",
      MPa: "Megapascal (MPa)",
      bar: "Bar",
      psi: "Libbra per pollice quadrato (psi)",
      atm: "Atmosfera standard (atm)",
      mmHg: "Millimetro di mercurio (mmHg)",
      torr: "Torr",
      inHg: "Pollice di mercurio (inHg)",
      mH2O: "Metro di colonna d'acqua (mH₂O)",
    },
    errors: { invalidPressure: "La pressione deve essere un numero positivo." },
    faq: [
      {
        question: "Qual è la differenza tra bar e psi?",
        answer:
          "1 bar = 100.000 Pa ≈ 14,5038 psi. Il bar è metrico (Europa), lo psi è statunitense (pneumatici, idraulica).",
      },
      {
        question: "Quanti pascal ci sono in un'atmosfera?",
        answer:
          "1 atmosfera standard (atm) equivale per definizione esattamente a 101.325 Pa (circa 1,01325 bar o 14,696 psi).",
      },
      {
        question: "Qual è la differenza tra mmHg e torr?",
        answer:
          "Sono quasi identici: 1 torr = 1/760 atm ≈ 133,3224 Pa, mentre 1 mmHg = 133,3224 Pa. Lo scarto è inferiore a 1 su 10⁷.",
      },
      {
        question: "Come converto psi in kPa?",
        answer:
          "Moltiplicare psi per 6,894757 per ottenere kPa. Esempio: 30 psi ≈ 206,84 kPa (pressione tipica degli pneumatici).",
      },
    ],
  },
  ar: {
    title: "محول الضغط",
    short: "حوّل بين Pa و kPa و bar و psi و atm و mmHg ووحدات ضغط أخرى.",
    description:
      "محوّل وحدات الضغط المجاني. تحويل بين Pa و kPa و MPa و bar و psi و atm و mmHg و torr و inHg بدقة NIST.",
    keywords: ["محول الضغط", "psi bar", "bar kpa", "atm mmhg", "باسكال", "تور"],
    inputs: {
      value: { label: "القيمة", help: "قيمة الضغط المراد تحويلها." },
      fromUnit: { label: "من", help: "اختر الوحدة المصدر." },
      toUnit: { label: "إلى", help: "اختر الوحدة المستهدفة." },
    },
    outputs: { result: { label: "النتيجة", help: "قيمة الضغط المحولة." } },
    options: {
      Pa: "باسكال (Pa)",
      kPa: "كيلوباسكال (kPa)",
      MPa: "ميغاباسكال (MPa)",
      bar: "بار",
      psi: "رطل لكل بوصة مربعة (psi)",
      atm: "الجو القياسي (atm)",
      mmHg: "ملليمتر زئبق (mmHg)",
      torr: "تور",
      inHg: "بوصة زئبق (inHg)",
      mH2O: "متر عمود ماء (mH₂O)",
    },
    errors: { invalidPressure: "يجب أن يكون الضغط رقماً موجباً." },
    faq: [
      {
        question: "ما الفرق بين البار و psi؟",
        answer:
          "1 بار = 100,000 Pa ≈ 14.5038 psi. البار وحدة مترية (أوروبا)، و psi وحدة أمريكية (إطارات السيارات والهيدروليك).",
      },
      {
        question: "كم باسكال في الجو الواحد (atm)؟",
        answer:
          "1 جو قياسي (atm) يساوي بالتعريف بالضبط 101,325 Pa (حوالي 1.01325 بار أو 14.696 psi).",
      },
      {
        question: "ما الفرق بين mmHg و torr؟",
        answer:
          "هما متطابقتان تقريباً: 1 torr = 1/760 atm ≈ 133.3224 Pa، و 1 mmHg = 133.3224 Pa. الفرق أقل من 1 في 10⁷.",
      },
      {
        question: "كيف أحول psi إلى kPa؟",
        answer:
          "اضرب قيمة psi في 6.894757 للحصول على kPa. مثال: 30 psi ≈ 206.84 kPa (ضغط إطار السيارة النموذجي).",
      },
    ],
  },
  ru: {
    title: "Конвертер давления",
    short:
      "Преобразование между Па, кПа, бар, psi, атм, мм рт. ст. и другими единицами давления.",
    description:
      "Бесплатный конвертер единиц давления. Преобразование между Pa, kPa, MPa, bar, psi, atm, mmHg, torr и inHg с точностью NIST.",
    keywords: [
      "конвертер давления",
      "psi bar",
      "bar kpa",
      "atm mmhg",
      "паскаль",
      "торр",
    ],
    inputs: {
      value: {
        label: "Значение",
        help: "Значение давления для преобразования.",
      },
      fromUnit: { label: "От", help: "Выберите исходную единицу." },
      toUnit: { label: "К", help: "Выберите целевую единицу." },
    },
    outputs: {
      result: {
        label: "Результат",
        help: "Преобразованное значение давления.",
      },
    },
    options: {
      Pa: "Паскаль (Pa)",
      kPa: "Килопаскаль (kPa)",
      MPa: "Мегапаскаль (MPa)",
      bar: "Бар",
      psi: "Фунт на квадратный дюйм (psi)",
      atm: "Стандартная атмосфера (atm)",
      mmHg: "Миллиметр ртутного столба (мм рт. ст.)",
      torr: "Торр",
      inHg: "Дюйм ртутного столба (inHg)",
      mH2O: "Метр водяного столба (mH₂O)",
    },
    errors: { invalidPressure: "Давление должно быть положительным числом." },
    faq: [
      {
        question: "В чём разница между бар и psi?",
        answer:
          "1 бар = 100 000 Pa ≈ 14,5038 psi. Бар — метрическая единица (Европа), psi — американская (шины, гидравлика).",
      },
      {
        question: "Сколько паскалей в одной атмосфере?",
        answer:
          "1 стандартная атмосфера (atm) равна по определению точно 101 325 Pa (примерно 1,01325 бар или 14,696 psi).",
      },
      {
        question: "В чём разница между mmHg и torr?",
        answer:
          "Они почти идентичны: 1 torr = 1/760 atm ≈ 133,3224 Pa, тогда как 1 mmHg = 133,3224 Pa. Разница менее 1 на 10⁷.",
      },
      {
        question: "Как преобразовать psi в kPa?",
        answer:
          "Умножьте psi на 6,894757, чтобы получить kPa. Пример: 30 psi ≈ 206,84 kPa (типичное давление в автошине).",
      },
    ],
  },
  zh: {
    title: "压力转换器",
    short: "在 Pa、kPa、bar、psi、atm、mmHg 等压力单位之间转换。",
    description:
      "免费的压力单位转换器。在 Pa、kPa、MPa、bar、psi、atm、mmHg、torr 和 inHg 之间以 NIST 级精度进行转换。",
    keywords: ["压力转换", "psi bar", "bar kpa", "atm mmhg", "帕斯卡", "托"],
    inputs: {
      value: { label: "数值", help: "要转换的压力值。" },
      fromUnit: { label: "从", help: "选择源单位。" },
      toUnit: { label: "到", help: "选择目标单位。" },
    },
    outputs: { result: { label: "结果", help: "转换后的压力值。" } },
    options: {
      Pa: "帕斯卡 (Pa)",
      kPa: "千帕 (kPa)",
      MPa: "兆帕 (MPa)",
      bar: "巴",
      psi: "磅力每平方英寸 (psi)",
      atm: "标准大气压 (atm)",
      mmHg: "毫米汞柱 (mmHg)",
      torr: "托",
      inHg: "英寸汞柱 (inHg)",
      mH2O: "米水柱 (mH₂O)",
    },
    errors: { invalidPressure: "压力必须是正数。" },
    faq: [
      {
        question: "巴和 psi 有什么区别？",
        answer:
          "1 bar = 100,000 Pa ≈ 14.5038 psi。bar 是公制单位（欧洲），psi 是美制单位（轮胎、液压）。",
      },
      {
        question: "1 个大气压等于多少帕？",
        answer:
          "1 标准大气压 (atm) 按定义恰好等于 101,325 Pa（约 1.01325 bar 或 14.696 psi）。",
      },
      {
        question: "mmHg 和 torr 有什么区别？",
        answer:
          "二者几乎相同：1 torr = 1/760 atm ≈ 133.3224 Pa，1 mmHg = 133.3224 Pa，差值不到 10⁷ 分之 1。",
      },
      {
        question: "如何将 psi 转换为 kPa？",
        answer:
          "psi 乘以 6.894757 得到 kPa。例如 30 psi ≈ 206.84 kPa（典型汽车胎压）。",
      },
    ],
  },
  ja: {
    title: "圧力コンバーター",
    short: "Pa、kPa、bar、psi、atm、mmHg などの圧力単位を変換します。",
    description:
      "無料の圧力単位コンバーター。Pa、kPa、MPa、bar、psi、atm、mmHg、torr、inHg を NIST 級の精度で変換します。",
    keywords: [
      "圧力コンバーター",
      "psi bar",
      "bar kpa",
      "atm mmhg",
      "パスカル",
      "トル",
    ],
    inputs: {
      value: { label: "値", help: "変換する圧力の値。" },
      fromUnit: { label: "から", help: "ソース単位を選択します。" },
      toUnit: { label: "へ", help: "ターゲット単位を選択します。" },
    },
    outputs: { result: { label: "結果", help: "変換された圧力の値。" } },
    options: {
      Pa: "パスカル (Pa)",
      kPa: "キロパスカル (kPa)",
      MPa: "メガパスカル (MPa)",
      bar: "バール (bar)",
      psi: "重量ポンド毎平方インチ (psi)",
      atm: "標準大気圧 (atm)",
      mmHg: "水銀柱ミリメートル (mmHg)",
      torr: "トル (torr)",
      inHg: "水銀柱インチ (inHg)",
      mH2O: "水柱メートル (mH₂O)",
    },
    errors: { invalidPressure: "圧力は正の数である必要があります。" },
    faq: [
      {
        question: "bar と psi の違いは？",
        answer:
          "1 bar = 100,000 Pa ≈ 14.5038 psi。bar はメートル系（ヨーロッパ）、psi は米国系（タイヤ、油圧）。",
      },
      {
        question: "1 気圧は何パスカルですか？",
        answer:
          "1 標準気圧 (atm) は定義により正確に 101,325 Pa（約 1.01325 bar または 14.696 psi）です。",
      },
      {
        question: "mmHg と torr の違いは？",
        answer:
          "ほぼ同じです：1 torr = 1/760 atm ≈ 133.3224 Pa、1 mmHg = 133.3224 Pa で、差は 10⁷ 分の 1 以下です。",
      },
      {
        question: "psi を kPa に変換するには？",
        answer:
          "psi に 6.894757 を掛けると kPa になります。例: 30 psi ≈ 206.84 kPa（一般的な車のタイヤ空気圧）。",
      },
    ],
  },
  ko: {
    title: "압력 변환기",
    short:
      "Pa, kPa, bar, psi, atm, mmHg 및 기타 압력 단위 사이에서 변환하세요.",
    description:
      "무료 압력 단위 변환기. Pa, kPa, MPa, bar, psi, atm, mmHg, torr, inHg 사이를 NIST 수준의 정밀도로 변환합니다.",
    keywords: [
      "압력 변환기",
      "psi bar",
      "bar kpa",
      "atm mmhg",
      "파스칼",
      "토르",
    ],
    inputs: {
      value: { label: "값", help: "변환할 압력 값." },
      fromUnit: { label: "에서", help: "원본 단위 선택." },
      toUnit: { label: "으로", help: "대상 단위 선택." },
    },
    outputs: { result: { label: "결과", help: "변환된 압력 값." } },
    options: {
      Pa: "파스칼 (Pa)",
      kPa: "킬로파스칼 (kPa)",
      MPa: "메가파스칼 (MPa)",
      bar: "바 (bar)",
      psi: "제곱인치당 파운드 (psi)",
      atm: "표준 대기압 (atm)",
      mmHg: "수은주 밀리미터 (mmHg)",
      torr: "토르 (torr)",
      inHg: "수은주 인치 (inHg)",
      mH2O: "수주 미터 (mH₂O)",
    },
    errors: { invalidPressure: "압력은 양수여야 합니다." },
    faq: [
      {
        question: "bar 와 psi 의 차이는?",
        answer:
          "1 bar = 100,000 Pa ≈ 14.5038 psi. bar 는 미터법(유럽)이고, psi 는 미국식(타이어·유압)입니다.",
      },
      {
        question: "1 기압은 몇 파스칼인가요?",
        answer:
          "1 표준 대기압(atm)은 정의상 정확히 101,325 Pa 입니다 (약 1.01325 bar 또는 14.696 psi).",
      },
      {
        question: "mmHg 와 torr 의 차이는?",
        answer:
          "거의 동일합니다: 1 torr = 1/760 atm ≈ 133.3224 Pa, 1 mmHg = 133.3224 Pa. 차이는 10⁷ 분의 1 미만입니다.",
      },
      {
        question: "psi 를 kPa 로 변환하려면?",
        answer:
          "psi 에 6.894757 을 곱하면 kPa 입니다. 예: 30 psi ≈ 206.84 kPa (일반 자동차 타이어 압력).",
      },
    ],
  },
  hi: {
    title: "दबाव परिवर्तक",
    short:
      "Pa, kPa, bar, psi, atm, mmHg और अन्य दबाव इकाइयों के बीच रूपांतरण करें।",
    description:
      "मुफ्त दबाव इकाई परिवर्तक। Pa, kPa, MPa, bar, psi, atm, mmHg, torr और inHg के बीच NIST स्तर की सटीकता से रूपांतरण।",
    keywords: [
      "दबाव परिवर्तक",
      "psi bar",
      "bar kpa",
      "atm mmhg",
      "पास्कल",
      "टोर",
    ],
    inputs: {
      value: { label: "मान", help: "रूपांतरण के लिए दबाव मान।" },
      fromUnit: { label: "से", help: "स्रोत इकाई चुनें।" },
      toUnit: { label: "को", help: "लक्ष्य इकाई चुनें।" },
    },
    outputs: { result: { label: "परिणाम", help: "रूपांतरित दबाव मान।" } },
    options: {
      Pa: "पास्कल (Pa)",
      kPa: "किलोपास्कल (kPa)",
      MPa: "मेगापास्कल (MPa)",
      bar: "बार (bar)",
      psi: "पाउंड प्रति वर्ग इंच (psi)",
      atm: "मानक वायुमंडल (atm)",
      mmHg: "मिलीमीटर मरकरी (mmHg)",
      torr: "टोर (torr)",
      inHg: "इंच मरकरी (inHg)",
      mH2O: "मीटर जल स्तंभ (mH₂O)",
    },
    errors: { invalidPressure: "दबाव एक धनात्मक संख्या होनी चाहिए।" },
    faq: [
      {
        question: "bar और psi में क्या अंतर है?",
        answer:
          "1 bar = 100,000 Pa ≈ 14.5038 psi। bar मीट्रिक है (यूरोप), psi अमेरिकी है (टायर, हाइड्रोलिक)।",
      },
      {
        question: "एक वायुमंडल में कितने पास्कल होते हैं?",
        answer:
          "1 मानक वायुमंडल (atm) परिभाषा के अनुसार ठीक 101,325 Pa के बराबर है (लगभग 1.01325 bar या 14.696 psi)।",
      },
      {
        question: "mmHg और torr में क्या अंतर है?",
        answer:
          "वे लगभग समान हैं: 1 torr = 1/760 atm ≈ 133.3224 Pa, और 1 mmHg = 133.3224 Pa। अंतर 10⁷ में 1 से कम है।",
      },
      {
        question: "psi को kPa में कैसे बदलें?",
        answer:
          "psi को 6.894757 से गुणा करें ताकि kPa प्राप्त हो। उदाहरण: 30 psi ≈ 206.84 kPa (सामान्य कार टायर दबाव)।",
      },
    ],
  },
};

export default i18n;
