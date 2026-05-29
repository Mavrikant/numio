import type { ToolI18n } from "@/types/tool";
import { COMMON_UI } from "../_shared/ui";

const data = {
  en: { title: "Color Shades Generator", short: "Generate tints and shades of any color.", description: "Free color shades generator. Pick a color and the number of steps to get a row of tints and shades from light to dark, each with its hex code.", keywords: ["color shades generator", "tints and shades", "color tints generator", "shade generator", "color variations"], baseColor: "Base color", steps: "Steps" },
  pt: { title: "Gerador de Color Shades", short: "Gerar tints e shades de any color.", description: "Gratuito - color shades generator. Pick a color e the number de steps para get a row de tints e shades a partir de light para dark, each com its hex code.", keywords: ["color shades generator", "tints and shades", "color tints generator", "shade generator", "color variations"], baseColor: "Base color", steps: "Steps" },
  id: { title: "Generator Color Shades", short: "Hasilkan tints dan shades dari any color.", description: "Gratis - color shades generator. Pick a color dan the number dari steps to get a row dari tints dan shades from light to dark, each with its hex code.", keywords: ["color shades generator", "tints and shades", "color tints generator", "shade generator", "color variations"], baseColor: "Base color", steps: "Steps" },

  tr: { title: "Renk Tonu Oluşturucu", short: "Herhangi bir rengin açık ve koyu tonlarını oluşturun.", description: "Ücretsiz renk tonu oluşturucu. Bir renk ve adım sayısı seçerek açıktan koyuya tonlar elde edin, her biri hex koduyla.", keywords: ["renk tonu oluşturucu", "açık ve koyu tonlar", "renk tonları oluşturucu", "ton oluşturucu", "renk varyasyonları"], baseColor: "Temel renk", steps: "Adım" },
  de: { title: "Farbton-Generator", short: "Erzeugen Sie hellere und dunklere Töne jeder Farbe.", description: "Kostenloser Farbton-Generator. Wählen Sie eine Farbe und die Anzahl der Schritte, um eine Reihe von Tönen von hell bis dunkel mit Hex-Codes zu erhalten.", keywords: ["farbton generator", "helle und dunkle töne", "farbtöne generator", "schattierung generator", "farbvariationen"], baseColor: "Grundfarbe", steps: "Schritte" },
  fr: { title: "Générateur de Nuances de Couleur", short: "Générez des teintes claires et foncées de n'importe quelle couleur.", description: "Générateur de nuances de couleur gratuit. Choisissez une couleur et le nombre d'étapes pour obtenir une gamme de teintes du clair au foncé, chacune avec son code hex.", keywords: ["générateur nuances couleur", "teintes claires foncées", "générateur teintes", "générateur nuances", "variations couleur"], baseColor: "Couleur de base", steps: "Étapes" },
  es: { title: "Generador de Tonos de Color", short: "Genera tonos claros y oscuros de cualquier color.", description: "Generador de tonos de color gratuito. Elige un color y el número de pasos para obtener una fila de tonos de claro a oscuro, cada uno con su código hex.", keywords: ["generador tonos color", "tonos claros oscuros", "generador matices", "generador sombras", "variaciones color"], baseColor: "Color base", steps: "Pasos" },
  it: { title: "Generatore di Tonalità di Colore", short: "Genera tonalità chiare e scure di qualsiasi colore.", description: "Generatore di tonalità di colore gratuito. Scegli un colore e il numero di passaggi per ottenere una fila di tonalità dal chiaro allo scuro, ciascuna con il suo codice hex.", keywords: ["generatore tonalità colore", "tonalità chiare scure", "generatore sfumature", "generatore ombre", "variazioni colore"], baseColor: "Colore base", steps: "Passaggi" },
  ar: { title: "مولّد درجات اللون", short: "أنشئ درجات فاتحة وداكنة لأي لون.", description: "مولّد درجات لون مجاني. اختر لونًا وعدد الخطوات للحصول على صف من الدرجات من الفاتح إلى الداكن، كل منها مع كود hex.", keywords: ["مولد درجات اللون", "درجات فاتحة وداكنة", "مولد الظلال", "مولد التدرجات", "تنويعات اللون"], baseColor: "اللون الأساسي", steps: "الخطوات" },
  ru: { title: "Генератор оттенков цвета", short: "Создавайте светлые и тёмные оттенки любого цвета.", description: "Бесплатный генератор оттенков цвета. Выберите цвет и число шагов, чтобы получить ряд оттенков от светлого к тёмному, каждый с hex-кодом.", keywords: ["генератор оттенков цвета", "светлые и тёмные оттенки", "генератор тонов", "генератор теней", "вариации цвета"], baseColor: "Базовый цвет", steps: "Шаги" },
  zh: { title: "颜色色调生成器", short: "生成任意颜色的明暗色调。", description: "免费的颜色色调生成器。选择一种颜色和步数，即可获得从浅到深的一排色调，每个都带有十六进制代码。", keywords: ["颜色色调生成器", "明暗色调", "色调生成器", "阴影生成器", "颜色变体"], baseColor: "基础颜色", steps: "步数" },
  ja: { title: "カラーシェード生成", short: "任意の色の明暗のトーンを生成。", description: "無料のカラーシェード生成ツール。色とステップ数を選ぶと、明から暗までのトーンの列が16進コード付きで得られます。", keywords: ["カラーシェード 生成", "明暗のトーン", "ティント 生成", "シェード 生成", "色のバリエーション"], baseColor: "ベースカラー", steps: "ステップ" },
  ko: { title: "색조 생성기", short: "모든 색상의 밝고 어두운 색조를 생성합니다.", description: "무료 색조 생성기. 색상과 단계 수를 선택하면 밝은 색에서 어두운 색까지의 색조 줄을 hex 코드와 함께 얻습니다.", keywords: ["색조 생성기", "밝고 어두운 색조", "틴트 생성기", "셰이드 생성기", "색상 변형"], baseColor: "기준 색상", steps: "단계" },
  hi: { title: "रंग शेड जनरेटर", short: "किसी भी रंग के हल्के और गहरे शेड बनाएं।", description: "मुफ्त रंग शेड जनरेटर। एक रंग और चरणों की संख्या चुनें और हल्के से गहरे तक शेड की एक पंक्ति पाएं, प्रत्येक अपने hex कोड के साथ।", keywords: ["रंग शेड जनरेटर", "हल्के और गहरे शेड", "टिंट जनरेटर", "शेड जनरेटर", "रंग विविधताएं"], baseColor: "आधार रंग", steps: "चरण" },
};

const i18n = Object.fromEntries(
  (Object.keys(data) as Array<keyof typeof data>).map((loc) => {
    const { title, short, description, keywords, ...rest } = data[loc];
    return [loc, { title, short, description, keywords, ui: { ...COMMON_UI[loc], ...rest } }];
  }),
) as unknown as ToolI18n;

export default i18n;
