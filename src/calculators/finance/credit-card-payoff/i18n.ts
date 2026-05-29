import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Credit Card Payoff Calculator",
    short: "See how long it takes to pay off your credit card and how much interest you will pay.",
    description:
      "Free credit card payoff calculator. Enter your balance, APR, and payment amount to see months to payoff, total interest, and a month-by-month amortization schedule.",
    keywords: [
      "credit card payoff calculator",
      "how long to pay off credit card",
      "credit card interest calculator",
      "minimum payment calculator",
      "debt payoff calculator",
      "APR calculator",
      "amortization schedule",
    ],
    inputs: {
      balance: { label: "Current Balance", help: "Your current credit card balance." },
      apr: { label: "Annual Percentage Rate (APR)", help: "Your card's annual interest rate." },
      paymentMode: {
        label: "Payment Strategy",
        help: "Minimum payment: only pays the minimum each month. Fixed payment: pays a constant amount until paid off.",
      },
      fixedPayment: { label: "Fixed Monthly Payment", help: "The fixed amount you will pay each month. Must exceed the monthly interest charge." },
      minimumPaymentPct: { label: "Minimum Payment %", help: "Percentage of balance used to calculate minimum payment. Typically 1–3 %." },
    },
    outputs: {
      monthsToPayoff: { label: "Months to Pay Off", help: "Number of months until the balance reaches zero." },
      totalPaid: { label: "Total Amount Paid", help: "Sum of all payments including principal and interest." },
      totalInterest: { label: "Total Interest Paid", help: "How much you pay above the original balance." },
      interestSavings: { label: "Interest Saved vs. Minimum", help: "How much less interest you pay compared to making only minimum payments." },
    },
    options: {
      paymentMode: {
        minimum: "Minimum Payment",
        fixed: "Fixed Payment",
      },
    },
    errors: {
      paymentTooLow: "Fixed payment must be higher than the monthly interest charge to reduce the balance.",
      balanceOutOfRange: "Balance must be between $1 and $500,000.",
    },
    faq: [
      {
        q: "Why does it take so long to pay off with minimum payments?",
        a: "Minimum payments are calculated as a percentage of your balance. As the balance decreases, so does the minimum payment — meaning most of each payment goes to interest rather than principal. This dramatically extends payoff time.",
      },
      {
        q: "What is APR vs. monthly interest rate?",
        a: "APR (Annual Percentage Rate) is the yearly rate. To get the monthly rate, divide by 12. For a 20% APR, the monthly rate is approximately 1.67%.",
      },
      {
        q: "Should I pay more than the minimum?",
        a: "Yes, significantly more. Even $50–$100 extra per month can save thousands in interest and years of payments. The CFPB recommends paying as much as you can above the minimum.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Pagamento de Cartão de Crédito",
    short: "Veja quanto tempo demora a pagar o seu cartão e quanto vai pagar em juros.",
    description:
      "Calculadora gratuita de pagamento de cartão de crédito. Introduza o saldo, taxa de juro e pagamento mensal para ver o prazo de quitação.",
    keywords: ["pagamento cartão crédito", "quitar cartão", "juros cartão crédito", "saldo cartão", "dívida cartão"],
    inputs: {
      balance: { label: "Current Balance", help: "Your current credit card balance." },
      apr: { label: "Annual Percentage Rate (APR)", help: "Your card's annual interest rate." },
      paymentMode: {
        label: "Payment Strategy",
        help: "Minimum payment: only pays the minimum each month. Fixed payment: pays a constant amount until paid off.",
      },
      fixedPayment: { label: "Fixed Monthly Payment", help: "The fixed amount you will pay each month. Must exceed the monthly interest charge." },
      minimumPaymentPct: { label: "Minimum Payment %", help: "Percentage of balance used to calculate minimum payment. Typically 1–3 %." },
    },
    outputs: {
      monthsToPayoff: { label: "Months to Pay Off", help: "Number of months until the balance reaches zero." },
      totalPaid: { label: "Total Amount Paid", help: "Sum of all payments including principal and interest." },
      totalInterest: { label: "Total Interest Paid", help: "How much you pay above the original balance." },
      interestSavings: { label: "Interest Saved vs. Minimum", help: "How much less interest you pay compared to making only minimum payments." },
    },
    options: {
      paymentMode: {
        minimum: "Minimum Payment",
        fixed: "Fixed Payment",
      },
    },
    errors: {
      paymentTooLow: "Fixed payment must be higher than the monthly interest charge to reduce the balance.",
      balanceOutOfRange: "Balance must be between $1 and $500,000.",
    },
    faq: [
      {
        q: "Why does it take so long to pay off with minimum payments?",
        a: "Minimum payments are calculated as a percentage of your balance. As the balance decreases, so does the minimum payment — meaning most of each payment goes to interest rather than principal. This dramatically extends payoff time.",
      },
      {
        q: "What is APR vs. monthly interest rate?",
        a: "APR (Annual Percentage Rate) is the yearly rate. To get the monthly rate, divide by 12. For a 20% APR, the monthly rate is approximately 1.67%.",
      },
      {
        q: "Should I pay more than the minimum?",
        a: "Yes, significantly more. Even $50–$100 extra per month can save thousands in interest and years of payments. The CFPB recommends paying as much as you can above the minimum.",
      },
    ],
  },
  id: {
    title: "Kalkulator Pelunasan Kartu Kredit",
    short: "Lihat berapa lama untuk melunasi kartu kredit dan total bunga yang dibayar.",
    description:
      "Kalkulator pelunasan kartu kredit gratis. Masukkan saldo, suku bunga, dan pembayaran bulanan untuk melihat jangka waktu pelunasan.",
    keywords: ["pelunasan kartu kredit", "kalkulator kartu kredit", "bunga kartu kredit", "saldo kartu", "utang kartu"],
    inputs: {
      balance: { label: "Current Balance", help: "Your current credit card balance." },
      apr: { label: "Annual Percentage Rate (APR)", help: "Your card's annual interest rate." },
      paymentMode: {
        label: "Payment Strategy",
        help: "Minimum payment: only pays the minimum each month. Fixed payment: pays a constant amount until paid off.",
      },
      fixedPayment: { label: "Fixed Monthly Payment", help: "The fixed amount you will pay each month. Must exceed the monthly interest charge." },
      minimumPaymentPct: { label: "Minimum Payment %", help: "Percentage of balance used to calculate minimum payment. Typically 1–3 %." },
    },
    outputs: {
      monthsToPayoff: { label: "Months to Pay Off", help: "Number of months until the balance reaches zero." },
      totalPaid: { label: "Total Amount Paid", help: "Sum of all payments including principal and interest." },
      totalInterest: { label: "Total Interest Paid", help: "How much you pay above the original balance." },
      interestSavings: { label: "Interest Saved vs. Minimum", help: "How much less interest you pay compared to making only minimum payments." },
    },
    options: {
      paymentMode: {
        minimum: "Minimum Payment",
        fixed: "Fixed Payment",
      },
    },
    errors: {
      paymentTooLow: "Fixed payment must be higher than the monthly interest charge to reduce the balance.",
      balanceOutOfRange: "Balance must be between $1 and $500,000.",
    },
    faq: [
      {
        q: "Why does it take so long to pay off with minimum payments?",
        a: "Minimum payments are calculated as a percentage of your balance. As the balance decreases, so does the minimum payment — meaning most of each payment goes to interest rather than principal. This dramatically extends payoff time.",
      },
      {
        q: "What is APR vs. monthly interest rate?",
        a: "APR (Annual Percentage Rate) is the yearly rate. To get the monthly rate, divide by 12. For a 20% APR, the monthly rate is approximately 1.67%.",
      },
      {
        q: "Should I pay more than the minimum?",
        a: "Yes, significantly more. Even $50–$100 extra per month can save thousands in interest and years of payments. The CFPB recommends paying as much as you can above the minimum.",
      },
    ],
  },


  tr: {
    title: "Kredi Kartı Borç Ödeme Hesaplayıcısı",
    short: "Kredi kartı borcunuzu ne zaman ödeyeceğinizi ve ne kadar faiz ödeyeceğinizi görün.",
    description:
      "Ücretsiz kredi kartı borç ödeme hesaplayıcısı. Bakiyenizi, yıllık faiz oranınızı ve ödeme tutarınızı girerek ödeme sürenizi, toplam faizi ve aylık ödeme planını görün.",
    keywords: [
      "kredi kartı borç ödeme hesaplayıcısı",
      "kredi kartı kaç ayda ödenir",
      "kredi kartı faiz hesaplayıcı",
      "minimum ödeme hesaplayıcı",
      "borç ödeme planı",
      "yıllık faiz oranı",
      "amortisman tablosu",
    ],
    inputs: {
      balance: { label: "Mevcut Bakiye", help: "Güncel kredi kartı borcunuz." },
      apr: { label: "Yıllık Faiz Oranı (APR)", help: "Kartınızın yıllık faiz oranı." },
      paymentMode: {
        label: "Ödeme Stratejisi",
        help: "Minimum ödeme: her ay yalnızca minimum ödeme yapılır. Sabit ödeme: borç bitene kadar sabit tutar ödenir.",
      },
      fixedPayment: { label: "Sabit Aylık Ödeme", help: "Her ay ödeyeceğiniz sabit tutar." },
      minimumPaymentPct: { label: "Minimum Ödeme Yüzdesi", help: "Minimum ödemeyi hesaplamak için kullanılan bakiye yüzdesi. Genellikle %1–3." },
    },
    outputs: {
      monthsToPayoff: { label: "Ödeme Süre (Ay)", help: "Bakiyenin sıfıra düşmesi için gereken ay sayısı." },
      totalPaid: { label: "Toplam Ödeme", help: "Anapara ve faiz dahil tüm ödemelerin toplamı." },
      totalInterest: { label: "Toplam Faiz", help: "Orijinal bakiyenin üzerinde ödediğiniz tutar." },
      interestSavings: { label: "Faiz Tasarrufu", help: "Minimum ödeme yerine sabit ödeme yaparak kazandığınız faiz tasarrufu." },
    },
    options: {
      paymentMode: {
        minimum: "Minimum Ödeme",
        fixed: "Sabit Ödeme",
      },
    },
    errors: {
      paymentTooLow: "Sabit ödeme, aylık faiz yükünden yüksek olmalıdır.",
      balanceOutOfRange: "Bakiye 1 ile 500.000 arasında olmalıdır.",
    },
    faq: [
      {
        q: "Neden minimum ödemelerle ödeme bu kadar uzun sürer?",
        a: "Minimum ödemeler bakiyenin bir yüzdesi olarak hesaplanır. Bakiye azaldıkça minimum ödeme de azalır; bu da her ödemenin büyük kısmının anaparayı değil faizi karşılaması anlamına gelir.",
      },
      {
        q: "Minimum ödemenin üzerinde ödeme yapmalı mıyım?",
        a: "Evet, kesinlikle. Her ay 50–100 TL fazla ödeme bile yüzlerce TL faiz tasarrufu ve yıllarca kısaltılmış ödeme süresi sağlayabilir.",
      },
    ],
  },

  de: {
    title: "Kreditkarten-Tilgungsrechner",
    short: "Berechnen Sie, wie lange Sie Ihre Kreditkartenschulden abzahlen und wie viel Zinsen Sie zahlen.",
    description:
      "Kostenloser Kreditkarten-Tilgungsrechner. Geben Sie Saldo, Jahreszins und Zahlungsbetrag ein, um Tilgungsdauer, Zinsen und einen monatlichen Tilgungsplan zu sehen.",
    keywords: [
      "Kreditkarten-Tilgungsrechner",
      "Kreditkarten Schulden abzahlen",
      "Zinsen Kreditkarte",
      "Mindestrate Kreditkarte",
      "Tilgungsplan",
      "Schuldenrechner",
      "Jahreszins Rechner",
    ],
    inputs: {
      balance: { label: "Aktueller Saldo", help: "Ihr aktueller Kreditkartensaldo." },
      apr: { label: "Jahreszins (APR)", help: "Der jährliche Zinssatz Ihrer Kreditkarte." },
      paymentMode: { label: "Zahlungsstrategie", help: "Mindestrate oder fester monatlicher Betrag." },
      fixedPayment: { label: "Feste monatliche Zahlung", help: "Der feste Betrag, den Sie jeden Monat zahlen." },
      minimumPaymentPct: { label: "Mindestrate (%)", help: "Prozentsatz des Saldos für die Mindestrate. Typisch 1–3 %." },
    },
    outputs: {
      monthsToPayoff: { label: "Monate bis zur Tilgung", help: "Anzahl der Monate bis der Saldo null ist." },
      totalPaid: { label: "Gesamt gezahlt", help: "Summe aller Zahlungen inklusive Zinsen." },
      totalInterest: { label: "Gesamt Zinsen", help: "Zinsen über dem ursprünglichen Saldo." },
      interestSavings: { label: "Zinsersparnis", help: "Gesparte Zinsen im Vergleich zur Mindestrate." },
    },
    options: {
      paymentMode: { minimum: "Mindestrate", fixed: "Feste Zahlung" },
    },
    errors: {
      paymentTooLow: "Die feste Zahlung muss höher als der monatliche Zinsaufwand sein.",
      balanceOutOfRange: "Saldo muss zwischen 1 und 500.000 liegen.",
    },
    faq: [
      {
        q: "Warum dauert die Tilgung mit Mindestraten so lange?",
        a: "Mindestraten werden als Prozentsatz des Saldos berechnet. Je mehr Sie abbezahlen, desto kleiner wird die Mindestrate — fast alles geht in die Zinsen.",
      },
      {
        q: "Sollte ich mehr als die Mindestrate zahlen?",
        a: "Ja, deutlich mehr. Selbst 50–100 € extra pro Monat können Tausende an Zinsen sparen.",
      },
    ],
  },

  fr: {
    title: "Calculateur de remboursement de carte de crédit",
    short: "Découvrez combien de temps il faut pour rembourser votre carte de crédit et combien d'intérêts vous paierez.",
    description:
      "Calculateur gratuit de remboursement de carte de crédit. Entrez votre solde, votre taux annuel et votre paiement mensuel pour voir la durée de remboursement, les intérêts totaux et un tableau d'amortissement.",
    keywords: [
      "calculateur remboursement carte crédit",
      "temps pour rembourser carte crédit",
      "intérêts carte crédit",
      "paiement minimum carte crédit",
      "calculateur dette",
      "taux annuel effectif",
      "plan de remboursement",
    ],
    inputs: {
      balance: { label: "Solde actuel", help: "Votre solde de carte de crédit actuel." },
      apr: { label: "Taux annuel effectif (APR)", help: "Le taux d'intérêt annuel de votre carte." },
      paymentMode: { label: "Stratégie de paiement", help: "Paiement minimum ou montant fixe mensuel." },
      fixedPayment: { label: "Paiement mensuel fixe", help: "Le montant fixe que vous payez chaque mois." },
      minimumPaymentPct: { label: "Pourcentage de paiement minimum", help: "Pourcentage du solde pour le paiement minimum. Typiquement 1–3 %." },
    },
    outputs: {
      monthsToPayoff: { label: "Mois pour rembourser", help: "Nombre de mois jusqu'à un solde zéro." },
      totalPaid: { label: "Total payé", help: "Somme de tous les versements, intérêts compris." },
      totalInterest: { label: "Total des intérêts", help: "Intérêts payés au-delà du solde initial." },
      interestSavings: { label: "Économies d'intérêts", help: "Intérêts économisés par rapport aux paiements minimums." },
    },
    options: {
      paymentMode: { minimum: "Paiement minimum", fixed: "Paiement fixe" },
    },
    errors: {
      paymentTooLow: "Le paiement fixe doit dépasser les intérêts mensuels.",
      balanceOutOfRange: "Le solde doit être entre 1 et 500 000.",
    },
    faq: [
      {
        q: "Pourquoi faut-il si longtemps avec les paiements minimums ?",
        a: "Les paiements minimums diminuent à mesure que le solde baisse — la quasi-totalité est absorbée par les intérêts.",
      },
      {
        q: "Devriez-vous payer plus que le minimum ?",
        a: "Oui. Même 50–100 € de plus par mois peuvent faire économiser des milliers d'euros d'intérêts.",
      },
    ],
  },

  es: {
    title: "Calculadora de pago de tarjeta de crédito",
    short: "Descubre cuánto tiempo tardas en pagar tu tarjeta de crédito y cuánto interés pagarás.",
    description:
      "Calculadora gratuita de pago de tarjeta de crédito. Ingresa tu saldo, TAE y pago mensual para ver meses hasta el pago total, intereses totales y un plan de amortización.",
    keywords: [
      "calculadora pago tarjeta crédito",
      "cuánto tarda en pagarse tarjeta",
      "intereses tarjeta crédito",
      "pago mínimo tarjeta",
      "calculadora deuda",
      "TAE calculadora",
      "plan de amortización",
    ],
    inputs: {
      balance: { label: "Saldo actual", help: "Tu saldo actual de tarjeta de crédito." },
      apr: { label: "Tasa Anual Equivalente (TAE)", help: "La tasa de interés anual de tu tarjeta." },
      paymentMode: { label: "Estrategia de pago", help: "Pago mínimo o cuota fija mensual." },
      fixedPayment: { label: "Pago mensual fijo", help: "La cantidad fija que pagarás cada mes." },
      minimumPaymentPct: { label: "% de pago mínimo", help: "Porcentaje del saldo para el pago mínimo. Típicamente 1–3 %." },
    },
    outputs: {
      monthsToPayoff: { label: "Meses para pagar", help: "Número de meses hasta saldo cero." },
      totalPaid: { label: "Total pagado", help: "Suma de todos los pagos, incluyendo intereses." },
      totalInterest: { label: "Intereses totales", help: "Intereses pagados por encima del saldo original." },
      interestSavings: { label: "Ahorro en intereses", help: "Intereses ahorrados frente a pagar solo el mínimo." },
    },
    options: {
      paymentMode: { minimum: "Pago mínimo", fixed: "Pago fijo" },
    },
    errors: {
      paymentTooLow: "El pago fijo debe superar el cargo mensual por intereses.",
      balanceOutOfRange: "El saldo debe estar entre 1 y 500,000.",
    },
    faq: [
      {
        q: "¿Por qué tarda tanto en pagarse con el mínimo?",
        a: "Los pagos mínimos disminuyen a medida que baja el saldo, haciendo que casi todo vaya a intereses.",
      },
      {
        q: "¿Debo pagar más que el mínimo?",
        a: "Sí. Incluso $50–100 extra al mes pueden ahorrar miles en intereses.",
      },
    ],
  },

  it: {
    title: "Calcolatore rimborso carta di credito",
    short: "Scopri quanto tempo ci vuole per estinguere il debito della tua carta di credito e quanti interessi pagherai.",
    description:
      "Calcolatore gratuito per il rimborso della carta di credito. Inserisci saldo, tasso annuo e pagamento mensile per vedere mesi al saldo zero, interessi totali e piano di ammortamento.",
    keywords: [
      "calcolatore rimborso carta credito",
      "quanto tempo per pagare carta credito",
      "interessi carta credito",
      "pagamento minimo carta",
      "calcolatore debiti",
      "TAEG calcolatore",
      "piano di ammortamento",
    ],
    inputs: {
      balance: { label: "Saldo attuale", help: "Il tuo saldo attuale della carta di credito." },
      apr: { label: "Tasso Annuo Effettivo Globale (TAEG)", help: "Il tasso di interesse annuo della tua carta." },
      paymentMode: { label: "Strategia di pagamento", help: "Pagamento minimo o rata fissa mensile." },
      fixedPayment: { label: "Rata mensile fissa", help: "L'importo fisso che pagherai ogni mese." },
      minimumPaymentPct: { label: "% pagamento minimo", help: "Percentuale del saldo per il pagamento minimo. Di solito 1–3 %." },
    },
    outputs: {
      monthsToPayoff: { label: "Mesi al saldo zero", help: "Numero di mesi fino al saldo zero." },
      totalPaid: { label: "Totale pagato", help: "Somma di tutti i pagamenti inclusi gli interessi." },
      totalInterest: { label: "Interessi totali", help: "Interessi pagati oltre al saldo originale." },
      interestSavings: { label: "Risparmio interessi", help: "Interessi risparmiati rispetto al pagamento minimo." },
    },
    options: {
      paymentMode: { minimum: "Pagamento minimo", fixed: "Rata fissa" },
    },
    errors: {
      paymentTooLow: "La rata fissa deve superare la quota mensile di interessi.",
      balanceOutOfRange: "Il saldo deve essere tra 1 e 500.000.",
    },
    faq: [
      {
        q: "Perché con i pagamenti minimi ci vuole così tanto?",
        a: "I pagamenti minimi diminuiscono man mano che il saldo scende, facendo sì che quasi tutto vada agli interessi.",
      },
      {
        q: "È meglio pagare più del minimo?",
        a: "Sì. Anche 50–100 € in più al mese possono risparmiare migliaia di euro di interessi.",
      },
    ],
  },

  ar: {
    title: "حاسبة سداد بطاقة الائتمان",
    short: "اكتشف كم من الوقت تحتاج لسداد بطاقتك الائتمانية وكم ستدفع من الفوائد.",
    description:
      "حاسبة مجانية لسداد بطاقة الائتمان. أدخل رصيدك ومعدل الفائدة السنوي ومبلغ الدفع لمعرفة أشهر السداد وإجمالي الفوائد وجدول السداد الشهري.",
    keywords: [
      "حاسبة سداد بطاقة ائتمان",
      "كم يستغرق سداد البطاقة",
      "فوائد بطاقة الائتمان",
      "الحد الأدنى للسداد",
      "حاسبة الديون",
      "معدل الفائدة السنوي",
      "جدول السداد",
    ],
    inputs: {
      balance: { label: "الرصيد الحالي", help: "رصيد بطاقتك الائتمانية الحالي." },
      apr: { label: "معدل الفائدة السنوي (APR)", help: "معدل الفائدة السنوي لبطاقتك." },
      paymentMode: { label: "استراتيجية الدفع", help: "الحد الأدنى للدفع أو مبلغ ثابت شهري." },
      fixedPayment: { label: "الدفع الشهري الثابت", help: "المبلغ الثابت الذي ستدفعه كل شهر." },
      minimumPaymentPct: { label: "نسبة الحد الأدنى للدفع", help: "نسبة الرصيد لحساب الحد الأدنى. عادةً 1–3%." },
    },
    outputs: {
      monthsToPayoff: { label: "أشهر حتى السداد الكامل", help: "عدد الأشهر حتى يصل الرصيد إلى الصفر." },
      totalPaid: { label: "إجمالي المدفوعات", help: "مجموع جميع المدفوعات بما فيها الفوائد." },
      totalInterest: { label: "إجمالي الفوائد", help: "الفوائد المدفوعة فوق الرصيد الأصلي." },
      interestSavings: { label: "توفير الفوائد", help: "الفوائد التي وفّرتها مقارنةً بالحد الأدنى للدفع." },
    },
    options: {
      paymentMode: { minimum: "الحد الأدنى للدفع", fixed: "دفع ثابت" },
    },
    errors: {
      paymentTooLow: "يجب أن يكون الدفع الثابت أعلى من الفائدة الشهرية.",
      balanceOutOfRange: "يجب أن يكون الرصيد بين 1 و500,000.",
    },
    faq: [
      {
        q: "لماذا يستغرق السداد وقتًا طويلاً مع الحد الأدنى؟",
        a: "تنخفض مدفوعات الحد الأدنى مع انخفاض الرصيد، مما يجعل معظم كل دفعة يذهب للفوائد.",
      },
      {
        q: "هل يجب أن أدفع أكثر من الحد الأدنى؟",
        a: "نعم. حتى 50–100 دولار إضافية شهريًا يمكن أن توفر آلاف الدولارات من الفوائد.",
      },
    ],
  },

  ru: {
    title: "Калькулятор погашения кредитной карты",
    short: "Узнайте, сколько времени займёт погашение кредитной карты и сколько процентов вы заплатите.",
    description:
      "Бесплатный калькулятор погашения кредитной карты. Введите баланс, годовую ставку и сумму платежа, чтобы увидеть срок погашения, общую сумму процентов и ежемесячный график.",
    keywords: [
      "калькулятор погашения кредитной карты",
      "как быстро погасить кредитку",
      "проценты кредитная карта",
      "минимальный платёж",
      "калькулятор долга",
      "годовая процентная ставка",
      "график погашения",
    ],
    inputs: {
      balance: { label: "Текущий баланс", help: "Ваш текущий баланс кредитной карты." },
      apr: { label: "Годовая процентная ставка (APR)", help: "Годовая процентная ставка по карте." },
      paymentMode: { label: "Стратегия платежей", help: "Минимальный платёж или фиксированная сумма." },
      fixedPayment: { label: "Фиксированный ежемесячный платёж", help: "Фиксированная сумма, которую вы платите каждый месяц." },
      minimumPaymentPct: { label: "Минимальный платёж (%)", help: "Процент баланса для расчёта минимального платежа. Обычно 1–3 %." },
    },
    outputs: {
      monthsToPayoff: { label: "Месяцев до погашения", help: "Количество месяцев до нулевого баланса." },
      totalPaid: { label: "Всего выплачено", help: "Сумма всех платежей, включая проценты." },
      totalInterest: { label: "Всего процентов", help: "Проценты сверх исходного баланса." },
      interestSavings: { label: "Экономия на процентах", help: "Сколько процентов вы сэкономили по сравнению с минимальными платежами." },
    },
    options: {
      paymentMode: { minimum: "Минимальный платёж", fixed: "Фиксированный платёж" },
    },
    errors: {
      paymentTooLow: "Фиксированный платёж должен превышать ежемесячные проценты.",
      balanceOutOfRange: "Баланс должен быть от 1 до 500 000.",
    },
    faq: [
      {
        q: "Почему при минимальных платежах погашение занимает так долго?",
        a: "Минимальные платежи уменьшаются по мере снижения баланса — почти всё уходит на проценты.",
      },
      {
        q: "Стоит ли платить больше минимума?",
        a: "Да. Даже 50–100 $ дополнительно в месяц могут сэкономить тысячи на процентах.",
      },
    ],
  },

  zh: {
    title: "信用卡还款计算器",
    short: "了解还清信用卡需要多长时间以及需要支付多少利息。",
    description:
      "免费信用卡还款计算器。输入余额、年利率和月还款额，即可查看还清月数、总利息和月度还款计划。",
    keywords: [
      "信用卡还款计算器",
      "信用卡多久还清",
      "信用卡利息计算",
      "最低还款计算器",
      "债务还款计算器",
      "年利率计算",
      "还款计划",
    ],
    inputs: {
      balance: { label: "当前余额", help: "您当前的信用卡欠款余额。" },
      apr: { label: "年利率（APR）", help: "您信用卡的年利率。" },
      paymentMode: { label: "还款方式", help: "最低还款或固定月还款额。" },
      fixedPayment: { label: "固定月还款额", help: "每月固定还款的金额。" },
      minimumPaymentPct: { label: "最低还款比例（%）", help: "计算最低还款额的余额百分比，通常为1–3%。" },
    },
    outputs: {
      monthsToPayoff: { label: "还清所需月数", help: "余额归零所需的月数。" },
      totalPaid: { label: "总还款额", help: "含利息的所有还款合计。" },
      totalInterest: { label: "总利息", help: "超出原始余额支付的利息。" },
      interestSavings: { label: "节省的利息", help: "与只还最低还款额相比节省的利息。" },
    },
    options: {
      paymentMode: { minimum: "最低还款", fixed: "固定还款" },
    },
    errors: {
      paymentTooLow: "固定还款额必须高于每月利息。",
      balanceOutOfRange: "余额必须在1至500,000之间。",
    },
    faq: [
      {
        q: "为什么最低还款还款期那么长？",
        a: "最低还款额随余额减少而降低，导致大部分还款用于支付利息而非本金。",
      },
      {
        q: "应该多还一些吗？",
        a: "是的。每月多还50–100元就可以节省数千元利息。",
      },
    ],
  },

  ja: {
    title: "クレジットカード返済計算機",
    short: "クレジットカードの残高を完済するまでの期間と支払う利息を計算します。",
    description:
      "無料のクレジットカード返済計算機。残高・年利率・月々の支払い額を入力すると、完済までの月数・総支払額・利息・月次返済スケジュールが確認できます。",
    keywords: [
      "クレジットカード返済計算機",
      "何ヶ月で完済",
      "クレジットカード利息",
      "最低返済額",
      "借金返済計算機",
      "年利計算",
      "返済スケジュール",
    ],
    inputs: {
      balance: { label: "現在の残高", help: "クレジットカードの現在の残高。" },
      apr: { label: "年利率（APR）", help: "カードの年利率。" },
      paymentMode: { label: "返済方法", help: "最低返済額または固定月額払い。" },
      fixedPayment: { label: "毎月の固定返済額", help: "毎月支払う固定額。" },
      minimumPaymentPct: { label: "最低返済率（%）", help: "最低返済額の計算に使う残高の割合。通常1–3%。" },
    },
    outputs: {
      monthsToPayoff: { label: "完済までの月数", help: "残高がゼロになるまでの月数。" },
      totalPaid: { label: "総支払額", help: "利息を含む全支払いの合計。" },
      totalInterest: { label: "総利息", help: "元の残高を超えて支払う利息。" },
      interestSavings: { label: "利息節約額", help: "最低返済のみと比べた利息節約額。" },
    },
    options: {
      paymentMode: { minimum: "最低返済額", fixed: "固定返済額" },
    },
    errors: {
      paymentTooLow: "固定返済額は月次利息を上回る必要があります。",
      balanceOutOfRange: "残高は1〜500,000の範囲で入力してください。",
    },
    faq: [
      {
        q: "最低返済で完済に時間がかかるのはなぜですか？",
        a: "最低返済額は残高が減るにつれて下がり、ほとんどが利息に充てられるためです。",
      },
      {
        q: "最低返済より多く払うべきですか？",
        a: "はい。毎月5,000〜10,000円多く払うだけで、数十万円の利息を節約できます。",
      },
    ],
  },

  ko: {
    title: "신용카드 상환 계산기",
    short: "신용카드 잔액을 완전히 갚는 데 얼마나 걸리고 이자를 얼마나 내는지 계산하세요.",
    description:
      "무료 신용카드 상환 계산기. 잔액, 연이율, 월 납입액을 입력하면 상환 기간, 총 이자, 월별 상환 일정을 확인할 수 있습니다.",
    keywords: [
      "신용카드 상환 계산기",
      "신용카드 몇 개월 상환",
      "신용카드 이자 계산",
      "최소 납부액 계산",
      "부채 상환 계산기",
      "연이율 계산",
      "상환 일정",
    ],
    inputs: {
      balance: { label: "현재 잔액", help: "현재 신용카드 잔액." },
      apr: { label: "연이율 (APR)", help: "카드의 연간 이자율." },
      paymentMode: { label: "납입 방식", help: "최소 납입 또는 고정 월 납입액." },
      fixedPayment: { label: "고정 월 납입액", help: "매달 납입할 고정 금액." },
      minimumPaymentPct: { label: "최소 납입 비율 (%)", help: "최소 납입액 계산에 사용되는 잔액 비율, 보통 1–3%." },
    },
    outputs: {
      monthsToPayoff: { label: "상환 완료까지 걸리는 월 수", help: "잔액이 0이 될 때까지 걸리는 개월 수." },
      totalPaid: { label: "총 납입액", help: "이자 포함 모든 납입금의 합계." },
      totalInterest: { label: "총 이자", help: "원래 잔액을 초과해 납입한 이자." },
      interestSavings: { label: "이자 절약액", help: "최소 납입만 했을 때보다 절약한 이자." },
    },
    options: {
      paymentMode: { minimum: "최소 납입", fixed: "고정 납입" },
    },
    errors: {
      paymentTooLow: "고정 납입액은 월 이자보다 높아야 합니다.",
      balanceOutOfRange: "잔액은 1~500,000 사이여야 합니다.",
    },
    faq: [
      {
        q: "최소 납입으로 상환이 왜 오래 걸리나요?",
        a: "최소 납입액은 잔액이 줄면 함께 줄어들어, 대부분이 이자로 나가기 때문입니다.",
      },
      {
        q: "최소 납입보다 더 납입해야 하나요?",
        a: "네. 매달 5~10만원만 더 납입해도 수백만원의 이자를 절약할 수 있습니다.",
      },
    ],
  },

  hi: {
    title: "क्रेडिट कार्ड भुगतान कैलकुलेटर",
    short: "जानें कि आपका क्रेडिट कार्ड बकाया चुकाने में कितना समय और कितना ब्याज लगेगा।",
    description:
      "मुफ़्त क्रेडिट कार्ड भुगतान कैलकुलेटर। अपना बैलेंस, APR और मासिक भुगतान दर्ज करें और भुगतान अवधि, कुल ब्याज और मासिक भुगतान योजना देखें।",
    keywords: [
      "क्रेडिट कार्ड भुगतान कैलकुलेटर",
      "क्रेडिट कार्ड कितने महीने में चुकाएं",
      "क्रेडिट कार्ड ब्याज गणना",
      "न्यूनतम भुगतान कैलकुलेटर",
      "कर्ज चुकाने का कैलकुलेटर",
      "वार्षिक ब्याज दर",
      "भुगतान योजना",
    ],
    inputs: {
      balance: { label: "वर्तमान बैलेंस", help: "आपका वर्तमान क्रेडिट कार्ड बैलेंस।" },
      apr: { label: "वार्षिक प्रतिशत दर (APR)", help: "आपके कार्ड की वार्षिक ब्याज दर।" },
      paymentMode: { label: "भुगतान रणनीति", help: "न्यूनतम भुगतान या निश्चित मासिक राशि।" },
      fixedPayment: { label: "निश्चित मासिक भुगतान", help: "हर महीने भुगतान की जाने वाली निश्चित राशि।" },
      minimumPaymentPct: { label: "न्यूनतम भुगतान %", help: "न्यूनतम भुगतान गणना के लिए बैलेंस का प्रतिशत, आमतौर पर 1–3%।" },
    },
    outputs: {
      monthsToPayoff: { label: "भुगतान पूरा होने तक महीने", help: "बैलेंस शून्य होने तक के महीनों की संख्या।" },
      totalPaid: { label: "कुल भुगतान", help: "ब्याज सहित सभी भुगतानों का योग।" },
      totalInterest: { label: "कुल ब्याज", help: "मूल बैलेंस से अधिक चुकाया गया ब्याज।" },
      interestSavings: { label: "ब्याज बचत", help: "केवल न्यूनतम भुगतान की तुलना में बचाया गया ब्याज।" },
    },
    options: {
      paymentMode: { minimum: "न्यूनतम भुगतान", fixed: "निश्चित भुगतान" },
    },
    errors: {
      paymentTooLow: "निश्चित भुगतान मासिक ब्याज शुल्क से अधिक होना चाहिए।",
      balanceOutOfRange: "बैलेंस 1 से 500,000 के बीच होना चाहिए।",
    },
    faq: [
      {
        q: "न्यूनतम भुगतान से इतना समय क्यों लगता है?",
        a: "न्यूनतम भुगतान बैलेंस के साथ घटता है, जिससे अधिकांश राशि ब्याज में जाती है न कि मूलधन में।",
      },
      {
        q: "क्या न्यूनतम से अधिक भुगतान करना चाहिए?",
        a: "हां। हर महीने ₹500–1000 अतिरिक्त भुगतान हजारों रुपये ब्याज बचा सकता है।",
      },
    ],
  },
};

export default i18n;
