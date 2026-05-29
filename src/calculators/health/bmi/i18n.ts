import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "BMI Calculator",
    short: "Calculate your Body Mass Index and find your healthy weight range.",
    description:
      "Free BMI calculator based on WHO guidelines. Enter your height and weight to get your BMI, category, and ideal weight range.",
    keywords: [
      "BMI calculator",
      "body mass index",
      "healthy weight",
      "BMI chart",
      "weight calculator",
      "obesity calculator",
      "ideal weight",
    ],
    inputs: {
      unit: {
        label: "Unit system",
        help: "Choose between metric (kg/cm) or imperial (lb/in) units.",
      },
      weight: {
        label: "Weight",
        help: "Your current body weight.",
      },
      height: {
        label: "Height",
        help: "Your height in centimeters (metric) or inches (imperial).",
      },
    },
    outputs: {
      bmi: {
        label: "BMI",
        help: "Body Mass Index — your weight divided by height squared.",
      },
      category: {
        label: "Category",
        help: "WHO weight classification for your BMI value.",
      },
      healthyMinWeight: {
        label: "Healthy weight (min)",
        help: "Minimum weight for a healthy BMI (18.5) at your height.",
      },
      healthyMaxWeight: {
        label: "Healthy weight (max)",
        help: "Maximum weight for a healthy BMI (24.9) at your height.",
      },
    },
    options: {
      unit: {
        metric: "Metric (kg, cm)",
        imperial: "Imperial (lb, in)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 500 kg (or 2–1100 lb).",
      heightOutOfRange: "Height must be between 50 and 250 cm (or 20–100 in).",
    },
    faq: [
      {
        q: "Is BMI accurate for athletes?",
        a: "BMI does not distinguish between muscle and fat mass, so athletes with high muscle mass may be classified as overweight even though they are metabolically healthy. Use BMI as a screening tool, not a definitive diagnosis.",
      },
      {
        q: "Is BMI reliable for children?",
        a: "Standard adult BMI thresholds do not apply to children and adolescents. Pediatric BMI uses age- and sex-specific percentile charts. Consult a paediatrician for accurate assessment.",
      },
      {
        q: "Should older adults be concerned about BMI?",
        a: "Research suggests slightly higher BMI values (up to 27) may be associated with better outcomes in adults over 65 due to increased muscle and bone mass reserves. Always discuss results with your doctor.",
      },
      {
        q: "What BMI is considered healthy?",
        a: "According to the World Health Organization, a BMI between 18.5 and 24.9 is considered normal weight for adults.",
      },
      {
        q: "Does BMI account for body shape or fat distribution?",
        a: "No. BMI is a population-level screening tool and does not measure where fat is stored. Central (abdominal) obesity is a better predictor of metabolic risk. Waist circumference measurements complement BMI.",
      },
    ],
  },
  pt: {
    title: "BMI Calculator",
    short: "Calculate your Body Mass Index and find your healthy weight range.",
    description:
      "Free BMI calculator based on WHO guidelines. Enter your height and weight to get your BMI, category, and ideal weight range.",
    keywords: [
      "BMI calculator",
      "body mass index",
      "healthy weight",
      "BMI chart",
      "weight calculator",
      "obesity calculator",
      "ideal weight",
    ],
    inputs: {
      unit: {
        label: "Unit system",
        help: "Choose between metric (kg/cm) or imperial (lb/in) units.",
      },
      weight: {
        label: "Weight",
        help: "Your current body weight.",
      },
      height: {
        label: "Height",
        help: "Your height in centimeters (metric) or inches (imperial).",
      },
    },
    outputs: {
      bmi: {
        label: "BMI",
        help: "Body Mass Index — your weight divided by height squared.",
      },
      category: {
        label: "Category",
        help: "WHO weight classification for your BMI value.",
      },
      healthyMinWeight: {
        label: "Healthy weight (min)",
        help: "Minimum weight for a healthy BMI (18.5) at your height.",
      },
      healthyMaxWeight: {
        label: "Healthy weight (max)",
        help: "Maximum weight for a healthy BMI (24.9) at your height.",
      },
    },
    options: {
      unit: {
        metric: "Metric (kg, cm)",
        imperial: "Imperial (lb, in)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 500 kg (or 2–1100 lb).",
      heightOutOfRange: "Height must be between 50 and 250 cm (or 20–100 in).",
    },
    faq: [
      {
        q: "Is BMI accurate for athletes?",
        a: "BMI does not distinguish between muscle and fat mass, so athletes with high muscle mass may be classified as overweight even though they are metabolically healthy. Use BMI as a screening tool, not a definitive diagnosis.",
      },
      {
        q: "Is BMI reliable for children?",
        a: "Standard adult BMI thresholds do not apply to children and adolescents. Pediatric BMI uses age- and sex-specific percentile charts. Consult a paediatrician for accurate assessment.",
      },
      {
        q: "Should older adults be concerned about BMI?",
        a: "Research suggests slightly higher BMI values (up to 27) may be associated with better outcomes in adults over 65 due to increased muscle and bone mass reserves. Always discuss results with your doctor.",
      },
      {
        q: "What BMI is considered healthy?",
        a: "According to the World Health Organization, a BMI between 18.5 and 24.9 is considered normal weight for adults.",
      },
      {
        q: "Does BMI account for body shape or fat distribution?",
        a: "No. BMI is a population-level screening tool and does not measure where fat is stored. Central (abdominal) obesity is a better predictor of metabolic risk. Waist circumference measurements complement BMI.",
      },
    ],
  },
  id: {
    title: "BMI Calculator",
    short: "Calculate your Body Mass Index and find your healthy weight range.",
    description:
      "Free BMI calculator based on WHO guidelines. Enter your height and weight to get your BMI, category, and ideal weight range.",
    keywords: [
      "BMI calculator",
      "body mass index",
      "healthy weight",
      "BMI chart",
      "weight calculator",
      "obesity calculator",
      "ideal weight",
    ],
    inputs: {
      unit: {
        label: "Unit system",
        help: "Choose between metric (kg/cm) or imperial (lb/in) units.",
      },
      weight: {
        label: "Weight",
        help: "Your current body weight.",
      },
      height: {
        label: "Height",
        help: "Your height in centimeters (metric) or inches (imperial).",
      },
    },
    outputs: {
      bmi: {
        label: "BMI",
        help: "Body Mass Index — your weight divided by height squared.",
      },
      category: {
        label: "Category",
        help: "WHO weight classification for your BMI value.",
      },
      healthyMinWeight: {
        label: "Healthy weight (min)",
        help: "Minimum weight for a healthy BMI (18.5) at your height.",
      },
      healthyMaxWeight: {
        label: "Healthy weight (max)",
        help: "Maximum weight for a healthy BMI (24.9) at your height.",
      },
    },
    options: {
      unit: {
        metric: "Metric (kg, cm)",
        imperial: "Imperial (lb, in)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 500 kg (or 2–1100 lb).",
      heightOutOfRange: "Height must be between 50 and 250 cm (or 20–100 in).",
    },
    faq: [
      {
        q: "Is BMI accurate for athletes?",
        a: "BMI does not distinguish between muscle and fat mass, so athletes with high muscle mass may be classified as overweight even though they are metabolically healthy. Use BMI as a screening tool, not a definitive diagnosis.",
      },
      {
        q: "Is BMI reliable for children?",
        a: "Standard adult BMI thresholds do not apply to children and adolescents. Pediatric BMI uses age- and sex-specific percentile charts. Consult a paediatrician for accurate assessment.",
      },
      {
        q: "Should older adults be concerned about BMI?",
        a: "Research suggests slightly higher BMI values (up to 27) may be associated with better outcomes in adults over 65 due to increased muscle and bone mass reserves. Always discuss results with your doctor.",
      },
      {
        q: "What BMI is considered healthy?",
        a: "According to the World Health Organization, a BMI between 18.5 and 24.9 is considered normal weight for adults.",
      },
      {
        q: "Does BMI account for body shape or fat distribution?",
        a: "No. BMI is a population-level screening tool and does not measure where fat is stored. Central (abdominal) obesity is a better predictor of metabolic risk. Waist circumference measurements complement BMI.",
      },
    ],
  },


  tr: {
    title: "VKİ Hesaplayıcı",
    short: "Vücut Kitle İndeksinizi hesaplayın ve sağlıklı kilo aralığınızı öğrenin.",
    description:
      "WHO kriterlerine dayalı ücretsiz VKİ hesaplayıcı. Boy ve kilonuzu girerek VKİ değerinizi, kategorinizi ve ideal kilo aralığınızı öğrenin.",
    keywords: [
      "VKİ hesaplayıcı",
      "vücut kitle indeksi",
      "sağlıklı kilo",
      "ideal kilo",
      "obezite hesaplayıcı",
      "BMI hesaplama",
      "kilo indeksi",
    ],
    inputs: {
      unit: {
        label: "Birim sistemi",
        help: "Metrik (kg/cm) veya İngiliz birimleri (lb/inç) arasından seçin.",
      },
      weight: {
        label: "Kilo",
        help: "Mevcut vücut ağırlığınız.",
      },
      height: {
        label: "Boy",
        help: "Boyunuzu santimetre (metrik) veya inç (İngiliz birimi) cinsinden girin.",
      },
    },
    outputs: {
      bmi: {
        label: "VKİ",
        help: "Vücut Kitle İndeksi — ağırlığınızın boy karenize bölümü.",
      },
      category: {
        label: "Kategori",
        help: "VKİ değeriniz için WHO kilo sınıflandırması.",
      },
      healthyMinWeight: {
        label: "Sağlıklı kilo (alt sınır)",
        help: "Boyunuz için sağlıklı VKİ değerinin (18,5) gerektirdiği minimum ağırlık.",
      },
      healthyMaxWeight: {
        label: "Sağlıklı kilo (üst sınır)",
        help: "Boyunuz için sağlıklı VKİ değerinin (24,9) gerektirdiği maksimum ağırlık.",
      },
    },
    options: {
      unit: {
        metric: "Metrik (kg, cm)",
        imperial: "İngiliz birimi (lb, inç)",
      },
    },
    errors: {
      weightOutOfRange: "Kilo 1 ile 500 kg (veya 2–1100 lb) arasında olmalıdır.",
      heightOutOfRange: "Boy 50 ile 250 cm (veya 20–100 inç) arasında olmalıdır.",
    },
    faq: [
      {
        q: "Sporcular için VKİ doğru bir ölçüt müdür?",
        a: "VKİ, kas ve yağ kütlesini birbirinden ayırt edemez. Bu nedenle yüksek kas kitlesine sahip sporcular metabolik açıdan sağlıklı olmalarına rağmen 'fazla kilolu' kategorisine düşebilir. VKİ'yi kesin tanı değil, bir tarama aracı olarak kullanın.",
      },
      {
        q: "Çocuklar için VKİ güvenilir midir?",
        a: "Yetişkinler için geçerli standart VKİ eşikleri çocuk ve ergenlere uygulanamaz. Çocuk VKİ'si yaşa ve cinsiyete özgü persentil grafikleri kullanır. Doğru değerlendirme için bir çocuk hekimine danışın.",
      },
      {
        q: "Sağlıklı VKİ değeri nedir?",
        a: "Dünya Sağlık Örgütü'ne göre, yetişkinlerde 18,5 ile 24,9 arasındaki VKİ değeri normal kilo olarak kabul edilmektedir.",
      },
      {
        q: "Yaşlı bireyler VKİ'ye dikkat etmeli mi?",
        a: "Araştırmalar, 65 yaş üstü bireylerde biraz daha yüksek VKİ değerlerinin (27'ye kadar) kas ve kemik kitlesi rezervleri nedeniyle daha iyi sonuçlarla ilişkilendirilebileceğini göstermektedir. Sonuçlarınızı her zaman doktorunuzla değerlendirin.",
      },
      {
        q: "VKİ vücut şeklini veya yağ dağılımını hesaba katar mı?",
        a: "Hayır. VKİ popülasyon düzeyinde bir tarama aracıdır ve yağın nerede biriktiğini ölçmez. Karın bölgesi yağlanması, metabolik risk açısından daha güçlü bir göstergedir; bel çevresi ölçümleri VKİ'yi tamamlar.",
      },
    ],
  },

  de: {
    title: "BMI-Rechner",
    short: "Berechnen Sie Ihren Body-Mass-Index und finden Sie Ihren gesunden Gewichtsbereich.",
    description:
      "Kostenloser BMI-Rechner nach WHO-Richtlinien. Geben Sie Größe und Gewicht ein und erhalten Sie Ihren BMI, die Gewichtskategorie und den idealen Gewichtsbereich.",
    keywords: [
      "BMI-Rechner",
      "Body-Mass-Index",
      "Normalgewicht",
      "Gewichtsrechner",
      "Idealgewicht",
      "Adipositas",
      "BMI berechnen",
    ],
    inputs: {
      unit: {
        label: "Einheitensystem",
        help: "Wählen Sie zwischen metrischen Einheiten (kg/cm) und imperialen Einheiten (lb/in).",
      },
      weight: {
        label: "Gewicht",
        help: "Ihr aktuelles Körpergewicht.",
      },
      height: {
        label: "Größe",
        help: "Ihre Körpergröße in Zentimetern (metrisch) oder Zoll (imperial).",
      },
    },
    outputs: {
      bmi: {
        label: "BMI",
        help: "Body-Mass-Index — Ihr Gewicht geteilt durch Ihre Körpergröße zum Quadrat.",
      },
      category: {
        label: "Kategorie",
        help: "WHO-Gewichtsklassifikation für Ihren BMI-Wert.",
      },
      healthyMinWeight: {
        label: "Gesundes Gewicht (Minimum)",
        help: "Mindestgewicht für einen gesunden BMI (18,5) bei Ihrer Körpergröße.",
      },
      healthyMaxWeight: {
        label: "Gesundes Gewicht (Maximum)",
        help: "Höchstgewicht für einen gesunden BMI (24,9) bei Ihrer Körpergröße.",
      },
    },
    options: {
      unit: {
        metric: "Metrisch (kg, cm)",
        imperial: "Imperial (lb, Zoll)",
      },
    },
    errors: {
      weightOutOfRange: "Das Gewicht muss zwischen 1 und 500 kg (oder 2–1100 lb) liegen.",
      heightOutOfRange: "Die Größe muss zwischen 50 und 250 cm (oder 20–100 Zoll) liegen.",
    },
    faq: [
      {
        q: "Ist der BMI für Sportler aussagekräftig?",
        a: "Der BMI unterscheidet nicht zwischen Muskel- und Fettmasse. Sportler mit hoher Muskelmasse können als übergewichtig eingestuft werden, obwohl sie metabolisch gesund sind. Verwenden Sie den BMI als Screening-Instrument, nicht als abschließende Diagnose.",
      },
      {
        q: "Welcher BMI gilt als gesund?",
        a: "Die Weltgesundheitsorganisation klassifiziert einen BMI zwischen 18,5 und 24,9 bei Erwachsenen als Normalgewicht.",
      },
      {
        q: "Ist der BMI bei Kindern verlässlich?",
        a: "Die Standardgrenzwerte für Erwachsene gelten nicht für Kinder und Jugendliche. Bei Kindern wird der BMI anhand altersspezifischer Perzentilkurven bewertet. Wenden Sie sich an Ihren Kinderarzt.",
      },
    ],
  },

  fr: {
    title: "Calculateur d'IMC",
    short: "Calculez votre indice de masse corporelle et découvrez votre fourchette de poids idéale.",
    description:
      "Calculateur d'IMC gratuit selon les recommandations de l'OMS. Entrez votre taille et votre poids pour obtenir votre IMC, votre catégorie et la fourchette de poids santé.",
    keywords: [
      "calculateur IMC",
      "indice de masse corporelle",
      "poids santé",
      "poids idéal",
      "obésité",
      "surpoids",
      "IMC calcul",
    ],
    inputs: {
      unit: {
        label: "Système d'unités",
        help: "Choisissez entre les unités métriques (kg/cm) ou impériales (lb/po).",
      },
      weight: {
        label: "Poids",
        help: "Votre poids corporel actuel.",
      },
      height: {
        label: "Taille",
        help: "Votre taille en centimètres (métrique) ou en pouces (impérial).",
      },
    },
    outputs: {
      bmi: {
        label: "IMC",
        help: "Indice de masse corporelle — votre poids divisé par le carré de votre taille.",
      },
      category: {
        label: "Catégorie",
        help: "Classification du poids selon l'OMS pour votre valeur d'IMC.",
      },
      healthyMinWeight: {
        label: "Poids santé (minimum)",
        help: "Poids minimum pour un IMC sain (18,5) à votre taille.",
      },
      healthyMaxWeight: {
        label: "Poids santé (maximum)",
        help: "Poids maximum pour un IMC sain (24,9) à votre taille.",
      },
    },
    options: {
      unit: {
        metric: "Métrique (kg, cm)",
        imperial: "Impérial (lb, po)",
      },
    },
    errors: {
      weightOutOfRange: "Le poids doit être compris entre 1 et 500 kg (ou 2–1100 lb).",
      heightOutOfRange: "La taille doit être comprise entre 50 et 250 cm (ou 20–100 po).",
    },
    faq: [
      {
        q: "L'IMC est-il fiable pour les sportifs ?",
        a: "L'IMC ne fait pas la différence entre la masse musculaire et la masse grasse. Les sportifs avec une forte masse musculaire peuvent être classés en surpoids même s'ils sont en bonne santé. Utilisez l'IMC comme outil de dépistage, non comme diagnostic définitif.",
      },
      {
        q: "Quel IMC est considéré comme normal ?",
        a: "Selon l'Organisation mondiale de la santé, un IMC compris entre 18,5 et 24,9 est considéré comme un poids normal pour les adultes.",
      },
      {
        q: "L'IMC est-il adapté aux enfants ?",
        a: "Les seuils IMC standards pour adultes ne s'appliquent pas aux enfants. L'IMC pédiatrique utilise des courbes de percentiles spécifiques à l'âge et au sexe. Consultez un pédiatre pour une évaluation précise.",
      },
    ],
  },

  es: {
    title: "Calculadora de IMC",
    short: "Calcula tu índice de masa corporal y descubre tu rango de peso saludable.",
    description:
      "Calculadora de IMC gratuita basada en las directrices de la OMS. Introduce tu altura y peso para obtener tu IMC, categoría y rango de peso ideal.",
    keywords: [
      "calculadora IMC",
      "índice de masa corporal",
      "peso saludable",
      "peso ideal",
      "obesidad",
      "sobrepeso",
      "calcular IMC",
    ],
    inputs: {
      unit: {
        label: "Sistema de unidades",
        help: "Elige entre unidades métricas (kg/cm) o imperiales (lb/in).",
      },
      weight: {
        label: "Peso",
        help: "Tu peso corporal actual.",
      },
      height: {
        label: "Altura",
        help: "Tu altura en centímetros (métrico) o pulgadas (imperial).",
      },
    },
    outputs: {
      bmi: {
        label: "IMC",
        help: "Índice de masa corporal — tu peso dividido entre tu altura al cuadrado.",
      },
      category: {
        label: "Categoría",
        help: "Clasificación del peso según la OMS para tu valor de IMC.",
      },
      healthyMinWeight: {
        label: "Peso saludable (mínimo)",
        help: "Peso mínimo para un IMC saludable (18,5) con tu altura.",
      },
      healthyMaxWeight: {
        label: "Peso saludable (máximo)",
        help: "Peso máximo para un IMC saludable (24,9) con tu altura.",
      },
    },
    options: {
      unit: {
        metric: "Métrico (kg, cm)",
        imperial: "Imperial (lb, in)",
      },
    },
    errors: {
      weightOutOfRange: "El peso debe estar entre 1 y 500 kg (o 2–1100 lb).",
      heightOutOfRange: "La altura debe estar entre 50 y 250 cm (o 20–100 in).",
    },
    faq: [
      {
        q: "¿Es el IMC preciso para deportistas?",
        a: "El IMC no distingue entre masa muscular y masa grasa. Los deportistas con mucha masa muscular pueden clasificarse como sobrepeso aunque estén metabólicamente sanos. Úsalo como herramienta de cribado, no como diagnóstico definitivo.",
      },
      {
        q: "¿Qué IMC se considera saludable?",
        a: "Según la Organización Mundial de la Salud, un IMC entre 18,5 y 24,9 se considera peso normal para adultos.",
      },
      {
        q: "¿Es el IMC adecuado para niños?",
        a: "Los umbrales estándar de IMC para adultos no se aplican a niños y adolescentes. El IMC pediátrico utiliza curvas de percentiles específicas por edad y sexo. Consulta a un pediatra.",
      },
    ],
  },

  it: {
    title: "Calcolatore BMI",
    short: "Calcola il tuo indice di massa corporea e scopri il tuo intervallo di peso ideale.",
    description:
      "Calcolatore BMI gratuito basato sulle linee guida dell'OMS. Inserisci altezza e peso per ottenere il tuo BMI, la categoria di peso e l'intervallo di peso salutare.",
    keywords: [
      "calcolatore BMI",
      "indice di massa corporea",
      "peso ideale",
      "peso sano",
      "obesità",
      "sovrappeso",
      "calcolo BMI",
    ],
    inputs: {
      unit: {
        label: "Sistema di unità",
        help: "Scegli tra unità metriche (kg/cm) o imperiali (lb/in).",
      },
      weight: {
        label: "Peso",
        help: "Il tuo peso corporeo attuale.",
      },
      height: {
        label: "Altezza",
        help: "La tua altezza in centimetri (metrico) o pollici (imperiale).",
      },
    },
    outputs: {
      bmi: {
        label: "BMI",
        help: "Indice di massa corporea — il tuo peso diviso per il quadrato della tua altezza.",
      },
      category: {
        label: "Categoria",
        help: "Classificazione del peso secondo l'OMS per il tuo valore BMI.",
      },
      healthyMinWeight: {
        label: "Peso sano (minimo)",
        help: "Peso minimo per un BMI sano (18,5) alla tua altezza.",
      },
      healthyMaxWeight: {
        label: "Peso sano (massimo)",
        help: "Peso massimo per un BMI sano (24,9) alla tua altezza.",
      },
    },
    options: {
      unit: {
        metric: "Metrico (kg, cm)",
        imperial: "Imperiale (lb, in)",
      },
    },
    errors: {
      weightOutOfRange: "Il peso deve essere compreso tra 1 e 500 kg (o 2–1100 lb).",
      heightOutOfRange: "L'altezza deve essere compresa tra 50 e 250 cm (o 20–100 in).",
    },
    faq: [
      {
        q: "Il BMI è accurato per gli sportivi?",
        a: "Il BMI non distingue tra massa muscolare e massa grassa. Gli atleti con molta massa muscolare possono essere classificati in sovrappeso pur essendo metabolicamente sani. Usa il BMI come strumento di screening, non come diagnosi definitiva.",
      },
      {
        q: "Quale BMI è considerato sano?",
        a: "Secondo l'Organizzazione Mondiale della Sanità, un BMI compreso tra 18,5 e 24,9 è considerato normopeso per gli adulti.",
      },
      {
        q: "Il BMI è adatto ai bambini?",
        a: "Le soglie BMI standard per adulti non si applicano a bambini e adolescenti. Il BMI pediatrico utilizza curve percentili specifiche per età e sesso. Consulta un pediatra.",
      },
    ],
  },

  ar: {
    title: "حاسبة مؤشر كتلة الجسم",
    short: "احسب مؤشر كتلة جسمك واكتشف نطاق وزنك الصحي المثالي.",
    description:
      "حاسبة مؤشر كتلة الجسم المجانية وفق إرشادات منظمة الصحة العالمية. أدخل طولك ووزنك للحصول على قيمة المؤشر وتصنيف وزنك ونطاق الوزن الصحي.",
    keywords: [
      "حاسبة مؤشر كتلة الجسم",
      "مؤشر كتلة الجسم",
      "الوزن المثالي",
      "الوزن الصحي",
      "السمنة",
      "زيادة الوزن",
      "حساب مؤشر الجسم",
    ],
    inputs: {
      unit: {
        label: "نظام الوحدات",
        help: "اختر بين الوحدات المترية (كجم/سم) أو الإمبراطورية (رطل/بوصة).",
      },
      weight: {
        label: "الوزن",
        help: "وزنك الحالي.",
      },
      height: {
        label: "الطول",
        help: "طولك بالسنتيمتر (متري) أو البوصة (إمبراطوري).",
      },
    },
    outputs: {
      bmi: {
        label: "مؤشر كتلة الجسم",
        help: "وزنك مقسومًا على مربع طولك.",
      },
      category: {
        label: "التصنيف",
        help: "تصنيف الوزن وفق منظمة الصحة العالمية لقيمة مؤشرك.",
      },
      healthyMinWeight: {
        label: "الحد الأدنى للوزن الصحي",
        help: "الحد الأدنى للوزن لتحقيق مؤشر صحي (18.5) عند طولك.",
      },
      healthyMaxWeight: {
        label: "الحد الأقصى للوزن الصحي",
        help: "الحد الأقصى للوزن لتحقيق مؤشر صحي (24.9) عند طولك.",
      },
    },
    options: {
      unit: {
        metric: "متري (كجم، سم)",
        imperial: "إمبراطوري (رطل، بوصة)",
      },
    },
    errors: {
      weightOutOfRange: "يجب أن يكون الوزن بين 1 و500 كجم (أو 2–1100 رطل).",
      heightOutOfRange: "يجب أن يكون الطول بين 50 و250 سم (أو 20–100 بوصة).",
    },
    faq: [
      {
        q: "هل مؤشر كتلة الجسم دقيق للرياضيين؟",
        a: "لا يميز مؤشر كتلة الجسم بين الكتلة العضلية والدهون. قد يُصنَّف الرياضيون ذوو الكتلة العضلية العالية على أنهم يعانون زيادة في الوزن رغم صحتهم الأيضية الجيدة. استخدم المؤشر أداةً للفحص لا تشخيصًا نهائيًا.",
      },
      {
        q: "ما مؤشر كتلة الجسم الصحي؟",
        a: "وفقًا لمنظمة الصحة العالمية، يُعدّ مؤشر كتلة الجسم بين 18.5 و24.9 وزنًا طبيعيًا للبالغين.",
      },
      {
        q: "هل يناسب المؤشر الأطفال؟",
        a: "لا تنطبق عتبات مؤشر كتلة الجسم القياسية للبالغين على الأطفال والمراهقين. يعتمد تقييم الأطفال على منحنيات النسب المئوية الخاصة بالعمر والجنس. استشر طبيب الأطفال للتقييم الدقيق.",
      },
    ],
  },

  ru: {
    title: "Калькулятор ИМТ",
    short: "Рассчитайте индекс массы тела и узнайте ваш оптимальный диапазон веса.",
    description:
      "Бесплатный калькулятор ИМТ по рекомендациям ВОЗ. Введите рост и вес, чтобы получить значение ИМТ, категорию и диапазон здорового веса.",
    keywords: [
      "калькулятор ИМТ",
      "индекс массы тела",
      "нормальный вес",
      "идеальный вес",
      "ожирение",
      "избыточный вес",
      "рассчитать ИМТ",
    ],
    inputs: {
      unit: {
        label: "Система единиц",
        help: "Выберите метрическую систему (кг/см) или имперскую (фунт/дюйм).",
      },
      weight: {
        label: "Масса тела",
        help: "Ваш текущий вес.",
      },
      height: {
        label: "Рост",
        help: "Ваш рост в сантиметрах (метрическая система) или дюймах (имперская).",
      },
    },
    outputs: {
      bmi: {
        label: "ИМТ",
        help: "Индекс массы тела — вес делённый на квадрат роста.",
      },
      category: {
        label: "Категория",
        help: "Классификация веса по ВОЗ для вашего значения ИМТ.",
      },
      healthyMinWeight: {
        label: "Здоровый вес (минимум)",
        help: "Минимальный вес для здорового ИМТ (18,5) при вашем росте.",
      },
      healthyMaxWeight: {
        label: "Здоровый вес (максимум)",
        help: "Максимальный вес для здорового ИМТ (24,9) при вашем росте.",
      },
    },
    options: {
      unit: {
        metric: "Метрическая (кг, см)",
        imperial: "Имперская (фунт, дюйм)",
      },
    },
    errors: {
      weightOutOfRange: "Вес должен быть от 1 до 500 кг (или от 2 до 1100 фунтов).",
      heightOutOfRange: "Рост должен быть от 50 до 250 см (или от 20 до 100 дюймов).",
    },
    faq: [
      {
        q: "Точен ли ИМТ для спортсменов?",
        a: "ИМТ не различает мышечную и жировую массу. Спортсмены с высокой мышечной массой могут быть классифицированы как имеющие избыточный вес, несмотря на хорошее метаболическое здоровье. Используйте ИМТ как инструмент скрининга, а не окончательный диагноз.",
      },
      {
        q: "Какой ИМТ считается нормальным?",
        a: "По классификации Всемирной организации здравоохранения, ИМТ от 18,5 до 24,9 соответствует нормальному весу у взрослых.",
      },
      {
        q: "Применим ли ИМТ для детей?",
        a: "Стандартные пороговые значения ИМТ для взрослых не применяются к детям и подросткам. Детский ИМТ оценивается по центильным кривым с учётом возраста и пола. Проконсультируйтесь с педиатром.",
      },
    ],
  },

  zh: {
    title: "BMI计算器",
    short: "计算您的身体质量指数，了解您的健康体重范围。",
    description:
      "基于世界卫生组织指南的免费BMI计算器。输入您的身高和体重，获取BMI值、体重分类及健康体重范围。",
    keywords: [
      "BMI计算器",
      "身体质量指数",
      "健康体重",
      "理想体重",
      "肥胖计算",
      "体重指数",
      "BMI计算",
    ],
    inputs: {
      unit: {
        label: "单位制",
        help: "选择公制（千克/厘米）或英制（磅/英寸）。",
      },
      weight: {
        label: "体重",
        help: "您当前的体重。",
      },
      height: {
        label: "身高",
        help: "您的身高，以厘米（公制）或英寸（英制）为单位。",
      },
    },
    outputs: {
      bmi: {
        label: "BMI",
        help: "身体质量指数——体重（千克）除以身高（米）的平方。",
      },
      category: {
        label: "分类",
        help: "世界卫生组织对您BMI值的体重分类。",
      },
      healthyMinWeight: {
        label: "健康体重（最低）",
        help: "您身高对应的健康BMI最低值（18.5）所需的最低体重。",
      },
      healthyMaxWeight: {
        label: "健康体重（最高）",
        help: "您身高对应的健康BMI最高值（24.9）所需的最高体重。",
      },
    },
    options: {
      unit: {
        metric: "公制（千克、厘米）",
        imperial: "英制（磅、英寸）",
      },
    },
    errors: {
      weightOutOfRange: "体重必须在1至500千克（或2至1100磅）之间。",
      heightOutOfRange: "身高必须在50至250厘米（或20至100英寸）之间。",
    },
    faq: [
      {
        q: "BMI对运动员准确吗？",
        a: "BMI无法区分肌肉质量和脂肪质量。肌肉量较高的运动员可能被归类为超重，但其代谢健康状况良好。请将BMI作为筛查工具，而非最终诊断依据。",
      },
      {
        q: "什么BMI值算健康？",
        a: "根据世界卫生组织的标准，成年人BMI在18.5至24.9之间属于正常体重。",
      },
      {
        q: "BMI适用于儿童吗？",
        a: "成人标准BMI阈值不适用于儿童和青少年。儿童BMI需使用按年龄和性别划分的百分位曲线进行评估。请咨询儿科医生。",
      },
    ],
  },

  ja: {
    title: "BMI計算機",
    short: "体格指数（BMI）を計算し、健康的な体重の範囲を確認しましょう。",
    description:
      "WHO（世界保健機関）のガイドラインに基づく無料のBMI計算機です。身長と体重を入力するだけで、BMI値・体重区分・健康的な体重の範囲が分かります。",
    keywords: [
      "BMI計算機",
      "体格指数",
      "健康体重",
      "理想体重",
      "肥満計算",
      "BMI計算",
      "標準体重",
    ],
    inputs: {
      unit: {
        label: "単位系",
        help: "メートル法（kg・cm）またはヤード・ポンド法（lb・in）を選択してください。",
      },
      weight: {
        label: "体重",
        help: "現在の体重を入力してください。",
      },
      height: {
        label: "身長",
        help: "身長をセンチメートル（メートル法）またはインチ（ヤード・ポンド法）で入力してください。",
      },
    },
    outputs: {
      bmi: {
        label: "BMI",
        help: "体格指数——体重（kg）÷身長（m）の2乗で算出されます。",
      },
      category: {
        label: "体重区分",
        help: "あなたのBMI値に基づくWHOの体重分類です。",
      },
      healthyMinWeight: {
        label: "健康体重（下限）",
        help: "あなたの身長で健康的なBMI（18.5）を維持するための最低体重です。",
      },
      healthyMaxWeight: {
        label: "健康体重（上限）",
        help: "あなたの身長で健康的なBMI（24.9）を維持するための最高体重です。",
      },
    },
    options: {
      unit: {
        metric: "メートル法（kg・cm）",
        imperial: "ヤード・ポンド法（lb・in）",
      },
    },
    errors: {
      weightOutOfRange: "体重は1〜500 kg（または2〜1100 lb）の範囲で入力してください。",
      heightOutOfRange: "身長は50〜250 cm（または20〜100 in）の範囲で入力してください。",
    },
    faq: [
      {
        q: "アスリートにとってBMIは正確な指標ですか？",
        a: "BMIは筋肉量と脂肪量を区別しません。筋肉量の多いアスリートは代謝的に健康であっても「過体重」に分類されることがあります。BMIはあくまでスクリーニングの目安として活用し、確定診断には用いないでください。",
      },
      {
        q: "健康的なBMIの値はどのくらいですか？",
        a: "世界保健機関（WHO）の基準では、成人のBMIが18.5〜24.9の範囲であれば「普通体重」とされています。",
      },
      {
        q: "子どもにBMIを使えますか？",
        a: "成人向けの標準BMI閾値は、子どもや青少年には適用できません。小児のBMIは年齢・性別別のパーセンタイル曲線で評価します。正確な判定は小児科医にご相談ください。",
      },
    ],
  },

  ko: {
    title: "BMI 계산기",
    short: "체질량지수(BMI)를 계산하고 건강 체중 범위를 확인하세요.",
    description:
      "WHO 지침에 기반한 무료 BMI 계산기입니다. 키와 체중을 입력하면 BMI 값, 체중 분류, 건강 체중 범위를 바로 확인할 수 있습니다.",
    keywords: [
      "BMI 계산기",
      "체질량지수",
      "건강 체중",
      "이상 체중",
      "비만 계산",
      "BMI 계산",
      "표준 체중",
    ],
    inputs: {
      unit: {
        label: "단위 시스템",
        help: "미터법(kg/cm) 또는 야드파운드법(lb/in)을 선택하세요.",
      },
      weight: {
        label: "체중",
        help: "현재 체중을 입력하세요.",
      },
      height: {
        label: "키",
        help: "키를 센티미터(미터법) 또는 인치(야드파운드법)로 입력하세요.",
      },
    },
    outputs: {
      bmi: {
        label: "BMI",
        help: "체질량지수 — 체중(kg)을 키(m)의 제곱으로 나눈 값입니다.",
      },
      category: {
        label: "체중 분류",
        help: "귀하의 BMI 값에 따른 WHO 체중 분류입니다.",
      },
      healthyMinWeight: {
        label: "건강 체중 (최솟값)",
        help: "귀하의 키에서 건강한 BMI(18.5)를 유지하기 위한 최소 체중입니다.",
      },
      healthyMaxWeight: {
        label: "건강 체중 (최댓값)",
        help: "귀하의 키에서 건강한 BMI(24.9)를 유지하기 위한 최대 체중입니다.",
      },
    },
    options: {
      unit: {
        metric: "미터법 (kg, cm)",
        imperial: "야드파운드법 (lb, in)",
      },
    },
    errors: {
      weightOutOfRange: "체중은 1~500 kg(또는 2~1100 lb) 범위 내여야 합니다.",
      heightOutOfRange: "키는 50~250 cm(또는 20~100 in) 범위 내여야 합니다.",
    },
    faq: [
      {
        q: "운동선수에게 BMI는 정확한 지표인가요?",
        a: "BMI는 근육량과 체지방을 구별하지 못합니다. 근육량이 많은 운동선수는 대사 건강이 좋음에도 '과체중'으로 분류될 수 있습니다. BMI는 선별 검사 도구로만 활용하고, 최종 진단 기준으로 삼지 마세요.",
      },
      {
        q: "건강한 BMI 수치는 얼마인가요?",
        a: "세계보건기구(WHO) 기준에 따르면, 성인의 BMI가 18.5~24.9 범위이면 정상 체중으로 분류됩니다.",
      },
      {
        q: "어린이에게도 BMI를 적용할 수 있나요?",
        a: "성인용 표준 BMI 기준값은 어린이와 청소년에게 적용할 수 없습니다. 소아 BMI는 연령·성별 백분위 곡선으로 평가합니다. 정확한 평가를 위해 소아과 의사와 상담하세요.",
      },
    ],
  },

  hi: {
    title: "BMI कैलकुलेटर",
    short: "अपना बॉडी मास इंडेक्स (BMI) जानें और स्वस्थ वज़न की सीमा पता करें।",
    description:
      "WHO दिशानिर्देशों पर आधारित मुफ़्त BMI कैलकुलेटर। अपनी लंबाई और वज़न दर्ज करें और अपना BMI, श्रेणी, तथा स्वास्थ्य वज़न सीमा जानें।",
    keywords: [
      "BMI कैलकुलेटर",
      "बॉडी मास इंडेक्स",
      "स्वस्थ वज़न",
      "आदर्श वज़न",
      "मोटापा कैलकुलेटर",
      "BMI गणना",
      "वज़न सूचकांक",
    ],
    inputs: {
      unit: {
        label: "माप प्रणाली",
        help: "मेट्रिक (kg/cm) या इम्पीरियल (lb/in) में से चुनें।",
      },
      weight: {
        label: "वज़न",
        help: "आपका वर्तमान शारीरिक वज़न।",
      },
      height: {
        label: "लंबाई",
        help: "आपकी लंबाई सेंटीमीटर (मेट्रिक) या इंच (इम्पीरियल) में।",
      },
    },
    outputs: {
      bmi: {
        label: "BMI",
        help: "बॉडी मास इंडेक्स — वज़न (kg) को लंबाई (m) के वर्ग से भाग देने पर प्राप्त मान।",
      },
      category: {
        label: "श्रेणी",
        help: "आपके BMI मान के लिए WHO का वज़न वर्गीकरण।",
      },
      healthyMinWeight: {
        label: "स्वस्थ वज़न (न्यूनतम)",
        help: "आपकी लंबाई के लिए स्वस्थ BMI (18.5) बनाए रखने के लिए न्यूनतम वज़न।",
      },
      healthyMaxWeight: {
        label: "स्वस्थ वज़न (अधिकतम)",
        help: "आपकी लंबाई के लिए स्वस्थ BMI (24.9) बनाए रखने के लिए अधिकतम वज़न।",
      },
    },
    options: {
      unit: {
        metric: "मेट्रिक (kg, cm)",
        imperial: "इम्पीरियल (lb, in)",
      },
    },
    errors: {
      weightOutOfRange: "वज़न 1 से 500 kg (या 2–1100 lb) के बीच होना चाहिए।",
      heightOutOfRange: "लंबाई 50 से 250 cm (या 20–100 in) के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "क्या BMI एथलीटों के लिए सटीक है?",
        a: "BMI मांसपेशियों और वसा में अंतर नहीं करता। अधिक मांसपेशी वाले एथलीट मेटाबॉलिक रूप से स्वस्थ होने के बावजूद 'अधिक वज़न' की श्रेणी में आ सकते हैं। BMI को एक स्क्रीनिंग उपकरण के रूप में उपयोग करें, न कि अंतिम निदान के रूप में।",
      },
      {
        q: "स्वस्थ BMI मान क्या है?",
        a: "विश्व स्वास्थ्य संगठन (WHO) के अनुसार, वयस्कों के लिए 18.5 से 24.9 के बीच BMI सामान्य वज़न माना जाता है।",
      },
      {
        q: "क्या बच्चों के लिए BMI उपयुक्त है?",
        a: "वयस्कों के लिए मानक BMI सीमाएँ बच्चों और किशोरों पर लागू नहीं होतीं। बच्चों का BMI उम्र और लिंग के अनुसार पर्सेंटाइल चार्ट से मापा जाता है। सटीक मूल्यांकन के लिए बाल रोग विशेषज्ञ से परामर्श लें।",
      },
    ],
  },
};

export default i18n;
