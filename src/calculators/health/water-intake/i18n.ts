import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Daily Water Intake Calculator",
    short: "Calculate your daily water needs based on weight, activity level, and climate.",
    description:
      "Free daily water intake calculator. Enter your weight, activity level, and climate to find out exactly how much water you should drink each day.",
    keywords: [
      "water intake calculator",
      "daily water needs",
      "hydration calculator",
      "how much water should I drink",
      "water per day",
      "daily hydration",
      "water consumption",
    ],
    inputs: {
      weight: {
        label: "Body Weight",
        help: "Your current body weight in kilograms.",
      },
      activityLevel: {
        label: "Activity Level",
        help: "Your typical daily physical activity level.",
      },
      climate: {
        label: "Climate",
        help: "The general climate of where you live or spend most of your time.",
      },
      isPregnant: {
        label: "Pregnant",
        help: "Check if you are currently pregnant (+300 ml/day recommended).",
      },
      isBreastfeeding: {
        label: "Breastfeeding",
        help: "Check if you are currently breastfeeding (+700 ml/day recommended).",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "Daily Water Intake",
        help: "Your recommended daily water intake in millilitres.",
        suffix: "ml",
      },
      dailyWaterL: {
        label: "Daily Water (Litres)",
        help: "Your recommended daily water intake in litres.",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "Daily Water (Fluid Ounces)",
        help: "Your recommended daily water intake in fluid ounces.",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "Daily Water (Cups)",
        help: "Your recommended daily water intake in standard 240 ml cups.",
        suffix: "cups",
      },
      glassesOf250ml: {
        label: "Glasses (250 ml)",
        help: "Number of 250 ml glasses you should drink per day.",
        suffix: "glasses",
      },
    },
    options: {
      activityLevel: {
        sedentary: "Sedentary (little or no exercise)",
        light: "Light (1–3 days/week)",
        moderate: "Moderate (3–5 days/week)",
        active: "Active (6–7 days/week)",
        very_active: "Very Active (hard exercise, physical job)",
      },
      climate: {
        temperate: "Temperate (mild weather)",
        hot: "Hot (warm/humid climate)",
        very_hot: "Very Hot (desert, tropical heat)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 300 kg.",
    },
    faq: [
      {
        q: "How is daily water intake calculated?",
        a: "The base calculation is 35 ml per kilogram of body weight. Additional amounts are added for activity level (up to +1,400 ml for very active individuals), climate (up to +700 ml in very hot conditions), pregnancy (+300 ml), and breastfeeding (+700 ml).",
      },
      {
        q: "Does this include water from food?",
        a: "No. This calculator estimates total fluid intake from drinks. In practice, roughly 20% of daily water intake comes from food — so your actual drinking target may be slightly lower if you eat plenty of fruits and vegetables.",
      },
      {
        q: "Is the 8-glasses-a-day rule accurate?",
        a: "The '8×8' rule (eight 8-ounce glasses) is a popular simplification, but individual needs vary widely based on body weight, activity, and climate. Using a weight-based formula provides a more personalised estimate.",
      },
      {
        q: "Does coffee or tea count toward daily water intake?",
        a: "Yes. Caffeinated beverages do contribute to fluid intake, although high caffeine consumption has a mild diuretic effect. Plain water, herbal teas, and non-caffeinated drinks are the best choices for hydration.",
      },
      {
        q: "What are the signs of dehydration?",
        a: "Common signs include dark yellow urine, dry mouth, headache, dizziness, and fatigue. Severe dehydration requires immediate medical attention.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Consumo de Água",
    short: "Calcule a quantidade ideal de água a beber por dia.",
    description:
      "Calculadora gratuita de consumo de água. Estime a quantidade ideal de água diária com base no peso, atividade e clima.",
    keywords: ["consumo água", "hidratação", "litros água por dia", "quanta água beber", "água diária"],
    inputs: {
      weight: {
        label: "Body Weight",
        help: "Your current body weight in kilograms.",
      },
      activityLevel: {
        label: "Activity Level",
        help: "Your typical daily physical activity level.",
      },
      climate: {
        label: "Climate",
        help: "The general climate of where you live or spend most of your time.",
      },
      isPregnant: {
        label: "Pregnant",
        help: "Check if you are currently pregnant (+300 ml/day recommended).",
      },
      isBreastfeeding: {
        label: "Breastfeeding",
        help: "Check if you are currently breastfeeding (+700 ml/day recommended).",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "Daily Water Intake",
        help: "Your recommended daily water intake in millilitres.",
        suffix: "ml",
      },
      dailyWaterL: {
        label: "Daily Water (Litres)",
        help: "Your recommended daily water intake in litres.",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "Daily Water (Fluid Ounces)",
        help: "Your recommended daily water intake in fluid ounces.",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "Daily Water (Cups)",
        help: "Your recommended daily water intake in standard 240 ml cups.",
        suffix: "cups",
      },
      glassesOf250ml: {
        label: "Glasses (250 ml)",
        help: "Number of 250 ml glasses you should drink per day.",
        suffix: "glasses",
      },
    },
    options: {
      activityLevel: {
        sedentary: "Sedentary (little or no exercise)",
        light: "Light (1–3 days/week)",
        moderate: "Moderate (3–5 days/week)",
        active: "Active (6–7 days/week)",
        very_active: "Very Active (hard exercise, physical job)",
      },
      climate: {
        temperate: "Temperate (mild weather)",
        hot: "Hot (warm/humid climate)",
        very_hot: "Very Hot (desert, tropical heat)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 300 kg.",
    },
    faq: [
      {
        q: "How is daily water intake calculated?",
        a: "The base calculation is 35 ml per kilogram of body weight. Additional amounts are added for activity level (up to +1,400 ml for very active individuals), climate (up to +700 ml in very hot conditions), pregnancy (+300 ml), and breastfeeding (+700 ml).",
      },
      {
        q: "Does this include water from food?",
        a: "No. This calculator estimates total fluid intake from drinks. In practice, roughly 20% of daily water intake comes from food — so your actual drinking target may be slightly lower if you eat plenty of fruits and vegetables.",
      },
      {
        q: "Is the 8-glasses-a-day rule accurate?",
        a: "The '8×8' rule (eight 8-ounce glasses) is a popular simplification, but individual needs vary widely based on body weight, activity, and climate. Using a weight-based formula provides a more personalised estimate.",
      },
      {
        q: "Does coffee or tea count toward daily water intake?",
        a: "Yes. Caffeinated beverages do contribute to fluid intake, although high caffeine consumption has a mild diuretic effect. Plain water, herbal teas, and non-caffeinated drinks are the best choices for hydration.",
      },
      {
        q: "What are the signs of dehydration?",
        a: "Common signs include dark yellow urine, dry mouth, headache, dizziness, and fatigue. Severe dehydration requires immediate medical attention.",
      },
    ],
  },
  id: {
    title: "Kalkulator Asupan Air",
    short: "Hitung jumlah air ideal yang harus diminum per hari.",
    description:
      "Kalkulator asupan air gratis. Estimasi jumlah air ideal harian berdasarkan berat badan, aktivitas, dan iklim.",
    keywords: ["asupan air", "hidrasi", "liter air per hari", "berapa air minum", "air harian"],
    inputs: {
      weight: {
        label: "Body Weight",
        help: "Your current body weight in kilograms.",
      },
      activityLevel: {
        label: "Activity Level",
        help: "Your typical daily physical activity level.",
      },
      climate: {
        label: "Climate",
        help: "The general climate of where you live or spend most of your time.",
      },
      isPregnant: {
        label: "Pregnant",
        help: "Check if you are currently pregnant (+300 ml/day recommended).",
      },
      isBreastfeeding: {
        label: "Breastfeeding",
        help: "Check if you are currently breastfeeding (+700 ml/day recommended).",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "Daily Water Intake",
        help: "Your recommended daily water intake in millilitres.",
        suffix: "ml",
      },
      dailyWaterL: {
        label: "Daily Water (Litres)",
        help: "Your recommended daily water intake in litres.",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "Daily Water (Fluid Ounces)",
        help: "Your recommended daily water intake in fluid ounces.",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "Daily Water (Cups)",
        help: "Your recommended daily water intake in standard 240 ml cups.",
        suffix: "cups",
      },
      glassesOf250ml: {
        label: "Glasses (250 ml)",
        help: "Number of 250 ml glasses you should drink per day.",
        suffix: "glasses",
      },
    },
    options: {
      activityLevel: {
        sedentary: "Sedentary (little or no exercise)",
        light: "Light (1–3 days/week)",
        moderate: "Moderate (3–5 days/week)",
        active: "Active (6–7 days/week)",
        very_active: "Very Active (hard exercise, physical job)",
      },
      climate: {
        temperate: "Temperate (mild weather)",
        hot: "Hot (warm/humid climate)",
        very_hot: "Very Hot (desert, tropical heat)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 300 kg.",
    },
    faq: [
      {
        q: "How is daily water intake calculated?",
        a: "The base calculation is 35 ml per kilogram of body weight. Additional amounts are added for activity level (up to +1,400 ml for very active individuals), climate (up to +700 ml in very hot conditions), pregnancy (+300 ml), and breastfeeding (+700 ml).",
      },
      {
        q: "Does this include water from food?",
        a: "No. This calculator estimates total fluid intake from drinks. In practice, roughly 20% of daily water intake comes from food — so your actual drinking target may be slightly lower if you eat plenty of fruits and vegetables.",
      },
      {
        q: "Is the 8-glasses-a-day rule accurate?",
        a: "The '8×8' rule (eight 8-ounce glasses) is a popular simplification, but individual needs vary widely based on body weight, activity, and climate. Using a weight-based formula provides a more personalised estimate.",
      },
      {
        q: "Does coffee or tea count toward daily water intake?",
        a: "Yes. Caffeinated beverages do contribute to fluid intake, although high caffeine consumption has a mild diuretic effect. Plain water, herbal teas, and non-caffeinated drinks are the best choices for hydration.",
      },
      {
        q: "What are the signs of dehydration?",
        a: "Common signs include dark yellow urine, dry mouth, headache, dizziness, and fatigue. Severe dehydration requires immediate medical attention.",
      },
    ],
  },


  tr: {
    title: "Günlük Su İhtiyacı Hesaplayıcı",
    short: "Kilo, aktivite düzeyi ve iklime göre günlük su ihtiyacınızı hesaplayın.",
    description:
      "Ücretsiz günlük su ihtiyacı hesaplayıcı. Kilonuzu, aktivite düzeyinizi ve yaşadığınız iklimi girerek her gün ne kadar su içmeniz gerektiğini öğrenin.",
    keywords: [
      "su ihtiyacı hesaplayıcı",
      "günlük su miktarı",
      "hidrasyon hesaplayıcı",
      "günde ne kadar su içmeliyim",
      "su tüketimi",
      "günlük su ihtiyacı",
      "sıvı alımı",
    ],
    inputs: {
      weight: {
        label: "Vücut Ağırlığı",
        help: "Kilogram cinsinden mevcut vücut ağırlığınız.",
      },
      activityLevel: {
        label: "Aktivite Düzeyi",
        help: "Tipik günlük fiziksel aktivite düzeyiniz.",
      },
      climate: {
        label: "İklim",
        help: "Yaşadığınız veya zamanınızın büyük bölümünü geçirdiğiniz yerin genel iklimi.",
      },
      isPregnant: {
        label: "Gebe",
        help: "Şu an hamileyseniz işaretleyin (günde +300 ml önerilir).",
      },
      isBreastfeeding: {
        label: "Emziriyor",
        help: "Şu an emziriyorsanız işaretleyin (günde +700 ml önerilir).",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "Günlük Su İhtiyacı",
        help: "Mililitre cinsinden önerilen günlük su alımınız.",
        suffix: "ml",
      },
      dailyWaterL: {
        label: "Günlük Su (Litre)",
        help: "Litre cinsinden önerilen günlük su alımınız.",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "Günlük Su (Sıvı Ons)",
        help: "Sıvı ons cinsinden önerilen günlük su alımınız.",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "Günlük Su (Bardak)",
        help: "Standart 240 ml bardak cinsinden önerilen günlük su alımınız.",
        suffix: "bardak",
      },
      glassesOf250ml: {
        label: "Bardak Sayısı (250 ml)",
        help: "Günde içmeniz gereken 250 ml bardak sayısı.",
        suffix: "bardak",
      },
    },
    options: {
      activityLevel: {
        sedentary: "Hareketsiz (egzersiz yok veya çok az)",
        light: "Hafif (haftada 1–3 gün)",
        moderate: "Orta (haftada 3–5 gün)",
        active: "Aktif (haftada 6–7 gün)",
        very_active: "Çok Aktif (yoğun egzersiz, fiziksel iş)",
      },
      climate: {
        temperate: "Ilıman (ılımlı hava)",
        hot: "Sıcak (sıcak/nemli iklim)",
        very_hot: "Çok Sıcak (çöl, tropikal sıcaklık)",
      },
    },
    errors: {
      weightOutOfRange: "Kilo 1 ile 300 kg arasında olmalıdır.",
    },
    faq: [
      {
        q: "Günlük su ihtiyacı nasıl hesaplanır?",
        a: "Temel hesaplama, vücut ağırlığının kilogram başına 35 ml'dir. Buna aktivite düzeyi (çok aktif bireyler için +1.400 ml'ye kadar), iklim (çok sıcak koşullarda +700 ml'ye kadar), gebelik (+300 ml) ve emzirme (+700 ml) için ek miktarlar eklenir.",
      },
      {
        q: "Bu hesap besinlerden alınan suyu içeriyor mu?",
        a: "Hayır. Bu hesaplayıcı içeceklerden alınan toplam sıvı miktarını tahmin eder. Pratikte günlük su alımının yaklaşık %20'si besinlerden gelir.",
      },
      {
        q: "Günde 8 bardak su kuralı doğru mu?",
        a: "Bu kural popüler bir basitleştirmedir; bireysel ihtiyaçlar vücut ağırlığına, aktiviteye ve iklime göre büyük farklılıklar gösterir. Ağırlığa dayalı bir formül daha kişiselleştirilmiş bir tahmin sunar.",
      },
      {
        q: "Kahve veya çay günlük su alımına sayılır mı?",
        a: "Evet, kafeinli içecekler de sıvı alımına katkıda bulunur; ancak yüksek kafein tüketiminin hafif idrar söktürücü etkisi vardır. En iyi hidrasyon için sade su ve bitkisel çaylar tercih edilmelidir.",
      },
      {
        q: "Dehidrasyonun belirtileri nelerdir?",
        a: "Koyu sarı idrar, ağız kuruluğu, baş ağrısı, baş dönmesi ve yorgunluk yaygın belirtilerdir. Şiddetli dehidrasyon acil tıbbi müdahale gerektirir.",
      },
    ],
  },

  de: {
    title: "Täglicher Wasserbedarf-Rechner",
    short: "Berechnen Sie Ihren täglichen Wasserbedarf nach Gewicht, Aktivität und Klima.",
    description:
      "Kostenloser Rechner für den täglichen Wasserbedarf. Geben Sie Ihr Gewicht, Ihre Aktivität und Ihr Klima ein, um zu erfahren, wie viel Wasser Sie täglich trinken sollten.",
    keywords: [
      "Wasserbedarf Rechner",
      "täglicher Wasserbedarf",
      "Hydrations-Rechner",
      "wie viel Wasser täglich",
      "Wasserkonsum berechnen",
      "Flüssigkeitsbedarf",
      "Wasserzufuhr",
    ],
    inputs: {
      weight: {
        label: "Körpergewicht",
        help: "Ihr aktuelles Körpergewicht in Kilogramm.",
      },
      activityLevel: {
        label: "Aktivitätsniveau",
        help: "Ihr typisches tägliches körperliches Aktivitätsniveau.",
      },
      climate: {
        label: "Klima",
        help: "Das allgemeine Klima an Ihrem Wohn- oder Aufenthaltsort.",
      },
      isPregnant: {
        label: "Schwanger",
        help: "Aktivieren, wenn Sie schwanger sind (+300 ml/Tag empfohlen).",
      },
      isBreastfeeding: {
        label: "Stillend",
        help: "Aktivieren, wenn Sie stillen (+700 ml/Tag empfohlen).",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "Täglicher Wasserbedarf",
        help: "Ihr empfohlener täglicher Wasserkonsum in Millilitern.",
        suffix: "ml",
      },
      dailyWaterL: {
        label: "Tageswasser (Liter)",
        help: "Ihr empfohlener täglicher Wasserkonsum in Litern.",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "Tageswasser (Flüssigunzen)",
        help: "Ihr empfohlener täglicher Wasserkonsum in Flüssigunzen.",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "Tageswasser (Tassen)",
        help: "Ihr empfohlener täglicher Wasserkonsum in 240-ml-Tassen.",
        suffix: "Tassen",
      },
      glassesOf250ml: {
        label: "Gläser (250 ml)",
        help: "Anzahl der 250-ml-Gläser, die Sie täglich trinken sollten.",
        suffix: "Gläser",
      },
    },
    options: {
      activityLevel: {
        sedentary: "Sitzend (kaum oder keine Bewegung)",
        light: "Leicht (1–3 Tage/Woche)",
        moderate: "Moderat (3–5 Tage/Woche)",
        active: "Aktiv (6–7 Tage/Woche)",
        very_active: "Sehr Aktiv (intensives Training, körperliche Arbeit)",
      },
      climate: {
        temperate: "Gemäßigt (mildes Wetter)",
        hot: "Heiß (warmes/feuchtes Klima)",
        very_hot: "Sehr Heiß (Wüste, tropische Hitze)",
      },
    },
    errors: {
      weightOutOfRange: "Das Gewicht muss zwischen 1 und 300 kg liegen.",
    },
    faq: [
      {
        q: "Wie wird der tägliche Wasserbedarf berechnet?",
        a: "Die Basisberechnung beträgt 35 ml pro Kilogramm Körpergewicht. Hinzu kommen Zuschläge für Aktivitätsniveau (bis +1.400 ml bei sehr aktiven Personen), Klima (bis +700 ml bei sehr heißem Wetter), Schwangerschaft (+300 ml) und Stillen (+700 ml).",
      },
      {
        q: "Ist Wasser aus Lebensmitteln enthalten?",
        a: "Nein. Dieser Rechner schätzt die Flüssigkeitszufuhr aus Getränken. In der Praxis kommen etwa 20 % des täglichen Wasserbedarfs aus Lebensmitteln.",
      },
      {
        q: "Ist die 8-Gläser-Regel korrekt?",
        a: "Die Regel '8×8' ist eine populäre Vereinfachung, aber der individuelle Bedarf variiert stark nach Körpergewicht, Aktivität und Klima. Eine gewichtsbasierte Formel liefert eine personalisiertere Schätzung.",
      },
      {
        q: "Zählen Kaffee und Tee zur täglichen Wasserzufuhr?",
        a: "Ja. Koffeinhaltige Getränke tragen zur Flüssigkeitszufuhr bei, obwohl hoher Koffeinkonsum eine leicht harntreibende Wirkung hat. Für optimale Hydration sind Wasser und Kräutertees am besten geeignet.",
      },
    ],
  },

  fr: {
    title: "Calculateur de besoin journalier en eau",
    short: "Calculez votre apport hydrique quotidien selon votre poids, votre activité et le climat.",
    description:
      "Calculateur gratuit de besoin en eau quotidien. Entrez votre poids, niveau d'activité et climat pour savoir exactement combien d'eau vous devez boire chaque jour.",
    keywords: [
      "calculateur hydratation",
      "besoin en eau quotidien",
      "quantité eau par jour",
      "combien d'eau boire",
      "hydratation journalière",
      "calculateur eau",
      "apport hydrique",
    ],
    inputs: {
      weight: {
        label: "Poids corporel",
        help: "Votre poids actuel en kilogrammes.",
      },
      activityLevel: {
        label: "Niveau d'activité",
        help: "Votre niveau d'activité physique quotidien habituel.",
      },
      climate: {
        label: "Climat",
        help: "Le climat général de votre lieu de vie ou de travail.",
      },
      isPregnant: {
        label: "Enceinte",
        help: "Cochez si vous êtes enceinte (+300 ml/jour recommandés).",
      },
      isBreastfeeding: {
        label: "Allaitement",
        help: "Cochez si vous allaitez (+700 ml/jour recommandés).",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "Apport hydrique journalier",
        help: "Votre apport hydrique journalier recommandé en millilitres.",
        suffix: "ml",
      },
      dailyWaterL: {
        label: "Eau par jour (Litres)",
        help: "Votre apport hydrique journalier recommandé en litres.",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "Eau par jour (Onces liquides)",
        help: "Votre apport hydrique journalier recommandé en onces liquides.",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "Eau par jour (Tasses)",
        help: "Votre apport hydrique journalier recommandé en tasses de 240 ml.",
        suffix: "tasses",
      },
      glassesOf250ml: {
        label: "Verres (250 ml)",
        help: "Nombre de verres de 250 ml à boire par jour.",
        suffix: "verres",
      },
    },
    options: {
      activityLevel: {
        sedentary: "Sédentaire (peu ou pas d'exercice)",
        light: "Léger (1–3 jours/semaine)",
        moderate: "Modéré (3–5 jours/semaine)",
        active: "Actif (6–7 jours/semaine)",
        very_active: "Très actif (entraînement intense, travail physique)",
      },
      climate: {
        temperate: "Tempéré (météo douce)",
        hot: "Chaud (climat chaud/humide)",
        very_hot: "Très chaud (désert, chaleur tropicale)",
      },
    },
    errors: {
      weightOutOfRange: "Le poids doit être compris entre 1 et 300 kg.",
    },
    faq: [
      {
        q: "Comment l'apport hydrique quotidien est-il calculé ?",
        a: "Le calcul de base est de 35 ml par kilogramme de poids corporel. Des suppléments sont ajoutés selon le niveau d'activité (jusqu'à +1 400 ml pour les très actifs), le climat (jusqu'à +700 ml en condition très chaude), la grossesse (+300 ml) et l'allaitement (+700 ml).",
      },
      {
        q: "L'eau des aliments est-elle incluse ?",
        a: "Non. Ce calculateur estime l'apport liquide provenant des boissons. En pratique, environ 20 % de l'apport hydrique quotidien provient des aliments.",
      },
      {
        q: "La règle des 8 verres par jour est-elle exacte ?",
        a: "Cette règle est une simplification populaire, mais les besoins individuels varient selon le poids, l'activité et le climat. Une formule basée sur le poids fournit une estimation plus personnalisée.",
      },
      {
        q: "Le café ou le thé comptent-ils dans l'apport hydrique ?",
        a: "Oui. Les boissons caféinées contribuent à l'hydratation, bien qu'une consommation élevée de caféine ait un léger effet diurétique. L'eau et les tisanes restent les meilleurs choix.",
      },
    ],
  },

  es: {
    title: "Calculadora de ingesta diaria de agua",
    short: "Calcula tu necesidad diaria de agua según tu peso, actividad y clima.",
    description:
      "Calculadora gratuita de ingesta de agua diaria. Introduce tu peso, nivel de actividad y clima para saber exactamente cuánta agua debes beber cada día.",
    keywords: [
      "calculadora ingesta agua",
      "necesidad diaria de agua",
      "cuánta agua beber al día",
      "calculadora hidratación",
      "consumo de agua diario",
      "agua por día",
      "hidratación diaria",
    ],
    inputs: {
      weight: {
        label: "Peso corporal",
        help: "Tu peso corporal actual en kilogramos.",
      },
      activityLevel: {
        label: "Nivel de actividad",
        help: "Tu nivel de actividad física diaria habitual.",
      },
      climate: {
        label: "Clima",
        help: "El clima general del lugar donde vives o pasas más tiempo.",
      },
      isPregnant: {
        label: "Embarazada",
        help: "Marca si estás embarazada (+300 ml/día recomendado).",
      },
      isBreastfeeding: {
        label: "Lactancia",
        help: "Marca si estás amamantando (+700 ml/día recomendado).",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "Ingesta diaria de agua",
        help: "Tu ingesta diaria de agua recomendada en mililitros.",
        suffix: "ml",
      },
      dailyWaterL: {
        label: "Agua diaria (Litros)",
        help: "Tu ingesta diaria de agua recomendada en litros.",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "Agua diaria (Onzas líquidas)",
        help: "Tu ingesta diaria de agua recomendada en onzas líquidas.",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "Agua diaria (Tazas)",
        help: "Tu ingesta diaria de agua recomendada en tazas de 240 ml.",
        suffix: "tazas",
      },
      glassesOf250ml: {
        label: "Vasos (250 ml)",
        help: "Número de vasos de 250 ml que debes beber al día.",
        suffix: "vasos",
      },
    },
    options: {
      activityLevel: {
        sedentary: "Sedentario (poco o nada de ejercicio)",
        light: "Ligero (1–3 días/semana)",
        moderate: "Moderado (3–5 días/semana)",
        active: "Activo (6–7 días/semana)",
        very_active: "Muy activo (ejercicio intenso, trabajo físico)",
      },
      climate: {
        temperate: "Templado (clima suave)",
        hot: "Caluroso (clima cálido/húmedo)",
        very_hot: "Muy caluroso (desierto, calor tropical)",
      },
    },
    errors: {
      weightOutOfRange: "El peso debe estar entre 1 y 300 kg.",
    },
    faq: [
      {
        q: "¿Cómo se calcula la ingesta diaria de agua?",
        a: "El cálculo base es de 35 ml por kilogramo de peso corporal. Se añaden cantidades adicionales por nivel de actividad (hasta +1.400 ml para personas muy activas), clima (hasta +700 ml en condiciones muy calurosas), embarazo (+300 ml) y lactancia (+700 ml).",
      },
      {
        q: "¿Se incluye el agua de los alimentos?",
        a: "No. Esta calculadora estima la ingesta de líquidos proveniente de bebidas. En la práctica, aproximadamente el 20% de la ingesta diaria de agua proviene de los alimentos.",
      },
      {
        q: "¿Es correcta la regla de los 8 vasos al día?",
        a: "Esa regla es una simplificación popular, pero las necesidades individuales varían mucho según el peso, la actividad y el clima. Una fórmula basada en el peso ofrece una estimación más personalizada.",
      },
      {
        q: "¿Cuentan el café o el té como ingesta de agua?",
        a: "Sí. Las bebidas con cafeína contribuyen a la hidratación, aunque el consumo elevado de cafeína tiene un leve efecto diurético. El agua y las infusiones son las mejores opciones.",
      },
    ],
  },

  it: {
    title: "Calcolatore del fabbisogno giornaliero di acqua",
    short: "Calcola il tuo fabbisogno giornaliero di acqua in base a peso, attività e clima.",
    description:
      "Calcolatore gratuito del fabbisogno di acqua giornaliero. Inserisci peso, livello di attività e clima per sapere esattamente quanta acqua dovresti bere ogni giorno.",
    keywords: [
      "calcolatore acqua giornaliera",
      "fabbisogno idrico giornaliero",
      "quanta acqua bere al giorno",
      "calcolatore idratazione",
      "consumo acqua quotidiano",
      "acqua al giorno",
      "idratazione giornaliera",
    ],
    inputs: {
      weight: {
        label: "Peso corporeo",
        help: "Il tuo peso corporeo attuale in chilogrammi.",
      },
      activityLevel: {
        label: "Livello di attività",
        help: "Il tuo tipico livello di attività fisica quotidiana.",
      },
      climate: {
        label: "Clima",
        help: "Il clima generale del luogo in cui vivi o trascorri più tempo.",
      },
      isPregnant: {
        label: "In gravidanza",
        help: "Seleziona se sei incinta (+300 ml/giorno raccomandati).",
      },
      isBreastfeeding: {
        label: "In allattamento",
        help: "Seleziona se stai allattando (+700 ml/giorno raccomandati).",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "Fabbisogno idrico giornaliero",
        help: "Il tuo fabbisogno idrico giornaliero raccomandato in millilitri.",
        suffix: "ml",
      },
      dailyWaterL: {
        label: "Acqua giornaliera (Litri)",
        help: "Il tuo fabbisogno idrico giornaliero raccomandato in litri.",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "Acqua giornaliera (Once liquide)",
        help: "Il tuo fabbisogno idrico giornaliero raccomandato in once liquide.",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "Acqua giornaliera (Tazze)",
        help: "Il tuo fabbisogno idrico giornaliero in tazze da 240 ml.",
        suffix: "tazze",
      },
      glassesOf250ml: {
        label: "Bicchieri (250 ml)",
        help: "Numero di bicchieri da 250 ml da bere al giorno.",
        suffix: "bicchieri",
      },
    },
    options: {
      activityLevel: {
        sedentary: "Sedentario (poco o nessun esercizio)",
        light: "Leggero (1–3 giorni/settimana)",
        moderate: "Moderato (3–5 giorni/settimana)",
        active: "Attivo (6–7 giorni/settimana)",
        very_active: "Molto attivo (allenamento intenso, lavoro fisico)",
      },
      climate: {
        temperate: "Temperato (clima mite)",
        hot: "Caldo (clima caldo/umido)",
        very_hot: "Molto caldo (deserto, calore tropicale)",
      },
    },
    errors: {
      weightOutOfRange: "Il peso deve essere compreso tra 1 e 300 kg.",
    },
    faq: [
      {
        q: "Come viene calcolato il fabbisogno idrico giornaliero?",
        a: "Il calcolo base è di 35 ml per chilogrammo di peso corporeo. Si aggiungono quantità extra per il livello di attività (fino a +1.400 ml per i molto attivi), il clima (fino a +700 ml in condizioni molto calde), la gravidanza (+300 ml) e l'allattamento (+700 ml).",
      },
      {
        q: "L'acqua dagli alimenti è inclusa?",
        a: "No. Questo calcolatore stima l'apporto di liquidi dalle bevande. In pratica, circa il 20% dell'apporto idrico giornaliero proviene dagli alimenti.",
      },
      {
        q: "La regola degli 8 bicchieri al giorno è corretta?",
        a: "Questa regola è una semplificazione popolare, ma i bisogni individuali variano in base al peso, all'attività e al clima. Una formula basata sul peso offre una stima più personalizzata.",
      },
    ],
  },

  ar: {
    title: "حاسبة الاحتياج اليومي من الماء",
    short: "احسب احتياجك اليومي من الماء بناءً على وزنك ومستوى نشاطك والمناخ.",
    description:
      "حاسبة مجانية للاحتياج اليومي من الماء. أدخل وزنك ومستوى نشاطك والمناخ لمعرفة الكمية الدقيقة من الماء التي يجب شربها يومياً.",
    keywords: [
      "حاسبة شرب الماء",
      "الاحتياج اليومي من الماء",
      "كم لتر ماء أشرب يومياً",
      "حاسبة الترطيب",
      "استهلاك الماء اليومي",
      "كمية الماء اليومية",
      "ترطيب الجسم",
    ],
    inputs: {
      weight: {
        label: "وزن الجسم",
        help: "وزنك الحالي بالكيلوغرام.",
      },
      activityLevel: {
        label: "مستوى النشاط",
        help: "مستوى نشاطك البدني اليومي المعتاد.",
      },
      climate: {
        label: "المناخ",
        help: "المناخ العام لمنطقة معيشتك أو قضاء معظم وقتك فيها.",
      },
      isPregnant: {
        label: "حامل",
        help: "حدد إذا كنتِ حاملاً (+300 مل/يوم موصى به).",
      },
      isBreastfeeding: {
        label: "مرضعة",
        help: "حدد إذا كنتِ مرضعةً (+700 مل/يوم موصى به).",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "الاحتياج اليومي من الماء",
        help: "الكمية اليومية الموصى بها من الماء بالمليلتر.",
        suffix: "مل",
      },
      dailyWaterL: {
        label: "الماء اليومي (لتر)",
        help: "الكمية اليومية الموصى بها من الماء باللتر.",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "الماء اليومي (أونصة سائلة)",
        help: "الكمية اليومية الموصى بها من الماء بالأونصة السائلة.",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "الماء اليومي (كوب)",
        help: "الكمية اليومية الموصى بها من الماء بأكواب سعة 240 مل.",
        suffix: "كوب",
      },
      glassesOf250ml: {
        label: "أكواب (250 مل)",
        help: "عدد أكواب 250 مل التي يجب شربها يومياً.",
        suffix: "كوب",
      },
    },
    options: {
      activityLevel: {
        sedentary: "خامل (لا تمارين أو قليلة جداً)",
        light: "خفيف (1–3 أيام/أسبوع)",
        moderate: "معتدل (3–5 أيام/أسبوع)",
        active: "نشيط (6–7 أيام/أسبوع)",
        very_active: "نشيط جداً (تمارين مكثفة، عمل جسدي)",
      },
      climate: {
        temperate: "معتدل (طقس لطيف)",
        hot: "حار (مناخ دافئ/رطب)",
        very_hot: "حار جداً (صحراء، حرارة استوائية)",
      },
    },
    errors: {
      weightOutOfRange: "يجب أن يكون الوزن بين 1 و300 كيلوغرام.",
    },
    faq: [
      {
        q: "كيف يُحسب الاحتياج اليومي من الماء؟",
        a: "الحساب الأساسي هو 35 مل لكل كيلوغرام من وزن الجسم، ويُضاف إليه مقادير إضافية بحسب مستوى النشاط (حتى +1400 مل للأشخاص شديدي النشاط) والمناخ (حتى +700 مل في الطقس الحار جداً) والحمل (+300 مل) والرضاعة (+700 مل).",
      },
      {
        q: "هل يشمل الحساب الماء من الطعام؟",
        a: "لا. تُقدّر هذه الحاسبة كمية السوائل من المشروبات فقط. في الواقع، نحو 20% من الاحتياج اليومي للماء يأتي من الطعام.",
      },
      {
        q: "هل قاعدة 8 أكواب يومياً صحيحة؟",
        a: "هذه القاعدة تبسيط شائع، لكن الاحتياجات الفردية تتفاوت تبعاً للوزن والنشاط والمناخ. الصيغة القائمة على الوزن تُقدّم تقديراً أكثر دقةً وتخصيصاً.",
      },
      {
        q: "هل القهوة والشاي يُحسبان ضمن كمية الماء اليومية؟",
        a: "نعم، تُسهم المشروبات المحتوية على الكافيين في الترطيب، غير أن الاستهلاك المفرط للكافيين له تأثير مُدرّ خفيف للبول. يُفضَّل الماء والأعشاب لأفضل ترطيب.",
      },
      {
        q: "ما علامات الجفاف؟",
        a: "تشمل العلامات الشائعة اللون الأصفر الغامق للبول، وجفاف الفم، والصداع، والدوخة، والإرهاق. يستلزم الجفاف الشديد تدخلاً طبياً فورياً.",
      },
    ],
  },

  ru: {
    title: "Калькулятор суточной нормы воды",
    short: "Рассчитайте дневную потребность в воде с учётом веса, активности и климата.",
    description:
      "Бесплатный калькулятор суточной нормы воды. Введите вес, уровень активности и климат, чтобы узнать, сколько воды нужно пить каждый день.",
    keywords: [
      "калькулятор воды",
      "суточная норма воды",
      "сколько воды пить в день",
      "калькулятор гидратации",
      "потребление воды",
      "норма воды в день",
      "водный баланс",
    ],
    inputs: {
      weight: {
        label: "Масса тела",
        help: "Ваш текущий вес в килограммах.",
      },
      activityLevel: {
        label: "Уровень активности",
        help: "Ваш типичный уровень ежедневной физической активности.",
      },
      climate: {
        label: "Климат",
        help: "Общий климат места вашего проживания или основного нахождения.",
      },
      isPregnant: {
        label: "Беременность",
        help: "Включите, если вы беременны (+300 мл/день рекомендуется).",
      },
      isBreastfeeding: {
        label: "Кормление грудью",
        help: "Включите, если вы кормите грудью (+700 мл/день рекомендуется).",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "Суточная норма воды",
        help: "Рекомендуемое суточное потребление воды в миллилитрах.",
        suffix: "мл",
      },
      dailyWaterL: {
        label: "Вода в сутки (литры)",
        help: "Рекомендуемое суточное потребление воды в литрах.",
        suffix: "л",
      },
      dailyWaterOz: {
        label: "Вода в сутки (жидк. унции)",
        help: "Рекомендуемое суточное потребление воды в жидких унциях.",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "Вода в сутки (стаканы 240 мл)",
        help: "Рекомендуемое суточное потребление воды в стаканах по 240 мл.",
        suffix: "стак.",
      },
      glassesOf250ml: {
        label: "Стаканы (250 мл)",
        help: "Количество стаканов по 250 мл, которые нужно выпивать в день.",
        suffix: "стак.",
      },
    },
    options: {
      activityLevel: {
        sedentary: "Малоподвижный (почти без нагрузок)",
        light: "Лёгкий (1–3 дня/нед.)",
        moderate: "Умеренный (3–5 дней/нед.)",
        active: "Активный (6–7 дней/нед.)",
        very_active: "Очень активный (интенсивные тренировки, физический труд)",
      },
      climate: {
        temperate: "Умеренный (мягкая погода)",
        hot: "Жаркий (тёплый/влажный климат)",
        very_hot: "Очень жаркий (пустыня, тропическая жара)",
      },
    },
    errors: {
      weightOutOfRange: "Вес должен быть от 1 до 300 кг.",
    },
    faq: [
      {
        q: "Как рассчитывается суточная норма воды?",
        a: "Базовый расчёт — 35 мл на килограмм массы тела. К нему добавляются надбавки за уровень активности (до +1 400 мл для очень активных), климат (до +700 мл в очень жарком климате), беременность (+300 мл) и кормление грудью (+700 мл).",
      },
      {
        q: "Учитывается ли вода из продуктов питания?",
        a: "Нет. Калькулятор оценивает жидкость из напитков. На практике около 20% суточной потребности в воде поступает из пищи.",
      },
      {
        q: "Верно ли правило «8 стаканов в день»?",
        a: "Это популярное упрощение, но индивидуальные потребности сильно варьируются в зависимости от веса, активности и климата. Формула на основе веса даёт более точную оценку.",
      },
      {
        q: "Учитываются ли кофе и чай в норме воды?",
        a: "Да, кофеинсодержащие напитки также способствуют гидратации, хотя избыток кофеина обладает лёгким мочегонным эффектом. Для оптимальной гидратации лучше всего подходят вода и травяные чаи.",
      },
    ],
  },

  zh: {
    title: "每日饮水量计算器",
    short: "根据体重、活动量和气候计算您的每日饮水需求。",
    description:
      "免费每日饮水量计算器。输入体重、活动水平和气候，精确了解您每天应该喝多少水。",
    keywords: [
      "每日饮水量计算器",
      "日常饮水需求",
      "每天喝多少水",
      "水分补充计算",
      "日饮水量",
      "补水计算器",
      "每日水摄入量",
    ],
    inputs: {
      weight: {
        label: "体重",
        help: "您目前的体重（千克）。",
      },
      activityLevel: {
        label: "活动水平",
        help: "您日常的体力活动水平。",
      },
      climate: {
        label: "气候",
        help: "您居住或主要活动地区的气候类型。",
      },
      isPregnant: {
        label: "妊娠期",
        help: "如果您目前处于妊娠期，请勾选（建议每日多+300毫升）。",
      },
      isBreastfeeding: {
        label: "哺乳期",
        help: "如果您目前处于哺乳期，请勾选（建议每日多+700毫升）。",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "每日饮水量",
        help: "建议每日饮水量（毫升）。",
        suffix: "毫升",
      },
      dailyWaterL: {
        label: "每日饮水量（升）",
        help: "建议每日饮水量（升）。",
        suffix: "升",
      },
      dailyWaterOz: {
        label: "每日饮水量（液体盎司）",
        help: "建议每日饮水量（液体盎司）。",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "每日饮水量（杯）",
        help: "建议每日饮水量（240毫升/杯）。",
        suffix: "杯",
      },
      glassesOf250ml: {
        label: "杯数（250毫升）",
        help: "每天应喝的250毫升杯数。",
        suffix: "杯",
      },
    },
    options: {
      activityLevel: {
        sedentary: "久坐（几乎不运动）",
        light: "轻度（每周1–3天）",
        moderate: "中度（每周3–5天）",
        active: "积极（每周6–7天）",
        very_active: "非常积极（高强度训练/体力劳动）",
      },
      climate: {
        temperate: "温和（气候宜人）",
        hot: "炎热（温暖/潮湿气候）",
        very_hot: "极热（沙漠、热带高温）",
      },
    },
    errors: {
      weightOutOfRange: "体重必须在1至300千克之间。",
    },
    faq: [
      {
        q: "每日饮水量如何计算？",
        a: "基础计算为每千克体重35毫升。此外，根据活动水平（非常活跃者可多+1400毫升）、气候（极热环境可多+700毫升）、妊娠期（+300毫升）和哺乳期（+700毫升）分别增加相应的量。",
      },
      {
        q: "计算是否包括食物中的水分？",
        a: "不包括。本计算器仅估算来自饮料的液体摄入量。实际上，每日约有20%的水分来自食物。",
      },
      {
        q: "每天喝8杯水的说法准确吗？",
        a: "这是一种广泛流传的简化说法，但个人需求因体重、活动量和气候差异而有很大不同。基于体重的计算公式能给出更个性化的建议。",
      },
    ],
  },

  ja: {
    title: "1日の水分摂取量計算機",
    short: "体重・活動量・気候から、1日に必要な水分量を計算します。",
    description:
      "無料の水分摂取量計算機です。体重・活動レベル・気候を入力して、1日に飲むべき水の量を正確に把握しましょう。",
    keywords: [
      "水分摂取量計算機",
      "1日の水分量",
      "水分補給計算",
      "1日何リットル飲むべきか",
      "水分需要量",
      "水分計算",
      "水の摂取量",
    ],
    inputs: {
      weight: {
        label: "体重",
        help: "現在の体重（kg）を入力してください。",
      },
      activityLevel: {
        label: "活動レベル",
        help: "日常的な身体活動のレベルを選択してください。",
      },
      climate: {
        label: "気候",
        help: "お住まいや主な活動場所の気候を選択してください。",
      },
      isPregnant: {
        label: "妊娠中",
        help: "妊娠中の場合はオンにしてください（+300 ml/日が推奨されます）。",
      },
      isBreastfeeding: {
        label: "授乳中",
        help: "授乳中の場合はオンにしてください（+700 ml/日が推奨されます）。",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "1日の推奨水分摂取量",
        help: "推奨される1日の水分摂取量（ml）です。",
        suffix: "ml",
      },
      dailyWaterL: {
        label: "1日の水分量（リットル）",
        help: "推奨される1日の水分摂取量（リットル）です。",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "1日の水分量（液量オンス）",
        help: "推奨される1日の水分摂取量（液量オンス）です。",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "1日の水分量（カップ）",
        help: "推奨される1日の水分摂取量（240 mlカップ単位）です。",
        suffix: "カップ",
      },
      glassesOf250ml: {
        label: "グラス数（250 ml）",
        help: "1日に飲むべき250 mlグラスの数です。",
        suffix: "杯",
      },
    },
    options: {
      activityLevel: {
        sedentary: "座りがち（ほぼ運動なし）",
        light: "軽い（週1〜3日）",
        moderate: "中程度（週3〜5日）",
        active: "活発（週6〜7日）",
        very_active: "非常に活発（激しい運動・肉体労働）",
      },
      climate: {
        temperate: "温暖（穏やかな気候）",
        hot: "暑い（温暖・湿潤な気候）",
        very_hot: "非常に暑い（砂漠・熱帯気候）",
      },
    },
    errors: {
      weightOutOfRange: "体重は1〜300 kgの範囲で入力してください。",
    },
    faq: [
      {
        q: "1日の水分必要量はどのように計算されますか？",
        a: "基本計算は体重1 kgあたり35 mlです。これに、活動レベル（非常に活発な方は最大+1,400 ml）、気候（非常に暑い場合は最大+700 ml）、妊娠中（+300 ml）、授乳中（+700 ml）のボーナスが加算されます。",
      },
      {
        q: "食事から摂る水分は含まれますか？",
        a: "いいえ。この計算機は飲み物からの水分摂取量を推定します。実際には、1日の水分の約20%が食事から摂取されます。",
      },
      {
        q: "「1日8杯」のルールは正確ですか？",
        a: "これはよく知られた目安ですが、個人差があります。体重を基準にした計算式の方が、より個人に合った推定値を得られます。",
      },
    ],
  },

  ko: {
    title: "일일 수분 섭취량 계산기",
    short: "체중, 활동량, 기후에 따른 일일 수분 필요량을 계산하세요.",
    description:
      "무료 일일 수분 섭취량 계산기입니다. 체중, 활동 수준, 기후를 입력하면 하루에 얼마나 마셔야 하는지 정확히 알 수 있습니다.",
    keywords: [
      "수분 섭취량 계산기",
      "일일 수분 필요량",
      "하루 물 섭취량",
      "수화 계산기",
      "물 얼마나 마셔야 하나",
      "물 섭취량 계산",
      "일일 수분량",
    ],
    inputs: {
      weight: {
        label: "체중",
        help: "현재 체중(킬로그램)을 입력하세요.",
      },
      activityLevel: {
        label: "활동 수준",
        help: "일상적인 신체 활동 수준을 선택하세요.",
      },
      climate: {
        label: "기후",
        help: "거주하거나 주로 활동하는 지역의 기후를 선택하세요.",
      },
      isPregnant: {
        label: "임신 중",
        help: "임신 중이라면 선택하세요(하루 +300 ml 권장).",
      },
      isBreastfeeding: {
        label: "모유 수유 중",
        help: "모유 수유 중이라면 선택하세요(하루 +700 ml 권장).",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "일일 수분 섭취량",
        help: "권장 일일 수분 섭취량(밀리리터)입니다.",
        suffix: "ml",
      },
      dailyWaterL: {
        label: "일일 수분량 (리터)",
        help: "권장 일일 수분 섭취량(리터)입니다.",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "일일 수분량 (액체 온스)",
        help: "권장 일일 수분 섭취량(액체 온스)입니다.",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "일일 수분량 (컵)",
        help: "권장 일일 수분 섭취량(240ml 컵 기준)입니다.",
        suffix: "컵",
      },
      glassesOf250ml: {
        label: "잔 수 (250ml)",
        help: "하루에 마셔야 할 250ml 잔의 수입니다.",
        suffix: "잔",
      },
    },
    options: {
      activityLevel: {
        sedentary: "좌식 생활 (운동 거의 없음)",
        light: "가벼운 활동 (주 1–3일)",
        moderate: "보통 활동 (주 3–5일)",
        active: "활발한 활동 (주 6–7일)",
        very_active: "매우 활발 (고강도 운동·육체 노동)",
      },
      climate: {
        temperate: "온화한 기후",
        hot: "더운 기후 (따뜻하고 습함)",
        very_hot: "매우 더운 기후 (사막·열대)",
      },
    },
    errors: {
      weightOutOfRange: "체중은 1~300 kg 범위 내여야 합니다.",
    },
    faq: [
      {
        q: "일일 수분 섭취량은 어떻게 계산되나요?",
        a: "기본 계산식은 체중 1kg당 35ml입니다. 여기에 활동 수준(매우 활발한 경우 최대 +1,400ml), 기후(매우 더운 경우 최대 +700ml), 임신 (+300ml), 모유 수유 (+700ml)에 따른 추가량이 더해집니다.",
      },
      {
        q: "음식에서 오는 수분도 포함되나요?",
        a: "아니요. 이 계산기는 음료에서 오는 수분만 추정합니다. 실제로는 일일 수분의 약 20%가 음식에서 섭취됩니다.",
      },
      {
        q: "하루 8잔 규칙이 정확한가요?",
        a: "이 규칙은 널리 알려진 단순화된 지침이지만, 개인마다 체중·활동량·기후에 따라 필요량이 크게 다릅니다. 체중 기반 공식이 더 개인화된 추정치를 제공합니다.",
      },
    ],
  },

  hi: {
    title: "दैनिक जल सेवन कैलकुलेटर",
    short: "अपने वज़न, गतिविधि स्तर और जलवायु के आधार पर दैनिक जल आवश्यकता की गणना करें।",
    description:
      "मुफ़्त दैनिक जल सेवन कैलकुलेटर। अपना वज़न, गतिविधि स्तर और जलवायु दर्ज करें और जानें कि आपको प्रतिदिन कितना पानी पीना चाहिए।",
    keywords: [
      "दैनिक जल सेवन कैलकुलेटर",
      "रोज़ कितना पानी पीना चाहिए",
      "हाइड्रेशन कैलकुलेटर",
      "पानी की ज़रूरत",
      "जल सेवन गणना",
      "प्रतिदिन पानी की मात्रा",
      "जलयोजन",
    ],
    inputs: {
      weight: {
        label: "शरीर का वज़न",
        help: "किलोग्राम में आपका वर्तमान शारीरिक वज़न।",
      },
      activityLevel: {
        label: "गतिविधि स्तर",
        help: "आपकी सामान्य दैनिक शारीरिक गतिविधि का स्तर।",
      },
      climate: {
        label: "जलवायु",
        help: "आप जहाँ रहते हैं या अधिकतर समय बिताते हैं, उस स्थान की सामान्य जलवायु।",
      },
      isPregnant: {
        label: "गर्भवती",
        help: "यदि आप गर्भवती हैं तो चुनें (प्रतिदिन +300 ml अनुशंसित)।",
      },
      isBreastfeeding: {
        label: "स्तनपान करा रही हैं",
        help: "यदि आप स्तनपान करा रही हैं तो चुनें (प्रतिदिन +700 ml अनुशंसित)।",
      },
    },
    outputs: {
      dailyWaterMl: {
        label: "दैनिक जल सेवन",
        help: "मिलीलीटर में अनुशंसित दैनिक जल सेवन।",
        suffix: "ml",
      },
      dailyWaterL: {
        label: "दैनिक पानी (लीटर)",
        help: "लीटर में अनुशंसित दैनिक जल सेवन।",
        suffix: "L",
      },
      dailyWaterOz: {
        label: "दैनिक पानी (फ़्लूइड आउंस)",
        help: "फ़्लूइड आउंस में अनुशंसित दैनिक जल सेवन।",
        suffix: "fl oz",
      },
      dailyWaterCups: {
        label: "दैनिक पानी (कप)",
        help: "240 ml कप के हिसाब से अनुशंसित दैनिक जल सेवन।",
        suffix: "कप",
      },
      glassesOf250ml: {
        label: "गिलास (250 ml)",
        help: "प्रतिदिन पीने के लिए 250 ml गिलास की संख्या।",
        suffix: "गिलास",
      },
    },
    options: {
      activityLevel: {
        sedentary: "निष्क्रिय (बहुत कम या कोई व्यायाम नहीं)",
        light: "हल्का (सप्ताह में 1–3 दिन)",
        moderate: "मध्यम (सप्ताह में 3–5 दिन)",
        active: "सक्रिय (सप्ताह में 6–7 दिन)",
        very_active: "अत्यधिक सक्रिय (कठिन व्यायाम, शारीरिक कार्य)",
      },
      climate: {
        temperate: "समशीतोष्ण (हल्का मौसम)",
        hot: "गर्म (गर्म/आर्द्र जलवायु)",
        very_hot: "बहुत गर्म (रेगिस्तान, उष्णकटिबंधीय गर्मी)",
      },
    },
    errors: {
      weightOutOfRange: "वज़न 1 से 300 kg के बीच होना चाहिए।",
    },
    faq: [
      {
        q: "दैनिक जल आवश्यकता कैसे गणना की जाती है?",
        a: "आधार गणना प्रति किलोग्राम शरीर के वज़न पर 35 ml है। इसमें गतिविधि स्तर (अत्यधिक सक्रिय व्यक्तियों के लिए +1,400 ml तक), जलवायु (बहुत गर्म परिस्थितियों में +700 ml तक), गर्भावस्था (+300 ml) और स्तनपान (+700 ml) के लिए अतिरिक्त मात्रा जोड़ी जाती है।",
      },
      {
        q: "क्या इसमें भोजन से मिलने वाला पानी शामिल है?",
        a: "नहीं। यह कैलकुलेटर पेय पदार्थों से मिलने वाले तरल की गणना करता है। व्यवहार में, दैनिक जल आवश्यकता का लगभग 20% भोजन से मिलता है।",
      },
      {
        q: "क्या दिन में 8 गिलास पानी का नियम सही है?",
        a: "यह एक लोकप्रिय सरलीकरण है, लेकिन व्यक्तिगत ज़रूरतें वज़न, गतिविधि और जलवायु के आधार पर भिन्न होती हैं। वज़न-आधारित सूत्र अधिक व्यक्तिगत अनुमान प्रदान करता है।",
      },
      {
        q: "क्या चाय या कॉफ़ी दैनिक जल सेवन में गिनी जाती है?",
        a: "हाँ। कैफ़ीनयुक्त पेय भी जलयोजन में योगदान देते हैं, हालाँकि अत्यधिक कैफ़ीन का सेवन हल्के मूत्रवर्धक प्रभाव डाल सकता है। बेहतर जलयोजन के लिए सादा पानी और हर्बल चाय सर्वोत्तम विकल्प हैं।",
      },
    ],
  },
};

export default i18n;
