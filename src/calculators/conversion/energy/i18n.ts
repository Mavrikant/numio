import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Energy Converter",
    short: "Convert between joules, calories, kWh, BTU, electronvolts and more.",
    description:
      "Free energy unit converter. Convert between J, kJ, MJ, cal, kcal, Wh, kWh, BTU, ft·lb and eV with NIST-grade precision.",
    keywords: [
      "energy converter",
      "joules to calories",
      "kwh to btu",
      "kcal to kj",
      "electronvolt converter",
      "ft-lb to joules",
    ],
    inputs: {
      value: { label: "Value", help: "The energy value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: { result: { label: "Result", help: "The converted energy value." } },
    options: {
      J: "Joule (J)",
      kJ: "Kilojoule (kJ)",
      MJ: "Megajoule (MJ)",
      cal: "Calorie (cal)",
      kcal: "Kilocalorie (kcal / food calorie)",
      Wh: "Watt-hour (Wh)",
      kWh: "Kilowatt-hour (kWh)",
      BTU: "British thermal unit (BTU)",
      ft_lb: "Foot-pound (ft·lb)",
      eV: "Electronvolt (eV)",
    },
    errors: { invalidEnergy: "Energy must be a positive number." },
    faq: [
      {
        question: "What is a kilowatt-hour (kWh)?",
        answer: "A kilowatt-hour is the energy delivered by 1 kilowatt of power over 1 hour, equal to exactly 3,600,000 joules (3.6 MJ). It is the standard unit for electricity billing.",
      },
      {
        question: "What is the difference between a calorie and a Calorie (kcal)?",
        answer: "The 'food Calorie' (capital C) used on nutrition labels is actually a kilocalorie (kcal): 1 kcal = 1,000 cal = 4,184 J.",
      },
      {
        question: "How many joules are in a BTU?",
        answer: "1 International Table BTU (BTU_IT) equals 1,055.05585262 joules. It is widely used in HVAC and US heating/cooling specifications.",
      },
      {
        question: "What is an electronvolt (eV) used for?",
        answer: "The electronvolt is a tiny energy unit used in atomic, nuclear and particle physics. 1 eV = 1.602176634 × 10⁻¹⁹ joules (CODATA exact value).",
      },
    ],
  },
  nl: {
    title: "Energy Converteerer",
    short: "Converteer between joules, calories, kWh, BTU, electronvolts and more.",
    description:
      "Gratis energy unit converteerer. Converteer between J, kJ, MJ, cal, kcal, Wh, kWh, BTU, ft·lb and eV with NIST-grade precision.",
    keywords: [
      "energy converteerer",
      "joules to calories",
      "kwh to btu",
      "kcal to kj",
      "electronvolt converteerer",
      "ft-lb to joules",
    ],
    inputs: {
      value: { label: "Waarde", help: "The energy value to converteer." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: { result: { label: "Resultaat", help: "The converteered energy value." } },
    options: {
      J: "Joule (J)",
      kJ: "Kilojoule (kJ)",
      MJ: "Megajoule (MJ)",
      cal: "Calorie (cal)",
      kcal: "Kilocalorie (kcal / food calorie)",
      Wh: "Watt-hour (Wh)",
      kWh: "Kilowatt-hour (kWh)",
      BTU: "British thermal unit (BTU)",
      ft_lb: "Foot-pound (ft·lb)",
      eV: "Electronvolt (eV)",
    },
    errors: { invalidEnergy: "Energy must be a positive nummer." },
    faq: [
      {
        question: "What is a kilowatt-hour (kWh)?",
        answer: "A kilowatt-hour is the energy delivered by 1 kilowatt of power over 1 hour, equal to exactly 3,600,000 joules (3.6 MJ). It is the standard unit for electricity billing.",
      },
      {
        question: "What is the difference between a calorie and a Calorie (kcal)?",
        answer: "The 'food Calorie' (capital C) used on nutrition labels is actually a kilocalorie (kcal): 1 kcal = 1,000 cal = 4,184 J.",
      },
      {
        question: "How many joules are in a BTU?",
        answer: "1 International Table BTU (BTU_IT) equals 1,055.05585262 joules. It is widely used in HVAC and US heating/cooling specifications.",
      },
      {
        question: "What is an electronvolt (eV) used for?",
        answer: "The electronvolt is a tiny energy unit used in atomic, nuclear and particle physics. 1 eV = 1.602176634 × 10⁻¹⁹ joules (CODATA exact value).",
      },
    ],
  },

  pl: {
    title: "Energy Konwerter",
    short: "Konwertuj between joules, calories, kWh, BTU, electronvolts and more.",
    description:
      "Darmowy energy unit konwerter. Konwertuj between J, kJ, MJ, cal, kcal, Wh, kWh, BTU, ft·lb and eV with NIST-grade precision.",
    keywords: [
      "energy konwerter",
      "joules to calories",
      "kwh to btu",
      "kcal to kj",
      "electronvolt konwerter",
      "ft-lb to joules",
    ],
    inputs: {
      value: { label: "Wartość", help: "The energy value to konwertuj." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: { result: { label: "Wynik", help: "The konwertujed energy value." } },
    options: {
      J: "Joule (J)",
      kJ: "Kilojoule (kJ)",
      MJ: "Megajoule (MJ)",
      cal: "Kaloria (cal)",
      kcal: "Kilocalorie (kcal / food calorie)",
      Wh: "Watt-hour (Wh)",
      kWh: "Kilowatt-hour (kWh)",
      BTU: "British thermal unit (BTU)",
      ft_lb: "Foot-pound (ft·lb)",
      eV: "Electronvolt (eV)",
    },
    errors: { invalidEnergy: "Energy must be a positive liczba." },
    faq: [
      {
        question: "What is a kilowatt-hour (kWh)?",
        answer: "A kilowatt-hour is the energy delivered by 1 kilowatt of power over 1 hour, equal to exactly 3,600,000 joules (3.6 MJ). It is the standard unit for electricity billing.",
      },
      {
        question: "What is the difference between a calorie and a Kaloria (kcal)?",
        answer: "The 'food Kaloria' (capital C) used on nutrition labels is actually a kilocalorie (kcal): 1 kcal = 1,000 cal = 4,184 J.",
      },
      {
        question: "How many joules are in a BTU?",
        answer: "1 International Table BTU (BTU_IT) equals 1,055.05585262 joules. It is widely used in HVAC and US heating/cooling specifications.",
      },
      {
        question: "What is an electronvolt (eV) used for?",
        answer: "The electronvolt is a tiny energy unit used in atomic, nuclear and particle physics. 1 eV = 1.602176634 × 10⁻¹⁹ joules (CODATA exact value).",
      },
    ],
  },
  pt: {
    title: "Conversor de Energia",
    short: "Converta entre joules, calorias, kWh e outras unidades de energia.",
    description:
      "Conversor gratuito de energia. Converta entre joules, calorias, kilocalorias, kWh, BTU e outras unidades de energia.",
    keywords: ["conversor energia", "joules calorias", "kWh BTU", "kcal", "unidades energia"],
    inputs: {
      value: { label: "Value", help: "The energy value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: { result: { label: "Result", help: "The converted energy value." } },
    options: {
      J: "Joule (J)",
      kJ: "Kilojoule (kJ)",
      MJ: "Megajoule (MJ)",
      cal: "Calorie (cal)",
      kcal: "Kilocalorie (kcal / food calorie)",
      Wh: "Watt-hour (Wh)",
      kWh: "Kilowatt-hour (kWh)",
      BTU: "British thermal unit (BTU)",
      ft_lb: "Foot-pound (ft·lb)",
      eV: "Electronvolt (eV)",
    },
    errors: { invalidEnergy: "Energy must be a positive number." },
    faq: [
      {
        question: "What is a kilowatt-hour (kWh)?",
        answer: "A kilowatt-hour is the energy delivered by 1 kilowatt of power over 1 hour, equal to exactly 3,600,000 joules (3.6 MJ). It is the standard unit for electricity billing.",
      },
      {
        question: "What is the difference between a calorie and a Calorie (kcal)?",
        answer: "The 'food Calorie' (capital C) used on nutrition labels is actually a kilocalorie (kcal): 1 kcal = 1,000 cal = 4,184 J.",
      },
      {
        question: "How many joules are in a BTU?",
        answer: "1 International Table BTU (BTU_IT) equals 1,055.05585262 joules. It is widely used in HVAC and US heating/cooling specifications.",
      },
      {
        question: "What is an electronvolt (eV) used for?",
        answer: "The electronvolt is a tiny energy unit used in atomic, nuclear and particle physics. 1 eV = 1.602176634 × 10⁻¹⁹ joules (CODATA exact value).",
      },
    ],
  },
  id: {
    title: "Konverter Energi",
    short: "Konversi antara joule, kalori, kWh, dan satuan energi lainnya.",
    description:
      "Konverter energi gratis. Konversi antara joule, kalori, kilokalori, kWh, BTU, dan satuan energi lainnya.",
    keywords: ["konverter energi", "joule kalori", "kWh BTU", "kkal", "satuan energi"],
    inputs: {
      value: { label: "Value", help: "The energy value to convert." },
      fromUnit: { label: "From", help: "Select the source unit." },
      toUnit: { label: "To", help: "Select the target unit." },
    },
    outputs: { result: { label: "Result", help: "The converted energy value." } },
    options: {
      J: "Joule (J)",
      kJ: "Kilojoule (kJ)",
      MJ: "Megajoule (MJ)",
      cal: "Calorie (cal)",
      kcal: "Kilocalorie (kcal / food calorie)",
      Wh: "Watt-hour (Wh)",
      kWh: "Kilowatt-hour (kWh)",
      BTU: "British thermal unit (BTU)",
      ft_lb: "Foot-pound (ft·lb)",
      eV: "Electronvolt (eV)",
    },
    errors: { invalidEnergy: "Energy must be a positive number." },
    faq: [
      {
        question: "What is a kilowatt-hour (kWh)?",
        answer: "A kilowatt-hour is the energy delivered by 1 kilowatt of power over 1 hour, equal to exactly 3,600,000 joules (3.6 MJ). It is the standard unit for electricity billing.",
      },
      {
        question: "What is the difference between a calorie and a Calorie (kcal)?",
        answer: "The 'food Calorie' (capital C) used on nutrition labels is actually a kilocalorie (kcal): 1 kcal = 1,000 cal = 4,184 J.",
      },
      {
        question: "How many joules are in a BTU?",
        answer: "1 International Table BTU (BTU_IT) equals 1,055.05585262 joules. It is widely used in HVAC and US heating/cooling specifications.",
      },
      {
        question: "What is an electronvolt (eV) used for?",
        answer: "The electronvolt is a tiny energy unit used in atomic, nuclear and particle physics. 1 eV = 1.602176634 × 10⁻¹⁹ joules (CODATA exact value).",
      },
    ],
  },

  tr: {
    title: "Enerji Dönüştürücü",
    short: "Joule, kalori, kWh, BTU, elektronvolt ve daha fazlası arasında dönüşüm.",
    description:
      "Ücretsiz enerji birimi dönüştürücü. J, kJ, MJ, cal, kcal, Wh, kWh, BTU, ft·lb ve eV arasında NIST hassasiyetiyle dönüşüm.",
    keywords: ["enerji dönüştürücü", "joule kalori", "kwh btu", "kcal kj", "elektronvolt"],
    inputs: {
      value: { label: "Değer", help: "Dönüştürülecek enerji değeri." },
      fromUnit: { label: "Kaynak", help: "Kaynak birimi seçin." },
      toUnit: { label: "Hedef", help: "Hedef birimi seçin." },
    },
    outputs: { result: { label: "Sonuç", help: "Dönüştürülen enerji değeri." } },
    options: {
      J: "Joule (J)",
      kJ: "Kilojoule (kJ)",
      MJ: "Megajoule (MJ)",
      cal: "Kalori (cal)",
      kcal: "Kilokalori (kcal / gıda kalorisi)",
      Wh: "Watt-saat (Wh)",
      kWh: "Kilowatt-saat (kWh)",
      BTU: "İngiliz ısı birimi (BTU)",
      ft_lb: "Foot-pound (ft·lb)",
      eV: "Elektronvolt (eV)",
    },
    errors: { invalidEnergy: "Enerji pozitif bir sayı olmalıdır." },
    faq: [
      {
        question: "Kilowatt-saat (kWh) nedir?",
        answer: "Kilowatt-saat, 1 kilowatt gücün 1 saatte sağladığı enerjidir; tam olarak 3.600.000 joule'e (3,6 MJ) eşittir. Elektrik faturalandırmasının standart birimidir.",
      },
      {
        question: "Kalori ile büyük 'C' Kalori (kcal) arasındaki fark nedir?",
        answer: "Beslenme etiketlerindeki 'gıda Kalorisi' (büyük C) aslında bir kilokaloridir (kcal): 1 kcal = 1.000 cal = 4.184 J.",
      },
      {
        question: "Bir BTU'da kaç joule vardır?",
        answer: "1 Uluslararası Tablo BTU'su (BTU_IT) 1.055,05585262 joule'e eşittir. HVAC ve ABD ısıtma/soğutma sistemlerinde yaygın olarak kullanılır.",
      },
      {
        question: "Elektronvolt (eV) ne için kullanılır?",
        answer: "Elektronvolt, atom, çekirdek ve parçacık fiziğinde kullanılan çok küçük bir enerji birimidir. 1 eV = 1,602176634 × 10⁻¹⁹ joule (CODATA tam değeri).",
      },
    ],
  },
  de: {
    title: "Energieumrechner",
    short: "Rechnen Sie zwischen Joule, Kalorien, kWh, BTU, Elektronenvolt und mehr um.",
    description:
      "Kostenloser Energieeinheiten-Umrechner. Umrechnung zwischen J, kJ, MJ, cal, kcal, Wh, kWh, BTU, ft·lb und eV mit NIST-Genauigkeit.",
    keywords: ["energieumrechner", "joule kalorien", "kwh btu", "kcal kj", "elektronenvolt"],
    inputs: {
      value: { label: "Wert", help: "Der umzurechnende Energiewert." },
      fromUnit: { label: "Von", help: "Ausgangseinheit auswählen." },
      toUnit: { label: "Zu", help: "Zieleinheit auswählen." },
    },
    outputs: { result: { label: "Ergebnis", help: "Der umgerechnete Energiewert." } },
    options: {
      J: "Joule (J)",
      kJ: "Kilojoule (kJ)",
      MJ: "Megajoule (MJ)",
      cal: "Kalorie (cal)",
      kcal: "Kilokalorie (kcal / Nahrungskalorie)",
      Wh: "Wattstunde (Wh)",
      kWh: "Kilowattstunde (kWh)",
      BTU: "British thermal unit (BTU)",
      ft_lb: "Foot-pound (ft·lb)",
      eV: "Elektronenvolt (eV)",
    },
    errors: { invalidEnergy: "Die Energie muss eine positive Zahl sein." },
    faq: [
      {
        question: "Was ist eine Kilowattstunde (kWh)?",
        answer: "Eine Kilowattstunde ist die Energie, die 1 Kilowatt Leistung in 1 Stunde liefert — genau 3.600.000 Joule (3,6 MJ). Sie ist die Standardeinheit der Stromabrechnung.",
      },
      {
        question: "Was ist der Unterschied zwischen Kalorie und Kilokalorie (kcal)?",
        answer: "Die »Lebensmittel-Kalorie« auf Nährwertangaben ist tatsächlich eine Kilokalorie (kcal): 1 kcal = 1.000 cal = 4.184 J.",
      },
      {
        question: "Wie viele Joule sind in einer BTU?",
        answer: "1 International Table BTU (BTU_IT) entspricht 1.055,05585262 Joule. Sie wird weit verbreitet in HVAC und US-Heiz-/Kühlspezifikationen verwendet.",
      },
      {
        question: "Wofür wird ein Elektronenvolt (eV) verwendet?",
        answer: "Das Elektronenvolt ist eine winzige Energieeinheit in der Atom-, Kern- und Teilchenphysik. 1 eV = 1,602176634 × 10⁻¹⁹ Joule (exakter CODATA-Wert).",
      },
    ],
  },
  fr: {
    title: "Convertisseur d'énergie",
    short: "Convertissez entre joules, calories, kWh, BTU, électronvolts et plus.",
    description:
      "Convertisseur d'unités d'énergie gratuit. Conversion entre J, kJ, MJ, cal, kcal, Wh, kWh, BTU, ft·lb et eV avec précision NIST.",
    keywords: ["convertisseur énergie", "joules calories", "kwh btu", "kcal kj", "électronvolt"],
    inputs: {
      value: { label: "Valeur", help: "L'énergie à convertir." },
      fromUnit: { label: "De", help: "Sélectionnez l'unité source." },
      toUnit: { label: "À", help: "Sélectionnez l'unité cible." },
    },
    outputs: { result: { label: "Résultat", help: "L'énergie convertie." } },
    options: {
      J: "Joule (J)",
      kJ: "Kilojoule (kJ)",
      MJ: "Mégajoule (MJ)",
      cal: "Calorie (cal)",
      kcal: "Kilocalorie (kcal / Calorie alimentaire)",
      Wh: "Wattheure (Wh)",
      kWh: "Kilowattheure (kWh)",
      BTU: "British thermal unit (BTU)",
      ft_lb: "Pied-livre (ft·lb)",
      eV: "Électronvolt (eV)",
    },
    errors: { invalidEnergy: "L'énergie doit être un nombre positif." },
    faq: [
      {
        question: "Qu'est-ce qu'un kilowattheure (kWh) ?",
        answer: "Un kilowattheure est l'énergie fournie par 1 kilowatt de puissance pendant 1 heure, soit exactement 3 600 000 joules (3,6 MJ). C'est l'unité standard de facturation électrique.",
      },
      {
        question: "Quelle est la différence entre une calorie et une Calorie (kcal) ?",
        answer: "La « Calorie alimentaire » (C majuscule) des étiquettes nutritionnelles est en réalité une kilocalorie (kcal) : 1 kcal = 1 000 cal = 4 184 J.",
      },
      {
        question: "Combien de joules y a-t-il dans un BTU ?",
        answer: "1 BTU International Table (BTU_IT) équivaut à 1 055,05585262 joules. Il est très utilisé en CVC et dans les spécifications de chauffage/climatisation aux États-Unis.",
      },
      {
        question: "À quoi sert un électronvolt (eV) ?",
        answer: "L'électronvolt est une unité d'énergie minuscule utilisée en physique atomique, nucléaire et des particules. 1 eV = 1,602176634 × 10⁻¹⁹ joule (valeur exacte CODATA).",
      },
    ],
  },
  es: {
    title: "Conversor de energía",
    short: "Convierte entre julios, calorías, kWh, BTU, electronvoltios y más.",
    description:
      "Conversor gratuito de unidades de energía. Convierte entre J, kJ, MJ, cal, kcal, Wh, kWh, BTU, ft·lb y eV con precisión NIST.",
    keywords: ["conversor energía", "julios calorías", "kwh btu", "kcal kj", "electronvoltio"],
    inputs: {
      value: { label: "Valor", help: "La energía a convertir." },
      fromUnit: { label: "De", help: "Seleccione la unidad de origen." },
      toUnit: { label: "A", help: "Seleccione la unidad de destino." },
    },
    outputs: { result: { label: "Resultado", help: "La energía convertida." } },
    options: {
      J: "Julio (J)",
      kJ: "Kilojulio (kJ)",
      MJ: "Megajulio (MJ)",
      cal: "Caloría (cal)",
      kcal: "Kilocaloría (kcal / Caloría alimentaria)",
      Wh: "Vatio-hora (Wh)",
      kWh: "Kilovatio-hora (kWh)",
      BTU: "Unidad térmica británica (BTU)",
      ft_lb: "Pie-libra (ft·lb)",
      eV: "Electronvoltio (eV)",
    },
    errors: { invalidEnergy: "La energía debe ser un número positivo." },
    faq: [
      {
        question: "¿Qué es un kilovatio-hora (kWh)?",
        answer: "Un kilovatio-hora es la energía suministrada por 1 kilovatio de potencia durante 1 hora, exactamente 3.600.000 julios (3,6 MJ). Es la unidad estándar para facturar electricidad.",
      },
      {
        question: "¿Cuál es la diferencia entre caloría y Caloría (kcal)?",
        answer: "La 'Caloría alimentaria' (C mayúscula) de las etiquetas es en realidad una kilocaloría (kcal): 1 kcal = 1.000 cal = 4.184 J.",
      },
      {
        question: "¿Cuántos julios hay en un BTU?",
        answer: "1 BTU de Tabla Internacional (BTU_IT) equivale a 1.055,05585262 julios. Se usa mucho en HVAC y especificaciones de calefacción/refrigeración en EE.UU.",
      },
      {
        question: "¿Para qué se utiliza un electronvoltio (eV)?",
        answer: "El electronvoltio es una unidad de energía minúscula usada en física atómica, nuclear y de partículas. 1 eV = 1,602176634 × 10⁻¹⁹ julios (valor exacto CODATA).",
      },
    ],
  },
  it: {
    title: "Convertitore di energia",
    short: "Converti tra joule, calorie, kWh, BTU, elettronvolt e altro.",
    description:
      "Convertitore gratuito di unità di energia. Conversione tra J, kJ, MJ, cal, kcal, Wh, kWh, BTU, ft·lb ed eV con precisione NIST.",
    keywords: ["convertitore energia", "joule calorie", "kwh btu", "kcal kj", "elettronvolt"],
    inputs: {
      value: { label: "Valore", help: "L'energia da convertire." },
      fromUnit: { label: "Da", help: "Selezionare l'unità di origine." },
      toUnit: { label: "A", help: "Selezionare l'unità di destinazione." },
    },
    outputs: { result: { label: "Risultato", help: "L'energia convertita." } },
    options: {
      J: "Joule (J)",
      kJ: "Kilojoule (kJ)",
      MJ: "Megajoule (MJ)",
      cal: "Caloria (cal)",
      kcal: "Kilocaloria (kcal / Caloria alimentare)",
      Wh: "Wattora (Wh)",
      kWh: "Chilowattora (kWh)",
      BTU: "British thermal unit (BTU)",
      ft_lb: "Piede-libbra (ft·lb)",
      eV: "Elettronvolt (eV)",
    },
    errors: { invalidEnergy: "L'energia deve essere un numero positivo." },
    faq: [
      {
        question: "Cos'è un chilowattora (kWh)?",
        answer: "Un chilowattora è l'energia erogata da 1 kilowatt di potenza in 1 ora, esattamente 3.600.000 joule (3,6 MJ). È l'unità standard per la fatturazione elettrica.",
      },
      {
        question: "Qual è la differenza tra caloria e Caloria (kcal)?",
        answer: "La 'Caloria alimentare' (C maiuscola) delle etichette è in realtà una kilocaloria (kcal): 1 kcal = 1.000 cal = 4.184 J.",
      },
      {
        question: "Quanti joule ci sono in un BTU?",
        answer: "1 BTU International Table (BTU_IT) equivale a 1.055,05585262 joule. È molto usato nell'HVAC e nelle specifiche americane di riscaldamento/raffreddamento.",
      },
      {
        question: "A cosa serve un elettronvolt (eV)?",
        answer: "L'elettronvolt è un'unità di energia minuscola usata in fisica atomica, nucleare e delle particelle. 1 eV = 1,602176634 × 10⁻¹⁹ joule (valore esatto CODATA).",
      },
    ],
  },
  ar: {
    title: "محول الطاقة",
    short: "حوّل بين الجول والسعرات الحرارية و kWh و BTU والإلكترون فولت وأكثر.",
    description:
      "محوّل وحدات الطاقة المجاني. تحويل بين J و kJ و MJ و cal و kcal و Wh و kWh و BTU و ft·lb و eV بدقة NIST.",
    keywords: ["محول الطاقة", "جول سعرات", "kwh btu", "kcal kj", "إلكترون فولت"],
    inputs: {
      value: { label: "القيمة", help: "قيمة الطاقة المراد تحويلها." },
      fromUnit: { label: "من", help: "اختر الوحدة المصدر." },
      toUnit: { label: "إلى", help: "اختر الوحدة المستهدفة." },
    },
    outputs: { result: { label: "النتيجة", help: "قيمة الطاقة المحولة." } },
    options: {
      J: "جول (J)",
      kJ: "كيلوجول (kJ)",
      MJ: "ميغاجول (MJ)",
      cal: "سعرة (cal)",
      kcal: "كيلوسعرة (kcal / سعرة غذائية)",
      Wh: "واط-ساعة (Wh)",
      kWh: "كيلوواط-ساعة (kWh)",
      BTU: "وحدة حرارية بريطانية (BTU)",
      ft_lb: "قدم-رطل (ft·lb)",
      eV: "إلكترون فولت (eV)",
    },
    errors: { invalidEnergy: "يجب أن تكون الطاقة رقماً موجباً." },
    faq: [
      {
        question: "ما هي الكيلوواط-ساعة (kWh)؟",
        answer: "الكيلوواط-ساعة هي الطاقة التي يقدمها 1 كيلوواط من القدرة خلال ساعة واحدة، وتساوي بالضبط 3,600,000 جول (3.6 ميغاجول). وهي الوحدة القياسية لفواتير الكهرباء.",
      },
      {
        question: "ما الفرق بين السعرة و السعرة (kcal) في الأطعمة؟",
        answer: "‏'السعرة الغذائية' (C كبيرة) على ملصقات التغذية هي في الواقع كيلو سعرة (kcal): 1 kcal = 1,000 cal = 4,184 جول.",
      },
      {
        question: "كم جول في BTU الواحد؟",
        answer: "1 BTU جدول دولي (BTU_IT) يساوي 1,055.05585262 جول. وهو شائع في أنظمة HVAC ومواصفات التدفئة والتبريد الأمريكية.",
      },
      {
        question: "فيمَ يُستخدم الإلكترون فولت (eV)؟",
        answer: "الإلكترون فولت وحدة طاقة صغيرة جداً تُستخدم في الفيزياء الذرية والنووية وفيزياء الجسيمات. 1 eV = 1.602176634 × 10⁻¹⁹ جول (قيمة CODATA المضبوطة).",
      },
    ],
  },
  ru: {
    title: "Конвертер энергии",
    short: "Преобразование между джоулями, калориями, кВт·ч, БТЕ, электронвольтами и др.",
    description:
      "Бесплатный конвертер единиц энергии. Преобразование между J, kJ, MJ, cal, kcal, Wh, kWh, BTU, ft·lb и eV с точностью NIST.",
    keywords: ["конвертер энергии", "джоули калории", "квтч бте", "ккал кдж", "электронвольт"],
    inputs: {
      value: { label: "Значение", help: "Значение энергии для преобразования." },
      fromUnit: { label: "От", help: "Выберите исходную единицу." },
      toUnit: { label: "К", help: "Выберите целевую единицу." },
    },
    outputs: { result: { label: "Результат", help: "Преобразованное значение энергии." } },
    options: {
      J: "Джоуль (J)",
      kJ: "Килоджоуль (kJ)",
      MJ: "Мегаджоуль (MJ)",
      cal: "Калория (cal)",
      kcal: "Килокалория (kcal / пищевая калория)",
      Wh: "Ватт-час (Wh)",
      kWh: "Киловатт-час (kWh)",
      BTU: "Британская тепловая единица (BTU)",
      ft_lb: "Фут-фунт (ft·lb)",
      eV: "Электронвольт (eV)",
    },
    errors: { invalidEnergy: "Энергия должна быть положительным числом." },
    faq: [
      {
        question: "Что такое киловатт-час (кВт·ч)?",
        answer: "Киловатт-час — это энергия, которую отдаёт мощность 1 кВт за 1 час, равная точно 3 600 000 джоулям (3,6 МДж). Это стандартная единица оплаты электроэнергии.",
      },
      {
        question: "В чём разница между калорией и Калорией (ккал)?",
        answer: "«Пищевая Калория» (с большой C) на этикетках на самом деле является килокалорией (ккал): 1 ккал = 1 000 кал = 4 184 Дж.",
      },
      {
        question: "Сколько джоулей в одном BTU?",
        answer: "1 BTU International Table (BTU_IT) равен 1 055,05585262 джоулям. Широко используется в HVAC и американских спецификациях отопления/охлаждения.",
      },
      {
        question: "Для чего используется электронвольт (эВ)?",
        answer: "Электронвольт — это очень малая единица энергии, применяемая в атомной, ядерной физике и физике частиц. 1 эВ = 1,602176634 × 10⁻¹⁹ Дж (точное значение CODATA).",
      },
    ],
  },
  zh: {
    title: "能量转换器",
    short: "在焦耳、卡路里、千瓦时、BTU、电子伏特等单位之间转换。",
    description:
      "免费的能量单位转换器。在 J、kJ、MJ、cal、kcal、Wh、kWh、BTU、ft·lb 和 eV 之间以 NIST 级精度进行转换。",
    keywords: ["能量转换", "焦耳 卡路里", "千瓦时 btu", "千卡 千焦", "电子伏特"],
    inputs: {
      value: { label: "数值", help: "要转换的能量值。" },
      fromUnit: { label: "从", help: "选择源单位。" },
      toUnit: { label: "到", help: "选择目标单位。" },
    },
    outputs: { result: { label: "结果", help: "转换后的能量值。" } },
    options: {
      J: "焦耳 (J)",
      kJ: "千焦 (kJ)",
      MJ: "兆焦 (MJ)",
      cal: "卡路里 (cal)",
      kcal: "千卡 (kcal / 食物卡路里)",
      Wh: "瓦时 (Wh)",
      kWh: "千瓦时 (kWh)",
      BTU: "英热单位 (BTU)",
      ft_lb: "英尺·磅 (ft·lb)",
      eV: "电子伏特 (eV)",
    },
    errors: { invalidEnergy: "能量必须是正数。" },
    faq: [
      {
        question: "什么是千瓦时 (kWh)？",
        answer: "千瓦时是 1 千瓦功率在 1 小时内提供的能量，精确等于 3,600,000 焦耳 (3.6 MJ)，是电费的标准计量单位。",
      },
      {
        question: "卡路里 (cal) 和食物 \"Calorie\" (kcal) 有什么区别？",
        answer: "营养标签上的「食物卡路里」（大写 C）实际上是千卡 (kcal)：1 kcal = 1,000 cal = 4,184 J。",
      },
      {
        question: "1 BTU 等于多少焦耳？",
        answer: "1 国际表 BTU (BTU_IT) 等于 1,055.05585262 焦耳。广泛用于 HVAC 和美国供暖/制冷规范中。",
      },
      {
        question: "电子伏特 (eV) 用于什么？",
        answer: "电子伏特是用于原子、核物理和粒子物理的微小能量单位。1 eV = 1.602176634 × 10⁻¹⁹ J (CODATA 精确值)。",
      },
    ],
  },
  ja: {
    title: "エネルギーコンバーター",
    short: "ジュール、カロリー、kWh、BTU、電子ボルトなどを変換します。",
    description:
      "無料のエネルギー単位コンバーター。J、kJ、MJ、cal、kcal、Wh、kWh、BTU、ft·lb、eV を NIST 級の精度で変換します。",
    keywords: ["エネルギーコンバーター", "ジュール カロリー", "kwh btu", "kcal kj", "電子ボルト"],
    inputs: {
      value: { label: "値", help: "変換するエネルギーの値。" },
      fromUnit: { label: "から", help: "ソース単位を選択します。" },
      toUnit: { label: "へ", help: "ターゲット単位を選択します。" },
    },
    outputs: { result: { label: "結果", help: "変換されたエネルギーの値。" } },
    options: {
      J: "ジュール (J)",
      kJ: "キロジュール (kJ)",
      MJ: "メガジュール (MJ)",
      cal: "カロリー (cal)",
      kcal: "キロカロリー (kcal / 食物カロリー)",
      Wh: "ワット時 (Wh)",
      kWh: "キロワット時 (kWh)",
      BTU: "英熱量 (BTU)",
      ft_lb: "フィート・ポンド (ft·lb)",
      eV: "電子ボルト (eV)",
    },
    errors: { invalidEnergy: "エネルギーは正の数である必要があります。" },
    faq: [
      {
        question: "キロワット時 (kWh) とは？",
        answer: "キロワット時は 1 キロワットの電力を 1 時間使ったときのエネルギーで、正確に 3,600,000 ジュール (3.6 MJ) に等しい。電気料金の標準単位です。",
      },
      {
        question: "カロリー (cal) と栄養表示の「カロリー」(kcal) の違いは？",
        answer: "栄養表示の「食品カロリー」(大文字 C) は実際にはキロカロリー (kcal) です：1 kcal = 1,000 cal = 4,184 J。",
      },
      {
        question: "1 BTU は何ジュール？",
        answer: "1 国際表 BTU (BTU_IT) は 1,055.05585262 ジュールです。HVAC や米国の暖房・冷房仕様で広く使われています。",
      },
      {
        question: "電子ボルト (eV) は何に使われますか？",
        answer: "電子ボルトは原子物理・核物理・素粒子物理で使われる極小のエネルギー単位です。1 eV = 1.602176634 × 10⁻¹⁹ J (CODATA の正確な値)。",
      },
    ],
  },
  ko: {
    title: "에너지 변환기",
    short: "줄, 칼로리, kWh, BTU, 전자볼트 등 사이에서 변환하세요.",
    description:
      "무료 에너지 단위 변환기. J, kJ, MJ, cal, kcal, Wh, kWh, BTU, ft·lb, eV 사이를 NIST 수준의 정밀도로 변환합니다.",
    keywords: ["에너지 변환기", "줄 칼로리", "kwh btu", "kcal kj", "전자볼트"],
    inputs: {
      value: { label: "값", help: "변환할 에너지 값." },
      fromUnit: { label: "에서", help: "원본 단위 선택." },
      toUnit: { label: "으로", help: "대상 단위 선택." },
    },
    outputs: { result: { label: "결과", help: "변환된 에너지 값." } },
    options: {
      J: "줄 (J)",
      kJ: "킬로줄 (kJ)",
      MJ: "메가줄 (MJ)",
      cal: "칼로리 (cal)",
      kcal: "킬로칼로리 (kcal / 식품 칼로리)",
      Wh: "와트시 (Wh)",
      kWh: "킬로와트시 (kWh)",
      BTU: "영국 열량 단위 (BTU)",
      ft_lb: "피트파운드 (ft·lb)",
      eV: "전자볼트 (eV)",
    },
    errors: { invalidEnergy: "에너지는 양수여야 합니다." },
    faq: [
      {
        question: "킬로와트시 (kWh) 란?",
        answer: "킬로와트시는 1 킬로와트의 전력이 1 시간 동안 공급하는 에너지로 정확히 3,600,000 줄 (3.6 MJ) 입니다. 전기 요금의 표준 단위입니다.",
      },
      {
        question: "칼로리 (cal) 와 식품 \"칼로리\" (kcal) 의 차이는?",
        answer: "영양 표시의 '식품 칼로리' (대문자 C)는 실제로는 킬로칼로리 (kcal) 입니다: 1 kcal = 1,000 cal = 4,184 J.",
      },
      {
        question: "1 BTU 는 몇 줄입니까?",
        answer: "1 국제표 BTU (BTU_IT)는 1,055.05585262 줄입니다. HVAC 및 미국 난방·냉방 사양에서 널리 사용됩니다.",
      },
      {
        question: "전자볼트 (eV) 는 어디에 사용됩니까?",
        answer: "전자볼트는 원자, 핵, 입자물리학에서 사용되는 매우 작은 에너지 단위입니다. 1 eV = 1.602176634 × 10⁻¹⁹ J (CODATA 정확값).",
      },
    ],
  },
  hi: {
    title: "ऊर्जा परिवर्तक",
    short: "जूल, कैलोरी, kWh, BTU, इलेक्ट्रॉनवोल्ट और अन्य के बीच रूपांतरण करें।",
    description:
      "मुफ्त ऊर्जा इकाई परिवर्तक। J, kJ, MJ, cal, kcal, Wh, kWh, BTU, ft·lb और eV के बीच NIST स्तर की सटीकता से रूपांतरण।",
    keywords: ["ऊर्जा परिवर्तक", "जूल कैलोरी", "kwh btu", "kcal kj", "इलेक्ट्रॉनवोल्ट"],
    inputs: {
      value: { label: "मान", help: "रूपांतरण के लिए ऊर्जा मान।" },
      fromUnit: { label: "से", help: "स्रोत इकाई चुनें।" },
      toUnit: { label: "को", help: "लक्ष्य इकाई चुनें।" },
    },
    outputs: { result: { label: "परिणाम", help: "रूपांतरित ऊर्जा मान।" } },
    options: {
      J: "जूल (J)",
      kJ: "किलोजूल (kJ)",
      MJ: "मेगाजूल (MJ)",
      cal: "कैलोरी (cal)",
      kcal: "किलोकैलोरी (kcal / खाद्य कैलोरी)",
      Wh: "वाट-घंटा (Wh)",
      kWh: "किलोवाट-घंटा (kWh)",
      BTU: "ब्रिटिश ऊष्मीय इकाई (BTU)",
      ft_lb: "फुट-पाउंड (ft·lb)",
      eV: "इलेक्ट्रॉनवोल्ट (eV)",
    },
    errors: { invalidEnergy: "ऊर्जा एक धनात्मक संख्या होनी चाहिए।" },
    faq: [
      {
        question: "किलोवाट-घंटा (kWh) क्या है?",
        answer: "किलोवाट-घंटा वह ऊर्जा है जो 1 किलोवाट शक्ति 1 घंटे में देती है, जो ठीक 3,600,000 जूल (3.6 MJ) के बराबर है। यह बिजली बिलिंग की मानक इकाई है।",
      },
      {
        question: "कैलोरी और खाद्य कैलोरी (kcal) में क्या अंतर है?",
        answer: "पोषण लेबल पर लिखी 'खाद्य कैलोरी' (बड़ा C) वास्तव में किलोकैलोरी (kcal) है: 1 kcal = 1,000 cal = 4,184 J।",
      },
      {
        question: "एक BTU में कितने जूल होते हैं?",
        answer: "1 इंटरनेशनल टेबल BTU (BTU_IT) = 1,055.05585262 जूल। यह HVAC और अमेरिकी हीटिंग/कूलिंग विनिर्देशों में व्यापक रूप से उपयोग होता है।",
      },
      {
        question: "इलेक्ट्रॉनवोल्ट (eV) का उपयोग किसमें होता है?",
        answer: "इलेक्ट्रॉनवोल्ट परमाणु, नाभिकीय और कण भौतिकी में उपयोग होने वाली बहुत छोटी ऊर्जा इकाई है। 1 eV = 1.602176634 × 10⁻¹⁹ J (CODATA सटीक मान)।",
      },
    ],
  },
};

export default i18n;
