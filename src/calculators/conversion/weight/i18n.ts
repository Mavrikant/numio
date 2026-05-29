import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Weight/Mass Converter",
    short: "Convert between metric, imperial, and specialty weight units",
    description: "Convert between metric, imperial, and specialty weight units with precision",
    keywords: ["weight", "mass", "conversion", "kilogram", "pound", "ounce", "ton"],
    inputs: {
      value: { label: "Value", help: "The weight value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
    errors: { invalidWeight: "Weight must be a positive number." },
    faq: [
      {
        question: "What is the difference between weight and mass?",
        answer: "Mass is the amount of matter in an object, measured in kilograms. Weight is the force of gravity on that mass. For practical conversions, we use the terms interchangeably.",
      },
      {
        question: "How many grams are in a kilogram?",
        answer: "There are 1000 grams in 1 kilogram. This is the metric standard.",
      },
      {
        question: "What is a stone used for?",
        answer: "Stone is primarily used in the United Kingdom and Ireland for measuring body weight. 1 stone equals 14 pounds or approximately 6.35 kilograms.",
      },
      {
        question: "How do I convert pounds to kilograms?",
        answer: "Divide the weight in pounds by 2.20462. For example, 150 lbs ÷ 2.20462 = 68 kg.",
      },
    ],
  },
  pt: {
    title: "Weight/Mass Converter",
    short: "Convert between metric, imperial, and specialty weight units",
    description: "Convert between metric, imperial, and specialty weight units with precision",
    keywords: ["weight", "mass", "conversion", "kilogram", "pound", "ounce", "ton"],
    inputs: {
      value: { label: "Value", help: "The weight value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
    errors: { invalidWeight: "Weight must be a positive number." },
    faq: [
      {
        question: "What is the difference between weight and mass?",
        answer: "Mass is the amount of matter in an object, measured in kilograms. Weight is the force of gravity on that mass. For practical conversions, we use the terms interchangeably.",
      },
      {
        question: "How many grams are in a kilogram?",
        answer: "There are 1000 grams in 1 kilogram. This is the metric standard.",
      },
      {
        question: "What is a stone used for?",
        answer: "Stone is primarily used in the United Kingdom and Ireland for measuring body weight. 1 stone equals 14 pounds or approximately 6.35 kilograms.",
      },
      {
        question: "How do I convert pounds to kilograms?",
        answer: "Divide the weight in pounds by 2.20462. For example, 150 lbs ÷ 2.20462 = 68 kg.",
      },
    ],
  },
  id: {
    title: "Weight/Mass Converter",
    short: "Convert between metric, imperial, and specialty weight units",
    description: "Convert between metric, imperial, and specialty weight units with precision",
    keywords: ["weight", "mass", "conversion", "kilogram", "pound", "ounce", "ton"],
    inputs: {
      value: { label: "Value", help: "The weight value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
    errors: { invalidWeight: "Weight must be a positive number." },
    faq: [
      {
        question: "What is the difference between weight and mass?",
        answer: "Mass is the amount of matter in an object, measured in kilograms. Weight is the force of gravity on that mass. For practical conversions, we use the terms interchangeably.",
      },
      {
        question: "How many grams are in a kilogram?",
        answer: "There are 1000 grams in 1 kilogram. This is the metric standard.",
      },
      {
        question: "What is a stone used for?",
        answer: "Stone is primarily used in the United Kingdom and Ireland for measuring body weight. 1 stone equals 14 pounds or approximately 6.35 kilograms.",
      },
      {
        question: "How do I convert pounds to kilograms?",
        answer: "Divide the weight in pounds by 2.20462. For example, 150 lbs ÷ 2.20462 = 68 kg.",
      },
    ],
  },

  tr: {
    title: "Ağırlık/Kütle Dönüştürücü",
    short: "Metrik, İmparatorluk ve özel ağırlık birimler arasında dönüşüm",
    description: "Metrik, İmparatorluk ve özel ağırlık birimler arasında hassaslık dönüşüm",
    keywords: ["ağırlık", "kütle", "dönüşüm", "kilogram", "pound", "ons", "ton"],
    inputs: {
      value: { label: "Değer", help: "Dönüştürülecek ağırlık değeri" },
      fromUnit: { label: "Kaynak Birim", help: "Kaynak birimi seçin" },
      toUnit: { label: "Hedef Birim", help: "Hedef birimi seçin" },
    },
    outputs: {
      result: { label: "Sonuç", help: "Dönüştürülen değer" },
    },
    errors: { invalidWeight: "Ağırlık pozitif bir sayı olmalıdır." },
    faq: [
      {
        question: "Ağırlık ve kütle arasındaki fark nedir?",
        answer: "Kütle, bir nesnedeki madde miktarıdır. Ağırlık, bu kütlenin yerçekimine maruz kaldığı kuvvettir. Pratik dönüşümlerde terimler birbirinin yerine kullanılır.",
      },
      {
        question: "Bir kilogramda kaç gram vardır?",
        answer: "1 kilogramda 1000 gram vardır. Bu metrik standarttır.",
      },
      {
        question: "Taş ne için kullanılır?",
        answer: "Taş birimi özellikle İngiltere ve İrlanda'da vücut ağırlığını ölçmek için kullanılır. 1 taş = 14 pound veya yaklaşık 6.35 kilogram.",
      },
      {
        question: "Poundları kilogramlara nasıl dönüştürürüm?",
        answer: "Pound cinsinden ağırlığı 2.20462'ye bölün. Örneğin, 150 lb ÷ 2.20462 = 68 kg.",
      },
    ],
  },
  de: {
    title: "Gewicht-/Massenumrechner",
    short: "Umrechnung zwischen metrischen, imperialen und speziellen Gewichtseinheiten",
    description: "Umrechnung zwischen metrischen, imperialen und speziellen Gewichtseinheiten mit Präzision",
    keywords: ["gewicht", "masse", "umrechnung", "kilogramm", "pfund", "unze", "tonne"],
    inputs: {
      value: { label: "Wert", help: "Der umzuwandelnde Gewichtswert" },
      fromUnit: { label: "Von Einheit", help: "Ausgangseinheit auswählen" },
      toUnit: { label: "Zu Einheit", help: "Zieleinheit auswählen" },
    },
    outputs: {
      result: { label: "Ergebnis", help: "Umgewandelter Wert" },
    },
    errors: { invalidWeight: "Gewicht muss eine positive Zahl sein." },
    faq: [
      {
        question: "Was ist der Unterschied zwischen Gewicht und Masse?",
        answer: "Masse ist die Menge an Materie in einem Objekt. Gewicht ist die Gravitationskraft auf diese Masse. In der Praxis verwenden wir die Begriffe synonym.",
      },
      {
        question: "Wie viele Gramm sind in einem Kilogramm?",
        answer: "Es gibt 1000 Gramm in 1 Kilogramm. Das ist der metrische Standard.",
      },
      {
        question: "Wofür wird Stone verwendet?",
        answer: "Stone wird hauptsächlich im Vereinigten Königreich und Irland zum Messen von Körpergewicht verwendet. 1 Stone = 14 Pfund oder etwa 6.35 Kilogramm.",
      },
      {
        question: "Wie konvertiere ich Pfund in Kilogramm?",
        answer: "Dividieren Sie das Gewicht in Pfund durch 2.20462. Zum Beispiel: 150 lbs ÷ 2.20462 = 68 kg.",
      },
    ],
  },
  fr: {
    title: "Convertisseur de poids/masse",
    short: "Conversion entre les unités de poids métriques, impériales et spécialisées",
    description: "Conversion entre les unités de poids métriques, impériales et spécialisées avec précision",
    keywords: ["poids", "masse", "conversion", "kilogramme", "livre", "once", "tonne"],
    inputs: {
      value: { label: "Valeur", help: "La valeur de poids à convertir" },
      fromUnit: { label: "Unité de source", help: "Sélectionnez l'unité source" },
      toUnit: { label: "Unité cible", help: "Sélectionnez l'unité cible" },
    },
    outputs: {
      result: { label: "Résultat", help: "Valeur convertie" },
    },
    errors: { invalidWeight: "Le poids doit être un nombre positif." },
    faq: [
      {
        question: "Quelle est la différence entre le poids et la masse?",
        answer: "La masse est la quantité de matière dans un objet. Le poids est la force de la gravité sur cette masse. En pratique, nous utilisons les termes de façon interchangeable.",
      },
      {
        question: "Combien de grammes y a-t-il dans un kilogramme?",
        answer: "Il y a 1000 grammes dans 1 kilogramme. C'est la norme métrique.",
      },
      {
        question: "À quoi sert la stone?",
        answer: "La stone est principalement utilisée au Royaume-Uni et en Irlande pour mesurer le poids corporel. 1 stone = 14 livres ou environ 6.35 kilogrammes.",
      },
      {
        question: "Comment convertir les livres en kilogrammes?",
        answer: "Divisez le poids en livres par 2.20462. Par exemple: 150 lbs ÷ 2.20462 = 68 kg.",
      },
    ],
  },
  es: {
    title: "Conversor de peso/masa",
    short: "Conversión entre unidades de peso métricas, imperiales y especializadas",
    description: "Conversión entre unidades de peso métricas, imperiales y especializadas con precisión",
    keywords: ["peso", "masa", "conversión", "kilogramo", "libra", "onza", "tonelada"],
    inputs: {
      value: { label: "Valor", help: "El valor de peso a convertir" },
      fromUnit: { label: "Unidad de origen", help: "Seleccione unidad de origen" },
      toUnit: { label: "Unidad de destino", help: "Seleccione unidad de destino" },
    },
    outputs: {
      result: { label: "Resultado", help: "Valor convertido" },
    },
    errors: { invalidWeight: "El peso debe ser un número positivo." },
    faq: [
      {
        question: "¿Cuál es la diferencia entre peso y masa?",
        answer: "La masa es la cantidad de materia en un objeto. El peso es la fuerza de la gravedad en esa masa. En la práctica, usamos los términos de manera intercambiable.",
      },
      {
        question: "¿Cuántos gramos hay en un kilogramo?",
        answer: "Hay 1000 gramos en 1 kilogramo. Este es el estándar métrico.",
      },
      {
        question: "¿Para qué se usa la piedra?",
        answer: "La piedra se utiliza principalmente en el Reino Unido e Irlanda para medir el peso corporal. 1 piedra = 14 libras o aproximadamente 6.35 kilogramos.",
      },
      {
        question: "¿Cómo convierto libras a kilogramos?",
        answer: "Divide el peso en libras por 2.20462. Por ejemplo: 150 lbs ÷ 2.20462 = 68 kg.",
      },
    ],
  },
  it: {
    title: "Convertitore di peso/massa",
    short: "Conversione tra unità di peso metriche, imperiali e specializzate",
    description: "Conversione tra unità di peso metriche, imperiali e specializzate con precisione",
    keywords: ["peso", "massa", "conversione", "chilogrammo", "libbra", "oncia", "tonnellata"],
    inputs: {
      value: { label: "Valore", help: "Il valore di peso da convertire" },
      fromUnit: { label: "Unità di origine", help: "Selezionare unità di origine" },
      toUnit: { label: "Unità di destinazione", help: "Selezionare unità di destinazione" },
    },
    outputs: {
      result: { label: "Risultato", help: "Valore convertito" },
    },
    errors: { invalidWeight: "Il peso deve essere un numero positivo." },
    faq: [
      {
        question: "Qual è la differenza tra peso e massa?",
        answer: "La massa è la quantità di materia in un oggetto. Il peso è la forza di gravità su quella massa. In pratica, usiamo i termini in modo intercambiabile.",
      },
      {
        question: "Quanti grammi ci sono in un chilogrammo?",
        answer: "Ci sono 1000 grammi in 1 chilogrammo. Questo è lo standard metrico.",
      },
      {
        question: "A cosa serve la stone?",
        answer: "La stone è utilizzata principalmente nel Regno Unito e in Irlanda per misurare il peso corporeo. 1 stone = 14 libbre o circa 6.35 chilogrammi.",
      },
      {
        question: "Come converto le libbre in chilogrammi?",
        answer: "Dividi il peso in libbre per 2.20462. Ad esempio: 150 lbs ÷ 2.20462 = 68 kg.",
      },
    ],
  },
  ar: {
    title: "محول الوزن/الكتلة",
    short: "تحويل بين وحدات الوزن المترية والإمبراطورية والمتخصصة",
    description: "تحويل بين وحدات الوزن المترية والإمبراطورية والمتخصصة بدقة",
    keywords: ["وزن", "كتلة", "تحويل", "كيلوجرام", "رطل", "أونصة", "طن"],
    inputs: {
      value: { label: "القيمة", help: "قيمة الوزن المراد تحويلها" },
      fromUnit: { label: "من الوحدة", help: "اختر الوحدة المصدر" },
      toUnit: { label: "إلى الوحدة", help: "اختر الوحدة المستهدفة" },
    },
    outputs: {
      result: { label: "النتيجة", help: "القيمة المحولة" },
    },
    errors: { invalidWeight: "الوزن يجب أن يكون رقماً موجباً." },
    faq: [
      {
        question: "ما الفرق بين الوزن والكتلة?",
        answer: "الكتلة هي كمية المادة في الجسم. الوزن هو قوة الجاذبية على تلك الكتلة. في الممارسة العملية، نستخدم المصطلحات بالتبادل.",
      },
      {
        question: "كم عدد الجرام في الكيلوجرام الواحد؟",
        answer: "يوجد 1000 جرام في 1 كيلوجرام. هذا هو المعيار المتري.",
      },
      {
        question: "ما الغرض من وحدة Stone؟",
        answer: "تُستخدم وحدة Stone بشكل أساسي في المملكة المتحدة وأيرلندا لقياس وزن الجسم. 1 stone = 14 رطل أو حوالي 6.35 كيلوجرام.",
      },
      {
        question: "كيف أحول الأرطال إلى كيلوجرامات؟",
        answer: "اقسم الوزن بالأرطال على 2.20462. على سبيل المثال: 150 رطل ÷ 2.20462 = 68 كغ.",
      },
    ],
  },
  ru: {
    title: "Конвертер веса/массы",
    short: "Преобразование между метрическими, британскими и специализированными единицами веса",
    description: "Преобразование между метрическими, британскими и специализированными единицами веса с точностью",
    keywords: ["вес", "масса", "преобразование", "килограмм", "фунт", "унция", "тонна"],
    inputs: {
      value: { label: "Значение", help: "Значение веса для преобразования" },
      fromUnit: { label: "От единицы", help: "Выберите исходную единицу" },
      toUnit: { label: "К единице", help: "Выберите целевую единицу" },
    },
    outputs: {
      result: { label: "Результат", help: "Преобразованное значение" },
    },
    errors: { invalidWeight: "Вес должен быть положительным числом." },
    faq: [
      {
        question: "В чем разница между весом и массой?",
        answer: "Масса — это количество вещества в объекте. Вес — это сила тяжести, действующая на эту массу. На практике мы используем эти термины взаимозаменяемо.",
      },
      {
        question: "Сколько граммов в килограмме?",
        answer: "В 1 килограмме 1000 граммов. Это метрический стандарт.",
      },
      {
        question: "Для чего используется стоун?",
        answer: "Стоун в основном используется в Великобритании и Ирландии для измерения веса тела. 1 стоун = 14 фунтов или примерно 6.35 килограмма.",
      },
      {
        question: "Как конвертировать фунты в килограммы?",
        answer: "Разделите вес в фунтах на 2.20462. Например: 150 фунтов ÷ 2.20462 = 68 кг.",
      },
    ],
  },
  zh: {
    title: "重量/质量转换器",
    short: "在公制、英制和专用重量单位之间进行转换",
    description: "在公制、英制和专用重量单位之间进行精确转换",
    keywords: ["重量", "质量", "转换", "千克", "磅", "盎司", "吨"],
    inputs: {
      value: { label: "数值", help: "要转换的重量值" },
      fromUnit: { label: "从单位", help: "选择源单位" },
      toUnit: { label: "到单位", help: "选择目标单位" },
    },
    outputs: {
      result: { label: "结果", help: "转换后的值" },
    },
    errors: { invalidWeight: "重量必须是正数。" },
    faq: [
      {
        question: "重量和质量有什么区别?",
        answer: "质量是物体中物质的量。重量是重力对该质量的力。在实践中，我们可互换使用这两个术语。",
      },
      {
        question: "一公斤有多少克?",
        answer: "1 公斤 = 1000 克。这是公制标准。",
      },
      {
        question: "Stone(英石)有什么用途?",
        answer: "Stone 主要用于英国和爱尔兰测量体重。1 stone = 14 磅或约 6.35 公斤。",
      },
      {
        question: "如何将磅转换为公斤?",
        answer: "将磅数除以 2.20462。例如：150 lb ÷ 2.20462 = 68 kg。",
      },
    ],
  },
  ja: {
    title: "重量/質量変換ツール",
    short: "メートル法、帝国法、専門的な重量単位間の変換",
    description: "メートル法、帝国法、専門的な重量単位間の正確な変換",
    keywords: ["重量", "質量", "変換", "キログラム", "ポンド", "オンス", "トン"],
    inputs: {
      value: { label: "値", help: "変換する重量の値" },
      fromUnit: { label: "から単位", help: "ソース単位を選択" },
      toUnit: { label: "へ単位", help: "ターゲット単位を選択" },
    },
    outputs: {
      result: { label: "結果", help: "変換された値" },
    },
    errors: { invalidWeight: "重量は正の数である必要があります。" },
    faq: [
      {
        question: "重量と質量の違いは何ですか?",
        answer: "質量はオブジェクト内の物質の量です。重量はその質量に対する重力です。実際には、用語を相互に使用します。",
      },
      {
        question: "1キログラムに何グラムありますか?",
        answer: "1キログラムには1000グラムあります。これはメートル法の標準です。",
      },
      {
        question: "ストーンは何に使われますか?",
        answer: "ストーン(st)は主に英国とアイルランドで体重を測定するために使用されます。1 st = 14 ポンドまたは約 6.35 キログラム。",
      },
      {
        question: "ポンドをキログラムに変換するには?",
        answer: "ポンド単位の重量を2.20462で割ります。例：150 lbs ÷ 2.20462 = 68 kg。",
      },
    ],
  },
  ko: {
    title: "무게/질량 변환기",
    short: "미터법, 영국식 및 전문 무게 단위 간 변환",
    description: "미터법, 영국식 및 전문 무게 단위 간의 정확한 변환",
    keywords: ["무게", "질량", "변환", "킬로그램", "파운드", "온스", "톤"],
    inputs: {
      value: { label: "값", help: "변환할 무게 값" },
      fromUnit: { label: "단위에서", help: "소스 단위 선택" },
      toUnit: { label: "단위로", help: "대상 단위 선택" },
    },
    outputs: {
      result: { label: "결과", help: "변환된 값" },
    },
    errors: { invalidWeight: "무게는 양수여야 합니다." },
    faq: [
      {
        question: "무게와 질량의 차이는 무엇입니까?",
        answer: "질량은 물체의 물질 양입니다. 무게는 그 질량에 대한 중력입니다. 실제로는 용어를 교대로 사용하지만 기술적으로는 다릅니다.",
      },
      {
        question: "1킬로그램에 몇 그램이 있습니까?",
        answer: "1킬로그램에는 1000그램이 있습니다. 이것이 미터법 표준입니다.",
      },
      {
        question: "Stone(스톤)은 무엇에 사용됩니까?",
        answer: "스톤은 주로 영국과 아일랜드에서 체중을 측정하는 데 사용됩니다. 1 스톤 = 14파운드 또는 약 6.35킬로그램.",
      },
      {
        question: "파운드를 킬로그램으로 변환하려면?",
        answer: "파운드 단위 무게를 2.20462로 나누면 됩니다. 예: 150 lbs ÷ 2.20462 = 68 kg.",
      },
    ],
  },
  hi: {
    title: "वजन/द्रव्यमान परिवर्तक",
    short: "मीट्रिक, इम्पीरियल और विशेष वजन इकाइयों के बीच रूपांतरण",
    description: "मीट्रिक, इम्पीरियल और विशेष वजन इकाइयों के बीच सटीक रूपांतरण",
    keywords: ["वजन", "द्रव्यमान", "रूपांतरण", "किलोग्राम", "पाउंड", "औंस", "टन"],
    inputs: {
      value: { label: "मान", help: "रूपांतरण के लिए वजन मान" },
      fromUnit: { label: "से इकाई", help: "स्रोत इकाई चुनें" },
      toUnit: { label: "को इकाई", help: "लक्ष्य इकाई चुनें" },
    },
    outputs: {
      result: { label: "परिणाम", help: "रूपांतरित मान" },
    },
    errors: { invalidWeight: "वजन एक सकारात्मक संख्या होनी चाहिए।" },
    faq: [
      {
        question: "वजन और द्रव्यमान में क्या अंतर है?",
        answer: "द्रव्यमान किसी वस्तु में पदार्थ की मात्रा है। वजन वह गुरुत्वाकर्षण बल है जो उस द्रव्यमान पर कार्य करता है। व्यावहारिक रूप से हम शब्दों का परस्पर उपयोग करते हैं।",
      },
      {
        question: "एक किलोग्राम में कितने ग्राम होते हैं?",
        answer: "1 किलोग्राम में 1000 ग्राम होते हैं। यह मीट्रिक मानक है।",
      },
      {
        question: "स्टोन का उपयोग किसलिए किया जाता है?",
        answer: "स्टोन का उपयोग मुख्य रूप से यूनाइटेड किंगडम और आयरलैंड में शरीर के वजन को मापने के लिए किया जाता है। 1 स्टोन = 14 पाउंड या लगभग 6.35 किलोग्राम।",
      },
      {
        question: "मैं पाउंड को किलोग्राम में कैसे बदलूं?",
        answer: "पाउंड में वजन को 2.20462 से विभाजित करें। उदाहरण के लिए: 150 lbs ÷ 2.20462 = 68 kg।",
      },
    ],
  },
};

export default i18n;
