import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Average Calculator",
    short: "Calculate mean, median, mode, sum, and range for any list of numbers.",
    description:
      "Free average calculator. Enter comma-separated numbers to instantly compute the arithmetic mean, median, mode, count, sum, and range of your data set. Ideal for students, teachers, and data analysts.",
    keywords: [
      "average calculator",
      "mean calculator",
      "median calculator",
      "mode calculator",
      "arithmetic mean",
      "central tendency",
      "statistics calculator",
    ],
    inputs: {
      values: {
        label: "Numbers",
        help: "Enter numbers separated by commas (e.g., 4, 8, 15, 16, 23, 42). Decimals and negatives are supported.",
      },
    },
    outputs: {
      mean: {
        label: "Mean (Average)",
        help: "The arithmetic mean: sum of all values divided by the count.",
      },
      median: {
        label: "Median",
        help: "The middle value when all numbers are sorted. For even-sized lists, the average of the two middle values.",
      },
      mode: {
        label: "Mode",
        help: "The most frequently occurring value. If all values are unique, the mean is shown.",
      },
      count: {
        label: "Count (n)",
        help: "Total number of values entered.",
      },
      sum: {
        label: "Sum",
        help: "The total of all values added together.",
      },
      range: {
        label: "Range",
        help: "The difference between the maximum and minimum values.",
      },
    },
    faq: [
      {
        q: "What is the difference between mean, median, and mode?",
        a: "The mean is the arithmetic average (sum ÷ count). The median is the middle value in a sorted list. The mode is the value that appears most often. All three are measures of central tendency but respond differently to outliers — the median is more robust when extreme values are present.",
      },
      {
        q: "When should I use median instead of mean?",
        a: "Use the median when your data has outliers or is skewed. For example, household income data includes a few very high earners that inflate the mean. The median gives a better picture of the 'typical' value in such cases.",
      },
      {
        q: "What does 'no mode' mean?",
        a: "If every value in the list appears exactly once, there is no unique mode. This calculator shows the mean in that field as a fallback.",
      },
      {
        q: "How is the range calculated?",
        a: "Range = maximum value − minimum value. It measures the spread of your data. A large range indicates high variability; a small range indicates values are clustered together.",
      },
    ],
  },
  pt: {
    title: "Average Calculator",
    short: "Calculate mean, median, mode, sum, and range for any list of numbers.",
    description:
      "Free average calculator. Enter comma-separated numbers to instantly compute the arithmetic mean, median, mode, count, sum, and range of your data set. Ideal for students, teachers, and data analysts.",
    keywords: [
      "average calculator",
      "mean calculator",
      "median calculator",
      "mode calculator",
      "arithmetic mean",
      "central tendency",
      "statistics calculator",
    ],
    inputs: {
      values: {
        label: "Numbers",
        help: "Enter numbers separated by commas (e.g., 4, 8, 15, 16, 23, 42). Decimals and negatives are supported.",
      },
    },
    outputs: {
      mean: {
        label: "Mean (Average)",
        help: "The arithmetic mean: sum of all values divided by the count.",
      },
      median: {
        label: "Median",
        help: "The middle value when all numbers are sorted. For even-sized lists, the average of the two middle values.",
      },
      mode: {
        label: "Mode",
        help: "The most frequently occurring value. If all values are unique, the mean is shown.",
      },
      count: {
        label: "Count (n)",
        help: "Total number of values entered.",
      },
      sum: {
        label: "Sum",
        help: "The total of all values added together.",
      },
      range: {
        label: "Range",
        help: "The difference between the maximum and minimum values.",
      },
    },
    faq: [
      {
        q: "What is the difference between mean, median, and mode?",
        a: "The mean is the arithmetic average (sum ÷ count). The median is the middle value in a sorted list. The mode is the value that appears most often. All three are measures of central tendency but respond differently to outliers — the median is more robust when extreme values are present.",
      },
      {
        q: "When should I use median instead of mean?",
        a: "Use the median when your data has outliers or is skewed. For example, household income data includes a few very high earners that inflate the mean. The median gives a better picture of the 'typical' value in such cases.",
      },
      {
        q: "What does 'no mode' mean?",
        a: "If every value in the list appears exactly once, there is no unique mode. This calculator shows the mean in that field as a fallback.",
      },
      {
        q: "How is the range calculated?",
        a: "Range = maximum value − minimum value. It measures the spread of your data. A large range indicates high variability; a small range indicates values are clustered together.",
      },
    ],
  },
  id: {
    title: "Average Calculator",
    short: "Calculate mean, median, mode, sum, and range for any list of numbers.",
    description:
      "Free average calculator. Enter comma-separated numbers to instantly compute the arithmetic mean, median, mode, count, sum, and range of your data set. Ideal for students, teachers, and data analysts.",
    keywords: [
      "average calculator",
      "mean calculator",
      "median calculator",
      "mode calculator",
      "arithmetic mean",
      "central tendency",
      "statistics calculator",
    ],
    inputs: {
      values: {
        label: "Numbers",
        help: "Enter numbers separated by commas (e.g., 4, 8, 15, 16, 23, 42). Decimals and negatives are supported.",
      },
    },
    outputs: {
      mean: {
        label: "Mean (Average)",
        help: "The arithmetic mean: sum of all values divided by the count.",
      },
      median: {
        label: "Median",
        help: "The middle value when all numbers are sorted. For even-sized lists, the average of the two middle values.",
      },
      mode: {
        label: "Mode",
        help: "The most frequently occurring value. If all values are unique, the mean is shown.",
      },
      count: {
        label: "Count (n)",
        help: "Total number of values entered.",
      },
      sum: {
        label: "Sum",
        help: "The total of all values added together.",
      },
      range: {
        label: "Range",
        help: "The difference between the maximum and minimum values.",
      },
    },
    faq: [
      {
        q: "What is the difference between mean, median, and mode?",
        a: "The mean is the arithmetic average (sum ÷ count). The median is the middle value in a sorted list. The mode is the value that appears most often. All three are measures of central tendency but respond differently to outliers — the median is more robust when extreme values are present.",
      },
      {
        q: "When should I use median instead of mean?",
        a: "Use the median when your data has outliers or is skewed. For example, household income data includes a few very high earners that inflate the mean. The median gives a better picture of the 'typical' value in such cases.",
      },
      {
        q: "What does 'no mode' mean?",
        a: "If every value in the list appears exactly once, there is no unique mode. This calculator shows the mean in that field as a fallback.",
      },
      {
        q: "How is the range calculated?",
        a: "Range = maximum value − minimum value. It measures the spread of your data. A large range indicates high variability; a small range indicates values are clustered together.",
      },
    ],
  },


  tr: {
    title: "Ortalama Hesaplayıcı",
    short: "Herhangi bir sayı listesi için ortalama, ortanca, tepe değer, toplam ve aralık hesaplayın.",
    description:
      "Ücretsiz ortalama hesaplayıcı. Virgülle ayrılmış sayıları girerek aritmetik ortalama, ortanca, tepe değer, sayı, toplam ve aralığı anında hesaplayın. Öğrenciler, öğretmenler ve veri analistleri için idealdir.",
    keywords: [
      "ortalama hesaplayıcı",
      "aritmetik ortalama",
      "ortanca hesaplayıcı",
      "tepe değer",
      "merkezi eğilim",
      "istatistik hesaplayıcı",
      "sayı ortalaması",
    ],
    inputs: {
      values: {
        label: "Sayılar",
        help: "Virgülle ayrılmış sayıları girin (ör: 4, 8, 15, 16, 23, 42). Ondalık ve negatif sayılar desteklenir.",
      },
    },
    outputs: {
      mean: {
        label: "Ortalama (Aritmetik)",
        help: "Aritmetik ortalama: tüm değerlerin toplamının sayıya bölünmesi.",
      },
      median: {
        label: "Ortanca",
        help: "Tüm sayılar sıralandığında ortadaki değer. Çift sayıda eleman varsa iki ortanca değerin ortalaması.",
      },
      mode: {
        label: "Tepe Değer (Mod)",
        help: "En sık tekrar eden değer. Tüm değerler eşsizse ortalama gösterilir.",
      },
      count: {
        label: "Sayı (n)",
        help: "Girilen toplam değer sayısı.",
      },
      sum: {
        label: "Toplam",
        help: "Tüm değerlerin toplamı.",
      },
      range: {
        label: "Aralık",
        help: "Maksimum ve minimum değer arasındaki fark.",
      },
    },
    faq: [
      {
        q: "Ortalama, ortanca ve tepe değer arasındaki fark nedir?",
        a: "Ortalama, aritmetik toplamın sayıya bölünmesidir. Ortanca, sıralanmış listedeki orta değerdir. Tepe değer en sık tekrar eden değerdir. Uç değerler (aykırı değerler) varsa ortanca daha güvenilir bir merkez ölçüsü olur.",
      },
      {
        q: "Ortancayı ne zaman kullanmalıyım?",
        a: "Verilerinizde aykırı değerler veya çarpıklık varsa ortancayı tercih edin. Örneğin, hane geliri verilerinde çok yüksek gelirler aritmetik ortalamayı yukarı çeker; ortanca bu durumda daha gerçekçi bir fikir verir.",
      },
      {
        q: "Aralık nasıl hesaplanır?",
        a: "Aralık = Maksimum değer − Minimum değer. Geniş bir aralık yüksek değişkenliğe işaret eder.",
      },
      {
        q: "Tepe değer yoksa ne olur?",
        a: "Her değer yalnızca bir kez görünüyorsa benzersiz bir tepe değer yoktur. Bu hesaplayıcı bu durumda tepe değer alanında ortalamayı gösterir.",
      },
    ],
  },

  de: {
    title: "Durchschnitt-Rechner",
    short: "Berechnen Sie Mittelwert, Median, Modus, Summe und Spannweite für eine Zahlenliste.",
    description:
      "Kostenloser Durchschnitt-Rechner. Geben Sie kommagetrennte Zahlen ein, um Mittelwert, Median, Modus, Anzahl, Summe und Spannweite sofort zu berechnen.",
    keywords: [
      "Durchschnitt Rechner",
      "Mittelwert Rechner",
      "Median Rechner",
      "Modus Rechner",
      "arithmetisches Mittel",
      "Statistik Rechner",
      "zentrale Tendenz",
    ],
    inputs: {
      values: {
        label: "Zahlen",
        help: "Geben Sie durch Kommas getrennte Zahlen ein (z.B. 4, 8, 15, 16, 23, 42).",
      },
    },
    outputs: {
      mean: {
        label: "Mittelwert",
        help: "Arithmetisches Mittel: Summe aller Werte dividiert durch die Anzahl.",
      },
      median: {
        label: "Median",
        help: "Der mittlere Wert in der sortierten Liste.",
      },
      mode: {
        label: "Modus",
        help: "Der am häufigsten vorkommende Wert.",
      },
      count: {
        label: "Anzahl (n)",
        help: "Gesamtzahl der eingegebenen Werte.",
      },
      sum: {
        label: "Summe",
        help: "Die Summe aller Werte.",
      },
      range: {
        label: "Spannweite",
        help: "Differenz zwischen Maximum und Minimum.",
      },
    },
    faq: [
      {
        q: "Was ist der Unterschied zwischen Mittelwert, Median und Modus?",
        a: "Der Mittelwert ist das arithmetische Mittel (Summe ÷ Anzahl). Der Median ist der mittlere Wert in einer sortierten Liste. Der Modus ist der häufigste Wert.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Moyenne",
    short: "Calculez la moyenne, la médiane, le mode, la somme et l'étendue d'une liste de nombres.",
    description:
      "Calculateur de moyenne gratuit. Entrez des nombres séparés par des virgules pour obtenir instantanément la moyenne arithmétique, la médiane, le mode, l'effectif, la somme et l'étendue.",
    keywords: [
      "calculateur moyenne",
      "calculateur médiane",
      "calculateur mode",
      "moyenne arithmétique",
      "tendance centrale",
      "statistiques",
      "calculateur statistique",
    ],
    inputs: {
      values: {
        label: "Nombres",
        help: "Entrez des nombres séparés par des virgules (ex: 4, 8, 15, 16, 23, 42).",
      },
    },
    outputs: {
      mean: {
        label: "Moyenne",
        help: "Moyenne arithmétique : somme de toutes les valeurs divisée par l'effectif.",
      },
      median: {
        label: "Médiane",
        help: "Valeur centrale de la liste triée.",
      },
      mode: {
        label: "Mode",
        help: "La valeur la plus fréquente.",
      },
      count: {
        label: "Effectif (n)",
        help: "Nombre total de valeurs saisies.",
      },
      sum: {
        label: "Somme",
        help: "Total de toutes les valeurs.",
      },
      range: {
        label: "Étendue",
        help: "Différence entre le maximum et le minimum.",
      },
    },
    faq: [
      {
        q: "Quelle est la différence entre moyenne, médiane et mode?",
        a: "La moyenne est la somme divisée par l'effectif. La médiane est la valeur centrale dans une liste triée. Le mode est la valeur la plus fréquente.",
      },
    ],
  },

  es: {
    title: "Calculadora de Promedio",
    short: "Calcula la media, mediana, moda, suma y rango de una lista de números.",
    description:
      "Calculadora de promedio gratuita. Ingresa números separados por comas para calcular de inmediato la media aritmética, mediana, moda, conteo, suma y rango de tu conjunto de datos.",
    keywords: [
      "calculadora de promedio",
      "calculadora media aritmética",
      "calculadora mediana",
      "calculadora moda",
      "tendencia central",
      "estadística",
      "calculadora estadística",
    ],
    inputs: {
      values: {
        label: "Números",
        help: "Ingresa números separados por comas (ej: 4, 8, 15, 16, 23, 42).",
      },
    },
    outputs: {
      mean: {
        label: "Media (Promedio)",
        help: "Media aritmética: suma de todos los valores dividida entre el conteo.",
      },
      median: {
        label: "Mediana",
        help: "El valor central en la lista ordenada.",
      },
      mode: {
        label: "Moda",
        help: "El valor que aparece con más frecuencia.",
      },
      count: {
        label: "Conteo (n)",
        help: "Número total de valores ingresados.",
      },
      sum: {
        label: "Suma",
        help: "La suma de todos los valores.",
      },
      range: {
        label: "Rango",
        help: "Diferencia entre el valor máximo y el mínimo.",
      },
    },
    faq: [
      {
        q: "¿Cuál es la diferencia entre media, mediana y moda?",
        a: "La media es la suma dividida entre el conteo. La mediana es el valor central en una lista ordenada. La moda es el valor que aparece con mayor frecuencia.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Media",
    short: "Calcola media, mediana, moda, somma e intervallo di un elenco di numeri.",
    description:
      "Calcolatore di media gratuito. Inserisci numeri separati da virgole per calcolare istantaneamente media aritmetica, mediana, moda, conteggio, somma e intervallo.",
    keywords: [
      "calcolatore media",
      "media aritmetica",
      "calcolatore mediana",
      "calcolatore moda",
      "tendenza centrale",
      "statistiche",
      "calcolatore statistico",
    ],
    inputs: {
      values: {
        label: "Numeri",
        help: "Inserisci numeri separati da virgole (es: 4, 8, 15, 16, 23, 42).",
      },
    },
    outputs: {
      mean: {
        label: "Media",
        help: "Media aritmetica: somma di tutti i valori divisa per il conteggio.",
      },
      median: {
        label: "Mediana",
        help: "Il valore centrale nell'elenco ordinato.",
      },
      mode: {
        label: "Moda",
        help: "Il valore più frequente.",
      },
      count: {
        label: "Conteggio (n)",
        help: "Numero totale di valori inseriti.",
      },
      sum: {
        label: "Somma",
        help: "La somma di tutti i valori.",
      },
      range: {
        label: "Intervallo",
        help: "Differenza tra il massimo e il minimo.",
      },
    },
    faq: [
      {
        q: "Qual è la differenza tra media, mediana e moda?",
        a: "La media è la somma divisa per il conteggio. La mediana è il valore centrale in un elenco ordinato. La moda è il valore più frequente.",
      },
    ],
  },

  ar: {
    title: "حاسبة المتوسط",
    short: "احسب المتوسط والوسيط والمنوال والمجموع والمدى لأي قائمة من الأرقام.",
    description:
      "حاسبة متوسط مجانية. أدخل أرقامًا مفصولة بفواصل للحصول فورًا على المتوسط الحسابي والوسيط والمنوال والعدد والمجموع والمدى.",
    keywords: [
      "حاسبة المتوسط",
      "المتوسط الحسابي",
      "حاسبة الوسيط",
      "حاسبة المنوال",
      "مقاييس النزعة المركزية",
      "حاسبة إحصائية",
      "إحصاء",
    ],
    inputs: {
      values: {
        label: "الأرقام",
        help: "أدخل أرقامًا مفصولة بفواصل (مثال: 4، 8، 15، 16، 23، 42).",
      },
    },
    outputs: {
      mean: {
        label: "المتوسط الحسابي",
        help: "مجموع القيم مقسومًا على عددها.",
      },
      median: {
        label: "الوسيط",
        help: "القيمة الوسطى في القائمة المرتبة.",
      },
      mode: {
        label: "المنوال",
        help: "القيمة الأكثر تكرارًا.",
      },
      count: {
        label: "العدد (n)",
        help: "إجمالي عدد القيم المدخلة.",
      },
      sum: {
        label: "المجموع",
        help: "مجموع جميع القيم.",
      },
      range: {
        label: "المدى",
        help: "الفرق بين أكبر قيمة وأصغر قيمة.",
      },
    },
    faq: [
      {
        q: "ما الفرق بين المتوسط والوسيط والمنوال؟",
        a: "المتوسط هو مجموع القيم مقسومًا على عددها. الوسيط هو القيمة الوسطى في القائمة المرتبة. المنوال هو القيمة الأكثر تكرارًا.",
      },
    ],
  },

  ru: {
    title: "Калькулятор Среднего Значения",
    short: "Вычислите среднее, медиану, моду, сумму и размах для любого списка чисел.",
    description:
      "Бесплатный калькулятор среднего значения. Введите числа через запятую, чтобы мгновенно получить среднее арифметическое, медиану, моду, количество, сумму и размах.",
    keywords: [
      "калькулятор среднего",
      "среднее арифметическое",
      "калькулятор медианы",
      "калькулятор моды",
      "центральная тенденция",
      "статистика",
      "статистический калькулятор",
    ],
    inputs: {
      values: {
        label: "Числа",
        help: "Введите числа через запятую (например: 4, 8, 15, 16, 23, 42).",
      },
    },
    outputs: {
      mean: {
        label: "Среднее",
        help: "Среднее арифметическое: сумма всех значений, делённая на их количество.",
      },
      median: {
        label: "Медиана",
        help: "Среднее значение в отсортированном ряду.",
      },
      mode: {
        label: "Мода",
        help: "Наиболее часто встречающееся значение.",
      },
      count: {
        label: "Количество (n)",
        help: "Общее число введённых значений.",
      },
      sum: {
        label: "Сумма",
        help: "Сумма всех значений.",
      },
      range: {
        label: "Размах",
        help: "Разница между максимальным и минимальным значением.",
      },
    },
    faq: [
      {
        q: "В чём разница между средним, медианой и модой?",
        a: "Среднее — это сумма, делённая на количество. Медиана — центральное значение в отсортированном списке. Мода — наиболее часто встречающееся значение.",
      },
    ],
  },

  zh: {
    title: "平均数计算器",
    short: "计算任意数字列表的均值、中位数、众数、总和和极差。",
    description:
      "免费平均数计算器。输入用逗号分隔的数字，即可立即获得算术平均数、中位数、众数、计数、总和和极差。",
    keywords: [
      "平均数计算器",
      "算术平均数",
      "中位数计算器",
      "众数计算器",
      "集中趋势",
      "统计计算器",
      "数据分析",
    ],
    inputs: {
      values: {
        label: "数字",
        help: "输入用逗号分隔的数字（例：4, 8, 15, 16, 23, 42）。",
      },
    },
    outputs: {
      mean: {
        label: "均值（平均数）",
        help: "所有数值之和除以数量。",
      },
      median: {
        label: "中位数",
        help: "排序后列表的中间值。",
      },
      mode: {
        label: "众数",
        help: "出现次数最多的数值。",
      },
      count: {
        label: "计数 (n)",
        help: "输入数值的总个数。",
      },
      sum: {
        label: "总和",
        help: "所有数值的总和。",
      },
      range: {
        label: "极差",
        help: "最大值与最小值的差。",
      },
    },
    faq: [
      {
        q: "均值、中位数和众数有什么区别？",
        a: "均值是所有值之和除以数量。中位数是排序后列表的中间值。众数是出现次数最多的值。",
      },
    ],
  },

  ja: {
    title: "平均値計算機",
    short: "数値リストの平均、中央値、最頻値、合計、範囲を計算します。",
    description:
      "無料の平均値計算機。カンマ区切りの数値を入力すると、算術平均、中央値、最頻値、件数、合計、範囲が即座に計算されます。",
    keywords: [
      "平均値計算機",
      "算術平均",
      "中央値計算機",
      "最頻値計算機",
      "中心傾向",
      "統計計算機",
      "データ分析",
    ],
    inputs: {
      values: {
        label: "数値",
        help: "カンマ区切りで数値を入力してください（例：4, 8, 15, 16, 23, 42）。",
      },
    },
    outputs: {
      mean: {
        label: "平均値（算術平均）",
        help: "すべての値の合計を個数で割った値。",
      },
      median: {
        label: "中央値",
        help: "並べ替えたリストの中間の値。",
      },
      mode: {
        label: "最頻値",
        help: "最も多く出現する値。",
      },
      count: {
        label: "個数 (n)",
        help: "入力された値の総数。",
      },
      sum: {
        label: "合計",
        help: "すべての値の総和。",
      },
      range: {
        label: "範囲",
        help: "最大値と最小値の差。",
      },
    },
    faq: [
      {
        q: "平均値、中央値、最頻値の違いは何ですか？",
        a: "平均値は合計を個数で割った値です。中央値は並べ替えたリストの中間の値です。最頻値は最も多く出現する値です。",
      },
    ],
  },

  ko: {
    title: "평균 계산기",
    short: "숫자 목록의 평균, 중앙값, 최빈값, 합계, 범위를 계산합니다.",
    description:
      "무료 평균 계산기. 쉼표로 구분된 숫자를 입력하면 산술 평균, 중앙값, 최빈값, 개수, 합계, 범위를 즉시 계산합니다.",
    keywords: [
      "평균 계산기",
      "산술 평균",
      "중앙값 계산기",
      "최빈값 계산기",
      "중심 경향",
      "통계 계산기",
      "데이터 분석",
    ],
    inputs: {
      values: {
        label: "숫자",
        help: "쉼표로 구분된 숫자를 입력하세요 (예: 4, 8, 15, 16, 23, 42).",
      },
    },
    outputs: {
      mean: {
        label: "평균 (산술 평균)",
        help: "모든 값의 합을 개수로 나눈 값.",
      },
      median: {
        label: "중앙값",
        help: "정렬된 목록의 중간 값.",
      },
      mode: {
        label: "최빈값",
        help: "가장 자주 나타나는 값.",
      },
      count: {
        label: "개수 (n)",
        help: "입력된 총 값의 수.",
      },
      sum: {
        label: "합계",
        help: "모든 값의 총합.",
      },
      range: {
        label: "범위",
        help: "최대값과 최소값의 차이.",
      },
    },
    faq: [
      {
        q: "평균, 중앙값, 최빈값의 차이는 무엇인가요?",
        a: "평균은 합계를 개수로 나눈 값입니다. 중앙값은 정렬된 목록의 가운데 값입니다. 최빈값은 가장 자주 나타나는 값입니다.",
      },
    ],
  },

  hi: {
    title: "औसत कैलकुलेटर",
    short: "किसी भी संख्या सूची का माध्य, माध्यिका, बहुलक, योग और परिसर की गणना करें।",
    description:
      "मुफ़्त औसत कैलकुलेटर। अल्पविराम से अलग किए गए अंक दर्ज करके तुरंत अंकगणितीय माध्य, माध्यिका, बहुलक, गणना, योग और परिसर प्राप्त करें।",
    keywords: [
      "औसत कैलकुलेटर",
      "माध्य कैलकुलेटर",
      "माध्यिका कैलकुलेटर",
      "बहुलक कैलकुलेटर",
      "केंद्रीय प्रवृत्ति",
      "सांख्यिकी कैलकुलेटर",
      "डेटा विश्लेषण",
    ],
    inputs: {
      values: {
        label: "संख्याएँ",
        help: "अल्पविराम से अलग किए गए अंक दर्ज करें (उदा: 4, 8, 15, 16, 23, 42)।",
      },
    },
    outputs: {
      mean: {
        label: "माध्य (औसत)",
        help: "सभी मानों का योग उनकी संख्या से विभाजित।",
      },
      median: {
        label: "माध्यिका",
        help: "क्रमबद्ध सूची का मध्य मान।",
      },
      mode: {
        label: "बहुलक",
        help: "सबसे अधिक बार आने वाला मान।",
      },
      count: {
        label: "गणना (n)",
        help: "दर्ज किए गए मानों की कुल संख्या।",
      },
      sum: {
        label: "योग",
        help: "सभी मानों का कुल योग।",
      },
      range: {
        label: "परिसर",
        help: "अधिकतम और न्यूनतम मान के बीच का अंतर।",
      },
    },
    faq: [
      {
        q: "माध्य, माध्यिका और बहुलक में क्या अंतर है?",
        a: "माध्य सभी मानों का योग उनकी संख्या से विभाजित करने पर मिलता है। माध्यिका क्रमबद्ध सूची का मध्य मान है। बहुलक वह मान है जो सबसे अधिक बार आता है।",
      },
    ],
  },
};

export default i18n;
