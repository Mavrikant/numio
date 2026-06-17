import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Kinematic Viscosity Converter",
    short: "Convert between m²/s, stokes, and centistokes",
    description:
      "Convert between kinematic viscosity units including square meter per second, square millimeter per second, stokes, and centistokes with high precision.",
    keywords: [
      "kinematic viscosity",
      "stokes",
      "centistokes",
      "m²/s",
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
        question: "How do I convert stokes to m²/s?",
        answer:
          "Multiply stokes by 0.0001 to get square meters per second. For example, 1 St × 0.0001 = 0.0001 m²/s.",
      },
      {
        question: "Are centistokes and mm²/s the same?",
        answer:
          "Yes. 1 centistokes (cSt) equals exactly 1 square millimeter per second (mm²/s), which is 1e-6 m²/s. Water at 20°C is about 1 cSt.",
      },
      {
        question: "What is kinematic viscosity?",
        answer:
          "Kinematic viscosity is the ratio of dynamic viscosity to density, measuring how a fluid flows under gravity. Its SI unit is the square meter per second (m²/s).",
      },
    ],
  },
  nl: {
    title: "Kinematic Viscosity Converteerer",
    short: "Converteer between m²/s, stokes, and centistokes",
    description:
      "Converteer between kinematic viscosity units including square meter per second, square millimeter per second, stokes, and centistokes with high precision.",
    keywords: [
      "kinematic viscosity",
      "stokes",
      "centistokes",
      "m²/s",
      "viscosity conversion",
    ],
    inputs: {
      value: { label: "Waarde", help: "The lengte value to converteer" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Resultaat", help: "Converteered value" },
    },
    faq: [
      {
        question: "How do I converteer stokes to m²/s?",
        answer:
          "Multiply stokes by 0.0001 to get square meters per second. For example, 1 St × 0.0001 = 0.0001 m²/s.",
      },
      {
        question: "Are centistokes and mm²/s the same?",
        answer:
          "Yes. 1 centistokes (cSt) equals exactly 1 square millimeter per second (mm²/s), which is 1e-6 m²/s. Water at 20°C is about 1 cSt.",
      },
      {
        question: "What is kinematic viscosity?",
        answer:
          "Kinematic viscosity is the ratio of dynamic viscosity to density, measuring how a fluid flows under gravity. Its SI unit is the square meter per second (m²/s).",
      },
    ],
  },

  pl: {
    title: "Kinematic Viscosity Konwerter",
    short: "Konwertuj between m²/s, stokes, and centistokes",
    description:
      "Konwertuj between kinematic viscosity units including square meter per second, square millimeter per second, stokes, and centistokes with high precision.",
    keywords: [
      "kinematic viscosity",
      "stokes",
      "centistokes",
      "m²/s",
      "viscosity conversion",
    ],
    inputs: {
      value: { label: "Wartość", help: "The długość value to konwertuj" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Wynik", help: "Konwertujed value" },
    },
    faq: [
      {
        question: "How do I konwertuj stokes to m²/s?",
        answer:
          "Multiply stokes by 0.0001 to get square meters per second. For example, 1 St × 0.0001 = 0.0001 m²/s.",
      },
      {
        question: "Are centistokes and mm²/s the same?",
        answer:
          "Yes. 1 centistokes (cSt) equals exactly 1 square millimeter per second (mm²/s), which is 1e-6 m²/s. Water at 20°C is about 1 cSt.",
      },
      {
        question: "What is kinematic viscosity?",
        answer:
          "Kinematic viscosity is the ratio of dynamic viscosity to density, measuring how a fluid flows under gravity. Its SI unit is the square meter per second (m²/s).",
      },
    ],
  },
  tr: {
    title: "Kinematik Viskozite Dönüştürücü",
    short: "m²/s, stokes ve centistokes arasında dönüştürün",
    description:
      "Metrekare/saniye, milimetrekare/saniye, stokes ve centistokes dahil kinematik viskozite birimleri arasında yüksek kesinlikle dönüşüm.",
    keywords: [
      "kinematik viskozite",
      "stokes",
      "centistokes",
      "m²/s",
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
        question: "Stokes'u m²/s'ye nasıl dönüştürürüm?",
        answer:
          "Stokes değerini 0.0001 ile çarpın. Örneğin, 1 St × 0.0001 = 0.0001 m²/s.",
      },
      {
        question: "Centistokes ve mm²/s aynı mıdır?",
        answer:
          "Evet. 1 centistokes (cSt), tam olarak 1 milimetrekare/saniyeye (mm²/s), yani 1e-6 m²/s'ye eşittir. 20°C'deki su yaklaşık 1 cSt'dir.",
      },
      {
        question: "Kinematik viskozite nedir?",
        answer:
          "Kinematik viskozite, dinamik viskozitenin yoğunluğa oranıdır ve bir akışkanın yerçekimi altında nasıl aktığını ölçer. SI birimi metrekare/saniyedir (m²/s).",
      },
    ],
  },
  de: {
    title: "Kinematische-Viskosität-Umrechner",
    short: "Zwischen m²/s, Stokes und Centistokes umrechnen",
    description:
      "Umrechnung zwischen Einheiten der kinematischen Viskosität wie Quadratmeter pro Sekunde, Quadratmillimeter pro Sekunde, Stokes und Centistokes mit hoher Genauigkeit.",
    keywords: [
      "kinematische viskosität",
      "stokes",
      "centistokes",
      "m²/s",
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
    title: "Convertisseur de viscosité cinématique",
    short: "Convertir entre m²/s, stokes et centistokes",
    description:
      "Conversion entre unités de viscosité cinématique telles que mètre carré par seconde, millimètre carré par seconde, stokes et centistokes avec haute précision.",
    keywords: [
      "viscosité cinématique",
      "stokes",
      "centistokes",
      "m²/s",
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
    title: "Conversor de viscosidad cinemática",
    short: "Convertir entre m²/s, stokes y centistokes",
    description:
      "Conversión entre unidades de viscosidad cinemática como metro cuadrado por segundo, milímetro cuadrado por segundo, stokes y centistokes con alta precisión.",
    keywords: [
      "viscosidad cinemática",
      "stokes",
      "centistokes",
      "m²/s",
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
    title: "Convertitore di viscosità cinematica",
    short: "Converti tra m²/s, stokes e centistokes",
    description:
      "Conversione tra unità di viscosità cinematica come metro quadrato al secondo, millimetro quadrato al secondo, stokes e centistokes con alta precisione.",
    keywords: [
      "viscosità cinematica",
      "stokes",
      "centistokes",
      "m²/s",
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
    title: "Conversor de viscosidade cinemática",
    short: "Converta entre m²/s, stokes e centistokes",
    description:
      "Conversão entre unidades de viscosidade cinemática como metro quadrado por segundo, milímetro quadrado por segundo, stokes e centistokes com alta precisão.",
    keywords: [
      "viscosidade cinemática",
      "stokes",
      "centistokes",
      "m²/s",
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
    title: "Konverter Viskositas Kinematik",
    short: "Konversi antara m²/s, stokes, dan centistokes",
    description:
      "Konversi antara satuan viskositas kinematik seperti meter persegi per detik, milimeter persegi per detik, stokes, dan centistokes dengan presisi tinggi.",
    keywords: [
      "viskositas kinematik",
      "stokes",
      "centistokes",
      "m²/s",
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
    title: "محول اللزوجة الحركية",
    short: "التحويل بين m²/s والستوكس والسنتيستوكس",
    description:
      "تحويل بين وحدات اللزوجة الحركية مثل متر مربع في الثانية وميليمتر مربع في الثانية والستوكس والسنتيستوكس بدقة عالية.",
    keywords: [
      "اللزوجة الحركية",
      "ستوكس",
      "سنتيستوكس",
      "m²/s",
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
    title: "Конвертер кинематической вязкости",
    short: "Преобразование между м²/с, стоксами и сантистоксами",
    description:
      "Преобразование между единицами кинематической вязкости, такими как квадратный метр в секунду, квадратный миллиметр в секунду, стокс и сантистокс с высокой точностью.",
    keywords: [
      "кинематическая вязкость",
      "стокс",
      "сантистокс",
      "м²/с",
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
    title: "运动黏度转换器",
    short: "在 m²/s、斯托克斯和厘斯之间转换",
    description:
      "在运动黏度单位之间进行高精度转换，包括平方米每秒、平方毫米每秒、斯托克斯和厘斯。",
    keywords: ["运动黏度", "斯托克斯", "厘斯", "m²/s", "黏度转换"],
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
    title: "動粘性係数コンバーター",
    short: "m²/s、ストークス、センチストークスの間で変換",
    description:
      "平方メートル毎秒、平方ミリメートル毎秒、ストークス、センチストークスなどの動粘性係数の単位間を高精度で変換します。",
    keywords: [
      "動粘性係数",
      "ストークス",
      "センチストークス",
      "m²/s",
      "粘度変換",
    ],
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
    title: "동점성 변환기",
    short: "m²/s, 스토크스, 센티스토크스 단위 간 변환",
    description:
      "초당 제곱미터, 초당 제곱밀리미터, 스토크스, 센티스토크스 등 동점성 계수 단위 간의 고정밀 변환.",
    keywords: ["동점성", "스토크스", "센티스토크스", "m²/s", "점도 변환"],
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
    short: "m²/s, स्टोक्स और सेंटीस्टोक्स के बीच रूपांतरण",
    description:
      "वर्ग मीटर प्रति सेकंड, वर्ग मिलीमीटर प्रति सेकंड, स्टोक्स और सेंटीस्टोक्स सहित गतिक श्यानता इकाइयों के बीच उच्च सटीकता रूपांतरण।",
    keywords: [
      "गतिक श्यानता",
      "स्टोक्स",
      "सेंटीस्टोक्स",
      "m²/s",
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
