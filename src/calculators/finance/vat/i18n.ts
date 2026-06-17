import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "VAT / Sales Tax Calculator",
    short: "Calculate VAT-exclusive or VAT-inclusive prices, tax amount, and base price for any tax rate.",
    description:
      "Free VAT calculator. Add tax to a base price or extract tax from a gross price. Supports any VAT, GST, or sales tax rate. Instantly shows base price, tax amount, and total.",
    keywords: [
      "VAT calculator",
      "sales tax calculator",
      "GST calculator",
      "tax inclusive calculator",
      "tax exclusive calculator",
      "value added tax",
      "price with tax",
    ],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Add VAT to price: enter the pre-tax base price and get the total. Extract VAT from price: enter the gross (tax-included) price and get the base and tax amount.",
      },
      amount: {
        label: "Amount",
        help: "Enter the base price (exclusive mode) or the gross price including tax (inclusive mode).",
      },
      vatRate: {
        label: "VAT / Tax Rate (%)",
        help: "Common rates: UK/France/AU 20%, Germany 19%, India 18%, US varies by state, Saudi Arabia 15%, UAE 5%.",
      },
    },
    outputs: {
      totalPrice: {
        label: "Total Price (incl. VAT)",
        help: "The final price the customer pays, including tax.",
      },
      basePrice: {
        label: "Base Price (excl. VAT)",
        help: "The pre-tax price before adding VAT.",
      },
      vatAmount: {
        label: "VAT Amount",
        help: "The tax amount — the difference between the total and base price.",
      },
      effectiveRate: {
        label: "Effective Rate",
        help: "VAT as a percentage of the base price. In standard scenarios this equals the stated VAT rate.",
      },
    },
    options: {
      mode: {
        exclusive: "Add VAT to price",
        inclusive: "Extract VAT from price",
      },
    },
    errors: {
      amountRequired: "Amount must be greater than zero.",
    },
    faq: [
      {
        q: "What is VAT?",
        a: "Value-Added Tax (VAT) is a consumption tax levied on the value added at each stage of production and distribution. The final consumer pays the full accumulated VAT. It is used in over 160 countries, including all EU member states.",
      },
      {
        q: "What is the difference between VAT-exclusive and VAT-inclusive pricing?",
        a: "VAT-exclusive (or ex-VAT) means the price shown does not include tax — you add tax on top. VAT-inclusive (or inc-VAT, also called gross price) means tax is already embedded in the displayed price. Businesses typically quote prices ex-VAT; consumer retail prices are usually inc-VAT.",
      },
      {
        q: "How do I extract VAT from a gross price?",
        a: "Use the inclusive mode formula: Base Price = Gross Price ÷ (1 + VAT Rate ÷ 100). For example, £120 inc. 20% VAT: Base = £120 ÷ 1.20 = £100. VAT = £120 − £100 = £20.",
      },
      {
        q: "What is the difference between VAT and sales tax?",
        a: "Sales tax (common in the USA) is collected only at the final point of sale. VAT is collected at every stage of the supply chain, but businesses claim back the VAT they paid on inputs. The end cost to the consumer is similar, but the collection mechanism differs.",
      },
    ],
  },
  nl: {
    title: "BTW / Sales Belasting Calculator",
    short: "Bereken BTW-exclusive or BTW-inclusive prices, tax amount, and base price for any tax rate.",
    description:
      "Gratis BTW calculator. Add tax to a base price or extract tax from a gross price. Supports any BTW, GST, or sales tax rate. Direct shows base price, tax amount, and total.",
    keywords: [
      "BTW calculator",
      "sales tax calculator",
      "GST calculator",
      "tax inclusive calculator",
      "tax exclusive calculator",
      "value added tax",
      "price with tax",
    ],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Add BTW to price: enter the pre-tax base price and get the total. Extract BTW from price: enter the gross (tax-included) price and get the base and tax amount.",
      },
      amount: {
        label: "Amount",
        help: "Enter the base price (exclusive mode) or the gross price including tax (inclusive mode).",
      },
      vatRate: {
        label: "BTW / Belasting Rate (%)",
        help: "Common rates: UK/France/AU 20%, Germany 19%, India 18%, US varies by state, Saudi Arabia 15%, UAE 5%.",
      },
    },
    outputs: {
      totalPrice: {
        label: "Total Price (incl. BTW)",
        help: "The final price the customer pays, including tax.",
      },
      basePrice: {
        label: "Base Price (excl. BTW)",
        help: "The pre-tax price before adding BTW.",
      },
      vatAmount: {
        label: "BTW Amount",
        help: "The tax amount — the difference between the total and base price.",
      },
      effectiveRate: {
        label: "Effective Rate",
        help: "BTW as a percentage of the base price. In standard scenarios this equals the stated BTW rate.",
      },
    },
    options: {
      mode: {
        exclusive: "Add BTW to price",
        inclusive: "Extract BTW from price",
      },
    },
    errors: {
      amountRequired: "Amount must be greater than zero.",
    },
    faq: [
      {
        q: "What is BTW?",
        a: "Waarde-Added Belasting (BTW) is a consumption tax levied on the value added at each stage of production and distribution. The final consumer pays the full accumulated BTW. It is used in over 160 countries, including all EU member states.",
      },
      {
        q: "What is the difference between BTW-exclusive and BTW-inclusive pricing?",
        a: "BTW-exclusive (or ex-BTW) means the price shown does not include tax — you add tax on top. BTW-inclusive (or inc-BTW, also called gross price) means tax is already embedded in the displayed price. Businesses typically quote prices ex-BTW; consumer retail prices are usually inc-BTW.",
      },
      {
        q: "How do I extract BTW from a gross price?",
        a: "Use the inclusive mode formula: Base Price = Gross Price ÷ (1 + BTW Rate ÷ 100). For example, £120 inc. 20% BTW: Base = £120 ÷ 1.20 = £100. BTW = £120 − £100 = £20.",
      },
      {
        q: "What is the difference between BTW and sales tax?",
        a: "Sales tax (common in the USA) is collected only at the final point of sale. BTW is collected at every stage of the supply chain, but businesses claim back the BTW they paid on inputs. The end cost to the consumer is similar, but the collection mechanism differs.",
      },
    ],
  },

  pl: {
    title: "VAT / Sales Podatek Kalkulator",
    short: "Oblicz VAT-exclusive or VAT-inclusive prices, tax amount, and base price for any tax rate.",
    description:
      "Darmowy VAT kalkulator. Add tax to a base price or extract tax from a gross price. Supports any VAT, GST, or sales tax rate. Natychmiast shows base price, tax amount, and total.",
    keywords: [
      "VAT kalkulator",
      "sales tax kalkulator",
      "GST kalkulator",
      "tax inclusive kalkulator",
      "tax exclusive kalkulator",
      "value added tax",
      "price with tax",
    ],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Add VAT to price: enter the pre-tax base price and get the total. Extract VAT from price: enter the gross (tax-included) price and get the base and tax amount.",
      },
      amount: {
        label: "Amount",
        help: "Enter the base price (exclusive mode) or the gross price including tax (inclusive mode).",
      },
      vatRate: {
        label: "VAT / Podatek Rate (%)",
        help: "Common rates: UK/France/AU 20%, Germany 19%, India 18%, US varies by state, Saudi Arabia 15%, UAE 5%.",
      },
    },
    outputs: {
      totalPrice: {
        label: "Total Price (incl. VAT)",
        help: "The final price the customer pays, including tax.",
      },
      basePrice: {
        label: "Base Price (excl. VAT)",
        help: "The pre-tax price before adding VAT.",
      },
      vatAmount: {
        label: "VAT Amount",
        help: "The tax amount — the difference between the total and base price.",
      },
      effectiveRate: {
        label: "Effective Rate",
        help: "VAT as a percentage of the base price. In standard scenarios this equals the stated VAT rate.",
      },
    },
    options: {
      mode: {
        exclusive: "Add VAT to price",
        inclusive: "Extract VAT from price",
      },
    },
    errors: {
      amountRequired: "Amount must be greater than zero.",
    },
    faq: [
      {
        q: "What is VAT?",
        a: "Wartość-Added Podatek (VAT) is a consumption tax levied on the value added at each stage of production and distribution. The final consumer pays the full accumulated VAT. It is used in over 160 countries, including all EU member states.",
      },
      {
        q: "What is the difference between VAT-exclusive and VAT-inclusive pricing?",
        a: "VAT-exclusive (or ex-VAT) means the price shown does not include tax — you add tax on top. VAT-inclusive (or inc-VAT, also called gross price) means tax is already embedded in the displayed price. Businesses typically quote prices ex-VAT; consumer retail prices are usually inc-VAT.",
      },
      {
        q: "How do I extract VAT from a gross price?",
        a: "Use the inclusive mode formula: Base Price = Gross Price ÷ (1 + VAT Rate ÷ 100). For example, £120 inc. 20% VAT: Base = £120 ÷ 1.20 = £100. VAT = £120 − £100 = £20.",
      },
      {
        q: "What is the difference between VAT and sales tax?",
        a: "Sales tax (common in the USA) is collected only at the final point of sale. VAT is collected at every stage of the supply chain, but businesses claim back the VAT they paid on inputs. The end cost to the consumer is similar, but the collection mechanism differs.",
      },
    ],
  },
  pt: {
    title: "Calculadora de IVA",
    short: "Some, retire ou calcule o IVA sobre um preço.",
    description:
      "Calculadora gratuita de IVA. Adicione, retire ou descubra o IVA aplicado a um preço com base na taxa em vigor.",
    keywords: ["IVA", "calculadora IVA", "imposto valor acrescentado", "preço com IVA", "preço sem IVA"],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Add VAT to price: enter the pre-tax base price and get the total. Extract VAT from price: enter the gross (tax-included) price and get the base and tax amount.",
      },
      amount: {
        label: "Amount",
        help: "Enter the base price (exclusive mode) or the gross price including tax (inclusive mode).",
      },
      vatRate: {
        label: "VAT / Tax Rate (%)",
        help: "Common rates: UK/France/AU 20%, Germany 19%, India 18%, US varies by state, Saudi Arabia 15%, UAE 5%.",
      },
    },
    outputs: {
      totalPrice: {
        label: "Total Price (incl. VAT)",
        help: "The final price the customer pays, including tax.",
      },
      basePrice: {
        label: "Base Price (excl. VAT)",
        help: "The pre-tax price before adding VAT.",
      },
      vatAmount: {
        label: "VAT Amount",
        help: "The tax amount — the difference between the total and base price.",
      },
      effectiveRate: {
        label: "Effective Rate",
        help: "VAT as a percentage of the base price. In standard scenarios this equals the stated VAT rate.",
      },
    },
    options: {
      mode: {
        exclusive: "Add VAT to price",
        inclusive: "Extract VAT from price",
      },
    },
    errors: {
      amountRequired: "Amount must be greater than zero.",
    },
    faq: [
      {
        q: "What is VAT?",
        a: "Value-Added Tax (VAT) is a consumption tax levied on the value added at each stage of production and distribution. The final consumer pays the full accumulated VAT. It is used in over 160 countries, including all EU member states.",
      },
      {
        q: "What is the difference between VAT-exclusive and VAT-inclusive pricing?",
        a: "VAT-exclusive (or ex-VAT) means the price shown does not include tax — you add tax on top. VAT-inclusive (or inc-VAT, also called gross price) means tax is already embedded in the displayed price. Businesses typically quote prices ex-VAT; consumer retail prices are usually inc-VAT.",
      },
      {
        q: "How do I extract VAT from a gross price?",
        a: "Use the inclusive mode formula: Base Price = Gross Price ÷ (1 + VAT Rate ÷ 100). For example, £120 inc. 20% VAT: Base = £120 ÷ 1.20 = £100. VAT = £120 − £100 = £20.",
      },
      {
        q: "What is the difference between VAT and sales tax?",
        a: "Sales tax (common in the USA) is collected only at the final point of sale. VAT is collected at every stage of the supply chain, but businesses claim back the VAT they paid on inputs. The end cost to the consumer is similar, but the collection mechanism differs.",
      },
    ],
  },
  id: {
    title: "Kalkulator PPN",
    short: "Tambah, kurangi, atau hitung PPN pada harga.",
    description:
      "Kalkulator PPN gratis. Tambahkan, kurangi, atau temukan PPN yang diterapkan pada harga berdasarkan tarif yang berlaku.",
    keywords: ["PPN", "kalkulator PPN", "pajak pertambahan nilai", "harga dengan PPN", "harga tanpa PPN"],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Add VAT to price: enter the pre-tax base price and get the total. Extract VAT from price: enter the gross (tax-included) price and get the base and tax amount.",
      },
      amount: {
        label: "Amount",
        help: "Enter the base price (exclusive mode) or the gross price including tax (inclusive mode).",
      },
      vatRate: {
        label: "VAT / Tax Rate (%)",
        help: "Common rates: UK/France/AU 20%, Germany 19%, India 18%, US varies by state, Saudi Arabia 15%, UAE 5%.",
      },
    },
    outputs: {
      totalPrice: {
        label: "Total Price (incl. VAT)",
        help: "The final price the customer pays, including tax.",
      },
      basePrice: {
        label: "Base Price (excl. VAT)",
        help: "The pre-tax price before adding VAT.",
      },
      vatAmount: {
        label: "VAT Amount",
        help: "The tax amount — the difference between the total and base price.",
      },
      effectiveRate: {
        label: "Effective Rate",
        help: "VAT as a percentage of the base price. In standard scenarios this equals the stated VAT rate.",
      },
    },
    options: {
      mode: {
        exclusive: "Add VAT to price",
        inclusive: "Extract VAT from price",
      },
    },
    errors: {
      amountRequired: "Amount must be greater than zero.",
    },
    faq: [
      {
        q: "What is VAT?",
        a: "Value-Added Tax (VAT) is a consumption tax levied on the value added at each stage of production and distribution. The final consumer pays the full accumulated VAT. It is used in over 160 countries, including all EU member states.",
      },
      {
        q: "What is the difference between VAT-exclusive and VAT-inclusive pricing?",
        a: "VAT-exclusive (or ex-VAT) means the price shown does not include tax — you add tax on top. VAT-inclusive (or inc-VAT, also called gross price) means tax is already embedded in the displayed price. Businesses typically quote prices ex-VAT; consumer retail prices are usually inc-VAT.",
      },
      {
        q: "How do I extract VAT from a gross price?",
        a: "Use the inclusive mode formula: Base Price = Gross Price ÷ (1 + VAT Rate ÷ 100). For example, £120 inc. 20% VAT: Base = £120 ÷ 1.20 = £100. VAT = £120 − £100 = £20.",
      },
      {
        q: "What is the difference between VAT and sales tax?",
        a: "Sales tax (common in the USA) is collected only at the final point of sale. VAT is collected at every stage of the supply chain, but businesses claim back the VAT they paid on inputs. The end cost to the consumer is similar, but the collection mechanism differs.",
      },
    ],
  },


  tr: {
    title: "KDV / Satış Vergisi Hesaplayıcısı",
    short: "KDV hariç veya KDV dahil fiyatları, vergi tutarını ve matrahı hesaplayın.",
    description:
      "Ücretsiz KDV hesaplayıcısı. Fiyata KDV ekleyin veya KDV dahil fiyattan matrahı çıkarın. Tüm KDV oranlarını destekler.",
    keywords: [
      "KDV hesaplayıcı",
      "satış vergisi hesaplayıcı",
      "KDV dahil fiyat",
      "KDV hariç fiyat",
      "vergi hesaplama",
      "fatura KDV",
    ],
    inputs: {
      mode: {
        label: "Hesaplama Modu",
        help: "Fiyata KDV ekle: matrahı girin, toplam tutarı bulun. Fiyattan KDV çıkar: KDV dahil toplam fiyatı girin, matrahı ve KDV'yi bulun.",
      },
      amount: {
        label: "Tutar",
        help: "KDV hariç matrah (dışlayıcı mod) veya KDV dahil toplam fiyat (kapsayıcı mod) girin.",
      },
      vatRate: {
        label: "KDV / Vergi Oranı (%)",
        help: "Türkiye standart KDV oranları: %20 (genel), %10 (indirimli), %1 (temel gıda).",
      },
    },
    outputs: {
      totalPrice: {
        label: "Toplam Fiyat (KDV dahil)",
        help: "Tüketicinin ödediği nihai fiyat.",
      },
      basePrice: {
        label: "Matrah (KDV hariç)",
        help: "KDV eklenmeden önceki fiyat.",
      },
      vatAmount: {
        label: "KDV Tutarı",
        help: "Toplam fiyat ile matrah arasındaki fark.",
      },
      effectiveRate: {
        label: "Efektif Oran",
        help: "KDV tutarının matraha oranı.",
      },
    },
    options: {
      mode: {
        exclusive: "Fiyata KDV ekle",
        inclusive: "Fiyattan KDV çıkar",
      },
    },
    errors: {
      amountRequired: "Tutar sıfırdan büyük olmalıdır.",
    },
  },

  de: {
    title: "MwSt. / Umsatzsteuer-Rechner",
    short: "Netto- und Bruttopreise mit Mehrwertsteuer berechnen — exklusiv oder inklusiv.",
    description:
      "Kostenloser MwSt.-Rechner. MwSt. zum Nettopreis addieren oder aus dem Bruttobetrag herausrechnen. Alle Steuersätze werden unterstützt.",
    keywords: [
      "MwSt. Rechner",
      "Mehrwertsteuer Rechner",
      "Bruttopreis berechnen",
      "Nettopreis berechnen",
      "Umsatzsteuer",
      "Steuer herausrechnen",
    ],
    inputs: {
      mode: {
        label: "Berechnungsmodus",
        help: "MwSt. addieren: Nettopreis eingeben und Bruttopreis erhalten. MwSt. herausrechnen: Bruttobetrag eingeben und Nettobetrag ermitteln.",
      },
      amount: {
        label: "Betrag",
        help: "Nettopreis (exklusiv) oder Bruttopreis inkl. MwSt. (inklusiv) eingeben.",
      },
      vatRate: {
        label: "MwSt.-Satz (%)",
        help: "Deutschland: 19 % Regelsteuersatz, 7 % ermäßigter Satz (Lebensmittel, Bücher).",
      },
    },
    outputs: {
      totalPrice: {
        label: "Gesamtpreis (inkl. MwSt.)",
        help: "Der Betrag, den der Kunde zahlt.",
      },
      basePrice: {
        label: "Nettobetrag (exkl. MwSt.)",
        help: "Preis ohne Steuer.",
      },
      vatAmount: {
        label: "MwSt.-Betrag",
        help: "Der Steuerbetrag — Differenz zwischen Brutto- und Nettobetrag.",
      },
      effectiveRate: {
        label: "Effektiver Satz",
        help: "MwSt. als Prozentsatz des Nettobetrags.",
      },
    },
    options: {
      mode: {
        exclusive: "MwSt. zum Preis addieren",
        inclusive: "MwSt. aus Preis herausrechnen",
      },
    },
    errors: {
      amountRequired: "Der Betrag muss größer als null sein.",
    },
  },

  fr: {
    title: "Calculatrice TVA / Taxe de vente",
    short: "Calculez les prix HT ou TTC, le montant de TVA et le prix de base pour tout taux.",
    description:
      "Calculatrice TVA gratuite. Ajoutez la TVA à un prix HT ou extrayez-la d'un prix TTC. Tous les taux de TVA et GST sont supportés.",
    keywords: [
      "calculatrice TVA",
      "calcul TVA",
      "prix TTC",
      "prix HT",
      "montant TVA",
      "taxe de vente",
      "TVA inclusive",
    ],
    inputs: {
      mode: {
        label: "Mode de calcul",
        help: "Ajouter la TVA : entrez le prix HT pour obtenir le total TTC. Extraire la TVA : entrez le prix TTC pour obtenir la base et la TVA.",
      },
      amount: {
        label: "Montant",
        help: "Prix HT (mode exclusif) ou prix TTC (mode inclusif).",
      },
      vatRate: {
        label: "Taux de TVA (%)",
        help: "France : 20 % (normal), 10 % (intermédiaire), 5,5 % (réduit), 2,1 % (super-réduit).",
      },
    },
    outputs: {
      totalPrice: {
        label: "Prix TTC",
        help: "Le montant final payé par le client, TVA incluse.",
      },
      basePrice: {
        label: "Prix HT",
        help: "Le prix avant application de la TVA.",
      },
      vatAmount: {
        label: "Montant TVA",
        help: "La différence entre le prix TTC et le prix HT.",
      },
      effectiveRate: {
        label: "Taux effectif",
        help: "TVA exprimée en pourcentage du prix HT.",
      },
    },
    options: {
      mode: {
        exclusive: "Ajouter la TVA au prix",
        inclusive: "Extraire la TVA du prix",
      },
    },
    errors: {
      amountRequired: "Le montant doit être supérieur à zéro.",
    },
  },

  es: {
    title: "Calculadora de IVA / Impuesto de ventas",
    short: "Calcule precios sin IVA o con IVA incluido, cuota impositiva y base imponible para cualquier tipo.",
    description:
      "Calculadora de IVA gratuita. Añada IVA a un precio base o extráigalo de un precio bruto. Compatible con cualquier tipo de IVA o impuesto sobre ventas.",
    keywords: [
      "calculadora IVA",
      "cálculo IVA",
      "precio con IVA",
      "precio sin IVA",
      "impuesto ventas",
      "base imponible",
      "cuota IVA",
    ],
    inputs: {
      mode: {
        label: "Modo de cálculo",
        help: "Añadir IVA: introduzca el precio sin IVA y obtenga el total. Extraer IVA: introduzca el precio bruto y obtenga la base y la cuota.",
      },
      amount: {
        label: "Importe",
        help: "Precio sin IVA (modo exclusivo) o precio bruto con IVA (modo inclusivo).",
      },
      vatRate: {
        label: "Tipo de IVA (%)",
        help: "España: 21 % (general), 10 % (reducido), 4 % (superreducido).",
      },
    },
    outputs: {
      totalPrice: {
        label: "Total con IVA",
        help: "El importe final que paga el cliente.",
      },
      basePrice: {
        label: "Base imponible (sin IVA)",
        help: "El precio antes de aplicar el impuesto.",
      },
      vatAmount: {
        label: "Cuota de IVA",
        help: "El importe del impuesto — diferencia entre total y base.",
      },
      effectiveRate: {
        label: "Tipo efectivo",
        help: "IVA como porcentaje de la base imponible.",
      },
    },
    options: {
      mode: {
        exclusive: "Añadir IVA al precio",
        inclusive: "Extraer IVA del precio",
      },
    },
    errors: {
      amountRequired: "El importe debe ser mayor que cero.",
    },
  },

  it: {
    title: "Calcolatore IVA / Imposta sulle vendite",
    short: "Calcola prezzi IVA esclusa o inclusa, importo IVA e prezzo netto per qualsiasi aliquota.",
    description:
      "Calcolatore IVA gratuito. Aggiungi l'IVA a un prezzo netto o estraila da un prezzo lordo. Supporta qualsiasi aliquota IVA o imposta sulle vendite.",
    keywords: [
      "calcolatore IVA",
      "calcolo IVA",
      "prezzo IVA inclusa",
      "prezzo IVA esclusa",
      "importo IVA",
      "aliquota IVA",
      "fattura IVA",
    ],
    inputs: {
      mode: {
        label: "Modalità di calcolo",
        help: "Aggiungi IVA: inserisci il prezzo netto e ottieni il totale. Estrai IVA: inserisci il prezzo lordo e ottieni la base e l'IVA.",
      },
      amount: {
        label: "Importo",
        help: "Prezzo IVA esclusa (modalità esclusiva) o prezzo lordo IVA inclusa (modalità inclusiva).",
      },
      vatRate: {
        label: "Aliquota IVA (%)",
        help: "Italia: 22 % (ordinaria), 10 % (ridotta), 5 % (ridotta speciale), 4 % (super-ridotta).",
      },
    },
    outputs: {
      totalPrice: {
        label: "Prezzo totale (IVA inclusa)",
        help: "L'importo finale pagato dal cliente.",
      },
      basePrice: {
        label: "Prezzo netto (IVA esclusa)",
        help: "Il prezzo prima dell'applicazione dell'IVA.",
      },
      vatAmount: {
        label: "Importo IVA",
        help: "La differenza tra il prezzo lordo e il prezzo netto.",
      },
      effectiveRate: {
        label: "Aliquota effettiva",
        help: "IVA come percentuale del prezzo netto.",
      },
    },
    options: {
      mode: {
        exclusive: "Aggiungi IVA al prezzo",
        inclusive: "Estrai IVA dal prezzo",
      },
    },
    errors: {
      amountRequired: "L'importo deve essere maggiore di zero.",
    },
  },

  ar: {
    title: "حاسبة ضريبة القيمة المضافة",
    short: "احسب الأسعار بدون ضريبة أو شاملة لها، ومبلغ الضريبة والسعر الأساسي لأي معدل.",
    description:
      "حاسبة ضريبة القيمة المضافة المجانية. أضف الضريبة إلى السعر الأساسي أو استخرجها من السعر الإجمالي. تدعم جميع معدلات الضريبة.",
    keywords: [
      "حاسبة ضريبة القيمة المضافة",
      "حساب الضريبة",
      "سعر شامل الضريبة",
      "سعر بدون ضريبة",
      "مبلغ الضريبة",
      "ضريبة المبيعات",
    ],
    inputs: {
      mode: {
        label: "وضع الحساب",
        help: "إضافة الضريبة: أدخل السعر قبل الضريبة واحصل على الإجمالي. استخراج الضريبة: أدخل السعر الإجمالي واحصل على الأساسي والضريبة.",
      },
      amount: {
        label: "المبلغ",
        help: "السعر قبل الضريبة (الوضع الحصري) أو السعر الإجمالي شاملاً الضريبة (الوضع الشامل).",
      },
      vatRate: {
        label: "معدل الضريبة (%)",
        help: "المملكة العربية السعودية: 15%، الإمارات: 5%، البحرين: 10%، مصر: 14%.",
      },
    },
    outputs: {
      totalPrice: {
        label: "السعر الإجمالي (شامل الضريبة)",
        help: "المبلغ الذي يدفعه العميل بما فيه الضريبة.",
      },
      basePrice: {
        label: "السعر الأساسي (قبل الضريبة)",
        help: "السعر قبل إضافة الضريبة.",
      },
      vatAmount: {
        label: "مبلغ الضريبة",
        help: "الفرق بين الإجمالي والسعر الأساسي.",
      },
      effectiveRate: {
        label: "المعدل الفعلي",
        help: "الضريبة كنسبة مئوية من السعر الأساسي.",
      },
    },
    options: {
      mode: {
        exclusive: "إضافة الضريبة إلى السعر",
        inclusive: "استخراج الضريبة من السعر",
      },
    },
    errors: {
      amountRequired: "يجب أن يكون المبلغ أكبر من الصفر.",
    },
  },

  ru: {
    title: "Калькулятор НДС / налога с продаж",
    short: "Рассчитайте цены без НДС или с НДС, сумму налога и базовую цену для любой ставки.",
    description:
      "Бесплатный калькулятор НДС. Добавьте налог к базовой цене или выделите НДС из цены брутто. Поддерживает любую налоговую ставку.",
    keywords: [
      "калькулятор НДС",
      "расчёт НДС",
      "цена с НДС",
      "цена без НДС",
      "сумма НДС",
      "налог с продаж",
      "выделить НДС",
    ],
    inputs: {
      mode: {
        label: "Режим расчёта",
        help: "Добавить НДС: введите цену нетто и получите цену брутто. Выделить НДС: введите цену брутто и получите базу и налог.",
      },
      amount: {
        label: "Сумма",
        help: "Цена без НДС (эксклюзивный режим) или цена с НДС (инклюзивный режим).",
      },
      vatRate: {
        label: "Ставка НДС (%)",
        help: "Россия: 20 % (основная), 10 % (льготная), 0 % (экспорт).",
      },
    },
    outputs: {
      totalPrice: {
        label: "Итоговая цена (с НДС)",
        help: "Сумма, которую платит покупатель.",
      },
      basePrice: {
        label: "Цена нетто (без НДС)",
        help: "Цена до начисления налога.",
      },
      vatAmount: {
        label: "Сумма НДС",
        help: "Разница между ценой брутто и нетто.",
      },
      effectiveRate: {
        label: "Эффективная ставка",
        help: "НДС как процент от базовой цены.",
      },
    },
    options: {
      mode: {
        exclusive: "Добавить НДС к цене",
        inclusive: "Выделить НДС из цены",
      },
    },
    errors: {
      amountRequired: "Сумма должна быть больше нуля.",
    },
  },

  zh: {
    title: "增值税 / 销售税计算器",
    short: "计算不含税或含税价格、税额及税前价格，适用于任何税率。",
    description:
      "免费增值税计算器。将税额加到税前价格，或从含税总价中分离出税额。支持所有增值税和销售税税率。",
    keywords: [
      "增值税计算器",
      "销售税计算器",
      "含税价格",
      "不含税价格",
      "税额计算",
      "价内税",
      "价外税",
    ],
    inputs: {
      mode: {
        label: "计算模式",
        help: "在价格上加税：输入税前价格，得出含税总价。从价格中提取税额：输入含税总价，得出税前价格和税额。",
      },
      amount: {
        label: "金额",
        help: "税前价格（价外税模式）或含税总价（价内税模式）。",
      },
      vatRate: {
        label: "增值税率 (%)",
        help: "中国标准税率：13%（一般货物）、9%（农产品）、6%（服务业）。",
      },
    },
    outputs: {
      totalPrice: {
        label: "含税总价",
        help: "客户支付的最终金额，含税。",
      },
      basePrice: {
        label: "税前价格（不含税）",
        help: "加税前的价格。",
      },
      vatAmount: {
        label: "税额",
        help: "含税总价与税前价格之差。",
      },
      effectiveRate: {
        label: "实际税率",
        help: "税额占税前价格的百分比。",
      },
    },
    options: {
      mode: {
        exclusive: "在价格上加税",
        inclusive: "从价格中提取税额",
      },
    },
    errors: {
      amountRequired: "金额必须大于零。",
    },
  },

  ja: {
    title: "消費税 / VAT 計算機",
    short: "税抜き・税込み価格、税額、基準価格を任意の税率で計算します。",
    description:
      "無料の消費税計算機。税抜き価格に税を加算したり、税込み価格から税額を逆算したりできます。すべての税率に対応しています。",
    keywords: [
      "消費税計算機",
      "VAT計算機",
      "税込み価格",
      "税抜き価格",
      "税額計算",
      "内税",
      "外税",
    ],
    inputs: {
      mode: {
        label: "計算モード",
        help: "税を加算：税抜き価格を入力して税込み合計を求める。税を算出：税込み価格を入力して税抜き価格と税額を求める。",
      },
      amount: {
        label: "金額",
        help: "税抜き価格（外税モード）または税込み総額（内税モード）を入力してください。",
      },
      vatRate: {
        label: "消費税率 / VAT 率 (%)",
        help: "日本：10%（標準）、8%（軽減税率：食料品・新聞）。",
      },
    },
    outputs: {
      totalPrice: {
        label: "税込み合計",
        help: "消費者が支払う最終金額。",
      },
      basePrice: {
        label: "税抜き価格",
        help: "税を加算する前の価格。",
      },
      vatAmount: {
        label: "消費税額",
        help: "税込み合計と税抜き価格の差額。",
      },
      effectiveRate: {
        label: "実効税率",
        help: "税抜き価格に対する税額の割合。",
      },
    },
    options: {
      mode: {
        exclusive: "価格に税を加算",
        inclusive: "価格から税を算出",
      },
    },
    errors: {
      amountRequired: "金額は0より大きい値を入力してください。",
    },
  },

  ko: {
    title: "부가가치세 / 판매세 계산기",
    short: "세금 미포함 또는 세금 포함 가격, 세액, 기본가를 모든 세율로 계산합니다.",
    description:
      "무료 부가가치세 계산기. 기본가에 세금을 추가하거나 총액에서 세금을 분리합니다. 모든 부가세 및 판매세율을 지원합니다.",
    keywords: [
      "부가세 계산기",
      "판매세 계산기",
      "세금 포함 가격",
      "세금 제외 가격",
      "세액 계산",
      "공급가액",
      "공급대가",
    ],
    inputs: {
      mode: {
        label: "계산 모드",
        help: "세금 추가: 세금 제외 가격을 입력하여 합계를 구합니다. 세금 분리: 세금 포함 총액을 입력하여 기본가와 세액을 구합니다.",
      },
      amount: {
        label: "금액",
        help: "세금 제외 가격(공급가 기준) 또는 세금 포함 총액(공급대가 기준)을 입력하세요.",
      },
      vatRate: {
        label: "부가세율 (%)",
        help: "한국: 10% (표준). 일부 면세 품목에는 적용되지 않습니다.",
      },
    },
    outputs: {
      totalPrice: {
        label: "세금 포함 합계",
        help: "고객이 최종 지불하는 금액.",
      },
      basePrice: {
        label: "세금 제외 기본가",
        help: "세금 적용 전 가격.",
      },
      vatAmount: {
        label: "부가세액",
        help: "합계와 기본가의 차액.",
      },
      effectiveRate: {
        label: "실효 세율",
        help: "기본가 대비 세액의 비율.",
      },
    },
    options: {
      mode: {
        exclusive: "가격에 세금 추가",
        inclusive: "가격에서 세금 분리",
      },
    },
    errors: {
      amountRequired: "금액은 0보다 커야 합니다.",
    },
  },

  hi: {
    title: "VAT / बिक्री कर कैलकुलेटर",
    short: "किसी भी कर दर पर कर-रहित या कर-सहित मूल्य, कर राशि और आधार मूल्य की गणना करें।",
    description:
      "मुफ्त VAT कैलकुलेटर। आधार मूल्य पर कर जोड़ें या सकल मूल्य से कर अलग करें। सभी VAT, GST और बिक्री कर दरों का समर्थन करता है।",
    keywords: [
      "VAT कैलकुलेटर",
      "GST कैलकुलेटर",
      "बिक्री कर कैलकुलेटर",
      "कर सहित मूल्य",
      "कर रहित मूल्य",
      "कर राशि गणना",
    ],
    inputs: {
      mode: {
        label: "गणना मोड",
        help: "कर जोड़ें: कर-रहित मूल्य दर्ज करें और कुल प्राप्त करें। कर निकालें: कर-सहित कुल मूल्य दर्ज करें और आधार व कर राशि प्राप्त करें।",
      },
      amount: {
        label: "राशि",
        help: "कर-रहित मूल्य (एक्सक्लूसिव मोड) या कर-सहित सकल मूल्य (इन्क्लूसिव मोड) दर्ज करें।",
      },
      vatRate: {
        label: "VAT / कर दर (%)",
        help: "भारत में GST: 5%, 12%, 18% या 28% — श्रेणी के अनुसार। अधिकांश सेवाओं पर 18%।",
      },
    },
    outputs: {
      totalPrice: {
        label: "कुल मूल्य (कर सहित)",
        help: "ग्राहक द्वारा भुगतान की जाने वाली अंतिम राशि।",
      },
      basePrice: {
        label: "आधार मूल्य (कर रहित)",
        help: "कर लगाने से पहले का मूल्य।",
      },
      vatAmount: {
        label: "कर राशि",
        help: "कुल मूल्य और आधार मूल्य का अंतर।",
      },
      effectiveRate: {
        label: "प्रभावी दर",
        help: "आधार मूल्य के प्रतिशत के रूप में कर राशि।",
      },
    },
    options: {
      mode: {
        exclusive: "मूल्य में कर जोड़ें",
        inclusive: "मूल्य से कर निकालें",
      },
    },
    errors: {
      amountRequired: "राशि शून्य से अधिक होनी चाहिए।",
    },
  },
};

export default i18n;
