import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Ohm's Law Calculator",
    short: "Solve for voltage, current, resistance, or power — enter any two known values.",
    description:
      "Free Ohm's Law calculator. Enter any two of voltage (V), current (I), resistance (R), or power (P) and instantly calculate the other two using V=IR and P=VI.",
    keywords: [
      "Ohm's law calculator",
      "voltage calculator",
      "current calculator",
      "resistance calculator",
      "power calculator",
      "V=IR",
      "electronics calculator",
    ],
    inputs: {
      knownQty1: {
        label: "First known quantity",
        help: "Select the first electrical quantity you know.",
      },
      value1: {
        label: "Value 1",
        help: "Enter the numeric value for the first known quantity.",
      },
      knownQty2: {
        label: "Second known quantity",
        help: "Select the second electrical quantity you know (must differ from the first).",
      },
      value2: {
        label: "Value 2",
        help: "Enter the numeric value for the second known quantity.",
      },
    },
    outputs: {
      voltage: {
        label: "Voltage (V)",
        help: "Electrical potential difference in volts.",
      },
      current: {
        label: "Current (I)",
        help: "Flow of electric charge in amperes.",
      },
      resistance: {
        label: "Resistance (R)",
        help: "Opposition to current flow in ohms.",
      },
      power: {
        label: "Power (P)",
        help: "Rate of energy transfer in watts.",
      },
    },
    options: {
      knownQty1: {
        voltage: "Voltage (V)",
        current: "Current (A)",
        resistance: "Resistance (Ω)",
        power: "Power (W)",
      },
      knownQty2: {
        voltage: "Voltage (V)",
        current: "Current (A)",
        resistance: "Resistance (Ω)",
        power: "Power (W)",
      },
    },
    errors: {
      sameQuantity: "The two known quantities must be different.",
      nonPositive: "All values must be greater than zero.",
    },
    faq: [
      {
        q: "What is Ohm's Law?",
        a: "Ohm's Law states that the voltage across a conductor is directly proportional to the current flowing through it, given constant temperature. It is expressed as V = I × R, where V is voltage (volts), I is current (amperes), and R is resistance (ohms).",
      },
      {
        q: "How do I calculate power using Ohm's Law?",
        a: "Power can be calculated in three ways: P = V × I, P = I² × R, or P = V² / R. This calculator solves for all four quantities when any two are provided.",
      },
      {
        q: "Can I use this for AC circuits?",
        a: "Ohm's Law applies directly to DC resistive circuits. For AC circuits with capacitors or inductors, you must use impedance (Z) instead of resistance (R), and results become frequency-dependent.",
      },
    ],
  },
  nl: {
    title: "Wet van Ohm Calculator",
    short: "Solve for voltage, current, resistance, or power — enter any two known values.",
    description:
      "Gratis Wet van Ohm calculator. Enter any two of voltage (V), current (I), resistance (R), or power (P) and direct bereken the other two using V=IR and P=VI.",
    keywords: [
      "Ohm's law calculator",
      "voltage calculator",
      "current calculator",
      "resistance calculator",
      "power calculator",
      "V=IR",
      "electronics calculator",
    ],
    inputs: {
      knownQty1: {
        label: "First known quantity",
        help: "Select the first electrical quantity you know.",
      },
      value1: {
        label: "Waarde 1",
        help: "Enter the numeric value for the first known quantity.",
      },
      knownQty2: {
        label: "Second known quantity",
        help: "Select the second electrical quantity you know (must differ from the first).",
      },
      value2: {
        label: "Waarde 2",
        help: "Enter the numeric value for the second known quantity.",
      },
    },
    outputs: {
      voltage: {
        label: "Voltage (V)",
        help: "Electrical potential difference in volts.",
      },
      current: {
        label: "Current (I)",
        help: "Flow of electric charge in amperes.",
      },
      resistance: {
        label: "Resistance (R)",
        help: "Opposition to current flow in ohms.",
      },
      power: {
        label: "Power (P)",
        help: "Rate of energy transfer in watts.",
      },
    },
    options: {
      knownQty1: {
        voltage: "Voltage (V)",
        current: "Current (A)",
        resistance: "Resistance (Ω)",
        power: "Power (W)",
      },
      knownQty2: {
        voltage: "Voltage (V)",
        current: "Current (A)",
        resistance: "Resistance (Ω)",
        power: "Power (W)",
      },
    },
    errors: {
      sameQuantity: "The two known quantities must be different.",
      nonPositive: "All values must be greater than zero.",
    },
    faq: [
      {
        q: "What is Wet van Ohm?",
        a: "Wet van Ohm states that the voltage across a conductor is directly proportional to the current flowing through it, given constant temperature. It is expressed as V = I × R, where V is voltage (volts), I is current (amperes), and R is resistance (ohms).",
      },
      {
        q: "How do I bereken power using Wet van Ohm?",
        a: "Power can be berekend in three ways: P = V × I, P = I² × R, or P = V² / R. This calculator solves for all four quantities when any two are provided.",
      },
      {
        q: "Can I use this for AC circuits?",
        a: "Wet van Ohm applies directly to DC resistive circuits. For AC circuits with capacitors or inductors, you must use impedance (Z) instead of resistance (R), and results become frequency-dependent.",
      },
    ],
  },

  pl: {
    title: "Prawo Ohma Kalkulator",
    short: "Solve for voltage, current, resistance, or power — enter any two known values.",
    description:
      "Darmowy Prawo Ohma kalkulator. Enter any two of voltage (V), current (I), resistance (R), or power (P) and natychmiast oblicz the other two using V=IR and P=VI.",
    keywords: [
      "Ohm's law kalkulator",
      "voltage kalkulator",
      "current kalkulator",
      "resistance kalkulator",
      "power kalkulator",
      "V=IR",
      "electronics kalkulator",
    ],
    inputs: {
      knownQty1: {
        label: "First known quantity",
        help: "Select the first electrical quantity you know.",
      },
      value1: {
        label: "Wartość 1",
        help: "Enter the numeric value for the first known quantity.",
      },
      knownQty2: {
        label: "Second known quantity",
        help: "Select the second electrical quantity you know (must differ from the first).",
      },
      value2: {
        label: "Wartość 2",
        help: "Enter the numeric value for the second known quantity.",
      },
    },
    outputs: {
      voltage: {
        label: "Voltage (V)",
        help: "Electrical potential difference in volts.",
      },
      current: {
        label: "Current (I)",
        help: "Flow of electric charge in amperes.",
      },
      resistance: {
        label: "Resistance (R)",
        help: "Opposition to current flow in ohms.",
      },
      power: {
        label: "Power (P)",
        help: "Rate of energy transfer in watts.",
      },
    },
    options: {
      knownQty1: {
        voltage: "Voltage (V)",
        current: "Current (A)",
        resistance: "Resistance (Ω)",
        power: "Power (W)",
      },
      knownQty2: {
        voltage: "Voltage (V)",
        current: "Current (A)",
        resistance: "Resistance (Ω)",
        power: "Power (W)",
      },
    },
    errors: {
      sameQuantity: "The two known quantities must be different.",
      nonPositive: "All values must be greater than zero.",
    },
    faq: [
      {
        q: "What is Prawo Ohma?",
        a: "Prawo Ohma states that the voltage across a conductor is directly proportional to the current flowing through it, given constant temperature. It is expressed as V = I × R, where V is voltage (volts), I is current (amperes), and R is resistance (ohms).",
      },
      {
        q: "How do I oblicz power using Prawo Ohma?",
        a: "Power can be obliczd in three ways: P = V × I, P = I² × R, or P = V² / R. This kalkulator solves for all four quantities when any two are provided.",
      },
      {
        q: "Can I use this for AC circuits?",
        a: "Prawo Ohma applies directly to DC resistive circuits. For AC circuits with capacitors or inductors, you must use impedance (Z) instead of resistance (R), and results become frequency-dependent.",
      },
    ],
  },
  pt: {
    title: "Calculadora da Lei de Ohm",
    short: "Calcule tensão, corrente, resistência e potência usando a lei de Ohm.",
    description:
      "Calculadora gratuita da lei de Ohm. Dados dois valores entre tensão (V), corrente (I), resistência (R) e potência (P), calcule os outros dois.",
    keywords: ["lei Ohm", "V=IR", "tensão corrente", "resistência", "potência elétrica"],
    inputs: {
      knownQty1: {
        label: "First known quantity",
        help: "Select the first electrical quantity you know.",
      },
      value1: {
        label: "Value 1",
        help: "Enter the numeric value for the first known quantity.",
      },
      knownQty2: {
        label: "Second known quantity",
        help: "Select the second electrical quantity you know (must differ from the first).",
      },
      value2: {
        label: "Value 2",
        help: "Enter the numeric value for the second known quantity.",
      },
    },
    outputs: {
      voltage: {
        label: "Voltage (V)",
        help: "Electrical potential difference in volts.",
      },
      current: {
        label: "Current (I)",
        help: "Flow of electric charge in amperes.",
      },
      resistance: {
        label: "Resistance (R)",
        help: "Opposition to current flow in ohms.",
      },
      power: {
        label: "Power (P)",
        help: "Rate of energy transfer in watts.",
      },
    },
    options: {
      knownQty1: {
        voltage: "Voltage (V)",
        current: "Current (A)",
        resistance: "Resistance (Ω)",
        power: "Power (W)",
      },
      knownQty2: {
        voltage: "Voltage (V)",
        current: "Current (A)",
        resistance: "Resistance (Ω)",
        power: "Power (W)",
      },
    },
    errors: {
      sameQuantity: "The two known quantities must be different.",
      nonPositive: "All values must be greater than zero.",
    },
    faq: [
      {
        q: "What is Ohm's Law?",
        a: "Ohm's Law states that the voltage across a conductor is directly proportional to the current flowing through it, given constant temperature. It is expressed as V = I × R, where V is voltage (volts), I is current (amperes), and R is resistance (ohms).",
      },
      {
        q: "How do I calculate power using Ohm's Law?",
        a: "Power can be calculated in three ways: P = V × I, P = I² × R, or P = V² / R. This calculator solves for all four quantities when any two are provided.",
      },
      {
        q: "Can I use this for AC circuits?",
        a: "Ohm's Law applies directly to DC resistive circuits. For AC circuits with capacitors or inductors, you must use impedance (Z) instead of resistance (R), and results become frequency-dependent.",
      },
    ],
  },
  id: {
    title: "Kalkulator Hukum Ohm",
    short: "Hitung tegangan, arus, resistansi, dan daya menggunakan hukum Ohm.",
    description:
      "Kalkulator hukum Ohm gratis. Dari dua nilai antara tegangan (V), arus (I), resistansi (R), dan daya (P), hitung dua nilai lainnya.",
    keywords: ["hukum Ohm", "V=IR", "tegangan arus", "resistansi", "daya listrik"],
    inputs: {
      knownQty1: {
        label: "First known quantity",
        help: "Select the first electrical quantity you know.",
      },
      value1: {
        label: "Value 1",
        help: "Enter the numeric value for the first known quantity.",
      },
      knownQty2: {
        label: "Second known quantity",
        help: "Select the second electrical quantity you know (must differ from the first).",
      },
      value2: {
        label: "Value 2",
        help: "Enter the numeric value for the second known quantity.",
      },
    },
    outputs: {
      voltage: {
        label: "Voltage (V)",
        help: "Electrical potential difference in volts.",
      },
      current: {
        label: "Current (I)",
        help: "Flow of electric charge in amperes.",
      },
      resistance: {
        label: "Resistance (R)",
        help: "Opposition to current flow in ohms.",
      },
      power: {
        label: "Power (P)",
        help: "Rate of energy transfer in watts.",
      },
    },
    options: {
      knownQty1: {
        voltage: "Voltage (V)",
        current: "Current (A)",
        resistance: "Resistance (Ω)",
        power: "Power (W)",
      },
      knownQty2: {
        voltage: "Voltage (V)",
        current: "Current (A)",
        resistance: "Resistance (Ω)",
        power: "Power (W)",
      },
    },
    errors: {
      sameQuantity: "The two known quantities must be different.",
      nonPositive: "All values must be greater than zero.",
    },
    faq: [
      {
        q: "What is Ohm's Law?",
        a: "Ohm's Law states that the voltage across a conductor is directly proportional to the current flowing through it, given constant temperature. It is expressed as V = I × R, where V is voltage (volts), I is current (amperes), and R is resistance (ohms).",
      },
      {
        q: "How do I calculate power using Ohm's Law?",
        a: "Power can be calculated in three ways: P = V × I, P = I² × R, or P = V² / R. This calculator solves for all four quantities when any two are provided.",
      },
      {
        q: "Can I use this for AC circuits?",
        a: "Ohm's Law applies directly to DC resistive circuits. For AC circuits with capacitors or inductors, you must use impedance (Z) instead of resistance (R), and results become frequency-dependent.",
      },
    ],
  },


  tr: {
    title: "Ohm Kanunu Hesaplayıcı",
    short: "Gerilim, akım, direnç veya güçten herhangi ikisini girerek diğerlerini hesaplayın.",
    description:
      "Ücretsiz Ohm Kanunu hesaplayıcısı. Gerilim (V), akım (I), direnç (R) veya güç (P) değerlerinden herhangi ikisini girin; V=IR ve P=VI formülleriyle diğer ikisini anında hesaplayın.",
    keywords: [
      "Ohm kanunu hesaplayıcı",
      "gerilim hesaplama",
      "akım hesaplama",
      "direnç hesaplama",
      "güç hesaplama",
      "V=IR",
      "elektrik hesaplayıcı",
    ],
    inputs: {
      knownQty1: {
        label: "Birinci bilinen büyüklük",
        help: "Bildiğiniz birinci elektriksel büyüklüğü seçin.",
      },
      value1: {
        label: "Değer 1",
        help: "Birinci bilinen büyüklük için sayısal değeri girin.",
      },
      knownQty2: {
        label: "İkinci bilinen büyüklük",
        help: "Bildiğiniz ikinci elektriksel büyüklüğü seçin (birinciden farklı olmalı).",
      },
      value2: {
        label: "Değer 2",
        help: "İkinci bilinen büyüklük için sayısal değeri girin.",
      },
    },
    outputs: {
      voltage: {
        label: "Gerilim (V)",
        help: "Volt cinsinden elektriksel potansiyel fark.",
      },
      current: {
        label: "Akım (I)",
        help: "Amper cinsinden elektrik yükü akışı.",
      },
      resistance: {
        label: "Direnç (R)",
        help: "Ohm cinsinden akıma karşı direnç.",
      },
      power: {
        label: "Güç (P)",
        help: "Watt cinsinden enerji transfer hızı.",
      },
    },
    options: {
      knownQty1: {
        voltage: "Gerilim (V)",
        current: "Akım (A)",
        resistance: "Direnç (Ω)",
        power: "Güç (W)",
      },
      knownQty2: {
        voltage: "Gerilim (V)",
        current: "Akım (A)",
        resistance: "Direnç (Ω)",
        power: "Güç (W)",
      },
    },
    errors: {
      sameQuantity: "İki bilinen büyüklük birbirinden farklı olmalıdır.",
      nonPositive: "Tüm değerler sıfırdan büyük olmalıdır.",
    },
    faq: [
      {
        q: "Ohm Kanunu nedir?",
        a: "Ohm Kanunu, sabit sıcaklıkta bir iletkenin uçları arasındaki gerilimin, içinden geçen akımla doğru orantılı olduğunu ifade eder. V = I × R şeklinde yazılır; burada V gerilim (volt), I akım (amper) ve R dirençtir (ohm).",
      },
      {
        q: "Güç nasıl hesaplanır?",
        a: "Güç üç farklı şekilde hesaplanabilir: P = V × I, P = I² × R veya P = V² / R. Bu hesaplayıcı, herhangi iki değer girildiğinde dört büyüklüğün tamamını çözer.",
      },
    ],
  },

  de: {
    title: "Ohmsches Gesetz Rechner",
    short: "Spannung, Strom, Widerstand oder Leistung berechnen — zwei bekannte Werte eingeben.",
    description:
      "Kostenloser Rechner für das Ohmsche Gesetz. Geben Sie zwei der vier Größen (U, I, R, P) ein und berechnen Sie sofort die anderen beiden mit U=R·I und P=U·I.",
    keywords: [
      "Ohmsches Gesetz Rechner",
      "Spannungsrechner",
      "Stromrechner",
      "Widerstandsrechner",
      "Leistungsrechner",
      "U=RI",
      "Elektrotechnik Rechner",
    ],
    inputs: {
      knownQty1: { label: "Erste bekannte Größe", help: "Wählen Sie die erste bekannte elektrische Größe." },
      value1: { label: "Wert 1", help: "Geben Sie den numerischen Wert der ersten Größe ein." },
      knownQty2: { label: "Zweite bekannte Größe", help: "Wählen Sie die zweite bekannte Größe (muss sich von der ersten unterscheiden)." },
      value2: { label: "Wert 2", help: "Geben Sie den numerischen Wert der zweiten Größe ein." },
    },
    outputs: {
      voltage: { label: "Spannung (U)", help: "Elektrische Potentialdifferenz in Volt." },
      current: { label: "Strom (I)", help: "Elektrischer Stromfluss in Ampere." },
      resistance: { label: "Widerstand (R)", help: "Widerstand gegen den Stromfluss in Ohm." },
      power: { label: "Leistung (P)", help: "Energieübertragungsrate in Watt." },
    },
    options: {
      knownQty1: { voltage: "Spannung (V)", current: "Strom (A)", resistance: "Widerstand (Ω)", power: "Leistung (W)" },
      knownQty2: { voltage: "Spannung (V)", current: "Strom (A)", resistance: "Widerstand (Ω)", power: "Leistung (W)" },
    },
    errors: { sameQuantity: "Die beiden bekannten Größen müssen unterschiedlich sein.", nonPositive: "Alle Werte müssen größer als null sein." },
    faq: [
      { q: "Was ist das Ohmsche Gesetz?", a: "Das Ohmsche Gesetz besagt, dass die Spannung an einem Leiter direkt proportional zum fließenden Strom ist (bei konstanter Temperatur): U = R × I." },
      { q: "Wie berechne ich die elektrische Leistung?", a: "P = U × I, P = I² × R oder P = U² / R. Der Rechner löst alle vier Größen, wenn zwei bekannt sind." },
    ],
  },

  fr: {
    title: "Calculateur Loi d'Ohm",
    short: "Calculez tension, courant, résistance ou puissance — entrez deux valeurs connues.",
    description:
      "Calculateur gratuit de la loi d'Ohm. Entrez deux des quatre grandeurs (U, I, R, P) et obtenez instantanément les deux autres via U=RI et P=UI.",
    keywords: [
      "calculateur loi d'Ohm",
      "calculateur tension",
      "calculateur courant",
      "calculateur résistance",
      "calculateur puissance",
      "U=RI",
      "calculateur électronique",
    ],
    inputs: {
      knownQty1: { label: "Première grandeur connue", help: "Sélectionnez la première grandeur électrique connue." },
      value1: { label: "Valeur 1", help: "Entrez la valeur numérique de la première grandeur." },
      knownQty2: { label: "Deuxième grandeur connue", help: "Sélectionnez la deuxième grandeur (doit différer de la première)." },
      value2: { label: "Valeur 2", help: "Entrez la valeur numérique de la deuxième grandeur." },
    },
    outputs: {
      voltage: { label: "Tension (U)", help: "Différence de potentiel électrique en volts." },
      current: { label: "Courant (I)", help: "Flux de charges électriques en ampères." },
      resistance: { label: "Résistance (R)", help: "Opposition au courant en ohms." },
      power: { label: "Puissance (P)", help: "Taux de transfert d'énergie en watts." },
    },
    options: {
      knownQty1: { voltage: "Tension (V)", current: "Courant (A)", resistance: "Résistance (Ω)", power: "Puissance (W)" },
      knownQty2: { voltage: "Tension (V)", current: "Courant (A)", resistance: "Résistance (Ω)", power: "Puissance (W)" },
    },
    errors: { sameQuantity: "Les deux grandeurs connues doivent être différentes.", nonPositive: "Toutes les valeurs doivent être supérieures à zéro." },
    faq: [
      { q: "Qu'est-ce que la loi d'Ohm ?", a: "La loi d'Ohm stipule que la tension aux bornes d'un conducteur est directement proportionnelle au courant qui le traverse : U = R × I." },
      { q: "Comment calculer la puissance ?", a: "P = U × I, P = I² × R ou P = U² / R. Le calculateur résout les quatre grandeurs dès que deux sont connues." },
    ],
  },

  es: {
    title: "Calculadora Ley de Ohm",
    short: "Calcula tensión, corriente, resistencia o potencia — introduce dos valores conocidos.",
    description:
      "Calculadora gratuita de la Ley de Ohm. Introduce dos de las cuatro magnitudes (V, I, R, P) y obtén al instante las otras dos con V=IR y P=VI.",
    keywords: [
      "calculadora ley de Ohm",
      "calculadora voltaje",
      "calculadora corriente",
      "calculadora resistencia",
      "calculadora potencia",
      "V=IR",
      "calculadora electrónica",
    ],
    inputs: {
      knownQty1: { label: "Primera magnitud conocida", help: "Selecciona la primera magnitud eléctrica conocida." },
      value1: { label: "Valor 1", help: "Introduce el valor numérico de la primera magnitud." },
      knownQty2: { label: "Segunda magnitud conocida", help: "Selecciona la segunda magnitud (debe diferir de la primera)." },
      value2: { label: "Valor 2", help: "Introduce el valor numérico de la segunda magnitud." },
    },
    outputs: {
      voltage: { label: "Tensión (V)", help: "Diferencia de potencial eléctrico en voltios." },
      current: { label: "Corriente (I)", help: "Flujo de carga eléctrica en amperios." },
      resistance: { label: "Resistencia (R)", help: "Oposición al flujo de corriente en ohmios." },
      power: { label: "Potencia (P)", help: "Tasa de transferencia de energía en vatios." },
    },
    options: {
      knownQty1: { voltage: "Tensión (V)", current: "Corriente (A)", resistance: "Resistencia (Ω)", power: "Potencia (W)" },
      knownQty2: { voltage: "Tensión (V)", current: "Corriente (A)", resistance: "Resistencia (Ω)", power: "Potencia (W)" },
    },
    errors: { sameQuantity: "Las dos magnitudes conocidas deben ser diferentes.", nonPositive: "Todos los valores deben ser mayores que cero." },
    faq: [
      { q: "¿Qué es la Ley de Ohm?", a: "La Ley de Ohm establece que la tensión entre los extremos de un conductor es directamente proporcional a la corriente que lo atraviesa: V = I × R." },
      { q: "¿Cómo calculo la potencia?", a: "P = V × I, P = I² × R o P = V² / R. Esta calculadora resuelve las cuatro magnitudes cuando se conocen dos." },
    ],
  },

  it: {
    title: "Calcolatore Legge di Ohm",
    short: "Calcola tensione, corrente, resistenza o potenza — inserisci due valori noti.",
    description:
      "Calcolatore gratuito della Legge di Ohm. Inserisci due delle quattro grandezze (V, I, R, P) e ottieni immediatamente le altre due con V=IR e P=VI.",
    keywords: [
      "calcolatore legge di Ohm",
      "calcolatore tensione",
      "calcolatore corrente",
      "calcolatore resistenza",
      "calcolatore potenza",
      "V=IR",
      "calcolatore elettronico",
    ],
    inputs: {
      knownQty1: { label: "Prima grandezza nota", help: "Seleziona la prima grandezza elettrica nota." },
      value1: { label: "Valore 1", help: "Inserisci il valore numerico della prima grandezza." },
      knownQty2: { label: "Seconda grandezza nota", help: "Seleziona la seconda grandezza (deve essere diversa dalla prima)." },
      value2: { label: "Valore 2", help: "Inserisci il valore numerico della seconda grandezza." },
    },
    outputs: {
      voltage: { label: "Tensione (V)", help: "Differenza di potenziale elettrico in volt." },
      current: { label: "Corrente (I)", help: "Flusso di carica elettrica in ampere." },
      resistance: { label: "Resistenza (R)", help: "Opposizione al flusso di corrente in ohm." },
      power: { label: "Potenza (P)", help: "Tasso di trasferimento di energia in watt." },
    },
    options: {
      knownQty1: { voltage: "Tensione (V)", current: "Corrente (A)", resistance: "Resistenza (Ω)", power: "Potenza (W)" },
      knownQty2: { voltage: "Tensione (V)", current: "Corrente (A)", resistance: "Resistenza (Ω)", power: "Potenza (W)" },
    },
    errors: { sameQuantity: "Le due grandezze note devono essere diverse.", nonPositive: "Tutti i valori devono essere maggiori di zero." },
    faq: [
      { q: "Cos'è la Legge di Ohm?", a: "La Legge di Ohm afferma che la tensione ai capi di un conduttore è direttamente proporzionale alla corrente che lo attraversa: V = I × R." },
      { q: "Come si calcola la potenza?", a: "P = V × I, P = I² × R o P = V² / R. Il calcolatore risolve tutte e quattro le grandezze quando ne sono note due." },
    ],
  },

  ar: {
    title: "حاسبة قانون أوم",
    short: "احسب الجهد أو التيار أو المقاومة أو القدرة — أدخل أي قيمتين معلومتين.",
    description:
      "حاسبة مجانية لقانون أوم. أدخل أي اثنتين من الأربع كميات (V, I, R, P) واحصل فوراً على الكميتين الأخريين باستخدام V=IR وP=VI.",
    keywords: [
      "حاسبة قانون أوم",
      "حساب الجهد الكهربائي",
      "حساب التيار",
      "حساب المقاومة",
      "حساب القدرة الكهربائية",
      "V=IR",
      "حاسبة إلكترونية",
    ],
    inputs: {
      knownQty1: { label: "الكمية المعلومة الأولى", help: "اختر الكمية الكهربائية الأولى المعلومة." },
      value1: { label: "القيمة 1", help: "أدخل القيمة الرقمية للكمية الأولى." },
      knownQty2: { label: "الكمية المعلومة الثانية", help: "اختر الكمية الثانية (يجب أن تختلف عن الأولى)." },
      value2: { label: "القيمة 2", help: "أدخل القيمة الرقمية للكمية الثانية." },
    },
    outputs: {
      voltage: { label: "الجهد الكهربائي (V)", help: "فرق الجهد الكهربائي بالفولت." },
      current: { label: "التيار الكهربائي (I)", help: "تدفق الشحنة الكهربائية بالأمبير." },
      resistance: { label: "المقاومة الكهربائية (R)", help: "مقاومة تدفق التيار بالأوم." },
      power: { label: "القدرة الكهربائية (P)", help: "معدل نقل الطاقة بالواط." },
    },
    options: {
      knownQty1: { voltage: "الجهد (V)", current: "التيار (A)", resistance: "المقاومة (Ω)", power: "القدرة (W)" },
      knownQty2: { voltage: "الجهد (V)", current: "التيار (A)", resistance: "المقاومة (Ω)", power: "القدرة (W)" },
    },
    errors: { sameQuantity: "يجب أن تكون الكميتان المعلومتان مختلفتين.", nonPositive: "يجب أن تكون جميع القيم أكبر من الصفر." },
    faq: [
      { q: "ما هو قانون أوم؟", a: "ينص قانون أوم على أن الجهد عبر موصل يتناسب طرديًا مع التيار المار فيه عند ثبات درجة الحرارة: V = I × R." },
      { q: "كيف أحسب القدرة الكهربائية؟", a: "P = V × I أو P = I² × R أو P = V² / R. تحسب هذه الآلة الكميات الأربع عند إدخال أي اثنتين." },
    ],
  },

  ru: {
    title: "Калькулятор закона Ома",
    short: "Вычислите напряжение, ток, сопротивление или мощность — введите любые два известных значения.",
    description:
      "Бесплатный калькулятор закона Ома. Введите любые два из четырёх параметров (U, I, R, P) и мгновенно получите остальные два по формулам U=IR и P=UI.",
    keywords: [
      "калькулятор закона Ома",
      "расчёт напряжения",
      "расчёт тока",
      "расчёт сопротивления",
      "расчёт мощности",
      "U=IR",
      "электронный калькулятор",
    ],
    inputs: {
      knownQty1: { label: "Первая известная величина", help: "Выберите первую известную электрическую величину." },
      value1: { label: "Значение 1", help: "Введите числовое значение первой величины." },
      knownQty2: { label: "Вторая известная величина", help: "Выберите вторую известную величину (должна отличаться от первой)." },
      value2: { label: "Значение 2", help: "Введите числовое значение второй величины." },
    },
    outputs: {
      voltage: { label: "Напряжение (U)", help: "Электрический потенциал в вольтах." },
      current: { label: "Ток (I)", help: "Поток электрических зарядов в амперах." },
      resistance: { label: "Сопротивление (R)", help: "Сопротивление потоку тока в омах." },
      power: { label: "Мощность (P)", help: "Скорость передачи энергии в ваттах." },
    },
    options: {
      knownQty1: { voltage: "Напряжение (В)", current: "Ток (А)", resistance: "Сопротивление (Ом)", power: "Мощность (Вт)" },
      knownQty2: { voltage: "Напряжение (В)", current: "Ток (А)", resistance: "Сопротивление (Ом)", power: "Мощность (Вт)" },
    },
    errors: { sameQuantity: "Две известные величины должны быть разными.", nonPositive: "Все значения должны быть больше нуля." },
    faq: [
      { q: "Что такое закон Ома?", a: "Закон Ома гласит: напряжение на участке цепи прямо пропорционально силе тока, протекающего через него: U = I × R." },
      { q: "Как рассчитать электрическую мощность?", a: "P = U × I, P = I² × R или P = U² / R. Калькулятор решает все четыре величины при вводе двух известных." },
    ],
  },

  zh: {
    title: "欧姆定律计算器",
    short: "计算电压、电流、电阻或功率——输入任意两个已知值。",
    description:
      "免费欧姆定律计算器。输入电压（V）、电流（I）、电阻（R）、功率（P）中的任意两个值，即可利用V=IR和P=VI公式瞬间计算出其余两个。",
    keywords: [
      "欧姆定律计算器",
      "电压计算器",
      "电流计算器",
      "电阻计算器",
      "功率计算器",
      "V=IR",
      "电子计算器",
    ],
    inputs: {
      knownQty1: { label: "第一个已知量", help: "选择第一个已知的电气量。" },
      value1: { label: "值 1", help: "输入第一个已知量的数值。" },
      knownQty2: { label: "第二个已知量", help: "选择第二个已知的电气量（必须与第一个不同）。" },
      value2: { label: "值 2", help: "输入第二个已知量的数值。" },
    },
    outputs: {
      voltage: { label: "电压（V）", help: "以伏特为单位的电位差。" },
      current: { label: "电流（I）", help: "以安培为单位的电荷流量。" },
      resistance: { label: "电阻（R）", help: "以欧姆为单位的电流阻力。" },
      power: { label: "功率（P）", help: "以瓦特为单位的能量传输速率。" },
    },
    options: {
      knownQty1: { voltage: "电压（V）", current: "电流（A）", resistance: "电阻（Ω）", power: "功率（W）" },
      knownQty2: { voltage: "电压（V）", current: "电流（A）", resistance: "电阻（Ω）", power: "功率（W）" },
    },
    errors: { sameQuantity: "两个已知量必须不同。", nonPositive: "所有值必须大于零。" },
    faq: [
      { q: "什么是欧姆定律？", a: "欧姆定律指出，在温度不变的条件下，导体两端的电压与通过它的电流成正比：V = I × R。" },
      { q: "如何计算功率？", a: "功率有三种计算方式：P = V × I、P = I² × R 或 P = V² / R。本计算器在已知任意两个量时可求解全部四个量。" },
    ],
  },

  ja: {
    title: "オームの法則 計算機",
    short: "電圧・電流・抵抗・電力のうち2つを入力して残りを計算します。",
    description:
      "無料のオームの法則計算機。電圧（V）・電流（I）・抵抗（R）・電力（P）のうち2つを入力すると、V=IR・P=VIを使って残りの2つを瞬時に計算します。",
    keywords: [
      "オームの法則 計算機",
      "電圧計算",
      "電流計算",
      "抵抗計算",
      "電力計算",
      "V=IR",
      "電気計算機",
    ],
    inputs: {
      knownQty1: { label: "既知の量（1つ目）", help: "最初に知っている電気量を選択してください。" },
      value1: { label: "値 1", help: "最初の既知量の数値を入力してください。" },
      knownQty2: { label: "既知の量（2つ目）", help: "2番目の既知量を選択してください（1つ目と異なるもの）。" },
      value2: { label: "値 2", help: "2番目の既知量の数値を入力してください。" },
    },
    outputs: {
      voltage: { label: "電圧（V）", help: "ボルト単位の電位差。" },
      current: { label: "電流（I）", help: "アンペア単位の電荷の流れ。" },
      resistance: { label: "抵抗（R）", help: "オーム単位の電流への抵抗。" },
      power: { label: "電力（P）", help: "ワット単位のエネルギー転送率。" },
    },
    options: {
      knownQty1: { voltage: "電圧（V）", current: "電流（A）", resistance: "抵抗（Ω）", power: "電力（W）" },
      knownQty2: { voltage: "電圧（V）", current: "電流（A）", resistance: "抵抗（Ω）", power: "電力（W）" },
    },
    errors: { sameQuantity: "2つの既知量は異なるものでなければなりません。", nonPositive: "すべての値はゼロより大きい必要があります。" },
    faq: [
      { q: "オームの法則とは何ですか？", a: "オームの法則とは、一定温度下において導体の両端の電圧がその電流に正比例するという法則です：V = I × R。" },
      { q: "電力はどのように計算しますか？", a: "P = V × I、P = I² × R、または P = V² / R で計算できます。この計算機は2つが分かれば残り全てを求めます。" },
    ],
  },

  ko: {
    title: "옴의 법칙 계산기",
    short: "전압, 전류, 저항, 전력 중 두 값을 입력하면 나머지를 계산합니다.",
    description:
      "무료 옴의 법칙 계산기. 전압(V), 전류(I), 저항(R), 전력(P) 중 두 값을 입력하면 V=IR 및 P=VI를 이용해 나머지 두 값을 즉시 계산합니다.",
    keywords: [
      "옴의 법칙 계산기",
      "전압 계산기",
      "전류 계산기",
      "저항 계산기",
      "전력 계산기",
      "V=IR",
      "전기 계산기",
    ],
    inputs: {
      knownQty1: { label: "첫 번째 알려진 값", help: "첫 번째로 알고 있는 전기량을 선택하세요." },
      value1: { label: "값 1", help: "첫 번째 알려진 값의 숫자를 입력하세요." },
      knownQty2: { label: "두 번째 알려진 값", help: "두 번째 전기량을 선택하세요 (첫 번째와 달라야 합니다)." },
      value2: { label: "값 2", help: "두 번째 알려진 값의 숫자를 입력하세요." },
    },
    outputs: {
      voltage: { label: "전압 (V)", help: "볼트 단위의 전위차." },
      current: { label: "전류 (I)", help: "암페어 단위의 전하 흐름." },
      resistance: { label: "저항 (R)", help: "옴 단위의 전류 저항." },
      power: { label: "전력 (P)", help: "와트 단위의 에너지 전달률." },
    },
    options: {
      knownQty1: { voltage: "전압 (V)", current: "전류 (A)", resistance: "저항 (Ω)", power: "전력 (W)" },
      knownQty2: { voltage: "전압 (V)", current: "전류 (A)", resistance: "저항 (Ω)", power: "전력 (W)" },
    },
    errors: { sameQuantity: "두 알려진 값은 서로 달라야 합니다.", nonPositive: "모든 값은 0보다 커야 합니다." },
    faq: [
      { q: "옴의 법칙이란 무엇인가요?", a: "옴의 법칙은 일정한 온도에서 도체 양단의 전압이 흐르는 전류에 정비례한다는 법칙입니다: V = I × R." },
      { q: "전력은 어떻게 계산하나요?", a: "P = V × I, P = I² × R, 또는 P = V² / R로 계산합니다. 이 계산기는 두 값을 알면 나머지 전부를 구합니다." },
    ],
  },

  hi: {
    title: "ओम के नियम कैलकुलेटर",
    short: "वोल्टेज, करंट, प्रतिरोध या शक्ति — कोई भी दो ज्ञात मान दर्ज करके बाकी की गणना करें।",
    description:
      "निःशुल्क ओम के नियम कैलकुलेटर। वोल्टेज (V), करंट (I), प्रतिरोध (R) या शक्ति (P) में से कोई भी दो मान दर्ज करें और V=IR तथा P=VI का उपयोग करके शेष दो की तुरंत गणना करें।",
    keywords: [
      "ओम के नियम कैलकुलेटर",
      "वोल्टेज कैलकुलेटर",
      "करंट कैलकुलेटर",
      "प्रतिरोध कैलकुलेटर",
      "शक्ति कैलकुलेटर",
      "V=IR",
      "इलेक्ट्रॉनिक्स कैलकुलेटर",
    ],
    inputs: {
      knownQty1: { label: "पहली ज्ञात राशि", help: "पहली ज्ञात विद्युत राशि चुनें।" },
      value1: { label: "मान 1", help: "पहली ज्ञात राशि का संख्यात्मक मान दर्ज करें।" },
      knownQty2: { label: "दूसरी ज्ञात राशि", help: "दूसरी विद्युत राशि चुनें (पहली से अलग होनी चाहिए)।" },
      value2: { label: "मान 2", help: "दूसरी ज्ञात राशि का संख्यात्मक मान दर्ज करें।" },
    },
    outputs: {
      voltage: { label: "वोल्टेज (V)", help: "वोल्ट में विद्युत विभव अंतर।" },
      current: { label: "करंट (I)", help: "एम्पीयर में विद्युत आवेश प्रवाह।" },
      resistance: { label: "प्रतिरोध (R)", help: "ओम में करंट प्रवाह का विरोध।" },
      power: { label: "शक्ति (P)", help: "वाट में ऊर्जा स्थानांतरण दर।" },
    },
    options: {
      knownQty1: { voltage: "वोल्टेज (V)", current: "करंट (A)", resistance: "प्रतिरोध (Ω)", power: "शक्ति (W)" },
      knownQty2: { voltage: "वोल्टेज (V)", current: "करंट (A)", resistance: "प्रतिरोध (Ω)", power: "शक्ति (W)" },
    },
    errors: { sameQuantity: "दो ज्ञात राशियाँ अलग-अलग होनी चाहिए।", nonPositive: "सभी मान शून्य से अधिक होने चाहिए।" },
    faq: [
      { q: "ओम का नियम क्या है?", a: "ओम का नियम कहता है कि स्थिर तापमान पर किसी चालक के सिरों पर लगा वोल्टेज उसमें प्रवाहित करंट के समानुपाती होता है: V = I × R।" },
      { q: "विद्युत शक्ति की गणना कैसे करें?", a: "P = V × I, P = I² × R, या P = V² / R। यह कैलकुलेटर किसी भी दो मानों को जानने पर चारों राशियों की गणना करता है।" },
    ],
  },
};

export default i18n;
