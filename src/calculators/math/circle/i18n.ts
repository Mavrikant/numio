import type { CalculatorI18n } from "@/types/i18n";

const opt = (r: string, d: string, c: string, a: string) => ({
  radius: r,
  diameter: d,
  circumference: c,
  area: a,
});

const i18n: CalculatorI18n = {
  en: {
    title: "Circle Calculator",
    short: "From radius, diameter, circumference or area, find all the other circle properties.",
    description:
      "Free circle calculator. Enter any one of radius, diameter, circumference or area and instantly get the other three, using d = 2r, C = 2πr and A = πr². Perfect for geometry homework and design work.",
    keywords: ["circle calculator", "area of a circle", "circumference calculator", "radius", "diameter", "pi", "geometry"],
    inputs: {
      known: { label: "Known value", help: "Which circle property you are entering." },
      value: { label: "Value", help: "The numeric value of the property selected above." },
    },
    outputs: {
      radius: { label: "Radius", help: "Distance from the centre to the edge." },
      diameter: { label: "Diameter", help: "Distance across the circle through the centre (2r)." },
      circumference: { label: "Circumference", help: "Distance around the circle (2πr)." },
      area: { label: "Area", help: "Area enclosed by the circle (πr²)." },
    },
    options: { known: opt("Radius", "Diameter", "Circumference", "Area") },
    errors: { nonPositive: "The value must be greater than zero." },
    faq: [
      { q: "How do I find the area of a circle?", a: "Use A = πr², where r is the radius. If you only know the diameter, halve it first (r = d/2). For example, a circle of radius 5 has area π·25 ≈ 78.54." },
      { q: "What is the circumference formula?", a: "C = 2πr = πd. A circle with radius 5 has a circumference of 2π·5 ≈ 31.42." },
      { q: "How do I get the radius from the area?", a: "Rearrange A = πr² to r = √(A/π). This calculator does it automatically when you choose 'Area' as the known value." },
    ],
  },
  pt: {
    title: "Calculadora de Círculo",
    short: "Calcule área, perímetro, diâmetro ou raio de um círculo.",
    description:
      "Calculadora gratuita de círculo. A partir do raio, diâmetro, área ou perímetro, calcule as outras três medidas com π preciso.",
    keywords: ["círculo", "área círculo", "perímetro círculo", "raio", "diâmetro"],
    inputs: {
      known: { label: "Known value", help: "Which circle property you are entering." },
      value: { label: "Value", help: "The numeric value of the property selected above." },
    },
    outputs: {
      radius: { label: "Radius", help: "Distance from the centre to the edge." },
      diameter: { label: "Diameter", help: "Distance across the circle through the centre (2r)." },
      circumference: { label: "Circumference", help: "Distance around the circle (2πr)." },
      area: { label: "Area", help: "Area enclosed by the circle (πr²)." },
    },
    options: { known: opt("Radius", "Diameter", "Circumference", "Area") },
    errors: { nonPositive: "The value must be greater than zero." },
    faq: [
      { q: "How do I find the area of a circle?", a: "Use A = πr², where r is the radius. If you only know the diameter, halve it first (r = d/2). For example, a circle of radius 5 has area π·25 ≈ 78.54." },
      { q: "What is the circumference formula?", a: "C = 2πr = πd. A circle with radius 5 has a circumference of 2π·5 ≈ 31.42." },
      { q: "How do I get the radius from the area?", a: "Rearrange A = πr² to r = √(A/π). This calculator does it automatically when you choose 'Area' as the known value." },
    ],
  },
  id: {
    title: "Kalkulator Lingkaran",
    short: "Hitung luas, keliling, diameter, atau jari-jari lingkaran.",
    description:
      "Kalkulator lingkaran gratis. Dari jari-jari, diameter, luas, atau keliling, hitung tiga ukuran lainnya dengan π presisi.",
    keywords: ["lingkaran", "luas lingkaran", "keliling lingkaran", "jari-jari", "diameter"],
    inputs: {
      known: { label: "Known value", help: "Which circle property you are entering." },
      value: { label: "Value", help: "The numeric value of the property selected above." },
    },
    outputs: {
      radius: { label: "Radius", help: "Distance from the centre to the edge." },
      diameter: { label: "Diameter", help: "Distance across the circle through the centre (2r)." },
      circumference: { label: "Circumference", help: "Distance around the circle (2πr)." },
      area: { label: "Area", help: "Area enclosed by the circle (πr²)." },
    },
    options: { known: opt("Radius", "Diameter", "Circumference", "Area") },
    errors: { nonPositive: "The value must be greater than zero." },
    faq: [
      { q: "How do I find the area of a circle?", a: "Use A = πr², where r is the radius. If you only know the diameter, halve it first (r = d/2). For example, a circle of radius 5 has area π·25 ≈ 78.54." },
      { q: "What is the circumference formula?", a: "C = 2πr = πd. A circle with radius 5 has a circumference of 2π·5 ≈ 31.42." },
      { q: "How do I get the radius from the area?", a: "Rearrange A = πr² to r = √(A/π). This calculator does it automatically when you choose 'Area' as the known value." },
    ],
  },

  tr: {
    title: "Çember / Daire Hesaplayıcı",
    short: "Yarıçap, çap, çevre veya alandan diğer tüm daire özelliklerini bulun.",
    description:
      "Ücretsiz daire hesaplayıcı. Yarıçap, çap, çevre veya alandan herhangi birini girin ve d = 2r, C = 2πr ve A = πr² ile diğer üçünü anında öğrenin. Geometri ödevleri ve tasarım için mükemmeldir.",
    keywords: ["daire hesaplama", "daire alanı", "çevre hesaplama", "yarıçap", "çap", "pi", "geometri"],
    inputs: {
      known: { label: "Bilinen değer", help: "Girdiğiniz daire özelliği." },
      value: { label: "Değer", help: "Yukarıda seçilen özelliğin sayısal değeri." },
    },
    outputs: {
      radius: { label: "Yarıçap", help: "Merkezden kenara olan uzaklık." },
      diameter: { label: "Çap", help: "Merkezden geçen, daireyi kesen uzunluk (2r)." },
      circumference: { label: "Çevre", help: "Dairenin etrafındaki uzunluk (2πr)." },
      area: { label: "Alan", help: "Dairenin kapladığı alan (πr²)." },
    },
    options: { known: opt("Yarıçap", "Çap", "Çevre", "Alan") },
    errors: { nonPositive: "Değer sıfırdan büyük olmalıdır." },
    faq: [
      { q: "Daire alanını nasıl bulurum?", a: "A = πr² kullanın; r yarıçaptır. Yalnızca çapı biliyorsanız önce yarıya bölün (r = d/2). Örneğin yarıçapı 5 olan dairenin alanı π·25 ≈ 78,54'tür." },
      { q: "Çevre formülü nedir?", a: "C = 2πr = πd. Yarıçapı 5 olan bir dairenin çevresi 2π·5 ≈ 31,42'dir." },
      { q: "Alandan yarıçapı nasıl bulurum?", a: "A = πr² ifadesini r = √(A/π) olarak düzenleyin. Bilinen değer olarak 'Alan'ı seçtiğinizde bu hesaplayıcı bunu otomatik yapar." },
    ],
  },
  de: {
    title: "Kreisrechner",
    short: "Aus Radius, Durchmesser, Umfang oder Fläche alle anderen Kreisgrößen berechnen.",
    description: "Kostenloser Kreisrechner. Geben Sie Radius, Durchmesser, Umfang oder Fläche ein und erhalten Sie die übrigen drei mit d = 2r, C = 2πr und A = πr².",
    keywords: ["Kreisrechner", "Kreisfläche", "Umfang berechnen", "Radius", "Durchmesser", "Pi", "Geometrie"],
    inputs: {
      known: { label: "Bekannter Wert" },
      value: { label: "Wert" },
    },
    outputs: {
      radius: { label: "Radius" },
      diameter: { label: "Durchmesser" },
      circumference: { label: "Umfang" },
      area: { label: "Fläche" },
    },
    options: { known: opt("Radius", "Durchmesser", "Umfang", "Fläche") },
  },
  fr: {
    title: "Calculateur de Cercle",
    short: "À partir du rayon, du diamètre, de la circonférence ou de l'aire, trouvez toutes les autres propriétés.",
    description: "Calculateur de cercle gratuit. Saisissez le rayon, le diamètre, la circonférence ou l'aire et obtenez les trois autres avec d = 2r, C = 2πr et A = πr².",
    keywords: ["calculateur de cercle", "aire d'un cercle", "circonférence", "rayon", "diamètre", "pi", "géométrie"],
    inputs: {
      known: { label: "Valeur connue" },
      value: { label: "Valeur" },
    },
    outputs: {
      radius: { label: "Rayon" },
      diameter: { label: "Diamètre" },
      circumference: { label: "Circonférence" },
      area: { label: "Aire" },
    },
    options: { known: opt("Rayon", "Diamètre", "Circonférence", "Aire") },
  },
  es: {
    title: "Calculadora de Círculo",
    short: "A partir del radio, diámetro, circunferencia o área, halla todas las demás propiedades.",
    description: "Calculadora de círculo gratuita. Introduce el radio, diámetro, circunferencia o área y obtén los otros tres con d = 2r, C = 2πr y A = πr².",
    keywords: ["calculadora de círculo", "área de un círculo", "circunferencia", "radio", "diámetro", "pi", "geometría"],
    inputs: {
      known: { label: "Valor conocido" },
      value: { label: "Valor" },
    },
    outputs: {
      radius: { label: "Radio" },
      diameter: { label: "Diámetro" },
      circumference: { label: "Circunferencia" },
      area: { label: "Área" },
    },
    options: { known: opt("Radio", "Diámetro", "Circunferencia", "Área") },
  },
  it: {
    title: "Calcolatore del Cerchio",
    short: "Da raggio, diametro, circonferenza o area, trova tutte le altre proprietà del cerchio.",
    description: "Calcolatore del cerchio gratuito. Inserisci raggio, diametro, circonferenza o area e ottieni gli altri tre con d = 2r, C = 2πr e A = πr².",
    keywords: ["calcolatore cerchio", "area del cerchio", "circonferenza", "raggio", "diametro", "pi greco", "geometria"],
    inputs: {
      known: { label: "Valore noto" },
      value: { label: "Valore" },
    },
    outputs: {
      radius: { label: "Raggio" },
      diameter: { label: "Diametro" },
      circumference: { label: "Circonferenza" },
      area: { label: "Area" },
    },
    options: { known: opt("Raggio", "Diametro", "Circonferenza", "Area") },
  },
  ar: {
    title: "حاسبة الدائرة",
    short: "من نصف القطر أو القطر أو المحيط أو المساحة، أوجد جميع خصائص الدائرة الأخرى.",
    description: "حاسبة دائرة مجانية. أدخل نصف القطر أو القطر أو المحيط أو المساحة واحصل على الثلاثة الأخرى باستخدام d = 2r و C = 2πr و A = πr².",
    keywords: ["حاسبة الدائرة", "مساحة الدائرة", "المحيط", "نصف القطر", "القطر", "باي", "هندسة"],
    inputs: {
      known: { label: "القيمة المعروفة" },
      value: { label: "القيمة" },
    },
    outputs: {
      radius: { label: "نصف القطر" },
      diameter: { label: "القطر" },
      circumference: { label: "المحيط" },
      area: { label: "المساحة" },
    },
    options: { known: opt("نصف القطر", "القطر", "المحيط", "المساحة") },
  },
  ru: {
    title: "Калькулятор Окружности",
    short: "По радиусу, диаметру, длине окружности или площади найдите все остальные параметры.",
    description: "Бесплатный калькулятор окружности. Введите радиус, диаметр, длину окружности или площадь и получите остальные три по d = 2r, C = 2πr и A = πr².",
    keywords: ["калькулятор окружности", "площадь круга", "длина окружности", "радиус", "диаметр", "пи", "геометрия"],
    inputs: {
      known: { label: "Известное значение" },
      value: { label: "Значение" },
    },
    outputs: {
      radius: { label: "Радиус" },
      diameter: { label: "Диаметр" },
      circumference: { label: "Длина окружности" },
      area: { label: "Площадь" },
    },
    options: { known: opt("Радиус", "Диаметр", "Длина окружности", "Площадь") },
  },
  zh: {
    title: "圆形计算器",
    short: "由半径、直径、周长或面积求出圆的其他所有属性。",
    description: "免费的圆形计算器。输入半径、直径、周长或面积中的任意一个，使用 d = 2r、C = 2πr 和 A = πr² 立即得到其余三个。",
    keywords: ["圆形计算器", "圆面积", "周长计算", "半径", "直径", "圆周率", "几何"],
    inputs: {
      known: { label: "已知值" },
      value: { label: "数值" },
    },
    outputs: {
      radius: { label: "半径" },
      diameter: { label: "直径" },
      circumference: { label: "周长" },
      area: { label: "面积" },
    },
    options: { known: opt("半径", "直径", "周长", "面积") },
  },
  ja: {
    title: "円の計算機",
    short: "半径・直径・円周・面積のいずれかから、円の他のすべての値を求めます。",
    description: "無料の円の計算機。半径・直径・円周・面積のいずれかを入力すると、d = 2r、C = 2πr、A = πr² を用いて残り3つが得られます。",
    keywords: ["円 計算機", "円の面積", "円周 計算", "半径", "直径", "円周率", "幾何"],
    inputs: {
      known: { label: "既知の値" },
      value: { label: "値" },
    },
    outputs: {
      radius: { label: "半径" },
      diameter: { label: "直径" },
      circumference: { label: "円周" },
      area: { label: "面積" },
    },
    options: { known: opt("半径", "直径", "円周", "面積") },
  },
  ko: {
    title: "원 계산기",
    short: "반지름, 지름, 둘레 또는 넓이로부터 원의 다른 모든 속성을 구합니다.",
    description: "무료 원 계산기. 반지름, 지름, 둘레, 넓이 중 하나를 입력하면 d = 2r, C = 2πr, A = πr²로 나머지 셋을 즉시 구합니다.",
    keywords: ["원 계산기", "원의 넓이", "둘레 계산", "반지름", "지름", "원주율", "기하"],
    inputs: {
      known: { label: "알고 있는 값" },
      value: { label: "값" },
    },
    outputs: {
      radius: { label: "반지름" },
      diameter: { label: "지름" },
      circumference: { label: "둘레" },
      area: { label: "넓이" },
    },
    options: { known: opt("반지름", "지름", "둘레", "넓이") },
  },
  hi: {
    title: "वृत्त कैलकुलेटर",
    short: "त्रिज्या, व्यास, परिधि या क्षेत्रफल से वृत्त के अन्य सभी गुण ज्ञात करें।",
    description: "मुफ्त वृत्त कैलकुलेटर। त्रिज्या, व्यास, परिधि या क्षेत्रफल में से कोई एक दर्ज करें और d = 2r, C = 2πr तथा A = πr² का उपयोग करके शेष तीन तुरंत पाएं।",
    keywords: ["वृत्त कैलकुलेटर", "वृत्त का क्षेत्रफल", "परिधि", "त्रिज्या", "व्यास", "पाई", "ज्यामिति"],
    inputs: {
      known: { label: "ज्ञात मान" },
      value: { label: "मान" },
    },
    outputs: {
      radius: { label: "त्रिज्या" },
      diameter: { label: "व्यास" },
      circumference: { label: "परिधि" },
      area: { label: "क्षेत्रफल" },
    },
    options: { known: opt("त्रिज्या", "व्यास", "परिधि", "क्षेत्रफल") },
  },
};

export default i18n;
