import type { CalculatorI18n } from "@/types/i18n";

const io = (w: string, r: string, avg: string, ep: string, br: string, w90: string, w80: string) => ({
  inputs: { weight: { label: w }, reps: { label: r } },
  outputs: { average: { label: avg }, epley: { label: ep }, brzycki: { label: br }, weightAt90: { label: w90 }, weightAt80: { label: w80 } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "One-Rep Max Calculator", short: "Estimate your 1RM from a weight and reps, with training-load percentages.",
    description: "Free one-rep max (1RM) calculator. Enter the weight you lifted and for how many reps to estimate your one-rep maximum using the Epley and Brzycki formulas, plus suggested loads at 90% and 80% for training.",
    keywords: ["one rep max calculator", "1rm calculator", "max lift estimate", "epley formula", "brzycki formula", "strength calculator"],
    ...io("Weight lifted", "Repetitions", "Estimated 1RM (avg)", "Epley 1RM", "Brzycki 1RM", "90% load", "80% load"),
    faq: [
      { q: "How is one-rep max estimated?", a: "From a sub-maximal set: Epley gives 1RM = weight × (1 + reps/30); Brzycki gives weight × 36/(37 − reps). We show both and their average." },
      { q: "How accurate is it?", a: "Most accurate for sets of 1–5 reps. Above ~10 reps, fatigue and form make estimates diverge and overstate your true max." },
      { q: "What are the 90% and 80% loads for?", a: "They're common training intensities — useful for planning strength (≈90%) and hypertrophy (≈80%) work off your estimated max." },
    ],
  },
  pt: {
    title: "Calculadora de 1RM (Uma Repetição Máxima)", short: "Estime a sua repetição máxima (1RM) em exercícios de força.",
    description: "Calculadora gratuita de 1RM. Estime a sua uma repetição máxima a partir do peso levantado e número de repetições.",
    keywords: ["1RM", "repetição máxima", "força máxima", "levantamento peso", "musculação"],
    ...io("Weight lifted", "Repetitions", "Estimated 1RM (avg)", "Epley 1RM", "Brzycki 1RM", "90% load", "80% load"),
    faq: [
      { q: "How is one-rep max estimated?", a: "From a sub-maximal set: Epley gives 1RM = weight × (1 + reps/30); Brzycki gives weight × 36/(37 − reps). We show both and their average." },
      { q: "How accurate is it?", a: "Most accurate for sets of 1–5 reps. Above ~10 reps, fatigue and form make estimates diverge and overstate your true max." },
      { q: "What are the 90% and 80% loads for?", a: "They're common training intensities — useful for planning strength (≈90%) and hypertrophy (≈80%) work off your estimated max." },
    ],
  },
  id: {
    title: "Kalkulator 1RM", short: "Estimasi 1 repetisi maksimum (1RM) Anda dalam latihan beban.",
    description: "Kalkulator 1RM gratis. Estimasi one rep max berdasarkan beban yang diangkat dan jumlah repetisi.",
    keywords: ["1RM", "one rep max", "kekuatan maksimum", "angkat beban", "gym"],
    ...io("Weight lifted", "Repetitions", "Estimated 1RM (avg)", "Epley 1RM", "Brzycki 1RM", "90% load", "80% load"),
    faq: [
      { q: "How is one-rep max estimated?", a: "From a sub-maximal set: Epley gives 1RM = weight × (1 + reps/30); Brzycki gives weight × 36/(37 − reps). We show both and their average." },
      { q: "How accurate is it?", a: "Most accurate for sets of 1–5 reps. Above ~10 reps, fatigue and form make estimates diverge and overstate your true max." },
      { q: "What are the 90% and 80% loads for?", a: "They're common training intensities — useful for planning strength (≈90%) and hypertrophy (≈80%) work off your estimated max." },
    ],
  },

  tr: {
    title: "Tek Tekrar Maksimum (1RM) Hesaplayıcı", short: "Ağırlık ve tekrardan 1RM'nizi, antrenman yüzdeleriyle tahmin edin.",
    description: "Ücretsiz tek tekrar maksimum (1RM) hesaplayıcı. Kaldırdığınız ağırlığı ve tekrar sayısını girerek Epley ve Brzycki formülleriyle 1RM'nizi, ayrıca antrenman için %90 ve %80 önerilen yükleri tahmin edin.",
    keywords: ["tek tekrar maksimum hesaplama", "1rm hesaplama", "maksimum kaldırış", "epley formülü", "brzycki formülü", "kuvvet hesaplama"],
    ...io("Kaldırılan ağırlık", "Tekrar sayısı", "Tahmini 1RM (ort.)", "Epley 1RM", "Brzycki 1RM", "%90 yük", "%80 yük"),
    faq: [
      { q: "Tek tekrar maksimum nasıl tahmin edilir?", a: "Maksimum altı bir setten: Epley 1RM = ağırlık × (1 + tekrar/30); Brzycki ağırlık × 36/(37 − tekrar) verir. İkisini ve ortalamasını gösteririz." },
      { q: "Ne kadar doğru?", a: "1–5 tekrarlı setlerde en doğru. ~10 tekrarın üzerinde yorgunluk ve form, tahminleri saptırır ve gerçek maksimumu abartır." },
      { q: "%90 ve %80 yükler ne işe yarar?", a: "Yaygın antrenman yoğunluklarıdır — tahmini maksimumunuza göre kuvvet (≈%90) ve hipertrofi (≈%80) çalışması planlamak için kullanışlı." },
    ],
  },
  de: { title: "One-Rep-Max-Rechner", short: "Schätzen Sie Ihr 1RM aus Gewicht und Wiederholungen, mit Trainingslasten.", description: "Kostenloser One-Rep-Max-Rechner (1RM). Geben Sie das gehobene Gewicht und die Wiederholungen ein, um Ihr 1RM mit den Epley- und Brzycki-Formeln zu schätzen, plus 90%- und 80%-Lasten fürs Training.", keywords: ["one rep max rechner", "1rm rechner", "maximalkraft schätzen", "epley formel", "brzycki formel"], ...io("Gehobenes Gewicht", "Wiederholungen", "Geschätztes 1RM (Ø)", "Epley 1RM", "Brzycki 1RM", "90% Last", "80% Last") },
  fr: { title: "Calculateur de 1RM (Max sur 1 Rép.)", short: "Estimez votre 1RM à partir d'un poids et de répétitions, avec les charges d'entraînement.", description: "Calculateur de 1RM gratuit. Saisissez le poids soulevé et le nombre de répétitions pour estimer votre max sur une répétition avec les formules d'Epley et de Brzycki, plus les charges à 90% et 80%.", keywords: ["calculateur 1rm", "max une répétition", "estimation force max", "formule epley", "formule brzycki"], ...io("Poids soulevé", "Répétitions", "1RM estimé (moy.)", "1RM Epley", "1RM Brzycki", "Charge 90%", "Charge 80%") },
  es: { title: "Calculadora de 1RM (Máx. una Repetición)", short: "Estima tu 1RM a partir de un peso y repeticiones, con cargas de entrenamiento.", description: "Calculadora de 1RM gratuita. Introduce el peso levantado y las repeticiones para estimar tu máximo de una repetición con las fórmulas de Epley y Brzycki, además de las cargas al 90% y 80%.", keywords: ["calculadora 1rm", "máximo una repetición", "estimar fuerza máxima", "fórmula epley", "fórmula brzycki"], ...io("Peso levantado", "Repeticiones", "1RM estimado (prom.)", "1RM Epley", "1RM Brzycki", "Carga 90%", "Carga 80%") },
  it: { title: "Calcolatore 1RM (Massimale)", short: "Stima il tuo 1RM da peso e ripetizioni, con i carichi di allenamento.", description: "Calcolatore 1RM gratuito. Inserisci il peso sollevato e le ripetizioni per stimare il tuo massimale con le formule di Epley e Brzycki, oltre ai carichi al 90% e 80%.", keywords: ["calcolatore 1rm", "massimale", "stima forza massima", "formula epley", "formula brzycki"], ...io("Peso sollevato", "Ripetizioni", "1RM stimato (media)", "1RM Epley", "1RM Brzycki", "Carico 90%", "Carico 80%") },
  ar: { title: "حاسبة أقصى تكرار واحد (1RM)", short: "قدّر 1RM من وزن وعدد تكرارات، مع نسب أحمال التدريب.", description: "حاسبة أقصى تكرار واحد (1RM) مجانية. أدخل الوزن المرفوع وعدد التكرارات لتقدير أقصى تكرار واحد باستخدام صيغتي Epley و Brzycki، بالإضافة إلى أحمال 90% و80% للتدريب.", keywords: ["حاسبة 1rm", "أقصى تكرار واحد", "تقدير القوة القصوى", "صيغة epley", "صيغة brzycki"], ...io("الوزن المرفوع", "عدد التكرارات", "1RM المقدّر (متوسط)", "1RM Epley", "1RM Brzycki", "حمل 90%", "حمل 80%") },
  ru: { title: "Калькулятор Разового Максимума (1ПМ)", short: "Оцените 1ПМ по весу и повторам, с тренировочными нагрузками.", description: "Бесплатный калькулятор разового максимума (1ПМ). Введите поднятый вес и число повторов, чтобы оценить максимум на одно повторение по формулам Эпли и Бжицки, плюс нагрузки 90% и 80%.", keywords: ["калькулятор 1пм", "разовый максимум", "оценка макс силы", "формула эпли", "формула бжицки"], ...io("Поднятый вес", "Повторения", "Оценка 1ПМ (сред.)", "1ПМ Эпли", "1ПМ Бжицки", "Нагрузка 90%", "Нагрузка 80%") },
  zh: { title: "最大单次重量 (1RM) 计算器", short: "根据重量和次数估算 1RM，并给出训练负荷百分比。", description: "免费的最大单次重量 (1RM) 计算器。输入举起的重量和次数，使用 Epley 和 Brzycki 公式估算你的单次最大重量，并给出 90% 和 80% 的训练负荷。", keywords: ["1rm计算器", "最大单次重量", "最大力量估算", "epley公式", "brzycki公式"], ...io("举起的重量", "次数", "估算 1RM（均值）", "Epley 1RM", "Brzycki 1RM", "90% 负荷", "80% 负荷") },
  ja: { title: "1RM（最大挙上重量）計算機", short: "重量とレップ数から 1RM を推定し、トレーニング負荷の割合も表示。", description: "無料の 1RM（最大挙上重量）計算機。挙げた重量とレップ数を入力すると、Epley と Brzycki の公式で 1RM を推定し、トレーニング用に 90%・80% の負荷も示します。", keywords: ["1rm 計算機", "最大挙上重量", "最大筋力 推定", "epley 公式", "brzycki 公式"], ...io("挙げた重量", "レップ数", "推定 1RM（平均）", "Epley 1RM", "Brzycki 1RM", "90% 負荷", "80% 負荷") },
  ko: { title: "1RM(1회 최대 중량) 계산기", short: "무게와 반복 횟수로 1RM을 추정하고 훈련 부하 비율을 제공합니다.", description: "무료 1RM(1회 최대 중량) 계산기. 든 무게와 반복 횟수를 입력하면 Epley와 Brzycki 공식으로 1회 최대 중량을 추정하고, 훈련용 90% 및 80% 부하를 제공합니다.", keywords: ["1rm 계산기", "1회 최대 중량", "최대 근력 추정", "epley 공식", "brzycki 공식"], ...io("든 무게", "반복 횟수", "추정 1RM(평균)", "Epley 1RM", "Brzycki 1RM", "90% 부하", "80% 부하") },
  hi: { title: "वन-रेप मैक्स (1RM) कैलकुलेटर", short: "वज़न और रेप्स से अपना 1RM अनुमानित करें, प्रशिक्षण भार प्रतिशत के साथ।", description: "मुफ्त वन-रेप मैक्स (1RM) कैलकुलेटर। उठाया गया वज़न और कितने रेप्स दर्ज करें और Epley तथा Brzycki सूत्रों से अपना एक-रेप अधिकतम अनुमानित करें, साथ ही प्रशिक्षण के लिए 90% और 80% भार।", keywords: ["1rm कैलकुलेटर", "वन रेप मैक्स", "अधिकतम लिफ्ट अनुमान", "epley सूत्र", "brzycki सूत्र"], ...io("उठाया वज़न", "रेप्स", "अनुमानित 1RM (औसत)", "Epley 1RM", "Brzycki 1RM", "90% भार", "80% भार") },
};

export default i18n;
