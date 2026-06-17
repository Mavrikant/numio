import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Down Payment Calculator",
    short:
      "Calculate your down payment, loan amount, monthly P&I, taxes, insurance, and PMI in one place.",
    description:
      "Free home down payment calculator. Enter the home price and either a down-payment percentage or amount, and get your loan amount, monthly principal & interest, property tax, homeowner's insurance, and PMI when your down payment is under 20%.",
    keywords: [
      "down payment calculator",
      "home down payment",
      "PMI calculator",
      "PITI",
      "monthly mortgage payment",
      "loan-to-value",
      "mortgage down payment",
    ],
    inputs: {
      homePrice: { label: "Home Price", help: "Total purchase price of the property." },
      downPaymentPercent: {
        label: "Down Payment (%)",
        help: "Percent of home price paid upfront. If both percent and amount are given, percent wins.",
      },
      downPaymentAmount: {
        label: "Down Payment (amount)",
        help: "Fixed amount paid upfront. Used only when no percent is given.",
      },
      annualRate: {
        label: "Annual Interest Rate (%)",
        help: "Yearly mortgage interest rate from your lender.",
      },
      termYears: { label: "Loan Term (years)", help: "Number of years to repay the loan." },
      propertyTaxRate: {
        label: "Property Tax Rate (% / year)",
        help: "Annual property tax as a percent of the home price.",
      },
      insuranceRate: {
        label: "Homeowner's Insurance Rate (% / year)",
        help: "Annual homeowner's insurance as a percent of the home price.",
      },
      pmiRate: {
        label: "PMI Rate (% / year)",
        help: "Annual private mortgage insurance rate; only applied when down payment is below 20%.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "Down Payment", help: "Cash paid upfront." },
      downPaymentPercent: {
        label: "Down Payment %",
        help: "Down payment as a percent of the home price.",
      },
      loanAmount: { label: "Loan Amount", help: "Home price minus down payment." },
      monthlyPrincipalInterest: {
        label: "Monthly P&I",
        help: "Principal & interest portion of the monthly payment.",
      },
      monthlyTax: {
        label: "Monthly Property Tax",
        help: "Annual property tax divided by 12.",
      },
      monthlyInsurance: {
        label: "Monthly Insurance",
        help: "Annual homeowner's insurance divided by 12.",
      },
      monthlyPmi: {
        label: "Monthly PMI",
        help: "Monthly private mortgage insurance (0 when down payment is 20% or more).",
      },
      totalMonthlyPayment: {
        label: "Total Monthly Payment",
        help: "P&I + tax + insurance + PMI (PITI).",
      },
      pmiRequired: {
        label: "PMI Required",
        help: "1 if private mortgage insurance is required (down payment < 20%), 0 otherwise.",
      },
      loanToValue: {
        label: "Loan-to-Value (LTV)",
        help: "Loan amount divided by home price, as a percent.",
      },
    },
    errors: {
      downPaymentExceedsPrice: "Down payment cannot exceed home price.",
      missingDownPayment: "Provide either a down payment percent or amount.",
      homePriceRange: "Home price must be between $1,000 and $100,000,000.",
      rateRange: "Annual interest rate must be between 0% and 30%.",
      termRange: "Loan term must be between 1 and 40 years.",
    },
    faq: [
      {
        q: "When is PMI required?",
        a: "Lenders typically require Private Mortgage Insurance (PMI) on conventional loans when your down payment is less than 20% of the home price. PMI protects the lender — not you — and can usually be removed once your loan-to-value reaches 80%.",
      },
      {
        q: "Is 20% down payment really necessary?",
        a: "No. Many loan programs allow much lower down payments (FHA from 3.5%, conventional from 3%). A 20% down payment simply avoids PMI and lowers your monthly payment.",
      },
      {
        q: "What is PITI?",
        a: "PITI stands for Principal, Interest, Taxes, and Insurance — the four components of a typical monthly mortgage payment. When PMI applies, it's often included alongside PITI.",
      },
      {
        q: "What if I enter both a down payment percent and amount?",
        a: "Percent wins. The calculator computes the dollar down payment from the percent of the home price and ignores the amount field.",
      },
    ],
  },
  nl: {
    title: "Down Payment Calculator",
    short:
      "Bereken your down payment, loan amount, monthly P&I, taxes, insurance, and PMI in one place.",
    description:
      "Gratis home down payment calculator. Enter the home price and either a down-payment percentage or amount, and get your loan amount, monthly principal & interest, property tax, homeowner's insurance, and PMI when your down payment is under 20%.",
    keywords: [
      "down payment calculator",
      "home down payment",
      "PMI calculator",
      "PITI",
      "monthly mortgage payment",
      "loan-to-value",
      "mortgage down payment",
    ],
    inputs: {
      homePrice: { label: "Home Price", help: "Total purchase price of the property." },
      downPaymentPercent: {
        label: "Down Payment (%)",
        help: "Percent of home price paid upfront. If both percent and amount are given, percent wins.",
      },
      downPaymentAmount: {
        label: "Down Payment (amount)",
        help: "Fixed amount paid upfront. Used only when no percent is given.",
      },
      annualRate: {
        label: "Annual Interest Rate (%)",
        help: "Yearly mortgage interest rate from your lender.",
      },
      termYears: { label: "Lening Term (jaren)", help: "Nummer of jaren to repay the loan." },
      propertyTaxRate: {
        label: "Property Belasting Rate (% / year)",
        help: "Annual property tax as a percent of the home price.",
      },
      insuranceRate: {
        label: "Homeowner's Insurance Rate (% / year)",
        help: "Annual homeowner's insurance as a percent of the home price.",
      },
      pmiRate: {
        label: "PMI Rate (% / year)",
        help: "Annual private mortgage insurance rate; only applied when down payment is below 20%.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "Down Payment", help: "Cash paid upfront." },
      downPaymentPercent: {
        label: "Down Payment %",
        help: "Down payment as a percent of the home price.",
      },
      loanAmount: { label: "Lening Amount", help: "Home price minus down payment." },
      monthlyPrincipalInterest: {
        label: "Monthly P&I",
        help: "Principal & interest portion of the monthly payment.",
      },
      monthlyTax: {
        label: "Monthly Property Belasting",
        help: "Annual property tax divided by 12.",
      },
      monthlyInsurance: {
        label: "Monthly Insurance",
        help: "Annual homeowner's insurance divided by 12.",
      },
      monthlyPmi: {
        label: "Monthly PMI",
        help: "Monthly private mortgage insurance (0 when down payment is 20% or more).",
      },
      totalMonthlyPayment: {
        label: "Total Monthly Payment",
        help: "P&I + tax + insurance + PMI (PITI).",
      },
      pmiRequired: {
        label: "PMI Required",
        help: "1 if private mortgage insurance is required (down payment < 20%), 0 otherwise.",
      },
      loanToValue: {
        label: "Lening-to-Waarde (LTV)",
        help: "Lening amount divided by home price, as a percent.",
      },
    },
    errors: {
      downPaymentExceedsPrice: "Down payment cannot exceed home price.",
      missingDownPayment: "Provide either a down payment percent or amount.",
      homePriceRange: "Home price must be between $1,000 and $100,000,000.",
      rateRange: "Annual interest rate must be between 0% and 30%.",
      termRange: "Lening term must be between 1 and 40 jaren.",
    },
    faq: [
      {
        q: "When is PMI required?",
        a: "Lenders typically require Private Hypotheek Insurance (PMI) on conventional loans when your down payment is less than 20% of the home price. PMI protects the lender — not you — and can usually be verwijderd once your loan-to-value reaches 80%.",
      },
      {
        q: "Is 20% down payment really necessary?",
        a: "No. Many loan programs allow much lower down payments (FHA from 3.5%, conventional from 3%). A 20% down payment simply avoids PMI and lowers your monthly payment.",
      },
      {
        q: "What is PITI?",
        a: "PITI stands for Principal, Interest, Belastinges, and Insurance — the four components of a typical monthly mortgage payment. When PMI applies, it's often included alongside PITI.",
      },
      {
        q: "What if I enter both a down payment percent and amount?",
        a: "Percent wins. The calculator computes the dollar down payment from the percent of the home price and ignores the amount field.",
      },
    ],
  },

  pl: {
    title: "Down Payment Kalkulator",
    short:
      "Oblicz your down payment, loan amount, monthly P&I, taxes, insurance, and PMI in one place.",
    description:
      "Darmowy home down payment kalkulator. Enter the home price and either a down-payment percentage or amount, and get your loan amount, monthly principal & interest, property tax, homeowner's insurance, and PMI when your down payment is under 20%.",
    keywords: [
      "down payment kalkulator",
      "home down payment",
      "PMI kalkulator",
      "PITI",
      "monthly mortgage payment",
      "loan-to-value",
      "mortgage down payment",
    ],
    inputs: {
      homePrice: { label: "Home Price", help: "Total purchase price of the property." },
      downPaymentPercent: {
        label: "Down Payment (%)",
        help: "Percent of home price paid upfront. If both percent and amount are given, percent wins.",
      },
      downPaymentAmount: {
        label: "Down Payment (amount)",
        help: "Fixed amount paid upfront. Used only when no percent is given.",
      },
      annualRate: {
        label: "Annual Interest Rate (%)",
        help: "Yearly mortgage interest rate from your lender.",
      },
      termYears: { label: "Pożyczka Term (lat)", help: "Liczba of lat to repay the loan." },
      propertyTaxRate: {
        label: "Property Podatek Rate (% / year)",
        help: "Annual property tax as a percent of the home price.",
      },
      insuranceRate: {
        label: "Homeowner's Insurance Rate (% / year)",
        help: "Annual homeowner's insurance as a percent of the home price.",
      },
      pmiRate: {
        label: "PMI Rate (% / year)",
        help: "Annual private mortgage insurance rate; only applied when down payment is below 20%.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "Down Payment", help: "Cash paid upfront." },
      downPaymentPercent: {
        label: "Down Payment %",
        help: "Down payment as a percent of the home price.",
      },
      loanAmount: { label: "Pożyczka Amount", help: "Home price minus down payment." },
      monthlyPrincipalInterest: {
        label: "Monthly P&I",
        help: "Principal & interest portion of the monthly payment.",
      },
      monthlyTax: {
        label: "Monthly Property Podatek",
        help: "Annual property tax divided by 12.",
      },
      monthlyInsurance: {
        label: "Monthly Insurance",
        help: "Annual homeowner's insurance divided by 12.",
      },
      monthlyPmi: {
        label: "Monthly PMI",
        help: "Monthly private mortgage insurance (0 when down payment is 20% or more).",
      },
      totalMonthlyPayment: {
        label: "Total Monthly Payment",
        help: "P&I + tax + insurance + PMI (PITI).",
      },
      pmiRequired: {
        label: "PMI Required",
        help: "1 if private mortgage insurance is required (down payment < 20%), 0 otherwise.",
      },
      loanToValue: {
        label: "Pożyczka-to-Wartość (LTV)",
        help: "Pożyczka amount divided by home price, as a percent.",
      },
    },
    errors: {
      downPaymentExceedsPrice: "Down payment cannot exceed home price.",
      missingDownPayment: "Provide either a down payment percent or amount.",
      homePriceRange: "Home price must be between $1,000 and $100,000,000.",
      rateRange: "Annual interest rate must be between 0% and 30%.",
      termRange: "Pożyczka term must be between 1 and 40 lat.",
    },
    faq: [
      {
        q: "When is PMI required?",
        a: "Lenders typically require Private Kredyt Hipoteczny Insurance (PMI) on conventional loans when your down payment is less than 20% of the home price. PMI protects the lender — not you — and can usually be usuńd once your loan-to-value reaches 80%.",
      },
      {
        q: "Is 20% down payment really necessary?",
        a: "No. Many loan programs allow much lower down payments (FHA from 3.5%, conventional from 3%). A 20% down payment simply avoids PMI and lowers your monthly payment.",
      },
      {
        q: "What is PITI?",
        a: "PITI stands for Principal, Interest, Podatekes, and Insurance — the four components of a typical monthly mortgage payment. When PMI applies, it's often included alongside PITI.",
      },
      {
        q: "What if I enter both a down payment percent and amount?",
        a: "Percent wins. The kalkulator computes the dollar down payment from the percent of the home price and ignores the amount field.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Entrada",
    short:
      "Calcule a entrada necessária para comprar um imóvel.",
    description:
      "Calculadora gratuita de entrada. Veja qual o valor da entrada com base no preço do imóvel e na percentagem desejada.",
    keywords: ["entrada casa", "calculadora entrada", "down payment", "comprar casa", "financiamento imóvel"],
    inputs: {
      homePrice: { label: "Home Price", help: "Total purchase price of the property." },
      downPaymentPercent: {
        label: "Down Payment (%)",
        help: "Percent of home price paid upfront. If both percent and amount are given, percent wins.",
      },
      downPaymentAmount: {
        label: "Down Payment (amount)",
        help: "Fixed amount paid upfront. Used only when no percent is given.",
      },
      annualRate: {
        label: "Annual Interest Rate (%)",
        help: "Yearly mortgage interest rate from your lender.",
      },
      termYears: { label: "Loan Term (years)", help: "Number of years to repay the loan." },
      propertyTaxRate: {
        label: "Property Tax Rate (% / year)",
        help: "Annual property tax as a percent of the home price.",
      },
      insuranceRate: {
        label: "Homeowner's Insurance Rate (% / year)",
        help: "Annual homeowner's insurance as a percent of the home price.",
      },
      pmiRate: {
        label: "PMI Rate (% / year)",
        help: "Annual private mortgage insurance rate; only applied when down payment is below 20%.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "Down Payment", help: "Cash paid upfront." },
      downPaymentPercent: {
        label: "Down Payment %",
        help: "Down payment as a percent of the home price.",
      },
      loanAmount: { label: "Loan Amount", help: "Home price minus down payment." },
      monthlyPrincipalInterest: {
        label: "Monthly P&I",
        help: "Principal & interest portion of the monthly payment.",
      },
      monthlyTax: {
        label: "Monthly Property Tax",
        help: "Annual property tax divided by 12.",
      },
      monthlyInsurance: {
        label: "Monthly Insurance",
        help: "Annual homeowner's insurance divided by 12.",
      },
      monthlyPmi: {
        label: "Monthly PMI",
        help: "Monthly private mortgage insurance (0 when down payment is 20% or more).",
      },
      totalMonthlyPayment: {
        label: "Total Monthly Payment",
        help: "P&I + tax + insurance + PMI (PITI).",
      },
      pmiRequired: {
        label: "PMI Required",
        help: "1 if private mortgage insurance is required (down payment < 20%), 0 otherwise.",
      },
      loanToValue: {
        label: "Loan-to-Value (LTV)",
        help: "Loan amount divided by home price, as a percent.",
      },
    },
    errors: {
      downPaymentExceedsPrice: "Down payment cannot exceed home price.",
      missingDownPayment: "Provide either a down payment percent or amount.",
      homePriceRange: "Home price must be between $1,000 and $100,000,000.",
      rateRange: "Annual interest rate must be between 0% and 30%.",
      termRange: "Loan term must be between 1 and 40 years.",
    },
    faq: [
      {
        q: "When is PMI required?",
        a: "Lenders typically require Private Mortgage Insurance (PMI) on conventional loans when your down payment is less than 20% of the home price. PMI protects the lender — not you — and can usually be removed once your loan-to-value reaches 80%.",
      },
      {
        q: "Is 20% down payment really necessary?",
        a: "No. Many loan programs allow much lower down payments (FHA from 3.5%, conventional from 3%). A 20% down payment simply avoids PMI and lowers your monthly payment.",
      },
      {
        q: "What is PITI?",
        a: "PITI stands for Principal, Interest, Taxes, and Insurance — the four components of a typical monthly mortgage payment. When PMI applies, it's often included alongside PITI.",
      },
      {
        q: "What if I enter both a down payment percent and amount?",
        a: "Percent wins. The calculator computes the dollar down payment from the percent of the home price and ignores the amount field.",
      },
    ],
  },
  id: {
    title: "Kalkulator Uang Muka",
    short:
      "Hitung uang muka yang diperlukan untuk membeli properti.",
    description:
      "Kalkulator uang muka (DP) gratis. Lihat jumlah uang muka berdasarkan harga properti dan persentase yang diinginkan.",
    keywords: ["uang muka rumah", "kalkulator DP", "DP rumah", "beli rumah", "pembiayaan properti"],
    inputs: {
      homePrice: { label: "Home Price", help: "Total purchase price of the property." },
      downPaymentPercent: {
        label: "Down Payment (%)",
        help: "Percent of home price paid upfront. If both percent and amount are given, percent wins.",
      },
      downPaymentAmount: {
        label: "Down Payment (amount)",
        help: "Fixed amount paid upfront. Used only when no percent is given.",
      },
      annualRate: {
        label: "Annual Interest Rate (%)",
        help: "Yearly mortgage interest rate from your lender.",
      },
      termYears: { label: "Loan Term (years)", help: "Number of years to repay the loan." },
      propertyTaxRate: {
        label: "Property Tax Rate (% / year)",
        help: "Annual property tax as a percent of the home price.",
      },
      insuranceRate: {
        label: "Homeowner's Insurance Rate (% / year)",
        help: "Annual homeowner's insurance as a percent of the home price.",
      },
      pmiRate: {
        label: "PMI Rate (% / year)",
        help: "Annual private mortgage insurance rate; only applied when down payment is below 20%.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "Down Payment", help: "Cash paid upfront." },
      downPaymentPercent: {
        label: "Down Payment %",
        help: "Down payment as a percent of the home price.",
      },
      loanAmount: { label: "Loan Amount", help: "Home price minus down payment." },
      monthlyPrincipalInterest: {
        label: "Monthly P&I",
        help: "Principal & interest portion of the monthly payment.",
      },
      monthlyTax: {
        label: "Monthly Property Tax",
        help: "Annual property tax divided by 12.",
      },
      monthlyInsurance: {
        label: "Monthly Insurance",
        help: "Annual homeowner's insurance divided by 12.",
      },
      monthlyPmi: {
        label: "Monthly PMI",
        help: "Monthly private mortgage insurance (0 when down payment is 20% or more).",
      },
      totalMonthlyPayment: {
        label: "Total Monthly Payment",
        help: "P&I + tax + insurance + PMI (PITI).",
      },
      pmiRequired: {
        label: "PMI Required",
        help: "1 if private mortgage insurance is required (down payment < 20%), 0 otherwise.",
      },
      loanToValue: {
        label: "Loan-to-Value (LTV)",
        help: "Loan amount divided by home price, as a percent.",
      },
    },
    errors: {
      downPaymentExceedsPrice: "Down payment cannot exceed home price.",
      missingDownPayment: "Provide either a down payment percent or amount.",
      homePriceRange: "Home price must be between $1,000 and $100,000,000.",
      rateRange: "Annual interest rate must be between 0% and 30%.",
      termRange: "Loan term must be between 1 and 40 years.",
    },
    faq: [
      {
        q: "When is PMI required?",
        a: "Lenders typically require Private Mortgage Insurance (PMI) on conventional loans when your down payment is less than 20% of the home price. PMI protects the lender — not you — and can usually be removed once your loan-to-value reaches 80%.",
      },
      {
        q: "Is 20% down payment really necessary?",
        a: "No. Many loan programs allow much lower down payments (FHA from 3.5%, conventional from 3%). A 20% down payment simply avoids PMI and lowers your monthly payment.",
      },
      {
        q: "What is PITI?",
        a: "PITI stands for Principal, Interest, Taxes, and Insurance — the four components of a typical monthly mortgage payment. When PMI applies, it's often included alongside PITI.",
      },
      {
        q: "What if I enter both a down payment percent and amount?",
        a: "Percent wins. The calculator computes the dollar down payment from the percent of the home price and ignores the amount field.",
      },
    ],
  },


  tr: {
    title: "Peşinat Hesaplayıcı",
    short:
      "Peşinatınızı, kredi tutarınızı, aylık anapara+faiz, vergi, sigorta ve PMI ödemelerinizi tek ekranda hesaplayın.",
    description:
      "Ücretsiz ev peşinatı hesaplayıcı. Ev fiyatı ile peşinat yüzdesi veya tutarını girin; kredi tutarı, aylık anapara+faiz, emlak vergisi, konut sigortası ve peşinatınız %20'nin altındaysa özel ipotek sigortası (PMI) tutarını anında öğrenin.",
    keywords: [
      "peşinat hesaplayıcı",
      "ev peşinatı",
      "PMI hesaplama",
      "aylık taksit",
      "kredi/değer oranı",
      "konut kredisi peşinatı",
      "ipotek peşinatı",
    ],
    inputs: {
      homePrice: { label: "Ev Fiyatı", help: "Mülkün toplam satın alma bedeli." },
      downPaymentPercent: {
        label: "Peşinat (%)",
        help: "Ev fiyatının yüzde kaçının peşin ödeneceği. Hem yüzde hem tutar verilirse yüzde geçerli sayılır.",
      },
      downPaymentAmount: {
        label: "Peşinat (Tutar)",
        help: "Peşinat olarak ödenen sabit tutar. Yalnızca yüzde verilmediğinde kullanılır.",
      },
      annualRate: { label: "Yıllık Faiz Oranı (%)", help: "Bankanızın sunduğu yıllık faiz oranı." },
      termYears: { label: "Kredi Vadesi (yıl)", help: "Krediyi geri ödeyeceğiniz yıl sayısı." },
      propertyTaxRate: {
        label: "Emlak Vergisi Oranı (yıllık %)",
        help: "Yıllık emlak vergisinin ev fiyatına oranı.",
      },
      insuranceRate: {
        label: "Konut Sigortası Oranı (yıllık %)",
        help: "Yıllık konut sigortasının ev fiyatına oranı.",
      },
      pmiRate: {
        label: "PMI Oranı (yıllık %)",
        help: "Özel ipotek sigortası yıllık oranı; yalnızca peşinat %20'nin altındayken uygulanır.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "Peşinat", help: "Peşin ödenen tutar." },
      downPaymentPercent: { label: "Peşinat %", help: "Peşinatın ev fiyatına oranı." },
      loanAmount: { label: "Kredi Tutarı", help: "Ev fiyatı eksi peşinat." },
      monthlyPrincipalInterest: {
        label: "Aylık Anapara + Faiz",
        help: "Aylık taksidin anapara ve faiz bölümü.",
      },
      monthlyTax: { label: "Aylık Emlak Vergisi", help: "Yıllık emlak vergisinin 12'ye bölünmesi." },
      monthlyInsurance: { label: "Aylık Sigorta", help: "Yıllık konut sigortasının 12'ye bölünmesi." },
      monthlyPmi: {
        label: "Aylık PMI",
        help: "Aylık özel ipotek sigortası (peşinat %20 ve üzeriyse 0'dır).",
      },
      totalMonthlyPayment: {
        label: "Toplam Aylık Ödeme",
        help: "Anapara + faiz + vergi + sigorta + PMI toplamı.",
      },
      pmiRequired: {
        label: "PMI Gerekli mi?",
        help: "Peşinat %20'nin altındaysa 1, değilse 0.",
      },
      loanToValue: { label: "Kredi/Değer Oranı (LTV)", help: "Kredi tutarının ev fiyatına yüzdesi." },
    },
    errors: {
      downPaymentExceedsPrice: "Peşinat, ev fiyatını aşamaz.",
      missingDownPayment: "Peşinat yüzdesi veya tutarından en az biri girilmelidir.",
      homePriceRange: "Ev fiyatı 1.000 ile 100.000.000 arasında olmalıdır.",
      rateRange: "Yıllık faiz oranı %0 ile %30 arasında olmalıdır.",
      termRange: "Kredi vadesi 1 ile 40 yıl arasında olmalıdır.",
    },
    faq: [
      {
        q: "PMI ne zaman gerekir?",
        a: "Konvansiyonel kredilerde peşinat ev fiyatının %20'sinden azsa bankalar genellikle Özel İpotek Sigortası (PMI) ister. PMI sizi değil, krediyi vereni korur; kredi/değer oranı %80'e indiğinde genellikle kaldırılır.",
      },
      {
        q: "%20 peşinat şart mı?",
        a: "Hayır. Pek çok kredi programı %3-3,5 gibi düşük peşinatlara olanak tanır. %20 peşinat sadece PMI'dan kurtarır ve aylık ödemeyi düşürür.",
      },
      {
        q: "PITI nedir?",
        a: "PITI; anapara (Principal), faiz (Interest), vergi (Taxes) ve sigorta (Insurance) kalemlerinden oluşan tipik aylık konut kredisi ödemesinin İngilizce kısaltmasıdır.",
      },
      {
        q: "Hem yüzde hem tutar girersem ne olur?",
        a: "Yüzde geçerli sayılır. Hesaplayıcı peşinat tutarını ev fiyatının girdiğiniz yüzdesi olarak hesaplar; tutar alanı dikkate alınmaz.",
      },
    ],
  },

  de: {
    title: "Anzahlungsrechner",
    short:
      "Berechnen Sie Anzahlung, Darlehensbetrag, monatliche Tilgung + Zinsen, Steuern, Versicherung und PMI in einem.",
    description:
      "Kostenloser Anzahlungsrechner. Geben Sie Kaufpreis sowie Anzahlung in Prozent oder als Betrag ein und erhalten Sie Darlehenssumme, monatliche Rate, Grundsteuer, Wohngebäudeversicherung und PMI, falls Ihre Anzahlung unter 20 % liegt.",
    keywords: [
      "Anzahlungsrechner",
      "Eigenkapital Immobilie",
      "PMI Rechner",
      "monatliche Rate",
      "Beleihungsauslauf",
      "Hauskauf Anzahlung",
      "Immobilien Anzahlung",
    ],
    inputs: {
      homePrice: { label: "Kaufpreis", help: "Gesamtkaufpreis der Immobilie." },
      downPaymentPercent: {
        label: "Anzahlung (%)",
        help: "Anteil des Kaufpreises, der sofort gezahlt wird. Werden Prozent und Betrag angegeben, gewinnt der Prozentwert.",
      },
      downPaymentAmount: {
        label: "Anzahlung (Betrag)",
        help: "Sofort gezahlter fester Betrag. Nur verwendet, wenn kein Prozent angegeben ist.",
      },
      annualRate: { label: "Jährlicher Zinssatz (%)", help: "Jahreszins Ihres Kreditgebers." },
      termYears: { label: "Laufzeit (Jahre)", help: "Anzahl Jahre zur Rückzahlung des Darlehens." },
      propertyTaxRate: {
        label: "Grundsteuersatz (% pro Jahr)",
        help: "Jährliche Grundsteuer als Prozentsatz des Kaufpreises.",
      },
      insuranceRate: {
        label: "Wohngebäudeversicherung (% pro Jahr)",
        help: "Jährliche Versicherungsprämie als Prozentsatz des Kaufpreises.",
      },
      pmiRate: {
        label: "PMI-Satz (% pro Jahr)",
        help: "Jahressatz der privaten Hypothekenversicherung; nur fällig, wenn Anzahlung unter 20 % liegt.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "Anzahlung", help: "Sofort gezahlter Betrag." },
      downPaymentPercent: { label: "Anzahlung %", help: "Anzahlung als Prozent des Kaufpreises." },
      loanAmount: { label: "Darlehensbetrag", help: "Kaufpreis abzüglich Anzahlung." },
      monthlyPrincipalInterest: {
        label: "Monatliche Tilgung + Zinsen",
        help: "Tilgungs- und Zinsanteil der Monatsrate.",
      },
      monthlyTax: { label: "Monatliche Grundsteuer", help: "Jahressteuer geteilt durch 12." },
      monthlyInsurance: { label: "Monatliche Versicherung", help: "Jahresprämie geteilt durch 12." },
      monthlyPmi: {
        label: "Monatliche PMI",
        help: "Monatliche private Hypothekenversicherung (0 bei 20 % Anzahlung oder mehr).",
      },
      totalMonthlyPayment: {
        label: "Gesamte Monatsrate",
        help: "Tilgung + Zinsen + Steuer + Versicherung + PMI.",
      },
      pmiRequired: {
        label: "PMI erforderlich",
        help: "1, wenn PMI nötig ist (Anzahlung < 20 %), sonst 0.",
      },
      loanToValue: { label: "Beleihungsauslauf (LTV)", help: "Darlehen geteilt durch Kaufpreis, in Prozent." },
    },
    errors: {
      downPaymentExceedsPrice: "Die Anzahlung darf den Kaufpreis nicht übersteigen.",
      missingDownPayment: "Bitte Anzahlung als Prozentsatz oder als Betrag angeben.",
      homePriceRange: "Der Kaufpreis muss zwischen 1.000 und 100.000.000 liegen.",
      rateRange: "Der Zinssatz muss zwischen 0 % und 30 % liegen.",
      termRange: "Die Laufzeit muss zwischen 1 und 40 Jahren liegen.",
    },
    faq: [
      {
        q: "Wann ist PMI erforderlich?",
        a: "In den USA verlangen Kreditgeber bei konventionellen Darlehen PMI, sobald die Anzahlung unter 20 % des Kaufpreises liegt. PMI schützt den Kreditgeber und entfällt meist, sobald der Beleihungsauslauf 80 % erreicht.",
      },
      {
        q: "Sind 20 % Anzahlung zwingend?",
        a: "Nein. Viele Programme erlauben weit weniger (z. B. 3-3,5 %). 20 % vermeidet lediglich PMI und senkt die monatliche Rate.",
      },
      {
        q: "Was ist PITI?",
        a: "PITI steht für Principal, Interest, Taxes, Insurance — die vier Komponenten einer typischen monatlichen Hypothekenrate in den USA.",
      },
    ],
  },

  fr: {
    title: "Calculateur d'Apport",
    short:
      "Calculez votre apport, le capital emprunté, la mensualité, les taxes, l'assurance et le PMI en une seule étape.",
    description:
      "Calculateur d'apport personnel gratuit. Saisissez le prix du bien et l'apport en pourcentage ou en montant pour obtenir le capital emprunté, la mensualité (capital + intérêts), la taxe foncière, l'assurance habitation et le PMI si l'apport est inférieur à 20 %.",
    keywords: [
      "calculateur apport",
      "apport personnel",
      "PMI",
      "mensualité crédit immobilier",
      "ratio prêt valeur",
      "crédit immobilier",
      "achat immobilier",
    ],
    inputs: {
      homePrice: { label: "Prix du bien", help: "Prix d'achat total du bien immobilier." },
      downPaymentPercent: {
        label: "Apport (%)",
        help: "Pourcentage du prix versé en avance. Si pourcentage et montant sont fournis, le pourcentage l'emporte.",
      },
      downPaymentAmount: {
        label: "Apport (montant)",
        help: "Montant versé en avance. Utilisé uniquement si aucun pourcentage n'est saisi.",
      },
      annualRate: { label: "Taux annuel (%)", help: "Taux d'intérêt annuel proposé par votre banque." },
      termYears: { label: "Durée (années)", help: "Durée de remboursement du prêt." },
      propertyTaxRate: {
        label: "Taxe foncière (% / an)",
        help: "Taxe foncière annuelle en pourcentage du prix du bien.",
      },
      insuranceRate: {
        label: "Assurance habitation (% / an)",
        help: "Assurance habitation annuelle en pourcentage du prix du bien.",
      },
      pmiRate: {
        label: "Taux PMI (% / an)",
        help: "Taux annuel de l'assurance prêt privée; appliqué uniquement quand l'apport est inférieur à 20 %.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "Apport", help: "Montant versé à l'avance." },
      downPaymentPercent: { label: "Apport %", help: "Apport en pourcentage du prix du bien." },
      loanAmount: { label: "Capital emprunté", help: "Prix du bien moins l'apport." },
      monthlyPrincipalInterest: {
        label: "Mensualité (capital + intérêts)",
        help: "Part capital et intérêts de la mensualité.",
      },
      monthlyTax: { label: "Taxe foncière mensuelle", help: "Taxe annuelle divisée par 12." },
      monthlyInsurance: { label: "Assurance mensuelle", help: "Assurance annuelle divisée par 12." },
      monthlyPmi: {
        label: "PMI mensuel",
        help: "Assurance prêt privée mensuelle (0 si apport ≥ 20 %).",
      },
      totalMonthlyPayment: {
        label: "Mensualité totale",
        help: "Capital + intérêts + taxe + assurance + PMI.",
      },
      pmiRequired: {
        label: "PMI requis",
        help: "1 si le PMI est requis (apport < 20 %), 0 sinon.",
      },
      loanToValue: { label: "Ratio prêt/valeur (LTV)", help: "Capital emprunté divisé par prix du bien, en %." },
    },
    errors: {
      downPaymentExceedsPrice: "L'apport ne peut pas dépasser le prix du bien.",
      missingDownPayment: "Indiquez un apport en pourcentage ou en montant.",
      homePriceRange: "Le prix du bien doit être compris entre 1 000 et 100 000 000.",
      rateRange: "Le taux annuel doit être compris entre 0 % et 30 %.",
      termRange: "La durée doit être comprise entre 1 et 40 ans.",
    },
    faq: [
      {
        q: "Quand le PMI est-il exigé ?",
        a: "Aux États-Unis, les prêts conventionnels exigent une assurance prêt privée (PMI) lorsque l'apport est inférieur à 20 % du prix du bien. Le PMI protège la banque et peut généralement être supprimé une fois que le ratio prêt/valeur atteint 80 %.",
      },
      {
        q: "Faut-il vraiment 20 % d'apport ?",
        a: "Non. De nombreux programmes acceptent des apports beaucoup plus faibles (3 à 3,5 %). 20 % permet simplement d'éviter le PMI et réduit la mensualité.",
      },
      {
        q: "Qu'est-ce que PITI ?",
        a: "PITI signifie Principal, Intérêts, Taxes, Assurance — les quatre composantes d'une mensualité hypothécaire typique aux États-Unis.",
      },
    ],
  },

  es: {
    title: "Calculadora de Entrada (Down Payment)",
    short:
      "Calcula tu entrada, capital del préstamo, cuota mensual, impuestos, seguro y PMI en un solo paso.",
    description:
      "Calculadora de entrada para la compra de vivienda. Introduce el precio del inmueble y la entrada como porcentaje o importe para obtener el capital del préstamo, la cuota mensual de capital e intereses, el IBI/impuesto a la propiedad, el seguro del hogar y el PMI cuando la entrada es menor del 20 %.",
    keywords: [
      "calculadora entrada vivienda",
      "down payment",
      "PMI",
      "cuota mensual hipoteca",
      "loan to value",
      "compra vivienda",
      "entrada hipoteca",
    ],
    inputs: {
      homePrice: { label: "Precio del inmueble", help: "Precio total de compra de la propiedad." },
      downPaymentPercent: {
        label: "Entrada (%)",
        help: "Porcentaje del precio pagado por adelantado. Si das porcentaje y monto, prevalece el porcentaje.",
      },
      downPaymentAmount: {
        label: "Entrada (importe)",
        help: "Importe fijo pagado por adelantado. Solo se usa si no indicas porcentaje.",
      },
      annualRate: { label: "Tipo de interés anual (%)", help: "Tipo de interés anual de tu entidad." },
      termYears: { label: "Plazo (años)", help: "Años para amortizar el préstamo." },
      propertyTaxRate: {
        label: "Impuesto sobre la propiedad (% / año)",
        help: "Impuesto anual sobre la vivienda como porcentaje del precio.",
      },
      insuranceRate: {
        label: "Seguro del hogar (% / año)",
        help: "Prima anual del seguro como porcentaje del precio.",
      },
      pmiRate: {
        label: "Tasa PMI (% / año)",
        help: "Seguro privado de hipoteca anual; solo se aplica cuando la entrada es inferior al 20 %.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "Entrada", help: "Importe pagado por adelantado." },
      downPaymentPercent: { label: "% Entrada", help: "Entrada como porcentaje del precio." },
      loanAmount: { label: "Importe del préstamo", help: "Precio menos entrada." },
      monthlyPrincipalInterest: {
        label: "Cuota mensual (capital + intereses)",
        help: "Parte de capital e intereses de la cuota.",
      },
      monthlyTax: { label: "Impuesto mensual", help: "Impuesto anual dividido entre 12." },
      monthlyInsurance: { label: "Seguro mensual", help: "Prima anual dividida entre 12." },
      monthlyPmi: {
        label: "PMI mensual",
        help: "Seguro privado mensual (0 cuando la entrada es ≥ 20 %).",
      },
      totalMonthlyPayment: {
        label: "Cuota mensual total",
        help: "Capital + intereses + impuesto + seguro + PMI.",
      },
      pmiRequired: {
        label: "PMI requerido",
        help: "1 si se requiere PMI (entrada < 20 %), 0 en caso contrario.",
      },
      loanToValue: { label: "Loan-to-Value (LTV)", help: "Préstamo dividido entre el precio, en %." },
    },
    errors: {
      downPaymentExceedsPrice: "La entrada no puede superar el precio del inmueble.",
      missingDownPayment: "Indica una entrada en porcentaje o en importe.",
      homePriceRange: "El precio debe estar entre 1.000 y 100.000.000.",
      rateRange: "El tipo anual debe estar entre 0 % y 30 %.",
      termRange: "El plazo debe estar entre 1 y 40 años.",
    },
    faq: [
      {
        q: "¿Cuándo se requiere PMI?",
        a: "En EE. UU., los préstamos convencionales requieren seguro privado (PMI) cuando la entrada es inferior al 20 % del precio. El PMI protege al prestamista y suele eliminarse al alcanzar un 80 % de loan-to-value.",
      },
      {
        q: "¿Es obligatorio un 20 % de entrada?",
        a: "No. Muchos programas aceptan entradas mucho menores (3-3,5 %). El 20 % solo evita el PMI y reduce la cuota mensual.",
      },
      {
        q: "¿Qué es PITI?",
        a: "PITI significa Principal, Interés, Impuestos y Seguro — los cuatro componentes de una cuota hipotecaria mensual típica en EE. UU.",
      },
    ],
  },

  it: {
    title: "Calcolatore Acconto Mutuo",
    short:
      "Calcola acconto, capitale finanziato, rata mensile, imposte, assicurazione e PMI in un unico passaggio.",
    description:
      "Calcolatore gratuito dell'acconto per l'acquisto della casa. Inserisci prezzo dell'immobile e acconto in percentuale o importo per ottenere capitale finanziato, rata mensile (capitale + interessi), imposte sulla proprietà, assicurazione e PMI quando l'acconto è inferiore al 20 %.",
    keywords: [
      "calcolatore acconto",
      "acconto casa",
      "PMI",
      "rata mensile mutuo",
      "loan to value",
      "acquisto casa",
      "acconto mutuo",
    ],
    inputs: {
      homePrice: { label: "Prezzo dell'immobile", help: "Prezzo totale di acquisto dell'immobile." },
      downPaymentPercent: {
        label: "Acconto (%)",
        help: "Percentuale del prezzo pagata in anticipo. Se indichi sia percentuale che importo, vince la percentuale.",
      },
      downPaymentAmount: {
        label: "Acconto (importo)",
        help: "Importo fisso pagato in anticipo. Usato solo se non viene indicata la percentuale.",
      },
      annualRate: { label: "Tasso annuo (%)", help: "Tasso d'interesse annuo della tua banca." },
      termYears: { label: "Durata (anni)", help: "Anni per rimborsare il mutuo." },
      propertyTaxRate: {
        label: "Imposta sulla proprietà (% / anno)",
        help: "Imposta annuale sulla casa in percentuale del prezzo.",
      },
      insuranceRate: {
        label: "Assicurazione casa (% / anno)",
        help: "Premio annuale assicurazione in percentuale del prezzo.",
      },
      pmiRate: {
        label: "Tasso PMI (% / anno)",
        help: "Assicurazione privata mutuo annuale; applicata solo se l'acconto è sotto il 20 %.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "Acconto", help: "Importo pagato in anticipo." },
      downPaymentPercent: { label: "% Acconto", help: "Acconto in percentuale del prezzo." },
      loanAmount: { label: "Importo del mutuo", help: "Prezzo meno acconto." },
      monthlyPrincipalInterest: {
        label: "Rata mensile (capitale + interessi)",
        help: "Quota capitale e interessi della rata.",
      },
      monthlyTax: { label: "Imposta mensile", help: "Imposta annua divisa per 12." },
      monthlyInsurance: { label: "Assicurazione mensile", help: "Premio annuo diviso per 12." },
      monthlyPmi: {
        label: "PMI mensile",
        help: "Assicurazione privata mensile (0 se l'acconto è ≥ 20 %).",
      },
      totalMonthlyPayment: {
        label: "Rata mensile totale",
        help: "Capitale + interessi + imposta + assicurazione + PMI.",
      },
      pmiRequired: {
        label: "PMI richiesto",
        help: "1 se è richiesto il PMI (acconto < 20 %), 0 altrimenti.",
      },
      loanToValue: { label: "Loan-to-Value (LTV)", help: "Mutuo diviso per il prezzo, in %." },
    },
    errors: {
      downPaymentExceedsPrice: "L'acconto non può superare il prezzo dell'immobile.",
      missingDownPayment: "Indica un acconto in percentuale o in importo.",
      homePriceRange: "Il prezzo deve essere compreso tra 1.000 e 100.000.000.",
      rateRange: "Il tasso annuo deve essere compreso tra 0 % e 30 %.",
      termRange: "La durata deve essere compresa tra 1 e 40 anni.",
    },
    faq: [
      {
        q: "Quando è richiesto il PMI?",
        a: "Negli USA i mutui convenzionali richiedono il PMI quando l'acconto è inferiore al 20 % del prezzo. Il PMI protegge la banca e di norma si elimina raggiunto il 80 % di loan-to-value.",
      },
      {
        q: "Serve davvero un 20 % di acconto?",
        a: "No. Molti programmi accettano acconti molto più bassi (3-3,5 %). Il 20 % evita solo il PMI e abbassa la rata.",
      },
      {
        q: "Cos'è PITI?",
        a: "PITI sta per Principal, Interest, Taxes, Insurance — le quattro componenti di una tipica rata mensile di mutuo statunitense.",
      },
    ],
  },

  ar: {
    title: "حاسبة الدفعة المقدمة",
    short:
      "احسب الدفعة المقدمة ومبلغ القرض والقسط الشهري (أصل + فائدة) والضرائب والتأمين وتأمين الرهن الخاص PMI في خطوة واحدة.",
    description:
      "حاسبة دفعة مقدمة مجانية لشراء المنزل. أدخل سعر المنزل ونسبة الدفعة المقدمة أو مبلغها لتحصل على مبلغ القرض والقسط الشهري والضرائب العقارية والتأمين على المنزل، بالإضافة إلى PMI إذا كانت الدفعة المقدمة أقل من 20٪.",
    keywords: [
      "حاسبة الدفعة المقدمة",
      "دفعة منزل",
      "حاسبة PMI",
      "قسط شهري عقاري",
      "نسبة القرض إلى القيمة",
      "شراء منزل",
      "قرض عقاري",
    ],
    inputs: {
      homePrice: { label: "سعر المنزل", help: "إجمالي سعر شراء العقار." },
      downPaymentPercent: {
        label: "الدفعة المقدمة (%)",
        help: "النسبة المئوية من السعر المدفوعة مقدمًا. عند إدخال النسبة والمبلغ معًا تُعتمد النسبة.",
      },
      downPaymentAmount: {
        label: "الدفعة المقدمة (مبلغ)",
        help: "مبلغ ثابت يُدفع مقدمًا. يُستخدم فقط عند عدم إدخال النسبة.",
      },
      annualRate: { label: "معدل الفائدة السنوي (%)", help: "معدل الفائدة السنوي من جهة الإقراض." },
      termYears: { label: "مدة القرض (سنوات)", help: "عدد سنوات سداد القرض." },
      propertyTaxRate: {
        label: "ضريبة العقار (% / سنة)",
        help: "الضريبة السنوية على العقار كنسبة من سعره.",
      },
      insuranceRate: {
        label: "تأمين المنزل (% / سنة)",
        help: "قسط التأمين السنوي على المنزل كنسبة من سعره.",
      },
      pmiRate: {
        label: "معدل PMI (% / سنة)",
        help: "نسبة التأمين الخاص على الرهن السنوية؛ يُطبَّق فقط عندما تقل الدفعة المقدمة عن 20٪.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "الدفعة المقدمة", help: "المبلغ المدفوع مقدمًا." },
      downPaymentPercent: { label: "نسبة الدفعة المقدمة", help: "الدفعة المقدمة كنسبة من سعر المنزل." },
      loanAmount: { label: "مبلغ القرض", help: "سعر المنزل ناقص الدفعة المقدمة." },
      monthlyPrincipalInterest: {
        label: "القسط الشهري (أصل + فائدة)",
        help: "حصة الأصل والفائدة من القسط الشهري.",
      },
      monthlyTax: { label: "ضريبة شهرية", help: "الضريبة السنوية مقسومة على 12." },
      monthlyInsurance: { label: "تأمين شهري", help: "القسط السنوي للتأمين مقسوم على 12." },
      monthlyPmi: {
        label: "PMI شهري",
        help: "تأمين الرهن الخاص الشهري (0 إذا كانت الدفعة المقدمة 20٪ أو أكثر).",
      },
      totalMonthlyPayment: {
        label: "إجمالي القسط الشهري",
        help: "الأصل + الفائدة + الضريبة + التأمين + PMI.",
      },
      pmiRequired: {
        label: "PMI مطلوب",
        help: "1 إذا كان PMI مطلوبًا (الدفعة المقدمة < 20٪)، و0 خلاف ذلك.",
      },
      loanToValue: { label: "نسبة القرض إلى القيمة LTV", help: "مبلغ القرض مقسومًا على سعر المنزل، كنسبة." },
    },
    errors: {
      downPaymentExceedsPrice: "لا يمكن أن تتجاوز الدفعة المقدمة سعر المنزل.",
      missingDownPayment: "يجب إدخال نسبة الدفعة المقدمة أو مبلغها.",
      homePriceRange: "يجب أن يكون سعر المنزل بين 1,000 و100,000,000.",
      rateRange: "يجب أن يكون معدل الفائدة السنوي بين 0٪ و30٪.",
      termRange: "يجب أن تكون مدة القرض بين 1 و40 سنة.",
    },
    faq: [
      {
        q: "متى يكون PMI مطلوبًا؟",
        a: "في الولايات المتحدة، تشترط القروض التقليدية تأمين الرهن الخاص (PMI) إذا قلت الدفعة المقدمة عن 20٪ من سعر المنزل. يحمي PMI الجهة المُقرضة وعادة ما يُلغى عند بلوغ نسبة القرض إلى القيمة 80٪.",
      },
      {
        q: "هل دفعة مقدمة بنسبة 20٪ ضرورية؟",
        a: "لا. هناك برامج تقبل دفعات أقل بكثير (3-3.5٪). الـ 20٪ يلغي PMI ويخفض القسط الشهري فقط.",
      },
      {
        q: "ما المقصود بـ PITI؟",
        a: "PITI اختصار لـ Principal و Interest و Taxes و Insurance، وهي المكونات الأربعة الشهرية لقسط الرهن العقاري الأمريكي النموذجي.",
      },
    ],
  },

  ru: {
    title: "Калькулятор первоначального взноса",
    short:
      "Рассчитайте первоначальный взнос, сумму кредита, ежемесячный платёж (тело + проценты), налоги, страхование и PMI в одном инструменте.",
    description:
      "Бесплатный калькулятор первоначального взноса по ипотеке. Введите стоимость недвижимости и взнос в процентах или сумме, чтобы получить сумму кредита, ежемесячный платёж по телу и процентам, налог на имущество, страхование и PMI, если взнос менее 20 %.",
    keywords: [
      "калькулятор первоначального взноса",
      "ипотека",
      "PMI",
      "ежемесячный платёж по ипотеке",
      "соотношение кредит/стоимость",
      "покупка жилья",
      "первый взнос по ипотеке",
    ],
    inputs: {
      homePrice: { label: "Стоимость недвижимости", help: "Полная цена покупки объекта." },
      downPaymentPercent: {
        label: "Первоначальный взнос (%)",
        help: "Доля цены, выплачиваемая сразу. Если указаны и процент и сумма, побеждает процент.",
      },
      downPaymentAmount: {
        label: "Первоначальный взнос (сумма)",
        help: "Фиксированная сумма, уплачиваемая сразу. Используется только если процент не указан.",
      },
      annualRate: { label: "Годовая ставка (%)", help: "Годовая процентная ставка по ипотеке." },
      termYears: { label: "Срок кредита (лет)", help: "Количество лет до полного погашения." },
      propertyTaxRate: {
        label: "Налог на имущество (% / год)",
        help: "Ежегодный налог как процент от стоимости недвижимости.",
      },
      insuranceRate: {
        label: "Страхование жилья (% / год)",
        help: "Ежегодная страховая премия как процент от стоимости недвижимости.",
      },
      pmiRate: {
        label: "Ставка PMI (% / год)",
        help: "Годовая ставка частного ипотечного страхования; применяется только при взносе менее 20 %.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "Первоначальный взнос", help: "Сумма, уплаченная сразу." },
      downPaymentPercent: { label: "% взноса", help: "Взнос в процентах от стоимости." },
      loanAmount: { label: "Сумма кредита", help: "Стоимость минус первоначальный взнос." },
      monthlyPrincipalInterest: {
        label: "Ежемесячный платёж (тело + проценты)",
        help: "Часть платежа на тело долга и проценты.",
      },
      monthlyTax: { label: "Налог в месяц", help: "Годовой налог, делённый на 12." },
      monthlyInsurance: { label: "Страхование в месяц", help: "Годовая премия, делённая на 12." },
      monthlyPmi: {
        label: "PMI в месяц",
        help: "Месячная стоимость PMI (0, если взнос ≥ 20 %).",
      },
      totalMonthlyPayment: {
        label: "Итоговый ежемесячный платёж",
        help: "Тело + проценты + налог + страхование + PMI.",
      },
      pmiRequired: {
        label: "PMI требуется",
        help: "1, если PMI требуется (взнос < 20 %), иначе 0.",
      },
      loanToValue: { label: "LTV — кредит к стоимости", help: "Сумма кредита, делённая на стоимость, в %." },
    },
    errors: {
      downPaymentExceedsPrice: "Первоначальный взнос не может превышать стоимость недвижимости.",
      missingDownPayment: "Укажите взнос в процентах или сумме.",
      homePriceRange: "Стоимость недвижимости должна быть от 1 000 до 100 000 000.",
      rateRange: "Годовая ставка должна быть от 0 % до 30 %.",
      termRange: "Срок кредита должен быть от 1 до 40 лет.",
    },
    faq: [
      {
        q: "Когда требуется PMI?",
        a: "В США обычные ипотечные кредиты требуют частное ипотечное страхование (PMI), если первоначальный взнос меньше 20 % от стоимости жилья. PMI защищает кредитора и обычно отменяется, когда соотношение кредит/стоимость достигает 80 %.",
      },
      {
        q: "Обязателен ли взнос 20 %?",
        a: "Нет. Многие программы допускают взнос гораздо меньше (3-3,5 %). 20 % позволяет лишь избежать PMI и снижает ежемесячный платёж.",
      },
      {
        q: "Что такое PITI?",
        a: "PITI — это Principal, Interest, Taxes, Insurance — четыре составляющие типового ежемесячного ипотечного платежа в США.",
      },
    ],
  },

  zh: {
    title: "首付计算器",
    short: "一站式计算首付、贷款金额、每月本息、税费、保险及 PMI。",
    description:
      "免费购房首付计算器。输入房价以及首付比例或金额，即可获得贷款金额、每月本金与利息、房产税、房屋保险，并在首付低于 20% 时自动计算 PMI。",
    keywords: [
      "首付计算器",
      "购房首付",
      "PMI 计算器",
      "每月按揭",
      "贷款价值比",
      "买房贷款",
      "房贷首付",
    ],
    inputs: {
      homePrice: { label: "房屋价格", help: "房产的总购买价格。" },
      downPaymentPercent: {
        label: "首付比例 (%)",
        help: "预付的房价百分比。同时输入比例和金额时，以比例为准。",
      },
      downPaymentAmount: {
        label: "首付金额",
        help: "一次性预付的固定金额。仅在未填写比例时使用。",
      },
      annualRate: { label: "年利率 (%)", help: "贷款机构提供的年利率。" },
      termYears: { label: "贷款期限（年）", help: "偿还贷款的年数。" },
      propertyTaxRate: {
        label: "房产税率（年 %）",
        help: "房产税占房屋价格的年百分比。",
      },
      insuranceRate: {
        label: "房屋保险费率（年 %）",
        help: "房屋保险占房屋价格的年百分比。",
      },
      pmiRate: {
        label: "PMI 费率（年 %）",
        help: "私人按揭保险年费率；仅在首付低于 20% 时计算。",
      },
    },
    outputs: {
      downPaymentAmount: { label: "首付", help: "预付的金额。" },
      downPaymentPercent: { label: "首付比例", help: "首付占房价的百分比。" },
      loanAmount: { label: "贷款金额", help: "房价减去首付。" },
      monthlyPrincipalInterest: {
        label: "每月本息",
        help: "每月还款中本金与利息部分。",
      },
      monthlyTax: { label: "每月房产税", help: "年房产税除以 12。" },
      monthlyInsurance: { label: "每月保险", help: "年保险费除以 12。" },
      monthlyPmi: {
        label: "每月 PMI",
        help: "每月私人按揭保险（首付 ≥ 20% 时为 0）。",
      },
      totalMonthlyPayment: {
        label: "每月总还款",
        help: "本息 + 房产税 + 保险 + PMI。",
      },
      pmiRequired: {
        label: "是否需要 PMI",
        help: "需要 PMI（首付 < 20%）显示 1，否则为 0。",
      },
      loanToValue: { label: "贷款价值比 (LTV)", help: "贷款金额除以房价，百分比。" },
    },
    errors: {
      downPaymentExceedsPrice: "首付不能超过房屋价格。",
      missingDownPayment: "请输入首付比例或金额。",
      homePriceRange: "房屋价格必须在 1,000 至 100,000,000 之间。",
      rateRange: "年利率必须在 0% 至 30% 之间。",
      termRange: "贷款期限必须在 1 至 40 年之间。",
    },
    faq: [
      {
        q: "什么时候需要 PMI？",
        a: "在美国，常规贷款在首付低于房价 20% 时通常要求购买私人按揭保险（PMI）。PMI 保护贷方，通常在贷款价值比降至 80% 时可以取消。",
      },
      {
        q: "20% 首付是必须的吗？",
        a: "并非如此。许多贷款项目允许更低首付（3-3.5%）。20% 只是为了免除 PMI 并降低月供。",
      },
      {
        q: "什么是 PITI？",
        a: "PITI 是 Principal（本金）、Interest（利息）、Taxes（房产税）、Insurance（保险）的缩写，代表典型美式月度按揭还款的四个组成部分。",
      },
    ],
  },

  ja: {
    title: "頭金計算機",
    short:
      "頭金、借入額、月々の元利金、固定資産税、火災保険、PMI（米国の住宅ローン保険）をまとめて計算します。",
    description:
      "無料の頭金計算機。物件価格と頭金の割合または金額を入力するだけで、借入額、月々の元利返済額、固定資産税、火災保険、頭金が 20% 未満のときの PMI を確認できます。",
    keywords: [
      "頭金計算機",
      "住宅頭金",
      "PMI 計算機",
      "毎月の住宅ローン返済",
      "ローン担保比率",
      "住宅購入",
      "ローン頭金",
    ],
    inputs: {
      homePrice: { label: "物件価格", help: "購入する不動産の総額。" },
      downPaymentPercent: {
        label: "頭金 (%)",
        help: "物件価格に対して頭金として支払う割合。割合と金額の両方を入力した場合は割合が優先されます。",
      },
      downPaymentAmount: {
        label: "頭金 (金額)",
        help: "頭金として支払う固定金額。割合を入力していない場合のみ使用されます。",
      },
      annualRate: { label: "年利 (%)", help: "金融機関の提示する年間金利。" },
      termYears: { label: "返済期間（年）", help: "ローンを返済する年数。" },
      propertyTaxRate: {
        label: "固定資産税率（年 %）",
        help: "年間の固定資産税を物件価格に対する割合で指定します。",
      },
      insuranceRate: {
        label: "火災保険料率（年 %）",
        help: "年間の火災保険料を物件価格に対する割合で指定します。",
      },
      pmiRate: {
        label: "PMI 料率（年 %）",
        help: "民間住宅ローン保険の年料率。頭金が 20% 未満の場合のみ適用されます。",
      },
    },
    outputs: {
      downPaymentAmount: { label: "頭金", help: "一括で支払う頭金額。" },
      downPaymentPercent: { label: "頭金 %", help: "頭金の物件価格に対する割合。" },
      loanAmount: { label: "借入額", help: "物件価格から頭金を引いた額。" },
      monthlyPrincipalInterest: {
        label: "毎月の元利返済額",
        help: "月々の返済のうち元金と利息の合計。",
      },
      monthlyTax: { label: "月々の固定資産税", help: "年税額を 12 で割った値。" },
      monthlyInsurance: { label: "月々の火災保険料", help: "年間保険料を 12 で割った値。" },
      monthlyPmi: {
        label: "月々の PMI",
        help: "民間住宅ローン保険の月額（頭金 20% 以上の場合は 0）。",
      },
      totalMonthlyPayment: {
        label: "毎月の合計支払額",
        help: "元利 + 税 + 保険 + PMI。",
      },
      pmiRequired: {
        label: "PMI 必要",
        help: "PMI が必要なら 1、不要なら 0。",
      },
      loanToValue: { label: "ローン担保比率 (LTV)", help: "借入額を物件価格で割った割合（%）。" },
    },
    errors: {
      downPaymentExceedsPrice: "頭金は物件価格を超えることはできません。",
      missingDownPayment: "頭金の割合または金額のいずれかを入力してください。",
      homePriceRange: "物件価格は 1,000 ～ 100,000,000 の範囲で入力してください。",
      rateRange: "年利は 0% ～ 30% の範囲で入力してください。",
      termRange: "返済期間は 1 ～ 40 年の範囲で入力してください。",
    },
    faq: [
      {
        q: "PMI はいつ必要ですか？",
        a: "米国では、頭金が物件価格の 20% 未満の場合、通常の住宅ローンでは民間住宅ローン保険 (PMI) が必要となります。PMI は貸し手を保護するもので、LTV が 80% に達すれば一般的に解約できます。",
      },
      {
        q: "頭金は本当に 20% 必要ですか？",
        a: "必須ではありません。3〜3.5% で組める制度も多数あります。20% は PMI を回避し月々の返済額を減らすためのひとつの目安です。",
      },
      {
        q: "PITI とは何ですか？",
        a: "PITI は Principal（元金）・Interest（利息）・Taxes（税金）・Insurance（保険）の頭文字で、典型的な米国の月次住宅ローン支払額の 4 構成要素を表します。",
      },
    ],
  },

  ko: {
    title: "다운페이먼트 계산기",
    short:
      "다운페이먼트, 대출 원금, 월 원리금, 세금, 보험, PMI를 한 번에 계산합니다.",
    description:
      "무료 주택 다운페이먼트 계산기. 주택 가격과 다운페이먼트 비율 또는 금액을 입력하면 대출 원금, 월 원리금, 재산세, 주택보험을 보여주며, 다운페이먼트가 20% 미만이면 PMI까지 자동 계산합니다.",
    keywords: [
      "다운페이먼트 계산기",
      "주택 계약금",
      "PMI 계산기",
      "월 주택담보 대출 상환액",
      "LTV",
      "주택 구입",
      "다운페이",
    ],
    inputs: {
      homePrice: { label: "주택 가격", help: "부동산의 총 구입 가격." },
      downPaymentPercent: {
        label: "다운페이먼트 (%)",
        help: "주택 가격에서 미리 지불하는 비율. 비율과 금액을 모두 입력하면 비율이 우선합니다.",
      },
      downPaymentAmount: {
        label: "다운페이먼트 (금액)",
        help: "미리 지불하는 고정 금액. 비율을 입력하지 않은 경우에만 사용됩니다.",
      },
      annualRate: { label: "연이율 (%)", help: "금융기관이 제시하는 연 이자율." },
      termYears: { label: "대출 기간 (년)", help: "대출을 상환하는 연수." },
      propertyTaxRate: {
        label: "재산세율 (연 %)",
        help: "연간 재산세를 주택 가격에 대한 비율로 지정.",
      },
      insuranceRate: {
        label: "주택보험료율 (연 %)",
        help: "연간 보험료를 주택 가격에 대한 비율로 지정.",
      },
      pmiRate: {
        label: "PMI 비율 (연 %)",
        help: "사설 모기지 보험 연 비율. 다운페이먼트가 20% 미만일 때만 적용됩니다.",
      },
    },
    outputs: {
      downPaymentAmount: { label: "다운페이먼트", help: "미리 지불하는 금액." },
      downPaymentPercent: { label: "다운페이먼트 %", help: "주택 가격 대비 다운페이먼트 비율." },
      loanAmount: { label: "대출 금액", help: "주택 가격에서 다운페이먼트를 뺀 금액." },
      monthlyPrincipalInterest: {
        label: "월 원리금",
        help: "월 상환액 중 원금과 이자 부분.",
      },
      monthlyTax: { label: "월 재산세", help: "연간 재산세를 12로 나눈 값." },
      monthlyInsurance: { label: "월 보험료", help: "연간 보험료를 12로 나눈 값." },
      monthlyPmi: {
        label: "월 PMI",
        help: "월 사설 모기지 보험료 (다운페이먼트가 20% 이상일 때는 0).",
      },
      totalMonthlyPayment: {
        label: "월 총 상환액",
        help: "원리금 + 세금 + 보험 + PMI.",
      },
      pmiRequired: {
        label: "PMI 필요 여부",
        help: "PMI가 필요하면 1, 아니면 0.",
      },
      loanToValue: { label: "대출/가치 비율 (LTV)", help: "대출 금액을 주택 가격으로 나눈 비율(%)." },
    },
    errors: {
      downPaymentExceedsPrice: "다운페이먼트는 주택 가격을 초과할 수 없습니다.",
      missingDownPayment: "다운페이먼트 비율 또는 금액을 입력하세요.",
      homePriceRange: "주택 가격은 1,000 ~ 100,000,000 사이여야 합니다.",
      rateRange: "연이율은 0% ~ 30% 사이여야 합니다.",
      termRange: "대출 기간은 1 ~ 40년 사이여야 합니다.",
    },
    faq: [
      {
        q: "PMI는 언제 필요한가요?",
        a: "미국에서는 일반 모기지의 경우 다운페이먼트가 주택 가격의 20% 미만이면 사설 모기지 보험(PMI)을 요구합니다. PMI는 대출 기관을 보호하며 LTV가 80%에 도달하면 일반적으로 해지할 수 있습니다.",
      },
      {
        q: "다운페이먼트가 꼭 20%여야 하나요?",
        a: "아닙니다. 3~3.5%처럼 훨씬 낮은 다운페이먼트로 가능한 프로그램도 많습니다. 20%는 PMI를 피하고 월 상환액을 낮추기 위한 기준입니다.",
      },
      {
        q: "PITI란 무엇인가요?",
        a: "PITI는 Principal(원금), Interest(이자), Taxes(세금), Insurance(보험)의 약자로 미국 표준 월 모기지 상환액의 네 가지 구성요소를 의미합니다.",
      },
    ],
  },

  hi: {
    title: "डाउन पेमेंट कैलकुलेटर",
    short:
      "डाउन पेमेंट, ऋण राशि, मासिक मूलधन+ब्याज, कर, बीमा और PMI एक ही जगह पर निकालें।",
    description:
      "मुफ्त घर डाउन पेमेंट कैलकुलेटर। संपत्ति की कीमत और डाउन पेमेंट प्रतिशत या राशि दर्ज करें, और ऋण राशि, मासिक मूलधन और ब्याज, संपत्ति कर, गृह बीमा तथा डाउन पेमेंट 20% से कम होने पर PMI तुरंत देखें।",
    keywords: [
      "डाउन पेमेंट कैलकुलेटर",
      "घर डाउन पेमेंट",
      "PMI कैलकुलेटर",
      "मासिक EMI",
      "लोन टू वैल्यू",
      "घर खरीदना",
      "गृह ऋण डाउन पेमेंट",
    ],
    inputs: {
      homePrice: { label: "संपत्ति मूल्य", help: "संपत्ति की कुल खरीद कीमत।" },
      downPaymentPercent: {
        label: "डाउन पेमेंट (%)",
        help: "संपत्ति मूल्य का प्रतिशत जो पहले भुगतान किया जाता है। प्रतिशत और राशि दोनों होने पर प्रतिशत मान्य होता है।",
      },
      downPaymentAmount: {
        label: "डाउन पेमेंट (राशि)",
        help: "पहले से भुगतान की गई निश्चित राशि। केवल तब उपयोग होती है जब प्रतिशत नहीं दिया गया हो।",
      },
      annualRate: { label: "वार्षिक ब्याज दर (%)", help: "ऋणदाता द्वारा दी जाने वाली वार्षिक ब्याज दर।" },
      termYears: { label: "ऋण अवधि (वर्ष)", help: "ऋण चुकाने की अवधि।" },
      propertyTaxRate: {
        label: "संपत्ति कर दर (वार्षिक %)",
        help: "संपत्ति की कीमत के प्रतिशत के रूप में वार्षिक संपत्ति कर।",
      },
      insuranceRate: {
        label: "गृह बीमा दर (वार्षिक %)",
        help: "संपत्ति की कीमत के प्रतिशत के रूप में वार्षिक गृह बीमा।",
      },
      pmiRate: {
        label: "PMI दर (वार्षिक %)",
        help: "निजी बंधक बीमा की वार्षिक दर; केवल जब डाउन पेमेंट 20% से कम हो तब लागू होती है।",
      },
    },
    outputs: {
      downPaymentAmount: { label: "डाउन पेमेंट", help: "पहले से भुगतान की गई राशि।" },
      downPaymentPercent: { label: "डाउन पेमेंट %", help: "संपत्ति मूल्य के सापेक्ष डाउन पेमेंट का प्रतिशत।" },
      loanAmount: { label: "ऋण राशि", help: "संपत्ति मूल्य से डाउन पेमेंट घटाने पर शेष राशि।" },
      monthlyPrincipalInterest: {
        label: "मासिक मूलधन + ब्याज",
        help: "मासिक किस्त का मूलधन और ब्याज भाग।",
      },
      monthlyTax: { label: "मासिक संपत्ति कर", help: "वार्षिक कर को 12 से विभाजित।" },
      monthlyInsurance: { label: "मासिक बीमा", help: "वार्षिक बीमा को 12 से विभाजित।" },
      monthlyPmi: {
        label: "मासिक PMI",
        help: "मासिक निजी बंधक बीमा (डाउन पेमेंट 20% या अधिक होने पर 0)।",
      },
      totalMonthlyPayment: {
        label: "कुल मासिक भुगतान",
        help: "मूलधन + ब्याज + कर + बीमा + PMI।",
      },
      pmiRequired: {
        label: "क्या PMI आवश्यक है",
        help: "PMI आवश्यक होने पर 1, अन्यथा 0।",
      },
      loanToValue: { label: "ऋण/मूल्य अनुपात (LTV)", help: "ऋण राशि को संपत्ति मूल्य से विभाजित कर प्रतिशत में।" },
    },
    errors: {
      downPaymentExceedsPrice: "डाउन पेमेंट संपत्ति मूल्य से अधिक नहीं हो सकती।",
      missingDownPayment: "कृपया डाउन पेमेंट प्रतिशत या राशि दर्ज करें।",
      homePriceRange: "संपत्ति मूल्य 1,000 से 100,000,000 के बीच होना चाहिए।",
      rateRange: "वार्षिक ब्याज दर 0% से 30% के बीच होनी चाहिए।",
      termRange: "ऋण अवधि 1 से 40 वर्ष के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "PMI कब अनिवार्य होता है?",
        a: "अमेरिका में पारंपरिक ऋणों के लिए जब डाउन पेमेंट संपत्ति मूल्य के 20% से कम हो, तब ऋणदाता निजी बंधक बीमा (PMI) माँगते हैं। PMI ऋणदाता की सुरक्षा करता है और आमतौर पर लोन-टू-वैल्यू 80% तक पहुँचने पर हटाया जा सकता है।",
      },
      {
        q: "क्या 20% डाउन पेमेंट ज़रूरी है?",
        a: "नहीं। कई कार्यक्रम बहुत कम डाउन पेमेंट (3-3.5%) पर भी ऋण देते हैं। 20% केवल PMI से बचने और मासिक किस्त कम करने के लिए होता है।",
      },
      {
        q: "PITI क्या है?",
        a: "PITI का अर्थ है Principal, Interest, Taxes, Insurance — अमेरिकी मासिक बंधक भुगतान के चार मुख्य घटक।",
      },
    ],
  },
};

export default i18n;
