import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Series & Parallel Resistor Calculator",
    short:
      "Find the equivalent resistance of two resistors connected in series and in parallel.",
    description:
      "Free resistor combination calculator. Enter two resistor values to get the equivalent resistance in series (R₁ + R₂) and in parallel (R₁·R₂ / (R₁ + R₂)).",
    keywords: [
      "resistor calculator",
      "series resistance",
      "parallel resistance",
      "equivalent resistance",
      "two resistors in parallel",
      "ohms",
    ],
    inputs: {
      r1: { label: "Resistor 1 (R₁)", help: "Resistance of the first resistor in ohms." },
      r2: { label: "Resistor 2 (R₂)", help: "Resistance of the second resistor in ohms." },
    },
    outputs: {
      parallel: { label: "Parallel Resistance", help: "Equivalent resistance when wired in parallel." },
      series: { label: "Series Resistance", help: "Equivalent resistance when wired in series." },
    },
    faq: [
      {
        q: "How do resistors add in series?",
        a: "In series the current passes through each resistor in turn, so the resistances simply add: R = R₁ + R₂. The total is always larger than the largest single resistor.",
      },
      {
        q: "How do resistors combine in parallel?",
        a: "For two resistors in parallel use the product-over-sum rule R = (R₁·R₂)/(R₁ + R₂). The result is always smaller than the smallest individual resistor.",
      },
      {
        q: "What is the equivalent resistance of 100 Ω and 200 Ω?",
        a: "In series it is 100 + 200 = 300 Ω. In parallel it is (100 × 200)/(100 + 200) = 20000/300 ≈ 66.67 Ω.",
      },
    ],
  },
  tr: {
    title: "Seri ve Paralel Direnç Hesaplama",
    short:
      "Seri ve paralel bağlı iki direncin eşdeğer direncini bulun.",
    description:
      "Ücretsiz direnç kombinasyonu hesaplayıcı. İki direnç değeri girerek seri (R₁ + R₂) ve paralel (R₁·R₂ / (R₁ + R₂)) eşdeğer direnci hesaplayın.",
    keywords: [
      "direnç hesaplama",
      "seri direnç",
      "paralel direnç",
      "eşdeğer direnç",
      "paralel iki direnç",
      "ohm",
    ],
    inputs: {
      r1: { label: "Direnç 1 (R₁)", help: "Birinci direncin ohm cinsinden değeri." },
      r2: { label: "Direnç 2 (R₂)", help: "İkinci direncin ohm cinsinden değeri." },
    },
    outputs: {
      parallel: { label: "Paralel Direnç", help: "Paralel bağlandığında eşdeğer direnç." },
      series: { label: "Seri Direnç", help: "Seri bağlandığında eşdeğer direnç." },
    },
  },
  de: {
    title: "Reihen- & Parallel-Widerstandsrechner",
    short:
      "Berechnen Sie den Ersatzwiderstand zweier in Reihe und parallel geschalteter Widerstände.",
    description:
      "Kostenloser Widerstandsrechner. Geben Sie zwei Widerstandswerte ein, um den Ersatzwiderstand in Reihe (R₁ + R₂) und parallel (R₁·R₂ / (R₁ + R₂)) zu erhalten.",
    keywords: [
      "widerstandsrechner",
      "reihenwiderstand",
      "parallelwiderstand",
      "ersatzwiderstand",
      "zwei widerstände parallel",
      "ohm",
    ],
    inputs: {
      r1: { label: "Widerstand 1 (R₁)", help: "Widerstand des ersten Bauteils in Ohm." },
      r2: { label: "Widerstand 2 (R₂)", help: "Widerstand des zweiten Bauteils in Ohm." },
    },
    outputs: {
      parallel: { label: "Parallelwiderstand", help: "Ersatzwiderstand bei Parallelschaltung." },
      series: { label: "Reihenwiderstand", help: "Ersatzwiderstand bei Reihenschaltung." },
    },
  },
  fr: {
    title: "Calculateur de résistances série et parallèle",
    short:
      "Trouvez la résistance équivalente de deux résistances montées en série et en parallèle.",
    description:
      "Calculateur de résistances gratuit. Saisissez deux valeurs pour obtenir la résistance équivalente en série (R₁ + R₂) et en parallèle (R₁·R₂ / (R₁ + R₂)).",
    keywords: [
      "calculateur résistance",
      "résistance série",
      "résistance parallèle",
      "résistance équivalente",
      "deux résistances en parallèle",
      "ohm",
    ],
    inputs: {
      r1: { label: "Résistance 1 (R₁)", help: "Résistance du premier composant en ohms." },
      r2: { label: "Résistance 2 (R₂)", help: "Résistance du second composant en ohms." },
    },
    outputs: {
      parallel: { label: "Résistance parallèle", help: "Résistance équivalente en parallèle." },
      series: { label: "Résistance série", help: "Résistance équivalente en série." },
    },
  },
  es: {
    title: "Calculadora de resistencias en serie y paralelo",
    short:
      "Encuentra la resistencia equivalente de dos resistencias conectadas en serie y en paralelo.",
    description:
      "Calculadora de resistencias gratuita. Ingresa dos valores para obtener la resistencia equivalente en serie (R₁ + R₂) y en paralelo (R₁·R₂ / (R₁ + R₂)).",
    keywords: [
      "calculadora resistencia",
      "resistencia en serie",
      "resistencia en paralelo",
      "resistencia equivalente",
      "dos resistencias en paralelo",
      "ohmios",
    ],
    inputs: {
      r1: { label: "Resistencia 1 (R₁)", help: "Resistencia del primer componente en ohmios." },
      r2: { label: "Resistencia 2 (R₂)", help: "Resistencia del segundo componente en ohmios." },
    },
    outputs: {
      parallel: { label: "Resistencia en paralelo", help: "Resistencia equivalente en paralelo." },
      series: { label: "Resistencia en serie", help: "Resistencia equivalente en serie." },
    },
  },
  it: {
    title: "Calcolatore resistenze in serie e parallelo",
    short:
      "Trova la resistenza equivalente di due resistenze collegate in serie e in parallelo.",
    description:
      "Calcolatore di resistenze gratuito. Inserisci due valori per ottenere la resistenza equivalente in serie (R₁ + R₂) e in parallelo (R₁·R₂ / (R₁ + R₂)).",
    keywords: [
      "calcolatore resistenza",
      "resistenza in serie",
      "resistenza in parallelo",
      "resistenza equivalente",
      "due resistenze in parallelo",
      "ohm",
    ],
    inputs: {
      r1: { label: "Resistenza 1 (R₁)", help: "Resistenza del primo componente in ohm." },
      r2: { label: "Resistenza 2 (R₂)", help: "Resistenza del secondo componente in ohm." },
    },
    outputs: {
      parallel: { label: "Resistenza in parallelo", help: "Resistenza equivalente in parallelo." },
      series: { label: "Resistenza in serie", help: "Resistenza equivalente in serie." },
    },
  },
  pt: {
    title: "Calculadora de resistores em série e paralelo",
    short:
      "Encontre a resistência equivalente de dois resistores ligados em série e em paralelo.",
    description:
      "Calculadora gratuita de combinação de resistores. Informe dois valores para obter a resistência equivalente em série (R₁ + R₂) e em paralelo (R₁·R₂ / (R₁ + R₂)).",
    keywords: [
      "calculadora resistor",
      "resistência em série",
      "resistência em paralelo",
      "resistência equivalente",
      "dois resistores em paralelo",
      "ohms",
    ],
    inputs: {
      r1: { label: "Resistor 1 (R₁)", help: "Resistência do primeiro resistor em ohms." },
      r2: { label: "Resistor 2 (R₂)", help: "Resistência do segundo resistor em ohms." },
    },
    outputs: {
      parallel: { label: "Resistência em paralelo", help: "Resistência equivalente em paralelo." },
      series: { label: "Resistência em série", help: "Resistência equivalente em série." },
    },
  },
  id: {
    title: "Kalkulator Resistor Seri & Paralel",
    short:
      "Temukan resistansi ekuivalen dari dua resistor yang dihubungkan secara seri dan paralel.",
    description:
      "Kalkulator kombinasi resistor gratis. Masukkan dua nilai resistor untuk memperoleh resistansi ekuivalen secara seri (R₁ + R₂) dan paralel (R₁·R₂ / (R₁ + R₂)).",
    keywords: [
      "kalkulator resistor",
      "resistansi seri",
      "resistansi paralel",
      "resistansi ekuivalen",
      "dua resistor paralel",
      "ohm",
    ],
    inputs: {
      r1: { label: "Resistor 1 (R₁)", help: "Resistansi resistor pertama dalam ohm." },
      r2: { label: "Resistor 2 (R₂)", help: "Resistansi resistor kedua dalam ohm." },
    },
    outputs: {
      parallel: { label: "Resistansi paralel", help: "Resistansi ekuivalen saat dirangkai paralel." },
      series: { label: "Resistansi seri", help: "Resistansi ekuivalen saat dirangkai seri." },
    },
  },
  ar: {
    title: "حاسبة المقاومات على التوالي والتوازي",
    short:
      "أوجد المقاومة المكافئة لمقاومتين موصولتين على التوالي وعلى التوازي.",
    description:
      "حاسبة تجميع المقاومات المجانية. أدخل قيمتي مقاومتين للحصول على المقاومة المكافئة على التوالي (R₁ + R₂) وعلى التوازي (R₁·R₂ / (R₁ + R₂)).",
    keywords: [
      "حاسبة المقاومة",
      "مقاومة على التوالي",
      "مقاومة على التوازي",
      "المقاومة المكافئة",
      "مقاومتان على التوازي",
      "أوم",
    ],
    inputs: {
      r1: { label: "المقاومة 1 (R₁)", help: "مقاومة المكوّن الأول بالأوم." },
      r2: { label: "المقاومة 2 (R₂)", help: "مقاومة المكوّن الثاني بالأوم." },
    },
    outputs: {
      parallel: { label: "المقاومة على التوازي", help: "المقاومة المكافئة عند التوصيل على التوازي." },
      series: { label: "المقاومة على التوالي", help: "المقاومة المكافئة عند التوصيل على التوالي." },
    },
  },
  ru: {
    title: "Калькулятор последовательного и параллельного сопротивления",
    short:
      "Найдите эквивалентное сопротивление двух резисторов при последовательном и параллельном соединении.",
    description:
      "Бесплатный калькулятор сопротивлений. Введите два значения, чтобы получить эквивалентное сопротивление при последовательном (R₁ + R₂) и параллельном (R₁·R₂ / (R₁ + R₂)) соединении.",
    keywords: [
      "калькулятор сопротивления",
      "последовательное сопротивление",
      "параллельное сопротивление",
      "эквивалентное сопротивление",
      "два резистора параллельно",
      "ом",
    ],
    inputs: {
      r1: { label: "Резистор 1 (R₁)", help: "Сопротивление первого резистора в омах." },
      r2: { label: "Резистор 2 (R₂)", help: "Сопротивление второго резистора в омах." },
    },
    outputs: {
      parallel: { label: "Параллельное сопротивление", help: "Эквивалентное сопротивление при параллельном соединении." },
      series: { label: "Последовательное сопротивление", help: "Эквивалентное сопротивление при последовательном соединении." },
    },
  },
  zh: {
    title: "串联与并联电阻计算器",
    short: "计算两个电阻串联和并联时的等效电阻。",
    description:
      "免费电阻组合计算器。输入两个电阻值，得到串联 (R₁ + R₂) 与并联 (R₁·R₂ / (R₁ + R₂)) 的等效电阻。",
    keywords: ["电阻计算器", "串联电阻", "并联电阻", "等效电阻", "两个电阻并联", "欧姆"],
    inputs: {
      r1: { label: "电阻 1 (R₁)", help: "第一个电阻的阻值（欧姆）。" },
      r2: { label: "电阻 2 (R₂)", help: "第二个电阻的阻值（欧姆）。" },
    },
    outputs: {
      parallel: { label: "并联电阻", help: "并联时的等效电阻。" },
      series: { label: "串联电阻", help: "串联时的等效电阻。" },
    },
  },
  ja: {
    title: "直列・並列 抵抗計算ツール",
    short: "2本の抵抗を直列および並列に接続したときの合成抵抗を求めます。",
    description:
      "無料の抵抗合成計算ツール。2本の抵抗値を入力して、直列 (R₁ + R₂) と並列 (R₁·R₂ / (R₁ + R₂)) の合成抵抗を求めます。",
    keywords: ["抵抗 計算", "直列抵抗", "並列抵抗", "合成抵抗", "抵抗2本 並列", "オーム"],
    inputs: {
      r1: { label: "抵抗 1 (R₁)", help: "1本目の抵抗値（オーム）。" },
      r2: { label: "抵抗 2 (R₂)", help: "2本目の抵抗値（オーム）。" },
    },
    outputs: {
      parallel: { label: "並列合成抵抗", help: "並列接続時の合成抵抗。" },
      series: { label: "直列合成抵抗", help: "直列接続時の合成抵抗。" },
    },
  },
  ko: {
    title: "직렬·병렬 저항 계산기",
    short: "두 저항을 직렬 및 병렬로 연결했을 때의 합성 저항을 구합니다.",
    description:
      "무료 저항 합성 계산기. 두 저항 값을 입력해 직렬 (R₁ + R₂)과 병렬 (R₁·R₂ / (R₁ + R₂))의 합성 저항을 구합니다.",
    keywords: ["저항 계산기", "직렬 저항", "병렬 저항", "합성 저항", "두 저항 병렬", "옴"],
    inputs: {
      r1: { label: "저항 1 (R₁)", help: "첫 번째 저항 값(옴)." },
      r2: { label: "저항 2 (R₂)", help: "두 번째 저항 값(옴)." },
    },
    outputs: {
      parallel: { label: "병렬 합성 저항", help: "병렬 연결 시의 합성 저항." },
      series: { label: "직렬 합성 저항", help: "직렬 연결 시의 합성 저항." },
    },
  },
  hi: {
    title: "श्रेणी और समानांतर प्रतिरोध कैलकुलेटर",
    short:
      "श्रेणी और समानांतर में जुड़े दो प्रतिरोधों का तुल्य प्रतिरोध ज्ञात करें।",
    description:
      "मुफ़्त प्रतिरोध संयोजन कैलकुलेटर। दो प्रतिरोध मान दर्ज करके श्रेणी (R₁ + R₂) और समानांतर (R₁·R₂ / (R₁ + R₂)) में तुल्य प्रतिरोध प्राप्त करें।",
    keywords: [
      "प्रतिरोध कैलकुलेटर",
      "श्रेणी प्रतिरोध",
      "समानांतर प्रतिरोध",
      "तुल्य प्रतिरोध",
      "समानांतर दो प्रतिरोध",
      "ओम",
    ],
    inputs: {
      r1: { label: "प्रतिरोध 1 (R₁)", help: "पहले प्रतिरोध का मान ओम में।" },
      r2: { label: "प्रतिरोध 2 (R₂)", help: "दूसरे प्रतिरोध का मान ओम में।" },
    },
    outputs: {
      parallel: { label: "समानांतर प्रतिरोध", help: "समानांतर जुड़ने पर तुल्य प्रतिरोध।" },
      series: { label: "श्रेणी प्रतिरोध", help: "श्रेणी में जुड़ने पर तुल्य प्रतिरोध।" },
    },
  },
};

export default i18n;
