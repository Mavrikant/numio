import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "BMI Calculator for Children & Teens (Ages 2–20)",
    short: "Calculate BMI-for-age for children using CDC growth chart percentiles.",
    description:
      "Free pediatric BMI calculator for ages 2–20. Enter age, sex, height, and weight to find your child's BMI, weight status, and growth chart percentile estimate.",
    keywords: [
      "BMI calculator children",
      "pediatric BMI",
      "BMI for age",
      "child BMI percentile",
      "CDC growth chart",
      "kids BMI calculator",
      "teen BMI",
    ],
    inputs: {
      gender: { label: "Sex", help: "Sex affects the CDC growth chart percentile thresholds." },
      age: { label: "Age (years)", help: "Child's age in whole years (2 to 20)." },
      unit: { label: "Unit system", help: "Choose metric (kg/cm) or imperial (lb/in)." },
      weight: { label: "Weight", help: "Child's current body weight." },
      height: { label: "Height", help: "Child's height in centimetres (metric) or inches (imperial)." },
    },
    outputs: {
      bmi: { label: "BMI", help: "Body Mass Index: weight(kg) ÷ height(m)²." },
      weightStatus: { label: "Weight status", help: "CDC category based on BMI-for-age percentile." },
      percentileEstimate: { label: "Percentile estimate", help: "Approximate BMI-for-age percentile based on CDC 2000 growth chart cutoffs." },
    },
    options: {
      gender: { male: "Male (boy)", female: "Female (girl)" },
      unit: { metric: "Metric (kg, cm)", imperial: "Imperial (lb, in)" },
    },
    errors: {
      ageOutOfRange: "Age must be between 2 and 20 years.",
      weightOutOfRange: "Please enter a valid weight.",
      heightOutOfRange: "Please enter a valid height.",
    },
    faq: [
      {
        q: "Why can't I use the adult BMI categories for children?",
        a: "Adult BMI cutoffs (underweight <18.5, healthy 18.5–24.9, etc.) do not apply to children because body fat changes significantly with age and differs between boys and girls. Children's BMI is interpreted using age- and sex-specific percentile charts developed from large reference populations.",
      },
      {
        q: "What do the BMI-for-age categories mean?",
        a: "The CDC uses four categories: Underweight (below the 5th percentile), Healthy weight (5th to below 85th percentile), Overweight (85th to below 95th percentile), and Obese (at or above the 95th percentile). These percentiles describe how a child's BMI compares to other children of the same age and sex in the reference population.",
      },
      {
        q: "Is a high BMI always a health problem for children?",
        a: "Not necessarily. BMI is a screening tool, not a diagnostic test. Some children with high BMI have high muscle mass rather than excess fat. A healthcare provider can perform a full assessment including physical examination, family history, and additional measurements to determine if a child's weight is a health concern.",
      },
      {
        q: "How accurate is this calculator's percentile estimate?",
        a: "This calculator uses simplified lookup tables based on the CDC 2000 growth charts. The weight status categories (underweight/healthy/overweight/obese) are accurate. The numeric percentile estimate is approximate and uses linear interpolation. For precise clinical percentile calculation, use the CDC's official BMI-for-age calculator or a licensed growth chart tool.",
      },
      {
        q: "What is a healthy growth pattern for children?",
        a: "Healthy children generally follow a consistent growth curve over time, tracking at a similar percentile from year to year. A sudden shift in percentile rank (e.g., jumping from the 50th to the 85th percentile within one year) is more concerning than a child who has consistently tracked at the 70th percentile for years. Regular check-ups with a paediatrician are the best way to monitor growth.",
      },
    ],
  },
  nl: {
    title: "BMI Calculator for Children & Teens (Leeftijds 2–20)",
    short: "Bereken BMI-for-age for children using CDC growth chart percentiles.",
    description:
      "Gratis pediatric BMI calculator for ages 2–20. Enter age, sex, hoogte, and weight to find your child's BMI, weight status, and growth chart percentile estimate.",
    keywords: [
      "BMI calculator children",
      "pediatric BMI",
      "BMI for age",
      "child BMI percentile",
      "CDC growth chart",
      "kids BMI calculator",
      "teen BMI",
    ],
    inputs: {
      gender: { label: "Sex", help: "Sex affects the CDC growth chart percentile thresholds." },
      age: { label: "Leeftijd (jaren)", help: "Child's age in whole jaren (2 to 20)." },
      unit: { label: "Unit system", help: "Choose metric (kg/cm) or imperial (lb/in)." },
      weight: { label: "Weight", help: "Child's current body weight." },
      height: { label: "Hoogte", help: "Child's hoogte in centimetres (metric) or inches (imperial)." },
    },
    outputs: {
      bmi: { label: "BMI", help: "Body Mass Index: weight(kg) ÷ hoogte(m)²." },
      weightStatus: { label: "Weight status", help: "CDC category based on BMI-for-age percentile." },
      percentileEstimate: { label: "Percentile estimate", help: "Approximate BMI-for-age percentile based on CDC 2000 growth chart cutoffs." },
    },
    options: {
      gender: { male: "Male (boy)", female: "Female (girl)" },
      unit: { metric: "Metric (kg, cm)", imperial: "Imperial (lb, in)" },
    },
    errors: {
      ageOutOfRange: "Leeftijd must be between 2 and 20 jaren.",
      weightOutOfRange: "Please enter a valid weight.",
      heightOutOfRange: "Please enter a valid hoogte.",
    },
    faq: [
      {
        q: "Why can't I use the adult BMI categories for children?",
        a: "Adult BMI cutoffs (underweight <18.5, healthy 18.5–24.9, etc.) do not apply to children because body fat changes significantly with age and differs between boys and girls. Children's BMI is interpreted using age- and sex-specific percentile charts developed from large reference populations.",
      },
      {
        q: "What do the BMI-for-age categories mean?",
        a: "The CDC uses four categories: Underweight (below the 5th percentile), Healthy weight (5th to below 85th percentile), Overweight (85th to below 95th percentile), and Obese (at or above the 95th percentile). These percentiles describe how a child's BMI compares to other children of the same age and sex in the reference population.",
      },
      {
        q: "Is a high BMI always a health problem for children?",
        a: "Not necessarily. BMI is a screening tool, not a diagnostic test. Some children with high BMI have high muscle mass rather than excess fat. A healthcare provider can perform a full assessment including physical examination, family history, and additional measurements to determine if a child's weight is a health concern.",
      },
      {
        q: "How accurate is this calculator's percentile estimate?",
        a: "This calculator uses simplified lookup tables based on the CDC 2000 growth charts. The weight status categories (underweight/healthy/overweight/obese) are accurate. The numeric percentile estimate is approximate and uses linear interpolation. For precise clinical percentile calculation, use the CDC's official BMI-for-age calculator or a licensed growth chart tool.",
      },
      {
        q: "What is a healthy growth pattern for children?",
        a: "Healthy children generally follow a consistent growth curve over time, tracking at a similar percentile from year to year. A sudden shift in percentile rank (e.g., jumping from the 50th to the 85th percentile within one year) is more concerning than a child who has consistently tracked at the 70th percentile for jaren. Regular controleer-ups with a paediatrician are the best way to monitor growth.",
      },
    ],
  },

  pl: {
    title: "BMI Kalkulator for Children & Teens (Wieks 2–20)",
    short: "Oblicz BMI-for-age for children using CDC growth chart percentiles.",
    description:
      "Darmowy pediatric BMI kalkulator for ages 2–20. Enter age, sex, wysokość, and weight to find your child's BMI, weight status, and growth chart percentile estimate.",
    keywords: [
      "BMI kalkulator children",
      "pediatric BMI",
      "BMI for age",
      "child BMI percentile",
      "CDC growth chart",
      "kids BMI kalkulator",
      "teen BMI",
    ],
    inputs: {
      gender: { label: "Sex", help: "Sex affects the CDC growth chart percentile thresholds." },
      age: { label: "Wiek (lat)", help: "Child's age in whole lat (2 to 20)." },
      unit: { label: "Unit system", help: "Choose metric (kg/cm) or imperial (lb/in)." },
      weight: { label: "Weight", help: "Child's current body weight." },
      height: { label: "Wysokość", help: "Child's wysokość in centimetres (metric) or inches (imperial)." },
    },
    outputs: {
      bmi: { label: "BMI", help: "Body Mass Index: weight(kg) ÷ wysokość(m)²." },
      weightStatus: { label: "Weight status", help: "CDC category based on BMI-for-age percentile." },
      percentileEstimate: { label: "Percentile estimate", help: "Approximate BMI-for-age percentile based on CDC 2000 growth chart cutoffs." },
    },
    options: {
      gender: { male: "Male (boy)", female: "Female (girl)" },
      unit: { metric: "Metric (kg, cm)", imperial: "Imperial (lb, in)" },
    },
    errors: {
      ageOutOfRange: "Wiek must be between 2 and 20 lat.",
      weightOutOfRange: "Please enter a valid weight.",
      heightOutOfRange: "Please enter a valid wysokość.",
    },
    faq: [
      {
        q: "Why can't I use the adult BMI categories for children?",
        a: "Adult BMI cutoffs (underweight <18.5, healthy 18.5–24.9, etc.) do not apply to children because body fat changes significantly with age and differs between boys and girls. Children's BMI is interpreted using age- and sex-specific percentile charts developed from large reference populations.",
      },
      {
        q: "What do the BMI-for-age categories mean?",
        a: "The CDC uses four categories: Underweight (below the 5th percentile), Healthy weight (5th to below 85th percentile), Overweight (85th to below 95th percentile), and Obese (at or above the 95th percentile). These percentiles describe how a child's BMI compares to other children of the same age and sex in the reference population.",
      },
      {
        q: "Is a high BMI always a health problem for children?",
        a: "Not necessarily. BMI is a screening narzędzie, not a diagnostic test. Some children with high BMI have high muscle mass rather than excess fat. A healthcare provider can perform a full assessment including physical examination, family history, and additional measurements to determine if a child's weight is a health concern.",
      },
      {
        q: "How accurate is this kalkulator's percentile estimate?",
        a: "This kalkulator uses simplified lookup tables based on the CDC 2000 growth charts. The weight status categories (underweight/healthy/overweight/obese) are accurate. The numeric percentile estimate is approximate and uses linear interpolation. For precise clinical percentile calculation, use the CDC's official BMI-for-age kalkulator or a licensed growth chart narzędzie.",
      },
      {
        q: "What is a healthy growth pattern for children?",
        a: "Healthy children generally follow a consistent growth curve over time, tracking at a similar percentile from year to year. A sudden shift in percentile rank (e.g., jumping from the 50th to the 85th percentile within one year) is more concerning than a child who has consistently tracked at the 70th percentile for lat. Regular sprawdź-ups with a paediatrician are the best way to monitor growth.",
      },
    ],
  },
  pt: {
    title: "Calculadora de IMC Infantil",
    short: "Calcule o IMC de crianças e adolescentes com percentil por idade.",
    description:
      "Calculadora gratuita de IMC para crianças. Use percentis específicos da idade para avaliar o IMC de crianças e adolescentes.",
    keywords: ["IMC criança", "IMC infantil", "percentil criança", "crescimento criança", "obesidade infantil"],
    inputs: {
      gender: { label: "Sex", help: "Sex affects the CDC growth chart percentile thresholds." },
      age: { label: "Age (years)", help: "Child's age in whole years (2 to 20)." },
      unit: { label: "Unit system", help: "Choose metric (kg/cm) or imperial (lb/in)." },
      weight: { label: "Weight", help: "Child's current body weight." },
      height: { label: "Height", help: "Child's height in centimetres (metric) or inches (imperial)." },
    },
    outputs: {
      bmi: { label: "BMI", help: "Body Mass Index: weight(kg) ÷ height(m)²." },
      weightStatus: { label: "Weight status", help: "CDC category based on BMI-for-age percentile." },
      percentileEstimate: { label: "Percentile estimate", help: "Approximate BMI-for-age percentile based on CDC 2000 growth chart cutoffs." },
    },
    options: {
      gender: { male: "Male (boy)", female: "Female (girl)" },
      unit: { metric: "Metric (kg, cm)", imperial: "Imperial (lb, in)" },
    },
    errors: {
      ageOutOfRange: "Age must be between 2 and 20 years.",
      weightOutOfRange: "Please enter a valid weight.",
      heightOutOfRange: "Please enter a valid height.",
    },
    faq: [
      {
        q: "Why can't I use the adult BMI categories for children?",
        a: "Adult BMI cutoffs (underweight <18.5, healthy 18.5–24.9, etc.) do not apply to children because body fat changes significantly with age and differs between boys and girls. Children's BMI is interpreted using age- and sex-specific percentile charts developed from large reference populations.",
      },
      {
        q: "What do the BMI-for-age categories mean?",
        a: "The CDC uses four categories: Underweight (below the 5th percentile), Healthy weight (5th to below 85th percentile), Overweight (85th to below 95th percentile), and Obese (at or above the 95th percentile). These percentiles describe how a child's BMI compares to other children of the same age and sex in the reference population.",
      },
      {
        q: "Is a high BMI always a health problem for children?",
        a: "Not necessarily. BMI is a screening tool, not a diagnostic test. Some children with high BMI have high muscle mass rather than excess fat. A healthcare provider can perform a full assessment including physical examination, family history, and additional measurements to determine if a child's weight is a health concern.",
      },
      {
        q: "How accurate is this calculator's percentile estimate?",
        a: "This calculator uses simplified lookup tables based on the CDC 2000 growth charts. The weight status categories (underweight/healthy/overweight/obese) are accurate. The numeric percentile estimate is approximate and uses linear interpolation. For precise clinical percentile calculation, use the CDC's official BMI-for-age calculator or a licensed growth chart tool.",
      },
      {
        q: "What is a healthy growth pattern for children?",
        a: "Healthy children generally follow a consistent growth curve over time, tracking at a similar percentile from year to year. A sudden shift in percentile rank (e.g., jumping from the 50th to the 85th percentile within one year) is more concerning than a child who has consistently tracked at the 70th percentile for years. Regular check-ups with a paediatrician are the best way to monitor growth.",
      },
    ],
  },
  id: {
    title: "Kalkulator IMT Anak",
    short: "Hitung IMT anak-anak dan remaja dengan persentil sesuai usia.",
    description:
      "Kalkulator IMT untuk anak gratis. Gunakan persentil khusus usia untuk menilai IMT anak-anak dan remaja.",
    keywords: ["IMT anak", "BMI anak", "persentil anak", "pertumbuhan anak", "obesitas anak"],
    inputs: {
      gender: { label: "Sex", help: "Sex affects the CDC growth chart percentile thresholds." },
      age: { label: "Age (years)", help: "Child's age in whole years (2 to 20)." },
      unit: { label: "Unit system", help: "Choose metric (kg/cm) or imperial (lb/in)." },
      weight: { label: "Weight", help: "Child's current body weight." },
      height: { label: "Height", help: "Child's height in centimetres (metric) or inches (imperial)." },
    },
    outputs: {
      bmi: { label: "BMI", help: "Body Mass Index: weight(kg) ÷ height(m)²." },
      weightStatus: { label: "Weight status", help: "CDC category based on BMI-for-age percentile." },
      percentileEstimate: { label: "Percentile estimate", help: "Approximate BMI-for-age percentile based on CDC 2000 growth chart cutoffs." },
    },
    options: {
      gender: { male: "Male (boy)", female: "Female (girl)" },
      unit: { metric: "Metric (kg, cm)", imperial: "Imperial (lb, in)" },
    },
    errors: {
      ageOutOfRange: "Age must be between 2 and 20 years.",
      weightOutOfRange: "Please enter a valid weight.",
      heightOutOfRange: "Please enter a valid height.",
    },
    faq: [
      {
        q: "Why can't I use the adult BMI categories for children?",
        a: "Adult BMI cutoffs (underweight <18.5, healthy 18.5–24.9, etc.) do not apply to children because body fat changes significantly with age and differs between boys and girls. Children's BMI is interpreted using age- and sex-specific percentile charts developed from large reference populations.",
      },
      {
        q: "What do the BMI-for-age categories mean?",
        a: "The CDC uses four categories: Underweight (below the 5th percentile), Healthy weight (5th to below 85th percentile), Overweight (85th to below 95th percentile), and Obese (at or above the 95th percentile). These percentiles describe how a child's BMI compares to other children of the same age and sex in the reference population.",
      },
      {
        q: "Is a high BMI always a health problem for children?",
        a: "Not necessarily. BMI is a screening tool, not a diagnostic test. Some children with high BMI have high muscle mass rather than excess fat. A healthcare provider can perform a full assessment including physical examination, family history, and additional measurements to determine if a child's weight is a health concern.",
      },
      {
        q: "How accurate is this calculator's percentile estimate?",
        a: "This calculator uses simplified lookup tables based on the CDC 2000 growth charts. The weight status categories (underweight/healthy/overweight/obese) are accurate. The numeric percentile estimate is approximate and uses linear interpolation. For precise clinical percentile calculation, use the CDC's official BMI-for-age calculator or a licensed growth chart tool.",
      },
      {
        q: "What is a healthy growth pattern for children?",
        a: "Healthy children generally follow a consistent growth curve over time, tracking at a similar percentile from year to year. A sudden shift in percentile rank (e.g., jumping from the 50th to the 85th percentile within one year) is more concerning than a child who has consistently tracked at the 70th percentile for years. Regular check-ups with a paediatrician are the best way to monitor growth.",
      },
    ],
  },


  tr: {
    title: "Çocuklar ve Gençler İçin BMI Hesaplayıcı (2–20 Yaş)",
    short: "CDC büyüme eğrisi persentilleri ile çocuklar için yaşa göre BMI hesaplayın.",
    description:
      "2–20 yaş arası çocuklar için ücretsiz pediatrik BMI hesaplayıcı. Çocuğunuzun BMI'sini, kilo durumunu ve büyüme eğrisi persentil tahminini öğrenin.",
    keywords: [
      "çocuk BMI hesaplayıcı",
      "pediatrik BMI",
      "yaşa göre BMI",
      "çocuk BMI persentili",
      "CDC büyüme eğrisi",
      "çocuk kilo hesaplama",
      "ergen BMI",
    ],
    inputs: {
      gender: { label: "Cinsiyet", help: "Cinsiyet, CDC büyüme eğrisi persentil eşiklerini etkiler." },
      age: { label: "Yaş (yıl)", help: "Çocuğun tam yıl olarak yaşı (2 ile 20 arasında)." },
      unit: { label: "Birim sistemi", help: "Metrik (kg/cm) veya İngiliz birimi (lb/inç) seçin." },
      weight: { label: "Kilo", help: "Çocuğun mevcut vücut ağırlığı." },
      height: { label: "Boy", help: "Çocuğun boyu santimetre (metrik) veya inç (İngiliz birimi) cinsinden." },
    },
    outputs: {
      bmi: { label: "BMI", help: "Vücut Kitle İndeksi: ağırlık(kg) ÷ boy(m)²." },
      weightStatus: { label: "Kilo durumu", help: "Yaşa göre BMI persentile göre CDC kategorisi." },
      percentileEstimate: { label: "Persentil tahmini", help: "CDC 2000 büyüme eğrisi eşik değerlerine dayalı yaklaşık BMI-yaş persentili." },
    },
    options: {
      gender: { male: "Erkek", female: "Kız" },
      unit: { metric: "Metrik (kg, cm)", imperial: "İngiliz birimi (lb, inç)" },
    },
    errors: {
      ageOutOfRange: "Yaş 2 ile 20 arasında olmalıdır.",
      weightOutOfRange: "Lütfen geçerli bir kilo girin.",
      heightOutOfRange: "Lütfen geçerli bir boy girin.",
    },
    faq: [
      {
        q: "Neden yetişkin BMI kategorilerini çocuklar için kullanamam?",
        a: "Yetişkinler için geçerli BMI eşikleri çocuklara uygulanamaz; çünkü vücut yağ oranı yaşa ve cinsiyete göre önemli ölçüde değişir. Çocuklarda BMI, büyük referans popülasyonlarından geliştirilen yaşa ve cinsiyete özgü persentil grafikleri kullanılarak yorumlanır.",
      },
      {
        q: "Yaşa göre BMI kategorileri ne anlama gelir?",
        a: "CDC dört kategori kullanır: Düşük kilolu (5. persentil altı), Sağlıklı kilo (5. ile 85. persentil arası), Fazla kilolu (85. ile 95. persentil arası) ve Obez (95. persentil ve üzeri).",
      },
      {
        q: "Yüksek BMI her zaman çocuklar için sağlık sorunu mudur?",
        a: "Mutlaka değil. BMI bir tarama aracıdır, tanı koyma aracı değildir. Yüksek BMI'li bazı çocuklarda fazla yağ değil, yüksek kas kitlesi söz konusu olabilir. Bir sağlık uzmanı, tam bir değerlendirme yaparak çocuğun kilosunun gerçekten endişe verici olup olmadığını belirleyebilir.",
      },
    ],
  },

  de: {
    title: "BMI-Rechner für Kinder und Jugendliche (2–20 Jahre)",
    short: "Berechnen Sie den Alters-BMI für Kinder anhand der CDC-Wachstumskurven-Perzentilen.",
    description:
      "Kostenloser Kinder-BMI-Rechner für 2–20-Jährige. Ermitteln Sie BMI, Gewichtsstatus und Perzentilschätzung Ihres Kindes anhand der CDC-Wachstumskurven.",
    keywords: [
      "Kinder BMI Rechner",
      "pädiatrischer BMI",
      "BMI für Alter",
      "Kind BMI Perzentile",
      "CDC Wachstumskurve",
      "BMI Kinder berechnen",
      "Jugendliche BMI",
    ],
    inputs: {
      gender: { label: "Geschlecht", help: "Das Geschlecht beeinflusst die Perzentilschwellenwerte der CDC-Wachstumskurven." },
      age: { label: "Alter (Jahre)", help: "Alter des Kindes in ganzen Jahren (2 bis 20)." },
      unit: { label: "Einheitensystem", help: "Metrisch (kg/cm) oder imperial (lb/in) wählen." },
      weight: { label: "Gewicht", help: "Aktuelles Körpergewicht des Kindes." },
      height: { label: "Größe", help: "Körpergröße des Kindes in cm (metrisch) oder Zoll (imperial)." },
    },
    outputs: {
      bmi: { label: "BMI", help: "Body-Mass-Index: Gewicht(kg) ÷ Körpergröße(m)²." },
      weightStatus: { label: "Gewichtsstatus", help: "CDC-Kategorie basierend auf dem Alters-BMI-Perzentil." },
      percentileEstimate: { label: "Perzentilschätzung", help: "Ungefähre Alters-BMI-Perzentile nach CDC-2000-Wachstumskurve." },
    },
    options: {
      gender: { male: "Männlich (Junge)", female: "Weiblich (Mädchen)" },
      unit: { metric: "Metrisch (kg, cm)", imperial: "Imperial (lb, Zoll)" },
    },
    errors: {
      ageOutOfRange: "Das Alter muss zwischen 2 und 20 Jahren liegen.",
      weightOutOfRange: "Bitte geben Sie ein gültiges Gewicht ein.",
      heightOutOfRange: "Bitte geben Sie eine gültige Körpergröße ein.",
    },
    faq: [
      {
        q: "Warum gelten die BMI-Kategorien für Erwachsene nicht für Kinder?",
        a: "Die BMI-Grenzwerte für Erwachsene sind für Kinder nicht geeignet, da sich der Körperfettanteil mit dem Alter erheblich verändert und zwischen Mädchen und Jungen unterscheidet. Der Kinder-BMI wird anhand alters- und geschlechtsspezifischer Perzentilkurven bewertet.",
      },
      {
        q: "Was bedeuten die Gewichtsstatuskategorien?",
        a: "Untergewicht: unter 5. Perzentile; Normalgewicht: 5. bis unter 85. Perzentile; Übergewicht: 85. bis unter 95. Perzentile; Adipositas: 95. Perzentile und darüber.",
      },
      {
        q: "Ist ein hoher BMI bei Kindern immer ein Gesundheitsproblem?",
        a: "Nicht unbedingt. BMI ist ein Screening-Instrument, kein Diagnoseinstrument. Einige Kinder mit hohem BMI haben eine hohe Muskelmasse statt überschüssigem Körperfett. Ein vollständige klinische Untersuchung durch einen Kinderarzt ist für eine genaue Beurteilung erforderlich.",
      },
    ],
  },

  fr: {
    title: "Calculateur d'IMC pour enfants et adolescents (2–20 ans)",
    short: "Calculez l'IMC-pour-âge des enfants selon les percentiles des courbes de croissance CDC.",
    description:
      "Calculateur d'IMC pédiatrique gratuit pour les 2–20 ans. Obtenez l'IMC, la catégorie de poids et l'estimation du percentile selon les courbes de croissance CDC 2000.",
    keywords: [
      "calculateur IMC enfant",
      "IMC pédiatrique",
      "IMC pour âge",
      "percentile IMC enfant",
      "courbe de croissance CDC",
      "IMC adolescent",
      "calcul IMC enfant",
    ],
    inputs: {
      gender: { label: "Sexe", help: "Le sexe influe sur les seuils de percentile des courbes de croissance CDC." },
      age: { label: "Âge (années)", help: "Âge de l'enfant en années complètes (2 à 20)." },
      unit: { label: "Système d'unités", help: "Choisissez métrique (kg/cm) ou impérial (lb/po)." },
      weight: { label: "Poids", help: "Poids corporel actuel de l'enfant." },
      height: { label: "Taille", help: "Taille de l'enfant en centimètres (métrique) ou en pouces (impérial)." },
    },
    outputs: {
      bmi: { label: "IMC", help: "Indice de masse corporelle : poids(kg) ÷ taille(m)²." },
      weightStatus: { label: "Statut pondéral", help: "Catégorie CDC basée sur le percentile IMC-pour-âge." },
      percentileEstimate: { label: "Estimation du percentile", help: "Percentile IMC-pour-âge approximatif selon les courbes de croissance CDC 2000." },
    },
    options: {
      gender: { male: "Masculin (garçon)", female: "Féminin (fille)" },
      unit: { metric: "Métrique (kg, cm)", imperial: "Impérial (lb, po)" },
    },
    errors: {
      ageOutOfRange: "L'âge doit être compris entre 2 et 20 ans.",
      weightOutOfRange: "Veuillez entrer un poids valide.",
      heightOutOfRange: "Veuillez entrer une taille valide.",
    },
    faq: [
      {
        q: "Pourquoi ne peut-on pas utiliser les catégories d'IMC adultes pour les enfants ?",
        a: "Les seuils adultes ne s'appliquent pas aux enfants car la masse grasse évolue significativement avec l'âge et diffère entre filles et garçons. L'IMC de l'enfant s'interprète à l'aide de courbes de percentiles spécifiques à l'âge et au sexe.",
      },
      {
        q: "Que signifient les catégories de statut pondéral ?",
        a: "Insuffisance pondérale : en dessous du 5ᵉ percentile ; Poids normal : 5ᵉ au 85ᵉ percentile ; Surpoids : 85ᵉ au 95ᵉ percentile ; Obésité : au-delà du 95ᵉ percentile.",
      },
      {
        q: "Un IMC élevé est-il toujours un problème de santé pour un enfant ?",
        a: "Pas nécessairement. L'IMC est un outil de dépistage, non un test diagnostique. Certains enfants avec un IMC élevé ont une masse musculaire importante plutôt que de l'excès de graisse. Un pédiatre peut réaliser une évaluation complète pour déterminer si le poids de l'enfant constitue un problème de santé.",
      },
    ],
  },

  es: {
    title: "Calculadora de IMC para niños y adolescentes (2–20 años)",
    short: "Calcula el IMC-para-la-edad de niños usando los percentiles de las gráficas de crecimiento CDC.",
    description:
      "Calculadora de IMC pediátrico gratuita para edades de 2–20 años. Obtén el IMC, el estado de peso y la estimación del percentil de tu hijo según las gráficas de crecimiento CDC 2000.",
    keywords: [
      "calculadora IMC niños",
      "IMC pediátrico",
      "IMC para edad",
      "percentil IMC niño",
      "gráfica crecimiento CDC",
      "calculadora IMC adolescente",
      "IMC infantil",
    ],
    inputs: {
      gender: { label: "Sexo", help: "El sexo afecta los umbrales de percentil de las gráficas de crecimiento CDC." },
      age: { label: "Edad (años)", help: "Edad del niño en años completos (2 a 20)." },
      unit: { label: "Sistema de unidades", help: "Elige métrico (kg/cm) o imperial (lb/in)." },
      weight: { label: "Peso", help: "Peso corporal actual del niño." },
      height: { label: "Altura", help: "Altura del niño en centímetros (métrico) o pulgadas (imperial)." },
    },
    outputs: {
      bmi: { label: "IMC", help: "Índice de masa corporal: peso(kg) ÷ altura(m)²." },
      weightStatus: { label: "Estado de peso", help: "Categoría CDC basada en el percentil de IMC-para-la-edad." },
      percentileEstimate: { label: "Estimación del percentil", help: "Percentil aproximado de IMC-para-la-edad según las gráficas CDC 2000." },
    },
    options: {
      gender: { male: "Masculino (niño)", female: "Femenino (niña)" },
      unit: { metric: "Métrico (kg, cm)", imperial: "Imperial (lb, in)" },
    },
    errors: {
      ageOutOfRange: "La edad debe estar entre 2 y 20 años.",
      weightOutOfRange: "Por favor introduce un peso válido.",
      heightOutOfRange: "Por favor introduce una altura válida.",
    },
    faq: [
      {
        q: "¿Por qué no puedo usar las categorías de IMC para adultos en niños?",
        a: "Los umbrales adultos no se aplican a niños porque la grasa corporal cambia significativamente con la edad y difiere entre niños y niñas. El IMC infantil se interpreta con gráficas de percentiles específicas por edad y sexo.",
      },
      {
        q: "¿Qué significan las categorías de estado de peso?",
        a: "Bajo peso: por debajo del percentil 5; Peso saludable: percentil 5 al 85; Sobrepeso: percentil 85 al 95; Obesidad: percentil 95 o superior.",
      },
      {
        q: "¿Un IMC alto siempre es un problema de salud en niños?",
        a: "No necesariamente. El IMC es una herramienta de cribado, no un diagnóstico. Algunos niños con IMC alto tienen mucha masa muscular en lugar de exceso de grasa. Un pediatra puede realizar una evaluación completa.",
      },
    ],
  },

  it: {
    title: "Calcolatore di BMI per bambini e adolescenti (2–20 anni)",
    short: "Calcola il BMI-per-età per bambini usando i percentili delle curve di crescita CDC.",
    description:
      "Calcolatore di BMI pediatrico gratuito per le età da 2 a 20 anni. Ottieni BMI, stato ponderale e stima del percentile del tuo bambino secondo le curve di crescita CDC 2000.",
    keywords: [
      "calcolatore BMI bambini",
      "BMI pediatrico",
      "BMI per età",
      "percentile BMI bambino",
      "curva crescita CDC",
      "calcolatore BMI adolescenti",
      "BMI infantile",
    ],
    inputs: {
      gender: { label: "Sesso", help: "Il sesso influisce sulle soglie di percentile delle curve di crescita CDC." },
      age: { label: "Età (anni)", help: "Età del bambino in anni interi (2–20)." },
      unit: { label: "Sistema di unità", help: "Scegli tra metrico (kg/cm) o imperiale (lb/in)." },
      weight: { label: "Peso", help: "Peso corporeo attuale del bambino." },
      height: { label: "Altezza", help: "Altezza del bambino in centimetri (metrico) o pollici (imperiale)." },
    },
    outputs: {
      bmi: { label: "BMI", help: "Indice di massa corporea: peso(kg) ÷ altezza(m)²." },
      weightStatus: { label: "Stato ponderale", help: "Categoria CDC basata sul percentile BMI-per-età." },
      percentileEstimate: { label: "Stima del percentile", help: "Percentile BMI-per-età approssimativo secondo le curve CDC 2000." },
    },
    options: {
      gender: { male: "Maschio (bambino)", female: "Femmina (bambina)" },
      unit: { metric: "Metrico (kg, cm)", imperial: "Imperiale (lb, in)" },
    },
    errors: {
      ageOutOfRange: "L'età deve essere compresa tra 2 e 20 anni.",
      weightOutOfRange: "Inserisci un peso valido.",
      heightOutOfRange: "Inserisci un'altezza valida.",
    },
    faq: [
      {
        q: "Perché non posso usare le categorie BMI adulti per i bambini?",
        a: "I valori soglia per gli adulti non si applicano ai bambini perché il grasso corporeo cambia significativamente con l'età e varia tra maschi e femmine. Il BMI dei bambini si interpreta usando curve percentili specifiche per età e sesso.",
      },
      {
        q: "Cosa significano le categorie di stato ponderale?",
        a: "Sottopeso: al di sotto del 5° percentile; Normopeso: 5°–85° percentile; Sovrappeso: 85°–95° percentile; Obesità: 95° percentile o superiore.",
      },
      {
        q: "Un BMI alto è sempre un problema di salute per i bambini?",
        a: "Non necessariamente. Il BMI è uno strumento di screening, non diagnostico. Alcuni bambini con BMI elevato hanno alta massa muscolare anziché eccesso di grasso. Un pediatra può eseguire una valutazione completa.",
      },
    ],
  },

  ar: {
    title: "حاسبة مؤشر كتلة الجسم للأطفال والمراهقين (2–20 سنة)",
    short: "احسب مؤشر كتلة الجسم المرتبط بالعمر للأطفال باستخدام مئينيات منحنيات النمو CDC.",
    description:
      "حاسبة مجانية لمؤشر كتلة الجسم للأطفال من سن 2 إلى 20 عامًا. أدخل العمر والجنس والطول والوزن للحصول على مؤشر كتلة الجسم وحالة الوزن وتقدير المئيني.",
    keywords: [
      "حاسبة مؤشر كتلة الجسم للأطفال",
      "مؤشر كتلة الجسم للأطفال",
      "مؤشر كتلة الجسم والعمر",
      "مئيني مؤشر كتلة الجسم",
      "منحنيات نمو CDC",
      "حاسبة BMI للمراهقين",
      "وزن الأطفال الصحي",
    ],
    inputs: {
      gender: { label: "الجنس", help: "يحدد الجنس عتبات المئيني في منحنيات نمو CDC." },
      age: { label: "العمر (سنوات)", help: "عمر الطفل بالسنوات الكاملة (من 2 إلى 20)." },
      unit: { label: "نظام الوحدات", help: "اختر المتري (كجم/سم) أو الإمبراطوري (رطل/بوصة)." },
      weight: { label: "الوزن", help: "الوزن الحالي للطفل." },
      height: { label: "الطول", help: "طول الطفل بالسنتيمتر (متري) أو البوصة (إمبراطوري)." },
    },
    outputs: {
      bmi: { label: "مؤشر كتلة الجسم", help: "الوزن(كجم) ÷ الطول(م)²." },
      weightStatus: { label: "حالة الوزن", help: "تصنيف CDC بناءً على مئيني مؤشر كتلة الجسم للعمر." },
      percentileEstimate: { label: "تقدير المئيني", help: "مئيني تقريبي لمؤشر كتلة الجسم حسب العمر استنادًا إلى منحنيات CDC 2000." },
    },
    options: {
      gender: { male: "ذكر (صبي)", female: "أنثى (بنت)" },
      unit: { metric: "متري (كجم، سم)", imperial: "إمبراطوري (رطل، بوصة)" },
    },
    errors: {
      ageOutOfRange: "يجب أن يكون العمر بين 2 و20 عامًا.",
      weightOutOfRange: "يرجى إدخال وزن صحيح.",
      heightOutOfRange: "يرجى إدخال طول صحيح.",
    },
    faq: [
      {
        q: "لماذا لا يمكن استخدام فئات مؤشر كتلة الجسم للبالغين مع الأطفال؟",
        a: "عتبات مؤشر كتلة الجسم للبالغين لا تنطبق على الأطفال لأن نسبة الدهون في الجسم تتغير بشكل ملحوظ مع تقدم العمر وتختلف بين الذكور والإناث. يُفسَّر مؤشر كتلة الجسم للأطفال باستخدام منحنيات مئينية مخصصة للعمر والجنس.",
      },
      {
        q: "ما معنى تصنيفات حالة الوزن؟",
        a: "نقص الوزن: دون المئيني الخامس؛ الوزن الصحي: المئيني 5 إلى 85؛ زيادة الوزن: المئيني 85 إلى 95؛ السمنة: المئيني 95 فأكثر.",
      },
      {
        q: "هل المؤشر المرتفع دائمًا مشكلة صحية للطفل؟",
        a: "ليس بالضرورة. المؤشر أداة فحص وليس تشخيصًا. قد يمتلك بعض الأطفال ذوي المؤشر المرتفع كتلة عضلية كبيرة بدلًا من فائض الدهون. يستطيع طبيب الأطفال إجراء تقييم شامل للتأكد.",
      },
    ],
  },

  ru: {
    title: "Калькулятор ИМТ для детей и подростков (2–20 лет)",
    short: "Рассчитайте ИМТ-для-возраста для детей по перцентилям ростовых кривых CDC.",
    description:
      "Бесплатный педиатрический калькулятор ИМТ для детей в возрасте 2–20 лет. Введите возраст, пол, рост и вес, чтобы получить ИМТ, весовой статус и оценку перцентиля по ростовым кривым CDC 2000.",
    keywords: [
      "калькулятор ИМТ дети",
      "педиатрический ИМТ",
      "ИМТ для возраста",
      "перцентиль ИМТ ребёнок",
      "ростовые кривые CDC",
      "калькулятор ИМТ подросток",
      "детский ИМТ",
    ],
    inputs: {
      gender: { label: "Пол", help: "Пол влияет на пороговые значения перцентилей ростовых кривых CDC." },
      age: { label: "Возраст (лет)", help: "Возраст ребёнка в полных годах (от 2 до 20)." },
      unit: { label: "Система единиц", help: "Метрическая (кг/см) или имперская (фунт/дюйм)." },
      weight: { label: "Масса тела", help: "Текущий вес ребёнка." },
      height: { label: "Рост", help: "Рост ребёнка в сантиметрах (метрическая) или дюймах (имперская)." },
    },
    outputs: {
      bmi: { label: "ИМТ", help: "Индекс массы тела: вес(кг) ÷ рост(м)²." },
      weightStatus: { label: "Весовой статус", help: "Категория CDC, основанная на перцентиле ИМТ-для-возраста." },
      percentileEstimate: { label: "Оценка перцентиля", help: "Приблизительный перцентиль ИМТ-для-возраста по ростовым кривым CDC 2000." },
    },
    options: {
      gender: { male: "Мужской (мальчик)", female: "Женский (девочка)" },
      unit: { metric: "Метрическая (кг, см)", imperial: "Имперская (фунт, дюйм)" },
    },
    errors: {
      ageOutOfRange: "Возраст должен быть от 2 до 20 лет.",
      weightOutOfRange: "Введите корректное значение массы тела.",
      heightOutOfRange: "Введите корректное значение роста.",
    },
    faq: [
      {
        q: "Почему нельзя использовать категории ИМТ для взрослых у детей?",
        a: "Пороговые значения для взрослых неприменимы к детям, так как содержание жира в организме значительно меняется с возрастом и различается у мальчиков и девочек. Детский ИМТ интерпретируется по возрастно- и половоспецифичным центильным кривым.",
      },
      {
        q: "Что означают категории весового статуса?",
        a: "Дефицит массы тела: ниже 5-го перцентиля; Нормальная масса: 5–85-й перцентиль; Избыточная масса: 85–95-й перцентиль; Ожирение: 95-й перцентиль и выше.",
      },
      {
        q: "Всегда ли высокий ИМТ является проблемой для здоровья ребёнка?",
        a: "Не всегда. ИМТ — инструмент скрининга, а не диагностический тест. Некоторые дети с высоким ИМТ имеют высокую мышечную массу, а не избыток жира. Педиатр может провести полноценное обследование для оценки реального состояния здоровья.",
      },
    ],
  },

  zh: {
    title: "儿童和青少年BMI计算器（2–20岁）",
    short: "使用CDC生长曲线百分位数计算儿童年龄别BMI。",
    description:
      "免费儿童BMI计算器，适用于2–20岁。输入年龄、性别、身高和体重，获取BMI值、体重状态和基于CDC 2000年生长曲线的百分位数估算。",
    keywords: [
      "儿童BMI计算器",
      "儿科BMI",
      "年龄别BMI",
      "儿童BMI百分位数",
      "CDC生长曲线",
      "青少年BMI",
      "儿童体重健康",
    ],
    inputs: {
      gender: { label: "性别", help: "性别影响CDC生长曲线的百分位阈值。" },
      age: { label: "年龄（岁）", help: "儿童的整数年龄（2至20岁）。" },
      unit: { label: "单位制", help: "选择公制（kg/cm）或英制（lb/in）。" },
      weight: { label: "体重", help: "儿童当前体重。" },
      height: { label: "身高", help: "儿童身高，以厘米（公制）或英寸（英制）为单位。" },
    },
    outputs: {
      bmi: { label: "BMI", help: "体质指数：体重(kg) ÷ 身高(m)²。" },
      weightStatus: { label: "体重状态", help: "基于年龄别BMI百分位的CDC分类。" },
      percentileEstimate: { label: "百分位数估算", help: "基于CDC 2000年生长曲线的年龄别BMI近似百分位数。" },
    },
    options: {
      gender: { male: "男（男孩）", female: "女（女孩）" },
      unit: { metric: "公制（kg, cm）", imperial: "英制（lb, in）" },
    },
    errors: {
      ageOutOfRange: "年龄必须在2至20岁之间。",
      weightOutOfRange: "请输入有效体重。",
      heightOutOfRange: "请输入有效身高。",
    },
    faq: [
      {
        q: "为什么不能用成人BMI标准来评估儿童？",
        a: "成人BMI阈值不适用于儿童，因为体脂随年龄显著变化，男女之间也存在差异。儿童BMI使用按年龄和性别划分的百分位曲线进行评估。",
      },
      {
        q: "各体重状态分类意味着什么？",
        a: "低体重：低于第5百分位；健康体重：第5至第85百分位；超重：第85至第95百分位；肥胖：第95百分位及以上。",
      },
      {
        q: "儿童BMI偏高一定是健康问题吗？",
        a: "不一定。BMI是筛查工具，不是诊断工具。部分BMI较高的儿童可能肌肉量较大而非体脂过多。儿科医生可以进行全面评估。",
      },
    ],
  },

  ja: {
    title: "子ども・青少年用BMI計算機（2〜20歳）",
    short: "CDC成長曲線パーセンタイルを使って子どもの年齢別BMIを計算します。",
    description:
      "2〜20歳の子ども向け無料小児BMI計算機。年齢・性別・身長・体重を入力して、BMI・体重区分・CDC 2000年成長曲線に基づくパーセンタイル推定値を確認できます。",
    keywords: [
      "子ども BMI計算機",
      "小児 BMI",
      "年齢別 BMI",
      "子ども BMI パーセンタイル",
      "CDC 成長曲線",
      "青少年 BMI",
      "小児肥満",
    ],
    inputs: {
      gender: { label: "性別", help: "性別はCDC成長曲線のパーセンタイル閾値を決定します。" },
      age: { label: "年齢（歳）", help: "子どもの年齢（整数、2〜20歳）。" },
      unit: { label: "単位系", help: "メートル法（kg/cm）またはヤード・ポンド法（lb/in）を選択。" },
      weight: { label: "体重", help: "子どもの現在の体重。" },
      height: { label: "身長", help: "子どもの身長（センチメートルまたはインチ）。" },
    },
    outputs: {
      bmi: { label: "BMI", help: "体格指数：体重(kg) ÷ 身長(m)²。" },
      weightStatus: { label: "体重区分", help: "年齢別BMIパーセンタイルに基づくCDC分類。" },
      percentileEstimate: { label: "パーセンタイル推定", help: "CDC 2000年成長曲線に基づく年齢別BMIの推定パーセンタイル。" },
    },
    options: {
      gender: { male: "男性（男の子）", female: "女性（女の子）" },
      unit: { metric: "メートル法（kg・cm）", imperial: "ヤード・ポンド法（lb・in）" },
    },
    errors: {
      ageOutOfRange: "年齢は2〜20歳の範囲で入力してください。",
      weightOutOfRange: "有効な体重を入力してください。",
      heightOutOfRange: "有効な身長を入力してください。",
    },
    faq: [
      {
        q: "なぜ子どもに成人のBMI区分を使えないのですか？",
        a: "成人のBMI基準値は、体脂肪が年齢とともに大きく変化し、男女間でも異なるため、子どもには適用できません。小児BMIは年齢・性別別のパーセンタイル曲線を使って評価されます。",
      },
      {
        q: "体重区分の意味は？",
        a: "低体重：5パーセンタイル未満；普通体重：5〜85パーセンタイル；過体重：85〜95パーセンタイル；肥満：95パーセンタイル以上。",
      },
      {
        q: "BMIが高い子どもは必ず健康上の問題がありますか？",
        a: "そうとは限りません。BMIはスクリーニングツールであり、診断ツールではありません。BMIが高い子どもの中には、体脂肪ではなく筋肉量が多い場合もあります。小児科医による総合的な評価が推奨されます。",
      },
    ],
  },

  ko: {
    title: "어린이 및 청소년 BMI 계산기 (2~20세)",
    short: "CDC 성장 곡선 백분위수를 사용하여 어린이의 연령별 BMI를 계산하세요.",
    description:
      "2~20세 어린이를 위한 무료 소아 BMI 계산기. 나이, 성별, 키, 체중을 입력하면 BMI, 체중 상태, CDC 2000년 성장 곡선 기반 백분위수 추정치를 확인할 수 있습니다.",
    keywords: [
      "어린이 BMI 계산기",
      "소아 BMI",
      "연령별 BMI",
      "어린이 BMI 백분위수",
      "CDC 성장 곡선",
      "청소년 BMI",
      "소아 비만",
    ],
    inputs: {
      gender: { label: "성별", help: "성별은 CDC 성장 곡선의 백분위수 기준값에 영향을 줍니다." },
      age: { label: "나이(세)", help: "아이의 만 나이(2~20세)." },
      unit: { label: "단위 시스템", help: "미터법(kg/cm) 또는 야드파운드법(lb/in)을 선택하세요." },
      weight: { label: "체중", help: "아이의 현재 체중." },
      height: { label: "키", help: "아이의 키(센티미터 또는 인치)." },
    },
    outputs: {
      bmi: { label: "BMI", help: "체질량지수: 체중(kg) ÷ 키(m)²." },
      weightStatus: { label: "체중 상태", help: "연령별 BMI 백분위수에 따른 CDC 분류." },
      percentileEstimate: { label: "백분위수 추정", help: "CDC 2000년 성장 곡선 기반 연령별 BMI 근사 백분위수." },
    },
    options: {
      gender: { male: "남성(남자아이)", female: "여성(여자아이)" },
      unit: { metric: "미터법(kg, cm)", imperial: "야드파운드법(lb, in)" },
    },
    errors: {
      ageOutOfRange: "나이는 2~20세 사이여야 합니다.",
      weightOutOfRange: "유효한 체중을 입력하세요.",
      heightOutOfRange: "유효한 키를 입력하세요.",
    },
    faq: [
      {
        q: "어린이에게 성인 BMI 범주를 왜 사용할 수 없나요?",
        a: "성인 BMI 기준값은 어린이에게 적용할 수 없습니다. 체지방은 나이에 따라 크게 변하고, 남자아이와 여자아이 간에도 차이가 있기 때문입니다. 어린이 BMI는 연령·성별별 백분위 곡선으로 평가됩니다.",
      },
      {
        q: "체중 상태 분류는 무엇을 의미하나요?",
        a: "저체중: 5백분위수 미만; 건강 체중: 5~85백분위수; 과체중: 85~95백분위수; 비만: 95백분위수 이상.",
      },
      {
        q: "어린이의 BMI가 높으면 항상 건강 문제인가요?",
        a: "반드시 그렇지는 않습니다. BMI는 선별 도구이지 진단 도구가 아닙니다. 일부 BMI가 높은 어린이는 체지방이 아닌 근육량이 많을 수 있습니다. 소아과 의사의 종합적인 평가가 권장됩니다.",
      },
    ],
  },

  hi: {
    title: "बच्चों और किशोरों के लिए BMI कैलकुलेटर (2–20 वर्ष)",
    short: "CDC विकास वक्र प्रतिशत का उपयोग करके बच्चों की आयु-आधारित BMI गणना करें।",
    description:
      "2–20 वर्ष के बच्चों के लिए निःशुल्क बाल चिकित्सा BMI कैलकुलेटर। आयु, लिंग, ऊंचाई और वज़न दर्ज करें और CDC 2000 विकास वक्र के आधार पर BMI, वज़न स्थिति और प्रतिशत अनुमान जानें।",
    keywords: [
      "बच्चों का BMI कैलकुलेटर",
      "बाल चिकित्सा BMI",
      "आयु-आधारित BMI",
      "बच्चों का BMI प्रतिशत",
      "CDC विकास वक्र",
      "किशोर BMI",
      "बच्चों का स्वस्थ वज़न",
    ],
    inputs: {
      gender: { label: "लिंग", help: "लिंग CDC विकास वक्र के प्रतिशत सीमाओं को प्रभावित करता है।" },
      age: { label: "आयु (वर्ष)", help: "बच्चे की पूर्ण वर्षों में आयु (2 से 20 के बीच)।" },
      unit: { label: "माप प्रणाली", help: "मेट्रिक (kg/cm) या इम्पीरियल (lb/in) चुनें।" },
      weight: { label: "वज़न", help: "बच्चे का वर्तमान शारीरिक वज़न।" },
      height: { label: "ऊंचाई", help: "बच्चे की ऊंचाई सेंटीमीटर (मेट्रिक) या इंच (इम्पीरियल) में।" },
    },
    outputs: {
      bmi: { label: "BMI", help: "बॉडी मास इंडेक्स: वज़न(kg) ÷ ऊंचाई(m)²।" },
      weightStatus: { label: "वज़न स्थिति", help: "आयु-आधारित BMI प्रतिशत के अनुसार CDC श्रेणी।" },
      percentileEstimate: { label: "प्रतिशत अनुमान", help: "CDC 2000 विकास वक्र के आधार पर अनुमानित आयु-आधारित BMI प्रतिशत।" },
    },
    options: {
      gender: { male: "पुरुष (लड़का)", female: "महिला (लड़की)" },
      unit: { metric: "मेट्रिक (kg, cm)", imperial: "इम्पीरियल (lb, in)" },
    },
    errors: {
      ageOutOfRange: "आयु 2 से 20 वर्ष के बीच होनी चाहिए।",
      weightOutOfRange: "कृपया एक मान्य वज़न दर्ज करें।",
      heightOutOfRange: "कृपया एक मान्य ऊंचाई दर्ज करें।",
    },
    faq: [
      {
        q: "बच्चों के लिए वयस्क BMI श्रेणियां क्यों उपयोग नहीं की जा सकतीं?",
        a: "वयस्क BMI सीमाएं बच्चों पर लागू नहीं होती क्योंकि शरीर में वसा आयु के साथ काफी बदलती है और लड़कों तथा लड़कियों में भिन्न होती है। बच्चों के BMI को आयु और लिंग के अनुसार पर्सेंटाइल चार्ट से मापा जाता है।",
      },
      {
        q: "वज़न स्थिति श्रेणियों का अर्थ क्या है?",
        a: "कम वज़न: 5वें प्रतिशत से नीचे; स्वस्थ वज़न: 5वें से 85वें प्रतिशत; अधिक वज़न: 85वें से 95वें प्रतिशत; मोटापा: 95वें प्रतिशत या उससे अधिक।",
      },
      {
        q: "क्या उच्च BMI हमेशा बच्चों के लिए स्वास्थ्य समस्या है?",
        a: "जरूरी नहीं। BMI एक स्क्रीनिंग उपकरण है, नैदानिक परीक्षण नहीं। कुछ उच्च BMI वाले बच्चों में अतिरिक्त वसा की बजाय उच्च मांसपेशी द्रव्यमान होता है। बाल रोग विशेषज्ञ पूर्ण मूल्यांकन कर सकते हैं।",
      },
    ],
  },
};

export default i18n;
