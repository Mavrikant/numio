import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Length Converter",
    short: "Convert between metric and imperial length units instantly",
    description: "Convert between metric and imperial length units with high precision",
    keywords: ["length", "distance", "meter", "kilometer", "foot", "mile", "conversion"],
    inputs: {
      value: { label: "Value", help: "The length value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
    errors: { invalidLength: "Length must be a positive number." },
    faq: [
      {
        question: "How many centimeters are in a meter?",
        answer: "There are 100 centimeters in 1 meter. This is the basic metric conversion.",
      },
      {
        question: "How do I convert feet to meters?",
        answer: "Multiply the number of feet by 0.3048 to get meters. For example, 10 feet × 0.3048 = 3.048 meters.",
      },
      {
        question: "What is a nautical mile?",
        answer: "A nautical mile is approximately 1,852 meters. It is commonly used in aviation and maritime navigation.",
      },
      {
        question: "How many kilometers are in a mile?",
        answer: "1 mile equals approximately 1.609 kilometers. Conversely, 1 kilometer equals about 0.621 miles.",
      },
    ],
  },
  pt: {
    title: "Length Converter",
    short: "Convert between metric and imperial length units instantly",
    description: "Convert between metric and imperial length units with high precision",
    keywords: ["length", "distance", "meter", "kilometer", "foot", "mile", "conversion"],
    inputs: {
      value: { label: "Value", help: "The length value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
    errors: { invalidLength: "Length must be a positive number." },
    faq: [
      {
        question: "How many centimeters are in a meter?",
        answer: "There are 100 centimeters in 1 meter. This is the basic metric conversion.",
      },
      {
        question: "How do I convert feet to meters?",
        answer: "Multiply the number of feet by 0.3048 to get meters. For example, 10 feet × 0.3048 = 3.048 meters.",
      },
      {
        question: "What is a nautical mile?",
        answer: "A nautical mile is approximately 1,852 meters. It is commonly used in aviation and maritime navigation.",
      },
      {
        question: "How many kilometers are in a mile?",
        answer: "1 mile equals approximately 1.609 kilometers. Conversely, 1 kilometer equals about 0.621 miles.",
      },
    ],
  },
  id: {
    title: "Length Converter",
    short: "Convert between metric and imperial length units instantly",
    description: "Convert between metric and imperial length units with high precision",
    keywords: ["length", "distance", "meter", "kilometer", "foot", "mile", "conversion"],
    inputs: {
      value: { label: "Value", help: "The length value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
    errors: { invalidLength: "Length must be a positive number." },
    faq: [
      {
        question: "How many centimeters are in a meter?",
        answer: "There are 100 centimeters in 1 meter. This is the basic metric conversion.",
      },
      {
        question: "How do I convert feet to meters?",
        answer: "Multiply the number of feet by 0.3048 to get meters. For example, 10 feet × 0.3048 = 3.048 meters.",
      },
      {
        question: "What is a nautical mile?",
        answer: "A nautical mile is approximately 1,852 meters. It is commonly used in aviation and maritime navigation.",
      },
      {
        question: "How many kilometers are in a mile?",
        answer: "1 mile equals approximately 1.609 kilometers. Conversely, 1 kilometer equals about 0.621 miles.",
      },
    ],
  },

  tr: {
    title: "Uzunluk Dönüştürücü",
    short: "Metrik ve imparatorluk uzunluk birimleri arasında anında dönüşüm",
    description: "Metrik ve imparatorluk uzunluk birimlerinde yüksek kesinlikle dönüşüm",
    keywords: ["uzunluk", "mesafe", "metre", "kilometre", "feet", "mil", "dönüşüm"],
    inputs: {
      value: { label: "Değer", help: "Dönüştürülecek uzunluk değeri" },
      fromUnit: { label: "Kaynak Birim", help: "Kaynak birimi seçin" },
      toUnit: { label: "Hedef Birim", help: "Hedef birimi seçin" },
    },
    outputs: {
      result: { label: "Sonuç", help: "Dönüştürülen değer" },
    },
    errors: { invalidLength: "Uzunluk pozitif bir sayı olmalıdır." },
    faq: [
      {
        question: "Bir metrede kaç santimetre vardır?",
        answer: "1 metrede 100 santimetre vardır. Bu temel metrik dönüşümdür.",
      },
      {
        question: "Feet'i metreye nasıl dönüştürürüm?",
        answer: "Feet sayısını 0.3048 ile çarpın. Örneğin, 10 feet × 0.3048 = 3.048 metre.",
      },
      {
        question: "Deniz mili nedir?",
        answer: "Deniz mili yaklaşık 1.852 metredir. Havacılık ve denizcilik navigasyonunda kullanılır.",
      },
      {
        question: "Bir milde kaç kilometre vardır?",
        answer: "1 mil yaklaşık 1.609 kilometreye eşittir. 1 kilometre yaklaşık 0.621 mildir.",
      },
    ],
  },
  de: {
    title: "Längenumrechner",
    short: "Sofortige Umrechnung zwischen metrischen und imperialen Längeneinheiten",
    description: "Umrechnung zwischen metrischen und imperialen Längeneinheiten mit hoher Genauigkeit",
    keywords: ["länge", "entfernung", "meter", "kilometer", "fuß", "meile", "umrechnung"],
    inputs: {
      value: { label: "Wert", help: "Der umzuwandelnde Längenwert" },
      fromUnit: { label: "Von Einheit", help: "Ausgangseinheit auswählen" },
      toUnit: { label: "Zu Einheit", help: "Zieleinheit auswählen" },
    },
    outputs: {
      result: { label: "Ergebnis", help: "Umgewandelter Wert" },
    },
    errors: { invalidLength: "Länge muss eine positive Zahl sein." },
    faq: [
      {
        question: "Wie viele Zentimeter sind in einem Meter?",
        answer: "Es gibt 100 Zentimeter in 1 Meter. Dies ist die grundlegende metrische Umrechnung.",
      },
      {
        question: "Wie konvertiere ich Fuß in Meter?",
        answer: "Multiplizieren Sie die Anzahl der Fuß mit 0.3048. Beispiel: 10 Fuß × 0.3048 = 3.048 Meter.",
      },
      {
        question: "Was ist eine Seemeile?",
        answer: "Eine Seemeile entspricht etwa 1.852 Metern. Sie wird häufig in der Luftfahrt verwendet.",
      },
      {
        question: "Wie viele Kilometer sind in einer Meile?",
        answer: "1 Meile entspricht etwa 1.609 Kilometern. 1 Kilometer entspricht etwa 0.621 Meilen.",
      },
    ],
  },
  fr: {
    title: "Convertisseur de longueur",
    short: "Conversion instantanée entre les unités de longueur métriques et impériales",
    description: "Conversion entre les unités de longueur métriques et impériales avec haute précision",
    keywords: ["longueur", "distance", "mètre", "kilomètre", "pied", "mile", "conversion"],
    inputs: {
      value: { label: "Valeur", help: "La valeur de longueur à convertir" },
      fromUnit: { label: "Unité de source", help: "Sélectionnez l'unité source" },
      toUnit: { label: "Unité cible", help: "Sélectionnez l'unité cible" },
    },
    outputs: {
      result: { label: "Résultat", help: "Valeur convertie" },
    },
    errors: { invalidLength: "La longueur doit être un nombre positif." },
    faq: [
      {
        question: "Combien de centimètres y a-t-il dans un mètre?",
        answer: "Il y a 100 centimètres dans 1 mètre. C'est la conversion métrique de base.",
      },
      {
        question: "Comment convertir les pieds en mètres?",
        answer: "Multipliez le nombre de pieds par 0.3048. Par exemple, 10 pieds × 0.3048 = 3.048 mètres.",
      },
      {
        question: "Qu'est-ce qu'un mille nautique?",
        answer: "Un mille nautique équivaut à environ 1.852 mètres. Il est utilisé en aviation et navigation maritime.",
      },
      {
        question: "Combien de kilomètres y a-t-il dans un mille?",
        answer: "1 mille équivaut à environ 1.609 kilomètres. 1 kilomètre équivaut à environ 0.621 mille.",
      },
    ],
  },
  es: {
    title: "Conversor de longitud",
    short: "Conversión instantánea entre unidades de longitud métricas e imperiales",
    description: "Conversión entre unidades de longitud métricas e imperiales con alta precisión",
    keywords: ["longitud", "distancia", "metro", "kilómetro", "pie", "milla", "conversión"],
    inputs: {
      value: { label: "Valor", help: "El valor de longitud a convertir" },
      fromUnit: { label: "Unidad de origen", help: "Seleccione unidad de origen" },
      toUnit: { label: "Unidad de destino", help: "Seleccione unidad de destino" },
    },
    outputs: {
      result: { label: "Resultado", help: "Valor convertido" },
    },
    errors: { invalidLength: "La longitud debe ser un número positivo." },
    faq: [
      {
        question: "¿Cuántos centímetros hay en un metro?",
        answer: "Hay 100 centímetros en 1 metro. Esta es la conversión métrica básica.",
      },
      {
        question: "¿Cómo convierto pies a metros?",
        answer: "Multiplique el número de pies por 0.3048. Por ejemplo, 10 pies × 0.3048 = 3.048 metros.",
      },
      {
        question: "¿Qué es una milla náutica?",
        answer: "Una milla náutica equivale a aproximadamente 1.852 metros. Se utiliza en aviación y navegación marítima.",
      },
      {
        question: "¿Cuántos kilómetros hay en una milla?",
        answer: "1 milla equivale a aproximadamente 1.609 kilómetros. 1 kilómetro equivale a aproximadamente 0.621 millas.",
      },
    ],
  },
  it: {
    title: "Convertitore di lunghezza",
    short: "Conversione istantanea tra unità di lunghezza metriche e imperiali",
    description: "Conversione tra unità di lunghezza metriche e imperiali con alta precisione",
    keywords: ["lunghezza", "distanza", "metro", "chilometro", "piede", "miglio", "conversione"],
    inputs: {
      value: { label: "Valore", help: "Il valore di lunghezza da convertire" },
      fromUnit: { label: "Unità di origine", help: "Selezionare unità di origine" },
      toUnit: { label: "Unità di destinazione", help: "Selezionare unità di destinazione" },
    },
    outputs: {
      result: { label: "Risultato", help: "Valore convertito" },
    },
    errors: { invalidLength: "La lunghezza deve essere un numero positivo." },
    faq: [
      {
        question: "Quanti centimetri ci sono in un metro?",
        answer: "Ci sono 100 centimetri in 1 metro. Questa è la conversione metrica di base.",
      },
      {
        question: "Come converto i piedi in metri?",
        answer: "Moltiplicare il numero di piedi per 0.3048. Ad esempio, 10 piedi × 0.3048 = 3.048 metri.",
      },
      {
        question: "Cos'è un miglio nautico?",
        answer: "Un miglio nautico equivale a circa 1.852 metri. È utilizzato in aviazione e navigazione marittima.",
      },
      {
        question: "Quanti chilometri ci sono in un miglio?",
        answer: "1 miglio equivale a circa 1.609 chilometri. 1 chilometro equivale a circa 0.621 miglia.",
      },
    ],
  },
  ar: {
    title: "محول الطول",
    short: "تحويل فوري بين وحدات الطول المترية والإمبراطورية",
    description: "تحويل بين وحدات الطول المترية والإمبراطورية بدقة عالية",
    keywords: ["طول", "مسافة", "متر", "كيلومتر", "قدم", "ميل", "تحويل"],
    inputs: {
      value: { label: "القيمة", help: "قيمة الطول المراد تحويلها" },
      fromUnit: { label: "من الوحدة", help: "اختر الوحدة المصدر" },
      toUnit: { label: "إلى الوحدة", help: "اختر الوحدة المستهدفة" },
    },
    outputs: {
      result: { label: "النتيجة", help: "القيمة المحولة" },
    },
    errors: { invalidLength: "الطول يجب أن يكون رقماً موجباً." },
    faq: [
      {
        question: "كم عدد السنتيمترات في المتر الواحد؟",
        answer: "هناك 100 سنتيمتر في 1 متر. هذا هو التحويل المتري الأساسي.",
      },
      {
        question: "كيف أحول الأقدام إلى أمتار؟",
        answer: "اضرب عدد الأقدام في 0.3048. على سبيل المثال، 10 أقدام × 0.3048 = 3.048 متر.",
      },
      {
        question: "ما هي الميل البحري؟",
        answer: "الميل البحري يساوي تقريباً 1.852 متر. يُستخدم في الملاحة الجوية والبحرية.",
      },
      {
        question: "كم عدد الكيلومترات في الميل الواحد؟",
        answer: "1 ميل يساوي تقريباً 1.609 كيلومترات. 1 كيلومتر يساوي تقريباً 0.621 ميل.",
      },
    ],
  },
  ru: {
    title: "Конвертер длины",
    short: "Мгновенное преобразование между метрическими и имперскими единицами длины",
    description: "Преобразование между метрическими и имперскими единицами длины с высокой точностью",
    keywords: ["длина", "расстояние", "метр", "километр", "фут", "миля", "преобразование"],
    inputs: {
      value: { label: "Значение", help: "Значение длины для преобразования" },
      fromUnit: { label: "От единицы", help: "Выберите исходную единицу" },
      toUnit: { label: "К единице", help: "Выберите целевую единицу" },
    },
    outputs: {
      result: { label: "Результат", help: "Преобразованное значение" },
    },
    errors: { invalidLength: "Длина должна быть положительным числом." },
    faq: [
      {
        question: "Сколько сантиметров в метре?",
        answer: "В 1 метре 100 сантиметров. Это основное метрическое преобразование.",
      },
      {
        question: "Как конвертировать футы в метры?",
        answer: "Умножьте количество футов на 0.3048. Например, 10 футов × 0.3048 = 3.048 метра.",
      },
      {
        question: "Что такое морская миля?",
        answer: "Морская миля составляет примерно 1.852 метра. Она используется в авиации и морской навигации.",
      },
      {
        question: "Сколько километров в миле?",
        answer: "1 миля равна примерно 1.609 километрам. 1 километр равен примерно 0.621 мили.",
      },
    ],
  },
  zh: {
    title: "长度转换器",
    short: "公制和英制长度单位之间的即时转换",
    description: "公制和英制长度单位之间的高精度转换",
    keywords: ["长度", "距离", "米", "公里", "英尺", "英里", "转换"],
    inputs: {
      value: { label: "数值", help: "要转换的长度值" },
      fromUnit: { label: "从单位", help: "选择源单位" },
      toUnit: { label: "到单位", help: "选择目标单位" },
    },
    outputs: {
      result: { label: "结果", help: "转换后的值" },
    },
    errors: { invalidLength: "长度必须是正数。" },
    faq: [
      {
        question: "一米有多少厘米?",
        answer: "1 米有 100 厘米。这是基本的公制转换。",
      },
      {
        question: "我如何将英尺转换为米?",
        answer: "将英尺数乘以 0.3048。例如，10 英尺 × 0.3048 = 3.048 米。",
      },
      {
        question: "什么是海里?",
        answer: "海里约等于 1,852 米。它用于航空和海上导航。",
      },
      {
        question: "一英里有多少公里?",
        answer: "1 英里约等于 1.609 公里。1 公里约等于 0.621 英里。",
      },
    ],
  },
  ja: {
    title: "長さコンバーター",
    short: "メートル法とヤード・ポンド法の長さの単位間の即座の変換",
    description: "メートル法とヤード・ポンド法の長さの単位間の高精度変換",
    keywords: ["長さ", "距離", "メートル", "キロメートル", "フィート", "マイル", "変換"],
    inputs: {
      value: { label: "値", help: "変換する長さの値" },
      fromUnit: { label: "から単位", help: "ソース単位を選択" },
      toUnit: { label: "へ単位", help: "ターゲット単位を選択" },
    },
    outputs: {
      result: { label: "結果", help: "変換された値" },
    },
    errors: { invalidLength: "長さは正の数である必要があります。" },
    faq: [
      {
        question: "1 メートルには何センチメートルありますか?",
        answer: "1 メートルは 100 センチメートルです。これは基本的なメートル法の変換です。",
      },
      {
        question: "フィートをメートルに変換するにはどうすればいいですか?",
        answer: "フィート数に 0.3048 を掛けます。例: 10 フィート × 0.3048 = 3.048 メートル。",
      },
      {
        question: "海里とは何ですか?",
        answer: "海里は約 1,852 メートルです。航空と海上ナビゲーションで使用されます。",
      },
      {
        question: "1 マイルに何キロメートルありますか?",
        answer: "1 マイルは約 1.609 キロメートルです。1 キロメートルは約 0.621 マイルです。",
      },
    ],
  },
  ko: {
    title: "길이 변환기",
    short: "미터법과 영국식 길이 단위 간 즉시 변환",
    description: "미터법과 영국식 길이 단위 간의 고정밀 변환",
    keywords: ["길이", "거리", "미터", "킬로미터", "피트", "마일", "변환"],
    inputs: {
      value: { label: "값", help: "변환할 길이 값" },
      fromUnit: { label: "단위에서", help: "소스 단위 선택" },
      toUnit: { label: "단위로", help: "대상 단위 선택" },
    },
    outputs: {
      result: { label: "결과", help: "변환된 값" },
    },
    errors: { invalidLength: "길이는 양수여야 합니다." },
    faq: [
      {
        question: "1 미터에는 몇 센티미터가 있습니까?",
        answer: "1 미터는 100 센티미터입니다. 이는 기본 미터법 변환입니다.",
      },
      {
        question: "피트를 미터로 변환하려면 어떻게 합니까?",
        answer: "피트 수에 0.3048을 곱합니다. 예: 10 피트 × 0.3048 = 3.048 미터.",
      },
      {
        question: "해리(해상마일)는 무엇입니까?",
        answer: "해리는 약 1,852 미터입니다. 항공 및 해상 항법에 사용됩니다.",
      },
      {
        question: "1 마일에는 몇 킬로미터가 있습니까?",
        answer: "1 마일은 약 1.609 킬로미터입니다. 1 킬로미터는 약 0.621 마일입니다.",
      },
    ],
  },
  hi: {
    title: "लंबाई परिवर्तक",
    short: "मीट्रिक और इंपीरियल लंबाई इकाइयों के बीच तत्काल रूपांतरण",
    description: "मीट्रिक और इंपीरियल लंबाई इकाइयों के बीच उच्च सटीकता रूपांतरण",
    keywords: ["लंबाई", "दूरी", "मीटर", "किलोमीटर", "फीट", "मील", "रूपांतरण"],
    inputs: {
      value: { label: "मान", help: "रूपांतरण के लिए लंबाई मान" },
      fromUnit: { label: "से इकाई", help: "स्रोत इकाई चुनें" },
      toUnit: { label: "को इकाई", help: "लक्ष्य इकाई चुनें" },
    },
    outputs: {
      result: { label: "परिणाम", help: "रूपांतरित मान" },
    },
    errors: { invalidLength: "लंबाई एक सकारात्मक संख्या होनी चाहिए।" },
    faq: [
      {
        question: "एक मीटर में कितने सेंटीमीटर होते हैं?",
        answer: "1 मीटर में 100 सेंटीमीटर होते हैं। यह बुनियादी मीट्रिक रूपांतरण है।",
      },
      {
        question: "मैं फीट को मीटर में कैसे बदलूं?",
        answer: "फीट की संख्या को 0.3048 से गुणा करें। उदाहरण: 10 फीट × 0.3048 = 3.048 मीटर।",
      },
      {
        question: "समुद्री मील क्या है?",
        answer: "समुद्री मील लगभग 1,852 मीटर के बराबर है। इसका उपयोग विमान और समुद्री नेविगेशन में होता है।",
      },
      {
        question: "एक मील में कितने किलोमीटर होते हैं?",
        answer: "1 मील लगभग 1.609 किलोमीटर के बराबर है। 1 किलोमीटर लगभग 0.621 मील के बराबर है।",
      },
    ],
  },
};

export default i18n;
