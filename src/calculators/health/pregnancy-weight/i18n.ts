import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Pregnancy Weight Gain Calculator",
    short: "Track your pregnancy weight gain against IOM 2009 guidelines by trimester.",
    description:
      "Free pregnancy weight gain calculator based on IOM 2009 guidelines. Enter your pre-pregnancy weight, height, and current gestational week to see your recommended total gain and whether you are on track.",
    keywords: [
      "pregnancy weight gain calculator",
      "gestational weight gain",
      "IOM pregnancy guidelines",
      "prenatal weight",
      "healthy pregnancy weight",
      "pregnancy BMI",
      "weight gain by trimester",
    ],
    inputs: {
      unit: { label: "Unit system", help: "Choose metric (kg/cm) or imperial (lb/in)." },
      prePregnancyWeight: { label: "Pre-pregnancy weight", help: "Your weight before pregnancy (before week 1)." },
      height: { label: "Height", help: "Your height (for calculating pre-pregnancy BMI)." },
      gestationalWeek: { label: "Gestational week", help: "Current week of pregnancy (1–42)." },
      currentWeight: { label: "Current weight", help: "Your weight today." },
    },
    outputs: {
      preBmi: { label: "Pre-pregnancy BMI", help: "Your BMI before pregnancy, used to determine the IOM weight gain category." },
      bmiCategory: { label: "BMI category", help: "Pre-pregnancy BMI category (underweight, normal, overweight, obese)." },
      recommendedTotalGainMin: { label: "Recommended gain (min)", help: "Minimum total weight gain recommended by IOM 2009 for your BMI category.", suffix: "kg" },
      recommendedTotalGainMax: { label: "Recommended gain (max)", help: "Maximum total weight gain recommended by IOM 2009 for your BMI category.", suffix: "kg" },
      currentGain: { label: "Current weight gain", help: "How much weight you have gained since pre-pregnancy.", suffix: "kg" },
      expectedGainAtWeek: { label: "Expected gain at this week", help: "The midpoint of the IOM-recommended gain at your current gestational week.", suffix: "kg" },
      onTrack: { label: "Status", help: "Whether your current weight gain is within, below, or above the expected range for your gestational week." },
      weeklyRateKg: { label: "Recommended weekly rate", help: "IOM-recommended weekly weight gain in 2nd and 3rd trimester.", suffix: "kg/week" },
    },
    options: {
      unit: { metric: "Metric (kg, cm)", imperial: "Imperial (lb, in)" },
    },
    errors: {
      weightOutOfRange: "Weight must be a positive value within the valid range.",
      heightOutOfRange: "Height must be between 100 and 220 cm.",
      weekOutOfRange: "Gestational week must be between 1 and 42.",
    },
    faq: [
      {
        q: "What are the IOM 2009 pregnancy weight gain guidelines?",
        a: "The Institute of Medicine (IOM) published updated guidelines in 2009 recommending total weight gain ranges based on pre-pregnancy BMI: Underweight (<18.5): 12.5–18 kg; Normal weight (18.5–24.9): 11.5–16 kg; Overweight (25–29.9): 7–11.5 kg; Obese (≥30): 5–9 kg. Weekly rates in the 2nd and 3rd trimester are approximately 0.5, 0.42, 0.28, and 0.22 kg respectively.",
      },
      {
        q: "Does the rate of weight gain change across trimesters?",
        a: "Yes. In the first trimester, weight gain is minimal — typically 0.5 to 2 kg total. The 2nd and 3rd trimesters involve more consistent weekly gains. The IOM weekly rate guidelines apply mainly to the 2nd and 3rd trimesters. This calculator uses a simplified linear model for the first trimester and the IOM weekly rates thereafter.",
      },
      {
        q: "What if I'm carrying twins?",
        a: "This calculator is designed for singleton pregnancies. The IOM has separate guidelines for twins (typically 17–25 kg for normal weight with twins). For multiple pregnancies, consult your obstetrician for personalised guidance.",
      },
      {
        q: "Should I be worried if I'm below or above the recommended gain?",
        a: "Both insufficient and excessive weight gain during pregnancy are associated with risks for mother and baby. However, occasional fluctuations are normal. If you are consistently outside the recommended range for several weeks, discuss this with your healthcare provider who can consider your individual circumstances.",
      },
      {
        q: "Is all pregnancy weight gain from the baby?",
        a: "No. Weight gained during pregnancy is distributed across many components: the baby (typically 3–4 kg at term), placenta (~0.7 kg), amniotic fluid (~0.8 kg), uterine enlargement (~0.9 kg), increased blood volume (~1.8 kg), breast tissue (~0.4 kg), and maternal fat stores (~2–5 kg). The rest is water retention in maternal tissues.",
      },
    ],
  },
  pt: {
    title: "Pregnancy Weight Gain Calculator",
    short: "Track your pregnancy weight gain against IOM 2009 guidelines by trimester.",
    description:
      "Free pregnancy weight gain calculator based on IOM 2009 guidelines. Enter your pre-pregnancy weight, height, and current gestational week to see your recommended total gain and whether you are on track.",
    keywords: [
      "pregnancy weight gain calculator",
      "gestational weight gain",
      "IOM pregnancy guidelines",
      "prenatal weight",
      "healthy pregnancy weight",
      "pregnancy BMI",
      "weight gain by trimester",
    ],
    inputs: {
      unit: { label: "Unit system", help: "Choose metric (kg/cm) or imperial (lb/in)." },
      prePregnancyWeight: { label: "Pre-pregnancy weight", help: "Your weight before pregnancy (before week 1)." },
      height: { label: "Height", help: "Your height (for calculating pre-pregnancy BMI)." },
      gestationalWeek: { label: "Gestational week", help: "Current week of pregnancy (1–42)." },
      currentWeight: { label: "Current weight", help: "Your weight today." },
    },
    outputs: {
      preBmi: { label: "Pre-pregnancy BMI", help: "Your BMI before pregnancy, used to determine the IOM weight gain category." },
      bmiCategory: { label: "BMI category", help: "Pre-pregnancy BMI category (underweight, normal, overweight, obese)." },
      recommendedTotalGainMin: { label: "Recommended gain (min)", help: "Minimum total weight gain recommended by IOM 2009 for your BMI category.", suffix: "kg" },
      recommendedTotalGainMax: { label: "Recommended gain (max)", help: "Maximum total weight gain recommended by IOM 2009 for your BMI category.", suffix: "kg" },
      currentGain: { label: "Current weight gain", help: "How much weight you have gained since pre-pregnancy.", suffix: "kg" },
      expectedGainAtWeek: { label: "Expected gain at this week", help: "The midpoint of the IOM-recommended gain at your current gestational week.", suffix: "kg" },
      onTrack: { label: "Status", help: "Whether your current weight gain is within, below, or above the expected range for your gestational week." },
      weeklyRateKg: { label: "Recommended weekly rate", help: "IOM-recommended weekly weight gain in 2nd and 3rd trimester.", suffix: "kg/week" },
    },
    options: {
      unit: { metric: "Metric (kg, cm)", imperial: "Imperial (lb, in)" },
    },
    errors: {
      weightOutOfRange: "Weight must be a positive value within the valid range.",
      heightOutOfRange: "Height must be between 100 and 220 cm.",
      weekOutOfRange: "Gestational week must be between 1 and 42.",
    },
    faq: [
      {
        q: "What are the IOM 2009 pregnancy weight gain guidelines?",
        a: "The Institute of Medicine (IOM) published updated guidelines in 2009 recommending total weight gain ranges based on pre-pregnancy BMI: Underweight (<18.5): 12.5–18 kg; Normal weight (18.5–24.9): 11.5–16 kg; Overweight (25–29.9): 7–11.5 kg; Obese (≥30): 5–9 kg. Weekly rates in the 2nd and 3rd trimester are approximately 0.5, 0.42, 0.28, and 0.22 kg respectively.",
      },
      {
        q: "Does the rate of weight gain change across trimesters?",
        a: "Yes. In the first trimester, weight gain is minimal — typically 0.5 to 2 kg total. The 2nd and 3rd trimesters involve more consistent weekly gains. The IOM weekly rate guidelines apply mainly to the 2nd and 3rd trimesters. This calculator uses a simplified linear model for the first trimester and the IOM weekly rates thereafter.",
      },
      {
        q: "What if I'm carrying twins?",
        a: "This calculator is designed for singleton pregnancies. The IOM has separate guidelines for twins (typically 17–25 kg for normal weight with twins). For multiple pregnancies, consult your obstetrician for personalised guidance.",
      },
      {
        q: "Should I be worried if I'm below or above the recommended gain?",
        a: "Both insufficient and excessive weight gain during pregnancy are associated with risks for mother and baby. However, occasional fluctuations are normal. If you are consistently outside the recommended range for several weeks, discuss this with your healthcare provider who can consider your individual circumstances.",
      },
      {
        q: "Is all pregnancy weight gain from the baby?",
        a: "No. Weight gained during pregnancy is distributed across many components: the baby (typically 3–4 kg at term), placenta (~0.7 kg), amniotic fluid (~0.8 kg), uterine enlargement (~0.9 kg), increased blood volume (~1.8 kg), breast tissue (~0.4 kg), and maternal fat stores (~2–5 kg). The rest is water retention in maternal tissues.",
      },
    ],
  },
  id: {
    title: "Pregnancy Weight Gain Calculator",
    short: "Track your pregnancy weight gain against IOM 2009 guidelines by trimester.",
    description:
      "Free pregnancy weight gain calculator based on IOM 2009 guidelines. Enter your pre-pregnancy weight, height, and current gestational week to see your recommended total gain and whether you are on track.",
    keywords: [
      "pregnancy weight gain calculator",
      "gestational weight gain",
      "IOM pregnancy guidelines",
      "prenatal weight",
      "healthy pregnancy weight",
      "pregnancy BMI",
      "weight gain by trimester",
    ],
    inputs: {
      unit: { label: "Unit system", help: "Choose metric (kg/cm) or imperial (lb/in)." },
      prePregnancyWeight: { label: "Pre-pregnancy weight", help: "Your weight before pregnancy (before week 1)." },
      height: { label: "Height", help: "Your height (for calculating pre-pregnancy BMI)." },
      gestationalWeek: { label: "Gestational week", help: "Current week of pregnancy (1–42)." },
      currentWeight: { label: "Current weight", help: "Your weight today." },
    },
    outputs: {
      preBmi: { label: "Pre-pregnancy BMI", help: "Your BMI before pregnancy, used to determine the IOM weight gain category." },
      bmiCategory: { label: "BMI category", help: "Pre-pregnancy BMI category (underweight, normal, overweight, obese)." },
      recommendedTotalGainMin: { label: "Recommended gain (min)", help: "Minimum total weight gain recommended by IOM 2009 for your BMI category.", suffix: "kg" },
      recommendedTotalGainMax: { label: "Recommended gain (max)", help: "Maximum total weight gain recommended by IOM 2009 for your BMI category.", suffix: "kg" },
      currentGain: { label: "Current weight gain", help: "How much weight you have gained since pre-pregnancy.", suffix: "kg" },
      expectedGainAtWeek: { label: "Expected gain at this week", help: "The midpoint of the IOM-recommended gain at your current gestational week.", suffix: "kg" },
      onTrack: { label: "Status", help: "Whether your current weight gain is within, below, or above the expected range for your gestational week." },
      weeklyRateKg: { label: "Recommended weekly rate", help: "IOM-recommended weekly weight gain in 2nd and 3rd trimester.", suffix: "kg/week" },
    },
    options: {
      unit: { metric: "Metric (kg, cm)", imperial: "Imperial (lb, in)" },
    },
    errors: {
      weightOutOfRange: "Weight must be a positive value within the valid range.",
      heightOutOfRange: "Height must be between 100 and 220 cm.",
      weekOutOfRange: "Gestational week must be between 1 and 42.",
    },
    faq: [
      {
        q: "What are the IOM 2009 pregnancy weight gain guidelines?",
        a: "The Institute of Medicine (IOM) published updated guidelines in 2009 recommending total weight gain ranges based on pre-pregnancy BMI: Underweight (<18.5): 12.5–18 kg; Normal weight (18.5–24.9): 11.5–16 kg; Overweight (25–29.9): 7–11.5 kg; Obese (≥30): 5–9 kg. Weekly rates in the 2nd and 3rd trimester are approximately 0.5, 0.42, 0.28, and 0.22 kg respectively.",
      },
      {
        q: "Does the rate of weight gain change across trimesters?",
        a: "Yes. In the first trimester, weight gain is minimal — typically 0.5 to 2 kg total. The 2nd and 3rd trimesters involve more consistent weekly gains. The IOM weekly rate guidelines apply mainly to the 2nd and 3rd trimesters. This calculator uses a simplified linear model for the first trimester and the IOM weekly rates thereafter.",
      },
      {
        q: "What if I'm carrying twins?",
        a: "This calculator is designed for singleton pregnancies. The IOM has separate guidelines for twins (typically 17–25 kg for normal weight with twins). For multiple pregnancies, consult your obstetrician for personalised guidance.",
      },
      {
        q: "Should I be worried if I'm below or above the recommended gain?",
        a: "Both insufficient and excessive weight gain during pregnancy are associated with risks for mother and baby. However, occasional fluctuations are normal. If you are consistently outside the recommended range for several weeks, discuss this with your healthcare provider who can consider your individual circumstances.",
      },
      {
        q: "Is all pregnancy weight gain from the baby?",
        a: "No. Weight gained during pregnancy is distributed across many components: the baby (typically 3–4 kg at term), placenta (~0.7 kg), amniotic fluid (~0.8 kg), uterine enlargement (~0.9 kg), increased blood volume (~1.8 kg), breast tissue (~0.4 kg), and maternal fat stores (~2–5 kg). The rest is water retention in maternal tissues.",
      },
    ],
  },


  tr: {
    title: "Gebelik Kilo Artışı Hesaplayıcı",
    short: "IOM 2009 kılavuzlarına göre gebelik kilo artışınızı trimester bazında takip edin.",
    description:
      "IOM 2009 kılavuzlarına dayalı ücretsiz gebelik kilo artışı hesaplayıcı. Gebelik öncesi kilonuzu, boyunuzu ve mevcut gebelik haftanızı girerek önerilen toplam artışı öğrenin.",
    keywords: [
      "gebelik kilo artışı hesaplayıcı",
      "gestasyonel kilo artışı",
      "IOM gebelik kılavuzu",
      "prenatal kilo",
      "sağlıklı gebelik kilosu",
      "gebelik VKİ",
      "trimester kilo artışı",
    ],
    inputs: {
      unit: { label: "Birim sistemi", help: "Metrik (kg/cm) veya İngiliz birimi (lb/inç) seçin." },
      prePregnancyWeight: { label: "Gebelik öncesi kilo", help: "Gebelik öncesindeki kilonuz." },
      height: { label: "Boy", help: "Gebelik öncesi VKİ hesaplamak için boyunuz." },
      gestationalWeek: { label: "Gebelik haftası", help: "Gebeliğin mevcut haftası (1–42)." },
      currentWeight: { label: "Mevcut kilo", help: "Bugünkü kilonuz." },
    },
    outputs: {
      preBmi: { label: "Gebelik öncesi VKİ", help: "Gebelik öncesi VKİ değeriniz." },
      bmiCategory: { label: "VKİ kategorisi", help: "Gebelik öncesi VKİ kategorisi." },
      recommendedTotalGainMin: { label: "Önerilen artış (min)", help: "IOM 2009 kılavuzuna göre minimum önerilen toplam kilo artışı.", suffix: "kg" },
      recommendedTotalGainMax: { label: "Önerilen artış (maks)", help: "IOM 2009 kılavuzuna göre maksimum önerilen toplam kilo artışı.", suffix: "kg" },
      currentGain: { label: "Mevcut kilo artışı", help: "Gebelik öncesinden bu yana aldığınız kilo.", suffix: "kg" },
      expectedGainAtWeek: { label: "Bu haftaki beklenen artış", help: "Mevcut gebelik haftanız için IOM önerilen artışın orta noktası.", suffix: "kg" },
      onTrack: { label: "Durum", help: "Mevcut kilo artışınızın beklenen aralıkta olup olmadığı." },
      weeklyRateKg: { label: "Haftalık önerilen artış", help: "2. ve 3. trimesterde IOM'un önerdiği haftalık kilo artışı.", suffix: "kg/hafta" },
    },
    options: {
      unit: { metric: "Metrik (kg, cm)", imperial: "İngiliz birimi (lb, inç)" },
    },
    errors: {
      weightOutOfRange: "Kilo geçerli aralıkta pozitif bir değer olmalıdır.",
      heightOutOfRange: "Boy 100 ile 220 cm arasında olmalıdır.",
      weekOutOfRange: "Gebelik haftası 1 ile 42 arasında olmalıdır.",
    },
    faq: [
      {
        q: "IOM 2009 gebelik kilo artışı kılavuzları nelerdir?",
        a: "IOM, 2009'da gebelik öncesi VKİ'ye göre önerilen toplam kilo artışı aralıklarını yayımladı: Düşük kilolu (<18,5): 12,5–18 kg; Normal kilolu (18,5–24,9): 11,5–16 kg; Fazla kilolu (25–29,9): 7–11,5 kg; Obez (≥30): 5–9 kg.",
      },
      {
        q: "Kilo artış hızı trimesterler arasında değişir mi?",
        a: "Evet. İlk trimesterde kilo artışı genellikle 0,5–2 kg ile sınırlıdır. IOM haftalık kilo artışı kılavuzu ağırlıklı olarak 2. ve 3. trimester için geçerlidir.",
      },
      {
        q: "Önerilen miktarın altında veya üstünde kalırsam ne olur?",
        a: "Yetersiz ya da fazla kilo alımı hem anne hem de bebek için risklerle ilişkilendirilmektedir. Ancak küçük dalgalanmalar normaldir. Haftalarca önerilen aralığın dışında kalırsanız sağlık uzmanınıza danışın.",
      },
    ],
  },

  de: {
    title: "Schwangerschaftsgewicht-Rechner",
    short: "Verfolgen Sie Ihre Gewichtszunahme in der Schwangerschaft anhand der IOM-Richtlinien 2009.",
    description:
      "Kostenloser Rechner für die Gewichtszunahme in der Schwangerschaft nach IOM-Richtlinien 2009. Geben Sie Ihr Gewicht vor der Schwangerschaft, Ihre Größe und die aktuelle Schwangerschaftswoche ein.",
    keywords: [
      "Schwangerschaftsgewicht Rechner",
      "Gewichtszunahme Schwangerschaft",
      "IOM Schwangerschaftsrichtlinien",
      "pränatales Gewicht",
      "gesunde Schwangerschaft Gewicht",
      "Schwangerschaft BMI",
      "Gewichtszunahme Trimester",
    ],
    inputs: {
      unit: { label: "Einheitensystem", help: "Metrisch (kg/cm) oder imperial (lb/Zoll) wählen." },
      prePregnancyWeight: { label: "Gewicht vor der Schwangerschaft", help: "Ihr Gewicht vor der Schwangerschaft." },
      height: { label: "Größe", help: "Ihre Körpergröße für die BMI-Berechnung." },
      gestationalWeek: { label: "Schwangerschaftswoche", help: "Aktuelle Schwangerschaftswoche (1–42)." },
      currentWeight: { label: "Aktuelles Gewicht", help: "Ihr heutiges Körpergewicht." },
    },
    outputs: {
      preBmi: { label: "BMI vor der Schwangerschaft", help: "Ihr BMI vor der Schwangerschaft." },
      bmiCategory: { label: "BMI-Kategorie", help: "BMI-Kategorie vor der Schwangerschaft." },
      recommendedTotalGainMin: { label: "Empfohlene Zunahme (min)", help: "Minimale empfohlene Gesamtzunahme nach IOM 2009.", suffix: "kg" },
      recommendedTotalGainMax: { label: "Empfohlene Zunahme (max)", help: "Maximale empfohlene Gesamtzunahme nach IOM 2009.", suffix: "kg" },
      currentGain: { label: "Aktuelle Gewichtszunahme", help: "Gewichtszunahme seit vor der Schwangerschaft.", suffix: "kg" },
      expectedGainAtWeek: { label: "Erwartete Zunahme in dieser Woche", help: "Erwarteter Mittelwert der IOM-Zunahme für Ihre aktuelle Schwangerschaftswoche.", suffix: "kg" },
      onTrack: { label: "Status", help: "Ob Ihre aktuelle Gewichtszunahme im erwarteten Bereich liegt." },
      weeklyRateKg: { label: "Empfohlene wöchentliche Zunahme", help: "IOM-empfohlene wöchentliche Gewichtszunahme im 2. und 3. Trimester.", suffix: "kg/Woche" },
    },
    options: {
      unit: { metric: "Metrisch (kg, cm)", imperial: "Imperial (lb, Zoll)" },
    },
    errors: {
      weightOutOfRange: "Das Gewicht muss im gültigen Bereich liegen.",
      heightOutOfRange: "Die Größe muss zwischen 100 und 220 cm liegen.",
      weekOutOfRange: "Die Schwangerschaftswoche muss zwischen 1 und 42 liegen.",
    },
    faq: [
      {
        q: "Was sind die IOM-Richtlinien 2009 für die Gewichtszunahme in der Schwangerschaft?",
        a: "Das Institute of Medicine empfiehlt folgende Gesamtzunahmen je nach BMI vor der Schwangerschaft: Untergewicht (<18,5): 12,5–18 kg; Normalgewicht (18,5–24,9): 11,5–16 kg; Übergewicht (25–29,9): 7–11,5 kg; Adipositas (≥30): 5–9 kg.",
      },
      {
        q: "Ändert sich die Gewichtszunahme von Trimester zu Trimester?",
        a: "Ja. Im ersten Trimester ist die Gewichtszunahme gering (etwa 0,5–2 kg). Die wöchentlichen IOM-Empfehlungen gelten hauptsächlich für das 2. und 3. Trimester.",
      },
      {
        q: "Was tun, wenn ich unter oder über der empfohlenen Zunahme liege?",
        a: "Sowohl zu geringe als auch zu hohe Gewichtszunahme in der Schwangerschaft birgt Risiken für Mutter und Kind. Gelegentliche Schwankungen sind normal. Wenn Sie über mehrere Wochen außerhalb des empfohlenen Bereichs liegen, sprechen Sie mit Ihrer Hebamme oder Ihrem Arzt.",
      },
    ],
  },

  fr: {
    title: "Calculateur de prise de poids pendant la grossesse",
    short: "Suivez votre prise de poids pendant la grossesse selon les directives IOM 2009.",
    description:
      "Calculateur gratuit de prise de poids pendant la grossesse selon les directives IOM 2009. Saisissez votre poids avant grossesse, votre taille et la semaine d'aménorrhée actuelle.",
    keywords: [
      "calculateur prise de poids grossesse",
      "prise de poids gestationnelle",
      "directives IOM grossesse",
      "poids prénatal",
      "grossesse poids santé",
      "IMC grossesse",
      "prise de poids par trimestre",
    ],
    inputs: {
      unit: { label: "Système d'unités", help: "Métrique (kg/cm) ou impérial (lb/po)." },
      prePregnancyWeight: { label: "Poids avant la grossesse", help: "Votre poids avant la grossesse." },
      height: { label: "Taille", help: "Votre taille pour calculer l'IMC pré-grossesse." },
      gestationalWeek: { label: "Semaine de grossesse", help: "Semaine actuelle de grossesse (1–42)." },
      currentWeight: { label: "Poids actuel", help: "Votre poids aujourd'hui." },
    },
    outputs: {
      preBmi: { label: "IMC avant la grossesse", help: "Votre IMC avant la grossesse." },
      bmiCategory: { label: "Catégorie d'IMC", help: "Catégorie d'IMC avant la grossesse." },
      recommendedTotalGainMin: { label: "Prise recommandée (min)", help: "Prise totale minimale recommandée par l'IOM 2009.", suffix: "kg" },
      recommendedTotalGainMax: { label: "Prise recommandée (max)", help: "Prise totale maximale recommandée par l'IOM 2009.", suffix: "kg" },
      currentGain: { label: "Prise actuelle", help: "Poids pris depuis avant la grossesse.", suffix: "kg" },
      expectedGainAtWeek: { label: "Prise attendue à cette semaine", help: "Valeur médiane de la prise recommandée par l'IOM à votre semaine actuelle.", suffix: "kg" },
      onTrack: { label: "Statut", help: "Indique si votre prise de poids est dans la fourchette attendue." },
      weeklyRateKg: { label: "Rythme hebdomadaire recommandé", help: "Prise de poids hebdomadaire recommandée aux 2ᵉ et 3ᵉ trimestres.", suffix: "kg/semaine" },
    },
    options: {
      unit: { metric: "Métrique (kg, cm)", imperial: "Impérial (lb, po)" },
    },
    errors: {
      weightOutOfRange: "Le poids doit être une valeur positive dans la plage valide.",
      heightOutOfRange: "La taille doit être comprise entre 100 et 220 cm.",
      weekOutOfRange: "La semaine de grossesse doit être comprise entre 1 et 42.",
    },
    faq: [
      {
        q: "Quelles sont les directives IOM 2009 sur la prise de poids pendant la grossesse ?",
        a: "L'Institut de Médecine recommande les prises de poids totales suivantes selon l'IMC pré-grossesse : Insuffisance pondérale (<18,5) : 12,5–18 kg ; Poids normal (18,5–24,9) : 11,5–16 kg ; Surpoids (25–29,9) : 7–11,5 kg ; Obésité (≥30) : 5–9 kg.",
      },
      {
        q: "La prise de poids varie-t-elle d'un trimestre à l'autre ?",
        a: "Oui. Au premier trimestre, la prise est minime (0,5 à 2 kg au total). Les rythmes hebdomadaires de l'IOM s'appliquent principalement aux 2ᵉ et 3ᵉ trimestres.",
      },
      {
        q: "Dois-je m'inquiéter si je suis en dessous ou au-dessus de la prise recommandée ?",
        a: "Une prise insuffisante ou excessive est associée à des risques pour la mère et le bébé. Des fluctuations ponctuelles sont normales. Si vous restez en dehors de la fourchette recommandée pendant plusieurs semaines, consultez votre sage-femme ou médecin.",
      },
    ],
  },

  es: {
    title: "Calculadora de aumento de peso en el embarazo",
    short: "Sigue tu aumento de peso en el embarazo según las directrices IOM 2009 por trimestre.",
    description:
      "Calculadora gratuita de aumento de peso en el embarazo basada en las directrices IOM 2009. Introduce tu peso pregestacional, talla y semana gestacional actual para ver el aumento recomendado.",
    keywords: [
      "calculadora peso embarazo",
      "aumento peso gestacional",
      "directrices IOM embarazo",
      "peso prenatal",
      "embarazo peso saludable",
      "IMC embarazo",
      "aumento peso por trimestre",
    ],
    inputs: {
      unit: { label: "Sistema de unidades", help: "Métrico (kg/cm) o imperial (lb/in)." },
      prePregnancyWeight: { label: "Peso pregestacional", help: "Tu peso antes del embarazo." },
      height: { label: "Talla", help: "Tu talla para calcular el IMC pregestacional." },
      gestationalWeek: { label: "Semana gestacional", help: "Semana actual del embarazo (1–42)." },
      currentWeight: { label: "Peso actual", help: "Tu peso hoy." },
    },
    outputs: {
      preBmi: { label: "IMC pregestacional", help: "Tu IMC antes del embarazo." },
      bmiCategory: { label: "Categoría de IMC", help: "Categoría de IMC pregestacional." },
      recommendedTotalGainMin: { label: "Aumento recomendado (mín)", help: "Aumento total mínimo recomendado por IOM 2009.", suffix: "kg" },
      recommendedTotalGainMax: { label: "Aumento recomendado (máx)", help: "Aumento total máximo recomendado por IOM 2009.", suffix: "kg" },
      currentGain: { label: "Aumento actual", help: "Peso ganado desde antes del embarazo.", suffix: "kg" },
      expectedGainAtWeek: { label: "Aumento esperado en esta semana", help: "Punto medio del aumento recomendado por IOM en tu semana gestacional actual.", suffix: "kg" },
      onTrack: { label: "Estado", help: "Si tu aumento de peso actual está dentro del rango esperado." },
      weeklyRateKg: { label: "Tasa semanal recomendada", help: "Aumento semanal recomendado por IOM en el 2.º y 3.er trimestre.", suffix: "kg/semana" },
    },
    options: {
      unit: { metric: "Métrico (kg, cm)", imperial: "Imperial (lb, in)" },
    },
    errors: {
      weightOutOfRange: "El peso debe ser un valor positivo dentro del rango válido.",
      heightOutOfRange: "La talla debe estar entre 100 y 220 cm.",
      weekOutOfRange: "La semana gestacional debe estar entre 1 y 42.",
    },
    faq: [
      {
        q: "¿Cuáles son las directrices IOM 2009 sobre el aumento de peso en el embarazo?",
        a: "El Instituto de Medicina recomienda los siguientes rangos de aumento total según el IMC pregestacional: Bajo peso (<18,5): 12,5–18 kg; Peso normal (18,5–24,9): 11,5–16 kg; Sobrepeso (25–29,9): 7–11,5 kg; Obesidad (≥30): 5–9 kg.",
      },
      {
        q: "¿Varía la tasa de aumento de peso entre trimestres?",
        a: "Sí. En el primer trimestre, el aumento es mínimo (0,5 a 2 kg en total). Las tasas semanales de IOM se aplican principalmente al 2.º y 3.er trimestre.",
      },
      {
        q: "¿Debo preocuparme si estoy por debajo o por encima del aumento recomendado?",
        a: "Tanto el aumento insuficiente como el excesivo se asocian con riesgos para la madre y el bebé. Las fluctuaciones ocasionales son normales. Si te mantienes fuera del rango recomendado durante varias semanas, consulta a tu médico o matrona.",
      },
    ],
  },

  it: {
    title: "Calcolatore dell'aumento di peso in gravidanza",
    short: "Monitora l'aumento di peso in gravidanza secondo le linee guida IOM 2009 per trimestre.",
    description:
      "Calcolatore gratuito dell'aumento di peso in gravidanza basato sulle linee guida IOM 2009. Inserisci peso pre-gravidanza, altezza e settimana gestazionale attuale per vedere l'aumento raccomandato.",
    keywords: [
      "calcolatore peso gravidanza",
      "aumento peso gestazionale",
      "linee guida IOM gravidanza",
      "peso prenatale",
      "gravidanza peso sano",
      "BMI gravidanza",
      "aumento peso per trimestre",
    ],
    inputs: {
      unit: { label: "Sistema di unità", help: "Metrico (kg/cm) o imperiale (lb/in)." },
      prePregnancyWeight: { label: "Peso pre-gravidanza", help: "Il tuo peso prima della gravidanza." },
      height: { label: "Altezza", help: "La tua altezza per calcolare il BMI pre-gravidanza." },
      gestationalWeek: { label: "Settimana gestazionale", help: "Settimana attuale di gravidanza (1–42)." },
      currentWeight: { label: "Peso attuale", help: "Il tuo peso oggi." },
    },
    outputs: {
      preBmi: { label: "BMI pre-gravidanza", help: "Il tuo BMI prima della gravidanza." },
      bmiCategory: { label: "Categoria BMI", help: "Categoria BMI pre-gravidanza." },
      recommendedTotalGainMin: { label: "Aumento consigliato (min)", help: "Aumento totale minimo consigliato dall'IOM 2009.", suffix: "kg" },
      recommendedTotalGainMax: { label: "Aumento consigliato (max)", help: "Aumento totale massimo consigliato dall'IOM 2009.", suffix: "kg" },
      currentGain: { label: "Aumento attuale", help: "Peso guadagnato dalla pre-gravidanza ad oggi.", suffix: "kg" },
      expectedGainAtWeek: { label: "Aumento atteso a questa settimana", help: "Valore mediano dell'aumento IOM raccomandato per la tua settimana gestazionale.", suffix: "kg" },
      onTrack: { label: "Stato", help: "Se il tuo aumento di peso attuale è nell'intervallo atteso." },
      weeklyRateKg: { label: "Tasso settimanale consigliato", help: "Aumento settimanale consigliato dall'IOM nel 2º e 3º trimestre.", suffix: "kg/settimana" },
    },
    options: {
      unit: { metric: "Metrico (kg, cm)", imperial: "Imperiale (lb, in)" },
    },
    errors: {
      weightOutOfRange: "Il peso deve essere un valore positivo nell'intervallo valido.",
      heightOutOfRange: "L'altezza deve essere compresa tra 100 e 220 cm.",
      weekOutOfRange: "La settimana gestazionale deve essere compresa tra 1 e 42.",
    },
    faq: [
      {
        q: "Quali sono le linee guida IOM 2009 sull'aumento di peso in gravidanza?",
        a: "L'Institute of Medicine raccomanda i seguenti aumenti totali in base al BMI pre-gravidanza: Sottopeso (<18,5): 12,5–18 kg; Normopeso (18,5–24,9): 11,5–16 kg; Sovrappeso (25–29,9): 7–11,5 kg; Obesità (≥30): 5–9 kg.",
      },
      {
        q: "Il ritmo di aumento cambia tra i trimestri?",
        a: "Sì. Nel primo trimestre, l'aumento è minimo (0,5–2 kg totali). I tassi settimanali IOM si applicano principalmente al 2º e 3º trimestre.",
      },
      {
        q: "Devo preoccuparmi se sono al di sotto o al di sopra dell'aumento raccomandato?",
        a: "Sia l'aumento insufficiente che eccessivo è associato a rischi per madre e bambino. Le fluttuazioni occasionali sono normali. Se rimani fuori dall'intervallo raccomandato per diverse settimane, consulta il tuo medico o ostetrica.",
      },
    ],
  },

  ar: {
    title: "حاسبة زيادة الوزن أثناء الحمل",
    short: "تابعي زيادة وزنك خلال الحمل وفق إرشادات IOM 2009 في كل ثلاثية.",
    description:
      "حاسبة مجانية لزيادة الوزن أثناء الحمل استنادًا إلى إرشادات IOM 2009. أدخلي وزنك قبل الحمل وطولك والأسبوع الحالي من الحمل لمعرفة الزيادة الموصى بها.",
    keywords: [
      "حاسبة زيادة الوزن أثناء الحمل",
      "زيادة الوزن الحملية",
      "إرشادات IOM للحمل",
      "الوزن قبل الوضع",
      "وزن صحي أثناء الحمل",
      "مؤشر كتلة الجسم للحمل",
      "زيادة الوزن في كل ثلاثية",
    ],
    inputs: {
      unit: { label: "نظام الوحدات", help: "اختري المتري (كجم/سم) أو الإمبراطوري (رطل/بوصة)." },
      prePregnancyWeight: { label: "الوزن قبل الحمل", help: "وزنك قبل الحمل." },
      height: { label: "الطول", help: "طولك لحساب مؤشر كتلة الجسم قبل الحمل." },
      gestationalWeek: { label: "أسبوع الحمل", help: "الأسبوع الحالي من الحمل (1–42)." },
      currentWeight: { label: "الوزن الحالي", help: "وزنك اليوم." },
    },
    outputs: {
      preBmi: { label: "مؤشر كتلة الجسم قبل الحمل", help: "مؤشرك قبل الحمل." },
      bmiCategory: { label: "فئة المؤشر", help: "فئة مؤشر كتلة الجسم قبل الحمل." },
      recommendedTotalGainMin: { label: "الزيادة الموصى بها (الحد الأدنى)", help: "الزيادة الإجمالية الدنيا الموصى بها وفق IOM 2009.", suffix: "كجم" },
      recommendedTotalGainMax: { label: "الزيادة الموصى بها (الحد الأقصى)", help: "الزيادة الإجمالية القصوى الموصى بها وفق IOM 2009.", suffix: "كجم" },
      currentGain: { label: "الزيادة الحالية", help: "الوزن المكتسب منذ ما قبل الحمل.", suffix: "كجم" },
      expectedGainAtWeek: { label: "الزيادة المتوقعة هذا الأسبوع", help: "متوسط الزيادة الموصى بها من IOM في أسبوعك الحالي.", suffix: "كجم" },
      onTrack: { label: "الحالة", help: "هل زيادة وزنك الحالية ضمن النطاق المتوقع؟" },
      weeklyRateKg: { label: "المعدل الأسبوعي الموصى به", help: "الزيادة الأسبوعية الموصى بها من IOM في الثلاثية الثانية والثالثة.", suffix: "كجم/أسبوع" },
    },
    options: {
      unit: { metric: "متري (كجم، سم)", imperial: "إمبراطوري (رطل، بوصة)" },
    },
    errors: {
      weightOutOfRange: "يجب أن يكون الوزن قيمة موجبة ضمن النطاق الصحيح.",
      heightOutOfRange: "يجب أن يكون الطول بين 100 و220 سم.",
      weekOutOfRange: "يجب أن يكون أسبوع الحمل بين 1 و42.",
    },
    faq: [
      {
        q: "ما هي إرشادات IOM 2009 لزيادة الوزن أثناء الحمل؟",
        a: "يوصي معهد الطب بنطاقات الزيادة الإجمالية التالية وفق مؤشر كتلة الجسم قبل الحمل: نقص الوزن (<18.5): 12.5–18 كجم؛ الوزن الطبيعي (18.5–24.9): 11.5–16 كجم؛ زيادة الوزن (25–29.9): 7–11.5 كجم؛ السمنة (≥30): 5–9 كجم.",
      },
      {
        q: "هل تتغير زيادة الوزن بين الثلاثيات؟",
        a: "نعم. في الثلاثية الأولى، تكون الزيادة ضئيلة (0.5–2 كجم إجمالًا). تنطبق معدلات IOM الأسبوعية أساسًا على الثلاثيتين الثانية والثالثة.",
      },
      {
        q: "هل يجب أن أقلق إذا كنت دون أو فوق الزيادة الموصى بها؟",
        a: "كل من الزيادة غير الكافية والمفرطة مرتبطة بمخاطر للأم والجنين. التقلبات العرضية طبيعية، لكن إذا ظللتِ خارج النطاق الموصى به لأسابيع متعددة، تشاوري مع طبيبتك أو القابلة.",
      },
    ],
  },

  ru: {
    title: "Калькулятор набора веса при беременности",
    short: "Отслеживайте набор веса при беременности по рекомендациям IOM 2009 по триместрам.",
    description:
      "Бесплатный калькулятор набора веса при беременности по рекомендациям IOM 2009. Введите вес до беременности, рост и текущую неделю беременности для расчёта рекомендуемой прибавки.",
    keywords: [
      "калькулятор набора веса при беременности",
      "гестационная прибавка веса",
      "рекомендации IOM беременность",
      "пренатальный вес",
      "здоровый вес при беременности",
      "ИМТ при беременности",
      "набор веса по триместрам",
    ],
    inputs: {
      unit: { label: "Система единиц", help: "Метрическая (кг/см) или имперская (фунт/дюйм)." },
      prePregnancyWeight: { label: "Вес до беременности", help: "Ваш вес до наступления беременности." },
      height: { label: "Рост", help: "Ваш рост для расчёта ИМТ до беременности." },
      gestationalWeek: { label: "Неделя беременности", help: "Текущая неделя беременности (1–42)." },
      currentWeight: { label: "Текущий вес", help: "Ваш вес на сегодняшний день." },
    },
    outputs: {
      preBmi: { label: "ИМТ до беременности", help: "Ваш ИМТ до беременности." },
      bmiCategory: { label: "Категория ИМТ", help: "Категория ИМТ до беременности." },
      recommendedTotalGainMin: { label: "Рекомендуемая прибавка (мин)", help: "Минимальная общая прибавка веса по рекомендациям IOM 2009.", suffix: "кг" },
      recommendedTotalGainMax: { label: "Рекомендуемая прибавка (макс)", help: "Максимальная общая прибавка веса по рекомендациям IOM 2009.", suffix: "кг" },
      currentGain: { label: "Текущая прибавка", help: "Набранный вес с момента до беременности.", suffix: "кг" },
      expectedGainAtWeek: { label: "Ожидаемая прибавка на этой неделе", help: "Среднее значение рекомендуемой IOM прибавки на текущей неделе беременности.", suffix: "кг" },
      onTrack: { label: "Статус", help: "Соответствует ли текущая прибавка ожидаемому диапазону." },
      weeklyRateKg: { label: "Рекомендуемая недельная прибавка", help: "Еженедельная прибавка по рекомендациям IOM во 2-м и 3-м триместрах.", suffix: "кг/нед" },
    },
    options: {
      unit: { metric: "Метрическая (кг, см)", imperial: "Имперская (фунт, дюйм)" },
    },
    errors: {
      weightOutOfRange: "Вес должен быть положительным числом в допустимом диапазоне.",
      heightOutOfRange: "Рост должен быть от 100 до 220 см.",
      weekOutOfRange: "Неделя беременности должна быть от 1 до 42.",
    },
    faq: [
      {
        q: "Каковы рекомендации IOM 2009 по набору веса при беременности?",
        a: "Институт медицины рекомендует следующие диапазоны общей прибавки в зависимости от ИМТ до беременности: Дефицит массы тела (<18,5): 12,5–18 кг; Нормальная масса (18,5–24,9): 11,5–16 кг; Избыточная масса (25–29,9): 7–11,5 кг; Ожирение (≥30): 5–9 кг.",
      },
      {
        q: "Меняется ли темп набора веса в разных триместрах?",
        a: "Да. В первом триместре прибавка минимальна (0,5–2 кг всего). Еженедельные показатели IOM применяются главным образом ко 2-му и 3-му триместрам.",
      },
      {
        q: "Нужно ли беспокоиться, если прибавка выше или ниже рекомендуемой?",
        a: "Как недостаточная, так и избыточная прибавка веса при беременности связана с рисками для матери и ребёнка. Редкие колебания нормальны. Если вы систематически выходите за рекомендуемые пределы, обсудите это с вашим акушером или акушеркой.",
      },
    ],
  },

  zh: {
    title: "孕期体重增长计算器",
    short: "根据IOM 2009指南按孕期追踪您的体重增长情况。",
    description:
      "基于IOM 2009指南的免费孕期体重增长计算器。输入孕前体重、身高和当前孕周，了解推荐的总增重量及您是否达标。",
    keywords: [
      "孕期体重增长计算器",
      "妊娠期体重增长",
      "IOM孕期指南",
      "产前体重",
      "健康孕期体重",
      "孕期BMI",
      "按孕期体重增长",
    ],
    inputs: {
      unit: { label: "单位制", help: "选择公制（kg/cm）或英制（lb/in）。" },
      prePregnancyWeight: { label: "孕前体重", help: "您怀孕前的体重。" },
      height: { label: "身高", help: "用于计算孕前BMI的身高。" },
      gestationalWeek: { label: "孕周", help: "当前孕周（1–42周）。" },
      currentWeight: { label: "当前体重", help: "您今天的体重。" },
    },
    outputs: {
      preBmi: { label: "孕前BMI", help: "您怀孕前的BMI值。" },
      bmiCategory: { label: "BMI分类", help: "孕前BMI分类。" },
      recommendedTotalGainMin: { label: "建议总增重（最低）", help: "IOM 2009建议的最低总增重量。", suffix: "kg" },
      recommendedTotalGainMax: { label: "建议总增重（最高）", help: "IOM 2009建议的最高总增重量。", suffix: "kg" },
      currentGain: { label: "当前增重", help: "从孕前至今增加的体重。", suffix: "kg" },
      expectedGainAtWeek: { label: "本孕周预期增重", help: "当前孕周IOM建议增重的中点值。", suffix: "kg" },
      onTrack: { label: "状态", help: "您当前的体重增长是否在预期范围内。" },
      weeklyRateKg: { label: "建议每周增重", help: "IOM建议的孕中期和晚期每周体重增长速率。", suffix: "kg/周" },
    },
    options: {
      unit: { metric: "公制（kg, cm）", imperial: "英制（lb, in）" },
    },
    errors: {
      weightOutOfRange: "体重必须在有效范围内为正数。",
      heightOutOfRange: "身高必须在100至220厘米之间。",
      weekOutOfRange: "孕周必须在1至42周之间。",
    },
    faq: [
      {
        q: "IOM 2009孕期增重指南是什么？",
        a: "美国医学研究所（IOM）2009年根据孕前BMI提出以下总增重范围建议：低体重（<18.5）：12.5–18 kg；正常体重（18.5–24.9）：11.5–16 kg；超重（25–29.9）：7–11.5 kg；肥胖（≥30）：5–9 kg。",
      },
      {
        q: "体重增长速率在各孕期是否不同？",
        a: "是的。孕早期增重极少（约0.5–2 kg）。IOM每周增重建议主要适用于孕中期和孕晚期。",
      },
      {
        q: "低于或超过建议增重是否需要担心？",
        a: "孕期增重不足和过多都与母婴风险相关。偶尔波动属正常。如连续数周超出建议范围，请咨询产科医生或助产士。",
      },
    ],
  },

  ja: {
    title: "妊娠中の体重増加計算機",
    short: "IOM 2009ガイドラインに基づいて、妊娠期の体重増加をトリメスター別に追跡します。",
    description:
      "IOM 2009ガイドラインに基づく無料の妊娠中体重増加計算機。妊娠前の体重・身長・現在の妊娠週数を入力して、推奨される総増加量と現在の状況を確認できます。",
    keywords: [
      "妊娠中 体重増加 計算機",
      "妊娠期 体重増加",
      "IOM 妊娠 ガイドライン",
      "産前 体重",
      "妊娠 健康体重",
      "妊娠 BMI",
      "妊娠期別 体重増加",
    ],
    inputs: {
      unit: { label: "単位系", help: "メートル法（kg/cm）またはヤード・ポンド法（lb/in）。" },
      prePregnancyWeight: { label: "妊娠前体重", help: "妊娠前の体重。" },
      height: { label: "身長", help: "妊娠前BMI計算のための身長。" },
      gestationalWeek: { label: "妊娠週数", help: "現在の妊娠週数（1〜42）。" },
      currentWeight: { label: "現在の体重", help: "今日の体重。" },
    },
    outputs: {
      preBmi: { label: "妊娠前BMI", help: "妊娠前のBMI値。" },
      bmiCategory: { label: "BMI区分", help: "妊娠前のBMI区分。" },
      recommendedTotalGainMin: { label: "推奨総増加量（最小）", help: "IOM 2009が推奨する最小総体重増加量。", suffix: "kg" },
      recommendedTotalGainMax: { label: "推奨総増加量（最大）", help: "IOM 2009が推奨する最大総体重増加量。", suffix: "kg" },
      currentGain: { label: "現在の体重増加量", help: "妊娠前からの体重増加量。", suffix: "kg" },
      expectedGainAtWeek: { label: "この週の期待増加量", help: "現在の妊娠週数でのIOM推奨増加量の中間値。", suffix: "kg" },
      onTrack: { label: "状態", help: "現在の体重増加が期待範囲内かどうか。" },
      weeklyRateKg: { label: "推奨週間増加率", help: "第2・第3トリメスターでのIOM推奨週間体重増加量。", suffix: "kg/週" },
    },
    options: {
      unit: { metric: "メートル法（kg・cm）", imperial: "ヤード・ポンド法（lb・in）" },
    },
    errors: {
      weightOutOfRange: "体重は有効な範囲内の正の数を入力してください。",
      heightOutOfRange: "身長は100〜220 cmの範囲で入力してください。",
      weekOutOfRange: "妊娠週数は1〜42の範囲で入力してください。",
    },
    faq: [
      {
        q: "IOM 2009の妊娠中体重増加ガイドラインとは？",
        a: "アメリカ医学研究所は妊娠前BMIに基づく総体重増加範囲を推奨しています：低体重（<18.5）：12.5〜18 kg；普通体重（18.5〜24.9）：11.5〜16 kg；過体重（25〜29.9）：7〜11.5 kg；肥満（≥30）：5〜9 kg。",
      },
      {
        q: "体重増加率はトリメスターによって変わりますか？",
        a: "はい。第1トリメスターは増加が最小限（合計0.5〜2 kg）です。IOMの週間推奨量は主に第2・第3トリメスターに適用されます。",
      },
      {
        q: "推奨量を下回るまたは超えた場合は心配すべきですか？",
        a: "妊娠中の体重増加不足・過多はともに母子のリスクと関連します。一時的な変動は正常です。数週間にわたって推奨範囲を外れる場合は産科医や助産師に相談してください。",
      },
    ],
  },

  ko: {
    title: "임신 중 체중 증가 계산기",
    short: "IOM 2009 지침에 따라 분기별로 임신 중 체중 증가를 추적하세요.",
    description:
      "IOM 2009 지침에 기반한 무료 임신 중 체중 증가 계산기. 임신 전 체중, 키, 현재 임신 주수를 입력하면 권장 총 증가량과 현재 상태를 확인할 수 있습니다.",
    keywords: [
      "임신 체중 증가 계산기",
      "임신 중 체중 증가",
      "IOM 임신 지침",
      "산전 체중",
      "건강한 임신 체중",
      "임신 BMI",
      "분기별 체중 증가",
    ],
    inputs: {
      unit: { label: "단위 시스템", help: "미터법(kg/cm) 또는 야드파운드법(lb/in)을 선택하세요." },
      prePregnancyWeight: { label: "임신 전 체중", help: "임신 전 체중." },
      height: { label: "키", help: "임신 전 BMI 계산을 위한 키." },
      gestationalWeek: { label: "임신 주수", help: "현재 임신 주수(1~42주)." },
      currentWeight: { label: "현재 체중", help: "오늘의 체중." },
    },
    outputs: {
      preBmi: { label: "임신 전 BMI", help: "임신 전 BMI 값." },
      bmiCategory: { label: "BMI 분류", help: "임신 전 BMI 분류." },
      recommendedTotalGainMin: { label: "권장 총 증가량(최소)", help: "IOM 2009 권장 최소 총 체중 증가량.", suffix: "kg" },
      recommendedTotalGainMax: { label: "권장 총 증가량(최대)", help: "IOM 2009 권장 최대 총 체중 증가량.", suffix: "kg" },
      currentGain: { label: "현재 체중 증가량", help: "임신 전부터 현재까지 증가한 체중.", suffix: "kg" },
      expectedGainAtWeek: { label: "이번 주 예상 증가량", help: "현재 임신 주수에서 IOM 권장 증가량의 중간값.", suffix: "kg" },
      onTrack: { label: "상태", help: "현재 체중 증가가 예상 범위 내에 있는지 여부." },
      weeklyRateKg: { label: "권장 주간 증가율", help: "임신 2기 및 3기에서 IOM 권장 주간 체중 증가량.", suffix: "kg/주" },
    },
    options: {
      unit: { metric: "미터법(kg, cm)", imperial: "야드파운드법(lb, in)" },
    },
    errors: {
      weightOutOfRange: "체중은 유효 범위 내의 양수여야 합니다.",
      heightOutOfRange: "키는 100~220 cm 사이여야 합니다.",
      weekOutOfRange: "임신 주수는 1~42주 사이여야 합니다.",
    },
    faq: [
      {
        q: "IOM 2009 임신 중 체중 증가 지침은 무엇인가요?",
        a: "미국 의학연구소(IOM)는 임신 전 BMI에 따른 총 체중 증가 범위를 권장합니다: 저체중(<18.5): 12.5–18 kg; 정상 체중(18.5–24.9): 11.5–16 kg; 과체중(25–29.9): 7–11.5 kg; 비만(≥30): 5–9 kg.",
      },
      {
        q: "체중 증가 속도는 각 분기에 따라 다른가요?",
        a: "네. 임신 1기에는 증가가 매우 적습니다(총 0.5–2 kg). IOM의 주간 권장량은 주로 임신 2기와 3기에 적용됩니다.",
      },
      {
        q: "권장 증가량보다 적거나 많으면 걱정해야 하나요?",
        a: "임신 중 체중 증가 부족과 과다 모두 모체와 태아에 위험과 관련됩니다. 일시적인 변동은 정상입니다. 수주간 권장 범위를 벗어나면 산부인과 의사나 조산사와 상담하세요.",
      },
    ],
  },

  hi: {
    title: "गर्भावस्था वज़न वृद्धि कैलकुलेटर",
    short: "IOM 2009 दिशानिर्देशों के अनुसार तिमाही दर तिमाही अपनी गर्भावस्था वज़न वृद्धि ट्रैक करें।",
    description:
      "IOM 2009 दिशानिर्देशों पर आधारित निःशुल्क गर्भावस्था वज़न वृद्धि कैलकुलेटर। गर्भावस्था से पहले का वज़न, ऊंचाई और वर्तमान गर्भावस्था सप्ताह दर्ज करें।",
    keywords: [
      "गर्भावस्था वज़न वृद्धि कैलकुलेटर",
      "गर्भावस्था के दौरान वज़न",
      "IOM गर्भावस्था दिशानिर्देश",
      "प्रसव पूर्व वज़न",
      "स्वस्थ गर्भावस्था वज़न",
      "गर्भावस्था BMI",
      "तिमाही वज़न वृद्धि",
    ],
    inputs: {
      unit: { label: "माप प्रणाली", help: "मेट्रिक (kg/cm) या इम्पीरियल (lb/in) चुनें।" },
      prePregnancyWeight: { label: "गर्भावस्था से पहले का वज़न", help: "गर्भावस्था से पहले का आपका वज़न।" },
      height: { label: "ऊंचाई", help: "गर्भावस्था से पहले का BMI गणना के लिए आपकी ऊंचाई।" },
      gestationalWeek: { label: "गर्भावस्था सप्ताह", help: "गर्भावस्था का वर्तमान सप्ताह (1–42)।" },
      currentWeight: { label: "वर्तमान वज़न", help: "आज का आपका वज़न।" },
    },
    outputs: {
      preBmi: { label: "गर्भावस्था से पहले का BMI", help: "गर्भावस्था से पहले का BMI मान।" },
      bmiCategory: { label: "BMI श्रेणी", help: "गर्भावस्था से पहले की BMI श्रेणी।" },
      recommendedTotalGainMin: { label: "अनुशंसित कुल वृद्धि (न्यूनतम)", help: "IOM 2009 के अनुसार न्यूनतम अनुशंसित कुल वज़न वृद्धि।", suffix: "kg" },
      recommendedTotalGainMax: { label: "अनुशंसित कुल वृद्धि (अधिकतम)", help: "IOM 2009 के अनुसार अधिकतम अनुशंसित कुल वज़न वृद्धि।", suffix: "kg" },
      currentGain: { label: "वर्तमान वज़न वृद्धि", help: "गर्भावस्था से पहले से अब तक बढ़ा हुआ वज़न।", suffix: "kg" },
      expectedGainAtWeek: { label: "इस सप्ताह अपेक्षित वृद्धि", help: "वर्तमान गर्भावस्था सप्ताह के लिए IOM अनुशंसित वृद्धि का मध्य बिंदु।", suffix: "kg" },
      onTrack: { label: "स्थिति", help: "क्या आपकी वर्तमान वज़न वृद्धि अपेक्षित सीमा में है।" },
      weeklyRateKg: { label: "अनुशंसित साप्ताहिक वृद्धि", help: "दूसरी और तीसरी तिमाही में IOM अनुशंसित साप्ताहिक वज़न वृद्धि दर।", suffix: "kg/सप्ताह" },
    },
    options: {
      unit: { metric: "मेट्रिक (kg, cm)", imperial: "इम्पीरियल (lb, in)" },
    },
    errors: {
      weightOutOfRange: "वज़न मान्य सीमा में एक सकारात्मक मान होना चाहिए।",
      heightOutOfRange: "ऊंचाई 100 से 220 cm के बीच होनी चाहिए।",
      weekOutOfRange: "गर्भावस्था सप्ताह 1 से 42 के बीच होना चाहिए।",
    },
    faq: [
      {
        q: "IOM 2009 गर्भावस्था वज़न वृद्धि दिशानिर्देश क्या हैं?",
        a: "इंस्टीट्यूट ऑफ मेडिसिन ने गर्भावस्था से पहले के BMI के आधार पर कुल वज़न वृद्धि की ये सीमाएं अनुशंसित की हैं: कम वज़न (<18.5): 12.5–18 kg; सामान्य वज़न (18.5–24.9): 11.5–16 kg; अधिक वज़न (25–29.9): 7–11.5 kg; मोटापा (≥30): 5–9 kg।",
      },
      {
        q: "क्या तिमाहियों में वज़न वृद्धि की दर बदलती है?",
        a: "हां। पहली तिमाही में वृद्धि न्यूनतम होती है (कुल 0.5–2 kg)। IOM की साप्ताहिक अनुशंसाएं मुख्यतः दूसरी और तीसरी तिमाही पर लागू होती हैं।",
      },
      {
        q: "क्या अनुशंसित से कम या अधिक वृद्धि चिंताजनक है?",
        a: "गर्भावस्था के दौरान अपर्याप्त और अत्यधिक वज़न वृद्धि दोनों माँ और शिशु के लिए जोखिम से जुड़े हैं। कभी-कभी के उतार-चढ़ाव सामान्य हैं। यदि आप कई हफ्तों तक अनुशंसित सीमा से बाहर रहती हैं तो अपने स्वास्थ्य सेवा प्रदाता से परामर्श लें।",
      },
    ],
  },
};

export default i18n;
