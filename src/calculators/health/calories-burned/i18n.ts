import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Calories Burned Calculator",
    short: "Estimate calories burned for common activities using MET values.",
    description:
      "Free calories-burned calculator based on the 2011 Compendium of Physical Activities. Enter your activity, intensity, duration and weight to estimate energy expenditure in kcal.",
    keywords: [
      "calories burned calculator",
      "MET calculator",
      "exercise calories",
      "activity calories",
      "fitness calorie burn",
      "workout calories",
      "energy expenditure",
    ],
    inputs: {
      activity: {
        label: "Activity",
        help: "The physical activity you performed.",
      },
      intensity: {
        label: "Intensity",
        help: "Light = easy effort, moderate = noticeable effort, vigorous = hard effort.",
      },
      duration: { label: "Duration", help: "Total time spent on the activity, in minutes." },
      weight: { label: "Body weight", help: "Your body weight in kilograms." },
    },
    outputs: {
      caloriesBurned: {
        label: "Calories burned",
        help: "Estimated total energy expenditure for the session.",
      },
      metValue: {
        label: "MET value",
        help: "Metabolic Equivalent of Task used for the calculation (intensity-adjusted).",
      },
      equivalentFoods: {
        label: "Food equivalent",
        help: "Approximate food equivalent at ~70 kcal per slice of bread.",
      },
    },
    options: {
      activity: {
        walking: "Walking",
        running: "Running",
        cycling: "Cycling",
        swimming: "Swimming",
        weightlifting: "Weightlifting",
        yoga: "Yoga",
        basketball: "Basketball",
        soccer: "Soccer",
        tennis: "Tennis",
        dancing: "Dancing",
        hiking: "Hiking",
        "jumping-rope": "Jumping rope",
      },
      intensity: {
        light: "Light",
        moderate: "Moderate",
        vigorous: "Vigorous",
      },
    },
    errors: {
      durationOutOfRange: "Duration must be between 1 and 1440 minutes.",
      weightOutOfRange: "Weight must be between 20 and 300 kg.",
    },
    faq: [
      {
        q: "What is a MET?",
        a: "A Metabolic Equivalent of Task (MET) is the ratio of the energy cost of an activity to the resting metabolic rate. 1 MET is roughly 3.5 ml O₂/kg/min, equivalent to ~1 kcal/kg/h.",
      },
      {
        q: "How accurate are these calorie estimates?",
        a: "MET-based estimates are population averages. Real-world values vary 10–30% depending on fitness, terrain, equipment, and technique. Use them as guidance, not a precise measurement.",
      },
      {
        q: "Should I count calories burned to lose weight?",
        a: "Weight loss is driven primarily by total calorie deficit over time. Tracking exercise calories alongside intake can help, but exercise estimates are often over-counted.",
      },
      {
        q: "Why does intensity change the result?",
        a: "Higher effort recruits more muscle and elevates oxygen consumption. The calculator scales the baseline MET value by 0.7 (light), 1.0 (moderate), or 1.3 (vigorous).",
      },
    ],
  },
  pt: {
    title: "Calories Burned Calculator",
    short: "Estimate calories burned for common activities using MET values.",
    description:
      "Free calories-burned calculator based on the 2011 Compendium of Physical Activities. Enter your activity, intensity, duration and weight to estimate energy expenditure in kcal.",
    keywords: [
      "calories burned calculator",
      "MET calculator",
      "exercise calories",
      "activity calories",
      "fitness calorie burn",
      "workout calories",
      "energy expenditure",
    ],
    inputs: {
      activity: {
        label: "Activity",
        help: "The physical activity you performed.",
      },
      intensity: {
        label: "Intensity",
        help: "Light = easy effort, moderate = noticeable effort, vigorous = hard effort.",
      },
      duration: { label: "Duration", help: "Total time spent on the activity, in minutes." },
      weight: { label: "Body weight", help: "Your body weight in kilograms." },
    },
    outputs: {
      caloriesBurned: {
        label: "Calories burned",
        help: "Estimated total energy expenditure for the session.",
      },
      metValue: {
        label: "MET value",
        help: "Metabolic Equivalent of Task used for the calculation (intensity-adjusted).",
      },
      equivalentFoods: {
        label: "Food equivalent",
        help: "Approximate food equivalent at ~70 kcal per slice of bread.",
      },
    },
    options: {
      activity: {
        walking: "Walking",
        running: "Running",
        cycling: "Cycling",
        swimming: "Swimming",
        weightlifting: "Weightlifting",
        yoga: "Yoga",
        basketball: "Basketball",
        soccer: "Soccer",
        tennis: "Tennis",
        dancing: "Dancing",
        hiking: "Hiking",
        "jumping-rope": "Jumping rope",
      },
      intensity: {
        light: "Light",
        moderate: "Moderate",
        vigorous: "Vigorous",
      },
    },
    errors: {
      durationOutOfRange: "Duration must be between 1 and 1440 minutes.",
      weightOutOfRange: "Weight must be between 20 and 300 kg.",
    },
    faq: [
      {
        q: "What is a MET?",
        a: "A Metabolic Equivalent of Task (MET) is the ratio of the energy cost of an activity to the resting metabolic rate. 1 MET is roughly 3.5 ml O₂/kg/min, equivalent to ~1 kcal/kg/h.",
      },
      {
        q: "How accurate are these calorie estimates?",
        a: "MET-based estimates are population averages. Real-world values vary 10–30% depending on fitness, terrain, equipment, and technique. Use them as guidance, not a precise measurement.",
      },
      {
        q: "Should I count calories burned to lose weight?",
        a: "Weight loss is driven primarily by total calorie deficit over time. Tracking exercise calories alongside intake can help, but exercise estimates are often over-counted.",
      },
      {
        q: "Why does intensity change the result?",
        a: "Higher effort recruits more muscle and elevates oxygen consumption. The calculator scales the baseline MET value by 0.7 (light), 1.0 (moderate), or 1.3 (vigorous).",
      },
    ],
  },
  id: {
    title: "Calories Burned Calculator",
    short: "Estimate calories burned for common activities using MET values.",
    description:
      "Free calories-burned calculator based on the 2011 Compendium of Physical Activities. Enter your activity, intensity, duration and weight to estimate energy expenditure in kcal.",
    keywords: [
      "calories burned calculator",
      "MET calculator",
      "exercise calories",
      "activity calories",
      "fitness calorie burn",
      "workout calories",
      "energy expenditure",
    ],
    inputs: {
      activity: {
        label: "Activity",
        help: "The physical activity you performed.",
      },
      intensity: {
        label: "Intensity",
        help: "Light = easy effort, moderate = noticeable effort, vigorous = hard effort.",
      },
      duration: { label: "Duration", help: "Total time spent on the activity, in minutes." },
      weight: { label: "Body weight", help: "Your body weight in kilograms." },
    },
    outputs: {
      caloriesBurned: {
        label: "Calories burned",
        help: "Estimated total energy expenditure for the session.",
      },
      metValue: {
        label: "MET value",
        help: "Metabolic Equivalent of Task used for the calculation (intensity-adjusted).",
      },
      equivalentFoods: {
        label: "Food equivalent",
        help: "Approximate food equivalent at ~70 kcal per slice of bread.",
      },
    },
    options: {
      activity: {
        walking: "Walking",
        running: "Running",
        cycling: "Cycling",
        swimming: "Swimming",
        weightlifting: "Weightlifting",
        yoga: "Yoga",
        basketball: "Basketball",
        soccer: "Soccer",
        tennis: "Tennis",
        dancing: "Dancing",
        hiking: "Hiking",
        "jumping-rope": "Jumping rope",
      },
      intensity: {
        light: "Light",
        moderate: "Moderate",
        vigorous: "Vigorous",
      },
    },
    errors: {
      durationOutOfRange: "Duration must be between 1 and 1440 minutes.",
      weightOutOfRange: "Weight must be between 20 and 300 kg.",
    },
    faq: [
      {
        q: "What is a MET?",
        a: "A Metabolic Equivalent of Task (MET) is the ratio of the energy cost of an activity to the resting metabolic rate. 1 MET is roughly 3.5 ml O₂/kg/min, equivalent to ~1 kcal/kg/h.",
      },
      {
        q: "How accurate are these calorie estimates?",
        a: "MET-based estimates are population averages. Real-world values vary 10–30% depending on fitness, terrain, equipment, and technique. Use them as guidance, not a precise measurement.",
      },
      {
        q: "Should I count calories burned to lose weight?",
        a: "Weight loss is driven primarily by total calorie deficit over time. Tracking exercise calories alongside intake can help, but exercise estimates are often over-counted.",
      },
      {
        q: "Why does intensity change the result?",
        a: "Higher effort recruits more muscle and elevates oxygen consumption. The calculator scales the baseline MET value by 0.7 (light), 1.0 (moderate), or 1.3 (vigorous).",
      },
    ],
  },


  tr: {
    title: "Yakılan Kalori Hesaplayıcı",
    short: "MET değerleriyle yaygın aktivitelerde yakılan kaloriyi tahmin edin.",
    description:
      "2011 Fiziksel Aktiviteler Özeti'ne dayalı ücretsiz kalori hesaplayıcı. Aktivite, yoğunluk, süre ve kilonuzu girerek enerji harcamanızı kcal olarak öğrenin.",
    keywords: [
      "yakılan kalori hesaplayıcı",
      "MET hesaplayıcı",
      "egzersiz kalori",
      "aktivite kalori",
      "antrenman kalori",
      "spor kalori",
      "enerji harcaması",
    ],
    inputs: {
      activity: { label: "Aktivite", help: "Yaptığınız fiziksel aktivite." },
      intensity: {
        label: "Yoğunluk",
        help: "Hafif = kolay, orta = belirgin, yoğun = zorlayıcı efor.",
      },
      duration: { label: "Süre", help: "Aktiviteye ayrılan toplam süre (dakika)." },
      weight: { label: "Vücut ağırlığı", help: "Kilogram cinsinden vücut ağırlığınız." },
    },
    outputs: {
      caloriesBurned: {
        label: "Yakılan kalori",
        help: "Seans için tahmini toplam enerji harcaması.",
      },
      metValue: {
        label: "MET değeri",
        help: "Hesaplamada kullanılan ve yoğunluğa göre ayarlanmış MET değeri.",
      },
      equivalentFoods: {
        label: "Besin eşdeğeri",
        help: "Yaklaşık eşdeğer (≈70 kcal/ekmek dilimi).",
      },
    },
    options: {
      activity: {
        walking: "Yürüyüş",
        running: "Koşu",
        cycling: "Bisiklet",
        swimming: "Yüzme",
        weightlifting: "Ağırlık çalışması",
        yoga: "Yoga",
        basketball: "Basketbol",
        soccer: "Futbol",
        tennis: "Tenis",
        dancing: "Dans",
        hiking: "Doğa yürüyüşü",
        "jumping-rope": "İp atlama",
      },
      intensity: {
        light: "Hafif",
        moderate: "Orta",
        vigorous: "Yoğun",
      },
    },
    errors: {
      durationOutOfRange: "Süre 1 ile 1440 dakika arasında olmalıdır.",
      weightOutOfRange: "Kilo 20 ile 300 kg arasında olmalıdır.",
    },
    faq: [
      {
        q: "MET nedir?",
        a: "Metabolik Eşdeğer (MET), bir aktivitenin enerji maliyetinin dinlenme metabolizma hızına oranıdır. 1 MET yaklaşık 3,5 ml O₂/kg/dk veya ~1 kcal/kg/saate karşılık gelir.",
      },
      {
        q: "Bu tahminler ne kadar doğru?",
        a: "MET tabanlı değerler popülasyon ortalamalarıdır. Gerçek değerler kondisyon, zemin ve teknik nedeniyle %10–30 farklılık gösterebilir. Kesin ölçüm değil, yön gösterici olarak kullanın.",
      },
      {
        q: "Kilo vermek için yakılan kaloriyi saymalı mıyım?",
        a: "Kilo kaybı esasen toplam kalori açığı ile sağlanır. Egzersiz kalorisini takip etmek faydalı olabilir, ancak çoğu zaman olduğundan fazla tahmin edilir.",
      },
      {
        q: "Yoğunluk neden sonucu değiştirir?",
        a: "Daha yüksek efor daha fazla kas devreye sokar ve oksijen tüketimini artırır. Hesaplayıcı temel MET değerini hafif için 0,7, orta için 1,0 ve yoğun için 1,3 ile çarpar.",
      },
    ],
  },

  de: {
    title: "Kalorienverbrauch-Rechner",
    short: "Schätzen Sie den Kalorienverbrauch bei Alltagsaktivitäten mithilfe von MET-Werten.",
    description:
      "Kostenloser Kalorienverbrauch-Rechner basierend auf dem Compendium of Physical Activities (2011). Geben Sie Aktivität, Intensität, Dauer und Gewicht ein, um den Energieverbrauch in kcal zu berechnen.",
    keywords: [
      "Kalorienverbrauch Rechner",
      "MET Rechner",
      "Kalorien Sport",
      "Aktivität Kalorien",
      "Training Kalorien",
      "Fitness Kalorien",
      "Energieverbrauch",
    ],
    inputs: {
      activity: { label: "Aktivität", help: "Die ausgeübte körperliche Aktivität." },
      intensity: {
        label: "Intensität",
        help: "Leicht = entspannt, moderat = spürbar, intensiv = anstrengend.",
      },
      duration: { label: "Dauer", help: "Gesamtdauer der Aktivität in Minuten." },
      weight: { label: "Körpergewicht", help: "Ihr Körpergewicht in Kilogramm." },
    },
    outputs: {
      caloriesBurned: { label: "Verbrannte Kalorien", help: "Geschätzter Gesamt-Energieverbrauch." },
      metValue: {
        label: "MET-Wert",
        help: "Verwendeter, intensitätsangepasster MET-Wert.",
      },
      equivalentFoods: {
        label: "Lebensmittel-Äquivalent",
        help: "Ungefähre Entsprechung (~70 kcal pro Brotscheibe).",
      },
    },
    options: {
      activity: {
        walking: "Gehen",
        running: "Laufen",
        cycling: "Radfahren",
        swimming: "Schwimmen",
        weightlifting: "Krafttraining",
        yoga: "Yoga",
        basketball: "Basketball",
        soccer: "Fußball",
        tennis: "Tennis",
        dancing: "Tanzen",
        hiking: "Wandern",
        "jumping-rope": "Seilspringen",
      },
      intensity: {
        light: "Leicht",
        moderate: "Moderat",
        vigorous: "Intensiv",
      },
    },
    errors: {
      durationOutOfRange: "Die Dauer muss zwischen 1 und 1440 Minuten liegen.",
      weightOutOfRange: "Das Gewicht muss zwischen 20 und 300 kg liegen.",
    },
    faq: [
      {
        q: "Was ist ein MET?",
        a: "Ein Metabolisches Äquivalent (MET) ist das Verhältnis des Energiebedarfs einer Aktivität zum Ruheumsatz. 1 MET entspricht etwa 3,5 ml O₂/kg/min oder ~1 kcal/kg/h.",
      },
      {
        q: "Wie genau sind die Schätzungen?",
        a: "MET-basierte Werte sind Populationsmittel. Reale Werte können je nach Fitness, Gelände und Technik um 10–30 % abweichen.",
      },
      {
        q: "Warum ändert die Intensität das Ergebnis?",
        a: "Höhere Anstrengung erhöht den Sauerstoffverbrauch. Der Rechner skaliert den Basis-MET-Wert mit 0,7 (leicht), 1,0 (moderat) oder 1,3 (intensiv).",
      },
    ],
  },

  fr: {
    title: "Calculateur de Calories Brûlées",
    short: "Estimez les calories brûlées lors d'activités courantes à l'aide des valeurs MET.",
    description:
      "Calculateur gratuit basé sur le Compendium of Physical Activities (2011). Entrez activité, intensité, durée et poids pour estimer la dépense énergétique en kcal.",
    keywords: [
      "calories brûlées",
      "calculateur MET",
      "calories sport",
      "calories exercice",
      "dépense énergétique",
      "calculateur fitness",
      "calories entraînement",
    ],
    inputs: {
      activity: { label: "Activité", help: "L'activité physique pratiquée." },
      intensity: {
        label: "Intensité",
        help: "Légère = facile, modérée = perceptible, intense = effort soutenu.",
      },
      duration: { label: "Durée", help: "Temps total consacré à l'activité en minutes." },
      weight: { label: "Poids corporel", help: "Votre poids en kilogrammes." },
    },
    outputs: {
      caloriesBurned: { label: "Calories brûlées", help: "Dépense énergétique totale estimée." },
      metValue: { label: "Valeur MET", help: "MET utilisé pour le calcul (ajusté à l'intensité)." },
      equivalentFoods: {
        label: "Équivalent alimentaire",
        help: "Équivalent approximatif (~70 kcal par tranche de pain).",
      },
    },
    options: {
      activity: {
        walking: "Marche",
        running: "Course",
        cycling: "Vélo",
        swimming: "Natation",
        weightlifting: "Musculation",
        yoga: "Yoga",
        basketball: "Basketball",
        soccer: "Football",
        tennis: "Tennis",
        dancing: "Danse",
        hiking: "Randonnée",
        "jumping-rope": "Corde à sauter",
      },
      intensity: {
        light: "Légère",
        moderate: "Modérée",
        vigorous: "Intense",
      },
    },
    errors: {
      durationOutOfRange: "La durée doit être comprise entre 1 et 1440 minutes.",
      weightOutOfRange: "Le poids doit être compris entre 20 et 300 kg.",
    },
    faq: [
      {
        q: "Qu'est-ce qu'un MET ?",
        a: "Un Équivalent Métabolique (MET) est le rapport entre le coût énergétique d'une activité et le métabolisme de repos. 1 MET ≈ 3,5 ml O₂/kg/min ≈ 1 kcal/kg/h.",
      },
      {
        q: "Ces estimations sont-elles précises ?",
        a: "Les valeurs MET sont des moyennes populationnelles. Les valeurs réelles peuvent varier de 10 à 30 % selon la condition physique, le terrain et la technique.",
      },
      {
        q: "Pourquoi l'intensité change-t-elle le résultat ?",
        a: "Un effort plus élevé sollicite plus de muscles et augmente la consommation d'oxygène. Le calculateur multiplie le MET de base par 0,7 (légère), 1,0 (modérée) ou 1,3 (intense).",
      },
    ],
  },

  es: {
    title: "Calculadora de Calorías Quemadas",
    short: "Estima las calorías quemadas en actividades comunes mediante valores MET.",
    description:
      "Calculadora gratuita basada en el Compendium of Physical Activities (2011). Introduce actividad, intensidad, duración y peso para estimar el gasto energético en kcal.",
    keywords: [
      "calorías quemadas",
      "calculadora MET",
      "calorías ejercicio",
      "calorías entrenamiento",
      "gasto energético",
      "calorías deporte",
      "calculadora fitness",
    ],
    inputs: {
      activity: { label: "Actividad", help: "La actividad física realizada." },
      intensity: {
        label: "Intensidad",
        help: "Ligera = fácil, moderada = perceptible, vigorosa = exigente.",
      },
      duration: { label: "Duración", help: "Tiempo total dedicado a la actividad en minutos." },
      weight: { label: "Peso corporal", help: "Tu peso en kilogramos." },
    },
    outputs: {
      caloriesBurned: { label: "Calorías quemadas", help: "Gasto energético total estimado." },
      metValue: { label: "Valor MET", help: "MET usado en el cálculo (ajustado a la intensidad)." },
      equivalentFoods: {
        label: "Equivalente alimenticio",
        help: "Equivalente aproximado (~70 kcal por rebanada de pan).",
      },
    },
    options: {
      activity: {
        walking: "Caminar",
        running: "Correr",
        cycling: "Ciclismo",
        swimming: "Natación",
        weightlifting: "Pesas",
        yoga: "Yoga",
        basketball: "Baloncesto",
        soccer: "Fútbol",
        tennis: "Tenis",
        dancing: "Baile",
        hiking: "Senderismo",
        "jumping-rope": "Saltar la cuerda",
      },
      intensity: {
        light: "Ligera",
        moderate: "Moderada",
        vigorous: "Vigorosa",
      },
    },
    errors: {
      durationOutOfRange: "La duración debe estar entre 1 y 1440 minutos.",
      weightOutOfRange: "El peso debe estar entre 20 y 300 kg.",
    },
    faq: [
      {
        q: "¿Qué es un MET?",
        a: "Un Equivalente Metabólico (MET) es la razón entre el coste energético de una actividad y el metabolismo en reposo. 1 MET ≈ 3,5 ml O₂/kg/min ≈ 1 kcal/kg/h.",
      },
      {
        q: "¿Qué tan precisas son estas estimaciones?",
        a: "Los valores MET son medias poblacionales. El gasto real puede variar entre 10 y 30 % según condición física, terreno y técnica.",
      },
      {
        q: "¿Por qué la intensidad cambia el resultado?",
        a: "Un esfuerzo mayor recluta más músculo y eleva el consumo de oxígeno. La calculadora escala el MET base por 0,7 (ligera), 1,0 (moderada) o 1,3 (vigorosa).",
      },
    ],
  },

  it: {
    title: "Calcolatore Calorie Bruciate",
    short: "Stima le calorie bruciate nelle attività comuni tramite i valori MET.",
    description:
      "Calcolatore gratuito basato sul Compendium of Physical Activities (2011). Inserisci attività, intensità, durata e peso per stimare il dispendio energetico in kcal.",
    keywords: [
      "calorie bruciate",
      "calcolatore MET",
      "calorie esercizio",
      "calorie allenamento",
      "dispendio energetico",
      "calorie sport",
      "calcolatore fitness",
    ],
    inputs: {
      activity: { label: "Attività", help: "L'attività fisica svolta." },
      intensity: {
        label: "Intensità",
        help: "Leggera = facile, moderata = percepibile, intensa = impegnativa.",
      },
      duration: { label: "Durata", help: "Tempo totale dedicato all'attività in minuti." },
      weight: { label: "Peso corporeo", help: "Il tuo peso in chilogrammi." },
    },
    outputs: {
      caloriesBurned: { label: "Calorie bruciate", help: "Dispendio energetico totale stimato." },
      metValue: { label: "Valore MET", help: "MET utilizzato nel calcolo (regolato sull'intensità)." },
      equivalentFoods: {
        label: "Equivalente alimentare",
        help: "Equivalente approssimativo (~70 kcal per fetta di pane).",
      },
    },
    options: {
      activity: {
        walking: "Camminata",
        running: "Corsa",
        cycling: "Ciclismo",
        swimming: "Nuoto",
        weightlifting: "Pesi",
        yoga: "Yoga",
        basketball: "Pallacanestro",
        soccer: "Calcio",
        tennis: "Tennis",
        dancing: "Danza",
        hiking: "Escursionismo",
        "jumping-rope": "Saltare la corda",
      },
      intensity: {
        light: "Leggera",
        moderate: "Moderata",
        vigorous: "Intensa",
      },
    },
    errors: {
      durationOutOfRange: "La durata deve essere compresa tra 1 e 1440 minuti.",
      weightOutOfRange: "Il peso deve essere compreso tra 20 e 300 kg.",
    },
    faq: [
      {
        q: "Cos'è un MET?",
        a: "Un Equivalente Metabolico (MET) è il rapporto tra il costo energetico di un'attività e il metabolismo a riposo. 1 MET ≈ 3,5 ml O₂/kg/min ≈ 1 kcal/kg/h.",
      },
      {
        q: "Quanto sono accurate queste stime?",
        a: "I valori MET sono medie di popolazione. Il valore reale può variare del 10–30% in base a forma fisica, terreno e tecnica.",
      },
      {
        q: "Perché l'intensità cambia il risultato?",
        a: "Uno sforzo maggiore aumenta il consumo di ossigeno. Il calcolatore moltiplica il MET di base per 0,7 (leggera), 1,0 (moderata) o 1,3 (intensa).",
      },
    ],
  },

  ar: {
    title: "حاسبة السعرات الحرارية المحروقة",
    short: "قدِّر السعرات المحروقة في الأنشطة الشائعة باستخدام قيم MET.",
    description:
      "حاسبة مجانية مبنية على دليل الأنشطة البدنية (2011). أدخل النشاط والشدة والمدة والوزن لتقدير الطاقة المستهلكة بالسعرات الحرارية.",
    keywords: [
      "حاسبة السعرات المحروقة",
      "حاسبة MET",
      "سعرات التمارين",
      "سعرات النشاط",
      "حرق السعرات",
      "استهلاك الطاقة",
      "حاسبة اللياقة",
    ],
    inputs: {
      activity: { label: "النشاط", help: "النشاط البدني الذي مارسته." },
      intensity: {
        label: "الشدة",
        help: "خفيفة = جهد سهل، متوسطة = جهد ملحوظ، شديدة = جهد عالٍ.",
      },
      duration: { label: "المدة", help: "إجمالي الوقت المخصص للنشاط بالدقائق." },
      weight: { label: "الوزن", help: "وزنك بالكيلوغرام." },
    },
    outputs: {
      caloriesBurned: {
        label: "السعرات المحروقة",
        help: "إجمالي الطاقة المقدّرة المستهلكة في الجلسة.",
      },
      metValue: { label: "قيمة MET", help: "قيمة MET المستخدمة بعد تعديلها وفق الشدة." },
      equivalentFoods: {
        label: "مكافئ غذائي",
        help: "مكافئ تقريبي (~70 سعرًا لكل شريحة خبز).",
      },
    },
    options: {
      activity: {
        walking: "المشي",
        running: "الجري",
        cycling: "الدراجة",
        swimming: "السباحة",
        weightlifting: "رفع الأثقال",
        yoga: "يوغا",
        basketball: "كرة السلة",
        soccer: "كرة القدم",
        tennis: "التنس",
        dancing: "الرقص",
        hiking: "المشي في الطبيعة",
        "jumping-rope": "نطّ الحبل",
      },
      intensity: {
        light: "خفيفة",
        moderate: "متوسطة",
        vigorous: "شديدة",
      },
    },
    errors: {
      durationOutOfRange: "يجب أن تكون المدة بين 1 و1440 دقيقة.",
      weightOutOfRange: "يجب أن يكون الوزن بين 20 و300 كجم.",
    },
    faq: [
      {
        q: "ما هو MET؟",
        a: "المكافئ الأيضي (MET) هو نسبة تكلفة الطاقة للنشاط إلى معدل الأيض أثناء الراحة. يساوي 1 MET نحو 3.5 مل أكسجين/كجم/دقيقة أو ~1 سعرة/كجم/ساعة.",
      },
      {
        q: "ما مدى دقة هذه التقديرات؟",
        a: "تقديرات MET قيم متوسطة سكانية. قد تختلف القيم الفعلية بنسبة 10–30٪ بحسب اللياقة والتضاريس والتقنية.",
      },
      {
        q: "لماذا تغيّر الشدة النتيجة؟",
        a: "الجهد الأعلى يستهلك أكسجينًا أكثر. تُضرب قيمة MET الأساسية بـ 0.7 (خفيفة) أو 1.0 (متوسطة) أو 1.3 (شديدة).",
      },
    ],
  },

  ru: {
    title: "Калькулятор сожжённых калорий",
    short: "Оцените расход калорий в распространённых активностях по значениям MET.",
    description:
      "Бесплатный калькулятор на основе Compendium of Physical Activities (2011). Введите активность, интенсивность, длительность и вес, чтобы рассчитать энергозатраты в ккал.",
    keywords: [
      "калькулятор сожжённых калорий",
      "калькулятор MET",
      "калории тренировка",
      "калории активность",
      "энергозатраты",
      "калории спорт",
      "фитнес калькулятор",
    ],
    inputs: {
      activity: { label: "Активность", help: "Выполненная физическая активность." },
      intensity: {
        label: "Интенсивность",
        help: "Лёгкая = легко, умеренная = заметно, высокая = тяжело.",
      },
      duration: { label: "Длительность", help: "Общее время активности в минутах." },
      weight: { label: "Масса тела", help: "Ваш вес в килограммах." },
    },
    outputs: {
      caloriesBurned: { label: "Сожжённые калории", help: "Оценка общего расхода энергии за сессию." },
      metValue: { label: "MET", help: "MET, использованный в расчёте (с учётом интенсивности)." },
      equivalentFoods: {
        label: "Пищевой эквивалент",
        help: "Приблизительный эквивалент (~70 ккал на ломтик хлеба).",
      },
    },
    options: {
      activity: {
        walking: "Ходьба",
        running: "Бег",
        cycling: "Велосипед",
        swimming: "Плавание",
        weightlifting: "Силовые",
        yoga: "Йога",
        basketball: "Баскетбол",
        soccer: "Футбол",
        tennis: "Теннис",
        dancing: "Танцы",
        hiking: "Поход",
        "jumping-rope": "Скакалка",
      },
      intensity: {
        light: "Лёгкая",
        moderate: "Умеренная",
        vigorous: "Высокая",
      },
    },
    errors: {
      durationOutOfRange: "Длительность должна быть от 1 до 1440 минут.",
      weightOutOfRange: "Вес должен быть от 20 до 300 кг.",
    },
    faq: [
      {
        q: "Что такое MET?",
        a: "Метаболический эквивалент (MET) — отношение затрат энергии при активности к расходу в покое. 1 MET ≈ 3,5 мл O₂/кг/мин ≈ 1 ккал/кг/ч.",
      },
      {
        q: "Насколько точны эти оценки?",
        a: "Значения MET — популяционные средние. Реальный расход может отличаться на 10–30% в зависимости от физической формы, рельефа и техники.",
      },
      {
        q: "Почему интенсивность меняет результат?",
        a: "При более высокой нагрузке выше потребление кислорода. Базовое значение MET умножается на 0,7 (лёгкая), 1,0 (умеренная) или 1,3 (высокая).",
      },
    ],
  },

  zh: {
    title: "燃烧卡路里计算器",
    short: "使用MET值估算常见活动消耗的卡路里。",
    description:
      "基于2011年体力活动汇编的免费卡路里计算器。输入活动、强度、时长和体重，估算能量消耗（千卡）。",
    keywords: [
      "卡路里消耗计算器",
      "MET计算器",
      "运动卡路里",
      "活动卡路里",
      "热量消耗",
      "训练卡路里",
      "健身计算器",
    ],
    inputs: {
      activity: { label: "活动", help: "您进行的体力活动。" },
      intensity: {
        label: "强度",
        help: "轻度=轻松，中度=明显费力，剧烈=高强度。",
      },
      duration: { label: "时长", help: "活动的总时间（分钟）。" },
      weight: { label: "体重", help: "您的体重（千克）。" },
    },
    outputs: {
      caloriesBurned: { label: "消耗卡路里", help: "本次活动的估计总能量消耗。" },
      metValue: { label: "MET值", help: "本次计算所用的强度调整后MET值。" },
      equivalentFoods: {
        label: "食物等效",
        help: "近似食物等效（约70千卡/片面包）。",
      },
    },
    options: {
      activity: {
        walking: "步行",
        running: "跑步",
        cycling: "骑行",
        swimming: "游泳",
        weightlifting: "举重",
        yoga: "瑜伽",
        basketball: "篮球",
        soccer: "足球",
        tennis: "网球",
        dancing: "跳舞",
        hiking: "徒步",
        "jumping-rope": "跳绳",
      },
      intensity: {
        light: "轻度",
        moderate: "中度",
        vigorous: "剧烈",
      },
    },
    errors: {
      durationOutOfRange: "时长必须在1至1440分钟之间。",
      weightOutOfRange: "体重必须在20至300千克之间。",
    },
    faq: [
      {
        q: "什么是MET？",
        a: "代谢当量（MET）是活动能量消耗与基础代谢的比值。1 MET约等于3.5 ml O₂/kg/min或约1千卡/kg/小时。",
      },
      {
        q: "这些估算有多准确？",
        a: "MET估算是人群平均值，实际消耗因体能、地形和技术等差异可能相差10–30%。",
      },
      {
        q: "为什么强度会改变结果？",
        a: "更高的强度需要更多氧气。计算器将基础MET乘以0.7（轻度）、1.0（中度）或1.3（剧烈）。",
      },
    ],
  },

  ja: {
    title: "消費カロリー計算機",
    short: "MET値を使って一般的な活動の消費カロリーを推定します。",
    description:
      "2011年身体活動コンペンディウムに基づく無料の消費カロリー計算機。活動、強度、時間、体重を入力してkcal単位の消費量を確認できます。",
    keywords: [
      "消費カロリー計算機",
      "MET計算機",
      "運動カロリー",
      "活動カロリー",
      "ワークアウトカロリー",
      "エネルギー消費",
      "フィットネス計算機",
    ],
    inputs: {
      activity: { label: "活動", help: "行った身体活動を選択してください。" },
      intensity: {
        label: "強度",
        help: "軽い＝楽、中程度＝はっきりした努力、激しい＝強い努力。",
      },
      duration: { label: "時間", help: "活動に費やした合計時間（分）。" },
      weight: { label: "体重", help: "あなたの体重（kg）。" },
    },
    outputs: {
      caloriesBurned: { label: "消費カロリー", help: "このセッションでの総消費エネルギー（推定）。" },
      metValue: { label: "MET値", help: "計算に使用した強度補正済みMET値。" },
      equivalentFoods: {
        label: "食品換算",
        help: "おおよその換算（パン1枚≈70 kcal）。",
      },
    },
    options: {
      activity: {
        walking: "ウォーキング",
        running: "ランニング",
        cycling: "サイクリング",
        swimming: "水泳",
        weightlifting: "ウエイトトレーニング",
        yoga: "ヨガ",
        basketball: "バスケットボール",
        soccer: "サッカー",
        tennis: "テニス",
        dancing: "ダンス",
        hiking: "ハイキング",
        "jumping-rope": "縄跳び",
      },
      intensity: {
        light: "軽い",
        moderate: "中程度",
        vigorous: "激しい",
      },
    },
    errors: {
      durationOutOfRange: "時間は1〜1440分の範囲で入力してください。",
      weightOutOfRange: "体重は20〜300 kgの範囲で入力してください。",
    },
    faq: [
      {
        q: "METとは何ですか？",
        a: "代謝当量（MET）は、活動時のエネルギー消費を安静時代謝で割った値です。1 METはおおよそ3.5 ml O₂/kg/分、または約1 kcal/kg/時に相当します。",
      },
      {
        q: "推定値はどの程度正確ですか？",
        a: "MET値は集団の平均です。体力・地形・技術などにより実測値は10〜30%変動することがあります。",
      },
      {
        q: "強度を変えるとなぜ結果が変わりますか？",
        a: "強度が高いほど酸素消費が増えます。本計算機は基準METに軽い=0.7、中程度=1.0、激しい=1.3を掛けて補正します。",
      },
    ],
  },

  ko: {
    title: "소모 칼로리 계산기",
    short: "MET 값을 사용해 일반적인 활동의 소모 칼로리를 추정합니다.",
    description:
      "2011 신체활동 개요(Compendium of Physical Activities)에 기반한 무료 칼로리 계산기. 활동, 강도, 시간, 체중을 입력해 kcal 단위의 에너지 소비를 확인하세요.",
    keywords: [
      "소모 칼로리 계산기",
      "MET 계산기",
      "운동 칼로리",
      "활동 칼로리",
      "운동량 칼로리",
      "에너지 소비",
      "피트니스 계산기",
    ],
    inputs: {
      activity: { label: "활동", help: "수행한 신체 활동을 선택하세요." },
      intensity: {
        label: "강도",
        help: "낮음 = 쉬움, 보통 = 뚜렷한 노력, 격렬 = 매우 힘듦.",
      },
      duration: { label: "시간", help: "활동에 소요된 총 시간(분)." },
      weight: { label: "체중", help: "체중(kg)." },
    },
    outputs: {
      caloriesBurned: { label: "소모 칼로리", help: "세션 동안의 추정 총 에너지 소비량." },
      metValue: { label: "MET 값", help: "강도가 반영된 계산용 MET 값." },
      equivalentFoods: {
        label: "식품 환산",
        help: "대략적 환산(식빵 1조각 ≈ 70 kcal).",
      },
    },
    options: {
      activity: {
        walking: "걷기",
        running: "달리기",
        cycling: "자전거",
        swimming: "수영",
        weightlifting: "웨이트 트레이닝",
        yoga: "요가",
        basketball: "농구",
        soccer: "축구",
        tennis: "테니스",
        dancing: "댄스",
        hiking: "등산",
        "jumping-rope": "줄넘기",
      },
      intensity: {
        light: "낮음",
        moderate: "보통",
        vigorous: "격렬",
      },
    },
    errors: {
      durationOutOfRange: "시간은 1~1440분이어야 합니다.",
      weightOutOfRange: "체중은 20~300 kg이어야 합니다.",
    },
    faq: [
      {
        q: "MET이란 무엇인가요?",
        a: "대사 당량(MET)은 활동의 에너지 비용을 안정 시 대사율로 나눈 값입니다. 1 MET ≈ 3.5 ml O₂/kg/분 ≈ 1 kcal/kg/시간.",
      },
      {
        q: "이 추정치는 얼마나 정확한가요?",
        a: "MET 추정치는 인구 평균입니다. 체력, 지형, 기술 등에 따라 실제 소비량은 10~30% 차이가 날 수 있습니다.",
      },
      {
        q: "강도가 결과에 영향을 주는 이유는?",
        a: "강도가 높을수록 산소 소비가 늘어납니다. 본 계산기는 기준 MET에 0.7(낮음), 1.0(보통), 1.3(격렬)을 곱합니다.",
      },
    ],
  },

  hi: {
    title: "कैलोरी बर्न कैलकुलेटर",
    short: "MET मानों का उपयोग करके सामान्य गतिविधियों में जली कैलोरी का अनुमान लगाएँ।",
    description:
      "2011 Compendium of Physical Activities पर आधारित मुफ़्त कैलोरी कैलकुलेटर। गतिविधि, तीव्रता, अवधि और वज़न दर्ज करके kcal में ऊर्जा खर्च जानें।",
    keywords: [
      "कैलोरी बर्न कैलकुलेटर",
      "MET कैलकुलेटर",
      "व्यायाम कैलोरी",
      "गतिविधि कैलोरी",
      "वर्कआउट कैलोरी",
      "ऊर्जा खर्च",
      "फिटनेस कैलकुलेटर",
    ],
    inputs: {
      activity: { label: "गतिविधि", help: "जो शारीरिक गतिविधि की गई।" },
      intensity: {
        label: "तीव्रता",
        help: "हल्की = आसान, मध्यम = स्पष्ट प्रयास, तीव्र = कठोर प्रयास।",
      },
      duration: { label: "अवधि", help: "गतिविधि में बिताया कुल समय (मिनट में)।" },
      weight: { label: "शरीर का वज़न", help: "आपका वज़न किलोग्राम में।" },
    },
    outputs: {
      caloriesBurned: { label: "जली कैलोरी", help: "सत्र के लिए अनुमानित कुल ऊर्जा खर्च।" },
      metValue: { label: "MET मान", help: "गणना में उपयोग किया गया तीव्रता-समायोजित MET मान।" },
      equivalentFoods: {
        label: "खाद्य समतुल्य",
        help: "लगभग समतुल्य (~70 kcal प्रति ब्रेड स्लाइस)।",
      },
    },
    options: {
      activity: {
        walking: "पैदल चलना",
        running: "दौड़ना",
        cycling: "साइक्लिंग",
        swimming: "तैराकी",
        weightlifting: "वज़न उठाना",
        yoga: "योग",
        basketball: "बास्केटबॉल",
        soccer: "फ़ुटबॉल",
        tennis: "टेनिस",
        dancing: "नृत्य",
        hiking: "हाइकिंग",
        "jumping-rope": "रस्सी कूदना",
      },
      intensity: {
        light: "हल्की",
        moderate: "मध्यम",
        vigorous: "तीव्र",
      },
    },
    errors: {
      durationOutOfRange: "अवधि 1 से 1440 मिनट के बीच होनी चाहिए।",
      weightOutOfRange: "वज़न 20 से 300 kg के बीच होना चाहिए।",
    },
    faq: [
      {
        q: "MET क्या है?",
        a: "मेटाबॉलिक समतुल्य (MET) किसी गतिविधि की ऊर्जा लागत और विश्राम चयापचय का अनुपात है। 1 MET ≈ 3.5 ml O₂/kg/मिनट ≈ 1 kcal/kg/घंटा।",
      },
      {
        q: "ये अनुमान कितने सटीक हैं?",
        a: "MET आधारित अनुमान जनसंख्या औसत हैं। वास्तविक मान फिटनेस, इलाक़े और तकनीक के अनुसार 10–30% बदल सकते हैं।",
      },
      {
        q: "तीव्रता परिणाम क्यों बदलती है?",
        a: "अधिक प्रयास से ऑक्सीजन उपयोग बढ़ता है। कैलकुलेटर बेस MET को 0.7 (हल्की), 1.0 (मध्यम) या 1.3 (तीव्र) से गुणा करता है।",
      },
    ],
  },
};

export default i18n;
