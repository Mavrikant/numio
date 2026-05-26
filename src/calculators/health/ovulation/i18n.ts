import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Ovulation & Fertile Window Calculator",
    short: "Find your most fertile days and predicted ovulation date based on your menstrual cycle.",
    description:
      "Free ovulation calculator. Enter your last menstrual period date and average cycle length to estimate your fertile window, ovulation date, LH surge, and next period.",
    keywords: [
      "ovulation calculator",
      "fertile window",
      "fertility calculator",
      "when do I ovulate",
      "ovulation date",
      "cycle tracker",
      "pregnancy planning",
    ],
    inputs: {
      lmpDate: {
        label: "Last menstrual period (LMP)",
        help: "The first day of your most recent period.",
      },
      cycleLength: {
        label: "Average cycle length (days)",
        help: "The number of days from the first day of one period to the first day of the next. Average is 28 days (range: 21–45).",
      },
    },
    outputs: {
      ovulationDate: {
        label: "Estimated ovulation date",
        help: "The day your ovary is most likely to release an egg.",
      },
      fertileStart: {
        label: "Fertile window start",
        help: "Sperm can survive up to 5 days, so your fertile window begins 5 days before ovulation.",
      },
      fertileEnd: {
        label: "Fertile window end",
        help: "The day after ovulation — the egg survives about 24 hours.",
      },
      nextPeriod: {
        label: "Next period (predicted)",
        help: "Your predicted next menstrual period start date.",
      },
      lhSurgeDate: {
        label: "LH surge (predicted)",
        help: "The day before ovulation when the luteinising hormone surge is typically detected on ovulation tests.",
      },
    },
    errors: {
      invalidDate: "Please enter a valid date in YYYY-MM-DD format.",
      cycleLengthOutOfRange: "Cycle length must be between 21 and 45 days.",
    },
    faq: [
      {
        q: "How is the fertile window calculated?",
        a: "Ovulation typically occurs 14 days before your next period. Sperm can survive in the reproductive tract for up to 5 days, so the fertile window spans from 5 days before ovulation to 1 day after (6 days total).",
      },
      {
        q: "What is an LH surge?",
        a: "The luteinising hormone (LH) surge is a sudden increase in LH that triggers ovulation within 24–36 hours. Home ovulation predictor kits (OPKs) detect this surge in urine.",
      },
      {
        q: "Can I use this calculator to avoid pregnancy?",
        a: "No. This calculator is for educational and planning purposes only. It is not a contraceptive method. Ovulation timing varies and cannot be predicted with certainty. Consult a healthcare provider for reliable contraception.",
      },
      {
        q: "What if my cycle is irregular?",
        a: "This calculator assumes a regular cycle. If your cycle length varies significantly from month to month, the estimates will be less accurate. Basal body temperature tracking and ovulation test strips can help identify ovulation more precisely.",
      },
    ],
  },

  tr: {
    title: "Ovülasyon ve Fertil Pencere Hesaplayıcı",
    short: "Adet döngünüze göre en verimli günlerinizi ve tahmini yumurtlama tarihinizi öğrenin.",
    description:
      "Ücretsiz ovülasyon hesaplayıcı. Son adet tarihinizi ve ortalama döngü uzunluğunuzu girerek fertil pencerenizi, yumurtlama tarihinizi, LH dalgalanmasını ve bir sonraki adetinizi tahmin edin.",
    keywords: [
      "ovülasyon hesaplayıcı",
      "fertil pencere",
      "yumurtlama günü",
      "ne zaman yumurtlarım",
      "adet döngüsü",
      "hamilelik planlama",
      "doğurganlık hesaplayıcı",
    ],
    inputs: {
      lmpDate: {
        label: "Son adet tarihi (SAT)",
        help: "En son adetinizin başladığı gün.",
      },
      cycleLength: {
        label: "Ortalama döngü uzunluğu (gün)",
        help: "Bir adetin ilk gününden bir sonrakinin ilk gününe kadar geçen gün sayısı. Ortalama 28 gündür (aralık: 21–45).",
      },
    },
    outputs: {
      ovulationDate: {
        label: "Tahmini yumurtlama tarihi",
        help: "Yumurtalığınızın yumurta salmaya en muhtemel olduğu gün.",
      },
      fertileStart: {
        label: "Fertil pencere başlangıcı",
        help: "Sperm 5 güne kadar hayatta kalabildiğinden, fertil pencere yumurtlamadan 5 gün önce başlar.",
      },
      fertileEnd: {
        label: "Fertil pencere bitişi",
        help: "Yumurtlamadan sonraki gün — yumurta yaklaşık 24 saat hayatta kalır.",
      },
      nextPeriod: {
        label: "Sonraki adet (tahmin)",
        help: "Tahmini bir sonraki adet başlangıç tarihiniz.",
      },
      lhSurgeDate: {
        label: "LH dalgalanması (tahmin)",
        help: "Yumurtlamadan önceki gün; ovülasyon testlerinde genellikle bu gün LH artışı saptanır.",
      },
    },
    errors: {
      invalidDate: "Lütfen YYYY-AA-GG formatında geçerli bir tarih girin.",
      cycleLengthOutOfRange: "Döngü uzunluğu 21 ile 45 gün arasında olmalıdır.",
    },
    faq: [
      {
        q: "Fertil pencere nasıl hesaplanır?",
        a: "Ovülasyon genellikle bir sonraki adetten 14 gün önce gerçekleşir. Sperm üreme yollarında 5 güne kadar hayatta kalabildiğinden, fertil pencere ovülasyondan 5 gün önce başlayıp 1 gün sonrasına kadar sürer.",
      },
      {
        q: "LH dalgalanması nedir?",
        a: "LH (lüteinleştirici hormon) dalgalanması, ovülasyonu 24-36 saat içinde tetikleyen ani bir LH artışıdır. Evde kullanılan ovülasyon testleri bu artışı idrarda tespit eder.",
      },
      {
        q: "Bu hesaplayıcıyı gebelikten korunmak için kullanabilir miyim?",
        a: "Hayır. Bu hesaplayıcı yalnızca bilgilendirme ve planlama amaçlıdır; bir doğum kontrol yöntemi değildir. Güvenilir doğum kontrolü için sağlık profesyoneline danışın.",
      },
    ],
  },

  de: {
    title: "Eisprung- und Fruchtbarkeitsrechner",
    short: "Berechnen Sie Ihre fruchtbaren Tage und den voraussichtlichen Eisprungtermin.",
    description:
      "Kostenloser Ovulationsrechner. Geben Sie Ihren letzten Periodenbeginn und Ihre durchschnittliche Zykluslänge ein, um Ihr fruchtbares Fenster, den Eisprungtermin und den nächsten Periodenbeginn zu schätzen.",
    keywords: [
      "Eisprungrechner",
      "fruchtbare Tage",
      "Ovulationsrechner",
      "wann ist Eisprung",
      "Fruchtbarkeitsfenster",
      "Zyklusrechner",
      "Schwangerschaftsplanung",
    ],
    inputs: {
      lmpDate: {
        label: "Letzter Menstruationsbeginn (LMP)",
        help: "Der erste Tag Ihrer letzten Periode.",
      },
      cycleLength: {
        label: "Durchschnittliche Zykluslänge (Tage)",
        help: "Die Anzahl der Tage vom ersten Tag einer Periode bis zum ersten Tag der nächsten. Durchschnittlich 28 Tage (Bereich: 21–45).",
      },
    },
    outputs: {
      ovulationDate: {
        label: "Voraussichtlicher Eisprungtermin",
        help: "Der Tag, an dem Ihr Eierstock voraussichtlich eine Eizelle freisetzt.",
      },
      fertileStart: {
        label: "Beginn des fruchtbaren Fensters",
        help: "Spermien können bis zu 5 Tage überleben, daher beginnt das fruchtbare Fenster 5 Tage vor dem Eisprung.",
      },
      fertileEnd: {
        label: "Ende des fruchtbaren Fensters",
        help: "Der Tag nach dem Eisprung — die Eizelle überlebt etwa 24 Stunden.",
      },
      nextPeriod: {
        label: "Nächste Periode (Prognose)",
        help: "Ihr voraussichtlicher Beginn der nächsten Menstruation.",
      },
      lhSurgeDate: {
        label: "LH-Anstieg (Prognose)",
        help: "Der Tag vor dem Eisprung, an dem typischerweise der LH-Anstieg in Ovulationstests nachweisbar ist.",
      },
    },
    errors: {
      invalidDate: "Bitte geben Sie ein gültiges Datum im Format JJJJ-MM-TT ein.",
      cycleLengthOutOfRange: "Die Zykluslänge muss zwischen 21 und 45 Tagen liegen.",
    },
    faq: [
      {
        q: "Wie wird das fruchtbare Fenster berechnet?",
        a: "Der Eisprung findet in der Regel 14 Tage vor der nächsten Periode statt. Da Spermien bis zu 5 Tage überleben können, umfasst das fruchtbare Fenster 5 Tage vor bis 1 Tag nach dem Eisprung.",
      },
      {
        q: "Was ist der LH-Anstieg?",
        a: "Der LH-Anstieg (luteinisierendes Hormon) löst den Eisprung innerhalb von 24–36 Stunden aus und kann mit Ovulationsteststreifen im Urin nachgewiesen werden.",
      },
    ],
  },

  fr: {
    title: "Calculateur d'ovulation et de fenêtre fertile",
    short: "Trouvez vos jours les plus fertiles et la date d'ovulation estimée selon votre cycle.",
    description:
      "Calculateur d'ovulation gratuit. Entrez la date de vos dernières règles et la durée moyenne de votre cycle pour estimer votre fenêtre fertile, la date d'ovulation et la prochaine date de règles.",
    keywords: [
      "calculateur ovulation",
      "fenêtre fertile",
      "jours fertiles",
      "quand ovule-t-on",
      "date ovulation",
      "cycle menstruel",
      "planification grossesse",
    ],
    inputs: {
      lmpDate: {
        label: "Date des dernières règles (DDR)",
        help: "Le premier jour de vos dernières règles.",
      },
      cycleLength: {
        label: "Durée moyenne du cycle (jours)",
        help: "Le nombre de jours entre le premier jour d'un cycle et le premier jour du suivant. Moyenne : 28 jours (plage : 21–45).",
      },
    },
    outputs: {
      ovulationDate: {
        label: "Date d'ovulation estimée",
        help: "Le jour où votre ovaire est le plus susceptible de libérer un ovule.",
      },
      fertileStart: {
        label: "Début de la fenêtre fertile",
        help: "Les spermatozoïdes pouvant survivre jusqu'à 5 jours, la fenêtre fertile commence 5 jours avant l'ovulation.",
      },
      fertileEnd: {
        label: "Fin de la fenêtre fertile",
        help: "Le lendemain de l'ovulation — l'ovule survit environ 24 heures.",
      },
      nextPeriod: {
        label: "Prochaines règles (prévision)",
        help: "La date prévue de début de vos prochaines règles.",
      },
      lhSurgeDate: {
        label: "Pic de LH (prévision)",
        help: "La veille de l'ovulation, moment où le pic d'hormone lutéinisante est généralement détecté par les tests d'ovulation.",
      },
    },
    errors: {
      invalidDate: "Veuillez entrer une date valide au format AAAA-MM-JJ.",
      cycleLengthOutOfRange: "La durée du cycle doit être comprise entre 21 et 45 jours.",
    },
    faq: [
      {
        q: "Comment la fenêtre fertile est-elle calculée ?",
        a: "L'ovulation a généralement lieu 14 jours avant les prochaines règles. Les spermatozoïdes pouvant survivre jusqu'à 5 jours, la fenêtre fertile s'étend de 5 jours avant à 1 jour après l'ovulation.",
      },
      {
        q: "Qu'est-ce que le pic de LH ?",
        a: "Le pic d'hormone lutéinisante (LH) déclenche l'ovulation dans les 24 à 36 heures et peut être détecté dans les urines à l'aide de tests d'ovulation.",
      },
    ],
  },

  es: {
    title: "Calculadora de ovulación y ventana fértil",
    short: "Encuentra tus días más fértiles y la fecha estimada de ovulación según tu ciclo.",
    description:
      "Calculadora de ovulación gratuita. Introduce la fecha de tu última regla y la duración promedio de tu ciclo para estimar tu ventana fértil, la fecha de ovulación y la próxima menstruación.",
    keywords: [
      "calculadora ovulación",
      "ventana fértil",
      "días fértiles",
      "cuándo ovulo",
      "fecha ovulación",
      "ciclo menstrual",
      "planificación embarazo",
    ],
    inputs: {
      lmpDate: {
        label: "Fecha de la última menstruación (FUM)",
        help: "El primer día de tu última regla.",
      },
      cycleLength: {
        label: "Duración promedio del ciclo (días)",
        help: "El número de días desde el primer día de un ciclo hasta el primero del siguiente. Promedio: 28 días (rango: 21–45).",
      },
    },
    outputs: {
      ovulationDate: {
        label: "Fecha de ovulación estimada",
        help: "El día en que es más probable que tu ovario libere un óvulo.",
      },
      fertileStart: {
        label: "Inicio de la ventana fértil",
        help: "Los espermatozoides pueden sobrevivir hasta 5 días, por lo que la ventana fértil comienza 5 días antes de la ovulación.",
      },
      fertileEnd: {
        label: "Fin de la ventana fértil",
        help: "El día después de la ovulación: el óvulo sobrevive unas 24 horas.",
      },
      nextPeriod: {
        label: "Próxima menstruación (estimada)",
        help: "La fecha estimada de inicio de tu próxima regla.",
      },
      lhSurgeDate: {
        label: "Pico de LH (estimado)",
        help: "El día antes de la ovulación, cuando normalmente se detecta el pico de hormona luteinizante en los tests de ovulación.",
      },
    },
    errors: {
      invalidDate: "Por favor, introduce una fecha válida en formato AAAA-MM-DD.",
      cycleLengthOutOfRange: "La duración del ciclo debe estar entre 21 y 45 días.",
    },
    faq: [
      {
        q: "¿Cómo se calcula la ventana fértil?",
        a: "La ovulación generalmente ocurre 14 días antes de la próxima regla. Como los espermatozoides pueden sobrevivir hasta 5 días, la ventana fértil abarca desde 5 días antes hasta 1 día después de la ovulación.",
      },
      {
        q: "¿Qué es el pico de LH?",
        a: "El pico de hormona luteinizante (LH) desencadena la ovulación en 24–36 horas y puede detectarse en la orina con tests de ovulación.",
      },
    ],
  },

  it: {
    title: "Calcolatore di ovulazione e finestra fertile",
    short: "Trova i tuoi giorni più fertili e la data di ovulazione stimata in base al tuo ciclo.",
    description:
      "Calcolatore di ovulazione gratuito. Inserisci la data dell'ultima mestruazione e la durata media del ciclo per stimare la finestra fertile, la data di ovulazione e la prossima mestruazione.",
    keywords: [
      "calcolatore ovulazione",
      "finestra fertile",
      "giorni fertili",
      "quando ovulo",
      "data ovulazione",
      "ciclo mestruale",
      "pianificazione gravidanza",
    ],
    inputs: {
      lmpDate: {
        label: "Data dell'ultima mestruazione (UPM)",
        help: "Il primo giorno della tua ultima mestruazione.",
      },
      cycleLength: {
        label: "Durata media del ciclo (giorni)",
        help: "Il numero di giorni dal primo giorno di un ciclo al primo del successivo. Media: 28 giorni (intervallo: 21–45).",
      },
    },
    outputs: {
      ovulationDate: {
        label: "Data di ovulazione stimata",
        help: "Il giorno in cui è più probabile che il tuo ovaio rilasci un ovulo.",
      },
      fertileStart: {
        label: "Inizio della finestra fertile",
        help: "Gli spermatozoi possono sopravvivere fino a 5 giorni, quindi la finestra fertile inizia 5 giorni prima dell'ovulazione.",
      },
      fertileEnd: {
        label: "Fine della finestra fertile",
        help: "Il giorno dopo l'ovulazione: l'ovulo sopravvive circa 24 ore.",
      },
      nextPeriod: {
        label: "Prossima mestruazione (prevista)",
        help: "La data prevista di inizio della tua prossima mestruazione.",
      },
      lhSurgeDate: {
        label: "Picco di LH (previsto)",
        help: "Il giorno prima dell'ovulazione, quando tipicamente i test di ovulazione rilevano il picco dell'ormone luteinizzante.",
      },
    },
    errors: {
      invalidDate: "Inserisci una data valida nel formato AAAA-MM-GG.",
      cycleLengthOutOfRange: "La durata del ciclo deve essere compresa tra 21 e 45 giorni.",
    },
    faq: [
      {
        q: "Come viene calcolata la finestra fertile?",
        a: "L'ovulazione avviene tipicamente 14 giorni prima della mestruazione successiva. Poiché gli spermatozoi possono sopravvivere fino a 5 giorni, la finestra fertile va da 5 giorni prima a 1 giorno dopo l'ovulazione.",
      },
      {
        q: "Che cos'è il picco di LH?",
        a: "Il picco dell'ormone luteinizzante (LH) scatena l'ovulazione entro 24–36 ore e può essere rilevato nelle urine con i test di ovulazione.",
      },
    ],
  },

  ar: {
    title: "حاسبة الإباضة ونافذة الخصوبة",
    short: "اعرفي أيامك الأكثر خصوبة وتاريخ الإباضة المتوقع بناءً على دورتك الشهرية.",
    description:
      "حاسبة إباضة مجانية. أدخلي تاريخ آخر دورة شهرية ومتوسط طول الدورة لتقدير نافذة الخصوبة وتاريخ الإباضة وموعد الدورة القادمة.",
    keywords: [
      "حاسبة الإباضة",
      "نافذة الخصوبة",
      "أيام التبويض",
      "متى تحدث الإباضة",
      "تاريخ الإباضة",
      "الدورة الشهرية",
      "التخطيط للحمل",
    ],
    inputs: {
      lmpDate: {
        label: "تاريخ آخر دورة شهرية",
        help: "اليوم الأول من آخر دورة شهرية لديك.",
      },
      cycleLength: {
        label: "متوسط طول الدورة (بالأيام)",
        help: "عدد الأيام من اليوم الأول لدورة إلى اليوم الأول للدورة التالية. المتوسط 28 يومًا (المدى: 21–45).",
      },
    },
    outputs: {
      ovulationDate: {
        label: "تاريخ الإباضة المتوقع",
        help: "اليوم الأكثر احتمالاً لإطلاق المبيض للبويضة.",
      },
      fertileStart: {
        label: "بداية نافذة الخصوبة",
        help: "يمكن للحيوانات المنوية البقاء حتى 5 أيام، لذا تبدأ نافذة الخصوبة قبل 5 أيام من الإباضة.",
      },
      fertileEnd: {
        label: "نهاية نافذة الخصوبة",
        help: "اليوم التالي للإباضة — تعيش البويضة نحو 24 ساعة.",
      },
      nextPeriod: {
        label: "الدورة القادمة (متوقعة)",
        help: "التاريخ المتوقع لبداية دورتك الشهرية القادمة.",
      },
      lhSurgeDate: {
        label: "ارتفاع هرمون LH (متوقع)",
        help: "اليوم السابق للإباضة حيث يُكشف عادةً عن ارتفاع مفاجئ في هرمون LH في اختبارات الإباضة.",
      },
    },
    errors: {
      invalidDate: "يرجى إدخال تاريخ صحيح بتنسيق YYYY-MM-DD.",
      cycleLengthOutOfRange: "يجب أن يكون طول الدورة بين 21 و45 يومًا.",
    },
    faq: [
      {
        q: "كيف تُحسب نافذة الخصوبة؟",
        a: "تحدث الإباضة عادةً قبل 14 يومًا من الدورة القادمة. وبما أن الحيوانات المنوية تعيش حتى 5 أيام، تمتد نافذة الخصوبة من 5 أيام قبل الإباضة حتى يوم واحد بعدها.",
      },
      {
        q: "ما هو ارتفاع هرمون LH؟",
        a: "ارتفاع الهرمون اللوتيني (LH) يحفّز الإباضة خلال 24–36 ساعة، ويمكن اكتشافه في البول باستخدام اختبارات الإباضة المنزلية.",
      },
    ],
  },

  ru: {
    title: "Калькулятор овуляции и фертильного окна",
    short: "Определите наиболее благоприятные для зачатия дни и прогнозируемую дату овуляции.",
    description:
      "Бесплатный калькулятор овуляции. Введите дату последней менструации и среднюю длину цикла, чтобы рассчитать фертильное окно, дату овуляции и следующую менструацию.",
    keywords: [
      "калькулятор овуляции",
      "фертильное окно",
      "дата овуляции",
      "когда наступает овуляция",
      "дни зачатия",
      "менструальный цикл",
      "планирование беременности",
    ],
    inputs: {
      lmpDate: {
        label: "Дата последней менструации (ДПМ)",
        help: "Первый день вашей последней менструации.",
      },
      cycleLength: {
        label: "Средняя длина цикла (дни)",
        help: "Количество дней от первого дня одной менструации до первого дня следующей. Среднее значение — 28 дней (диапазон: 21–45).",
      },
    },
    outputs: {
      ovulationDate: {
        label: "Прогнозируемая дата овуляции",
        help: "День, когда яичник наиболее вероятно выпустит яйцеклетку.",
      },
      fertileStart: {
        label: "Начало фертильного окна",
        help: "Сперматозоиды могут жить до 5 дней, поэтому фертильное окно начинается за 5 дней до овуляции.",
      },
      fertileEnd: {
        label: "Конец фертильного окна",
        help: "День после овуляции — яйцеклетка живёт около 24 часов.",
      },
      nextPeriod: {
        label: "Следующая менструация (прогноз)",
        help: "Прогнозируемая дата начала следующей менструации.",
      },
      lhSurgeDate: {
        label: "Пик ЛГ (прогноз)",
        help: "День перед овуляцией, когда тесты на овуляцию обычно выявляют пик лютеинизирующего гормона.",
      },
    },
    errors: {
      invalidDate: "Пожалуйста, введите корректную дату в формате ГГГГ-ММ-ДД.",
      cycleLengthOutOfRange: "Длина цикла должна быть от 21 до 45 дней.",
    },
    faq: [
      {
        q: "Как рассчитывается фертильное окно?",
        a: "Овуляция обычно происходит за 14 дней до следующей менструации. Поскольку сперматозоиды могут жить до 5 дней, фертильное окно охватывает период от 5 дней до овуляции до 1 дня после неё.",
      },
      {
        q: "Что такое пик ЛГ?",
        a: "Пик лютеинизирующего гормона (ЛГ) вызывает овуляцию в течение 24–36 часов. Тесты на овуляцию выявляют этот пик в моче.",
      },
    ],
  },

  zh: {
    title: "排卵期和受孕窗口计算器",
    short: "根据您的月经周期，找出最易受孕的天数和预测排卵日期。",
    description:
      "免费排卵计算器。输入您的末次月经日期和平均周期长度，即可估算受孕窗口、排卵日期、LH峰值及下次月经日期。",
    keywords: [
      "排卵计算器",
      "受孕窗口",
      "排卵日期",
      "何时排卵",
      "月经周期",
      "怀孕计划",
      "生育期计算",
    ],
    inputs: {
      lmpDate: {
        label: "末次月经日期（LMP）",
        help: "您最近一次月经的第一天。",
      },
      cycleLength: {
        label: "平均周期长度（天）",
        help: "从一次月经第一天到下一次月经第一天的天数。平均28天（范围：21–45天）。",
      },
    },
    outputs: {
      ovulationDate: {
        label: "预测排卵日期",
        help: "您的卵巢最可能释放卵子的那一天。",
      },
      fertileStart: {
        label: "受孕窗口开始",
        help: "精子可存活最多5天，因此受孕窗口从排卵前5天开始。",
      },
      fertileEnd: {
        label: "受孕窗口结束",
        help: "排卵后第二天——卵子大约存活24小时。",
      },
      nextPeriod: {
        label: "下次月经（预测）",
        help: "您下次月经预测开始日期。",
      },
      lhSurgeDate: {
        label: "LH峰值（预测）",
        help: "排卵前一天，排卵测试通常在此时检测到促黄体生成素峰值。",
      },
    },
    errors: {
      invalidDate: "请输入格式为YYYY-MM-DD的有效日期。",
      cycleLengthOutOfRange: "周期长度必须在21至45天之间。",
    },
    faq: [
      {
        q: "受孕窗口是如何计算的？",
        a: "排卵通常发生在下次月经前14天。由于精子可存活最多5天，受孕窗口从排卵前5天延伸至排卵后1天。",
      },
      {
        q: "什么是LH峰值？",
        a: "促黄体生成素（LH）峰值在24–36小时内触发排卵，排卵测试可在尿液中检测到这一峰值。",
      },
    ],
  },

  ja: {
    title: "排卵日・妊娠しやすい時期計算機",
    short: "月経周期に基づいて、最も妊娠しやすい時期と排卵予定日を計算します。",
    description:
      "無料の排卵日計算機。最終月経日と平均周期長を入力すると、妊娠可能期間、排卵予定日、LHサージ日、次回月経開始予定日が分かります。",
    keywords: [
      "排卵日計算機",
      "妊娠しやすい時期",
      "排卵日予測",
      "いつ排卵するか",
      "月経周期",
      "妊活",
      "妊娠計画",
    ],
    inputs: {
      lmpDate: {
        label: "最終月経開始日（LMP）",
        help: "直近の月経が始まった日（初日）。",
      },
      cycleLength: {
        label: "平均周期長（日数）",
        help: "ある月経の初日から次の月経の初日までの日数。平均は28日（範囲：21〜45日）。",
      },
    },
    outputs: {
      ovulationDate: {
        label: "排卵予定日",
        help: "卵巣が卵子を放出すると予測される日。",
      },
      fertileStart: {
        label: "妊娠可能期間の開始",
        help: "精子は最大5日間生存できるため、妊娠可能期間は排卵日の5日前から始まります。",
      },
      fertileEnd: {
        label: "妊娠可能期間の終了",
        help: "排卵の翌日——卵子は約24時間生存します。",
      },
      nextPeriod: {
        label: "次回月経予定日",
        help: "次回月経が始まると予測される日付。",
      },
      lhSurgeDate: {
        label: "LHサージ予測日",
        help: "排卵の前日。排卵検査薬では通常この日にLHの急上昇が検出されます。",
      },
    },
    errors: {
      invalidDate: "YYYY-MM-DD形式で有効な日付を入力してください。",
      cycleLengthOutOfRange: "周期長は21〜45日の範囲で入力してください。",
    },
    faq: [
      {
        q: "妊娠可能期間はどのように計算されますか？",
        a: "排卵は通常、次の月経の14日前に起こります。精子が最大5日間生存できるため、妊娠可能期間は排卵の5日前から排卵の1日後まで（計6日間）です。",
      },
      {
        q: "LHサージとは何ですか？",
        a: "LH（黄体形成ホルモン）の急上昇は、24〜36時間以内に排卵を引き起こします。排卵検査薬は尿中のこの急上昇を検出します。",
      },
    ],
  },

  ko: {
    title: "배란일 및 가임기 계산기",
    short: "월경 주기를 기반으로 가장 임신 가능성이 높은 날과 예상 배란일을 계산하세요.",
    description:
      "무료 배란일 계산기. 마지막 월경 날짜와 평균 주기 길이를 입력하면 가임기, 배란일, LH 서지 날짜, 다음 월경 예정일을 확인할 수 있습니다.",
    keywords: [
      "배란일 계산기",
      "가임기 계산",
      "배란일 예측",
      "언제 배란되나",
      "월경 주기",
      "임신 계획",
      "임신 가능일",
    ],
    inputs: {
      lmpDate: {
        label: "마지막 월경 시작일(LMP)",
        help: "가장 최근 월경이 시작된 첫째 날.",
      },
      cycleLength: {
        label: "평균 주기 길이(일수)",
        help: "한 월경의 첫째 날부터 다음 월경 첫째 날까지의 일수. 평균 28일(범위: 21–45일).",
      },
    },
    outputs: {
      ovulationDate: {
        label: "예상 배란일",
        help: "난소에서 난자가 방출될 가능성이 가장 높은 날.",
      },
      fertileStart: {
        label: "가임기 시작",
        help: "정자는 최대 5일 동안 생존할 수 있으므로, 가임기는 배란일 5일 전부터 시작됩니다.",
      },
      fertileEnd: {
        label: "가임기 종료",
        help: "배란 다음 날 — 난자는 약 24시간 생존합니다.",
      },
      nextPeriod: {
        label: "다음 월경 예정일",
        help: "다음 월경이 시작될 것으로 예측되는 날짜.",
      },
      lhSurgeDate: {
        label: "LH 서지 예정일",
        help: "배란 전날로, 배란 검사기에서 황체형성호르몬(LH) 급증이 일반적으로 감지되는 날.",
      },
    },
    errors: {
      invalidDate: "YYYY-MM-DD 형식의 유효한 날짜를 입력하세요.",
      cycleLengthOutOfRange: "주기 길이는 21일에서 45일 사이여야 합니다.",
    },
    faq: [
      {
        q: "가임기는 어떻게 계산되나요?",
        a: "배란은 보통 다음 월경 14일 전에 일어납니다. 정자가 최대 5일 동안 생존할 수 있으므로, 가임기는 배란일 5일 전부터 배란 후 1일까지입니다.",
      },
      {
        q: "LH 서지란 무엇인가요?",
        a: "황체형성호르몬(LH) 급증은 24–36시간 내에 배란을 유발하며, 배란 검사기로 소변에서 감지할 수 있습니다.",
      },
    ],
  },

  hi: {
    title: "ओव्यूलेशन और उपजाऊ अवधि कैलकुलेटर",
    short: "अपने मासिक चक्र के आधार पर सबसे उपजाऊ दिन और अनुमानित ओव्यूलेशन तिथि जानें।",
    description:
      "मुफ़्त ओव्यूलेशन कैलकुलेटर। अपनी अंतिम माहवारी की तारीख और औसत चक्र की अवधि दर्ज करें और उपजाऊ खिड़की, ओव्यूलेशन तिथि, LH उछाल और अगली माहवारी का अनुमान लगाएं।",
    keywords: [
      "ओव्यूलेशन कैलकुलेटर",
      "उपजाऊ अवधि",
      "ओव्यूलेशन तिथि",
      "कब ओव्यूलेशन होता है",
      "मासिक चक्र",
      "गर्भावस्था योजना",
      "प्रजनन क्षमता",
    ],
    inputs: {
      lmpDate: {
        label: "अंतिम माहवारी की तारीख (LMP)",
        help: "आपकी सबसे हाल की माहवारी का पहला दिन।",
      },
      cycleLength: {
        label: "औसत चक्र अवधि (दिन)",
        help: "एक माहवारी के पहले दिन से अगली माहवारी के पहले दिन तक के दिनों की संख्या। औसत 28 दिन (सीमा: 21–45)।",
      },
    },
    outputs: {
      ovulationDate: {
        label: "अनुमानित ओव्यूलेशन तिथि",
        help: "वह दिन जब आपके अंडाशय से अंडा निकलने की सबसे अधिक संभावना है।",
      },
      fertileStart: {
        label: "उपजाऊ अवधि की शुरुआत",
        help: "शुक्राणु 5 दिनों तक जीवित रह सकते हैं, इसलिए उपजाऊ अवधि ओव्यूलेशन से 5 दिन पहले शुरू होती है।",
      },
      fertileEnd: {
        label: "उपजाऊ अवधि की समाप्ति",
        help: "ओव्यूलेशन के बाद का दिन — अंडा लगभग 24 घंटे जीवित रहता है।",
      },
      nextPeriod: {
        label: "अगली माहवारी (अनुमानित)",
        help: "आपकी अगली माहवारी शुरू होने की अनुमानित तिथि।",
      },
      lhSurgeDate: {
        label: "LH उछाल (अनुमानित)",
        help: "ओव्यूलेशन से एक दिन पहले, जब ओव्यूलेशन टेस्ट में LH उछाल आमतौर पर पाया जाता है।",
      },
    },
    errors: {
      invalidDate: "कृपया YYYY-MM-DD प्रारूप में एक वैध तारीख दर्ज करें।",
      cycleLengthOutOfRange: "चक्र की अवधि 21 से 45 दिनों के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "उपजाऊ अवधि की गणना कैसे की जाती है?",
        a: "ओव्यूलेशन आमतौर पर अगली माहवारी से 14 दिन पहले होता है। शुक्राणु 5 दिनों तक जीवित रह सकते हैं, इसलिए उपजाऊ अवधि ओव्यूलेशन से 5 दिन पहले से लेकर 1 दिन बाद तक होती है।",
      },
      {
        q: "LH उछाल क्या है?",
        a: "ल्यूटिनाइज़िंग हार्मोन (LH) में अचानक वृद्धि 24–36 घंटों में ओव्यूलेशन को उत्प्रेरित करती है। होम ओव्यूलेशन टेस्ट मूत्र में इस उछाल का पता लगाते हैं।",
      },
    ],
  },
};

export default i18n;
