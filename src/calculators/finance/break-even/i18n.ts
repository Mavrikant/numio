import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Break-Even Calculator",
    short: "Find the sales volume where total revenue equals total cost — your break-even point.",
    description:
      "Free break-even calculator using the standard cost-volume-profit (CVP) formula. Enter your fixed costs, variable cost per unit, and selling price to see how many units you must sell to cover all costs, along with contribution margin per unit and as a percentage of price.",
    keywords: [
      "break-even calculator",
      "break-even analysis",
      "contribution margin",
      "CVP analysis",
      "fixed cost calculator",
      "business profitability",
      "break-even point",
    ],
    inputs: {
      fixedCosts: { label: "Fixed Costs ($)", help: "Total costs that do not change with output — rent, salaries, insurance, depreciation." },
      variableCostPerUnit: { label: "Variable Cost per Unit ($)", help: "Cost that varies with each unit produced — materials, direct labor, shipping." },
      pricePerUnit: { label: "Selling Price per Unit ($)", help: "Price charged to the customer for each unit. Must exceed the variable cost per unit." },
    },
    outputs: {
      breakEvenUnits: { label: "Break-Even Units", help: "Number of units you must sell so that total revenue exactly equals total cost." },
      breakEvenRevenue: { label: "Break-Even Revenue", help: "Sales dollars required to cover all fixed and variable costs (break-even units × price)." },
      contributionMarginPerUnit: { label: "Contribution Margin per Unit", help: "Price minus variable cost — the amount each unit contributes toward fixed costs and profit." },
      contributionMarginPercent: { label: "Contribution Margin %", help: "Contribution margin as a percentage of selling price." },
    },
    errors: {
      priceMustExceedVariableCost: "Selling price must be greater than the variable cost per unit.",
      fixedCostsRange: "Fixed costs must be between $0 and $1,000,000,000.",
      pricePositive: "Selling price must be greater than zero.",
    },
    faq: [
      {
        q: "What is the break-even point?",
        a: "The break-even point is the sales volume at which total revenue exactly equals total cost (fixed + variable). Below this volume you lose money; above it you make a profit.",
      },
      {
        q: "What is contribution margin?",
        a: "Contribution margin per unit is the selling price minus the variable cost per unit. It represents the amount each unit sold contributes toward covering fixed costs — and, after the break-even point, toward profit.",
      },
      {
        q: "Why must price exceed variable cost?",
        a: "If the price is less than or equal to the variable cost, every unit sold loses money on the variable side, so no quantity of sales can ever cover the fixed costs. The break-even point is mathematically undefined.",
      },
      {
        q: "Does this include taxes?",
        a: "This calculator computes the operating (pre-tax) break-even point. To find the units required for a target after-tax profit, divide the target pre-tax profit (target after-tax profit / (1 − tax rate)) by the contribution margin per unit and add it to break-even units.",
      },
    ],
  },
  pt: {
    title: "Break-Even Calculator",
    short: "Find the sales volume where total revenue equals total cost — your break-even point.",
    description:
      "Free break-even calculator using the standard cost-volume-profit (CVP) formula. Enter your fixed costs, variable cost per unit, and selling price to see how many units you must sell to cover all costs, along with contribution margin per unit and as a percentage of price.",
    keywords: [
      "break-even calculator",
      "break-even analysis",
      "contribution margin",
      "CVP analysis",
      "fixed cost calculator",
      "business profitability",
      "break-even point",
    ],
    inputs: {
      fixedCosts: { label: "Fixed Costs ($)", help: "Total costs that do not change with output — rent, salaries, insurance, depreciation." },
      variableCostPerUnit: { label: "Variable Cost per Unit ($)", help: "Cost that varies with each unit produced — materials, direct labor, shipping." },
      pricePerUnit: { label: "Selling Price per Unit ($)", help: "Price charged to the customer for each unit. Must exceed the variable cost per unit." },
    },
    outputs: {
      breakEvenUnits: { label: "Break-Even Units", help: "Number of units you must sell so that total revenue exactly equals total cost." },
      breakEvenRevenue: { label: "Break-Even Revenue", help: "Sales dollars required to cover all fixed and variable costs (break-even units × price)." },
      contributionMarginPerUnit: { label: "Contribution Margin per Unit", help: "Price minus variable cost — the amount each unit contributes toward fixed costs and profit." },
      contributionMarginPercent: { label: "Contribution Margin %", help: "Contribution margin as a percentage of selling price." },
    },
    errors: {
      priceMustExceedVariableCost: "Selling price must be greater than the variable cost per unit.",
      fixedCostsRange: "Fixed costs must be between $0 and $1,000,000,000.",
      pricePositive: "Selling price must be greater than zero.",
    },
    faq: [
      {
        q: "What is the break-even point?",
        a: "The break-even point is the sales volume at which total revenue exactly equals total cost (fixed + variable). Below this volume you lose money; above it you make a profit.",
      },
      {
        q: "What is contribution margin?",
        a: "Contribution margin per unit is the selling price minus the variable cost per unit. It represents the amount each unit sold contributes toward covering fixed costs — and, after the break-even point, toward profit.",
      },
      {
        q: "Why must price exceed variable cost?",
        a: "If the price is less than or equal to the variable cost, every unit sold loses money on the variable side, so no quantity of sales can ever cover the fixed costs. The break-even point is mathematically undefined.",
      },
      {
        q: "Does this include taxes?",
        a: "This calculator computes the operating (pre-tax) break-even point. To find the units required for a target after-tax profit, divide the target pre-tax profit (target after-tax profit / (1 − tax rate)) by the contribution margin per unit and add it to break-even units.",
      },
    ],
  },
  id: {
    title: "Break-Even Calculator",
    short: "Find the sales volume where total revenue equals total cost — your break-even point.",
    description:
      "Free break-even calculator using the standard cost-volume-profit (CVP) formula. Enter your fixed costs, variable cost per unit, and selling price to see how many units you must sell to cover all costs, along with contribution margin per unit and as a percentage of price.",
    keywords: [
      "break-even calculator",
      "break-even analysis",
      "contribution margin",
      "CVP analysis",
      "fixed cost calculator",
      "business profitability",
      "break-even point",
    ],
    inputs: {
      fixedCosts: { label: "Fixed Costs ($)", help: "Total costs that do not change with output — rent, salaries, insurance, depreciation." },
      variableCostPerUnit: { label: "Variable Cost per Unit ($)", help: "Cost that varies with each unit produced — materials, direct labor, shipping." },
      pricePerUnit: { label: "Selling Price per Unit ($)", help: "Price charged to the customer for each unit. Must exceed the variable cost per unit." },
    },
    outputs: {
      breakEvenUnits: { label: "Break-Even Units", help: "Number of units you must sell so that total revenue exactly equals total cost." },
      breakEvenRevenue: { label: "Break-Even Revenue", help: "Sales dollars required to cover all fixed and variable costs (break-even units × price)." },
      contributionMarginPerUnit: { label: "Contribution Margin per Unit", help: "Price minus variable cost — the amount each unit contributes toward fixed costs and profit." },
      contributionMarginPercent: { label: "Contribution Margin %", help: "Contribution margin as a percentage of selling price." },
    },
    errors: {
      priceMustExceedVariableCost: "Selling price must be greater than the variable cost per unit.",
      fixedCostsRange: "Fixed costs must be between $0 and $1,000,000,000.",
      pricePositive: "Selling price must be greater than zero.",
    },
    faq: [
      {
        q: "What is the break-even point?",
        a: "The break-even point is the sales volume at which total revenue exactly equals total cost (fixed + variable). Below this volume you lose money; above it you make a profit.",
      },
      {
        q: "What is contribution margin?",
        a: "Contribution margin per unit is the selling price minus the variable cost per unit. It represents the amount each unit sold contributes toward covering fixed costs — and, after the break-even point, toward profit.",
      },
      {
        q: "Why must price exceed variable cost?",
        a: "If the price is less than or equal to the variable cost, every unit sold loses money on the variable side, so no quantity of sales can ever cover the fixed costs. The break-even point is mathematically undefined.",
      },
      {
        q: "Does this include taxes?",
        a: "This calculator computes the operating (pre-tax) break-even point. To find the units required for a target after-tax profit, divide the target pre-tax profit (target after-tax profit / (1 − tax rate)) by the contribution margin per unit and add it to break-even units.",
      },
    ],
  },


  tr: {
    title: "Başabaş Noktası Hesaplayıcısı",
    short: "Toplam gelirin toplam maliyete eşit olduğu satış hacmini — başabaş noktanızı — bulun.",
    description:
      "Standart maliyet-hacim-kâr (CVP) formülünü kullanan ücretsiz başabaş hesaplayıcısı. Sabit maliyetleriniz, birim başına değişken maliyet ve satış fiyatınızı girerek tüm maliyetleri karşılamak için kaç birim satmanız gerektiğini, birim başına katkı payını ve fiyata oranını görün.",
    keywords: [
      "başabaş noktası hesaplama",
      "başabaş analizi",
      "katkı payı",
      "maliyet hacim kâr analizi",
      "sabit maliyet",
      "kâra geçiş noktası",
      "işletme hesaplama",
    ],
    inputs: {
      fixedCosts: { label: "Sabit Maliyetler ($)", help: "Üretim hacminden bağımsız maliyetler — kira, maaşlar, sigorta, amortisman." },
      variableCostPerUnit: { label: "Birim Değişken Maliyet ($)", help: "Her üretilen birimle değişen maliyet — hammadde, direkt işçilik, kargo." },
      pricePerUnit: { label: "Birim Satış Fiyatı ($)", help: "Müşteriye uygulanan birim fiyat. Değişken birim maliyetten yüksek olmalıdır." },
    },
    outputs: {
      breakEvenUnits: { label: "Başabaş Birim Sayısı", help: "Toplam gelirin toplam maliyete eşit olması için satılması gereken birim sayısı." },
      breakEvenRevenue: { label: "Başabaş Geliri", help: "Tüm sabit ve değişken maliyetleri karşılamak için gerekli satış cirosu (birim × fiyat)." },
      contributionMarginPerUnit: { label: "Birim Katkı Payı", help: "Fiyattan değişken maliyetin çıkarılmasıyla bulunur — her birimin sabit maliyetlere ve kâra katkısı." },
      contributionMarginPercent: { label: "Katkı Payı %", help: "Katkı payının satış fiyatına oranı." },
    },
    errors: {
      priceMustExceedVariableCost: "Satış fiyatı, birim değişken maliyetten büyük olmalıdır.",
      fixedCostsRange: "Sabit maliyetler 0 ile 1.000.000.000 arasında olmalıdır.",
      pricePositive: "Satış fiyatı sıfırdan büyük olmalıdır.",
    },
    faq: [
      {
        q: "Başabaş noktası nedir?",
        a: "Başabaş noktası, toplam gelirin toplam maliyete (sabit + değişken) tam olarak eşit olduğu satış hacmidir. Altında zarar, üstünde kâr edilir.",
      },
      {
        q: "Katkı payı nedir?",
        a: "Birim katkı payı, satış fiyatından birim değişken maliyetin çıkarılmasıyla bulunur. Her birimin önce sabit maliyetleri karşılamaya, başabaş aşıldıktan sonra kâra katkısını gösterir.",
      },
      {
        q: "Fiyat neden değişken maliyetten yüksek olmalı?",
        a: "Fiyat değişken maliyete eşit veya altındaysa her satılan birim değişken tarafta zarar üretir; hiçbir satış hacmi sabit maliyeti karşılayamaz, başabaş matematiksel olarak tanımsızdır.",
      },
    ],
  },

  de: {
    title: "Break-Even-Rechner",
    short: "Berechnen Sie das Verkaufsvolumen, bei dem Umsatz und Gesamtkosten übereinstimmen.",
    description:
      "Kostenloser Break-Even-Rechner mit der Standard-Deckungsbeitragsformel. Geben Sie Fixkosten, variable Stückkosten und Verkaufspreis ein, um zu sehen, wie viele Einheiten Sie verkaufen müssen, um alle Kosten zu decken — inklusive Deckungsbeitrag pro Stück und in Prozent.",
    keywords: [
      "Break-Even-Rechner",
      "Gewinnschwelle berechnen",
      "Deckungsbeitrag",
      "Fixkostenanalyse",
      "Stückdeckungsbeitrag",
      "Break-Even-Analyse",
      "Kostenrechnung",
    ],
    inputs: {
      fixedCosts: { label: "Fixkosten ($)", help: "Kosten, die nicht von der Stückzahl abhängen — Miete, Gehälter, Versicherung, Abschreibung." },
      variableCostPerUnit: { label: "Variable Kosten pro Stück ($)", help: "Kosten, die mit jeder produzierten Einheit anfallen — Material, direkte Arbeit, Versand." },
      pricePerUnit: { label: "Verkaufspreis pro Stück ($)", help: "Preis pro Einheit. Muss höher sein als die variablen Stückkosten." },
    },
    outputs: {
      breakEvenUnits: { label: "Break-Even-Menge", help: "Anzahl der Einheiten, die verkauft werden müssen, damit der Umsatz die Gesamtkosten exakt deckt." },
      breakEvenRevenue: { label: "Break-Even-Umsatz", help: "Erforderlicher Umsatz, um alle fixen und variablen Kosten zu decken." },
      contributionMarginPerUnit: { label: "Deckungsbeitrag pro Stück", help: "Preis minus variable Stückkosten — Beitrag jeder Einheit zu Fixkosten und Gewinn." },
      contributionMarginPercent: { label: "Deckungsbeitragsquote %", help: "Deckungsbeitrag als Prozentsatz des Verkaufspreises." },
    },
    errors: {
      priceMustExceedVariableCost: "Der Verkaufspreis muss höher sein als die variablen Stückkosten.",
      fixedCostsRange: "Fixkosten müssen zwischen 0 und 1.000.000.000 liegen.",
      pricePositive: "Der Verkaufspreis muss größer als null sein.",
    },
    faq: [
      {
        q: "Was ist die Gewinnschwelle?",
        a: "Die Gewinnschwelle (Break-Even-Point) ist die Verkaufsmenge, bei der der Umsatz die Gesamtkosten exakt deckt. Darunter entsteht Verlust, darüber Gewinn.",
      },
      {
        q: "Was ist der Deckungsbeitrag?",
        a: "Der Stückdeckungsbeitrag ist der Verkaufspreis abzüglich der variablen Stückkosten. Er zeigt, wie viel jede verkaufte Einheit zur Deckung der Fixkosten und — nach Erreichen der Gewinnschwelle — zum Gewinn beiträgt.",
      },
    ],
  },

  fr: {
    title: "Calculateur du Seuil de Rentabilité",
    short: "Trouvez le volume de ventes où le chiffre d'affaires couvre exactement vos coûts.",
    description:
      "Calculateur gratuit du seuil de rentabilité (point mort) basé sur la formule coût-volume-profit. Saisissez vos coûts fixes, le coût variable unitaire et le prix de vente pour connaître la quantité à vendre pour couvrir tous les coûts, ainsi que la marge sur coût variable.",
    keywords: [
      "calculateur seuil de rentabilité",
      "point mort",
      "marge sur coût variable",
      "analyse CVP",
      "coût fixe",
      "rentabilité entreprise",
      "break-even français",
    ],
    inputs: {
      fixedCosts: { label: "Coûts fixes ($)", help: "Coûts indépendants du volume — loyer, salaires, assurances, amortissements." },
      variableCostPerUnit: { label: "Coût variable unitaire ($)", help: "Coût qui varie avec chaque unité produite — matières, main-d'œuvre directe, expédition." },
      pricePerUnit: { label: "Prix de vente unitaire ($)", help: "Prix facturé au client. Doit être supérieur au coût variable unitaire." },
    },
    outputs: {
      breakEvenUnits: { label: "Quantité au seuil", help: "Nombre d'unités à vendre pour que le chiffre d'affaires couvre exactement les coûts totaux." },
      breakEvenRevenue: { label: "Chiffre d'affaires au seuil", help: "Chiffre d'affaires nécessaire pour couvrir tous les coûts fixes et variables." },
      contributionMarginPerUnit: { label: "Marge sur coût variable unitaire", help: "Prix moins coût variable — contribution de chaque unité aux coûts fixes et au profit." },
      contributionMarginPercent: { label: "Taux de marge %", help: "Marge sur coût variable en pourcentage du prix de vente." },
    },
    errors: {
      priceMustExceedVariableCost: "Le prix de vente doit être supérieur au coût variable unitaire.",
      fixedCostsRange: "Les coûts fixes doivent être compris entre 0 et 1 000 000 000.",
      pricePositive: "Le prix de vente doit être strictement positif.",
    },
    faq: [
      {
        q: "Qu'est-ce que le seuil de rentabilité ?",
        a: "C'est le volume de ventes pour lequel le chiffre d'affaires couvre exactement la totalité des coûts (fixes + variables). En dessous on perd de l'argent, au-dessus on dégage un bénéfice.",
      },
      {
        q: "Qu'est-ce que la marge sur coût variable ?",
        a: "C'est le prix de vente diminué du coût variable unitaire. Elle représente la contribution de chaque unité à la couverture des coûts fixes puis, au-delà du seuil, au profit.",
      },
    ],
  },

  es: {
    title: "Calculadora de Punto de Equilibrio",
    short: "Calcula el volumen de ventas en el que los ingresos igualan a los costes totales.",
    description:
      "Calculadora gratuita de punto de equilibrio basada en el modelo coste-volumen-utilidad (CVP). Introduce los costes fijos, el coste variable unitario y el precio de venta para obtener las unidades necesarias y el margen de contribución.",
    keywords: [
      "punto de equilibrio",
      "umbral de rentabilidad",
      "margen de contribución",
      "análisis CVP",
      "coste fijo",
      "calculadora empresa",
      "break-even",
    ],
    inputs: {
      fixedCosts: { label: "Costes fijos ($)", help: "Costes que no dependen del volumen — alquiler, salarios, seguros, amortizaciones." },
      variableCostPerUnit: { label: "Coste variable por unidad ($)", help: "Coste que varía con cada unidad producida — materias primas, mano de obra directa, envío." },
      pricePerUnit: { label: "Precio de venta por unidad ($)", help: "Precio cobrado al cliente. Debe superar al coste variable unitario." },
    },
    outputs: {
      breakEvenUnits: { label: "Unidades de equilibrio", help: "Unidades que hay que vender para que los ingresos cubran exactamente los costes totales." },
      breakEvenRevenue: { label: "Ingresos de equilibrio", help: "Cifra de ventas necesaria para cubrir todos los costes fijos y variables." },
      contributionMarginPerUnit: { label: "Margen de contribución unitario", help: "Precio menos coste variable — contribución de cada unidad a los costes fijos y al beneficio." },
      contributionMarginPercent: { label: "Margen de contribución %", help: "Margen de contribución como porcentaje del precio de venta." },
    },
    errors: {
      priceMustExceedVariableCost: "El precio de venta debe ser mayor que el coste variable unitario.",
      fixedCostsRange: "Los costes fijos deben estar entre 0 y 1.000.000.000.",
      pricePositive: "El precio de venta debe ser mayor que cero.",
    },
    faq: [
      {
        q: "¿Qué es el punto de equilibrio?",
        a: "Es el volumen de ventas en el que los ingresos cubren exactamente la totalidad de los costes (fijos + variables). Por debajo se pierde dinero y por encima se obtiene beneficio.",
      },
      {
        q: "¿Qué es el margen de contribución?",
        a: "Es el precio de venta menos el coste variable unitario. Mide la aportación de cada unidad a la cobertura de los costes fijos y, una vez alcanzado el equilibrio, al beneficio.",
      },
    ],
  },

  it: {
    title: "Calcolatore Punto di Pareggio",
    short: "Calcola il volume di vendite in cui i ricavi coprono esattamente i costi totali.",
    description:
      "Calcolatore gratuito del punto di pareggio (break-even) basato sull'analisi costi-volumi-risultati. Inserisci costi fissi, costo variabile unitario e prezzo di vendita per ottenere la quantità di pareggio e il margine di contribuzione.",
    keywords: [
      "punto di pareggio",
      "break-even italiano",
      "margine di contribuzione",
      "analisi costi volumi",
      "costi fissi",
      "calcolatore impresa",
      "BEP",
    ],
    inputs: {
      fixedCosts: { label: "Costi fissi ($)", help: "Costi indipendenti dal volume — affitto, stipendi, assicurazioni, ammortamenti." },
      variableCostPerUnit: { label: "Costo variabile unitario ($)", help: "Costo che varia con ogni unità prodotta — materiali, manodopera diretta, spedizione." },
      pricePerUnit: { label: "Prezzo di vendita unitario ($)", help: "Prezzo applicato al cliente. Deve essere superiore al costo variabile unitario." },
    },
    outputs: {
      breakEvenUnits: { label: "Unità di pareggio", help: "Numero di unità da vendere perché i ricavi coprano esattamente i costi totali." },
      breakEvenRevenue: { label: "Ricavi di pareggio", help: "Fatturato necessario per coprire tutti i costi fissi e variabili." },
      contributionMarginPerUnit: { label: "Margine di contribuzione unitario", help: "Prezzo meno costo variabile — contributo di ogni unità ai costi fissi e al profitto." },
      contributionMarginPercent: { label: "Margine di contribuzione %", help: "Margine di contribuzione in percentuale del prezzo di vendita." },
    },
    errors: {
      priceMustExceedVariableCost: "Il prezzo di vendita deve essere superiore al costo variabile unitario.",
      fixedCostsRange: "I costi fissi devono essere compresi tra 0 e 1.000.000.000.",
      pricePositive: "Il prezzo di vendita deve essere maggiore di zero.",
    },
    faq: [
      {
        q: "Cos'è il punto di pareggio?",
        a: "È il volume di vendite in cui i ricavi coprono esattamente la totalità dei costi (fissi + variabili). Sotto si genera una perdita, sopra un utile.",
      },
      {
        q: "Cos'è il margine di contribuzione?",
        a: "È il prezzo di vendita meno il costo variabile unitario. Indica il contributo di ogni unità alla copertura dei costi fissi e, oltre il punto di pareggio, al profitto.",
      },
    ],
  },

  ar: {
    title: "حاسبة نقطة التعادل",
    short: "احسب حجم المبيعات الذي تتساوى عنده الإيرادات مع التكاليف الإجمالية.",
    description:
      "حاسبة مجانية لنقطة التعادل تعتمد على نموذج التكلفة والحجم والربح (CVP). أدخل التكاليف الثابتة، التكلفة المتغيرة لكل وحدة، وسعر البيع لمعرفة عدد الوحدات اللازم بيعها لتغطية كل التكاليف وهامش المساهمة.",
    keywords: [
      "حاسبة نقطة التعادل",
      "تحليل التعادل",
      "هامش المساهمة",
      "تحليل التكلفة والحجم",
      "تكاليف ثابتة",
      "ربحية الأعمال",
      "نقطة التوازن",
    ],
    inputs: {
      fixedCosts: { label: "التكاليف الثابتة ($)", help: "تكاليف لا تتغير مع حجم الإنتاج — الإيجار، الرواتب، التأمين، الإهلاك." },
      variableCostPerUnit: { label: "التكلفة المتغيرة لكل وحدة ($)", help: "تكلفة تتغير مع كل وحدة منتجة — المواد، العمالة المباشرة، الشحن." },
      pricePerUnit: { label: "سعر البيع للوحدة ($)", help: "السعر المفروض على العميل. يجب أن يكون أعلى من التكلفة المتغيرة للوحدة." },
    },
    outputs: {
      breakEvenUnits: { label: "وحدات التعادل", help: "عدد الوحدات الواجب بيعها لتتساوى الإيرادات مع التكاليف الإجمالية." },
      breakEvenRevenue: { label: "إيرادات التعادل", help: "حجم المبيعات اللازم لتغطية كل التكاليف الثابتة والمتغيرة." },
      contributionMarginPerUnit: { label: "هامش المساهمة لكل وحدة", help: "السعر ناقص التكلفة المتغيرة — مساهمة كل وحدة في تغطية التكاليف الثابتة والأرباح." },
      contributionMarginPercent: { label: "هامش المساهمة %", help: "هامش المساهمة كنسبة مئوية من سعر البيع." },
    },
    errors: {
      priceMustExceedVariableCost: "يجب أن يكون سعر البيع أعلى من التكلفة المتغيرة لكل وحدة.",
      fixedCostsRange: "يجب أن تكون التكاليف الثابتة بين 0 و1,000,000,000.",
      pricePositive: "يجب أن يكون سعر البيع أكبر من صفر.",
    },
    faq: [
      {
        q: "ما هي نقطة التعادل؟",
        a: "هي حجم المبيعات الذي تتساوى عنده الإيرادات مع التكاليف الإجمالية (الثابتة + المتغيرة). تحتها تتحقق خسارة، فوقها يتحقق ربح.",
      },
      {
        q: "ما هو هامش المساهمة؟",
        a: "هو سعر البيع مطروحاً منه التكلفة المتغيرة للوحدة. يعبّر عن مساهمة كل وحدة مباعة في تغطية التكاليف الثابتة، ومن ثم في الربح بعد تجاوز نقطة التعادل.",
      },
    ],
  },

  ru: {
    title: "Калькулятор точки безубыточности",
    short: "Найдите объём продаж, при котором выручка равна общим затратам.",
    description:
      "Бесплатный калькулятор точки безубыточности по модели «затраты-объём-прибыль» (CVP). Введите постоянные затраты, переменные затраты на единицу и цену продажи — получите количество единиц для покрытия всех затрат и маржинальный доход.",
    keywords: [
      "точка безубыточности",
      "анализ безубыточности",
      "маржинальный доход",
      "CVP анализ",
      "постоянные затраты",
      "точка окупаемости",
      "калькулятор бизнеса",
    ],
    inputs: {
      fixedCosts: { label: "Постоянные затраты ($)", help: "Затраты, не зависящие от объёма — аренда, зарплата, страховка, амортизация." },
      variableCostPerUnit: { label: "Переменные затраты на единицу ($)", help: "Затраты на каждую произведённую единицу — материалы, прямой труд, доставка." },
      pricePerUnit: { label: "Цена за единицу ($)", help: "Цена для покупателя. Должна превышать переменные затраты на единицу." },
    },
    outputs: {
      breakEvenUnits: { label: "Единиц для безубыточности", help: "Количество единиц, которое нужно продать, чтобы выручка точно покрыла общие затраты." },
      breakEvenRevenue: { label: "Выручка безубыточности", help: "Объём продаж, необходимый для покрытия всех постоянных и переменных затрат." },
      contributionMarginPerUnit: { label: "Маржинальный доход на единицу", help: "Цена минус переменные затраты — вклад каждой единицы в покрытие постоянных затрат и прибыль." },
      contributionMarginPercent: { label: "Маржинальность %", help: "Маржинальный доход в процентах от цены продажи." },
    },
    errors: {
      priceMustExceedVariableCost: "Цена продажи должна быть больше переменных затрат на единицу.",
      fixedCostsRange: "Постоянные затраты должны быть от 0 до 1 000 000 000.",
      pricePositive: "Цена должна быть больше нуля.",
    },
    faq: [
      {
        q: "Что такое точка безубыточности?",
        a: "Это объём продаж, при котором выручка точно покрывает совокупные затраты (постоянные + переменные). Ниже — убыток, выше — прибыль.",
      },
      {
        q: "Что такое маржинальный доход?",
        a: "Это цена продажи минус переменные затраты на единицу. Он показывает, сколько каждая единица вносит в покрытие постоянных затрат, а после прохождения точки безубыточности — в прибыль.",
      },
    ],
  },

  zh: {
    title: "盈亏平衡计算器",
    short: "计算收入恰好等于总成本的销售量——盈亏平衡点。",
    description:
      "免费的盈亏平衡计算器，基于本量利（CVP）公式。输入固定成本、单位变动成本和售价，即可获得覆盖全部成本所需的销售数量、每单位贡献毛益以及贡献毛益率。",
    keywords: [
      "盈亏平衡计算器",
      "本量利分析",
      "贡献毛益",
      "保本点",
      "固定成本",
      "盈亏平衡点",
      "CVP分析",
    ],
    inputs: {
      fixedCosts: { label: "固定成本 ($)", help: "不随产量变化的成本——租金、工资、保险、折旧。" },
      variableCostPerUnit: { label: "单位变动成本 ($)", help: "随每件产品变化的成本——材料、直接人工、运费。" },
      pricePerUnit: { label: "单位售价 ($)", help: "向客户收取的单价，必须高于单位变动成本。" },
    },
    outputs: {
      breakEvenUnits: { label: "盈亏平衡销量", help: "销售此数量时，总收入恰好等于总成本。" },
      breakEvenRevenue: { label: "盈亏平衡收入", help: "覆盖所有固定及变动成本所需的销售额。" },
      contributionMarginPerUnit: { label: "单位贡献毛益", help: "售价减去变动成本——每件产品对固定成本及利润的贡献。" },
      contributionMarginPercent: { label: "贡献毛益率 %", help: "贡献毛益占售价的百分比。" },
    },
    errors: {
      priceMustExceedVariableCost: "售价必须大于单位变动成本。",
      fixedCostsRange: "固定成本必须在 0 至 1,000,000,000 之间。",
      pricePositive: "售价必须大于零。",
    },
    faq: [
      {
        q: "什么是盈亏平衡点？",
        a: "盈亏平衡点是总收入与总成本（固定+变动）恰好相等的销售量。低于此点出现亏损，高于此点产生利润。",
      },
      {
        q: "什么是贡献毛益？",
        a: "单位贡献毛益是售价减去单位变动成本。它代表每件销售产品对覆盖固定成本以及超过保本点后利润的贡献。",
      },
    ],
  },

  ja: {
    title: "損益分岐点計算機",
    short: "売上が総費用と一致する販売数量、すなわち損益分岐点を計算します。",
    description:
      "標準的なCVP（原価-数量-利益）モデルを用いた無料の損益分岐点計算機です。固定費、単位あたり変動費、販売価格を入力すると、すべてのコストを賄うのに必要な販売数量と限界利益を表示します。",
    keywords: [
      "損益分岐点計算機",
      "損益分岐点分析",
      "限界利益",
      "貢献利益",
      "固定費分析",
      "CVP分析",
      "ブレークイーブン",
    ],
    inputs: {
      fixedCosts: { label: "固定費 ($)", help: "生産量に関係なく発生する費用——家賃、給与、保険、減価償却。" },
      variableCostPerUnit: { label: "単位あたり変動費 ($)", help: "1単位ごとに発生する費用——材料費、直接労務費、配送費。" },
      pricePerUnit: { label: "単位あたり販売価格 ($)", help: "顧客に請求する単価。単位あたり変動費を上回る必要があります。" },
    },
    outputs: {
      breakEvenUnits: { label: "損益分岐販売数量", help: "売上が総費用と一致するために必要な販売数量。" },
      breakEvenRevenue: { label: "損益分岐売上高", help: "すべての固定費・変動費を賄うために必要な売上高。" },
      contributionMarginPerUnit: { label: "単位あたり限界利益", help: "販売価格から変動費を差し引いた額——各単位の固定費および利益への貢献。" },
      contributionMarginPercent: { label: "限界利益率 %", help: "限界利益が販売価格に占める割合。" },
    },
    errors: {
      priceMustExceedVariableCost: "販売価格は単位あたり変動費を上回る必要があります。",
      fixedCostsRange: "固定費は 0 から 1,000,000,000 の範囲で入力してください。",
      pricePositive: "販売価格は 0 より大きい値を入力してください。",
    },
    faq: [
      {
        q: "損益分岐点とは？",
        a: "売上高が総費用（固定費+変動費）とちょうど一致する販売数量です。下回ると赤字、上回ると黒字となります。",
      },
      {
        q: "限界利益とは？",
        a: "販売価格から単位あたり変動費を差し引いた金額です。各販売単位が固定費の回収、損益分岐点を超えてからは利益にどれだけ貢献するかを表します。",
      },
    ],
  },

  ko: {
    title: "손익분기점 계산기",
    short: "총수익과 총비용이 같아지는 판매량(손익분기점)을 계산합니다.",
    description:
      "표준 CVP(원가-조업도-이익) 모델 기반의 무료 손익분기점 계산기. 고정비, 단위 변동비, 판매 가격을 입력하면 모든 비용을 회수하기 위한 판매 수량과 공헌 이익을 확인할 수 있습니다.",
    keywords: [
      "손익분기점 계산기",
      "BEP 계산",
      "공헌이익",
      "CVP 분석",
      "고정비 분석",
      "사업 수익성",
      "손익분기 매출",
    ],
    inputs: {
      fixedCosts: { label: "고정비 ($)", help: "생산량과 무관한 비용 — 임차료, 급여, 보험, 감가상각." },
      variableCostPerUnit: { label: "단위 변동비 ($)", help: "단위마다 발생하는 비용 — 재료비, 직접 노무비, 배송비." },
      pricePerUnit: { label: "단위 판매 가격 ($)", help: "고객에게 청구하는 단가. 단위 변동비보다 커야 합니다." },
    },
    outputs: {
      breakEvenUnits: { label: "손익분기 판매량", help: "총수익이 총비용과 정확히 같아지기 위해 판매해야 하는 단위 수." },
      breakEvenRevenue: { label: "손익분기 매출", help: "모든 고정비와 변동비를 회수하는 데 필요한 매출액." },
      contributionMarginPerUnit: { label: "단위당 공헌이익", help: "판매 가격에서 변동비를 차감한 값. 각 단위가 고정비 및 이익에 기여하는 금액." },
      contributionMarginPercent: { label: "공헌이익률 %", help: "공헌이익이 판매 가격에서 차지하는 비율." },
    },
    errors: {
      priceMustExceedVariableCost: "판매 가격은 단위 변동비보다 커야 합니다.",
      fixedCostsRange: "고정비는 0 ~ 1,000,000,000 사이여야 합니다.",
      pricePositive: "판매 가격은 0보다 커야 합니다.",
    },
    faq: [
      {
        q: "손익분기점이란 무엇인가요?",
        a: "총수익이 총비용(고정비+변동비)과 정확히 같아지는 판매량입니다. 그 아래에서는 손실, 위에서는 이익이 발생합니다.",
      },
      {
        q: "공헌이익이란 무엇인가요?",
        a: "단위당 공헌이익은 판매 가격에서 단위 변동비를 차감한 금액으로, 각 판매 단위가 고정비 회수와(손익분기점 초과 후) 이익에 기여하는 정도를 보여줍니다.",
      },
    ],
  },

  hi: {
    title: "ब्रेक-ईवन कैलकुलेटर",
    short: "वह विक्रय मात्रा जानें जिस पर कुल आय कुल लागत के बराबर हो जाती है।",
    description:
      "मानक लागत-मात्रा-लाभ (CVP) सूत्र पर आधारित मुफ़्त ब्रेक-ईवन कैलकुलेटर। स्थायी लागत, प्रति इकाई परिवर्तनीय लागत और विक्रय मूल्य दर्ज करें और देखें कि सभी लागतों को कवर करने के लिए कितनी इकाइयाँ बेचनी होंगी, साथ ही योगदान मार्जिन भी।",
    keywords: [
      "ब्रेक-ईवन कैलकुलेटर",
      "ब्रेक-ईवन विश्लेषण",
      "योगदान मार्जिन",
      "CVP विश्लेषण",
      "स्थायी लागत",
      "लाभ-हानि बिंदु",
      "व्यापार गणना",
    ],
    inputs: {
      fixedCosts: { label: "स्थायी लागत ($)", help: "वे लागतें जो उत्पादन के साथ नहीं बदलतीं — किराया, वेतन, बीमा, मूल्यह्रास।" },
      variableCostPerUnit: { label: "प्रति इकाई परिवर्तनीय लागत ($)", help: "प्रत्येक उत्पादित इकाई के साथ बदलने वाली लागत — सामग्री, श्रम, परिवहन।" },
      pricePerUnit: { label: "प्रति इकाई विक्रय मूल्य ($)", help: "ग्राहक से लिया जाने वाला प्रति इकाई मूल्य। यह परिवर्तनीय लागत से अधिक होना चाहिए।" },
    },
    outputs: {
      breakEvenUnits: { label: "ब्रेक-ईवन इकाइयाँ", help: "वह इकाई संख्या जिसे बेचने पर कुल आय कुल लागत के बराबर हो जाती है।" },
      breakEvenRevenue: { label: "ब्रेक-ईवन राजस्व", help: "सभी स्थायी और परिवर्तनीय लागतों को कवर करने के लिए आवश्यक बिक्री राशि।" },
      contributionMarginPerUnit: { label: "प्रति इकाई योगदान मार्जिन", help: "विक्रय मूल्य में से परिवर्तनीय लागत घटाकर मिलने वाली राशि — स्थायी लागत और लाभ में प्रत्येक इकाई का योगदान।" },
      contributionMarginPercent: { label: "योगदान मार्जिन %", help: "विक्रय मूल्य में योगदान मार्जिन का प्रतिशत।" },
    },
    errors: {
      priceMustExceedVariableCost: "विक्रय मूल्य प्रति इकाई परिवर्तनीय लागत से अधिक होना चाहिए।",
      fixedCostsRange: "स्थायी लागत 0 से 1,000,000,000 के बीच होनी चाहिए।",
      pricePositive: "विक्रय मूल्य शून्य से अधिक होना चाहिए।",
    },
    faq: [
      {
        q: "ब्रेक-ईवन बिंदु क्या है?",
        a: "यह वह विक्रय मात्रा है जिस पर कुल आय कुल लागत (स्थायी + परिवर्तनीय) के ठीक बराबर हो जाती है। इससे नीचे हानि और ऊपर लाभ होता है।",
      },
      {
        q: "योगदान मार्जिन क्या है?",
        a: "प्रति इकाई योगदान मार्जिन विक्रय मूल्य में से परिवर्तनीय लागत घटाकर निकाला जाता है। यह दर्शाता है कि प्रत्येक बिकी इकाई स्थायी लागत और ब्रेक-ईवन के बाद लाभ में कितना योगदान देती है।",
      },
    ],
  },
};

export default i18n;
