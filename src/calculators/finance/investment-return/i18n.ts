import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Investment Return Calculator (ROI & CAGR)",
    short: "Calculate ROI and CAGR for any investment over any time period.",
    description:
      "Free investment return calculator. Compute ROI (Return on Investment) and CAGR (Compound Annual Growth Rate) from initial and final values, or project a final value from an expected annual return.",
    keywords: [
      "ROI calculator",
      "CAGR calculator",
      "investment return calculator",
      "compound annual growth rate",
      "return on investment",
      "investment growth calculator",
      "annualized return",
    ],
    inputs: {
      initialInvestment: { label: "Initial Investment", help: "The amount you invested at the start." },
      finalValue: { label: "Final Value", help: "The current or ending value of the investment. Leave blank if providing an annual return rate." },
      annualReturn: { label: "Annual Return (%)", help: "Expected annual return rate. Used to project a final value. Leave blank if providing the final value." },
      years: { label: "Investment Period (Years)", help: "The number of years the investment was held or will be held." },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "Total Return on Investment as a percentage of the initial amount." },
      cagr: { label: "CAGR (%)", help: "Compound Annual Growth Rate — the steady annual rate that would produce the same final value." },
      totalGain: { label: "Total Gain", help: "Final value minus initial investment in dollar terms." },
      finalValue: { label: "Final Value", help: "Projected or actual ending value of the investment." },
    },
    errors: {
      missingInput: "Provide either a final value or an annual return rate.",
      negativeInitial: "Initial investment must be greater than zero.",
    },
    faq: [
      {
        q: "What is the difference between ROI and CAGR?",
        a: "ROI measures total return over the entire period. CAGR measures the average annual growth rate, accounting for compounding. CAGR is more useful for comparing investments held over different time periods.",
      },
      {
        q: "Can I use a negative annual return?",
        a: "Yes. Enter a negative value to model investments that declined in value, such as a stock that fell during a market downturn.",
      },
      {
        q: "Does CAGR account for dividends or cash flows?",
        a: "No. This calculator assumes a single lump-sum investment with no intermediate withdrawals or contributions. For investments with ongoing cash flows, use an IRR (Internal Rate of Return) calculator.",
      },
    ],
  },
  pt: {
    title: "Investment Return Calculator (ROI & CAGR)",
    short: "Calculate ROI and CAGR for any investment over any time period.",
    description:
      "Free investment return calculator. Compute ROI (Return on Investment) and CAGR (Compound Annual Growth Rate) from initial and final values, or project a final value from an expected annual return.",
    keywords: [
      "ROI calculator",
      "CAGR calculator",
      "investment return calculator",
      "compound annual growth rate",
      "return on investment",
      "investment growth calculator",
      "annualized return",
    ],
    inputs: {
      initialInvestment: { label: "Initial Investment", help: "The amount you invested at the start." },
      finalValue: { label: "Final Value", help: "The current or ending value of the investment. Leave blank if providing an annual return rate." },
      annualReturn: { label: "Annual Return (%)", help: "Expected annual return rate. Used to project a final value. Leave blank if providing the final value." },
      years: { label: "Investment Period (Years)", help: "The number of years the investment was held or will be held." },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "Total Return on Investment as a percentage of the initial amount." },
      cagr: { label: "CAGR (%)", help: "Compound Annual Growth Rate — the steady annual rate that would produce the same final value." },
      totalGain: { label: "Total Gain", help: "Final value minus initial investment in dollar terms." },
      finalValue: { label: "Final Value", help: "Projected or actual ending value of the investment." },
    },
    errors: {
      missingInput: "Provide either a final value or an annual return rate.",
      negativeInitial: "Initial investment must be greater than zero.",
    },
    faq: [
      {
        q: "What is the difference between ROI and CAGR?",
        a: "ROI measures total return over the entire period. CAGR measures the average annual growth rate, accounting for compounding. CAGR is more useful for comparing investments held over different time periods.",
      },
      {
        q: "Can I use a negative annual return?",
        a: "Yes. Enter a negative value to model investments that declined in value, such as a stock that fell during a market downturn.",
      },
      {
        q: "Does CAGR account for dividends or cash flows?",
        a: "No. This calculator assumes a single lump-sum investment with no intermediate withdrawals or contributions. For investments with ongoing cash flows, use an IRR (Internal Rate of Return) calculator.",
      },
    ],
  },
  id: {
    title: "Investment Return Calculator (ROI & CAGR)",
    short: "Calculate ROI and CAGR for any investment over any time period.",
    description:
      "Free investment return calculator. Compute ROI (Return on Investment) and CAGR (Compound Annual Growth Rate) from initial and final values, or project a final value from an expected annual return.",
    keywords: [
      "ROI calculator",
      "CAGR calculator",
      "investment return calculator",
      "compound annual growth rate",
      "return on investment",
      "investment growth calculator",
      "annualized return",
    ],
    inputs: {
      initialInvestment: { label: "Initial Investment", help: "The amount you invested at the start." },
      finalValue: { label: "Final Value", help: "The current or ending value of the investment. Leave blank if providing an annual return rate." },
      annualReturn: { label: "Annual Return (%)", help: "Expected annual return rate. Used to project a final value. Leave blank if providing the final value." },
      years: { label: "Investment Period (Years)", help: "The number of years the investment was held or will be held." },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "Total Return on Investment as a percentage of the initial amount." },
      cagr: { label: "CAGR (%)", help: "Compound Annual Growth Rate — the steady annual rate that would produce the same final value." },
      totalGain: { label: "Total Gain", help: "Final value minus initial investment in dollar terms." },
      finalValue: { label: "Final Value", help: "Projected or actual ending value of the investment." },
    },
    errors: {
      missingInput: "Provide either a final value or an annual return rate.",
      negativeInitial: "Initial investment must be greater than zero.",
    },
    faq: [
      {
        q: "What is the difference between ROI and CAGR?",
        a: "ROI measures total return over the entire period. CAGR measures the average annual growth rate, accounting for compounding. CAGR is more useful for comparing investments held over different time periods.",
      },
      {
        q: "Can I use a negative annual return?",
        a: "Yes. Enter a negative value to model investments that declined in value, such as a stock that fell during a market downturn.",
      },
      {
        q: "Does CAGR account for dividends or cash flows?",
        a: "No. This calculator assumes a single lump-sum investment with no intermediate withdrawals or contributions. For investments with ongoing cash flows, use an IRR (Internal Rate of Return) calculator.",
      },
    ],
  },


  tr: {
    title: "Yatırım Getirisi Hesaplayıcısı (ROI ve CAGR)",
    short: "Herhangi bir yatırım için ROI ve CAGR hesaplayın.",
    description:
      "Ücretsiz yatırım getirisi hesaplayıcısı. Başlangıç ve bitiş değerlerinden ROI (Yatırım Getirisi) ve CAGR (Bileşik Yıllık Büyüme Oranı) hesaplayın veya beklenen yıllık getiriden nihai değer tahmin edin.",
    keywords: [
      "ROI hesaplayıcı",
      "CAGR hesaplayıcı",
      "yatırım getirisi hesaplayıcı",
      "bileşik yıllık büyüme oranı",
      "yatırım getirisi",
      "yatırım büyüme hesaplayıcı",
      "yıllık getiri",
    ],
    inputs: {
      initialInvestment: { label: "Başlangıç Yatırımı", help: "Yatırımın başında yatırdığınız tutar." },
      finalValue: { label: "Nihai Değer", help: "Yatırımın mevcut veya bitiş değeri. Yıllık getiri oranı veriyorsanız boş bırakın." },
      annualReturn: { label: "Yıllık Getiri (%)", help: "Beklenen yıllık getiri oranı. Nihai değer hesaplamak için kullanılır. Nihai değer veriyorsanız boş bırakın." },
      years: { label: "Yatırım Süresi (Yıl)", help: "Yatırımın tutulduğu veya tutulacağı yıl sayısı." },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "Başlangıç tutarına göre toplam yatırım getirisi yüzdesi." },
      cagr: { label: "CAGR (%)", help: "Bileşik Yıllık Büyüme Oranı — aynı nihai değeri üretecek sabit yıllık büyüme oranı." },
      totalGain: { label: "Toplam Kazanç", help: "Nihai değer ile başlangıç yatırımı arasındaki fark." },
      finalValue: { label: "Nihai Değer", help: "Tahmini veya gerçek bitiş değeri." },
    },
    errors: {
      missingInput: "Nihai değer veya yıllık getiri oranından birini girin.",
      negativeInitial: "Başlangıç yatırımı sıfırdan büyük olmalıdır.",
    },
    faq: [
      {
        q: "ROI ile CAGR arasındaki fark nedir?",
        a: "ROI, tüm dönem boyunca toplam getiriyi ölçer. CAGR, bileşik etkiyi hesaba katarak ortalama yıllık büyüme oranını gösterir. CAGR, farklı sürelerdeki yatırımları karşılaştırmak için daha kullanışlıdır.",
      },
      {
        q: "Negatif yıllık getiri girebilir miyim?",
        a: "Evet. Değer kaybeden yatırımları modellemek için negatif değer girebilirsiniz.",
      },
    ],
  },

  de: {
    title: "Investitionsrendite-Rechner (ROI & CAGR)",
    short: "Berechnen Sie ROI und CAGR für jede Investition über jeden Zeitraum.",
    description:
      "Kostenloser Investitionsrendite-Rechner. Berechnen Sie ROI und CAGR aus Anfangs- und Endwert oder projizieren Sie einen Endwert aus einer erwarteten Jahresrendite.",
    keywords: [
      "ROI-Rechner",
      "CAGR-Rechner",
      "Investitionsrendite",
      "Renditerechner",
      "Kapitalwachstum",
      "jährliche Wachstumsrate",
      "Anlagerechner",
    ],
    inputs: {
      initialInvestment: { label: "Anfangsinvestition", help: "Ihr investierter Startbetrag." },
      finalValue: { label: "Endwert", help: "Aktueller oder Endwert der Investition. Leer lassen, wenn Sie eine Jahresrendite angeben." },
      annualReturn: { label: "Jahresrendite (%)", help: "Erwartete jährliche Rendite zur Projektion des Endwerts." },
      years: { label: "Anlagedauer (Jahre)", help: "Anzahl der Jahre, für die die Investition gehalten wird." },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "Gesamtrendite als Prozentsatz des Startbetrags." },
      cagr: { label: "CAGR (%)", help: "Jährliche Wachstumsrate unter Berücksichtigung des Zinseszinseffekts." },
      totalGain: { label: "Gesamtgewinn", help: "Endwert minus Anfangsinvestition." },
      finalValue: { label: "Endwert", help: "Prognostizierter oder tatsächlicher Endwert." },
    },
    errors: {
      missingInput: "Geben Sie entweder einen Endwert oder eine Jahresrendite an.",
      negativeInitial: "Die Anfangsinvestition muss größer als null sein.",
    },
    faq: [
      {
        q: "Was ist der Unterschied zwischen ROI und CAGR?",
        a: "ROI misst die Gesamtrendite über den gesamten Zeitraum. CAGR gibt die durchschnittliche jährliche Wachstumsrate unter Berücksichtigung des Zinseszinseffekts an.",
      },
      {
        q: "Kann ich eine negative Jahresrendite eingeben?",
        a: "Ja. Geben Sie einen negativen Wert ein, um Investitionen zu modellieren, die an Wert verloren haben.",
      },
    ],
  },

  fr: {
    title: "Calculateur de rendement d'investissement (ROI & CAGR)",
    short: "Calculez le ROI et le CAGR pour tout investissement sur toute période.",
    description:
      "Calculateur gratuit de rendement d'investissement. Calculez le ROI et le CAGR à partir des valeurs initiale et finale, ou projetez une valeur finale à partir d'un taux annuel attendu.",
    keywords: [
      "calculateur ROI",
      "calculateur CAGR",
      "rendement investissement",
      "taux croissance annuel composé",
      "retour sur investissement",
      "calculateur rendement",
      "rendement annualisé",
    ],
    inputs: {
      initialInvestment: { label: "Investissement initial", help: "Le montant investi au départ." },
      finalValue: { label: "Valeur finale", help: "Valeur actuelle ou finale de l'investissement. Laissez vide si vous fournissez un taux annuel." },
      annualReturn: { label: "Rendement annuel (%)", help: "Taux de rendement annuel attendu pour projeter une valeur finale." },
      years: { label: "Durée (années)", help: "Nombre d'années pendant lesquelles l'investissement est conservé." },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "Rendement total en pourcentage du montant initial." },
      cagr: { label: "CAGR (%)", help: "Taux de croissance annuel composé — le taux annuel qui produirait la même valeur finale." },
      totalGain: { label: "Gain total", help: "Valeur finale moins investissement initial." },
      finalValue: { label: "Valeur finale", help: "Valeur projetée ou réelle à la fin." },
    },
    errors: {
      missingInput: "Fournissez soit une valeur finale, soit un taux annuel.",
      negativeInitial: "L'investissement initial doit être supérieur à zéro.",
    },
    faq: [
      {
        q: "Quelle est la différence entre ROI et CAGR ?",
        a: "Le ROI mesure le rendement total sur toute la période. Le CAGR indique le taux de croissance annuel moyen, en tenant compte de la capitalisation.",
      },
      {
        q: "Puis-je entrer un taux annuel négatif ?",
        a: "Oui. Entrez une valeur négative pour modéliser des investissements ayant perdu de la valeur.",
      },
    ],
  },

  es: {
    title: "Calculadora de retorno de inversión (ROI y CAGR)",
    short: "Calcula el ROI y el CAGR para cualquier inversión en cualquier período.",
    description:
      "Calculadora gratuita de retorno de inversión. Calcula el ROI y el CAGR a partir de los valores inicial y final, o proyecta un valor final a partir de un rendimiento anual esperado.",
    keywords: [
      "calculadora ROI",
      "calculadora CAGR",
      "retorno de inversión",
      "tasa crecimiento anual compuesto",
      "rendimiento inversión",
      "calculadora rendimiento",
      "rendimiento anualizado",
    ],
    inputs: {
      initialInvestment: { label: "Inversión inicial", help: "El monto invertido al inicio." },
      finalValue: { label: "Valor final", help: "Valor actual o final de la inversión. Deja en blanco si proporcionas una tasa anual." },
      annualReturn: { label: "Rendimiento anual (%)", help: "Tasa de rendimiento anual esperada para proyectar un valor final." },
      years: { label: "Período (años)", help: "Número de años que se mantiene la inversión." },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "Retorno total como porcentaje del monto inicial." },
      cagr: { label: "CAGR (%)", help: "Tasa de crecimiento anual compuesto — la tasa que produciría el mismo valor final." },
      totalGain: { label: "Ganancia total", help: "Valor final menos inversión inicial." },
      finalValue: { label: "Valor final", help: "Valor proyectado o real al final." },
    },
    errors: {
      missingInput: "Proporciona un valor final o una tasa de rendimiento anual.",
      negativeInitial: "La inversión inicial debe ser mayor que cero.",
    },
    faq: [
      {
        q: "¿Cuál es la diferencia entre ROI y CAGR?",
        a: "El ROI mide el retorno total durante todo el período. El CAGR indica la tasa de crecimiento anual promedio, considerando el efecto del interés compuesto.",
      },
      {
        q: "¿Puedo ingresar un rendimiento anual negativo?",
        a: "Sí. Ingresa un valor negativo para modelar inversiones que perdieron valor.",
      },
    ],
  },

  it: {
    title: "Calcolatore rendimento investimento (ROI e CAGR)",
    short: "Calcola il ROI e il CAGR per qualsiasi investimento in qualsiasi periodo.",
    description:
      "Calcolatore gratuito del rendimento degli investimenti. Calcola ROI e CAGR dai valori iniziale e finale, o proietta un valore finale da un rendimento annuo atteso.",
    keywords: [
      "calcolatore ROI",
      "calcolatore CAGR",
      "rendimento investimento",
      "tasso crescita annuo composto",
      "ritorno sull'investimento",
      "calcolatore rendimento",
      "rendimento annualizzato",
    ],
    inputs: {
      initialInvestment: { label: "Investimento iniziale", help: "L'importo investito all'inizio." },
      finalValue: { label: "Valore finale", help: "Valore attuale o finale dell'investimento. Lascia vuoto se fornisci un tasso annuo." },
      annualReturn: { label: "Rendimento annuo (%)", help: "Tasso di rendimento annuo atteso per proiettare un valore finale." },
      years: { label: "Periodo (anni)", help: "Numero di anni in cui l'investimento è detenuto." },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "Rendimento totale come percentuale dell'importo iniziale." },
      cagr: { label: "CAGR (%)", help: "Tasso di crescita annuo composto — il tasso che produrrebbe lo stesso valore finale." },
      totalGain: { label: "Guadagno totale", help: "Valore finale meno investimento iniziale." },
      finalValue: { label: "Valore finale", help: "Valore proiettato o reale alla fine." },
    },
    errors: {
      missingInput: "Fornisci un valore finale o un tasso di rendimento annuo.",
      negativeInitial: "L'investimento iniziale deve essere maggiore di zero.",
    },
    faq: [
      {
        q: "Qual è la differenza tra ROI e CAGR?",
        a: "Il ROI misura il rendimento totale sull'intero periodo. Il CAGR indica il tasso di crescita annuo medio, tenendo conto dell'interesse composto.",
      },
      {
        q: "Posso inserire un rendimento annuo negativo?",
        a: "Sì. Inserisci un valore negativo per modellare investimenti che hanno perso valore.",
      },
    ],
  },

  ar: {
    title: "حاسبة عائد الاستثمار (ROI و CAGR)",
    short: "احسب ROI و CAGR لأي استثمار على مدى أي فترة زمنية.",
    description:
      "حاسبة مجانية لعائد الاستثمار. احسب ROI وCAGR من القيم الأولية والنهائية، أو احسب القيمة النهائية المتوقعة من معدل العائد السنوي.",
    keywords: [
      "حاسبة ROI",
      "حاسبة CAGR",
      "عائد الاستثمار",
      "معدل النمو السنوي المركب",
      "العائد على الاستثمار",
      "حاسبة العائد",
      "العائد السنوي",
    ],
    inputs: {
      initialInvestment: { label: "الاستثمار الأولي", help: "المبلغ المستثمر في البداية." },
      finalValue: { label: "القيمة النهائية", help: "القيمة الحالية أو النهائية للاستثمار. اتركه فارغًا إذا أعطيت معدل العائد السنوي." },
      annualReturn: { label: "العائد السنوي (%)", help: "معدل العائد السنوي المتوقع لحساب القيمة النهائية." },
      years: { label: "مدة الاستثمار (سنوات)", help: "عدد السنوات التي يُحتفظ فيها بالاستثمار." },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "إجمالي العائد كنسبة مئوية من المبلغ الأولي." },
      cagr: { label: "CAGR (%)", help: "معدل النمو السنوي المركب — المعدل الثابت الذي ينتج نفس القيمة النهائية." },
      totalGain: { label: "إجمالي الربح", help: "القيمة النهائية مطروحًا منها الاستثمار الأولي." },
      finalValue: { label: "القيمة النهائية", help: "القيمة المتوقعة أو الفعلية في النهاية." },
    },
    errors: {
      missingInput: "أدخل إما القيمة النهائية أو معدل العائد السنوي.",
      negativeInitial: "يجب أن يكون الاستثمار الأولي أكبر من الصفر.",
    },
    faq: [
      {
        q: "ما الفرق بين ROI وCAGR؟",
        a: "يقيس ROI إجمالي العائد على مدى الفترة بأكملها، بينما يعكس CAGR متوسط معدل النمو السنوي مع مراعاة الفائدة المركبة.",
      },
      {
        q: "هل يمكنني إدخال عائد سنوي سلبي؟",
        a: "نعم. أدخل قيمة سالبة لنمذجة الاستثمارات التي انخفضت قيمتها.",
      },
    ],
  },

  ru: {
    title: "Калькулятор доходности инвестиций (ROI и CAGR)",
    short: "Рассчитайте ROI и CAGR для любых инвестиций за любой период.",
    description:
      "Бесплатный калькулятор доходности инвестиций. Вычислите ROI и CAGR по начальной и конечной стоимости или спрогнозируйте конечную стоимость по ожидаемой годовой доходности.",
    keywords: [
      "калькулятор ROI",
      "калькулятор CAGR",
      "доходность инвестиций",
      "среднегодовой темп роста",
      "возврат на инвестиции",
      "калькулятор доходности",
      "годовой доход",
    ],
    inputs: {
      initialInvestment: { label: "Начальные инвестиции", help: "Сумма, вложенная в начале." },
      finalValue: { label: "Конечная стоимость", help: "Текущая или итоговая стоимость инвестиции. Оставьте пустым, если вводите годовую доходность." },
      annualReturn: { label: "Годовая доходность (%)", help: "Ожидаемая годовая доходность для прогноза конечной стоимости." },
      years: { label: "Срок инвестиций (лет)", help: "Количество лет, на которые рассчитана инвестиция." },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "Общая доходность как процент от начальной суммы." },
      cagr: { label: "CAGR (%)", help: "Среднегодовой темп роста с учётом сложных процентов." },
      totalGain: { label: "Общий доход", help: "Конечная стоимость минус начальные инвестиции." },
      finalValue: { label: "Конечная стоимость", help: "Прогнозируемая или фактическая итоговая стоимость." },
    },
    errors: {
      missingInput: "Укажите конечную стоимость или годовую доходность.",
      negativeInitial: "Начальные инвестиции должны быть больше нуля.",
    },
    faq: [
      {
        q: "В чём разница между ROI и CAGR?",
        a: "ROI измеряет общую доходность за весь период, CAGR — среднегодовой темп роста с учётом сложных процентов.",
      },
      {
        q: "Можно ли ввести отрицательную годовую доходность?",
        a: "Да. Введите отрицательное значение для моделирования инвестиций, потерявших в цене.",
      },
    ],
  },

  zh: {
    title: "投资回报计算器（ROI 和 CAGR）",
    short: "计算任何投资在任何时间段内的ROI和CAGR。",
    description:
      "免费投资回报计算器。根据初始和最终价值计算ROI和CAGR，或根据预期年收益率预测最终价值。",
    keywords: [
      "ROI计算器",
      "CAGR计算器",
      "投资回报率",
      "复合年增长率",
      "投资收益",
      "收益率计算器",
      "年化回报率",
    ],
    inputs: {
      initialInvestment: { label: "初始投资", help: "开始时投入的金额。" },
      finalValue: { label: "最终价值", help: "投资的当前或结束价值。如果提供年收益率则留空。" },
      annualReturn: { label: "年收益率（%）", help: "用于预测最终价值的预期年收益率。" },
      years: { label: "投资期限（年）", help: "投资持有的年数。" },
    },
    outputs: {
      roi: { label: "ROI（%）", help: "相对于初始金额的总投资回报率。" },
      cagr: { label: "CAGR（%）", help: "复合年增长率——产生相同最终价值的稳定年增长率。" },
      totalGain: { label: "总收益", help: "最终价值减去初始投资。" },
      finalValue: { label: "最终价值", help: "预测或实际的期末价值。" },
    },
    errors: {
      missingInput: "请提供最终价值或年收益率。",
      negativeInitial: "初始投资必须大于零。",
    },
    faq: [
      {
        q: "ROI和CAGR有什么区别？",
        a: "ROI衡量整个期间的总回报。CAGR表示考虑复利效应的平均年增长率，更适合比较不同持有期的投资。",
      },
      {
        q: "可以输入负的年收益率吗？",
        a: "可以。输入负值来模拟价值下降的投资，例如熊市中下跌的股票。",
      },
    ],
  },

  ja: {
    title: "投資収益率計算機（ROI・CAGR）",
    short: "あらゆる投資のROIとCAGRを任意の期間で計算します。",
    description:
      "無料の投資収益率計算機。初期投資額と最終価値からROIとCAGRを計算するか、期待年利回りから最終価値を予測します。",
    keywords: [
      "ROI計算機",
      "CAGR計算機",
      "投資収益率",
      "年平均成長率",
      "投資リターン",
      "利回り計算機",
      "年率換算リターン",
    ],
    inputs: {
      initialInvestment: { label: "初期投資額", help: "投資開始時に投じた金額。" },
      finalValue: { label: "最終価値", help: "投資の現在価値または終了価値。年利回りを入力する場合は空欄にしてください。" },
      annualReturn: { label: "年利回り（%）", help: "最終価値を予測するための期待年利回り。" },
      years: { label: "投資期間（年）", help: "投資を保有する年数。" },
    },
    outputs: {
      roi: { label: "ROI（%）", help: "初期投資額に対するトータルリターンのパーセンテージ。" },
      cagr: { label: "CAGR（%）", help: "年平均成長率——複利効果を考慮した安定した年成長率。" },
      totalGain: { label: "総利益", help: "最終価値から初期投資額を引いた金額。" },
      finalValue: { label: "最終価値", help: "予測または実際の終了時価値。" },
    },
    errors: {
      missingInput: "最終価値か年利回りのどちらかを入力してください。",
      negativeInitial: "初期投資額はゼロより大きくなければなりません。",
    },
    faq: [
      {
        q: "ROIとCAGRの違いは何ですか？",
        a: "ROIは期間全体のトータルリターンを測定します。CAGRは複利効果を考慮した平均年成長率を示し、異なる期間の投資を比較するのに適しています。",
      },
      {
        q: "マイナスの年利回りを入力できますか？",
        a: "はい。価値が下落した投資をモデル化するためにマイナス値を入力できます。",
      },
    ],
  },

  ko: {
    title: "투자 수익 계산기 (ROI 및 CAGR)",
    short: "어떤 투자에 대해서든 ROI와 CAGR을 계산하세요.",
    description:
      "무료 투자 수익 계산기. 초기 및 최종 가치로부터 ROI와 CAGR을 계산하거나, 예상 연간 수익률로 최종 가치를 예측합니다.",
    keywords: [
      "ROI 계산기",
      "CAGR 계산기",
      "투자 수익률",
      "연간 복합 성장률",
      "투자 수익",
      "수익률 계산기",
      "연환산 수익률",
    ],
    inputs: {
      initialInvestment: { label: "초기 투자금", help: "투자 시작 시 투입한 금액." },
      finalValue: { label: "최종 가치", help: "투자의 현재 또는 종료 가치. 연간 수익률을 입력하는 경우 비워두세요." },
      annualReturn: { label: "연간 수익률 (%)", help: "최종 가치를 예측하기 위한 예상 연간 수익률." },
      years: { label: "투자 기간 (년)", help: "투자를 보유하는 연수." },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "초기 금액 대비 총 투자 수익률." },
      cagr: { label: "CAGR (%)", help: "연간 복합 성장률 — 같은 최종 가치를 달성하는 안정적인 연간 성장률." },
      totalGain: { label: "총 수익", help: "최종 가치에서 초기 투자금을 뺀 금액." },
      finalValue: { label: "최종 가치", help: "예측 또는 실제 종료 시점의 가치." },
    },
    errors: {
      missingInput: "최종 가치 또는 연간 수익률 중 하나를 입력하세요.",
      negativeInitial: "초기 투자금은 0보다 커야 합니다.",
    },
    faq: [
      {
        q: "ROI와 CAGR의 차이점은 무엇인가요?",
        a: "ROI는 전체 기간의 총 수익을 측정합니다. CAGR은 복리 효과를 고려한 평균 연간 성장률을 나타내며, 다른 보유 기간의 투자를 비교하는 데 유용합니다.",
      },
      {
        q: "음수 연간 수익률을 입력할 수 있나요?",
        a: "네. 가치가 하락한 투자를 모델링하기 위해 음수 값을 입력할 수 있습니다.",
      },
    ],
  },

  hi: {
    title: "निवेश रिटर्न कैलकुलेटर (ROI और CAGR)",
    short: "किसी भी अवधि के लिए किसी भी निवेश का ROI और CAGR गणना करें।",
    description:
      "मुफ़्त निवेश रिटर्न कैलकुलेटर। प्रारंभिक और अंतिम मूल्यों से ROI और CAGR की गणना करें, या अपेक्षित वार्षिक रिटर्न से अंतिम मूल्य का अनुमान लगाएं।",
    keywords: [
      "ROI कैलकुलेटर",
      "CAGR कैलकुलेटर",
      "निवेश रिटर्न",
      "चक्रवृद्धि वार्षिक विकास दर",
      "निवेश पर रिटर्न",
      "रिटर्न कैलकुलेटर",
      "वार्षिक रिटर्न",
    ],
    inputs: {
      initialInvestment: { label: "प्रारंभिक निवेश", help: "शुरुआत में निवेश की गई राशि।" },
      finalValue: { label: "अंतिम मूल्य", help: "निवेश का वर्तमान या अंत मूल्य। यदि वार्षिक रिटर्न दर्ज करें तो खाली छोड़ें।" },
      annualReturn: { label: "वार्षिक रिटर्न (%)", help: "अंतिम मूल्य का अनुमान लगाने के लिए अपेक्षित वार्षिक रिटर्न दर।" },
      years: { label: "निवेश अवधि (वर्ष)", help: "जितने वर्षों तक निवेश रखा जाएगा।" },
    },
    outputs: {
      roi: { label: "ROI (%)", help: "प्रारंभिक राशि के प्रतिशत के रूप में कुल रिटर्न।" },
      cagr: { label: "CAGR (%)", help: "चक्रवृद्धि वार्षिक विकास दर — वह स्थिर वार्षिक दर जो समान अंतिम मूल्य देगी।" },
      totalGain: { label: "कुल लाभ", help: "अंतिम मूल्य घटाकर प्रारंभिक निवेश।" },
      finalValue: { label: "अंतिम मूल्य", help: "अनुमानित या वास्तविक अंत मूल्य।" },
    },
    errors: {
      missingInput: "अंतिम मूल्य या वार्षिक रिटर्न दर में से एक दर्ज करें।",
      negativeInitial: "प्रारंभिक निवेश शून्य से अधिक होना चाहिए।",
    },
    faq: [
      {
        q: "ROI और CAGR में क्या अंतर है?",
        a: "ROI पूरी अवधि का कुल रिटर्न मापता है। CAGR चक्रवृद्धि प्रभाव को ध्यान में रखते हुए औसत वार्षिक विकास दर दिखाता है।",
      },
      {
        q: "क्या नकारात्मक वार्षिक रिटर्न दर्ज कर सकते हैं?",
        a: "हां। मूल्य गिरावट वाले निवेशों को मॉडल करने के लिए नकारात्मक मूल्य दर्ज करें।",
      },
    ],
  },
};

export default i18n;
