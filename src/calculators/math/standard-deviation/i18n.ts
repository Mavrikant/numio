import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Standard Deviation Calculator",
    short: "Calculate population and sample standard deviation, variance, and mean for your dataset.",
    description:
      "Free standard deviation calculator. Input numbers and get mean, variance, and standard deviation with both population and sample formulas. Ideal for statistics and data analysis.",
    keywords: [
      "standard deviation calculator",
      "variance calculator",
      "sample standard deviation",
      "population standard deviation",
      "statistics calculator",
      "mean calculator",
      "data spread calculator",
    ],
    inputs: {
      values: {
        label: "Data values",
        help: "Enter numbers separated by commas (e.g., 2, 4, 5, 6, 8). Must have at least one number.",
      },
      type: {
        label: "Type",
        help: "Choose population (σ) for entire datasets, or sample (s) for data samples.",
      },
    },
    outputs: {
      count: {
        label: "Count (n)",
        help: "Number of data points in your dataset.",
      },
      mean: {
        label: "Mean (μ or x̄)",
        help: "The average of all values.",
      },
      variance: {
        label: "Variance (σ² or s²)",
        help: "Average squared deviation from the mean. Measure of spread.",
      },
      standardDeviation: {
        label: "Standard Deviation (σ or s)",
        help: "Square root of variance. Measures how spread out data is from the mean.",
      },
    },
    options: {
      type: {
        population: "Population (σ) — use n divisor",
        sample: "Sample (s) — use n-1 divisor",
      },
    },
    errors: {
      invalidInput: "Please enter valid comma-separated numbers.",
      emptyData: "At least one number is required.",
    },
    faq: [
      {
        q: "What is the difference between population and sample standard deviation?",
        a: "Population standard deviation (σ) is used when you have data for an entire population and divides by n. Sample standard deviation (s) is used for samples from a larger population and divides by n-1 to provide an unbiased estimate (Bessel's correction).",
      },
      {
        q: "What does a low vs high standard deviation mean?",
        a: "A low standard deviation means data points are close to the mean (less spread). A high standard deviation means data is more spread out. For example, heights in a group of similar-aged people have lower deviation than heights across all ages.",
      },
      {
        q: "How do I use standard deviation to understand my data?",
        a: "Standard deviation helps quantify variability. In a normal distribution, ~68% of data falls within 1σ, ~95% within 2σ, and ~99.7% within 3σ of the mean. Use it to identify outliers or compare spread between datasets.",
      },
      {
        q: "Why is variance different from standard deviation?",
        a: "Variance is the average squared deviation, while standard deviation is its square root. Standard deviation is preferred because it's in the same units as the original data, making it more interpretable.",
      },
      {
        q: "When should I use sample vs population standard deviation?",
        a: "Use population (n) if you have the complete dataset you're analyzing. Use sample (n-1) if your data is a sample from a larger population — this avoids underestimating the true population standard deviation.",
      },
    ],
  },

  tr: {
    title: "Standart Sapma Hesaplayıcı",
    short: "Veri setiniz için popülasyon ve örnek standart sapma, varyans ve ortalama hesaplayın.",
    description:
      "Ücretsiz standart sapma hesaplayıcı. Sayıları girin ve hem popülasyon hem de örnek formüllerini kullanarak ortalama, varyans ve standart sapmayı elde edin. İstatistik ve veri analizi için ideal.",
    keywords: [
      "standart sapma hesaplayıcı",
      "varyans hesaplayıcı",
      "örnek standart sapma",
      "popülasyon standart sapma",
      "istatistik hesaplayıcı",
      "ortalama hesaplayıcı",
      "veri yayılımı",
    ],
    inputs: {
      values: {
        label: "Veri değerleri",
        help: "Virgülle ayrılmış sayıları girin (örn: 2, 4, 5, 6, 8). En az bir sayı gereklidir.",
      },
      type: {
        label: "Tip",
        help: "Tam veri seti için popülasyon (σ), veri örneği için örnek (s) seçin.",
      },
    },
    outputs: {
      count: {
        label: "Sayı (n)",
        help: "Veri setinizdeki nokta sayısı.",
      },
      mean: {
        label: "Ortalama (μ veya x̄)",
        help: "Tüm değerlerin ortalaması.",
      },
      variance: {
        label: "Varyans (σ² veya s²)",
        help: "Ortalamadan kare farkların ortalaması. Yayılımın ölçüsü.",
      },
      standardDeviation: {
        label: "Standart Sapma (σ veya s)",
        help: "Varyansın karekökü. Verilerin ortalamadan ne kadar yayılmış olduğunu gösterir.",
      },
    },
    options: {
      type: {
        population: "Popülasyon (σ) — n bölenini kullan",
        sample: "Örnek (s) — n-1 bölenini kullan",
      },
    },
    errors: {
      invalidInput: "Lütfen geçerli virgülle ayrılmış sayılar girin.",
      emptyData: "En az bir sayı gereklidir.",
    },
    faq: [
      {
        q: "Popülasyon ve örnek standart sapması arasındaki fark nedir?",
        a: "Popülasyon standart sapması (σ) tam veri seti için kullanılır ve n'ye bölünür. Örnek standart sapması (s) daha büyük bir popülasyondan alınan örnek için kullanılır ve tarafsız tahmin için n-1'e bölünür (Bessel düzeltmesi).",
      },
      {
        q: "Düşük vs yüksek standart sapması ne anlama gelir?",
        a: "Düşük standart sapma, veri noktalarının ortalamaya yakın olduğunu (az yayılmış) gösterir. Yüksek standart sapma, verilerin daha çok yayılmış olduğunu gösterir. Örneğin, benzer yaştaki kişilerin boyları düşük sapmaya, tüm yaşlardaki kişilerin boyları yüksek sapmaya sahiptir.",
      },
      {
        q: "Verilerimi anlamak için standart sapmayı nasıl kullanırım?",
        a: "Standart sapma değişkenliği ölçer. Normal dağılımda, verilerin ~%68'i ortalamadan 1σ içinde, ~%95'i 2σ içinde, ~%99,7'si 3σ içinde olur. Aykırı değerleri tanımlamak veya veri setleri arasındaki yayılımı karşılaştırmak için kullanın.",
      },
      {
        q: "Varyans, standart sapmadan neden farklıdır?",
        a: "Varyans ortalamadan ortalama kare fark, standart sapma ise bunun kareköküdür. Standart sapma tercih edilir çünkü orijinal veri ile aynı birimde olur, bu da onu daha yorumlanabilir hale getirir.",
      },
      {
        q: "Örnek ve popülasyon standart sapması ne zaman kullanılmalıdır?",
        a: "Analiz ettiğiniz tam veri setiniz varsa popülasyon (n) kullanın. Verileriniz daha büyük bir popülasyondan bir örnek ise örnek (n-1) kullanın — bu, gerçek popülasyon standart sapmasını hafife almaktan kaçınır.",
      },
    ],
  },

  de: {
    title: "Standardabweichung-Rechner",
    short: "Berechnen Sie Standardabweichung, Varianz und Mittelwert für Ihre Datensätze.",
    description:
      "Kostenloser Standardabweichung-Rechner. Geben Sie Zahlen ein und erhalten Sie Mittelwert, Varianz und Standardabweichung mit Populations- und Stichprobenformeln.",
    keywords: [
      "Standardabweichung",
      "Varianz-Rechner",
      "Stichproben-Standardabweichung",
      "Populations-Standardabweichung",
      "Statistik-Rechner",
      "Mittelwert",
      "Datenstreuung",
    ],
    inputs: {
      values: {
        label: "Datenwerte",
        help: "Geben Sie durch Kommas getrennte Zahlen ein (z.B. 2, 4, 5, 6, 8). Mindestens eine Zahl erforderlich.",
      },
      type: {
        label: "Typ",
        help: "Wählen Sie Grundgesamtheit (σ) für gesamte Datensätze oder Stichprobe (s) für Datenstichproben.",
      },
    },
    outputs: {
      count: {
        label: "Anzahl (n)",
        help: "Anzahl der Datenpunkte in Ihrem Datensatz.",
      },
      mean: {
        label: "Mittelwert (μ oder x̄)",
        help: "Der Durchschnitt aller Werte.",
      },
      variance: {
        label: "Varianz (σ² oder s²)",
        help: "Durchschnittliche quadratische Abweichung vom Mittelwert.",
      },
      standardDeviation: {
        label: "Standardabweichung (σ oder s)",
        help: "Quadratwurzel der Varianz. Misst die Verbreitung der Daten um den Mittelwert.",
      },
    },
    options: {
      type: {
        population: "Grundgesamtheit (σ) — n-Divisor",
        sample: "Stichprobe (s) — n-1-Divisor",
      },
    },
    errors: {
      invalidInput: "Bitte geben Sie gültige durch Kommas getrennte Zahlen ein.",
      emptyData: "Mindestens eine Zahl ist erforderlich.",
    },
    faq: [
      {
        q: "Was ist der Unterschied zwischen Populations- und Stichproben-Standardabweichung?",
        a: "Populations-Standardabweichung (σ) wird für Daten einer gesamten Grundgesamtheit verwendet und dividiert durch n. Stichproben-Standardabweichung (s) wird für Stichproben aus einer größeren Grundgesamtheit verwendet und dividiert durch n-1.",
      },
      {
        q: "Was bedeuten hohe und niedrige Standardabweichungen?",
        a: "Niedrige Standardabweichung bedeutet, dass Datenpunkte nahe am Mittelwert liegen. Hohe Standardabweichung bedeutet, dass Daten stärker verteilt sind.",
      },
      {
        q: "Wann sollte ich Stichproben- vs. Populations-Standardabweichung verwenden?",
        a: "Verwenden Sie Grundgesamtheit (n), wenn Sie den vollständigen Datensatz haben. Verwenden Sie Stichprobe (n-1), wenn Ihre Daten eine Stichprobe aus einer größeren Grundgesamtheit sind.",
      },
    ],
  },

  fr: {
    title: "Calculateur d'Écart-Type",
    short: "Calculez l'écart-type, la variance et la moyenne pour vos données.",
    description:
      "Calculateur gratuit d'écart-type. Entrez des nombres et obtenez la moyenne, la variance et l'écart-type avec les formules de population et d'échantillon.",
    keywords: [
      "calculateur écart-type",
      "calculateur variance",
      "écart-type échantillon",
      "écart-type population",
      "calculateur statistiques",
      "calculateur moyenne",
      "dispersion données",
    ],
    inputs: {
      values: {
        label: "Valeurs de données",
        help: "Entrez des nombres séparés par des virgules (ex: 2, 4, 5, 6, 8). Au moins un nombre requis.",
      },
      type: {
        label: "Type",
        help: "Choisissez population (σ) pour ensemble complet ou échantillon (s) pour données partielles.",
      },
    },
    outputs: {
      count: {
        label: "Nombre (n)",
        help: "Nombre de points de données dans votre ensemble.",
      },
      mean: {
        label: "Moyenne (μ ou x̄)",
        help: "La moyenne de tous les nombres.",
      },
      variance: {
        label: "Variance (σ² ou s²)",
        help: "Écart carré moyen de la moyenne.",
      },
      standardDeviation: {
        label: "Écart-Type (σ ou s)",
        help: "Racine carrée de la variance. Mesure la dispersion des données.",
      },
    },
    options: {
      type: {
        population: "Population (σ) — diviseur n",
        sample: "Échantillon (s) — diviseur n-1",
      },
    },
    errors: {
      invalidInput: "Veuillez entrer des nombres valides séparés par des virgules.",
      emptyData: "Au moins un nombre est requis.",
    },
    faq: [
      {
        q: "Quelle est la différence entre écart-type de population et d'échantillon?",
        a: "L'écart-type de population (σ) s'utilise pour l'ensemble complet et divise par n. L'écart-type d'échantillon (s) s'utilise pour un échantillon et divise par n-1 pour une estimation sans biais.",
      },
    ],
  },

  es: {
    title: "Calculadora de Desviación Estándar",
    short: "Calcula la desviación estándar, varianza y media de tus datos.",
    description:
      "Calculadora gratuita de desviación estándar. Ingresa números y obtén la media, varianza y desviación estándar con fórmulas de población y muestra.",
    keywords: [
      "calculadora desviación estándar",
      "calculadora varianza",
      "desviación estándar muestra",
      "desviación estándar población",
      "calculadora estadística",
      "calculadora media",
      "dispersión datos",
    ],
    inputs: {
      values: {
        label: "Valores de datos",
        help: "Ingresa números separados por comas (ej: 2, 4, 5, 6, 8). Se requiere al menos un número.",
      },
      type: {
        label: "Tipo",
        help: "Elige población (σ) para conjunto completo o muestra (s) para datos parciales.",
      },
    },
    outputs: {
      count: {
        label: "Cantidad (n)",
        help: "Cantidad de puntos de datos en tu conjunto.",
      },
      mean: {
        label: "Media (μ o x̄)",
        help: "El promedio de todos los valores.",
      },
      variance: {
        label: "Varianza (σ² o s²)",
        help: "Desviación cuadrada promedio de la media.",
      },
      standardDeviation: {
        label: "Desviación Estándar (σ o s)",
        help: "Raíz cuadrada de la varianza. Mide cuán dispersos están los datos.",
      },
    },
    options: {
      type: {
        population: "Población (σ) — divisor n",
        sample: "Muestra (s) — divisor n-1",
      },
    },
    errors: {
      invalidInput: "Por favor ingresa números válidos separados por comas.",
      emptyData: "Se requiere al menos un número.",
    },
    faq: [
      {
        q: "¿Cuál es la diferencia entre desviación estándar de población y muestra?",
        a: "La desviación estándar de población (σ) se usa para conjunto completo y divide por n. La desviación estándar de muestra (s) se usa para muestras y divide por n-1 para una estimación sin sesgo.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Deviazione Standard",
    short: "Calcola la deviazione standard, varianza e media dei tuoi dati.",
    description:
      "Calcolatore gratuito di deviazione standard. Inserisci numeri e ottieni media, varianza e deviazione standard con formule di popolazione e campione.",
    keywords: [
      "calcolatore deviazione standard",
      "calcolatore varianza",
      "deviazione standard campione",
      "deviazione standard popolazione",
      "calcolatore statistiche",
      "calcolatore media",
      "dispersione dati",
    ],
    inputs: {
      values: {
        label: "Valori dati",
        help: "Inserisci numeri separati da virgole (es: 2, 4, 5, 6, 8). Almeno un numero richiesto.",
      },
      type: {
        label: "Tipo",
        help: "Scegli popolazione (σ) per set completo o campione (s) per dati parziali.",
      },
    },
    outputs: {
      count: {
        label: "Conteggio (n)",
        help: "Numero di punti dati nel tuo set.",
      },
      mean: {
        label: "Media (μ o x̄)",
        help: "La media di tutti i valori.",
      },
      variance: {
        label: "Varianza (σ² o s²)",
        help: "Deviazione quadrata media dalla media.",
      },
      standardDeviation: {
        label: "Deviazione Standard (σ o s)",
        help: "Radice quadrata della varianza. Misura quanto i dati sono dispersi.",
      },
    },
    options: {
      type: {
        population: "Popolazione (σ) — divisore n",
        sample: "Campione (s) — divisore n-1",
      },
    },
    errors: {
      invalidInput: "Inserisci numeri validi separati da virgole.",
      emptyData: "Almeno un numero è richiesto.",
    },
    faq: [
      {
        q: "Qual è la differenza tra deviazione standard di popolazione e campione?",
        a: "La deviazione standard di popolazione (σ) viene usata per l'intero set e divide per n. La deviazione standard di campione (s) viene usata per campioni e divide per n-1 per una stima imparziale.",
      },
    ],
  },

  ar: {
    title: "حاسبة الانحراف المعياري",
    short: "احسب الانحراف المعياري والتباين والمتوسط لبيانات مجموعتك.",
    description:
      "حاسبة الانحراف المعياري المجانية. أدخل الأرقام واحصل على المتوسط والتباين والانحراف المعياري باستخدام صيغ المجموعة والعينة.",
    keywords: [
      "حاسبة الانحراف المعياري",
      "حاسبة التباين",
      "انحراف معياري العينة",
      "انحراف معياري المجموعة",
      "حاسبة إحصائيات",
      "حاسبة المتوسط",
      "تشتت البيانات",
    ],
    inputs: {
      values: {
        label: "قيم البيانات",
        help: "أدخل أرقامًا مفصولة بفواصل (مثال: 2، 4، 5، 6، 8). يُطلب رقم واحد على الأقل.",
      },
      type: {
        label: "النوع",
        help: "اختر مجموعة (σ) للبيانات الكاملة أو عينة (s) للبيانات الجزئية.",
      },
    },
    outputs: {
      count: {
        label: "العدد (n)",
        help: "عدد نقاط البيانات في مجموعتك.",
      },
      mean: {
        label: "المتوسط (μ أو x̄)",
        help: "متوسط جميع القيم.",
      },
      variance: {
        label: "التباين (σ² أو s²)",
        help: "متوسط الانحراف المربع من المتوسط.",
      },
      standardDeviation: {
        label: "الانحراف المعياري (σ أو s)",
        help: "جذر التباين. يقيس مدى انتشار البيانات حول المتوسط.",
      },
    },
    options: {
      type: {
        population: "المجموعة (σ) — المقسوم عليه n",
        sample: "العينة (s) — المقسوم عليه n-1",
      },
    },
    errors: {
      invalidInput: "يرجى إدخال أرقام صحيحة مفصولة بفواصل.",
      emptyData: "يُطلب رقم واحد على الأقل.",
    },
    faq: [
      {
        q: "ما الفرق بين الانحراف المعياري للمجموعة والعينة؟",
        a: "الانحراف المعياري للمجموعة (σ) يُستخدم للمجموعة الكاملة ويقسم على n. الانحراف المعياري للعينة (s) يُستخدم للعينات ويقسم على n-1 للحصول على تقدير غير متحيز.",
      },
    ],
  },

  ru: {
    title: "Калькулятор Стандартного Отклонения",
    short: "Вычислите стандартное отклонение, дисперсию и среднее значение ваших данных.",
    description:
      "Бесплатный калькулятор стандартного отклонения. Введите числа и получите среднее, дисперсию и стандартное отклонение с формулами для населения и выборки.",
    keywords: [
      "калькулятор стандартного отклонения",
      "калькулятор дисперсии",
      "стандартное отклонение выборки",
      "стандартное отклонение населения",
      "статистический калькулятор",
      "калькулятор среднего",
      "рассеивание данных",
    ],
    inputs: {
      values: {
        label: "Значения данных",
        help: "Введите числа, разделённые запятыми (например: 2, 4, 5, 6, 8). Требуется по меньшей мере одно число.",
      },
      type: {
        label: "Тип",
        help: "Выберите население (σ) для полного набора или выборку (s) для частичных данных.",
      },
    },
    outputs: {
      count: {
        label: "Количество (n)",
        help: "Число точек данных в вашем наборе.",
      },
      mean: {
        label: "Среднее (μ или x̄)",
        help: "Среднее значение всех чисел.",
      },
      variance: {
        label: "Дисперсия (σ² или s²)",
        help: "Средний квадрат отклонения от среднего.",
      },
      standardDeviation: {
        label: "Стандартное Отклонение (σ или s)",
        help: "Корень из дисперсии. Измеряет разброс данных вокруг среднего.",
      },
    },
    options: {
      type: {
        population: "Население (σ) — делитель n",
        sample: "Выборка (s) — делитель n-1",
      },
    },
    errors: {
      invalidInput: "Пожалуйста, введите правильные числа, разделённые запятыми.",
      emptyData: "Требуется по меньшей мере одно число.",
    },
    faq: [
      {
        q: "В чём разница между стандартным отклонением населения и выборки?",
        a: "Стандартное отклонение населения (σ) используется для полного набора и делит на n. Стандартное отклонение выборки (s) используется для выборок и делит на n-1 для несмещённой оценки.",
      },
    ],
  },

  zh: {
    title: "标准差计算器",
    short: "计算数据集的标准差、方差和平均值。",
    description:
      "免费标准差计算器。输入数字，使用总体和样本公式获取平均值、方差和标准差。",
    keywords: [
      "标准差计算器",
      "方差计算器",
      "样本标准差",
      "总体标准差",
      "统计计算器",
      "平均值计算器",
      "数据离散度",
    ],
    inputs: {
      values: {
        label: "数据值",
        help: "输入用逗号分隔的数字（例：2, 4, 5, 6, 8）。至少需要一个数字。",
      },
      type: {
        label: "类型",
        help: "选择总体(σ)表示完整数据集，或样本(s)表示数据样本。",
      },
    },
    outputs: {
      count: {
        label: "数据点数(n)",
        help: "数据集中数据点的个数。",
      },
      mean: {
        label: "平均值(μ或x̄)",
        help: "所有值的平均数。",
      },
      variance: {
        label: "方差(σ²或s²)",
        help: "与平均值的平均平方偏差。",
      },
      standardDeviation: {
        label: "标准差(σ或s)",
        help: "方差的平方根。衡量数据与平均值的离散程度。",
      },
    },
    options: {
      type: {
        population: "总体(σ) — 除数n",
        sample: "样本(s) — 除数n-1",
      },
    },
    errors: {
      invalidInput: "请输入用逗号分隔的有效数字。",
      emptyData: "至少需要一个数字。",
    },
    faq: [
      {
        q: "总体标准差和样本标准差有什么区别?",
        a: "总体标准差(σ)用于完整数据集，除以n。样本标准差(s)用于数据样本，除以n-1以获得无偏估计(贝塞尔修正)。",
      },
    ],
  },

  ja: {
    title: "標準偏差計算機",
    short: "データセットの標準偏差、分散、平均値を計算します。",
    description:
      "無料の標準偏差計算機。数字を入力し、母集団と標本の公式を使用して、平均、分散、標準偏差を取得します。",
    keywords: [
      "標準偏差計算",
      "分散計算",
      "標本標準偏差",
      "母集団標準偏差",
      "統計計算",
      "平均計算",
      "データ分散",
    ],
    inputs: {
      values: {
        label: "データ値",
        help: "カンマで区切った数字を入力します(例: 2, 4, 5, 6, 8)。最低1個の数字が必要です。",
      },
      type: {
        label: "タイプ",
        help: "完全なデータセットの場合は母集団(σ)、データサンプルの場合は標本(s)を選択します。",
      },
    },
    outputs: {
      count: {
        label: "データ数(n)",
        help: "データセットのデータ点の数。",
      },
      mean: {
        label: "平均(μまたはx̄)",
        help: "すべての値の平均。",
      },
      variance: {
        label: "分散(σ²またはs²)",
        help: "平均からの平均二乗偏差。",
      },
      standardDeviation: {
        label: "標準偏差(σまたはs)",
        help: "分散の平方根。データが平均からどの程度散らばっているかを測定します。",
      },
    },
    options: {
      type: {
        population: "母集団(σ) — 除数n",
        sample: "標本(s) — 除数n-1",
      },
    },
    errors: {
      invalidInput: "カンマで区切られた有効な数字を入力してください。",
      emptyData: "最低1個の数字が必要です。",
    },
    faq: [
      {
        q: "母集団標準偏差と標本標準偏差の違いは何ですか?",
        a: "母集団標準偏差(σ)は完全なデータセットに使用され、nで割ります。標本標準偏差(s)はサンプルに使用され、n-1で割って不偏推定量を得ます(ベッセル補正)。",
      },
    ],
  },

  ko: {
    title: "표준편차 계산기",
    short: "데이터 집합의 표준편차, 분산, 평균을 계산합니다.",
    description:
      "무료 표준편차 계산기. 숫자를 입력하고 모집단 및 표본 공식을 사용하여 평균, 분산, 표준편차를 구합니다.",
    keywords: [
      "표준편차 계산기",
      "분산 계산기",
      "표본 표준편차",
      "모집단 표준편차",
      "통계 계산기",
      "평균 계산기",
      "데이터 산포",
    ],
    inputs: {
      values: {
        label: "데이터 값",
        help: "쉼표로 구분한 숫자를 입력하세요(예: 2, 4, 5, 6, 8). 최소 1개의 숫자가 필요합니다.",
      },
      type: {
        label: "유형",
        help: "전체 데이터 집합의 경우 모집단(σ), 데이터 표본의 경우 표본(s)을 선택하세요.",
      },
    },
    outputs: {
      count: {
        label: "데이터 수(n)",
        help: "데이터 집합의 데이터 포인트 수입니다.",
      },
      mean: {
        label: "평균(μ 또는 x̄)",
        help: "모든 값의 평균입니다.",
      },
      variance: {
        label: "분산(σ² 또는 s²)",
        help: "평균으로부터의 평균 제곱 편차입니다.",
      },
      standardDeviation: {
        label: "표준편차(σ 또는 s)",
        help: "분산의 제곱근입니다. 데이터가 평균에서 얼마나 떨어져 있는지 측정합니다.",
      },
    },
    options: {
      type: {
        population: "모집단(σ) — 제수 n",
        sample: "표본(s) — 제수 n-1",
      },
    },
    errors: {
      invalidInput: "쉼표로 구분한 유효한 숫자를 입력하세요.",
      emptyData: "최소 1개의 숫자가 필요합니다.",
    },
    faq: [
      {
        q: "모집단 표준편차와 표본 표준편차의 차이는 무엇인가요?",
        a: "모집단 표준편차(σ)는 전체 데이터 집합에 사용되며 n으로 나눕니다. 표본 표준편차(s)는 표본에 사용되며 비편향 추정을 위해 n-1로 나눕니다.",
      },
    ],
  },

  hi: {
    title: "मानक विचलन कैलकुलेटर",
    short: "आपकी डेटा सेट के लिए मानक विचलन, विचरण और माध्य की गणना करें।",
    description:
      "मुफ़्त मानक विचलन कैलकुलेटर। संख्याएँ दर्ज करें और जनसंख्या और नमूना सूत्रों के साथ माध्य, विचरण और मानक विचलन प्राप्त करें।",
    keywords: [
      "मानक विचलन कैलकुलेटर",
      "विचरण कैलकुलेटर",
      "नमूना मानक विचलन",
      "जनसंख्या मानक विचलन",
      "सांख्यिकी कैलकुलेटर",
      "माध्य कैलकुलेटर",
      "डेटा प्रसार",
    ],
    inputs: {
      values: {
        label: "डेटा मान",
        help: "अल्पविरामों से अलग की गई संख्याओं को दर्ज करें (उदा: 2, 4, 5, 6, 8)। कम से कम एक संख्या आवश्यक है।",
      },
      type: {
        label: "प्रकार",
        help: "पूर्ण डेटा सेट के लिए जनसंख्या (σ) या डेटा नमूने के लिए नमूना (s) चुनें।",
      },
    },
    outputs: {
      count: {
        label: "गणना (n)",
        help: "आपकी डेटा सेट में डेटा बिंदुओं की संख्या।",
      },
      mean: {
        label: "माध्य (μ या x̄)",
        help: "सभी मानों का औसत।",
      },
      variance: {
        label: "विचरण (σ² या s²)",
        help: "माध्य से औसत वर्ग विचलन।",
      },
      standardDeviation: {
        label: "मानक विचलन (σ या s)",
        help: "विचरण का वर्गमूल। डेटा माध्य से कितना फैला हुआ है यह मापता है।",
      },
    },
    options: {
      type: {
        population: "जनसंख्या (σ) — भाजक n",
        sample: "नमूना (s) — भाजक n-1",
      },
    },
    errors: {
      invalidInput: "कृपया अल्पविरामों से अलग की गई मान्य संख्याएँ दर्ज करें।",
      emptyData: "कम से कम एक संख्या आवश्यक है।",
    },
    faq: [
      {
        q: "जनसंख्या और नमूना मानक विचलन में क्या अंतर है?",
        a: "जनसंख्या मानक विचलन (σ) पूर्ण डेटा सेट के लिए उपयोग किया जाता है और n से विभाजित होता है। नमूना मानक विचलन (s) नमूनों के लिए उपयोग किया जाता है और निष्पक्ष अनुमान के लिए n-1 से विभाजित होता है।",
      },
    ],
  },
};

export default i18n;
