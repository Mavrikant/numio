import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Power Factor Calculator",
    short: "Calculate power factor, kVA, kVAR, and correction capacitor for AC electrical systems.",
    description:
      "Free power factor calculator. Compute PF from real and reactive power, find kW and kVAR from kVA and PF, or calculate the capacitor needed for power factor correction.",
    keywords: [
      "power factor calculator",
      "kVA kW kVAR calculator",
      "power factor correction capacitor",
      "reactive power",
      "apparent power",
      "cos phi calculator",
      "electrical power calculator",
    ],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Choose what to calculate: PF from power values, power components from PF, or correction capacitor.",
      },
      realPowerKw: {
        label: "Real Power (kW)",
        help: "Actual useful power consumed by the load. Also called active power.",
      },
      reactivePowerKvar: {
        label: "Reactive Power (kVAR)",
        help: "Power that oscillates between source and load (stored in inductors/capacitors).",
      },
      kva: {
        label: "Apparent Power (kVA)",
        help: "Total power drawn from the supply — the vector sum of kW and kVAR.",
      },
      pf: {
        label: "Power Factor",
        help: "Ratio of real power to apparent power (0 to 1). A PF of 1 means pure resistive load.",
      },
      currentPf: {
        label: "Current Power Factor",
        help: "Existing power factor of the installation before correction.",
      },
      targetPf: {
        label: "Target Power Factor",
        help: "Desired power factor after capacitor correction (must be higher than current PF).",
      },
      voltageV: {
        label: "System Voltage (V)",
        help: "Line-to-line (or line-to-neutral for single-phase) supply voltage.",
      },
      frequencyHz: {
        label: "Frequency (Hz)",
        help: "Supply frequency: 50Hz (Europe, Asia) or 60Hz (Americas).",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "Power Factor",
        help: "PF = cos(φ) = P/S. Values close to 1 indicate efficient use of electrical supply.",
      },
      realPowerKw: {
        label: "Real Power (kW)",
        help: "Actual useful power that does work (heats, rotates, illuminates).",
      },
      apparentPowerKva: {
        label: "Apparent Power (kVA)",
        help: "Total power the supply must deliver: S = √(P² + Q²).",
      },
      reactivePowerKvar: {
        label: "Reactive Power (kVAR)",
        help: "Non-working power that magnetizes inductive loads: Q = √(S² - P²).",
      },
      phaseAngleDeg: {
        label: "Phase Angle (°)",
        help: "Angle between voltage and current waveforms: φ = arccos(PF).",
      },
      correctionCapacitorMicrofarad: {
        label: "Correction Capacitor (µF)",
        help: "Capacitance needed to improve PF: C = Q_cap / (2π × f × V²).",
      },
      kvarRequired: {
        label: "kVAR Required for Correction",
        help: "Reactive power the capacitor bank must supply: Q_cap = P × (tan φ1 - tan φ2).",
      },
    },
    options: {
      mode: {
        pf_from_power: "Calculate PF from real & reactive power",
        power_from_pf: "Calculate kW & kVAR from kVA & PF",
        correction: "Calculate PF correction capacitor",
      },
      frequencyHz: {
        "50hz": "50 Hz (Europe / Asia)",
        "60hz": "60 Hz (Americas)",
      },
    },
    errors: {
      targetPfTooLow: "Target PF must be greater than current PF.",
      invalidMode: "Please select a valid calculation mode.",
    },
    faq: [
      {
        q: "What is power factor?",
        a: "Power factor (PF) is the ratio of real power (kW) to apparent power (kVA). It measures how efficiently electrical energy is being converted to useful work. A PF of 1.0 (unity) means all the supplied power does useful work; a low PF means significant reactive power is drawn from the supply.",
      },
      {
        q: "Why is power factor important?",
        a: "Utilities charge industrial customers for low power factor because reactive current flows in the supply cables and transformers without doing useful work, causing losses and requiring oversized equipment. Improving PF with capacitors reduces electricity bills and equipment size.",
      },
      {
        q: "How does power factor correction work?",
        a: "Inductive loads (motors, transformers) absorb reactive power (lagging PF). Capacitors supply reactive power locally, reducing the reactive current drawn from the grid. The net effect is that the supply sees a higher PF, reducing kVA demand.",
      },
      {
        q: "What is a good power factor?",
        a: "Most utilities require industrial customers to maintain PF above 0.90 or 0.95. Residential loads typically have PF between 0.85 and 0.95. Unity (1.0) is ideal but practically achieved only with unity-PF power supplies.",
      },
    ],
  },
  pt: {
    title: "Power Factor Calculator",
    short: "Calculate power factor, kVA, kVAR, and correction capacitor for AC electrical systems.",
    description:
      "Free power factor calculator. Compute PF from real and reactive power, find kW and kVAR from kVA and PF, or calculate the capacitor needed for power factor correction.",
    keywords: [
      "power factor calculator",
      "kVA kW kVAR calculator",
      "power factor correction capacitor",
      "reactive power",
      "apparent power",
      "cos phi calculator",
      "electrical power calculator",
    ],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Choose what to calculate: PF from power values, power components from PF, or correction capacitor.",
      },
      realPowerKw: {
        label: "Real Power (kW)",
        help: "Actual useful power consumed by the load. Also called active power.",
      },
      reactivePowerKvar: {
        label: "Reactive Power (kVAR)",
        help: "Power that oscillates between source and load (stored in inductors/capacitors).",
      },
      kva: {
        label: "Apparent Power (kVA)",
        help: "Total power drawn from the supply — the vector sum of kW and kVAR.",
      },
      pf: {
        label: "Power Factor",
        help: "Ratio of real power to apparent power (0 to 1). A PF of 1 means pure resistive load.",
      },
      currentPf: {
        label: "Current Power Factor",
        help: "Existing power factor of the installation before correction.",
      },
      targetPf: {
        label: "Target Power Factor",
        help: "Desired power factor after capacitor correction (must be higher than current PF).",
      },
      voltageV: {
        label: "System Voltage (V)",
        help: "Line-to-line (or line-to-neutral for single-phase) supply voltage.",
      },
      frequencyHz: {
        label: "Frequency (Hz)",
        help: "Supply frequency: 50Hz (Europe, Asia) or 60Hz (Americas).",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "Power Factor",
        help: "PF = cos(φ) = P/S. Values close to 1 indicate efficient use of electrical supply.",
      },
      realPowerKw: {
        label: "Real Power (kW)",
        help: "Actual useful power that does work (heats, rotates, illuminates).",
      },
      apparentPowerKva: {
        label: "Apparent Power (kVA)",
        help: "Total power the supply must deliver: S = √(P² + Q²).",
      },
      reactivePowerKvar: {
        label: "Reactive Power (kVAR)",
        help: "Non-working power that magnetizes inductive loads: Q = √(S² - P²).",
      },
      phaseAngleDeg: {
        label: "Phase Angle (°)",
        help: "Angle between voltage and current waveforms: φ = arccos(PF).",
      },
      correctionCapacitorMicrofarad: {
        label: "Correction Capacitor (µF)",
        help: "Capacitance needed to improve PF: C = Q_cap / (2π × f × V²).",
      },
      kvarRequired: {
        label: "kVAR Required for Correction",
        help: "Reactive power the capacitor bank must supply: Q_cap = P × (tan φ1 - tan φ2).",
      },
    },
    options: {
      mode: {
        pf_from_power: "Calculate PF from real & reactive power",
        power_from_pf: "Calculate kW & kVAR from kVA & PF",
        correction: "Calculate PF correction capacitor",
      },
      frequencyHz: {
        "50hz": "50 Hz (Europe / Asia)",
        "60hz": "60 Hz (Americas)",
      },
    },
    errors: {
      targetPfTooLow: "Target PF must be greater than current PF.",
      invalidMode: "Please select a valid calculation mode.",
    },
    faq: [
      {
        q: "What is power factor?",
        a: "Power factor (PF) is the ratio of real power (kW) to apparent power (kVA). It measures how efficiently electrical energy is being converted to useful work. A PF of 1.0 (unity) means all the supplied power does useful work; a low PF means significant reactive power is drawn from the supply.",
      },
      {
        q: "Why is power factor important?",
        a: "Utilities charge industrial customers for low power factor because reactive current flows in the supply cables and transformers without doing useful work, causing losses and requiring oversized equipment. Improving PF with capacitors reduces electricity bills and equipment size.",
      },
      {
        q: "How does power factor correction work?",
        a: "Inductive loads (motors, transformers) absorb reactive power (lagging PF). Capacitors supply reactive power locally, reducing the reactive current drawn from the grid. The net effect is that the supply sees a higher PF, reducing kVA demand.",
      },
      {
        q: "What is a good power factor?",
        a: "Most utilities require industrial customers to maintain PF above 0.90 or 0.95. Residential loads typically have PF between 0.85 and 0.95. Unity (1.0) is ideal but practically achieved only with unity-PF power supplies.",
      },
    ],
  },
  id: {
    title: "Power Factor Calculator",
    short: "Calculate power factor, kVA, kVAR, and correction capacitor for AC electrical systems.",
    description:
      "Free power factor calculator. Compute PF from real and reactive power, find kW and kVAR from kVA and PF, or calculate the capacitor needed for power factor correction.",
    keywords: [
      "power factor calculator",
      "kVA kW kVAR calculator",
      "power factor correction capacitor",
      "reactive power",
      "apparent power",
      "cos phi calculator",
      "electrical power calculator",
    ],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Choose what to calculate: PF from power values, power components from PF, or correction capacitor.",
      },
      realPowerKw: {
        label: "Real Power (kW)",
        help: "Actual useful power consumed by the load. Also called active power.",
      },
      reactivePowerKvar: {
        label: "Reactive Power (kVAR)",
        help: "Power that oscillates between source and load (stored in inductors/capacitors).",
      },
      kva: {
        label: "Apparent Power (kVA)",
        help: "Total power drawn from the supply — the vector sum of kW and kVAR.",
      },
      pf: {
        label: "Power Factor",
        help: "Ratio of real power to apparent power (0 to 1). A PF of 1 means pure resistive load.",
      },
      currentPf: {
        label: "Current Power Factor",
        help: "Existing power factor of the installation before correction.",
      },
      targetPf: {
        label: "Target Power Factor",
        help: "Desired power factor after capacitor correction (must be higher than current PF).",
      },
      voltageV: {
        label: "System Voltage (V)",
        help: "Line-to-line (or line-to-neutral for single-phase) supply voltage.",
      },
      frequencyHz: {
        label: "Frequency (Hz)",
        help: "Supply frequency: 50Hz (Europe, Asia) or 60Hz (Americas).",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "Power Factor",
        help: "PF = cos(φ) = P/S. Values close to 1 indicate efficient use of electrical supply.",
      },
      realPowerKw: {
        label: "Real Power (kW)",
        help: "Actual useful power that does work (heats, rotates, illuminates).",
      },
      apparentPowerKva: {
        label: "Apparent Power (kVA)",
        help: "Total power the supply must deliver: S = √(P² + Q²).",
      },
      reactivePowerKvar: {
        label: "Reactive Power (kVAR)",
        help: "Non-working power that magnetizes inductive loads: Q = √(S² - P²).",
      },
      phaseAngleDeg: {
        label: "Phase Angle (°)",
        help: "Angle between voltage and current waveforms: φ = arccos(PF).",
      },
      correctionCapacitorMicrofarad: {
        label: "Correction Capacitor (µF)",
        help: "Capacitance needed to improve PF: C = Q_cap / (2π × f × V²).",
      },
      kvarRequired: {
        label: "kVAR Required for Correction",
        help: "Reactive power the capacitor bank must supply: Q_cap = P × (tan φ1 - tan φ2).",
      },
    },
    options: {
      mode: {
        pf_from_power: "Calculate PF from real & reactive power",
        power_from_pf: "Calculate kW & kVAR from kVA & PF",
        correction: "Calculate PF correction capacitor",
      },
      frequencyHz: {
        "50hz": "50 Hz (Europe / Asia)",
        "60hz": "60 Hz (Americas)",
      },
    },
    errors: {
      targetPfTooLow: "Target PF must be greater than current PF.",
      invalidMode: "Please select a valid calculation mode.",
    },
    faq: [
      {
        q: "What is power factor?",
        a: "Power factor (PF) is the ratio of real power (kW) to apparent power (kVA). It measures how efficiently electrical energy is being converted to useful work. A PF of 1.0 (unity) means all the supplied power does useful work; a low PF means significant reactive power is drawn from the supply.",
      },
      {
        q: "Why is power factor important?",
        a: "Utilities charge industrial customers for low power factor because reactive current flows in the supply cables and transformers without doing useful work, causing losses and requiring oversized equipment. Improving PF with capacitors reduces electricity bills and equipment size.",
      },
      {
        q: "How does power factor correction work?",
        a: "Inductive loads (motors, transformers) absorb reactive power (lagging PF). Capacitors supply reactive power locally, reducing the reactive current drawn from the grid. The net effect is that the supply sees a higher PF, reducing kVA demand.",
      },
      {
        q: "What is a good power factor?",
        a: "Most utilities require industrial customers to maintain PF above 0.90 or 0.95. Residential loads typically have PF between 0.85 and 0.95. Unity (1.0) is ideal but practically achieved only with unity-PF power supplies.",
      },
    ],
  },


  tr: {
    title: "Güç Faktörü Hesaplayıcı",
    short: "AC elektrik sistemleri için güç faktörü, kVA, kVAR ve düzeltme kondansatörü hesaplayın.",
    description:
      "Ücretsiz güç faktörü hesaplayıcı. Gerçek ve reaktif güçten GF hesaplayın, kVA ve GF'den kW/kVAR bulun veya güç faktörü düzeltmesi için gereken kondansatörü hesaplayın.",
    keywords: [
      "güç faktörü hesaplayıcı",
      "kVA kW kVAR hesaplayıcı",
      "güç faktörü düzeltme kondansatörü",
      "reaktif güç",
      "görünür güç",
      "cos phi hesaplayıcı",
      "elektrik güç hesaplayıcı",
    ],
    inputs: {
      mode: {
        label: "Hesaplama Modu",
        help: "Hesaplamak istediğinizi seçin: güç değerlerinden GF, GF'den güç bileşenleri veya düzeltme kondansatörü.",
      },
      realPowerKw: {
        label: "Gerçek Güç (kW)",
        help: "Yük tarafından tüketilen gerçek faydalı güç. Aktif güç olarak da bilinir.",
      },
      reactivePowerKvar: {
        label: "Reaktif Güç (kVAR)",
        help: "Kaynak ve yük arasında salınan güç (indüktörler/kondansatörlerde depolanan).",
      },
      kva: {
        label: "Görünür Güç (kVA)",
        help: "Kaynaktan çekilen toplam güç — kW ve kVAR'ın vektör toplamı.",
      },
      pf: {
        label: "Güç Faktörü",
        help: "Gerçek gücün görünür güce oranı (0-1). GF=1 saf dirençli yük anlamına gelir.",
      },
      currentPf: {
        label: "Mevcut Güç Faktörü",
        help: "Düzeltmeden önce tesisin mevcut güç faktörü.",
      },
      targetPf: {
        label: "Hedef Güç Faktörü",
        help: "Kondansatör düzeltmesinden sonra istenen güç faktörü (mevcut GF'den yüksek olmalı).",
      },
      voltageV: {
        label: "Sistem Gerilimi (V)",
        help: "Faz-faz (veya tek fazlı sistemler için faz-nötr) besleme gerilimi.",
      },
      frequencyHz: {
        label: "Frekans (Hz)",
        help: "Besleme frekansı: 50Hz (Avrupa, Asya) veya 60Hz (Amerika).",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "Güç Faktörü",
        help: "GF = cos(φ) = P/S. 1'e yakın değerler elektrik kaynağının verimli kullanıldığını gösterir.",
      },
      realPowerKw: {
        label: "Gerçek Güç (kW)",
        help: "Gerçek faydalı güç (ısıtır, döndürür, aydınlatır).",
      },
      apparentPowerKva: {
        label: "Görünür Güç (kVA)",
        help: "Kaynağın sağlaması gereken toplam güç: S = √(P² + Q²).",
      },
      reactivePowerKvar: {
        label: "Reaktif Güç (kVAR)",
        help: "İndüktif yükleri mıknatıslayan iş yapmayan güç: Q = √(S² - P²).",
      },
      phaseAngleDeg: {
        label: "Faz Açısı (°)",
        help: "Gerilim ve akım dalgaları arasındaki açı: φ = arccos(GF).",
      },
      correctionCapacitorMicrofarad: {
        label: "Düzeltme Kondansatörü (µF)",
        help: "GF'yi iyileştirmek için gereken kapasitans: C = Q_kap / (2π × f × V²).",
      },
      kvarRequired: {
        label: "Düzeltme için Gereken kVAR",
        help: "Kondansatör bankasının sağlaması gereken reaktif güç: Q_kap = P × (tan φ1 - tan φ2).",
      },
    },
    options: {
      mode: {
        pf_from_power: "Gerçek ve reaktif güçten GF hesapla",
        power_from_pf: "kVA ve GF'den kW ve kVAR hesapla",
        correction: "GF düzeltme kondansatörünü hesapla",
      },
      frequencyHz: {
        "50hz": "50 Hz (Avrupa / Asya)",
        "60hz": "60 Hz (Amerika)",
      },
    },
    errors: {
      targetPfTooLow: "Hedef GF, mevcut GF'den yüksek olmalıdır.",
      invalidMode: "Lütfen geçerli bir hesaplama modu seçin.",
    },
    faq: [
      {
        q: "Güç faktörü nedir?",
        a: "Güç faktörü (GF), gerçek gücün (kW) görünür güce (kVA) oranıdır. GF=1 tüm sağlanan gücün faydalı iş yaptığı anlamına gelir; düşük GF, kaynaktan önemli miktarda reaktif akım çekildiği anlamına gelir.",
      },
      {
        q: "Güç faktörü neden önemlidir?",
        a: "Düşük güç faktörlü müşterilerden ek ücret alınır; çünkü reaktif akım, faydalı iş yapmadan kablo ve transformatörlerde kayıplara neden olur. Kondansatörlerle GF'yi iyileştirmek elektrik faturalarını ve ekipman boyutunu azaltır.",
      },
      {
        q: "Güç faktörü düzeltmesi nasıl çalışır?",
        a: "İndüktif yükler (motorlar, transformatörler) reaktif güç emer (geciken GF). Kondansatörler reaktif gücü yerel olarak sağlayarak şebekeden çekilen reaktif akımı azaltır.",
      },
    ],
  },

  de: {
    title: "Leistungsfaktor-Rechner",
    short: "Berechnen Sie Leistungsfaktor, kVA, kVAR und Kompensationskondensator für AC-Systeme.",
    description:
      "Kostenloser Leistungsfaktor-Rechner. Berechnen Sie cos(φ) aus Wirk- und Blindleistung, Wirkleistung aus kVA und cos(φ), oder den Kondensator zur Leistungsfaktor-Kompensation.",
    keywords: [
      "Leistungsfaktor Rechner",
      "kVA kW kVAR Rechner",
      "Leistungsfaktor Kompensation Kondensator",
      "Blindleistung",
      "Scheinleistung",
      "cos phi Rechner",
      "Elektro Leistungsrechner",
    ],
    inputs: {
      mode: {
        label: "Berechnungsmodus",
        help: "Wählen Sie, was berechnet werden soll: cos(φ) aus Leistungswerten, Leistungskomponenten aus cos(φ) oder Kompensationskondensator.",
      },
      realPowerKw: {
        label: "Wirkleistung (kW)",
        help: "Tatsächlich nutzbare, vom Verbraucher aufgenommene Leistung.",
      },
      reactivePowerKvar: {
        label: "Blindleistung (kVAR)",
        help: "Leistung, die zwischen Quelle und Last pendelt (gespeichert in Induktivitäten/Kapazitäten).",
      },
      kva: {
        label: "Scheinleistung (kVA)",
        help: "Gesamte vom Netz gelieferte Leistung — Vektorsumme aus kW und kVAR.",
      },
      pf: {
        label: "Leistungsfaktor",
        help: "Verhältnis von Wirkleistung zu Scheinleistung (0 bis 1). cos(φ) = 1 bedeutet rein ohmscher Verbraucher.",
      },
      currentPf: {
        label: "Aktueller Leistungsfaktor",
        help: "Vorhandener Leistungsfaktor der Anlage vor der Kompensation.",
      },
      targetPf: {
        label: "Ziel-Leistungsfaktor",
        help: "Gewünschter Leistungsfaktor nach Kondensatorkompensation (muss höher als aktueller cos(φ) sein).",
      },
      voltageV: {
        label: "Systemspannung (V)",
        help: "Leiter-zu-Leiter (oder Leiter-zu-Neutral bei Einphasensystemen) Netzspannung.",
      },
      frequencyHz: {
        label: "Frequenz (Hz)",
        help: "Netzfrequenz: 50 Hz (Europa, Asien) oder 60 Hz (Amerika).",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "Leistungsfaktor",
        help: "cos(φ) = P/S. Werte nahe 1 zeigen effizienten Stromeinsatz.",
      },
      realPowerKw: {
        label: "Wirkleistung (kW)",
        help: "Nutzbare Leistung, die tatsächlich Arbeit verrichtet.",
      },
      apparentPowerKva: {
        label: "Scheinleistung (kVA)",
        help: "Vom Netz gelieferte Gesamtleistung: S = √(P² + Q²).",
      },
      reactivePowerKvar: {
        label: "Blindleistung (kVAR)",
        help: "Nicht arbeitende Leistung für induktive Magnetisierung: Q = √(S² - P²).",
      },
      phaseAngleDeg: {
        label: "Phasenwinkel (°)",
        help: "Winkel zwischen Strom- und Spannungskurve: φ = arccos(cos(φ)).",
      },
      correctionCapacitorMicrofarad: {
        label: "Kompensationskondensator (µF)",
        help: "Erforderliche Kapazität: C = Q_kap / (2π × f × V²).",
      },
      kvarRequired: {
        label: "Benötigte kVAR zur Kompensation",
        help: "Vom Kondensatorbank bereitzustellende Blindleistung: Q_kap = P × (tan φ1 - tan φ2).",
      },
    },
    options: {
      mode: {
        pf_from_power: "cos(φ) aus Wirk- und Blindleistung berechnen",
        power_from_pf: "kW und kVAR aus kVA und cos(φ) berechnen",
        correction: "Kompensationskondensator berechnen",
      },
      frequencyHz: {
        "50hz": "50 Hz (Europa / Asien)",
        "60hz": "60 Hz (Amerika)",
      },
    },
    errors: {
      targetPfTooLow: "Ziel-cos(φ) muss größer als aktueller cos(φ) sein.",
      invalidMode: "Bitte wählen Sie einen gültigen Berechnungsmodus.",
    },
    faq: [
      {
        q: "Was ist der Leistungsfaktor?",
        a: "Der Leistungsfaktor cos(φ) ist das Verhältnis von Wirkleistung (kW) zu Scheinleistung (kVA). Er misst, wie effizient elektrische Energie in nutzbare Arbeit umgewandelt wird.",
      },
      {
        q: "Warum ist der Leistungsfaktor wichtig?",
        a: "Versorger belasten Industriekunden mit Blindleistungsgebühren, da Blindstrom Leitungen belastet, ohne Arbeit zu verrichten. Kompensation mit Kondensatoren reduziert Kosten und Anlagengröße.",
      },
      {
        q: "Wie funktioniert die Leistungsfaktor-Kompensation?",
        a: "Induktive Verbraucher (Motoren, Transformatoren) nehmen Blindleistung auf. Kondensatoren liefern Blindleistung lokal und reduzieren so den Blindstrombezug aus dem Netz.",
      },
    ],
  },

  fr: {
    title: "Calculateur de facteur de puissance",
    short: "Calculez le facteur de puissance, kVA, kVAR et le condensateur de correction pour systèmes AC.",
    description:
      "Calculateur de facteur de puissance gratuit. Calculez cos(φ) à partir des puissances actives et réactives, trouvez kW et kVAR à partir de kVA et cos(φ), ou calculez le condensateur nécessaire à la correction.",
    keywords: [
      "calculateur facteur de puissance",
      "calculateur kVA kW kVAR",
      "condensateur correction facteur de puissance",
      "puissance réactive",
      "puissance apparente",
      "calculateur cos phi",
      "calculateur puissance électrique",
    ],
    inputs: {
      mode: {
        label: "Mode de calcul",
        help: "Choisissez ce à calculer : FP à partir des puissances, composantes de puissance à partir du FP, ou condensateur de correction.",
      },
      realPowerKw: {
        label: "Puissance active (kW)",
        help: "Puissance utile réellement consommée par la charge.",
      },
      reactivePowerKvar: {
        label: "Puissance réactive (kVAR)",
        help: "Puissance oscillant entre la source et la charge (stockée dans inductances/condensateurs).",
      },
      kva: {
        label: "Puissance apparente (kVA)",
        help: "Puissance totale fournie par le réseau — somme vectorielle de kW et kVAR.",
      },
      pf: {
        label: "Facteur de puissance",
        help: "Rapport de la puissance active à la puissance apparente (0 à 1). FP = 1 signifie charge purement résistive.",
      },
      currentPf: {
        label: "Facteur de puissance actuel",
        help: "Facteur de puissance existant de l'installation avant correction.",
      },
      targetPf: {
        label: "Facteur de puissance cible",
        help: "Facteur de puissance souhaité après correction (doit être supérieur au FP actuel).",
      },
      voltageV: {
        label: "Tension du réseau (V)",
        help: "Tension phase-phase (ou phase-neutre pour monophasé).",
      },
      frequencyHz: {
        label: "Fréquence (Hz)",
        help: "Fréquence du réseau : 50 Hz (Europe, Asie) ou 60 Hz (Amériques).",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "Facteur de puissance",
        help: "FP = cos(φ) = P/S. Des valeurs proches de 1 indiquent une utilisation efficace du réseau.",
      },
      realPowerKw: {
        label: "Puissance active (kW)",
        help: "Puissance utile qui effectue un travail réel.",
      },
      apparentPowerKva: {
        label: "Puissance apparente (kVA)",
        help: "Puissance totale fournie par le réseau : S = √(P² + Q²).",
      },
      reactivePowerKvar: {
        label: "Puissance réactive (kVAR)",
        help: "Puissance non productive magnétisant les charges inductives : Q = √(S² - P²).",
      },
      phaseAngleDeg: {
        label: "Angle de phase (°)",
        help: "Angle entre les formes d'onde tension et courant : φ = arccos(FP).",
      },
      correctionCapacitorMicrofarad: {
        label: "Condensateur de correction (µF)",
        help: "Capacité nécessaire pour améliorer le FP : C = Q_cap / (2π × f × V²).",
      },
      kvarRequired: {
        label: "kVAR nécessaires à la correction",
        help: "Puissance réactive à fournir par la batterie de condensateurs : Q_cap = P × (tan φ1 - tan φ2).",
      },
    },
    options: {
      mode: {
        pf_from_power: "Calculer FP à partir des puissances actives et réactives",
        power_from_pf: "Calculer kW et kVAR à partir de kVA et FP",
        correction: "Calculer le condensateur de correction du FP",
      },
      frequencyHz: {
        "50hz": "50 Hz (Europe / Asie)",
        "60hz": "60 Hz (Amériques)",
      },
    },
    errors: {
      targetPfTooLow: "Le FP cible doit être supérieur au FP actuel.",
      invalidMode: "Veuillez sélectionner un mode de calcul valide.",
    },
    faq: [
      {
        q: "Qu'est-ce que le facteur de puissance ?",
        a: "Le facteur de puissance (FP) est le rapport de la puissance active (kW) à la puissance apparente (kVA). Un FP de 1,0 signifie que toute la puissance fournie est utile.",
      },
      {
        q: "Pourquoi le facteur de puissance est-il important ?",
        a: "Les fournisseurs d'énergie facturent les clients industriels pour un faible FP car le courant réactif charge les câbles sans effectuer de travail utile. Améliorer le FP réduit les factures et la taille des équipements.",
      },
      {
        q: "Comment fonctionne la correction du facteur de puissance ?",
        a: "Les charges inductives absorbent de la puissance réactive. Les condensateurs fournissent localement cette puissance réactive, réduisant le courant réactif tiré du réseau.",
      },
    ],
  },

  es: {
    title: "Calculadora de factor de potencia",
    short: "Calcula el factor de potencia, kVA, kVAR y el condensador de corrección para sistemas AC.",
    description:
      "Calculadora de factor de potencia gratuita. Calcula FP desde potencias activa y reactiva, encuentra kW y kVAR desde kVA y FP, o calcula el condensador necesario para la corrección.",
    keywords: [
      "calculadora factor de potencia",
      "calculadora kVA kW kVAR",
      "condensador corrección factor de potencia",
      "potencia reactiva",
      "potencia aparente",
      "calculadora cos phi",
      "calculadora potencia eléctrica",
    ],
    inputs: {
      mode: {
        label: "Modo de cálculo",
        help: "Elige qué calcular: FP desde valores de potencia, componentes desde FP, o condensador de corrección.",
      },
      realPowerKw: {
        label: "Potencia activa (kW)",
        help: "Potencia útil real consumida por la carga.",
      },
      reactivePowerKvar: {
        label: "Potencia reactiva (kVAR)",
        help: "Potencia que oscila entre fuente y carga (almacenada en inductores/condensadores).",
      },
      kva: {
        label: "Potencia aparente (kVA)",
        help: "Potencia total suministrada por la red — suma vectorial de kW y kVAR.",
      },
      pf: {
        label: "Factor de potencia",
        help: "Relación de potencia activa a aparente (0 a 1). FP = 1 significa carga puramente resistiva.",
      },
      currentPf: {
        label: "Factor de potencia actual",
        help: "Factor de potencia existente de la instalación antes de la corrección.",
      },
      targetPf: {
        label: "Factor de potencia objetivo",
        help: "Factor de potencia deseado tras la corrección (debe ser mayor que el FP actual).",
      },
      voltageV: {
        label: "Tensión del sistema (V)",
        help: "Tensión fase-fase (o fase-neutro para monofásico).",
      },
      frequencyHz: {
        label: "Frecuencia (Hz)",
        help: "Frecuencia de red: 50 Hz (Europa, Asia) o 60 Hz (Américas).",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "Factor de potencia",
        help: "FP = cos(φ) = P/S. Valores cercanos a 1 indican uso eficiente del suministro.",
      },
      realPowerKw: {
        label: "Potencia activa (kW)",
        help: "Potencia útil que realiza trabajo real.",
      },
      apparentPowerKva: {
        label: "Potencia aparente (kVA)",
        help: "Potencia total suministrada: S = √(P² + Q²).",
      },
      reactivePowerKvar: {
        label: "Potencia reactiva (kVAR)",
        help: "Potencia no productiva que magnetiza cargas inductivas: Q = √(S² - P²).",
      },
      phaseAngleDeg: {
        label: "Ángulo de fase (°)",
        help: "Ángulo entre formas de onda de tensión y corriente: φ = arccos(FP).",
      },
      correctionCapacitorMicrofarad: {
        label: "Condensador de corrección (µF)",
        help: "Capacitancia necesaria: C = Q_cap / (2π × f × V²).",
      },
      kvarRequired: {
        label: "kVAR necesarios para corrección",
        help: "Potencia reactiva que debe suministrar el banco de condensadores: Q_cap = P × (tan φ1 - tan φ2).",
      },
    },
    options: {
      mode: {
        pf_from_power: "Calcular FP desde potencias activa y reactiva",
        power_from_pf: "Calcular kW y kVAR desde kVA y FP",
        correction: "Calcular condensador de corrección del FP",
      },
      frequencyHz: {
        "50hz": "50 Hz (Europa / Asia)",
        "60hz": "60 Hz (Américas)",
      },
    },
    errors: {
      targetPfTooLow: "El FP objetivo debe ser mayor que el FP actual.",
      invalidMode: "Selecciona un modo de cálculo válido.",
    },
    faq: [
      {
        q: "¿Qué es el factor de potencia?",
        a: "El factor de potencia (FP) es la relación entre la potencia activa (kW) y la potencia aparente (kVA). Un FP de 1,0 significa que toda la potencia suministrada realiza trabajo útil.",
      },
      {
        q: "¿Por qué es importante el factor de potencia?",
        a: "Las compañías eléctricas penalizan a los clientes industriales con bajo FP porque la corriente reactiva circula por cables y transformadores sin hacer trabajo útil. Mejorar el FP con condensadores reduce facturas y equipos.",
      },
      {
        q: "¿Cómo funciona la corrección del factor de potencia?",
        a: "Las cargas inductivas absorben potencia reactiva. Los condensadores suministran localmente esta potencia reactiva, reduciendo la corriente reactiva tomada de la red.",
      },
    ],
  },

  it: {
    title: "Calcolatore del fattore di potenza",
    short: "Calcola il fattore di potenza, kVA, kVAR e il condensatore di correzione per sistemi AC.",
    description:
      "Calcolatore gratuito del fattore di potenza. Calcola FP da potenza attiva e reattiva, trova kW e kVAR da kVA e FP, o calcola il condensatore per la correzione del fattore di potenza.",
    keywords: [
      "calcolatore fattore di potenza",
      "calcolatore kVA kW kVAR",
      "condensatore correzione fattore di potenza",
      "potenza reattiva",
      "potenza apparente",
      "calcolatore cos phi",
      "calcolatore potenza elettrica",
    ],
    inputs: {
      mode: {
        label: "Modalità di calcolo",
        help: "Scegli cosa calcolare: FP da valori di potenza, componenti di potenza da FP, o condensatore di correzione.",
      },
      realPowerKw: {
        label: "Potenza attiva (kW)",
        help: "Potenza utile realmente consumata dal carico.",
      },
      reactivePowerKvar: {
        label: "Potenza reattiva (kVAR)",
        help: "Potenza che oscilla tra sorgente e carico (immagazzinata in induttori/condensatori).",
      },
      kva: {
        label: "Potenza apparente (kVA)",
        help: "Potenza totale fornita dalla rete — somma vettoriale di kW e kVAR.",
      },
      pf: {
        label: "Fattore di potenza",
        help: "Rapporto tra potenza attiva e apparente (0 a 1). FP = 1 significa carico puramente resistivo.",
      },
      currentPf: {
        label: "Fattore di potenza attuale",
        help: "Fattore di potenza esistente dell'impianto prima della correzione.",
      },
      targetPf: {
        label: "Fattore di potenza target",
        help: "Fattore di potenza desiderato dopo la correzione (deve essere maggiore del FP attuale).",
      },
      voltageV: {
        label: "Tensione di sistema (V)",
        help: "Tensione fase-fase (o fase-neutro per monofase).",
      },
      frequencyHz: {
        label: "Frequenza (Hz)",
        help: "Frequenza di rete: 50 Hz (Europa, Asia) o 60 Hz (Americhe).",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "Fattore di potenza",
        help: "FP = cos(φ) = P/S. Valori vicini a 1 indicano uso efficiente del suministro.",
      },
      realPowerKw: {
        label: "Potenza attiva (kW)",
        help: "Potenza utile che compie lavoro reale.",
      },
      apparentPowerKva: {
        label: "Potenza apparente (kVA)",
        help: "Potenza totale fornita: S = √(P² + Q²).",
      },
      reactivePowerKvar: {
        label: "Potenza reattiva (kVAR)",
        help: "Potenza non produttiva che magnetizza i carichi induttivi: Q = √(S² - P²).",
      },
      phaseAngleDeg: {
        label: "Angolo di fase (°)",
        help: "Angolo tra forme d'onda di tensione e corrente: φ = arccos(FP).",
      },
      correctionCapacitorMicrofarad: {
        label: "Condensatore di correzione (µF)",
        help: "Capacità necessaria: C = Q_cap / (2π × f × V²).",
      },
      kvarRequired: {
        label: "kVAR necessari per la correzione",
        help: "Potenza reattiva che deve fornire il banco di condensatori: Q_cap = P × (tan φ1 - tan φ2).",
      },
    },
    options: {
      mode: {
        pf_from_power: "Calcola FP da potenza attiva e reattiva",
        power_from_pf: "Calcola kW e kVAR da kVA e FP",
        correction: "Calcola il condensatore di correzione del FP",
      },
      frequencyHz: {
        "50hz": "50 Hz (Europa / Asia)",
        "60hz": "60 Hz (Americhe)",
      },
    },
    errors: {
      targetPfTooLow: "Il FP target deve essere maggiore del FP attuale.",
      invalidMode: "Seleziona una modalità di calcolo valida.",
    },
    faq: [
      {
        q: "Cos'è il fattore di potenza?",
        a: "Il fattore di potenza (FP) è il rapporto tra potenza attiva (kW) e potenza apparente (kVA). Un FP di 1,0 significa che tutta la potenza fornita compie lavoro utile.",
      },
      {
        q: "Perché il fattore di potenza è importante?",
        a: "I fornitori di energia penalizzano i clienti industriali con basso FP perché la corrente reattiva percorre cavi e trasformatori senza compiere lavoro utile. Migliorare il FP con condensatori riduce le bollette e le dimensioni dei componenti.",
      },
      {
        q: "Come funziona la correzione del fattore di potenza?",
        a: "I carichi induttivi assorbono potenza reattiva. I condensatori forniscono localmente questa potenza reattiva, riducendo la corrente reattiva prelevata dalla rete.",
      },
    ],
  },

  ar: {
    title: "حاسبة معامل القدرة",
    short: "احسب معامل القدرة وkVA وkVAR ومكثف التصحيح لأنظمة التيار المتردد.",
    description:
      "حاسبة معامل القدرة المجانية. احسب معامل القدرة من القدرة الفعلية والتفاعلية، أو أوجد kW وkVAR من kVA ومعامل القدرة، أو احسب المكثف اللازم للتصحيح.",
    keywords: [
      "حاسبة معامل القدرة",
      "حاسبة kVA kW kVAR",
      "مكثف تصحيح معامل القدرة",
      "القدرة التفاعلية",
      "القدرة الظاهرة",
      "حاسبة cos phi",
      "حاسبة الطاقة الكهربائية",
    ],
    inputs: {
      mode: {
        label: "وضع الحساب",
        help: "اختر ما تريد حسابه: معامل القدرة من قيم الطاقة، أو مكونات الطاقة من معامل القدرة، أو مكثف التصحيح.",
      },
      realPowerKw: {
        label: "القدرة الفعلية (kW)",
        help: "الطاقة المفيدة الفعلية التي يستهلكها الحمل.",
      },
      reactivePowerKvar: {
        label: "القدرة التفاعلية (kVAR)",
        help: "الطاقة التي تتذبذب بين المصدر والحمل (مخزنة في الملفات/المكثفات).",
      },
      kva: {
        label: "القدرة الظاهرة (kVA)",
        help: "إجمالي الطاقة المسحوبة من الشبكة — المجموع المتجهي لـ kW وkVAR.",
      },
      pf: {
        label: "معامل القدرة",
        help: "نسبة القدرة الفعلية إلى الظاهرة (0 إلى 1). معامل قدرة 1 يعني حملاً مقاومياً خالصاً.",
      },
      currentPf: {
        label: "معامل القدرة الحالي",
        help: "معامل القدرة الموجود للمنشأة قبل التصحيح.",
      },
      targetPf: {
        label: "معامل القدرة المستهدف",
        help: "معامل القدرة المطلوب بعد التصحيح (يجب أن يكون أعلى من الحالي).",
      },
      voltageV: {
        label: "جهد النظام (V)",
        help: "جهد الخط-خط (أو خط-محايد للأنظمة الأحادية الطور).",
      },
      frequencyHz: {
        label: "التردد (Hz)",
        help: "تردد الإمداد: 50Hz (أوروبا وآسيا) أو 60Hz (الأمريكتان).",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "معامل القدرة",
        help: "معامل القدرة = cos(φ) = P/S. القيم القريبة من 1 تشير إلى استخدام فعال للطاقة.",
      },
      realPowerKw: {
        label: "القدرة الفعلية (kW)",
        help: "الطاقة المفيدة الفعلية التي تؤدي عملاً.",
      },
      apparentPowerKva: {
        label: "القدرة الظاهرة (kVA)",
        help: "إجمالي الطاقة التي يجب أن تقدمها الشبكة: S = √(P² + Q²).",
      },
      reactivePowerKvar: {
        label: "القدرة التفاعلية (kVAR)",
        help: "الطاقة غير المنتجة التي تُمغنط الأحمال الحثية: Q = √(S² - P²).",
      },
      phaseAngleDeg: {
        label: "زاوية الطور (°)",
        help: "الزاوية بين موجات الجهد والتيار: φ = arccos(معامل القدرة).",
      },
      correctionCapacitorMicrofarad: {
        label: "مكثف التصحيح (µF)",
        help: "السعة اللازمة لتحسين معامل القدرة: C = Q_cap / (2π × f × V²).",
      },
      kvarRequired: {
        label: "kVAR المطلوبة للتصحيح",
        help: "القدرة التفاعلية التي يجب أن تقدمها بطارية المكثفات: Q_cap = P × (tan φ1 - tan φ2).",
      },
    },
    options: {
      mode: {
        pf_from_power: "حساب معامل القدرة من القدرة الفعلية والتفاعلية",
        power_from_pf: "حساب kW وkVAR من kVA ومعامل القدرة",
        correction: "حساب مكثف تصحيح معامل القدرة",
      },
      frequencyHz: {
        "50hz": "50 هرتز (أوروبا / آسيا)",
        "60hz": "60 هرتز (الأمريكتان)",
      },
    },
    errors: {
      targetPfTooLow: "يجب أن يكون معامل القدرة المستهدف أعلى من الحالي.",
      invalidMode: "يرجى اختيار وضع حساب صالح.",
    },
    faq: [
      {
        q: "ما هو معامل القدرة؟",
        a: "معامل القدرة هو نسبة القدرة الفعلية (kW) إلى القدرة الظاهرة (kVA). معامل قدرة 1.0 يعني أن جميع الطاقة المقدمة تؤدي عملاً مفيداً.",
      },
      {
        q: "لماذا يعد معامل القدرة مهماً؟",
        a: "تفرض شركات الكهرباء رسوماً على العملاء الصناعيين ذوي معامل القدرة المنخفض، لأن التيار التفاعلي يتدفق في الأسلاك دون أداء عمل مفيد. تحسين معامل القدرة بالمكثفات يقلل الفواتير وأحجام المعدات.",
      },
      {
        q: "كيف يعمل تصحيح معامل القدرة؟",
        a: "الأحمال الحثية تمتص القدرة التفاعلية. المكثفات توفر القدرة التفاعلية محلياً، مما يقلل التيار التفاعلي المسحوب من الشبكة.",
      },
    ],
  },

  ru: {
    title: "Калькулятор коэффициента мощности",
    short: "Рассчитайте коэффициент мощности, кВА, кВАр и конденсатор для компенсации в AC-системах.",
    description:
      "Бесплатный калькулятор коэффициента мощности. Рассчитайте cos(φ) из активной и реактивной мощности, найдите кВт и кВАр из кВА и cos(φ), или рассчитайте конденсатор для компенсации.",
    keywords: [
      "калькулятор коэффициента мощности",
      "калькулятор кВА кВт кВАр",
      "конденсатор компенсации реактивной мощности",
      "реактивная мощность",
      "полная мощность",
      "калькулятор cos phi",
      "калькулятор электрической мощности",
    ],
    inputs: {
      mode: {
        label: "Режим расчёта",
        help: "Выберите, что рассчитывать: cos(φ) из мощностей, составляющие мощности из cos(φ), или конденсатор компенсации.",
      },
      realPowerKw: {
        label: "Активная мощность (кВт)",
        help: "Реальная полезная мощность, потребляемая нагрузкой.",
      },
      reactivePowerKvar: {
        label: "Реактивная мощность (кВАр)",
        help: "Мощность, колеблющаяся между источником и нагрузкой (накапливается в катушках/конденсаторах).",
      },
      kva: {
        label: "Полная мощность (кВА)",
        help: "Суммарная мощность от источника питания — векторная сумма кВт и кВАр.",
      },
      pf: {
        label: "Коэффициент мощности",
        help: "Отношение активной мощности к полной (от 0 до 1). КМ = 1 означает чисто активную нагрузку.",
      },
      currentPf: {
        label: "Текущий коэффициент мощности",
        help: "Существующий коэффициент мощности установки до компенсации.",
      },
      targetPf: {
        label: "Целевой коэффициент мощности",
        help: "Желаемый коэффициент мощности после компенсации (должен быть выше текущего).",
      },
      voltageV: {
        label: "Напряжение системы (В)",
        help: "Линейное напряжение (или фазное для однофазных систем).",
      },
      frequencyHz: {
        label: "Частота (Гц)",
        help: "Частота питания: 50 Гц (Европа, Азия) или 60 Гц (Америка).",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "Коэффициент мощности",
        help: "КМ = cos(φ) = P/S. Значения, близкие к 1, свидетельствуют об эффективном использовании электроэнергии.",
      },
      realPowerKw: {
        label: "Активная мощность (кВт)",
        help: "Полезная мощность, совершающая реальную работу.",
      },
      apparentPowerKva: {
        label: "Полная мощность (кВА)",
        help: "Суммарная мощность, которую должен обеспечить источник: S = √(P² + Q²).",
      },
      reactivePowerKvar: {
        label: "Реактивная мощность (кВАр)",
        help: "Непроизводительная мощность для намагничивания индуктивных нагрузок: Q = √(S² - P²).",
      },
      phaseAngleDeg: {
        label: "Угол сдвига фаз (°)",
        help: "Угол между формами волн напряжения и тока: φ = arccos(КМ).",
      },
      correctionCapacitorMicrofarad: {
        label: "Компенсирующий конденсатор (мкФ)",
        help: "Необходимая ёмкость: C = Q_кон / (2π × f × V²).",
      },
      kvarRequired: {
        label: "кВАр для компенсации",
        help: "Реактивная мощность, которую должна обеспечить батарея конденсаторов: Q_кон = P × (tan φ1 - tan φ2).",
      },
    },
    options: {
      mode: {
        pf_from_power: "Рассчитать cos(φ) из активной и реактивной мощности",
        power_from_pf: "Рассчитать кВт и кВАр из кВА и cos(φ)",
        correction: "Рассчитать конденсатор компенсации cos(φ)",
      },
      frequencyHz: {
        "50hz": "50 Гц (Европа / Азия)",
        "60hz": "60 Гц (Америка)",
      },
    },
    errors: {
      targetPfTooLow: "Целевой КМ должен быть выше текущего КМ.",
      invalidMode: "Пожалуйста, выберите корректный режим расчёта.",
    },
    faq: [
      {
        q: "Что такое коэффициент мощности?",
        a: "Коэффициент мощности (cos φ) — отношение активной мощности (кВт) к полной мощности (кВА). КМ = 1,0 означает, что вся подводимая мощность совершает полезную работу.",
      },
      {
        q: "Почему коэффициент мощности важен?",
        a: "Энергокомпании начисляют дополнительную плату клиентам с низким КМ, поскольку реактивный ток нагружает линии без полезной работы. Компенсация конденсаторами снижает счета и размеры оборудования.",
      },
      {
        q: "Как работает компенсация реактивной мощности?",
        a: "Индуктивные нагрузки потребляют реактивную мощность. Конденсаторы обеспечивают её локально, снижая потребление реактивного тока из сети.",
      },
    ],
  },

  zh: {
    title: "功率因数计算器",
    short: "计算交流系统的功率因数、kVA、kVAR和校正电容。",
    description:
      "免费功率因数计算器。从有功和无功功率计算功率因数，从kVA和功率因数求kW和kVAR，或计算功率因数校正所需电容。",
    keywords: [
      "功率因数计算器",
      "kVA kW kVAR计算器",
      "功率因数校正电容",
      "无功功率",
      "视在功率",
      "cos phi计算器",
      "电力计算器",
    ],
    inputs: {
      mode: {
        label: "计算模式",
        help: "选择计算内容：从功率值求功率因数、从功率因数求功率分量，或计算校正电容。",
      },
      realPowerKw: {
        label: "有功功率（kW）",
        help: "负载实际消耗的有用功率，也称主动功率。",
      },
      reactivePowerKvar: {
        label: "无功功率（kVAR）",
        help: "在电源和负载之间振荡的功率（储存在电感/电容中）。",
      },
      kva: {
        label: "视在功率（kVA）",
        help: "从电源取用的总功率——kW和kVAR的向量和。",
      },
      pf: {
        label: "功率因数",
        help: "有功功率与视在功率之比（0到1）。功率因数=1表示纯电阻负载。",
      },
      currentPf: {
        label: "当前功率因数",
        help: "校正前装置的现有功率因数。",
      },
      targetPf: {
        label: "目标功率因数",
        help: "电容校正后期望的功率因数（必须高于当前功率因数）。",
      },
      voltageV: {
        label: "系统电压（V）",
        help: "线间电压（单相系统为线对地电压）。",
      },
      frequencyHz: {
        label: "频率（Hz）",
        help: "电源频率：50Hz（欧洲、亚洲）或60Hz（美洲）。",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "功率因数",
        help: "功率因数 = cos(φ) = P/S。接近1的值表示电源利用效率高。",
      },
      realPowerKw: {
        label: "有功功率（kW）",
        help: "实际做功的有用功率。",
      },
      apparentPowerKva: {
        label: "视在功率（kVA）",
        help: "电源必须提供的总功率：S = √(P² + Q²)。",
      },
      reactivePowerKvar: {
        label: "无功功率（kVAR）",
        help: "磁化感性负载的非做功功率：Q = √(S² - P²)。",
      },
      phaseAngleDeg: {
        label: "相位角（°）",
        help: "电压和电流波形之间的角度：φ = arccos(功率因数)。",
      },
      correctionCapacitorMicrofarad: {
        label: "校正电容（µF）",
        help: "提高功率因数所需的电容：C = Q_cap / (2π × f × V²)。",
      },
      kvarRequired: {
        label: "校正所需kVAR",
        help: "电容器组须提供的无功功率：Q_cap = P × (tan φ1 - tan φ2)。",
      },
    },
    options: {
      mode: {
        pf_from_power: "从有功和无功功率计算功率因数",
        power_from_pf: "从kVA和功率因数计算kW和kVAR",
        correction: "计算功率因数校正电容",
      },
      frequencyHz: {
        "50hz": "50 Hz（欧洲/亚洲）",
        "60hz": "60 Hz（美洲）",
      },
    },
    errors: {
      targetPfTooLow: "目标功率因数必须高于当前功率因数。",
      invalidMode: "请选择有效的计算模式。",
    },
    faq: [
      {
        q: "什么是功率因数？",
        a: "功率因数（PF）是有功功率（kW）与视在功率（kVA）的比值。功率因数1.0表示所有供电都做有用功。",
      },
      {
        q: "为什么功率因数重要？",
        a: "电力公司对低功率因数工业用户收取额外费用，因为无功电流在导线中流动而不做有用功。用电容改善功率因数可降低电费和设备尺寸。",
      },
      {
        q: "功率因数校正如何工作？",
        a: "感性负载（电机、变压器）吸收无功功率。电容器就地提供无功功率，减少从电网取用的无功电流，净效果是电网看到更高的功率因数。",
      },
    ],
  },

  ja: {
    title: "力率計算機",
    short: "交流システムの力率・kVA・kVAR・力率改善コンデンサを計算します。",
    description:
      "無料の力率計算機。有効電力と無効電力から力率を計算、kVAと力率からkWとkVARを求め、または力率改善に必要なコンデンサを計算します。",
    keywords: [
      "力率計算機",
      "kVA kW kVAR計算",
      "力率改善コンデンサ",
      "無効電力",
      "皮相電力",
      "cos phi計算",
      "電力計算機",
    ],
    inputs: {
      mode: {
        label: "計算モード",
        help: "計算内容を選択：電力値から力率、力率から電力成分、または改善コンデンサ。",
      },
      realPowerKw: {
        label: "有効電力（kW）",
        help: "負荷が実際に消費する有効電力（仕事をする電力）。",
      },
      reactivePowerKvar: {
        label: "無効電力（kVAR）",
        help: "電源と負荷の間を往来する電力（コイル/コンデンサに蓄積）。",
      },
      kva: {
        label: "皮相電力（kVA）",
        help: "電源から取る総電力——kWとkVARのベクトル和。",
      },
      pf: {
        label: "力率",
        help: "有効電力と皮相電力の比（0〜1）。力率=1は純抵抗負荷を意味します。",
      },
      currentPf: {
        label: "現在の力率",
        help: "改善前の設備の既存力率。",
      },
      targetPf: {
        label: "目標力率",
        help: "コンデンサ補償後の目標力率（現在の力率より大きくなければなりません）。",
      },
      voltageV: {
        label: "系統電圧（V）",
        help: "線間電圧（単相は線対地電圧）。",
      },
      frequencyHz: {
        label: "周波数（Hz）",
        help: "電源周波数：50Hz（欧州・アジア）または60Hz（南北アメリカ）。",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "力率",
        help: "力率 = cos(φ) = P/S。1に近い値は電源の効率的利用を示します。",
      },
      realPowerKw: {
        label: "有効電力（kW）",
        help: "実際に仕事をする有効電力。",
      },
      apparentPowerKva: {
        label: "皮相電力（kVA）",
        help: "電源が供給すべき総電力：S = √(P² + Q²)。",
      },
      reactivePowerKvar: {
        label: "無効電力（kVAR）",
        help: "誘導負荷を磁化する仕事をしない電力：Q = √(S² - P²)。",
      },
      phaseAngleDeg: {
        label: "位相角（°）",
        help: "電圧と電流波形の位相差：φ = arccos(力率)。",
      },
      correctionCapacitorMicrofarad: {
        label: "改善コンデンサ（µF）",
        help: "力率改善に必要な静電容量：C = Q_cap / (2π × f × V²)。",
      },
      kvarRequired: {
        label: "改善に必要なkVAR",
        help: "コンデンサバンクが供給すべき無効電力：Q_cap = P × (tan φ1 - tan φ2)。",
      },
    },
    options: {
      mode: {
        pf_from_power: "有効・無効電力から力率を計算",
        power_from_pf: "kVAと力率からkWとkVARを計算",
        correction: "力率改善コンデンサを計算",
      },
      frequencyHz: {
        "50hz": "50 Hz（欧州・アジア）",
        "60hz": "60 Hz（南北アメリカ）",
      },
    },
    errors: {
      targetPfTooLow: "目標力率は現在の力率より大きくなければなりません。",
      invalidMode: "有効な計算モードを選択してください。",
    },
    faq: [
      {
        q: "力率とは何ですか？",
        a: "力率（PF）は有効電力（kW）と皮相電力（kVA）の比です。力率1.0はすべての供給電力が有効な仕事をしていることを意味します。",
      },
      {
        q: "力率はなぜ重要ですか？",
        a: "電力会社は低力率の産業顧客に追加料金を課します。無効電流は電線を流れながら有効な仕事をせず損失を生じます。コンデンサで力率を改善すると電力料金と設備規模が削減できます。",
      },
      {
        q: "力率改善の仕組みは？",
        a: "誘導負荷（モーター・変圧器）は無効電力を消費します。コンデンサが無効電力を局所供給することで系統からの無効電流を減らし、結果として見かけの力率が改善します。",
      },
    ],
  },

  ko: {
    title: "역률 계산기",
    short: "교류 시스템의 역률, kVA, kVAR 및 역률 보상 커패시터를 계산하세요.",
    description:
      "무료 역률 계산기. 유효 전력과 무효 전력에서 역률을 계산하거나, kVA와 역률에서 kW와 kVAR를 구하거나, 역률 보상에 필요한 커패시터를 계산하세요.",
    keywords: [
      "역률 계산기",
      "kVA kW kVAR 계산기",
      "역률 보상 커패시터",
      "무효 전력",
      "피상 전력",
      "cos phi 계산기",
      "전력 계산기",
    ],
    inputs: {
      mode: {
        label: "계산 모드",
        help: "계산할 내용 선택: 전력값에서 역률, 역률에서 전력 성분, 또는 보상 커패시터.",
      },
      realPowerKw: {
        label: "유효 전력(kW)",
        help: "부하가 실제로 소비하는 유용한 전력(능동 전력).",
      },
      reactivePowerKvar: {
        label: "무효 전력(kVAR)",
        help: "전원과 부하 사이를 오가는 전력(인덕터/커패시터에 저장).",
      },
      kva: {
        label: "피상 전력(kVA)",
        help: "전원에서 끌어오는 총 전력 — kW와 kVAR의 벡터 합.",
      },
      pf: {
        label: "역률",
        help: "유효 전력 대 피상 전력의 비율(0~1). 역률=1은 순수 저항 부하를 의미합니다.",
      },
      currentPf: {
        label: "현재 역률",
        help: "보상 전 설비의 현재 역률.",
      },
      targetPf: {
        label: "목표 역률",
        help: "커패시터 보상 후 원하는 역률(현재 역률보다 높아야 함).",
      },
      voltageV: {
        label: "시스템 전압(V)",
        help: "선간 전압(단상 시스템은 선-중성점 전압).",
      },
      frequencyHz: {
        label: "주파수(Hz)",
        help: "공급 주파수: 50Hz(유럽, 아시아) 또는 60Hz(아메리카).",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "역률",
        help: "역률 = cos(φ) = P/S. 1에 가까운 값은 전원의 효율적 사용을 나타냅니다.",
      },
      realPowerKw: {
        label: "유효 전력(kW)",
        help: "실제로 일을 하는 유용한 전력.",
      },
      apparentPowerKva: {
        label: "피상 전력(kVA)",
        help: "전원이 공급해야 하는 총 전력: S = √(P² + Q²).",
      },
      reactivePowerKvar: {
        label: "무효 전력(kVAR)",
        help: "유도성 부하를 자화시키는 비생산적 전력: Q = √(S² - P²).",
      },
      phaseAngleDeg: {
        label: "위상각(°)",
        help: "전압과 전류 파형 사이의 각도: φ = arccos(역률).",
      },
      correctionCapacitorMicrofarad: {
        label: "보상 커패시터(µF)",
        help: "역률 개선에 필요한 정전용량: C = Q_cap / (2π × f × V²).",
      },
      kvarRequired: {
        label: "보상에 필요한 kVAR",
        help: "커패시터 뱅크가 공급해야 할 무효 전력: Q_cap = P × (tan φ1 - tan φ2).",
      },
    },
    options: {
      mode: {
        pf_from_power: "유효 및 무효 전력에서 역률 계산",
        power_from_pf: "kVA와 역률에서 kW와 kVAR 계산",
        correction: "역률 보상 커패시터 계산",
      },
      frequencyHz: {
        "50hz": "50 Hz(유럽/아시아)",
        "60hz": "60 Hz(아메리카)",
      },
    },
    errors: {
      targetPfTooLow: "목표 역률은 현재 역률보다 높아야 합니다.",
      invalidMode: "유효한 계산 모드를 선택하세요.",
    },
    faq: [
      {
        q: "역률이란 무엇인가요?",
        a: "역률(PF)은 유효 전력(kW)과 피상 전력(kVA)의 비율입니다. 역률 1.0은 공급된 모든 전력이 유용한 일을 한다는 의미입니다.",
      },
      {
        q: "역률이 중요한 이유는 무엇인가요?",
        a: "전력회사는 역률이 낮은 산업 고객에게 추가 요금을 부과합니다. 무효 전류가 유용한 일 없이 전선에 흐르기 때문입니다. 커패시터로 역률을 개선하면 전기요금과 설비 규모를 줄일 수 있습니다.",
      },
      {
        q: "역률 보상은 어떻게 작동하나요?",
        a: "유도성 부하(모터, 변압기)는 무효 전력을 흡수합니다. 커패시터가 무효 전력을 로컬로 공급하여 전력망에서 끌어오는 무효 전류를 줄입니다.",
      },
    ],
  },

  hi: {
    title: "पावर फैक्टर कैलकुलेटर",
    short: "AC विद्युत प्रणालियों के लिए पावर फैक्टर, kVA, kVAR और सुधार कैपेसिटर की गणना करें।",
    description:
      "मुफ़्त पावर फैक्टर कैलकुलेटर। वास्तविक और प्रतिक्रियाशील शक्ति से PF गणना करें, kVA और PF से kW और kVAR निकालें, या पावर फैक्टर सुधार के लिए आवश्यक कैपेसिटर की गणना करें।",
    keywords: [
      "पावर फैक्टर कैलकुलेटर",
      "kVA kW kVAR कैलकुलेटर",
      "पावर फैक्टर सुधार कैपेसिटर",
      "प्रतिक्रियाशील शक्ति",
      "आभासी शक्ति",
      "cos phi कैलकुलेटर",
      "विद्युत शक्ति कैलकुलेटर",
    ],
    inputs: {
      mode: {
        label: "गणना मोड",
        help: "चुनें क्या गणना करना है: शक्ति मानों से PF, PF से शक्ति घटक, या सुधार कैपेसिटर।",
      },
      realPowerKw: {
        label: "वास्तविक शक्ति (kW)",
        help: "लोड द्वारा वास्तव में उपभोग की गई उपयोगी शक्ति। सक्रिय शक्ति भी कहते हैं।",
      },
      reactivePowerKvar: {
        label: "प्रतिक्रियाशील शक्ति (kVAR)",
        help: "शक्ति जो स्रोत और लोड के बीच दोलन करती है (इंडक्टर/कैपेसिटर में संग्रहीत)।",
      },
      kva: {
        label: "आभासी शक्ति (kVA)",
        help: "आपूर्ति से ली गई कुल शक्ति — kW और kVAR का वेक्टर योग।",
      },
      pf: {
        label: "पावर फैक्टर",
        help: "वास्तविक शक्ति का आभासी शक्ति से अनुपात (0 से 1)। PF=1 शुद्ध प्रतिरोधक लोड है।",
      },
      currentPf: {
        label: "वर्तमान पावर फैक्टर",
        help: "सुधार से पहले इंस्टॉलेशन का मौजूदा पावर फैक्टर।",
      },
      targetPf: {
        label: "लक्ष्य पावर फैक्टर",
        help: "कैपेसिटर सुधार के बाद वांछित पावर फैक्टर (वर्तमान PF से अधिक होना चाहिए)।",
      },
      voltageV: {
        label: "सिस्टम वोल्टेज (V)",
        help: "लाइन-टू-लाइन (या एकल-फेज के लिए लाइन-टू-न्यूट्रल) सप्लाई वोल्टेज।",
      },
      frequencyHz: {
        label: "आवृत्ति (Hz)",
        help: "सप्लाई आवृत्ति: 50Hz (यूरोप, एशिया) या 60Hz (अमेरिका)।",
      },
    },
    outputs: {
      powerFactorPf: {
        label: "पावर फैक्टर",
        help: "PF = cos(φ) = P/S। 1 के करीब मान कुशल विद्युत उपयोग दर्शाते हैं।",
      },
      realPowerKw: {
        label: "वास्तविक शक्ति (kW)",
        help: "वास्तविक उपयोगी शक्ति जो काम करती है।",
      },
      apparentPowerKva: {
        label: "आभासी शक्ति (kVA)",
        help: "आपूर्ति को प्रदान करनी होगी: S = √(P² + Q²)।",
      },
      reactivePowerKvar: {
        label: "प्रतिक्रियाशील शक्ति (kVAR)",
        help: "प्रेरक भार को चुम्बकित करने वाली अनुत्पादक शक्ति: Q = √(S² - P²)।",
      },
      phaseAngleDeg: {
        label: "फेज कोण (°)",
        help: "वोल्टेज और करंट तरंगों के बीच का कोण: φ = arccos(PF)।",
      },
      correctionCapacitorMicrofarad: {
        label: "सुधार कैपेसिटर (µF)",
        help: "PF सुधार के लिए आवश्यक धारिता: C = Q_cap / (2π × f × V²)।",
      },
      kvarRequired: {
        label: "सुधार के लिए आवश्यक kVAR",
        help: "कैपेसिटर बैंक को प्रदान करनी होगी: Q_cap = P × (tan φ1 - tan φ2)।",
      },
    },
    options: {
      mode: {
        pf_from_power: "वास्तविक और प्रतिक्रियाशील शक्ति से PF गणना करें",
        power_from_pf: "kVA और PF से kW और kVAR गणना करें",
        correction: "PF सुधार कैपेसिटर गणना करें",
      },
      frequencyHz: {
        "50hz": "50 Hz (यूरोप / एशिया)",
        "60hz": "60 Hz (अमेरिका)",
      },
    },
    errors: {
      targetPfTooLow: "लक्ष्य PF वर्तमान PF से अधिक होना चाहिए।",
      invalidMode: "कृपया एक मान्य गणना मोड चुनें।",
    },
    faq: [
      {
        q: "पावर फैक्टर क्या है?",
        a: "पावर फैक्टर (PF) वास्तविक शक्ति (kW) और आभासी शक्ति (kVA) का अनुपात है। PF=1.0 का अर्थ है कि सभी आपूर्ति शक्ति उपयोगी काम करती है।",
      },
      {
        q: "पावर फैक्टर क्यों महत्वपूर्ण है?",
        a: "बिजली कंपनियां कम PF वाले औद्योगिक ग्राहकों से अतिरिक्त शुल्क लेती हैं क्योंकि प्रतिक्रियाशील धारा केबल में बिना उपयोगी काम किए बहती है। कैपेसिटर से PF सुधारने से बिजली बिल और उपकरण का आकार कम होता है।",
      },
      {
        q: "पावर फैक्टर सुधार कैसे काम करता है?",
        a: "प्रेरक भार (मोटर, ट्रांसफार्मर) प्रतिक्रियाशील शक्ति अवशोषित करते हैं। कैपेसिटर स्थानीय रूप से प्रतिक्रियाशील शक्ति प्रदान करते हैं, जिससे ग्रिड से खींची जाने वाली प्रतिक्रियाशील धारा कम होती है।",
      },
    ],
  },
};

export default i18n;
