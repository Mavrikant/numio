import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Z-Score Calculator",
    short: "Calculate z-scores, percentiles, and p-values to standardize and interpret data relative to a normal distribution.",
    description:
      "Free z-score calculator. Find the standardized score, percentile rank, one-tailed and two-tailed p-values for hypothesis testing and statistical analysis.",
    keywords: [
      "z-score calculator",
      "percentile calculator",
      "p-value calculator",
      "standard normal distribution",
      "hypothesis testing",
      "statistical significance",
      "normal distribution",
    ],
    inputs: {
      value: {
        label: "Observed value (x)",
        help: "The data point you want to standardize.",
      },
      mean: {
        label: "Mean (μ)",
        help: "The average of your dataset or population.",
      },
      standardDeviation: {
        label: "Standard deviation (σ)",
        help: "Measure of spread in the data. Must be positive.",
      },
    },
    outputs: {
      zScore: {
        label: "Z-Score",
        help: "Standardized score showing how many standard deviations the value is from the mean.",
      },
      percentile: {
        label: "Percentile",
        help: "Percentage of values below your observed value in a normal distribution.",
      },
      oneTailPValue: {
        label: "P-Value (one-tailed)",
        help: "Probability of observing a value as extreme or more extreme in one direction.",
      },
      twoTailPValue: {
        label: "P-Value (two-tailed)",
        help: "Probability of observing a value as extreme or more extreme in either direction.",
      },
      interpretation: {
        label: "Interpretation",
        help: "How many standard deviations the value is from the mean (1σ, 2σ, 3σ, or extreme).",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "Standard deviation must be positive.",
    },
    faq: [
      {
        q: "What does a z-score of 0 mean?",
        a: "A z-score of 0 means the value equals the mean. Negative z-scores indicate values below the mean, positive z-scores indicate values above the mean.",
      },
      {
        q: "What does a percentile tell me?",
        a: "A percentile tells you what percentage of values in a normal distribution fall below your observed value. For example, a 84th percentile means 84% of values are below yours.",
      },
      {
        q: "How do I use z-scores for hypothesis testing?",
        a: "Compare the p-value to your significance level (typically 0.05). If p-value < 0.05, the result is statistically significant. Use one-tailed for directional tests, two-tailed for non-directional.",
      },
      {
        q: "What is the 68-95-99.7 rule?",
        a: "In a normal distribution: ~68% of values fall within 1 standard deviation, ~95% within 2 standard deviations, and ~99.7% within 3 standard deviations of the mean.",
      },
      {
        q: "What is the difference between one-tailed and two-tailed p-values?",
        a: "One-tailed p-values test if a value is extreme in one specific direction. Two-tailed p-values test if a value is extreme in either direction and are generally more conservative.",
      },
    ],
  },
  pt: {
    title: "Z-Score Calculator",
    short: "Calculate z-scores, percentiles, and p-values to standardize and interpret data relative to a normal distribution.",
    description:
      "Free z-score calculator. Find the standardized score, percentile rank, one-tailed and two-tailed p-values for hypothesis testing and statistical analysis.",
    keywords: [
      "z-score calculator",
      "percentile calculator",
      "p-value calculator",
      "standard normal distribution",
      "hypothesis testing",
      "statistical significance",
      "normal distribution",
    ],
    inputs: {
      value: {
        label: "Observed value (x)",
        help: "The data point you want to standardize.",
      },
      mean: {
        label: "Mean (μ)",
        help: "The average of your dataset or population.",
      },
      standardDeviation: {
        label: "Standard deviation (σ)",
        help: "Measure of spread in the data. Must be positive.",
      },
    },
    outputs: {
      zScore: {
        label: "Z-Score",
        help: "Standardized score showing how many standard deviations the value is from the mean.",
      },
      percentile: {
        label: "Percentile",
        help: "Percentage of values below your observed value in a normal distribution.",
      },
      oneTailPValue: {
        label: "P-Value (one-tailed)",
        help: "Probability of observing a value as extreme or more extreme in one direction.",
      },
      twoTailPValue: {
        label: "P-Value (two-tailed)",
        help: "Probability of observing a value as extreme or more extreme in either direction.",
      },
      interpretation: {
        label: "Interpretation",
        help: "How many standard deviations the value is from the mean (1σ, 2σ, 3σ, or extreme).",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "Standard deviation must be positive.",
    },
    faq: [
      {
        q: "What does a z-score of 0 mean?",
        a: "A z-score of 0 means the value equals the mean. Negative z-scores indicate values below the mean, positive z-scores indicate values above the mean.",
      },
      {
        q: "What does a percentile tell me?",
        a: "A percentile tells you what percentage of values in a normal distribution fall below your observed value. For example, a 84th percentile means 84% of values are below yours.",
      },
      {
        q: "How do I use z-scores for hypothesis testing?",
        a: "Compare the p-value to your significance level (typically 0.05). If p-value < 0.05, the result is statistically significant. Use one-tailed for directional tests, two-tailed for non-directional.",
      },
      {
        q: "What is the 68-95-99.7 rule?",
        a: "In a normal distribution: ~68% of values fall within 1 standard deviation, ~95% within 2 standard deviations, and ~99.7% within 3 standard deviations of the mean.",
      },
      {
        q: "What is the difference between one-tailed and two-tailed p-values?",
        a: "One-tailed p-values test if a value is extreme in one specific direction. Two-tailed p-values test if a value is extreme in either direction and are generally more conservative.",
      },
    ],
  },
  id: {
    title: "Z-Score Calculator",
    short: "Calculate z-scores, percentiles, and p-values to standardize and interpret data relative to a normal distribution.",
    description:
      "Free z-score calculator. Find the standardized score, percentile rank, one-tailed and two-tailed p-values for hypothesis testing and statistical analysis.",
    keywords: [
      "z-score calculator",
      "percentile calculator",
      "p-value calculator",
      "standard normal distribution",
      "hypothesis testing",
      "statistical significance",
      "normal distribution",
    ],
    inputs: {
      value: {
        label: "Observed value (x)",
        help: "The data point you want to standardize.",
      },
      mean: {
        label: "Mean (μ)",
        help: "The average of your dataset or population.",
      },
      standardDeviation: {
        label: "Standard deviation (σ)",
        help: "Measure of spread in the data. Must be positive.",
      },
    },
    outputs: {
      zScore: {
        label: "Z-Score",
        help: "Standardized score showing how many standard deviations the value is from the mean.",
      },
      percentile: {
        label: "Percentile",
        help: "Percentage of values below your observed value in a normal distribution.",
      },
      oneTailPValue: {
        label: "P-Value (one-tailed)",
        help: "Probability of observing a value as extreme or more extreme in one direction.",
      },
      twoTailPValue: {
        label: "P-Value (two-tailed)",
        help: "Probability of observing a value as extreme or more extreme in either direction.",
      },
      interpretation: {
        label: "Interpretation",
        help: "How many standard deviations the value is from the mean (1σ, 2σ, 3σ, or extreme).",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "Standard deviation must be positive.",
    },
    faq: [
      {
        q: "What does a z-score of 0 mean?",
        a: "A z-score of 0 means the value equals the mean. Negative z-scores indicate values below the mean, positive z-scores indicate values above the mean.",
      },
      {
        q: "What does a percentile tell me?",
        a: "A percentile tells you what percentage of values in a normal distribution fall below your observed value. For example, a 84th percentile means 84% of values are below yours.",
      },
      {
        q: "How do I use z-scores for hypothesis testing?",
        a: "Compare the p-value to your significance level (typically 0.05). If p-value < 0.05, the result is statistically significant. Use one-tailed for directional tests, two-tailed for non-directional.",
      },
      {
        q: "What is the 68-95-99.7 rule?",
        a: "In a normal distribution: ~68% of values fall within 1 standard deviation, ~95% within 2 standard deviations, and ~99.7% within 3 standard deviations of the mean.",
      },
      {
        q: "What is the difference between one-tailed and two-tailed p-values?",
        a: "One-tailed p-values test if a value is extreme in one specific direction. Two-tailed p-values test if a value is extreme in either direction and are generally more conservative.",
      },
    ],
  },


  tr: {
    title: "Z-Puan Hesaplayıcı",
    short: "Verileri normal dağılıma göre standartlaştırmak ve yorumlamak için z-puanı, yüzdelik sıra ve p-değeri hesaplayın.",
    description:
      "Ücretsiz z-puan hesaplayıcı. Hipotez testi ve istatistiksel analiz için standartlaştırılmış puan, yüzdelik sıra, tek ve iki yönlü p-değeri bulun.",
    keywords: [
      "z-puan hesaplayıcı",
      "yüzdelik sıra hesaplayıcı",
      "p-değeri hesaplayıcı",
      "standart normal dağılım",
      "hipotez testi",
      "istatistiksel anlamlılık",
      "normal dağılım",
    ],
    inputs: {
      value: {
        label: "Gözlenen değer (x)",
        help: "Standartlaştırmak istediğiniz veri noktası.",
      },
      mean: {
        label: "Ortalama (μ)",
        help: "Veri setinizin veya popülasyonunun ortalaması.",
      },
      standardDeviation: {
        label: "Standart sapma (σ)",
        help: "Verilerdeki yayılımın ölçüsü. Pozitif olmalıdır.",
      },
    },
    outputs: {
      zScore: {
        label: "Z-Puan",
        help: "Standartlaştırılmış puan; değerin ortalamadan kaç standart sapma uzakta olduğunu gösterir.",
      },
      percentile: {
        label: "Yüzdelik Sıra",
        help: "Normal dağılımda gözlenen değerin altında kalan değerlerin yüzdesi.",
      },
      oneTailPValue: {
        label: "P-Değeri (tek yönlü)",
        help: "Bir yönde bu kadar aşırı veya daha aşırı bir değer gözlemleme olasılığı.",
      },
      twoTailPValue: {
        label: "P-Değeri (iki yönlü)",
        help: "Her iki yönde de bu kadar aşırı veya daha aşırı bir değer gözlemleme olasılığı.",
      },
      interpretation: {
        label: "Yorumlama",
        help: "Değerin ortalamadan kaç standart sapma uzakta olduğu (1σ, 2σ, 3σ veya aşırı).",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "Standart sapma pozitif olmalıdır.",
    },
    faq: [
      {
        q: "Z-puan 0 ne anlama gelir?",
        a: "Z-puan 0 olması değerin ortalamaya eşit olduğu anlamına gelir. Negatif z-puanlar ortalamadan düşük değerleri, pozitif z-puanlar ortalamadan yüksek değerleri gösterir.",
      },
      {
        q: "Yüzdelik sıra bana ne söyler?",
        a: "Yüzdelik sıra, normal dağılımda gözlenen değerin altında kalan değerlerin yüzdesini gösterir. Örneğin 84. yüzdelik sıra, değerinizin altında %84 değer olduğu anlamına gelir.",
      },
      {
        q: "Hipotez testi için z-puanları nasıl kullanırım?",
        a: "P-değerini anlamlılık düzeyinizle (genelde 0.05) karşılaştırın. p-değeri < 0.05 ise sonuç istatistiksel olarak anlamlıdır. Yönlü testler için tek yönlü, yönsüz testler için iki yönlü kullanın.",
      },
      {
        q: "68-95-99.7 kuralı nedir?",
        a: "Normal dağılımda: ~%68 değer ortalamadan 1 standart sapma içinde, ~%95'i 2 standart sapma içinde, ~%99,7'si 3 standart sapma içinde yer alır.",
      },
    ],
  },

  de: {
    title: "Z-Wert-Rechner",
    short: "Berechnen Sie Z-Werte, Perzentile und p-Werte zur Standardisierung und Interpretation von Daten.",
    description:
      "Kostenloser Z-Wert-Rechner. Ermitteln Sie standardisierte Werte, Perzentirang und einseitige sowie zweiseitige p-Werte für Hypothesentests.",
    keywords: [
      "z-wert rechner",
      "perzentil rechner",
      "p-wert rechner",
      "standard normalverteilung",
      "hypothesentest",
      "statistische signifikanz",
      "normalverteilung",
    ],
    inputs: {
      value: {
        label: "Beobachteter Wert (x)",
        help: "Der Datenpunkt, den Sie standardisieren möchten.",
      },
      mean: {
        label: "Mittelwert (μ)",
        help: "Der Durchschnitt Ihres Datensatzes oder der Grundgesamtheit.",
      },
      standardDeviation: {
        label: "Standardabweichung (σ)",
        help: "Maß für die Datenverteilung. Muss positiv sein.",
      },
    },
    outputs: {
      zScore: {
        label: "Z-Wert",
        help: "Standardisierter Wert zeigt, wie viele Standardabweichungen der Wert vom Mittelwert entfernt ist.",
      },
      percentile: {
        label: "Perzentil",
        help: "Prozentsatz der Werte, die unter Ihrem beobachteten Wert in einer Normalverteilung liegen.",
      },
      oneTailPValue: {
        label: "P-Wert (einseitig)",
        help: "Wahrscheinlichkeit, einen Wert so extrem oder extremer in eine Richtung zu beobachten.",
      },
      twoTailPValue: {
        label: "P-Wert (zweiseitig)",
        help: "Wahrscheinlichkeit, einen Wert so extrem oder extremer in jede Richtung zu beobachten.",
      },
      interpretation: {
        label: "Interpretation",
        help: "Wie viele Standardabweichungen der Wert vom Mittelwert entfernt ist.",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "Standardabweichung muss positiv sein.",
    },
    faq: [
      {
        q: "Was bedeutet ein Z-Wert von 0?",
        a: "Ein Z-Wert von 0 bedeutet, dass der Wert gleich dem Mittelwert ist. Negative Z-Werte zeigen Werte unter dem Mittelwert, positive Z-Werte zeigen Werte über dem Mittelwert.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Z-Score",
    short: "Calculez les z-scores, percentiles et p-valeurs pour standardiser et interpréter les données.",
    description:
      "Calculateur gratuit de z-score. Trouvez les scores standardisés, rangs centiles, et p-valeurs unilatéraux et bilatéraux pour l'analyse statistique.",
    keywords: [
      "calculateur z-score",
      "calculateur percentile",
      "calculateur p-valeur",
      "distribution normale standard",
      "test hypothèse",
      "signification statistique",
      "distribution normale",
    ],
    inputs: {
      value: {
        label: "Valeur observée (x)",
        help: "Le point de données que vous voulez standardiser.",
      },
      mean: {
        label: "Moyenne (μ)",
        help: "La moyenne de votre ensemble de données ou population.",
      },
      standardDeviation: {
        label: "Écart-type (σ)",
        help: "Mesure de la dispersion. Doit être positif.",
      },
    },
    outputs: {
      zScore: {
        label: "Z-Score",
        help: "Score standardisé montrant les écarts-types par rapport à la moyenne.",
      },
      percentile: {
        label: "Percentile",
        help: "Pourcentage de valeurs en dessous de votre valeur observée.",
      },
      oneTailPValue: {
        label: "P-Valeur (unilatérale)",
        help: "Probabilité d'observer une valeur aussi extrême ou plus dans une direction.",
      },
      twoTailPValue: {
        label: "P-Valeur (bilatérale)",
        help: "Probabilité d'observer une valeur aussi extrême ou plus dans chaque direction.",
      },
      interpretation: {
        label: "Interprétation",
        help: "Nombre d'écarts-types par rapport à la moyenne.",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "L'écart-type doit être positif.",
    },
    faq: [
      {
        q: "Qu'est-ce qu'un z-score de 0?",
        a: "Un z-score de 0 signifie que la valeur est égale à la moyenne. Les z-scores négatifs indiquent des valeurs en dessous, les positifs au-dessus.",
      },
    ],
  },

  es: {
    title: "Calculadora de Z-Score",
    short: "Calcula z-scores, percentiles y p-valores para estandarizar e interpretar datos.",
    description:
      "Calculadora gratuita de z-score. Encuentra puntuaciones estandarizadas, percentiles y p-valores unilaterales y bilaterales para análisis estadístico.",
    keywords: [
      "calculadora z-score",
      "calculadora percentil",
      "calculadora p-valor",
      "distribución normal estándar",
      "prueba de hipótesis",
      "significancia estadística",
      "distribución normal",
    ],
    inputs: {
      value: {
        label: "Valor observado (x)",
        help: "El punto de datos que deseas estandarizar.",
      },
      mean: {
        label: "Media (μ)",
        help: "El promedio de tu conjunto de datos o población.",
      },
      standardDeviation: {
        label: "Desviación estándar (σ)",
        help: "Medida de dispersión. Debe ser positiva.",
      },
    },
    outputs: {
      zScore: {
        label: "Z-Score",
        help: "Puntuación estandarizada que muestra cuántas desviaciones estándar hay desde la media.",
      },
      percentile: {
        label: "Percentil",
        help: "Porcentaje de valores por debajo de tu valor observado.",
      },
      oneTailPValue: {
        label: "P-Valor (unilateral)",
        help: "Probabilidad de observar un valor tan extremo o más en una dirección.",
      },
      twoTailPValue: {
        label: "P-Valor (bilateral)",
        help: "Probabilidad de observar un valor tan extremo o más en ambas direcciones.",
      },
      interpretation: {
        label: "Interpretación",
        help: "Cuántas desviaciones estándar hay desde la media.",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "La desviación estándar debe ser positiva.",
    },
    faq: [
      {
        q: "¿Qué significa un z-score de 0?",
        a: "Un z-score de 0 significa que el valor es igual a la media. Los z-scores negativos indican valores por debajo, los positivos por encima.",
      },
    ],
  },

  it: {
    title: "Calcolatore Z-Score",
    short: "Calcola z-score, percentili e p-valori per standardizzare e interpretare i dati.",
    description:
      "Calcolatore gratuito di z-score. Trova i punteggi standardizzati, i ranghi percentili e i p-valori unilaterali e bilaterali per l'analisi statistica.",
    keywords: [
      "calcolatore z-score",
      "calcolatore percentile",
      "calcolatore p-valore",
      "distribuzione normale standard",
      "test di ipotesi",
      "significatività statistica",
      "distribuzione normale",
    ],
    inputs: {
      value: {
        label: "Valore osservato (x)",
        help: "Il punto dati che desideri standardizzare.",
      },
      mean: {
        label: "Media (μ)",
        help: "La media del tuo set di dati o popolazione.",
      },
      standardDeviation: {
        label: "Deviazione standard (σ)",
        help: "Misura della dispersione. Deve essere positiva.",
      },
    },
    outputs: {
      zScore: {
        label: "Z-Score",
        help: "Punteggio standardizzato che mostra quante deviazioni standard il valore è dalla media.",
      },
      percentile: {
        label: "Percentile",
        help: "Percentuale di valori al di sotto del tuo valore osservato.",
      },
      oneTailPValue: {
        label: "P-Valore (unilaterale)",
        help: "Probabilità di osservare un valore così estremo o più in una direzione.",
      },
      twoTailPValue: {
        label: "P-Valore (bilaterale)",
        help: "Probabilità di osservare un valore così estremo o più in entrambe le direzioni.",
      },
      interpretation: {
        label: "Interpretazione",
        help: "Quante deviazioni standard il valore è dalla media.",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "La deviazione standard deve essere positiva.",
    },
    faq: [
      {
        q: "Cosa significa uno z-score di 0?",
        a: "Uno z-score di 0 significa che il valore è uguale alla media. Gli z-score negativi indicano valori sotto la media, quelli positivi sopra.",
      },
    ],
  },

  ar: {
    title: "حاسبة درجة Z",
    short: "احسب درجات Z والنسب المئوية وقيم p لتوحيد البيانات وتفسيرها.",
    description:
      "حاسبة درجة Z المجانية. ابحث عن الدرجات المعيارية والنسب المئوية وقيم p أحادية وثنائية الطرف للتحليل الإحصائي.",
    keywords: [
      "حاسبة درجة z",
      "حاسبة النسبة المئوية",
      "حاسبة قيمة p",
      "التوزيع الطبيعي المعياري",
      "اختبار الفرضيات",
      "الدلالة الإحصائية",
      "التوزيع الطبيعي",
    ],
    inputs: {
      value: {
        label: "القيمة المرصودة (x)",
        help: "نقطة البيانات التي تريد توحيد معايير قياسها.",
      },
      mean: {
        label: "المتوسط (μ)",
        help: "متوسط مجموعة البيانات أو السكان.",
      },
      standardDeviation: {
        label: "الانحراف المعياري (σ)",
        help: "قياس التشتت. يجب أن يكون موجبًا.",
      },
    },
    outputs: {
      zScore: {
        label: "درجة Z",
        help: "الدرجة المعيارية التي تُظهر عدد الانحرافات المعيارية من المتوسط.",
      },
      percentile: {
        label: "النسبة المئوية",
        help: "نسبة القيم أقل من القيمة المرصودة لديك.",
      },
      oneTailPValue: {
        label: "قيمة P (أحادية الطرف)",
        help: "احتمالية ملاحظة قيمة متطرفة أو أكثر في اتجاه واحد.",
      },
      twoTailPValue: {
        label: "قيمة P (ثنائية الطرف)",
        help: "احتمالية ملاحظة قيمة متطرفة أو أكثر في كلا الاتجاهين.",
      },
      interpretation: {
        label: "التفسير",
        help: "عدد الانحرافات المعيارية من المتوسط.",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "يجب أن يكون الانحراف المعياري موجبًا.",
    },
    faq: [
      {
        q: "ماذا يعني درجة z بقيمة 0؟",
        a: "درجة z بقيمة 0 تعني أن القيمة تساوي المتوسط. القيم السالبة تشير إلى قيم أقل من المتوسط، والقيم الموجبة أعلى من المتوسط.",
      },
    ],
  },

  ru: {
    title: "Калькулятор Z-Статистики",
    short: "Вычислите z-оценки, процентили и p-значения для стандартизации и интерпретации данных.",
    description:
      "Бесплатный калькулятор z-оценки. Найдите стандартизованные оценки, процентильные ранги и односторонние и двусторонние p-значения для статистического анализа.",
    keywords: [
      "калькулятор z-оценки",
      "калькулятор процентиля",
      "калькулятор p-значения",
      "стандартное нормальное распределение",
      "проверка гипотез",
      "статистическая значимость",
      "нормальное распределение",
    ],
    inputs: {
      value: {
        label: "Наблюдаемое значение (x)",
        help: "Точка данных, которую вы хотите стандартизировать.",
      },
      mean: {
        label: "Среднее (μ)",
        help: "Среднее значение вашего набора данных или популяции.",
      },
      standardDeviation: {
        label: "Стандартное отклонение (σ)",
        help: "Мера разброса данных. Должно быть положительным.",
      },
    },
    outputs: {
      zScore: {
        label: "Z-Оценка",
        help: "Стандартизированная оценка, показывающая количество стандартных отклонений от среднего.",
      },
      percentile: {
        label: "Процентиль",
        help: "Процент значений ниже вашего наблюдаемого значения.",
      },
      oneTailPValue: {
        label: "P-Значение (односторонний)",
        help: "Вероятность наблюдения значения столь же или более экстремального в одном направлении.",
      },
      twoTailPValue: {
        label: "P-Значение (двусторонний)",
        help: "Вероятность наблюдения значения столь же или более экстремального в обоих направлениях.",
      },
      interpretation: {
        label: "Интерпретация",
        help: "Количество стандартных отклонений от среднего.",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "Стандартное отклонение должно быть положительным.",
    },
    faq: [
      {
        q: "Что означает z-оценка 0?",
        a: "Z-оценка 0 означает, что значение равно среднему. Отрицательные z-оценки указывают значения ниже среднего, положительные выше.",
      },
    ],
  },

  zh: {
    title: "Z分数计算器",
    short: "计算Z分数、百分位数和p值，以标准化和解释数据。",
    description:
      "免费的Z分数计算器。查找标准化分数、百分位等级和单侧及双侧p值，用于统计分析。",
    keywords: [
      "z分数计算器",
      "百分位计算器",
      "p值计算器",
      "标准正态分布",
      "假设检验",
      "统计显著性",
      "正态分布",
    ],
    inputs: {
      value: {
        label: "观测值 (x)",
        help: "你想要标准化的数据点。",
      },
      mean: {
        label: "平均值 (μ)",
        help: "你的数据集或总体的平均值。",
      },
      standardDeviation: {
        label: "标准差 (σ)",
        help: "数据分散的度量。必须为正。",
      },
    },
    outputs: {
      zScore: {
        label: "Z分数",
        help: "标准化分数，显示该值与平均值相差多少个标准差。",
      },
      percentile: {
        label: "百分位",
        help: "低于你观测值的数据百分比。",
      },
      oneTailPValue: {
        label: "P值 (单侧)",
        help: "在一个方向上观测到同样极端或更极端值的概率。",
      },
      twoTailPValue: {
        label: "P值 (双侧)",
        help: "在任何方向上观测到同样极端或更极端值的概率。",
      },
      interpretation: {
        label: "解释",
        help: "该值与平均值相差的标准差数量。",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "标准差必须为正。",
    },
    faq: [
      {
        q: "Z分数为0意味着什么?",
        a: "Z分数为0表示该值等于平均值。负的Z分数表示低于平均值的值，正的表示高于平均值。",
      },
    ],
  },

  ja: {
    title: "Z スコア計算機",
    short: "Z スコア、パーセンタイル、p値を計算してデータを標準化・解釈します。",
    description:
      "無料のZ スコア計算機。統計分析のための標準化スコア、百分位ランク、片側および両側 p 値を求めます。",
    keywords: [
      "zスコア計算機",
      "パーセンタイル計算機",
      "p値計算機",
      "標準正規分布",
      "仮説検定",
      "統計的有意性",
      "正規分布",
    ],
    inputs: {
      value: {
        label: "観測値 (x)",
        help: "標準化したいデータポイント。",
      },
      mean: {
        label: "平均 (μ)",
        help: "データセットまたは母集団の平均。",
      },
      standardDeviation: {
        label: "標準偏差 (σ)",
        help: "データの散らばり。正の値でなければなりません。",
      },
    },
    outputs: {
      zScore: {
        label: "Z スコア",
        help: "標準化スコアで、値が平均からいくつの標準偏差离れているかを示します。",
      },
      percentile: {
        label: "パーセンタイル",
        help: "観測値より下の値の割合。",
      },
      oneTailPValue: {
        label: "P値 (片側)",
        help: "一方向で同様以上に極端な値を観測する確率。",
      },
      twoTailPValue: {
        label: "P値 (両側)",
        help: "両方向で同様以上に極端な値を観測する確率。",
      },
      interpretation: {
        label: "解釈",
        help: "平均からの標準偏差の数。",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "標準偏差は正の値である必要があります。",
    },
    faq: [
      {
        q: "Zスコアが0とはどういう意味ですか?",
        a: "Z スコア 0 は値が平均と等しいことを意味します。負のZ スコアは平均より下の値、正のZ スコアは平均より上を示します。",
      },
    ],
  },

  ko: {
    title: "Z-점수 계산기",
    short: "Z-점수, 백분위수, p값을 계산하여 데이터를 표준화하고 해석합니다.",
    description:
      "무료 Z-점수 계산기. 통계 분석을 위한 표준화된 점수, 백분위수, 단측 및 양측 p값을 구합니다.",
    keywords: [
      "z점수 계산기",
      "백분위수 계산기",
      "p값 계산기",
      "표준정규분포",
      "가설검증",
      "통계적 유의성",
      "정규분포",
    ],
    inputs: {
      value: {
        label: "관측값 (x)",
        help: "표준화하려는 데이터 포인트입니다.",
      },
      mean: {
        label: "평균 (μ)",
        help: "데이터 세트 또는 모집단의 평균입니다.",
      },
      standardDeviation: {
        label: "표준편차 (σ)",
        help: "데이터의 산포도입니다. 양수여야 합니다.",
      },
    },
    outputs: {
      zScore: {
        label: "Z-점수",
        help: "표준화된 점수로, 값이 평균으로부터 얼마나 많은 표준편차 떨어져 있는지 나타냅니다.",
      },
      percentile: {
        label: "백분위수",
        help: "관측값보다 낮은 값의 백분율입니다.",
      },
      oneTailPValue: {
        label: "P값 (단측)",
        help: "한 방향으로 같거나 더 극단적인 값을 관측할 확률입니다.",
      },
      twoTailPValue: {
        label: "P값 (양측)",
        help: "어느 방향이든 같거나 더 극단적인 값을 관측할 확률입니다.",
      },
      interpretation: {
        label: "해석",
        help: "평균으로부터의 표준편차 수입니다.",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "표준편차는 양수여야 합니다.",
    },
    faq: [
      {
        q: "Z-점수가 0이면 무엇을 의미합니까?",
        a: "Z-점수 0은 값이 평균과 같다는 의미입니다. 음수 Z-점수는 평균 이하의 값, 양수는 평균 이상을 나타냅니다.",
      },
    ],
  },

  hi: {
    title: "Z-स्कोर कैलकुलेटर",
    short: "डेटा को मानकीकृत करने और व्याख्या करने के लिए Z-स्कोर, प्रतिशतक और p-मान की गणना करें।",
    description:
      "मुफ़्त Z-स्कोर कैलकुलेटर। सांख्यिकीय विश्लेषण के लिए मानकीकृत स्कोर, प्रतिशतक रैंक, एक-पूंछ और दो-पूंछ p-मान खोजें।",
    keywords: [
      "z-स्कोर कैलकुलेटर",
      "प्रतिशतक कैलकुलेटर",
      "p-मान कैलकुलेटर",
      "मानक सामान्य वितरण",
      "परिकल्पना परीक्षण",
      "सांख्यिकीय महत्व",
      "सामान्य वितरण",
    ],
    inputs: {
      value: {
        label: "अवलोकित मान (x)",
        help: "वह डेटा बिंदु जिसे आप मानकीकृत करना चाहते हैं।",
      },
      mean: {
        label: "माध्य (μ)",
        help: "आपके डेटा सेट या जनसंख्या का औसत।",
      },
      standardDeviation: {
        label: "मानक विचलन (σ)",
        help: "डेटा प्रसार का माप। सकारात्मक होना चाहिए।",
      },
    },
    outputs: {
      zScore: {
        label: "Z-स्कोर",
        help: "मानकीकृत स्कोर जो दिखाता है कि मान माध्य से कितने मानक विचलन दूर है।",
      },
      percentile: {
        label: "प्रतिशतक",
        help: "आपके अवलोकित मान से नीचे के मानों का प्रतिशत।",
      },
      oneTailPValue: {
        label: "P-मान (एक-पूंछ)",
        help: "एक दिशा में उतना ही या अधिक चरम मान देखने की संभावना।",
      },
      twoTailPValue: {
        label: "P-मान (दो-पूंछ)",
        help: "किसी भी दिशा में उतना ही या अधिक चरम मान देखने की संभावना।",
      },
      interpretation: {
        label: "व्याख्या",
        help: "माध्य से मानक विचलन की संख्या।",
      },
    },
    options: {},
    errors: {
      invalidStdDev: "मानक विचलन सकारात्मक होना चाहिए।",
    },
    faq: [
      {
        q: "Z-स्कोर 0 का क्या अर्थ है?",
        a: "Z-स्कोर 0 का अर्थ है कि मान माध्य के बराबर है। नकारात्मक Z-स्कोर माध्य से कम मानों को इंगित करते हैं, सकारात्मक माध्य से अधिक को।",
      },
    ],
  },
};

export default i18n;
