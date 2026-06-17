import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Temperature Converter",
    short: "Convert between Celsius, Fahrenheit, Kelvin, Réaumur, and Rankine scales instantly",
    description: "Convert between Celsius, Fahrenheit, Kelvin, Réaumur, and Rankine temperature scales with instant calculations",
    keywords: ["temperature", "celsius", "fahrenheit", "kelvin", "reaumur", "rankine", "conversion", "thermal"],
    inputs: {
      value: { label: "Temperature", help: "Enter the temperature value to convert" },
      fromUnit: { label: "From unit", help: "The unit of the value you entered" },
    },
    options: {
      celsius: "Celsius (°C)",
      fahrenheit: "Fahrenheit (°F)",
      kelvin: "Kelvin (K)",
      reaumur: "Réaumur (°Ré)",
      rankine: "Rankine (°R)",
    },
    outputs: {
      celsius: { label: "Celsius", help: "Result in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Result in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Result in Kelvin" },
      reaumur: { label: "Réaumur", help: "Result in Réaumur" },
      rankine: { label: "Rankine", help: "Result in Rankine" },
    },
    errors: { invalidTemperature: "Temperature must be a valid number" },
    faq: [
      {
        question: "What is the difference between Celsius and Fahrenheit?",
        answer:
          "Celsius and Fahrenheit are two temperature scales with different reference points. Water freezes at 0°C (32°F) and boils at 100°C (212°F). Celsius is the metric standard, while Fahrenheit is commonly used in the US.",
      },
      {
        question: "What is Kelvin and why is it important?",
        answer:
          "Kelvin is the SI unit of temperature used in science and engineering. It starts at absolute zero (−273.15°C) and is used in physics and thermodynamics because it has no negative values.",
      },
      {
        question: "What are the Réaumur and Rankine scales?",
        answer:
          "Réaumur (°Ré) sets water's freezing point at 0° and boiling point at 80°, and was widely used in Europe in the 18th–19th centuries. Rankine (°R) is an absolute scale like Kelvin but uses Fahrenheit-sized degrees, starting at absolute zero (0°R = −459.67°F); it is used in some US engineering fields.",
      },
      {
        question: "Is there a temperature where Celsius and Fahrenheit are equal?",
        answer: "Yes! −40°C equals −40°F. This is the only point where both scales read the same value.",
      },
      {
        question: "What is absolute zero?",
        answer: "Absolute zero is 0 Kelvin (−273.15°C, −459.67°F, or 0°R), the lowest possible temperature where all molecular motion stops.",
      },
    ],
  },
  nl: {
    title: "Temperature Converteerer",
    short: "Converteer between Celsius, Fahrenheit, Kelvin, Réaumur, and Rankine scales direct",
    description: "Converteer between Celsius, Fahrenheit, Kelvin, Réaumur, and Rankine temperature scales with instant calculations",
    keywords: ["temperature", "celsius", "fahrenheit", "kelvin", "reaumur", "rankine", "conversion", "thermal"],
    inputs: {
      value: { label: "Temperature", help: "Enter the temperature value to converteer" },
      fromUnit: { label: "From unit", help: "The unit of the value you entered" },
    },
    options: {
      celsius: "Celsius (°C)",
      fahrenheit: "Fahrenheit (°F)",
      kelvin: "Kelvin (K)",
      reaumur: "Réaumur (°Ré)",
      rankine: "Rankine (°R)",
    },
    outputs: {
      celsius: { label: "Celsius", help: "Resultaat in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Resultaat in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Resultaat in Kelvin" },
      reaumur: { label: "Réaumur", help: "Resultaat in Réaumur" },
      rankine: { label: "Rankine", help: "Resultaat in Rankine" },
    },
    errors: { invalidTemperature: "Temperature must be a valid nummer" },
    faq: [
      {
        question: "What is the difference between Celsius and Fahrenheit?",
        answer:
          "Celsius and Fahrenheit are two temperature scales with different reference points. Water gratiszes at 0°C (32°F) and boils at 100°C (212°F). Celsius is the metric standard, while Fahrenheit is commonly used in the US.",
      },
      {
        question: "What is Kelvin and why is it important?",
        answer:
          "Kelvin is the SI unit of temperature used in science and engineering. It starts at absolute zero (−273.15°C) and is used in physics and thermodynamics because it has no negative values.",
      },
      {
        question: "What are the Réaumur and Rankine scales?",
        answer:
          "Réaumur (°Ré) sets water's gratiszing point at 0° and boiling point at 80°, and was widely used in Europe in the 18th–19th eeuwen. Rankine (°R) is an absolute scale like Kelvin but uses Fahrenheit-grootted degrees, starting at absolute zero (0°R = −459.67°F); it is used in some US engineering fields.",
      },
      {
        question: "Is there a temperature where Celsius and Fahrenheit are equal?",
        answer: "Yes! −40°C equals −40°F. This is the only point where both scales read the same value.",
      },
      {
        question: "What is absolute zero?",
        answer: "Absolute zero is 0 Kelvin (−273.15°C, −459.67°F, or 0°R), the lowest possible temperature where all molecular motion stops.",
      },
    ],
  },

  pl: {
    title: "Temperature Konwerter",
    short: "Konwertuj between Celsius, Fahrenheit, Kelvin, Réaumur, and Rankine scales natychmiast",
    description: "Konwertuj between Celsius, Fahrenheit, Kelvin, Réaumur, and Rankine temperature scales with instant calculations",
    keywords: ["temperature", "celsius", "fahrenheit", "kelvin", "reaumur", "rankine", "conversion", "thermal"],
    inputs: {
      value: { label: "Temperature", help: "Enter the temperature value to konwertuj" },
      fromUnit: { label: "From unit", help: "The unit of the value you entered" },
    },
    options: {
      celsius: "Celsius (°C)",
      fahrenheit: "Fahrenheit (°F)",
      kelvin: "Kelvin (K)",
      reaumur: "Réaumur (°Ré)",
      rankine: "Rankine (°R)",
    },
    outputs: {
      celsius: { label: "Celsius", help: "Wynik in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Wynik in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Wynik in Kelvin" },
      reaumur: { label: "Réaumur", help: "Wynik in Réaumur" },
      rankine: { label: "Rankine", help: "Wynik in Rankine" },
    },
    errors: { invalidTemperature: "Temperature must be a valid liczba" },
    faq: [
      {
        question: "What is the difference between Celsius and Fahrenheit?",
        answer:
          "Celsius and Fahrenheit are two temperature scales with different reference points. Water darmowyzes at 0°C (32°F) and boils at 100°C (212°F). Celsius is the metric standard, while Fahrenheit is commonly used in the US.",
      },
      {
        question: "What is Kelvin and why is it important?",
        answer:
          "Kelvin is the SI unit of temperature used in science and engineering. It starts at absolute zero (−273.15°C) and is used in physics and thermodynamics because it has no negative values.",
      },
      {
        question: "What are the Réaumur and Rankine scales?",
        answer:
          "Réaumur (°Ré) sets water's darmowyzing point at 0° and boiling point at 80°, and was widely used in Europe in the 18th–19th wieków. Rankine (°R) is an absolute scale like Kelvin but uses Fahrenheit-rozmiard degrees, starting at absolute zero (0°R = −459.67°F); it is used in some US engineering fields.",
      },
      {
        question: "Is there a temperature where Celsius and Fahrenheit are equal?",
        answer: "Yes! −40°C equals −40°F. This is the only point where both scales read the same value.",
      },
      {
        question: "What is absolute zero?",
        answer: "Absolute zero is 0 Kelvin (−273.15°C, −459.67°F, or 0°R), the lowest possible temperature where all molecular motion stops.",
      },
    ],
  },
  pt: {
    title: "Conversor de Temperatura",
    short: "Converta entre Celsius, Fahrenheit, Kelvin, Réaumur e Rankine.",
    description: "Conversor gratuito de temperatura. Converta instantaneamente entre graus Celsius (°C), Fahrenheit (°F), Kelvin (K), Réaumur (°Ré) e Rankine (°R).",
    keywords: ["conversor temperatura", "Celsius Fahrenheit", "Kelvin", "Réaumur", "Rankine", "°C °F", "temperatura"],
    inputs: {
      value: { label: "Temperatura", help: "Insira o valor da temperatura a converter" },
      fromUnit: { label: "Unidade de origem", help: "A unidade do valor inserido" },
    },
    options: {
      celsius: "Celsius (°C)",
      fahrenheit: "Fahrenheit (°F)",
      kelvin: "Kelvin (K)",
      reaumur: "Réaumur (°Ré)",
      rankine: "Rankine (°R)",
    },
    outputs: {
      celsius: { label: "Celsius", help: "Resultado em Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Resultado em Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Resultado em Kelvin" },
      reaumur: { label: "Réaumur", help: "Resultado em Réaumur" },
      rankine: { label: "Rankine", help: "Resultado em Rankine" },
    },
    errors: { invalidTemperature: "Temperature must be a valid number" },
    faq: [
      {
        question: "What is the difference between Celsius and Fahrenheit?",
        answer:
          "Celsius and Fahrenheit are two temperature scales with different reference points. Water freezes at 0°C (32°F) and boils at 100°C (212°F). Celsius is the metric standard, while Fahrenheit is commonly used in the US.",
      },
      {
        question: "What is Kelvin and why is it important?",
        answer:
          "Kelvin is the SI unit of temperature used in science and engineering. It starts at absolute zero (−273.15°C) and is used in physics and thermodynamics because it has no negative values.",
      },
      {
        question: "What are the Réaumur and Rankine scales?",
        answer:
          "Réaumur (°Ré) sets water's freezing point at 0° and boiling point at 80°. Rankine (°R) is an absolute scale like Kelvin but uses Fahrenheit-sized degrees, starting at absolute zero (0°R = −459.67°F).",
      },
      {
        question: "Is there a temperature where Celsius and Fahrenheit are equal?",
        answer: "Yes! −40°C equals −40°F. This is the only point where both scales read the same value.",
      },
      {
        question: "What is absolute zero?",
        answer: "Absolute zero is 0 Kelvin (−273.15°C, −459.67°F, or 0°R), the lowest possible temperature where all molecular motion stops.",
      },
    ],
  },
  id: {
    title: "Konverter Suhu",
    short: "Konversi antara Celsius, Fahrenheit, Kelvin, Réaumur, dan Rankine.",
    description: "Konverter suhu gratis. Konversi langsung antara derajat Celsius (°C), Fahrenheit (°F), Kelvin (K), Réaumur (°Ré), dan Rankine (°R).",
    keywords: ["konverter suhu", "Celsius Fahrenheit", "Kelvin", "Réaumur", "Rankine", "°C °F", "suhu"],
    inputs: {
      value: { label: "Suhu", help: "Masukkan nilai suhu untuk dikonversi" },
      fromUnit: { label: "Dari satuan", help: "Satuan dari nilai yang dimasukkan" },
    },
    options: {
      celsius: "Celsius (°C)",
      fahrenheit: "Fahrenheit (°F)",
      kelvin: "Kelvin (K)",
      reaumur: "Réaumur (°Ré)",
      rankine: "Rankine (°R)",
    },
    outputs: {
      celsius: { label: "Celsius", help: "Hasil dalam Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Hasil dalam Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Hasil dalam Kelvin" },
      reaumur: { label: "Réaumur", help: "Hasil dalam Réaumur" },
      rankine: { label: "Rankine", help: "Hasil dalam Rankine" },
    },
    errors: { invalidTemperature: "Temperature must be a valid number" },
    faq: [
      {
        question: "What is the difference between Celsius and Fahrenheit?",
        answer:
          "Celsius and Fahrenheit are two temperature scales with different reference points. Water freezes at 0°C (32°F) and boils at 100°C (212°F). Celsius is the metric standard, while Fahrenheit is commonly used in the US.",
      },
      {
        question: "What is Kelvin and why is it important?",
        answer:
          "Kelvin is the SI unit of temperature used in science and engineering. It starts at absolute zero (−273.15°C) and is used in physics and thermodynamics because it has no negative values.",
      },
      {
        question: "What are the Réaumur and Rankine scales?",
        answer:
          "Réaumur (°Ré) sets water's freezing point at 0° and boiling point at 80°. Rankine (°R) is an absolute scale like Kelvin but uses Fahrenheit-sized degrees, starting at absolute zero (0°R = −459.67°F).",
      },
      {
        question: "Is there a temperature where Celsius and Fahrenheit are equal?",
        answer: "Yes! −40°C equals −40°F. This is the only point where both scales read the same value.",
      },
      {
        question: "What is absolute zero?",
        answer: "Absolute zero is 0 Kelvin (−273.15°C, −459.67°F, or 0°R), the lowest possible temperature where all molecular motion stops.",
      },
    ],
  },

  tr: {
    title: "Sıcaklık Dönüştürücü",
    short: "Celsius, Fahrenheit, Kelvin, Réaumur ve Rankine ölçekleri arasında anında dönüşüm yapın",
    description: "Celsius, Fahrenheit, Kelvin, Réaumur ve Rankine ölçekleri arasında anında dönüşüm",
    keywords: ["sıcaklık", "celsius", "fahrenheit", "kelvin", "réaumur", "rankine", "dönüşüm", "termal"],
    inputs: {
      value: { label: "Sıcaklık", help: "Dönüştürülecek sıcaklık değerini girin" },
      fromUnit: { label: "Kaynak birim", help: "Girdiğiniz değerin birimi" },
    },
    options: {
      celsius: "Celsius (°C)",
      fahrenheit: "Fahrenheit (°F)",
      kelvin: "Kelvin (K)",
      reaumur: "Réaumur (°Ré)",
      rankine: "Rankine (°R)",
    },
    outputs: {
      celsius: { label: "Celsius", help: "Celsius sonucu" },
      fahrenheit: { label: "Fahrenheit", help: "Fahrenheit sonucu" },
      kelvin: { label: "Kelvin", help: "Kelvin sonucu" },
      reaumur: { label: "Réaumur", help: "Réaumur sonucu" },
      rankine: { label: "Rankine", help: "Rankine sonucu" },
    },
    errors: { invalidTemperature: "Sıcaklık geçerli bir sayı olmalıdır" },
    faq: [
      {
        question: "Celsius ve Fahrenheit arasındaki fark nedir?",
        answer: "Celsius ve Fahrenheit, farklı referans noktaları olan iki sıcaklık ölçeğidir. Su 0°C (32°F) de donar, 100°C (212°F) de kaynır.",
      },
      {
        question: "Kelvin nedir ve neden önemlidir?",
        answer: "Kelvin, bilim ve mühendislikte kullanılan SI sıcaklık birimidir. Mutlak sıfırdan (−273.15°C) başlar.",
      },
      {
        question: "Réaumur ve Rankine ölçekleri nedir?",
        answer: "Réaumur (°Ré) ölçeğinde su 0°'de donar, 80°'de kaynar ve 18.–19. yüzyıllarda Avrupa'da yaygın kullanılmıştır. Rankine (°R), Kelvin gibi mutlak bir ölçektir ancak Fahrenheit büyüklüğünde dereceler kullanır ve mutlak sıfırdan (0°R = −459.67°F) başlar.",
      },
      {
        question: "Celsius ve Fahrenheit'in eşit olduğu bir sıcaklık var mıdır?",
        answer: "Evet! −40°C eşittir −40°F. Her iki ölçeğin de aynı değeri okuduğu tek noktadır.",
      },
      {
        question: "Mutlak sıfır nedir?",
        answer: "Mutlak sıfır, 0 Kelvin (−273.15°C, −459.67°F veya 0°R) olup, tüm moleküler hareketin durduğu en düşük sıcaklıktır.",
      },
    ],
  },
  de: {
    title: "Temperaturumrechner",
    short: "Sofortige Umrechnung zwischen Celsius, Fahrenheit, Kelvin, Réaumur und Rankine",
    description: "Umrechnung zwischen Celsius, Fahrenheit, Kelvin, Réaumur und Rankine Temperaturskalen",
    keywords: ["temperatur", "celsius", "fahrenheit", "kelvin", "réaumur", "rankine", "umrechnung", "thermisch"],
    inputs: {
      value: { label: "Temperatur", help: "Den umzurechnenden Temperaturwert eingeben" },
      fromUnit: { label: "Ausgangseinheit", help: "Einheit des eingegebenen Werts" },
    },
    options: {
      celsius: "Celsius (°C)",
      fahrenheit: "Fahrenheit (°F)",
      kelvin: "Kelvin (K)",
      reaumur: "Réaumur (°Ré)",
      rankine: "Rankine (°R)",
    },
    outputs: {
      celsius: { label: "Celsius", help: "Ergebnis in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Ergebnis in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Ergebnis in Kelvin" },
      reaumur: { label: "Réaumur", help: "Ergebnis in Réaumur" },
      rankine: { label: "Rankine", help: "Ergebnis in Rankine" },
    },
    errors: { invalidTemperature: "Temperatur muss eine gültige Zahl sein" },
    faq: [
      {
        question: "Was ist der Unterschied zwischen Celsius und Fahrenheit?",
        answer: "Celsius und Fahrenheit sind zwei Temperaturskalen mit unterschiedlichen Referenzpunkten. Wasser gefriert bei 0°C (32°F) und siedet bei 100°C (212°F).",
      },
      {
        question: "Was ist Kelvin und warum ist es wichtig?",
        answer: "Kelvin ist die SI-Einheit für Temperatur. Sie beginnt beim absoluten Nullpunkt (−273.15°C).",
      },
      {
        question: "Was sind die Réaumur- und Rankine-Skalen?",
        answer: "Bei Réaumur (°Ré) gefriert Wasser bei 0° und siedet bei 80°. Rankine (°R) ist wie Kelvin eine absolute Skala, verwendet aber Fahrenheit-große Grade und beginnt beim absoluten Nullpunkt (0°R = −459.67°F).",
      },
      {
        question: "Gibt es eine Temperatur, bei der Celsius und Fahrenheit gleich sind?",
        answer: "Ja! −40°C entspricht −40°F. Das ist der einzige Punkt, an dem beide Skalen denselben Wert anzeigen.",
      },
      {
        question: "Was ist der absolute Nullpunkt?",
        answer: "Der absolute Nullpunkt ist 0 Kelvin (−273.15°C, −459.67°F oder 0°R).",
      },
    ],
  },
  fr: {
    title: "Convertisseur de température",
    short: "Conversion instantanée entre les échelles Celsius, Fahrenheit, Kelvin, Réaumur et Rankine",
    description: "Conversion entre les échelles Celsius, Fahrenheit, Kelvin, Réaumur et Rankine",
    keywords: ["température", "celsius", "fahrenheit", "kelvin", "réaumur", "rankine", "conversion", "thermique"],
    inputs: {
      value: { label: "Température", help: "Saisissez la valeur de température à convertir" },
      fromUnit: { label: "Unité de départ", help: "L'unité de la valeur saisie" },
    },
    options: {
      celsius: "Celsius (°C)",
      fahrenheit: "Fahrenheit (°F)",
      kelvin: "Kelvin (K)",
      reaumur: "Réaumur (°Ré)",
      rankine: "Rankine (°R)",
    },
    outputs: {
      celsius: { label: "Celsius", help: "Résultat en Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Résultat en Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Résultat en Kelvin" },
      reaumur: { label: "Réaumur", help: "Résultat en Réaumur" },
      rankine: { label: "Rankine", help: "Résultat en Rankine" },
    },
    errors: { invalidTemperature: "La température doit être un nombre valide" },
    faq: [
      {
        question: "Quelle est la différence entre Celsius et Fahrenheit?",
        answer: "Celsius et Fahrenheit sont deux échelles de température avec des points de référence différents. L'eau gèle à 0°C (32°F) et bout à 100°C (212°F).",
      },
      {
        question: "Qu'est-ce que Kelvin et pourquoi est-ce important?",
        answer: "Kelvin est l'unité SI de température utilisée en sciences. Elle commence au zéro absolu (−273.15°C).",
      },
      {
        question: "Que sont les échelles Réaumur et Rankine?",
        answer: "Sur l'échelle Réaumur (°Ré), l'eau gèle à 0° et bout à 80°. Rankine (°R) est une échelle absolue comme Kelvin mais utilise des degrés de la taille du Fahrenheit, commençant au zéro absolu (0°R = −459.67°F).",
      },
      {
        question: "Y a-t-il une température où Celsius et Fahrenheit sont égaux?",
        answer: "Oui! −40°C équivaut à −40°F. C'est le seul point où les deux échelles affichent la même valeur.",
      },
      {
        question: "Quel est le zéro absolu?",
        answer: "Le zéro absolu est 0 Kelvin (−273.15°C, −459.67°F ou 0°R).",
      },
    ],
  },
  es: {
    title: "Conversor de temperatura",
    short: "Conversión instantánea entre las escalas Celsius, Fahrenheit, Kelvin, Réaumur y Rankine",
    description: "Conversión entre las escalas Celsius, Fahrenheit, Kelvin, Réaumur y Rankine",
    keywords: ["temperatura", "celsius", "fahrenheit", "kelvin", "réaumur", "rankine", "conversión", "térmico"],
    inputs: {
      value: { label: "Temperatura", help: "Introduce el valor de temperatura a convertir" },
      fromUnit: { label: "Unidad de origen", help: "La unidad del valor introducido" },
    },
    options: {
      celsius: "Celsius (°C)",
      fahrenheit: "Fahrenheit (°F)",
      kelvin: "Kelvin (K)",
      reaumur: "Réaumur (°Ré)",
      rankine: "Rankine (°R)",
    },
    outputs: {
      celsius: { label: "Celsius", help: "Resultado en Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Resultado en Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Resultado en Kelvin" },
      reaumur: { label: "Réaumur", help: "Resultado en Réaumur" },
      rankine: { label: "Rankine", help: "Resultado en Rankine" },
    },
    errors: { invalidTemperature: "La temperatura debe ser un número válido" },
    faq: [
      {
        question: "¿Cuál es la diferencia entre Celsius y Fahrenheit?",
        answer: "Celsius y Fahrenheit son dos escalas de temperatura con diferentes puntos de referencia. El agua se congela a 0°C (32°F) e hierve a 100°C (212°F).",
      },
      {
        question: "¿Qué es Kelvin y por qué es importante?",
        answer: "Kelvin es la unidad SI de temperatura utilizada en ciencias. Comienza en el cero absoluto (−273.15°C).",
      },
      {
        question: "¿Qué son las escalas Réaumur y Rankine?",
        answer: "En la escala Réaumur (°Ré), el agua se congela a 0° y hierve a 80°. Rankine (°R) es una escala absoluta como Kelvin pero usa grados del tamaño del Fahrenheit, comenzando en el cero absoluto (0°R = −459.67°F).",
      },
      {
        question: "¿Hay una temperatura donde Celsius y Fahrenheit sean iguales?",
        answer: "¡Sí! −40°C equivale a −40°F. Es el único punto donde ambas escalas muestran el mismo valor.",
      },
      {
        question: "¿Qué es el cero absoluto?",
        answer: "El cero absoluto es 0 Kelvin (−273.15°C, −459.67°F o 0°R).",
      },
    ],
  },
  it: {
    title: "Convertitore di temperatura",
    short: "Conversione istantanea tra le scale Celsius, Fahrenheit, Kelvin, Réaumur e Rankine",
    description: "Conversione tra le scale Celsius, Fahrenheit, Kelvin, Réaumur e Rankine",
    keywords: ["temperatura", "celsius", "fahrenheit", "kelvin", "réaumur", "rankine", "conversione", "termico"],
    inputs: {
      value: { label: "Temperatura", help: "Inserisci il valore di temperatura da convertire" },
      fromUnit: { label: "Unità di partenza", help: "L'unità del valore inserito" },
    },
    options: {
      celsius: "Celsius (°C)",
      fahrenheit: "Fahrenheit (°F)",
      kelvin: "Kelvin (K)",
      reaumur: "Réaumur (°Ré)",
      rankine: "Rankine (°R)",
    },
    outputs: {
      celsius: { label: "Celsius", help: "Risultato in Celsius" },
      fahrenheit: { label: "Fahrenheit", help: "Risultato in Fahrenheit" },
      kelvin: { label: "Kelvin", help: "Risultato in Kelvin" },
      reaumur: { label: "Réaumur", help: "Risultato in Réaumur" },
      rankine: { label: "Rankine", help: "Risultato in Rankine" },
    },
    errors: { invalidTemperature: "La temperatura deve essere un numero valido" },
    faq: [
      {
        question: "Qual è la differenza tra Celsius e Fahrenheit?",
        answer: "Celsius e Fahrenheit sono due scale di temperatura con diversi punti di riferimento. L'acqua congela a 0°C (32°F) e bolle a 100°C (212°F).",
      },
      {
        question: "Cos'è Kelvin e perché è importante?",
        answer: "Kelvin è l'unità SI di temperatura utilizzata in scienze. Inizia dallo zero assoluto (−273.15°C).",
      },
      {
        question: "Cosa sono le scale Réaumur e Rankine?",
        answer: "Nella scala Réaumur (°Ré) l'acqua congela a 0° e bolle a 80°. Rankine (°R) è una scala assoluta come Kelvin ma usa gradi della dimensione del Fahrenheit, partendo dallo zero assoluto (0°R = −459.67°F).",
      },
      {
        question: "C'è una temperatura in cui Celsius e Fahrenheit sono uguali?",
        answer: "Sì! −40°C equivale a −40°F. È l'unico punto in cui entrambe le scale mostrano lo stesso valore.",
      },
      {
        question: "Cos'è lo zero assoluto?",
        answer: "Lo zero assoluto è 0 Kelvin (−273.15°C, −459.67°F o 0°R).",
      },
    ],
  },
  ar: {
    title: "محول درجة الحرارة",
    short: "تحويل فوري بين مقاييس سيلسيوس وفهرنهايت وكلفن ورءومور ورانكين",
    description: "تحويل بين مقاييس سيلسيوس وفهرنهايت وكلفن ورءومور ورانكين",
    keywords: ["درجة الحرارة", "سيلسيوس", "فهرنهايت", "كلفن", "رءومور", "رانكين", "تحويل", "حراري"],
    inputs: {
      value: { label: "درجة الحرارة", help: "أدخل قيمة درجة الحرارة المراد تحويلها" },
      fromUnit: { label: "الوحدة المصدر", help: "وحدة القيمة المُدخلة" },
    },
    options: {
      celsius: "سيلسيوس (°C)",
      fahrenheit: "فهرنهايت (°F)",
      kelvin: "كلفن (K)",
      reaumur: "رءومور (°Ré)",
      rankine: "رانكين (°R)",
    },
    outputs: {
      celsius: { label: "سيلسيوس", help: "النتيجة بالسيلسيوس" },
      fahrenheit: { label: "فهرنهايت", help: "النتيجة بالفهرنهايت" },
      kelvin: { label: "كلفن", help: "النتيجة بالكلفن" },
      reaumur: { label: "رءومور", help: "النتيجة بالرءومور" },
      rankine: { label: "رانكين", help: "النتيجة بالرانكين" },
    },
    errors: { invalidTemperature: "درجة الحرارة يجب أن تكون رقماً صحيحاً" },
    faq: [
      {
        question: "ما الفرق بين سيلسيوس وفهرنهايت?",
        answer: "سيلسيوس وفهرنهايت مقياسان للحرارة بنقاط مرجعية مختلفة. يتجمد الماء عند 0°C (32°F) ويغلي عند 100°C (212°F).",
      },
      {
        question: "ما هو كلفن ولماذا مهم?",
        answer: "كلفن هو وحدة SI للحرارة المستخدمة في العلم. بدءاً من الصفر المطلق (−273.15°C).",
      },
      {
        question: "ما هما مقياسا رءومور ورانكين?",
        answer: "في مقياس رءومور (°Ré) يتجمد الماء عند 0° ويغلي عند 80°. رانكين (°R) مقياس مطلق مثل كلفن لكنه يستخدم درجات بحجم فهرنهايت، ويبدأ من الصفر المطلق (0°R = −459.67°F).",
      },
      {
        question: "هل توجد درجة حرارة تتساوى فيها سيلسيوس وفهرنهايت?",
        answer: "نعم! −40°C تساوي −40°F. إنها الحالة الوحيدة التي يظهر فيها كلا المقياسين نفس القيمة.",
      },
      {
        question: "ما هو الصفر المطلق?",
        answer: "الصفر المطلق هو 0 كلفن (−273.15°C أو −459.67°F أو 0°R).",
      },
    ],
  },
  ru: {
    title: "Конвертер температуры",
    short: "Мгновенное преобразование между шкалами Цельсия, Фаренгейта, Кельвина, Реомюра и Ранкина",
    description: "Преобразование между шкалами Цельсия, Фаренгейта, Кельвина, Реомюра и Ранкина",
    keywords: ["температура", "цельсий", "фаренгейт", "кельвин", "реомюр", "ранкин", "преобразование", "тепловой"],
    inputs: {
      value: { label: "Температура", help: "Введите значение температуры для преобразования" },
      fromUnit: { label: "Исходная единица", help: "Единица введённого значения" },
    },
    options: {
      celsius: "Цельсий (°C)",
      fahrenheit: "Фаренгейт (°F)",
      kelvin: "Кельвин (K)",
      reaumur: "Реомюр (°Ré)",
      rankine: "Ранкин (°R)",
    },
    outputs: {
      celsius: { label: "Цельсий", help: "Результат в Цельсий" },
      fahrenheit: { label: "Фаренгейт", help: "Результат в Фаренгейт" },
      kelvin: { label: "Кельвин", help: "Результат в Кельвин" },
      reaumur: { label: "Реомюр", help: "Результат в Реомюр" },
      rankine: { label: "Ранкин", help: "Результат в Ранкин" },
    },
    errors: { invalidTemperature: "Температура должна быть числом" },
    faq: [
      {
        question: "В чем разница между Цельсием и Фаренгейтом?",
        answer: "Цельсий и Фаренгейт — две температурные шкалы с разными опорными точками. Вода замерзает при 0°C (32°F) и кипит при 100°C (212°F).",
      },
      {
        question: "Что такое Кельвин и почему это важно?",
        answer: "Кельвин — единица СИ температуры, используемая в науке. Она начинается с абсолютного нуля (−273.15°C).",
      },
      {
        question: "Что такое шкалы Реомюра и Ранкина?",
        answer: "По шкале Реомюра (°Ré) вода замерзает при 0° и кипит при 80°. Ранкин (°R) — абсолютная шкала, как Кельвин, но с градусами размером Фаренгейта, начинается с абсолютного нуля (0°R = −459.67°F).",
      },
      {
        question: "Есть ли температура, где Цельсий и Фаренгейт равны?",
        answer: "Да! −40°C равно −40°F. Это единственная точка, где обе шкалы показывают одно значение.",
      },
      {
        question: "Что такое абсолютный нуль?",
        answer: "Абсолютный нуль — 0 Кельвин (−273.15°C, −459.67°F или 0°R).",
      },
    ],
  },
  zh: {
    title: "温度转换器",
    short: "摄氏度、华氏度、开尔文、列氏度和兰氏度之间的即时转换",
    description: "摄氏度、华氏度、开尔文、列氏度和兰氏度之间的转换",
    keywords: ["温度", "摄氏度", "华氏度", "开尔文", "列氏度", "兰氏度", "转换", "热"],
    inputs: {
      value: { label: "温度", help: "输入要转换的温度值" },
      fromUnit: { label: "源单位", help: "所输入数值的单位" },
    },
    options: {
      celsius: "摄氏度 (°C)",
      fahrenheit: "华氏度 (°F)",
      kelvin: "开尔文 (K)",
      reaumur: "列氏度 (°Ré)",
      rankine: "兰氏度 (°R)",
    },
    outputs: {
      celsius: { label: "摄氏度", help: "摄氏度结果" },
      fahrenheit: { label: "华氏度", help: "华氏度结果" },
      kelvin: { label: "开尔文", help: "开尔文结果" },
      reaumur: { label: "列氏度", help: "列氏度结果" },
      rankine: { label: "兰氏度", help: "兰氏度结果" },
    },
    errors: { invalidTemperature: "温度必须是有效数字" },
    faq: [
      {
        question: "摄氏度和华氏度有什么区别?",
        answer: "摄氏度和华氏度是两个参考点不同的温度刻度。水在0°C (32°F)时冻结，在100°C (212°F)时沸腾。",
      },
      {
        question: "开尔文是什么，为什么很重要?",
        answer: "开尔文是科学中使用的SI温度单位。从绝对零度(−273.15°C)开始。",
      },
      {
        question: "什么是列氏度和兰氏度?",
        answer: "在列氏度(°Ré)中，水在0°时冻结，在80°时沸腾。兰氏度(°R)像开尔文一样是绝对温标，但使用华氏度大小的度数，从绝对零度(0°R = −459.67°F)开始。",
      },
      {
        question: "摄氏度和华氏度相等的温度存在吗?",
        answer: "是的! −40°C等于−40°F。这是两个刻度显示相同值的唯一点。",
      },
      {
        question: "绝对零度是什么?",
        answer: "绝对零度是0开尔文(−273.15°C、−459.67°F或0°R)。",
      },
    ],
  },
  ja: {
    title: "温度変換ツール",
    short: "セルシウス、ファーレンハイト、ケルビン、レオミュール、ランキンスケール間の即座の変換",
    description: "セルシウス、ファーレンハイト、ケルビン、レオミュール、ランキンスケール間の変換",
    keywords: ["温度", "セルシウス", "ファーレンハイト", "ケルビン", "レオミュール", "ランキン", "変換", "熱"],
    inputs: {
      value: { label: "温度", help: "変換する温度の値を入力" },
      fromUnit: { label: "変換元の単位", help: "入力した値の単位" },
    },
    options: {
      celsius: "セルシウス (°C)",
      fahrenheit: "ファーレンハイト (°F)",
      kelvin: "ケルビン (K)",
      reaumur: "レオミュール (°Ré)",
      rankine: "ランキン (°R)",
    },
    outputs: {
      celsius: { label: "セルシウス", help: "セルシウス結果" },
      fahrenheit: { label: "ファーレンハイト", help: "ファーレンハイト結果" },
      kelvin: { label: "ケルビン", help: "ケルビン結果" },
      reaumur: { label: "レオミュール", help: "レオミュール結果" },
      rankine: { label: "ランキン", help: "ランキン結果" },
    },
    errors: { invalidTemperature: "温度は有効な数値である必要があります" },
    faq: [
      {
        question: "セルシウスとファーレンハイトの違いは?",
        answer: "セルシウスとファーレンハイトは異なる基準点を持つ2つの温度スケールです。水は0°C (32°F)で凍り、100°C (212°F)で沸騰します。",
      },
      {
        question: "ケルビンとは何であり、なぜ重要ですか?",
        answer: "ケルビンは科学で使用されるSI温度単位です。絶対零度(−273.15°C)から始まります。",
      },
      {
        question: "レオミュールとランキンのスケールとは?",
        answer: "レオミュール(°Ré)では水は0°で凍り、80°で沸騰します。ランキン(°R)はケルビンと同じ絶対温度ですが、ファーレンハイトと同じ大きさの度を使い、絶対零度(0°R = −459.67°F)から始まります。",
      },
      {
        question: "セルシウスとファーレンハイトが等しい温度はありますか?",
        answer: "はい！−40°Cは−40°Fに等しいです。両方のスケールが同じ値を示す唯一のポイントです。",
      },
      {
        question: "絶対零度とは?",
        answer: "絶対零度は0ケルビン(−273.15°C、−459.67°Fまたは0°R)です。",
      },
    ],
  },
  ko: {
    title: "온도 변환기",
    short: "섭씨, 화씨, 켈빈, 레오뮈르 및 랭킨 눈금 간 즉시 변환",
    description: "섭씨, 화씨, 켈빈, 레오뮈르 및 랭킨 눈금 간의 변환",
    keywords: ["온도", "섭씨", "화씨", "켈빈", "레오뮈르", "랭킨", "변환", "열"],
    inputs: {
      value: { label: "온도", help: "변환할 온도 값을 입력하세요" },
      fromUnit: { label: "원본 단위", help: "입력한 값의 단위" },
    },
    options: {
      celsius: "섭씨 (°C)",
      fahrenheit: "화씨 (°F)",
      kelvin: "켈빈 (K)",
      reaumur: "레오뮈르 (°Ré)",
      rankine: "랭킨 (°R)",
    },
    outputs: {
      celsius: { label: "섭씨", help: "섭씨 결과" },
      fahrenheit: { label: "화씨", help: "화씨 결과" },
      kelvin: { label: "켈빈", help: "켈빈 결과" },
      reaumur: { label: "레오뮈르", help: "레오뮈르 결과" },
      rankine: { label: "랭킨", help: "랭킨 결과" },
    },
    errors: { invalidTemperature: "온도는 유효한 숫자여야 합니다" },
    faq: [
      {
        question: "섭씨와 화씨의 차이점은 무엇입니까?",
        answer: "섭씨와 화씨는 다른 기준점을 가진 두 개의 온도 눈금입니다. 물은 0°C(32°F)에서 얼고 100°C(212°F)에서 끓습니다.",
      },
      {
        question: "켈빈이란 무엇이고 왜 중요합니까?",
        answer: "켈빈은 과학에서 사용되는 SI 온도 단위입니다. 절대 영도(−273.15°C)부터 시작합니다.",
      },
      {
        question: "레오뮈르와 랭킨 눈금은 무엇입니까?",
        answer: "레오뮈르(°Ré)에서는 물이 0°에서 얼고 80°에서 끓습니다. 랭킨(°R)은 켈빈처럼 절대 온도이지만 화씨 크기의 도를 사용하며 절대 영도(0°R = −459.67°F)부터 시작합니다.",
      },
      {
        question: "섭씨와 화씨가 같은 온도가 있습니까?",
        answer: "네! −40°C는 −40°F와 같습니다. 두 눈금이 같은 값을 표시하는 유일한 지점입니다.",
      },
      {
        question: "절대 영도란 무엇입니까?",
        answer: "절대 영도는 0 켈빈(−273.15°C, −459.67°F 또는 0°R)입니다.",
      },
    ],
  },
  hi: {
    title: "तापमान परिवर्तक",
    short: "सेल्सियस, फारेनहाइट, केल्विन, रेओमुर और रैंकिन स्केल के बीच तत्काल रूपांतरण",
    description: "सेल्सियस, फारेनहाइट, केल्विन, रेओमुर और रैंकिन स्केल के बीच रूपांतरण",
    keywords: ["तापमान", "सेल्सियस", "फारेनहाइट", "केल्विन", "रेओमुर", "रैंकिन", "रूपांतरण", "तापीय"],
    inputs: {
      value: { label: "तापमान", help: "रूपांतरित करने के लिए तापमान मान दर्ज करें" },
      fromUnit: { label: "स्रोत इकाई", help: "दर्ज किए गए मान की इकाई" },
    },
    options: {
      celsius: "सेल्सियस (°C)",
      fahrenheit: "फारेनहाइट (°F)",
      kelvin: "केल्विन (K)",
      reaumur: "रेओमुर (°Ré)",
      rankine: "रैंकिन (°R)",
    },
    outputs: {
      celsius: { label: "सेल्सियस", help: "सेल्सियस परिणाम" },
      fahrenheit: { label: "फारेनहाइट", help: "फारेनहाइट परिणाम" },
      kelvin: { label: "केल्विन", help: "केल्विन परिणाम" },
      reaumur: { label: "रेओमुर", help: "रेओमुर परिणाम" },
      rankine: { label: "रैंकिन", help: "रैंकिन परिणाम" },
    },
    errors: { invalidTemperature: "तापमान एक वैध संख्या होनी चाहिए" },
    faq: [
      {
        question: "सेल्सियस और फारेनहाइट में क्या अंतर है?",
        answer: "सेल्सियस और फारेनहाइट विभिन्न संदर्भ बिंदुओं वाले दो तापमान पैमाने हैं। पानी 0°C (32°F) पर जमता है और 100°C (212°F) पर उबलता है।",
      },
      {
        question: "केल्विन क्या है और यह महत्वपूर्ण क्यों है?",
        answer: "केल्विन विज्ञान में उपयोग किया जाने वाला SI तापमान इकाई है। पूर्ण शून्य (−273.15°C) से शुरू होता है।",
      },
      {
        question: "रेओमुर और रैंकिन पैमाने क्या हैं?",
        answer: "रेओमुर (°Ré) में पानी 0° पर जमता है और 80° पर उबलता है। रैंकिन (°R) केल्विन की तरह एक निरपेक्ष पैमाना है लेकिन फारेनहाइट आकार की डिग्री का उपयोग करता है, जो पूर्ण शून्य (0°R = −459.67°F) से शुरू होता है।",
      },
      {
        question: "क्या ऐसा तापमान है जहां सेल्सियस और फारेनहाइट बराबर हैं?",
        answer: "हाँ! −40°C बराबर −40°F है। यह एकमात्र बिंदु है जहाँ दोनों पैमाने समान मान दिखाते हैं।",
      },
      {
        question: "पूर्ण शून्य क्या है?",
        answer: "पूर्ण शून्य 0 केल्विन (−273.15°C, −459.67°F या 0°R) है।",
      },
    ],
  },
};

export default i18n;
