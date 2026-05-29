import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Loan Amortization Schedule",
    short: "Generate a full amortization table for any loan with monthly payment, interest, and balance breakdown.",
    description:
      "Free loan amortization calculator. Enter the principal, interest rate, and term to see your monthly payment and a complete month-by-month breakdown of principal, interest, and balance.",
    keywords: [
      "loan amortization schedule",
      "amortization table",
      "loan payment calculator",
      "monthly payment breakdown",
      "debt payoff schedule",
      "loan interest calculator",
      "principal vs interest",
    ],
    inputs: {
      principal: { label: "Loan Amount", help: "The total amount borrowed." },
      annualRate: { label: "Annual Interest Rate (%)", help: "The yearly interest rate on the loan." },
      termMonths: { label: "Loan Term (months)", help: "Total number of months to repay the loan." },
      startDate: { label: "Start Date (optional)", help: "If provided, dates are shown in the amortization schedule." },
    },
    outputs: {
      monthlyPayment: { label: "Monthly Payment", help: "Fixed payment made each month." },
      totalPayment: { label: "Total Payment", help: "Sum of all monthly payments." },
      totalInterest: { label: "Total Interest", help: "Total interest paid over the life of the loan." },
      amortizationSchedule: { label: "Amortization Schedule", help: "Month-by-month breakdown of payment, principal, interest, and remaining balance." },
    },
    errors: {
      principalRange: "Loan amount must be between $100 and $10,000,000.",
      rateRange: "Annual rate must be between 0% and 50%.",
      termRange: "Loan term must be between 1 and 600 months.",
    },
    faq: [
      {
        q: "What is an amortization schedule?",
        a: "An amortization schedule is a detailed table of periodic loan payments showing the amount of principal and interest that comprise each payment until the loan is paid off at the end of its term.",
      },
      {
        q: "Why does more of my payment go to interest early on?",
        a: "Because interest is calculated on the outstanding balance, and the balance is largest at the start of the loan. As you pay down the principal, the interest charge shrinks and more of each payment reduces the balance.",
      },
      {
        q: "How does making extra payments affect amortization?",
        a: "Extra principal payments reduce your outstanding balance immediately, lowering the interest charged in all future months and effectively shortening the loan term.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Amortização de Empréstimo",
    short: "Veja a tabela de amortização completa do seu empréstimo, mês a mês.",
    description:
      "Calculadora gratuita de amortização. Veja como cada prestação se divide entre capital e juros ao longo da vida do empréstimo.",
    keywords: ["amortização empréstimo", "tabela amortização", "prestações empréstimo", "capital e juros", "calculadora crédito"],
    inputs: {
      principal: { label: "Loan Amount", help: "The total amount borrowed." },
      annualRate: { label: "Annual Interest Rate (%)", help: "The yearly interest rate on the loan." },
      termMonths: { label: "Loan Term (months)", help: "Total number of months to repay the loan." },
      startDate: { label: "Start Date (optional)", help: "If provided, dates are shown in the amortization schedule." },
    },
    outputs: {
      monthlyPayment: { label: "Monthly Payment", help: "Fixed payment made each month." },
      totalPayment: { label: "Total Payment", help: "Sum of all monthly payments." },
      totalInterest: { label: "Total Interest", help: "Total interest paid over the life of the loan." },
      amortizationSchedule: { label: "Amortization Schedule", help: "Month-by-month breakdown of payment, principal, interest, and remaining balance." },
    },
    errors: {
      principalRange: "Loan amount must be between $100 and $10,000,000.",
      rateRange: "Annual rate must be between 0% and 50%.",
      termRange: "Loan term must be between 1 and 600 months.",
    },
    faq: [
      {
        q: "What is an amortization schedule?",
        a: "An amortization schedule is a detailed table of periodic loan payments showing the amount of principal and interest that comprise each payment until the loan is paid off at the end of its term.",
      },
      {
        q: "Why does more of my payment go to interest early on?",
        a: "Because interest is calculated on the outstanding balance, and the balance is largest at the start of the loan. As you pay down the principal, the interest charge shrinks and more of each payment reduces the balance.",
      },
      {
        q: "How does making extra payments affect amortization?",
        a: "Extra principal payments reduce your outstanding balance immediately, lowering the interest charged in all future months and effectively shortening the loan term.",
      },
    ],
  },
  id: {
    title: "Kalkulator Amortisasi Pinjaman",
    short: "Lihat tabel amortisasi lengkap pinjaman Anda, bulan demi bulan.",
    description:
      "Kalkulator amortisasi gratis. Lihat bagaimana setiap angsuran terbagi antara pokok dan bunga sepanjang masa pinjaman.",
    keywords: ["amortisasi pinjaman", "tabel amortisasi", "angsuran pinjaman", "pokok dan bunga", "kalkulator kredit"],
    inputs: {
      principal: { label: "Loan Amount", help: "The total amount borrowed." },
      annualRate: { label: "Annual Interest Rate (%)", help: "The yearly interest rate on the loan." },
      termMonths: { label: "Loan Term (months)", help: "Total number of months to repay the loan." },
      startDate: { label: "Start Date (optional)", help: "If provided, dates are shown in the amortization schedule." },
    },
    outputs: {
      monthlyPayment: { label: "Monthly Payment", help: "Fixed payment made each month." },
      totalPayment: { label: "Total Payment", help: "Sum of all monthly payments." },
      totalInterest: { label: "Total Interest", help: "Total interest paid over the life of the loan." },
      amortizationSchedule: { label: "Amortization Schedule", help: "Month-by-month breakdown of payment, principal, interest, and remaining balance." },
    },
    errors: {
      principalRange: "Loan amount must be between $100 and $10,000,000.",
      rateRange: "Annual rate must be between 0% and 50%.",
      termRange: "Loan term must be between 1 and 600 months.",
    },
    faq: [
      {
        q: "What is an amortization schedule?",
        a: "An amortization schedule is a detailed table of periodic loan payments showing the amount of principal and interest that comprise each payment until the loan is paid off at the end of its term.",
      },
      {
        q: "Why does more of my payment go to interest early on?",
        a: "Because interest is calculated on the outstanding balance, and the balance is largest at the start of the loan. As you pay down the principal, the interest charge shrinks and more of each payment reduces the balance.",
      },
      {
        q: "How does making extra payments affect amortization?",
        a: "Extra principal payments reduce your outstanding balance immediately, lowering the interest charged in all future months and effectively shortening the loan term.",
      },
    ],
  },


  tr: {
    title: "Kredi İtfa Planı",
    short: "Herhangi bir kredi için aylık taksit, faiz ve bakiye dökümüyle tam itfa tablosu oluşturun.",
    description:
      "Ücretsiz kredi itfa planı hesaplayıcısı. Anapara, faiz oranı ve vadeyi girerek aylık taksidinizi ve aylık bazda tam anapara, faiz ve bakiye dökümünü görün.",
    keywords: [
      "kredi itfa planı",
      "itfa tablosu",
      "kredi taksit hesaplayıcı",
      "aylık taksit dökümü",
      "borç ödeme planı",
      "kredi faiz hesaplayıcı",
      "anapara faiz ayrımı",
    ],
    inputs: {
      principal: { label: "Kredi Tutarı", help: "Toplam borçlanılan tutar." },
      annualRate: { label: "Yıllık Faiz Oranı (%)", help: "Kredinin yıllık faiz oranı." },
      termMonths: { label: "Kredi Vadesi (ay)", help: "Krediyi geri ödemek için toplam ay sayısı." },
      startDate: { label: "Başlangıç Tarihi (isteğe bağlı)", help: "Girilirse itfa planında tarihler gösterilir." },
    },
    outputs: {
      monthlyPayment: { label: "Aylık Taksit", help: "Her ay ödenen sabit tutar." },
      totalPayment: { label: "Toplam Ödeme", help: "Tüm aylık ödemelerin toplamı." },
      totalInterest: { label: "Toplam Faiz", help: "Kredi vadesi boyunca ödenen toplam faiz." },
      amortizationSchedule: { label: "İtfa Planı", help: "Aylık taksit, anapara, faiz ve kalan bakiyenin ay ay dökümü." },
    },
    errors: {
      principalRange: "Kredi tutarı 100 ile 10.000.000 arasında olmalıdır.",
      rateRange: "Yıllık faiz oranı %0 ile %50 arasında olmalıdır.",
      termRange: "Kredi vadesi 1 ile 600 ay arasında olmalıdır.",
    },
    faq: [
      {
        q: "İtfa planı nedir?",
        a: "İtfa planı, her ödemenin ne kadarının anaparaya ne kadarının faize gittiğini ay ay gösteren ayrıntılı bir tablodur.",
      },
      {
        q: "Neden erken ödemelerde daha fazla faiz ödüyorum?",
        a: "Faiz, kalan bakiye üzerinden hesaplandığından, bakiye en büyük olduğunda faiz de en yüksektir. Anapara azaldıkça faiz yükü de azalır ve taksitlerin daha büyük bölümü anaparayı kapatmaya başlar.",
      },
    ],
  },

  de: {
    title: "Kreditamortisationsplan",
    short: "Erstellen Sie einen vollständigen Tilgungsplan für jeden Kredit mit monatlicher Rate, Zinsen und Restschuld.",
    description:
      "Kostenloser Kreditamortisationsrechner. Geben Sie Darlehensbetrag, Zinssatz und Laufzeit ein und erhalten Sie eine vollständige monatliche Aufschlüsselung.",
    keywords: [
      "Tilgungsplan",
      "Kreditamortisation",
      "Kreditraten Rechner",
      "monatliche Rate",
      "Restschuld",
      "Zinsen berechnen",
      "Kredit Tabelle",
    ],
    inputs: {
      principal: { label: "Darlehensbetrag", help: "Der gesamte geliehene Betrag." },
      annualRate: { label: "Jährlicher Zinssatz (%)", help: "Der Jahreszins des Kredits." },
      termMonths: { label: "Laufzeit (Monate)", help: "Gesamtanzahl der Monate zur Rückzahlung." },
      startDate: { label: "Startdatum (optional)", help: "Falls angegeben, werden Daten im Tilgungsplan angezeigt." },
    },
    outputs: {
      monthlyPayment: { label: "Monatliche Rate", help: "Feste monatliche Zahlung." },
      totalPayment: { label: "Gesamtzahlung", help: "Summe aller monatlichen Zahlungen." },
      totalInterest: { label: "Gesamtzinsen", help: "Über die gesamte Laufzeit gezahlte Zinsen." },
      amortizationSchedule: { label: "Tilgungsplan", help: "Monatliche Aufschlüsselung von Rate, Tilgung, Zinsen und Restschuld." },
    },
    errors: {
      principalRange: "Kreditbetrag muss zwischen 100 und 10.000.000 liegen.",
      rateRange: "Jahreszins muss zwischen 0 % und 50 % liegen.",
      termRange: "Laufzeit muss zwischen 1 und 600 Monaten liegen.",
    },
    faq: [
      {
        q: "Was ist ein Tilgungsplan?",
        a: "Ein Tilgungsplan ist eine detaillierte Tabelle, die für jede Periode zeigt, wie viel der Rate auf Zinsen und wie viel auf Tilgung entfällt.",
      },
    ],
  },

  fr: {
    title: "Tableau d'Amortissement de Prêt",
    short: "Générez un tableau d'amortissement complet pour tout prêt avec mensualité, intérêts et solde.",
    description:
      "Calculateur de tableau d'amortissement gratuit. Entrez le capital, le taux et la durée pour obtenir votre mensualité et un détail mensuel complet.",
    keywords: [
      "tableau amortissement prêt",
      "calcul amortissement",
      "mensualité prêt",
      "détail mensualité",
      "remboursement prêt",
      "intérêts prêt",
      "capital restant dû",
    ],
    inputs: {
      principal: { label: "Montant emprunté", help: "Le montant total du prêt." },
      annualRate: { label: "Taux annuel (%)", help: "Le taux d'intérêt annuel du prêt." },
      termMonths: { label: "Durée (mois)", help: "Nombre total de mois pour rembourser le prêt." },
      startDate: { label: "Date de début (optionnel)", help: "Si renseigné, les dates apparaissent dans le tableau." },
    },
    outputs: {
      monthlyPayment: { label: "Mensualité", help: "Paiement fixe effectué chaque mois." },
      totalPayment: { label: "Coût total", help: "Somme de toutes les mensualités." },
      totalInterest: { label: "Intérêts totaux", help: "Total des intérêts payés sur la durée du prêt." },
      amortizationSchedule: { label: "Tableau d'amortissement", help: "Détail mensuel de la mensualité, du capital, des intérêts et du solde." },
    },
    errors: {
      principalRange: "Le montant doit être compris entre 100 et 10 000 000.",
      rateRange: "Le taux annuel doit être entre 0 % et 50 %.",
      termRange: "La durée doit être entre 1 et 600 mois.",
    },
    faq: [
      {
        q: "Qu'est-ce qu'un tableau d'amortissement ?",
        a: "C'est un tableau détaillant, mois par mois, la part de la mensualité affectée aux intérêts et celle affectée au remboursement du capital.",
      },
    ],
  },

  es: {
    title: "Tabla de Amortización de Préstamo",
    short: "Genera un cuadro de amortización completo con cuota, intereses y saldo mes a mes.",
    description:
      "Calculadora de amortización de préstamo gratuita. Introduce el capital, el tipo y el plazo para ver tu cuota mensual y un desglose mensual completo.",
    keywords: [
      "tabla amortización préstamo",
      "cuadro amortización",
      "calculadora cuota préstamo",
      "desglose cuota",
      "plan de pagos",
      "intereses préstamo",
      "saldo pendiente",
    ],
    inputs: {
      principal: { label: "Importe del préstamo", help: "El importe total solicitado." },
      annualRate: { label: "Tipo de interés anual (%)", help: "El tipo de interés anual del préstamo." },
      termMonths: { label: "Plazo (meses)", help: "Número total de meses para amortizar el préstamo." },
      startDate: { label: "Fecha de inicio (opcional)", help: "Si se indica, las fechas aparecen en el cuadro de amortización." },
    },
    outputs: {
      monthlyPayment: { label: "Cuota mensual", help: "Pago fijo mensual." },
      totalPayment: { label: "Coste total", help: "Suma de todas las cuotas mensuales." },
      totalInterest: { label: "Intereses totales", help: "Total de intereses pagados durante el préstamo." },
      amortizationSchedule: { label: "Cuadro de amortización", help: "Desglose mensual de cuota, capital, intereses y saldo pendiente." },
    },
    errors: {
      principalRange: "El importe debe estar entre 100 y 10.000.000.",
      rateRange: "El tipo anual debe estar entre 0 % y 50 %.",
      termRange: "El plazo debe estar entre 1 y 600 meses.",
    },
    faq: [
      {
        q: "¿Qué es un cuadro de amortización?",
        a: "Es una tabla que muestra, mes a mes, cómo se divide cada cuota entre amortización del capital e intereses hasta saldar el préstamo.",
      },
    ],
  },

  it: {
    title: "Piano di Ammortamento del Prestito",
    short: "Genera un piano di ammortamento completo con rata, interessi e saldo mese per mese.",
    description:
      "Calcolatore gratuito del piano di ammortamento. Inserisci capitale, tasso e durata per ottenere la rata mensile e un dettaglio mensile completo.",
    keywords: [
      "piano ammortamento prestito",
      "tabella ammortamento",
      "calcolo rata prestito",
      "dettaglio rata",
      "piano rimborso",
      "interessi prestito",
      "debito residuo",
    ],
    inputs: {
      principal: { label: "Importo del prestito", help: "L'importo totale preso in prestito." },
      annualRate: { label: "Tasso annuo (%)", help: "Il tasso di interesse annuo del prestito." },
      termMonths: { label: "Durata (mesi)", help: "Numero totale di mesi per rimborsare il prestito." },
      startDate: { label: "Data di inizio (facoltativo)", help: "Se inserita, le date compaiono nel piano di ammortamento." },
    },
    outputs: {
      monthlyPayment: { label: "Rata mensile", help: "Pagamento fisso mensile." },
      totalPayment: { label: "Costo totale", help: "Somma di tutte le rate mensili." },
      totalInterest: { label: "Interessi totali", help: "Totale degli interessi pagati nel corso del prestito." },
      amortizationSchedule: { label: "Piano di ammortamento", help: "Dettaglio mensile di rata, capitale, interessi e saldo residuo." },
    },
    errors: {
      principalRange: "L'importo deve essere compreso tra 100 e 10.000.000.",
      rateRange: "Il tasso annuo deve essere tra 0% e 50%.",
      termRange: "La durata deve essere tra 1 e 600 mesi.",
    },
    faq: [
      {
        q: "Che cos'è un piano di ammortamento?",
        a: "È una tabella che mostra, mese per mese, come si divide ogni rata tra rimborso del capitale e pagamento degli interessi.",
      },
    ],
  },

  ar: {
    title: "جدول إطفاء القرض",
    short: "أنشئ جدول إطفاء كاملاً لأي قرض مع القسط الشهري والفائدة والرصيد.",
    description:
      "حاسبة جدول إطفاء القرض المجانية. أدخل رأس المال والفائدة والمدة لرؤية قسطك الشهري والتفصيل الشهري الكامل.",
    keywords: [
      "جدول إطفاء القرض",
      "جدول السداد",
      "حاسبة القسط الشهري",
      "تفصيل القسط",
      "خطة السداد",
      "فائدة القرض",
      "الرصيد المتبقي",
    ],
    inputs: {
      principal: { label: "مبلغ القرض", help: "إجمالي المبلغ المقترض." },
      annualRate: { label: "معدل الفائدة السنوي (%)", help: "معدل الفائدة السنوي للقرض." },
      termMonths: { label: "مدة القرض (أشهر)", help: "إجمالي عدد الأشهر لسداد القرض." },
      startDate: { label: "تاريخ البداية (اختياري)", help: "إذا تم إدخاله، ستظهر التواريخ في جدول الإطفاء." },
    },
    outputs: {
      monthlyPayment: { label: "القسط الشهري", help: "المبلغ الثابت المدفوع كل شهر." },
      totalPayment: { label: "إجمالي المدفوعات", help: "مجموع جميع الأقساط الشهرية." },
      totalInterest: { label: "إجمالي الفوائد", help: "مجموع الفوائد المدفوعة على مدار القرض." },
      amortizationSchedule: { label: "جدول الإطفاء", help: "التفصيل الشهري للقسط والأصل والفائدة والرصيد المتبقي." },
    },
    errors: {
      principalRange: "يجب أن يكون مبلغ القرض بين 100 و10,000,000.",
      rateRange: "يجب أن يكون معدل الفائدة السنوي بين 0% و50%.",
      termRange: "يجب أن تكون مدة القرض بين شهر واحد و600 شهر.",
    },
    faq: [
      {
        q: "ما هو جدول الإطفاء؟",
        a: "جدول الإطفاء هو جدول تفصيلي يوضح شهرياً مقدار كل قسط المخصص لرأس المال ومقدار المخصص للفوائد حتى سداد القرض بالكامل.",
      },
    ],
  },

  ru: {
    title: "График погашения кредита",
    short: "Сформируйте полный график погашения для любого кредита с разбивкой по месяцам.",
    description:
      "Бесплатный калькулятор графика погашения. Введите сумму, ставку и срок — получите ежемесячный платёж и полную разбивку по месяцам.",
    keywords: [
      "график погашения кредита",
      "таблица амортизации",
      "калькулятор кредита",
      "ежемесячный платёж",
      "остаток долга",
      "проценты по кредиту",
      "план погашения",
    ],
    inputs: {
      principal: { label: "Сумма кредита", help: "Общая сумма займа." },
      annualRate: { label: "Годовая ставка (%)", help: "Годовая процентная ставка по кредиту." },
      termMonths: { label: "Срок (месяцев)", help: "Общее количество месяцев для погашения кредита." },
      startDate: { label: "Дата начала (необязательно)", help: "Если указана, даты отображаются в графике погашения." },
    },
    outputs: {
      monthlyPayment: { label: "Ежемесячный платёж", help: "Фиксированный ежемесячный платёж." },
      totalPayment: { label: "Общая сумма выплат", help: "Сумма всех ежемесячных платежей." },
      totalInterest: { label: "Переплата по процентам", help: "Итоговая сумма процентов за весь срок." },
      amortizationSchedule: { label: "График погашения", help: "Ежемесячная разбивка платежа, основного долга, процентов и остатка." },
    },
    errors: {
      principalRange: "Сумма кредита должна быть от 100 до 10 000 000.",
      rateRange: "Годовая ставка должна быть от 0 % до 50 %.",
      termRange: "Срок должен быть от 1 до 600 месяцев.",
    },
    faq: [
      {
        q: "Что такое график погашения кредита?",
        a: "График погашения — это подробная таблица, показывающая, какая часть каждого платежа идёт на погашение основного долга, а какая — на проценты.",
      },
    ],
  },

  zh: {
    title: "贷款还款计划表",
    short: "生成任意贷款的完整还款计划，包含月供、利息和余额的逐月明细。",
    description:
      "免费贷款摊销计算器。输入本金、利率和期限，即可查看月供及完整的逐月本金、利息和余额明细。",
    keywords: [
      "贷款还款计划表",
      "摊销表",
      "贷款月供计算器",
      "月供明细",
      "债务还款计划",
      "贷款利息计算",
      "本金与利息",
    ],
    inputs: {
      principal: { label: "贷款金额", help: "借入的总金额。" },
      annualRate: { label: "年利率 (%)", help: "贷款的年利率。" },
      termMonths: { label: "贷款期限（月）", help: "偿还贷款的总月数。" },
      startDate: { label: "开始日期（可选）", help: "如填写，还款计划中将显示日期。" },
    },
    outputs: {
      monthlyPayment: { label: "月还款额", help: "每月支付的固定金额。" },
      totalPayment: { label: "还款总额", help: "所有月还款额之和。" },
      totalInterest: { label: "总利息", help: "贷款期内支付的利息总额。" },
      amortizationSchedule: { label: "还款计划表", help: "月供、本金、利息及剩余余额的逐月明细。" },
    },
    errors: {
      principalRange: "贷款金额必须在 100 至 10,000,000 之间。",
      rateRange: "年利率必须在 0% 至 50% 之间。",
      termRange: "贷款期限必须在 1 至 600 个月之间。",
    },
    faq: [
      {
        q: "什么是还款计划表？",
        a: "还款计划表是一份详细表格，逐月显示每笔还款中用于偿还本金和利息的金额，直至贷款还清。",
      },
    ],
  },

  ja: {
    title: "ローン返済計画表",
    short: "任意のローンの完全な返済計画を生成し、毎月の返済額・利息・残高を確認できます。",
    description:
      "無料のローン返済計画計算機です。元本・金利・返済期間を入力するだけで、毎月の返済額と詳細な月別明細を確認できます。",
    keywords: [
      "ローン返済計画表",
      "返済スケジュール",
      "ローン計算機",
      "毎月の返済額",
      "残高明細",
      "利息計算",
      "元本と利息",
    ],
    inputs: {
      principal: { label: "借入金額", help: "借り入れる総額。" },
      annualRate: { label: "年利 (%)", help: "ローンの年間利率。" },
      termMonths: { label: "返済期間（ヶ月）", help: "ローンを返済する総月数。" },
      startDate: { label: "開始日（任意）", help: "入力した場合、返済計画表に日付が表示されます。" },
    },
    outputs: {
      monthlyPayment: { label: "毎月の返済額", help: "毎月支払う固定額。" },
      totalPayment: { label: "総返済額", help: "すべての月次返済額の合計。" },
      totalInterest: { label: "総支払利息", help: "ローン期間全体で支払う利息の合計。" },
      amortizationSchedule: { label: "返済計画表", help: "毎月の返済額・元本・利息・残高の明細。" },
    },
    errors: {
      principalRange: "借入金額は 100 ～ 10,000,000 の範囲で入力してください。",
      rateRange: "年利は 0% ～ 50% の範囲で入力してください。",
      termRange: "返済期間は 1 ～ 600 ヶ月の範囲で入力してください。",
    },
    faq: [
      {
        q: "返済計画表とは何ですか？",
        a: "返済計画表は、毎月の返済額が元本と利息にどのように分配されるかを示す詳細な表です。",
      },
    ],
  },

  ko: {
    title: "대출 상환 스케줄",
    short: "모든 대출에 대한 월 상환액, 이자, 잔액이 포함된 완전한 상환 스케줄을 생성하세요.",
    description:
      "무료 대출 상환 계산기입니다. 원금, 금리, 기간을 입력하면 월 상환액과 완전한 월별 원금, 이자, 잔액 내역을 확인할 수 있습니다.",
    keywords: [
      "대출 상환 스케줄",
      "원리금 상환표",
      "대출 계산기",
      "월 상환액 내역",
      "부채 상환 계획",
      "대출 이자 계산",
      "원금과 이자",
    ],
    inputs: {
      principal: { label: "대출 금액", help: "총 대출 금액." },
      annualRate: { label: "연이율 (%)", help: "대출의 연간 이자율." },
      termMonths: { label: "대출 기간 (개월)", help: "대출을 상환하는 총 개월 수." },
      startDate: { label: "시작일 (선택 사항)", help: "입력 시 상환 스케줄에 날짜가 표시됩니다." },
    },
    outputs: {
      monthlyPayment: { label: "월 상환액", help: "매달 납부하는 고정 금액." },
      totalPayment: { label: "총 상환액", help: "모든 월 상환액의 합계." },
      totalInterest: { label: "총 이자", help: "대출 기간 동안 납부하는 이자 총액." },
      amortizationSchedule: { label: "상환 스케줄", help: "월별 상환액, 원금, 이자 및 잔액의 세부 내역." },
    },
    errors: {
      principalRange: "대출 금액은 100 ~ 10,000,000 사이여야 합니다.",
      rateRange: "연이율은 0% ~ 50% 사이여야 합니다.",
      termRange: "대출 기간은 1 ~ 600개월 사이여야 합니다.",
    },
    faq: [
      {
        q: "상환 스케줄이란 무엇인가요?",
        a: "상환 스케줄은 대출 만기까지 각 월 상환액이 원금과 이자로 어떻게 나뉘는지 보여주는 상세 표입니다.",
      },
    ],
  },

  hi: {
    title: "लोन एमोर्टाइजेशन शेड्यूल",
    short: "किसी भी लोन के लिए मासिक EMI, ब्याज और शेष राशि के साथ पूर्ण एमोर्टाइजेशन तालिका बनाएं।",
    description:
      "मुफ़्त लोन एमोर्टाइजेशन कैलकुलेटर। मूलधन, ब्याज दर और अवधि दर्ज करें और मासिक EMI व पूर्ण मासिक विवरण देखें।",
    keywords: [
      "लोन एमोर्टाइजेशन शेड्यूल",
      "एमोर्टाइजेशन तालिका",
      "लोन भुगतान कैलकुलेटर",
      "मासिक EMI विवरण",
      "ऋण चुकौती योजना",
      "लोन ब्याज कैलकुलेटर",
      "मूलधन और ब्याज",
    ],
    inputs: {
      principal: { label: "लोन राशि", help: "कुल उधार ली गई राशि।" },
      annualRate: { label: "वार्षिक ब्याज दर (%)", help: "लोन की वार्षिक ब्याज दर।" },
      termMonths: { label: "लोन अवधि (महीने)", help: "लोन चुकाने के लिए कुल महीनों की संख्या।" },
      startDate: { label: "प्रारंभ तिथि (वैकल्पिक)", help: "दर्ज करने पर एमोर्टाइजेशन शेड्यूल में तारीखें दिखाई जाएंगी।" },
    },
    outputs: {
      monthlyPayment: { label: "मासिक EMI", help: "हर महीने भुगतान की जाने वाली निश्चित राशि।" },
      totalPayment: { label: "कुल भुगतान", help: "सभी मासिक किस्तों का योग।" },
      totalInterest: { label: "कुल ब्याज", help: "लोन की पूरी अवधि में चुकाया गया कुल ब्याज।" },
      amortizationSchedule: { label: "एमोर्टाइजेशन शेड्यूल", help: "प्रत्येक माह की EMI, मूलधन, ब्याज और शेष राशि का विवरण।" },
    },
    errors: {
      principalRange: "लोन राशि 100 से 10,000,000 के बीच होनी चाहिए।",
      rateRange: "वार्षिक ब्याज दर 0% से 50% के बीच होनी चाहिए।",
      termRange: "लोन अवधि 1 से 600 महीनों के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "एमोर्टाइजेशन शेड्यूल क्या होता है?",
        a: "एमोर्टाइजेशन शेड्यूल एक विस्तृत तालिका है जो प्रत्येक मासिक किस्त में मूलधन और ब्याज के बीच विभाजन को महीने दर महीने दिखाती है।",
      },
    ],
  },
};

export default i18n;
