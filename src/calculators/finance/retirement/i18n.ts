import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Retirement Savings Calculator",
    short: "Calculate your retirement nest egg, monthly income, and years of income based on savings and returns.",
    description:
      "Free retirement savings calculator. Enter your age, savings, monthly contributions, and expected return to project your retirement portfolio and estimated monthly income.",
    keywords: [
      "retirement calculator",
      "retirement savings calculator",
      "retirement planning",
      "401k calculator",
      "nest egg calculator",
      "compound interest retirement",
      "monthly retirement income",
    ],
    inputs: {
      currentAge: {
        label: "Current age",
        help: "Your current age in years (18–80).",
      },
      retirementAge: {
        label: "Retirement age",
        help: "The age at which you plan to retire (45–90).",
      },
      currentSavings: {
        label: "Current savings",
        help: "Total retirement savings you have accumulated so far.",
      },
      monthlyContribution: {
        label: "Monthly contribution",
        help: "Amount you plan to contribute to retirement savings each month.",
      },
      annualReturn: {
        label: "Annual return (%)",
        help: "Expected average annual investment return. Historical US stock market average is approximately 7% inflation-adjusted.",
      },
      withdrawalRate: {
        label: "Withdrawal rate (%)",
        help: "Annual percentage of your retirement portfolio you plan to withdraw. The '4% rule' is a common benchmark.",
      },
    },
    outputs: {
      totalAtRetirement: {
        label: "Total at Retirement",
        help: "Projected total value of your retirement portfolio at your target retirement age.",
      },
      monthlyIncome: {
        label: "Monthly Retirement Income",
        help: "Estimated monthly income based on your withdrawal rate applied to the total portfolio.",
      },
      yearsOfIncome: {
        label: "Years of Income",
        help: "How long your retirement portfolio will last at the specified withdrawal rate. Values of 999 indicate the portfolio theoretically never depletes.",
      },
      totalContributions: {
        label: "Total Contributions",
        help: "Sum of your initial savings plus all monthly contributions over the savings period.",
      },
      totalInterest: {
        label: "Total Investment Growth",
        help: "The difference between your total at retirement and your total contributions — money earned through investment growth.",
      },
    },
    errors: {
      retirementBeforeCurrent: "Retirement age must be greater than current age.",
      invalidAge: "Age must be between 18 and 80.",
    },
    faq: [
      {
        q: "What is the 4% rule?",
        a: "The 4% rule (Bengen, 1994) states that retirees can withdraw 4% of their portfolio in the first year of retirement, then adjust for inflation each year, and their money is likely to last 30 years. It is a rule of thumb, not a guarantee — actual outcomes depend on market performance.",
      },
      {
        q: "What annual return should I assume?",
        a: "The US stock market has historically returned approximately 10% nominally and 7% after inflation. A commonly used conservative estimate is 6–7% for a diversified portfolio. More conservative portfolios (with bonds) may use 4–5%.",
      },
      {
        q: "How does compound interest affect my retirement savings?",
        a: "Compound interest means that your returns earn returns. The longer your money is invested, the more dramatic the compounding effect. This is why starting early makes such a large difference — even a few years of extra contributions early in life can double or triple the final portfolio value.",
      },
      {
        q: "Should I include Social Security or pension in this calculator?",
        a: "This calculator focuses on personal savings and investment growth only. Add your estimated Social Security or pension benefit to the monthly income output to get your total projected retirement income.",
      },
      {
        q: "Is this calculator suitable for all countries?",
        a: "The calculator uses a generic compound interest model and is applicable internationally. However, specific tax rules, retirement account limits (401k, IRA, pension schemes, etc.) vary by country. Consult a local financial advisor for country-specific guidance.",
      },
    ],
  },

  tr: {
    title: "Emeklilik Tasarruf Hesaplayıcısı",
    short: "Emeklilik birikimlerinizi, aylık gelirinizi ve tasarruf getirilerinize göre gelir yıllarını hesaplayın.",
    description:
      "Ücretsiz emeklilik tasarruf hesaplayıcısı. Yaşınızı, birikiminizi, aylık katkılarınızı ve beklenen getiriyi girerek emeklilik portföyünüzü ve tahmini aylık gelirinizi hesaplayın.",
    keywords: [
      "emeklilik hesaplayıcı",
      "emeklilik tasarrufu",
      "emeklilik planlaması",
      "bireysel emeklilik sistemi",
      "emeklilik fonu",
      "bileşik faiz emeklilik",
      "aylık emeklilik geliri",
    ],
    inputs: {
      currentAge: {
        label: "Mevcut yaş",
        help: "Şu anki yaşınız (18–80 yıl).",
      },
      retirementAge: {
        label: "Emeklilik yaşı",
        help: "Emekli olmayı planladığınız yaş (45–90).",
      },
      currentSavings: {
        label: "Mevcut birikim",
        help: "Şimdiye kadar biriktirdiğiniz toplam emeklilik tasarrufu.",
      },
      monthlyContribution: {
        label: "Aylık katkı",
        help: "Her ay emeklilik tasarrufuna eklemeyi planladığınız tutar.",
      },
      annualReturn: {
        label: "Yıllık getiri (%)",
        help: "Beklenen ortalama yıllık yatırım getirisi. ABD hisse senedi piyasasının enflasyona göre düzeltilmiş tarihi ortalaması yaklaşık %7'dir.",
      },
      withdrawalRate: {
        label: "Para çekme oranı (%)",
        help: "Emeklilik portföyünüzden yıllık çekmeyi planladığınız yüzde. Yaygın bir ölçüt olarak '4% kuralı' kullanılır.",
      },
    },
    outputs: {
      totalAtRetirement: {
        label: "Emeklilikte Toplam Birikim",
        help: "Hedeflenen emeklilik yaşında emeklilik portföyünüzün tahmini toplam değeri.",
      },
      monthlyIncome: {
        label: "Aylık Emeklilik Geliri",
        help: "Toplam portföye uygulanan para çekme oranına göre tahmini aylık gelir.",
      },
      yearsOfIncome: {
        label: "Gelir Yılları",
        help: "Emeklilik portföyünüzün belirtilen para çekme oranında ne kadar süreceği. 999 değerleri portföyün teorik olarak hiç tükenmeyeceğini gösterir.",
      },
      totalContributions: {
        label: "Toplam Katkılar",
        help: "Başlangıç tasarrufunuzun ve tasarruf süresi boyunca tüm aylık katkıların toplamı.",
      },
      totalInterest: {
        label: "Toplam Yatırım Büyümesi",
        help: "Emeklilikteki toplam ile toplam katkılarınız arasındaki fark — yatırım büyümesiyle kazanılan para.",
      },
    },
    errors: {
      retirementBeforeCurrent: "Emeklilik yaşı mevcut yaştan büyük olmalıdır.",
      invalidAge: "Yaş 18 ile 80 arasında olmalıdır.",
    },
    faq: [
      {
        q: "%4 kuralı nedir?",
        a: "%4 kuralı (Bengen, 1994), emeklilerin portföylerinden ilk yıl %4 çekebileceğini ve ardından her yıl enflasyona göre düzeltme yapabileceğini, bu durumda paranın 30 yıl yetme ihtimalinin yüksek olduğunu belirtir. Bu bir kural değil, bir ölçüttür.",
      },
      {
        q: "Hangi yıllık getiriyi varsaymalıyım?",
        a: "ABD hisse senedi piyasası tarihsel olarak nominal %10, enflasyona göre düzeltilmiş %7 getiri sağlamıştır. Çeşitlendirilmiş portföyler için yaygın olarak kullanılan muhafazakâr tahmin %6–7'dir.",
      },
      {
        q: "Bileşik faiz emeklilik tasarruflarımı nasıl etkiler?",
        a: "Bileşik faiz, getirilerinizin de getiri kazandığı anlamına gelir. Paranız ne kadar uzun yatırımda kalırsa bileşik etki o kadar belirgin olur. Bu nedenle erken başlamak büyük fark yaratır.",
      },
      {
        q: "Sosyal güvenliği veya emekli maaşını dahil etmeli miyim?",
        a: "Bu hesaplayıcı yalnızca kişisel tasarruf ve yatırım büyümesine odaklanır. Tahmini sosyal güvenlik veya emekli maaşı gelirinizi aylık gelir çıktısına ekleyerek toplam tahmini emeklilik gelirinizi elde edebilirsiniz.",
      },
      {
        q: "Bu hesaplayıcı tüm ülkeler için uygun mudur?",
        a: "Hesaplayıcı genel bir bileşik faiz modeli kullanır ve uluslararası olarak uygulanabilir. Ancak vergi kuralları ve emeklilik hesabı limitleri ülkeden ülkeye değişir. Yerel bir finansal danışmana başvurmanızı öneririz.",
      },
    ],
  },

  de: {
    title: "Altersvorsorge-Rechner",
    short: "Berechnen Sie Ihr Rentenkapital, Ihr monatliches Einkommen und die Laufzeit Ihrer Ersparnisse.",
    description:
      "Kostenloser Altersvorsorge-Rechner. Geben Sie Ihr Alter, Ersparnisse, monatliche Beiträge und die erwartete Rendite ein, um Ihr Rentenportfolio und das monatliche Einkommen zu prognostizieren.",
    keywords: [
      "Altersvorsorge-Rechner",
      "Rentenrechner",
      "Ruhestandsplanung",
      "Rentenportfolio",
      "Zinseszins Rente",
      "monatliches Renteneinkommen",
      "Sparrechner",
    ],
    inputs: {
      currentAge: { label: "Aktuelles Alter", help: "Ihr aktuelles Alter in Jahren (18–80)." },
      retirementAge: { label: "Rentenalter", help: "Das Alter, mit dem Sie in Rente gehen möchten (45–90)." },
      currentSavings: { label: "Aktuelle Ersparnisse", help: "Gesamte bisher angesammelte Altersvorsorge." },
      monthlyContribution: { label: "Monatlicher Beitrag", help: "Betrag, den Sie monatlich in die Altersvorsorge einzahlen möchten." },
      annualReturn: { label: "Jährliche Rendite (%)", help: "Erwartete durchschnittliche jährliche Anlagerendite. Historisch ca. 7 % (inflationsbereinigt) für US-Aktien." },
      withdrawalRate: { label: "Entnahmerate (%)", help: "Jährlicher Prozentsatz Ihres Rentenportfolios, den Sie entnehmen möchten. Die '4-%-Regel' ist ein gängiger Richtwert." },
    },
    outputs: {
      totalAtRetirement: { label: "Kapital bei Rentenbeginn", help: "Voraussichtlicher Gesamtwert Ihres Rentenportfolios zum Rentenbeginn." },
      monthlyIncome: { label: "Monatliches Renteneinkommen", help: "Geschätztes monatliches Einkommen basierend auf Ihrer Entnahmerate." },
      yearsOfIncome: { label: "Einkommensjahre", help: "Wie lange Ihr Portfolio bei der angegebenen Entnahmerate reicht. Der Wert 999 bedeutet, dass das Portfolio theoretisch nie aufgebraucht wird." },
      totalContributions: { label: "Gesamtbeiträge", help: "Anfangsersparnisse plus alle monatlichen Beiträge über den Sparzeitraum." },
      totalInterest: { label: "Gesamter Anlagezuwachs", help: "Differenz zwischen Kapital bei Rentenbeginn und Gesamtbeiträgen — durch Anlagewachstum erwirtschaftet." },
    },
    errors: {
      retirementBeforeCurrent: "Das Rentenalter muss größer als das aktuelle Alter sein.",
      invalidAge: "Das Alter muss zwischen 18 und 80 Jahren liegen.",
    },
    faq: [
      { q: "Was ist die 4-%-Regel?", a: "Die 4-%-Regel (Bengen, 1994) besagt, dass Rentner im ersten Jahr 4 % ihres Portfolios entnehmen und die Entnahme anschließend jährlich der Inflation anpassen können, sodass das Geld mit hoher Wahrscheinlichkeit 30 Jahre reicht." },
      { q: "Welche jährliche Rendite sollte ich ansetzen?", a: "Der US-Aktienmarkt hat historisch etwa 10 % nominal und 7 % real erzielt. Für ein diversifiziertes Portfolio sind 6–7 % eine gängige konservative Schätzung." },
      { q: "Wie wirkt der Zinseszins auf meine Altersvorsorge?", a: "Beim Zinseszins erwirtschaften auch Ihre Erträge Erträge. Je länger das Geld angelegt ist, desto dramatischer ist dieser Effekt. Deshalb macht ein früher Einstieg einen enormen Unterschied." },
      { q: "Soll ich die gesetzliche Rente einbeziehen?", a: "Dieser Rechner berücksichtigt nur private Ersparnisse und Anlagewachstum. Addieren Sie Ihre erwartete gesetzliche Rente zum monatlichen Einkommensergebnis." },
      { q: "Ist der Rechner für alle Länder geeignet?", a: "Der Rechner verwendet ein allgemeines Zinseszinsmodell und ist international anwendbar. Steuerregeln und Altersvorsorgegrenzen variieren jedoch je nach Land." },
    ],
  },

  fr: {
    title: "Calculateur d'épargne retraite",
    short: "Calculez votre capital retraite, votre revenu mensuel et la durée de vos revenus selon vos économies.",
    description:
      "Calculateur d'épargne retraite gratuit. Entrez votre âge, vos économies, vos versements mensuels et le rendement attendu pour projeter votre portefeuille de retraite et votre revenu mensuel estimé.",
    keywords: [
      "calculateur retraite",
      "épargne retraite",
      "planification retraite",
      "portefeuille retraite",
      "intérêts composés retraite",
      "revenu mensuel retraite",
      "calculateur pension",
    ],
    inputs: {
      currentAge: { label: "Âge actuel", help: "Votre âge actuel en années (18–80)." },
      retirementAge: { label: "Âge de retraite", help: "L'âge auquel vous prévoyez de prendre votre retraite (45–90)." },
      currentSavings: { label: "Épargne actuelle", help: "Total de l'épargne retraite que vous avez déjà accumulée." },
      monthlyContribution: { label: "Versement mensuel", help: "Montant que vous prévoyez de verser chaque mois à votre épargne retraite." },
      annualReturn: { label: "Rendement annuel (%)", help: "Rendement annuel moyen attendu. La moyenne historique du marché américain est d'environ 7 % en termes réels." },
      withdrawalRate: { label: "Taux de retrait (%)", help: "Pourcentage annuel de votre portefeuille retraite que vous prévoyez de retirer. La règle des 4 % est un repère courant." },
    },
    outputs: {
      totalAtRetirement: { label: "Capital à la retraite", help: "Valeur totale projetée de votre portefeuille à votre âge de retraite cible." },
      monthlyIncome: { label: "Revenu mensuel à la retraite", help: "Revenu mensuel estimé basé sur votre taux de retrait appliqué au portefeuille total." },
      yearsOfIncome: { label: "Années de revenus", help: "Durée de vie de votre portefeuille retraite au taux de retrait indiqué. La valeur 999 indique que le portefeuille ne s'épuise théoriquement jamais." },
      totalContributions: { label: "Total des versements", help: "Épargne initiale plus tous les versements mensuels sur la période d'épargne." },
      totalInterest: { label: "Croissance totale des investissements", help: "Différence entre le capital à la retraite et les versements totaux — argent gagné grâce à la croissance des investissements." },
    },
    errors: {
      retirementBeforeCurrent: "L'âge de retraite doit être supérieur à l'âge actuel.",
      invalidAge: "L'âge doit être compris entre 18 et 80 ans.",
    },
    faq: [
      { q: "Qu'est-ce que la règle des 4 % ?", a: "La règle des 4 % (Bengen, 1994) stipule que les retraités peuvent retirer 4 % de leur portefeuille la première année puis ajuster à l'inflation chaque année, avec une forte probabilité que l'argent dure 30 ans." },
      { q: "Quel rendement annuel dois-je supposer ?", a: "Le marché américain a historiquement rapporté environ 10 % en nominal et 7 % en réel. Une estimation conservative courante pour un portefeuille diversifié est de 6–7 %." },
      { q: "Comment les intérêts composés affectent-ils mon épargne retraite ?", a: "Les intérêts composés signifient que vos rendements génèrent à leur tour des rendements. Plus votre argent reste investi longtemps, plus l'effet de capitalisation est spectaculaire." },
      { q: "Dois-je inclure la retraite de base ou une pension dans ce calculateur ?", a: "Ce calculateur se concentre uniquement sur l'épargne personnelle. Ajoutez votre retraite estimée au revenu mensuel obtenu pour avoir votre revenu retraite total." },
      { q: "Ce calculateur est-il adapté à tous les pays ?", a: "Il utilise un modèle général d'intérêts composés, applicable partout. Les règles fiscales et plafonds de retraite varient cependant selon les pays." },
    ],
  },

  es: {
    title: "Calculadora de Ahorro para la Jubilación",
    short: "Calcula tu capital de jubilación, ingresos mensuales y años de ingresos según tus ahorros y rendimientos.",
    description:
      "Calculadora gratuita de ahorro para la jubilación. Introduce tu edad, ahorros, contribuciones mensuales y rentabilidad esperada para proyectar tu cartera y estimar tus ingresos mensuales en la jubilación.",
    keywords: [
      "calculadora jubilación",
      "ahorro para la jubilación",
      "planificación jubilación",
      "cartera jubilación",
      "interés compuesto jubilación",
      "ingresos mensuales jubilación",
      "pensión calculadora",
    ],
    inputs: {
      currentAge: { label: "Edad actual", help: "Tu edad actual en años (18–80)." },
      retirementAge: { label: "Edad de jubilación", help: "La edad a la que planeas jubilarte (45–90)." },
      currentSavings: { label: "Ahorros actuales", help: "Total de ahorros para la jubilación acumulados hasta ahora." },
      monthlyContribution: { label: "Contribución mensual", help: "Cantidad que planeas aportar mensualmente a tus ahorros de jubilación." },
      annualReturn: { label: "Rentabilidad anual (%)", help: "Rentabilidad media anual esperada. El mercado estadounidense ha promediado aproximadamente un 7 % ajustado a la inflación." },
      withdrawalRate: { label: "Tasa de retirada (%)", help: "Porcentaje anual de tu cartera de jubilación que planeas retirar. La 'regla del 4 %' es un referente habitual." },
    },
    outputs: {
      totalAtRetirement: { label: "Capital en la Jubilación", help: "Valor total proyectado de tu cartera de jubilación en la edad objetivo." },
      monthlyIncome: { label: "Ingresos Mensuales en la Jubilación", help: "Ingresos mensuales estimados basados en tu tasa de retirada aplicada al total de la cartera." },
      yearsOfIncome: { label: "Años de Ingresos", help: "Cuánto durará tu cartera de jubilación a la tasa de retirada indicada. El valor 999 indica que la cartera nunca se agota teóricamente." },
      totalContributions: { label: "Total de Contribuciones", help: "Ahorros iniciales más todas las contribuciones mensuales durante el período de ahorro." },
      totalInterest: { label: "Crecimiento Total de la Inversión", help: "Diferencia entre el capital en la jubilación y el total de contribuciones — dinero ganado mediante el crecimiento de la inversión." },
    },
    errors: {
      retirementBeforeCurrent: "La edad de jubilación debe ser mayor que la edad actual.",
      invalidAge: "La edad debe estar entre 18 y 80 años.",
    },
    faq: [
      { q: "¿Qué es la regla del 4 %?", a: "La regla del 4 % (Bengen, 1994) establece que los jubilados pueden retirar el 4 % de su cartera el primer año y ajustar por inflación anualmente, con alta probabilidad de que el dinero dure 30 años." },
      { q: "¿Qué rentabilidad anual debo asumir?", a: "El mercado estadounidense ha rendido históricamente alrededor del 10 % nominal y 7 % real. Una estimación conservadora habitual para una cartera diversificada es del 6–7 %." },
      { q: "¿Cómo afecta el interés compuesto a mis ahorros de jubilación?", a: "El interés compuesto significa que tus rendimientos generan más rendimientos. Cuanto más tiempo esté invertido tu dinero, más notable es el efecto de capitalización." },
      { q: "¿Debo incluir la pensión pública en esta calculadora?", a: "Esta calculadora se centra solo en ahorros personales. Añade tu pensión pública estimada al resultado de ingresos mensuales para obtener tu ingreso total proyectado." },
      { q: "¿Es esta calculadora adecuada para todos los países?", a: "Usa un modelo genérico de interés compuesto aplicable internacionalmente. Las normas fiscales y límites de jubilación varían según el país." },
    ],
  },

  it: {
    title: "Calcolatore del Risparmio Pensionistico",
    short: "Calcola il tuo capitale pensionistico, il reddito mensile e gli anni di reddito in base ai tuoi risparmi.",
    description:
      "Calcolatore gratuito del risparmio pensionistico. Inserisci età, risparmi, contributi mensili e rendimento atteso per proiettare il tuo portafoglio pensionistico e il reddito mensile stimato.",
    keywords: [
      "calcolatore pensione",
      "risparmio pensionistico",
      "pianificazione pensione",
      "portafoglio pensione",
      "interesse composto pensione",
      "reddito mensile pensione",
      "previdenza complementare",
    ],
    inputs: {
      currentAge: { label: "Età attuale", help: "La tua età attuale in anni (18–80)." },
      retirementAge: { label: "Età pensionabile", help: "L'età alla quale prevedi di andare in pensione (45–90)." },
      currentSavings: { label: "Risparmi attuali", help: "Totale dei risparmi pensionistici accumulati finora." },
      monthlyContribution: { label: "Contributo mensile", help: "Importo che prevedi di versare ogni mese ai tuoi risparmi pensionistici." },
      annualReturn: { label: "Rendimento annuo (%)", help: "Rendimento annuo medio atteso. La media storica del mercato USA è circa il 7% reale." },
      withdrawalRate: { label: "Tasso di prelievo (%)", help: "Percentuale annua del tuo portafoglio pensionistico che prevedi di prelevare. La 'regola del 4%' è un punto di riferimento comune." },
    },
    outputs: {
      totalAtRetirement: { label: "Capitale alla Pensione", help: "Valore totale proiettato del tuo portafoglio all'età pensionabile obiettivo." },
      monthlyIncome: { label: "Reddito Mensile Pensionistico", help: "Reddito mensile stimato in base al tasso di prelievo applicato al totale del portafoglio." },
      yearsOfIncome: { label: "Anni di Reddito", help: "Per quanto tempo durerà il tuo portafoglio al tasso di prelievo indicato. Il valore 999 indica che il portafoglio non si esaurisce teoricamente mai." },
      totalContributions: { label: "Contributi Totali", help: "Risparmi iniziali più tutti i contributi mensili nel periodo di risparmio." },
      totalInterest: { label: "Crescita Totale degli Investimenti", help: "Differenza tra il capitale alla pensione e i contributi totali — denaro guadagnato grazie alla crescita degli investimenti." },
    },
    errors: {
      retirementBeforeCurrent: "L'età pensionabile deve essere maggiore dell'età attuale.",
      invalidAge: "L'età deve essere compresa tra 18 e 80 anni.",
    },
    faq: [
      { q: "Cos'è la regola del 4%?", a: "La regola del 4% (Bengen, 1994) afferma che i pensionati possono prelevare il 4% del portafoglio nel primo anno e adeguare all'inflazione ogni anno, con alta probabilità che il denaro duri 30 anni." },
      { q: "Quale rendimento annuo devo assumere?", a: "Il mercato USA ha reso storicamente circa il 10% nominale e il 7% reale. Una stima conservativa comune per un portafoglio diversificato è il 6–7%." },
      { q: "Come influisce l'interesse composto sui miei risparmi pensionistici?", a: "L'interesse composto fa sì che i tuoi rendimenti generino ulteriori rendimenti. Più a lungo il denaro è investito, più è marcato l'effetto di capitalizzazione." },
      { q: "Devo includere la pensione pubblica in questo calcolatore?", a: "Questo calcolatore considera solo i risparmi personali. Aggiungi la tua pensione pubblica stimata al risultato del reddito mensile per ottenere il reddito totale proiettato." },
      { q: "Questo calcolatore è adatto a tutti i paesi?", a: "Usa un modello generico di interesse composto applicabile a livello internazionale. Le norme fiscali e i limiti previdenziali variano da paese a paese." },
    ],
  },

  ar: {
    title: "حاسبة مدخرات التقاعد",
    short: "احسب رأس مال تقاعدك ودخلك الشهري وسنوات الدخل بناءً على مدخراتك وعوائد الاستثمار.",
    description:
      "حاسبة مجانية لمدخرات التقاعد. أدخل عمرك ومدخراتك ومساهماتك الشهرية والعائد المتوقع للتنبؤ بمحفظتك التقاعدية ودخلك الشهري المقدّر.",
    keywords: [
      "حاسبة التقاعد",
      "مدخرات التقاعد",
      "تخطيط التقاعد",
      "محفظة التقاعد",
      "الفائدة المركبة للتقاعد",
      "الدخل الشهري للتقاعد",
      "معاش التقاعد",
    ],
    inputs: {
      currentAge: { label: "العمر الحالي", help: "عمرك الحالي بالسنوات (18–80)." },
      retirementAge: { label: "سن التقاعد", help: "السن الذي تخطط للتقاعد فيه (45–90)." },
      currentSavings: { label: "المدخرات الحالية", help: "إجمالي مدخرات التقاعد المتراكمة حتى الآن." },
      monthlyContribution: { label: "المساهمة الشهرية", help: "المبلغ الذي تخطط لإضافته شهريًا إلى مدخرات التقاعد." },
      annualReturn: { label: "العائد السنوي (%)", help: "متوسط العائد السنوي المتوقع على الاستثمار. بلغ متوسط سوق الأسهم الأمريكي تاريخيًا نحو 7% بعد التعديل للتضخم." },
      withdrawalRate: { label: "معدل السحب (%)", help: "النسبة المئوية السنوية التي تخطط لسحبها من محفظتك التقاعدية. تُعدّ 'قاعدة الـ4%' مرجعًا شائعًا." },
    },
    outputs: {
      totalAtRetirement: { label: "إجمالي رأس المال عند التقاعد", help: "القيمة الإجمالية المتوقعة لمحفظتك التقاعدية عند سن التقاعد المستهدف." },
      monthlyIncome: { label: "الدخل الشهري للتقاعد", help: "الدخل الشهري المقدّر بناءً على معدل السحب المطبّق على إجمالي المحفظة." },
      yearsOfIncome: { label: "سنوات الدخل", help: "المدة التي ستستمر فيها محفظتك التقاعدية بمعدل السحب المحدد. القيمة 999 تعني أن المحفظة لا تنفد نظريًا." },
      totalContributions: { label: "إجمالي المساهمات", help: "المدخرات الأولية مضافًا إليها جميع المساهمات الشهرية خلال فترة الادخار." },
      totalInterest: { label: "إجمالي نمو الاستثمار", help: "الفرق بين إجمالي رأس المال عند التقاعد وإجمالي المساهمات — المال المكتسب عبر نمو الاستثمار." },
    },
    errors: {
      retirementBeforeCurrent: "يجب أن يكون سن التقاعد أكبر من العمر الحالي.",
      invalidAge: "يجب أن يكون العمر بين 18 و80 سنة.",
    },
    faq: [
      { q: "ما قاعدة الـ4%؟", a: "تنص قاعدة الـ4% (بنغن، 1994) على أن المتقاعدين يمكنهم سحب 4% من محفظتهم في السنة الأولى ثم ضبطها وفق التضخم سنويًا، مع احتمال مرتفع أن يستمر المال 30 عامًا." },
      { q: "ما العائد السنوي الذي ينبغي لي افتراضه؟", a: "حقق سوق الأسهم الأمريكي تاريخيًا ما يقارب 10% اسميًا و7% حقيقيًا. التقدير المحافظ الشائع لمحفظة متنوعة هو 6–7%." },
      { q: "كيف تؤثر الفائدة المركبة على مدخرات التقاعد؟", a: "الفائدة المركبة تعني أن عوائدك تولّد عوائد بدورها. كلما بقي المال مستثمرًا أطول، كان تأثير التركيب أكثر وضوحًا." },
      { q: "هل يجب أن أدرج معاشي الحكومي في هذه الحاسبة؟", a: "تركز هذه الحاسبة على المدخرات الشخصية فحسب. أضف معاشك الحكومي المقدّر إلى ناتج الدخل الشهري للحصول على إجمالي الدخل التقاعدي المتوقع." },
      { q: "هل هذه الحاسبة مناسبة لجميع الدول؟", a: "تستخدم الحاسبة نموذجًا عامًا للفائدة المركبة وهي قابلة للتطبيق دوليًا. تتفاوت القواعد الضريبية وحدود حسابات التقاعد من دولة لأخرى." },
    ],
  },

  ru: {
    title: "Калькулятор пенсионных накоплений",
    short: "Рассчитайте пенсионный капитал, ежемесячный доход и срок его выплаты с учётом накоплений и доходности.",
    description:
      "Бесплатный калькулятор пенсионных накоплений. Введите возраст, сбережения, ежемесячные взносы и ожидаемую доходность, чтобы спрогнозировать пенсионный портфель и ежемесячный доход.",
    keywords: [
      "пенсионный калькулятор",
      "накопительная пенсия",
      "пенсионное планирование",
      "пенсионный портфель",
      "сложные проценты пенсия",
      "ежемесячный пенсионный доход",
      "калькулятор пенсии",
    ],
    inputs: {
      currentAge: { label: "Текущий возраст", help: "Ваш текущий возраст в годах (18–80)." },
      retirementAge: { label: "Пенсионный возраст", help: "Возраст, в котором вы планируете выйти на пенсию (45–90)." },
      currentSavings: { label: "Текущие сбережения", help: "Общий объём уже накопленных пенсионных сбережений." },
      monthlyContribution: { label: "Ежемесячный взнос", help: "Сумма, которую вы планируете ежемесячно вкладывать в пенсионные накопления." },
      annualReturn: { label: "Годовая доходность (%)", help: "Ожидаемая средняя годовая доходность инвестиций. Исторически американский рынок акций давал около 7% реальной доходности." },
      withdrawalRate: { label: "Ставка изъятия (%)", help: "Процент, который вы планируете ежегодно изымать из пенсионного портфеля. Правило 4% — распространённый ориентир." },
    },
    outputs: {
      totalAtRetirement: { label: "Капитал на пенсии", help: "Прогнозируемая общая стоимость пенсионного портфеля к целевому возрасту выхода на пенсию." },
      monthlyIncome: { label: "Ежемесячный пенсионный доход", help: "Расчётный ежемесячный доход исходя из ставки изъятия, применённой к совокупному портфелю." },
      yearsOfIncome: { label: "Лет дохода", help: "Срок, в течение которого пенсионный портфель покроет изъятия. Значение 999 означает, что портфель теоретически никогда не иссякнет." },
      totalContributions: { label: "Суммарные взносы", help: "Начальные сбережения плюс все ежемесячные взносы за период накопления." },
      totalInterest: { label: "Суммарный инвестиционный рост", help: "Разница между капиталом на пенсии и суммарными взносами — деньги, заработанные благодаря росту инвестиций." },
    },
    errors: {
      retirementBeforeCurrent: "Пенсионный возраст должен быть больше текущего возраста.",
      invalidAge: "Возраст должен быть от 18 до 80 лет.",
    },
    faq: [
      { q: "Что такое правило 4%?", a: "Правило 4% (Бенген, 1994) гласит, что пенсионеры могут изымать 4% портфеля в первый год, а затем ежегодно индексировать изъятие на инфляцию — при этом денег с высокой вероятностью хватит на 30 лет." },
      { q: "Какую годовую доходность принять?", a: "Американский рынок акций исторически давал около 10% номинально и 7% реально. Общепринятая консервативная оценка для диверсифицированного портфеля — 6–7%." },
      { q: "Как сложные проценты влияют на пенсионные накопления?", a: "Сложные проценты означают, что ваши доходы тоже начинают приносить доход. Чем дольше деньги инвестированы, тем сильнее этот эффект. Поэтому раннее начало накоплений имеет огромное значение." },
      { q: "Нужно ли включать пенсию от государства?", a: "Этот калькулятор учитывает только личные сбережения. Прибавьте ожидаемую государственную пенсию к результату ежемесячного дохода." },
      { q: "Подходит ли калькулятор для всех стран?", a: "Он использует общую модель сложных процентов, применимую во всём мире. Налоговые правила и лимиты пенсионных счетов варьируются в зависимости от страны." },
    ],
  },

  zh: {
    title: "退休储蓄计算器",
    short: "根据您的储蓄和投资回报，计算退休时的总资产、每月收入和收入年限。",
    description:
      "免费退休储蓄计算器。输入您的年龄、储蓄、每月供款和预期回报，预测您的退休投资组合和估计每月收入。",
    keywords: [
      "退休计算器",
      "退休储蓄",
      "退休规划",
      "退休投资组合",
      "复利退休",
      "每月退休收入",
      "养老金计算器",
    ],
    inputs: {
      currentAge: { label: "当前年龄", help: "您当前的年龄（18–80岁）。" },
      retirementAge: { label: "退休年龄", help: "您计划退休的年龄（45–90岁）。" },
      currentSavings: { label: "当前储蓄", help: "目前已积累的退休储蓄总额。" },
      monthlyContribution: { label: "每月供款", help: "您计划每月存入退休账户的金额。" },
      annualReturn: { label: "年回报率（%）", help: "预期平均年投资回报率。美国股市历史通胀调整后年均回报约为7%。" },
      withdrawalRate: { label: "提款率（%）", help: "您计划每年从退休投资组合中提取的百分比。'4%规则'是常见参考标准。" },
    },
    outputs: {
      totalAtRetirement: { label: "退休时总资产", help: "在目标退休年龄时，退休投资组合的预计总价值。" },
      monthlyIncome: { label: "每月退休收入", help: "根据提款率应用于总投资组合估算的每月收入。" },
      yearsOfIncome: { label: "收入年限", help: "按指定提款率，您的退休投资组合能持续多久。999表示投资组合理论上永不耗尽。" },
      totalContributions: { label: "总供款额", help: "初始储蓄加上储蓄期间所有每月供款的总和。" },
      totalInterest: { label: "总投资增长", help: "退休总资产与总供款额之差——通过投资增长赚取的资金。" },
    },
    errors: {
      retirementBeforeCurrent: "退休年龄必须大于当前年龄。",
      invalidAge: "年龄必须在18至80岁之间。",
    },
    faq: [
      { q: "什么是4%规则？", a: "4%规则（Bengen，1994年）指出，退休人员在第一年可提取投资组合的4%，此后每年按通胀调整，资金有很高概率持续30年。这是经验法则而非保证。" },
      { q: "应该假设什么年回报率？", a: "美国股市历史上名义回报约10%，实际约7%。多元化投资组合的常用保守估计是6–7%。" },
      { q: "复利如何影响我的退休储蓄？", a: "复利意味着您的回报也会产生回报。资金投资时间越长，复利效应越显著。这就是为什么早开始意义重大——生命早期多存几年可使最终资产翻倍甚至三倍。" },
      { q: "我应该在此计算器中包含社会保险或养老金吗？", a: "本计算器仅关注个人储蓄和投资增长。将您预计的社保或养老金收益加到每月收入结果上，即可得到总退休收入预测。" },
      { q: "此计算器适用于所有国家吗？", a: "该计算器使用通用复利模型，适用于国际场景。但各国税收规则和退休账户限额各不相同，请咨询当地财务顾问。" },
    ],
  },

  ja: {
    title: "老後資産計算機",
    short: "貯蓄と運用利回りに基づいて、退職時の資産総額・月収・収入期間を計算します。",
    description:
      "無料の老後資産計算機。年齢・貯蓄額・毎月の積立額・期待利回りを入力するだけで、退職時のポートフォリオと月々の推定収入を試算できます。",
    keywords: [
      "老後資産計算機",
      "退職貯蓄",
      "老後計画",
      "退職ポートフォリオ",
      "複利 老後",
      "月々の退職収入",
      "年金計算機",
    ],
    inputs: {
      currentAge: { label: "現在の年齢", help: "現在の年齢（18〜80歳）。" },
      retirementAge: { label: "退職年齢", help: "退職を予定している年齢（45〜90歳）。" },
      currentSavings: { label: "現在の貯蓄額", help: "これまでに積み立てた退職用貯蓄の合計額。" },
      monthlyContribution: { label: "毎月の積立額", help: "毎月の退職貯蓄への積立予定額。" },
      annualReturn: { label: "年間利回り（%）", help: "期待される平均年間投資利回り。米国株式市場はインフレ調整後で約7%の実績があります。" },
      withdrawalRate: { label: "取崩し率（%）", help: "退職ポートフォリオから毎年引き出す割合。「4%ルール」がよく使われるベンチマークです。" },
    },
    outputs: {
      totalAtRetirement: { label: "退職時の資産総額", help: "目標退職年齢における退職ポートフォリオの推定総額。" },
      monthlyIncome: { label: "月々の退職収入", help: "総ポートフォリオに取崩し率を適用して算出した推定月収。" },
      yearsOfIncome: { label: "収入継続年数", help: "指定した取崩し率で退職ポートフォリオが続く年数。999は理論上永続することを意味します。" },
      totalContributions: { label: "積立総額", help: "初期貯蓄額と積立期間中のすべての月次積立額の合計。" },
      totalInterest: { label: "投資成長の総額", help: "退職時資産総額から積立総額を引いた差額——投資成長によって得られたお金。" },
    },
    errors: {
      retirementBeforeCurrent: "退職年齢は現在の年齢より大きくなければなりません。",
      invalidAge: "年齢は18〜80歳の範囲で入力してください。",
    },
    faq: [
      { q: "4%ルールとは何ですか？", a: "4%ルール（ベンゲン、1994年）は、退職者が初年度に資産の4%を取り崩し、以降は毎年インフレに合わせて調整すれば、30年間資金が持続する可能性が高いとするものです。" },
      { q: "年間利回りはいくら想定すればよいですか？", a: "米国株式市場は歴史的に名目約10%、実質約7%のリターンを記録しています。分散ポートフォリオの保守的な一般的見積もりは6〜7%です。" },
      { q: "複利は老後資産にどう影響しますか？", a: "複利とは、収益がさらに収益を生む仕組みです。長く投資するほどこの効果は劇的になります。だからこそ早期開始が大きな差を生みます。" },
      { q: "公的年金は含めるべきですか？", a: "この計算機は個人の貯蓄・投資成長のみを対象としています。公的年金の見込み額を月収の結果に加えて、退職後の収入合計を把握してください。" },
      { q: "すべての国で使えますか？", a: "汎用的な複利モデルを採用しており、国際的に適用可能です。ただし税制や退職口座の上限は国によって異なります。現地の財務アドバイザーにご相談ください。" },
    ],
  },

  ko: {
    title: "은퇴 저축 계산기",
    short: "저축과 투자 수익에 따른 은퇴 시 총 자산, 월 수입, 수입 지속 기간을 계산하세요.",
    description:
      "무료 은퇴 저축 계산기. 나이, 저축액, 월 납입액, 기대 수익률을 입력해 은퇴 포트폴리오와 예상 월 소득을 예측하세요.",
    keywords: [
      "은퇴 계산기",
      "은퇴 저축",
      "은퇴 계획",
      "은퇴 포트폴리오",
      "복리 은퇴",
      "월 은퇴 소득",
      "연금 계산기",
    ],
    inputs: {
      currentAge: { label: "현재 나이", help: "현재 나이(18~80세)." },
      retirementAge: { label: "은퇴 나이", help: "은퇴를 계획하는 나이(45~90세)." },
      currentSavings: { label: "현재 저축액", help: "지금까지 쌓아온 은퇴 저축 총액." },
      monthlyContribution: { label: "월 납입액", help: "매월 은퇴 저축에 납입할 계획 금액." },
      annualReturn: { label: "연 수익률(%)", help: "예상 평균 연간 투자 수익률. 미국 주식 시장의 인플레이션 조정 역사적 평균은 약 7%입니다." },
      withdrawalRate: { label: "인출률(%)", help: "은퇴 포트폴리오에서 매년 인출할 계획인 비율. '4% 규칙'이 일반적인 기준입니다." },
    },
    outputs: {
      totalAtRetirement: { label: "은퇴 시 총 자산", help: "목표 은퇴 나이에서 은퇴 포트폴리오의 예상 총 가치." },
      monthlyIncome: { label: "월 은퇴 소득", help: "인출률을 총 포트폴리오에 적용해 산출한 예상 월 소득." },
      yearsOfIncome: { label: "소득 지속 기간(년)", help: "지정된 인출률로 은퇴 포트폴리오가 지속되는 기간. 999는 이론상 고갈되지 않음을 의미합니다." },
      totalContributions: { label: "총 납입액", help: "초기 저축액과 저축 기간 동안의 모든 월 납입액의 합계." },
      totalInterest: { label: "총 투자 수익", help: "은퇴 총 자산에서 총 납입액을 뺀 값——투자 성장으로 얻은 돈." },
    },
    errors: {
      retirementBeforeCurrent: "은퇴 나이는 현재 나이보다 커야 합니다.",
      invalidAge: "나이는 18세에서 80세 사이여야 합니다.",
    },
    faq: [
      { q: "4% 규칙이란 무엇인가요?", a: "4% 규칙(Bengen, 1994)은 은퇴자가 첫 해에 포트폴리오의 4%를 인출하고 이후 매년 인플레이션에 맞게 조정하면 돈이 30년간 지속될 가능성이 높다는 원칙입니다." },
      { q: "연 수익률을 얼마로 가정해야 하나요?", a: "미국 주식 시장은 역사적으로 명목 약 10%, 실질 약 7%의 수익률을 기록했습니다. 분산 포트폴리오의 보수적인 일반 추정값은 6~7%입니다." },
      { q: "복리는 은퇴 저축에 어떤 영향을 미치나요?", a: "복리는 수익이 다시 수익을 창출하는 구조입니다. 돈이 오래 투자될수록 이 효과는 극적으로 커집니다. 일찍 시작하는 것이 큰 차이를 만드는 이유입니다." },
      { q: "국민연금이나 퇴직연금을 포함해야 하나요?", a: "이 계산기는 개인 저축과 투자 성장만 다룹니다. 예상 국민연금 수령액을 월 소득 결과에 더해 총 은퇴 소득을 파악하세요." },
      { q: "모든 나라에서 사용할 수 있나요?", a: "일반적인 복리 모델을 사용하여 국제적으로 적용 가능합니다. 다만 세금 규정과 은퇴 계좌 한도는 국가마다 다릅니다." },
    ],
  },

  hi: {
    title: "रिटायरमेंट बचत कैलकुलेटर",
    short: "अपनी बचत और निवेश रिटर्न के आधार पर रिटायरमेंट पर कुल संपत्ति, मासिक आय और आय अवधि की गणना करें।",
    description:
      "निःशुल्क रिटायरमेंट बचत कैलकुलेटर। अपनी आयु, बचत, मासिक योगदान और अपेक्षित रिटर्न दर्ज करें और अपने रिटायरमेंट पोर्टफोलियो और अनुमानित मासिक आय का पूर्वानुमान लगाएं।",
    keywords: [
      "रिटायरमेंट कैलकुलेटर",
      "रिटायरमेंट बचत",
      "रिटायरमेंट योजना",
      "रिटायरमेंट पोर्टफोलियो",
      "चक्रवृद्धि ब्याज रिटायरमेंट",
      "मासिक रिटायरमेंट आय",
      "पेंशन कैलकुलेटर",
    ],
    inputs: {
      currentAge: { label: "वर्तमान आयु", help: "आपकी वर्तमान आयु वर्षों में (18–80)।" },
      retirementAge: { label: "सेवानिवृत्ति आयु", help: "जिस आयु पर आप रिटायर होने की योजना बना रहे हैं (45–90)।" },
      currentSavings: { label: "वर्तमान बचत", help: "अब तक जमा की गई कुल रिटायरमेंट बचत।" },
      monthlyContribution: { label: "मासिक योगदान", help: "हर महीने रिटायरमेंट बचत में जोड़ने की योजना बनाई गई राशि।" },
      annualReturn: { label: "वार्षिक रिटर्न (%)", help: "अपेक्षित औसत वार्षिक निवेश रिटर्न। अमेरिकी शेयर बाजार का मुद्रास्फीति-समायोजित ऐतिहासिक औसत लगभग 7% है।" },
      withdrawalRate: { label: "निकासी दर (%)", help: "आपके रिटायरमेंट पोर्टफोलियो से प्रति वर्ष निकालने की योजना बनाई गई प्रतिशत। '4% नियम' एक सामान्य मानक है।" },
    },
    outputs: {
      totalAtRetirement: { label: "रिटायरमेंट पर कुल संपत्ति", help: "लक्षित सेवानिवृत्ति आयु पर आपके रिटायरमेंट पोर्टफोलियो का अनुमानित कुल मूल्य।" },
      monthlyIncome: { label: "मासिक रिटायरमेंट आय", help: "कुल पोर्टफोलियो पर निकासी दर लागू करके अनुमानित मासिक आय।" },
      yearsOfIncome: { label: "आय के वर्ष", help: "निर्दिष्ट निकासी दर पर आपका रिटायरमेंट पोर्टफोलियो कितने समय तक चलेगा। 999 का मान इंगित करता है कि पोर्टफोलियो सैद्धांतिक रूप से कभी समाप्त नहीं होता।" },
      totalContributions: { label: "कुल योगदान", help: "प्रारंभिक बचत और बचत अवधि के दौरान सभी मासिक योगदान का योग।" },
      totalInterest: { label: "कुल निवेश वृद्धि", help: "रिटायरमेंट पर कुल और आपके कुल योगदान के बीच का अंतर — निवेश वृद्धि के माध्यम से अर्जित धन।" },
    },
    errors: {
      retirementBeforeCurrent: "सेवानिवृत्ति आयु वर्तमान आयु से अधिक होनी चाहिए।",
      invalidAge: "आयु 18 से 80 वर्ष के बीच होनी चाहिए।",
    },
    faq: [
      { q: "4% नियम क्या है?", a: "4% नियम (बेंगेन, 1994) कहता है कि सेवानिवृत्त लोग पहले वर्ष अपने पोर्टफोलियो का 4% निकाल सकते हैं, फिर हर साल मुद्रास्फीति के लिए समायोजित कर सकते हैं, और पैसे के 30 साल चलने की संभावना अधिक है।" },
      { q: "मुझे किस वार्षिक रिटर्न को मानना चाहिए?", a: "अमेरिकी शेयर बाजार ने ऐतिहासिक रूप से नाममात्र लगभग 10% और वास्तविक रूप से 7% रिटर्न दिया है। एक विविध पोर्टफोलियो के लिए आमतौर पर उपयोग किया जाने वाला रूढ़िवादी अनुमान 6–7% है।" },
      { q: "चक्रवृद्धि ब्याज मेरी रिटायरमेंट बचत को कैसे प्रभावित करता है?", a: "चक्रवृद्धि ब्याज का मतलब है कि आपके रिटर्न भी रिटर्न कमाते हैं। आपका पैसा जितना लंबे समय तक निवेशित रहता है, चक्रवृद्धि प्रभाव उतना ही नाटकीय होता है।" },
      { q: "क्या मुझे सामाजिक सुरक्षा या पेंशन को इस कैलकुलेटर में शामिल करना चाहिए?", a: "यह कैलकुलेटर केवल व्यक्तिगत बचत और निवेश वृद्धि पर केंद्रित है। मासिक आय आउटपुट में अपनी अनुमानित सामाजिक सुरक्षा या पेंशन लाभ जोड़ें।" },
      { q: "क्या यह कैलकुलेटर सभी देशों के लिए उपयुक्त है?", a: "कैलकुलेटर एक सामान्य चक्रवृद्धि ब्याज मॉडल का उपयोग करता है और अंतरराष्ट्रीय स्तर पर लागू है। हालांकि, विशिष्ट कर नियम और सेवानिवृत्ति खाता सीमाएं देश के अनुसार अलग-अलग होती हैं।" },
    ],
  },
};

export default i18n;
