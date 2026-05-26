import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Lean Body Mass Calculator",
    short: "Calculate your lean body mass using the Boer, James, or Hume formula.",
    description:
      "Free lean body mass calculator. Enter your gender, weight, and height to estimate your LBM, body fat mass, and body fat percentage using validated formulas.",
    keywords: [
      "lean body mass calculator",
      "LBM calculator",
      "body fat percentage",
      "muscle mass",
      "body composition",
      "Boer formula",
      "fat-free mass",
    ],
    inputs: {
      gender: { label: "Biological sex", help: "Sex affects the formula constants for LBM estimation." },
      weight: { label: "Weight (kg)", help: "Your current body weight in kilograms." },
      height: { label: "Height (cm)", help: "Your height in centimetres." },
      formula: { label: "Formula", help: "Boer (1984) is recommended for general use. James and Hume are alternatives." },
    },
    outputs: {
      lbm: { label: "Lean Body Mass", help: "Estimated mass of everything except body fat (muscle, bone, organs, water).", suffix: "kg" },
      bodyFatMass: { label: "Body Fat Mass", help: "Estimated mass of body fat (weight − LBM).", suffix: "kg" },
      bodyFatPct: { label: "Body Fat Percentage", help: "Body fat as a percentage of total body weight." },
      lbmLb: { label: "Lean Body Mass (lb)", help: "LBM converted to pounds.", suffix: "lb" },
    },
    options: {
      gender: { male: "Male", female: "Female" },
      formula: {
        boer: "Boer (1984) — recommended",
        james: "James (1976)",
        hume: "Hume (1966)",
      },
    },
    errors: {
      weightOutOfRange: "Weight must be between 1 and 300 kg.",
      heightOutOfRange: "Height must be between 50 and 250 cm.",
    },
    faq: [
      {
        q: "What is lean body mass?",
        a: "Lean body mass (LBM) is the total weight of your body minus the weight of fat. It includes muscles, bones, organs, blood, and water. LBM is also called fat-free mass (FFM). A higher LBM is generally associated with better metabolic health, strength, and longevity.",
      },
      {
        q: "Which formula is most accurate?",
        a: "The Boer (1984) formula is widely considered the most accurate for most adults and is the default selection. The James formula can produce negative LBM for very obese individuals, which is a known limitation. Hume provides a useful alternative check. For the most accurate body composition measurement, methods like DXA scanning or hydrostatic weighing are far superior to any formula.",
      },
      {
        q: "How does LBM differ from muscle mass?",
        a: "LBM includes muscle mass but also bone, organs, connective tissue, blood, and water. Muscle mass alone is typically estimated to be around 30–55% of body weight in healthy adults, depending on fitness level. LBM is a broader category.",
      },
      {
        q: "What is a healthy body fat percentage?",
        a: "According to the American Council on Exercise (ACE), essential fat is 2–5% for males and 10–13% for females. Athletic ranges are 6–13% (male) and 14–20% (female). Fitness ranges are 14–17% (male) and 21–24% (female). Obese is generally >25% (male) and >32% (female).",
      },
      {
        q: "Can I use LBM to calculate my protein needs?",
        a: "Yes. Many nutritionists recommend setting protein intake based on LBM rather than total body weight. A common recommendation is 1.6–2.2 g of protein per kg of LBM per day for individuals engaged in resistance training.",
      },
    ],
  },

  tr: {
    title: "Yağsız Vücut Kitlesi Hesaplayıcı",
    short: "Boer, James veya Hume formülüyle yağsız vücut kitlesinizi hesaplayın.",
    description:
      "Ücretsiz yağsız vücut kitlesi hesaplayıcı. Cinsiyet, kilo ve boyunuzu girerek doğrulanmış formüllerle YVK, vücut yağ kitlesi ve vücut yağ yüzdenizi tahmin edin.",
    keywords: [
      "yağsız vücut kitlesi hesaplayıcı",
      "YVK hesaplama",
      "vücut yağ yüzdesi",
      "kas kitlesi",
      "vücut kompozisyonu",
      "Boer formülü",
      "yağsız kütle",
    ],
    inputs: {
      gender: { label: "Biyolojik cinsiyet", help: "Cinsiyet, YVK tahminindeki formül sabitlerini etkiler." },
      weight: { label: "Kilo (kg)", help: "Mevcut vücut ağırlığınız (kilogram)." },
      height: { label: "Boy (cm)", help: "Boyunuz (santimetre)." },
      formula: { label: "Formül", help: "Boer (1984) genel kullanım için önerilir. James ve Hume alternatiflerdir." },
    },
    outputs: {
      lbm: { label: "Yağsız Vücut Kitlesi", help: "Vücut yağı dışındaki her şeyin tahmini kitlesi (kas, kemik, organlar, su).", suffix: "kg" },
      bodyFatMass: { label: "Yağ Kitlesi", help: "Tahmini vücut yağı kitlesi (kilo − YVK).", suffix: "kg" },
      bodyFatPct: { label: "Vücut Yağ Yüzdesi", help: "Toplam vücut ağırlığının yüzdesi olarak vücut yağı." },
      lbmLb: { label: "Yağsız Vücut Kitlesi (lb)", help: "YVK pound cinsinden.", suffix: "lb" },
    },
    options: {
      gender: { male: "Erkek", female: "Kadın" },
      formula: {
        boer: "Boer (1984) — önerilen",
        james: "James (1976)",
        hume: "Hume (1966)",
      },
    },
    errors: {
      weightOutOfRange: "Kilo 1 ile 300 kg arasında olmalıdır.",
      heightOutOfRange: "Boy 50 ile 250 cm arasında olmalıdır.",
    },
    faq: [
      {
        q: "Yağsız vücut kitlesi nedir?",
        a: "Yağsız vücut kitlesi (YVK), toplam vücut ağırlığından yağın çıkarılmasıyla elde edilen değerdir. Kasları, kemikleri, organları, kanı ve suyu içerir. Yüksek YVK, genellikle daha iyi metabolik sağlık, güç ve uzun ömürle ilişkilendirilir.",
      },
      {
        q: "Hangi formül en doğrudur?",
        a: "Boer (1984) formülü çoğu yetişkin için en doğru sonucu veren formül olarak kabul edilir ve varsayılan seçimdir. James formülü aşırı obez bireyler için negatif YVK üretebilir; bu bilinen bir sınırlılıktır. En hassas vücut kompozisyonu ölçümü için DXA taraması veya hidrostatic tartı çok daha üstündür.",
      },
      {
        q: "YVK, kas kitlesiyle nasıl farklılaşır?",
        a: "YVK kas kitlesiyle birlikte kemik, organlar, bağ doku, kan ve suyu da kapsar. Kas kitlesi tek başına genellikle vücut ağırlığının %30–55'i arasında tahmin edilir.",
      },
    ],
  },

  de: {
    title: "Magermasse-Rechner",
    short: "Berechnen Sie Ihre Magermasse mit der Formel nach Boer, James oder Hume.",
    description:
      "Kostenloser Magermasse-Rechner. Geben Sie Geschlecht, Gewicht und Größe ein, um Ihre fettfreie Körpermasse, Fettmasse und den Körperfettanteil zu schätzen.",
    keywords: [
      "Magermasse Rechner",
      "fettfreie Masse",
      "Körperfettanteil",
      "Muskelmasse",
      "Körperzusammensetzung",
      "Boer Formel",
      "LBM berechnen",
    ],
    inputs: {
      gender: { label: "Biologisches Geschlecht", help: "Das Geschlecht beeinflusst die Formelkonstanten." },
      weight: { label: "Gewicht (kg)", help: "Ihr aktuelles Körpergewicht in Kilogramm." },
      height: { label: "Größe (cm)", help: "Ihre Körpergröße in Zentimetern." },
      formula: { label: "Formel", help: "Boer (1984) wird für den allgemeinen Gebrauch empfohlen." },
    },
    outputs: {
      lbm: { label: "Magermasse", help: "Geschätzte Masse ohne Körperfett (Muskeln, Knochen, Organe, Wasser).", suffix: "kg" },
      bodyFatMass: { label: "Fettmasse", help: "Geschätzte Körperfettmasse (Gewicht − Magermasse).", suffix: "kg" },
      bodyFatPct: { label: "Körperfettanteil", help: "Körperfett als Prozentsatz des Gesamtkörpergewichts." },
      lbmLb: { label: "Magermasse (lb)", help: "Magermasse in Pfund.", suffix: "lb" },
    },
    options: {
      gender: { male: "Männlich", female: "Weiblich" },
      formula: { boer: "Boer (1984) — empfohlen", james: "James (1976)", hume: "Hume (1966)" },
    },
    errors: {
      weightOutOfRange: "Das Gewicht muss zwischen 1 und 300 kg liegen.",
      heightOutOfRange: "Die Größe muss zwischen 50 und 250 cm liegen.",
    },
    faq: [
      {
        q: "Was ist Magermasse?",
        a: "Die Magermasse (Lean Body Mass, LBM) ist das Gesamtgewicht des Körpers abzüglich des Fettgewebes. Sie umfasst Muskeln, Knochen, Organe, Blut und Wasser. Eine höhere Magermasse ist im Allgemeinen mit besserer metabolischer Gesundheit und Stärke verbunden.",
      },
      {
        q: "Welche Formel ist am genauesten?",
        a: "Die Formel nach Boer (1984) gilt für die meisten Erwachsenen als die genaueste. Die James-Formel kann bei stark adipösen Personen negative Werte liefern. Für präzise Körperzusammensetzungsmessungen sind DXA-Scans oder hydrostatisches Wiegen deutlich überlegen.",
      },
      {
        q: "Was ist ein gesunder Körperfettanteil?",
        a: "Laut American Council on Exercise gelten 6–13 % (Männer) und 14–20 % (Frauen) als athletisch. Der Fitnessbereich liegt bei 14–17 % (Männer) bzw. 21–24 % (Frauen). Werte über 25 % (Männer) bzw. 32 % (Frauen) gelten als adipös.",
      },
    ],
  },

  fr: {
    title: "Calculateur de masse maigre",
    short: "Calculez votre masse maigre avec la formule de Boer, James ou Hume.",
    description:
      "Calculateur de masse maigre gratuit. Renseignez votre sexe, poids et taille pour estimer votre masse maigre, masse grasse et pourcentage de graisse corporelle.",
    keywords: [
      "calculateur masse maigre",
      "masse maigre corporelle",
      "taux de masse grasse",
      "masse musculaire",
      "composition corporelle",
      "formule Boer",
      "masse sans graisse",
    ],
    inputs: {
      gender: { label: "Sexe biologique", help: "Le sexe influence les constantes de la formule." },
      weight: { label: "Poids (kg)", help: "Votre poids corporel actuel en kilogrammes." },
      height: { label: "Taille (cm)", help: "Votre taille en centimètres." },
      formula: { label: "Formule", help: "Boer (1984) est recommandée pour un usage général." },
    },
    outputs: {
      lbm: { label: "Masse maigre", help: "Masse estimée hors graisse (muscles, os, organes, eau).", suffix: "kg" },
      bodyFatMass: { label: "Masse grasse", help: "Masse grasse estimée (poids − masse maigre).", suffix: "kg" },
      bodyFatPct: { label: "Taux de masse grasse", help: "Graisse corporelle en pourcentage du poids total." },
      lbmLb: { label: "Masse maigre (lb)", help: "Masse maigre convertie en livres.", suffix: "lb" },
    },
    options: {
      gender: { male: "Homme", female: "Femme" },
      formula: { boer: "Boer (1984) — recommandée", james: "James (1976)", hume: "Hume (1966)" },
    },
    errors: {
      weightOutOfRange: "Le poids doit être compris entre 1 et 300 kg.",
      heightOutOfRange: "La taille doit être comprise entre 50 et 250 cm.",
    },
    faq: [
      {
        q: "Qu'est-ce que la masse maigre ?",
        a: "La masse maigre (Lean Body Mass, LBM) correspond au poids total du corps moins la masse grasse. Elle comprend les muscles, les os, les organes, le sang et l'eau. Une masse maigre élevée est généralement associée à une meilleure santé métabolique et à une plus grande longévité.",
      },
      {
        q: "Quelle formule est la plus précise ?",
        a: "La formule de Boer (1984) est considérée comme la plus précise pour la plupart des adultes. La formule de James peut donner des valeurs négatives chez les personnes obèses. Pour des mesures précises, les méthodes DXA ou la pesée hydrostatique sont bien supérieures.",
      },
      {
        q: "Quel taux de masse grasse est considéré comme sain ?",
        a: "Selon l'American Council on Exercise, les plages athlétiques sont de 6–13 % (hommes) et 14–20 % (femmes). Les plages fitness sont 14–17 % (hommes) et 21–24 % (femmes). Au-delà de 25 % (hommes) et 32 % (femmes), on parle d'obésité.",
      },
    ],
  },

  es: {
    title: "Calculadora de masa corporal magra",
    short: "Calcula tu masa corporal magra con la fórmula de Boer, James o Hume.",
    description:
      "Calculadora gratuita de masa corporal magra. Introduce tu sexo, peso y talla para estimar tu MCM, masa grasa y porcentaje de grasa corporal mediante fórmulas validadas.",
    keywords: [
      "calculadora masa corporal magra",
      "MCM calculadora",
      "porcentaje de grasa corporal",
      "masa muscular",
      "composición corporal",
      "fórmula Boer",
      "masa libre de grasa",
    ],
    inputs: {
      gender: { label: "Sexo biológico", help: "El sexo influye en las constantes de la fórmula." },
      weight: { label: "Peso (kg)", help: "Tu peso corporal actual en kilogramos." },
      height: { label: "Altura (cm)", help: "Tu altura en centímetros." },
      formula: { label: "Fórmula", help: "Boer (1984) es la recomendada para uso general." },
    },
    outputs: {
      lbm: { label: "Masa corporal magra", help: "Masa estimada sin grasa (músculos, huesos, órganos, agua).", suffix: "kg" },
      bodyFatMass: { label: "Masa grasa", help: "Masa grasa estimada (peso − MCM).", suffix: "kg" },
      bodyFatPct: { label: "Porcentaje de grasa corporal", help: "Grasa corporal como porcentaje del peso total." },
      lbmLb: { label: "Masa corporal magra (lb)", help: "MCM convertida a libras.", suffix: "lb" },
    },
    options: {
      gender: { male: "Hombre", female: "Mujer" },
      formula: { boer: "Boer (1984) — recomendada", james: "James (1976)", hume: "Hume (1966)" },
    },
    errors: {
      weightOutOfRange: "El peso debe estar entre 1 y 300 kg.",
      heightOutOfRange: "La altura debe estar entre 50 y 250 cm.",
    },
    faq: [
      {
        q: "¿Qué es la masa corporal magra?",
        a: "La masa corporal magra (MCM) es el peso total del cuerpo menos la grasa. Incluye músculos, huesos, órganos, sangre y agua. Una MCM más alta se asocia generalmente con mejor salud metabólica y longevidad.",
      },
      {
        q: "¿Qué fórmula es más precisa?",
        a: "La fórmula de Boer (1984) se considera la más precisa para la mayoría de adultos. La fórmula de James puede generar valores negativos en personas muy obesas. Para mediciones precisas, las técnicas DXA o la pesada hidrostática son muy superiores a cualquier fórmula.",
      },
      {
        q: "¿Qué porcentaje de grasa es saludable?",
        a: "Según el American Council on Exercise, los rangos atléticos son 6–13 % (hombres) y 14–20 % (mujeres). Las categorías de fitness son 14–17 % (hombres) y 21–24 % (mujeres). Por encima del 25 % (hombres) y 32 % (mujeres) se considera obesidad.",
      },
    ],
  },

  it: {
    title: "Calcolatore della massa magra",
    short: "Calcola la tua massa magra con la formula di Boer, James o Hume.",
    description:
      "Calcolatore gratuito della massa magra. Inserisci sesso, peso e altezza per stimare la tua massa magra, massa grassa e percentuale di grasso corporeo.",
    keywords: [
      "calcolatore massa magra",
      "massa magra corporea",
      "percentuale di grasso corporeo",
      "massa muscolare",
      "composizione corporea",
      "formula Boer",
      "massa priva di grassi",
    ],
    inputs: {
      gender: { label: "Sesso biologico", help: "Il sesso influisce sulle costanti della formula." },
      weight: { label: "Peso (kg)", help: "Il tuo peso corporeo attuale in chilogrammi." },
      height: { label: "Altezza (cm)", help: "La tua altezza in centimetri." },
      formula: { label: "Formula", help: "Boer (1984) è raccomandata per l'uso generale." },
    },
    outputs: {
      lbm: { label: "Massa magra", help: "Massa stimata escludendo il grasso (muscoli, ossa, organi, acqua).", suffix: "kg" },
      bodyFatMass: { label: "Massa grassa", help: "Massa grassa stimata (peso − massa magra).", suffix: "kg" },
      bodyFatPct: { label: "Percentuale di grasso corporeo", help: "Grasso corporeo come percentuale del peso totale." },
      lbmLb: { label: "Massa magra (lb)", help: "Massa magra convertita in libbre.", suffix: "lb" },
    },
    options: {
      gender: { male: "Maschio", female: "Femmina" },
      formula: { boer: "Boer (1984) — consigliata", james: "James (1976)", hume: "Hume (1966)" },
    },
    errors: {
      weightOutOfRange: "Il peso deve essere compreso tra 1 e 300 kg.",
      heightOutOfRange: "L'altezza deve essere compresa tra 50 e 250 cm.",
    },
    faq: [
      {
        q: "Cos'è la massa magra?",
        a: "La massa magra (LBM) è il peso totale del corpo meno la massa grassa. Include muscoli, ossa, organi, sangue e acqua. Una massa magra più elevata è generalmente associata a migliore salute metabolica e longevità.",
      },
      {
        q: "Quale formula è più accurata?",
        a: "La formula di Boer (1984) è considerata la più accurata per la maggior parte degli adulti. La formula di James può produrre valori negativi nelle persone gravemente obese. Per misurazioni precise, le tecniche DXA o la pesatura idrostatica sono nettamente superiori.",
      },
      {
        q: "Qual è una percentuale di grasso corporeo sana?",
        a: "Secondo l'American Council on Exercise, le fasce atletiche sono 6–13% (uomini) e 14–20% (donne). Le fasce fitness sono 14–17% (uomini) e 21–24% (donne). Sopra il 25% (uomini) e il 32% (donne) si parla di obesità.",
      },
    ],
  },

  ar: {
    title: "حاسبة الكتلة العضلية الخالية من الدهون",
    short: "احسب كتلتك العضلية الخالية من الدهون باستخدام معادلة بور أو جيمس أو هيوم.",
    description:
      "حاسبة مجانية للكتلة العضلية الخالية من الدهون. أدخل جنسك ووزنك وطولك لتقدير كتلتك الخالية من الدهون وكتلة الدهون ونسبة الدهون في جسمك.",
    keywords: [
      "حاسبة الكتلة العضلية",
      "الكتلة الخالية من الدهون",
      "نسبة الدهون في الجسم",
      "الكتلة العضلية",
      "تكوين الجسم",
      "معادلة بور",
      "الكتلة العضلية الصافية",
    ],
    inputs: {
      gender: { label: "الجنس البيولوجي", help: "يؤثر الجنس في ثوابت المعادلة." },
      weight: { label: "الوزن (كجم)", help: "وزنك الحالي بالكيلوجرام." },
      height: { label: "الطول (سم)", help: "طولك بالسنتيمتر." },
      formula: { label: "المعادلة", help: "يُوصى بمعادلة بور (1984) للاستخدام العام." },
    },
    outputs: {
      lbm: { label: "الكتلة الخالية من الدهون", help: "الكتلة المقدَّرة باستثناء الدهون (عضلات، عظام، أعضاء، ماء).", suffix: "كجم" },
      bodyFatMass: { label: "كتلة الدهون", help: "كتلة الدهون المقدَّرة (الوزن − الكتلة العضلية).", suffix: "كجم" },
      bodyFatPct: { label: "نسبة الدهون في الجسم", help: "نسبة الدهون من إجمالي وزن الجسم." },
      lbmLb: { label: "الكتلة الخالية من الدهون (رطل)", help: "الكتلة العضلية محوَّلة إلى أرطال.", suffix: "رطل" },
    },
    options: {
      gender: { male: "ذكر", female: "أنثى" },
      formula: { boer: "بور (1984) — الموصى بها", james: "جيمس (1976)", hume: "هيوم (1966)" },
    },
    errors: {
      weightOutOfRange: "يجب أن يكون الوزن بين 1 و300 كجم.",
      heightOutOfRange: "يجب أن يكون الطول بين 50 و250 سم.",
    },
    faq: [
      {
        q: "ما هي الكتلة الخالية من الدهون؟",
        a: "الكتلة الخالية من الدهون هي إجمالي وزن الجسم مطروحًا منه الدهون. وتشمل العضلات والعظام والأعضاء والدم والماء. ترتبط الكتلة العضلية المرتفعة عمومًا بصحة أيضية أفضل وطول عمر.",
      },
      {
        q: "أيٌّ من المعادلات أدق؟",
        a: "تُعدّ معادلة بور (1984) الأكثر دقة لمعظم البالغين وهي الخيار الافتراضي. قد تُنتج معادلة جيمس قيمًا سلبية للأشخاص الذين يعانون من السمنة الشديدة. للحصول على قياسات دقيقة لتكوين الجسم، تُعدّ فحوصات DXA أو الوزن الهيدروستاتيكي أفضل بكثير.",
      },
      {
        q: "ما نسبة الدهون الصحية في الجسم؟",
        a: "وفقًا لمجلس التمارين الأمريكي، تتراوح نسب الدهون للرياضيين بين 6–13% (ذكور) و14–20% (إناث). وتُعدّ النسب أعلى من 25% (ذكور) و32% (إناث) في نطاق السمنة.",
      },
    ],
  },

  ru: {
    title: "Калькулятор тощей массы тела",
    short: "Рассчитайте тощую массу тела по формуле Боэра, Джеймса или Хьюма.",
    description:
      "Бесплатный калькулятор тощей массы тела. Введите пол, вес и рост для оценки тощей массы, массы жировой ткани и процента жира в организме.",
    keywords: [
      "калькулятор тощей массы тела",
      "тощая масса тела",
      "процент жира в организме",
      "мышечная масса",
      "состав тела",
      "формула Боэра",
      "безжировая масса",
    ],
    inputs: {
      gender: { label: "Биологический пол", help: "Пол влияет на константы формулы." },
      weight: { label: "Масса тела (кг)", help: "Ваш текущий вес в килограммах." },
      height: { label: "Рост (см)", help: "Ваш рост в сантиметрах." },
      formula: { label: "Формула", help: "Формула Боэра (1984) рекомендована для общего применения." },
    },
    outputs: {
      lbm: { label: "Тощая масса тела", help: "Оценочная масса без жировой ткани (мышцы, кости, органы, вода).", suffix: "кг" },
      bodyFatMass: { label: "Масса жировой ткани", help: "Оценочная масса жира (вес − тощая масса).", suffix: "кг" },
      bodyFatPct: { label: "Процент жира в теле", help: "Жировая ткань в процентах от общей массы тела." },
      lbmLb: { label: "Тощая масса тела (фунты)", help: "Тощая масса, переведённая в фунты.", suffix: "фунт" },
    },
    options: {
      gender: { male: "Мужской", female: "Женский" },
      formula: { boer: "Боэр (1984) — рекомендовано", james: "Джеймс (1976)", hume: "Хьюм (1966)" },
    },
    errors: {
      weightOutOfRange: "Вес должен быть от 1 до 300 кг.",
      heightOutOfRange: "Рост должен быть от 50 до 250 см.",
    },
    faq: [
      {
        q: "Что такое тощая масса тела?",
        a: "Тощая масса тела — это общая масса тела за вычетом жировой ткани. Она включает мышцы, кости, органы, кровь и воду. Более высокая тощая масса, как правило, связана с лучшим метаболическим здоровьем и долголетием.",
      },
      {
        q: "Какая формула наиболее точна?",
        a: "Формула Боэра (1984) считается наиболее точной для большинства взрослых. Формула Джеймса может давать отрицательные значения при ожирении. Для точного измерения состава тела DXA-денситометрия или гидростатическое взвешивание значительно превосходят любую формулу.",
      },
      {
        q: "Каков здоровый процент жира?",
        a: "По данным Американского совета по физическим упражнениям, атлетические диапазоны составляют 6–13% (мужчины) и 14–20% (женщины). Более 25% (мужчины) и 32% (женщины) считаются ожирением.",
      },
    ],
  },

  zh: {
    title: "去脂体重计算器",
    short: "使用Boer、James或Hume公式计算您的去脂体重。",
    description:
      "免费去脂体重计算器。输入性别、体重和身高，通过经验证的公式估算去脂体重、脂肪质量和体脂率。",
    keywords: [
      "去脂体重计算器",
      "LBM计算器",
      "体脂率",
      "肌肉量",
      "身体成分",
      "Boer公式",
      "无脂肪体重",
    ],
    inputs: {
      gender: { label: "生理性别", help: "性别影响公式中的系数。" },
      weight: { label: "体重（kg）", help: "您当前的体重（千克）。" },
      height: { label: "身高（cm）", help: "您的身高（厘米）。" },
      formula: { label: "计算公式", help: "推荐使用Boer（1984）公式。James和Hume为备选公式。" },
    },
    outputs: {
      lbm: { label: "去脂体重", help: "不含体脂的估算体重（肌肉、骨骼、器官、水分）。", suffix: "kg" },
      bodyFatMass: { label: "脂肪质量", help: "估算的脂肪质量（体重 − 去脂体重）。", suffix: "kg" },
      bodyFatPct: { label: "体脂率", help: "体脂占总体重的百分比。" },
      lbmLb: { label: "去脂体重（磅）", help: "去脂体重换算为磅。", suffix: "lb" },
    },
    options: {
      gender: { male: "男", female: "女" },
      formula: { boer: "Boer（1984）— 推荐", james: "James（1976）", hume: "Hume（1966）" },
    },
    errors: {
      weightOutOfRange: "体重须在1至300千克之间。",
      heightOutOfRange: "身高须在50至250厘米之间。",
    },
    faq: [
      {
        q: "什么是去脂体重？",
        a: "去脂体重（LBM）是总体重减去脂肪质量后的值，包括肌肉、骨骼、器官、血液和水分。去脂体重越高，通常与更好的代谢健康和更长寿命相关。",
      },
      {
        q: "哪个公式最准确？",
        a: "Boer（1984）公式被认为对大多数成人最为准确，为默认选项。James公式对极度肥胖者可能产生负值。要获得精确的身体成分测量，DXA扫描或水下称重远比任何公式更准确。",
      },
      {
        q: "健康的体脂率是多少？",
        a: "根据美国运动委员会（ACE），运动员体脂范围为6–13%（男）和14–20%（女）。超过25%（男）或32%（女）通常被视为肥胖。",
      },
    ],
  },

  ja: {
    title: "除脂肪体重計算機",
    short: "Boer・James・Hume式を使って除脂肪体重を計算します。",
    description:
      "無料の除脂肪体重（LBM）計算機。性別・体重・身長を入力して、検証済みの計算式でLBM・体脂肪量・体脂肪率を推定します。",
    keywords: [
      "除脂肪体重計算機",
      "LBM計算機",
      "体脂肪率",
      "筋肉量",
      "体組成",
      "Boer式",
      "脂肪フリー体重",
    ],
    inputs: {
      gender: { label: "生物学的性別", help: "性別は計算式の定数に影響します。" },
      weight: { label: "体重（kg）", help: "現在の体重（キログラム）を入力してください。" },
      height: { label: "身長（cm）", help: "身長（センチメートル）を入力してください。" },
      formula: { label: "計算式", help: "Boer（1984）式が一般用途に推奨されます。" },
    },
    outputs: {
      lbm: { label: "除脂肪体重", help: "体脂肪を除いた推定体重（筋肉、骨、臓器、水分）。", suffix: "kg" },
      bodyFatMass: { label: "体脂肪量", help: "推定体脂肪量（体重 − LBM）。", suffix: "kg" },
      bodyFatPct: { label: "体脂肪率", help: "総体重に対する体脂肪の割合。" },
      lbmLb: { label: "除脂肪体重（ポンド）", help: "LBMをポンドに換算した値。", suffix: "lb" },
    },
    options: {
      gender: { male: "男性", female: "女性" },
      formula: { boer: "Boer（1984）— 推奨", james: "James（1976）", hume: "Hume（1966）" },
    },
    errors: {
      weightOutOfRange: "体重は1〜300 kgの範囲で入力してください。",
      heightOutOfRange: "身長は50〜250 cmの範囲で入力してください。",
    },
    faq: [
      {
        q: "除脂肪体重とは何ですか？",
        a: "除脂肪体重（LBM）は総体重から体脂肪を引いた値で、筋肉・骨・臓器・血液・水分を含みます。LBMが高いほど、一般的に代謝健康や長寿と良い相関があります。",
      },
      {
        q: "どの計算式が最も正確ですか？",
        a: "Boer（1984）式はほとんどの成人で最も正確とされ、デフォルト設定です。James式は重度肥満者で負の値が出ることがあります。精密な体組成測定にはDXAスキャンや水中体重測定が大幅に優れています。",
      },
      {
        q: "健康な体脂肪率はどのくらいですか？",
        a: "米国運動協議会（ACE）によると、アスリートの体脂肪率は6–13%（男性）・14–20%（女性）です。25%超（男性）・32%超（女性）は肥満とされます。",
      },
    ],
  },

  ko: {
    title: "제지방량 계산기",
    short: "Boer, James 또는 Hume 공식으로 제지방량을 계산하세요.",
    description:
      "무료 제지방량(LBM) 계산기. 성별, 체중, 신장을 입력하면 검증된 공식으로 LBM, 체지방량, 체지방률을 추정합니다.",
    keywords: [
      "제지방량 계산기",
      "LBM 계산기",
      "체지방률",
      "근육량",
      "신체 조성",
      "Boer 공식",
      "지방제외 체중",
    ],
    inputs: {
      gender: { label: "생물학적 성별", help: "성별은 공식의 상수에 영향을 미칩니다." },
      weight: { label: "체중(kg)", help: "현재 체중(킬로그램)을 입력하세요." },
      height: { label: "키(cm)", help: "키(센티미터)를 입력하세요." },
      formula: { label: "공식", help: "Boer(1984) 공식이 일반 사용에 권장됩니다." },
    },
    outputs: {
      lbm: { label: "제지방량", help: "체지방을 제외한 추정 체중(근육, 뼈, 장기, 수분).", suffix: "kg" },
      bodyFatMass: { label: "체지방량", help: "추정 체지방량(체중 − LBM).", suffix: "kg" },
      bodyFatPct: { label: "체지방률", help: "총 체중 대비 체지방 비율." },
      lbmLb: { label: "제지방량(lb)", help: "LBM을 파운드로 환산한 값.", suffix: "lb" },
    },
    options: {
      gender: { male: "남성", female: "여성" },
      formula: { boer: "Boer(1984) — 권장", james: "James(1976)", hume: "Hume(1966)" },
    },
    errors: {
      weightOutOfRange: "체중은 1~300 kg 범위 내여야 합니다.",
      heightOutOfRange: "키는 50~250 cm 범위 내여야 합니다.",
    },
    faq: [
      {
        q: "제지방량이란 무엇인가요?",
        a: "제지방량(LBM)은 총 체중에서 체지방을 뺀 값으로, 근육, 뼈, 장기, 혈액, 수분을 포함합니다. 높은 LBM은 일반적으로 더 나은 대사 건강 및 장수와 관련됩니다.",
      },
      {
        q: "어떤 공식이 가장 정확한가요?",
        a: "Boer(1984) 공식이 대부분의 성인에게 가장 정확하다고 알려져 있으며 기본값으로 설정됩니다. James 공식은 고도 비만인에게 음수 값을 생성할 수 있습니다. 정확한 신체 조성 측정을 위해서는 DXA 스캔이나 수중 체중 측정이 훨씬 우수합니다.",
      },
      {
        q: "건강한 체지방률은 얼마인가요?",
        a: "미국 운동 위원회(ACE)에 따르면 운동선수 체지방 범위는 6–13%(남성), 14–20%(여성)입니다. 25% 초과(남성), 32% 초과(여성)는 비만으로 간주됩니다.",
      },
    ],
  },

  hi: {
    title: "लीन बॉडी मास कैलकुलेटर",
    short: "बोर, जेम्स या ह्यूम फॉर्मूले से अपना लीन बॉडी मास जानें।",
    description:
      "निःशुल्क लीन बॉडी मास कैलकुलेटर। लिंग, वज़न और ऊंचाई दर्ज करें और मान्य फॉर्मूलों से अपना LBM, वसा द्रव्यमान और शरीर में वसा प्रतिशत जानें।",
    keywords: [
      "लीन बॉडी मास कैलकुलेटर",
      "LBM कैलकुलेटर",
      "शरीर में वसा प्रतिशत",
      "मांसपेशी द्रव्यमान",
      "शरीर संरचना",
      "बोर फॉर्मूला",
      "वसा-रहित द्रव्यमान",
    ],
    inputs: {
      gender: { label: "जैविक लिंग", help: "लिंग फॉर्मूले के स्थिरांकों को प्रभावित करता है।" },
      weight: { label: "वज़न (kg)", help: "आपका वर्तमान शारीरिक वज़न किलोग्राम में।" },
      height: { label: "ऊंचाई (cm)", help: "आपकी ऊंचाई सेंटीमीटर में।" },
      formula: { label: "फॉर्मूला", help: "सामान्य उपयोग के लिए बोर (1984) की अनुशंसा की जाती है।" },
    },
    outputs: {
      lbm: { label: "लीन बॉडी मास", help: "वसा को छोड़कर अनुमानित द्रव्यमान (मांसपेशी, हड्डी, अंग, पानी)।", suffix: "kg" },
      bodyFatMass: { label: "वसा द्रव्यमान", help: "अनुमानित वसा द्रव्यमान (वज़न − LBM)।", suffix: "kg" },
      bodyFatPct: { label: "शरीर में वसा प्रतिशत", help: "कुल शरीर के वज़न का प्रतिशत के रूप में वसा।" },
      lbmLb: { label: "लीन बॉडी मास (lb)", help: "LBM को पाउंड में परिवर्तित किया गया।", suffix: "lb" },
    },
    options: {
      gender: { male: "पुरुष", female: "महिला" },
      formula: { boer: "बोर (1984) — अनुशंसित", james: "जेम्स (1976)", hume: "ह्यूम (1966)" },
    },
    errors: {
      weightOutOfRange: "वज़न 1 से 300 kg के बीच होना चाहिए।",
      heightOutOfRange: "ऊंचाई 50 से 250 cm के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "लीन बॉडी मास क्या है?",
        a: "लीन बॉडी मास (LBM) कुल शरीर के वज़न में से वसा घटाकर बचा द्रव्यमान है। इसमें मांसपेशियां, हड्डियां, अंग, रक्त और पानी शामिल हैं। उच्च LBM बेहतर चयापचय स्वास्थ्य और दीर्घायु से जुड़ा होता है।",
      },
      {
        q: "कौन सा फॉर्मूला सबसे सटीक है?",
        a: "बोर (1984) फॉर्मूला अधिकांश वयस्कों के लिए सबसे सटीक माना जाता है और यह डिफ़ॉल्ट विकल्प है। जेम्स फॉर्मूला अत्यधिक मोटे व्यक्तियों के लिए नकारात्मक मान दे सकता है। सटीक शरीर संरचना मापन के लिए DXA स्कैन या हाइड्रोस्टेटिक वज़न कहीं बेहतर हैं।",
      },
      {
        q: "स्वस्थ शरीर में वसा प्रतिशत क्या है?",
        a: "अमेरिकन काउंसिल ऑन एक्सरसाइज (ACE) के अनुसार, एथलेटिक वसा सीमाएं 6–13% (पुरुष) और 14–20% (महिला) हैं। 25% से अधिक (पुरुष) और 32% से अधिक (महिला) मोटापा माना जाता है।",
      },
    ],
  },
};

export default i18n;
