import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Electrical Power Calculator",
    short: "Calculate voltage, current, resistance, and power consumption with energy cost estimation.",
    description:
      "Electrical power calculator for P=VI calculations. Find V, I, R, P from any two inputs. Estimate energy consumption and monthly costs.",
    keywords: [
      "power calculator",
      "voltage current",
      "resistance calculator",
      "electrical power",
      "Ohm's law",
      "energy cost",
      "wattage",
    ],
    inputs: {
      knownQty1: {
        label: "First Known Quantity",
        help: "Choose voltage, current, resistance, or power.",
      },
      value1: {
        label: "Value",
        help: "Enter the numerical value.",
      },
      knownQty2: {
        label: "Second Known Quantity",
        help: "Must be different from the first.",
      },
      value2: {
        label: "Value",
        help: "Enter the numerical value.",
      },
    },
    outputs: {
      voltage: {
        label: "Voltage",
        help: "Electric potential difference in volts (V).",
      },
      current: {
        label: "Current",
        help: "Electric current in amperes (A).",
      },
      resistance: {
        label: "Resistance",
        help: "Electrical resistance in ohms (Ω).",
      },
      power: {
        label: "Power",
        help: "Electrical power in watts (W).",
      },
      energy24h: {
        label: "Daily Energy",
        help: "Energy consumed in 24 hours (kWh).",
      },
      energy30d: {
        label: "Monthly Energy",
        help: "Energy consumed in 30 days (kWh).",
      },
      costPerMonth: {
        label: "Monthly Cost",
        help: "Estimated cost based on average US rate ($0.15/kWh).",
      },
    },
    options: {
      voltage: "Voltage (V)",
      current: "Current (A)",
      resistance: "Resistance (Ω)",
      power: "Power (W)",
    },
    errors: {
      differentQuantities: "The two known quantities must be different.",
      voltageRequired: "Voltage cannot be zero.",
    },
    faq: [
      {
        q: "What is power in electrical circuits?",
        a: "Power (P) is the rate of energy transfer, measured in watts (W). It represents how much electrical energy is used per unit time. P = V × I (voltage times current).",
      },
      {
        q: "How is monthly electricity cost calculated?",
        a: "Cost = Power (kW) × Time (hours) × Rate ($/kWh). This calculator uses the US average rate of $0.15/kWh. Your actual rate may vary by location and utility company.",
      },
      {
        q: "What's the difference between watts and watt-hours?",
        a: "Watts measure instantaneous power (rate of energy use). Watt-hours (Wh) measure total energy consumed over time. 1 kilowatt-hour (kWh) = 1000 W × 1 hour.",
      },
      {
        q: "Can I calculate power from resistance and voltage?",
        a: "Yes. P = V² / R (voltage squared divided by resistance) gives power when you know voltage and resistance.",
      },
      {
        q: "How do I reduce my electricity bill?",
        a: "Use more efficient appliances (LED bulbs, ENERGY STAR devices), reduce idle consumption, use power strips, and monitor high-power devices like air conditioners and heaters.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Potência Elétrica",
    short: "Calcule a potência elétrica em circuitos DC e AC, monofásicos e trifásicos.",
    description:
      "Calculadora gratuita de potência elétrica. Calcule P = V·I em DC, P = V·I·cos φ em AC monofásica e trifásica.",
    keywords: ["potência elétrica", "P=VI", "potência trifásica", "watts", "potência AC"],
    inputs: {
      knownQty1: {
        label: "First Known Quantity",
        help: "Choose voltage, current, resistance, or power.",
      },
      value1: {
        label: "Value",
        help: "Enter the numerical value.",
      },
      knownQty2: {
        label: "Second Known Quantity",
        help: "Must be different from the first.",
      },
      value2: {
        label: "Value",
        help: "Enter the numerical value.",
      },
    },
    outputs: {
      voltage: {
        label: "Voltage",
        help: "Electric potential difference in volts (V).",
      },
      current: {
        label: "Current",
        help: "Electric current in amperes (A).",
      },
      resistance: {
        label: "Resistance",
        help: "Electrical resistance in ohms (Ω).",
      },
      power: {
        label: "Power",
        help: "Electrical power in watts (W).",
      },
      energy24h: {
        label: "Daily Energy",
        help: "Energy consumed in 24 hours (kWh).",
      },
      energy30d: {
        label: "Monthly Energy",
        help: "Energy consumed in 30 days (kWh).",
      },
      costPerMonth: {
        label: "Monthly Cost",
        help: "Estimated cost based on average US rate ($0.15/kWh).",
      },
    },
    options: {
      voltage: "Voltage (V)",
      current: "Current (A)",
      resistance: "Resistance (Ω)",
      power: "Power (W)",
    },
    errors: {
      differentQuantities: "The two known quantities must be different.",
      voltageRequired: "Voltage cannot be zero.",
    },
    faq: [
      {
        q: "What is power in electrical circuits?",
        a: "Power (P) is the rate of energy transfer, measured in watts (W). It represents how much electrical energy is used per unit time. P = V × I (voltage times current).",
      },
      {
        q: "How is monthly electricity cost calculated?",
        a: "Cost = Power (kW) × Time (hours) × Rate ($/kWh). This calculator uses the US average rate of $0.15/kWh. Your actual rate may vary by location and utility company.",
      },
      {
        q: "What's the difference between watts and watt-hours?",
        a: "Watts measure instantaneous power (rate of energy use). Watt-hours (Wh) measure total energy consumed over time. 1 kilowatt-hour (kWh) = 1000 W × 1 hour.",
      },
      {
        q: "Can I calculate power from resistance and voltage?",
        a: "Yes. P = V² / R (voltage squared divided by resistance) gives power when you know voltage and resistance.",
      },
      {
        q: "How do I reduce my electricity bill?",
        a: "Use more efficient appliances (LED bulbs, ENERGY STAR devices), reduce idle consumption, use power strips, and monitor high-power devices like air conditioners and heaters.",
      },
    ],
  },
  id: {
    title: "Kalkulator Daya Listrik",
    short: "Hitung daya listrik di rangkaian DC dan AC, satu fasa dan tiga fasa.",
    description:
      "Kalkulator daya listrik gratis. Hitung P = V·I di DC, P = V·I·cos φ di AC satu fasa dan tiga fasa.",
    keywords: ["daya listrik", "P=VI", "daya tiga fasa", "watt", "daya AC"],
    inputs: {
      knownQty1: {
        label: "First Known Quantity",
        help: "Choose voltage, current, resistance, or power.",
      },
      value1: {
        label: "Value",
        help: "Enter the numerical value.",
      },
      knownQty2: {
        label: "Second Known Quantity",
        help: "Must be different from the first.",
      },
      value2: {
        label: "Value",
        help: "Enter the numerical value.",
      },
    },
    outputs: {
      voltage: {
        label: "Voltage",
        help: "Electric potential difference in volts (V).",
      },
      current: {
        label: "Current",
        help: "Electric current in amperes (A).",
      },
      resistance: {
        label: "Resistance",
        help: "Electrical resistance in ohms (Ω).",
      },
      power: {
        label: "Power",
        help: "Electrical power in watts (W).",
      },
      energy24h: {
        label: "Daily Energy",
        help: "Energy consumed in 24 hours (kWh).",
      },
      energy30d: {
        label: "Monthly Energy",
        help: "Energy consumed in 30 days (kWh).",
      },
      costPerMonth: {
        label: "Monthly Cost",
        help: "Estimated cost based on average US rate ($0.15/kWh).",
      },
    },
    options: {
      voltage: "Voltage (V)",
      current: "Current (A)",
      resistance: "Resistance (Ω)",
      power: "Power (W)",
    },
    errors: {
      differentQuantities: "The two known quantities must be different.",
      voltageRequired: "Voltage cannot be zero.",
    },
    faq: [
      {
        q: "What is power in electrical circuits?",
        a: "Power (P) is the rate of energy transfer, measured in watts (W). It represents how much electrical energy is used per unit time. P = V × I (voltage times current).",
      },
      {
        q: "How is monthly electricity cost calculated?",
        a: "Cost = Power (kW) × Time (hours) × Rate ($/kWh). This calculator uses the US average rate of $0.15/kWh. Your actual rate may vary by location and utility company.",
      },
      {
        q: "What's the difference between watts and watt-hours?",
        a: "Watts measure instantaneous power (rate of energy use). Watt-hours (Wh) measure total energy consumed over time. 1 kilowatt-hour (kWh) = 1000 W × 1 hour.",
      },
      {
        q: "Can I calculate power from resistance and voltage?",
        a: "Yes. P = V² / R (voltage squared divided by resistance) gives power when you know voltage and resistance.",
      },
      {
        q: "How do I reduce my electricity bill?",
        a: "Use more efficient appliances (LED bulbs, ENERGY STAR devices), reduce idle consumption, use power strips, and monitor high-power devices like air conditioners and heaters.",
      },
    ],
  },


  tr: {
    title: "Elektrik Gücü Hesaplayıcısı",
    short: "Gerilim, akım, direnç ve güç tüketimini enerji maliyeti tahmini ile hesaplayın.",
    description:
      "P=VI hesaplamaları için elektrik gücü hesaplayıcısı. Herhangi iki girdiden V, I, R, P'yi bulun. Enerji tüketimi ve aylık maliyetleri tahmin edin.",
    keywords: [
      "güç hesaplayıcı",
      "gerilim akım",
      "direnç hesaplayıcısı",
      "elektrik gücü",
      "Ohm yasası",
      "enerji maliyeti",
      "watt",
    ],
    inputs: {
      knownQty1: {
        label: "Birinci Bilinen Nicelik",
        help: "Gerilim, akım, direnç veya güç seçin.",
      },
      value1: {
        label: "Değer",
        help: "Sayısal değer girin.",
      },
      knownQty2: {
        label: "İkinci Bilinen Nicelik",
        help: "Birinciden farklı olmalıdır.",
      },
      value2: {
        label: "Değer",
        help: "Sayısal değer girin.",
      },
    },
    outputs: {
      voltage: {
        label: "Gerilim",
        help: "Volt (V) cinsinden elektrik potansiyel farkı.",
      },
      current: {
        label: "Akım",
        help: "Amper (A) cinsinden elektrik akımı.",
      },
      resistance: {
        label: "Direnç",
        help: "Ohm (Ω) cinsinden elektrik direnci.",
      },
      power: {
        label: "Güç",
        help: "Watt (W) cinsinden elektrik gücü.",
      },
      energy24h: {
        label: "Günlük Enerji",
        help: "24 saatte tüketilen enerji (kWh).",
      },
      energy30d: {
        label: "Aylık Enerji",
        help: "30 günde tüketilen enerji (kWh).",
      },
      costPerMonth: {
        label: "Aylık Maliyet",
        help: "Ortalama ABD oranına ($0,15/kWh) dayalı tahmini maliyet.",
      },
    },
    options: {
      voltage: "Gerilim (V)",
      current: "Akım (A)",
      resistance: "Direnç (Ω)",
      power: "Güç (W)",
    },
    errors: {
      differentQuantities: "İki bilinen nicelik farklı olmalıdır.",
      voltageRequired: "Gerilim sıfır olamaz.",
    },
    faq: [
      {
        q: "Elektrik devrelerinde güç nedir?",
        a: "Güç (P), enerji transfer hızıdır, watt (W) cinsinden ölçülür. P = V × I (gerilim çarpı akım) formülü ile hesaplanır.",
      },
      {
        q: "Aylık elektrik maliyeti nasıl hesaplanır?",
        a: "Maliyet = Güç (kW) × Zaman (saat) × Oran ($/kWh). Bu hesaplayıcı ABD ortalama oranı olan $0,15/kWh kullanır. Gerçek oran, bölgeye ve elektrik şirketine göre değişebilir.",
      },
      {
        q: "Watt ile watt-saat arasındaki fark nedir?",
        a: "Watt anlık gücü (enerji kullanım hızı) ölçer. Watt-saat (Wh) belirli bir zaman diliminde tüketilen toplam enerji ölçer. 1 kilowatt-saat (kWh) = 1000 W × 1 saat.",
      },
      {
        q: "Direnç ve gerilimden gücü hesaplayabilir miyim?",
        a: "Evet. P = V² / R (gerilim karesi bölü direnç) formülü ile gerilim ve direnci bildiğinizde gücü bulabilirsiniz.",
      },
      {
        q: "Elektrik faturasını nasıl azaltabilirim?",
        a: "Daha verimli cihazlar kullanın (LED ampuller, enerji tasarruflu cihazlar), boşta tüketimi azaltın, güç şeritleri kullanın ve klima gibi yüksek güç tüketimi cihazlarını izleyin.",
      },
    ],
  },

  de: {
    title: "Stromrechner",
    short: "Berechnen Sie Spannung, Strom, Widerstand und Stromverbrauch mit Energiekostenschätzung.",
    description:
      "Stromrechner für P=VI-Berechnungen. Finden Sie V, I, R, P aus zwei beliebigen Eingaben. Schätzen Sie Stromverbrauch und monatliche Kosten.",
    keywords: [
      "Stromrechner",
      "Spannung Strom",
      "Widerstands-Rechner",
      "elektrische Leistung",
      "Ohmsches Gesetz",
      "Stromkosten",
      "Wattage",
    ],
    inputs: {
      knownQty1: {
        label: "Erste bekannte Größe",
        help: "Wählen Sie Spannung, Strom, Widerstand oder Leistung.",
      },
      value1: {
        label: "Wert",
        help: "Geben Sie den numerischen Wert ein.",
      },
      knownQty2: {
        label: "Zweite bekannte Größe",
        help: "Muss sich von der ersten unterscheiden.",
      },
      value2: {
        label: "Wert",
        help: "Geben Sie den numerischen Wert ein.",
      },
    },
    outputs: {
      voltage: {
        label: "Spannung",
        help: "Elektrische Potentialdifferenz in Volt (V).",
      },
      current: {
        label: "Strom",
        help: "Elektrischer Strom in Ampere (A).",
      },
      resistance: {
        label: "Widerstand",
        help: "Elektrischer Widerstand in Ohm (Ω).",
      },
      power: {
        label: "Leistung",
        help: "Elektrische Leistung in Watt (W).",
      },
      energy24h: {
        label: "Tägliche Energie",
        help: "In 24 Stunden verbrauchte Energie (kWh).",
      },
      energy30d: {
        label: "Monatliche Energie",
        help: "In 30 Tagen verbrauchte Energie (kWh).",
      },
      costPerMonth: {
        label: "Monatliche Kosten",
        help: "Geschätzte Kosten basierend auf US-Durchschnittssatz ($0,15/kWh).",
      },
    },
    options: {
      voltage: "Spannung (V)",
      current: "Strom (A)",
      resistance: "Widerstand (Ω)",
      power: "Leistung (W)",
    },
    errors: {
      differentQuantities: "Die beiden bekannten Größen müssen unterschiedlich sein.",
      voltageRequired: "Die Spannung kann nicht null sein.",
    },
    faq: [
      {
        q: "Was ist Leistung in Stromkreisen?",
        a: "Leistung (P) ist die Energieübertragungsrate, gemessen in Watt (W). Sie gibt an, wie viel Energie pro Zeiteinheit verbraucht wird. P = V × I.",
      },
      {
        q: "Wie werden monatliche Stromkosten berechnet?",
        a: "Kosten = Leistung (kW) × Zeit (Stunden) × Tarif ($/kWh). Dieser Rechner verwendet den US-Durchschnittssatz von $0,15/kWh.",
      },
      {
        q: "Was ist der Unterschied zwischen Watt und Wattstunden?",
        a: "Watt messen Momentanleistung. Wattstunden (Wh) messen Gesamtenergie über Zeit. 1 Kilowattstunde = 1000 W × 1 Stunde.",
      },
      {
        q: "Kann ich Leistung aus Widerstand und Spannung berechnen?",
        a: "Ja. P = V² / R gibt die Leistung an, wenn Sie Spannung und Widerstand kennen.",
      },
      {
        q: "Wie kann ich meine Stromrechnung senken?",
        a: "Nutzen Sie effizientere Geräte (LED-Lampen, ENERGY STAR-Geräte), reduzieren Sie den Leerlaufverbrauch und überwachen Sie Hochleistungsgeräte.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Puissance Électrique",
    short: "Calculez la tension, le courant, la résistance et la consommation d'énergie avec estimation des coûts énergétiques.",
    description:
      "Calculateur de puissance électrique pour les calculs P=VI. Trouvez V, I, R, P à partir de deux entrées quelconques. Estimez la consommation énergétique et les coûts mensuels.",
    keywords: [
      "calculateur de puissance",
      "tension courant",
      "calculateur de résistance",
      "puissance électrique",
      "loi d'Ohm",
      "coût énergétique",
      "wattage",
    ],
    inputs: {
      knownQty1: { label: "Première Quantité Connue", help: "Choisissez tension, courant, résistance ou puissance." },
      value1: { label: "Valeur", help: "Entrez la valeur numérique." },
      knownQty2: { label: "Deuxième Quantité Connue", help: "Doit être différente de la première." },
      value2: { label: "Valeur", help: "Entrez la valeur numérique." },
    },
    outputs: {
      voltage: { label: "Tension", help: "Différence de potentiel électrique en volts (V)." },
      current: { label: "Courant", help: "Courant électrique en ampères (A)." },
      resistance: { label: "Résistance", help: "Résistance électrique en ohms (Ω)." },
      power: { label: "Puissance", help: "Puissance électrique en watts (W)." },
      energy24h: { label: "Énergie Quotidienne", help: "Énergie consommée en 24 heures (kWh)." },
      energy30d: { label: "Énergie Mensuelle", help: "Énergie consommée en 30 jours (kWh)." },
      costPerMonth: { label: "Coût Mensuel", help: "Coût estimé basé sur le tarif moyen américain ($0,15/kWh)." },
    },
    options: {
      voltage: "Tension (V)",
      current: "Courant (A)",
      resistance: "Résistance (Ω)",
      power: "Puissance (W)",
    },
    errors: {
      differentQuantities: "Les deux quantités connues doivent être différentes.",
      voltageRequired: "La tension ne peut pas être zéro.",
    },
    faq: [
      {
        q: "Qu'est-ce que la puissance dans un circuit électrique?",
        a: "La puissance (P) est le taux de transfert d'énergie, mesurée en watts (W). P = V × I (tension × courant).",
      },
      {
        q: "Comment les coûts mensuels d'électricité sont-ils calculés?",
        a: "Coût = Puissance (kW) × Temps (heures) × Tarif ($/kWh). Cela utilise le tarif moyen américain de $0,15/kWh.",
      },
      {
        q: "Quelle est la différence entre watts et wattheures?",
        a: "Les watts mesurent la puissance instantanée. Les wattheures mesurent l'énergie consommée au fil du temps.",
      },
      {
        q: "Puis-je calculer la puissance à partir de la résistance et de la tension?",
        a: "Oui. P = V² / R donne la puissance quand vous connaissez la tension et la résistance.",
      },
      {
        q: "Comment réduire ma facture d'électricité?",
        a: "Utilisez des appareils plus efficaces, réduisez la consommation inactive, utilisez des multiprises et surveillez les appareils à forte puissance.",
      },
    ],
  },

  es: {
    title: "Calculadora de Potencia Eléctrica",
    short: "Calcula voltaje, corriente, resistencia y consumo de energía con estimación de costos.",
    description:
      "Calculadora de potencia eléctrica para cálculos P=VI. Encuentra V, I, R, P desde dos entradas cualesquiera. Estima consumo de energía y costos mensuales.",
    keywords: [
      "calculadora de potencia",
      "voltaje corriente",
      "calculadora de resistencia",
      "potencia eléctrica",
      "ley de Ohm",
      "costo energético",
      "wattaje",
    ],
    inputs: {
      knownQty1: { label: "Primera Cantidad Conocida", help: "Elige voltaje, corriente, resistencia o potencia." },
      value1: { label: "Valor", help: "Ingresa el valor numérico." },
      knownQty2: { label: "Segunda Cantidad Conocida", help: "Debe ser diferente de la primera." },
      value2: { label: "Valor", help: "Ingresa el valor numérico." },
    },
    outputs: {
      voltage: { label: "Voltaje", help: "Diferencia de potencial eléctrico en voltios (V)." },
      current: { label: "Corriente", help: "Corriente eléctrica en amperios (A)." },
      resistance: { label: "Resistencia", help: "Resistencia eléctrica en ohmios (Ω)." },
      power: { label: "Potencia", help: "Potencia eléctrica en vatios (W)." },
      energy24h: { label: "Energía Diaria", help: "Energía consumida en 24 horas (kWh)." },
      energy30d: { label: "Energía Mensual", help: "Energía consumida en 30 días (kWh)." },
      costPerMonth: { label: "Costo Mensual", help: "Costo estimado basado en tarifa promedio de EE.UU. ($0,15/kWh)." },
    },
    options: {
      voltage: "Voltaje (V)",
      current: "Corriente (A)",
      resistance: "Resistencia (Ω)",
      power: "Potencia (W)",
    },
    errors: {
      differentQuantities: "Las dos cantidades conocidas deben ser diferentes.",
      voltageRequired: "El voltaje no puede ser cero.",
    },
    faq: [
      {
        q: "¿Qué es la potencia en circuitos eléctricos?",
        a: "La potencia (P) es la velocidad de transferencia de energía, medida en vatios (W). P = V × I (voltaje × corriente).",
      },
      {
        q: "¿Cómo se calculan los costos mensuales de electricidad?",
        a: "Costo = Potencia (kW) × Tiempo (horas) × Tarifa ($/kWh). Usa la tarifa promedio de EE.UU. de $0,15/kWh.",
      },
      {
        q: "¿Cuál es la diferencia entre vatios y vatios-hora?",
        a: "Los vatios miden potencia instantánea. Los vatios-hora miden energía consumida en el tiempo.",
      },
      {
        q: "¿Puedo calcular potencia a partir de resistencia y voltaje?",
        a: "Sí. P = V² / R te da la potencia cuando conoces voltaje y resistencia.",
      },
      {
        q: "¿Cómo reducir mi factura eléctrica?",
        a: "Usa aparatos más eficientes, reduce consumo en reposo, usa regletas de potencia y monitorea dispositivos de alto consumo.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Potenza Elettrica",
    short: "Calcola tensione, corrente, resistenza e consumo energetico con stima dei costi.",
    description:
      "Calcolatore di potenza elettrica per calcoli P=VI. Trova V, I, R, P da due input qualsiasi. Stima il consumo energetico e i costi mensili.",
    keywords: [
      "calcolatore potenza",
      "tensione corrente",
      "calcolatore resistenza",
      "potenza elettrica",
      "legge di Ohm",
      "costo energetico",
      "wattaggio",
    ],
    inputs: {
      knownQty1: { label: "Prima Quantità Nota", help: "Scegli tensione, corrente, resistenza o potenza." },
      value1: { label: "Valore", help: "Inserisci il valore numerico." },
      knownQty2: { label: "Seconda Quantità Nota", help: "Deve essere diversa dalla prima." },
      value2: { label: "Valore", help: "Inserisci il valore numerico." },
    },
    outputs: {
      voltage: { label: "Tensione", help: "Differenza di potenziale elettrico in volt (V)." },
      current: { label: "Corrente", help: "Corrente elettrica in ampere (A)." },
      resistance: { label: "Resistenza", help: "Resistenza elettrica in ohm (Ω)." },
      power: { label: "Potenza", help: "Potenza elettrica in watt (W)." },
      energy24h: { label: "Energia Giornaliera", help: "Energia consumata in 24 ore (kWh)." },
      energy30d: { label: "Energia Mensile", help: "Energia consumata in 30 giorni (kWh)." },
      costPerMonth: { label: "Costo Mensile", help: "Costo stimato basato su tariffa media USA ($0,15/kWh)." },
    },
    options: {
      voltage: "Tensione (V)",
      current: "Corrente (A)",
      resistance: "Resistenza (Ω)",
      power: "Potenza (W)",
    },
    errors: {
      differentQuantities: "Le due quantità note devono essere diverse.",
      voltageRequired: "La tensione non può essere zero.",
    },
    faq: [
      {
        q: "Cos'è la potenza nei circuiti elettrici?",
        a: "La potenza (P) è la velocità di trasferimento dell'energia, misurata in watt (W). P = V × I (tensione per corrente).",
      },
      {
        q: "Come si calcolano i costi mensili di elettricità?",
        a: "Costo = Potenza (kW) × Tempo (ore) × Tariffa ($/kWh). Usa la tariffa media USA di $0,15/kWh.",
      },
      {
        q: "Qual è la differenza tra watt e watt-ore?",
        a: "I watt misurano la potenza istantanea. I watt-ore misurano l'energia consumata nel tempo.",
      },
      {
        q: "Posso calcolare la potenza da resistenza e tensione?",
        a: "Sì. P = V² / R dà la potenza quando conosci tensione e resistenza.",
      },
      {
        q: "Come ridurre la mia bolletta elettrica?",
        a: "Usa apparecchi più efficienti, riduci il consumo in standby, usa prese intelligenti e monitora dispositivi ad alto consumo.",
      },
    ],
  },

  ar: {
    title: "حاسبة الطاقة الكهربائية",
    short: "احسب الجهد والتيار والمقاومة واستهلاك الطاقة مع تقدير تكاليف الطاقة.",
    description:
      "حاسبة الطاقة الكهربائية لحسابات P=VI. ابحث عن V و I و R و P من أي مدخلين. قدر استهلاك الطاقة والتكاليف الشهرية.",
    keywords: [
      "حاسبة الطاقة",
      "الجهد التيار",
      "حاسبة المقاومة",
      "الطاقة الكهربائية",
      "قانون أوم",
      "تكلفة الطاقة",
      "قوة",
    ],
    inputs: {
      knownQty1: { label: "الكمية الأولى المعروفة", help: "اختر جهد أو تيار أو مقاومة أو طاقة." },
      value1: { label: "القيمة", help: "أدخل القيمة الرقمية." },
      knownQty2: { label: "الكمية الثانية المعروفة", help: "يجب أن تكون مختلفة عن الأولى." },
      value2: { label: "القيمة", help: "أدخل القيمة الرقمية." },
    },
    outputs: {
      voltage: { label: "الجهد", help: "فرق الجهد الكهربائي بالفولت (V)." },
      current: { label: "التيار", help: "التيار الكهربائي بالأمبير (A)." },
      resistance: { label: "المقاومة", help: "المقاومة الكهربائية بالأوم (Ω)." },
      power: { label: "الطاقة", help: "الطاقة الكهربائية بالواط (W)." },
      energy24h: { label: "الطاقة اليومية", help: "الطاقة المستهلكة في 24 ساعة (kWh)." },
      energy30d: { label: "الطاقة الشهرية", help: "الطاقة المستهلكة في 30 يوم (kWh)." },
      costPerMonth: { label: "التكلفة الشهرية", help: "التكلفة المقدرة بناءً على متوسط السعر الأمريكي ($0.15/kWh)." },
    },
    options: {
      voltage: "جهد (V)",
      current: "تيار (A)",
      resistance: "مقاومة (Ω)",
      power: "طاقة (W)",
    },
    errors: {
      differentQuantities: "يجب أن تكون الكميات المعروفة مختلفة.",
      voltageRequired: "الجهد لا يمكن أن يكون صفر.",
    },
    faq: [
      {
        q: "ما هي الطاقة في الدوائر الكهربائية؟",
        a: "الطاقة (P) هي معدل نقل الطاقة، تقاس بالواط (W). P = V × I (جهد × تيار).",
      },
      {
        q: "كيف يتم حساب تكاليف الكهرباء الشهرية؟",
        a: "التكلفة = الطاقة (kW) × الزمن (ساعات) × السعر ($/kWh). هذا يستخدم متوسط السعر الأمريكي $0.15/kWh.",
      },
      {
        q: "ما الفرق بين الواط والواط-ساعة؟",
        a: "الواط يقيس الطاقة الفورية. الواط-ساعة تقيس الطاقة المستهلكة خلال الوقت.",
      },
      {
        q: "هل يمكنني حساب الطاقة من المقاومة والجهد؟",
        a: "نعم. P = V² / R يعطي الطاقة عندما تعرف الجهد والمقاومة.",
      },
      {
        q: "كيف يمكنني تقليل فاتورة الكهرباء؟",
        a: "استخدم أجهزة أكثر كفاءة، قلل الاستهلاك في وضع الانتظار، استخدم مفاتيح الطاقة، وراقب الأجهزة عالية الاستهلاك.",
      },
    ],
  },

  ru: {
    title: "Калькулятор электрической мощности",
    short: "Рассчитайте напряжение, ток, сопротивление и потребление энергии с оценкой затрат.",
    description:
      "Калькулятор электрической мощности для расчётов P=VI. Найдите V, I, R, P из любых двух входных данных. Оцените потребление энергии и месячные затраты.",
    keywords: [
      "калькулятор мощности",
      "напряжение ток",
      "калькулятор сопротивления",
      "электрическая мощность",
      "закон Ома",
      "стоимость энергии",
      "ватт",
    ],
    inputs: {
      knownQty1: { label: "Первая известная величина", help: "Выберите напряжение, ток, сопротивление или мощность." },
      value1: { label: "Значение", help: "Введите числовое значение." },
      knownQty2: { label: "Вторая известная величина", help: "Должна отличаться от первой." },
      value2: { label: "Значение", help: "Введите числовое значение." },
    },
    outputs: {
      voltage: { label: "Напряжение", help: "Электрический потенциал в вольтах (В)." },
      current: { label: "Ток", help: "Электрический ток в амперах (А)." },
      resistance: { label: "Сопротивление", help: "Электрическое сопротивление в омах (Ω)." },
      power: { label: "Мощность", help: "Электрическая мощность в ваттах (Вт)." },
      energy24h: { label: "Дневная энергия", help: "Энергия, потреблённая за 24 часа (кВт·ч)." },
      energy30d: { label: "Месячная энергия", help: "Энергия, потреблённая за 30 дней (кВт·ч)." },
      costPerMonth: { label: "Месячная стоимость", help: "Оценочная стоимость на основе среднего американского тарифа ($0,15/кВт·ч)." },
    },
    options: {
      voltage: "Напряжение (В)",
      current: "Ток (А)",
      resistance: "Сопротивление (Ω)",
      power: "Мощность (Вт)",
    },
    errors: {
      differentQuantities: "Две известные величины должны быть разными.",
      voltageRequired: "Напряжение не может быть нулевым.",
    },
    faq: [
      {
        q: "Что такое мощность в электрических цепях?",
        a: "Мощность (P) — это скорость передачи энергии, измеряется в ваттах (Вт). P = V × I (напряжение × ток).",
      },
      {
        q: "Как рассчитываются месячные затраты на электричество?",
        a: "Стоимость = Мощность (кВт) × Время (часы) × Тариф ($/кВт·ч). Используется средний американский тариф $0,15/кВт·ч.",
      },
      {
        q: "В чём разница между ваттами и ватт-часами?",
        a: "Ватты измеряют мгновенную мощность. Ватт-часы измеряют энергию, потреблённую за время.",
      },
      {
        q: "Могу ли я рассчитать мощность из сопротивления и напряжения?",
        a: "Да. P = V² / R дает мощность, когда вы знаете напряжение и сопротивление.",
      },
      {
        q: "Как снизить счёт за электричество?",
        a: "Используйте более эффективные приборы, сокращайте энергопотребление в режиме ожидания, используйте умные удлинители и следите за энергоёмкими приборами.",
      },
    ],
  },

  zh: {
    title: "电功率计算器",
    short: "计算电压、电流、电阻和耗电量，并估算能源成本。",
    description:
      "电功率计算器用于P=VI计算。从任意两个输入求V、I、R、P。估算耗电量和月度成本。",
    keywords: [
      "功率计算器",
      "电压电流",
      "电阻计算器",
      "电功率",
      "欧姆定律",
      "能源成本",
      "瓦特",
    ],
    inputs: {
      knownQty1: { label: "第一个已知量", help: "选择电压、电流、电阻或功率。" },
      value1: { label: "数值", help: "输入数值。" },
      knownQty2: { label: "第二个已知量", help: "必须与第一个不同。" },
      value2: { label: "数值", help: "输入数值。" },
    },
    outputs: {
      voltage: { label: "电压", help: "电势差，单位为伏特（V）。" },
      current: { label: "电流", help: "电流，单位为安培（A）。" },
      resistance: { label: "电阻", help: "电阻，单位为欧姆（Ω）。" },
      power: { label: "功率", help: "电功率，单位为瓦特（W）。" },
      energy24h: { label: "日耗电", help: "24小时耗电量（kWh）。" },
      energy30d: { label: "月耗电", help: "30天耗电量（kWh）。" },
      costPerMonth: { label: "月成本", help: "基于美国平均费率（$0.15/kWh）的估计成本。" },
    },
    options: {
      voltage: "电压（V）",
      current: "电流（A）",
      resistance: "电阻（Ω）",
      power: "功率（W）",
    },
    errors: {
      differentQuantities: "两个已知量必须不同。",
      voltageRequired: "电压不能为零。",
    },
    faq: [
      {
        q: "电路中的功率是什么？",
        a: "功率（P）是能量传输速率，单位为瓦特（W）。P = V × I（电压乘以电流）。",
      },
      {
        q: "如何计算月度用电成本？",
        a: "成本 = 功率（kW） × 时间（小时） × 费率（$/kWh）。本计算器使用美国平均费率$0.15/kWh。",
      },
      {
        q: "瓦特和瓦特小时的区别是什么？",
        a: "瓦特测量瞬时功率。瓦特小时测量一段时间内消耗的能量。",
      },
      {
        q: "我可以从电阻和电压计算功率吗？",
        a: "可以。P = V² / R 在已知电压和电阻时给出功率。",
      },
      {
        q: "如何降低电费？",
        a: "使用更高效的电器、减少待机消耗、使用智能插座并监控高功率设备。",
      },
    ],
  },

  ja: {
    title: "電力計算機",
    short: "電圧、電流、抵抗、消費電力を計算し、エネルギーコストを推定します。",
    description:
      "P=VI計算用の電力計算機。任意の2つの入力からV、I、R、Pを求める。消費電力と月額費用を推定します。",
    keywords: [
      "電力計算機",
      "電圧電流",
      "抵抗計算機",
      "電力",
      "オームの法則",
      "エネルギーコスト",
      "ワット",
    ],
    inputs: {
      knownQty1: { label: "最初の既知量", help: "電圧、電流、抵抗、または電力を選択。" },
      value1: { label: "値", help: "数値を入力します。" },
      knownQty2: { label: "2番目の既知量", help: "最初と異なる必要があります。" },
      value2: { label: "値", help: "数値を入力します。" },
    },
    outputs: {
      voltage: { label: "電圧", help: "電位差（ボルト・V）。" },
      current: { label: "電流", help: "電流（アンペア・A）。" },
      resistance: { label: "抵抗", help: "電気抵抗（オーム・Ω）。" },
      power: { label: "電力", help: "電力（ワット・W）。" },
      energy24h: { label: "1日の消費電力", help: "24時間の消費電力（kWh）。" },
      energy30d: { label: "1月の消費電力", help: "30日の消費電力（kWh）。" },
      costPerMonth: { label: "月額料金", help: "米国平均料金（$0.15/kWh）に基づく推定コスト。" },
    },
    options: {
      voltage: "電圧（V）",
      current: "電流（A）",
      resistance: "抵抗（Ω）",
      power: "電力（W）",
    },
    errors: {
      differentQuantities: "2つの既知量は異なる必要があります。",
      voltageRequired: "電圧はゼロにできません。",
    },
    faq: [
      {
        q: "電気回路の電力とは？",
        a: "電力（P）はエネルギー転送率で、ワット（W）で測定されます。P = V × I（電圧×電流）。",
      },
      {
        q: "月額電気代はどのように計算されますか？",
        a: "コスト = 電力（kW）× 時間（時間）× 料金（$/kWh）。米国平均料金$0.15/kWhを使用。",
      },
      {
        q: "ワットとワット時の違いは？",
        a: "ワットは瞬時電力を測定。ワット時は一定期間の消費エネルギーを測定。",
      },
      {
        q: "抵抗と電圧から電力を計算できますか？",
        a: "はい。P = V² / R で電圧と抵抗がわかれば電力が得られます。",
      },
      {
        q: "電気代を減らすには？",
        a: "より効率的な電気製品を使用し、待機電力を減らし、スマートプラグを使用し、消費電力が大きいデバイスを監視してください。",
      },
    ],
  },

  ko: {
    title: "전력 계산기",
    short: "전압, 전류, 저항, 전력 소비를 계산하고 에너지 비용을 추정합니다.",
    description:
      "P=VI 계산을 위한 전력 계산기. 임의의 2개 입력에서 V, I, R, P를 구하십시오. 에너지 소비 및 월별 비용을 추정합니다.",
    keywords: [
      "전력 계산기",
      "전압 전류",
      "저항 계산기",
      "전력",
      "옴의 법칙",
      "에너지 비용",
      "와트",
    ],
    inputs: {
      knownQty1: { label: "첫 번째 알려진 값", help: "전압, 전류, 저항 또는 전력을 선택합니다." },
      value1: { label: "값", help: "숫자 값을 입력합니다." },
      knownQty2: { label: "두 번째 알려진 값", help: "첫 번째와 달라야 합니다." },
      value2: { label: "값", help: "숫자 값을 입력합니다." },
    },
    outputs: {
      voltage: { label: "전압", help: "전위차(V)." },
      current: { label: "전류", help: "전류(A)." },
      resistance: { label: "저항", help: "전기 저항(Ω)." },
      power: { label: "전력", help: "전력(W)." },
      energy24h: { label: "일일 에너지", help: "24시간 소비 에너지(kWh)." },
      energy30d: { label: "월간 에너지", help: "30일 소비 에너지(kWh)." },
      costPerMonth: { label: "월간 비용", help: "미국 평균 요금($0.15/kWh) 기반 추정 비용." },
    },
    options: {
      voltage: "전압(V)",
      current: "전류(A)",
      resistance: "저항(Ω)",
      power: "전력(W)",
    },
    errors: {
      differentQuantities: "두 알려진 값은 달라야 합니다.",
      voltageRequired: "전압은 0이 될 수 없습니다.",
    },
    faq: [
      {
        q: "전기 회로의 전력이란 무엇입니까?",
        a: "전력(P)은 에너지 전송 속도이며, 와트(W)로 측정됩니다. P = V × I(전압×전류).",
      },
      {
        q: "월간 전기 비용은 어떻게 계산됩니까?",
        a: "비용 = 전력(kW) × 시간(시간) × 요금($/kWh). 미국 평균 요금 $0.15/kWh를 사용합니다.",
      },
      {
        q: "와트와 와트시의 차이는?",
        a: "와트는 순간 전력을 측정합니다. 와트시는 시간 동안 소비된 에너지를 측정합니다.",
      },
      {
        q: "저항과 전압에서 전력을 계산할 수 있습니까?",
        a: "네. P = V² / R로 전압과 저항을 알면 전력을 얻을 수 있습니다.",
      },
      {
        q: "전기료를 줄이려면?",
        a: "더 효율적인 기기를 사용하고, 대기 전력을 줄이고, 스마트 플러그를 사용하고, 고전력 기기를 모니터링하십시오.",
      },
    ],
  },

  hi: {
    title: "विद्युत शक्ति कैलकुलेटर",
    short: "वोल्टेज, करंट, प्रतिरोध और बिजली की खपत की गणना करें और ऊर्जा लागत का अनुमान लगाएं।",
    description:
      "P=VI गणना के लिए विद्युत शक्ति कैलकुलेटर। किसी भी दो इनपुट से V, I, R, P खोजें। ऊर्जा खपत और मासिक लागत का अनुमान लगाएं।",
    keywords: [
      "शक्ति कैलकुलेटर",
      "वोल्टेज करंट",
      "प्रतिरोध कैलकुलेटर",
      "विद्युत शक्ति",
      "ओम का नियम",
      "ऊर्जा लागत",
      "वाट",
    ],
    inputs: {
      knownQty1: { label: "पहली ज्ञात मात्रा", help: "वोल्टेज, करंट, प्रतिरोध या शक्ति चुनें।" },
      value1: { label: "मान", help: "संख्यात्मक मान दर्ज करें।" },
      knownQty2: { label: "दूसरी ज्ञात मात्रा", help: "पहले से अलग होना चाहिए।" },
      value2: { label: "मान", help: "संख्यात्मक मान दर्ज करें।" },
    },
    outputs: {
      voltage: { label: "वोल्टेज", help: "विद्युत संभावना अंतर (V)।" },
      current: { label: "करंट", help: "विद्युत करंट (A)।" },
      resistance: { label: "प्रतिरोध", help: "विद्युत प्रतिरोध (Ω)।" },
      power: { label: "शक्ति", help: "विद्युत शक्ति (W)।" },
      energy24h: { label: "दैनिक ऊर्जा", help: "24 घंटे में खपत ऊर्जा (kWh)।" },
      energy30d: { label: "मासिक ऊर्जा", help: "30 दिनों में खपत ऊर्जा (kWh)।" },
      costPerMonth: { label: "मासिक लागत", help: "अमेरिकी औसत दर ($0.15/kWh) के आधार पर अनुमानित लागत।" },
    },
    options: {
      voltage: "वोल्टेज (V)",
      current: "करंट (A)",
      resistance: "प्रतिरोध (Ω)",
      power: "शक्ति (W)",
    },
    errors: {
      differentQuantities: "दोनों ज्ञात मात्राएं अलग होनी चाहिए।",
      voltageRequired: "वोल्टेज शून्य नहीं हो सकता।",
    },
    faq: [
      {
        q: "विद्युत सर्किट में शक्ति क्या है?",
        a: "शक्ति (P) ऊर्जा हस्तांतरण की दर है, जिसे वाट (W) में मापा जाता है। P = V × I (वोल्टेज × करंट)।",
      },
      {
        q: "मासिक बिजली लागत की गणना कैसे की जाती है?",
        a: "लागत = शक्ति (kW) × समय (घंटे) × दर ($/kWh)। यह अमेरिकी औसत दर $0.15/kWh का उपयोग करता है।",
      },
      {
        q: "वाट और वाट-घंटे में क्या अंतर है?",
        a: "वाट तात्कालिक शक्ति को मापते हैं। वाट-घंटे समय के दौरान खपत की गई ऊर्जा को मापते हैं।",
      },
      {
        q: "क्या मैं प्रतिरोध और वोल्टेज से शक्ति की गणना कर सकता हूं?",
        a: "हां। P = V² / R जब आप वोल्टेज और प्रतिरोध जानते हैं तो शक्ति देता है।",
      },
      {
        q: "मैं अपने बिजली के बिल को कैसे कम कर सकता हूं?",
        a: "अधिक कुशल उपकरणों का उपयोग करें, निष्क्रिय खपत को कम करें, स्मार्ट पावर स्ट्रिप्स का उपयोग करें और उच्च-शक्ति वाले उपकरणों की निगरानी करें।",
      },
    ],
  },
};

export default i18n;
