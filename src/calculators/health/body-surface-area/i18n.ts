import type { CalculatorI18n } from "@/types/i18n";

const io = (w: string, h: string, m: string, d: string, hk: string) => ({
  inputs: { weight: { label: w }, height: { label: h } },
  outputs: { mosteller: { label: m }, duBois: { label: d }, haycock: { label: hk } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Body Surface Area (BSA) Calculator", short: "Estimate body surface area in m² from weight and height.",
    description: "Free body surface area (BSA) calculator. Enter weight and height to estimate BSA in square metres using the Mosteller, Du Bois and Haycock formulas — commonly used for medication dosing and physiology.",
    keywords: ["body surface area calculator", "bsa calculator", "mosteller formula", "du bois formula", "bsa m2"],
    ...io("Weight", "Height", "BSA (Mosteller)", "BSA (Du Bois)", "BSA (Haycock)"),
    faq: [
      { q: "What is body surface area used for?", a: "BSA is used in medicine to scale drug doses (especially chemotherapy), cardiac index and metabolic rates, since it tracks metabolic mass better than weight alone." },
      { q: "Which formula should I use?", a: "Mosteller is the simplest and most common in clinical practice. Du Bois and Haycock are classic alternatives; results usually agree within a few percent." },
    ],
  },
  nl: {
    title: "Body Surface Area (BSA) Calculator", short: "Estimate body surface area in m² from weight and hoogte.",
    description: "Gratis body surface area (BSA) calculator. Enter weight and hoogte to estimate BSA in square metres using the Mosteller, Du Bois and Haycock formulas — commonly used for medication dosing and physiology.",
    keywords: ["body surface area calculator", "bsa calculator", "mosteller formula", "du bois formula", "bsa m2"],
    ...io("Weight", "Hoogte", "BSA (Mosteller)", "BSA (Du Bois)", "BSA (Haycock)"),
    faq: [
      { q: "What is body surface area used for?", a: "BSA is used in medicine to scale drug doses (especially chemotherapy), cardiac index and metabolic rates, since it tracks metabolic mass better than weight alone." },
      { q: "Which formula should I use?", a: "Mosteller is the simplest and most common in clinical practice. Du Bois and Haycock are classic alternatives; results usually agree within a few percent." },
    ],
  },

  pl: {
    title: "Body Surface Area (BSA) Kalkulator", short: "Estimate body surface area in m² from weight and wysokość.",
    description: "Darmowy body surface area (BSA) kalkulator. Enter weight and wysokość to estimate BSA in square metres using the Mosteller, Du Bois and Haycock formulas — commonly used for medication dosing and physiology.",
    keywords: ["body surface area kalkulator", "bsa kalkulator", "mosteller formula", "du bois formula", "bsa m2"],
    ...io("Weight", "Wysokość", "BSA (Mosteller)", "BSA (Du Bois)", "BSA (Haycock)"),
    faq: [
      { q: "What is body surface area used for?", a: "BSA is used in medicine to scale drug doses (especially chemotherapy), cardiac index and metabolic rates, since it tracks metabolic mass better than weight alone." },
      { q: "Which formula should I use?", a: "Mosteller is the simplest and most common in clinical practice. Du Bois and Haycock are classic alternatives; results usually agree within a few percent." },
    ],
  },
  pt: {
    title: "Calculadora de Área de Superfície Corporal (ASC)", short: "Calcule a sua área de superfície corporal — útil em dosagens médicas.",
    description: "Calculadora gratuita de ASC. Calcule a área de superfície corporal pelas fórmulas Mosteller, DuBois e Haycock — utilizada em quimioterapia e dosagem pediátrica.",
    keywords: ["ASC", "área superfície corporal", "BSA", "Mosteller", "DuBois"],
    ...io("Weight", "Height", "BSA (Mosteller)", "BSA (Du Bois)", "BSA (Haycock)"),
    faq: [
      { q: "What is body surface area used for?", a: "BSA is used in medicine to scale drug doses (especially chemotherapy), cardiac index and metabolic rates, since it tracks metabolic mass better than weight alone." },
      { q: "Which formula should I use?", a: "Mosteller is the simplest and most common in clinical practice. Du Bois and Haycock are classic alternatives; results usually agree within a few percent." },
    ],
  },
  id: {
    title: "Kalkulator Luas Permukaan Tubuh (LPT)", short: "Hitung luas permukaan tubuh Anda — berguna untuk dosis medis.",
    description: "Kalkulator LPT (BSA) gratis. Hitung luas permukaan tubuh dengan rumus Mosteller, DuBois, dan Haycock — digunakan untuk kemoterapi dan dosis pediatrik.",
    keywords: ["LPT", "luas permukaan tubuh", "BSA", "Mosteller", "DuBois"],
    ...io("Weight", "Height", "BSA (Mosteller)", "BSA (Du Bois)", "BSA (Haycock)"),
    faq: [
      { q: "What is body surface area used for?", a: "BSA is used in medicine to scale drug doses (especially chemotherapy), cardiac index and metabolic rates, since it tracks metabolic mass better than weight alone." },
      { q: "Which formula should I use?", a: "Mosteller is the simplest and most common in clinical practice. Du Bois and Haycock are classic alternatives; results usually agree within a few percent." },
    ],
  },

  tr: {
    title: "Vücut Yüzey Alanı (BSA) Hesaplayıcı", short: "Kilo ve boydan vücut yüzey alanını m² olarak tahmin edin.",
    description: "Ücretsiz vücut yüzey alanı (BSA) hesaplayıcı. Kilo ve boy girerek Mosteller, Du Bois ve Haycock formülleriyle BSA'yı metrekare olarak tahmin edin — ilaç dozajı ve fizyolojide yaygın kullanılır.",
    keywords: ["vücut yüzey alanı hesaplama", "bsa hesaplama", "mosteller formülü", "du bois formülü", "bsa m2"],
    ...io("Kilo", "Boy", "BSA (Mosteller)", "BSA (Du Bois)", "BSA (Haycock)"),
    faq: [
      { q: "Vücut yüzey alanı ne için kullanılır?", a: "BSA tıpta ilaç dozlarını (özellikle kemoterapi), kardiyak indeksi ve metabolik hızları ölçeklemek için kullanılır; çünkü metabolik kütleyi tek başına kilodan daha iyi yansıtır." },
      { q: "Hangi formülü kullanmalıyım?", a: "Mosteller en basit ve klinikte en yaygın olanıdır. Du Bois ve Haycock klasik alternatiflerdir; sonuçlar genellikle birkaç yüzde içinde uyuşur." },
    ],
  },
  de: { title: "Körperoberfläche (KOF) Rechner", short: "Schätzen Sie die Körperoberfläche in m² aus Gewicht und Größe.", description: "Kostenloser Körperoberflächen-Rechner (KOF). Geben Sie Gewicht und Größe ein, um die KOF in Quadratmetern mit den Formeln von Mosteller, Du Bois und Haycock zu schätzen.", keywords: ["körperoberfläche rechner", "kof rechner", "mosteller formel", "du bois formel", "bsa m2"], ...io("Gewicht", "Größe", "KOF (Mosteller)", "KOF (Du Bois)", "KOF (Haycock)") },
  fr: { title: "Calculateur de Surface Corporelle (SC)", short: "Estimez la surface corporelle en m² à partir du poids et de la taille.", description: "Calculateur de surface corporelle (SC) gratuit. Saisissez poids et taille pour estimer la SC en mètres carrés avec les formules de Mosteller, Du Bois et Haycock.", keywords: ["calculateur surface corporelle", "sc calculateur", "formule mosteller", "formule du bois", "bsa m2"], ...io("Poids", "Taille", "SC (Mosteller)", "SC (Du Bois)", "SC (Haycock)") },
  es: { title: "Calculadora de Superficie Corporal (SC)", short: "Estima la superficie corporal en m² a partir del peso y la altura.", description: "Calculadora de superficie corporal (SC) gratuita. Introduce peso y altura para estimar la SC en metros cuadrados con las fórmulas de Mosteller, Du Bois y Haycock.", keywords: ["calculadora superficie corporal", "sc calculadora", "fórmula mosteller", "fórmula du bois", "bsa m2"], ...io("Peso", "Altura", "SC (Mosteller)", "SC (Du Bois)", "SC (Haycock)") },
  it: { title: "Calcolatore Superficie Corporea (SC)", short: "Stima la superficie corporea in m² da peso e altezza.", description: "Calcolatore di superficie corporea (SC) gratuito. Inserisci peso e altezza per stimare la SC in metri quadrati con le formule di Mosteller, Du Bois e Haycock.", keywords: ["calcolatore superficie corporea", "sc calcolatore", "formula mosteller", "formula du bois", "bsa m2"], ...io("Peso", "Altezza", "SC (Mosteller)", "SC (Du Bois)", "SC (Haycock)") },
  ar: { title: "حاسبة مساحة سطح الجسم (BSA)", short: "قدّر مساحة سطح الجسم بالمتر المربع من الوزن والطول.", description: "حاسبة مساحة سطح الجسم (BSA) مجانية. أدخل الوزن والطول لتقدير المساحة بالمتر المربع باستخدام صيغ Mosteller و Du Bois و Haycock — تُستخدم لجرعات الأدوية والفسيولوجيا.", keywords: ["حاسبة مساحة سطح الجسم", "bsa", "صيغة mosteller", "صيغة du bois", "bsa m2"], ...io("الوزن", "الطول", "BSA (Mosteller)", "BSA (Du Bois)", "BSA (Haycock)") },
  ru: { title: "Калькулятор Площади Поверхности Тела (ППТ)", short: "Оцените площадь поверхности тела в м² по весу и росту.", description: "Бесплатный калькулятор площади поверхности тела (ППТ). Введите вес и рост, чтобы оценить ППТ в квадратных метрах по формулам Мостеллера, Дюбуа и Хейкока.", keywords: ["калькулятор площади поверхности тела", "ппт", "формула мостеллера", "формула дюбуа", "bsa m2"], ...io("Вес", "Рост", "ППТ (Мостеллер)", "ППТ (Дюбуа)", "ППТ (Хейкок)") },
  zh: { title: "体表面积 (BSA) 计算器", short: "根据体重和身高估算体表面积（m²）。", description: "免费的体表面积 (BSA) 计算器。输入体重和身高，使用 Mosteller、Du Bois 和 Haycock 公式估算以平方米为单位的体表面积——常用于药物剂量和生理学。", keywords: ["体表面积计算器", "bsa计算器", "mosteller公式", "du bois公式", "bsa m2"], ...io("体重", "身高", "BSA (Mosteller)", "BSA (Du Bois)", "BSA (Haycock)") },
  ja: { title: "体表面積 (BSA) 計算機", short: "体重と身長から体表面積を m² で推定します。", description: "無料の体表面積 (BSA) 計算機。体重と身長を入力すると、Mosteller・Du Bois・Haycock の式で体表面積を平方メートルで推定します。薬剤投与量や生理学に用いられます。", keywords: ["体表面積 計算機", "bsa 計算機", "mosteller 式", "du bois 式", "bsa m2"], ...io("体重", "身長", "BSA (Mosteller)", "BSA (Du Bois)", "BSA (Haycock)") },
  ko: { title: "체표면적 (BSA) 계산기", short: "체중과 키로부터 체표면적을 m²로 추정합니다.", description: "무료 체표면적 (BSA) 계산기. 체중과 키를 입력하면 Mosteller, Du Bois, Haycock 공식으로 체표면적을 제곱미터로 추정합니다. 약물 용량과 생리학에 사용됩니다.", keywords: ["체표면적 계산기", "bsa 계산기", "mosteller 공식", "du bois 공식", "bsa m2"], ...io("체중", "키", "BSA (Mosteller)", "BSA (Du Bois)", "BSA (Haycock)") },
  hi: { title: "शरीर सतह क्षेत्र (BSA) कैलकुलेटर", short: "वज़न और ऊंचाई से शरीर सतह क्षेत्र m² में अनुमानित करें।", description: "मुफ्त शरीर सतह क्षेत्र (BSA) कैलकुलेटर। वज़न और ऊंचाई दर्ज करें और Mosteller, Du Bois व Haycock सूत्रों से BSA वर्ग मीटर में अनुमानित करें — दवा खुराक और शरीरक्रिया में उपयोगी।", keywords: ["शरीर सतह क्षेत्र कैलकुलेटर", "bsa कैलकुलेटर", "mosteller सूत्र", "du bois सूत्र", "bsa m2"], ...io("वज़न", "ऊंचाई", "BSA (Mosteller)", "BSA (Du Bois)", "BSA (Haycock)") },
};

export default i18n;
