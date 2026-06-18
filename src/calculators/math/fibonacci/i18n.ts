import type { CalculatorI18n } from "@/types/i18n";

const io = (n: string, t: string, s: string, r: string) => ({
  inputs: { n: { label: n } },
  outputs: { nthTerm: { label: t }, sumFirstN: { label: s }, ratio: { label: r } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Fibonacci Calculator", short: "Find the nth Fibonacci number, the sum of terms and the golden ratio.",
    description: "Free Fibonacci calculator. Enter a position n to get the nth Fibonacci number (F₁ = F₂ = 1), the sum of the first n terms, and the ratio of consecutive terms that converges to the golden ratio φ ≈ 1.618.",
    keywords: ["fibonacci calculator", "nth fibonacci number", "fibonacci sequence", "golden ratio", "fibonacci term"],
    ...io("Position (n)", "Fibonacci number (Fₙ)", "Sum of first n terms", "Ratio Fₙ/Fₙ₋₁"),
    faq: [
      { q: "What is the Fibonacci sequence?", a: "Each number is the sum of the two before it, starting 1, 1, 2, 3, 5, 8, 13… It appears throughout nature, art and computer science." },
      { q: "What is the golden ratio connection?", a: "The ratio of consecutive Fibonacci numbers approaches the golden ratio φ = (1+√5)/2 ≈ 1.618 as n grows." },
      { q: "Does the Fibonacci sequence start with 0 or 1?", a: "It depends on convention. Our calculator uses F₁ = 1, F₂ = 1, so the sequence is 1, 1, 2, 3, 5… Some definitions start with F₀ = 0, F₁ = 1, giving 0, 1, 1, 2, 3, 5…" },
      { q: "What is the largest Fibonacci number this calculator can handle?", a: "JavaScript can accurately represent integers up to 2⁵³ ≈ 9 quadrillion. Fibonacci(78) ≈ 89 trillion is safe; beyond that, results may lose precision due to floating-point limitations." },
      { q: "How is the Fibonacci sequence used in trading?", a: "Traders use Fibonacci retracement levels (23.6%, 38.2%, 50%, 61.8%, 78.6%) derived from the golden ratio to identify potential support and resistance levels in stock, forex, and crypto markets." },
    ],
  },
  nl: {
    title: "Fibonacci Calculator", short: "Find the nth Fibonacci nummer, the sum of terms and the golden ratio.",
    description: "Gratis Fibonacci calculator. Enter a position n to get the nth Fibonacci nummer (F₁ = F₂ = 1), the sum of the first n terms, and the ratio of consecutive terms that converges to the golden ratio φ ≈ 1.618.",
    keywords: ["fibonacci calculator", "nth fibonacci nummer", "fibonacci sequence", "golden ratio", "fibonacci term"],
    ...io("Position (n)", "Fibonacci nummer (Fₙ)", "Sum of first n terms", "Verhouding Fₙ/Fₙ₋₁"),
    faq: [
      { q: "What is the Fibonacci sequence?", a: "Each nummer is the sum of the two before it, starting 1, 1, 2, 3, 5, 8, 13… It appears throughout nature, art and computer science." },
      { q: "What is the golden ratio connection?", a: "The ratio of consecutive Fibonacci nummers approaches the golden ratio φ = (1+√5)/2 ≈ 1.618 as n grows." },
    ],
  },

  pl: {
    title: "Fibonacci Kalkulator", short: "Find the nth Fibonacci liczba, the sum of terms and the golden ratio.",
    description: "Darmowy Fibonacci kalkulator. Enter a position n to get the nth Fibonacci liczba (F₁ = F₂ = 1), the sum of the first n terms, and the ratio of consecutive terms that converges to the golden ratio φ ≈ 1.618.",
    keywords: ["fibonacci kalkulator", "nth fibonacci liczba", "fibonacci sequence", "golden ratio", "fibonacci term"],
    ...io("Position (n)", "Fibonacci liczba (Fₙ)", "Sum of first n terms", "Stosunek Fₙ/Fₙ₋₁"),
    faq: [
      { q: "What is the Fibonacci sequence?", a: "Each liczba is the sum of the two before it, starting 1, 1, 2, 3, 5, 8, 13… It appears throughout nature, art and computer science." },
      { q: "What is the golden ratio connection?", a: "The ratio of consecutive Fibonacci liczbas approaches the golden ratio φ = (1+√5)/2 ≈ 1.618 as n grows." },
    ],
  },
  pt: {
    title: "Calculadora de Fibonacci", short: "Calcule qualquer termo da sequência de Fibonacci.",
    description: "Calculadora gratuita de Fibonacci. Obtenha o n-ésimo termo da sequência de Fibonacci e a sequência completa até esse termo.",
    keywords: ["Fibonacci", "sequência Fibonacci", "número áureo", "F(n)", "matemática"],
    ...io("Position (n)", "Fibonacci number (Fₙ)", "Sum of first n terms", "Ratio Fₙ/Fₙ₋₁"),
    faq: [
      { q: "What is the Fibonacci sequence?", a: "Each number is the sum of the two before it, starting 1, 1, 2, 3, 5, 8, 13… It appears throughout nature, art and computer science." },
      { q: "What is the golden ratio connection?", a: "The ratio of consecutive Fibonacci numbers approaches the golden ratio φ = (1+√5)/2 ≈ 1.618 as n grows." },
    ],
  },
  id: {
    title: "Kalkulator Fibonacci", short: "Hitung suku ke-n dari deret Fibonacci.",
    description: "Kalkulator Fibonacci gratis. Dapatkan suku ke-n dari deret Fibonacci dan deret lengkap sampai suku tersebut.",
    keywords: ["Fibonacci", "deret Fibonacci", "golden ratio", "F(n)", "matematika"],
    ...io("Position (n)", "Fibonacci number (Fₙ)", "Sum of first n terms", "Ratio Fₙ/Fₙ₋₁"),
    faq: [
      { q: "What is the Fibonacci sequence?", a: "Each number is the sum of the two before it, starting 1, 1, 2, 3, 5, 8, 13… It appears throughout nature, art and computer science." },
      { q: "What is the golden ratio connection?", a: "The ratio of consecutive Fibonacci numbers approaches the golden ratio φ = (1+√5)/2 ≈ 1.618 as n grows." },
    ],
  },

  tr: {
    title: "Fibonacci Hesaplayıcı", short: "n. Fibonacci sayısını, terimlerin toplamını ve altın oranı bulun.",
    description: "Ücretsiz Fibonacci hesaplayıcı. Bir n konumu girerek n. Fibonacci sayısını (F₁ = F₂ = 1), ilk n terimin toplamını ve altın oran φ ≈ 1,618'e yakınsayan ardışık terim oranını öğrenin.",
    keywords: ["fibonacci hesaplama", "n. fibonacci sayısı", "fibonacci dizisi", "altın oran", "fibonacci terimi"],
    ...io("Konum (n)", "Fibonacci sayısı (Fₙ)", "İlk n terimin toplamı", "Oran Fₙ/Fₙ₋₁"),
    faq: [
      { q: "Fibonacci dizisi nedir?", a: "Her sayı kendinden önceki ikisinin toplamıdır; 1, 1, 2, 3, 5, 8, 13… ile başlar. Doğada, sanatta ve bilgisayar biliminde sıkça görülür." },
      { q: "Altın oranla bağlantısı nedir?", a: "Ardışık Fibonacci sayılarının oranı, n büyüdükçe altın oran φ = (1+√5)/2 ≈ 1,618'e yaklaşır." },
    ],
  },
  de: { title: "Fibonacci-Rechner", short: "Die n-te Fibonacci-Zahl, die Summe der Glieder und den goldenen Schnitt finden.", description: "Kostenloser Fibonacci-Rechner. Geben Sie eine Position n ein, um die n-te Fibonacci-Zahl (F₁ = F₂ = 1), die Summe der ersten n Glieder und das Verhältnis aufeinanderfolgender Glieder (→ goldener Schnitt φ ≈ 1,618) zu erhalten.", keywords: ["fibonacci rechner", "n-te fibonacci zahl", "fibonacci folge", "goldener schnitt", "fibonacci glied"], ...io("Position (n)", "Fibonacci-Zahl (Fₙ)", "Summe der ersten n Glieder", "Verhältnis Fₙ/Fₙ₋₁") },
  fr: { title: "Calculateur de Fibonacci", short: "Trouvez le n-ième nombre de Fibonacci, la somme des termes et le nombre d'or.", description: "Calculateur de Fibonacci gratuit. Saisissez une position n pour obtenir le n-ième nombre de Fibonacci (F₁ = F₂ = 1), la somme des n premiers termes et le rapport des termes consécutifs qui tend vers le nombre d'or φ ≈ 1,618.", keywords: ["calculateur fibonacci", "n-ième nombre de fibonacci", "suite de fibonacci", "nombre d'or", "terme de fibonacci"], ...io("Position (n)", "Nombre de Fibonacci (Fₙ)", "Somme des n premiers termes", "Rapport Fₙ/Fₙ₋₁") },
  es: { title: "Calculadora de Fibonacci", short: "Halla el n-ésimo número de Fibonacci, la suma de términos y la proporción áurea.", description: "Calculadora de Fibonacci gratuita. Introduce una posición n para obtener el n-ésimo número de Fibonacci (F₁ = F₂ = 1), la suma de los primeros n términos y la razón de términos consecutivos que tiende a la proporción áurea φ ≈ 1,618.", keywords: ["calculadora fibonacci", "n-ésimo número de fibonacci", "sucesión de fibonacci", "proporción áurea", "término de fibonacci"], ...io("Posición (n)", "Número de Fibonacci (Fₙ)", "Suma de los primeros n términos", "Razón Fₙ/Fₙ₋₁") },
  it: { title: "Calcolatore di Fibonacci", short: "Trova l'n-esimo numero di Fibonacci, la somma dei termini e la sezione aurea.", description: "Calcolatore di Fibonacci gratuito. Inserisci una posizione n per ottenere l'n-esimo numero di Fibonacci (F₁ = F₂ = 1), la somma dei primi n termini e il rapporto tra termini consecutivi che tende alla sezione aurea φ ≈ 1,618.", keywords: ["calcolatore fibonacci", "n-esimo numero di fibonacci", "successione di fibonacci", "sezione aurea", "termine di fibonacci"], ...io("Posizione (n)", "Numero di Fibonacci (Fₙ)", "Somma dei primi n termini", "Rapporto Fₙ/Fₙ₋₁") },
  ar: { title: "حاسبة فيبوناتشي", short: "أوجد رقم فيبوناتشي النوني ومجموع الحدود والنسبة الذهبية.", description: "حاسبة فيبوناتشي مجانية. أدخل الموضع n للحصول على رقم فيبوناتشي النوني (F₁ = F₂ = 1)، ومجموع أول n حدًا، ونسبة الحدود المتتالية التي تقترب من النسبة الذهبية φ ≈ 1.618.", keywords: ["حاسبة فيبوناتشي", "رقم فيبوناتشي النوني", "متتالية فيبوناتشي", "النسبة الذهبية", "حد فيبوناتشي"], ...io("الموضع (n)", "رقم فيبوناتشي (Fₙ)", "مجموع أول n حدًا", "النسبة Fₙ/Fₙ₋₁") },
  ru: { title: "Калькулятор Фибоначчи", short: "Найдите n-е число Фибоначчи, сумму членов и золотое сечение.", description: "Бесплатный калькулятор Фибоначчи. Введите позицию n, чтобы получить n-е число Фибоначчи (F₁ = F₂ = 1), сумму первых n членов и отношение соседних членов, стремящееся к золотому сечению φ ≈ 1,618.", keywords: ["калькулятор фибоначчи", "n-е число фибоначчи", "последовательность фибоначчи", "золотое сечение", "член фибоначчи"], ...io("Позиция (n)", "Число Фибоначчи (Fₙ)", "Сумма первых n членов", "Отношение Fₙ/Fₙ₋₁") },
  zh: { title: "斐波那契计算器", short: "求第 n 个斐波那契数、各项之和以及黄金比例。", description: "免费的斐波那契计算器。输入位置 n，得到第 n 个斐波那契数（F₁ = F₂ = 1）、前 n 项之和，以及趋近黄金比例 φ ≈ 1.618 的相邻项比值。", keywords: ["斐波那契计算器", "第n个斐波那契数", "斐波那契数列", "黄金比例", "斐波那契项"], ...io("位置 (n)", "斐波那契数 (Fₙ)", "前 n 项之和", "比值 Fₙ/Fₙ₋₁") },
  ja: { title: "フィボナッチ計算機", short: "n 番目のフィボナッチ数、項の合計、黄金比を求めます。", description: "無料のフィボナッチ計算機。位置 n を入力すると、n 番目のフィボナッチ数（F₁ = F₂ = 1）、最初の n 項の合計、黄金比 φ ≈ 1.618 に収束する連続項の比が得られます。", keywords: ["フィボナッチ 計算機", "n番目のフィボナッチ数", "フィボナッチ数列", "黄金比", "フィボナッチ項"], ...io("位置 (n)", "フィボナッチ数 (Fₙ)", "最初の n 項の合計", "比 Fₙ/Fₙ₋₁") },
  ko: { title: "피보나치 계산기", short: "n번째 피보나치 수, 항의 합, 황금비를 구합니다.", description: "무료 피보나치 계산기. 위치 n을 입력하면 n번째 피보나치 수(F₁ = F₂ = 1), 처음 n개 항의 합, 황금비 φ ≈ 1.618에 수렴하는 연속 항의 비를 얻습니다.", keywords: ["피보나치 계산기", "n번째 피보나치 수", "피보나치 수열", "황금비", "피보나치 항"], ...io("위치 (n)", "피보나치 수 (Fₙ)", "처음 n개 항의 합", "비 Fₙ/Fₙ₋₁") },
  hi: { title: "फिबोनाची कैलकुलेटर", short: "n-वीं फिबोनाची संख्या, पदों का योग और स्वर्ण अनुपात ज्ञात करें।", description: "मुफ्त फिबोनाची कैलकुलेटर। स्थिति n दर्ज करें और n-वीं फिबोनाची संख्या (F₁ = F₂ = 1), पहले n पदों का योग, तथा स्वर्ण अनुपात φ ≈ 1.618 की ओर अभिसरित होने वाले क्रमागत पदों का अनुपात पाएं।", keywords: ["फिबोनाची कैलकुलेटर", "n-वीं फिबोनाची संख्या", "फिबोनाची अनुक्रम", "स्वर्ण अनुपात", "फिबोनाची पद"], ...io("स्थिति (n)", "फिबोनाची संख्या (Fₙ)", "पहले n पदों का योग", "अनुपात Fₙ/Fₙ₋₁") },
};

export default i18n;
