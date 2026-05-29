import type { CalculatorI18n } from "@/types/i18n";

const io = (m: string, a: string, pe: string, ae: string, re: string) => ({
  inputs: { measured: { label: m }, actual: { label: a } },
  outputs: { percentError: { label: pe }, absoluteError: { label: ae }, relativeError: { label: re } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Percent Error Calculator", short: "Compare a measured value to the true value as a percent error.",
    description: "Free percent error calculator. Enter a measured (experimental) value and the actual (true) value to get the percent error, absolute error and relative error — commonly used in science labs and measurements.",
    keywords: ["percent error calculator", "percentage error", "experimental error", "relative error", "absolute error"],
    ...io("Measured value", "Actual (true) value", "Percent error (%)", "Absolute error", "Relative error"),
    faq: [
      { q: "How do you calculate percent error?", a: "Percent error = |measured − actual| / |actual| × 100. If you measured 9.80 and the true value is 9.81, the percent error is about 0.10%." },
      { q: "What's the difference between absolute and relative error?", a: "Absolute error is the raw difference |measured − actual|. Relative error divides that by the true value; multiply by 100 for percent error." },
    ],
  },
  pt: {
    title: "Calculadora de Erro Percentual", short: "Calcule o erro percentual entre um valor experimental e o valor real.",
    description: "Calculadora gratuita de erro percentual. Compare o valor medido com o valor real e obtenha o erro percentual absoluto.",
    keywords: ["erro percentual", "erro absoluto", "erro relativo", "precisão", "cálculo erro"],
    ...io("Measured value", "Actual (true) value", "Percent error (%)", "Absolute error", "Relative error"),
    faq: [
      { q: "How do you calculate percent error?", a: "Percent error = |measured − actual| / |actual| × 100. If you measured 9.80 and the true value is 9.81, the percent error is about 0.10%." },
      { q: "What's the difference between absolute and relative error?", a: "Absolute error is the raw difference |measured − actual|. Relative error divides that by the true value; multiply by 100 for percent error." },
    ],
  },
  id: {
    title: "Kalkulator Persentase Kesalahan", short: "Hitung persentase kesalahan antara nilai eksperimen dan nilai sebenarnya.",
    description: "Kalkulator persentase kesalahan gratis. Bandingkan nilai terukur dengan nilai sebenarnya dan dapatkan persentase kesalahan absolut.",
    keywords: ["persentase kesalahan", "kesalahan absolut", "kesalahan relatif", "presisi", "perhitungan error"],
    ...io("Measured value", "Actual (true) value", "Percent error (%)", "Absolute error", "Relative error"),
    faq: [
      { q: "How do you calculate percent error?", a: "Percent error = |measured − actual| / |actual| × 100. If you measured 9.80 and the true value is 9.81, the percent error is about 0.10%." },
      { q: "What's the difference between absolute and relative error?", a: "Absolute error is the raw difference |measured − actual|. Relative error divides that by the true value; multiply by 100 for percent error." },
    ],
  },

  tr: {
    title: "Yüzde Hata Hesaplayıcı", short: "Ölçülen değeri gerçek değerle yüzde hata olarak karşılaştırın.",
    description: "Ücretsiz yüzde hata hesaplayıcı. Ölçülen (deneysel) değeri ve gerçek değeri girerek yüzde hatayı, mutlak hatayı ve bağıl hatayı öğrenin — bilim laboratuvarları ve ölçümlerde yaygın kullanılır.",
    keywords: ["yüzde hata hesaplama", "yüzde hata", "deneysel hata", "bağıl hata", "mutlak hata"],
    ...io("Ölçülen değer", "Gerçek değer", "Yüzde hata (%)", "Mutlak hata", "Bağıl hata"),
    faq: [
      { q: "Yüzde hata nasıl hesaplanır?", a: "Yüzde hata = |ölçülen − gerçek| / |gerçek| × 100. 9,80 ölçtüyseniz ve gerçek değer 9,81 ise yüzde hata yaklaşık %0,10'dur." },
      { q: "Mutlak ve bağıl hata arasındaki fark nedir?", a: "Mutlak hata ham farktır |ölçülen − gerçek|. Bağıl hata bunu gerçek değere böler; yüzde hata için 100 ile çarpın." },
    ],
  },
  de: { title: "Prozentualer-Fehler-Rechner", short: "Vergleichen Sie einen Messwert mit dem wahren Wert als prozentualen Fehler.", description: "Kostenloser Rechner für prozentualen Fehler. Geben Sie einen Messwert und den wahren Wert ein, um prozentualen, absoluten und relativen Fehler zu erhalten.", keywords: ["prozentualer fehler rechner", "prozentfehler", "experimenteller fehler", "relativer fehler", "absoluter fehler"], ...io("Messwert", "Wahrer Wert", "Prozentualer Fehler (%)", "Absoluter Fehler", "Relativer Fehler") },
  fr: { title: "Calculateur d'Erreur en Pourcentage", short: "Comparez une valeur mesurée à la vraie valeur en erreur de pourcentage.", description: "Calculateur d'erreur en pourcentage gratuit. Saisissez une valeur mesurée et la vraie valeur pour obtenir l'erreur en pourcentage, l'erreur absolue et l'erreur relative.", keywords: ["calculateur erreur pourcentage", "erreur de pourcentage", "erreur expérimentale", "erreur relative", "erreur absolue"], ...io("Valeur mesurée", "Vraie valeur", "Erreur en pourcentage (%)", "Erreur absolue", "Erreur relative") },
  es: { title: "Calculadora de Error Porcentual", short: "Compara un valor medido con el valor real como error porcentual.", description: "Calculadora de error porcentual gratuita. Introduce un valor medido y el valor real para obtener el error porcentual, el error absoluto y el error relativo.", keywords: ["calculadora error porcentual", "error porcentual", "error experimental", "error relativo", "error absoluto"], ...io("Valor medido", "Valor real", "Error porcentual (%)", "Error absoluto", "Error relativo") },
  it: { title: "Calcolatore di Errore Percentuale", short: "Confronta un valore misurato con il valore vero come errore percentuale.", description: "Calcolatore di errore percentuale gratuito. Inserisci un valore misurato e il valore vero per ottenere l'errore percentuale, l'errore assoluto e l'errore relativo.", keywords: ["calcolatore errore percentuale", "errore percentuale", "errore sperimentale", "errore relativo", "errore assoluto"], ...io("Valore misurato", "Valore vero", "Errore percentuale (%)", "Errore assoluto", "Errore relativo") },
  ar: { title: "حاسبة الخطأ النسبي المئوي", short: "قارن قيمة مقاسة بالقيمة الحقيقية كخطأ مئوي.", description: "حاسبة خطأ مئوي مجانية. أدخل القيمة المقاسة والقيمة الحقيقية للحصول على الخطأ المئوي والخطأ المطلق والخطأ النسبي — تُستخدم كثيرًا في المختبرات العلمية والقياسات.", keywords: ["حاسبة الخطأ المئوي", "الخطأ المئوي", "الخطأ التجريبي", "الخطأ النسبي", "الخطأ المطلق"], ...io("القيمة المقاسة", "القيمة الحقيقية", "الخطأ المئوي (%)", "الخطأ المطلق", "الخطأ النسبي") },
  ru: { title: "Калькулятор Процентной Ошибки", short: "Сравните измеренное значение с истинным как процентную ошибку.", description: "Бесплатный калькулятор процентной ошибки. Введите измеренное и истинное значение, чтобы получить процентную, абсолютную и относительную ошибку.", keywords: ["калькулятор процентной ошибки", "процентная ошибка", "экспериментальная ошибка", "относительная ошибка", "абсолютная ошибка"], ...io("Измеренное значение", "Истинное значение", "Процентная ошибка (%)", "Абсолютная ошибка", "Относительная ошибка") },
  zh: { title: "百分误差计算器", short: "将测量值与真值作为百分误差进行比较。", description: "免费的百分误差计算器。输入测量（实验）值和真值，即可得到百分误差、绝对误差和相对误差——常用于科学实验和测量。", keywords: ["百分误差计算器", "百分比误差", "实验误差", "相对误差", "绝对误差"], ...io("测量值", "真值", "百分误差 (%)", "绝对误差", "相对误差") },
  ja: { title: "百分率誤差計算機", short: "測定値を真の値と比較して百分率誤差を求めます。", description: "無料の百分率誤差計算機。測定（実験）値と真の値を入力すると、百分率誤差、絶対誤差、相対誤差が得られます。科学実験や計測でよく使われます。", keywords: ["百分率誤差 計算機", "誤差率", "実験誤差", "相対誤差", "絶対誤差"], ...io("測定値", "真の値", "百分率誤差 (%)", "絶対誤差", "相対誤差") },
  ko: { title: "백분율 오차 계산기", short: "측정값을 참값과 비교하여 백분율 오차로 나타냅니다.", description: "무료 백분율 오차 계산기. 측정(실험)값과 참값을 입력하면 백분율 오차, 절대 오차, 상대 오차를 얻습니다. 과학 실험과 측정에서 자주 사용됩니다.", keywords: ["백분율 오차 계산기", "퍼센트 오차", "실험 오차", "상대 오차", "절대 오차"], ...io("측정값", "참값", "백분율 오차 (%)", "절대 오차", "상대 오차") },
  hi: { title: "प्रतिशत त्रुटि कैलकुलेटर", short: "मापित मान की तुलना सही मान से प्रतिशत त्रुटि के रूप में करें।", description: "मुफ्त प्रतिशत त्रुटि कैलकुलेटर। मापित (प्रायोगिक) मान और सही मान दर्ज करें और प्रतिशत त्रुटि, निरपेक्ष त्रुटि तथा सापेक्ष त्रुटि पाएं — विज्ञान प्रयोगशालाओं और मापन में आम।", keywords: ["प्रतिशत त्रुटि कैलकुलेटर", "प्रतिशत त्रुटि", "प्रायोगिक त्रुटि", "सापेक्ष त्रुटि", "निरपेक्ष त्रुटि"], ...io("मापित मान", "सही मान", "प्रतिशत त्रुटि (%)", "निरपेक्ष त्रुटि", "सापेक्ष त्रुटि") },
};

export default i18n;
