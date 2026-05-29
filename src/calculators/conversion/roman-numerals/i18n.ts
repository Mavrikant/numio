import type { CalculatorI18n } from "@/types/i18n";

const md = (a: string, b: string) => ({ "to-roman": a, "to-arabic": b });

const i18n: CalculatorI18n = {
  en: {
    title: "Roman Numeral Converter",
    short: "Convert numbers to Roman numerals and Roman numerals back to numbers (1–3999).",
    description:
      "Free Roman numeral converter. Turn any number from 1 to 3999 into Roman numerals, or decode a Roman numeral back to a regular number. Uses standard subtractive notation (IV, IX, XL…).",
    keywords: ["roman numeral converter", "roman numerals", "arabic to roman", "roman to number", "number to roman numerals", "convert roman numerals"],
    inputs: {
      mode: { label: "Conversion direction" },
      value: { label: "Value", help: "A number (1–3999) or a Roman numeral, depending on the direction." },
    },
    outputs: {
      roman: { label: "Roman numeral" },
      arabic: { label: "Number" },
    },
    options: { mode: md("Number → Roman", "Roman → Number") },
    errors: { invalid: "Enter a whole number 1–3999, or a valid Roman numeral." },
    faq: [
      { q: "How do Roman numerals work?", a: "Letters stand for values: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. They are added left to right, except when a smaller value precedes a larger one (IV=4, IX=9, XL=40), which means subtraction." },
      { q: "What is the largest Roman numeral?", a: "In standard notation the largest is MMMCMXCIX = 3999. There is no symbol for zero, and 4000+ requires non-standard overline notation, so this tool covers 1–3999." },
      { q: "Why is 4 written IV and not IIII?", a: "Standard notation uses subtraction to avoid four repeated symbols, so 4 is IV (one before five). Clock faces sometimes use IIII for aesthetic balance, but IV is the canonical form." },
    ],
  },
  pt: {
    title: "Conversor de Numerais Romanos",
    short: "Converta entre números arábicos e numerais romanos.",
    description:
      "Conversor gratuito de numerais romanos. Converta entre números decimais e a notação romana (I, V, X, L, C, D, M).",
    keywords: ["numerais romanos", "números romanos", "conversor romano", "I V X", "arábicos romanos"],
    inputs: {
      mode: { label: "Conversion direction" },
      value: { label: "Value", help: "A number (1–3999) or a Roman numeral, depending on the direction." },
    },
    outputs: {
      roman: { label: "Roman numeral" },
      arabic: { label: "Number" },
    },
    options: { mode: md("Number → Roman", "Roman → Number") },
    errors: { invalid: "Enter a whole number 1–3999, or a valid Roman numeral." },
    faq: [
      { q: "How do Roman numerals work?", a: "Letters stand for values: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. They are added left to right, except when a smaller value precedes a larger one (IV=4, IX=9, XL=40), which means subtraction." },
      { q: "What is the largest Roman numeral?", a: "In standard notation the largest is MMMCMXCIX = 3999. There is no symbol for zero, and 4000+ requires non-standard overline notation, so this tool covers 1–3999." },
      { q: "Why is 4 written IV and not IIII?", a: "Standard notation uses subtraction to avoid four repeated symbols, so 4 is IV (one before five). Clock faces sometimes use IIII for aesthetic balance, but IV is the canonical form." },
    ],
  },
  id: {
    title: "Konverter Angka Romawi",
    short: "Konversi antara angka arab dan angka romawi.",
    description:
      "Konverter angka romawi gratis. Konversi antara bilangan desimal dan notasi romawi (I, V, X, L, C, D, M).",
    keywords: ["angka romawi", "numerasi romawi", "konverter romawi", "I V X", "arab romawi"],
    inputs: {
      mode: { label: "Conversion direction" },
      value: { label: "Value", help: "A number (1–3999) or a Roman numeral, depending on the direction." },
    },
    outputs: {
      roman: { label: "Roman numeral" },
      arabic: { label: "Number" },
    },
    options: { mode: md("Number → Roman", "Roman → Number") },
    errors: { invalid: "Enter a whole number 1–3999, or a valid Roman numeral." },
    faq: [
      { q: "How do Roman numerals work?", a: "Letters stand for values: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. They are added left to right, except when a smaller value precedes a larger one (IV=4, IX=9, XL=40), which means subtraction." },
      { q: "What is the largest Roman numeral?", a: "In standard notation the largest is MMMCMXCIX = 3999. There is no symbol for zero, and 4000+ requires non-standard overline notation, so this tool covers 1–3999." },
      { q: "Why is 4 written IV and not IIII?", a: "Standard notation uses subtraction to avoid four repeated symbols, so 4 is IV (one before five). Clock faces sometimes use IIII for aesthetic balance, but IV is the canonical form." },
    ],
  },

  tr: {
    title: "Roma Rakamı Dönüştürücü",
    short: "Sayıları Roma rakamlarına ve Roma rakamlarını sayılara çevirin (1–3999).",
    description:
      "Ücretsiz Roma rakamı dönüştürücü. 1 ile 3999 arasındaki herhangi bir sayıyı Roma rakamına çevirin veya bir Roma rakamını normal sayıya geri çözün. Standart çıkarmalı gösterimi kullanır (IV, IX, XL…).",
    keywords: ["roma rakamı dönüştürücü", "roma rakamları", "sayıdan roma rakamına", "roma rakamından sayıya", "roma rakamı çevirme"],
    inputs: {
      mode: { label: "Dönüştürme yönü" },
      value: { label: "Değer", help: "Yöne bağlı olarak bir sayı (1–3999) veya bir Roma rakamı." },
    },
    outputs: {
      roman: { label: "Roma rakamı" },
      arabic: { label: "Sayı" },
    },
    options: { mode: md("Sayı → Roma", "Roma → Sayı") },
    errors: { invalid: "1–3999 arası bir tam sayı veya geçerli bir Roma rakamı girin." },
    faq: [
      { q: "Roma rakamları nasıl çalışır?", a: "Harfler değerleri temsil eder: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Soldan sağa toplanırlar; ancak küçük bir değer büyükten önce gelirse (IV=4, IX=9, XL=40) çıkarma anlamına gelir." },
      { q: "En büyük Roma rakamı nedir?", a: "Standart gösterimde en büyüğü MMMCMXCIX = 3999'dur. Sıfır için sembol yoktur ve 4000+ standart dışı üst çizgi gösterimi gerektirir; bu araç 1–3999 aralığını kapsar." },
      { q: "Neden 4, IIII değil de IV yazılır?", a: "Standart gösterim, dört kez tekrar eden sembolden kaçınmak için çıkarma kullanır; bu yüzden 4 = IV (beşten bir önce). Saat kadranları estetik denge için bazen IIII kullanır, ama IV kanonik biçimdir." },
    ],
  },
  de: {
    title: "Römische-Zahlen-Umrechner",
    short: "Zahlen in römische Zahlen und römische Zahlen zurück umwandeln (1–3999).",
    description: "Kostenloser Umrechner für römische Zahlen. Wandeln Sie jede Zahl von 1 bis 3999 in römische Zahlen um oder dekodieren Sie eine römische Zahl zurück. Standard-Subtraktionsschreibweise (IV, IX, XL…).",
    keywords: ["römische Zahlen Umrechner", "römische Zahlen", "Zahl in römische Zahl", "römisch zu Zahl"],
    inputs: { mode: { label: "Umrechnungsrichtung" }, value: { label: "Wert" } },
    outputs: { roman: { label: "Römische Zahl" }, arabic: { label: "Zahl" } },
    options: { mode: md("Zahl → Römisch", "Römisch → Zahl") },
  },
  fr: {
    title: "Convertisseur de Chiffres Romains",
    short: "Convertissez des nombres en chiffres romains et inversement (1–3999).",
    description: "Convertisseur de chiffres romains gratuit. Transformez tout nombre de 1 à 3999 en chiffres romains, ou décodez un chiffre romain en nombre. Notation soustractive standard (IV, IX, XL…).",
    keywords: ["convertisseur chiffres romains", "chiffres romains", "nombre en chiffre romain", "romain vers nombre"],
    inputs: { mode: { label: "Sens de conversion" }, value: { label: "Valeur" } },
    outputs: { roman: { label: "Chiffre romain" }, arabic: { label: "Nombre" } },
    options: { mode: md("Nombre → Romain", "Romain → Nombre") },
  },
  es: {
    title: "Convertidor de Números Romanos",
    short: "Convierte números a números romanos y números romanos a números (1–3999).",
    description: "Convertidor de números romanos gratuito. Convierte cualquier número del 1 al 3999 a números romanos, o decodifica un número romano a número normal. Notación sustractiva estándar (IV, IX, XL…).",
    keywords: ["convertidor números romanos", "números romanos", "número a romano", "romano a número"],
    inputs: { mode: { label: "Dirección de conversión" }, value: { label: "Valor" } },
    outputs: { roman: { label: "Número romano" }, arabic: { label: "Número" } },
    options: { mode: md("Número → Romano", "Romano → Número") },
  },
  it: {
    title: "Convertitore di Numeri Romani",
    short: "Converti numeri in numeri romani e numeri romani in numeri (1–3999).",
    description: "Convertitore di numeri romani gratuito. Trasforma qualsiasi numero da 1 a 3999 in numeri romani, o decodifica un numero romano in numero normale. Notazione sottrattiva standard (IV, IX, XL…).",
    keywords: ["convertitore numeri romani", "numeri romani", "numero in romano", "romano in numero"],
    inputs: { mode: { label: "Direzione di conversione" }, value: { label: "Valore" } },
    outputs: { roman: { label: "Numero romano" }, arabic: { label: "Numero" } },
    options: { mode: md("Numero → Romano", "Romano → Numero") },
  },
  ar: {
    title: "محوّل الأرقام الرومانية",
    short: "حوّل الأرقام إلى أرقام رومانية والعكس (1–3999).",
    description: "محوّل أرقام رومانية مجاني. حوّل أي رقم من 1 إلى 3999 إلى أرقام رومانية، أو فك ترميز رقم روماني إلى رقم عادي. يستخدم الترميز الطرحي القياسي (IV، IX، XL…).",
    keywords: ["محول الأرقام الرومانية", "الأرقام الرومانية", "رقم إلى روماني", "روماني إلى رقم"],
    inputs: { mode: { label: "اتجاه التحويل" }, value: { label: "القيمة" } },
    outputs: { roman: { label: "الرقم الروماني" }, arabic: { label: "الرقم" } },
    options: { mode: md("رقم → روماني", "روماني → رقم") },
  },
  ru: {
    title: "Конвертер Римских Чисел",
    short: "Преобразуйте числа в римские и римские обратно в числа (1–3999).",
    description: "Бесплатный конвертер римских чисел. Преобразуйте любое число от 1 до 3999 в римские цифры или раскодируйте римское число обратно. Стандартная вычитательная запись (IV, IX, XL…).",
    keywords: ["конвертер римских чисел", "римские цифры", "число в римское", "римское в число"],
    inputs: { mode: { label: "Направление преобразования" }, value: { label: "Значение" } },
    outputs: { roman: { label: "Римское число" }, arabic: { label: "Число" } },
    options: { mode: md("Число → Римское", "Римское → Число") },
  },
  zh: {
    title: "罗马数字转换器",
    short: "在数字与罗马数字之间相互转换（1–3999）。",
    description: "免费的罗马数字转换器。将 1 到 3999 之间的任意数字转换为罗马数字，或将罗马数字解码为普通数字。使用标准减法记法（IV、IX、XL…）。",
    keywords: ["罗马数字转换器", "罗马数字", "数字转罗马", "罗马转数字"],
    inputs: { mode: { label: "转换方向" }, value: { label: "数值" } },
    outputs: { roman: { label: "罗马数字" }, arabic: { label: "数字" } },
    options: { mode: md("数字 → 罗马", "罗马 → 数字") },
  },
  ja: {
    title: "ローマ数字コンバーター",
    short: "数字とローマ数字を相互に変換します（1〜3999）。",
    description: "無料のローマ数字コンバーター。1〜3999 の数字をローマ数字に変換したり、ローマ数字を通常の数字に戻したりできます。標準の減算記法（IV、IX、XL…）を使用します。",
    keywords: ["ローマ数字 変換", "ローマ数字", "数字からローマ数字", "ローマ数字から数字"],
    inputs: { mode: { label: "変換方向" }, value: { label: "値" } },
    outputs: { roman: { label: "ローマ数字" }, arabic: { label: "数字" } },
    options: { mode: md("数字 → ローマ", "ローマ → 数字") },
  },
  ko: {
    title: "로마 숫자 변환기",
    short: "숫자와 로마 숫자를 서로 변환합니다 (1–3999).",
    description: "무료 로마 숫자 변환기. 1부터 3999까지의 숫자를 로마 숫자로 변환하거나 로마 숫자를 일반 숫자로 디코딩합니다. 표준 감산 표기법(IV, IX, XL…)을 사용합니다.",
    keywords: ["로마 숫자 변환기", "로마 숫자", "숫자를 로마 숫자로", "로마 숫자를 숫자로"],
    inputs: { mode: { label: "변환 방향" }, value: { label: "값" } },
    outputs: { roman: { label: "로마 숫자" }, arabic: { label: "숫자" } },
    options: { mode: md("숫자 → 로마", "로마 → 숫자") },
  },
  hi: {
    title: "रोमन अंक परिवर्तक",
    short: "संख्याओं को रोमन अंकों में और रोमन अंकों को संख्याओं में बदलें (1–3999)।",
    description: "मुफ्त रोमन अंक परिवर्तक। 1 से 3999 तक की किसी भी संख्या को रोमन अंकों में बदलें, या रोमन अंक को सामान्य संख्या में डिकोड करें। मानक घटाव संकेतन (IV, IX, XL…) का उपयोग करता है।",
    keywords: ["रोमन अंक परिवर्तक", "रोमन अंक", "संख्या से रोमन", "रोमन से संख्या"],
    inputs: { mode: { label: "रूपांतरण दिशा" }, value: { label: "मान" } },
    outputs: { roman: { label: "रोमन अंक" }, arabic: { label: "संख्या" } },
    options: { mode: md("संख्या → रोमन", "रोमन → संख्या") },
  },
};

export default i18n;
