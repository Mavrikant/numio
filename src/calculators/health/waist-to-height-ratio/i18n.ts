import type { CalculatorI18n } from "@/types/i18n";

const io = (wa: string, h: string, r: string, p: string, hw: string) => ({
  inputs: { waist: { label: wa }, height: { label: h } },
  outputs: { ratio: { label: r }, percentOfHeight: { label: p }, healthyWaistMax: { label: hw } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Waist-to-Height Ratio Calculator", short: "Calculate your waist-to-height ratio, a simple central-obesity indicator.",
    description: "Free waist-to-height ratio (WHtR) calculator. Enter your waist and height to get the ratio, your waist as a percentage of height, and the healthy maximum waist (half your height). A ratio under 0.5 is the common target.",
    keywords: ["waist to height ratio", "whtr calculator", "central obesity", "waist height ratio", "body shape index"],
    ...io("Waist circumference", "Height", "Waist-to-height ratio", "Waist as % of height", "Healthy waist max (0.5×height)"),
    faq: [
      { q: "What is a healthy waist-to-height ratio?", a: "For most adults, keeping the ratio below 0.5 — i.e. waist less than half your height — is associated with lower cardiometabolic risk. Higher ratios indicate more central fat." },
      { q: "Where do I measure my waist?", a: "Around the narrowest point or at the navel, after breathing out normally, without holding the tape too tight." },
    ],
  },
  pt: {
    title: "Waist-to-Height Ratio Calculator", short: "Calculate your waist-to-height ratio, a simple central-obesity indicator.",
    description: "Free waist-to-height ratio (WHtR) calculator. Enter your waist and height to get the ratio, your waist as a percentage of height, and the healthy maximum waist (half your height). A ratio under 0.5 is the common target.",
    keywords: ["waist to height ratio", "whtr calculator", "central obesity", "waist height ratio", "body shape index"],
    ...io("Waist circumference", "Height", "Waist-to-height ratio", "Waist as % of height", "Healthy waist max (0.5×height)"),
    faq: [
      { q: "What is a healthy waist-to-height ratio?", a: "For most adults, keeping the ratio below 0.5 — i.e. waist less than half your height — is associated with lower cardiometabolic risk. Higher ratios indicate more central fat." },
      { q: "Where do I measure my waist?", a: "Around the narrowest point or at the navel, after breathing out normally, without holding the tape too tight." },
    ],
  },
  id: {
    title: "Waist-to-Height Ratio Calculator", short: "Calculate your waist-to-height ratio, a simple central-obesity indicator.",
    description: "Free waist-to-height ratio (WHtR) calculator. Enter your waist and height to get the ratio, your waist as a percentage of height, and the healthy maximum waist (half your height). A ratio under 0.5 is the common target.",
    keywords: ["waist to height ratio", "whtr calculator", "central obesity", "waist height ratio", "body shape index"],
    ...io("Waist circumference", "Height", "Waist-to-height ratio", "Waist as % of height", "Healthy waist max (0.5×height)"),
    faq: [
      { q: "What is a healthy waist-to-height ratio?", a: "For most adults, keeping the ratio below 0.5 — i.e. waist less than half your height — is associated with lower cardiometabolic risk. Higher ratios indicate more central fat." },
      { q: "Where do I measure my waist?", a: "Around the narrowest point or at the navel, after breathing out normally, without holding the tape too tight." },
    ],
  },

  tr: {
    title: "Bel-Boy Oranı Hesaplayıcı", short: "Basit bir merkezi obezite göstergesi olan bel-boy oranınızı hesaplayın.",
    description: "Ücretsiz bel-boy oranı (WHtR) hesaplayıcı. Bel ve boyunuzu girerek oranı, belinizin boya oranını yüzde olarak ve sağlıklı maksimum bel ölçüsünü (boyunuzun yarısı) öğrenin. 0,5'in altındaki oran yaygın hedeftir.",
    keywords: ["bel boy oranı", "whtr hesaplama", "merkezi obezite", "bel boy oranı", "vücut şekli"],
    ...io("Bel çevresi", "Boy", "Bel-boy oranı", "Belin boya oranı %", "Sağlıklı maks. bel (0,5×boy)"),
    faq: [
      { q: "Sağlıklı bel-boy oranı nedir?", a: "Çoğu yetişkin için oranı 0,5'in altında tutmak — yani bel, boyun yarısından az — daha düşük kardiyometabolik riskle ilişkilidir. Yüksek oranlar daha fazla merkezi yağı gösterir." },
      { q: "Belimi nereden ölçerim?", a: "En dar noktadan veya göbek hizasından, normal nefes verdikten sonra, mezurayı çok sıkmadan ölçün." },
    ],
  },
  de: { title: "Taille-Größe-Verhältnis-Rechner", short: "Berechnen Sie Ihr Taille-Größe-Verhältnis, einen einfachen Indikator für Bauchfett.", description: "Kostenloser Taille-Größe-Verhältnis-Rechner (WHtR). Geben Sie Taille und Größe ein, um das Verhältnis, die Taille als Prozent der Größe und die gesunde Maximaltaille (halbe Größe) zu erhalten.", keywords: ["taille größe verhältnis", "whtr rechner", "bauchfett", "taille höhe verhältnis"], ...io("Taillenumfang", "Größe", "Taille-Größe-Verhältnis", "Taille als % der Größe", "Gesunde Maximaltaille (0,5×Größe)") },
  fr: { title: "Calculateur du Rapport Tour de Taille/Taille", short: "Calculez votre rapport tour de taille/taille, indicateur simple d'obésité centrale.", description: "Calculateur de rapport tour de taille/taille (WHtR) gratuit. Saisissez votre tour de taille et votre taille pour obtenir le rapport, le tour de taille en % de la taille et le tour de taille sain maximal (la moitié de votre taille).", keywords: ["rapport tour de taille taille", "whtr calculateur", "obésité centrale", "tour de taille hauteur"], ...io("Tour de taille", "Taille (hauteur)", "Rapport taille/hauteur", "Taille en % de la hauteur", "Tour de taille sain max (0,5×taille)") },
  es: { title: "Calculadora de Índice Cintura-Altura", short: "Calcula tu índice cintura-altura, un indicador simple de obesidad central.", description: "Calculadora de índice cintura-altura (WHtR) gratuita. Introduce tu cintura y altura para obtener el índice, la cintura como porcentaje de la altura y la cintura máxima saludable (la mitad de tu altura).", keywords: ["índice cintura altura", "whtr calculadora", "obesidad central", "relación cintura estatura"], ...io("Circunferencia de cintura", "Altura", "Índice cintura-altura", "Cintura como % de altura", "Cintura máx. saludable (0,5×altura)") },
  it: { title: "Calcolatore Rapporto Vita-Altezza", short: "Calcola il rapporto vita-altezza, un semplice indicatore di obesità centrale.", description: "Calcolatore del rapporto vita-altezza (WHtR) gratuito. Inserisci girovita e altezza per ottenere il rapporto, il girovita come percentuale dell'altezza e il girovita massimo sano (metà della tua altezza).", keywords: ["rapporto vita altezza", "whtr calcolatore", "obesità centrale", "girovita altezza"], ...io("Circonferenza vita", "Altezza", "Rapporto vita-altezza", "Vita come % dell'altezza", "Vita max sana (0,5×altezza)") },
  ar: { title: "حاسبة نسبة الخصر إلى الطول", short: "احسب نسبة الخصر إلى الطول، وهي مؤشر بسيط للسمنة المركزية.", description: "حاسبة نسبة الخصر إلى الطول (WHtR) مجانية. أدخل محيط خصرك وطولك للحصول على النسبة، والخصر كنسبة مئوية من الطول، والحد الأقصى الصحي للخصر (نصف طولك). النسبة تحت 0.5 هي الهدف الشائع.", keywords: ["نسبة الخصر إلى الطول", "حاسبة whtr", "السمنة المركزية", "الخصر إلى الطول"], ...io("محيط الخصر", "الطول", "نسبة الخصر إلى الطول", "الخصر كنسبة من الطول", "أقصى خصر صحي (0.5×الطول)") },
  ru: { title: "Калькулятор Отношения Талии к Росту", short: "Рассчитайте отношение талии к росту — простой индикатор центрального ожирения.", description: "Бесплатный калькулятор отношения талии к росту (WHtR). Введите окружность талии и рост, чтобы получить отношение, талию в процентах от роста и здоровый максимум талии (половина роста). Цель — ниже 0,5.", keywords: ["отношение талии к росту", "калькулятор whtr", "центральное ожирение", "талия рост"], ...io("Окружность талии", "Рост", "Отношение талии к росту", "Талия в % от роста", "Здоровый макс. талии (0,5×рост)") },
  zh: { title: "腰高比计算器", short: "计算你的腰高比，一个简单的中心性肥胖指标。", description: "免费的腰高比 (WHtR) 计算器。输入腰围和身高，即可得到比值、腰围占身高的百分比，以及健康的最大腰围（身高的一半）。比值低于 0.5 是常见目标。", keywords: ["腰高比", "whtr计算器", "中心性肥胖", "腰围身高比"], ...io("腰围", "身高", "腰高比", "腰围占身高百分比", "健康最大腰围 (0.5×身高)") },
  ja: { title: "ウエスト身長比計算機", short: "中心性肥満の簡易指標であるウエスト身長比を計算します。", description: "無料のウエスト身長比 (WHtR) 計算機。ウエストと身長を入力すると、比率、身長に対するウエストの割合、健康的な最大ウエスト（身長の半分）が得られます。0.5 未満が一般的な目標です。", keywords: ["ウエスト身長比", "whtr 計算機", "中心性肥満", "ウエスト 身長 比"], ...io("ウエスト周囲", "身長", "ウエスト身長比", "身長に対するウエスト%", "健康的な最大ウエスト (0.5×身長)") },
  ko: { title: "허리-키 비율 계산기", short: "중심성 비만의 간단한 지표인 허리-키 비율을 계산합니다.", description: "무료 허리-키 비율 (WHtR) 계산기. 허리둘레와 키를 입력하면 비율, 키 대비 허리 비율(%), 건강한 최대 허리둘레(키의 절반)를 얻습니다. 0.5 미만이 일반적인 목표입니다.", keywords: ["허리 키 비율", "whtr 계산기", "중심성 비만", "허리 신장 비"], ...io("허리둘레", "키", "허리-키 비율", "키 대비 허리 %", "건강한 최대 허리 (0.5×키)") },
  hi: { title: "कमर-ऊंचाई अनुपात कैलकुलेटर", short: "केंद्रीय मोटापे का सरल संकेतक — अपना कमर-ऊंचाई अनुपात निकालें।", description: "मुफ्त कमर-ऊंचाई अनुपात (WHtR) कैलकुलेटर। अपनी कमर और ऊंचाई दर्ज करें और अनुपात, ऊंचाई के प्रतिशत के रूप में कमर, तथा स्वस्थ अधिकतम कमर (ऊंचाई का आधा) पाएं। 0.5 से कम अनुपात सामान्य लक्ष्य है।", keywords: ["कमर ऊंचाई अनुपात", "whtr कैलकुलेटर", "केंद्रीय मोटापा", "कमर ऊंचाई"], ...io("कमर परिधि", "ऊंचाई", "कमर-ऊंचाई अनुपात", "ऊंचाई के % में कमर", "स्वस्थ अधिकतम कमर (0.5×ऊंचाई)") },
};

export default i18n;
