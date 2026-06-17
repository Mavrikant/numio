import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Flow Rate Converter",
    short: "Convert between m³/h, L/min, CFM, GPM and more instantly",
    description:
      "Convert between metric and imperial volumetric flow-rate units with high precision",
    keywords: ["flow rate", "cfm", "gpm", "m3/s", "conversion"],
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
        question: "How many cubic meters per hour are in 1 m³/s?",
        answer:
          "1 cubic meter per second equals 3,600 cubic meters per hour, since there are 3,600 seconds in an hour.",
      },
      {
        question: "What is CFM?",
        answer:
          "CFM stands for cubic feet per minute, a common imperial unit for air and gas flow. 1 CFM ≈ 0.000472 m³/s.",
      },
      {
        question: "How do I convert GPM to liters per minute?",
        answer:
          "Multiply US gallons per minute by 3.78541 to get liters per minute. For example, 10 GPM ≈ 37.85 L/min.",
      },
    ],
  },
  nl: {
    title: "Debiet Converteerer",
    short: "Converteer between m³/h, L/min, CFM, GPM and more direct",
    description:
      "Converteer between metric and imperial volumetric flow-rate units with high precision",
    keywords: ["flow rate", "cfm", "gpm", "m3/s", "conversion"],
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
        question: "How many cubic meters per hour are in 1 m³/s?",
        answer:
          "1 cubic meter per second equals 3,600 cubic meters per hour, since there are 3,600 seconden in an hour.",
      },
      {
        question: "What is CFM?",
        answer:
          "CFM stands for cubic feet per minute, a common imperial unit for air and gas flow. 1 CFM ≈ 0.000472 m³/s.",
      },
      {
        question: "How do I converteer GPM to liters per minute?",
        answer:
          "Multiply US gallons per minute by 3.78541 to get liters per minute. For example, 10 GPM ≈ 37.85 L/min.",
      },
    ],
  },

  pl: {
    title: "Natężenie Przepływu Konwerter",
    short: "Konwertuj between m³/h, L/min, CFM, GPM and more natychmiast",
    description:
      "Konwertuj between metric and imperial volumetric flow-rate units with high precision",
    keywords: ["flow rate", "cfm", "gpm", "m3/s", "conversion"],
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
        question: "How many cubic meters per hour are in 1 m³/s?",
        answer:
          "1 cubic meter per second equals 3,600 cubic meters per hour, since there are 3,600 sekund in an hour.",
      },
      {
        question: "What is CFM?",
        answer:
          "CFM stands for cubic feet per minute, a common imperial unit for air and gas flow. 1 CFM ≈ 0.000472 m³/s.",
      },
      {
        question: "How do I konwertuj GPM to liters per minute?",
        answer:
          "Multiply US gallons per minute by 3.78541 to get liters per minute. For example, 10 GPM ≈ 37.85 L/min.",
      },
    ],
  },
  tr: {
    title: "Debi Dönüştürücü",
    short: "m³/h, L/dk, CFM, GPM ve daha fazlası arasında anında dönüşüm",
    description:
      "Metrik ve imparatorluk hacimsel debi birimlerinde yüksek kesinlikle dönüşüm",
    keywords: ["debi", "akış hızı", "cfm", "gpm", "dönüşüm"],
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
        question: "1 m³/s kaç m³/saattir?",
        answer:
          "1 saatte 3.600 saniye olduğundan, saniyede 1 metreküp saatte 3.600 metreküpe eşittir.",
      },
      {
        question: "CFM nedir?",
        answer:
          "CFM, dakikada fit küp anlamına gelir ve hava ile gaz akışı için yaygın bir imparatorluk birimidir. 1 CFM ≈ 0.000472 m³/s.",
      },
      {
        question: "GPM'i dakikada litreye nasıl dönüştürürüm?",
        answer:
          "Dakikada ABD galonunu 3.78541 ile çarpın. Örneğin, 10 GPM ≈ 37.85 L/dk.",
      },
    ],
  },
  de: {
    title: "Durchflussraten-Umrechner",
    short: "Sofortige Umrechnung zwischen m³/h, L/min, CFM, GPM und mehr",
    description:
      "Umrechnung zwischen metrischen und imperialen Volumenstrom-Einheiten mit hoher Genauigkeit",
    keywords: ["durchflussrate", "volumenstrom", "cfm", "gpm", "umrechnung"],
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
    title: "Convertisseur de débit",
    short: "Conversion instantanée entre m³/h, L/min, CFM, GPM et plus",
    description:
      "Conversion entre les unités de débit volumétrique métriques et impériales avec haute précision",
    keywords: ["débit", "débit volumique", "cfm", "gpm", "conversion"],
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
    title: "Conversor de caudal",
    short: "Conversión instantánea entre m³/h, L/min, CFM, GPM y más",
    description:
      "Conversión entre unidades de caudal volumétrico métricas e imperiales con alta precisión",
    keywords: ["caudal", "flujo", "cfm", "gpm", "conversión"],
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
    title: "Convertitore di portata",
    short: "Conversione istantanea tra m³/h, L/min, CFM, GPM e altro",
    description:
      "Conversione tra unità di portata volumetrica metriche e imperiali con alta precisione",
    keywords: ["portata", "flusso", "cfm", "gpm", "conversione"],
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
    title: "Conversor de Vazão",
    short: "Converta entre m³/h, L/min, CFM, GPM e mais.",
    description:
      "Conversor gratuito de vazão. Converta entre unidades de vazão volumétrica métricas e imperiais com alta precisão.",
    keywords: ["vazão", "fluxo", "cfm", "gpm", "conversão"],
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
    title: "Konverter Laju Aliran",
    short: "Konversi antara m³/h, L/min, CFM, GPM, dan lainnya.",
    description:
      "Konverter laju aliran gratis. Konversi antara satuan laju aliran volumetrik metrik dan imperial dengan presisi tinggi.",
    keywords: ["laju aliran", "debit", "cfm", "gpm", "konversi"],
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
    title: "محول معدل التدفق",
    short: "تحويل فوري بين m³/h و L/min و CFM و GPM والمزيد",
    description:
      "تحويل بين وحدات معدل التدفق الحجمي المترية والإمبراطورية بدقة عالية",
    keywords: ["معدل التدفق", "التدفق", "cfm", "gpm", "تحويل"],
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
    title: "Конвертер расхода",
    short: "Мгновенное преобразование между m³/h, L/min, CFM, GPM и другими",
    description:
      "Преобразование между метрическими и имперскими единицами объёмного расхода с высокой точностью",
    keywords: ["расход", "поток", "cfm", "gpm", "преобразование"],
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
    title: "流量转换器",
    short: "m³/h、L/min、CFM、GPM 等单位之间的即时转换",
    description: "公制和英制体积流量单位之间的高精度转换",
    keywords: ["流量", "流速", "cfm", "gpm", "转换"],
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
    title: "流量コンバーター",
    short: "m³/h、L/min、CFM、GPM などの単位間の即座の変換",
    description: "メートル法とヤード・ポンド法の体積流量単位間の高精度変換",
    keywords: ["流量", "流速", "cfm", "gpm", "変換"],
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
    title: "유량 변환기",
    short: "m³/h, L/min, CFM, GPM 등 단위 간 즉시 변환",
    description: "미터법과 영국식 체적 유량 단위 간의 고정밀 변환",
    keywords: ["유량", "흐름", "cfm", "gpm", "변환"],
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
    title: "प्रवाह दर परिवर्तक",
    short: "m³/h, L/min, CFM, GPM और अधिक के बीच तत्काल रूपांतरण",
    description:
      "मीट्रिक और इंपीरियल आयतनी प्रवाह दर इकाइयों के बीच उच्च सटीकता रूपांतरण",
    keywords: ["प्रवाह दर", "प्रवाह", "cfm", "gpm", "रूपांतरण"],
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
