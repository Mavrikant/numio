import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Percentage Calculator",
    short: "Calculate percentages instantly: X% of Y, X is what % of Y, or percentage change.",
    description:
      "Free 3-in-1 percentage calculator. Find what X% of Y is, calculate what percentage X is of Y, or compute percentage change between two values.",
    keywords: [
      "percentage calculator",
      "percent calculator",
      "percentage change calculator",
      "what percentage of",
      "percent of",
    ],
    inputs: {
      mode: {
        label: "Problem type",
        help: "Choose what you want to calculate",
      },
      x: {
        label: "First value",
        help: "The percentage or part (varies by problem type)",
      },
      y: {
        label: "Second value",
        help: "The base or whole (varies by problem type)",
      },
    },
    outputs: {
      result: {
        label: "Result",
        help: "Calculated result",
      },
      explanation: {
        label: "Explanation",
        help: "Step-by-step breakdown",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "X% of Y",
        "x_is_what_pct_of_y": "X is what % of Y",
        "pct_change": "Percentage change from X to Y",
      },
    },
    errors: {
      divideByZero: "Cannot divide by zero",
    },
    faq: [
      {
        q: "What does 'percentage' mean?",
        a: "Percentage (%) means 'per hundred'. For example, 25% means 25 out of 100, or 0.25 as a decimal.",
      },
      {
        q: "How do I calculate X% of Y?",
        a: "Multiply Y by X and divide by 100. Formula: (X / 100) × Y. Example: 25% of 200 = (25 / 100) × 200 = 50.",
      },
      {
        q: "How do I find what percentage X is of Y?",
        a: "Divide X by Y and multiply by 100. Formula: (X / Y) × 100. Example: 50 is what % of 200 = (50 / 200) × 100 = 25%.",
      },
      {
        q: "What is percentage change?",
        a: "Percentage change measures how much a value has changed relative to its original value. Formula: ((New - Old) / Old) × 100. A positive result means increase, negative means decrease.",
      },
      {
        q: "Can percentages exceed 100%?",
        a: "Yes. A percentage greater than 100% means the new value exceeds the original (e.g., growing from 50 to 150 is a 200% increase). Percentages can also be negative for decreases.",
      },
    ],
  },

  tr: {
    title: "Yüzde Hesaplayıcı",
    short: "Yüzdeleri anında hesapla: X'in %Y'si, X'in kaçıncı yüzdesi Y'dir, veya yüzde değişim.",
    description:
      "Ücretsiz 3-in-1 yüzde hesaplayıcı. X'in %Y'sini bul, X'in Y'nin kaçıncı yüzdesini hesapla veya iki değer arasındaki yüzde değişimini hesapla.",
    keywords: [
      "yüzde hesaplayıcı",
      "yüzde",
      "yüzde değişim hesaplayıcı",
      "yüzde nedir",
      "yüzde hesaplama",
    ],
    inputs: {
      mode: {
        label: "Problem türü",
        help: "Neyi hesaplamak istediğinizi seçin",
      },
      x: {
        label: "Birinci değer",
        help: "Yüzde veya parça (problem türüne bağlı olarak değişir)",
      },
      y: {
        label: "İkinci değer",
        help: "Taban veya bütün (problem türüne bağlı olarak değişir)",
      },
    },
    outputs: {
      result: {
        label: "Sonuç",
        help: "Hesaplanan sonuç",
      },
      explanation: {
        label: "Açıklama",
        help: "Adım adım çözüm",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "X'in %Y'si",
        "x_is_what_pct_of_y": "X, Y'nin kaçıncı yüzdesini oluşturur",
        "pct_change": "X'ten Y'ye yüzde değişim",
      },
    },
    errors: {
      divideByZero: "Sıfıra bölme yapılamaz",
    },
    faq: [
      {
        q: "Yüzde ne demek?",
        a: "Yüzde (%) 'yüzde bir' anlamına gelir. Örneğin, %25 = 100'de 25 = 0,25 olarak yazılır.",
      },
      {
        q: "X'in %Y'sini nasıl hesaplarım?",
        a: "Y'yi X'e bölün ve 100 ile çarpın. Formül: (X / 100) × Y. Örnek: 200'ün %25'i = (25 / 100) × 200 = 50.",
      },
      {
        q: "X, Y'nin kaçıncı yüzdesini oluşturur?",
        a: "X'i Y'ye bölün ve 100 ile çarpın. Formül: (X / Y) × 100. Örnek: 50, 200'ün %25'i = (50 / 200) × 100 = 25%.",
      },
      {
        q: "Yüzde değişim nedir?",
        a: "Yüzde değişim, bir değerin orijinal değerine göre ne kadar değiştiğini gösterir. Formül: ((Yeni - Eski) / Eski) × 100. Pozitif sonuç artışı, negatif sonuç azalışı gösterir.",
      },
      {
        q: "Yüzde 100'den fazla olabilir mi?",
        a: "Evet. %100'den büyük yüzde, yeni değerin orijinalini aştığı anlamına gelir (örn., 50'den 150'ye geçiş %200 artışıdır). Yüzde negatif de olabilir.",
      },
    ],
  },

  de: {
    title: "Prozentrechner",
    short: "Berechne Prozente sofort: X% von Y, X ist wieviel % von Y, oder prozentuale Änderung.",
    description:
      "Kostenloser 3-in-1-Prozentrechner. Finde X% von Y, berechne den Prozentsatz von X zu Y oder die prozentuale Änderung zwischen zwei Werten.",
    keywords: [
      "Prozentrechner",
      "Prozentrechnung",
      "Prozentuale Änderung",
      "Prozentsatz berechnen",
      "Prozent von",
    ],
    inputs: {
      mode: {
        label: "Problemtyp",
        help: "Wähle, was du berechnen möchtest",
      },
      x: {
        label: "Erster Wert",
        help: "Prozentsatz oder Teil (variiert je nach Problemtyp)",
      },
      y: {
        label: "Zweiter Wert",
        help: "Basis oder Ganzes (variiert je nach Problemtyp)",
      },
    },
    outputs: {
      result: {
        label: "Ergebnis",
        help: "Berechnetes Ergebnis",
      },
      explanation: {
        label: "Erklärung",
        help: "Schrittweise Aufschlüsselung",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "X% von Y",
        "x_is_what_pct_of_y": "X ist wieviel % von Y",
        "pct_change": "Prozentuale Änderung von X zu Y",
      },
    },
    errors: {
      divideByZero: "Kann nicht durch Null dividieren",
    },
    faq: [
      {
        q: "Was bedeutet 'Prozent'?",
        a: "Prozent (%) bedeutet 'pro Hundert'. Zum Beispiel bedeutet 25% 25 von 100, oder 0,25 als Dezimalzahl.",
      },
      {
        q: "Wie berechne ich X% von Y?",
        a: "Multipliziere Y mit X und dividiere durch 100. Formel: (X / 100) × Y. Beispiel: 25% von 200 = (25 / 100) × 200 = 50.",
      },
      {
        q: "Wie finde ich heraus, wieviel Prozent X von Y ist?",
        a: "Dividiere X durch Y und multipliziere mit 100. Formel: (X / Y) × 100. Beispiel: 50 ist wieviel % von 200 = (50 / 200) × 100 = 25%.",
      },
      {
        q: "Was ist prozentuale Änderung?",
        a: "Prozentuale Änderung misst, wie sehr sich ein Wert im Vergleich zum Originalwert verändert hat. Formel: ((Neu - Alt) / Alt) × 100. Positives Ergebnis bedeutet Zunahme, negatives Abnahme.",
      },
      {
        q: "Können Prozentsätze über 100% liegen?",
        a: "Ja. Ein Prozentsatz größer als 100% bedeutet, dass der neue Wert das Original übersteigt (z.B. Wachstum von 50 auf 150 ist eine Steigerung von 200%). Prozentsätze können auch negativ sein.",
      },
    ],
  },

  fr: {
    title: "Calculatrice de Pourcentage",
    short: "Calculez instantanément les pourcentages : X % de Y, X est quel % de Y, ou variation en pourcentage.",
    description:
      "Calculatrice de pourcentage 3-en-1 gratuite. Trouvez X % de Y, calculez quel pourcentage X représente de Y ou la variation en pourcentage entre deux valeurs.",
    keywords: [
      "calculatrice de pourcentage",
      "pourcentage",
      "variation en pourcentage",
      "quel pourcentage de",
      "calcul de pourcentage",
    ],
    inputs: {
      mode: {
        label: "Type de problème",
        help: "Choisissez ce que vous souhaitez calculer",
      },
      x: {
        label: "Première valeur",
        help: "Pourcentage ou partie (varie selon le type de problème)",
      },
      y: {
        label: "Deuxième valeur",
        help: "Base ou tout (varie selon le type de problème)",
      },
    },
    outputs: {
      result: {
        label: "Résultat",
        help: "Résultat calculé",
      },
      explanation: {
        label: "Explication",
        help: "Ventilation étape par étape",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "X % de Y",
        "x_is_what_pct_of_y": "X est quel % de Y",
        "pct_change": "Variation en pourcentage de X à Y",
      },
    },
    errors: {
      divideByZero: "Impossible de diviser par zéro",
    },
    faq: [
      {
        q: "Qu'est-ce qu'un pourcentage ?",
        a: "Un pourcentage (%) signifie 'pour cent'. Par exemple, 25 % signifie 25 sur 100, ou 0,25 sous forme décimale.",
      },
      {
        q: "Comment calculer X % de Y ?",
        a: "Multipliez Y par X et divisez par 100. Formule : (X / 100) × Y. Exemple : 25 % de 200 = (25 / 100) × 200 = 50.",
      },
      {
        q: "Comment trouver quel pourcentage X représente de Y ?",
        a: "Divisez X par Y et multipliez par 100. Formule : (X / Y) × 100. Exemple : 50 est quel % de 200 = (50 / 200) × 100 = 25 %.",
      },
      {
        q: "Qu'est-ce que la variation en pourcentage ?",
        a: "La variation en pourcentage mesure le changement d'une valeur par rapport à sa valeur d'origine. Formule : ((Nouveau - Ancien) / Ancien) × 100. Un résultat positif indique une augmentation, un résultat négatif une diminution.",
      },
      {
        q: "Les pourcentages peuvent-ils dépasser 100 % ?",
        a: "Oui. Un pourcentage supérieur à 100 % signifie que la nouvelle valeur dépasse l'original (par exemple, passer de 50 à 150 est une augmentation de 200 %). Les pourcentages peuvent également être négatifs.",
      },
    ],
  },

  es: {
    title: "Calculadora de Porcentajes",
    short: "Calcula porcentajes al instante: X% de Y, X es qué % de Y, o cambio porcentual.",
    description:
      "Calculadora de porcentajes 3 en 1 gratuita. Encuentra X% de Y, calcula qué porcentaje es X de Y o la variación porcentual entre dos valores.",
    keywords: [
      "calculadora de porcentajes",
      "porcentaje",
      "calculadora de cambio porcentual",
      "qué porcentaje de",
      "cálculo de porcentajes",
    ],
    inputs: {
      mode: {
        label: "Tipo de problema",
        help: "Elige qué quieres calcular",
      },
      x: {
        label: "Primer valor",
        help: "Porcentaje o parte (varía según el tipo de problema)",
      },
      y: {
        label: "Segundo valor",
        help: "Base o todo (varía según el tipo de problema)",
      },
    },
    outputs: {
      result: {
        label: "Resultado",
        help: "Resultado calculado",
      },
      explanation: {
        label: "Explicación",
        help: "Desglose paso a paso",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "X% de Y",
        "x_is_what_pct_of_y": "X es qué % de Y",
        "pct_change": "Cambio porcentual de X a Y",
      },
    },
    errors: {
      divideByZero: "No se puede dividir por cero",
    },
    faq: [
      {
        q: "¿Qué significa porcentaje?",
        a: "Porcentaje (%) significa 'por ciento'. Por ejemplo, 25% significa 25 de 100, o 0,25 como decimal.",
      },
      {
        q: "¿Cómo calculo X% de Y?",
        a: "Multiplica Y por X y divide entre 100. Fórmula: (X / 100) × Y. Ejemplo: 25% de 200 = (25 / 100) × 200 = 50.",
      },
      {
        q: "¿Cómo encuentro qué porcentaje es X de Y?",
        a: "Divide X entre Y y multiplica por 100. Fórmula: (X / Y) × 100. Ejemplo: 50 es qué % de 200 = (50 / 200) × 100 = 25%.",
      },
      {
        q: "¿Qué es el cambio porcentual?",
        a: "El cambio porcentual mide cuánto ha cambiado un valor en relación con su valor original. Fórmula: ((Nuevo - Antiguo) / Antiguo) × 100. Un resultado positivo significa aumento, negativo significa disminución.",
      },
      {
        q: "¿Los porcentajes pueden ser mayores que 100%?",
        a: "Sí. Un porcentaje mayor que 100% significa que el nuevo valor excede al original (por ejemplo, aumentar de 50 a 150 es un aumento de 200%). Los porcentajes también pueden ser negativos.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Percentuale",
    short: "Calcola percentuali al istante: X% di Y, X è quale % di Y, o variazione percentuale.",
    description:
      "Calcolatore di percentuale 3 in 1 gratuito. Trova X% di Y, calcola quale percentuale X rappresenta di Y o la variazione percentuale tra due valori.",
    keywords: [
      "calcolatore di percentuale",
      "percentuale",
      "calcolatore di variazione percentuale",
      "quale percentuale di",
      "calcolo percentuale",
    ],
    inputs: {
      mode: {
        label: "Tipo di problema",
        help: "Scegli cosa vuoi calcolare",
      },
      x: {
        label: "Primo valore",
        help: "Percentuale o parte (varia a seconda del tipo di problema)",
      },
      y: {
        label: "Secondo valore",
        help: "Base o tutto (varia a seconda del tipo di problema)",
      },
    },
    outputs: {
      result: {
        label: "Risultato",
        help: "Risultato calcolato",
      },
      explanation: {
        label: "Spiegazione",
        help: "Suddivisione passo dopo passo",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "X% di Y",
        "x_is_what_pct_of_y": "X è quale % di Y",
        "pct_change": "Variazione percentuale da X a Y",
      },
    },
    errors: {
      divideByZero: "Impossibile dividere per zero",
    },
    faq: [
      {
        q: "Cosa significa percentuale?",
        a: "Percentuale (%) significa 'per cento'. Ad esempio, 25% significa 25 su 100, o 0,25 come decimale.",
      },
      {
        q: "Come calcolo il X% di Y?",
        a: "Moltiplica Y per X e dividi per 100. Formula: (X / 100) × Y. Esempio: 25% di 200 = (25 / 100) × 200 = 50.",
      },
      {
        q: "Come trovo quale percentuale X rappresenta di Y?",
        a: "Dividi X per Y e moltiplica per 100. Formula: (X / Y) × 100. Esempio: 50 è quale % di 200 = (50 / 200) × 100 = 25%.",
      },
      {
        q: "Cos'è la variazione percentuale?",
        a: "La variazione percentuale misura quanto un valore è cambiato rispetto al suo valore originale. Formula: ((Nuovo - Vecchio) / Vecchio) × 100. Un risultato positivo indica un aumento, uno negativo una diminuzione.",
      },
      {
        q: "Le percentuali possono essere maggiori del 100%?",
        a: "Sì. Una percentuale maggiore del 100% significa che il nuovo valore supera l'originale (ad esempio, aumentare da 50 a 150 è un aumento del 200%). Le percentuali possono anche essere negative.",
      },
    ],
  },

  ar: {
    title: "آلة حاسبة النسبة المئوية",
    short: "احسب النسب المئوية فورًا: X٪ من Y، X كم٪ من Y، أو التغير النسبة المئوية.",
    description:
      "آلة حاسبة نسبة مئوية 3 في 1 مجانية. ابحث عن X٪ من Y، احسب ما هي نسبة X إلى Y أو التغير النسبة المئوية بين قيمتين.",
    keywords: [
      "آلة حاسبة النسبة المئوية",
      "النسبة المئوية",
      "حاسبة التغير النسبة المئوية",
      "ما هي النسبة المئوية",
      "حساب النسبة المئوية",
    ],
    inputs: {
      mode: {
        label: "نوع المشكلة",
        help: "اختر ما تريد حسابه",
      },
      x: {
        label: "القيمة الأولى",
        help: "النسبة المئوية أو الجزء (يختلف حسب نوع المشكلة)",
      },
      y: {
        label: "القيمة الثانية",
        help: "القاعدة أو الكل (يختلف حسب نوع المشكلة)",
      },
    },
    outputs: {
      result: {
        label: "النتيجة",
        help: "النتيجة المحسوبة",
      },
      explanation: {
        label: "الشرح",
        help: "تفصيل خطوة بخطوة",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "X٪ من Y",
        "x_is_what_pct_of_y": "X كم٪ من Y",
        "pct_change": "التغير النسبة المئوية من X إلى Y",
      },
    },
    errors: {
      divideByZero: "لا يمكن القسمة على صفر",
    },
    faq: [
      {
        q: "ما معنى النسبة المئوية؟",
        a: "النسبة المئوية (٪) تعني 'لكل مائة'. على سبيل المثال، 25٪ تعني 25 من 100، أو 0.25 كعدد عشري.",
      },
      {
        q: "كيف أحسب X٪ من Y؟",
        a: "اضرب Y في X واقسم على 100. الصيغة: (X / 100) × Y. مثال: 25٪ من 200 = (25 / 100) × 200 = 50.",
      },
      {
        q: "كيف أعرف ما هي نسبة X من Y؟",
        a: "اقسم X على Y واضرب في 100. الصيغة: (X / Y) × 100. مثال: 50 كم٪ من 200 = (50 / 200) × 100 = 25٪.",
      },
      {
        q: "ما هو التغير النسبة المئوية؟",
        a: "يقيس التغير النسبة المئوية مقدار تغير القيمة بالنسبة للقيمة الأصلية. الصيغة: ((جديد - قديم) / قديم) × 100. النتيجة الموجبة تعني زيادة، والسالبة تعني نقصان.",
      },
      {
        q: "هل يمكن أن تكون النسب المئوية أكثر من 100٪؟",
        a: "نعم. النسبة المئوية الأكبر من 100٪ تعني أن القيمة الجديدة تتجاوز الأصلية (مثلاً، الزيادة من 50 إلى 150 هي زيادة بنسبة 200٪). يمكن أن تكون النسب المئوية سالبة أيضًا.",
      },
    ],
  },

  ru: {
    title: "Калькулятор Процентов",
    short: "Рассчитайте проценты мгновенно: X% от Y, X это сколько % от Y, или процентное изменение.",
    description:
      "Бесплатный 3-в-1 калькулятор процентов. Найдите X% от Y, рассчитайте какой процент составляет X от Y или процентное изменение между двумя значениями.",
    keywords: [
      "калькулятор процентов",
      "процент",
      "калькулятор процентного изменения",
      "какой процент от",
      "расчет процентов",
    ],
    inputs: {
      mode: {
        label: "Тип задачи",
        help: "Выберите, что вы хотите рассчитать",
      },
      x: {
        label: "Первое значение",
        help: "Процент или часть (зависит от типа задачи)",
      },
      y: {
        label: "Второе значение",
        help: "Основание или целое (зависит от типа задачи)",
      },
    },
    outputs: {
      result: {
        label: "Результат",
        help: "Рассчитанный результат",
      },
      explanation: {
        label: "Объяснение",
        help: "Пошаговое объяснение",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "X% от Y",
        "x_is_what_pct_of_y": "X это сколько % от Y",
        "pct_change": "Процентное изменение от X к Y",
      },
    },
    errors: {
      divideByZero: "Невозможно делить на ноль",
    },
    faq: [
      {
        q: "Что такое процент?",
        a: "Процент (%) означает 'на сто'. Например, 25% означает 25 из 100, или 0,25 в виде десятичной дроби.",
      },
      {
        q: "Как рассчитать X% от Y?",
        a: "Умножьте Y на X и разделите на 100. Формула: (X / 100) × Y. Пример: 25% от 200 = (25 / 100) × 200 = 50.",
      },
      {
        q: "Как найти какой процент составляет X от Y?",
        a: "Разделите X на Y и умножьте на 100. Формула: (X / Y) × 100. Пример: 50 это сколько % от 200 = (50 / 200) × 100 = 25%.",
      },
      {
        q: "Что такое процентное изменение?",
        a: "Процентное изменение показывает, насколько значение изменилось относительно исходного. Формула: ((Новое - Старое) / Старое) × 100. Положительный результат - это увеличение, отрицательный - уменьшение.",
      },
      {
        q: "Может ли процент быть больше 100%?",
        a: "Да. Процент больше 100% означает, что новое значение превышает исходное (например, увеличение с 50 до 150 это увеличение на 200%). Проценты могут быть и отрицательными.",
      },
    ],
  },

  zh: {
    title: "百分比计算器",
    short: "即时计算百分比：X% 的 Y、X 是 Y 的多少%，或百分比变化。",
    description:
      "免费 3 合 1 百分比计算器。找出 X% 的 Y、计算 X 是 Y 的多少百分比，或计算两个值之间的百分比变化。",
    keywords: [
      "百分比计算器",
      "百分比",
      "百分比变化计算器",
      "占比",
      "百分比计算",
    ],
    inputs: {
      mode: {
        label: "问题类型",
        help: "选择您要计算的内容",
      },
      x: {
        label: "第一个值",
        help: "百分比或部分（因问题类型而异）",
      },
      y: {
        label: "第二个值",
        help: "基数或整数（因问题类型而异）",
      },
    },
    outputs: {
      result: {
        label: "结果",
        help: "计算结果",
      },
      explanation: {
        label: "解释",
        help: "逐步分解",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "X% 的 Y",
        "x_is_what_pct_of_y": "X 是 Y 的多少%",
        "pct_change": "从 X 到 Y 的百分比变化",
      },
    },
    errors: {
      divideByZero: "不能除以零",
    },
    faq: [
      {
        q: "百分比是什么意思？",
        a: "百分比（%）是指「百分之一」。例如，25% 意味着 100 中的 25，或作为小数的 0.25。",
      },
      {
        q: "如何计算 X% 的 Y？",
        a: "将 Y 乘以 X 然后除以 100。公式：(X / 100) × Y。例子：200 的 25% = (25 / 100) × 200 = 50。",
      },
      {
        q: "如何找到 X 是 Y 的多少百分比？",
        a: "将 X 除以 Y 然后乘以 100。公式：(X / Y) × 100。例子：50 是 200 的多少% = (50 / 200) × 100 = 25%。",
      },
      {
        q: "什么是百分比变化？",
        a: "百分比变化测量相对于原始值的变化量。公式：((新 - 旧) / 旧) × 100。正结果表示增加，负结果表示减少。",
      },
      {
        q: "百分比可以超过 100% 吗？",
        a: "是的。超过 100% 的百分比意味着新值超过了原始值（例如，从 50 增加到 150 是 200% 的增加）。百分比也可以是负数。",
      },
    ],
  },

  ja: {
    title: "パーセント計算機",
    short: "パーセンテージを即座に計算：Y の X％、X は Y の何％、またはパーセンテージの変化。",
    description:
      "無料の 3 合 1 パーセント計算機。Y の X％を見つけ、X が Y の何パーセントであるかを計算し、2 つの値間のパーセンテージの変化を計算します。",
    keywords: [
      "パーセント計算機",
      "パーセンテージ",
      "パーセンテージ変化計算機",
      "何パーセント",
      "パーセント計算",
    ],
    inputs: {
      mode: {
        label: "問題の種類",
        help: "計算したいものを選択してください",
      },
      x: {
        label: "最初の値",
        help: "パーセンテージまたは部分（問題の種類によって異なります）",
      },
      y: {
        label: "2 番目の値",
        help: "ベースまたは全体（問題の種類によって異なります）",
      },
    },
    outputs: {
      result: {
        label: "結果",
        help: "計算結果",
      },
      explanation: {
        label: "説明",
        help: "ステップバイステップの内訳",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "Y の X％",
        "x_is_what_pct_of_y": "X は Y の何％",
        "pct_change": "X から Y へのパーセンテージの変化",
      },
    },
    errors: {
      divideByZero: "ゼロで除算することはできません",
    },
    faq: [
      {
        q: "パーセンテージとは何ですか？",
        a: "パーセンテージ（％）は「100 分の」を意味します。たとえば、25％は 100 のうち 25、または小数として 0.25 を意味します。",
      },
      {
        q: "Y の X％ を計算するにはどうすればよいですか？",
        a: "Y に X を掛け、100 で割ります。公式：(X / 100) × Y。例：200 の 25％ = (25 / 100) × 200 = 50。",
      },
      {
        q: "X が Y の何パーセントであるかを見つけるにはどうすればよいですか？",
        a: "X を Y で割り、100 を掛けます。公式：(X / Y) × 100。例：50 は 200 の何％ = (50 / 200) × 100 = 25％。",
      },
      {
        q: "パーセンテージの変化とは何ですか？",
        a: "パーセンテージの変化は、元の値に対する値の変化量を測定します。公式：((新 - 旧) / 旧) × 100。正の結果は増加、負の結果は減少を示します。",
      },
      {
        q: "パーセンテージが 100％を超える可能性はありますか？",
        a: "はい。100％を超えるパーセンテージは、新しい値が元の値を超えていることを意味します（たとえば、50 から 150 への増加は 200％の増加です）。パーセンテージは負の値にもなります。",
      },
    ],
  },

  ko: {
    title: "백분율 계산기",
    short: "백분율을 즉시 계산: Y의 X%, X는 Y의 몇 %, 또는 백분율 변화.",
    description:
      "무료 3합1 백분율 계산기. Y의 X%를 찾고, X가 Y의 몇 퍼센트인지 계산하고, 두 값 간의 백분율 변화를 계산합니다.",
    keywords: [
      "백분율 계산기",
      "백분율",
      "백분율 변화 계산기",
      "몇 퍼센트",
      "백분율 계산",
    ],
    inputs: {
      mode: {
        label: "문제 유형",
        help: "계산하려는 것을 선택하세요",
      },
      x: {
        label: "첫 번째 값",
        help: "백분율 또는 부분 (문제 유형에 따라 다름)",
      },
      y: {
        label: "두 번째 값",
        help: "기본 또는 전체 (문제 유형에 따라 다름)",
      },
    },
    outputs: {
      result: {
        label: "결과",
        help: "계산된 결과",
      },
      explanation: {
        label: "설명",
        help: "단계별 분석",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "Y의 X%",
        "x_is_what_pct_of_y": "X는 Y의 몇 %",
        "pct_change": "X에서 Y로의 백분율 변화",
      },
    },
    errors: {
      divideByZero: "0으로 나눌 수 없습니다",
    },
    faq: [
      {
        q: "백분율이란 무엇입니까?",
        a: "백분율(%)은 '백분의'를 의미합니다. 예를 들어 25%는 100 중 25 또는 소수로 0.25를 의미합니다.",
      },
      {
        q: "Y의 X%를 계산하려면 어떻게 해야 합니까?",
        a: "Y에 X를 곱하고 100으로 나눕니다. 공식: (X / 100) × Y. 예: 200의 25% = (25 / 100) × 200 = 50.",
      },
      {
        q: "X가 Y의 몇 퍼센트인지 찾으려면 어떻게 해야 합니까?",
        a: "X를 Y로 나누고 100을 곱합니다. 공식: (X / Y) × 100. 예: 50은 200의 몇 % = (50 / 200) × 100 = 25%.",
      },
      {
        q: "백분율 변화란 무엇입니까?",
        a: "백분율 변화는 원래 값에 대한 값의 변화량을 측정합니다. 공식: ((신규 - 구형) / 구형) × 100. 양수 결과는 증가, 음수는 감소를 나타냅니다.",
      },
      {
        q: "백분율이 100%보다 클 수 있습니까?",
        a: "네. 100%보다 큰 백분율은 새 값이 원래 값을 초과함을 의미합니다(예: 50에서 150으로 증가는 200% 증가). 백분율은 음수일 수도 있습니다.",
      },
    ],
  },

  hi: {
    title: "प्रतिशत कैलकुलेटर",
    short: "तुरंत प्रतिशत की गणना करें: Y का X%, X, Y का कितना %, या प्रतिशत परिवर्तन।",
    description:
      "मुफ्त 3-इन-1 प्रतिशत कैलकुलेटर। Y का X% खोजें, X, Y का कितना प्रतिशत है इसकी गणना करें, या दो मानों के बीच प्रतिशत परिवर्तन की गणना करें।",
    keywords: [
      "प्रतिशत कैलकुलेटर",
      "प्रतिशत",
      "प्रतिशत परिवर्तन कैलकुलेटर",
      "कितना प्रतिशत",
      "प्रतिशत गणना",
    ],
    inputs: {
      mode: {
        label: "समस्या प्रकार",
        help: "चुनें कि आप क्या गणना करना चाहते हैं",
      },
      x: {
        label: "पहला मान",
        help: "प्रतिशत या भाग (समस्या प्रकार के अनुसार भिन्न)",
      },
      y: {
        label: "दूसरा मान",
        help: "आधार या संपूर्ण (समस्या प्रकार के अनुसार भिन्न)",
      },
    },
    outputs: {
      result: {
        label: "परिणाम",
        help: "गणना किया गया परिणाम",
      },
      explanation: {
        label: "व्याख्या",
        help: "चरण-दर-चरण विवरण",
      },
    },
    options: {
      mode: {
        "what_is_x_pct_of_y": "Y का X%",
        "x_is_what_pct_of_y": "X, Y का कितना %",
        "pct_change": "X से Y तक प्रतिशत परिवर्तन",
      },
    },
    errors: {
      divideByZero: "शून्य से विभाजन नहीं हो सकता",
    },
    faq: [
      {
        q: "प्रतिशत का क्या मतलब है?",
        a: "प्रतिशत (%) का मतलब 'प्रति सौ' है। उदाहरण के लिए, 25% का मतलब 100 में से 25, या दशमलव के रूप में 0.25।",
      },
      {
        q: "मैं Y का X% कैसे गणना करूं?",
        a: "Y को X से गुणा करें और 100 से विभाजित करें। सूत्र: (X / 100) × Y। उदाहरण: 200 का 25% = (25 / 100) × 200 = 50।",
      },
      {
        q: "मैं X, Y का कितना प्रतिशत है यह कैसे पता करूं?",
        a: "X को Y से विभाजित करें और 100 से गुणा करें। सूत्र: (X / Y) × 100। उदाहरण: 50, 200 का कितना % = (50 / 200) × 100 = 25%।",
      },
      {
        q: "प्रतिशत परिवर्तन क्या है?",
        a: "प्रतिशत परिवर्तन मापता है कि एक मान अपने मूल मान के सापेक्ष कितना बदल गया है। सूत्र: ((नया - पुराना) / पुराना) × 100। सकारात्मक परिणाम वृद्धि, नकारात्मक का मतलब कमी है।",
      },
      {
        q: "क्या प्रतिशत 100% से अधिक हो सकता है?",
        a: "हां। 100% से अधिक प्रतिशत का मतलब है कि नया मान मूल से अधिक है (उदाहरण के लिए, 50 से 150 तक वृद्धि 200% वृद्धि है)। प्रतिशत नकारात्मक भी हो सकता है।",
      },
    ],
  },
};

export default i18n;
