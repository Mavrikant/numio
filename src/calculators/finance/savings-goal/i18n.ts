import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Savings Goal Calculator",
    short: "Find out how many months it takes to reach your savings target.",
    description:
      "Free savings goal calculator. Enter your target amount, current savings, monthly contribution, and expected annual return to see exactly when you will reach your goal.",
    keywords: [
      "savings goal calculator",
      "how long to save",
      "monthly savings",
      "compound interest savings",
      "savings planner",
      "reach savings goal",
      "savings timeline",
    ],
    inputs: {
      targetAmount: {
        label: "Target Amount",
        help: "The total amount you want to save.",
      },
      currentSavings: {
        label: "Current Savings",
        help: "How much you have already saved toward this goal.",
      },
      monthlyContribution: {
        label: "Monthly Contribution",
        help: "The fixed amount you will add each month.",
      },
      annualReturn: {
        label: "Annual Return (%)",
        help: "Expected annual interest or investment return rate. Default is 5%.",
      },
    },
    outputs: {
      monthsToGoal: {
        label: "Months to Goal",
        help: "How many months until you reach your savings target.",
      },
      yearsToGoal: {
        label: "Years to Goal",
        help: "The same period expressed in years.",
      },
      totalContributions: {
        label: "Total Contributions",
        help: "Sum of your initial savings plus all monthly deposits.",
      },
      totalInterest: {
        label: "Interest Earned",
        help: "Growth from compound interest on top of your contributions.",
      },
    },
    errors: {
      targetTooLow: "Target amount must be greater than zero.",
      contributionTooLow: "Monthly contribution must be greater than zero.",
      goalNotReachable:
        "With these inputs, the goal cannot be reached within 100 years.",
    },
    faq: [
      {
        q: "What annual return should I use?",
        a: "A high-yield savings account might offer 4–5% APY. A diversified stock index fund has historically returned around 7–10% annually before inflation. Use a conservative estimate (4–6%) for short-term goals and a moderate estimate (6–8%) for long-term investing.",
      },
      {
        q: "Does the calculator account for inflation?",
        a: "No. Enter a 'real' return rate (nominal rate minus expected inflation, roughly 2–3%) to get inflation-adjusted results.",
      },
      {
        q: "What if I cannot contribute the same amount every month?",
        a: "Use your average monthly contribution as the input. You can re-run the calculator whenever your contribution amount changes.",
      },
    ],
  },
  pt: {
    title: "Savings Goal Calculator",
    short: "Find out how many months it takes to reach your savings target.",
    description:
      "Free savings goal calculator. Enter your target amount, current savings, monthly contribution, and expected annual return to see exactly when you will reach your goal.",
    keywords: [
      "savings goal calculator",
      "how long to save",
      "monthly savings",
      "compound interest savings",
      "savings planner",
      "reach savings goal",
      "savings timeline",
    ],
    inputs: {
      targetAmount: {
        label: "Target Amount",
        help: "The total amount you want to save.",
      },
      currentSavings: {
        label: "Current Savings",
        help: "How much you have already saved toward this goal.",
      },
      monthlyContribution: {
        label: "Monthly Contribution",
        help: "The fixed amount you will add each month.",
      },
      annualReturn: {
        label: "Annual Return (%)",
        help: "Expected annual interest or investment return rate. Default is 5%.",
      },
    },
    outputs: {
      monthsToGoal: {
        label: "Months to Goal",
        help: "How many months until you reach your savings target.",
      },
      yearsToGoal: {
        label: "Years to Goal",
        help: "The same period expressed in years.",
      },
      totalContributions: {
        label: "Total Contributions",
        help: "Sum of your initial savings plus all monthly deposits.",
      },
      totalInterest: {
        label: "Interest Earned",
        help: "Growth from compound interest on top of your contributions.",
      },
    },
    errors: {
      targetTooLow: "Target amount must be greater than zero.",
      contributionTooLow: "Monthly contribution must be greater than zero.",
      goalNotReachable:
        "With these inputs, the goal cannot be reached within 100 years.",
    },
    faq: [
      {
        q: "What annual return should I use?",
        a: "A high-yield savings account might offer 4–5% APY. A diversified stock index fund has historically returned around 7–10% annually before inflation. Use a conservative estimate (4–6%) for short-term goals and a moderate estimate (6–8%) for long-term investing.",
      },
      {
        q: "Does the calculator account for inflation?",
        a: "No. Enter a 'real' return rate (nominal rate minus expected inflation, roughly 2–3%) to get inflation-adjusted results.",
      },
      {
        q: "What if I cannot contribute the same amount every month?",
        a: "Use your average monthly contribution as the input. You can re-run the calculator whenever your contribution amount changes.",
      },
    ],
  },
  id: {
    title: "Savings Goal Calculator",
    short: "Find out how many months it takes to reach your savings target.",
    description:
      "Free savings goal calculator. Enter your target amount, current savings, monthly contribution, and expected annual return to see exactly when you will reach your goal.",
    keywords: [
      "savings goal calculator",
      "how long to save",
      "monthly savings",
      "compound interest savings",
      "savings planner",
      "reach savings goal",
      "savings timeline",
    ],
    inputs: {
      targetAmount: {
        label: "Target Amount",
        help: "The total amount you want to save.",
      },
      currentSavings: {
        label: "Current Savings",
        help: "How much you have already saved toward this goal.",
      },
      monthlyContribution: {
        label: "Monthly Contribution",
        help: "The fixed amount you will add each month.",
      },
      annualReturn: {
        label: "Annual Return (%)",
        help: "Expected annual interest or investment return rate. Default is 5%.",
      },
    },
    outputs: {
      monthsToGoal: {
        label: "Months to Goal",
        help: "How many months until you reach your savings target.",
      },
      yearsToGoal: {
        label: "Years to Goal",
        help: "The same period expressed in years.",
      },
      totalContributions: {
        label: "Total Contributions",
        help: "Sum of your initial savings plus all monthly deposits.",
      },
      totalInterest: {
        label: "Interest Earned",
        help: "Growth from compound interest on top of your contributions.",
      },
    },
    errors: {
      targetTooLow: "Target amount must be greater than zero.",
      contributionTooLow: "Monthly contribution must be greater than zero.",
      goalNotReachable:
        "With these inputs, the goal cannot be reached within 100 years.",
    },
    faq: [
      {
        q: "What annual return should I use?",
        a: "A high-yield savings account might offer 4–5% APY. A diversified stock index fund has historically returned around 7–10% annually before inflation. Use a conservative estimate (4–6%) for short-term goals and a moderate estimate (6–8%) for long-term investing.",
      },
      {
        q: "Does the calculator account for inflation?",
        a: "No. Enter a 'real' return rate (nominal rate minus expected inflation, roughly 2–3%) to get inflation-adjusted results.",
      },
      {
        q: "What if I cannot contribute the same amount every month?",
        a: "Use your average monthly contribution as the input. You can re-run the calculator whenever your contribution amount changes.",
      },
    ],
  },


  tr: {
    title: "Tasarruf Hedefi Hesaplayıcı",
    short: "Birikim hedefinize kaç ayda ulaşacağınızı öğrenin.",
    description:
      "Ücretsiz tasarruf hedefi hesaplayıcı. Hedef tutarınızı, mevcut birikimlerinizi, aylık katkı miktarınızı ve beklenen yıllık getiriyi girerek hedefinize ne zaman ulaşacağınızı görün.",
    keywords: [
      "tasarruf hedefi hesaplayıcı",
      "ne kadar sürer",
      "aylık birikim",
      "bileşik faiz",
      "tasarruf planı",
      "birikim süresi",
      "tasarruf hesaplama",
    ],
    inputs: {
      targetAmount: {
        label: "Hedef Tutar",
        help: "Biriktirmek istediğiniz toplam tutar.",
      },
      currentSavings: {
        label: "Mevcut Birikim",
        help: "Bu hedef için halihazırda biriktirdiğiniz tutar.",
      },
      monthlyContribution: {
        label: "Aylık Katkı",
        help: "Her ay ekleyeceğiniz sabit tutar.",
      },
      annualReturn: {
        label: "Yıllık Getiri (%)",
        help: "Beklenen yıllık faiz veya yatırım getirisi. Varsayılan değer %5.",
      },
    },
    outputs: {
      monthsToGoal: {
        label: "Hedefe Ay Sayısı",
        help: "Tasarruf hedefinize ulaşana kadar geçecek ay sayısı.",
      },
      yearsToGoal: {
        label: "Hedefe Yıl Sayısı",
        help: "Aynı süre yıl cinsinden.",
      },
      totalContributions: {
        label: "Toplam Katkı",
        help: "Başlangıç birikimi artı tüm aylık yatırımların toplamı.",
      },
      totalInterest: {
        label: "Kazanılan Faiz",
        help: "Katkılarınızın üzerine bileşik faizden elde edilen büyüme.",
      },
    },
    errors: {
      targetTooLow: "Hedef tutar sıfırdan büyük olmalıdır.",
      contributionTooLow: "Aylık katkı sıfırdan büyük olmalıdır.",
      goalNotReachable:
        "Bu girdilerle hedefe 100 yıl içinde ulaşmak mümkün değil.",
    },
    faq: [
      {
        q: "Hangi yıllık getiri oranını kullanmalıyım?",
        a: "Yüksek getirili mevduat hesapları %4–5 civarında faiz sunabilir. Çeşitlendirilmiş hisse senedi endeks fonları tarihsel olarak enflasyon öncesi yıllık yaklaşık %7–10 getiri sağlamıştır. Kısa vadeli hedefler için muhafazakâr (%4–6), uzun vadeli yatırımlar için orta düzey (%6–8) bir tahmin kullanın.",
      },
      {
        q: "Hesaplayıcı enflasyonu hesaba katıyor mu?",
        a: "Hayır. Enflasyona göre düzenlenmiş sonuçlar elde etmek için nominal oranından beklenen enflasyonu (yaklaşık %2–3) çıkararak 'reel' getiri oranını kullanın.",
      },
      {
        q: "Her ay aynı miktarı katkıda bulunamazsam ne yapmalıyım?",
        a: "Ortalama aylık katkı miktarınızı girin. Katkı miktarınız değiştiğinde hesaplayıcıyı yeniden çalıştırabilirsiniz.",
      },
    ],
  },

  de: {
    title: "Sparziel-Rechner",
    short: "Berechnen Sie, wie viele Monate Sie bis zu Ihrem Sparziel benötigen.",
    description:
      "Kostenloser Sparziel-Rechner. Geben Sie Zielbetrag, aktuelle Ersparnisse, monatlichen Beitrag und Rendite ein, um zu sehen, wann Sie Ihr Ziel erreichen.",
    keywords: [
      "Sparziel-Rechner",
      "wie lange sparen",
      "monatliches Sparen",
      "Zinseszins",
      "Sparplan",
      "Sparziel erreichen",
      "Spartimer",
    ],
    inputs: {
      targetAmount: { label: "Zielbetrag", help: "Der Gesamtbetrag, den Sie sparen möchten." },
      currentSavings: { label: "Aktuelle Ersparnisse", help: "Bereits gesparte Summe." },
      monthlyContribution: { label: "Monatlicher Beitrag", help: "Fester Betrag, den Sie jeden Monat einzahlen." },
      annualReturn: { label: "Jährliche Rendite (%)", help: "Erwarteter jährlicher Zinssatz. Standard: 5 %." },
    },
    outputs: {
      monthsToGoal: { label: "Monate bis zum Ziel", help: "Anzahl der Monate bis Ihr Ziel erreicht ist." },
      yearsToGoal: { label: "Jahre bis zum Ziel", help: "Derselbe Zeitraum in Jahren." },
      totalContributions: { label: "Gesamtbeiträge", help: "Anfangsersparnis plus alle monatlichen Einzahlungen." },
      totalInterest: { label: "Zinserträge", help: "Wachstum durch Zinseszins zusätzlich zu Ihren Einzahlungen." },
    },
    errors: {
      targetTooLow: "Zielbetrag muss größer als null sein.",
      contributionTooLow: "Monatlicher Beitrag muss größer als null sein.",
      goalNotReachable: "Mit diesen Eingaben ist das Ziel in 100 Jahren nicht erreichbar.",
    },
    faq: [
      {
        q: "Welche Rendite sollte ich verwenden?",
        a: "Tagesgeldkonten bieten derzeit 3–4 % p.a. Breit diversifizierte Aktienindexfonds haben historisch 7–10 % jährlich vor Inflation erzielt. Für kurzfristige Ziele 4–6 %, für langfristige Anlagen 6–8 % als Schätzung nutzen.",
      },
      {
        q: "Berücksichtigt der Rechner die Inflation?",
        a: "Nein. Ziehen Sie die erwartete Inflation (ca. 2–3 %) vom Nominalzins ab, um eine realitätsnahe Rendite zu erhalten.",
      },
    ],
  },

  fr: {
    title: "Calculateur d'objectif d'épargne",
    short: "Calculez en combien de mois vous atteindrez votre objectif d'épargne.",
    description:
      "Calculateur d'objectif d'épargne gratuit. Saisissez le montant cible, votre épargne actuelle, votre versement mensuel et le rendement annuel pour savoir quand vous atteindrez votre objectif.",
    keywords: [
      "calculateur épargne",
      "objectif épargne",
      "combien de mois épargner",
      "intérêts composés",
      "plan d'épargne",
      "calculateur financier",
      "épargne mensuelle",
    ],
    inputs: {
      targetAmount: { label: "Montant cible", help: "Le montant total que vous souhaitez épargner." },
      currentSavings: { label: "Épargne actuelle", help: "Ce que vous avez déjà mis de côté." },
      monthlyContribution: { label: "Versement mensuel", help: "Montant fixe ajouté chaque mois." },
      annualReturn: { label: "Rendement annuel (%)", help: "Taux d'intérêt ou de rendement annuel attendu. Par défaut : 5 %." },
    },
    outputs: {
      monthsToGoal: { label: "Mois jusqu'à l'objectif", help: "Nombre de mois avant d'atteindre votre cible." },
      yearsToGoal: { label: "Années jusqu'à l'objectif", help: "La même durée exprimée en années." },
      totalContributions: { label: "Total des versements", help: "Épargne initiale plus tous les versements mensuels." },
      totalInterest: { label: "Intérêts gagnés", help: "Croissance due aux intérêts composés en plus de vos versements." },
    },
    errors: {
      targetTooLow: "Le montant cible doit être supérieur à zéro.",
      contributionTooLow: "Le versement mensuel doit être supérieur à zéro.",
      goalNotReachable: "Avec ces paramètres, l'objectif ne peut être atteint en 100 ans.",
    },
    faq: [
      {
        q: "Quel rendement annuel utiliser ?",
        a: "Un livret d'épargne peut offrir 3–5 % par an. Un fonds indiciel diversifié a historiquement rapporté 7–10 % avant inflation. Utilisez 4–6 % pour les objectifs à court terme et 6–8 % pour le long terme.",
      },
      {
        q: "L'inflation est-elle prise en compte ?",
        a: "Non. Soustrayez l'inflation attendue (environ 2–3 %) du taux nominal pour obtenir un taux réel.",
      },
    ],
  },

  es: {
    title: "Calculadora de objetivo de ahorro",
    short: "Calcula cuántos meses necesitas para alcanzar tu meta de ahorro.",
    description:
      "Calculadora de objetivo de ahorro gratuita. Introduce el monto objetivo, tus ahorros actuales, tu aportación mensual y el rendimiento anual esperado para saber cuándo alcanzarás tu meta.",
    keywords: [
      "calculadora ahorro",
      "objetivo de ahorro",
      "cuánto tiempo ahorrar",
      "interés compuesto",
      "plan de ahorro",
      "calculadora financiera",
      "ahorro mensual",
    ],
    inputs: {
      targetAmount: { label: "Monto objetivo", help: "El total que deseas ahorrar." },
      currentSavings: { label: "Ahorros actuales", help: "Lo que ya tienes ahorrado para esta meta." },
      monthlyContribution: { label: "Aportación mensual", help: "Cantidad fija que añadirás cada mes." },
      annualReturn: { label: "Rendimiento anual (%)", help: "Tasa de interés o rendimiento anual esperado. Por defecto: 5 %." },
    },
    outputs: {
      monthsToGoal: { label: "Meses hasta la meta", help: "Cuántos meses hasta alcanzar tu objetivo." },
      yearsToGoal: { label: "Años hasta la meta", help: "El mismo período expresado en años." },
      totalContributions: { label: "Total aportado", help: "Ahorro inicial más todas las aportaciones mensuales." },
      totalInterest: { label: "Intereses ganados", help: "Crecimiento por interés compuesto adicional a tus aportaciones." },
    },
    errors: {
      targetTooLow: "El monto objetivo debe ser mayor que cero.",
      contributionTooLow: "La aportación mensual debe ser mayor que cero.",
      goalNotReachable: "Con estos datos, la meta no puede alcanzarse en 100 años.",
    },
    faq: [
      {
        q: "¿Qué rendimiento anual debo usar?",
        a: "Una cuenta de ahorro de alta rentabilidad puede ofrecer 3–5 % anual. Un fondo indexado diversificado ha rendido históricamente 7–10 % antes de inflación. Usa 4–6 % para metas a corto plazo y 6–8 % para inversiones a largo plazo.",
      },
      {
        q: "¿Se tiene en cuenta la inflación?",
        a: "No. Resta la inflación esperada (aprox. 2–3 %) del tipo nominal para obtener una tasa real.",
      },
    ],
  },

  it: {
    title: "Calcolatore obiettivo di risparmio",
    short: "Calcola quanti mesi ti servono per raggiungere il tuo obiettivo di risparmio.",
    description:
      "Calcolatore gratuito per l'obiettivo di risparmio. Inserisci l'importo target, i risparmi attuali, il versamento mensile e il rendimento annuo per sapere quando raggiungerai il tuo obiettivo.",
    keywords: [
      "calcolatore risparmio",
      "obiettivo risparmio",
      "quanto tempo risparmiare",
      "interesse composto",
      "piano di risparmio",
      "calcolatore finanziario",
      "risparmio mensile",
    ],
    inputs: {
      targetAmount: { label: "Importo obiettivo", help: "Il totale che vuoi risparmiare." },
      currentSavings: { label: "Risparmi attuali", help: "Quanto hai già messo da parte per questo obiettivo." },
      monthlyContribution: { label: "Versamento mensile", help: "Importo fisso aggiunto ogni mese." },
      annualReturn: { label: "Rendimento annuo (%)", help: "Tasso di interesse o rendimento annuo atteso. Default: 5 %." },
    },
    outputs: {
      monthsToGoal: { label: "Mesi all'obiettivo", help: "Quanti mesi fino a raggiungere il tuo obiettivo di risparmio." },
      yearsToGoal: { label: "Anni all'obiettivo", help: "Lo stesso periodo espresso in anni." },
      totalContributions: { label: "Totale versamenti", help: "Risparmio iniziale più tutti i versamenti mensili." },
      totalInterest: { label: "Interessi maturati", help: "Crescita da interesse composto in aggiunta ai tuoi versamenti." },
    },
    errors: {
      targetTooLow: "L'importo obiettivo deve essere maggiore di zero.",
      contributionTooLow: "Il versamento mensile deve essere maggiore di zero.",
      goalNotReachable: "Con questi dati, l'obiettivo non può essere raggiunto in 100 anni.",
    },
    faq: [
      {
        q: "Quale rendimento annuo usare?",
        a: "Un conto deposito può offrire 3–5 % annuo. Un fondo indicizzato diversificato ha reso storicamente 7–10 % prima dell'inflazione. Usa 4–6 % per obiettivi a breve termine e 6–8 % per investimenti a lungo termine.",
      },
      {
        q: "Il calcolatore considera l'inflazione?",
        a: "No. Sottrai l'inflazione attesa (circa 2–3 %) dal tasso nominale per ottenere un tasso reale.",
      },
    ],
  },

  ar: {
    title: "حاسبة هدف الادخار",
    short: "اكتشف كم شهرًا تحتاج للوصول إلى هدف ادخارك.",
    description:
      "حاسبة مجانية لهدف الادخار. أدخل المبلغ المستهدف وادخارك الحالي والمساهمة الشهرية والعائد السنوي المتوقع لمعرفة موعد تحقيق هدفك.",
    keywords: [
      "حاسبة هدف الادخار",
      "كم يستغرق الادخار",
      "الادخار الشهري",
      "الفائدة المركبة",
      "خطة الادخار",
      "حاسبة مالية",
      "الادخار",
    ],
    inputs: {
      targetAmount: { label: "المبلغ المستهدف", help: "إجمالي المبلغ الذي تريد ادخاره." },
      currentSavings: { label: "المدخرات الحالية", help: "المبلغ الذي ادخرته بالفعل نحو هذا الهدف." },
      monthlyContribution: { label: "المساهمة الشهرية", help: "المبلغ الثابت الذي ستضيفه كل شهر." },
      annualReturn: { label: "العائد السنوي (%)", help: "معدل الفائدة أو العائد السنوي المتوقع. الافتراضي: 5 %." },
    },
    outputs: {
      monthsToGoal: { label: "أشهر حتى الهدف", help: "عدد الأشهر حتى تصل إلى هدفك الادخاري." },
      yearsToGoal: { label: "سنوات حتى الهدف", help: "نفس المدة معبرًا عنها بالسنوات." },
      totalContributions: { label: "إجمالي المساهمات", help: "المدخرات الأولية بالإضافة إلى جميع الإيداعات الشهرية." },
      totalInterest: { label: "الفائدة المكتسبة", help: "النمو من الفائدة المركبة فوق مساهماتك." },
    },
    errors: {
      targetTooLow: "يجب أن يكون المبلغ المستهدف أكبر من الصفر.",
      contributionTooLow: "يجب أن تكون المساهمة الشهرية أكبر من الصفر.",
      goalNotReachable: "بهذه المدخلات، لا يمكن تحقيق الهدف في غضون 100 عام.",
    },
    faq: [
      {
        q: "ما العائد السنوي الذي يجب استخدامه؟",
        a: "يمكن أن تقدم حسابات التوفير ذات العائد المرتفع 3–5 % سنويًا. وقد أعطت صناديق المؤشرات المتنوعة تاريخيًا 7–10 % قبل التضخم. استخدم 4–6 % للأهداف قصيرة الأجل و6–8 % للاستثمار طويل الأجل.",
      },
      {
        q: "هل تأخذ الحاسبة التضخم في الاعتبار؟",
        a: "لا. اطرح التضخم المتوقع (حوالي 2–3 %) من المعدل الاسمي للحصول على معدل حقيقي.",
      },
    ],
  },

  ru: {
    title: "Калькулятор цели накоплений",
    short: "Узнайте, сколько месяцев потребуется для достижения вашей цели по сбережениям.",
    description:
      "Бесплатный калькулятор цели накоплений. Введите целевую сумму, текущие сбережения, ежемесячный взнос и ожидаемую доходность, чтобы узнать, когда вы достигнете своей цели.",
    keywords: [
      "калькулятор накоплений",
      "цель накоплений",
      "сколько копить",
      "сложные проценты",
      "план накоплений",
      "финансовый калькулятор",
      "ежемесячные сбережения",
    ],
    inputs: {
      targetAmount: { label: "Целевая сумма", help: "Общая сумма, которую вы хотите накопить." },
      currentSavings: { label: "Текущие сбережения", help: "Сумма, которую вы уже накопили." },
      monthlyContribution: { label: "Ежемесячный взнос", help: "Фиксированная сумма, добавляемая каждый месяц." },
      annualReturn: { label: "Годовая доходность (%)", help: "Ожидаемая годовая процентная ставка или доходность. По умолчанию: 5 %." },
    },
    outputs: {
      monthsToGoal: { label: "Месяцев до цели", help: "Количество месяцев до достижения цели." },
      yearsToGoal: { label: "Лет до цели", help: "Тот же период в годах." },
      totalContributions: { label: "Всего внесено", help: "Начальные сбережения плюс все ежемесячные взносы." },
      totalInterest: { label: "Заработано процентов", help: "Рост за счёт сложных процентов сверх ваших взносов." },
    },
    errors: {
      targetTooLow: "Целевая сумма должна быть больше нуля.",
      contributionTooLow: "Ежемесячный взнос должен быть больше нуля.",
      goalNotReachable: "С указанными параметрами цель не достижима за 100 лет.",
    },
    faq: [
      {
        q: "Какую годовую доходность указывать?",
        a: "Высокодоходные вклады могут давать 4–6 % годовых. Диверсифицированные индексные фонды исторически приносили 7–10 % до инфляции. Для краткосрочных целей используйте 4–6 %, для долгосрочных — 6–8 %.",
      },
      {
        q: "Учитывается ли инфляция?",
        a: "Нет. Вычтите ожидаемую инфляцию (около 2–3 %) из номинальной ставки, чтобы получить реальную доходность.",
      },
    ],
  },

  zh: {
    title: "储蓄目标计算器",
    short: "计算实现储蓄目标需要多少个月。",
    description:
      "免费储蓄目标计算器。输入目标金额、当前存款、每月存入金额和预期年收益率，即可查看何时实现储蓄目标。",
    keywords: [
      "储蓄目标计算器",
      "需要多久存钱",
      "每月储蓄",
      "复利计算",
      "储蓄计划",
      "理财计算器",
      "存钱计划",
    ],
    inputs: {
      targetAmount: { label: "目标金额", help: "您希望储蓄的总金额。" },
      currentSavings: { label: "当前存款", help: "您已为该目标存入的金额。" },
      monthlyContribution: { label: "每月存入金额", help: "每月固定存入的金额。" },
      annualReturn: { label: "年收益率（%）", help: "预期年利率或投资回报率，默认为5%。" },
    },
    outputs: {
      monthsToGoal: { label: "达成目标所需月数", help: "达到储蓄目标需要的月数。" },
      yearsToGoal: { label: "达成目标所需年数", help: "以年为单位的相同时间段。" },
      totalContributions: { label: "总存入金额", help: "初始存款加上所有每月存款的总和。" },
      totalInterest: { label: "获得的利息", help: "在存款基础上通过复利获得的增长。" },
    },
    errors: {
      targetTooLow: "目标金额必须大于零。",
      contributionTooLow: "每月存入金额必须大于零。",
      goalNotReachable: "在这些条件下，无法在100年内实现目标。",
    },
    faq: [
      {
        q: "应该使用多少年收益率？",
        a: "高收益储蓄账户可能提供3–5%的年利率。多元化股票指数基金历史上通货膨胀前年均回报约7–10%。短期目标使用4–6%，长期投资使用6–8%。",
      },
      {
        q: "计算器是否考虑通货膨胀？",
        a: "不考虑。请将预期通胀率（约2–3%）从名义利率中减去，以获得实际回报率。",
      },
    ],
  },

  ja: {
    title: "貯蓄目標計算機",
    short: "貯蓄目標に到達するまでの月数を計算します。",
    description:
      "無料の貯蓄目標計算機。目標金額・現在の貯蓄額・毎月の積立額・予想年利を入力するだけで、いつ目標を達成できるかがわかります。",
    keywords: [
      "貯蓄目標計算機",
      "何ヶ月で貯まる",
      "毎月の積立",
      "複利計算",
      "貯蓄プラン",
      "資産形成計算機",
      "積立シミュレーション",
    ],
    inputs: {
      targetAmount: { label: "目標金額", help: "貯めたい合計金額。" },
      currentSavings: { label: "現在の貯蓄額", help: "すでにこの目標に向けて貯めた金額。" },
      monthlyContribution: { label: "毎月の積立額", help: "毎月追加する固定金額。" },
      annualReturn: { label: "年利（%）", help: "期待する年利または投資利回り。デフォルトは5%。" },
    },
    outputs: {
      monthsToGoal: { label: "目標達成までの月数", help: "貯蓄目標に達するまでの月数。" },
      yearsToGoal: { label: "目標達成までの年数", help: "同じ期間を年単位で表したもの。" },
      totalContributions: { label: "総積立額", help: "初期貯蓄額と全ての月次積立額の合計。" },
      totalInterest: { label: "獲得利息", help: "積立額に加えて複利で増えた金額。" },
    },
    errors: {
      targetTooLow: "目標金額はゼロより大きくなければなりません。",
      contributionTooLow: "毎月の積立額はゼロより大きくなければなりません。",
      goalNotReachable: "この入力では100年以内に目標を達成できません。",
    },
    faq: [
      {
        q: "年利は何%を使えばよいですか？",
        a: "高利回り普通預金は年3–5%程度です。分散投資した株式インデックスファンドは過去にインフレ前で年7–10%程度のリターンを上げています。短期目標には4–6%、長期投資には6–8%を目安にしてください。",
      },
      {
        q: "インフレは考慮されていますか？",
        a: "いいえ。インフレ調整された結果を得るには、名目利率から予想インフレ率（約2–3%）を差し引いた「実質」利回りを入力してください。",
      },
    ],
  },

  ko: {
    title: "저축 목표 계산기",
    short: "저축 목표를 달성하는 데 몇 달이 걸리는지 계산해 보세요.",
    description:
      "무료 저축 목표 계산기. 목표 금액, 현재 저축액, 월 납입액, 예상 연간 수익률을 입력하면 목표 달성 시점을 확인할 수 있습니다.",
    keywords: [
      "저축 목표 계산기",
      "저축 기간 계산",
      "월 저축",
      "복리 계산",
      "저축 계획",
      "재무 계산기",
      "목돈 모으기",
    ],
    inputs: {
      targetAmount: { label: "목표 금액", help: "저축하려는 총 금액." },
      currentSavings: { label: "현재 저축액", help: "이 목표를 위해 이미 저축한 금액." },
      monthlyContribution: { label: "월 납입액", help: "매월 추가할 고정 금액." },
      annualReturn: { label: "연간 수익률 (%)", help: "예상 연이율 또는 투자 수익률. 기본값: 5%." },
    },
    outputs: {
      monthsToGoal: { label: "목표까지 걸리는 월 수", help: "저축 목표에 도달하기까지 걸리는 월 수." },
      yearsToGoal: { label: "목표까지 걸리는 년 수", help: "같은 기간을 년 단위로 나타낸 것." },
      totalContributions: { label: "총 납입액", help: "초기 저축액 + 모든 월 납입액의 합계." },
      totalInterest: { label: "이자 수익", help: "납입액 외에 복리로 증가한 금액." },
    },
    errors: {
      targetTooLow: "목표 금액은 0보다 커야 합니다.",
      contributionTooLow: "월 납입액은 0보다 커야 합니다.",
      goalNotReachable: "이 조건으로는 100년 이내에 목표를 달성할 수 없습니다.",
    },
    faq: [
      {
        q: "연간 수익률은 얼마로 설정해야 하나요?",
        a: "고금리 저축 계좌는 연 3–5% 수준을 제공할 수 있습니다. 분산 투자된 주식 인덱스 펀드는 인플레이션 전 역사적으로 연 7–10%의 수익률을 기록했습니다. 단기 목표에는 4–6%, 장기 투자에는 6–8%를 사용하세요.",
      },
      {
        q: "인플레이션은 고려되나요?",
        a: "아니요. 인플레이션 조정 결과를 얻으려면 명목 금리에서 예상 인플레이션율(약 2–3%)을 차감한 '실질' 수익률을 입력하세요.",
      },
    ],
  },

  hi: {
    title: "बचत लक्ष्य कैलकुलेटर",
    short: "जानें कि अपने बचत लक्ष्य तक पहुँचने में कितने महीने लगेंगे।",
    description:
      "मुफ़्त बचत लक्ष्य कैलकुलेटर। लक्ष्य राशि, वर्तमान बचत, मासिक योगदान और अपेक्षित वार्षिक रिटर्न दर्ज करें और जानें कि आप अपना लक्ष्य कब प्राप्त करेंगे।",
    keywords: [
      "बचत लक्ष्य कैलकुलेटर",
      "बचत में कितना समय",
      "मासिक बचत",
      "चक्रवृद्धि ब्याज",
      "बचत योजना",
      "वित्तीय कैलकुलेटर",
      "पैसे जोड़ना",
    ],
    inputs: {
      targetAmount: { label: "लक्ष्य राशि", help: "वह कुल राशि जो आप बचाना चाहते हैं।" },
      currentSavings: { label: "वर्तमान बचत", help: "इस लक्ष्य के लिए आपने अब तक कितनी बचत की है।" },
      monthlyContribution: { label: "मासिक योगदान", help: "हर महीने जमा की जाने वाली निश्चित राशि।" },
      annualReturn: { label: "वार्षिक रिटर्न (%)", help: "अपेक्षित वार्षिक ब्याज दर या निवेश रिटर्न। डिफ़ॉल्ट: 5%।" },
    },
    outputs: {
      monthsToGoal: { label: "लक्ष्य तक महीने", help: "बचत लक्ष्य तक पहुँचने में कितने महीने लगेंगे।" },
      yearsToGoal: { label: "लक्ष्य तक वर्ष", help: "वही अवधि वर्षों में।" },
      totalContributions: { label: "कुल योगदान", help: "प्रारंभिक बचत और सभी मासिक जमा का योग।" },
      totalInterest: { label: "अर्जित ब्याज", help: "आपके योगदान के अतिरिक्त चक्रवृद्धि ब्याज से वृद्धि।" },
    },
    errors: {
      targetTooLow: "लक्ष्य राशि शून्य से अधिक होनी चाहिए।",
      contributionTooLow: "मासिक योगदान शून्य से अधिक होना चाहिए।",
      goalNotReachable: "इन मानों के साथ 100 वर्षों में लक्ष्य प्राप्त नहीं किया जा सकता।",
    },
    faq: [
      {
        q: "कौन सी वार्षिक रिटर्न दर उपयोग करें?",
        a: "उच्च-यील्ड बचत खाते 3–5% वार्षिक ब्याज दे सकते हैं। विविधीकृत स्टॉक इंडेक्स फंड ने ऐतिहासिक रूप से मुद्रास्फीति से पहले लगभग 7–10% वार्षिक रिटर्न दिया है। अल्पकालिक लक्ष्यों के लिए 4–6% और दीर्घकालिक निवेश के लिए 6–8% का उपयोग करें।",
      },
      {
        q: "क्या कैलकुलेटर मुद्रास्फीति को ध्यान में रखता है?",
        a: "नहीं। मुद्रास्फीति-समायोजित परिणामों के लिए नाममात्र दर से अपेक्षित मुद्रास्फीति (लगभग 2–3%) घटाएँ।",
      },
    ],
  },
};

export default i18n;
