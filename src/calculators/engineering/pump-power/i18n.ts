import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Pump Power Calculator",
    short: "Calculate hydraulic, shaft, and electrical input power for a centrifugal pump.",
    description:
      "Free pump power calculator. Enter flow rate, head, fluid density and pump/motor efficiencies to compute hydraulic power (kW), shaft (brake) power, electrical input power, overall efficiency, annual energy use and operating cost.",
    keywords: [
      "pump power calculator",
      "hydraulic power",
      "shaft power",
      "brake horsepower",
      "centrifugal pump",
      "pump efficiency",
      "kW pump",
      "pump energy cost",
    ],
    inputs: {
      flowRate: { label: "Flow rate (Q)", help: "Volumetric flow delivered by the pump." },
      flowUnit: { label: "Flow unit", help: "Choose cubic metres per hour (m³/h) or litres per second (L/s)." },
      head: { label: "Total head (H)", help: "Total dynamic head the pump must develop, in metres of fluid column." },
      density: { label: "Fluid density (ρ)", help: "Density of the pumped fluid in kg/m³. Use 1000 for water at 20°C." },
      pumpEfficiency: { label: "Pump efficiency (η_p)", help: "Hydraulic-to-shaft efficiency of the pump in percent (typically 55–85% for centrifugal pumps)." },
      motorEfficiency: { label: "Motor efficiency (η_m)", help: "Shaft-to-electrical efficiency of the drive motor in percent (typically 85–96% for IE3 motors)." },
      energyCost: { label: "Electricity price", help: "Cost per kWh in your local currency. Default is $0.12/kWh (U.S. industrial average)." },
      operatingHours: { label: "Operating hours per year", help: "Hours per year the pump runs at the rated operating point (8000 h ≈ continuous duty)." },
    },
    outputs: {
      hydraulicPowerKw: { label: "Hydraulic power", help: "Useful power delivered to the fluid: P = ρ·g·Q·H." },
      shaftPowerKw: { label: "Shaft power (brake)", help: "Mechanical power the motor must deliver to the pump shaft." },
      electricalPowerKw: { label: "Electrical input power", help: "Electrical power drawn from the grid by the motor." },
      overallEfficiency: { label: "Overall efficiency", help: "Wire-to-water efficiency = η_pump × η_motor." },
      annualEnergyKwh: { label: "Annual energy use", help: "Electrical energy consumed per year at the given operating hours." },
      annualCost: { label: "Annual operating cost", help: "Energy cost per year at the specified electricity price." },
    },
    options: {
      flowUnit: { m3h: "m³/h (cubic metres per hour)", ls: "L/s (litres per second)" },
    },
    errors: {
      nonPositive: "Flow, head, density and efficiencies must all be greater than zero.",
      efficiencyTooHigh: "Efficiency cannot exceed 100%.",
    },
    faq: [
      {
        q: "What is hydraulic power?",
        a: "Hydraulic power (also called water power) is the useful mechanical power transferred to the fluid: P = ρ·g·Q·H, where ρ is density (kg/m³), g = 9.81 m/s², Q is volumetric flow (m³/s) and H is the total dynamic head (m). It does not include pump or motor losses.",
      },
      {
        q: "How is shaft (brake) power calculated?",
        a: "Shaft power equals hydraulic power divided by the pump's hydraulic efficiency: P_shaft = P_hyd / η_pump. This is the mechanical power the motor must deliver to the pump shaft to achieve the desired flow and head.",
      },
      {
        q: "What is a typical pump efficiency?",
        a: "Centrifugal pumps typically operate at 55–85% efficiency near their best efficiency point (BEP). Small pumps and pumps far off their BEP can drop below 40%. Always size pumps to operate within ±10% of BEP.",
      },
      {
        q: "Why does the calculator separate pump and motor efficiency?",
        a: "Hydraulic, shaft and electrical input power are three different points in the energy chain. Separating them lets you isolate where losses occur — useful for retrofit decisions like upgrading to a premium-efficiency (IE3/IE4) motor or installing a VFD.",
      },
    ],
  },
  pt: {
    title: "Pump Power Calculator",
    short: "Calculate hydraulic, shaft, and electrical input power for a centrifugal pump.",
    description:
      "Free pump power calculator. Enter flow rate, head, fluid density and pump/motor efficiencies to compute hydraulic power (kW), shaft (brake) power, electrical input power, overall efficiency, annual energy use and operating cost.",
    keywords: [
      "pump power calculator",
      "hydraulic power",
      "shaft power",
      "brake horsepower",
      "centrifugal pump",
      "pump efficiency",
      "kW pump",
      "pump energy cost",
    ],
    inputs: {
      flowRate: { label: "Flow rate (Q)", help: "Volumetric flow delivered by the pump." },
      flowUnit: { label: "Flow unit", help: "Choose cubic metres per hour (m³/h) or litres per second (L/s)." },
      head: { label: "Total head (H)", help: "Total dynamic head the pump must develop, in metres of fluid column." },
      density: { label: "Fluid density (ρ)", help: "Density of the pumped fluid in kg/m³. Use 1000 for water at 20°C." },
      pumpEfficiency: { label: "Pump efficiency (η_p)", help: "Hydraulic-to-shaft efficiency of the pump in percent (typically 55–85% for centrifugal pumps)." },
      motorEfficiency: { label: "Motor efficiency (η_m)", help: "Shaft-to-electrical efficiency of the drive motor in percent (typically 85–96% for IE3 motors)." },
      energyCost: { label: "Electricity price", help: "Cost per kWh in your local currency. Default is $0.12/kWh (U.S. industrial average)." },
      operatingHours: { label: "Operating hours per year", help: "Hours per year the pump runs at the rated operating point (8000 h ≈ continuous duty)." },
    },
    outputs: {
      hydraulicPowerKw: { label: "Hydraulic power", help: "Useful power delivered to the fluid: P = ρ·g·Q·H." },
      shaftPowerKw: { label: "Shaft power (brake)", help: "Mechanical power the motor must deliver to the pump shaft." },
      electricalPowerKw: { label: "Electrical input power", help: "Electrical power drawn from the grid by the motor." },
      overallEfficiency: { label: "Overall efficiency", help: "Wire-to-water efficiency = η_pump × η_motor." },
      annualEnergyKwh: { label: "Annual energy use", help: "Electrical energy consumed per year at the given operating hours." },
      annualCost: { label: "Annual operating cost", help: "Energy cost per year at the specified electricity price." },
    },
    options: {
      flowUnit: { m3h: "m³/h (cubic metres per hour)", ls: "L/s (litres per second)" },
    },
    errors: {
      nonPositive: "Flow, head, density and efficiencies must all be greater than zero.",
      efficiencyTooHigh: "Efficiency cannot exceed 100%.",
    },
    faq: [
      {
        q: "What is hydraulic power?",
        a: "Hydraulic power (also called water power) is the useful mechanical power transferred to the fluid: P = ρ·g·Q·H, where ρ is density (kg/m³), g = 9.81 m/s², Q is volumetric flow (m³/s) and H is the total dynamic head (m). It does not include pump or motor losses.",
      },
      {
        q: "How is shaft (brake) power calculated?",
        a: "Shaft power equals hydraulic power divided by the pump's hydraulic efficiency: P_shaft = P_hyd / η_pump. This is the mechanical power the motor must deliver to the pump shaft to achieve the desired flow and head.",
      },
      {
        q: "What is a typical pump efficiency?",
        a: "Centrifugal pumps typically operate at 55–85% efficiency near their best efficiency point (BEP). Small pumps and pumps far off their BEP can drop below 40%. Always size pumps to operate within ±10% of BEP.",
      },
      {
        q: "Why does the calculator separate pump and motor efficiency?",
        a: "Hydraulic, shaft and electrical input power are three different points in the energy chain. Separating them lets you isolate where losses occur — useful for retrofit decisions like upgrading to a premium-efficiency (IE3/IE4) motor or installing a VFD.",
      },
    ],
  },
  id: {
    title: "Pump Power Calculator",
    short: "Calculate hydraulic, shaft, and electrical input power for a centrifugal pump.",
    description:
      "Free pump power calculator. Enter flow rate, head, fluid density and pump/motor efficiencies to compute hydraulic power (kW), shaft (brake) power, electrical input power, overall efficiency, annual energy use and operating cost.",
    keywords: [
      "pump power calculator",
      "hydraulic power",
      "shaft power",
      "brake horsepower",
      "centrifugal pump",
      "pump efficiency",
      "kW pump",
      "pump energy cost",
    ],
    inputs: {
      flowRate: { label: "Flow rate (Q)", help: "Volumetric flow delivered by the pump." },
      flowUnit: { label: "Flow unit", help: "Choose cubic metres per hour (m³/h) or litres per second (L/s)." },
      head: { label: "Total head (H)", help: "Total dynamic head the pump must develop, in metres of fluid column." },
      density: { label: "Fluid density (ρ)", help: "Density of the pumped fluid in kg/m³. Use 1000 for water at 20°C." },
      pumpEfficiency: { label: "Pump efficiency (η_p)", help: "Hydraulic-to-shaft efficiency of the pump in percent (typically 55–85% for centrifugal pumps)." },
      motorEfficiency: { label: "Motor efficiency (η_m)", help: "Shaft-to-electrical efficiency of the drive motor in percent (typically 85–96% for IE3 motors)." },
      energyCost: { label: "Electricity price", help: "Cost per kWh in your local currency. Default is $0.12/kWh (U.S. industrial average)." },
      operatingHours: { label: "Operating hours per year", help: "Hours per year the pump runs at the rated operating point (8000 h ≈ continuous duty)." },
    },
    outputs: {
      hydraulicPowerKw: { label: "Hydraulic power", help: "Useful power delivered to the fluid: P = ρ·g·Q·H." },
      shaftPowerKw: { label: "Shaft power (brake)", help: "Mechanical power the motor must deliver to the pump shaft." },
      electricalPowerKw: { label: "Electrical input power", help: "Electrical power drawn from the grid by the motor." },
      overallEfficiency: { label: "Overall efficiency", help: "Wire-to-water efficiency = η_pump × η_motor." },
      annualEnergyKwh: { label: "Annual energy use", help: "Electrical energy consumed per year at the given operating hours." },
      annualCost: { label: "Annual operating cost", help: "Energy cost per year at the specified electricity price." },
    },
    options: {
      flowUnit: { m3h: "m³/h (cubic metres per hour)", ls: "L/s (litres per second)" },
    },
    errors: {
      nonPositive: "Flow, head, density and efficiencies must all be greater than zero.",
      efficiencyTooHigh: "Efficiency cannot exceed 100%.",
    },
    faq: [
      {
        q: "What is hydraulic power?",
        a: "Hydraulic power (also called water power) is the useful mechanical power transferred to the fluid: P = ρ·g·Q·H, where ρ is density (kg/m³), g = 9.81 m/s², Q is volumetric flow (m³/s) and H is the total dynamic head (m). It does not include pump or motor losses.",
      },
      {
        q: "How is shaft (brake) power calculated?",
        a: "Shaft power equals hydraulic power divided by the pump's hydraulic efficiency: P_shaft = P_hyd / η_pump. This is the mechanical power the motor must deliver to the pump shaft to achieve the desired flow and head.",
      },
      {
        q: "What is a typical pump efficiency?",
        a: "Centrifugal pumps typically operate at 55–85% efficiency near their best efficiency point (BEP). Small pumps and pumps far off their BEP can drop below 40%. Always size pumps to operate within ±10% of BEP.",
      },
      {
        q: "Why does the calculator separate pump and motor efficiency?",
        a: "Hydraulic, shaft and electrical input power are three different points in the energy chain. Separating them lets you isolate where losses occur — useful for retrofit decisions like upgrading to a premium-efficiency (IE3/IE4) motor or installing a VFD.",
      },
    ],
  },


  tr: {
    title: "Pompa Gücü Hesaplayıcı",
    short: "Santrifüj pompa için hidrolik, şaft ve elektrik giriş gücünü hesaplayın.",
    description:
      "Ücretsiz pompa gücü hesaplayıcısı. Debi, basma yüksekliği, akışkan yoğunluğu ve pompa/motor verimliliklerini girerek hidrolik güç (kW), şaft (fren) gücü, elektrik giriş gücü, toplam verim, yıllık enerji tüketimi ve işletme maliyetini hesaplayın.",
    keywords: [
      "pompa gücü hesaplayıcı",
      "hidrolik güç",
      "şaft gücü",
      "fren beygir gücü",
      "santrifüj pompa",
      "pompa verimi",
      "kW pompa",
      "pompa enerji maliyeti",
    ],
    inputs: {
      flowRate: { label: "Debi (Q)", help: "Pompanın sağladığı hacimsel akış." },
      flowUnit: { label: "Debi birimi", help: "Metreküp/saat (m³/h) veya litre/saniye (L/s) seçin." },
      head: { label: "Toplam basma yüksekliği (H)", help: "Pompanın sağlaması gereken toplam dinamik basma yüksekliği (metre)." },
      density: { label: "Akışkan yoğunluğu (ρ)", help: "Pompalanan akışkanın kg/m³ cinsinden yoğunluğu. 20°C'de su için 1000 kullanın." },
      pumpEfficiency: { label: "Pompa verimi (η_p)", help: "Pompanın hidrolik-şaft verimi (%) — santrifüj pompalar için tipik olarak 55–85%." },
      motorEfficiency: { label: "Motor verimi (η_m)", help: "Tahrik motorunun şaft-elektrik verimi (%) — IE3 motorlar için tipik 85–96%." },
      energyCost: { label: "Elektrik fiyatı", help: "kWh başına yerel para biriminde maliyet. Varsayılan 0,12 $/kWh (ABD endüstri ortalaması)." },
      operatingHours: { label: "Yıllık çalışma saati", help: "Pompanın çalışma noktasında yılda çalıştığı saat (8000 h ≈ sürekli çalışma)." },
    },
    outputs: {
      hydraulicPowerKw: { label: "Hidrolik güç", help: "Akışkana aktarılan faydalı güç: P = ρ·g·Q·H." },
      shaftPowerKw: { label: "Şaft (fren) gücü", help: "Motorun pompa miline aktarması gereken mekanik güç." },
      electricalPowerKw: { label: "Elektrik giriş gücü", help: "Motorun şebekeden çektiği elektrik gücü." },
      overallEfficiency: { label: "Toplam verim", help: "Şebekeden suya verim = η_pompa × η_motor." },
      annualEnergyKwh: { label: "Yıllık enerji tüketimi", help: "Verilen çalışma saatlerinde yılda tüketilen elektrik enerjisi." },
      annualCost: { label: "Yıllık işletme maliyeti", help: "Belirtilen elektrik fiyatıyla yıllık enerji maliyeti." },
    },
    options: {
      flowUnit: { m3h: "m³/h (metreküp/saat)", ls: "L/s (litre/saniye)" },
    },
    errors: {
      nonPositive: "Debi, basma yüksekliği, yoğunluk ve verimler sıfırdan büyük olmalıdır.",
      efficiencyTooHigh: "Verim %100'ü aşamaz.",
    },
    faq: [
      {
        q: "Hidrolik güç nedir?",
        a: "Hidrolik güç, akışkana aktarılan faydalı mekanik güçtür: P = ρ·g·Q·H. Burada ρ yoğunluk (kg/m³), g = 9,81 m/s², Q hacimsel debi (m³/s) ve H toplam dinamik basma yüksekliğidir (m). Pompa veya motor kayıplarını içermez.",
      },
      {
        q: "Şaft (fren) gücü nasıl hesaplanır?",
        a: "Şaft gücü, hidrolik gücün pompa hidrolik verimine bölünmesidir: P_şaft = P_hid / η_pompa.",
      },
      {
        q: "Tipik pompa verimi nedir?",
        a: "Santrifüj pompalar en iyi verim noktasında (BEP) tipik olarak %55–85 verimle çalışır. Küçük pompalar veya BEP'ten uzak çalışan pompalar %40'ın altına düşebilir.",
      },
    ],
  },

  de: {
    title: "Pumpenleistung Rechner",
    short: "Hydraulische, Wellen- und elektrische Eingangsleistung einer Kreiselpumpe berechnen.",
    description:
      "Kostenloser Pumpenleistung-Rechner. Geben Sie Förderstrom, Förderhöhe, Dichte sowie Pumpen- und Motorwirkungsgrad ein und ermitteln Sie hydraulische Leistung (kW), Wellenleistung, elektrische Aufnahme, Gesamtwirkungsgrad, jährlichen Energieverbrauch und Betriebskosten.",
    keywords: [
      "Pumpenleistung Rechner",
      "hydraulische Leistung",
      "Wellenleistung",
      "Bremsleistung",
      "Kreiselpumpe",
      "Pumpenwirkungsgrad",
      "kW Pumpe",
      "Pumpen-Energiekosten",
    ],
    inputs: {
      flowRate: { label: "Förderstrom (Q)", help: "Von der Pumpe geförderter Volumenstrom." },
      flowUnit: { label: "Einheit Förderstrom", help: "Kubikmeter pro Stunde (m³/h) oder Liter pro Sekunde (L/s)." },
      head: { label: "Förderhöhe (H)", help: "Gesamtförderhöhe der Pumpe in Metern Flüssigkeitssäule." },
      density: { label: "Fluiddichte (ρ)", help: "Dichte des geförderten Fluids in kg/m³. Wasser bei 20 °C: 1000." },
      pumpEfficiency: { label: "Pumpenwirkungsgrad (η_p)", help: "Hydraulischer Wirkungsgrad der Pumpe in % (Kreiselpumpe: typ. 55–85 %)." },
      motorEfficiency: { label: "Motorwirkungsgrad (η_m)", help: "Wirkungsgrad des Antriebsmotors in % (IE3-Motoren: typ. 85–96 %)." },
      energyCost: { label: "Strompreis", help: "Kosten pro kWh in lokaler Währung. Standard: 0,12 $/kWh." },
      operatingHours: { label: "Betriebsstunden pro Jahr", help: "Jährliche Laufzeit am Auslegungspunkt (8000 h ≈ Dauerbetrieb)." },
    },
    outputs: {
      hydraulicPowerKw: { label: "Hydraulische Leistung", help: "An das Fluid abgegebene Nutzleistung: P = ρ·g·Q·H." },
      shaftPowerKw: { label: "Wellenleistung", help: "Vom Motor an die Pumpenwelle abzugebende mechanische Leistung." },
      electricalPowerKw: { label: "Elektrische Aufnahmeleistung", help: "Vom Motor aus dem Netz aufgenommene elektrische Leistung." },
      overallEfficiency: { label: "Gesamtwirkungsgrad", help: "Wirkungsgrad „Netz bis Wasser\" = η_Pumpe × η_Motor." },
      annualEnergyKwh: { label: "Jährlicher Energieverbrauch", help: "Stromverbrauch pro Jahr bei den angegebenen Betriebsstunden." },
      annualCost: { label: "Jährliche Betriebskosten", help: "Jährliche Energiekosten beim angegebenen Strompreis." },
    },
    options: {
      flowUnit: { m3h: "m³/h (Kubikmeter pro Stunde)", ls: "L/s (Liter pro Sekunde)" },
    },
    errors: {
      nonPositive: "Förderstrom, Förderhöhe, Dichte und Wirkungsgrade müssen größer null sein.",
      efficiencyTooHigh: "Wirkungsgrad darf 100 % nicht überschreiten.",
    },
    faq: [
      { q: "Was ist hydraulische Leistung?", a: "Die hydraulische Leistung ist die an das Fluid abgegebene Nutzleistung: P = ρ·g·Q·H." },
      { q: "Wie wird die Wellenleistung berechnet?", a: "Wellenleistung = hydraulische Leistung / Pumpenwirkungsgrad." },
      { q: "Wie hoch ist der typische Pumpenwirkungsgrad?", a: "Kreiselpumpen erreichen am Bestpunkt 55–85 %." },
    ],
  },

  fr: {
    title: "Calculateur Puissance Pompe",
    short: "Calculer la puissance hydraulique, à l'arbre et électrique d'une pompe centrifuge.",
    description:
      "Calculateur gratuit de puissance de pompe. Entrez débit, hauteur manométrique, densité et rendements pompe/moteur pour obtenir la puissance hydraulique (kW), la puissance à l'arbre, la puissance électrique absorbée, le rendement global, la consommation annuelle et le coût d'exploitation.",
    keywords: [
      "calculateur puissance pompe",
      "puissance hydraulique",
      "puissance à l'arbre",
      "pompe centrifuge",
      "rendement pompe",
      "kW pompe",
      "coût énergétique pompe",
    ],
    inputs: {
      flowRate: { label: "Débit (Q)", help: "Débit volumique fourni par la pompe." },
      flowUnit: { label: "Unité de débit", help: "Mètre cube par heure (m³/h) ou litre par seconde (L/s)." },
      head: { label: "Hauteur manométrique totale (H)", help: "Hauteur manométrique totale, en mètres de colonne de fluide." },
      density: { label: "Masse volumique du fluide (ρ)", help: "Masse volumique en kg/m³. Eau à 20 °C : 1000." },
      pumpEfficiency: { label: "Rendement pompe (η_p)", help: "Rendement hydraulique de la pompe en % (centrifuge : typ. 55–85 %)." },
      motorEfficiency: { label: "Rendement moteur (η_m)", help: "Rendement du moteur d'entraînement en % (IE3 : typ. 85–96 %)." },
      energyCost: { label: "Prix de l'électricité", help: "Coût par kWh dans la devise locale. Défaut : 0,12 $/kWh." },
      operatingHours: { label: "Heures de fonctionnement par an", help: "Heures annuelles au point nominal (8000 h ≈ marche continue)." },
    },
    outputs: {
      hydraulicPowerKw: { label: "Puissance hydraulique", help: "Puissance utile transmise au fluide : P = ρ·g·Q·H." },
      shaftPowerKw: { label: "Puissance à l'arbre", help: "Puissance mécanique à fournir à l'arbre de la pompe." },
      electricalPowerKw: { label: "Puissance électrique absorbée", help: "Puissance électrique soutirée au réseau par le moteur." },
      overallEfficiency: { label: "Rendement global", help: "Rendement « réseau-eau » = η_pompe × η_moteur." },
      annualEnergyKwh: { label: "Consommation annuelle", help: "Énergie électrique consommée par an." },
      annualCost: { label: "Coût annuel d'exploitation", help: "Coût annuel de l'énergie au tarif indiqué." },
    },
    options: {
      flowUnit: { m3h: "m³/h (mètre cube par heure)", ls: "L/s (litre par seconde)" },
    },
    errors: {
      nonPositive: "Débit, hauteur, densité et rendements doivent être supérieurs à zéro.",
      efficiencyTooHigh: "Le rendement ne peut pas dépasser 100 %.",
    },
    faq: [
      { q: "Qu'est-ce que la puissance hydraulique ?", a: "Puissance utile transmise au fluide : P = ρ·g·Q·H." },
      { q: "Comment calcule-t-on la puissance à l'arbre ?", a: "Puissance à l'arbre = puissance hydraulique / rendement pompe." },
      { q: "Quel est le rendement typique d'une pompe ?", a: "Les pompes centrifuges atteignent 55–85 % au point de meilleur rendement." },
    ],
  },

  es: {
    title: "Calculadora de Potencia de Bomba",
    short: "Calcula la potencia hidráulica, en el eje y eléctrica de una bomba centrífuga.",
    description:
      "Calculadora gratuita de potencia de bomba. Introduce caudal, altura manométrica, densidad y rendimientos para obtener la potencia hidráulica (kW), potencia en el eje, potencia eléctrica absorbida, rendimiento global, consumo anual y coste de operación.",
    keywords: [
      "calculadora potencia bomba",
      "potencia hidráulica",
      "potencia en el eje",
      "bomba centrífuga",
      "rendimiento bomba",
      "kW bomba",
      "coste energía bomba",
    ],
    inputs: {
      flowRate: { label: "Caudal (Q)", help: "Caudal volumétrico entregado por la bomba." },
      flowUnit: { label: "Unidad de caudal", help: "Metros cúbicos por hora (m³/h) o litros por segundo (L/s)." },
      head: { label: "Altura manométrica total (H)", help: "Altura dinámica total que debe vencer la bomba (m)." },
      density: { label: "Densidad del fluido (ρ)", help: "Densidad en kg/m³. Agua a 20 °C: 1000." },
      pumpEfficiency: { label: "Rendimiento de la bomba (η_p)", help: "Rendimiento hidráulico de la bomba en % (centrífugas: 55–85 %)." },
      motorEfficiency: { label: "Rendimiento del motor (η_m)", help: "Rendimiento del motor en % (IE3: 85–96 %)." },
      energyCost: { label: "Precio de la electricidad", help: "Coste por kWh en moneda local. Por defecto 0,12 $/kWh." },
      operatingHours: { label: "Horas anuales de operación", help: "Horas que la bomba opera al año (8000 h ≈ servicio continuo)." },
    },
    outputs: {
      hydraulicPowerKw: { label: "Potencia hidráulica", help: "Potencia útil transferida al fluido: P = ρ·g·Q·H." },
      shaftPowerKw: { label: "Potencia en el eje", help: "Potencia mecánica en el eje de la bomba." },
      electricalPowerKw: { label: "Potencia eléctrica absorbida", help: "Potencia eléctrica tomada de la red por el motor." },
      overallEfficiency: { label: "Rendimiento global", help: "Rendimiento red-fluido = η_bomba × η_motor." },
      annualEnergyKwh: { label: "Consumo anual", help: "Energía eléctrica consumida por año." },
      annualCost: { label: "Coste anual de operación", help: "Coste anual al precio de electricidad indicado." },
    },
    options: {
      flowUnit: { m3h: "m³/h (metros cúbicos por hora)", ls: "L/s (litros por segundo)" },
    },
    errors: {
      nonPositive: "Caudal, altura, densidad y rendimientos deben ser mayores que cero.",
      efficiencyTooHigh: "El rendimiento no puede superar el 100 %.",
    },
    faq: [
      { q: "¿Qué es la potencia hidráulica?", a: "Potencia útil al fluido: P = ρ·g·Q·H." },
      { q: "¿Cómo se calcula la potencia en el eje?", a: "Potencia eje = potencia hidráulica / rendimiento de la bomba." },
      { q: "¿Cuál es el rendimiento típico de una bomba?", a: "Las bombas centrífugas alcanzan 55–85 % en su punto óptimo." },
    ],
  },

  it: {
    title: "Calcolatore Potenza Pompa",
    short: "Calcola potenza idraulica, all'asse ed elettrica di una pompa centrifuga.",
    description:
      "Calcolatore gratuito di potenza pompa. Inserisci portata, prevalenza, densità e rendimenti pompa/motore per ottenere potenza idraulica (kW), potenza all'asse, potenza elettrica assorbita, rendimento globale, consumo annuo e costo operativo.",
    keywords: [
      "calcolatore potenza pompa",
      "potenza idraulica",
      "potenza all'asse",
      "pompa centrifuga",
      "rendimento pompa",
      "kW pompa",
      "costo energetico pompa",
    ],
    inputs: {
      flowRate: { label: "Portata (Q)", help: "Portata volumetrica fornita dalla pompa." },
      flowUnit: { label: "Unità di portata", help: "Metri cubi all'ora (m³/h) o litri al secondo (L/s)." },
      head: { label: "Prevalenza totale (H)", help: "Prevalenza dinamica totale in metri di colonna." },
      density: { label: "Densità del fluido (ρ)", help: "Densità in kg/m³. Acqua a 20 °C: 1000." },
      pumpEfficiency: { label: "Rendimento pompa (η_p)", help: "Rendimento idraulico in % (centrifughe 55–85 %)." },
      motorEfficiency: { label: "Rendimento motore (η_m)", help: "Rendimento del motore in % (IE3 85–96 %)." },
      energyCost: { label: "Prezzo elettricità", help: "Costo per kWh in valuta locale. Predefinito 0,12 $/kWh." },
      operatingHours: { label: "Ore di funzionamento annue", help: "Ore di funzionamento al punto nominale (8000 h ≈ continuo)." },
    },
    outputs: {
      hydraulicPowerKw: { label: "Potenza idraulica", help: "Potenza utile al fluido: P = ρ·g·Q·H." },
      shaftPowerKw: { label: "Potenza all'asse", help: "Potenza meccanica all'asse della pompa." },
      electricalPowerKw: { label: "Potenza elettrica assorbita", help: "Potenza elettrica assorbita dalla rete." },
      overallEfficiency: { label: "Rendimento globale", help: "Rendimento rete-acqua = η_pompa × η_motore." },
      annualEnergyKwh: { label: "Consumo annuo", help: "Energia elettrica consumata in un anno." },
      annualCost: { label: "Costo annuo di esercizio", help: "Costo annuo al prezzo indicato." },
    },
    options: {
      flowUnit: { m3h: "m³/h (metri cubi all'ora)", ls: "L/s (litri al secondo)" },
    },
    errors: {
      nonPositive: "Portata, prevalenza, densità e rendimenti devono essere maggiori di zero.",
      efficiencyTooHigh: "Il rendimento non può superare il 100 %.",
    },
    faq: [
      { q: "Cos'è la potenza idraulica?", a: "Potenza utile al fluido: P = ρ·g·Q·H." },
      { q: "Come si calcola la potenza all'asse?", a: "Potenza all'asse = potenza idraulica / rendimento pompa." },
      { q: "Qual è il rendimento tipico di una pompa?", a: "Le pompe centrifughe raggiungono 55–85 % al punto di miglior rendimento." },
    ],
  },

  ar: {
    title: "حاسبة قدرة المضخة",
    short: "احسب القدرة الهيدروليكية وقدرة العمود والقدرة الكهربائية لمضخة طاردة مركزية.",
    description:
      "حاسبة مجانية لقدرة المضخة. أدخل التدفق والرفع وكثافة المائع وكفاءات المضخة والمحرك للحصول على القدرة الهيدروليكية (kW)، قدرة العمود، القدرة الكهربائية، الكفاءة الإجمالية، الاستهلاك السنوي والتكلفة التشغيلية.",
    keywords: [
      "حاسبة قدرة المضخة",
      "القدرة الهيدروليكية",
      "قدرة العمود",
      "مضخة طاردة مركزية",
      "كفاءة المضخة",
      "كيلوواط مضخة",
      "تكلفة طاقة المضخة",
    ],
    inputs: {
      flowRate: { label: "معدل التدفق (Q)", help: "التدفق الحجمي الذي تقدمه المضخة." },
      flowUnit: { label: "وحدة التدفق", help: "متر مكعب/ساعة (m³/h) أو لتر/ثانية (L/s)." },
      head: { label: "الرفع الكلي (H)", help: "الرفع الديناميكي الكلي للمضخة بالمتر." },
      density: { label: "كثافة المائع (ρ)", help: "الكثافة بـ kg/m³. للماء عند 20°م: 1000." },
      pumpEfficiency: { label: "كفاءة المضخة (η_p)", help: "كفاءة المضخة الهيدروليكية بالنسبة المئوية (55–85% للطرد المركزي)." },
      motorEfficiency: { label: "كفاءة المحرك (η_m)", help: "كفاءة المحرك بالنسبة المئوية (85–96% لمحركات IE3)." },
      energyCost: { label: "سعر الكهرباء", help: "التكلفة لكل kWh بالعملة المحلية. الافتراضي 0.12 دولار/kWh." },
      operatingHours: { label: "ساعات التشغيل السنوية", help: "ساعات تشغيل المضخة سنوياً (8000 ساعة ≈ تشغيل مستمر)." },
    },
    outputs: {
      hydraulicPowerKw: { label: "القدرة الهيدروليكية", help: "القدرة المفيدة المنقولة للمائع: P = ρ·g·Q·H." },
      shaftPowerKw: { label: "قدرة العمود", help: "القدرة الميكانيكية على عمود المضخة." },
      electricalPowerKw: { label: "القدرة الكهربائية الداخلة", help: "القدرة الكهربائية المسحوبة من الشبكة." },
      overallEfficiency: { label: "الكفاءة الإجمالية", help: "كفاءة من الشبكة إلى الماء = η_مضخة × η_محرك." },
      annualEnergyKwh: { label: "الاستهلاك السنوي", help: "الطاقة الكهربائية السنوية المستهلكة." },
      annualCost: { label: "التكلفة التشغيلية السنوية", help: "التكلفة السنوية للطاقة بسعر الكهرباء المحدد." },
    },
    options: {
      flowUnit: { m3h: "m³/h (متر مكعب/ساعة)", ls: "L/s (لتر/ثانية)" },
    },
    errors: {
      nonPositive: "يجب أن تكون التدفق والرفع والكثافة والكفاءات أكبر من الصفر.",
      efficiencyTooHigh: "لا يمكن أن تتجاوز الكفاءة 100%.",
    },
    faq: [
      { q: "ما هي القدرة الهيدروليكية؟", a: "هي القدرة المفيدة المنقولة للمائع: P = ρ·g·Q·H." },
      { q: "كيف تُحسب قدرة العمود؟", a: "قدرة العمود = القدرة الهيدروليكية / كفاءة المضخة." },
      { q: "ما الكفاءة النموذجية للمضخة؟", a: "المضخات الطاردة المركزية تعمل بكفاءة 55–85% بالقرب من نقطة أفضل كفاءة." },
    ],
  },

  ru: {
    title: "Калькулятор мощности насоса",
    short: "Рассчитайте гидравлическую, валовую и электрическую мощность центробежного насоса.",
    description:
      "Бесплатный калькулятор мощности насоса. Введите расход, напор, плотность жидкости и КПД насоса/двигателя, чтобы получить гидравлическую мощность (кВт), мощность на валу, потребляемую электрическую мощность, общий КПД, годовое потребление энергии и эксплуатационные затраты.",
    keywords: [
      "калькулятор мощности насоса",
      "гидравлическая мощность",
      "мощность на валу",
      "центробежный насос",
      "КПД насоса",
      "кВт насос",
      "стоимость энергии насоса",
    ],
    inputs: {
      flowRate: { label: "Расход (Q)", help: "Объёмный расход насоса." },
      flowUnit: { label: "Единица расхода", help: "Кубометры в час (м³/ч) или литры в секунду (л/с)." },
      head: { label: "Полный напор (H)", help: "Полный динамический напор в метрах столба жидкости." },
      density: { label: "Плотность жидкости (ρ)", help: "Плотность в кг/м³. Вода при 20°C: 1000." },
      pumpEfficiency: { label: "КПД насоса (η_p)", help: "Гидравлический КПД насоса в % (центробежные: 55–85%)." },
      motorEfficiency: { label: "КПД двигателя (η_m)", help: "КПД электродвигателя в % (IE3: 85–96%)." },
      energyCost: { label: "Цена электроэнергии", help: "Стоимость кВт·ч в местной валюте. По умолчанию 0,12 $/кВт·ч." },
      operatingHours: { label: "Часов работы в год", help: "Годовая наработка насоса (8000 ч ≈ непрерывная работа)." },
    },
    outputs: {
      hydraulicPowerKw: { label: "Гидравлическая мощность", help: "Полезная мощность, переданная жидкости: P = ρ·g·Q·H." },
      shaftPowerKw: { label: "Мощность на валу", help: "Механическая мощность на валу насоса." },
      electricalPowerKw: { label: "Потребляемая электрическая мощность", help: "Электрическая мощность, потребляемая двигателем из сети." },
      overallEfficiency: { label: "Общий КПД", help: "КПД «сеть–вода» = η_насоса × η_двигателя." },
      annualEnergyKwh: { label: "Годовое потребление энергии", help: "Электроэнергия, потребляемая за год." },
      annualCost: { label: "Годовые эксплуатационные затраты", help: "Годовая стоимость энергии по указанному тарифу." },
    },
    options: {
      flowUnit: { m3h: "м³/ч (кубометры в час)", ls: "л/с (литры в секунду)" },
    },
    errors: {
      nonPositive: "Расход, напор, плотность и КПД должны быть больше нуля.",
      efficiencyTooHigh: "КПД не может превышать 100%.",
    },
    faq: [
      { q: "Что такое гидравлическая мощность?", a: "Полезная мощность, передаваемая жидкости: P = ρ·g·Q·H." },
      { q: "Как рассчитывается мощность на валу?", a: "Мощность на валу = гидравлическая мощность / КПД насоса." },
      { q: "Каков типичный КПД насоса?", a: "Центробежные насосы у точки оптимума имеют КПД 55–85%." },
    ],
  },

  zh: {
    title: "泵功率计算器",
    short: "计算离心泵的水力功率、轴功率和电输入功率。",
    description:
      "免费泵功率计算器。输入流量、扬程、流体密度以及泵/电机效率，即可计算水力功率（kW）、轴功率、电输入功率、总效率、年能耗与年运行成本。",
    keywords: [
      "泵功率计算器",
      "水力功率",
      "轴功率",
      "离心泵",
      "泵效率",
      "电机效率",
      "kW 泵",
      "泵能耗成本",
    ],
    inputs: {
      flowRate: { label: "流量 (Q)", help: "泵输送的体积流量。" },
      flowUnit: { label: "流量单位", help: "立方米/小时 (m³/h) 或 升/秒 (L/s)。" },
      head: { label: "总扬程 (H)", help: "泵需克服的总动扬程（米液柱）。" },
      density: { label: "流体密度 (ρ)", help: "流体密度，单位 kg/m³。20°C 水为 1000。" },
      pumpEfficiency: { label: "泵效率 (η_p)", help: "泵的水力效率（%）；离心泵典型 55–85%。" },
      motorEfficiency: { label: "电机效率 (η_m)", help: "驱动电机效率（%）；IE3 电机典型 85–96%。" },
      energyCost: { label: "电价", help: "每 kWh 电价。默认 0.12 美元/kWh。" },
      operatingHours: { label: "年运行小时", help: "泵每年在工作点运行的小时数（8000 h ≈ 连续运行）。" },
    },
    outputs: {
      hydraulicPowerKw: { label: "水力功率", help: "传递给流体的有用功率：P = ρ·g·Q·H。" },
      shaftPowerKw: { label: "轴功率", help: "电机需输出到泵轴的机械功率。" },
      electricalPowerKw: { label: "电输入功率", help: "电机从电网吸收的电功率。" },
      overallEfficiency: { label: "总效率", help: "电网到水的总效率 = η_泵 × η_电机。" },
      annualEnergyKwh: { label: "年能耗", help: "按给定运行小时数计算的年耗电量。" },
      annualCost: { label: "年运行成本", help: "按给定电价计算的年运行成本。" },
    },
    options: {
      flowUnit: { m3h: "m³/h（立方米/小时）", ls: "L/s（升/秒）" },
    },
    errors: {
      nonPositive: "流量、扬程、密度和效率必须大于零。",
      efficiencyTooHigh: "效率不能超过 100%。",
    },
    faq: [
      { q: "什么是水力功率？", a: "水力功率是传递给流体的有用功率：P = ρ·g·Q·H。" },
      { q: "轴功率如何计算？", a: "轴功率 = 水力功率 / 泵效率。" },
      { q: "泵的典型效率是多少？", a: "离心泵在最佳效率点附近通常为 55–85%。" },
    ],
  },

  ja: {
    title: "ポンプ動力計算機",
    short: "遠心ポンプの水動力・軸動力・電気入力動力を計算します。",
    description:
      "無料のポンプ動力計算機。流量・揚程・流体密度・ポンプおよびモーター効率を入力すると、水動力（kW）・軸動力・電気入力動力・総合効率・年間消費電力・運転コストを算出します。",
    keywords: [
      "ポンプ動力 計算機",
      "水動力",
      "軸動力",
      "遠心ポンプ",
      "ポンプ効率",
      "モーター効率",
      "kW ポンプ",
      "ポンプ電気代",
    ],
    inputs: {
      flowRate: { label: "流量 (Q)", help: "ポンプが送出する体積流量。" },
      flowUnit: { label: "流量単位", help: "毎時立方メートル (m³/h) または 毎秒リットル (L/s)。" },
      head: { label: "全揚程 (H)", help: "ポンプが必要とする全動揚程（液柱メートル）。" },
      density: { label: "流体密度 (ρ)", help: "流体密度 (kg/m³)。20°C の水で 1000。" },
      pumpEfficiency: { label: "ポンプ効率 (η_p)", help: "ポンプ水力効率 (%)。遠心ポンプは 55–85%。" },
      motorEfficiency: { label: "モーター効率 (η_m)", help: "駆動モーター効率 (%)。IE3 で 85–96%。" },
      energyCost: { label: "電気料金", help: "kWh 当たり料金。既定 0.12 ドル/kWh。" },
      operatingHours: { label: "年間運転時間", help: "定格点での年間運転時間（8000 h ≈ 連続運転）。" },
    },
    outputs: {
      hydraulicPowerKw: { label: "水動力", help: "流体に伝わる有効動力：P = ρ·g·Q·H。" },
      shaftPowerKw: { label: "軸動力", help: "モーターがポンプ軸に伝達する機械動力。" },
      electricalPowerKw: { label: "電気入力動力", help: "モーターが電源から取り込む電力。" },
      overallEfficiency: { label: "総合効率", help: "電源から水までの効率 = η_ポンプ × η_モーター。" },
      annualEnergyKwh: { label: "年間消費電力", help: "指定運転時間における年間消費電力量。" },
      annualCost: { label: "年間運転コスト", help: "指定電気料金での年間費用。" },
    },
    options: {
      flowUnit: { m3h: "m³/h（毎時立方メートル）", ls: "L/s（毎秒リットル）" },
    },
    errors: {
      nonPositive: "流量・揚程・密度・効率はすべて 0 より大きい値が必要です。",
      efficiencyTooHigh: "効率は 100% を超えられません。",
    },
    faq: [
      { q: "水動力とは？", a: "流体に伝わる有効動力：P = ρ·g·Q·H。" },
      { q: "軸動力はどう計算しますか？", a: "軸動力 = 水動力 / ポンプ効率。" },
      { q: "ポンプの典型的な効率は？", a: "遠心ポンプは最高効率点付近で 55–85% です。" },
    ],
  },

  ko: {
    title: "펌프 동력 계산기",
    short: "원심 펌프의 수력 동력, 축 동력, 전기 입력 동력을 계산합니다.",
    description:
      "무료 펌프 동력 계산기. 유량, 양정, 유체 밀도, 펌프/모터 효율을 입력하면 수력 동력(kW), 축 동력, 전기 입력 동력, 총 효율, 연간 에너지 소비량 및 운영 비용을 산출합니다.",
    keywords: [
      "펌프 동력 계산기",
      "수력 동력",
      "축 동력",
      "원심 펌프",
      "펌프 효율",
      "모터 효율",
      "kW 펌프",
      "펌프 에너지 비용",
    ],
    inputs: {
      flowRate: { label: "유량 (Q)", help: "펌프가 공급하는 체적 유량." },
      flowUnit: { label: "유량 단위", help: "시간당 세제곱미터(m³/h) 또는 초당 리터(L/s)." },
      head: { label: "전양정 (H)", help: "펌프가 극복해야 하는 전 동수두 (m)." },
      density: { label: "유체 밀도 (ρ)", help: "유체 밀도 (kg/m³). 20°C 물은 1000." },
      pumpEfficiency: { label: "펌프 효율 (η_p)", help: "펌프의 수력 효율 (%). 원심 펌프 55–85%." },
      motorEfficiency: { label: "모터 효율 (η_m)", help: "구동 모터 효율 (%). IE3 모터 85–96%." },
      energyCost: { label: "전기 가격", help: "kWh당 비용. 기본값 0.12달러/kWh." },
      operatingHours: { label: "연간 운전 시간", help: "정격 운전점에서의 연간 운전 시간 (8000h ≈ 연속 운전)." },
    },
    outputs: {
      hydraulicPowerKw: { label: "수력 동력", help: "유체로 전달되는 유효 동력: P = ρ·g·Q·H." },
      shaftPowerKw: { label: "축 동력", help: "모터가 펌프 축에 공급해야 하는 기계 동력." },
      electricalPowerKw: { label: "전기 입력 동력", help: "모터가 전원에서 흡수하는 전력." },
      overallEfficiency: { label: "총 효율", help: "전원-수 총 효율 = η_펌프 × η_모터." },
      annualEnergyKwh: { label: "연간 에너지 소비량", help: "지정된 운전 시간 기준 연간 전력 소비량." },
      annualCost: { label: "연간 운영 비용", help: "지정 전기 가격 기준 연간 비용." },
    },
    options: {
      flowUnit: { m3h: "m³/h (시간당 세제곱미터)", ls: "L/s (초당 리터)" },
    },
    errors: {
      nonPositive: "유량, 양정, 밀도, 효율은 모두 0보다 커야 합니다.",
      efficiencyTooHigh: "효율은 100%를 초과할 수 없습니다.",
    },
    faq: [
      { q: "수력 동력이란?", a: "유체로 전달되는 유효 동력: P = ρ·g·Q·H." },
      { q: "축 동력은 어떻게 계산하나요?", a: "축 동력 = 수력 동력 / 펌프 효율." },
      { q: "펌프의 일반적인 효율은?", a: "원심 펌프는 최고 효율점 부근에서 55–85%입니다." },
    ],
  },

  hi: {
    title: "पंप पावर कैलकुलेटर",
    short: "केन्द्रापसारी पंप के लिए हाइड्रोलिक, शाफ्ट और विद्युत इनपुट पावर की गणना करें।",
    description:
      "निःशुल्क पंप पावर कैलकुलेटर। प्रवाह दर, हेड, द्रव घनत्व और पंप/मोटर दक्षता दर्ज करके हाइड्रोलिक पावर (kW), शाफ्ट पावर, विद्युत इनपुट पावर, कुल दक्षता, वार्षिक ऊर्जा खपत और परिचालन लागत की गणना करें।",
    keywords: [
      "पंप पावर कैलकुलेटर",
      "हाइड्रोलिक पावर",
      "शाफ्ट पावर",
      "केन्द्रापसारी पंप",
      "पंप दक्षता",
      "मोटर दक्षता",
      "kW पंप",
      "पंप ऊर्जा लागत",
    ],
    inputs: {
      flowRate: { label: "प्रवाह दर (Q)", help: "पंप द्वारा प्रदान किया गया आयतनात्मक प्रवाह।" },
      flowUnit: { label: "प्रवाह इकाई", help: "घन मीटर/घंटा (m³/h) या लीटर/सेकंड (L/s)।" },
      head: { label: "कुल हेड (H)", help: "पंप द्वारा वहन किया जाने वाला कुल गतिशील हेड (मीटर)।" },
      density: { label: "द्रव घनत्व (ρ)", help: "द्रव घनत्व kg/m³ में। 20°C पर पानी के लिए 1000।" },
      pumpEfficiency: { label: "पंप दक्षता (η_p)", help: "पंप की हाइड्रोलिक दक्षता प्रतिशत में (केन्द्रापसारी: 55–85%)।" },
      motorEfficiency: { label: "मोटर दक्षता (η_m)", help: "ड्राइव मोटर दक्षता प्रतिशत में (IE3: 85–96%)।" },
      energyCost: { label: "बिजली की कीमत", help: "स्थानीय मुद्रा में प्रति kWh लागत। डिफ़ॉल्ट $0.12/kWh।" },
      operatingHours: { label: "वार्षिक संचालन घंटे", help: "रेटेड बिंदु पर पंप के वार्षिक संचालन घंटे (8000 h ≈ निरंतर)।" },
    },
    outputs: {
      hydraulicPowerKw: { label: "हाइड्रोलिक पावर", help: "द्रव में स्थानांतरित उपयोगी शक्ति: P = ρ·g·Q·H।" },
      shaftPowerKw: { label: "शाफ्ट पावर", help: "मोटर द्वारा पंप शाफ्ट को दी जाने वाली यांत्रिक शक्ति।" },
      electricalPowerKw: { label: "विद्युत इनपुट पावर", help: "मोटर द्वारा ग्रिड से ली गई विद्युत शक्ति।" },
      overallEfficiency: { label: "कुल दक्षता", help: "ग्रिड-से-जल दक्षता = η_पंप × η_मोटर।" },
      annualEnergyKwh: { label: "वार्षिक ऊर्जा खपत", help: "दिए गए संचालन घंटों पर वार्षिक विद्युत खपत।" },
      annualCost: { label: "वार्षिक परिचालन लागत", help: "निर्दिष्ट बिजली कीमत पर वार्षिक ऊर्जा लागत।" },
    },
    options: {
      flowUnit: { m3h: "m³/h (घन मीटर/घंटा)", ls: "L/s (लीटर/सेकंड)" },
    },
    errors: {
      nonPositive: "प्रवाह, हेड, घनत्व और दक्षता शून्य से अधिक होने चाहिए।",
      efficiencyTooHigh: "दक्षता 100% से अधिक नहीं हो सकती।",
    },
    faq: [
      { q: "हाइड्रोलिक पावर क्या है?", a: "द्रव में स्थानांतरित उपयोगी शक्ति: P = ρ·g·Q·H।" },
      { q: "शाफ्ट पावर की गणना कैसे होती है?", a: "शाफ्ट पावर = हाइड्रोलिक पावर / पंप दक्षता।" },
      { q: "पंप की सामान्य दक्षता क्या है?", a: "केन्द्रापसारी पंप सर्वोत्तम दक्षता बिंदु पर 55–85% पर चलते हैं।" },
    ],
  },
};

export default i18n;
