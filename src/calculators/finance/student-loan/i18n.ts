import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Student Loan Payoff Calculator",
    short: "Calculate your monthly student loan payment and total interest over the life of the loan.",
    description:
      "Free student loan payoff calculator. Enter your loan balance, APR, and term to see monthly payments, total interest, and how extra payments accelerate payoff.",
    keywords: [
      "student loan calculator",
      "loan payoff calculator",
      "student debt calculator",
      "monthly loan payment",
      "student loan interest",
      "loan amortization",
      "extra payment savings",
    ],
    inputs: {
      balance: {
        label: "Loan Balance",
        help: "The current outstanding principal balance of your student loan.",
      },
      apr: {
        label: "Annual Interest Rate (APR)",
        help: "The annual percentage rate on your student loan.",
      },
      loanTerm: {
        label: "Loan Term (years)",
        help: "The number of years over which you will repay the loan.",
      },
      graceMonths: {
        label: "Grace Period (months)",
        help: "Months after graduation before payments begin. Interest continues to accrue during this period.",
      },
      extraMonthlyPayment: {
        label: "Extra Monthly Payment",
        help: "Additional amount paid each month beyond the required minimum to pay off the loan faster.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "Monthly Payment",
        help: "The required monthly payment based on your loan balance after the grace period.",
      },
      totalPaid: {
        label: "Total Amount Paid",
        help: "Total principal and interest paid over the full loan term.",
      },
      totalInterest: {
        label: "Total Interest Paid",
        help: "Total interest charges over the life of the loan.",
      },
      balanceAfterGrace: {
        label: "Balance After Grace Period",
        help: "Your loan balance after interest accrues during the grace period.",
      },
      monthsToPayoff: {
        label: "Months to Payoff",
        help: "Number of months until the loan is fully paid off (with extra payments applied).",
      },
      interestSavedByExtra: {
        label: "Interest Saved by Extra Payments",
        help: "Total interest you save by making additional monthly payments.",
      },
    },
    errors: {
      balanceTooLow: "Loan balance must be at least $100.",
      aprOutOfRange: "APR must be between 0% and 30%.",
      termOutOfRange: "Loan term must be between 1 and 30 years.",
    },
    faq: [
      {
        q: "What happens to my loan during the grace period?",
        a: "For most federal unsubsidized loans and private loans, interest accrues during the grace period even though no payments are required. This increases your balance before repayment begins. Subsidized federal loans do not accrue interest during the grace period.",
      },
      {
        q: "How much can I save by making extra payments?",
        a: "Extra payments reduce your principal faster, which means less interest accrues over time. Even $50–$100 extra per month can save thousands of dollars and years off your repayment timeline.",
      },
      {
        q: "What is the standard repayment plan for federal student loans?",
        a: "The standard repayment plan for federal student loans is 10 years (120 monthly payments). Income-driven repayment plans extend this timeline but cap payments as a percentage of your discretionary income.",
      },
      {
        q: "Should I refinance my student loans?",
        a: "Refinancing can lower your interest rate if your credit has improved, but federal loans lose protections like income-driven repayment and Public Service Loan Forgiveness when refinanced into private loans. Evaluate carefully before refinancing federal loans.",
      },
      {
        q: "What is capitalized interest?",
        a: "Capitalized interest is unpaid interest that gets added to your principal balance, typically at the end of a grace period or deferment. Once capitalized, you pay interest on a higher balance, increasing total loan cost.",
      },
    ],
  },
  nl: {
    title: "Student Lening Payoff Calculator",
    short: "Bereken your monthly student loan payment and total interest over the life of the loan.",
    description:
      "Gratis student loan payoff calculator. Enter your loan balance, APR, and term to see monthly payments, total interest, and how extra payments accelerate payoff.",
    keywords: [
      "student loan calculator",
      "loan payoff calculator",
      "student debt calculator",
      "monthly loan payment",
      "student loan interest",
      "loan amortization",
      "extra payment savings",
    ],
    inputs: {
      balance: {
        label: "Lening Balance",
        help: "The current outstanding principal balance of your student loan.",
      },
      apr: {
        label: "Annual Interest Rate (APR)",
        help: "The annual percentage rate on your student loan.",
      },
      loanTerm: {
        label: "Lening Term (jaren)",
        help: "The nummer of jaren over which you will repay the loan.",
      },
      graceMonths: {
        label: "Grace Period (maanden)",
        help: "Months after graduation before payments begin. Interest continues to accrue during this period.",
      },
      extraMonthlyPayment: {
        label: "Extra Monthly Payment",
        help: "Additional amount paid each month beyond the required minimum to pay off the loan faster.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "Monthly Payment",
        help: "The required monthly payment based on your loan balance after the grace period.",
      },
      totalPaid: {
        label: "Total Amount Paid",
        help: "Total principal and interest paid over the full loan term.",
      },
      totalInterest: {
        label: "Total Interest Paid",
        help: "Total interest charges over the life of the loan.",
      },
      balanceAfterGrace: {
        label: "Balance After Grace Period",
        help: "Your loan balance after interest accrues during the grace period.",
      },
      monthsToPayoff: {
        label: "Months to Payoff",
        help: "Nummer of maanden until the loan is fully paid off (with extra payments applied).",
      },
      interestSavedByExtra: {
        label: "Interest Opslaand by Extra Payments",
        help: "Total interest you save by making additional monthly payments.",
      },
    },
    errors: {
      balanceTooLow: "Lening balance must be at least $100.",
      aprOutOfRange: "APR must be between 0% and 30%.",
      termOutOfRange: "Lening term must be between 1 and 30 jaren.",
    },
    faq: [
      {
        q: "What happens to my loan during the grace period?",
        a: "For most federal unsubsidized loans and private loans, interest accrues during the grace period even though no payments are required. This increases your balance before repayment begins. Subsidized federal loans do not accrue interest during the grace period.",
      },
      {
        q: "How much can I save by making extra payments?",
        a: "Extra payments reduce your principal faster, which means less interest accrues over time. Even $50–$100 extra per month can save thousands of dollars and jaren off your repayment timeline.",
      },
      {
        q: "What is the standard repayment plan for federal student loans?",
        a: "The standard repayment plan for federal student loans is 10 jaren (120 monthly payments). Income-driven repayment plans extend this timeline but cap payments as a percentage of your discretionary income.",
      },
      {
        q: "Should I refinance my student loans?",
        a: "Refinancing can lower your interest rate if your credit has improved, but federal loans lose protections like income-driven repayment and Public Service Lening Forgiveness when refinanced into private loans. Evaluate carefully before refinancing federal loans.",
      },
      {
        q: "What is capitalized interest?",
        a: "Capitalized interest is unpaid interest that gets added to your principal balance, typically at the end of a grace period or deferment. Once capitalized, you pay interest on a higher balance, increasing total loan cost.",
      },
    ],
  },

  pl: {
    title: "Student Pożyczka Payoff Kalkulator",
    short: "Oblicz your monthly student loan payment and total interest over the life of the loan.",
    description:
      "Darmowy student loan payoff kalkulator. Enter your loan balance, APR, and term to see monthly payments, total interest, and how extra payments accelerate payoff.",
    keywords: [
      "student loan kalkulator",
      "loan payoff kalkulator",
      "student debt kalkulator",
      "monthly loan payment",
      "student loan interest",
      "loan amortization",
      "extra payment savings",
    ],
    inputs: {
      balance: {
        label: "Pożyczka Balance",
        help: "The current outstanding principal balance of your student loan.",
      },
      apr: {
        label: "Annual Interest Rate (APR)",
        help: "The annual percentage rate on your student loan.",
      },
      loanTerm: {
        label: "Pożyczka Term (lat)",
        help: "The liczba of lat over which you will repay the loan.",
      },
      graceMonths: {
        label: "Grace Period (miesięcy)",
        help: "Months after graduation before payments begin. Interest continues to accrue during this period.",
      },
      extraMonthlyPayment: {
        label: "Extra Monthly Payment",
        help: "Additional amount paid each month beyond the required minimum to pay off the loan faster.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "Monthly Payment",
        help: "The required monthly payment based on your loan balance after the grace period.",
      },
      totalPaid: {
        label: "Total Amount Paid",
        help: "Total principal and interest paid over the full loan term.",
      },
      totalInterest: {
        label: "Total Interest Paid",
        help: "Total interest charges over the life of the loan.",
      },
      balanceAfterGrace: {
        label: "Balance After Grace Period",
        help: "Your loan balance after interest accrues during the grace period.",
      },
      monthsToPayoff: {
        label: "Months to Payoff",
        help: "Liczba of miesięcy until the loan is fully paid off (with extra payments applied).",
      },
      interestSavedByExtra: {
        label: "Interest Zapiszd by Extra Payments",
        help: "Total interest you save by making additional monthly payments.",
      },
    },
    errors: {
      balanceTooLow: "Pożyczka balance must be at least $100.",
      aprOutOfRange: "APR must be between 0% and 30%.",
      termOutOfRange: "Pożyczka term must be between 1 and 30 lat.",
    },
    faq: [
      {
        q: "What happens to my loan during the grace period?",
        a: "For most federal unsubsidized loans and private loans, interest accrues during the grace period even though no payments are required. This increases your balance before repayment begins. Subsidized federal loans do not accrue interest during the grace period.",
      },
      {
        q: "How much can I save by making extra payments?",
        a: "Extra payments reduce your principal faster, which means less interest accrues over time. Even $50–$100 extra per month can save thousands of dollars and lat off your repayment timeline.",
      },
      {
        q: "What is the standard repayment plan for federal student loans?",
        a: "The standard repayment plan for federal student loans is 10 lat (120 monthly payments). Income-driven repayment plans extend this timeline but cap payments as a percentage of your discretionary income.",
      },
      {
        q: "Should I refinance my student loans?",
        a: "Refinancing can lower your interest rate if your credit has improved, but federal loans lose protections like income-driven repayment and Public Service Pożyczka Forgiveness when refinanced into private loans. Evaluate carefully before refinancing federal loans.",
      },
      {
        q: "What is capitalized interest?",
        a: "Capitalized interest is unpaid interest that gets added to your principal balance, typically at the end of a grace period or deferment. Once capitalized, you pay interest on a higher balance, increasing total loan cost.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Crédito Estudante",
    short: "Calcule a prestação mensal e o custo total do seu crédito estudante.",
    description:
      "Calculadora gratuita de crédito estudante. Introduza o valor, taxa e prazo para ver a prestação e os juros totais.",
    keywords: ["crédito estudante", "empréstimo estudante", "financiamento estudos", "prestação estudante", "juros estudante"],
    inputs: {
      balance: {
        label: "Loan Balance",
        help: "The current outstanding principal balance of your student loan.",
      },
      apr: {
        label: "Annual Interest Rate (APR)",
        help: "The annual percentage rate on your student loan.",
      },
      loanTerm: {
        label: "Loan Term (years)",
        help: "The number of years over which you will repay the loan.",
      },
      graceMonths: {
        label: "Grace Period (months)",
        help: "Months after graduation before payments begin. Interest continues to accrue during this period.",
      },
      extraMonthlyPayment: {
        label: "Extra Monthly Payment",
        help: "Additional amount paid each month beyond the required minimum to pay off the loan faster.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "Monthly Payment",
        help: "The required monthly payment based on your loan balance after the grace period.",
      },
      totalPaid: {
        label: "Total Amount Paid",
        help: "Total principal and interest paid over the full loan term.",
      },
      totalInterest: {
        label: "Total Interest Paid",
        help: "Total interest charges over the life of the loan.",
      },
      balanceAfterGrace: {
        label: "Balance After Grace Period",
        help: "Your loan balance after interest accrues during the grace period.",
      },
      monthsToPayoff: {
        label: "Months to Payoff",
        help: "Number of months until the loan is fully paid off (with extra payments applied).",
      },
      interestSavedByExtra: {
        label: "Interest Saved by Extra Payments",
        help: "Total interest you save by making additional monthly payments.",
      },
    },
    errors: {
      balanceTooLow: "Loan balance must be at least $100.",
      aprOutOfRange: "APR must be between 0% and 30%.",
      termOutOfRange: "Loan term must be between 1 and 30 years.",
    },
    faq: [
      {
        q: "What happens to my loan during the grace period?",
        a: "For most federal unsubsidized loans and private loans, interest accrues during the grace period even though no payments are required. This increases your balance before repayment begins. Subsidized federal loans do not accrue interest during the grace period.",
      },
      {
        q: "How much can I save by making extra payments?",
        a: "Extra payments reduce your principal faster, which means less interest accrues over time. Even $50–$100 extra per month can save thousands of dollars and years off your repayment timeline.",
      },
      {
        q: "What is the standard repayment plan for federal student loans?",
        a: "The standard repayment plan for federal student loans is 10 years (120 monthly payments). Income-driven repayment plans extend this timeline but cap payments as a percentage of your discretionary income.",
      },
      {
        q: "Should I refinance my student loans?",
        a: "Refinancing can lower your interest rate if your credit has improved, but federal loans lose protections like income-driven repayment and Public Service Loan Forgiveness when refinanced into private loans. Evaluate carefully before refinancing federal loans.",
      },
      {
        q: "What is capitalized interest?",
        a: "Capitalized interest is unpaid interest that gets added to your principal balance, typically at the end of a grace period or deferment. Once capitalized, you pay interest on a higher balance, increasing total loan cost.",
      },
    ],
  },
  id: {
    title: "Kalkulator Pinjaman Pelajar",
    short: "Hitung angsuran bulanan dan total biaya pinjaman pelajar Anda.",
    description:
      "Kalkulator pinjaman pelajar gratis. Masukkan jumlah, suku bunga, dan jangka waktu untuk melihat angsuran dan total bunga.",
    keywords: ["pinjaman pelajar", "kredit mahasiswa", "pembiayaan kuliah", "angsuran pelajar", "bunga pelajar"],
    inputs: {
      balance: {
        label: "Loan Balance",
        help: "The current outstanding principal balance of your student loan.",
      },
      apr: {
        label: "Annual Interest Rate (APR)",
        help: "The annual percentage rate on your student loan.",
      },
      loanTerm: {
        label: "Loan Term (years)",
        help: "The number of years over which you will repay the loan.",
      },
      graceMonths: {
        label: "Grace Period (months)",
        help: "Months after graduation before payments begin. Interest continues to accrue during this period.",
      },
      extraMonthlyPayment: {
        label: "Extra Monthly Payment",
        help: "Additional amount paid each month beyond the required minimum to pay off the loan faster.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "Monthly Payment",
        help: "The required monthly payment based on your loan balance after the grace period.",
      },
      totalPaid: {
        label: "Total Amount Paid",
        help: "Total principal and interest paid over the full loan term.",
      },
      totalInterest: {
        label: "Total Interest Paid",
        help: "Total interest charges over the life of the loan.",
      },
      balanceAfterGrace: {
        label: "Balance After Grace Period",
        help: "Your loan balance after interest accrues during the grace period.",
      },
      monthsToPayoff: {
        label: "Months to Payoff",
        help: "Number of months until the loan is fully paid off (with extra payments applied).",
      },
      interestSavedByExtra: {
        label: "Interest Saved by Extra Payments",
        help: "Total interest you save by making additional monthly payments.",
      },
    },
    errors: {
      balanceTooLow: "Loan balance must be at least $100.",
      aprOutOfRange: "APR must be between 0% and 30%.",
      termOutOfRange: "Loan term must be between 1 and 30 years.",
    },
    faq: [
      {
        q: "What happens to my loan during the grace period?",
        a: "For most federal unsubsidized loans and private loans, interest accrues during the grace period even though no payments are required. This increases your balance before repayment begins. Subsidized federal loans do not accrue interest during the grace period.",
      },
      {
        q: "How much can I save by making extra payments?",
        a: "Extra payments reduce your principal faster, which means less interest accrues over time. Even $50–$100 extra per month can save thousands of dollars and years off your repayment timeline.",
      },
      {
        q: "What is the standard repayment plan for federal student loans?",
        a: "The standard repayment plan for federal student loans is 10 years (120 monthly payments). Income-driven repayment plans extend this timeline but cap payments as a percentage of your discretionary income.",
      },
      {
        q: "Should I refinance my student loans?",
        a: "Refinancing can lower your interest rate if your credit has improved, but federal loans lose protections like income-driven repayment and Public Service Loan Forgiveness when refinanced into private loans. Evaluate carefully before refinancing federal loans.",
      },
      {
        q: "What is capitalized interest?",
        a: "Capitalized interest is unpaid interest that gets added to your principal balance, typically at the end of a grace period or deferment. Once capitalized, you pay interest on a higher balance, increasing total loan cost.",
      },
    ],
  },


  tr: {
    title: "Öğrenci Kredisi Geri Ödeme Hesaplayıcısı",
    short: "Aylık öğrenci kredisi ödemenizi ve kredi süresi boyunca toplam faizi hesaplayın.",
    description:
      "Ücretsiz öğrenci kredisi geri ödeme hesaplayıcısı. Kredi bakiyenizi, APR'nizi ve vadenizi girerek aylık ödemeleri, toplam faizi ve ekstra ödemelerin geri ödemeyi nasıl hızlandırdığını görün.",
    keywords: [
      "öğrenci kredisi hesaplayıcısı",
      "kredi geri ödeme hesaplayıcısı",
      "öğrenci borcu hesaplayıcısı",
      "aylık kredi ödemesi",
      "öğrenci kredisi faizi",
      "kredi amortismanı",
      "ekstra ödeme tasarrufu",
    ],
    inputs: {
      balance: {
        label: "Kredi Bakiyesi",
        help: "Öğrenci kredinizin mevcut ana para bakiyesi.",
      },
      apr: {
        label: "Yıllık Faiz Oranı (APR)",
        help: "Öğrenci kredinizin yıllık yüzde oranı.",
      },
      loanTerm: {
        label: "Kredi Vadesi (yıl)",
        help: "Krediyi geri ödeyeceğiniz yıl sayısı.",
      },
      graceMonths: {
        label: "Erteleme Süresi (ay)",
        help: "Mezuniyetten sonra ödemelerin başlamadan önce geçen ay sayısı. Bu süre boyunca faiz işlemeye devam eder.",
      },
      extraMonthlyPayment: {
        label: "Ek Aylık Ödeme",
        help: "Krediyi daha hızlı kapatmak için gerekli minimumun üzerinde her ay ödenen ek tutar.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "Aylık Ödeme",
        help: "Erteleme süresi sonrasındaki kredi bakiyenize göre zorunlu aylık ödeme tutarı.",
      },
      totalPaid: {
        label: "Toplam Ödenen Tutar",
        help: "Tam kredi vadesi boyunca ödenen toplam anapara ve faiz.",
      },
      totalInterest: {
        label: "Toplam Ödenen Faiz",
        help: "Kredinin ömrü boyunca ödenen toplam faiz giderleri.",
      },
      balanceAfterGrace: {
        label: "Erteleme Sonrası Bakiye",
        help: "Erteleme süresi boyunca faiz birikiminin ardından kredi bakiyeniz.",
      },
      monthsToPayoff: {
        label: "Geri Ödeme Süresi (ay)",
        help: "Ekstra ödemelerle kredi tamamen kapatılana kadar geçen ay sayısı.",
      },
      interestSavedByExtra: {
        label: "Ekstra Ödemelerle Kazanılan Tasarruf",
        help: "Ek aylık ödemeler yaparak tasarruf ettiğiniz toplam faiz miktarı.",
      },
    },
    errors: {
      balanceTooLow: "Kredi bakiyesi en az 100 dolar olmalıdır.",
      aprOutOfRange: "APR %0 ile %30 arasında olmalıdır.",
      termOutOfRange: "Kredi vadesi 1 ile 30 yıl arasında olmalıdır.",
    },
    faq: [
      {
        q: "Erteleme süresinde kredime ne olur?",
        a: "Federal sübvansiyonsuz krediler ve özel kredilerin büyük çoğunluğunda erteleme süresinde ödeme yapılmasa da faiz işlemeye devam eder. Bu durum, geri ödeme başlamadan önce bakiyenizi artırır. Sübvansiyonlu federal kredilerde erteleme süresinde faiz işlemez.",
      },
      {
        q: "Ekstra ödeme yaparak ne kadar tasarruf edebilirim?",
        a: "Ekstra ödemeler anaparanızı daha hızlı azaltır; bu da zamanla daha az faiz birikmesi anlamına gelir. Ayda yalnızca 50–100 dolar fazla ödeyerek binlerce dolar ve yıllar tasarruf edebilirsiniz.",
      },
      {
        q: "Federal öğrenci kredilerinde standart geri ödeme planı nedir?",
        a: "Federal öğrenci kredileri için standart geri ödeme planı 10 yıl (120 aylık ödeme)dir. Gelire dayalı geri ödeme planları bu süreyi uzatır, ancak ödemeleri isteğe bağlı gelirinizin bir yüzdesi olarak sınırlar.",
      },
    ],
  },

  de: {
    title: "Studienkredit-Rechner",
    short: "Berechnen Sie Ihre monatliche Studienkredit-Rate und die Gesamtzinsen über die Laufzeit.",
    description:
      "Kostenloser Studienkredit-Rechner. Geben Sie Ihren Kreditsaldo, den Zinssatz und die Laufzeit ein, um monatliche Raten, Gesamtzinsen und Einsparungen durch Sondertilgungen zu berechnen.",
    keywords: [
      "Studienkredit Rechner",
      "Kreditrückzahlung berechnen",
      "Studentendarlehen Zinsen",
      "monatliche Kreditrate",
      "Kredittilgung",
      "Sondertilgung Einsparung",
      "Bildungskredit",
    ],
    inputs: {
      balance: {
        label: "Kreditsaldo",
        help: "Der aktuelle ausstehende Hauptbetrag Ihres Studienkredits.",
      },
      apr: {
        label: "Jährlicher Zinssatz (APR)",
        help: "Der jährliche Zinssatz Ihres Studienkredits.",
      },
      loanTerm: {
        label: "Kreditlaufzeit (Jahre)",
        help: "Die Anzahl der Jahre, über die Sie den Kredit zurückzahlen.",
      },
      graceMonths: {
        label: "Karenzzeit (Monate)",
        help: "Monate nach dem Abschluss, bevor Zahlungen beginnen. In dieser Zeit fallen weiterhin Zinsen an.",
      },
      extraMonthlyPayment: {
        label: "Zusätzliche monatliche Zahlung",
        help: "Betrag, der monatlich zusätzlich zur Mindestrate gezahlt wird, um den Kredit schneller abzubezahlen.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "Monatliche Rate",
        help: "Die erforderliche monatliche Rate basierend auf Ihrem Kreditsaldo nach der Karenzzeit.",
      },
      totalPaid: {
        label: "Gesamtzahlungsbetrag",
        help: "Gesamter Haupt- und Zinsbetrag, der über die gesamte Kreditlaufzeit gezahlt wird.",
      },
      totalInterest: {
        label: "Gesamte Zinszahlungen",
        help: "Gesamte Zinskosten über die Laufzeit des Kredits.",
      },
      balanceAfterGrace: {
        label: "Saldo nach Karenzzeit",
        help: "Ihr Kreditsaldo, nachdem während der Karenzzeit Zinsen aufgelaufen sind.",
      },
      monthsToPayoff: {
        label: "Monate bis zur vollständigen Tilgung",
        help: "Anzahl der Monate bis zur vollständigen Rückzahlung des Kredits (mit Sondertilgungen).",
      },
      interestSavedByExtra: {
        label: "Zinseinsparung durch Sondertilgungen",
        help: "Gesamte Zinseinsparung durch zusätzliche monatliche Zahlungen.",
      },
    },
    errors: {
      balanceTooLow: "Der Kreditsaldo muss mindestens 100 € betragen.",
      aprOutOfRange: "Der Zinssatz muss zwischen 0% und 30% liegen.",
      termOutOfRange: "Die Kreditlaufzeit muss zwischen 1 und 30 Jahren liegen.",
    },
    faq: [
      {
        q: "Was passiert mit meinem Kredit während der Karenzzeit?",
        a: "Bei den meisten nicht subventionierten Bundeskrediten und Privatkrediten fallen während der Karenzzeit weiterhin Zinsen an, auch wenn keine Zahlungen erforderlich sind. Dies erhöht Ihren Saldo vor Beginn der Rückzahlung.",
      },
      {
        q: "Wie viel spare ich durch Sondertilgungen?",
        a: "Sondertilgungen reduzieren Ihr Hauptkapital schneller, wodurch im Laufe der Zeit weniger Zinsen anfallen. Schon 50–100 € extra pro Monat können Tausende von Euro und Jahre der Rückzahlung einsparen.",
      },
      {
        q: "Was ist kapitalisierter Zins?",
        a: "Kapitalisierte Zinsen sind unbezahlte Zinsen, die Ihrem Hauptkapital hinzugerechnet werden, typischerweise am Ende einer Karenzzeit. Dadurch zahlen Sie Zinsen auf einen höheren Saldo und erhöhen die Gesamtkosten des Kredits.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Remboursement de Prêt Étudiant",
    short: "Calculez votre mensualité de prêt étudiant et les intérêts totaux sur la durée du prêt.",
    description:
      "Calculateur gratuit de remboursement de prêt étudiant. Entrez votre solde, le taux d'intérêt et la durée pour voir vos mensualités, les intérêts totaux et les économies réalisées grâce aux paiements supplémentaires.",
    keywords: [
      "calculateur prêt étudiant",
      "remboursement prêt",
      "calculateur dette étudiante",
      "mensualité prêt",
      "intérêts prêt étudiant",
      "amortissement prêt",
      "économie paiement supplémentaire",
    ],
    inputs: {
      balance: {
        label: "Solde du prêt",
        help: "Le capital restant dû de votre prêt étudiant.",
      },
      apr: {
        label: "Taux d'intérêt annuel (APR)",
        help: "Le taux annuel en pourcentage de votre prêt étudiant.",
      },
      loanTerm: {
        label: "Durée du prêt (années)",
        help: "Le nombre d'années sur lesquelles vous rembourserez le prêt.",
      },
      graceMonths: {
        label: "Période de grâce (mois)",
        help: "Mois après l'obtention du diplôme avant le début des remboursements. Les intérêts continuent de courir pendant cette période.",
      },
      extraMonthlyPayment: {
        label: "Paiement mensuel supplémentaire",
        help: "Montant additionnel versé chaque mois au-delà de la mensualité minimale pour rembourser le prêt plus rapidement.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "Mensualité",
        help: "La mensualité requise basée sur votre solde après la période de grâce.",
      },
      totalPaid: {
        label: "Total remboursé",
        help: "Capital et intérêts totaux remboursés sur toute la durée du prêt.",
      },
      totalInterest: {
        label: "Total des intérêts payés",
        help: "Montant total des intérêts sur la durée de vie du prêt.",
      },
      balanceAfterGrace: {
        label: "Solde après période de grâce",
        help: "Votre solde après accumulation des intérêts pendant la période de grâce.",
      },
      monthsToPayoff: {
        label: "Mois jusqu'au remboursement complet",
        help: "Nombre de mois jusqu'au remboursement complet du prêt (avec paiements supplémentaires).",
      },
      interestSavedByExtra: {
        label: "Intérêts économisés grâce aux paiements supplémentaires",
        help: "Total des intérêts que vous économisez en effectuant des paiements mensuels supplémentaires.",
      },
    },
    errors: {
      balanceTooLow: "Le solde du prêt doit être d'au moins 100 €.",
      aprOutOfRange: "Le taux annuel doit être compris entre 0% et 30%.",
      termOutOfRange: "La durée du prêt doit être comprise entre 1 et 30 ans.",
    },
    faq: [
      {
        q: "Que se passe-t-il pendant la période de grâce ?",
        a: "Pour la plupart des prêts fédéraux non subventionnés et des prêts privés, les intérêts continuent de s'accumuler pendant la période de grâce même si aucun paiement n'est requis. Cela augmente votre solde avant le début du remboursement.",
      },
      {
        q: "Combien puis-je économiser grâce aux paiements supplémentaires ?",
        a: "Les paiements supplémentaires réduisent plus rapidement votre capital, ce qui signifie moins d'intérêts au fil du temps. Même 50 à 100 € supplémentaires par mois peuvent vous faire économiser des milliers d'euros et des années de remboursement.",
      },
      {
        q: "Qu'est-ce que les intérêts capitalisés ?",
        a: "Les intérêts capitalisés sont des intérêts impayés qui s'ajoutent à votre capital, généralement à la fin d'une période de grâce. Une fois capitalisés, vous payez des intérêts sur un solde plus élevé, augmentant le coût total du prêt.",
      },
    ],
  },

  es: {
    title: "Calculadora de Pago de Préstamo Estudiantil",
    short: "Calcula tu pago mensual de préstamo estudiantil y los intereses totales durante la vida del préstamo.",
    description:
      "Calculadora gratuita de pago de préstamo estudiantil. Ingresa tu saldo, tasa de interés y plazo para ver tus pagos mensuales, intereses totales y ahorros por pagos adicionales.",
    keywords: [
      "calculadora préstamo estudiantil",
      "calculadora pago préstamo",
      "deuda estudiantil",
      "pago mensual préstamo",
      "intereses préstamo estudiantil",
      "amortización préstamo",
      "ahorro pago adicional",
    ],
    inputs: {
      balance: {
        label: "Saldo del Préstamo",
        help: "El saldo principal pendiente actual de tu préstamo estudiantil.",
      },
      apr: {
        label: "Tasa de Interés Anual (APR)",
        help: "La tasa anual en porcentaje de tu préstamo estudiantil.",
      },
      loanTerm: {
        label: "Plazo del Préstamo (años)",
        help: "El número de años en que pagarás el préstamo.",
      },
      graceMonths: {
        label: "Período de Gracia (meses)",
        help: "Meses después de graduarte antes de que comiencen los pagos. Los intereses siguen acumulándose durante este período.",
      },
      extraMonthlyPayment: {
        label: "Pago Mensual Adicional",
        help: "Monto adicional pagado cada mes más allá del mínimo requerido para pagar el préstamo más rápido.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "Pago Mensual",
        help: "El pago mensual requerido basado en tu saldo después del período de gracia.",
      },
      totalPaid: {
        label: "Total Pagado",
        help: "Capital e intereses totales pagados durante todo el plazo del préstamo.",
      },
      totalInterest: {
        label: "Total de Intereses Pagados",
        help: "Cargos totales de intereses durante la vida del préstamo.",
      },
      balanceAfterGrace: {
        label: "Saldo Después del Período de Gracia",
        help: "Tu saldo del préstamo después de que los intereses se acumulan durante el período de gracia.",
      },
      monthsToPayoff: {
        label: "Meses para Pagar Completamente",
        help: "Número de meses hasta que el préstamo esté completamente pagado (con pagos adicionales aplicados).",
      },
      interestSavedByExtra: {
        label: "Intereses Ahorrados por Pagos Adicionales",
        help: "Total de intereses que ahorras al hacer pagos mensuales adicionales.",
      },
    },
    errors: {
      balanceTooLow: "El saldo del préstamo debe ser al menos $100.",
      aprOutOfRange: "La tasa anual debe estar entre 0% y 30%.",
      termOutOfRange: "El plazo del préstamo debe estar entre 1 y 30 años.",
    },
    faq: [
      {
        q: "¿Qué ocurre con mi préstamo durante el período de gracia?",
        a: "Para la mayoría de los préstamos federales no subsidiados y préstamos privados, los intereses siguen acumulándose durante el período de gracia aunque no se requieran pagos. Esto aumenta tu saldo antes de que comience el reembolso.",
      },
      {
        q: "¿Cuánto puedo ahorrar haciendo pagos adicionales?",
        a: "Los pagos adicionales reducen tu capital más rápidamente, lo que significa menos intereses acumulados con el tiempo. Incluso $50–$100 adicionales por mes pueden ahorrar miles de dólares y años en tu cronograma de pago.",
      },
      {
        q: "¿Qué son los intereses capitalizados?",
        a: "Los intereses capitalizados son intereses no pagados que se agregan a tu saldo principal, típicamente al final de un período de gracia. Una vez capitalizados, pagas intereses sobre un saldo más alto, aumentando el costo total del préstamo.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Rimborso Prestito Studentesco",
    short: "Calcola la tua rata mensile del prestito studentesco e gli interessi totali per la durata del prestito.",
    description:
      "Calcolatore gratuito di rimborso prestito studentesco. Inserisci il saldo, il tasso di interesse e la durata per vedere le rate mensili, gli interessi totali e il risparmio grazie ai pagamenti extra.",
    keywords: [
      "calcolatore prestito studentesco",
      "rimborso prestito",
      "debito studentesco",
      "rata mensile prestito",
      "interessi prestito studentesco",
      "ammortamento prestito",
      "risparmio pagamento extra",
    ],
    inputs: {
      balance: {
        label: "Saldo del Prestito",
        help: "Il capitale residuo attuale del tuo prestito studentesco.",
      },
      apr: {
        label: "Tasso di Interesse Annuo (APR)",
        help: "Il tasso annuo percentuale del tuo prestito studentesco.",
      },
      loanTerm: {
        label: "Durata del Prestito (anni)",
        help: "Il numero di anni in cui rimborserai il prestito.",
      },
      graceMonths: {
        label: "Periodo di Grazia (mesi)",
        help: "Mesi dopo la laurea prima dell'inizio dei pagamenti. Gli interessi continuano a maturare durante questo periodo.",
      },
      extraMonthlyPayment: {
        label: "Pagamento Mensile Extra",
        help: "Importo aggiuntivo pagato ogni mese oltre al minimo richiesto per estinguere il prestito più velocemente.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "Rata Mensile",
        help: "La rata mensile richiesta in base al saldo dopo il periodo di grazia.",
      },
      totalPaid: {
        label: "Totale Pagato",
        help: "Capitale e interessi totali pagati per l'intera durata del prestito.",
      },
      totalInterest: {
        label: "Totale Interessi Pagati",
        help: "Totale degli interessi pagati per tutta la vita del prestito.",
      },
      balanceAfterGrace: {
        label: "Saldo Dopo il Periodo di Grazia",
        help: "Il saldo del prestito dopo l'accumulo degli interessi durante il periodo di grazia.",
      },
      monthsToPayoff: {
        label: "Mesi al Rimborso Completo",
        help: "Numero di mesi fino al rimborso completo del prestito (con pagamenti extra applicati).",
      },
      interestSavedByExtra: {
        label: "Interessi Risparmiati con Pagamenti Extra",
        help: "Totale degli interessi risparmiati effettuando pagamenti mensili aggiuntivi.",
      },
    },
    errors: {
      balanceTooLow: "Il saldo del prestito deve essere almeno 100 €.",
      aprOutOfRange: "Il tasso annuo deve essere compreso tra 0% e 30%.",
      termOutOfRange: "La durata del prestito deve essere compresa tra 1 e 30 anni.",
    },
    faq: [
      {
        q: "Cosa succede al mio prestito durante il periodo di grazia?",
        a: "Per la maggior parte dei prestiti federali non sovvenzionati e privati, gli interessi continuano a maturare durante il periodo di grazia anche se non sono richiesti pagamenti. Questo aumenta il saldo prima dell'inizio del rimborso.",
      },
      {
        q: "Quanto risparmio con i pagamenti extra?",
        a: "I pagamenti extra riducono più rapidamente il capitale, il che significa meno interessi maturati nel tempo. Anche 50–100 € extra al mese possono farti risparmiare migliaia di euro e anni di rimborso.",
      },
      {
        q: "Cosa sono gli interessi capitalizzati?",
        a: "Gli interessi capitalizzati sono interessi non pagati che vengono aggiunti al capitale, tipicamente alla fine di un periodo di grazia. Una volta capitalizzati, paghi interessi su un saldo più alto, aumentando il costo totale del prestito.",
      },
    ],
  },

  ar: {
    title: "حاسبة سداد القرض الطلابي",
    short: "احسب قسطك الشهري للقرض الطلابي وإجمالي الفوائد على مدى عمر القرض.",
    description:
      "حاسبة مجانية لسداد القرض الطلابي. أدخل رصيد قرضك ومعدل الفائدة والمدة لرؤية الأقساط الشهرية وإجمالي الفوائد والمدخرات من خلال الدفعات الإضافية.",
    keywords: [
      "حاسبة القرض الطلابي",
      "حاسبة سداد القرض",
      "الديون الطلابية",
      "القسط الشهري للقرض",
      "فوائد القرض الطلابي",
      "استهلاك القرض",
      "توفير الدفع الإضافي",
    ],
    inputs: {
      balance: {
        label: "رصيد القرض",
        help: "الرصيد الرئيسي المستحق الحالي لقرضك الطلابي.",
      },
      apr: {
        label: "معدل الفائدة السنوي (APR)",
        help: "معدل النسبة السنوية لقرضك الطلابي.",
      },
      loanTerm: {
        label: "مدة القرض (بالسنوات)",
        help: "عدد السنوات التي ستسدد فيها القرض.",
      },
      graceMonths: {
        label: "فترة السماح (بالأشهر)",
        help: "الأشهر بعد التخرج قبل بدء المدفوعات. تستمر الفوائد في التراكم خلال هذه الفترة.",
      },
      extraMonthlyPayment: {
        label: "الدفعة الشهرية الإضافية",
        help: "مبلغ إضافي يُدفع كل شهر بما يتجاوز الحد الأدنى المطلوب لسداد القرض بشكل أسرع.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "القسط الشهري",
        help: "القسط الشهري المطلوب بناءً على رصيد قرضك بعد فترة السماح.",
      },
      totalPaid: {
        label: "إجمالي المبلغ المدفوع",
        help: "إجمالي الأصل والفوائد المدفوعة على مدار كامل مدة القرض.",
      },
      totalInterest: {
        label: "إجمالي الفوائد المدفوعة",
        help: "إجمالي رسوم الفوائد على مدار حياة القرض.",
      },
      balanceAfterGrace: {
        label: "الرصيد بعد فترة السماح",
        help: "رصيد قرضك بعد تراكم الفوائد خلال فترة السماح.",
      },
      monthsToPayoff: {
        label: "أشهر حتى السداد الكامل",
        help: "عدد الأشهر حتى يُسدَّد القرض بالكامل (مع تطبيق الدفعات الإضافية).",
      },
      interestSavedByExtra: {
        label: "الفوائد الموفرة بالدفعات الإضافية",
        help: "إجمالي الفوائد التي توفرها من خلال الدفعات الشهرية الإضافية.",
      },
    },
    errors: {
      balanceTooLow: "يجب أن يكون رصيد القرض 100 دولار على الأقل.",
      aprOutOfRange: "يجب أن يكون معدل الفائدة السنوي بين 0% و30%.",
      termOutOfRange: "يجب أن تكون مدة القرض بين 1 و30 سنة.",
    },
    faq: [
      {
        q: "ماذا يحدث لقرضي خلال فترة السماح؟",
        a: "بالنسبة لمعظم القروض الفيدرالية غير المدعومة والقروض الخاصة، تستمر الفوائد في التراكم خلال فترة السماح حتى لو لم تكن المدفوعات مطلوبة. يؤدي ذلك إلى زيادة رصيدك قبل بدء السداد.",
      },
      {
        q: "كم يمكنني توفيره من خلال الدفعات الإضافية؟",
        a: "تُقلل الدفعات الإضافية من رأس المال بشكل أسرع، مما يعني فوائد أقل تتراكم بمرور الوقت. حتى 50-100 دولار إضافية شهريًا يمكنها توفير آلاف الدولارات وسنوات من جدول السداد.",
      },
      {
        q: "ما هي الفوائد المرسملة؟",
        a: "الفوائد المرسملة هي فوائد غير مدفوعة تُضاف إلى رأس مالك الرئيسي، عادةً في نهاية فترة السماح. بمجرد رسملتها، تدفع فوائد على رصيد أعلى، مما يزيد التكلفة الإجمالية للقرض.",
      },
    ],
  },

  ru: {
    title: "Калькулятор погашения студенческого кредита",
    short: "Рассчитайте ежемесячный платёж по студенческому кредиту и общую сумму процентов за весь срок.",
    description:
      "Бесплатный калькулятор погашения студенческого кредита. Введите остаток, процентную ставку и срок, чтобы увидеть ежемесячные платежи, общую сумму процентов и экономию от дополнительных платежей.",
    keywords: [
      "калькулятор студенческого кредита",
      "расчёт погашения кредита",
      "студенческий долг",
      "ежемесячный платёж по кредиту",
      "проценты по студенческому кредиту",
      "амортизация кредита",
      "экономия от досрочного погашения",
    ],
    inputs: {
      balance: {
        label: "Остаток долга",
        help: "Текущий остаток основного долга по студенческому кредиту.",
      },
      apr: {
        label: "Годовая процентная ставка (APR)",
        help: "Годовая процентная ставка по вашему студенческому кредиту.",
      },
      loanTerm: {
        label: "Срок кредита (лет)",
        help: "Количество лет, в течение которых вы будете погашать кредит.",
      },
      graceMonths: {
        label: "Льготный период (месяцев)",
        help: "Месяцы после окончания учёбы до начала платежей. В этот период проценты продолжают начисляться.",
      },
      extraMonthlyPayment: {
        label: "Дополнительный ежемесячный платёж",
        help: "Сумма сверх обязательного минимума, уплачиваемая каждый месяц для ускорения погашения.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "Ежемесячный платёж",
        help: "Обязательный ежемесячный платёж, рассчитанный на основе остатка после льготного периода.",
      },
      totalPaid: {
        label: "Общая сумма выплат",
        help: "Суммарные выплаты основного долга и процентов за весь срок кредита.",
      },
      totalInterest: {
        label: "Общая сумма процентов",
        help: "Общая сумма начисленных процентов за весь срок кредита.",
      },
      balanceAfterGrace: {
        label: "Остаток после льготного периода",
        help: "Ваш остаток долга после начисления процентов за льготный период.",
      },
      monthsToPayoff: {
        label: "Месяцев до полного погашения",
        help: "Количество месяцев до полного погашения кредита (с учётом дополнительных платежей).",
      },
      interestSavedByExtra: {
        label: "Экономия процентов за счёт доплат",
        help: "Общая сумма процентов, сэкономленных за счёт дополнительных ежемесячных платежей.",
      },
    },
    errors: {
      balanceTooLow: "Остаток долга должен быть не менее 100 руб.",
      aprOutOfRange: "Процентная ставка должна быть от 0% до 30%.",
      termOutOfRange: "Срок кредита должен быть от 1 до 30 лет.",
    },
    faq: [
      {
        q: "Что происходит с кредитом в льготный период?",
        a: "Для большинства несубсидируемых федеральных и частных кредитов проценты продолжают начисляться в льготный период, даже если платежи не требуются. Это увеличивает ваш остаток до начала погашения.",
      },
      {
        q: "Сколько можно сэкономить на дополнительных платежах?",
        a: "Дополнительные платежи быстрее уменьшают основной долг, что означает меньше начисленных процентов. Даже 50–100 руб. сверху в месяц могут сэкономить тысячи рублей и годы выплат.",
      },
      {
        q: "Что такое капитализированные проценты?",
        a: "Капитализированные проценты — это неоплаченные проценты, которые прибавляются к основному долгу, как правило, в конце льготного периода. После капитализации вы платите проценты на более высокий остаток, увеличивая общую стоимость кредита.",
      },
    ],
  },

  zh: {
    title: "学生贷款还款计算器",
    short: "计算您的每月学生贷款还款额及贷款期间的总利息。",
    description:
      "免费学生贷款还款计算器。输入贷款余额、年利率和还款期限，查看每月还款额、总利息以及额外还款带来的节省。",
    keywords: [
      "学生贷款计算器",
      "贷款还款计算器",
      "学生债务计算",
      "每月贷款还款",
      "学生贷款利息",
      "贷款摊销",
      "额外还款节省",
    ],
    inputs: {
      balance: {
        label: "贷款余额",
        help: "您学生贷款当前未偿还的本金余额。",
      },
      apr: {
        label: "年利率 (APR)",
        help: "您学生贷款的年利率百分比。",
      },
      loanTerm: {
        label: "贷款期限（年）",
        help: "您将偿还贷款的年数。",
      },
      graceMonths: {
        label: "宽限期（月）",
        help: "毕业后到开始还款之间的月数。在此期间利息继续积累。",
      },
      extraMonthlyPayment: {
        label: "每月额外还款",
        help: "每月在最低还款额之外额外支付的金额，以便更快还清贷款。",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "每月还款额",
        help: "根据宽限期后的贷款余额计算的每月必须还款额。",
      },
      totalPaid: {
        label: "总还款额",
        help: "整个贷款期间支付的本金和利息总额。",
      },
      totalInterest: {
        label: "总利息",
        help: "贷款期间的总利息费用。",
      },
      balanceAfterGrace: {
        label: "宽限期后余额",
        help: "宽限期内利息积累后的贷款余额。",
      },
      monthsToPayoff: {
        label: "还清贷款所需月数",
        help: "贷款完全还清所需的月数（含额外还款）。",
      },
      interestSavedByExtra: {
        label: "额外还款节省的利息",
        help: "通过每月额外还款节省的总利息金额。",
      },
    },
    errors: {
      balanceTooLow: "贷款余额至少为100元。",
      aprOutOfRange: "年利率必须在0%至30%之间。",
      termOutOfRange: "贷款期限必须在1至30年之间。",
    },
    faq: [
      {
        q: "宽限期内我的贷款会怎样？",
        a: "对于大多数非补贴联邦贷款和私人贷款，即使不需要还款，利息也会在宽限期内继续积累。这会在还款开始前增加您的余额。",
      },
      {
        q: "额外还款能节省多少？",
        a: "额外还款能更快地减少本金，意味着随时间积累的利息更少。每月额外还50至100元就能节省数千元和数年的还款时间。",
      },
      {
        q: "什么是资本化利息？",
        a: "资本化利息是未支付的利息，通常在宽限期结束时加入本金余额。一旦资本化，您将对更高的余额支付利息，增加贷款总成本。",
      },
    ],
  },

  ja: {
    title: "学生ローン返済計算機",
    short: "毎月の学生ローン返済額とローン期間中の総利息を計算します。",
    description:
      "無料の学生ローン返済計算機。ローン残高、金利、返済期間を入力して、毎月の返済額、総利息、追加返済による節約額を確認できます。",
    keywords: [
      "学生ローン計算機",
      "ローン返済計算",
      "奨学金計算",
      "毎月の返済額",
      "学生ローン利息",
      "ローン償還",
      "繰り上げ返済節約",
    ],
    inputs: {
      balance: {
        label: "ローン残高",
        help: "学生ローンの現在の未払い元本残高。",
      },
      apr: {
        label: "年利率（APR）",
        help: "学生ローンの年間利率。",
      },
      loanTerm: {
        label: "返済期間（年）",
        help: "ローンを返済する年数。",
      },
      graceMonths: {
        label: "猶予期間（ヶ月）",
        help: "卒業後、返済が始まるまでの月数。この期間も利息は発生し続けます。",
      },
      extraMonthlyPayment: {
        label: "毎月の追加返済額",
        help: "ローンを早く完済するために毎月の最低返済額に加えて支払う追加金額。",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "毎月の返済額",
        help: "猶予期間後の残高に基づいて計算される毎月の必要返済額。",
      },
      totalPaid: {
        label: "総返済額",
        help: "ローン全期間にわたって支払う元本と利息の合計。",
      },
      totalInterest: {
        label: "総利息支払額",
        help: "ローン期間中の総利息費用。",
      },
      balanceAfterGrace: {
        label: "猶予期間後の残高",
        help: "猶予期間中に利息が積み重なった後のローン残高。",
      },
      monthsToPayoff: {
        label: "完済までの月数",
        help: "ローンが完全に完済されるまでの月数（追加返済を含む）。",
      },
      interestSavedByExtra: {
        label: "追加返済による利息節約額",
        help: "毎月追加返済を行うことで節約できる総利息額。",
      },
    },
    errors: {
      balanceTooLow: "ローン残高は最低100円以上である必要があります。",
      aprOutOfRange: "年利率は0%から30%の範囲内である必要があります。",
      termOutOfRange: "返済期間は1年から30年の範囲内である必要があります。",
    },
    faq: [
      {
        q: "猶予期間中、ローンはどうなりますか？",
        a: "ほとんどの非補助連邦ローンおよびプライベートローンでは、猶予期間中も返済は不要ですが、利息は引き続き発生します。これにより返済開始前に残高が増加します。",
      },
      {
        q: "追加返済でどれだけ節約できますか？",
        a: "追加返済は元本をより早く減少させるため、時間の経過とともに発生する利息が少なくなります。毎月わずか5,000〜10,000円の追加返済でも、数十万円と数年分の返済を節約できます。",
      },
      {
        q: "資本化利息とは何ですか？",
        a: "資本化利息とは未払い利息のことで、通常は猶予期間終了時に元本残高に加算されます。一度資本化されると、より高い残高に対して利息を支払うことになり、ローンの総コストが増加します。",
      },
    ],
  },

  ko: {
    title: "학생 대출 상환 계산기",
    short: "매월 학생 대출 납부액과 대출 기간 총 이자를 계산하세요.",
    description:
      "무료 학생 대출 상환 계산기. 대출 잔액, 연이율, 대출 기간을 입력하여 월 납부액, 총 이자, 추가 납부 시 절약 금액을 확인하세요.",
    keywords: [
      "학생 대출 계산기",
      "대출 상환 계산기",
      "학자금 대출 계산",
      "월 대출 납부액",
      "학생 대출 이자",
      "대출 상각",
      "추가 납부 절약",
    ],
    inputs: {
      balance: {
        label: "대출 잔액",
        help: "현재 학생 대출의 미상환 원금 잔액.",
      },
      apr: {
        label: "연간 이자율 (APR)",
        help: "학생 대출의 연간 이자율.",
      },
      loanTerm: {
        label: "대출 기간 (년)",
        help: "대출을 상환할 연수.",
      },
      graceMonths: {
        label: "유예 기간 (개월)",
        help: "졸업 후 납부가 시작되기 전 기간(개월). 이 기간 동안에도 이자는 계속 발생합니다.",
      },
      extraMonthlyPayment: {
        label: "월 추가 납부액",
        help: "대출을 더 빨리 상환하기 위해 매달 최소 납부액 외에 추가로 납부하는 금액.",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "월 납부액",
        help: "유예 기간 후 대출 잔액을 기준으로 한 필수 월 납부액.",
      },
      totalPaid: {
        label: "총 납부액",
        help: "대출 전 기간 동안 납부하는 원금과 이자의 합계.",
      },
      totalInterest: {
        label: "총 납부 이자",
        help: "대출 기간 전체의 총 이자 비용.",
      },
      balanceAfterGrace: {
        label: "유예 기간 후 잔액",
        help: "유예 기간 동안 이자가 누적된 후의 대출 잔액.",
      },
      monthsToPayoff: {
        label: "상환 완료까지 걸리는 개월",
        help: "추가 납부 적용 시 대출이 완전히 상환될 때까지의 개월 수.",
      },
      interestSavedByExtra: {
        label: "추가 납부로 절약한 이자",
        help: "월 추가 납부를 통해 절약하는 총 이자 금액.",
      },
    },
    errors: {
      balanceTooLow: "대출 잔액은 최소 100원 이상이어야 합니다.",
      aprOutOfRange: "연이율은 0%에서 30% 사이여야 합니다.",
      termOutOfRange: "대출 기간은 1년에서 30년 사이여야 합니다.",
    },
    faq: [
      {
        q: "유예 기간 동안 대출에는 어떤 일이 생기나요?",
        a: "대부분의 비보조 연방 대출 및 민간 대출의 경우, 유예 기간 동안 납부가 필요하지 않더라도 이자는 계속 발생합니다. 이는 상환 시작 전에 잔액을 늘립니다.",
      },
      {
        q: "추가 납부로 얼마나 절약할 수 있나요?",
        a: "추가 납부는 원금을 더 빨리 줄여 시간이 지남에 따라 이자가 덜 발생합니다. 매달 5~10만 원만 추가로 납부해도 수백만 원과 수년의 상환 기간을 절약할 수 있습니다.",
      },
      {
        q: "자본화 이자란 무엇인가요?",
        a: "자본화 이자는 미납 이자가 원금 잔액에 더해지는 것으로, 일반적으로 유예 기간 종료 시 발생합니다. 자본화 후에는 더 높은 잔액에 이자가 부과되어 대출 총 비용이 증가합니다.",
      },
    ],
  },

  hi: {
    title: "छात्र ऋण भुगतान कैलकुलेटर",
    short: "अपनी मासिक छात्र ऋण किस्त और ऋण अवधि में कुल ब्याज की गणना करें।",
    description:
      "मुफ़्त छात्र ऋण भुगतान कैलकुलेटर। अपना ऋण शेष, ब्याज दर और अवधि दर्ज करें और मासिक किस्तें, कुल ब्याज तथा अतिरिक्त भुगतान से होने वाली बचत देखें।",
    keywords: [
      "छात्र ऋण कैलकुलेटर",
      "ऋण भुगतान कैलकुलेटर",
      "शिक्षा ऋण",
      "मासिक ऋण किस्त",
      "छात्र ऋण ब्याज",
      "ऋण परिशोधन",
      "अतिरिक्त भुगतान बचत",
    ],
    inputs: {
      balance: {
        label: "ऋण शेष",
        help: "आपके छात्र ऋण का वर्तमान बकाया मूलधन।",
      },
      apr: {
        label: "वार्षिक ब्याज दर (APR)",
        help: "आपके छात्र ऋण पर वार्षिक प्रतिशत दर।",
      },
      loanTerm: {
        label: "ऋण अवधि (वर्ष)",
        help: "जिस वर्षों में आप ऋण चुकाएंगे।",
      },
      graceMonths: {
        label: "अनुग्रह अवधि (महीने)",
        help: "स्नातक के बाद भुगतान शुरू होने से पहले के महीने। इस अवधि में ब्याज जमा होता रहता है।",
      },
      extraMonthlyPayment: {
        label: "अतिरिक्त मासिक भुगतान",
        help: "ऋण जल्दी चुकाने के लिए हर महीने आवश्यक न्यूनतम से अधिक भुगतान की गई राशि।",
      },
    },
    outputs: {
      monthlyPayment: {
        label: "मासिक किस्त",
        help: "अनुग्रह अवधि के बाद आपके ऋण शेष के आधार पर आवश्यक मासिक किस्त।",
      },
      totalPaid: {
        label: "कुल भुगतान राशि",
        help: "पूरी ऋण अवधि में भुगतान किया गया कुल मूलधन और ब्याज।",
      },
      totalInterest: {
        label: "कुल ब्याज भुगतान",
        help: "ऋण की पूरी अवधि में कुल ब्याज शुल्क।",
      },
      balanceAfterGrace: {
        label: "अनुग्रह अवधि के बाद शेष",
        help: "अनुग्रह अवधि के दौरान ब्याज जमा होने के बाद आपका ऋण शेष।",
      },
      monthsToPayoff: {
        label: "भुगतान पूर्ण होने तक महीने",
        help: "ऋण पूरी तरह चुकाने तक के महीनों की संख्या (अतिरिक्त भुगतान सहित)।",
      },
      interestSavedByExtra: {
        label: "अतिरिक्त भुगतान से ब्याज बचत",
        help: "अतिरिक्त मासिक भुगतान करके बचाई गई कुल ब्याज राशि।",
      },
    },
    errors: {
      balanceTooLow: "ऋण शेष कम से कम ₹100 होना चाहिए।",
      aprOutOfRange: "वार्षिक ब्याज दर 0% और 30% के बीच होनी चाहिए।",
      termOutOfRange: "ऋण अवधि 1 से 30 वर्ष के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "अनुग्रह अवधि के दौरान मेरे ऋण का क्या होता है?",
        a: "अधिकांश असब्सिडीकृत संघीय ऋण और निजी ऋणों के लिए, अनुग्रह अवधि के दौरान ब्याज जमा होता रहता है, भले ही भुगतान आवश्यक न हो। इससे चुकाना शुरू होने से पहले आपका शेष बढ़ जाता है।",
      },
      {
        q: "अतिरिक्त भुगतान से कितनी बचत हो सकती है?",
        a: "अतिरिक्त भुगतान मूलधन को तेज़ी से कम करता है, जिसका मतलब है समय के साथ कम ब्याज। प्रति माह केवल ₹5,000-10,000 अतिरिक्त भुगतान से आप लाखों रुपये और कई साल बचा सकते हैं।",
      },
      {
        q: "पूंजीकृत ब्याज क्या होता है?",
        a: "पूंजीकृत ब्याज अवैतनिक ब्याज है जो आपके मूलधन में जोड़ा जाता है, आमतौर पर अनुग्रह अवधि के अंत में। एक बार पूंजीकृत होने के बाद, आप उच्च शेष पर ब्याज देते हैं, जिससे ऋण की कुल लागत बढ़ जाती है।",
      },
    ],
  },
};

export default i18n;
