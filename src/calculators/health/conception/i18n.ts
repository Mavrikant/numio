import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Conception Date Calculator",
    short: "Estimate your conception date from your last menstrual period or due date.",
    description:
      "Free conception date calculator. Enter your last menstrual period or due date to estimate when conception occurred and your fertile window.",
    keywords: [
      "conception date calculator",
      "when did I conceive",
      "fertile window calculator",
      "ovulation calculator",
      "due date calculator",
      "last menstrual period",
      "pregnancy conception",
    ],
    inputs: {
      mode: {
        label: "Calculation mode",
        help: "Calculate from last menstrual period (LMP) or from the known due date.",
      },
      dateInput: {
        label: "Date",
        help: "Enter the date of your last menstrual period (LMP) or your estimated due date.",
      },
      cycleLength: {
        label: "Menstrual cycle length (days)",
        help: "Average length of your menstrual cycle. Typical range is 21–35 days; 28 days is average.",
      },
    },
    outputs: {
      conceptionDate: {
        label: "Estimated conception date",
        help: "The approximate date when fertilisation most likely occurred.",
      },
      fertileWindowStart: {
        label: "Fertile window start",
        help: "Beginning of the likely fertile period (5 days before estimated conception).",
      },
      fertileWindowEnd: {
        label: "Fertile window end",
        help: "End of the likely fertile period (5 days after estimated conception).",
      },
      estimatedDueDate: {
        label: "Estimated due date",
        help: "Expected delivery date, approximately 266 days (38 weeks) after conception.",
      },
    },
    options: {
      mode: {
        from_lmp: "From last menstrual period (LMP)",
        from_duedate: "From due date",
      },
    },
    errors: {
      invalidDate: "Please enter a valid date in YYYY-MM-DD format.",
      cycleLengthOutOfRange: "Cycle length must be between 21 and 35 days.",
    },
    faq: [
      {
        q: "How is the conception date calculated from the LMP?",
        a: "Ovulation — and thus conception — typically occurs 14 days before the end of a 28-day menstrual cycle, or equivalently about 14 days after the start of the LMP for a standard cycle. For cycles longer or shorter than 28 days, the ovulation day shifts accordingly. This calculator adds (cycle length − 14) days to your LMP date to estimate conception.",
      },
      {
        q: "What is the fertile window?",
        a: "The fertile window spans roughly 6 days: the 5 days before ovulation and the day of ovulation itself. Sperm can survive up to 5 days in the female reproductive tract, so intercourse before ovulation can still result in pregnancy. This calculator shows ±5 days around the estimated conception date as an approximation of this window.",
      },
      {
        q: "How accurate is this calculator?",
        a: "These are estimates based on average cycle timing. Actual ovulation day varies from person to person and from cycle to cycle. For precise tracking, methods like basal body temperature (BBT) charting, ovulation predictor kits (OPKs), or ultrasound dating are more reliable.",
      },
      {
        q: "Why is the due date 266 days after conception?",
        a: "Human gestation is approximately 38 weeks (266 days) from the date of conception, or 40 weeks (280 days) from the last menstrual period. The standard Naegele's rule adds 280 days to the LMP, which is equivalent to adding 266 days to the conception date when ovulation occurs at day 14 of a 28-day cycle.",
      },
      {
        q: "Can I use this to determine paternity timing?",
        a: "This calculator provides an estimated conception window, not a precise moment. Conception can occur several days after intercourse because sperm can survive in the reproductive tract. For medical or legal questions about paternity, consult a healthcare professional.",
      },
    ],
  },
  pt: {
    title: "Conception Date Calculator",
    short: "Estimate your conception date from your last menstrual period or due date.",
    description:
      "Free conception date calculator. Enter your last menstrual period or due date to estimate when conception occurred and your fertile window.",
    keywords: [
      "conception date calculator",
      "when did I conceive",
      "fertile window calculator",
      "ovulation calculator",
      "due date calculator",
      "last menstrual period",
      "pregnancy conception",
    ],
    inputs: {
      mode: {
        label: "Calculation mode",
        help: "Calculate from last menstrual period (LMP) or from the known due date.",
      },
      dateInput: {
        label: "Date",
        help: "Enter the date of your last menstrual period (LMP) or your estimated due date.",
      },
      cycleLength: {
        label: "Menstrual cycle length (days)",
        help: "Average length of your menstrual cycle. Typical range is 21–35 days; 28 days is average.",
      },
    },
    outputs: {
      conceptionDate: {
        label: "Estimated conception date",
        help: "The approximate date when fertilisation most likely occurred.",
      },
      fertileWindowStart: {
        label: "Fertile window start",
        help: "Beginning of the likely fertile period (5 days before estimated conception).",
      },
      fertileWindowEnd: {
        label: "Fertile window end",
        help: "End of the likely fertile period (5 days after estimated conception).",
      },
      estimatedDueDate: {
        label: "Estimated due date",
        help: "Expected delivery date, approximately 266 days (38 weeks) after conception.",
      },
    },
    options: {
      mode: {
        from_lmp: "From last menstrual period (LMP)",
        from_duedate: "From due date",
      },
    },
    errors: {
      invalidDate: "Please enter a valid date in YYYY-MM-DD format.",
      cycleLengthOutOfRange: "Cycle length must be between 21 and 35 days.",
    },
    faq: [
      {
        q: "How is the conception date calculated from the LMP?",
        a: "Ovulation — and thus conception — typically occurs 14 days before the end of a 28-day menstrual cycle, or equivalently about 14 days after the start of the LMP for a standard cycle. For cycles longer or shorter than 28 days, the ovulation day shifts accordingly. This calculator adds (cycle length − 14) days to your LMP date to estimate conception.",
      },
      {
        q: "What is the fertile window?",
        a: "The fertile window spans roughly 6 days: the 5 days before ovulation and the day of ovulation itself. Sperm can survive up to 5 days in the female reproductive tract, so intercourse before ovulation can still result in pregnancy. This calculator shows ±5 days around the estimated conception date as an approximation of this window.",
      },
      {
        q: "How accurate is this calculator?",
        a: "These are estimates based on average cycle timing. Actual ovulation day varies from person to person and from cycle to cycle. For precise tracking, methods like basal body temperature (BBT) charting, ovulation predictor kits (OPKs), or ultrasound dating are more reliable.",
      },
      {
        q: "Why is the due date 266 days after conception?",
        a: "Human gestation is approximately 38 weeks (266 days) from the date of conception, or 40 weeks (280 days) from the last menstrual period. The standard Naegele's rule adds 280 days to the LMP, which is equivalent to adding 266 days to the conception date when ovulation occurs at day 14 of a 28-day cycle.",
      },
      {
        q: "Can I use this to determine paternity timing?",
        a: "This calculator provides an estimated conception window, not a precise moment. Conception can occur several days after intercourse because sperm can survive in the reproductive tract. For medical or legal questions about paternity, consult a healthcare professional.",
      },
    ],
  },
  id: {
    title: "Conception Date Calculator",
    short: "Estimate your conception date from your last menstrual period or due date.",
    description:
      "Free conception date calculator. Enter your last menstrual period or due date to estimate when conception occurred and your fertile window.",
    keywords: [
      "conception date calculator",
      "when did I conceive",
      "fertile window calculator",
      "ovulation calculator",
      "due date calculator",
      "last menstrual period",
      "pregnancy conception",
    ],
    inputs: {
      mode: {
        label: "Calculation mode",
        help: "Calculate from last menstrual period (LMP) or from the known due date.",
      },
      dateInput: {
        label: "Date",
        help: "Enter the date of your last menstrual period (LMP) or your estimated due date.",
      },
      cycleLength: {
        label: "Menstrual cycle length (days)",
        help: "Average length of your menstrual cycle. Typical range is 21–35 days; 28 days is average.",
      },
    },
    outputs: {
      conceptionDate: {
        label: "Estimated conception date",
        help: "The approximate date when fertilisation most likely occurred.",
      },
      fertileWindowStart: {
        label: "Fertile window start",
        help: "Beginning of the likely fertile period (5 days before estimated conception).",
      },
      fertileWindowEnd: {
        label: "Fertile window end",
        help: "End of the likely fertile period (5 days after estimated conception).",
      },
      estimatedDueDate: {
        label: "Estimated due date",
        help: "Expected delivery date, approximately 266 days (38 weeks) after conception.",
      },
    },
    options: {
      mode: {
        from_lmp: "From last menstrual period (LMP)",
        from_duedate: "From due date",
      },
    },
    errors: {
      invalidDate: "Please enter a valid date in YYYY-MM-DD format.",
      cycleLengthOutOfRange: "Cycle length must be between 21 and 35 days.",
    },
    faq: [
      {
        q: "How is the conception date calculated from the LMP?",
        a: "Ovulation — and thus conception — typically occurs 14 days before the end of a 28-day menstrual cycle, or equivalently about 14 days after the start of the LMP for a standard cycle. For cycles longer or shorter than 28 days, the ovulation day shifts accordingly. This calculator adds (cycle length − 14) days to your LMP date to estimate conception.",
      },
      {
        q: "What is the fertile window?",
        a: "The fertile window spans roughly 6 days: the 5 days before ovulation and the day of ovulation itself. Sperm can survive up to 5 days in the female reproductive tract, so intercourse before ovulation can still result in pregnancy. This calculator shows ±5 days around the estimated conception date as an approximation of this window.",
      },
      {
        q: "How accurate is this calculator?",
        a: "These are estimates based on average cycle timing. Actual ovulation day varies from person to person and from cycle to cycle. For precise tracking, methods like basal body temperature (BBT) charting, ovulation predictor kits (OPKs), or ultrasound dating are more reliable.",
      },
      {
        q: "Why is the due date 266 days after conception?",
        a: "Human gestation is approximately 38 weeks (266 days) from the date of conception, or 40 weeks (280 days) from the last menstrual period. The standard Naegele's rule adds 280 days to the LMP, which is equivalent to adding 266 days to the conception date when ovulation occurs at day 14 of a 28-day cycle.",
      },
      {
        q: "Can I use this to determine paternity timing?",
        a: "This calculator provides an estimated conception window, not a precise moment. Conception can occur several days after intercourse because sperm can survive in the reproductive tract. For medical or legal questions about paternity, consult a healthcare professional.",
      },
    ],
  },


  tr: {
    title: "Hamilelik Başlangıç Tarihi Hesaplayıcı",
    short: "Son adet tarihinizden veya doğum tarihinizden gebelik başlangıç tarihini hesaplayın.",
    description:
      "Ücretsiz gebelik başlangıç tarihi hesaplayıcı. Son adet tarihinizi veya tahmini doğum tarihinizi girerek gebeliğin ne zaman oluştuğunu ve doğurgan pencerenizi öğrenin.",
    keywords: [
      "hamilelik başlangıç tarihi",
      "gebelik tarihi hesaplama",
      "ovülasyon hesaplayıcı",
      "doğum tarihi hesaplama",
      "son adet tarihi",
      "doğurgan dönem",
      "ne zaman gebe kaldım",
    ],
    inputs: {
      mode: {
        label: "Hesaplama modu",
        help: "Son adet tarihinden (SAT) veya bilinen doğum tarihinden hesaplayın.",
      },
      dateInput: {
        label: "Tarih",
        help: "Son adet tarihinizi (SAT) veya tahmini doğum tarihinizi girin.",
      },
      cycleLength: {
        label: "Adet döngüsü uzunluğu (gün)",
        help: "Adet döngünüzün ortalama uzunluğu. Tipik aralık 21–35 gün; ortalama 28 gündür.",
      },
    },
    outputs: {
      conceptionDate: {
        label: "Tahmini gebelik tarihi",
        help: "Döllenmenin büyük olasılıkla gerçekleştiği yaklaşık tarih.",
      },
      fertileWindowStart: {
        label: "Doğurgan dönem başlangıcı",
        help: "Tahmini gebelik tarihinden 5 gün önce; doğurgan dönemin başlangıcı.",
      },
      fertileWindowEnd: {
        label: "Doğurgan dönem sonu",
        help: "Tahmini gebelik tarihinden 5 gün sonra; doğurgan dönemin sonu.",
      },
      estimatedDueDate: {
        label: "Tahmini doğum tarihi",
        help: "Döllenme tarihinden yaklaşık 266 gün (38 hafta) sonraki beklenen doğum tarihi.",
      },
    },
    options: {
      mode: {
        from_lmp: "Son adet tarihinden (SAT)",
        from_duedate: "Doğum tarihinden",
      },
    },
    errors: {
      invalidDate: "Lütfen YYYY-AA-GG formatında geçerli bir tarih girin.",
      cycleLengthOutOfRange: "Döngü uzunluğu 21 ile 35 gün arasında olmalıdır.",
    },
    faq: [
      {
        q: "Gebelik tarihi son adet tarihinden nasıl hesaplanır?",
        a: "Yumurtlama (ovülasyon) ve dolayısıyla gebelik, 28 günlük bir adet döngüsünde SAT'tan yaklaşık 14 gün sonra gerçekleşir. Döngü 28 günden uzun veya kısa ise ovülasyon günü buna göre kayar. Bu hesaplayıcı, SAT'a (döngü uzunluğu − 14) gün ekleyerek gebelik tarihini tahmin eder.",
      },
      {
        q: "Doğurgan pencere nedir?",
        a: "Doğurgan pencere yaklaşık 6 gün sürer: ovülasyondan önceki 5 gün ve ovülasyon günü. Spermler dişi üreme yolunda 5 güne kadar hayatta kalabildiğinden, ovülasyondan önce gerçekleşen ilişki de gebelikle sonuçlanabilir.",
      },
      {
        q: "Bu hesaplayıcı ne kadar doğru?",
        a: "Bunlar ortalama döngü zamanlamasına dayalı tahminlerdir. Gerçek ovülasyon günü kişiden kişiye ve döngüden döngüye farklılık gösterir. Daha hassas takip için bazal vücut sıcaklığı (BVS) izleme veya ovülasyon test kitleri tercih edilebilir.",
      },
      {
        q: "Neden doğum tarihi döllenme tarihinden 266 gün sonradır?",
        a: "İnsan gebeliği döllenme tarihinden itibaren yaklaşık 38 hafta (266 gün) ya da son adet tarihinden itibaren 40 hafta (280 gün) sürer. Standart Naegele kuralı SAT'a 280 gün ekler; bu, 28 günlük döngüde 14. günde ovülasyon olduğunda döllenme tarihine 266 gün eklemeye eşdeğerdir.",
      },
    ],
  },

  de: {
    title: "Empfängnisdatum-Rechner",
    short: "Schätzen Sie Ihr Empfängnisdatum anhand der letzten Regelblutung oder des errechneten Geburtstermins.",
    description:
      "Kostenloser Empfängnisdatum-Rechner. Geben Sie Ihre letzte Periode oder Ihren Geburtstermin ein, um den Zeitpunkt der Empfängnis und Ihr fruchtbares Fenster zu ermitteln.",
    keywords: [
      "Empfängnisdatum Rechner",
      "wann wurde ich schwanger",
      "fruchtbares Fenster",
      "Ovulationsrechner",
      "Geburtstermin berechnen",
      "letzte Monatsblutung",
      "Schwangerschaft berechnen",
    ],
    inputs: {
      mode: {
        label: "Berechnungsmodus",
        help: "Berechnen Sie ab dem letzten Menstruationsbeginn (LMB) oder ab dem bekannten Geburtstermin.",
      },
      dateInput: {
        label: "Datum",
        help: "Geben Sie das Datum Ihrer letzten Regelblutung oder Ihren errechneten Geburtstermin ein.",
      },
      cycleLength: {
        label: "Zykluslänge (Tage)",
        help: "Durchschnittliche Länge Ihres Menstruationszyklus. Typisch sind 21–35 Tage; 28 Tage ist der Durchschnitt.",
      },
    },
    outputs: {
      conceptionDate: {
        label: "Geschätztes Empfängnisdatum",
        help: "Das ungefähre Datum, an dem die Befruchtung wahrscheinlich stattgefunden hat.",
      },
      fertileWindowStart: {
        label: "Beginn des fruchtbaren Fensters",
        help: "5 Tage vor dem geschätzten Empfängnisdatum — Beginn der fruchtbaren Phase.",
      },
      fertileWindowEnd: {
        label: "Ende des fruchtbaren Fensters",
        help: "5 Tage nach dem geschätzten Empfängnisdatum — Ende der fruchtbaren Phase.",
      },
      estimatedDueDate: {
        label: "Errechneter Geburtstermin",
        help: "Erwarteter Entbindungstermin, ca. 266 Tage (38 Wochen) nach der Empfängnis.",
      },
    },
    options: {
      mode: {
        from_lmp: "Ab letzter Menstruationsblutung (LMB)",
        from_duedate: "Ab Geburtstermin",
      },
    },
    errors: {
      invalidDate: "Bitte geben Sie ein gültiges Datum im Format JJJJ-MM-TT ein.",
      cycleLengthOutOfRange: "Die Zykluslänge muss zwischen 21 und 35 Tagen liegen.",
    },
    faq: [
      {
        q: "Wie wird das Empfängnisdatum aus der letzten Regelblutung berechnet?",
        a: "Der Eisprung und damit die Empfängnis erfolgen bei einem 28-Tage-Zyklus typischerweise 14 Tage nach dem ersten Tag der letzten Regelblutung. Bei kürzeren oder längeren Zyklen verschiebt sich der Ovulationstag entsprechend. Dieser Rechner addiert (Zykluslänge − 14) Tage zum LMB-Datum.",
      },
      {
        q: "Was ist das fruchtbare Fenster?",
        a: "Das fruchtbare Fenster umfasst rund 6 Tage: die 5 Tage vor der Ovulation und den Ovulationstag selbst. Spermien können bis zu 5 Tage in den Eileitern überleben, weshalb auch Geschlechtsverkehr vor dem Eisprung zu einer Schwangerschaft führen kann.",
      },
      {
        q: "Wie genau ist dieser Rechner?",
        a: "Die Ergebnisse sind Schätzwerte auf Basis durchschnittlicher Zyklusverläufe. Der tatsächliche Ovulationstag variiert von Person zu Person und von Zyklus zu Zyklus. Für präzisere Ergebnisse eignen sich Basaltemperaturmessungen oder Ovulationstests.",
      },
    ],
  },

  fr: {
    title: "Calculateur de date de conception",
    short: "Estimez votre date de conception à partir de vos dernières règles ou de la date prévue d'accouchement.",
    description:
      "Calculateur gratuit de date de conception. Saisissez la date de vos dernières règles ou votre terme prévu pour estimer quand la conception a eu lieu et votre fenêtre de fertilité.",
    keywords: [
      "calculateur date de conception",
      "quand ai-je conçu",
      "fenêtre fertile",
      "calculateur ovulation",
      "date accouchement prévue",
      "dernières règles",
      "grossesse conception",
    ],
    inputs: {
      mode: {
        label: "Mode de calcul",
        help: "Calculez à partir des dernières règles (DDR) ou de la date prévue d'accouchement (DPA).",
      },
      dateInput: {
        label: "Date",
        help: "Saisissez la date de vos dernières règles ou votre date prévue d'accouchement.",
      },
      cycleLength: {
        label: "Durée du cycle menstruel (jours)",
        help: "Durée moyenne de votre cycle. La plage normale est de 21 à 35 jours ; 28 jours est la moyenne.",
      },
    },
    outputs: {
      conceptionDate: {
        label: "Date de conception estimée",
        help: "La date approximative à laquelle la fécondation a le plus probablement eu lieu.",
      },
      fertileWindowStart: {
        label: "Début de la fenêtre fertile",
        help: "5 jours avant la date de conception estimée — début de la période féconde.",
      },
      fertileWindowEnd: {
        label: "Fin de la fenêtre fertile",
        help: "5 jours après la date de conception estimée — fin de la période féconde.",
      },
      estimatedDueDate: {
        label: "Date prévue d'accouchement",
        help: "Date prévue d'accouchement, environ 266 jours (38 semaines) après la conception.",
      },
    },
    options: {
      mode: {
        from_lmp: "À partir des dernières règles (DDR)",
        from_duedate: "À partir de la date d'accouchement prévue",
      },
    },
    errors: {
      invalidDate: "Veuillez saisir une date valide au format AAAA-MM-JJ.",
      cycleLengthOutOfRange: "La durée du cycle doit être comprise entre 21 et 35 jours.",
    },
    faq: [
      {
        q: "Comment la date de conception est-elle calculée à partir des dernières règles ?",
        a: "L'ovulation — et donc la conception — survient généralement 14 jours après le premier jour des dernières règles pour un cycle de 28 jours. Pour des cycles plus courts ou plus longs, le jour d'ovulation est ajusté en conséquence. Ce calculateur ajoute (durée du cycle − 14) jours à la DDR.",
      },
      {
        q: "Qu'est-ce que la fenêtre fertile ?",
        a: "La fenêtre fertile s'étend sur environ 6 jours : les 5 jours précédant l'ovulation et le jour de l'ovulation lui-même. Les spermatozoïdes peuvent survivre jusqu'à 5 jours dans les voies génitales féminines.",
      },
      {
        q: "Quelle est la précision de ce calculateur ?",
        a: "Ces résultats sont des estimations basées sur un cycle moyen. Le jour réel d'ovulation varie d'une personne à l'autre et d'un cycle à l'autre. Pour un suivi précis, la courbe de température ou les tests d'ovulation sont plus fiables.",
      },
    ],
  },

  es: {
    title: "Calculadora de fecha de concepción",
    short: "Estima tu fecha de concepción a partir de tu última menstruación o fecha probable de parto.",
    description:
      "Calculadora gratuita de fecha de concepción. Introduce la fecha de tu última menstruación o tu fecha probable de parto para estimar cuándo ocurrió la concepción y tu ventana fértil.",
    keywords: [
      "calculadora fecha de concepción",
      "cuándo concebí",
      "ventana fértil",
      "calculadora ovulación",
      "fecha probable de parto",
      "última menstruación",
      "embarazo concepción",
    ],
    inputs: {
      mode: {
        label: "Modo de cálculo",
        help: "Calcula desde la fecha de última menstruación (FUM) o desde la fecha probable de parto (FPP).",
      },
      dateInput: {
        label: "Fecha",
        help: "Introduce la fecha de tu última menstruación o tu fecha probable de parto.",
      },
      cycleLength: {
        label: "Duración del ciclo menstrual (días)",
        help: "Duración promedio de tu ciclo. El rango típico es de 21 a 35 días; 28 días es el promedio.",
      },
    },
    outputs: {
      conceptionDate: {
        label: "Fecha de concepción estimada",
        help: "La fecha aproximada en que probablemente ocurrió la fecundación.",
      },
      fertileWindowStart: {
        label: "Inicio de la ventana fértil",
        help: "5 días antes de la fecha de concepción estimada — inicio del período fértil.",
      },
      fertileWindowEnd: {
        label: "Fin de la ventana fértil",
        help: "5 días después de la fecha de concepción estimada — fin del período fértil.",
      },
      estimatedDueDate: {
        label: "Fecha probable de parto",
        help: "Fecha esperada de parto, aproximadamente 266 días (38 semanas) después de la concepción.",
      },
    },
    options: {
      mode: {
        from_lmp: "Desde la última menstruación (FUM)",
        from_duedate: "Desde la fecha probable de parto",
      },
    },
    errors: {
      invalidDate: "Por favor introduce una fecha válida en formato AAAA-MM-DD.",
      cycleLengthOutOfRange: "La duración del ciclo debe estar entre 21 y 35 días.",
    },
    faq: [
      {
        q: "¿Cómo se calcula la fecha de concepción desde la última menstruación?",
        a: "La ovulación y, por tanto, la concepción suelen ocurrir 14 días después del primer día de la última menstruación en un ciclo de 28 días. Para ciclos más cortos o más largos, el día de ovulación se ajusta en consecuencia. Esta calculadora suma (duración del ciclo − 14) días a la FUM.",
      },
      {
        q: "¿Qué es la ventana fértil?",
        a: "La ventana fértil abarca aproximadamente 6 días: los 5 días anteriores a la ovulación y el día de la ovulación. Los espermatozoides pueden sobrevivir hasta 5 días en el tracto reproductor femenino.",
      },
      {
        q: "¿Qué tan precisa es esta calculadora?",
        a: "Son estimaciones basadas en un ciclo promedio. El día real de ovulación varía de persona a persona y de ciclo a ciclo. Para un seguimiento más preciso, utiliza el método de temperatura basal corporal o kits de detección de ovulación.",
      },
    ],
  },

  it: {
    title: "Calcolatore della data di concepimento",
    short: "Stima la tua data di concepimento dall'ultima mestruazione o dalla data presunta del parto.",
    description:
      "Calcolatore gratuito della data di concepimento. Inserisci la data dell'ultima mestruazione o la data presunta del parto per stimare quando è avvenuto il concepimento e la tua finestra fertile.",
    keywords: [
      "calcolatore data concepimento",
      "quando ho concepito",
      "finestra fertile",
      "calcolatore ovulazione",
      "data presunta del parto",
      "ultima mestruazione",
      "gravidanza concepimento",
    ],
    inputs: {
      mode: {
        label: "Modalità di calcolo",
        help: "Calcola dall'ultima mestruazione (UM) o dalla data presunta del parto (DPP).",
      },
      dateInput: {
        label: "Data",
        help: "Inserisci la data dell'ultima mestruazione o la data presunta del parto.",
      },
      cycleLength: {
        label: "Durata del ciclo mestruale (giorni)",
        help: "Durata media del tuo ciclo. L'intervallo tipico è 21–35 giorni; 28 giorni è la media.",
      },
    },
    outputs: {
      conceptionDate: {
        label: "Data di concepimento stimata",
        help: "La data approssimativa in cui la fecondazione ha probabilmente avuto luogo.",
      },
      fertileWindowStart: {
        label: "Inizio della finestra fertile",
        help: "5 giorni prima della data di concepimento stimata — inizio del periodo fertile.",
      },
      fertileWindowEnd: {
        label: "Fine della finestra fertile",
        help: "5 giorni dopo la data di concepimento stimata — fine del periodo fertile.",
      },
      estimatedDueDate: {
        label: "Data presunta del parto",
        help: "Data prevista del parto, circa 266 giorni (38 settimane) dopo il concepimento.",
      },
    },
    options: {
      mode: {
        from_lmp: "Dall'ultima mestruazione (UM)",
        from_duedate: "Dalla data presunta del parto",
      },
    },
    errors: {
      invalidDate: "Inserisci una data valida nel formato AAAA-MM-GG.",
      cycleLengthOutOfRange: "La durata del ciclo deve essere compresa tra 21 e 35 giorni.",
    },
    faq: [
      {
        q: "Come si calcola la data di concepimento dall'ultima mestruazione?",
        a: "L'ovulazione — e quindi il concepimento — si verifica tipicamente 14 giorni dopo il primo giorno dell'ultima mestruazione per un ciclo di 28 giorni. Per cicli più corti o più lunghi, il giorno dell'ovulazione si sposta di conseguenza. Questo calcolatore aggiunge (durata del ciclo − 14) giorni alla data dell'UM.",
      },
      {
        q: "Cos'è la finestra fertile?",
        a: "La finestra fertile si estende per circa 6 giorni: i 5 giorni precedenti l'ovulazione e il giorno dell'ovulazione stesso. Gli spermatozoi possono sopravvivere fino a 5 giorni nell'apparato riproduttivo femminile.",
      },
      {
        q: "Quanto è accurato questo calcolatore?",
        a: "I risultati sono stime basate su un ciclo medio. Il giorno effettivo dell'ovulazione varia da persona a persona e da ciclo a ciclo. Per un monitoraggio più preciso, si consigliano la curva della temperatura basale o i test di ovulazione.",
      },
    ],
  },

  ar: {
    title: "حاسبة تاريخ الحمل",
    short: "احسبي تاريخ الحمل المقدّر انطلاقًا من آخر دورة شهرية أو تاريخ الولادة المتوقع.",
    description:
      "حاسبة مجانية لتاريخ الحمل. أدخلي تاريخ آخر دورة شهرية أو تاريخ الولادة المتوقع لتقدير متى حدث الحمل ومعرفة فترة الخصوبة لديكِ.",
    keywords: [
      "حاسبة تاريخ الحمل",
      "متى حملت",
      "نافذة الخصوبة",
      "حاسبة التبويض",
      "تاريخ الولادة المتوقع",
      "آخر دورة شهرية",
      "حساب الحمل",
    ],
    inputs: {
      mode: {
        label: "طريقة الحساب",
        help: "احسبي من تاريخ آخر دورة شهرية أو من تاريخ الولادة المتوقع.",
      },
      dateInput: {
        label: "التاريخ",
        help: "أدخلي تاريخ آخر دورة شهرية أو تاريخ الولادة المتوقع.",
      },
      cycleLength: {
        label: "طول الدورة الشهرية (أيام)",
        help: "متوسط طول دورتك الشهرية. النطاق المعتاد 21–35 يومًا؛ والمتوسط 28 يومًا.",
      },
    },
    outputs: {
      conceptionDate: {
        label: "تاريخ الحمل المقدّر",
        help: "التاريخ التقريبي الذي يُرجَّح فيه حدوث التلقيح.",
      },
      fertileWindowStart: {
        label: "بداية نافذة الخصوبة",
        help: "5 أيام قبل تاريخ الحمل المقدَّر — بداية الفترة الخصبة.",
      },
      fertileWindowEnd: {
        label: "نهاية نافذة الخصوبة",
        help: "5 أيام بعد تاريخ الحمل المقدَّر — نهاية الفترة الخصبة.",
      },
      estimatedDueDate: {
        label: "تاريخ الولادة المتوقع",
        help: "موعد الولادة المتوقع، نحو 266 يومًا (38 أسبوعًا) بعد الحمل.",
      },
    },
    options: {
      mode: {
        from_lmp: "من تاريخ آخر دورة شهرية",
        from_duedate: "من تاريخ الولادة المتوقع",
      },
    },
    errors: {
      invalidDate: "يرجى إدخال تاريخ صحيح بصيغة YYYY-MM-DD.",
      cycleLengthOutOfRange: "يجب أن يكون طول الدورة بين 21 و35 يومًا.",
    },
    faq: [
      {
        q: "كيف يُحسب تاريخ الحمل من آخر دورة شهرية؟",
        a: "يحدث التبويض — وبالتالي الحمل — عادةً بعد 14 يومًا من أول يوم في آخر دورة شهرية لدورة مدتها 28 يومًا. وللدورات الأقصر أو الأطول، يتغير يوم التبويض وفقًا لذلك. تضيف هذه الحاسبة (طول الدورة − 14) يومًا إلى تاريخ آخر دورة شهرية.",
      },
      {
        q: "ما هي نافذة الخصوبة؟",
        a: "تمتد نافذة الخصوبة نحو 6 أيام: الأيام الخمسة التي تسبق التبويض ويوم التبويض نفسه. يمكن للحيوانات المنوية البقاء حتى 5 أيام في الجهاز التناسلي الأنثوي.",
      },
      {
        q: "ما مدى دقة هذه الحاسبة؟",
        a: "النتائج تقديرية مبنية على متوسط الدورة الشهرية. يتفاوت يوم التبويض الفعلي من امرأة لأخرى ومن دورة لأخرى. لمتابعة أدق، يُنصح باستخدام أجهزة قياس درجة حرارة الجسم الأساسية أو مجموعات اختبار التبويض.",
      },
    ],
  },

  ru: {
    title: "Калькулятор даты зачатия",
    short: "Определите дату зачатия по первому дню последней менструации или предполагаемой дате родов.",
    description:
      "Бесплатный калькулятор даты зачатия. Введите дату последней менструации или предполагаемую дату родов, чтобы оценить момент зачатия и благоприятное окно для беременности.",
    keywords: [
      "калькулятор даты зачатия",
      "когда произошло зачатие",
      "фертильное окно",
      "калькулятор овуляции",
      "дата родов",
      "последняя менструация",
      "расчёт беременности",
    ],
    inputs: {
      mode: {
        label: "Режим расчёта",
        help: "Рассчитать от первого дня последней менструации (ПМ) или от предполагаемой даты родов.",
      },
      dateInput: {
        label: "Дата",
        help: "Введите дату последней менструации или предполагаемую дату родов.",
      },
      cycleLength: {
        label: "Длина менструального цикла (дни)",
        help: "Средняя продолжительность вашего цикла. Типичный диапазон: 21–35 дней; среднее — 28 дней.",
      },
    },
    outputs: {
      conceptionDate: {
        label: "Расчётная дата зачатия",
        help: "Приблизительная дата, когда наиболее вероятно произошло оплодотворение.",
      },
      fertileWindowStart: {
        label: "Начало фертильного окна",
        help: "За 5 дней до расчётной даты зачатия — начало благоприятного периода.",
      },
      fertileWindowEnd: {
        label: "Конец фертильного окна",
        help: "5 дней после расчётной даты зачатия — конец благоприятного периода.",
      },
      estimatedDueDate: {
        label: "Предполагаемая дата родов",
        help: "Ожидаемая дата родов: примерно 266 дней (38 недель) после зачатия.",
      },
    },
    options: {
      mode: {
        from_lmp: "От даты последней менструации",
        from_duedate: "От предполагаемой даты родов",
      },
    },
    errors: {
      invalidDate: "Введите корректную дату в формате ГГГГ-ММ-ДД.",
      cycleLengthOutOfRange: "Длина цикла должна быть от 21 до 35 дней.",
    },
    faq: [
      {
        q: "Как рассчитывается дата зачатия по последней менструации?",
        a: "Овуляция — и, следовательно, зачатие — происходит примерно на 14-й день после первого дня последней менструации при 28-дневном цикле. При более коротких или длинных циклах день овуляции смещается соответственно. Калькулятор прибавляет (длина цикла − 14) дней к дате последней менструации.",
      },
      {
        q: "Что такое фертильное окно?",
        a: "Фертильное окно охватывает около 6 дней: 5 дней до овуляции и сам день овуляции. Сперматозоиды могут выживать до 5 дней в женских половых путях, поэтому зачатие возможно и при половом акте до овуляции.",
      },
      {
        q: "Насколько точен этот калькулятор?",
        a: "Результаты являются оценочными и основаны на среднем цикле. Фактический день овуляции варьируется от человека к человеку и от цикла к циклу. Для точного отслеживания рекомендуется измерять базальную температуру или использовать тесты на овуляцию.",
      },
    ],
  },

  zh: {
    title: "受孕日期计算器",
    short: "根据末次月经或预产期估算受孕日期和排卵窗口期。",
    description:
      "免费受孕日期计算器。输入末次月经日期或预产期，估算受孕时间及可孕窗口期。",
    keywords: [
      "受孕日期计算器",
      "什么时候怀孕",
      "排卵窗口期",
      "排卵计算器",
      "预产期计算",
      "末次月经",
      "怀孕计算",
    ],
    inputs: {
      mode: {
        label: "计算方式",
        help: "从末次月经（LMP）或已知预产期进行计算。",
      },
      dateInput: {
        label: "日期",
        help: "输入末次月经日期或预产期。",
      },
      cycleLength: {
        label: "月经周期长度（天）",
        help: "您月经周期的平均天数，正常范围为21–35天，平均28天。",
      },
    },
    outputs: {
      conceptionDate: {
        label: "估算受孕日期",
        help: "最可能发生受精的大致日期。",
      },
      fertileWindowStart: {
        label: "可孕窗口期开始",
        help: "估算受孕日期前5天——可孕期开始。",
      },
      fertileWindowEnd: {
        label: "可孕窗口期结束",
        help: "估算受孕日期后5天——可孕期结束。",
      },
      estimatedDueDate: {
        label: "预产期",
        help: "预计分娩日期，大约在受孕后266天（38周）。",
      },
    },
    options: {
      mode: {
        from_lmp: "从末次月经（LMP）",
        from_duedate: "从预产期",
      },
    },
    errors: {
      invalidDate: "请输入YYYY-MM-DD格式的有效日期。",
      cycleLengthOutOfRange: "月经周期长度须在21至35天之间。",
    },
    faq: [
      {
        q: "如何从末次月经计算受孕日期？",
        a: "对于28天周期，排卵（即受孕）通常发生在末次月经首日后的第14天。周期较长或较短时，排卵日会相应前移或后移。本计算器将（周期长度−14）天加到末次月经日期上，得出受孕估算日期。",
      },
      {
        q: "什么是可孕窗口期？",
        a: "可孕窗口期约为6天：排卵前5天加上排卵当天。由于精子可在女性生殖道内存活最长5天，排卵前发生的性行为也可能导致怀孕。",
      },
      {
        q: "这个计算器有多准确？",
        a: "结果是基于平均月经周期的估算。实际排卵日因人而异，也会因周期不同而变化。更精确的追踪方法包括基础体温监测或排卵试纸。",
      },
    ],
  },

  ja: {
    title: "受精日計算機",
    short: "最終月経日または分娩予定日から受精日と妊娠可能な期間を推定します。",
    description:
      "無料の受精日計算機。最終月経日または分娩予定日を入力するだけで、受精が起きた日付と妊娠可能窓（フェーティル・ウィンドウ）を推定できます。",
    keywords: [
      "受精日計算機",
      "いつ妊娠したか",
      "妊娠可能期間",
      "排卵日計算機",
      "分娩予定日計算",
      "最終月経日",
      "妊娠計算",
    ],
    inputs: {
      mode: {
        label: "計算モード",
        help: "最終月経日（LMP）から計算するか、分娩予定日から計算するかを選んでください。",
      },
      dateInput: {
        label: "日付",
        help: "最終月経日または分娩予定日を入力してください。",
      },
      cycleLength: {
        label: "月経周期（日数）",
        help: "月経周期の平均日数。通常は21〜35日で、平均は28日です。",
      },
    },
    outputs: {
      conceptionDate: {
        label: "推定受精日",
        help: "受精が最も起こりやすかったと推定される日付。",
      },
      fertileWindowStart: {
        label: "妊娠可能窓の開始日",
        help: "推定受精日の5日前——妊娠可能期間の始まり。",
      },
      fertileWindowEnd: {
        label: "妊娠可能窓の終了日",
        help: "推定受精日の5日後——妊娠可能期間の終わり。",
      },
      estimatedDueDate: {
        label: "分娩予定日",
        help: "受精から約266日（38週）後の出産予定日。",
      },
    },
    options: {
      mode: {
        from_lmp: "最終月経日（LMP）から",
        from_duedate: "分娩予定日から",
      },
    },
    errors: {
      invalidDate: "YYYY-MM-DD形式で有効な日付を入力してください。",
      cycleLengthOutOfRange: "月経周期は21〜35日の範囲で入力してください。",
    },
    faq: [
      {
        q: "最終月経日から受精日はどう計算されますか？",
        a: "28日周期の場合、排卵（＝受精）は最終月経開始日から14日後に起こると推定されます。周期が長短の場合は、排卵日が前後します。本計算機は（周期長−14）日を最終月経日に加算して受精推定日を算出します。",
      },
      {
        q: "妊娠可能窓とは何ですか？",
        a: "妊娠可能窓は約6日間：排卵前5日間と排卵当日です。精子は女性の生殖路内で最大5日間生存できるため、排卵前の性交でも妊娠の可能性があります。",
      },
      {
        q: "この計算機はどれくらい正確ですか？",
        a: "結果は平均的な月経周期に基づく推定値です。実際の排卵日は個人差や周期ごとのばらつきがあります。より正確な排卵日の把握には、基礎体温の計測や排卵検査薬の使用を推奨します。",
      },
    ],
  },

  ko: {
    title: "수정일 계산기",
    short: "마지막 월경일 또는 출산 예정일을 기반으로 수정일과 가임기를 추정합니다.",
    description:
      "무료 수정일 계산기. 마지막 월경일이나 출산 예정일을 입력하면 수정 시기와 가임 가능 기간을 추정할 수 있습니다.",
    keywords: [
      "수정일 계산기",
      "언제 임신했는지",
      "가임기 계산기",
      "배란일 계산기",
      "출산 예정일",
      "마지막 월경일",
      "임신 계산",
    ],
    inputs: {
      mode: {
        label: "계산 방식",
        help: "마지막 월경일(LMP) 또는 출산 예정일을 기준으로 계산합니다.",
      },
      dateInput: {
        label: "날짜",
        help: "마지막 월경 시작일 또는 출산 예정일을 입력하세요.",
      },
      cycleLength: {
        label: "월경 주기 (일)",
        help: "평균 월경 주기 일수. 일반적으로 21~35일이며 평균은 28일입니다.",
      },
    },
    outputs: {
      conceptionDate: {
        label: "추정 수정일",
        help: "수정이 가장 가능성 높게 일어났다고 추정되는 날짜.",
      },
      fertileWindowStart: {
        label: "가임기 시작일",
        help: "추정 수정일 5일 전 — 가임 가능 기간의 시작.",
      },
      fertileWindowEnd: {
        label: "가임기 종료일",
        help: "추정 수정일 5일 후 — 가임 가능 기간의 끝.",
      },
      estimatedDueDate: {
        label: "출산 예정일",
        help: "수정 후 약 266일(38주) 뒤의 예상 출산일.",
      },
    },
    options: {
      mode: {
        from_lmp: "마지막 월경일(LMP) 기준",
        from_duedate: "출산 예정일 기준",
      },
    },
    errors: {
      invalidDate: "YYYY-MM-DD 형식의 유효한 날짜를 입력하세요.",
      cycleLengthOutOfRange: "월경 주기는 21~35일 사이여야 합니다.",
    },
    faq: [
      {
        q: "마지막 월경일로 수정일을 어떻게 계산하나요?",
        a: "28일 주기의 경우, 배란(즉 수정)은 마지막 월경 시작일로부터 약 14일 후에 일어납니다. 주기가 더 짧거나 길면 배란일도 그에 맞춰 이동합니다. 이 계산기는 마지막 월경일에 (주기 길이−14)일을 더해 수정 추정일을 산출합니다.",
      },
      {
        q: "가임기란 무엇인가요?",
        a: "가임기는 약 6일로, 배란 5일 전과 배란 당일을 포함합니다. 정자는 여성의 생식 기관 내에서 최대 5일간 생존할 수 있으므로, 배란 전 성관계도 임신으로 이어질 수 있습니다.",
      },
      {
        q: "이 계산기는 얼마나 정확한가요?",
        a: "결과는 평균 월경 주기를 기반으로 한 추정치입니다. 실제 배란일은 개인마다 다르고 주기마다 다를 수 있습니다. 더 정확한 추적을 위해서는 기초 체온 측정이나 배란 테스트기를 사용하는 것이 좋습니다.",
      },
    ],
  },

  hi: {
    title: "गर्भधारण तिथि कैलकुलेटर",
    short: "अपनी अंतिम माहवारी या प्रसव तिथि से गर्भधारण की संभावित तिथि जानें।",
    description:
      "निःशुल्क गर्भधारण तिथि कैलकुलेटर। अपनी अंतिम माहवारी की तिथि या अपेक्षित प्रसव तिथि दर्ज करें और जानें कि गर्भधारण कब हुआ तथा आपकी उपजाऊ अवधि क्या है।",
    keywords: [
      "गर्भधारण तिथि कैलकुलेटर",
      "गर्भधारण कब हुआ",
      "उपजाऊ अवधि",
      "ओव्यूलेशन कैलकुलेटर",
      "प्रसव तिथि कैलकुलेटर",
      "अंतिम माहवारी",
      "गर्भावस्था गणना",
    ],
    inputs: {
      mode: {
        label: "गणना विधि",
        help: "अंतिम माहवारी तिथि (LMP) या अपेक्षित प्रसव तिथि से गणना करें।",
      },
      dateInput: {
        label: "तिथि",
        help: "अपनी अंतिम माहवारी की तिथि या अपेक्षित प्रसव तिथि दर्ज करें।",
      },
      cycleLength: {
        label: "माहवारी चक्र की लंबाई (दिन)",
        help: "आपके माहवारी चक्र की औसत अवधि। सामान्य सीमा 21–35 दिन है; औसत 28 दिन है।",
      },
    },
    outputs: {
      conceptionDate: {
        label: "अनुमानित गर्भधारण तिथि",
        help: "वह तिथि जिस पर गर्भाधान होने की सबसे अधिक संभावना है।",
      },
      fertileWindowStart: {
        label: "उपजाऊ अवधि की शुरुआत",
        help: "अनुमानित गर्भधारण तिथि से 5 दिन पहले — उपजाऊ अवधि का आरंभ।",
      },
      fertileWindowEnd: {
        label: "उपजाऊ अवधि का अंत",
        help: "अनुमानित गर्भधारण तिथि से 5 दिन बाद — उपजाऊ अवधि का समाप्ति।",
      },
      estimatedDueDate: {
        label: "अपेक्षित प्रसव तिथि",
        help: "गर्भधारण के लगभग 266 दिन (38 सप्ताह) बाद की अपेक्षित प्रसव तिथि।",
      },
    },
    options: {
      mode: {
        from_lmp: "अंतिम माहवारी तिथि से (LMP)",
        from_duedate: "अपेक्षित प्रसव तिथि से",
      },
    },
    errors: {
      invalidDate: "कृपया YYYY-MM-DD प्रारूप में एक मान्य तिथि दर्ज करें।",
      cycleLengthOutOfRange: "चक्र की लंबाई 21 से 35 दिन के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "अंतिम माहवारी से गर्भधारण तिथि कैसे गणना की जाती है?",
        a: "28 दिन के चक्र में ओव्यूलेशन — और इसलिए गर्भधारण — अंतिम माहवारी के पहले दिन से लगभग 14 दिन बाद होता है। छोटे या लंबे चक्रों में, ओव्यूलेशन का दिन तदनुसार बदल जाता है। यह कैलकुलेटर LMP में (चक्र की लंबाई − 14) दिन जोड़ता है।",
      },
      {
        q: "उपजाऊ अवधि क्या है?",
        a: "उपजाऊ अवधि लगभग 6 दिन होती है: ओव्यूलेशन से 5 दिन पहले और ओव्यूलेशन का दिन स्वयं। शुक्राणु महिला प्रजनन पथ में 5 दिन तक जीवित रह सकते हैं।",
      },
      {
        q: "यह कैलकुलेटर कितना सटीक है?",
        a: "परिणाम औसत चक्र पर आधारित अनुमान हैं। वास्तविक ओव्यूलेशन का दिन व्यक्ति से व्यक्ति और चक्र से चक्र में भिन्न हो सकता है। अधिक सटीक अनुवर्ती के लिए बेसल बॉडी टेम्परेचर चार्टिंग या ओव्यूलेशन परीक्षण किट का उपयोग करें।",
      },
    ],
  },
};

export default i18n;
