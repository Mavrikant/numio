import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Income Tax Estimator",
    short: "Estimate your federal income tax for the US (2024) or Turkey.",
    description:
      "Free income tax estimator for the US (2024 federal brackets) and Turkey (2024 GVK brackets). Enter your gross income and filing status to see estimated tax, effective rate, and bracket breakdown.",
    keywords: [
      "income tax calculator",
      "federal tax estimator",
      "2024 tax brackets",
      "Turkey income tax",
      "US federal income tax",
      "effective tax rate",
      "tax calculator",
    ],
    inputs: {
      country: { label: "Country", help: "Select your country: United States or Turkey." },
      grossIncome: { label: "Gross Income", help: "Your total annual income before any deductions." },
      filingStatus: {
        label: "Filing Status",
        help: "US only: your IRS filing status. Single, married filing jointly, or head of household.",
      },
      deductions: {
        label: "Additional Deductions",
        help: "US: itemized deductions in addition to the standard deduction. Turkey: deductions from gross income before tax.",
      },
    },
    outputs: {
      estimatedTax: { label: "Estimated Tax", help: "Total federal income tax owed." },
      effectiveRate: { label: "Effective Tax Rate", help: "Your tax as a percentage of gross income." },
      taxableIncome: { label: "Taxable Income", help: "Income after deductions — the amount tax is calculated on." },
      afterTaxIncome: { label: "After-Tax Income", help: "What you keep after paying federal tax." },
    },
    options: {
      country: { us: "United States", tr: "Turkey" },
      filingStatus: {
        single: "Single",
        married: "Married Filing Jointly",
        head: "Head of Household",
      },
    },
    errors: {
      negativeIncome: "Gross income cannot be negative.",
      negativeDeductions: "Deductions cannot be negative.",
    },
    faq: [
      {
        q: "Does this include state taxes?",
        a: "No. This calculator covers federal income tax only. State and local taxes vary significantly by location.",
      },
      {
        q: "What is the standard deduction for 2024?",
        a: "For 2024: single filers $14,600; married filing jointly $29,200; head of household $21,900.",
      },
      {
        q: "How does the Turkish income tax work?",
        a: "Turkey uses progressive brackets under the Gelir Vergisi Kanunu (GVK). For 2024, rates range from 15% up to 40% for income above 3,000,000 TL.",
      },
    ],
  },

  tr: {
    title: "Gelir Vergisi Tahmincisi",
    short: "Türkiye veya ABD için yıllık gelir vergisi tahmini yapın.",
    description:
      "Ücretsiz gelir vergisi tahmincisi. Türkiye için 2024 GVK dilimlerini ve ABD için 2024 federal vergi dilimlerini kullanan bu araçla brüt gelirinizi girerek tahmini vergini, efektif oranı ve dilim dağılımını görün.",
    keywords: [
      "gelir vergisi hesaplayıcı",
      "vergi tahmini",
      "2024 vergi dilimleri",
      "Türkiye gelir vergisi",
      "GVK hesaplama",
      "efektif vergi oranı",
      "ücret vergisi",
    ],
    inputs: {
      country: { label: "Ülke", help: "Türkiye veya Amerika Birleşik Devletleri'ni seçin." },
      grossIncome: { label: "Brüt Gelir", help: "Yıllık toplam geliriniz (kesintiler öncesi)." },
      filingStatus: {
        label: "Medeni Durum / Başvuru Türü",
        help: "Yalnızca ABD için: IRS başvuru durumunuz. Türkiye için bu alan kullanılmaz.",
      },
      deductions: {
        label: "Ek Kesintiler",
        help: "Türkiye: brüt gelirden düşülecek yasal kesintiler. ABD: standart kesintiye ek olarak beyan edilen kesintiler.",
      },
    },
    outputs: {
      estimatedTax: { label: "Tahmini Vergi", help: "Ödenecek toplam gelir vergisi." },
      effectiveRate: { label: "Efektif Vergi Oranı", help: "Verginizin brüt gelirinize oranı (yüzde)." },
      taxableIncome: { label: "Vergilendirilebilir Gelir", help: "Kesintiler sonrası verginin hesaplandığı tutar." },
      afterTaxIncome: { label: "Vergi Sonrası Gelir", help: "Gelir vergisi ödendikten sonra elde edilen net tutar." },
    },
    options: {
      country: { us: "Amerika Birleşik Devletleri", tr: "Türkiye" },
      filingStatus: {
        single: "Bekar",
        married: "Evli (Ortak Beyan)",
        head: "Hane Reisi",
      },
    },
    errors: {
      negativeIncome: "Brüt gelir negatif olamaz.",
      negativeDeductions: "Kesintiler negatif olamaz.",
    },
    faq: [
      {
        q: "Hesaplayıcı SGK primlerini hesaba katıyor mu?",
        a: "Hayır. Bu araç yalnızca gelir vergisi tahmini yapar. SGK primleri, damga vergisi ve diğer kesintiler dahil değildir.",
      },
      {
        q: "2024 yılı Türkiye gelir vergisi dilimleri nelerdir?",
        a: "2024 yılı için: 0–110.000 TL %15, 110.001–230.000 TL %20, 230.001–870.000 TL %27, 870.001–3.000.000 TL %35, 3.000.001 TL üzeri %40.",
      },
      {
        q: "Efektif vergi oranı ne demektir?",
        a: "Efektif vergi oranı, ödediğiniz toplam verginin brüt gelirinize bölünmesiyle bulunur. Marjinal vergi oranınızdan (en yüksek dilim oranı) her zaman düşüktür.",
      },
    ],
  },

  de: {
    title: "Einkommensteuer-Schätzer",
    short: "Schätzen Sie Ihre Einkommensteuer für die USA oder die Türkei.",
    description:
      "Kostenloser Einkommensteuer-Schätzer für die USA (Bundessteuer 2024) und die Türkei (GVK 2024). Geben Sie Ihr Bruttoeinkommen ein, um geschätzte Steuer, Effektivsteuersatz und Tarifübersicht zu erhalten.",
    keywords: [
      "Einkommensteuer-Rechner",
      "Steuerschätzer",
      "US Bundessteuer",
      "Türkei Einkommensteuer",
      "Steuersätze 2024",
      "effektiver Steuersatz",
      "Steuerberechnung",
    ],
    inputs: {
      country: { label: "Land", help: "USA oder Türkei auswählen." },
      grossIncome: { label: "Bruttoeinkommen", help: "Ihr jährliches Gesamteinkommen vor Abzügen." },
      filingStatus: { label: "Veranlagungsstatus", help: "Nur USA: IRS-Steuerstatus." },
      deductions: { label: "Zusätzliche Abzüge", help: "Abzüge zusätzlich zum Standardabzug (USA) oder gesetzliche Abzüge (Türkei)." },
    },
    outputs: {
      estimatedTax: { label: "Geschätzte Steuer", help: "Geschuldete Bundeseinkommensteuer." },
      effectiveRate: { label: "Effektiver Steuersatz", help: "Ihre Steuer als Prozentsatz des Bruttoeinkommens." },
      taxableIncome: { label: "Zu versteuerndes Einkommen", help: "Einkommen nach Abzügen." },
      afterTaxIncome: { label: "Nettoeinkommen nach Steuer", help: "Was Sie nach der Steuer behalten." },
    },
    options: {
      country: { us: "Vereinigte Staaten", tr: "Türkei" },
      filingStatus: { single: "Ledig", married: "Gemeinsame Veranlagung", head: "Haushaltsvorstand" },
    },
    errors: {
      negativeIncome: "Das Bruttoeinkommen darf nicht negativ sein.",
      negativeDeductions: "Abzüge dürfen nicht negativ sein.",
    },
    faq: [
      {
        q: "Sind Staatssteuer enthalten?",
        a: "Nein. Dieser Rechner deckt nur die US-Bundeseinkommensteuer ab. Staats- und Kommunalsteuern variieren stark je nach Wohnort.",
      },
      {
        q: "Was ist der Standardabzug für 2024?",
        a: "2024: Ledig 14.600 $, Verheiratet gemeinsam 29.200 $, Haushaltsvorstand 21.900 $.",
      },
    ],
  },

  fr: {
    title: "Estimateur d'impôt sur le revenu",
    short: "Estimez votre impôt sur le revenu pour les États-Unis ou la Turquie.",
    description:
      "Estimateur d'impôt gratuit pour les États-Unis (tranches fédérales 2024) et la Turquie (GVK 2024). Saisissez votre revenu brut pour voir l'impôt estimé, le taux effectif et la répartition par tranche.",
    keywords: [
      "calculateur impôt revenu",
      "impôt fédéral US",
      "impôt Turquie",
      "tranches fiscales 2024",
      "taux effectif d'imposition",
      "estimateur fiscal",
      "calculateur fiscal",
    ],
    inputs: {
      country: { label: "Pays", help: "Choisissez États-Unis ou Turquie." },
      grossIncome: { label: "Revenu brut", help: "Votre revenu annuel total avant déductions." },
      filingStatus: { label: "Statut de déclaration", help: "États-Unis uniquement : statut IRS." },
      deductions: { label: "Déductions supplémentaires", help: "Déductions en plus de la déduction forfaitaire (USA) ou déductions légales (Turquie)." },
    },
    outputs: {
      estimatedTax: { label: "Impôt estimé", help: "Impôt fédéral sur le revenu dû." },
      effectiveRate: { label: "Taux effectif d'imposition", help: "Votre impôt en pourcentage du revenu brut." },
      taxableIncome: { label: "Revenu imposable", help: "Revenu après déductions." },
      afterTaxIncome: { label: "Revenu après impôt", help: "Ce que vous conservez après impôt fédéral." },
    },
    options: {
      country: { us: "États-Unis", tr: "Turquie" },
      filingStatus: { single: "Célibataire", married: "Déclaration conjointe", head: "Chef de famille" },
    },
    errors: {
      negativeIncome: "Le revenu brut ne peut pas être négatif.",
      negativeDeductions: "Les déductions ne peuvent pas être négatives.",
    },
    faq: [
      {
        q: "Les taxes d'État sont-elles incluses ?",
        a: "Non. Ce calculateur couvre uniquement l'impôt fédéral américain sur le revenu.",
      },
      {
        q: "Quelle est la déduction forfaitaire pour 2024 ?",
        a: "En 2024 : célibataire 14 600 $, déclaration conjointe 29 200 $, chef de famille 21 900 $.",
      },
    ],
  },

  es: {
    title: "Estimador de impuesto sobre la renta",
    short: "Calcula tu impuesto sobre la renta para EE. UU. o Turquía.",
    description:
      "Estimador gratuito de impuesto sobre la renta para EE. UU. (tramos federales 2024) y Turquía (GVK 2024). Introduce tu ingreso bruto para ver el impuesto estimado, la tasa efectiva y el desglose por tramo.",
    keywords: [
      "calculadora impuesto renta",
      "impuesto federal EEUU",
      "impuesto Turquía",
      "tramos fiscales 2024",
      "tasa impositiva efectiva",
      "estimador fiscal",
      "calculadora fiscal",
    ],
    inputs: {
      country: { label: "País", help: "Selecciona Estados Unidos o Turquía." },
      grossIncome: { label: "Ingreso bruto", help: "Tu ingreso anual total antes de deducciones." },
      filingStatus: { label: "Estado civil tributario", help: "Solo EE. UU.: estado de declaración IRS." },
      deductions: { label: "Deducciones adicionales", help: "Deducciones además de la estándar (EE. UU.) o legales (Turquía)." },
    },
    outputs: {
      estimatedTax: { label: "Impuesto estimado", help: "Impuesto federal sobre la renta a pagar." },
      effectiveRate: { label: "Tasa impositiva efectiva", help: "Tu impuesto como porcentaje del ingreso bruto." },
      taxableIncome: { label: "Ingreso gravable", help: "Ingreso después de deducciones." },
      afterTaxIncome: { label: "Ingreso después de impuestos", help: "Lo que conservas tras pagar el impuesto federal." },
    },
    options: {
      country: { us: "Estados Unidos", tr: "Turquía" },
      filingStatus: { single: "Soltero/a", married: "Casado/a declaración conjunta", head: "Cabeza de familia" },
    },
    errors: {
      negativeIncome: "El ingreso bruto no puede ser negativo.",
      negativeDeductions: "Las deducciones no pueden ser negativas.",
    },
    faq: [
      {
        q: "¿Se incluyen los impuestos estatales?",
        a: "No. Este calculador cubre únicamente el impuesto federal sobre la renta de EE. UU.",
      },
      {
        q: "¿Cuál es la deducción estándar para 2024?",
        a: "En 2024: soltero $14,600; casado declaración conjunta $29,200; cabeza de familia $21,900.",
      },
    ],
  },

  it: {
    title: "Calcolatore imposta sul reddito",
    short: "Stima la tua imposta sul reddito per gli USA o la Turchia.",
    description:
      "Calcolatore gratuito dell'imposta sul reddito per gli USA (aliquote federali 2024) e la Turchia (GVK 2024). Inserisci il reddito lordo per vedere l'imposta stimata, il tasso effettivo e la ripartizione per scaglione.",
    keywords: [
      "calcolatore imposta reddito",
      "imposta federale USA",
      "imposta Turchia",
      "scaglioni fiscali 2024",
      "aliquota effettiva",
      "stimatore fiscale",
      "calcolo tasse",
    ],
    inputs: {
      country: { label: "Paese", help: "Seleziona Stati Uniti o Turchia." },
      grossIncome: { label: "Reddito lordo", help: "Il tuo reddito annuale totale prima delle detrazioni." },
      filingStatus: { label: "Stato dichiarativo", help: "Solo USA: status IRS per la dichiarazione." },
      deductions: { label: "Detrazioni aggiuntive", help: "Detrazioni oltre quella standard (USA) o legali (Turchia)." },
    },
    outputs: {
      estimatedTax: { label: "Imposta stimata", help: "Imposta federale sul reddito dovuta." },
      effectiveRate: { label: "Aliquota effettiva", help: "La tua imposta come percentuale del reddito lordo." },
      taxableIncome: { label: "Reddito imponibile", help: "Reddito dopo le detrazioni." },
      afterTaxIncome: { label: "Reddito netto dopo le tasse", help: "Ciò che mantieni dopo l'imposta federale." },
    },
    options: {
      country: { us: "Stati Uniti", tr: "Turchia" },
      filingStatus: { single: "Celibe/Nubile", married: "Dichiarazione congiunta", head: "Capofamiglia" },
    },
    errors: {
      negativeIncome: "Il reddito lordo non può essere negativo.",
      negativeDeductions: "Le detrazioni non possono essere negative.",
    },
    faq: [
      {
        q: "Sono incluse le tasse statali?",
        a: "No. Questo calcolatore copre solo l'imposta federale sul reddito degli USA.",
      },
      {
        q: "Qual è la detrazione standard per il 2024?",
        a: "Nel 2024: celibe/nubile $14.600; dichiarazione congiunta $29.200; capofamiglia $21.900.",
      },
    ],
  },

  ar: {
    title: "مقدّر ضريبة الدخل",
    short: "قدّر ضريبة دخلك للولايات المتحدة أو تركيا.",
    description:
      "مقدّر مجاني لضريبة الدخل للولايات المتحدة (شرائح 2024 الفيدرالية) وتركيا (GVK 2024). أدخل إجمالي دخلك لمعرفة الضريبة المقدّرة والمعدل الفعلي وتوزيع الشرائح الضريبية.",
    keywords: [
      "حاسبة ضريبة الدخل",
      "ضريبة دخل أمريكية",
      "ضريبة تركيا",
      "شرائح ضريبية 2024",
      "معدل ضريبي فعلي",
      "مقدر الضريبة",
      "حساب الضريبة",
    ],
    inputs: {
      country: { label: "الدولة", help: "اختر الولايات المتحدة أو تركيا." },
      grossIncome: { label: "الدخل الإجمالي", help: "إجمالي دخلك السنوي قبل الخصومات." },
      filingStatus: { label: "حالة الإيداع الضريبي", help: "الولايات المتحدة فقط: حالة إيداع IRS." },
      deductions: { label: "خصومات إضافية", help: "خصومات إضافية على الخصم المعياري (الولايات المتحدة) أو الخصومات القانونية (تركيا)." },
    },
    outputs: {
      estimatedTax: { label: "الضريبة المقدّرة", help: "ضريبة الدخل الفيدرالية المستحقة." },
      effectiveRate: { label: "معدل الضريبة الفعلي", help: "ضريبتك كنسبة مئوية من إجمالي دخلك." },
      taxableIncome: { label: "الدخل الخاضع للضريبة", help: "الدخل بعد الخصومات." },
      afterTaxIncome: { label: "الدخل بعد الضريبة", help: "ما تحتفظ به بعد دفع الضريبة الفيدرالية." },
    },
    options: {
      country: { us: "الولايات المتحدة", tr: "تركيا" },
      filingStatus: { single: "أعزب/عزباء", married: "متزوج (إيداع مشترك)", head: "رب الأسرة" },
    },
    errors: {
      negativeIncome: "لا يمكن أن يكون إجمالي الدخل سالبًا.",
      negativeDeductions: "لا يمكن أن تكون الخصومات سالبة.",
    },
    faq: [
      {
        q: "هل تشمل الضرائب الحكومية؟",
        a: "لا. تغطي هذه الحاسبة ضريبة الدخل الفيدرالية الأمريكية فقط.",
      },
      {
        q: "ما هو الخصم المعياري لعام 2024؟",
        a: "لعام 2024: أعزب 14,600 دولار؛ متزوج (مشترك) 29,200 دولار؛ رب الأسرة 21,900 دولار.",
      },
    ],
  },

  ru: {
    title: "Калькулятор подоходного налога",
    short: "Рассчитайте подоходный налог для США или Турции.",
    description:
      "Бесплатный калькулятор подоходного налога для США (федеральные ставки 2024) и Турции (GVK 2024). Введите валовой доход и статус подачи — получите расчёт налога, эффективную ставку и разбивку по скобкам.",
    keywords: [
      "калькулятор подоходного налога",
      "федеральный налог США",
      "налог Турции",
      "налоговые скобки 2024",
      "эффективная ставка налога",
      "расчёт налога",
      "налоговый калькулятор",
    ],
    inputs: {
      country: { label: "Страна", help: "Выберите США или Турцию." },
      grossIncome: { label: "Валовой доход", help: "Ваш общий годовой доход до вычетов." },
      filingStatus: { label: "Статус подачи", help: "Только для США: статус подачи декларации IRS." },
      deductions: { label: "Дополнительные вычеты", help: "Вычеты сверх стандартного (США) или законные вычеты (Турция)." },
    },
    outputs: {
      estimatedTax: { label: "Расчётный налог", help: "Сумма федерального подоходного налога." },
      effectiveRate: { label: "Эффективная ставка", help: "Налог как процент от валового дохода." },
      taxableIncome: { label: "Налогооблагаемый доход", help: "Доход после вычетов." },
      afterTaxIncome: { label: "Доход после налогов", help: "Сумма, остающаяся после уплаты федерального налога." },
    },
    options: {
      country: { us: "США", tr: "Турция" },
      filingStatus: { single: "Холост/не замужем", married: "Совместная подача", head: "Глава домохозяйства" },
    },
    errors: {
      negativeIncome: "Валовой доход не может быть отрицательным.",
      negativeDeductions: "Вычеты не могут быть отрицательными.",
    },
    faq: [
      {
        q: "Включены ли налоги штатов?",
        a: "Нет. Калькулятор охватывает только федеральный подоходный налог США.",
      },
      {
        q: "Каков стандартный вычет в 2024 году?",
        a: "В 2024 году: одиночная подача — $14 600; совместная — $29 200; глава домохозяйства — $21 900.",
      },
    ],
  },

  zh: {
    title: "个人所得税估算器",
    short: "估算您在美国或土耳其的联邦个人所得税。",
    description:
      "免费个人所得税估算器，适用于美国（2024年联邦税率）和土耳其（2024年GVK税率）。输入您的税前收入和申报状态，即可获得预计税额、有效税率和税率分级详情。",
    keywords: [
      "个人所得税计算器",
      "美国联邦税",
      "土耳其所得税",
      "2024年税率",
      "有效税率",
      "税务估算",
      "税收计算",
    ],
    inputs: {
      country: { label: "国家", help: "选择美国或土耳其。" },
      grossIncome: { label: "税前总收入", help: "扣除任何费用前的年度总收入。" },
      filingStatus: { label: "申报状态", help: "仅限美国：IRS申报状态。" },
      deductions: { label: "额外扣除项", help: "美国：标准扣除额之外的逐项扣除；土耳其：法定扣除项。" },
    },
    outputs: {
      estimatedTax: { label: "预计税额", help: "联邦个人所得税应缴金额。" },
      effectiveRate: { label: "有效税率", help: "您的税额占税前总收入的百分比。" },
      taxableIncome: { label: "应税收入", help: "扣除后需缴税的收入金额。" },
      afterTaxIncome: { label: "税后收入", help: "缴纳联邦所得税后的实得收入。" },
    },
    options: {
      country: { us: "美国", tr: "土耳其" },
      filingStatus: { single: "单身", married: "已婚联合申报", head: "户主" },
    },
    errors: {
      negativeIncome: "税前总收入不能为负数。",
      negativeDeductions: "扣除项不能为负数。",
    },
    faq: [
      {
        q: "是否包含州税？",
        a: "不包含。本计算器仅涵盖美国联邦个人所得税。",
      },
      {
        q: "2024年标准扣除额是多少？",
        a: "2024年：单身申报$14,600；已婚联合申报$29,200；户主$21,900。",
      },
    ],
  },

  ja: {
    title: "所得税推計ツール",
    short: "米国またはトルコの連邦所得税を推計します。",
    description:
      "米国（2024年連邦税率）およびトルコ（2024年GVK税率）の所得税を無料で推計できます。総所得と申告ステータスを入力すると、推計税額・実効税率・税率区分の内訳が確認できます。",
    keywords: [
      "所得税計算機",
      "米国連邦税",
      "トルコ所得税",
      "2024年税率",
      "実効税率",
      "税額推計",
      "税計算機",
    ],
    inputs: {
      country: { label: "国", help: "米国またはトルコを選択してください。" },
      grossIncome: { label: "総所得", help: "控除前の年間総所得。" },
      filingStatus: { label: "申告ステータス", help: "米国のみ：IRSの申告ステータス。" },
      deductions: { label: "追加控除", help: "標準控除に加えた控除額（米国）、または法定控除（トルコ）。" },
    },
    outputs: {
      estimatedTax: { label: "推計税額", help: "連邦所得税の推計額。" },
      effectiveRate: { label: "実効税率", help: "総所得に対する税額の割合。" },
      taxableIncome: { label: "課税所得", help: "控除後の所得（課税対象となる金額）。" },
      afterTaxIncome: { label: "税引後所得", help: "連邦所得税を支払った後に残る金額。" },
    },
    options: {
      country: { us: "米国", tr: "トルコ" },
      filingStatus: { single: "独身", married: "夫婦合算申告", head: "世帯主" },
    },
    errors: {
      negativeIncome: "総所得は負の値にできません。",
      negativeDeductions: "控除額は負の値にできません。",
    },
    faq: [
      {
        q: "州税は含まれていますか？",
        a: "含まれていません。このツールは米国連邦所得税のみを対象としています。",
      },
      {
        q: "2024年の標準控除額はいくらですか？",
        a: "2024年：独身は$14,600、夫婦合算申告は$29,200、世帯主は$21,900です。",
      },
    ],
  },

  ko: {
    title: "소득세 추정기",
    short: "미국 또는 터키의 연방 소득세를 추정하세요.",
    description:
      "미국(2024년 연방 세율) 및 터키(2024년 GVK 세율)를 위한 무료 소득세 추정기. 총소득과 신고 상태를 입력하면 예상 세액, 실효 세율, 세율 구간별 내역을 확인할 수 있습니다.",
    keywords: [
      "소득세 계산기",
      "미국 연방 세금",
      "터키 소득세",
      "2024년 세율",
      "실효 세율",
      "세금 추정기",
      "세금 계산",
    ],
    inputs: {
      country: { label: "국가", help: "미국 또는 터키를 선택하세요." },
      grossIncome: { label: "총소득", help: "공제 전 연간 총소득." },
      filingStatus: { label: "신고 상태", help: "미국만 해당: IRS 신고 상태." },
      deductions: { label: "추가 공제", help: "기본 공제 외 추가 공제액(미국) 또는 법정 공제(터키)." },
    },
    outputs: {
      estimatedTax: { label: "예상 세액", help: "연방 소득세 납부 예상액." },
      effectiveRate: { label: "실효 세율", help: "총소득 대비 세액 비율." },
      taxableIncome: { label: "과세 소득", help: "공제 후 세금이 계산되는 소득." },
      afterTaxIncome: { label: "세후 소득", help: "연방 소득세 납부 후 남는 금액." },
    },
    options: {
      country: { us: "미국", tr: "터키" },
      filingStatus: { single: "독신", married: "부부 합산 신고", head: "세대주" },
    },
    errors: {
      negativeIncome: "총소득은 음수가 될 수 없습니다.",
      negativeDeductions: "공제액은 음수가 될 수 없습니다.",
    },
    faq: [
      {
        q: "주(州) 세금이 포함되나요?",
        a: "아니요. 이 계산기는 미국 연방 소득세만 다룹니다.",
      },
      {
        q: "2024년 기본 공제액은 얼마인가요?",
        a: "2024년: 독신 $14,600; 부부 합산 신고 $29,200; 세대주 $21,900.",
      },
    ],
  },

  hi: {
    title: "आयकर अनुमानक",
    short: "अमेरिका या तुर्की के लिए अपनी आयकर का अनुमान लगाएं।",
    description:
      "अमेरिका (2024 संघीय दरें) और तुर्की (2024 GVK दरें) के लिए मुफ़्त आयकर अनुमानक। अपनी सकल आय और फाइलिंग स्थिति दर्ज करें और अनुमानित कर, प्रभावी दर एवं स्लैब विवरण देखें।",
    keywords: [
      "आयकर कैलकुलेटर",
      "अमेरिकी संघीय कर",
      "तुर्की आयकर",
      "2024 कर स्लैब",
      "प्रभावी कर दर",
      "कर अनुमानक",
      "आयकर गणना",
    ],
    inputs: {
      country: { label: "देश", help: "अमेरिका या तुर्की चुनें।" },
      grossIncome: { label: "सकल आय", help: "किसी भी कटौती से पहले की वार्षिक कुल आय।" },
      filingStatus: { label: "फाइलिंग स्थिति", help: "केवल अमेरिका: IRS फाइलिंग स्थिति।" },
      deductions: { label: "अतिरिक्त कटौती", help: "मानक कटौती के अलावा अतिरिक्त कटौती (अमेरिका) या कानूनी कटौती (तुर्की)।" },
    },
    outputs: {
      estimatedTax: { label: "अनुमानित कर", help: "देय संघीय आयकर की राशि।" },
      effectiveRate: { label: "प्रभावी कर दर", help: "सकल आय के प्रतिशत के रूप में आपका कर।" },
      taxableIncome: { label: "कर योग्य आय", help: "कटौती के बाद की आय जिस पर कर लगाया जाता है।" },
      afterTaxIncome: { label: "कर पश्चात आय", help: "संघीय आयकर चुकाने के बाद शेष राशि।" },
    },
    options: {
      country: { us: "अमेरिका", tr: "तुर्की" },
      filingStatus: { single: "अविवाहित", married: "विवाहित (संयुक्त फाइलिंग)", head: "घर का मुखिया" },
    },
    errors: {
      negativeIncome: "सकल आय ऋणात्मक नहीं हो सकती।",
      negativeDeductions: "कटौती ऋणात्मक नहीं हो सकती।",
    },
    faq: [
      {
        q: "क्या राज्य कर शामिल है?",
        a: "नहीं। यह कैलकुलेटर केवल अमेरिकी संघीय आयकर को कवर करता है।",
      },
      {
        q: "2024 में मानक कटौती कितनी है?",
        a: "2024 में: अविवाहित $14,600; विवाहित संयुक्त फाइलिंग $29,200; घर का मुखिया $21,900।",
      },
    ],
  },
};

export default i18n;
