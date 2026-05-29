import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Voltage Drop Calculator",
    short: "Calculate voltage drop in electrical cables for single-phase circuits per NEC guidelines.",
    description:
      "Free voltage drop calculator for copper and aluminum conductors. Enter conductor size (AWG or mm²), one-way length, current, and system voltage to find voltage drop, percentage drop, and NEC compliance status.",
    keywords: [
      "voltage drop calculator",
      "cable voltage drop",
      "AWG voltage drop",
      "NEC voltage drop",
      "wire size calculator",
      "electrical cable calculator",
      "conductor voltage drop",
    ],
    inputs: {
      conductorMaterial: { label: "Conductor material", help: "Copper has lower resistivity than aluminum." },
      wireGaugeUnit: { label: "Wire gauge unit", help: "AWG (American Wire Gauge) or mm² cross-section." },
      wireGauge: { label: "Wire gauge / size", help: "AWG number (lower = thicker) or cross-section in mm²." },
      lengthM: { label: "One-way length (m)", help: "Distance from source to load in metres. Total cable run is twice this." },
      currentA: { label: "Current (A)", help: "Load current in amperes." },
      voltage: { label: "Source voltage (V)", help: "Nominal system voltage at the source." },
    },
    outputs: {
      voltageDrop: { label: "Voltage drop (V)", help: "Total voltage lost in both conductors (2-way path)." },
      voltageDropPct: { label: "Voltage drop (%)", help: "Drop as percentage of source voltage. NEC recommends ≤3% for branch circuits." },
      receivingVoltage: { label: "Receiving voltage (V)", help: "Actual voltage available at the load." },
      recommendation: { label: "NEC status", help: "ok = ≤3%, warning = 3–5%, critical = >5%." },
      areaMm2: { label: "Conductor area (mm²)", help: "Effective cross-sectional area of the conductor." },
    },
    options: {
      conductorMaterial: { copper: "Copper (Cu)", aluminum: "Aluminum (Al)" },
      wireGaugeUnit: { awg: "AWG (American Wire Gauge)", mm2: "mm² (cross-section)" },
    },
    errors: {
      invalidGauge: "Wire gauge must be a positive number.",
    },
    faq: [
      {
        q: "What is the NEC 3% rule for voltage drop?",
        a: "The National Electrical Code (NEC) recommends that voltage drop on branch circuits not exceed 3% of the source voltage under full load, with a combined feeder and branch circuit drop not exceeding 5%. Exceeding these limits can cause equipment malfunction, overheating, and reduced efficiency.",
      },
      {
        q: "Why is copper better than aluminum for wiring?",
        a: "Copper has a resistivity of 1.724×10⁻⁸ Ω·m compared to aluminum's 2.65×10⁻⁸ Ω·m. Copper conductors are about 61% more conductive, meaning less voltage drop for the same wire size. Aluminum is lighter and cheaper, so it is used for large feeders and utility distribution.",
      },
      {
        q: "What does AWG mean?",
        a: "AWG stands for American Wire Gauge, a standardized system for wire sizes. Lower AWG numbers indicate thicker wire with lower resistance. Common household circuits use AWG 14 (15A) or AWG 12 (20A).",
      },
    ],
  },
  pt: {
    title: "Voltage Drop Calculator",
    short: "Calculate voltage drop in electrical cables for single-phase circuits per NEC guidelines.",
    description:
      "Free voltage drop calculator for copper and aluminum conductors. Enter conductor size (AWG or mm²), one-way length, current, and system voltage to find voltage drop, percentage drop, and NEC compliance status.",
    keywords: [
      "voltage drop calculator",
      "cable voltage drop",
      "AWG voltage drop",
      "NEC voltage drop",
      "wire size calculator",
      "electrical cable calculator",
      "conductor voltage drop",
    ],
    inputs: {
      conductorMaterial: { label: "Conductor material", help: "Copper has lower resistivity than aluminum." },
      wireGaugeUnit: { label: "Wire gauge unit", help: "AWG (American Wire Gauge) or mm² cross-section." },
      wireGauge: { label: "Wire gauge / size", help: "AWG number (lower = thicker) or cross-section in mm²." },
      lengthM: { label: "One-way length (m)", help: "Distance from source to load in metres. Total cable run is twice this." },
      currentA: { label: "Current (A)", help: "Load current in amperes." },
      voltage: { label: "Source voltage (V)", help: "Nominal system voltage at the source." },
    },
    outputs: {
      voltageDrop: { label: "Voltage drop (V)", help: "Total voltage lost in both conductors (2-way path)." },
      voltageDropPct: { label: "Voltage drop (%)", help: "Drop as percentage of source voltage. NEC recommends ≤3% for branch circuits." },
      receivingVoltage: { label: "Receiving voltage (V)", help: "Actual voltage available at the load." },
      recommendation: { label: "NEC status", help: "ok = ≤3%, warning = 3–5%, critical = >5%." },
      areaMm2: { label: "Conductor area (mm²)", help: "Effective cross-sectional area of the conductor." },
    },
    options: {
      conductorMaterial: { copper: "Copper (Cu)", aluminum: "Aluminum (Al)" },
      wireGaugeUnit: { awg: "AWG (American Wire Gauge)", mm2: "mm² (cross-section)" },
    },
    errors: {
      invalidGauge: "Wire gauge must be a positive number.",
    },
    faq: [
      {
        q: "What is the NEC 3% rule for voltage drop?",
        a: "The National Electrical Code (NEC) recommends that voltage drop on branch circuits not exceed 3% of the source voltage under full load, with a combined feeder and branch circuit drop not exceeding 5%. Exceeding these limits can cause equipment malfunction, overheating, and reduced efficiency.",
      },
      {
        q: "Why is copper better than aluminum for wiring?",
        a: "Copper has a resistivity of 1.724×10⁻⁸ Ω·m compared to aluminum's 2.65×10⁻⁸ Ω·m. Copper conductors are about 61% more conductive, meaning less voltage drop for the same wire size. Aluminum is lighter and cheaper, so it is used for large feeders and utility distribution.",
      },
      {
        q: "What does AWG mean?",
        a: "AWG stands for American Wire Gauge, a standardized system for wire sizes. Lower AWG numbers indicate thicker wire with lower resistance. Common household circuits use AWG 14 (15A) or AWG 12 (20A).",
      },
    ],
  },
  id: {
    title: "Voltage Drop Calculator",
    short: "Calculate voltage drop in electrical cables for single-phase circuits per NEC guidelines.",
    description:
      "Free voltage drop calculator for copper and aluminum conductors. Enter conductor size (AWG or mm²), one-way length, current, and system voltage to find voltage drop, percentage drop, and NEC compliance status.",
    keywords: [
      "voltage drop calculator",
      "cable voltage drop",
      "AWG voltage drop",
      "NEC voltage drop",
      "wire size calculator",
      "electrical cable calculator",
      "conductor voltage drop",
    ],
    inputs: {
      conductorMaterial: { label: "Conductor material", help: "Copper has lower resistivity than aluminum." },
      wireGaugeUnit: { label: "Wire gauge unit", help: "AWG (American Wire Gauge) or mm² cross-section." },
      wireGauge: { label: "Wire gauge / size", help: "AWG number (lower = thicker) or cross-section in mm²." },
      lengthM: { label: "One-way length (m)", help: "Distance from source to load in metres. Total cable run is twice this." },
      currentA: { label: "Current (A)", help: "Load current in amperes." },
      voltage: { label: "Source voltage (V)", help: "Nominal system voltage at the source." },
    },
    outputs: {
      voltageDrop: { label: "Voltage drop (V)", help: "Total voltage lost in both conductors (2-way path)." },
      voltageDropPct: { label: "Voltage drop (%)", help: "Drop as percentage of source voltage. NEC recommends ≤3% for branch circuits." },
      receivingVoltage: { label: "Receiving voltage (V)", help: "Actual voltage available at the load." },
      recommendation: { label: "NEC status", help: "ok = ≤3%, warning = 3–5%, critical = >5%." },
      areaMm2: { label: "Conductor area (mm²)", help: "Effective cross-sectional area of the conductor." },
    },
    options: {
      conductorMaterial: { copper: "Copper (Cu)", aluminum: "Aluminum (Al)" },
      wireGaugeUnit: { awg: "AWG (American Wire Gauge)", mm2: "mm² (cross-section)" },
    },
    errors: {
      invalidGauge: "Wire gauge must be a positive number.",
    },
    faq: [
      {
        q: "What is the NEC 3% rule for voltage drop?",
        a: "The National Electrical Code (NEC) recommends that voltage drop on branch circuits not exceed 3% of the source voltage under full load, with a combined feeder and branch circuit drop not exceeding 5%. Exceeding these limits can cause equipment malfunction, overheating, and reduced efficiency.",
      },
      {
        q: "Why is copper better than aluminum for wiring?",
        a: "Copper has a resistivity of 1.724×10⁻⁸ Ω·m compared to aluminum's 2.65×10⁻⁸ Ω·m. Copper conductors are about 61% more conductive, meaning less voltage drop for the same wire size. Aluminum is lighter and cheaper, so it is used for large feeders and utility distribution.",
      },
      {
        q: "What does AWG mean?",
        a: "AWG stands for American Wire Gauge, a standardized system for wire sizes. Lower AWG numbers indicate thicker wire with lower resistance. Common household circuits use AWG 14 (15A) or AWG 12 (20A).",
      },
    ],
  },


  tr: {
    title: "Gerilim Düşümü Hesaplayıcı",
    short: "NEC kılavuzlarına göre tek fazlı devrelerde elektrik kablolarındaki gerilim düşümünü hesaplayın.",
    description:
      "Bakır ve alüminyum iletkenler için ücretsiz gerilim düşümü hesaplayıcısı. İletken kesitini, tek yön uzunluğu, akımı ve sistem gerilimini girerek gerilim düşümü, yüzde düşüm ve NEC uygunluk durumunu öğrenin.",
    keywords: ["gerilim düşümü hesaplayıcı", "kablo gerilim düşümü", "AWG gerilim düşümü", "elektrik kablo hesaplayıcı"],
    inputs: {
      conductorMaterial: { label: "İletken malzeme", help: "Bakırın özgül direnci alüminyumdan düşüktür." },
      wireGaugeUnit: { label: "Kablo kesit birimi", help: "AWG (Amerikan Tel Kaliperi) veya mm² kesit alanı." },
      wireGauge: { label: "Kablo kalınlığı", help: "AWG numarası (küçük = daha kalın) veya mm² cinsinden kesit." },
      lengthM: { label: "Tek yön uzunluk (m)", help: "Kaynaktan yüke olan mesafe (metre). Toplam kablo uzunluğu bunun iki katıdır." },
      currentA: { label: "Akım (A)", help: "Yük akımı (amper)." },
      voltage: { label: "Kaynak gerilimi (V)", help: "Kaynaktaki nominal sistem gerilimi." },
    },
    outputs: {
      voltageDrop: { label: "Gerilim düşümü (V)", help: "Her iki iletkendeki toplam gerilim kaybı (gidiş-dönüş)." },
      voltageDropPct: { label: "Gerilim düşümü (%)", help: "Kaynak gerilimine oranla düşüm. NEC ≤%3 önerir." },
      receivingVoltage: { label: "Alınan gerilim (V)", help: "Yükte mevcut gerçek gerilim." },
      recommendation: { label: "NEC durumu", help: "ok = ≤%3, uyarı = %3–5, kritik = >%5." },
      areaMm2: { label: "İletken kesiti (mm²)", help: "İletkenin etkin kesit alanı." },
    },
    options: {
      conductorMaterial: { copper: "Bakır (Cu)", aluminum: "Alüminyum (Al)" },
      wireGaugeUnit: { awg: "AWG (Amerikan Tel Kaliperi)", mm2: "mm² (kesit alanı)" },
    },
    errors: { invalidGauge: "Kablo kalınlığı pozitif bir sayı olmalıdır." },
    faq: [
      { q: "NEC'in %3 gerilim düşümü kuralı nedir?", a: "Ulusal Elektrik Kodu (NEC), dallanma devrelerinde tam yük altında gerilim düşümünün kaynak geriliminin %3'ünü aşmamasını ve besleme ile dallanma devresi toplamının %5'i geçmemesini tavsiye eder." },
    ],
  },

  de: {
    title: "Spannungsabfall Rechner",
    short: "Berechnen Sie den Spannungsabfall in Elektrokabeln für einphasige Stromkreise gemäß NEC.",
    description:
      "Kostenloser Rechner für den Spannungsabfall bei Kupfer- und Aluminiumleitern. Geben Sie Leiterquerschnitt, einseitige Leitungslänge, Strom und Nennspannung ein.",
    keywords: ["Spannungsabfall Rechner", "Kabelquerschnitt Rechner", "Leitungsverlust berechnen", "VDE Spannungsabfall"],
    inputs: {
      conductorMaterial: { label: "Leitermaterial", help: "Kupfer hat einen niedrigeren spezifischen Widerstand als Aluminium." },
      wireGaugeUnit: { label: "Querschnittseinheit", help: "AWG (American Wire Gauge) oder mm² Querschnitt." },
      wireGauge: { label: "Kabelquerschnitt", help: "AWG-Nummer (kleiner = dicker) oder Querschnitt in mm²." },
      lengthM: { label: "Einseitige Leitungslänge (m)", help: "Entfernung von der Quelle zur Last in Metern." },
      currentA: { label: "Strom (A)", help: "Laststrom in Ampere." },
      voltage: { label: "Quellspannung (V)", help: "Nennspannung an der Quelle." },
    },
    outputs: {
      voltageDrop: { label: "Spannungsabfall (V)", help: "Gesamter Spannungsverlust auf Hin- und Rückleiter." },
      voltageDropPct: { label: "Spannungsabfall (%)", help: "Abfall als Prozentsatz der Quellspannung. NEC empfiehlt ≤3%." },
      receivingVoltage: { label: "Empfangsspannung (V)", help: "Tatsächliche Spannung an der Last." },
      recommendation: { label: "NEC-Status", help: "ok = ≤3%, Warnung = 3–5%, kritisch = >5%." },
      areaMm2: { label: "Leiterquerschnitt (mm²)", help: "Effektiver Querschnitt des Leiters." },
    },
    options: {
      conductorMaterial: { copper: "Kupfer (Cu)", aluminum: "Aluminium (Al)" },
      wireGaugeUnit: { awg: "AWG (American Wire Gauge)", mm2: "mm² (Querschnitt)" },
    },
    errors: { invalidGauge: "Der Kabelquerschnitt muss eine positive Zahl sein." },
    faq: [
      { q: "Was ist die NEC-3%-Regel für Spannungsabfall?", a: "Der NEC empfiehlt, dass der Spannungsabfall in Abzweigstromkreisen 3% der Quellspannung nicht übersteigt und der kombinierte Abfall von Zuleitung und Abzweigstromkreis 5% nicht überschreitet." },
    ],
  },

  fr: {
    title: "Calculateur de Chute de Tension",
    short: "Calculez la chute de tension dans les câbles électriques pour les circuits monophasés selon les normes NEC.",
    description:
      "Calculateur gratuit de chute de tension pour conducteurs en cuivre et aluminium. Saisissez la section du conducteur, la longueur aller, le courant et la tension du réseau.",
    keywords: ["calculateur chute de tension", "chute de tension câble", "section câble électrique", "NEC chute de tension"],
    inputs: {
      conductorMaterial: { label: "Matériau du conducteur", help: "Le cuivre a une résistivité plus faible que l'aluminium." },
      wireGaugeUnit: { label: "Unité de section", help: "AWG (American Wire Gauge) ou mm² de section." },
      wireGauge: { label: "Section / calibre du fil", help: "Numéro AWG (plus petit = plus épais) ou section en mm²." },
      lengthM: { label: "Longueur aller (m)", help: "Distance de la source à la charge en mètres." },
      currentA: { label: "Courant (A)", help: "Courant de charge en ampères." },
      voltage: { label: "Tension source (V)", help: "Tension nominale du réseau à la source." },
    },
    outputs: {
      voltageDrop: { label: "Chute de tension (V)", help: "Perte de tension totale sur les deux conducteurs (aller-retour)." },
      voltageDropPct: { label: "Chute de tension (%)", help: "Chute en pourcentage de la tension source. NEC recommande ≤3%." },
      receivingVoltage: { label: "Tension en réception (V)", help: "Tension réelle disponible à la charge." },
      recommendation: { label: "Statut NEC", help: "ok = ≤3%, avertissement = 3–5%, critique = >5%." },
      areaMm2: { label: "Section conducteur (mm²)", help: "Section transversale effective du conducteur." },
    },
    options: {
      conductorMaterial: { copper: "Cuivre (Cu)", aluminum: "Aluminium (Al)" },
      wireGaugeUnit: { awg: "AWG (American Wire Gauge)", mm2: "mm² (section)" },
    },
    errors: { invalidGauge: "Le calibre du fil doit être un nombre positif." },
    faq: [
      { q: "Qu'est-ce que la règle NEC des 3% ?", a: "Le NEC recommande que la chute de tension sur les circuits de dérivation ne dépasse pas 3% de la tension source en charge nominale, et 5% en cumulant l'alimentation et le circuit de dérivation." },
    ],
  },

  es: {
    title: "Calculadora de Caída de Tensión",
    short: "Calcula la caída de tensión en cables eléctricos para circuitos monofásicos según la norma NEC.",
    description:
      "Calculadora gratuita de caída de tensión para conductores de cobre y aluminio. Introduce la sección del conductor, la longitud de ida, la corriente y la tensión del sistema.",
    keywords: ["calculadora caída de tensión", "caída de tensión cable", "sección cable eléctrico", "NEC caída de tensión"],
    inputs: {
      conductorMaterial: { label: "Material del conductor", help: "El cobre tiene menor resistividad que el aluminio." },
      wireGaugeUnit: { label: "Unidad de sección", help: "AWG (calibre americano de alambre) o mm² de sección." },
      wireGauge: { label: "Calibre / sección del cable", help: "Número AWG (menor = más grueso) o sección en mm²." },
      lengthM: { label: "Longitud de ida (m)", help: "Distancia de la fuente a la carga en metros." },
      currentA: { label: "Corriente (A)", help: "Corriente de carga en amperios." },
      voltage: { label: "Tensión fuente (V)", help: "Tensión nominal del sistema en la fuente." },
    },
    outputs: {
      voltageDrop: { label: "Caída de tensión (V)", help: "Pérdida de tensión total en ambos conductores (ida y vuelta)." },
      voltageDropPct: { label: "Caída de tensión (%)", help: "Caída como porcentaje de la tensión fuente. NEC recomienda ≤3%." },
      receivingVoltage: { label: "Tensión en receptor (V)", help: "Tensión real disponible en la carga." },
      recommendation: { label: "Estado NEC", help: "ok = ≤3%, advertencia = 3–5%, crítico = >5%." },
      areaMm2: { label: "Sección conductor (mm²)", help: "Área de sección transversal efectiva del conductor." },
    },
    options: {
      conductorMaterial: { copper: "Cobre (Cu)", aluminum: "Aluminio (Al)" },
      wireGaugeUnit: { awg: "AWG (Calibre americano)", mm2: "mm² (sección)" },
    },
    errors: { invalidGauge: "El calibre del cable debe ser un número positivo." },
    faq: [
      { q: "¿Qué es la regla del 3% del NEC?", a: "El NEC recomienda que la caída de tensión en circuitos de derivación no supere el 3% de la tensión fuente a plena carga, y el 5% considerando el alimentador y el circuito de derivación combinados." },
    ],
  },

  it: {
    title: "Calcolatore Caduta di Tensione",
    short: "Calcola la caduta di tensione nei cavi elettrici per circuiti monofase secondo le norme NEC.",
    description:
      "Calcolatore gratuito della caduta di tensione per conduttori in rame e alluminio. Inserisci sezione, lunghezza andata, corrente e tensione di sistema.",
    keywords: ["calcolatore caduta di tensione", "caduta di tensione cavo", "sezione cavo elettrico", "NEC caduta di tensione"],
    inputs: {
      conductorMaterial: { label: "Materiale conduttore", help: "Il rame ha resistività inferiore rispetto all'alluminio." },
      wireGaugeUnit: { label: "Unità di sezione", help: "AWG (American Wire Gauge) o mm² di sezione." },
      wireGauge: { label: "Sezione / calibro del cavo", help: "Numero AWG (più piccolo = più spesso) o sezione in mm²." },
      lengthM: { label: "Lunghezza andata (m)", help: "Distanza dalla sorgente al carico in metri." },
      currentA: { label: "Corrente (A)", help: "Corrente di carico in ampere." },
      voltage: { label: "Tensione sorgente (V)", help: "Tensione nominale del sistema alla sorgente." },
    },
    outputs: {
      voltageDrop: { label: "Caduta di tensione (V)", help: "Perdita di tensione totale su entrambi i conduttori (andata e ritorno)." },
      voltageDropPct: { label: "Caduta di tensione (%)", help: "Caduta come percentuale della tensione sorgente. NEC raccomanda ≤3%." },
      receivingVoltage: { label: "Tensione al carico (V)", help: "Tensione reale disponibile al carico." },
      recommendation: { label: "Stato NEC", help: "ok = ≤3%, avviso = 3–5%, critico = >5%." },
      areaMm2: { label: "Sezione conduttore (mm²)", help: "Sezione trasversale effettiva del conduttore." },
    },
    options: {
      conductorMaterial: { copper: "Rame (Cu)", aluminum: "Alluminio (Al)" },
      wireGaugeUnit: { awg: "AWG (American Wire Gauge)", mm2: "mm² (sezione)" },
    },
    errors: { invalidGauge: "Il calibro del cavo deve essere un numero positivo." },
    faq: [
      { q: "Cos'è la regola del 3% NEC?", a: "Il NEC raccomanda che la caduta di tensione sui circuiti di derivazione non superi il 3% della tensione sorgente a pieno carico, con un massimo del 5% combinando alimentazione e circuito di derivazione." },
    ],
  },

  ar: {
    title: "حاسبة هبوط الجهد الكهربائي",
    short: "احسب هبوط الجهد في الكابلات الكهربائية للدوائر أحادية الطور وفق إرشادات NEC.",
    description:
      "حاسبة مجانية لهبوط الجهد الكهربائي في موصلات النحاس والألومنيوم. أدخل المقطع العرضي والطول والتيار وجهد النظام.",
    keywords: ["حاسبة هبوط الجهد", "هبوط جهد الكابل", "مقطع الكابل الكهربائي", "NEC هبوط الجهد"],
    inputs: {
      conductorMaterial: { label: "مادة الموصل", help: "النحاس له مقاومية أقل من الألومنيوم." },
      wireGaugeUnit: { label: "وحدة المقطع", help: "AWG (مقياس الأسلاك الأمريكي) أو mm² للمقطع العرضي." },
      wireGauge: { label: "مقطع السلك / الكابل", help: "رقم AWG (أصغر = أسمك) أو المقطع بالمليمتر المربع." },
      lengthM: { label: "طول الذهاب (م)", help: "المسافة من المصدر إلى الحمل بالأمتار." },
      currentA: { label: "التيار (أمبير)", help: "تيار الحمل بالأمبير." },
      voltage: { label: "جهد المصدر (فولت)", help: "الجهد الاسمي للنظام عند المصدر." },
    },
    outputs: {
      voltageDrop: { label: "هبوط الجهد (فولت)", help: "إجمالي فقد الجهد في كلا الموصلين (ذهاباً وإياباً)." },
      voltageDropPct: { label: "هبوط الجهد (%)", help: "نسبة الهبوط من جهد المصدر. يوصي NEC بـ ≤3%." },
      receivingVoltage: { label: "الجهد المستلم (فولت)", help: "الجهد الفعلي المتاح للحمل." },
      recommendation: { label: "حالة NEC", help: "ok = ≤3%، تحذير = 3–5%، حرج = >5%." },
      areaMm2: { label: "مقطع الموصل (mm²)", help: "المساحة المقطعية الفعلية للموصل." },
    },
    options: {
      conductorMaterial: { copper: "نحاس (Cu)", aluminum: "ألومنيوم (Al)" },
      wireGaugeUnit: { awg: "AWG (مقياس الأسلاك الأمريكي)", mm2: "mm² (مقطع عرضي)" },
    },
    errors: { invalidGauge: "يجب أن يكون مقطع السلك عدداً موجباً." },
    faq: [
      { q: "ما هي قاعدة NEC للـ 3%؟", a: "يوصي الكود الكهربائي الوطني (NEC) بألا يتجاوز هبوط الجهد في دوائر التفرع 3% من جهد المصدر عند الحمل الكامل." },
    ],
  },

  ru: {
    title: "Калькулятор падения напряжения",
    short: "Рассчитайте падение напряжения в электрических кабелях для однофазных цепей по нормам NEC.",
    description:
      "Бесплатный калькулятор падения напряжения для медных и алюминиевых проводников. Введите сечение, длину, ток и напряжение системы.",
    keywords: ["калькулятор падения напряжения", "падение напряжения кабель", "сечение кабеля", "NEC падение напряжения"],
    inputs: {
      conductorMaterial: { label: "Материал проводника", help: "Медь имеет более низкое удельное сопротивление, чем алюминий." },
      wireGaugeUnit: { label: "Единица сечения", help: "AWG (американская система) или мм² поперечного сечения." },
      wireGauge: { label: "Сечение / сортамент провода", help: "Номер AWG (меньше = толще) или сечение в мм²." },
      lengthM: { label: "Длина в одну сторону (м)", help: "Расстояние от источника до нагрузки в метрах." },
      currentA: { label: "Ток (А)", help: "Ток нагрузки в амперах." },
      voltage: { label: "Напряжение источника (В)", help: "Номинальное напряжение системы у источника." },
    },
    outputs: {
      voltageDrop: { label: "Падение напряжения (В)", help: "Суммарные потери напряжения на обоих проводниках (туда и обратно)." },
      voltageDropPct: { label: "Падение напряжения (%)", help: "Падение как процент от напряжения источника. NEC рекомендует ≤3%." },
      receivingVoltage: { label: "Напряжение у нагрузки (В)", help: "Фактическое напряжение, доступное нагрузке." },
      recommendation: { label: "Статус NEC", help: "ok = ≤3%, предупреждение = 3–5%, критично = >5%." },
      areaMm2: { label: "Сечение проводника (мм²)", help: "Эффективная площадь поперечного сечения проводника." },
    },
    options: {
      conductorMaterial: { copper: "Медь (Cu)", aluminum: "Алюминий (Al)" },
      wireGaugeUnit: { awg: "AWG (американская система)", mm2: "мм² (сечение)" },
    },
    errors: { invalidGauge: "Сечение провода должно быть положительным числом." },
    faq: [
      { q: "Что такое правило NEC 3%?", a: "NEC рекомендует, чтобы падение напряжения на разветвительных цепях не превышало 3% напряжения источника при полной нагрузке, а суммарное падение (магистраль + ответвление) не превышало 5%." },
    ],
  },

  zh: {
    title: "电压降计算器",
    short: "根据NEC指南计算单相电路中电缆的电压降。",
    description:
      "免费铜铝导体电压降计算器。输入导体截面积（AWG或mm²）、单程长度、电流和系统电压，即可获得电压降、百分比降和NEC合规状态。",
    keywords: ["电压降计算器", "电缆电压降", "AWG电压降", "NEC电压降", "导线截面积计算器"],
    inputs: {
      conductorMaterial: { label: "导体材料", help: "铜的电阻率低于铝。" },
      wireGaugeUnit: { label: "线径单位", help: "AWG（美国线规）或mm²横截面积。" },
      wireGauge: { label: "线径/截面积", help: "AWG编号（数字越小越粗）或mm²截面积。" },
      lengthM: { label: "单程长度（m）", help: "从电源到负载的距离（米）。总电缆长度为此值的两倍。" },
      currentA: { label: "电流（A）", help: "负载电流（安培）。" },
      voltage: { label: "电源电压（V）", help: "电源处的额定系统电压。" },
    },
    outputs: {
      voltageDrop: { label: "电压降（V）", help: "两根导体上的总电压损失（双程路径）。" },
      voltageDropPct: { label: "电压降（%）", help: "相对于电源电压的降落百分比。NEC建议不超过3%。" },
      receivingVoltage: { label: "负载端电压（V）", help: "负载处实际可用电压。" },
      recommendation: { label: "NEC状态", help: "ok = ≤3%，警告 = 3–5%，严重 = >5%。" },
      areaMm2: { label: "导体面积（mm²）", help: "导体的有效横截面积。" },
    },
    options: {
      conductorMaterial: { copper: "铜（Cu）", aluminum: "铝（Al）" },
      wireGaugeUnit: { awg: "AWG（美国线规）", mm2: "mm²（截面积）" },
    },
    errors: { invalidGauge: "线径必须为正数。" },
    faq: [
      { q: "NEC的3%规则是什么？", a: "美国国家电气法规（NEC）建议分支电路在满载时的电压降不超过电源电压的3%，馈线与分支电路的综合压降不超过5%。" },
    ],
  },

  ja: {
    title: "電圧降下計算機",
    short: "NEC基準に従って単相回路の電気ケーブルの電圧降下を計算します。",
    description:
      "銅・アルミ導体向けの無料電圧降下計算機。導体サイズ（AWGまたはmm²）、片道距離、電流、系統電圧を入力して電圧降下、降下率、NEC適合状況を確認できます。",
    keywords: ["電圧降下計算機", "ケーブル電圧降下", "AWG電圧降下", "NEC電圧降下", "電線断面積計算機"],
    inputs: {
      conductorMaterial: { label: "導体材料", help: "銅はアルミより低い抵抗率を持ちます。" },
      wireGaugeUnit: { label: "線径単位", help: "AWG（アメリカ電線規格）またはmm²断面積。" },
      wireGauge: { label: "線径 / 断面積", help: "AWG番号（小さいほど太い）またはmm²断面積。" },
      lengthM: { label: "片道長さ（m）", help: "電源から負荷までの距離（メートル）。" },
      currentA: { label: "電流（A）", help: "負荷電流（アンペア）。" },
      voltage: { label: "電源電圧（V）", help: "電源側の公称系統電圧。" },
    },
    outputs: {
      voltageDrop: { label: "電圧降下（V）", help: "両導体（往復）の合計電圧損失。" },
      voltageDropPct: { label: "電圧降下率（%）", help: "電源電圧に対する降下の割合。NECは≤3%を推奨。" },
      receivingVoltage: { label: "受電電圧（V）", help: "負荷側で実際に使用できる電圧。" },
      recommendation: { label: "NEC判定", help: "ok = ≤3%、警告 = 3–5%、危険 = >5%。" },
      areaMm2: { label: "導体断面積（mm²）", help: "導体の有効断面積。" },
    },
    options: {
      conductorMaterial: { copper: "銅（Cu）", aluminum: "アルミニウム（Al）" },
      wireGaugeUnit: { awg: "AWG（アメリカ電線規格）", mm2: "mm²（断面積）" },
    },
    errors: { invalidGauge: "線径は正の数でなければなりません。" },
    faq: [
      { q: "NECの3%ルールとは何ですか？", a: "NEC（米国電気法）は、分岐回路の電圧降下が定格負荷時に電源電圧の3%を超えないよう推奨しており、幹線と分岐回路を合わせた降下が5%を超えないことを求めています。" },
    ],
  },

  ko: {
    title: "전압 강하 계산기",
    short: "NEC 지침에 따라 단상 회로의 전기 케이블 전압 강하를 계산합니다.",
    description:
      "동선 및 알루미늄 도체용 무료 전압 강하 계산기. 도체 단면적(AWG 또는 mm²), 편도 길이, 전류, 시스템 전압을 입력하면 전압 강하, 강하율, NEC 준수 상태를 확인할 수 있습니다.",
    keywords: ["전압 강하 계산기", "케이블 전압 강하", "AWG 전압 강하", "NEC 전압 강하", "전선 단면적 계산기"],
    inputs: {
      conductorMaterial: { label: "도체 재료", help: "구리는 알루미늄보다 낮은 저항률을 가집니다." },
      wireGaugeUnit: { label: "선경 단위", help: "AWG(미국 전선 규격) 또는 mm² 단면적." },
      wireGauge: { label: "선경 / 단면적", help: "AWG 번호(작을수록 굵음) 또는 mm² 단면적." },
      lengthM: { label: "편도 길이(m)", help: "전원에서 부하까지의 거리(미터)." },
      currentA: { label: "전류(A)", help: "부하 전류(암페어)." },
      voltage: { label: "전원 전압(V)", help: "전원 측 공칭 시스템 전압." },
    },
    outputs: {
      voltageDrop: { label: "전압 강하(V)", help: "두 도체(왕복)의 총 전압 손실." },
      voltageDropPct: { label: "전압 강하율(%)", help: "전원 전압 대비 강하 비율. NEC는 ≤3%를 권장합니다." },
      receivingVoltage: { label: "수전 전압(V)", help: "부하에서 실제로 사용 가능한 전압." },
      recommendation: { label: "NEC 상태", help: "ok = ≤3%, 경고 = 3–5%, 위험 = >5%." },
      areaMm2: { label: "도체 단면적(mm²)", help: "도체의 유효 단면적." },
    },
    options: {
      conductorMaterial: { copper: "구리(Cu)", aluminum: "알루미늄(Al)" },
      wireGaugeUnit: { awg: "AWG(미국 전선 규격)", mm2: "mm²(단면적)" },
    },
    errors: { invalidGauge: "선경은 양수여야 합니다." },
    faq: [
      { q: "NEC 3% 규정이란 무엇인가요?", a: "NEC는 분기 회로의 전압 강하가 정격 부하 시 전원 전압의 3%를 초과하지 않고, 간선과 분기 회로를 합산한 강하가 5%를 넘지 않도록 권장합니다." },
    ],
  },

  hi: {
    title: "वोल्टेज ड्रॉप कैलकुलेटर",
    short: "NEC दिशानिर्देशों के अनुसार एकल-चरण सर्किट में विद्युत केबलों में वोल्टेज ड्रॉप की गणना करें।",
    description:
      "तांबे और एल्युमीनियम कंडक्टर के लिए निःशुल्क वोल्टेज ड्रॉप कैलकुलेटर। कंडक्टर आकार (AWG या mm²), एकतरफा लंबाई, करंट और सिस्टम वोल्टेज दर्ज करें।",
    keywords: ["वोल्टेज ड्रॉप कैलकुलेटर", "केबल वोल्टेज ड्रॉप", "AWG वोल्टेज ड्रॉप", "NEC वोल्टेज ड्रॉप"],
    inputs: {
      conductorMaterial: { label: "कंडक्टर सामग्री", help: "तांबे की प्रतिरोधकता एल्युमीनियम से कम होती है।" },
      wireGaugeUnit: { label: "तार मापन इकाई", help: "AWG (अमेरिकी तार गेज) या mm² अनुप्रस्थ काट।" },
      wireGauge: { label: "तार गेज / आकार", help: "AWG संख्या (कम = मोटा) या mm² में अनुप्रस्थ काट।" },
      lengthM: { label: "एकतरफा लंबाई (m)", help: "स्रोत से लोड तक की दूरी मीटर में।" },
      currentA: { label: "करंट (A)", help: "एम्पीयर में लोड करंट।" },
      voltage: { label: "स्रोत वोल्टेज (V)", help: "स्रोत पर नाममात्र सिस्टम वोल्टेज।" },
    },
    outputs: {
      voltageDrop: { label: "वोल्टेज ड्रॉप (V)", help: "दोनों कंडक्टरों (आने-जाने) पर कुल वोल्टेज हानि।" },
      voltageDropPct: { label: "वोल्टेज ड्रॉप (%)", help: "स्रोत वोल्टेज के प्रतिशत के रूप में ड्रॉप। NEC ≤3% की सिफारिश करता है।" },
      receivingVoltage: { label: "प्राप्त वोल्टेज (V)", help: "लोड पर वास्तविक उपलब्ध वोल्टेज।" },
      recommendation: { label: "NEC स्थिति", help: "ok = ≤3%, चेतावनी = 3–5%, गंभीर = >5%।" },
      areaMm2: { label: "कंडक्टर क्षेत्रफल (mm²)", help: "कंडक्टर का प्रभावी अनुप्रस्थ काट क्षेत्रफल।" },
    },
    options: {
      conductorMaterial: { copper: "तांबा (Cu)", aluminum: "एल्युमीनियम (Al)" },
      wireGaugeUnit: { awg: "AWG (अमेरिकी तार गेज)", mm2: "mm² (अनुप्रस्थ काट)" },
    },
    errors: { invalidGauge: "तार गेज एक सकारात्मक संख्या होनी चाहिए।" },
    faq: [
      { q: "NEC की 3% नियम क्या है?", a: "राष्ट्रीय विद्युत संहिता (NEC) अनुशंसा करती है कि शाखा सर्किट पर वोल्टेज ड्रॉप पूर्ण भार पर स्रोत वोल्टेज के 3% से अधिक न हो।" },
    ],
  },
};

export default i18n;
