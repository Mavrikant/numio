import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Pension Drawdown Calculator",
    short: "Project your pension pot, safe income, and drawdown longevity.",
    description:
      "Estimate your retirement pot, the 4%-rule safe income, how long the pot will last at a target spending level, and its inflation-adjusted real value.",
    keywords: [
      "pension calculator",
      "retirement drawdown",
      "4 percent rule",
      "safe withdrawal rate",
      "FIRE calculator",
      "retirement income",
      "pension pot",
    ],
    inputs: {
      currentPot: { label: "Current pension pot", help: "Total value of your existing pension and retirement savings today." },
      currentAge: { label: "Current age", help: "Your age in years right now." },
      retirementAge: { label: "Retirement age", help: "The age at which you plan to stop working and start drawing down." },
      annualContribution: { label: "Annual contribution", help: "How much you add to your pot each year, including any employer match." },
      expectedReturn: { label: "Expected annual return", help: "Long-run nominal investment return before inflation, in percent." },
      targetIncome: { label: "Target retirement income", help: "Annual income you plan to draw from the pot in retirement." },
      lifeExpectancy: { label: "Life expectancy", help: "Age you want the pot to support you until (default 85)." },
    },
    outputs: {
      potAtRetirement: { label: "Pot at retirement", help: "Projected nominal pot value at retirement age." },
      safeAnnualIncome: { label: "Safe annual income (4% rule)", help: "Income the pot can support indefinitely under the 4% safe-withdrawal heuristic." },
      yearsUntilExhaustion: { label: "Years until exhaustion", help: "How long the pot lasts at your target spending, capped at life expectancy." },
      realValueAtRetirement: { label: "Real value (today's money)", help: "Pot value adjusted for 2.5% long-run inflation." },
    },
    errors: {
      retirementBeforeCurrent: "Retirement age must be after your current age.",
      lifeBeforeRetirement: "Life expectancy must be after retirement age.",
    },
    faq: [
      {
        q: "What is the 4% rule?",
        a: "A heuristic from the Trinity Study (1998) suggesting that withdrawing 4% of the initial pot in year one, then adjusting for inflation each year, historically had a high probability of lasting 30 years.",
      },
      {
        q: "How is real value calculated?",
        a: "Real value divides the projected nominal pot by (1 + inflation)^years-to-retirement, with inflation assumed at 2.5% per year.",
      },
      {
        q: "Why doesn't my pot last forever even with growth?",
        a: "When target income exceeds the growth your pot earns each year (r × pot), withdrawals eat into capital. The closed-form formula determines exactly when the balance hits zero.",
      },
      {
        q: "What return should I assume?",
        a: "Long-run historical equity returns are roughly 6–8% nominal, balanced portfolios 4–6%. Conservative planning often uses 4–5%.",
      },
    ],
  },

  tr: {
    title: "Emeklilik Çekim Hesaplayıcı",
    short: "Emeklilik birikiminizi, güvenli geliri ve çekim sürenizi projeksiyon edin.",
    description:
      "Emeklilik birikim havuzunuzu, %4 kuralına göre güvenli yıllık geliri, hedef harcamada kaç yıl dayanacağını ve enflasyona göre reel değerini tahmin edin.",
    keywords: [
      "emeklilik hesaplayıcı",
      "emeklilik çekimi",
      "%4 kuralı",
      "güvenli çekim oranı",
      "emeklilik geliri",
      "BES hesaplama",
      "emeklilik birikimi",
    ],
    inputs: {
      currentPot: { label: "Mevcut birikim", help: "Bugün itibarıyla mevcut emeklilik tasarruflarınızın toplam değeri." },
      currentAge: { label: "Mevcut yaş", help: "Şu andaki yaşınız." },
      retirementAge: { label: "Emeklilik yaşı", help: "Çalışmayı bırakıp birikiminizden çekmeye başlayacağınız yaş." },
      annualContribution: { label: "Yıllık katkı", help: "İşveren katkısı dahil her yıl birikiminize eklediğiniz miktar." },
      expectedReturn: { label: "Beklenen yıllık getiri", help: "Uzun vadeli nominal yatırım getirisi (enflasyon öncesi), yüzde olarak." },
      targetIncome: { label: "Hedef emeklilik geliri", help: "Emeklilikte birikiminizden çekmeyi planladığınız yıllık gelir." },
      lifeExpectancy: { label: "Yaşam beklentisi", help: "Birikimin sizi destekleyeceği yaş (varsayılan 85)." },
    },
    outputs: {
      potAtRetirement: { label: "Emeklilikteki birikim", help: "Emeklilik yaşındaki tahmini nominal birikim değeri." },
      safeAnnualIncome: { label: "Güvenli yıllık gelir (%4 kuralı)", help: "%4 güvenli çekim kuralına göre süresiz olarak desteklenebilecek gelir." },
      yearsUntilExhaustion: { label: "Tükenmeye kadar yıl", help: "Hedef harcamada birikimin kaç yıl dayanacağı (yaşam beklentisiyle sınırlı)." },
      realValueAtRetirement: { label: "Reel değer (bugünün parası)", help: "Yıllık %2,5 uzun vadeli enflasyona göre düzeltilmiş değer." },
    },
    errors: {
      retirementBeforeCurrent: "Emeklilik yaşı mevcut yaştan büyük olmalıdır.",
      lifeBeforeRetirement: "Yaşam beklentisi emeklilik yaşından büyük olmalıdır.",
    },
    faq: [
      {
        q: "%4 kuralı nedir?",
        a: "Trinity Study (1998) kaynaklı sezgisel kural: ilk yıl birikimin %4'ünü çekip sonraki yıllarda enflasyona göre ayarlanan miktarın, tarihsel olarak 30 yıl dayanma olasılığı yüksek bulunmuştur.",
      },
      {
        q: "Reel değer nasıl hesaplanıyor?",
        a: "Projeksiyon edilen nominal birikim (1 + enflasyon) üzeri (emekliliğe kalan yıl) sayısına bölünür; enflasyon yıllık %2,5 varsayılır.",
      },
      {
        q: "Büyümeye rağmen neden sonsuza dek yetmiyor?",
        a: "Hedef gelir, birikimin yıllık büyümesini (r × birikim) aştığında çekimler ana paraya dokunmaya başlar. Kapalı form formülü bakiyenin tam ne zaman sıfıra ulaştığını verir.",
      },
      {
        q: "Hangi getiriyi varsaymalıyım?",
        a: "Uzun vadeli tarihsel hisse senedi getirileri nominal olarak yaklaşık %6–8, dengeli portföyler %4–6 düzeyindedir. Temkinli planlama genellikle %4–5 kullanır.",
      },
    ],
  },

  de: {
    title: "Rentenauszahlungsrechner",
    short: "Projizieren Sie Ihr Rentenvermögen, sicheres Einkommen und Entnahmedauer.",
    description:
      "Schätzen Sie Ihr Rentenvermögen bei Renteneintritt, das sichere Einkommen nach der 4%-Regel, wie lange das Vermögen bei einem Zielausgabenniveau reicht, und seinen inflationsbereinigten Realwert.",
    keywords: [
      "Rentenrechner",
      "Rentenauszahlung",
      "4-Prozent-Regel",
      "sichere Entnahmerate",
      "Altersvorsorge",
      "Ruhestand Einkommen",
      "Rentenkapital",
    ],
    inputs: {
      currentPot: { label: "Aktuelles Rentenvermögen", help: "Heutiger Gesamtwert Ihrer bestehenden Rentenersparnisse." },
      currentAge: { label: "Aktuelles Alter", help: "Ihr aktuelles Alter in Jahren." },
      retirementAge: { label: "Renteneintrittsalter", help: "Alter, in dem Sie aufhören zu arbeiten und mit der Entnahme beginnen." },
      annualContribution: { label: "Jährlicher Beitrag", help: "Wie viel Sie pro Jahr einzahlen, inklusive eines etwaigen Arbeitgeberanteils." },
      expectedReturn: { label: "Erwartete jährliche Rendite", help: "Langfristige nominale Kapitalrendite vor Inflation in Prozent." },
      targetIncome: { label: "Ziel-Renteneinkommen", help: "Jährliches Einkommen, das Sie aus dem Vermögen entnehmen möchten." },
      lifeExpectancy: { label: "Lebenserwartung", help: "Alter, bis zu dem das Vermögen reichen soll (Standard 85)." },
    },
    outputs: {
      potAtRetirement: { label: "Vermögen bei Renteneintritt", help: "Projizierter nominaler Wert bei Renteneintritt." },
      safeAnnualIncome: { label: "Sicheres Jahreseinkommen (4%-Regel)", help: "Einkommen, das das Vermögen nach der 4%-Heuristik nachhaltig stützen kann." },
      yearsUntilExhaustion: { label: "Jahre bis zur Erschöpfung", help: "Wie lange das Vermögen bei Ihren Zielausgaben reicht (begrenzt durch Lebenserwartung)." },
      realValueAtRetirement: { label: "Realwert (heutige Kaufkraft)", help: "Auf 2,5% Langfristinflation angepasster Vermögenswert." },
    },
    errors: {
      retirementBeforeCurrent: "Das Renteneintrittsalter muss nach dem aktuellen Alter liegen.",
      lifeBeforeRetirement: "Die Lebenserwartung muss nach dem Renteneintrittsalter liegen.",
    },
    faq: [
      {
        q: "Was ist die 4%-Regel?",
        a: "Eine Heuristik aus der Trinity-Studie (1998): Wenn man im ersten Jahr 4% des Vermögens entnimmt und den Betrag jährlich an die Inflation anpasst, hielt das Vermögen historisch mit hoher Wahrscheinlichkeit 30 Jahre.",
      },
      {
        q: "Wie wird der Realwert berechnet?",
        a: "Der projizierte nominale Wert wird durch (1 + Inflation) hoch (Jahre bis Renteneintritt) geteilt; Inflation wird mit 2,5% pro Jahr angesetzt.",
      },
      {
        q: "Welche Rendite sollte ich annehmen?",
        a: "Langfristige Aktienrenditen liegen nominal bei etwa 6–8%, ausgewogene Portfolios bei 4–6%. Konservativ wird oft 4–5% verwendet.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Décumulation de Retraite",
    short: "Projetez votre capital retraite, votre revenu sûr et la durée de votre décumulation.",
    description:
      "Estimez votre capital retraite, le revenu annuel sûr selon la règle des 4%, combien de temps le capital durera à un niveau de dépenses cible, et sa valeur réelle ajustée à l'inflation.",
    keywords: [
      "calculateur retraite",
      "décumulation",
      "règle des 4 pourcents",
      "taux de retrait sûr",
      "FIRE",
      "revenu retraite",
      "épargne retraite",
    ],
    inputs: {
      currentPot: { label: "Capital retraite actuel", help: "Valeur totale actuelle de votre épargne retraite." },
      currentAge: { label: "Âge actuel", help: "Votre âge actuel en années." },
      retirementAge: { label: "Âge de la retraite", help: "Âge auquel vous prévoyez d'arrêter de travailler." },
      annualContribution: { label: "Cotisation annuelle", help: "Montant ajouté chaque année à votre capital, incluant un éventuel abondement employeur." },
      expectedReturn: { label: "Rendement annuel attendu", help: "Rendement nominal à long terme avant inflation, en pourcentage." },
      targetIncome: { label: "Revenu cible à la retraite", help: "Revenu annuel que vous prévoyez de retirer en retraite." },
      lifeExpectancy: { label: "Espérance de vie", help: "Âge jusqu'auquel le capital doit vous soutenir (par défaut 85)." },
    },
    outputs: {
      potAtRetirement: { label: "Capital à la retraite", help: "Valeur nominale projetée du capital à l'âge de la retraite." },
      safeAnnualIncome: { label: "Revenu annuel sûr (règle 4%)", help: "Revenu pouvant être soutenu indéfiniment selon l'heuristique des 4%." },
      yearsUntilExhaustion: { label: "Années jusqu'à épuisement", help: "Durée pendant laquelle le capital tient à votre dépense cible (plafonnée par l'espérance de vie)." },
      realValueAtRetirement: { label: "Valeur réelle (monnaie d'aujourd'hui)", help: "Valeur du capital ajustée à une inflation à long terme de 2,5%." },
    },
    errors: {
      retirementBeforeCurrent: "L'âge de la retraite doit être postérieur à l'âge actuel.",
      lifeBeforeRetirement: "L'espérance de vie doit être postérieure à l'âge de la retraite.",
    },
    faq: [
      {
        q: "Qu'est-ce que la règle des 4% ?",
        a: "Heuristique issue de la Trinity Study (1998) : retirer 4% du capital initial la première année puis ajuster à l'inflation chaque année a, historiquement, une forte probabilité de tenir 30 ans.",
      },
      {
        q: "Comment la valeur réelle est-elle calculée ?",
        a: "Le capital nominal projeté est divisé par (1 + inflation)^années-à-la-retraite, avec une inflation supposée de 2,5% par an.",
      },
      {
        q: "Quel rendement supposer ?",
        a: "Les rendements actions historiques de long terme sont d'environ 6–8% nominal, les portefeuilles équilibrés 4–6%. Une planification prudente utilise souvent 4–5%.",
      },
    ],
  },

  es: {
    title: "Calculadora de Retiros de Pensión",
    short: "Proyecta tu fondo de pensiones, ingreso seguro y duración de los retiros.",
    description:
      "Estima tu fondo de pensiones al jubilarte, el ingreso seguro según la regla del 4%, cuánto durará a un gasto objetivo y su valor real ajustado por inflación.",
    keywords: [
      "calculadora de pensión",
      "retiros de pensión",
      "regla del 4 por ciento",
      "tasa de retiro seguro",
      "FIRE",
      "ingreso de jubilación",
      "fondo de pensiones",
    ],
    inputs: {
      currentPot: { label: "Fondo de pensiones actual", help: "Valor total actual de tus ahorros para la jubilación." },
      currentAge: { label: "Edad actual", help: "Tu edad actual en años." },
      retirementAge: { label: "Edad de jubilación", help: "Edad a la que planeas dejar de trabajar." },
      annualContribution: { label: "Aportación anual", help: "Cuánto añades cada año a tu fondo, incluyendo aportación del empleador." },
      expectedReturn: { label: "Rentabilidad anual esperada", help: "Rentabilidad nominal a largo plazo antes de inflación, en porcentaje." },
      targetIncome: { label: "Ingreso objetivo de jubilación", help: "Ingreso anual que planeas retirar del fondo en la jubilación." },
      lifeExpectancy: { label: "Esperanza de vida", help: "Edad hasta la cual quieres que dure el fondo (predeterminado 85)." },
    },
    outputs: {
      potAtRetirement: { label: "Fondo al jubilarse", help: "Valor nominal proyectado del fondo a la edad de jubilación." },
      safeAnnualIncome: { label: "Ingreso anual seguro (regla 4%)", help: "Ingreso que el fondo puede sostener indefinidamente según la heurística del 4%." },
      yearsUntilExhaustion: { label: "Años hasta agotarse", help: "Cuánto dura el fondo a tu gasto objetivo (limitado por la esperanza de vida)." },
      realValueAtRetirement: { label: "Valor real (dinero de hoy)", help: "Valor ajustado por 2,5% de inflación a largo plazo." },
    },
    errors: {
      retirementBeforeCurrent: "La edad de jubilación debe ser posterior a la edad actual.",
      lifeBeforeRetirement: "La esperanza de vida debe ser posterior a la edad de jubilación.",
    },
    faq: [
      {
        q: "¿Qué es la regla del 4%?",
        a: "Heurística del Trinity Study (1998): retirar el 4% del fondo el primer año y ajustar por inflación cada año posterior tuvo, históricamente, alta probabilidad de durar 30 años.",
      },
      {
        q: "¿Cómo se calcula el valor real?",
        a: "El fondo nominal proyectado se divide por (1 + inflación)^años-hasta-jubilación, asumiendo 2,5% anual.",
      },
      {
        q: "¿Qué rentabilidad debo asumir?",
        a: "Las rentabilidades históricas de renta variable a largo plazo son ~6–8% nominal, carteras equilibradas 4–6%. Una planificación conservadora suele usar 4–5%.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Decumulo Pensionistico",
    short: "Stima il tuo capitale pensionistico, il reddito sicuro e la durata del decumulo.",
    description:
      "Stima il capitale pensionistico al pensionamento, il reddito sicuro secondo la regola del 4%, quanto durerà a una spesa obiettivo e il suo valore reale corretto per l'inflazione.",
    keywords: [
      "calcolatore pensione",
      "decumulo pensionistico",
      "regola del 4 percento",
      "tasso di prelievo sicuro",
      "FIRE",
      "reddito di pensione",
      "capitale pensionistico",
    ],
    inputs: {
      currentPot: { label: "Capitale pensionistico attuale", help: "Valore totale odierno dei tuoi risparmi pensionistici." },
      currentAge: { label: "Età attuale", help: "La tua età attuale in anni." },
      retirementAge: { label: "Età di pensionamento", help: "Età alla quale prevedi di smettere di lavorare." },
      annualContribution: { label: "Contributo annuo", help: "Quanto aggiungi ogni anno al capitale, incluso il contributo del datore." },
      expectedReturn: { label: "Rendimento annuo atteso", help: "Rendimento nominale a lungo termine prima dell'inflazione, in percentuale." },
      targetIncome: { label: "Reddito target in pensione", help: "Reddito annuo che intendi prelevare dal capitale." },
      lifeExpectancy: { label: "Aspettativa di vita", help: "Età fino alla quale il capitale deve sostenerti (predefinito 85)." },
    },
    outputs: {
      potAtRetirement: { label: "Capitale al pensionamento", help: "Valore nominale proiettato del capitale all'età della pensione." },
      safeAnnualIncome: { label: "Reddito annuo sicuro (regola 4%)", help: "Reddito sostenibile indefinitamente secondo l'euristica del 4%." },
      yearsUntilExhaustion: { label: "Anni fino all'esaurimento", help: "Quanto dura il capitale alla tua spesa target (limitato dall'aspettativa di vita)." },
      realValueAtRetirement: { label: "Valore reale (denaro di oggi)", help: "Valore corretto per inflazione di lungo periodo del 2,5%." },
    },
    errors: {
      retirementBeforeCurrent: "L'età di pensionamento deve essere successiva all'età attuale.",
      lifeBeforeRetirement: "L'aspettativa di vita deve essere successiva all'età di pensionamento.",
    },
    faq: [
      {
        q: "Cos'è la regola del 4%?",
        a: "Euristica del Trinity Study (1998): prelevare il 4% del capitale iniziale il primo anno e adeguare per inflazione negli anni successivi è risultato storicamente sostenibile per 30 anni con alta probabilità.",
      },
      {
        q: "Come si calcola il valore reale?",
        a: "Il capitale nominale proiettato è diviso per (1 + inflazione)^anni-alla-pensione, con inflazione assunta al 2,5% annuo.",
      },
      {
        q: "Quale rendimento assumere?",
        a: "Rendimenti azionari storici di lungo termine ~6–8% nominale, portafogli bilanciati 4–6%. Pianificazioni prudenti usano 4–5%.",
      },
    ],
  },

  ar: {
    title: "حاسبة سحب التقاعد",
    short: "توقّع رصيد تقاعدك ودخلك الآمن وعدد سنوات استمرار السحب.",
    description:
      "قدّر رصيد تقاعدك عند التقاعد، والدخل الآمن وفق قاعدة 4٪، ومدة استمرار الرصيد عند مستوى إنفاق مستهدف، وقيمته الحقيقية بعد تعديل التضخم.",
    keywords: [
      "حاسبة التقاعد",
      "سحب التقاعد",
      "قاعدة 4 بالمئة",
      "معدل سحب آمن",
      "FIRE",
      "دخل التقاعد",
      "صندوق التقاعد",
    ],
    inputs: {
      currentPot: { label: "رصيد التقاعد الحالي", help: "إجمالي قيمة مدخراتك التقاعدية اليوم." },
      currentAge: { label: "العمر الحالي", help: "عمرك الحالي بالسنوات." },
      retirementAge: { label: "سن التقاعد", help: "السن الذي تخطط فيه للتوقف عن العمل وبدء السحب." },
      annualContribution: { label: "المساهمة السنوية", help: "المبلغ الذي تضيفه سنويًا للرصيد، شاملًا مساهمة صاحب العمل." },
      expectedReturn: { label: "العائد السنوي المتوقع", help: "العائد الاستثماري الاسمي طويل المدى قبل التضخم بالنسبة المئوية." },
      targetIncome: { label: "الدخل المستهدف بالتقاعد", help: "الدخل السنوي الذي تنوي سحبه من الرصيد." },
      lifeExpectancy: { label: "العمر المتوقع", help: "العمر الذي تريد أن يستمر الرصيد حتى يدعمك (افتراضيًا 85)." },
    },
    outputs: {
      potAtRetirement: { label: "الرصيد عند التقاعد", help: "القيمة الاسمية المتوقعة للرصيد عند سن التقاعد." },
      safeAnnualIncome: { label: "الدخل السنوي الآمن (قاعدة 4٪)", help: "الدخل الذي يمكن أن يدعمه الرصيد إلى أجل غير مسمى وفق قاعدة 4٪." },
      yearsUntilExhaustion: { label: "السنوات حتى النفاد", help: "كم يستمر الرصيد عند مستوى الإنفاق المستهدف (محدد بالعمر المتوقع)." },
      realValueAtRetirement: { label: "القيمة الحقيقية (بأموال اليوم)", help: "القيمة معدّلة وفق تضخم طويل الأجل 2.5٪ سنويًا." },
    },
    errors: {
      retirementBeforeCurrent: "يجب أن يكون سن التقاعد بعد العمر الحالي.",
      lifeBeforeRetirement: "يجب أن يكون العمر المتوقع بعد سن التقاعد.",
    },
    faq: [
      {
        q: "ما قاعدة 4٪؟",
        a: "قاعدة استنباطية من دراسة Trinity (1998): سحب 4٪ من الرصيد في السنة الأولى ثم تعديل المبلغ سنويًا حسب التضخم استمر تاريخيًا 30 سنة باحتمال مرتفع.",
      },
      {
        q: "كيف تُحسب القيمة الحقيقية؟",
        a: "يُقسم الرصيد الاسمي المتوقع على (1 + التضخم) مرفوعًا للسنوات حتى التقاعد، مع افتراض تضخم سنوي 2.5٪.",
      },
      {
        q: "ما العائد الذي ينبغي افتراضه؟",
        a: "عوائد الأسهم التاريخية طويلة المدى نحو 6–8٪ اسمي، والمحافظ المتوازنة 4–6٪. التخطيط المحافظ يستخدم غالبًا 4–5٪.",
      },
    ],
  },

  ru: {
    title: "Калькулятор пенсионных изъятий",
    short: "Спрогнозируйте пенсионный капитал, безопасный доход и срок изъятий.",
    description:
      "Оцените размер пенсионного капитала к выходу на пенсию, безопасный доход по правилу 4%, на сколько хватит капитала при целевом уровне расходов и его реальную стоимость с поправкой на инфляцию.",
    keywords: [
      "калькулятор пенсии",
      "пенсионные изъятия",
      "правило 4 процентов",
      "безопасная ставка изъятия",
      "FIRE",
      "пенсионный доход",
      "пенсионный капитал",
    ],
    inputs: {
      currentPot: { label: "Текущий пенсионный капитал", help: "Текущая совокупная стоимость ваших пенсионных накоплений." },
      currentAge: { label: "Текущий возраст", help: "Ваш текущий возраст в годах." },
      retirementAge: { label: "Возраст выхода на пенсию", help: "Возраст, в котором вы планируете прекратить работу." },
      annualContribution: { label: "Ежегодный взнос", help: "Сколько вы добавляете в капитал ежегодно, включая взнос работодателя." },
      expectedReturn: { label: "Ожидаемая годовая доходность", help: "Долгосрочная номинальная доходность до инфляции, в процентах." },
      targetIncome: { label: "Целевой пенсионный доход", help: "Ежегодный доход, который вы планируете изымать из капитала." },
      lifeExpectancy: { label: "Ожидаемая продолжительность жизни", help: "Возраст, до которого капитал должен вас обеспечивать (по умолчанию 85)." },
    },
    outputs: {
      potAtRetirement: { label: "Капитал к пенсии", help: "Прогнозируемая номинальная стоимость капитала на момент выхода на пенсию." },
      safeAnnualIncome: { label: "Безопасный годовой доход (правило 4%)", help: "Доход, который капитал способен поддерживать бессрочно по эвристике 4%." },
      yearsUntilExhaustion: { label: "Лет до исчерпания", help: "На сколько лет хватает капитала при ваших целевых расходах (с пределом по продолжительности жизни)." },
      realValueAtRetirement: { label: "Реальная стоимость (в деньгах сегодня)", help: "Стоимость с учётом долгосрочной инфляции 2,5% в год." },
    },
    errors: {
      retirementBeforeCurrent: "Возраст выхода на пенсию должен быть больше текущего возраста.",
      lifeBeforeRetirement: "Ожидаемая продолжительность жизни должна быть больше возраста выхода на пенсию.",
    },
    faq: [
      {
        q: "Что такое правило 4%?",
        a: "Эвристика из исследования Trinity Study (1998): изъятие 4% капитала в первый год и индексация суммы на инфляцию ежегодно исторически с высокой вероятностью обеспечивало 30-летний горизонт.",
      },
      {
        q: "Как рассчитывается реальная стоимость?",
        a: "Прогнозный номинальный капитал делится на (1 + инфляция)^число-лет-до-пенсии при допущении инфляции 2,5% в год.",
      },
      {
        q: "Какую доходность принимать?",
        a: "Долгосрочная доходность акций исторически ~6–8% номинально, сбалансированные портфели 4–6%. Консервативное планирование часто использует 4–5%.",
      },
    ],
  },

  zh: {
    title: "养老金提取计算器",
    short: "预测您的养老金本金、安全收入及提取年限。",
    description:
      "估算您退休时的养老金本金、按4%规则的安全年收入、按目标支出可持续多少年，以及经过通胀调整后的实际价值。",
    keywords: [
      "养老金计算器",
      "养老金提取",
      "4%规则",
      "安全提取率",
      "FIRE",
      "退休收入",
      "退休本金",
    ],
    inputs: {
      currentPot: { label: "当前养老金本金", help: "您目前所有退休储蓄的合计金额。" },
      currentAge: { label: "当前年龄", help: "您当前的年龄（年）。" },
      retirementAge: { label: "退休年龄", help: "您计划停止工作并开始提取的年龄。" },
      annualContribution: { label: "年度供款", help: "每年增加到本金中的金额，包括雇主匹配部分。" },
      expectedReturn: { label: "预期年回报率", help: "长期名义投资回报率（不计通胀），百分比。" },
      targetIncome: { label: "退休目标收入", help: "退休后计划每年从本金中提取的金额。" },
      lifeExpectancy: { label: "预期寿命", help: "希望本金支持您到的年龄（默认85）。" },
    },
    outputs: {
      potAtRetirement: { label: "退休时本金", help: "退休年龄时预测的名义本金价值。" },
      safeAnnualIncome: { label: "安全年收入（4%规则）", help: "按4%安全提取启发式可持续支撑的收入。" },
      yearsUntilExhaustion: { label: "可持续年数", help: "按目标支出本金可维持的年数（以预期寿命为上限）。" },
      realValueAtRetirement: { label: "实际价值（当前货币）", help: "按2.5%长期通胀调整后的本金价值。" },
    },
    errors: {
      retirementBeforeCurrent: "退休年龄必须大于当前年龄。",
      lifeBeforeRetirement: "预期寿命必须大于退休年龄。",
    },
    faq: [
      {
        q: "什么是4%规则？",
        a: "源自Trinity Study (1998)的启发式：第一年提取本金的4%，之后每年按通胀调整，历史上有较高概率支撑30年。",
      },
      {
        q: "实际价值是如何计算的？",
        a: "将预测的名义本金除以 (1 + 通胀)^距退休年数，假定年通胀率为2.5%。",
      },
      {
        q: "应假设多少回报率？",
        a: "长期股票回报率历史约为名义6%–8%，平衡型组合4%–6%。保守规划常用4%–5%。",
      },
    ],
  },

  ja: {
    title: "年金引き出し計算機",
    short: "退職資産・安全な収入・引き出し継続年数を予測します。",
    description:
      "退職時の年金資産、4%ルールによる安全年収、目標支出での持続年数、インフレ調整後の実質価値を概算します。",
    keywords: [
      "年金計算機",
      "年金引き出し",
      "4パーセントルール",
      "安全引き出し率",
      "FIRE",
      "退職収入",
      "退職資産",
    ],
    inputs: {
      currentPot: { label: "現在の年金資産", help: "現在の退職貯蓄の合計額。" },
      currentAge: { label: "現在の年齢", help: "あなたの現在の年齢（歳）。" },
      retirementAge: { label: "退職年齢", help: "仕事をやめ、引き出しを始める予定の年齢。" },
      annualContribution: { label: "年間拠出額", help: "雇用主のマッチを含めて毎年資産に追加する金額。" },
      expectedReturn: { label: "想定年率リターン", help: "インフレ前の長期名目運用利回り（％）。" },
      targetIncome: { label: "退職後の目標収入", help: "退職後に資産から毎年引き出す予定の金額。" },
      lifeExpectancy: { label: "想定寿命", help: "資産で支えたい年齢（既定85）。" },
    },
    outputs: {
      potAtRetirement: { label: "退職時の資産", help: "退職年齢時点の予測名目資産額。" },
      safeAnnualIncome: { label: "安全年収（4%ルール）", help: "4%安全引き出しヒューリスティックで持続可能な収入。" },
      yearsUntilExhaustion: { label: "枯渇までの年数", help: "目標支出の下で資産が持続する年数（想定寿命まで）。" },
      realValueAtRetirement: { label: "実質価値（現在の貨幣価値）", help: "年率2.5%の長期インフレを調整した資産価値。" },
    },
    errors: {
      retirementBeforeCurrent: "退職年齢は現在の年齢より後でなければなりません。",
      lifeBeforeRetirement: "想定寿命は退職年齢より後でなければなりません。",
    },
    faq: [
      {
        q: "4%ルールとは？",
        a: "Trinity Study (1998) によるヒューリスティック：初年に資産の4%を引き出し、以後毎年インフレ調整した場合、歴史的に30年間高確率で持続しました。",
      },
      {
        q: "実質価値はどう計算しますか？",
        a: "予測名目資産を (1 + インフレ率)^退職までの年数 で割ります（インフレは年率2.5%を想定）。",
      },
      {
        q: "想定リターンはどの程度？",
        a: "長期の歴史的株式リターンは名目で約6〜8%、バランス型で4〜6%。保守的な計画では4〜5%を用いることが多いです。",
      },
    ],
  },

  ko: {
    title: "연금 인출 계산기",
    short: "은퇴 자산, 안전 소득, 인출 지속 연수를 예측합니다.",
    description:
      "은퇴 시점의 연금 자산, 4% 규칙에 따른 안전한 연간 소득, 목표 지출 시 자산 지속 연수, 인플레이션 조정 실질 가치를 추정합니다.",
    keywords: [
      "연금 계산기",
      "연금 인출",
      "4퍼센트 규칙",
      "안전 인출률",
      "FIRE",
      "은퇴 소득",
      "은퇴 자산",
    ],
    inputs: {
      currentPot: { label: "현재 연금 자산", help: "현재 은퇴 저축의 총 가치." },
      currentAge: { label: "현재 나이", help: "현재 나이(년)." },
      retirementAge: { label: "은퇴 나이", help: "일을 그만두고 인출을 시작할 예정인 나이." },
      annualContribution: { label: "연간 기여금", help: "고용주 매칭 포함, 매년 자산에 추가하는 금액." },
      expectedReturn: { label: "예상 연 수익률", help: "인플레이션 전 장기 명목 투자 수익률 (%)." },
      targetIncome: { label: "은퇴 목표 소득", help: "은퇴 후 자산에서 매년 인출할 계획인 금액." },
      lifeExpectancy: { label: "기대 수명", help: "자산이 부양해야 할 나이(기본 85)." },
    },
    outputs: {
      potAtRetirement: { label: "은퇴 시 자산", help: "은퇴 나이의 예상 명목 자산 가치." },
      safeAnnualIncome: { label: "안전 연 소득 (4% 규칙)", help: "4% 안전 인출 휴리스틱으로 지속 가능한 소득." },
      yearsUntilExhaustion: { label: "고갈까지 연수", help: "목표 지출 시 자산이 지속되는 연수(기대 수명 한도)." },
      realValueAtRetirement: { label: "실질 가치 (현재 화폐)", help: "연 2.5% 장기 인플레이션을 조정한 자산 가치." },
    },
    errors: {
      retirementBeforeCurrent: "은퇴 나이는 현재 나이보다 커야 합니다.",
      lifeBeforeRetirement: "기대 수명은 은퇴 나이보다 커야 합니다.",
    },
    faq: [
      {
        q: "4% 규칙이란?",
        a: "Trinity Study(1998)의 휴리스틱: 첫 해 자산의 4%를 인출하고 매년 인플레이션에 맞춰 조정하면 역사적으로 30년간 지속될 확률이 높았습니다.",
      },
      {
        q: "실질 가치는 어떻게 계산되나요?",
        a: "예상 명목 자산을 (1 + 인플레이션)^은퇴까지 연수로 나눕니다. 인플레이션은 연 2.5%로 가정합니다.",
      },
      {
        q: "어떤 수익률을 가정해야 하나요?",
        a: "장기 주식 수익률은 명목 약 6~8%, 균형 포트폴리오는 4~6%입니다. 보수적 계획은 보통 4~5%를 사용합니다.",
      },
    ],
  },

  hi: {
    title: "पेंशन निकासी कैलकुलेटर",
    short: "अपनी पेंशन राशि, सुरक्षित आय और निकासी की अवधि का अनुमान लगाएँ।",
    description:
      "रिटायरमेंट पर अपनी पेंशन राशि, 4% नियम के तहत सुरक्षित वार्षिक आय, लक्षित खर्च पर राशि कितने वर्ष चलेगी, और मुद्रास्फीति-समायोजित वास्तविक मूल्य का अनुमान लगाएँ।",
    keywords: [
      "पेंशन कैलकुलेटर",
      "पेंशन निकासी",
      "4 प्रतिशत नियम",
      "सुरक्षित निकासी दर",
      "FIRE",
      "रिटायरमेंट आय",
      "पेंशन राशि",
    ],
    inputs: {
      currentPot: { label: "वर्तमान पेंशन राशि", help: "आज की तारीख में आपकी सेवानिवृत्ति बचत का कुल मूल्य।" },
      currentAge: { label: "वर्तमान आयु", help: "आपकी वर्तमान आयु (वर्ष)।" },
      retirementAge: { label: "सेवानिवृत्ति आयु", help: "जिस आयु में आप काम बंद कर निकासी शुरू करने की योजना बनाते हैं।" },
      annualContribution: { label: "वार्षिक योगदान", help: "नियोक्ता योगदान सहित प्रति वर्ष आप जो राशि जोड़ते हैं।" },
      expectedReturn: { label: "अपेक्षित वार्षिक रिटर्न", help: "मुद्रास्फीति से पहले दीर्घकालिक नाममात्र निवेश रिटर्न (%)." },
      targetIncome: { label: "लक्षित सेवानिवृत्ति आय", help: "सेवानिवृत्ति में हर साल राशि से निकालने की योजना।" },
      lifeExpectancy: { label: "जीवन प्रत्याशा", help: "जिस आयु तक राशि आपको सहारा देनी चाहिए (डिफ़ॉल्ट 85)।" },
    },
    outputs: {
      potAtRetirement: { label: "सेवानिवृत्ति पर राशि", help: "सेवानिवृत्ति आयु पर अनुमानित नाममात्र राशि मूल्य।" },
      safeAnnualIncome: { label: "सुरक्षित वार्षिक आय (4% नियम)", help: "4% सुरक्षित निकासी अनुमान के तहत निरंतर सहन योग्य आय।" },
      yearsUntilExhaustion: { label: "समाप्ति तक वर्ष", help: "लक्षित खर्च पर राशि कितने वर्ष चलेगी (जीवन प्रत्याशा तक सीमित)।" },
      realValueAtRetirement: { label: "वास्तविक मूल्य (आज की मुद्रा)", help: "2.5% दीर्घकालिक मुद्रास्फीति के अनुसार समायोजित मूल्य।" },
    },
    errors: {
      retirementBeforeCurrent: "सेवानिवृत्ति आयु वर्तमान आयु से अधिक होनी चाहिए।",
      lifeBeforeRetirement: "जीवन प्रत्याशा सेवानिवृत्ति आयु से अधिक होनी चाहिए।",
    },
    faq: [
      {
        q: "4% नियम क्या है?",
        a: "Trinity Study (1998) से अनुमान: पहले वर्ष राशि का 4% निकालें और हर साल मुद्रास्फीति के अनुसार समायोजित करें—ऐतिहासिक रूप से इसकी 30 वर्ष चलने की उच्च संभावना थी।",
      },
      {
        q: "वास्तविक मूल्य कैसे निकाला जाता है?",
        a: "अनुमानित नाममात्र राशि को (1 + मुद्रास्फीति)^सेवानिवृत्ति-तक-वर्ष से विभाजित किया जाता है; मुद्रास्फीति वार्षिक 2.5% मानी जाती है।",
      },
      {
        q: "मुझे कौन-सा रिटर्न मानना चाहिए?",
        a: "दीर्घकालिक इक्विटी रिटर्न ऐतिहासिक रूप से लगभग 6–8% नाममात्र, संतुलित पोर्टफोलियो 4–6%। रूढ़िवादी योजना अक्सर 4–5% का उपयोग करती है।",
      },
    ],
  },
};

export default i18n;
