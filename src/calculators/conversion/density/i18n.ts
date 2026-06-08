import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Density Converter",
    short: "Convert between metric and imperial density units instantly",
    description:
      "Convert between metric and imperial density units with high precision",
    keywords: ["density", "kg/m3", "g/cm3", "lb/ft3", "conversion"],
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
        question: "How do I convert g/cm³ to kg/m³?",
        answer:
          "Multiply the value in g/cm³ by 1000. For example, water at 1 g/cm³ equals 1000 kg/m³.",
      },
      {
        question: "Is g/cm³ the same as g/mL?",
        answer:
          "Yes. Because 1 milliliter equals exactly 1 cubic centimeter, 1 g/cm³ is identical to 1 g/mL.",
      },
      {
        question: "How do I convert lb/ft³ to kg/m³?",
        answer:
          "Multiply the value in lb/ft³ by about 16.0185. For example, 62.4 lb/ft³ is roughly 1000 kg/m³, the density of water.",
      },
    ],
  },
  tr: {
    title: "Yoğunluk Dönüştürücü",
    short: "Metrik ve imparatorluk yoğunluk birimleri arasında anında dönüşüm",
    description:
      "Metrik ve imparatorluk yoğunluk birimlerinde yüksek kesinlikle dönüşüm",
    keywords: ["yoğunluk", "kg/m3", "g/cm3", "lb/ft3", "dönüşüm"],
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
        question: "g/cm³'ü kg/m³'e nasıl dönüştürürüm?",
        answer:
          "g/cm³ cinsinden değeri 1000 ile çarpın. Örneğin, 1 g/cm³ olan su 1000 kg/m³'e eşittir.",
      },
      {
        question: "g/cm³ ile g/mL aynı mıdır?",
        answer:
          "Evet. 1 mililitre tam olarak 1 santimetreküpe eşit olduğundan, 1 g/cm³ ile 1 g/mL aynıdır.",
      },
      {
        question: "lb/ft³'ü kg/m³'e nasıl dönüştürürüm?",
        answer:
          "lb/ft³ cinsinden değeri yaklaşık 16.0185 ile çarpın. Örneğin, 62.4 lb/ft³ yaklaşık 1000 kg/m³'tür; bu suyun yoğunluğudur.",
      },
    ],
  },
  de: {
    title: "Dichteumrechner",
    short:
      "Sofortige Umrechnung zwischen metrischen und imperialen Dichteeinheiten",
    description:
      "Umrechnung zwischen metrischen und imperialen Dichteeinheiten mit hoher Genauigkeit",
    keywords: ["dichte", "kg/m3", "g/cm3", "lb/ft3", "umrechnung"],
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
    title: "Convertisseur de densité",
    short:
      "Conversion instantanée entre les unités de densité métriques et impériales",
    description:
      "Conversion entre les unités de densité métriques et impériales avec haute précision",
    keywords: ["densité", "kg/m3", "g/cm3", "lb/ft3", "conversion"],
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
    title: "Conversor de densidad",
    short:
      "Conversión instantánea entre unidades de densidad métricas e imperiales",
    description:
      "Conversión entre unidades de densidad métricas e imperiales con alta precisión",
    keywords: ["densidad", "kg/m3", "g/cm3", "lb/ft3", "conversión"],
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
    title: "Convertitore di densità",
    short: "Conversione istantanea tra unità di densità metriche e imperiali",
    description:
      "Conversione tra unità di densità metriche e imperiali con alta precisione",
    keywords: ["densità", "kg/m3", "g/cm3", "lb/ft3", "conversione"],
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
    title: "Conversor de Densidade",
    short: "Converta entre g/cm³, kg/m³, lb/ft³ e mais.",
    description:
      "Conversor gratuito de densidade. Converta entre quilogramas por metro cúbico, gramas por centímetro cúbico, libras por pé cúbico e outras unidades de densidade.",
    keywords: [
      "conversor densidade",
      "g/cm3 para kg/m3",
      "lb/ft3",
      "unidades densidade",
      "densidade",
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
    title: "Konverter Kepadatan",
    short: "Konversi antara g/cm³, kg/m³, lb/ft³, dan lainnya.",
    description:
      "Konverter kepadatan gratis. Konversi antara kilogram per meter kubik, gram per sentimeter kubik, pon per kaki kubik, dan satuan kepadatan lainnya.",
    keywords: [
      "konverter kepadatan",
      "g/cm3 ke kg/m3",
      "lb/ft3",
      "satuan kepadatan",
      "kepadatan",
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
    title: "محول الكثافة",
    short: "تحويل فوري بين وحدات الكثافة المترية والإمبراطورية",
    description: "تحويل بين وحدات الكثافة المترية والإمبراطورية بدقة عالية",
    keywords: ["كثافة", "kg/m3", "g/cm3", "lb/ft3", "تحويل"],
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
    title: "Конвертер плотности",
    short:
      "Мгновенное преобразование между метрическими и имперскими единицами плотности",
    description:
      "Преобразование между метрическими и имперскими единицами плотности с высокой точностью",
    keywords: ["плотность", "kg/m3", "g/cm3", "lb/ft3", "преобразование"],
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
    title: "密度转换器",
    short: "公制和英制密度单位之间的即时转换",
    description: "公制和英制密度单位之间的高精度转换",
    keywords: ["密度", "千克每立方米", "克每立方厘米", "磅每立方英尺", "转换"],
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
    title: "密度コンバーター",
    short: "メートル法とヤード・ポンド法の密度の単位間の即座の変換",
    description: "メートル法とヤード・ポンド法の密度の単位間の高精度変換",
    keywords: [
      "密度",
      "キログラム毎立方メートル",
      "グラム毎立方センチメートル",
      "ポンド毎立方フィート",
      "変換",
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
    title: "밀도 변환기",
    short: "미터법과 영국식 밀도 단위 간 즉시 변환",
    description: "미터법과 영국식 밀도 단위 간의 고정밀 변환",
    keywords: [
      "밀도",
      "킬로그램 매 세제곱미터",
      "그램 매 세제곱센티미터",
      "파운드 매 세제곱피트",
      "변환",
    ],
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
    title: "घनत्व परिवर्तक",
    short: "मीट्रिक और इंपीरियल घनत्व इकाइयों के बीच तत्काल रूपांतरण",
    description:
      "मीट्रिक और इंपीरियल घनत्व इकाइयों के बीच उच्च सटीकता रूपांतरण",
    keywords: ["घनत्व", "kg/m3", "g/cm3", "lb/ft3", "रूपांतरण"],
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
