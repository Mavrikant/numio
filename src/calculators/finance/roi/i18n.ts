import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "ROI Calculator",
    short: "Calculate your return on investment, annualized ROI (CAGR), and investment multiple.",
    description:
      "Free ROI calculator. Enter your initial investment, final value, and time period to get ROI percentage, CAGR, net profit, and the Rule of 72.",
    keywords: [
      "ROI calculator",
      "return on investment",
      "CAGR calculator",
      "investment return",
      "annualized return",
      "net profit calculator",
      "investment multiple",
    ],
    inputs: {
      initialInvestment: {
        label: "Initial Investment",
        help: "The amount of money you invested at the start.",
      },
      finalValue: {
        label: "Final Value",
        help: "The current or ending value of your investment.",
      },
      years: {
        label: "Time Period (Years)",
        help: "The number of years you held the investment. Used to calculate annualized ROI (CAGR).",
      },
    },
    outputs: {
      roi: {
        label: "ROI",
        help: "Total return on investment as a percentage: (Final Value − Initial Investment) / Initial Investment × 100.",
      },
      annualizedRoi: {
        label: "Annualized ROI (CAGR)",
        help: "Compound Annual Growth Rate — the steady annual rate that would achieve the same total return.",
      },
      netProfit: {
        label: "Net Profit / Loss",
        help: "Final Value minus Initial Investment. Negative indicates a loss.",
      },
      moic: {
        label: "Investment Multiple (MOIC)",
        help: "Multiple on Invested Capital — how many times your initial investment has grown.",
      },
      ruleOf72Years: {
        label: "Rule of 72 (Years to Double)",
        help: "At the annualized ROI, how many years it would take for the investment to double (72 ÷ CAGR%).",
      },
    },
    errors: {
      initialInvestmentRequired: "Initial investment must be greater than zero.",
      finalValueRequired: "Final value must be zero or greater.",
    },
    faq: [
      {
        q: "What is ROI?",
        a: "Return on Investment (ROI) measures how much profit or loss an investment generates relative to its cost. It is expressed as a percentage: ROI = (Final Value − Initial Investment) / Initial Investment × 100.",
      },
      {
        q: "What is the difference between ROI and CAGR?",
        a: "ROI gives the total percentage return over the entire investment period regardless of duration. CAGR (Compound Annual Growth Rate) normalizes the return on an annual basis, making it easier to compare investments held for different lengths of time.",
      },
      {
        q: "Can ROI be negative?",
        a: "Yes. A negative ROI means you lost money on the investment. For example, investing $10,000 and ending with $8,000 gives an ROI of −20%.",
      },
      {
        q: "What is the Rule of 72?",
        a: "The Rule of 72 is a quick way to estimate how many years it takes an investment to double at a given annual rate. Divide 72 by the annual return percentage. At 8% per year, an investment doubles in approximately 72 ÷ 8 = 9 years.",
      },
      {
        q: "What is MOIC?",
        a: "MOIC (Multiple on Invested Capital) shows how many times your investment has grown. A MOIC of 2.0x means the investment doubled. It is Final Value divided by Initial Investment.",
      },
    ],
  },

  tr: {
    title: "YGO Hesaplayıcı",
    short: "Yatırım getirinizi, yıllık YGO'yu (BYBBO) ve yatırım çarpanını hesaplayın.",
    description:
      "Ücretsiz yatırım getirisi (YGO) hesaplayıcı. İlk yatırım, nihai değer ve süreyi girerek YGO yüzdesini, BYBBO'yu, net kârı ve 72 Kuralı'nı öğrenin.",
    keywords: [
      "YGO hesaplayıcı",
      "yatırım getirisi",
      "BYBBO hesaplayıcı",
      "ROI hesaplama",
      "yıllık getiri",
      "net kâr hesaplayıcı",
      "yatırım çarpanı",
    ],
    inputs: {
      initialInvestment: {
        label: "Başlangıç Yatırımı",
        help: "Başlangıçta yatırdığınız para miktarı.",
      },
      finalValue: {
        label: "Nihai Değer",
        help: "Yatırımınızın mevcut veya bitiş değeri.",
      },
      years: {
        label: "Süre (Yıl)",
        help: "Yatırımı ne kadar süreyle tuttunuz? Yıllık YGO (BYBBO) hesaplaması için kullanılır.",
      },
    },
    outputs: {
      roi: {
        label: "YGO",
        help: "Toplam yatırım getirisi yüzdesi: (Nihai Değer − Başlangıç Yatırımı) / Başlangıç Yatırımı × 100.",
      },
      annualizedRoi: {
        label: "Yıllık YGO (BYBBO)",
        help: "Bileşik Yıllık Büyüme Oranı — aynı toplam getiriyi sağlayacak sabit yıllık oran.",
      },
      netProfit: {
        label: "Net Kâr / Zarar",
        help: "Nihai Değer eksi Başlangıç Yatırımı. Negatif değer zarara işaret eder.",
      },
      moic: {
        label: "Yatırım Çarpanı (MOIC)",
        help: "Yatırılan Sermaye Katı — başlangıç yatırımınız kaç kat büyüdü.",
      },
      ruleOf72Years: {
        label: "72 Kuralı (İkiye Katlanma Süresi)",
        help: "Yıllık YGO'ya göre yatırımın ikiye katlanması için gereken yaklaşık yıl sayısı (72 ÷ BYBBO%).",
      },
    },
    errors: {
      initialInvestmentRequired: "Başlangıç yatırımı sıfırdan büyük olmalıdır.",
      finalValueRequired: "Nihai değer sıfır veya daha büyük olmalıdır.",
    },
    faq: [
      {
        q: "YGO nedir?",
        a: "Yatırım Getirisi Oranı (YGO), bir yatırımın maliyetine göre ne kadar kâr veya zarar ürettiğini ölçer. Yüzde olarak ifade edilir: YGO = (Nihai Değer − Başlangıç Yatırımı) / Başlangıç Yatırımı × 100.",
      },
      {
        q: "YGO ile BYBBO arasındaki fark nedir?",
        a: "YGO, yatırım süresinden bağımsız olarak toplam getiriyi gösterir. BYBBO (Bileşik Yıllık Büyüme Oranı), getiriyi yıllık bazda normalize ederek farklı sürelerle tutulan yatırımların karşılaştırılmasını kolaylaştırır.",
      },
      {
        q: "YGO negatif olabilir mi?",
        a: "Evet. Negatif YGO, yatırımda para kaybedildiği anlamına gelir. Örneğin 10.000 TL yatırıp 8.000 TL ile bitmek −%20 YGO verir.",
      },
      {
        q: "72 Kuralı nedir?",
        a: "72 Kuralı, belirli bir yıllık getiri oranında bir yatırımın ikiye katlanması için gereken süreyi hızlıca tahmin etmenin yoludur. 72'yi yıllık getiri yüzdesine bölün. Yılda %8'de yatırım yaklaşık 72 ÷ 8 = 9 yılda ikiye katlanır.",
      },
      {
        q: "MOIC nedir?",
        a: "MOIC (Yatırılan Sermaye Katı), yatırımınızın kaç kat büyüdüğünü gösterir. 2,0x MOIC yatırımın ikiye katlandığı anlamına gelir. Nihai Değer, Başlangıç Yatırımı'na bölünür.",
      },
    ],
  },

  de: {
    title: "ROI-Rechner",
    short: "Berechnen Sie Ihren Return on Investment, annualisierten ROI (CAGR) und Investitionsmultiplikator.",
    description:
      "Kostenloser ROI-Rechner. Geben Sie Anfangsinvestition, Endwert und Zeitraum ein, um ROI-Prozentsatz, CAGR, Nettogewinn und die Regel 72 zu erhalten.",
    keywords: [
      "ROI-Rechner",
      "Return on Investment",
      "CAGR Rechner",
      "Investitionsrendite",
      "jährliche Rendite",
      "Nettogewinn Rechner",
      "Investitionsmultiplikator",
    ],
    inputs: {
      initialInvestment: {
        label: "Anfangsinvestition",
        help: "Der Betrag, den Sie zu Beginn investiert haben.",
      },
      finalValue: {
        label: "Endwert",
        help: "Der aktuelle oder abschließende Wert Ihrer Investition.",
      },
      years: {
        label: "Zeitraum (Jahre)",
        help: "Die Anzahl der Jahre, die Sie die Investition gehalten haben. Wird für die Berechnung des annualisierten ROI (CAGR) benötigt.",
      },
    },
    outputs: {
      roi: {
        label: "ROI",
        help: "Gesamtrendite in Prozent: (Endwert − Anfangsinvestition) / Anfangsinvestition × 100.",
      },
      annualizedRoi: {
        label: "Annualisierter ROI (CAGR)",
        help: "Compound Annual Growth Rate — die gleichmäßige jährliche Rate, die dieselbe Gesamtrendite erzielt.",
      },
      netProfit: {
        label: "Nettogewinn / -verlust",
        help: "Endwert minus Anfangsinvestition. Ein negativer Wert bedeutet einen Verlust.",
      },
      moic: {
        label: "Investitionsmultiplikator (MOIC)",
        help: "Multiple on Invested Capital — wie oft sich Ihre Anfangsinvestition vervielfacht hat.",
      },
      ruleOf72Years: {
        label: "Regel 72 (Jahre bis Verdopplung)",
        help: "Bei dem annualisierten ROI, wie viele Jahre es dauert, bis sich die Investition verdoppelt (72 ÷ CAGR%).",
      },
    },
    errors: {
      initialInvestmentRequired: "Die Anfangsinvestition muss größer als null sein.",
      finalValueRequired: "Der Endwert muss null oder größer sein.",
    },
    faq: [
      {
        q: "Was ist ROI?",
        a: "Return on Investment (ROI) misst, wie viel Gewinn oder Verlust eine Investition im Verhältnis zu ihren Kosten erzielt. Er wird in Prozent ausgedrückt: ROI = (Endwert − Anfangsinvestition) / Anfangsinvestition × 100.",
      },
      {
        q: "Was ist der Unterschied zwischen ROI und CAGR?",
        a: "Der ROI gibt die Gesamtrendite über den gesamten Investitionszeitraum an, unabhängig von der Dauer. Der CAGR (Compound Annual Growth Rate) normalisiert die Rendite auf Jahresbasis, sodass Investitionen unterschiedlicher Laufzeiten besser vergleichbar sind.",
      },
      {
        q: "Kann der ROI negativ sein?",
        a: "Ja. Ein negativer ROI bedeutet, dass Sie Geld verloren haben. Zum Beispiel ergibt eine Investition von 10.000 € mit einem Endwert von 8.000 € einen ROI von −20 %.",
      },
      {
        q: "Was ist die Regel 72?",
        a: "Die Regel 72 ist eine schnelle Methode, um abzuschätzen, wie lange es dauert, bis sich eine Investition bei einem bestimmten jährlichen Zinssatz verdoppelt. Teilen Sie 72 durch den jährlichen Renditeprozentsatz. Bei 8 % pro Jahr verdoppelt sich eine Investition in etwa 72 ÷ 8 = 9 Jahren.",
      },
      {
        q: "Was ist MOIC?",
        a: "MOIC (Multiple on Invested Capital) zeigt, wie oft sich Ihre Investition vervielfacht hat. Ein MOIC von 2,0x bedeutet, dass sich die Investition verdoppelt hat. Er ergibt sich aus Endwert geteilt durch Anfangsinvestition.",
      },
    ],
  },

  fr: {
    title: "Calculateur de ROI",
    short: "Calculez votre retour sur investissement, le ROI annualisé (TCAC) et le multiple d'investissement.",
    description:
      "Calculateur de ROI gratuit. Entrez votre investissement initial, la valeur finale et la durée pour obtenir le ROI, le TCAC, le bénéfice net et la règle des 72.",
    keywords: [
      "calculateur ROI",
      "retour sur investissement",
      "calculateur TCAC",
      "rendement investissement",
      "rendement annualisé",
      "calculateur bénéfice net",
      "multiple investissement",
    ],
    inputs: {
      initialInvestment: {
        label: "Investissement initial",
        help: "Le montant que vous avez investi au départ.",
      },
      finalValue: {
        label: "Valeur finale",
        help: "La valeur actuelle ou finale de votre investissement.",
      },
      years: {
        label: "Durée (années)",
        help: "Le nombre d'années pendant lesquelles vous avez conservé l'investissement. Utilisé pour calculer le ROI annualisé (TCAC).",
      },
    },
    outputs: {
      roi: {
        label: "ROI",
        help: "Rendement total en pourcentage : (Valeur finale − Investissement initial) / Investissement initial × 100.",
      },
      annualizedRoi: {
        label: "ROI annualisé (TCAC)",
        help: "Taux de croissance annuel composé — le taux annuel constant qui produirait le même rendement total.",
      },
      netProfit: {
        label: "Bénéfice / Perte nette",
        help: "Valeur finale moins investissement initial. Un résultat négatif indique une perte.",
      },
      moic: {
        label: "Multiple d'investissement (MOIC)",
        help: "Multiple sur le capital investi — combien de fois votre investissement initial a été multiplié.",
      },
      ruleOf72Years: {
        label: "Règle des 72 (années pour doubler)",
        help: "Au ROI annualisé, le nombre d'années pour que l'investissement double (72 ÷ TCAC%).",
      },
    },
    errors: {
      initialInvestmentRequired: "L'investissement initial doit être supérieur à zéro.",
      finalValueRequired: "La valeur finale doit être nulle ou positive.",
    },
    faq: [
      {
        q: "Qu'est-ce que le ROI ?",
        a: "Le retour sur investissement (ROI) mesure le bénéfice ou la perte générée par un investissement par rapport à son coût. Il s'exprime en pourcentage : ROI = (Valeur finale − Investissement initial) / Investissement initial × 100.",
      },
      {
        q: "Quelle est la différence entre ROI et TCAC ?",
        a: "Le ROI indique le rendement total sur toute la durée de l'investissement. Le TCAC (Taux de Croissance Annuel Composé) normalise ce rendement sur une base annuelle, facilitant la comparaison d'investissements de durées différentes.",
      },
      {
        q: "Le ROI peut-il être négatif ?",
        a: "Oui. Un ROI négatif signifie que vous avez perdu de l'argent. Par exemple, investir 10 000 € et obtenir 8 000 € donne un ROI de −20 %.",
      },
      {
        q: "Qu'est-ce que la règle des 72 ?",
        a: "La règle des 72 permet d'estimer rapidement en combien d'années un investissement double à un taux annuel donné. Divisez 72 par le taux de rendement annuel en pourcentage. À 8 % par an, un investissement double en environ 72 ÷ 8 = 9 ans.",
      },
      {
        q: "Qu'est-ce que le MOIC ?",
        a: "Le MOIC (Multiple sur le Capital Investi) indique combien de fois votre investissement a été multiplié. Un MOIC de 2,0x signifie que l'investissement a doublé. Il correspond à la Valeur finale divisée par l'Investissement initial.",
      },
    ],
  },

  es: {
    title: "Calculadora de ROI",
    short: "Calcula tu retorno de inversión, ROI anualizado (TCAC) y múltiplo de inversión.",
    description:
      "Calculadora de ROI gratuita. Introduce tu inversión inicial, valor final y período para obtener ROI, TCAC, ganancia neta y la regla del 72.",
    keywords: [
      "calculadora ROI",
      "retorno de inversión",
      "calculadora TCAC",
      "rendimiento inversión",
      "retorno anualizado",
      "calculadora ganancia neta",
      "múltiplo de inversión",
    ],
    inputs: {
      initialInvestment: {
        label: "Inversión inicial",
        help: "La cantidad de dinero que invertiste al comienzo.",
      },
      finalValue: {
        label: "Valor final",
        help: "El valor actual o final de tu inversión.",
      },
      years: {
        label: "Período (años)",
        help: "El número de años que mantuviste la inversión. Se usa para calcular el ROI anualizado (TCAC).",
      },
    },
    outputs: {
      roi: {
        label: "ROI",
        help: "Retorno total como porcentaje: (Valor final − Inversión inicial) / Inversión inicial × 100.",
      },
      annualizedRoi: {
        label: "ROI anualizado (TCAC)",
        help: "Tasa de Crecimiento Anual Compuesto — la tasa anual constante que lograría el mismo retorno total.",
      },
      netProfit: {
        label: "Ganancia / Pérdida neta",
        help: "Valor final menos inversión inicial. Un valor negativo indica una pérdida.",
      },
      moic: {
        label: "Múltiplo de inversión (MOIC)",
        help: "Múltiplo sobre el capital invertido — cuántas veces ha crecido tu inversión inicial.",
      },
      ruleOf72Years: {
        label: "Regla del 72 (años para duplicar)",
        help: "Con el ROI anualizado, cuántos años tardaría la inversión en duplicarse (72 ÷ TCAC%).",
      },
    },
    errors: {
      initialInvestmentRequired: "La inversión inicial debe ser mayor que cero.",
      finalValueRequired: "El valor final debe ser cero o mayor.",
    },
    faq: [
      {
        q: "¿Qué es el ROI?",
        a: "El Retorno de Inversión (ROI) mide cuánta ganancia o pérdida genera una inversión en relación con su costo. Se expresa como porcentaje: ROI = (Valor final − Inversión inicial) / Inversión inicial × 100.",
      },
      {
        q: "¿Cuál es la diferencia entre ROI y TCAC?",
        a: "El ROI muestra el retorno total durante todo el período de inversión sin importar su duración. El TCAC (Tasa de Crecimiento Anual Compuesto) normaliza el retorno de forma anual, facilitando la comparación entre inversiones de distintas duraciones.",
      },
      {
        q: "¿Puede el ROI ser negativo?",
        a: "Sí. Un ROI negativo significa que perdiste dinero en la inversión. Por ejemplo, invertir 10,000 € y terminar con 8,000 € da un ROI de −20%.",
      },
      {
        q: "¿Qué es la regla del 72?",
        a: "La regla del 72 es una forma rápida de estimar cuántos años tarda una inversión en duplicarse a una tasa anual dada. Divide 72 entre el porcentaje de retorno anual. A una tasa del 8% anual, la inversión se duplica en aproximadamente 72 ÷ 8 = 9 años.",
      },
      {
        q: "¿Qué es el MOIC?",
        a: "El MOIC (Múltiplo sobre el Capital Invertido) muestra cuántas veces creció tu inversión. Un MOIC de 2,0x significa que la inversión se duplicó. Se calcula dividiendo el Valor final entre la Inversión inicial.",
      },
    ],
  },

  it: {
    title: "Calcolatore ROI",
    short: "Calcola il tuo ritorno sull'investimento, il ROI annualizzato (CAGR) e il multiplo di investimento.",
    description:
      "Calcolatore ROI gratuito. Inserisci investimento iniziale, valore finale e periodo per ottenere ROI, CAGR, profitto netto e la regola del 72.",
    keywords: [
      "calcolatore ROI",
      "ritorno sull'investimento",
      "calcolatore CAGR",
      "rendimento investimento",
      "rendimento annualizzato",
      "calcolatore profitto netto",
      "multiplo di investimento",
    ],
    inputs: {
      initialInvestment: {
        label: "Investimento iniziale",
        help: "L'importo investito all'inizio.",
      },
      finalValue: {
        label: "Valore finale",
        help: "Il valore attuale o finale del tuo investimento.",
      },
      years: {
        label: "Periodo (anni)",
        help: "Il numero di anni in cui hai mantenuto l'investimento. Usato per calcolare il ROI annualizzato (CAGR).",
      },
    },
    outputs: {
      roi: {
        label: "ROI",
        help: "Rendimento totale in percentuale: (Valore finale − Investimento iniziale) / Investimento iniziale × 100.",
      },
      annualizedRoi: {
        label: "ROI annualizzato (CAGR)",
        help: "Tasso di Crescita Annuo Composto — il tasso annuo costante che produrrebbe lo stesso rendimento totale.",
      },
      netProfit: {
        label: "Profitto / Perdita netta",
        help: "Valore finale meno investimento iniziale. Un valore negativo indica una perdita.",
      },
      moic: {
        label: "Multiplo di investimento (MOIC)",
        help: "Multiplo sul Capitale Investito — quante volte è cresciuto l'investimento iniziale.",
      },
      ruleOf72Years: {
        label: "Regola del 72 (anni per raddoppiare)",
        help: "Con il ROI annualizzato, quanti anni occorrono perché l'investimento raddoppi (72 ÷ CAGR%).",
      },
    },
    errors: {
      initialInvestmentRequired: "L'investimento iniziale deve essere maggiore di zero.",
      finalValueRequired: "Il valore finale deve essere zero o maggiore.",
    },
    faq: [
      {
        q: "Cos'è il ROI?",
        a: "Il Return on Investment (ROI) misura quanto profitto o perdita genera un investimento rispetto al suo costo. Si esprime in percentuale: ROI = (Valore finale − Investimento iniziale) / Investimento iniziale × 100.",
      },
      {
        q: "Qual è la differenza tra ROI e CAGR?",
        a: "Il ROI indica il rendimento totale per tutto il periodo di investimento indipendentemente dalla durata. Il CAGR normalizza il rendimento su base annua, facilitando il confronto tra investimenti di durata diversa.",
      },
      {
        q: "Il ROI può essere negativo?",
        a: "Sì. Un ROI negativo significa che hai perso denaro. Ad esempio, investire 10.000 € e ottenere 8.000 € dà un ROI di −20%.",
      },
      {
        q: "Cos'è la regola del 72?",
        a: "La regola del 72 è un modo rapido per stimare in quanti anni un investimento raddoppia a un determinato tasso annuo. Dividi 72 per la percentuale di rendimento annuo. All'8% annuo, un investimento raddoppia in circa 72 ÷ 8 = 9 anni.",
      },
      {
        q: "Cos'è il MOIC?",
        a: "Il MOIC (Multiplo sul Capitale Investito) mostra quante volte è cresciuto l'investimento. Un MOIC di 2,0x significa che l'investimento è raddoppiato. Si calcola dividendo il Valore finale per l'Investimento iniziale.",
      },
    ],
  },

  ar: {
    title: "حاسبة العائد على الاستثمار",
    short: "احسب عائد استثمارك والعائد السنوي (معدل النمو السنوي المركب) ومضاعف الاستثمار.",
    description:
      "حاسبة عائد استثمار مجانية. أدخل قيمة الاستثمار الأولي والقيمة النهائية والمدة الزمنية للحصول على نسبة العائد والمعدل السنوي المركب والربح الصافي وقاعدة 72.",
    keywords: [
      "حاسبة العائد على الاستثمار",
      "عائد الاستثمار",
      "معدل النمو السنوي المركب",
      "حاسبة CAGR",
      "العائد السنوي",
      "حاسبة الربح الصافي",
      "مضاعف الاستثمار",
    ],
    inputs: {
      initialInvestment: {
        label: "الاستثمار الأولي",
        help: "مقدار المال الذي استثمرته في البداية.",
      },
      finalValue: {
        label: "القيمة النهائية",
        help: "القيمة الحالية أو النهائية لاستثمارك.",
      },
      years: {
        label: "المدة الزمنية (سنوات)",
        help: "عدد السنوات التي احتفظت فيها بالاستثمار. يُستخدم لحساب العائد السنوي (CAGR).",
      },
    },
    outputs: {
      roi: {
        label: "العائد على الاستثمار",
        help: "إجمالي العائد كنسبة مئوية: (القيمة النهائية − الاستثمار الأولي) / الاستثمار الأولي × 100.",
      },
      annualizedRoi: {
        label: "العائد السنوي (CAGR)",
        help: "معدل النمو السنوي المركب — المعدل السنوي الثابت الذي يحقق نفس العائد الإجمالي.",
      },
      netProfit: {
        label: "صافي الربح / الخسارة",
        help: "القيمة النهائية ناقص الاستثمار الأولي. القيمة السالبة تعني خسارة.",
      },
      moic: {
        label: "مضاعف الاستثمار (MOIC)",
        help: "مضاعف رأس المال المستثمر — كم مرة نما استثمارك الأولي.",
      },
      ruleOf72Years: {
        label: "قاعدة 72 (سنوات المضاعفة)",
        help: "بناءً على العائد السنوي، كم من السنوات يلزم لمضاعفة الاستثمار (72 ÷ CAGR%).",
      },
    },
    errors: {
      initialInvestmentRequired: "يجب أن يكون الاستثمار الأولي أكبر من الصفر.",
      finalValueRequired: "يجب أن تكون القيمة النهائية صفرًا أو أكثر.",
    },
    faq: [
      {
        q: "ما هو العائد على الاستثمار؟",
        a: "يقيس العائد على الاستثمار (ROI) مقدار الربح أو الخسارة الناتجة عن استثمار ما مقارنةً بتكلفته. يُعبَّر عنه كنسبة مئوية: العائد = (القيمة النهائية − الاستثمار الأولي) / الاستثمار الأولي × 100.",
      },
      {
        q: "ما الفرق بين العائد على الاستثمار ومعدل النمو السنوي المركب؟",
        a: "يُبيّن العائد على الاستثمار إجمالي العائد على مدار فترة الاستثمار بغض النظر عن مدتها. أما معدل النمو السنوي المركب (CAGR) فيُوحِّد العائد على أساس سنوي، مما يسهّل مقارنة استثمارات بفترات زمنية مختلفة.",
      },
      {
        q: "هل يمكن أن يكون العائد سالبًا؟",
        a: "نعم. يعني العائد السالب أنك خسرت أموالًا في الاستثمار. على سبيل المثال، استثمار 10,000 دولار والحصول على 8,000 دولار يُعطي عائدًا بنسبة −20%.",
      },
      {
        q: "ما هي قاعدة 72؟",
        a: "قاعدة 72 هي طريقة سريعة لتقدير عدد السنوات اللازمة لمضاعفة استثمار عند معدل سنوي معين. اقسم 72 على نسبة العائد السنوي. عند عائد 8% سنويًا، يتضاعف الاستثمار في حوالي 72 ÷ 8 = 9 سنوات.",
      },
      {
        q: "ما هو MOIC؟",
        a: "MOIC (مضاعف رأس المال المستثمر) يُظهر عدد مرات نمو استثمارك. MOIC بقيمة 2.0× يعني أن الاستثمار تضاعف. يُحسَب بقسمة القيمة النهائية على الاستثمار الأولي.",
      },
    ],
  },

  ru: {
    title: "Калькулятор ROI",
    short: "Рассчитайте доходность инвестиций, годовой ROI (CAGR) и инвестиционный мультипликатор.",
    description:
      "Бесплатный калькулятор рентабельности инвестиций. Введите начальную инвестицию, конечную стоимость и период, чтобы получить ROI, CAGR, чистую прибыль и правило 72.",
    keywords: [
      "калькулятор ROI",
      "рентабельность инвестиций",
      "калькулятор CAGR",
      "доходность инвестиций",
      "годовая доходность",
      "чистая прибыль",
      "инвестиционный мультипликатор",
    ],
    inputs: {
      initialInvestment: {
        label: "Начальная инвестиция",
        help: "Сумма денег, которую вы инвестировали изначально.",
      },
      finalValue: {
        label: "Конечная стоимость",
        help: "Текущая или итоговая стоимость вашей инвестиции.",
      },
      years: {
        label: "Период (лет)",
        help: "Количество лет владения инвестицией. Используется для расчёта годового ROI (CAGR).",
      },
    },
    outputs: {
      roi: {
        label: "ROI",
        help: "Общая доходность в процентах: (Конечная стоимость − Начальная инвестиция) / Начальная инвестиция × 100.",
      },
      annualizedRoi: {
        label: "Годовой ROI (CAGR)",
        help: "Совокупный годовой темп роста — постоянная годовая ставка, дающая ту же общую доходность.",
      },
      netProfit: {
        label: "Чистая прибыль / убыток",
        help: "Конечная стоимость минус начальная инвестиция. Отрицательное значение означает убыток.",
      },
      moic: {
        label: "Инвестиционный мультипликатор (MOIC)",
        help: "Мультипликатор на вложенный капитал — во сколько раз выросла начальная инвестиция.",
      },
      ruleOf72Years: {
        label: "Правило 72 (лет до удвоения)",
        help: "При данном годовом ROI, сколько лет потребуется для удвоения инвестиции (72 ÷ CAGR%).",
      },
    },
    errors: {
      initialInvestmentRequired: "Начальная инвестиция должна быть больше нуля.",
      finalValueRequired: "Конечная стоимость должна быть равна нулю или больше.",
    },
    faq: [
      {
        q: "Что такое ROI?",
        a: "ROI (Return on Investment, рентабельность инвестиций) измеряет прибыль или убыток от инвестиции относительно её стоимости. Выражается в процентах: ROI = (Конечная стоимость − Начальная инвестиция) / Начальная инвестиция × 100.",
      },
      {
        q: "В чём разница между ROI и CAGR?",
        a: "ROI показывает общую доходность за весь период инвестирования вне зависимости от его продолжительности. CAGR нормализует доходность на годовой основе, позволяя сравнивать инвестиции с разными сроками.",
      },
      {
        q: "Может ли ROI быть отрицательным?",
        a: "Да. Отрицательный ROI означает потерю денег. Например, инвестировав 10 000 ₽ и получив 8 000 ₽, ROI составит −20%.",
      },
      {
        q: "Что такое правило 72?",
        a: "Правило 72 — быстрый способ оценить, сколько лет нужно для удвоения инвестиции при заданной годовой ставке. Разделите 72 на процент годовой доходности. При 8% годовых инвестиция удвоится примерно за 72 ÷ 8 = 9 лет.",
      },
      {
        q: "Что такое MOIC?",
        a: "MOIC (Multiple on Invested Capital) показывает, во сколько раз выросла инвестиция. MOIC 2,0x означает, что инвестиция удвоилась. Рассчитывается как отношение конечной стоимости к начальной инвестиции.",
      },
    ],
  },

  zh: {
    title: "投资回报率计算器",
    short: "计算您的投资回报率、年化回报率（CAGR）和投资倍数。",
    description:
      "免费投资回报率计算器。输入初始投资额、最终价值和持有年限，获取ROI百分比、CAGR、净利润及72法则结果。",
    keywords: [
      "投资回报率计算器",
      "ROI计算",
      "CAGR计算器",
      "年化收益率",
      "净利润计算",
      "投资倍数",
      "复合年增长率",
    ],
    inputs: {
      initialInvestment: {
        label: "初始投资额",
        help: "您最初投入的资金金额。",
      },
      finalValue: {
        label: "最终价值",
        help: "您投资的当前或最终价值。",
      },
      years: {
        label: "持有年限（年）",
        help: "持有投资的年数，用于计算年化回报率（CAGR）。",
      },
    },
    outputs: {
      roi: {
        label: "投资回报率",
        help: "总回报百分比：（最终价值 − 初始投资）/ 初始投资 × 100。",
      },
      annualizedRoi: {
        label: "年化回报率（CAGR）",
        help: "复合年增长率——能实现相同总回报的稳定年利率。",
      },
      netProfit: {
        label: "净利润 / 亏损",
        help: "最终价值减去初始投资。负值表示亏损。",
      },
      moic: {
        label: "投资倍数（MOIC）",
        help: "投入资本回报倍数——初始投资增长了多少倍。",
      },
      ruleOf72Years: {
        label: "72法则（翻倍年数）",
        help: "按年化回报率，投资翻倍所需的年数（72 ÷ CAGR%）。",
      },
    },
    errors: {
      initialInvestmentRequired: "初始投资额必须大于零。",
      finalValueRequired: "最终价值必须为零或更大。",
    },
    faq: [
      {
        q: "什么是投资回报率？",
        a: "投资回报率（ROI）衡量投资相对于成本产生的利润或损失，以百分比表示：ROI =（最终价值 − 初始投资）/ 初始投资 × 100。",
      },
      {
        q: "ROI与CAGR有什么区别？",
        a: "ROI显示整个投资期间的总回报，与持有时长无关。CAGR（复合年增长率）将回报标准化为年度数据，便于比较不同持有期的投资。",
      },
      {
        q: "ROI可以为负吗？",
        a: "可以。负ROI表示您在投资中亏损了。例如，投资10,000元最终只剩8,000元，ROI为−20%。",
      },
      {
        q: "什么是72法则？",
        a: "72法则是快速估算投资在特定年利率下翻倍所需年数的方法。将72除以年收益率百分比。年收益率8%时，投资大约在72÷8=9年内翻倍。",
      },
      {
        q: "什么是MOIC？",
        a: "MOIC（投入资本回报倍数）显示您的投资增长了多少倍。MOIC为2.0x表示投资翻了一番。计算方式为最终价值除以初始投资。",
      },
    ],
  },

  ja: {
    title: "ROI計算機",
    short: "投資収益率（ROI）、年率換算リターン（CAGR）、投資倍率を計算します。",
    description:
      "無料のROI計算機。初期投資額、最終価値、保有期間を入力するだけで、ROI、CAGR、純利益、72の法則がわかります。",
    keywords: [
      "ROI計算機",
      "投資収益率",
      "CAGR計算",
      "年率換算リターン",
      "純利益計算",
      "投資倍率",
      "複合年間成長率",
    ],
    inputs: {
      initialInvestment: {
        label: "初期投資額",
        help: "最初に投資した金額を入力してください。",
      },
      finalValue: {
        label: "最終価値",
        help: "投資の現在価値または最終価値を入力してください。",
      },
      years: {
        label: "保有期間（年）",
        help: "投資を保有した年数。年率換算ROI（CAGR）の計算に使用されます。",
      },
    },
    outputs: {
      roi: {
        label: "ROI",
        help: "総収益率：（最終価値 − 初期投資額）÷ 初期投資額 × 100。",
      },
      annualizedRoi: {
        label: "年率換算ROI（CAGR）",
        help: "複合年間成長率——同じ総収益を実現する一定の年率。",
      },
      netProfit: {
        label: "純利益 / 損失",
        help: "最終価値から初期投資額を引いた金額。マイナスは損失を意味します。",
      },
      moic: {
        label: "投資倍率（MOIC）",
        help: "投資元本倍数——初期投資額が何倍になったかを示します。",
      },
      ruleOf72Years: {
        label: "72の法則（倍増年数）",
        help: "年率換算ROIで投資が2倍になるまでの年数（72 ÷ CAGR%）。",
      },
    },
    errors: {
      initialInvestmentRequired: "初期投資額はゼロより大きくなければなりません。",
      finalValueRequired: "最終価値はゼロ以上でなければなりません。",
    },
    faq: [
      {
        q: "ROIとは何ですか？",
        a: "ROI（投資収益率）は、投資がそのコストに対してどれだけの利益または損失を生み出すかを測る指標です。ROI =（最終価値 − 初期投資額）÷ 初期投資額 × 100 で計算されます。",
      },
      {
        q: "ROIとCAGRの違いは何ですか？",
        a: "ROIは期間にかかわらず総収益率を示します。CAGRは収益を年率に換算するため、保有期間が異なる投資を比較するのに適しています。",
      },
      {
        q: "ROIはマイナスになりますか？",
        a: "はい。マイナスのROIは損失を意味します。たとえば1万円を投資して8,000円になった場合、ROIは−20%です。",
      },
      {
        q: "72の法則とは何ですか？",
        a: "72の法則は、ある年利率で投資が2倍になるまでの年数を素早く見積もる方法です。72を年率（%）で割ります。年利8%では、72 ÷ 8 = 9年で2倍になります。",
      },
      {
        q: "MOICとは何ですか？",
        a: "MOIC（投資元本倍数）は投資が何倍に成長したかを示します。MOIC 2.0xは投資が2倍になったことを意味します。最終価値を初期投資額で割って求めます。",
      },
    ],
  },

  ko: {
    title: "ROI 계산기",
    short: "투자 수익률(ROI), 연환산 수익률(CAGR), 투자 배수를 계산하세요.",
    description:
      "무료 ROI 계산기. 초기 투자금, 최종 가치, 보유 기간을 입력하면 ROI, CAGR, 순이익, 72의 법칙 결과를 즉시 확인할 수 있습니다.",
    keywords: [
      "ROI 계산기",
      "투자 수익률",
      "CAGR 계산기",
      "연환산 수익률",
      "순이익 계산",
      "투자 배수",
      "복합 연간 성장률",
    ],
    inputs: {
      initialInvestment: {
        label: "초기 투자금",
        help: "처음에 투자한 금액입니다.",
      },
      finalValue: {
        label: "최종 가치",
        help: "투자의 현재 또는 최종 가치입니다.",
      },
      years: {
        label: "보유 기간(년)",
        help: "투자를 보유한 연수입니다. 연환산 ROI(CAGR) 계산에 사용됩니다.",
      },
    },
    outputs: {
      roi: {
        label: "ROI",
        help: "총 수익률(%): (최종 가치 − 초기 투자금) / 초기 투자금 × 100.",
      },
      annualizedRoi: {
        label: "연환산 ROI (CAGR)",
        help: "복합 연간 성장률 — 동일한 총 수익을 달성하는 일정한 연간 비율.",
      },
      netProfit: {
        label: "순이익 / 손실",
        help: "최종 가치에서 초기 투자금을 뺀 금액. 음수면 손실을 의미합니다.",
      },
      moic: {
        label: "투자 배수 (MOIC)",
        help: "투자 원금 대비 배수 — 초기 투자금이 몇 배로 증가했는지 나타냅니다.",
      },
      ruleOf72Years: {
        label: "72의 법칙 (두 배가 되는 연수)",
        help: "연환산 ROI 기준으로 투자가 두 배가 되기까지 걸리는 연수(72 ÷ CAGR%).",
      },
    },
    errors: {
      initialInvestmentRequired: "초기 투자금은 0보다 커야 합니다.",
      finalValueRequired: "최종 가치는 0 이상이어야 합니다.",
    },
    faq: [
      {
        q: "ROI란 무엇인가요?",
        a: "투자 수익률(ROI)은 투자가 비용 대비 얼마나 이익 또는 손실을 창출했는지를 나타냅니다. ROI = (최종 가치 − 초기 투자금) / 초기 투자금 × 100으로 계산됩니다.",
      },
      {
        q: "ROI와 CAGR의 차이는 무엇인가요?",
        a: "ROI는 투자 기간과 관계없이 총 수익률을 보여줍니다. CAGR은 수익률을 연 단위로 환산하여 보유 기간이 다른 투자를 비교하기 용이하게 만듭니다.",
      },
      {
        q: "ROI가 음수가 될 수 있나요?",
        a: "네. 음수 ROI는 투자에서 손실이 발생했음을 의미합니다. 예를 들어 10,000원을 투자하여 8,000원이 남으면 ROI는 −20%입니다.",
      },
      {
        q: "72의 법칙이란 무엇인가요?",
        a: "72의 법칙은 특정 연 수익률에서 투자가 두 배가 되는 데 걸리는 연수를 빠르게 추정하는 방법입니다. 72를 연 수익률(%)로 나눕니다. 연 8% 수익률에서 투자는 약 72 ÷ 8 = 9년 만에 두 배가 됩니다.",
      },
      {
        q: "MOIC란 무엇인가요?",
        a: "MOIC(투자 원금 대비 배수)는 투자가 몇 배로 성장했는지를 나타냅니다. MOIC 2.0x는 투자가 두 배가 되었음을 의미합니다. 최종 가치를 초기 투자금으로 나누어 구합니다.",
      },
    ],
  },

  hi: {
    title: "ROI कैलकुलेटर",
    short: "अपना निवेश पर रिटर्न (ROI), वार्षिक ROI (CAGR) और निवेश गुणक की गणना करें।",
    description:
      "निःशुल्क ROI कैलकुलेटर। प्रारंभिक निवेश, अंतिम मूल्य और अवधि दर्ज करके ROI प्रतिशत, CAGR, शुद्ध लाभ और नियम 72 का परिणाम पाएं।",
    keywords: [
      "ROI कैलकुलेटर",
      "निवेश पर रिटर्न",
      "CAGR कैलकुलेटर",
      "वार्षिक रिटर्न",
      "शुद्ध लाभ कैलकुलेटर",
      "निवेश गुणक",
      "चक्रवृद्धि वार्षिक वृद्धि दर",
    ],
    inputs: {
      initialInvestment: {
        label: "प्रारंभिक निवेश",
        help: "शुरुआत में निवेश की गई राशि।",
      },
      finalValue: {
        label: "अंतिम मूल्य",
        help: "आपके निवेश का वर्तमान या अंतिम मूल्य।",
      },
      years: {
        label: "समय अवधि (वर्ष)",
        help: "निवेश रखने के वर्षों की संख्या। वार्षिक ROI (CAGR) गणना के लिए उपयोग किया जाता है।",
      },
    },
    outputs: {
      roi: {
        label: "ROI",
        help: "कुल रिटर्न प्रतिशत: (अंतिम मूल्य − प्रारंभिक निवेश) / प्रारंभिक निवेश × 100।",
      },
      annualizedRoi: {
        label: "वार्षिक ROI (CAGR)",
        help: "चक्रवृद्धि वार्षिक वृद्धि दर — वह स्थिर वार्षिक दर जो समान कुल रिटर्न देगी।",
      },
      netProfit: {
        label: "शुद्ध लाभ / हानि",
        help: "अंतिम मूल्य घटा प्रारंभिक निवेश। नकारात्मक मूल्य हानि दर्शाता है।",
      },
      moic: {
        label: "निवेश गुणक (MOIC)",
        help: "निवेशित पूंजी का गुणक — आपका प्रारंभिक निवेश कितने गुना बढ़ा।",
      },
      ruleOf72Years: {
        label: "नियम 72 (दोगुना होने में वर्ष)",
        help: "वार्षिक ROI पर निवेश को दोगुना होने में लगने वाले वर्ष (72 ÷ CAGR%)।",
      },
    },
    errors: {
      initialInvestmentRequired: "प्रारंभिक निवेश शून्य से अधिक होना चाहिए।",
      finalValueRequired: "अंतिम मूल्य शून्य या उससे अधिक होना चाहिए।",
    },
    faq: [
      {
        q: "ROI क्या है?",
        a: "निवेश पर रिटर्न (ROI) यह मापता है कि कोई निवेश उसकी लागत के सापेक्ष कितना लाभ या हानि उत्पन्न करता है। इसे प्रतिशत के रूप में व्यक्त किया जाता है: ROI = (अंतिम मूल्य − प्रारंभिक निवेश) / प्रारंभिक निवेश × 100।",
      },
      {
        q: "ROI और CAGR में क्या अंतर है?",
        a: "ROI अवधि की परवाह किए बिना पूरी निवेश अवधि का कुल रिटर्न दर्शाता है। CAGR रिटर्न को वार्षिक आधार पर सामान्य बनाता है, जिससे अलग-अलग अवधियों के निवेशों की तुलना आसान हो जाती है।",
      },
      {
        q: "क्या ROI नकारात्मक हो सकता है?",
        a: "हाँ। नकारात्मक ROI का मतलब है कि आपने निवेश में पैसे खोए। उदाहरण के लिए, ₹10,000 निवेश करके ₹8,000 मिलने पर ROI −20% होगा।",
      },
      {
        q: "नियम 72 क्या है?",
        a: "नियम 72 किसी दी गई वार्षिक दर पर निवेश के दोगुना होने में लगने वाले वर्षों का त्वरित अनुमान लगाने का तरीका है। 72 को वार्षिक रिटर्न प्रतिशत से भाग दें। 8% वार्षिक दर पर निवेश लगभग 72 ÷ 8 = 9 वर्षों में दोगुना हो जाता है।",
      },
      {
        q: "MOIC क्या है?",
        a: "MOIC (निवेशित पूंजी का गुणक) दर्शाता है कि आपका निवेश कितने गुना बढ़ा। MOIC 2.0x का मतलब है कि निवेश दोगुना हो गया। इसे अंतिम मूल्य को प्रारंभिक निवेश से भाग देकर निकाला जाता है।",
      },
    ],
  },
};

export default i18n;
