import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Target Heart Rate Zones — Karvonen Method",
    short: "Calculate your 5 training heart rate zones using the Karvonen or simple percentage method.",
    description:
      "Free heart rate zone calculator. Enter your age and resting heart rate to get your maximum HR and five training zones (recovery, base, aerobic, threshold, maximum) using the Karvonen or simple formula.",
    keywords: [
      "heart rate zone calculator",
      "target heart rate",
      "Karvonen formula",
      "training zones",
      "max heart rate",
      "cardio zones",
      "fitness calculator",
    ],
    inputs: {
      age: {
        label: "Age (years)",
        help: "Your current age. Used to estimate maximum heart rate: 220 − age.",
      },
      restingHeartRate: {
        label: "Resting heart rate (bpm)",
        help: "Measure first thing in the morning before getting out of bed. Normal range: 60–100 bpm.",
      },
      formula: {
        label: "Formula",
        help: "Karvonen uses heart rate reserve (more personalised). Simple uses a percentage of max HR only.",
      },
    },
    outputs: {
      maxHR: {
        label: "Maximum heart rate (bpm)",
        help: "Estimated maximum HR = 220 − age.",
      },
      hrr: {
        label: "Heart rate reserve (bpm)",
        help: "HRR = Max HR − Resting HR. Used in the Karvonen formula.",
      },
      zone1Min: { label: "Zone 1 min (Recovery)", help: "50–60% intensity. Active recovery, very easy effort." },
      zone1Max: { label: "Zone 1 max (Recovery)" },
      zone2Min: { label: "Zone 2 min (Base aerobic)", help: "60–70% intensity. Fat-burning zone, conversational pace." },
      zone2Max: { label: "Zone 2 max (Base aerobic)" },
      zone3Min: { label: "Zone 3 min (Aerobic)", help: "70–80% intensity. Aerobic fitness improvement." },
      zone3Max: { label: "Zone 3 max (Aerobic)" },
      zone4Min: { label: "Zone 4 min (Threshold)", help: "80–90% intensity. Lactate threshold training, hard effort." },
      zone4Max: { label: "Zone 4 max (Threshold)" },
      zone5Min: { label: "Zone 5 min (Maximum)", help: "90–100% intensity. Maximum effort, short intervals only." },
      zone5Max: { label: "Zone 5 max (Maximum)" },
    },
    options: {
      formula: {
        simple: "Simple (% of Max HR)",
        karvonen: "Karvonen (Heart Rate Reserve)",
      },
    },
    errors: {
      ageOutOfRange: "Age must be between 10 and 100 years.",
      rhrOutOfRange: "Resting heart rate must be between 30 and 100 bpm.",
    },
    faq: [
      {
        q: "What is the Karvonen formula?",
        a: "The Karvonen method calculates target heart rate zones using heart rate reserve (HRR = max HR − resting HR): Target HR = (HRR × intensity%) + resting HR. It is more personalised than the simple percentage method because it accounts for your fitness level (reflected in resting HR).",
      },
      {
        q: "How accurate is 220 minus age?",
        a: "The formula 220 − age is an average estimate with a standard deviation of approximately ±10–12 bpm. Some individuals' true maxHR may differ significantly. For more accuracy, perform a graded exercise test under medical supervision.",
      },
      {
        q: "Which formula should I use?",
        a: "Karvonen is generally preferred for personalised training plans because it accounts for individual fitness. The simple formula is fine for general guidance or if you do not know your resting heart rate.",
      },
      {
        q: "What is Zone 2 training?",
        a: "Zone 2 (60–70% of max HR or equivalent Karvonen) is associated with improved mitochondrial density, fat oxidation, and aerobic base. Many endurance athletes and health experts recommend spending the majority of training time in Zone 2.",
      },
    ],
  },

  tr: {
    title: "Hedef Kalp Atış Hızı Bölgeleri — Karvonen Yöntemi",
    short: "Karvonen veya basit yüzde yöntemiyle 5 antrenman kalp atış hızı bölgenizi hesaplayın.",
    description:
      "Ücretsiz kalp atış hızı bölgesi hesaplayıcı. Yaşınızı ve dinlenme kalp atış hızınızı girerek maksimum KAH ve beş antrenman bölgenizi hesaplayın.",
    keywords: [
      "kalp atış hızı bölgesi hesaplayıcı",
      "hedef kalp atış hızı",
      "Karvonen formülü",
      "antrenman bölgeleri",
      "maksimum kalp atış hızı",
      "kardio bölgeleri",
      "fitness hesaplayıcı",
    ],
    inputs: {
      age: {
        label: "Yaş (yıl)",
        help: "Maksimum kalp atış hızını tahmin etmek için kullanılır: 220 − yaş.",
      },
      restingHeartRate: {
        label: "Dinlenme kalp atış hızı (atım/dk)",
        help: "Sabah yataktan kalkmadan önce ölçün. Normal aralık: 60–100 atım/dk.",
      },
      formula: {
        label: "Formül",
        help: "Karvonen, kalp atış hızı rezervini kullanarak daha kişiselleştirilmiş sonuçlar verir.",
      },
    },
    outputs: {
      maxHR: { label: "Maksimum kalp atış hızı (atım/dk)", help: "Tahmini maks. KAH = 220 − yaş." },
      hrr: { label: "Kalp atış hızı rezervi (atım/dk)", help: "KAH Rezervi = Maks. KAH − Dinlenme KAH." },
      zone1Min: { label: "Bölge 1 min (Toparlanma)", help: "50–60% yoğunluk." },
      zone1Max: { label: "Bölge 1 maks (Toparlanma)" },
      zone2Min: { label: "Bölge 2 min (Aerobik Taban)", help: "60–70% yoğunluk." },
      zone2Max: { label: "Bölge 2 maks (Aerobik Taban)" },
      zone3Min: { label: "Bölge 3 min (Aerobik)", help: "70–80% yoğunluk." },
      zone3Max: { label: "Bölge 3 maks (Aerobik)" },
      zone4Min: { label: "Bölge 4 min (Eşik)", help: "80–90% yoğunluk." },
      zone4Max: { label: "Bölge 4 maks (Eşik)" },
      zone5Min: { label: "Bölge 5 min (Maksimum)", help: "90–100% yoğunluk." },
      zone5Max: { label: "Bölge 5 maks (Maksimum)" },
    },
    options: {
      formula: {
        simple: "Basit (Maks. KAH yüzdesi)",
        karvonen: "Karvonen (KAH Rezervi)",
      },
    },
    errors: {
      ageOutOfRange: "Yaş 10 ile 100 yıl arasında olmalıdır.",
      rhrOutOfRange: "Dinlenme kalp atış hızı 30 ile 100 atım/dk arasında olmalıdır.",
    },
    faq: [
      {
        q: "Karvonen formülü nedir?",
        a: "Karvonen yöntemi, kalp atış hızı rezervini (KAH Rezervi = Maks. KAH − Dinlenme KAH) kullanarak hedef KAH bölgelerini hesaplar: Hedef KAH = (KAH Rezervi × yoğunluk%) + Dinlenme KAH. Dinlenme kalp atış hızını hesaba kattığı için basit yüzde yöntemine kıyasla daha kişiselleştirilmiş sonuçlar verir.",
      },
    ],
  },

  de: {
    title: "Herzfrequenzzonen — Karvonen-Methode",
    short: "Berechnen Sie Ihre 5 Trainingsherzfrequenzzonen mit der Karvonen-Methode oder der einfachen Prozenzmethode.",
    description:
      "Kostenloser Herzfrequenzzonenrechner. Geben Sie Ihr Alter und Ihre Ruheherzfrequenz ein, um Ihre maximale HF und fünf Trainingszonen zu berechnen.",
    keywords: [
      "Herzfrequenzzonenrechner",
      "Zielherzfrequenz",
      "Karvonen-Formel",
      "Trainingszonen",
      "maximale Herzfrequenz",
      "Kardiozonen",
      "Fitnessrechner",
    ],
    inputs: {
      age: { label: "Alter (Jahre)", help: "Wird zur Schätzung der maximalen Herzfrequenz verwendet: 220 − Alter." },
      restingHeartRate: { label: "Ruheherzfrequenz (Schläge/Min)", help: "Morgens vor dem Aufstehen messen. Normalbereich: 60–100." },
      formula: { label: "Formel", help: "Karvonen nutzt die Herzfrequenzreserve für personalisierte Ergebnisse." },
    },
    outputs: {
      maxHR: { label: "Maximale Herzfrequenz (Schläge/Min)", help: "Geschätzte maximale HF = 220 − Alter." },
      hrr: { label: "Herzfrequenzreserve (Schläge/Min)", help: "HFR = Max. HF − Ruhe-HF." },
      zone1Min: { label: "Zone 1 min (Erholung)", help: "50–60% Intensität." },
      zone1Max: { label: "Zone 1 max (Erholung)" },
      zone2Min: { label: "Zone 2 min (Ausdauerbasis)", help: "60–70% Intensität." },
      zone2Max: { label: "Zone 2 max (Ausdauerbasis)" },
      zone3Min: { label: "Zone 3 min (Aerob)", help: "70–80% Intensität." },
      zone3Max: { label: "Zone 3 max (Aerob)" },
      zone4Min: { label: "Zone 4 min (Schwelle)", help: "80–90% Intensität." },
      zone4Max: { label: "Zone 4 max (Schwelle)" },
      zone5Min: { label: "Zone 5 min (Maximum)", help: "90–100% Intensität." },
      zone5Max: { label: "Zone 5 max (Maximum)" },
    },
    options: {
      formula: {
        simple: "Einfach (% der maximalen HF)",
        karvonen: "Karvonen (Herzfrequenzreserve)",
      },
    },
    errors: {
      ageOutOfRange: "Das Alter muss zwischen 10 und 100 Jahren liegen.",
      rhrOutOfRange: "Die Ruheherzfrequenz muss zwischen 30 und 100 Schlägen/Min liegen.",
    },
    faq: [
      {
        q: "Was ist die Karvonen-Formel?",
        a: "Die Karvonen-Methode berechnet Zielherzfrequenzzonen über die Herzfrequenzreserve (HFR = Max. HF − Ruhe-HF): Ziel-HF = (HFR × Intensität%) + Ruhe-HF. Sie ist personalisierter als die einfache Prozenzmethode, da sie die Fitness (ausgedrückt in der Ruhe-HF) berücksichtigt.",
      },
    ],
  },

  fr: {
    title: "Zones de fréquence cardiaque cible — Méthode Karvonen",
    short: "Calculez vos 5 zones d'entraînement cardiaque avec la méthode Karvonen ou la méthode simple.",
    description:
      "Calculateur gratuit de zones de fréquence cardiaque. Entrez votre âge et votre fréquence cardiaque au repos pour obtenir votre FC max et vos cinq zones d'entraînement.",
    keywords: [
      "calculateur zones cardiaques",
      "fréquence cardiaque cible",
      "formule Karvonen",
      "zones d'entraînement",
      "fréquence cardiaque maximale",
      "zones cardio",
      "calculateur fitness",
    ],
    inputs: {
      age: { label: "Âge (années)", help: "Utilisé pour estimer la FC maximale : 220 − âge." },
      restingHeartRate: { label: "Fréquence cardiaque au repos (bpm)", help: "Mesurez le matin avant de vous lever. Plage normale : 60–100 bpm." },
      formula: { label: "Formule", help: "Karvonen utilise la réserve de fréquence cardiaque pour des résultats plus personnalisés." },
    },
    outputs: {
      maxHR: { label: "FC maximale (bpm)", help: "FC max estimée = 220 − âge." },
      hrr: { label: "Réserve de FC (bpm)", help: "RFc = FC max − FC repos." },
      zone1Min: { label: "Zone 1 min (Récupération)", help: "Intensité 50–60%." },
      zone1Max: { label: "Zone 1 max (Récupération)" },
      zone2Min: { label: "Zone 2 min (Aérobie de base)", help: "Intensité 60–70%." },
      zone2Max: { label: "Zone 2 max (Aérobie de base)" },
      zone3Min: { label: "Zone 3 min (Aérobie)", help: "Intensité 70–80%." },
      zone3Max: { label: "Zone 3 max (Aérobie)" },
      zone4Min: { label: "Zone 4 min (Seuil)", help: "Intensité 80–90%." },
      zone4Max: { label: "Zone 4 max (Seuil)" },
      zone5Min: { label: "Zone 5 min (Maximum)", help: "Intensité 90–100%." },
      zone5Max: { label: "Zone 5 max (Maximum)" },
    },
    options: {
      formula: {
        simple: "Simple (% de la FC max)",
        karvonen: "Karvonen (Réserve de FC)",
      },
    },
    errors: {
      ageOutOfRange: "L'âge doit être compris entre 10 et 100 ans.",
      rhrOutOfRange: "La fréquence cardiaque au repos doit être comprise entre 30 et 100 bpm.",
    },
    faq: [
      {
        q: "Qu'est-ce que la formule Karvonen ?",
        a: "La méthode Karvonen calcule les zones de fréquence cardiaque cible à l'aide de la réserve de FC (RFc = FC max − FC repos) : FC cible = (RFc × intensité%) + FC repos. Elle est plus personnalisée que la méthode simple car elle tient compte de la condition physique (reflétée par la FC au repos).",
      },
    ],
  },

  es: {
    title: "Zonas de frecuencia cardíaca objetivo — Método Karvonen",
    short: "Calcula tus 5 zonas de entrenamiento de frecuencia cardíaca con el método Karvonen o el método simple.",
    description:
      "Calculadora gratuita de zonas de frecuencia cardíaca. Introduce tu edad y frecuencia cardíaca en reposo para obtener tu FC máxima y cinco zonas de entrenamiento.",
    keywords: [
      "calculadora zonas frecuencia cardíaca",
      "frecuencia cardíaca objetivo",
      "fórmula Karvonen",
      "zonas de entrenamiento",
      "frecuencia cardíaca máxima",
      "zonas cardio",
      "calculadora fitness",
    ],
    inputs: {
      age: { label: "Edad (años)", help: "Utilizada para estimar la FC máxima: 220 − edad." },
      restingHeartRate: { label: "Frecuencia cardíaca en reposo (lpm)", help: "Mide por la mañana antes de levantarte. Rango normal: 60–100 lpm." },
      formula: { label: "Fórmula", help: "Karvonen usa la reserva de frecuencia cardíaca para resultados más personalizados." },
    },
    outputs: {
      maxHR: { label: "FC máxima (lpm)", help: "FC máxima estimada = 220 − edad." },
      hrr: { label: "Reserva de FC (lpm)", help: "RFC = FC máx − FC reposo." },
      zone1Min: { label: "Zona 1 mín (Recuperación)", help: "Intensidad 50–60%." },
      zone1Max: { label: "Zona 1 máx (Recuperación)" },
      zone2Min: { label: "Zona 2 mín (Base aeróbica)", help: "Intensidad 60–70%." },
      zone2Max: { label: "Zona 2 máx (Base aeróbica)" },
      zone3Min: { label: "Zona 3 mín (Aeróbico)", help: "Intensidad 70–80%." },
      zone3Max: { label: "Zona 3 máx (Aeróbico)" },
      zone4Min: { label: "Zona 4 mín (Umbral)", help: "Intensidad 80–90%." },
      zone4Max: { label: "Zona 4 máx (Umbral)" },
      zone5Min: { label: "Zona 5 mín (Máximo)", help: "Intensidad 90–100%." },
      zone5Max: { label: "Zona 5 máx (Máximo)" },
    },
    options: {
      formula: {
        simple: "Simple (% de FC máx)",
        karvonen: "Karvonen (Reserva de FC)",
      },
    },
    errors: {
      ageOutOfRange: "La edad debe estar entre 10 y 100 años.",
      rhrOutOfRange: "La frecuencia cardíaca en reposo debe estar entre 30 y 100 lpm.",
    },
    faq: [
      {
        q: "¿Qué es la fórmula Karvonen?",
        a: "El método Karvonen calcula las zonas de FC objetivo usando la reserva de FC (RFC = FC máx − FC reposo): FC objetivo = (RFC × intensidad%) + FC reposo. Es más personalizado que el método simple porque tiene en cuenta la condición física (reflejada en la FC en reposo).",
      },
    ],
  },

  it: {
    title: "Zone di frequenza cardiaca target — Metodo Karvonen",
    short: "Calcola le tue 5 zone di allenamento della frequenza cardiaca con il metodo Karvonen o il metodo semplice.",
    description:
      "Calcolatore gratuito delle zone di frequenza cardiaca. Inserisci età e frequenza cardiaca a riposo per ottenere la tua FC massima e cinque zone di allenamento.",
    keywords: [
      "calcolatore zone frequenza cardiaca",
      "frequenza cardiaca target",
      "formula Karvonen",
      "zone di allenamento",
      "frequenza cardiaca massima",
      "zone cardio",
      "calcolatore fitness",
    ],
    inputs: {
      age: { label: "Età (anni)", help: "Utilizzata per stimare la FC massima: 220 − età." },
      restingHeartRate: { label: "Frequenza cardiaca a riposo (bpm)", help: "Misura al mattino prima di alzarti. Intervallo normale: 60–100 bpm." },
      formula: { label: "Formula", help: "Karvonen utilizza la riserva di frequenza cardiaca per risultati più personalizzati." },
    },
    outputs: {
      maxHR: { label: "FC massima (bpm)", help: "FC massima stimata = 220 − età." },
      hrr: { label: "Riserva di FC (bpm)", help: "RFc = FC max − FC riposo." },
      zone1Min: { label: "Zona 1 min (Recupero)", help: "Intensità 50–60%." },
      zone1Max: { label: "Zona 1 max (Recupero)" },
      zone2Min: { label: "Zona 2 min (Base aerobica)", help: "Intensità 60–70%." },
      zone2Max: { label: "Zona 2 max (Base aerobica)" },
      zone3Min: { label: "Zona 3 min (Aerobico)", help: "Intensità 70–80%." },
      zone3Max: { label: "Zona 3 max (Aerobico)" },
      zone4Min: { label: "Zona 4 min (Soglia)", help: "Intensità 80–90%." },
      zone4Max: { label: "Zona 4 max (Soglia)" },
      zone5Min: { label: "Zona 5 min (Massimo)", help: "Intensità 90–100%." },
      zone5Max: { label: "Zona 5 max (Massimo)" },
    },
    options: {
      formula: {
        simple: "Semplice (% della FC max)",
        karvonen: "Karvonen (Riserva di FC)",
      },
    },
    errors: {
      ageOutOfRange: "L'età deve essere compresa tra 10 e 100 anni.",
      rhrOutOfRange: "La frequenza cardiaca a riposo deve essere compresa tra 30 e 100 bpm.",
    },
    faq: [
      {
        q: "Cos'è la formula Karvonen?",
        a: "Il metodo Karvonen calcola le zone di FC target usando la riserva di FC (RFc = FC max − FC riposo): FC target = (RFc × intensità%) + FC riposo. È più personalizzato del metodo semplice perché tiene conto della forma fisica (riflessa nella FC a riposo).",
      },
    ],
  },

  ar: {
    title: "مناطق معدل ضربات القلب المستهدف — طريقة كارفونن",
    short: "احسب مناطق التدريب الخمس لمعدل ضربات قلبك باستخدام طريقة كارفونن أو الطريقة البسيطة.",
    description:
      "حاسبة مجانية لمناطق معدل ضربات القلب. أدخل عمرك ومعدل ضربات قلبك أثناء الراحة للحصول على أقصى معدل لضربات القلب ومناطق التدريب الخمس.",
    keywords: [
      "حاسبة مناطق معدل ضربات القلب",
      "معدل ضربات القلب المستهدف",
      "صيغة كارفونن",
      "مناطق التدريب",
      "أقصى معدل لضربات القلب",
      "مناطق الكارديو",
      "حاسبة اللياقة البدنية",
    ],
    inputs: {
      age: { label: "العمر (سنوات)", help: "يُستخدم لتقدير أقصى معدل لضربات القلب: 220 − العمر." },
      restingHeartRate: { label: "معدل ضربات القلب أثناء الراحة (نبضة/دقيقة)", help: "القياس صباحًا قبل النهوض. النطاق الطبيعي: 60–100." },
      formula: { label: "الصيغة", help: "تستخدم صيغة كارفونن احتياطي معدل ضربات القلب لنتائج أكثر تخصيصًا." },
    },
    outputs: {
      maxHR: { label: "أقصى معدل لضربات القلب (نبضة/دقيقة)", help: "الحد الأقصى المقدر = 220 − العمر." },
      hrr: { label: "احتياطي معدل ضربات القلب (نبضة/دقيقة)", help: "الاحتياطي = الحد الأقصى − معدل الراحة." },
      zone1Min: { label: "المنطقة 1 أدنى (التعافي)", help: "شدة 50–60%." },
      zone1Max: { label: "المنطقة 1 أعلى (التعافي)" },
      zone2Min: { label: "المنطقة 2 أدنى (الأساس الهوائي)", help: "شدة 60–70%." },
      zone2Max: { label: "المنطقة 2 أعلى (الأساس الهوائي)" },
      zone3Min: { label: "المنطقة 3 أدنى (الهوائية)", help: "شدة 70–80%." },
      zone3Max: { label: "المنطقة 3 أعلى (الهوائية)" },
      zone4Min: { label: "المنطقة 4 أدنى (العتبة)", help: "شدة 80–90%." },
      zone4Max: { label: "المنطقة 4 أعلى (العتبة)" },
      zone5Min: { label: "المنطقة 5 أدنى (الحد الأقصى)", help: "شدة 90–100%." },
      zone5Max: { label: "المنطقة 5 أعلى (الحد الأقصى)" },
    },
    options: {
      formula: {
        simple: "بسيطة (نسبة مئوية من الحد الأقصى)",
        karvonen: "كارفونن (احتياطي معدل ضربات القلب)",
      },
    },
    errors: {
      ageOutOfRange: "يجب أن يكون العمر بين 10 و100 سنة.",
      rhrOutOfRange: "يجب أن يكون معدل ضربات القلب أثناء الراحة بين 30 و100 نبضة/دقيقة.",
    },
    faq: [
      {
        q: "ما هي صيغة كارفونن؟",
        a: "تحسب طريقة كارفونن مناطق معدل ضربات القلب المستهدف باستخدام احتياطي معدل ضربات القلب (الاحتياطي = الحد الأقصى − معدل الراحة): المعدل المستهدف = (الاحتياطي × نسبة الشدة) + معدل الراحة. وهي أكثر تخصيصًا من الطريقة البسيطة لأنها تأخذ في الحسبان مستوى اللياقة البدنية.",
      },
    ],
  },

  ru: {
    title: "Зоны целевого пульса — Метод Карвонена",
    short: "Рассчитайте 5 тренировочных зон пульса по методу Карвонена или простому процентному методу.",
    description:
      "Бесплатный калькулятор зон пульса. Введите возраст и пульс в покое, чтобы получить максимальный пульс и пять тренировочных зон.",
    keywords: [
      "калькулятор зон пульса",
      "целевой пульс",
      "формула Карвонена",
      "тренировочные зоны",
      "максимальный пульс",
      "кардиозоны",
      "калькулятор фитнеса",
    ],
    inputs: {
      age: { label: "Возраст (лет)", help: "Используется для оценки максимального пульса: 220 − возраст." },
      restingHeartRate: { label: "Пульс в покое (уд/мин)", help: "Измерьте утром до подъёма с постели. Норма: 60–100 уд/мин." },
      formula: { label: "Формула", help: "Карвонен использует резерв сердечного ритма для персонализированных результатов." },
    },
    outputs: {
      maxHR: { label: "Максимальный пульс (уд/мин)", help: "Расчётный макс. пульс = 220 − возраст." },
      hrr: { label: "Резерв сердечного ритма (уд/мин)", help: "РСР = Макс. пульс − Пульс покоя." },
      zone1Min: { label: "Зона 1 мин (Восстановление)", help: "Интенсивность 50–60%." },
      zone1Max: { label: "Зона 1 макс (Восстановление)" },
      zone2Min: { label: "Зона 2 мин (Аэробная база)", help: "Интенсивность 60–70%." },
      zone2Max: { label: "Зона 2 макс (Аэробная база)" },
      zone3Min: { label: "Зона 3 мин (Аэробная)", help: "Интенсивность 70–80%." },
      zone3Max: { label: "Зона 3 макс (Аэробная)" },
      zone4Min: { label: "Зона 4 мин (Пороговая)", help: "Интенсивность 80–90%." },
      zone4Max: { label: "Зона 4 макс (Пороговая)" },
      zone5Min: { label: "Зона 5 мин (Максимальная)", help: "Интенсивность 90–100%." },
      zone5Max: { label: "Зона 5 макс (Максимальная)" },
    },
    options: {
      formula: {
        simple: "Простой (% от макс. пульса)",
        karvonen: "Карвонен (резерв сердечного ритма)",
      },
    },
    errors: {
      ageOutOfRange: "Возраст должен быть от 10 до 100 лет.",
      rhrOutOfRange: "Пульс в покое должен быть от 30 до 100 уд/мин.",
    },
    faq: [
      {
        q: "Что такое формула Карвонена?",
        a: "Метод Карвонена рассчитывает целевые зоны пульса через резерв сердечного ритма (РСР = Макс. пульс − Пульс покоя): Целевой пульс = (РСР × интенсивность%) + Пульс покоя. Он более персонализирован, чем простой процентный метод, поскольку учитывает уровень физической подготовки.",
      },
    ],
  },

  zh: {
    title: "目标心率区间 — Karvonen方法",
    short: "使用Karvonen方法或简单百分比法计算您的5个训练心率区间。",
    description:
      "免费心率区间计算器。输入年龄和静息心率，获取最大心率和五个训练区间。",
    keywords: [
      "心率区间计算器",
      "目标心率",
      "Karvonen公式",
      "训练区间",
      "最大心率",
      "有氧心率区间",
      "健身计算器",
    ],
    inputs: {
      age: { label: "年龄（岁）", help: "用于估算最大心率：220 − 年龄。" },
      restingHeartRate: { label: "静息心率（次/分）", help: "早晨起床前测量。正常范围：60–100次/分。" },
      formula: { label: "计算方法", help: "Karvonen使用心率储备，结果更个性化。" },
    },
    outputs: {
      maxHR: { label: "最大心率（次/分）", help: "估算最大心率 = 220 − 年龄。" },
      hrr: { label: "心率储备（次/分）", help: "心率储备 = 最大心率 − 静息心率。" },
      zone1Min: { label: "区间1最小值（恢复）", help: "50–60%强度。" },
      zone1Max: { label: "区间1最大值（恢复）" },
      zone2Min: { label: "区间2最小值（有氧基础）", help: "60–70%强度。" },
      zone2Max: { label: "区间2最大值（有氧基础）" },
      zone3Min: { label: "区间3最小值（有氧）", help: "70–80%强度。" },
      zone3Max: { label: "区间3最大值（有氧）" },
      zone4Min: { label: "区间4最小值（阈值）", help: "80–90%强度。" },
      zone4Max: { label: "区间4最大值（阈值）" },
      zone5Min: { label: "区间5最小值（最大强度）", help: "90–100%强度。" },
      zone5Max: { label: "区间5最大值（最大强度）" },
    },
    options: {
      formula: {
        simple: "简单法（最大心率百分比）",
        karvonen: "Karvonen法（心率储备）",
      },
    },
    errors: {
      ageOutOfRange: "年龄必须在10至100岁之间。",
      rhrOutOfRange: "静息心率必须在30至100次/分之间。",
    },
    faq: [
      {
        q: "什么是Karvonen公式？",
        a: "Karvonen方法使用心率储备（心率储备 = 最大心率 − 静息心率）计算目标心率区间：目标心率 = （心率储备 × 强度百分比）+ 静息心率。它比简单百分比法更个性化，因为它考虑了健身水平（由静息心率体现）。",
      },
    ],
  },

  ja: {
    title: "目標心拍数ゾーン — カルボーネン法",
    short: "カルボーネン法または単純パーセント法で5つのトレーニング心拍数ゾーンを計算します。",
    description:
      "無料の心拍数ゾーン計算機。年齢と安静時心拍数を入力して最大心拍数と5つのトレーニングゾーンを確認しましょう。",
    keywords: [
      "心拍数ゾーン計算機",
      "目標心拍数",
      "カルボーネン法",
      "トレーニングゾーン",
      "最大心拍数",
      "有酸素ゾーン",
      "フィットネス計算機",
    ],
    inputs: {
      age: { label: "年齢（歳）", help: "最大心拍数の推定に使用：220 − 年齢。" },
      restingHeartRate: { label: "安静時心拍数（bpm）", help: "起床前に測定。正常範囲：60〜100 bpm。" },
      formula: { label: "計算式", help: "カルボーネンは心拍数予備量を使用し、より個別化された結果を得られます。" },
    },
    outputs: {
      maxHR: { label: "最大心拍数（bpm）", help: "推定最大心拍数 = 220 − 年齢。" },
      hrr: { label: "心拍数予備量（bpm）", help: "HRR = 最大心拍数 − 安静時心拍数。" },
      zone1Min: { label: "ゾーン1 最小値（回復）", help: "強度50〜60%。" },
      zone1Max: { label: "ゾーン1 最大値（回復）" },
      zone2Min: { label: "ゾーン2 最小値（有酸素基礎）", help: "強度60〜70%。" },
      zone2Max: { label: "ゾーン2 最大値（有酸素基礎）" },
      zone3Min: { label: "ゾーン3 最小値（有酸素）", help: "強度70〜80%。" },
      zone3Max: { label: "ゾーン3 最大値（有酸素）" },
      zone4Min: { label: "ゾーン4 最小値（閾値）", help: "強度80〜90%。" },
      zone4Max: { label: "ゾーン4 最大値（閾値）" },
      zone5Min: { label: "ゾーン5 最小値（最大）", help: "強度90〜100%。" },
      zone5Max: { label: "ゾーン5 最大値（最大）" },
    },
    options: {
      formula: {
        simple: "シンプル（最大心拍数の%）",
        karvonen: "カルボーネン（心拍数予備量）",
      },
    },
    errors: {
      ageOutOfRange: "年齢は10〜100歳の範囲で入力してください。",
      rhrOutOfRange: "安静時心拍数は30〜100 bpmの範囲で入力してください。",
    },
    faq: [
      {
        q: "カルボーネン法とは何ですか？",
        a: "カルボーネン法は心拍数予備量（HRR = 最大心拍数 − 安静時心拍数）を用いて目標心拍数ゾーンを計算します：目標HR = (HRR × 強度%) + 安静時心拍数。安静時心拍数（フィットネスレベルを反映）を考慮するため、単純パーセント法より個別化されています。",
      },
    ],
  },

  ko: {
    title: "목표 심박수 구간 — Karvonen 방법",
    short: "Karvonen 방법 또는 단순 백분율 방법으로 5가지 훈련 심박수 구간을 계산합니다.",
    description:
      "무료 심박수 구간 계산기. 나이와 안정 시 심박수를 입력하면 최대 심박수와 다섯 가지 훈련 구간을 확인할 수 있습니다.",
    keywords: [
      "심박수 구간 계산기",
      "목표 심박수",
      "Karvonen 공식",
      "훈련 구간",
      "최대 심박수",
      "유산소 구간",
      "피트니스 계산기",
    ],
    inputs: {
      age: { label: "나이(세)", help: "최대 심박수 추정에 사용: 220 − 나이." },
      restingHeartRate: { label: "안정 시 심박수 (bpm)", help: "아침에 일어나기 전에 측정하세요. 정상 범위: 60–100 bpm." },
      formula: { label: "공식", help: "Karvonen은 심박수 예비량을 사용하여 더 개인화된 결과를 제공합니다." },
    },
    outputs: {
      maxHR: { label: "최대 심박수 (bpm)", help: "추정 최대 HR = 220 − 나이." },
      hrr: { label: "심박수 예비량 (bpm)", help: "HRR = 최대 HR − 안정 시 HR." },
      zone1Min: { label: "구간 1 최솟값 (회복)", help: "강도 50–60%." },
      zone1Max: { label: "구간 1 최댓값 (회복)" },
      zone2Min: { label: "구간 2 최솟값 (유산소 기초)", help: "강도 60–70%." },
      zone2Max: { label: "구간 2 최댓값 (유산소 기초)" },
      zone3Min: { label: "구간 3 최솟값 (유산소)", help: "강도 70–80%." },
      zone3Max: { label: "구간 3 최댓값 (유산소)" },
      zone4Min: { label: "구간 4 최솟값 (역치)", help: "강도 80–90%." },
      zone4Max: { label: "구간 4 최댓값 (역치)" },
      zone5Min: { label: "구간 5 최솟값 (최대)", help: "강도 90–100%." },
      zone5Max: { label: "구간 5 최댓값 (최대)" },
    },
    options: {
      formula: {
        simple: "단순법 (최대 HR의 %)",
        karvonen: "Karvonen법 (심박수 예비량)",
      },
    },
    errors: {
      ageOutOfRange: "나이는 10~100세 사이여야 합니다.",
      rhrOutOfRange: "안정 시 심박수는 30~100 bpm 사이여야 합니다.",
    },
    faq: [
      {
        q: "Karvonen 공식이란 무엇인가요?",
        a: "Karvonen 방법은 심박수 예비량(HRR = 최대 HR − 안정 시 HR)을 사용하여 목표 심박수 구간을 계산합니다: 목표 HR = (HRR × 강도%) + 안정 시 HR. 안정 시 심박수(개인 체력 수준 반영)를 고려하므로 단순 백분율 방법보다 더 개인화됩니다.",
      },
    ],
  },

  hi: {
    title: "लक्ष्य हृदय गति क्षेत्र — Karvonen विधि",
    short: "Karvonen या सरल प्रतिशत विधि से अपने 5 प्रशिक्षण हृदय गति क्षेत्रों की गणना करें।",
    description:
      "मुफ़्त हृदय गति क्षेत्र कैलकुलेटर। अपनी आयु और आराम की हृदय गति दर्ज करें और अधिकतम हृदय गति और पाँच प्रशिक्षण क्षेत्र प्राप्त करें।",
    keywords: [
      "हृदय गति क्षेत्र कैलकुलेटर",
      "लक्ष्य हृदय गति",
      "Karvonen सूत्र",
      "प्रशिक्षण क्षेत्र",
      "अधिकतम हृदय गति",
      "कार्डियो क्षेत्र",
      "फिटनेस कैलकुलेटर",
    ],
    inputs: {
      age: { label: "आयु (वर्ष)", help: "अधिकतम हृदय गति का अनुमान लगाने के लिए उपयोग: 220 − आयु।" },
      restingHeartRate: { label: "आराम की हृदय गति (bpm)", help: "सुबह बिस्तर से उठने से पहले मापें। सामान्य सीमा: 60–100 bpm।" },
      formula: { label: "सूत्र", help: "Karvonen हृदय गति रिजर्व का उपयोग करता है, जो अधिक व्यक्तिगत परिणाम देता है।" },
    },
    outputs: {
      maxHR: { label: "अधिकतम हृदय गति (bpm)", help: "अनुमानित अधिकतम HR = 220 − आयु।" },
      hrr: { label: "हृदय गति रिजर्व (bpm)", help: "HRR = अधिकतम HR − आराम HR।" },
      zone1Min: { label: "क्षेत्र 1 न्यूनतम (पुनर्प्राप्ति)", help: "तीव्रता 50–60%।" },
      zone1Max: { label: "क्षेत्र 1 अधिकतम (पुनर्प्राप्ति)" },
      zone2Min: { label: "क्षेत्र 2 न्यूनतम (एरोबिक आधार)", help: "तीव्रता 60–70%।" },
      zone2Max: { label: "क्षेत्र 2 अधिकतम (एरोबिक आधार)" },
      zone3Min: { label: "क्षेत्र 3 न्यूनतम (एरोबिक)", help: "तीव्रता 70–80%।" },
      zone3Max: { label: "क्षेत्र 3 अधिकतम (एरोबिक)" },
      zone4Min: { label: "क्षेत्र 4 न्यूनतम (थ्रेशोल्ड)", help: "तीव्रता 80–90%।" },
      zone4Max: { label: "क्षेत्र 4 अधिकतम (थ्रेशोल्ड)" },
      zone5Min: { label: "क्षेत्र 5 न्यूनतम (अधिकतम)", help: "तीव्रता 90–100%।" },
      zone5Max: { label: "क्षेत्र 5 अधिकतम (अधिकतम)" },
    },
    options: {
      formula: {
        simple: "सरल (अधिकतम HR का %)",
        karvonen: "Karvonen (हृदय गति रिजर्व)",
      },
    },
    errors: {
      ageOutOfRange: "आयु 10 से 100 वर्ष के बीच होनी चाहिए।",
      rhrOutOfRange: "आराम की हृदय गति 30 से 100 bpm के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "Karvonen सूत्र क्या है?",
        a: "Karvonen विधि हृदय गति रिजर्व (HRR = अधिकतम HR − आराम HR) का उपयोग करके लक्ष्य हृदय गति क्षेत्रों की गणना करती है: लक्ष्य HR = (HRR × तीव्रता%) + आराम HR। यह सरल प्रतिशत विधि से अधिक व्यक्तिगत है क्योंकि यह फिटनेस स्तर (आराम HR में परिलक्षित) को ध्यान में रखती है।",
      },
    ],
  },
};

export default i18n;
