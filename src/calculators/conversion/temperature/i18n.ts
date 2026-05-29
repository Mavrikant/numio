import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Temperature Converter",
    short: "Convert between Celsius, Fahrenheit, and Kelvin scales instantly",
    description: "Convert between Celsius, Fahrenheit, and Kelvin temperature scales with instant calculations",
    keywords: ["temperature", "celsius", "fahrenheit", "kelvin", "conversion", "thermal"],
    inputs: {
      celsius: { label: "Celsius", help: "Temperature in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Temperature in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Temperature in Kelvin" },
    },
    outputs: {
      celsius: { label: "Celsius", help: "Result in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Result in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Result in Kelvin" },
    },
    errors: { invalidTemperature: "Temperature must be a valid number" },
    faq: [
      {
        question: "What is the difference between Celsius and Fahrenheit?",
        answer:
          "Celsius and Fahrenheit are two temperature scales with different reference points. Water freezes at 0°C (32°F) and boils at 100°C (212°F). Celsius is the metric standard, while Fahrenheit is commonly used in the US.",
      },
      {
        question: "What is Kelvin and why is it important?",
        answer:
          "Kelvin is the SI unit of temperature used in science and engineering. It starts at absolute zero (−273.15°C) and is used in physics and thermodynamics because it has no negative values.",
      },
      {
        question: "Is there a temperature where Celsius and Fahrenheit are equal?",
        answer: "Yes! −40°C equals −40°F. This is the only point where both scales read the same value.",
      },
      {
        question: "What is absolute zero?",
        answer: "Absolute zero is 0 Kelvin (−273.15°C or −459.67°F), the lowest possible temperature where all molecular motion stops.",
      },
    ],
  },
  pt: {
    title: "Conversor de Temperatura",
    short: "Converta entre Celsius, Fahrenheit e Kelvin.",
    description: "Conversor gratuito de temperatura. Converta instantaneamente entre graus Celsius (°C), Fahrenheit (°F) e Kelvin (K).",
    keywords: ["conversor temperatura", "Celsius Fahrenheit", "Kelvin", "°C °F", "temperatura"],
    inputs: {
      celsius: { label: "Celsius", help: "Temperature in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Temperature in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Temperature in Kelvin" },
    },
    outputs: {
      celsius: { label: "Celsius", help: "Result in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Result in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Result in Kelvin" },
    },
    errors: { invalidTemperature: "Temperature must be a valid number" },
    faq: [
      {
        question: "What is the difference between Celsius and Fahrenheit?",
        answer:
          "Celsius and Fahrenheit are two temperature scales with different reference points. Water freezes at 0°C (32°F) and boils at 100°C (212°F). Celsius is the metric standard, while Fahrenheit is commonly used in the US.",
      },
      {
        question: "What is Kelvin and why is it important?",
        answer:
          "Kelvin is the SI unit of temperature used in science and engineering. It starts at absolute zero (−273.15°C) and is used in physics and thermodynamics because it has no negative values.",
      },
      {
        question: "Is there a temperature where Celsius and Fahrenheit are equal?",
        answer: "Yes! −40°C equals −40°F. This is the only point where both scales read the same value.",
      },
      {
        question: "What is absolute zero?",
        answer: "Absolute zero is 0 Kelvin (−273.15°C or −459.67°F), the lowest possible temperature where all molecular motion stops.",
      },
    ],
  },
  id: {
    title: "Konverter Suhu",
    short: "Konversi antara Celsius, Fahrenheit, dan Kelvin.",
    description: "Konverter suhu gratis. Konversi langsung antara derajat Celsius (°C), Fahrenheit (°F), dan Kelvin (K).",
    keywords: ["konverter suhu", "Celsius Fahrenheit", "Kelvin", "°C °F", "suhu"],
    inputs: {
      celsius: { label: "Celsius", help: "Temperature in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Temperature in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Temperature in Kelvin" },
    },
    outputs: {
      celsius: { label: "Celsius", help: "Result in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Result in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Result in Kelvin" },
    },
    errors: { invalidTemperature: "Temperature must be a valid number" },
    faq: [
      {
        question: "What is the difference between Celsius and Fahrenheit?",
        answer:
          "Celsius and Fahrenheit are two temperature scales with different reference points. Water freezes at 0°C (32°F) and boils at 100°C (212°F). Celsius is the metric standard, while Fahrenheit is commonly used in the US.",
      },
      {
        question: "What is Kelvin and why is it important?",
        answer:
          "Kelvin is the SI unit of temperature used in science and engineering. It starts at absolute zero (−273.15°C) and is used in physics and thermodynamics because it has no negative values.",
      },
      {
        question: "Is there a temperature where Celsius and Fahrenheit are equal?",
        answer: "Yes! −40°C equals −40°F. This is the only point where both scales read the same value.",
      },
      {
        question: "What is absolute zero?",
        answer: "Absolute zero is 0 Kelvin (−273.15°C or −459.67°F), the lowest possible temperature where all molecular motion stops.",
      },
    ],
  },

  tr: {
    title: "Sıcaklık Dönüştürücü",
    short: "Celsius, Fahrenheit ve Kelvin ölçekleri arasında anında dönüşüm yapın",
    description: "Celsius, Fahrenheit ve Kelvin ölçekleri arasında anında dönüşüm",
    keywords: ["sıcaklık", "celsius", "fahrenheit", "kelvin", "dönüşüm", "termal"],
    inputs: {
      celsius: { label: "Celsius", help: "Celsius cinsinden sıcaklık" },
      fahrenheit: { label: "Fahrenheit", help: "Fahrenheit cinsinden sıcaklık" },
      kelvin: { label: "Kelvin", help: "Kelvin cinsinden sıcaklık" },
    },
    outputs: {
      celsius: { label: "Celsius", help: "Celsius sonucu" },
      fahrenheit: { label: "Fahrenheit", help: "Fahrenheit sonucu" },
      kelvin: { label: "Kelvin", help: "Kelvin sonucu" },
    },
    errors: { invalidTemperature: "Sıcaklık geçerli bir sayı olmalıdır" },
    faq: [
      {
        question: "Celsius ve Fahrenheit arasındaki fark nedir?",
        answer: "Celsius ve Fahrenheit, farklı referans noktaları olan iki sıcaklık ölçeğidir. Su 0°C (32°F) de donar, 100°C (212°F) de kaynır.",
      },
      {
        question: "Kelvin nedir ve neden önemlidir?",
        answer: "Kelvin, bilim ve mühendislikte kullanılan SI sıcaklık birimidir. Mutlak sıfırdan (−273.15°C) başlar.",
      },
      {
        question: "Celsius ve Fahrenheit'in eşit olduğu bir sıcaklık var mıdır?",
        answer: "Evet! −40°C eşittir −40°F. Her iki ölçeğin de aynı değeri okuduğu tek noktadır.",
      },
      {
        question: "Mutlak sıfır nedir?",
        answer: "Mutlak sıfır, 0 Kelvin (−273.15°C veya −459.67°F) olup, tüm moleküler hareketi durduğu en düşük sıcaklıktır.",
      },
    ],
  },
  de: {
    title: "Temperaturumrechner",
    short: "Sofortige Umrechnung zwischen Celsius, Fahrenheit und Kelvin",
    description: "Umrechnung zwischen Celsius, Fahrenheit und Kelvin Temperaturskalen",
    keywords: ["temperatur", "celsius", "fahrenheit", "kelvin", "umrechnung", "thermisch"],
    inputs: {
      celsius: { label: "Celsius", help: "Temperatur in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Temperatur in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Temperatur in Kelvin" },
    },
    outputs: {
      celsius: { label: "Celsius", help: "Ergebnis in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Ergebnis in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Ergebnis in Kelvin" },
    },
    errors: { invalidTemperature: "Temperatur muss eine gültige Zahl sein" },
    faq: [
      {
        question: "Was ist der Unterschied zwischen Celsius und Fahrenheit?",
        answer: "Celsius und Fahrenheit sind zwei Temperaturskalen mit unterschiedlichen Referenzpunkten. Wasser gefriert bei 0°C (32°F) und siedet bei 100°C (212°F).",
      },
      {
        question: "Was ist Kelvin und warum ist es wichtig?",
        answer: "Kelvin ist die SI-Einheit für Temperatur. Sie beginnt beim absoluten Nullpunkt (−273.15°C).",
      },
      {
        question: "Gibt es eine Temperatur, bei der Celsius und Fahrenheit gleich sind?",
        answer: "Ja! −40°C entspricht −40°F. Das ist der einzige Punkt, an dem beide Skalen denselben Wert anzeigen.",
      },
      {
        question: "Was ist der absolute Nullpunkt?",
        answer: "Der absolute Nullpunkt ist 0 Kelvin (−273.15°C oder −459.67°F).",
      },
    ],
  },
  fr: {
    title: "Convertisseur de température",
    short: "Conversion instantanée entre les échelles Celsius, Fahrenheit et Kelvin",
    description: "Conversion entre les échelles Celsius, Fahrenheit et Kelvin",
    keywords: ["température", "celsius", "fahrenheit", "kelvin", "conversion", "thermique"],
    inputs: {
      celsius: { label: "Celsius", help: "Température en Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Température en Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Température en Kelvin" },
    },
    outputs: {
      celsius: { label: "Celsius", help: "Résultat en Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Résultat en Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Résultat en Kelvin" },
    },
    errors: { invalidTemperature: "La température doit être un nombre valide" },
    faq: [
      {
        question: "Quelle est la différence entre Celsius et Fahrenheit?",
        answer: "Celsius et Fahrenheit sont deux échelles de température avec des points de référence différents. L'eau gèle à 0°C (32°F) et bout à 100°C (212°F).",
      },
      {
        question: "Qu'est-ce que Kelvin et pourquoi est-ce important?",
        answer: "Kelvin est l'unité SI de température utilisée en sciences. Elle commence au zéro absolu (−273.15°C).",
      },
      {
        question: "Y a-t-il une température où Celsius et Fahrenheit sont égaux?",
        answer: "Oui! −40°C équivaut à −40°F. C'est le seul point où les deux échelles affichent la même valeur.",
      },
      {
        question: "Quel est le zéro absolu?",
        answer: "Le zéro absolu est 0 Kelvin (−273.15°C ou −459.67°F).",
      },
    ],
  },
  es: {
    title: "Conversor de temperatura",
    short: "Conversión instantánea entre las escalas Celsius, Fahrenheit y Kelvin",
    description: "Conversión entre las escalas Celsius, Fahrenheit y Kelvin",
    keywords: ["temperatura", "celsius", "fahrenheit", "kelvin", "conversión", "térmico"],
    inputs: {
      celsius: { label: "Celsius", help: "Temperatura en Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Temperatura en Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Temperatura en Kelvin" },
    },
    outputs: {
      celsius: { label: "Celsius", help: "Resultado en Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Resultado en Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Resultado en Kelvin" },
    },
    errors: { invalidTemperature: "La temperatura debe ser un número válido" },
    faq: [
      {
        question: "¿Cuál es la diferencia entre Celsius y Fahrenheit?",
        answer: "Celsius y Fahrenheit son dos escalas de temperatura con diferentes puntos de referencia. El agua se congela a 0°C (32°F) e hierve a 100°C (212°F).",
      },
      {
        question: "¿Qué es Kelvin y por qué es importante?",
        answer: "Kelvin es la unidad SI de temperatura utilizada en ciencias. Comienza en el cero absoluto (−273.15°C).",
      },
      {
        question: "¿Hay una temperatura donde Celsius y Fahrenheit sean iguales?",
        answer: "¡Sí! −40°C equivale a −40°F. Es el único punto donde ambas escalas muestran el mismo valor.",
      },
      {
        question: "¿Qué es el cero absoluto?",
        answer: "El cero absoluto es 0 Kelvin (−273.15°C o −459.67°F).",
      },
    ],
  },
  it: {
    title: "Convertitore di temperatura",
    short: "Conversione istantanea tra le scale Celsius, Fahrenheit e Kelvin",
    description: "Conversione tra le scale Celsius, Fahrenheit e Kelvin",
    keywords: ["temperatura", "celsius", "fahrenheit", "kelvin", "conversione", "termico"],
    inputs: {
      celsius: { label: "Celsius", help: "Temperatura in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Temperatura in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Temperatura in Kelvin" },
    },
    outputs: {
      celsius: { label: "Celsius", help: "Risultato in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Risultato in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Risultato in Kelvin" },
    },
    errors: { invalidTemperature: "La temperatura deve essere un numero valido" },
    faq: [
      {
        question: "Qual è la differenza tra Celsius e Fahrenheit?",
        answer: "Celsius e Fahrenheit sono due scale di temperatura con diversi punti di riferimento. L'acqua congela a 0°C (32°F) e bolle a 100°C (212°F).",
      },
      {
        question: "Cos'è Kelvin e perché è importante?",
        answer: "Kelvin è l'unità SI di temperatura utilizzata in scienze. Inizia dallo zero assoluto (−273.15°C).",
      },
      {
        question: "C'è una temperatura in cui Celsius e Fahrenheit sono uguali?",
        answer: "Sì! −40°C equivale a −40°F. È l'unico punto in cui entrambe le scale mostrano lo stesso valore.",
      },
      {
        question: "Cos'è lo zero assoluto?",
        answer: "Lo zero assoluto è 0 Kelvin (−273.15°C o −459.67°F).",
      },
    ],
  },
  ar: {
    title: "محول درجة الحرارة",
    short: "تحويل فوري بين مقاييس سيلسيوس وفهرنهايت وكلفن",
    description: "تحويل بين مقاييس سيلسيوس وفهرنهايت وكلفن",
    keywords: ["درجة الحرارة", "سيلسيوس", "فهرنهايت", "كلفن", "تحويل", "حراري"],
    inputs: {
      celsius: { label: "سيلسيوس", help: "درجة الحرارة بالسيلسيوس" },
      fahrenheit: { label: "فهرنهايت", help: "درجة الحرارة بالفهرنهايت" },
      kelvin: { label: "كلفن", help: "درجة الحرارة بالكلفن" },
    },
    outputs: {
      celsius: { label: "سيلسيوس", help: "النتيجة بالسيلسيوس" },
      fahrenheit: { label: "فهرنهايت", help: "النتيجة بالفهرنهايت" },
      kelvin: { label: "كلفن", help: "النتيجة بالكلفن" },
    },
    errors: { invalidTemperature: "درجة الحرارة يجب أن تكون رقماً صحيحاً" },
    faq: [
      {
        question: "ما الفرق بين سيلسيوس وفهرنهايت?",
        answer: "سيلسيوس وفهرنهايت مقياسان للحرارة بنقاط مرجعية مختلفة. يتجمد الماء عند 0°C (32°F) ويغلي عند 100°C (212°F).",
      },
      {
        question: "ما هو كلفن ولماذا مهم?",
        answer: "كلفن هو وحدة SI للحرارة المستخدمة في العلم. بدءاً من الصفر المطلق (−273.15°C).",
      },
      {
        question: "هل توجد درجة حرارة تتساوى فيها سيلسيوس وفهرنهايت?",
        answer: "نعم! −40°C تساوي −40°F. إنها الحالة الوحيدة التي يظهر فيها كلا المقياسين نفس القيمة.",
      },
      {
        question: "ما هو الصفر المطلق?",
        answer: "الصفر المطلق هو 0 كلفن (−273.15°C أو −459.67°F).",
      },
    ],
  },
  ru: {
    title: "Конвертер температуры",
    short: "Мгновенное преобразование между шкалами Цельсия, Фаренгейта и Кельвина",
    description: "Преобразование между шкалами Цельсия, Фаренгейта и Кельвина",
    keywords: ["температура", "цельсий", "фаренгейт", "кельвин", "преобразование", "тепловой"],
    inputs: {
      celsius: { label: "Цельсий", help: "Температура в Цельсий" },
      fahrenheit: { label: "Фаренгейт", help: "Температура в Фаренгейт" },
      kelvin: { label: "Кельвин", help: "Температура в Кельвин" },
    },
    outputs: {
      celsius: { label: "Цельсий", help: "Результат в Цельсий" },
      fahrenheit: { label: "Фаренгейт", help: "Результат в Фаренгейт" },
      kelvin: { label: "Кельвин", help: "Результат в Кельвин" },
    },
    errors: { invalidTemperature: "Температура должна быть числом" },
    faq: [
      {
        question: "В чем разница между Цельсием и Фаренгейтом?",
        answer: "Цельсий и Фаренгейт — две температурные шкалы с разными опорными точками. Вода замерзает при 0°C (32°F) и кипит при 100°C (212°F).",
      },
      {
        question: "Что такое Кельвин и почему это важно?",
        answer: "Кельвин — единица СИ температуры, используемая в науке. Она начинается с абсолютного нуля (−273.15°C).",
      },
      {
        question: "Есть ли температура, где Цельсий и Фаренгейт равны?",
        answer: "Да! −40°C равно −40°F. Это единственная точка, где обе шкалы показывают одно значение.",
      },
      {
        question: "Что такое абсолютный нуль?",
        answer: "Абсолютный нуль — 0 Кельвин (−273.15°C или −459.67°F).",
      },
    ],
  },
  zh: {
    title: "温度转换器",
    short: "摄氏度、华氏度和开尔文之间的即时转换",
    description: "摄氏度、华氏度和开尔文之间的转换",
    keywords: ["温度", "摄氏度", "华氏度", "开尔文", "转换", "热"],
    inputs: {
      celsius: { label: "摄氏度", help: "摄氏度温度" },
      fahrenheit: { label: "华氏度", help: "华氏度温度" },
      kelvin: { label: "开尔文", help: "开尔文温度" },
    },
    outputs: {
      celsius: { label: "摄氏度", help: "摄氏度结果" },
      fahrenheit: { label: "华氏度", help: "华氏度结果" },
      kelvin: { label: "开尔文", help: "开尔文结果" },
    },
    errors: { invalidTemperature: "温度必须是有效数字" },
    faq: [
      {
        question: "摄氏度和华氏度有什么区别?",
        answer: "摄氏度和华氏度是两个参考点不同的温度刻度。水在0°C (32°F)时冻结，在100°C (212°F)时沸腾。",
      },
      {
        question: "开尔文是什么，为什么很重要?",
        answer: "开尔文是科学中使用的SI温度单位。从绝对零度(−273.15°C)开始。",
      },
      {
        question: "摄氏度和华氏度相等的温度存在吗?",
        answer: "是的! −40°C等于−40°F。这是两个刻度显示相同值的唯一点。",
      },
      {
        question: "绝对零度是什么?",
        answer: "绝对零度是0开尔文(−273.15°C或−459.67°F)。",
      },
    ],
  },
  ja: {
    title: "温度変換ツール",
    short: "セルシウス、ファーレンハイト、ケルビンスケール間の即座の変換",
    description: "セルシウス、ファーレンハイト、ケルビンスケール間の変換",
    keywords: ["温度", "セルシウス", "ファーレンハイト", "ケルビン", "変換", "熱"],
    inputs: {
      celsius: { label: "セルシウス", help: "セルシウス温度" },
      fahrenheit: { label: "ファーレンハイト", help: "ファーレンハイト温度" },
      kelvin: { label: "ケルビン", help: "ケルビン温度" },
    },
    outputs: {
      celsius: { label: "セルシウス", help: "セルシウス結果" },
      fahrenheit: { label: "ファーレンハイト", help: "ファーレンハイト結果" },
      kelvin: { label: "ケルビン", help: "ケルビン結果" },
    },
    errors: { invalidTemperature: "温度は有効な数値である必要があります" },
    faq: [
      {
        question: "セルシウスとファーレンハイトの違いは?",
        answer: "セルシウスとファーレンハイトは異なる基準点を持つ2つの温度スケールです。水は0°C (32°F)で凍り、100°C (212°F)で沸騰します。",
      },
      {
        question: "ケルビンとは何であり、なぜ重要ですか?",
        answer: "ケルビンは科学で使用されるSI温度単位です。絶対零度(−273.15°C)から始まります。",
      },
      {
        question: "セルシウスとファーレンハイトが等しい温度はありますか?",
        answer: "はい！−40°Cは−40°Fに等しいです。両方のスケールが同じ値を示す唯一のポイントです。",
      },
      {
        question: "絶対零度とは?",
        answer: "絶対零度は0ケルビン(−273.15°CまたはFahrenheit−459.67°F)です。",
      },
    ],
  },
  ko: {
    title: "온도 변환기",
    short: "섭씨, 화씨 및 켈빈 눈금 간 즉시 변환",
    description: "섭씨, 화씨 및 켈빈 눈금 간의 변환",
    keywords: ["온도", "섭씨", "화씨", "켈빈", "변환", "열"],
    inputs: {
      celsius: { label: "섭씨", help: "섭씨 온도" },
      fahrenheit: { label: "화씨", help: "화씨 온도" },
      kelvin: { label: "켈빈", help: "켈빈 온도" },
    },
    outputs: {
      celsius: { label: "섭씨", help: "섭씨 결과" },
      fahrenheit: { label: "화씨", help: "화씨 결과" },
      kelvin: { label: "켈빈", help: "켈빈 결과" },
    },
    errors: { invalidTemperature: "온도는 유효한 숫자여야 합니다" },
    faq: [
      {
        question: "섭씨와 화씨의 차이점은 무엇입니까?",
        answer: "섭씨와 화씨는 다른 기준점을 가진 두 개의 온도 눈금입니다. 물은 0°C(32°F)에서 얼고 100°C(212°F)에서 끓습니다.",
      },
      {
        question: "켈빈이란 무엇이고 왜 중요합니까?",
        answer: "켈빈은 과학에서 사용되는 SI 온도 단위입니다. 절대 영도(−273.15°C)부터 시작합니다.",
      },
      {
        question: "섭씨와 화씨가 같은 온도가 있습니까?",
        answer: "네! −40°C는 −40°F와 같습니다. 두 눈금이 같은 값을 표시하는 유일한 지점입니다.",
      },
      {
        question: "절대 영도란 무엇입니까?",
        answer: "절대 영도는 0 켈빈(−273.15°C 또는 −459.67°F)입니다.",
      },
    ],
  },
  hi: {
    title: "तापमान परिवर्तक",
    short: "सेल्सियस, फारेनहाइट और केल्विन स्केल के बीच तत्काल रूपांतरण",
    description: "सेल्सियस, फारेनहाइट और केल्विन स्केल के बीच रूपांतरण",
    keywords: ["तापमान", "सेल्सियस", "फारेनहाइट", "केल्विन", "रूपांतरण", "तापीय"],
    inputs: {
      celsius: { label: "सेल्सियस", help: "सेल्सियस तापमान" },
      fahrenheit: { label: "फारेनहाइट", help: "फारेनहाइट तापमान" },
      kelvin: { label: "केल्विन", help: "केल्विन तापमान" },
    },
    outputs: {
      celsius: { label: "सेल्सियस", help: "सेल्सियस परिणाम" },
      fahrenheit: { label: "फारेनहाइट", help: "फारेनहाइट परिणाम" },
      kelvin: { label: "केल्विन", help: "केल्विन परिणाम" },
    },
    errors: { invalidTemperature: "तापमान एक वैध संख्या होनी चाहिए" },
    faq: [
      {
        question: "सेल्सियस और फारेनहाइट में क्या अंतर है?",
        answer: "सेल्सियस और फारेनहाइट विभिन्न संदर्भ बिंदुओं वाले दो तापमान पैमाने हैं। पानी 0°C (32°F) पर जमता है और 100°C (212°F) पर उबलता है।",
      },
      {
        question: "केल्विन क्या है और यह महत्वपूर्ण क्यों है?",
        answer: "केल्विन विज्ञान में उपयोग किया जाने वाला SI तापमान इकाई है। पूर्ण शून्य (−273.15°C) से शुरू होता है।",
      },
      {
        question: "क्या ऐसा तापमान है जहां सेल्सियस और फारेनहाइट बराबर हैं?",
        answer: "हाँ! −40°C बराबर −40°F है। यह एकमात्र बिंदु है जहाँ दोनों पैमाने समान मान दिखाते हैं।",
      },
      {
        question: "पूर्ण शून्य क्या है?",
        answer: "पूर्ण शून्य 0 केल्विन (−273.15°C या −459.67°F) है।",
      },
    ],
  },
};

export default i18n;
