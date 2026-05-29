import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Descriptive Statistics Calculator",
    short: "Get complete statistical summary: min, max, mean, median, mode, quartiles, variance, and standard deviation.",
    description:
      "Free descriptive statistics calculator. Analyze your data with 12 key metrics including mean, median, quartiles, IQR, variance, and standard deviation for comprehensive data exploration.",
    keywords: [
      "descriptive statistics",
      "data analysis calculator",
      "statistical summary",
      "five-number summary",
      "quartiles calculator",
      "IQR calculator",
      "variance calculator",
      "standard deviation calculator",
      "median calculator",
      "mode calculator",
    ],
    inputs: {
      values: {
        label: "Data values",
        help: "Enter numbers separated by commas (e.g., 2, 5, 7, 9, 3). Minimum one value required.",
      },
    },
    outputs: {
      count: { label: "Count (n)", help: "Number of data points." },
      min: { label: "Minimum", help: "Smallest value in the dataset." },
      max: { label: "Maximum", help: "Largest value in the dataset." },
      range: { label: "Range", help: "Difference between max and min." },
      mean: { label: "Mean (Average)", help: "Sum of all values divided by count." },
      median: { label: "Median", help: "Middle value when sorted; splits data in half." },
      mode: { label: "Mode", help: "Most frequently occurring value (or 'No unique mode')." },
      q1: { label: "Q1 (25th percentile)", help: "Quartile 1; 25% of data below this value." },
      q3: { label: "Q3 (75th percentile)", help: "Quartile 3; 75% of data below this value." },
      iqr: { label: "IQR (Interquartile Range)", help: "Q3 - Q1; contains middle 50% of data." },
      variance: { label: "Variance", help: "Average squared deviation from the mean." },
      stdDev: { label: "Standard Deviation", help: "Square root of variance; measures data spread." },
    },
    options: {},
    errors: {
      invalidInput: "Please enter valid comma-separated numbers.",
      emptyData: "At least one number is required.",
    },
    faq: [
      {
        q: "What is the difference between mean and median?",
        a: "Mean is the average (sum/count), while median is the middle value. Median is more resistant to outliers. For symmetric data they're similar; for skewed data they differ significantly.",
      },
      {
        q: "What does IQR tell me?",
        a: "The Interquartile Range (IQR) spans the middle 50% of your data. It's robust to outliers and used to identify them: values below Q1-1.5×IQR or above Q3+1.5×IQR are typically considered outliers.",
      },
      {
        q: "How do I identify outliers?",
        a: "Lower bound: Q1 - 1.5 × IQR. Upper bound: Q3 + 1.5 × IQR. Any data point outside these bounds is a potential outlier.",
      },
      {
        q: "What is the five-number summary?",
        a: "A concise data description using: minimum, Q1, median, Q3, and maximum. These five numbers provide a quick understanding of data distribution, center, and spread.",
      },
      {
        q: "Why is standard deviation important?",
        a: "Standard deviation quantifies data variability. In a normal distribution, ~68% of data falls within 1 std dev of the mean, ~95% within 2, and ~99.7% within 3.",
      },
    ],
  },
  pt: {
    title: "Descriptive Statistics Calculator",
    short: "Get complete statistical summary: min, max, mean, median, mode, quartiles, variance, and standard deviation.",
    description:
      "Free descriptive statistics calculator. Analyze your data with 12 key metrics including mean, median, quartiles, IQR, variance, and standard deviation for comprehensive data exploration.",
    keywords: [
      "descriptive statistics",
      "data analysis calculator",
      "statistical summary",
      "five-number summary",
      "quartiles calculator",
      "IQR calculator",
      "variance calculator",
      "standard deviation calculator",
      "median calculator",
      "mode calculator",
    ],
    inputs: {
      values: {
        label: "Data values",
        help: "Enter numbers separated by commas (e.g., 2, 5, 7, 9, 3). Minimum one value required.",
      },
    },
    outputs: {
      count: { label: "Count (n)", help: "Number of data points." },
      min: { label: "Minimum", help: "Smallest value in the dataset." },
      max: { label: "Maximum", help: "Largest value in the dataset." },
      range: { label: "Range", help: "Difference between max and min." },
      mean: { label: "Mean (Average)", help: "Sum of all values divided by count." },
      median: { label: "Median", help: "Middle value when sorted; splits data in half." },
      mode: { label: "Mode", help: "Most frequently occurring value (or 'No unique mode')." },
      q1: { label: "Q1 (25th percentile)", help: "Quartile 1; 25% of data below this value." },
      q3: { label: "Q3 (75th percentile)", help: "Quartile 3; 75% of data below this value." },
      iqr: { label: "IQR (Interquartile Range)", help: "Q3 - Q1; contains middle 50% of data." },
      variance: { label: "Variance", help: "Average squared deviation from the mean." },
      stdDev: { label: "Standard Deviation", help: "Square root of variance; measures data spread." },
    },
    options: {},
    errors: {
      invalidInput: "Please enter valid comma-separated numbers.",
      emptyData: "At least one number is required.",
    },
    faq: [
      {
        q: "What is the difference between mean and median?",
        a: "Mean is the average (sum/count), while median is the middle value. Median is more resistant to outliers. For symmetric data they're similar; for skewed data they differ significantly.",
      },
      {
        q: "What does IQR tell me?",
        a: "The Interquartile Range (IQR) spans the middle 50% of your data. It's robust to outliers and used to identify them: values below Q1-1.5×IQR or above Q3+1.5×IQR are typically considered outliers.",
      },
      {
        q: "How do I identify outliers?",
        a: "Lower bound: Q1 - 1.5 × IQR. Upper bound: Q3 + 1.5 × IQR. Any data point outside these bounds is a potential outlier.",
      },
      {
        q: "What is the five-number summary?",
        a: "A concise data description using: minimum, Q1, median, Q3, and maximum. These five numbers provide a quick understanding of data distribution, center, and spread.",
      },
      {
        q: "Why is standard deviation important?",
        a: "Standard deviation quantifies data variability. In a normal distribution, ~68% of data falls within 1 std dev of the mean, ~95% within 2, and ~99.7% within 3.",
      },
    ],
  },
  id: {
    title: "Descriptive Statistics Calculator",
    short: "Get complete statistical summary: min, max, mean, median, mode, quartiles, variance, and standard deviation.",
    description:
      "Free descriptive statistics calculator. Analyze your data with 12 key metrics including mean, median, quartiles, IQR, variance, and standard deviation for comprehensive data exploration.",
    keywords: [
      "descriptive statistics",
      "data analysis calculator",
      "statistical summary",
      "five-number summary",
      "quartiles calculator",
      "IQR calculator",
      "variance calculator",
      "standard deviation calculator",
      "median calculator",
      "mode calculator",
    ],
    inputs: {
      values: {
        label: "Data values",
        help: "Enter numbers separated by commas (e.g., 2, 5, 7, 9, 3). Minimum one value required.",
      },
    },
    outputs: {
      count: { label: "Count (n)", help: "Number of data points." },
      min: { label: "Minimum", help: "Smallest value in the dataset." },
      max: { label: "Maximum", help: "Largest value in the dataset." },
      range: { label: "Range", help: "Difference between max and min." },
      mean: { label: "Mean (Average)", help: "Sum of all values divided by count." },
      median: { label: "Median", help: "Middle value when sorted; splits data in half." },
      mode: { label: "Mode", help: "Most frequently occurring value (or 'No unique mode')." },
      q1: { label: "Q1 (25th percentile)", help: "Quartile 1; 25% of data below this value." },
      q3: { label: "Q3 (75th percentile)", help: "Quartile 3; 75% of data below this value." },
      iqr: { label: "IQR (Interquartile Range)", help: "Q3 - Q1; contains middle 50% of data." },
      variance: { label: "Variance", help: "Average squared deviation from the mean." },
      stdDev: { label: "Standard Deviation", help: "Square root of variance; measures data spread." },
    },
    options: {},
    errors: {
      invalidInput: "Please enter valid comma-separated numbers.",
      emptyData: "At least one number is required.",
    },
    faq: [
      {
        q: "What is the difference between mean and median?",
        a: "Mean is the average (sum/count), while median is the middle value. Median is more resistant to outliers. For symmetric data they're similar; for skewed data they differ significantly.",
      },
      {
        q: "What does IQR tell me?",
        a: "The Interquartile Range (IQR) spans the middle 50% of your data. It's robust to outliers and used to identify them: values below Q1-1.5×IQR or above Q3+1.5×IQR are typically considered outliers.",
      },
      {
        q: "How do I identify outliers?",
        a: "Lower bound: Q1 - 1.5 × IQR. Upper bound: Q3 + 1.5 × IQR. Any data point outside these bounds is a potential outlier.",
      },
      {
        q: "What is the five-number summary?",
        a: "A concise data description using: minimum, Q1, median, Q3, and maximum. These five numbers provide a quick understanding of data distribution, center, and spread.",
      },
      {
        q: "Why is standard deviation important?",
        a: "Standard deviation quantifies data variability. In a normal distribution, ~68% of data falls within 1 std dev of the mean, ~95% within 2, and ~99.7% within 3.",
      },
    ],
  },


  tr: {
    title: "Betimleyici İstatistik Hesaplayıcı",
    short: "Tam istatistiksel özet: min, max, ortalama, medyan, mod, çeyrekler, varyans ve standart sapma.",
    description:
      "Ücretsiz betimleyici istatistik hesaplayıcı. Kapsamlı veri analizi için ortalama, medyan, çeyrekler, IQR, varyans ve standart sapma dahil 12 anahtar metrik ile verilerinizi analiz edin.",
    keywords: [
      "betimleyici istatistik",
      "veri analizi hesaplayıcı",
      "istatistiksel özet",
      "beş sayı özeti",
      "çeyrek hesaplayıcı",
      "IQR hesaplayıcı",
      "varyans hesaplayıcı",
      "standart sapma hesaplayıcı",
      "medyan hesaplayıcı",
      "mod hesaplayıcı",
    ],
    inputs: {
      values: {
        label: "Veri değerleri",
        help: "Virgülle ayrılmış sayıları girin (örn: 2, 5, 7, 9, 3). En az bir değer gerekli.",
      },
    },
    outputs: {
      count: { label: "Sayı (n)", help: "Veri noktalarının sayısı." },
      min: { label: "Minimum", help: "Veri setindeki en küçük değer." },
      max: { label: "Maksimum", help: "Veri setindeki en büyük değer." },
      range: { label: "Ranj", help: "Maksimum ve minimum arasındaki fark." },
      mean: { label: "Ortalama", help: "Tüm değerlerin toplamı bölü sayı." },
      median: { label: "Medyan", help: "Sıralandığında ortadaki değer; veriyi ikiye böler." },
      mode: { label: "Mod", help: "En sık tekrarlanan değer (veya 'Benzersiz mod yok')." },
      q1: { label: "Q1 (25. yüzdelik)", help: "Çeyrek 1; verilerin %25'i bu değerin altında." },
      q3: { label: "Q3 (75. yüzdelik)", help: "Çeyrek 3; verilerin %75'i bu değerin altında." },
      iqr: { label: "IQR (Çeyrekler Arası Ranj)", help: "Q3 - Q1; verilerin orta %50'sini içerir." },
      variance: { label: "Varyans", help: "Ortalamadan kare farkların ortalaması." },
      stdDev: { label: "Standart Sapma", help: "Varyansın karekökü; veri yayılımını ölçer." },
    },
    options: {},
    errors: {
      invalidInput: "Lütfen geçerli virgülle ayrılmış sayılar girin.",
      emptyData: "En az bir sayı gereklidir.",
    },
    faq: [
      {
        q: "Ortalama ve medyan arasındaki fark nedir?",
        a: "Ortalama tüm değerlerin toplamı bölü sayı iken, medyan ortadaki değerdir. Medyan aykırı değerlere daha dirençlidir. Simetrik veriler için benzer; çarpık veriler için farklıdır.",
      },
      {
        q: "IQR bana ne söyler?",
        a: "Çeyrekler Arası Ranj (IQR) verilerinizin orta %50'sini kapsar. Aykırı değerlere dirençlidir. Aykırı değerleri tanımlamak için kullanılır: Q1-1.5×IQR altında veya Q3+1.5×IQR üstünde olanlar aykırı kabul edilir.",
      },
      {
        q: "Aykırı değerleri nasıl belirlerim?",
        a: "Alt sınır: Q1 - 1,5 × IQR. Üst sınır: Q3 + 1,5 × IQR. Bu sınırların dışında kalan veri potansiyel aykırı değerdir.",
      },
      {
        q: "Beş sayı özeti nedir?",
        a: "Minimum, Q1, medyan, Q3 ve maksimum kullanan kısa bir veri açıklaması. Bu beş sayı veri dağılımı, merkez ve yayılımı hızlıca anlamamızı sağlar.",
      },
      {
        q: "Neden standart sapma önemli?",
        a: "Standart sapma veri değişkenliğini ölçer. Normal dağılımda, verilerin ~%68'i ortalamadan 1 sapma, ~%95'i 2 sapma, ~%99,7'si 3 sapma içindedir.",
      },
    ],
  },

  de: {
    title: "Deskriptive Statistik-Rechner",
    short: "Vollständige statistische Zusammenfassung: Min, Max, Mittelwert, Median, Modus, Quartile, Varianz und Standardabweichung.",
    description:
      "Kostenloser deskriptiver Statistik-Rechner. Analysieren Sie Ihre Daten mit 12 Schlüsselkennzahlen einschließlich Mittelwert, Median, Quartilen, IQR, Varianz und Standardabweichung.",
    keywords: [
      "deskriptive statistik",
      "datenanalysator",
      "statistische zusammenfassung",
      "fünf-zahlen-zusammenfassung",
      "quartil-rechner",
      "iqr-rechner",
      "varianz-rechner",
      "standardabweichung-rechner",
      "median-rechner",
      "modus-rechner",
    ],
    inputs: {
      values: {
        label: "Datenwerte",
        help: "Geben Sie durch Kommas getrennte Zahlen ein (z.B. 2, 5, 7, 9, 3). Mindestens ein Wert erforderlich.",
      },
    },
    outputs: {
      count: { label: "Anzahl (n)", help: "Anzahl der Datenpunkte." },
      min: { label: "Minimum", help: "Kleinster Wert im Datensatz." },
      max: { label: "Maximum", help: "Größter Wert im Datensatz." },
      range: { label: "Spannweite", help: "Differenz zwischen Maximum und Minimum." },
      mean: { label: "Mittelwert", help: "Summe aller Werte geteilt durch die Anzahl." },
      median: { label: "Median", help: "Mittlerer Wert; teilt Daten in zwei Hälften." },
      mode: { label: "Modus", help: "Häufigster Wert (oder 'Kein eindeutiger Modus')." },
      q1: { label: "Q1 (25. Perzentil)", help: "Quartil 1; 25% der Daten unter diesem Wert." },
      q3: { label: "Q3 (75. Perzentil)", help: "Quartil 3; 75% der Daten unter diesem Wert." },
      iqr: { label: "IQR (Interquartilbereich)", help: "Q3 - Q1; enthält mittlere 50% der Daten." },
      variance: { label: "Varianz", help: "Durchschnittliche quadratische Abweichung vom Mittelwert." },
      stdDev: { label: "Standardabweichung", help: "Quadratwurzel der Varianz; misst Datenstreuung." },
    },
    options: {},
    errors: {
      invalidInput: "Bitte geben Sie gültige durch Kommas getrennte Zahlen ein.",
      emptyData: "Mindestens eine Zahl ist erforderlich.",
    },
    faq: [
      {
        q: "Was ist der Unterschied zwischen Mittelwert und Median?",
        a: "Mittelwert ist der Durchschnitt (Summe/Anzahl), Median ist der mittlere Wert. Median ist weniger anfällig für Ausreißer. Bei symmetrischen Daten sind sie ähnlich; bei asymmetrischen unterscheiden sie sich.",
      },
      {
        q: "Was sagt mir die IQR?",
        a: "Der Interquartilbereich (IQR) umfasst die mittleren 50% Ihrer Daten. Er ist robust gegen Ausreißer und wird verwendet, um diese zu identifizieren.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Statistiques Descriptives",
    short: "Résumé statistique complet: min, max, moyenne, médiane, mode, quartiles, variance et écart-type.",
    description:
      "Calculateur gratuit de statistiques descriptives. Analysez vos données avec 12 métriques clés incluant moyenne, médiane, quartiles, IQR, variance et écart-type.",
    keywords: [
      "statistiques descriptives",
      "calculateur d'analyse de données",
      "résumé statistique",
      "résumé à cinq chiffres",
      "calculateur quartile",
      "calculateur iqr",
      "calculateur variance",
      "calculateur écart-type",
      "calculateur médiane",
      "calculateur mode",
    ],
    inputs: {
      values: {
        label: "Valeurs de données",
        help: "Entrez des nombres séparés par des virgules (ex: 2, 5, 7, 9, 3). Au moins un nombre requis.",
      },
    },
    outputs: {
      count: { label: "Nombre (n)", help: "Nombre de points de données." },
      min: { label: "Minimum", help: "Valeur la plus petite de l'ensemble." },
      max: { label: "Maximum", help: "Valeur la plus grande de l'ensemble." },
      range: { label: "Plage", help: "Différence entre max et min." },
      mean: { label: "Moyenne", help: "Somme divisée par le nombre de valeurs." },
      median: { label: "Médiane", help: "Valeur du milieu; divise les données en deux." },
      mode: { label: "Mode", help: "Valeur la plus fréquente (ou 'Pas de mode unique')." },
      q1: { label: "Q1 (25e percentile)", help: "Quartile 1; 25% des données sont en dessous." },
      q3: { label: "Q3 (75e percentile)", help: "Quartile 3; 75% des données sont en dessous." },
      iqr: { label: "IQR (Intervalle Interquartile)", help: "Q3 - Q1; contient les 50% du milieu." },
      variance: { label: "Variance", help: "Écart carré moyen par rapport à la moyenne." },
      stdDev: { label: "Écart-Type", help: "Racine de la variance; mesure la dispersion." },
    },
    options: {},
    errors: {
      invalidInput: "Veuillez entrer des nombres valides séparés par des virgules.",
      emptyData: "Au moins un nombre est requis.",
    },
    faq: [
      {
        q: "Quelle est la différence entre la moyenne et la médiane?",
        a: "La moyenne est le total divisé par le nombre de valeurs. La médiane est la valeur du milieu. La médiane est plus résistante aux valeurs aberrantes.",
      },
    ],
  },

  es: {
    title: "Calculadora de Estadística Descriptiva",
    short: "Resumen estadístico completo: mín, máx, media, mediana, moda, cuartiles, varianza y desviación estándar.",
    description:
      "Calculadora gratuita de estadística descriptiva. Analiza tus datos con 12 métricas clave incluyendo media, mediana, cuartiles, RIC, varianza y desviación estándar.",
    keywords: [
      "estadística descriptiva",
      "calculadora análisis de datos",
      "resumen estadístico",
      "resumen de cinco números",
      "calculadora cuartil",
      "calculadora rango intercuartil",
      "calculadora varianza",
      "calculadora desviación estándar",
      "calculadora mediana",
      "calculadora moda",
    ],
    inputs: {
      values: {
        label: "Valores de datos",
        help: "Ingresa números separados por comas (ej: 2, 5, 7, 9, 3). Se requiere mínimo un valor.",
      },
    },
    outputs: {
      count: { label: "Cantidad (n)", help: "Número de puntos de datos." },
      min: { label: "Mínimo", help: "Valor más pequeño del conjunto." },
      max: { label: "Máximo", help: "Valor más grande del conjunto." },
      range: { label: "Rango", help: "Diferencia entre máximo y mínimo." },
      mean: { label: "Media", help: "Suma dividida por cantidad de valores." },
      median: { label: "Mediana", help: "Valor del medio; divide datos en dos." },
      mode: { label: "Moda", help: "Valor más frecuente (o 'Sin moda única')." },
      q1: { label: "Q1 (Percentil 25)", help: "Cuartil 1; 25% de datos están debajo." },
      q3: { label: "Q3 (Percentil 75)", help: "Cuartil 3; 75% de datos están debajo." },
      iqr: { label: "RIC (Rango Intercuartil)", help: "Q3 - Q1; contiene el 50% del medio." },
      variance: { label: "Varianza", help: "Desviación cuadrada promedio de la media." },
      stdDev: { label: "Desviación Estándar", help: "Raíz de varianza; mide dispersión de datos." },
    },
    options: {},
    errors: {
      invalidInput: "Por favor ingresa números válidos separados por comas.",
      emptyData: "Se requiere mínimo un número.",
    },
    faq: [
      {
        q: "¿Cuál es la diferencia entre media y mediana?",
        a: "Media es el promedio (suma/cantidad), mediana es el valor del medio. Mediana es más resistente a valores extremos. En datos simétricos son similares; en sesgados difieren.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Statistica Descrittiva",
    short: "Riassunto statistico completo: min, max, media, mediana, moda, quartili, varianza e deviazione standard.",
    description:
      "Calcolatore gratuito di statistica descrittiva. Analizza i tuoi dati con 12 metriche chiave inclusi media, mediana, quartili, IQR, varianza e deviazione standard.",
    keywords: [
      "statistica descrittiva",
      "calcolatore analisi dati",
      "riassunto statistico",
      "riassunto a cinque numeri",
      "calcolatore quartile",
      "calcolatore iqr",
      "calcolatore varianza",
      "calcolatore deviazione standard",
      "calcolatore mediana",
      "calcolatore moda",
    ],
    inputs: {
      values: {
        label: "Valori dati",
        help: "Inserisci numeri separati da virgole (es: 2, 5, 7, 9, 3). Minimo un valore richiesto.",
      },
    },
    outputs: {
      count: { label: "Conteggio (n)", help: "Numero di punti dati." },
      min: { label: "Minimo", help: "Valore più piccolo del set." },
      max: { label: "Massimo", help: "Valore più grande del set." },
      range: { label: "Intervallo", help: "Differenza tra max e min." },
      mean: { label: "Media", help: "Somma divisa per il conteggio." },
      median: { label: "Mediana", help: "Valore centrale; divide i dati in due." },
      mode: { label: "Moda", help: "Valore più frequente (o 'Nessuna moda unica')." },
      q1: { label: "Q1 (25o percentile)", help: "Quartile 1; 25% dei dati sotto questo valore." },
      q3: { label: "Q3 (75o percentile)", help: "Quartile 3; 75% dei dati sotto questo valore." },
      iqr: { label: "IQR (Intervallo Interquartile)", help: "Q3 - Q1; contiene il 50% del mezzo." },
      variance: { label: "Varianza", help: "Deviazione quadrata media dalla media." },
      stdDev: { label: "Deviazione Standard", help: "Radice della varianza; misura la dispersione." },
    },
    options: {},
    errors: {
      invalidInput: "Inserisci numeri validi separati da virgole.",
      emptyData: "Almeno un numero è richiesto.",
    },
    faq: [
      {
        q: "Qual è la differenza tra media e mediana?",
        a: "Media è il totale diviso per il conteggio. Mediana è il valore centrale. La mediana è più robusta ai valori anomali. Per dati simmetrici sono simili; per dati asimmetrici differiscono.",
      },
    ],
  },

  ar: {
    title: "حاسبة الإحصاء الوصفي",
    short: "ملخص إحصائي كامل: الحد الأدنى والأقصى والمتوسط والوسيط والمنوال والربيعيات والتباين والانحراف المعياري.",
    description:
      "حاسبة الإحصاء الوصفي المجانية. حلل بيانات مع 12 مقياسًا رئيسيًا بما في ذلك المتوسط والوسيط والربيعيات والمدى الربيعي والتباين والانحراف المعياري.",
    keywords: [
      "الإحصاء الوصفي",
      "حاسبة تحليل البيانات",
      "الملخص الإحصائي",
      "ملخص الأرقام الخمسة",
      "حاسبة الربيعيات",
      "حاسبة المدى الربيعي",
      "حاسبة التباين",
      "حاسبة الانحراف المعياري",
      "حاسبة الوسيط",
      "حاسبة المنوال",
    ],
    inputs: {
      values: {
        label: "قيم البيانات",
        help: "أدخل أرقامًا مفصولة بفواصل (مثال: 2، 5، 7، 9، 3). يُطلب رقم واحد على الأقل.",
      },
    },
    outputs: {
      count: { label: "العدد (n)", help: "عدد نقاط البيانات." },
      min: { label: "الحد الأدنى", help: "أصغر قيمة في المجموعة." },
      max: { label: "الحد الأقصى", help: "أكبر قيمة في المجموعة." },
      range: { label: "المدى", help: "الفرق بين الأقصى والأدنى." },
      mean: { label: "المتوسط", help: "مجموع القيم مقسومًا على العدد." },
      median: { label: "الوسيط", help: "القيمة الوسطى؛ تقسم البيانات إلى نصفين." },
      mode: { label: "المنوال", help: "القيمة الأكثر تكرارًا (أو 'لا يوجد منوال فريد')." },
      q1: { label: "Q1 (الربيع الأول)", help: "25% من البيانات أقل من هذه القيمة." },
      q3: { label: "Q3 (الربيع الثالث)", help: "75% من البيانات أقل من هذه القيمة." },
      iqr: { label: "المدى الربيعي", help: "Q3 - Q1؛ يحتوي على 50% من الوسط." },
      variance: { label: "التباين", help: "متوسط الانحراف المربع عن المتوسط." },
      stdDev: { label: "الانحراف المعياري", help: "جذر التباين؛ يقيس انتشار البيانات." },
    },
    options: {},
    errors: {
      invalidInput: "يرجى إدخال أرقام صحيحة مفصولة بفواصل.",
      emptyData: "يُطلب رقم واحد على الأقل.",
    },
    faq: [
      {
        q: "ما الفرق بين المتوسط والوسيط?",
        a: "المتوسط هو مجموع القيم مقسومًا على العدد. الوسيط هو القيمة الوسطى. الوسيط أكثر مقاومة للقيم الشاذة.",
      },
    ],
  },

  ru: {
    title: "Калькулятор Описательной Статистики",
    short: "Полное статистическое резюме: мин, макс, среднее, медиана, мода, квартили, дисперсия и стандартное отклонение.",
    description:
      "Бесплатный калькулятор описательной статистики. Анализируйте данные с 12 ключевыми показателями включая среднее, медиану, квартили, размах, дисперсию и стандартное отклонение.",
    keywords: [
      "описательная статистика",
      "калькулятор анализа данных",
      "статистическое резюме",
      "пятичисловое резюме",
      "калькулятор квартилей",
      "калькулятор межквартильного размаха",
      "калькулятор дисперсии",
      "калькулятор стандартного отклонения",
      "калькулятор медианы",
      "калькулятор моды",
    ],
    inputs: {
      values: {
        label: "Значения данных",
        help: "Введите числа, разделённые запятыми (например: 2, 5, 7, 9, 3). Требуется по меньшей мере одно число.",
      },
    },
    outputs: {
      count: { label: "Количество (n)", help: "Число точек данных." },
      min: { label: "Минимум", help: "Наименьшее значение в наборе." },
      max: { label: "Максимум", help: "Наибольшее значение в наборе." },
      range: { label: "Размах", help: "Разница между макс и мин." },
      mean: { label: "Среднее", help: "Сумма, делённая на количество значений." },
      median: { label: "Медиана", help: "Среднее значение; делит данные пополам." },
      mode: { label: "Мода", help: "Наиболее часто встречающееся значение (или 'Нет уникальной моды')." },
      q1: { label: "Q1 (1-й квартиль)", help: "25% данных ниже этого значения." },
      q3: { label: "Q3 (3-й квартиль)", help: "75% данных ниже этого значения." },
      iqr: { label: "МКР (Межквартильный размах)", help: "Q3 - Q1; содержит средние 50% данных." },
      variance: { label: "Дисперсия", help: "Средний квадрат отклонения от среднего." },
      stdDev: { label: "Стандартное отклонение", help: "Корень из дисперсии; измеряет разброс данных." },
    },
    options: {},
    errors: {
      invalidInput: "Пожалуйста, введите правильные числа, разделённые запятыми.",
      emptyData: "Требуется по меньшей мере одно число.",
    },
    faq: [
      {
        q: "В чём разница между средним и медианой?",
        a: "Среднее — это сумма, делённая на количество значений. Медиана — это среднее значение. Медиана более устойчива к выбросам. Для симметричных данных они похожи; для асимметричных отличаются.",
      },
    ],
  },

  zh: {
    title: "描述统计计算器",
    short: "完整的统计摘要：最小值、最大值、平均值、中位数、众数、四分位数、方差和标准差。",
    description:
      "免费描述统计计算器。用12个关键指标分析数据，包括平均值、中位数、四分位数、四分位距、方差和标准差。",
    keywords: [
      "描述统计",
      "数据分析计算器",
      "统计摘要",
      "五数概括",
      "四分位数计算器",
      "四分位距计算器",
      "方差计算器",
      "标准差计算器",
      "中位数计算器",
      "众数计算器",
    ],
    inputs: {
      values: {
        label: "数据值",
        help: "输入用逗号分隔的数字（例：2, 5, 7, 9, 3）。至少需要一个数字。",
      },
    },
    outputs: {
      count: { label: "数据点数(n)", help: "数据集中的数据点数量。" },
      min: { label: "最小值", help: "数据集中的最小值。" },
      max: { label: "最大值", help: "数据集中的最大值。" },
      range: { label: "极差", help: "最大值与最小值的差。" },
      mean: { label: "平均值", help: "所有值的和除以数据点数。" },
      median: { label: "中位数", help: "排序后的中间值；将数据分成两半。" },
      mode: { label: "众数", help: "最常出现的值（或'没有唯一众数'）。" },
      q1: { label: "Q1（第一四分位数）", help: "25%的数据在此值以下。" },
      q3: { label: "Q3（第三四分位数）", help: "75%的数据在此值以下。" },
      iqr: { label: "四分位距(IQR)", help: "Q3 - Q1；包含中间50%的数据。" },
      variance: { label: "方差", help: "与平均值的平均平方偏差。" },
      stdDev: { label: "标准差", help: "方差的平方根；衡量数据的散布。" },
    },
    options: {},
    errors: {
      invalidInput: "请输入用逗号分隔的有效数字。",
      emptyData: "至少需要一个数字。",
    },
    faq: [
      {
        q: "平均值和中位数有什么区别?",
        a: "平均值是所有值的和除以数据点数。中位数是排序后的中间值。中位数对极端值的抵抗力更强。",
      },
    ],
  },

  ja: {
    title: "記述統計計算機",
    short: "完全な統計サマリー：最小値、最大値、平均、中央値、最頻値、四分位数、分散、標準偏差。",
    description:
      "無料の記述統計計算機。平均、中央値、四分位数、四分位範囲、分散、標準偏差など12の主要メトリクスでデータを分析します。",
    keywords: [
      "記述統計",
      "データ分析計算機",
      "統計サマリー",
      "5数要約",
      "四分位数計算機",
      "四分位範囲計算機",
      "分散計算機",
      "標準偏差計算機",
      "中央値計算機",
      "最頻値計算機",
    ],
    inputs: {
      values: {
        label: "データ値",
        help: "カンマで区切った数字を入力します(例: 2, 5, 7, 9, 3)。最低1個の数字が必要です。",
      },
    },
    outputs: {
      count: { label: "データ数(n)", help: "データセットのデータ点の数。" },
      min: { label: "最小値", help: "データセット内の最小値。" },
      max: { label: "最大値", help: "データセット内の最大値。" },
      range: { label: "範囲", help: "最大値と最小値の差。" },
      mean: { label: "平均", help: "すべての値の合計をデータ数で割ったもの。" },
      median: { label: "中央値", help: "ソート後の中間値；データを二分します。" },
      mode: { label: "最頻値", help: "最も頻繁に出現する値（または「唯一の最頻値なし」）。" },
      q1: { label: "Q1（第1四分位数）", help: "データの25%がこの値以下。" },
      q3: { label: "Q3（第3四分位数）", help: "データの75%がこの値以下。" },
      iqr: { label: "IQR（四分位範囲）", help: "Q3 - Q1；データの中間50%を含みます。" },
      variance: { label: "分散", help: "平均からの平均二乗偏差。" },
      stdDev: { label: "標準偏差", help: "分散の平方根；データの散らばりを測定します。" },
    },
    options: {},
    errors: {
      invalidInput: "カンマで区切られた有効な数字を入力してください。",
      emptyData: "最低1個の数字が必要です。",
    },
    faq: [
      {
        q: "平均と中央値の違いは何ですか?",
        a: "平均はすべての値の合計をデータ数で割ったもの。中央値はソート後の中間値。中央値は外れ値に強い。対称データでは似ていますが、歪んだデータでは異なります。",
      },
    ],
  },

  ko: {
    title: "기술통계 계산기",
    short: "완전한 통계 요약: 최소값, 최대값, 평균, 중앙값, 최빈값, 사분위수, 분산, 표준편차.",
    description:
      "무료 기술통계 계산기. 평균, 중앙값, 사분위수, 사분위수범위, 분산, 표준편차 등 12가지 주요 지표로 데이터를 분석합니다.",
    keywords: [
      "기술통계",
      "데이터 분석 계산기",
      "통계 요약",
      "5개 숫자 요약",
      "사분위수 계산기",
      "사분위수범위 계산기",
      "분산 계산기",
      "표준편차 계산기",
      "중앙값 계산기",
      "최빈값 계산기",
    ],
    inputs: {
      values: {
        label: "데이터 값",
        help: "쉼표로 구분한 숫자를 입력하세요(예: 2, 5, 7, 9, 3). 최소 1개 숫자 필요.",
      },
    },
    outputs: {
      count: { label: "데이터 수(n)", help: "데이터셋의 데이터 포인트 수." },
      min: { label: "최소값", help: "데이터셋의 가장 작은 값." },
      max: { label: "최대값", help: "데이터셋의 가장 큰 값." },
      range: { label: "범위", help: "최대값과 최소값의 차이." },
      mean: { label: "평균", help: "모든 값의 합을 데이터 수로 나눈 값." },
      median: { label: "중앙값", help: "정렬 후 중간 값; 데이터를 이등분." },
      mode: { label: "최빈값", help: "가장 자주 나타나는 값 (또는 '고유한 최빈값 없음')." },
      q1: { label: "Q1(제1사분위수)", help: "데이터의 25%가 이 값 이하." },
      q3: { label: "Q3(제3사분위수)", help: "데이터의 75%가 이 값 이하." },
      iqr: { label: "IQR(사분위수범위)", help: "Q3 - Q1; 중간 50% 데이터 포함." },
      variance: { label: "분산", help: "평균으로부터의 평균 제곱 편차." },
      stdDev: { label: "표준편차", help: "분산의 제곱근; 데이터의 산포도 측정." },
    },
    options: {},
    errors: {
      invalidInput: "쉼표로 구분한 유효한 숫자를 입력하세요.",
      emptyData: "최소 1개 숫자가 필요합니다.",
    },
    faq: [
      {
        q: "평균과 중앙값의 차이는 무엇인가요?",
        a: "평균은 모든 값의 합을 데이터 수로 나눈 값입니다. 중앙값은 정렬 후 중간 값입니다. 중앙값은 이상치에 더 강합니다.",
      },
    ],
  },

  hi: {
    title: "वर्णनात्मक सांख्यिकी कैलकुलेटर",
    short: "पूर्ण सांख्यिकीय सारांश: न्यूनतम, अधिकतम, माध्य, माध्यिका, बहुलक, चतुर्थांश, विचरण और मानक विचलन।",
    description:
      "मुफ़्त वर्णनात्मक सांख्यिकी कैलकुलेटर। माध्य, माध्यिका, चतुर्थांश, अंतरचतुर्थांश श्रेणी, विचरण और मानक विचलन सहित 12 मुख्य मेट्रिक्स के साथ डेटा का विश्लेषण करें।",
    keywords: [
      "वर्णनात्मक सांख्यिकी",
      "डेटा विश्लेषण कैलकुलेटर",
      "सांख्यिकीय सारांश",
      "पाँच संख्या सारांश",
      "चतुर्थांश कैलकुलेटर",
      "अंतरचतुर्थांश श्रेणी कैलकुलेटर",
      "विचरण कैलकुलेटर",
      "मानक विचलन कैलकुलेटर",
      "माध्यिका कैलकुलेटर",
      "बहुलक कैलकुलेटर",
    ],
    inputs: {
      values: {
        label: "डेटा मान",
        help: "अल्पविरामों से अलग किए गए नंबर दर्ज करें (उदा: 2, 5, 7, 9, 3)। कम से कम एक मान आवश्यक है।",
      },
    },
    outputs: {
      count: { label: "गणना (n)", help: "डेटा बिंदुओं की संख्या।" },
      min: { label: "न्यूनतम", help: "डेटा सेट में सबसे छोटा मान।" },
      max: { label: "अधिकतम", help: "डेटा सेट में सबसे बड़ा मान।" },
      range: { label: "सीमा", help: "अधिकतम और न्यूनतम के बीच का अंतर।" },
      mean: { label: "माध्य", help: "सभी मानों का योग डेटा गणना से विभाजित।" },
      median: { label: "माध्यिका", help: "छँटाई के बाद मध्य मान; डेटा को दो भागों में बाँटता है।" },
      mode: { label: "बहुलक", help: "सबसे अधिक बार आने वाला मान (या 'कोई अद्वितीय बहुलक नहीं')।" },
      q1: { label: "Q1 (प्रथम चतुर्थांश)", help: "डेटा का 25% इस मान से नीचे है।" },
      q3: { label: "Q3 (तृतीय चतुर्थांश)", help: "डेटा का 75% इस मान से नीचे है।" },
      iqr: { label: "IQR (अंतरचतुर्थांश श्रेणी)", help: "Q3 - Q1; डेटा के मध्य 50% को शामिल करता है।" },
      variance: { label: "विचरण", help: "माध्य से औसत वर्ग विचलन।" },
      stdDev: { label: "मानक विचलन", help: "विचरण का वर्गमूल; डेटा प्रसार को मापता है।" },
    },
    options: {},
    errors: {
      invalidInput: "कृपया अल्पविरामों से अलग किए गए मान्य नंबर दर्ज करें।",
      emptyData: "कम से कम एक मान आवश्यक है।",
    },
    faq: [
      {
        q: "माध्य और माध्यिका में क्या अंतर है?",
        a: "माध्य सभी मानों का योग है जो डेटा गणना से विभाजित है। माध्यिका छँटाई के बाद मध्य मान है। माध्यिका बाहरी मानों के प्रति अधिक प्रतिरोधी है।",
      },
    ],
  },
};

export default i18n;
