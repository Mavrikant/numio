import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Pregnancy Due Date Calculator",
    short: "Calculate your baby's due date using Naegele's Rule based on your last menstrual period.",
    description:
      "Free pregnancy due date calculator. Enter your LMP date and cycle length to get your estimated due date, gestational age, trimester, and days remaining.",
    keywords: [
      "pregnancy due date calculator",
      "due date calculator",
      "gestational age calculator",
      "LMP calculator",
      "pregnancy week calculator",
      "Naegele rule",
      "pregnancy trimester",
    ],
    inputs: {
      lmpDate: {
        label: "First day of last menstrual period (LMP)",
        help: "Enter the date when your last period started (YYYY-MM-DD).",
      },
      cycleLength: {
        label: "Cycle length (days)",
        help: "Average length of your menstrual cycle. Typical range is 21–35 days, with 28 being average.",
      },
      currentDate: {
        label: "Today's date",
        help: "Today's date is used to calculate your current gestational age and days remaining.",
      },
    },
    outputs: {
      dueDate: {
        label: "Estimated Due Date",
        help: "Your baby's estimated due date calculated using Naegele's Rule adjusted for your cycle length.",
      },
      gestationalWeeks: {
        label: "Gestational Age (weeks)",
        help: "Number of complete weeks of pregnancy elapsed since LMP.",
      },
      gestationalDays: {
        label: "Gestational Age (extra days)",
        help: "Additional days beyond the last complete gestational week.",
      },
      trimester: {
        label: "Current Trimester",
        help: "First trimester: weeks 1–13. Second trimester: weeks 14–27. Third trimester: weeks 28–40.",
      },
      daysRemaining: {
        label: "Days Until Due Date",
        help: "Number of days remaining from today until the estimated due date.",
      },
    },
    errors: {
      invalidDate: "Please enter a valid date in YYYY-MM-DD format.",
      futureLmp: "The LMP date cannot be in the future.",
      currentBeforeLmp: "Today's date must be on or after the LMP date.",
    },
    faq: [
      {
        q: "How accurate is the due date calculation?",
        a: "Naegele's Rule provides an estimate — only about 5% of babies are born exactly on their due date. Most births occur within two weeks before or after the estimated date. An ultrasound in the first trimester provides the most accurate dating.",
      },
      {
        q: "What is Naegele's Rule?",
        a: "Naegele's Rule estimates the due date by adding 280 days (40 weeks) to the first day of the last menstrual period. This assumes a standard 28-day cycle. Our calculator adjusts the date by the difference between your actual cycle length and 28 days.",
      },
      {
        q: "What if my cycle is not 28 days?",
        a: "The calculator adjusts the due date for non-standard cycle lengths. For each day your cycle is longer than 28 days, the due date is pushed forward one day, and vice versa. For example, a 32-day cycle shifts the due date 4 days later.",
      },
      {
        q: "What are the trimester boundaries?",
        a: "The first trimester spans weeks 1–13 (days 1–97), the second trimester weeks 14–27 (days 98–195), and the third trimester weeks 28 through delivery (days 196+).",
      },
      {
        q: "Should I rely solely on this calculator for medical decisions?",
        a: "No. This tool is for informational purposes only. Always consult your healthcare provider for accurate pregnancy dating, especially using first-trimester ultrasound which remains the gold standard for confirming gestational age.",
      },
    ],
  },
  pt: {
    title: "Pregnancy Due Date Calculator",
    short: "Calculate your baby's due date using Naegele's Rule based on your last menstrual period.",
    description:
      "Free pregnancy due date calculator. Enter your LMP date and cycle length to get your estimated due date, gestational age, trimester, and days remaining.",
    keywords: [
      "pregnancy due date calculator",
      "due date calculator",
      "gestational age calculator",
      "LMP calculator",
      "pregnancy week calculator",
      "Naegele rule",
      "pregnancy trimester",
    ],
    inputs: {
      lmpDate: {
        label: "First day of last menstrual period (LMP)",
        help: "Enter the date when your last period started (YYYY-MM-DD).",
      },
      cycleLength: {
        label: "Cycle length (days)",
        help: "Average length of your menstrual cycle. Typical range is 21–35 days, with 28 being average.",
      },
      currentDate: {
        label: "Today's date",
        help: "Today's date is used to calculate your current gestational age and days remaining.",
      },
    },
    outputs: {
      dueDate: {
        label: "Estimated Due Date",
        help: "Your baby's estimated due date calculated using Naegele's Rule adjusted for your cycle length.",
      },
      gestationalWeeks: {
        label: "Gestational Age (weeks)",
        help: "Number of complete weeks of pregnancy elapsed since LMP.",
      },
      gestationalDays: {
        label: "Gestational Age (extra days)",
        help: "Additional days beyond the last complete gestational week.",
      },
      trimester: {
        label: "Current Trimester",
        help: "First trimester: weeks 1–13. Second trimester: weeks 14–27. Third trimester: weeks 28–40.",
      },
      daysRemaining: {
        label: "Days Until Due Date",
        help: "Number of days remaining from today until the estimated due date.",
      },
    },
    errors: {
      invalidDate: "Please enter a valid date in YYYY-MM-DD format.",
      futureLmp: "The LMP date cannot be in the future.",
      currentBeforeLmp: "Today's date must be on or after the LMP date.",
    },
    faq: [
      {
        q: "How accurate is the due date calculation?",
        a: "Naegele's Rule provides an estimate — only about 5% of babies are born exactly on their due date. Most births occur within two weeks before or after the estimated date. An ultrasound in the first trimester provides the most accurate dating.",
      },
      {
        q: "What is Naegele's Rule?",
        a: "Naegele's Rule estimates the due date by adding 280 days (40 weeks) to the first day of the last menstrual period. This assumes a standard 28-day cycle. Our calculator adjusts the date by the difference between your actual cycle length and 28 days.",
      },
      {
        q: "What if my cycle is not 28 days?",
        a: "The calculator adjusts the due date for non-standard cycle lengths. For each day your cycle is longer than 28 days, the due date is pushed forward one day, and vice versa. For example, a 32-day cycle shifts the due date 4 days later.",
      },
      {
        q: "What are the trimester boundaries?",
        a: "The first trimester spans weeks 1–13 (days 1–97), the second trimester weeks 14–27 (days 98–195), and the third trimester weeks 28 through delivery (days 196+).",
      },
      {
        q: "Should I rely solely on this calculator for medical decisions?",
        a: "No. This tool is for informational purposes only. Always consult your healthcare provider for accurate pregnancy dating, especially using first-trimester ultrasound which remains the gold standard for confirming gestational age.",
      },
    ],
  },
  id: {
    title: "Pregnancy Due Date Calculator",
    short: "Calculate your baby's due date using Naegele's Rule based on your last menstrual period.",
    description:
      "Free pregnancy due date calculator. Enter your LMP date and cycle length to get your estimated due date, gestational age, trimester, and days remaining.",
    keywords: [
      "pregnancy due date calculator",
      "due date calculator",
      "gestational age calculator",
      "LMP calculator",
      "pregnancy week calculator",
      "Naegele rule",
      "pregnancy trimester",
    ],
    inputs: {
      lmpDate: {
        label: "First day of last menstrual period (LMP)",
        help: "Enter the date when your last period started (YYYY-MM-DD).",
      },
      cycleLength: {
        label: "Cycle length (days)",
        help: "Average length of your menstrual cycle. Typical range is 21–35 days, with 28 being average.",
      },
      currentDate: {
        label: "Today's date",
        help: "Today's date is used to calculate your current gestational age and days remaining.",
      },
    },
    outputs: {
      dueDate: {
        label: "Estimated Due Date",
        help: "Your baby's estimated due date calculated using Naegele's Rule adjusted for your cycle length.",
      },
      gestationalWeeks: {
        label: "Gestational Age (weeks)",
        help: "Number of complete weeks of pregnancy elapsed since LMP.",
      },
      gestationalDays: {
        label: "Gestational Age (extra days)",
        help: "Additional days beyond the last complete gestational week.",
      },
      trimester: {
        label: "Current Trimester",
        help: "First trimester: weeks 1–13. Second trimester: weeks 14–27. Third trimester: weeks 28–40.",
      },
      daysRemaining: {
        label: "Days Until Due Date",
        help: "Number of days remaining from today until the estimated due date.",
      },
    },
    errors: {
      invalidDate: "Please enter a valid date in YYYY-MM-DD format.",
      futureLmp: "The LMP date cannot be in the future.",
      currentBeforeLmp: "Today's date must be on or after the LMP date.",
    },
    faq: [
      {
        q: "How accurate is the due date calculation?",
        a: "Naegele's Rule provides an estimate — only about 5% of babies are born exactly on their due date. Most births occur within two weeks before or after the estimated date. An ultrasound in the first trimester provides the most accurate dating.",
      },
      {
        q: "What is Naegele's Rule?",
        a: "Naegele's Rule estimates the due date by adding 280 days (40 weeks) to the first day of the last menstrual period. This assumes a standard 28-day cycle. Our calculator adjusts the date by the difference between your actual cycle length and 28 days.",
      },
      {
        q: "What if my cycle is not 28 days?",
        a: "The calculator adjusts the due date for non-standard cycle lengths. For each day your cycle is longer than 28 days, the due date is pushed forward one day, and vice versa. For example, a 32-day cycle shifts the due date 4 days later.",
      },
      {
        q: "What are the trimester boundaries?",
        a: "The first trimester spans weeks 1–13 (days 1–97), the second trimester weeks 14–27 (days 98–195), and the third trimester weeks 28 through delivery (days 196+).",
      },
      {
        q: "Should I rely solely on this calculator for medical decisions?",
        a: "No. This tool is for informational purposes only. Always consult your healthcare provider for accurate pregnancy dating, especially using first-trimester ultrasound which remains the gold standard for confirming gestational age.",
      },
    ],
  },


  tr: {
    title: "Hamilelik Doğum Tarihi Hesaplayıcısı",
    short: "Son adet tarihinize göre Naegele Kuralı kullanılarak bebeğinizin tahmini doğum tarihini hesaplayın.",
    description:
      "Ücretsiz hamilelik doğum tarihi hesaplayıcısı. Son adet tarihinizi ve döngü uzunluğunuzu girerek tahmini doğum tarihinizi, gebelik haftanızı, trimestırınızı ve kalan günlerinizi öğrenin.",
    keywords: [
      "hamilelik doğum tarihi hesaplama",
      "doğum tarihi hesaplayıcı",
      "gebelik haftası hesaplama",
      "son adet tarihi hesaplama",
      "Naegele kuralı",
      "hamilelik trimestır",
      "tahmini doğum tarihi",
    ],
    inputs: {
      lmpDate: {
        label: "Son adet döneminin ilk günü (SAT)",
        help: "Son adedinizin başladığı tarihi girin (YYYY-AA-GG formatında).",
      },
      cycleLength: {
        label: "Döngü uzunluğu (gün)",
        help: "Adet döngünüzün ortalama uzunluğu. Tipik aralık 21–35 gündür; ortalama 28 gündür.",
      },
      currentDate: {
        label: "Bugünün tarihi",
        help: "Mevcut gebelik haftanızı ve kalan günleri hesaplamak için bugünün tarihi kullanılır.",
      },
    },
    outputs: {
      dueDate: {
        label: "Tahmini Doğum Tarihi",
        help: "Naegele Kuralı ile döngü uzunluğunuz esas alınarak hesaplanan bebeğinizin tahmini doğum tarihi.",
      },
      gestationalWeeks: {
        label: "Gebelik Süresi (hafta)",
        help: "Son adet tarihinden itibaren geçen tam hafta sayısı.",
      },
      gestationalDays: {
        label: "Gebelik Süresi (ek gün)",
        help: "Son tam gebelik haftasının ötesindeki ek gün sayısı.",
      },
      trimester: {
        label: "Mevcut Trimestır",
        help: "1. trimestır: 1–13. hafta. 2. trimestır: 14–27. hafta. 3. trimestır: 28–40. hafta.",
      },
      daysRemaining: {
        label: "Doğuma Kalan Gün",
        help: "Bugünden tahmini doğum tarihine kadar kalan gün sayısı.",
      },
    },
    errors: {
      invalidDate: "Lütfen YYYY-AA-GG formatında geçerli bir tarih girin.",
      futureLmp: "Son adet tarihi gelecekte olamaz.",
      currentBeforeLmp: "Bugünün tarihi, son adet tarihinde veya sonrasında olmalıdır.",
    },
    faq: [
      {
        q: "Doğum tarihi hesaplaması ne kadar doğrudur?",
        a: "Naegele Kuralı bir tahmin sunar; bebeklerin yalnızca yaklaşık yüzde beşi tam olarak tahmini doğum tarihinde doğar. Çoğu doğum, tahmini tarihten iki hafta önce veya sonra gerçekleşir. İlk trimestırda yapılan ultrason en doğru tarihlemeyi sağlar.",
      },
      {
        q: "Naegele Kuralı nedir?",
        a: "Naegele Kuralı, son adet döneminin ilk gününe 280 gün (40 hafta) ekleyerek tahmini doğum tarihini hesaplar. 28 günlük standart bir döngü varsayılır. Hesaplayıcımız, döngü uzunluğunuzdaki fark kadar tarihi ayarlar.",
      },
      {
        q: "Döngüm 28 gün değilse ne olur?",
        a: "Hesaplayıcı, standart dışı döngü uzunlukları için doğum tarihini ayarlar. 28 günden fazla olan her gün için doğum tarihi bir gün ileri alınır; eksik günler için ise geri alınır. Örneğin 32 günlük bir döngü, doğum tarihini 4 gün ileriye taşır.",
      },
      {
        q: "Trimestır sınırları nelerdir?",
        a: "1. trimestır 1–13. haftaları (1–97. günler), 2. trimestır 14–27. haftaları (98–195. günler) ve 3. trimestır 28. haftadan doğuma kadar olan dönemi (196+. günler) kapsar.",
      },
      {
        q: "Tıbbi kararlar için yalnızca bu hesaplayıcıya güvenebilir miyim?",
        a: "Hayır. Bu araç yalnızca bilgilendirme amaçlıdır. Gebelik tarihlendirmesi için, özellikle gebelik yaşının teyidinde altın standart olan ilk trimestır ultrasonu ile birlikte, sağlık profesyonelinize danışın.",
      },
    ],
  },

  de: {
    title: "Schwangerschafts-Geburtsterminrechner",
    short: "Berechnen Sie Ihren voraussichtlichen Geburtstermin nach der Naegele-Regel auf Basis Ihrer letzten Menstruation.",
    description:
      "Kostenloser Geburtsterminrechner. Geben Sie das Datum Ihrer letzten Regelblutung und Ihre Zykluslänge ein, um Ihren voraussichtlichen Geburtstermin, das Schwangerschaftsalter, das Trimester und die verbleibenden Tage zu ermitteln.",
    keywords: [
      "Geburtsterminrechner",
      "Schwangerschaft Geburtstermin",
      "Schwangerschaftswoche berechnen",
      "Naegele-Regel",
      "letzte Regelblutung Rechner",
      "Trimester Rechner",
      "SSW Rechner",
    ],
    inputs: {
      lmpDate: {
        label: "Erster Tag der letzten Menstruation (LMP)",
        help: "Geben Sie das Datum ein, an dem Ihre letzte Periode begann (JJJJ-MM-TT).",
      },
      cycleLength: {
        label: "Zykluslänge (Tage)",
        help: "Durchschnittliche Länge Ihres Menstruationszyklus. Typischer Bereich: 21–35 Tage, Durchschnitt: 28 Tage.",
      },
      currentDate: {
        label: "Heutiges Datum",
        help: "Das heutige Datum wird zur Berechnung Ihres aktuellen Schwangerschaftsalters und der verbleibenden Tage verwendet.",
      },
    },
    outputs: {
      dueDate: {
        label: "Voraussichtlicher Geburtstermin",
        help: "Ihr voraussichtlicher Geburtstermin nach der Naegele-Regel, angepasst an Ihre Zykluslänge.",
      },
      gestationalWeeks: {
        label: "Schwangerschaftsdauer (Wochen)",
        help: "Anzahl der vollständigen Schwangerschaftswochen seit der letzten Menstruation.",
      },
      gestationalDays: {
        label: "Schwangerschaftsdauer (zusätzliche Tage)",
        help: "Zusätzliche Tage über die letzte vollständige Schwangerschaftswoche hinaus.",
      },
      trimester: {
        label: "Aktuelles Trimester",
        help: "1. Trimester: Wochen 1–13. 2. Trimester: Wochen 14–27. 3. Trimester: Wochen 28–40.",
      },
      daysRemaining: {
        label: "Verbleibende Tage bis zur Geburt",
        help: "Anzahl der Tage vom heutigen Datum bis zum voraussichtlichen Geburtstermin.",
      },
    },
    errors: {
      invalidDate: "Bitte geben Sie ein gültiges Datum im Format JJJJ-MM-TT ein.",
      futureLmp: "Das LMP-Datum darf nicht in der Zukunft liegen.",
      currentBeforeLmp: "Das heutige Datum muss am oder nach dem LMP-Datum liegen.",
    },
    faq: [
      {
        q: "Wie genau ist die Geburtsterminberechnung?",
        a: "Die Naegele-Regel liefert eine Schätzung — nur etwa 5 % der Babys werden genau am errechneten Termin geboren. Die meisten Geburten erfolgen innerhalb von zwei Wochen vor oder nach dem geschätzten Termin. Ein Ultraschall im ersten Trimester bietet die genaueste Terminbestimmung.",
      },
      {
        q: "Was ist die Naegele-Regel?",
        a: "Die Naegele-Regel schätzt den Geburtstermin, indem 280 Tage (40 Wochen) zum ersten Tag der letzten Regelblutung addiert werden. Sie geht von einem 28-tägigen Standardzyklus aus. Unser Rechner passt den Termin entsprechend der Abweichung Ihrer Zykluslänge an.",
      },
      {
        q: "Was ist, wenn mein Zyklus nicht 28 Tage beträgt?",
        a: "Der Rechner passt den Geburtstermin bei nicht standardmäßigen Zykluslängen an. Für jeden Tag, den Ihr Zyklus länger als 28 Tage ist, wird der Termin einen Tag nach vorne verschoben. Ein 32-tägiger Zyklus verschiebt den Termin beispielsweise um 4 Tage nach hinten.",
      },
      {
        q: "Welche Trimestergrenzen gelten?",
        a: "Das erste Trimester umfasst die Wochen 1–13, das zweite Trimester die Wochen 14–27 und das dritte Trimester die Wochen 28 bis zur Geburt.",
      },
      {
        q: "Darf ich mich für medizinische Entscheidungen allein auf diesen Rechner verlassen?",
        a: "Nein. Dieses Tool dient ausschließlich zu Informationszwecken. Wenden Sie sich für eine genaue Schwangerschaftsdatierung stets an Ihren Arzt, insbesondere mithilfe eines Ultraschalls im ersten Trimester.",
      },
    ],
  },

  fr: {
    title: "Calculateur de date d'accouchement",
    short: "Calculez votre date d'accouchement prévue selon la règle de Naegele à partir de vos dernières règles.",
    description:
      "Calculateur de date d'accouchement gratuit. Entrez la date de vos dernières règles et la longueur de votre cycle pour obtenir votre date prévue d'accouchement, votre âge gestationnel, votre trimestre et les jours restants.",
    keywords: [
      "calculateur date accouchement",
      "date prévue accouchement",
      "âge gestationnel",
      "règle de Naegele",
      "calcul semaine grossesse",
      "trimestre grossesse",
      "DPA grossesse",
    ],
    inputs: {
      lmpDate: {
        label: "Premier jour des dernières règles (DDR)",
        help: "Entrez la date du début de vos dernières règles (AAAA-MM-JJ).",
      },
      cycleLength: {
        label: "Durée du cycle (jours)",
        help: "Durée moyenne de votre cycle menstruel. La plage habituelle est de 21 à 35 jours, avec une moyenne de 28 jours.",
      },
      currentDate: {
        label: "Date d'aujourd'hui",
        help: "La date d'aujourd'hui est utilisée pour calculer votre âge gestationnel actuel et les jours restants.",
      },
    },
    outputs: {
      dueDate: {
        label: "Date prévue d'accouchement",
        help: "Votre date d'accouchement estimée calculée selon la règle de Naegele, ajustée pour la durée de votre cycle.",
      },
      gestationalWeeks: {
        label: "Âge gestationnel (semaines)",
        help: "Nombre de semaines complètes de grossesse écoulées depuis les dernières règles.",
      },
      gestationalDays: {
        label: "Âge gestationnel (jours supplémentaires)",
        help: "Jours supplémentaires au-delà de la dernière semaine gestationnelle complète.",
      },
      trimester: {
        label: "Trimestre actuel",
        help: "1er trimestre : semaines 1–13. 2e trimestre : semaines 14–27. 3e trimestre : semaines 28–40.",
      },
      daysRemaining: {
        label: "Jours restants avant l'accouchement",
        help: "Nombre de jours restants entre aujourd'hui et la date prévue d'accouchement.",
      },
    },
    errors: {
      invalidDate: "Veuillez entrer une date valide au format AAAA-MM-JJ.",
      futureLmp: "La date des dernières règles ne peut pas être dans le futur.",
      currentBeforeLmp: "La date d'aujourd'hui doit être égale ou postérieure à la date des dernières règles.",
    },
    faq: [
      {
        q: "Quelle est la précision du calcul de la date d'accouchement ?",
        a: "La règle de Naegele fournit une estimation — seulement environ 5 % des bébés naissent exactement à la date prévue. La plupart des naissances surviennent dans les deux semaines précédant ou suivant la date estimée. Une échographie au premier trimestre offre la datation la plus précise.",
      },
      {
        q: "Qu'est-ce que la règle de Naegele ?",
        a: "La règle de Naegele estime la date d'accouchement en ajoutant 280 jours (40 semaines) au premier jour des dernières règles. Elle suppose un cycle standard de 28 jours. Notre calculateur ajuste la date selon l'écart entre votre cycle réel et 28 jours.",
      },
      {
        q: "Que se passe-t-il si mon cycle ne dure pas 28 jours ?",
        a: "Le calculateur ajuste la date d'accouchement en fonction des cycles non standard. Pour chaque jour où votre cycle dépasse 28 jours, la date est repoussée d'un jour. Par exemple, un cycle de 32 jours décale la date de 4 jours.",
      },
      {
        q: "Quelles sont les limites des trimestres ?",
        a: "Le premier trimestre couvre les semaines 1 à 13, le deuxième trimestre les semaines 14 à 27, et le troisième trimestre les semaines 28 jusqu'à l'accouchement.",
      },
      {
        q: "Puis-je me fier uniquement à ce calculateur pour des décisions médicales ?",
        a: "Non. Cet outil est fourni à titre informatif uniquement. Consultez toujours votre professionnel de santé pour une datation précise de la grossesse, notamment par échographie du premier trimestre.",
      },
    ],
  },

  es: {
    title: "Calculadora de Fecha de Parto",
    short: "Calcula tu fecha probable de parto usando la Regla de Naegele a partir de tu última menstruación.",
    description:
      "Calculadora gratuita de fecha de parto. Introduce la fecha de tu última menstruación y la duración de tu ciclo para obtener tu fecha probable de parto, edad gestacional, trimestre y días restantes.",
    keywords: [
      "calculadora fecha parto",
      "fecha probable de parto",
      "edad gestacional",
      "regla de Naegele",
      "semanas de embarazo",
      "trimestre embarazo",
      "calcular fecha nacimiento",
    ],
    inputs: {
      lmpDate: {
        label: "Primer día de la última menstruación (FUR)",
        help: "Introduce la fecha en que comenzó tu última menstruación (AAAA-MM-DD).",
      },
      cycleLength: {
        label: "Duración del ciclo (días)",
        help: "Duración media de tu ciclo menstrual. El rango típico es de 21 a 35 días, con una media de 28 días.",
      },
      currentDate: {
        label: "Fecha de hoy",
        help: "La fecha de hoy se usa para calcular tu edad gestacional actual y los días restantes.",
      },
    },
    outputs: {
      dueDate: {
        label: "Fecha Probable de Parto",
        help: "Tu fecha probable de parto calculada con la Regla de Naegele, ajustada para tu duración de ciclo.",
      },
      gestationalWeeks: {
        label: "Edad Gestacional (semanas)",
        help: "Número de semanas completas de embarazo transcurridas desde la última menstruación.",
      },
      gestationalDays: {
        label: "Edad Gestacional (días adicionales)",
        help: "Días adicionales más allá de la última semana gestacional completa.",
      },
      trimester: {
        label: "Trimestre Actual",
        help: "Primer trimestre: semanas 1–13. Segundo trimestre: semanas 14–27. Tercer trimestre: semanas 28–40.",
      },
      daysRemaining: {
        label: "Días Hasta el Parto",
        help: "Número de días restantes desde hoy hasta la fecha probable de parto.",
      },
    },
    errors: {
      invalidDate: "Por favor, introduce una fecha válida en formato AAAA-MM-DD.",
      futureLmp: "La fecha de la última menstruación no puede ser en el futuro.",
      currentBeforeLmp: "La fecha de hoy debe ser igual o posterior a la fecha de la última menstruación.",
    },
    faq: [
      {
        q: "¿Qué tan preciso es el cálculo de la fecha de parto?",
        a: "La Regla de Naegele proporciona una estimación: solo alrededor del 5% de los bebés nacen exactamente en la fecha calculada. La mayoría de los nacimientos ocurren dentro de las dos semanas anteriores o posteriores a la fecha estimada. Una ecografía en el primer trimestre proporciona la datación más precisa.",
      },
      {
        q: "¿Qué es la Regla de Naegele?",
        a: "La Regla de Naegele estima la fecha de parto sumando 280 días (40 semanas) al primer día de la última menstruación. Asume un ciclo estándar de 28 días. Nuestra calculadora ajusta la fecha según la diferencia entre tu ciclo real y los 28 días.",
      },
      {
        q: "¿Qué pasa si mi ciclo no es de 28 días?",
        a: "La calculadora ajusta la fecha de parto para ciclos no estándar. Por cada día que tu ciclo supera los 28 días, la fecha se adelanta un día, y viceversa. Por ejemplo, un ciclo de 32 días desplaza la fecha 4 días más tarde.",
      },
      {
        q: "¿Cuáles son los límites de cada trimestre?",
        a: "El primer trimestre abarca las semanas 1 a 13, el segundo trimestre las semanas 14 a 27, y el tercer trimestre desde la semana 28 hasta el parto.",
      },
      {
        q: "¿Puedo depender únicamente de esta calculadora para decisiones médicas?",
        a: "No. Esta herramienta es solo para fines informativos. Consulta siempre a tu profesional de salud para una datación precisa del embarazo, especialmente mediante ecografía del primer trimestre.",
      },
    ],
  },

  it: {
    title: "Calcolatore della Data del Parto",
    short: "Calcola la tua data presunta del parto con la Regola di Naegele a partire dall'ultima mestruazione.",
    description:
      "Calcolatore gratuito della data del parto. Inserisci la data dell'ultima mestruazione e la durata del ciclo per ottenere la data presunta del parto, l'età gestazionale, il trimestre e i giorni rimanenti.",
    keywords: [
      "calcolatore data parto",
      "data presunta del parto",
      "età gestazionale",
      "regola di Naegele",
      "settimane gravidanza",
      "trimestre gravidanza",
      "DPP gravidanza",
    ],
    inputs: {
      lmpDate: {
        label: "Primo giorno dell'ultima mestruazione (UMP)",
        help: "Inserisci la data di inizio della tua ultima mestruazione (AAAA-MM-GG).",
      },
      cycleLength: {
        label: "Durata del ciclo (giorni)",
        help: "Durata media del tuo ciclo mestruale. L'intervallo tipico è di 21–35 giorni, con una media di 28 giorni.",
      },
      currentDate: {
        label: "Data di oggi",
        help: "La data di oggi viene utilizzata per calcolare la tua età gestazionale attuale e i giorni rimanenti.",
      },
    },
    outputs: {
      dueDate: {
        label: "Data Presunta del Parto",
        help: "La tua data presunta del parto calcolata con la Regola di Naegele, adattata alla durata del tuo ciclo.",
      },
      gestationalWeeks: {
        label: "Età Gestazionale (settimane)",
        help: "Numero di settimane complete di gravidanza trascorse dall'ultima mestruazione.",
      },
      gestationalDays: {
        label: "Età Gestazionale (giorni aggiuntivi)",
        help: "Giorni aggiuntivi oltre l'ultima settimana gestazionale completa.",
      },
      trimester: {
        label: "Trimestre Attuale",
        help: "1° trimestre: settimane 1–13. 2° trimestre: settimane 14–27. 3° trimestre: settimane 28–40.",
      },
      daysRemaining: {
        label: "Giorni al Parto",
        help: "Numero di giorni rimanenti da oggi alla data presunta del parto.",
      },
    },
    errors: {
      invalidDate: "Inserisci una data valida nel formato AAAA-MM-GG.",
      futureLmp: "La data dell'ultima mestruazione non può essere nel futuro.",
      currentBeforeLmp: "La data di oggi deve essere uguale o successiva alla data dell'ultima mestruazione.",
    },
    faq: [
      {
        q: "Quanto è preciso il calcolo della data del parto?",
        a: "La Regola di Naegele fornisce una stima: solo circa il 5% dei bambini nasce esattamente nella data calcolata. La maggior parte delle nascite avviene entro due settimane prima o dopo la data stimata. Un'ecografia nel primo trimestre offre la datazione più precisa.",
      },
      {
        q: "Cos'è la Regola di Naegele?",
        a: "La Regola di Naegele stima la data del parto aggiungendo 280 giorni (40 settimane) al primo giorno dell'ultima mestruazione. Presuppone un ciclo standard di 28 giorni. Il nostro calcolatore adatta la data in base alla differenza tra il tuo ciclo reale e i 28 giorni.",
      },
      {
        q: "Cosa succede se il mio ciclo non è di 28 giorni?",
        a: "Il calcolatore adatta la data del parto per cicli non standard. Per ogni giorno in cui il tuo ciclo supera i 28 giorni, la data viene posticipata di un giorno. Ad esempio, un ciclo di 32 giorni sposta la data di 4 giorni più avanti.",
      },
      {
        q: "Quali sono i confini dei trimestri?",
        a: "Il primo trimestre comprende le settimane 1–13, il secondo trimestre le settimane 14–27 e il terzo trimestre le settimane 28 fino al parto.",
      },
      {
        q: "Posso affidarmi esclusivamente a questo calcolatore per le decisioni mediche?",
        a: "No. Questo strumento è solo a scopo informativo. Consulta sempre il tuo professionista sanitario per una datazione accurata della gravidanza, in particolare tramite l'ecografia del primo trimestre.",
      },
    ],
  },

  ar: {
    title: "حاسبة موعد الولادة المتوقع",
    short: "احسبي موعد ولادتك المتوقع وفق قاعدة ناغيلي بناءً على تاريخ آخر دورة شهرية.",
    description:
      "حاسبة مجانية لموعد الولادة. أدخلي تاريخ آخر دورة شهرية وطول الدورة للحصول على موعد الولادة المتوقع وعمر الحمل والثلث الحملي والأيام المتبقية.",
    keywords: [
      "حاسبة موعد الولادة",
      "موعد الولادة المتوقع",
      "عمر الحمل",
      "قاعدة ناغيلي",
      "حساب أسابيع الحمل",
      "ثلث الحمل",
      "تاريخ آخر دورة شهرية",
    ],
    inputs: {
      lmpDate: {
        label: "أول يوم من آخر دورة شهرية",
        help: "أدخلي تاريخ بداية آخر دورة شهرية (بصيغة YYYY-MM-DD).",
      },
      cycleLength: {
        label: "طول الدورة الشهرية (بالأيام)",
        help: "متوسط طول دورتك الشهرية. النطاق المعتاد من 21 إلى 35 يومًا، ومتوسطه 28 يومًا.",
      },
      currentDate: {
        label: "تاريخ اليوم",
        help: "يُستخدم تاريخ اليوم لحساب عمر الحمل الحالي والأيام المتبقية.",
      },
    },
    outputs: {
      dueDate: {
        label: "موعد الولادة المتوقع",
        help: "موعد الولادة المقدّر وفق قاعدة ناغيلي مع مراعاة طول دورتك الشهرية.",
      },
      gestationalWeeks: {
        label: "عمر الحمل (أسابيع)",
        help: "عدد الأسابيع الكاملة من الحمل المنقضية منذ آخر دورة شهرية.",
      },
      gestationalDays: {
        label: "عمر الحمل (أيام إضافية)",
        help: "الأيام الإضافية بعد الأسبوع الكامل الأخير من الحمل.",
      },
      trimester: {
        label: "الثلث الحملي الحالي",
        help: "الثلث الأول: الأسابيع 1–13. الثلث الثاني: الأسابيع 14–27. الثلث الثالث: الأسابيع 28–40.",
      },
      daysRemaining: {
        label: "الأيام المتبقية حتى الولادة",
        help: "عدد الأيام المتبقية من اليوم حتى موعد الولادة المتوقع.",
      },
    },
    errors: {
      invalidDate: "يُرجى إدخال تاريخ صحيح بصيغة YYYY-MM-DD.",
      futureLmp: "لا يمكن أن يكون تاريخ آخر دورة شهرية في المستقبل.",
      currentBeforeLmp: "يجب أن يكون تاريخ اليوم مساويًا لتاريخ آخر دورة شهرية أو لاحقًا له.",
    },
    faq: [
      {
        q: "ما مدى دقة حساب موعد الولادة؟",
        a: "تُقدّم قاعدة ناغيلي تقديرًا؛ إذ لا يُولد سوى نحو 5% من الأطفال في موعدهم المحدد تمامًا. تحدث معظم الولادات في غضون أسبوعين قبل أو بعد الموعد المقدر. يُتيح الموجات فوق الصوتية في الثلث الأول من الحمل التأريخ الأكثر دقة.",
      },
      {
        q: "ما قاعدة ناغيلي؟",
        a: "تُقدّر قاعدة ناغيلي موعد الولادة بإضافة 280 يومًا (40 أسبوعًا) إلى أول يوم من آخر دورة شهرية، بافتراض دورة معيارية مدتها 28 يومًا. تُعدّل حاسبتنا التاريخ وفقًا للفرق بين طول دورتك الفعلي و28 يومًا.",
      },
      {
        q: "ماذا لو لم تكن دورتي 28 يومًا؟",
        a: "تُعدّل الحاسبة موعد الولادة للدورات غير المعيارية. بإزاء كل يوم يزيد فيه طول دورتك عن 28 يومًا، يُؤجّل الموعد يومًا واحدًا والعكس صحيح. فمثلًا، تُؤخّر الدورة المدتها 32 يومًا الموعد 4 أيام.",
      },
      {
        q: "ما حدود كل ثلث من الحمل؟",
        a: "يشمل الثلث الأول الأسابيع 1–13، ويشمل الثلث الثاني الأسابيع 14–27، ويمتد الثلث الثالث من الأسبوع 28 حتى الولادة.",
      },
      {
        q: "هل يمكنني الاعتماد على هذه الحاسبة وحدها في القرارات الطبية؟",
        a: "لا. هذه الأداة للأغراض المعلوماتية فحسب. استشيري دائمًا مقدّم الرعاية الصحية لتأريخ الحمل بدقة، ولا سيما باستخدام الموجات فوق الصوتية في الثلث الأول من الحمل.",
      },
    ],
  },

  ru: {
    title: "Калькулятор предполагаемой даты родов",
    short: "Рассчитайте предполагаемую дату родов по правилу Негеле на основе даты последней менструации.",
    description:
      "Бесплатный калькулятор даты родов. Введите дату последней менструации и длительность цикла, чтобы получить предполагаемую дату родов, срок беременности, триместр и количество оставшихся дней.",
    keywords: [
      "калькулятор даты родов",
      "предполагаемая дата родов",
      "срок беременности",
      "правило Негеле",
      "недели беременности",
      "триместр беременности",
      "дата последней менструации",
    ],
    inputs: {
      lmpDate: {
        label: "Первый день последней менструации (ПМ)",
        help: "Введите дату начала вашей последней менструации (ГГГГ-ММ-ДД).",
      },
      cycleLength: {
        label: "Длина цикла (дни)",
        help: "Средняя продолжительность вашего менструального цикла. Обычный диапазон — 21–35 дней, среднее значение — 28 дней.",
      },
      currentDate: {
        label: "Сегодняшняя дата",
        help: "Сегодняшняя дата используется для расчёта текущего срока беременности и оставшихся дней.",
      },
    },
    outputs: {
      dueDate: {
        label: "Предполагаемая дата родов",
        help: "Ваша предполагаемая дата родов, рассчитанная по правилу Негеле с учётом длины вашего цикла.",
      },
      gestationalWeeks: {
        label: "Срок беременности (недели)",
        help: "Количество полных недель беременности, прошедших с последней менструации.",
      },
      gestationalDays: {
        label: "Срок беременности (дополнительные дни)",
        help: "Дополнительные дни сверх последней полной акушерской недели.",
      },
      trimester: {
        label: "Текущий триместр",
        help: "I триместр: недели 1–13. II триместр: недели 14–27. III триместр: недели 28–40.",
      },
      daysRemaining: {
        label: "Дней до родов",
        help: "Количество дней от сегодняшнего дня до предполагаемой даты родов.",
      },
    },
    errors: {
      invalidDate: "Пожалуйста, введите корректную дату в формате ГГГГ-ММ-ДД.",
      futureLmp: "Дата последней менструации не может быть в будущем.",
      currentBeforeLmp: "Сегодняшняя дата должна быть равна дате последней менструации или быть позднее неё.",
    },
    faq: [
      {
        q: "Насколько точен расчёт даты родов?",
        a: "Правило Негеле даёт оценочный результат — только около 5% детей рождаются точно в расчётный срок. Большинство родов происходит в течение двух недель до или после предполагаемой даты. УЗИ в первом триместре обеспечивает наиболее точное датирование.",
      },
      {
        q: "Что такое правило Негеле?",
        a: "Правило Негеле рассчитывает предполагаемую дату родов путём прибавления 280 дней (40 недель) к первому дню последней менструации при стандартном цикле в 28 дней. Наш калькулятор корректирует дату в зависимости от разницы между вашим фактическим циклом и 28 днями.",
      },
      {
        q: "Что если мой цикл не 28 дней?",
        a: "Калькулятор корректирует дату родов при нестандартной длине цикла. На каждый день, превышающий 28 дней, дата сдвигается вперёд на один день. Например, при 32-дневном цикле дата сдвигается на 4 дня позже.",
      },
      {
        q: "Каковы границы триместров?",
        a: "Первый триместр охватывает недели 1–13, второй — недели 14–27, третий триместр — с 28 недели до родов.",
      },
      {
        q: "Можно ли полагаться только на этот калькулятор при принятии медицинских решений?",
        a: "Нет. Данный инструмент предназначен исключительно для информационных целей. Всегда консультируйтесь со своим врачом для точного определения срока беременности, особенно с помощью УЗИ в первом триместре.",
      },
    ],
  },

  zh: {
    title: "预产期计算器",
    short: "根据末次月经日期，使用内格莱公式计算您的预产期。",
    description:
      "免费预产期计算器。输入末次月经日期和周期长度，获取预产期、孕周、妊娠期和剩余天数。",
    keywords: [
      "预产期计算器",
      "预产期计算",
      "孕周计算器",
      "末次月经计算",
      "内格莱公式",
      "孕期三个月",
      "怀孕周数",
    ],
    inputs: {
      lmpDate: {
        label: "末次月经第一天（LMP）",
        help: "请输入您末次月经开始的日期（格式：YYYY-MM-DD）。",
      },
      cycleLength: {
        label: "月经周期长度（天）",
        help: "您月经周期的平均长度，通常在21至35天之间，平均为28天。",
      },
      currentDate: {
        label: "今天日期",
        help: "今天的日期用于计算当前孕周和剩余天数。",
      },
    },
    outputs: {
      dueDate: {
        label: "预产期",
        help: "根据内格莱公式并按您的周期长度调整后计算得出的预产期。",
      },
      gestationalWeeks: {
        label: "孕周（整数周）",
        help: "自末次月经起已经过的完整孕周数。",
      },
      gestationalDays: {
        label: "孕周（额外天数）",
        help: "超出上一个完整孕周的额外天数。",
      },
      trimester: {
        label: "当前孕期",
        help: "孕早期：第1–13周。孕中期：第14–27周。孕晚期：第28–40周。",
      },
      daysRemaining: {
        label: "距预产期天数",
        help: "从今天到预产期的剩余天数。",
      },
    },
    errors: {
      invalidDate: "请输入格式为YYYY-MM-DD的有效日期。",
      futureLmp: "末次月经日期不能在将来。",
      currentBeforeLmp: "今天日期必须在末次月经日期当天或之后。",
    },
    faq: [
      {
        q: "预产期计算有多准确？",
        a: "内格莱公式提供的是估算值，只有约5%的婴儿恰好在预产期出生。大多数分娩发生在预产期前后两周内。孕早期超声检查是确认孕周的最准确方法。",
      },
      {
        q: "什么是内格莱公式？",
        a: "内格莱公式通过在末次月经第一天基础上加280天（40周）来估算预产期，假设标准周期为28天。我们的计算器会根据您实际周期与28天的差值进行调整。",
      },
      {
        q: "如果我的周期不是28天怎么办？",
        a: "计算器会针对非标准周期调整预产期。周期每比28天多一天，预产期就顺延一天，反之亦然。例如，32天的周期会使预产期推迟4天。",
      },
      {
        q: "各孕期的时间范围是什么？",
        a: "孕早期为第1至13周，孕中期为第14至27周，孕晚期为第28周至分娩。",
      },
      {
        q: "我能仅凭此计算器做医疗决策吗？",
        a: "不能。本工具仅供参考。请务必咨询您的医疗保健提供者进行准确的孕周确认，尤其是通过孕早期超声检查，这仍是确认孕龄的金标准。",
      },
    ],
  },

  ja: {
    title: "出産予定日計算機",
    short: "最終月経日をもとにネーゲレの法則で出産予定日を計算します。",
    description:
      "無料の出産予定日計算機。最終月経日と周期の長さを入力するだけで、出産予定日・妊娠週数・妊娠期・残り日数が分かります。",
    keywords: [
      "出産予定日計算機",
      "出産予定日",
      "妊娠週数計算",
      "ネーゲレの法則",
      "最終月経日計算",
      "妊娠期計算",
      "妊娠何週目",
    ],
    inputs: {
      lmpDate: {
        label: "最終月経開始日（LMP）",
        help: "最後の月経が始まった日付を入力してください（YYYY-MM-DD形式）。",
      },
      cycleLength: {
        label: "月経周期（日数）",
        help: "月経周期の平均的な長さ。通常は21〜35日で、平均は28日です。",
      },
      currentDate: {
        label: "今日の日付",
        help: "今日の日付は現在の妊娠週数と残り日数の計算に使用されます。",
      },
    },
    outputs: {
      dueDate: {
        label: "出産予定日",
        help: "ネーゲレの法則で計算し、あなたの周期に合わせて調整した出産予定日です。",
      },
      gestationalWeeks: {
        label: "妊娠週数（完全週）",
        help: "最終月経日から経過した完全な妊娠週数です。",
      },
      gestationalDays: {
        label: "妊娠週数（端数日）",
        help: "最後の完全な妊娠週を超えた追加日数です。",
      },
      trimester: {
        label: "現在の妊娠期",
        help: "妊娠初期：1〜13週。妊娠中期：14〜27週。妊娠後期：28〜40週。",
      },
      daysRemaining: {
        label: "出産予定日まであと何日",
        help: "今日から出産予定日までの残り日数です。",
      },
    },
    errors: {
      invalidDate: "YYYY-MM-DD形式で有効な日付を入力してください。",
      futureLmp: "最終月経日は将来の日付にできません。",
      currentBeforeLmp: "今日の日付は最終月経日以降の日付にする必要があります。",
    },
    faq: [
      {
        q: "出産予定日の計算はどの程度正確ですか？",
        a: "ネーゲレの法則はあくまで推定値を示します。予定日ぴったりに生まれる赤ちゃんは約5%に過ぎません。ほとんどの出産は推定日の前後2週間以内に起こります。妊娠初期の超音波検査が最も正確な妊娠週数の確認方法です。",
      },
      {
        q: "ネーゲレの法則とは何ですか？",
        a: "ネーゲレの法則は最終月経初日に280日（40週）を足して出産予定日を推定します。標準の28日周期を前提としており、当計算機はあなたの実際の周期と28日との差分で日付を調整します。",
      },
      {
        q: "周期が28日でない場合はどうなりますか？",
        a: "計算機は非標準的な周期に対して出産予定日を調整します。周期が28日より1日長いごとに予定日が1日後ろにずれます。たとえば32日周期なら予定日が4日遅くなります。",
      },
      {
        q: "妊娠期の区切りはどこですか？",
        a: "妊娠初期は第1〜13週、妊娠中期は第14〜27週、妊娠後期は第28週から出産までです。",
      },
      {
        q: "医療上の判断をこの計算機だけに頼ってもよいですか？",
        a: "いいえ。このツールは情報提供のみを目的としています。正確な妊娠週数の確認には必ず医療機関を受診し、特に妊娠初期の超音波検査を活用してください。",
      },
    ],
  },

  ko: {
    title: "출산 예정일 계산기",
    short: "마지막 월경일을 기준으로 네겔레 공식을 사용해 출산 예정일을 계산하세요.",
    description:
      "무료 출산 예정일 계산기. 마지막 월경일과 주기 길이를 입력하면 예정일, 임신 주수, 분기, 남은 일수를 바로 확인할 수 있습니다.",
    keywords: [
      "출산 예정일 계산기",
      "출산 예정일",
      "임신 주수 계산",
      "네겔레 공식",
      "마지막 월경일 계산",
      "임신 분기",
      "임신 몇 주",
    ],
    inputs: {
      lmpDate: {
        label: "마지막 월경 첫째 날 (LMP)",
        help: "마지막 월경이 시작된 날짜를 입력하세요 (YYYY-MM-DD 형식).",
      },
      cycleLength: {
        label: "월경 주기 (일수)",
        help: "월경 주기의 평균 길이. 일반적으로 21~35일이며, 평균은 28일입니다.",
      },
      currentDate: {
        label: "오늘 날짜",
        help: "오늘 날짜는 현재 임신 주수와 남은 일수를 계산하는 데 사용됩니다.",
      },
    },
    outputs: {
      dueDate: {
        label: "출산 예정일",
        help: "네겔레 공식으로 계산하고 주기 길이에 맞게 조정된 출산 예정일입니다.",
      },
      gestationalWeeks: {
        label: "임신 주수 (완전 주)",
        help: "마지막 월경일 이후 경과한 완전한 임신 주수입니다.",
      },
      gestationalDays: {
        label: "임신 주수 (추가 일수)",
        help: "마지막 완전한 임신 주를 초과한 추가 일수입니다.",
      },
      trimester: {
        label: "현재 분기",
        help: "1분기: 1~13주. 2분기: 14~27주. 3분기: 28~40주.",
      },
      daysRemaining: {
        label: "출산 예정일까지 남은 일수",
        help: "오늘부터 출산 예정일까지의 남은 일수입니다.",
      },
    },
    errors: {
      invalidDate: "YYYY-MM-DD 형식의 유효한 날짜를 입력하세요.",
      futureLmp: "마지막 월경일은 미래 날짜일 수 없습니다.",
      currentBeforeLmp: "오늘 날짜는 마지막 월경일 당일이거나 이후여야 합니다.",
    },
    faq: [
      {
        q: "출산 예정일 계산은 얼마나 정확한가요?",
        a: "네겔레 공식은 추정값을 제공합니다. 정확히 예정일에 태어나는 아기는 약 5%에 불과합니다. 대부분의 출산은 예정일 전후 2주 이내에 이루어집니다. 임신 초기 초음파 검사가 임신 주수를 가장 정확하게 확인하는 방법입니다.",
      },
      {
        q: "네겔레 공식이란 무엇인가요?",
        a: "네겔레 공식은 마지막 월경 첫째 날에 280일(40주)을 더해 출산 예정일을 추정합니다. 표준 28일 주기를 가정하며, 이 계산기는 실제 주기와 28일의 차이에 따라 날짜를 조정합니다.",
      },
      {
        q: "월경 주기가 28일이 아니면 어떻게 되나요?",
        a: "계산기는 비표준 주기에 맞게 출산 예정일을 조정합니다. 주기가 28일보다 하루 길 때마다 예정일이 하루씩 늦춰집니다. 예를 들어 32일 주기라면 예정일이 4일 늦어집니다.",
      },
      {
        q: "분기 경계는 어떻게 되나요?",
        a: "1분기는 1~13주, 2분기는 14~27주, 3분기는 28주부터 출산까지입니다.",
      },
      {
        q: "의료적 결정을 이 계산기에만 의존해도 되나요?",
        a: "아니요. 이 도구는 정보 제공 목적으로만 제공됩니다. 정확한 임신 주수 확인을 위해 항상 의료 전문가와 상담하세요. 특히 임신 초기 초음파 검사는 임신 주수 확인의 표준 방법입니다.",
      },
    ],
  },

  hi: {
    title: "गर्भावस्था देय तिथि कैलकुलेटर",
    short: "अपनी अंतिम मासिक धर्म की तिथि के आधार पर नेगले नियम से अपनी नियत तिथि की गणना करें।",
    description:
      "निःशुल्क गर्भावस्था देय तिथि कैलकुलेटर। अपनी अंतिम मासिक धर्म की तिथि और चक्र की लंबाई दर्ज करें और अनुमानित प्रसव तिथि, गर्भकालीन आयु, तिमाही और शेष दिन जानें।",
    keywords: [
      "गर्भावस्था देय तिथि कैलकुलेटर",
      "प्रसव तिथि गणना",
      "गर्भकालीन आयु",
      "नेगले नियम",
      "गर्भावस्था सप्ताह गणना",
      "तिमाही गणना",
      "अंतिम मासिक धर्म",
    ],
    inputs: {
      lmpDate: {
        label: "अंतिम मासिक धर्म का पहला दिन (LMP)",
        help: "अपनी अंतिम माहवारी शुरू होने की तिथि दर्ज करें (YYYY-MM-DD प्रारूप में)।",
      },
      cycleLength: {
        label: "मासिक चक्र की लंबाई (दिनों में)",
        help: "आपके मासिक धर्म चक्र की औसत लंबाई। सामान्य सीमा 21–35 दिन है; औसत 28 दिन है।",
      },
      currentDate: {
        label: "आज की तिथि",
        help: "आपकी वर्तमान गर्भकालीन आयु और शेष दिनों की गणना के लिए आज की तिथि उपयोग की जाती है।",
      },
    },
    outputs: {
      dueDate: {
        label: "अनुमानित प्रसव तिथि",
        help: "नेगले नियम के अनुसार आपके चक्र की लंबाई को ध्यान में रखकर गणना की गई अनुमानित प्रसव तिथि।",
      },
      gestationalWeeks: {
        label: "गर्भकालीन आयु (सप्ताह)",
        help: "LMP से लेकर अब तक बीते पूर्ण गर्भावस्था सप्ताहों की संख्या।",
      },
      gestationalDays: {
        label: "गर्भकालीन आयु (अतिरिक्त दिन)",
        help: "अंतिम पूर्ण गर्भावस्था सप्ताह के बाद के अतिरिक्त दिन।",
      },
      trimester: {
        label: "वर्तमान तिमाही",
        help: "पहली तिमाही: सप्ताह 1–13। दूसरी तिमाही: सप्ताह 14–27। तीसरी तिमाही: सप्ताह 28–40।",
      },
      daysRemaining: {
        label: "प्रसव तक शेष दिन",
        help: "आज से अनुमानित प्रसव तिथि तक के शेष दिनों की संख्या।",
      },
    },
    errors: {
      invalidDate: "कृपया YYYY-MM-DD प्रारूप में एक वैध तिथि दर्ज करें।",
      futureLmp: "अंतिम मासिक धर्म की तिथि भविष्य में नहीं हो सकती।",
      currentBeforeLmp: "आज की तिथि अंतिम मासिक धर्म की तिथि के समान या उसके बाद होनी चाहिए।",
    },
    faq: [
      {
        q: "प्रसव तिथि गणना कितनी सटीक है?",
        a: "नेगले नियम एक अनुमान प्रदान करता है — केवल लगभग 5% बच्चे ठीक अनुमानित तिथि पर पैदा होते हैं। अधिकांश जन्म अनुमानित तिथि से दो सप्ताह पहले या बाद में होते हैं। पहली तिमाही का अल्ट्रासाउंड सबसे सटीक तारीख बताता है।",
      },
      {
        q: "नेगले नियम क्या है?",
        a: "नेगले नियम अंतिम मासिक धर्म के पहले दिन में 280 दिन (40 सप्ताह) जोड़कर प्रसव तिथि का अनुमान लगाता है। यह मानक 28-दिन चक्र मानता है। हमारा कैलकुलेटर आपके वास्तविक चक्र और 28 दिनों के अंतर के अनुसार तिथि समायोजित करता है।",
      },
      {
        q: "यदि मेरा चक्र 28 दिन का नहीं है तो क्या होगा?",
        a: "कैलकुलेटर गैर-मानक चक्र लंबाई के लिए प्रसव तिथि को समायोजित करता है। प्रत्येक दिन जो आपका चक्र 28 दिनों से अधिक है, प्रसव तिथि एक दिन आगे बढ़ जाती है। उदाहरण के लिए, 32-दिन का चक्र प्रसव तिथि को 4 दिन बाद ले जाता है।",
      },
      {
        q: "तिमाही की सीमाएं क्या हैं?",
        a: "पहली तिमाही में सप्ताह 1–13, दूसरी तिमाही में सप्ताह 14–27, और तीसरी तिमाही में सप्ताह 28 से प्रसव तक शामिल हैं।",
      },
      {
        q: "क्या मैं चिकित्सा निर्णयों के लिए केवल इस कैलकुलेटर पर निर्भर रह सकती हूं?",
        a: "नहीं। यह उपकरण केवल सूचनात्मक उद्देश्यों के लिए है। सटीक गर्भावस्था तारीख के लिए हमेशा अपने स्वास्थ्य सेवा प्रदाता से परामर्श करें, विशेष रूप से पहली तिमाही के अल्ट्रासाउंड के साथ।",
      },
    ],
  },
};

export default i18n;
