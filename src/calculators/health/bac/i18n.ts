import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Blood Alcohol Content (BAC) Calculator",
    short: "Estimate your BAC using the Widmark formula based on drinks, weight, sex, and time.",
    description:
      "Educational BAC calculator using the Widmark formula. Estimate blood alcohol content from number of drinks, body weight, biological sex, and hours elapsed. For educational use only — never drive after drinking.",
    keywords: [
      "BAC calculator",
      "blood alcohol content",
      "Widmark formula",
      "alcohol calculator",
      "drunk driving",
      "drink driving",
      "alcohol level",
    ],
    inputs: {
      drinks: {
        label: "Number of Drinks",
        help: "One standard drink equals 14 g of pure alcohol (e.g., 355 ml beer at 5%, 148 ml wine at 12%, or 44 ml spirits at 40%).",
      },
      weightKg: {
        label: "Weight (kg)",
        help: "Your current body weight in kilograms.",
      },
      sex: {
        label: "Biological Sex",
        help: "Biological sex affects alcohol distribution in the body (r value in the Widmark formula).",
      },
      hoursElapsed: {
        label: "Hours Since First Drink",
        help: "Time elapsed since you had your first drink. The body metabolises about 0.015% BAC per hour.",
      },
    },
    outputs: {
      bac: {
        label: "Blood Alcohol Content (%)",
        help: "Estimated BAC as a percentage. Above 0.08% is illegal to drive in most countries.",
      },
      hoursUntilSober: {
        label: "Hours Until Sober",
        help: "Estimated hours until BAC returns to 0.00%.",
      },
      isLegal: {
        label: "Legal to Drive",
        help: "Whether BAC is below the 0.08% legal limit. Always check local laws.",
      },
      isDangerous: {
        label: "Dangerous Level",
        help: "BAC of 0.15% or above is considered very dangerous.",
      },
      category: {
        label: "Impairment Category",
        help: "Approximate level of impairment based on BAC range.",
      },
    },
    options: {
      sex: {
        male: "Male",
        female: "Female",
      },
    },
    errors: {
      drinksOutOfRange: "Number of drinks must be between 0 and 30.",
      weightOutOfRange: "Weight must be between 30 and 300 kg.",
      hoursOutOfRange: "Hours elapsed must be between 0 and 24.",
    },
    faq: [
      {
        q: "How accurate is this BAC calculator?",
        a: "The Widmark formula provides an estimate. Actual BAC varies with food intake, hydration, medications, individual metabolism, and tolerance. Use this for educational purposes only, never to determine fitness to drive.",
      },
      {
        q: "What counts as one standard drink?",
        a: "One standard drink contains 14 grams of pure alcohol: 355 ml of regular beer (5%), 148 ml of wine (12%), or 44 ml of distilled spirits (40%). Can sizes and strengths vary widely.",
      },
      {
        q: "How fast does the body process alcohol?",
        a: "On average, the liver metabolises about 0.015% BAC per hour. Coffee, cold showers, or food do not speed this up — only time reduces BAC.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Taxa de Alcoolemia",
    short: "Estime a sua taxa de álcool no sangue (TAS).",
    description:
      "Calculadora gratuita de taxa de alcoolemia. Estime a TAS com base no álcool consumido, peso, sexo e tempo decorrido.",
    keywords: ["taxa alcoolemia", "TAS", "álcool sangue", "Widmark", "álcool conduzir"],
    inputs: {
      drinks: {
        label: "Number of Drinks",
        help: "One standard drink equals 14 g of pure alcohol (e.g., 355 ml beer at 5%, 148 ml wine at 12%, or 44 ml spirits at 40%).",
      },
      weightKg: {
        label: "Weight (kg)",
        help: "Your current body weight in kilograms.",
      },
      sex: {
        label: "Biological Sex",
        help: "Biological sex affects alcohol distribution in the body (r value in the Widmark formula).",
      },
      hoursElapsed: {
        label: "Hours Since First Drink",
        help: "Time elapsed since you had your first drink. The body metabolises about 0.015% BAC per hour.",
      },
    },
    outputs: {
      bac: {
        label: "Blood Alcohol Content (%)",
        help: "Estimated BAC as a percentage. Above 0.08% is illegal to drive in most countries.",
      },
      hoursUntilSober: {
        label: "Hours Until Sober",
        help: "Estimated hours until BAC returns to 0.00%.",
      },
      isLegal: {
        label: "Legal to Drive",
        help: "Whether BAC is below the 0.08% legal limit. Always check local laws.",
      },
      isDangerous: {
        label: "Dangerous Level",
        help: "BAC of 0.15% or above is considered very dangerous.",
      },
      category: {
        label: "Impairment Category",
        help: "Approximate level of impairment based on BAC range.",
      },
    },
    options: {
      sex: {
        male: "Male",
        female: "Female",
      },
    },
    errors: {
      drinksOutOfRange: "Number of drinks must be between 0 and 30.",
      weightOutOfRange: "Weight must be between 30 and 300 kg.",
      hoursOutOfRange: "Hours elapsed must be between 0 and 24.",
    },
    faq: [
      {
        q: "How accurate is this BAC calculator?",
        a: "The Widmark formula provides an estimate. Actual BAC varies with food intake, hydration, medications, individual metabolism, and tolerance. Use this for educational purposes only, never to determine fitness to drive.",
      },
      {
        q: "What counts as one standard drink?",
        a: "One standard drink contains 14 grams of pure alcohol: 355 ml of regular beer (5%), 148 ml of wine (12%), or 44 ml of distilled spirits (40%). Can sizes and strengths vary widely.",
      },
      {
        q: "How fast does the body process alcohol?",
        a: "On average, the liver metabolises about 0.015% BAC per hour. Coffee, cold showers, or food do not speed this up — only time reduces BAC.",
      },
    ],
  },
  id: {
    title: "Kalkulator Kadar Alkohol Darah",
    short: "Estimasi kadar alkohol darah (BAC) Anda.",
    description:
      "Kalkulator BAC gratis. Estimasi kadar alkohol darah berdasarkan alkohol yang dikonsumsi, berat, jenis kelamin, dan waktu.",
    keywords: ["BAC", "kadar alkohol", "alkohol darah", "Widmark", "mengemudi alkohol"],
    inputs: {
      drinks: {
        label: "Number of Drinks",
        help: "One standard drink equals 14 g of pure alcohol (e.g., 355 ml beer at 5%, 148 ml wine at 12%, or 44 ml spirits at 40%).",
      },
      weightKg: {
        label: "Weight (kg)",
        help: "Your current body weight in kilograms.",
      },
      sex: {
        label: "Biological Sex",
        help: "Biological sex affects alcohol distribution in the body (r value in the Widmark formula).",
      },
      hoursElapsed: {
        label: "Hours Since First Drink",
        help: "Time elapsed since you had your first drink. The body metabolises about 0.015% BAC per hour.",
      },
    },
    outputs: {
      bac: {
        label: "Blood Alcohol Content (%)",
        help: "Estimated BAC as a percentage. Above 0.08% is illegal to drive in most countries.",
      },
      hoursUntilSober: {
        label: "Hours Until Sober",
        help: "Estimated hours until BAC returns to 0.00%.",
      },
      isLegal: {
        label: "Legal to Drive",
        help: "Whether BAC is below the 0.08% legal limit. Always check local laws.",
      },
      isDangerous: {
        label: "Dangerous Level",
        help: "BAC of 0.15% or above is considered very dangerous.",
      },
      category: {
        label: "Impairment Category",
        help: "Approximate level of impairment based on BAC range.",
      },
    },
    options: {
      sex: {
        male: "Male",
        female: "Female",
      },
    },
    errors: {
      drinksOutOfRange: "Number of drinks must be between 0 and 30.",
      weightOutOfRange: "Weight must be between 30 and 300 kg.",
      hoursOutOfRange: "Hours elapsed must be between 0 and 24.",
    },
    faq: [
      {
        q: "How accurate is this BAC calculator?",
        a: "The Widmark formula provides an estimate. Actual BAC varies with food intake, hydration, medications, individual metabolism, and tolerance. Use this for educational purposes only, never to determine fitness to drive.",
      },
      {
        q: "What counts as one standard drink?",
        a: "One standard drink contains 14 grams of pure alcohol: 355 ml of regular beer (5%), 148 ml of wine (12%), or 44 ml of distilled spirits (40%). Can sizes and strengths vary widely.",
      },
      {
        q: "How fast does the body process alcohol?",
        a: "On average, the liver metabolises about 0.015% BAC per hour. Coffee, cold showers, or food do not speed this up — only time reduces BAC.",
      },
    ],
  },


  tr: {
    title: "Kan Alkol Düzeyi (BAC) Hesaplayıcı",
    short: "İçki miktarı, kilo, cinsiyet ve geçen süreye göre kan alkol düzeyinizi tahmin edin.",
    description:
      "Widmark formülüne dayalı eğitim amaçlı BAC hesaplayıcı. İçki sayısı, vücut ağırlığı, biyolojik cinsiyet ve geçen saat bilgilerini girerek kan alkol düzeyinizi tahmin edin. Yalnızca eğitim amaçlıdır — alkol aldıktan sonra asla araç kullanmayın.",
    keywords: [
      "BAC hesaplayıcı",
      "kan alkol düzeyi",
      "Widmark formülü",
      "alkol hesaplayıcı",
      "alkollü araç kullanma",
      "alkol seviyesi",
    ],
    inputs: {
      drinks: {
        label: "İçki Sayısı",
        help: "Bir standart içki 14 g saf alkol içerir (örn. 355 ml bira %5, 148 ml şarap %12 veya 44 ml sert içki %40).",
      },
      weightKg: {
        label: "Ağırlık (kg)",
        help: "Kilogram cinsinden mevcut vücut ağırlığınız.",
      },
      sex: {
        label: "Biyolojik Cinsiyet",
        help: "Biyolojik cinsiyet, alkolün vücutta dağılımını etkiler (Widmark formülündeki r değeri).",
      },
      hoursElapsed: {
        label: "İlk İçkiden Bu Yana Geçen Saat",
        help: "İlk içkiyi içtiğinizden bu yana geçen süre. Vücut saatte yaklaşık %0,015 BAC metabolize eder.",
      },
    },
    outputs: {
      bac: {
        label: "Kan Alkol Düzeyi (%)",
        help: "Tahmini BAC yüzde olarak. %0,08'in üzeri çoğu ülkede araç kullanmak için yasa dışıdır.",
      },
      hoursUntilSober: {
        label: "Ayılma Süresi (saat)",
        help: "BAC'nin %0,00'a dönmesi için tahmini süre.",
      },
      isLegal: {
        label: "Araç Kullanımı Yasal mı",
        help: "BAC'nin yasal sınır olan %0,08'in altında olup olmadığı. Yerel yasaları kontrol edin.",
      },
      isDangerous: {
        label: "Tehlikeli Düzey",
        help: "%0,15 ve üzeri BAC tehlikeli olarak kabul edilir.",
      },
      category: {
        label: "Bozulma Kategorisi",
        help: "BAC aralığına göre tahmini bozulma düzeyi.",
      },
    },
    options: {
      sex: {
        male: "Erkek",
        female: "Kadın",
      },
    },
    errors: {
      drinksOutOfRange: "İçki sayısı 0 ile 30 arasında olmalıdır.",
      weightOutOfRange: "Ağırlık 30 ile 300 kg arasında olmalıdır.",
      hoursOutOfRange: "Geçen süre 0 ile 24 saat arasında olmalıdır.",
    },
    faq: [
      {
        q: "Bu BAC hesaplayıcı ne kadar doğru?",
        a: "Widmark formülü bir tahmin sunar. Gerçek BAC; gıda tüketimi, hidrasyon, ilaçlar, bireysel metabolizma ve toleransa göre değişir. Yalnızca eğitim amaçlı kullanın, araç kullanıp kullanamayacağınızı belirlemek için kullanmayın.",
      },
      {
        q: "Bir standart içki nedir?",
        a: "Bir standart içki 14 gram saf alkol içerir: 355 ml bira (%5), 148 ml şarap (%12) veya 44 ml damıtılmış alkol (%40).",
      },
      {
        q: "Vücut alkolü ne kadar hızlı işler?",
        a: "Ortalama olarak karaciğer saatte yaklaşık %0,015 BAC metabolize eder. Kahve, soğuk duş veya yemek bu süreci hızlandırmaz — yalnızca zaman BAC'yi düşürür.",
      },
    ],
  },

  de: {
    title: "Blutalkoholgehalt (BAC) Rechner",
    short: "Schätzen Sie Ihren BAC nach der Widmark-Formel anhand von Getränken, Gewicht, Geschlecht und Zeit.",
    description:
      "Bildungs-BAC-Rechner auf Basis der Widmark-Formel. Schätzen Sie den Blutalkoholgehalt anhand der Anzahl der Getränke, des Körpergewichts, des biologischen Geschlechts und der verstrichenen Stunden. Nur zu Bildungszwecken — fahren Sie niemals nach dem Trinken.",
    keywords: [
      "BAC Rechner",
      "Blutalkoholgehalt",
      "Widmark-Formel",
      "Alkoholrechner",
      "Promillerechner",
      "Alkohol am Steuer",
    ],
    inputs: {
      drinks: {
        label: "Anzahl der Getränke",
        help: "Ein Standardgetränk enthält 14 g reinen Alkohol (z. B. 355 ml Bier 5%, 148 ml Wein 12% oder 44 ml Spirituosen 40%).",
      },
      weightKg: {
        label: "Gewicht (kg)",
        help: "Ihr aktuelles Körpergewicht in Kilogramm.",
      },
      sex: {
        label: "Biologisches Geschlecht",
        help: "Das biologische Geschlecht beeinflusst die Alkoholverteilung im Körper (r-Wert in der Widmark-Formel).",
      },
      hoursElapsed: {
        label: "Stunden seit dem ersten Getränk",
        help: "Verstrichene Zeit seit dem ersten Getränk. Der Körper metabolisiert etwa 0,015% BAC pro Stunde.",
      },
    },
    outputs: {
      bac: {
        label: "Blutalkoholgehalt (%)",
        help: "Geschätzter BAC in Prozent. Über 0,08% ist das Fahren in den meisten Ländern illegal.",
      },
      hoursUntilSober: {
        label: "Stunden bis zur Nüchternheit",
        help: "Geschätzte Stunden bis der BAC auf 0,00% sinkt.",
      },
      isLegal: {
        label: "Legal zu fahren",
        help: "Ob der BAC unter der gesetzlichen Grenze von 0,08% liegt. Überprüfen Sie immer die lokalen Gesetze.",
      },
      isDangerous: {
        label: "Gefährlicher Pegel",
        help: "Ein BAC von 0,15% oder mehr gilt als sehr gefährlich.",
      },
      category: {
        label: "Beeinträchtigungskategorie",
        help: "Ungefähres Ausmaß der Beeinträchtigung basierend auf dem BAC-Bereich.",
      },
    },
    options: {
      sex: {
        male: "Männlich",
        female: "Weiblich",
      },
    },
    errors: {
      drinksOutOfRange: "Die Anzahl der Getränke muss zwischen 0 und 30 liegen.",
      weightOutOfRange: "Das Gewicht muss zwischen 30 und 300 kg liegen.",
      hoursOutOfRange: "Die verstrichene Zeit muss zwischen 0 und 24 Stunden liegen.",
    },
    faq: [
      {
        q: "Wie genau ist dieser BAC-Rechner?",
        a: "Die Widmark-Formel liefert eine Schätzung. Der tatsächliche BAC variiert mit Nahrungsaufnahme, Flüssigkeitszufuhr, Medikamenten, individuellem Stoffwechsel und Toleranz. Nur zu Bildungszwecken verwenden.",
      },
      {
        q: "Was ist ein Standardgetränk?",
        a: "Ein Standardgetränk enthält 14 Gramm reinen Alkohol: 355 ml normales Bier (5%), 148 ml Wein (12%) oder 44 ml Destillat (40%).",
      },
      {
        q: "Wie schnell baut der Körper Alkohol ab?",
        a: "Im Durchschnitt metabolisiert die Leber etwa 0,015% BAC pro Stunde. Kaffee, kalte Duschen oder Essen beschleunigen dies nicht — nur Zeit senkt den BAC.",
      },
    ],
  },

  fr: {
    title: "Calculateur de taux d'alcoolémie (BAC)",
    short: "Estimez votre taux d'alcoolémie avec la formule de Widmark selon les verres consommés, le poids, le sexe et le temps.",
    description:
      "Calculateur éducatif de taux d'alcoolémie basé sur la formule de Widmark. Estimez votre alcoolémie à partir du nombre de verres, du poids corporel, du sexe biologique et des heures écoulées. À des fins éducatives uniquement — ne conduisez jamais après avoir bu.",
    keywords: [
      "calculateur BAC",
      "taux d'alcoolémie",
      "formule de Widmark",
      "calculateur alcool",
      "alcool au volant",
      "taux d'alcool",
    ],
    inputs: {
      drinks: {
        label: "Nombre de verres",
        help: "Un verre standard contient 14 g d'alcool pur (ex. 355 ml de bière à 5%, 148 ml de vin à 12% ou 44 ml de spiritueux à 40%).",
      },
      weightKg: {
        label: "Poids (kg)",
        help: "Votre poids corporel actuel en kilogrammes.",
      },
      sex: {
        label: "Sexe biologique",
        help: "Le sexe biologique influence la distribution de l'alcool dans le corps (valeur r de la formule de Widmark).",
      },
      hoursElapsed: {
        label: "Heures depuis le premier verre",
        help: "Temps écoulé depuis votre premier verre. Le corps métabolise environ 0,015% d'alcoolémie par heure.",
      },
    },
    outputs: {
      bac: {
        label: "Taux d'alcoolémie (%)",
        help: "Taux d'alcoolémie estimé en pourcentage. Au-dessus de 0,08%, conduire est illégal dans la plupart des pays.",
      },
      hoursUntilSober: {
        label: "Heures avant sobriété",
        help: "Nombre d'heures estimé avant que le taux revienne à 0,00%.",
      },
      isLegal: {
        label: "Légal pour conduire",
        help: "Indique si le taux est inférieur à la limite légale de 0,08%. Vérifiez toujours les lois locales.",
      },
      isDangerous: {
        label: "Niveau dangereux",
        help: "Un taux de 0,15% ou plus est considéré comme très dangereux.",
      },
      category: {
        label: "Catégorie d'altération",
        help: "Niveau approximatif d'altération selon la plage d'alcoolémie.",
      },
    },
    options: {
      sex: {
        male: "Homme",
        female: "Femme",
      },
    },
    errors: {
      drinksOutOfRange: "Le nombre de verres doit être compris entre 0 et 30.",
      weightOutOfRange: "Le poids doit être compris entre 30 et 300 kg.",
      hoursOutOfRange: "Le temps écoulé doit être compris entre 0 et 24 heures.",
    },
    faq: [
      {
        q: "Quelle est la précision de ce calculateur ?",
        a: "La formule de Widmark fournit une estimation. Le BAC réel varie selon la prise alimentaire, l'hydratation, les médicaments, le métabolisme individuel et la tolérance. À utiliser uniquement à des fins éducatives.",
      },
      {
        q: "Qu'est-ce qu'un verre standard ?",
        a: "Un verre standard contient 14 grammes d'alcool pur : 355 ml de bière ordinaire (5%), 148 ml de vin (12%) ou 44 ml de spiritueux (40%).",
      },
      {
        q: "À quelle vitesse le corps élimine-t-il l'alcool ?",
        a: "En moyenne, le foie métabolise environ 0,015% d'alcoolémie par heure. Le café, une douche froide ou de la nourriture n'accélèrent pas ce processus — seul le temps réduit l'alcoolémie.",
      },
    ],
  },

  es: {
    title: "Calculadora de Tasa de Alcoholemia (BAC)",
    short: "Estima tu tasa de alcoholemia usando la fórmula de Widmark según bebidas, peso, sexo y tiempo transcurrido.",
    description:
      "Calculadora educativa de alcoholemia basada en la fórmula de Widmark. Estima el nivel de alcohol en sangre a partir del número de bebidas, peso corporal, sexo biológico y horas transcurridas. Solo con fines educativos — nunca conduzcas tras beber.",
    keywords: [
      "calculadora BAC",
      "tasa de alcoholemia",
      "fórmula Widmark",
      "calculadora alcohol",
      "conducir ebrio",
      "nivel de alcohol",
    ],
    inputs: {
      drinks: {
        label: "Número de bebidas",
        help: "Una bebida estándar contiene 14 g de alcohol puro (p. ej., 355 ml de cerveza al 5%, 148 ml de vino al 12% o 44 ml de licor al 40%).",
      },
      weightKg: {
        label: "Peso (kg)",
        help: "Tu peso corporal actual en kilogramos.",
      },
      sex: {
        label: "Sexo biológico",
        help: "El sexo biológico afecta la distribución del alcohol en el cuerpo (valor r en la fórmula de Widmark).",
      },
      hoursElapsed: {
        label: "Horas desde la primera bebida",
        help: "Tiempo transcurrido desde la primera bebida. El cuerpo metaboliza aproximadamente un 0,015% de BAC por hora.",
      },
    },
    outputs: {
      bac: {
        label: "Tasa de alcoholemia (%)",
        help: "BAC estimado como porcentaje. Por encima de 0,08% conducir es ilegal en la mayoría de países.",
      },
      hoursUntilSober: {
        label: "Horas hasta estar sobrio",
        help: "Horas estimadas hasta que el BAC vuelva a 0,00%.",
      },
      isLegal: {
        label: "Legal para conducir",
        help: "Si el BAC está por debajo del límite legal de 0,08%. Comprueba siempre las leyes locales.",
      },
      isDangerous: {
        label: "Nivel peligroso",
        help: "Un BAC de 0,15% o superior se considera muy peligroso.",
      },
      category: {
        label: "Categoría de deterioro",
        help: "Nivel aproximado de deterioro según el rango de BAC.",
      },
    },
    options: {
      sex: {
        male: "Masculino",
        female: "Femenino",
      },
    },
    errors: {
      drinksOutOfRange: "El número de bebidas debe estar entre 0 y 30.",
      weightOutOfRange: "El peso debe estar entre 30 y 300 kg.",
      hoursOutOfRange: "Las horas transcurridas deben estar entre 0 y 24.",
    },
    faq: [
      {
        q: "¿Qué tan precisa es esta calculadora de BAC?",
        a: "La fórmula de Widmark proporciona una estimación. El BAC real varía con la ingesta de alimentos, la hidratación, los medicamentos, el metabolismo individual y la tolerancia. Úsala solo con fines educativos.",
      },
      {
        q: "¿Qué es una bebida estándar?",
        a: "Una bebida estándar contiene 14 gramos de alcohol puro: 355 ml de cerveza regular (5%), 148 ml de vino (12%) o 44 ml de licor destilado (40%).",
      },
      {
        q: "¿Qué tan rápido procesa el cuerpo el alcohol?",
        a: "En promedio, el hígado metaboliza unos 0,015% de BAC por hora. El café, las duchas frías o la comida no aceleran esto — solo el tiempo reduce el BAC.",
      },
    ],
  },

  it: {
    title: "Calcolatore del Tasso Alcolemico (BAC)",
    short: "Stima il tuo BAC con la formula di Widmark in base a bevande, peso, sesso e tempo trascorso.",
    description:
      "Calcolatore educativo del tasso alcolemico basato sulla formula di Widmark. Stima il livello di alcol nel sangue in base al numero di bevande, al peso corporeo, al sesso biologico e alle ore trascorse. Solo a scopo educativo — non guidare mai dopo aver bevuto.",
    keywords: [
      "calcolatore BAC",
      "tasso alcolemico",
      "formula Widmark",
      "calcolatore alcol",
      "guida in stato di ebbrezza",
      "livello di alcol",
    ],
    inputs: {
      drinks: {
        label: "Numero di bevande",
        help: "Una bevanda standard contiene 14 g di alcol puro (es. 355 ml di birra al 5%, 148 ml di vino al 12% o 44 ml di superalcolici al 40%).",
      },
      weightKg: {
        label: "Peso (kg)",
        help: "Il tuo peso corporeo attuale in chilogrammi.",
      },
      sex: {
        label: "Sesso biologico",
        help: "Il sesso biologico influisce sulla distribuzione dell'alcol nel corpo (valore r nella formula di Widmark).",
      },
      hoursElapsed: {
        label: "Ore dalla prima bevanda",
        help: "Tempo trascorso dalla prima bevanda. Il corpo metabolizza circa 0,015% di BAC all'ora.",
      },
    },
    outputs: {
      bac: {
        label: "Tasso alcolemico (%)",
        help: "BAC stimato in percentuale. Sopra 0,08% guidare è illegale nella maggior parte dei paesi.",
      },
      hoursUntilSober: {
        label: "Ore fino alla sobrietà",
        help: "Ore stimate prima che il BAC torni a 0,00%.",
      },
      isLegal: {
        label: "Legale per guidare",
        help: "Se il BAC è sotto il limite legale di 0,08%. Verifica sempre le leggi locali.",
      },
      isDangerous: {
        label: "Livello pericoloso",
        help: "Un BAC di 0,15% o superiore è considerato molto pericoloso.",
      },
      category: {
        label: "Categoria di compromissione",
        help: "Livello approssimativo di compromissione in base all'intervallo BAC.",
      },
    },
    options: {
      sex: {
        male: "Maschio",
        female: "Femmina",
      },
    },
    errors: {
      drinksOutOfRange: "Il numero di bevande deve essere compreso tra 0 e 30.",
      weightOutOfRange: "Il peso deve essere compreso tra 30 e 300 kg.",
      hoursOutOfRange: "Le ore trascorse devono essere comprese tra 0 e 24.",
    },
    faq: [
      {
        q: "Quanto è preciso questo calcolatore di BAC?",
        a: "La formula di Widmark fornisce una stima. Il BAC reale varia con l'assunzione di cibo, l'idratazione, i farmaci, il metabolismo individuale e la tolleranza. Usare solo a scopo educativo.",
      },
      {
        q: "Cosa si intende per bevanda standard?",
        a: "Una bevanda standard contiene 14 grammi di alcol puro: 355 ml di birra normale (5%), 148 ml di vino (12%) o 44 ml di distillati (40%).",
      },
      {
        q: "Quanto velocemente il corpo smaltisce l'alcol?",
        a: "In media, il fegato metabolizza circa 0,015% di BAC all'ora. Caffè, docce fredde o cibo non accelerano questo processo — solo il tempo riduce il BAC.",
      },
    ],
  },

  ar: {
    title: "حاسبة نسبة الكحول في الدم (BAC)",
    short: "احسب نسبة الكحول في دمك باستخدام معادلة ويدمارك بناءً على المشروبات والوزن والجنس والوقت.",
    description:
      "حاسبة تعليمية لنسبة الكحول في الدم تعتمد على معادلة ويدمارك. قدّر مستوى الكحول في دمك بناءً على عدد المشروبات ووزن الجسم والجنس البيولوجي والساعات المنقضية. للأغراض التعليمية فقط — لا تقد السيارة أبدًا بعد الشرب.",
    keywords: [
      "حاسبة BAC",
      "نسبة الكحول في الدم",
      "معادلة ويدمارك",
      "حاسبة الكحول",
      "القيادة تحت تأثير الكحول",
      "مستوى الكحول",
    ],
    inputs: {
      drinks: {
        label: "عدد المشروبات",
        help: "المشروب الواحد يحتوي على 14 غرام من الكحول الصافي (مثل 355 مل من البيرة 5% أو 148 مل من النبيذ 12% أو 44 مل من الكحول 40%).",
      },
      weightKg: {
        label: "الوزن (كجم)",
        help: "وزن جسمك الحالي بالكيلوغرام.",
      },
      sex: {
        label: "الجنس البيولوجي",
        help: "يؤثر الجنس البيولوجي على توزيع الكحول في الجسم (قيمة r في معادلة ويدمارك).",
      },
      hoursElapsed: {
        label: "الساعات منذ أول مشروب",
        help: "الوقت المنقضي منذ تناول أول مشروب. يستقلب الجسم ما يقارب 0.015% من BAC في الساعة.",
      },
    },
    outputs: {
      bac: {
        label: "نسبة الكحول في الدم (%)",
        help: "نسبة BAC المقدّرة كنسبة مئوية. أكثر من 0.08% يُعدّ غير قانوني للقيادة في معظم البلدان.",
      },
      hoursUntilSober: {
        label: "ساعات حتى الصحو",
        help: "الساعات المقدّرة حتى يعود BAC إلى 0.00%.",
      },
      isLegal: {
        label: "القيادة قانونية",
        help: "ما إذا كانت نسبة BAC أقل من الحد القانوني 0.08%. تحقق دائمًا من القوانين المحلية.",
      },
      isDangerous: {
        label: "مستوى خطر",
        help: "يُعدّ BAC بنسبة 0.15% أو أكثر خطيرًا جدًا.",
      },
      category: {
        label: "فئة الضعف",
        help: "المستوى التقريبي للضعف بناءً على نطاق BAC.",
      },
    },
    options: {
      sex: {
        male: "ذكر",
        female: "أنثى",
      },
    },
    errors: {
      drinksOutOfRange: "يجب أن يكون عدد المشروبات بين 0 و 30.",
      weightOutOfRange: "يجب أن يكون الوزن بين 30 و 300 كجم.",
      hoursOutOfRange: "يجب أن تكون الساعات المنقضية بين 0 و 24.",
    },
    faq: [
      {
        q: "ما مدى دقة هذه الحاسبة؟",
        a: "تقدّم معادلة ويدمارك تقديرًا. يتفاوت BAC الفعلي تبعًا لتناول الطعام والترطيب والأدوية والتمثيل الغذائي الفردي والتحمّل. استخدمها للأغراض التعليمية فقط.",
      },
      {
        q: "ما هو المشروب القياسي؟",
        a: "المشروب القياسي يحتوي على 14 غراما من الكحول الصافي: 355 مل بيرة (5%) أو 148 مل نبيذ (12%) أو 44 مل مشروب روحي (40%).",
      },
      {
        q: "كم تستغرق عملية هضم الكحول؟",
        a: "في المتوسط، يستقلب الكبد ما يقارب 0.015% من BAC في الساعة. القهوة والاستحمام بالماء البارد والطعام لا تسرّع هذه العملية — الوقت وحده هو الذي يخفض BAC.",
      },
    ],
  },

  ru: {
    title: "Калькулятор содержания алкоголя в крови (BAC)",
    short: "Оцените уровень алкоголя в крови по формуле Видмарка на основе выпитого, веса, пола и времени.",
    description:
      "Образовательный калькулятор содержания алкоголя в крови по формуле Видмарка. Оцените уровень алкоголя по количеству напитков, массе тела, биологическому полу и прошедшему времени. Только в образовательных целях — никогда не садитесь за руль после употребления алкоголя.",
    keywords: [
      "калькулятор BAC",
      "содержание алкоголя в крови",
      "формула Видмарка",
      "калькулятор алкоголя",
      "вождение в нетрезвом виде",
      "уровень алкоголя",
    ],
    inputs: {
      drinks: {
        label: "Количество напитков",
        help: "Один стандартный напиток содержит 14 г чистого алкоголя (напр. 355 мл пива 5%, 148 мл вина 12% или 44 мл крепкого спиртного 40%).",
      },
      weightKg: {
        label: "Вес (кг)",
        help: "Ваша текущая масса тела в килограммах.",
      },
      sex: {
        label: "Биологический пол",
        help: "Биологический пол влияет на распределение алкоголя в организме (коэффициент r в формуле Видмарка).",
      },
      hoursElapsed: {
        label: "Часов с первого напитка",
        help: "Время, прошедшее с первого напитка. Организм метаболизирует около 0,015% BAC в час.",
      },
    },
    outputs: {
      bac: {
        label: "Содержание алкоголя в крови (%)",
        help: "Расчётный BAC в процентах. Выше 0,08% вождение незаконно в большинстве стран.",
      },
      hoursUntilSober: {
        label: "Часов до трезвости",
        help: "Расчётное время до возврата BAC к 0,00%.",
      },
      isLegal: {
        label: "Можно ли вести автомобиль",
        help: "Находится ли BAC ниже законного предела 0,08%. Всегда проверяйте местное законодательство.",
      },
      isDangerous: {
        label: "Опасный уровень",
        help: "BAC 0,15% и выше считается очень опасным.",
      },
      category: {
        label: "Степень опьянения",
        help: "Приблизительный уровень опьянения в зависимости от диапазона BAC.",
      },
    },
    options: {
      sex: {
        male: "Мужской",
        female: "Женский",
      },
    },
    errors: {
      drinksOutOfRange: "Количество напитков должно быть от 0 до 30.",
      weightOutOfRange: "Вес должен быть от 30 до 300 кг.",
      hoursOutOfRange: "Прошедшее время должно быть от 0 до 24 часов.",
    },
    faq: [
      {
        q: "Насколько точен этот калькулятор BAC?",
        a: "Формула Видмарка даёт приблизительную оценку. Реальный BAC варьируется в зависимости от приёма пищи, гидратации, лекарств, индивидуального метаболизма и толерантности. Используйте только в образовательных целях.",
      },
      {
        q: "Что такое стандартный напиток?",
        a: "Один стандартный напиток содержит 14 граммов чистого алкоголя: 355 мл обычного пива (5%), 148 мл вина (12%) или 44 мл крепкого спиртного (40%).",
      },
      {
        q: "Как быстро организм перерабатывает алкоголь?",
        a: "В среднем печень метаболизирует около 0,015% BAC в час. Кофе, холодный душ или еда не ускоряют этот процесс — только время снижает BAC.",
      },
    ],
  },

  zh: {
    title: "血液酒精浓度（BAC）计算器",
    short: "使用维德马克公式，根据饮酒量、体重、性别和时间估算血液酒精浓度。",
    description:
      "基于维德马克公式的教育性血液酒精浓度计算器。根据饮酒数量、体重、生理性别和经过的小时数估算血液中的酒精含量。仅供教育用途——切勿饮酒后驾车。",
    keywords: [
      "BAC计算器",
      "血液酒精浓度",
      "维德马克公式",
      "酒精计算器",
      "醉驾",
      "酒精含量",
    ],
    inputs: {
      drinks: {
        label: "饮酒数量",
        help: "一杯标准饮品含14克纯酒精（如355毫升5%啤酒、148毫升12%葡萄酒或44毫升40%烈酒）。",
      },
      weightKg: {
        label: "体重（千克）",
        help: "您当前的体重，以千克为单位。",
      },
      sex: {
        label: "生理性别",
        help: "生理性别影响酒精在体内的分布（维德马克公式中的r值）。",
      },
      hoursElapsed: {
        label: "自首杯起经过的小时数",
        help: "从喝第一杯到现在经过的时间。身体每小时代谢约0.015%的BAC。",
      },
    },
    outputs: {
      bac: {
        label: "血液酒精浓度（%）",
        help: "估算的BAC百分比。超过0.08%在大多数国家驾车属违法。",
      },
      hoursUntilSober: {
        label: "距清醒的小时数",
        help: "估计BAC恢复到0.00%所需的小时数。",
      },
      isLegal: {
        label: "驾车是否合法",
        help: "BAC是否低于0.08%的法定限制。请务必查阅当地法律法规。",
      },
      isDangerous: {
        label: "是否达到危险水平",
        help: "BAC达到0.15%或以上被认为非常危险。",
      },
      category: {
        label: "损伤程度类别",
        help: "根据BAC范围划分的近似损伤程度。",
      },
    },
    options: {
      sex: {
        male: "男性",
        female: "女性",
      },
    },
    errors: {
      drinksOutOfRange: "饮酒数量必须在0到30之间。",
      weightOutOfRange: "体重必须在30到300千克之间。",
      hoursOutOfRange: "经过的小时数必须在0到24之间。",
    },
    faq: [
      {
        q: "这个BAC计算器有多准确？",
        a: "维德马克公式提供的是估算值。实际BAC会因饮食、水合状态、药物、个人代谢和耐受度而有所不同。仅供教育用途，请勿用于判断是否适合驾车。",
      },
      {
        q: "什么是一杯标准饮品？",
        a: "一杯标准饮品含14克纯酒精：355毫升普通啤酒（5%）、148毫升葡萄酒（12%）或44毫升蒸馏酒（40%）。",
      },
      {
        q: "身体处理酒精的速度有多快？",
        a: "平均而言，肝脏每小时代谢约0.015%的BAC。咖啡、冷水淋浴或食物不会加速这一过程——只有时间才能降低BAC。",
      },
    ],
  },

  ja: {
    title: "血中アルコール濃度（BAC）計算機",
    short: "飲酒量・体重・性別・経過時間からウィドマーク式でBACを推定します。",
    description:
      "ウィドマーク式を用いた教育目的のBAC計算機。飲酒量・体重・生物学的性別・経過時間から血中アルコール濃度を推定します。教育目的のみ — 飲酒後は絶対に運転しないでください。",
    keywords: [
      "BAC計算機",
      "血中アルコール濃度",
      "ウィドマーク式",
      "アルコール計算機",
      "飲酒運転",
      "アルコール濃度",
    ],
    inputs: {
      drinks: {
        label: "飲み物の数",
        help: "標準飲酒量1杯は純アルコール14g（例：ビール355ml・5%、ワイン148ml・12%、蒸留酒44ml・40%）。",
      },
      weightKg: {
        label: "体重（kg）",
        help: "現在の体重（キログラム）。",
      },
      sex: {
        label: "生物学的性別",
        help: "生物学的性別は体内のアルコール分布に影響します（ウィドマーク式のr値）。",
      },
      hoursElapsed: {
        label: "最初の飲酒からの時間（時間）",
        help: "最初の飲酒からの経過時間。体は1時間あたり約0.015%のBACを代謝します。",
      },
    },
    outputs: {
      bac: {
        label: "血中アルコール濃度（%）",
        help: "推定BAC（パーセント）。0.08%超は多くの国で運転が違法です。",
      },
      hoursUntilSober: {
        label: "素面に戻るまでの時間（時間）",
        help: "BACが0.00%に戻るまでの推定時間。",
      },
      isLegal: {
        label: "運転が合法か",
        help: "BACが法定上限0.08%を下回っているか。必ず現地の法律を確認してください。",
      },
      isDangerous: {
        label: "危険なレベル",
        help: "BAC 0.15%以上は非常に危険とみなされます。",
      },
      category: {
        label: "酔いの程度",
        help: "BACの範囲に基づく酔いの概算レベル。",
      },
    },
    options: {
      sex: {
        male: "男性",
        female: "女性",
      },
    },
    errors: {
      drinksOutOfRange: "飲み物の数は0〜30の範囲で入力してください。",
      weightOutOfRange: "体重は30〜300kgの範囲で入力してください。",
      hoursOutOfRange: "経過時間は0〜24時間の範囲で入力してください。",
    },
    faq: [
      {
        q: "この計算機はどれくらい正確ですか？",
        a: "ウィドマーク式は推定値を提供します。実際のBACは食事・水分補給・薬物・個人の代謝・耐性によって異なります。教育目的のみに使用し、運転の判断には使用しないでください。",
      },
      {
        q: "標準飲酒量とは？",
        a: "標準飲酒量1杯は純アルコール14g：ビール355ml（5%）、ワイン148ml（12%）、蒸留酒44ml（40%）。",
      },
      {
        q: "体はどのくらいの速さでアルコールを処理しますか？",
        a: "平均して肝臓は1時間あたり約0.015%のBACを代謝します。コーヒーや冷水シャワー、食事はこれを速めません — 時間だけがBACを下げます。",
      },
    ],
  },

  ko: {
    title: "혈중 알코올 농도(BAC) 계산기",
    short: "음주량, 체중, 성별, 경과 시간을 바탕으로 위드마크 공식을 사용하여 BAC를 추정합니다.",
    description:
      "위드마크 공식 기반의 교육용 혈중 알코올 농도 계산기. 음주 수, 체중, 생물학적 성별, 경과 시간을 입력해 혈중 알코올 수치를 추정하세요. 교육 목적에만 사용하세요 — 음주 후에는 절대 운전하지 마세요.",
    keywords: [
      "BAC 계산기",
      "혈중 알코올 농도",
      "위드마크 공식",
      "알코올 계산기",
      "음주 운전",
      "알코올 수치",
    ],
    inputs: {
      drinks: {
        label: "음주 수",
        help: "표준 음료 1잔에는 순수 알코올 14g이 포함됩니다(예: 355ml 맥주 5%, 148ml 와인 12%, 44ml 증류주 40%).",
      },
      weightKg: {
        label: "체중(kg)",
        help: "현재 체중(킬로그램).",
      },
      sex: {
        label: "생물학적 성별",
        help: "생물학적 성별은 체내 알코올 분포에 영향을 미칩니다(위드마크 공식의 r값).",
      },
      hoursElapsed: {
        label: "첫 음주 후 경과 시간",
        help: "첫 음주부터 경과된 시간. 신체는 시간당 약 0.015%의 BAC를 대사합니다.",
      },
    },
    outputs: {
      bac: {
        label: "혈중 알코올 농도(%)",
        help: "추정 BAC 백분율. 대부분의 국가에서 0.08% 초과 시 음주 운전에 해당합니다.",
      },
      hoursUntilSober: {
        label: "완전히 깨어날 때까지 남은 시간",
        help: "BAC가 0.00%로 돌아올 때까지 예상 시간.",
      },
      isLegal: {
        label: "운전 합법 여부",
        help: "BAC가 법적 한도 0.08% 미만인지 여부. 현지 법률을 반드시 확인하세요.",
      },
      isDangerous: {
        label: "위험 수준",
        help: "BAC 0.15% 이상은 매우 위험한 수준으로 간주됩니다.",
      },
      category: {
        label: "손상 정도 범주",
        help: "BAC 범위를 기반으로 한 대략적인 손상 수준.",
      },
    },
    options: {
      sex: {
        male: "남성",
        female: "여성",
      },
    },
    errors: {
      drinksOutOfRange: "음주 수는 0에서 30 사이여야 합니다.",
      weightOutOfRange: "체중은 30에서 300kg 사이여야 합니다.",
      hoursOutOfRange: "경과 시간은 0에서 24시간 사이여야 합니다.",
    },
    faq: [
      {
        q: "이 BAC 계산기는 얼마나 정확한가요?",
        a: "위드마크 공식은 추정치를 제공합니다. 실제 BAC는 음식 섭취, 수분 상태, 약물, 개인 대사 및 내성에 따라 다릅니다. 교육 목적으로만 사용하고, 운전 가능 여부를 판단하는 데 사용하지 마세요.",
      },
      {
        q: "표준 음료란 무엇인가요?",
        a: "표준 음료 1잔은 순수 알코올 14g을 포함합니다: 일반 맥주 355ml(5%), 와인 148ml(12%), 증류주 44ml(40%).",
      },
      {
        q: "신체는 얼마나 빨리 알코올을 처리하나요?",
        a: "평균적으로 간은 시간당 약 0.015%의 BAC를 대사합니다. 커피, 차가운 샤워 또는 음식은 이 과정을 가속하지 않습니다 — 오직 시간만이 BAC를 줄입니다.",
      },
    ],
  },

  hi: {
    title: "रक्त में अल्कोहल सामग्री (BAC) कैलकुलेटर",
    short: "पेय, वजन, लिंग और समय के आधार पर विडमार्क फॉर्मूले से BAC का अनुमान लगाएं।",
    description:
      "विडमार्क फॉर्मूले पर आधारित शैक्षिक BAC कैलकुलेटर। पेय की संख्या, शरीर का वजन, जैविक लिंग और बीते घंटों के आधार पर रक्त में अल्कोहल के स्तर का अनुमान लगाएं। केवल शैक्षिक उद्देश्यों के लिए — शराब पीने के बाद कभी गाड़ी न चलाएं।",
    keywords: [
      "BAC कैलकुलेटर",
      "रक्त में अल्कोहल सामग्री",
      "विडमार्क फॉर्मूला",
      "अल्कोहल कैलकुलेटर",
      "शराब पीकर गाड़ी चलाना",
      "अल्कोहल स्तर",
    ],
    inputs: {
      drinks: {
        label: "पेय की संख्या",
        help: "एक मानक पेय में 14 ग्राम शुद्ध अल्कोहल होता है (जैसे 355 मल बियर 5%, 148 मल वाइन 12% या 44 मल स्पिरिट 40%)।",
      },
      weightKg: {
        label: "वजन (किग्रा)",
        help: "आपका वर्तमान शरीर का वजन किलोग्राम में।",
      },
      sex: {
        label: "जैविक लिंग",
        help: "जैविक लिंग शरीर में अल्कोहल के वितरण को प्रभावित करता है (विडमार्क फॉर्मूले में r मान)।",
      },
      hoursElapsed: {
        label: "पहले पेय के बाद के घंटे",
        help: "पहला पेय पीने के बाद से बीता समय। शरीर प्रति घंटे लगभग 0.015% BAC चयापचय करता है।",
      },
    },
    outputs: {
      bac: {
        label: "रक्त में अल्कोहल सामग्री (%)",
        help: "अनुमानित BAC प्रतिशत में। 0.08% से ऊपर अधिकांश देशों में गाड़ी चलाना अवैध है।",
      },
      hoursUntilSober: {
        label: "होश में आने तक के घंटे",
        help: "BAC के 0.00% पर वापस आने तक अनुमानित घंटे।",
      },
      isLegal: {
        label: "गाड़ी चलाना कानूनी है",
        help: "क्या BAC कानूनी सीमा 0.08% से कम है। हमेशा स्थानीय कानूनों की जांच करें।",
      },
      isDangerous: {
        label: "खतरनाक स्तर",
        help: "0.15% या इससे अधिक BAC को बहुत खतरनाक माना जाता है।",
      },
      category: {
        label: "हानि श्रेणी",
        help: "BAC सीमा के आधार पर अनुमानित हानि का स्तर।",
      },
    },
    options: {
      sex: {
        male: "पुरुष",
        female: "महिला",
      },
    },
    errors: {
      drinksOutOfRange: "पेय की संख्या 0 और 30 के बीच होनी चाहिए।",
      weightOutOfRange: "वजन 30 और 300 किग्रा के बीच होना चाहिए।",
      hoursOutOfRange: "बीते घंटे 0 और 24 के बीच होने चाहिए।",
    },
    faq: [
      {
        q: "यह BAC कैलकुलेटर कितना सटीक है?",
        a: "विडमार्क फॉर्मूला एक अनुमान प्रदान करता है। वास्तविक BAC भोजन के सेवन, जलयोजन, दवाओं, व्यक्तिगत चयापचय और सहनशीलता के साथ भिन्न होता है। केवल शैक्षिक उद्देश्यों के लिए उपयोग करें।",
      },
      {
        q: "एक मानक पेय क्या है?",
        a: "एक मानक पेय में 14 ग्राम शुद्ध अल्कोहल होता है: 355 मल नियमित बियर (5%), 148 मल वाइन (12%) या 44 मल आसुत स्पिरिट (40%)।",
      },
      {
        q: "शरीर अल्कोहल को कितनी जल्दी संसाधित करता है?",
        a: "औसतन, यकृत प्रति घंटे लगभग 0.015% BAC चयापचय करता है। कॉफी, ठंडे पानी से नहाना या खाना इसे तेज नहीं करता — केवल समय BAC को कम करता है।",
      },
    ],
  },
};

export default i18n;
