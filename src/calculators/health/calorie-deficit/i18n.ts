import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Calorie Deficit Calculator",
    short: "Calculate how long it will take to reach your goal weight based on your daily calorie deficit.",
    description:
      "Free calorie deficit calculator using the 7,700 kcal/kg rule. Enter your current weight, target weight, and daily calorie deficit to see your estimated timeline to goal, weekly loss rate, and total calories to burn.",
    keywords: [
      "calorie deficit calculator",
      "weight loss calculator",
      "how long to lose weight",
      "calorie deficit",
      "weight loss timeline",
      "fat loss calculator",
    ],
    inputs: {
      currentWeight: {
        label: "Current Weight",
        help: "Your current body weight in kg or lbs.",
      },
      targetWeight: {
        label: "Target Weight",
        help: "Your goal body weight in kg or lbs.",
      },
      unit: {
        label: "Unit",
        help: "Select metric (kg) or imperial (lbs).",
      },
      dailyCalorieDeficit: {
        label: "Daily Calorie Deficit (kcal)",
        help: "How many fewer calories you eat compared to what you burn each day. A deficit of 500 kcal/day equals about 0.45 kg loss per week.",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "Weight to Lose (kg)",
        help: "Total weight to lose in kilograms.",
      },
      weeklyDeficit: {
        label: "Weekly Deficit (kcal)",
        help: "Your daily deficit multiplied by 7.",
      },
      weeksToGoal: {
        label: "Weeks to Goal",
        help: "Estimated weeks to reach your target weight.",
      },
      monthsToGoal: {
        label: "Months to Goal",
        help: "Estimated months to reach your target weight (weeks ÷ 4.33).",
      },
      weeklyLossKg: {
        label: "Weekly Loss (kg)",
        help: "Estimated weight loss per week at your deficit.",
      },
      totalCalorieDeficit: {
        label: "Total Calories to Burn (kcal)",
        help: "Total calorie deficit needed: weight to lose × 7,700 kcal/kg.",
      },
    },
    options: {
      unit: {
        metric: "Metric (kg)",
        imperial: "Imperial (lbs)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 20 and 500.",
      deficitOutOfRange: "Daily deficit must be between 50 and 2,000 kcal.",
      targetHigherThanCurrent: "Target weight must be lower than current weight.",
    },
    faq: [
      {
        q: "Why 7,700 kcal per kg?",
        a: "One kilogram of body fat contains approximately 7,700 kilocalories of stored energy. To lose 1 kg, you need to create a total deficit of roughly 7,700 kcal. This is a clinical average — individual results vary due to differences in body composition, metabolic adaptation, and water retention.",
      },
      {
        q: "How large should my calorie deficit be?",
        a: "A moderate deficit of 300–500 kcal/day produces steady, sustainable weight loss of roughly 0.3–0.5 kg per week. Deficits above 1,000 kcal/day risk muscle loss, nutrient deficiencies, and metabolic slowdown. Always consult a healthcare professional before making large dietary changes.",
      },
      {
        q: "Why doesn't the calculator show a target date?",
        a: "Showing a fixed date creates a false sense of precision. Weight loss is non-linear: metabolism adapts, water retention fluctuates, and plateaus occur. A timeline in weeks gives useful planning information without misleading accuracy.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Défice Calórico",
    short: "Calcule o défice calórico necessário para perder peso de forma saudável.",
    description:
      "Calculadora gratuita de défice calórico. Calcule o défice diário necessário para atingir o seu objetivo de perda de peso.",
    keywords: ["défice calórico", "perder peso", "emagrecer", "calorias deficit", "balanço calórico"],
    inputs: {
      currentWeight: {
        label: "Current Weight",
        help: "Your current body weight in kg or lbs.",
      },
      targetWeight: {
        label: "Target Weight",
        help: "Your goal body weight in kg or lbs.",
      },
      unit: {
        label: "Unit",
        help: "Select metric (kg) or imperial (lbs).",
      },
      dailyCalorieDeficit: {
        label: "Daily Calorie Deficit (kcal)",
        help: "How many fewer calories you eat compared to what you burn each day. A deficit of 500 kcal/day equals about 0.45 kg loss per week.",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "Weight to Lose (kg)",
        help: "Total weight to lose in kilograms.",
      },
      weeklyDeficit: {
        label: "Weekly Deficit (kcal)",
        help: "Your daily deficit multiplied by 7.",
      },
      weeksToGoal: {
        label: "Weeks to Goal",
        help: "Estimated weeks to reach your target weight.",
      },
      monthsToGoal: {
        label: "Months to Goal",
        help: "Estimated months to reach your target weight (weeks ÷ 4.33).",
      },
      weeklyLossKg: {
        label: "Weekly Loss (kg)",
        help: "Estimated weight loss per week at your deficit.",
      },
      totalCalorieDeficit: {
        label: "Total Calories to Burn (kcal)",
        help: "Total calorie deficit needed: weight to lose × 7,700 kcal/kg.",
      },
    },
    options: {
      unit: {
        metric: "Metric (kg)",
        imperial: "Imperial (lbs)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 20 and 500.",
      deficitOutOfRange: "Daily deficit must be between 50 and 2,000 kcal.",
      targetHigherThanCurrent: "Target weight must be lower than current weight.",
    },
    faq: [
      {
        q: "Why 7,700 kcal per kg?",
        a: "One kilogram of body fat contains approximately 7,700 kilocalories of stored energy. To lose 1 kg, you need to create a total deficit of roughly 7,700 kcal. This is a clinical average — individual results vary due to differences in body composition, metabolic adaptation, and water retention.",
      },
      {
        q: "How large should my calorie deficit be?",
        a: "A moderate deficit of 300–500 kcal/day produces steady, sustainable weight loss of roughly 0.3–0.5 kg per week. Deficits above 1,000 kcal/day risk muscle loss, nutrient deficiencies, and metabolic slowdown. Always consult a healthcare professional before making large dietary changes.",
      },
      {
        q: "Why doesn't the calculator show a target date?",
        a: "Showing a fixed date creates a false sense of precision. Weight loss is non-linear: metabolism adapts, water retention fluctuates, and plateaus occur. A timeline in weeks gives useful planning information without misleading accuracy.",
      },
    ],
  },
  id: {
    title: "Kalkulator Defisit Kalori",
    short: "Hitung defisit kalori yang diperlukan untuk menurunkan berat badan dengan sehat.",
    description:
      "Kalkulator defisit kalori gratis. Hitung defisit harian yang diperlukan untuk mencapai target penurunan berat badan.",
    keywords: ["defisit kalori", "turun berat", "diet", "kalori defisit", "neraca kalori"],
    inputs: {
      currentWeight: {
        label: "Current Weight",
        help: "Your current body weight in kg or lbs.",
      },
      targetWeight: {
        label: "Target Weight",
        help: "Your goal body weight in kg or lbs.",
      },
      unit: {
        label: "Unit",
        help: "Select metric (kg) or imperial (lbs).",
      },
      dailyCalorieDeficit: {
        label: "Daily Calorie Deficit (kcal)",
        help: "How many fewer calories you eat compared to what you burn each day. A deficit of 500 kcal/day equals about 0.45 kg loss per week.",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "Weight to Lose (kg)",
        help: "Total weight to lose in kilograms.",
      },
      weeklyDeficit: {
        label: "Weekly Deficit (kcal)",
        help: "Your daily deficit multiplied by 7.",
      },
      weeksToGoal: {
        label: "Weeks to Goal",
        help: "Estimated weeks to reach your target weight.",
      },
      monthsToGoal: {
        label: "Months to Goal",
        help: "Estimated months to reach your target weight (weeks ÷ 4.33).",
      },
      weeklyLossKg: {
        label: "Weekly Loss (kg)",
        help: "Estimated weight loss per week at your deficit.",
      },
      totalCalorieDeficit: {
        label: "Total Calories to Burn (kcal)",
        help: "Total calorie deficit needed: weight to lose × 7,700 kcal/kg.",
      },
    },
    options: {
      unit: {
        metric: "Metric (kg)",
        imperial: "Imperial (lbs)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 20 and 500.",
      deficitOutOfRange: "Daily deficit must be between 50 and 2,000 kcal.",
      targetHigherThanCurrent: "Target weight must be lower than current weight.",
    },
    faq: [
      {
        q: "Why 7,700 kcal per kg?",
        a: "One kilogram of body fat contains approximately 7,700 kilocalories of stored energy. To lose 1 kg, you need to create a total deficit of roughly 7,700 kcal. This is a clinical average — individual results vary due to differences in body composition, metabolic adaptation, and water retention.",
      },
      {
        q: "How large should my calorie deficit be?",
        a: "A moderate deficit of 300–500 kcal/day produces steady, sustainable weight loss of roughly 0.3–0.5 kg per week. Deficits above 1,000 kcal/day risk muscle loss, nutrient deficiencies, and metabolic slowdown. Always consult a healthcare professional before making large dietary changes.",
      },
      {
        q: "Why doesn't the calculator show a target date?",
        a: "Showing a fixed date creates a false sense of precision. Weight loss is non-linear: metabolism adapts, water retention fluctuates, and plateaus occur. A timeline in weeks gives useful planning information without misleading accuracy.",
      },
    ],
  },


  tr: {
    title: "Kalori Açığı Hesaplayıcı",
    short: "Günlük kalori açığınıza göre hedef kilonuza ulaşmanın ne kadar süreceğini hesaplayın.",
    description:
      "7.700 kcal/kg kuralına dayalı ücretsiz kalori açığı hesaplayıcı. Mevcut kilonuzu, hedef kilonuzu ve günlük kalori açığınızı girerek tahmini hedefe ulaşma sürenizi, haftalık kilo kaybı hızınızı ve yakmanız gereken toplam kalori miktarını öğrenin.",
    keywords: [
      "kalori açığı hesaplayıcı",
      "kilo verme hesaplayıcı",
      "kilo verme süresi",
      "kalori açığı",
      "yağ yakma hesaplayıcı",
    ],
    inputs: {
      currentWeight: {
        label: "Mevcut Ağırlık",
        help: "Şu anki vücut ağırlığınız (kg veya lbs).",
      },
      targetWeight: {
        label: "Hedef Ağırlık",
        help: "Ulaşmak istediğiniz vücut ağırlığı (kg veya lbs).",
      },
      unit: {
        label: "Birim",
        help: "Metrik (kg) veya imperial (lbs) seçin.",
      },
      dailyCalorieDeficit: {
        label: "Günlük Kalori Açığı (kcal)",
        help: "Her gün harcadığınızdan ne kadar az yediğiniz. Günde 500 kcal açık, haftada yaklaşık 0,45 kg kilo kaybına eşdeğerdir.",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "Verilecek Kilo (kg)",
        help: "Kilogram cinsinden toplam verilecek kilo.",
      },
      weeklyDeficit: {
        label: "Haftalık Açık (kcal)",
        help: "Günlük açığınızın 7 ile çarpımı.",
      },
      weeksToGoal: {
        label: "Hedefe Ulaşma Süresi (hafta)",
        help: "Hedef kilonuza ulaşmak için tahmini hafta sayısı.",
      },
      monthsToGoal: {
        label: "Hedefe Ulaşma Süresi (ay)",
        help: "Hedef kilonuza ulaşmak için tahmini ay sayısı (hafta ÷ 4,33).",
      },
      weeklyLossKg: {
        label: "Haftalık Kilo Kaybı (kg)",
        help: "Mevcut açıkta haftada tahmini kilo kaybı.",
      },
      totalCalorieDeficit: {
        label: "Toplam Yakılacak Kalori (kcal)",
        help: "Gereken toplam kalori açığı: verilecek kilo × 7.700 kcal/kg.",
      },
    },
    options: {
      unit: {
        metric: "Metrik (kg)",
        imperial: "Imperial (lbs)",
      },
    },
    errors: {
      weightOutOfRange: "Ağırlık 20 ile 500 arasında olmalıdır.",
      deficitOutOfRange: "Günlük açık 50 ile 2.000 kcal arasında olmalıdır.",
      targetHigherThanCurrent: "Hedef ağırlık mevcut ağırlıktan düşük olmalıdır.",
    },
    faq: [
      {
        q: "Neden kg başına 7.700 kcal?",
        a: "Bir kilogram vücut yağı yaklaşık 7.700 kilokalori depolanmış enerji içerir. 1 kg vermek için toplamda yaklaşık 7.700 kcal'lik açık yaratmanız gerekir. Bu klinik bir ortalamadır; vücut bileşimi, metabolik uyum ve su tutma farklılıkları nedeniyle bireysel sonuçlar değişir.",
      },
      {
        q: "Kalori açığım ne kadar büyük olmalı?",
        a: "Günde 300–500 kcal'lik ılımlı bir açık, haftada yaklaşık 0,3–0,5 kg istikrarlı kilo kaybı sağlar. Günde 1.000 kcal'den fazla açık, kas kaybı, besin eksikliği ve metabolizma yavaşlaması riskini artırır.",
      },
      {
        q: "Hesaplayıcı neden hedef tarih göstermiyor?",
        a: "Belirli bir tarih göstermek yanıltıcı bir kesinlik izlenimi yaratır. Kilo kaybı doğrusal değildir: metabolizma adapte olur, su tutma dalgalanır ve duraksama dönemleri yaşanır.",
      },
    ],
  },

  de: {
    title: "Kaloriendefizit-Rechner",
    short: "Berechnen Sie, wie lange es dauert, Ihr Zielgewicht bei einem täglichen Kaloriendefizit zu erreichen.",
    description:
      "Kostenloser Kaloriendefizit-Rechner basierend auf der 7.700-kcal/kg-Regel. Geben Sie Ihr aktuelles Gewicht, Zielgewicht und tägliches Kaloriendefizit ein.",
    keywords: [
      "Kaloriendefizit-Rechner",
      "Abnehm-Rechner",
      "Wie lange zum Abnehmen",
      "Kaloriendefizit",
      "Gewichtsverlust",
    ],
    inputs: {
      currentWeight: {
        label: "Aktuelles Gewicht",
        help: "Ihr aktuelles Körpergewicht in kg oder lbs.",
      },
      targetWeight: {
        label: "Zielgewicht",
        help: "Ihr angestrebtes Körpergewicht in kg oder lbs.",
      },
      unit: {
        label: "Einheit",
        help: "Metrisch (kg) oder imperial (lbs) auswählen.",
      },
      dailyCalorieDeficit: {
        label: "Tägliches Kaloriendefizit (kcal)",
        help: "Wie viele Kalorien Sie täglich weniger essen als Sie verbrauchen. Ein Defizit von 500 kcal/Tag entspricht ca. 0,45 kg Gewichtsverlust pro Woche.",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "Zu verlierende Kilos (kg)",
        help: "Gesamtgewichtsverlust in Kilogramm.",
      },
      weeklyDeficit: {
        label: "Wöchentliches Defizit (kcal)",
        help: "Ihr tägliches Defizit multipliziert mit 7.",
      },
      weeksToGoal: {
        label: "Wochen bis zum Ziel",
        help: "Geschätzte Wochen bis zum Zielgewicht.",
      },
      monthsToGoal: {
        label: "Monate bis zum Ziel",
        help: "Geschätzte Monate bis zum Zielgewicht (Wochen ÷ 4,33).",
      },
      weeklyLossKg: {
        label: "Wöchentlicher Verlust (kg)",
        help: "Geschätzter Gewichtsverlust pro Woche bei Ihrem Defizit.",
      },
      totalCalorieDeficit: {
        label: "Gesamtkalorienbedarf (kcal)",
        help: "Gesamtes Kaloriendefizit: zu verlierende Kilos × 7.700 kcal/kg.",
      },
    },
    options: {
      unit: {
        metric: "Metrisch (kg)",
        imperial: "Imperial (lbs)",
      },
    },
    errors: {
      weightOutOfRange: "Das Gewicht muss zwischen 20 und 500 liegen.",
      deficitOutOfRange: "Das tägliche Defizit muss zwischen 50 und 2.000 kcal liegen.",
      targetHigherThanCurrent: "Das Zielgewicht muss unter dem aktuellen Gewicht liegen.",
    },
    faq: [
      {
        q: "Warum 7.700 kcal pro kg?",
        a: "Ein Kilogramm Körperfett enthält rund 7.700 Kilokalorie gespeicherter Energie. Um 1 kg abzunehmen, muss ein Gesamtdefizit von ca. 7.700 kcal entstehen. Dies ist ein klinischer Durchschnittswert — individuelle Ergebnisse variieren.",
      },
      {
        q: "Wie groß sollte mein Kaloriendefizit sein?",
        a: "Ein moderates Defizit von 300–500 kcal/Tag erzeugt einen nachhaltigen Gewichtsverlust von ca. 0,3–0,5 kg pro Woche. Über 1.000 kcal/Tag riskieren Muskelverlust und metabolische Anpassungen.",
      },
      {
        q: "Warum zeigt der Rechner kein konkretes Zieldatum?",
        a: "Gewichtsverlust ist nichtlinear: Metabolismus passt sich an, Wassereinlagerungen schwanken und Plateaus entstehen. Eine Wochenangabe ist nützlicher als ein irreführend genaues Datum.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Déficit Calorique",
    short: "Calculez combien de temps il faudra pour atteindre votre poids cible en fonction de votre déficit calorique quotidien.",
    description:
      "Calculateur de déficit calorique gratuit basé sur la règle des 7 700 kcal/kg. Entrez votre poids actuel, votre poids cible et votre déficit calorique quotidien.",
    keywords: [
      "calculateur déficit calorique",
      "calculateur perte de poids",
      "combien de temps pour perdre du poids",
      "déficit calorique",
      "perte de graisse",
    ],
    inputs: {
      currentWeight: {
        label: "Poids actuel",
        help: "Votre poids corporel actuel en kg ou lbs.",
      },
      targetWeight: {
        label: "Poids cible",
        help: "Votre poids corporel idéal en kg ou lbs.",
      },
      unit: {
        label: "Unité",
        help: "Choisissez le système métrique (kg) ou impérial (lbs).",
      },
      dailyCalorieDeficit: {
        label: "Déficit calorique quotidien (kcal)",
        help: "Combien de calories de moins vous consommez par rapport à vos dépenses. Un déficit de 500 kcal/j équivaut à environ 0,45 kg de perte par semaine.",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "Poids à perdre (kg)",
        help: "Perte de poids totale en kilogrammes.",
      },
      weeklyDeficit: {
        label: "Déficit hebdomadaire (kcal)",
        help: "Votre déficit quotidien multiplié par 7.",
      },
      weeksToGoal: {
        label: "Semaines jusqu'à l'objectif",
        help: "Semaines estimées pour atteindre votre poids cible.",
      },
      monthsToGoal: {
        label: "Mois jusqu'à l'objectif",
        help: "Mois estimés pour atteindre votre poids cible (semaines ÷ 4,33).",
      },
      weeklyLossKg: {
        label: "Perte hebdomadaire (kg)",
        help: "Perte de poids estimée par semaine à votre déficit.",
      },
      totalCalorieDeficit: {
        label: "Calories totales à brûler (kcal)",
        help: "Déficit total nécessaire : poids à perdre × 7 700 kcal/kg.",
      },
    },
    options: {
      unit: {
        metric: "Métrique (kg)",
        imperial: "Impérial (lbs)",
      },
    },
    errors: {
      weightOutOfRange: "Le poids doit être compris entre 20 et 500.",
      deficitOutOfRange: "Le déficit quotidien doit être compris entre 50 et 2 000 kcal.",
      targetHigherThanCurrent: "Le poids cible doit être inférieur au poids actuel.",
    },
    faq: [
      {
        q: "Pourquoi 7 700 kcal par kg ?",
        a: "Un kilogramme de graisse corporelle contient environ 7 700 kilocalories d'énergie stockée. Pour perdre 1 kg, il faut créer un déficit total d'environ 7 700 kcal. C'est une moyenne clinique — les résultats varient selon la composition corporelle, l'adaptation métabolique et la rétention d'eau.",
      },
      {
        q: "Quel déficit calorique adopter ?",
        a: "Un déficit modéré de 300 à 500 kcal/j produit une perte de poids régulière et durable d'environ 0,3 à 0,5 kg par semaine. Au-delà de 1 000 kcal/j, on risque une perte musculaire et un ralentissement du métabolisme.",
      },
      {
        q: "Pourquoi le calculateur ne donne-t-il pas une date précise ?",
        a: "La perte de poids n'est pas linéaire : le métabolisme s'adapte, la rétention d'eau fluctue et des plateaux surviennent. Une estimation en semaines est plus utile qu'une date trompeusement précise.",
      },
    ],
  },

  es: {
    title: "Calculadora de Déficit Calórico",
    short: "Calcula cuánto tiempo tardarás en alcanzar tu peso objetivo según tu déficit calórico diario.",
    description:
      "Calculadora de déficit calórico gratuita basada en la regla de 7.700 kcal/kg. Introduce tu peso actual, peso objetivo y déficit calórico diario.",
    keywords: [
      "calculadora déficit calórico",
      "calculadora pérdida de peso",
      "cuánto tiempo para perder peso",
      "déficit calórico",
      "calculadora grasa corporal",
    ],
    inputs: {
      currentWeight: {
        label: "Peso actual",
        help: "Tu peso corporal actual en kg o lbs.",
      },
      targetWeight: {
        label: "Peso objetivo",
        help: "Tu peso corporal ideal en kg o lbs.",
      },
      unit: {
        label: "Unidad",
        help: "Elige métrico (kg) o imperial (lbs).",
      },
      dailyCalorieDeficit: {
        label: "Déficit calórico diario (kcal)",
        help: "Cuántas calorías menos comes respecto a las que gastas. Un déficit de 500 kcal/día equivale a aproximadamente 0,45 kg de pérdida semanal.",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "Peso a perder (kg)",
        help: "Pérdida de peso total en kilogramos.",
      },
      weeklyDeficit: {
        label: "Déficit semanal (kcal)",
        help: "Tu déficit diario multiplicado por 7.",
      },
      weeksToGoal: {
        label: "Semanas hasta el objetivo",
        help: "Semanas estimadas para alcanzar tu peso objetivo.",
      },
      monthsToGoal: {
        label: "Meses hasta el objetivo",
        help: "Meses estimados para alcanzar tu peso objetivo (semanas ÷ 4,33).",
      },
      weeklyLossKg: {
        label: "Pérdida semanal (kg)",
        help: "Pérdida de peso estimada por semana con tu déficit.",
      },
      totalCalorieDeficit: {
        label: "Calorías totales a quemar (kcal)",
        help: "Déficit total necesario: peso a perder × 7.700 kcal/kg.",
      },
    },
    options: {
      unit: {
        metric: "Métrico (kg)",
        imperial: "Imperial (lbs)",
      },
    },
    errors: {
      weightOutOfRange: "El peso debe estar entre 20 y 500.",
      deficitOutOfRange: "El déficit diario debe estar entre 50 y 2.000 kcal.",
      targetHigherThanCurrent: "El peso objetivo debe ser inferior al peso actual.",
    },
    faq: [
      {
        q: "¿Por qué 7.700 kcal por kg?",
        a: "Un kilogramo de grasa corporal contiene aproximadamente 7.700 kilocalorías de energía almacenada. Para perder 1 kg hay que crear un déficit total de unas 7.700 kcal. Es un promedio clínico — los resultados individuales varían.",
      },
      {
        q: "¿Cuál debe ser mi déficit calórico?",
        a: "Un déficit moderado de 300–500 kcal/día produce una pérdida sostenible de unos 0,3–0,5 kg por semana. Por encima de 1.000 kcal/día existe riesgo de pérdida muscular y ralentización metabólica.",
      },
      {
        q: "¿Por qué la calculadora no muestra una fecha exacta?",
        a: "La pérdida de peso no es lineal: el metabolismo se adapta, la retención de líquidos fluctúa y aparecen mesetas. Una estimación en semanas es más útil que una fecha engañosamente precisa.",
      },
    ],
  },

  it: {
    title: "Calcolatore del Deficit Calorico",
    short: "Calcola quanto tempo ci vorrà per raggiungere il tuo peso obiettivo in base al deficit calorico giornaliero.",
    description:
      "Calcolatore gratuito del deficit calorico basato sulla regola delle 7.700 kcal/kg. Inserisci il tuo peso attuale, peso obiettivo e deficit calorico giornaliero.",
    keywords: [
      "calcolatore deficit calorico",
      "calcolatore perdita di peso",
      "quanto tempo per perdere peso",
      "deficit calorico",
      "calcolatore grasso corporeo",
    ],
    inputs: {
      currentWeight: {
        label: "Peso attuale",
        help: "Il tuo peso corporeo attuale in kg o lbs.",
      },
      targetWeight: {
        label: "Peso obiettivo",
        help: "Il tuo peso corporeo ideale in kg o lbs.",
      },
      unit: {
        label: "Unità",
        help: "Scegli tra metrico (kg) e imperiale (lbs).",
      },
      dailyCalorieDeficit: {
        label: "Deficit calorico giornaliero (kcal)",
        help: "Quante calorie in meno mangi rispetto a quelle che bruci. Un deficit di 500 kcal/giorno equivale a circa 0,45 kg di perdita a settimana.",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "Peso da perdere (kg)",
        help: "Perdita di peso totale in chilogrammi.",
      },
      weeklyDeficit: {
        label: "Deficit settimanale (kcal)",
        help: "Il tuo deficit giornaliero moltiplicato per 7.",
      },
      weeksToGoal: {
        label: "Settimane all'obiettivo",
        help: "Settimane stimate per raggiungere il tuo peso obiettivo.",
      },
      monthsToGoal: {
        label: "Mesi all'obiettivo",
        help: "Mesi stimati per raggiungere il tuo peso obiettivo (settimane ÷ 4,33).",
      },
      weeklyLossKg: {
        label: "Perdita settimanale (kg)",
        help: "Perdita di peso stimata a settimana con il tuo deficit.",
      },
      totalCalorieDeficit: {
        label: "Calorie totali da bruciare (kcal)",
        help: "Deficit totale necessario: peso da perdere × 7.700 kcal/kg.",
      },
    },
    options: {
      unit: {
        metric: "Metrico (kg)",
        imperial: "Imperiale (lbs)",
      },
    },
    errors: {
      weightOutOfRange: "Il peso deve essere compreso tra 20 e 500.",
      deficitOutOfRange: "Il deficit giornaliero deve essere compreso tra 50 e 2.000 kcal.",
      targetHigherThanCurrent: "Il peso obiettivo deve essere inferiore al peso attuale.",
    },
    faq: [
      {
        q: "Perché 7.700 kcal per kg?",
        a: "Un chilogrammo di grasso corporeo contiene circa 7.700 chilocalorie di energia. Per perdere 1 kg occorre creare un deficit totale di circa 7.700 kcal. È una media clinica — i risultati variano in base alla composizione corporea, all'adattamento metabolico e alla ritenzione idrica.",
      },
      {
        q: "Quanto deve essere grande il mio deficit calorico?",
        a: "Un deficit moderato di 300–500 kcal/giorno produce una perdita sostenibile di circa 0,3–0,5 kg a settimana. Oltre 1.000 kcal/giorno si rischia perdita muscolare e rallentamento metabolico.",
      },
      {
        q: "Perché il calcolatore non mostra una data precisa?",
        a: "Il dimagrimento non è lineare: il metabolismo si adatta, la ritenzione idrica varia e si verificano plateau. Una stima in settimane è più utile di una data ingannevolmente precisa.",
      },
    ],
  },

  ar: {
    title: "حاسبة عجز السعرات الحرارية",
    short: "احسب المدة اللازمة للوصول إلى وزنك المستهدف بناءً على عجز السعرات الحرارية اليومي.",
    description:
      "حاسبة عجز السعرات الحرارية المجانية المعتمدة على قاعدة 7,700 سعرة/كجم. أدخل وزنك الحالي والمستهدف والعجز اليومي.",
    keywords: [
      "حاسبة عجز السعرات",
      "حاسبة إنقاص الوزن",
      "كم يستغرق إنقاص الوزن",
      "عجز السعرات الحرارية",
      "حرق الدهون",
    ],
    inputs: {
      currentWeight: {
        label: "الوزن الحالي",
        help: "وزن جسمك الحالي بالكجم أو الرطل.",
      },
      targetWeight: {
        label: "الوزن المستهدف",
        help: "وزن الجسم المطلوب الوصول إليه بالكجم أو الرطل.",
      },
      unit: {
        label: "الوحدة",
        help: "اختر متري (كجم) أو إمبريالي (رطل).",
      },
      dailyCalorieDeficit: {
        label: "عجز السعرات اليومي (سعرة حرارية)",
        help: "عدد السعرات الأقل التي تتناولها مقارنة بما تحرقه يوميًا. عجز 500 سعرة/يوم يعادل حوالي 0.45 كجم أسبوعيًا.",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "الوزن المراد إنقاصه (كجم)",
        help: "إجمالي الوزن المراد إنقاصه بالكيلوغرام.",
      },
      weeklyDeficit: {
        label: "العجز الأسبوعي (سعرة حرارية)",
        help: "عجزك اليومي مضروبًا في 7.",
      },
      weeksToGoal: {
        label: "أسابيع حتى الهدف",
        help: "العدد التقديري للأسابيع للوصول إلى الوزن المستهدف.",
      },
      monthsToGoal: {
        label: "أشهر حتى الهدف",
        help: "العدد التقديري للأشهر للوصول إلى الوزن المستهدف (الأسابيع ÷ 4.33).",
      },
      weeklyLossKg: {
        label: "الخسارة الأسبوعية (كجم)",
        help: "الوزن المقدّر الذي ستفقده أسبوعيًا بعجزك الحالي.",
      },
      totalCalorieDeficit: {
        label: "إجمالي السعرات المراد حرقها (سعرة حرارية)",
        help: "إجمالي العجز المطلوب: الوزن المراد إنقاصه × 7,700 سعرة/كجم.",
      },
    },
    options: {
      unit: {
        metric: "متري (كجم)",
        imperial: "إمبريالي (رطل)",
      },
    },
    errors: {
      weightOutOfRange: "يجب أن يكون الوزن بين 20 و 500.",
      deficitOutOfRange: "يجب أن يكون العجز اليومي بين 50 و 2,000 سعرة حرارية.",
      targetHigherThanCurrent: "يجب أن يكون الوزن المستهدف أقل من الوزن الحالي.",
    },
    faq: [
      {
        q: "لماذا 7,700 سعرة لكل كيلوغرام؟",
        a: "يحتوي كيلوغرام واحد من دهون الجسم على حوالي 7,700 سعرة حرارية من الطاقة المخزّنة. لفقدان 1 كجم، تحتاج إلى تراكم عجز إجمالي يبلغ نحو 7,700 سعرة. وهذا متوسط سريري — تتباين النتائج الفردية.",
      },
      {
        q: "ما حجم عجز السعرات المناسب؟",
        a: "يُنتج عجز معتدل من 300 إلى 500 سعرة/يوم فقدانًا مستدامًا للوزن بحوالي 0.3–0.5 كجم أسبوعيًا. العجز فوق 1,000 سعرة/يوم يُعرّض للخطر من فقدان العضلات وتباطؤ الأيض.",
      },
      {
        q: "لماذا لا تعرض الحاسبة تاريخًا محددًا؟",
        a: "فقدان الوزن ليس خطيًا: يتكيف الأيض، وتتذبذب احتباس الماء، وتحدث فترات ثبات. تقدير بالأسابيع أكثر فائدة من تاريخ دقيق مُضلّل.",
      },
    ],
  },

  ru: {
    title: "Калькулятор Дефицита Калорий",
    short: "Рассчитайте, сколько времени потребуется для достижения целевого веса при ежедневном дефиците калорий.",
    description:
      "Бесплатный калькулятор дефицита калорий на основе правила 7700 ккал/кг. Введите текущий и целевой вес, а также ежедневный дефицит калорий.",
    keywords: [
      "калькулятор дефицита калорий",
      "калькулятор похудения",
      "сколько времени занимает похудение",
      "дефицит калорий",
      "сжигание жира",
    ],
    inputs: {
      currentWeight: {
        label: "Текущий вес",
        help: "Ваш текущий вес тела в кг или фунтах.",
      },
      targetWeight: {
        label: "Целевой вес",
        help: "Желаемый вес тела в кг или фунтах.",
      },
      unit: {
        label: "Единица измерения",
        help: "Выберите метрическую (кг) или имперскую (фунты) систему.",
      },
      dailyCalorieDeficit: {
        label: "Ежедневный дефицит калорий (ккал)",
        help: "На сколько калорий вы едите меньше, чем тратите. Дефицит 500 ккал/день соответствует примерно 0,45 кг потери в неделю.",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "Вес для сброса (кг)",
        help: "Общая потеря веса в килограммах.",
      },
      weeklyDeficit: {
        label: "Еженедельный дефицит (ккал)",
        help: "Ваш дневной дефицит, умноженный на 7.",
      },
      weeksToGoal: {
        label: "Недель до цели",
        help: "Расчётное количество недель до достижения целевого веса.",
      },
      monthsToGoal: {
        label: "Месяцев до цели",
        help: "Расчётное количество месяцев до целевого веса (недели ÷ 4,33).",
      },
      weeklyLossKg: {
        label: "Потеря в неделю (кг)",
        help: "Расчётная потеря веса в неделю при вашем дефиците.",
      },
      totalCalorieDeficit: {
        label: "Всего калорий для сжигания (ккал)",
        help: "Необходимый общий дефицит: вес для сброса × 7700 ккал/кг.",
      },
    },
    options: {
      unit: {
        metric: "Метрическая (кг)",
        imperial: "Имперская (фунты)",
      },
    },
    errors: {
      weightOutOfRange: "Вес должен быть от 20 до 500.",
      deficitOutOfRange: "Дневной дефицит должен быть от 50 до 2000 ккал.",
      targetHigherThanCurrent: "Целевой вес должен быть меньше текущего.",
    },
    faq: [
      {
        q: "Почему 7700 ккал на кг?",
        a: "Один килограмм жировой ткани содержит около 7700 ккал запасённой энергии. Для снижения веса на 1 кг необходимо создать суммарный дефицит ~7700 ккал. Это клиническое среднее — индивидуальные результаты варьируются.",
      },
      {
        q: "Каким должен быть дефицит калорий?",
        a: "Умеренный дефицит 300–500 ккал/день обеспечивает устойчивое снижение веса около 0,3–0,5 кг в неделю. Дефицит свыше 1000 ккал/день увеличивает риск потери мышечной массы и замедления метаболизма.",
      },
      {
        q: "Почему калькулятор не показывает конкретную дату?",
        a: "Снижение веса нелинейно: метаболизм адаптируется, задержка воды колеблется, возникают периоды плато. Оценка в неделях полезнее, чем вводящая в заблуждение точная дата.",
      },
    ],
  },

  zh: {
    title: "热量缺口计算器",
    short: "根据每日热量缺口计算达到目标体重所需的时间。",
    description:
      "基于7700千卡/千克规则的免费热量缺口计算器。输入当前体重、目标体重和每日热量缺口，查看预估减重时间线、每周减重速率和所需总热量缺口。",
    keywords: [
      "热量缺口计算器",
      "减重计算器",
      "减肥需要多久",
      "热量缺口",
      "减脂计算器",
    ],
    inputs: {
      currentWeight: {
        label: "当前体重",
        help: "您当前的体重（千克或磅）。",
      },
      targetWeight: {
        label: "目标体重",
        help: "您希望达到的体重（千克或磅）。",
      },
      unit: {
        label: "单位",
        help: "选择公制（千克）或英制（磅）。",
      },
      dailyCalorieDeficit: {
        label: "每日热量缺口（千卡）",
        help: "您每天比消耗少摄入的热量。每日500千卡缺口约相当于每周减重0.45千克。",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "需减体重（千克）",
        help: "需要减去的总体重（千克）。",
      },
      weeklyDeficit: {
        label: "每周热量缺口（千卡）",
        help: "每日缺口乘以7。",
      },
      weeksToGoal: {
        label: "达到目标所需周数",
        help: "达到目标体重的预估周数。",
      },
      monthsToGoal: {
        label: "达到目标所需月数",
        help: "达到目标体重的预估月数（周数÷4.33）。",
      },
      weeklyLossKg: {
        label: "每周减重（千克）",
        help: "在当前热量缺口下，每周预估减重量。",
      },
      totalCalorieDeficit: {
        label: "所需总热量缺口（千卡）",
        help: "所需总缺口：需减体重×7700千卡/千克。",
      },
    },
    options: {
      unit: {
        metric: "公制（千克）",
        imperial: "英制（磅）",
      },
    },
    errors: {
      weightOutOfRange: "体重必须在20到500之间。",
      deficitOutOfRange: "每日缺口必须在50到2000千卡之间。",
      targetHigherThanCurrent: "目标体重必须低于当前体重。",
    },
    faq: [
      {
        q: "为什么是每千克7700千卡？",
        a: "一千克体脂约含7700千卡储存能量。要减少1千克，需创造约7700千卡的总热量缺口。这是临床平均值——个体结果因体成分、代谢适应和水分潴留而有所不同。",
      },
      {
        q: "热量缺口应该多大？",
        a: "每日300–500千卡的适度缺口可实现每周约0.3–0.5千克的持续稳定减重。超过每日1000千卡会增加肌肉流失、营养缺乏和代谢减缓的风险。",
      },
      {
        q: "为什么计算器不显示具体日期？",
        a: "体重减轻不是线性的：新陈代谢会适应，水分潴留会波动，还会出现平台期。以周为单位的估算比精确误导性的日期更有参考价值。",
      },
    ],
  },

  ja: {
    title: "カロリー不足計算機",
    short: "1日のカロリー不足に基づいて目標体重到達までの期間を計算します。",
    description:
      "7,700kcal/kgルールに基づく無料カロリー不足計算機。現在の体重・目標体重・1日のカロリー不足を入力すると、目標までの期間・週あたりの減量率・必要な総カロリー不足量が分かります。",
    keywords: [
      "カロリー不足計算機",
      "減量計算機",
      "痩せるまでの期間",
      "カロリー赤字",
      "脂肪燃焼計算機",
    ],
    inputs: {
      currentWeight: {
        label: "現在の体重",
        help: "現在の体重（kgまたはlbs）。",
      },
      targetWeight: {
        label: "目標体重",
        help: "目指す体重（kgまたはlbs）。",
      },
      unit: {
        label: "単位",
        help: "メートル法（kg）または帝国単位（lbs）を選択。",
      },
      dailyCalorieDeficit: {
        label: "1日のカロリー不足（kcal）",
        help: "消費量より少なく摂取するカロリー量。500kcal/日の不足は週約0.45kgの減量に相当します。",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "減量すべき体重（kg）",
        help: "kg単位での総減量目標。",
      },
      weeklyDeficit: {
        label: "週間カロリー不足（kcal）",
        help: "1日の不足を7倍にした値。",
      },
      weeksToGoal: {
        label: "目標までの週数",
        help: "目標体重到達までの推定週数。",
      },
      monthsToGoal: {
        label: "目標までの月数",
        help: "目標体重到達までの推定月数（週数÷4.33）。",
      },
      weeklyLossKg: {
        label: "週間減量（kg）",
        help: "現在の不足量での推定週間減量。",
      },
      totalCalorieDeficit: {
        label: "必要な総カロリー不足（kcal）",
        help: "必要な総不足量：減量目標×7,700kcal/kg。",
      },
    },
    options: {
      unit: {
        metric: "メートル法（kg）",
        imperial: "帝国単位（lbs）",
      },
    },
    errors: {
      weightOutOfRange: "体重は20〜500の範囲で入力してください。",
      deficitOutOfRange: "1日の不足は50〜2,000kcalの範囲で入力してください。",
      targetHigherThanCurrent: "目標体重は現在の体重より低くしてください。",
    },
    faq: [
      {
        q: "なぜ1kgあたり7,700kcalなのですか？",
        a: "体脂肪1kgには約7,700kcalの蓄積エネルギーが含まれています。1kg減らすには合計約7,700kcalの不足が必要です。これは臨床的な平均値であり、個人差があります。",
      },
      {
        q: "カロリー不足はどれくらいが適切ですか？",
        a: "300〜500kcal/日の適度な不足は週約0.3〜0.5kgの持続的な減量を生み出します。1,000kcal/日を超えると筋肉量の減少や代謝の低下リスクが高まります。",
      },
      {
        q: "なぜ具体的な目標日を表示しないのですか？",
        a: "体重減少は直線的ではありません。代謝が適応し、水分保持が変動し、停滞期が生じます。週数での推定の方が、誤解を招く正確な日付より有用です。",
      },
    ],
  },

  ko: {
    title: "칼로리 결핍 계산기",
    short: "일일 칼로리 결핍을 기반으로 목표 체중 달성에 걸리는 시간을 계산합니다.",
    description:
      "7,700kcal/kg 규칙을 사용한 무료 칼로리 결핍 계산기. 현재 체중, 목표 체중, 일일 칼로리 결핍을 입력하면 목표 달성 예상 기간, 주간 감량 속도, 총 필요 칼로리 결핍량을 확인할 수 있습니다.",
    keywords: [
      "칼로리 결핍 계산기",
      "체중 감량 계산기",
      "살 빼는 데 걸리는 시간",
      "칼로리 적자",
      "지방 연소 계산기",
    ],
    inputs: {
      currentWeight: {
        label: "현재 체중",
        help: "현재 체중(kg 또는 lbs).",
      },
      targetWeight: {
        label: "목표 체중",
        help: "목표하는 체중(kg 또는 lbs).",
      },
      unit: {
        label: "단위",
        help: "미터법(kg) 또는 야드파운드법(lbs) 선택.",
      },
      dailyCalorieDeficit: {
        label: "일일 칼로리 결핍(kcal)",
        help: "하루에 소비하는 것보다 얼마나 적게 먹는지. 500kcal/일 결핍은 주당 약 0.45kg 감량에 해당합니다.",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "감량할 체중(kg)",
        help: "킬로그램 단위의 총 감량 목표.",
      },
      weeklyDeficit: {
        label: "주간 칼로리 결핍(kcal)",
        help: "일일 결핍을 7배 한 값.",
      },
      weeksToGoal: {
        label: "목표까지 걸리는 주수",
        help: "목표 체중에 도달하는 데 걸리는 예상 주수.",
      },
      monthsToGoal: {
        label: "목표까지 걸리는 개월 수",
        help: "목표 체중에 도달하는 데 걸리는 예상 개월 수(주 ÷ 4.33).",
      },
      weeklyLossKg: {
        label: "주간 감량(kg)",
        help: "현재 결핍에서 예상되는 주간 체중 감량.",
      },
      totalCalorieDeficit: {
        label: "필요한 총 칼로리 결핍(kcal)",
        help: "필요한 총 결핍: 감량할 체중 × 7,700kcal/kg.",
      },
    },
    options: {
      unit: {
        metric: "미터법(kg)",
        imperial: "야드파운드법(lbs)",
      },
    },
    errors: {
      weightOutOfRange: "체중은 20에서 500 사이여야 합니다.",
      deficitOutOfRange: "일일 결핍은 50에서 2,000kcal 사이여야 합니다.",
      targetHigherThanCurrent: "목표 체중은 현재 체중보다 낮아야 합니다.",
    },
    faq: [
      {
        q: "왜 kg당 7,700kcal인가요?",
        a: "체지방 1킬로그램에는 약 7,700킬로칼로리의 저장 에너지가 포함되어 있습니다. 1kg을 줄이려면 총 약 7,700kcal의 결핍이 필요합니다. 이는 임상 평균값이며 개인차가 있습니다.",
      },
      {
        q: "칼로리 결핍은 얼마가 적당한가요?",
        a: "하루 300–500kcal의 적당한 결핍은 주당 약 0.3–0.5kg의 지속적인 감량을 가져옵니다. 하루 1,000kcal 이상의 결핍은 근육 손실과 대사 저하 위험을 증가시킵니다.",
      },
      {
        q: "왜 계산기가 구체적인 날짜를 보여주지 않나요?",
        a: "체중 감소는 선형이 아닙니다. 신진대사가 적응하고, 수분 보유가 변동하며, 정체기가 발생합니다. 주 단위 추정이 오해를 줄 수 있는 정확한 날짜보다 더 유용합니다.",
      },
    ],
  },

  hi: {
    title: "कैलोरी कमी कैलकुलेटर",
    short: "अपने दैनिक कैलोरी घाटे के आधार पर लक्ष्य वजन तक पहुंचने में लगने वाले समय की गणना करें।",
    description:
      "7,700 kcal/kg नियम पर आधारित मुफ्त कैलोरी कमी कैलकुलेटर। अपना वर्तमान वजन, लक्ष्य वजन और दैनिक कैलोरी घाटा दर्ज करें।",
    keywords: [
      "कैलोरी कमी कैलकुलेटर",
      "वजन घटाने का कैलकुलेटर",
      "वजन घटाने में कितना समय",
      "कैलोरी घाटा",
      "वसा जलाने का कैलकुलेटर",
    ],
    inputs: {
      currentWeight: {
        label: "वर्तमान वजन",
        help: "आपका वर्तमान शरीर का वजन किग्रा या पाउंड में।",
      },
      targetWeight: {
        label: "लक्ष्य वजन",
        help: "आपका इच्छित शरीर का वजन किग्रा या पाउंड में।",
      },
      unit: {
        label: "इकाई",
        help: "मेट्रिक (किग्रा) या इम्पीरियल (पाउंड) चुनें।",
      },
      dailyCalorieDeficit: {
        label: "दैनिक कैलोरी कमी (kcal)",
        help: "आप प्रतिदिन जितनी कैलोरी जलाते हैं उससे कितनी कम खाते हैं। 500 kcal/दिन की कमी लगभग 0.45 किग्रा साप्ताहिक वजन घटाने के बराबर है।",
      },
    },
    outputs: {
      weightToLoseKg: {
        label: "घटाने वाला वजन (किग्रा)",
        help: "किलोग्राम में कुल घटाने वाला वजन।",
      },
      weeklyDeficit: {
        label: "साप्ताहिक कमी (kcal)",
        help: "आपकी दैनिक कमी को 7 से गुणा करके।",
      },
      weeksToGoal: {
        label: "लक्ष्य तक सप्ताह",
        help: "लक्ष्य वजन तक पहुंचने के लिए अनुमानित सप्ताह।",
      },
      monthsToGoal: {
        label: "लक्ष्य तक महीने",
        help: "लक्ष्य वजन तक पहुंचने के लिए अनुमानित महीने (सप्ताह ÷ 4.33)।",
      },
      weeklyLossKg: {
        label: "साप्ताहिक हानि (किग्रा)",
        help: "आपकी वर्तमान कमी पर प्रति सप्ताह अनुमानित वजन घटाना।",
      },
      totalCalorieDeficit: {
        label: "जलाने के लिए कुल कैलोरी (kcal)",
        help: "आवश्यक कुल कमी: घटाने वाला वजन × 7,700 kcal/किग्रा।",
      },
    },
    options: {
      unit: {
        metric: "मेट्रिक (किग्रा)",
        imperial: "इम्पीरियल (पाउंड)",
      },
    },
    errors: {
      weightOutOfRange: "वजन 20 और 500 के बीच होना चाहिए।",
      deficitOutOfRange: "दैनिक कमी 50 और 2,000 kcal के बीच होनी चाहिए।",
      targetHigherThanCurrent: "लक्ष्य वजन वर्तमान वजन से कम होना चाहिए।",
    },
    faq: [
      {
        q: "प्रति किग्रा 7,700 kcal क्यों?",
        a: "शरीर की वसा के एक किलोग्राम में लगभग 7,700 किलोकैलोरी संग्रहीत ऊर्जा होती है। 1 किग्रा वजन कम करने के लिए कुल 7,700 kcal की कमी की आवश्यकता होती है। यह एक नैदानिक औसत है — व्यक्तिगत परिणाम भिन्न होते हैं।",
      },
      {
        q: "मेरी कैलोरी कमी कितनी बड़ी होनी चाहिए?",
        a: "300–500 kcal/दिन की मध्यम कमी प्रति सप्ताह लगभग 0.3–0.5 किग्रा का स्थिर वजन घटाने का उत्पादन करती है। 1,000 kcal/दिन से अधिक की कमी मांसपेशियों की हानि और चयापचय धीमा होने का खतरा बढ़ाती है।",
      },
      {
        q: "कैलकुलेटर कोई विशिष्ट तारीख क्यों नहीं दिखाता?",
        a: "वजन घटाना रैखिक नहीं है: चयापचय अनुकूलित होता है, पानी का प्रतिधारण उतार-चढ़ाव करता है और पठारी दौर आते हैं। सप्ताहों में अनुमान भ्रामक रूप से सटीक तारीख से अधिक उपयोगी है।",
      },
    ],
  },
};

export default i18n;
