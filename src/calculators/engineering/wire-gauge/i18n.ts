import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Wire Gauge Calculator",
    short: "Calculate wire resistance, voltage drop, and ampacity for AWG/mm² sizes.",
    description:
      "Free wire gauge calculator. Enter AWG or mm², wire length, current, and material to calculate resistance, voltage drop, power loss, and ampacity rating.",
    keywords: [
      "wire gauge",
      "AWG calculator",
      "cable size",
      "voltage drop",
      "wire resistance",
      "ampacity",
      "copper wire",
    ],
    inputs: {
      sizeUnit: { label: "Size unit", help: "AWG (American Wire Gauge) or mm²" },
      wireSize: { label: "Wire size", help: "AWG number or cross-section in mm²" },
      wireLength: { label: "Wire length", help: "Length of wire in metres (single conductor)" },
      current: { label: "Current", help: "Current flowing through wire in amperes" },
      material: { label: "Conductor material", help: "Copper or aluminum" },
      frequency: { label: "Frequency", help: "DC or AC (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "Cross-section area", help: "Conductor area in mm²" },
      awgEquivalent: { label: "AWG equivalent", help: "Equivalent AWG size" },
      resistance: { label: "Resistance", help: "Total resistance in ohms" },
      voltageDrop: { label: "Voltage drop", help: "Voltage loss across wire" },
      powerLoss: { label: "Power loss", help: "Power dissipated as heat in watts" },
      ampacityRating: { label: "Ampacity rating", help: "Maximum safe continuous current" },
    },
    options: {
      sizeUnit: { awg: "AWG (American)", mm2: "mm² (Metric)" },
      material: { copper: "Copper", aluminum: "Aluminum" },
      frequency: { dc: "DC (Direct)", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "Wire size must be positive.",
      invalidLength: "Wire length must be positive.",
      invalidCurrent: "Current must be positive.",
    },
    faq: [
      {
        q: "What is AWG?",
        a: "American Wire Gauge (AWG) is a standardized system for wire diameters. Lower AWG numbers indicate thicker wires and lower resistance.",
      },
      {
        q: "Why does voltage drop matter?",
        a: "Excessive voltage drop reduces power delivery and efficiency. Electrical codes limit voltage drop to 3–5% for branch circuits.",
      },
      {
        q: "How do I choose the right wire gauge?",
        a: "Choose wire gauge based on ampacity (max safe current) and acceptable voltage drop. Consult local electrical codes and use professional guidance.",
      },
      {
        q: "Is aluminum wire suitable?",
        a: "Aluminum has higher resistance than copper but is lighter and cheaper. It requires larger gauges for the same current capacity.",
      },
      {
        q: "What is skin effect?",
        a: "At high AC frequencies, current concentrates near the wire surface, increasing effective resistance by 5–15%. This calculator adds 5% for AC.",
      },
    ],
  },
  nl: {
    title: "Draaddikte Calculator",
    short: "Bereken wire resistance, voltage drop, and ampacity for AWG/mm² groottes.",
    description:
      "Gratis wire gauge calculator. Enter AWG or mm², wire lengte, current, and material to bereken resistance, voltage drop, power loss, and ampacity rating.",
    keywords: [
      "wire gauge",
      "AWG calculator",
      "cable grootte",
      "voltage drop",
      "wire resistance",
      "ampacity",
      "copper wire",
    ],
    inputs: {
      sizeUnit: { label: "Grootte unit", help: "AWG (American Draaddikte) or mm²" },
      wireSize: { label: "Wire grootte", help: "AWG nummer or cross-section in mm²" },
      wireLength: { label: "Wire lengte", help: "Lengte of wire in metres (single conductor)" },
      current: { label: "Current", help: "Current flowing through wire in amperes" },
      material: { label: "Conductor material", help: "Copper or aluminum" },
      frequency: { label: "Frequency", help: "DC or AC (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "Cross-section area", help: "Conductor area in mm²" },
      awgEquivalent: { label: "AWG equivalent", help: "Equivalent AWG grootte" },
      resistance: { label: "Resistance", help: "Total resistance in ohms" },
      voltageDrop: { label: "Voltage drop", help: "Voltage loss across wire" },
      powerLoss: { label: "Power loss", help: "Power dissipated as heat in watts" },
      ampacityRating: { label: "Ampacity rating", help: "Maximum safe continuous current" },
    },
    options: {
      sizeUnit: { awg: "AWG (American)", mm2: "mm² (Metric)" },
      material: { copper: "Copper", aluminum: "Aluminum" },
      frequency: { dc: "DC (Direct)", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "Wire grootte must be positive.",
      invalidLength: "Wire lengte must be positive.",
      invalidCurrent: "Current must be positive.",
    },
    faq: [
      {
        q: "What is AWG?",
        a: "American Draaddikte (AWG) is a standardized system for wire diameters. Lower AWG nummers indicate thicker wires and lower resistance.",
      },
      {
        q: "Why does voltage drop matter?",
        a: "Excessive voltage drop reduces power delivery and efficiency. Electrical codes limit voltage drop to 3–5% for branch circuits.",
      },
      {
        q: "How do I choose the right wire gauge?",
        a: "Choose wire gauge based on ampacity (max safe current) and acceptable voltage drop. Consult local electrical codes and use professional guidance.",
      },
      {
        q: "Is aluminum wire suitable?",
        a: "Aluminum has higher resistance than copper but is lighter and cheaper. It requires larger gauges for the same current capacity.",
      },
      {
        q: "What is skin effect?",
        a: "At high AC frequencies, current concentrates near the wire surface, increasing effective resistance by 5–15%. This calculator adds 5% for AC.",
      },
    ],
  },

  pl: {
    title: "Grubość Przewodu Kalkulator",
    short: "Oblicz wire resistance, voltage drop, and ampacity for AWG/mm² rozmiars.",
    description:
      "Darmowy wire gauge kalkulator. Enter AWG or mm², wire długość, current, and material to oblicz resistance, voltage drop, power loss, and ampacity rating.",
    keywords: [
      "wire gauge",
      "AWG kalkulator",
      "cable rozmiar",
      "voltage drop",
      "wire resistance",
      "ampacity",
      "copper wire",
    ],
    inputs: {
      sizeUnit: { label: "Rozmiar unit", help: "AWG (American Grubość Przewodu) or mm²" },
      wireSize: { label: "Wire rozmiar", help: "AWG liczba or cross-section in mm²" },
      wireLength: { label: "Wire długość", help: "Długość of wire in metres (single conductor)" },
      current: { label: "Current", help: "Current flowing through wire in amperes" },
      material: { label: "Conductor material", help: "Copper or aluminum" },
      frequency: { label: "Frequency", help: "DC or AC (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "Cross-section area", help: "Conductor area in mm²" },
      awgEquivalent: { label: "AWG equivalent", help: "Equivalent AWG rozmiar" },
      resistance: { label: "Resistance", help: "Total resistance in ohms" },
      voltageDrop: { label: "Voltage drop", help: "Voltage loss across wire" },
      powerLoss: { label: "Power loss", help: "Power dissipated as heat in watts" },
      ampacityRating: { label: "Ampacity rating", help: "Maximum safe continuous current" },
    },
    options: {
      sizeUnit: { awg: "AWG (American)", mm2: "mm² (Metric)" },
      material: { copper: "Copper", aluminum: "Aluminum" },
      frequency: { dc: "DC (Direct)", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "Wire rozmiar must be positive.",
      invalidLength: "Wire długość must be positive.",
      invalidCurrent: "Current must be positive.",
    },
    faq: [
      {
        q: "What is AWG?",
        a: "American Grubość Przewodu (AWG) is a standardized system for wire diameters. Lower AWG liczbas indicate thicker wires and lower resistance.",
      },
      {
        q: "Why does voltage drop matter?",
        a: "Excessive voltage drop reduces power delivery and efficiency. Electrical kods limit voltage drop to 3–5% for branch circuits.",
      },
      {
        q: "How do I choose the right wire gauge?",
        a: "Choose wire gauge based on ampacity (max safe current) and acceptable voltage drop. Consult local electrical kods and use professional guidance.",
      },
      {
        q: "Is aluminum wire suitable?",
        a: "Aluminum has higher resistance than copper but is lighter and cheaper. It requires larger gauges for the same current capacity.",
      },
      {
        q: "What is skin effect?",
        a: "At high AC frequencies, current concentrates near the wire surface, increasing effective resistance by 5–15%. This kalkulator adds 5% for AC.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Calibre de Fio (AWG)",
    short: "Determine o calibre AWG necessário com base na corrente e comprimento.",
    description:
      "Calculadora gratuita de calibre de fio AWG. Determine o calibre adequado para uma instalação com base em corrente, comprimento e queda de tensão admissível.",
    keywords: ["AWG", "calibre fio", "secção condutor", "cabo elétrico", "ampacidade"],
    inputs: {
      sizeUnit: { label: "Size unit", help: "AWG (American Wire Gauge) or mm²" },
      wireSize: { label: "Wire size", help: "AWG number or cross-section in mm²" },
      wireLength: { label: "Wire length", help: "Length of wire in metres (single conductor)" },
      current: { label: "Current", help: "Current flowing through wire in amperes" },
      material: { label: "Conductor material", help: "Copper or aluminum" },
      frequency: { label: "Frequency", help: "DC or AC (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "Cross-section area", help: "Conductor area in mm²" },
      awgEquivalent: { label: "AWG equivalent", help: "Equivalent AWG size" },
      resistance: { label: "Resistance", help: "Total resistance in ohms" },
      voltageDrop: { label: "Voltage drop", help: "Voltage loss across wire" },
      powerLoss: { label: "Power loss", help: "Power dissipated as heat in watts" },
      ampacityRating: { label: "Ampacity rating", help: "Maximum safe continuous current" },
    },
    options: {
      sizeUnit: { awg: "AWG (American)", mm2: "mm² (Metric)" },
      material: { copper: "Copper", aluminum: "Aluminum" },
      frequency: { dc: "DC (Direct)", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "Wire size must be positive.",
      invalidLength: "Wire length must be positive.",
      invalidCurrent: "Current must be positive.",
    },
    faq: [
      {
        q: "What is AWG?",
        a: "American Wire Gauge (AWG) is a standardized system for wire diameters. Lower AWG numbers indicate thicker wires and lower resistance.",
      },
      {
        q: "Why does voltage drop matter?",
        a: "Excessive voltage drop reduces power delivery and efficiency. Electrical codes limit voltage drop to 3–5% for branch circuits.",
      },
      {
        q: "How do I choose the right wire gauge?",
        a: "Choose wire gauge based on ampacity (max safe current) and acceptable voltage drop. Consult local electrical codes and use professional guidance.",
      },
      {
        q: "Is aluminum wire suitable?",
        a: "Aluminum has higher resistance than copper but is lighter and cheaper. It requires larger gauges for the same current capacity.",
      },
      {
        q: "What is skin effect?",
        a: "At high AC frequencies, current concentrates near the wire surface, increasing effective resistance by 5–15%. This calculator adds 5% for AC.",
      },
    ],
  },
  id: {
    title: "Kalkulator Ukuran Kawat (AWG)",
    short: "Tentukan ukuran AWG yang diperlukan berdasarkan arus dan panjang.",
    description:
      "Kalkulator ukuran kawat AWG gratis. Tentukan ukuran kawat yang sesuai untuk instalasi berdasarkan arus, panjang, dan drop tegangan yang diizinkan.",
    keywords: ["AWG", "ukuran kawat", "luas penampang", "kabel listrik", "ampasitas"],
    inputs: {
      sizeUnit: { label: "Size unit", help: "AWG (American Wire Gauge) or mm²" },
      wireSize: { label: "Wire size", help: "AWG number or cross-section in mm²" },
      wireLength: { label: "Wire length", help: "Length of wire in metres (single conductor)" },
      current: { label: "Current", help: "Current flowing through wire in amperes" },
      material: { label: "Conductor material", help: "Copper or aluminum" },
      frequency: { label: "Frequency", help: "DC or AC (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "Cross-section area", help: "Conductor area in mm²" },
      awgEquivalent: { label: "AWG equivalent", help: "Equivalent AWG size" },
      resistance: { label: "Resistance", help: "Total resistance in ohms" },
      voltageDrop: { label: "Voltage drop", help: "Voltage loss across wire" },
      powerLoss: { label: "Power loss", help: "Power dissipated as heat in watts" },
      ampacityRating: { label: "Ampacity rating", help: "Maximum safe continuous current" },
    },
    options: {
      sizeUnit: { awg: "AWG (American)", mm2: "mm² (Metric)" },
      material: { copper: "Copper", aluminum: "Aluminum" },
      frequency: { dc: "DC (Direct)", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "Wire size must be positive.",
      invalidLength: "Wire length must be positive.",
      invalidCurrent: "Current must be positive.",
    },
    faq: [
      {
        q: "What is AWG?",
        a: "American Wire Gauge (AWG) is a standardized system for wire diameters. Lower AWG numbers indicate thicker wires and lower resistance.",
      },
      {
        q: "Why does voltage drop matter?",
        a: "Excessive voltage drop reduces power delivery and efficiency. Electrical codes limit voltage drop to 3–5% for branch circuits.",
      },
      {
        q: "How do I choose the right wire gauge?",
        a: "Choose wire gauge based on ampacity (max safe current) and acceptable voltage drop. Consult local electrical codes and use professional guidance.",
      },
      {
        q: "Is aluminum wire suitable?",
        a: "Aluminum has higher resistance than copper but is lighter and cheaper. It requires larger gauges for the same current capacity.",
      },
      {
        q: "What is skin effect?",
        a: "At high AC frequencies, current concentrates near the wire surface, increasing effective resistance by 5–15%. This calculator adds 5% for AC.",
      },
    ],
  },

  tr: {
    title: "Tel Kalınlığı Hesaplayıcısı",
    short: "AWG/mm² boyutları için tel direnci, gerilim düşmesi ve taşıma kapasitesini hesaplayın.",
    description:
      "Ücretsiz tel kalınlığı hesaplayıcısı. AWG veya mm² değerini, tel uzunluğunu, akımı ve malzemeyi girin. Direnç, gerilim düşmesi, güç kaybı ve maksimum akım değerlerini hesaplayın.",
    keywords: [
      "tel kalınlığı",
      "AWG hesaplayıcısı",
      "kablo boyutu",
      "gerilim düşmesi",
      "tel direnci",
      "maksimum akım",
      "bakır tel",
    ],
    inputs: {
      sizeUnit: { label: "Boyut birimi", help: "AWG (Amerikan) veya mm²" },
      wireSize: { label: "Tel kalınlığı", help: "AWG numarası veya mm² cinsinden kesit alanı" },
      wireLength: { label: "Tel uzunluğu", help: "Tel uzunluğu (metre cinsinden)" },
      current: { label: "Akım", help: "Telden geçen akım (amper cinsinden)" },
      material: { label: "İletken malzeme", help: "Bakır veya alüminyum" },
      frequency: { label: "Frekans", help: "DC veya AC (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "Kesit alanı", help: "İletkenin alanı mm² cinsinden" },
      awgEquivalent: { label: "Eşdeğer AWG", help: "Eşdeğer AWG boyutu" },
      resistance: { label: "Direnç", help: "Toplam direnç (ohm)" },
      voltageDrop: { label: "Gerilim düşmesi", help: "Tel boyunca gerilim kaybı" },
      powerLoss: { label: "Güç kaybı", help: "Isı olarak kaybedilen güç (watt)" },
      ampacityRating: { label: "Maksimum akım", help: "Güvenli devamlı akım değeri" },
    },
    options: {
      sizeUnit: { awg: "AWG (Amerikan)", mm2: "mm² (Metrik)" },
      material: { copper: "Bakır", aluminum: "Alüminyum" },
      frequency: { dc: "DC (Doğru)", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "Tel kalınlığı pozitif olmalıdır.",
      invalidLength: "Tel uzunluğu pozitif olmalıdır.",
      invalidCurrent: "Akım pozitif olmalıdır.",
    },
    faq: [
      {
        q: "AWG nedir?",
        a: "American Wire Gauge (AWG), tel çapı için standartlaştırılmış bir sistemdir. Düşük AWG numaraları daha kalın telleri gösterir.",
      },
      {
        q: "Gerilim düşmesi neden önemlidir?",
        a: "Aşırı gerilim düşmesi güç teslimini ve verimliliği azaltır. Elektrik kodları gerilim düşmesini %3–5 ile sınırlandırır.",
      },
      {
        q: "Doğru tel kalınlığını nasıl seçerim?",
        a: "Tel kalınlığını maksimum akım ve kabul edilebilir gerilim düşmesine göre seçin. Yerel elektrik kodlarını ve profesyonel rehberliği kullanın.",
      },
      {
        q: "Alüminyum tel uygun mudur?",
        a: "Alüminyumun bakırdan daha yüksek direnci vardır ancak daha hafif ve ucuzdur. Aynı akım için daha kalın boyutlar gerekir.",
      },
      {
        q: "Deri etkisi nedir?",
        a: "Yüksek AC frekanslarında akım tel yüzeyine yoğunlaşır, efektif direnci %5–15 artar. Bu hesaplayıcı AC için %5 ekler.",
      },
    ],
  },
  de: {
    title: "Drahtstärken-Rechner",
    short: "Berechnen Sie Drahtwiderstand, Spannungsabfall und Stromtragfähigkeit für AWG/mm²-Größen.",
    description:
      "Kostenloser Drahtstärken-Rechner. Geben Sie AWG oder mm², Drahtlänge, Strom und Material ein, um Widerstand, Spannungsabfall und Stromtragfähigkeit zu berechnen.",
    keywords: [
      "drahtstärke",
      "AWG-rechner",
      "kabelquerschnitt",
      "spannungsabfall",
      "drahtwiderstand",
      "stromtragfähigkeit",
      "kupferdraht",
    ],
    inputs: {
      sizeUnit: { label: "Einheit", help: "AWG (Amerikanisch) oder mm²" },
      wireSize: { label: "Drahtstärke", help: "AWG-Nummer oder Querschnitt in mm²" },
      wireLength: { label: "Drahtlänge", help: "Drahtlänge in Metern" },
      current: { label: "Strom", help: "Strom durch Draht in Ampere" },
      material: { label: "Material", help: "Kupfer oder Aluminium" },
      frequency: { label: "Frequenz", help: "DC oder AC (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "Querschnittsfläche", help: "Leiterquerschnitt in mm²" },
      awgEquivalent: { label: "AWG-Äquivalent", help: "Entsprechende AWG-Größe" },
      resistance: { label: "Widerstand", help: "Gesamtwiderstand in Ohm" },
      voltageDrop: { label: "Spannungsabfall", help: "Spannungsverlust im Draht" },
      powerLoss: { label: "Leistungsverlust", help: "Wärmeverlust in Watt" },
      ampacityRating: { label: "Stromtragfähigkeit", help: "Maximaler sicherer Dauerstrom" },
    },
    options: {
      sizeUnit: { awg: "AWG (Amerikanisch)", mm2: "mm² (Metrisch)" },
      material: { copper: "Kupfer", aluminum: "Aluminium" },
      frequency: { dc: "DC (Gleichstrom)", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "Drahtstärke muss positiv sein.",
      invalidLength: "Drahtlänge muss positiv sein.",
      invalidCurrent: "Strom muss positiv sein.",
    },
    faq: [
      {
        q: "Was ist AWG?",
        a: "American Wire Gauge (AWG) ist ein standardisiertes System für Drahtstärken. Niedrigere AWG-Nummern zeigen dickere Drähte an.",
      },
      {
        q: "Warum ist Spannungsabfall wichtig?",
        a: "Hoher Spannungsabfall reduziert Leistungsabgabe und Effizienz. Elektricodes begrenzen Spannungsabfall auf 3–5%.",
      },
      {
        q: "Wie wähle ich die richtige Drahtstärke?",
        a: "Wählen Sie basierend auf maximaler Stromtragfähigkeit und akzeptablem Spannungsabfall. Konsultieren Sie Elektricodes.",
      },
      {
        q: "Ist Aluminium geeignet?",
        a: "Aluminium hat höheren Widerstand als Kupfer, aber ist leichter und billiger. Größere Querschnitte sind notwendig.",
      },
      {
        q: "Was ist der Skin-Effekt?",
        a: "Bei hohen AC-Frequenzen konzentriert sich der Strom auf der Drahtoberfläche, erhöht Widerstand um 5–15%.",
      },
    ],
  },
  fr: {
    title: "Calculateur de Calibre de Fil",
    short: "Calculez la résistance du fil, la chute de tension et l'ampacité pour les tailles AWG/mm².",
    description:
      "Calculateur gratuit de calibre de fil. Entrez AWG ou mm², longueur du fil, courant et matériau pour calculer la résistance, la chute de tension et l'ampacité.",
    keywords: [
      "calibre de fil",
      "calculateur AWG",
      "taille de câble",
      "chute de tension",
      "résistance du fil",
      "ampacité",
      "fil de cuivre",
    ],
    inputs: {
      sizeUnit: { label: "Unité", help: "AWG (Américain) ou mm²" },
      wireSize: { label: "Calibre du fil", help: "Numéro AWG ou section en mm²" },
      wireLength: { label: "Longueur du fil", help: "Longueur du fil en mètres" },
      current: { label: "Courant", help: "Courant en ampères" },
      material: { label: "Matériau", help: "Cuivre ou aluminium" },
      frequency: { label: "Fréquence", help: "CC ou CA (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "Section transversale", help: "Section du conducteur en mm²" },
      awgEquivalent: { label: "Équivalent AWG", help: "Taille AWG équivalente" },
      resistance: { label: "Résistance", help: "Résistance totale en ohms" },
      voltageDrop: { label: "Chute de tension", help: "Perte de tension dans le fil" },
      powerLoss: { label: "Perte de puissance", help: "Puissance dissipée en watts" },
      ampacityRating: { label: "Ampacité", help: "Courant continu maximal sûr" },
    },
    options: {
      sizeUnit: { awg: "AWG (Américain)", mm2: "mm² (Métrique)" },
      material: { copper: "Cuivre", aluminum: "Aluminium" },
      frequency: { dc: "CC (Direct)", ac50: "CA 50 Hz", ac60: "CA 60 Hz" },
    },
    errors: {
      invalidSize: "Le calibre du fil doit être positif.",
      invalidLength: "La longueur du fil doit être positive.",
      invalidCurrent: "Le courant doit être positif.",
    },
    faq: [
      {
        q: "Qu'est-ce que l'AWG?",
        a: "American Wire Gauge (AWG) est un système standardisé pour les calibres de fil. Les numéros AWG plus bas indiquent des fils plus épais.",
      },
      {
        q: "Pourquoi la chute de tension est-elle importante?",
        a: "La chute de tension excessive réduit la puissance et l'efficacité. Les codes électriques limitent la chute à 3–5%.",
      },
      {
        q: "Comment choisir le bon calibre de fil?",
        a: "Choisissez basé sur l'ampacité et la chute de tension acceptable. Consultez les codes électriques locaux.",
      },
      {
        q: "L'aluminium est-il approprié?",
        a: "L'aluminium a une résistance plus élevée mais est plus léger et moins cher. Des calibres plus épais sont nécessaires.",
      },
      {
        q: "Qu'est-ce que l'effet de peau?",
        a: "À hautes fréquences AC, le courant se concentre en surface, augmentant la résistance de 5–15%.",
      },
    ],
  },
  es: {
    title: "Calculadora de Calibre de Cable",
    short: "Calcule la resistencia del cable, caída de tensión y amperaje para tamaños AWG/mm².",
    description:
      "Calculadora gratuita de calibre de cable. Ingrese AWG o mm², longitud del cable, corriente y material para calcular resistencia, caída de tensión y amperaje.",
    keywords: [
      "calibre de cable",
      "calculadora AWG",
      "tamaño de cable",
      "caída de tensión",
      "resistencia del cable",
      "amperaje",
      "cable de cobre",
    ],
    inputs: {
      sizeUnit: { label: "Unidad", help: "AWG (Americano) o mm²" },
      wireSize: { label: "Calibre de cable", help: "Número AWG o sección en mm²" },
      wireLength: { label: "Longitud del cable", help: "Longitud en metros" },
      current: { label: "Corriente", help: "Corriente en amperios" },
      material: { label: "Material", help: "Cobre o aluminio" },
      frequency: { label: "Frecuencia", help: "DC o AC (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "Área de sección", help: "Área del conductor en mm²" },
      awgEquivalent: { label: "Equivalente AWG", help: "Tamaño AWG equivalente" },
      resistance: { label: "Resistencia", help: "Resistencia total en ohmios" },
      voltageDrop: { label: "Caída de tensión", help: "Pérdida de tensión en el cable" },
      powerLoss: { label: "Pérdida de potencia", help: "Potencia disipada en vatios" },
      ampacityRating: { label: "Amperaje", help: "Corriente continua máxima segura" },
    },
    options: {
      sizeUnit: { awg: "AWG (Americano)", mm2: "mm² (Métrico)" },
      material: { copper: "Cobre", aluminum: "Aluminio" },
      frequency: { dc: "DC (Directo)", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "El calibre debe ser positivo.",
      invalidLength: "La longitud debe ser positiva.",
      invalidCurrent: "La corriente debe ser positiva.",
    },
    faq: [
      {
        q: "¿Qué es AWG?",
        a: "American Wire Gauge (AWG) es un sistema estandarizado para calibres de cable. Números AWG bajos indican cables más gruesos.",
      },
      {
        q: "¿Por qué es importante la caída de tensión?",
        a: "La caída de tensión excesiva reduce la potencia y eficiencia. Los códigos eléctricos limitan la caída a 3–5%.",
      },
      {
        q: "¿Cómo elijo el calibre correcto?",
        a: "Elija basado en amperaje y caída de tensión aceptable. Consulte códigos eléctricos locales.",
      },
      {
        q: "¿Es apropiado el aluminio?",
        a: "El aluminio tiene mayor resistencia pero es más ligero y barato. Se necesitan calibres más gruesos.",
      },
      {
        q: "¿Qué es el efecto de piel?",
        a: "A altas frecuencias AC, la corriente se concentra en la superficie, aumentando resistencia 5–15%.",
      },
    ],
  },
  it: {
    title: "Calcolatore Misura Filo",
    short: "Calcola resistenza filo, caduta di tensione e portata di corrente per taglie AWG/mm².",
    description:
      "Calcolatore gratuito di misura filo. Inserisci AWG o mm², lunghezza filo, corrente e materiale per calcolare resistenza, caduta di tensione e portata.",
    keywords: [
      "misura filo",
      "calcolatore AWG",
      "misura cavo",
      "caduta di tensione",
      "resistenza filo",
      "portata di corrente",
      "filo di rame",
    ],
    inputs: {
      sizeUnit: { label: "Unità", help: "AWG (Americano) o mm²" },
      wireSize: { label: "Misura filo", help: "Numero AWG o sezione in mm²" },
      wireLength: { label: "Lunghezza filo", help: "Lunghezza in metri" },
      current: { label: "Corrente", help: "Corrente in ampere" },
      material: { label: "Materiale", help: "Rame o alluminio" },
      frequency: { label: "Frequenza", help: "CC o CA (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "Area sezione", help: "Area conduttore in mm²" },
      awgEquivalent: { label: "Equivalente AWG", help: "Misura AWG equivalente" },
      resistance: { label: "Resistenza", help: "Resistenza totale in ohm" },
      voltageDrop: { label: "Caduta di tensione", help: "Perdita di tensione nel filo" },
      powerLoss: { label: "Perdita di potenza", help: "Potenza dissipata in watt" },
      ampacityRating: { label: "Portata di corrente", help: "Corrente continua massima sicura" },
    },
    options: {
      sizeUnit: { awg: "AWG (Americano)", mm2: "mm² (Metrico)" },
      material: { copper: "Rame", aluminum: "Alluminio" },
      frequency: { dc: "CC (Continua)", ac50: "CA 50 Hz", ac60: "CA 60 Hz" },
    },
    errors: {
      invalidSize: "Misura filo deve essere positiva.",
      invalidLength: "Lunghezza filo deve essere positiva.",
      invalidCurrent: "Corrente deve essere positiva.",
    },
    faq: [
      {
        q: "Cos'è l'AWG?",
        a: "American Wire Gauge (AWG) è un sistema standardizzato per misure di filo. Numeri AWG bassi indicano fili più spessi.",
      },
      {
        q: "Perché la caduta di tensione è importante?",
        a: "Caduta di tensione eccessiva riduce potenza ed efficienza. I codici limitano caduta al 3–5%.",
      },
      {
        q: "Come scelgo la misura giusta?",
        a: "Scegli basandoti su portata di corrente e caduta di tensione accettabile. Consulta codici locali.",
      },
      {
        q: "L'alluminio è adatto?",
        a: "L'alluminio ha resistenza più alta ma è più leggero e economico. Servono misure più grandi.",
      },
      {
        q: "Cos'è l'effetto pelle?",
        a: "Ad alte frequenze CA, la corrente si concentra in superficie, aumentando resistenza 5–15%.",
      },
    ],
  },
  ar: {
    title: "آلة حساب مقياس السلك",
    short: "احسب مقاومة السلك وانخفاض الجهد والتيار المسموح به لأحجام AWG/mm².",
    description:
      "آلة حساب مقياس السلك المجانية. أدخل AWG أو mm² وطول السلك والتيار والمادة لحساب المقاومة والجهد وتصنيف الأمبير.",
    keywords: [
      "مقياس السلك",
      "حاسبة AWG",
      "حجم الكابل",
      "انخفاض الجهد",
      "مقاومة السلك",
      "التيار المسموح",
      "سلك نحاسي",
    ],
    inputs: {
      sizeUnit: { label: "الوحدة", help: "AWG (أمريكي) أو mm²" },
      wireSize: { label: "مقياس السلك", help: "رقم AWG أو المقطع بـ mm²" },
      wireLength: { label: "طول السلك", help: "الطول بالمتر" },
      current: { label: "التيار", help: "التيار بالأمبير" },
      material: { label: "المادة", help: "نحاس أو ألومنيوم" },
      frequency: { label: "التردد", help: "DC أو AC (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "منطقة المقطع", help: "مساحة الموصل بـ mm²" },
      awgEquivalent: { label: "مكافئ AWG", help: "حجم AWG المعادل" },
      resistance: { label: "المقاومة", help: "المقاومة الكلية بالأوم" },
      voltageDrop: { label: "انخفاض الجهد", help: "فقد الجهد في السلك" },
      powerLoss: { label: "فقد الطاقة", help: "الطاقة المبددة بالواط" },
      ampacityRating: { label: "التيار المسموح", help: "أقصى تيار آمن مستمر" },
    },
    options: {
      sizeUnit: { awg: "AWG (أمريكي)", mm2: "mm² (متري)" },
      material: { copper: "نحاس", aluminum: "ألومنيوم" },
      frequency: { dc: "DC (مباشر)", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "مقياس السلك يجب أن يكون موجباً.",
      invalidLength: "طول السلك يجب أن يكون موجباً.",
      invalidCurrent: "التيار يجب أن يكون موجباً.",
    },
    faq: [
      {
        q: "ما هو AWG؟",
        a: "American Wire Gauge (AWG) هو نظام موحد لمقاييس السلك. أرقام AWG المنخفضة تشير إلى أسلاك أكثر سمكاً.",
      },
      {
        q: "لماذا يهم انخفاض الجهد؟",
        a: "انخفاض الجهد الزائد يقلل من الطاقة والكفاءة. تحدد الأكواد انخفاض الجهد بنسبة 3–5%.",
      },
      {
        q: "كيف أختار المقياس الصحيح؟",
        a: "اختر بناءً على التيار المسموح به وانخفاض الجهد المقبول. استشر الأكواس المحلية.",
      },
      {
        q: "هل الألومنيوم مناسب؟",
        a: "للألومنيوم مقاومة أعلى لكنه أخف وأرخص. تحتاج إلى مقاييس أكبر.",
      },
      {
        q: "ما هو تأثير الجلد؟",
        a: "في ترددات AC عالية، يتركز التيار على السطح، مما يزيد المقاومة 5–15%.",
      },
    ],
  },
  ru: {
    title: "Калькулятор Сечения Провода",
    short: "Рассчитайте сопротивление провода, падение напряжения и допустимый ток для размеров AWG/mm².",
    description:
      "Бесплатный калькулятор сечения провода. Введите AWG или mm², длину провода, ток и материал для расчета сопротивления, падения напряжения и допустимого тока.",
    keywords: [
      "сечение провода",
      "калькулятор AWG",
      "размер кабеля",
      "падение напряжения",
      "сопротивление провода",
      "допустимый ток",
      "медный провод",
    ],
    inputs: {
      sizeUnit: { label: "Единица", help: "AWG (американский) или mm²" },
      wireSize: { label: "Сечение провода", help: "Номер AWG или сечение в mm²" },
      wireLength: { label: "Длина провода", help: "Длина в метрах" },
      current: { label: "Ток", help: "Ток в амперах" },
      material: { label: "Материал", help: "Медь или алюминий" },
      frequency: { label: "Частота", help: "DC или AC (50/60 Гц)" },
    },
    outputs: {
      crossSectionArea: { label: "Площадь сечения", help: "Площадь проводника в mm²" },
      awgEquivalent: { label: "Эквивалент AWG", help: "Эквивалентный размер AWG" },
      resistance: { label: "Сопротивление", help: "Полное сопротивление в омах" },
      voltageDrop: { label: "Падение напряжения", help: "Потеря напряжения в проводе" },
      powerLoss: { label: "Потеря мощности", help: "Рассеиваемая мощность в ваттах" },
      ampacityRating: { label: "Допустимый ток", help: "Максимальный безопасный ток" },
    },
    options: {
      sizeUnit: { awg: "AWG (американский)", mm2: "mm² (метрический)" },
      material: { copper: "Медь", aluminum: "Алюминий" },
      frequency: { dc: "DC (постоянный)", ac50: "AC 50 Гц", ac60: "AC 60 Гц" },
    },
    errors: {
      invalidSize: "Сечение провода должно быть положительным.",
      invalidLength: "Длина провода должна быть положительной.",
      invalidCurrent: "Ток должен быть положительным.",
    },
    faq: [
      {
        q: "Что такое AWG?",
        a: "American Wire Gauge (AWG) — стандартизированная система размеров проводов. Низкие номера AWG указывают на более толстые провода.",
      },
      {
        q: "Почему падение напряжения важно?",
        a: "Чрезмерное падение напряжения снижает мощность и эффективность. Электротехнические нормы ограничивают его до 3–5%.",
      },
      {
        q: "Как выбрать правильное сечение?",
        a: "Выбирайте на основе допустимого тока и приемлемого падения напряжения. Консультируйтесь с местными кодексами.",
      },
      {
        q: "Подходит ли алюминий?",
        a: "Алюминий имеет более высокое сопротивление, но легче и дешевле. Требуются большие сечения.",
      },
      {
        q: "Что такое скин-эффект?",
        a: "На высоких частотах AC ток сосредоточивается на поверхности, увеличивая сопротивление на 5–15%.",
      },
    ],
  },
  zh: {
    title: "电线规格计算器",
    short: "计算AWG/mm²规格的电线电阻、电压降和载流量。",
    description:
      "免费电线规格计算器。输入AWG或mm²、电线长度、电流和材料，计算电阻、电压降和载流量。",
    keywords: [
      "电线规格",
      "AWG计算器",
      "电缆尺寸",
      "电压降",
      "电线电阻",
      "载流量",
      "铜线",
    ],
    inputs: {
      sizeUnit: { label: "尺寸单位", help: "AWG（美国）或mm²" },
      wireSize: { label: "电线规格", help: "AWG号或mm²截面" },
      wireLength: { label: "电线长度", help: "长度（米）" },
      current: { label: "电流", help: "电流（安培）" },
      material: { label: "材料", help: "铜或铝" },
      frequency: { label: "频率", help: "DC或AC（50/60 Hz）" },
    },
    outputs: {
      crossSectionArea: { label: "截面积", help: "导体面积（mm²）" },
      awgEquivalent: { label: "等效AWG", help: "等效AWG规格" },
      resistance: { label: "电阻", help: "总电阻（欧）" },
      voltageDrop: { label: "电压降", help: "电线中的电压损失" },
      powerLoss: { label: "功率损失", help: "散发的功率（瓦）" },
      ampacityRating: { label: "载流量", help: "最大安全持续电流" },
    },
    options: {
      sizeUnit: { awg: "AWG（美国）", mm2: "mm²（公制）" },
      material: { copper: "铜", aluminum: "铝" },
      frequency: { dc: "DC（直流）", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "电线规格必须为正数。",
      invalidLength: "电线长度必须为正数。",
      invalidCurrent: "电流必须为正数。",
    },
    faq: [
      {
        q: "什么是AWG？",
        a: "American Wire Gauge（AWG）是电线规格的标准化系统。较低的AWG号表示更粗的电线。",
      },
      {
        q: "为什么电压降很重要？",
        a: "过大的电压降会降低功率和效率。电气规范将电压降限制在3–5%。",
      },
      {
        q: "我如何选择正确的规格？",
        a: "根据载流量和可接受的电压降来选择。咨询当地电气规范。",
      },
      {
        q: "铝合适吗？",
        a: "铝的电阻率比铜高，但更轻更便宜。需要更大的规格。",
      },
      {
        q: "什么是趋肤效应？",
        a: "在高AC频率下，电流集中在导体表面，电阻增加5–15%。",
      },
    ],
  },
  ja: {
    title: "ワイヤゲージ計算機",
    short: "AWG/mm²規格の電線抵抗、電圧降下、許容電流を計算します。",
    description:
      "無料のワイヤゲージ計算機。AWGまたはmm²、電線長、電流、材質を入力して、抵抗、電圧降下、許容電流を計算します。",
    keywords: [
      "ワイヤゲージ",
      "AWG計算機",
      "ケーブルサイズ",
      "電圧降下",
      "電線抵抗",
      "許容電流",
      "銅線",
    ],
    inputs: {
      sizeUnit: { label: "単位", help: "AWG（米国）またはmm²" },
      wireSize: { label: "ワイヤゲージ", help: "AWG番号またはmm²断面" },
      wireLength: { label: "電線長", help: "長さ（メートル）" },
      current: { label: "電流", help: "電流（アンペア）" },
      material: { label: "材質", help: "銅またはアルミニウム" },
      frequency: { label: "周波数", help: "DCまたはAC（50/60 Hz）" },
    },
    outputs: {
      crossSectionArea: { label: "断面積", help: "導体面積（mm²）" },
      awgEquivalent: { label: "相当AWG", help: "相当するAWG規格" },
      resistance: { label: "抵抗", help: "総抵抗（オーム）" },
      voltageDrop: { label: "電圧降下", help: "電線内の電圧損失" },
      powerLoss: { label: "電力損失", help: "散逸電力（ワット）" },
      ampacityRating: { label: "許容電流", help: "最大安全連続電流" },
    },
    options: {
      sizeUnit: { awg: "AWG（米国）", mm2: "mm²（メートル法）" },
      material: { copper: "銅", aluminum: "アルミニウム" },
      frequency: { dc: "DC（直流）", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "ワイヤゲージは正の数である必要があります。",
      invalidLength: "電線長は正の数である必要があります。",
      invalidCurrent: "電流は正の数である必要があります。",
    },
    faq: [
      {
        q: "AWGとは何ですか？",
        a: "American Wire Gauge（AWG）は、電線ゲージの標準化システムです。低いAWG番号はより太い電線を示します。",
      },
      {
        q: "電圧降下が重要なのはなぜですか？",
        a: "過度な電圧降下は電力と効率を低下させます。電気規約では電圧降下を3～5％に制限しています。",
      },
      {
        q: "正しいゲージを選択するにはどうすればよいですか？",
        a: "許容電流と許容電圧降下に基づいて選択してください。地元の電気規約を参照してください。",
      },
      {
        q: "アルミニウムは適切ですか？",
        a: "アルミニウムは銅より抵抗が高いですが、より軽く経済的です。より大きなゲージが必要です。",
      },
      {
        q: "表皮効果とは何ですか？",
        a: "高いAC周波数では、電流が導体表面に集中し、抵抗が5～15％増加します。",
      },
    ],
  },
  ko: {
    title: "와이어 게이지 계산기",
    short: "AWG/mm² 규격의 와이어 저항, 전압 강하 및 허용 전류를 계산합니다.",
    description:
      "무료 와이어 게이지 계산기. AWG 또는 mm², 와이어 길이, 전류, 재료를 입력하여 저항, 전압 강하, 허용 전류를 계산합니다.",
    keywords: [
      "와이어 게이지",
      "AWG 계산기",
      "케이블 크기",
      "전압 강하",
      "와이어 저항",
      "허용 전류",
      "구리 와이어",
    ],
    inputs: {
      sizeUnit: { label: "단위", help: "AWG(미국) 또는 mm²" },
      wireSize: { label: "와이어 게이지", help: "AWG 번호 또는 mm² 단면" },
      wireLength: { label: "와이어 길이", help: "길이(미터)" },
      current: { label: "전류", help: "전류(암페어)" },
      material: { label: "재료", help: "구리 또는 알루미늄" },
      frequency: { label: "주파수", help: "DC 또는 AC(50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "단면적", help: "도체 면적(mm²)" },
      awgEquivalent: { label: "해당 AWG", help: "해당하는 AWG 규격" },
      resistance: { label: "저항", help: "총 저항(오옴)" },
      voltageDrop: { label: "전압 강하", help: "와이어의 전압 손실" },
      powerLoss: { label: "전력 손실", help: "산재되는 전력(와트)" },
      ampacityRating: { label: "허용 전류", help: "최대 안전 연속 전류" },
    },
    options: {
      sizeUnit: { awg: "AWG(미국)", mm2: "mm²(미터법)" },
      material: { copper: "구리", aluminum: "알루미늄" },
      frequency: { dc: "DC(직류)", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "와이어 게이지는 양수여야 합니다.",
      invalidLength: "와이어 길이는 양수여야 합니다.",
      invalidCurrent: "전류는 양수여야 합니다.",
    },
    faq: [
      {
        q: "AWG란 무엇입니까?",
        a: "American Wire Gauge(AWG)는 와이어 게이지의 표준화된 시스템입니다. 낮은 AWG 번호는 더 굵은 와이어를 나타냅니다.",
      },
      {
        q: "전압 강하가 중요한 이유는 무엇입니까?",
        a: "과도한 전압 강하는 전력과 효율을 감소시킵니다. 전기 규약은 전압 강하를 3-5%로 제한합니다.",
      },
      {
        q: "올바른 게이지를 선택하는 방법은?",
        a: "허용 전류와 허용 가능한 전압 강하에 따라 선택하세요. 지역 전기 규약을 참조하세요.",
      },
      {
        q: "알루미늄이 적합합니까?",
        a: "알루미늄은 구리보다 저항이 높지만 더 가볍고 저렴합니다. 더 큰 게이지가 필요합니다.",
      },
      {
        q: "표피 효과란 무엇입니까?",
        a: "높은 AC 주파수에서 전류가 도체 표면에 집중되어 저항이 5-15% 증가합니다.",
      },
    ],
  },
  hi: {
    title: "तार गेज कैलकुलेटर",
    short: "AWG/mm² आकार के लिए तार प्रतिरोध, वोल्टेज ड्रॉप और एम्पेसिटी की गणना करें।",
    description:
      "मुफ्त तार गेज कैलकुलेटर। AWG या mm², तार की लंबाई, करंट और सामग्री दर्ज करके प्रतिरोध, वोल्टेज ड्रॉप और एम्पेसिटी की गणना करें।",
    keywords: [
      "तार गेज",
      "AWG कैलकुलेटर",
      "केबल आकार",
      "वोल्टेज ड्रॉप",
      "तार प्रतिरोध",
      "एम्पेसिटी",
      "तांबे का तार",
    ],
    inputs: {
      sizeUnit: { label: "इकाई", help: "AWG (अमेरिकी) या mm²" },
      wireSize: { label: "तार गेज", help: "AWG संख्या या mm² में अनुभाग" },
      wireLength: { label: "तार की लंबाई", help: "लंबाई (मीटर में)" },
      current: { label: "करंट", help: "करंट (एम्पीयर में)" },
      material: { label: "सामग्री", help: "तांबा या एल्यूमिनियम" },
      frequency: { label: "आवृत्ति", help: "DC या AC (50/60 Hz)" },
    },
    outputs: {
      crossSectionArea: { label: "क्रॉस-सेक्शन क्षेत्र", help: "चालक क्षेत्र (mm²)" },
      awgEquivalent: { label: "समान AWG", help: "समान AWG आकार" },
      resistance: { label: "प्रतिरोध", help: "कुल प्रतिरोध (ओम)" },
      voltageDrop: { label: "वोल्टेज ड्रॉप", help: "तार में वोल्टेज नुकसान" },
      powerLoss: { label: "शक्ति नुकसान", help: "गर्मी के रूप में नष्ट शक्ति (वाट)" },
      ampacityRating: { label: "एम्पेसिटी", help: "अधिकतम सुरक्षित निरंतर करंट" },
    },
    options: {
      sizeUnit: { awg: "AWG (अमेरिकी)", mm2: "mm² (मीट्रिक)" },
      material: { copper: "तांबा", aluminum: "एल्यूमिनियम" },
      frequency: { dc: "DC (सीधा)", ac50: "AC 50 Hz", ac60: "AC 60 Hz" },
    },
    errors: {
      invalidSize: "तार गेज सकारात्मक होना चाहिए।",
      invalidLength: "तार की लंबाई सकारात्मक होनी चाहिए।",
      invalidCurrent: "करंट सकारात्मक होना चाहिए।",
    },
    faq: [
      {
        q: "AWG क्या है?",
        a: "American Wire Gauge (AWG) तार के आकार के लिए एक मानकीकृत प्रणाली है। कम AWG संख्या मोटे तार को दर्शाती है।",
      },
      {
        q: "वोल्टेज ड्रॉप क्यों महत्वपूर्ण है?",
        a: "अत्यधिक वोल्टेज ड्रॉप शक्ति और दक्षता को कम करता है। विद्युत कोड वोल्टेज ड्रॉप को 3-5% तक सीमित करते हैं।",
      },
      {
        q: "मैं सही गेज कैसे चुनूँ?",
        a: "एम्पेसिटी और स्वीकार्य वोल्टेज ड्रॉप के आधार पर चुनें। स्थानीय विद्युत कोड देखें।",
      },
      {
        q: "क्या एल्यूमिनियम उपयुक्त है?",
        a: "एल्यूमिनियम का प्रतिरोध तांबे से अधिक होता है लेकिन यह हल्का और सस्ता है। बड़े गेज की आवश्यकता होती है।",
      },
      {
        q: "स्किन प्रभाव क्या है?",
        a: "उच्च AC आवृत्तियों पर, करंट सतह पर केंद्रित होता है, प्रतिरोध को 5-15% बढ़ाता है।",
      },
    ],
  },
};

export default i18n;
