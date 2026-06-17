import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Beam Deflection Calculator",
    short: "Calculate beam deflection, bending moment, and reactions for simply supported and cantilever beams.",
    description:
      "Free structural beam deflection calculator. Enter beam type, load configuration, span, Young's modulus, and second moment of area to get maximum deflection (mm), bending moment (N·m), shear force (N), and support reactions.",
    keywords: [
      "beam deflection calculator",
      "simply supported beam calculator",
      "cantilever beam calculator",
      "bending moment calculator",
      "structural beam calculator",
      "Euler-Bernoulli beam",
      "beam shear force",
    ],
    inputs: {
      beamType: { label: "Beam type", help: "Simply supported (both ends pinned/rolled) or cantilever (one end fixed)." },
      loadType: { label: "Load type", help: "Point load at center, point load at free end (cantilever only), or uniform distributed load (UDL)." },
      load: { label: "Load (kN or kN/m)", help: "For point loads, enter total load in kN. For UDL, enter load intensity in kN/m." },
      span: { label: "Span (m)", help: "Total length of the beam in metres." },
      E: { label: "Young's modulus (GPa)", help: "Modulus of elasticity. Steel ≈ 200 GPa, concrete ≈ 30 GPa, timber ≈ 10 GPa." },
      I: { label: "Second moment of area (cm⁴)", help: "Moment of inertia of the beam cross-section. Found in section property tables." },
    },
    outputs: {
      maxDeflection: { label: "Max deflection (mm)", help: "Maximum transverse displacement of the beam." },
      maxBendingMoment: { label: "Max bending moment (N·m)", help: "Maximum bending moment along the beam." },
      maxShear: { label: "Max shear force (N)", help: "Maximum shear force along the beam." },
      reactionA: { label: "Reaction A (N)", help: "Support reaction at left end (fixed end for cantilever)." },
      reactionB: { label: "Reaction B (N)", help: "Support reaction at right end (0 for cantilever)." },
    },
    options: {
      beamType: { simplySupported: "Simply Supported", cantilever: "Cantilever" },
      loadType: { pointCenter: "Point Load at Centre", pointEnd: "Point Load at Free End (cantilever)", udl: "Uniform Distributed Load (UDL)" },
    },
    errors: {
      invalidCombination: "Point load at free end is only valid for cantilever beams.",
    },
    faq: [
      {
        q: "What assumptions does this calculator make?",
        a: "This calculator uses Euler-Bernoulli beam theory, which assumes: linear elastic material, small deflections (deflection << span), homogeneous prismatic beam, and no shear deformation. These assumptions are valid for most practical steel and timber beam designs.",
      },
      {
        q: "What is the second moment of area (I)?",
        a: "The second moment of area (also called moment of inertia) measures the beam cross-section's resistance to bending. It is found in structural section tables. For a rectangular section: I = (b × h³) / 12, where b is width and h is depth in the direction of bending.",
      },
      {
        q: "What Young's modulus should I use?",
        a: "Common values: structural steel = 200 GPa, reinforced concrete = 25–30 GPa, timber = 8–12 GPa, aluminum = 70 GPa. Use the value for the beam's primary material.",
      },
    ],
  },
  nl: {
    title: "Balkdoorbuiging Calculator",
    short: "Bereken beam deflection, bending moment, and reactions for simply supported and cantilever beams.",
    description:
      "Gratis structural beam deflection calculator. Enter beam type, load configuration, span, Young's modulus, and second moment of area to get maximum deflection (mm), bending moment (N·m), shear force (N), and support reactions.",
    keywords: [
      "beam deflection calculator",
      "simply supported beam calculator",
      "cantilever beam calculator",
      "bending moment calculator",
      "structural beam calculator",
      "Euler-Bernoulli beam",
      "beam shear force",
    ],
    inputs: {
      beamType: { label: "Beam type", help: "Simply supported (both ends pinned/rolled) or cantilever (one end fixed)." },
      loadType: { label: "Load type", help: "Point load at center, point load at gratis end (cantilever only), or uniform distributed load (UDL)." },
      load: { label: "Load (kN or kN/m)", help: "For point loads, enter total load in kN. For UDL, enter load intensity in kN/m." },
      span: { label: "Span (m)", help: "Total lengte of the beam in metres." },
      E: { label: "Young's modulus (GPa)", help: "Modulus of elasticity. Steel ≈ 200 GPa, concrete ≈ 30 GPa, timber ≈ 10 GPa." },
      I: { label: "Second moment of area (cm⁴)", help: "Moment of inertia of the beam cross-section. Found in section property tables." },
    },
    outputs: {
      maxDeflection: { label: "Max deflection (mm)", help: "Maximum transverse displacement of the beam." },
      maxBendingMoment: { label: "Max bending moment (N·m)", help: "Maximum bending moment along the beam." },
      maxShear: { label: "Max shear force (N)", help: "Maximum shear force along the beam." },
      reactionA: { label: "Reaction A (N)", help: "Support reaction at left end (fixed end for cantilever)." },
      reactionB: { label: "Reaction B (N)", help: "Support reaction at right end (0 for cantilever)." },
    },
    options: {
      beamType: { simplySupported: "Simply Supported", cantilever: "Cantilever" },
      loadType: { pointCenter: "Point Load at Centre", pointEnd: "Point Load at Gratis End (cantilever)", udl: "Uniform Distributed Load (UDL)" },
    },
    errors: {
      invalidCombination: "Point load at gratis end is only valid for cantilever beams.",
    },
    faq: [
      {
        q: "What assumptions does this calculator make?",
        a: "This calculator uses Euler-Bernoulli beam theory, which assumes: linear elastic material, small deflections (deflection << span), homogeneous prismatic beam, and no shear deformatteerion. These assumptions are valid for most practical steel and timber beam designs.",
      },
      {
        q: "What is the second moment of area (I)?",
        a: "The second moment of area (also called moment of inertia) measures the beam cross-section's resistance to bending. It is found in structural section tables. For a rectangular section: I = (b × h³) / 12, where b is breedte and h is depth in the direction of bending.",
      },
      {
        q: "What Young's modulus should I use?",
        a: "Common values: structural steel = 200 GPa, reinforced concrete = 25–30 GPa, timber = 8–12 GPa, aluminum = 70 GPa. Use the value for the beam's primary material.",
      },
    ],
  },

  pl: {
    title: "Ugięcie Belki Kalkulator",
    short: "Oblicz beam deflection, bending moment, and reactions for simply supported and cantilever beams.",
    description:
      "Darmowy structural beam deflection kalkulator. Enter beam type, load configuration, span, Young's modulus, and second moment of area to get maximum deflection (mm), bending moment (N·m), shear force (N), and support reactions.",
    keywords: [
      "beam deflection kalkulator",
      "simply supported beam kalkulator",
      "cantilever beam kalkulator",
      "bending moment kalkulator",
      "structural beam kalkulator",
      "Euler-Bernoulli beam",
      "beam shear force",
    ],
    inputs: {
      beamType: { label: "Beam type", help: "Simply supported (both ends pinned/rolled) or cantilever (one end fixed)." },
      loadType: { label: "Load type", help: "Point load at center, point load at darmowy end (cantilever only), or uniform distributed load (UDL)." },
      load: { label: "Load (kN or kN/m)", help: "For point loads, enter total load in kN. For UDL, enter load intensity in kN/m." },
      span: { label: "Span (m)", help: "Total długość of the beam in metres." },
      E: { label: "Young's modulus (GPa)", help: "Modulus of elasticity. Steel ≈ 200 GPa, concrete ≈ 30 GPa, timber ≈ 10 GPa." },
      I: { label: "Second moment of area (cm⁴)", help: "Moment of inertia of the beam cross-section. Found in section property tables." },
    },
    outputs: {
      maxDeflection: { label: "Max deflection (mm)", help: "Maximum transverse displacement of the beam." },
      maxBendingMoment: { label: "Max bending moment (N·m)", help: "Maximum bending moment along the beam." },
      maxShear: { label: "Max shear force (N)", help: "Maximum shear force along the beam." },
      reactionA: { label: "Reaction A (N)", help: "Support reaction at left end (fixed end for cantilever)." },
      reactionB: { label: "Reaction B (N)", help: "Support reaction at right end (0 for cantilever)." },
    },
    options: {
      beamType: { simplySupported: "Simply Supported", cantilever: "Cantilever" },
      loadType: { pointCenter: "Point Load at Centre", pointEnd: "Point Load at Darmowy End (cantilever)", udl: "Uniform Distributed Load (UDL)" },
    },
    errors: {
      invalidCombination: "Point load at darmowy end is only valid for cantilever beams.",
    },
    faq: [
      {
        q: "What assumptions does this kalkulator make?",
        a: "This kalkulator uses Euler-Bernoulli beam theory, which assumes: linear elastic material, small deflections (deflection << span), homogeneous prismatic beam, and no shear deformatujion. These assumptions are valid for most practical steel and timber beam designs.",
      },
      {
        q: "What is the second moment of area (I)?",
        a: "The second moment of area (also called moment of inertia) measures the beam cross-section's resistance to bending. It is found in structural section tables. For a rectangular section: I = (b × h³) / 12, where b is szerokość and h is depth in the direction of bending.",
      },
      {
        q: "What Young's modulus should I use?",
        a: "Common values: structural steel = 200 GPa, reinforced concrete = 25–30 GPa, timber = 8–12 GPa, aluminum = 70 GPa. Use the value for the beam's primary material.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Deflexão de Viga",
    short: "Calcule a deflexão máxima de uma viga sob diferentes cargas.",
    description:
      "Calculadora gratuita de deflexão de viga. Calcule a deflexão de vigas simples, em balanço ou contínuas com carga pontual ou distribuída.",
    keywords: ["deflexão viga", "flexão viga", "viga simples", "balanço", "resistência materiais"],
    inputs: {
      beamType: { label: "Beam type", help: "Simply supported (both ends pinned/rolled) or cantilever (one end fixed)." },
      loadType: { label: "Load type", help: "Point load at center, point load at free end (cantilever only), or uniform distributed load (UDL)." },
      load: { label: "Load (kN or kN/m)", help: "For point loads, enter total load in kN. For UDL, enter load intensity in kN/m." },
      span: { label: "Span (m)", help: "Total length of the beam in metres." },
      E: { label: "Young's modulus (GPa)", help: "Modulus of elasticity. Steel ≈ 200 GPa, concrete ≈ 30 GPa, timber ≈ 10 GPa." },
      I: { label: "Second moment of area (cm⁴)", help: "Moment of inertia of the beam cross-section. Found in section property tables." },
    },
    outputs: {
      maxDeflection: { label: "Max deflection (mm)", help: "Maximum transverse displacement of the beam." },
      maxBendingMoment: { label: "Max bending moment (N·m)", help: "Maximum bending moment along the beam." },
      maxShear: { label: "Max shear force (N)", help: "Maximum shear force along the beam." },
      reactionA: { label: "Reaction A (N)", help: "Support reaction at left end (fixed end for cantilever)." },
      reactionB: { label: "Reaction B (N)", help: "Support reaction at right end (0 for cantilever)." },
    },
    options: {
      beamType: { simplySupported: "Simply Supported", cantilever: "Cantilever" },
      loadType: { pointCenter: "Point Load at Centre", pointEnd: "Point Load at Free End (cantilever)", udl: "Uniform Distributed Load (UDL)" },
    },
    errors: {
      invalidCombination: "Point load at free end is only valid for cantilever beams.",
    },
    faq: [
      {
        q: "What assumptions does this calculator make?",
        a: "This calculator uses Euler-Bernoulli beam theory, which assumes: linear elastic material, small deflections (deflection << span), homogeneous prismatic beam, and no shear deformation. These assumptions are valid for most practical steel and timber beam designs.",
      },
      {
        q: "What is the second moment of area (I)?",
        a: "The second moment of area (also called moment of inertia) measures the beam cross-section's resistance to bending. It is found in structural section tables. For a rectangular section: I = (b × h³) / 12, where b is width and h is depth in the direction of bending.",
      },
      {
        q: "What Young's modulus should I use?",
        a: "Common values: structural steel = 200 GPa, reinforced concrete = 25–30 GPa, timber = 8–12 GPa, aluminum = 70 GPa. Use the value for the beam's primary material.",
      },
    ],
  },
  id: {
    title: "Kalkulator Defleksi Balok",
    short: "Hitung defleksi maksimum balok di bawah berbagai beban.",
    description:
      "Kalkulator defleksi balok gratis. Hitung defleksi balok sederhana, kantilever, atau menerus dengan beban titik atau merata.",
    keywords: ["defleksi balok", "lendutan balok", "balok sederhana", "kantilever", "kekuatan material"],
    inputs: {
      beamType: { label: "Beam type", help: "Simply supported (both ends pinned/rolled) or cantilever (one end fixed)." },
      loadType: { label: "Load type", help: "Point load at center, point load at free end (cantilever only), or uniform distributed load (UDL)." },
      load: { label: "Load (kN or kN/m)", help: "For point loads, enter total load in kN. For UDL, enter load intensity in kN/m." },
      span: { label: "Span (m)", help: "Total length of the beam in metres." },
      E: { label: "Young's modulus (GPa)", help: "Modulus of elasticity. Steel ≈ 200 GPa, concrete ≈ 30 GPa, timber ≈ 10 GPa." },
      I: { label: "Second moment of area (cm⁴)", help: "Moment of inertia of the beam cross-section. Found in section property tables." },
    },
    outputs: {
      maxDeflection: { label: "Max deflection (mm)", help: "Maximum transverse displacement of the beam." },
      maxBendingMoment: { label: "Max bending moment (N·m)", help: "Maximum bending moment along the beam." },
      maxShear: { label: "Max shear force (N)", help: "Maximum shear force along the beam." },
      reactionA: { label: "Reaction A (N)", help: "Support reaction at left end (fixed end for cantilever)." },
      reactionB: { label: "Reaction B (N)", help: "Support reaction at right end (0 for cantilever)." },
    },
    options: {
      beamType: { simplySupported: "Simply Supported", cantilever: "Cantilever" },
      loadType: { pointCenter: "Point Load at Centre", pointEnd: "Point Load at Free End (cantilever)", udl: "Uniform Distributed Load (UDL)" },
    },
    errors: {
      invalidCombination: "Point load at free end is only valid for cantilever beams.",
    },
    faq: [
      {
        q: "What assumptions does this calculator make?",
        a: "This calculator uses Euler-Bernoulli beam theory, which assumes: linear elastic material, small deflections (deflection << span), homogeneous prismatic beam, and no shear deformation. These assumptions are valid for most practical steel and timber beam designs.",
      },
      {
        q: "What is the second moment of area (I)?",
        a: "The second moment of area (also called moment of inertia) measures the beam cross-section's resistance to bending. It is found in structural section tables. For a rectangular section: I = (b × h³) / 12, where b is width and h is depth in the direction of bending.",
      },
      {
        q: "What Young's modulus should I use?",
        a: "Common values: structural steel = 200 GPa, reinforced concrete = 25–30 GPa, timber = 8–12 GPa, aluminum = 70 GPa. Use the value for the beam's primary material.",
      },
    ],
  },


  tr: {
    title: "Kiriş Sehimi Hesaplayıcı",
    short: "Basit mesnetli ve konsol kirişler için sehim, eğilme momenti ve mesnet tepkilerini hesaplayın.",
    description:
      "Ücretsiz yapısal kiriş sehimi hesaplayıcısı. Kiriş türünü, yük düzenini, açıklığı, elastisite modülünü ve atalet momentini girerek maksimum sehimi (mm), eğilme momentini (N·m) ve mesnet tepkilerini elde edin.",
    keywords: ["kiriş sehimi hesaplayıcı", "basit mesnetli kiriş", "konsol kiriş", "eğilme momenti", "yapısal kiriş hesabı"],
    inputs: {
      beamType: { label: "Kiriş tipi", help: "Basit mesnetli (her iki ucu tutturulmuş) veya konsol (bir ucu sabit)." },
      loadType: { label: "Yük tipi", help: "Ortada nokta yük, serbest uçta nokta yük (yalnızca konsol) veya düzgün yayılı yük." },
      load: { label: "Yük (kN veya kN/m)", help: "Nokta yükler için toplam yük (kN), yayılı yük için yük yoğunluğu (kN/m)." },
      span: { label: "Açıklık (m)", help: "Kirişin toplam uzunluğu (metre)." },
      E: { label: "Elastisite modülü (GPa)", help: "Çelik ≈ 200 GPa, beton ≈ 30 GPa, ahşap ≈ 10 GPa." },
      I: { label: "İkinci alan momenti (cm⁴)", help: "Kiriş kesitinin atalet momenti. Profil tablolarından bulunur." },
    },
    outputs: {
      maxDeflection: { label: "Maks sehim (mm)", help: "Kirişin maksimum yanal yerdeğiştirmesi." },
      maxBendingMoment: { label: "Maks eğilme momenti (N·m)", help: "Kiriş boyunca maksimum eğilme momenti." },
      maxShear: { label: "Maks kesme kuvveti (N)", help: "Kiriş boyunca maksimum kesme kuvveti." },
      reactionA: { label: "A mesnet tepkisi (N)", help: "Sol uçtaki mesnet tepkisi." },
      reactionB: { label: "B mesnet tepkisi (N)", help: "Sağ uçtaki mesnet tepkisi (konsol için 0)." },
    },
    options: {
      beamType: { simplySupported: "Basit Mesnetli", cantilever: "Konsol" },
      loadType: { pointCenter: "Ortada Nokta Yük", pointEnd: "Serbest Uçta Nokta Yük (konsol)", udl: "Düzgün Yayılı Yük" },
    },
    errors: { invalidCombination: "Serbest uçta nokta yük yalnızca konsol kirişler için geçerlidir." },
    faq: [
      { q: "Bu hesaplayıcı hangi varsayımları yapar?", a: "Euler-Bernoulli kiriş teorisi kullanılır: doğrusal elastik malzeme, küçük sehimler (sehim << açıklık), homojen prizmatik kiriş ve kayma deformasyonunun ihmal edilmesi." },
    ],
  },

  de: {
    title: "Balkendurchbiegung Rechner",
    short: "Berechnen Sie Durchbiegung, Biegemoment und Auflagerreaktionen für einfach gelagerte Balken und Kragbalken.",
    description:
      "Kostenloser struktureller Balkendurchbiegungsrechner. Geben Sie Balkentyp, Belastung, Spannweite, Elastizitätsmodul und Flächenträgheitsmoment ein.",
    keywords: ["Balkendurchbiegung Rechner", "einfach gelagerter Balken", "Kragbalken", "Biegemoment Rechner", "Baustatik Rechner"],
    inputs: {
      beamType: { label: "Balkentyp", help: "Einfach gelagert (beidseitig aufgelagert) oder Kragbalken (einseitig eingespannt)." },
      loadType: { label: "Belastungsart", help: "Einzellast in Feldmitte, Einzellast am freien Ende (nur Kragbalken) oder gleichmäßig verteilte Last." },
      load: { label: "Last (kN oder kN/m)", help: "Für Einzellasten: Gesamtlast in kN; für verteilte Last: Lastintensität in kN/m." },
      span: { label: "Spannweite (m)", help: "Gesamtlänge des Balkens in Metern." },
      E: { label: "Elastizitätsmodul (GPa)", help: "Stahl ≈ 200 GPa, Beton ≈ 30 GPa, Holz ≈ 10 GPa." },
      I: { label: "Flächenträgheitsmoment (cm⁴)", help: "Trägheitsmoment des Querschnitts, aus Profilstahltabellen." },
    },
    outputs: {
      maxDeflection: { label: "Max. Durchbiegung (mm)", help: "Maximale Querverschiebung des Balkens." },
      maxBendingMoment: { label: "Max. Biegemoment (N·m)", help: "Maximales Biegemoment entlang des Balkens." },
      maxShear: { label: "Max. Querkraft (N)", help: "Maximale Querkraft entlang des Balkens." },
      reactionA: { label: "Auflagerkraft A (N)", help: "Auflagerkraft am linken Ende." },
      reactionB: { label: "Auflagerkraft B (N)", help: "Auflagerkraft am rechten Ende (0 für Kragbalken)." },
    },
    options: {
      beamType: { simplySupported: "Einfach gelagert", cantilever: "Kragbalken" },
      loadType: { pointCenter: "Einzellast in Feldmitte", pointEnd: "Einzellast am freien Ende (Kragbalken)", udl: "Gleichmäßig verteilte Last" },
    },
    errors: { invalidCombination: "Einzellast am freien Ende ist nur für Kragbalken gültig." },
    faq: [
      { q: "Welche Annahmen trifft dieser Rechner?", a: "Es wird die Euler-Bernoulli-Balkentheorie verwendet: lineares elastisches Material, kleine Durchbiegungen, homogener Querschnitt, keine Schubverformung." },
    ],
  },

  fr: {
    title: "Calculateur de Flèche de Poutre",
    short: "Calculez la flèche, le moment fléchissant et les réactions d'appui pour poutres simplement appuyées et en console.",
    description:
      "Calculateur gratuit de flèche de poutre structurelle. Entrez le type de poutre, la charge, la portée, le module de Young et le moment d'inertie.",
    keywords: ["calculateur flèche poutre", "poutre simplement appuyée", "poutre en console", "calculateur moment fléchissant", "calcul structurel"],
    inputs: {
      beamType: { label: "Type de poutre", help: "Simplement appuyée (deux appuis) ou en console (un encastrement)." },
      loadType: { label: "Type de charge", help: "Charge ponctuelle en travée, charge ponctuelle en bout libre (console) ou charge uniformément répartie." },
      load: { label: "Charge (kN ou kN/m)", help: "Pour charges ponctuelles : charge totale en kN ; pour charge répartie : intensité en kN/m." },
      span: { label: "Portée (m)", help: "Longueur totale de la poutre en mètres." },
      E: { label: "Module de Young (GPa)", help: "Acier ≈ 200 GPa, béton ≈ 30 GPa, bois ≈ 10 GPa." },
      I: { label: "Moment d'inertie (cm⁴)", help: "Moment d'inertie de la section transversale, dans les tables de profilés." },
    },
    outputs: {
      maxDeflection: { label: "Flèche max (mm)", help: "Déplacement transversal maximal de la poutre." },
      maxBendingMoment: { label: "Moment fléchissant max (N·m)", help: "Moment fléchissant maximal le long de la poutre." },
      maxShear: { label: "Effort tranchant max (N)", help: "Effort tranchant maximal le long de la poutre." },
      reactionA: { label: "Réaction A (N)", help: "Réaction d'appui à l'extrémité gauche." },
      reactionB: { label: "Réaction B (N)", help: "Réaction d'appui à l'extrémité droite (0 pour console)." },
    },
    options: {
      beamType: { simplySupported: "Simplement appuyée", cantilever: "Console" },
      loadType: { pointCenter: "Charge ponctuelle en travée", pointEnd: "Charge en bout libre (console)", udl: "Charge uniformément répartie" },
    },
    errors: { invalidCombination: "La charge ponctuelle en bout libre n'est valide que pour les poutres en console." },
    faq: [
      { q: "Quelles hypothèses ce calculateur adopte-t-il ?", a: "Il utilise la théorie d'Euler-Bernoulli : matériau linéaire élastique, petites déformations, poutre homogène prismatique, sans déformation de cisaillement." },
    ],
  },

  es: {
    title: "Calculadora de Deflexión de Viga",
    short: "Calcula la deflexión, momento flector y reacciones en vigas biapoyadas y en voladizo.",
    description:
      "Calculadora gratuita de deflexión de viga estructural. Introduce el tipo de viga, carga, luz, módulo de Young y momento de inercia.",
    keywords: ["calculadora deflexión viga", "viga biapoyada", "viga en voladizo", "calculadora momento flector", "cálculo estructural"],
    inputs: {
      beamType: { label: "Tipo de viga", help: "Biapoyada (dos apoyos) o en voladizo (un empotramiento)." },
      loadType: { label: "Tipo de carga", help: "Carga puntual en el centro, en el extremo libre (voladizo) o carga distribuida uniforme." },
      load: { label: "Carga (kN o kN/m)", help: "Para cargas puntuales: carga total en kN; para carga distribuida: intensidad en kN/m." },
      span: { label: "Luz (m)", help: "Longitud total de la viga en metros." },
      E: { label: "Módulo de Young (GPa)", help: "Acero ≈ 200 GPa, hormigón ≈ 30 GPa, madera ≈ 10 GPa." },
      I: { label: "Momento de inercia (cm⁴)", help: "Segundo momento de área de la sección transversal." },
    },
    outputs: {
      maxDeflection: { label: "Deflexión máx (mm)", help: "Desplazamiento transversal máximo de la viga." },
      maxBendingMoment: { label: "Momento flector máx (N·m)", help: "Momento flector máximo a lo largo de la viga." },
      maxShear: { label: "Cortante máx (N)", help: "Fuerza cortante máxima a lo largo de la viga." },
      reactionA: { label: "Reacción A (N)", help: "Reacción en el apoyo izquierdo." },
      reactionB: { label: "Reacción B (N)", help: "Reacción en el apoyo derecho (0 para voladizo)." },
    },
    options: {
      beamType: { simplySupported: "Biapoyada", cantilever: "Voladizo" },
      loadType: { pointCenter: "Carga puntual en el centro", pointEnd: "Carga puntual en extremo libre (voladizo)", udl: "Carga distribuida uniforme" },
    },
    errors: { invalidCombination: "La carga puntual en extremo libre solo es válida para vigas en voladizo." },
    faq: [
      { q: "¿Qué hipótesis utiliza esta calculadora?", a: "Utiliza la teoría de Euler-Bernoulli: material linealmente elástico, pequeñas deflexiones, viga homogénea prismática, sin deformación por cortante." },
    ],
  },

  it: {
    title: "Calcolatore Deflessione Trave",
    short: "Calcola la deflessione, il momento flettente e le reazioni vincolari per travi appoggiate e a mensola.",
    description:
      "Calcolatore gratuito di deflessione trave strutturale. Inserisci tipo di trave, carico, luce, modulo di Young e momento di inerzia.",
    keywords: ["calcolatore deflessione trave", "trave semplicemente appoggiata", "trave a mensola", "calcolatore momento flettente", "calcolo strutturale"],
    inputs: {
      beamType: { label: "Tipo di trave", help: "Semplicemente appoggiata (due appoggi) o a mensola (un incastro)." },
      loadType: { label: "Tipo di carico", help: "Carico concentrato in mezzeria, carico all'estremità libera (mensola) o carico distribuito uniforme." },
      load: { label: "Carico (kN o kN/m)", help: "Per carichi concentrati: carico totale in kN; per carico distribuito: intensità in kN/m." },
      span: { label: "Luce (m)", help: "Lunghezza totale della trave in metri." },
      E: { label: "Modulo di Young (GPa)", help: "Acciaio ≈ 200 GPa, calcestruzzo ≈ 30 GPa, legno ≈ 10 GPa." },
      I: { label: "Momento di inerzia (cm⁴)", help: "Secondo momento di area della sezione trasversale." },
    },
    outputs: {
      maxDeflection: { label: "Deflessione max (mm)", help: "Spostamento trasversale massimo della trave." },
      maxBendingMoment: { label: "Momento flettente max (N·m)", help: "Momento flettente massimo lungo la trave." },
      maxShear: { label: "Taglio max (N)", help: "Forza di taglio massima lungo la trave." },
      reactionA: { label: "Reazione A (N)", help: "Reazione vincolare all'estremità sinistra." },
      reactionB: { label: "Reazione B (N)", help: "Reazione vincolare all'estremità destra (0 per mensola)." },
    },
    options: {
      beamType: { simplySupported: "Semplicemente appoggiata", cantilever: "A mensola" },
      loadType: { pointCenter: "Carico concentrato in mezzeria", pointEnd: "Carico all'estremità libera (mensola)", udl: "Carico distribuito uniforme" },
    },
    errors: { invalidCombination: "Il carico all'estremità libera è valido solo per le travi a mensola." },
    faq: [
      { q: "Quali ipotesi utilizza questo calcolatore?", a: "Si basa sulla teoria di Eulero-Bernoulli: materiale linearmente elastico, piccole deflessioni, trave omogenea prismatica, senza deformazione da taglio." },
    ],
  },

  ar: {
    title: "حاسبة انحراف العتبة",
    short: "احسب انحراف العتبة وعزم الانحناء وردود الأفعال للعتبات المدعومة بسيطاً والكابولية.",
    description:
      "حاسبة مجانية لانحراف العتبات الإنشائية. أدخل نوع العتبة والحمل والامتداد ومعامل المرونة وعزم المساحة الثاني.",
    keywords: ["حاسبة انحراف العتبة", "عتبة مدعومة بسيطاً", "عتبة كابولية", "حاسبة عزم الانحناء", "حسابات إنشائية"],
    inputs: {
      beamType: { label: "نوع العتبة", help: "مدعومة بسيطاً (دعمان) أو كابولية (تثبيت من طرف واحد)." },
      loadType: { label: "نوع الحمل", help: "حمل نقطي في المنتصف، حمل نقطي عند الطرف الحر (كابولية فقط)، أو حمل موزع منتظم." },
      load: { label: "الحمل (كيلونيوتن أو كيلونيوتن/م)", help: "للأحمال النقطية: الحمل الكلي بكيلونيوتن؛ للحمل الموزع: كثافة الحمل بكيلونيوتن/م." },
      span: { label: "الامتداد (م)", help: "الطول الكلي للعتبة بالأمتار." },
      E: { label: "معامل المرونة (جيجاباسكال)", help: "الفولاذ ≈ 200 جيجاباسكال، الخرسانة ≈ 30 جيجاباسكال، الخشب ≈ 10 جيجاباسكال." },
      I: { label: "عزم المساحة الثاني (سم⁴)", help: "عزم القصور الذاتي للمقطع العرضي، من جداول خصائص المقاطع." },
    },
    outputs: {
      maxDeflection: { label: "أقصى انحراف (مم)", help: "الإزاحة العرضية القصوى للعتبة." },
      maxBendingMoment: { label: "أقصى عزم انحناء (ن·م)", help: "أقصى عزم انحناء على طول العتبة." },
      maxShear: { label: "أقصى قوة قص (ن)", help: "أقصى قوة قص على طول العتبة." },
      reactionA: { label: "ردة فعل A (ن)", help: "ردة فعل الدعامة عند الطرف الأيسر." },
      reactionB: { label: "ردة فعل B (ن)", help: "ردة فعل الدعامة عند الطرف الأيمن (0 للكابولية)." },
    },
    options: {
      beamType: { simplySupported: "مدعومة بسيطاً", cantilever: "كابولية" },
      loadType: { pointCenter: "حمل نقطي في المنتصف", pointEnd: "حمل نقطي عند الطرف الحر (كابولية)", udl: "حمل موزع منتظم" },
    },
    errors: { invalidCombination: "الحمل النقطي عند الطرف الحر صالح فقط للعتبات الكابولية." },
    faq: [
      { q: "ما الافتراضات التي تستخدمها هذه الحاسبة؟", a: "تستخدم نظرية أويلر-برنولي: مادة مرنة خطياً، انحرافات صغيرة، عتبة متجانسة منشورية، بدون تشوه قصي." },
    ],
  },

  ru: {
    title: "Калькулятор прогиба балки",
    short: "Рассчитайте прогиб, изгибающий момент и реакции опор для просто опёртых и консольных балок.",
    description:
      "Бесплатный калькулятор прогиба строительной балки. Введите тип балки, нагрузку, пролёт, модуль Юнга и момент инерции.",
    keywords: ["калькулятор прогиба балки", "просто опёртая балка", "консольная балка", "калькулятор изгибающего момента", "строительный расчёт"],
    inputs: {
      beamType: { label: "Тип балки", help: "Просто опёртая (две опоры) или консольная (одна заделка)." },
      loadType: { label: "Тип нагрузки", help: "Сосредоточенная нагрузка в середине пролёта, на свободном конце (консоль) или равномерно распределённая нагрузка." },
      load: { label: "Нагрузка (кН или кН/м)", help: "Для сосредоточенных нагрузок — в кН; для распределённых — интенсивность в кН/м." },
      span: { label: "Пролёт (м)", help: "Общая длина балки в метрах." },
      E: { label: "Модуль Юнга (ГПа)", help: "Сталь ≈ 200 ГПа, бетон ≈ 30 ГПа, древесина ≈ 10 ГПа." },
      I: { label: "Момент инерции (см⁴)", help: "Момент инерции поперечного сечения из таблиц сортамента." },
    },
    outputs: {
      maxDeflection: { label: "Макс. прогиб (мм)", help: "Максимальное поперечное смещение балки." },
      maxBendingMoment: { label: "Макс. изгибающий момент (Н·м)", help: "Максимальный изгибающий момент по длине балки." },
      maxShear: { label: "Макс. перерезывающая сила (Н)", help: "Максимальная поперечная сила по длине балки." },
      reactionA: { label: "Реакция A (Н)", help: "Реакция опоры на левом конце." },
      reactionB: { label: "Реакция B (Н)", help: "Реакция опоры на правом конце (0 для консоли)." },
    },
    options: {
      beamType: { simplySupported: "Просто опёртая", cantilever: "Консольная" },
      loadType: { pointCenter: "Сосредоточенная нагрузка в середине", pointEnd: "Нагрузка на свободном конце (консоль)", udl: "Равномерно распределённая нагрузка" },
    },
    errors: { invalidCombination: "Нагрузка на свободном конце допустима только для консольных балок." },
    faq: [
      { q: "Какие допущения делает этот калькулятор?", a: "Используется теория Эйлера-Бернулли: линейно упругий материал, малые прогибы, однородная призматическая балка, без учёта сдвиговой деформации." },
    ],
  },

  zh: {
    title: "梁挠度计算器",
    short: "计算简支梁和悬臂梁的挠度、弯矩和支座反力。",
    description:
      "免费结构梁挠度计算器。输入梁类型、荷载、跨度、杨氏模量和截面惯性矩，获得最大挠度（mm）、弯矩（N·m）、剪力（N）和支座反力。",
    keywords: ["梁挠度计算器", "简支梁计算器", "悬臂梁计算器", "弯矩计算器", "结构梁计算器"],
    inputs: {
      beamType: { label: "梁类型", help: "简支梁（两端铰支）或悬臂梁（一端固定）。" },
      loadType: { label: "荷载类型", help: "跨中集中荷载、自由端集中荷载（仅悬臂梁）或均布荷载。" },
      load: { label: "荷载（kN或kN/m）", help: "集中荷载输入总荷载（kN）；均布荷载输入荷载强度（kN/m）。" },
      span: { label: "跨度（m）", help: "梁的总长度（米）。" },
      E: { label: "杨氏模量（GPa）", help: "钢材≈200GPa，混凝土≈30GPa，木材≈10GPa。" },
      I: { label: "截面惯性矩（cm⁴）", help: "梁截面的第二面积矩，可从截面属性表中查取。" },
    },
    outputs: {
      maxDeflection: { label: "最大挠度（mm）", help: "梁的最大横向位移。" },
      maxBendingMoment: { label: "最大弯矩（N·m）", help: "梁上的最大弯矩。" },
      maxShear: { label: "最大剪力（N）", help: "梁上的最大剪切力。" },
      reactionA: { label: "支座A反力（N）", help: "左端（悬臂梁固定端）的支座反力。" },
      reactionB: { label: "支座B反力（N）", help: "右端的支座反力（悬臂梁为0）。" },
    },
    options: {
      beamType: { simplySupported: "简支梁", cantilever: "悬臂梁" },
      loadType: { pointCenter: "跨中集中荷载", pointEnd: "自由端集中荷载（悬臂梁）", udl: "均布荷载" },
    },
    errors: { invalidCombination: "自由端集中荷载仅适用于悬臂梁。" },
    faq: [
      { q: "本计算器采用哪些假设？", a: "使用欧拉-伯努利梁理论：线弹性材料、小变形（挠度远小于跨度）、均质棱柱形梁、不计剪切变形。" },
    ],
  },

  ja: {
    title: "梁のたわみ計算機",
    short: "単純支持梁と片持ち梁のたわみ、曲げモーメント、支点反力を計算します。",
    description:
      "無料の構造梁たわみ計算機。梁の種類、荷重、スパン、ヤング率、断面2次モーメントを入力して最大たわみ（mm）、曲げモーメント（N·m）、せん断力（N）、支点反力を求めます。",
    keywords: ["梁たわみ計算機", "単純支持梁計算機", "片持ち梁計算機", "曲げモーメント計算機", "構造梁計算機"],
    inputs: {
      beamType: { label: "梁の種類", help: "単純支持梁（両端ピン）または片持ち梁（一端固定）。" },
      loadType: { label: "荷重の種類", help: "中央集中荷重、自由端集中荷重（片持ち梁のみ）、または等分布荷重。" },
      load: { label: "荷重（kN または kN/m）", help: "集中荷重は総荷重（kN）、等分布荷重は荷重強度（kN/m）を入力。" },
      span: { label: "スパン（m）", help: "梁の全長（メートル）。" },
      E: { label: "ヤング率（GPa）", help: "鋼材 ≈ 200 GPa、コンクリート ≈ 30 GPa、木材 ≈ 10 GPa。" },
      I: { label: "断面2次モーメント（cm⁴）", help: "断面の断面2次モーメント。鋼材表から参照。" },
    },
    outputs: {
      maxDeflection: { label: "最大たわみ（mm）", help: "梁の最大横変位。" },
      maxBendingMoment: { label: "最大曲げモーメント（N·m）", help: "梁に沿った最大曲げモーメント。" },
      maxShear: { label: "最大せん断力（N）", help: "梁に沿った最大せん断力。" },
      reactionA: { label: "支点反力A（N）", help: "左端（片持ち梁の固定端）の支点反力。" },
      reactionB: { label: "支点反力B（N）", help: "右端の支点反力（片持ち梁は0）。" },
    },
    options: {
      beamType: { simplySupported: "単純支持梁", cantilever: "片持ち梁" },
      loadType: { pointCenter: "中央集中荷重", pointEnd: "自由端集中荷重（片持ち梁）", udl: "等分布荷重" },
    },
    errors: { invalidCombination: "自由端の集中荷重は片持ち梁にのみ適用できます。" },
    faq: [
      { q: "この計算機はどのような仮定を用いていますか？", a: "オイラー・ベルヌーイ梁理論を使用：線形弾性材料、小たわみ（たわみ<<スパン）、均質な角柱形梁、せん断変形は無視。" },
    ],
  },

  ko: {
    title: "보 처짐 계산기",
    short: "단순지지보와 캔틸레버보의 처짐, 휨 모멘트, 지점 반력을 계산합니다.",
    description:
      "무료 구조 보 처짐 계산기. 보 유형, 하중, 경간, 탄성계수, 단면 2차 모멘트를 입력하면 최대 처짐(mm), 휨 모멘트(N·m), 전단력(N), 지점 반력을 구할 수 있습니다.",
    keywords: ["보 처짐 계산기", "단순지지보 계산기", "캔틸레버보 계산기", "휨 모멘트 계산기", "구조 보 계산기"],
    inputs: {
      beamType: { label: "보 유형", help: "단순지지보(양단 핀/롤러) 또는 캔틸레버보(일단 고정)." },
      loadType: { label: "하중 유형", help: "중앙 집중하중, 자유단 집중하중(캔틸레버만), 또는 등분포하중." },
      load: { label: "하중(kN 또는 kN/m)", help: "집중하중은 총 하중(kN), 등분포하중은 하중 강도(kN/m) 입력." },
      span: { label: "경간(m)", help: "보의 전체 길이(미터)." },
      E: { label: "탄성계수(GPa)", help: "강재 ≈ 200 GPa, 콘크리트 ≈ 30 GPa, 목재 ≈ 10 GPa." },
      I: { label: "단면 2차 모멘트(cm⁴)", help: "보 단면의 단면 2차 모멘트. 단면 특성표에서 확인." },
    },
    outputs: {
      maxDeflection: { label: "최대 처짐(mm)", help: "보의 최대 횡방향 변위." },
      maxBendingMoment: { label: "최대 휨 모멘트(N·m)", help: "보를 따라 최대 휨 모멘트." },
      maxShear: { label: "최대 전단력(N)", help: "보를 따라 최대 전단력." },
      reactionA: { label: "반력 A(N)", help: "좌단(캔틸레버보의 고정단)의 지점 반력." },
      reactionB: { label: "반력 B(N)", help: "우단의 지점 반력(캔틸레버보는 0)." },
    },
    options: {
      beamType: { simplySupported: "단순지지보", cantilever: "캔틸레버보" },
      loadType: { pointCenter: "중앙 집중하중", pointEnd: "자유단 집중하중(캔틸레버)", udl: "등분포하중" },
    },
    errors: { invalidCombination: "자유단 집중하중은 캔틸레버보에만 적용됩니다." },
    faq: [
      { q: "이 계산기는 어떤 가정을 사용하나요?", a: "오일러-베르누이 보 이론을 사용합니다: 선형 탄성 재료, 소변형(처짐 << 경간), 균질한 각기둥형 보, 전단 변형 무시." },
    ],
  },

  hi: {
    title: "बीम विक्षेपण कैलकुलेटर",
    short: "सिम्पली सपोर्टेड और कैंटिलीवर बीम के लिए विक्षेपण, झुकाव क्षण और समर्थन प्रतिक्रियाएं गणना करें।",
    description:
      "निःशुल्क संरचनात्मक बीम विक्षेपण कैलकुलेटर। बीम प्रकार, भार, स्पैन, यंग मॉड्यूलस और क्षेत्र का दूसरा क्षण दर्ज करके अधिकतम विक्षेपण (mm), झुकाव क्षण (N·m), अपरूपण बल (N) और समर्थन प्रतिक्रियाएं प्राप्त करें।",
    keywords: ["बीम विक्षेपण कैलकुलेटर", "सिम्पली सपोर्टेड बीम", "कैंटिलीवर बीम", "झुकाव क्षण कैलकुलेटर", "संरचनात्मक बीम कैलकुलेटर"],
    inputs: {
      beamType: { label: "बीम का प्रकार", help: "सिम्पली सपोर्टेड (दोनों छोर पिन) या कैंटिलीवर (एक छोर स्थिर)।" },
      loadType: { label: "भार का प्रकार", help: "केंद्र पर बिंदु भार, मुक्त छोर पर बिंदु भार (केवल कैंटिलीवर), या समान वितरित भार।" },
      load: { label: "भार (kN या kN/m)", help: "बिंदु भार के लिए कुल भार (kN); समान वितरित भार के लिए भार तीव्रता (kN/m)।" },
      span: { label: "स्पैन (m)", help: "बीम की कुल लंबाई (मीटर में)।" },
      E: { label: "यंग मॉड्यूलस (GPa)", help: "स्टील ≈ 200 GPa, कंक्रीट ≈ 30 GPa, लकड़ी ≈ 10 GPa।" },
      I: { label: "क्षेत्र का दूसरा क्षण (cm⁴)", help: "बीम क्रॉस-सेक्शन का जड़त्व का क्षण। अनुभाग गुण तालिकाओं से प्राप्त करें।" },
    },
    outputs: {
      maxDeflection: { label: "अधिकतम विक्षेपण (mm)", help: "बीम का अधिकतम अनुप्रस्थ विस्थापन।" },
      maxBendingMoment: { label: "अधिकतम झुकाव क्षण (N·m)", help: "बीम के साथ अधिकतम झुकाव क्षण।" },
      maxShear: { label: "अधिकतम अपरूपण बल (N)", help: "बीम के साथ अधिकतम अपरूपण बल।" },
      reactionA: { label: "प्रतिक्रिया A (N)", help: "बाएं छोर पर समर्थन प्रतिक्रिया (कैंटिलीवर के लिए स्थिर छोर)।" },
      reactionB: { label: "प्रतिक्रिया B (N)", help: "दाएं छोर पर समर्थन प्रतिक्रिया (कैंटिलीवर के लिए 0)।" },
    },
    options: {
      beamType: { simplySupported: "सिम्पली सपोर्टेड", cantilever: "कैंटिलीवर" },
      loadType: { pointCenter: "केंद्र पर बिंदु भार", pointEnd: "मुक्त छोर पर बिंदु भार (कैंटिलीवर)", udl: "समान वितरित भार" },
    },
    errors: { invalidCombination: "मुक्त छोर पर बिंदु भार केवल कैंटिलीवर बीम के लिए मान्य है।" },
    faq: [
      { q: "यह कैलकुलेटर कौन से मान्यताओं का उपयोग करता है?", a: "यह कैलकुलेटर ऑयलर-बर्नौली बीम सिद्धांत का उपयोग करता है: रैखिक लोचदार सामग्री, छोटे विक्षेपण, सजातीय प्रिज्मीय बीम, अपरूपण विरूपण की उपेक्षा।" },
    ],
  },
};

export default i18n;
