import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Waist-to-Hip Ratio Calculator",
    short: "Calculate your waist-to-hip ratio and assess your metabolic health risk.",
    description:
      "Free waist-to-hip ratio calculator based on WHO guidelines. Enter your waist and hip measurements to get your WHR and cardiovascular risk category.",
    keywords: [
      "waist-to-hip ratio calculator",
      "WHR calculator",
      "central obesity",
      "abdominal fat",
      "cardiovascular risk",
      "waist circumference",
      "body fat distribution",
    ],
    inputs: {
      gender: { label: "Biological sex", help: "Sex determines the WHO risk category thresholds." },
      unit: { label: "Unit system", help: "Choose metric (cm) or imperial (inches)." },
      waist: { label: "Waist circumference", help: "Measure at the narrowest point of the torso, usually just above the navel." },
      hip: { label: "Hip circumference", help: "Measure at the widest point of the hips and buttocks." },
    },
    outputs: {
      whr: { label: "Waist-to-hip ratio (WHR)", help: "Waist circumference divided by hip circumference." },
      riskCategory: { label: "Health risk category", help: "WHO classification based on your WHR and sex." },
      waistCm: { label: "Waist (cm)", help: "Your waist measurement converted to centimetres for threshold comparison." },
      centralObesityRisk: { label: "Central obesity risk", help: "Whether your waist circumference exceeds the WHO threshold for increased health risk." },
    },
    options: {
      gender: { male: "Male", female: "Female" },
      unit: { metric: "Metric (cm)", imperial: "Imperial (inches)" },
    },
    errors: {
      invalidMeasurement: "Waist and hip measurements must be positive numbers.",
    },
    faq: [
      {
        q: "What is the waist-to-hip ratio?",
        a: "The waist-to-hip ratio (WHR) is a simple measure of body fat distribution. It divides your waist circumference by your hip circumference. A higher WHR indicates more fat stored around the abdomen, which is associated with higher cardiovascular and metabolic risk.",
      },
      {
        q: "What are the WHO risk category thresholds?",
        a: "According to the World Health Organization: For men, WHR <0.90 is low risk, 0.90–0.99 is moderate risk, and ≥1.00 is high risk. For women, WHR <0.80 is low risk, 0.80–0.85 is moderate risk, and ≥0.86 is high risk.",
      },
      {
        q: "How do I measure my waist correctly?",
        a: "Stand relaxed (not sucking in your stomach). Measure the narrowest point of your waist, usually about 2 cm above your navel. Keep the tape measure parallel to the floor and snug but not tight. Take the measurement at the end of a normal breath out.",
      },
      {
        q: "How do I measure my hips correctly?",
        a: "Stand with feet together. Measure the widest part of your hips and buttocks, keeping the tape measure horizontal and parallel to the floor. This is typically at the level of the greater trochanters (the bony protrusions on the sides of your hips).",
      },
      {
        q: "Is WHR better than BMI for assessing health risk?",
        a: "WHR and BMI measure different things. BMI measures total body weight relative to height, while WHR measures fat distribution. Research suggests WHR is a better predictor of cardiovascular risk than BMI because abdominal fat (visceral fat) is metabolically more dangerous than subcutaneous fat. Using both measures together gives a more complete picture.",
      },
    ],
  },
  nl: {
    title: "Taille-to-Hip Verhouding Calculator",
    short: "Bereken your waist-to-hip ratio and assess your metabolic health risk.",
    description:
      "Gratis waist-to-hip ratio calculator based on WHO guidelines. Enter your waist and hip measurements to get your WHR and cardiovascular risk category.",
    keywords: [
      "waist-to-hip ratio calculator",
      "WHR calculator",
      "central obesity",
      "abdominal fat",
      "cardiovascular risk",
      "waist circumference",
      "body fat distribution",
    ],
    inputs: {
      gender: { label: "Biological sex", help: "Sex determines the WHO risk category thresholds." },
      unit: { label: "Unit system", help: "Choose metric (cm) or imperial (inches)." },
      waist: { label: "Taille circumference", help: "Measure at the narrowest point of the torso, usually just above the navel." },
      hip: { label: "Hip circumference", help: "Measure at the widest point of the hips and buttocks." },
    },
    outputs: {
      whr: { label: "Taille-to-hip ratio (WHR)", help: "Taille circumference divided by hip circumference." },
      riskCategory: { label: "Health risk category", help: "WHO classification based on your WHR and sex." },
      waistCm: { label: "Taille (cm)", help: "Your waist measurement converteered to centimetres for threshold comparison." },
      centralObesityRisk: { label: "Central obesity risk", help: "Whether your waist circumference exceeds the WHO threshold for increased health risk." },
    },
    options: {
      gender: { male: "Male", female: "Female" },
      unit: { metric: "Metric (cm)", imperial: "Imperial (inches)" },
    },
    errors: {
      invalidMeasurement: "Taille and hip measurements must be positive nummers.",
    },
    faq: [
      {
        q: "What is the waist-to-hip ratio?",
        a: "The waist-to-hip ratio (WHR) is a simple measure of body fat distribution. It divides your waist circumference by your hip circumference. A higher WHR indicates more fat stored around the abdomen, which is associated with higher cardiovascular and metabolic risk.",
      },
      {
        q: "What are the WHO risk category thresholds?",
        a: "According to the World Health Organization: For men, WHR <0.90 is low risk, 0.90–0.99 is moderate risk, and ≥1.00 is high risk. For women, WHR <0.80 is low risk, 0.80–0.85 is moderate risk, and ≥0.86 is high risk.",
      },
      {
        q: "How do I measure my waist correctly?",
        a: "Stand relaxed (not sucking in your stomach). Measure the narrowest point of your waist, usually about 2 cm above your navel. Keep the tape measure parallel to the floor and snug but not tight. Take the measurement at the end of a normal breath out.",
      },
      {
        q: "How do I measure my hips correctly?",
        a: "Stand with feet together. Measure the widest part of your hips and buttocks, keeping the tape measure horizontal and parallel to the floor. This is typically at the level of the greater trochanters (the bony protrusions on the sides of your hips).",
      },
      {
        q: "Is WHR better than BMI for assessing health risk?",
        a: "WHR and BMI measure different things. BMI measures total body weight relative to hoogte, while WHR measures fat distribution. Rezoek suggests WHR is a better predictor of cardiovascular risk than BMI because abdominal fat (visceral fat) is metabolically more dangerous than subcutaneous fat. Using both measures together gives a more complete picture.",
      },
    ],
  },

  pl: {
    title: "Talia-to-Hip Stosunek Kalkulator",
    short: "Oblicz your waist-to-hip ratio and assess your metabolic health risk.",
    description:
      "Darmowy waist-to-hip ratio kalkulator based on WHO guidelines. Enter your waist and hip measurements to get your WHR and cardiovascular risk category.",
    keywords: [
      "waist-to-hip ratio kalkulator",
      "WHR kalkulator",
      "central obesity",
      "abdominal fat",
      "cardiovascular risk",
      "waist circumference",
      "body fat distribution",
    ],
    inputs: {
      gender: { label: "Biological sex", help: "Sex determines the WHO risk category thresholds." },
      unit: { label: "Unit system", help: "Choose metric (cm) or imperial (inches)." },
      waist: { label: "Talia circumference", help: "Measure at the narrowest point of the torso, usually just above the navel." },
      hip: { label: "Hip circumference", help: "Measure at the widest point of the hips and buttocks." },
    },
    outputs: {
      whr: { label: "Talia-to-hip ratio (WHR)", help: "Talia circumference divided by hip circumference." },
      riskCategory: { label: "Health risk category", help: "WHO classification based on your WHR and sex." },
      waistCm: { label: "Talia (cm)", help: "Your waist measurement konwertujed to centimetres for threshold comparison." },
      centralObesityRisk: { label: "Central obesity risk", help: "Whether your waist circumference exceeds the WHO threshold for increased health risk." },
    },
    options: {
      gender: { male: "Male", female: "Female" },
      unit: { metric: "Metric (cm)", imperial: "Imperial (inches)" },
    },
    errors: {
      invalidMeasurement: "Talia and hip measurements must be positive liczbas.",
    },
    faq: [
      {
        q: "What is the waist-to-hip ratio?",
        a: "The waist-to-hip ratio (WHR) is a simple measure of body fat distribution. It divides your waist circumference by your hip circumference. A higher WHR indicates more fat stored around the abdomen, which is associated with higher cardiovascular and metabolic risk.",
      },
      {
        q: "What are the WHO risk category thresholds?",
        a: "According to the World Health Organization: For men, WHR <0.90 is low risk, 0.90–0.99 is moderate risk, and ≥1.00 is high risk. For women, WHR <0.80 is low risk, 0.80–0.85 is moderate risk, and ≥0.86 is high risk.",
      },
      {
        q: "How do I measure my waist correctly?",
        a: "Stand relaxed (not sucking in your stomach). Measure the narrowest point of your waist, usually about 2 cm above your navel. Keep the tape measure parallel to the floor and snug but not tight. Take the measurement at the end of a normal breath out.",
      },
      {
        q: "How do I measure my hips correctly?",
        a: "Stand with feet together. Measure the widest part of your hips and buttocks, keeping the tape measure horizontal and parallel to the floor. This is typically at the level of the greater trochanters (the bony protrusions on the sides of your hips).",
      },
      {
        q: "Is WHR better than BMI for assessing health risk?",
        a: "WHR and BMI measure different things. BMI measures total body weight relative to wysokość, while WHR measures fat distribution. Reszukaj suggests WHR is a better predictor of cardiovascular risk than BMI because abdominal fat (visceral fat) is metabolically more dangerous than subcutaneous fat. Using both measures together gives a more complete picture.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Relação Cintura-Quadril",
    short: "Calcule a relação cintura-quadril e o risco cardiovascular associado.",
    description:
      "Calculadora gratuita de relação cintura-quadril (RCQ). Estime o risco cardiovascular com base na distribuição da gordura abdominal.",
    keywords: ["relação cintura quadril", "RCQ", "gordura abdominal", "risco cardiovascular", "obesidade abdominal"],
    inputs: {
      gender: { label: "Biological sex", help: "Sex determines the WHO risk category thresholds." },
      unit: { label: "Unit system", help: "Choose metric (cm) or imperial (inches)." },
      waist: { label: "Waist circumference", help: "Measure at the narrowest point of the torso, usually just above the navel." },
      hip: { label: "Hip circumference", help: "Measure at the widest point of the hips and buttocks." },
    },
    outputs: {
      whr: { label: "Waist-to-hip ratio (WHR)", help: "Waist circumference divided by hip circumference." },
      riskCategory: { label: "Health risk category", help: "WHO classification based on your WHR and sex." },
      waistCm: { label: "Waist (cm)", help: "Your waist measurement converted to centimetres for threshold comparison." },
      centralObesityRisk: { label: "Central obesity risk", help: "Whether your waist circumference exceeds the WHO threshold for increased health risk." },
    },
    options: {
      gender: { male: "Male", female: "Female" },
      unit: { metric: "Metric (cm)", imperial: "Imperial (inches)" },
    },
    errors: {
      invalidMeasurement: "Waist and hip measurements must be positive numbers.",
    },
    faq: [
      {
        q: "What is the waist-to-hip ratio?",
        a: "The waist-to-hip ratio (WHR) is a simple measure of body fat distribution. It divides your waist circumference by your hip circumference. A higher WHR indicates more fat stored around the abdomen, which is associated with higher cardiovascular and metabolic risk.",
      },
      {
        q: "What are the WHO risk category thresholds?",
        a: "According to the World Health Organization: For men, WHR <0.90 is low risk, 0.90–0.99 is moderate risk, and ≥1.00 is high risk. For women, WHR <0.80 is low risk, 0.80–0.85 is moderate risk, and ≥0.86 is high risk.",
      },
      {
        q: "How do I measure my waist correctly?",
        a: "Stand relaxed (not sucking in your stomach). Measure the narrowest point of your waist, usually about 2 cm above your navel. Keep the tape measure parallel to the floor and snug but not tight. Take the measurement at the end of a normal breath out.",
      },
      {
        q: "How do I measure my hips correctly?",
        a: "Stand with feet together. Measure the widest part of your hips and buttocks, keeping the tape measure horizontal and parallel to the floor. This is typically at the level of the greater trochanters (the bony protrusions on the sides of your hips).",
      },
      {
        q: "Is WHR better than BMI for assessing health risk?",
        a: "WHR and BMI measure different things. BMI measures total body weight relative to height, while WHR measures fat distribution. Research suggests WHR is a better predictor of cardiovascular risk than BMI because abdominal fat (visceral fat) is metabolically more dangerous than subcutaneous fat. Using both measures together gives a more complete picture.",
      },
    ],
  },
  id: {
    title: "Kalkulator Rasio Pinggang-Pinggul",
    short: "Hitung rasio pinggang-pinggul dan risiko kardiovaskular yang terkait.",
    description:
      "Kalkulator rasio pinggang-pinggul (RPP) gratis. Estimasi risiko kardiovaskular berdasarkan distribusi lemak perut.",
    keywords: ["rasio pinggang pinggul", "WHR", "lemak perut", "risiko jantung", "obesitas sentral"],
    inputs: {
      gender: { label: "Biological sex", help: "Sex determines the WHO risk category thresholds." },
      unit: { label: "Unit system", help: "Choose metric (cm) or imperial (inches)." },
      waist: { label: "Waist circumference", help: "Measure at the narrowest point of the torso, usually just above the navel." },
      hip: { label: "Hip circumference", help: "Measure at the widest point of the hips and buttocks." },
    },
    outputs: {
      whr: { label: "Waist-to-hip ratio (WHR)", help: "Waist circumference divided by hip circumference." },
      riskCategory: { label: "Health risk category", help: "WHO classification based on your WHR and sex." },
      waistCm: { label: "Waist (cm)", help: "Your waist measurement converted to centimetres for threshold comparison." },
      centralObesityRisk: { label: "Central obesity risk", help: "Whether your waist circumference exceeds the WHO threshold for increased health risk." },
    },
    options: {
      gender: { male: "Male", female: "Female" },
      unit: { metric: "Metric (cm)", imperial: "Imperial (inches)" },
    },
    errors: {
      invalidMeasurement: "Waist and hip measurements must be positive numbers.",
    },
    faq: [
      {
        q: "What is the waist-to-hip ratio?",
        a: "The waist-to-hip ratio (WHR) is a simple measure of body fat distribution. It divides your waist circumference by your hip circumference. A higher WHR indicates more fat stored around the abdomen, which is associated with higher cardiovascular and metabolic risk.",
      },
      {
        q: "What are the WHO risk category thresholds?",
        a: "According to the World Health Organization: For men, WHR <0.90 is low risk, 0.90–0.99 is moderate risk, and ≥1.00 is high risk. For women, WHR <0.80 is low risk, 0.80–0.85 is moderate risk, and ≥0.86 is high risk.",
      },
      {
        q: "How do I measure my waist correctly?",
        a: "Stand relaxed (not sucking in your stomach). Measure the narrowest point of your waist, usually about 2 cm above your navel. Keep the tape measure parallel to the floor and snug but not tight. Take the measurement at the end of a normal breath out.",
      },
      {
        q: "How do I measure my hips correctly?",
        a: "Stand with feet together. Measure the widest part of your hips and buttocks, keeping the tape measure horizontal and parallel to the floor. This is typically at the level of the greater trochanters (the bony protrusions on the sides of your hips).",
      },
      {
        q: "Is WHR better than BMI for assessing health risk?",
        a: "WHR and BMI measure different things. BMI measures total body weight relative to height, while WHR measures fat distribution. Research suggests WHR is a better predictor of cardiovascular risk than BMI because abdominal fat (visceral fat) is metabolically more dangerous than subcutaneous fat. Using both measures together gives a more complete picture.",
      },
    ],
  },


  tr: {
    title: "Bel-Kalça Oranı Hesaplayıcı",
    short: "Bel-kalça oranınızı hesaplayın ve metabolik sağlık riskinizi değerlendirin.",
    description:
      "WHO kılavuzlarına dayalı ücretsiz bel-kalça oranı hesaplayıcı. Bel ve kalça ölçümlerinizi girerek BKO ve kardiyovasküler risk kategorinizi öğrenin.",
    keywords: [
      "bel kalça oranı hesaplayıcı",
      "BKO hesaplama",
      "karın yağlanması",
      "santral obezite",
      "kardiyovasküler risk",
      "bel çevresi",
      "yağ dağılımı",
    ],
    inputs: {
      gender: { label: "Biyolojik cinsiyet", help: "Cinsiyet, WHO risk kategorisi eşiklerini belirler." },
      unit: { label: "Birim sistemi", help: "Metrik (cm) veya İngiliz birimi (inç) seçin." },
      waist: { label: "Bel çevresi", help: "Göbeğin hemen üzerindeki en dar noktadan ölçün." },
      hip: { label: "Kalça çevresi", help: "Kalça ve kalçanın en geniş noktasından ölçün." },
    },
    outputs: {
      whr: { label: "Bel-kalça oranı (BKO)", help: "Bel çevresi kalça çevresine bölünür." },
      riskCategory: { label: "Sağlık riski kategorisi", help: "BKO ve cinsiyetinize göre WHO sınıflandırması." },
      waistCm: { label: "Bel (cm)", help: "Eşik değer karşılaştırması için santimetreye dönüştürülmüş bel ölçümü." },
      centralObesityRisk: { label: "Santral obezite riski", help: "Bel çevrenizin artmış sağlık riski için WHO eşiğini aşıp aşmadığı." },
    },
    options: {
      gender: { male: "Erkek", female: "Kadın" },
      unit: { metric: "Metrik (cm)", imperial: "İngiliz birimi (inç)" },
    },
    errors: {
      invalidMeasurement: "Bel ve kalça ölçümleri pozitif sayılar olmalıdır.",
    },
    faq: [
      {
        q: "Bel-kalça oranı nedir?",
        a: "Bel-kalça oranı (BKO), bel çevresinin kalça çevresine bölünmesiyle elde edilen ve vücut yağ dağılımını ölçen basit bir göstergedir. Yüksek BKO, karın bölgesinde daha fazla yağ birikimine işaret eder ve kardiyovasküler ile metabolik riskle ilişkilidir.",
      },
      {
        q: "WHO risk kategorisi eşikleri nelerdir?",
        a: "Erkekler için: BKO <0,90 düşük risk, 0,90–0,99 orta risk, ≥1,00 yüksek risk. Kadınlar için: BKO <0,80 düşük risk, 0,80–0,85 orta risk, ≥0,86 yüksek riskdir.",
      },
      {
        q: "Bel nasıl doğru ölçülür?",
        a: "Rahat durumda ayakta durun (karnınızı içeri çekmeyin). Bel ölçüsünü genellikle göbeğin yaklaşık 2 cm üzerindeki en dar noktadan alın. Mezurayı yere paralel tutun ve sıkmadan ancak gevşek bırakmadan sarın. Ölçümü normal bir nefes verişinin sonunda alın.",
      },
      {
        q: "BKO, kardiyovasküler riski ölçmede VKİ'den daha mı iyi?",
        a: "Araştırmalar, BKO'nun VKİ'ye kıyasla kardiyovasküler riski tahmin etmede daha güçlü bir gösterge olduğunu ortaya koymaktadır; zira karın yağı (visseral yağ) metabolik açıdan cilt altı yağından çok daha tehlikelidir. Her iki ölçümü birlikte kullanmak daha kapsamlı bir değerlendirme sağlar.",
      },
    ],
  },

  de: {
    title: "Taille-Hüfte-Verhältnis-Rechner",
    short: "Berechnen Sie Ihr Taille-Hüfte-Verhältnis und bewerten Sie Ihr metabolisches Gesundheitsrisiko.",
    description:
      "Kostenloser WHR-Rechner nach WHO-Richtlinien. Geben Sie Ihren Taillen- und Hüftumfang ein, um Ihr THV und Ihre kardiovaskuläre Risikokategorie zu ermitteln.",
    keywords: [
      "Taille-Hüfte-Verhältnis Rechner",
      "WHR Rechner",
      "Bauchumfang",
      "zentrale Adipositas",
      "kardiovaskuläres Risiko",
      "Taillenumfang",
      "Fettverteilung",
    ],
    inputs: {
      gender: { label: "Biologisches Geschlecht", help: "Das Geschlecht bestimmt die WHO-Risikoschwellen." },
      unit: { label: "Einheitensystem", help: "Metrisch (cm) oder imperial (Zoll) wählen." },
      waist: { label: "Taillenumfang", help: "An der schmalsten Stelle des Rumpfes messen, meist knapp oberhalb des Nabels." },
      hip: { label: "Hüftumfang", help: "An der breitesten Stelle von Hüfte und Gesäß messen." },
    },
    outputs: {
      whr: { label: "Taille-Hüfte-Verhältnis (THV)", help: "Taillenumfang geteilt durch Hüftumfang." },
      riskCategory: { label: "Gesundheitliche Risikokategorie", help: "WHO-Klassifikation basierend auf Ihrem THV und Geschlecht." },
      waistCm: { label: "Taille (cm)", help: "Ihr Taillenmaß in Zentimetern für den Schwellenwertvergleich." },
      centralObesityRisk: { label: "Risiko zentraler Adipositas", help: "Ob Ihr Taillenumfang den WHO-Schwellenwert für erhöhtes Gesundheitsrisiko überschreitet." },
    },
    options: {
      gender: { male: "Männlich", female: "Weiblich" },
      unit: { metric: "Metrisch (cm)", imperial: "Imperial (Zoll)" },
    },
    errors: { invalidMeasurement: "Taillen- und Hüftumfang müssen positive Zahlen sein." },
    faq: [
      {
        q: "Was ist das Taille-Hüfte-Verhältnis?",
        a: "Das THV teilt den Taillenumfang durch den Hüftumfang. Ein höherer Wert zeigt mehr Bauchfett an, was mit erhöhtem Herz-Kreislauf- und metabolischen Risiko verbunden ist.",
      },
      {
        q: "Wie messe ich den Taillenumfang korrekt?",
        a: "Stehen Sie entspannt (Bauch nicht einziehen). Messen Sie an der schmalsten Stelle, ca. 2 cm oberhalb des Nabels. Halten Sie das Maßband parallel zum Boden, straff aber nicht einschneidend. Messen Sie am Ende eines normalen Ausatmens.",
      },
      {
        q: "Was sind die WHO-Risikokategorien?",
        a: "Für Männer: THV <0,90 = niedriges Risiko, 0,90–0,99 = mittleres Risiko, ≥1,00 = hohes Risiko. Für Frauen: THV <0,80 = niedriges Risiko, 0,80–0,85 = mittleres Risiko, ≥0,86 = hohes Risiko.",
      },
    ],
  },

  fr: {
    title: "Calculateur du rapport taille-hanches",
    short: "Calculez votre rapport taille-hanches et évaluez votre risque métabolique.",
    description:
      "Calculateur gratuit du rapport taille-hanches selon les directives de l'OMS. Saisissez vos mesures de taille et de hanches pour obtenir votre RTH et votre catégorie de risque cardiovasculaire.",
    keywords: [
      "calculateur rapport taille-hanches",
      "RTH calculateur",
      "obésité abdominale",
      "graisse abdominale",
      "risque cardiovasculaire",
      "tour de taille",
      "distribution des graisses",
    ],
    inputs: {
      gender: { label: "Sexe biologique", help: "Le sexe détermine les seuils de risque de l'OMS." },
      unit: { label: "Système d'unités", help: "Choisissez métrique (cm) ou impérial (pouces)." },
      waist: { label: "Tour de taille", help: "Mesurez au point le plus étroit du tronc, généralement juste au-dessus du nombril." },
      hip: { label: "Tour de hanches", help: "Mesurez au point le plus large des hanches et des fesses." },
    },
    outputs: {
      whr: { label: "Rapport taille-hanches (RTH)", help: "Tour de taille divisé par tour de hanches." },
      riskCategory: { label: "Catégorie de risque", help: "Classification OMS basée sur votre RTH et votre sexe." },
      waistCm: { label: "Tour de taille (cm)", help: "Mesure de votre taille en centimètres pour la comparaison avec les seuils." },
      centralObesityRisk: { label: "Risque d'obésité centrale", help: "Indique si votre tour de taille dépasse le seuil de l'OMS pour un risque accru." },
    },
    options: {
      gender: { male: "Homme", female: "Femme" },
      unit: { metric: "Métrique (cm)", imperial: "Impérial (pouces)" },
    },
    errors: { invalidMeasurement: "Les mesures de taille et de hanches doivent être des nombres positifs." },
    faq: [
      {
        q: "Qu'est-ce que le rapport taille-hanches ?",
        a: "Le RTH divise le tour de taille par le tour de hanches. Un RTH plus élevé indique davantage de graisse abdominale, associée à un risque cardiovasculaire et métabolique accru.",
      },
      {
        q: "Quelles sont les catégories de risque de l'OMS ?",
        a: "Pour les hommes : RTH <0,90 = faible risque, 0,90–0,99 = risque modéré, ≥1,00 = risque élevé. Pour les femmes : RTH <0,80 = faible risque, 0,80–0,85 = risque modéré, ≥0,86 = risque élevé.",
      },
      {
        q: "Comment mesurer son tour de taille correctement ?",
        a: "Tenez-vous debout détendu(e). Mesurez au point le plus étroit, environ 2 cm au-dessus du nombril. Gardez le mètre ruban horizontal et bien ajusté, sans serrer. Prenez la mesure après une expiration normale.",
      },
    ],
  },

  es: {
    title: "Calculadora de la relación cintura-cadera",
    short: "Calcula tu relación cintura-cadera y evalúa tu riesgo metabólico.",
    description:
      "Calculadora gratuita de la relación cintura-cadera según las directrices de la OMS. Introduce tus medidas de cintura y cadera para obtener tu RCC y categoría de riesgo cardiovascular.",
    keywords: [
      "calculadora relación cintura-cadera",
      "RCC calculadora",
      "obesidad central",
      "grasa abdominal",
      "riesgo cardiovascular",
      "perímetro de cintura",
      "distribución de grasa",
    ],
    inputs: {
      gender: { label: "Sexo biológico", help: "El sexo determina los umbrales de riesgo de la OMS." },
      unit: { label: "Sistema de unidades", help: "Elige métrico (cm) o imperial (pulgadas)." },
      waist: { label: "Perímetro de cintura", help: "Mide en el punto más estrecho del torso, generalmente justo por encima del ombligo." },
      hip: { label: "Perímetro de cadera", help: "Mide en el punto más ancho de las caderas y los glúteos." },
    },
    outputs: {
      whr: { label: "Relación cintura-cadera (RCC)", help: "Perímetro de cintura dividido entre perímetro de cadera." },
      riskCategory: { label: "Categoría de riesgo", help: "Clasificación OMS basada en tu RCC y sexo." },
      waistCm: { label: "Cintura (cm)", help: "Tu medida de cintura en centímetros para comparar con los umbrales." },
      centralObesityRisk: { label: "Riesgo de obesidad central", help: "Si tu perímetro de cintura supera el umbral OMS para riesgo aumentado." },
    },
    options: {
      gender: { male: "Hombre", female: "Mujer" },
      unit: { metric: "Métrico (cm)", imperial: "Imperial (pulgadas)" },
    },
    errors: { invalidMeasurement: "Los perímetros de cintura y cadera deben ser números positivos." },
    faq: [
      {
        q: "¿Qué es la relación cintura-cadera?",
        a: "La RCC divide el perímetro de cintura entre el de cadera. Un valor más alto indica mayor acumulación de grasa abdominal, asociada con mayor riesgo cardiovascular y metabólico.",
      },
      {
        q: "¿Cuáles son las categorías de riesgo de la OMS?",
        a: "Para hombres: RCC <0,90 = bajo riesgo, 0,90–0,99 = riesgo moderado, ≥1,00 = riesgo alto. Para mujeres: RCC <0,80 = bajo riesgo, 0,80–0,85 = riesgo moderado, ≥0,86 = riesgo alto.",
      },
      {
        q: "¿Cómo mido correctamente la cintura?",
        a: "De pie relajado (sin meter el abdomen). Mide en el punto más estrecho, generalmente 2 cm por encima del ombligo. Mantén la cinta métrica horizontal y ajustada sin apretar. Toma la medida al final de una exhalación normal.",
      },
    ],
  },

  it: {
    title: "Calcolatore del rapporto vita-fianchi",
    short: "Calcola il tuo rapporto vita-fianchi e valuta il rischio per la salute metabolica.",
    description:
      "Calcolatore gratuito del rapporto vita-fianchi secondo le linee guida OMS. Inserisci le misure di vita e fianchi per ottenere il tuo RVF e la categoria di rischio cardiovascolare.",
    keywords: [
      "calcolatore rapporto vita-fianchi",
      "RVF calcolatore",
      "obesità addominale",
      "grasso addominale",
      "rischio cardiovascolare",
      "circonferenza vita",
      "distribuzione del grasso",
    ],
    inputs: {
      gender: { label: "Sesso biologico", help: "Il sesso determina le soglie di rischio OMS." },
      unit: { label: "Sistema di unità", help: "Scegli tra metrico (cm) o imperiale (pollici)." },
      waist: { label: "Circonferenza vita", help: "Misura al punto più stretto del tronco, solitamente appena sopra l'ombelico." },
      hip: { label: "Circonferenza fianchi", help: "Misura al punto più largo di fianchi e glutei." },
    },
    outputs: {
      whr: { label: "Rapporto vita-fianchi (RVF)", help: "Circonferenza vita divisa per la circonferenza fianchi." },
      riskCategory: { label: "Categoria di rischio", help: "Classificazione OMS in base al tuo RVF e sesso." },
      waistCm: { label: "Vita (cm)", help: "La tua misura della vita in centimetri per il confronto con le soglie." },
      centralObesityRisk: { label: "Rischio di obesità centrale", help: "Se la tua circonferenza vita supera la soglia OMS per un rischio aumentato." },
    },
    options: {
      gender: { male: "Maschio", female: "Femmina" },
      unit: { metric: "Metrico (cm)", imperial: "Imperiale (pollici)" },
    },
    errors: { invalidMeasurement: "Le misure di vita e fianchi devono essere numeri positivi." },
    faq: [
      {
        q: "Cos'è il rapporto vita-fianchi?",
        a: "Il RVF divide la circonferenza vita per quella dei fianchi. Un valore più alto indica maggiore accumulo di grasso addominale, associato a rischio cardiovascolare e metabolico più elevato.",
      },
      {
        q: "Quali sono le categorie di rischio OMS?",
        a: "Per gli uomini: RVF <0,90 = basso rischio, 0,90–0,99 = rischio moderato, ≥1,00 = alto rischio. Per le donne: RVF <0,80 = basso rischio, 0,80–0,85 = rischio moderato, ≥0,86 = alto rischio.",
      },
      {
        q: "Come si misura correttamente la vita?",
        a: "Stare in piedi rilassati (senza stringere l'addome). Misurare al punto più stretto, circa 2 cm sopra l'ombelico. Tenere il metro orizzontale e ben aderente ma non stretto. Prendere la misura alla fine di una normale espirazione.",
      },
    ],
  },

  ar: {
    title: "حاسبة نسبة الخصر إلى الورك",
    short: "احسب نسبة خصرك إلى وركك وقيّم خطر صحتك الأيضية.",
    description:
      "حاسبة مجانية لنسبة الخصر إلى الورك وفق إرشادات منظمة الصحة العالمية. أدخل قياسات خصرك ووركك للحصول على النسبة وتصنيف خطر أمراض القلب والأوعية الدموية.",
    keywords: [
      "حاسبة نسبة الخصر إلى الورك",
      "نسبة الخصر والورك",
      "السمنة المركزية",
      "دهون البطن",
      "خطر أمراض القلب",
      "محيط الخصر",
      "توزيع الدهون",
    ],
    inputs: {
      gender: { label: "الجنس البيولوجي", help: "يحدد الجنس عتبات خطر منظمة الصحة العالمية." },
      unit: { label: "نظام الوحدات", help: "اختر المتري (سم) أو الإمبراطوري (بوصة)." },
      waist: { label: "محيط الخصر", help: "قس عند أضيق نقطة في الجذع، عادةً فوق السرة مباشرةً." },
      hip: { label: "محيط الورك", help: "قس عند أعرض نقطة في الوركين والأرداف." },
    },
    outputs: {
      whr: { label: "نسبة الخصر إلى الورك", help: "محيط الخصر مقسومًا على محيط الورك." },
      riskCategory: { label: "فئة خطر الصحة", help: "تصنيف منظمة الصحة العالمية بناءً على نسبتك وجنسك." },
      waistCm: { label: "الخصر (سم)", help: "قياس خصرك بالسنتيمتر للمقارنة مع العتبات." },
      centralObesityRisk: { label: "خطر السمنة المركزية", help: "ما إذا كان محيط خصرك يتجاوز عتبة منظمة الصحة العالمية لزيادة المخاطر الصحية." },
    },
    options: {
      gender: { male: "ذكر", female: "أنثى" },
      unit: { metric: "متري (سم)", imperial: "إمبراطوري (بوصة)" },
    },
    errors: { invalidMeasurement: "يجب أن تكون قياسات الخصر والورك أرقامًا موجبة." },
    faq: [
      {
        q: "ما هي نسبة الخصر إلى الورك؟",
        a: "تقسم النسبة محيط الخصر على محيط الورك. تشير النسبة الأعلى إلى تراكم أكبر للدهون في منطقة البطن، مما يرتبط بخطر أعلى لأمراض القلب والأوعية الدموية وأمراض الأيض.",
      },
      {
        q: "ما هي فئات خطر منظمة الصحة العالمية؟",
        a: "للذكور: النسبة <0.90 = خطر منخفض، 0.90–0.99 = خطر متوسط، ≥1.00 = خطر مرتفع. للإناث: النسبة <0.80 = خطر منخفض، 0.80–0.85 = خطر متوسط، ≥0.86 = خطر مرتفع.",
      },
      {
        q: "كيف أقيس محيط الخصر بشكل صحيح؟",
        a: "قف مرتاحًا دون شد البطن. قس عند أضيق نقطة، عادةً على ارتفاع 2 سم فوق السرة. أبقِ شريط القياس موازيًا للأرض وملاصقًا دون ضغط. خذ القياس عند نهاية زفير طبيعي.",
      },
    ],
  },

  ru: {
    title: "Калькулятор отношения талии к бёдрам",
    short: "Рассчитайте отношение талии к бёдрам и оцените риск для метаболического здоровья.",
    description:
      "Бесплатный калькулятор ОТБ по рекомендациям ВОЗ. Введите объём талии и бёдер для получения ОТБ и категории сердечно-сосудистого риска.",
    keywords: [
      "калькулятор отношение талии к бёдрам",
      "ОТБ калькулятор",
      "абдоминальное ожирение",
      "жир на животе",
      "сердечно-сосудистый риск",
      "обхват талии",
      "распределение жира",
    ],
    inputs: {
      gender: { label: "Биологический пол", help: "Пол определяет пороговые значения риска по ВОЗ." },
      unit: { label: "Система единиц", help: "Выберите метрическую (см) или имперскую (дюймы) систему." },
      waist: { label: "Объём талии", help: "Измерьте в самом узком месте туловища, обычно чуть выше пупка." },
      hip: { label: "Объём бёдер", help: "Измерьте в самом широком месте бёдер и ягодиц." },
    },
    outputs: {
      whr: { label: "Отношение талии к бёдрам (ОТБ)", help: "Объём талии делится на объём бёдер." },
      riskCategory: { label: "Категория риска для здоровья", help: "Классификация ВОЗ на основе вашего ОТБ и пола." },
      waistCm: { label: "Талия (см)", help: "Объём талии в сантиметрах для сравнения с пороговыми значениями." },
      centralObesityRisk: { label: "Риск центрального ожирения", help: "Превышает ли объём вашей талии порог ВОЗ для повышенного риска для здоровья." },
    },
    options: {
      gender: { male: "Мужской", female: "Женский" },
      unit: { metric: "Метрическая (см)", imperial: "Имперская (дюймы)" },
    },
    errors: { invalidMeasurement: "Объём талии и бёдер должны быть положительными числами." },
    faq: [
      {
        q: "Что такое отношение талии к бёдрам?",
        a: "ОТБ — объём талии, разделённый на объём бёдер. Более высокое значение указывает на большее накопление жира в области живота, что связано с повышенным сердечно-сосудистым и метаболическим риском.",
      },
      {
        q: "Каковы категории риска ВОЗ?",
        a: "Для мужчин: ОТБ <0,90 — низкий риск, 0,90–0,99 — умеренный, ≥1,00 — высокий. Для женщин: ОТБ <0,80 — низкий риск, 0,80–0,85 — умеренный, ≥0,86 — высокий.",
      },
      {
        q: "Как правильно измерить талию?",
        a: "Стоя в расслабленной позе (не втягивая живот). Измерьте в самом узком месте, примерно на 2 см выше пупка. Держите сантиметровую ленту горизонтально, плотно, но без сдавливания. Измерение производится в конце нормального выдоха.",
      },
    ],
  },

  zh: {
    title: "腰臀比计算器",
    short: "计算您的腰臀比，评估代谢健康风险。",
    description:
      "基于世卫组织指南的免费腰臀比计算器。输入腰围和臀围，获取您的WHR及心血管风险分类。",
    keywords: [
      "腰臀比计算器",
      "WHR计算器",
      "中心性肥胖",
      "腹部脂肪",
      "心血管风险",
      "腰围",
      "脂肪分布",
    ],
    inputs: {
      gender: { label: "生理性别", help: "性别决定世卫组织风险分类阈值。" },
      unit: { label: "单位制", help: "选择公制（厘米）或英制（英寸）。" },
      waist: { label: "腰围", help: "在躯干最窄处测量，通常位于肚脐稍上方。" },
      hip: { label: "臀围", help: "在臀部最宽处测量。" },
    },
    outputs: {
      whr: { label: "腰臀比（WHR）", help: "腰围除以臀围。" },
      riskCategory: { label: "健康风险分类", help: "基于您的WHR和性别的世卫组织分类。" },
      waistCm: { label: "腰围（厘米）", help: "您的腰围换算为厘米，用于与阈值比较。" },
      centralObesityRisk: { label: "中心性肥胖风险", help: "您的腰围是否超过世卫组织的健康风险增加阈值。" },
    },
    options: {
      gender: { male: "男", female: "女" },
      unit: { metric: "公制（厘米）", imperial: "英制（英寸）" },
    },
    errors: { invalidMeasurement: "腰围和臀围必须为正数。" },
    faq: [
      {
        q: "什么是腰臀比？",
        a: "腰臀比（WHR）= 腰围 ÷ 臀围。比值越高表明腹部脂肪越多，与更高的心血管和代谢风险相关。",
      },
      {
        q: "世卫组织的风险分类是什么？",
        a: "男性：WHR <0.90 = 低风险，0.90–0.99 = 中等风险，≥1.00 = 高风险。女性：WHR <0.80 = 低风险，0.80–0.85 = 中等风险，≥0.86 = 高风险。",
      },
      {
        q: "如何正确测量腰围？",
        a: "自然站立（不要收腹）。在躯干最窄处测量，通常在肚脐上方约2厘米处。保持卷尺水平，贴合但不勒紧。在正常呼气末测量。",
      },
    ],
  },

  ja: {
    title: "ウエスト・ヒップ比計算機",
    short: "ウエスト・ヒップ比を計算し、代謝上の健康リスクを評価します。",
    description:
      "WHO基準に基づく無料のウエスト・ヒップ比（WHR）計算機。ウエストとヒップの周囲を入力してWHRと心血管リスクカテゴリを確認できます。",
    keywords: [
      "ウエスト・ヒップ比計算機",
      "WHR計算機",
      "内臓脂肪型肥満",
      "腹部脂肪",
      "心血管リスク",
      "ウエスト周囲",
      "体脂肪分布",
    ],
    inputs: {
      gender: { label: "生物学的性別", help: "性別はWHOリスク分類の閾値を決定します。" },
      unit: { label: "単位系", help: "メートル法（cm）またはヤード・ポンド法（インチ）を選択。" },
      waist: { label: "ウエスト周囲", help: "胴体の最も細い部分（通常は臍のやや上）で測定します。" },
      hip: { label: "ヒップ周囲", help: "腰とお尻の最も広い部分で測定します。" },
    },
    outputs: {
      whr: { label: "ウエスト・ヒップ比（WHR）", help: "ウエスト周囲をヒップ周囲で割った値。" },
      riskCategory: { label: "健康リスク分類", help: "WHRと性別に基づくWHO分類。" },
      waistCm: { label: "ウエスト（cm）", help: "閾値との比較のためのウエスト測定値（cm）。" },
      centralObesityRisk: { label: "内臓脂肪型肥満リスク", help: "ウエスト周囲がWHOのリスク増加閾値を超えているかどうか。" },
    },
    options: {
      gender: { male: "男性", female: "女性" },
      unit: { metric: "メートル法（cm）", imperial: "ヤード・ポンド法（インチ）" },
    },
    errors: { invalidMeasurement: "ウエストとヒップの測定値は正の数である必要があります。" },
    faq: [
      {
        q: "ウエスト・ヒップ比とは？",
        a: "WHRはウエスト周囲をヒップ周囲で割った値です。高いWHRは腹部脂肪が多いことを示し、心血管・代謝リスクの増加と関連します。",
      },
      {
        q: "WHOのリスク分類は？",
        a: "男性：WHR <0.90 = 低リスク、0.90–0.99 = 中程度、≥1.00 = 高リスク。女性：WHR <0.80 = 低リスク、0.80–0.85 = 中程度、≥0.86 = 高リスク。",
      },
      {
        q: "ウエストはどう正確に測りますか？",
        a: "リラックスした姿勢で立ちます（お腹を引っ込めない）。臍の約2cm上の最も細い箇所で測定。メジャーを水平に保ち、食い込まない程度に密着させ、普通に息を吐いた後に測ります。",
      },
    ],
  },

  ko: {
    title: "허리-엉덩이 비율 계산기",
    short: "허리-엉덩이 비율을 계산하고 대사 건강 위험을 평가하세요.",
    description:
      "WHO 지침에 기반한 무료 허리-엉덩이 비율(WHR) 계산기. 허리와 엉덩이 둘레를 입력하면 WHR과 심혈관 위험 분류를 확인할 수 있습니다.",
    keywords: [
      "허리엉덩이비율 계산기",
      "WHR 계산기",
      "복부 비만",
      "내장 지방",
      "심혈관 위험",
      "허리 둘레",
      "체지방 분포",
    ],
    inputs: {
      gender: { label: "생물학적 성별", help: "성별은 WHO 위험 분류 기준값을 결정합니다." },
      unit: { label: "단위 시스템", help: "미터법(cm) 또는 야드파운드법(인치)을 선택하세요." },
      waist: { label: "허리 둘레", help: "배꼽 바로 위 가장 좁은 부분에서 측정하세요." },
      hip: { label: "엉덩이 둘레", help: "엉덩이의 가장 넓은 부분에서 측정하세요." },
    },
    outputs: {
      whr: { label: "허리-엉덩이 비율(WHR)", help: "허리 둘레를 엉덩이 둘레로 나눈 값." },
      riskCategory: { label: "건강 위험 분류", help: "WHR과 성별에 따른 WHO 분류." },
      waistCm: { label: "허리(cm)", help: "기준값 비교를 위해 센티미터로 환산된 허리 측정값." },
      centralObesityRisk: { label: "복부 비만 위험", help: "허리 둘레가 WHO의 건강 위험 증가 기준을 초과하는지 여부." },
    },
    options: {
      gender: { male: "남성", female: "여성" },
      unit: { metric: "미터법(cm)", imperial: "야드파운드법(인치)" },
    },
    errors: { invalidMeasurement: "허리와 엉덩이 둘레는 양수여야 합니다." },
    faq: [
      {
        q: "허리-엉덩이 비율이란 무엇인가요?",
        a: "WHR은 허리 둘레를 엉덩이 둘레로 나눈 값입니다. 값이 높을수록 복부 지방이 많음을 나타내며, 심혈관 및 대사 위험 증가와 관련됩니다.",
      },
      {
        q: "WHO 위험 분류 기준은 무엇인가요?",
        a: "남성: WHR <0.90 = 낮은 위험, 0.90–0.99 = 중간 위험, ≥1.00 = 높은 위험. 여성: WHR <0.80 = 낮은 위험, 0.80–0.85 = 중간 위험, ≥0.86 = 높은 위험.",
      },
      {
        q: "허리 둘레를 어떻게 정확히 측정하나요?",
        a: "편하게 서서(배를 집어넣지 말고) 배꼽 약 2cm 위 가장 좁은 부위에서 측정합니다. 줄자를 수평으로 유지하고 꽉 조이지 않게 밀착시켜 정상 호기 말에 측정합니다.",
      },
    ],
  },

  hi: {
    title: "कमर-कूल्हे अनुपात कैलकुलेटर",
    short: "कमर-कूल्हे का अनुपात जानें और चयापचय स्वास्थ्य जोखिम का मूल्यांकन करें।",
    description:
      "WHO दिशानिर्देशों पर आधारित निःशुल्क कमर-कूल्हे अनुपात (WHR) कैलकुलेटर। कमर और कूल्हे का माप दर्ज करें और अपना WHR तथा हृदय-संवहनी जोखिम श्रेणी जानें।",
    keywords: [
      "कमर कूल्हे अनुपात कैलकुलेटर",
      "WHR कैलकुलेटर",
      "केंद्रीय मोटापा",
      "पेट की चर्बी",
      "हृदय रोग जोखिम",
      "कमर परिधि",
      "वसा वितरण",
    ],
    inputs: {
      gender: { label: "जैविक लिंग", help: "लिंग WHO जोखिम श्रेणी की सीमाएं निर्धारित करता है।" },
      unit: { label: "माप प्रणाली", help: "मेट्रिक (सेमी) या इम्पीरियल (इंच) चुनें।" },
      waist: { label: "कमर की परिधि", help: "धड़ के सबसे संकरे स्थान पर मापें, आमतौर पर नाभि के ठीक ऊपर।" },
      hip: { label: "कूल्हे की परिधि", help: "कूल्हे और नितंब के सबसे चौड़े स्थान पर मापें।" },
    },
    outputs: {
      whr: { label: "कमर-कूल्हे अनुपात (WHR)", help: "कमर परिधि को कूल्हे परिधि से विभाजित करने पर प्राप्त मान।" },
      riskCategory: { label: "स्वास्थ्य जोखिम श्रेणी", help: "आपके WHR और लिंग के आधार पर WHO वर्गीकरण।" },
      waistCm: { label: "कमर (सेमी)", help: "सीमा मूल्यों से तुलना के लिए कमर का माप सेंटीमीटर में।" },
      centralObesityRisk: { label: "केंद्रीय मोटापे का जोखिम", help: "क्या आपकी कमर की परिधि बढ़े हुए स्वास्थ्य जोखिम के लिए WHO की सीमा से अधिक है।" },
    },
    options: {
      gender: { male: "पुरुष", female: "महिला" },
      unit: { metric: "मेट्रिक (सेमी)", imperial: "इम्पीरियल (इंच)" },
    },
    errors: { invalidMeasurement: "कमर और कूल्हे की परिधि धनात्मक संख्याएं होनी चाहिए।" },
    faq: [
      {
        q: "कमर-कूल्हे अनुपात क्या है?",
        a: "WHR कमर परिधि को कूल्हे परिधि से विभाजित करके प्राप्त होता है। उच्च WHR पेट में अधिक वसा जमाव का संकेत देता है, जो हृदय-संवहनी और चयापचय जोखिम से जुड़ा है।",
      },
      {
        q: "WHO जोखिम श्रेणियां क्या हैं?",
        a: "पुरुषों के लिए: WHR <0.90 = कम जोखिम, 0.90–0.99 = मध्यम जोखिम, ≥1.00 = उच्च जोखिम। महिलाओं के लिए: WHR <0.80 = कम जोखिम, 0.80–0.85 = मध्यम जोखिम, ≥0.86 = उच्च जोखिम।",
      },
      {
        q: "कमर को सही तरीके से कैसे मापें?",
        a: "आराम से खड़े हों (पेट अंदर न करें)। धड़ के सबसे संकरे स्थान पर मापें, सामान्यतः नाभि से लगभग 2 सेमी ऊपर। मापने वाले टेप को जमीन के समानांतर रखें और सामान्य सांस छोड़ने के बाद माप लें।",
      },
    ],
  },
};

export default i18n;
