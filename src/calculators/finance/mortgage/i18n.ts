import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Mortgage Calculator",
    short: "Calculate your monthly mortgage payment, total interest, and full amortization schedule.",
    description:
      "Free mortgage calculator using the standard annuity formula. Enter your loan amount, interest rate, and term to get your monthly payment, total cost, and a complete amortization table.",
    keywords: [
      "mortgage calculator",
      "monthly mortgage payment",
      "home loan calculator",
      "amortization schedule",
      "mortgage interest",
      "housing loan",
      "PITI calculator",
    ],
    inputs: {
      loanAmount: { label: "Home Price", help: "Total purchase price of the property." },
      downPayment: { label: "Down Payment", help: "Amount paid upfront; reduces the loan principal." },
      annualRate: { label: "Annual Interest Rate (%)", help: "The yearly interest rate offered by your lender." },
      termYears: { label: "Loan Term (years)", help: "Number of years over which you will repay the loan." },
    },
    outputs: {
      monthlyPayment: { label: "Monthly Payment", help: "Fixed amount paid each month (principal + interest)." },
      totalPayment: { label: "Total Payment", help: "Sum of all monthly payments over the full term." },
      totalInterest: { label: "Total Interest", help: "Total interest paid over the life of the loan." },
      principalAmount: { label: "Loan Principal", help: "Home price minus down payment — the amount actually borrowed." },
      amortizationSchedule: { label: "Amortization Schedule", help: "Month-by-month breakdown of payment, principal, interest, and remaining balance." },
    },
    errors: {
      downPaymentExceedsLoan: "Down payment cannot exceed the home price.",
      loanAmountRange: "Home price must be between $1,000 and $10,000,000.",
      rateRange: "Annual rate must be between 0% and 30%.",
      termRange: "Loan term must be between 1 and 30 years.",
    },
    faq: [
      {
        q: "What is included in a monthly mortgage payment?",
        a: "This calculator computes principal and interest only. Your actual monthly payment will also include property taxes, homeowner's insurance, and possibly private mortgage insurance (PMI) if your down payment is less than 20%.",
      },
      {
        q: "How does the down payment affect my mortgage?",
        a: "A larger down payment reduces your loan principal, which lowers your monthly payment and total interest paid. A 20% down payment also eliminates the requirement for PMI in most cases.",
      },
      {
        q: "What is the difference between a 15-year and 30-year mortgage?",
        a: "A 15-year mortgage has higher monthly payments but significantly less total interest. A 30-year mortgage has lower monthly payments but you pay more interest over the life of the loan.",
      },
      {
        q: "What is an amortization schedule?",
        a: "An amortization schedule is a table showing how each monthly payment is split between principal and interest over the life of the loan. In early payments, most goes to interest; over time, more goes to principal.",
      },
    ],
  },
  pt: {
    title: "Mortgage Calculator",
    short: "Calculate your monthly mortgage payment, total interest, and full amortization schedule.",
    description:
      "Free mortgage calculator using the standard annuity formula. Enter your loan amount, interest rate, and term to get your monthly payment, total cost, and a complete amortization table.",
    keywords: [
      "mortgage calculator",
      "monthly mortgage payment",
      "home loan calculator",
      "amortization schedule",
      "mortgage interest",
      "housing loan",
      "PITI calculator",
    ],
    inputs: {
      loanAmount: { label: "Home Price", help: "Total purchase price of the property." },
      downPayment: { label: "Down Payment", help: "Amount paid upfront; reduces the loan principal." },
      annualRate: { label: "Annual Interest Rate (%)", help: "The yearly interest rate offered by your lender." },
      termYears: { label: "Loan Term (years)", help: "Number of years over which you will repay the loan." },
    },
    outputs: {
      monthlyPayment: { label: "Monthly Payment", help: "Fixed amount paid each month (principal + interest)." },
      totalPayment: { label: "Total Payment", help: "Sum of all monthly payments over the full term." },
      totalInterest: { label: "Total Interest", help: "Total interest paid over the life of the loan." },
      principalAmount: { label: "Loan Principal", help: "Home price minus down payment — the amount actually borrowed." },
      amortizationSchedule: { label: "Amortization Schedule", help: "Month-by-month breakdown of payment, principal, interest, and remaining balance." },
    },
    errors: {
      downPaymentExceedsLoan: "Down payment cannot exceed the home price.",
      loanAmountRange: "Home price must be between $1,000 and $10,000,000.",
      rateRange: "Annual rate must be between 0% and 30%.",
      termRange: "Loan term must be between 1 and 30 years.",
    },
    faq: [
      {
        q: "What is included in a monthly mortgage payment?",
        a: "This calculator computes principal and interest only. Your actual monthly payment will also include property taxes, homeowner's insurance, and possibly private mortgage insurance (PMI) if your down payment is less than 20%.",
      },
      {
        q: "How does the down payment affect my mortgage?",
        a: "A larger down payment reduces your loan principal, which lowers your monthly payment and total interest paid. A 20% down payment also eliminates the requirement for PMI in most cases.",
      },
      {
        q: "What is the difference between a 15-year and 30-year mortgage?",
        a: "A 15-year mortgage has higher monthly payments but significantly less total interest. A 30-year mortgage has lower monthly payments but you pay more interest over the life of the loan.",
      },
      {
        q: "What is an amortization schedule?",
        a: "An amortization schedule is a table showing how each monthly payment is split between principal and interest over the life of the loan. In early payments, most goes to interest; over time, more goes to principal.",
      },
    ],
  },
  id: {
    title: "Mortgage Calculator",
    short: "Calculate your monthly mortgage payment, total interest, and full amortization schedule.",
    description:
      "Free mortgage calculator using the standard annuity formula. Enter your loan amount, interest rate, and term to get your monthly payment, total cost, and a complete amortization table.",
    keywords: [
      "mortgage calculator",
      "monthly mortgage payment",
      "home loan calculator",
      "amortization schedule",
      "mortgage interest",
      "housing loan",
      "PITI calculator",
    ],
    inputs: {
      loanAmount: { label: "Home Price", help: "Total purchase price of the property." },
      downPayment: { label: "Down Payment", help: "Amount paid upfront; reduces the loan principal." },
      annualRate: { label: "Annual Interest Rate (%)", help: "The yearly interest rate offered by your lender." },
      termYears: { label: "Loan Term (years)", help: "Number of years over which you will repay the loan." },
    },
    outputs: {
      monthlyPayment: { label: "Monthly Payment", help: "Fixed amount paid each month (principal + interest)." },
      totalPayment: { label: "Total Payment", help: "Sum of all monthly payments over the full term." },
      totalInterest: { label: "Total Interest", help: "Total interest paid over the life of the loan." },
      principalAmount: { label: "Loan Principal", help: "Home price minus down payment — the amount actually borrowed." },
      amortizationSchedule: { label: "Amortization Schedule", help: "Month-by-month breakdown of payment, principal, interest, and remaining balance." },
    },
    errors: {
      downPaymentExceedsLoan: "Down payment cannot exceed the home price.",
      loanAmountRange: "Home price must be between $1,000 and $10,000,000.",
      rateRange: "Annual rate must be between 0% and 30%.",
      termRange: "Loan term must be between 1 and 30 years.",
    },
    faq: [
      {
        q: "What is included in a monthly mortgage payment?",
        a: "This calculator computes principal and interest only. Your actual monthly payment will also include property taxes, homeowner's insurance, and possibly private mortgage insurance (PMI) if your down payment is less than 20%.",
      },
      {
        q: "How does the down payment affect my mortgage?",
        a: "A larger down payment reduces your loan principal, which lowers your monthly payment and total interest paid. A 20% down payment also eliminates the requirement for PMI in most cases.",
      },
      {
        q: "What is the difference between a 15-year and 30-year mortgage?",
        a: "A 15-year mortgage has higher monthly payments but significantly less total interest. A 30-year mortgage has lower monthly payments but you pay more interest over the life of the loan.",
      },
      {
        q: "What is an amortization schedule?",
        a: "An amortization schedule is a table showing how each monthly payment is split between principal and interest over the life of the loan. In early payments, most goes to interest; over time, more goes to principal.",
      },
    ],
  },


  tr: {
    title: "Konut Kredisi Hesaplayıcı",
    short: "Aylık konut kredisi taksitinizi, toplam faizi ve itfa planını hesaplayın.",
    description:
      "Standart anüite formülü kullanan ücretsiz konut kredisi hesaplayıcı. Kredi tutarı, faiz oranı ve vade girerek aylık taksitinizi, toplam maliyetinizi ve tam bir itfa tablosunu görün.",
    keywords: [
      "konut kredisi hesaplayıcı",
      "mortgage hesaplama",
      "aylık taksit hesaplama",
      "ev kredisi",
      "itfa planı",
      "konut finansmanı",
      "faiz hesaplama",
    ],
    inputs: {
      loanAmount: { label: "Ev Fiyatı", help: "Mülkün toplam satın alma bedeli." },
      downPayment: { label: "Peşinat", help: "Başlangıçta ödenen tutar; kredi anapara miktarını azaltır." },
      annualRate: { label: "Yıllık Faiz Oranı (%)", help: "Bankanızın sunduğu yıllık faiz oranı." },
      termYears: { label: "Kredi Vadesi (yıl)", help: "Krediyi geri ödeyeceğiniz yıl sayısı." },
    },
    outputs: {
      monthlyPayment: { label: "Aylık Taksit", help: "Her ay ödenen sabit tutar (anapara + faiz)." },
      totalPayment: { label: "Toplam Ödeme", help: "Vade boyunca yapılan tüm aylık ödemelerin toplamı." },
      totalInterest: { label: "Toplam Faiz", help: "Kredi süresince ödenen toplam faiz tutarı." },
      principalAmount: { label: "Kredi Anaparası", help: "Ev fiyatından peşinat düşüldükten sonra kalan, gerçekte borçlanılan tutar." },
      amortizationSchedule: { label: "İtfa Planı", help: "Aylık ödeme, anapara, faiz ve kalan bakiyenin ay ay dökümü." },
    },
    errors: {
      downPaymentExceedsLoan: "Peşinat, ev fiyatını aşamaz.",
      loanAmountRange: "Ev fiyatı 1.000 ile 10.000.000 arasında olmalıdır.",
      rateRange: "Yıllık faiz oranı %0 ile %30 arasında olmalıdır.",
      termRange: "Kredi vadesi 1 ile 30 yıl arasında olmalıdır.",
    },
    faq: [
      {
        q: "Aylık konut kredisi taksidine neler dahildir?",
        a: "Bu hesaplayıcı yalnızca anapara ve faizi hesaplar. Gerçek aylık ödemeniz ayrıca emlak vergisi, konut sigortası ve peşinatınız %20'nin altındaysa özel ipotek sigortasını (PMI) da içerebilir.",
      },
      {
        q: "Peşinat miktarı krediyi nasıl etkiler?",
        a: "Daha yüksek peşinat kredi anapara tutarını düşürür, bu da aylık taksiti ve toplam faizi azaltır. %20 peşinat çoğu durumda PMI zorunluluğunu da ortadan kaldırır.",
      },
      {
        q: "İtfa planı nedir?",
        a: "İtfa planı, her aylık ödemenin kredi vadesi boyunca anapara ve faiz olarak nasıl bölündüğünü gösteren bir tablodur. İlk ödemelerde büyük pay faize gider; zamanla daha büyük pay anaparaya aktarılır.",
      },
    ],
  },

  de: {
    title: "Hypothekenrechner",
    short: "Berechnen Sie Ihre monatliche Hypothekenrate, Gesamtzinsen und den vollständigen Tilgungsplan.",
    description:
      "Kostenloser Hypothekenrechner mit der Standard-Annuitätenformel. Geben Sie Darlehensbetrag, Zinssatz und Laufzeit ein und erhalten Sie Ihre Monatsrate und einen vollständigen Tilgungsplan.",
    keywords: [
      "Hypothekenrechner",
      "Baufinanzierung",
      "Monatsrate berechnen",
      "Immobilienkredit",
      "Tilgungsplan",
      "Hypothek",
      "Wohnkredit",
    ],
    inputs: {
      loanAmount: { label: "Kaufpreis", help: "Gesamtkaufpreis der Immobilie." },
      downPayment: { label: "Eigenkapital / Anzahlung", help: "Sofort gezahlter Betrag; reduziert den Kreditbetrag." },
      annualRate: { label: "Jährlicher Zinssatz (%)", help: "Der von Ihrer Bank angebotene Jahreszinssatz." },
      termYears: { label: "Laufzeit (Jahre)", help: "Anzahl der Jahre, über die Sie das Darlehen zurückzahlen." },
    },
    outputs: {
      monthlyPayment: { label: "Monatliche Rate", help: "Monatlich fällige feste Rate (Tilgung + Zinsen)." },
      totalPayment: { label: "Gesamtzahlung", help: "Summe aller Monatszahlungen über die gesamte Laufzeit." },
      totalInterest: { label: "Gesamtzinsen", help: "Über die gesamte Laufzeit gezahlte Zinsen." },
      principalAmount: { label: "Kreditbetrag", help: "Kaufpreis abzüglich Eigenkapital — der tatsächlich geliehene Betrag." },
      amortizationSchedule: { label: "Tilgungsplan", help: "Monatliche Aufschlüsselung von Rate, Tilgung, Zinsen und Restschuld." },
    },
    errors: {
      downPaymentExceedsLoan: "Das Eigenkapital darf den Kaufpreis nicht überschreiten.",
      loanAmountRange: "Der Kaufpreis muss zwischen 1.000 und 10.000.000 liegen.",
      rateRange: "Der Zinssatz muss zwischen 0 % und 30 % liegen.",
      termRange: "Die Laufzeit muss zwischen 1 und 30 Jahren liegen.",
    },
    faq: [
      {
        q: "Was ist ein Tilgungsplan?",
        a: "Ein Tilgungsplan zeigt monatlich auf, wie viel Ihrer Rate auf Zinsen und wie viel auf die Tilgung des Darlehens entfällt. In den ersten Jahren überwiegt der Zinsanteil; mit der Zeit steigt der Tilgungsanteil.",
      },
      {
        q: "Wie wirkt sich das Eigenkapital auf die Monatsrate aus?",
        a: "Ein höheres Eigenkapital reduziert den Kreditbetrag, was sowohl die Monatsrate als auch die Gesamtzinsen senkt.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Prêt Immobilier",
    short: "Calculez votre mensualité, les intérêts totaux et votre tableau d'amortissement.",
    description:
      "Calculateur de prêt immobilier gratuit utilisant la formule d'annuité standard. Entrez le montant emprunté, le taux et la durée pour obtenir vos mensualités et un tableau d'amortissement complet.",
    keywords: [
      "calculateur prêt immobilier",
      "mensualité crédit immobilier",
      "simulation hypothèque",
      "tableau amortissement",
      "taux immobilier",
      "crédit immobilier",
      "emprunt immobilier",
    ],
    inputs: {
      loanAmount: { label: "Prix du bien", help: "Prix d'achat total du bien immobilier." },
      downPayment: { label: "Apport personnel", help: "Somme versée en avance; réduit le capital emprunté." },
      annualRate: { label: "Taux annuel (%)", help: "Le taux d'intérêt annuel proposé par votre banque." },
      termYears: { label: "Durée (années)", help: "Nombre d'années sur lequel vous remboursez le prêt." },
    },
    outputs: {
      monthlyPayment: { label: "Mensualité", help: "Montant mensuel fixe (capital + intérêts)." },
      totalPayment: { label: "Coût total", help: "Somme de toutes les mensualités sur toute la durée." },
      totalInterest: { label: "Intérêts totaux", help: "Total des intérêts payés sur toute la durée du prêt." },
      principalAmount: { label: "Capital emprunté", help: "Prix du bien moins l'apport — le montant réellement emprunté." },
      amortizationSchedule: { label: "Tableau d'amortissement", help: "Détail mensuel de la mensualité, du capital, des intérêts et du solde restant." },
    },
    errors: {
      downPaymentExceedsLoan: "L'apport ne peut pas dépasser le prix du bien.",
      loanAmountRange: "Le prix du bien doit être compris entre 1 000 et 10 000 000.",
      rateRange: "Le taux annuel doit être compris entre 0 % et 30 %.",
      termRange: "La durée doit être comprise entre 1 et 30 ans.",
    },
    faq: [
      {
        q: "Qu'est-ce qu'un tableau d'amortissement ?",
        a: "C'est un tableau indiquant, pour chaque mois, la part de la mensualité consacrée aux intérêts et celle consacrée au remboursement du capital. En début de prêt, la part d'intérêts est plus élevée ; elle diminue progressivement au profit du capital.",
      },
      {
        q: "Comment l'apport personnel influence-t-il le prêt ?",
        a: "Un apport plus élevé réduit le capital emprunté, ce qui diminue la mensualité et le coût total des intérêts.",
      },
    ],
  },

  es: {
    title: "Calculadora de Hipoteca",
    short: "Calcula tu cuota mensual, el interés total y el cuadro de amortización completo.",
    description:
      "Calculadora de hipoteca gratuita con la fórmula de anualidad estándar. Introduce el importe del préstamo, el tipo de interés y el plazo para obtener tu cuota mensual y un cuadro de amortización completo.",
    keywords: [
      "calculadora hipoteca",
      "cuota mensual hipoteca",
      "simulador préstamo hipotecario",
      "cuadro amortización",
      "interés hipotecario",
      "préstamo vivienda",
      "financiación inmobiliaria",
    ],
    inputs: {
      loanAmount: { label: "Precio del inmueble", help: "Precio total de compra de la propiedad." },
      downPayment: { label: "Entrada", help: "Cantidad pagada por adelantado; reduce el capital del préstamo." },
      annualRate: { label: "Tipo de interés anual (%)", help: "El tipo de interés anual ofrecido por tu entidad financiera." },
      termYears: { label: "Plazo (años)", help: "Número de años durante los cuales amortizarás el préstamo." },
    },
    outputs: {
      monthlyPayment: { label: "Cuota mensual", help: "Importe fijo a pagar cada mes (capital + intereses)." },
      totalPayment: { label: "Coste total", help: "Suma de todas las cuotas durante el plazo completo." },
      totalInterest: { label: "Intereses totales", help: "Total de intereses pagados durante la vida del préstamo." },
      principalAmount: { label: "Capital prestado", help: "Precio menos entrada — el importe realmente financiado." },
      amortizationSchedule: { label: "Cuadro de amortización", help: "Desglose mensual de cuota, capital, intereses y saldo pendiente." },
    },
    errors: {
      downPaymentExceedsLoan: "La entrada no puede superar el precio del inmueble.",
      loanAmountRange: "El precio debe estar entre 1.000 y 10.000.000.",
      rateRange: "El tipo anual debe estar entre el 0 % y el 30 %.",
      termRange: "El plazo debe ser de 1 a 30 años.",
    },
    faq: [
      {
        q: "¿Qué es un cuadro de amortización?",
        a: "Es una tabla que muestra cómo se divide cada cuota mensual entre capital e intereses a lo largo de la vida del préstamo. Al principio, la mayor parte va a intereses; con el tiempo, más va a amortizar capital.",
      },
      {
        q: "¿Cómo afecta la entrada a la hipoteca?",
        a: "Una entrada mayor reduce el capital prestado, lo que disminuye la cuota mensual y el total de intereses pagados.",
      },
    ],
  },

  it: {
    title: "Calcolatore Mutuo",
    short: "Calcola la rata mensile del mutuo, gli interessi totali e il piano di ammortamento.",
    description:
      "Calcolatore mutuo gratuito con la formula dell'annualità standard. Inserisci l'importo del prestito, il tasso e la durata per ottenere la rata mensile e un piano di ammortamento completo.",
    keywords: [
      "calcolatore mutuo",
      "rata mensile mutuo",
      "simulatore mutuo",
      "piano ammortamento",
      "tasso mutuo",
      "prestito casa",
      "finanziamento immobiliare",
    ],
    inputs: {
      loanAmount: { label: "Prezzo dell'immobile", help: "Prezzo totale di acquisto dell'immobile." },
      downPayment: { label: "Acconto", help: "Importo pagato in anticipo; riduce il capitale del prestito." },
      annualRate: { label: "Tasso annuo (%)", help: "Il tasso d'interesse annuo offerto dalla tua banca." },
      termYears: { label: "Durata (anni)", help: "Numero di anni in cui rimborserai il mutuo." },
    },
    outputs: {
      monthlyPayment: { label: "Rata mensile", help: "Importo fisso pagato ogni mese (capitale + interessi)." },
      totalPayment: { label: "Costo totale", help: "Somma di tutte le rate per l'intera durata." },
      totalInterest: { label: "Interessi totali", help: "Interessi complessivi pagati nel corso del mutuo." },
      principalAmount: { label: "Capitale finanziato", help: "Prezzo meno acconto — l'importo effettivamente preso in prestito." },
      amortizationSchedule: { label: "Piano di ammortamento", help: "Dettaglio mensile di rata, capitale, interessi e saldo residuo." },
    },
    errors: {
      downPaymentExceedsLoan: "L'acconto non può superare il prezzo dell'immobile.",
      loanAmountRange: "Il prezzo deve essere compreso tra 1.000 e 10.000.000.",
      rateRange: "Il tasso annuo deve essere compreso tra 0% e 30%.",
      termRange: "La durata deve essere compresa tra 1 e 30 anni.",
    },
    faq: [
      {
        q: "Che cos'è un piano di ammortamento?",
        a: "È una tabella che mostra come ogni rata mensile viene suddivisa tra capitale e interessi nel corso del mutuo. All'inizio la quota interessi è maggiore; col tempo la quota capitale aumenta progressivamente.",
      },
      {
        q: "Come influisce l'acconto sul mutuo?",
        a: "Un acconto maggiore riduce il capitale finanziato, abbassando la rata mensile e il totale degli interessi.",
      },
    ],
  },

  ar: {
    title: "حاسبة الرهن العقاري",
    short: "احسب قسطك الشهري وإجمالي الفوائد وجدول السداد الكامل لقرضك العقاري.",
    description:
      "حاسبة رهن عقاري مجانية تستخدم معادلة الإيرادات السنوية القياسية. أدخل مبلغ القرض والفائدة والمدة للحصول على القسط الشهري والتكلفة الإجمالية وجدول الإطفاء.",
    keywords: [
      "حاسبة رهن عقاري",
      "قسط شهري عقاري",
      "تمويل عقاري",
      "جدول إطفاء",
      "فائدة عقارية",
      "قرض سكني",
      "حساب الرهن",
    ],
    inputs: {
      loanAmount: { label: "سعر العقار", help: "إجمالي سعر شراء العقار." },
      downPayment: { label: "الدفعة المقدمة", help: "المبلغ المدفوع مسبقاً؛ يُقلل من رأس مال القرض." },
      annualRate: { label: "معدل الفائدة السنوي (%)", help: "معدل الفائدة السنوي الذي تقدمه جهة الإقراض." },
      termYears: { label: "مدة القرض (سنوات)", help: "عدد السنوات التي ستسدد خلالها القرض." },
    },
    outputs: {
      monthlyPayment: { label: "القسط الشهري", help: "المبلغ الثابت المدفوع كل شهر (رأس المال + الفائدة)." },
      totalPayment: { label: "إجمالي المدفوعات", help: "مجموع جميع الأقساط الشهرية طوال مدة القرض." },
      totalInterest: { label: "إجمالي الفوائد", help: "مجموع الفوائد المدفوعة على مدار حياة القرض." },
      principalAmount: { label: "رأس المال المقترض", help: "سعر العقار ناقص الدفعة المقدمة — المبلغ الفعلي المقترض." },
      amortizationSchedule: { label: "جدول الإطفاء", help: "تفصيل شهري للقسط والأصل والفائدة والرصيد المتبقي." },
    },
    errors: {
      downPaymentExceedsLoan: "لا يمكن أن تتجاوز الدفعة المقدمة سعر العقار.",
      loanAmountRange: "يجب أن يكون سعر العقار بين 1,000 و10,000,000.",
      rateRange: "يجب أن يكون معدل الفائدة السنوي بين 0% و30%.",
      termRange: "يجب أن تكون مدة القرض بين سنة واحدة و30 سنة.",
    },
    faq: [
      {
        q: "ما هو جدول الإطفاء؟",
        a: "جدول الإطفاء هو جدول يوضح كيف يُقسَّم كل قسط شهري بين رأس المال والفوائد على مدار حياة القرض. في البداية تذهب معظم الدفعة للفوائد، وتزداد حصة رأس المال تدريجياً مع مرور الوقت.",
      },
      {
        q: "كيف تؤثر الدفعة المقدمة على الرهن العقاري؟",
        a: "دفعة مقدمة أكبر تعني مبلغاً مقترضاً أقل، مما يُخفض القسط الشهري وإجمالي الفوائد المدفوعة.",
      },
    ],
  },

  ru: {
    title: "Ипотечный калькулятор",
    short: "Рассчитайте ежемесячный платёж по ипотеке, общую сумму процентов и график погашения.",
    description:
      "Бесплатный ипотечный калькулятор по стандартной аннуитетной формуле. Введите сумму кредита, ставку и срок — получите ежемесячный платёж и полный график погашения.",
    keywords: [
      "ипотечный калькулятор",
      "ежемесячный платёж по ипотеке",
      "ипотека расчёт",
      "график погашения",
      "ипотека",
      "жилищный кредит",
      "аннуитетный платёж",
    ],
    inputs: {
      loanAmount: { label: "Стоимость недвижимости", help: "Полная стоимость приобретаемой недвижимости." },
      downPayment: { label: "Первоначальный взнос", help: "Сумма, уплачиваемая сразу; снижает основной долг." },
      annualRate: { label: "Годовая ставка (%)", help: "Годовая процентная ставка, предложенная банком." },
      termYears: { label: "Срок кредита (лет)", help: "Количество лет, на которые берётся ипотека." },
    },
    outputs: {
      monthlyPayment: { label: "Ежемесячный платёж", help: "Фиксированная сумма, выплачиваемая каждый месяц (долг + проценты)." },
      totalPayment: { label: "Общая сумма выплат", help: "Сумма всех ежемесячных платежей за весь срок." },
      totalInterest: { label: "Сумма переплаты", help: "Общая сумма процентов, уплачиваемых за весь срок кредита." },
      principalAmount: { label: "Сумма кредита", help: "Стоимость недвижимости минус первоначальный взнос — фактически занятая сумма." },
      amortizationSchedule: { label: "График погашения", help: "Ежемесячная разбивка платежа, основного долга, процентов и остатка." },
    },
    errors: {
      downPaymentExceedsLoan: "Первоначальный взнос не может превышать стоимость недвижимости.",
      loanAmountRange: "Стоимость недвижимости должна быть от 1 000 до 10 000 000.",
      rateRange: "Годовая ставка должна быть от 0 % до 30 %.",
      termRange: "Срок кредита должен быть от 1 до 30 лет.",
    },
    faq: [
      {
        q: "Что такое аннуитетный платёж?",
        a: "Аннуитетный платёж — это фиксированная ежемесячная сумма, включающая часть основного долга и начисленные проценты. В начале срока большая доля идёт на проценты, со временем доля основного долга растёт.",
      },
      {
        q: "Как первоначальный взнос влияет на ипотеку?",
        a: "Чем больше первоначальный взнос, тем меньше основной долг, а значит, ниже ежемесячный платёж и общая переплата по кредиту.",
      },
    ],
  },

  zh: {
    title: "房贷计算器",
    short: "计算您的每月房贷还款额、总利息及完整还款计划。",
    description:
      "免费房贷计算器，采用标准年金公式。输入贷款金额、利率和期限，即可获得每月还款额、总费用及完整的还款计划表。",
    keywords: [
      "房贷计算器",
      "每月还款额",
      "按揭计算",
      "还款计划表",
      "房屋贷款",
      "贷款利率",
      "抵押贷款",
    ],
    inputs: {
      loanAmount: { label: "房屋价格", help: "房产的总购买价格。" },
      downPayment: { label: "首付款", help: "预先支付的金额，用于减少贷款本金。" },
      annualRate: { label: "年利率 (%)", help: "贷款机构提供的年利率。" },
      termYears: { label: "贷款期限（年）", help: "偿还贷款所需的年数。" },
    },
    outputs: {
      monthlyPayment: { label: "月还款额", help: "每月支付的固定金额（本金 + 利息）。" },
      totalPayment: { label: "还款总额", help: "整个贷款期内所有月还款额的总和。" },
      totalInterest: { label: "总利息", help: "贷款期内支付的利息总额。" },
      principalAmount: { label: "贷款本金", help: "房价减去首付款后实际借入的金额。" },
      amortizationSchedule: { label: "还款计划表", help: "每月还款额、本金、利息及剩余余额的详细分解。" },
    },
    errors: {
      downPaymentExceedsLoan: "首付款不能超过房屋价格。",
      loanAmountRange: "房屋价格必须在 1,000 至 10,000,000 之间。",
      rateRange: "年利率必须在 0% 至 30% 之间。",
      termRange: "贷款期限必须在 1 至 30 年之间。",
    },
    faq: [
      {
        q: "什么是还款计划表？",
        a: "还款计划表是显示每月还款额如何在贷款期内分配给本金和利息的表格。早期还款中大部分用于支付利息，随着时间推移，本金比例逐渐增加。",
      },
      {
        q: "首付款如何影响房贷？",
        a: "首付款越高，贷款本金越低，从而降低月还款额和总利息支出。",
      },
    ],
  },

  ja: {
    title: "住宅ローン計算機",
    short: "毎月の住宅ローン返済額、総利息、および返済計画表を計算します。",
    description:
      "標準的な元利均等返済方式を使用した無料の住宅ローン計算機です。ローン金額、金利、返済期間を入力するだけで、毎月の返済額と詳細な返済計画表を確認できます。",
    keywords: [
      "住宅ローン計算機",
      "毎月の返済額",
      "ローンシミュレーター",
      "返済計画表",
      "住宅ローン金利",
      "モーゲージ計算",
      "元利均等返済",
    ],
    inputs: {
      loanAmount: { label: "物件価格", help: "購入する不動産の総額。" },
      downPayment: { label: "頭金", help: "最初に支払う金額。ローン元本を減らします。" },
      annualRate: { label: "年利 (%)", help: "金融機関が提示する年間の利率。" },
      termYears: { label: "返済期間（年）", help: "ローンを返済する年数。" },
    },
    outputs: {
      monthlyPayment: { label: "毎月の返済額", help: "毎月支払う固定額（元本 + 利息）。" },
      totalPayment: { label: "総返済額", help: "全返済期間における月々の返済額の合計。" },
      totalInterest: { label: "総支払利息", help: "ローン期間全体で支払う利息の合計。" },
      principalAmount: { label: "借入元本", help: "物件価格から頭金を引いた実際の借入金額。" },
      amortizationSchedule: { label: "返済計画表", help: "毎月の返済額・元本・利息・残高の明細。" },
    },
    errors: {
      downPaymentExceedsLoan: "頭金は物件価格を超えることはできません。",
      loanAmountRange: "物件価格は 1,000 ～ 10,000,000 の範囲で入力してください。",
      rateRange: "年利は 0% ～ 30% の範囲で入力してください。",
      termRange: "返済期間は 1 ～ 30 年の範囲で入力してください。",
    },
    faq: [
      {
        q: "返済計画表とは何ですか？",
        a: "返済計画表は、毎月の返済額がどのように元本と利息に分配されるかを示す表です。返済初期は利息の割合が高く、返済が進むにつれて元本の割合が増えていきます。",
      },
      {
        q: "頭金はローンにどう影響しますか？",
        a: "頭金が多いほど借入元本が減り、毎月の返済額と総支払利息が低くなります。",
      },
    ],
  },

  ko: {
    title: "주택담보대출 계산기",
    short: "월 상환액, 총 이자 및 원리금 상환 스케줄을 계산하세요.",
    description:
      "표준 원리금균등상환 공식을 사용한 무료 주택담보대출 계산기입니다. 대출 금액, 금리, 대출 기간을 입력하면 월 상환액과 상세한 상환 스케줄을 확인할 수 있습니다.",
    keywords: [
      "주택담보대출 계산기",
      "월 상환액 계산",
      "모기지 계산기",
      "원리금 상환표",
      "부동산 대출",
      "주택 융자",
      "이자 계산",
    ],
    inputs: {
      loanAmount: { label: "주택 가격", help: "부동산의 총 구입 가격." },
      downPayment: { label: "계약금", help: "미리 납부하는 금액으로, 대출 원금을 줄입니다." },
      annualRate: { label: "연이율 (%)", help: "금융기관이 제시하는 연간 이자율." },
      termYears: { label: "대출 기간 (년)", help: "대출을 상환하는 데 걸리는 연수." },
    },
    outputs: {
      monthlyPayment: { label: "월 상환액", help: "매달 납부하는 고정 금액 (원금 + 이자)." },
      totalPayment: { label: "총 상환액", help: "전체 대출 기간 동안 지불하는 월 상환액의 합계." },
      totalInterest: { label: "총 이자", help: "대출 기간 동안 납부하는 이자 총액." },
      principalAmount: { label: "대출 원금", help: "주택 가격에서 계약금을 뺀 실제 대출 금액." },
      amortizationSchedule: { label: "원리금 상환 스케줄", help: "월별 상환액, 원금, 이자 및 잔액의 세부 내역." },
    },
    errors: {
      downPaymentExceedsLoan: "계약금은 주택 가격을 초과할 수 없습니다.",
      loanAmountRange: "주택 가격은 1,000 ~ 10,000,000 사이여야 합니다.",
      rateRange: "연이율은 0% ~ 30% 사이여야 합니다.",
      termRange: "대출 기간은 1 ~ 30년 사이여야 합니다.",
    },
    faq: [
      {
        q: "원리금 상환 스케줄이란 무엇인가요?",
        a: "원리금 상환 스케줄은 각 월 상환액이 대출 기간 동안 원금과 이자로 어떻게 나뉘는지 보여주는 표입니다. 초기에는 이자 비율이 높고, 시간이 지남에 따라 원금 비율이 높아집니다.",
      },
      {
        q: "계약금은 대출에 어떤 영향을 미치나요?",
        a: "계약금이 클수록 대출 원금이 줄어들어 월 상환액과 총 이자 부담이 감소합니다.",
      },
    ],
  },

  hi: {
    title: "होम लोन कैलकुलेटर",
    short: "अपनी मासिक EMI, कुल ब्याज और पूरा एमोर्टाइजेशन शेड्यूल जानें।",
    description:
      "मानक वार्षिकी सूत्र का उपयोग करने वाला मुफ़्त होम लोन कैलकुलेटर। ऋण राशि, ब्याज दर और अवधि दर्ज करें और मासिक EMI, कुल लागत और पूर्ण एमोर्टाइजेशन तालिका देखें।",
    keywords: [
      "होम लोन कैलकुलेटर",
      "EMI कैलकुलेटर",
      "मासिक किस्त",
      "एमोर्टाइजेशन शेड्यूल",
      "गृह ऋण",
      "ब्याज गणना",
      "मॉर्टगेज कैलकुलेटर",
    ],
    inputs: {
      loanAmount: { label: "संपत्ति मूल्य", help: "संपत्ति की कुल खरीद कीमत।" },
      downPayment: { label: "डाउन पेमेंट", help: "पहले से भुगतान की गई राशि; ऋण मूलधन को कम करती है।" },
      annualRate: { label: "वार्षिक ब्याज दर (%)", help: "आपके ऋणदाता द्वारा दी जाने वाली वार्षिक ब्याज दर।" },
      termYears: { label: "ऋण अवधि (वर्ष)", help: "जितने वर्षों में आप ऋण चुकाएंगे।" },
    },
    outputs: {
      monthlyPayment: { label: "मासिक EMI", help: "हर महीने भुगतान की जाने वाली निश्चित राशि (मूलधन + ब्याज)।" },
      totalPayment: { label: "कुल भुगतान", help: "पूरी अवधि में सभी मासिक किस्तों का योग।" },
      totalInterest: { label: "कुल ब्याज", help: "ऋण की पूरी अवधि में चुकाया गया कुल ब्याज।" },
      principalAmount: { label: "ऋण मूलधन", help: "संपत्ति मूल्य में से डाउन पेमेंट घटाने के बाद वास्तव में उधार ली गई राशि।" },
      amortizationSchedule: { label: "एमोर्टाइजेशन शेड्यूल", help: "प्रत्येक माह की EMI, मूलधन, ब्याज और शेष राशि का विवरण।" },
    },
    errors: {
      downPaymentExceedsLoan: "डाउन पेमेंट संपत्ति मूल्य से अधिक नहीं हो सकती।",
      loanAmountRange: "संपत्ति मूल्य 1,000 से 10,000,000 के बीच होनी चाहिए।",
      rateRange: "वार्षिक ब्याज दर 0% से 30% के बीच होनी चाहिए।",
      termRange: "ऋण अवधि 1 से 30 वर्ष के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "एमोर्टाइजेशन शेड्यूल क्या होता है?",
        a: "एमोर्टाइजेशन शेड्यूल एक तालिका है जो दिखाती है कि प्रत्येक मासिक EMI को ऋण अवधि के दौरान मूलधन और ब्याज में कैसे विभाजित किया जाता है। शुरुआती किस्तों में ज़्यादा हिस्सा ब्याज में जाता है; समय के साथ मूलधन की हिस्सेदारी बढ़ती जाती है।",
      },
      {
        q: "डाउन पेमेंट का होम लोन पर क्या प्रभाव पड़ता है?",
        a: "अधिक डाउन पेमेंट से ऋण मूलधन कम होता है, जिससे मासिक EMI और कुल ब्याज दोनों घटते हैं।",
      },
    ],
  },
};

export default i18n;
