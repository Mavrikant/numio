import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "TDEE Calculator — Daily Calorie Needs",
    short: "Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor formula with detailed activity levels.",
    description:
      "Free TDEE calculator. Enter your weight, height, age, gender, and activity level to get your BMR, total daily calories, and macro targets (protein, carbs, fat) at maintenance.",
    keywords: [
      "TDEE calculator",
      "total daily energy expenditure",
      "calorie calculator",
      "BMR calculator",
      "Mifflin St Jeor",
      "daily calorie needs",
      "macro calculator",
    ],
    inputs: {
      weight: { label: "Weight (kg)", help: "Your current body weight in kilograms." },
      height: { label: "Height (cm)", help: "Your height in centimetres." },
      age: { label: "Age (years)", help: "Your current age." },
      gender: { label: "Biological sex", help: "Used for the Mifflin-St Jeor formula which has different constants for males and females." },
      activityLevel: { label: "Activity level", help: "Choose the level that best matches your typical weekly routine." },
    },
    outputs: {
      bmr: { label: "Basal Metabolic Rate (kcal/day)", help: "Calories your body burns at complete rest — breathing, circulation, and cell maintenance." },
      tdee: { label: "TDEE (kcal/day)", help: "Total Daily Energy Expenditure — your maintenance calories at your current activity level." },
      proteinTarget: { label: "Protein target (g/day)", help: "1.6 g/kg for active individuals, 0.8 g/kg for sedentary." },
      carbTarget: { label: "Carbohydrate target (g/day)", help: "Remaining calories after protein and fat, divided by 4 kcal/g." },
      fatTarget: { label: "Fat target (g/day)", help: "30% of total daily calories, divided by 9 kcal/g." },
    },
    options: {
      gender: { male: "Male", female: "Female" },
      activityLevel: {
        sedentary: "Sedentary (desk job, no exercise)",
        lightlyActive: "Lightly active (exercise 1–3 days/week)",
        moderatelyActive: "Moderately active (exercise 3–5 days/week)",
        veryActive: "Very active (hard exercise 6–7 days/week)",
        extraActive: "Extra active (very hard exercise + physical job)",
        athlete: "Athlete (twice-daily training)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 20 and 300 kg.",
      heightOutOfRange: "Height must be between 100 and 250 cm.",
      ageOutOfRange: "Age must be between 15 and 100 years.",
    },
    faq: [
      {
        q: "What is the Mifflin-St Jeor formula?",
        a: "Developed by Mifflin et al. in 1990, it estimates basal metabolic rate: Male BMR = 10×weight(kg) + 6.25×height(cm) − 5×age + 5; Female BMR = 10×weight(kg) + 6.25×height(cm) − 5×age − 161. It is widely considered the most accurate formula for most adults.",
      },
      {
        q: "What is TDEE?",
        a: "TDEE (Total Daily Energy Expenditure) is the total number of calories you burn in a day, combining your BMR with the energy cost of your daily activities and exercise.",
      },
      {
        q: "How accurate is this calculator?",
        a: "For most adults, the Mifflin-St Jeor equation predicts resting energy expenditure within 10% of measured values. TDEE adds an activity multiplier, which adds further uncertainty. Use these figures as starting estimates and adjust based on real-world weight trends over 2–4 weeks.",
      },
      {
        q: "Should I eat at my TDEE to maintain weight?",
        a: "Yes. Eating at TDEE means consuming the same number of calories as you burn, resulting in weight maintenance over time. For fat loss, a deficit of 300–500 kcal/day is commonly recommended.",
      },
    ],
  },

  tr: {
    title: "TDEE Hesaplayıcı — Günlük Kalori İhtiyacı",
    short: "Mifflin-St Jeor formülü ile günlük toplam enerji harcamanızı detaylı aktivite seviyeleriyle hesaplayın.",
    description: "Ücretsiz TDEE hesaplayıcı. Kilo, boy, yaş, cinsiyet ve aktivite düzeyinizi girerek bazal metabolizma hızınızı, toplam günlük kalori ve makro hedeflerinizi öğrenin.",
    keywords: ["TDEE hesaplayıcı", "günlük enerji harcaması", "kalori hesaplayıcı", "BMR hesaplayıcı", "Mifflin St Jeor", "günlük kalori ihtiyacı", "makro hesaplayıcı"],
    inputs: {
      weight: { label: "Kilo (kg)", help: "Mevcut vücut ağırlığınız." },
      height: { label: "Boy (cm)", help: "Santimetre cinsinden boyunuz." },
      age: { label: "Yaş (yıl)", help: "Mevcut yaşınız." },
      gender: { label: "Biyolojik cinsiyet", help: "Mifflin-St Jeor formülü erkek ve kadın için farklı sabitler kullanır." },
      activityLevel: { label: "Aktivite düzeyi", help: "Haftalık rutininize en uygun düzeyi seçin." },
    },
    outputs: {
      bmr: { label: "Bazal Metabolizma Hızı (kcal/gün)", help: "Tam dinlenme halinde vücudunuzun harcadığı kalori." },
      tdee: { label: "TDEE (kcal/gün)", help: "Günlük toplam enerji harcaması — mevcut aktivite düzeyindeki bakım kalorisi." },
      proteinTarget: { label: "Protein hedefi (g/gün)", help: "Aktif bireyler için 1,6 g/kg, hareketsiz bireyler için 0,8 g/kg." },
      carbTarget: { label: "Karbonhidrat hedefi (g/gün)", help: "Protein ve yağdan sonra kalan kalori, 4 kcal/g'a bölünür." },
      fatTarget: { label: "Yağ hedefi (g/gün)", help: "Toplam günlük kalorinin %30'u, 9 kcal/g'a bölünür." },
    },
    options: {
      gender: { male: "Erkek", female: "Kadın" },
      activityLevel: {
        sedentary: "Hareketsiz (masa başı iş, egzersiz yok)",
        lightlyActive: "Az aktif (haftada 1–3 gün egzersiz)",
        moderatelyActive: "Orta aktif (haftada 3–5 gün egzersiz)",
        veryActive: "Çok aktif (haftada 6–7 gün yoğun egzersiz)",
        extraActive: "Aşırı aktif (yoğun egzersiz + fiziksel iş)",
        athlete: "Atlet (günde iki antrenman)",
      },
    },
    errors: {
      weightOutOfRange: "Kilo 20 ile 300 kg arasında olmalıdır.",
      heightOutOfRange: "Boy 100 ile 250 cm arasında olmalıdır.",
      ageOutOfRange: "Yaş 15 ile 100 yıl arasında olmalıdır.",
    },
    faq: [
      { q: "Mifflin-St Jeor formülü nedir?", a: "1990 yılında Mifflin ve arkadaşları tarafından geliştirilen bu formül, bazal metabolizma hızını tahmin eder: Erkek BMH = 10×ağırlık + 6,25×boy − 5×yaş + 5; Kadın BMH = 10×ağırlık + 6,25×boy − 5×yaş − 161." },
    ],
  },

  de: {
    title: "TDEE-Rechner — Täglicher Kalorienbedarf",
    short: "Berechnen Sie Ihren gesamten täglichen Energieverbrauch mit der Mifflin-St-Jeor-Formel und detaillierten Aktivitätsstufen.",
    description: "Kostenloser TDEE-Rechner. Geben Sie Gewicht, Größe, Alter, Geschlecht und Aktivitätsniveau ein, um Ihren BMR, täglichen Kalorienbedarf und Makronährstoffziele zu berechnen.",
    keywords: ["TDEE-Rechner", "Gesamtenergiehaushalt", "Kalorienrechner", "BMR-Rechner", "Mifflin St Jeor", "Tageskalorienbedarf", "Makrorechner"],
    inputs: {
      weight: { label: "Gewicht (kg)", help: "Ihr aktuelles Körpergewicht." },
      height: { label: "Körpergröße (cm)", help: "Ihre Körpergröße in Zentimetern." },
      age: { label: "Alter (Jahre)", help: "Ihr aktuelles Alter." },
      gender: { label: "Biologisches Geschlecht", help: "Die Mifflin-St-Jeor-Formel verwendet unterschiedliche Konstanten für Männer und Frauen." },
      activityLevel: { label: "Aktivitätsniveau", help: "Wählen Sie das Niveau, das Ihrer typischen Wochenroutine am besten entspricht." },
    },
    outputs: {
      bmr: { label: "Grundumsatz (kcal/Tag)", help: "Kalorien, die Ihr Körper in völliger Ruhe verbraucht." },
      tdee: { label: "TDEE (kcal/Tag)", help: "Gesamter täglicher Energieverbrauch bei Ihrem Aktivitätsniveau." },
      proteinTarget: { label: "Proteinziel (g/Tag)", help: "1,6 g/kg für aktive Personen, 0,8 g/kg für Inaktive." },
      carbTarget: { label: "Kohlenhydratziel (g/Tag)", help: "Verbleibende Kalorien nach Protein und Fett, dividiert durch 4 kcal/g." },
      fatTarget: { label: "Fettziel (g/Tag)", help: "30% der täglichen Gesamtkalorien, dividiert durch 9 kcal/g." },
    },
    options: {
      gender: { male: "Männlich", female: "Weiblich" },
      activityLevel: {
        sedentary: "Sitzend (Bürojob, kein Sport)",
        lightlyActive: "Wenig aktiv (Sport 1–3 Tage/Woche)",
        moderatelyActive: "Mäßig aktiv (Sport 3–5 Tage/Woche)",
        veryActive: "Sehr aktiv (intensiver Sport 6–7 Tage/Woche)",
        extraActive: "Extrem aktiv (intensiver Sport + körperliche Arbeit)",
        athlete: "Sportler (zweimaliges Training pro Tag)",
      },
    },
    errors: {
      weightOutOfRange: "Das Gewicht muss zwischen 20 und 300 kg liegen.",
      heightOutOfRange: "Die Körpergröße muss zwischen 100 und 250 cm liegen.",
      ageOutOfRange: "Das Alter muss zwischen 15 und 100 Jahren liegen.",
    },
    faq: [
      { q: "Was ist die Mifflin-St-Jeor-Formel?", a: "Entwickelt von Mifflin et al. (1990): Männer BMR = 10×Gewicht + 6,25×Größe − 5×Alter + 5; Frauen BMR = 10×Gewicht + 6,25×Größe − 5×Alter − 161." },
    ],
  },

  fr: {
    title: "Calculateur TDEE — Besoins caloriques journaliers",
    short: "Calculez votre dépense énergétique totale quotidienne avec la formule Mifflin-St Jeor et des niveaux d'activité détaillés.",
    description: "Calculateur TDEE gratuit. Entrez votre poids, taille, âge, sexe et niveau d'activité pour obtenir votre MB, vos calories journalières et vos objectifs macro.",
    keywords: ["calculateur TDEE", "dépense énergétique totale", "calculateur calories", "calculateur MB", "Mifflin St Jeor", "besoins caloriques", "calculateur macros"],
    inputs: {
      weight: { label: "Poids (kg)", help: "Votre poids corporel actuel." },
      height: { label: "Taille (cm)", help: "Votre taille en centimètres." },
      age: { label: "Âge (années)", help: "Votre âge actuel." },
      gender: { label: "Sexe biologique", help: "La formule Mifflin-St Jeor utilise des constantes différentes selon le sexe." },
      activityLevel: { label: "Niveau d'activité", help: "Choisissez le niveau correspondant à votre routine hebdomadaire." },
    },
    outputs: {
      bmr: { label: "Métabolisme de base (kcal/jour)", help: "Calories brûlées au repos complet." },
      tdee: { label: "TDEE (kcal/jour)", help: "Dépense énergétique totale à votre niveau d'activité." },
      proteinTarget: { label: "Objectif protéines (g/jour)", help: "1,6 g/kg pour les actifs, 0,8 g/kg pour les sédentaires." },
      carbTarget: { label: "Objectif glucides (g/jour)", help: "Calories restantes après protéines et graisses, divisées par 4 kcal/g." },
      fatTarget: { label: "Objectif lipides (g/jour)", help: "30% des calories totales, divisées par 9 kcal/g." },
    },
    options: {
      gender: { male: "Masculin", female: "Féminin" },
      activityLevel: {
        sedentary: "Sédentaire (travail de bureau, sans exercice)",
        lightlyActive: "Peu actif (exercice 1–3 jours/semaine)",
        moderatelyActive: "Modérément actif (exercice 3–5 jours/semaine)",
        veryActive: "Très actif (exercice intense 6–7 jours/semaine)",
        extraActive: "Extrêmement actif (exercice intense + travail physique)",
        athlete: "Athlète (entraînement deux fois par jour)",
      },
    },
    errors: {
      weightOutOfRange: "Le poids doit être compris entre 20 et 300 kg.",
      heightOutOfRange: "La taille doit être comprise entre 100 et 250 cm.",
      ageOutOfRange: "L'âge doit être compris entre 15 et 100 ans.",
    },
    faq: [
      { q: "Qu'est-ce que la formule Mifflin-St Jeor ?", a: "Développée en 1990 par Mifflin et al. : Hommes MB = 10×poids + 6,25×taille − 5×âge + 5 ; Femmes MB = 10×poids + 6,25×taille − 5×âge − 161." },
    ],
  },

  es: {
    title: "Calculadora TDEE — Necesidades calóricas diarias",
    short: "Calcula tu gasto energético total diario con la fórmula Mifflin-St Jeor y niveles de actividad detallados.",
    description: "Calculadora TDEE gratuita. Introduce tu peso, talla, edad, sexo y nivel de actividad para obtener tu TMB, calorías diarias y objetivos de macros.",
    keywords: ["calculadora TDEE", "gasto energético total", "calculadora calorías", "calculadora TMB", "Mifflin St Jeor", "calorías diarias", "calculadora macros"],
    inputs: {
      weight: { label: "Peso (kg)", help: "Tu peso corporal actual." },
      height: { label: "Altura (cm)", help: "Tu altura en centímetros." },
      age: { label: "Edad (años)", help: "Tu edad actual." },
      gender: { label: "Sexo biológico", help: "La fórmula Mifflin-St Jeor usa constantes diferentes para hombres y mujeres." },
      activityLevel: { label: "Nivel de actividad", help: "Elige el nivel que mejor describa tu rutina semanal." },
    },
    outputs: {
      bmr: { label: "Tasa metabólica basal (kcal/día)", help: "Calorías que quema tu cuerpo en reposo completo." },
      tdee: { label: "TDEE (kcal/día)", help: "Gasto energético total en tu nivel de actividad actual." },
      proteinTarget: { label: "Objetivo proteína (g/día)", help: "1,6 g/kg para activos, 0,8 g/kg para sedentarios." },
      carbTarget: { label: "Objetivo carbohidratos (g/día)", help: "Calorías restantes tras proteína y grasa, divididas por 4 kcal/g." },
      fatTarget: { label: "Objetivo grasa (g/día)", help: "30% de las calorías totales, dividido por 9 kcal/g." },
    },
    options: {
      gender: { male: "Masculino", female: "Femenino" },
      activityLevel: {
        sedentary: "Sedentario (trabajo de escritorio, sin ejercicio)",
        lightlyActive: "Ligeramente activo (ejercicio 1–3 días/semana)",
        moderatelyActive: "Moderadamente activo (ejercicio 3–5 días/semana)",
        veryActive: "Muy activo (ejercicio intenso 6–7 días/semana)",
        extraActive: "Extra activo (ejercicio intenso + trabajo físico)",
        athlete: "Atleta (entrenamiento dos veces al día)",
      },
    },
    errors: {
      weightOutOfRange: "El peso debe estar entre 20 y 300 kg.",
      heightOutOfRange: "La altura debe estar entre 100 y 250 cm.",
      ageOutOfRange: "La edad debe estar entre 15 y 100 años.",
    },
    faq: [
      { q: "¿Qué es la fórmula Mifflin-St Jeor?", a: "Desarrollada en 1990: TMB hombres = 10×peso + 6,25×altura − 5×edad + 5; TMB mujeres = 10×peso + 6,25×altura − 5×edad − 161." },
    ],
  },

  it: {
    title: "Calcolatore TDEE — Fabbisogno calorico giornaliero",
    short: "Calcola il tuo dispendio energetico totale giornaliero con la formula Mifflin-St Jeor e livelli di attività dettagliati.",
    description: "Calcolatore TDEE gratuito. Inserisci peso, altezza, età, sesso e livello di attività per ottenere il tuo MB, le calorie giornaliere e gli obiettivi macronutrienti.",
    keywords: ["calcolatore TDEE", "dispendio energetico totale", "calcolatore calorie", "calcolatore MB", "Mifflin St Jeor", "calorie giornaliere", "calcolatore macro"],
    inputs: {
      weight: { label: "Peso (kg)", help: "Il tuo peso corporeo attuale." },
      height: { label: "Altezza (cm)", help: "La tua altezza in centimetri." },
      age: { label: "Età (anni)", help: "La tua età attuale." },
      gender: { label: "Sesso biologico", help: "La formula Mifflin-St Jeor usa costanti diverse per maschi e femmine." },
      activityLevel: { label: "Livello di attività", help: "Scegli il livello che meglio corrisponde alla tua routine settimanale." },
    },
    outputs: {
      bmr: { label: "Metabolismo basale (kcal/giorno)", help: "Calorie bruciate in completo riposo." },
      tdee: { label: "TDEE (kcal/giorno)", help: "Dispendio energetico totale al tuo livello di attività." },
      proteinTarget: { label: "Obiettivo proteine (g/giorno)", help: "1,6 g/kg per i soggetti attivi, 0,8 g/kg per i sedentari." },
      carbTarget: { label: "Obiettivo carboidrati (g/giorno)", help: "Calorie rimanenti dopo proteine e grassi, divise per 4 kcal/g." },
      fatTarget: { label: "Obiettivo grassi (g/giorno)", help: "30% delle calorie totali, divise per 9 kcal/g." },
    },
    options: {
      gender: { male: "Maschio", female: "Femmina" },
      activityLevel: {
        sedentary: "Sedentario (lavoro d'ufficio, nessun esercizio)",
        lightlyActive: "Poco attivo (esercizio 1–3 giorni/settimana)",
        moderatelyActive: "Moderatamente attivo (esercizio 3–5 giorni/settimana)",
        veryActive: "Molto attivo (esercizio intenso 6–7 giorni/settimana)",
        extraActive: "Extra attivo (esercizio molto intenso + lavoro fisico)",
        athlete: "Atleta (allenamento due volte al giorno)",
      },
    },
    errors: {
      weightOutOfRange: "Il peso deve essere compreso tra 20 e 300 kg.",
      heightOutOfRange: "L'altezza deve essere compresa tra 100 e 250 cm.",
      ageOutOfRange: "L'età deve essere compresa tra 15 e 100 anni.",
    },
    faq: [
      { q: "Cos'è la formula Mifflin-St Jeor?", a: "Sviluppata nel 1990: MB uomini = 10×peso + 6,25×altezza − 5×età + 5; MB donne = 10×peso + 6,25×altezza − 5×età − 161." },
    ],
  },

  ar: {
    title: "حاسبة TDEE — احتياجات السعرات الحرارية اليومية",
    short: "احسب إجمالي إنفاق الطاقة اليومي باستخدام معادلة Mifflin-St Jeor ومستويات النشاط المفصّلة.",
    description: "حاسبة TDEE مجانية. أدخل وزنك وطولك وعمرك وجنسك ومستوى نشاطك للحصول على معدل الأيض الأساسي وإجمالي السعرات الحرارية اليومية وأهداف المغذيات الكبرى.",
    keywords: ["حاسبة TDEE", "إجمالي إنفاق الطاقة اليومي", "حاسبة السعرات الحرارية", "معدل الأيض الأساسي", "Mifflin St Jeor", "الاحتياجات اليومية", "حاسبة المغذيات"],
    inputs: {
      weight: { label: "الوزن (كجم)", help: "وزنك الحالي." },
      height: { label: "الطول (سم)", help: "طولك بالسنتيمتر." },
      age: { label: "العمر (سنوات)", help: "عمرك الحالي." },
      gender: { label: "الجنس البيولوجي", help: "تستخدم معادلة Mifflin-St Jeor ثوابت مختلفة للذكور والإناث." },
      activityLevel: { label: "مستوى النشاط", help: "اختر المستوى الأقرب لروتينك الأسبوعي." },
    },
    outputs: {
      bmr: { label: "معدل الأيض الأساسي (سعرة/يوم)", help: "السعرات التي يحرقها جسمك في حالة الراحة التامة." },
      tdee: { label: "TDEE (سعرة/يوم)", help: "إجمالي إنفاق الطاقة اليومي عند مستوى نشاطك الحالي." },
      proteinTarget: { label: "هدف البروتين (جم/يوم)", help: "1.6 جم/كجم للنشطين، 0.8 جم/كجم للخاملين." },
      carbTarget: { label: "هدف الكربوهيدرات (جم/يوم)", help: "السعرات المتبقية بعد البروتين والدهون، مقسّمة على 4 سعرة/جم." },
      fatTarget: { label: "هدف الدهون (جم/يوم)", help: "30% من إجمالي السعرات اليومية، مقسّمة على 9 سعرة/جم." },
    },
    options: {
      gender: { male: "ذكر", female: "أنثى" },
      activityLevel: {
        sedentary: "خامل (عمل مكتبي، بدون رياضة)",
        lightlyActive: "خفيف النشاط (رياضة 1–3 أيام/أسبوع)",
        moderatelyActive: "متوسط النشاط (رياضة 3–5 أيام/أسبوع)",
        veryActive: "عالي النشاط (رياضة مكثفة 6–7 أيام/أسبوع)",
        extraActive: "نشاط مفرط (رياضة مكثفة جداً + عمل جسدي)",
        athlete: "رياضي محترف (تدريبان يومياً)",
      },
    },
    errors: {
      weightOutOfRange: "يجب أن يكون الوزن بين 20 و300 كجم.",
      heightOutOfRange: "يجب أن يكون الطول بين 100 و250 سم.",
      ageOutOfRange: "يجب أن يكون العمر بين 15 و100 سنة.",
    },
    faq: [
      { q: "ما هي معادلة Mifflin-St Jeor؟", a: "طُوِّرت عام 1990: للذكور BMR = 10×الوزن + 6.25×الطول − 5×العمر + 5؛ للإناث BMR = 10×الوزن + 6.25×الطول − 5×العمر − 161." },
    ],
  },

  ru: {
    title: "Калькулятор TDEE — Суточная потребность в калориях",
    short: "Рассчитайте общий суточный расход энергии по формуле Миффлина-Сен Жора с детальными уровнями активности.",
    description: "Бесплатный калькулятор TDEE. Введите вес, рост, возраст, пол и уровень активности для расчёта основного обмена, суточного калоража и макросов.",
    keywords: ["калькулятор TDEE", "суточный расход энергии", "калькулятор калорий", "основной обмен", "Миффлин Сен Жор", "суточная потребность в калориях", "калькулятор макросов"],
    inputs: {
      weight: { label: "Вес (кг)", help: "Ваш текущий вес." },
      height: { label: "Рост (см)", help: "Ваш рост в сантиметрах." },
      age: { label: "Возраст (лет)", help: "Ваш текущий возраст." },
      gender: { label: "Биологический пол", help: "Формула Миффлина-Сен Жора использует разные константы для мужчин и женщин." },
      activityLevel: { label: "Уровень активности", help: "Выберите уровень, наиболее соответствующий вашей еженедельной рутине." },
    },
    outputs: {
      bmr: { label: "Основной обмен (ккал/день)", help: "Калории, сжигаемые в полном покое." },
      tdee: { label: "TDEE (ккал/день)", help: "Общий суточный расход энергии при вашем уровне активности." },
      proteinTarget: { label: "Цель по белку (г/день)", help: "1,6 г/кг для активных, 0,8 г/кг для малоподвижных." },
      carbTarget: { label: "Цель по углеводам (г/день)", help: "Оставшиеся калории после белков и жиров, делённые на 4 ккал/г." },
      fatTarget: { label: "Цель по жирам (г/день)", help: "30% от суточного калоража, делённые на 9 ккал/г." },
    },
    options: {
      gender: { male: "Мужской", female: "Женский" },
      activityLevel: {
        sedentary: "Малоподвижный (офисная работа, нет тренировок)",
        lightlyActive: "Слабо активный (тренировки 1–3 раза/нед.)",
        moderatelyActive: "Умеренно активный (тренировки 3–5 раз/нед.)",
        veryActive: "Высоко активный (интенсивные тренировки 6–7 раз/нед.)",
        extraActive: "Очень активный (очень интенсивные тренировки + физ. работа)",
        athlete: "Атлет (тренировки дважды в день)",
      },
    },
    errors: {
      weightOutOfRange: "Вес должен быть от 20 до 300 кг.",
      heightOutOfRange: "Рост должен быть от 100 до 250 см.",
      ageOutOfRange: "Возраст должен быть от 15 до 100 лет.",
    },
    faq: [
      { q: "Что такое формула Миффлина-Сен Жора?", a: "Разработана в 1990 году: мужчины ОО = 10×вес + 6,25×рост − 5×возраст + 5; женщины ОО = 10×вес + 6,25×рост − 5×возраст − 161." },
    ],
  },

  zh: {
    title: "TDEE计算器 — 每日卡路里需求",
    short: "使用Mifflin-St Jeor公式和详细活动水平计算您的每日总能量消耗。",
    description: "免费TDEE计算器。输入体重、身高、年龄、性别和活动水平，获取基础代谢率、每日总卡路里和宏量营养素目标。",
    keywords: ["TDEE计算器", "每日总能量消耗", "卡路里计算器", "基础代谢率计算器", "Mifflin St Jeor", "每日热量需求", "宏量营养素计算器"],
    inputs: {
      weight: { label: "体重（千克）", help: "您当前的体重。" },
      height: { label: "身高（厘米）", help: "您的身高（厘米）。" },
      age: { label: "年龄（岁）", help: "您的当前年龄。" },
      gender: { label: "生理性别", help: "Mifflin-St Jeor公式对男性和女性使用不同的常数。" },
      activityLevel: { label: "活动水平", help: "选择最符合您每周日常生活的级别。" },
    },
    outputs: {
      bmr: { label: "基础代谢率（千卡/天）", help: "您的身体在完全休息状态下消耗的卡路里。" },
      tdee: { label: "TDEE（千卡/天）", help: "当前活动水平下的每日总能量消耗。" },
      proteinTarget: { label: "蛋白质目标（克/天）", help: "活跃人群1.6克/千克，久坐人群0.8克/千克。" },
      carbTarget: { label: "碳水化合物目标（克/天）", help: "蛋白质和脂肪后剩余的卡路里除以4千卡/克。" },
      fatTarget: { label: "脂肪目标（克/天）", help: "每日总卡路里的30%，除以9千卡/克。" },
    },
    options: {
      gender: { male: "男性", female: "女性" },
      activityLevel: {
        sedentary: "久坐不动（办公室工作，无运动）",
        lightlyActive: "轻度活跃（每周运动1–3天）",
        moderatelyActive: "中度活跃（每周运动3–5天）",
        veryActive: "高度活跃（每周高强度运动6–7天）",
        extraActive: "极度活跃（高强度运动+体力劳动）",
        athlete: "运动员（每天训练两次）",
      },
    },
    errors: {
      weightOutOfRange: "体重必须在20至300千克之间。",
      heightOutOfRange: "身高必须在100至250厘米之间。",
      ageOutOfRange: "年龄必须在15至100岁之间。",
    },
    faq: [
      { q: "什么是Mifflin-St Jeor公式？", a: "1990年开发：男性BMR = 10×体重 + 6.25×身高 − 5×年龄 + 5；女性BMR = 10×体重 + 6.25×身高 − 5×年龄 − 161。" },
    ],
  },

  ja: {
    title: "TDEEカロリー計算機",
    short: "ミフリン・セント・ジョー式と詳細な活動レベルで1日の総エネルギー消費量を計算します。",
    description: "無料TDEEカロリー計算機。体重、身長、年齢、性別、活動レベルを入力して基礎代謝量、1日の総カロリー、マクロ栄養素目標を確認しましょう。",
    keywords: ["TDEE計算機", "1日の総エネルギー消費量", "カロリー計算機", "基礎代謝量計算機", "ミフリン式", "1日のカロリー必要量", "マクロ計算機"],
    inputs: {
      weight: { label: "体重（kg）", help: "現在の体重。" },
      height: { label: "身長（cm）", help: "身長（センチメートル）。" },
      age: { label: "年齢（歳）", help: "現在の年齢。" },
      gender: { label: "生物学的性別", help: "ミフリン・セント・ジョー式では男女で異なる定数を使用します。" },
      activityLevel: { label: "活動レベル", help: "週間の典型的なルーティンに最も近いレベルを選んでください。" },
    },
    outputs: {
      bmr: { label: "基礎代謝量（kcal/日）", help: "完全な安静状態で消費するカロリー。" },
      tdee: { label: "TDEE（kcal/日）", help: "現在の活動レベルでの1日の総エネルギー消費量。" },
      proteinTarget: { label: "タンパク質目標（g/日）", help: "活動的な方は1.6g/kg、座りがちな方は0.8g/kg。" },
      carbTarget: { label: "炭水化物目標（g/日）", help: "タンパク質と脂質を除いた残りのカロリーを4kcal/gで割った値。" },
      fatTarget: { label: "脂質目標（g/日）", help: "1日の総カロリーの30%を9kcal/gで割った値。" },
    },
    options: {
      gender: { male: "男性", female: "女性" },
      activityLevel: {
        sedentary: "座りがち（デスクワーク、運動なし）",
        lightlyActive: "軽度に活動的（週1〜3日運動）",
        moderatelyActive: "中程度に活動的（週3〜5日運動）",
        veryActive: "非常に活動的（週6〜7日ハードな運動）",
        extraActive: "超高活動（非常にハードな運動+肉体労働）",
        athlete: "アスリート（1日2回トレーニング）",
      },
    },
    errors: {
      weightOutOfRange: "体重は20〜300kgの範囲で入力してください。",
      heightOutOfRange: "身長は100〜250cmの範囲で入力してください。",
      ageOutOfRange: "年齢は15〜100歳の範囲で入力してください。",
    },
    faq: [
      { q: "ミフリン・セント・ジョー式とは何ですか？", a: "1990年に開発された式：男性BMR = 10×体重 + 6.25×身長 − 5×年齢 + 5；女性BMR = 10×体重 + 6.25×身長 − 5×年齢 − 161。" },
    ],
  },

  ko: {
    title: "TDEE 계산기 — 일일 칼로리 필요량",
    short: "Mifflin-St Jeor 공식과 세부 활동 수준으로 1일 총 에너지 소비량을 계산합니다.",
    description: "무료 TDEE 계산기. 체중, 키, 나이, 성별, 활동 수준을 입력하여 기초대사량, 일일 총 칼로리 및 매크로 목표치를 확인하세요.",
    keywords: ["TDEE 계산기", "일일 총 에너지 소비량", "칼로리 계산기", "기초대사량 계산기", "Mifflin St Jeor", "일일 칼로리 필요량", "매크로 계산기"],
    inputs: {
      weight: { label: "체중 (kg)", help: "현재 체중." },
      height: { label: "키 (cm)", help: "키(센티미터)." },
      age: { label: "나이 (세)", help: "현재 나이." },
      gender: { label: "생물학적 성별", help: "Mifflin-St Jeor 공식은 남성과 여성에 다른 상수를 사용합니다." },
      activityLevel: { label: "활동 수준", help: "주간 일과에 가장 잘 맞는 수준을 선택하세요." },
    },
    outputs: {
      bmr: { label: "기초대사량 (kcal/일)", help: "완전한 안정 상태에서 소비하는 칼로리." },
      tdee: { label: "TDEE (kcal/일)", help: "현재 활동 수준에서의 1일 총 에너지 소비량." },
      proteinTarget: { label: "단백질 목표 (g/일)", help: "활동적인 사람은 1.6g/kg, 비활동적인 사람은 0.8g/kg." },
      carbTarget: { label: "탄수화물 목표 (g/일)", help: "단백질과 지방 후 남은 칼로리를 4kcal/g으로 나눈 값." },
      fatTarget: { label: "지방 목표 (g/일)", help: "일일 총 칼로리의 30%를 9kcal/g으로 나눈 값." },
    },
    options: {
      gender: { male: "남성", female: "여성" },
      activityLevel: {
        sedentary: "비활동적 (사무직, 운동 없음)",
        lightlyActive: "가볍게 활동적 (주 1–3일 운동)",
        moderatelyActive: "보통으로 활동적 (주 3–5일 운동)",
        veryActive: "매우 활동적 (주 6–7일 고강도 운동)",
        extraActive: "극도로 활동적 (매우 고강도 운동 + 육체 노동)",
        athlete: "운동선수 (하루 2회 훈련)",
      },
    },
    errors: {
      weightOutOfRange: "체중은 20~300kg 사이여야 합니다.",
      heightOutOfRange: "키는 100~250cm 사이여야 합니다.",
      ageOutOfRange: "나이는 15~100세 사이여야 합니다.",
    },
    faq: [
      { q: "Mifflin-St Jeor 공식이란 무엇인가요?", a: "1990년 개발된 공식: 남성 BMR = 10×체중 + 6.25×키 − 5×나이 + 5; 여성 BMR = 10×체중 + 6.25×키 − 5×나이 − 161." },
    ],
  },

  hi: {
    title: "TDEE कैलकुलेटर — दैनिक कैलोरी आवश्यकता",
    short: "Mifflin-St Jeor सूत्र और विस्तृत गतिविधि स्तरों के साथ कुल दैनिक ऊर्जा व्यय की गणना करें।",
    description: "मुफ़्त TDEE कैलकुलेटर। वजन, ऊंचाई, आयु, लिंग और गतिविधि स्तर दर्ज करें और बेसल मेटाबॉलिक रेट, दैनिक कुल कैलोरी और मैक्रो लक्ष्य प्राप्त करें।",
    keywords: ["TDEE कैलकुलेटर", "कुल दैनिक ऊर्जा व्यय", "कैलोरी कैलकुलेटर", "BMR कैलकुलेटर", "Mifflin St Jeor", "दैनिक कैलोरी आवश्यकता", "मैक्रो कैलकुलेटर"],
    inputs: {
      weight: { label: "वजन (किग्रा)", help: "आपका वर्तमान शारीरिक वजन।" },
      height: { label: "ऊंचाई (सेमी)", help: "आपकी ऊंचाई सेंटीमीटर में।" },
      age: { label: "आयु (वर्ष)", help: "आपकी वर्तमान आयु।" },
      gender: { label: "जैविक लिंग", help: "Mifflin-St Jeor सूत्र पुरुषों और महिलाओं के लिए अलग-अलग स्थिरांक का उपयोग करता है।" },
      activityLevel: { label: "गतिविधि स्तर", help: "अपनी साप्ताहिक दिनचर्या के सबसे करीब स्तर चुनें।" },
    },
    outputs: {
      bmr: { label: "बेसल मेटाबॉलिक रेट (kcal/दिन)", help: "पूर्ण विश्राम में आपके शरीर द्वारा जलाई जाने वाली कैलोरी।" },
      tdee: { label: "TDEE (kcal/दिन)", help: "आपके वर्तमान गतिविधि स्तर पर कुल दैनिक ऊर्जा व्यय।" },
      proteinTarget: { label: "प्रोटीन लक्ष्य (ग्राम/दिन)", help: "सक्रिय लोगों के लिए 1.6 ग्राम/किग्रा, निष्क्रिय के लिए 0.8 ग्राम/किग्रा।" },
      carbTarget: { label: "कार्बोहाइड्रेट लक्ष्य (ग्राम/दिन)", help: "प्रोटीन और वसा के बाद शेष कैलोरी, 4 kcal/ग्राम से विभाजित।" },
      fatTarget: { label: "वसा लक्ष्य (ग्राम/दिन)", help: "कुल दैनिक कैलोरी का 30%, 9 kcal/ग्राम से विभाजित।" },
    },
    options: {
      gender: { male: "पुरुष", female: "महिला" },
      activityLevel: {
        sedentary: "निष्क्रिय (डेस्क जॉब, कोई व्यायाम नहीं)",
        lightlyActive: "हल्का सक्रिय (सप्ताह में 1–3 दिन व्यायाम)",
        moderatelyActive: "मध्यम सक्रिय (सप्ताह में 3–5 दिन व्यायाम)",
        veryActive: "बहुत सक्रिय (सप्ताह में 6–7 दिन कड़ी कसरत)",
        extraActive: "अत्यधिक सक्रिय (बहुत कड़ी कसरत + शारीरिक श्रम)",
        athlete: "एथलीट (दिन में दो बार प्रशिक्षण)",
      },
    },
    errors: {
      weightOutOfRange: "वजन 20 से 300 किग्रा के बीच होना चाहिए।",
      heightOutOfRange: "ऊंचाई 100 से 250 सेमी के बीच होनी चाहिए।",
      ageOutOfRange: "आयु 15 से 100 वर्ष के बीच होनी चाहिए।",
    },
    faq: [
      { q: "Mifflin-St Jeor सूत्र क्या है?", a: "1990 में विकसित: पुरुष BMR = 10×वजन + 6.25×ऊंचाई − 5×आयु + 5; महिला BMR = 10×वजन + 6.25×ऊंचाई − 5×आयु − 161।" },
    ],
  },
};

export default i18n;
