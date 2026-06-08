import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Dynamic Viscosity Converter",
    short: "Convert between pascal-second, poise, and centipoise",
    description:
      "Convert between dynamic viscosity units including pascal-second, millipascal-second, poise, and centipoise with high precision.",
    keywords: [
      "dynamic viscosity",
      "poise",
      "centipoise",
      "pascal-second",
      "viscosity conversion",
    ],
    inputs: {
      value: { label: "Value", help: "The length value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
    faq: [
      {
        question: "How do I convert poise to pascal-second?",
        answer:
          "Multiply poise by 0.1 to get pascal-second. For example, 5 P × 0.1 = 0.5 Pa·s.",
      },
      {
        question: "Are centipoise and millipascal-second the same?",
        answer:
          "Yes. 1 centipoise (cP) equals exactly 1 millipascal-second (mPa·s), which is 0.001 Pa·s. Water at 20°C is about 1 cP.",
      },
      {
        question: "What is dynamic viscosity?",
        answer:
          "Dynamic viscosity measures a fluid's resistance to flow under an applied shear stress. Its SI unit is the pascal-second (Pa·s).",
      },
    ],
  },
  tr: {
    title: "Dinamik Viskozite Dönüştürücü",
    short: "Pascal-saniye, poise ve centipoise arasında dönüştürün",
    description:
      "Pascal-saniye, milipascal-saniye, poise ve centipoise dahil dinamik viskozite birimleri arasında yüksek kesinlikle dönüşüm.",
    keywords: [
      "dinamik viskozite",
      "poise",
      "centipoise",
      "pascal-saniye",
      "viskozite dönüşümü",
    ],
    inputs: {
      value: { label: "Değer", help: "Dönüştürülecek uzunluk değeri" },
      fromUnit: { label: "Kaynak Birim", help: "Kaynak birimi seçin" },
      toUnit: { label: "Hedef Birim", help: "Hedef birimi seçin" },
    },
    outputs: {
      result: { label: "Sonuç", help: "Dönüştürülen değer" },
    },
    faq: [
      {
        question: "Poise'i pascal-saniyeye nasıl dönüştürürüm?",
        answer: "Poise değerini 0.1 ile çarpın. Örneğin, 5 P × 0.1 = 0.5 Pa·s.",
      },
      {
        question: "Centipoise ve milipascal-saniye aynı mıdır?",
        answer:
          "Evet. 1 centipoise (cP), tam olarak 1 milipascal-saniyeye (mPa·s), yani 0.001 Pa·s'ye eşittir. 20°C'deki su yaklaşık 1 cP'dir.",
      },
      {
        question: "Dinamik viskozite nedir?",
        answer:
          "Dinamik viskozite, bir akışkanın uygulanan kayma gerilmesi altında akmaya karşı direncini ölçer. SI birimi pascal-saniyedir (Pa·s).",
      },
    ],
  },
  de: {
    title: "Dynamische-Viskosität-Umrechner",
    short: "Zwischen Pascalsekunde, Poise und Centipoise umrechnen",
    description:
      "Umrechnung zwischen Einheiten der dynamischen Viskosität wie Pascalsekunde, Millipascalsekunde, Poise und Centipoise mit hoher Genauigkeit.",
    keywords: [
      "dynamische viskosität",
      "poise",
      "centipoise",
      "pascalsekunde",
      "viskosität umrechnung",
    ],
    inputs: {
      value: { label: "Wert", help: "Der umzuwandelnde Längenwert" },
      fromUnit: { label: "Von Einheit", help: "Ausgangseinheit auswählen" },
      toUnit: { label: "Zu Einheit", help: "Zieleinheit auswählen" },
    },
    outputs: {
      result: { label: "Ergebnis", help: "Umgewandelter Wert" },
    },
  },
  fr: {
    title: "Convertisseur de viscosité dynamique",
    short: "Convertir entre pascal-seconde, poise et centipoise",
    description:
      "Conversion entre unités de viscosité dynamique telles que pascal-seconde, millipascal-seconde, poise et centipoise avec haute précision.",
    keywords: [
      "viscosité dynamique",
      "poise",
      "centipoise",
      "pascal-seconde",
      "conversion viscosité",
    ],
    inputs: {
      value: { label: "Valeur", help: "La valeur de longueur à convertir" },
      fromUnit: {
        label: "Unité de source",
        help: "Sélectionnez l'unité source",
      },
      toUnit: { label: "Unité cible", help: "Sélectionnez l'unité cible" },
    },
    outputs: {
      result: { label: "Résultat", help: "Valeur convertie" },
    },
  },
  es: {
    title: "Conversor de viscosidad dinámica",
    short: "Convertir entre pascal-segundo, poise y centipoise",
    description:
      "Conversión entre unidades de viscosidad dinámica como pascal-segundo, milipascal-segundo, poise y centipoise con alta precisión.",
    keywords: [
      "viscosidad dinámica",
      "poise",
      "centipoise",
      "pascal-segundo",
      "conversión viscosidad",
    ],
    inputs: {
      value: { label: "Valor", help: "El valor de longitud a convertir" },
      fromUnit: {
        label: "Unidad de origen",
        help: "Seleccione unidad de origen",
      },
      toUnit: {
        label: "Unidad de destino",
        help: "Seleccione unidad de destino",
      },
    },
    outputs: {
      result: { label: "Resultado", help: "Valor convertido" },
    },
  },
  it: {
    title: "Convertitore di viscosità dinamica",
    short: "Converti tra pascal-secondo, poise e centipoise",
    description:
      "Conversione tra unità di viscosità dinamica come pascal-secondo, millipascal-secondo, poise e centipoise con alta precisione.",
    keywords: [
      "viscosità dinamica",
      "poise",
      "centipoise",
      "pascal-secondo",
      "conversione viscosità",
    ],
    inputs: {
      value: { label: "Valore", help: "Il valore di lunghezza da convertire" },
      fromUnit: {
        label: "Unità di origine",
        help: "Selezionare unità di origine",
      },
      toUnit: {
        label: "Unità di destinazione",
        help: "Selezionare unità di destinazione",
      },
    },
    outputs: {
      result: { label: "Risultato", help: "Valore convertito" },
    },
  },
  pt: {
    title: "Conversor de viscosidade dinâmica",
    short: "Converta entre pascal-segundo, poise e centipoise",
    description:
      "Conversão entre unidades de viscosidade dinâmica como pascal-segundo, milipascal-segundo, poise e centipoise com alta precisão.",
    keywords: [
      "viscosidade dinâmica",
      "poise",
      "centipoise",
      "pascal-segundo",
      "conversão viscosidade",
    ],
    inputs: {
      value: { label: "Value", help: "The length value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
  },
  id: {
    title: "Konverter Viskositas Dinamis",
    short: "Konversi antara pascal-detik, poise, dan centipoise",
    description:
      "Konversi antara satuan viskositas dinamis seperti pascal-detik, milipascal-detik, poise, dan centipoise dengan presisi tinggi.",
    keywords: [
      "viskositas dinamis",
      "poise",
      "centipoise",
      "pascal-detik",
      "konversi viskositas",
    ],
    inputs: {
      value: { label: "Value", help: "The length value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
  },
  ar: {
    title: "محول اللزوجة الديناميكية",
    short: "التحويل بين باسكال-ثانية والبواز والسنتيبواز",
    description:
      "تحويل بين وحدات اللزوجة الديناميكية مثل باسكال-ثانية وميلي باسكال-ثانية والبواز والسنتيبواز بدقة عالية.",
    keywords: [
      "اللزوجة الديناميكية",
      "بواز",
      "سنتيبواز",
      "باسكال-ثانية",
      "تحويل اللزوجة",
    ],
    inputs: {
      value: { label: "القيمة", help: "قيمة الطول المراد تحويلها" },
      fromUnit: { label: "من الوحدة", help: "اختر الوحدة المصدر" },
      toUnit: { label: "إلى الوحدة", help: "اختر الوحدة المستهدفة" },
    },
    outputs: {
      result: { label: "النتيجة", help: "القيمة المحولة" },
    },
  },
  ru: {
    title: "Конвертер динамической вязкости",
    short: "Преобразование между паскаль-секундой, пуазом и сантипуазом",
    description:
      "Преобразование между единицами динамической вязкости, такими как паскаль-секунда, миллипаскаль-секунда, пуаз и сантипуаз с высокой точностью.",
    keywords: [
      "динамическая вязкость",
      "пуаз",
      "сантипуаз",
      "паскаль-секунда",
      "преобразование вязкости",
    ],
    inputs: {
      value: { label: "Значение", help: "Значение длины для преобразования" },
      fromUnit: { label: "От единицы", help: "Выберите исходную единицу" },
      toUnit: { label: "К единице", help: "Выберите целевую единицу" },
    },
    outputs: {
      result: { label: "Результат", help: "Преобразованное значение" },
    },
  },
  zh: {
    title: "动力黏度转换器",
    short: "在帕斯卡秒、泊和厘泊之间转换",
    description:
      "在动力黏度单位之间进行高精度转换，包括帕斯卡秒、毫帕斯卡秒、泊和厘泊。",
    keywords: ["动力黏度", "泊", "厘泊", "帕斯卡秒", "黏度转换"],
    inputs: {
      value: { label: "数值", help: "要转换的长度值" },
      fromUnit: { label: "从单位", help: "选择源单位" },
      toUnit: { label: "到单位", help: "选择目标单位" },
    },
    outputs: {
      result: { label: "结果", help: "转换后的值" },
    },
  },
  ja: {
    title: "動粘度コンバーター",
    short: "パスカル秒、ポアズ、センチポアズの間で変換",
    description:
      "パスカル秒、ミリパスカル秒、ポアズ、センチポアズなどの動粘度の単位間を高精度で変換します。",
    keywords: ["動粘度", "ポアズ", "センチポアズ", "パスカル秒", "粘度変換"],
    inputs: {
      value: { label: "値", help: "変換する長さの値" },
      fromUnit: { label: "から単位", help: "ソース単位を選択" },
      toUnit: { label: "へ単位", help: "ターゲット単位を選択" },
    },
    outputs: {
      result: { label: "結果", help: "変換された値" },
    },
  },
  ko: {
    title: "동점도 변환기",
    short: "파스칼초, 푸아즈, 센티푸아즈 단위 간 변환",
    description:
      "파스칼초, 밀리파스칼초, 푸아즈, 센티푸아즈 등 점성 계수 단위 간의 고정밀 변환.",
    keywords: ["동점도", "푸아즈", "센티푸아즈", "파스칼초", "점도 변환"],
    inputs: {
      value: { label: "값", help: "변환할 길이 값" },
      fromUnit: { label: "단위에서", help: "소스 단위 선택" },
      toUnit: { label: "단위로", help: "대상 단위 선택" },
    },
    outputs: {
      result: { label: "결과", help: "변환된 값" },
    },
  },
  hi: {
    title: "गतिक श्यानता परिवर्तक",
    short: "पास्कल-सेकंड, पॉइज़ और सेंटीपॉइज़ के बीच रूपांतरण",
    description:
      "पास्कल-सेकंड, मिलीपास्कल-सेकंड, पॉइज़ और सेंटीपॉइज़ सहित गतिक श्यानता इकाइयों के बीच उच्च सटीकता रूपांतरण।",
    keywords: [
      "गतिक श्यानता",
      "पॉइज़",
      "सेंटीपॉइज़",
      "पास्कल-सेकंड",
      "श्यानता रूपांतरण",
    ],
    inputs: {
      value: { label: "मान", help: "रूपांतरण के लिए लंबाई मान" },
      fromUnit: { label: "से इकाई", help: "स्रोत इकाई चुनें" },
      toUnit: { label: "को इकाई", help: "लक्ष्य इकाई चुनें" },
    },
    outputs: {
      result: { label: "परिणाम", help: "रूपांतरित मान" },
    },
  },
};

export default i18n;
