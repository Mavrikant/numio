import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Resistor Color Code Calculator",
    short: "Decode 4-band and 5-band resistor color codes to find resistance value and tolerance.",
    description:
      "Free resistor color code decoder. Select the color bands on your resistor to instantly identify the resistance value in ohms, the tolerance percentage, and the minimum and maximum resistance range.",
    keywords: [
      "resistor color code calculator",
      "resistor band decoder",
      "4 band resistor calculator",
      "5 band resistor calculator",
      "IEC 60062",
      "electronics resistor",
      "ohm color code",
    ],
    inputs: {
      bandCount: { label: "Number of bands", help: "4-band resistors have 2 significant digits; 5-band have 3." },
      band1: { label: "Band 1 (1st digit)", help: "First significant digit color." },
      band2: { label: "Band 2 (2nd digit)", help: "Second significant digit color." },
      band3: { label: "Band 3 (3rd digit)", help: "Third significant digit (5-band only)." },
      multiplierBand: { label: "Multiplier band", help: "The multiplier color band." },
      toleranceBand: { label: "Tolerance band", help: "The tolerance color band." },
    },
    outputs: {
      resistance: { label: "Resistance (Ω)", help: "Nominal resistance value in ohms." },
      tolerancePct: { label: "Tolerance (%)", help: "Tolerance as a percentage of the nominal value." },
      minValue: { label: "Min value (Ω)", help: "Minimum resistance within tolerance." },
      maxValue: { label: "Max value (Ω)", help: "Maximum resistance within tolerance." },
      colorName1: { label: "Band 1 color" },
      colorName2: { label: "Band 2 color" },
      colorName3: { label: "Band 3 color" },
      multiplierColorName: { label: "Multiplier color" },
      toleranceColorName: { label: "Tolerance color" },
    },
    options: {
      bandCount: { fourBand: "4 Bands", fiveBand: "5 Bands" },
      band1: {
        black: "Black (0)", brown: "Brown (1)", red: "Red (2)", orange: "Orange (3)",
        yellow: "Yellow (4)", green: "Green (5)", blue: "Blue (6)", violet: "Violet (7)",
        gray: "Gray (8)", white: "White (9)",
      },
      band2: {
        black: "Black (0)", brown: "Brown (1)", red: "Red (2)", orange: "Orange (3)",
        yellow: "Yellow (4)", green: "Green (5)", blue: "Blue (6)", violet: "Violet (7)",
        gray: "Gray (8)", white: "White (9)",
      },
      band3: {
        black: "Black (0)", brown: "Brown (1)", red: "Red (2)", orange: "Orange (3)",
        yellow: "Yellow (4)", green: "Green (5)", blue: "Blue (6)", violet: "Violet (7)",
        gray: "Gray (8)", white: "White (9)",
      },
      multiplierBand: {
        black: "Black (×1)", brown: "Brown (×10)", red: "Red (×100)", orange: "Orange (×1k)",
        yellow: "Yellow (×10k)", green: "Green (×100k)", blue: "Blue (×1M)", violet: "Violet (×10M)",
        gray: "Gray (×100M)", white: "White (×1G)", gold: "Gold (×0.1)", silver: "Silver (×0.01)",
      },
      toleranceBand: {
        brown: "Brown (±1%)", red: "Red (±2%)", green: "Green (±0.5%)", blue: "Blue (±0.25%)",
        violet: "Violet (±0.1%)", gray: "Gray (±0.05%)", gold: "Gold (±5%)", silver: "Silver (±10%)",
      },
    },
    faq: [
      {
        q: "How do I read a 4-band resistor?",
        a: "A 4-band resistor has: Band 1 (first digit), Band 2 (second digit), Band 3 (multiplier), and Band 4 (tolerance). Read from left to right, starting from the band closest to one end of the resistor.",
      },
      {
        q: "What is the difference between a 4-band and 5-band resistor?",
        a: "A 5-band resistor has an additional significant digit (Band 3), giving three significant digits instead of two. This allows more precise resistance values. 5-band resistors are common for precision components (±1% or better).",
      },
      {
        q: "What does the tolerance band mean?",
        a: "The tolerance band indicates how much the actual resistance may deviate from the nominal value. A gold band (±5%) on a 1 kΩ resistor means the actual value is between 950 Ω and 1050 Ω.",
      },
    ],
  },

  tr: {
    title: "Direnç Renk Kodu Hesaplayıcı",
    short: "4 bantlı ve 5 bantlı direnç renk kodlarını çözerek direnç değerini ve toleransı bulun.",
    description:
      "Ücretsiz direnç renk kodu çözücü. Direncinizdeki renk bantlarını seçin ve ohm cinsinden direnç değerini, tolerans yüzdesini ve minimum-maksimum direnç aralığını anında öğrenin.",
    keywords: ["direnç renk kodu hesaplayıcı", "direnç bant çözücü", "4 bantlı direnç", "5 bantlı direnç", "IEC 60062"],
    inputs: {
      bandCount: { label: "Bant sayısı", help: "4 bantlı dirençlerde 2, 5 bantlılarda 3 anlamlı rakam vardır." },
      band1: { label: "Bant 1 (1. rakam)", help: "Birinci anlamlı rakamın rengi." },
      band2: { label: "Bant 2 (2. rakam)", help: "İkinci anlamlı rakamın rengi." },
      band3: { label: "Bant 3 (3. rakam)", help: "Üçüncü anlamlı rakam (yalnızca 5 bant için)." },
      multiplierBand: { label: "Çarpan bandı", help: "Çarpan renk bandı." },
      toleranceBand: { label: "Tolerans bandı", help: "Tolerans renk bandı." },
    },
    outputs: {
      resistance: { label: "Direnç (Ω)", help: "Ohm cinsinden nominal direnç değeri." },
      tolerancePct: { label: "Tolerans (%)", help: "Nominal değerin yüzdesi olarak tolerans." },
      minValue: { label: "Min değer (Ω)", help: "Tolerans içindeki minimum direnç." },
      maxValue: { label: "Maks değer (Ω)", help: "Tolerans içindeki maksimum direnç." },
      colorName1: { label: "Bant 1 rengi" },
      colorName2: { label: "Bant 2 rengi" },
      colorName3: { label: "Bant 3 rengi" },
      multiplierColorName: { label: "Çarpan rengi" },
      toleranceColorName: { label: "Tolerans rengi" },
    },
    options: {
      bandCount: { fourBand: "4 Bant", fiveBand: "5 Bant" },
      band1: {
        black: "Siyah (0)", brown: "Kahverengi (1)", red: "Kırmızı (2)", orange: "Turuncu (3)",
        yellow: "Sarı (4)", green: "Yeşil (5)", blue: "Mavi (6)", violet: "Mor (7)",
        gray: "Gri (8)", white: "Beyaz (9)",
      },
      band2: {
        black: "Siyah (0)", brown: "Kahverengi (1)", red: "Kırmızı (2)", orange: "Turuncu (3)",
        yellow: "Sarı (4)", green: "Yeşil (5)", blue: "Mavi (6)", violet: "Mor (7)",
        gray: "Gri (8)", white: "Beyaz (9)",
      },
      band3: {
        black: "Siyah (0)", brown: "Kahverengi (1)", red: "Kırmızı (2)", orange: "Turuncu (3)",
        yellow: "Sarı (4)", green: "Yeşil (5)", blue: "Mavi (6)", violet: "Mor (7)",
        gray: "Gri (8)", white: "Beyaz (9)",
      },
      multiplierBand: {
        black: "Siyah (×1)", brown: "Kahverengi (×10)", red: "Kırmızı (×100)", orange: "Turuncu (×1k)",
        yellow: "Sarı (×10k)", green: "Yeşil (×100k)", blue: "Mavi (×1M)", violet: "Mor (×10M)",
        gray: "Gri (×100M)", white: "Beyaz (×1G)", gold: "Altın (×0,1)", silver: "Gümüş (×0,01)",
      },
      toleranceBand: {
        brown: "Kahverengi (±%1)", red: "Kırmızı (±%2)", green: "Yeşil (±%0,5)", blue: "Mavi (±%0,25)",
        violet: "Mor (±%0,1)", gray: "Gri (±%0,05)", gold: "Altın (±%5)", silver: "Gümüş (±%10)",
      },
    },
    faq: [
      { q: "4 bantlı direnci nasıl okurum?", a: "4 bantlı direnç şunlardan oluşur: Bant 1 (birinci rakam), Bant 2 (ikinci rakam), Bant 3 (çarpan) ve Bant 4 (tolerans). Direncin bir ucuna yakın banttan başlayarak soldan sağa okuyun." },
    ],
  },

  de: {
    title: "Widerstand Farbcode Rechner",
    short: "Entschlüsseln Sie 4- und 5-Bandwiderstands-Farbcodes und ermitteln Sie Wert und Toleranz.",
    description:
      "Kostenloser Widerstandsfarbcode-Dekoder. Wählen Sie die Farbbänder Ihres Widerstands, um den Widerstandswert in Ohm, die Toleranz und den Widerstandsbereich zu ermitteln.",
    keywords: ["Widerstand Farbcode Rechner", "Widerstands-Dekoder", "4-Band Widerstand", "5-Band Widerstand", "IEC 60062"],
    inputs: {
      bandCount: { label: "Anzahl der Bänder", help: "4-Band-Widerstände haben 2 signifikante Stellen; 5-Band-Widerstände haben 3." },
      band1: { label: "Band 1 (1. Stelle)", help: "Farbe der ersten signifikanten Stelle." },
      band2: { label: "Band 2 (2. Stelle)", help: "Farbe der zweiten signifikanten Stelle." },
      band3: { label: "Band 3 (3. Stelle)", help: "Farbe der dritten signifikanten Stelle (nur 5-Band)." },
      multiplierBand: { label: "Multiplikatorband", help: "Farbe des Multiplikatorbandes." },
      toleranceBand: { label: "Toleranzband", help: "Farbe des Toleranzbandes." },
    },
    outputs: {
      resistance: { label: "Widerstand (Ω)", help: "Nennwiderstand in Ohm." },
      tolerancePct: { label: "Toleranz (%)", help: "Toleranz als Prozentsatz des Nennwerts." },
      minValue: { label: "Minimalwert (Ω)", help: "Minimaler Widerstand innerhalb der Toleranz." },
      maxValue: { label: "Maximalwert (Ω)", help: "Maximaler Widerstand innerhalb der Toleranz." },
      colorName1: { label: "Farbe Band 1" },
      colorName2: { label: "Farbe Band 2" },
      colorName3: { label: "Farbe Band 3" },
      multiplierColorName: { label: "Multiplikatorfarbe" },
      toleranceColorName: { label: "Toleranzfarbe" },
    },
    options: {
      bandCount: { fourBand: "4 Bänder", fiveBand: "5 Bänder" },
      band1: {
        black: "Schwarz (0)", brown: "Braun (1)", red: "Rot (2)", orange: "Orange (3)",
        yellow: "Gelb (4)", green: "Grün (5)", blue: "Blau (6)", violet: "Violett (7)",
        gray: "Grau (8)", white: "Weiß (9)",
      },
      band2: {
        black: "Schwarz (0)", brown: "Braun (1)", red: "Rot (2)", orange: "Orange (3)",
        yellow: "Gelb (4)", green: "Grün (5)", blue: "Blau (6)", violet: "Violett (7)",
        gray: "Grau (8)", white: "Weiß (9)",
      },
      band3: {
        black: "Schwarz (0)", brown: "Braun (1)", red: "Rot (2)", orange: "Orange (3)",
        yellow: "Gelb (4)", green: "Grün (5)", blue: "Blau (6)", violet: "Violett (7)",
        gray: "Grau (8)", white: "Weiß (9)",
      },
      multiplierBand: {
        black: "Schwarz (×1)", brown: "Braun (×10)", red: "Rot (×100)", orange: "Orange (×1k)",
        yellow: "Gelb (×10k)", green: "Grün (×100k)", blue: "Blau (×1M)", violet: "Violett (×10M)",
        gray: "Grau (×100M)", white: "Weiß (×1G)", gold: "Gold (×0,1)", silver: "Silber (×0,01)",
      },
      toleranceBand: {
        brown: "Braun (±1%)", red: "Rot (±2%)", green: "Grün (±0,5%)", blue: "Blau (±0,25%)",
        violet: "Violett (±0,1%)", gray: "Grau (±0,05%)", gold: "Gold (±5%)", silver: "Silber (±10%)",
      },
    },
    faq: [
      { q: "Wie lese ich einen 4-Band-Widerstand?", a: "Band 1 (erste Stelle), Band 2 (zweite Stelle), Band 3 (Multiplikator), Band 4 (Toleranz) — von links nach rechts, beginnend beim Band näher an einem Ende." },
    ],
  },

  fr: {
    title: "Calculateur Code Couleur Résistance",
    short: "Décodez les codes couleur des résistances 4 et 5 bandes pour trouver la valeur et la tolérance.",
    description:
      "Décodeur gratuit de code couleur résistance. Sélectionnez les bandes de couleur de votre résistance pour identifier instantanément la valeur en ohms, la tolérance et la plage de résistance.",
    keywords: ["calculateur code couleur résistance", "décodeur résistance", "résistance 4 bandes", "résistance 5 bandes", "IEC 60062"],
    inputs: {
      bandCount: { label: "Nombre de bandes", help: "Les résistances 4 bandes ont 2 chiffres significatifs ; les 5 bandes en ont 3." },
      band1: { label: "Bande 1 (1er chiffre)", help: "Couleur du premier chiffre significatif." },
      band2: { label: "Bande 2 (2e chiffre)", help: "Couleur du deuxième chiffre significatif." },
      band3: { label: "Bande 3 (3e chiffre)", help: "Couleur du troisième chiffre (5 bandes uniquement)." },
      multiplierBand: { label: "Bande multiplicateur", help: "Couleur de la bande multiplicateur." },
      toleranceBand: { label: "Bande tolérance", help: "Couleur de la bande tolérance." },
    },
    outputs: {
      resistance: { label: "Résistance (Ω)", help: "Valeur nominale de la résistance en ohms." },
      tolerancePct: { label: "Tolérance (%)", help: "Tolérance en pourcentage de la valeur nominale." },
      minValue: { label: "Valeur min (Ω)", help: "Résistance minimale dans la tolérance." },
      maxValue: { label: "Valeur max (Ω)", help: "Résistance maximale dans la tolérance." },
      colorName1: { label: "Couleur bande 1" },
      colorName2: { label: "Couleur bande 2" },
      colorName3: { label: "Couleur bande 3" },
      multiplierColorName: { label: "Couleur multiplicateur" },
      toleranceColorName: { label: "Couleur tolérance" },
    },
    options: {
      bandCount: { fourBand: "4 bandes", fiveBand: "5 bandes" },
      band1: {
        black: "Noir (0)", brown: "Marron (1)", red: "Rouge (2)", orange: "Orange (3)",
        yellow: "Jaune (4)", green: "Vert (5)", blue: "Bleu (6)", violet: "Violet (7)",
        gray: "Gris (8)", white: "Blanc (9)",
      },
      band2: {
        black: "Noir (0)", brown: "Marron (1)", red: "Rouge (2)", orange: "Orange (3)",
        yellow: "Jaune (4)", green: "Vert (5)", blue: "Bleu (6)", violet: "Violet (7)",
        gray: "Gris (8)", white: "Blanc (9)",
      },
      band3: {
        black: "Noir (0)", brown: "Marron (1)", red: "Rouge (2)", orange: "Orange (3)",
        yellow: "Jaune (4)", green: "Vert (5)", blue: "Bleu (6)", violet: "Violet (7)",
        gray: "Gris (8)", white: "Blanc (9)",
      },
      multiplierBand: {
        black: "Noir (×1)", brown: "Marron (×10)", red: "Rouge (×100)", orange: "Orange (×1k)",
        yellow: "Jaune (×10k)", green: "Vert (×100k)", blue: "Bleu (×1M)", violet: "Violet (×10M)",
        gray: "Gris (×100M)", white: "Blanc (×1G)", gold: "Or (×0,1)", silver: "Argent (×0,01)",
      },
      toleranceBand: {
        brown: "Marron (±1%)", red: "Rouge (±2%)", green: "Vert (±0,5%)", blue: "Bleu (±0,25%)",
        violet: "Violet (±0,1%)", gray: "Gris (±0,05%)", gold: "Or (±5%)", silver: "Argent (±10%)",
      },
    },
    faq: [
      { q: "Comment lire une résistance 4 bandes ?", a: "Bande 1 (1er chiffre), Bande 2 (2e chiffre), Bande 3 (multiplicateur), Bande 4 (tolérance) — de gauche à droite, en commençant par la bande la plus proche d'une extrémité." },
    ],
  },

  es: {
    title: "Calculadora Código de Colores de Resistencia",
    short: "Descifra códigos de colores de resistencias de 4 y 5 bandas para obtener el valor y la tolerancia.",
    description:
      "Decodificador gratuito de código de colores de resistencias. Selecciona las bandas de color de tu resistencia para identificar el valor en ohmios, la tolerancia y el rango de resistencia.",
    keywords: ["calculadora código colores resistencia", "decodificador resistencia", "resistencia 4 bandas", "resistencia 5 bandas", "IEC 60062"],
    inputs: {
      bandCount: { label: "Número de bandas", help: "Las resistencias de 4 bandas tienen 2 dígitos significativos; las de 5 tienen 3." },
      band1: { label: "Banda 1 (1er dígito)", help: "Color del primer dígito significativo." },
      band2: { label: "Banda 2 (2o dígito)", help: "Color del segundo dígito significativo." },
      band3: { label: "Banda 3 (3er dígito)", help: "Color del tercer dígito (solo 5 bandas)." },
      multiplierBand: { label: "Banda multiplicadora", help: "Color de la banda multiplicadora." },
      toleranceBand: { label: "Banda de tolerancia", help: "Color de la banda de tolerancia." },
    },
    outputs: {
      resistance: { label: "Resistencia (Ω)", help: "Valor nominal de la resistencia en ohmios." },
      tolerancePct: { label: "Tolerancia (%)", help: "Tolerancia como porcentaje del valor nominal." },
      minValue: { label: "Valor mín (Ω)", help: "Resistencia mínima dentro de la tolerancia." },
      maxValue: { label: "Valor máx (Ω)", help: "Resistencia máxima dentro de la tolerancia." },
      colorName1: { label: "Color banda 1" },
      colorName2: { label: "Color banda 2" },
      colorName3: { label: "Color banda 3" },
      multiplierColorName: { label: "Color multiplicador" },
      toleranceColorName: { label: "Color tolerancia" },
    },
    options: {
      bandCount: { fourBand: "4 bandas", fiveBand: "5 bandas" },
      band1: {
        black: "Negro (0)", brown: "Marrón (1)", red: "Rojo (2)", orange: "Naranja (3)",
        yellow: "Amarillo (4)", green: "Verde (5)", blue: "Azul (6)", violet: "Violeta (7)",
        gray: "Gris (8)", white: "Blanco (9)",
      },
      band2: {
        black: "Negro (0)", brown: "Marrón (1)", red: "Rojo (2)", orange: "Naranja (3)",
        yellow: "Amarillo (4)", green: "Verde (5)", blue: "Azul (6)", violet: "Violeta (7)",
        gray: "Gris (8)", white: "Blanco (9)",
      },
      band3: {
        black: "Negro (0)", brown: "Marrón (1)", red: "Rojo (2)", orange: "Naranja (3)",
        yellow: "Amarillo (4)", green: "Verde (5)", blue: "Azul (6)", violet: "Violeta (7)",
        gray: "Gris (8)", white: "Blanco (9)",
      },
      multiplierBand: {
        black: "Negro (×1)", brown: "Marrón (×10)", red: "Rojo (×100)", orange: "Naranja (×1k)",
        yellow: "Amarillo (×10k)", green: "Verde (×100k)", blue: "Azul (×1M)", violet: "Violeta (×10M)",
        gray: "Gris (×100M)", white: "Blanco (×1G)", gold: "Oro (×0,1)", silver: "Plata (×0,01)",
      },
      toleranceBand: {
        brown: "Marrón (±1%)", red: "Rojo (±2%)", green: "Verde (±0,5%)", blue: "Azul (±0,25%)",
        violet: "Violeta (±0,1%)", gray: "Gris (±0,05%)", gold: "Oro (±5%)", silver: "Plata (±10%)",
      },
    },
    faq: [
      { q: "¿Cómo se lee una resistencia de 4 bandas?", a: "Banda 1 (1er dígito), Banda 2 (2o dígito), Banda 3 (multiplicador), Banda 4 (tolerancia). Léelas de izquierda a derecha, empezando por la banda más próxima a un extremo." },
    ],
  },

  it: {
    title: "Calcolatore Codice a Colori Resistenza",
    short: "Decodifica i codici a colori delle resistenze a 4 e 5 bande per trovare il valore e la tolleranza.",
    description:
      "Decodificatore gratuito del codice a colori resistenza. Seleziona le bande colorate della tua resistenza per identificare il valore in ohm, la tolleranza e il range di resistenza.",
    keywords: ["calcolatore codice colori resistenza", "decodificatore resistenza", "resistenza 4 bande", "resistenza 5 bande", "IEC 60062"],
    inputs: {
      bandCount: { label: "Numero di bande", help: "Le resistenze a 4 bande hanno 2 cifre significative; a 5 bande ne hanno 3." },
      band1: { label: "Banda 1 (1a cifra)", help: "Colore della prima cifra significativa." },
      band2: { label: "Banda 2 (2a cifra)", help: "Colore della seconda cifra significativa." },
      band3: { label: "Banda 3 (3a cifra)", help: "Colore della terza cifra (solo 5 bande)." },
      multiplierBand: { label: "Banda moltiplicatore", help: "Colore della banda moltiplicatore." },
      toleranceBand: { label: "Banda tolleranza", help: "Colore della banda tolleranza." },
    },
    outputs: {
      resistance: { label: "Resistenza (Ω)", help: "Valore nominale della resistenza in ohm." },
      tolerancePct: { label: "Tolleranza (%)", help: "Tolleranza come percentuale del valore nominale." },
      minValue: { label: "Valore min (Ω)", help: "Resistenza minima nella tolleranza." },
      maxValue: { label: "Valore max (Ω)", help: "Resistenza massima nella tolleranza." },
      colorName1: { label: "Colore banda 1" },
      colorName2: { label: "Colore banda 2" },
      colorName3: { label: "Colore banda 3" },
      multiplierColorName: { label: "Colore moltiplicatore" },
      toleranceColorName: { label: "Colore tolleranza" },
    },
    options: {
      bandCount: { fourBand: "4 bande", fiveBand: "5 bande" },
      band1: {
        black: "Nero (0)", brown: "Marrone (1)", red: "Rosso (2)", orange: "Arancione (3)",
        yellow: "Giallo (4)", green: "Verde (5)", blue: "Blu (6)", violet: "Viola (7)",
        gray: "Grigio (8)", white: "Bianco (9)",
      },
      band2: {
        black: "Nero (0)", brown: "Marrone (1)", red: "Rosso (2)", orange: "Arancione (3)",
        yellow: "Giallo (4)", green: "Verde (5)", blue: "Blu (6)", violet: "Viola (7)",
        gray: "Grigio (8)", white: "Bianco (9)",
      },
      band3: {
        black: "Nero (0)", brown: "Marrone (1)", red: "Rosso (2)", orange: "Arancione (3)",
        yellow: "Giallo (4)", green: "Verde (5)", blue: "Blu (6)", violet: "Viola (7)",
        gray: "Grigio (8)", white: "Bianco (9)",
      },
      multiplierBand: {
        black: "Nero (×1)", brown: "Marrone (×10)", red: "Rosso (×100)", orange: "Arancione (×1k)",
        yellow: "Giallo (×10k)", green: "Verde (×100k)", blue: "Blu (×1M)", violet: "Viola (×10M)",
        gray: "Grigio (×100M)", white: "Bianco (×1G)", gold: "Oro (×0,1)", silver: "Argento (×0,01)",
      },
      toleranceBand: {
        brown: "Marrone (±1%)", red: "Rosso (±2%)", green: "Verde (±0,5%)", blue: "Blu (±0,25%)",
        violet: "Viola (±0,1%)", gray: "Grigio (±0,05%)", gold: "Oro (±5%)", silver: "Argento (±10%)",
      },
    },
    faq: [
      { q: "Come si legge una resistenza a 4 bande?", a: "Banda 1 (1a cifra), Banda 2 (2a cifra), Banda 3 (moltiplicatore), Banda 4 (tolleranza) — da sinistra a destra, iniziando dalla banda più vicina a un'estremità." },
    ],
  },

  ar: {
    title: "حاسبة كود ألوان المقاومة",
    short: "فكّ شفرة ألوان المقاومات ذات 4 و5 أشرطة للحصول على القيمة والتسامح.",
    description:
      "فاك شفرة مجاني لألوان المقاومات. اختر أشرطة الألوان الموجودة على مقاومتك للتعرف فوراً على القيمة بالأوم ونسبة التسامح والنطاق الأدنى والأقصى.",
    keywords: ["حاسبة كود ألوان المقاومة", "فك شفرة ألوان المقاومة", "مقاومة 4 أشرطة", "مقاومة 5 أشرطة", "IEC 60062"],
    inputs: {
      bandCount: { label: "عدد الأشرطة", help: "مقاومات 4 أشرطة لها رقمان مهمان؛ 5 أشرطة لها ثلاثة." },
      band1: { label: "الشريط 1 (الرقم الأول)", help: "لون الرقم المهم الأول." },
      band2: { label: "الشريط 2 (الرقم الثاني)", help: "لون الرقم المهم الثاني." },
      band3: { label: "الشريط 3 (الرقم الثالث)", help: "لون الرقم الثالث (لـ 5 أشرطة فقط)." },
      multiplierBand: { label: "شريط المضاعف", help: "لون شريط المضاعف." },
      toleranceBand: { label: "شريط التسامح", help: "لون شريط التسامح." },
    },
    outputs: {
      resistance: { label: "المقاومة (Ω)", help: "القيمة الاسمية للمقاومة بالأوم." },
      tolerancePct: { label: "التسامح (%)", help: "التسامح كنسبة مئوية من القيمة الاسمية." },
      minValue: { label: "القيمة الدنيا (Ω)", help: "الحد الأدنى للمقاومة ضمن نطاق التسامح." },
      maxValue: { label: "القيمة القصوى (Ω)", help: "الحد الأقصى للمقاومة ضمن نطاق التسامح." },
      colorName1: { label: "لون الشريط 1" },
      colorName2: { label: "لون الشريط 2" },
      colorName3: { label: "لون الشريط 3" },
      multiplierColorName: { label: "لون المضاعف" },
      toleranceColorName: { label: "لون التسامح" },
    },
    options: {
      bandCount: { fourBand: "4 أشرطة", fiveBand: "5 أشرطة" },
      band1: {
        black: "أسود (0)", brown: "بني (1)", red: "أحمر (2)", orange: "برتقالي (3)",
        yellow: "أصفر (4)", green: "أخضر (5)", blue: "أزرق (6)", violet: "بنفسجي (7)",
        gray: "رمادي (8)", white: "أبيض (9)",
      },
      band2: {
        black: "أسود (0)", brown: "بني (1)", red: "أحمر (2)", orange: "برتقالي (3)",
        yellow: "أصفر (4)", green: "أخضر (5)", blue: "أزرق (6)", violet: "بنفسجي (7)",
        gray: "رمادي (8)", white: "أبيض (9)",
      },
      band3: {
        black: "أسود (0)", brown: "بني (1)", red: "أحمر (2)", orange: "برتقالي (3)",
        yellow: "أصفر (4)", green: "أخضر (5)", blue: "أزرق (6)", violet: "بنفسجي (7)",
        gray: "رمادي (8)", white: "أبيض (9)",
      },
      multiplierBand: {
        black: "أسود (×1)", brown: "بني (×10)", red: "أحمر (×100)", orange: "برتقالي (×1k)",
        yellow: "أصفر (×10k)", green: "أخضر (×100k)", blue: "أزرق (×1M)", violet: "بنفسجي (×10M)",
        gray: "رمادي (×100M)", white: "أبيض (×1G)", gold: "ذهبي (×0.1)", silver: "فضي (×0.01)",
      },
      toleranceBand: {
        brown: "بني (±1%)", red: "أحمر (±2%)", green: "أخضر (±0.5%)", blue: "أزرق (±0.25%)",
        violet: "بنفسجي (±0.1%)", gray: "رمادي (±0.05%)", gold: "ذهبي (±5%)", silver: "فضي (±10%)",
      },
    },
    faq: [
      { q: "كيف أقرأ مقاومة ذات 4 أشرطة؟", a: "الشريط 1 (الرقم الأول)، الشريط 2 (الرقم الثاني)، الشريط 3 (المضاعف)، الشريط 4 (التسامح) — من اليسار إلى اليمين، ابدأ من الشريط الأقرب لطرف المقاومة." },
    ],
  },

  ru: {
    title: "Калькулятор цветовой маркировки резисторов",
    short: "Расшифруйте цветовую маркировку резисторов с 4 и 5 полосами для получения значения и допуска.",
    description:
      "Бесплатный декодер цветовой маркировки резисторов. Выберите цветные полосы вашего резистора, чтобы мгновенно определить сопротивление в омах, допуск и диапазон значений.",
    keywords: ["калькулятор цветовой маркировки резисторов", "декодер резисторов", "резистор 4 полосы", "резистор 5 полос", "IEC 60062"],
    inputs: {
      bandCount: { label: "Количество полос", help: "4-полосные резисторы имеют 2 значимые цифры; 5-полосные — 3." },
      band1: { label: "Полоса 1 (1-я цифра)", help: "Цвет первой значимой цифры." },
      band2: { label: "Полоса 2 (2-я цифра)", help: "Цвет второй значимой цифры." },
      band3: { label: "Полоса 3 (3-я цифра)", help: "Цвет третьей цифры (только для 5-полосных)." },
      multiplierBand: { label: "Полоса множителя", help: "Цвет полосы множителя." },
      toleranceBand: { label: "Полоса допуска", help: "Цвет полосы допуска." },
    },
    outputs: {
      resistance: { label: "Сопротивление (Ом)", help: "Номинальное сопротивление в омах." },
      tolerancePct: { label: "Допуск (%)", help: "Допуск как процент от номинала." },
      minValue: { label: "Мин. значение (Ом)", help: "Минимальное сопротивление в пределах допуска." },
      maxValue: { label: "Макс. значение (Ом)", help: "Максимальное сопротивление в пределах допуска." },
      colorName1: { label: "Цвет полосы 1" },
      colorName2: { label: "Цвет полосы 2" },
      colorName3: { label: "Цвет полосы 3" },
      multiplierColorName: { label: "Цвет множителя" },
      toleranceColorName: { label: "Цвет допуска" },
    },
    options: {
      bandCount: { fourBand: "4 полосы", fiveBand: "5 полос" },
      band1: {
        black: "Чёрный (0)", brown: "Коричневый (1)", red: "Красный (2)", orange: "Оранжевый (3)",
        yellow: "Жёлтый (4)", green: "Зелёный (5)", blue: "Синий (6)", violet: "Фиолетовый (7)",
        gray: "Серый (8)", white: "Белый (9)",
      },
      band2: {
        black: "Чёрный (0)", brown: "Коричневый (1)", red: "Красный (2)", orange: "Оранжевый (3)",
        yellow: "Жёлтый (4)", green: "Зелёный (5)", blue: "Синий (6)", violet: "Фиолетовый (7)",
        gray: "Серый (8)", white: "Белый (9)",
      },
      band3: {
        black: "Чёрный (0)", brown: "Коричневый (1)", red: "Красный (2)", orange: "Оранжевый (3)",
        yellow: "Жёлтый (4)", green: "Зелёный (5)", blue: "Синий (6)", violet: "Фиолетовый (7)",
        gray: "Серый (8)", white: "Белый (9)",
      },
      multiplierBand: {
        black: "Чёрный (×1)", brown: "Коричневый (×10)", red: "Красный (×100)", orange: "Оранжевый (×1к)",
        yellow: "Жёлтый (×10к)", green: "Зелёный (×100к)", blue: "Синий (×1М)", violet: "Фиолетовый (×10М)",
        gray: "Серый (×100М)", white: "Белый (×1Г)", gold: "Золотой (×0,1)", silver: "Серебряный (×0,01)",
      },
      toleranceBand: {
        brown: "Коричневый (±1%)", red: "Красный (±2%)", green: "Зелёный (±0,5%)", blue: "Синий (±0,25%)",
        violet: "Фиолетовый (±0,1%)", gray: "Серый (±0,05%)", gold: "Золотой (±5%)", silver: "Серебряный (±10%)",
      },
    },
    faq: [
      { q: "Как читать 4-полосный резистор?", a: "Полоса 1 (1-я цифра), Полоса 2 (2-я цифра), Полоса 3 (множитель), Полоса 4 (допуск) — слева направо, начиная с полосы ближе к одному из концов." },
    ],
  },

  zh: {
    title: "电阻色环代码计算器",
    short: "解读4环和5环电阻色环代码，获取阻值和公差。",
    description:
      "免费电阻色环解码器。选择电阻上的色环颜色，即可立即识别欧姆阻值、公差百分比以及最小/最大阻值范围。",
    keywords: ["电阻色环计算器", "电阻色环解码器", "4环电阻", "5环电阻", "IEC 60062"],
    inputs: {
      bandCount: { label: "色环数量", help: "4环电阻有2位有效数字；5环有3位。" },
      band1: { label: "色环1（第1位）", help: "第一位有效数字的颜色。" },
      band2: { label: "色环2（第2位）", help: "第二位有效数字的颜色。" },
      band3: { label: "色环3（第3位）", help: "第三位有效数字的颜色（仅5环）。" },
      multiplierBand: { label: "倍率色环", help: "倍率色环的颜色。" },
      toleranceBand: { label: "公差色环", help: "公差色环的颜色。" },
    },
    outputs: {
      resistance: { label: "阻值（Ω）", help: "以欧姆为单位的标称阻值。" },
      tolerancePct: { label: "公差（%）", help: "相对于标称值的公差百分比。" },
      minValue: { label: "最小值（Ω）", help: "公差范围内的最小阻值。" },
      maxValue: { label: "最大值（Ω）", help: "公差范围内的最大阻值。" },
      colorName1: { label: "色环1颜色" },
      colorName2: { label: "色环2颜色" },
      colorName3: { label: "色环3颜色" },
      multiplierColorName: { label: "倍率颜色" },
      toleranceColorName: { label: "公差颜色" },
    },
    options: {
      bandCount: { fourBand: "4环", fiveBand: "5环" },
      band1: {
        black: "黑色（0）", brown: "棕色（1）", red: "红色（2）", orange: "橙色（3）",
        yellow: "黄色（4）", green: "绿色（5）", blue: "蓝色（6）", violet: "紫色（7）",
        gray: "灰色（8）", white: "白色（9）",
      },
      band2: {
        black: "黑色（0）", brown: "棕色（1）", red: "红色（2）", orange: "橙色（3）",
        yellow: "黄色（4）", green: "绿色（5）", blue: "蓝色（6）", violet: "紫色（7）",
        gray: "灰色（8）", white: "白色（9）",
      },
      band3: {
        black: "黑色（0）", brown: "棕色（1）", red: "红色（2）", orange: "橙色（3）",
        yellow: "黄色（4）", green: "绿色（5）", blue: "蓝色（6）", violet: "紫色（7）",
        gray: "灰色（8）", white: "白色（9）",
      },
      multiplierBand: {
        black: "黑色（×1）", brown: "棕色（×10）", red: "红色（×100）", orange: "橙色（×1k）",
        yellow: "黄色（×10k）", green: "绿色（×100k）", blue: "蓝色（×1M）", violet: "紫色（×10M）",
        gray: "灰色（×100M）", white: "白色（×1G）", gold: "金色（×0.1）", silver: "银色（×0.01）",
      },
      toleranceBand: {
        brown: "棕色（±1%）", red: "红色（±2%）", green: "绿色（±0.5%）", blue: "蓝色（±0.25%）",
        violet: "紫色（±0.1%）", gray: "灰色（±0.05%）", gold: "金色（±5%）", silver: "银色（±10%）",
      },
    },
    faq: [
      { q: "如何读取4环电阻？", a: "色环1（第1位数字）、色环2（第2位数字）、色环3（倍率）、色环4（公差）——从左到右读取，从靠近一端的色环开始。" },
    ],
  },

  ja: {
    title: "抵抗カラーコード計算機",
    short: "4帯・5帯抵抗のカラーコードを解読して抵抗値と許容差を求めます。",
    description:
      "無料の抵抗カラーコードデコーダー。抵抗のカラーバンドを選択すると、オーム単位の抵抗値、許容差のパーセンテージ、最小・最大抵抗範囲が瞬時に分かります。",
    keywords: ["抵抗カラーコード計算機", "抵抗デコーダー", "4帯抵抗", "5帯抵抗", "IEC 60062"],
    inputs: {
      bandCount: { label: "バンド数", help: "4帯抵抗は有効数字2桁、5帯は3桁です。" },
      band1: { label: "バンド1（第1桁）", help: "第1有効数字の色。" },
      band2: { label: "バンド2（第2桁）", help: "第2有効数字の色。" },
      band3: { label: "バンド3（第3桁）", help: "第3有効数字の色（5帯のみ）。" },
      multiplierBand: { label: "乗数バンド", help: "乗数バンドの色。" },
      toleranceBand: { label: "許容差バンド", help: "許容差バンドの色。" },
    },
    outputs: {
      resistance: { label: "抵抗値（Ω）", help: "オーム単位の公称抵抗値。" },
      tolerancePct: { label: "許容差（%）", help: "公称値に対する許容差のパーセンテージ。" },
      minValue: { label: "最小値（Ω）", help: "許容差内の最小抵抗値。" },
      maxValue: { label: "最大値（Ω）", help: "許容差内の最大抵抗値。" },
      colorName1: { label: "バンド1の色" },
      colorName2: { label: "バンド2の色" },
      colorName3: { label: "バンド3の色" },
      multiplierColorName: { label: "乗数の色" },
      toleranceColorName: { label: "許容差の色" },
    },
    options: {
      bandCount: { fourBand: "4帯", fiveBand: "5帯" },
      band1: {
        black: "黒（0）", brown: "茶（1）", red: "赤（2）", orange: "橙（3）",
        yellow: "黄（4）", green: "緑（5）", blue: "青（6）", violet: "紫（7）",
        gray: "灰（8）", white: "白（9）",
      },
      band2: {
        black: "黒（0）", brown: "茶（1）", red: "赤（2）", orange: "橙（3）",
        yellow: "黄（4）", green: "緑（5）", blue: "青（6）", violet: "紫（7）",
        gray: "灰（8）", white: "白（9）",
      },
      band3: {
        black: "黒（0）", brown: "茶（1）", red: "赤（2）", orange: "橙（3）",
        yellow: "黄（4）", green: "緑（5）", blue: "青（6）", violet: "紫（7）",
        gray: "灰（8）", white: "白（9）",
      },
      multiplierBand: {
        black: "黒（×1）", brown: "茶（×10）", red: "赤（×100）", orange: "橙（×1k）",
        yellow: "黄（×10k）", green: "緑（×100k）", blue: "青（×1M）", violet: "紫（×10M）",
        gray: "灰（×100M）", white: "白（×1G）", gold: "金（×0.1）", silver: "銀（×0.01）",
      },
      toleranceBand: {
        brown: "茶（±1%）", red: "赤（±2%）", green: "緑（±0.5%）", blue: "青（±0.25%）",
        violet: "紫（±0.1%）", gray: "灰（±0.05%）", gold: "金（±5%）", silver: "銀（±10%）",
      },
    },
    faq: [
      { q: "4帯抵抗の読み方は？", a: "バンド1（第1桁）、バンド2（第2桁）、バンド3（乗数）、バンド4（許容差）を左から右に読みます。一端に近い方のバンドから始めてください。" },
    ],
  },

  ko: {
    title: "저항 색코드 계산기",
    short: "4밴드 및 5밴드 저항 색코드를 해독하여 저항값과 허용오차를 찾습니다.",
    description:
      "무료 저항 색코드 디코더. 저항의 색 밴드를 선택하면 옴 단위의 저항값, 허용오차 백분율, 최소/최대 저항 범위를 즉시 확인할 수 있습니다.",
    keywords: ["저항 색코드 계산기", "저항 밴드 디코더", "4밴드 저항", "5밴드 저항", "IEC 60062"],
    inputs: {
      bandCount: { label: "밴드 수", help: "4밴드 저항은 유효숫자 2자리, 5밴드는 3자리입니다." },
      band1: { label: "밴드 1(1번째 자리)", help: "첫 번째 유효숫자의 색상." },
      band2: { label: "밴드 2(2번째 자리)", help: "두 번째 유효숫자의 색상." },
      band3: { label: "밴드 3(3번째 자리)", help: "세 번째 유효숫자의 색상(5밴드 전용)." },
      multiplierBand: { label: "배수 밴드", help: "배수 밴드의 색상." },
      toleranceBand: { label: "허용오차 밴드", help: "허용오차 밴드의 색상." },
    },
    outputs: {
      resistance: { label: "저항값 (Ω)", help: "옴 단위의 공칭 저항값." },
      tolerancePct: { label: "허용오차 (%)", help: "공칭값의 백분율로 표시된 허용오차." },
      minValue: { label: "최솟값 (Ω)", help: "허용오차 범위 내의 최소 저항값." },
      maxValue: { label: "최댓값 (Ω)", help: "허용오차 범위 내의 최대 저항값." },
      colorName1: { label: "밴드 1 색상" },
      colorName2: { label: "밴드 2 색상" },
      colorName3: { label: "밴드 3 색상" },
      multiplierColorName: { label: "배수 색상" },
      toleranceColorName: { label: "허용오차 색상" },
    },
    options: {
      bandCount: { fourBand: "4밴드", fiveBand: "5밴드" },
      band1: {
        black: "검정(0)", brown: "갈색(1)", red: "빨강(2)", orange: "주황(3)",
        yellow: "노랑(4)", green: "초록(5)", blue: "파랑(6)", violet: "보라(7)",
        gray: "회색(8)", white: "흰색(9)",
      },
      band2: {
        black: "검정(0)", brown: "갈색(1)", red: "빨강(2)", orange: "주황(3)",
        yellow: "노랑(4)", green: "초록(5)", blue: "파랑(6)", violet: "보라(7)",
        gray: "회색(8)", white: "흰색(9)",
      },
      band3: {
        black: "검정(0)", brown: "갈색(1)", red: "빨강(2)", orange: "주황(3)",
        yellow: "노랑(4)", green: "초록(5)", blue: "파랑(6)", violet: "보라(7)",
        gray: "회색(8)", white: "흰색(9)",
      },
      multiplierBand: {
        black: "검정(×1)", brown: "갈색(×10)", red: "빨강(×100)", orange: "주황(×1k)",
        yellow: "노랑(×10k)", green: "초록(×100k)", blue: "파랑(×1M)", violet: "보라(×10M)",
        gray: "회색(×100M)", white: "흰색(×1G)", gold: "금(×0.1)", silver: "은(×0.01)",
      },
      toleranceBand: {
        brown: "갈색(±1%)", red: "빨강(±2%)", green: "초록(±0.5%)", blue: "파랑(±0.25%)",
        violet: "보라(±0.1%)", gray: "회색(±0.05%)", gold: "금(±5%)", silver: "은(±10%)",
      },
    },
    faq: [
      { q: "4밴드 저항은 어떻게 읽나요?", a: "밴드1(첫 번째 자리), 밴드2(두 번째 자리), 밴드3(배수), 밴드4(허용오차) — 저항의 한쪽 끝에 가까운 밴드부터 왼쪽에서 오른쪽으로 읽으세요." },
    ],
  },

  hi: {
    title: "रेसिस्टर कलर कोड कैलकुलेटर",
    short: "4-बैंड और 5-बैंड रेसिस्टर कलर कोड को डिकोड करके प्रतिरोध मान और सहिष्णुता जानें।",
    description:
      "निःशुल्क रेसिस्टर कलर कोड डिकोडर। अपने रेसिस्टर पर रंग बैंड चुनें और तुरंत ओम में प्रतिरोध मान, सहिष्णुता प्रतिशत, और न्यूनतम-अधिकतम प्रतिरोध सीमा जानें।",
    keywords: ["रेसिस्टर कलर कोड कैलकुलेटर", "रेसिस्टर बैंड डिकोडर", "4 बैंड रेसिस्टर", "5 बैंड रेसिस्टर", "IEC 60062"],
    inputs: {
      bandCount: { label: "बैंड की संख्या", help: "4-बैंड रेसिस्टर में 2 महत्वपूर्ण अंक होते हैं; 5-बैंड में 3।" },
      band1: { label: "बैंड 1 (पहला अंक)", help: "पहले महत्वपूर्ण अंक का रंग।" },
      band2: { label: "बैंड 2 (दूसरा अंक)", help: "दूसरे महत्वपूर्ण अंक का रंग।" },
      band3: { label: "बैंड 3 (तीसरा अंक)", help: "तीसरे अंक का रंग (केवल 5-बैंड के लिए)।" },
      multiplierBand: { label: "गुणक बैंड", help: "गुणक रंग बैंड।" },
      toleranceBand: { label: "सहिष्णुता बैंड", help: "सहिष्णुता रंग बैंड।" },
    },
    outputs: {
      resistance: { label: "प्रतिरोध (Ω)", help: "ओम में नाममात्र प्रतिरोध मान।" },
      tolerancePct: { label: "सहिष्णुता (%)", help: "नाममात्र मान का प्रतिशत के रूप में सहिष्णुता।" },
      minValue: { label: "न्यूनतम मान (Ω)", help: "सहिष्णुता के भीतर न्यूनतम प्रतिरोध।" },
      maxValue: { label: "अधिकतम मान (Ω)", help: "सहिष्णुता के भीतर अधिकतम प्रतिरोध।" },
      colorName1: { label: "बैंड 1 का रंग" },
      colorName2: { label: "बैंड 2 का रंग" },
      colorName3: { label: "बैंड 3 का रंग" },
      multiplierColorName: { label: "गुणक रंग" },
      toleranceColorName: { label: "सहिष्णुता रंग" },
    },
    options: {
      bandCount: { fourBand: "4 बैंड", fiveBand: "5 बैंड" },
      band1: {
        black: "काला (0)", brown: "भूरा (1)", red: "लाल (2)", orange: "नारंगी (3)",
        yellow: "पीला (4)", green: "हरा (5)", blue: "नीला (6)", violet: "बैंगनी (7)",
        gray: "धूसर (8)", white: "सफेद (9)",
      },
      band2: {
        black: "काला (0)", brown: "भूरा (1)", red: "लाल (2)", orange: "नारंगी (3)",
        yellow: "पीला (4)", green: "हरा (5)", blue: "नीला (6)", violet: "बैंगनी (7)",
        gray: "धूसर (8)", white: "सफेद (9)",
      },
      band3: {
        black: "काला (0)", brown: "भूरा (1)", red: "लाल (2)", orange: "नारंगी (3)",
        yellow: "पीला (4)", green: "हरा (5)", blue: "नीला (6)", violet: "बैंगनी (7)",
        gray: "धूसर (8)", white: "सफेद (9)",
      },
      multiplierBand: {
        black: "काला (×1)", brown: "भूरा (×10)", red: "लाल (×100)", orange: "नारंगी (×1k)",
        yellow: "पीला (×10k)", green: "हरा (×100k)", blue: "नीला (×1M)", violet: "बैंगनी (×10M)",
        gray: "धूसर (×100M)", white: "सफेद (×1G)", gold: "सोना (×0.1)", silver: "चांदी (×0.01)",
      },
      toleranceBand: {
        brown: "भूरा (±1%)", red: "लाल (±2%)", green: "हरा (±0.5%)", blue: "नीला (±0.25%)",
        violet: "बैंगनी (±0.1%)", gray: "धूसर (±0.05%)", gold: "सोना (±5%)", silver: "चांदी (±10%)",
      },
    },
    faq: [
      { q: "4-बैंड रेसिस्टर कैसे पढ़ें?", a: "बैंड 1 (पहला अंक), बैंड 2 (दूसरा अंक), बैंड 3 (गुणक), बैंड 4 (सहिष्णुता) — बाएं से दाएं पढ़ें, रेसिस्टर के एक छोर के पास वाले बैंड से शुरू करें।" },
    ],
  },
};

export default i18n;
