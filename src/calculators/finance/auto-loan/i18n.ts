import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Auto Loan Calculator",
    short: "Calculate your monthly car payment, total cost, and interest for any auto loan.",
    description:
      "Free auto loan calculator. Enter the vehicle price, down payment, trade-in value, interest rate, and term to see your monthly payment and total loan cost.",
    keywords: [
      "auto loan calculator",
      "car loan calculator",
      "monthly car payment",
      "vehicle financing",
      "car payment calculator",
      "auto loan interest",
      "car financing calculator",
    ],
    inputs: {
      vehiclePrice: { label: "Vehicle Price", help: "The purchase price of the vehicle." },
      downPayment: { label: "Down Payment", help: "Amount paid upfront at purchase." },
      tradeInValue: { label: "Trade-In Value", help: "Value of any vehicle you trade in. Reduces the financed amount." },
      annualRate: { label: "Annual Interest Rate (%)", help: "The APR offered by your lender." },
      termMonths: { label: "Loan Term (months)", help: "Length of the loan in months (e.g. 36, 48, 60, 72)." },
    },
    outputs: {
      monthlyPayment: { label: "Monthly Payment", help: "Fixed amount due each month." },
      loanAmount: { label: "Amount Financed", help: "Vehicle price minus down payment and trade-in value." },
      totalPayment: { label: "Total Payment", help: "Sum of all monthly payments over the loan term." },
      totalInterest: { label: "Total Interest", help: "Total interest paid over the life of the loan." },
    },
    errors: {
      vehiclePriceRange: "Vehicle price must be between $1,000 and $500,000.",
      downPaymentExceeds: "Down payment and trade-in cannot exceed vehicle price.",
      rateRange: "Annual rate must be between 0% and 40%.",
      termRange: "Loan term must be between 12 and 96 months.",
    },
    faq: [
      {
        q: "What is the best loan term for a car?",
        a: "Shorter terms (36–48 months) cost less in total interest but have higher monthly payments. Longer terms (60–84 months) lower monthly payments but increase total interest and risk being 'underwater' on the loan (owing more than the car is worth).",
      },
      {
        q: "How does a trade-in affect my auto loan?",
        a: "The trade-in value is applied directly against the purchase price, reducing the amount you need to finance. This lowers both your monthly payment and total interest.",
      },
      {
        q: "What is a good auto loan rate?",
        a: "Rates vary by credit score, lender, and loan term. As of recent years, well-qualified buyers often receive rates between 4–7% for new cars and 6–12% for used cars. Always compare multiple lenders.",
      },
    ],
  },

  tr: {
    title: "Araç Kredisi Hesaplayıcı",
    short: "Herhangi bir araç kredisi için aylık ödemeyi, toplam maliyeti ve faizi hesaplayın.",
    description:
      "Ücretsiz araç kredisi hesaplayıcısı. Araç fiyatı, peşinat, takas değeri, faiz oranı ve vadeyi girerek aylık ödemenizi ve toplam kredi maliyetinizi görün.",
    keywords: [
      "araç kredisi hesaplayıcı",
      "otomobil kredisi",
      "aylık araba taksiti",
      "araç finansmanı",
      "araba kredisi hesaplama",
      "otomobil faizi",
      "araç satın alma hesaplayıcı",
    ],
    inputs: {
      vehiclePrice: { label: "Araç Fiyatı", help: "Aracın satın alma fiyatı." },
      downPayment: { label: "Peşinat", help: "Satın almada peşin ödenen tutar." },
      tradeInValue: { label: "Takas Değeri", help: "Takas ettiğiniz aracın değeri. Finanse edilecek tutarı azaltır." },
      annualRate: { label: "Yıllık Faiz Oranı (%)", help: "Bankanızın sunduğu yıllık faiz oranı." },
      termMonths: { label: "Kredi Vadesi (ay)", help: "Kredinin ay cinsinden süresi (örn. 36, 48, 60)." },
    },
    outputs: {
      monthlyPayment: { label: "Aylık Taksit", help: "Her ay ödenmesi gereken sabit tutar." },
      loanAmount: { label: "Finanse Edilen Tutar", help: "Araç fiyatından peşinat ve takas değeri düşüldükten kalan." },
      totalPayment: { label: "Toplam Ödeme", help: "Kredi vadesi boyunca yapılan tüm ödemelerin toplamı." },
      totalInterest: { label: "Toplam Faiz", help: "Kredi süresince ödenen toplam faiz." },
    },
    errors: {
      vehiclePriceRange: "Araç fiyatı 1.000 ile 500.000 arasında olmalıdır.",
      downPaymentExceeds: "Peşinat ve takas değeri araç fiyatını aşamaz.",
      rateRange: "Yıllık faiz oranı %0 ile %40 arasında olmalıdır.",
      termRange: "Kredi vadesi 12 ile 96 ay arasında olmalıdır.",
    },
    faq: [
      {
        q: "Araç kredisinde en uygun vade nedir?",
        a: "Kısa vadeler (36–48 ay) toplam faiz maliyetini azaltır; ancak aylık taksit yüksektir. Uzun vadeler (60–84 ay) aylık taksidi düşürür fakat daha fazla faiz ödenmesine ve aracın piyasa değerinin altına düşme riskine yol açar.",
      },
      {
        q: "Takas aracın krediye etkisi nedir?",
        a: "Takas değeri, satın alma fiyatından düşülerek finanse edilmesi gereken tutarı azaltır. Bu hem aylık taksidi hem de toplam faizi düşürür.",
      },
    ],
  },

  de: {
    title: "Autokredit-Rechner",
    short: "Berechnen Sie Ihre monatliche Kfz-Kreditrate, Gesamtkosten und Zinsen.",
    description:
      "Kostenloser Autokredit-Rechner. Geben Sie Fahrzeugpreis, Anzahlung, Inzahlungnahme, Zinssatz und Laufzeit ein und erhalten Sie Ihre Monatsrate.",
    keywords: [
      "Autokredit Rechner",
      "Kfz Finanzierung",
      "Monatsrate Auto",
      "Autokredit Zinsen",
      "Autofinanzierung",
      "Auto Kreditrechner",
      "Fahrzeug Finanzierung",
    ],
    inputs: {
      vehiclePrice: { label: "Fahrzeugpreis", help: "Kaufpreis des Fahrzeugs." },
      downPayment: { label: "Anzahlung", help: "Sofort gezahlter Betrag beim Kauf." },
      tradeInValue: { label: "Inzahlungnahme", help: "Wert eines eingetauschten Fahrzeugs. Reduziert den Kreditbetrag." },
      annualRate: { label: "Jährlicher Zinssatz (%)", help: "Der effektive Jahreszins Ihrer Bank." },
      termMonths: { label: "Laufzeit (Monate)", help: "Kreditlaufzeit in Monaten (z. B. 36, 48, 60)." },
    },
    outputs: {
      monthlyPayment: { label: "Monatliche Rate", help: "Feste monatliche Zahlung." },
      loanAmount: { label: "Finanzierter Betrag", help: "Fahrzeugpreis minus Anzahlung und Inzahlungnahme." },
      totalPayment: { label: "Gesamtzahlung", help: "Summe aller monatlichen Raten." },
      totalInterest: { label: "Gesamtzinsen", help: "Über die gesamte Laufzeit gezahlte Zinsen." },
    },
    errors: {
      vehiclePriceRange: "Fahrzeugpreis muss zwischen 1.000 und 500.000 liegen.",
      downPaymentExceeds: "Anzahlung und Inzahlungnahme dürfen den Fahrzeugpreis nicht überschreiten.",
      rateRange: "Jahreszins muss zwischen 0 % und 40 % liegen.",
      termRange: "Laufzeit muss zwischen 12 und 96 Monaten liegen.",
    },
    faq: [
      {
        q: "Welche Laufzeit ist für einen Autokredit am besten?",
        a: "Kürzere Laufzeiten (36–48 Monate) sind günstiger im Gesamtzins, haben aber höhere Raten. Längere Laufzeiten senken die Rate, erhöhen aber die Gesamtkosten.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Prêt Auto",
    short: "Calculez votre mensualité, le coût total et les intérêts pour tout prêt automobile.",
    description:
      "Calculateur de prêt auto gratuit. Entrez le prix du véhicule, l'apport, la valeur de reprise, le taux et la durée pour obtenir votre mensualité.",
    keywords: [
      "calculateur prêt auto",
      "crédit voiture",
      "mensualité voiture",
      "financement auto",
      "crédit automobile",
      "simulateur prêt voiture",
      "taux crédit auto",
    ],
    inputs: {
      vehiclePrice: { label: "Prix du véhicule", help: "Prix d'achat du véhicule." },
      downPayment: { label: "Apport", help: "Montant versé comptant à l'achat." },
      tradeInValue: { label: "Valeur de reprise", help: "Valeur d'un véhicule repris. Réduit le montant financé." },
      annualRate: { label: "Taux annuel (%)", help: "Le TAEG proposé par votre organisme de crédit." },
      termMonths: { label: "Durée (mois)", help: "Durée du crédit en mois (ex. 36, 48, 60)." },
    },
    outputs: {
      monthlyPayment: { label: "Mensualité", help: "Montant fixe dû chaque mois." },
      loanAmount: { label: "Montant financé", help: "Prix du véhicule moins apport et valeur de reprise." },
      totalPayment: { label: "Coût total", help: "Somme de toutes les mensualités." },
      totalInterest: { label: "Intérêts totaux", help: "Total des intérêts payés sur la durée du prêt." },
    },
    errors: {
      vehiclePriceRange: "Le prix doit être compris entre 1 000 et 500 000.",
      downPaymentExceeds: "L'apport et la reprise ne peuvent dépasser le prix du véhicule.",
      rateRange: "Le taux annuel doit être entre 0 % et 40 %.",
      termRange: "La durée doit être entre 12 et 96 mois.",
    },
    faq: [
      {
        q: "Quelle durée choisir pour un prêt auto ?",
        a: "Les durées courtes (36–48 mois) coûtent moins en intérêts mais ont des mensualités plus élevées. Les durées longues (60–84 mois) réduisent la mensualité mais augmentent le coût total.",
      },
    ],
  },

  es: {
    title: "Calculadora de Préstamo de Coche",
    short: "Calcula tu cuota mensual, el coste total y los intereses para cualquier préstamo de vehículo.",
    description:
      "Calculadora gratuita de préstamo de coche. Introduce el precio del vehículo, la entrada, el valor de permuta, el tipo y el plazo para ver tu cuota mensual.",
    keywords: [
      "calculadora préstamo coche",
      "crédito auto",
      "cuota mensual coche",
      "financiación vehículo",
      "préstamo automóvil",
      "simulador financiación coche",
      "interés préstamo coche",
    ],
    inputs: {
      vehiclePrice: { label: "Precio del vehículo", help: "Precio de compra del vehículo." },
      downPayment: { label: "Entrada", help: "Importe pagado al contado en el momento de la compra." },
      tradeInValue: { label: "Valor de permuta", help: "Valor de un vehículo que entregas como parte de pago. Reduce el importe financiado." },
      annualRate: { label: "Tipo de interés anual (%)", help: "La TAE ofrecida por tu entidad financiera." },
      termMonths: { label: "Plazo (meses)", help: "Duración del préstamo en meses (ej. 36, 48, 60)." },
    },
    outputs: {
      monthlyPayment: { label: "Cuota mensual", help: "Importe fijo pagadero cada mes." },
      loanAmount: { label: "Importe financiado", help: "Precio del vehículo menos entrada y permuta." },
      totalPayment: { label: "Coste total", help: "Suma de todas las cuotas mensuales." },
      totalInterest: { label: "Intereses totales", help: "Total de intereses pagados durante el préstamo." },
    },
    errors: {
      vehiclePriceRange: "El precio debe estar entre 1.000 y 500.000.",
      downPaymentExceeds: "La entrada y la permuta no pueden superar el precio del vehículo.",
      rateRange: "El tipo anual debe estar entre 0 % y 40 %.",
      termRange: "El plazo debe estar entre 12 y 96 meses.",
    },
    faq: [
      {
        q: "¿Qué plazo es mejor para un préstamo de coche?",
        a: "Los plazos cortos (36–48 meses) son más baratos en intereses pero tienen cuotas más altas. Los plazos largos (60–84 meses) reducen la cuota pero aumentan el coste total.",
      },
    ],
  },

  it: {
    title: "Calcolatore Prestito Auto",
    short: "Calcola la rata mensile, il costo totale e gli interessi per qualsiasi prestito auto.",
    description:
      "Calcolatore gratuito di prestito auto. Inserisci il prezzo del veicolo, l'acconto, il valore della permuta, il tasso e la durata per vedere la rata mensile.",
    keywords: [
      "calcolatore prestito auto",
      "finanziamento auto",
      "rata mensile auto",
      "credito auto",
      "prestito veicolo",
      "simulatore finanziamento auto",
      "tasso prestito auto",
    ],
    inputs: {
      vehiclePrice: { label: "Prezzo del veicolo", help: "Prezzo di acquisto del veicolo." },
      downPayment: { label: "Acconto", help: "Importo versato immediatamente all'acquisto." },
      tradeInValue: { label: "Valore permuta", help: "Valore di un veicolo dato in permuta. Riduce l'importo finanziato." },
      annualRate: { label: "Tasso annuo (%)", help: "Il TAEG offerto dalla tua banca." },
      termMonths: { label: "Durata (mesi)", help: "Durata del prestito in mesi (es. 36, 48, 60)." },
    },
    outputs: {
      monthlyPayment: { label: "Rata mensile", help: "Importo fisso da pagare ogni mese." },
      loanAmount: { label: "Importo finanziato", help: "Prezzo del veicolo meno acconto e permuta." },
      totalPayment: { label: "Costo totale", help: "Somma di tutte le rate mensili." },
      totalInterest: { label: "Interessi totali", help: "Totale interessi pagati nel corso del prestito." },
    },
    errors: {
      vehiclePriceRange: "Il prezzo deve essere tra 1.000 e 500.000.",
      downPaymentExceeds: "Acconto e permuta non possono superare il prezzo del veicolo.",
      rateRange: "Il tasso annuo deve essere tra 0% e 40%.",
      termRange: "La durata deve essere tra 12 e 96 mesi.",
    },
    faq: [
      {
        q: "Qual è la durata migliore per un prestito auto?",
        a: "Durate brevi (36–48 mesi) costano meno in interessi ma hanno rate più alte. Durate lunghe (60–84 mesi) abbassano la rata ma aumentano il costo totale.",
      },
    ],
  },

  ar: {
    title: "حاسبة قرض السيارة",
    short: "احسب قسطك الشهري والتكلفة الإجمالية والفوائد لأي قرض سيارة.",
    description:
      "حاسبة قرض سيارة مجانية. أدخل سعر السيارة والدفعة المقدمة وقيمة المقايضة والفائدة والمدة لرؤية قسطك الشهري.",
    keywords: [
      "حاسبة قرض السيارة",
      "تمويل سيارة",
      "قسط شهري سيارة",
      "قرض مركبة",
      "تمويل سيارات",
      "حساب قرض السيارة",
      "فائدة قرض السيارة",
    ],
    inputs: {
      vehiclePrice: { label: "سعر السيارة", help: "سعر شراء السيارة." },
      downPayment: { label: "الدفعة المقدمة", help: "المبلغ المدفوع نقداً عند الشراء." },
      tradeInValue: { label: "قيمة المقايضة", help: "قيمة سيارة تُقدّمها كجزء من الدفع. تُخفض المبلغ الممول." },
      annualRate: { label: "معدل الفائدة السنوي (%)", help: "المعدل السنوي الذي تقدمه جهة الإقراض." },
      termMonths: { label: "مدة القرض (أشهر)", help: "مدة القرض بالأشهر (مثلاً 36، 48، 60)." },
    },
    outputs: {
      monthlyPayment: { label: "القسط الشهري", help: "المبلغ الثابت المستحق كل شهر." },
      loanAmount: { label: "المبلغ الممول", help: "سعر السيارة ناقص الدفعة المقدمة وقيمة المقايضة." },
      totalPayment: { label: "إجمالي المدفوعات", help: "مجموع جميع الأقساط الشهرية." },
      totalInterest: { label: "إجمالي الفوائد", help: "مجموع الفوائد المدفوعة خلال مدة القرض." },
    },
    errors: {
      vehiclePriceRange: "يجب أن يكون سعر السيارة بين 1,000 و500,000.",
      downPaymentExceeds: "لا يمكن أن يتجاوز مجموع الدفعة المقدمة وقيمة المقايضة سعر السيارة.",
      rateRange: "يجب أن يكون معدل الفائدة السنوي بين 0% و40%.",
      termRange: "يجب أن تكون مدة القرض بين 12 و96 شهراً.",
    },
    faq: [
      {
        q: "ما هي أفضل مدة لقرض السيارة؟",
        a: "المدد القصيرة (36–48 شهراً) أقل تكلفةً من ناحية الفوائد لكن أقساطها أعلى. المدد الأطول (60–84 شهراً) تُخفض القسط الشهري لكن تزيد التكلفة الإجمالية.",
      },
    ],
  },

  ru: {
    title: "Калькулятор автокредита",
    short: "Рассчитайте ежемесячный платёж, общую стоимость и проценты по автокредиту.",
    description:
      "Бесплатный калькулятор автокредита. Введите стоимость автомобиля, первоначальный взнос, стоимость трейд-ин, ставку и срок — получите ежемесячный платёж.",
    keywords: [
      "калькулятор автокредита",
      "автокредит",
      "ежемесячный платёж по автокредиту",
      "автомобильный кредит",
      "расчёт автокредита",
      "лизинг автомобиля",
      "проценты по автокредиту",
    ],
    inputs: {
      vehiclePrice: { label: "Стоимость автомобиля", help: "Цена покупки автомобиля." },
      downPayment: { label: "Первоначальный взнос", help: "Сумма, уплачиваемая сразу при покупке." },
      tradeInValue: { label: "Стоимость трейд-ин", help: "Стоимость сдаваемого автомобиля. Уменьшает финансируемую сумму." },
      annualRate: { label: "Годовая ставка (%)", help: "Годовая процентная ставка банка." },
      termMonths: { label: "Срок (месяцев)", help: "Срок кредита в месяцах (напр. 36, 48, 60)." },
    },
    outputs: {
      monthlyPayment: { label: "Ежемесячный платёж", help: "Фиксированная сумма, выплачиваемая каждый месяц." },
      loanAmount: { label: "Сумма кредита", help: "Стоимость авто минус взнос и трейд-ин." },
      totalPayment: { label: "Общая сумма выплат", help: "Сумма всех ежемесячных платежей." },
      totalInterest: { label: "Переплата по процентам", help: "Итоговая сумма процентов за весь срок." },
    },
    errors: {
      vehiclePriceRange: "Стоимость автомобиля должна быть от 1 000 до 500 000.",
      downPaymentExceeds: "Первоначальный взнос и трейд-ин не могут превышать стоимость авто.",
      rateRange: "Годовая ставка должна быть от 0 % до 40 %.",
      termRange: "Срок должен быть от 12 до 96 месяцев.",
    },
    faq: [
      {
        q: "Какой срок автокредита лучше?",
        a: "Короткие сроки (36–48 месяцев) выгоднее по процентам, но выше платёж. Длинные сроки (60–84 месяца) снижают платёж, но увеличивают общую переплату.",
      },
    ],
  },

  zh: {
    title: "汽车贷款计算器",
    short: "计算任何汽车贷款的月供、总费用和利息。",
    description:
      "免费汽车贷款计算器。输入车价、首付、以旧换新价值、利率和期限，即可查看月供和贷款总费用。",
    keywords: [
      "汽车贷款计算器",
      "车贷计算",
      "月供计算",
      "汽车融资",
      "购车贷款",
      "车贷利率",
      "汽车分期计算",
    ],
    inputs: {
      vehiclePrice: { label: "车辆价格", help: "车辆的购买价格。" },
      downPayment: { label: "首付款", help: "购车时预先支付的金额。" },
      tradeInValue: { label: "以旧换新价值", help: "旧车的置换价值，用于抵减贷款金额。" },
      annualRate: { label: "年利率 (%)", help: "贷款机构提供的年利率。" },
      termMonths: { label: "贷款期限（月）", help: "贷款期限（月数），如 36、48、60。" },
    },
    outputs: {
      monthlyPayment: { label: "月供", help: "每月需支付的固定金额。" },
      loanAmount: { label: "贷款金额", help: "车价减去首付和以旧换新价值后的实际贷款额。" },
      totalPayment: { label: "还款总额", help: "所有月供的总和。" },
      totalInterest: { label: "总利息", help: "贷款期内支付的利息总额。" },
    },
    errors: {
      vehiclePriceRange: "车辆价格必须在 1,000 至 500,000 之间。",
      downPaymentExceeds: "首付和以旧换新价值之和不能超过车辆价格。",
      rateRange: "年利率必须在 0% 至 40% 之间。",
      termRange: "贷款期限必须在 12 至 96 个月之间。",
    },
    faq: [
      {
        q: "汽车贷款选多长期限最好？",
        a: "较短期限（36–48 个月）利息总额更少，但月供较高。较长期限（60–84 个月）降低月供，但增加总利息支出。",
      },
    ],
  },

  ja: {
    title: "自動車ローン計算機",
    short: "自動車ローンの毎月の返済額、総費用、利息を計算します。",
    description:
      "無料の自動車ローン計算機です。車両価格、頭金、下取り価格、金利、返済期間を入力して月々の返済額を確認できます。",
    keywords: [
      "自動車ローン計算機",
      "カーローン計算",
      "月々の返済額",
      "車両ファイナンス",
      "マイカーローン",
      "自動車ローン金利",
      "車購入計算機",
    ],
    inputs: {
      vehiclePrice: { label: "車両価格", help: "購入する車両の価格。" },
      downPayment: { label: "頭金", help: "購入時に支払う金額。" },
      tradeInValue: { label: "下取り価格", help: "下取りに出す車両の価値。融資額から差し引かれます。" },
      annualRate: { label: "年利 (%)", help: "金融機関が提示する年間利率。" },
      termMonths: { label: "返済期間（ヶ月）", help: "ローンの返済期間（例：36、48、60ヶ月）。" },
    },
    outputs: {
      monthlyPayment: { label: "毎月の返済額", help: "毎月支払う固定額。" },
      loanAmount: { label: "融資額", help: "車両価格から頭金と下取り価格を引いた金額。" },
      totalPayment: { label: "総返済額", help: "全月次返済額の合計。" },
      totalInterest: { label: "総支払利息", help: "ローン期間全体で支払う利息の合計。" },
    },
    errors: {
      vehiclePriceRange: "車両価格は 1,000 ～ 500,000 の範囲で入力してください。",
      downPaymentExceeds: "頭金と下取り価格の合計が車両価格を超えることはできません。",
      rateRange: "年利は 0% ～ 40% の範囲で入力してください。",
      termRange: "返済期間は 12 ～ 96 ヶ月の範囲で入力してください。",
    },
    faq: [
      {
        q: "自動車ローンの返済期間はどれくらいが良いですか？",
        a: "短期間（36〜48ヶ月）は利息が少ない一方で月々の返済額が高くなります。長期間（60〜84ヶ月）は月々の負担が軽くなりますが、利息総額が増えます。",
      },
    ],
  },

  ko: {
    title: "자동차 할부 계산기",
    short: "모든 자동차 대출의 월 납입액, 총비용 및 이자를 계산하세요.",
    description:
      "무료 자동차 할부 계산기입니다. 차량 가격, 계약금, 보상판매 가치, 금리, 기간을 입력하면 월 납입액과 총 대출 비용을 확인할 수 있습니다.",
    keywords: [
      "자동차 할부 계산기",
      "자동차 대출 계산",
      "월 납입액 계산",
      "차량 금융",
      "마이카 론",
      "자동차 이자 계산",
      "차량 구매 계산기",
    ],
    inputs: {
      vehiclePrice: { label: "차량 가격", help: "구입하는 차량의 가격." },
      downPayment: { label: "계약금", help: "구매 시 즉시 납부하는 금액." },
      tradeInValue: { label: "보상판매 가치", help: "기존 차량의 보상판매 금액. 대출 금액을 줄입니다." },
      annualRate: { label: "연이율 (%)", help: "금융기관이 제시하는 연간 이자율." },
      termMonths: { label: "대출 기간 (개월)", help: "대출 기간(예: 36, 48, 60개월)." },
    },
    outputs: {
      monthlyPayment: { label: "월 납입액", help: "매달 납부하는 고정 금액." },
      loanAmount: { label: "대출 금액", help: "차량 가격에서 계약금과 보상판매 금액을 뺀 실제 대출액." },
      totalPayment: { label: "총 상환액", help: "모든 월 납입액의 합계." },
      totalInterest: { label: "총 이자", help: "대출 기간 동안 납부하는 이자 총액." },
    },
    errors: {
      vehiclePriceRange: "차량 가격은 1,000 ~ 500,000 사이여야 합니다.",
      downPaymentExceeds: "계약금과 보상판매 금액의 합이 차량 가격을 초과할 수 없습니다.",
      rateRange: "연이율은 0% ~ 40% 사이여야 합니다.",
      termRange: "대출 기간은 12 ~ 96개월 사이여야 합니다.",
    },
    faq: [
      {
        q: "자동차 대출 기간은 얼마가 좋나요?",
        a: "단기(36~48개월)는 이자 총액이 적지만 월 납입액이 높습니다. 장기(60~84개월)는 월 납입 부담이 줄지만 이자 총액이 늘어납니다.",
      },
    ],
  },

  hi: {
    title: "ऑटो लोन कैलकुलेटर",
    short: "किसी भी वाहन लोन के लिए मासिक EMI, कुल लागत और ब्याज की गणना करें।",
    description:
      "मुफ़्त ऑटो लोन कैलकुलेटर। वाहन मूल्य, डाउन पेमेंट, ट्रेड-इन मूल्य, ब्याज दर और अवधि दर्ज करें और मासिक EMI देखें।",
    keywords: [
      "ऑटो लोन कैलकुलेटर",
      "कार लोन कैलकुलेटर",
      "मासिक कार EMI",
      "वाहन वित्तपोषण",
      "कार लोन ब्याज",
      "वाहन ऋण गणना",
      "कार खरीद कैलकुलेटर",
    ],
    inputs: {
      vehiclePrice: { label: "वाहन मूल्य", help: "वाहन की खरीद कीमत।" },
      downPayment: { label: "डाउन पेमेंट", help: "खरीद के समय नकद भुगतान की गई राशि।" },
      tradeInValue: { label: "ट्रेड-इन मूल्य", help: "एक्सचेंज किए जाने वाले वाहन का मूल्य। लोन राशि को कम करता है।" },
      annualRate: { label: "वार्षिक ब्याज दर (%)", help: "आपके ऋणदाता द्वारा दी जाने वाली वार्षिक ब्याज दर।" },
      termMonths: { label: "लोन अवधि (महीने)", help: "लोन की अवधि महीनों में (जैसे 36, 48, 60)।" },
    },
    outputs: {
      monthlyPayment: { label: "मासिक EMI", help: "हर महीने देय निश्चित राशि।" },
      loanAmount: { label: "वित्तपोषित राशि", help: "वाहन मूल्य से डाउन पेमेंट और ट्रेड-इन घटाने के बाद।" },
      totalPayment: { label: "कुल भुगतान", help: "सभी मासिक EMI का योग।" },
      totalInterest: { label: "कुल ब्याज", help: "लोन अवधि के दौरान चुकाया गया कुल ब्याज।" },
    },
    errors: {
      vehiclePriceRange: "वाहन मूल्य 1,000 से 500,000 के बीच होना चाहिए।",
      downPaymentExceeds: "डाउन पेमेंट और ट्रेड-इन का योग वाहन मूल्य से अधिक नहीं हो सकता।",
      rateRange: "वार्षिक ब्याज दर 0% से 40% के बीच होनी चाहिए।",
      termRange: "लोन अवधि 12 से 96 महीनों के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "कार लोन के लिए कौन सी अवधि सबसे अच्छी है?",
        a: "कम अवधि (36–48 महीने) कुल ब्याज में कम लेकिन मासिक EMI अधिक होती है। लंबी अवधि (60–84 महीने) मासिक भार कम करती है लेकिन कुल ब्याज बढ़ता है।",
      },
    ],
  },
};

export default i18n;
