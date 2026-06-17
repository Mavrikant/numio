import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Torque Converter",
    short: "Convert between newton-meters, lbf-ft, kgf-m and more instantly",
    description:
      "Convert between metric and imperial torque (moment of force) units with high precision",
    keywords: ["torque", "moment", "newton meter", "lbf-ft", "conversion"],
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
        question: "How do I convert newton-meters to pound-force-feet?",
        answer:
          "Divide the newton-meter value by 1.3558. For example, 10 N·m ÷ 1.3558 ≈ 7.376 lbf·ft.",
      },
      {
        question: "What is the difference between torque and energy?",
        answer:
          "Although both can be expressed in newton-meters, torque is a rotational (vector) quantity while energy is a scalar. They are kept as separate physical concepts.",
      },
      {
        question: "How many newton-meters are in 1 kgf·m?",
        answer:
          "1 kilogram-force-meter equals 9.80665 newton-meters, using standard gravity.",
      },
    ],
  },
  nl: {
    title: "Koppel Converteerer",
    short: "Converteer between newton-meters, lbf-ft, kgf-m and more direct",
    description:
      "Converteer between metric and imperial torque (moment of force) units with high precision",
    keywords: ["torque", "moment", "newton meter", "lbf-ft", "conversion"],
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
        question: "How do I converteer newton-meters to pound-force-feet?",
        answer:
          "Divide the newton-meter value by 1.3558. For example, 10 N·m ÷ 1.3558 ≈ 7.376 lbf·ft.",
      },
      {
        question: "What is the difference between torque and energy?",
        answer:
          "Although both can be expressed in newton-meters, torque is a rotational (vector) quantity while energy is a scalar. They are kept as separate physical concepts.",
      },
      {
        question: "How many newton-meters are in 1 kgf·m?",
        answer:
          "1 kilogram-force-meter equals 9.80665 newton-meters, using standard gravity.",
      },
    ],
  },

  pl: {
    title: "Moment Obrotowy Konwerter",
    short: "Konwertuj between newton-meters, lbf-ft, kgf-m and more natychmiast",
    description:
      "Konwertuj between metric and imperial torque (moment of force) units with high precision",
    keywords: ["torque", "moment", "newton meter", "lbf-ft", "conversion"],
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
        question: "How do I konwertuj newton-meters to pound-force-feet?",
        answer:
          "Divide the newton-meter value by 1.3558. For example, 10 N·m ÷ 1.3558 ≈ 7.376 lbf·ft.",
      },
      {
        question: "What is the difference between torque and energy?",
        answer:
          "Although both can be expressed in newton-meters, torque is a rotational (vector) quantity while energy is a scalar. They are kept as separate physical concepts.",
      },
      {
        question: "How many newton-meters are in 1 kgf·m?",
        answer:
          "1 kilogram-force-meter equals 9.80665 newton-meters, using standard gravity.",
      },
    ],
  },
  tr: {
    title: "Tork Dönüştürücü",
    short:
      "Newton-metre, lbf-ft, kgf-m ve daha fazlası arasında anında dönüşüm",
    description:
      "Metrik ve imparatorluk tork (moment) birimlerinde yüksek kesinlikle dönüşüm",
    keywords: ["tork", "moment", "newton metre", "lbf-ft", "dönüşüm"],
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
        question: "Newton-metreyi pound-force-feet'e nasıl dönüştürürüm?",
        answer:
          "Newton-metre değerini 1.3558'e bölün. Örneğin, 10 N·m ÷ 1.3558 ≈ 7.376 lbf·ft.",
      },
      {
        question: "Tork ile enerji arasındaki fark nedir?",
        answer:
          "Her ikisi de newton-metre ile ifade edilebilse de tork dönüşel (vektörel) bir büyüklük, enerji ise skalerdir. Ayrı fiziksel kavramlar olarak tutulurlar.",
      },
      {
        question: "1 kgf·m kaç newton-metredir?",
        answer:
          "1 kilogram-kuvvet-metre, standart yerçekimi kullanılarak 9.80665 newton-metreye eşittir.",
      },
    ],
  },
  de: {
    title: "Drehmoment-Umrechner",
    short: "Sofortige Umrechnung zwischen Newtonmeter, lbf-ft, kgf-m und mehr",
    description:
      "Umrechnung zwischen metrischen und imperialen Drehmoment-Einheiten (Moment) mit hoher Genauigkeit",
    keywords: ["drehmoment", "moment", "newtonmeter", "lbf-ft", "umrechnung"],
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
    title: "Convertisseur de couple",
    short: "Conversion instantanée entre newton-mètres, lbf-ft, kgf-m et plus",
    description:
      "Conversion entre les unités de couple (moment) métriques et impériales avec haute précision",
    keywords: ["couple", "moment", "newton-mètre", "lbf-ft", "conversion"],
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
    title: "Conversor de par",
    short: "Conversión instantánea entre newton-metros, lbf-ft, kgf-m y más",
    description:
      "Conversión entre unidades de par (momento) métricas e imperiales con alta precisión",
    keywords: ["par", "momento", "newton-metro", "lbf-ft", "conversión"],
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
    title: "Convertitore di coppia",
    short: "Conversione istantanea tra newton-metri, lbf-ft, kgf-m e altro",
    description:
      "Conversione tra unità di coppia (momento) metriche e imperiali con alta precisione",
    keywords: ["coppia", "momento", "newton-metro", "lbf-ft", "conversione"],
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
    title: "Conversor de Torque",
    short: "Converta entre newton-metros, lbf-ft, kgf-m e mais.",
    description:
      "Conversor gratuito de torque. Converta entre unidades de torque (momento) métricas e imperiais com alta precisão.",
    keywords: ["torque", "momento", "newton-metro", "lbf-ft", "conversão"],
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
    title: "Konverter Torsi",
    short: "Konversi antara newton-meter, lbf-ft, kgf-m, dan lainnya.",
    description:
      "Konverter torsi gratis. Konversi antara satuan torsi (momen) metrik dan imperial dengan presisi tinggi.",
    keywords: ["torsi", "momen", "newton-meter", "lbf-ft", "konversi"],
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
    title: "محول العزم",
    short: "تحويل فوري بين نيوتن-متر و lbf-ft و kgf-m والمزيد",
    description:
      "تحويل بين وحدات العزم (عزم الدوران) المترية والإمبراطورية بدقة عالية",
    keywords: ["عزم", "عزم الدوران", "نيوتن متر", "lbf-ft", "تحويل"],
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
    title: "Конвертер крутящего момента",
    short:
      "Мгновенное преобразование между ньютон-метрами, lbf-ft, kgf-m и другими",
    description:
      "Преобразование между метрическими и имперскими единицами крутящего момента с высокой точностью",
    keywords: [
      "крутящий момент",
      "момент",
      "ньютон-метр",
      "lbf-ft",
      "преобразование",
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
    title: "扭矩转换器",
    short: "牛顿米、lbf-ft、kgf-m 等单位之间的即时转换",
    description: "公制和英制扭矩（力矩）单位之间的高精度转换",
    keywords: ["扭矩", "力矩", "牛顿米", "lbf-ft", "转换"],
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
    title: "トルクコンバーター",
    short: "ニュートンメートル、lbf-ft、kgf-m などの単位間の即座の変換",
    description:
      "メートル法とヤード・ポンド法のトルク（モーメント）単位間の高精度変換",
    keywords: ["トルク", "モーメント", "ニュートンメートル", "lbf-ft", "変換"],
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
    title: "토크 변환기",
    short: "뉴턴미터, lbf-ft, kgf-m 등 단위 간 즉시 변환",
    description: "미터법과 영국식 토크(모멘트) 단위 간의 고정밀 변환",
    keywords: ["토크", "모멘트", "뉴턴미터", "lbf-ft", "변환"],
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
    title: "टॉर्क परिवर्तक",
    short: "न्यूटन-मीटर, lbf-ft, kgf-m और अधिक के बीच तत्काल रूपांतरण",
    description:
      "मीट्रिक और इंपीरियल टॉर्क (आघूर्ण) इकाइयों के बीच उच्च सटीकता रूपांतरण",
    keywords: ["टॉर्क", "आघूर्ण", "न्यूटन-मीटर", "lbf-ft", "रूपांतरण"],
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
