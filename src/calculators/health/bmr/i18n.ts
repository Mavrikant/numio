import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "BMR Calculator",
    short: "Calculate your Basal Metabolic Rate — the calories your body burns at rest.",
    description:
      "Free BMR calculator using Mifflin-St Jeor and Harris-Benedict formulas. Find out how many calories your body needs at complete rest to maintain vital functions.",
    keywords: [
      "BMR calculator",
      "basal metabolic rate",
      "resting metabolic rate",
      "calories at rest",
      "Mifflin St Jeor",
      "Harris Benedict",
      "metabolism calculator",
    ],
    inputs: {
      formula: {
        label: "Formula",
        help: "Mifflin-St Jeor (1990) is recommended by most dietitians. Harris-Benedict (1984 revision) is an older alternative.",
      },
      gender: {
        label: "Biological sex",
        help: "Sex affects BMR due to differences in muscle mass and hormones.",
      },
      weight: {
        label: "Weight",
        help: "Your current body weight in kilograms.",
      },
      height: {
        label: "Height",
        help: "Your height in centimetres.",
      },
      age: {
        label: "Age",
        help: "Your age in years. BMR decreases roughly 2% per decade after age 20.",
      },
    },
    outputs: {
      bmr: {
        label: "BMR",
        help: "Basal Metabolic Rate — calories burned per day at complete rest.",
        suffix: "kcal/day",
      },
    },
    options: {
      formula: {
        mifflin: "Mifflin-St Jeor (recommended)",
        harris: "Harris-Benedict (revised 1984)",
      },
      gender: {
        male: "Male",
        female: "Female",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 300 kg.",
      heightOutOfRange: "Height must be between 50 and 250 cm.",
      ageOutOfRange: "Age must be between 1 and 120 years.",
    },
    faq: [
      {
        q: "What is BMR?",
        a: "Basal Metabolic Rate (BMR) is the number of calories your body burns at complete rest to maintain essential functions such as breathing, circulation, cell production, and temperature regulation.",
      },
      {
        q: "Which BMR formula is more accurate?",
        a: "The Mifflin-St Jeor equation (1990) is generally considered more accurate for most modern populations and is endorsed by the Academy of Nutrition and Dietetics. The Harris-Benedict revised formula (1984) is slightly less precise but still widely used.",
      },
      {
        q: "How is BMR different from TDEE?",
        a: "BMR is the calories needed at complete rest. Total Daily Energy Expenditure (TDEE) multiplies BMR by an activity factor to account for physical activity. Use our Calorie calculator to compute your TDEE.",
      },
      {
        q: "Does BMR decrease with age?",
        a: "Yes. BMR typically declines by about 1–2% per decade from age 20, partly because muscle mass decreases with age. Resistance training can help slow this decline.",
      },
      {
        q: "Can I eat fewer calories than my BMR?",
        a: "Eating significantly below your BMR for extended periods can cause muscle loss, hormonal disruption, and nutrient deficiencies. Always consult a healthcare professional before attempting very-low-calorie diets.",
      },
    ],
  },
  pt: {
    title: "BMR Calculator",
    short: "Calculate your Basal Metabolic Rate — the calories your body burns at rest.",
    description:
      "Free BMR calculator using Mifflin-St Jeor and Harris-Benedict formulas. Find out how many calories your body needs at complete rest to maintain vital functions.",
    keywords: [
      "BMR calculator",
      "basal metabolic rate",
      "resting metabolic rate",
      "calories at rest",
      "Mifflin St Jeor",
      "Harris Benedict",
      "metabolism calculator",
    ],
    inputs: {
      formula: {
        label: "Formula",
        help: "Mifflin-St Jeor (1990) is recommended by most dietitians. Harris-Benedict (1984 revision) is an older alternative.",
      },
      gender: {
        label: "Biological sex",
        help: "Sex affects BMR due to differences in muscle mass and hormones.",
      },
      weight: {
        label: "Weight",
        help: "Your current body weight in kilograms.",
      },
      height: {
        label: "Height",
        help: "Your height in centimetres.",
      },
      age: {
        label: "Age",
        help: "Your age in years. BMR decreases roughly 2% per decade after age 20.",
      },
    },
    outputs: {
      bmr: {
        label: "BMR",
        help: "Basal Metabolic Rate — calories burned per day at complete rest.",
        suffix: "kcal/day",
      },
    },
    options: {
      formula: {
        mifflin: "Mifflin-St Jeor (recommended)",
        harris: "Harris-Benedict (revised 1984)",
      },
      gender: {
        male: "Male",
        female: "Female",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 300 kg.",
      heightOutOfRange: "Height must be between 50 and 250 cm.",
      ageOutOfRange: "Age must be between 1 and 120 years.",
    },
    faq: [
      {
        q: "What is BMR?",
        a: "Basal Metabolic Rate (BMR) is the number of calories your body burns at complete rest to maintain essential functions such as breathing, circulation, cell production, and temperature regulation.",
      },
      {
        q: "Which BMR formula is more accurate?",
        a: "The Mifflin-St Jeor equation (1990) is generally considered more accurate for most modern populations and is endorsed by the Academy of Nutrition and Dietetics. The Harris-Benedict revised formula (1984) is slightly less precise but still widely used.",
      },
      {
        q: "How is BMR different from TDEE?",
        a: "BMR is the calories needed at complete rest. Total Daily Energy Expenditure (TDEE) multiplies BMR by an activity factor to account for physical activity. Use our Calorie calculator to compute your TDEE.",
      },
      {
        q: "Does BMR decrease with age?",
        a: "Yes. BMR typically declines by about 1–2% per decade from age 20, partly because muscle mass decreases with age. Resistance training can help slow this decline.",
      },
      {
        q: "Can I eat fewer calories than my BMR?",
        a: "Eating significantly below your BMR for extended periods can cause muscle loss, hormonal disruption, and nutrient deficiencies. Always consult a healthcare professional before attempting very-low-calorie diets.",
      },
    ],
  },
  id: {
    title: "BMR Calculator",
    short: "Calculate your Basal Metabolic Rate — the calories your body burns at rest.",
    description:
      "Free BMR calculator using Mifflin-St Jeor and Harris-Benedict formulas. Find out how many calories your body needs at complete rest to maintain vital functions.",
    keywords: [
      "BMR calculator",
      "basal metabolic rate",
      "resting metabolic rate",
      "calories at rest",
      "Mifflin St Jeor",
      "Harris Benedict",
      "metabolism calculator",
    ],
    inputs: {
      formula: {
        label: "Formula",
        help: "Mifflin-St Jeor (1990) is recommended by most dietitians. Harris-Benedict (1984 revision) is an older alternative.",
      },
      gender: {
        label: "Biological sex",
        help: "Sex affects BMR due to differences in muscle mass and hormones.",
      },
      weight: {
        label: "Weight",
        help: "Your current body weight in kilograms.",
      },
      height: {
        label: "Height",
        help: "Your height in centimetres.",
      },
      age: {
        label: "Age",
        help: "Your age in years. BMR decreases roughly 2% per decade after age 20.",
      },
    },
    outputs: {
      bmr: {
        label: "BMR",
        help: "Basal Metabolic Rate — calories burned per day at complete rest.",
        suffix: "kcal/day",
      },
    },
    options: {
      formula: {
        mifflin: "Mifflin-St Jeor (recommended)",
        harris: "Harris-Benedict (revised 1984)",
      },
      gender: {
        male: "Male",
        female: "Female",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 300 kg.",
      heightOutOfRange: "Height must be between 50 and 250 cm.",
      ageOutOfRange: "Age must be between 1 and 120 years.",
    },
    faq: [
      {
        q: "What is BMR?",
        a: "Basal Metabolic Rate (BMR) is the number of calories your body burns at complete rest to maintain essential functions such as breathing, circulation, cell production, and temperature regulation.",
      },
      {
        q: "Which BMR formula is more accurate?",
        a: "The Mifflin-St Jeor equation (1990) is generally considered more accurate for most modern populations and is endorsed by the Academy of Nutrition and Dietetics. The Harris-Benedict revised formula (1984) is slightly less precise but still widely used.",
      },
      {
        q: "How is BMR different from TDEE?",
        a: "BMR is the calories needed at complete rest. Total Daily Energy Expenditure (TDEE) multiplies BMR by an activity factor to account for physical activity. Use our Calorie calculator to compute your TDEE.",
      },
      {
        q: "Does BMR decrease with age?",
        a: "Yes. BMR typically declines by about 1–2% per decade from age 20, partly because muscle mass decreases with age. Resistance training can help slow this decline.",
      },
      {
        q: "Can I eat fewer calories than my BMR?",
        a: "Eating significantly below your BMR for extended periods can cause muscle loss, hormonal disruption, and nutrient deficiencies. Always consult a healthcare professional before attempting very-low-calorie diets.",
      },
    ],
  },


  tr: {
    title: "BMR Hesaplayıcı",
    short: "Bazal Metabolizma Hızınızı hesaplayın — vücudunuzun dinlenirken yaktığı kalori.",
    description:
      "Mifflin-St Jeor ve Harris-Benedict formüllerini kullanan ücretsiz BMR hesaplayıcı. Vücudunuzun yaşamsal fonksiyonlarını sürdürmek için ihtiyaç duyduğu kaloriyi öğrenin.",
    keywords: [
      "BMR hesaplayıcı",
      "bazal metabolizma hızı",
      "dinlenme metabolizması",
      "Mifflin St Jeor",
      "Harris Benedict",
      "metabolizma hesaplama",
      "günlük kalori ihtiyacı",
    ],
    inputs: {
      formula: {
        label: "Formül",
        help: "Mifflin-St Jeor (1990) diyetisyenlerin çoğu tarafından önerilen formüldür. Harris-Benedict (1984 revizyonu) daha eski bir alternatiftir.",
      },
      gender: {
        label: "Biyolojik cinsiyet",
        help: "Cinsiyet, kas kütlesi ve hormonal farklılıklar nedeniyle BMR'yi etkiler.",
      },
      weight: {
        label: "Kilo",
        help: "Mevcut vücut ağırlığınız (kg cinsinden).",
      },
      height: {
        label: "Boy",
        help: "Boyunuz santimetre cinsinden.",
      },
      age: {
        label: "Yaş",
        help: "Yaşınız yıl cinsinden. BMR, 20 yaşından sonra her 10 yılda yaklaşık %2 azalır.",
      },
    },
    outputs: {
      bmr: {
        label: "BMR",
        help: "Bazal Metabolizma Hızı — tam dinlenme halinde günde yakılan kalori.",
        suffix: "kcal/gün",
      },
    },
    options: {
      formula: {
        mifflin: "Mifflin-St Jeor (önerilen)",
        harris: "Harris-Benedict (1984 revizyonu)",
      },
      gender: {
        male: "Erkek",
        female: "Kadın",
      },
    },
    errors: {
      weightOutOfRange: "Kilo 1 ile 300 kg arasında olmalıdır.",
      heightOutOfRange: "Boy 50 ile 250 cm arasında olmalıdır.",
      ageOutOfRange: "Yaş 1 ile 120 yıl arasında olmalıdır.",
    },
    faq: [
      {
        q: "BMR nedir?",
        a: "Bazal Metabolizma Hızı (BMR), vücudunuzun tam dinlenme halinde solunum, dolaşım, hücre üretimi ve ısı düzenlemesi gibi temel işlevleri sürdürmek için yaktığı kalori miktarıdır.",
      },
      {
        q: "Hangi BMR formülü daha doğrudur?",
        a: "Mifflin-St Jeor denklemi (1990), günümüz popülasyonları için genellikle daha doğru kabul edilmektedir. Academy of Nutrition and Dietetics tarafından da önerilmektedir.",
      },
      {
        q: "BMR yaşla birlikte azalır mı?",
        a: "Evet. BMR, 20 yaşından itibaren her 10 yılda yaklaşık %1-2 oranında düşer; bunun başlıca nedeni kas kütlesinin azalmasıdır. Direnç egzersizleri bu düşüşü yavaşlatmaya yardımcı olabilir.",
      },
    ],
  },

  de: {
    title: "BMR-Rechner",
    short: "Berechnen Sie Ihren Grundumsatz — die Kalorien, die Ihr Körper in Ruhe verbraucht.",
    description:
      "Kostenloser BMR-Rechner mit Mifflin-St-Jeor- und Harris-Benedict-Formel. Erfahren Sie, wie viele Kalorien Ihr Körper in völliger Ruhe benötigt, um lebenswichtige Funktionen aufrechtzuerhalten.",
    keywords: [
      "BMR-Rechner",
      "Grundumsatz",
      "Ruheumsatz",
      "Mifflin St Jeor",
      "Harris Benedict",
      "Kalorienrechner",
      "Metabolismus",
    ],
    inputs: {
      formula: {
        label: "Formel",
        help: "Mifflin-St Jeor (1990) wird von den meisten Ernährungsberatern empfohlen. Harris-Benedict (Revision 1984) ist eine ältere Alternative.",
      },
      gender: {
        label: "Biologisches Geschlecht",
        help: "Das Geschlecht beeinflusst den BMR durch Unterschiede in Muskelmasse und Hormonen.",
      },
      weight: {
        label: "Gewicht",
        help: "Ihr aktuelles Körpergewicht in Kilogramm.",
      },
      height: {
        label: "Größe",
        help: "Ihre Körpergröße in Zentimetern.",
      },
      age: {
        label: "Alter",
        help: "Ihr Alter in Jahren. Der BMR sinkt nach dem 20. Lebensjahr um etwa 2 % pro Jahrzehnt.",
      },
    },
    outputs: {
      bmr: {
        label: "Grundumsatz (BMR)",
        help: "Kalorien, die pro Tag in vollständiger Ruhe verbrannt werden.",
        suffix: "kcal/Tag",
      },
    },
    options: {
      formula: {
        mifflin: "Mifflin-St Jeor (empfohlen)",
        harris: "Harris-Benedict (Revision 1984)",
      },
      gender: {
        male: "Männlich",
        female: "Weiblich",
      },
    },
    errors: {
      weightOutOfRange: "Das Gewicht muss zwischen 1 und 300 kg liegen.",
      heightOutOfRange: "Die Körpergröße muss zwischen 50 und 250 cm liegen.",
      ageOutOfRange: "Das Alter muss zwischen 1 und 120 Jahren liegen.",
    },
    faq: [
      {
        q: "Was ist der BMR?",
        a: "Der Grundumsatz (BMR) gibt an, wie viele Kalorien der Körper in vollständiger Ruhe verbraucht, um lebenswichtige Funktionen wie Atmung, Kreislauf und Zellregeneration aufrechtzuerhalten.",
      },
      {
        q: "Welche Formel ist genauer?",
        a: "Die Mifflin-St-Jeor-Gleichung (1990) gilt für die meisten modernen Bevölkerungsgruppen als genauer und wird von der Academy of Nutrition and Dietetics empfohlen.",
      },
      {
        q: "Nimmt der BMR mit dem Alter ab?",
        a: "Ja. Ab dem 20. Lebensjahr sinkt der BMR pro Jahrzehnt um etwa 1–2 %, hauptsächlich wegen des Abbaus von Muskelmasse. Krafttraining kann diesen Rückgang verlangsamen.",
      },
    ],
  },

  fr: {
    title: "Calculateur du Métabolisme de Base",
    short: "Calculez votre métabolisme de base (BMR) — les calories brûlées au repos.",
    description:
      "Calculateur BMR gratuit utilisant les formules Mifflin-St Jeor et Harris-Benedict. Découvrez combien de calories votre corps dépense au repos pour maintenir ses fonctions vitales.",
    keywords: [
      "calculateur BMR",
      "métabolisme de base",
      "dépense énergétique au repos",
      "Mifflin St Jeor",
      "Harris Benedict",
      "calories au repos",
      "calcul métabolisme",
    ],
    inputs: {
      formula: {
        label: "Formule",
        help: "Mifflin-St Jeor (1990) est recommandée par la plupart des diététiciens. Harris-Benedict (révision 1984) est une alternative plus ancienne.",
      },
      gender: {
        label: "Sexe biologique",
        help: "Le sexe influence le BMR en raison des différences de masse musculaire et d'hormones.",
      },
      weight: {
        label: "Poids",
        help: "Votre poids corporel actuel en kilogrammes.",
      },
      height: {
        label: "Taille",
        help: "Votre taille en centimètres.",
      },
      age: {
        label: "Âge",
        help: "Votre âge en années. Le BMR diminue d'environ 2 % par décennie après 20 ans.",
      },
    },
    outputs: {
      bmr: {
        label: "Métabolisme de base (BMR)",
        help: "Calories brûlées par jour en repos complet.",
        suffix: "kcal/jour",
      },
    },
    options: {
      formula: {
        mifflin: "Mifflin-St Jeor (recommandée)",
        harris: "Harris-Benedict (révision 1984)",
      },
      gender: {
        male: "Homme",
        female: "Femme",
      },
    },
    errors: {
      weightOutOfRange: "Le poids doit être compris entre 1 et 300 kg.",
      heightOutOfRange: "La taille doit être comprise entre 50 et 250 cm.",
      ageOutOfRange: "L'âge doit être compris entre 1 et 120 ans.",
    },
    faq: [
      {
        q: "Qu'est-ce que le BMR ?",
        a: "Le métabolisme de base (BMR) correspond au nombre de calories que le corps brûle au repos complet pour maintenir ses fonctions essentielles : respiration, circulation, production cellulaire et régulation de la température.",
      },
      {
        q: "Quelle formule est la plus précise ?",
        a: "L'équation de Mifflin-St Jeor (1990) est généralement considérée comme plus précise pour les populations modernes et est recommandée par l'Academy of Nutrition and Dietetics.",
      },
      {
        q: "Le BMR diminue-t-il avec l'âge ?",
        a: "Oui. Le BMR baisse d'environ 1 à 2 % par décennie à partir de 20 ans, principalement en raison de la perte de masse musculaire. L'entraînement en résistance peut ralentir ce déclin.",
      },
    ],
  },

  es: {
    title: "Calculadora de TMB",
    short: "Calcula tu Tasa Metabólica Basal — las calorías que tu cuerpo quema en reposo.",
    description:
      "Calculadora de TMB gratuita con las fórmulas Mifflin-St Jeor y Harris-Benedict. Descubre cuántas calorías necesita tu cuerpo en reposo completo para mantener sus funciones vitales.",
    keywords: [
      "calculadora TMB",
      "tasa metabólica basal",
      "metabolismo basal",
      "Mifflin St Jeor",
      "Harris Benedict",
      "calorías en reposo",
      "cálculo metabolismo",
    ],
    inputs: {
      formula: {
        label: "Fórmula",
        help: "Mifflin-St Jeor (1990) es la recomendada por la mayoría de dietistas. Harris-Benedict (revisión 1984) es una alternativa más antigua.",
      },
      gender: {
        label: "Sexo biológico",
        help: "El sexo influye en la TMB por las diferencias de masa muscular y hormonas.",
      },
      weight: {
        label: "Peso",
        help: "Tu peso corporal actual en kilogramos.",
      },
      height: {
        label: "Altura",
        help: "Tu altura en centímetros.",
      },
      age: {
        label: "Edad",
        help: "Tu edad en años. La TMB disminuye aproximadamente un 2% por década después de los 20.",
      },
    },
    outputs: {
      bmr: {
        label: "TMB (Tasa Metabólica Basal)",
        help: "Calorías quemadas por día en reposo completo.",
        suffix: "kcal/día",
      },
    },
    options: {
      formula: {
        mifflin: "Mifflin-St Jeor (recomendada)",
        harris: "Harris-Benedict (revisión 1984)",
      },
      gender: {
        male: "Hombre",
        female: "Mujer",
      },
    },
    errors: {
      weightOutOfRange: "El peso debe estar entre 1 y 300 kg.",
      heightOutOfRange: "La altura debe estar entre 50 y 250 cm.",
      ageOutOfRange: "La edad debe estar entre 1 y 120 años.",
    },
    faq: [
      {
        q: "¿Qué es la TMB?",
        a: "La Tasa Metabólica Basal (TMB) es el número de calorías que el cuerpo quema en reposo completo para mantener funciones esenciales como respiración, circulación, producción celular y regulación de temperatura.",
      },
      {
        q: "¿Qué fórmula es más precisa?",
        a: "La ecuación Mifflin-St Jeor (1990) es generalmente más precisa para las poblaciones modernas y está respaldada por la Academia de Nutrición y Dietética.",
      },
      {
        q: "¿Disminuye la TMB con la edad?",
        a: "Sí. La TMB desciende aproximadamente un 1-2% por década desde los 20 años, principalmente por la pérdida de masa muscular. El entrenamiento de fuerza puede ralentizar este descenso.",
      },
    ],
  },

  it: {
    title: "Calcolatore del Metabolismo Basale",
    short: "Calcola il tuo metabolismo basale (BMR) — le calorie bruciate a riposo.",
    description:
      "Calcolatore BMR gratuito con le formule Mifflin-St Jeor e Harris-Benedict. Scopri quante calorie il tuo corpo consuma a riposo per mantenere le funzioni vitali.",
    keywords: [
      "calcolatore BMR",
      "metabolismo basale",
      "dispendio energetico a riposo",
      "Mifflin St Jeor",
      "Harris Benedict",
      "calorie a riposo",
      "calcolo metabolismo",
    ],
    inputs: {
      formula: {
        label: "Formula",
        help: "Mifflin-St Jeor (1990) è raccomandata dalla maggior parte dei dietologi. Harris-Benedict (revisione 1984) è un'alternativa più datata.",
      },
      gender: {
        label: "Sesso biologico",
        help: "Il sesso influenza il BMR a causa delle differenze nella massa muscolare e negli ormoni.",
      },
      weight: {
        label: "Peso",
        help: "Il tuo peso corporeo attuale in chilogrammi.",
      },
      height: {
        label: "Altezza",
        help: "La tua altezza in centimetri.",
      },
      age: {
        label: "Età",
        help: "La tua età in anni. Il BMR diminuisce di circa il 2% per decennio dopo i 20 anni.",
      },
    },
    outputs: {
      bmr: {
        label: "Metabolismo basale (BMR)",
        help: "Calorie bruciate al giorno in completo riposo.",
        suffix: "kcal/giorno",
      },
    },
    options: {
      formula: {
        mifflin: "Mifflin-St Jeor (consigliata)",
        harris: "Harris-Benedict (revisione 1984)",
      },
      gender: {
        male: "Maschio",
        female: "Femmina",
      },
    },
    errors: {
      weightOutOfRange: "Il peso deve essere compreso tra 1 e 300 kg.",
      heightOutOfRange: "L'altezza deve essere compresa tra 50 e 250 cm.",
      ageOutOfRange: "L'età deve essere compresa tra 1 e 120 anni.",
    },
    faq: [
      {
        q: "Che cos'è il BMR?",
        a: "Il metabolismo basale (BMR) è il numero di calorie che il corpo brucia a riposo completo per mantenere funzioni essenziali come respirazione, circolazione, produzione cellulare e regolazione della temperatura.",
      },
      {
        q: "Quale formula è più precisa?",
        a: "L'equazione di Mifflin-St Jeor (1990) è generalmente considerata più accurata per le popolazioni moderne ed è raccomandata dall'Academy of Nutrition and Dietetics.",
      },
      {
        q: "Il BMR diminuisce con l'età?",
        a: "Sì. Il BMR diminuisce di circa l'1-2% per decennio dopo i 20 anni, principalmente a causa della perdita di massa muscolare. L'allenamento con i pesi può rallentare questo calo.",
      },
    ],
  },

  ar: {
    title: "حاسبة معدل الأيض الأساسي",
    short: "احسب معدل الأيض الأساسي لجسمك — السعرات التي يحرقها جسمك أثناء الراحة.",
    description:
      "حاسبة معدل الأيض الأساسي المجانية باستخدام معادلتَي ميفلين-سانت جيور وهاريس-بنيديكت. اعرف عدد السعرات الحرارية التي يحتاجها جسمك في حالة الراحة التامة للحفاظ على وظائفه الحيوية.",
    keywords: [
      "حاسبة معدل الأيض",
      "معدل الأيض الأساسي",
      "السعرات الحرارية في الراحة",
      "ميفلين سانت جيور",
      "هاريس بنيديكت",
      "حساب الطاقة",
      "الاستقلاب الأساسي",
    ],
    inputs: {
      formula: {
        label: "المعادلة",
        help: "يوصي معظم أخصائيي التغذية بمعادلة ميفلين-سانت جيور (1990). ومعادلة هاريس-بنيديكت (مراجعة 1984) بديل أقدم.",
      },
      gender: {
        label: "الجنس البيولوجي",
        help: "يؤثر الجنس في معدل الأيض الأساسي بسبب الفوارق في الكتلة العضلية والهرمونات.",
      },
      weight: {
        label: "الوزن",
        help: "وزن جسمك الحالي بالكيلوغرام.",
      },
      height: {
        label: "الطول",
        help: "طولك بالسنتيمتر.",
      },
      age: {
        label: "العمر",
        help: "عمرك بالسنوات. يتراجع معدل الأيض الأساسي بنحو 2% كل عقد بعد سن العشرين.",
      },
    },
    outputs: {
      bmr: {
        label: "معدل الأيض الأساسي",
        help: "السعرات الحرارية المحروقة يومياً في حالة الراحة التامة.",
        suffix: "سعرة/يوم",
      },
    },
    options: {
      formula: {
        mifflin: "ميفلين-سانت جيور (موصى به)",
        harris: "هاريس-بنيديكت (مراجعة 1984)",
      },
      gender: {
        male: "ذكر",
        female: "أنثى",
      },
    },
    errors: {
      weightOutOfRange: "يجب أن يكون الوزن بين 1 و300 كيلوغرام.",
      heightOutOfRange: "يجب أن يكون الطول بين 50 و250 سنتيمتر.",
      ageOutOfRange: "يجب أن يكون العمر بين 1 و120 سنة.",
    },
    faq: [
      {
        q: "ما معدل الأيض الأساسي؟",
        a: "معدل الأيض الأساسي هو عدد السعرات الحرارية التي يحرقها الجسم في حالة الراحة التامة للحفاظ على الوظائف الأساسية كالتنفس والدورة الدموية وتجديد الخلايا وتنظيم الحرارة.",
      },
      {
        q: "أيّ معادلة أكثر دقة؟",
        a: "تُعدّ معادلة ميفلين-سانت جيور (1990) الأدق عموماً للمجتمعات الحديثة، وتوصي بها أكاديمية التغذية والديتيتيك.",
      },
      {
        q: "هل يتراجع معدل الأيض الأساسي مع التقدم في السن؟",
        a: "نعم. يتراجع معدل الأيض الأساسي بنحو 1-2% كل عقد بعد سن العشرين، بسبب فقدان الكتلة العضلية. ويساعد تدريب المقاومة على إبطاء هذا التراجع.",
      },
    ],
  },

  ru: {
    title: "Калькулятор основного обмена",
    short: "Рассчитайте ваш базальный метаболизм (BMR) — калории, которые сжигает тело в покое.",
    description:
      "Бесплатный калькулятор BMR по формулам Миффлина-Сан-Жеора и Харриса-Бенедикта. Узнайте, сколько калорий нужно вашему организму в состоянии полного покоя для поддержания жизненно важных функций.",
    keywords: [
      "калькулятор BMR",
      "основной обмен веществ",
      "базальный метаболизм",
      "Миффлин Сан-Жеор",
      "Харрис Бенедикт",
      "калории в покое",
      "расчёт метаболизма",
    ],
    inputs: {
      formula: {
        label: "Формула",
        help: "Формула Миффлина-Сан-Жеора (1990) рекомендована большинством диетологов. Формула Харриса-Бенедикта (редакция 1984 г.) — более старая альтернатива.",
      },
      gender: {
        label: "Биологический пол",
        help: "Пол влияет на BMR из-за различий в мышечной массе и гормональном фоне.",
      },
      weight: {
        label: "Масса тела",
        help: "Ваш текущий вес в килограммах.",
      },
      height: {
        label: "Рост",
        help: "Ваш рост в сантиметрах.",
      },
      age: {
        label: "Возраст",
        help: "Ваш возраст в годах. После 20 лет BMR снижается примерно на 2% каждое десятилетие.",
      },
    },
    outputs: {
      bmr: {
        label: "Основной обмен (BMR)",
        help: "Калории, сжигаемые в день в состоянии полного покоя.",
        suffix: "ккал/день",
      },
    },
    options: {
      formula: {
        mifflin: "Миффлин-Сан-Жеор (рекомендуется)",
        harris: "Харрис-Бенедикт (редакция 1984)",
      },
      gender: {
        male: "Мужской",
        female: "Женский",
      },
    },
    errors: {
      weightOutOfRange: "Вес должен быть от 1 до 300 кг.",
      heightOutOfRange: "Рост должен быть от 50 до 250 см.",
      ageOutOfRange: "Возраст должен быть от 1 до 120 лет.",
    },
    faq: [
      {
        q: "Что такое BMR?",
        a: "Базальный метаболизм (BMR) — это количество калорий, которое организм сжигает в состоянии полного покоя для поддержания жизнеобеспечивающих функций: дыхания, кровообращения, клеточного обновления и терморегуляции.",
      },
      {
        q: "Какая формула точнее?",
        a: "Уравнение Миффлина-Сан-Жеора (1990) считается более точным для современных популяций и рекомендовано Академией питания и диетологии.",
      },
      {
        q: "Снижается ли BMR с возрастом?",
        a: "Да. Начиная с 20 лет BMR снижается примерно на 1–2% за каждое десятилетие, главным образом из-за уменьшения мышечной массы. Силовые тренировки помогают замедлить этот процесс.",
      },
    ],
  },

  zh: {
    title: "基础代谢率计算器",
    short: "计算您的基础代谢率（BMR）——身体静息时燃烧的卡路里。",
    description:
      "免费BMR计算器，采用Mifflin-St Jeor和Harris-Benedict公式。了解您的身体在完全休息状态下维持生命功能所需的卡路里数量。",
    keywords: [
      "BMR计算器",
      "基础代谢率",
      "静息代谢",
      "Mifflin St Jeor",
      "Harris Benedict",
      "卡路里计算",
      "新陈代谢",
    ],
    inputs: {
      formula: {
        label: "计算公式",
        help: "大多数营养师推荐Mifflin-St Jeor公式（1990年）。Harris-Benedict（1984年修订版）是较早的替代方案。",
      },
      gender: {
        label: "生理性别",
        help: "性别因肌肉量和激素差异而影响BMR。",
      },
      weight: {
        label: "体重",
        help: "您当前的体重（千克）。",
      },
      height: {
        label: "身高",
        help: "您的身高（厘米）。",
      },
      age: {
        label: "年龄",
        help: "您的年龄（岁）。20岁后，BMR每十年下降约2%。",
      },
    },
    outputs: {
      bmr: {
        label: "基础代谢率（BMR）",
        help: "完全休息状态下每日燃烧的卡路里。",
        suffix: "千卡/天",
      },
    },
    options: {
      formula: {
        mifflin: "Mifflin-St Jeor（推荐）",
        harris: "Harris-Benedict（1984年修订版）",
      },
      gender: {
        male: "男性",
        female: "女性",
      },
    },
    errors: {
      weightOutOfRange: "体重必须在1至300千克之间。",
      heightOutOfRange: "身高必须在50至250厘米之间。",
      ageOutOfRange: "年龄必须在1至120岁之间。",
    },
    faq: [
      {
        q: "什么是BMR？",
        a: "基础代谢率（BMR）是身体在完全休息状态下维持呼吸、循环、细胞再生和体温调节等基本功能所需燃烧的卡路里数量。",
      },
      {
        q: "BMR会随年龄下降吗？",
        a: "会。20岁后，BMR每十年下降约1-2%，主要原因是肌肉量减少。力量训练有助于减缓这一下降趋势。",
      },
    ],
  },

  ja: {
    title: "基礎代謝量計算機",
    short: "基礎代謝量（BMR）を計算しましょう — 安静時に体が消費するカロリー。",
    description:
      "ミフリン・セントジョー式とハリス・ベネディクト式を使用した無料BMR計算機。体が完全な安静状態で生命維持に必要とするカロリーを算出します。",
    keywords: [
      "基礎代謝量計算機",
      "BMR計算",
      "安静時代謝",
      "ミフリン式",
      "ハリスベネディクト",
      "カロリー計算",
      "代謝計算",
    ],
    inputs: {
      formula: {
        label: "計算式",
        help: "ミフリン・セントジョー式（1990年）は多くの栄養士に推奨されています。ハリス・ベネディクト式（1984年改訂版）はやや古い代替手法です。",
      },
      gender: {
        label: "生物学的性別",
        help: "筋肉量やホルモンの違いにより、性別はBMRに影響します。",
      },
      weight: {
        label: "体重",
        help: "現在の体重（キログラム）を入力してください。",
      },
      height: {
        label: "身長",
        help: "身長（センチメートル）を入力してください。",
      },
      age: {
        label: "年齢",
        help: "年齢（歳）を入力してください。BMRは20歳以降、10年ごとに約2%低下します。",
      },
    },
    outputs: {
      bmr: {
        label: "基礎代謝量（BMR）",
        help: "完全な安静状態で1日に消費するカロリー。",
        suffix: "kcal/日",
      },
    },
    options: {
      formula: {
        mifflin: "ミフリン・セントジョー式（推奨）",
        harris: "ハリス・ベネディクト式（1984年改訂版）",
      },
      gender: {
        male: "男性",
        female: "女性",
      },
    },
    errors: {
      weightOutOfRange: "体重は1〜300 kgの範囲で入力してください。",
      heightOutOfRange: "身長は50〜250 cmの範囲で入力してください。",
      ageOutOfRange: "年齢は1〜120歳の範囲で入力してください。",
    },
    faq: [
      {
        q: "BMRとは何ですか？",
        a: "基礎代謝量（BMR）とは、呼吸・循環・細胞生成・体温調節など生命維持に必要な機能を維持するために、完全な安静状態で体が1日に消費するカロリーのことです。",
      },
      {
        q: "BMRは年齢とともに低下しますか？",
        a: "はい。20歳以降、BMRは10年ごとに約1〜2%低下します。これは主に筋肉量の減少によるものです。筋力トレーニングでこの低下を緩やかにすることができます。",
      },
    ],
  },

  ko: {
    title: "기초대사량 계산기",
    short: "기초대사량(BMR)을 계산하세요 — 안정 시 신체가 소모하는 칼로리.",
    description:
      "Mifflin-St Jeor 및 Harris-Benedict 공식을 사용한 무료 BMR 계산기. 신체가 완전한 안정 상태에서 생명 유지에 필요한 칼로리를 알아보세요.",
    keywords: [
      "기초대사량 계산기",
      "BMR 계산",
      "안정 시 대사",
      "Mifflin St Jeor",
      "Harris Benedict",
      "칼로리 계산",
      "대사량 계산",
    ],
    inputs: {
      formula: {
        label: "공식",
        help: "대부분의 영양사들이 Mifflin-St Jeor(1990) 공식을 권장합니다. Harris-Benedict(1984년 개정판)는 오래된 대안입니다.",
      },
      gender: {
        label: "생물학적 성별",
        help: "근육량과 호르몬 차이로 인해 성별이 BMR에 영향을 미칩니다.",
      },
      weight: {
        label: "체중",
        help: "현재 체중(킬로그램)을 입력하세요.",
      },
      height: {
        label: "키",
        help: "키(센티미터)를 입력하세요.",
      },
      age: {
        label: "나이",
        help: "나이(세)를 입력하세요. BMR은 20세 이후 10년마다 약 2% 감소합니다.",
      },
    },
    outputs: {
      bmr: {
        label: "기초대사량(BMR)",
        help: "완전한 안정 상태에서 하루 소모하는 칼로리.",
        suffix: "kcal/일",
      },
    },
    options: {
      formula: {
        mifflin: "Mifflin-St Jeor(권장)",
        harris: "Harris-Benedict(1984년 개정판)",
      },
      gender: {
        male: "남성",
        female: "여성",
      },
    },
    errors: {
      weightOutOfRange: "체중은 1~300 kg 범위여야 합니다.",
      heightOutOfRange: "키는 50~250 cm 범위여야 합니다.",
      ageOutOfRange: "나이는 1~120세 범위여야 합니다.",
    },
    faq: [
      {
        q: "BMR이란 무엇인가요?",
        a: "기초대사량(BMR)은 호흡, 순환, 세포 생성, 체온 조절 등 필수 생명 유지 기능을 위해 완전한 안정 상태에서 신체가 하루에 소모하는 칼로리입니다.",
      },
      {
        q: "BMR은 나이에 따라 감소하나요?",
        a: "네. BMR은 20세 이후 10년마다 약 1~2% 감소하며, 이는 주로 근육량 감소 때문입니다. 근력 운동으로 이 감소를 늦출 수 있습니다.",
      },
    ],
  },

  hi: {
    title: "बीएमआर कैलकुलेटर",
    short: "अपना बेसल मेटाबॉलिक रेट (BMR) जानें — आराम की स्थिति में शरीर कितनी कैलोरी जलाता है।",
    description:
      "Mifflin-St Jeor और Harris-Benedict फ़ॉर्मूले का उपयोग करने वाला मुफ़्त BMR कैलकुलेटर। जानें कि पूर्ण आराम की स्थिति में आपके शरीर को महत्वपूर्ण कार्यों के लिए कितनी कैलोरी चाहिए।",
    keywords: [
      "BMR कैलकुलेटर",
      "बेसल मेटाबॉलिक रेट",
      "आराम में कैलोरी",
      "Mifflin St Jeor",
      "Harris Benedict",
      "चयापचय दर",
      "कैलोरी गणना",
    ],
    inputs: {
      formula: {
        label: "फ़ॉर्मूला",
        help: "अधिकांश पोषण विशेषज्ञ Mifflin-St Jeor (1990) फ़ॉर्मूले की सलाह देते हैं। Harris-Benedict (1984 संशोधन) एक पुराना विकल्प है।",
      },
      gender: {
        label: "जैविक लिंग",
        help: "मांसपेशियों और हार्मोन के अंतर के कारण लिंग BMR को प्रभावित करता है।",
      },
      weight: {
        label: "वज़न",
        help: "आपका वर्तमान शारीरिक वज़न किलोग्राम में।",
      },
      height: {
        label: "लंबाई",
        help: "आपकी लंबाई सेंटीमीटर में।",
      },
      age: {
        label: "आयु",
        help: "आपकी आयु वर्षों में। 20 वर्ष के बाद BMR प्रत्येक दशक में लगभग 2% कम होता है।",
      },
    },
    outputs: {
      bmr: {
        label: "बेसल मेटाबॉलिक रेट (BMR)",
        help: "पूर्ण आराम की स्थिति में प्रतिदिन जलाई जाने वाली कैलोरी।",
        suffix: "kcal/दिन",
      },
    },
    options: {
      formula: {
        mifflin: "Mifflin-St Jeor (अनुशंसित)",
        harris: "Harris-Benedict (1984 संशोधन)",
      },
      gender: {
        male: "पुरुष",
        female: "महिला",
      },
    },
    errors: {
      weightOutOfRange: "वज़न 1 से 300 kg के बीच होना चाहिए।",
      heightOutOfRange: "लंबाई 50 से 250 cm के बीच होनी चाहिए।",
      ageOutOfRange: "आयु 1 से 120 वर्ष के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "BMR क्या है?",
        a: "बेसल मेटाबॉलिक रेट (BMR) वह कैलोरी है जो आपका शरीर पूर्ण आराम की स्थिति में सांस लेने, रक्त संचार, कोशिका उत्पादन और तापमान नियंत्रण जैसी आवश्यक क्रियाओं के लिए जलाता है।",
      },
      {
        q: "क्या BMR उम्र के साथ कम होता है?",
        a: "हाँ। 20 वर्ष की आयु के बाद BMR हर दशक में लगभग 1-2% कम हो जाता है, मुख्यतः मांसपेशियों की कमी के कारण। प्रतिरोध प्रशिक्षण इस गिरावट को धीमा कर सकता है।",
      },
      {
        q: "कौन सा फ़ॉर्मूला अधिक सटीक है?",
        a: "Mifflin-St Jeor समीकरण (1990) आधुनिक जनसंख्या के लिए अधिक सटीक माना जाता है और Academy of Nutrition and Dietetics द्वारा अनुशंसित है।",
      },
    ],
  },
};

export default i18n;
