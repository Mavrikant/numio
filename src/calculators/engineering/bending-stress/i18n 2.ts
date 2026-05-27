import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Bending Stress Calculator",
    short: "Calculate maximum bending stress, safety factor, and material utilization from bending moment and section modulus.",
    description:
      "Free bending stress calculator for structural design. Enter bending moment (kN·m) and section modulus (cm³) to calculate maximum stress (MPa), safety factor, and utilization ratio for steel, aluminum, concrete, or timber.",
    keywords: [
      "bending stress calculator",
      "maximum stress",
      "section modulus",
      "safety factor",
      "structural design",
      "mechanics of materials",
      "stress analysis",
    ],
    inputs: {
      moment: {
        label: "Bending moment (kN·m)",
        help: "Maximum bending moment acting on the beam section.",
      },
      sectionModulus: {
        label: "Section modulus (cm³)",
        help: "Section modulus (Z) of the beam cross-section. Found in section property tables or calculated from I/c.",
      },
      materialType: {
        label: "Material type",
        help: "Select the beam material to determine yield strength and safety limits.",
      },
    },
    outputs: {
      stressMPa: {
        label: "Bending stress (MPa)",
        help: "Maximum bending stress in the extreme fiber, calculated as M/Z.",
      },
      yieldStrengthMPa: {
        label: "Yield strength (MPa)",
        help: "Material yield strength (or compressive strength for concrete).",
      },
      safetyFactor: {
        label: "Safety factor",
        help: "Ratio of yield strength to actual stress. Should exceed 1.0 for safe design.",
      },
      utilizationRatio: {
        label: "Utilization ratio",
        help: "Percentage of allowable stress used (stress / (fy / γM)). Should be ≤100%.",
      },
      classification: {
        label: "Classification",
        help: "Safety classification: OK (≤85%), Warning (85–100%), Critical (>100%).",
      },
    },
    options: {
      materialType: {
        steel: "Steel (S275)",
        aluminum: "Aluminum (6061-T6)",
        concrete: "Concrete (C30)",
        timber: "Timber (softwood)",
      },
    },
    errors: {
      invalidInputs: "Moment and section modulus must be positive.",
    },
    faq: [
      {
        q: "What is section modulus (Z)?",
        a: "Section modulus is a measure of a beam's resistance to bending. It is calculated as Z = I/c, where I is the second moment of area and c is the distance from the neutral axis to the extreme fiber. For a rectangular section: Z = b×h²/6.",
      },
      {
        q: "What does the safety factor mean?",
        a: "The safety factor is the ratio of yield strength to actual stress (fy/σ). A safety factor > 1.5 is typically required for structural designs under static loading. Values <1.0 indicate overstress.",
      },
      {
        q: "When is the design critical?",
        a: "A design becomes critical when the utilization ratio exceeds 100%, meaning the actual stress surpasses the allowable stress (fy/γM). This requires redesign with a larger section or stronger material.",
      },
      {
        q: "How are different materials compared?",
        a: "Different materials have different yield strengths: steel ≈250 MPa, aluminum ≈240 MPa, concrete ≈30 MPa, timber ≈10 MPa. Selection depends on availability, cost, weight, and environmental conditions.",
      },
      {
        q: "Can I use this for dynamic loads?",
        a: "This calculator assumes static loading. Dynamic loads require fatigue analysis and higher safety factors. Consult a structural engineer for dynamic applications.",
      },
    ],
  },

  tr: {
    title: "Eğilme Gerilmesi Hesaplayıcı",
    short: "Eğilme momentinden ve kesit modülünden maksimum gerilme, güvenlik katsayısı ve malzeme kullanım oranını hesaplayın.",
    description:
      "Yapısal tasarım için ücretsiz eğilme gerilmesi hesaplayıcısı. Eğilme momentini (kN·m) ve kesit modülünü (cm³) girerek, çelik, alüminyum, beton veya ahşap için maksimum gerilmeyi (MPa), güvenlik katsayısını ve kullanım oranını hesaplayın.",
    keywords: [
      "eğilme gerilmesi",
      "maksimum gerilme",
      "kesit modülü",
      "güvenlik katsayısı",
      "yapısal tasarım",
      "malzeme direnci",
      "gerilme analizi",
    ],
    inputs: {
      moment: {
        label: "Eğilme momenti (kN·m)",
        help: "Kiriş kesitine etki eden maksimum eğilme momenti.",
      },
      sectionModulus: {
        label: "Kesit modülü (cm³)",
        help: "Kiriş kesitinin kesit modülü (Z). Profil tablolarından bulunur veya I/c'den hesaplanır.",
      },
      materialType: {
        label: "Malzeme türü",
        help: "Kiriş malzemesini seçerek akma dayanımı ve güvenlik sınırlarını belirleyin.",
      },
    },
    outputs: {
      stressMPa: {
        label: "Eğilme gerilmesi (MPa)",
        help: "Dış lifde maksimum eğilme gerilmesi, M/Z olarak hesaplanır.",
      },
      yieldStrengthMPa: {
        label: "Akma dayanımı (MPa)",
        help: "Malzemenin akma dayanımı (beton için basınç dayanımı).",
      },
      safetyFactor: {
        label: "Güvenlik katsayısı",
        help: "Akma dayanımının gerçek gerilmeye oranı. Güvenli tasarım için 1,5'ten büyük olmalı.",
      },
      utilizationRatio: {
        label: "Kullanım oranı",
        help: "Kullanılan izin verilen gerilmenin yüzdesi (gerilme / (fy / γM)). %100 veya altı olmalı.",
      },
      classification: {
        label: "Sınıflandırma",
        help: "Güvenlik sınıflandırması: Uygun (≤%85), Uyarı (%85–100), Kritik (>%100).",
      },
    },
    options: {
      materialType: {
        steel: "Çelik (S275)",
        aluminum: "Alüminyum (6061-T6)",
        concrete: "Beton (C30)",
        timber: "Ahşap (yumuşak ağaç)",
      },
    },
    errors: {
      invalidInputs: "Moment ve kesit modülü pozitif olmalı.",
    },
    faq: [
      {
        q: "Kesit modülü (Z) nedir?",
        a: "Kesit modülü, bir kirişin bükülmeye karşı direncinin bir ölçüsüdür. Z = I/c olarak hesaplanır; burada I ikinci alan momenti, c ise nötr eksenden dış lif uzaklığıdır. Dikdörtgen kesit için: Z = b×h²/6.",
      },
      {
        q: "Güvenlik katsayısı ne anlama gelir?",
        a: "Güvenlik katsayısı, akma dayanımının gerçek gerilmeye oranıdır (fy/σ). Statik yükleme altında yapısal tasarımlarda > 1,5 tipik olarak gereklidir. <1,0 değerleri aşırı gerilmeyi gösterir.",
      },
      {
        q: "Tasarım ne zaman kritik hale gelir?",
        a: "Tasarım, kullanım oranı %100'ü aştığında kritik hale gelir; bu da gerçek gerilmenin izin verilen gerilmeyi (fy/γM) aştığı anlamına gelir. Daha büyük bir kesit veya daha güçlü malzemeyle yeniden tasarım gerekir.",
      },
      {
        q: "Farklı malzemeler nasıl karşılaştırılır?",
        a: "Malzemenin farklı akma dayanımları vardır: çelik ≈250 MPa, alüminyum ≈240 MPa, beton ≈30 MPa, ahşap ≈10 MPa. Seçim, bulunabilirlik, maliyet, ağırlık ve çevre koşullarına bağlıdır.",
      },
      {
        q: "Bunu dinamik yükler için kullanabilir miyim?",
        a: "Bu hesaplayıcı statik yüklemeyi varsayar. Dinamik yükler, yorulma analizi ve daha yüksek güvenlik katsayıları gerektirir. Dinamik uygulamalar için bir yapı mühendisine danışın.",
      },
    ],
  },

  de: {
    title: "Biegespannungsrechner",
    short: "Maximale Biegespannung, Sicherheitsfaktor und Materialauslastung aus Biegemoment und Widerstandsmoment berechnen.",
    description:
      "Kostenlos Biegespannungsrechner für Tragwerksplanung. Geben Sie Biegemoment (kN·m) und Widerstandsmoment (cm³) ein, um Höchstspannung (MPa), Sicherheitsfaktor und Ausnutzungsgrad für Stahl, Aluminium, Beton oder Holz zu berechnen.",
    keywords: [
      "Biegespannungsrechner",
      "maximale Spannung",
      "Widerstandsmoment",
      "Sicherheitsfaktor",
      "Tragwerksplanung",
      "Werkstoffmechanik",
      "Spannungsanalyse",
    ],
    inputs: {
      moment: {
        label: "Biegemoment (kN·m)",
        help: "Maximales Biegemoment, das auf den Balkenquerschnitt wirkt.",
      },
      sectionModulus: {
        label: "Widerstandsmoment (cm³)",
        help: "Widerstandsmoment (Z) des Balkenquerschnitts. Findet sich in Querschnittstabellen oder wird aus I/c berechnet.",
      },
      materialType: {
        label: "Materialtyp",
        help: "Wählen Sie das Balkenmaterial aus, um Streckgrenze und Sicherheitsgrenzen zu bestimmen.",
      },
    },
    outputs: {
      stressMPa: {
        label: "Biegespannung (MPa)",
        help: "Maximale Biegespannung in der äußersten Faser, berechnet als M/Z.",
      },
      yieldStrengthMPa: {
        label: "Streckgrenze (MPa)",
        help: "Materialstreckgrenze (oder Druckfestigkeit für Beton).",
      },
      safetyFactor: {
        label: "Sicherheitsfaktor",
        help: "Verhältnis der Streckgrenze zur tatsächlichen Spannung. Sollte 1,0 übersteigen für sichere Konstruktion.",
      },
      utilizationRatio: {
        label: "Ausnutzungsgrad",
        help: "Prozentsatz der zulässigen Spannung, die genutzt wird (Spannung / (fy / γM)). Sollte ≤100% sein.",
      },
      classification: {
        label: "Klassifizierung",
        help: "Sicherheitsklassifizierung: OK (≤85%), Warnung (85–100%), Kritisch (>100%).",
      },
    },
    options: {
      materialType: {
        steel: "Stahl (S275)",
        aluminum: "Aluminium (6061-T6)",
        concrete: "Beton (C30)",
        timber: "Holz (Weichholz)",
      },
    },
    errors: {
      invalidInputs: "Moment und Widerstandsmoment müssen positiv sein.",
    },
    faq: [
      {
        q: "Was ist das Widerstandsmoment (Z)?",
        a: "Das Widerstandsmoment ist ein Maß für den Widerstand eines Balkens gegen Biegung. Es wird berechnet als Z = I/c, wobei I das Flächenträgheitsmoment und c der Abstand von der neutralen Achse zur äußersten Faser ist. Für einen rechteckigen Querschnitt: Z = b×h²/6.",
      },
      {
        q: "Was bedeutet der Sicherheitsfaktor?",
        a: "Der Sicherheitsfaktor ist das Verhältnis der Streckgrenze zur tatsächlichen Spannung (fy/σ). Ein Sicherheitsfaktor > 1,5 ist typischerweise für statische Lasten erforderlich. Werte <1,0 deuten auf Überbeanspruchung hin.",
      },
      {
        q: "Wann wird die Konstruktion kritisch?",
        a: "Die Konstruktion wird kritisch, wenn der Ausnutzungsgrad 100% überschreitet, d. h. die tatsächliche Spannung die zulässige Spannung (fy/γM) überschreitet. Dies erfordert eine Neugestaltung mit einem größeren Querschnitt oder stärkerem Material.",
      },
      {
        q: "Wie werden verschiedene Materialien verglichen?",
        a: "Verschiedene Materialien haben unterschiedliche Streckgrenzen: Stahl ≈250 MPa, Aluminium ≈240 MPa, Beton ≈30 MPa, Holz ≈10 MPa. Die Auswahl hängt von Verfügbarkeit, Kosten, Gewicht und Umweltbedingungen ab.",
      },
      {
        q: "Kann ich dies für dynamische Lasten verwenden?",
        a: "Dieser Rechner geht von statischen Lasten aus. Dynamische Lasten erfordern Ermüdungsanalyse und höhere Sicherheitsfaktoren. Konsultieren Sie einen Bauingenieur für dynamische Anwendungen.",
      },
    ],
  },

  fr: {
    title: "Calculatrice de Contrainte de Flexion",
    short: "Calculer la contrainte de flexion maximale, le coefficient de sécurité et le ratio d'utilisation du matériau.",
    description:
      "Calculatrice gratuite de contrainte de flexion pour la conception structurale. Entrez le moment de flexion (kN·m) et le module de section (cm³) pour calculer la contrainte maximale (MPa), le coefficient de sécurité et le ratio d'utilisation pour l'acier, l'aluminium, le béton ou le bois.",
    keywords: [
      "calculatrice de contrainte de flexion",
      "contrainte maximale",
      "module de section",
      "coefficient de sécurité",
      "conception structurale",
      "mécanique des matériaux",
      "analyse des contraintes",
    ],
    inputs: {
      moment: {
        label: "Moment de flexion (kN·m)",
        help: "Moment de flexion maximal agissant sur la section de poutre.",
      },
      sectionModulus: {
        label: "Module de section (cm³)",
        help: "Module de section (Z) de la poutre. Trouvé dans les tableaux de propriétés de section ou calculé à partir de I/c.",
      },
      materialType: {
        label: "Type de matériau",
        help: "Sélectionnez le matériau de la poutre pour déterminer la limite d'élasticité et les limites de sécurité.",
      },
    },
    outputs: {
      stressMPa: {
        label: "Contrainte de flexion (MPa)",
        help: "Contrainte de flexion maximale dans la fibre extrême, calculée comme M/Z.",
      },
      yieldStrengthMPa: {
        label: "Limite d'élasticité (MPa)",
        help: "Limite d'élasticité du matériau (ou résistance à la compression pour le béton).",
      },
      safetyFactor: {
        label: "Coefficient de sécurité",
        help: "Ratio de la limite d'élasticité à la contrainte réelle. Doit dépasser 1,0 pour une conception sûre.",
      },
      utilizationRatio: {
        label: "Ratio d'utilisation",
        help: "Pourcentage de la contrainte admissible utilisée (contrainte / (fy / γM)). Doit être ≤100%.",
      },
      classification: {
        label: "Classification",
        help: "Classification de sécurité: OK (≤85%), Avertissement (85–100%), Critique (>100%).",
      },
    },
    options: {
      materialType: {
        steel: "Acier (S275)",
        aluminum: "Aluminium (6061-T6)",
        concrete: "Béton (C30)",
        timber: "Bois (résineux)",
      },
    },
    errors: {
      invalidInputs: "Le moment et le module de section doivent être positifs.",
    },
    faq: [
      {
        q: "Qu'est-ce que le module de section (Z)?",
        a: "Le module de section est une mesure de la résistance d'une poutre à la flexion. Il est calculé comme Z = I/c, où I est le moment d'inertie et c est la distance de l'axe neutre à la fibre extrême. Pour une section rectangulaire: Z = b×h²/6.",
      },
      {
        q: "Que signifie le coefficient de sécurité?",
        a: "Le coefficient de sécurité est le ratio de la limite d'élasticité à la contrainte réelle (fy/σ). Un coefficient de sécurité > 1,5 est généralement requis pour les charges statiques. Les valeurs <1,0 indiquent une surcontrainte.",
      },
      {
        q: "Quand la conception devient-elle critique?",
        a: "La conception devient critique lorsque le ratio d'utilisation dépasse 100%, ce qui signifie que la contrainte réelle dépasse la contrainte admissible (fy/γM). Cela nécessite une reconception avec une section plus grande ou un matériau plus résistant.",
      },
      {
        q: "Comment les différents matériaux sont-ils comparés?",
        a: "Les différents matériaux ont des limites d'élasticité différentes: acier ≈250 MPa, aluminium ≈240 MPa, béton ≈30 MPa, bois ≈10 MPa. Le choix dépend de la disponibilité, du coût, du poids et des conditions environnementales.",
      },
      {
        q: "Puis-je utiliser cela pour les charges dynamiques?",
        a: "Cette calculatrice suppose des charges statiques. Les charges dynamiques nécessitent une analyse de fatigue et des coefficients de sécurité plus élevés. Consultez un ingénieur en structure pour les applications dynamiques.",
      },
    ],
  },

  es: {
    title: "Calculadora de Esfuerzo de Flexión",
    short: "Calcule el esfuerzo máximo de flexión, factor de seguridad y relación de utilización del material.",
    description:
      "Calculadora gratuita de esfuerzo de flexión para diseño estructural. Ingrese el momento de flexión (kN·m) y módulo de sección (cm³) para calcular esfuerzo máximo (MPa), factor de seguridad y relación de utilización para acero, aluminio, concreto o madera.",
    keywords: [
      "calculadora de esfuerzo de flexión",
      "esfuerzo máximo",
      "módulo de sección",
      "factor de seguridad",
      "diseño estructural",
      "mecánica de materiales",
      "análisis de esfuerzos",
    ],
    inputs: {
      moment: {
        label: "Momento de flexión (kN·m)",
        help: "Momento de flexión máximo que actúa en la sección de viga.",
      },
      sectionModulus: {
        label: "Módulo de sección (cm³)",
        help: "Módulo de sección (Z) de la viga. Se encuentra en tablas de propiedades de sección o se calcula a partir de I/c.",
      },
      materialType: {
        label: "Tipo de material",
        help: "Seleccione el material de la viga para determinar el límite de fluencia y los límites de seguridad.",
      },
    },
    outputs: {
      stressMPa: {
        label: "Esfuerzo de flexión (MPa)",
        help: "Esfuerzo de flexión máximo en la fibra extrema, calculado como M/Z.",
      },
      yieldStrengthMPa: {
        label: "Límite de fluencia (MPa)",
        help: "Límite de fluencia del material (o resistencia a la compresión para concreto).",
      },
      safetyFactor: {
        label: "Factor de seguridad",
        help: "Relación del límite de fluencia al esfuerzo real. Debe exceder 1,0 para diseño seguro.",
      },
      utilizationRatio: {
        label: "Relación de utilización",
        help: "Porcentaje de esfuerzo permitido utilizado (esfuerzo / (fy / γM)). Debe ser ≤100%.",
      },
      classification: {
        label: "Clasificación",
        help: "Clasificación de seguridad: OK (≤85%), Advertencia (85–100%), Crítico (>100%).",
      },
    },
    options: {
      materialType: {
        steel: "Acero (S275)",
        aluminum: "Aluminio (6061-T6)",
        concrete: "Concreto (C30)",
        timber: "Madera (madera blanda)",
      },
    },
    errors: {
      invalidInputs: "El momento y módulo de sección deben ser positivos.",
    },
    faq: [
      {
        q: "¿Qué es el módulo de sección (Z)?",
        a: "El módulo de sección es una medida de la resistencia de una viga a la flexión. Se calcula como Z = I/c, donde I es el momento de inercia y c es la distancia desde el eje neutro hasta la fibra extrema. Para una sección rectangular: Z = b×h²/6.",
      },
      {
        q: "¿Qué significa el factor de seguridad?",
        a: "El factor de seguridad es la relación del límite de fluencia al esfuerzo real (fy/σ). Un factor de seguridad > 1,5 es típicamente requerido para cargas estáticas. Los valores <1,0 indican sobreesfuerzo.",
      },
      {
        q: "¿Cuándo se vuelve crítico el diseño?",
        a: "El diseño se vuelve crítico cuando la relación de utilización excede el 100%, lo que significa que el esfuerzo real supera el esfuerzo permitido (fy/γM). Esto requiere rediseño con una sección más grande o material más resistente.",
      },
      {
        q: "¿Cómo se comparan diferentes materiales?",
        a: "Los diferentes materiales tienen diferentes límites de fluencia: acero ≈250 MPa, aluminio ≈240 MPa, concreto ≈30 MPa, madera ≈10 MPa. La selección depende de disponibilidad, costo, peso y condiciones ambientales.",
      },
      {
        q: "¿Puedo usar esto para cargas dinámicas?",
        a: "Esta calculadora asume cargas estáticas. Las cargas dinámicas requieren análisis de fatiga y factores de seguridad más altos. Consulte con un ingeniero estructural para aplicaciones dinámicas.",
      },
    ],
  },

  it: {
    title: "Calcolatore della Tensione di Flessione",
    short: "Calcolare la tensione massima di flessione, il fattore di sicurezza e il rapporto di utilizzo del materiale.",
    description:
      "Calcolatore gratuito della tensione di flessione per la progettazione strutturale. Inserire il momento di flessione (kN·m) e il modulo di resistenza (cm³) per calcolare la tensione massima (MPa), il fattore di sicurezza e il rapporto di utilizzo per acciaio, alluminio, calcestruzzo o legno.",
    keywords: [
      "calcolatore della tensione di flessione",
      "tensione massima",
      "modulo di resistenza",
      "fattore di sicurezza",
      "progettazione strutturale",
      "meccanica dei materiali",
      "analisi delle tensioni",
    ],
    inputs: {
      moment: {
        label: "Momento di flessione (kN·m)",
        help: "Momento di flessione massimo agente sulla sezione della trave.",
      },
      sectionModulus: {
        label: "Modulo di resistenza (cm³)",
        help: "Modulo di resistenza (Z) della trave. Trovato in tabelle di proprietà di sezione o calcolato da I/c.",
      },
      materialType: {
        label: "Tipo di materiale",
        help: "Selezionare il materiale della trave per determinare il limite di snervamento e i limiti di sicurezza.",
      },
    },
    outputs: {
      stressMPa: {
        label: "Tensione di flessione (MPa)",
        help: "Tensione di flessione massima nella fibra estrema, calcolata come M/Z.",
      },
      yieldStrengthMPa: {
        label: "Limite di snervamento (MPa)",
        help: "Limite di snervamento del materiale (o resistenza a compressione per calcestruzzo).",
      },
      safetyFactor: {
        label: "Fattore di sicurezza",
        help: "Rapporto del limite di snervamento alla tensione reale. Deve superare 1,0 per un design sicuro.",
      },
      utilizationRatio: {
        label: "Rapporto di utilizzo",
        help: "Percentuale di tensione ammissibile utilizzata (tensione / (fy / γM)). Deve essere ≤100%.",
      },
      classification: {
        label: "Classificazione",
        help: "Classificazione di sicurezza: OK (≤85%), Avvertenza (85–100%), Critica (>100%).",
      },
    },
    options: {
      materialType: {
        steel: "Acciaio (S275)",
        aluminum: "Alluminio (6061-T6)",
        concrete: "Calcestruzzo (C30)",
        timber: "Legno (legno tenero)",
      },
    },
    errors: {
      invalidInputs: "Momento e modulo di resistenza devono essere positivi.",
    },
    faq: [
      {
        q: "Cos'è il modulo di resistenza (Z)?",
        a: "Il modulo di resistenza è una misura della resistenza di una trave alla flessione. È calcolato come Z = I/c, dove I è il momento di inerzia e c è la distanza dall'asse neutrale alla fibra estrema. Per una sezione rettangolare: Z = b×h²/6.",
      },
      {
        q: "Cosa significa il fattore di sicurezza?",
        a: "Il fattore di sicurezza è il rapporto tra il limite di snervamento e la tensione reale (fy/σ). Un fattore di sicurezza > 1,5 è tipicamente richiesto per i carichi statici. I valori <1,0 indicano sovratensione.",
      },
      {
        q: "Quando il design diventa critico?",
        a: "Il design diventa critico quando il rapporto di utilizzo supera il 100%, il che significa che la tensione reale supera la tensione ammissibile (fy/γM). Ciò richiede una riprogettazione con una sezione più grande o materiale più resistente.",
      },
      {
        q: "Come vengono confrontati diversi materiali?",
        a: "Diversi materiali hanno diversi limiti di snervamento: acciaio ≈250 MPa, alluminio ≈240 MPa, calcestruzzo ≈30 MPa, legno ≈10 MPa. La selezione dipende da disponibilità, costo, peso e condizioni ambientali.",
      },
      {
        q: "Posso usarlo per carichi dinamici?",
        a: "Questo calcolatore assume carichi statici. I carichi dinamici richiedono analisi di fatica e fattori di sicurezza più elevati. Consultare un ingegnere strutturale per applicazioni dinamiche.",
      },
    ],
  },

  ar: {
    title: "حاسبة إجهاد الانحناء",
    short: "حساب إجهاد الانحناء الأقصى وعامل الأمان ونسبة استخدام المادة من لحظة الانحناء ومعامل المقطع.",
    description:
      "حاسبة مجانية لإجهاد الانحناء للتصميم الهيكلي. أدخل لحظة الانحناء (kN·m) ومعامل المقطع (cm³) لحساب الإجهاد الأقصى (MPa) وعامل الأمان ونسبة الاستخدام للفولاذ والألومنيوم والخرسانة والخشب.",
    keywords: [
      "حاسبة إجهاد الانحناء",
      "الإجهاد الأقصى",
      "معامل المقطع",
      "عامل الأمان",
      "التصميم الهيكلي",
      "ميكانيكا المواد",
      "تحليل الإجهاد",
    ],
    inputs: {
      moment: {
        label: "لحظة الانحناء (kN·m)",
        help: "الحد الأقصى لحظة الانحناء المؤثرة على مقطع الشعاع.",
      },
      sectionModulus: {
        label: "معامل المقطع (cm³)",
        help: "معامل المقطع (Z) للشعاع. موجود في جداول خصائص المقطع أو محسوب من I/c.",
      },
      materialType: {
        label: "نوع المادة",
        help: "حدد مادة الشعاع لتحديد حد الخضوع وحدود الأمان.",
      },
    },
    outputs: {
      stressMPa: {
        label: "إجهاد الانحناء (MPa)",
        help: "الحد الأقصى لإجهاد الانحناء في الألياف الطرفية، محسوب كـ M/Z.",
      },
      yieldStrengthMPa: {
        label: "حد الخضوع (MPa)",
        help: "حد خضوع المادة (أو قوة الضغط للخرسانة).",
      },
      safetyFactor: {
        label: "عامل الأمان",
        help: "نسبة حد الخضوع إلى الإجهاد الفعلي. يجب أن يتجاوز 1.0 للتصميم الآمن.",
      },
      utilizationRatio: {
        label: "نسبة الاستخدام",
        help: "نسبة الإجهاد المسموح به المستخدم (إجهاد / (fy / γM)). يجب أن يكون ≤ 100%.",
      },
      classification: {
        label: "التصنيف",
        help: "تصنيف الأمان: موافق (≤85%)، تحذير (85–100%)، حرج (>100%).",
      },
    },
    options: {
      materialType: {
        steel: "فولاذ (S275)",
        aluminum: "ألومنيوم (6061-T6)",
        concrete: "خرسانة (C30)",
        timber: "خشب (خشب لين)",
      },
    },
    errors: {
      invalidInputs: "يجب أن تكون لحظة الانحناء ومعامل المقطع موجبة.",
    },
    faq: [
      {
        q: "ما هو معامل المقطع (Z)؟",
        a: "معامل المقطع هو مقياس لمقاومة الشعاع للانحناء. يُحسب كـ Z = I/c، حيث I هو عزم القصور الذاتي و c هي المسافة من المحور المحايد إلى الألياف الطرفية. للمقطع المستطيل: Z = b×h²/6.",
      },
      {
        q: "ماذا يعني عامل الأمان؟",
        a: "عامل الأمان هو نسبة حد الخضوع إلى الإجهاد الفعلي (fy/σ). عامل أمان > 1.5 مطلوب عادة للأحمال الثابتة. القيم <1.0 تشير إلى إجهاد زائد.",
      },
      {
        q: "متى يصبح التصميم حرجًا؟",
        a: "يصبح التصميم حرجًا عندما تتجاوز نسبة الاستخدام 100%، مما يعني أن الإجهاد الفعلي يتجاوز الإجهاد المسموح به (fy/γM). يتطلب هذا إعادة تصميم بمقطع أكبر أو مادة أقوى.",
      },
      {
        q: "كيف تتم مقارنة المواد المختلفة؟",
        a: "لدى المواد المختلفة حدود خضوع مختلفة: فولاذ ≈250 MPa، ألومنيوم ≈240 MPa، خرسانة ≈30 MPa، خشب ≈10 MPa. يعتمد الاختيار على التوفر والتكلفة والوزن والظروف البيئية.",
      },
      {
        q: "هل يمكنني استخدام هذا للأحمال الديناميكية؟",
        a: "تفترض هذه الحاسبة الأحمال الثابتة. الأحمال الديناميكية تتطلب تحليل التعب وعوامل أمان أعلى. استشر مهندسًا إنشائيًا للتطبيقات الديناميكية.",
      },
    ],
  },

  ru: {
    title: "Калькулятор напряжения изгиба",
    short: "Вычислите максимальное напряжение изгиба, коэффициент безопасности и коэффициент использования материала.",
    description:
      "Бесплатный калькулятор напряжения изгиба для конструктивного проектирования. Введите момент изгиба (кН·м) и момент сопротивления (см³), чтобы вычислить максимальное напряжение (МПа), коэффициент безопасности и коэффициент использования для стали, алюминия, бетона или древесины.",
    keywords: [
      "калькулятор напряжения изгиба",
      "максимальное напряжение",
      "момент сопротивления",
      "коэффициент безопасности",
      "конструктивное проектирование",
      "механика материалов",
      "анализ напряжений",
    ],
    inputs: {
      moment: {
        label: "Момент изгиба (кН·м)",
        help: "Максимальный момент изгиба, действующий на сечение балки.",
      },
      sectionModulus: {
        label: "Момент сопротивления (см³)",
        help: "Момент сопротивления (Z) балки. Найден в таблицах свойств сечения или вычисляется из I/c.",
      },
      materialType: {
        label: "Тип материала",
        help: "Выберите материал балки для определения предела текучести и пределов безопасности.",
      },
    },
    outputs: {
      stressMPa: {
        label: "Напряжение изгиба (МПа)",
        help: "Максимальное напряжение изгиба в крайнем волокне, вычисленное как M/Z.",
      },
      yieldStrengthMPa: {
        label: "Предел текучести (МПа)",
        help: "Предел текучести материала (или прочность при сжатии для бетона).",
      },
      safetyFactor: {
        label: "Коэффициент безопасности",
        help: "Отношение предела текучести к фактическому напряжению. Должен превышать 1,0 для безопасной конструкции.",
      },
      utilizationRatio: {
        label: "Коэффициент использования",
        help: "Процент допустимого напряжения (напряжение / (fy / γM)). Должен быть ≤100%.",
      },
      classification: {
        label: "Классификация",
        help: "Классификация безопасности: ОК (≤85%), Предупреждение (85–100%), Критично (>100%).",
      },
    },
    options: {
      materialType: {
        steel: "Сталь (S275)",
        aluminum: "Алюминий (6061-T6)",
        concrete: "Бетон (C30)",
        timber: "Древесина (мягкая)",
      },
    },
    errors: {
      invalidInputs: "Момент и момент сопротивления должны быть положительны.",
    },
    faq: [
      {
        q: "Что такое момент сопротивления (Z)?",
        a: "Момент сопротивления — это мера сопротивления балки изгибу. Вычисляется как Z = I/c, где I — момент инерции и c — расстояние от нейтральной оси до крайнего волокна. Для прямоугольного сечения: Z = b×h²/6.",
      },
      {
        q: "Что означает коэффициент безопасности?",
        a: "Коэффициент безопасности — это отношение предела текучести к фактическому напряжению (fy/σ). Коэффициент безопасности > 1,5 обычно требуется для статических нагрузок. Значения <1,0 указывают на перенапряжение.",
      },
      {
        q: "Когда конструкция становится критической?",
        a: "Конструкция становится критической, когда коэффициент использования превышает 100%, что означает, что фактическое напряжение превышает допустимое (fy/γM). Это требует переконструирования с большим сечением или более прочным материалом.",
      },
      {
        q: "Как сравниваются разные материалы?",
        a: "Разные материалы имеют разные пределы текучести: сталь ≈250 МПа, алюминий ≈240 МПа, бетон ≈30 МПа, древесина ≈10 МПа. Выбор зависит от доступности, стоимости, веса и условий окружающей среды.",
      },
      {
        q: "Могу ли я использовать это для динамических нагрузок?",
        a: "Этот калькулятор предполагает статические нагрузки. Динамические нагрузки требуют анализа усталости и более высоких коэффициентов безопасности. Проконсультируйтесь с инженером-конструктором для динамических приложений.",
      },
    ],
  },

  zh: {
    title: "弯曲应力计算器",
    short: "根据弯矩和截面模量计算最大弯曲应力、安全系数和材料利用率。",
    description:
      "用于结构设计的免费弯曲应力计算器。输入弯矩(kN·m)和截面模量(cm³)，可计算钢、铝、混凝土或木材的最大应力(MPa)、安全系数和利用率。",
    keywords: [
      "弯曲应力计算器",
      "最大应力",
      "截面模量",
      "安全系数",
      "结构设计",
      "材料力学",
      "应力分析",
    ],
    inputs: {
      moment: {
        label: "弯矩 (kN·m)",
        help: "作用在梁截面上的最大弯矩。",
      },
      sectionModulus: {
        label: "截面模量 (cm³)",
        help: "梁的截面模量(Z)。可在截面性质表中查得或从I/c计算。",
      },
      materialType: {
        label: "材料类型",
        help: "选择梁的材料以确定屈服强度和安全限值。",
      },
    },
    outputs: {
      stressMPa: {
        label: "弯曲应力 (MPa)",
        help: "极端纤维处的最大弯曲应力，计算为M/Z。",
      },
      yieldStrengthMPa: {
        label: "屈服强度 (MPa)",
        help: "材料的屈服强度(或混凝土的抗压强度)。",
      },
      safetyFactor: {
        label: "安全系数",
        help: "屈服强度与实际应力的比值。安全设计应大于1.0。",
      },
      utilizationRatio: {
        label: "利用率",
        help: "允许应力的百分比(应力 / (fy / γM))。应≤100%。",
      },
      classification: {
        label: "分类",
        help: "安全分类：正常(≤85%)、警告(85–100%)、危险(>100%)。",
      },
    },
    options: {
      materialType: {
        steel: "钢 (S275)",
        aluminum: "铝 (6061-T6)",
        concrete: "混凝土 (C30)",
        timber: "木材 (软木)",
      },
    },
    errors: {
      invalidInputs: "弯矩和截面模量必须为正数。",
    },
    faq: [
      {
        q: "什么是截面模量(Z)?",
        a: "截面模量是衡量梁对弯曲抵抗力的参数。计算公式为Z = I/c，其中I是惯性矩，c是中性轴到极端纤维的距离。对于矩形截面：Z = b×h²/6。",
      },
      {
        q: "安全系数是什么意思?",
        a: "安全系数是屈服强度与实际应力的比值(fy/σ)。对于静态加载，通常需要安全系数 > 1.5。值<1.0表示应力过大。",
      },
      {
        q: "什么时候设计变成危险的?",
        a: "当利用率超过100%时，设计变成危险的，即实际应力超过允许应力(fy/γM)。这需要用更大的截面或更强的材料重新设计。",
      },
      {
        q: "不同材料如何比较?",
        a: "不同材料的屈服强度不同：钢≈250 MPa、铝≈240 MPa、混凝土≈30 MPa、木材≈10 MPa。选择取决于可用性、成本、重量和环境条件。",
      },
      {
        q: "我可以将其用于动态荷载吗?",
        a: "此计算器假设静态荷载。动态荷载需要疲劳分析和更高的安全系数。对于动态应用，请咨询结构工程师。",
      },
    ],
  },

  ja: {
    title: "曲げ応力計算機",
    short: "曲げモーメントと断面係数から最大曲げ応力、安全係数、材料利用率を計算します。",
    description:
      "構造設計用の無料曲げ応力計算機。曲げモーメント(kN·m)と断面係数(cm³)を入力して、鋼、アルミニウム、コンクリート、または木材の最大応力(MPa)、安全係数、利用率を計算します。",
    keywords: [
      "曲げ応力計算機",
      "最大応力",
      "断面係数",
      "安全係数",
      "構造設計",
      "材料力学",
      "応力解析",
    ],
    inputs: {
      moment: {
        label: "曲げモーメント (kN·m)",
        help: "梁の断面に作用する最大曲げモーメント。",
      },
      sectionModulus: {
        label: "断面係数 (cm³)",
        help: "梁の断面係数(Z)。断面性質表から取得するか、I/cから計算します。",
      },
      materialType: {
        label: "材料種別",
        help: "梁の材料を選択して、降伏強度と安全限界を決定します。",
      },
    },
    outputs: {
      stressMPa: {
        label: "曲げ応力 (MPa)",
        help: "極限繊維における最大曲げ応力、M/Zで計算。",
      },
      yieldStrengthMPa: {
        label: "降伏強度 (MPa)",
        help: "材料の降伏強度(またはコンクリートの圧縮強度)。",
      },
      safetyFactor: {
        label: "安全係数",
        help: "降伏強度と実際の応力の比。安全な設計では1.0を超える必要があります。",
      },
      utilizationRatio: {
        label: "利用率",
        help: "許容応力のパーセンテージ(応力 / (fy / γM))。≤100%であるべき。",
      },
      classification: {
        label: "分類",
        help: "安全分類：OK(≤85%)、警告(85–100%)、危機的(>100%)。",
      },
    },
    options: {
      materialType: {
        steel: "鋼 (S275)",
        aluminum: "アルミニウム (6061-T6)",
        concrete: "コンクリート (C30)",
        timber: "木材 (軟木)",
      },
    },
    errors: {
      invalidInputs: "曲げモーメントと断面係数は正の値である必要があります。",
    },
    faq: [
      {
        q: "断面係数(Z)とは何ですか?",
        a: "断面係数は、梁が曲げに抵抗する能力の尺度です。Z = I/cで計算されます。ここで、Iは二次モーメント、cは中立軸から極限繊維までの距離です。矩形断面の場合：Z = b×h²/6。",
      },
      {
        q: "安全係数は何を意味しますか?",
        a: "安全係数は降伏強度と実際の応力の比(fy/σ)です。静的荷重の場合、通常1.5より大きい安全係数が必要です。1.0未満の値は過度な応力を示します。",
      },
      {
        q: "設計がいつ危機的になりますか?",
        a: "利用率が100%を超えると、設計は危機的になります。つまり、実際の応力が許容応力(fy/γM)を超えます。これにはより大きな断面または強度の高い材料での再設計が必要です。",
      },
      {
        q: "異なる材料はどのように比較されますか?",
        a: "異なる材料は異なる降伏強度を持ちます：鋼≈250 MPa、アルミニウム≈240 MPa、コンクリート≈30 MPa、木材≈10 MPa。選択は、入手可能性、コスト、重量、環境条件によって異なります。",
      },
      {
        q: "これを動的荷重に使用できますか?",
        a: "この計算機は静的荷重を想定しています。動的荷重には疲労解析と高い安全係数が必要です。動的アプリケーションについては、構造技師に相談してください。",
      },
    ],
  },

  ko: {
    title: "굽힘 응력 계산기",
    short: "굽힘 모멘트와 단면 계수에서 최대 굽힘 응력, 안전 계수 및 재료 이용률을 계산합니다.",
    description:
      "구조 설계용 무료 굽힘 응력 계산기입니다. 굽힘 모멘트(kN·m)와 단면 계수(cm³)를 입력하여 강철, 알루미늄, 콘크리트 또는 목재의 최대 응력(MPa), 안전 계수 및 이용률을 계산합니다.",
    keywords: [
      "굽힘 응력 계산기",
      "최대 응력",
      "단면 계수",
      "안전 계수",
      "구조 설계",
      "재료 역학",
      "응력 분석",
    ],
    inputs: {
      moment: {
        label: "굽힘 모멘트 (kN·m)",
        help: "보 단면에 작용하는 최대 굽힘 모멘트입니다.",
      },
      sectionModulus: {
        label: "단면 계수 (cm³)",
        help: "보의 단면 계수(Z)입니다. 단면 성질표에서 찾거나 I/c에서 계산할 수 있습니다.",
      },
      materialType: {
        label: "재료 유형",
        help: "보의 재료를 선택하여 항복 강도 및 안전 한계를 결정합니다.",
      },
    },
    outputs: {
      stressMPa: {
        label: "굽힘 응력 (MPa)",
        help: "극단 섬유의 최대 굽힘 응력(M/Z로 계산).",
      },
      yieldStrengthMPa: {
        label: "항복 강도 (MPa)",
        help: "재료의 항복 강도(콘크리트의 경우 압축 강도).",
      },
      safetyFactor: {
        label: "안전 계수",
        help: "항복 강도와 실제 응력의 비율입니다. 안전한 설계의 경우 1.0을 초과해야 합니다.",
      },
      utilizationRatio: {
        label: "이용률",
        help: "허용 응력의 백분율(응력 / (fy / γM))입니다. ≤100%이어야 합니다.",
      },
      classification: {
        label: "분류",
        help: "안전 분류: 양호(≤85%), 경고(85–100%), 위험(>100%).",
      },
    },
    options: {
      materialType: {
        steel: "강철 (S275)",
        aluminum: "알루미늄 (6061-T6)",
        concrete: "콘크리트 (C30)",
        timber: "목재 (연목)",
      },
    },
    errors: {
      invalidInputs: "굽힘 모멘트와 단면 계수는 양수여야 합니다.",
    },
    faq: [
      {
        q: "단면 계수(Z)란 무엇인가요?",
        a: "단면 계수는 보가 굽힘에 저항하는 능력의 척도입니다. Z = I/c로 계산되며, 여기서 I는 2차 모멘트이고 c는 중성축에서 극단 섬유까지의 거리입니다. 직사각형 단면의 경우: Z = b×h²/6.",
      },
      {
        q: "안전 계수는 무엇을 의미하나요?",
        a: "안전 계수는 항복 강도와 실제 응력의 비율(fy/σ)입니다. 정적 하중의 경우 일반적으로 1.5보다 큰 안전 계수가 필요합니다. 1.0 미만의 값은 과도한 응력을 나타냅니다.",
      },
      {
        q: "설계가 언제 위험해지나요?",
        a: "이용률이 100%를 초과하면 설계가 위험해지며, 이는 실제 응력이 허용 응력(fy/γM)을 초과함을 의미합니다. 이는 더 큰 단면이나 더 강한 재료로 재설계해야 합니다.",
      },
      {
        q: "다양한 재료는 어떻게 비교되나요?",
        a: "다양한 재료는 다양한 항복 강도를 가집니다: 강철 ≈250 MPa, 알루미늄 ≈240 MPa, 콘크리트 ≈30 MPa, 목재 ≈10 MPa. 선택은 가용성, 비용, 무게 및 환경 조건에 따라 다릅니다.",
      },
      {
        q: "이것을 동적 하중에 사용할 수 있나요?",
        a: "이 계산기는 정적 하중을 가정합니다. 동적 하중은 피로 분석 및 더 높은 안전 계수가 필요합니다. 동적 응용 프로그램의 경우 구조 기술자와 상담하세요.",
      },
    ],
  },

  hi: {
    title: "मोड़ तनाव कैलकुलेटर",
    short: "मोड़ मोमेंट और अनुभाग मापांक से अधिकतम मोड़ तनाव, सुरक्षा कारक और सामग्री उपयोग अनुपात की गणना करें।",
    description:
      "संरचनात्मक डिजाइन के लिए मुफ्त मोड़ तनाव कैलकुलेटर। मोड़ मोमेंट (kN·m) और अनुभाग मापांक (cm³) दर्ज करें ताकि स्टील, एल्यूमीनियम, कंक्रीट या लकड़ी के लिए अधिकतम तनाव (MPa), सुरक्षा कारक और उपयोग अनुपात की गणना कर सकें।",
    keywords: [
      "मोड़ तनाव कैलकुलेटर",
      "अधिकतम तनाव",
      "अनुभाग मापांक",
      "सुरक्षा कारक",
      "संरचनात्मक डिजाइन",
      "सामग्री यांत्रिकी",
      "तनाव विश्लेषण",
    ],
    inputs: {
      moment: {
        label: "मोड़ मोमेंट (kN·m)",
        help: "बीम अनुभाग पर कार्य करने वाला अधिकतम मोड़ मोमेंट।",
      },
      sectionModulus: {
        label: "अनुभाग मापांक (cm³)",
        help: "बीम के अनुभाग का मापांक (Z)। अनुभाग संपत्ति तालिकाओं में पाया जाता है या I/c से गणना की जाती है।",
      },
      materialType: {
        label: "सामग्री प्रकार",
        help: "बीम की सामग्री का चयन करें ताकि पराभव शक्ति और सुरक्षा सीमाएं निर्धारित हो सकें।",
      },
    },
    outputs: {
      stressMPa: {
        label: "मोड़ तनाव (MPa)",
        help: "चरम फाइबर में अधिकतम मोड़ तनाव, M/Z के रूप में गणना की जाती है।",
      },
      yieldStrengthMPa: {
        label: "पराभव शक्ति (MPa)",
        help: "सामग्री की पराभव शक्ति (कंक्रीट के लिए संपीडन शक्ति)।",
      },
      safetyFactor: {
        label: "सुरक्षा कारक",
        help: "पराभव शक्ति का वास्तविक तनाव से अनुपात। सुरक्षित डिजाइन के लिए 1.0 से अधिक होना चाहिए।",
      },
      utilizationRatio: {
        label: "उपयोग अनुपात",
        help: "अनुमत तनाव का प्रतिशत (तनाव / (fy / γM))। ≤100% होना चाहिए।",
      },
      classification: {
        label: "वर्गीकरण",
        help: "सुरक्षा वर्गीकरण: ठीक है (≤85%), चेतावनी (85–100%), गंभीर (>100%)।",
      },
    },
    options: {
      materialType: {
        steel: "स्टील (S275)",
        aluminum: "एल्यूमीनियम (6061-T6)",
        concrete: "कंक्रीट (C30)",
        timber: "लकड़ी (नरम लकड़ी)",
      },
    },
    errors: {
      invalidInputs: "मोड़ मोमेंट और अनुभाग मापांक सकारात्मक होने चाहिए।",
    },
    faq: [
      {
        q: "अनुभाग मापांक (Z) क्या है?",
        a: "अनुभाग मापांक बीम के झुकने का प्रतिरोध करने की क्षमता का माप है। इसे Z = I/c के रूप में गणना की जाती है, जहां I दूसरी क्षणी है और c तटस्थ अक्ष से चरम फाइबर तक की दूरी है। आयताकार अनुभाग के लिए: Z = b×h²/6।",
      },
      {
        q: "सुरक्षा कारक का क्या अर्थ है?",
        a: "सुरक्षा कारक पराभव शक्ति का वास्तविक तनाव से अनुपात है (fy/σ)। स्थिर भार के लिए आमतौर पर 1.5 से अधिक सुरक्षा कारक की आवश्यकता होती है। 1.0 से कम मान अत्यधिक तनाव का संकेत देते हैं।",
      },
      {
        q: "डिजाइन कब महत्वपूर्ण हो जाता है?",
        a: "जब उपयोग अनुपात 100% से अधिक हो जाता है तो डिजाइन महत्वपूर्ण हो जाता है, जिसका अर्थ है कि वास्तविक तनाव अनुमत तनाव (fy/γM) से अधिक है। इसके लिए बड़े अनुभाग या मजबूत सामग्री के साथ पुनः डिजाइन की आवश्यकता है।",
      },
      {
        q: "विभिन्न सामग्रियों की तुलना कैसे की जाती है?",
        a: "विभिन्न सामग्रियों की अलग-अलग पराभव शक्तियां होती हैं: स्टील ≈250 MPa, एल्यूमीनियम ≈240 MPa, कंक्रीट ≈30 MPa, लकड़ी ≈10 MPa। चयन उपलब्धता, लागत, वजन और पर्यावरणीय स्थितियों पर निर्भर करता है।",
      },
      {
        q: "क्या मैं इसे गतिशील लोड के लिए उपयोग कर सकता हूं?",
        a: "यह कैलकुलेटर स्थिर भार मानता है। गतिशील भार के लिए थकान विश्लेषण और उच्च सुरक्षा कारक की आवश्यकता होती है। गतिशील अनुप्रयोगों के लिए संरचनात्मक इंजीनियर से परामर्श लें।",
      },
    ],
  },
};

export default i18n;
