import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Period & Menstrual Cycle Tracker",
    short: "Predict your next period, ovulation date, and fertile window based on your cycle.",
    description:
      "Free period tracker and menstrual cycle calculator. Enter your last period date and cycle length to predict your next period, ovulation, and fertile window.",
    keywords: [
      "period calculator",
      "menstrual cycle tracker",
      "ovulation calculator",
      "fertile window calculator",
      "next period date",
      "fertility calendar",
      "period predictor",
    ],
    inputs: {
      lastPeriodDate: {
        label: "First day of last period",
        help: "Enter the date your most recent period started (YYYY-MM-DD).",
      },
      cycleLength: {
        label: "Cycle length (days)",
        help: "The average number of days from the start of one period to the start of the next. Typical range: 21–35 days.",
      },
      periodLength: {
        label: "Period length (days)",
        help: "How many days your period typically lasts. Common range: 2–10 days.",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "Next Period Date",
        help: "Predicted start date of your next menstrual period.",
      },
      ovulationDate: {
        label: "Ovulation Date",
        help: "Estimated ovulation date, approximately 14 days before your next period.",
      },
      fertileWindowStart: {
        label: "Fertile Window Start",
        help: "Start of your fertile window — 5 days before estimated ovulation.",
      },
      fertileWindowEnd: {
        label: "Fertile Window End",
        help: "End of your fertile window — 1 day after estimated ovulation.",
      },
      daysUntilNextPeriod: {
        label: "Days Until Next Period",
        help: "Number of days from your last period start until your next predicted period.",
      },
    },
    errors: {
      invalidDate: "Please enter a valid date in YYYY-MM-DD format.",
      cycleTooShort: "Cycle length must be at least 21 days.",
      cycleTooLong: "Cycle length cannot exceed 35 days.",
    },
    faq: [
      {
        q: "How accurate is the period prediction?",
        a: "Predictions are estimates based on an assumed regular cycle. Actual dates can vary due to stress, illness, hormonal changes, and other factors. The more consistent your cycle, the more accurate the prediction.",
      },
      {
        q: "What is the fertile window?",
        a: "The fertile window is the period of time during which pregnancy is possible. It spans approximately 6 days: the 5 days before ovulation and the day of ovulation itself. Sperm can survive in the reproductive tract for up to 5 days, while the egg is viable for about 24 hours after ovulation.",
      },
      {
        q: "When does ovulation occur?",
        a: "Ovulation typically occurs 14 days before the start of the next period, regardless of cycle length. For a 28-day cycle, that is around day 14. For a 35-day cycle, it is around day 21.",
      },
      {
        q: "Can I use this calculator for birth control?",
        a: "No. This calculator is for informational purposes only and is not a reliable form of contraception. Natural family planning methods require careful tracking over many cycles and guidance from a healthcare professional.",
      },
      {
        q: "What if my cycle is irregular?",
        a: "This calculator assumes a regular cycle length. If your periods are irregular, predictions will be less reliable. Track your cycle over several months to identify patterns, and consult a gynecologist if irregularity is a concern.",
      },
    ],
  },
  pt: {
    title: "Period & Menstrual Cycle Tracker",
    short: "Predict your next period, ovulation date, and fertile window based on your cycle.",
    description:
      "Free period tracker and menstrual cycle calculator. Enter your last period date and cycle length to predict your next period, ovulation, and fertile window.",
    keywords: [
      "period calculator",
      "menstrual cycle tracker",
      "ovulation calculator",
      "fertile window calculator",
      "next period date",
      "fertility calendar",
      "period predictor",
    ],
    inputs: {
      lastPeriodDate: {
        label: "First day of last period",
        help: "Enter the date your most recent period started (YYYY-MM-DD).",
      },
      cycleLength: {
        label: "Cycle length (days)",
        help: "The average number of days from the start of one period to the start of the next. Typical range: 21–35 days.",
      },
      periodLength: {
        label: "Period length (days)",
        help: "How many days your period typically lasts. Common range: 2–10 days.",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "Next Period Date",
        help: "Predicted start date of your next menstrual period.",
      },
      ovulationDate: {
        label: "Ovulation Date",
        help: "Estimated ovulation date, approximately 14 days before your next period.",
      },
      fertileWindowStart: {
        label: "Fertile Window Start",
        help: "Start of your fertile window — 5 days before estimated ovulation.",
      },
      fertileWindowEnd: {
        label: "Fertile Window End",
        help: "End of your fertile window — 1 day after estimated ovulation.",
      },
      daysUntilNextPeriod: {
        label: "Days Until Next Period",
        help: "Number of days from your last period start until your next predicted period.",
      },
    },
    errors: {
      invalidDate: "Please enter a valid date in YYYY-MM-DD format.",
      cycleTooShort: "Cycle length must be at least 21 days.",
      cycleTooLong: "Cycle length cannot exceed 35 days.",
    },
    faq: [
      {
        q: "How accurate is the period prediction?",
        a: "Predictions are estimates based on an assumed regular cycle. Actual dates can vary due to stress, illness, hormonal changes, and other factors. The more consistent your cycle, the more accurate the prediction.",
      },
      {
        q: "What is the fertile window?",
        a: "The fertile window is the period of time during which pregnancy is possible. It spans approximately 6 days: the 5 days before ovulation and the day of ovulation itself. Sperm can survive in the reproductive tract for up to 5 days, while the egg is viable for about 24 hours after ovulation.",
      },
      {
        q: "When does ovulation occur?",
        a: "Ovulation typically occurs 14 days before the start of the next period, regardless of cycle length. For a 28-day cycle, that is around day 14. For a 35-day cycle, it is around day 21.",
      },
      {
        q: "Can I use this calculator for birth control?",
        a: "No. This calculator is for informational purposes only and is not a reliable form of contraception. Natural family planning methods require careful tracking over many cycles and guidance from a healthcare professional.",
      },
      {
        q: "What if my cycle is irregular?",
        a: "This calculator assumes a regular cycle length. If your periods are irregular, predictions will be less reliable. Track your cycle over several months to identify patterns, and consult a gynecologist if irregularity is a concern.",
      },
    ],
  },
  id: {
    title: "Period & Menstrual Cycle Tracker",
    short: "Predict your next period, ovulation date, and fertile window based on your cycle.",
    description:
      "Free period tracker and menstrual cycle calculator. Enter your last period date and cycle length to predict your next period, ovulation, and fertile window.",
    keywords: [
      "period calculator",
      "menstrual cycle tracker",
      "ovulation calculator",
      "fertile window calculator",
      "next period date",
      "fertility calendar",
      "period predictor",
    ],
    inputs: {
      lastPeriodDate: {
        label: "First day of last period",
        help: "Enter the date your most recent period started (YYYY-MM-DD).",
      },
      cycleLength: {
        label: "Cycle length (days)",
        help: "The average number of days from the start of one period to the start of the next. Typical range: 21–35 days.",
      },
      periodLength: {
        label: "Period length (days)",
        help: "How many days your period typically lasts. Common range: 2–10 days.",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "Next Period Date",
        help: "Predicted start date of your next menstrual period.",
      },
      ovulationDate: {
        label: "Ovulation Date",
        help: "Estimated ovulation date, approximately 14 days before your next period.",
      },
      fertileWindowStart: {
        label: "Fertile Window Start",
        help: "Start of your fertile window — 5 days before estimated ovulation.",
      },
      fertileWindowEnd: {
        label: "Fertile Window End",
        help: "End of your fertile window — 1 day after estimated ovulation.",
      },
      daysUntilNextPeriod: {
        label: "Days Until Next Period",
        help: "Number of days from your last period start until your next predicted period.",
      },
    },
    errors: {
      invalidDate: "Please enter a valid date in YYYY-MM-DD format.",
      cycleTooShort: "Cycle length must be at least 21 days.",
      cycleTooLong: "Cycle length cannot exceed 35 days.",
    },
    faq: [
      {
        q: "How accurate is the period prediction?",
        a: "Predictions are estimates based on an assumed regular cycle. Actual dates can vary due to stress, illness, hormonal changes, and other factors. The more consistent your cycle, the more accurate the prediction.",
      },
      {
        q: "What is the fertile window?",
        a: "The fertile window is the period of time during which pregnancy is possible. It spans approximately 6 days: the 5 days before ovulation and the day of ovulation itself. Sperm can survive in the reproductive tract for up to 5 days, while the egg is viable for about 24 hours after ovulation.",
      },
      {
        q: "When does ovulation occur?",
        a: "Ovulation typically occurs 14 days before the start of the next period, regardless of cycle length. For a 28-day cycle, that is around day 14. For a 35-day cycle, it is around day 21.",
      },
      {
        q: "Can I use this calculator for birth control?",
        a: "No. This calculator is for informational purposes only and is not a reliable form of contraception. Natural family planning methods require careful tracking over many cycles and guidance from a healthcare professional.",
      },
      {
        q: "What if my cycle is irregular?",
        a: "This calculator assumes a regular cycle length. If your periods are irregular, predictions will be less reliable. Track your cycle over several months to identify patterns, and consult a gynecologist if irregularity is a concern.",
      },
    ],
  },


  tr: {
    title: "Adet & Menstrüasyon Döngüsü Takipçisi",
    short: "Döngünüze göre bir sonraki adedinizi, yumurtlama tarihinizi ve doğurgan pencerenizi tahmin edin.",
    description:
      "Ücretsiz adet takipçisi ve menstrüasyon döngüsü hesaplayıcısı. Son adedinizin tarihini ve döngü uzunluğunuzu girerek bir sonraki adedinizi, yumurtlamanızı ve doğurgan pencerenizi tahmin edin.",
    keywords: [
      "adet hesaplayıcı",
      "menstrüasyon döngüsü takibi",
      "yumurtlama hesaplayıcı",
      "doğurgan pencere",
      "sonraki adet tarihi",
      "doğurganlık takvimi",
      "adet tahmini",
    ],
    inputs: {
      lastPeriodDate: {
        label: "Son adedin ilk günü",
        help: "En son adedinizin başladığı tarihi girin (YYYY-AA-GG formatında).",
      },
      cycleLength: {
        label: "Döngü uzunluğu (gün)",
        help: "Bir adetin başlangıcından bir sonrakinin başlangıcına kadar geçen ortalama gün sayısı. Tipik aralık: 21–35 gün.",
      },
      periodLength: {
        label: "Adet süresi (gün)",
        help: "Adedinizin genellikle kaç gün sürdüğü. Yaygın aralık: 2–10 gün.",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "Sonraki Adet Tarihi",
        help: "Bir sonraki menstrüasyon döneminin tahmini başlangıç tarihi.",
      },
      ovulationDate: {
        label: "Yumurtlama Tarihi",
        help: "Tahmini yumurtlama tarihi — bir sonraki adedinizden yaklaşık 14 gün önce.",
      },
      fertileWindowStart: {
        label: "Doğurgan Pencere Başlangıcı",
        help: "Doğurgan pencerenizin başlangıcı — tahmini yumurtlamadan 5 gün önce.",
      },
      fertileWindowEnd: {
        label: "Doğurgan Pencere Sonu",
        help: "Doğurgan pencerenizin sonu — tahmini yumurtlamadan 1 gün sonra.",
      },
      daysUntilNextPeriod: {
        label: "Sonraki Adete Kalan Gün",
        help: "Son adedinizin başlangıcından bir sonraki tahmini adete kadar olan gün sayısı.",
      },
    },
    errors: {
      invalidDate: "Lütfen YYYY-AA-GG formatında geçerli bir tarih girin.",
      cycleTooShort: "Döngü uzunluğu en az 21 gün olmalıdır.",
      cycleTooLong: "Döngü uzunluğu 35 günü geçemez.",
    },
    faq: [
      {
        q: "Adet tahmini ne kadar doğrudur?",
        a: "Tahminler, düzenli bir döngü varsayımına dayalı tahminlerdir. Stres, hastalık, hormonal değişiklikler ve diğer faktörler nedeniyle gerçek tarihler değişebilir. Döngünüz ne kadar düzenliyse, tahmin o kadar doğru olur.",
      },
      {
        q: "Doğurgan pencere nedir?",
        a: "Doğurgan pencere, hamileliğin mümkün olduğu dönemdir. Yaklaşık 6 günü kapsar: yumurtlamadan önceki 5 gün ve yumurtlama günü. Spermler üreme kanalında 5 güne kadar hayatta kalabilirken, yumurta yumurtlamadan sonra yaklaşık 24 saat canlı kalır.",
      },
      {
        q: "Yumurtlama ne zaman gerçekleşir?",
        a: "Yumurtlama, döngü uzunluğundan bağımsız olarak genellikle bir sonraki adedin başlangıcından 14 gün önce gerçekleşir. 28 günlük bir döngüde bu, yaklaşık 14. gündür. 35 günlük bir döngüde ise yaklaşık 21. gündür.",
      },
      {
        q: "Bu hesaplayıcıyı doğum kontrolü için kullanabilir miyim?",
        a: "Hayır. Bu hesaplayıcı yalnızca bilgilendirme amaçlıdır ve güvenilir bir doğum kontrol yöntemi değildir.",
      },
      {
        q: "Döngüm düzensizse ne yapmalıyım?",
        a: "Bu hesaplayıcı düzenli bir döngü uzunluğu varsayar. Adediniz düzensizse, tahminler daha az güvenilir olacaktır. Birkaç ay boyunca döngünüzü takip edin ve düzensizlik endişe veriyorsa bir jinekologla görüşün.",
      },
    ],
  },

  de: {
    title: "Periodenrechner & Zykluskalender",
    short: "Sagen Sie Ihre nächste Periode, den Eisprung und das fruchtbare Fenster auf Basis Ihres Zyklus voraus.",
    description:
      "Kostenloser Periodenrechner und Menstruationszyklusrechner. Geben Sie das Datum Ihrer letzten Periode und Ihre Zykluslänge ein, um Ihre nächste Periode, den Eisprung und Ihr fruchtbares Fenster vorherzusagen.",
    keywords: [
      "Periodenrechner",
      "Zykluskalender",
      "Eisprung berechnen",
      "fruchtbares Fenster",
      "nächste Periode",
      "Fruchtbarkeitskalender",
      "Menstruationsrechner",
    ],
    inputs: {
      lastPeriodDate: {
        label: "Erster Tag der letzten Periode",
        help: "Geben Sie das Datum ein, an dem Ihre letzte Menstruation begann (JJJJ-MM-TT).",
      },
      cycleLength: {
        label: "Zykluslänge (Tage)",
        help: "Die durchschnittliche Anzahl der Tage vom Beginn einer Periode bis zum Beginn der nächsten. Typischer Bereich: 21–35 Tage.",
      },
      periodLength: {
        label: "Periodendauer (Tage)",
        help: "Wie viele Tage Ihre Periode in der Regel dauert. Üblicher Bereich: 2–10 Tage.",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "Nächste Periode",
        help: "Voraussichtliches Startdatum Ihrer nächsten Menstruationsperiode.",
      },
      ovulationDate: {
        label: "Eisprungdatum",
        help: "Geschätztes Eisprungdatum — etwa 14 Tage vor Ihrer nächsten Periode.",
      },
      fertileWindowStart: {
        label: "Fruchtbares Fenster (Beginn)",
        help: "Beginn Ihres fruchtbaren Fensters — 5 Tage vor dem geschätzten Eisprung.",
      },
      fertileWindowEnd: {
        label: "Fruchtbares Fenster (Ende)",
        help: "Ende Ihres fruchtbaren Fensters — 1 Tag nach dem geschätzten Eisprung.",
      },
      daysUntilNextPeriod: {
        label: "Tage bis zur nächsten Periode",
        help: "Anzahl der Tage vom Beginn Ihrer letzten Periode bis zur nächsten vorhergesagten Periode.",
      },
    },
    errors: {
      invalidDate: "Bitte geben Sie ein gültiges Datum im Format JJJJ-MM-TT ein.",
      cycleTooShort: "Die Zykluslänge muss mindestens 21 Tage betragen.",
      cycleTooLong: "Die Zykluslänge darf 35 Tage nicht überschreiten.",
    },
    faq: [
      {
        q: "Wie genau ist die Periodenvorhersage?",
        a: "Prognosen basieren auf einem angenommenen regelmäßigen Zyklus. Die tatsächlichen Daten können durch Stress, Krankheit, hormonelle Veränderungen und andere Faktoren abweichen. Je regelmäßiger Ihr Zyklus, desto genauer die Vorhersage.",
      },
      {
        q: "Was ist das fruchtbare Fenster?",
        a: "Das fruchtbare Fenster ist der Zeitraum, in dem eine Schwangerschaft möglich ist. Es umfasst etwa 6 Tage: die 5 Tage vor dem Eisprung und den Eissprungtag selbst. Spermien können bis zu 5 Tage im Fortpflanzungstrakt überleben, während die Eizelle etwa 24 Stunden nach dem Eisprung lebensfähig ist.",
      },
      {
        q: "Wann findet der Eisprung statt?",
        a: "Der Eisprung findet unabhängig von der Zykluslänge in der Regel 14 Tage vor dem Beginn der nächsten Periode statt. Bei einem 28-Tage-Zyklus ist das etwa der 14. Tag, bei einem 35-Tage-Zyklus der 21. Tag.",
      },
      {
        q: "Kann ich diesen Rechner zur Verhütung nutzen?",
        a: "Nein. Dieser Rechner dient ausschließlich zu Informationszwecken und ist keine zuverlässige Verhütungsmethode.",
      },
      {
        q: "Was ist, wenn mein Zyklus unregelmäßig ist?",
        a: "Dieser Rechner geht von einer regelmäßigen Zykluslänge aus. Bei unregelmäßigen Zyklen sind die Vorhersagen weniger zuverlässig. Verfolgen Sie Ihren Zyklus über mehrere Monate und konsultieren Sie eine Gynäkologin, wenn Unregelmäßigkeit ein Anliegen ist.",
      },
    ],
  },

  fr: {
    title: "Calculateur de cycle menstruel",
    short: "Prédisez vos prochaines règles, la date d'ovulation et votre fenêtre de fertilité selon votre cycle.",
    description:
      "Calculateur de cycle menstruel et suivi des règles gratuit. Entrez la date de vos dernières règles et la durée de votre cycle pour prédire vos prochaines règles, l'ovulation et la fenêtre fertile.",
    keywords: [
      "calculateur règles",
      "suivi cycle menstruel",
      "calculateur ovulation",
      "fenêtre fertile",
      "prochaines règles",
      "calendrier fertilité",
      "prédiction règles",
    ],
    inputs: {
      lastPeriodDate: {
        label: "Premier jour des dernières règles",
        help: "Entrez la date de début de vos dernières règles (AAAA-MM-JJ).",
      },
      cycleLength: {
        label: "Durée du cycle (jours)",
        help: "Nombre moyen de jours du début d'une période au début de la suivante. Plage habituelle : 21–35 jours.",
      },
      periodLength: {
        label: "Durée des règles (jours)",
        help: "Nombre de jours que durent habituellement vos règles. Plage habituelle : 2–10 jours.",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "Prochaines règles",
        help: "Date de début prévue de vos prochaines règles.",
      },
      ovulationDate: {
        label: "Date d'ovulation",
        help: "Date d'ovulation estimée — environ 14 jours avant vos prochaines règles.",
      },
      fertileWindowStart: {
        label: "Début de la fenêtre fertile",
        help: "Début de votre fenêtre fertile — 5 jours avant l'ovulation estimée.",
      },
      fertileWindowEnd: {
        label: "Fin de la fenêtre fertile",
        help: "Fin de votre fenêtre fertile — 1 jour après l'ovulation estimée.",
      },
      daysUntilNextPeriod: {
        label: "Jours avant les prochaines règles",
        help: "Nombre de jours entre le début de vos dernières règles et les prochaines prédites.",
      },
    },
    errors: {
      invalidDate: "Veuillez entrer une date valide au format AAAA-MM-JJ.",
      cycleTooShort: "La durée du cycle doit être d'au moins 21 jours.",
      cycleTooLong: "La durée du cycle ne peut pas dépasser 35 jours.",
    },
    faq: [
      {
        q: "Quelle est la précision des prédictions ?",
        a: "Les prédictions sont basées sur un cycle supposé régulier. Les dates réelles peuvent varier en raison du stress, d'une maladie, de changements hormonaux et d'autres facteurs. Plus votre cycle est régulier, plus la prédiction est précise.",
      },
      {
        q: "Qu'est-ce que la fenêtre fertile ?",
        a: "La fenêtre fertile est la période durant laquelle une grossesse est possible. Elle couvre environ 6 jours : les 5 jours précédant l'ovulation et le jour de l'ovulation lui-même. Les spermatozoïdes peuvent survivre jusqu'à 5 jours dans les voies génitales, tandis que l'ovule est viable environ 24 heures après l'ovulation.",
      },
      {
        q: "Quand a lieu l'ovulation ?",
        a: "L'ovulation survient généralement 14 jours avant le début des règles suivantes, quelle que soit la durée du cycle. Pour un cycle de 28 jours, c'est vers le 14e jour ; pour un cycle de 35 jours, c'est vers le 21e jour.",
      },
      {
        q: "Puis-je utiliser ce calculateur comme contraceptif ?",
        a: "Non. Cet outil est fourni à titre informatif uniquement et ne constitue pas une méthode contraceptive fiable.",
      },
      {
        q: "Que faire si mon cycle est irrégulier ?",
        a: "Ce calculateur suppose une durée de cycle régulière. Si vos règles sont irrégulières, les prédictions seront moins fiables. Suivez votre cycle sur plusieurs mois et consultez un gynécologue si l'irrégularité vous préoccupe.",
      },
    ],
  },

  es: {
    title: "Calculadora de Ciclo Menstrual",
    short: "Predice tu próxima menstruación, la fecha de ovulación y tu ventana fértil según tu ciclo.",
    description:
      "Calculadora y seguidor de ciclo menstrual gratuito. Introduce la fecha de tu última menstruación y la duración del ciclo para predecir tu próxima regla, la ovulación y la ventana fértil.",
    keywords: [
      "calculadora periodo",
      "seguimiento ciclo menstrual",
      "calculadora ovulación",
      "ventana fértil",
      "próxima menstruación",
      "calendario fertilidad",
      "predictor de regla",
    ],
    inputs: {
      lastPeriodDate: {
        label: "Primer día de la última menstruación",
        help: "Introduce la fecha de inicio de tu última menstruación (AAAA-MM-DD).",
      },
      cycleLength: {
        label: "Duración del ciclo (días)",
        help: "Número promedio de días desde el inicio de una regla hasta el inicio de la siguiente. Rango típico: 21–35 días.",
      },
      periodLength: {
        label: "Duración del periodo (días)",
        help: "Cuántos días dura habitualmente tu menstruación. Rango común: 2–10 días.",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "Próxima Menstruación",
        help: "Fecha de inicio prevista de tu próxima menstruación.",
      },
      ovulationDate: {
        label: "Fecha de Ovulación",
        help: "Fecha de ovulación estimada — aproximadamente 14 días antes de tu próxima regla.",
      },
      fertileWindowStart: {
        label: "Inicio de la Ventana Fértil",
        help: "Inicio de tu ventana fértil — 5 días antes de la ovulación estimada.",
      },
      fertileWindowEnd: {
        label: "Fin de la Ventana Fértil",
        help: "Fin de tu ventana fértil — 1 día después de la ovulación estimada.",
      },
      daysUntilNextPeriod: {
        label: "Días Hasta la Próxima Regla",
        help: "Número de días desde el inicio de tu última menstruación hasta la próxima predicha.",
      },
    },
    errors: {
      invalidDate: "Por favor, introduce una fecha válida en formato AAAA-MM-DD.",
      cycleTooShort: "La duración del ciclo debe ser al menos 21 días.",
      cycleTooLong: "La duración del ciclo no puede superar los 35 días.",
    },
    faq: [
      {
        q: "¿Qué tan precisa es la predicción?",
        a: "Las predicciones se basan en un ciclo regular asumido. Las fechas reales pueden variar por estrés, enfermedad, cambios hormonales u otros factores. Cuanto más regular sea tu ciclo, más precisa será la predicción.",
      },
      {
        q: "¿Qué es la ventana fértil?",
        a: "La ventana fértil es el período durante el cual el embarazo es posible. Abarca aproximadamente 6 días: los 5 días antes de la ovulación y el día de la ovulación. Los espermatozoides pueden sobrevivir hasta 5 días en el tracto reproductivo, mientras que el óvulo es viable unas 24 horas después de la ovulación.",
      },
      {
        q: "¿Cuándo ocurre la ovulación?",
        a: "La ovulación suele ocurrir 14 días antes del inicio del siguiente período, independientemente de la duración del ciclo. Para un ciclo de 28 días, eso es alrededor del día 14; para uno de 35 días, alrededor del día 21.",
      },
      {
        q: "¿Puedo usar esta calculadora como método anticonceptivo?",
        a: "No. Esta herramienta es solo para fines informativos y no es un método anticonceptivo fiable.",
      },
      {
        q: "¿Qué pasa si mi ciclo es irregular?",
        a: "Esta calculadora asume una duración de ciclo regular. Si tus períodos son irregulares, las predicciones serán menos confiables. Registra tu ciclo durante varios meses y consulta a un ginecólogo si la irregularidad te preocupa.",
      },
    ],
  },

  it: {
    title: "Calcolatore del Ciclo Mestruale",
    short: "Prevedi il tuo prossimo ciclo, la data dell'ovulazione e la finestra fertile in base al tuo ciclo.",
    description:
      "Calcolatore e tracker del ciclo mestruale gratuito. Inserisci la data dell'ultima mestruazione e la durata del ciclo per prevedere la prossima mestruazione, l'ovulazione e la finestra fertile.",
    keywords: [
      "calcolatore ciclo mestruale",
      "tracker mestruazioni",
      "calcolatore ovulazione",
      "finestra fertile",
      "prossime mestruazioni",
      "calendario fertilità",
      "previsione ciclo",
    ],
    inputs: {
      lastPeriodDate: {
        label: "Primo giorno dell'ultima mestruazione",
        help: "Inserisci la data di inizio della tua ultima mestruazione (AAAA-MM-GG).",
      },
      cycleLength: {
        label: "Durata del ciclo (giorni)",
        help: "Numero medio di giorni dall'inizio di una mestruazione all'inizio della successiva. Intervallo tipico: 21–35 giorni.",
      },
      periodLength: {
        label: "Durata del flusso (giorni)",
        help: "Quanti giorni durano solitamente le tue mestruazioni. Intervallo comune: 2–10 giorni.",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "Prossima Mestruazione",
        help: "Data di inizio prevista della tua prossima mestruazione.",
      },
      ovulationDate: {
        label: "Data di Ovulazione",
        help: "Data di ovulazione stimata — circa 14 giorni prima della prossima mestruazione.",
      },
      fertileWindowStart: {
        label: "Inizio Finestra Fertile",
        help: "Inizio della finestra fertile — 5 giorni prima dell'ovulazione stimata.",
      },
      fertileWindowEnd: {
        label: "Fine Finestra Fertile",
        help: "Fine della finestra fertile — 1 giorno dopo l'ovulazione stimata.",
      },
      daysUntilNextPeriod: {
        label: "Giorni alla Prossima Mestruazione",
        help: "Numero di giorni dall'inizio dell'ultima mestruazione alla prossima prevista.",
      },
    },
    errors: {
      invalidDate: "Inserisci una data valida nel formato AAAA-MM-GG.",
      cycleTooShort: "La durata del ciclo deve essere di almeno 21 giorni.",
      cycleTooLong: "La durata del ciclo non può superare 35 giorni.",
    },
    faq: [
      {
        q: "Quanto è precisa la previsione?",
        a: "Le previsioni si basano su un ciclo regolare presunto. Le date reali possono variare a causa di stress, malattia, cambiamenti ormonali e altri fattori. Più il tuo ciclo è regolare, più accurata sarà la previsione.",
      },
      {
        q: "Cos'è la finestra fertile?",
        a: "La finestra fertile è il periodo in cui è possibile una gravidanza. Copre circa 6 giorni: i 5 giorni prima dell'ovulazione e il giorno dell'ovulazione stesso. Gli spermatozoi possono sopravvivere fino a 5 giorni nel tratto riproduttivo, mentre l'ovulo rimane vitale circa 24 ore dopo l'ovulazione.",
      },
      {
        q: "Quando avviene l'ovulazione?",
        a: "L'ovulazione avviene tipicamente 14 giorni prima dell'inizio del ciclo successivo, indipendentemente dalla durata del ciclo. Per un ciclo di 28 giorni, è intorno al 14° giorno; per uno di 35 giorni, intorno al 21° giorno.",
      },
      {
        q: "Posso usare questo calcolatore come contraccettivo?",
        a: "No. Questo strumento è solo a scopo informativo e non è un metodo contraccettivo affidabile.",
      },
      {
        q: "Cosa fare se il mio ciclo è irregolare?",
        a: "Questo calcolatore presuppone una durata del ciclo regolare. Se i tuoi cicli sono irregolari, le previsioni saranno meno affidabili. Monitora il tuo ciclo per diversi mesi e consulta un ginecologo se l'irregolarità ti preoccupa.",
      },
    ],
  },

  ar: {
    title: "حاسبة الدورة الشهرية",
    short: "توقّعي دورتك القادمة وتاريخ الإباضة ونافذة الخصوبة بناءً على دورتك الشهرية.",
    description:
      "حاسبة ومتتبع الدورة الشهرية المجاني. أدخلي تاريخ آخر دورة وطولها للتنبؤ بالدورة القادمة وتاريخ الإباضة ونافذة الخصوبة.",
    keywords: [
      "حاسبة الدورة الشهرية",
      "متتبع الدورة الشهرية",
      "حاسبة الإباضة",
      "نافذة الخصوبة",
      "الدورة القادمة",
      "تقويم الخصوبة",
      "توقع الحيض",
    ],
    inputs: {
      lastPeriodDate: {
        label: "أول يوم من آخر دورة شهرية",
        help: "أدخلي تاريخ بداية آخر دورة شهرية (بصيغة YYYY-MM-DD).",
      },
      cycleLength: {
        label: "طول الدورة (بالأيام)",
        help: "متوسط عدد الأيام من بداية دورة حتى بداية الدورة التالية. النطاق المعتاد: 21–35 يومًا.",
      },
      periodLength: {
        label: "مدة الحيض (بالأيام)",
        help: "عدد أيام الحيض المعتادة. النطاق الشائع: 2–10 أيام.",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "تاريخ الدورة القادمة",
        help: "التاريخ المتوقع لبدء الدورة الشهرية القادمة.",
      },
      ovulationDate: {
        label: "تاريخ الإباضة",
        help: "التاريخ التقديري للإباضة — قبل الدورة القادمة بحوالي 14 يومًا.",
      },
      fertileWindowStart: {
        label: "بداية نافذة الخصوبة",
        help: "بداية نافذة خصوبتك — قبل الإباضة المقدّرة بـ5 أيام.",
      },
      fertileWindowEnd: {
        label: "نهاية نافذة الخصوبة",
        help: "نهاية نافذة خصوبتك — بعد الإباضة المقدّرة بيوم واحد.",
      },
      daysUntilNextPeriod: {
        label: "الأيام حتى الدورة القادمة",
        help: "عدد الأيام من بداية آخر دورة حتى الدورة القادمة المتوقعة.",
      },
    },
    errors: {
      invalidDate: "يُرجى إدخال تاريخ صحيح بصيغة YYYY-MM-DD.",
      cycleTooShort: "يجب أن يكون طول الدورة 21 يومًا على الأقل.",
      cycleTooLong: "لا يمكن أن يتجاوز طول الدورة 35 يومًا.",
    },
    faq: [
      {
        q: "ما مدى دقة التوقعات؟",
        a: "تستند التوقعات إلى افتراض دورة منتظمة. قد تختلف التواريخ الفعلية بسبب الإجهاد والمرض والتغيرات الهرمونية وعوامل أخرى. كلما كانت دورتك أكثر انتظامًا، كانت التوقعات أكثر دقة.",
      },
      {
        q: "ما نافذة الخصوبة؟",
        a: "نافذة الخصوبة هي الفترة التي يكون فيها الحمل ممكنًا، وتمتد نحو 6 أيام: الأيام الخمسة السابقة للإباضة ويوم الإباضة نفسه. يمكن للحيوانات المنوية البقاء في الجهاز التناسلي حتى 5 أيام، في حين تبقى البويضة صالحة لنحو 24 ساعة بعد الإباضة.",
      },
      {
        q: "متى تحدث الإباضة؟",
        a: "تحدث الإباضة عادةً قبل بداية الدورة التالية بـ14 يومًا بصرف النظر عن طول الدورة. في دورة مدتها 28 يومًا تكون حول اليوم 14، وفي دورة مدتها 35 يومًا تكون حول اليوم 21.",
      },
      {
        q: "هل يمكنني استخدام هذه الحاسبة لتنظيم النسل؟",
        a: "لا. هذه الأداة للأغراض التثقيفية فحسب، وليست وسيلة موثوقة لمنع الحمل.",
      },
      {
        q: "ماذا أفعل إن كانت دورتي غير منتظمة؟",
        a: "تفترض هذه الحاسبة دورة منتظمة الطول. إن كانت دوراتك غير منتظمة فستكون التوقعات أقل موثوقية. تابعي دورتك لعدة أشهر واستشيري طبيبة نساء وتوليد عند الحاجة.",
      },
    ],
  },

  ru: {
    title: "Калькулятор менструального цикла",
    short: "Предсказывайте следующую менструацию, дату овуляции и фертильное окно на основе вашего цикла.",
    description:
      "Бесплатный калькулятор и трекер менструального цикла. Введите дату последней менструации и длину цикла, чтобы рассчитать следующие месячные, овуляцию и фертильное окно.",
    keywords: [
      "калькулятор менструального цикла",
      "трекер месячных",
      "калькулятор овуляции",
      "фертильное окно",
      "следующие месячные",
      "календарь фертильности",
      "прогноз менструации",
    ],
    inputs: {
      lastPeriodDate: {
        label: "Первый день последней менструации",
        help: "Введите дату начала последних месячных (ГГГГ-ММ-ДД).",
      },
      cycleLength: {
        label: "Длина цикла (дни)",
        help: "Среднее количество дней от начала одной менструации до начала следующей. Обычный диапазон: 21–35 дней.",
      },
      periodLength: {
        label: "Длительность менструации (дни)",
        help: "Сколько дней обычно длятся ваши месячные. Типичный диапазон: 2–10 дней.",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "Следующая менструация",
        help: "Прогнозируемая дата начала следующей менструации.",
      },
      ovulationDate: {
        label: "Дата овуляции",
        help: "Расчётная дата овуляции — приблизительно за 14 дней до следующей менструации.",
      },
      fertileWindowStart: {
        label: "Начало фертильного окна",
        help: "Начало фертильного окна — за 5 дней до предполагаемой овуляции.",
      },
      fertileWindowEnd: {
        label: "Конец фертильного окна",
        help: "Конец фертильного окна — на 1 день после предполагаемой овуляции.",
      },
      daysUntilNextPeriod: {
        label: "Дней до следующей менструации",
        help: "Количество дней от начала последней менструации до следующей прогнозируемой.",
      },
    },
    errors: {
      invalidDate: "Пожалуйста, введите корректную дату в формате ГГГГ-ММ-ДД.",
      cycleTooShort: "Длина цикла должна быть не менее 21 дня.",
      cycleTooLong: "Длина цикла не может превышать 35 дней.",
    },
    faq: [
      {
        q: "Насколько точен прогноз?",
        a: "Прогнозы основаны на предположении о регулярном цикле. Реальные даты могут отличаться из-за стресса, болезни, гормональных изменений и других факторов. Чем регулярнее цикл, тем точнее прогноз.",
      },
      {
        q: "Что такое фертильное окно?",
        a: "Фертильное окно — это период, в течение которого возможно наступление беременности. Оно составляет около 6 дней: 5 дней до овуляции и сам день овуляции. Сперматозоиды могут выживать в половых путях до 5 дней, тогда как яйцеклетка жизнеспособна около 24 часов после овуляции.",
      },
      {
        q: "Когда происходит овуляция?",
        a: "Овуляция обычно происходит за 14 дней до начала следующей менструации, вне зависимости от длины цикла. При 28-дневном цикле это примерно 14-й день, при 35-дневном — около 21-го дня.",
      },
      {
        q: "Можно ли использовать этот калькулятор для контрацепции?",
        a: "Нет. Данный инструмент предназначен исключительно для информационных целей и не является надёжным методом контрацепции.",
      },
      {
        q: "Что делать, если цикл нерегулярный?",
        a: "Калькулятор предполагает регулярную длину цикла. При нерегулярных месячных прогнозы будут менее надёжными. Следите за циклом несколько месяцев и проконсультируйтесь с гинекологом при наличии опасений.",
      },
    ],
  },

  zh: {
    title: "月经周期追踪器",
    short: "根据您的月经周期预测下次月经、排卵日期和受孕窗口。",
    description:
      "免费月经周期追踪器和计算器。输入最后一次月经日期和周期长度，预测下次月经、排卵和受孕窗口。",
    keywords: [
      "月经周期计算器",
      "月经追踪器",
      "排卵计算器",
      "受孕窗口",
      "下次月经",
      "生育日历",
      "月经预测",
    ],
    inputs: {
      lastPeriodDate: {
        label: "上次月经第一天",
        help: "请输入上次月经开始的日期（格式：YYYY-MM-DD）。",
      },
      cycleLength: {
        label: "周期长度（天）",
        help: "从一次月经开始到下次月经开始的平均天数。通常为21至35天。",
      },
      periodLength: {
        label: "月经持续天数",
        help: "月经通常持续的天数。常见范围：2至10天。",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "下次月经日期",
        help: "下次月经预计开始的日期。",
      },
      ovulationDate: {
        label: "排卵日期",
        help: "估算的排卵日期——大约在下次月经前14天。",
      },
      fertileWindowStart: {
        label: "受孕窗口开始",
        help: "受孕窗口的开始——排卵估算日前5天。",
      },
      fertileWindowEnd: {
        label: "受孕窗口结束",
        help: "受孕窗口的结束——排卵估算日后1天。",
      },
      daysUntilNextPeriod: {
        label: "距下次月经天数",
        help: "从上次月经开始到下次预测月经的天数。",
      },
    },
    errors: {
      invalidDate: "请输入格式为YYYY-MM-DD的有效日期。",
      cycleTooShort: "周期长度必须至少为21天。",
      cycleTooLong: "周期长度不能超过35天。",
    },
    faq: [
      {
        q: "预测有多准确？",
        a: "预测基于规律周期的假设。实际日期可能因压力、疾病、荷尔蒙变化等因素而不同。您的周期越规律，预测就越准确。",
      },
      {
        q: "什么是受孕窗口？",
        a: "受孕窗口是可能怀孕的时间段，约覆盖6天：排卵前5天和排卵当天。精子在生殖道中可存活最多5天，而卵子在排卵后约24小时内有活力。",
      },
      {
        q: "排卵何时发生？",
        a: "无论周期长短，排卵通常发生在下次月经开始前14天。28天周期约在第14天排卵，35天周期约在第21天排卵。",
      },
      {
        q: "我能用这个计算器避孕吗？",
        a: "不能。本工具仅供参考，不是可靠的避孕方法。",
      },
      {
        q: "如果我的周期不规律怎么办？",
        a: "本计算器假设周期规律。如果月经不规律，预测准确性会降低。请连续追踪几个月，如有担忧请咨询妇科医生。",
      },
    ],
  },

  ja: {
    title: "月経周期トラッカー",
    short: "月経周期に基づいて次の生理日・排卵日・妊娠可能期間を予測します。",
    description:
      "無料の月経周期トラッカー・計算機。最終月経開始日と周期日数を入力するだけで、次の生理日・排卵日・妊娠可能期間を予測します。",
    keywords: [
      "生理日計算機",
      "月経周期トラッカー",
      "排卵日計算機",
      "妊娠可能期間",
      "次の生理日",
      "妊孕性カレンダー",
      "生理予測",
    ],
    inputs: {
      lastPeriodDate: {
        label: "最終月経開始日",
        help: "最後の生理が始まった日付を入力してください（YYYY-MM-DD形式）。",
      },
      cycleLength: {
        label: "月経周期（日数）",
        help: "生理の開始から次の生理の開始までの平均日数。通常は21〜35日です。",
      },
      periodLength: {
        label: "生理期間（日数）",
        help: "生理が通常何日続くかを入力してください。一般的な範囲は2〜10日です。",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "次の生理日",
        help: "次の生理の予測開始日です。",
      },
      ovulationDate: {
        label: "排卵日",
        help: "推定排卵日——次の生理のおよそ14日前です。",
      },
      fertileWindowStart: {
        label: "妊娠可能期間（開始）",
        help: "妊娠可能期間の開始日——推定排卵日の5日前です。",
      },
      fertileWindowEnd: {
        label: "妊娠可能期間（終了）",
        help: "妊娠可能期間の終了日——推定排卵日の1日後です。",
      },
      daysUntilNextPeriod: {
        label: "次の生理まであと何日",
        help: "最終月経開始日から次の予測生理日までの日数です。",
      },
    },
    errors: {
      invalidDate: "YYYY-MM-DD形式で有効な日付を入力してください。",
      cycleTooShort: "月経周期は21日以上である必要があります。",
      cycleTooLong: "月経周期は35日を超えることはできません。",
    },
    faq: [
      {
        q: "予測はどの程度正確ですか？",
        a: "予測は規則的なサイクルを前提にしています。実際の日付はストレス・病気・ホルモン変化などにより異なる場合があります。周期が規則的であるほど予測は正確になります。",
      },
      {
        q: "妊娠可能期間とは何ですか？",
        a: "妊娠可能期間とは妊娠が可能な時期で、約6日間にわたります。排卵の5日前から排卵日当日までです。精子は生殖器内で最大5日間生存でき、卵子は排卵後約24時間受精可能です。",
      },
      {
        q: "排卵はいつ起きますか？",
        a: "排卵は周期の長さにかかわらず、次の生理開始の約14日前に起こります。28日周期なら14日目頃、35日周期なら21日目頃です。",
      },
      {
        q: "この計算機を避妊に使えますか？",
        a: "いいえ。このツールは情報提供のみを目的としており、信頼できる避妊法ではありません。",
      },
      {
        q: "生理不順の場合はどうすればよいですか？",
        a: "この計算機は規則的な周期を前提としています。生理不順の場合、予測の信頼性は低下します。数ヶ月間記録し、不規則さが気になる場合は婦人科医に相談してください。",
      },
    ],
  },

  ko: {
    title: "생리 주기 트래커",
    short: "주기를 기반으로 다음 생리일, 배란일, 임신 가능 기간을 예측하세요.",
    description:
      "무료 생리 주기 트래커 및 계산기. 마지막 생리 시작일과 주기 길이를 입력하면 다음 생리일, 배란일, 임신 가능 기간을 예측할 수 있습니다.",
    keywords: [
      "생리 주기 계산기",
      "월경 주기 트래커",
      "배란일 계산기",
      "임신 가능 기간",
      "다음 생리일",
      "가임기 캘린더",
      "생리 예측",
    ],
    inputs: {
      lastPeriodDate: {
        label: "마지막 생리 첫째 날",
        help: "마지막 생리가 시작된 날짜를 입력하세요 (YYYY-MM-DD 형식).",
      },
      cycleLength: {
        label: "주기 길이 (일수)",
        help: "한 번의 생리 시작부터 다음 생리 시작까지의 평균 일수. 일반적으로 21~35일입니다.",
      },
      periodLength: {
        label: "생리 기간 (일수)",
        help: "생리가 보통 지속되는 일수. 일반적 범위: 2~10일.",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "다음 생리일",
        help: "다음 생리가 예상되는 시작 날짜입니다.",
      },
      ovulationDate: {
        label: "배란일",
        help: "예상 배란일 — 다음 생리 약 14일 전입니다.",
      },
      fertileWindowStart: {
        label: "임신 가능 기간 시작",
        help: "임신 가능 기간의 시작 — 예상 배란일 5일 전입니다.",
      },
      fertileWindowEnd: {
        label: "임신 가능 기간 종료",
        help: "임신 가능 기간의 종료 — 예상 배란일 1일 후입니다.",
      },
      daysUntilNextPeriod: {
        label: "다음 생리까지 남은 일수",
        help: "마지막 생리 시작일부터 다음 예측 생리일까지의 일수입니다.",
      },
    },
    errors: {
      invalidDate: "YYYY-MM-DD 형식의 유효한 날짜를 입력하세요.",
      cycleTooShort: "주기 길이는 최소 21일이어야 합니다.",
      cycleTooLong: "주기 길이는 35일을 초과할 수 없습니다.",
    },
    faq: [
      {
        q: "예측은 얼마나 정확한가요?",
        a: "예측은 규칙적인 주기를 가정합니다. 실제 날짜는 스트레스, 질병, 호르몬 변화 등으로 달라질 수 있습니다. 주기가 규칙적일수록 예측이 더 정확합니다.",
      },
      {
        q: "임신 가능 기간이란 무엇인가요?",
        a: "임신 가능 기간은 임신이 가능한 기간으로 약 6일입니다: 배란 5일 전부터 배란 당일까지. 정자는 생식관에서 최대 5일 생존할 수 있고, 난자는 배란 후 약 24시간 동안 수정 가능합니다.",
      },
      {
        q: "배란은 언제 일어나나요?",
        a: "배란은 주기 길이에 관계없이 보통 다음 생리 시작 14일 전에 일어납니다. 28일 주기라면 약 14일째, 35일 주기라면 약 21일째입니다.",
      },
      {
        q: "이 계산기를 피임에 사용할 수 있나요?",
        a: "아니요. 이 도구는 정보 제공 목적으로만 제공되며 신뢰할 수 있는 피임 방법이 아닙니다.",
      },
      {
        q: "생리 주기가 불규칙하면 어떻게 하나요?",
        a: "이 계산기는 규칙적인 주기를 가정합니다. 불규칙한 경우 예측 정확도가 낮아집니다. 몇 달간 주기를 기록하고 불규칙성이 걱정된다면 산부인과 의사와 상담하세요.",
      },
    ],
  },

  hi: {
    title: "मासिक धर्म चक्र ट्रैकर",
    short: "अपने चक्र के आधार पर अगली माहवारी, ओव्यूलेशन तिथि और उपजाऊ खिड़की का पूर्वानुमान लगाएं।",
    description:
      "निःशुल्क मासिक धर्म चक्र ट्रैकर और कैलकुलेटर। अंतिम माहवारी की तिथि और चक्र की लंबाई दर्ज करें और अगली माहवारी, ओव्यूलेशन और उपजाऊ खिड़की का अनुमान पाएं।",
    keywords: [
      "मासिक धर्म कैलकुलेटर",
      "पीरियड ट्रैकर",
      "ओव्यूलेशन कैलकुलेटर",
      "उपजाऊ खिड़की",
      "अगली माहवारी तिथि",
      "प्रजनन क्षमता कैलेंडर",
      "माहवारी भविष्यवाणी",
    ],
    inputs: {
      lastPeriodDate: {
        label: "अंतिम माहवारी का पहला दिन",
        help: "अपनी अंतिम माहवारी की शुरुआत की तिथि दर्ज करें (YYYY-MM-DD प्रारूप में)।",
      },
      cycleLength: {
        label: "चक्र की लंबाई (दिनों में)",
        help: "एक माहवारी की शुरुआत से अगली माहवारी की शुरुआत तक के औसत दिन। सामान्य सीमा: 21–35 दिन।",
      },
      periodLength: {
        label: "माहवारी की अवधि (दिनों में)",
        help: "आपकी माहवारी आमतौर पर कितने दिन चलती है। सामान्य सीमा: 2–10 दिन।",
      },
    },
    outputs: {
      nextPeriodDate: {
        label: "अगली माहवारी की तिथि",
        help: "आपकी अगली माहवारी की अनुमानित शुरुआत तिथि।",
      },
      ovulationDate: {
        label: "ओव्यूलेशन तिथि",
        help: "अनुमानित ओव्यूलेशन तिथि — अगली माहवारी से लगभग 14 दिन पहले।",
      },
      fertileWindowStart: {
        label: "उपजाऊ खिड़की की शुरुआत",
        help: "आपकी उपजाऊ खिड़की की शुरुआत — अनुमानित ओव्यूलेशन से 5 दिन पहले।",
      },
      fertileWindowEnd: {
        label: "उपजाऊ खिड़की का अंत",
        help: "आपकी उपजाऊ खिड़की का अंत — अनुमानित ओव्यूलेशन के 1 दिन बाद।",
      },
      daysUntilNextPeriod: {
        label: "अगली माहवारी तक के दिन",
        help: "अंतिम माहवारी की शुरुआत से अगली अनुमानित माहवारी तक के दिनों की संख्या।",
      },
    },
    errors: {
      invalidDate: "कृपया YYYY-MM-DD प्रारूप में एक वैध तिथि दर्ज करें।",
      cycleTooShort: "चक्र की लंबाई कम से कम 21 दिन होनी चाहिए।",
      cycleTooLong: "चक्र की लंबाई 35 दिनों से अधिक नहीं हो सकती।",
    },
    faq: [
      {
        q: "पूर्वानुमान कितना सटीक है?",
        a: "पूर्वानुमान एक नियमित चक्र की धारणा पर आधारित हैं। तनाव, बीमारी, हार्मोनल परिवर्तन और अन्य कारकों के कारण वास्तविक तिथियां भिन्न हो सकती हैं। आपका चक्र जितना नियमित होगा, पूर्वानुमान उतना ही सटीक होगा।",
      },
      {
        q: "उपजाऊ खिड़की क्या है?",
        a: "उपजाऊ खिड़की वह समय अवधि है जिसके दौरान गर्भावस्था संभव है। यह लगभग 6 दिनों को कवर करती है: ओव्यूलेशन से 5 दिन पहले और ओव्यूलेशन के दिन। शुक्राणु प्रजनन पथ में 5 दिन तक जीवित रह सकते हैं, जबकि अंडा ओव्यूलेशन के बाद लगभग 24 घंटे जीवित रहता है।",
      },
      {
        q: "ओव्यूलेशन कब होता है?",
        a: "ओव्यूलेशन आमतौर पर चक्र की लंबाई की परवाह किए बिना अगली माहवारी शुरू होने से 14 दिन पहले होता है। 28-दिन के चक्र में यह लगभग 14वें दिन होता है; 35-दिन के चक्र में लगभग 21वें दिन।",
      },
      {
        q: "क्या मैं इस कैलकुलेटर का उपयोग गर्भनिरोधक के रूप में कर सकती हूं?",
        a: "नहीं। यह उपकरण केवल सूचनात्मक उद्देश्यों के लिए है और गर्भनिरोधन का एक विश्वसनीय तरीका नहीं है।",
      },
      {
        q: "यदि मेरा चक्र अनियमित है तो क्या करें?",
        a: "यह कैलकुलेटर एक नियमित चक्र की लंबाई मानता है। यदि आपकी माहवारी अनियमित है, तो पूर्वानुमान कम विश्वसनीय होंगे। कई महीनों तक अपने चक्र को ट्रैक करें और यदि अनियमितता चिंताजनक है तो स्त्री रोग विशेषज्ञ से परामर्श करें।",
      },
    ],
  },
};

export default i18n;
