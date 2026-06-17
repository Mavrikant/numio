import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Blood Pressure Categories — AHA 2017",
    short: "Classify your blood pressure reading using the AHA/ACC 2017 guidelines.",
    description:
      "Free blood pressure category checker based on the 2017 AHA/ACC guidelines. Enter your systolic and diastolic readings to find your blood pressure category and receive health guidance.",
    keywords: [
      "blood pressure calculator",
      "hypertension categories",
      "AHA blood pressure",
      "systolic diastolic",
      "high blood pressure",
      "blood pressure chart",
      "BP classification",
    ],
    inputs: {
      systolic: {
        label: "Systolic pressure (mmHg)",
        help: "The upper number — pressure when the heart beats. Normal is below 120.",
      },
      diastolic: {
        label: "Diastolic pressure (mmHg)",
        help: "The lower number — pressure when the heart rests between beats. Normal is below 80.",
      },
    },
    outputs: {
      category: {
        label: "Blood pressure category",
        help: "Your overall classification according to AHA/ACC 2017 guidelines.",
      },
      systolicCategory: {
        label: "Systolic category",
        help: "Classification based on systolic reading alone.",
      },
      diastolicCategory: {
        label: "Diastolic category",
        help: "Classification based on diastolic reading alone.",
      },
      recommendation: {
        label: "Recommendation",
        help: "General health action based on your blood pressure category.",
      },
    },
    options: {
      category: {
        normal: "Normal",
        elevated: "Elevated",
        stage1: "High Blood Pressure Stage 1",
        stage2: "High Blood Pressure Stage 2",
        crisis: "Hypertensive Crisis",
      },
      recommendation: {
        healthy_lifestyle: "Maintain a healthy lifestyle with regular exercise and a balanced diet.",
        lifestyle_changes: "Adopt heart-healthy lifestyle changes; monitor regularly.",
        consult_doctor: "Consult your doctor. Lifestyle changes and possibly medication may be needed.",
        see_doctor_soon: "See a doctor soon. Medication is likely required.",
        emergency_care: "Seek emergency medical care immediately if you have symptoms such as chest pain, shortness of breath, or vision changes.",
      },
    },
    errors: {
      systolicOutOfRange: "Systolic pressure must be between 60 and 250 mmHg.",
      diastolicOutOfRange: "Diastolic pressure must be between 40 and 150 mmHg.",
    },
    faq: [
      {
        q: "What changed in the 2017 AHA/ACC guidelines?",
        a: "The 2017 update lowered the threshold for hypertension from 140/90 to 130/80 mmHg and eliminated the 'prehypertension' category, replacing it with 'Elevated' (120–129/<80) and 'Stage 1' (130–139 or 80–89).",
      },
      {
        q: "How many readings are needed for a diagnosis?",
        a: "A diagnosis of hypertension requires elevated readings on at least two separate occasions. White-coat hypertension (elevated readings only in clinical settings) and masked hypertension (normal in clinic, high at home) are recognised phenomena.",
      },
      {
        q: "What is a hypertensive crisis?",
        a: "A hypertensive crisis (systolic >180 or diastolic >120) is a medical emergency. If accompanied by symptoms such as chest pain, shortness of breath, back pain, numbness, visual changes, or difficulty speaking, call emergency services immediately.",
      },
      {
        q: "Does this calculator replace a doctor's assessment?",
        a: "No. This tool is for educational awareness only. A single measurement is insufficient for diagnosis, and blood pressure varies throughout the day. Always consult a qualified healthcare professional.",
      },
    ],
  },
  nl: {
    title: "Bloeddruk Categories — AHA 2017",
    short: "Classify your blood pressure reading using the AHA/ACC 2017 guidelines.",
    description:
      "Gratis blood pressure category controleur based on the 2017 AHA/ACC guidelines. Enter your systolic and diastolic readings to find your blood pressure category and receive health guidance.",
    keywords: [
      "blood pressure calculator",
      "hypertension categories",
      "AHA blood pressure",
      "systolic diastolic",
      "high blood pressure",
      "blood pressure chart",
      "BP classification",
    ],
    inputs: {
      systolic: {
        label: "Systolic pressure (mmHg)",
        help: "The upper nummer — pressure when the heart beats. Normal is below 120.",
      },
      diastolic: {
        label: "Diastolic pressure (mmHg)",
        help: "The lower nummer — pressure when the heart rests between beats. Normal is below 80.",
      },
    },
    outputs: {
      category: {
        label: "Blood pressure category",
        help: "Your overall classification according to AHA/ACC 2017 guidelines.",
      },
      systolicCategory: {
        label: "Systolic category",
        help: "Classification based on systolic reading alone.",
      },
      diastolicCategory: {
        label: "Diastolic category",
        help: "Classification based on diastolic reading alone.",
      },
      recommendation: {
        label: "Recommendation",
        help: "General health action based on your blood pressure category.",
      },
    },
    options: {
      category: {
        normal: "Normal",
        elevated: "Elevated",
        stage1: "High Bloeddruk Stage 1",
        stage2: "High Bloeddruk Stage 2",
        crisis: "Hypertensive Crisis",
      },
      recommendation: {
        healthy_lifestyle: "Maintain a healthy lifestyle with regular exercise and a balanced diet.",
        lifestyle_changes: "Adopt heart-healthy lifestyle changes; monitor regularly.",
        consult_doctor: "Consult your doctor. Lifestyle changes and possibly medication may be needed.",
        see_doctor_soon: "See a doctor soon. Medication is likely required.",
        emergency_care: "Seek emergency medical care immediately if you have symptoms such as chest pain, shortness of breath, or vision changes.",
      },
    },
    errors: {
      systolicOutOfRange: "Systolic pressure must be between 60 and 250 mmHg.",
      diastolicOutOfRange: "Diastolic pressure must be between 40 and 150 mmHg.",
    },
    faq: [
      {
        q: "What changed in the 2017 AHA/ACC guidelines?",
        a: "The 2017 update lowered the threshold for hypertension from 140/90 to 130/80 mmHg and eliminated the 'prehypertension' category, replacing it with 'Elevated' (120–129/<80) and 'Stage 1' (130–139 or 80–89).",
      },
      {
        q: "How many readings are needed for a diagnosis?",
        a: "A diagnosis of hypertension requires elevated readings on at least two separate occasions. White-coat hypertension (elevated readings only in clinical settings) and masked hypertension (normal in clinic, high at home) are recognised phenomena.",
      },
      {
        q: "What is a hypertensive crisis?",
        a: "A hypertensive crisis (systolic >180 or diastolic >120) is a medical emergency. If accompanied by symptoms such as chest pain, shortness of breath, back pain, numbness, visual changes, or difficulty speaking, call emergency services immediately.",
      },
      {
        q: "Does this calculator replace a doctor's assessment?",
        a: "No. This tool is for educational awareness only. A single measurement is insufficient for diagnosis, and blood pressure varies throughout the day. Always consult a qualified healthcare professional.",
      },
    ],
  },

  pl: {
    title: "Ciśnienie Krwi Categories — AHA 2017",
    short: "Classify your blood pressure reading using the AHA/ACC 2017 guidelines.",
    description:
      "Darmowy blood pressure category sprawdzarka based on the 2017 AHA/ACC guidelines. Enter your systolic and diastolic readings to find your blood pressure category and receive health guidance.",
    keywords: [
      "blood pressure kalkulator",
      "hypertension categories",
      "AHA blood pressure",
      "systolic diastolic",
      "high blood pressure",
      "blood pressure chart",
      "BP classification",
    ],
    inputs: {
      systolic: {
        label: "Systolic pressure (mmHg)",
        help: "The upper liczba — pressure when the heart beats. Normal is below 120.",
      },
      diastolic: {
        label: "Diastolic pressure (mmHg)",
        help: "The lower liczba — pressure when the heart rests between beats. Normal is below 80.",
      },
    },
    outputs: {
      category: {
        label: "Blood pressure category",
        help: "Your overall classification according to AHA/ACC 2017 guidelines.",
      },
      systolicCategory: {
        label: "Systolic category",
        help: "Classification based on systolic reading alone.",
      },
      diastolicCategory: {
        label: "Diastolic category",
        help: "Classification based on diastolic reading alone.",
      },
      recommendation: {
        label: "Recommendation",
        help: "General health action based on your blood pressure category.",
      },
    },
    options: {
      category: {
        normal: "Normal",
        elevated: "Elevated",
        stage1: "High Ciśnienie Krwi Stage 1",
        stage2: "High Ciśnienie Krwi Stage 2",
        crisis: "Hypertensive Crisis",
      },
      recommendation: {
        healthy_lifestyle: "Maintain a healthy lifestyle with regular exercise and a balanced diet.",
        lifestyle_changes: "Adopt heart-healthy lifestyle changes; monitor regularly.",
        consult_doctor: "Consult your doctor. Lifestyle changes and possibly medication may be needed.",
        see_doctor_soon: "See a doctor soon. Medication is likely required.",
        emergency_care: "Seek emergency medical care immediately if you have symptoms such as chest pain, shortness of breath, or vision changes.",
      },
    },
    errors: {
      systolicOutOfRange: "Systolic pressure must be between 60 and 250 mmHg.",
      diastolicOutOfRange: "Diastolic pressure must be between 40 and 150 mmHg.",
    },
    faq: [
      {
        q: "What changed in the 2017 AHA/ACC guidelines?",
        a: "The 2017 update lowered the threshold for hypertension from 140/90 to 130/80 mmHg and eliminated the 'prehypertension' category, replacing it with 'Elevated' (120–129/<80) and 'Stage 1' (130–139 or 80–89).",
      },
      {
        q: "How many readings are needed for a diagnosis?",
        a: "A diagnosis of hypertension requires elevated readings on at least two separate occasions. White-coat hypertension (elevated readings only in clinical settings) and masked hypertension (normal in clinic, high at home) are recognised phenomena.",
      },
      {
        q: "What is a hypertensive crisis?",
        a: "A hypertensive crisis (systolic >180 or diastolic >120) is a medical emergency. If accompanied by symptoms such as chest pain, shortness of breath, back pain, numbness, visual changes, or difficulty speaking, call emergency services immediately.",
      },
      {
        q: "Does this kalkulator replace a doctor's assessment?",
        a: "No. This narzędzie is for educational awareness only. A single measurement is insufficient for diagnosis, and blood pressure varies throughout the day. Always consult a qualified healthcare professional.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Pressão Arterial",
    short: "Classifique a sua pressão arterial segundo as categorias médicas atuais.",
    description:
      "Calculadora gratuita de pressão arterial. Veja se a sua tensão é normal, elevada ou hipertensa com base nos valores sistólico e diastólico.",
    keywords: ["pressão arterial", "tensão arterial", "hipertensão", "sistólica diastólica", "categorias pressão"],
    inputs: {
      systolic: {
        label: "Systolic pressure (mmHg)",
        help: "The upper number — pressure when the heart beats. Normal is below 120.",
      },
      diastolic: {
        label: "Diastolic pressure (mmHg)",
        help: "The lower number — pressure when the heart rests between beats. Normal is below 80.",
      },
    },
    outputs: {
      category: {
        label: "Blood pressure category",
        help: "Your overall classification according to AHA/ACC 2017 guidelines.",
      },
      systolicCategory: {
        label: "Systolic category",
        help: "Classification based on systolic reading alone.",
      },
      diastolicCategory: {
        label: "Diastolic category",
        help: "Classification based on diastolic reading alone.",
      },
      recommendation: {
        label: "Recommendation",
        help: "General health action based on your blood pressure category.",
      },
    },
    options: {
      category: {
        normal: "Normal",
        elevated: "Elevated",
        stage1: "High Blood Pressure Stage 1",
        stage2: "High Blood Pressure Stage 2",
        crisis: "Hypertensive Crisis",
      },
      recommendation: {
        healthy_lifestyle: "Maintain a healthy lifestyle with regular exercise and a balanced diet.",
        lifestyle_changes: "Adopt heart-healthy lifestyle changes; monitor regularly.",
        consult_doctor: "Consult your doctor. Lifestyle changes and possibly medication may be needed.",
        see_doctor_soon: "See a doctor soon. Medication is likely required.",
        emergency_care: "Seek emergency medical care immediately if you have symptoms such as chest pain, shortness of breath, or vision changes.",
      },
    },
    errors: {
      systolicOutOfRange: "Systolic pressure must be between 60 and 250 mmHg.",
      diastolicOutOfRange: "Diastolic pressure must be between 40 and 150 mmHg.",
    },
    faq: [
      {
        q: "What changed in the 2017 AHA/ACC guidelines?",
        a: "The 2017 update lowered the threshold for hypertension from 140/90 to 130/80 mmHg and eliminated the 'prehypertension' category, replacing it with 'Elevated' (120–129/<80) and 'Stage 1' (130–139 or 80–89).",
      },
      {
        q: "How many readings are needed for a diagnosis?",
        a: "A diagnosis of hypertension requires elevated readings on at least two separate occasions. White-coat hypertension (elevated readings only in clinical settings) and masked hypertension (normal in clinic, high at home) are recognised phenomena.",
      },
      {
        q: "What is a hypertensive crisis?",
        a: "A hypertensive crisis (systolic >180 or diastolic >120) is a medical emergency. If accompanied by symptoms such as chest pain, shortness of breath, back pain, numbness, visual changes, or difficulty speaking, call emergency services immediately.",
      },
      {
        q: "Does this calculator replace a doctor's assessment?",
        a: "No. This tool is for educational awareness only. A single measurement is insufficient for diagnosis, and blood pressure varies throughout the day. Always consult a qualified healthcare professional.",
      },
    ],
  },
  id: {
    title: "Kalkulator Tekanan Darah",
    short: "Klasifikasikan tekanan darah Anda menurut kategori medis terkini.",
    description:
      "Kalkulator tekanan darah gratis. Lihat apakah tekanan Anda normal, tinggi, atau hipertensi berdasarkan nilai sistolik dan diastolik.",
    keywords: ["tekanan darah", "hipertensi", "darah tinggi", "sistolik diastolik", "kategori tekanan"],
    inputs: {
      systolic: {
        label: "Systolic pressure (mmHg)",
        help: "The upper number — pressure when the heart beats. Normal is below 120.",
      },
      diastolic: {
        label: "Diastolic pressure (mmHg)",
        help: "The lower number — pressure when the heart rests between beats. Normal is below 80.",
      },
    },
    outputs: {
      category: {
        label: "Blood pressure category",
        help: "Your overall classification according to AHA/ACC 2017 guidelines.",
      },
      systolicCategory: {
        label: "Systolic category",
        help: "Classification based on systolic reading alone.",
      },
      diastolicCategory: {
        label: "Diastolic category",
        help: "Classification based on diastolic reading alone.",
      },
      recommendation: {
        label: "Recommendation",
        help: "General health action based on your blood pressure category.",
      },
    },
    options: {
      category: {
        normal: "Normal",
        elevated: "Elevated",
        stage1: "High Blood Pressure Stage 1",
        stage2: "High Blood Pressure Stage 2",
        crisis: "Hypertensive Crisis",
      },
      recommendation: {
        healthy_lifestyle: "Maintain a healthy lifestyle with regular exercise and a balanced diet.",
        lifestyle_changes: "Adopt heart-healthy lifestyle changes; monitor regularly.",
        consult_doctor: "Consult your doctor. Lifestyle changes and possibly medication may be needed.",
        see_doctor_soon: "See a doctor soon. Medication is likely required.",
        emergency_care: "Seek emergency medical care immediately if you have symptoms such as chest pain, shortness of breath, or vision changes.",
      },
    },
    errors: {
      systolicOutOfRange: "Systolic pressure must be between 60 and 250 mmHg.",
      diastolicOutOfRange: "Diastolic pressure must be between 40 and 150 mmHg.",
    },
    faq: [
      {
        q: "What changed in the 2017 AHA/ACC guidelines?",
        a: "The 2017 update lowered the threshold for hypertension from 140/90 to 130/80 mmHg and eliminated the 'prehypertension' category, replacing it with 'Elevated' (120–129/<80) and 'Stage 1' (130–139 or 80–89).",
      },
      {
        q: "How many readings are needed for a diagnosis?",
        a: "A diagnosis of hypertension requires elevated readings on at least two separate occasions. White-coat hypertension (elevated readings only in clinical settings) and masked hypertension (normal in clinic, high at home) are recognised phenomena.",
      },
      {
        q: "What is a hypertensive crisis?",
        a: "A hypertensive crisis (systolic >180 or diastolic >120) is a medical emergency. If accompanied by symptoms such as chest pain, shortness of breath, back pain, numbness, visual changes, or difficulty speaking, call emergency services immediately.",
      },
      {
        q: "Does this calculator replace a doctor's assessment?",
        a: "No. This tool is for educational awareness only. A single measurement is insufficient for diagnosis, and blood pressure varies throughout the day. Always consult a qualified healthcare professional.",
      },
    ],
  },


  tr: {
    title: "Kan Basıncı Kategorileri — AHA 2017",
    short: "AHA/ACC 2017 kılavuzlarına göre kan basıncı okumanızı sınıflandırın.",
    description:
      "2017 AHA/ACC kılavuzlarına dayalı ücretsiz kan basıncı kategori denetleyicisi. Sistolik ve diyastolik değerlerinizi girerek kan basıncı kategorinizi ve sağlık rehberliğini öğrenin.",
    keywords: [
      "kan basıncı hesaplayıcı",
      "hipertansiyon kategorileri",
      "AHA kan basıncı",
      "sistolik diyastolik",
      "yüksek tansiyon",
      "kan basıncı tablosu",
      "tansiyon sınıflandırması",
    ],
    inputs: {
      systolic: {
        label: "Sistolik basınç (mmHg)",
        help: "Üstteki sayı — kalp atarken oluşan basınç. Normal değer 120'nin altındadır.",
      },
      diastolic: {
        label: "Diyastolik basınç (mmHg)",
        help: "Alttaki sayı — kalp atışları arasında dinlenirken oluşan basınç. Normal değer 80'in altındadır.",
      },
    },
    outputs: {
      category: {
        label: "Kan basıncı kategorisi",
        help: "AHA/ACC 2017 kılavuzlarına göre genel sınıflandırmanız.",
      },
      systolicCategory: {
        label: "Sistolik kategori",
        help: "Yalnızca sistolik değere dayalı sınıflandırma.",
      },
      diastolicCategory: {
        label: "Diyastolik kategori",
        help: "Yalnızca diyastolik değere dayalı sınıflandırma.",
      },
      recommendation: {
        label: "Öneri",
        help: "Kan basıncı kategorinize dayalı genel sağlık önerisi.",
      },
    },
    options: {
      category: {
        normal: "Normal",
        elevated: "Yüksek",
        stage1: "Hipertansiyon Evre 1",
        stage2: "Hipertansiyon Evre 2",
        crisis: "Hipertansif Kriz",
      },
      recommendation: {
        healthy_lifestyle: "Düzenli egzersiz ve dengeli beslenmeyle sağlıklı yaşam tarzını sürdürün.",
        lifestyle_changes: "Kalp dostu yaşam tarzı değişikliklerini benimseyin; düzenli olarak takip edin.",
        consult_doctor: "Doktorunuza danışın. Yaşam tarzı değişiklikleri ve muhtemelen ilaç tedavisi gerekebilir.",
        see_doctor_soon: "En kısa sürede bir doktora başvurun. Büyük olasılıkla ilaç tedavisi gerekecektir.",
        emergency_care: "Göğüs ağrısı, nefes darlığı veya görme bozuklukları gibi belirtiler varsa acilen tıbbi yardım alın.",
      },
    },
    errors: {
      systolicOutOfRange: "Sistolik basınç 60 ile 250 mmHg arasında olmalıdır.",
      diastolicOutOfRange: "Diyastolik basınç 40 ile 150 mmHg arasında olmalıdır.",
    },
    faq: [
      {
        q: "2017 AHA/ACC kılavuzlarında ne değişti?",
        a: "2017 güncellemesi, hipertansiyon eşiğini 140/90'dan 130/80 mmHg'ye düşürdü ve 'prehipertansiyon' kategorisini kaldırarak 'Yüksek' (120–129/<80) ve 'Evre 1' (130–139 veya 80–89) kategorileriyle değiştirdi.",
      },
      {
        q: "Bu hesaplayıcı doktorun değerlendirmesinin yerini tutar mı?",
        a: "Hayır. Bu araç yalnızca eğitim amaçlıdır. Tek bir ölçüm tanı için yeterli değildir; kan basıncı gün içinde sürekli değişir. Her zaman yetkili bir sağlık profesyoneline danışın.",
      },
    ],
  },

  de: {
    title: "Blutdruckkategorien — AHA 2017",
    short: "Klassifizieren Sie Ihren Blutdruck anhand der AHA/ACC-Leitlinien von 2017.",
    description:
      "Kostenloser Blutdruckkategorie-Checker nach den AHA/ACC-Leitlinien von 2017. Geben Sie Ihren systolischen und diastolischen Wert ein, um Ihre Blutdruckkategorie und Handlungsempfehlungen zu erhalten.",
    keywords: [
      "Blutdruckrechner",
      "Hypertonie-Kategorien",
      "AHA Blutdruck",
      "systolisch diastolisch",
      "Bluthochdruck",
      "Blutdrucktabelle",
      "Blutdruckklassifikation",
    ],
    inputs: {
      systolic: {
        label: "Systolischer Druck (mmHg)",
        help: "Die obere Zahl — Druck beim Herzschlag. Normal liegt er unter 120.",
      },
      diastolic: {
        label: "Diastolischer Druck (mmHg)",
        help: "Die untere Zahl — Druck zwischen den Herzschlägen. Normal liegt er unter 80.",
      },
    },
    outputs: {
      category: {
        label: "Blutdruckkategorie",
        help: "Ihre Gesamtklassifikation nach AHA/ACC 2017.",
      },
      systolicCategory: {
        label: "Systolische Kategorie",
        help: "Klassifikation nur nach dem systolischen Wert.",
      },
      diastolicCategory: {
        label: "Diastolische Kategorie",
        help: "Klassifikation nur nach dem diastolischen Wert.",
      },
      recommendation: {
        label: "Empfehlung",
        help: "Allgemeine Gesundheitsempfehlung basierend auf Ihrer Blutdruckkategorie.",
      },
    },
    options: {
      category: {
        normal: "Normal",
        elevated: "Erhöht",
        stage1: "Bluthochdruck Stufe 1",
        stage2: "Bluthochdruck Stufe 2",
        crisis: "Hypertensive Krise",
      },
      recommendation: {
        healthy_lifestyle: "Gesunden Lebensstil beibehalten mit regelmäßiger Bewegung und ausgewogener Ernährung.",
        lifestyle_lifestyle_changes: "Herzgesunde Lebensstiländerungen einführen; regelmäßig kontrollieren.",
        lifestyle_changes: "Herzgesunde Lebensstiländerungen einführen; regelmäßig kontrollieren.",
        consult_doctor: "Arzt aufsuchen. Lebensstiländerungen und evtl. Medikamente können erforderlich sein.",
        see_doctor_soon: "Zeitnah zum Arzt. Medikamente sind wahrscheinlich notwendig.",
        emergency_care: "Sofort medizinische Notfallversorgung suchen bei Symptomen wie Brustschmerzen, Kurzatmigkeit oder Sehstörungen.",
      },
    },
    errors: {
      systolicOutOfRange: "Der systolische Druck muss zwischen 60 und 250 mmHg liegen.",
      diastolicOutOfRange: "Der diastolische Druck muss zwischen 40 und 150 mmHg liegen.",
    },
    faq: [
      {
        q: "Was hat sich in den AHA/ACC-Leitlinien 2017 geändert?",
        a: "Die Schwelle für Hypertonie wurde von 140/90 auf 130/80 mmHg gesenkt. Die Kategorie 'Prähypertonie' wurde durch 'Erhöht' (120–129/<80) und 'Stufe 1' (130–139 oder 80–89) ersetzt.",
      },
      {
        q: "Ersetzt dieser Rechner die ärztliche Beurteilung?",
        a: "Nein. Dieses Tool dient ausschließlich der Aufklärung. Eine einzelne Messung reicht für eine Diagnose nicht aus. Konsultieren Sie immer einen Arzt.",
      },
    ],
  },

  fr: {
    title: "Catégories de pression artérielle — AHA 2017",
    short: "Classifiez votre tension artérielle selon les recommandations AHA/ACC 2017.",
    description:
      "Vérificateur gratuit de catégorie de pression artérielle basé sur les recommandations AHA/ACC 2017. Entrez vos valeurs systolique et diastolique pour connaître votre catégorie et obtenir des conseils de santé.",
    keywords: [
      "calculateur tension artérielle",
      "catégories hypertension",
      "AHA tension artérielle",
      "systolique diastolique",
      "hypertension",
      "tableau tension artérielle",
      "classification TA",
    ],
    inputs: {
      systolic: {
        label: "Pression systolique (mmHg)",
        help: "Le chiffre du haut — pression lors des battements cardiaques. Normal : moins de 120.",
      },
      diastolic: {
        label: "Pression diastolique (mmHg)",
        help: "Le chiffre du bas — pression entre les battements. Normal : moins de 80.",
      },
    },
    outputs: {
      category: {
        label: "Catégorie de pression artérielle",
        help: "Votre classification globale selon les recommandations AHA/ACC 2017.",
      },
      systolicCategory: {
        label: "Catégorie systolique",
        help: "Classification basée sur la pression systolique seule.",
      },
      diastolicCategory: {
        label: "Catégorie diastolique",
        help: "Classification basée sur la pression diastolique seule.",
      },
      recommendation: {
        label: "Recommandation",
        help: "Conseil de santé général selon votre catégorie de pression artérielle.",
      },
    },
    options: {
      category: {
        normal: "Normal",
        elevated: "Élevée",
        stage1: "Hypertension stade 1",
        stage2: "Hypertension stade 2",
        crisis: "Crise hypertensive",
      },
      recommendation: {
        healthy_lifestyle: "Maintenir un mode de vie sain avec exercice régulier et alimentation équilibrée.",
        lifestyle_changes: "Adopter des changements de mode de vie favorables au cœur ; surveiller régulièrement.",
        consult_doctor: "Consulter votre médecin. Des changements de mode de vie et éventuellement des médicaments peuvent être nécessaires.",
        see_doctor_soon: "Consulter rapidement un médecin. Un traitement médicamenteux est probablement nécessaire.",
        emergency_care: "Appelez les secours d'urgence immédiatement en cas de douleur thoracique, d'essoufflement ou de troubles visuels.",
      },
    },
    errors: {
      systolicOutOfRange: "La pression systolique doit être comprise entre 60 et 250 mmHg.",
      diastolicOutOfRange: "La pression diastolique doit être comprise entre 40 et 150 mmHg.",
    },
    faq: [
      {
        q: "Qu'est-ce qui a changé dans les recommandations AHA/ACC 2017 ?",
        a: "Le seuil de l'hypertension a été abaissé de 140/90 à 130/80 mmHg. La catégorie 'préhypertension' a été remplacée par 'Élevée' (120–129/<80) et 'Stade 1' (130–139 ou 80–89).",
      },
      {
        q: "Ce calculateur remplace-t-il l'avis médical ?",
        a: "Non. Cet outil est uniquement éducatif. Une seule mesure ne suffit pas pour un diagnostic. Consultez toujours un professionnel de santé qualifié.",
      },
    ],
  },

  es: {
    title: "Categorías de presión arterial — AHA 2017",
    short: "Clasifica tu presión arterial según las pautas AHA/ACC 2017.",
    description:
      "Verificador gratuito de categoría de presión arterial basado en las pautas AHA/ACC 2017. Introduce tus valores sistólico y diastólico para conocer tu categoría y recibir orientación de salud.",
    keywords: [
      "calculadora presión arterial",
      "categorías hipertensión",
      "AHA presión arterial",
      "sistólica diastólica",
      "hipertensión",
      "tabla presión arterial",
      "clasificación TA",
    ],
    inputs: {
      systolic: {
        label: "Presión sistólica (mmHg)",
        help: "El número superior — presión cuando el corazón late. Normal: menos de 120.",
      },
      diastolic: {
        label: "Presión diastólica (mmHg)",
        help: "El número inferior — presión entre latidos. Normal: menos de 80.",
      },
    },
    outputs: {
      category: {
        label: "Categoría de presión arterial",
        help: "Tu clasificación general según las pautas AHA/ACC 2017.",
      },
      systolicCategory: {
        label: "Categoría sistólica",
        help: "Clasificación basada solo en la presión sistólica.",
      },
      diastolicCategory: {
        label: "Categoría diastólica",
        help: "Clasificación basada solo en la presión diastólica.",
      },
      recommendation: {
        label: "Recomendación",
        help: "Consejo de salud general según tu categoría de presión arterial.",
      },
    },
    options: {
      category: {
        normal: "Normal",
        elevated: "Elevada",
        stage1: "Hipertensión estadio 1",
        stage2: "Hipertensión estadio 2",
        crisis: "Crisis hipertensiva",
      },
      recommendation: {
        healthy_lifestyle: "Mantener un estilo de vida saludable con ejercicio regular y dieta equilibrada.",
        lifestyle_changes: "Adoptar cambios de estilo de vida favorables al corazón; monitorear regularmente.",
        consult_doctor: "Consultar al médico. Pueden ser necesarios cambios de estilo de vida y posiblemente medicación.",
        see_doctor_soon: "Visitar al médico pronto. Es probable que se necesite medicación.",
        emergency_care: "Buscar atención médica de emergencia de inmediato si hay síntomas como dolor torácico, dificultad respiratoria o cambios en la visión.",
      },
    },
    errors: {
      systolicOutOfRange: "La presión sistólica debe estar entre 60 y 250 mmHg.",
      diastolicOutOfRange: "La presión diastólica debe estar entre 40 y 150 mmHg.",
    },
    faq: [
      {
        q: "¿Qué cambió en las pautas AHA/ACC 2017?",
        a: "El umbral de hipertensión se redujo de 140/90 a 130/80 mmHg. La categoría 'prehipertensión' fue reemplazada por 'Elevada' (120–129/<80) y 'Estadio 1' (130–139 o 80–89).",
      },
      {
        q: "¿Reemplaza esta calculadora la evaluación médica?",
        a: "No. Esta herramienta es solo educativa. Una sola medición no es suficiente para un diagnóstico. Siempre consulta a un profesional de salud.",
      },
    ],
  },

  it: {
    title: "Categorie della pressione arteriosa — AHA 2017",
    short: "Classifica la tua pressione arteriosa secondo le linee guida AHA/ACC 2017.",
    description:
      "Verificatore gratuito della categoria della pressione arteriosa basato sulle linee guida AHA/ACC 2017. Inserisci i valori sistolico e diastolico per conoscere la tua categoria e ricevere indicazioni sanitarie.",
    keywords: [
      "calcolatore pressione arteriosa",
      "categorie ipertensione",
      "AHA pressione arteriosa",
      "sistolica diastolica",
      "ipertensione",
      "tabella pressione arteriosa",
      "classificazione PA",
    ],
    inputs: {
      systolic: {
        label: "Pressione sistolica (mmHg)",
        help: "Il numero superiore — pressione durante i battiti cardiaci. Normale: meno di 120.",
      },
      diastolic: {
        label: "Pressione diastolica (mmHg)",
        help: "Il numero inferiore — pressione tra i battiti. Normale: meno di 80.",
      },
    },
    outputs: {
      category: {
        label: "Categoria della pressione arteriosa",
        help: "La tua classificazione complessiva secondo le linee guida AHA/ACC 2017.",
      },
      systolicCategory: {
        label: "Categoria sistolica",
        help: "Classificazione basata solo sulla pressione sistolica.",
      },
      diastolicCategory: {
        label: "Categoria diastolica",
        help: "Classificazione basata solo sulla pressione diastolica.",
      },
      recommendation: {
        label: "Raccomandazione",
        help: "Consiglio sanitario generale in base alla tua categoria di pressione arteriosa.",
      },
    },
    options: {
      category: {
        normal: "Normale",
        elevated: "Elevata",
        stage1: "Ipertensione stadio 1",
        stage2: "Ipertensione stadio 2",
        crisis: "Crisi ipertensiva",
      },
      recommendation: {
        healthy_lifestyle: "Mantenere uno stile di vita sano con esercizio regolare e dieta equilibrata.",
        lifestyle_changes: "Adottare cambiamenti dello stile di vita favorevoli al cuore; monitorare regolarmente.",
        consult_doctor: "Consultare il medico. Possono essere necessari cambiamenti dello stile di vita ed eventualmente farmaci.",
        see_doctor_soon: "Visitare presto un medico. È probabile che sia necessaria una terapia farmacologica.",
        emergency_care: "Cercare assistenza medica d'emergenza immediatamente in presenza di sintomi come dolore toracico, mancanza di respiro o alterazioni visive.",
      },
    },
    errors: {
      systolicOutOfRange: "La pressione sistolica deve essere compresa tra 60 e 250 mmHg.",
      diastolicOutOfRange: "La pressione diastolica deve essere compresa tra 40 e 150 mmHg.",
    },
    faq: [
      {
        q: "Cosa è cambiato nelle linee guida AHA/ACC 2017?",
        a: "La soglia per l'ipertensione è stata abbassata da 140/90 a 130/80 mmHg. La categoria 'preipertensione' è stata sostituita da 'Elevata' (120–129/<80) e 'Stadio 1' (130–139 o 80–89).",
      },
      {
        q: "Questo calcolatore sostituisce la valutazione medica?",
        a: "No. Questo strumento è solo a scopo educativo. Una singola misurazione non è sufficiente per una diagnosi. Consultare sempre un professionista sanitario qualificato.",
      },
    ],
  },

  ar: {
    title: "تصنيفات ضغط الدم — AHA 2017",
    short: "صنِّف قراءة ضغط دمك وفقاً لإرشادات AHA/ACC لعام 2017.",
    description:
      "أداة مجانية لتصنيف ضغط الدم بناءً على إرشادات AHA/ACC 2017. أدخل قيمتي الضغط الانقباضي والانبساطي لمعرفة فئتك والحصول على توجيهات صحية.",
    keywords: [
      "حاسبة ضغط الدم",
      "تصنيفات ارتفاع ضغط الدم",
      "AHA ضغط الدم",
      "الانقباضي الانبساطي",
      "ارتفاع ضغط الدم",
      "جدول ضغط الدم",
      "تصنيف ضغط الدم",
    ],
    inputs: {
      systolic: {
        label: "الضغط الانقباضي (ملم زئبق)",
        help: "الرقم العلوي — الضغط عند انقباض القلب. الطبيعي أقل من 120.",
      },
      diastolic: {
        label: "الضغط الانبساطي (ملم زئبق)",
        help: "الرقم السفلي — الضغط بين نبضات القلب. الطبيعي أقل من 80.",
      },
    },
    outputs: {
      category: {
        label: "فئة ضغط الدم",
        help: "تصنيفك الإجمالي وفق إرشادات AHA/ACC 2017.",
      },
      systolicCategory: {
        label: "فئة الضغط الانقباضي",
        help: "التصنيف بناءً على الضغط الانقباضي وحده.",
      },
      diastolicCategory: {
        label: "فئة الضغط الانبساطي",
        help: "التصنيف بناءً على الضغط الانبساطي وحده.",
      },
      recommendation: {
        label: "التوصية",
        help: "توجيه صحي عام بناءً على فئة ضغط دمك.",
      },
    },
    options: {
      category: {
        normal: "طبيعي",
        elevated: "مرتفع",
        stage1: "ارتفاع ضغط الدم المرحلة 1",
        stage2: "ارتفاع ضغط الدم المرحلة 2",
        crisis: "أزمة ارتفاع ضغط الدم",
      },
      recommendation: {
        healthy_lifestyle: "الحفاظ على نمط حياة صحي مع ممارسة رياضة منتظمة وتغذية متوازنة.",
        lifestyle_changes: "اعتماد تغييرات في نمط الحياة مفيدة للقلب ومراقبة القراءات بانتظام.",
        consult_doctor: "استشر طبيبك. قد تكون التغييرات في نمط الحياة وربما الأدوية ضرورية.",
        see_doctor_soon: "راجع طبيبًا في أقرب وقت. على الأرجح ستحتاج إلى دواء.",
        emergency_care: "اطلب رعاية طبية طارئة فورًا إذا ظهرت أعراض مثل ألم الصدر أو ضيق التنفس أو تغيرات في الرؤية.",
      },
    },
    errors: {
      systolicOutOfRange: "يجب أن يكون الضغط الانقباضي بين 60 و250 ملم زئبق.",
      diastolicOutOfRange: "يجب أن يكون الضغط الانبساطي بين 40 و150 ملم زئبق.",
    },
    faq: [
      {
        q: "ما الذي تغير في إرشادات AHA/ACC لعام 2017؟",
        a: "خُفِّض عتبة ارتفاع ضغط الدم من 140/90 إلى 130/80 ملم زئبق، وأُلغيت فئة 'ما قبل ارتفاع ضغط الدم' لتحل محلها 'مرتفع' (120–129/<80) و'المرحلة 1' (130–139 أو 80–89).",
      },
      {
        q: "هل تحل هذه الأداة محل تقييم الطبيب؟",
        a: "لا. هذه الأداة للأغراض التعليمية فقط. قراءة واحدة لا تكفي للتشخيص. استشر دائمًا مختصًا صحيًا مؤهلًا.",
      },
    ],
  },

  ru: {
    title: "Категории артериального давления — AHA 2017",
    short: "Классифицируйте ваше артериальное давление по рекомендациям AHA/ACC 2017.",
    description:
      "Бесплатный классификатор артериального давления по рекомендациям AHA/ACC 2017. Введите систолическое и диастолическое значения, чтобы узнать категорию и получить рекомендации.",
    keywords: [
      "калькулятор артериального давления",
      "категории гипертензии",
      "AHA давление",
      "систолическое диастолическое",
      "гипертония",
      "таблица давления",
      "классификация АД",
    ],
    inputs: {
      systolic: {
        label: "Систолическое давление (мм рт. ст.)",
        help: "Верхнее число — давление при сокращении сердца. Норма — ниже 120.",
      },
      diastolic: {
        label: "Диастолическое давление (мм рт. ст.)",
        help: "Нижнее число — давление в паузах между ударами сердца. Норма — ниже 80.",
      },
    },
    outputs: {
      category: {
        label: "Категория артериального давления",
        help: "Ваша общая классификация по рекомендациям AHA/ACC 2017.",
      },
      systolicCategory: {
        label: "Категория систолического давления",
        help: "Классификация только по систолическому значению.",
      },
      diastolicCategory: {
        label: "Категория диастолического давления",
        help: "Классификация только по диастолическому значению.",
      },
      recommendation: {
        label: "Рекомендация",
        help: "Общая рекомендация по состоянию здоровья на основе вашей категории давления.",
      },
    },
    options: {
      category: {
        normal: "Норма",
        elevated: "Повышенное",
        stage1: "Гипертония 1 степени",
        stage2: "Гипертония 2 степени",
        crisis: "Гипертонический криз",
      },
      recommendation: {
        healthy_lifestyle: "Поддерживайте здоровый образ жизни: регулярные физические нагрузки и сбалансированное питание.",
        lifestyle_changes: "Переходите к образу жизни, благоприятному для сердца; регулярно контролируйте давление.",
        consult_doctor: "Обратитесь к врачу. Возможно, потребуются изменения образа жизни и медикаменты.",
        see_doctor_soon: "Посетите врача в ближайшее время. Скорее всего, потребуется медикаментозная терапия.",
        emergency_care: "Немедленно вызовите скорую помощь при симптомах: боль в груди, одышка или нарушение зрения.",
      },
    },
    errors: {
      systolicOutOfRange: "Систолическое давление должно быть от 60 до 250 мм рт. ст.",
      diastolicOutOfRange: "Диастолическое давление должно быть от 40 до 150 мм рт. ст.",
    },
    faq: [
      {
        q: "Что изменилось в рекомендациях AHA/ACC 2017?",
        a: "Порог гипертонии снижен со 140/90 до 130/80 мм рт. ст. Категория «прегипертония» заменена категориями «Повышенное» (120–129/<80) и «1 степень» (130–139 или 80–89).",
      },
      {
        q: "Заменяет ли этот калькулятор врачебную оценку?",
        a: "Нет. Инструмент предназначен исключительно для образовательных целей. Одного измерения недостаточно для постановки диагноза. Всегда консультируйтесь с врачом.",
      },
    ],
  },

  zh: {
    title: "血压分类 — AHA 2017",
    short: "根据AHA/ACC 2017指南对您的血压读数进行分类。",
    description:
      "基于AHA/ACC 2017指南的免费血压分类工具。输入您的收缩压和舒张压，了解您的血压类别并获取健康建议。",
    keywords: [
      "血压计算器",
      "高血压分类",
      "AHA血压",
      "收缩压舒张压",
      "高血压",
      "血压对照表",
      "血压分级",
    ],
    inputs: {
      systolic: {
        label: "收缩压（mmHg）",
        help: "较高的数字——心脏跳动时的压力。正常值低于120。",
      },
      diastolic: {
        label: "舒张压（mmHg）",
        help: "较低的数字——两次心跳之间的压力。正常值低于80。",
      },
    },
    outputs: {
      category: {
        label: "血压类别",
        help: "根据AHA/ACC 2017指南的整体分类。",
      },
      systolicCategory: {
        label: "收缩压类别",
        help: "仅基于收缩压的分类。",
      },
      diastolicCategory: {
        label: "舒张压类别",
        help: "仅基于舒张压的分类。",
      },
      recommendation: {
        label: "建议",
        help: "基于您血压类别的一般健康建议。",
      },
    },
    options: {
      category: {
        normal: "正常",
        elevated: "偏高",
        stage1: "高血压1期",
        stage2: "高血压2期",
        crisis: "高血压危象",
      },
      recommendation: {
        healthy_lifestyle: "通过定期锻炼和均衡饮食保持健康的生活方式。",
        lifestyle_changes: "采取有益心脏的生活方式改变；定期监测。",
        consult_doctor: "请咨询医生。可能需要生活方式改变以及药物治疗。",
        see_doctor_soon: "尽快就医。可能需要药物治疗。",
        emergency_care: "如有胸痛、呼吸困难或视力变化等症状，请立即寻求急救医疗。",
      },
    },
    errors: {
      systolicOutOfRange: "收缩压必须在60至250 mmHg之间。",
      diastolicOutOfRange: "舒张压必须在40至150 mmHg之间。",
    },
    faq: [
      {
        q: "2017年AHA/ACC指南有何变化？",
        a: "高血压阈值从140/90降至130/80 mmHg。\"高血压前期\"类别被\"偏高\"（120–129/<80）和\"1期\"（130–139或80–89）所取代。",
      },
      {
        q: "这个计算器能替代医生评估吗？",
        a: "不能。此工具仅用于教育目的。单次测量不足以进行诊断。请始终咨询合格的医疗专业人员。",
      },
    ],
  },

  ja: {
    title: "血圧分類 — AHA 2017",
    short: "AHA/ACC 2017ガイドラインに基づいて血圧の測定値を分類します。",
    description:
      "AHA/ACC 2017ガイドラインに基づく無料の血圧分類ツール。収縮期圧と拡張期圧を入力して、血圧区分と健康に関するアドバイスを確認しましょう。",
    keywords: [
      "血圧計算機",
      "高血圧分類",
      "AHA血圧",
      "収縮期圧拡張期圧",
      "高血圧",
      "血圧表",
      "血圧ガイドライン",
    ],
    inputs: {
      systolic: {
        label: "収縮期血圧（mmHg）",
        help: "上の数字——心臓が拍動するときの圧力。正常値は120未満。",
      },
      diastolic: {
        label: "拡張期血圧（mmHg）",
        help: "下の数字——拍動と拍動の間の圧力。正常値は80未満。",
      },
    },
    outputs: {
      category: {
        label: "血圧区分",
        help: "AHA/ACC 2017ガイドラインによる総合分類。",
      },
      systolicCategory: {
        label: "収縮期圧の区分",
        help: "収縮期圧のみに基づく分類。",
      },
      diastolicCategory: {
        label: "拡張期圧の区分",
        help: "拡張期圧のみに基づく分類。",
      },
      recommendation: {
        label: "推奨事項",
        help: "血圧区分に基づく一般的な健康アドバイス。",
      },
    },
    options: {
      category: {
        normal: "正常",
        elevated: "やや高め",
        stage1: "高血圧ステージ1",
        stage2: "高血圧ステージ2",
        crisis: "高血圧クライシス",
      },
      recommendation: {
        healthy_lifestyle: "定期的な運動とバランスの取れた食事で健康的な生活習慣を維持しましょう。",
        lifestyle_changes: "心臓に良い生活習慣の改善を取り入れ、定期的にモニタリングしましょう。",
        consult_doctor: "医師に相談してください。生活習慣の改善や薬物療法が必要な場合があります。",
        see_doctor_soon: "早めに医師を受診してください。薬物療法が必要な可能性が高いです。",
        emergency_care: "胸痛・息切れ・視力の変化などの症状がある場合は、すぐに救急医療を受けてください。",
      },
    },
    errors: {
      systolicOutOfRange: "収縮期血圧は60〜250 mmHgの範囲で入力してください。",
      diastolicOutOfRange: "拡張期血圧は40〜150 mmHgの範囲で入力してください。",
    },
    faq: [
      {
        q: "AHA/ACC 2017ガイドラインでは何が変わりましたか？",
        a: "高血圧の閾値が140/90から130/80 mmHgに引き下げられました。「高血圧前段階」の区分は廃止され、「やや高め」（120–129/<80）と「ステージ1」（130–139または80–89）に置き換えられました。",
      },
      {
        q: "この計算機は医師の評価に代わるものですか？",
        a: "いいえ。このツールは教育目的のみのものです。1回の測定だけでは診断には不十分です。必ず医療専門家に相談してください。",
      },
    ],
  },

  ko: {
    title: "혈압 분류 — AHA 2017",
    short: "AHA/ACC 2017 지침에 따라 혈압 수치를 분류합니다.",
    description:
      "AHA/ACC 2017 지침을 기반으로 한 무료 혈압 분류 도구입니다. 수축기와 이완기 혈압을 입력하면 혈압 분류와 건강 권고사항을 확인할 수 있습니다.",
    keywords: [
      "혈압 계산기",
      "고혈압 분류",
      "AHA 혈압",
      "수축기 이완기",
      "고혈압",
      "혈압 표",
      "혈압 지침",
    ],
    inputs: {
      systolic: {
        label: "수축기 혈압 (mmHg)",
        help: "위쪽 숫자 — 심장이 뛸 때의 압력. 정상: 120 미만.",
      },
      diastolic: {
        label: "이완기 혈압 (mmHg)",
        help: "아래쪽 숫자 — 심장 박동 사이 압력. 정상: 80 미만.",
      },
    },
    outputs: {
      category: {
        label: "혈압 분류",
        help: "AHA/ACC 2017 지침에 따른 전체 분류.",
      },
      systolicCategory: {
        label: "수축기 혈압 분류",
        help: "수축기 혈압만을 기반으로 한 분류.",
      },
      diastolicCategory: {
        label: "이완기 혈압 분류",
        help: "이완기 혈압만을 기반으로 한 분류.",
      },
      recommendation: {
        label: "권고사항",
        help: "혈압 분류에 따른 일반적인 건강 권고사항.",
      },
    },
    options: {
      category: {
        normal: "정상",
        elevated: "주의",
        stage1: "고혈압 1기",
        stage2: "고혈압 2기",
        crisis: "고혈압 위기",
      },
      recommendation: {
        healthy_lifestyle: "규칙적인 운동과 균형 잡힌 식단으로 건강한 생활방식을 유지하세요.",
        lifestyle_changes: "심장에 좋은 생활습관을 채택하고 정기적으로 모니터링하세요.",
        consult_doctor: "의사와 상담하세요. 생활습관 변화와 약물 치료가 필요할 수 있습니다.",
        see_doctor_soon: "곧 의사를 방문하세요. 약물 치료가 필요할 가능성이 높습니다.",
        emergency_care: "흉통, 호흡 곤란, 시력 변화 등의 증상이 있으면 즉시 응급 의료 서비스를 이용하세요.",
      },
    },
    errors: {
      systolicOutOfRange: "수축기 혈압은 60~250 mmHg 사이여야 합니다.",
      diastolicOutOfRange: "이완기 혈압은 40~150 mmHg 사이여야 합니다.",
    },
    faq: [
      {
        q: "2017년 AHA/ACC 지침에서 무엇이 바뀌었나요?",
        a: "고혈압 기준이 140/90에서 130/80 mmHg로 낮아졌습니다. '고혈압 전단계' 범주가 폐지되고 '주의'(120–129/<80)와 '1기'(130–139 또는 80–89)로 대체되었습니다.",
      },
      {
        q: "이 계산기가 의사 평가를 대신할 수 있나요?",
        a: "아니요. 이 도구는 교육 목적으로만 사용됩니다. 단일 측정으로는 진단이 불충분합니다. 항상 전문 의료인과 상담하세요.",
      },
    ],
  },

  hi: {
    title: "रक्तचाप वर्गीकरण — AHA 2017",
    short: "AHA/ACC 2017 दिशानिर्देशों के आधार पर अपने रक्तचाप का वर्गीकरण करें।",
    description:
      "AHA/ACC 2017 दिशानिर्देशों पर आधारित मुफ़्त रक्तचाप वर्गीकरण उपकरण। अपना सिस्टोलिक और डायस्टोलिक मान दर्ज करें और रक्तचाप की श्रेणी एवं स्वास्थ्य सलाह प्राप्त करें।",
    keywords: [
      "रक्तचाप कैलकुलेटर",
      "उच्च रक्तचाप वर्गीकरण",
      "AHA रक्तचाप",
      "सिस्टोलिक डायस्टोलिक",
      "उच्च रक्तचाप",
      "रक्तचाप तालिका",
      "BP वर्गीकरण",
    ],
    inputs: {
      systolic: {
        label: "सिस्टोलिक दबाव (mmHg)",
        help: "ऊपरी संख्या — हृदय के धड़कने पर दबाव। सामान्य: 120 से कम।",
      },
      diastolic: {
        label: "डायस्टोलिक दबाव (mmHg)",
        help: "निचली संख्या — धड़कनों के बीच दबाव। सामान्य: 80 से कम।",
      },
    },
    outputs: {
      category: {
        label: "रक्तचाप श्रेणी",
        help: "AHA/ACC 2017 दिशानिर्देशों के अनुसार समग्र वर्गीकरण।",
      },
      systolicCategory: {
        label: "सिस्टोलिक श्रेणी",
        help: "केवल सिस्टोलिक मान के आधार पर वर्गीकरण।",
      },
      diastolicCategory: {
        label: "डायस्टोलिक श्रेणी",
        help: "केवल डायस्टोलिक मान के आधार पर वर्गीकरण।",
      },
      recommendation: {
        label: "सिफारिश",
        help: "आपकी रक्तचाप श्रेणी के आधार पर सामान्य स्वास्थ्य सलाह।",
      },
    },
    options: {
      category: {
        normal: "सामान्य",
        elevated: "ऊंचा",
        stage1: "उच्च रक्तचाप चरण 1",
        stage2: "उच्च रक्तचाप चरण 2",
        crisis: "उच्च रक्तचाप संकट",
      },
      recommendation: {
        healthy_lifestyle: "नियमित व्यायाम और संतुलित आहार के साथ स्वस्थ जीवनशैली बनाए रखें।",
        lifestyle_changes: "हृदय के लिए अनुकूल जीवनशैली अपनाएं; नियमित रूप से निगरानी करें।",
        consult_doctor: "अपने डॉक्टर से मिलें। जीवनशैली में बदलाव और संभवतः दवाइयां जरूरी हो सकती हैं।",
        see_doctor_soon: "जल्द ही डॉक्टर से मिलें। दवाई आवश्यक होने की संभावना है।",
        emergency_care: "सीने में दर्द, सांस लेने में तकलीफ या दृष्टि में बदलाव जैसे लक्षण होने पर तुरंत आपातकालीन चिकित्सा सहायता लें।",
      },
    },
    errors: {
      systolicOutOfRange: "सिस्टोलिक दबाव 60 से 250 mmHg के बीच होना चाहिए।",
      diastolicOutOfRange: "डायस्टोलिक दबाव 40 से 150 mmHg के बीच होना चाहिए।",
    },
    faq: [
      {
        q: "2017 AHA/ACC दिशानिर्देशों में क्या बदला?",
        a: "उच्च रक्तचाप की सीमा 140/90 से घटाकर 130/80 mmHg कर दी गई। 'प्री-हाइपरटेंशन' श्रेणी को हटाकर 'ऊंचा' (120–129/<80) और 'चरण 1' (130–139 या 80–89) से प्रतिस्थापित किया गया।",
      },
      {
        q: "क्या यह कैलकुलेटर डॉक्टर के मूल्यांकन की जगह ले सकता है?",
        a: "नहीं। यह उपकरण केवल शैक्षिक उद्देश्यों के लिए है। एकल माप निदान के लिए पर्याप्त नहीं है। हमेशा योग्य स्वास्थ्य पेशेवर से परामर्श करें।",
      },
    ],
  },
};

export default i18n;
