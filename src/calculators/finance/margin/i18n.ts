import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Margin & Markup Calculator",
    short: "Calculate profit, profit margin %, and markup % — or back out the price needed to hit a target margin or markup.",
    description:
      "Free margin and markup calculator. Enter cost and revenue to compute profit, gross margin percentage, and markup percentage. Or pick a mode to derive the revenue (selling price) needed to achieve a target margin or markup, given the cost.",
    keywords: [
      "margin calculator",
      "markup calculator",
      "profit margin calculator",
      "gross margin",
      "markup vs margin",
      "pricing calculator",
      "selling price calculator",
    ],
    inputs: {
      mode: { label: "Mode", help: "Compute margin from cost + revenue, or derive revenue from cost + target margin/markup." },
      cost: { label: "Cost ($)", help: "Cost of goods sold or production cost per unit / order." },
      revenue: { label: "Revenue ($)", help: "Selling price or revenue. Used in compute-margin mode." },
      marginPercent: { label: "Target Margin (%)", help: "Desired profit margin as a percentage of revenue. Used in compute-revenue-from-margin mode." },
      markupPercent: { label: "Target Markup (%)", help: "Desired markup as a percentage of cost. Used in compute-revenue-from-markup mode." },
    },
    outputs: {
      cost: { label: "Cost", help: "Cost (echoed for clarity)." },
      revenue: { label: "Revenue / Selling Price", help: "Selling price required (in derive modes) or that you entered (in compute-margin mode)." },
      profit: { label: "Profit", help: "Revenue minus cost (gross profit before operating expenses)." },
      profitMarginPercent: { label: "Profit Margin %", help: "Profit as a percentage of revenue: (R − C) / R × 100." },
      markupPercent: { label: "Markup %", help: "Profit as a percentage of cost: (R − C) / C × 100." },
    },
    errors: {
      revenuePositive: "Revenue must be greater than 0 when computing margin.",
      marginBelow100: "Target margin must be less than 100% (a 100% margin requires zero cost).",
      costRange: "Cost must be between 0 and 1,000,000,000.",
    },
    options: {
      mode: {
        "compute-margin": "Compute margin from cost + revenue",
        "compute-revenue-from-margin": "Compute revenue from cost + target margin",
        "compute-revenue-from-markup": "Compute revenue from cost + target markup",
      },
    },
    faq: [
      {
        q: "What is the difference between margin and markup?",
        a: "Margin is profit as a percentage of revenue: (Revenue − Cost) / Revenue. Markup is profit as a percentage of cost: (Revenue − Cost) / Cost. The same dollar profit produces a smaller margin percentage than markup percentage (e.g. 50% markup = 33.3% margin).",
      },
      {
        q: "How do I price for a 40% margin?",
        a: "Use compute-revenue-from-margin mode and set target margin to 40. The formula is: Revenue = Cost / (1 − Margin/100). At $60 cost: 60 / 0.6 = $100 selling price.",
      },
      {
        q: "Why can't margin be 100%?",
        a: "100% margin would mean profit equals revenue, which only happens when cost is zero. As cost approaches zero, margin approaches but never reaches 100%.",
      },
      {
        q: "Is this gross or net margin?",
        a: "Gross. It does not account for operating expenses, taxes, or interest. To estimate net profit margin, subtract those items from gross profit before dividing by revenue.",
      },
    ],
  },

  tr: {
    title: "Kâr Marjı ve Kâr Oranı Hesaplayıcısı",
    short: "Kâr, kâr marjı % ve mark-up % hesaplayın; ya da hedef marja ulaşmak için gereken satış fiyatını bulun.",
    description:
      "Ücretsiz marj ve mark-up hesaplayıcısı. Maliyet ve satış girerek kârı, brüt kâr marjı yüzdesini ve mark-up yüzdesini hesaplayın. Ayrıca, maliyete ve hedef marja/mark-up'a göre gerekli satış fiyatını bulmak için modu değiştirebilirsiniz.",
    keywords: [
      "kâr marjı hesaplama",
      "mark-up hesaplama",
      "kâr oranı",
      "brüt marj",
      "satış fiyatı hesaplama",
      "fiyatlandırma",
      "marj ve mark-up farkı",
    ],
    inputs: {
      mode: { label: "Mod", help: "Maliyet + satıştan marjı hesapla veya maliyet + hedef marj/mark-up'tan satış fiyatını türet." },
      cost: { label: "Maliyet ($)", help: "Satılan mal/üretim birim/sipariş maliyeti." },
      revenue: { label: "Satış / Hasılat ($)", help: "Satış fiyatı. 'Marjı hesapla' modunda kullanılır." },
      marginPercent: { label: "Hedef Marj (%)", help: "Hasılatın yüzdesi olarak hedef kâr marjı." },
      markupPercent: { label: "Hedef Mark-up (%)", help: "Maliyetin yüzdesi olarak hedef mark-up." },
    },
    outputs: {
      cost: { label: "Maliyet", help: "Maliyet (referans için tekrar gösterilir)." },
      revenue: { label: "Satış Fiyatı", help: "Türetilen veya girilen satış fiyatı." },
      profit: { label: "Kâr", help: "Hasılat eksi maliyet (brüt kâr)." },
      profitMarginPercent: { label: "Kâr Marjı %", help: "Hasılatın yüzdesi olarak kâr: (R−C) / R × 100." },
      markupPercent: { label: "Mark-up %", help: "Maliyetin yüzdesi olarak kâr: (R−C) / C × 100." },
    },
    errors: {
      revenuePositive: "Marj hesaplarken hasılat sıfırdan büyük olmalıdır.",
      marginBelow100: "Hedef marj %100'den küçük olmalıdır.",
      costRange: "Maliyet 0 ile 1.000.000.000 arasında olmalıdır.",
    },
    options: {
      mode: {
        "compute-margin": "Maliyet + satıştan marjı hesapla",
        "compute-revenue-from-margin": "Hedef marjdan satış fiyatını hesapla",
        "compute-revenue-from-markup": "Hedef mark-up'tan satış fiyatını hesapla",
      },
    },
    faq: [
      {
        q: "Marj ile mark-up arasındaki fark nedir?",
        a: "Marj, kârın hasılata oranıdır; mark-up ise kârın maliyete oranıdır. Aynı $ kâr, mark-up oranı olarak daha yüksek görünür (örn. %50 mark-up = %33,3 marj).",
      },
      {
        q: "%40 marj için fiyat nasıl belirlenir?",
        a: "Hedef marjı hesapla modunu seçip değeri 40 yapın. Formül: Satış = Maliyet / (1 − marj/100). 60$ maliyette: 60 / 0,6 = 100$.",
      },
    ],
  },

  de: {
    title: "Marge & Aufschlag Rechner",
    short: "Berechnen Sie Gewinn, Gewinnmarge % und Aufschlag % — oder leiten Sie den benötigten Verkaufspreis ab.",
    description:
      "Kostenloser Rechner für Marge und Aufschlag. Geben Sie Kosten und Umsatz ein, um Gewinn, Bruttomarge und Aufschlag zu berechnen, oder leiten Sie aus Kosten und Zielmarge/-aufschlag den nötigen Verkaufspreis ab.",
    keywords: [
      "Marge berechnen",
      "Aufschlag berechnen",
      "Gewinnmarge",
      "Bruttomarge",
      "Verkaufspreis berechnen",
      "Preiskalkulation",
      "Markup",
    ],
    inputs: {
      mode: { label: "Modus", help: "Marge aus Kosten + Umsatz berechnen oder Verkaufspreis aus Zielmarge/Aufschlag ableiten." },
      cost: { label: "Kosten ($)", help: "Wareneinsatz oder Herstellkosten je Einheit." },
      revenue: { label: "Umsatz / Verkaufspreis ($)", help: "Verkaufspreis (im Marge-Modus erforderlich)." },
      marginPercent: { label: "Zielmarge (%)", help: "Gewünschte Marge in Prozent vom Umsatz." },
      markupPercent: { label: "Ziel-Aufschlag (%)", help: "Gewünschter Aufschlag in Prozent der Kosten." },
    },
    outputs: {
      cost: { label: "Kosten", help: "Kosten (zur Klarheit erneut angezeigt)." },
      revenue: { label: "Verkaufspreis", help: "Abgeleiteter oder eingegebener Verkaufspreis." },
      profit: { label: "Gewinn", help: "Umsatz minus Kosten (Bruttogewinn)." },
      profitMarginPercent: { label: "Gewinnmarge %", help: "Gewinn / Umsatz × 100." },
      markupPercent: { label: "Aufschlag %", help: "Gewinn / Kosten × 100." },
    },
    errors: {
      revenuePositive: "Im Marge-Modus muss der Umsatz größer als 0 sein.",
      marginBelow100: "Die Zielmarge muss kleiner als 100 % sein.",
      costRange: "Kosten müssen zwischen 0 und 1.000.000.000 liegen.",
    },
    options: {
      mode: {
        "compute-margin": "Marge aus Kosten + Umsatz",
        "compute-revenue-from-margin": "Verkaufspreis aus Zielmarge",
        "compute-revenue-from-markup": "Verkaufspreis aus Ziel-Aufschlag",
      },
    },
    faq: [
      {
        q: "Was ist der Unterschied zwischen Marge und Aufschlag?",
        a: "Marge ist Gewinn / Umsatz, Aufschlag ist Gewinn / Kosten. Derselbe Eurogewinn ergibt einen höheren Aufschlag- als Margenprozentsatz.",
      },
      {
        q: "Wie kalkuliere ich für 40 % Marge?",
        a: "Modus „Verkaufspreis aus Zielmarge“ wählen und 40 eintragen. Formel: Preis = Kosten / (1 − Marge/100).",
      },
    ],
  },

  fr: {
    title: "Calculateur Marge et Marque",
    short: "Calculez le bénéfice, le taux de marge et le taux de marque — ou trouvez le prix de vente cible.",
    description:
      "Calculateur gratuit de marge et de marque. Saisissez le coût et le chiffre d'affaires pour obtenir le bénéfice, le taux de marge et le taux de marque, ou déduisez le prix de vente nécessaire pour atteindre une marge ou un coefficient cible.",
    keywords: [
      "calculateur marge",
      "taux de marque",
      "taux de marge",
      "marge brute",
      "prix de vente",
      "calcul marge commerciale",
      "marque vs marge",
    ],
    inputs: {
      mode: { label: "Mode", help: "Calculer la marge à partir du coût et du CA, ou déduire le prix à partir d'une cible." },
      cost: { label: "Coût ($)", help: "Coût d'achat ou de production unitaire." },
      revenue: { label: "Prix de vente ($)", help: "Prix de vente / CA. Utilisé pour calculer la marge." },
      marginPercent: { label: "Taux de marge cible (%)", help: "Marge souhaitée en pourcentage du CA." },
      markupPercent: { label: "Taux de marque cible (%)", help: "Coefficient souhaité en pourcentage du coût." },
    },
    outputs: {
      cost: { label: "Coût", help: "Coût (rappel)." },
      revenue: { label: "Prix de vente", help: "Prix de vente déduit ou saisi." },
      profit: { label: "Bénéfice", help: "Prix de vente moins coût (bénéfice brut)." },
      profitMarginPercent: { label: "Taux de marge %", help: "Bénéfice / Prix de vente × 100." },
      markupPercent: { label: "Taux de marque %", help: "Bénéfice / Coût × 100." },
    },
    errors: {
      revenuePositive: "Le prix de vente doit être supérieur à 0 pour calculer la marge.",
      marginBelow100: "La marge cible doit être inférieure à 100 %.",
      costRange: "Le coût doit être compris entre 0 et 1 000 000 000.",
    },
    options: {
      mode: {
        "compute-margin": "Marge à partir du coût + prix",
        "compute-revenue-from-margin": "Prix à partir de la marge cible",
        "compute-revenue-from-markup": "Prix à partir du coefficient cible",
      },
    },
    faq: [
      {
        q: "Quelle différence entre marge et marque ?",
        a: "Le taux de marge se calcule sur le prix de vente, le taux de marque sur le coût. Pour un même bénéfice, le taux de marque est supérieur au taux de marge.",
      },
      {
        q: "Comment fixer un prix pour 40 % de marge ?",
        a: "Choisissez « Prix à partir de la marge cible » et saisissez 40. Formule : Prix = Coût / (1 − Marge/100).",
      },
    ],
  },

  es: {
    title: "Calculadora de Margen y Markup",
    short: "Calcula beneficio, margen de beneficio % y markup % — o despeja el precio para alcanzar un margen objetivo.",
    description:
      "Calculadora gratuita de margen y markup. Introduce el coste y los ingresos para calcular el beneficio, el margen bruto y el markup, o deriva el precio necesario para un margen/markup objetivo a partir del coste.",
    keywords: [
      "calculadora margen",
      "calculadora markup",
      "margen de beneficio",
      "margen bruto",
      "precio de venta",
      "fijación precios",
      "markup vs margen",
    ],
    inputs: {
      mode: { label: "Modo", help: "Calcular margen desde coste + precio, o derivar precio desde objetivo." },
      cost: { label: "Coste ($)", help: "Coste de venta o producción unitaria." },
      revenue: { label: "Ingreso / Precio de venta ($)", help: "Precio de venta. Necesario para calcular margen." },
      marginPercent: { label: "Margen objetivo (%)", help: "Margen deseado en porcentaje del precio." },
      markupPercent: { label: "Markup objetivo (%)", help: "Markup deseado en porcentaje del coste." },
    },
    outputs: {
      cost: { label: "Coste", help: "Coste (referencia)." },
      revenue: { label: "Precio de venta", help: "Precio derivado o introducido." },
      profit: { label: "Beneficio", help: "Ingreso menos coste (beneficio bruto)." },
      profitMarginPercent: { label: "Margen %", help: "Beneficio / Ingreso × 100." },
      markupPercent: { label: "Markup %", help: "Beneficio / Coste × 100." },
    },
    errors: {
      revenuePositive: "El ingreso debe ser mayor que 0 al calcular margen.",
      marginBelow100: "El margen objetivo debe ser menor que 100 %.",
      costRange: "El coste debe estar entre 0 y 1.000.000.000.",
    },
    options: {
      mode: {
        "compute-margin": "Margen desde coste + ingreso",
        "compute-revenue-from-margin": "Precio desde margen objetivo",
        "compute-revenue-from-markup": "Precio desde markup objetivo",
      },
    },
    faq: [
      {
        q: "¿Diferencia entre margen y markup?",
        a: "El margen se calcula sobre el precio, el markup sobre el coste. El mismo beneficio en euros da un porcentaje mayor de markup que de margen.",
      },
      {
        q: "¿Cómo fijo un precio para 40 % de margen?",
        a: "Selecciona el modo «Precio desde margen objetivo» y pon 40. Fórmula: Precio = Coste / (1 − margen/100).",
      },
    ],
  },

  it: {
    title: "Calcolatore Margine e Ricarico",
    short: "Calcola utile, margine % e ricarico % — oppure trova il prezzo per raggiungere un margine obiettivo.",
    description:
      "Calcolatore gratuito di margine e ricarico. Inserisci costo e ricavo per ottenere utile, margine lordo e ricarico, oppure deriva il prezzo necessario per un margine/ricarico obiettivo a partire dal costo.",
    keywords: [
      "calcolatore margine",
      "calcolatore ricarico",
      "margine di profitto",
      "margine lordo",
      "prezzo vendita",
      "pricing",
      "ricarico vs margine",
    ],
    inputs: {
      mode: { label: "Modalità", help: "Calcola margine da costo + ricavo o deriva il prezzo da un obiettivo." },
      cost: { label: "Costo ($)", help: "Costo del venduto o costo di produzione unitario." },
      revenue: { label: "Ricavo / Prezzo ($)", help: "Prezzo di vendita. Serve per calcolare il margine." },
      marginPercent: { label: "Margine obiettivo (%)", help: "Margine desiderato in percentuale sul ricavo." },
      markupPercent: { label: "Ricarico obiettivo (%)", help: "Ricarico desiderato in percentuale sul costo." },
    },
    outputs: {
      cost: { label: "Costo", help: "Costo (riferimento)." },
      revenue: { label: "Prezzo di vendita", help: "Prezzo derivato o inserito." },
      profit: { label: "Utile", help: "Ricavo meno costo (utile lordo)." },
      profitMarginPercent: { label: "Margine %", help: "Utile / Ricavo × 100." },
      markupPercent: { label: "Ricarico %", help: "Utile / Costo × 100." },
    },
    errors: {
      revenuePositive: "Il ricavo deve essere maggiore di 0 per calcolare il margine.",
      marginBelow100: "Il margine obiettivo deve essere minore di 100 %.",
      costRange: "Il costo deve essere compreso tra 0 e 1.000.000.000.",
    },
    options: {
      mode: {
        "compute-margin": "Margine da costo + ricavo",
        "compute-revenue-from-margin": "Prezzo da margine obiettivo",
        "compute-revenue-from-markup": "Prezzo da ricarico obiettivo",
      },
    },
    faq: [
      {
        q: "Differenza tra margine e ricarico?",
        a: "Il margine si calcola sul prezzo, il ricarico sul costo. Lo stesso utile in € produce un ricarico % più alto del margine %.",
      },
      {
        q: "Come fissare un prezzo per il 40 % di margine?",
        a: "Modalità «Prezzo da margine obiettivo» e inserisci 40. Formula: Prezzo = Costo / (1 − margine/100).",
      },
    ],
  },

  ar: {
    title: "حاسبة الهامش والربح المضاف",
    short: "احسب الربح ونسبة هامش الربح ونسبة الربح المضاف — أو حدد السعر اللازم للوصول إلى هامش مستهدف.",
    description:
      "حاسبة مجانية للهامش والربح المضاف. أدخل التكلفة والإيراد للحصول على الربح وهامش الربح الإجمالي ونسبة الربح المضاف، أو استخرج السعر اللازم لتحقيق هامش/ربح مضاف مستهدف انطلاقاً من التكلفة.",
    keywords: [
      "حاسبة هامش الربح",
      "حاسبة الربح المضاف",
      "هامش الربح الإجمالي",
      "سعر البيع",
      "تسعير المنتج",
      "هامش وربح مضاف",
      "ربحية",
    ],
    inputs: {
      mode: { label: "الوضع", help: "حساب الهامش من التكلفة والإيراد، أو اشتقاق السعر من هدف الهامش/الربح المضاف." },
      cost: { label: "التكلفة ($)", help: "تكلفة البضاعة المباعة أو الإنتاج لكل وحدة." },
      revenue: { label: "الإيراد / السعر ($)", help: "سعر البيع. مطلوب في وضع حساب الهامش." },
      marginPercent: { label: "هامش مستهدف (%)", help: "هامش الربح المرغوب كنسبة من الإيراد." },
      markupPercent: { label: "ربح مضاف مستهدف (%)", help: "الربح المضاف المرغوب كنسبة من التكلفة." },
    },
    outputs: {
      cost: { label: "التكلفة", help: "التكلفة (للتذكير)." },
      revenue: { label: "السعر / الإيراد", help: "السعر المشتق أو المدخل." },
      profit: { label: "الربح", help: "الإيراد ناقص التكلفة (الربح الإجمالي)." },
      profitMarginPercent: { label: "هامش الربح %", help: "الربح ÷ الإيراد × 100." },
      markupPercent: { label: "الربح المضاف %", help: "الربح ÷ التكلفة × 100." },
    },
    errors: {
      revenuePositive: "يجب أن يكون الإيراد أكبر من 0 لحساب الهامش.",
      marginBelow100: "يجب أن يكون الهامش المستهدف أقل من 100%.",
      costRange: "التكلفة يجب أن تكون بين 0 و1,000,000,000.",
    },
    options: {
      mode: {
        "compute-margin": "هامش من التكلفة + الإيراد",
        "compute-revenue-from-margin": "السعر من هامش مستهدف",
        "compute-revenue-from-markup": "السعر من ربح مضاف مستهدف",
      },
    },
    faq: [
      {
        q: "ما الفرق بين الهامش والربح المضاف؟",
        a: "الهامش يحسب على الإيراد، والربح المضاف يحسب على التكلفة. نفس الربح بالعملة يعطي نسبة ربح مضاف أعلى من نسبة الهامش.",
      },
      {
        q: "كيف أحدد السعر للحصول على هامش 40%؟",
        a: "اختر وضع «السعر من هامش مستهدف» وأدخل 40. الصيغة: السعر = التكلفة / (1 − هامش/100).",
      },
    ],
  },

  ru: {
    title: "Калькулятор маржи и наценки",
    short: "Рассчитайте прибыль, маржу % и наценку % — или вычислите цену для достижения целевой маржи.",
    description:
      "Бесплатный калькулятор маржи и наценки. Введите себестоимость и выручку, чтобы получить прибыль, валовую маржу и наценку, либо рассчитайте цену продажи, необходимую для достижения целевой маржи/наценки.",
    keywords: [
      "калькулятор маржи",
      "калькулятор наценки",
      "валовая маржа",
      "цена продажи",
      "ценообразование",
      "наценка и маржа",
      "прибыль",
    ],
    inputs: {
      mode: { label: "Режим", help: "Рассчитать маржу по себестоимости и выручке или вывести цену по целевой марже/наценке." },
      cost: { label: "Себестоимость ($)", help: "Себестоимость продаваемого товара или единицы продукции." },
      revenue: { label: "Выручка / Цена ($)", help: "Цена продажи. Используется в режиме расчёта маржи." },
      marginPercent: { label: "Целевая маржа (%)", help: "Желаемая маржа в процентах от цены." },
      markupPercent: { label: "Целевая наценка (%)", help: "Желаемая наценка в процентах от себестоимости." },
    },
    outputs: {
      cost: { label: "Себестоимость", help: "Себестоимость (для напоминания)." },
      revenue: { label: "Цена продажи", help: "Выведенная или введённая цена." },
      profit: { label: "Прибыль", help: "Выручка минус себестоимость (валовая прибыль)." },
      profitMarginPercent: { label: "Маржа %", help: "Прибыль / Выручка × 100." },
      markupPercent: { label: "Наценка %", help: "Прибыль / Себестоимость × 100." },
    },
    errors: {
      revenuePositive: "В режиме расчёта маржи выручка должна быть больше 0.",
      marginBelow100: "Целевая маржа должна быть меньше 100%.",
      costRange: "Себестоимость должна быть от 0 до 1 000 000 000.",
    },
    options: {
      mode: {
        "compute-margin": "Маржа из себестоимости и выручки",
        "compute-revenue-from-margin": "Цена из целевой маржи",
        "compute-revenue-from-markup": "Цена из целевой наценки",
      },
    },
    faq: [
      {
        q: "Чем маржа отличается от наценки?",
        a: "Маржа считается от цены, наценка — от себестоимости. Одна и та же прибыль в деньгах даёт большее значение наценки, чем маржи.",
      },
      {
        q: "Как назначить цену для 40% маржи?",
        a: "Режим «Цена из целевой маржи», значение 40. Формула: Цена = Себестоимость / (1 − маржа/100).",
      },
    ],
  },

  zh: {
    title: "毛利与加成计算器",
    short: "计算利润、毛利率和加成率，或反推达到目标毛利所需的售价。",
    description:
      "免费毛利与加成计算器。输入成本和收入即可计算利润、毛利率和加成率；或选择模式，根据成本与目标毛利/加成率推算所需售价。",
    keywords: [
      "毛利率计算器",
      "加成率计算器",
      "毛利计算",
      "定价计算",
      "售价计算",
      "加成与毛利",
      "利润率",
    ],
    inputs: {
      mode: { label: "模式", help: "由成本+收入计算毛利，或由成本+目标毛利/加成推算售价。" },
      cost: { label: "成本 ($)", help: "销售商品成本或单位生产成本。" },
      revenue: { label: "收入 / 售价 ($)", help: "售价。在计算毛利模式下需要填写。" },
      marginPercent: { label: "目标毛利率 (%)", help: "占收入的目标利润百分比。" },
      markupPercent: { label: "目标加成率 (%)", help: "占成本的目标加成百分比。" },
    },
    outputs: {
      cost: { label: "成本", help: "成本（仅作参考）。" },
      revenue: { label: "售价", help: "推算的或输入的售价。" },
      profit: { label: "利润", help: "收入减去成本（毛利润）。" },
      profitMarginPercent: { label: "毛利率 %", help: "利润 ÷ 收入 × 100。" },
      markupPercent: { label: "加成率 %", help: "利润 ÷ 成本 × 100。" },
    },
    errors: {
      revenuePositive: "计算毛利时收入必须大于 0。",
      marginBelow100: "目标毛利率必须小于 100%。",
      costRange: "成本必须在 0 至 1,000,000,000 之间。",
    },
    options: {
      mode: {
        "compute-margin": "由成本+收入计算毛利",
        "compute-revenue-from-margin": "由目标毛利率计算售价",
        "compute-revenue-from-markup": "由目标加成率计算售价",
      },
    },
    faq: [
      {
        q: "毛利与加成有何区别？",
        a: "毛利是利润占收入的比例；加成是利润占成本的比例。同样的利润金额，加成率高于毛利率（例如加成50% = 毛利33.3%）。",
      },
      {
        q: "如何定价以达到40%毛利？",
        a: "使用「由目标毛利率计算售价」模式并输入40。公式：售价 = 成本 / (1 − 毛利率/100)。",
      },
    ],
  },

  ja: {
    title: "粗利・値入率計算機",
    short: "利益、粗利率、値入率（マークアップ）を計算したり、目標粗利を達成する販売価格を求めます。",
    description:
      "無料の粗利・値入率計算機。原価と売上を入力すると利益、粗利率、値入率を算出。あるいは原価と目標粗利／値入率から必要販売価格を逆算できます。",
    keywords: [
      "粗利率計算機",
      "値入率計算機",
      "マークアップ計算",
      "売価計算",
      "プライシング",
      "利益率",
      "粗利と値入の違い",
    ],
    inputs: {
      mode: { label: "モード", help: "原価+売上から粗利率を計算、または目標から販売価格を逆算。" },
      cost: { label: "原価 ($)", help: "売上原価または製造原価。" },
      revenue: { label: "売上 / 売価 ($)", help: "売価。粗利率を計算するモードで使用。" },
      marginPercent: { label: "目標粗利率 (%)", help: "売上に占める目標利益の割合。" },
      markupPercent: { label: "目標値入率 (%)", help: "原価に占める目標利益の割合。" },
    },
    outputs: {
      cost: { label: "原価", help: "原価（再表示）。" },
      revenue: { label: "売価", help: "逆算または入力した売価。" },
      profit: { label: "利益", help: "売上から原価を差し引いた金額（粗利益）。" },
      profitMarginPercent: { label: "粗利率 %", help: "利益 ÷ 売上 × 100。" },
      markupPercent: { label: "値入率 %", help: "利益 ÷ 原価 × 100。" },
    },
    errors: {
      revenuePositive: "粗利率を計算するモードでは売上は 0 より大きくしてください。",
      marginBelow100: "目標粗利率は 100% 未満にしてください。",
      costRange: "原価は 0 から 1,000,000,000 の範囲で入力してください。",
    },
    options: {
      mode: {
        "compute-margin": "原価+売上から粗利を計算",
        "compute-revenue-from-margin": "目標粗利率から売価を逆算",
        "compute-revenue-from-markup": "目標値入率から売価を逆算",
      },
    },
    faq: [
      {
        q: "粗利率と値入率の違いは？",
        a: "粗利率は売上に対する利益、値入率は原価に対する利益です。同じ利益額でも値入率の方が大きい数値になります（例：値入率50% = 粗利率33.3%）。",
      },
      {
        q: "粗利率40%にしたい場合の価格は？",
        a: "「目標粗利率から売価を逆算」モードで40を入力。式：売価 = 原価 / (1 − 粗利率/100)。",
      },
    ],
  },

  ko: {
    title: "마진 및 마크업 계산기",
    short: "이익, 이익률 %, 마크업 %를 계산하거나 목표 마진을 달성할 판매가를 역산합니다.",
    description:
      "무료 마진/마크업 계산기. 원가와 매출을 입력하면 이익, 매출총이익률, 마크업률을 계산합니다. 또는 원가와 목표 마진/마크업으로부터 필요한 판매가를 역산할 수 있습니다.",
    keywords: [
      "마진 계산기",
      "마크업 계산기",
      "매출총이익률",
      "판매가 계산",
      "가격 책정",
      "마진과 마크업 차이",
      "이익률",
    ],
    inputs: {
      mode: { label: "모드", help: "원가+매출로 마진 계산 또는 목표 마진/마크업으로 판매가 역산." },
      cost: { label: "원가 ($)", help: "매출원가 또는 단위 생산원가." },
      revenue: { label: "매출 / 판매가 ($)", help: "판매 가격. 마진 계산 모드에서 사용." },
      marginPercent: { label: "목표 마진 (%)", help: "매출 대비 목표 이익률." },
      markupPercent: { label: "목표 마크업 (%)", help: "원가 대비 목표 마크업률." },
    },
    outputs: {
      cost: { label: "원가", help: "원가 (참고용)." },
      revenue: { label: "판매가", help: "역산되거나 입력된 판매가." },
      profit: { label: "이익", help: "매출에서 원가를 뺀 값(매출총이익)." },
      profitMarginPercent: { label: "이익률 %", help: "이익 / 매출 × 100." },
      markupPercent: { label: "마크업 %", help: "이익 / 원가 × 100." },
    },
    errors: {
      revenuePositive: "마진을 계산할 때 매출은 0보다 커야 합니다.",
      marginBelow100: "목표 마진은 100% 미만이어야 합니다.",
      costRange: "원가는 0 ~ 1,000,000,000 사이여야 합니다.",
    },
    options: {
      mode: {
        "compute-margin": "원가+매출로 마진 계산",
        "compute-revenue-from-margin": "목표 마진으로 판매가 계산",
        "compute-revenue-from-markup": "목표 마크업으로 판매가 계산",
      },
    },
    faq: [
      {
        q: "마진과 마크업의 차이는?",
        a: "마진은 매출 대비, 마크업은 원가 대비 이익 비율입니다. 동일한 이익 금액일 때 마크업률이 마진율보다 큽니다(예: 마크업 50% = 마진 33.3%).",
      },
      {
        q: "마진 40%를 위한 가격은?",
        a: "「목표 마진으로 판매가 계산」 모드에서 40 입력. 공식: 판매가 = 원가 / (1 − 마진/100).",
      },
    ],
  },

  hi: {
    title: "मार्जिन और मार्कअप कैलकुलेटर",
    short: "लाभ, लाभ मार्जिन % और मार्कअप % की गणना करें या लक्ष्य मार्जिन के लिए विक्रय मूल्य निकालें।",
    description:
      "मुफ़्त मार्जिन और मार्कअप कैलकुलेटर। लागत और राजस्व दर्ज करके लाभ, सकल मार्जिन % और मार्कअप % प्राप्त करें। या लागत और लक्ष्य मार्जिन/मार्कअप से आवश्यक विक्रय मूल्य निकालें।",
    keywords: [
      "मार्जिन कैलकुलेटर",
      "मार्कअप कैलकुलेटर",
      "लाभ मार्जिन",
      "सकल मार्जिन",
      "विक्रय मूल्य",
      "मूल्य निर्धारण",
      "मार्जिन और मार्कअप",
    ],
    inputs: {
      mode: { label: "मोड", help: "लागत + राजस्व से मार्जिन की गणना करें या लक्ष्य से विक्रय मूल्य निकालें।" },
      cost: { label: "लागत ($)", help: "बेची गई वस्तु की लागत या प्रति इकाई उत्पादन लागत।" },
      revenue: { label: "राजस्व / विक्रय मूल्य ($)", help: "विक्रय मूल्य। मार्जिन की गणना के मोड में आवश्यक।" },
      marginPercent: { label: "लक्ष्य मार्जिन (%)", help: "राजस्व का प्रतिशत के रूप में वांछित लाभ मार्जिन।" },
      markupPercent: { label: "लक्ष्य मार्कअप (%)", help: "लागत का प्रतिशत के रूप में वांछित मार्कअप।" },
    },
    outputs: {
      cost: { label: "लागत", help: "लागत (संदर्भ हेतु)।" },
      revenue: { label: "विक्रय मूल्य", help: "निकाला गया या दर्ज किया गया विक्रय मूल्य।" },
      profit: { label: "लाभ", help: "राजस्व में से लागत घटाकर (सकल लाभ)।" },
      profitMarginPercent: { label: "लाभ मार्जिन %", help: "लाभ ÷ राजस्व × 100।" },
      markupPercent: { label: "मार्कअप %", help: "लाभ ÷ लागत × 100।" },
    },
    errors: {
      revenuePositive: "मार्जिन की गणना करते समय राजस्व 0 से अधिक होना चाहिए।",
      marginBelow100: "लक्ष्य मार्जिन 100% से कम होना चाहिए।",
      costRange: "लागत 0 से 1,000,000,000 के बीच होनी चाहिए।",
    },
    options: {
      mode: {
        "compute-margin": "लागत + राजस्व से मार्जिन की गणना",
        "compute-revenue-from-margin": "लक्ष्य मार्जिन से विक्रय मूल्य",
        "compute-revenue-from-markup": "लक्ष्य मार्कअप से विक्रय मूल्य",
      },
    },
    faq: [
      {
        q: "मार्जिन और मार्कअप में अंतर?",
        a: "मार्जिन राजस्व के सापेक्ष लाभ है; मार्कअप लागत के सापेक्ष लाभ है। समान लाभ राशि पर मार्कअप % मार्जिन % से अधिक होता है (जैसे मार्कअप 50% = मार्जिन 33.3%)।",
      },
      {
        q: "40% मार्जिन के लिए मूल्य कैसे तय करें?",
        a: "मोड «लक्ष्य मार्जिन से विक्रय मूल्य» चुनें और 40 दर्ज करें। सूत्र: विक्रय मूल्य = लागत / (1 − मार्जिन/100)।",
      },
    ],
  },
};

export default i18n;
