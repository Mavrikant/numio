import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Force Converter",
    short:
      "Convert between newtons, kilonewtons, pound-force, kilogram-force and more.",
    description:
      "Convert between SI and engineering force units with high precision",
    keywords: [
      "force",
      "newton",
      "pound-force",
      "kilogram-force",
      "conversion",
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
        question: "How do I convert kilogram-force to newtons?",
        answer:
          "Multiply the value in kgf by 9.80665, the standard acceleration of gravity. For example, 1 kgf equals 9.80665 N.",
      },
      {
        question: "How many newtons are in one pound-force?",
        answer:
          "1 pound-force (lbf) equals about 4.448222 newtons. It is the gravitational force on a one-pound mass at standard gravity.",
      },
      {
        question: "What is a dyne?",
        answer:
          "A dyne is the CGS unit of force, equal to exactly 1e-5 N. So 1 newton equals 100,000 dynes.",
      },
    ],
  },
  tr: {
    title: "Kuvvet Dönüştürücü",
    short:
      "Newton, kilonewton, pound-kuvvet, kilogram-kuvvet ve daha fazlası arasında dönüşüm.",
    description:
      "SI ve mühendislik kuvvet birimlerinde yüksek kesinlikle dönüşüm",
    keywords: [
      "kuvvet",
      "newton",
      "pound-kuvvet",
      "kilogram-kuvvet",
      "dönüşüm",
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
        question: "Kilogram-kuvveti newton'a nasıl dönüştürürüm?",
        answer:
          "kgf cinsinden değeri standart yerçekimi ivmesi olan 9.80665 ile çarpın. Örneğin, 1 kgf = 9.80665 N.",
      },
      {
        question: "Bir pound-kuvvette kaç newton vardır?",
        answer:
          "1 pound-kuvvet (lbf) yaklaşık 4.448222 newton'a eşittir. Bu, standart yerçekiminde bir pound kütleye etki eden kuvvettir.",
      },
      {
        question: "Dyne nedir?",
        answer:
          "Dyne, CGS kuvvet birimidir ve tam olarak 1e-5 N'a eşittir. Yani 1 newton 100.000 dyne'a eşittir.",
      },
    ],
  },
  de: {
    title: "Kraftumrechner",
    short: "Sofortige Umrechnung zwischen SI- und technischen Krafteinheiten",
    description:
      "Umrechnung zwischen SI- und technischen Krafteinheiten mit hoher Genauigkeit",
    keywords: ["kraft", "newton", "pound-force", "kilopond", "umrechnung"],
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
    title: "Convertisseur de force",
    short: "Conversion instantanée entre les unités de force SI et techniques",
    description:
      "Conversion entre les unités de force SI et techniques avec haute précision",
    keywords: [
      "force",
      "newton",
      "livre-force",
      "kilogramme-force",
      "conversion",
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
    title: "Conversor de fuerza",
    short: "Conversión instantánea entre unidades de fuerza SI y técnicas",
    description:
      "Conversión entre unidades de fuerza SI y técnicas con alta precisión",
    keywords: [
      "fuerza",
      "newton",
      "libra-fuerza",
      "kilogramo-fuerza",
      "conversión",
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
    title: "Convertitore di forza",
    short: "Conversione istantanea tra unità di forza SI e tecniche",
    description:
      "Conversione tra unità di forza SI e tecniche con alta precisione",
    keywords: [
      "forza",
      "newton",
      "libbra-forza",
      "chilogrammo-forza",
      "conversione",
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
    title: "Conversor de Força",
    short:
      "Converta entre newtons, quilonewtons, libra-força, quilograma-força e mais.",
    description:
      "Conversor gratuito de força. Converta entre newtons, quilonewtons, dina, libra-força, quilograma-força e outras unidades de força.",
    keywords: [
      "conversor força",
      "newton para kgf",
      "libra-força",
      "unidades força",
      "força",
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
    title: "Konverter Gaya",
    short:
      "Konversi antara newton, kilonewton, pon-gaya, kilogram-gaya, dan lainnya.",
    description:
      "Konverter gaya gratis. Konversi antara newton, kilonewton, dyne, pon-gaya, kilogram-gaya, dan satuan gaya lainnya.",
    keywords: [
      "konverter gaya",
      "newton ke kgf",
      "pon-gaya",
      "satuan gaya",
      "gaya",
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
    title: "محول القوة",
    short: "تحويل فوري بين وحدات القوة في النظام الدولي والوحدات الهندسية",
    description:
      "تحويل بين وحدات القوة في النظام الدولي والوحدات الهندسية بدقة عالية",
    keywords: ["قوة", "نيوتن", "رطل-قوة", "كيلوغرام-قوة", "تحويل"],
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
    title: "Конвертер силы",
    short: "Мгновенное преобразование между единицами силы СИ и техническими",
    description:
      "Преобразование между единицами силы СИ и техническими с высокой точностью",
    keywords: [
      "сила",
      "ньютон",
      "фунт-сила",
      "килограмм-сила",
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
    title: "力转换器",
    short: "国际单位制和工程力单位之间的即时转换",
    description: "国际单位制和工程力单位之间的高精度转换",
    keywords: ["力", "牛顿", "磅力", "千克力", "转换"],
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
    title: "力コンバーター",
    short: "SI単位と工学的な力の単位間の即座の変換",
    description: "SI単位と工学的な力の単位間の高精度変換",
    keywords: ["力", "ニュートン", "重量ポンド", "重量キログラム", "変換"],
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
    title: "힘 변환기",
    short: "SI 단위와 공학적 힘 단위 간 즉시 변환",
    description: "SI 단위와 공학적 힘 단위 간의 고정밀 변환",
    keywords: ["힘", "뉴턴", "파운드힘", "킬로그램힘", "변환"],
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
    title: "बल परिवर्तक",
    short: "SI और इंजीनियरिंग बल इकाइयों के बीच तत्काल रूपांतरण",
    description: "SI और इंजीनियरिंग बल इकाइयों के बीच उच्च सटीकता रूपांतरण",
    keywords: ["बल", "न्यूटन", "पाउंड-बल", "किलोग्राम-बल", "रूपांतरण"],
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
