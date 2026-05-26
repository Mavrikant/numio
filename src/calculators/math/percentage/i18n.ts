import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Percentage Calculator",
    short: "Solve all common percentage problems in one tool.",
    description: "Easily compute percentage values, find what percent a number is of another, and calculate the percentage increase or decrease between two values.",
    keywords: ["percentage", "percent change", "percent off", "percentage calculator", "increase decrease"],
    inputs: {
      mode: { label: "Problem Type" },
      x: { label: "Value X" },
      y: { label: "Value Y" },
    },
    outputs: {
      result: { label: "Result" },
      absoluteDifference: { label: "Absolute Difference / Base Value" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "What is X% of Y?",
        x_is_what_pct_of_y: "X is what percent of Y?",
        pct_change: "Percentage change from X to Y",
      },
    },
    faq: [
      {
        q: "How do you calculate a percentage?",
        a: "To find X% of Y, multiply X by Y and then divide by 100. For example, 15% of 80 is (15 * 80) / 100 = 12.",
      },
      {
        q: "How do you find the percentage difference between two numbers?",
        a: "To find the percentage change from X to Y, subtract X from Y to get the difference, divide that difference by the original value X, and multiply by 100.",
      },
    ],
  },
  tr: {
    title: "Yüzde Hesaplama",
    short: "Tüm yaygın yüzde problemlerini tek bir araçta çözün.",
    description: "Yüzde değerlerini kolayca hesaplayın, bir sayının diğerinin yüzde kaçı olduğunu bulun ve iki değer arasındaki yüzde artış veya azalışı hesaplayın.",
    keywords: ["yüzde hesaplama", "yüzde değişimi", "yüzde kaçı", "artış azalış oranı", "yüzde formülü"],
    inputs: {
      mode: { label: "Problem Türü" },
      x: { label: "X Değeri" },
      y: { label: "Y Değeri" },
    },
    outputs: {
      result: { label: "Sonuç" },
      absoluteDifference: { label: "Mutlak Fark / Temel Değer" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "Y'nin yüzde X'i kaçtır?",
        x_is_what_pct_of_y: "X, Y'nin yüzde kaçıdır?",
        pct_change: "X'ten Y'ye yüzde değişim oranı",
      },
    },
    faq: [
      {
        q: "Yüzde nasıl hesaplanır?",
        a: "Bir Y sayısının %X'ini bulmak için X ile Y çarpılır ve 100'e bölünür. Örneğin, 80'in %15'i (15 * 80) / 100 = 12 şeklindedir.",
      },
      {
        q: "İki sayı arasındaki yüzde değişim nasıl bulunur?",
        a: "X'ten Y'ye yüzde değişimi bulmak için, Y'den X çıkarılarak fark bulunur, bu fark ilk değer olan X'e bölünür ve 100 ile çarpılır.",
      },
    ],
  },
  de: {
    title: "Prozentrechner",
    short: "Lösen Sie alle gängigen Prozentaufgaben in einem Tool.",
    description: "Berechnen Sie ganz einfach Prozentwerte, finden Sie heraus, wie viel Prozent eine Zahl von einer anderen ausmacht, und berechnen Sie die prozentuale Zu- oder Abnahme zwischen zwei Werten.",
    keywords: ["prozentrechner", "prozentuale änderung", "prozentwert", "prozentsatz", "prozentrechnung"],
    inputs: {
      mode: { label: "Problemtyp" },
      x: { label: "Wert X" },
      y: { label: "Wert Y" },
    },
    outputs: {
      result: { label: "Ergebnis" },
      absoluteDifference: { label: "Absolute Differenz / Basiswert" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "Was ist X% von Y?",
        x_is_what_pct_of_y: "Wie viel Prozent ist X von Y?",
        pct_change: "Prozentuale Änderung von X zu Y",
      },
    },
  },
  fr: {
    title: "Calculateur de Pourcentage",
    short: "Résolvez tous les problèmes de pourcentage courants en un seul outil.",
    description: "Calculez facilement des valeurs de pourcentage, déterminez quel pourcentage un nombre représente par rapport à un autre, et calculez la variation en pourcentage entre deux valeurs.",
    keywords: ["calculateur de pourcentage", "calcul pourcentage", "variation pourcentage", "pourcentage d'augmentation"],
    inputs: {
      mode: { label: "Type de Problème" },
      x: { label: "Valeur X" },
      y: { label: "Valeur Y" },
    },
    outputs: {
      result: { label: "Résultat" },
      absoluteDifference: { label: "Différence Absolue / Valeur de Base" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "Que vaut X% de Y ?",
        x_is_what_pct_of_y: "Quel pourcentage représente X de Y ?",
        pct_change: "Variation en pourcentage de X à Y",
      },
    },
  },
  es: {
    title: "Calculadora de Porcentajes",
    short: "Resuelva todos los problemas comunes de porcentaje en una sola herramienta.",
    description: "Calcule fácilmente valores porcentuales, determine qué porcentaje representa un número de otro y calcule el aumento o disminución porcentual entre dos valores.",
    keywords: ["calculadora de porcentaje", "calcular porcentaje", "diferencia porcentual", "porcentaje de incremento"],
    inputs: {
      mode: { label: "Tipo de Problema" },
      x: { label: "Valor X" },
      y: { label: "Valor Y" },
    },
    outputs: {
      result: { label: "Resultado" },
      absoluteDifference: { label: "Diferencia Absoluta / Valor Base" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "¿Cuánto es el X% de Y?",
        x_is_what_pct_of_y: "¿Qué porcentaje es X de Y?",
        pct_change: "Cambio porcentual de X a Y",
      },
    },
  },
  it: {
    title: "Calcolatore di Percentuale",
    short: "Risolvi tutti i problemi percentuali comuni in un solo strumento.",
    description: "Calcola facilmente i valori percentuali, trova quale percentuale rappresenta un numero rispetto a un altro e calcola la variazione percentuale tra due valori.",
    keywords: ["calcolatore percentuale", "calcolo percentuale", "differenza percentuale", "variazione percentuale"],
    inputs: {
      mode: { label: "Tipo di Problema" },
      x: { label: "Valore X" },
      y: { label: "Valore Y" },
    },
    outputs: {
      result: { label: "Risultato" },
      absoluteDifference: { label: "Differenza Assoluta / Valore Base" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "Quanto è il X% di Y?",
        x_is_what_pct_of_y: "Che percentuale è X rispetto a Y?",
        pct_change: "Variazione percentuale da X a Y",
      },
    },
  },
  ar: {
    title: "حاسبة النسب المئوية",
    short: "حل جميع مسائل النسبة المئوية الشائعة في أداة واحدة.",
    description: "احسب قيم النسبة المئوية بسهولة، واعرف النسبة المئوية لعدد مقارنة بآخر، واحسب النسبة المئوية للزيادة أو النقصان بين قيمتين.",
    keywords: ["حاسبة النسبة المئوية", "حساب النسبة المئوية", "الفرق المئوي", "التغير المئوي"],
    inputs: {
      mode: { label: "نوع المسألة" },
      x: { label: "القيمة X" },
      y: { label: "القيمة Y" },
    },
    outputs: {
      result: { label: "النتيجة" },
      absoluteDifference: { label: "الفرق المطلق / القيمة الأساسية" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "ما قيمة X% من Y؟",
        x_is_what_pct_of_y: "ما النسبة المئوية لـ X من Y؟",
        pct_change: "نسبة التغير من X إلى Y",
      },
    },
  },
  ru: {
    title: "Калькулятор Процентов",
    short: "Решайте все распространенные задачи с процентами в одном инструменте.",
    description: "Легко вычисляйте проценты, находите отношение чисел в процентах, а также рассчитывайте процентное увеличение или уменьшение между двумя величинами.",
    keywords: ["калькулятор процентов", "вычислить процент", "процентное изменение", "процент от числа"],
    inputs: {
      mode: { label: "Тип Задачи" },
      x: { label: "Значение X" },
      y: { label: "Значение Y" },
    },
    outputs: {
      result: { label: "Результат" },
      absoluteDifference: { label: "Абсолютная Разница / Базовое Значение" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "Сколько будет X% от Y?",
        x_is_what_pct_of_y: "Сколько процентов составляет X от Y?",
        pct_change: "Процентное изменение от X к Y",
      },
    },
  },
  zh: {
    title: "百分比计算器",
    short: "在一个工具中解决所有常见的百分比问题。",
    description: "轻松计算百分比值，找出非百分数之间的比例关系，以及计算两个数值之间的百分比增加或减少。",
    keywords: ["百分比计算器", "计算百分比", "百分比变化", "增减比例"],
    inputs: {
      mode: { label: "问题类型" },
      x: { label: "数值 X" },
      y: { label: "数值 Y" },
    },
    outputs: {
      result: { label: "结果" },
      absoluteDifference: { label: "绝对差值 / 基准值" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "Y 的 X% 是多少？",
        x_is_what_pct_of_y: "X 是 Y 的百分之几？",
        pct_change: "从 X 到 Y 的百分比变化",
      },
    },
  },
  ja: {
    title: "電卓 - パーセント計算",
    short: "一般的なパーセント問題をすべて1つのツールで解決します。",
    description: "パーセント値を簡単に計算し、ある数値が別の数値の何パーセントであるかを求め、2つの数値の間の増減率を計算します。",
    keywords: ["パーセント計算", "割合計算", "増減率", "パーセンテージ", "電卓"],
    inputs: {
      mode: { label: "問題タイプ" },
      x: { label: "値 X" },
      y: { label: "値 Y" },
    },
    outputs: {
      result: { label: "結果" },
      absoluteDifference: { label: "絶対差 / 基準値" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "Y の X% は何ですか？",
        x_is_what_pct_of_y: "X は Y の何パーセントですか？",
        pct_change: "X から Y へのパーセント変化率",
      },
    },
  },
  ko: {
    title: "백분율 계산기",
    short: "모든 일반적인 백분율 문제를 하나의 도구로 해결하세요.",
    description: "백분율 값을 쉽게 계산하고, 한 숫자가 다른 숫자의 몇 퍼센트인지 구하며, 두 값 사이의 백분율 증감을 계산합니다.",
    keywords: ["백분율 계산기", "퍼센트 계산", "증감률 계산", "퍼센트 공식"],
    inputs: {
      mode: { label: "문제 유형" },
      x: { label: "값 X" },
      y: { label: "값 Y" },
    },
    outputs: {
      result: { label: "결과" },
      absoluteDifference: { label: "절대 차이 / 기준 값" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "Y의 X%는 얼마인가요?",
        x_is_what_pct_of_y: "X는 Y의 몇 퍼센트인가요?",
        pct_change: "X에서 Y로의 백분율 변화",
      },
    },
  },
  hi: {
    title: "प्रतिशत कैलकुलेटर",
    short: "एक ही उपकरण में सभी सामान्य प्रतिशत समस्याओं को हल करें।",
    description: "प्रतिशत मानों की आसानी से गणना करें, यह पता लगाएं कि कोई संख्या किसी अन्य का कितना प्रतिशत है, और दो मानों के बीच प्रतिशत वृद्धि या कमी की गणना करें।",
    keywords: ["प्रतिशत कैलकुलेटर", "प्रतिशत निकालें", "प्रतिशत वृद्धि कमी", "प्रतिशत दर"],
    inputs: {
      mode: { label: "समस्या का प्रकार" },
      x: { label: "मान X" },
      y: { label: "मान Y" },
    },
    outputs: {
      result: { label: "परिणाम" },
      absoluteDifference: { label: "पूर्ण अंतर / आधार मूल्य" },
    },
    options: {
      mode: {
        what_is_x_pct_of_y: "Y का X% कितना है?",
        x_is_what_pct_of_y: "X, Y का कितना प्रतिशत है?",
        pct_change: "X से Y में प्रतिशत परिवर्तन",
      },
    },
  },
};

export default i18n;
