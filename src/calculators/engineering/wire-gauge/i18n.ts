import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Wire Gauge / Ampacity Calculator (AWG)",
    short: "Find AWG wire diameter, cross-sectional area, ampacity, and voltage drop for your circuit.",
    description:
      "Free AWG wire gauge calculator. Enter wire gauge, current, and run length to get diameter, area, ampacity rating per NEC, voltage drop, and suitability for your application.",
    keywords: [
      "AWG wire gauge calculator",
      "wire ampacity calculator",
      "wire diameter mm",
      "voltage drop calculator",
      "NEC wire ampacity",
      "AWG to mm2",
      "electrical wire size",
    ],
    inputs: {
      awg: {
        label: "Wire Gauge (AWG)",
        help: "American Wire Gauge — larger numbers are thinner wires. 4/0 is the thickest available here.",
      },
      current: {
        label: "Circuit Current (A)",
        help: "The current flowing in the circuit. Used for voltage drop calculation.",
      },
      lengthM: {
        label: "One-Way Length (m)",
        help: "Distance from source to load in meters. Voltage drop uses double this (round trip).",
      },
      loadCurrent: {
        label: "Load Current (A)",
        help: "Actual load current for suitability check. Defaults to circuit current if not set.",
      },
    },
    outputs: {
      ampacity: {
        label: "Ampacity (A)",
        help: "Maximum continuous current per NEC 310.15(B)(16) — 60°C column, copper, free air.",
      },
      diameterMm: {
        label: "Conductor Diameter (mm)",
        help: "Physical diameter of the conductor calculated from the AWG formula.",
      },
      areaMm2: {
        label: "Cross-Section Area (mm²)",
        help: "Circular cross-sectional area of the conductor.",
      },
      resistancePerMeterOhm: {
        label: "Resistance per Meter (Ω/m)",
        help: "DC resistance using copper resistivity ρ = 1.724×10⁻⁸ Ω·m at 20°C.",
      },
      voltageDrop: {
        label: "Voltage Drop (V)",
        help: "Total round-trip voltage drop: V = I × R/m × 2 × length.",
      },
      voltageDropPct: {
        label: "Voltage Drop (%)",
        help: "Percentage voltage drop relative to 120V nominal. NEC recommends ≤3% for branch circuits.",
      },
      isSuitable: {
        label: "Wire is Suitable",
        help: "True when load current ≤ ampacity and voltage drop ≤ 3%.",
      },
    },
    options: {
      awg: {
        "22": "22 AWG",
        "20": "20 AWG",
        "18": "18 AWG",
        "16": "16 AWG",
        "14": "14 AWG",
        "12": "12 AWG",
        "10": "10 AWG",
        "8": "8 AWG",
        "6": "6 AWG",
        "4": "4 AWG",
        "2": "2 AWG",
        "1": "1 AWG",
        "1/0": "1/0 AWG",
        "2/0": "2/0 AWG",
        "3/0": "3/0 AWG",
        "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "Current must be between 0 and 400 A.",
      lengthOutOfRange: "Length must be between 0.1 and 1000 m.",
    },
    faq: [
      {
        q: "What is AWG?",
        a: "AWG stands for American Wire Gauge, a standardized wire gauge system used predominantly in the United States and Canada for electrically conducting wire. Counterintuitively, larger AWG numbers indicate thinner wire.",
      },
      {
        q: "What is ampacity?",
        a: "Ampacity is the maximum amount of electrical current a conductor can carry continuously without exceeding its temperature rating. The values in this calculator come from NEC Table 310.15(B)(16) for copper conductors at 60°C in free air.",
      },
      {
        q: "Why is voltage drop important?",
        a: "Excessive voltage drop causes equipment to underperform, motors to overheat, and lights to dim. The NEC recommends a maximum of 3% voltage drop for branch circuits and 5% for feeders and branch circuits combined.",
      },
      {
        q: "What does the suitability check verify?",
        a: "The wire is considered suitable when two conditions are met: (1) the load current does not exceed the wire's ampacity, and (2) the round-trip voltage drop does not exceed 3% of the nominal 120V.",
      },
    ],
  },

  tr: {
    title: "Tel Kalınlığı / Ampacity Hesaplayıcı (AWG)",
    short: "AWG tel çapını, kesit alanını, ampacity değerini ve devrenizdeki gerilim düşümünü hesaplayın.",
    description:
      "Ücretsiz AWG tel kalınlığı hesaplayıcı. Tel numarasını, akımı ve devre uzunluğunu girerek çap, alan, NEC'e göre ampacity, gerilim düşümü ve uygunluk değerlendirmesi alın.",
    keywords: [
      "AWG tel kalınlığı hesaplayıcı",
      "tel ampacity hesaplayıcı",
      "tel çapı mm",
      "gerilim düşümü hesaplayıcı",
      "NEC tel ampacity",
      "AWG mm2 çevirici",
      "elektrik tel boyutu",
    ],
    inputs: {
      awg: {
        label: "Tel Kalınlığı (AWG)",
        help: "American Wire Gauge — büyük numaralar daha ince teli ifade eder. 4/0 buradaki en kalın teldir.",
      },
      current: {
        label: "Devre Akımı (A)",
        help: "Devredeki akım miktarı. Gerilim düşümü hesabında kullanılır.",
      },
      lengthM: {
        label: "Tek Yön Uzunluğu (m)",
        help: "Kaynaktan yüke metre cinsinden mesafe. Gerilim düşümü bu değerin iki katını kullanır (gidiş-dönüş).",
      },
      loadCurrent: {
        label: "Yük Akımı (A)",
        help: "Uygunluk kontrolü için gerçek yük akımı. Ayarlanmadıysa devre akımı kullanılır.",
      },
    },
    outputs: {
      ampacity: {
        label: "Ampacity (A)",
        help: "NEC 310.15(B)(16)'ya göre maksimum sürekli akım — 60°C sütunu, bakır, serbest hava.",
      },
      diameterMm: {
        label: "İletken Çapı (mm)",
        help: "AWG formülünden hesaplanan fiziksel iletken çapı.",
      },
      areaMm2: {
        label: "Kesit Alanı (mm²)",
        help: "İletkenin dairesel kesit alanı.",
      },
      resistancePerMeterOhm: {
        label: "Metre Başına Direnç (Ω/m)",
        help: "20°C'de bakır dirençlilik ρ = 1.724×10⁻⁸ Ω·m kullanılarak hesaplanan DC direnci.",
      },
      voltageDrop: {
        label: "Gerilim Düşümü (V)",
        help: "Toplam gidiş-dönüş gerilim düşümü: V = I × R/m × 2 × uzunluk.",
      },
      voltageDropPct: {
        label: "Gerilim Düşümü (%)",
        help: "120V nominal değere göre yüzde gerilim düşümü. NEC şube devreleri için ≤%3 önermektedir.",
      },
      isSuitable: {
        label: "Tel Uygun Mu",
        help: "Yük akımı ≤ ampacity ve gerilim düşümü ≤ %3 olduğunda doğrudur.",
      },
    },
    options: {
      awg: {
        "22": "22 AWG", "20": "20 AWG", "18": "18 AWG", "16": "16 AWG",
        "14": "14 AWG", "12": "12 AWG", "10": "10 AWG", "8": "8 AWG",
        "6": "6 AWG", "4": "4 AWG", "2": "2 AWG", "1": "1 AWG",
        "1/0": "1/0 AWG", "2/0": "2/0 AWG", "3/0": "3/0 AWG", "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "Akım 0 ile 400 A arasında olmalıdır.",
      lengthOutOfRange: "Uzunluk 0.1 ile 1000 m arasında olmalıdır.",
    },
    faq: [
      {
        q: "AWG nedir?",
        a: "AWG, American Wire Gauge anlamına gelir; başta ABD ve Kanada'da kullanılan standart tel numaralandırma sistemidir. Tersine mantıkla, daha büyük AWG numarası daha ince teli ifade eder.",
      },
      {
        q: "Ampacity nedir?",
        a: "Ampacity, bir iletkenin sıcaklık sınırını aşmadan sürekli taşıyabileceği maksimum elektrik akımıdır. Bu hesaplayıcıdaki değerler, serbest havadaki bakır iletkenler için NEC Tablo 310.15(B)(16)'dan alınmıştır.",
      },
      {
        q: "Gerilim düşümü neden önemlidir?",
        a: "Aşırı gerilim düşümü ekipmanın düşük performans göstermesine, motorların aşırı ısınmasına ve ışıkların sönmesine neden olur. NEC şube devreleri için maksimum %3 gerilim düşümü önermektedir.",
      },
    ],
  },

  de: {
    title: "Kabelquerschnitt / Ampacity-Rechner (AWG)",
    short: "Berechnen Sie AWG-Leiterdurchmesser, Querschnitt, Strombelastbarkeit und Spannungsfall.",
    description:
      "Kostenloser AWG-Kabelrechner. Geben Sie Querschnitt, Strom und Leitungslänge ein und erhalten Sie Durchmesser, Fläche, NEC-Strombelastbarkeit, Spannungsfall und Eignungsbeurteilung.",
    keywords: [
      "AWG Kabelrechner",
      "Strombelastbarkeit Rechner",
      "Leiterdurchmesser mm",
      "Spannungsfall Rechner",
      "NEC Ampacity",
      "AWG in mm2",
      "Kabelquerschnitt berechnen",
    ],
    inputs: {
      awg: {
        label: "Leiterquerschnitt (AWG)",
        help: "American Wire Gauge — größere Nummern bedeuten dünnere Leiter. 4/0 ist der dickste hier verfügbare.",
      },
      current: {
        label: "Schaltungsstrom (A)",
        help: "Der im Stromkreis fließende Strom. Wird für die Spannungsfallberechnung verwendet.",
      },
      lengthM: {
        label: "Einfache Leitungslänge (m)",
        help: "Entfernung von der Quelle zur Last in Metern. Der Spannungsfall verwendet den doppelten Wert (Hin- und Rückleiter).",
      },
      loadCurrent: {
        label: "Laststrom (A)",
        help: "Tatsächlicher Laststrom für die Eignungsprüfung. Entspricht dem Schaltungsstrom, wenn nicht angegeben.",
      },
    },
    outputs: {
      ampacity: {
        label: "Strombelastbarkeit (A)",
        help: "Maximaler Dauerstrom nach NEC 310.15(B)(16) — 60°C-Spalte, Kupfer, freie Luft.",
      },
      diameterMm: {
        label: "Leiterdurchmesser (mm)",
        help: "Physikalischer Leiterdurchmesser nach der AWG-Formel.",
      },
      areaMm2: {
        label: "Leiterquerschnitt (mm²)",
        help: "Kreisförmiger Querschnitt des Leiters.",
      },
      resistancePerMeterOhm: {
        label: "Widerstand je Meter (Ω/m)",
        help: "Gleichstromwiderstand bei Kupfer-Spezifischem Widerstand ρ = 1,724×10⁻⁸ Ω·m bei 20°C.",
      },
      voltageDrop: {
        label: "Spannungsfall (V)",
        help: "Gesamter Spannungsfall (Hin- und Rückleiter): V = I × R/m × 2 × Länge.",
      },
      voltageDropPct: {
        label: "Spannungsfall (%)",
        help: "Prozentualer Spannungsfall bezogen auf 120V Nennspannung. NEC empfiehlt ≤3 % für Endstromkreise.",
      },
      isSuitable: {
        label: "Kabel geeignet",
        help: "Wahr, wenn Laststrom ≤ Strombelastbarkeit und Spannungsfall ≤ 3 %.",
      },
    },
    options: {
      awg: {
        "22": "22 AWG", "20": "20 AWG", "18": "18 AWG", "16": "16 AWG",
        "14": "14 AWG", "12": "12 AWG", "10": "10 AWG", "8": "8 AWG",
        "6": "6 AWG", "4": "4 AWG", "2": "2 AWG", "1": "1 AWG",
        "1/0": "1/0 AWG", "2/0": "2/0 AWG", "3/0": "3/0 AWG", "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "Strom muss zwischen 0 und 400 A liegen.",
      lengthOutOfRange: "Länge muss zwischen 0,1 und 1000 m liegen.",
    },
    faq: [
      {
        q: "Was ist AWG?",
        a: "AWG steht für American Wire Gauge, ein in den USA und Kanada weit verbreitetes Norm-Leitermaßsystem. Kontraintuitiv bedeuten größere AWG-Nummern dünnere Leiter.",
      },
      {
        q: "Was bedeutet Ampacity?",
        a: "Ampacity bezeichnet den maximalen Dauerstrom, den ein Leiter tragen kann, ohne seine Temperaturklasse zu überschreiten. Die Werte stammen aus NEC Tabelle 310.15(B)(16).",
      },
      {
        q: "Warum ist der Spannungsfall wichtig?",
        a: "Ein zu hoher Spannungsfall führt zu Unterversorgung von Geräten, Überhitzung von Motoren und Lichtschwankungen. Die NEC empfiehlt maximal 3 % Spannungsfall für Endstromkreise.",
      },
    ],
  },

  fr: {
    title: "Calculateur de section de câble / Ampacity (AWG)",
    short: "Calculez le diamètre, la section, l'ampacity et la chute de tension pour votre câblage AWG.",
    description:
      "Calculateur de section AWG gratuit. Entrez la jauge du fil, le courant et la longueur pour obtenir le diamètre, la section, l'ampacity NEC, la chute de tension et l'évaluation d'adéquation.",
    keywords: [
      "calculateur section câble AWG",
      "ampacity câble",
      "diamètre câble mm",
      "chute de tension câble",
      "NEC ampacity",
      "AWG en mm2",
      "section fil électrique",
    ],
    inputs: {
      awg: {
        label: "Jauge de câble (AWG)",
        help: "American Wire Gauge — les numéros élevés correspondent à des câbles plus fins. 4/0 est le plus épais ici.",
      },
      current: {
        label: "Courant de circuit (A)",
        help: "Courant circulant dans le circuit. Utilisé pour le calcul de la chute de tension.",
      },
      lengthM: {
        label: "Longueur aller simple (m)",
        help: "Distance de la source à la charge en mètres. La chute de tension utilise le double (aller-retour).",
      },
      loadCurrent: {
        label: "Courant de charge (A)",
        help: "Courant de charge réel pour le contrôle d'adéquation. Par défaut égal au courant de circuit.",
      },
    },
    outputs: {
      ampacity: {
        label: "Ampacity (A)",
        help: "Courant maximal permanent selon NEC 310.15(B)(16) — colonne 60°C, cuivre, air libre.",
      },
      diameterMm: {
        label: "Diamètre du conducteur (mm)",
        help: "Diamètre physique du conducteur calculé par la formule AWG.",
      },
      areaMm2: {
        label: "Section transversale (mm²)",
        help: "Section circulaire du conducteur.",
      },
      resistancePerMeterOhm: {
        label: "Résistance par mètre (Ω/m)",
        help: "Résistance DC utilisant la résistivité du cuivre ρ = 1,724×10⁻⁸ Ω·m à 20°C.",
      },
      voltageDrop: {
        label: "Chute de tension (V)",
        help: "Chute de tension totale aller-retour : V = I × R/m × 2 × longueur.",
      },
      voltageDropPct: {
        label: "Chute de tension (%)",
        help: "Pourcentage de chute de tension par rapport à 120V nominaux. NEC recommande ≤3% pour les circuits de dérivation.",
      },
      isSuitable: {
        label: "Câble adapté",
        help: "Vrai si courant de charge ≤ ampacity et chute de tension ≤ 3%.",
      },
    },
    options: {
      awg: {
        "22": "22 AWG", "20": "20 AWG", "18": "18 AWG", "16": "16 AWG",
        "14": "14 AWG", "12": "12 AWG", "10": "10 AWG", "8": "8 AWG",
        "6": "6 AWG", "4": "4 AWG", "2": "2 AWG", "1": "1 AWG",
        "1/0": "1/0 AWG", "2/0": "2/0 AWG", "3/0": "3/0 AWG", "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "Le courant doit être compris entre 0 et 400 A.",
      lengthOutOfRange: "La longueur doit être comprise entre 0,1 et 1000 m.",
    },
    faq: [
      {
        q: "Qu'est-ce que l'AWG ?",
        a: "AWG signifie American Wire Gauge, un système de calibrage des fils électriques utilisé principalement aux États-Unis et au Canada. De façon contre-intuitive, des numéros AWG plus élevés indiquent des fils plus fins.",
      },
      {
        q: "Qu'est-ce que l'ampacity ?",
        a: "L'ampacity est le courant maximal qu'un conducteur peut transporter en continu sans dépasser sa température nominale. Les valeurs proviennent du tableau NEC 310.15(B)(16).",
      },
      {
        q: "Pourquoi la chute de tension est-elle importante ?",
        a: "Une chute de tension excessive entraîne un sous-rendement des équipements, une surchauffe des moteurs et un scintillement des éclairages. La NEC recommande un maximum de 3% pour les circuits de dérivation.",
      },
    ],
  },

  es: {
    title: "Calculadora de sección de cable / Ampacity (AWG)",
    short: "Calcula el diámetro, sección, ampacity y caída de tensión para tu cableado AWG.",
    description:
      "Calculadora de calibre AWG gratuita. Introduce el calibre del cable, la corriente y la longitud para obtener el diámetro, sección, ampacity NEC, caída de tensión y evaluación de idoneidad.",
    keywords: [
      "calculadora sección cable AWG",
      "ampacity cable",
      "diámetro cable mm",
      "caída de tensión cable",
      "NEC ampacity",
      "AWG a mm2",
      "tamaño cable eléctrico",
    ],
    inputs: {
      awg: {
        label: "Calibre del cable (AWG)",
        help: "American Wire Gauge — números más altos indican cables más delgados. 4/0 es el más grueso aquí.",
      },
      current: {
        label: "Corriente del circuito (A)",
        help: "Corriente que circula por el circuito. Se usa para el cálculo de caída de tensión.",
      },
      lengthM: {
        label: "Longitud de ida (m)",
        help: "Distancia de la fuente a la carga en metros. La caída de tensión usa el doble (ida y vuelta).",
      },
      loadCurrent: {
        label: "Corriente de carga (A)",
        help: "Corriente de carga real para verificación de idoneidad. Por defecto igual a la corriente del circuito.",
      },
    },
    outputs: {
      ampacity: {
        label: "Ampacity (A)",
        help: "Corriente máxima continua según NEC 310.15(B)(16) — columna 60°C, cobre, aire libre.",
      },
      diameterMm: {
        label: "Diámetro del conductor (mm)",
        help: "Diámetro físico del conductor calculado por la fórmula AWG.",
      },
      areaMm2: {
        label: "Sección transversal (mm²)",
        help: "Sección circular del conductor.",
      },
      resistancePerMeterOhm: {
        label: "Resistencia por metro (Ω/m)",
        help: "Resistencia DC usando resistividad del cobre ρ = 1,724×10⁻⁸ Ω·m a 20°C.",
      },
      voltageDrop: {
        label: "Caída de tensión (V)",
        help: "Caída de tensión total ida y vuelta: V = I × R/m × 2 × longitud.",
      },
      voltageDropPct: {
        label: "Caída de tensión (%)",
        help: "Porcentaje de caída de tensión respecto a 120V nominal. NEC recomienda ≤3% para circuitos de derivación.",
      },
      isSuitable: {
        label: "Cable adecuado",
        help: "Verdadero si corriente de carga ≤ ampacity y caída de tensión ≤ 3%.",
      },
    },
    options: {
      awg: {
        "22": "22 AWG", "20": "20 AWG", "18": "18 AWG", "16": "16 AWG",
        "14": "14 AWG", "12": "12 AWG", "10": "10 AWG", "8": "8 AWG",
        "6": "6 AWG", "4": "4 AWG", "2": "2 AWG", "1": "1 AWG",
        "1/0": "1/0 AWG", "2/0": "2/0 AWG", "3/0": "3/0 AWG", "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "La corriente debe estar entre 0 y 400 A.",
      lengthOutOfRange: "La longitud debe estar entre 0,1 y 1000 m.",
    },
    faq: [
      {
        q: "¿Qué es AWG?",
        a: "AWG significa American Wire Gauge, un sistema de calibrado de cables usado principalmente en Estados Unidos y Canadá. De forma contraintuitiva, números AWG más altos indican cables más delgados.",
      },
      {
        q: "¿Qué es la ampacity?",
        a: "La ampacity es la corriente máxima que un conductor puede transportar continuamente sin superar su temperatura nominal. Los valores provienen de la tabla NEC 310.15(B)(16).",
      },
      {
        q: "¿Por qué es importante la caída de tensión?",
        a: "Una caída de tensión excesiva causa bajo rendimiento de los equipos, sobrecalentamiento de motores y parpadeo de luces. La NEC recomienda un máximo del 3% para circuitos de derivación.",
      },
    ],
  },

  it: {
    title: "Calcolatore sezione cavo / Ampacity (AWG)",
    short: "Calcola il diametro, la sezione, l'ampacity e la caduta di tensione per il tuo cablaggio AWG.",
    description:
      "Calcolatore di sezione AWG gratuito. Inserisci il calibro del cavo, la corrente e la lunghezza per ottenere diametro, sezione, ampacity NEC, caduta di tensione e valutazione di idoneità.",
    keywords: [
      "calcolatore sezione cavo AWG",
      "ampacity cavo",
      "diametro cavo mm",
      "caduta di tensione cavo",
      "NEC ampacity",
      "AWG in mm2",
      "sezione filo elettrico",
    ],
    inputs: {
      awg: {
        label: "Sezione del cavo (AWG)",
        help: "American Wire Gauge — numeri più alti indicano cavi più sottili. 4/0 è il più spesso disponibile.",
      },
      current: {
        label: "Corrente del circuito (A)",
        help: "Corrente che scorre nel circuito. Usata per il calcolo della caduta di tensione.",
      },
      lengthM: {
        label: "Lunghezza di andata (m)",
        help: "Distanza dalla sorgente al carico in metri. La caduta di tensione usa il doppio (andata e ritorno).",
      },
      loadCurrent: {
        label: "Corrente di carico (A)",
        help: "Corrente di carico reale per la verifica di idoneità. Per default uguale alla corrente del circuito.",
      },
    },
    outputs: {
      ampacity: {
        label: "Ampacity (A)",
        help: "Corrente massima continua secondo NEC 310.15(B)(16) — colonna 60°C, rame, aria libera.",
      },
      diameterMm: {
        label: "Diametro del conduttore (mm)",
        help: "Diametro fisico del conduttore calcolato dalla formula AWG.",
      },
      areaMm2: {
        label: "Sezione trasversale (mm²)",
        help: "Sezione circolare del conduttore.",
      },
      resistancePerMeterOhm: {
        label: "Resistenza per metro (Ω/m)",
        help: "Resistenza DC con resistività del rame ρ = 1,724×10⁻⁸ Ω·m a 20°C.",
      },
      voltageDrop: {
        label: "Caduta di tensione (V)",
        help: "Caduta di tensione totale andata e ritorno: V = I × R/m × 2 × lunghezza.",
      },
      voltageDropPct: {
        label: "Caduta di tensione (%)",
        help: "Percentuale di caduta di tensione rispetto a 120V nominali. NEC raccomanda ≤3% per i circuiti di derivazione.",
      },
      isSuitable: {
        label: "Cavo adeguato",
        help: "Vero se corrente di carico ≤ ampacity e caduta di tensione ≤ 3%.",
      },
    },
    options: {
      awg: {
        "22": "22 AWG", "20": "20 AWG", "18": "18 AWG", "16": "16 AWG",
        "14": "14 AWG", "12": "12 AWG", "10": "10 AWG", "8": "8 AWG",
        "6": "6 AWG", "4": "4 AWG", "2": "2 AWG", "1": "1 AWG",
        "1/0": "1/0 AWG", "2/0": "2/0 AWG", "3/0": "3/0 AWG", "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "La corrente deve essere compresa tra 0 e 400 A.",
      lengthOutOfRange: "La lunghezza deve essere compresa tra 0,1 e 1000 m.",
    },
    faq: [
      {
        q: "Cos'è l'AWG?",
        a: "AWG sta per American Wire Gauge, un sistema di calibrazione dei cavi usato principalmente negli Stati Uniti e in Canada. Paradossalmente, numeri AWG più alti indicano cavi più sottili.",
      },
      {
        q: "Cos'è l'ampacity?",
        a: "L'ampacity è la corrente massima che un conduttore può trasportare continuamente senza superare la sua temperatura nominale. I valori provengono dalla tabella NEC 310.15(B)(16).",
      },
      {
        q: "Perché è importante la caduta di tensione?",
        a: "Una caduta di tensione eccessiva causa prestazioni ridotte delle apparecchiature, surriscaldamento dei motori e sfarfallio delle luci. La NEC raccomanda un massimo del 3% per i circuiti di derivazione.",
      },
    ],
  },

  ar: {
    title: "حاسبة سماكة السلك / الأمبيرية (AWG)",
    short: "احسب قطر السلك AWG والمقطع العرضي والأمبيرية وانخفاض الجهد لدائرتك.",
    description:
      "حاسبة مجانية لسماكة السلك AWG. أدخل مقياس السلك والتيار والطول للحصول على القطر والمساحة وأمبيرية NEC وانخفاض الجهد وتقييم الملاءمة.",
    keywords: [
      "حاسبة سماكة سلك AWG",
      "أمبيرية سلك",
      "قطر سلك مم",
      "حاسبة انخفاض الجهد",
      "أمبيرية NEC",
      "AWG إلى مم²",
      "حجم سلك كهربائي",
    ],
    inputs: {
      awg: {
        label: "سماكة السلك (AWG)",
        help: "American Wire Gauge — الأرقام الأكبر تعني أسلاكاً أرفع. 4/0 هو الأسمك هنا.",
      },
      current: {
        label: "تيار الدائرة (A)",
        help: "التيار المتدفق في الدائرة. يُستخدم لحساب انخفاض الجهد.",
      },
      lengthM: {
        label: "الطول في اتجاه واحد (م)",
        help: "المسافة من المصدر إلى الحمل بالمتر. يستخدم انخفاض الجهد ضعف هذه القيمة (ذهاب وإياب).",
      },
      loadCurrent: {
        label: "تيار الحمل (A)",
        help: "تيار الحمل الفعلي للتحقق من الملاءمة. يساوي تيار الدائرة إذا لم يُحدد.",
      },
    },
    outputs: {
      ampacity: {
        label: "الأمبيرية (A)",
        help: "الحد الأقصى للتيار المستمر وفق NEC 310.15(B)(16) — عمود 60°C، نحاس، هواء حر.",
      },
      diameterMm: {
        label: "قطر الموصل (مم)",
        help: "القطر الفيزيائي للموصل المحسوب من معادلة AWG.",
      },
      areaMm2: {
        label: "المقطع العرضي (مم²)",
        help: "المساحة الدائرية للمقطع العرضي للموصل.",
      },
      resistancePerMeterOhm: {
        label: "المقاومة لكل متر (Ω/م)",
        help: "مقاومة التيار المستمر باستخدام مقاومية النحاس ρ = 1.724×10⁻⁸ Ω·م عند 20°C.",
      },
      voltageDrop: {
        label: "انخفاض الجهد (V)",
        help: "إجمالي انخفاض الجهد ذهاباً وإياباً: V = I × R/م × 2 × الطول.",
      },
      voltageDropPct: {
        label: "انخفاض الجهد (%)",
        help: "نسبة انخفاض الجهد بالنسبة لـ 120V الاسمية. توصي NEC بـ ≤3% للدوائر الفرعية.",
      },
      isSuitable: {
        label: "السلك مناسب",
        help: "صحيح عندما يكون تيار الحمل ≤ الأمبيرية وانخفاض الجهد ≤ 3%.",
      },
    },
    options: {
      awg: {
        "22": "22 AWG", "20": "20 AWG", "18": "18 AWG", "16": "16 AWG",
        "14": "14 AWG", "12": "12 AWG", "10": "10 AWG", "8": "8 AWG",
        "6": "6 AWG", "4": "4 AWG", "2": "2 AWG", "1": "1 AWG",
        "1/0": "1/0 AWG", "2/0": "2/0 AWG", "3/0": "3/0 AWG", "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "يجب أن يكون التيار بين 0 و400 أمبير.",
      lengthOutOfRange: "يجب أن يكون الطول بين 0.1 و1000 متر.",
    },
    faq: [
      {
        q: "ما هو AWG؟",
        a: "AWG يرمز إلى American Wire Gauge، نظام قياسي لسماكة الأسلاك يُستخدم أساساً في الولايات المتحدة وكندا. بشكل مضاد للحدس، الأرقام الأكبر تعني أسلاكاً أرفع.",
      },
      {
        q: "ما هي الأمبيرية؟",
        a: "الأمبيرية هي الحد الأقصى للتيار الكهربائي الذي يمكن للموصل حمله باستمرار دون تجاوز درجة حرارته الاسمية. القيم مأخوذة من جدول NEC 310.15(B)(16).",
      },
      {
        q: "لماذا يعد انخفاض الجهد مهماً؟",
        a: "يؤدي انخفاض الجهد المفرط إلى أداء ضعيف للمعدات وارتفاع حرارة المحركات وتذبذب الإضاءة. توصي NEC بحد أقصى 3% لانخفاض الجهد في الدوائر الفرعية.",
      },
    ],
  },

  ru: {
    title: "Калькулятор сечения провода / Допустимый ток (AWG)",
    short: "Рассчитайте диаметр, сечение, допустимый ток и падение напряжения для вашего кабеля AWG.",
    description:
      "Бесплатный калькулятор сечения провода AWG. Введите калибр провода, ток и длину, чтобы получить диаметр, площадь сечения, допустимый ток по NEC, падение напряжения и оценку пригодности.",
    keywords: [
      "калькулятор сечения провода AWG",
      "допустимый ток провода",
      "диаметр провода мм",
      "калькулятор падения напряжения",
      "NEC допустимый ток",
      "AWG в мм²",
      "сечение электрического провода",
    ],
    inputs: {
      awg: {
        label: "Калибр провода (AWG)",
        help: "American Wire Gauge — большие числа означают более тонкий провод. 4/0 — самый толстый здесь.",
      },
      current: {
        label: "Ток цепи (А)",
        help: "Ток, протекающий в цепи. Используется для расчёта падения напряжения.",
      },
      lengthM: {
        label: "Длина в одну сторону (м)",
        help: "Расстояние от источника до нагрузки в метрах. Падение напряжения использует удвоенное расстояние (туда и обратно).",
      },
      loadCurrent: {
        label: "Ток нагрузки (А)",
        help: "Фактический ток нагрузки для проверки пригодности. По умолчанию равен току цепи.",
      },
    },
    outputs: {
      ampacity: {
        label: "Допустимый ток (А)",
        help: "Максимальный длительный ток по NEC 310.15(B)(16) — столбец 60°C, медь, открытый воздух.",
      },
      diameterMm: {
        label: "Диаметр проводника (мм)",
        help: "Физический диаметр проводника, рассчитанный по формуле AWG.",
      },
      areaMm2: {
        label: "Площадь сечения (мм²)",
        help: "Круговое поперечное сечение проводника.",
      },
      resistancePerMeterOhm: {
        label: "Сопротивление на метр (Ом/м)",
        help: "Постоянный ток сопротивление при удельном сопротивлении меди ρ = 1,724×10⁻⁸ Ом·м при 20°C.",
      },
      voltageDrop: {
        label: "Падение напряжения (В)",
        help: "Суммарное падение напряжения туда и обратно: V = I × R/м × 2 × длина.",
      },
      voltageDropPct: {
        label: "Падение напряжения (%)",
        help: "Процентное падение напряжения относительно номинала 120В. NEC рекомендует ≤3% для ответвительных цепей.",
      },
      isSuitable: {
        label: "Провод пригоден",
        help: "Истина, если ток нагрузки ≤ допустимый ток и падение напряжения ≤ 3%.",
      },
    },
    options: {
      awg: {
        "22": "22 AWG", "20": "20 AWG", "18": "18 AWG", "16": "16 AWG",
        "14": "14 AWG", "12": "12 AWG", "10": "10 AWG", "8": "8 AWG",
        "6": "6 AWG", "4": "4 AWG", "2": "2 AWG", "1": "1 AWG",
        "1/0": "1/0 AWG", "2/0": "2/0 AWG", "3/0": "3/0 AWG", "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "Ток должен быть от 0 до 400 А.",
      lengthOutOfRange: "Длина должна быть от 0,1 до 1000 м.",
    },
    faq: [
      {
        q: "Что такое AWG?",
        a: "AWG (American Wire Gauge) — стандартная система калибровки проводов, используемая преимущественно в США и Канаде. Парадоксально, но большие числа AWG соответствуют более тонким проводам.",
      },
      {
        q: "Что такое допустимый ток (ampacity)?",
        a: "Допустимый ток — максимальный постоянный ток, который проводник может нести без превышения своей температурной категории. Значения взяты из таблицы NEC 310.15(B)(16).",
      },
      {
        q: "Почему важно падение напряжения?",
        a: "Избыточное падение напряжения приводит к недостаточной производительности оборудования, перегреву двигателей и мерцанию освещения. NEC рекомендует не более 3% для ответвительных цепей.",
      },
    ],
  },

  zh: {
    title: "导线规格/载流量计算器（AWG）",
    short: "计算AWG导线的直径、截面积、载流量和电压降。",
    description:
      "免费AWG导线计算器。输入线规、电流和长度，获取直径、截面积、NEC载流量、电压降及适用性评估。",
    keywords: [
      "AWG导线计算器",
      "导线载流量计算器",
      "导线直径毫米",
      "电压降计算器",
      "NEC载流量",
      "AWG转mm2",
      "电线尺寸",
    ],
    inputs: {
      awg: {
        label: "导线规格（AWG）",
        help: "美国线规——数字越大，导线越细。4/0是这里最粗的规格。",
      },
      current: {
        label: "电路电流（A）",
        help: "电路中流动的电流，用于计算电压降。",
      },
      lengthM: {
        label: "单程长度（m）",
        help: "从电源到负载的距离（米）。电压降使用双倍（往返）。",
      },
      loadCurrent: {
        label: "负载电流（A）",
        help: "用于适用性检查的实际负载电流。未设置时默认为电路电流。",
      },
    },
    outputs: {
      ampacity: {
        label: "载流量（A）",
        help: "NEC 310.15(B)(16)规定的最大连续电流——60°C栏，铜导体，空气中。",
      },
      diameterMm: {
        label: "导体直径（mm）",
        help: "根据AWG公式计算的导体物理直径。",
      },
      areaMm2: {
        label: "截面积（mm²）",
        help: "导体的圆形截面积。",
      },
      resistancePerMeterOhm: {
        label: "每米电阻（Ω/m）",
        help: "使用铜电阻率ρ=1.724×10⁻⁸Ω·m（20°C）计算的直流电阻。",
      },
      voltageDrop: {
        label: "电压降（V）",
        help: "往返总电压降：V = I × R/m × 2 × 长度。",
      },
      voltageDropPct: {
        label: "电压降（%）",
        help: "相对于120V标称值的电压降百分比。NEC建议支路电路≤3%。",
      },
      isSuitable: {
        label: "导线是否适用",
        help: "当负载电流≤载流量且电压降≤3%时为适用。",
      },
    },
    options: {
      awg: {
        "22": "22 AWG", "20": "20 AWG", "18": "18 AWG", "16": "16 AWG",
        "14": "14 AWG", "12": "12 AWG", "10": "10 AWG", "8": "8 AWG",
        "6": "6 AWG", "4": "4 AWG", "2": "2 AWG", "1": "1 AWG",
        "1/0": "1/0 AWG", "2/0": "2/0 AWG", "3/0": "3/0 AWG", "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "电流必须在0到400安培之间。",
      lengthOutOfRange: "长度必须在0.1到1000米之间。",
    },
    faq: [
      {
        q: "什么是AWG？",
        a: "AWG即美国线规（American Wire Gauge），主要在美国和加拿大使用的标准化导线规格系统。反直觉地，AWG数字越大表示导线越细。",
      },
      {
        q: "什么是载流量？",
        a: "载流量是导体在不超过其温度额定值的情况下可连续承载的最大电流。本计算器的值来自NEC表310.15(B)(16)。",
      },
      {
        q: "为什么电压降很重要？",
        a: "过大的电压降会导致设备性能不足、电机过热和灯光变暗。NEC建议支路电路的电压降不超过3%。",
      },
    ],
  },

  ja: {
    title: "電線規格/許容電流計算機（AWG）",
    short: "AWG電線の直径・断面積・許容電流・電圧降下を計算します。",
    description:
      "無料AWG電線計算機。線規・電流・長さを入力すると、直径・断面積・NEC許容電流・電圧降下・適合性が分かります。",
    keywords: [
      "AWG電線計算機",
      "電線許容電流計算",
      "導体直径mm",
      "電圧降下計算",
      "NEC許容電流",
      "AWGからmm2",
      "電線サイズ選定",
    ],
    inputs: {
      awg: {
        label: "電線規格（AWG）",
        help: "米国電線規格——数字が大きいほど細い電線。4/0がここで最も太い。",
      },
      current: {
        label: "回路電流（A）",
        help: "回路を流れる電流。電圧降下の計算に使用。",
      },
      lengthM: {
        label: "片道長さ（m）",
        help: "電源から負荷までの距離（メートル）。電圧降下はこの2倍（往復）を使用。",
      },
      loadCurrent: {
        label: "負荷電流（A）",
        help: "適合性確認用の実際の負荷電流。未設定の場合は回路電流を使用。",
      },
    },
    outputs: {
      ampacity: {
        label: "許容電流（A）",
        help: "NEC 310.15(B)(16)による最大連続電流——60°C列、銅、気中。",
      },
      diameterMm: {
        label: "導体直径（mm）",
        help: "AWG式で計算した導体の物理的直径。",
      },
      areaMm2: {
        label: "断面積（mm²）",
        help: "導体の円形断面積。",
      },
      resistancePerMeterOhm: {
        label: "単位長抵抗（Ω/m）",
        help: "銅の抵抗率ρ=1.724×10⁻⁸Ω·m（20°C）を用いたDC抵抗。",
      },
      voltageDrop: {
        label: "電圧降下（V）",
        help: "往復合計電圧降下：V = I × R/m × 2 × 長さ。",
      },
      voltageDropPct: {
        label: "電圧降下（%）",
        help: "120V定格に対する電圧降下の割合。NECは分岐回路で≤3%を推奨。",
      },
      isSuitable: {
        label: "電線の適合性",
        help: "負荷電流≤許容電流かつ電圧降下≤3%のとき適合。",
      },
    },
    options: {
      awg: {
        "22": "22 AWG", "20": "20 AWG", "18": "18 AWG", "16": "16 AWG",
        "14": "14 AWG", "12": "12 AWG", "10": "10 AWG", "8": "8 AWG",
        "6": "6 AWG", "4": "4 AWG", "2": "2 AWG", "1": "1 AWG",
        "1/0": "1/0 AWG", "2/0": "2/0 AWG", "3/0": "3/0 AWG", "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "電流は0〜400Aの範囲で入力してください。",
      lengthOutOfRange: "長さは0.1〜1000mの範囲で入力してください。",
    },
    faq: [
      {
        q: "AWGとは何ですか？",
        a: "AWG（American Wire Gauge）は主に米国とカナダで使用される電線規格です。直感に反して、AWG番号が大きいほど細い電線を示します。",
      },
      {
        q: "許容電流（Ampacity）とは？",
        a: "許容電流とは、導体が温度定格を超えずに連続して流せる最大電流です。値はNEC表310.15(B)(16)に基づいています。",
      },
      {
        q: "電圧降下が重要な理由は？",
        a: "電圧降下が大きすぎると機器の性能低下、モーターの過熱、照明のちらつきが発生します。NECは分岐回路で最大3%を推奨しています。",
      },
    ],
  },

  ko: {
    title: "전선 규격/허용 전류 계산기(AWG)",
    short: "AWG 전선의 직경, 단면적, 허용 전류, 전압 강하를 계산하세요.",
    description:
      "무료 AWG 전선 계산기. 전선 규격, 전류, 길이를 입력하면 직경, 단면적, NEC 허용 전류, 전압 강하, 적합성 평가를 확인할 수 있습니다.",
    keywords: [
      "AWG 전선 계산기",
      "전선 허용 전류 계산기",
      "전선 직경 mm",
      "전압 강하 계산기",
      "NEC 허용 전류",
      "AWG를 mm2로",
      "전선 규격 선택",
    ],
    inputs: {
      awg: {
        label: "전선 규격(AWG)",
        help: "미국 전선 규격 — 숫자가 클수록 얇은 전선. 4/0이 여기서 가장 굵습니다.",
      },
      current: {
        label: "회로 전류(A)",
        help: "회로에 흐르는 전류. 전압 강하 계산에 사용됩니다.",
      },
      lengthM: {
        label: "편도 길이(m)",
        help: "전원에서 부하까지의 거리(미터). 전압 강하는 이 값의 두 배(왕복)를 사용합니다.",
      },
      loadCurrent: {
        label: "부하 전류(A)",
        help: "적합성 확인을 위한 실제 부하 전류. 설정되지 않으면 회로 전류를 사용합니다.",
      },
    },
    outputs: {
      ampacity: {
        label: "허용 전류(A)",
        help: "NEC 310.15(B)(16)에 따른 최대 연속 전류 — 60°C 열, 구리, 공기 중.",
      },
      diameterMm: {
        label: "도체 직경(mm)",
        help: "AWG 공식으로 계산된 도체의 물리적 직경.",
      },
      areaMm2: {
        label: "단면적(mm²)",
        help: "도체의 원형 단면적.",
      },
      resistancePerMeterOhm: {
        label: "미터당 저항(Ω/m)",
        help: "구리 저항률 ρ=1.724×10⁻⁸Ω·m(20°C)을 사용한 직류 저항.",
      },
      voltageDrop: {
        label: "전압 강하(V)",
        help: "왕복 총 전압 강하: V = I × R/m × 2 × 길이.",
      },
      voltageDropPct: {
        label: "전압 강하(%)",
        help: "120V 공칭 대비 전압 강하 비율. NEC는 분기 회로에서 ≤3%를 권장합니다.",
      },
      isSuitable: {
        label: "전선 적합 여부",
        help: "부하 전류 ≤ 허용 전류이고 전압 강하 ≤ 3%일 때 적합.",
      },
    },
    options: {
      awg: {
        "22": "22 AWG", "20": "20 AWG", "18": "18 AWG", "16": "16 AWG",
        "14": "14 AWG", "12": "12 AWG", "10": "10 AWG", "8": "8 AWG",
        "6": "6 AWG", "4": "4 AWG", "2": "2 AWG", "1": "1 AWG",
        "1/0": "1/0 AWG", "2/0": "2/0 AWG", "3/0": "3/0 AWG", "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "전류는 0~400A 범위여야 합니다.",
      lengthOutOfRange: "길이는 0.1~1000m 범위여야 합니다.",
    },
    faq: [
      {
        q: "AWG란 무엇인가요?",
        a: "AWG는 미국 전선 규격(American Wire Gauge)으로, 주로 미국과 캐나다에서 사용되는 표준 전선 규격 시스템입니다. 직관과 달리, AWG 숫자가 클수록 더 얇은 전선을 의미합니다.",
      },
      {
        q: "허용 전류(Ampacity)란 무엇인가요?",
        a: "허용 전류는 도체가 온도 정격을 초과하지 않고 지속적으로 흘릴 수 있는 최대 전류입니다. 값은 NEC 표 310.15(B)(16)에서 가져왔습니다.",
      },
      {
        q: "전압 강하가 중요한 이유는 무엇인가요?",
        a: "과도한 전압 강하는 장비 성능 저하, 모터 과열, 조명 깜빡임을 유발합니다. NEC는 분기 회로에서 최대 3%를 권장합니다.",
      },
    ],
  },

  hi: {
    title: "वायर गेज / एम्पेसिटी कैलकुलेटर (AWG)",
    short: "AWG वायर का व्यास, क्रॉस-सेक्शन, एम्पेसिटी और वोल्टेज ड्रॉप निकालें।",
    description:
      "मुफ़्त AWG वायर गेज कैलकुलेटर। वायर गेज, करंट और लंबाई दर्ज करें और व्यास, क्षेत्रफल, NEC एम्पेसिटी, वोल्टेज ड्रॉप और उपयुक्तता मूल्यांकन प्राप्त करें।",
    keywords: [
      "AWG वायर गेज कैलकुलेटर",
      "वायर एम्पेसिटी कैलकुलेटर",
      "वायर व्यास mm",
      "वोल्टेज ड्रॉप कैलकुलेटर",
      "NEC एम्पेसिटी",
      "AWG से mm2",
      "इलेक्ट्रिकल वायर साइज",
    ],
    inputs: {
      awg: {
        label: "वायर गेज (AWG)",
        help: "American Wire Gauge — बड़े नंबर पतले वायर को दर्शाते हैं। 4/0 यहां सबसे मोटा है।",
      },
      current: {
        label: "सर्किट करंट (A)",
        help: "सर्किट में बहने वाला करंट। वोल्टेज ड्रॉप गणना में उपयोग होता है।",
      },
      lengthM: {
        label: "एक तरफ की लंबाई (m)",
        help: "स्रोत से लोड तक की दूरी मीटर में। वोल्टेज ड्रॉप इसके दोगुने (राउंड ट्रिप) का उपयोग करता है।",
      },
      loadCurrent: {
        label: "लोड करंट (A)",
        help: "उपयुक्तता जांच के लिए वास्तविक लोड करंट। सेट न होने पर सर्किट करंट का उपयोग होता है।",
      },
    },
    outputs: {
      ampacity: {
        label: "एम्पेसिटी (A)",
        help: "NEC 310.15(B)(16) के अनुसार अधिकतम सतत करंट — 60°C कॉलम, तांबा, खुली हवा।",
      },
      diameterMm: {
        label: "कंडक्टर व्यास (mm)",
        help: "AWG सूत्र से गणना किया गया कंडक्टर का भौतिक व्यास।",
      },
      areaMm2: {
        label: "क्रॉस-सेक्शन क्षेत्रफल (mm²)",
        help: "कंडक्टर का वृत्ताकार क्रॉस-सेक्शनल क्षेत्रफल।",
      },
      resistancePerMeterOhm: {
        label: "प्रति मीटर रेसिस्टेंस (Ω/m)",
        help: "20°C पर तांबे की प्रतिरोधकता ρ = 1.724×10⁻⁸ Ω·m का उपयोग करके DC रेसिस्टेंस।",
      },
      voltageDrop: {
        label: "वोल्टेज ड्रॉप (V)",
        help: "कुल राउंड-ट्रिप वोल्टेज ड्रॉप: V = I × R/m × 2 × लंबाई।",
      },
      voltageDropPct: {
        label: "वोल्टेज ड्रॉप (%)",
        help: "120V नॉमिनल के सापेक्ष प्रतिशत वोल्टेज ड्रॉप। NEC शाखा सर्किट के लिए ≤3% की सिफारिश करता है।",
      },
      isSuitable: {
        label: "वायर उपयुक्त है",
        help: "जब लोड करंट ≤ एम्पेसिटी और वोल्टेज ड्रॉप ≤ 3% हो।",
      },
    },
    options: {
      awg: {
        "22": "22 AWG", "20": "20 AWG", "18": "18 AWG", "16": "16 AWG",
        "14": "14 AWG", "12": "12 AWG", "10": "10 AWG", "8": "8 AWG",
        "6": "6 AWG", "4": "4 AWG", "2": "2 AWG", "1": "1 AWG",
        "1/0": "1/0 AWG", "2/0": "2/0 AWG", "3/0": "3/0 AWG", "4/0": "4/0 AWG",
      },
    },
    errors: {
      currentOutOfRange: "करंट 0 से 400 A के बीच होना चाहिए।",
      lengthOutOfRange: "लंबाई 0.1 से 1000 m के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "AWG क्या है?",
        a: "AWG का अर्थ American Wire Gauge है, जो मुख्यतः अमेरिका और कनाडा में उपयोग की जाने वाली मानक वायर गेज प्रणाली है। विरोधाभासी रूप से, बड़े AWG नंबर पतले वायर को दर्शाते हैं।",
      },
      {
        q: "एम्पेसिटी क्या है?",
        a: "एम्पेसिटी वह अधिकतम विद्युत धारा है जो एक कंडक्टर बिना अपनी तापमान रेटिंग से अधिक हुए लगातार वहन कर सकता है। इस कैलकुलेटर के मान NEC टेबल 310.15(B)(16) से लिए गए हैं।",
      },
      {
        q: "वोल्टेज ड्रॉप क्यों महत्वपूर्ण है?",
        a: "अत्यधिक वोल्टेज ड्रॉप से उपकरण कम प्रदर्शन करते हैं, मोटर अधिक गर्म होती हैं और रोशनी मंद पड़ जाती है। NEC शाखा सर्किट के लिए अधिकतम 3% वोल्टेज ड्रॉप की सिफारिश करता है।",
      },
    ],
  },
};

export default i18n;
