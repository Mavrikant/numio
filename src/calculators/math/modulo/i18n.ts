import type { CalculatorI18n } from "@/types/i18n";

const io = (d: string, dv: string, r: string, mf: string, q: string, fq: string) => ({
  inputs: { dividend: { label: d }, divisor: { label: dv } },
  outputs: { remainder: { label: r }, moduloFloored: { label: mf }, quotient: { label: q }, flooredQuotient: { label: fq } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Modulo Calculator", short: "Find the remainder and quotient of a division, two ways.",
    description: "Free modulo calculator. Enter a dividend and divisor to get the remainder (truncated, like a % b in most languages), the floored modulo (sign follows the divisor), and both the truncated and floored quotients.",
    keywords: ["modulo calculator", "remainder calculator", "mod calculator", "modulus", "quotient and remainder"],
    ...io("Dividend (a)", "Divisor (b)", "Remainder (a % b)", "Modulo (floored)", "Quotient (truncated)", "Quotient (floored)"),
    faq: [
      { q: "What is the modulo operation?", a: "It returns what's left over after dividing one number by another. 17 mod 5 = 2 because 17 = 3×5 + 2." },
      { q: "Why are there two remainder results?", a: "Languages differ on negative numbers. The truncated remainder (JS/C) takes the dividend's sign; the floored modulo (Python) takes the divisor's sign. For positive inputs they're identical." },
    ],
  },
  pt: {
    title: "Modulo Calculator", short: "Find the remainder and quotient of a division, two ways.",
    description: "Free modulo calculator. Enter a dividend and divisor to get the remainder (truncated, like a % b in most languages), the floored modulo (sign follows the divisor), and both the truncated and floored quotients.",
    keywords: ["modulo calculator", "remainder calculator", "mod calculator", "modulus", "quotient and remainder"],
    ...io("Dividend (a)", "Divisor (b)", "Remainder (a % b)", "Modulo (floored)", "Quotient (truncated)", "Quotient (floored)"),
    faq: [
      { q: "What is the modulo operation?", a: "It returns what's left over after dividing one number by another. 17 mod 5 = 2 because 17 = 3×5 + 2." },
      { q: "Why are there two remainder results?", a: "Languages differ on negative numbers. The truncated remainder (JS/C) takes the dividend's sign; the floored modulo (Python) takes the divisor's sign. For positive inputs they're identical." },
    ],
  },
  id: {
    title: "Modulo Calculator", short: "Find the remainder and quotient of a division, two ways.",
    description: "Free modulo calculator. Enter a dividend and divisor to get the remainder (truncated, like a % b in most languages), the floored modulo (sign follows the divisor), and both the truncated and floored quotients.",
    keywords: ["modulo calculator", "remainder calculator", "mod calculator", "modulus", "quotient and remainder"],
    ...io("Dividend (a)", "Divisor (b)", "Remainder (a % b)", "Modulo (floored)", "Quotient (truncated)", "Quotient (floored)"),
    faq: [
      { q: "What is the modulo operation?", a: "It returns what's left over after dividing one number by another. 17 mod 5 = 2 because 17 = 3×5 + 2." },
      { q: "Why are there two remainder results?", a: "Languages differ on negative numbers. The truncated remainder (JS/C) takes the dividend's sign; the floored modulo (Python) takes the divisor's sign. For positive inputs they're identical." },
    ],
  },

  tr: {
    title: "Mod (Kalan) Hesaplayıcı", short: "Bir bölmenin kalanını ve bölümünü iki şekilde bulun.",
    description: "Ücretsiz mod hesaplayıcı. Bölünen ve bölen girerek kalanı (çoğu dildeki a % b gibi kesilmiş), tabanlı modülü (işareti böleni izler) ve hem kesilmiş hem tabanlı bölümü öğrenin.",
    keywords: ["mod hesaplama", "kalan hesaplama", "modülüs", "bölüm ve kalan", "modulo"],
    ...io("Bölünen (a)", "Bölen (b)", "Kalan (a % b)", "Mod (tabanlı)", "Bölüm (kesilmiş)", "Bölüm (tabanlı)"),
    faq: [
      { q: "Mod işlemi nedir?", a: "Bir sayıyı diğerine böldükten sonra kalanı verir. 17 mod 5 = 2, çünkü 17 = 3×5 + 2." },
      { q: "Neden iki kalan sonucu var?", a: "Diller negatif sayılarda farklıdır. Kesilmiş kalan (JS/C) bölünenin işaretini, tabanlı modül (Python) bölenin işaretini alır. Pozitif girdilerde aynıdır." },
    ],
  },
  de: { title: "Modulo-Rechner", short: "Rest und Quotient einer Division auf zwei Arten ermitteln.", description: "Kostenloser Modulo-Rechner. Geben Sie Dividend und Divisor ein, um den Rest (gekürzt, wie a % b in vielen Sprachen), das abgerundete Modulo (Vorzeichen folgt dem Divisor) und beide Quotienten zu erhalten.", keywords: ["modulo rechner", "restrechner", "modulus", "quotient und rest", "mod"], ...io("Dividend (a)", "Divisor (b)", "Rest (a % b)", "Modulo (abgerundet)", "Quotient (gekürzt)", "Quotient (abgerundet)") },
  fr: { title: "Calculateur de Modulo", short: "Trouvez le reste et le quotient d'une division, de deux façons.", description: "Calculateur de modulo gratuit. Saisissez un dividende et un diviseur pour obtenir le reste (tronqué, comme a % b dans la plupart des langages), le modulo plancher (signe du diviseur) et les deux quotients.", keywords: ["calculateur modulo", "calculateur de reste", "modulus", "quotient et reste", "mod"], ...io("Dividende (a)", "Diviseur (b)", "Reste (a % b)", "Modulo (plancher)", "Quotient (tronqué)", "Quotient (plancher)") },
  es: { title: "Calculadora de Módulo", short: "Halla el resto y el cociente de una división, de dos formas.", description: "Calculadora de módulo gratuita. Introduce un dividendo y un divisor para obtener el resto (truncado, como a % b en la mayoría de lenguajes), el módulo con piso (signo del divisor) y ambos cocientes.", keywords: ["calculadora de módulo", "calculadora de resto", "módulo", "cociente y resto", "mod"], ...io("Dividendo (a)", "Divisor (b)", "Resto (a % b)", "Módulo (con piso)", "Cociente (truncado)", "Cociente (con piso)") },
  it: { title: "Calcolatore di Modulo", short: "Trova il resto e il quoziente di una divisione, in due modi.", description: "Calcolatore di modulo gratuito. Inserisci dividendo e divisore per ottenere il resto (troncato, come a % b nella maggior parte dei linguaggi), il modulo con floor (segue il segno del divisore) e entrambi i quozienti.", keywords: ["calcolatore modulo", "calcolatore resto", "modulo", "quoziente e resto", "mod"], ...io("Dividendo (a)", "Divisore (b)", "Resto (a % b)", "Modulo (floor)", "Quoziente (troncato)", "Quoziente (floor)") },
  ar: { title: "حاسبة باقي القسمة (Modulo)", short: "أوجد باقي القسمة وخارجها بطريقتين.", description: "حاسبة modulo مجانية. أدخل المقسوم والمقسوم عليه للحصول على الباقي (المقصوص، مثل a % b في معظم اللغات)، والمودولو الأرضي (إشارته تتبع المقسوم عليه)، وكلا الخارجين.", keywords: ["حاسبة modulo", "حاسبة الباقي", "باقي القسمة", "الخارج والباقي", "mod"], ...io("المقسوم (a)", "المقسوم عليه (b)", "الباقي (a % b)", "مودولو (أرضي)", "الخارج (مقصوص)", "الخارج (أرضي)") },
  ru: { title: "Калькулятор Остатка (Modulo)", short: "Найдите остаток и частное деления двумя способами.", description: "Бесплатный калькулятор modulo. Введите делимое и делитель, чтобы получить остаток (усечённый, как a % b в большинстве языков), напольный модуль (знак следует делителю) и оба частных.", keywords: ["калькулятор modulo", "калькулятор остатка", "модуль", "частное и остаток", "mod"], ...io("Делимое (a)", "Делитель (b)", "Остаток (a % b)", "Модуль (напольный)", "Частное (усечённое)", "Частное (напольное)") },
  zh: { title: "取模（余数）计算器", short: "用两种方式求除法的余数和商。", description: "免费的取模计算器。输入被除数和除数，得到余数（截断式，与多数语言的 a % b 一致）、向下取整模（符号随除数）以及截断商和向下取整商。", keywords: ["取模计算器", "余数计算器", "模", "商和余数", "mod"], ...io("被除数 (a)", "除数 (b)", "余数 (a % b)", "模（向下取整）", "商（截断）", "商（向下取整）") },
  ja: { title: "剰余（モジュロ）計算機", short: "割り算の余りと商を2通りで求めます。", description: "無料の剰余計算機。被除数と除数を入力すると、余り（多くの言語の a % b と同じ切り捨て）、床関数モジュロ（符号は除数に従う）、および切り捨て商と床関数商が得られます。", keywords: ["剰余 計算機", "余り 計算機", "モジュロ", "商と余り", "mod"], ...io("被除数 (a)", "除数 (b)", "余り (a % b)", "モジュロ（床）", "商（切り捨て）", "商（床）") },
  ko: { title: "나머지(모듈로) 계산기", short: "나눗셈의 나머지와 몫을 두 가지 방식으로 구합니다.", description: "무료 모듈로 계산기. 피제수와 제수를 입력하면 나머지(대부분 언어의 a % b처럼 절단), 바닥 모듈로(부호는 제수를 따름), 절단 몫과 바닥 몫을 얻습니다.", keywords: ["모듈로 계산기", "나머지 계산기", "모듈러스", "몫과 나머지", "mod"], ...io("피제수 (a)", "제수 (b)", "나머지 (a % b)", "모듈로(바닥)", "몫(절단)", "몫(바닥)") },
  hi: { title: "मोड्यूलो (शेषफल) कैलकुलेटर", short: "किसी भाग का शेषफल और भागफल दो तरीकों से ज्ञात करें।", description: "मुफ्त मोड्यूलो कैलकुलेटर। भाज्य और भाजक दर्ज करें और शेषफल (अधिकांश भाषाओं के a % b जैसा ट्रंकेटेड), फ्लोर्ड मोड्यूलो (चिह्न भाजक का अनुसरण करता है) तथा दोनों भागफल पाएं।", keywords: ["मोड्यूलो कैलकुलेटर", "शेषफल कैलकुलेटर", "मोड्यूलस", "भागफल और शेषफल", "mod"], ...io("भाज्य (a)", "भाजक (b)", "शेषफल (a % b)", "मोड्यूलो (फ्लोर्ड)", "भागफल (ट्रंकेटेड)", "भागफल (फ्लोर्ड)") },
};

export default i18n;
