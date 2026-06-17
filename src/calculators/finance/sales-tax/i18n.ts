import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Sales Tax Calculator",
    short:
      "Add or remove sales tax from any amount and see the tax and final total instantly.",
    description:
      "Free sales tax calculator. Enter an amount and tax rate to add tax to a pre-tax price, or remove tax from a tax-inclusive total to recover the original price.",
    keywords: [
      "sales tax calculator",
      "sales tax",
      "reverse sales tax",
      "tax rate calculator",
      "total with tax",
      "pre-tax price",
    ],
    inputs: {
      mode: {
        label: "Mode",
        help: "Add tax to a pre-tax amount, or remove tax from a tax-inclusive total.",
      },
      amount: {
        label: "Amount",
        help: "The pre-tax price when adding tax, or the tax-inclusive total when removing tax.",
      },
      taxRate: {
        label: "Sales Tax Rate (%)",
        help: "The combined state, county, and city sales tax rate that applies to the purchase.",
      },
    },
    outputs: {
      totalAmount: { label: "Total", help: "Final price including sales tax." },
      taxAmount: { label: "Sales Tax", help: "Tax portion of the total." },
      preTaxAmount: {
        label: "Pre-Tax Amount",
        help: "Original price before sales tax.",
      },
    },
    options: {
      add: "Add tax to amount",
      remove: "Remove tax from total",
    },
    faq: [
      {
        q: "How do I calculate sales tax?",
        a: "Multiply the pre-tax price by the tax rate expressed as a decimal. For an 8.25% rate, multiply by 0.0825, then add the result to the price to get the total. A $100 item costs $108.25 with 8.25% sales tax.",
      },
      {
        q: "How do I remove sales tax from a total?",
        a: "Divide the tax-inclusive total by 1 plus the rate as a decimal. A $108.25 total at 8.25% has a pre-tax price of 108.25 ÷ 1.0825 = $100, so the tax was $8.25. Choose the 'Remove tax' mode to do this automatically.",
      },
      {
        q: "What sales tax rate should I use?",
        a: "Use the combined rate for your location — most US states stack a state rate with county and city rates. Rates commonly range from 0% (e.g. Oregon) to over 10% in some cities.",
      },
    ],
  },
  nl: {
    title: "Sales Belasting Calculator",
    short:
      "Add or verwijder sales tax from any amount and see the tax and final total direct.",
    description:
      "Gratis sales tax calculator. Enter an amount and tax rate to add tax to a pre-tax price, or verwijder tax from a tax-inclusive total to recover the original price.",
    keywords: [
      "sales tax calculator",
      "sales tax",
      "reverse sales tax",
      "tax rate calculator",
      "total with tax",
      "pre-tax price",
    ],
    inputs: {
      mode: {
        label: "Mode",
        help: "Add tax to a pre-tax amount, or verwijder tax from a tax-inclusive total.",
      },
      amount: {
        label: "Amount",
        help: "The pre-tax price when adding tax, or the tax-inclusive total when removing tax.",
      },
      taxRate: {
        label: "Sales Belasting Rate (%)",
        help: "The combined state, county, and city sales tax rate that applies to the purchase.",
      },
    },
    outputs: {
      totalAmount: { label: "Total", help: "Final price including sales tax." },
      taxAmount: { label: "Sales Belasting", help: "Belasting portion of the total." },
      preTaxAmount: {
        label: "Pre-Belasting Amount",
        help: "Original price before sales tax.",
      },
    },
    options: {
      add: "Add tax to amount",
      remove: "Verwijder tax from total",
    },
    faq: [
      {
        q: "How do I bereken sales tax?",
        a: "Multiply the pre-tax price by the tax rate expressed as a decimal. For an 8.25% rate, multiply by 0.0825, then add the result to the price to get the total. A $100 item costs $108.25 with 8.25% sales tax.",
      },
      {
        q: "How do I verwijder sales tax from a total?",
        a: "Divide the tax-inclusive total by 1 plus the rate as a decimal. A $108.25 total at 8.25% has a pre-tax price of 108.25 ÷ 1.0825 = $100, so the tax was $8.25. Choose the 'Verwijder tax' mode to do this automatically.",
      },
      {
        q: "What sales tax rate should I use?",
        a: "Use the combined rate for your location — most US states stack a state rate with county and city rates. Rates commonly range from 0% (e.g. Oregon) to over 10% in some cities.",
      },
    ],
  },

  pl: {
    title: "Sales Podatek Kalkulator",
    short:
      "Add or usuń sales tax from any amount and see the tax and final total natychmiast.",
    description:
      "Darmowy sales tax kalkulator. Enter an amount and tax rate to add tax to a pre-tax price, or usuń tax from a tax-inclusive total to recover the original price.",
    keywords: [
      "sales tax kalkulator",
      "sales tax",
      "reverse sales tax",
      "tax rate kalkulator",
      "total with tax",
      "pre-tax price",
    ],
    inputs: {
      mode: {
        label: "Mode",
        help: "Add tax to a pre-tax amount, or usuń tax from a tax-inclusive total.",
      },
      amount: {
        label: "Amount",
        help: "The pre-tax price when adding tax, or the tax-inclusive total when removing tax.",
      },
      taxRate: {
        label: "Sales Podatek Rate (%)",
        help: "The combined state, county, and city sales tax rate that applies to the purchase.",
      },
    },
    outputs: {
      totalAmount: { label: "Total", help: "Final price including sales tax." },
      taxAmount: { label: "Sales Podatek", help: "Podatek portion of the total." },
      preTaxAmount: {
        label: "Pre-Podatek Amount",
        help: "Original price before sales tax.",
      },
    },
    options: {
      add: "Add tax to amount",
      remove: "Usuń tax from total",
    },
    faq: [
      {
        q: "How do I oblicz sales tax?",
        a: "Multiply the pre-tax price by the tax rate expressed as a decimal. For an 8.25% rate, multiply by 0.0825, then add the result to the price to get the total. A $100 item costs $108.25 with 8.25% sales tax.",
      },
      {
        q: "How do I usuń sales tax from a total?",
        a: "Divide the tax-inclusive total by 1 plus the rate as a decimal. A $108.25 total at 8.25% has a pre-tax price of 108.25 ÷ 1.0825 = $100, so the tax was $8.25. Choose the 'Usuń tax' mode to do this automatically.",
      },
      {
        q: "What sales tax rate should I use?",
        a: "Use the combined rate for your location — most US states stack a state rate with county and city rates. Rates commonly range from 0% (e.g. Oregon) to over 10% in some cities.",
      },
    ],
  },
  tr: {
    title: "Satış Vergisi Hesaplama",
    short:
      "Herhangi bir tutara satış vergisi ekleyin veya çıkarın; vergiyi ve toplamı anında görün.",
    description:
      "Ücretsiz satış vergisi hesaplayıcı. Vergisiz fiyata vergi eklemek veya vergi dahil toplamdan orijinal fiyatı bulmak için tutar ve vergi oranını girin.",
    keywords: [
      "satış vergisi hesaplama",
      "satış vergisi",
      "ters vergi hesaplama",
      "vergi oranı",
      "vergi dahil tutar",
      "vergisiz fiyat",
    ],
    inputs: {
      mode: { label: "Mod", help: "Tutara vergi ekleyin veya toplamdan vergi çıkarın." },
      amount: {
        label: "Tutar",
        help: "Vergi eklerken vergisiz fiyat, vergi çıkarırken vergi dahil toplam.",
      },
      taxRate: { label: "Satış Vergisi Oranı (%)", help: "Geçerli toplam satış vergisi oranı." },
    },
    outputs: {
      totalAmount: { label: "Toplam", help: "Vergi dahil nihai fiyat." },
      taxAmount: { label: "Satış Vergisi", help: "Toplamın vergi kısmı." },
      preTaxAmount: { label: "Vergisiz Tutar", help: "Vergi öncesi orijinal fiyat." },
    },
    options: {
      add: "Tutara vergi ekle",
      remove: "Toplamdan vergi çıkar",
    },
  },
  de: {
    title: "Umsatzsteuer-Rechner",
    short:
      "Fügen Sie einem Betrag Steuer hinzu oder ziehen Sie sie ab und sehen Sie Steuer und Endsumme sofort.",
    description:
      "Kostenloser Umsatzsteuer-Rechner. Geben Sie Betrag und Steuersatz ein, um Steuer auf einen Nettopreis aufzuschlagen oder aus einem Bruttobetrag den ursprünglichen Preis zu ermitteln.",
    keywords: [
      "umsatzsteuer rechner",
      "mehrwertsteuer",
      "steuer berechnen",
      "brutto netto",
      "steuersatz",
      "endpreis mit steuer",
    ],
    inputs: {
      mode: { label: "Modus", help: "Steuer aufschlagen oder aus dem Bruttobetrag herausrechnen." },
      amount: { label: "Betrag", help: "Nettopreis beim Aufschlagen, Bruttobetrag beim Herausrechnen." },
      taxRate: { label: "Steuersatz (%)", help: "Anzuwendender Umsatzsteuersatz." },
    },
    outputs: {
      totalAmount: { label: "Gesamt", help: "Endpreis inklusive Steuer." },
      taxAmount: { label: "Steuer", help: "Steueranteil der Summe." },
      preTaxAmount: { label: "Nettobetrag", help: "Ursprünglicher Preis ohne Steuer." },
    },
    options: {
      add: "Steuer hinzufügen",
      remove: "Steuer herausrechnen",
    },
  },
  fr: {
    title: "Calculateur de taxe de vente",
    short:
      "Ajoutez ou retirez la taxe de vente d'un montant et voyez la taxe et le total immédiatement.",
    description:
      "Calculateur de taxe de vente gratuit. Saisissez un montant et un taux pour ajouter la taxe à un prix hors taxe, ou la retirer d'un total taxes comprises pour retrouver le prix initial.",
    keywords: [
      "calculateur taxe de vente",
      "taxe de vente",
      "taxe inversée",
      "taux de taxe",
      "total avec taxe",
      "prix hors taxe",
    ],
    inputs: {
      mode: { label: "Mode", help: "Ajouter la taxe ou la retirer d'un total taxes comprises." },
      amount: { label: "Montant", help: "Prix hors taxe pour l'ajout, total TTC pour le retrait." },
      taxRate: { label: "Taux de taxe (%)", help: "Taux de taxe de vente applicable." },
    },
    outputs: {
      totalAmount: { label: "Total", help: "Prix final taxe comprise." },
      taxAmount: { label: "Taxe de vente", help: "Part de taxe du total." },
      preTaxAmount: { label: "Montant hors taxe", help: "Prix initial avant taxe." },
    },
    options: {
      add: "Ajouter la taxe au montant",
      remove: "Retirer la taxe du total",
    },
  },
  es: {
    title: "Calculadora de impuesto sobre ventas",
    short:
      "Agrega o quita el impuesto sobre ventas de cualquier monto y ve el impuesto y el total al instante.",
    description:
      "Calculadora gratuita de impuesto sobre ventas. Ingresa un monto y una tasa para agregar el impuesto a un precio sin impuestos, o quitarlo de un total con impuestos para recuperar el precio original.",
    keywords: [
      "calculadora impuesto ventas",
      "impuesto sobre ventas",
      "impuesto inverso",
      "tasa de impuesto",
      "total con impuesto",
      "precio sin impuesto",
    ],
    inputs: {
      mode: { label: "Modo", help: "Agregar el impuesto o quitarlo de un total con impuestos." },
      amount: { label: "Monto", help: "Precio sin impuestos al agregar, total con impuestos al quitar." },
      taxRate: { label: "Tasa de impuesto (%)", help: "Tasa de impuesto sobre ventas aplicable." },
    },
    outputs: {
      totalAmount: { label: "Total", help: "Precio final con impuesto." },
      taxAmount: { label: "Impuesto", help: "Parte de impuesto del total." },
      preTaxAmount: { label: "Monto sin impuesto", help: "Precio original antes del impuesto." },
    },
    options: {
      add: "Agregar impuesto al monto",
      remove: "Quitar impuesto del total",
    },
  },
  it: {
    title: "Calcolatore imposta sulle vendite",
    short:
      "Aggiungi o togli l'imposta sulle vendite da qualsiasi importo e vedi imposta e totale all'istante.",
    description:
      "Calcolatore gratuito dell'imposta sulle vendite. Inserisci un importo e un'aliquota per aggiungere l'imposta a un prezzo al netto, o toglierla da un totale comprensivo per ottenere il prezzo originale.",
    keywords: [
      "calcolatore imposta vendite",
      "imposta sulle vendite",
      "imposta inversa",
      "aliquota fiscale",
      "totale con imposta",
      "prezzo al netto",
    ],
    inputs: {
      mode: { label: "Modalità", help: "Aggiungere l'imposta o toglierla da un totale comprensivo." },
      amount: { label: "Importo", help: "Prezzo al netto quando si aggiunge, totale lordo quando si toglie." },
      taxRate: { label: "Aliquota (%)", help: "Aliquota dell'imposta sulle vendite applicabile." },
    },
    outputs: {
      totalAmount: { label: "Totale", help: "Prezzo finale comprensivo di imposta." },
      taxAmount: { label: "Imposta", help: "Quota di imposta del totale." },
      preTaxAmount: { label: "Importo al netto", help: "Prezzo originale prima dell'imposta." },
    },
    options: {
      add: "Aggiungi imposta all'importo",
      remove: "Togli imposta dal totale",
    },
  },
  pt: {
    title: "Calculadora de imposto sobre vendas",
    short:
      "Adicione ou remova o imposto sobre vendas de qualquer valor e veja o imposto e o total na hora.",
    description:
      "Calculadora gratuita de imposto sobre vendas. Informe um valor e uma alíquota para adicionar imposto a um preço sem imposto, ou removê-lo de um total com imposto para obter o preço original.",
    keywords: [
      "calculadora imposto sobre vendas",
      "imposto sobre vendas",
      "imposto inverso",
      "alíquota de imposto",
      "total com imposto",
      "preço sem imposto",
    ],
    inputs: {
      mode: { label: "Modo", help: "Adicionar imposto ou removê-lo de um total com imposto." },
      amount: { label: "Valor", help: "Preço sem imposto ao adicionar, total com imposto ao remover." },
      taxRate: { label: "Alíquota de imposto (%)", help: "Alíquota de imposto sobre vendas aplicável." },
    },
    outputs: {
      totalAmount: { label: "Total", help: "Preço final com imposto." },
      taxAmount: { label: "Imposto", help: "Parte do imposto no total." },
      preTaxAmount: { label: "Valor sem imposto", help: "Preço original antes do imposto." },
    },
    options: {
      add: "Adicionar imposto ao valor",
      remove: "Remover imposto do total",
    },
  },
  id: {
    title: "Kalkulator Pajak Penjualan",
    short:
      "Tambahkan atau hapus pajak penjualan dari jumlah berapa pun dan lihat pajak serta totalnya seketika.",
    description:
      "Kalkulator pajak penjualan gratis. Masukkan jumlah dan tarif pajak untuk menambahkan pajak ke harga sebelum pajak, atau menghapusnya dari total termasuk pajak untuk mendapatkan harga asli.",
    keywords: [
      "kalkulator pajak penjualan",
      "pajak penjualan",
      "pajak terbalik",
      "tarif pajak",
      "total termasuk pajak",
      "harga sebelum pajak",
    ],
    inputs: {
      mode: { label: "Mode", help: "Tambahkan pajak atau hapus dari total termasuk pajak." },
      amount: { label: "Jumlah", help: "Harga sebelum pajak saat menambah, total termasuk pajak saat menghapus." },
      taxRate: { label: "Tarif Pajak Penjualan (%)", help: "Tarif pajak penjualan yang berlaku." },
    },
    outputs: {
      totalAmount: { label: "Total", help: "Harga akhir termasuk pajak." },
      taxAmount: { label: "Pajak Penjualan", help: "Bagian pajak dari total." },
      preTaxAmount: { label: "Jumlah Sebelum Pajak", help: "Harga asli sebelum pajak." },
    },
    options: {
      add: "Tambah pajak ke jumlah",
      remove: "Hapus pajak dari total",
    },
  },
  ar: {
    title: "حاسبة ضريبة المبيعات",
    short:
      "أضف ضريبة المبيعات إلى أي مبلغ أو احذفها منه وشاهد الضريبة والإجمالي فورًا.",
    description:
      "حاسبة ضريبة المبيعات المجانية. أدخل المبلغ ونسبة الضريبة لإضافة الضريبة إلى السعر قبل الضريبة، أو حذفها من الإجمالي الشامل للضريبة لاستعادة السعر الأصلي.",
    keywords: [
      "حاسبة ضريبة المبيعات",
      "ضريبة المبيعات",
      "الضريبة العكسية",
      "نسبة الضريبة",
      "الإجمالي مع الضريبة",
      "السعر قبل الضريبة",
    ],
    inputs: {
      mode: { label: "الوضع", help: "إضافة الضريبة أو حذفها من الإجمالي الشامل." },
      amount: { label: "المبلغ", help: "السعر قبل الضريبة عند الإضافة، والإجمالي الشامل عند الحذف." },
      taxRate: { label: "نسبة الضريبة (%)", help: "نسبة ضريبة المبيعات المطبقة." },
    },
    outputs: {
      totalAmount: { label: "الإجمالي", help: "السعر النهائي شامل الضريبة." },
      taxAmount: { label: "الضريبة", help: "جزء الضريبة من الإجمالي." },
      preTaxAmount: { label: "المبلغ قبل الضريبة", help: "السعر الأصلي قبل الضريبة." },
    },
    options: {
      add: "إضافة الضريبة إلى المبلغ",
      remove: "حذف الضريبة من الإجمالي",
    },
  },
  ru: {
    title: "Калькулятор налога с продаж",
    short:
      "Добавьте или вычтите налог с продаж из любой суммы и сразу узнайте налог и итог.",
    description:
      "Бесплатный калькулятор налога с продаж. Введите сумму и ставку, чтобы добавить налог к цене без налога или вычесть его из суммы с налогом и получить исходную цену.",
    keywords: [
      "калькулятор налога с продаж",
      "налог с продаж",
      "обратный налог",
      "ставка налога",
      "итог с налогом",
      "цена без налога",
    ],
    inputs: {
      mode: { label: "Режим", help: "Добавить налог или вычесть его из суммы с налогом." },
      amount: { label: "Сумма", help: "Цена без налога при добавлении, сумма с налогом при вычитании." },
      taxRate: { label: "Ставка налога (%)", help: "Применимая ставка налога с продаж." },
    },
    outputs: {
      totalAmount: { label: "Итого", help: "Итоговая цена с налогом." },
      taxAmount: { label: "Налог", help: "Налоговая часть суммы." },
      preTaxAmount: { label: "Сумма без налога", help: "Исходная цена до налога." },
    },
    options: {
      add: "Добавить налог к сумме",
      remove: "Вычесть налог из суммы",
    },
  },
  zh: {
    title: "销售税计算器",
    short: "为任意金额添加或扣除销售税，立即查看税额和总计。",
    description:
      "免费销售税计算器。输入金额和税率，为不含税价格加税，或从含税总额中扣税以还原原始价格。",
    keywords: ["销售税计算器", "销售税", "反向计税", "税率", "含税总额", "不含税价格"],
    inputs: {
      mode: { label: "模式", help: "为金额加税，或从含税总额中扣税。" },
      amount: { label: "金额", help: "加税时为不含税价格，扣税时为含税总额。" },
      taxRate: { label: "销售税率 (%)", help: "适用的销售税率。" },
    },
    outputs: {
      totalAmount: { label: "总计", help: "含税的最终价格。" },
      taxAmount: { label: "销售税", help: "总额中的税款部分。" },
      preTaxAmount: { label: "不含税金额", help: "税前的原始价格。" },
    },
    options: {
      add: "为金额加税",
      remove: "从总额中扣税",
    },
  },
  ja: {
    title: "消費税計算ツール",
    short: "任意の金額に税を加算または除外し、税額と合計をすぐに確認できます。",
    description:
      "無料の消費税計算ツール。金額と税率を入力して、税抜き価格に税を加算したり、税込み合計から税を除外して元の価格を求めたりできます。",
    keywords: ["消費税計算", "消費税", "税抜き計算", "税率", "税込み合計", "税抜き価格"],
    inputs: {
      mode: { label: "モード", help: "金額に税を加算するか、税込み合計から税を除外します。" },
      amount: { label: "金額", help: "加算時は税抜き価格、除外時は税込み合計。" },
      taxRate: { label: "税率 (%)", help: "適用される消費税率。" },
    },
    outputs: {
      totalAmount: { label: "合計", help: "税込みの最終価格。" },
      taxAmount: { label: "消費税", help: "合計のうち税の部分。" },
      preTaxAmount: { label: "税抜き金額", help: "税を加える前の元の価格。" },
    },
    options: {
      add: "金額に税を加算",
      remove: "合計から税を除外",
    },
  },
  ko: {
    title: "판매세 계산기",
    short: "임의의 금액에 판매세를 더하거나 빼고 세액과 합계를 즉시 확인하세요.",
    description:
      "무료 판매세 계산기. 금액과 세율을 입력해 세전 가격에 세금을 더하거나, 세금이 포함된 합계에서 세금을 빼 원래 가격을 구할 수 있습니다.",
    keywords: ["판매세 계산기", "판매세", "역산 세금", "세율", "세금 포함 합계", "세전 가격"],
    inputs: {
      mode: { label: "모드", help: "금액에 세금을 더하거나, 세금 포함 합계에서 세금을 뺍니다." },
      amount: { label: "금액", help: "더할 때는 세전 가격, 뺄 때는 세금 포함 합계." },
      taxRate: { label: "판매세율 (%)", help: "적용되는 판매세율." },
    },
    outputs: {
      totalAmount: { label: "합계", help: "세금이 포함된 최종 가격." },
      taxAmount: { label: "판매세", help: "합계 중 세금 부분." },
      preTaxAmount: { label: "세전 금액", help: "세금 전 원래 가격." },
    },
    options: {
      add: "금액에 세금 더하기",
      remove: "합계에서 세금 빼기",
    },
  },
  hi: {
    title: "बिक्री कर कैलकुलेटर",
    short:
      "किसी भी राशि पर बिक्री कर जोड़ें या घटाएं और कर तथा कुल योग तुरंत देखें।",
    description:
      "मुफ़्त बिक्री कर कैलकुलेटर। कर-रहित मूल्य में कर जोड़ने या कर सहित कुल से मूल कीमत निकालने के लिए राशि और कर दर दर्ज करें।",
    keywords: [
      "बिक्री कर कैलकुलेटर",
      "बिक्री कर",
      "उल्टा कर",
      "कर दर",
      "कर सहित कुल",
      "कर रहित मूल्य",
    ],
    inputs: {
      mode: { label: "मोड", help: "राशि में कर जोड़ें या कर सहित कुल से कर घटाएं।" },
      amount: { label: "राशि", help: "जोड़ते समय कर-रहित मूल्य, घटाते समय कर सहित कुल।" },
      taxRate: { label: "बिक्री कर दर (%)", help: "लागू बिक्री कर दर।" },
    },
    outputs: {
      totalAmount: { label: "कुल", help: "कर सहित अंतिम कीमत।" },
      taxAmount: { label: "बिक्री कर", help: "कुल में कर का हिस्सा।" },
      preTaxAmount: { label: "कर-रहित राशि", help: "कर से पहले की मूल कीमत।" },
    },
    options: {
      add: "राशि में कर जोड़ें",
      remove: "कुल से कर घटाएं",
    },
  },
};

export default i18n;
