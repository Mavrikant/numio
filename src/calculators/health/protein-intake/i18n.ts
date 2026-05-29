import type { CalculatorI18n } from "@/types/i18n";

const io = (w: string, a: string, pg: string, pl: string, ph: string, pm: string, sed: string, act: string, ath: string) => ({
  inputs: { weight: { label: w }, activity: { label: a } },
  outputs: { proteinGrams: { label: pg }, proteinLow: { label: pl }, proteinHigh: { label: ph }, perMeal: { label: pm } },
  options: { activity: { sedentary: sed, active: act, athlete: ath } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Protein Intake Calculator", short: "Estimate your daily protein target from body weight and activity.",
    description: "Free protein intake calculator. Enter your weight and activity level to get a recommended daily protein target in grams, the healthy range, and a per-meal figure based on grams of protein per kilogram of body weight.",
    keywords: ["protein intake calculator", "daily protein", "how much protein", "protein per day", "grams of protein"],
    ...io("Body weight", "Activity level", "Daily protein", "Range (low)", "Range (high)", "Per meal (×4)", "Sedentary (0.8–1.0 g/kg)", "Active (1.2–1.6 g/kg)", "Athlete (1.6–2.2 g/kg)"),
    faq: [
      { q: "How much protein do I need per day?", a: "It depends on activity: roughly 0.8–1.0 g/kg for sedentary adults, 1.2–1.6 g/kg if active, and 1.6–2.2 g/kg for athletes or those building muscle. This tool shows the range for your weight." },
      { q: "Should I split protein across meals?", a: "Spreading intake across ~3–4 meals (about 20–40 g each) supports muscle protein synthesis better than one large serving. The 'per meal' output assumes four meals." },
    ],
  },
  pt: {
    title: "Calculadora de Ingestão de Proteína", short: "Calcule a sua ingestão diária recomendada de proteína.",
    description: "Calculadora gratuita de proteína. Calcule a quantidade diária recomendada com base no seu peso, atividade e objetivo.",
    keywords: ["proteína", "ingestão proteína", "gramas proteína", "musculação proteína", "dieta proteína"],
    ...io("Body weight", "Activity level", "Daily protein", "Range (low)", "Range (high)", "Per meal (×4)", "Sedentary (0.8–1.0 g/kg)", "Active (1.2–1.6 g/kg)", "Athlete (1.6–2.2 g/kg)"),
    faq: [
      { q: "How much protein do I need per day?", a: "It depends on activity: roughly 0.8–1.0 g/kg for sedentary adults, 1.2–1.6 g/kg if active, and 1.6–2.2 g/kg for athletes or those building muscle. This tool shows the range for your weight." },
      { q: "Should I split protein across meals?", a: "Spreading intake across ~3–4 meals (about 20–40 g each) supports muscle protein synthesis better than one large serving. The 'per meal' output assumes four meals." },
    ],
  },
  id: {
    title: "Kalkulator Asupan Protein", short: "Hitung asupan protein harian yang direkomendasikan.",
    description: "Kalkulator protein gratis. Hitung jumlah protein harian yang direkomendasikan berdasarkan berat badan, aktivitas, dan tujuan.",
    keywords: ["protein", "asupan protein", "gram protein", "protein gym", "diet protein"],
    ...io("Body weight", "Activity level", "Daily protein", "Range (low)", "Range (high)", "Per meal (×4)", "Sedentary (0.8–1.0 g/kg)", "Active (1.2–1.6 g/kg)", "Athlete (1.6–2.2 g/kg)"),
    faq: [
      { q: "How much protein do I need per day?", a: "It depends on activity: roughly 0.8–1.0 g/kg for sedentary adults, 1.2–1.6 g/kg if active, and 1.6–2.2 g/kg for athletes or those building muscle. This tool shows the range for your weight." },
      { q: "Should I split protein across meals?", a: "Spreading intake across ~3–4 meals (about 20–40 g each) supports muscle protein synthesis better than one large serving. The 'per meal' output assumes four meals." },
    ],
  },

  tr: {
    title: "Protein İhtiyacı Hesaplayıcı", short: "Vücut ağırlığı ve aktiviteden günlük protein hedefinizi tahmin edin.",
    description: "Ücretsiz protein ihtiyacı hesaplayıcı. Kilonuzu ve aktivite düzeyinizi girerek gram cinsinden önerilen günlük protein hedefini, sağlıklı aralığı ve kilogram başına protein gramına göre öğün başına miktarı öğrenin.",
    keywords: ["protein ihtiyacı hesaplama", "günlük protein", "ne kadar protein", "günlük protein gramı", "protein hesaplama"],
    ...io("Vücut ağırlığı", "Aktivite düzeyi", "Günlük protein", "Aralık (alt)", "Aralık (üst)", "Öğün başına (×4)", "Hareketsiz (0,8–1,0 g/kg)", "Aktif (1,2–1,6 g/kg)", "Sporcu (1,6–2,2 g/kg)"),
    faq: [
      { q: "Günde ne kadar protein gerekir?", a: "Aktiviteye bağlıdır: hareketsiz yetişkinler için yaklaşık 0,8–1,0 g/kg, aktifseniz 1,2–1,6 g/kg ve sporcular ya da kas yapanlar için 1,6–2,2 g/kg. Bu araç kilonuza göre aralığı gösterir." },
      { q: "Proteini öğünlere bölmeli miyim?", a: "Alımı yaklaşık 3–4 öğüne yaymak (her biri 20–40 g), tek büyük porsiyona göre kas protein sentezini daha iyi destekler. 'Öğün başına' çıktısı dört öğün varsayar." },
    ],
  },
  de: { title: "Proteinbedarf-Rechner", short: "Schätzen Sie Ihren täglichen Proteinbedarf aus Gewicht und Aktivität.", description: "Kostenloser Proteinbedarf-Rechner. Geben Sie Gewicht und Aktivitätsniveau ein, um den empfohlenen täglichen Proteinbedarf in Gramm, den gesunden Bereich und eine Menge pro Mahlzeit zu erhalten.", keywords: ["proteinbedarf rechner", "täglicher proteinbedarf", "wie viel protein", "protein pro tag", "gramm protein"], ...io("Körpergewicht", "Aktivitätsniveau", "Täglicher Proteinbedarf", "Bereich (unten)", "Bereich (oben)", "Pro Mahlzeit (×4)", "Sitzend (0,8–1,0 g/kg)", "Aktiv (1,2–1,6 g/kg)", "Sportler (1,6–2,2 g/kg)") },
  fr: { title: "Calculateur d'Apport en Protéines", short: "Estimez votre objectif quotidien de protéines selon le poids et l'activité.", description: "Calculateur d'apport en protéines gratuit. Saisissez votre poids et votre niveau d'activité pour obtenir l'apport quotidien recommandé en grammes, la fourchette saine et une quantité par repas.", keywords: ["calculateur protéines", "protéines par jour", "combien de protéines", "apport protéique", "grammes de protéines"], ...io("Poids corporel", "Niveau d'activité", "Protéines par jour", "Fourchette (bas)", "Fourchette (haut)", "Par repas (×4)", "Sédentaire (0,8–1,0 g/kg)", "Actif (1,2–1,6 g/kg)", "Athlète (1,6–2,2 g/kg)") },
  es: { title: "Calculadora de Ingesta de Proteínas", short: "Estima tu objetivo diario de proteínas según el peso y la actividad.", description: "Calculadora de ingesta de proteínas gratuita. Introduce tu peso y nivel de actividad para obtener el objetivo diario recomendado en gramos, el rango saludable y una cantidad por comida.", keywords: ["calculadora de proteínas", "proteína diaria", "cuánta proteína", "proteína por día", "gramos de proteína"], ...io("Peso corporal", "Nivel de actividad", "Proteína diaria", "Rango (bajo)", "Rango (alto)", "Por comida (×4)", "Sedentario (0,8–1,0 g/kg)", "Activo (1,2–1,6 g/kg)", "Atleta (1,6–2,2 g/kg)") },
  it: { title: "Calcolatore di Apporto Proteico", short: "Stima il tuo obiettivo proteico giornaliero in base a peso e attività.", description: "Calcolatore di apporto proteico gratuito. Inserisci peso e livello di attività per ottenere l'obiettivo proteico giornaliero in grammi, l'intervallo salutare e una quantità per pasto.", keywords: ["calcolatore proteine", "proteine al giorno", "quante proteine", "apporto proteico", "grammi di proteine"], ...io("Peso corporeo", "Livello di attività", "Proteine al giorno", "Intervallo (basso)", "Intervallo (alto)", "Per pasto (×4)", "Sedentario (0,8–1,0 g/kg)", "Attivo (1,2–1,6 g/kg)", "Atleta (1,6–2,2 g/kg)") },
  ar: { title: "حاسبة كمية البروتين", short: "قدّر هدف البروتين اليومي من وزن الجسم ومستوى النشاط.", description: "حاسبة كمية بروتين مجانية. أدخل وزنك ومستوى نشاطك للحصول على هدف البروتين اليومي الموصى به بالجرام، والنطاق الصحي، وكمية لكل وجبة بناءً على جرامات البروتين لكل كيلوغرام.", keywords: ["حاسبة البروتين", "البروتين اليومي", "كم بروتين", "البروتين في اليوم", "جرامات البروتين"], ...io("وزن الجسم", "مستوى النشاط", "البروتين اليومي", "النطاق (أدنى)", "النطاق (أعلى)", "لكل وجبة (×4)", "خامل (0.8–1.0 غ/كغ)", "نشط (1.2–1.6 غ/كغ)", "رياضي (1.6–2.2 غ/كغ)") },
  ru: { title: "Калькулятор Потребления Белка", short: "Оцените суточную норму белка по весу и активности.", description: "Бесплатный калькулятор потребления белка. Введите вес и уровень активности, чтобы получить рекомендуемую суточную норму белка в граммах, здоровый диапазон и количество на приём пищи.", keywords: ["калькулятор белка", "белок в день", "сколько белка", "норма белка", "граммы белка"], ...io("Масса тела", "Уровень активности", "Белок в день", "Диапазон (мин.)", "Диапазон (макс.)", "На приём (×4)", "Малоподвижный (0,8–1,0 г/кг)", "Активный (1,2–1,6 г/кг)", "Спортсмен (1,6–2,2 г/кг)") },
  zh: { title: "蛋白质摄入量计算器", short: "根据体重和活动水平估算每日蛋白质目标。", description: "免费的蛋白质摄入量计算器。输入体重和活动水平，根据每公斤体重的蛋白质克数得出推荐的每日蛋白质目标（克）、健康范围以及每餐摄入量。", keywords: ["蛋白质计算器", "每日蛋白质", "需要多少蛋白质", "每天蛋白质", "蛋白质克数"], ...io("体重", "活动水平", "每日蛋白质", "范围（低）", "范围（高）", "每餐（×4）", "久坐 (0.8–1.0 g/kg)", "活跃 (1.2–1.6 g/kg)", "运动员 (1.6–2.2 g/kg)") },
  ja: { title: "タンパク質摂取量計算機", short: "体重と活動レベルから1日のタンパク質目標を推定します。", description: "無料のタンパク質摂取量計算機。体重と活動レベルを入力すると、体重1kgあたりのタンパク質量に基づき、推奨される1日のタンパク質目標（g）、健康的な範囲、1食あたりの量が得られます。", keywords: ["タンパク質 計算機", "1日のタンパク質", "タンパク質 必要量", "1日 タンパク質", "タンパク質 グラム"], ...io("体重", "活動レベル", "1日のタンパク質", "範囲（下限）", "範囲（上限）", "1食あたり（×4）", "座位中心 (0.8–1.0 g/kg)", "活動的 (1.2–1.6 g/kg)", "アスリート (1.6–2.2 g/kg)") },
  ko: { title: "단백질 섭취량 계산기", short: "체중과 활동 수준으로 하루 단백질 목표를 추정합니다.", description: "무료 단백질 섭취량 계산기. 체중과 활동 수준을 입력하면 체중 1kg당 단백질 그램을 기준으로 권장 하루 단백질 목표(g), 건강 범위, 끼니당 양을 얻을 수 있습니다.", keywords: ["단백질 계산기", "하루 단백질", "단백질 얼마나", "하루 단백질 섭취", "단백질 그램"], ...io("체중", "활동 수준", "하루 단백질", "범위(하한)", "범위(상한)", "끼니당(×4)", "좌식 (0.8–1.0 g/kg)", "활동적 (1.2–1.6 g/kg)", "운동선수 (1.6–2.2 g/kg)") },
  hi: { title: "प्रोटीन सेवन कैलकुलेटर", short: "शरीर के वज़न और गतिविधि से अपना दैनिक प्रोटीन लक्ष्य अनुमानित करें।", description: "मुफ्त प्रोटीन सेवन कैलकुलेटर। अपना वज़न और गतिविधि स्तर दर्ज करें और प्रति किलोग्राम वज़न पर प्रोटीन ग्राम के आधार पर अनुशंसित दैनिक प्रोटीन लक्ष्य (ग्राम), स्वस्थ श्रेणी और प्रति भोजन मात्रा पाएं।", keywords: ["प्रोटीन कैलकुलेटर", "दैनिक प्रोटीन", "कितना प्रोटीन", "प्रति दिन प्रोटीन", "प्रोटीन ग्राम"], ...io("शरीर का वज़न", "गतिविधि स्तर", "दैनिक प्रोटीन", "श्रेणी (निम्न)", "श्रेणी (उच्च)", "प्रति भोजन (×4)", "गतिहीन (0.8–1.0 g/kg)", "सक्रिय (1.2–1.6 g/kg)", "एथलीट (1.6–2.2 g/kg)") },
};

export default i18n;
