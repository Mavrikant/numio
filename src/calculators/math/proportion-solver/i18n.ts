import type { CalculatorI18n } from "@/types/i18n";

const io = (x: string, r: string, cp: string) => ({
  inputs: { a: { label: "a" }, b: { label: "b" }, c: { label: "c" } },
  outputs: { x: { label: x }, ratio: { label: r }, crossProduct: { label: cp } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Proportion Solver", short: "Solve a/b = c/x for the unknown value x by cross-multiplication.",
    description: "Free proportion solver. Enter three values of the proportion a/b = c/x and get the missing value x by cross-multiplication (x = b·c/a), plus the ratio a/b and the cross product.",
    keywords: ["proportion solver", "cross multiplication calculator", "solve for x", "ratio proportion", "find missing value"],
    ...io("x (solved)", "Ratio a/b", "Cross product b·c"),
    faq: [
      { q: "How do I solve a proportion?", a: "For a/b = c/x, cross-multiply to get a·x = b·c, then x = b·c/a. For 2/3 = 8/x, x = 3·8/2 = 12." },
      { q: "What can this be used for?", a: "Scaling recipes, converting units, map distances, similar triangles — anywhere two ratios are equal and one term is unknown." },
    ],
  },
  pt: {
    title: "Proportion Solver", short: "Solve a/b = c/x for the unknown value x by cross-multiplication.",
    description: "Free proportion solver. Enter three values of the proportion a/b = c/x and get the missing value x by cross-multiplication (x = b·c/a), plus the ratio a/b and the cross product.",
    keywords: ["proportion solver", "cross multiplication calculator", "solve for x", "ratio proportion", "find missing value"],
    ...io("x (solved)", "Ratio a/b", "Cross product b·c"),
    faq: [
      { q: "How do I solve a proportion?", a: "For a/b = c/x, cross-multiply to get a·x = b·c, then x = b·c/a. For 2/3 = 8/x, x = 3·8/2 = 12." },
      { q: "What can this be used for?", a: "Scaling recipes, converting units, map distances, similar triangles — anywhere two ratios are equal and one term is unknown." },
    ],
  },
  id: {
    title: "Proportion Solver", short: "Solve a/b = c/x for the unknown value x by cross-multiplication.",
    description: "Free proportion solver. Enter three values of the proportion a/b = c/x and get the missing value x by cross-multiplication (x = b·c/a), plus the ratio a/b and the cross product.",
    keywords: ["proportion solver", "cross multiplication calculator", "solve for x", "ratio proportion", "find missing value"],
    ...io("x (solved)", "Ratio a/b", "Cross product b·c"),
    faq: [
      { q: "How do I solve a proportion?", a: "For a/b = c/x, cross-multiply to get a·x = b·c, then x = b·c/a. For 2/3 = 8/x, x = 3·8/2 = 12." },
      { q: "What can this be used for?", a: "Scaling recipes, converting units, map distances, similar triangles — anywhere two ratios are equal and one term is unknown." },
    ],
  },

  tr: {
    title: "Orantı Çözücü", short: "a/b = c/x orantısında bilinmeyen x'i çapraz çarpımla çözün.",
    description: "Ücretsiz orantı çözücü. a/b = c/x orantısının üç değerini girerek eksik değer x'i çapraz çarpımla (x = b·c/a), ayrıca a/b oranını ve çapraz çarpımı bulun.",
    keywords: ["orantı çözücü", "çapraz çarpım hesaplama", "x'i çöz", "oran orantı", "eksik değeri bul"],
    ...io("x (çözüm)", "Oran a/b", "Çapraz çarpım b·c"),
    faq: [
      { q: "Orantı nasıl çözülür?", a: "a/b = c/x için çapraz çarparak a·x = b·c, sonra x = b·c/a elde edilir. 2/3 = 8/x için x = 3·8/2 = 12." },
      { q: "Ne için kullanılır?", a: "Tarif ölçeklemek, birim çevirmek, harita mesafeleri, benzer üçgenler — iki oranın eşit ve bir terimin bilinmediği her yerde." },
    ],
  },
  de: { title: "Verhältnis-Löser", short: "Lösen Sie a/b = c/x nach dem unbekannten x durch Kreuzmultiplikation.", description: "Kostenloser Verhältnis-Löser. Geben Sie drei Werte des Verhältnisses a/b = c/x ein, um das fehlende x per Kreuzmultiplikation (x = b·c/a) sowie das Verhältnis a/b und das Kreuzprodukt zu erhalten.", keywords: ["verhältnis löser", "kreuzmultiplikation rechner", "nach x lösen", "verhältnis proportion", "fehlenden wert finden"], ...io("x (gelöst)", "Verhältnis a/b", "Kreuzprodukt b·c") },
  fr: { title: "Résolveur de Proportion", short: "Résolvez a/b = c/x pour l'inconnue x par produit en croix.", description: "Résolveur de proportion gratuit. Saisissez trois valeurs de la proportion a/b = c/x pour obtenir la valeur manquante x par produit en croix (x = b·c/a), ainsi que le rapport a/b et le produit en croix.", keywords: ["résolveur de proportion", "produit en croix", "résoudre x", "ratio proportion", "valeur manquante"], ...io("x (résolu)", "Rapport a/b", "Produit en croix b·c") },
  es: { title: "Resolvedor de Proporciones", short: "Resuelve a/b = c/x para la incógnita x por producto cruzado.", description: "Resolvedor de proporciones gratuito. Introduce tres valores de la proporción a/b = c/x para obtener el valor faltante x por producto cruzado (x = b·c/a), además de la razón a/b y el producto cruzado.", keywords: ["resolvedor de proporciones", "producto cruzado", "resolver x", "razón proporción", "valor faltante"], ...io("x (resuelto)", "Razón a/b", "Producto cruzado b·c") },
  it: { title: "Risolutore di Proporzioni", short: "Risolvi a/b = c/x per l'incognita x con il prodotto incrociato.", description: "Risolutore di proporzioni gratuito. Inserisci tre valori della proporzione a/b = c/x per ottenere il valore mancante x con il prodotto incrociato (x = b·c/a), oltre al rapporto a/b e al prodotto incrociato.", keywords: ["risolutore proporzioni", "prodotto incrociato", "risolvere x", "rapporto proporzione", "valore mancante"], ...io("x (risolto)", "Rapporto a/b", "Prodotto incrociato b·c") },
  ar: { title: "حلّال التناسب", short: "حل التناسب a/b = c/x لإيجاد المجهول x بالضرب التبادلي.", description: "حلّال تناسب مجاني. أدخل ثلاث قيم من التناسب a/b = c/x للحصول على القيمة المفقودة x بالضرب التبادلي (x = b·c/a)، بالإضافة إلى النسبة a/b والضرب التبادلي.", keywords: ["حلال التناسب", "الضرب التبادلي", "حل x", "نسبة تناسب", "إيجاد القيمة المفقودة"], ...io("x (الحل)", "النسبة a/b", "الضرب التبادلي b·c") },
  ru: { title: "Решатель Пропорций", short: "Решите a/b = c/x для неизвестного x методом перекрёстного умножения.", description: "Бесплатный решатель пропорций. Введите три значения пропорции a/b = c/x, чтобы найти недостающее x перекрёстным умножением (x = b·c/a), а также отношение a/b и перекрёстное произведение.", keywords: ["решатель пропорций", "перекрёстное умножение", "решить x", "отношение пропорция", "найти недостающее"], ...io("x (решение)", "Отношение a/b", "Перекрёстное произв. b·c") },
  zh: { title: "比例求解器", short: "用交叉相乘求解 a/b = c/x 中的未知数 x。", description: "免费的比例求解器。输入比例 a/b = c/x 的三个值，通过交叉相乘（x = b·c/a）求出缺失值 x，并给出比值 a/b 和交叉乘积。", keywords: ["比例求解器", "交叉相乘计算器", "求解x", "比率比例", "求缺失值"], ...io("x（解）", "比值 a/b", "交叉乘积 b·c") },
  ja: { title: "比例ソルバー", short: "たすき掛けで a/b = c/x の未知数 x を解きます。", description: "無料の比例ソルバー。比例 a/b = c/x の3つの値を入力すると、たすき掛け（x = b·c/a）で欠けている x、比 a/b、たすき掛けの積が得られます。", keywords: ["比例ソルバー", "たすき掛け 計算機", "x を解く", "比 比例", "欠損値を求める"], ...io("x（解）", "比 a/b", "たすき掛けの積 b·c") },
  ko: { title: "비례식 풀이기", short: "교차 곱셈으로 a/b = c/x에서 미지수 x를 구합니다.", description: "무료 비례식 풀이기. 비례식 a/b = c/x의 세 값을 입력하면 교차 곱셈(x = b·c/a)으로 빠진 값 x, 비율 a/b, 교차 곱을 얻습니다.", keywords: ["비례식 풀이기", "교차 곱셈 계산기", "x 풀기", "비율 비례", "빠진 값 찾기"], ...io("x(해)", "비율 a/b", "교차 곱 b·c") },
  hi: { title: "अनुपात हल कैलकुलेटर", short: "क्रॉस-गुणन द्वारा a/b = c/x में अज्ञात x हल करें।", description: "मुफ्त अनुपात हल कैलकुलेटर। अनुपात a/b = c/x के तीन मान दर्ज करें और क्रॉस-गुणन (x = b·c/a) से लुप्त मान x, अनुपात a/b तथा क्रॉस गुणनफल पाएं।", keywords: ["अनुपात हल", "क्रॉस गुणन कैलकुलेटर", "x हल करें", "अनुपात समानुपात", "लुप्त मान"], ...io("x (हल)", "अनुपात a/b", "क्रॉस गुणनफल b·c") },
};

export default i18n;
