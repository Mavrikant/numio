import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Angular Velocity Converter",
    short: "Convert between rad/s, rpm, hertz, and degrees per second",
    description:
      "Convert between angular velocity units including radian per second, revolutions per minute, hertz, and degrees per second with high precision.",
    keywords: ["angular velocity", "rpm", "rad/s", "hertz", "rotational speed"],
    inputs: {
      value: { label: "Value", help: "The length value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
    faq: [
      {
        question: "How do I convert rpm to rad/s?",
        answer:
          "Multiply revolutions per minute by 2π/60 ≈ 0.10472. For example, 60 rpm × 0.10472 ≈ 6.2832 rad/s.",
      },
      {
        question: "How are hertz and rad/s related?",
        answer:
          "One revolution per second (1 Hz) equals 2π rad/s ≈ 6.2832 rad/s, since one full turn is 2π radians.",
      },
      {
        question: "What is the difference between angular velocity and rpm?",
        answer:
          "Angular velocity is the rate of rotation, while rpm (revolutions per minute) is one common unit for it. Both measure how fast something rotates.",
      },
    ],
  },
  tr: {
    title: "Açısal Hız Dönüştürücü",
    short: "rad/s, rpm, hertz ve derece/saniye arasında dönüştürün",
    description:
      "Radyan/saniye, dakikadaki devir, hertz ve derece/saniye dahil açısal hız birimleri arasında yüksek kesinlikle dönüşüm.",
    keywords: ["açısal hız", "rpm", "rad/s", "hertz", "dönme hızı"],
    inputs: {
      value: { label: "Değer", help: "Dönüştürülecek uzunluk değeri" },
      fromUnit: { label: "Kaynak Birim", help: "Kaynak birimi seçin" },
      toUnit: { label: "Hedef Birim", help: "Hedef birimi seçin" },
    },
    outputs: {
      result: { label: "Sonuç", help: "Dönüştürülen değer" },
    },
    faq: [
      {
        question: "rpm'yi rad/s'ye nasıl dönüştürürüm?",
        answer:
          "Dakikadaki devri 2π/60 ≈ 0.10472 ile çarpın. Örneğin, 60 rpm × 0.10472 ≈ 6.2832 rad/s.",
      },
      {
        question: "Hertz ve rad/s nasıl ilişkilidir?",
        answer:
          "Saniyedeki bir devir (1 Hz) 2π rad/s ≈ 6.2832 rad/s'ye eşittir, çünkü bir tam tur 2π radyandır.",
      },
      {
        question: "Açısal hız ile rpm arasındaki fark nedir?",
        answer:
          "Açısal hız dönme oranıdır, rpm (dakikadaki devir) ise onun yaygın bir birimidir. İkisi de bir şeyin ne kadar hızlı döndüğünü ölçer.",
      },
    ],
  },
  de: {
    title: "Winkelgeschwindigkeit-Umrechner",
    short: "Zwischen rad/s, U/min, Hertz und Grad pro Sekunde umrechnen",
    description:
      "Umrechnung zwischen Winkelgeschwindigkeitseinheiten wie Radiant pro Sekunde, Umdrehungen pro Minute, Hertz und Grad pro Sekunde mit hoher Genauigkeit.",
    keywords: ["winkelgeschwindigkeit", "u/min", "rad/s", "hertz", "drehzahl"],
    inputs: {
      value: { label: "Wert", help: "Der umzuwandelnde Längenwert" },
      fromUnit: { label: "Von Einheit", help: "Ausgangseinheit auswählen" },
      toUnit: { label: "Zu Einheit", help: "Zieleinheit auswählen" },
    },
    outputs: {
      result: { label: "Ergebnis", help: "Umgewandelter Wert" },
    },
  },
  fr: {
    title: "Convertisseur de vitesse angulaire",
    short: "Convertir entre rad/s, tr/min, hertz et degrés par seconde",
    description:
      "Conversion entre unités de vitesse angulaire telles que radian par seconde, tours par minute, hertz et degrés par seconde avec haute précision.",
    keywords: [
      "vitesse angulaire",
      "tr/min",
      "rad/s",
      "hertz",
      "vitesse de rotation",
    ],
    inputs: {
      value: { label: "Valeur", help: "La valeur de longueur à convertir" },
      fromUnit: {
        label: "Unité de source",
        help: "Sélectionnez l'unité source",
      },
      toUnit: { label: "Unité cible", help: "Sélectionnez l'unité cible" },
    },
    outputs: {
      result: { label: "Résultat", help: "Valeur convertie" },
    },
  },
  es: {
    title: "Conversor de velocidad angular",
    short: "Convertir entre rad/s, rpm, hercios y grados por segundo",
    description:
      "Conversión entre unidades de velocidad angular como radián por segundo, revoluciones por minuto, hercios y grados por segundo con alta precisión.",
    keywords: [
      "velocidad angular",
      "rpm",
      "rad/s",
      "hercios",
      "velocidad de rotación",
    ],
    inputs: {
      value: { label: "Valor", help: "El valor de longitud a convertir" },
      fromUnit: {
        label: "Unidad de origen",
        help: "Seleccione unidad de origen",
      },
      toUnit: {
        label: "Unidad de destino",
        help: "Seleccione unidad de destino",
      },
    },
    outputs: {
      result: { label: "Resultado", help: "Valor convertido" },
    },
  },
  it: {
    title: "Convertitore di velocità angolare",
    short: "Converti tra rad/s, giri/min, hertz e gradi al secondo",
    description:
      "Conversione tra unità di velocità angolare come radiante al secondo, giri al minuto, hertz e gradi al secondo con alta precisione.",
    keywords: [
      "velocità angolare",
      "giri/min",
      "rad/s",
      "hertz",
      "velocità di rotazione",
    ],
    inputs: {
      value: { label: "Valore", help: "Il valore di lunghezza da convertire" },
      fromUnit: {
        label: "Unità di origine",
        help: "Selezionare unità di origine",
      },
      toUnit: {
        label: "Unità di destinazione",
        help: "Selezionare unità di destinazione",
      },
    },
    outputs: {
      result: { label: "Risultato", help: "Valore convertito" },
    },
  },
  pt: {
    title: "Conversor de velocidade angular",
    short: "Converta entre rad/s, rpm, hertz e graus por segundo",
    description:
      "Conversão entre unidades de velocidade angular como radiano por segundo, rotações por minuto, hertz e graus por segundo com alta precisão.",
    keywords: [
      "velocidade angular",
      "rpm",
      "rad/s",
      "hertz",
      "velocidade de rotação",
    ],
    inputs: {
      value: { label: "Value", help: "The length value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
  },
  id: {
    title: "Konverter Kecepatan Sudut",
    short: "Konversi antara rad/s, rpm, hertz, dan derajat per detik",
    description:
      "Konversi antara satuan kecepatan sudut seperti radian per detik, putaran per menit, hertz, dan derajat per detik dengan presisi tinggi.",
    keywords: ["kecepatan sudut", "rpm", "rad/s", "hertz", "kecepatan rotasi"],
    inputs: {
      value: { label: "Value", help: "The length value to convert" },
      fromUnit: { label: "From Unit", help: "Select source unit" },
      toUnit: { label: "To Unit", help: "Select target unit" },
    },
    outputs: {
      result: { label: "Result", help: "Converted value" },
    },
  },
  ar: {
    title: "محول السرعة الزاوية",
    short: "التحويل بين rad/s و rpm و هرتز ودرجة في الثانية",
    description:
      "تحويل بين وحدات السرعة الزاوية مثل راديان في الثانية ودورة في الدقيقة وهرتز ودرجة في الثانية بدقة عالية.",
    keywords: ["السرعة الزاوية", "rpm", "rad/s", "هرتز", "سرعة الدوران"],
    inputs: {
      value: { label: "القيمة", help: "قيمة الطول المراد تحويلها" },
      fromUnit: { label: "من الوحدة", help: "اختر الوحدة المصدر" },
      toUnit: { label: "إلى الوحدة", help: "اختر الوحدة المستهدفة" },
    },
    outputs: {
      result: { label: "النتيجة", help: "القيمة المحولة" },
    },
  },
  ru: {
    title: "Конвертер угловой скорости",
    short: "Преобразование между рад/с, об/мин, герцами и градусами в секунду",
    description:
      "Преобразование между единицами угловой скорости, такими как радиан в секунду, обороты в минуту, герцы и градусы в секунду с высокой точностью.",
    keywords: [
      "угловая скорость",
      "об/мин",
      "рад/с",
      "герц",
      "скорость вращения",
    ],
    inputs: {
      value: { label: "Значение", help: "Значение длины для преобразования" },
      fromUnit: { label: "От единицы", help: "Выберите исходную единицу" },
      toUnit: { label: "К единице", help: "Выберите целевую единицу" },
    },
    outputs: {
      result: { label: "Результат", help: "Преобразованное значение" },
    },
  },
  zh: {
    title: "角速度转换器",
    short: "在 rad/s、rpm、赫兹和度每秒之间转换",
    description:
      "在角速度单位之间进行高精度转换，包括弧度每秒、每分钟转数、赫兹和度每秒。",
    keywords: ["角速度", "rpm", "rad/s", "赫兹", "转速"],
    inputs: {
      value: { label: "数值", help: "要转换的长度值" },
      fromUnit: { label: "从单位", help: "选择源单位" },
      toUnit: { label: "到单位", help: "选择目标单位" },
    },
    outputs: {
      result: { label: "结果", help: "转换后的值" },
    },
  },
  ja: {
    title: "角速度コンバーター",
    short: "rad/s、rpm、ヘルツ、度毎秒の間で変換",
    description:
      "ラジアン毎秒、毎分回転数、ヘルツ、度毎秒などの角速度の単位間を高精度で変換します。",
    keywords: ["角速度", "rpm", "rad/s", "ヘルツ", "回転速度"],
    inputs: {
      value: { label: "値", help: "変換する長さの値" },
      fromUnit: { label: "から単位", help: "ソース単位を選択" },
      toUnit: { label: "へ単位", help: "ターゲット単位を選択" },
    },
    outputs: {
      result: { label: "結果", help: "変換された値" },
    },
  },
  ko: {
    title: "각속도 변환기",
    short: "rad/s, rpm, 헤르츠, 초당 도 단위 간 변환",
    description:
      "초당 라디안, 분당 회전수, 헤르츠, 초당 도 등 각속도 단위 간의 고정밀 변환.",
    keywords: ["각속도", "rpm", "rad/s", "헤르츠", "회전 속도"],
    inputs: {
      value: { label: "값", help: "변환할 길이 값" },
      fromUnit: { label: "단위에서", help: "소스 단위 선택" },
      toUnit: { label: "단위로", help: "대상 단위 선택" },
    },
    outputs: {
      result: { label: "결과", help: "변환된 값" },
    },
  },
  hi: {
    title: "कोणीय वेग परिवर्तक",
    short: "rad/s, rpm, हर्ट्ज़ और डिग्री प्रति सेकंड के बीच रूपांतरण",
    description:
      "रेडियन प्रति सेकंड, प्रति मिनट चक्कर, हर्ट्ज़ और डिग्री प्रति सेकंड सहित कोणीय वेग इकाइयों के बीच उच्च सटीकता रूपांतरण।",
    keywords: ["कोणीय वेग", "rpm", "rad/s", "हर्ट्ज़", "घूर्णन गति"],
    inputs: {
      value: { label: "मान", help: "रूपांतरण के लिए लंबाई मान" },
      fromUnit: { label: "से इकाई", help: "स्रोत इकाई चुनें" },
      toUnit: { label: "को इकाई", help: "लक्ष्य इकाई चुनें" },
    },
    outputs: {
      result: { label: "परिणाम", help: "रूपांतरित मान" },
    },
  },
};

export default i18n;
