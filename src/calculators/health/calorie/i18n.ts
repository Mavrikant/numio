import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Calorie Calculator",
    short: "Calculate your daily calorie needs (TDEE) and set a target for your weight goal.",
    description:
      "Free TDEE calculator using the Mifflin-St Jeor equation. Enter your stats and activity level to find your maintenance calories, then adjust for weight loss or gain.",
    keywords: [
      "calorie calculator",
      "TDEE calculator",
      "daily calorie needs",
      "weight loss calories",
      "calorie deficit",
      "maintenance calories",
      "total daily energy expenditure",
    ],
    inputs: {
      gender: { label: "Biological sex", help: "Sex affects BMR through differences in muscle mass and hormones." },
      weight: { label: "Weight", help: "Your current body weight in kilograms." },
      height: { label: "Height", help: "Your height in centimetres." },
      age: { label: "Age", help: "Your age in years." },
      activity: {
        label: "Activity level",
        help: "Choose the level that best matches your typical weekly activity, including exercise and daily movement.",
      },
      goal: {
        label: "Goal",
        help: "Select your weight goal. Lose/gain speeds are approximate guidelines.",
      },
    },
    outputs: {
      tdee: {
        label: "Maintenance calories (TDEE)",
        help: "Total Daily Energy Expenditure — calories needed to maintain your current weight.",
        suffix: "kcal/day",
      },
      target: {
        label: "Target calories",
        help: "Recommended daily intake to reach your selected goal.",
        suffix: "kcal/day",
      },
      deficit: {
        label: "Daily surplus / deficit",
        help: "Positive = calorie surplus (for gain). Negative = calorie deficit (for loss).",
        suffix: "kcal/day",
      },
    },
    options: {
      gender: { male: "Male", female: "Female" },
      activity: {
        sedentary: "Sedentary (desk job, little exercise)",
        light: "Lightly active (1–3 days/week)",
        moderate: "Moderately active (3–5 days/week)",
        active: "Very active (6–7 days/week)",
        veryActive: "Extra active (physical job or 2× training)",
      },
      goal: {
        maintain: "Maintain weight",
        lose: "Lose weight (~0.5 kg/week)",
        loseFast: "Lose weight fast (~1 kg/week)",
        gain: "Gain weight (~0.5 kg/week)",
        gainFast: "Gain weight fast (~1 kg/week)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 300 kg.",
      heightOutOfRange: "Height must be between 50 and 250 cm.",
      ageOutOfRange: "Age must be between 1 and 120 years.",
    },
    faq: [
      {
        q: "What is TDEE?",
        a: "Total Daily Energy Expenditure (TDEE) is the total number of calories you burn in a day, accounting for your basal metabolic rate and physical activity. Eating at your TDEE maintains your current weight.",
      },
      {
        q: "How fast can I safely lose weight?",
        a: "Most guidelines recommend losing no more than 0.5–1 kg (1–2 lb) per week. Faster loss often leads to muscle loss and metabolic slowdown. The minimum safe intake is 1200 kcal/day for women and 1500 kcal/day for men.",
      },
      {
        q: "Why is my target calorie number capped?",
        a: "The calculator enforces a minimum safe calorie floor (1200 for women, 1500 for men) even when the goal demands more aggressive restriction, to protect against nutritional deficiencies.",
      },
      {
        q: "How accurate is this calculator?",
        a: "TDEE estimates are generally accurate within 10–20%. Individual variation in metabolism, muscle mass, and daily movement can cause real needs to differ. Track your weight over 2–4 weeks and adjust calories by 100–200 kcal if you are not progressing as expected.",
      },
      {
        q: "Should I eat back my exercise calories?",
        a: "If you selected an accurate activity level, exercise is already factored in. Eating back calories is only relevant if you use the 'sedentary' setting and then log exercise separately.",
      },
    ],
  },
  pt: {
    title: "Calorie Calculator",
    short: "Calculate your daily calorie needs (TDEE) and set a target for your weight goal.",
    description:
      "Free TDEE calculator using the Mifflin-St Jeor equation. Enter your stats and activity level to find your maintenance calories, then adjust for weight loss or gain.",
    keywords: [
      "calorie calculator",
      "TDEE calculator",
      "daily calorie needs",
      "weight loss calories",
      "calorie deficit",
      "maintenance calories",
      "total daily energy expenditure",
    ],
    inputs: {
      gender: { label: "Biological sex", help: "Sex affects BMR through differences in muscle mass and hormones." },
      weight: { label: "Weight", help: "Your current body weight in kilograms." },
      height: { label: "Height", help: "Your height in centimetres." },
      age: { label: "Age", help: "Your age in years." },
      activity: {
        label: "Activity level",
        help: "Choose the level that best matches your typical weekly activity, including exercise and daily movement.",
      },
      goal: {
        label: "Goal",
        help: "Select your weight goal. Lose/gain speeds are approximate guidelines.",
      },
    },
    outputs: {
      tdee: {
        label: "Maintenance calories (TDEE)",
        help: "Total Daily Energy Expenditure — calories needed to maintain your current weight.",
        suffix: "kcal/day",
      },
      target: {
        label: "Target calories",
        help: "Recommended daily intake to reach your selected goal.",
        suffix: "kcal/day",
      },
      deficit: {
        label: "Daily surplus / deficit",
        help: "Positive = calorie surplus (for gain). Negative = calorie deficit (for loss).",
        suffix: "kcal/day",
      },
    },
    options: {
      gender: { male: "Male", female: "Female" },
      activity: {
        sedentary: "Sedentary (desk job, little exercise)",
        light: "Lightly active (1–3 days/week)",
        moderate: "Moderately active (3–5 days/week)",
        active: "Very active (6–7 days/week)",
        veryActive: "Extra active (physical job or 2× training)",
      },
      goal: {
        maintain: "Maintain weight",
        lose: "Lose weight (~0.5 kg/week)",
        loseFast: "Lose weight fast (~1 kg/week)",
        gain: "Gain weight (~0.5 kg/week)",
        gainFast: "Gain weight fast (~1 kg/week)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 300 kg.",
      heightOutOfRange: "Height must be between 50 and 250 cm.",
      ageOutOfRange: "Age must be between 1 and 120 years.",
    },
    faq: [
      {
        q: "What is TDEE?",
        a: "Total Daily Energy Expenditure (TDEE) is the total number of calories you burn in a day, accounting for your basal metabolic rate and physical activity. Eating at your TDEE maintains your current weight.",
      },
      {
        q: "How fast can I safely lose weight?",
        a: "Most guidelines recommend losing no more than 0.5–1 kg (1–2 lb) per week. Faster loss often leads to muscle loss and metabolic slowdown. The minimum safe intake is 1200 kcal/day for women and 1500 kcal/day for men.",
      },
      {
        q: "Why is my target calorie number capped?",
        a: "The calculator enforces a minimum safe calorie floor (1200 for women, 1500 for men) even when the goal demands more aggressive restriction, to protect against nutritional deficiencies.",
      },
      {
        q: "How accurate is this calculator?",
        a: "TDEE estimates are generally accurate within 10–20%. Individual variation in metabolism, muscle mass, and daily movement can cause real needs to differ. Track your weight over 2–4 weeks and adjust calories by 100–200 kcal if you are not progressing as expected.",
      },
      {
        q: "Should I eat back my exercise calories?",
        a: "If you selected an accurate activity level, exercise is already factored in. Eating back calories is only relevant if you use the 'sedentary' setting and then log exercise separately.",
      },
    ],
  },
  id: {
    title: "Calorie Calculator",
    short: "Calculate your daily calorie needs (TDEE) and set a target for your weight goal.",
    description:
      "Free TDEE calculator using the Mifflin-St Jeor equation. Enter your stats and activity level to find your maintenance calories, then adjust for weight loss or gain.",
    keywords: [
      "calorie calculator",
      "TDEE calculator",
      "daily calorie needs",
      "weight loss calories",
      "calorie deficit",
      "maintenance calories",
      "total daily energy expenditure",
    ],
    inputs: {
      gender: { label: "Biological sex", help: "Sex affects BMR through differences in muscle mass and hormones." },
      weight: { label: "Weight", help: "Your current body weight in kilograms." },
      height: { label: "Height", help: "Your height in centimetres." },
      age: { label: "Age", help: "Your age in years." },
      activity: {
        label: "Activity level",
        help: "Choose the level that best matches your typical weekly activity, including exercise and daily movement.",
      },
      goal: {
        label: "Goal",
        help: "Select your weight goal. Lose/gain speeds are approximate guidelines.",
      },
    },
    outputs: {
      tdee: {
        label: "Maintenance calories (TDEE)",
        help: "Total Daily Energy Expenditure — calories needed to maintain your current weight.",
        suffix: "kcal/day",
      },
      target: {
        label: "Target calories",
        help: "Recommended daily intake to reach your selected goal.",
        suffix: "kcal/day",
      },
      deficit: {
        label: "Daily surplus / deficit",
        help: "Positive = calorie surplus (for gain). Negative = calorie deficit (for loss).",
        suffix: "kcal/day",
      },
    },
    options: {
      gender: { male: "Male", female: "Female" },
      activity: {
        sedentary: "Sedentary (desk job, little exercise)",
        light: "Lightly active (1–3 days/week)",
        moderate: "Moderately active (3–5 days/week)",
        active: "Very active (6–7 days/week)",
        veryActive: "Extra active (physical job or 2× training)",
      },
      goal: {
        maintain: "Maintain weight",
        lose: "Lose weight (~0.5 kg/week)",
        loseFast: "Lose weight fast (~1 kg/week)",
        gain: "Gain weight (~0.5 kg/week)",
        gainFast: "Gain weight fast (~1 kg/week)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 300 kg.",
      heightOutOfRange: "Height must be between 50 and 250 cm.",
      ageOutOfRange: "Age must be between 1 and 120 years.",
    },
    faq: [
      {
        q: "What is TDEE?",
        a: "Total Daily Energy Expenditure (TDEE) is the total number of calories you burn in a day, accounting for your basal metabolic rate and physical activity. Eating at your TDEE maintains your current weight.",
      },
      {
        q: "How fast can I safely lose weight?",
        a: "Most guidelines recommend losing no more than 0.5–1 kg (1–2 lb) per week. Faster loss often leads to muscle loss and metabolic slowdown. The minimum safe intake is 1200 kcal/day for women and 1500 kcal/day for men.",
      },
      {
        q: "Why is my target calorie number capped?",
        a: "The calculator enforces a minimum safe calorie floor (1200 for women, 1500 for men) even when the goal demands more aggressive restriction, to protect against nutritional deficiencies.",
      },
      {
        q: "How accurate is this calculator?",
        a: "TDEE estimates are generally accurate within 10–20%. Individual variation in metabolism, muscle mass, and daily movement can cause real needs to differ. Track your weight over 2–4 weeks and adjust calories by 100–200 kcal if you are not progressing as expected.",
      },
      {
        q: "Should I eat back my exercise calories?",
        a: "If you selected an accurate activity level, exercise is already factored in. Eating back calories is only relevant if you use the 'sedentary' setting and then log exercise separately.",
      },
    ],
  },


  tr: {
    title: "Kalori Hesaplayıcı",
    short: "Günlük kalori ihtiyacınızı (TDEE) hesaplayın ve kilo hedefinize göre hedef belirleyin.",
    description:
      "Mifflin-St Jeor denklemi kullanan ücretsiz TDEE hesaplayıcı. Boy, kilo, yaş ve aktivite düzeyinizi girerek idame kalorilerinizi ve kilo hedefi için gereken miktarı öğrenin.",
    keywords: [
      "kalori hesaplayıcı",
      "TDEE hesaplama",
      "günlük kalori ihtiyacı",
      "kilo verme kalorileri",
      "kalori açığı",
      "idame kalorileri",
      "enerji harcaması",
    ],
    inputs: {
      gender: { label: "Biyolojik cinsiyet", help: "Cinsiyet, kas kütlesi ve hormonlar aracılığıyla BMR'yi etkiler." },
      weight: { label: "Kilo", help: "Mevcut vücut ağırlığınız (kg)." },
      height: { label: "Boy", help: "Boyunuz santimetre cinsinden." },
      age: { label: "Yaş", help: "Yaşınız yıl cinsinden." },
      activity: {
        label: "Aktivite düzeyi",
        help: "Haftalık egzersiz ve günlük hareketliliğinizi en iyi yansıtan düzeyi seçin.",
      },
      goal: {
        label: "Hedef",
        help: "Kilo hedefinizi seçin. Hız değerleri yaklaşık kılavuz niteliğindedir.",
      },
    },
    outputs: {
      tdee: { label: "İdame kalorileri (TDEE)", help: "Mevcut kilonuzu korumak için gereken günlük kalori.", suffix: "kcal/gün" },
      target: { label: "Hedef kalori", help: "Seçilen hedefe ulaşmak için önerilen günlük kalori alımı.", suffix: "kcal/gün" },
      deficit: { label: "Günlük fazla / açık", help: "Pozitif = kalori fazlası (kilo almak için). Negatif = kalori açığı (kilo vermek için).", suffix: "kcal/gün" },
    },
    options: {
      gender: { male: "Erkek", female: "Kadın" },
      activity: {
        sedentary: "Hareketsiz (masa başı iş, az egzersiz)",
        light: "Hafif aktif (haftada 1–3 gün)",
        moderate: "Orta aktif (haftada 3–5 gün)",
        active: "Çok aktif (haftada 6–7 gün)",
        veryActive: "Ekstra aktif (fiziksel iş veya çift antrenman)",
      },
      goal: {
        maintain: "Kiloyu koru",
        lose: "Kilo ver (~0,5 kg/hafta)",
        loseFast: "Hızlı kilo ver (~1 kg/hafta)",
        gain: "Kilo al (~0,5 kg/hafta)",
        gainFast: "Hızlı kilo al (~1 kg/hafta)",
      },
    },
    errors: {
      weightOutOfRange: "Kilo 1 ile 300 kg arasında olmalıdır.",
      heightOutOfRange: "Boy 50 ile 250 cm arasında olmalıdır.",
      ageOutOfRange: "Yaş 1 ile 120 yıl arasında olmalıdır.",
    },
    faq: [
      {
        q: "TDEE nedir?",
        a: "Toplam Günlük Enerji Harcaması (TDEE), bazal metabolizma hızı ve fiziksel aktiviteniz dahil günde yaktığınız toplam kalori miktarıdır. TDEE kadar yemek, mevcut kilonuzu korumanızı sağlar.",
      },
      {
        q: "Güvenli kilo verme hızı nedir?",
        a: "Çoğu kılavuz, haftada 0,5–1 kg'dan fazla kilo vermemeyi önerir. Daha hızlı kilo kaybı kas kaybına ve metabolik yavaşlamaya yol açabilir.",
      },
    ],
  },

  de: {
    title: "Kalorienrechner",
    short: "Berechnen Sie Ihren täglichen Kalorienbedarf (TDEE) und legen Sie ein Ziel für Ihr Gewicht fest.",
    description:
      "Kostenloser TDEE-Rechner auf Basis der Mifflin-St-Jeor-Formel. Geben Sie Ihre Daten und Ihr Aktivitätslevel ein, um Ihren Erhaltungsbedarf zu ermitteln und ein Gewichtsziel anzupassen.",
    keywords: [
      "Kalorienrechner",
      "TDEE Rechner",
      "täglicher Kalorienbedarf",
      "Kaloriendefizit",
      "Erhaltungskalorien",
      "Gewichtsabnahme Kalorien",
      "Energiebedarf",
    ],
    inputs: {
      gender: { label: "Biologisches Geschlecht", help: "Das Geschlecht beeinflusst den BMR durch Unterschiede in Muskelmasse und Hormonen." },
      weight: { label: "Gewicht", help: "Ihr aktuelles Körpergewicht in Kilogramm." },
      height: { label: "Größe", help: "Ihre Körpergröße in Zentimetern." },
      age: { label: "Alter", help: "Ihr Alter in Jahren." },
      activity: { label: "Aktivitätslevel", help: "Wählen Sie das Level, das Ihre typische wöchentliche Aktivität am besten beschreibt." },
      goal: { label: "Ziel", help: "Wählen Sie Ihr Gewichtsziel." },
    },
    outputs: {
      tdee: { label: "Erhaltungskalorien (TDEE)", help: "Täglich benötigte Kalorien zur Gewichtserhaltung.", suffix: "kcal/Tag" },
      target: { label: "Zielkalorien", help: "Empfohlene tägliche Kalorienzufuhr für Ihr gewähltes Ziel.", suffix: "kcal/Tag" },
      deficit: { label: "Tägliches Plus/Minus", help: "Positiv = Kalorienüberschuss. Negativ = Kaloriendefizit.", suffix: "kcal/Tag" },
    },
    options: {
      gender: { male: "Männlich", female: "Weiblich" },
      activity: {
        sedentary: "Sitzend (Bürojob, wenig Bewegung)",
        light: "Leicht aktiv (1–3 Tage/Woche)",
        moderate: "Mäßig aktiv (3–5 Tage/Woche)",
        active: "Sehr aktiv (6–7 Tage/Woche)",
        veryActive: "Extrem aktiv (körperlicher Beruf oder 2× Training)",
      },
      goal: {
        maintain: "Gewicht halten",
        lose: "Abnehmen (~0,5 kg/Woche)",
        loseFast: "Schnell abnehmen (~1 kg/Woche)",
        gain: "Zunehmen (~0,5 kg/Woche)",
        gainFast: "Schnell zunehmen (~1 kg/Woche)",
      },
    },
    errors: {
      weightOutOfRange: "Das Gewicht muss zwischen 1 und 300 kg liegen.",
      heightOutOfRange: "Die Größe muss zwischen 50 und 250 cm liegen.",
      ageOutOfRange: "Das Alter muss zwischen 1 und 120 Jahren liegen.",
    },
    faq: [
      {
        q: "Was ist TDEE?",
        a: "Der Gesamtenergieverbrauch (TDEE) ist die Gesamtzahl der Kalorien, die Sie täglich verbrauchen – einschließlich Grundumsatz und körperlicher Aktivität. Wenn Sie genau Ihrem TDEE entsprechend essen, bleibt Ihr Gewicht stabil.",
      },
      {
        q: "Wie schnell kann ich sicher abnehmen?",
        a: "Die meisten Leitlinien empfehlen, nicht mehr als 0,5–1 kg pro Woche abzunehmen, um Muskelverlust und Stoffwechselabbau zu vermeiden.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Calories",
    short: "Calculez vos besoins caloriques quotidiens (TDEE) et fixez un objectif de poids.",
    description:
      "Calculateur TDEE gratuit basé sur la formule Mifflin-St Jeor. Saisissez vos données et votre niveau d'activité pour connaître vos calories d'entretien et ajuster selon votre objectif.",
    keywords: [
      "calculateur calories",
      "TDEE calculateur",
      "besoins caloriques",
      "déficit calorique",
      "calories d'entretien",
      "perte de poids calories",
      "dépense énergétique",
    ],
    inputs: {
      gender: { label: "Sexe biologique", help: "Le sexe influence le métabolisme de base via la masse musculaire et les hormones." },
      weight: { label: "Poids", help: "Votre poids corporel actuel en kilogrammes." },
      height: { label: "Taille", help: "Votre taille en centimètres." },
      age: { label: "Âge", help: "Votre âge en années." },
      activity: { label: "Niveau d'activité", help: "Choisissez le niveau qui correspond le mieux à votre activité hebdomadaire habituelle." },
      goal: { label: "Objectif", help: "Sélectionnez votre objectif de poids." },
    },
    outputs: {
      tdee: { label: "Calories d'entretien (TDEE)", help: "Calories nécessaires pour maintenir votre poids actuel.", suffix: "kcal/jour" },
      target: { label: "Calories cibles", help: "Apport journalier recommandé pour atteindre votre objectif.", suffix: "kcal/jour" },
      deficit: { label: "Surplus / déficit quotidien", help: "Positif = surplus calorique. Négatif = déficit calorique.", suffix: "kcal/jour" },
    },
    options: {
      gender: { male: "Homme", female: "Femme" },
      activity: {
        sedentary: "Sédentaire (travail de bureau, peu d'exercice)",
        light: "Légèrement actif (1–3 jours/semaine)",
        moderate: "Modérément actif (3–5 jours/semaine)",
        active: "Très actif (6–7 jours/semaine)",
        veryActive: "Extrêmement actif (métier physique ou double entraînement)",
      },
      goal: {
        maintain: "Maintenir le poids",
        lose: "Perdre du poids (~0,5 kg/semaine)",
        loseFast: "Perte rapide (~1 kg/semaine)",
        gain: "Prendre du poids (~0,5 kg/semaine)",
        gainFast: "Prise rapide (~1 kg/semaine)",
      },
    },
    errors: {
      weightOutOfRange: "Le poids doit être compris entre 1 et 300 kg.",
      heightOutOfRange: "La taille doit être comprise entre 50 et 250 cm.",
      ageOutOfRange: "L'âge doit être compris entre 1 et 120 ans.",
    },
    faq: [
      {
        q: "Qu'est-ce que le TDEE ?",
        a: "La dépense énergétique totale journalière (TDEE) est le total des calories brûlées en une journée, incluant le métabolisme de base et l'activité physique. Manger à hauteur de son TDEE permet de maintenir son poids.",
      },
      {
        q: "À quelle vitesse peut-on perdre du poids sans risque ?",
        a: "La plupart des recommandations préconisent de ne pas dépasser 0,5–1 kg de perte par semaine afin d'éviter la perte musculaire et le ralentissement du métabolisme.",
      },
    ],
  },

  es: {
    title: "Calculadora de Calorías",
    short: "Calcula tus necesidades calóricas diarias (TDEE) y establece un objetivo de peso.",
    description:
      "Calculadora TDEE gratuita basada en la ecuación Mifflin-St Jeor. Introduce tus datos y nivel de actividad para conocer tus calorías de mantenimiento y ajustar según tu objetivo.",
    keywords: [
      "calculadora calorías",
      "calculadora TDEE",
      "necesidades calóricas",
      "déficit calórico",
      "calorías mantenimiento",
      "pérdida de peso calorías",
      "gasto energético",
    ],
    inputs: {
      gender: { label: "Sexo biológico", help: "El sexo influye en el metabolismo basal a través de la masa muscular y las hormonas." },
      weight: { label: "Peso", help: "Tu peso corporal actual en kilogramos." },
      height: { label: "Altura", help: "Tu altura en centímetros." },
      age: { label: "Edad", help: "Tu edad en años." },
      activity: { label: "Nivel de actividad", help: "Elige el nivel que mejor se adapte a tu actividad semanal habitual." },
      goal: { label: "Objetivo", help: "Selecciona tu objetivo de peso." },
    },
    outputs: {
      tdee: { label: "Calorías de mantenimiento (TDEE)", help: "Calorías necesarias para mantener tu peso actual.", suffix: "kcal/día" },
      target: { label: "Calorías objetivo", help: "Ingesta diaria recomendada para alcanzar tu objetivo.", suffix: "kcal/día" },
      deficit: { label: "Superávit / déficit diario", help: "Positivo = superávit calórico. Negativo = déficit calórico.", suffix: "kcal/día" },
    },
    options: {
      gender: { male: "Hombre", female: "Mujer" },
      activity: {
        sedentary: "Sedentario (trabajo de oficina, poco ejercicio)",
        light: "Ligeramente activo (1–3 días/semana)",
        moderate: "Moderadamente activo (3–5 días/semana)",
        active: "Muy activo (6–7 días/semana)",
        veryActive: "Extremadamente activo (trabajo físico o doble entrenamiento)",
      },
      goal: {
        maintain: "Mantener peso",
        lose: "Perder peso (~0,5 kg/semana)",
        loseFast: "Pérdida rápida (~1 kg/semana)",
        gain: "Ganar peso (~0,5 kg/semana)",
        gainFast: "Ganancia rápida (~1 kg/semana)",
      },
    },
    errors: {
      weightOutOfRange: "El peso debe estar entre 1 y 300 kg.",
      heightOutOfRange: "La altura debe estar entre 50 y 250 cm.",
      ageOutOfRange: "La edad debe estar entre 1 y 120 años.",
    },
    faq: [
      {
        q: "¿Qué es el TDEE?",
        a: "El Gasto Energético Total Diario (TDEE) es el total de calorías que quemas en un día, incluyendo el metabolismo basal y la actividad física. Comer exactamente tu TDEE mantiene tu peso estable.",
      },
      {
        q: "¿Con qué rapidez puedo perder peso de forma segura?",
        a: "La mayoría de las directrices recomiendan no perder más de 0,5–1 kg por semana para evitar la pérdida muscular y la ralentización metabólica.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Calorie",
    short: "Calcola il tuo fabbisogno calorico giornaliero (TDEE) e imposta un obiettivo di peso.",
    description:
      "Calcolatore TDEE gratuito basato sull'equazione Mifflin-St Jeor. Inserisci i tuoi dati e il livello di attività per trovare le calorie di mantenimento e adattarle al tuo obiettivo.",
    keywords: [
      "calcolatore calorie",
      "TDEE calcolatore",
      "fabbisogno calorico",
      "deficit calorico",
      "calorie di mantenimento",
      "dimagrimento calorie",
      "dispendio energetico",
    ],
    inputs: {
      gender: { label: "Sesso biologico", help: "Il sesso influenza il BMR tramite differenze di massa muscolare e ormoni." },
      weight: { label: "Peso", help: "Il tuo peso corporeo attuale in chilogrammi." },
      height: { label: "Altezza", help: "La tua altezza in centimetri." },
      age: { label: "Età", help: "La tua età in anni." },
      activity: { label: "Livello di attività", help: "Scegli il livello che corrisponde meglio alla tua attività settimanale." },
      goal: { label: "Obiettivo", help: "Seleziona il tuo obiettivo di peso." },
    },
    outputs: {
      tdee: { label: "Calorie di mantenimento (TDEE)", help: "Calorie necessarie per mantenere il peso attuale.", suffix: "kcal/giorno" },
      target: { label: "Calorie obiettivo", help: "Apporto giornaliero consigliato per raggiungere il tuo obiettivo.", suffix: "kcal/giorno" },
      deficit: { label: "Surplus/deficit giornaliero", help: "Positivo = surplus calorico. Negativo = deficit calorico.", suffix: "kcal/giorno" },
    },
    options: {
      gender: { male: "Maschio", female: "Femmina" },
      activity: {
        sedentary: "Sedentario (lavoro d'ufficio, poco movimento)",
        light: "Leggermente attivo (1–3 giorni/settimana)",
        moderate: "Moderatamente attivo (3–5 giorni/settimana)",
        active: "Molto attivo (6–7 giorni/settimana)",
        veryActive: "Estremamente attivo (lavoro fisico o doppio allenamento)",
      },
      goal: {
        maintain: "Mantenere il peso",
        lose: "Perdere peso (~0,5 kg/settimana)",
        loseFast: "Perdita rapida (~1 kg/settimana)",
        gain: "Aumentare di peso (~0,5 kg/settimana)",
        gainFast: "Aumento rapido (~1 kg/settimana)",
      },
    },
    errors: {
      weightOutOfRange: "Il peso deve essere compreso tra 1 e 300 kg.",
      heightOutOfRange: "L'altezza deve essere compresa tra 50 e 250 cm.",
      ageOutOfRange: "L'età deve essere compresa tra 1 e 120 anni.",
    },
    faq: [
      {
        q: "Cos'è il TDEE?",
        a: "Il TDEE (Total Daily Energy Expenditure) è il totale delle calorie bruciate in un giorno, tenendo conto del metabolismo basale e dell'attività fisica. Mangiare esattamente il proprio TDEE mantiene il peso stabile.",
      },
      {
        q: "Con quale velocità si può perdere peso in sicurezza?",
        a: "La maggior parte delle linee guida consiglia di non perdere più di 0,5–1 kg a settimana per evitare la perdita di massa muscolare e il rallentamento metabolico.",
      },
    ],
  },

  ar: {
    title: "حاسبة السعرات الحرارية",
    short: "احسب احتياجاتك اليومية من السعرات الحرارية (TDEE) وحدد هدف وزنك.",
    description:
      "حاسبة TDEE المجانية المبنية على معادلة ميفلين-سانت جيور. أدخل بياناتك ومستوى نشاطك للحصول على سعرات المحافظة وضبطها وفق هدفك.",
    keywords: [
      "حاسبة السعرات",
      "حاسبة TDEE",
      "الاحتياج اليومي من السعرات",
      "عجز السعرات",
      "سعرات المحافظة",
      "سعرات الوزن المثالي",
      "الطاقة اليومية",
    ],
    inputs: {
      gender: { label: "الجنس البيولوجي", help: "يؤثر الجنس في معدل الأيض الأساسي عبر الفوارق في الكتلة العضلية والهرمونات." },
      weight: { label: "الوزن", help: "وزنك الحالي بالكيلوغرام." },
      height: { label: "الطول", help: "طولك بالسنتيمتر." },
      age: { label: "العمر", help: "عمرك بالسنوات." },
      activity: { label: "مستوى النشاط", help: "اختر المستوى الذي يعكس نشاطك الأسبوعي المعتاد." },
      goal: { label: "الهدف", help: "حدد هدف وزنك." },
    },
    outputs: {
      tdee: { label: "سعرات المحافظة (TDEE)", help: "السعرات اللازمة للحفاظ على وزنك الحالي.", suffix: "سعرة/يوم" },
      target: { label: "السعرات المستهدفة", help: "الكمية اليومية الموصى بها لتحقيق هدفك.", suffix: "سعرة/يوم" },
      deficit: { label: "الفائض / العجز اليومي", help: "موجب = فائض سعرات. سالب = عجز سعرات.", suffix: "سعرة/يوم" },
    },
    options: {
      gender: { male: "ذكر", female: "أنثى" },
      activity: {
        sedentary: "خامل (عمل مكتبي، نشاط ضئيل)",
        light: "نشيط قليلاً (1–3 أيام/أسبوع)",
        moderate: "نشيط معتدلاً (3–5 أيام/أسبوع)",
        active: "نشيط جداً (6–7 أيام/أسبوع)",
        veryActive: "بالغ النشاط (عمل بدني أو تدريب مزدوج)",
      },
      goal: {
        maintain: "الحفاظ على الوزن",
        lose: "إنقاص الوزن (~0,5 كجم/أسبوع)",
        loseFast: "إنقاص سريع (~1 كجم/أسبوع)",
        gain: "زيادة الوزن (~0,5 كجم/أسبوع)",
        gainFast: "زيادة سريعة (~1 كجم/أسبوع)",
      },
    },
    errors: {
      weightOutOfRange: "يجب أن يكون الوزن بين 1 و300 كجم.",
      heightOutOfRange: "يجب أن يكون الطول بين 50 و250 سم.",
      ageOutOfRange: "يجب أن يكون العمر بين 1 و120 سنة.",
    },
    faq: [
      {
        q: "ما هو TDEE؟",
        a: "إجمالي الطاقة المحروقة يومياً (TDEE) هو مجموع السعرات الحرارية التي تحرقها في اليوم بما يشمل معدل الأيض الأساسي والنشاط البدني. تناول سعرات موازية لـ TDEE يحافظ على وزنك.",
      },
      {
        q: "ما معدل إنقاص الوزن الآمن؟",
        a: "تنصح معظم الإرشادات بعدم فقدان أكثر من 0,5–1 كجم أسبوعياً لتجنب فقدان الكتلة العضلية وتباطؤ الأيض.",
      },
    ],
  },

  ru: {
    title: "Калькулятор калорий",
    short: "Рассчитайте суточную потребность в калориях (TDEE) и установите цель по весу.",
    description:
      "Бесплатный калькулятор TDEE на основе формулы Миффлина-Сан-Жеора. Введите данные и уровень активности, чтобы узнать калории для поддержания веса и скорректировать под свою цель.",
    keywords: [
      "калькулятор калорий",
      "калькулятор TDEE",
      "суточная норма калорий",
      "дефицит калорий",
      "калории для поддержания веса",
      "похудение калории",
      "расход энергии",
    ],
    inputs: {
      gender: { label: "Биологический пол", help: "Пол влияет на BMR через различия в мышечной массе и гормонах." },
      weight: { label: "Масса тела", help: "Ваш текущий вес в килограммах." },
      height: { label: "Рост", help: "Ваш рост в сантиметрах." },
      age: { label: "Возраст", help: "Ваш возраст в годах." },
      activity: { label: "Уровень активности", help: "Выберите уровень, соответствующий вашей типичной недельной нагрузке." },
      goal: { label: "Цель", help: "Выберите вашу цель по весу." },
    },
    outputs: {
      tdee: { label: "Калории для поддержания веса (TDEE)", help: "Суточное количество калорий для сохранения текущего веса.", suffix: "ккал/день" },
      target: { label: "Целевые калории", help: "Рекомендуемый суточный калораж для достижения вашей цели.", suffix: "ккал/день" },
      deficit: { label: "Суточный профицит/дефицит", help: "Положительное значение = профицит. Отрицательное = дефицит.", suffix: "ккал/день" },
    },
    options: {
      gender: { male: "Мужской", female: "Женский" },
      activity: {
        sedentary: "Малоподвижный (офис, мало движения)",
        light: "Слабоактивный (1–3 дня/нед.)",
        moderate: "Умеренно активный (3–5 дней/нед.)",
        active: "Высокоактивный (6–7 дней/нед.)",
        veryActive: "Сверхактивный (физический труд или двойные тренировки)",
      },
      goal: {
        maintain: "Поддерживать вес",
        lose: "Похудеть (~0,5 кг/нед.)",
        loseFast: "Быстро похудеть (~1 кг/нед.)",
        gain: "Набрать вес (~0,5 кг/нед.)",
        gainFast: "Быстро набрать вес (~1 кг/нед.)",
      },
    },
    errors: {
      weightOutOfRange: "Вес должен быть от 1 до 300 кг.",
      heightOutOfRange: "Рост должен быть от 50 до 250 см.",
      ageOutOfRange: "Возраст должен быть от 1 до 120 лет.",
    },
    faq: [
      {
        q: "Что такое TDEE?",
        a: "Суммарный суточный расход энергии (TDEE) — это общее количество калорий, сжигаемых за день с учётом базального метаболизма и физической активности. Питание точно на уровне TDEE позволяет поддерживать вес стабильным.",
      },
      {
        q: "Как быстро можно безопасно худеть?",
        a: "Большинство рекомендаций советуют не превышать 0,5–1 кг в неделю, чтобы избежать потери мышечной массы и замедления обмена веществ.",
      },
    ],
  },

  zh: {
    title: "卡路里计算器",
    short: "计算您的每日卡路里需求（TDEE），并根据体重目标设定摄入量。",
    description:
      "基于Mifflin-St Jeor公式的免费TDEE计算器。输入您的数据和活动水平，了解维持体重所需的卡路里，并根据目标进行调整。",
    keywords: [
      "卡路里计算器",
      "TDEE计算器",
      "每日卡路里需求",
      "卡路里赤字",
      "维持卡路里",
      "减肥卡路里",
      "能量消耗",
    ],
    inputs: {
      gender: { label: "生理性别", help: "性别通过肌肉量和激素差异影响基础代谢率。" },
      weight: { label: "体重", help: "您当前的体重（千克）。" },
      height: { label: "身高", help: "您的身高（厘米）。" },
      age: { label: "年龄", help: "您的年龄（岁）。" },
      activity: { label: "活动水平", help: "选择最能反映您日常活动量的级别。" },
      goal: { label: "目标", help: "选择您的体重目标。" },
    },
    outputs: {
      tdee: { label: "维持卡路里（TDEE）", help: "维持当前体重所需的每日卡路里。", suffix: "千卡/天" },
      target: { label: "目标卡路里", help: "实现所选目标的推荐每日摄入量。", suffix: "千卡/天" },
      deficit: { label: "每日盈余/赤字", help: "正值=卡路里盈余。负值=卡路里赤字。", suffix: "千卡/天" },
    },
    options: {
      gender: { male: "男性", female: "女性" },
      activity: {
        sedentary: "久坐不动（办公室工作，几乎不运动）",
        light: "轻度活跃（每周1-3天）",
        moderate: "中度活跃（每周3-5天）",
        active: "高度活跃（每周6-7天）",
        veryActive: "极度活跃（体力工作或双倍训练）",
      },
      goal: {
        maintain: "维持体重",
        lose: "减重（约0.5千克/周）",
        loseFast: "快速减重（约1千克/周）",
        gain: "增重（约0.5千克/周）",
        gainFast: "快速增重（约1千克/周）",
      },
    },
    errors: {
      weightOutOfRange: "体重必须在1至300千克之间。",
      heightOutOfRange: "身高必须在50至250厘米之间。",
      ageOutOfRange: "年龄必须在1至120岁之间。",
    },
    faq: [
      {
        q: "什么是TDEE？",
        a: "每日总能量消耗（TDEE）是您一天内消耗的卡路里总量，包括基础代谢率和体力活动。摄入量等于TDEE时体重保持稳定。",
      },
      {
        q: "安全的减重速度是多少？",
        a: "大多数指南建议每周减重不超过0.5-1千克，以避免肌肉流失和代谢减慢。",
      },
    ],
  },

  ja: {
    title: "カロリー計算機",
    short: "1日のカロリー必要量（TDEE）を計算し、体重目標に合わせた摂取量を設定しましょう。",
    description:
      "ミフリン・セントジョー式を使用した無料TDEEカロリー計算機。データと活動レベルを入力し、維持カロリーを算出して目標に合わせて調整できます。",
    keywords: [
      "カロリー計算機",
      "TDEE計算",
      "1日のカロリー必要量",
      "カロリー不足",
      "維持カロリー",
      "ダイエットカロリー",
      "消費エネルギー",
    ],
    inputs: {
      gender: { label: "生物学的性別", help: "筋肉量やホルモンの違いにより、性別はBMRに影響します。" },
      weight: { label: "体重", help: "現在の体重（キログラム）。" },
      height: { label: "身長", help: "身長（センチメートル）。" },
      age: { label: "年齢", help: "年齢（歳）。" },
      activity: { label: "活動レベル", help: "週間の典型的な活動量に最も近いレベルを選択してください。" },
      goal: { label: "目標", help: "体重の目標を選択してください。" },
    },
    outputs: {
      tdee: { label: "維持カロリー（TDEE）", help: "現在の体重を維持するために必要な1日のカロリー。", suffix: "kcal/日" },
      target: { label: "目標カロリー", help: "選択した目標を達成するための推奨1日摂取量。", suffix: "kcal/日" },
      deficit: { label: "1日の過剰/不足", help: "正の値 = カロリー過剰（増量用）。負の値 = カロリー不足（減量用）。", suffix: "kcal/日" },
    },
    options: {
      gender: { male: "男性", female: "女性" },
      activity: {
        sedentary: "座りがち（デスクワーク・ほぼ運動なし）",
        light: "軽い活動（週1〜3日）",
        moderate: "中程度の活動（週3〜5日）",
        active: "活発（週6〜7日）",
        veryActive: "非常に活発（肉体労働または二部練習）",
      },
      goal: {
        maintain: "体重を維持する",
        lose: "体重を減らす（約0.5 kg/週）",
        loseFast: "速く体重を減らす（約1 kg/週）",
        gain: "体重を増やす（約0.5 kg/週）",
        gainFast: "速く体重を増やす（約1 kg/週）",
      },
    },
    errors: {
      weightOutOfRange: "体重は1〜300 kgの範囲で入力してください。",
      heightOutOfRange: "身長は50〜250 cmの範囲で入力してください。",
      ageOutOfRange: "年齢は1〜120歳の範囲で入力してください。",
    },
    faq: [
      {
        q: "TDEEとは何ですか？",
        a: "1日の総消費エネルギー（TDEE）は、基礎代謝量と身体活動を含めた1日の総カロリー消費量です。TDEEと同じカロリーを摂取すると、体重が維持されます。",
      },
      {
        q: "安全な減量ペースはどのくらいですか？",
        a: "多くのガイドラインでは、筋肉量の低下や代謝低下を防ぐため、週0.5〜1 kgを超えないことを推奨しています。",
      },
    ],
  },

  ko: {
    title: "칼로리 계산기",
    short: "하루 칼로리 필요량(TDEE)을 계산하고 체중 목표에 맞는 섭취량을 설정하세요.",
    description:
      "Mifflin-St Jeor 공식 기반의 무료 TDEE 계산기. 신체 정보와 활동 수준을 입력하면 유지 칼로리와 목표 칼로리를 계산해 드립니다.",
    keywords: [
      "칼로리 계산기",
      "TDEE 계산기",
      "하루 칼로리 필요량",
      "칼로리 적자",
      "유지 칼로리",
      "다이어트 칼로리",
      "에너지 소비량",
    ],
    inputs: {
      gender: { label: "생물학적 성별", help: "근육량과 호르몬 차이로 인해 성별이 BMR에 영향을 미칩니다." },
      weight: { label: "체중", help: "현재 체중(킬로그램)." },
      height: { label: "키", help: "키(센티미터)." },
      age: { label: "나이", help: "나이(세)." },
      activity: { label: "활동 수준", help: "주간 활동량에 가장 잘 맞는 수준을 선택하세요." },
      goal: { label: "목표", help: "체중 목표를 선택하세요." },
    },
    outputs: {
      tdee: { label: "유지 칼로리(TDEE)", help: "현재 체중을 유지하는 데 필요한 하루 칼로리.", suffix: "kcal/일" },
      target: { label: "목표 칼로리", help: "선택한 목표를 달성하기 위한 권장 일일 섭취량.", suffix: "kcal/일" },
      deficit: { label: "일일 잉여/적자", help: "양수 = 칼로리 잉여(증량용). 음수 = 칼로리 적자(감량용).", suffix: "kcal/일" },
    },
    options: {
      gender: { male: "남성", female: "여성" },
      activity: {
        sedentary: "좌식 생활(사무직, 운동 거의 없음)",
        light: "가벼운 활동(주 1-3일)",
        moderate: "중간 활동(주 3-5일)",
        active: "활발한 활동(주 6-7일)",
        veryActive: "매우 활발(육체 노동 또는 이중 훈련)",
      },
      goal: {
        maintain: "체중 유지",
        lose: "체중 감량(약 0.5 kg/주)",
        loseFast: "빠른 감량(약 1 kg/주)",
        gain: "체중 증가(약 0.5 kg/주)",
        gainFast: "빠른 증량(약 1 kg/주)",
      },
    },
    errors: {
      weightOutOfRange: "체중은 1~300 kg 범위여야 합니다.",
      heightOutOfRange: "키는 50~250 cm 범위여야 합니다.",
      ageOutOfRange: "나이는 1~120세 범위여야 합니다.",
    },
    faq: [
      {
        q: "TDEE란 무엇인가요?",
        a: "총 일일 에너지 소비량(TDEE)은 기초대사량과 신체 활동을 합산한 하루 총 칼로리 소비량입니다. TDEE만큼 섭취하면 체중이 유지됩니다.",
      },
      {
        q: "안전한 감량 속도는 얼마인가요?",
        a: "대부분의 지침은 근육 손실과 대사 저하를 방지하기 위해 주당 0.5-1 kg을 초과하지 않도록 권장합니다.",
      },
    ],
  },

  hi: {
    title: "कैलोरी कैलकुलेटर",
    short: "अपनी दैनिक कैलोरी आवश्यकता (TDEE) जानें और वज़न लक्ष्य के अनुसार लक्ष्य निर्धारित करें।",
    description:
      "Mifflin-St Jeor समीकरण पर आधारित मुफ़्त TDEE कैलकुलेटर। अपना डेटा और गतिविधि स्तर दर्ज करें और वज़न बनाए रखने की कैलोरी जानें।",
    keywords: [
      "कैलोरी कैलकुलेटर",
      "TDEE कैलकुलेटर",
      "दैनिक कैलोरी",
      "कैलोरी घाटा",
      "रखरखाव कैलोरी",
      "वज़न घटाना कैलोरी",
      "ऊर्जा व्यय",
    ],
    inputs: {
      gender: { label: "जैविक लिंग", help: "लिंग, मांसपेशियों और हार्मोन के अंतर के माध्यम से BMR को प्रभावित करता है।" },
      weight: { label: "वज़न", help: "आपका वर्तमान शारीरिक वज़न किलोग्राम में।" },
      height: { label: "लंबाई", help: "आपकी लंबाई सेंटीमीटर में।" },
      age: { label: "आयु", help: "आपकी आयु वर्षों में।" },
      activity: { label: "गतिविधि स्तर", help: "अपनी साप्ताहिक गतिविधि के अनुसार उचित स्तर चुनें।" },
      goal: { label: "लक्ष्य", help: "अपना वज़न लक्ष्य चुनें।" },
    },
    outputs: {
      tdee: { label: "रखरखाव कैलोरी (TDEE)", help: "वर्तमान वज़न बनाए रखने के लिए प्रतिदिन आवश्यक कैलोरी।", suffix: "kcal/दिन" },
      target: { label: "लक्ष्य कैलोरी", help: "चुने गए लक्ष्य के लिए अनुशंसित दैनिक कैलोरी।", suffix: "kcal/दिन" },
      deficit: { label: "दैनिक अधिशेष / घाटा", help: "धनात्मक = कैलोरी अधिशेष। ऋणात्मक = कैलोरी घाटा।", suffix: "kcal/दिन" },
    },
    options: {
      gender: { male: "पुरुष", female: "महिला" },
      activity: {
        sedentary: "निष्क्रिय (डेस्क जॉब, बहुत कम व्यायाम)",
        light: "हल्का सक्रिय (सप्ताह में 1-3 दिन)",
        moderate: "मध्यम सक्रिय (सप्ताह में 3-5 दिन)",
        active: "बहुत सक्रिय (सप्ताह में 6-7 दिन)",
        veryActive: "अत्यधिक सक्रिय (शारीरिक कार्य या दोहरा प्रशिक्षण)",
      },
      goal: {
        maintain: "वज़न बनाए रखें",
        lose: "वज़न घटाएं (~0.5 kg/सप्ताह)",
        loseFast: "तेज़ी से वज़न घटाएं (~1 kg/सप्ताह)",
        gain: "वज़न बढ़ाएं (~0.5 kg/सप्ताह)",
        gainFast: "तेज़ी से वज़न बढ़ाएं (~1 kg/सप्ताह)",
      },
    },
    errors: {
      weightOutOfRange: "वज़न 1 से 300 kg के बीच होना चाहिए।",
      heightOutOfRange: "लंबाई 50 से 250 cm के बीच होनी चाहिए।",
      ageOutOfRange: "आयु 1 से 120 वर्ष के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "TDEE क्या है?",
        a: "कुल दैनिक ऊर्जा व्यय (TDEE) वह कुल कैलोरी है जो आप एक दिन में जलाते हैं, जिसमें बेसल मेटाबॉलिक रेट और शारीरिक गतिविधि शामिल है। TDEE के बराबर खाने से वज़न स्थिर रहता है।",
      },
      {
        q: "सुरक्षित वज़न घटाने की गति क्या है?",
        a: "अधिकांश दिशानिर्देश मांसपेशियों के नुकसान और चयापचय धीमेपन से बचने के लिए प्रति सप्ताह 0.5-1 kg से अधिक न घटाने की सलाह देते हैं।",
      },
    ],
  },
};

export default i18n;
