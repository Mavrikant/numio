import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Arithmetic Sequence Calculator",
    short:
      "Find the nth term and the sum of an arithmetic sequence from its first term and common difference.",
    description:
      "Free arithmetic sequence calculator. Enter the first term, common difference, and number of terms to get the nth term aₙ and the series sum Sₙ.",
    keywords: [
      "arithmetic sequence calculator",
      "arithmetic series",
      "nth term",
      "common difference",
      "sum of sequence",
      "arithmetic progression",
    ],
    inputs: {
      firstTerm: { label: "First Term (a₁)", help: "The starting value of the sequence." },
      commonDifference: { label: "Common Difference (d)", help: "Constant amount added between consecutive terms." },
      numberOfTerms: { label: "Number of Terms (n)", help: "How many terms to include." },
    },
    outputs: {
      nthTerm: { label: "nth Term (aₙ)", help: "Value of the last (nth) term." },
      sum: { label: "Sum (Sₙ)", help: "Sum of the first n terms." },
    },
    faq: [
      {
        q: "What is an arithmetic sequence?",
        a: "An arithmetic sequence is a list of numbers where each term is obtained by adding a fixed value, the common difference d, to the previous term — for example 2, 5, 8, 11, … with d = 3.",
      },
      {
        q: "How do I find the nth term?",
        a: "Use aₙ = a₁ + (n − 1)d. With a₁ = 2, d = 3, the 10th term is 2 + 9 × 3 = 29.",
      },
      {
        q: "How do I find the sum of the first n terms?",
        a: "Use Sₙ = n/2 × (a₁ + aₙ). For 10 terms starting at 2 with d = 3, the sum is 10/2 × (2 + 29) = 155.",
      },
    ],
  },
  tr: {
    title: "Aritmetik Dizi Hesaplama",
    short:
      "Bir aritmetik dizinin ilk terimi ve ortak farkından n. terimi ve toplamını bulun.",
    description:
      "Ücretsiz aritmetik dizi hesaplayıcı. İlk terim, ortak fark ve terim sayısını girerek n. terim aₙ ve seri toplamı Sₙ değerini alın.",
    keywords: [
      "aritmetik dizi hesaplama",
      "aritmetik seri",
      "n. terim",
      "ortak fark",
      "dizi toplamı",
      "aritmetik ilerleme",
    ],
    inputs: {
      firstTerm: { label: "İlk Terim (a₁)", help: "Dizinin başlangıç değeri." },
      commonDifference: { label: "Ortak Fark (d)", help: "Ardışık terimler arasına eklenen sabit miktar." },
      numberOfTerms: { label: "Terim Sayısı (n)", help: "Kaç terim dahil edilecek." },
    },
    outputs: {
      nthTerm: { label: "n. Terim (aₙ)", help: "Son (n.) terimin değeri." },
      sum: { label: "Toplam (Sₙ)", help: "İlk n terimin toplamı." },
    },
  },
  de: {
    title: "Arithmetische-Folge-Rechner",
    short:
      "Bestimmen Sie das n-te Glied und die Summe einer arithmetischen Folge aus erstem Glied und Differenz.",
    description:
      "Kostenloser Rechner für arithmetische Folgen. Geben Sie erstes Glied, Differenz und Gliederanzahl ein, um das n-te Glied aₙ und die Summe Sₙ zu erhalten.",
    keywords: [
      "arithmetische folge rechner",
      "arithmetische reihe",
      "n-tes glied",
      "differenz",
      "summe der folge",
      "arithmetische progression",
    ],
    inputs: {
      firstTerm: { label: "Erstes Glied (a₁)", help: "Startwert der Folge." },
      commonDifference: { label: "Differenz (d)", help: "Konstanter Wert zwischen aufeinanderfolgenden Gliedern." },
      numberOfTerms: { label: "Anzahl der Glieder (n)", help: "Wie viele Glieder einbezogen werden." },
    },
    outputs: {
      nthTerm: { label: "n-tes Glied (aₙ)", help: "Wert des letzten (n-ten) Glieds." },
      sum: { label: "Summe (Sₙ)", help: "Summe der ersten n Glieder." },
    },
  },
  fr: {
    title: "Calculateur de suite arithmétique",
    short:
      "Trouvez le n-ième terme et la somme d'une suite arithmétique à partir du premier terme et de la raison.",
    description:
      "Calculateur de suite arithmétique gratuit. Saisissez le premier terme, la raison et le nombre de termes pour obtenir le terme aₙ et la somme Sₙ.",
    keywords: [
      "calculateur suite arithmétique",
      "série arithmétique",
      "n-ième terme",
      "raison",
      "somme de la suite",
      "progression arithmétique",
    ],
    inputs: {
      firstTerm: { label: "Premier terme (a₁)", help: "Valeur de départ de la suite." },
      commonDifference: { label: "Raison (d)", help: "Quantité constante ajoutée entre termes consécutifs." },
      numberOfTerms: { label: "Nombre de termes (n)", help: "Combien de termes inclure." },
    },
    outputs: {
      nthTerm: { label: "n-ième terme (aₙ)", help: "Valeur du dernier terme (n-ième)." },
      sum: { label: "Somme (Sₙ)", help: "Somme des n premiers termes." },
    },
  },
  es: {
    title: "Calculadora de sucesión aritmética",
    short:
      "Encuentra el término n-ésimo y la suma de una sucesión aritmética a partir del primer término y la diferencia.",
    description:
      "Calculadora gratuita de sucesión aritmética. Ingresa el primer término, la diferencia común y el número de términos para obtener el término aₙ y la suma Sₙ.",
    keywords: [
      "calculadora sucesión aritmética",
      "serie aritmética",
      "término n-ésimo",
      "diferencia común",
      "suma de la sucesión",
      "progresión aritmética",
    ],
    inputs: {
      firstTerm: { label: "Primer término (a₁)", help: "Valor inicial de la sucesión." },
      commonDifference: { label: "Diferencia común (d)", help: "Cantidad constante sumada entre términos consecutivos." },
      numberOfTerms: { label: "Número de términos (n)", help: "Cuántos términos incluir." },
    },
    outputs: {
      nthTerm: { label: "Término n-ésimo (aₙ)", help: "Valor del último término (n-ésimo)." },
      sum: { label: "Suma (Sₙ)", help: "Suma de los primeros n términos." },
    },
  },
  it: {
    title: "Calcolatore di progressione aritmetica",
    short:
      "Trova l'n-esimo termine e la somma di una progressione aritmetica da primo termine e ragione.",
    description:
      "Calcolatore gratuito di progressione aritmetica. Inserisci primo termine, ragione e numero di termini per ottenere il termine aₙ e la somma Sₙ.",
    keywords: [
      "calcolatore progressione aritmetica",
      "serie aritmetica",
      "n-esimo termine",
      "ragione",
      "somma della successione",
      "successione aritmetica",
    ],
    inputs: {
      firstTerm: { label: "Primo termine (a₁)", help: "Valore iniziale della successione." },
      commonDifference: { label: "Ragione (d)", help: "Quantità costante aggiunta tra termini consecutivi." },
      numberOfTerms: { label: "Numero di termini (n)", help: "Quanti termini includere." },
    },
    outputs: {
      nthTerm: { label: "n-esimo termine (aₙ)", help: "Valore dell'ultimo termine (n-esimo)." },
      sum: { label: "Somma (Sₙ)", help: "Somma dei primi n termini." },
    },
  },
  pt: {
    title: "Calculadora de progressão aritmética",
    short:
      "Encontre o n-ésimo termo e a soma de uma progressão aritmética a partir do primeiro termo e da razão.",
    description:
      "Calculadora gratuita de progressão aritmética. Informe o primeiro termo, a razão e o número de termos para obter o termo aₙ e a soma Sₙ.",
    keywords: [
      "calculadora progressão aritmética",
      "série aritmética",
      "n-ésimo termo",
      "razão",
      "soma da progressão",
      "sequência aritmética",
    ],
    inputs: {
      firstTerm: { label: "Primeiro termo (a₁)", help: "Valor inicial da progressão." },
      commonDifference: { label: "Razão (d)", help: "Quantidade constante somada entre termos consecutivos." },
      numberOfTerms: { label: "Número de termos (n)", help: "Quantos termos incluir." },
    },
    outputs: {
      nthTerm: { label: "n-ésimo termo (aₙ)", help: "Valor do último termo (n-ésimo)." },
      sum: { label: "Soma (Sₙ)", help: "Soma dos n primeiros termos." },
    },
  },
  id: {
    title: "Kalkulator Barisan Aritmetika",
    short:
      "Temukan suku ke-n dan jumlah barisan aritmetika dari suku pertama dan beda.",
    description:
      "Kalkulator barisan aritmetika gratis. Masukkan suku pertama, beda, dan jumlah suku untuk memperoleh suku ke-n aₙ dan jumlah deret Sₙ.",
    keywords: [
      "kalkulator barisan aritmetika",
      "deret aritmetika",
      "suku ke-n",
      "beda",
      "jumlah barisan",
      "progresi aritmetika",
    ],
    inputs: {
      firstTerm: { label: "Suku pertama (a₁)", help: "Nilai awal barisan." },
      commonDifference: { label: "Beda (d)", help: "Nilai tetap yang ditambahkan antar suku berurutan." },
      numberOfTerms: { label: "Jumlah suku (n)", help: "Berapa suku yang disertakan." },
    },
    outputs: {
      nthTerm: { label: "Suku ke-n (aₙ)", help: "Nilai suku terakhir (ke-n)." },
      sum: { label: "Jumlah (Sₙ)", help: "Jumlah n suku pertama." },
    },
  },
  ar: {
    title: "حاسبة المتتالية الحسابية",
    short:
      "أوجد الحد النوني ومجموع المتتالية الحسابية من الحد الأول والفرق المشترك.",
    description:
      "حاسبة المتتالية الحسابية المجانية. أدخل الحد الأول والفرق المشترك وعدد الحدود للحصول على الحد النوني aₙ ومجموع المتسلسلة Sₙ.",
    keywords: [
      "حاسبة المتتالية الحسابية",
      "المتسلسلة الحسابية",
      "الحد النوني",
      "الفرق المشترك",
      "مجموع المتتالية",
      "المتوالية الحسابية",
    ],
    inputs: {
      firstTerm: { label: "الحد الأول (a₁)", help: "القيمة الابتدائية للمتتالية." },
      commonDifference: { label: "الفرق المشترك (d)", help: "مقدار ثابت يُضاف بين الحدود المتتالية." },
      numberOfTerms: { label: "عدد الحدود (n)", help: "كم عدد الحدود المراد تضمينها." },
    },
    outputs: {
      nthTerm: { label: "الحد النوني (aₙ)", help: "قيمة الحد الأخير (النوني)." },
      sum: { label: "المجموع (Sₙ)", help: "مجموع الحدود الأولى الـ n." },
    },
  },
  ru: {
    title: "Калькулятор арифметической прогрессии",
    short:
      "Найдите n-й член и сумму арифметической прогрессии по первому члену и разности.",
    description:
      "Бесплатный калькулятор арифметической прогрессии. Введите первый член, разность и число членов, чтобы получить n-й член aₙ и сумму Sₙ.",
    keywords: [
      "калькулятор арифметической прогрессии",
      "арифметический ряд",
      "n-й член",
      "разность прогрессии",
      "сумма прогрессии",
      "арифметическая прогрессия",
    ],
    inputs: {
      firstTerm: { label: "Первый член (a₁)", help: "Начальное значение прогрессии." },
      commonDifference: { label: "Разность (d)", help: "Постоянная величина между соседними членами." },
      numberOfTerms: { label: "Число членов (n)", help: "Сколько членов включить." },
    },
    outputs: {
      nthTerm: { label: "n-й член (aₙ)", help: "Значение последнего (n-го) члена." },
      sum: { label: "Сумма (Sₙ)", help: "Сумма первых n членов." },
    },
  },
  zh: {
    title: "等差数列计算器",
    short: "根据首项和公差，求等差数列的第 n 项及其前 n 项之和。",
    description:
      "免费等差数列计算器。输入首项、公差和项数，得到第 n 项 aₙ 与数列之和 Sₙ。",
    keywords: ["等差数列计算器", "等差级数", "第n项", "公差", "数列求和", "等差数列"],
    inputs: {
      firstTerm: { label: "首项 (a₁)", help: "数列的起始值。" },
      commonDifference: { label: "公差 (d)", help: "相邻两项之间增加的固定值。" },
      numberOfTerms: { label: "项数 (n)", help: "要包含的项数。" },
    },
    outputs: {
      nthTerm: { label: "第 n 项 (aₙ)", help: "最后一项（第 n 项）的值。" },
      sum: { label: "和 (Sₙ)", help: "前 n 项之和。" },
    },
  },
  ja: {
    title: "等差数列の計算ツール",
    short: "初項と公差から、等差数列の第 n 項と総和を求めます。",
    description:
      "無料の等差数列計算ツール。初項、公差、項数を入力して、第 n 項 aₙ と数列の和 Sₙ を求めます。",
    keywords: ["等差数列 計算", "等差級数", "第n項", "公差", "数列の和", "等差数列"],
    inputs: {
      firstTerm: { label: "初項 (a₁)", help: "数列の最初の値。" },
      commonDifference: { label: "公差 (d)", help: "隣り合う項の間に加える一定値。" },
      numberOfTerms: { label: "項数 (n)", help: "含める項の数。" },
    },
    outputs: {
      nthTerm: { label: "第 n 項 (aₙ)", help: "最後の項（第 n 項）の値。" },
      sum: { label: "和 (Sₙ)", help: "最初の n 項の和。" },
    },
  },
  ko: {
    title: "등차수열 계산기",
    short: "첫째 항과 공차로 등차수열의 제 n 항과 합을 구합니다.",
    description:
      "무료 등차수열 계산기. 첫째 항, 공차, 항의 개수를 입력해 제 n 항 aₙ 과 수열의 합 Sₙ 을 구합니다.",
    keywords: ["등차수열 계산기", "등차급수", "제n항", "공차", "수열의 합", "등차수열"],
    inputs: {
      firstTerm: { label: "첫째 항 (a₁)", help: "수열의 시작 값." },
      commonDifference: { label: "공차 (d)", help: "이웃한 항 사이에 더해지는 일정한 값." },
      numberOfTerms: { label: "항의 개수 (n)", help: "포함할 항의 수." },
    },
    outputs: {
      nthTerm: { label: "제 n 항 (aₙ)", help: "마지막(제 n) 항의 값." },
      sum: { label: "합 (Sₙ)", help: "첫 n 항의 합." },
    },
  },
  hi: {
    title: "समांतर श्रेणी कैलकुलेटर",
    short:
      "प्रथम पद और सार्व अंतर से समांतर श्रेणी का n-वाँ पद और योग ज्ञात करें।",
    description:
      "मुफ़्त समांतर श्रेणी कैलकुलेटर। प्रथम पद, सार्व अंतर और पदों की संख्या दर्ज करके n-वाँ पद aₙ और श्रेणी का योग Sₙ प्राप्त करें।",
    keywords: [
      "समांतर श्रेणी कैलकुलेटर",
      "समांतर श्रेढ़ी",
      "n-वाँ पद",
      "सार्व अंतर",
      "श्रेणी का योग",
      "समांतर अनुक्रम",
    ],
    inputs: {
      firstTerm: { label: "प्रथम पद (a₁)", help: "श्रेणी का आरंभिक मान।" },
      commonDifference: { label: "सार्व अंतर (d)", help: "क्रमागत पदों के बीच जोड़ा जाने वाला अचर मान।" },
      numberOfTerms: { label: "पदों की संख्या (n)", help: "कितने पद शामिल करने हैं।" },
    },
    outputs: {
      nthTerm: { label: "n-वाँ पद (aₙ)", help: "अंतिम (n-वें) पद का मान।" },
      sum: { label: "योग (Sₙ)", help: "प्रथम n पदों का योग।" },
    },
  },
};

export default i18n;
