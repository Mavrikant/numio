import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Dipole & Antenna Length Calculator",
    short: "Calculate the physical length of a half-wave dipole, quarter-wave monopole or full-wave loop.",
    description:
      "Free antenna length calculator. Enter a frequency to get the cut length of a half-wave dipole, quarter-wave monopole or full-wave loop, including the velocity factor and per-leg length. Ideal for ham radio and antenna building.",
    keywords: ["dipole length calculator", "antenna length", "half-wave dipole", "quarter-wave monopole", "ham radio antenna", "velocity factor", "resonant length"],
    inputs: {
      frequencyMHz: { label: "Frequency (MHz)", help: "Resonant frequency, e.g. 14.1 for the 20 m amateur band." },
      type: { label: "Antenna type", help: "Half-wave dipole, quarter-wave monopole (needs a ground plane) or full-wave loop." },
      velocityFactorPct: { label: "Velocity factor (%)", help: "Wire shortening factor; ~95% for thin bare wire, lower for insulated/thick wire." },
    },
    outputs: {
      lengthM: { label: "Total length", help: "Overall conductor length (dipole tip-to-tip, loop circumference)." },
      lengthCm: { label: "Total length (cm)" },
      legLengthM: { label: "Each leg / element", help: "For a dipole, the length of one of the two legs (= total / 2)." },
      wavelengthM: { label: "Free-space wavelength", help: "λ = c / f, before the velocity factor." },
    },
    options: {
      type: {
        "half-wave-dipole": "Half-wave dipole (λ/2)",
        "quarter-wave-monopole": "Quarter-wave monopole (λ/4)",
        "full-wave-loop": "Full-wave loop (λ)",
      },
    },
    errors: { nonPositive: "Frequency must be greater than zero." },
    faq: [
      { q: "How long should a half-wave dipole be?", a: "Approximately L(m) = 142.5 / f(MHz) for thin wire (velocity factor ≈ 0.95). For example, at 14.1 MHz a dipole is about 10.1 m tip-to-tip, or ~5.05 m per leg." },
      { q: "What is the velocity factor?", a: "Wire antennas are slightly shorter than the ideal electrical length because of the end effect and the wave travelling a touch slower along the wire. A factor of ~0.95 is typical for bare wire; insulated or thick conductors use a lower value." },
      { q: "Why is a quarter-wave monopole half the length of a dipole?", a: "A monopole over a ground plane mirrors itself electrically, behaving like half of a dipole. So its physical length is λ/4 — half of the λ/2 dipole at the same frequency." },
      { q: "Are these lengths exact?", a: "They are practical starting points. Wire diameter, insulation, height above ground and nearby objects all shift resonance, so cut a little long and trim while measuring SWR." },
    ],
  },
  pt: {
    title: "Calculadora de Comprimento de Antena Dipolo",
    short: "Calcule o comprimento ideal de uma antena dipolo de meia onda.",
    description:
      "Calculadora gratuita de antena dipolo. Calcule o comprimento ideal de uma antena dipolo λ/2 para uma frequência específica.",
    keywords: ["antena dipolo", "λ/2", "antena meia onda", "rádio amador", "calculadora antena"],
    inputs: {
      frequencyMHz: { label: "Frequency (MHz)", help: "Resonant frequency, e.g. 14.1 for the 20 m amateur band." },
      type: { label: "Antenna type", help: "Half-wave dipole, quarter-wave monopole (needs a ground plane) or full-wave loop." },
      velocityFactorPct: { label: "Velocity factor (%)", help: "Wire shortening factor; ~95% for thin bare wire, lower for insulated/thick wire." },
    },
    outputs: {
      lengthM: { label: "Total length", help: "Overall conductor length (dipole tip-to-tip, loop circumference)." },
      lengthCm: { label: "Total length (cm)" },
      legLengthM: { label: "Each leg / element", help: "For a dipole, the length of one of the two legs (= total / 2)." },
      wavelengthM: { label: "Free-space wavelength", help: "λ = c / f, before the velocity factor." },
    },
    options: {
      type: {
        "half-wave-dipole": "Half-wave dipole (λ/2)",
        "quarter-wave-monopole": "Quarter-wave monopole (λ/4)",
        "full-wave-loop": "Full-wave loop (λ)",
      },
    },
    errors: { nonPositive: "Frequency must be greater than zero." },
    faq: [
      { q: "How long should a half-wave dipole be?", a: "Approximately L(m) = 142.5 / f(MHz) for thin wire (velocity factor ≈ 0.95). For example, at 14.1 MHz a dipole is about 10.1 m tip-to-tip, or ~5.05 m per leg." },
      { q: "What is the velocity factor?", a: "Wire antennas are slightly shorter than the ideal electrical length because of the end effect and the wave travelling a touch slower along the wire. A factor of ~0.95 is typical for bare wire; insulated or thick conductors use a lower value." },
      { q: "Why is a quarter-wave monopole half the length of a dipole?", a: "A monopole over a ground plane mirrors itself electrically, behaving like half of a dipole. So its physical length is λ/4 — half of the λ/2 dipole at the same frequency." },
      { q: "Are these lengths exact?", a: "They are practical starting points. Wire diameter, insulation, height above ground and nearby objects all shift resonance, so cut a little long and trim while measuring SWR." },
    ],
  },
  id: {
    title: "Kalkulator Panjang Antena Dipol",
    short: "Hitung panjang ideal antena dipol setengah gelombang.",
    description:
      "Kalkulator antena dipol gratis. Hitung panjang ideal antena dipol λ/2 untuk frekuensi tertentu.",
    keywords: ["antena dipol", "λ/2", "antena setengah gelombang", "radio amatir", "kalkulator antena"],
    inputs: {
      frequencyMHz: { label: "Frequency (MHz)", help: "Resonant frequency, e.g. 14.1 for the 20 m amateur band." },
      type: { label: "Antenna type", help: "Half-wave dipole, quarter-wave monopole (needs a ground plane) or full-wave loop." },
      velocityFactorPct: { label: "Velocity factor (%)", help: "Wire shortening factor; ~95% for thin bare wire, lower for insulated/thick wire." },
    },
    outputs: {
      lengthM: { label: "Total length", help: "Overall conductor length (dipole tip-to-tip, loop circumference)." },
      lengthCm: { label: "Total length (cm)" },
      legLengthM: { label: "Each leg / element", help: "For a dipole, the length of one of the two legs (= total / 2)." },
      wavelengthM: { label: "Free-space wavelength", help: "λ = c / f, before the velocity factor." },
    },
    options: {
      type: {
        "half-wave-dipole": "Half-wave dipole (λ/2)",
        "quarter-wave-monopole": "Quarter-wave monopole (λ/4)",
        "full-wave-loop": "Full-wave loop (λ)",
      },
    },
    errors: { nonPositive: "Frequency must be greater than zero." },
    faq: [
      { q: "How long should a half-wave dipole be?", a: "Approximately L(m) = 142.5 / f(MHz) for thin wire (velocity factor ≈ 0.95). For example, at 14.1 MHz a dipole is about 10.1 m tip-to-tip, or ~5.05 m per leg." },
      { q: "What is the velocity factor?", a: "Wire antennas are slightly shorter than the ideal electrical length because of the end effect and the wave travelling a touch slower along the wire. A factor of ~0.95 is typical for bare wire; insulated or thick conductors use a lower value." },
      { q: "Why is a quarter-wave monopole half the length of a dipole?", a: "A monopole over a ground plane mirrors itself electrically, behaving like half of a dipole. So its physical length is λ/4 — half of the λ/2 dipole at the same frequency." },
      { q: "Are these lengths exact?", a: "They are practical starting points. Wire diameter, insulation, height above ground and nearby objects all shift resonance, so cut a little long and trim while measuring SWR." },
    ],
  },

  tr: {
    title: "Dipol ve Anten Uzunluğu Hesaplayıcı",
    short: "Yarım dalga dipol, çeyrek dalga monopol veya tam dalga halka antenin fiziksel uzunluğunu hesaplayın.",
    description:
      "Ücretsiz anten uzunluğu hesaplayıcı. Bir frekans girerek yarım dalga dipol, çeyrek dalga monopol veya tam dalga halka antenin kesim uzunluğunu, hız faktörü ve bacak başına uzunlukla birlikte elde edin. Amatör telsiz ve anten yapımı için idealdir.",
    keywords: ["dipol uzunluğu hesaplama", "anten uzunluğu", "yarım dalga dipol", "çeyrek dalga monopol", "amatör telsiz anteni", "hız faktörü", "rezonans uzunluğu"],
    inputs: {
      frequencyMHz: { label: "Frekans (MHz)", help: "Rezonans frekansı, örn. 20 m amatör bandı için 14,1." },
      type: { label: "Anten türü", help: "Yarım dalga dipol, çeyrek dalga monopol (toprak düzlemi gerektirir) veya tam dalga halka." },
      velocityFactorPct: { label: "Hız faktörü (%)", help: "Tel kısalma faktörü; ince çıplak tel için ~%95, yalıtımlı/kalın tel için daha düşük." },
    },
    outputs: {
      lengthM: { label: "Toplam uzunluk", help: "Toplam iletken uzunluğu (dipol uçtan uca, halka çevresi)." },
      lengthCm: { label: "Toplam uzunluk (cm)" },
      legLengthM: { label: "Her bacak / eleman", help: "Dipol için iki bacaktan birinin uzunluğu (= toplam / 2)." },
      wavelengthM: { label: "Serbest uzay dalga boyu", help: "Hız faktöründen önce λ = c / f." },
    },
    options: {
      type: {
        "half-wave-dipole": "Yarım dalga dipol (λ/2)",
        "quarter-wave-monopole": "Çeyrek dalga monopol (λ/4)",
        "full-wave-loop": "Tam dalga halka (λ)",
      },
    },
    errors: { nonPositive: "Frekans sıfırdan büyük olmalıdır." },
    faq: [
      { q: "Yarım dalga dipol ne kadar uzun olmalı?", a: "İnce tel için yaklaşık L(m) = 142,5 / f(MHz) (hız faktörü ≈ 0,95). Örneğin 14,1 MHz'de bir dipol uçtan uca yaklaşık 10,1 m, yani bacak başına ~5,05 m'dir." },
      { q: "Hız faktörü nedir?", a: "Tel antenler, uç etkisi ve dalganın tel boyunca biraz daha yavaş ilerlemesi nedeniyle ideal elektriksel uzunluktan biraz kısadır. Çıplak tel için ~0,95 tipiktir; yalıtımlı veya kalın iletkenler daha düşük değer kullanır." },
      { q: "Çeyrek dalga monopol neden dipolün yarısı kadardır?", a: "Toprak düzlemi üzerindeki bir monopol elektriksel olarak kendini yansıtır ve bir dipolün yarısı gibi davranır. Bu yüzden fiziksel uzunluğu λ/4'tür — aynı frekanstaki λ/2 dipolün yarısı." },
      { q: "Bu uzunluklar kesin mi?", a: "Pratik başlangıç noktalarıdır. Tel çapı, yalıtım, yerden yükseklik ve yakındaki nesneler rezonansı kaydırır; bu yüzden biraz uzun kesip SWR ölçerek kısaltın." },
    ],
  },
  de: {
    title: "Dipol- & Antennenlängen-Rechner",
    short: "Berechnen Sie die Länge eines Halbwellendipols, Viertelwellen-Monopols oder Ganzwellen-Loops.",
    description: "Kostenloser Antennenlängen-Rechner. Geben Sie eine Frequenz ein, um die Schnittlänge eines Halbwellendipols, Viertelwellen-Monopols oder Ganzwellen-Loops samt Verkürzungsfaktor und Schenkellänge zu erhalten.",
    keywords: ["Dipollänge Rechner", "Antennenlänge", "Halbwellendipol", "Viertelwellen-Monopol", "Amateurfunk", "Verkürzungsfaktor"],
    inputs: {
      frequencyMHz: { label: "Frequenz (MHz)", help: "Resonanzfrequenz, z. B. 14,1 für das 20-m-Band." },
      type: { label: "Antennentyp", help: "Halbwellendipol, Viertelwellen-Monopol (braucht Massefläche) oder Ganzwellen-Loop." },
      velocityFactorPct: { label: "Verkürzungsfaktor (%)", help: "~95 % für dünnen blanken Draht, niedriger bei isoliertem/dickem Draht." },
    },
    outputs: {
      lengthM: { label: "Gesamtlänge" },
      lengthCm: { label: "Gesamtlänge (cm)" },
      legLengthM: { label: "Je Schenkel / Element" },
      wavelengthM: { label: "Freiraum-Wellenlänge" },
    },
    options: {
      type: {
        "half-wave-dipole": "Halbwellendipol (λ/2)",
        "quarter-wave-monopole": "Viertelwellen-Monopol (λ/4)",
        "full-wave-loop": "Ganzwellen-Loop (λ)",
      },
    },
  },
  fr: {
    title: "Calculateur de Longueur de Dipôle & d'Antenne",
    short: "Calculez la longueur d'un dipôle demi-onde, d'un monopôle quart d'onde ou d'une boucle pleine onde.",
    description: "Calculateur de longueur d'antenne gratuit. Saisissez une fréquence pour obtenir la longueur de coupe d'un dipôle demi-onde, d'un monopôle quart d'onde ou d'une boucle pleine onde, avec le facteur de vélocité et la longueur par brin.",
    keywords: ["calculateur longueur dipôle", "longueur antenne", "dipôle demi-onde", "monopôle quart d'onde", "radioamateur", "facteur de vélocité"],
    inputs: {
      frequencyMHz: { label: "Fréquence (MHz)", help: "Fréquence de résonance, p. ex. 14,1 pour la bande des 20 m." },
      type: { label: "Type d'antenne", help: "Dipôle demi-onde, monopôle quart d'onde (nécessite un plan de masse) ou boucle pleine onde." },
      velocityFactorPct: { label: "Facteur de vélocité (%)", help: "~95 % pour un fil nu fin, plus bas pour un fil isolé/épais." },
    },
    outputs: {
      lengthM: { label: "Longueur totale" },
      lengthCm: { label: "Longueur totale (cm)" },
      legLengthM: { label: "Par brin / élément" },
      wavelengthM: { label: "Longueur d'onde en espace libre" },
    },
    options: {
      type: {
        "half-wave-dipole": "Dipôle demi-onde (λ/2)",
        "quarter-wave-monopole": "Monopôle quart d'onde (λ/4)",
        "full-wave-loop": "Boucle pleine onde (λ)",
      },
    },
  },
  es: {
    title: "Calculadora de Longitud de Dipolo y Antena",
    short: "Calcula la longitud de un dipolo de media onda, un monopolo de cuarto de onda o un lazo de onda completa.",
    description: "Calculadora de longitud de antena gratuita. Introduce una frecuencia para obtener la longitud de corte de un dipolo de media onda, un monopolo de cuarto de onda o un lazo de onda completa, con el factor de velocidad y la longitud por brazo.",
    keywords: ["calculadora longitud dipolo", "longitud antena", "dipolo media onda", "monopolo cuarto de onda", "radioafición", "factor de velocidad"],
    inputs: {
      frequencyMHz: { label: "Frecuencia (MHz)", help: "Frecuencia de resonancia, p. ej. 14,1 para la banda de 20 m." },
      type: { label: "Tipo de antena", help: "Dipolo de media onda, monopolo de cuarto de onda (requiere plano de tierra) o lazo de onda completa." },
      velocityFactorPct: { label: "Factor de velocidad (%)", help: "~95 % para hilo desnudo fino, menor para hilo aislado/grueso." },
    },
    outputs: {
      lengthM: { label: "Longitud total" },
      lengthCm: { label: "Longitud total (cm)" },
      legLengthM: { label: "Por brazo / elemento" },
      wavelengthM: { label: "Longitud de onda en espacio libre" },
    },
    options: {
      type: {
        "half-wave-dipole": "Dipolo de media onda (λ/2)",
        "quarter-wave-monopole": "Monopolo de cuarto de onda (λ/4)",
        "full-wave-loop": "Lazo de onda completa (λ)",
      },
    },
  },
  it: {
    title: "Calcolatore di Lunghezza di Dipolo e Antenna",
    short: "Calcola la lunghezza di un dipolo a mezz'onda, un monopolo a quarto d'onda o un loop a onda intera.",
    description: "Calcolatore di lunghezza antenna gratuito. Inserisci una frequenza per ottenere la lunghezza di taglio di un dipolo a mezz'onda, un monopolo a quarto d'onda o un loop a onda intera, con fattore di velocità e lunghezza per braccio.",
    keywords: ["calcolatore lunghezza dipolo", "lunghezza antenna", "dipolo mezz'onda", "monopolo quarto d'onda", "radioamatore", "fattore di velocità"],
    inputs: {
      frequencyMHz: { label: "Frequenza (MHz)", help: "Frequenza di risonanza, es. 14,1 per la banda dei 20 m." },
      type: { label: "Tipo di antenna", help: "Dipolo a mezz'onda, monopolo a quarto d'onda (richiede piano di terra) o loop a onda intera." },
      velocityFactorPct: { label: "Fattore di velocità (%)", help: "~95 % per filo nudo sottile, inferiore per filo isolato/spesso." },
    },
    outputs: {
      lengthM: { label: "Lunghezza totale" },
      lengthCm: { label: "Lunghezza totale (cm)" },
      legLengthM: { label: "Per braccio / elemento" },
      wavelengthM: { label: "Lunghezza d'onda in spazio libero" },
    },
    options: {
      type: {
        "half-wave-dipole": "Dipolo a mezz'onda (λ/2)",
        "quarter-wave-monopole": "Monopolo a quarto d'onda (λ/4)",
        "full-wave-loop": "Loop a onda intera (λ)",
      },
    },
  },
  ar: {
    title: "حاسبة طول الهوائي ثنائي القطب",
    short: "احسب الطول الفيزيائي لهوائي ثنائي القطب نصف الموجة أو أحادي القطب ربع الموجة أو حلقة الموجة الكاملة.",
    description: "حاسبة طول هوائي مجانية. أدخل التردد للحصول على طول قطع هوائي ثنائي القطب نصف الموجة أو أحادي القطب ربع الموجة أو حلقة الموجة الكاملة، مع عامل السرعة وطول كل ساق.",
    keywords: ["حاسبة طول ثنائي القطب", "طول الهوائي", "ثنائي القطب نصف الموجة", "أحادي القطب ربع الموجة", "راديو الهواة", "عامل السرعة"],
    inputs: {
      frequencyMHz: { label: "التردد (ميجاهرتز)", help: "تردد الرنين، مثل 14.1 لنطاق 20 متر." },
      type: { label: "نوع الهوائي", help: "ثنائي القطب نصف الموجة، أحادي القطب ربع الموجة (يحتاج مستوى أرضي) أو حلقة الموجة الكاملة." },
      velocityFactorPct: { label: "عامل السرعة (%)", help: "نحو 95% للسلك العاري الرفيع، أقل للسلك المعزول/السميك." },
    },
    outputs: {
      lengthM: { label: "الطول الإجمالي" },
      lengthCm: { label: "الطول الإجمالي (سم)" },
      legLengthM: { label: "لكل ساق / عنصر" },
      wavelengthM: { label: "الطول الموجي في الفضاء الحر" },
    },
    options: {
      type: {
        "half-wave-dipole": "ثنائي القطب نصف الموجة (λ/2)",
        "quarter-wave-monopole": "أحادي القطب ربع الموجة (λ/4)",
        "full-wave-loop": "حلقة الموجة الكاملة (λ)",
      },
    },
  },
  ru: {
    title: "Калькулятор Длины Диполя и Антенны",
    short: "Рассчитайте длину полуволнового диполя, четвертьволнового монополя или полноволновой рамки.",
    description: "Бесплатный калькулятор длины антенны. Введите частоту, чтобы получить длину полуволнового диполя, четвертьволнового монополя или полноволновой рамки с учётом коэффициента укорочения и длины плеча.",
    keywords: ["калькулятор длины диполя", "длина антенны", "полуволновой диполь", "четвертьволновой монополь", "радиолюбитель", "коэффициент укорочения"],
    inputs: {
      frequencyMHz: { label: "Частота (МГц)", help: "Резонансная частота, напр. 14,1 для диапазона 20 м." },
      type: { label: "Тип антенны", help: "Полуволновой диполь, четвертьволновой монополь (нужна земля) или полноволновая рамка." },
      velocityFactorPct: { label: "Коэффициент укорочения (%)", help: "~95% для тонкого голого провода, ниже для изолированного/толстого." },
    },
    outputs: {
      lengthM: { label: "Общая длина" },
      lengthCm: { label: "Общая длина (см)" },
      legLengthM: { label: "На плечо / элемент" },
      wavelengthM: { label: "Длина волны в свободном пространстве" },
    },
    options: {
      type: {
        "half-wave-dipole": "Полуволновой диполь (λ/2)",
        "quarter-wave-monopole": "Четвертьволновой монополь (λ/4)",
        "full-wave-loop": "Полноволновая рамка (λ)",
      },
    },
  },
  zh: {
    title: "偶极子与天线长度计算器",
    short: "计算半波偶极子、四分之一波单极子或全波环天线的物理长度。",
    description: "免费的天线长度计算器。输入频率即可得到半波偶极子、四分之一波单极子或全波环的剪裁长度，包含速度因子和每臂长度。",
    keywords: ["偶极子长度计算器", "天线长度", "半波偶极子", "四分之一波单极子", "业余无线电", "速度因子"],
    inputs: {
      frequencyMHz: { label: "频率 (MHz)", help: "谐振频率，例如 20 m 业余频段为 14.1。" },
      type: { label: "天线类型", help: "半波偶极子、四分之一波单极子（需要地平面）或全波环。" },
      velocityFactorPct: { label: "速度因子 (%)", help: "细裸线约 95%，绝缘/粗线更低。" },
    },
    outputs: {
      lengthM: { label: "总长度" },
      lengthCm: { label: "总长度 (cm)" },
      legLengthM: { label: "每臂 / 单元" },
      wavelengthM: { label: "自由空间波长" },
    },
    options: {
      type: {
        "half-wave-dipole": "半波偶极子 (λ/2)",
        "quarter-wave-monopole": "四分之一波单极子 (λ/4)",
        "full-wave-loop": "全波环 (λ)",
      },
    },
  },
  ja: {
    title: "ダイポール・アンテナ長さ計算機",
    short: "半波長ダイポール、1/4波長モノポール、または全波長ループの物理的長さを計算します。",
    description: "無料のアンテナ長さ計算機。周波数を入力すると、半波長ダイポール、1/4波長モノポール、全波長ループのカット長を、速度係数とエレメントごとの長さとともに求めます。",
    keywords: ["ダイポール長さ計算", "アンテナ長さ", "半波長ダイポール", "1/4波長モノポール", "アマチュア無線", "速度係数"],
    inputs: {
      frequencyMHz: { label: "周波数 (MHz)", help: "共振周波数。例: 20 m バンドなら 14.1。" },
      type: { label: "アンテナの種類", help: "半波長ダイポール、1/4波長モノポール（接地面が必要）、または全波長ループ。" },
      velocityFactorPct: { label: "速度係数 (%)", help: "細い裸線で約 95%、絶縁/太い線ではより低い。" },
    },
    outputs: {
      lengthM: { label: "全長" },
      lengthCm: { label: "全長 (cm)" },
      legLengthM: { label: "片側エレメント" },
      wavelengthM: { label: "自由空間波長" },
    },
    options: {
      type: {
        "half-wave-dipole": "半波長ダイポール (λ/2)",
        "quarter-wave-monopole": "1/4波長モノポール (λ/4)",
        "full-wave-loop": "全波長ループ (λ)",
      },
    },
  },
  ko: {
    title: "다이폴 및 안테나 길이 계산기",
    short: "반파장 다이폴, 1/4파장 모노폴 또는 전파장 루프의 물리적 길이를 계산합니다.",
    description: "무료 안테나 길이 계산기. 주파수를 입력하면 반파장 다이폴, 1/4파장 모노폴 또는 전파장 루프의 절단 길이를 속도 계수와 다리별 길이와 함께 구할 수 있습니다.",
    keywords: ["다이폴 길이 계산기", "안테나 길이", "반파장 다이폴", "1/4파장 모노폴", "아마추어 무선", "속도 계수"],
    inputs: {
      frequencyMHz: { label: "주파수 (MHz)", help: "공진 주파수. 예: 20 m 밴드는 14.1." },
      type: { label: "안테나 종류", help: "반파장 다이폴, 1/4파장 모노폴(접지면 필요) 또는 전파장 루프." },
      velocityFactorPct: { label: "속도 계수 (%)", help: "가는 나선은 약 95%, 절연/굵은 선은 더 낮음." },
    },
    outputs: {
      lengthM: { label: "전체 길이" },
      lengthCm: { label: "전체 길이 (cm)" },
      legLengthM: { label: "다리 / 엘리먼트당" },
      wavelengthM: { label: "자유 공간 파장" },
    },
    options: {
      type: {
        "half-wave-dipole": "반파장 다이폴 (λ/2)",
        "quarter-wave-monopole": "1/4파장 모노폴 (λ/4)",
        "full-wave-loop": "전파장 루프 (λ)",
      },
    },
  },
  hi: {
    title: "द्विध्रुव और एंटीना लंबाई कैलकुलेटर",
    short: "अर्ध-तरंग द्विध्रुव, चौथाई-तरंग एकध्रुव या पूर्ण-तरंग लूप की भौतिक लंबाई की गणना करें।",
    description: "मुफ्त एंटीना लंबाई कैलकुलेटर। एक आवृत्ति दर्ज करें और अर्ध-तरंग द्विध्रुव, चौथाई-तरंग एकध्रुव या पूर्ण-तरंग लूप की कटाई लंबाई, वेग कारक और प्रति-भुजा लंबाई सहित पाएं।",
    keywords: ["द्विध्रुव लंबाई कैलकुलेटर", "एंटीना लंबाई", "अर्ध-तरंग द्विध्रुव", "चौथाई-तरंग एकध्रुव", "हैम रेडियो", "वेग कारक"],
    inputs: {
      frequencyMHz: { label: "आवृत्ति (MHz)", help: "अनुनाद आवृत्ति, जैसे 20 m बैंड के लिए 14.1।" },
      type: { label: "एंटीना प्रकार", help: "अर्ध-तरंग द्विध्रुव, चौथाई-तरंग एकध्रुव (ग्राउंड प्लेन आवश्यक) या पूर्ण-तरंग लूप।" },
      velocityFactorPct: { label: "वेग कारक (%)", help: "पतले नंगे तार के लिए ~95%, इंसुलेटेड/मोटे तार के लिए कम।" },
    },
    outputs: {
      lengthM: { label: "कुल लंबाई" },
      lengthCm: { label: "कुल लंबाई (cm)" },
      legLengthM: { label: "प्रति भुजा / तत्व" },
      wavelengthM: { label: "मुक्त-अंतरिक्ष तरंगदैर्ध्य" },
    },
    options: {
      type: {
        "half-wave-dipole": "अर्ध-तरंग द्विध्रुव (λ/2)",
        "quarter-wave-monopole": "चौथाई-तरंग एकध्रुव (λ/4)",
        "full-wave-loop": "पूर्ण-तरंग लूप (λ)",
      },
    },
  },
};

export default i18n;
