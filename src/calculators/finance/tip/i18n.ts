import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Tip Calculator",
    short: "Calculate tip amount, total bill, and split the check evenly among your group.",
    description:
      "Free tip calculator. Enter your bill amount, tip percentage, and number of people to instantly see the tip, total, and per-person amounts.",
    keywords: [
      "tip calculator",
      "gratuity calculator",
      "split bill calculator",
      "restaurant tip",
      "how much to tip",
      "tip percentage",
      "bill splitter",
    ],
    inputs: {
      billAmount: {
        label: "Bill Amount",
        help: "The subtotal on your receipt before tip.",
      },
      tipPct: {
        label: "Tip Percentage (%)",
        help: "Standard restaurant tips: 15% (adequate), 18% (good service), 20–25% (excellent). Adjust for local customs.",
      },
      numberOfPeople: {
        label: "Number of People",
        help: "How many people are splitting the bill?",
      },
      roundUp: {
        label: "Round Up Per Person",
        help: "When enabled, each person's share is rounded up to the nearest dollar for easier cash payment.",
      },
    },
    outputs: {
      tipAmount: {
        label: "Tip Amount",
        help: "Total gratuity to leave.",
      },
      totalAmount: {
        label: "Total Bill",
        help: "Bill amount plus tip.",
      },
      perPersonTotal: {
        label: "Per Person",
        help: "Each person's share of the total bill including tip.",
      },
      perPersonTip: {
        label: "Tip Per Person",
        help: "Each person's share of the tip.",
      },
      totalRounded: {
        label: "Total (Rounded)",
        help: "Total when each person pays a rounded-up amount. Slightly higher tip for the server.",
      },
    },
    errors: {
      billRequired: "Bill amount must be greater than zero.",
    },
    faq: [
      {
        q: "How much should I tip at a restaurant?",
        a: "Standard US restaurant tipping is 15–20% of the pre-tax subtotal for table service. 18% is considered average, 20% is good, and 25%+ is excellent. For counter service or takeout, 10–15% is common but not mandatory.",
      },
      {
        q: "Should I tip on the pre-tax or post-tax amount?",
        a: "Etiquette authorities like Emily Post recommend tipping on the pre-tax subtotal. However, many people find it easier to tip on the total including tax, which effectively results in a slightly higher tip percentage.",
      },
      {
        q: "What if a service charge is already included?",
        a: "Many restaurants automatically add 18–20% for large groups. Check your receipt carefully. If a service charge is already included, you are not obligated to add more, though you may tip extra for exceptional service.",
      },
      {
        q: "How do I split the bill unevenly?",
        a: "This calculator splits the total evenly. For uneven splits (different dishes, separate checks), use the per-person tip as a guide and ask your server to split the check by item.",
      },
      {
        q: "Is tip income taxable?",
        a: "Yes. In the US, tips are fully taxable income. The IRS requires employees to report all tips to their employer, and employers must report tips on W-2 forms. See IRS Publication 531 for details.",
      },
    ],
  },
  pt: {
    title: "Tip Calculator",
    short: "Calculate tip amount, total bill, and split the check evenly among your group.",
    description:
      "Free tip calculator. Enter your bill amount, tip percentage, and number of people to instantly see the tip, total, and per-person amounts.",
    keywords: [
      "tip calculator",
      "gratuity calculator",
      "split bill calculator",
      "restaurant tip",
      "how much to tip",
      "tip percentage",
      "bill splitter",
    ],
    inputs: {
      billAmount: {
        label: "Bill Amount",
        help: "The subtotal on your receipt before tip.",
      },
      tipPct: {
        label: "Tip Percentage (%)",
        help: "Standard restaurant tips: 15% (adequate), 18% (good service), 20–25% (excellent). Adjust for local customs.",
      },
      numberOfPeople: {
        label: "Number of People",
        help: "How many people are splitting the bill?",
      },
      roundUp: {
        label: "Round Up Per Person",
        help: "When enabled, each person's share is rounded up to the nearest dollar for easier cash payment.",
      },
    },
    outputs: {
      tipAmount: {
        label: "Tip Amount",
        help: "Total gratuity to leave.",
      },
      totalAmount: {
        label: "Total Bill",
        help: "Bill amount plus tip.",
      },
      perPersonTotal: {
        label: "Per Person",
        help: "Each person's share of the total bill including tip.",
      },
      perPersonTip: {
        label: "Tip Per Person",
        help: "Each person's share of the tip.",
      },
      totalRounded: {
        label: "Total (Rounded)",
        help: "Total when each person pays a rounded-up amount. Slightly higher tip for the server.",
      },
    },
    errors: {
      billRequired: "Bill amount must be greater than zero.",
    },
    faq: [
      {
        q: "How much should I tip at a restaurant?",
        a: "Standard US restaurant tipping is 15–20% of the pre-tax subtotal for table service. 18% is considered average, 20% is good, and 25%+ is excellent. For counter service or takeout, 10–15% is common but not mandatory.",
      },
      {
        q: "Should I tip on the pre-tax or post-tax amount?",
        a: "Etiquette authorities like Emily Post recommend tipping on the pre-tax subtotal. However, many people find it easier to tip on the total including tax, which effectively results in a slightly higher tip percentage.",
      },
      {
        q: "What if a service charge is already included?",
        a: "Many restaurants automatically add 18–20% for large groups. Check your receipt carefully. If a service charge is already included, you are not obligated to add more, though you may tip extra for exceptional service.",
      },
      {
        q: "How do I split the bill unevenly?",
        a: "This calculator splits the total evenly. For uneven splits (different dishes, separate checks), use the per-person tip as a guide and ask your server to split the check by item.",
      },
      {
        q: "Is tip income taxable?",
        a: "Yes. In the US, tips are fully taxable income. The IRS requires employees to report all tips to their employer, and employers must report tips on W-2 forms. See IRS Publication 531 for details.",
      },
    ],
  },
  id: {
    title: "Tip Calculator",
    short: "Calculate tip amount, total bill, and split the check evenly among your group.",
    description:
      "Free tip calculator. Enter your bill amount, tip percentage, and number of people to instantly see the tip, total, and per-person amounts.",
    keywords: [
      "tip calculator",
      "gratuity calculator",
      "split bill calculator",
      "restaurant tip",
      "how much to tip",
      "tip percentage",
      "bill splitter",
    ],
    inputs: {
      billAmount: {
        label: "Bill Amount",
        help: "The subtotal on your receipt before tip.",
      },
      tipPct: {
        label: "Tip Percentage (%)",
        help: "Standard restaurant tips: 15% (adequate), 18% (good service), 20–25% (excellent). Adjust for local customs.",
      },
      numberOfPeople: {
        label: "Number of People",
        help: "How many people are splitting the bill?",
      },
      roundUp: {
        label: "Round Up Per Person",
        help: "When enabled, each person's share is rounded up to the nearest dollar for easier cash payment.",
      },
    },
    outputs: {
      tipAmount: {
        label: "Tip Amount",
        help: "Total gratuity to leave.",
      },
      totalAmount: {
        label: "Total Bill",
        help: "Bill amount plus tip.",
      },
      perPersonTotal: {
        label: "Per Person",
        help: "Each person's share of the total bill including tip.",
      },
      perPersonTip: {
        label: "Tip Per Person",
        help: "Each person's share of the tip.",
      },
      totalRounded: {
        label: "Total (Rounded)",
        help: "Total when each person pays a rounded-up amount. Slightly higher tip for the server.",
      },
    },
    errors: {
      billRequired: "Bill amount must be greater than zero.",
    },
    faq: [
      {
        q: "How much should I tip at a restaurant?",
        a: "Standard US restaurant tipping is 15–20% of the pre-tax subtotal for table service. 18% is considered average, 20% is good, and 25%+ is excellent. For counter service or takeout, 10–15% is common but not mandatory.",
      },
      {
        q: "Should I tip on the pre-tax or post-tax amount?",
        a: "Etiquette authorities like Emily Post recommend tipping on the pre-tax subtotal. However, many people find it easier to tip on the total including tax, which effectively results in a slightly higher tip percentage.",
      },
      {
        q: "What if a service charge is already included?",
        a: "Many restaurants automatically add 18–20% for large groups. Check your receipt carefully. If a service charge is already included, you are not obligated to add more, though you may tip extra for exceptional service.",
      },
      {
        q: "How do I split the bill unevenly?",
        a: "This calculator splits the total evenly. For uneven splits (different dishes, separate checks), use the per-person tip as a guide and ask your server to split the check by item.",
      },
      {
        q: "Is tip income taxable?",
        a: "Yes. In the US, tips are fully taxable income. The IRS requires employees to report all tips to their employer, and employers must report tips on W-2 forms. See IRS Publication 531 for details.",
      },
    ],
  },


  tr: {
    title: "Bahşiş Hesaplayıcı",
    short: "Bahşiş tutarını, toplam hesabı ve grup içi payları hesaplayın.",
    description:
      "Ücretsiz bahşiş hesaplayıcı. Hesap tutarını, bahşiş yüzdesini ve kişi sayısını girerek bahşiş, toplam ve kişi başı tutarları anında görün.",
    keywords: [
      "bahşiş hesaplayıcı",
      "restoran bahşişi",
      "hesap bölme",
      "bahşiş yüzdesi",
      "kaç bahşiş verilmeli",
      "hesap paylaşma",
      "tip hesaplama",
    ],
    inputs: {
      billAmount: {
        label: "Hesap Tutarı",
        help: "Fişinizdeki bahşiş öncesi alt toplam.",
      },
      tipPct: {
        label: "Bahşiş Yüzdesi (%)",
        help: "Standart restoran bahşişleri: %15 (yeterli), %18 (iyi hizmet), %20–25 (mükemmel).",
      },
      numberOfPeople: {
        label: "Kişi Sayısı",
        help: "Hesabı kaç kişi paylaşıyor?",
      },
      roundUp: {
        label: "Kişi Başı Yukarı Yuvarlama",
        help: "Etkinleştirildiğinde her kişinin payı en yakın tam sayıya yuvarlanır.",
      },
    },
    outputs: {
      tipAmount: {
        label: "Bahşiş Tutarı",
        help: "Bırakılacak toplam bahşiş.",
      },
      totalAmount: {
        label: "Toplam Hesap",
        help: "Hesap tutarı artı bahşiş.",
      },
      perPersonTotal: {
        label: "Kişi Başı",
        help: "Her kişinin bahşiş dahil toplam payı.",
      },
      perPersonTip: {
        label: "Kişi Başı Bahşiş",
        help: "Her kişinin bahşiş payı.",
      },
      totalRounded: {
        label: "Toplam (Yuvarlanmış)",
        help: "Her kişi yuvarlak tutar ödediğinde toplam.",
      },
    },
    errors: {
      billRequired: "Hesap tutarı sıfırdan büyük olmalıdır.",
    },
    faq: [
      {
        q: "Restoranda ne kadar bahşiş bırakmalıyım?",
        a: "Türkiye'de genel kural hesabın %10-15'idir, ancak bu zorunlu değildir. ABD'de standart %15-20'dir. Hizmet kalitesine göre daha fazla verebilirsiniz.",
      },
      {
        q: "Bahşişi vergi öncesi mi sonrası mı tutara göre hesaplamalıyım?",
        a: "Genel görgü kurallarına göre bahşiş vergisiz alt toplam üzerinden hesaplanmalıdır.",
      },
      {
        q: "Faturaya servis ücreti eklenmiş ise ne yapmalıyım?",
        a: "Büyük gruplar için bazı restoranlar otomatik olarak %18-20 servis ücreti ekler. Fiş dikkatle kontrol edin; eklenmiş ise ek bahşiş zorunlu değildir.",
      },
      {
        q: "Hesabı eşit olmayan şekilde bölmek istersem?",
        a: "Bu hesaplayıcı toplamı eşit böler. Eşit olmayan bölüşüm için garsondan ayrı fatura talep edebilirsiniz.",
      },
    ],
  },

  de: {
    title: "Trinkgeld-Rechner",
    short: "Berechnen Sie den Trinkgeldbetrag, die Gesamtrechnung und teilen Sie die Rechnung auf Ihre Gruppe auf.",
    description:
      "Kostenloser Trinkgeld-Rechner. Geben Sie Rechnungsbetrag, Trinkgeldprozentsatz und Personenanzahl ein, um sofort Trinkgeld, Gesamtbetrag und Pro-Kopf-Beträge zu sehen.",
    keywords: [
      "Trinkgeld Rechner",
      "Restaurant Trinkgeld",
      "Rechnung aufteilen",
      "Trinkgeld berechnen",
      "wie viel Trinkgeld",
      "Rechnungsteiler",
      "Trinkgeld Prozent",
    ],
    inputs: {
      billAmount: {
        label: "Rechnungsbetrag",
        help: "Der Zwischensumme auf Ihrer Rechnung vor dem Trinkgeld.",
      },
      tipPct: {
        label: "Trinkgeld (%)",
        help: "Übliche Trinkgelder: 5–10% in Deutschland, 15–20% in den USA. Passen Sie es an lokale Gepflogenheiten an.",
      },
      numberOfPeople: {
        label: "Personenanzahl",
        help: "Wie viele Personen teilen die Rechnung?",
      },
      roundUp: {
        label: "Pro Person aufrunden",
        help: "Wenn aktiviert, wird der Anteil jeder Person auf den nächsten vollen Euro aufgerundet.",
      },
    },
    outputs: {
      tipAmount: {
        label: "Trinkgeldbetrag",
        help: "Gesamtes zu lassendes Trinkgeld.",
      },
      totalAmount: {
        label: "Gesamtrechnung",
        help: "Rechnungsbetrag plus Trinkgeld.",
      },
      perPersonTotal: {
        label: "Pro Person",
        help: "Anteil jeder Person an der Gesamtrechnung einschließlich Trinkgeld.",
      },
      perPersonTip: {
        label: "Trinkgeld pro Person",
        help: "Anteil jeder Person am Trinkgeld.",
      },
      totalRounded: {
        label: "Gesamt (Gerundet)",
        help: "Gesamtbetrag wenn jede Person einen aufgerundeten Betrag zahlt.",
      },
    },
    errors: {
      billRequired: "Der Rechnungsbetrag muss größer als null sein.",
    },
    faq: [
      {
        q: "Wie viel Trinkgeld sollte ich in einem Restaurant lassen?",
        a: "In Deutschland sind 5–10% der Rechnung üblich, oft wird einfach aufgerundet. In den USA sind 15–20% des Rechnungsbetrags vor Steuer Standard.",
      },
      {
        q: "Sollte ich auf den Betrag vor oder nach Steuer Trinkgeld geben?",
        a: "Trinkgeld wird in Deutschland auf den Gesamtbetrag der Rechnung gegeben, da Steuer bereits enthalten ist. In den USA empfehlen Etikette-Experten, auf den Betrag vor Steuer zu geben.",
      },
      {
        q: "Was ist, wenn ein Serviceentgelt bereits enthalten ist?",
        a: "Manche Restaurants, besonders für große Gruppen, berechnen automatisch ein Serviceentgelt. Überprüfen Sie Ihre Rechnung sorgfältig.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Pourboire",
    short: "Calculez le montant du pourboire, l'addition totale et divisez-la entre vos convives.",
    description:
      "Calculateur de pourboire gratuit. Entrez le montant de l'addition, le pourcentage de pourboire et le nombre de personnes pour voir instantanément le pourboire, le total et les montants par personne.",
    keywords: [
      "calculateur pourboire",
      "calculateur addition",
      "partage addition restaurant",
      "combien de pourboire",
      "pourcentage pourboire",
      "division addition",
      "note restaurant",
    ],
    inputs: {
      billAmount: {
        label: "Montant de l'addition",
        help: "Le sous-total de votre addition avant le pourboire.",
      },
      tipPct: {
        label: "Pourcentage de pourboire (%)",
        help: "Pourboires habituels en France : 5–10% est courant mais pas obligatoire. Aux États-Unis, 15–20% est standard.",
      },
      numberOfPeople: {
        label: "Nombre de personnes",
        help: "Combien de personnes partagent l'addition ?",
      },
      roundUp: {
        label: "Arrondir à la personne supérieure",
        help: "Quand activé, la part de chaque personne est arrondie à l'euro supérieur.",
      },
    },
    outputs: {
      tipAmount: {
        label: "Montant du pourboire",
        help: "Pourboire total à laisser.",
      },
      totalAmount: {
        label: "Addition totale",
        help: "Montant de l'addition plus le pourboire.",
      },
      perPersonTotal: {
        label: "Par personne",
        help: "Part de chaque personne dans l'addition totale, pourboire compris.",
      },
      perPersonTip: {
        label: "Pourboire par personne",
        help: "Part de pourboire de chaque personne.",
      },
      totalRounded: {
        label: "Total (arrondi)",
        help: "Total lorsque chaque personne paie un montant arrondi à l'euro supérieur.",
      },
    },
    errors: {
      billRequired: "Le montant de l'addition doit être supérieur à zéro.",
    },
    faq: [
      {
        q: "Combien de pourboire laisser au restaurant ?",
        a: "En France, le service est légalement inclus dans les prix (15%). Un pourboire supplémentaire de 5–10% est apprécié pour un service exceptionnel mais n'est pas obligatoire. Aux États-Unis, 15–20% est attendu.",
      },
      {
        q: "Le service est-il déjà inclus en France ?",
        a: "Oui, en France la loi oblige les restaurants à inclure 15% de service dans les prix. Ce que vous laissez en plus est entièrement discrétionnaire.",
      },
      {
        q: "Comment partager l'addition de manière inégale ?",
        a: "Ce calculateur divise le total de manière égale. Pour un partage inégal, demandez à votre serveur de faire des additions séparées.",
      },
    ],
  },

  es: {
    title: "Calculadora de Propina",
    short: "Calcula el monto de la propina, la cuenta total y divídela entre tu grupo.",
    description:
      "Calculadora de propina gratuita. Ingresa el monto de la cuenta, el porcentaje de propina y el número de personas para ver al instante la propina, el total y los montos por persona.",
    keywords: [
      "calculadora propina",
      "calculadora restaurante",
      "dividir cuenta",
      "cuánto propina",
      "porcentaje propina",
      "dividir factura",
      "cuenta restaurante",
    ],
    inputs: {
      billAmount: {
        label: "Monto de la cuenta",
        help: "El subtotal en tu recibo antes de la propina.",
      },
      tipPct: {
        label: "Porcentaje de propina (%)",
        help: "Propinas estándar: 10–15% en España y Latinoamérica; 15–20% en EE.UU.",
      },
      numberOfPeople: {
        label: "Número de personas",
        help: "¿Cuántas personas dividen la cuenta?",
      },
      roundUp: {
        label: "Redondear por persona",
        help: "Cuando está activado, la parte de cada persona se redondea al dólar más cercano.",
      },
    },
    outputs: {
      tipAmount: {
        label: "Monto de la propina",
        help: "Propina total a dejar.",
      },
      totalAmount: {
        label: "Cuenta total",
        help: "Monto de la cuenta más la propina.",
      },
      perPersonTotal: {
        label: "Por persona",
        help: "Parte de cada persona en la cuenta total incluyendo propina.",
      },
      perPersonTip: {
        label: "Propina por persona",
        help: "Parte de la propina de cada persona.",
      },
      totalRounded: {
        label: "Total (redondeado)",
        help: "Total cuando cada persona paga un monto redondeado.",
      },
    },
    errors: {
      billRequired: "El monto de la cuenta debe ser mayor que cero.",
    },
    faq: [
      {
        q: "¿Cuánto debo dar de propina en un restaurante?",
        a: "En España y Latinoamérica, dejar entre 10–15% es habitual, aunque no es obligatorio. En EE.UU., el estándar para servicio de mesa es 15–20% del subtotal antes de impuestos.",
      },
      {
        q: "¿Hay que dar propina sobre el monto antes o después de impuestos?",
        a: "Los expertos en etiqueta recomiendan dar propina sobre el subtotal antes de impuestos. Sin embargo, mucha gente da propina sobre el total incluyendo impuestos.",
      },
      {
        q: "¿Qué hago si ya hay un cargo por servicio incluido?",
        a: "Algunos restaurantes añaden automáticamente un cargo por servicio del 18–20%. Revisa bien tu cuenta. Si ya está incluido, no estás obligado a dejar más.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Mancia",
    short: "Calcola l'importo della mancia, il conto totale e dividi il conto tra i tuoi commensali.",
    description:
      "Calcolatore di mancia gratuito. Inserisci il conto, la percentuale di mancia e il numero di persone per vedere subito mancia, totale e importi pro capite.",
    keywords: [
      "calcolatore mancia",
      "mancia ristorante",
      "dividere conto",
      "quanto lasciare di mancia",
      "percentuale mancia",
      "divisione conto",
      "conto ristorante",
    ],
    inputs: {
      billAmount: {
        label: "Importo del conto",
        help: "Il subtotale del tuo conto prima della mancia.",
      },
      tipPct: {
        label: "Percentuale di mancia (%)",
        help: "In Italia, il coperto è già incluso. Una mancia del 5–10% è apprezzata ma facoltativa. Negli USA, 15–20% è lo standard.",
      },
      numberOfPeople: {
        label: "Numero di persone",
        help: "Quante persone dividono il conto?",
      },
      roundUp: {
        label: "Arrotonda per persona",
        help: "Se attivato, la quota di ogni persona viene arrotondata all'euro superiore.",
      },
    },
    outputs: {
      tipAmount: {
        label: "Importo della mancia",
        help: "Mancia totale da lasciare.",
      },
      totalAmount: {
        label: "Conto totale",
        help: "Importo del conto più la mancia.",
      },
      perPersonTotal: {
        label: "Per persona",
        help: "Quota di ogni persona nel conto totale inclusa la mancia.",
      },
      perPersonTip: {
        label: "Mancia per persona",
        help: "Quota della mancia di ogni persona.",
      },
      totalRounded: {
        label: "Totale (arrotondato)",
        help: "Totale quando ogni persona paga un importo arrotondato.",
      },
    },
    errors: {
      billRequired: "L'importo del conto deve essere maggiore di zero.",
    },
    faq: [
      {
        q: "Quanto si lascia di mancia in un ristorante in Italia?",
        a: "In Italia il coperto è già incluso nel conto. Lasciare una mancia del 5–10% per un servizio eccellente è un gesto apprezzato ma non obbligatorio. Negli USA, il 15–20% è considerato la norma.",
      },
      {
        q: "Il servizio è già incluso in Italia?",
        a: "Il coperto o pane e coperto è una tariffa standard che copre il servizio. In alcuni ristoranti può essere già inclusa una percentuale di servizio. Controlla il conto attentamente.",
      },
    ],
  },

  ar: {
    title: "حاسبة البقشيش",
    short: "احسب مبلغ البقشيش والفاتورة الإجمالية وقسّمها على أفراد مجموعتك.",
    description:
      "حاسبة بقشيش مجانية. أدخل مبلغ الفاتورة ونسبة البقشيش وعدد الأشخاص لترى فورًا البقشيش والمجموع والمبالغ لكل شخص.",
    keywords: [
      "حاسبة البقشيش",
      "بقشيش المطعم",
      "تقسيم الفاتورة",
      "كم بقشيش",
      "نسبة البقشيش",
      "مقسّم الفاتورة",
      "حساب المطعم",
    ],
    inputs: {
      billAmount: {
        label: "مبلغ الفاتورة",
        help: "المجموع الفرعي في إيصالك قبل البقشيش.",
      },
      tipPct: {
        label: "نسبة البقشيش (%)",
        help: "البقشيش المعتاد في الولايات المتحدة: 15% (مقبول)، 18% (خدمة جيدة)، 20–25% (ممتاز).",
      },
      numberOfPeople: {
        label: "عدد الأشخاص",
        help: "كم شخصًا يتشارك الفاتورة؟",
      },
      roundUp: {
        label: "تقريب لكل شخص",
        help: "عند التفعيل، تُقرَّب حصة كل شخص إلى أقرب دولار كامل.",
      },
    },
    outputs: {
      tipAmount: {
        label: "مبلغ البقشيش",
        help: "إجمالي البقشيش الذي يجب تركه.",
      },
      totalAmount: {
        label: "إجمالي الفاتورة",
        help: "مبلغ الفاتورة زائد البقشيش.",
      },
      perPersonTotal: {
        label: "لكل شخص",
        help: "حصة كل شخص من الفاتورة الإجمالية شاملةً البقشيش.",
      },
      perPersonTip: {
        label: "البقشيش لكل شخص",
        help: "حصة كل شخص من البقشيش.",
      },
      totalRounded: {
        label: "الإجمالي (مقرَّب)",
        help: "المجموع حين يدفع كل شخص مبلغًا مقرَّبًا.",
      },
    },
    errors: {
      billRequired: "يجب أن يكون مبلغ الفاتورة أكبر من الصفر.",
    },
    faq: [
      {
        q: "كم يجب أن أترك من بقشيش في المطعم؟",
        a: "يتفاوت البقشيش بحسب البلد. في الولايات المتحدة، 15–20% من المجموع الفرعي هو المعيار لخدمة الطاولة. في كثير من الدول العربية والأوروبية، البقشيش اختياري وعادةً 5–10%.",
      },
      {
        q: "هل يجب حساب البقشيش قبل الضريبة أم بعدها؟",
        a: "يُنصح عمومًا بحساب البقشيش على المجموع الفرعي قبل الضريبة، لكن كثيرين يحسبونه على الإجمالي شاملًا الضريبة.",
      },
      {
        q: "ماذا لو كانت رسوم الخدمة مدرجة بالفعل؟",
        a: "بعض المطاعم تضيف تلقائيًا 18–20% للمجموعات الكبيرة. تحقق من الفاتورة جيدًا. إذا كانت مدرجة، فلست ملزمًا بإضافة المزيد.",
      },
    ],
  },

  ru: {
    title: "Калькулятор чаевых",
    short: "Рассчитайте сумму чаевых, итоговый счёт и разделите его между членами вашей группы.",
    description:
      "Бесплатный калькулятор чаевых. Введите сумму счёта, процент чаевых и количество человек, чтобы мгновенно увидеть чаевые, итог и суммы на каждого.",
    keywords: [
      "калькулятор чаевых",
      "чаевые ресторан",
      "разделить счёт",
      "сколько оставить чаевых",
      "процент чаевых",
      "делитель счёта",
      "расчёт в ресторане",
    ],
    inputs: {
      billAmount: {
        label: "Сумма счёта",
        help: "Промежуточная сумма в чеке до чаевых.",
      },
      tipPct: {
        label: "Процент чаевых (%)",
        help: "Стандартные чаевые в ресторанах: 10–15% в России, 15–20% в США.",
      },
      numberOfPeople: {
        label: "Количество человек",
        help: "Сколько человек делят счёт?",
      },
      roundUp: {
        label: "Округлить на каждого",
        help: "При включении доля каждого человека округляется до ближайшего целого рубля.",
      },
    },
    outputs: {
      tipAmount: {
        label: "Сумма чаевых",
        help: "Общая сумма чаевых для оставления.",
      },
      totalAmount: {
        label: "Итог по счёту",
        help: "Сумма счёта плюс чаевые.",
      },
      perPersonTotal: {
        label: "На человека",
        help: "Доля каждого человека в общем счёте включая чаевые.",
      },
      perPersonTip: {
        label: "Чаевые на человека",
        help: "Доля каждого человека в чаевых.",
      },
      totalRounded: {
        label: "Итого (округлённо)",
        help: "Итог, когда каждый платит округлённую сумму.",
      },
    },
    errors: {
      billRequired: "Сумма счёта должна быть больше нуля.",
    },
    faq: [
      {
        q: "Сколько оставлять чаевых в ресторане?",
        a: "В России чаевые 10–15% от суммы счёта считаются стандартом и выражением благодарности за хорошее обслуживание. В США стандарт — 15–20% от суммы до налога.",
      },
      {
        q: "Нужно ли давать чаевые, если в счёт уже включён сервисный сбор?",
        a: "Если в счёт уже включён сервисный сбор, дополнительные чаевые необязательны. Однако вы можете оставить дополнительное вознаграждение за исключительный сервис.",
      },
    ],
  },

  zh: {
    title: "小费计算器",
    short: "计算小费金额、总账单，并在您的群体中平均分摊。",
    description:
      "免费小费计算器。输入账单金额、小费百分比和人数，立即查看小费、总额和每人应付金额。",
    keywords: [
      "小费计算器",
      "餐厅小费",
      "AA制分摊",
      "应该给多少小费",
      "小费百分比",
      "账单分摊",
      "结账计算",
    ],
    inputs: {
      billAmount: {
        label: "账单金额",
        help: "您收据上小费前的小计金额。",
      },
      tipPct: {
        label: "小费百分比（%）",
        help: "美国标准小费：15%（一般）、18%（良好服务）、20-25%（优秀）。请根据当地习惯调整。",
      },
      numberOfPeople: {
        label: "人数",
        help: "有多少人平分账单？",
      },
      roundUp: {
        label: "每人向上取整",
        help: "启用后，每人的份额向上取整到最近的整数，便于现金支付。",
      },
    },
    outputs: {
      tipAmount: {
        label: "小费金额",
        help: "应留下的总小费。",
      },
      totalAmount: {
        label: "总账单",
        help: "账单金额加小费。",
      },
      perPersonTotal: {
        label: "每人金额",
        help: "每人应付的含小费总金额。",
      },
      perPersonTip: {
        label: "每人小费",
        help: "每人应付的小费份额。",
      },
      totalRounded: {
        label: "总计（取整后）",
        help: "每人支付取整金额时的总计。",
      },
    },
    errors: {
      billRequired: "账单金额必须大于零。",
    },
    faq: [
      {
        q: "在餐厅应该给多少小费？",
        a: "在中国大陆，小费通常不是必须的。在美国，桌边服务标准小费为税前金额的15-20%。18%是一般水平，20%是良好，25%以上是优秀。",
      },
      {
        q: "小费应该基于税前还是税后金额计算？",
        a: "礼仪建议基于税前小计计算小费。不过很多人觉得基于含税总额更方便，结果是小费比例略高。",
      },
      {
        q: "如果服务费已经包含在内该怎么办？",
        a: "有些餐厅会为大型聚会自动添加18-20%的服务费。仔细检查您的收据。如果已包含服务费，则无需再额外给小费。",
      },
    ],
  },

  ja: {
    title: "チップ計算機",
    short: "チップ額、合計請求額、グループでの割り勘金額を計算します。",
    description:
      "無料チップ計算機。請求金額、チップ率、人数を入力するだけで、チップ、合計、一人あたりの金額が即座にわかります。",
    keywords: [
      "チップ計算機",
      "レストランチップ",
      "割り勘計算",
      "チップの目安",
      "チップ率",
      "割り勘アプリ",
      "飲食代計算",
    ],
    inputs: {
      billAmount: {
        label: "請求金額",
        help: "チップ前の小計金額（レシートの合計）。",
      },
      tipPct: {
        label: "チップ率（%）",
        help: "日本ではチップの習慣はありません。アメリカでの標準：15%（普通）、18%（良い）、20-25%（優秀）。",
      },
      numberOfPeople: {
        label: "人数",
        help: "何人で割り勘にしますか？",
      },
      roundUp: {
        label: "一人分を切り上げ",
        help: "有効にすると、一人あたりの金額が最も近い整数に切り上げられます。",
      },
    },
    outputs: {
      tipAmount: {
        label: "チップ額",
        help: "渡すチップの合計金額。",
      },
      totalAmount: {
        label: "合計請求額",
        help: "請求金額プラスチップ。",
      },
      perPersonTotal: {
        label: "一人あたり",
        help: "チップ含む合計から一人分の金額。",
      },
      perPersonTip: {
        label: "一人あたりのチップ",
        help: "チップを一人で分担した金額。",
      },
      totalRounded: {
        label: "合計（切り上げ後）",
        help: "各自が切り上げた金額を支払った場合の合計。",
      },
    },
    errors: {
      billRequired: "請求金額はゼロより大きくなければなりません。",
    },
    faq: [
      {
        q: "レストランでどれくらいチップを渡せばよいですか？",
        a: "日本ではチップを渡す習慣はありません。アメリカでは税抜き小計の15–20%が標準です。18%は普通、20%は良い、25%以上は優秀とされています。",
      },
      {
        q: "チップは税込みと税抜きのどちらの金額に対して計算しますか？",
        a: "マナーの観点では税抜きの小計に対して計算することが推奨されていますが、多くの人は税込みの合計に対して計算します。",
      },
      {
        q: "サービス料が既に含まれている場合はどうすればよいですか？",
        a: "大人数の場合、一部のレストランは自動的に18–20%のサービス料を請求書に追加します。レシートをよく確認してください。",
      },
    ],
  },

  ko: {
    title: "팁 계산기",
    short: "팁 금액, 총 청구액을 계산하고 그룹에서 균등하게 나누세요.",
    description:
      "무료 팁 계산기. 청구 금액, 팁 비율, 인원수를 입력하면 팁, 합계, 1인당 금액을 즉시 확인할 수 있습니다.",
    keywords: [
      "팁 계산기",
      "레스토랑 팁",
      "더치페이 계산기",
      "팁 얼마",
      "팁 비율",
      "청구서 나누기",
      "식사비 계산",
    ],
    inputs: {
      billAmount: {
        label: "청구 금액",
        help: "팁 전 영수증의 소계 금액.",
      },
      tipPct: {
        label: "팁 비율 (%)",
        help: "한국에서는 팁 문화가 없습니다. 미국 기준: 15%(보통), 18%(좋은 서비스), 20-25%(훌륭함).",
      },
      numberOfPeople: {
        label: "인원수",
        help: "청구서를 몇 명이 나누나요?",
      },
      roundUp: {
        label: "1인당 올림",
        help: "활성화하면 각 사람의 몫이 가장 가까운 정수로 올림됩니다.",
      },
    },
    outputs: {
      tipAmount: {
        label: "팁 금액",
        help: "남길 총 팁.",
      },
      totalAmount: {
        label: "총 청구액",
        help: "청구 금액과 팁의 합계.",
      },
      perPersonTotal: {
        label: "1인당 금액",
        help: "팁 포함 각 사람의 총 청구 금액.",
      },
      perPersonTip: {
        label: "1인당 팁",
        help: "각 사람의 팁 몫.",
      },
      totalRounded: {
        label: "합계(올림 후)",
        help: "각자 올림된 금액을 낼 때의 합계.",
      },
    },
    errors: {
      billRequired: "청구 금액은 0보다 커야 합니다.",
    },
    faq: [
      {
        q: "레스토랑에서 팁은 얼마나 주어야 하나요?",
        a: "한국에서는 팁 문화가 일반적이지 않습니다. 미국에서는 세금 전 금액의 15-20%가 테이블 서비스의 기준입니다. 18%는 평균, 20%는 좋음, 25% 이상은 훌륭함을 의미합니다.",
      },
      {
        q: "팁은 세금 전/후 금액으로 계산해야 하나요?",
        a: "에티켓 전문가들은 세금 전 소계를 기준으로 계산할 것을 권장합니다. 하지만 많은 사람들이 세금 포함 합계를 기준으로 계산합니다.",
      },
      {
        q: "서비스 요금이 이미 포함되어 있다면?",
        a: "일부 레스토랑은 대규모 그룹에 자동으로 18-20%의 서비스 요금을 추가합니다. 영수증을 잘 확인하세요.",
      },
    ],
  },

  hi: {
    title: "टिप कैलकुलेटर",
    short: "टिप राशि, कुल बिल की गणना करें और अपने समूह में बिल को बराबर बांटें।",
    description:
      "निःशुल्क टिप कैलकुलेटर। बिल राशि, टिप प्रतिशत और लोगों की संख्या दर्ज करें और तुरंत टिप, कुल और प्रति व्यक्ति राशि देखें।",
    keywords: [
      "टिप कैलकुलेटर",
      "रेस्तरां टिप",
      "बिल बांटना",
      "कितना टिप दें",
      "टिप प्रतिशत",
      "बिल विभाजक",
      "डाइनिंग कैलकुलेटर",
    ],
    inputs: {
      billAmount: {
        label: "बिल राशि",
        help: "टिप से पहले रसीद पर उप-योग।",
      },
      tipPct: {
        label: "टिप प्रतिशत (%)",
        help: "मानक रेस्तरां टिप: 15% (पर्याप्त), 18% (अच्छी सेवा), 20-25% (उत्कृष्ट)।",
      },
      numberOfPeople: {
        label: "लोगों की संख्या",
        help: "बिल कितने लोग बांट रहे हैं?",
      },
      roundUp: {
        label: "प्रति व्यक्ति ऊपर गोल करें",
        help: "सक्षम होने पर प्रत्येक व्यक्ति की राशि निकटतम रुपये में गोल हो जाती है।",
      },
    },
    outputs: {
      tipAmount: {
        label: "टिप राशि",
        help: "छोड़ने वाला कुल टिप।",
      },
      totalAmount: {
        label: "कुल बिल",
        help: "बिल राशि और टिप का योग।",
      },
      perPersonTotal: {
        label: "प्रति व्यक्ति",
        help: "टिप सहित प्रत्येक व्यक्ति का हिस्सा।",
      },
      perPersonTip: {
        label: "प्रति व्यक्ति टिप",
        help: "प्रत्येक व्यक्ति का टिप हिस्सा।",
      },
      totalRounded: {
        label: "कुल (गोल)",
        help: "जब प्रत्येक व्यक्ति गोल राशि चुकाता है तो कुल।",
      },
    },
    errors: {
      billRequired: "बिल राशि शून्य से अधिक होनी चाहिए।",
    },
    faq: [
      {
        q: "रेस्तरां में कितना टिप देना चाहिए?",
        a: "भारत में टिप की कोई बाध्यता नहीं है, लेकिन 10% अच्छी सेवा के लिए उचित माना जाता है। अमेरिका में टेबल सेवा के लिए 15-20% मानक है।",
      },
      {
        q: "टिप कर से पहले या बाद की राशि पर दें?",
        a: "शिष्टाचार विशेषज्ञ कर-पूर्व उप-योग पर टिप देने की सलाह देते हैं। हालाँकि, बहुत से लोग कुल राशि पर टिप देते हैं।",
      },
      {
        q: "अगर सेवा शुल्क पहले से शामिल है तो क्या करें?",
        a: "कुछ रेस्तरां बड़े समूहों के लिए स्वचालित रूप से 18-20% सेवा शुल्क जोड़ते हैं। रसीद को ध्यान से जांचें। अगर पहले से शामिल है तो अतिरिक्त टिप अनिवार्य नहीं है।",
      },
    ],
  },
};

export default i18n;
