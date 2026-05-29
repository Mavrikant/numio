import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "CD Yield Calculator",
    short: "Calculate the yield and future value of a certificate of deposit with compound interest.",
    description:
      "Free CD yield calculator. Enter your principal, APR, and term to see APY, future value, interest earned, and early withdrawal penalty impact.",
    keywords: [
      "CD calculator",
      "certificate of deposit calculator",
      "CD yield",
      "APY calculator",
      "savings calculator",
      "CD interest calculator",
      "bank deposit calculator",
    ],
    inputs: {
      principal: {
        label: "Principal",
        help: "The initial amount deposited into the certificate of deposit.",
      },
      apr: {
        label: "Annual Interest Rate (APR)",
        help: "The stated annual interest rate on the CD, before compounding.",
      },
      termMonths: {
        label: "Term (months)",
        help: "The duration of the CD in months. Common terms: 3, 6, 12, 24, 36, 60 months.",
      },
      compoundFreq: {
        label: "Compounding Frequency",
        help: "How often interest is compounded and added to the balance.",
      },
      earlyWithdrawalMonths: {
        label: "Early Withdrawal Penalty Period (months)",
        help: "Number of months of interest lost as a penalty for early withdrawal. Set to 0 if holding to maturity.",
      },
    },
    outputs: {
      futureValue: {
        label: "Future Value at Maturity",
        help: "Total value of the CD at maturity, including principal and all compounded interest.",
      },
      interestEarned: {
        label: "Interest Earned",
        help: "Total interest accumulated over the full CD term.",
      },
      apy: {
        label: "APY",
        help: "Annual Percentage Yield — the effective annual return accounting for compounding.",
      },
      effectiveYield: {
        label: "Effective Yield",
        help: "Total return as a percentage of principal over the full CD term.",
      },
      earlyWithdrawalPenalty: {
        label: "Early Withdrawal Penalty",
        help: "Interest forfeited if you withdraw before maturity, based on the penalty period.",
      },
      netReturnAfterPenalty: {
        label: "Net Return After Penalty",
        help: "Interest earned minus early withdrawal penalty.",
      },
    },
    options: {
      compoundFreq: {
        "1": "Annually",
        "4": "Quarterly",
        "12": "Monthly",
        "365": "Daily",
      },
    },
    errors: {
      principalTooLow: "Principal must be at least $1.",
      aprOutOfRange: "APR must be between 0% and 20%.",
      termOutOfRange: "Term must be between 1 and 120 months.",
    },
    faq: [
      {
        q: "What is the difference between APR and APY?",
        a: "APR (Annual Percentage Rate) is the stated interest rate before compounding. APY (Annual Percentage Yield) reflects the effective annual return after accounting for compounding frequency. A CD with 5% APR compounded monthly has an APY of approximately 5.116%. The more frequently interest compounds, the higher the APY relative to APR.",
      },
      {
        q: "Are CDs insured by the FDIC?",
        a: "Yes. CDs held at FDIC-member banks are insured up to $250,000 per depositor, per insured bank, for each account ownership category. Credit union CDs are similarly insured by the NCUA. This makes CDs one of the safest savings vehicles available.",
      },
      {
        q: "What happens if interest rates rise after I open a CD?",
        a: "Fixed-rate CDs lock in your rate for the full term. If rates rise, you miss out on higher yields unless your CD matures. CD laddering—distributing deposits across multiple terms—helps manage this risk by keeping some money accessible to reinvest at higher rates.",
      },
      {
        q: "Can I add money to a CD after opening it?",
        a: "Traditional CDs do not allow additional deposits after opening. Some banks offer 'add-on CDs' that permit periodic deposits, typically at a lower rate. If you want to make regular contributions, a high-yield savings account may be more flexible.",
      },
      {
        q: "How are CD earnings taxed?",
        a: "CD interest is taxed as ordinary income in the year it is earned (not necessarily when received). Your bank will issue a 1099-INT form if you earn more than $10 in interest. Interest inside an IRA CD may be tax-deferred or tax-free depending on the account type.",
      },
    ],
  },
  pt: {
    title: "CD Yield Calculator",
    short: "Calculate the yield and future value of a certificate of deposit with compound interest.",
    description:
      "Free CD yield calculator. Enter your principal, APR, and term to see APY, future value, interest earned, and early withdrawal penalty impact.",
    keywords: [
      "CD calculator",
      "certificate of deposit calculator",
      "CD yield",
      "APY calculator",
      "savings calculator",
      "CD interest calculator",
      "bank deposit calculator",
    ],
    inputs: {
      principal: {
        label: "Principal",
        help: "The initial amount deposited into the certificate of deposit.",
      },
      apr: {
        label: "Annual Interest Rate (APR)",
        help: "The stated annual interest rate on the CD, before compounding.",
      },
      termMonths: {
        label: "Term (months)",
        help: "The duration of the CD in months. Common terms: 3, 6, 12, 24, 36, 60 months.",
      },
      compoundFreq: {
        label: "Compounding Frequency",
        help: "How often interest is compounded and added to the balance.",
      },
      earlyWithdrawalMonths: {
        label: "Early Withdrawal Penalty Period (months)",
        help: "Number of months of interest lost as a penalty for early withdrawal. Set to 0 if holding to maturity.",
      },
    },
    outputs: {
      futureValue: {
        label: "Future Value at Maturity",
        help: "Total value of the CD at maturity, including principal and all compounded interest.",
      },
      interestEarned: {
        label: "Interest Earned",
        help: "Total interest accumulated over the full CD term.",
      },
      apy: {
        label: "APY",
        help: "Annual Percentage Yield — the effective annual return accounting for compounding.",
      },
      effectiveYield: {
        label: "Effective Yield",
        help: "Total return as a percentage of principal over the full CD term.",
      },
      earlyWithdrawalPenalty: {
        label: "Early Withdrawal Penalty",
        help: "Interest forfeited if you withdraw before maturity, based on the penalty period.",
      },
      netReturnAfterPenalty: {
        label: "Net Return After Penalty",
        help: "Interest earned minus early withdrawal penalty.",
      },
    },
    options: {
      compoundFreq: {
        "1": "Annually",
        "4": "Quarterly",
        "12": "Monthly",
        "365": "Daily",
      },
    },
    errors: {
      principalTooLow: "Principal must be at least $1.",
      aprOutOfRange: "APR must be between 0% and 20%.",
      termOutOfRange: "Term must be between 1 and 120 months.",
    },
    faq: [
      {
        q: "What is the difference between APR and APY?",
        a: "APR (Annual Percentage Rate) is the stated interest rate before compounding. APY (Annual Percentage Yield) reflects the effective annual return after accounting for compounding frequency. A CD with 5% APR compounded monthly has an APY of approximately 5.116%. The more frequently interest compounds, the higher the APY relative to APR.",
      },
      {
        q: "Are CDs insured by the FDIC?",
        a: "Yes. CDs held at FDIC-member banks are insured up to $250,000 per depositor, per insured bank, for each account ownership category. Credit union CDs are similarly insured by the NCUA. This makes CDs one of the safest savings vehicles available.",
      },
      {
        q: "What happens if interest rates rise after I open a CD?",
        a: "Fixed-rate CDs lock in your rate for the full term. If rates rise, you miss out on higher yields unless your CD matures. CD laddering—distributing deposits across multiple terms—helps manage this risk by keeping some money accessible to reinvest at higher rates.",
      },
      {
        q: "Can I add money to a CD after opening it?",
        a: "Traditional CDs do not allow additional deposits after opening. Some banks offer 'add-on CDs' that permit periodic deposits, typically at a lower rate. If you want to make regular contributions, a high-yield savings account may be more flexible.",
      },
      {
        q: "How are CD earnings taxed?",
        a: "CD interest is taxed as ordinary income in the year it is earned (not necessarily when received). Your bank will issue a 1099-INT form if you earn more than $10 in interest. Interest inside an IRA CD may be tax-deferred or tax-free depending on the account type.",
      },
    ],
  },
  id: {
    title: "CD Yield Calculator",
    short: "Calculate the yield and future value of a certificate of deposit with compound interest.",
    description:
      "Free CD yield calculator. Enter your principal, APR, and term to see APY, future value, interest earned, and early withdrawal penalty impact.",
    keywords: [
      "CD calculator",
      "certificate of deposit calculator",
      "CD yield",
      "APY calculator",
      "savings calculator",
      "CD interest calculator",
      "bank deposit calculator",
    ],
    inputs: {
      principal: {
        label: "Principal",
        help: "The initial amount deposited into the certificate of deposit.",
      },
      apr: {
        label: "Annual Interest Rate (APR)",
        help: "The stated annual interest rate on the CD, before compounding.",
      },
      termMonths: {
        label: "Term (months)",
        help: "The duration of the CD in months. Common terms: 3, 6, 12, 24, 36, 60 months.",
      },
      compoundFreq: {
        label: "Compounding Frequency",
        help: "How often interest is compounded and added to the balance.",
      },
      earlyWithdrawalMonths: {
        label: "Early Withdrawal Penalty Period (months)",
        help: "Number of months of interest lost as a penalty for early withdrawal. Set to 0 if holding to maturity.",
      },
    },
    outputs: {
      futureValue: {
        label: "Future Value at Maturity",
        help: "Total value of the CD at maturity, including principal and all compounded interest.",
      },
      interestEarned: {
        label: "Interest Earned",
        help: "Total interest accumulated over the full CD term.",
      },
      apy: {
        label: "APY",
        help: "Annual Percentage Yield — the effective annual return accounting for compounding.",
      },
      effectiveYield: {
        label: "Effective Yield",
        help: "Total return as a percentage of principal over the full CD term.",
      },
      earlyWithdrawalPenalty: {
        label: "Early Withdrawal Penalty",
        help: "Interest forfeited if you withdraw before maturity, based on the penalty period.",
      },
      netReturnAfterPenalty: {
        label: "Net Return After Penalty",
        help: "Interest earned minus early withdrawal penalty.",
      },
    },
    options: {
      compoundFreq: {
        "1": "Annually",
        "4": "Quarterly",
        "12": "Monthly",
        "365": "Daily",
      },
    },
    errors: {
      principalTooLow: "Principal must be at least $1.",
      aprOutOfRange: "APR must be between 0% and 20%.",
      termOutOfRange: "Term must be between 1 and 120 months.",
    },
    faq: [
      {
        q: "What is the difference between APR and APY?",
        a: "APR (Annual Percentage Rate) is the stated interest rate before compounding. APY (Annual Percentage Yield) reflects the effective annual return after accounting for compounding frequency. A CD with 5% APR compounded monthly has an APY of approximately 5.116%. The more frequently interest compounds, the higher the APY relative to APR.",
      },
      {
        q: "Are CDs insured by the FDIC?",
        a: "Yes. CDs held at FDIC-member banks are insured up to $250,000 per depositor, per insured bank, for each account ownership category. Credit union CDs are similarly insured by the NCUA. This makes CDs one of the safest savings vehicles available.",
      },
      {
        q: "What happens if interest rates rise after I open a CD?",
        a: "Fixed-rate CDs lock in your rate for the full term. If rates rise, you miss out on higher yields unless your CD matures. CD laddering—distributing deposits across multiple terms—helps manage this risk by keeping some money accessible to reinvest at higher rates.",
      },
      {
        q: "Can I add money to a CD after opening it?",
        a: "Traditional CDs do not allow additional deposits after opening. Some banks offer 'add-on CDs' that permit periodic deposits, typically at a lower rate. If you want to make regular contributions, a high-yield savings account may be more flexible.",
      },
      {
        q: "How are CD earnings taxed?",
        a: "CD interest is taxed as ordinary income in the year it is earned (not necessarily when received). Your bank will issue a 1099-INT form if you earn more than $10 in interest. Interest inside an IRA CD may be tax-deferred or tax-free depending on the account type.",
      },
    ],
  },


  tr: {
    title: "Vadeli Mevduat Getiri Hesaplayıcısı",
    short: "Vadeli mevduat sertifikanızın getirisi ve gelecek değerini bileşik faizle hesaplayın.",
    description:
      "Ücretsiz vadeli mevduat getiri hesaplayıcısı. Anaparanızı, APR değerinizi ve vadenizi girerek APY, gelecek değer, kazanılan faiz ve erken çekim cezasını öğrenin.",
    keywords: [
      "vadeli mevduat hesaplayıcısı",
      "mevduat faizi hesaplama",
      "APY hesaplayıcı",
      "banka mevduatı hesaplayıcısı",
      "faiz hesaplama",
      "tasarruf hesaplayıcısı",
      "bileşik faiz mevduat",
    ],
    inputs: {
      principal: {
        label: "Anapara",
        help: "Vadeli mevduata yatırılan başlangıç tutarı.",
      },
      apr: {
        label: "Yıllık Faiz Oranı (APR)",
        help: "CD'nin bileşik faiz öncesindeki belirtilen yıllık faiz oranı.",
      },
      termMonths: {
        label: "Vade (ay)",
        help: "Vadeli mevduatın ay cinsinden süresi. Yaygın vadeler: 3, 6, 12, 24, 36, 60 ay.",
      },
      compoundFreq: {
        label: "Bileşim Sıklığı",
        help: "Faizin ne sıklıkta bileşimlenip bakiyeye eklendiği.",
      },
      earlyWithdrawalMonths: {
        label: "Erken Çekim Ceza Süresi (ay)",
        help: "Erken çekim cezası olarak kaybedilen faizin ay sayısı. Vadeye kadar tutacaksanız 0 girin.",
      },
    },
    outputs: {
      futureValue: {
        label: "Vade Sonu Değeri",
        help: "Anapara ve biriken tüm faiz dahil vadeli mevduatın vade sonundaki toplam değeri.",
      },
      interestEarned: {
        label: "Kazanılan Faiz",
        help: "Tüm vade boyunca biriken toplam faiz.",
      },
      apy: {
        label: "APY",
        help: "Yıllık Yüzde Getiri — bileşimi dikkate alan etkin yıllık getiri.",
      },
      effectiveYield: {
        label: "Etkin Getiri",
        help: "Tüm vade boyunca anaparanın yüzdesi olarak toplam getiri.",
      },
      earlyWithdrawalPenalty: {
        label: "Erken Çekim Cezası",
        help: "Vadeden önce çekilirse ceza süresi esas alınarak kaybedilen faiz.",
      },
      netReturnAfterPenalty: {
        label: "Ceza Sonrası Net Getiri",
        help: "Kazanılan faiz eksi erken çekim cezası.",
      },
    },
    options: {
      compoundFreq: {
        "1": "Yıllık",
        "4": "Üç Aylık",
        "12": "Aylık",
        "365": "Günlük",
      },
    },
    errors: {
      principalTooLow: "Anapara en az 1 TL olmalıdır.",
      aprOutOfRange: "APR %0 ile %20 arasında olmalıdır.",
      termOutOfRange: "Vade 1 ile 120 ay arasında olmalıdır.",
    },
    faq: [
      {
        q: "APR ile APY arasındaki fark nedir?",
        a: "APR (Yıllık Faiz Oranı), bileşim öncesindeki belirtilen faiz oranıdır. APY (Yıllık Yüzde Getiri), bileşim sıklığını hesaba katarak etkin yıllık getiriyi yansıtır. Aylık bileşimli %5 APR'ye sahip bir CD'nin APY'si yaklaşık %5,116 olur.",
      },
      {
        q: "Vadeli mevduat sertifikaları FDIC tarafından güvence altında mıdır?",
        a: "Evet, FDIC üyesi bankalardaki CD'ler mevduat sahibi başına, sigortalı banka başına, her hesap sahipliği kategorisi için 250.000 dolara kadar güvence altındadır.",
      },
      {
        q: "CD açtıktan sonra faiz oranları yükselirse ne olur?",
        a: "Sabit faizli CD'ler oranı tüm vade süresince kilitler. Oranlar yükselirse, CD vadesine gelene kadar daha yüksek getirilerden faydalanamayabilirsiniz. CD basamaklandırması bu riski yönetmenize yardımcı olabilir.",
      },
    ],
  },

  de: {
    title: "Festgeld-Rendite-Rechner",
    short: "Berechnen Sie den Ertrag und den zukünftigen Wert Ihres Festgeldkontos mit Zinseszins.",
    description:
      "Kostenloser Festgeld-Rendite-Rechner. Geben Sie Kapital, Zinssatz und Laufzeit ein, um APY, zukünftigen Wert, Zinserträge und die Auswirkung einer vorzeitigen Kündigung zu berechnen.",
    keywords: [
      "Festgeld Rechner",
      "Festgeld Rendite",
      "APY Rechner",
      "Sparrechner",
      "Zinsen berechnen",
      "Tagesgeld Rechner",
      "Bankeinlage Rechner",
    ],
    inputs: {
      principal: {
        label: "Anlagesumme",
        help: "Der anfänglich eingezahlte Betrag für das Festgeldkonto.",
      },
      apr: {
        label: "Jährlicher Zinssatz (APR)",
        help: "Der angegebene jährliche Zinssatz des Festgeldes vor der Verzinsung.",
      },
      termMonths: {
        label: "Laufzeit (Monate)",
        help: "Die Laufzeit des Festgeldes in Monaten. Übliche Laufzeiten: 3, 6, 12, 24, 36, 60 Monate.",
      },
      compoundFreq: {
        label: "Zinsperiode",
        help: "Wie oft Zinsen berechnet und dem Guthaben hinzugefügt werden.",
      },
      earlyWithdrawalMonths: {
        label: "Vorzeitige-Kündigung-Strafperiode (Monate)",
        help: "Anzahl der Monate, für die Zinsen bei vorzeitiger Kündigung verfallen. 0, wenn Sie bis zum Laufzeitende anlegen.",
      },
    },
    outputs: {
      futureValue: {
        label: "Wert bei Fälligkeit",
        help: "Gesamtwert des Festgeldes bei Fälligkeit, einschließlich Kapital und aufgelaufener Zinsen.",
      },
      interestEarned: {
        label: "Verdiente Zinsen",
        help: "Gesamte aufgelaufene Zinsen über die gesamte Festgeldlaufzeit.",
      },
      apy: {
        label: "APY",
        help: "Effektiver Jahreszins — die tatsächliche Jahresrendite unter Berücksichtigung der Zinseszinsen.",
      },
      effectiveYield: {
        label: "Effektive Rendite",
        help: "Gesamtrendite als Prozentsatz des Kapitals über die gesamte Festgeldlaufzeit.",
      },
      earlyWithdrawalPenalty: {
        label: "Vorfälligkeitsentschädigung",
        help: "Entgangene Zinsen bei vorzeitiger Kündigung, basierend auf der Strafperiode.",
      },
      netReturnAfterPenalty: {
        label: "Nettorendite nach Strafe",
        help: "Verdiente Zinsen abzüglich Vorfälligkeitsentschädigung.",
      },
    },
    options: {
      compoundFreq: {
        "1": "Jährlich",
        "4": "Vierteljährlich",
        "12": "Monatlich",
        "365": "Täglich",
      },
    },
    errors: {
      principalTooLow: "Die Anlagesumme muss mindestens 1 € betragen.",
      aprOutOfRange: "Der Zinssatz muss zwischen 0% und 20% liegen.",
      termOutOfRange: "Die Laufzeit muss zwischen 1 und 120 Monaten liegen.",
    },
    faq: [
      {
        q: "Was ist der Unterschied zwischen APR und APY?",
        a: "Der APR ist der angegebene Zinssatz vor der Verzinsung. Der APY berücksichtigt die Zinsperiode und zeigt die tatsächliche Jahresrendite. Ein Festgeld mit 5% APR und monatlicher Verzinsung hat einen APY von ca. 5,116%.",
      },
      {
        q: "Sind Festgeldanlagen einlagengesichert?",
        a: "In Deutschland sind Einlagen bei deutschen Banken durch die gesetzliche Einlagensicherung bis zu 100.000 € pro Einleger und Institut geschützt. Viele Institute bieten darüber hinaus freiwilligen Schutz.",
      },
      {
        q: "Was passiert, wenn die Zinsen nach Eröffnung des Festgeldkontos steigen?",
        a: "Festgelder mit festem Zinssatz sind für die gesamte Laufzeit fest. Wenn die Zinsen steigen, verpassen Sie die höheren Renditen. Das Staggering (Aufteilen auf mehrere Laufzeiten) kann dieses Risiko mindern.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Rendement de Dépôt à Terme",
    short: "Calculez le rendement et la valeur future de votre dépôt à terme avec intérêts composés.",
    description:
      "Calculateur gratuit de rendement de dépôt à terme. Entrez le capital, le taux et la durée pour voir l'APY, la valeur future, les intérêts gagnés et l'impact d'un retrait anticipé.",
    keywords: [
      "calculateur dépôt à terme",
      "rendement dépôt",
      "APY calculateur",
      "calculateur épargne",
      "intérêts composés",
      "certificat de dépôt",
      "placement garanti",
    ],
    inputs: {
      principal: {
        label: "Capital",
        help: "Le montant initialement déposé dans le certificat de dépôt.",
      },
      apr: {
        label: "Taux d'intérêt annuel (APR)",
        help: "Le taux annuel indiqué du dépôt, avant capitalisation.",
      },
      termMonths: {
        label: "Durée (mois)",
        help: "La durée du dépôt en mois. Durées courantes : 3, 6, 12, 24, 36, 60 mois.",
      },
      compoundFreq: {
        label: "Fréquence de capitalisation",
        help: "À quelle fréquence les intérêts sont capitalisés et ajoutés au solde.",
      },
      earlyWithdrawalMonths: {
        label: "Période de pénalité de retrait anticipé (mois)",
        help: "Nombre de mois d'intérêts perdus en cas de retrait anticipé. Mettez 0 si vous conservez jusqu'à l'échéance.",
      },
    },
    outputs: {
      futureValue: {
        label: "Valeur à l'échéance",
        help: "Valeur totale du dépôt à l'échéance, incluant le capital et tous les intérêts.",
      },
      interestEarned: {
        label: "Intérêts gagnés",
        help: "Total des intérêts accumulés sur toute la durée du dépôt.",
      },
      apy: {
        label: "APY",
        help: "Rendement annuel effectif — retour annuel réel tenant compte de la capitalisation.",
      },
      effectiveYield: {
        label: "Rendement effectif",
        help: "Retour total en pourcentage du capital sur toute la durée du dépôt.",
      },
      earlyWithdrawalPenalty: {
        label: "Pénalité de retrait anticipé",
        help: "Intérêts perdus en cas de retrait avant l'échéance, basé sur la période de pénalité.",
      },
      netReturnAfterPenalty: {
        label: "Rendement net après pénalité",
        help: "Intérêts gagnés moins la pénalité de retrait anticipé.",
      },
    },
    options: {
      compoundFreq: {
        "1": "Annuelle",
        "4": "Trimestrielle",
        "12": "Mensuelle",
        "365": "Quotidienne",
      },
    },
    errors: {
      principalTooLow: "Le capital doit être d'au moins 1 €.",
      aprOutOfRange: "Le taux annuel doit être compris entre 0% et 20%.",
      termOutOfRange: "La durée doit être comprise entre 1 et 120 mois.",
    },
    faq: [
      {
        q: "Quelle est la différence entre APR et APY ?",
        a: "L'APR est le taux d'intérêt indiqué avant capitalisation. L'APY reflète le rendement annuel réel en tenant compte de la fréquence de capitalisation. Un dépôt avec 5% APR capitalisé mensuellement a un APY d'environ 5,116%.",
      },
      {
        q: "Les dépôts à terme sont-ils garantis ?",
        a: "En France, les dépôts bancaires sont garantis jusqu'à 100 000 € par déposant et par établissement par le Fonds de Garantie des Dépôts et de Résolution (FGDR).",
      },
      {
        q: "Que se passe-t-il si les taux d'intérêt augmentent après l'ouverture ?",
        a: "Les dépôts à taux fixe bloquent votre taux pour toute la durée. Si les taux augmentent, vous perdez l'accès aux rendements plus élevés. Échelonner les dépôts sur plusieurs durées peut aider à gérer ce risque.",
      },
    ],
  },

  es: {
    title: "Calculadora de Rendimiento de Depósito a Plazo",
    short: "Calcula el rendimiento y el valor futuro de tu certificado de depósito con interés compuesto.",
    description:
      "Calculadora gratuita de rendimiento de CD. Ingresa el capital, la tasa APR y el plazo para ver el APY, el valor futuro, los intereses ganados y el impacto del retiro anticipado.",
    keywords: [
      "calculadora CD",
      "certificado de depósito",
      "rendimiento CD",
      "APY calculadora",
      "calculadora ahorro",
      "interés compuesto",
      "depósito bancario",
    ],
    inputs: {
      principal: {
        label: "Capital",
        help: "El monto inicial depositado en el certificado de depósito.",
      },
      apr: {
        label: "Tasa de Interés Anual (APR)",
        help: "La tasa de interés anual declarada del CD antes del interés compuesto.",
      },
      termMonths: {
        label: "Plazo (meses)",
        help: "La duración del CD en meses. Plazos comunes: 3, 6, 12, 24, 36, 60 meses.",
      },
      compoundFreq: {
        label: "Frecuencia de Capitalización",
        help: "Con qué frecuencia se capitaliza el interés y se agrega al saldo.",
      },
      earlyWithdrawalMonths: {
        label: "Período de Penalización por Retiro Anticipado (meses)",
        help: "Meses de interés perdidos como penalización por retiro anticipado. Ingresa 0 si mantienes hasta el vencimiento.",
      },
    },
    outputs: {
      futureValue: {
        label: "Valor al Vencimiento",
        help: "Valor total del CD al vencimiento, incluyendo capital e intereses compuestos.",
      },
      interestEarned: {
        label: "Intereses Ganados",
        help: "Intereses totales acumulados durante todo el plazo del CD.",
      },
      apy: {
        label: "APY",
        help: "Rendimiento Porcentual Anual — el retorno anual efectivo considerando la capitalización.",
      },
      effectiveYield: {
        label: "Rendimiento Efectivo",
        help: "Retorno total como porcentaje del capital durante todo el plazo del CD.",
      },
      earlyWithdrawalPenalty: {
        label: "Penalización por Retiro Anticipado",
        help: "Intereses perdidos si retiras antes del vencimiento, según el período de penalización.",
      },
      netReturnAfterPenalty: {
        label: "Retorno Neto Tras Penalización",
        help: "Intereses ganados menos la penalización por retiro anticipado.",
      },
    },
    options: {
      compoundFreq: {
        "1": "Anual",
        "4": "Trimestral",
        "12": "Mensual",
        "365": "Diario",
      },
    },
    errors: {
      principalTooLow: "El capital debe ser al menos $1.",
      aprOutOfRange: "La tasa APR debe estar entre 0% y 20%.",
      termOutOfRange: "El plazo debe estar entre 1 y 120 meses.",
    },
    faq: [
      {
        q: "¿Cuál es la diferencia entre APR y APY?",
        a: "El APR es la tasa de interés declarada antes de la capitalización. El APY refleja el rendimiento anual efectivo considerando la frecuencia de capitalización. Un CD con 5% APR compuesto mensualmente tiene un APY de aproximadamente 5.116%.",
      },
      {
        q: "¿Los CD están asegurados?",
        a: "En EE.UU., los CD en bancos miembros de la FDIC están asegurados hasta $250,000 por depositante, por banco asegurado. Esto los convierte en uno de los instrumentos de ahorro más seguros.",
      },
      {
        q: "¿Qué pasa si suben las tasas después de abrir el CD?",
        a: "Los CD de tasa fija bloquean tu tasa por toda la duración. Si las tasas suben, no accedes a rendimientos más altos hasta el vencimiento. Distribuir depósitos en múltiples plazos (escalonamiento) ayuda a gestionar este riesgo.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Rendimento del Deposito a Termine",
    short: "Calcola il rendimento e il valore futuro del tuo deposito a termine con interesse composto.",
    description:
      "Calcolatore gratuito di rendimento CD. Inserisci il capitale, il tasso APR e la durata per vedere APY, valore futuro, interessi maturati e impatto del prelievo anticipato.",
    keywords: [
      "calcolatore deposito a termine",
      "rendimento deposito",
      "APY calcolatore",
      "calcolatore risparmio",
      "interesse composto",
      "certificato di deposito",
      "deposito bancario",
    ],
    inputs: {
      principal: {
        label: "Capitale",
        help: "L'importo inizialmente depositato nel certificato di deposito.",
      },
      apr: {
        label: "Tasso di interesse annuo (APR)",
        help: "Il tasso annuo dichiarato del deposito, prima della capitalizzazione.",
      },
      termMonths: {
        label: "Durata (mesi)",
        help: "La durata del deposito in mesi. Durate comuni: 3, 6, 12, 24, 36, 60 mesi.",
      },
      compoundFreq: {
        label: "Frequenza di capitalizzazione",
        help: "Con quale frequenza gli interessi vengono capitalizzati e aggiunti al saldo.",
      },
      earlyWithdrawalMonths: {
        label: "Periodo di penale per prelievo anticipato (mesi)",
        help: "Mesi di interessi persi come penale per prelievo anticipato. Imposta 0 se mantieni fino alla scadenza.",
      },
    },
    outputs: {
      futureValue: {
        label: "Valore alla scadenza",
        help: "Valore totale del deposito alla scadenza, inclusi capitale e interessi capitalizzati.",
      },
      interestEarned: {
        label: "Interessi maturati",
        help: "Totale degli interessi accumulati per tutta la durata del deposito.",
      },
      apy: {
        label: "APY",
        help: "Rendimento percentuale annuo — il rendimento annuale effettivo considerando la capitalizzazione.",
      },
      effectiveYield: {
        label: "Rendimento effettivo",
        help: "Rendimento totale come percentuale del capitale per tutta la durata del deposito.",
      },
      earlyWithdrawalPenalty: {
        label: "Penale per prelievo anticipato",
        help: "Interessi persi in caso di prelievo prima della scadenza, in base al periodo di penale.",
      },
      netReturnAfterPenalty: {
        label: "Rendimento netto dopo la penale",
        help: "Interessi maturati meno la penale per prelievo anticipato.",
      },
    },
    options: {
      compoundFreq: {
        "1": "Annuale",
        "4": "Trimestrale",
        "12": "Mensile",
        "365": "Giornaliero",
      },
    },
    errors: {
      principalTooLow: "Il capitale deve essere almeno 1 €.",
      aprOutOfRange: "Il tasso annuo deve essere compreso tra 0% e 20%.",
      termOutOfRange: "La durata deve essere compresa tra 1 e 120 mesi.",
    },
    faq: [
      {
        q: "Qual è la differenza tra APR e APY?",
        a: "L'APR è il tasso di interesse dichiarato prima della capitalizzazione. L'APY riflette il rendimento annuale effettivo tenendo conto della frequenza di capitalizzazione. Un deposito con 5% APR capitalizzato mensilmente ha un APY di circa 5,116%.",
      },
      {
        q: "I depositi a termine sono garantiti?",
        a: "In Italia i depositi bancari sono protetti dal Fondo Interbancario di Tutela dei Depositi (FITD) fino a 100.000 € per depositante per istituto.",
      },
      {
        q: "Cosa succede se i tassi salgono dopo l'apertura?",
        a: "I depositi a tasso fisso bloccano il tasso per tutta la durata. Se i tassi salgono, non si beneficia dei rendimenti più elevati. Distribuire i depositi su più scadenze (ladder) aiuta a gestire questo rischio.",
      },
    ],
  },

  ar: {
    title: "حاسبة عائد شهادة الإيداع",
    short: "احسب عائد شهادة إيداعك وقيمتها المستقبلية بالفائدة المركبة.",
    description:
      "حاسبة مجانية لعائد شهادة الإيداع. أدخل رأس المال ومعدل الفائدة والمدة لمعرفة APY والقيمة المستقبلية والفوائد المكتسبة وتأثير السحب المبكر.",
    keywords: [
      "حاسبة شهادة الإيداع",
      "عائد الإيداع",
      "حاسبة APY",
      "حاسبة المدخرات",
      "الفائدة المركبة",
      "شهادة ادخار",
      "وديعة بنكية",
    ],
    inputs: {
      principal: {
        label: "رأس المال",
        help: "المبلغ الأولي المودَع في شهادة الإيداع.",
      },
      apr: {
        label: "معدل الفائدة السنوي (APR)",
        help: "معدل الفائدة السنوي المُعلَن لشهادة الإيداع قبل الاحتساب المركب.",
      },
      termMonths: {
        label: "المدة (بالأشهر)",
        help: "مدة شهادة الإيداع بالأشهر. المدد الشائعة: 3، 6، 12، 24، 36، 60 شهرًا.",
      },
      compoundFreq: {
        label: "تكرار الاحتساب المركب",
        help: "عدد مرات احتساب الفائدة وإضافتها إلى الرصيد.",
      },
      earlyWithdrawalMonths: {
        label: "فترة غرامة السحب المبكر (بالأشهر)",
        help: "عدد أشهر الفوائد المفقودة عقوبةً على السحب المبكر. اضبطه على 0 إذا احتفظت بالشهادة حتى استحقاقها.",
      },
    },
    outputs: {
      futureValue: {
        label: "القيمة عند الاستحقاق",
        help: "القيمة الإجمالية لشهادة الإيداع عند الاستحقاق، بما فيها رأس المال وجميع الفوائد المركبة.",
      },
      interestEarned: {
        label: "الفوائد المكتسبة",
        help: "إجمالي الفوائد المتراكمة طوال مدة شهادة الإيداع.",
      },
      apy: {
        label: "APY",
        help: "معدل العائد السنوي الفعلي — العائد الفعلي السنوي مع الأخذ بعين الاعتبار التركيب.",
      },
      effectiveYield: {
        label: "العائد الفعلي",
        help: "إجمالي العائد كنسبة مئوية من رأس المال على مدار كامل مدة شهادة الإيداع.",
      },
      earlyWithdrawalPenalty: {
        label: "غرامة السحب المبكر",
        help: "الفوائد المفقودة عند السحب قبل الاستحقاق، بناءً على فترة الغرامة.",
      },
      netReturnAfterPenalty: {
        label: "صافي العائد بعد الغرامة",
        help: "الفوائد المكتسبة مطروحًا منها غرامة السحب المبكر.",
      },
    },
    options: {
      compoundFreq: {
        "1": "سنوي",
        "4": "ربع سنوي",
        "12": "شهري",
        "365": "يومي",
      },
    },
    errors: {
      principalTooLow: "يجب أن يكون رأس المال دولارًا واحدًا على الأقل.",
      aprOutOfRange: "يجب أن يكون معدل الفائدة السنوي بين 0% و20%.",
      termOutOfRange: "يجب أن تكون المدة بين شهر واحد و120 شهرًا.",
    },
    faq: [
      {
        q: "ما الفرق بين APR وAPY؟",
        a: "APR هو معدل الفائدة المُعلَن قبل التركيب، أما APY فيعكس العائد السنوي الفعلي مع الأخذ بعين الاعتبار تكرار التركيب. شهادة إيداع بـ 5% APR مركبة شهريًا تُعطي APY يبلغ نحو 5.116%.",
      },
      {
        q: "هل شهادات الإيداع مؤمَّنة؟",
        a: "نعم، شهادات الإيداع في البنوك الأعضاء في FDIC مؤمَّنة حتى 250,000 دولار لكل مودِع ولكل بنك مؤمَّن، مما يجعلها من أكثر أدوات الادخار أمانًا.",
      },
      {
        q: "ماذا يحدث إذا ارتفعت الأسعار بعد فتح شهادة الإيداع؟",
        a: "شهادات الإيداع ذات السعر الثابت تُثبّت سعرك طوال المدة. إذا ارتفعت الأسعار، فستفوتك العوائد الأعلى حتى انتهاء المدة. توزيع الودائع على آجال استحقاق متعددة (سلّم الودائع) يساعد على إدارة هذه المخاطرة.",
      },
    ],
  },

  ru: {
    title: "Калькулятор доходности депозита",
    short: "Рассчитайте доходность и будущую стоимость срочного депозита с учётом сложных процентов.",
    description:
      "Бесплатный калькулятор доходности депозита. Введите сумму, ставку и срок, чтобы узнать APY, будущую стоимость, заработанные проценты и влияние досрочного снятия.",
    keywords: [
      "калькулятор депозита",
      "доходность вклада",
      "APY калькулятор",
      "калькулятор сбережений",
      "сложные проценты",
      "срочный вклад",
      "банковский депозит",
    ],
    inputs: {
      principal: {
        label: "Сумма вклада",
        help: "Начальная сумма, внесённая на срочный депозит.",
      },
      apr: {
        label: "Годовая процентная ставка (APR)",
        help: "Номинальная годовая ставка депозита до начисления сложных процентов.",
      },
      termMonths: {
        label: "Срок (месяцев)",
        help: "Срок депозита в месяцах. Распространённые сроки: 3, 6, 12, 24, 36, 60 месяцев.",
      },
      compoundFreq: {
        label: "Периодичность начисления",
        help: "Как часто проценты начисляются и добавляются к балансу.",
      },
      earlyWithdrawalMonths: {
        label: "Штрафной период при досрочном снятии (месяцев)",
        help: "Число месяцев процентов, теряемых при досрочном снятии. Установите 0, если держите до конца срока.",
      },
    },
    outputs: {
      futureValue: {
        label: "Сумма на конец срока",
        help: "Общая стоимость депозита на конец срока, включая основной вклад и все начисленные проценты.",
      },
      interestEarned: {
        label: "Заработанные проценты",
        help: "Общая сумма процентов, накопленных за весь срок депозита.",
      },
      apy: {
        label: "APY",
        help: "Эффективная годовая доходность — фактическая годовая доходность с учётом сложного процента.",
      },
      effectiveYield: {
        label: "Эффективная доходность",
        help: "Суммарный доход в процентах от основного вклада за весь срок.",
      },
      earlyWithdrawalPenalty: {
        label: "Штраф за досрочное снятие",
        help: "Проценты, утрачиваемые при досрочном снятии средств, исходя из штрафного периода.",
      },
      netReturnAfterPenalty: {
        label: "Чистый доход после штрафа",
        help: "Заработанные проценты за вычетом штрафа за досрочное снятие.",
      },
    },
    options: {
      compoundFreq: {
        "1": "Ежегодно",
        "4": "Ежеквартально",
        "12": "Ежемесячно",
        "365": "Ежедневно",
      },
    },
    errors: {
      principalTooLow: "Сумма вклада должна быть не менее 1 руб.",
      aprOutOfRange: "Процентная ставка должна быть от 0% до 20%.",
      termOutOfRange: "Срок должен быть от 1 до 120 месяцев.",
    },
    faq: [
      {
        q: "В чём разница между APR и APY?",
        a: "APR — номинальная ставка до начисления сложных процентов. APY отражает фактическую годовую доходность с учётом периодичности начисления. Депозит под 5% APR с ежемесячным начислением даёт APY около 5,116%.",
      },
      {
        q: "Застрахованы ли вклады?",
        a: "В России вклады в банках — участниках системы страхования вкладов застрахованы до 1,4 млн руб. (по отдельным категориям до 10 млн руб.) через Агентство по страхованию вкладов.",
      },
      {
        q: "Что делать, если ставки вырастут после открытия депозита?",
        a: "Срочные депозиты фиксируют ставку на весь срок. Если ставки вырастут, вы не сможете воспользоваться более высокой доходностью до окончания срока. Лестничная стратегия (распределение по нескольким срокам) помогает управлять этим риском.",
      },
    ],
  },

  zh: {
    title: "存款证书收益计算器",
    short: "计算存款证书的收益和到期价值，含复利计算。",
    description:
      "免费CD收益计算器。输入本金、年利率和期限，查看年化收益率（APY）、到期价值、利息收益及提前取款罚金影响。",
    keywords: [
      "存款证书计算器",
      "CD收益计算",
      "APY计算器",
      "储蓄计算器",
      "复利计算",
      "定期存款计算",
      "银行存款计算",
    ],
    inputs: {
      principal: { label: "本金", help: "存入存款证书的初始金额。" },
      apr: { label: "年利率 (APR)", help: "复利计算前存款证书的名义年利率。" },
      termMonths: { label: "期限（月）", help: "存款证书的月数。常见期限：3、6、12、24、36、60个月。" },
      compoundFreq: { label: "复利频率", help: "利息计入余额的频率。" },
      earlyWithdrawalMonths: { label: "提前取款罚金期（月）", help: "提前取款损失的利息月数。到期持有则设为0。" },
    },
    outputs: {
      futureValue: { label: "到期价值", help: "含本金和全部复利的存款证书到期总价值。" },
      interestEarned: { label: "利息收益", help: "整个存款期间积累的总利息。" },
      apy: { label: "APY", help: "年化收益率——考虑复利后的实际年回报率。" },
      effectiveYield: { label: "实际收益率", help: "整个存款期间相对本金的总回报率百分比。" },
      earlyWithdrawalPenalty: { label: "提前取款罚金", help: "根据罚金期计算的提前取款损失利息。" },
      netReturnAfterPenalty: { label: "扣除罚金后净收益", help: "利息收益减去提前取款罚金。" },
    },
    options: {
      compoundFreq: { "1": "每年", "4": "每季度", "12": "每月", "365": "每日" },
    },
    errors: {
      principalTooLow: "本金至少为1元。",
      aprOutOfRange: "年利率必须在0%至20%之间。",
      termOutOfRange: "期限必须在1至120个月之间。",
    },
    faq: [
      {
        q: "APR和APY有何区别？",
        a: "APR是复利前的名义利率，APY考虑复利频率后反映实际年回报率。APR为5%、每月复利的存款证书APY约为5.116%。",
      },
      {
        q: "存款证书受保险保障吗？",
        a: "在美国，FDIC成员银行的存款证书受保障，每位存款人每家银行最高25万美元。这使其成为最安全的储蓄工具之一。",
      },
      {
        q: "开户后利率上涨怎么办？",
        a: "固定利率存款证书锁定整个期限的利率。利率上涨时，到期前无法享受更高收益。将存款分散至不同期限（梯级策略）有助于管理此风险。",
      },
    ],
  },

  ja: {
    title: "預金証書利回り計算機",
    short: "複利を用いて預金証書の利回りと満期時の将来価値を計算します。",
    description:
      "無料のCD利回り計算機。元本、APR、期間を入力してAPY、将来価値、受取利息、早期解約ペナルティの影響を確認できます。",
    keywords: [
      "預金証書計算機",
      "CD利回り",
      "APY計算機",
      "貯蓄計算機",
      "複利計算",
      "定期預金計算",
      "銀行預金計算",
    ],
    inputs: {
      principal: { label: "元本", help: "預金証書に預け入れる初期金額。" },
      apr: { label: "年利率（APR）", help: "複利計算前のCDの名目年利率。" },
      termMonths: { label: "期間（ヶ月）", help: "CDの期間（月数）。一般的な期間：3、6、12、24、36、60ヶ月。" },
      compoundFreq: { label: "複利計算頻度", help: "利息が計算されて残高に加算される頻度。" },
      earlyWithdrawalMonths: { label: "早期解約ペナルティ期間（ヶ月）", help: "早期解約ペナルティとして失われる利息の月数。満期まで保有する場合は0を入力。" },
    },
    outputs: {
      futureValue: { label: "満期時の価値", help: "元本と全複利を含む満期時のCD総額。" },
      interestEarned: { label: "受取利息", help: "CD期間全体で積み重なった総利息。" },
      apy: { label: "APY", help: "年間利回り——複利を考慮した実質年間収益率。" },
      effectiveYield: { label: "実効利回り", help: "CD期間全体を通じた元本に対する総収益率（%）。" },
      earlyWithdrawalPenalty: { label: "早期解約ペナルティ", help: "ペナルティ期間に基づく満期前解約時の利息損失。" },
      netReturnAfterPenalty: { label: "ペナルティ控除後の純収益", help: "受取利息から早期解約ペナルティを差し引いた金額。" },
    },
    options: {
      compoundFreq: { "1": "年1回", "4": "年4回", "12": "月1回", "365": "毎日" },
    },
    errors: {
      principalTooLow: "元本は最低1円以上である必要があります。",
      aprOutOfRange: "年利率は0%から20%の範囲内である必要があります。",
      termOutOfRange: "期間は1ヶ月から120ヶ月の範囲内である必要があります。",
    },
    faq: [
      {
        q: "APRとAPYの違いは何ですか？",
        a: "APRは複利前の名目利率です。APYは複利の頻度を考慮した実質年間利回りです。月複利5% APRのCDのAPYは約5.116%です。",
      },
      {
        q: "預金証書は預金保険で保護されていますか？",
        a: "米国ではFDIC加盟銀行のCDが預金者1人あたり、1銀行あたり25万ドルまで保護されます。これを預金保険といいます。",
      },
      {
        q: "開設後に金利が上昇したらどうなりますか？",
        a: "固定金利CDは全期間、金利を固定します。金利が上昇しても満期まで高い利回りを享受できません。複数の期間に分散する「ラダリング」でリスクを管理できます。",
      },
    ],
  },

  ko: {
    title: "예금 증서 수익률 계산기",
    short: "복리를 적용하여 예금 증서의 수익률과 만기 가치를 계산하세요.",
    description:
      "무료 CD 수익률 계산기. 원금, APR, 기간을 입력하여 APY, 만기 가치, 수익 이자, 조기 인출 페널티 영향을 확인하세요.",
    keywords: [
      "예금 증서 계산기",
      "CD 수익률",
      "APY 계산기",
      "저축 계산기",
      "복리 계산",
      "정기 예금 계산",
      "은행 예금 계산",
    ],
    inputs: {
      principal: { label: "원금", help: "예금 증서에 예치하는 초기 금액." },
      apr: { label: "연간 이자율 (APR)", help: "복리 계산 전 CD의 명목 연이자율." },
      termMonths: { label: "기간 (개월)", help: "CD의 기간(개월). 일반적인 기간: 3, 6, 12, 24, 36, 60개월." },
      compoundFreq: { label: "복리 적용 주기", help: "이자가 계산되어 잔액에 추가되는 빈도." },
      earlyWithdrawalMonths: { label: "조기 인출 페널티 기간 (개월)", help: "조기 인출 시 손실되는 이자 개월 수. 만기까지 보유 시 0으로 설정." },
    },
    outputs: {
      futureValue: { label: "만기 시 가치", help: "원금과 모든 복리 이자를 포함한 만기 시 CD 총액." },
      interestEarned: { label: "이자 수익", help: "CD 전체 기간에 축적된 총 이자." },
      apy: { label: "APY", help: "연간 수익률 — 복리를 반영한 실질 연간 수익률." },
      effectiveYield: { label: "실효 수익률", help: "CD 전체 기간의 원금 대비 총 수익률(%)." },
      earlyWithdrawalPenalty: { label: "조기 인출 페널티", help: "페널티 기간에 따른 만기 전 인출 시 손실 이자." },
      netReturnAfterPenalty: { label: "페널티 공제 후 순 수익", help: "이자 수익에서 조기 인출 페널티를 뺀 금액." },
    },
    options: {
      compoundFreq: { "1": "연간", "4": "분기별", "12": "월별", "365": "일별" },
    },
    errors: {
      principalTooLow: "원금은 최소 1원 이상이어야 합니다.",
      aprOutOfRange: "연이율은 0%에서 20% 사이여야 합니다.",
      termOutOfRange: "기간은 1개월에서 120개월 사이여야 합니다.",
    },
    faq: [
      {
        q: "APR과 APY의 차이는?",
        a: "APR은 복리 전 명목 이자율이고, APY는 복리 주기를 반영한 실질 연간 수익률입니다. 월 복리 5% APR의 CD는 약 5.116% APY를 가집니다.",
      },
      {
        q: "CD는 예금 보험으로 보호되나요?",
        a: "미국에서는 FDIC 회원 은행의 CD가 예금자 1인당 은행 1개당 최대 25만 달러까지 보장됩니다. 이를 예금 보험이라 합니다.",
      },
      {
        q: "개설 후 금리가 오르면 어떻게 되나요?",
        a: "고정금리 CD는 전체 기간 동안 금리가 고정됩니다. 금리가 오르면 만기 전에는 더 높은 수익을 누릴 수 없습니다. 여러 기간에 분산 투자하는 '래더링' 전략으로 이 위험을 관리할 수 있습니다.",
      },
    ],
  },

  hi: {
    title: "जमा प्रमाणपत्र (CD) उपज कैलकुलेटर",
    short: "चक्रवृद्धि ब्याज के साथ अपने जमा प्रमाणपत्र की उपज और भविष्य की कीमत की गणना करें।",
    description:
      "मुफ़्त CD उपज कैलकुलेटर। मूलधन, APR और अवधि दर्ज करें और APY, भविष्य की कीमत, अर्जित ब्याज, और समय से पहले निकासी का प्रभाव देखें।",
    keywords: [
      "CD कैलकुलेटर",
      "जमा प्रमाणपत्र",
      "APY कैलकुलेटर",
      "बचत कैलकुलेटर",
      "चक्रवृद्धि ब्याज",
      "सावधि जमा गणना",
      "बैंक जमा कैलकुलेटर",
    ],
    inputs: {
      principal: { label: "मूलधन", help: "जमा प्रमाणपत्र में जमा की गई प्रारंभिक राशि।" },
      apr: { label: "वार्षिक ब्याज दर (APR)", help: "चक्रवृद्धि से पहले CD की घोषित वार्षिक ब्याज दर।" },
      termMonths: { label: "अवधि (महीने)", help: "CD की अवधि महीनों में। सामान्य अवधि: 3, 6, 12, 24, 36, 60 महीने।" },
      compoundFreq: { label: "चक्रवृद्धि आवृत्ति", help: "ब्याज की गणना कितनी बार होती है और शेष में जोड़ा जाता है।" },
      earlyWithdrawalMonths: { label: "समय से पहले निकासी दंड अवधि (महीने)", help: "समय से पहले निकासी पर खो जाने वाले ब्याज के महीने। परिपक्वता तक रखने पर 0 दर्ज करें।" },
    },
    outputs: {
      futureValue: { label: "परिपक्वता पर मूल्य", help: "मूलधन और सभी चक्रवृद्धि ब्याज सहित CD का कुल परिपक्वता मूल्य।" },
      interestEarned: { label: "अर्जित ब्याज", help: "CD की पूरी अवधि में संचित कुल ब्याज।" },
      apy: { label: "APY", help: "वार्षिक प्रतिशत उपज — चक्रवृद्धि को ध्यान में रखते हुए प्रभावी वार्षिक रिटर्न।" },
      effectiveYield: { label: "प्रभावी उपज", help: "CD की पूरी अवधि में मूलधन के प्रतिशत के रूप में कुल रिटर्न।" },
      earlyWithdrawalPenalty: { label: "समय से पहले निकासी दंड", help: "दंड अवधि के आधार पर परिपक्वता से पहले निकासी पर खो जाने वाला ब्याज।" },
      netReturnAfterPenalty: { label: "दंड के बाद शुद्ध रिटर्न", help: "अर्जित ब्याज में से समय से पहले निकासी दंड घटाया गया।" },
    },
    options: {
      compoundFreq: { "1": "वार्षिक", "4": "त्रैमासिक", "12": "मासिक", "365": "दैनिक" },
    },
    errors: {
      principalTooLow: "मूलधन कम से कम ₹1 होना चाहिए।",
      aprOutOfRange: "APR 0% और 20% के बीच होना चाहिए।",
      termOutOfRange: "अवधि 1 से 120 महीनों के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "APR और APY में क्या अंतर है?",
        a: "APR चक्रवृद्धि से पहले की घोषित ब्याज दर है। APY चक्रवृद्धि आवृत्ति को ध्यान में रखते हुए वास्तविक वार्षिक रिटर्न दर्शाता है। 5% APR पर मासिक चक्रवृद्धि वाली CD का APY लगभग 5.116% होता है।",
      },
      {
        q: "क्या CD बीमित हैं?",
        a: "अमेरिका में FDIC सदस्य बैंकों में CD प्रति जमाकर्ता प्रति बैंक $250,000 तक बीमित हैं, जो उन्हें सबसे सुरक्षित बचत साधनों में से एक बनाता है।",
      },
      {
        q: "CD खोलने के बाद ब्याज दरें बढ़ने पर क्या होता है?",
        a: "निश्चित ब्याज दर CD पूरी अवधि के लिए आपकी दर को लॉक करती है। दरें बढ़ने पर परिपक्वता तक आप उच्च रिटर्न का लाभ नहीं उठा सकते। कई अवधियों में बांटने (लैडरिंग) से इस जोखिम का प्रबंधन किया जा सकता है।",
      },
    ],
  },
};

export default i18n;
