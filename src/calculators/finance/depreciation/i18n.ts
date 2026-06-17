import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Depreciation Calculator",
    short: "Calculate annual depreciation, book value, and a year-by-year schedule using four standard methods.",
    description:
      "Free depreciation calculator supporting straight-line, declining-balance, double-declining-balance, and sum-of-years-digits methods. Enter the asset cost, salvage value, useful life, and method to get a complete year-by-year schedule (opening value, depreciation, closing value), total depreciation, and ending book value.",
    keywords: [
      "depreciation calculator",
      "straight line depreciation",
      "declining balance",
      "double declining",
      "sum of years digits",
      "asset depreciation schedule",
      "book value calculator",
    ],
    inputs: {
      assetCost: { label: "Asset Cost", help: "Total acquisition cost of the asset, including installation and freight." },
      salvageValue: { label: "Salvage Value", help: "Estimated value of the asset at the end of its useful life. Must not exceed asset cost." },
      usefulLife: { label: "Useful Life (years)", help: "Estimated number of years the asset will be in service." },
      method: { label: "Depreciation Method", help: "Straight-line: equal annual amounts. Declining-balance: fixed rate applied to book value. Double-declining: 2/n rate applied to book value. Sum-of-years-digits: accelerated, weighted toward early years." },
      decliningRate: { label: "Declining Rate (%)", help: "Only used by the declining-balance method. Ignored for other methods." },
    },
    outputs: {
      totalDepreciation: { label: "Total Depreciation", help: "Sum of depreciation expense across the full useful life." },
      bookValueEndOfLife: { label: "Book Value at End of Life", help: "Remaining book value after the last year of depreciation. For straight-line and sum-of-years-digits this equals the salvage value; for declining-balance methods it may differ if the salvage floor is not reached." },
      annualSchedule: { label: "Annual Schedule", help: "Year-by-year table of opening value, depreciation expense, and closing value." },
    },
    errors: {
      salvageExceedsCost: "Salvage value cannot exceed the asset cost.",
      assetCostRange: "Asset cost must be between 1 and 1,000,000,000.",
      usefulLifeRange: "Useful life must be between 1 and 100 years.",
    },
    options: {
      method: {
        "straight-line": "Straight-Line",
        "declining-balance": "Declining Balance",
        "sum-of-years-digits": "Sum-of-Years' Digits",
        "double-declining": "Double Declining Balance",
      },
    },
    faq: [
      {
        q: "Which depreciation method should I use?",
        a: "Straight-line is the simplest and most widely accepted for financial reporting. Declining-balance and double-declining-balance front-load depreciation expense and are common for assets that lose value quickly. Sum-of-years-digits is another accelerated method. For US tax purposes, follow the IRS MACRS tables in Publication 946.",
      },
      {
        q: "What is salvage value?",
        a: "Salvage value (also called residual value) is the estimated amount the asset will be worth at the end of its useful life. It limits how far the asset can be depreciated: the book value should not fall below salvage value.",
      },
      {
        q: "How does double-declining balance work?",
        a: "Double-declining balance applies a rate of 2/n (where n is useful life) to the asset's current book value each year. Because depreciation shrinks as book value shrinks, this method front-loads expense in the early years.",
      },
      {
        q: "Does this match my tax return?",
        a: "Not necessarily. Tax depreciation follows jurisdiction-specific rules (e.g., MACRS in the US, capital allowances in the UK) that use prescribed lives and conventions. This calculator illustrates the textbook formulas; consult a qualified accountant for filings.",
      },
    ],
  },
  nl: {
    title: "Afschrijving Calculator",
    short: "Bereken annual depreciation, book value, and a year-by-year schedule using four standard methods.",
    description:
      "Gratis depreciation calculator supporting straight-line, declining-balance, double-declining-balance, and sum-of-jaren-digits methods. Enter the asset cost, salvage value, useful life, and method to get a complete year-by-year schedule (opening value, depreciation, closing value), total depreciation, and ending book value.",
    keywords: [
      "depreciation calculator",
      "straight line depreciation",
      "declining balance",
      "double declining",
      "sum of jaren digits",
      "asset depreciation schedule",
      "book value calculator",
    ],
    inputs: {
      assetCost: { label: "Asset Cost", help: "Total acquisition cost of the asset, including installation and freight." },
      salvageValue: { label: "Salvage Waarde", help: "Estimated value of the asset at the end of its useful life. Must not exceed asset cost." },
      usefulLife: { label: "Useful Life (jaren)", help: "Estimated nummer of jaren the asset will be in service." },
      method: { label: "Afschrijving Method", help: "Straight-line: equal annual amounts. Declining-balance: fixed rate applied to book value. Double-declining: 2/n rate applied to book value. Sum-of-jaren-digits: accelerated, weighted toward early jaren." },
      decliningRate: { label: "Declining Rate (%)", help: "Only used by the declining-balance method. Ignored for other methods." },
    },
    outputs: {
      totalDepreciation: { label: "Total Afschrijving", help: "Sum of depreciation expense across the full useful life." },
      bookValueEndOfLife: { label: "Book Waarde at End of Life", help: "Remaining book value after the last year of depreciation. For straight-line and sum-of-jaren-digits this equals the salvage value; for declining-balance methods it may differ if the salvage floor is not reached." },
      annualSchedule: { label: "Annual Schedule", help: "Year-by-year table of opening value, depreciation expense, and closing value." },
    },
    errors: {
      salvageExceedsCost: "Salvage value cannot exceed the asset cost.",
      assetCostRange: "Asset cost must be between 1 and 1,000,000,000.",
      usefulLifeRange: "Useful life must be between 1 and 100 jaren.",
    },
    options: {
      method: {
        "straight-line": "Straight-Line",
        "declining-balance": "Declining Balance",
        "sum-of-jaren-digits": "Sum-of-Years' Digits",
        "double-declining": "Double Declining Balance",
      },
    },
    faq: [
      {
        q: "Which depreciation method should I use?",
        a: "Straight-line is the simplest and most widely accepted for financial reporting. Declining-balance and double-declining-balance front-load depreciation expense and are common for assets that lose value quickly. Sum-of-jaren-digits is another accelerated method. For US tax purposes, follow the IRS MACRS tables in Publication 946.",
      },
      {
        q: "What is salvage value?",
        a: "Salvage value (also called residual value) is the estimated amount the asset will be worth at the end of its useful life. It limits how far the asset can be depreciated: the book value should not fall below salvage value.",
      },
      {
        q: "How does double-declining balance work?",
        a: "Double-declining balance applies a rate of 2/n (where n is useful life) to the asset's current book value each year. Because depreciation shrinks as book value shrinks, this method front-loads expense in the early jaren.",
      },
      {
        q: "Does this match my tax return?",
        a: "Not necessarily. Belasting depreciation follows jurisdiction-specific rules (e.g., MACRS in the US, capital allowances in the UK) that use prescribed lives and conventions. This calculator illustrates the tekstbook formulas; consult a qualified accountant for filings.",
      },
    ],
  },

  pl: {
    title: "Deprecjacja Kalkulator",
    short: "Oblicz annual depreciation, book value, and a year-by-year schedule using four standard methods.",
    description:
      "Darmowy depreciation kalkulator supporting straight-line, declining-balance, double-declining-balance, and sum-of-lat-digits methods. Enter the asset cost, salvage value, useful life, and method to get a complete year-by-year schedule (opening value, depreciation, closing value), total depreciation, and ending book value.",
    keywords: [
      "depreciation kalkulator",
      "straight line depreciation",
      "declining balance",
      "double declining",
      "sum of lat digits",
      "asset depreciation schedule",
      "book value kalkulator",
    ],
    inputs: {
      assetCost: { label: "Asset Cost", help: "Total acquisition cost of the asset, including installation and freight." },
      salvageValue: { label: "Salvage Wartość", help: "Estimated value of the asset at the end of its useful life. Must not exceed asset cost." },
      usefulLife: { label: "Useful Life (lat)", help: "Estimated liczba of lat the asset will be in service." },
      method: { label: "Deprecjacja Method", help: "Straight-line: equal annual amounts. Declining-balance: fixed rate applied to book value. Double-declining: 2/n rate applied to book value. Sum-of-lat-digits: accelerated, weighted toward early lat." },
      decliningRate: { label: "Declining Rate (%)", help: "Only used by the declining-balance method. Ignored for other methods." },
    },
    outputs: {
      totalDepreciation: { label: "Total Deprecjacja", help: "Sum of depreciation expense across the full useful life." },
      bookValueEndOfLife: { label: "Book Wartość at End of Life", help: "Remaining book value after the last year of depreciation. For straight-line and sum-of-lat-digits this equals the salvage value; for declining-balance methods it may differ if the salvage floor is not reached." },
      annualSchedule: { label: "Annual Schedule", help: "Year-by-year table of opening value, depreciation expense, and closing value." },
    },
    errors: {
      salvageExceedsCost: "Salvage value cannot exceed the asset cost.",
      assetCostRange: "Asset cost must be between 1 and 1,000,000,000.",
      usefulLifeRange: "Useful life must be between 1 and 100 lat.",
    },
    options: {
      method: {
        "straight-line": "Straight-Line",
        "declining-balance": "Declining Balance",
        "sum-of-lat-digits": "Sum-of-Years' Digits",
        "double-declining": "Double Declining Balance",
      },
    },
    faq: [
      {
        q: "Which depreciation method should I use?",
        a: "Straight-line is the simplest and most widely accepted for financial reporting. Declining-balance and double-declining-balance front-load depreciation expense and are common for assets that lose value quickly. Sum-of-lat-digits is another accelerated method. For US tax purposes, follow the IRS MACRS tables in Publication 946.",
      },
      {
        q: "What is salvage value?",
        a: "Salvage value (also called residual value) is the estimated amount the asset will be worth at the end of its useful life. It limits how far the asset can be depreciated: the book value should not fall below salvage value.",
      },
      {
        q: "How does double-declining balance work?",
        a: "Double-declining balance applies a rate of 2/n (where n is useful life) to the asset's current book value each year. Because depreciation shrinks as book value shrinks, this method front-loads expense in the early lat.",
      },
      {
        q: "Does this match my tax return?",
        a: "Not necessarily. Podatek depreciation follows jurisdiction-specific rules (e.g., MACRS in the US, capital allowances in the UK) that use prescribed lives and conventions. This kalkulator illustrates the tekstbook formulas; consult a qualified accountant for filings.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Depreciação",
    short: "Calcule a depreciação de ativos pelos métodos linear e degressivo.",
    description:
      "Calculadora gratuita de depreciação. Calcule a depreciação anual de ativos pelos métodos linear, degressivo e soma dos dígitos.",
    keywords: ["depreciação", "amortização ativos", "depreciação linear", "depreciação acelerada", "contabilidade"],
    inputs: {
      assetCost: { label: "Asset Cost", help: "Total acquisition cost of the asset, including installation and freight." },
      salvageValue: { label: "Salvage Value", help: "Estimated value of the asset at the end of its useful life. Must not exceed asset cost." },
      usefulLife: { label: "Useful Life (years)", help: "Estimated number of years the asset will be in service." },
      method: { label: "Depreciation Method", help: "Straight-line: equal annual amounts. Declining-balance: fixed rate applied to book value. Double-declining: 2/n rate applied to book value. Sum-of-years-digits: accelerated, weighted toward early years." },
      decliningRate: { label: "Declining Rate (%)", help: "Only used by the declining-balance method. Ignored for other methods." },
    },
    outputs: {
      totalDepreciation: { label: "Total Depreciation", help: "Sum of depreciation expense across the full useful life." },
      bookValueEndOfLife: { label: "Book Value at End of Life", help: "Remaining book value after the last year of depreciation. For straight-line and sum-of-years-digits this equals the salvage value; for declining-balance methods it may differ if the salvage floor is not reached." },
      annualSchedule: { label: "Annual Schedule", help: "Year-by-year table of opening value, depreciation expense, and closing value." },
    },
    errors: {
      salvageExceedsCost: "Salvage value cannot exceed the asset cost.",
      assetCostRange: "Asset cost must be between 1 and 1,000,000,000.",
      usefulLifeRange: "Useful life must be between 1 and 100 years.",
    },
    options: {
      method: {
        "straight-line": "Straight-Line",
        "declining-balance": "Declining Balance",
        "sum-of-years-digits": "Sum-of-Years' Digits",
        "double-declining": "Double Declining Balance",
      },
    },
    faq: [
      {
        q: "Which depreciation method should I use?",
        a: "Straight-line is the simplest and most widely accepted for financial reporting. Declining-balance and double-declining-balance front-load depreciation expense and are common for assets that lose value quickly. Sum-of-years-digits is another accelerated method. For US tax purposes, follow the IRS MACRS tables in Publication 946.",
      },
      {
        q: "What is salvage value?",
        a: "Salvage value (also called residual value) is the estimated amount the asset will be worth at the end of its useful life. It limits how far the asset can be depreciated: the book value should not fall below salvage value.",
      },
      {
        q: "How does double-declining balance work?",
        a: "Double-declining balance applies a rate of 2/n (where n is useful life) to the asset's current book value each year. Because depreciation shrinks as book value shrinks, this method front-loads expense in the early years.",
      },
      {
        q: "Does this match my tax return?",
        a: "Not necessarily. Tax depreciation follows jurisdiction-specific rules (e.g., MACRS in the US, capital allowances in the UK) that use prescribed lives and conventions. This calculator illustrates the textbook formulas; consult a qualified accountant for filings.",
      },
    ],
  },
  id: {
    title: "Kalkulator Depresiasi",
    short: "Hitung depresiasi aset dengan metode garis lurus dan saldo menurun.",
    description:
      "Kalkulator depresiasi gratis. Hitung depresiasi tahunan aset dengan metode garis lurus, saldo menurun, dan jumlah angka tahun.",
    keywords: ["depresiasi", "penyusutan aset", "depresiasi garis lurus", "depresiasi saldo menurun", "akuntansi"],
    inputs: {
      assetCost: { label: "Asset Cost", help: "Total acquisition cost of the asset, including installation and freight." },
      salvageValue: { label: "Salvage Value", help: "Estimated value of the asset at the end of its useful life. Must not exceed asset cost." },
      usefulLife: { label: "Useful Life (years)", help: "Estimated number of years the asset will be in service." },
      method: { label: "Depreciation Method", help: "Straight-line: equal annual amounts. Declining-balance: fixed rate applied to book value. Double-declining: 2/n rate applied to book value. Sum-of-years-digits: accelerated, weighted toward early years." },
      decliningRate: { label: "Declining Rate (%)", help: "Only used by the declining-balance method. Ignored for other methods." },
    },
    outputs: {
      totalDepreciation: { label: "Total Depreciation", help: "Sum of depreciation expense across the full useful life." },
      bookValueEndOfLife: { label: "Book Value at End of Life", help: "Remaining book value after the last year of depreciation. For straight-line and sum-of-years-digits this equals the salvage value; for declining-balance methods it may differ if the salvage floor is not reached." },
      annualSchedule: { label: "Annual Schedule", help: "Year-by-year table of opening value, depreciation expense, and closing value." },
    },
    errors: {
      salvageExceedsCost: "Salvage value cannot exceed the asset cost.",
      assetCostRange: "Asset cost must be between 1 and 1,000,000,000.",
      usefulLifeRange: "Useful life must be between 1 and 100 years.",
    },
    options: {
      method: {
        "straight-line": "Straight-Line",
        "declining-balance": "Declining Balance",
        "sum-of-years-digits": "Sum-of-Years' Digits",
        "double-declining": "Double Declining Balance",
      },
    },
    faq: [
      {
        q: "Which depreciation method should I use?",
        a: "Straight-line is the simplest and most widely accepted for financial reporting. Declining-balance and double-declining-balance front-load depreciation expense and are common for assets that lose value quickly. Sum-of-years-digits is another accelerated method. For US tax purposes, follow the IRS MACRS tables in Publication 946.",
      },
      {
        q: "What is salvage value?",
        a: "Salvage value (also called residual value) is the estimated amount the asset will be worth at the end of its useful life. It limits how far the asset can be depreciated: the book value should not fall below salvage value.",
      },
      {
        q: "How does double-declining balance work?",
        a: "Double-declining balance applies a rate of 2/n (where n is useful life) to the asset's current book value each year. Because depreciation shrinks as book value shrinks, this method front-loads expense in the early years.",
      },
      {
        q: "Does this match my tax return?",
        a: "Not necessarily. Tax depreciation follows jurisdiction-specific rules (e.g., MACRS in the US, capital allowances in the UK) that use prescribed lives and conventions. This calculator illustrates the textbook formulas; consult a qualified accountant for filings.",
      },
    ],
  },


  tr: {
    title: "Amortisman Hesaplayıcısı",
    short: "Yıllık amortisman tutarını, defter değerini ve yıl yıl tabloyu dört standart yöntemle hesaplayın.",
    description:
      "Doğrusal, azalan bakiyeler, çift azalan bakiyeler ve yıl rakamları toplamı yöntemlerini destekleyen ücretsiz amortisman hesaplayıcı. Varlık maliyeti, hurda değer, faydalı ömür ve yöntem girerek yıl yıl çizelge (açılış değeri, amortisman, kapanış değeri), toplam amortisman ve kalan defter değeri elde edin.",
    keywords: [
      "amortisman hesaplama",
      "doğrusal amortisman",
      "azalan bakiyeler",
      "çift azalan bakiyeler",
      "yıl rakamları toplamı",
      "demirbaş amortismanı",
      "defter değeri",
    ],
    inputs: {
      assetCost: { label: "Varlık Maliyeti", help: "Kurulum ve nakliye dahil varlığın toplam edinim maliyeti." },
      salvageValue: { label: "Hurda Değer", help: "Faydalı ömrün sonunda varlığın tahmini değeri. Varlık maliyetini aşamaz." },
      usefulLife: { label: "Faydalı Ömür (yıl)", help: "Varlığın kullanımda kalması beklenen yıl sayısı." },
      method: { label: "Amortisman Yöntemi", help: "Doğrusal: eşit yıllık tutar. Azalan bakiyeler: defter değerine sabit oran. Çift azalan: 2/n oranı. Yıl rakamları toplamı: hızlandırılmış." },
      decliningRate: { label: "Azalan Oran (%)", help: "Yalnızca azalan bakiyeler yöntemi için kullanılır." },
    },
    outputs: {
      totalDepreciation: { label: "Toplam Amortisman", help: "Tüm faydalı ömür boyunca ayrılan amortisman tutarının toplamı." },
      bookValueEndOfLife: { label: "Ömür Sonu Defter Değeri", help: "Son amortisman yılından sonra kalan defter değeri." },
      annualSchedule: { label: "Yıllık Çizelge", help: "Yıl bazında açılış değeri, amortisman gideri ve kapanış değeri tablosu." },
    },
    errors: {
      salvageExceedsCost: "Hurda değer, varlık maliyetini aşamaz.",
      assetCostRange: "Varlık maliyeti 1 ile 1.000.000.000 arasında olmalıdır.",
      usefulLifeRange: "Faydalı ömür 1 ile 100 yıl arasında olmalıdır.",
    },
    options: {
      method: {
        "straight-line": "Doğrusal",
        "declining-balance": "Azalan Bakiyeler",
        "sum-of-years-digits": "Yıl Rakamları Toplamı",
        "double-declining": "Çift Azalan Bakiyeler",
      },
    },
    faq: [
      {
        q: "Hangi amortisman yöntemini kullanmalıyım?",
        a: "Doğrusal yöntem en yaygın ve basit olanıdır. Azalan bakiyeler ve çift azalan, hızlı değer kaybeden varlıklar için uygundur. Vergi mevzuatı yöntem seçimini sınırlayabilir; mali müşavirinize danışın.",
      },
      {
        q: "Hurda değer nedir?",
        a: "Faydalı ömür sonunda varlığın tahmini satış değeridir. Defter değeri hurda değerin altına düşmez.",
      },
    ],
  },

  de: {
    title: "Abschreibungsrechner",
    short: "Berechnen Sie jährliche Abschreibung, Restbuchwert und einen Jahresplan nach vier Standardmethoden.",
    description:
      "Kostenloser Abschreibungsrechner mit Unterstützung für lineare Abschreibung, geometrisch-degressive, doppelt degressive und Sum-of-Years-Digits-Methode. Geben Sie Anschaffungskosten, Restwert, Nutzungsdauer und Methode ein, um den vollständigen Jahresplan zu erhalten.",
    keywords: [
      "Abschreibungsrechner",
      "lineare Abschreibung",
      "degressive Abschreibung",
      "AfA Rechner",
      "Anlagenabschreibung",
      "Restbuchwert berechnen",
      "Buchwert",
    ],
    inputs: {
      assetCost: { label: "Anschaffungskosten", help: "Gesamtkosten des Vermögensgegenstands inklusive Installation und Fracht." },
      salvageValue: { label: "Restwert", help: "Geschätzter Wert am Ende der Nutzungsdauer. Darf die Anschaffungskosten nicht übersteigen." },
      usefulLife: { label: "Nutzungsdauer (Jahre)", help: "Geschätzte Nutzungsdauer in Jahren." },
      method: { label: "Abschreibungsmethode", help: "Linear: gleiche Jahresbeträge. Geometrisch-degressiv: fester Satz auf Buchwert. Doppelt degressiv: 2/n auf Buchwert. SYD: beschleunigt." },
      decliningRate: { label: "Degressiver Satz (%)", help: "Nur für die geometrisch-degressive Methode relevant." },
    },
    outputs: {
      totalDepreciation: { label: "Gesamte Abschreibung", help: "Summe aller Abschreibungsbeträge über die Nutzungsdauer." },
      bookValueEndOfLife: { label: "Restbuchwert am Ende", help: "Verbleibender Buchwert nach dem letzten Abschreibungsjahr." },
      annualSchedule: { label: "Jahresplan", help: "Jährliche Aufschlüsselung von Anfangsbuchwert, Abschreibung und Endbuchwert." },
    },
    errors: {
      salvageExceedsCost: "Der Restwert darf die Anschaffungskosten nicht übersteigen.",
      assetCostRange: "Die Anschaffungskosten müssen zwischen 1 und 1.000.000.000 liegen.",
      usefulLifeRange: "Die Nutzungsdauer muss zwischen 1 und 100 Jahren liegen.",
    },
    options: {
      method: {
        "straight-line": "Linear",
        "declining-balance": "Geometrisch-degressiv",
        "sum-of-years-digits": "Sum-of-Years' Digits",
        "double-declining": "Doppelt degressiv",
      },
    },
    faq: [
      {
        q: "Welche Methode soll ich wählen?",
        a: "Die lineare Methode ist am einfachsten und in der Handelsbilanz am häufigsten. Degressive Methoden bilden den Wertverlust schnell verschleißender Anlagen besser ab. Steuerlich können nationale Vorschriften die Wahl einschränken.",
      },
      {
        q: "Was ist der Restwert?",
        a: "Der Restwert ist der geschätzte Wert am Ende der Nutzungsdauer. Der Buchwert darf nicht unter den Restwert sinken.",
      },
    ],
  },

  fr: {
    title: "Calculateur d'Amortissement",
    short: "Calculez l'amortissement annuel, la valeur comptable et un tableau année par année selon quatre méthodes.",
    description:
      "Calculateur gratuit d'amortissement supportant l'amortissement linéaire, dégressif, dégressif double et la méthode SOFTY (somme des années). Entrez le coût d'acquisition, la valeur résiduelle, la durée d'utilité et la méthode pour obtenir un tableau complet année par année.",
    keywords: [
      "calculateur amortissement",
      "amortissement linéaire",
      "amortissement dégressif",
      "amortissement comptable",
      "valeur résiduelle",
      "valeur nette comptable",
      "immobilisation",
    ],
    inputs: {
      assetCost: { label: "Coût d'acquisition", help: "Coût total de l'immobilisation, frais d'installation et de transport inclus." },
      salvageValue: { label: "Valeur résiduelle", help: "Valeur estimée du bien à la fin de sa durée d'utilité. Ne peut excéder le coût d'acquisition." },
      usefulLife: { label: "Durée d'utilité (années)", help: "Nombre d'années d'utilisation prévues." },
      method: { label: "Méthode d'amortissement", help: "Linéaire : annuités égales. Dégressif : taux fixe sur valeur nette. Dégressif double : taux 2/n. Somme des années : accéléré." },
      decliningRate: { label: "Taux dégressif (%)", help: "Utilisé uniquement par la méthode dégressive simple." },
    },
    outputs: {
      totalDepreciation: { label: "Amortissement total", help: "Somme des dotations sur toute la durée d'utilité." },
      bookValueEndOfLife: { label: "Valeur comptable en fin de vie", help: "Valeur nette comptable restant après la dernière année." },
      annualSchedule: { label: "Tableau annuel", help: "Tableau annuel : valeur d'ouverture, dotation, valeur de clôture." },
    },
    errors: {
      salvageExceedsCost: "La valeur résiduelle ne peut pas dépasser le coût d'acquisition.",
      assetCostRange: "Le coût d'acquisition doit être compris entre 1 et 1 000 000 000.",
      usefulLifeRange: "La durée d'utilité doit être comprise entre 1 et 100 ans.",
    },
    options: {
      method: {
        "straight-line": "Linéaire",
        "declining-balance": "Dégressif",
        "sum-of-years-digits": "Somme des années",
        "double-declining": "Dégressif double",
      },
    },
    faq: [
      {
        q: "Quelle méthode choisir ?",
        a: "L'amortissement linéaire est le plus simple et le plus accepté en comptabilité. Les méthodes dégressives conviennent aux biens qui perdent vite de la valeur. La fiscalité peut imposer une méthode spécifique selon le pays.",
      },
      {
        q: "Qu'est-ce que la valeur résiduelle ?",
        a: "C'est la valeur estimée du bien en fin d'utilisation. La valeur comptable ne peut pas descendre en dessous.",
      },
    ],
  },

  es: {
    title: "Calculadora de Amortización",
    short: "Calcula la amortización anual, el valor contable y un cuadro año a año con cuatro métodos estándar.",
    description:
      "Calculadora gratuita de amortización (depreciación) con métodos lineal, decreciente, doble decreciente y suma de dígitos. Introduce el coste del activo, valor residual, vida útil y método para obtener el cuadro completo año a año.",
    keywords: [
      "calculadora amortización",
      "depreciación lineal",
      "método decreciente",
      "depreciación acelerada",
      "valor residual",
      "vida útil activo",
      "valor contable",
    ],
    inputs: {
      assetCost: { label: "Coste del activo", help: "Coste total de adquisición del activo, incluyendo instalación y transporte." },
      salvageValue: { label: "Valor residual", help: "Valor estimado al final de la vida útil. No puede superar el coste del activo." },
      usefulLife: { label: "Vida útil (años)", help: "Número estimado de años de uso." },
      method: { label: "Método", help: "Lineal: anualidades iguales. Decreciente: tasa fija sobre el valor contable. Doble decreciente: tasa 2/n. Suma de dígitos: acelerado." },
      decliningRate: { label: "Tasa decreciente (%)", help: "Solo se aplica al método decreciente simple." },
    },
    outputs: {
      totalDepreciation: { label: "Amortización total", help: "Suma de las dotaciones a lo largo de toda la vida útil." },
      bookValueEndOfLife: { label: "Valor contable al final", help: "Valor neto contable que queda tras el último año." },
      annualSchedule: { label: "Cuadro anual", help: "Tabla anual con valor inicial, dotación y valor final." },
    },
    errors: {
      salvageExceedsCost: "El valor residual no puede superar el coste del activo.",
      assetCostRange: "El coste debe estar entre 1 y 1.000.000.000.",
      usefulLifeRange: "La vida útil debe ser de 1 a 100 años.",
    },
    options: {
      method: {
        "straight-line": "Lineal",
        "declining-balance": "Decreciente",
        "sum-of-years-digits": "Suma de dígitos",
        "double-declining": "Doble decreciente",
      },
    },
    faq: [
      {
        q: "¿Qué método elegir?",
        a: "El método lineal es el más sencillo y aceptado contablemente. Los métodos decrecientes ajustan mejor activos que pierden valor rápido. La fiscalidad puede imponer reglas específicas.",
      },
      {
        q: "¿Qué es el valor residual?",
        a: "Es el valor estimado al final de la vida útil. El valor contable no puede bajar de él.",
      },
    ],
  },

  it: {
    title: "Calcolatore Ammortamento",
    short: "Calcola l'ammortamento annuo, il valore di libro e un piano anno per anno con quattro metodi standard.",
    description:
      "Calcolatore gratuito di ammortamento con metodi lineare, a quote decrescenti, doppia quota decrescente e somma delle cifre degli anni. Inserisci costo del cespite, valore residuo, vita utile e metodo per ottenere il piano completo.",
    keywords: [
      "calcolatore ammortamento",
      "ammortamento lineare",
      "ammortamento decrescente",
      "ammortamento accelerato",
      "valore residuo",
      "valore di libro",
      "vita utile cespite",
    ],
    inputs: {
      assetCost: { label: "Costo del cespite", help: "Costo totale di acquisizione del bene, inclusi installazione e trasporto." },
      salvageValue: { label: "Valore residuo", help: "Valore stimato a fine vita utile. Non può superare il costo del cespite." },
      usefulLife: { label: "Vita utile (anni)", help: "Numero stimato di anni di utilizzo." },
      method: { label: "Metodo di ammortamento", help: "Lineare: quote uguali. Decrescente: tasso fisso sul valore di libro. Doppio decrescente: tasso 2/n. Somma cifre: accelerato." },
      decliningRate: { label: "Tasso decrescente (%)", help: "Usato solo dal metodo decrescente semplice." },
    },
    outputs: {
      totalDepreciation: { label: "Ammortamento totale", help: "Somma delle quote nell'intera vita utile." },
      bookValueEndOfLife: { label: "Valore di libro a fine vita", help: "Valore residuo a libro dopo l'ultimo anno." },
      annualSchedule: { label: "Piano annuale", help: "Tabella annuale con valore iniziale, quota e valore finale." },
    },
    errors: {
      salvageExceedsCost: "Il valore residuo non può superare il costo del cespite.",
      assetCostRange: "Il costo deve essere compreso tra 1 e 1.000.000.000.",
      usefulLifeRange: "La vita utile deve essere compresa tra 1 e 100 anni.",
    },
    options: {
      method: {
        "straight-line": "Lineare",
        "declining-balance": "Quote decrescenti",
        "sum-of-years-digits": "Somma delle cifre",
        "double-declining": "Doppia quota decrescente",
      },
    },
    faq: [
      {
        q: "Quale metodo scegliere?",
        a: "Il metodo lineare è il più diffuso e semplice. I metodi decrescenti sono indicati per beni che perdono valore rapidamente. La normativa fiscale italiana può prevedere metodi e aliquote specifici.",
      },
      {
        q: "Cos'è il valore residuo?",
        a: "È il valore stimato a fine vita utile. Il valore di libro non può scendere al di sotto.",
      },
    ],
  },

  ar: {
    title: "حاسبة الإهلاك",
    short: "احسب الإهلاك السنوي والقيمة الدفترية وجدول سنوي وفق أربع طرق قياسية.",
    description:
      "حاسبة إهلاك مجانية تدعم الطرق: القسط الثابت، الرصيد المتناقص، الرصيد المتناقص المضاعف، ومجموع أرقام السنوات. أدخل تكلفة الأصل والقيمة المتبقية والعمر الإنتاجي والطريقة للحصول على جدول سنوي كامل.",
    keywords: [
      "حاسبة إهلاك",
      "القسط الثابت",
      "الرصيد المتناقص",
      "إهلاك مسرع",
      "القيمة المتبقية",
      "القيمة الدفترية",
      "العمر الإنتاجي",
    ],
    inputs: {
      assetCost: { label: "تكلفة الأصل", help: "إجمالي تكلفة اقتناء الأصل بما فيها التركيب والشحن." },
      salvageValue: { label: "القيمة المتبقية", help: "القيمة المقدرة في نهاية العمر الإنتاجي. لا يمكن أن تتجاوز تكلفة الأصل." },
      usefulLife: { label: "العمر الإنتاجي (سنوات)", help: "عدد السنوات المقدر لاستخدام الأصل." },
      method: { label: "طريقة الإهلاك", help: "القسط الثابت: مبالغ متساوية. الرصيد المتناقص: نسبة ثابتة على القيمة الدفترية. المتناقص المضاعف: 2/n. مجموع أرقام السنوات: مسرع." },
      decliningRate: { label: "نسبة التناقص (%)", help: "تُستخدم فقط لطريقة الرصيد المتناقص البسيط." },
    },
    outputs: {
      totalDepreciation: { label: "إجمالي الإهلاك", help: "مجموع أقساط الإهلاك خلال العمر الإنتاجي." },
      bookValueEndOfLife: { label: "القيمة الدفترية في نهاية العمر", help: "القيمة الدفترية المتبقية بعد آخر سنة إهلاك." },
      annualSchedule: { label: "الجدول السنوي", help: "جدول سنوي يوضح القيمة الافتتاحية، قسط الإهلاك، والقيمة الختامية." },
    },
    errors: {
      salvageExceedsCost: "القيمة المتبقية لا يمكن أن تتجاوز تكلفة الأصل.",
      assetCostRange: "تكلفة الأصل يجب أن تكون بين 1 و1,000,000,000.",
      usefulLifeRange: "العمر الإنتاجي يجب أن يكون بين سنة و100 سنة.",
    },
    options: {
      method: {
        "straight-line": "القسط الثابت",
        "declining-balance": "الرصيد المتناقص",
        "sum-of-years-digits": "مجموع أرقام السنوات",
        "double-declining": "الرصيد المتناقص المضاعف",
      },
    },
    faq: [
      {
        q: "أي طريقة إهلاك يجب استخدامها؟",
        a: "طريقة القسط الثابت هي الأبسط والأكثر شيوعاً في التقارير المالية. الطرق المسرعة مناسبة للأصول التي تفقد قيمتها بسرعة. تشريعات الضرائب قد تفرض طرقاً محددة.",
      },
      {
        q: "ما هي القيمة المتبقية؟",
        a: "هي القيمة المقدرة للأصل في نهاية عمره الإنتاجي. لا يمكن للقيمة الدفترية أن تنخفض دونها.",
      },
    ],
  },

  ru: {
    title: "Калькулятор амортизации",
    short: "Рассчитайте годовую амортизацию, балансовую стоимость и график по годам по четырём методам.",
    description:
      "Бесплатный калькулятор амортизации с поддержкой линейного метода, метода уменьшаемого остатка, удвоенного уменьшаемого остатка и метода суммы чисел лет. Введите стоимость актива, ликвидационную стоимость, срок полезного использования и метод, чтобы получить полный график.",
    keywords: [
      "калькулятор амортизации",
      "линейный метод",
      "уменьшаемый остаток",
      "ускоренная амортизация",
      "ликвидационная стоимость",
      "балансовая стоимость",
      "срок полезного использования",
    ],
    inputs: {
      assetCost: { label: "Стоимость актива", help: "Полная стоимость приобретения, включая установку и доставку." },
      salvageValue: { label: "Ликвидационная стоимость", help: "Оценочная стоимость в конце срока полезного использования. Не может превышать стоимость актива." },
      usefulLife: { label: "Срок полезного использования (лет)", help: "Оценочный срок эксплуатации в годах." },
      method: { label: "Метод амортизации", help: "Линейный: равные суммы. Уменьшаемого остатка: фиксированная ставка от балансовой стоимости. Удвоенный: 2/n. Сумма чисел лет: ускоренный." },
      decliningRate: { label: "Ставка списания (%)", help: "Применяется только для простого метода уменьшаемого остатка." },
    },
    outputs: {
      totalDepreciation: { label: "Итого амортизация", help: "Сумма амортизационных отчислений за весь срок." },
      bookValueEndOfLife: { label: "Балансовая стоимость на конец", help: "Остаточная балансовая стоимость после последнего года." },
      annualSchedule: { label: "Годовой график", help: "Таблица по годам: начальная стоимость, амортизация, конечная стоимость." },
    },
    errors: {
      salvageExceedsCost: "Ликвидационная стоимость не может превышать стоимость актива.",
      assetCostRange: "Стоимость актива должна быть от 1 до 1 000 000 000.",
      usefulLifeRange: "Срок полезного использования должен быть от 1 до 100 лет.",
    },
    options: {
      method: {
        "straight-line": "Линейный",
        "declining-balance": "Уменьшаемого остатка",
        "sum-of-years-digits": "Сумма чисел лет",
        "double-declining": "Удвоенный уменьшаемый остаток",
      },
    },
    faq: [
      {
        q: "Какой метод выбрать?",
        a: "Линейный метод — самый простой и распространённый. Ускоренные методы подходят для активов, быстро теряющих стоимость. Налоговое законодательство может ограничивать выбор.",
      },
      {
        q: "Что такое ликвидационная стоимость?",
        a: "Это оценочная стоимость актива в конце срока полезного использования. Балансовая стоимость не должна опускаться ниже неё.",
      },
    ],
  },

  zh: {
    title: "折旧计算器",
    short: "使用四种标准方法计算年度折旧、账面价值和逐年折旧表。",
    description:
      "免费折旧计算器，支持直线法、余额递减法、双倍余额递减法和年数总和法。输入资产成本、残值、使用年限和方法，即可获得完整的逐年折旧表，包括年初价值、折旧额和年末价值。",
    keywords: [
      "折旧计算器",
      "直线法折旧",
      "余额递减法",
      "双倍余额递减",
      "年数总和法",
      "固定资产折旧",
      "账面价值",
    ],
    inputs: {
      assetCost: { label: "资产成本", help: "资产的总购置成本，包括安装与运输费用。" },
      salvageValue: { label: "残值", help: "使用寿命结束时的预计价值，不能超过资产成本。" },
      usefulLife: { label: "使用年限（年）", help: "预计的使用寿命年限。" },
      method: { label: "折旧方法", help: "直线法：等额折旧。余额递减法：固定比率乘账面价值。双倍余额递减：2/n。年数总和法：加速折旧。" },
      decliningRate: { label: "递减率 (%)", help: "仅用于普通余额递减法。" },
    },
    outputs: {
      totalDepreciation: { label: "折旧总额", help: "整个使用年限内累计的折旧费用。" },
      bookValueEndOfLife: { label: "期末账面价值", help: "最后一年折旧后剩余的账面价值。" },
      annualSchedule: { label: "年度折旧表", help: "逐年列出年初价值、折旧额、年末价值。" },
    },
    errors: {
      salvageExceedsCost: "残值不能超过资产成本。",
      assetCostRange: "资产成本必须在 1 至 1,000,000,000 之间。",
      usefulLifeRange: "使用年限必须在 1 至 100 年之间。",
    },
    options: {
      method: {
        "straight-line": "直线法",
        "declining-balance": "余额递减法",
        "sum-of-years-digits": "年数总和法",
        "double-declining": "双倍余额递减法",
      },
    },
    faq: [
      {
        q: "应选择哪种折旧方法？",
        a: "直线法最简单，财务报告中最常用。加速折旧法适用于价值快速下降的资产。税务上须遵循当地法规。",
      },
      {
        q: "残值是什么？",
        a: "残值是资产使用寿命结束时的预计可变现价值，账面价值不应低于此值。",
      },
    ],
  },

  ja: {
    title: "減価償却計算機",
    short: "4つの標準的な方法で年次減価償却費、帳簿価額、年度別スケジュールを計算します。",
    description:
      "定額法、定率法、200%定率法（ダブル・デクライニング）、級数法（年数合計法）に対応した無料の減価償却計算機。取得原価、残存価額、耐用年数、方法を入力すると、年度別の期首価額・償却費・期末価額を含む完全なスケジュールが得られます。",
    keywords: [
      "減価償却計算機",
      "定額法",
      "定率法",
      "200%定率法",
      "級数法",
      "残存価額",
      "帳簿価額",
    ],
    inputs: {
      assetCost: { label: "取得原価", help: "据付費・運送費を含む資産の取得総額。" },
      salvageValue: { label: "残存価額", help: "耐用年数到来時に見積もられる価額。取得原価を超えてはなりません。" },
      usefulLife: { label: "耐用年数（年）", help: "資産が使用されると見込まれる年数。" },
      method: { label: "償却方法", help: "定額法：毎期均等額。定率法：帳簿価額に一定率。200%定率法：2/n率。級数法：加速償却。" },
      decliningRate: { label: "定率 (%)", help: "通常の定率法でのみ使用されます。" },
    },
    outputs: {
      totalDepreciation: { label: "累計償却費", help: "耐用年数全体での減価償却費の合計。" },
      bookValueEndOfLife: { label: "期末帳簿価額", help: "最終年度の償却後に残る帳簿価額。" },
      annualSchedule: { label: "年度別スケジュール", help: "各年度の期首価額・償却費・期末価額の表。" },
    },
    errors: {
      salvageExceedsCost: "残存価額は取得原価を超えることはできません。",
      assetCostRange: "取得原価は 1 から 1,000,000,000 の範囲で入力してください。",
      usefulLifeRange: "耐用年数は 1 から 100 年の範囲で入力してください。",
    },
    options: {
      method: {
        "straight-line": "定額法",
        "declining-balance": "定率法",
        "sum-of-years-digits": "級数法",
        "double-declining": "200%定率法",
      },
    },
    faq: [
      {
        q: "どの償却方法を選べばよいですか？",
        a: "定額法は最もシンプルで広く使われています。定率法系は早期に多く償却したい資産に向きます。日本の税務では資産種類ごとに認められる方法が定められています。",
      },
      {
        q: "残存価額とは？",
        a: "耐用年数到来時に見積もられる売却可能価額です。帳簿価額はこれを下回らないように処理します。",
      },
    ],
  },

  ko: {
    title: "감가상각 계산기",
    short: "4가지 표준 방법으로 연간 감가상각비, 장부가액, 연도별 스케줄을 계산합니다.",
    description:
      "정액법, 정률법, 이중체감법(2배 정률법), 연수합계법을 지원하는 무료 감가상각 계산기. 자산 취득원가, 잔존가치, 내용연수, 방법을 입력하면 연도별 기초가액·상각비·기말가액이 포함된 전체 스케줄을 확인할 수 있습니다.",
    keywords: [
      "감가상각 계산기",
      "정액법",
      "정률법",
      "이중체감법",
      "연수합계법",
      "잔존가치",
      "장부가액",
    ],
    inputs: {
      assetCost: { label: "자산 취득원가", help: "설치비와 운송비를 포함한 자산의 총 취득원가." },
      salvageValue: { label: "잔존가치", help: "내용연수 종료 시의 추정가치. 취득원가를 초과할 수 없습니다." },
      usefulLife: { label: "내용연수 (년)", help: "자산을 사용할 것으로 추정되는 년수." },
      method: { label: "감가상각 방법", help: "정액법: 매년 동일. 정률법: 장부가액에 고정 비율. 이중체감법: 2/n. 연수합계법: 가속상각." },
      decliningRate: { label: "정률 (%)", help: "일반 정률법에서만 사용됩니다." },
    },
    outputs: {
      totalDepreciation: { label: "감가상각 누계액", help: "전체 내용연수에 걸친 감가상각비 합계." },
      bookValueEndOfLife: { label: "내용연수 말 장부가액", help: "마지막 연도 상각 후 남은 장부가액." },
      annualSchedule: { label: "연도별 스케줄", help: "기초가액, 감가상각비, 기말가액의 연도별 표." },
    },
    errors: {
      salvageExceedsCost: "잔존가치는 취득원가를 초과할 수 없습니다.",
      assetCostRange: "취득원가는 1 ~ 1,000,000,000 사이여야 합니다.",
      usefulLifeRange: "내용연수는 1 ~ 100년 사이여야 합니다.",
    },
    options: {
      method: {
        "straight-line": "정액법",
        "declining-balance": "정률법",
        "sum-of-years-digits": "연수합계법",
        "double-declining": "이중체감법",
      },
    },
    faq: [
      {
        q: "어떤 방법을 선택해야 하나요?",
        a: "정액법은 가장 단순하고 재무회계에서 가장 일반적입니다. 가속상각법은 가치가 빠르게 감소하는 자산에 적합합니다. 세무는 자산 유형별로 인정 방법이 정해져 있을 수 있습니다.",
      },
      {
        q: "잔존가치란?",
        a: "내용연수 말에 추정되는 회수 가능 가치이며, 장부가액은 이 값 아래로 내려가지 않도록 합니다.",
      },
    ],
  },

  hi: {
    title: "मूल्यह्रास कैलकुलेटर",
    short: "चार मानक विधियों से वार्षिक मूल्यह्रास, बही मूल्य और साल-दर-साल अनुसूची की गणना करें।",
    description:
      "सीधी रेखा, घटती शेष, दोहरी घटती शेष और वर्षों के अंकों का योग विधियों का समर्थन करने वाला मुफ़्त मूल्यह्रास कैलकुलेटर। संपत्ति की लागत, स्क्रैप मूल्य, उपयोगी जीवन और विधि दर्ज करें और प्रारंभिक मूल्य, मूल्यह्रास और समापन मूल्य के साथ पूरी अनुसूची प्राप्त करें।",
    keywords: [
      "मूल्यह्रास कैलकुलेटर",
      "सीधी रेखा विधि",
      "घटती शेष विधि",
      "त्वरित मूल्यह्रास",
      "बही मूल्य",
      "स्क्रैप मूल्य",
      "उपयोगी जीवन",
    ],
    inputs: {
      assetCost: { label: "संपत्ति की लागत", help: "स्थापना और परिवहन सहित संपत्ति की कुल अधिग्रहण लागत।" },
      salvageValue: { label: "स्क्रैप मूल्य", help: "उपयोगी जीवन के अंत में संपत्ति का अनुमानित मूल्य। यह संपत्ति की लागत से अधिक नहीं हो सकता।" },
      usefulLife: { label: "उपयोगी जीवन (वर्ष)", help: "अनुमानित वर्ष जिसमें संपत्ति का उपयोग होगा।" },
      method: { label: "मूल्यह्रास विधि", help: "सीधी रेखा: समान वार्षिक राशि। घटती शेष: बही मूल्य पर निश्चित दर। दोहरी घटती: 2/n दर। वर्षों के अंकों का योग: त्वरित।" },
      decliningRate: { label: "घटती दर (%)", help: "केवल साधारण घटती शेष विधि में उपयोग होती है।" },
    },
    outputs: {
      totalDepreciation: { label: "कुल मूल्यह्रास", help: "पूरे उपयोगी जीवन में मूल्यह्रास व्यय का योग।" },
      bookValueEndOfLife: { label: "जीवन के अंत में बही मूल्य", help: "अंतिम वर्ष के बाद बचा हुआ बही मूल्य।" },
      annualSchedule: { label: "वार्षिक अनुसूची", help: "वर्ष-दर-वर्ष प्रारंभिक मूल्य, मूल्यह्रास व्यय और समापन मूल्य की तालिका।" },
    },
    errors: {
      salvageExceedsCost: "स्क्रैप मूल्य संपत्ति की लागत से अधिक नहीं हो सकता।",
      assetCostRange: "संपत्ति की लागत 1 से 1,000,000,000 के बीच होनी चाहिए।",
      usefulLifeRange: "उपयोगी जीवन 1 से 100 वर्ष के बीच होना चाहिए।",
    },
    options: {
      method: {
        "straight-line": "सीधी रेखा",
        "declining-balance": "घटती शेष",
        "sum-of-years-digits": "वर्षों के अंकों का योग",
        "double-declining": "दोहरी घटती शेष",
      },
    },
    faq: [
      {
        q: "कौन सी विधि चुनें?",
        a: "सीधी रेखा विधि सबसे सरल और लेखांकन में सबसे आम है। त्वरित विधियाँ उन संपत्तियों के लिए उपयुक्त हैं जो जल्दी मूल्य खोती हैं। कर नियम कुछ विधियाँ अनिवार्य कर सकते हैं।",
      },
      {
        q: "स्क्रैप मूल्य क्या है?",
        a: "यह संपत्ति का अनुमानित अंतिम मूल्य है जो उपयोगी जीवन समाप्त होने पर बचता है। बही मूल्य इससे नीचे नहीं जा सकता।",
      },
    ],
  },
};

export default i18n;
