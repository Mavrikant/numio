import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "VO₂max Calculator",
    short: "Estimate aerobic fitness (VO₂max) from a Cooper 12-min run or 1.5-mile run.",
    description:
      "Free VO₂max calculator using Cooper's 12-minute run formula or the 1.5-mile run test. Enter your test result, age and sex to estimate maximal oxygen uptake (ml/kg/min) and an ACSM fitness category.",
    keywords: [
      "VO2max calculator",
      "Cooper test",
      "1.5 mile run",
      "aerobic fitness",
      "cardio fitness",
      "maximal oxygen uptake",
      "ACSM fitness category",
    ],
    inputs: {
      testType: {
        label: "Test type",
        help: "Cooper 12-min run (distance) or 1.5-mile run (time).",
      },
      sex: { label: "Sex", help: "Biological sex — used only for fitness-category norms." },
      age: { label: "Age", help: "Your age in years (10–90)." },
      distance: {
        label: "Distance covered (12 min)",
        help: "Total distance covered in 12 minutes (Cooper test), in metres.",
      },
      timeMinutes: {
        label: "1.5-mile time",
        help: "Time taken to run 1.5 miles (2.41 km), in minutes (decimals allowed).",
      },
    },
    outputs: {
      vo2maxMlKgMin: {
        label: "VO₂max (ml/kg/min)",
        help: "Estimated maximal oxygen uptake — the standard measure of aerobic fitness.",
      },
      fitnessCategory: {
        label: "Fitness category",
        help: "ACSM age- and sex-adjusted category: poor / fair / good / excellent / superior.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "Cooper 12-min run (distance)",
        "mile-and-half": "1.5-mile run (time)",
      },
      sex: { male: "Male", female: "Female" },
    },
    errors: {
      ageOutOfRange: "Age must be between 10 and 90 years.",
      distanceRequired: "Distance is required for the Cooper 12-minute test.",
      distanceOutOfRange: "Distance must be between 500 and 6000 metres.",
      timeRequired: "Time is required for the 1.5-mile run test.",
      timeOutOfRange: "Time must be between 5 and 30 minutes.",
    },
    faq: [
      {
        q: "What is VO₂max?",
        a: "VO₂max is the maximum volume of oxygen your body can use per minute per kilogram of body weight (ml/kg/min). It reflects aerobic capacity and is one of the best predictors of cardiorespiratory fitness.",
      },
      {
        q: "How accurate is the Cooper test?",
        a: "Cooper's original 1968 study reported r ≈ 0.90 with treadmill VO₂max for healthy young men. Real-world precision is ±10–15% — sufficient to categorise fitness but not to replace lab measurement.",
      },
      {
        q: "Which test should I pick?",
        a: "Both are field tests with similar accuracy. The Cooper 12-min run is timed; the 1.5-mile run uses a fixed distance. Choose whichever matches your track or familiar route.",
      },
      {
        q: "Is it safe for me?",
        a: "Field VO₂max tests are maximal-effort runs. If you are over 40, sedentary, or have any cardiac risk factors, get medical clearance before testing.",
      },
    ],
  },
  nl: {
    title: "VO₂max Calculator",
    short: "Estimate aerobic fitness (VO₂max) from a Cooper 12-min run or 1.5-mile run.",
    description:
      "Gratis VO₂max calculator using Cooper's 12-minute run formula or the 1.5-mile run test. Enter your test result, age and sex to estimate maximal oxygen uptake (ml/kg/min) and an ACSM fitness category.",
    keywords: [
      "VO2max calculator",
      "Cooper test",
      "1.5 mile run",
      "aerobic fitness",
      "cardio fitness",
      "maximal oxygen uptake",
      "ACSM fitness category",
    ],
    inputs: {
      testType: {
        label: "Test type",
        help: "Cooper 12-min run (distance) or 1.5-mile run (time).",
      },
      sex: { label: "Sex", help: "Biological sex — used only for fitness-category norms." },
      age: { label: "Leeftijd", help: "Your age in jaren (10–90)." },
      distance: {
        label: "Distance covered (12 min)",
        help: "Total distance covered in 12 minuten (Cooper test), in metres.",
      },
      timeMinutes: {
        label: "1.5-mile time",
        help: "Time taken to run 1.5 miles (2.41 km), in minuten (decimals allowed).",
      },
    },
    outputs: {
      vo2maxMlKgMin: {
        label: "VO₂max (ml/kg/min)",
        help: "Estimated maximal oxygen uptake — the standard measure of aerobic fitness.",
      },
      fitnessCategory: {
        label: "Fitness category",
        help: "ACSM age- and sex-adjusted category: poor / fair / good / excellent / superior.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "Cooper 12-min run (distance)",
        "mile-and-half": "1.5-mile run (time)",
      },
      sex: { male: "Male", female: "Female" },
    },
    errors: {
      ageOutOfRange: "Leeftijd must be between 10 and 90 jaren.",
      distanceRequired: "Distance is required for the Cooper 12-minute test.",
      distanceOutOfRange: "Distance must be between 500 and 6000 metres.",
      timeRequired: "Time is required for the 1.5-mile run test.",
      timeOutOfRange: "Time must be between 5 and 30 minuten.",
    },
    faq: [
      {
        q: "What is VO₂max?",
        a: "VO₂max is the maximum volume of oxygen your body can use per minute per kilogram of body weight (ml/kg/min). It reflects aerobic capacity and is one of the best predictors of cardiorespiratory fitness.",
      },
      {
        q: "How accurate is the Cooper test?",
        a: "Cooper's original 1968 study reported r ≈ 0.90 with treadmill VO₂max for healthy young men. Real-world precision is ±10–15% — sufficient to categorise fitness but not to replace lab measurement.",
      },
      {
        q: "Which test should I pick?",
        a: "Both are field tests with similar accuracy. The Cooper 12-min run is timed; the 1.5-mile run uses a fixed distance. Choose whichever matches your track or familiar route.",
      },
      {
        q: "Is it safe for me?",
        a: "Field VO₂max tests are maximal-effort runs. If you are over 40, sedentary, or have any cardiac risk factors, get medical clearance before testing.",
      },
    ],
  },

  pl: {
    title: "VO₂max Kalkulator",
    short: "Estimate aerobic fitness (VO₂max) from a Cooper 12-min run or 1.5-mile run.",
    description:
      "Darmowy VO₂max kalkulator using Cooper's 12-minute run formula or the 1.5-mile run test. Enter your test result, age and sex to estimate maximal oxygen uptake (ml/kg/min) and an ACSM fitness category.",
    keywords: [
      "VO2max kalkulator",
      "Cooper test",
      "1.5 mile run",
      "aerobic fitness",
      "cardio fitness",
      "maximal oxygen uptake",
      "ACSM fitness category",
    ],
    inputs: {
      testType: {
        label: "Test type",
        help: "Cooper 12-min run (distance) or 1.5-mile run (time).",
      },
      sex: { label: "Sex", help: "Biological sex — used only for fitness-category norms." },
      age: { label: "Wiek", help: "Your age in lat (10–90)." },
      distance: {
        label: "Distance covered (12 min)",
        help: "Total distance covered in 12 minut (Cooper test), in metres.",
      },
      timeMinutes: {
        label: "1.5-mile time",
        help: "Time taken to run 1.5 miles (2.41 km), in minut (decimals allowed).",
      },
    },
    outputs: {
      vo2maxMlKgMin: {
        label: "VO₂max (ml/kg/min)",
        help: "Estimated maximal oxygen uptake — the standard measure of aerobic fitness.",
      },
      fitnessCategory: {
        label: "Fitness category",
        help: "ACSM age- and sex-adjusted category: poor / fair / good / excellent / superior.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "Cooper 12-min run (distance)",
        "mile-and-half": "1.5-mile run (time)",
      },
      sex: { male: "Male", female: "Female" },
    },
    errors: {
      ageOutOfRange: "Wiek must be between 10 and 90 lat.",
      distanceRequired: "Distance is required for the Cooper 12-minute test.",
      distanceOutOfRange: "Distance must be between 500 and 6000 metres.",
      timeRequired: "Time is required for the 1.5-mile run test.",
      timeOutOfRange: "Time must be between 5 and 30 minut.",
    },
    faq: [
      {
        q: "What is VO₂max?",
        a: "VO₂max is the maximum volume of oxygen your body can use per minute per kilogram of body weight (ml/kg/min). It reflects aerobic capacity and is one of the best predictors of cardiorespiratory fitness.",
      },
      {
        q: "How accurate is the Cooper test?",
        a: "Cooper's original 1968 study reported r ≈ 0.90 with treadmill VO₂max for healthy young men. Real-world precision is ±10–15% — sufficient to categorise fitness but not to replace lab measurement.",
      },
      {
        q: "Which test should I pick?",
        a: "Both are field tests with similar accuracy. The Cooper 12-min run is timed; the 1.5-mile run uses a fixed distance. Choose whichever matches your track or familiar route.",
      },
      {
        q: "Is it safe for me?",
        a: "Field VO₂max tests are maximal-effort runs. If you are over 40, sedentary, or have any cardiac risk factors, get medical clearance before testing.",
      },
    ],
  },
  pt: {
    title: "Calculadora de VO2 Máximo",
    short: "Estime o seu VO2 máximo — capacidade aeróbica.",
    description:
      "Calculadora gratuita de VO2max. Estime a sua capacidade aeróbica máxima com base no teste de Cooper ou frequência cardíaca em repouso.",
    keywords: ["VO2 max", "capacidade aeróbica", "teste Cooper", "fitness aeróbico", "calculadora VO2"],
    inputs: {
      testType: {
        label: "Test type",
        help: "Cooper 12-min run (distance) or 1.5-mile run (time).",
      },
      sex: { label: "Sex", help: "Biological sex — used only for fitness-category norms." },
      age: { label: "Age", help: "Your age in years (10–90)." },
      distance: {
        label: "Distance covered (12 min)",
        help: "Total distance covered in 12 minutes (Cooper test), in metres.",
      },
      timeMinutes: {
        label: "1.5-mile time",
        help: "Time taken to run 1.5 miles (2.41 km), in minutes (decimals allowed).",
      },
    },
    outputs: {
      vo2maxMlKgMin: {
        label: "VO₂max (ml/kg/min)",
        help: "Estimated maximal oxygen uptake — the standard measure of aerobic fitness.",
      },
      fitnessCategory: {
        label: "Fitness category",
        help: "ACSM age- and sex-adjusted category: poor / fair / good / excellent / superior.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "Cooper 12-min run (distance)",
        "mile-and-half": "1.5-mile run (time)",
      },
      sex: { male: "Male", female: "Female" },
    },
    errors: {
      ageOutOfRange: "Age must be between 10 and 90 years.",
      distanceRequired: "Distance is required for the Cooper 12-minute test.",
      distanceOutOfRange: "Distance must be between 500 and 6000 metres.",
      timeRequired: "Time is required for the 1.5-mile run test.",
      timeOutOfRange: "Time must be between 5 and 30 minutes.",
    },
    faq: [
      {
        q: "What is VO₂max?",
        a: "VO₂max is the maximum volume of oxygen your body can use per minute per kilogram of body weight (ml/kg/min). It reflects aerobic capacity and is one of the best predictors of cardiorespiratory fitness.",
      },
      {
        q: "How accurate is the Cooper test?",
        a: "Cooper's original 1968 study reported r ≈ 0.90 with treadmill VO₂max for healthy young men. Real-world precision is ±10–15% — sufficient to categorise fitness but not to replace lab measurement.",
      },
      {
        q: "Which test should I pick?",
        a: "Both are field tests with similar accuracy. The Cooper 12-min run is timed; the 1.5-mile run uses a fixed distance. Choose whichever matches your track or familiar route.",
      },
      {
        q: "Is it safe for me?",
        a: "Field VO₂max tests are maximal-effort runs. If you are over 40, sedentary, or have any cardiac risk factors, get medical clearance before testing.",
      },
    ],
  },
  id: {
    title: "Kalkulator VO2 Max",
    short: "Estimasi VO2 max Anda — kapasitas aerobik.",
    description:
      "Kalkulator VO2max gratis. Estimasi kapasitas aerobik maksimum berdasarkan tes Cooper atau denyut nadi istirahat.",
    keywords: ["VO2 max", "kapasitas aerobik", "tes Cooper", "kebugaran aerobik", "kalkulator VO2"],
    inputs: {
      testType: {
        label: "Test type",
        help: "Cooper 12-min run (distance) or 1.5-mile run (time).",
      },
      sex: { label: "Sex", help: "Biological sex — used only for fitness-category norms." },
      age: { label: "Age", help: "Your age in years (10–90)." },
      distance: {
        label: "Distance covered (12 min)",
        help: "Total distance covered in 12 minutes (Cooper test), in metres.",
      },
      timeMinutes: {
        label: "1.5-mile time",
        help: "Time taken to run 1.5 miles (2.41 km), in minutes (decimals allowed).",
      },
    },
    outputs: {
      vo2maxMlKgMin: {
        label: "VO₂max (ml/kg/min)",
        help: "Estimated maximal oxygen uptake — the standard measure of aerobic fitness.",
      },
      fitnessCategory: {
        label: "Fitness category",
        help: "ACSM age- and sex-adjusted category: poor / fair / good / excellent / superior.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "Cooper 12-min run (distance)",
        "mile-and-half": "1.5-mile run (time)",
      },
      sex: { male: "Male", female: "Female" },
    },
    errors: {
      ageOutOfRange: "Age must be between 10 and 90 years.",
      distanceRequired: "Distance is required for the Cooper 12-minute test.",
      distanceOutOfRange: "Distance must be between 500 and 6000 metres.",
      timeRequired: "Time is required for the 1.5-mile run test.",
      timeOutOfRange: "Time must be between 5 and 30 minutes.",
    },
    faq: [
      {
        q: "What is VO₂max?",
        a: "VO₂max is the maximum volume of oxygen your body can use per minute per kilogram of body weight (ml/kg/min). It reflects aerobic capacity and is one of the best predictors of cardiorespiratory fitness.",
      },
      {
        q: "How accurate is the Cooper test?",
        a: "Cooper's original 1968 study reported r ≈ 0.90 with treadmill VO₂max for healthy young men. Real-world precision is ±10–15% — sufficient to categorise fitness but not to replace lab measurement.",
      },
      {
        q: "Which test should I pick?",
        a: "Both are field tests with similar accuracy. The Cooper 12-min run is timed; the 1.5-mile run uses a fixed distance. Choose whichever matches your track or familiar route.",
      },
      {
        q: "Is it safe for me?",
        a: "Field VO₂max tests are maximal-effort runs. If you are over 40, sedentary, or have any cardiac risk factors, get medical clearance before testing.",
      },
    ],
  },


  tr: {
    title: "VO₂max Hesaplayıcı",
    short: "Cooper 12 dakika veya 1,5 mil koşu testinden aerobik kapasiteyi (VO₂max) tahmin edin.",
    description:
      "Cooper'ın 12 dakikalık koşu formülü veya 1,5 mil koşu testini kullanan ücretsiz VO₂max hesaplayıcı. Test sonucunuzu, yaşınızı ve cinsiyetinizi girerek maksimum oksijen alımını (ml/kg/dk) ve ACSM uygunluk kategorisini öğrenin.",
    keywords: [
      "VO2max hesaplayıcı",
      "Cooper testi",
      "1,5 mil koşu",
      "aerobik kapasite",
      "kardiyo kondisyon",
      "maksimum oksijen tüketimi",
      "ACSM kategorisi",
    ],
    inputs: {
      testType: {
        label: "Test türü",
        help: "Cooper 12 dk (mesafe) veya 1,5 mil koşu (süre).",
      },
      sex: { label: "Cinsiyet", help: "Yalnızca uygunluk kategorisi normları için kullanılır." },
      age: { label: "Yaş", help: "Yaşınız (10–90)." },
      distance: {
        label: "12 dakikada kat edilen mesafe",
        help: "Cooper testinde 12 dakikada metre cinsinden alınan toplam mesafe.",
      },
      timeMinutes: {
        label: "1,5 mil süresi",
        help: "1,5 mil (2,41 km) koşma süresi (dakika; ondalık kabul edilir).",
      },
    },
    outputs: {
      vo2maxMlKgMin: {
        label: "VO₂max (ml/kg/dk)",
        help: "Tahmini maksimum oksijen alımı — aerobik kapasitenin standart ölçüsü.",
      },
      fitnessCategory: {
        label: "Uygunluk kategorisi",
        help: "ACSM yaş ve cinsiyete göre düzeltilmiş kategori: zayıf / orta / iyi / mükemmel / üstün.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "Cooper 12 dk koşu (mesafe)",
        "mile-and-half": "1,5 mil koşu (süre)",
      },
      sex: { male: "Erkek", female: "Kadın" },
    },
    errors: {
      ageOutOfRange: "Yaş 10–90 arasında olmalıdır.",
      distanceRequired: "Cooper testi için mesafe zorunludur.",
      distanceOutOfRange: "Mesafe 500–6000 metre arasında olmalıdır.",
      timeRequired: "1,5 mil testi için süre zorunludur.",
      timeOutOfRange: "Süre 5–30 dakika arasında olmalıdır.",
    },
    faq: [
      {
        q: "VO₂max nedir?",
        a: "VO₂max, vücudun dakikada kilogram başına kullanabildiği maksimum oksijen miktarıdır (ml/kg/dk). Aerobik kapasitenin ve kardiyo-solunum dayanıklılığının en iyi göstergelerinden biridir.",
      },
      {
        q: "Cooper testi ne kadar doğru?",
        a: "Cooper'ın 1968 çalışmasında genç sağlıklı erkeklerde treadmill VO₂max ile korelasyon r ≈ 0,90 idi. Gerçek dünyada ±%10–15 hassasiyet beklenebilir.",
      },
      {
        q: "Hangi testi seçmeliyim?",
        a: "Her ikisi de alan testidir ve benzer doğruluğa sahiptir. Cooper 12 dakika sabit süredir; 1,5 mil sabit mesafedir.",
      },
      {
        q: "Benim için güvenli mi?",
        a: "Saha VO₂max testleri maksimal eforludur. 40 yaş üstüyseniz, hareketsizseniz veya kalp riski varsa öncesinde doktor onayı alın.",
      },
    ],
  },

  de: {
    title: "VO₂max-Rechner",
    short: "Schätzen Sie Ihre Ausdauerleistung (VO₂max) per Cooper-12-Min-Test oder 1,5-Meilen-Lauf.",
    description:
      "Kostenloser VO₂max-Rechner mit Cooper-12-Minuten-Formel oder dem 1,5-Meilen-Lauf. Geben Sie Testergebnis, Alter und Geschlecht ein, um die maximale Sauerstoffaufnahme (ml/kg/min) sowie eine ACSM-Fitness-Kategorie zu erhalten.",
    keywords: [
      "VO2max Rechner",
      "Cooper Test",
      "1,5 Meilen Lauf",
      "Ausdauerleistung",
      "Kardio Fitness",
      "maximale Sauerstoffaufnahme",
      "ACSM Kategorie",
    ],
    inputs: {
      testType: {
        label: "Testart",
        help: "Cooper 12 min (Distanz) oder 1,5-Meilen-Lauf (Zeit).",
      },
      sex: { label: "Geschlecht", help: "Nur für die Fitness-Kategorie-Norm." },
      age: { label: "Alter", help: "Ihr Alter in Jahren (10–90)." },
      distance: {
        label: "Distanz in 12 Minuten",
        help: "Im Cooper-Test in 12 Minuten zurückgelegte Distanz in Metern.",
      },
      timeMinutes: {
        label: "1,5-Meilen-Zeit",
        help: "Zeit für 1,5 Meilen (2,41 km) in Minuten (Dezimal erlaubt).",
      },
    },
    outputs: {
      vo2maxMlKgMin: { label: "VO₂max (ml/kg/min)", help: "Geschätzte maximale Sauerstoffaufnahme." },
      fitnessCategory: {
        label: "Fitness-Kategorie",
        help: "ACSM-Kategorie nach Alter und Geschlecht: schlecht / mäßig / gut / sehr gut / überlegen.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "Cooper 12-Min-Lauf (Distanz)",
        "mile-and-half": "1,5-Meilen-Lauf (Zeit)",
      },
      sex: { male: "Männlich", female: "Weiblich" },
    },
    errors: {
      ageOutOfRange: "Alter muss zwischen 10 und 90 Jahren liegen.",
      distanceRequired: "Distanz ist für den Cooper-Test erforderlich.",
      distanceOutOfRange: "Distanz muss zwischen 500 und 6000 m liegen.",
      timeRequired: "Zeit ist für den 1,5-Meilen-Test erforderlich.",
      timeOutOfRange: "Zeit muss zwischen 5 und 30 Minuten liegen.",
    },
    faq: [
      {
        q: "Was ist VO₂max?",
        a: "VO₂max ist die maximale Sauerstoffmenge, die Ihr Körper pro Minute und pro Kilogramm Körpergewicht verarbeiten kann. Sie ist ein zentraler Indikator der Ausdauerleistung.",
      },
      {
        q: "Wie genau ist der Cooper-Test?",
        a: "Cooper berichtete 1968 r ≈ 0,90 mit der Laufband-VO₂max. Praktische Genauigkeit liegt bei ±10–15 %.",
      },
      {
        q: "Ist der Test sicher?",
        a: "Es handelt sich um maximale Belastungen. Über 40, untrainiert oder mit Herzrisiko sollten Sie vorher ärztlich abklären.",
      },
    ],
  },

  fr: {
    title: "Calculateur de VO₂max",
    short: "Estimez votre capacité aérobie (VO₂max) à partir du Cooper 12 min ou du 1,5 mile.",
    description:
      "Calculateur gratuit utilisant la formule du test Cooper 12 min ou du 1,5 mile. Entrez votre résultat, âge et sexe pour obtenir le VO₂max (ml/kg/min) et une catégorie de forme ACSM.",
    keywords: [
      "calculateur VO2max",
      "test Cooper",
      "course 1,5 mile",
      "capacité aérobie",
      "fitness cardio",
      "consommation maximale oxygène",
      "catégorie ACSM",
    ],
    inputs: {
      testType: {
        label: "Type de test",
        help: "Cooper 12 min (distance) ou 1,5 mile (temps).",
      },
      sex: { label: "Sexe", help: "Utilisé uniquement pour les normes de catégorisation." },
      age: { label: "Âge", help: "Votre âge en années (10–90)." },
      distance: {
        label: "Distance parcourue (12 min)",
        help: "Distance totale en 12 minutes (test Cooper), en mètres.",
      },
      timeMinutes: {
        label: "Temps 1,5 mile",
        help: "Temps pour 1,5 mile (2,41 km) en minutes (décimales acceptées).",
      },
    },
    outputs: {
      vo2maxMlKgMin: { label: "VO₂max (ml/kg/min)", help: "Consommation maximale d'oxygène estimée." },
      fitnessCategory: {
        label: "Catégorie de forme",
        help: "ACSM par âge et sexe : faible / moyen / bon / excellent / supérieur.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "Cooper 12 min (distance)",
        "mile-and-half": "1,5 mile (temps)",
      },
      sex: { male: "Homme", female: "Femme" },
    },
    errors: {
      ageOutOfRange: "L'âge doit être entre 10 et 90 ans.",
      distanceRequired: "La distance est requise pour le test Cooper.",
      distanceOutOfRange: "Distance entre 500 et 6000 m.",
      timeRequired: "Le temps est requis pour le test 1,5 mile.",
      timeOutOfRange: "Temps entre 5 et 30 minutes.",
    },
    faq: [
      {
        q: "Qu'est-ce que le VO₂max ?",
        a: "Volume maximal d'oxygène utilisable par minute et par kilogramme de poids corporel (ml/kg/min). C'est l'un des meilleurs indicateurs de la condition cardiorespiratoire.",
      },
      {
        q: "Quelle précision pour le test Cooper ?",
        a: "Cooper (1968) rapportait r ≈ 0,90 avec le VO₂max sur tapis. La précision pratique est de ±10–15 %.",
      },
      {
        q: "Est-ce sans danger ?",
        a: "Ce sont des efforts maximaux. Au-dessus de 40 ans, sédentaire ou avec risque cardiaque, consultez un médecin avant.",
      },
    ],
  },

  es: {
    title: "Calculadora de VO₂máx",
    short: "Estima la capacidad aeróbica (VO₂máx) con el test Cooper 12 min o la 1,5 milla.",
    description:
      "Calculadora gratuita basada en la fórmula del Cooper 12 min o la prueba de 1,5 millas. Introduce tu resultado, edad y sexo para estimar el consumo máximo de oxígeno (ml/kg/min) y una categoría de forma ACSM.",
    keywords: [
      "calculadora VO2max",
      "test de Cooper",
      "carrera 1,5 millas",
      "capacidad aeróbica",
      "fitness cardio",
      "consumo máximo de oxígeno",
      "categoría ACSM",
    ],
    inputs: {
      testType: {
        label: "Tipo de test",
        help: "Cooper 12 min (distancia) o 1,5 millas (tiempo).",
      },
      sex: { label: "Sexo", help: "Sólo para las normas de categoría de fitness." },
      age: { label: "Edad", help: "Tu edad en años (10–90)." },
      distance: {
        label: "Distancia recorrida (12 min)",
        help: "Distancia total en 12 minutos (Cooper), en metros.",
      },
      timeMinutes: {
        label: "Tiempo 1,5 millas",
        help: "Tiempo para correr 1,5 millas (2,41 km), en minutos (decimales aceptados).",
      },
    },
    outputs: {
      vo2maxMlKgMin: { label: "VO₂máx (ml/kg/min)", help: "Consumo máximo de oxígeno estimado." },
      fitnessCategory: {
        label: "Categoría de fitness",
        help: "ACSM por edad y sexo: pobre / regular / bueno / excelente / superior.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "Cooper 12 min (distancia)",
        "mile-and-half": "1,5 millas (tiempo)",
      },
      sex: { male: "Hombre", female: "Mujer" },
    },
    errors: {
      ageOutOfRange: "La edad debe estar entre 10 y 90 años.",
      distanceRequired: "La distancia es obligatoria para el test Cooper.",
      distanceOutOfRange: "Distancia entre 500 y 6000 m.",
      timeRequired: "El tiempo es obligatorio para el test de 1,5 millas.",
      timeOutOfRange: "Tiempo entre 5 y 30 minutos.",
    },
    faq: [
      {
        q: "¿Qué es el VO₂máx?",
        a: "Volumen máximo de oxígeno que el cuerpo puede usar por minuto y por kilogramo (ml/kg/min). Es uno de los mejores indicadores de la condición cardiorrespiratoria.",
      },
      {
        q: "¿Qué tan preciso es el Cooper?",
        a: "Cooper (1968) reportó r ≈ 0,90 con la VO₂máx en tapiz. En la práctica la precisión es ±10–15 %.",
      },
      {
        q: "¿Es seguro?",
        a: "Son esfuerzos máximos. Si tienes más de 40 años, sedentarismo o riesgo cardíaco, consulta a un médico antes.",
      },
    ],
  },

  it: {
    title: "Calcolatore VO₂max",
    short: "Stima la capacità aerobica (VO₂max) col test Cooper 12 min o la 1,5 miglia.",
    description:
      "Calcolatore gratuito basato sulla formula del Cooper 12 min o del 1,5 miglia. Inserisci risultato, età e sesso per ottenere VO₂max (ml/kg/min) e una categoria di fitness ACSM.",
    keywords: [
      "calcolatore VO2max",
      "test di Cooper",
      "corsa 1,5 miglia",
      "capacità aerobica",
      "fitness cardio",
      "massimo consumo ossigeno",
      "categoria ACSM",
    ],
    inputs: {
      testType: {
        label: "Tipo di test",
        help: "Cooper 12 min (distanza) o 1,5 miglia (tempo).",
      },
      sex: { label: "Sesso", help: "Usato solo per le norme di categoria fitness." },
      age: { label: "Età", help: "La tua età in anni (10–90)." },
      distance: {
        label: "Distanza percorsa (12 min)",
        help: "Distanza totale in 12 minuti (Cooper) in metri.",
      },
      timeMinutes: {
        label: "Tempo 1,5 miglia",
        help: "Tempo per percorrere 1,5 miglia (2,41 km) in minuti (decimali ammessi).",
      },
    },
    outputs: {
      vo2maxMlKgMin: { label: "VO₂max (ml/kg/min)", help: "Consumo massimo di ossigeno stimato." },
      fitnessCategory: {
        label: "Categoria di fitness",
        help: "ACSM per età e sesso: scarsa / discreta / buona / eccellente / superiore.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "Cooper 12 min (distanza)",
        "mile-and-half": "1,5 miglia (tempo)",
      },
      sex: { male: "Maschio", female: "Femmina" },
    },
    errors: {
      ageOutOfRange: "L'età deve essere tra 10 e 90 anni.",
      distanceRequired: "La distanza è richiesta per il test Cooper.",
      distanceOutOfRange: "Distanza tra 500 e 6000 m.",
      timeRequired: "Il tempo è richiesto per il test 1,5 miglia.",
      timeOutOfRange: "Tempo tra 5 e 30 minuti.",
    },
    faq: [
      {
        q: "Cos'è il VO₂max?",
        a: "Volume massimo di ossigeno utilizzabile per minuto per kg (ml/kg/min). È uno dei migliori indicatori di fitness cardiorespiratorio.",
      },
      {
        q: "Quanto è preciso il test Cooper?",
        a: "Cooper (1968) riportò r ≈ 0,90 con VO₂max su tapis. In pratica la precisione è ±10–15%.",
      },
      {
        q: "È sicuro?",
        a: "Sono sforzi massimali. Oltre i 40 anni, sedentari o con rischio cardiaco, consulta prima un medico.",
      },
    ],
  },

  ar: {
    title: "حاسبة VO₂max",
    short: "قدّر اللياقة الهوائية (VO₂max) من اختبار كوبر 12 دقيقة أو ركض 1.5 ميل.",
    description:
      "حاسبة مجانية تستخدم معادلة كوبر 12 دقيقة أو اختبار 1.5 ميل. أدخل نتيجة الاختبار والعمر والجنس لتقدير أقصى استهلاك للأكسجين (مل/كجم/دقيقة) وفئة لياقة ACSM.",
    keywords: [
      "حاسبة VO2max",
      "اختبار كوبر",
      "ركض 1.5 ميل",
      "لياقة هوائية",
      "اللياقة القلبية",
      "أقصى استهلاك أكسجين",
      "فئة ACSM",
    ],
    inputs: {
      testType: {
        label: "نوع الاختبار",
        help: "كوبر 12 دقيقة (مسافة) أو 1.5 ميل (وقت).",
      },
      sex: { label: "الجنس", help: "يُستخدم فقط لمعايير فئة اللياقة." },
      age: { label: "العمر", help: "عمرك بالسنوات (10–90)." },
      distance: {
        label: "المسافة المقطوعة (12 دقيقة)",
        help: "المسافة الكلية بالمتر خلال 12 دقيقة (اختبار كوبر).",
      },
      timeMinutes: {
        label: "زمن 1.5 ميل",
        help: "الوقت اللازم لقطع 1.5 ميل (2.41 كم) بالدقائق (تُقبل الأعداد العشرية).",
      },
    },
    outputs: {
      vo2maxMlKgMin: { label: "VO₂max (مل/كجم/دقيقة)", help: "تقدير أقصى استهلاك للأكسجين." },
      fitnessCategory: {
        label: "فئة اللياقة",
        help: "فئة ACSM حسب العمر والجنس: ضعيفة / مقبولة / جيدة / ممتازة / فائقة.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "كوبر 12 دقيقة (مسافة)",
        "mile-and-half": "1.5 ميل (وقت)",
      },
      sex: { male: "ذكر", female: "أنثى" },
    },
    errors: {
      ageOutOfRange: "العمر بين 10 و90 سنة.",
      distanceRequired: "المسافة مطلوبة لاختبار كوبر.",
      distanceOutOfRange: "المسافة بين 500 و6000 متر.",
      timeRequired: "الوقت مطلوب لاختبار 1.5 ميل.",
      timeOutOfRange: "الوقت بين 5 و30 دقيقة.",
    },
    faq: [
      {
        q: "ما هو VO₂max؟",
        a: "أقصى حجم أكسجين يستطيع جسمك استهلاكه في الدقيقة لكل كيلوغرام (مل/كجم/دقيقة). من أفضل مؤشرات اللياقة القلبية التنفسية.",
      },
      {
        q: "ما دقة اختبار كوبر؟",
        a: "أبلغ كوبر (1968) عن r ≈ 0.90 مع VO₂max على جهاز الجري. الدقة العملية ±10–15%.",
      },
      {
        q: "هل هو آمن لي؟",
        a: "اختبارات الميدان مجهود أقصى. فوق 40 أو في حالات الخمول أو خطر القلب، استشر الطبيب أولًا.",
      },
    ],
  },

  ru: {
    title: "Калькулятор VO₂max",
    short: "Оцените аэробную форму (VO₂max) по 12-минутному тесту Купера или забегу 1,5 мили.",
    description:
      "Бесплатный калькулятор по формуле Купера (12 мин) или тесту 1,5 мили. Введите результат, возраст и пол, чтобы рассчитать максимальное потребление кислорода (мл/кг/мин) и категорию ACSM.",
    keywords: [
      "калькулятор VO2max",
      "тест Купера",
      "забег 1,5 мили",
      "аэробная форма",
      "кардио фитнес",
      "максимальное потребление кислорода",
      "категория ACSM",
    ],
    inputs: {
      testType: {
        label: "Тип теста",
        help: "12 мин Купера (дистанция) или 1,5 мили (время).",
      },
      sex: { label: "Пол", help: "Используется только для нормативов категории." },
      age: { label: "Возраст", help: "Ваш возраст (10–90)." },
      distance: {
        label: "Дистанция за 12 мин",
        help: "Общее расстояние за 12 минут (тест Купера), в метрах.",
      },
      timeMinutes: {
        label: "Время 1,5 мили",
        help: "Время на 1,5 мили (2,41 км) в минутах (допускаются десятичные).",
      },
    },
    outputs: {
      vo2maxMlKgMin: { label: "VO₂max (мл/кг/мин)", help: "Оценка максимального потребления кислорода." },
      fitnessCategory: {
        label: "Категория формы",
        help: "ACSM по возрасту и полу: слабо / удовлетворительно / хорошо / отлично / превосходно.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "Купер 12 мин (дистанция)",
        "mile-and-half": "1,5 мили (время)",
      },
      sex: { male: "Мужской", female: "Женский" },
    },
    errors: {
      ageOutOfRange: "Возраст должен быть от 10 до 90 лет.",
      distanceRequired: "Для теста Купера требуется дистанция.",
      distanceOutOfRange: "Дистанция от 500 до 6000 м.",
      timeRequired: "Для теста 1,5 мили требуется время.",
      timeOutOfRange: "Время от 5 до 30 минут.",
    },
    faq: [
      {
        q: "Что такое VO₂max?",
        a: "Максимальный объём кислорода, который тело может усвоить за минуту на килограмм массы (мл/кг/мин). Один из лучших показателей кардиореспираторной выносливости.",
      },
      {
        q: "Насколько точен тест Купера?",
        a: "Купер (1968) сообщал r ≈ 0,90 с VO₂max на беговой дорожке. На практике точность ±10–15%.",
      },
      {
        q: "Безопасно ли это?",
        a: "Это максимальная нагрузка. Если вам больше 40, есть малоподвижный образ жизни или сердечный риск, сначала проконсультируйтесь с врачом.",
      },
    ],
  },

  zh: {
    title: "最大摄氧量（VO₂max）计算器",
    short: "通过库珀12分钟或1.5英里跑测试估算有氧能力（VO₂max）。",
    description:
      "基于库珀12分钟跑或1.5英里跑公式的免费VO₂max计算器。输入测试结果、年龄和性别，估算最大摄氧量（ml/kg/min）及ACSM体能等级。",
    keywords: [
      "VO2max计算器",
      "库珀测试",
      "1.5英里跑",
      "有氧能力",
      "心肺耐力",
      "最大摄氧量",
      "ACSM等级",
    ],
    inputs: {
      testType: {
        label: "测试类型",
        help: "库珀12分钟（距离）或1.5英里跑（时间）。",
      },
      sex: { label: "性别", help: "仅用于体能等级标准。" },
      age: { label: "年龄", help: "您的年龄（10–90）。" },
      distance: {
        label: "12分钟距离",
        help: "库珀测试中12分钟跑过的总距离（米）。",
      },
      timeMinutes: {
        label: "1.5英里时间",
        help: "跑完1.5英里（2.41公里）的时间（分钟，允许小数）。",
      },
    },
    outputs: {
      vo2maxMlKgMin: { label: "VO₂max (ml/kg/min)", help: "估算的最大摄氧量。" },
      fitnessCategory: {
        label: "体能等级",
        help: "ACSM按年龄和性别分类：差 / 一般 / 良好 / 优秀 / 卓越。",
      },
    },
    options: {
      testType: {
        "cooper-12min": "库珀12分钟（距离）",
        "mile-and-half": "1.5英里跑（时间）",
      },
      sex: { male: "男", female: "女" },
    },
    errors: {
      ageOutOfRange: "年龄须在10至90岁之间。",
      distanceRequired: "库珀测试需要距离。",
      distanceOutOfRange: "距离须在500至6000米之间。",
      timeRequired: "1.5英里测试需要时间。",
      timeOutOfRange: "时间须在5至30分钟之间。",
    },
    faq: [
      {
        q: "什么是VO₂max？",
        a: "VO₂max是身体每分钟每公斤体重能利用的最大氧气量（ml/kg/min），是衡量心肺耐力的核心指标。",
      },
      {
        q: "库珀测试精度如何？",
        a: "库珀（1968）报告与跑台VO₂max的相关性r≈0.90，实际精度约±10–15%。",
      },
      {
        q: "是否安全？",
        a: "这是最大强度跑步。40岁以上、久坐或心脏风险者请先咨询医生。",
      },
    ],
  },

  ja: {
    title: "VO₂max計算機",
    short: "クーパー12分走または1.5マイル走から有酸素能力（VO₂max）を推定します。",
    description:
      "クーパー12分走または1.5マイル走に基づく無料VO₂max計算機。テスト結果、年齢、性別を入力して最大酸素摂取量（ml/kg/min）とACSMフィットネスカテゴリを確認できます。",
    keywords: [
      "VO2max計算機",
      "クーパーテスト",
      "1.5マイル走",
      "有酸素能力",
      "心肺フィットネス",
      "最大酸素摂取量",
      "ACSMカテゴリ",
    ],
    inputs: {
      testType: {
        label: "テストの種類",
        help: "クーパー12分（距離）または1.5マイル走（時間）。",
      },
      sex: { label: "性別", help: "フィットネスカテゴリ基準にのみ使用します。" },
      age: { label: "年齢", help: "年齢（10〜90）。" },
      distance: {
        label: "12分間の走行距離",
        help: "クーパーテストで12分間に走った合計距離（メートル）。",
      },
      timeMinutes: {
        label: "1.5マイルのタイム",
        help: "1.5マイル（2.41 km）を走るのに要した時間（分、小数可）。",
      },
    },
    outputs: {
      vo2maxMlKgMin: { label: "VO₂max（ml/kg/分）", help: "推定された最大酸素摂取量。" },
      fitnessCategory: {
        label: "フィットネスカテゴリ",
        help: "ACSM年齢・性別別: 低い / 並 / 良 / 優秀 / 超優秀。",
      },
    },
    options: {
      testType: {
        "cooper-12min": "クーパー12分（距離）",
        "mile-and-half": "1.5マイル走（時間）",
      },
      sex: { male: "男性", female: "女性" },
    },
    errors: {
      ageOutOfRange: "年齢は10〜90歳で入力してください。",
      distanceRequired: "クーパーテストには距離が必要です。",
      distanceOutOfRange: "距離は500〜6000 mで入力してください。",
      timeRequired: "1.5マイルテストには時間が必要です。",
      timeOutOfRange: "時間は5〜30分で入力してください。",
    },
    faq: [
      {
        q: "VO₂maxとは何ですか？",
        a: "体重1 kgあたり1分間に利用できる酸素の最大量（ml/kg/min）。心肺持久力の代表的な指標です。",
      },
      {
        q: "クーパーテストの精度は？",
        a: "クーパー（1968）はトレッドミルVO₂maxとの相関 r ≈ 0.90 を報告。実用精度は±10〜15%程度です。",
      },
      {
        q: "安全に行えますか？",
        a: "最大努力の走行です。40歳以上、運動習慣がない、心疾患リスクがある場合は事前に医師に相談してください。",
      },
    ],
  },

  ko: {
    title: "VO₂max 계산기",
    short: "쿠퍼 12분 달리기 또는 1.5마일 달리기로 유산소 능력(VO₂max)을 추정합니다.",
    description:
      "쿠퍼 12분 달리기 또는 1.5마일 달리기 공식 기반의 무료 VO₂max 계산기. 테스트 결과, 나이, 성별을 입력해 최대 산소 섭취량(ml/kg/min)과 ACSM 피트니스 분류를 확인하세요.",
    keywords: [
      "VO2max 계산기",
      "쿠퍼 테스트",
      "1.5마일 달리기",
      "유산소 능력",
      "심폐 지구력",
      "최대 산소 섭취량",
      "ACSM 분류",
    ],
    inputs: {
      testType: {
        label: "테스트 유형",
        help: "쿠퍼 12분(거리) 또는 1.5마일 달리기(시간).",
      },
      sex: { label: "성별", help: "피트니스 분류 기준에만 사용됩니다." },
      age: { label: "나이", help: "나이(10~90)." },
      distance: {
        label: "12분 동안 달린 거리",
        help: "쿠퍼 테스트의 12분 총 거리(미터).",
      },
      timeMinutes: {
        label: "1.5마일 기록",
        help: "1.5마일(2.41 km) 달리기 시간(분, 소수 허용).",
      },
    },
    outputs: {
      vo2maxMlKgMin: { label: "VO₂max (ml/kg/min)", help: "추정 최대 산소 섭취량." },
      fitnessCategory: {
        label: "피트니스 분류",
        help: "ACSM 연령·성별: 낮음 / 보통 / 좋음 / 우수 / 매우 우수.",
      },
    },
    options: {
      testType: {
        "cooper-12min": "쿠퍼 12분(거리)",
        "mile-and-half": "1.5마일 달리기(시간)",
      },
      sex: { male: "남성", female: "여성" },
    },
    errors: {
      ageOutOfRange: "나이는 10~90세여야 합니다.",
      distanceRequired: "쿠퍼 테스트에는 거리가 필요합니다.",
      distanceOutOfRange: "거리는 500~6000m여야 합니다.",
      timeRequired: "1.5마일 테스트에는 시간이 필요합니다.",
      timeOutOfRange: "시간은 5~30분이어야 합니다.",
    },
    faq: [
      {
        q: "VO₂max란?",
        a: "체중 1kg당 1분에 활용 가능한 최대 산소량(ml/kg/min). 심폐 지구력의 핵심 지표입니다.",
      },
      {
        q: "쿠퍼 테스트의 정확도는?",
        a: "쿠퍼(1968)는 트레드밀 VO₂max와의 상관 r ≈ 0.90을 보고. 현장 정확도는 ±10~15% 수준입니다.",
      },
      {
        q: "안전한가요?",
        a: "최대 강도 달리기입니다. 40세 이상, 비활동적, 심장 위험이 있으면 사전 진료를 받으세요.",
      },
    ],
  },

  hi: {
    title: "VO₂max कैलकुलेटर",
    short: "कूपर 12-मिनट दौड़ या 1.5 मील दौड़ से एरोबिक क्षमता (VO₂max) का अनुमान लगाएँ।",
    description:
      "कूपर 12-मिनट दौड़ या 1.5 मील दौड़ सूत्र पर आधारित मुफ़्त VO₂max कैलकुलेटर। परिणाम, उम्र और लिंग दर्ज करके अधिकतम ऑक्सीजन उपभोग (ml/kg/min) और ACSM फिटनेस श्रेणी पाएँ।",
    keywords: [
      "VO2max कैलकुलेटर",
      "कूपर परीक्षण",
      "1.5 मील दौड़",
      "एरोबिक क्षमता",
      "कार्डियो फिटनेस",
      "अधिकतम ऑक्सीजन",
      "ACSM श्रेणी",
    ],
    inputs: {
      testType: {
        label: "परीक्षण प्रकार",
        help: "कूपर 12 मिनट (दूरी) या 1.5 मील दौड़ (समय)।",
      },
      sex: { label: "लिंग", help: "केवल फिटनेस श्रेणी मानकों के लिए।" },
      age: { label: "उम्र", help: "आपकी उम्र वर्षों में (10–90)।" },
      distance: {
        label: "12 मिनट में दूरी",
        help: "कूपर परीक्षण में 12 मिनट में तय कुल दूरी, मीटर में।",
      },
      timeMinutes: {
        label: "1.5 मील का समय",
        help: "1.5 मील (2.41 km) दौड़ने का समय मिनटों में (दशमलव स्वीकार्य)।",
      },
    },
    outputs: {
      vo2maxMlKgMin: { label: "VO₂max (ml/kg/min)", help: "अनुमानित अधिकतम ऑक्सीजन उपभोग।" },
      fitnessCategory: {
        label: "फिटनेस श्रेणी",
        help: "ACSM उम्र-लिंग आधारित: निम्न / औसत / अच्छा / उत्कृष्ट / श्रेष्ठ।",
      },
    },
    options: {
      testType: {
        "cooper-12min": "कूपर 12 मिनट (दूरी)",
        "mile-and-half": "1.5 मील दौड़ (समय)",
      },
      sex: { male: "पुरुष", female: "महिला" },
    },
    errors: {
      ageOutOfRange: "उम्र 10 से 90 वर्ष के बीच होनी चाहिए।",
      distanceRequired: "कूपर परीक्षण के लिए दूरी आवश्यक है।",
      distanceOutOfRange: "दूरी 500 से 6000 मीटर के बीच होनी चाहिए।",
      timeRequired: "1.5 मील परीक्षण के लिए समय आवश्यक है।",
      timeOutOfRange: "समय 5 से 30 मिनट के बीच होना चाहिए।",
    },
    faq: [
      {
        q: "VO₂max क्या है?",
        a: "शरीर प्रति मिनट प्रति किलोग्राम वज़न पर जितनी अधिकतम ऑक्सीजन उपयोग कर सकता है (ml/kg/min)। यह कार्डियोरेस्पिरेटरी फिटनेस का प्रमुख संकेतक है।",
      },
      {
        q: "कूपर परीक्षण कितना सटीक है?",
        a: "कूपर (1968) ने ट्रेडमिल VO₂max के साथ r ≈ 0.90 की रिपोर्ट दी। व्यवहारिक सटीकता ±10–15% होती है।",
      },
      {
        q: "क्या यह सुरक्षित है?",
        a: "यह अधिकतम प्रयास वाली दौड़ है। 40 वर्ष से अधिक, निष्क्रिय, या हृदय जोखिम वालों को पहले चिकित्सक से परामर्श लेना चाहिए।",
      },
    ],
  },
};

export default i18n;
