import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Body Fat Calculator",
    short: "Estimate your body fat percentage using the US Navy circumference method.",
    description:
      "Free body fat percentage calculator using the US Navy tape measure method (Hodgdon & Beckett, 1984). Enter neck, waist, and hip circumferences for an accurate estimate without equipment.",
    keywords: [
      "body fat calculator",
      "body fat percentage",
      "US Navy method",
      "circumference method",
      "lean mass calculator",
      "fat mass",
      "ACE body fat",
    ],
    inputs: {
      gender: { label: "Biological sex", help: "Female formula includes hip circumference." },
      height: { label: "Height", help: "Your height in centimetres." },
      weight: { label: "Weight", help: "Your body weight in kilograms, used to calculate fat and lean mass." },
      waist: { label: "Waist circumference", help: "Measure at the navel level for males, or at the narrowest point for females. Keep tape horizontal." },
      neck: { label: "Neck circumference", help: "Measure just below the larynx (Adam's apple), sloping slightly downward." },
      hip: { label: "Hip circumference (females)", help: "Measure at the widest point of the hips and buttocks. Required for females only." },
    },
    outputs: {
      bodyFatPct: { label: "Body fat percentage", help: "Estimated percentage of total body weight that is fat." },
      fatMass: { label: "Fat mass", help: "Estimated weight of body fat in kilograms.", suffix: "kg" },
      leanMass: { label: "Lean mass", help: "Body weight minus fat mass — includes muscle, bone, water, and organs.", suffix: "kg" },
      category: { label: "Category", help: "ACE (American Council on Exercise) body fat classification." },
    },
    options: {
      gender: { male: "Male", female: "Female" },
    },
    errors: {
      hipRequired: "Hip measurement is required for females.",
      waistMustExceedNeck: "Waist circumference must be greater than neck circumference.",
      heightOutOfRange: "Height must be between 50 and 250 cm.",
      weightOutOfRange: "Weight must be between 1 and 300 kg.",
    },
    faq: [
      {
        q: "How accurate is the US Navy method?",
        a: "The US Navy circumference method typically has an accuracy of ±3–4 percentage points compared to DEXA (dual-energy X-ray absorptiometry). It is more accurate than BMI for estimating body composition but less precise than hydrostatic weighing or DEXA.",
      },
      {
        q: "What is a healthy body fat percentage?",
        a: "The American Council on Exercise (ACE) defines healthy ranges as 18–24% for men and 25–31% for women. Athletes typically have lower percentages (6–13% for men, 14–20% for women). Essential fat (minimum needed for life) is about 2–5% for men and 10–13% for women.",
      },
      {
        q: "Where should I measure my waist?",
        a: "For males, measure at the navel. For females, measure at the narrowest point of the torso. Keep the tape horizontal and measure at the end of a normal exhalation without sucking in your stomach.",
      },
      {
        q: "Can I use this calculator to track progress?",
        a: "Yes, but ensure you measure consistently: same time of day, same measuring tape, same body position, and the same person taking measurements. Circumference methods are excellent for tracking trends over time.",
      },
    ],
  },

  tr: {
    title: "Vücut Yağ Oranı Hesaplayıcı",
    short: "ABD Donanması çevre ölçümü yöntemiyle vücut yağ yüzdenizi tahmin edin.",
    description:
      "ABD Donanması bant ölçümü yöntemini kullanan ücretsiz vücut yağ yüzdesi hesaplayıcı. Boyun, bel ve kalça çevrelerinizi girerek cihaz gerektirmeden doğru bir tahmin elde edin.",
    keywords: [
      "vücut yağ oranı hesaplayıcı",
      "vücut yağ yüzdesi",
      "ABD Donanması yöntemi",
      "çevre ölçümü yöntemi",
      "yağsız kütle",
      "yağ kütlesi",
      "fitness vücut yağı",
    ],
    inputs: {
      gender: { label: "Biyolojik cinsiyet", help: "Kadın formülü kalça çevresini içerir." },
      height: { label: "Boy", help: "Boyunuz santimetre cinsinden." },
      weight: { label: "Kilo", help: "Yağ ve kas kütlesini hesaplamak için kullanılan vücut ağırlığınız." },
      waist: { label: "Bel çevresi", help: "Erkekler için göbek hizasında, kadınlar için belin en ince noktasında ölçün." },
      neck: { label: "Boyun çevresi", help: "Larinksin (Adem elması) hemen altından, hafifçe aşağıya doğru eğimli ölçün." },
      hip: { label: "Kalça çevresi (kadınlar)", help: "Kalça ve popo bölgesinin en geniş noktasında ölçün. Yalnızca kadınlar için gereklidir." },
    },
    outputs: {
      bodyFatPct: { label: "Vücut yağ yüzdesi", help: "Toplam vücut ağırlığının yağ olan tahmini yüzdesi." },
      fatMass: { label: "Yağ kütlesi", help: "Tahmini vücut yağı ağırlığı (kg).", suffix: "kg" },
      leanMass: { label: "Yağsız kütle", help: "Vücut ağırlığı eksi yağ kütlesi — kas, kemik, su ve organları içerir.", suffix: "kg" },
      category: { label: "Kategori", help: "ACE (Amerikan Egzersiz Konseyi) vücut yağ sınıflandırması." },
    },
    options: {
      gender: { male: "Erkek", female: "Kadın" },
    },
    errors: {
      hipRequired: "Kadınlar için kalça ölçümü gereklidir.",
      waistMustExceedNeck: "Bel çevresi boyun çevresinden büyük olmalıdır.",
      heightOutOfRange: "Boy 50 ile 250 cm arasında olmalıdır.",
      weightOutOfRange: "Kilo 1 ile 300 kg arasında olmalıdır.",
    },
    faq: [
      {
        q: "ABD Donanması yöntemi ne kadar doğrudur?",
        a: "ABD Donanması çevre ölçümü yöntemi, DEXA ile karşılaştırıldığında genellikle ±3–4 yüzde puan doğruluk sağlar. Vücut kompozisyonunu tahmin etmede BMI'dan daha doğru, ancak sualtı tartımı veya DEXA kadar hassas değildir.",
      },
    ],
  },

  de: {
    title: "Körperfett-Rechner",
    short: "Schätzen Sie Ihren Körperfettanteil mit der US-Navy-Umfangsmethode.",
    description:
      "Kostenloser Körperfettrechner mit der US-Navy-Methode (Hodgdon & Beckett, 1984). Messen Sie Hals-, Taillen- und Hüftumfang für eine gerätefreie, genaue Schätzung.",
    keywords: [
      "Körperfett Rechner",
      "Körperfettanteil",
      "US-Navy-Methode",
      "Umfangsmethode",
      "Magermasse",
      "Fettmasse",
      "Fitness Körperfett",
    ],
    inputs: {
      gender: { label: "Biologisches Geschlecht", help: "Die Formel für Frauen enthält den Hüftumfang." },
      height: { label: "Körpergröße", help: "Ihre Körpergröße in Zentimetern." },
      weight: { label: "Gewicht", help: "Ihr Körpergewicht in Kilogramm, zur Berechnung von Fett- und Magermasse." },
      waist: { label: "Taillenumfang", help: "Bei Männern auf Nabelhöhe, bei Frauen an der schmalsten Stelle messen." },
      neck: { label: "Halsumfang", help: "Direkt unterhalb des Kehlkopfes leicht nach unten geneigt messen." },
      hip: { label: "Hüftumfang (Frauen)", help: "An der breitesten Stelle von Hüfte und Gesäß messen. Nur für Frauen erforderlich." },
    },
    outputs: {
      bodyFatPct: { label: "Körperfettanteil", help: "Geschätzter prozentualer Fettanteil am Gesamtkörpergewicht." },
      fatMass: { label: "Fettmasse", help: "Geschätztes Gewicht des Körperfetts in Kilogramm.", suffix: "kg" },
      leanMass: { label: "Magermasse", help: "Körpergewicht minus Fettmasse — enthält Muskeln, Knochen, Wasser und Organe.", suffix: "kg" },
      category: { label: "Kategorie", help: "ACE-Körperfettklassifikation (American Council on Exercise)." },
    },
    options: {
      gender: { male: "Männlich", female: "Weiblich" },
    },
    errors: {
      hipRequired: "Für Frauen ist der Hüftumfang erforderlich.",
      waistMustExceedNeck: "Der Taillenumfang muss größer als der Halsumfang sein.",
      heightOutOfRange: "Die Körpergröße muss zwischen 50 und 250 cm liegen.",
      weightOutOfRange: "Das Gewicht muss zwischen 1 und 300 kg liegen.",
    },
    faq: [
      {
        q: "Wie genau ist die US-Navy-Methode?",
        a: "Die US-Navy-Umfangsmethode hat im Vergleich zu DEXA typischerweise eine Genauigkeit von ±3–4 Prozentpunkten. Sie ist genauer als der BMI, aber weniger präzise als Unterwasserwägen oder DEXA.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Graisse Corporelle",
    short: "Estimez votre taux de graisse corporelle avec la méthode des circonférences de la Marine américaine.",
    description:
      "Calculateur de taux de graisse corporelle gratuit utilisant la méthode de la Marine américaine (Hodgdon & Beckett, 1984). Mesurez cou, taille et hanches pour une estimation précise sans équipement.",
    keywords: [
      "calculateur graisse corporelle",
      "taux de graisse",
      "méthode Marine américaine",
      "méthode des circonférences",
      "masse maigre",
      "masse grasse",
      "composition corporelle",
    ],
    inputs: {
      gender: { label: "Sexe biologique", help: "La formule féminine inclut la circonférence des hanches." },
      height: { label: "Taille", help: "Votre taille en centimètres." },
      weight: { label: "Poids", help: "Votre poids corporel en kilogrammes, utilisé pour calculer masse grasse et masse maigre." },
      waist: { label: "Tour de taille", help: "Mesurez au niveau du nombril (hommes) ou au point le plus étroit (femmes)." },
      neck: { label: "Tour de cou", help: "Mesurez juste sous le larynx, en légère pente vers le bas." },
      hip: { label: "Tour de hanches (femmes)", help: "Mesurez au point le plus large des hanches et fesses. Requis pour les femmes uniquement." },
    },
    outputs: {
      bodyFatPct: { label: "Taux de graisse corporelle", help: "Pourcentage estimé de graisse dans le poids corporel total." },
      fatMass: { label: "Masse grasse", help: "Poids estimé de la graisse corporelle en kilogrammes.", suffix: "kg" },
      leanMass: { label: "Masse maigre", help: "Poids corporel moins la masse grasse — muscles, os, eau et organes.", suffix: "kg" },
      category: { label: "Catégorie", help: "Classification ACE (American Council on Exercise) du taux de graisse." },
    },
    options: {
      gender: { male: "Homme", female: "Femme" },
    },
    errors: {
      hipRequired: "La mesure des hanches est requise pour les femmes.",
      waistMustExceedNeck: "Le tour de taille doit être supérieur au tour de cou.",
      heightOutOfRange: "La taille doit être comprise entre 50 et 250 cm.",
      weightOutOfRange: "Le poids doit être compris entre 1 et 300 kg.",
    },
    faq: [
      {
        q: "Quelle est la précision de la méthode US Navy ?",
        a: "La méthode des circonférences de la Marine américaine offre généralement une précision de ±3–4 points de pourcentage par rapport au DEXA. Elle est plus précise que l'IMC mais moins que la pesée hydrostatique ou le DEXA.",
      },
    ],
  },

  es: {
    title: "Calculadora de Grasa Corporal",
    short: "Estima tu porcentaje de grasa corporal con el método de circunferencias de la Marina de EE. UU.",
    description:
      "Calculadora de grasa corporal gratuita con el método de la Marina de EE. UU. (Hodgdon & Beckett, 1984). Mide cuello, cintura y caderas para una estimación precisa sin equipos.",
    keywords: [
      "calculadora grasa corporal",
      "porcentaje de grasa",
      "método Marina EE. UU.",
      "método circunferencias",
      "masa magra",
      "masa grasa",
      "composición corporal",
    ],
    inputs: {
      gender: { label: "Sexo biológico", help: "La fórmula femenina incluye la circunferencia de la cadera." },
      height: { label: "Altura", help: "Tu altura en centímetros." },
      weight: { label: "Peso", help: "Tu peso corporal en kilogramos, usado para calcular masa grasa y magra." },
      waist: { label: "Circunferencia de cintura", help: "Mide a nivel del ombligo (hombres) o en el punto más estrecho (mujeres)." },
      neck: { label: "Circunferencia de cuello", help: "Mide justo debajo de la laringe, ligeramente inclinado hacia abajo." },
      hip: { label: "Circunferencia de cadera (mujeres)", help: "Mide en el punto más ancho de caderas y glúteos. Solo para mujeres." },
    },
    outputs: {
      bodyFatPct: { label: "Porcentaje de grasa corporal", help: "Porcentaje estimado de grasa en el peso corporal total." },
      fatMass: { label: "Masa grasa", help: "Peso estimado de la grasa corporal en kilogramos.", suffix: "kg" },
      leanMass: { label: "Masa magra", help: "Peso corporal menos masa grasa — incluye músculo, hueso, agua y órganos.", suffix: "kg" },
      category: { label: "Categoría", help: "Clasificación de grasa corporal según el ACE." },
    },
    options: {
      gender: { male: "Hombre", female: "Mujer" },
    },
    errors: {
      hipRequired: "La medida de la cadera es necesaria para mujeres.",
      waistMustExceedNeck: "La circunferencia de la cintura debe ser mayor que la del cuello.",
      heightOutOfRange: "La altura debe estar entre 50 y 250 cm.",
      weightOutOfRange: "El peso debe estar entre 1 y 300 kg.",
    },
    faq: [
      {
        q: "¿Qué tan preciso es el método US Navy?",
        a: "El método de circunferencias de la Marina de EE. UU. tiene una precisión de ±3–4 puntos porcentuales en comparación con el DEXA. Es más preciso que el IMC pero menos que la pesada hidrostática o el DEXA.",
      },
    ],
  },

  it: {
    title: "Calcolatore della Percentuale di Grasso Corporeo",
    short: "Stima la tua percentuale di grasso corporeo con il metodo delle circonferenze della Marina americana.",
    description:
      "Calcolatore gratuito della percentuale di grasso corporeo con il metodo della Marina americana (Hodgdon & Beckett, 1984). Misura collo, vita e fianchi per una stima accurata senza attrezzatura.",
    keywords: [
      "calcolatore grasso corporeo",
      "percentuale grasso",
      "metodo Marina USA",
      "metodo circonferenze",
      "massa magra",
      "massa grassa",
      "composizione corporea",
    ],
    inputs: {
      gender: { label: "Sesso biologico", help: "La formula femminile include la circonferenza dei fianchi." },
      height: { label: "Altezza", help: "La tua altezza in centimetri." },
      weight: { label: "Peso", help: "Il tuo peso corporeo in chilogrammi, usato per calcolare massa grassa e magra." },
      waist: { label: "Circonferenza vita", help: "Misura a livello dell'ombelico (uomini) o nel punto più stretto (donne)." },
      neck: { label: "Circonferenza collo", help: "Misura appena sotto la laringe, leggermente inclinato verso il basso." },
      hip: { label: "Circonferenza fianchi (donne)", help: "Misura nel punto più largo di fianchi e glutei. Solo per donne." },
    },
    outputs: {
      bodyFatPct: { label: "Percentuale di grasso corporeo", help: "Percentuale stimata di grasso nel peso corporeo totale." },
      fatMass: { label: "Massa grassa", help: "Peso stimato del grasso corporeo in chilogrammi.", suffix: "kg" },
      leanMass: { label: "Massa magra", help: "Peso corporeo meno la massa grassa — include muscoli, ossa, acqua e organi.", suffix: "kg" },
      category: { label: "Categoria", help: "Classificazione ACE del grasso corporeo." },
    },
    options: {
      gender: { male: "Maschio", female: "Femmina" },
    },
    errors: {
      hipRequired: "La misurazione dei fianchi è richiesta per le donne.",
      waistMustExceedNeck: "La circonferenza vita deve essere maggiore di quella del collo.",
      heightOutOfRange: "L'altezza deve essere compresa tra 50 e 250 cm.",
      weightOutOfRange: "Il peso deve essere compreso tra 1 e 300 kg.",
    },
    faq: [
      {
        q: "Quanto è accurato il metodo US Navy?",
        a: "Il metodo delle circonferenze della Marina americana ha tipicamente un'accuratezza di ±3–4 punti percentuali rispetto al DEXA. È più preciso dell'IMC ma meno della pesata idrostatica o del DEXA.",
      },
    ],
  },

  ar: {
    title: "حاسبة نسبة الدهون في الجسم",
    short: "قدّر نسبة دهون جسمك باستخدام طريقة قياس المحيط الخاصة بالبحرية الأمريكية.",
    description:
      "حاسبة مجانية لنسبة دهون الجسم بطريقة البحرية الأمريكية (هودجدون وبيكيت، 1984). قِس محيطَي الرقبة والخصر والوركين للحصول على تقدير دقيق دون أجهزة.",
    keywords: [
      "حاسبة الدهون",
      "نسبة دهون الجسم",
      "طريقة البحرية الأمريكية",
      "طريقة القياس بالمحيط",
      "الكتلة العضلية",
      "كتلة الدهون",
      "تركيب الجسم",
    ],
    inputs: {
      gender: { label: "الجنس البيولوجي", help: "تتضمن معادلة الأنثى قياس محيط الوركين." },
      height: { label: "الطول", help: "طولك بالسنتيمتر." },
      weight: { label: "الوزن", help: "وزنك بالكيلوغرام، يُستخدم لحساب الكتلة الدهنية والعضلية." },
      waist: { label: "محيط الخصر", help: "قِس على مستوى السرة للذكور، أو عند أضيق نقطة في الخصر للإناث." },
      neck: { label: "محيط الرقبة", help: "قِس مباشرةً أسفل الحنجرة مع ميل طفيف للأسفل." },
      hip: { label: "محيط الوركين (الإناث)", help: "قِس عند أعرض نقطة في الوركين والأرداف. مطلوب للإناث فقط." },
    },
    outputs: {
      bodyFatPct: { label: "نسبة الدهون في الجسم", help: "النسبة التقديرية للدهون من إجمالي وزن الجسم." },
      fatMass: { label: "كتلة الدهون", help: "الوزن التقديري للدهون بالكيلوغرام.", suffix: "كجم" },
      leanMass: { label: "الكتلة العضلية الخالية من الدهون", help: "وزن الجسم ناقص كتلة الدهون — يشمل العضلات والعظام والماء والأعضاء.", suffix: "كجم" },
      category: { label: "التصنيف", help: "تصنيف دهون الجسم وفق معهد ACE الأمريكي." },
    },
    options: {
      gender: { male: "ذكر", female: "أنثى" },
    },
    errors: {
      hipRequired: "قياس الوركين مطلوب للإناث.",
      waistMustExceedNeck: "يجب أن يكون محيط الخصر أكبر من محيط الرقبة.",
      heightOutOfRange: "يجب أن يكون الطول بين 50 و250 سم.",
      weightOutOfRange: "يجب أن يكون الوزن بين 1 و300 كجم.",
    },
    faq: [
      {
        q: "ما مدى دقة طريقة البحرية الأمريكية؟",
        a: "تتمتع طريقة قياس المحيط بدقة تبلغ عادةً ±3-4 نقاط مئوية مقارنةً بتقنية DEXA. وهي أدق من مؤشر كتلة الجسم لكنها أقل دقةً من الوزن الهيدروستاتيكي أو DEXA.",
      },
    ],
  },

  ru: {
    title: "Калькулятор процента жира в теле",
    short: "Оцените процент жира в теле с помощью метода обхватов ВМС США.",
    description:
      "Бесплатный калькулятор жира в теле по методу ВМС США (Ходждон и Беккет, 1984). Введите обхваты шеи, талии и бёдер для точной оценки без специального оборудования.",
    keywords: [
      "калькулятор жира",
      "процент жира в теле",
      "метод ВМС США",
      "метод обхватов",
      "мышечная масса",
      "жировая масса",
      "состав тела",
    ],
    inputs: {
      gender: { label: "Биологический пол", help: "Женская формула учитывает обхват бёдер." },
      height: { label: "Рост", help: "Ваш рост в сантиметрах." },
      weight: { label: "Масса тела", help: "Ваш вес в килограммах, используется для расчёта жировой и мышечной массы." },
      waist: { label: "Обхват талии", help: "Измеряется на уровне пупка (мужчины) или в самой узкой части (женщины)." },
      neck: { label: "Обхват шеи", help: "Измеряется чуть ниже гортани, с небольшим наклоном вниз." },
      hip: { label: "Обхват бёдер (женщины)", help: "Измеряется в самом широком месте бёдер и ягодиц. Требуется только для женщин." },
    },
    outputs: {
      bodyFatPct: { label: "Процент жира в теле", help: "Расчётная доля жира от общего веса тела." },
      fatMass: { label: "Жировая масса", help: "Расчётный вес жировой ткани в килограммах.", suffix: "кг" },
      leanMass: { label: "Тощая масса тела", help: "Масса тела минус жировая масса — мышцы, кости, вода и органы.", suffix: "кг" },
      category: { label: "Категория", help: "Классификация жировой массы по ACE (Американский совет по физическим упражнениям)." },
    },
    options: {
      gender: { male: "Мужской", female: "Женский" },
    },
    errors: {
      hipRequired: "Для женщин требуется измерение обхвата бёдер.",
      waistMustExceedNeck: "Обхват талии должен быть больше обхвата шеи.",
      heightOutOfRange: "Рост должен быть от 50 до 250 см.",
      weightOutOfRange: "Вес должен быть от 1 до 300 кг.",
    },
    faq: [
      {
        q: "Насколько точен метод ВМС США?",
        a: "Метод обхватов ВМС США обычно даёт точность ±3–4 процентных пункта по сравнению с DEXA. Он точнее ИМТ для оценки состава тела, но уступает гидростатическому взвешиванию или DEXA.",
      },
    ],
  },

  zh: {
    title: "体脂率计算器",
    short: "使用美国海军围度法估算您的体脂率。",
    description:
      "免费体脂率计算器，采用美国海军围度法（Hodgdon & Beckett，1984年）。输入颈围、腰围和臀围，无需专业设备即可获得准确估算。",
    keywords: [
      "体脂率计算器",
      "体脂百分比",
      "美国海军法",
      "围度法",
      "瘦体重",
      "脂肪质量",
      "身体成分",
    ],
    inputs: {
      gender: { label: "生理性别", help: "女性公式需要臀围数据。" },
      height: { label: "身高", help: "您的身高（厘米）。" },
      weight: { label: "体重", help: "您的体重（千克），用于计算脂肪质量和瘦体重。" },
      waist: { label: "腰围", help: "男性在肚脐处测量，女性在腰部最细处测量。" },
      neck: { label: "颈围", help: "在喉结正下方稍微向下倾斜处测量。" },
      hip: { label: "臀围（女性）", help: "在臀部和臀部最宽处测量。仅女性需要。" },
    },
    outputs: {
      bodyFatPct: { label: "体脂率", help: "体重中脂肪占比的估算值。" },
      fatMass: { label: "脂肪质量", help: "体脂的估算重量（千克）。", suffix: "千克" },
      leanMass: { label: "瘦体重", help: "体重减去脂肪质量——包括肌肉、骨骼、水分和器官。", suffix: "千克" },
      category: { label: "分类", help: "美国运动委员会（ACE）的体脂分类。" },
    },
    options: {
      gender: { male: "男性", female: "女性" },
    },
    errors: {
      hipRequired: "女性需要提供臀围数据。",
      waistMustExceedNeck: "腰围必须大于颈围。",
      heightOutOfRange: "身高必须在50至250厘米之间。",
      weightOutOfRange: "体重必须在1至300千克之间。",
    },
    faq: [
      {
        q: "美国海军法有多准确？",
        a: "美国海军围度法的准确度通常在±3-4个百分点以内（与DEXA相比）。它比BMI更准确，但不如水下称重或DEXA精确。",
      },
    ],
  },

  ja: {
    title: "体脂肪率計算機",
    short: "米海軍の周囲径法で体脂肪率を推定しましょう。",
    description:
      "米海軍の周囲径法（Hodgdon & Beckett, 1984年）を使用した無料体脂肪率計算機。首・腹・腰の周囲を測定するだけで、専門機器なしに正確な推定値が得られます。",
    keywords: [
      "体脂肪率計算機",
      "体脂肪率",
      "米海軍法",
      "周囲径法",
      "除脂肪体重",
      "脂肪量",
      "体組成",
    ],
    inputs: {
      gender: { label: "生物学的性別", help: "女性の計算式には腰の周囲径が含まれます。" },
      height: { label: "身長", help: "身長（センチメートル）。" },
      weight: { label: "体重", help: "体重（キログラム）。脂肪量と除脂肪体重の計算に使用します。" },
      waist: { label: "腹囲", help: "男性はへそのあたり、女性はウエストの最も細い部分で測定してください。" },
      neck: { label: "頸囲", help: "喉仏のすぐ下で、やや下向きに傾けて測定してください。" },
      hip: { label: "腰囲（女性）", help: "ヒップとお尻の最も広い部分で測定。女性のみ必要です。" },
    },
    outputs: {
      bodyFatPct: { label: "体脂肪率", help: "体重に占める脂肪の推定割合。" },
      fatMass: { label: "脂肪量", help: "体脂肪の推定重量（キログラム）。", suffix: "kg" },
      leanMass: { label: "除脂肪体重", help: "体重から脂肪量を引いた値。筋肉・骨・水分・内臓を含む。", suffix: "kg" },
      category: { label: "カテゴリ", help: "ACE（米国運動評議会）の体脂肪分類。" },
    },
    options: {
      gender: { male: "男性", female: "女性" },
    },
    errors: {
      hipRequired: "女性は腰の周囲径が必要です。",
      waistMustExceedNeck: "腹囲は頸囲より大きくなければなりません。",
      heightOutOfRange: "身長は50〜250 cmの範囲で入力してください。",
      weightOutOfRange: "体重は1〜300 kgの範囲で入力してください。",
    },
    faq: [
      {
        q: "米海軍法はどれくらい正確ですか？",
        a: "米海軍の周囲径法は、DEXAと比較して通常±3〜4ポイントの精度を持ちます。体組成の推定においてBMIより精度が高いですが、水中体重測定やDEXAには及びません。",
      },
    ],
  },

  ko: {
    title: "체지방률 계산기",
    short: "미 해군 둘레 측정법으로 체지방률을 추정하세요.",
    description:
      "미 해군 줄자 측정법(Hodgdon & Beckett, 1984)을 사용한 무료 체지방률 계산기. 목, 허리, 엉덩이 둘레를 측정하면 장비 없이도 정확한 추정값을 얻을 수 있습니다.",
    keywords: [
      "체지방률 계산기",
      "체지방 비율",
      "미 해군 방법",
      "둘레 측정법",
      "제지방량",
      "지방량",
      "체성분",
    ],
    inputs: {
      gender: { label: "생물학적 성별", help: "여성 공식은 엉덩이 둘레를 포함합니다." },
      height: { label: "키", help: "키(센티미터)." },
      weight: { label: "체중", help: "체중(킬로그램). 지방량과 제지방량 계산에 사용됩니다." },
      waist: { label: "허리 둘레", help: "남성은 배꼽 높이에서, 여성은 허리의 가장 좁은 부분에서 측정하세요." },
      neck: { label: "목 둘레", help: "후두 바로 아래에서 약간 아래로 기울여 측정하세요." },
      hip: { label: "엉덩이 둘레(여성)", help: "엉덩이의 가장 넓은 부분에서 측정하세요. 여성에게만 필요합니다." },
    },
    outputs: {
      bodyFatPct: { label: "체지방률", help: "총 체중에서 지방이 차지하는 추정 비율." },
      fatMass: { label: "지방량", help: "체지방의 추정 무게(킬로그램).", suffix: "kg" },
      leanMass: { label: "제지방량", help: "체중에서 지방량을 뺀 값 — 근육, 뼈, 수분, 장기 포함.", suffix: "kg" },
      category: { label: "분류", help: "ACE(미국 운동위원회)의 체지방 분류." },
    },
    options: {
      gender: { male: "남성", female: "여성" },
    },
    errors: {
      hipRequired: "여성은 엉덩이 둘레 측정이 필요합니다.",
      waistMustExceedNeck: "허리 둘레는 목 둘레보다 커야 합니다.",
      heightOutOfRange: "키는 50~250 cm 범위여야 합니다.",
      weightOutOfRange: "체중은 1~300 kg 범위여야 합니다.",
    },
    faq: [
      {
        q: "미 해군 방법은 얼마나 정확한가요?",
        a: "미 해군 둘레 측정법은 DEXA와 비교했을 때 일반적으로 ±3-4 퍼센트포인트의 정확도를 가집니다. 체성분 추정에서 BMI보다 정확하지만 수중 체중 측정이나 DEXA보다는 덜 정밀합니다.",
      },
    ],
  },

  hi: {
    title: "बॉडी फैट कैलकुलेटर",
    short: "अमेरिकी नौसेना की परिधि माप विधि से शरीर की वसा प्रतिशत का अनुमान लगाएं।",
    description:
      "अमेरिकी नौसेना की टेप माप विधि (Hodgdon & Beckett, 1984) का उपयोग करने वाला मुफ़्त बॉडी फैट प्रतिशत कैलकुलेटर। गर्दन, कमर और कूल्हे की माप दर्ज करें और बिना किसी उपकरण के सटीक अनुमान पाएं।",
    keywords: [
      "बॉडी फैट कैलकुलेटर",
      "शरीर की वसा प्रतिशत",
      "अमेरिकी नौसेना विधि",
      "परिधि माप विधि",
      "दुबली मांसपेशी",
      "वसा द्रव्यमान",
      "शरीर संरचना",
    ],
    inputs: {
      gender: { label: "जैविक लिंग", help: "महिला फ़ॉर्मूले में कूल्हे की माप शामिल होती है।" },
      height: { label: "लंबाई", help: "आपकी लंबाई सेंटीमीटर में।" },
      weight: { label: "वज़न", help: "आपका शारीरिक वज़न किलोग्राम में, वसा और दुबली मांसपेशी की गणना के लिए।" },
      waist: { label: "कमर की परिधि", help: "पुरुषों के लिए नाभि के स्तर पर, महिलाओं के लिए सबसे पतले बिंदु पर नापें।" },
      neck: { label: "गर्दन की परिधि", help: "कंठ के ठीक नीचे, थोड़ा नीचे की ओर झुकाकर नापें।" },
      hip: { label: "कूल्हे की परिधि (महिलाएं)", help: "कूल्हों और नितंबों के सबसे चौड़े हिस्से पर नापें। केवल महिलाओं के लिए आवश्यक।" },
    },
    outputs: {
      bodyFatPct: { label: "शरीर की वसा प्रतिशत", help: "कुल शरीर के वज़न का अनुमानित वसा प्रतिशत।" },
      fatMass: { label: "वसा द्रव्यमान", help: "शरीर की वसा का अनुमानित वज़न किलोग्राम में।", suffix: "kg" },
      leanMass: { label: "दुबली मांसपेशी", help: "शरीर का वज़न घटाकर वसा द्रव्यमान — मांसपेशियां, हड्डियां, पानी और अंग शामिल हैं।", suffix: "kg" },
      category: { label: "श्रेणी", help: "ACE (American Council on Exercise) शरीर वसा वर्गीकरण।" },
    },
    options: {
      gender: { male: "पुरुष", female: "महिला" },
    },
    errors: {
      hipRequired: "महिलाओं के लिए कूल्हे की माप आवश्यक है।",
      waistMustExceedNeck: "कमर की परिधि गर्दन की परिधि से अधिक होनी चाहिए।",
      heightOutOfRange: "लंबाई 50 से 250 cm के बीच होनी चाहिए।",
      weightOutOfRange: "वज़न 1 से 300 kg के बीच होना चाहिए।",
    },
    faq: [
      {
        q: "अमेरिकी नौसेना विधि कितनी सटीक है?",
        a: "अमेरिकी नौसेना की परिधि माप विधि DEXA की तुलना में आमतौर पर ±3-4 प्रतिशत अंक की सटीकता रखती है। यह BMI से अधिक सटीक है लेकिन हाइड्रोस्टेटिक वज़न या DEXA से कम।",
      },
    ],
  },
};

export default i18n;
