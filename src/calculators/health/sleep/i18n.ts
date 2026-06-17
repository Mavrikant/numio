import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Sleep Cycle Calculator",
    short: "Find the best times to wake up or go to bed based on 90-minute sleep cycles.",
    description:
      "Free sleep cycle calculator. Enter your bedtime or desired wake time to get the optimal sleep and wake schedule based on natural 90-minute sleep cycles.",
    keywords: [
      "sleep cycle calculator",
      "best time to wake up",
      "sleep calculator",
      "90 minute sleep cycle",
      "what time should I go to bed",
      "REM sleep calculator",
      "sleep schedule",
    ],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Choose whether you know your bedtime and want wake-up suggestions, or know your wake time and want bedtime suggestions.",
      },
      inputTime: {
        label: "Time (HH:MM)",
        help: "Enter the bedtime or desired wake time in 24-hour format (e.g., 23:00 for 11 PM).",
      },
      cycleCount: {
        label: "Preferred Sleep Cycles",
        help: "How many 90-minute cycles you want to complete. 5–6 cycles (7.5–9 hours) is ideal for most adults.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "Recommended Times",
        help: "Optimal wake-up or bedtimes for 4, 5, 6, and 7 sleep cycles.",
      },
      sleepDurationHours: {
        label: "Sleep Duration",
        help: "Total sleep time for your selected number of cycles.",
        suffix: "hours",
      },
      cyclesOptions: {
        label: "All Cycle Options",
        help: "Breakdown of wake-up or bedtimes for different numbers of cycles.",
      },
    },
    options: {
      mode: {
        from_bedtime: "I know my bedtime → show wake-up times",
        from_waketime: "I know my wake time → show bedtimes",
      },
    },
    errors: {
      invalidTime: "Please enter a valid time in HH:MM format (e.g., 23:00).",
    },
    faq: [
      {
        q: "What is a sleep cycle?",
        a: "A sleep cycle is a sequence of sleep stages — light sleep, deep sleep, and REM (rapid eye movement) sleep — that repeats roughly every 90 minutes throughout the night. Most adults complete 4–6 cycles per night.",
      },
      {
        q: "Why does the calculator add 14 minutes to my bedtime?",
        a: "On average, it takes about 14 minutes to fall asleep after going to bed. This 'sleep latency' is added so that your wake-up recommendations align with the end of a complete cycle, not 14 minutes into one.",
      },
      {
        q: "How many sleep cycles do I need?",
        a: "Most adults need 5–6 cycles (7.5–9 hours) for optimal cognitive function and physical recovery. Athletes and those doing heavy physical work may benefit from 6–7 cycles. Less than 4 cycles chronically is associated with impaired health.",
      },
      {
        q: "What happens if I wake up in the middle of a cycle?",
        a: "Waking mid-cycle — especially during deep NREM sleep — typically causes 'sleep inertia': grogginess, disorientation, and impaired performance that can last 15–60 minutes. Timing your alarm to coincide with the end of a cycle minimises this effect.",
      },
      {
        q: "Is it better to get more sleep or to wake at the right cycle end?",
        a: "Both matter. Sleeping fewer cycles at the right end-point may leave you feeling more alert than sleeping slightly longer but waking mid-cycle. Prioritise both adequate total sleep time and cycle-aligned wake timing for best results.",
      },
    ],
  },
  nl: {
    title: "Slaap Cycle Calculator",
    short: "Find the best times to wake up or go to bed based on 90-minute sleep cycles.",
    description:
      "Gratis sleep cycle calculator. Enter your bedtime or desired wake time to get the optimal sleep and wake schedule based on natural 90-minute sleep cycles.",
    keywords: [
      "sleep cycle calculator",
      "best time to wake up",
      "sleep calculator",
      "90 minute sleep cycle",
      "what time should I go to bed",
      "REM sleep calculator",
      "sleep schedule",
    ],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Choose whether you know your bedtime and want wake-up suggestions, or know your wake time and want bedtime suggestions.",
      },
      inputTime: {
        label: "Time (HH:MM)",
        help: "Enter the bedtime or desired wake time in 24-hour formatteer (e.g., 23:00 for 11 PM).",
      },
      cycleCount: {
        label: "Preferred Slaap Cycles",
        help: "How many 90-minute cycles you want to complete. 5–6 cycles (7.5–9 uren) is ideal for most adults.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "Recommended Times",
        help: "Optimal wake-up or bedtimes for 4, 5, 6, and 7 sleep cycles.",
      },
      sleepDurationHours: {
        label: "Slaap Duration",
        help: "Total sleep time for your selected nummer of cycles.",
        suffix: "uren",
      },
      cyclesOptions: {
        label: "All Cycle Options",
        help: "Breakdown of wake-up or bedtimes for different nummers of cycles.",
      },
    },
    options: {
      mode: {
        from_bedtime: "I know my bedtime → show wake-up times",
        from_waketime: "I know my wake time → show bedtimes",
      },
    },
    errors: {
      invalidTime: "Please enter a valid time in HH:MM formatteer (e.g., 23:00).",
    },
    faq: [
      {
        q: "What is a sleep cycle?",
        a: "A sleep cycle is a sequence of sleep stages — light sleep, deep sleep, and REM (rapid eye movement) sleep — that repeats roughly every 90 minuten throughout the night. Most adults complete 4–6 cycles per night.",
      },
      {
        q: "Why does the calculator add 14 minuten to my bedtime?",
        a: "On average, it takes about 14 minuten to fall asleep after going to bed. This 'sleep latency' is added so that your wake-up recommendations align with the end of a complete cycle, not 14 minuten into one.",
      },
      {
        q: "How many sleep cycles do I need?",
        a: "Most adults need 5–6 cycles (7.5–9 uren) for optimal cognitive function and physical recovery. Athletes and those doing heavy physical work may benefit from 6–7 cycles. Less than 4 cycles chronically is associated with impaired health.",
      },
      {
        q: "What happens if I wake up in the middle of a cycle?",
        a: "Waking mid-cycle — especially during deep NREM sleep — typically causes 'sleep inertia': grogginess, disorientation, and impaired performance that can last 15–60 minuten. Timing your alarm to coincide with the end of a cycle minimises this effect.",
      },
      {
        q: "Is it better to get more sleep or to wake at the right cycle end?",
        a: "Both matter. Slaaping fewer cycles at the right end-point may leave you feeling more alert than sleeping slightly longer but waking mid-cycle. Prioritise both adequate total sleep time and cycle-aligned wake timing for best results.",
      },
    ],
  },

  pl: {
    title: "Sen Cycle Kalkulator",
    short: "Find the best times to wake up or go to bed based on 90-minute sleep cycles.",
    description:
      "Darmowy sleep cycle kalkulator. Enter your bedtime or desired wake time to get the optimal sleep and wake schedule based on natural 90-minute sleep cycles.",
    keywords: [
      "sleep cycle kalkulator",
      "best time to wake up",
      "sleep kalkulator",
      "90 minute sleep cycle",
      "what time should I go to bed",
      "REM sleep kalkulator",
      "sleep schedule",
    ],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Choose whether you know your bedtime and want wake-up suggestions, or know your wake time and want bedtime suggestions.",
      },
      inputTime: {
        label: "Time (HH:MM)",
        help: "Enter the bedtime or desired wake time in 24-hour formatuj (e.g., 23:00 for 11 PM).",
      },
      cycleCount: {
        label: "Preferred Sen Cycles",
        help: "How many 90-minute cycles you want to complete. 5–6 cycles (7.5–9 godzin) is ideal for most adults.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "Recommended Times",
        help: "Optimal wake-up or bedtimes for 4, 5, 6, and 7 sleep cycles.",
      },
      sleepDurationHours: {
        label: "Sen Duration",
        help: "Total sleep time for your selected liczba of cycles.",
        suffix: "godzin",
      },
      cyclesOptions: {
        label: "All Cycle Options",
        help: "Breakdown of wake-up or bedtimes for different liczbas of cycles.",
      },
    },
    options: {
      mode: {
        from_bedtime: "I know my bedtime → show wake-up times",
        from_waketime: "I know my wake time → show bedtimes",
      },
    },
    errors: {
      invalidTime: "Please enter a valid time in HH:MM formatuj (e.g., 23:00).",
    },
    faq: [
      {
        q: "What is a sleep cycle?",
        a: "A sleep cycle is a sequence of sleep stages — light sleep, deep sleep, and REM (rapid eye movement) sleep — that repeats roughly every 90 minut throughout the night. Most adults complete 4–6 cycles per night.",
      },
      {
        q: "Why does the kalkulator add 14 minut to my bedtime?",
        a: "On average, it takes about 14 minut to fall asleep after going to bed. This 'sleep latency' is added so that your wake-up recommendations align with the end of a complete cycle, not 14 minut into one.",
      },
      {
        q: "How many sleep cycles do I need?",
        a: "Most adults need 5–6 cycles (7.5–9 godzin) for optimal cognitive function and physical recovery. Athletes and those doing heavy physical work may benefit from 6–7 cycles. Less than 4 cycles chronically is associated with impaired health.",
      },
      {
        q: "What happens if I wake up in the middle of a cycle?",
        a: "Waking mid-cycle — especially during deep NREM sleep — typically causes 'sleep inertia': grogginess, disorientation, and impaired performance that can last 15–60 minut. Timing your alarm to coincide with the end of a cycle minimises this effect.",
      },
      {
        q: "Is it better to get more sleep or to wake at the right cycle end?",
        a: "Both matter. Sening fewer cycles at the right end-point may leave you feeling more alert than sleeping slightly longer but waking mid-cycle. Prioritise both adequate total sleep time and cycle-aligned wake timing for best results.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Sono",
    short: "Descubra a melhor hora para deitar ou acordar para um sono reparador.",
    description:
      "Calculadora gratuita de sono. Descubra a melhor hora para deitar ou acordar com base nos ciclos de sono de 90 minutos.",
    keywords: ["calculadora sono", "ciclos sono", "horas dormir", "qualidade sono", "REM sono"],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Choose whether you know your bedtime and want wake-up suggestions, or know your wake time and want bedtime suggestions.",
      },
      inputTime: {
        label: "Time (HH:MM)",
        help: "Enter the bedtime or desired wake time in 24-hour format (e.g., 23:00 for 11 PM).",
      },
      cycleCount: {
        label: "Preferred Sleep Cycles",
        help: "How many 90-minute cycles you want to complete. 5–6 cycles (7.5–9 hours) is ideal for most adults.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "Recommended Times",
        help: "Optimal wake-up or bedtimes for 4, 5, 6, and 7 sleep cycles.",
      },
      sleepDurationHours: {
        label: "Sleep Duration",
        help: "Total sleep time for your selected number of cycles.",
        suffix: "hours",
      },
      cyclesOptions: {
        label: "All Cycle Options",
        help: "Breakdown of wake-up or bedtimes for different numbers of cycles.",
      },
    },
    options: {
      mode: {
        from_bedtime: "I know my bedtime → show wake-up times",
        from_waketime: "I know my wake time → show bedtimes",
      },
    },
    errors: {
      invalidTime: "Please enter a valid time in HH:MM format (e.g., 23:00).",
    },
    faq: [
      {
        q: "What is a sleep cycle?",
        a: "A sleep cycle is a sequence of sleep stages — light sleep, deep sleep, and REM (rapid eye movement) sleep — that repeats roughly every 90 minutes throughout the night. Most adults complete 4–6 cycles per night.",
      },
      {
        q: "Why does the calculator add 14 minutes to my bedtime?",
        a: "On average, it takes about 14 minutes to fall asleep after going to bed. This 'sleep latency' is added so that your wake-up recommendations align with the end of a complete cycle, not 14 minutes into one.",
      },
      {
        q: "How many sleep cycles do I need?",
        a: "Most adults need 5–6 cycles (7.5–9 hours) for optimal cognitive function and physical recovery. Athletes and those doing heavy physical work may benefit from 6–7 cycles. Less than 4 cycles chronically is associated with impaired health.",
      },
      {
        q: "What happens if I wake up in the middle of a cycle?",
        a: "Waking mid-cycle — especially during deep NREM sleep — typically causes 'sleep inertia': grogginess, disorientation, and impaired performance that can last 15–60 minutes. Timing your alarm to coincide with the end of a cycle minimises this effect.",
      },
      {
        q: "Is it better to get more sleep or to wake at the right cycle end?",
        a: "Both matter. Sleeping fewer cycles at the right end-point may leave you feeling more alert than sleeping slightly longer but waking mid-cycle. Prioritise both adequate total sleep time and cycle-aligned wake timing for best results.",
      },
    ],
  },
  id: {
    title: "Kalkulator Tidur",
    short: "Temukan waktu terbaik untuk tidur atau bangun demi tidur berkualitas.",
    description:
      "Kalkulator tidur gratis. Temukan waktu terbaik untuk tidur atau bangun berdasarkan siklus tidur 90 menit.",
    keywords: ["kalkulator tidur", "siklus tidur", "jam tidur", "kualitas tidur", "REM"],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Choose whether you know your bedtime and want wake-up suggestions, or know your wake time and want bedtime suggestions.",
      },
      inputTime: {
        label: "Time (HH:MM)",
        help: "Enter the bedtime or desired wake time in 24-hour format (e.g., 23:00 for 11 PM).",
      },
      cycleCount: {
        label: "Preferred Sleep Cycles",
        help: "How many 90-minute cycles you want to complete. 5–6 cycles (7.5–9 hours) is ideal for most adults.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "Recommended Times",
        help: "Optimal wake-up or bedtimes for 4, 5, 6, and 7 sleep cycles.",
      },
      sleepDurationHours: {
        label: "Sleep Duration",
        help: "Total sleep time for your selected number of cycles.",
        suffix: "hours",
      },
      cyclesOptions: {
        label: "All Cycle Options",
        help: "Breakdown of wake-up or bedtimes for different numbers of cycles.",
      },
    },
    options: {
      mode: {
        from_bedtime: "I know my bedtime → show wake-up times",
        from_waketime: "I know my wake time → show bedtimes",
      },
    },
    errors: {
      invalidTime: "Please enter a valid time in HH:MM format (e.g., 23:00).",
    },
    faq: [
      {
        q: "What is a sleep cycle?",
        a: "A sleep cycle is a sequence of sleep stages — light sleep, deep sleep, and REM (rapid eye movement) sleep — that repeats roughly every 90 minutes throughout the night. Most adults complete 4–6 cycles per night.",
      },
      {
        q: "Why does the calculator add 14 minutes to my bedtime?",
        a: "On average, it takes about 14 minutes to fall asleep after going to bed. This 'sleep latency' is added so that your wake-up recommendations align with the end of a complete cycle, not 14 minutes into one.",
      },
      {
        q: "How many sleep cycles do I need?",
        a: "Most adults need 5–6 cycles (7.5–9 hours) for optimal cognitive function and physical recovery. Athletes and those doing heavy physical work may benefit from 6–7 cycles. Less than 4 cycles chronically is associated with impaired health.",
      },
      {
        q: "What happens if I wake up in the middle of a cycle?",
        a: "Waking mid-cycle — especially during deep NREM sleep — typically causes 'sleep inertia': grogginess, disorientation, and impaired performance that can last 15–60 minutes. Timing your alarm to coincide with the end of a cycle minimises this effect.",
      },
      {
        q: "Is it better to get more sleep or to wake at the right cycle end?",
        a: "Both matter. Sleeping fewer cycles at the right end-point may leave you feeling more alert than sleeping slightly longer but waking mid-cycle. Prioritise both adequate total sleep time and cycle-aligned wake timing for best results.",
      },
    ],
  },


  tr: {
    title: "Uyku Döngüsü Hesaplayıcı",
    short: "90 dakikalık uyku döngülerine göre en iyi uyanma veya yatma saatlerini bulun.",
    description:
      "Ücretsiz uyku döngüsü hesaplayıcı. Yatma saatinizi veya istediğiniz uyanma saatini girerek doğal 90 dakikalık uyku döngülerine dayalı ideal uyku programınızı alın.",
    keywords: [
      "uyku döngüsü hesaplayıcı",
      "en iyi uyanma saati",
      "uyku hesaplayıcı",
      "90 dakika uyku döngüsü",
      "saat kaçta uyumalıyım",
      "REM uykusu hesaplayıcı",
      "uyku programı",
    ],
    inputs: {
      mode: {
        label: "Hesaplama Modu",
        help: "Yatma saatinizi bilip uyanma önerisi mi istiyorsunuz, yoksa uyanma saatinizi bilip yatma önerisi mi?",
      },
      inputTime: {
        label: "Saat (SS:DD)",
        help: "Yatma veya uyanma saatini 24 saat formatında girin (örn. 23:00).",
      },
      cycleCount: {
        label: "Tercih Edilen Uyku Döngüsü",
        help: "Tamamlamak istediğiniz 90 dakikalık döngü sayısı. Çoğu yetişkin için 5–6 döngü (7,5–9 saat) idealdir.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "Önerilen Saatler",
        help: "4, 5, 6 ve 7 uyku döngüsü için optimal uyanma veya yatma saatleri.",
      },
      sleepDurationHours: {
        label: "Uyku Süresi",
        help: "Seçtiğiniz döngü sayısı için toplam uyku süresi.",
        suffix: "saat",
      },
      cyclesOptions: {
        label: "Tüm Döngü Seçenekleri",
        help: "Farklı döngü sayıları için uyanma veya yatma saatlerinin dökümü.",
      },
    },
    options: {
      mode: {
        from_bedtime: "Yatma saatimi biliyorum → uyanma saatlerini göster",
        from_waketime: "Uyanma saatimi biliyorum → yatma saatlerini göster",
      },
    },
    errors: {
      invalidTime: "Lütfen geçerli bir saat girin (SS:DD formatında, örn. 23:00).",
    },
    faq: [
      {
        q: "Uyku döngüsü nedir?",
        a: "Uyku döngüsü, hafif uyku, derin uyku ve REM (hızlı göz hareketi) uykusu aşamalarından oluşan ve gece boyunca yaklaşık 90 dakikada bir tekrarlanan bir dizidir. Çoğu yetişkin bir gecede 4–6 döngü tamamlar.",
      },
      {
        q: "Hesaplayıcı neden yatma saatine 14 dakika ekliyor?",
        a: "Ortalama olarak, yatağa girdikten sonra uykuya dalmak yaklaşık 14 dakika sürer. Bu 'uyku gecikmesi' eklenerek uyanma önerileri, bir döngünün ortasında değil, tam sonunda olacak şekilde hizalanır.",
      },
      {
        q: "Kaç uyku döngüsüne ihtiyacım var?",
        a: "Çoğu yetişkin optimal bilişsel işlev ve fiziksel iyileşme için 5–6 döngüye (7,5–9 saat) ihtiyaç duyar. Kronik olarak 4 döngünün altında kalmak sağlık sorunlarıyla ilişkilendirilmektedir.",
      },
    ],
  },

  de: {
    title: "Schlafzyklusrechner",
    short: "Finden Sie die besten Aufwach- oder Schlafenszeiten auf Basis von 90-Minuten-Schlafzyklen.",
    description:
      "Kostenloser Schlafzyklusrechner. Geben Sie Ihre Schlafenszeit oder gewünschte Aufwachzeit ein und erhalten Sie optimale Schlafzeiten basierend auf natürlichen 90-Minuten-Schlafzyklen.",
    keywords: [
      "Schlafzyklusrechner",
      "beste Aufwachzeit",
      "Schlafrechner",
      "90-Minuten-Schlafzyklus",
      "wann soll ich schlafen gehen",
      "REM-Schlaf Rechner",
      "Schlafplan",
    ],
    inputs: {
      mode: {
        label: "Berechnungsmodus",
        help: "Wählen Sie, ob Sie Ihre Schlafenszeit kennen und Aufwachvorschläge möchten, oder umgekehrt.",
      },
      inputTime: {
        label: "Uhrzeit (HH:MM)",
        help: "Geben Sie die Schlafens- oder Aufwachzeit im 24-Stunden-Format ein (z. B. 23:00 für 23 Uhr).",
      },
      cycleCount: {
        label: "Bevorzugte Schlafzyklen",
        help: "Anzahl der 90-Minuten-Zyklen, die Sie abschließen möchten. 5–6 Zyklen (7,5–9 Stunden) sind für die meisten Erwachsenen ideal.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "Empfohlene Zeiten",
        help: "Optimale Aufwach- oder Schlafenszeiten für 4, 5, 6 und 7 Schlafzyklen.",
      },
      sleepDurationHours: {
        label: "Schlafdauer",
        help: "Gesamtschlafdauer für die gewählte Anzahl von Zyklen.",
        suffix: "Stunden",
      },
      cyclesOptions: {
        label: "Alle Zyklusoptionen",
        help: "Aufwach- oder Schlafenszeiten für verschiedene Zykluszahlen.",
      },
    },
    options: {
      mode: {
        from_bedtime: "Ich kenne meine Schlafenszeit → Aufwachzeiten anzeigen",
        from_waketime: "Ich kenne meine Aufwachzeit → Schlafenszeiten anzeigen",
      },
    },
    errors: {
      invalidTime: "Bitte geben Sie eine gültige Uhrzeit im Format HH:MM ein (z. B. 23:00).",
    },
    faq: [
      {
        q: "Was ist ein Schlafzyklus?",
        a: "Ein Schlafzyklus ist eine Abfolge von Schlafphasen — Leichtschlaf, Tiefschlaf und REM-Schlaf — die sich alle 90 Minuten wiederholt. Die meisten Erwachsenen schließen pro Nacht 4–6 Zyklen ab.",
      },
      {
        q: "Warum addiert der Rechner 14 Minuten zur Schlafenszeit?",
        a: "Durchschnittlich dauert es etwa 14 Minuten, um einzuschlafen. Diese 'Schlaflatenz' wird berücksichtigt, damit die Aufwachempfehlungen mit dem Ende eines vollständigen Zyklus zusammenfallen.",
      },
      {
        q: "Wie viele Schlafzyklen brauche ich?",
        a: "Die meisten Erwachsenen benötigen 5–6 Zyklen (7,5–9 Stunden) für optimale kognitive Leistung und körperliche Erholung.",
      },
    ],
  },

  fr: {
    title: "Calculateur de cycles de sommeil",
    short: "Trouvez les meilleures heures pour vous réveiller ou vous coucher selon des cycles de sommeil de 90 minutes.",
    description:
      "Calculateur de cycles de sommeil gratuit. Entrez votre heure de coucher ou votre heure de réveil souhaitée pour obtenir un programme de sommeil optimal basé sur des cycles naturels de 90 minutes.",
    keywords: [
      "calculateur cycle de sommeil",
      "meilleure heure de réveil",
      "calculateur sommeil",
      "cycle sommeil 90 minutes",
      "à quelle heure me coucher",
      "calculateur sommeil paradoxal",
      "programme de sommeil",
    ],
    inputs: {
      mode: {
        label: "Mode de calcul",
        help: "Choisissez si vous connaissez votre heure de coucher et souhaitez des suggestions de réveil, ou l'inverse.",
      },
      inputTime: {
        label: "Heure (HH:MM)",
        help: "Entrez l'heure de coucher ou de réveil souhaitée au format 24 heures (ex. 23:00 pour 23h).",
      },
      cycleCount: {
        label: "Cycles de sommeil souhaités",
        help: "Nombre de cycles de 90 minutes à compléter. 5–6 cycles (7h30–9h) est idéal pour la plupart des adultes.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "Heures recommandées",
        help: "Heures de réveil ou de coucher optimales pour 4, 5, 6 et 7 cycles de sommeil.",
      },
      sleepDurationHours: {
        label: "Durée du sommeil",
        help: "Durée totale de sommeil pour le nombre de cycles sélectionné.",
        suffix: "heures",
      },
      cyclesOptions: {
        label: "Toutes les options de cycles",
        help: "Détail des heures de réveil ou de coucher pour différents nombres de cycles.",
      },
    },
    options: {
      mode: {
        from_bedtime: "Je connais mon heure de coucher → afficher les heures de réveil",
        from_waketime: "Je connais mon heure de réveil → afficher les heures de coucher",
      },
    },
    errors: {
      invalidTime: "Veuillez entrer une heure valide au format HH:MM (ex. 23:00).",
    },
    faq: [
      {
        q: "Qu'est-ce qu'un cycle de sommeil ?",
        a: "Un cycle de sommeil est une séquence de phases — sommeil léger, sommeil profond et sommeil paradoxal (REM) — qui se répète environ toutes les 90 minutes. La plupart des adultes effectuent 4 à 6 cycles par nuit.",
      },
      {
        q: "Pourquoi le calculateur ajoute-t-il 14 minutes à l'heure de coucher ?",
        a: "En moyenne, il faut environ 14 minutes pour s'endormir. Cette 'latence d'endormissement' est ajoutée pour que les recommandations de réveil coïncident avec la fin d'un cycle complet.",
      },
      {
        q: "Combien de cycles de sommeil me faut-il ?",
        a: "La plupart des adultes ont besoin de 5 à 6 cycles (7h30 à 9h) pour une fonction cognitive optimale et une récupération physique adéquate.",
      },
    ],
  },

  es: {
    title: "Calculadora de ciclos de sueño",
    short: "Encuentra los mejores horarios para despertar o acostarte según ciclos de sueño de 90 minutos.",
    description:
      "Calculadora de ciclos de sueño gratuita. Introduce tu hora de acostarte o la hora de despertar deseada para obtener un horario de sueño óptimo basado en ciclos naturales de 90 minutos.",
    keywords: [
      "calculadora ciclo de sueño",
      "mejor hora para despertar",
      "calculadora de sueño",
      "ciclo de sueño 90 minutos",
      "a qué hora debo acostarme",
      "calculadora sueño REM",
      "horario de sueño",
    ],
    inputs: {
      mode: {
        label: "Modo de cálculo",
        help: "Elige si conoces tu hora de acostarte y quieres sugerencias de despertar, o si conoces tu hora de despertar y quieres sugerencias de acostarte.",
      },
      inputTime: {
        label: "Hora (HH:MM)",
        help: "Introduce la hora de acostarte o de despertar en formato 24 horas (ej. 23:00 para las 11 PM).",
      },
      cycleCount: {
        label: "Ciclos de sueño preferidos",
        help: "Número de ciclos de 90 minutos que deseas completar. 5–6 ciclos (7h30–9h) es ideal para la mayoría de adultos.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "Horarios recomendados",
        help: "Horas óptimas de despertar o de acostarse para 4, 5, 6 y 7 ciclos de sueño.",
      },
      sleepDurationHours: {
        label: "Duración del sueño",
        help: "Tiempo total de sueño para el número de ciclos seleccionado.",
        suffix: "horas",
      },
      cyclesOptions: {
        label: "Todas las opciones de ciclos",
        help: "Desglose de horas de despertar o de acostarse para diferentes números de ciclos.",
      },
    },
    options: {
      mode: {
        from_bedtime: "Conozco mi hora de acostarte → mostrar horas de despertar",
        from_waketime: "Conozco mi hora de despertar → mostrar horas de acostarte",
      },
    },
    errors: {
      invalidTime: "Por favor, introduce una hora válida en formato HH:MM (ej. 23:00).",
    },
    faq: [
      {
        q: "¿Qué es un ciclo de sueño?",
        a: "Un ciclo de sueño es una secuencia de fases — sueño ligero, sueño profundo y sueño REM — que se repite aproximadamente cada 90 minutos. La mayoría de los adultos completa 4 a 6 ciclos por noche.",
      },
      {
        q: "¿Por qué la calculadora añade 14 minutos a la hora de acostarte?",
        a: "En promedio, se tarda unos 14 minutos en quedarse dormido. Esta 'latencia de sueño' se añade para que los horarios de despertar coincidan con el final de un ciclo completo.",
      },
      {
        q: "¿Cuántos ciclos de sueño necesito?",
        a: "La mayoría de los adultos necesitan 5–6 ciclos (7h30–9h) para una función cognitiva óptima y una recuperación física adecuada.",
      },
    ],
  },

  it: {
    title: "Calcolatore dei cicli del sonno",
    short: "Trova i migliori orari per svegliarti o andare a letto in base a cicli del sonno di 90 minuti.",
    description:
      "Calcolatore gratuito dei cicli del sonno. Inserisci l'orario in cui vai a letto o l'orario di sveglia desiderato per ottenere un programma di sonno ottimale basato su cicli naturali di 90 minuti.",
    keywords: [
      "calcolatore cicli del sonno",
      "ora migliore per svegliarsi",
      "calcolatore sonno",
      "ciclo sonno 90 minuti",
      "a che ora andare a letto",
      "calcolatore sonno REM",
      "programma del sonno",
    ],
    inputs: {
      mode: {
        label: "Modalità di calcolo",
        help: "Scegli se conosci l'orario in cui vai a letto e vuoi suggerimenti per la sveglia, o viceversa.",
      },
      inputTime: {
        label: "Ora (HH:MM)",
        help: "Inserisci l'orario di addormentamento o di sveglia nel formato 24 ore (es. 23:00).",
      },
      cycleCount: {
        label: "Cicli del sonno preferiti",
        help: "Numero di cicli da 90 minuti che desideri completare. 5–6 cicli (7h30–9h) è ideale per la maggior parte degli adulti.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "Orari raccomandati",
        help: "Orari ottimali di sveglia o di addormentamento per 4, 5, 6 e 7 cicli del sonno.",
      },
      sleepDurationHours: {
        label: "Durata del sonno",
        help: "Durata totale del sonno per il numero di cicli selezionato.",
        suffix: "ore",
      },
      cyclesOptions: {
        label: "Tutte le opzioni di cicli",
        help: "Dettaglio degli orari di sveglia o di addormentamento per diversi numeri di cicli.",
      },
    },
    options: {
      mode: {
        from_bedtime: "Conosco l'orario di addormentamento → mostra orari di sveglia",
        from_waketime: "Conosco l'orario di sveglia → mostra orari di addormentamento",
      },
    },
    errors: {
      invalidTime: "Inserisci un orario valido nel formato HH:MM (es. 23:00).",
    },
    faq: [
      {
        q: "Cos'è un ciclo del sonno?",
        a: "Un ciclo del sonno è una sequenza di fasi — sonno leggero, sonno profondo e sonno REM — che si ripete circa ogni 90 minuti. La maggior parte degli adulti completa 4–6 cicli per notte.",
      },
      {
        q: "Perché il calcolatore aggiunge 14 minuti all'orario di addormentamento?",
        a: "In media, occorrono circa 14 minuti per addormentarsi. Questa 'latenza del sonno' viene aggiunta affinché gli orari di sveglia coincidano con la fine di un ciclo completo.",
      },
      {
        q: "Di quanti cicli del sonno ho bisogno?",
        a: "La maggior parte degli adulti ha bisogno di 5–6 cicli (7h30–9h) per una funzione cognitiva ottimale e un adeguato recupero fisico.",
      },
    ],
  },

  ar: {
    title: "حاسبة دورات النوم",
    short: "اعثر على أفضل أوقات الاستيقاظ أو النوم بناءً على دورات نوم مدتها 90 دقيقة.",
    description:
      "حاسبة مجانية لدورات النوم. أدخل وقت نومك أو وقت الاستيقاظ المطلوب للحصول على جدول نوم مثالي مبني على دورات طبيعية مدتها 90 دقيقة.",
    keywords: [
      "حاسبة دورات النوم",
      "أفضل وقت للاستيقاظ",
      "حاسبة النوم",
      "دورة نوم 90 دقيقة",
      "في أي وقت أنام",
      "حاسبة نوم REM",
      "جدول النوم",
    ],
    inputs: {
      mode: {
        label: "وضع الحساب",
        help: "اختر ما إذا كنت تعرف وقت نومك وتريد اقتراحات لوقت الاستيقاظ، أو العكس.",
      },
      inputTime: {
        label: "الوقت (HH:MM)",
        help: "أدخل وقت النوم أو وقت الاستيقاظ المطلوب بتنسيق 24 ساعة (مثل 23:00 للساعة 11 مساءً).",
      },
      cycleCount: {
        label: "دورات النوم المفضلة",
        help: "عدد الدورات من 90 دقيقة التي تريد إتمامها. 5–6 دورات (7.5–9 ساعات) مثالية لمعظم البالغين.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "الأوقات الموصى بها",
        help: "أوقات الاستيقاظ أو النوم المثلى لـ 4 و5 و6 و7 دورات نوم.",
      },
      sleepDurationHours: {
        label: "مدة النوم",
        help: "إجمالي وقت النوم لعدد الدورات المختار.",
        suffix: "ساعة",
      },
      cyclesOptions: {
        label: "جميع خيارات الدورات",
        help: "تفصيل أوقات الاستيقاظ أو النوم لأعداد مختلفة من الدورات.",
      },
    },
    options: {
      mode: {
        from_bedtime: "أعرف وقت نومي ← أرني أوقات الاستيقاظ",
        from_waketime: "أعرف وقت استيقاظي ← أرني أوقات النوم",
      },
    },
    errors: {
      invalidTime: "يرجى إدخال وقت صحيح بتنسيق HH:MM (مثل 23:00).",
    },
    faq: [
      {
        q: "ما هي دورة النوم؟",
        a: "دورة النوم هي تسلسل من مراحل النوم — النوم الخفيف والنوم العميق ونوم حركة العين السريعة (REM) — يتكرر كل 90 دقيقة تقريباً طوال الليل. يُتمّ معظم البالغين 4 إلى 6 دورات في الليلة.",
      },
      {
        q: "لماذا تضيف الحاسبة 14 دقيقة إلى وقت النوم؟",
        a: "يستغرق الشخص في المتوسط نحو 14 دقيقة للنوم بعد الاستلقاء. تُضاف هذه 'فترة الكمون' لجعل اقتراحات الاستيقاظ تتزامن مع نهاية دورة كاملة.",
      },
      {
        q: "كم دورة نوم أحتاج؟",
        a: "يحتاج معظم البالغين إلى 5–6 دورات (7.5–9 ساعات) لتحقيق الأداء المعرفي الأمثل والتعافي الجسدي الكافي.",
      },
    ],
  },

  ru: {
    title: "Калькулятор циклов сна",
    short: "Найдите оптимальное время для пробуждения или отхода ко сну на основе 90-минутных циклов сна.",
    description:
      "Бесплатный калькулятор циклов сна. Введите время отхода ко сну или желаемое время подъёма, чтобы получить оптимальное расписание сна на основе естественных 90-минутных циклов.",
    keywords: [
      "калькулятор циклов сна",
      "лучшее время для пробуждения",
      "калькулятор сна",
      "цикл сна 90 минут",
      "во сколько ложиться спать",
      "калькулятор фаз сна",
      "режим сна",
    ],
    inputs: {
      mode: {
        label: "Режим расчёта",
        help: "Выберите: знаете время отхода ко сну и хотите получить время пробуждения, или наоборот.",
      },
      inputTime: {
        label: "Время (ЧЧ:ММ)",
        help: "Введите время сна или пробуждения в 24-часовом формате (например, 23:00).",
      },
      cycleCount: {
        label: "Желаемое количество циклов",
        help: "Количество 90-минутных циклов, которые нужно завершить. 5–6 циклов (7,5–9 часов) оптимальны для большинства взрослых.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "Рекомендуемое время",
        help: "Оптимальное время пробуждения или отхода ко сну для 4, 5, 6 и 7 циклов сна.",
      },
      sleepDurationHours: {
        label: "Продолжительность сна",
        help: "Общее время сна для выбранного количества циклов.",
        suffix: "часов",
      },
      cyclesOptions: {
        label: "Все варианты циклов",
        help: "Разбивка времени пробуждения или сна для разного числа циклов.",
      },
    },
    options: {
      mode: {
        from_bedtime: "Знаю время отхода ко сну → показать время пробуждения",
        from_waketime: "Знаю время пробуждения → показать время отхода ко сну",
      },
    },
    errors: {
      invalidTime: "Введите корректное время в формате ЧЧ:ММ (например, 23:00).",
    },
    faq: [
      {
        q: "Что такое цикл сна?",
        a: "Цикл сна — это последовательность фаз: лёгкий сон, глубокий сон и быстрый сон (REM), которая повторяется примерно каждые 90 минут. Большинство взрослых проходит 4–6 циклов за ночь.",
      },
      {
        q: "Почему калькулятор добавляет 14 минут ко времени отхода ко сну?",
        a: "В среднем человеку требуется около 14 минут, чтобы заснуть. Эта 'латентность сна' добавляется, чтобы рекомендации по времени пробуждения совпадали с окончанием полного цикла.",
      },
      {
        q: "Сколько циклов сна мне нужно?",
        a: "Большинству взрослых необходимо 5–6 циклов (7,5–9 часов) для оптимальной когнитивной функции и физического восстановления.",
      },
    ],
  },

  zh: {
    title: "睡眠周期计算器",
    short: "根据90分钟睡眠周期，找到最佳起床或入睡时间。",
    description:
      "免费睡眠周期计算器。输入您的就寝时间或期望的起床时间，根据自然的90分钟睡眠周期获得最佳睡眠时间表。",
    keywords: [
      "睡眠周期计算器",
      "最佳起床时间",
      "睡眠计算器",
      "90分钟睡眠周期",
      "几点睡觉最好",
      "REM睡眠计算器",
      "睡眠时间表",
    ],
    inputs: {
      mode: {
        label: "计算模式",
        help: "选择您是知道就寝时间（想获得起床建议），还是知道起床时间（想获得就寝建议）。",
      },
      inputTime: {
        label: "时间（HH:MM）",
        help: "以24小时格式输入就寝或起床时间（例如23:00表示晚上11点）。",
      },
      cycleCount: {
        label: "首选睡眠周期数",
        help: "您希望完成的90分钟周期数。大多数成年人以5–6个周期（7.5–9小时）为最佳。",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "推荐时间",
        help: "4、5、6和7个睡眠周期对应的最佳起床或就寝时间。",
      },
      sleepDurationHours: {
        label: "睡眠时长",
        help: "所选周期数对应的总睡眠时间。",
        suffix: "小时",
      },
      cyclesOptions: {
        label: "所有周期选项",
        help: "不同周期数对应的起床或就寝时间详情。",
      },
    },
    options: {
      mode: {
        from_bedtime: "我知道就寝时间 → 显示起床时间",
        from_waketime: "我知道起床时间 → 显示就寝时间",
      },
    },
    errors: {
      invalidTime: "请输入格式为HH:MM的有效时间（例如23:00）。",
    },
    faq: [
      {
        q: "什么是睡眠周期？",
        a: "睡眠周期是一系列睡眠阶段——浅睡眠、深度睡眠和快速眼动（REM）睡眠——大约每90分钟重复一次。大多数成年人每晚完成4至6个周期。",
      },
      {
        q: "为什么计算器在就寝时间上加了14分钟？",
        a: "平均而言，上床后需要约14分钟才能入睡。加入这一'入睡潜伏期'后，起床建议将与完整周期的结束时间对齐。",
      },
      {
        q: "我需要几个睡眠周期？",
        a: "大多数成年人需要5–6个周期（7.5–9小时）以保持最佳认知功能和身体恢复。",
      },
    ],
  },

  ja: {
    title: "睡眠サイクル計算機",
    short: "90分間の睡眠サイクルに基づいて、最適な起床時刻または就寝時刻を計算します。",
    description:
      "無料の睡眠サイクル計算機です。就寝時刻または希望の起床時刻を入力して、自然な90分睡眠サイクルに基づいた最適な睡眠スケジュールを確認しましょう。",
    keywords: [
      "睡眠サイクル計算機",
      "最適な起床時刻",
      "睡眠計算機",
      "90分睡眠サイクル",
      "何時に寝るべきか",
      "レム睡眠計算機",
      "睡眠スケジュール",
    ],
    inputs: {
      mode: {
        label: "計算モード",
        help: "就寝時刻がわかって起床時刻の提案が欲しい場合と、起床時刻がわかって就寝時刻の提案が欲しい場合に切り替えます。",
      },
      inputTime: {
        label: "時刻（HH:MM）",
        help: "就寝時刻または起床時刻を24時間形式で入力してください（例：23:00）。",
      },
      cycleCount: {
        label: "希望する睡眠サイクル数",
        help: "完了したい90分サイクルの数。ほとんどの成人には5〜6サイクル（7.5〜9時間）が理想的です。",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "推奨時刻",
        help: "4、5、6、7サイクルに対応した最適な起床時刻または就寝時刻。",
      },
      sleepDurationHours: {
        label: "睡眠時間",
        help: "選択したサイクル数の合計睡眠時間。",
        suffix: "時間",
      },
      cyclesOptions: {
        label: "全サイクルオプション",
        help: "各サイクル数に対応した起床時刻または就寝時刻の一覧。",
      },
    },
    options: {
      mode: {
        from_bedtime: "就寝時刻がわかる → 起床時刻を表示",
        from_waketime: "起床時刻がわかる → 就寝時刻を表示",
      },
    },
    errors: {
      invalidTime: "HH:MM形式で有効な時刻を入力してください（例：23:00）。",
    },
    faq: [
      {
        q: "睡眠サイクルとは何ですか？",
        a: "睡眠サイクルとは、浅い眠り・深い眠り・レム睡眠（急速眼球運動睡眠）という段階が約90分ごとに繰り返されるパターンです。ほとんどの成人は一晩に4〜6サイクルを経験します。",
      },
      {
        q: "なぜ計算機は就寝時刻に14分を加えるのですか？",
        a: "平均的に、布団に入ってから眠るまで約14分かかります。この「睡眠潜時」を加えることで、起床時刻の提案が完全なサイクルの終わりと一致するようにしています。",
      },
      {
        q: "何サイクルの睡眠が必要ですか？",
        a: "ほとんどの成人は、最適な認知機能と身体回復のために5〜6サイクル（7.5〜9時間）が必要です。",
      },
    ],
  },

  ko: {
    title: "수면 주기 계산기",
    short: "90분 수면 주기를 기반으로 최적의 기상 또는 취침 시간을 찾으세요.",
    description:
      "무료 수면 주기 계산기입니다. 취침 시간 또는 원하는 기상 시간을 입력하면 자연스러운 90분 수면 주기를 기반으로 최적의 수면 일정을 알 수 있습니다.",
    keywords: [
      "수면 주기 계산기",
      "최적 기상 시간",
      "수면 계산기",
      "90분 수면 주기",
      "몇 시에 자야 하나",
      "렘 수면 계산기",
      "수면 스케줄",
    ],
    inputs: {
      mode: {
        label: "계산 모드",
        help: "취침 시간을 알고 기상 시간 제안을 원하는지, 아니면 기상 시간을 알고 취침 시간 제안을 원하는지 선택하세요.",
      },
      inputTime: {
        label: "시간 (HH:MM)",
        help: "취침 또는 기상 시간을 24시간 형식으로 입력하세요 (예: 23:00).",
      },
      cycleCount: {
        label: "선호하는 수면 주기 수",
        help: "완료하고 싶은 90분 주기의 수. 대부분의 성인에게 5–6주기(7.5–9시간)가 이상적입니다.",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "권장 시간",
        help: "4, 5, 6, 7개 수면 주기에 대한 최적 기상 또는 취침 시간.",
      },
      sleepDurationHours: {
        label: "수면 시간",
        help: "선택한 주기 수에 대한 총 수면 시간.",
        suffix: "시간",
      },
      cyclesOptions: {
        label: "모든 주기 옵션",
        help: "다양한 주기 수에 대한 기상 또는 취침 시간 분류.",
      },
    },
    options: {
      mode: {
        from_bedtime: "취침 시간을 알고 있음 → 기상 시간 표시",
        from_waketime: "기상 시간을 알고 있음 → 취침 시간 표시",
      },
    },
    errors: {
      invalidTime: "HH:MM 형식의 유효한 시간을 입력하세요 (예: 23:00).",
    },
    faq: [
      {
        q: "수면 주기란 무엇인가요?",
        a: "수면 주기는 얕은 수면, 깊은 수면, REM(급속 안구 운동) 수면이라는 단계가 약 90분마다 반복되는 패턴입니다. 대부분의 성인은 밤새 4~6개의 주기를 경험합니다.",
      },
      {
        q: "계산기가 취침 시간에 14분을 추가하는 이유는 무엇인가요?",
        a: "평균적으로 침대에 누운 후 잠들기까지 약 14분이 걸립니다. 이 '수면 잠복기'를 추가하면 기상 시간 제안이 완전한 주기의 끝과 일치하게 됩니다.",
      },
      {
        q: "몇 개의 수면 주기가 필요한가요?",
        a: "대부분의 성인은 최적의 인지 기능과 신체 회복을 위해 5–6주기(7.5–9시간)가 필요합니다.",
      },
    ],
  },

  hi: {
    title: "नींद चक्र कैलकुलेटर",
    short: "90 मिनट के नींद चक्रों के आधार पर सर्वोत्तम जागने या सोने का समय खोजें।",
    description:
      "मुफ़्त नींद चक्र कैलकुलेटर। अपना सोने का समय या वांछित जागने का समय दर्ज करें और प्राकृतिक 90 मिनट के नींद चक्रों के आधार पर इष्टतम नींद कार्यक्रम प्राप्त करें।",
    keywords: [
      "नींद चक्र कैलकुलेटर",
      "सबसे अच्छा जागने का समय",
      "नींद कैलकुलेटर",
      "90 मिनट नींद चक्र",
      "कितने बजे सोना चाहिए",
      "REM नींद कैलकुलेटर",
      "नींद अनुसूची",
    ],
    inputs: {
      mode: {
        label: "गणना मोड",
        help: "चुनें कि क्या आप सोने का समय जानते हैं और जागने के सुझाव चाहते हैं, या उल्टा।",
      },
      inputTime: {
        label: "समय (HH:MM)",
        help: "सोने या जागने का समय 24 घंटे प्रारूप में दर्ज करें (जैसे 23:00 रात 11 बजे के लिए)।",
      },
      cycleCount: {
        label: "पसंदीदा नींद चक्र",
        help: "जितने 90 मिनट के चक्र पूरे करना चाहते हैं। अधिकांश वयस्कों के लिए 5–6 चक्र (7.5–9 घंटे) आदर्श हैं।",
      },
    },
    outputs: {
      recommendedTimes: {
        label: "अनुशंसित समय",
        help: "4, 5, 6 और 7 नींद चक्रों के लिए इष्टतम जागने या सोने का समय।",
      },
      sleepDurationHours: {
        label: "नींद की अवधि",
        help: "चयनित चक्र संख्या के लिए कुल नींद का समय।",
        suffix: "घंटे",
      },
      cyclesOptions: {
        label: "सभी चक्र विकल्प",
        help: "विभिन्न चक्र संख्याओं के लिए जागने या सोने के समय का विवरण।",
      },
    },
    options: {
      mode: {
        from_bedtime: "मुझे सोने का समय पता है → जागने का समय दिखाएँ",
        from_waketime: "मुझे जागने का समय पता है → सोने का समय दिखाएँ",
      },
    },
    errors: {
      invalidTime: "कृपया HH:MM प्रारूप में एक वैध समय दर्ज करें (जैसे 23:00)।",
    },
    faq: [
      {
        q: "नींद चक्र क्या है?",
        a: "नींद चक्र नींद के चरणों का एक क्रम है — हल्की नींद, गहरी नींद और REM (तीव्र नेत्र गति) नींद — जो रात भर हर 90 मिनट में दोहराता है। अधिकांश वयस्क प्रति रात 4–6 चक्र पूरे करते हैं।",
      },
      {
        q: "कैलकुलेटर सोने के समय में 14 मिनट क्यों जोड़ता है?",
        a: "औसतन, बिस्तर पर जाने के बाद सोने में लगभग 14 मिनट लगते हैं। इस 'नींद विलंबता' को जोड़ने से जागने की सिफारिशें एक पूर्ण चक्र के अंत के साथ संरेखित होती हैं।",
      },
      {
        q: "मुझे कितने नींद चक्रों की आवश्यकता है?",
        a: "अधिकांश वयस्कों को इष्टतम संज्ञानात्मक कार्य और शारीरिक रिकवरी के लिए 5–6 चक्र (7.5–9 घंटे) की आवश्यकता होती है।",
      },
    ],
  },
};

export default i18n;
