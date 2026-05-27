import type { CalculatorI18n } from "@/types/calculator";

const i18n: CalculatorI18n = {
  en: {
    name: "Weight/Mass Converter",
    description: "Convert between metric, imperial, and specialty weight units",
    keywords: ["weight", "mass", "conversion", "kilogram", "pound", "ounce", "ton"],
    faq: [
      {
        question: "What is the difference between weight and mass?",
        answer:
          "Mass is the amount of matter in an object, measured in kilograms. Weight is the force of gravity on that mass, measured in Newtons. For practical conversions, we use the terms interchangeably, but they are technically different.",
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
        answer: "Divide the weight in pounds by 2.20462. For example, 150 lbs ÷ 2.20462 = 68 kg. Alternatively, multiply pounds by 0.453592.",
      },
    ],
  },
  tr: {
    name: "Ağırlık/Kütle Dönüştürücü",
    description: "Metrik, İmparatorluk ve özel ağırlık birimler arasında dönüşüm",
    keywords: ["ağırlık", "kütle", "dönüşüm", "kilogram", "pound", "ons", "ton"],
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
    name: "Gewicht-/Massenumrechner",
    description: "Umrechnung zwischen metrischen, imperialen und speziellen Gewichtseinheiten",
    keywords: ["gewicht", "masse", "umrechnung", "kilogramm", "pfund", "unze", "tonne"],
    faq: [
      {
        question: "Was ist der Unterschied zwischen Gewicht und Masse?",
        answer: "Masse ist die Menge an Materie in einem Objekt. Gewicht ist die Gravitationskraft auf diese Masse. In der Praxis verwenden wir die Begriffe synonym, aber sie sind technisch unterschiedlich.",
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
        answer: "Dividieren Sie das Gewicht in Pfund durch 2,20462. Zum Beispiel: 150 lbs ÷ 2,20462 = 68 kg.",
      },
    ],
  },
  fr: {
    name: "Convertisseur de poids/masse",
    description: "Conversion entre les unités de poids métriques, impériales et spécialisées",
    keywords: ["poids", "masse", "conversion", "kilogramme", "livre", "once", "tonne"],
    faq: [
      {
        question: "Quelle est la différence entre le poids et la masse?",
        answer: "La masse est la quantité de matière dans un objet. Le poids est la force de la gravité sur cette masse. En pratique, nous utilisons les termes de façon interchangeable, mais ils sont techniquement différents.",
      },
      {
        question: "Combien de grammes y a-t-il dans un kilogramme?",
        answer: "Il y a 1000 grammes dans 1 kilogramme. C'est la norme métrique.",
      },
      {
        question: "À quoi sert la stone?",
        answer: "La stone est principalement utilisée au Royaume-Uni et en Irlande pour mesurer le poids corporel. 1 stone = 14 livres ou environ 6,35 kilogrammes.",
      },
      {
        question: "Comment convertir les livres en kilogrammes?",
        answer: "Divisez le poids en livres par 2,20462. Par exemple: 150 lbs ÷ 2,20462 = 68 kg.",
      },
    ],
  },
  es: {
    name: "Conversor de peso/masa",
    description: "Conversión entre unidades de peso métricas, imperiales y especializadas",
    keywords: ["peso", "masa", "conversión", "kilogramo", "libra", "onza", "tonelada"],
    faq: [
      {
        question: "¿Cuál es la diferencia entre peso y masa?",
        answer: "La masa es la cantidad de materia en un objeto. El peso es la fuerza de la gravedad en esa masa. En la práctica, usamos los términos de manera intercambiable, pero técnicamente son diferentes.",
      },
      {
        question: "¿Cuántos gramos hay en un kilogramo?",
        answer: "Hay 1000 gramos en 1 kilogramo. Este es el estándar métrico.",
      },
      {
        question: "¿Para qué se usa la piedra?",
        answer: "La piedra se utiliza principalmente en el Reino Unido e Irlanda para medir el peso corporal. 1 piedra = 14 libras o aproximadamente 6,35 kilogramos.",
      },
      {
        question: "¿Cómo convierto libras a kilogramos?",
        answer: "Divide el peso en libras por 2,20462. Por ejemplo: 150 lbs ÷ 2,20462 = 68 kg.",
      },
    ],
  },
  it: {
    name: "Convertitore di peso/massa",
    description: "Conversione tra unità di peso metriche, imperiali e specializzate",
    keywords: ["peso", "massa", "conversione", "chilogrammo", "libbra", "oncia", "tonnellata"],
    faq: [
      {
        question: "Qual è la differenza tra peso e massa?",
        answer: "La massa è la quantità di materia in un oggetto. Il peso è la forza di gravità su quella massa. In pratica, usiamo i termini in modo intercambiabile, ma sono tecnicamente diversi.",
      },
      {
        question: "Quanti grammi ci sono in un chilogrammo?",
        answer: "Ci sono 1000 grammi in 1 chilogrammo. Questo è lo standard metrico.",
      },
      {
        question: "A cosa serve la stone?",
        answer: "La stone è utilizzata principalmente nel Regno Unito e in Irlanda per misurare il peso corporeo. 1 stone = 14 libbre o circa 6,35 chilogrammi.",
      },
      {
        question: "Come converto le libbre in chilogrammi?",
        answer: "Dividi il peso in libbre per 2,20462. Ad esempio: 150 lbs ÷ 2,20462 = 68 kg.",
      },
    ],
  },
  ar: {
    name: "محول الوزن/الكتلة",
    description: "تحويل بين وحدات الوزن المترية والإمبراطورية والمتخصصة",
    keywords: ["وزن", "كتلة", "تحويل", "كيلوجرام", "رطل", "أونصة", "طن"],
    faq: [
      {
        question: "ما الفرق بين الوزن والكتلة?",
        answer: "الكتلة هي كمية المادة في الجسم. الوزن هو قوة الجاذبية على تلك الكتلة. في الممارسة العملية، نستخدم المصطلحات بالتبادل، لكنهما مختلفان من الناحية الفنية.",
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
    name: "Конвертер веса/массы",
    description: "Преобразование между метрическими, британскими и специализированными единицами веса",
    keywords: ["вес", "масса", "преобразование", "килограмм", "фунт", "унция", "тонна"],
    faq: [
      {
        question: "В чем разница между весом и массой?",
        answer: "Масса — это количество вещества в объекте. Вес — это сила тяжести, действующая на эту массу. На практике мы используем эти термины взаимозаменяемо, но они технически различны.",
      },
      {
        question: "Сколько граммов в килограмме?",
        answer: "В 1 килограмме 1000 граммов. Это метрический стандарт.",
      },
      {
        question: "Для чего используется стоун?",
        answer: "Стоун в основном используется в Великобритании и Ирландии для измерения веса тела. 1 стоун = 14 фунтов или примерно 6,35 килограмма.",
      },
      {
        question: "Как конвертировать фунты в килограммы?",
        answer: "Разделите вес в фунтах на 2,20462. Например: 150 фунтов ÷ 2,20462 = 68 кг.",
      },
    ],
  },
  zh: {
    name: "重量/质量转换器",
    description: "在公制、英制和专用重量单位之间进行转换",
    keywords: ["重量", "质量", "转换", "千克", "磅", "盎司", "吨"],
    faq: [
      {
        question: "重量和质量有什么区别?",
        answer: "质量是物体中物质的量。重量是重力对该质量的力。在实践中，我们可互换使用这两个术语，但它们在技术上是不同的。",
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
    name: "重量/質量変換ツール",
    description: "メートル法、帝国法、専門的な重量単位間の変換",
    keywords: ["重量", "質量", "変換", "キログラム", "ポンド", "オンス", "トン"],
    faq: [
      {
        question: "重量と質量の違いは何ですか?",
        answer: "質量はオブジェクト内の物質の量です。重量はその質量に対する重力です。実際には、用語を相互に使用しますが、技術的には異なります。",
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
    name: "무게/질량 변환기",
    description: "미터법, 영국식 및 전문 무게 단위 간 변환",
    keywords: ["무게", "질량", "변환", "킬로그램", "파운드", "온스", "톤"],
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
    name: "वजन/द्रव्यमान परिवर्तक",
    description: "मीट्रिक, इम्पीरियल और विशेष वजन इकाइयों के बीच रूपांतरण",
    keywords: ["वजन", "द्रव्यमान", "रूपांतरण", "किलोग्राम", "पाउंड", "औंस", "टन"],
    faq: [
      {
        question: "वजन और द्रव्यमान में क्या अंतर है?",
        answer: "द्रव्यमान किसी वस्तु में पदार्थ की मात्रा है। वजन वह गुरुत्वाकर्षण बल है जो उस द्रव्यमान पर कार्य करता है। व्यावहारिक रूप से हम शब्दों का परस्पर उपयोग करते हैं, लेकिन तकनीकी रूप से वे भिन्न हैं।",
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
