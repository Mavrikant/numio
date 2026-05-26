import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Ideal Weight Calculator",
    short: "Calculate your ideal body weight using 4 validated formulas — Devine, Robinson, Miller, and Hamwi.",
    description:
      "Free ideal body weight calculator using Devine, Robinson, Miller, and Hamwi formulas. Enter your height and sex to see your ideal weight range from four evidence-based equations.",
    keywords: [
      "ideal weight calculator",
      "ideal body weight",
      "Devine formula",
      "Robinson formula",
      "IBW calculator",
      "healthy weight",
      "weight for height",
    ],
    inputs: {
      unit: { label: "Unit system", help: "Choose metric (cm) or imperial (inches)." },
      gender: { label: "Biological sex", help: "Sex is used in the formula constants." },
      height: { label: "Height", help: "Your height in centimetres (metric) or inches (imperial)." },
    },
    outputs: {
      devine: { label: "Devine (1974)", help: "Most commonly used in clinical pharmacology for drug dosing.", suffix: "kg" },
      robinson: { label: "Robinson (1983)", help: "Robinson formula — updated estimate for modern populations.", suffix: "kg" },
      miller: { label: "Miller (1983)", help: "Miller formula — tends to give slightly higher estimates.", suffix: "kg" },
      hamwi: { label: "Hamwi (1964)", help: "Hamwi formula — oldest of the four, commonly used in dietetics.", suffix: "kg" },
    },
    options: {
      unit: { metric: "Metric (cm)", imperial: "Imperial (inches)" },
      gender: { male: "Male", female: "Female" },
    },
    errors: {
      heightOutOfRange: "Height must be between 50 and 250 cm (or 20–100 inches).",
    },
    faq: [
      {
        q: "Which ideal weight formula is most accurate?",
        a: "None of the four formulas was originally designed to define a 'healthy' weight for the general population — they were developed for drug dosing in clinical settings. The Devine formula is the most widely cited in pharmacology. For general health, BMI and body composition measurements are more relevant.",
      },
      {
        q: "What if my actual weight is above my ideal weight?",
        a: "These formulas provide a rough reference range, not a personal health target. A person can be at a higher weight and still be metabolically healthy depending on muscle mass, genetics, and lifestyle. Consult a healthcare provider for individualised guidance.",
      },
      {
        q: "Why do the four formulas give different results?",
        a: "Each formula was derived from different patient populations and measurement methods in different decades. The differences are typically 2–5 kg, reflecting measurement uncertainty rather than meaningful clinical differences.",
      },
    ],
  },

  tr: {
    title: "İdeal Kilo Hesaplayıcı",
    short: "Devine, Robinson, Miller ve Hamwi formülleriyle ideal vücut ağırlığınızı hesaplayın.",
    description:
      "Devine, Robinson, Miller ve Hamwi formüllerini kullanan ücretsiz ideal kilo hesaplayıcı. Boyunuzu ve cinsiyetinizi girerek dört kanıta dayalı denklemden ideal kilo aralığınızı öğrenin.",
    keywords: [
      "ideal kilo hesaplayıcı",
      "ideal vücut ağırlığı",
      "Devine formülü",
      "Robinson formülü",
      "IBW hesaplayıcı",
      "sağlıklı kilo",
      "boya göre kilo",
    ],
    inputs: {
      unit: { label: "Birim sistemi", help: "Metrik (cm) veya imperial (inç) seçin." },
      gender: { label: "Biyolojik cinsiyet", help: "Cinsiyet, formül sabitlerinde kullanılır." },
      height: { label: "Boy", help: "Boyunuz santimetre (metrik) veya inç (imperial) cinsinden." },
    },
    outputs: {
      devine: { label: "Devine (1974)", help: "Klinik farmakolojide ilaç dozajı için en sık kullanılan formül.", suffix: "kg" },
      robinson: { label: "Robinson (1983)", help: "Robinson formülü — modern popülasyonlar için güncellenmiş tahmin.", suffix: "kg" },
      miller: { label: "Miller (1983)", help: "Miller formülü — genellikle biraz daha yüksek tahminler verir.", suffix: "kg" },
      hamwi: { label: "Hamwi (1964)", help: "Hamwi formülü — dördünün en eskisi, diyetetik alanında yaygın kullanılır.", suffix: "kg" },
    },
    options: {
      unit: { metric: "Metrik (cm)", imperial: "Imperial (inç)" },
      gender: { male: "Erkek", female: "Kadın" },
    },
    errors: {
      heightOutOfRange: "Boy 50 ile 250 cm (veya 20–100 inç) arasında olmalıdır.",
    },
    faq: [
      {
        q: "Hangi ideal kilo formülü daha doğrudur?",
        a: "Bu dört formülün hiçbiri, genel nüfus için 'sağlıklı' kilo tanımlamak amacıyla geliştirilmemiştir; klinik ortamlarda ilaç dozajı için oluşturulmuştur. Genel sağlık için VKİ ve vücut kompozisyonu ölçümleri daha ilgilidir.",
      },
    ],
  },

  de: {
    title: "Idealgewicht-Rechner",
    short: "Berechnen Sie Ihr Idealgewicht mit 4 validierten Formeln — Devine, Robinson, Miller und Hamwi.",
    description:
      "Kostenloser Idealgewicht-Rechner mit den Formeln von Devine, Robinson, Miller und Hamwi. Geben Sie Größe und Geschlecht ein, um Ihren Idealgewichtsbereich aus vier evidenzbasierten Gleichungen zu sehen.",
    keywords: [
      "Idealgewicht Rechner",
      "ideales Körpergewicht",
      "Devine Formel",
      "Robinson Formel",
      "IBW Rechner",
      "Normalgewicht",
      "Gewicht nach Größe",
    ],
    inputs: {
      unit: { label: "Einheitensystem", help: "Metrisch (cm) oder imperial (Zoll) wählen." },
      gender: { label: "Biologisches Geschlecht", help: "Das Geschlecht wird in den Formelkonstanten verwendet." },
      height: { label: "Körpergröße", help: "Ihre Körpergröße in Zentimetern (metrisch) oder Zoll (imperial)." },
    },
    outputs: {
      devine: { label: "Devine (1974)", help: "Am häufigsten in der klinischen Pharmakologie verwendet.", suffix: "kg" },
      robinson: { label: "Robinson (1983)", help: "Robinson-Formel — aktualisierte Schätzung für moderne Bevölkerungen.", suffix: "kg" },
      miller: { label: "Miller (1983)", help: "Miller-Formel — liefert tendenziell etwas höhere Schätzwerte.", suffix: "kg" },
      hamwi: { label: "Hamwi (1964)", help: "Hamwi-Formel — die älteste der vier, häufig in der Diätetik verwendet.", suffix: "kg" },
    },
    options: {
      unit: { metric: "Metrisch (cm)", imperial: "Imperial (Zoll)" },
      gender: { male: "Männlich", female: "Weiblich" },
    },
    errors: {
      heightOutOfRange: "Die Körpergröße muss zwischen 50 und 250 cm (oder 20–100 Zoll) liegen.",
    },
    faq: [
      {
        q: "Welche Idealgewicht-Formel ist am genauesten?",
        a: "Keine der vier Formeln wurde ursprünglich entwickelt, um ein 'gesundes' Gewicht für die Allgemeinbevölkerung zu definieren — sie wurden für die Medikamentendosierung in klinischen Umgebungen erstellt. Für die allgemeine Gesundheit sind BMI und Körperzusammensetzungsmessungen relevanter.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Poids Idéal",
    short: "Calculez votre poids idéal avec 4 formules validées — Devine, Robinson, Miller et Hamwi.",
    description:
      "Calculateur de poids idéal gratuit utilisant les formules Devine, Robinson, Miller et Hamwi. Saisissez votre taille et votre sexe pour voir votre plage de poids idéal.",
    keywords: [
      "calculateur poids idéal",
      "poids corporel idéal",
      "formule Devine",
      "formule Robinson",
      "IBW calculateur",
      "poids santé",
      "poids pour la taille",
    ],
    inputs: {
      unit: { label: "Système d'unités", help: "Choisissez métrique (cm) ou impérial (pouces)." },
      gender: { label: "Sexe biologique", help: "Le sexe est utilisé dans les constantes des formules." },
      height: { label: "Taille", help: "Votre taille en centimètres (métrique) ou en pouces (impérial)." },
    },
    outputs: {
      devine: { label: "Devine (1974)", help: "La plus utilisée en pharmacologie clinique pour le dosage des médicaments.", suffix: "kg" },
      robinson: { label: "Robinson (1983)", help: "Formule Robinson — estimation mise à jour pour les populations modernes.", suffix: "kg" },
      miller: { label: "Miller (1983)", help: "Formule Miller — tend à donner des estimations légèrement supérieures.", suffix: "kg" },
      hamwi: { label: "Hamwi (1964)", help: "Formule Hamwi — la plus ancienne des quatre, couramment utilisée en diététique.", suffix: "kg" },
    },
    options: {
      unit: { metric: "Métrique (cm)", imperial: "Impérial (pouces)" },
      gender: { male: "Homme", female: "Femme" },
    },
    errors: {
      heightOutOfRange: "La taille doit être comprise entre 50 et 250 cm (ou 20–100 pouces).",
    },
    faq: [
      {
        q: "Quelle formule de poids idéal est la plus précise ?",
        a: "Aucune des quatre formules n'a été conçue pour définir un poids 'sain' pour la population générale — elles ont été développées pour le dosage des médicaments en milieu clinique. Pour la santé générale, l'IMC et les mesures de la composition corporelle sont plus pertinents.",
      },
    ],
  },

  es: {
    title: "Calculadora de Peso Ideal",
    short: "Calcula tu peso ideal con 4 fórmulas validadas — Devine, Robinson, Miller y Hamwi.",
    description:
      "Calculadora de peso ideal gratuita usando las fórmulas Devine, Robinson, Miller y Hamwi. Introduce tu altura y sexo para ver tu rango de peso ideal según cuatro ecuaciones.",
    keywords: [
      "calculadora peso ideal",
      "peso corporal ideal",
      "fórmula Devine",
      "fórmula Robinson",
      "IBW calculadora",
      "peso saludable",
      "peso para la altura",
    ],
    inputs: {
      unit: { label: "Sistema de unidades", help: "Elige métrico (cm) o imperial (pulgadas)." },
      gender: { label: "Sexo biológico", help: "El sexo se usa en las constantes de la fórmula." },
      height: { label: "Altura", help: "Tu altura en centímetros (métrico) o pulgadas (imperial)." },
    },
    outputs: {
      devine: { label: "Devine (1974)", help: "La más utilizada en farmacología clínica para dosificación de medicamentos.", suffix: "kg" },
      robinson: { label: "Robinson (1983)", help: "Fórmula Robinson — estimación actualizada para poblaciones modernas.", suffix: "kg" },
      miller: { label: "Miller (1983)", help: "Fórmula Miller — tiende a dar estimaciones ligeramente superiores.", suffix: "kg" },
      hamwi: { label: "Hamwi (1964)", help: "Fórmula Hamwi — la más antigua de las cuatro, común en dietética.", suffix: "kg" },
    },
    options: {
      unit: { metric: "Métrico (cm)", imperial: "Imperial (pulgadas)" },
      gender: { male: "Hombre", female: "Mujer" },
    },
    errors: {
      heightOutOfRange: "La altura debe estar entre 50 y 250 cm (o 20–100 pulgadas).",
    },
    faq: [
      {
        q: "¿Qué fórmula de peso ideal es más precisa?",
        a: "Ninguna de las cuatro fórmulas fue diseñada originalmente para definir un peso 'saludable' para la población general. Para la salud general, el IMC y las mediciones de composición corporal son más relevantes.",
      },
    ],
  },

  it: {
    title: "Calcolatore del Peso Ideale",
    short: "Calcola il tuo peso ideale con 4 formule validate — Devine, Robinson, Miller e Hamwi.",
    description:
      "Calcolatore del peso ideale gratuito con le formule Devine, Robinson, Miller e Hamwi. Inserisci altezza e sesso per vedere il tuo range di peso ideale da quattro equazioni validate.",
    keywords: [
      "calcolatore peso ideale",
      "peso corporeo ideale",
      "formula Devine",
      "formula Robinson",
      "IBW calcolatore",
      "peso sano",
      "peso per l'altezza",
    ],
    inputs: {
      unit: { label: "Sistema di unità", help: "Scegli metrico (cm) o imperiale (pollici)." },
      gender: { label: "Sesso biologico", help: "Il sesso è usato nelle costanti della formula." },
      height: { label: "Altezza", help: "La tua altezza in centimetri (metrico) o pollici (imperiale)." },
    },
    outputs: {
      devine: { label: "Devine (1974)", help: "La più utilizzata in farmacologia clinica per il dosaggio dei farmaci.", suffix: "kg" },
      robinson: { label: "Robinson (1983)", help: "Formula Robinson — stima aggiornata per le popolazioni moderne.", suffix: "kg" },
      miller: { label: "Miller (1983)", help: "Formula Miller — tende a fornire stime leggermente superiori.", suffix: "kg" },
      hamwi: { label: "Hamwi (1964)", help: "Formula Hamwi — la più antica delle quattro, comune in dietistica.", suffix: "kg" },
    },
    options: {
      unit: { metric: "Metrico (cm)", imperial: "Imperiale (pollici)" },
      gender: { male: "Maschio", female: "Femmina" },
    },
    errors: {
      heightOutOfRange: "L'altezza deve essere compresa tra 50 e 250 cm (o 20–100 pollici).",
    },
    faq: [
      {
        q: "Quale formula del peso ideale è più accurata?",
        a: "Nessuna delle quattro formule era stata sviluppata per definire un peso 'sano' per la popolazione generale. Per la salute generale, BMI e misurazioni della composizione corporea sono più rilevanti.",
      },
    ],
  },

  ar: {
    title: "حاسبة الوزن المثالي",
    short: "احسب وزنك المثالي بأربع معادلات موثّقة — ديفاين وروبينسون وميلر وهامي.",
    description:
      "حاسبة الوزن المثالي المجانية باستخدام معادلات ديفاين وروبينسون وميلر وهامي. أدخل طولك وجنسك لمعرفة نطاق الوزن المثالي وفق أربعة معادلات مستندة إلى الأدلة.",
    keywords: [
      "حاسبة الوزن المثالي",
      "الوزن المثالي للجسم",
      "معادلة ديفاين",
      "معادلة روبينسون",
      "حاسبة IBW",
      "الوزن الصحي",
      "الوزن حسب الطول",
    ],
    inputs: {
      unit: { label: "نظام الوحدات", help: "اختر المتري (سم) أو الإمبراطوري (بوصة)." },
      gender: { label: "الجنس البيولوجي", help: "يُستخدم الجنس في ثوابت المعادلات." },
      height: { label: "الطول", help: "طولك بالسنتيمتر (متري) أو البوصة (إمبراطوري)." },
    },
    outputs: {
      devine: { label: "ديفاين (1974)", help: "الأكثر استخداماً في علم الصيدلة السريرية لتحديد جرعات الأدوية.", suffix: "كجم" },
      robinson: { label: "روبينسون (1983)", help: "معادلة روبينسون — تقدير محدَّث للمجتمعات الحديثة.", suffix: "كجم" },
      miller: { label: "ميلر (1983)", help: "معادلة ميلر — تميل إلى إعطاء تقديرات أعلى قليلاً.", suffix: "كجم" },
      hamwi: { label: "هامي (1964)", help: "معادلة هامي — الأقدم بين المعادلات الأربع، شائعة في علم التغذية.", suffix: "كجم" },
    },
    options: {
      unit: { metric: "متري (سم)", imperial: "إمبراطوري (بوصة)" },
      gender: { male: "ذكر", female: "أنثى" },
    },
    errors: {
      heightOutOfRange: "يجب أن يكون الطول بين 50 و250 سم (أو 20–100 بوصة).",
    },
    faq: [
      {
        q: "أيّ معادلة للوزن المثالي أكثر دقة؟",
        a: "لم تُصمَّم أيٌّ من المعادلات الأربع في الأصل لتحديد الوزن الصحي للسكان العامة؛ بل طُوِّرت لأغراض تحديد جرعات الأدوية في البيئات السريرية. ولأغراض الصحة العامة، تعدّ قياسات مؤشر كتلة الجسم وتركيب الجسم أكثر صلة.",
      },
    ],
  },

  ru: {
    title: "Калькулятор идеального веса",
    short: "Рассчитайте идеальный вес по 4 формулам — Девайн, Робинсон, Миллер и Хамви.",
    description:
      "Бесплатный калькулятор идеального веса по формулам Девайн, Робинсон, Миллер и Хамви. Введите рост и пол, чтобы увидеть диапазон идеального веса по четырём формулам.",
    keywords: [
      "калькулятор идеального веса",
      "идеальная масса тела",
      "формула Девайн",
      "формула Робинсон",
      "IBW калькулятор",
      "нормальный вес",
      "вес по росту",
    ],
    inputs: {
      unit: { label: "Система единиц", help: "Выберите метрическую (см) или имперскую (дюймы) систему." },
      gender: { label: "Биологический пол", help: "Пол используется в константах формул." },
      height: { label: "Рост", help: "Ваш рост в сантиметрах (метрическая система) или дюймах (имперская)." },
    },
    outputs: {
      devine: { label: "Девайн (1974)", help: "Наиболее широко применяется в клинической фармакологии для расчёта доз.", suffix: "кг" },
      robinson: { label: "Робинсон (1983)", help: "Формула Робинсона — обновлённая оценка для современных популяций.", suffix: "кг" },
      miller: { label: "Миллер (1983)", help: "Формула Миллера — как правило, даёт несколько более высокие значения.", suffix: "кг" },
      hamwi: { label: "Хамви (1964)", help: "Формула Хамви — старейшая из четырёх, широко используется в диетологии.", suffix: "кг" },
    },
    options: {
      unit: { metric: "Метрическая (см)", imperial: "Имперская (дюймы)" },
      gender: { male: "Мужской", female: "Женский" },
    },
    errors: {
      heightOutOfRange: "Рост должен быть от 50 до 250 см (или от 20 до 100 дюймов).",
    },
    faq: [
      {
        q: "Какая формула идеального веса наиболее точна?",
        a: "Ни одна из четырёх формул изначально не предназначалась для определения «здорового» веса для широкой аудитории — они разрабатывались для расчёта доз препаратов в клинических условиях. Для общей оценки здоровья более релевантны ИМТ и параметры состава тела.",
      },
    ],
  },

  zh: {
    title: "理想体重计算器",
    short: "使用4种经过验证的公式计算您的理想体重——Devine、Robinson、Miller和Hamwi。",
    description:
      "免费理想体重计算器，采用Devine、Robinson、Miller和Hamwi四种公式。输入您的身高和性别，获取四种循证方程计算的理想体重范围。",
    keywords: [
      "理想体重计算器",
      "理想身体重量",
      "Devine公式",
      "Robinson公式",
      "IBW计算器",
      "健康体重",
      "身高对应体重",
    ],
    inputs: {
      unit: { label: "单位制", help: "选择公制（厘米）或英制（英寸）。" },
      gender: { label: "生理性别", help: "性别用于公式常数。" },
      height: { label: "身高", help: "您的身高，以厘米（公制）或英寸（英制）为单位。" },
    },
    outputs: {
      devine: { label: "Devine（1974年）", help: "临床药理学中最常用于药物剂量计算的公式。", suffix: "千克" },
      robinson: { label: "Robinson（1983年）", help: "Robinson公式——针对现代人群的更新估算。", suffix: "千克" },
      miller: { label: "Miller（1983年）", help: "Miller公式——通常给出略高的估算值。", suffix: "千克" },
      hamwi: { label: "Hamwi（1964年）", help: "Hamwi公式——四种中最古老，常用于营养学。", suffix: "千克" },
    },
    options: {
      unit: { metric: "公制（厘米）", imperial: "英制（英寸）" },
      gender: { male: "男性", female: "女性" },
    },
    errors: {
      heightOutOfRange: "身高必须在50至250厘米（或20至100英寸）之间。",
    },
    faq: [
      {
        q: "哪种理想体重公式最准确？",
        a: "这四种公式最初都不是为一般人群定义\"健康\"体重而设计的——它们是在临床环境中为药物剂量计算而开发的。对于一般健康评估，BMI和体成分测量更为相关。",
      },
    ],
  },

  ja: {
    title: "理想体重計算機",
    short: "Devine・Robinson・Miller・Hamwiの4つの検証済み公式で理想体重を計算しましょう。",
    description:
      "Devine・Robinson・Miller・Hamwiの4式を使用した無料の理想体重計算機。身長と性別を入力するだけで、4つの根拠に基づく方程式から理想体重の範囲を確認できます。",
    keywords: [
      "理想体重計算機",
      "理想体重",
      "Devine式",
      "Robinson式",
      "IBW計算",
      "健康体重",
      "身長別体重",
    ],
    inputs: {
      unit: { label: "単位系", help: "メートル法（cm）またはヤード・ポンド法（インチ）を選択。" },
      gender: { label: "生物学的性別", help: "性別は公式の定数に使用されます。" },
      height: { label: "身長", help: "身長をセンチメートル（メートル法）またはインチ（ヤード・ポンド法）で入力してください。" },
    },
    outputs: {
      devine: { label: "Devine（1974年）", help: "臨床薬理学で薬物投与量の計算に最も多く使用される公式。", suffix: "kg" },
      robinson: { label: "Robinson（1983年）", help: "Robinson式——現代の集団向けに更新された推定値。", suffix: "kg" },
      miller: { label: "Miller（1983年）", help: "Miller式——やや高めの推定値が出る傾向があります。", suffix: "kg" },
      hamwi: { label: "Hamwi（1964年）", help: "Hamwi式——4つの中で最も古く、栄養学でよく使用されます。", suffix: "kg" },
    },
    options: {
      unit: { metric: "メートル法（cm）", imperial: "ヤード・ポンド法（インチ）" },
      gender: { male: "男性", female: "女性" },
    },
    errors: {
      heightOutOfRange: "身長は50〜250 cm（または20〜100インチ）の範囲で入力してください。",
    },
    faq: [
      {
        q: "どの理想体重の公式が最も正確ですか？",
        a: "4つの公式はいずれも、一般集団の「健康」な体重を定義するために作られたものではなく、臨床現場での薬物投与量計算のために開発されました。一般的な健康目的にはBMIや体組成測定が有用です。",
      },
    ],
  },

  ko: {
    title: "이상 체중 계산기",
    short: "Devine, Robinson, Miller, Hamwi의 4가지 검증된 공식으로 이상 체중을 계산하세요.",
    description:
      "Devine, Robinson, Miller, Hamwi 공식을 사용한 무료 이상 체중 계산기. 키와 성별을 입력하면 4가지 근거 기반 방정식으로 계산된 이상 체중 범위를 확인할 수 있습니다.",
    keywords: [
      "이상 체중 계산기",
      "이상 체중",
      "Devine 공식",
      "Robinson 공식",
      "IBW 계산기",
      "건강 체중",
      "키별 체중",
    ],
    inputs: {
      unit: { label: "단위 시스템", help: "미터법(cm) 또는 야드파운드법(인치)을 선택하세요." },
      gender: { label: "생물학적 성별", help: "성별은 공식 상수에 사용됩니다." },
      height: { label: "키", help: "키를 센티미터(미터법) 또는 인치(야드파운드법)로 입력하세요." },
    },
    outputs: {
      devine: { label: "Devine（1974년）", help: "임상 약리학에서 약물 용량 계산에 가장 많이 사용되는 공식.", suffix: "kg" },
      robinson: { label: "Robinson（1983년）", help: "Robinson 공식 — 현대 인구에 맞게 업데이트된 추정치.", suffix: "kg" },
      miller: { label: "Miller（1983년）", help: "Miller 공식 — 약간 높은 추정치를 제공하는 경향이 있습니다.", suffix: "kg" },
      hamwi: { label: "Hamwi（1964년）", help: "Hamwi 공식 — 네 가지 중 가장 오래된 것으로 영양학에서 흔히 사용됩니다.", suffix: "kg" },
    },
    options: {
      unit: { metric: "미터법(cm)", imperial: "야드파운드법(인치)" },
      gender: { male: "남성", female: "여성" },
    },
    errors: {
      heightOutOfRange: "키는 50~250 cm(또는 20~100인치) 범위여야 합니다.",
    },
    faq: [
      {
        q: "어떤 이상 체중 공식이 가장 정확한가요?",
        a: "네 가지 공식 중 어느 것도 원래 일반 인구의 '건강한' 체중을 정의하기 위해 설계되지 않았습니다. 일반 건강을 위해서는 BMI와 체성분 측정이 더 관련성이 높습니다.",
      },
    ],
  },

  hi: {
    title: "आदर्श वज़न कैलकुलेटर",
    short: "Devine, Robinson, Miller और Hamwi के 4 प्रमाणित फ़ॉर्मूलों से अपना आदर्श वज़न जानें।",
    description:
      "Devine, Robinson, Miller और Hamwi फ़ॉर्मूलों का उपयोग करने वाला मुफ़्त आदर्श वज़न कैलकुलेटर। अपनी लंबाई और लिंग दर्ज करें और चार साक्ष्य-आधारित समीकरणों से आदर्श वज़न सीमा देखें।",
    keywords: [
      "आदर्श वज़न कैलकुलेटर",
      "आदर्श शारीरिक वज़न",
      "Devine फ़ॉर्मूला",
      "Robinson फ़ॉर्मूला",
      "IBW कैलकुलेटर",
      "स्वस्थ वज़न",
      "लंबाई के अनुसार वज़न",
    ],
    inputs: {
      unit: { label: "माप प्रणाली", help: "मेट्रिक (cm) या इम्पीरियल (इंच) चुनें।" },
      gender: { label: "जैविक लिंग", help: "लिंग का उपयोग फ़ॉर्मूला स्थिरांकों में होता है।" },
      height: { label: "लंबाई", help: "आपकी लंबाई सेंटीमीटर (मेट्रिक) या इंच (इम्पीरियल) में।" },
    },
    outputs: {
      devine: { label: "Devine (1974)", help: "क्लिनिकल फार्माकोलॉजी में दवा की खुराक के लिए सबसे अधिक उपयोग किया जाने वाला फ़ॉर्मूला।", suffix: "kg" },
      robinson: { label: "Robinson (1983)", help: "Robinson फ़ॉर्मूला — आधुनिक आबादी के लिए अद्यतन अनुमान।", suffix: "kg" },
      miller: { label: "Miller (1983)", help: "Miller फ़ॉर्मूला — आमतौर पर थोड़े अधिक अनुमान देता है।", suffix: "kg" },
      hamwi: { label: "Hamwi (1964)", help: "Hamwi फ़ॉर्मूला — चारों में सबसे पुराना, आहार विज्ञान में आम।", suffix: "kg" },
    },
    options: {
      unit: { metric: "मेट्रिक (cm)", imperial: "इम्पीरियल (इंच)" },
      gender: { male: "पुरुष", female: "महिला" },
    },
    errors: {
      heightOutOfRange: "लंबाई 50 से 250 cm (या 20–100 इंच) के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "कौन सा आदर्श वज़न फ़ॉर्मूला सबसे सटीक है?",
        a: "इन चार फ़ॉर्मूलों में से कोई भी मूल रूप से सामान्य आबादी के लिए 'स्वस्थ' वज़न परिभाषित करने के लिए नहीं बनाया गया था। सामान्य स्वास्थ्य के लिए BMI और शरीर संरचना माप अधिक प्रासंगिक हैं।",
      },
    ],
  },
};

export default i18n;
