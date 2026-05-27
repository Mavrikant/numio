import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "eGFR Calculator",
    short: "Calculate your estimated glomerular filtration rate using the CKD-EPI 2021 equation.",
    description:
      "Free eGFR calculator using CKD-EPI 2021 equation. Enter creatinine level, age, sex, and race to assess kidney function and CKD stage.",
    keywords: [
      "eGFR calculator",
      "glomerular filtration rate",
      "kidney function",
      "CKD stage",
      "creatinine",
      "chronic kidney disease",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "Serum Creatinine",
        help: "Your serum creatinine level in µmol/L (micromoles per liter).",
      },
      ageYears: {
        label: "Age",
        help: "Your age in years (18–120).",
      },
      sex: {
        label: "Sex",
        help: "Your biological sex (used in the CKD-EPI equation).",
      },
      race: {
        label: "Race/Ethnicity",
        help: "For the CKD-EPI 2021 adjustment. Select 'Black' for Black individuals or 'Other' for all others.",
      },
    },
    outputs: {
      eGfr: {
        label: "eGFR",
        help: "Estimated Glomerular Filtration Rate in mL/min/1.73m².",
      },
      stage: {
        label: "CKD Stage",
        help: "Chronic Kidney Disease stage based on eGFR.",
      },
      stageLabel: {
        label: "Stage Description",
        help: "Detailed description of your kidney function category.",
      },
      riskLevel: {
        label: "Risk Level",
        help: "Overall risk classification based on kidney function.",
      },
    },
    options: {
      sex: {
        male: "Male",
        female: "Female",
      },
      race: {
        black: "Black",
        other: "Other",
      },
    },
    errors: {
      creatinineRequired: "Serum creatinine is required.",
      ageRequired: "Age is required.",
      ageRange: "Age must be between 18 and 120 years.",
      sexRequired: "Sex must be specified.",
      raceRequired: "Race/ethnicity must be specified.",
    },
    faq: [
      {
        q: "What is eGFR?",
        a: "eGFR (estimated Glomerular Filtration Rate) estimates how well your kidneys are filtering waste from your blood. It is measured in mL/min/1.73m² and is one of the main indicators of kidney health.",
      },
      {
        q: "What are the CKD stages?",
        a: "There are 5 stages of chronic kidney disease (CKD) based on eGFR: Stage 1 (eGFR ≥90, normal or high), Stage 2 (60–89, mildly decreased), Stage 3a (45–59, mild–moderate decrease), Stage 3b (30–44, moderate–severe decrease), Stage 4 (15–29, severely decreased), and Stage 5 (<15, kidney failure).",
      },
      {
        q: "Is eGFR accurate?",
        a: "eGFR is an estimate based on serum creatinine and demographic factors. It may be inaccurate in elderly individuals, those with extreme body compositions, or certain medical conditions. Cystatin C or measured GFR may be needed for confirmation.",
      },
      {
        q: "What do I do if my eGFR is low?",
        a: "If your eGFR is low, consult your healthcare provider. They may recommend lifestyle changes, medication, or further testing. Regular monitoring is important for managing kidney health.",
      },
      {
        q: "Why is race included in the CKD-EPI equation?",
        a: "The CKD-EPI 2021 equation includes an optional race adjustment for Black individuals based on epidemiological data. However, recent guidance suggests this factor should be applied thoughtfully and with clinical context.",
      },
    ],
  },

  tr: {
    title: "eGFR Hesaplayıcı",
    short: "CKD-EPI 2021 denklemi kullanarak tahmini glomerüler filtrasyon hızınızı hesaplayın.",
    description:
      "CKD-EPI 2021 denklemi kullanan ücretsiz eGFR hesaplayıcı. Kreatinin düzeyini, yaşını, cinsiyetini ve ırkını girerek böbrek fonksiyonunu ve CKD evresini değerlendirin.",
    keywords: [
      "eGFR hesaplayıcı",
      "glomerüler filtrasyon hızı",
      "böbrek fonksiyonu",
      "CKD evresi",
      "kreatinin",
      "kronik böbrek hastalığı",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "Serum Kreatinin",
        help: "Serum kreatinin seviyesi µmol/L (mikromol/litre) cinsinden.",
      },
      ageYears: {
        label: "Yaş",
        help: "Yaşınız (18–120).",
      },
      sex: {
        label: "Cinsiyet",
        help: "Biyolojik cinsiyetiniz (CKD-EPI denkleminde kullanılır).",
      },
      race: {
        label: "Irk/Etnik Köken",
        help: "CKD-EPI 2021 ayarlaması için. Siyah bireyler için 'Siyah' seçin, diğerleri için 'Diğer' seçin.",
      },
    },
    outputs: {
      eGfr: {
        label: "eGFR",
        help: "Tahmini Glomerüler Filtrasyon Hızı (mL/dak/1,73m²).",
      },
      stage: {
        label: "CKD Evresi",
        help: "eGFR'ye dayalı Kronik Böbrek Hastalığı evresi.",
      },
      stageLabel: {
        label: "Evre Açıklaması",
        help: "Böbrek fonksiyonu kategorisinin detaylı açıklaması.",
      },
      riskLevel: {
        label: "Risk Seviyesi",
        help: "Böbrek fonksiyonuna dayanarak genel risk sınıflandırması.",
      },
    },
    options: {
      sex: {
        male: "Erkek",
        female: "Kadın",
      },
      race: {
        black: "Siyah",
        other: "Diğer",
      },
    },
    errors: {
      creatinineRequired: "Serum kreatinin gereklidir.",
      ageRequired: "Yaş gereklidir.",
      ageRange: "Yaş 18 ile 120 arasında olmalıdır.",
      sexRequired: "Cinsiyet belirtilmelidir.",
      raceRequired: "Irk/etnik köken belirtilmelidir.",
    },
    faq: [
      {
        q: "eGFR nedir?",
        a: "eGFR (tahmini Glomerüler Filtrasyon Hızı), böbreklerinizin kanınızdaki atığı ne kadar iyi filtrelediğini tahmin eder. mL/dak/1,73m² cinsinden ölçülür ve böbrek sağlığının ana göstergelerinden biridir.",
      },
      {
        q: "CKD evreleri nelerdir?",
        a: "eGFR'ye dayalı 5 kronik böbrek hastalığı (CKD) evresi vardır: Evre 1 (eGFR ≥90), Evre 2 (60–89), Evre 3a (45–59), Evre 3b (30–44), Evre 4 (15–29), Evre 5 (<15).",
      },
      {
        q: "eGFR ne kadar doğrudur?",
        a: "eGFR, serum kreatinin ve demografik faktörlere dayalı bir tahmindir. Yaşlı bireyler, uç vücut ölçüleri veya belirli tıbbi durumlar için yanlış olabilir. Doğrulama için Cystatin C veya ölçülen GFR gerekebilir.",
      },
      {
        q: "eGFR'im düşükse ne yapmalıyım?",
        a: "eGFR'niz düşükse, sağlık hizmeti sağlayıcınıza danışın. Yaşam tarzı değişiklikleri, ilaç veya daha fazla test önerebilirler. Düzenli izleme böbrek sağlığını yönetmek için önemlidir.",
      },
      {
        q: "Neden ırk CKD-EPI denkleminde yer alıyor?",
        a: "CKD-EPI 2021 denklemi epidemiyolojik verilere dayanarak Siyah bireyler için isteğe bağlı bir ırk ayarlaması içerir. Ancak güncel rehberler bu faktörün klinik bağlamla düşünülerek uygulanması gerektiğini önerir.",
      },
    ],
  },

  de: {
    title: "eGFR-Rechner",
    short: "Berechnen Sie Ihre geschätzte glomeruläre Filtrationsrate mit der CKD-EPI-2021-Gleichung.",
    description:
      "Kostenloser eGFR-Rechner mit der CKD-EPI-2021-Gleichung. Geben Sie Kreatinin, Alter, Geschlecht und ethnische Herkunft ein, um Ihre Nierenfunktion und CKD-Stadium zu beurteilen.",
    keywords: [
      "eGFR-Rechner",
      "glomeruläre Filtrationsrate",
      "Nierenfunktion",
      "CKD-Stadium",
      "Kreatinin",
      "chronische Nierenerkrankung",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "Serum-Kreatinin",
        help: "Ihr Serum-Kreatinin-Wert in µmol/L.",
      },
      ageYears: {
        label: "Alter",
        help: "Ihr Alter in Jahren (18–120).",
      },
      sex: {
        label: "Geschlecht",
        help: "Ihr biologisches Geschlecht.",
      },
      race: {
        label: "Rasse/Ethnische Herkunft",
        help: "Für die CKD-EPI-2021-Anpassung. Wählen Sie 'Schwarz' oder 'Sonstiges'.",
      },
    },
    outputs: {
      eGfr: {
        label: "eGFR",
        help: "Geschätzte glomeruläre Filtrationsrate in mL/min/1,73m².",
      },
      stage: {
        label: "CKD-Stadium",
        help: "Chronische-Nierenerkrankung-Stadium basierend auf eGFR.",
      },
      stageLabel: {
        label: "Stadium-Beschreibung",
        help: "Detaillierte Beschreibung Ihrer Nierenfunktionskategorie.",
      },
      riskLevel: {
        label: "Risikostufe",
        help: "Gesamte Risikoklassifizierung basierend auf Nierenfunktion.",
      },
    },
    options: {
      sex: {
        male: "Männlich",
        female: "Weiblich",
      },
      race: {
        black: "Schwarz",
        other: "Sonstiges",
      },
    },
    errors: {
      creatinineRequired: "Serum-Kreatinin ist erforderlich.",
      ageRequired: "Alter ist erforderlich.",
      ageRange: "Das Alter muss zwischen 18 und 120 Jahren liegen.",
      sexRequired: "Geschlecht muss angegeben werden.",
      raceRequired: "Rasse/ethnische Herkunft muss angegeben werden.",
    },
    faq: [
      {
        q: "Was ist eGFR?",
        a: "eGFR schätzt, wie gut Ihre Nieren Abfallstoffe aus Ihrem Blut filtern. Sie wird in mL/min/1,73m² gemessen und ist ein Hauptindikator für die Nierengesundheit.",
      },
      {
        q: "Was sind die CKD-Stadien?",
        a: "Es gibt 5 Stadien der chronischen Nierenerkrankung basierend auf eGFR: Stadium 1 (≥90), Stadium 2 (60–89), Stadium 3a (45–59), Stadium 3b (30–44), Stadium 4 (15–29), Stadium 5 (<15).",
      },
      {
        q: "Ist eGFR genau?",
        a: "eGFR ist eine Schätzung basierend auf Serum-Kreatinin und demografischen Faktoren. Es kann bei älteren Menschen oder extremen Körperzusammensetzungen ungenau sein. Weitere Tests können erforderlich sein.",
      },
      {
        q: "Was soll ich tun, wenn mein eGFR niedrig ist?",
        a: "Konsultieren Sie Ihren Arzt. Empfehlungen können Lebensstiländerungen, Medikamente oder weitere Tests beinhalten. Regelmäßige Überwachung ist wichtig.",
      },
      {
        q: "Warum wird Rasse in der CKD-EPI-Gleichung berücksichtigt?",
        a: "Die CKD-EPI-2021-Gleichung enthält eine optionale Rassenkorrektur für schwarze Personen basierend auf epidemiologischen Daten.",
      },
    ],
  },

  fr: {
    title: "Calculateur d'eGFR",
    short: "Calculez votre taux de filtration glomérulaire estimé avec l'équation CKD-EPI 2021.",
    description:
      "Calculateur d'eGFR gratuit avec l'équation CKD-EPI 2021. Entrez la créatinine, l'âge, le sexe et l'origine ethnique pour évaluer votre fonction rénale et stade CKD.",
    keywords: [
      "calculateur eGFR",
      "taux de filtration glomérulaire",
      "fonction rénale",
      "stade CKD",
      "créatinine",
      "maladie rénale chronique",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "Créatinine Sérique",
        help: "Votre taux de créatinine sérique en µmol/L.",
      },
      ageYears: {
        label: "Âge",
        help: "Votre âge en années (18–120).",
      },
      sex: {
        label: "Sexe",
        help: "Votre sexe biologique.",
      },
      race: {
        label: "Race/Origine Ethnique",
        help: "Pour l'ajustement CKD-EPI 2021.",
      },
    },
    outputs: {
      eGfr: {
        label: "eGFR",
        help: "Taux de filtration glomérulaire estimé en mL/min/1,73m².",
      },
      stage: {
        label: "Stade CKD",
        help: "Stade de maladie rénale chronique basé sur l'eGFR.",
      },
      stageLabel: {
        label: "Description du Stade",
        help: "Description détaillée de votre catégorie de fonction rénale.",
      },
      riskLevel: {
        label: "Niveau de Risque",
        help: "Classification globale du risque basée sur la fonction rénale.",
      },
    },
    options: {
      sex: {
        male: "Masculin",
        female: "Féminin",
      },
      race: {
        black: "Noir",
        other: "Autre",
      },
    },
    errors: {
      creatinineRequired: "La créatinine sérique est requise.",
      ageRequired: "L'âge est requis.",
      ageRange: "L'âge doit être entre 18 et 120 ans.",
      sexRequired: "Le sexe doit être spécifié.",
      raceRequired: "L'origine ethnique doit être spécifiée.",
    },
    faq: [
      {
        q: "Qu'est-ce que l'eGFR?",
        a: "L'eGFR estime comment vos reins filtrent les déchets de votre sang. Elle est mesurée en mL/min/1,73m² et est un indicateur clé de la santé rénale.",
      },
      {
        q: "Quels sont les stades de la CKD?",
        a: "Il y a 5 stades basés sur l'eGFR: Stade 1 (≥90), Stade 2 (60–89), Stade 3a (45–59), Stade 3b (30–44), Stade 4 (15–29), Stade 5 (<15).",
      },
      {
        q: "L'eGFR est-il précis?",
        a: "L'eGFR est une estimation basée sur la créatinine et les facteurs démographiques. Elle peut être inexacte chez les personnes âgées ou les corps extrêmes.",
      },
      {
        q: "Que faire si mon eGFR est bas?",
        a: "Consultez votre médecin. Des changements de style de vie, des médicaments ou d'autres tests peuvent être recommandés.",
      },
      {
        q: "Pourquoi la race est-elle dans l'équation CKD-EPI?",
        a: "L'équation CKD-EPI 2021 inclut un ajustement de race optionnel basé sur des données épidémiologiques.",
      },
    ],
  },

  es: {
    title: "Calculadora de eGFR",
    short: "Calcula tu tasa de filtración glomerular estimada con la ecuación CKD-EPI 2021.",
    description:
      "Calculadora eGFR gratuita con ecuación CKD-EPI 2021. Introduce creatinina, edad, sexo y etnia para evaluar tu función renal y estadio CKD.",
    keywords: [
      "calculadora eGFR",
      "tasa de filtración glomerular",
      "función renal",
      "estadio CKD",
      "creatinina",
      "enfermedad renal crónica",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "Creatinina Sérica",
        help: "Tu nivel de creatinina sérica en µmol/L.",
      },
      ageYears: {
        label: "Edad",
        help: "Tu edad en años (18–120).",
      },
      sex: {
        label: "Sexo",
        help: "Tu sexo biológico.",
      },
      race: {
        label: "Raza/Etnia",
        help: "Para ajuste CKD-EPI 2021.",
      },
    },
    outputs: {
      eGfr: {
        label: "eGFR",
        help: "Tasa de filtración glomerular estimada en mL/min/1,73m².",
      },
      stage: {
        label: "Estadio CKD",
        help: "Estadio de enfermedad renal crónica basado en eGFR.",
      },
      stageLabel: {
        label: "Descripción del Estadio",
        help: "Descripción detallada de tu categoría de función renal.",
      },
      riskLevel: {
        label: "Nivel de Riesgo",
        help: "Clasificación general de riesgo basada en función renal.",
      },
    },
    options: {
      sex: {
        male: "Masculino",
        female: "Femenino",
      },
      race: {
        black: "Negro",
        other: "Otro",
      },
    },
    errors: {
      creatinineRequired: "Creatinina sérica requerida.",
      ageRequired: "Edad requerida.",
      ageRange: "La edad debe estar entre 18 y 120 años.",
      sexRequired: "Sexo debe especificarse.",
      raceRequired: "Raza/etnia debe especificarse.",
    },
    faq: [
      {
        q: "¿Qué es el eGFR?",
        a: "eGFR estima qué tan bien tus riñones filtran residuos de tu sangre. Se mide en mL/min/1,73m² y es un indicador clave de salud renal.",
      },
      {
        q: "¿Cuáles son los estadios de CKD?",
        a: "Hay 5 estadios basados en eGFR: Estadio 1 (≥90), Estadio 2 (60–89), Estadio 3a (45–59), Estadio 3b (30–44), Estadio 4 (15–29), Estadio 5 (<15).",
      },
      {
        q: "¿Es preciso el eGFR?",
        a: "eGFR es una estimación basada en creatinina y factores demográficos. Puede ser inexacto en personas mayores o composiciones corporales extremas.",
      },
      {
        q: "¿Qué hacer si mi eGFR es bajo?",
        a: "Consulta a tu médico. Cambios en el estilo de vida, medicamentos o pruebas adicionales pueden recomendarse.",
      },
      {
        q: "¿Por qué la raza está en la ecuación CKD-EPI?",
        a: "La ecuación CKD-EPI 2021 incluye un ajuste de raza opcional basado en datos epidemiológicos.",
      },
    ],
  },

  it: {
    title: "Calcolatore eGFR",
    short: "Calcola il tuo tasso di filtrazione glomerulare stimato con l'equazione CKD-EPI 2021.",
    description:
      "Calcolatore eGFR gratuito con equazione CKD-EPI 2021. Inserisci creatinina, età, sesso ed etnia per valutare la funzione renale e lo stadio CKD.",
    keywords: [
      "calcolatore eGFR",
      "tasso di filtrazione glomerulare",
      "funzione renale",
      "stadio CKD",
      "creatinina",
      "malattia renale cronica",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "Creatinina Sierica",
        help: "Il tuo livello di creatinina sierica in µmol/L.",
      },
      ageYears: {
        label: "Età",
        help: "La tua età in anni (18–120).",
      },
      sex: {
        label: "Sesso",
        help: "Il tuo sesso biologico.",
      },
      race: {
        label: "Razza/Etnia",
        help: "Per l'aggiustamento CKD-EPI 2021.",
      },
    },
    outputs: {
      eGfr: {
        label: "eGFR",
        help: "Tasso di filtrazione glomerulare stimato in mL/min/1,73m².",
      },
      stage: {
        label: "Stadio CKD",
        help: "Stadio della malattia renale cronica basato su eGFR.",
      },
      stageLabel: {
        label: "Descrizione dello Stadio",
        help: "Descrizione dettagliata della tua categoria di funzione renale.",
      },
      riskLevel: {
        label: "Livello di Rischio",
        help: "Classificazione complessiva del rischio basata sulla funzione renale.",
      },
    },
    options: {
      sex: {
        male: "Maschio",
        female: "Femmina",
      },
      race: {
        black: "Nero",
        other: "Altro",
      },
    },
    errors: {
      creatinineRequired: "Creatinina sierica richiesta.",
      ageRequired: "Età richiesta.",
      ageRange: "L'età deve essere tra 18 e 120 anni.",
      sexRequired: "Il sesso deve essere specificato.",
      raceRequired: "L'etnia deve essere specificata.",
    },
    faq: [
      {
        q: "Che cos'è l'eGFR?",
        a: "eGFR stima quanto bene i tuoi reni filtrano i rifiuti dal tuo sangue. Si misura in mL/min/1,73m² ed è un indicatore chiave della salute renale.",
      },
      {
        q: "Quali sono gli stadi della CKD?",
        a: "Ci sono 5 stadi basati su eGFR: Stadio 1 (≥90), Stadio 2 (60–89), Stadio 3a (45–59), Stadio 3b (30–44), Stadio 4 (15–29), Stadio 5 (<15).",
      },
      {
        q: "L'eGFR è preciso?",
        a: "eGFR è una stima basata su creatinina e fattori demografici. Può essere impreciso in persone anziane o con composizioni corporee estreme.",
      },
      {
        q: "Cosa fare se il mio eGFR è basso?",
        a: "Consulta il tuo medico. Potrebbero essere consigliati cambiamenti dello stile di vita, farmaci o test aggiuntivi.",
      },
      {
        q: "Perché la razza è nell'equazione CKD-EPI?",
        a: "L'equazione CKD-EPI 2021 include un aggiustamento razziale facoltativo basato su dati epidemiologici.",
      },
    ],
  },

  ar: {
    title: "حاسبة معدل الترشيح الكبيبي المقدر",
    short: "احسب معدل الترشيح الكبيبي المقدر باستخدام معادلة CKD-EPI 2021.",
    description:
      "حاسبة eGFR مجانية تستخدم معادلة CKD-EPI 2021. أدخل مستوى الكرياتينين والعمر والجنس والعرق لتقييم وظيفة الكلى ومرحلة CKD.",
    keywords: [
      "حاسبة eGFR",
      "معدل الترشيح الكبيبي",
      "وظيفة الكلى",
      "مرحلة CKD",
      "الكرياتينين",
      "أمراض الكلى المزمنة",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "الكرياتينين في الدم",
        help: "مستوى الكرياتينين في الدم بوحدة µmol/L.",
      },
      ageYears: {
        label: "العمر",
        help: "عمرك بالسنوات (18–120).",
      },
      sex: {
        label: "الجنس",
        help: "جنسك البيولوجي.",
      },
      race: {
        label: "العرق/الأصل الإثني",
        help: "لتعديل CKD-EPI 2021.",
      },
    },
    outputs: {
      eGfr: {
        label: "eGFR",
        help: "معدل الترشيح الكبيبي المقدر بوحدة mL/min/1.73m².",
      },
      stage: {
        label: "مرحلة CKD",
        help: "مرحلة أمراض الكلى المزمنة بناءً على eGFR.",
      },
      stageLabel: {
        label: "وصف المرحلة",
        help: "وصف تفصيلي لفئة وظيفة الكلى لديك.",
      },
      riskLevel: {
        label: "مستوى المخاطر",
        help: "تصنيف المخاطر العام بناءً على وظيفة الكلى.",
      },
    },
    options: {
      sex: {
        male: "ذكر",
        female: "أنثى",
      },
      race: {
        black: "أسود",
        other: "آخر",
      },
    },
    errors: {
      creatinineRequired: "الكرياتينين في الدم مطلوب.",
      ageRequired: "العمر مطلوب.",
      ageRange: "يجب أن يكون العمر بين 18 و120 سنة.",
      sexRequired: "يجب تحديد الجنس.",
      raceRequired: "يجب تحديد العرق/الأصل الإثني.",
    },
    faq: [
      {
        q: "ما هو eGFR؟",
        a: "eGFR يقدر مدى جودة قيام الكليتين بتصفية فضلات الدم. يقاس بوحدة mL/min/1.73m² وهو أحد المؤشرات الرئيسية لصحة الكلى.",
      },
      {
        q: "ما هي مراحل CKD؟",
        a: "هناك 5 مراحل بناءً على eGFR: المرحلة 1 (≥90)، المرحلة 2 (60–89)، المرحلة 3a (45–59)، المرحلة 3b (30–44)، المرحلة 4 (15–29)، المرحلة 5 (<15).",
      },
      {
        q: "هل eGFR دقيق؟",
        a: "eGFR هو تقدير يعتمد على الكرياتينين والعوامل الديموغرافية. قد يكون غير دقيق لدى كبار السن أو الأشخاص ذوي التركيبة الجسمانية المتطرفة.",
      },
      {
        q: "ماذا أفعل إذا كان eGFR منخفضًا؟",
        a: "استشر طبيبك. قد يوصي بتغييرات نمط الحياة أو الأدوية أو اختبارات إضافية.",
      },
      {
        q: "لماذا يتم تضمين العرق في معادلة CKD-EPI؟",
        a: "تتضمن معادلة CKD-EPI 2021 تعديل عرق اختياري بناءً على البيانات الوبائية.",
      },
    ],
  },

  ru: {
    title: "Калькулятор СКФ",
    short: "Рассчитайте вашу расчётную скорость клубочковой фильтрации, используя уравнение CKD-EPI 2021.",
    description:
      "Бесплатный калькулятор СКФ с уравнением CKD-EPI 2021. Введите уровень креатинина, возраст, пол и этническую принадлежность для оценки функции почек и стадии ХБП.",
    keywords: [
      "калькулятор СКФ",
      "скорость клубочковой фильтрации",
      "функция почек",
      "стадия ХБП",
      "креатинин",
      "хроническая болезнь почек",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "Сывороточный креатинин",
        help: "Ваш уровень сывороточного креатинина в µmol/L.",
      },
      ageYears: {
        label: "Возраст",
        help: "Ваш возраст в годах (18–120).",
      },
      sex: {
        label: "Пол",
        help: "Ваш биологический пол.",
      },
      race: {
        label: "Раса/Национальность",
        help: "Для коррекции CKD-EPI 2021.",
      },
    },
    outputs: {
      eGfr: {
        label: "СКФ",
        help: "Расчётная скорость клубочковой фильтрации в мл/мин/1,73м².",
      },
      stage: {
        label: "Стадия ХБП",
        help: "Стадия хронической болезни почек на основе СКФ.",
      },
      stageLabel: {
        label: "Описание Стадии",
        help: "Подробное описание вашей категории функции почек.",
      },
      riskLevel: {
        label: "Уровень Риска",
        help: "Общая классификация риска на основе функции почек.",
      },
    },
    options: {
      sex: {
        male: "Мужской",
        female: "Женский",
      },
      race: {
        black: "Афроамериканец",
        other: "Другие",
      },
    },
    errors: {
      creatinineRequired: "Сывороточный креатинин обязателен.",
      ageRequired: "Возраст обязателен.",
      ageRange: "Возраст должен быть от 18 до 120 лет.",
      sexRequired: "Пол должен быть указан.",
      raceRequired: "Раса/национальность должна быть указана.",
    },
    faq: [
      {
        q: "Что такое СКФ?",
        a: "СКФ показывает, насколько хорошо ваши почки фильтруют отходы из крови. Измеряется в мл/мин/1,73м² и является основным показателем здоровья почек.",
      },
      {
        q: "Какие стадии ХБП?",
        a: "Есть 5 стадий на основе СКФ: Стадия 1 (≥90), Стадия 2 (60–89), Стадия 3a (45–59), Стадия 3b (30–44), Стадия 4 (15–29), Стадия 5 (<15).",
      },
      {
        q: "Насколько точна СКФ?",
        a: "СКФ - это оценка, основанная на креатинине и демографических факторах. Может быть неточна у пожилых людей или при экстремальных параметрах тела.",
      },
      {
        q: "Что делать, если СКФ низкая?",
        a: "Проконсультируйтесь с врачом. Могут быть рекомендованы изменения образа жизни, лекарства или дополнительные исследования.",
      },
      {
        q: "Почему в уравнение CKD-EPI включена раса?",
        a: "Уравнение CKD-EPI 2021 содержит необязательную коррекцию по расе, основанную на эпидемиологических данных.",
      },
    ],
  },

  zh: {
    title: "eGFR计算器",
    short: "使用CKD-EPI 2021方程计算您的估算肾小球滤过率。",
    description:
      "基于CKD-EPI 2021方程的免费eGFR计算器。输入肌酐水平、年龄、性别和种族以评估肾功能和CKD分期。",
    keywords: [
      "eGFR计算器",
      "肾小球滤过率",
      "肾功能",
      "CKD分期",
      "肌酐",
      "慢性肾病",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "血清肌酐",
        help: "您的血清肌酐水平（µmol/L）。",
      },
      ageYears: {
        label: "年龄",
        help: "您的年龄（18–120岁）。",
      },
      sex: {
        label: "性别",
        help: "您的生物性别。",
      },
      race: {
        label: "种族/民族",
        help: "用于CKD-EPI 2021调整。",
      },
    },
    outputs: {
      eGfr: {
        label: "eGFR",
        help: "估算肾小球滤过率（mL/min/1.73m²）。",
      },
      stage: {
        label: "CKD分期",
        help: "基于eGFR的慢性肾病分期。",
      },
      stageLabel: {
        label: "分期描述",
        help: "您的肾功能类别的详细描述。",
      },
      riskLevel: {
        label: "风险水平",
        help: "基于肾功能的总体风险分类。",
      },
    },
    options: {
      sex: {
        male: "男性",
        female: "女性",
      },
      race: {
        black: "黑人",
        other: "其他",
      },
    },
    errors: {
      creatinineRequired: "血清肌酐是必需的。",
      ageRequired: "年龄是必需的。",
      ageRange: "年龄必须在18至120岁之间。",
      sexRequired: "必须指定性别。",
      raceRequired: "必须指定种族/民族。",
    },
    faq: [
      {
        q: "什么是eGFR？",
        a: "eGFR估计您的肾脏从血液中过滤废物的效能。以mL/min/1.73m²为单位测量，是肾脏健康的主要指标。",
      },
      {
        q: "CKD分期有哪些？",
        a: "基于eGFR有5个分期：第1阶段(≥90)、第2阶段(60–89)、第3a阶段(45–59)、第3b阶段(30–44)、第4阶段(15–29)、第5阶段(<15)。",
      },
      {
        q: "eGFR准确吗？",
        a: "eGFR是基于血清肌酐和人口统计因素的估算值。对于老年人或体型极端的人可能不准确。",
      },
      {
        q: "如果我的eGFR很低怎么办？",
        a: "请咨询您的医疗提供者。他们可能推荐生活方式改变、药物治疗或进一步检查。",
      },
      {
        q: "为什么CKD-EPI方程中包含种族？",
        a: "CKD-EPI 2021方程根据流行病学数据包含针对黑人个体的可选种族调整。",
      },
    ],
  },

  ja: {
    title: "eGFR計算機",
    short: "CKD-EPI 2021方程式を使用して推定糸球体濾過量を計算してください。",
    description:
      "CKD-EPI 2021方程式を使用した無料のeGFR計算機。クレアチニン値、年齢、性別、人種を入力して、腎機能とCKD段階を評価してください。",
    keywords: [
      "eGFR計算機",
      "糸球体濾過量",
      "腎機能",
      "CKD段階",
      "クレアチニン",
      "慢性腎臓病",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "血清クレアチニン",
        help: "血清クレアチニン値（µmol/L）。",
      },
      ageYears: {
        label: "年齢",
        help: "年齢（18～120歳）。",
      },
      sex: {
        label: "性別",
        help: "生物学的性別。",
      },
      race: {
        label: "人種/民族",
        help: "CKD-EPI 2021調整用。",
      },
    },
    outputs: {
      eGfr: {
        label: "eGFR",
        help: "推定糸球体濾過量（mL/min/1.73m²）。",
      },
      stage: {
        label: "CKD段階",
        help: "eGFRに基づく慢性腎臓病の段階。",
      },
      stageLabel: {
        label: "段階説明",
        help: "腎機能カテゴリの詳細説明。",
      },
      riskLevel: {
        label: "リスクレベル",
        help: "腎機能に基づく総合的なリスク分類。",
      },
    },
    options: {
      sex: {
        male: "男性",
        female: "女性",
      },
      race: {
        black: "黒人",
        other: "その他",
      },
    },
    errors: {
      creatinineRequired: "血清クレアチニンが必要です。",
      ageRequired: "年齢が必要です。",
      ageRange: "年齢は18～120歳の範囲内である必要があります。",
      sexRequired: "性別を指定する必要があります。",
      raceRequired: "人種/民族を指定する必要があります。",
    },
    faq: [
      {
        q: "eGFRとは何ですか？",
        a: "eGFRは、腎臓が血液から老廃物をどの程度濾過しているかを推定します。mL/min/1.73m²で測定され、腎臓の健康の主要な指標です。",
      },
      {
        q: "CKD段階は何ですか？",
        a: "eGFRに基づいて5つの段階があります：段階1(≥90)、段階2(60–89)、段階3a(45–59)、段階3b(30–44)、段階4(15–29)、段階5(<15)。",
      },
      {
        q: "eGFRは正確ですか？",
        a: "eGFRは血清クレアチニンと人口統計学的要因に基づく推定値です。高齢者や極端な体型の人には不正確である可能性があります。",
      },
      {
        q: "eGFRが低い場合はどうしますか？",
        a: "医療提供者に相談してください。生活習慣の改善、投薬、またはさらなる検査が推奨される場合があります。",
      },
      {
        q: "CKD-EPI方程式に人種が含まれるのはなぜですか？",
        a: "CKD-EPI 2021方程式は、疫学的データに基づいて黒人個人向けのオプションの人種調整を含みます。",
      },
    ],
  },

  ko: {
    title: "eGFR 계산기",
    short: "CKD-EPI 2021 방정식을 사용하여 추정 사구체 여과율을 계산하세요.",
    description:
      "CKD-EPI 2021 방정식을 사용한 무료 eGFR 계산기. 크레아티닌 수치, 나이, 성별, 인종을 입력하여 신장 기능과 CKD 단계를 평가하세요.",
    keywords: [
      "eGFR 계산기",
      "사구체 여과율",
      "신장 기능",
      "CKD 단계",
      "크레아티닌",
      "만성 신장 질환",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "혈청 크레아티닌",
        help: "혈청 크레아티닌 수치(µmol/L).",
      },
      ageYears: {
        label: "나이",
        help: "나이(18–120세).",
      },
      sex: {
        label: "성별",
        help: "생물학적 성별.",
      },
      race: {
        label: "인종/민족",
        help: "CKD-EPI 2021 조정용.",
      },
    },
    outputs: {
      eGfr: {
        label: "eGFR",
        help: "추정 사구체 여과율(mL/min/1.73m²).",
      },
      stage: {
        label: "CKD 단계",
        help: "eGFR 기반 만성 신장 질환 단계.",
      },
      stageLabel: {
        label: "단계 설명",
        help: "신장 기능 범주의 세부 설명.",
      },
      riskLevel: {
        label: "위험 수준",
        help: "신장 기능 기반의 전체 위험 분류.",
      },
    },
    options: {
      sex: {
        male: "남성",
        female: "여성",
      },
      race: {
        black: "흑인",
        other: "기타",
      },
    },
    errors: {
      creatinineRequired: "혈청 크레아티닌이 필요합니다.",
      ageRequired: "나이가 필요합니다.",
      ageRange: "나이는 18~120세 범위 내여야 합니다.",
      sexRequired: "성별을 지정해야 합니다.",
      raceRequired: "인종/민족을 지정해야 합니다.",
    },
    faq: [
      {
        q: "eGFR이란 무엇입니까?",
        a: "eGFR은 신장이 혈액에서 폐기물을 여과하는 정도를 추정합니다. mL/min/1.73m²로 측정되며 신장 건강의 주요 지표입니다.",
      },
      {
        q: "CKD 단계는 무엇입니까?",
        a: "eGFR에 따라 5가지 단계가 있습니다: 단계1(≥90), 단계2(60–89), 단계3a(45–59), 단계3b(30–44), 단계4(15–29), 단계5(<15).",
      },
      {
        q: "eGFR이 정확합니까?",
        a: "eGFR은 혈청 크레아티닌 및 인구 통계 요소를 기반으로 한 추정치입니다. 노인이나 극단적인 신체 구성의 경우 부정확할 수 있습니다.",
      },
      {
        q: "eGFR이 낮으면 어떻게 해야 합니까?",
        a: "의료 제공자에게 상담하세요. 생활 방식 변경, 약물 또는 추가 검사가 권장될 수 있습니다.",
      },
      {
        q: "CKD-EPI 방정식에 인종이 포함되는 이유는 무엇입니까?",
        a: "CKD-EPI 2021 방정식에는 역학 데이터를 기반으로 한 흑인을 위한 선택적 인종 조정이 포함됩니다.",
      },
    ],
  },

  hi: {
    title: "eGFR कैलकुलेटर",
    short: "CKD-EPI 2021 समीकरण का उपयोग करके अपनी अनुमानित ग्लोमेरुलर निस्पंदन दर की गणना करें।",
    description:
      "CKD-EPI 2021 समीकरण का उपयोग करके मुफ़्त eGFR कैलकुलेटर। क्रिएटिनिन स्तर, आयु, लिंग और जाति दर्ज करके गुर्दे की कार्यक्षमता और CKD चरण का मूल्यांकन करें।",
    keywords: [
      "eGFR कैलकुलेटर",
      "ग्लोमेरुलर निस्पंदन दर",
      "गुर्दे की कार्यक्षमता",
      "CKD चरण",
      "क्रिएटिनिन",
      "पुरानी किडनी बीमारी",
      "GFR",
    ],
    inputs: {
      creatinineUmolL: {
        label: "सीरम क्रिएटिनिन",
        help: "आपका सीरम क्रिएटिनिन स्तर µmol/L में।",
      },
      ageYears: {
        label: "आयु",
        help: "आपकी आयु वर्षों में (18–120)।",
      },
      sex: {
        label: "लिंग",
        help: "आपका जैविक लिंग।",
      },
      race: {
        label: "जाति/जातीयता",
        help: "CKD-EPI 2021 समायोजन के लिए।",
      },
    },
    outputs: {
      eGfr: {
        label: "eGFR",
        help: "अनुमानित ग्लोमेरुलर निस्पंदन दर (mL/min/1.73m²)।",
      },
      stage: {
        label: "CKD चरण",
        help: "eGFR के आधार पर पुरानी किडनी बीमारी का चरण।",
      },
      stageLabel: {
        label: "चरण विवरण",
        help: "आपकी गुर्दे की कार्यक्षमता श्रेणी का विस्तृत विवरण।",
      },
      riskLevel: {
        label: "जोखिम स्तर",
        help: "गुर्दे की कार्यक्षमता के आधार पर समग्र जोखिम वर्गीकरण।",
      },
    },
    options: {
      sex: {
        male: "पुरुष",
        female: "महिला",
      },
      race: {
        black: "अश्वेत",
        other: "अन्य",
      },
    },
    errors: {
      creatinineRequired: "सीरम क्रिएटिनिन आवश्यक है।",
      ageRequired: "आयु आवश्यक है।",
      ageRange: "आयु 18 से 120 वर्ष के बीच होनी चाहिए।",
      sexRequired: "लिंग निर्दिष्ट किया जाना चाहिए।",
      raceRequired: "जाति/जातीयता निर्दिष्ट की जानी चाहिए।",
    },
    faq: [
      {
        q: "eGFR क्या है?",
        a: "eGFR अनुमान लगाता है कि आपके गुर्दे आपके रक्त से कितनी अच्छी तरह से अपशिष्ट को फ़िल्टर कर रहे हैं। इसे mL/min/1.73m² में मापा जाता है और यह गुर्दे के स्वास्थ्य का एक मुख्य संकेतक है।",
      },
      {
        q: "CKD के चरण क्या हैं?",
        a: "eGFR के आधार पर 5 चरण हैं: चरण 1 (≥90), चरण 2 (60–89), चरण 3a (45–59), चरण 3b (30–44), चरण 4 (15–29), चरण 5 (<15)।",
      },
      {
        q: "क्या eGFR सटीक है?",
        a: "eGFR सीरम क्रिएटिनिन और जनसांख्यिकीय कारकों पर आधारित एक अनुमान है। यह बुजुर्ग व्यक्तियों या चरम शारीरिक संरचना वाले लोगों के लिए अस्सी हो सकता है।",
      },
      {
        q: "यदि मेरा eGFR कम है तो मुझे क्या करना चाहिए?",
        a: "अपने स्वास्थ्य सेवा प्रदाता से परामर्श लें। जीवनशैली परिवर्तन, दवा, या आगे के परीक्षण की सिफारिश की जा सकती है।",
      },
      {
        q: "CKD-EPI समीकरण में जाति क्यों शामिल है?",
        a: "CKD-EPI 2021 समीकरण महामारी विज्ञान संबंधी डेटा के आधार पर अश्वेत व्यक्तियों के लिए एक वैकल्पिक जाति समायोजन शामिल है।",
      },
    ],
  },
};

export default i18n;
