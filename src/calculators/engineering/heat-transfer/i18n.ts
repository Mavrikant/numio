import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Heat Transfer Calculator",
    short: "Calculate heat flux through a thermal resistance.",
    description: "Free heat transfer calculator. Enter temperature difference and thermal resistance to calculate heat flux in Watts, kilowatts, and BTU/h.",
    keywords: ["heat transfer", "thermal resistance", "HVAC", "energy", "building physics"],
    inputs: {
      temperatureDifference: { label: "Temperature Difference", help: "ΔT between hot and cold side (°C)" },
      thermalResistance: { label: "Thermal Resistance", help: "R-value (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "Heat Flux", help: "Heat flow in Watts (Q = ΔT/R)" },
      heatFluxKW: { label: "Heat Flux (kW)", help: "Heat flow in kilowatts" },
      heatFluxBtu: { label: "Heat Flux (BTU/h)", help: "Heat flow in BTU per hour" },
    },
    faq: [
      {
        q: "How is heat flux calculated?",
        a: "Heat flux (Q) is calculated using the formula Q = ΔT / R, where ΔT is the temperature difference in °C (or K) and R is the thermal resistance in m²·K/W. For example, with a 20°C temperature difference and 2.5 m²·K/W thermal resistance, the heat flux is 8 W/m².",
      },
      {
        q: "What is thermal resistance (R-value) in building materials?",
        a: "Thermal resistance, or R-value, measures a material's ability to resist heat flow. A higher R-value means better insulation. Typical R-values include R-13 for fiberglass batt insulation in 2×4 walls, R-30 to R-60 for attic insulation, and R-1 to R-2 per inch for common building materials.",
      },
      {
        q: "How do I convert heat flux from Watts to BTU/h?",
        a: "To convert heat flux from watts to BTU per hour, multiply by 3.412. For example, 1,000 watts equals 3,412 BTU/h. Our calculator automatically displays the result in all three units — Watts, kilowatts, and BTU/h — so you do not need to perform any manual conversions.",
      },
      {
        q: "What is a typical temperature difference for HVAC calculations?",
        a: "For residential HVAC design, common temperature differences are 15-25°C (27-45°F) between indoor and outdoor conditions. In winter heating calculations, a typical ΔT might be 30-40°C assuming -10°C outdoor and 21°C indoor temperatures.",
      },
      {
        q: "How can I calculate heat loss through a wall using this calculator?",
        a: "To calculate heat loss through a wall, determine the wall's total R-value (sum of all layers including insulation, drywall, and siding), measure the indoor-to-outdoor temperature difference (ΔT), and enter both values. The result in Watts tells you the heat loss rate, which is essential for sizing heating equipment.",
      },
    ],
  },
  nl: {
    title: "Warmteoverdracht Calculator",
    short: "Bereken heat flux through a thermal resistance.",
    description: "Gratis heat transfer calculator. Enter temperature difference and thermal resistance to bereken heat flux in Watts, kilowatts, and BTU/h.",
    keywords: ["heat transfer", "thermal resistance", "HVAC", "energy", "building physics"],
    inputs: {
      temperatureDifference: { label: "Temperature Verschilerence", help: "ΔT between hot and cold side (°C)" },
      thermalResistance: { label: "Thermal Resistance", help: "R-value (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "Heat Flux", help: "Heat flow in Watts (Q = ΔT/R)" },
      heatFluxKW: { label: "Heat Flux (kW)", help: "Heat flow in kilowatts" },
      heatFluxBtu: { label: "Heat Flux (BTU/h)", help: "Heat flow in BTU per hour" },
    },
  },

  pl: {
    title: "Przenikanie Ciepła Kalkulator",
    short: "Oblicz heat flux through a thermal resistance.",
    description: "Darmowy heat transfer kalkulator. Enter temperature difference and thermal resistance to oblicz heat flux in Watts, kilowatts, and BTU/h.",
    keywords: ["heat transfer", "thermal resistance", "HVAC", "energy", "building physics"],
    inputs: {
      temperatureDifference: { label: "Temperature Różnicaerence", help: "ΔT between hot and cold side (°C)" },
      thermalResistance: { label: "Thermal Resistance", help: "R-value (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "Heat Flux", help: "Heat flow in Watts (Q = ΔT/R)" },
      heatFluxKW: { label: "Heat Flux (kW)", help: "Heat flow in kilowatts" },
      heatFluxBtu: { label: "Heat Flux (BTU/h)", help: "Heat flow in BTU per hour" },
    },
  },
  pt: {
    title: "Calculadora de Transferência de Calor",
    short: "Calcule a transferência de calor por condução, convecção ou radiação.",
    description: "Calculadora gratuita de transferência de calor. Calcule o fluxo de calor através de paredes, isolamento ou superfícies por condução, convecção e radiação.",
    keywords: ["transferência calor", "condução", "convecção", "radiação térmica", "fluxo calor"],
    inputs: {
      temperatureDifference: { label: "Temperature Difference", help: "ΔT between hot and cold side (°C)" },
      thermalResistance: { label: "Thermal Resistance", help: "R-value (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "Heat Flux", help: "Heat flow in Watts (Q = ΔT/R)" },
      heatFluxKW: { label: "Heat Flux (kW)", help: "Heat flow in kilowatts" },
      heatFluxBtu: { label: "Heat Flux (BTU/h)", help: "Heat flow in BTU per hour" },
    },
  },
  id: {
    title: "Kalkulator Perpindahan Panas",
    short: "Hitung perpindahan panas melalui konduksi, konveksi, atau radiasi.",
    description: "Kalkulator perpindahan panas gratis. Hitung fluks panas melalui dinding, insulasi, atau permukaan secara konduksi, konveksi, dan radiasi.",
    keywords: ["perpindahan panas", "konduksi", "konveksi", "radiasi termal", "fluks panas"],
    inputs: {
      temperatureDifference: { label: "Temperature Difference", help: "ΔT between hot and cold side (°C)" },
      thermalResistance: { label: "Thermal Resistance", help: "R-value (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "Heat Flux", help: "Heat flow in Watts (Q = ΔT/R)" },
      heatFluxKW: { label: "Heat Flux (kW)", help: "Heat flow in kilowatts" },
      heatFluxBtu: { label: "Heat Flux (BTU/h)", help: "Heat flow in BTU per hour" },
    },
  },

  tr: {
    title: "Isı Transferi Hesaplayıcı",
    short: "Isıl direnç boyunca ısı akısını hesaplayın.",
    description: "Ücretsiz ısı transferi hesaplayıcı. Sıcaklık farkı ve ısıl direnci girerek ısı akısını Watt, kilowatt ve BTU/h cinsinden hesaplayın.",
    keywords: ["ısı transferi", "ısıl direnç", "HVAC", "enerji", "bina fiziği"],
    inputs: {
      temperatureDifference: { label: "Sıcaklık Farkı", help: "Sıcak ve soğuk taraf arası ΔT (°C)" },
      thermalResistance: { label: "Isıl Direnç", help: "R-değeri (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "Isı Akısı", help: "Watt cinsinden ısı akışı (Q = ΔT/R)" },
      heatFluxKW: { label: "Isı Akısı (kW)", help: "Kilowatt cinsinden ısı akışı" },
      heatFluxBtu: { label: "Isı Akısı (BTU/h)", help: "Saatte BTU cinsinden ısı akışı" },
    },
  },
  de: {
    title: "Wärmeübertragungsrechner",
    short: "Berechnen Sie den Wärmestrom durch einen thermischen Widerstand.",
    description: "Kostenloser Wärmeübertragungsrechner. Geben Sie Temperaturdifferenz und Wärmewiderstand ein.",
    keywords: ["Wärmeübertragung", "Wärmewiderstand", "HLK", "Energie", "Bauphysik"],
    inputs: {
      temperatureDifference: { label: "Temperaturdifferenz", help: "ΔT zwischen warmer und kalter Seite (°C)" },
      thermalResistance: { label: "Wärmewiderstand", help: "R-Wert (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "Wärmestrom", help: "Wärmefluss in Watt (Q = ΔT/R)" },
      heatFluxKW: { label: "Wärmestrom (kW)", help: "Wärmefluss in Kilowatt" },
      heatFluxBtu: { label: "Wärmestrom (BTU/h)", help: "Wärmefluss in BTU pro Stunde" },
    },
  },
  fr: {
    title: "Calculateur de Transfert de Chaleur",
    short: "Calculez le flux de chaleur à travers une résistance thermique.",
    description: "Calculateur de transfert de chaleur gratuit. Entrez la différence de température et la résistance thermique.",
    keywords: ["transfert de chaleur", "résistance thermique", "CVC", "énergie", "physique du bâtiment"],
    inputs: {
      temperatureDifference: { label: "Différence de Température", help: "ΔT entre côté chaud et froid (°C)" },
      thermalResistance: { label: "Résistance Thermique", help: "Valeur R (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "Flux de Chaleur", help: "Flux thermique en Watts (Q = ΔT/R)" },
      heatFluxKW: { label: "Flux de Chaleur (kW)", help: "Flux thermique en kilowatts" },
      heatFluxBtu: { label: "Flux de Chaleur (BTU/h)", help: "Flux thermique en BTU par heure" },
    },
  },
  es: {
    title: "Calculadora de Transferencia de Calor",
    short: "Calcule el flujo de calor a través de una resistencia térmica.",
    description: "Calculadora de transferencia de calor gratis. Ingrese diferencia de temperatura y resistencia térmica.",
    keywords: ["transferencia de calor", "resistencia térmica", "HVAC", "energía", "física del edificio"],
    inputs: {
      temperatureDifference: { label: "Diferencia de Temperatura", help: "ΔT entre lado caliente y frío (°C)" },
      thermalResistance: { label: "Resistencia Térmica", help: "Valor R (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "Flujo de Calor", help: "Flujo de calor en Watts (Q = ΔT/R)" },
      heatFluxKW: { label: "Flujo de Calor (kW)", help: "Flujo de calor en kilowatts" },
      heatFluxBtu: { label: "Flujo de Calor (BTU/h)", help: "Flujo de calor en BTU por hora" },
    },
  },
  it: {
    title: "Calcolatore Trasferimento di Calore",
    short: "Calcola il flusso di calore attraverso una resistenza termica.",
    description: "Calcolatore di trasferimento di calore gratuito. Inserisci differenza di temperatura e resistenza termica.",
    keywords: ["trasferimento di calore", "resistenza termica", "HVAC", "energia", "fisica dell'edificio"],
    inputs: {
      temperatureDifference: { label: "Differenza di Temperatura", help: "ΔT tra lato caldo e freddo (°C)" },
      thermalResistance: { label: "Resistenza Termica", help: "Valore R (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "Flusso di Calore", help: "Flusso termico in Watt (Q = ΔT/R)" },
      heatFluxKW: { label: "Flusso di Calore (kW)", help: "Flusso termico in kilowatt" },
      heatFluxBtu: { label: "Flusso di Calore (BTU/h)", help: "Flusso termico in BTU per ora" },
    },
  },
  ar: {
    title: "حاسبة انتقال الحرارة",
    short: "احسب التدفق الحراري عبر المقاومة الحرارية.",
    description: "حاسبة انتقال الحرارة مجانية. أدخل فرق درجة الحرارة والمقاومة الحرارية.",
    keywords: ["انتقال الحرارة", "مقاومة حرارية", "تكييف", "طاقة", "فيزياء المباني"],
    inputs: {
      temperatureDifference: { label: "فرق درجة الحرارة", help: "ΔT بين الجانب الساخن والبارد (°C)" },
      thermalResistance: { label: "المقاومة الحرارية", help: "قيمة R (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "التدفق الحراري", help: "التدفق الحراري بالواط (Q = ΔT/R)" },
      heatFluxKW: { label: "التدفق الحراري (kW)", help: "التدفق الحراري بالكيلوواط" },
      heatFluxBtu: { label: "التدفق الحراري (BTU/h)", help: "التدفق الحراري بـ BTU في الساعة" },
    },
  },
  ru: {
    title: "Калькулятор Теплопередачи",
    short: "Рассчитайте тепловой поток через термическое сопротивление.",
    description: "Бесплатный калькулятор теплопередачи. Введите разность температур и термическое сопротивление.",
    keywords: ["теплопередача", "термическое сопротивление", "ОВК", "энергия", "физика здания"],
    inputs: {
      temperatureDifference: { label: "Разность Температур", help: "ΔT между горячей и холодной стороной (°C)" },
      thermalResistance: { label: "Термическое Сопротивление", help: "R-значение (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "Тепловой Поток", help: "Тепловой поток в Ваттах (Q = ΔT/R)" },
      heatFluxKW: { label: "Тепловой Поток (kW)", help: "Тепловой поток в киловаттах" },
      heatFluxBtu: { label: "Тепловой Поток (BTU/h)", help: "Тепловой поток в BTU/час" },
    },
  },
  zh: {
    title: "传热计算器",
    short: "计算通过热阻的热通量。",
    description: "免费传热计算器。输入温差和热阻。",
    keywords: ["传热", "热阻", "暖通空调", "能源", "建筑物理"],
    inputs: {
      temperatureDifference: { label: "温差", help: "热侧和冷侧之间的ΔT（°C）" },
      thermalResistance: { label: "热阻", help: "R值（m²·K/W）" },
    },
    outputs: {
      heatFluxW: { label: "热通量", help: "瓦特单位的热流（Q = ΔT/R）" },
      heatFluxKW: { label: "热通量（kW）", help: "千瓦单位的热流" },
      heatFluxBtu: { label: "热通量（BTU/h）", help: "BTU/小时单位的热流" },
    },
  },
  ja: {
    title: "熱伝達計算機",
    short: "熱抵抗を介した熱流束を計算します。",
    description: "無料熱伝達計算機。温度差と熱抵抗を入力。",
    keywords: ["熱伝達", "熱抵抗", "HVAC", "エネルギー", "建築物理"],
    inputs: {
      temperatureDifference: { label: "温度差", help: "熱い側と冷たい側のΔT（°C）" },
      thermalResistance: { label: "熱抵抗", help: "R値（m²·K/W）" },
    },
    outputs: {
      heatFluxW: { label: "熱流束", help: "ワット単位の熱流（Q = ΔT/R）" },
      heatFluxKW: { label: "熱流束（kW）", help: "キロワット単位の熱流" },
      heatFluxBtu: { label: "熱流束（BTU/h）", help: "BTU/時単位の熱流" },
    },
  },
  ko: {
    title: "열전달 계산기",
    short: "열저항을 통한 열유속을 계산합니다.",
    description: "무료 열전달 계산기. 온도차와 열저항을 입력하세요.",
    keywords: ["열전달", "열저항", "HVAC", "에너지", "건축물리"],
    inputs: {
      temperatureDifference: { label: "온도차", help: "고온측과 저온측 사이 ΔT (°C)" },
      thermalResistance: { label: "열저항", help: "R값 (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "열유속", help: "와트 단위 열유 (Q = ΔT/R)" },
      heatFluxKW: { label: "열유속 (kW)", help: "킬로와트 단위 열유" },
      heatFluxBtu: { label: "열유속 (BTU/h)", help: "BTU/시간 단위 열유" },
    },
  },
  hi: {
    title: "ऊष्मा स्थानांतरण कैलकुलेटर",
    short: "तापीय प्रतिरोध के माध्यम से ऊष्मा प्रवाह की गणना करें।",
    description: "मुफ्त ऊष्मा स्थानांतरण कैलकुलेटर। तापमान अंतर और तापीय प्रतिरोध दर्ज करें।",
    keywords: ["ऊष्मा स्थानांतरण", "तापीय प्रतिरोध", "HVAC", "ऊर्जा", "भवन भौतिकी"],
    inputs: {
      temperatureDifference: { label: "तापमान अंतर", help: "गर्म और ठंडे पक्ष के बीच ΔT (°C)" },
      thermalResistance: { label: "तापीय प्रतिरोध", help: "R-मान (m²·K/W)" },
    },
    outputs: {
      heatFluxW: { label: "ऊष्मा प्रवाह", help: "वाट में ऊष्मा प्रवाह (Q = ΔT/R)" },
      heatFluxKW: { label: "ऊष्मा प्रवाह (kW)", help: "किलोवाट में ऊष्मा प्रवाह" },
      heatFluxBtu: { label: "ऊष्मा प्रवाह (BTU/h)", help: "BTU/घंटा में ऊष्मा प्रवाह" },
    },
  },
};

export default i18n;
