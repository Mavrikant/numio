import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Inflation Calculator",
    short: "Calculate the future cost of goods or the present value of a future amount using inflation.",
    description:
      "Free inflation calculator. Find out how much your money is worth in the future, how purchasing power erodes, and what a future dollar is worth today.",
    keywords: [
      "inflation calculator",
      "purchasing power",
      "future value inflation",
      "CPI calculator",
      "cost of living calculator",
      "inflation rate calculator",
      "real value money",
    ],
    inputs: {
      amount: {
        label: "Amount",
        help: "The dollar amount you want to adjust for inflation.",
      },
      inflationRate: {
        label: "Annual Inflation Rate (%)",
        help: "The expected or historical average annual inflation rate. The Fed targets 2%. Long-run US average is about 3%.",
      },
      years: {
        label: "Years",
        help: "The number of years over which to calculate the effect of inflation.",
      },
      mode: {
        label: "Calculation Mode",
        help: "Future cost: what will your money buy in the future? Present value: what is a future amount worth today?",
      },
    },
    outputs: {
      result: {
        label: "Result",
        help: "In future cost mode: equivalent future price. In present value mode: today's equivalent of the future amount.",
      },
      purchasingPowerLoss: {
        label: "Purchasing Power Lost",
        help: "The percentage of purchasing power eroded by inflation over the period.",
      },
      cumulativeInflation: {
        label: "Cumulative Inflation",
        help: "The total percentage price increase over the entire period.",
      },
      realValueToday: {
        label: "Real Value in Today's Dollars",
        help: "The inflation-adjusted value in current dollars.",
      },
    },
    options: {
      mode: {
        future_cost: "Future Cost",
        present_value: "Present Value",
      },
    },
    errors: {
      amountRequired: "Amount must be greater than zero.",
      rateOutOfRange: "Inflation rate must be between 0% and 50%.",
    },
    faq: [
      {
        q: "What is inflation?",
        a: "Inflation is the rate at which the general price level of goods and services rises over time, eroding purchasing power. A dollar today buys less than it did 10 years ago because of inflation.",
      },
      {
        q: "What is the US Fed inflation target?",
        a: "The Federal Reserve targets an average of 2% annual inflation, as measured by the PCE price index. This rate is considered consistent with maximum employment and stable prices.",
      },
      {
        q: "How does cumulative inflation differ from annual inflation?",
        a: "Annual inflation is the year-over-year percentage change in prices. Cumulative inflation compounds over multiple years. At 3% annual inflation, cumulative inflation over 10 years is (1.03)^10 − 1 ≈ 34.4%, not 30%.",
      },
      {
        q: "What does purchasing power loss mean?",
        a: "If inflation is 3% per year for 10 years, $1 today has the buying power of about $0.74 in 10 years. The purchasing power loss is approximately 25.6% — meaning you need $1.34 in 10 years to buy what $1 buys today.",
      },
      {
        q: "What is the difference between future cost and present value mode?",
        a: "Future cost mode answers: 'If something costs $100 today, how much will it cost in N years?' Present value mode answers: 'If I receive $100 in N years, what is it worth in today's dollars?'",
      },
    ],
  },
  pt: {
    title: "Calculadora de Inflação",
    short: "Veja o poder de compra do seu dinheiro ajustado pela inflação.",
    description:
      "Calculadora gratuita de inflação. Compare o poder de compra ao longo do tempo com base na taxa anual de inflação.",
    keywords: ["inflação", "poder de compra", "calculadora inflação", "ajuste inflação", "IPC"],
    inputs: {
      amount: {
        label: "Amount",
        help: "The dollar amount you want to adjust for inflation.",
      },
      inflationRate: {
        label: "Annual Inflation Rate (%)",
        help: "The expected or historical average annual inflation rate. The Fed targets 2%. Long-run US average is about 3%.",
      },
      years: {
        label: "Years",
        help: "The number of years over which to calculate the effect of inflation.",
      },
      mode: {
        label: "Calculation Mode",
        help: "Future cost: what will your money buy in the future? Present value: what is a future amount worth today?",
      },
    },
    outputs: {
      result: {
        label: "Result",
        help: "In future cost mode: equivalent future price. In present value mode: today's equivalent of the future amount.",
      },
      purchasingPowerLoss: {
        label: "Purchasing Power Lost",
        help: "The percentage of purchasing power eroded by inflation over the period.",
      },
      cumulativeInflation: {
        label: "Cumulative Inflation",
        help: "The total percentage price increase over the entire period.",
      },
      realValueToday: {
        label: "Real Value in Today's Dollars",
        help: "The inflation-adjusted value in current dollars.",
      },
    },
    options: {
      mode: {
        future_cost: "Future Cost",
        present_value: "Present Value",
      },
    },
    errors: {
      amountRequired: "Amount must be greater than zero.",
      rateOutOfRange: "Inflation rate must be between 0% and 50%.",
    },
    faq: [
      {
        q: "What is inflation?",
        a: "Inflation is the rate at which the general price level of goods and services rises over time, eroding purchasing power. A dollar today buys less than it did 10 years ago because of inflation.",
      },
      {
        q: "What is the US Fed inflation target?",
        a: "The Federal Reserve targets an average of 2% annual inflation, as measured by the PCE price index. This rate is considered consistent with maximum employment and stable prices.",
      },
      {
        q: "How does cumulative inflation differ from annual inflation?",
        a: "Annual inflation is the year-over-year percentage change in prices. Cumulative inflation compounds over multiple years. At 3% annual inflation, cumulative inflation over 10 years is (1.03)^10 − 1 ≈ 34.4%, not 30%.",
      },
      {
        q: "What does purchasing power loss mean?",
        a: "If inflation is 3% per year for 10 years, $1 today has the buying power of about $0.74 in 10 years. The purchasing power loss is approximately 25.6% — meaning you need $1.34 in 10 years to buy what $1 buys today.",
      },
      {
        q: "What is the difference between future cost and present value mode?",
        a: "Future cost mode answers: 'If something costs $100 today, how much will it cost in N years?' Present value mode answers: 'If I receive $100 in N years, what is it worth in today's dollars?'",
      },
    ],
  },
  id: {
    title: "Kalkulator Inflasi",
    short: "Lihat daya beli uang Anda yang disesuaikan dengan inflasi.",
    description:
      "Kalkulator inflasi gratis. Bandingkan daya beli sepanjang waktu berdasarkan tingkat inflasi tahunan.",
    keywords: ["inflasi", "daya beli", "kalkulator inflasi", "penyesuaian inflasi", "IHK"],
    inputs: {
      amount: {
        label: "Amount",
        help: "The dollar amount you want to adjust for inflation.",
      },
      inflationRate: {
        label: "Annual Inflation Rate (%)",
        help: "The expected or historical average annual inflation rate. The Fed targets 2%. Long-run US average is about 3%.",
      },
      years: {
        label: "Years",
        help: "The number of years over which to calculate the effect of inflation.",
      },
      mode: {
        label: "Calculation Mode",
        help: "Future cost: what will your money buy in the future? Present value: what is a future amount worth today?",
      },
    },
    outputs: {
      result: {
        label: "Result",
        help: "In future cost mode: equivalent future price. In present value mode: today's equivalent of the future amount.",
      },
      purchasingPowerLoss: {
        label: "Purchasing Power Lost",
        help: "The percentage of purchasing power eroded by inflation over the period.",
      },
      cumulativeInflation: {
        label: "Cumulative Inflation",
        help: "The total percentage price increase over the entire period.",
      },
      realValueToday: {
        label: "Real Value in Today's Dollars",
        help: "The inflation-adjusted value in current dollars.",
      },
    },
    options: {
      mode: {
        future_cost: "Future Cost",
        present_value: "Present Value",
      },
    },
    errors: {
      amountRequired: "Amount must be greater than zero.",
      rateOutOfRange: "Inflation rate must be between 0% and 50%.",
    },
    faq: [
      {
        q: "What is inflation?",
        a: "Inflation is the rate at which the general price level of goods and services rises over time, eroding purchasing power. A dollar today buys less than it did 10 years ago because of inflation.",
      },
      {
        q: "What is the US Fed inflation target?",
        a: "The Federal Reserve targets an average of 2% annual inflation, as measured by the PCE price index. This rate is considered consistent with maximum employment and stable prices.",
      },
      {
        q: "How does cumulative inflation differ from annual inflation?",
        a: "Annual inflation is the year-over-year percentage change in prices. Cumulative inflation compounds over multiple years. At 3% annual inflation, cumulative inflation over 10 years is (1.03)^10 − 1 ≈ 34.4%, not 30%.",
      },
      {
        q: "What does purchasing power loss mean?",
        a: "If inflation is 3% per year for 10 years, $1 today has the buying power of about $0.74 in 10 years. The purchasing power loss is approximately 25.6% — meaning you need $1.34 in 10 years to buy what $1 buys today.",
      },
      {
        q: "What is the difference between future cost and present value mode?",
        a: "Future cost mode answers: 'If something costs $100 today, how much will it cost in N years?' Present value mode answers: 'If I receive $100 in N years, what is it worth in today's dollars?'",
      },
    ],
  },


  tr: {
    title: "Enflasyon Hesaplayıcı",
    short: "Enflasyonun paranızın satın alma gücüne etkisini hesaplayın.",
    description:
      "Ücretsiz enflasyon hesaplayıcı. Paranızın gelecekteki değerini, satın alma gücündeki kaybı ve gelecekteki bir miktarın bugünkü karşılığını öğrenin.",
    keywords: [
      "enflasyon hesaplayıcı",
      "satın alma gücü",
      "gelecek değer",
      "TÜFE hesaplayıcı",
      "geçim maliyeti",
      "enflasyon oranı",
      "paranın gerçek değeri",
    ],
    inputs: {
      amount: {
        label: "Tutar",
        help: "Enflasyona göre düzeltmek istediğiniz para miktarı.",
      },
      inflationRate: {
        label: "Yıllık Enflasyon Oranı (%)",
        help: "Beklenen veya tarihsel ortalama yıllık enflasyon oranı.",
      },
      years: {
        label: "Yıl",
        help: "Enflasyon etkisinin hesaplanacağı yıl sayısı.",
      },
      mode: {
        label: "Hesaplama Modu",
        help: "Gelecek maliyet: paranız gelecekte ne kadar satın alır? Bugünkü değer: gelecekteki bir miktar bugün ne kadara eşdeğer?",
      },
    },
    outputs: {
      result: {
        label: "Sonuç",
        help: "Gelecek maliyet modunda: eşdeğer gelecek fiyat. Bugünkü değer modunda: gelecekteki tutarın bugünkü karşılığı.",
      },
      purchasingPowerLoss: {
        label: "Satın Alma Gücü Kaybı",
        help: "Enflasyon nedeniyle dönem boyunca aşınan satın alma gücü yüzdesi.",
      },
      cumulativeInflation: {
        label: "Birikimli Enflasyon",
        help: "Tüm dönem boyunca gerçekleşen toplam fiyat artışı yüzdesi.",
      },
      realValueToday: {
        label: "Bugünkü Reel Değer",
        help: "Enflasyona göre düzeltilmiş, güncel Türk lirası cinsinden değer.",
      },
    },
    options: {
      mode: {
        future_cost: "Gelecekteki Maliyet",
        present_value: "Bugünkü Değer",
      },
    },
    errors: {
      amountRequired: "Tutar sıfırdan büyük olmalıdır.",
      rateOutOfRange: "Enflasyon oranı %0 ile %50 arasında olmalıdır.",
    },
    faq: [
      {
        q: "Enflasyon nedir?",
        a: "Enflasyon, mal ve hizmetlerin genel fiyat düzeyinin zaman içindeki yükselme oranıdır; satın alma gücünü aşındırır. Bugünkü bir lira, 10 yıl öncesiyle kıyaslandığında daha az şey satın almaktadır.",
      },
      {
        q: "Birikimli enflasyon ile yıllık enflasyon arasındaki fark nedir?",
        a: "Yıllık enflasyon, yıldan yıla fiyatlardaki yüzdesel değişimdir. Birikimli enflasyon birden fazla yıl boyunca bileşik olarak büyür. Yıllık %3 enflasyonda 10 yıllık birikimli enflasyon (1,03)^10 − 1 ≈ %34,4'tür, %30 değil.",
      },
      {
        q: "Satın alma gücü kaybı ne anlama gelir?",
        a: "Yıllık %3 enflasyonla 10 yıl sonra bugünkü 1 TL'nin alım gücü yaklaşık 0,74 TL'ye düşer. Satın alma gücü kaybı yaklaşık %25,6'dır; yani bugün 1 TL'ye aldığınızı 10 yıl sonra almak için yaklaşık 1,34 TL gerekir.",
      },
      {
        q: "Gelecek maliyet ile bugünkü değer modu arasındaki fark nedir?",
        a: "Gelecek maliyet modunda şu soruya yanıt verilir: 'Bugün 100 TL olan bir şey N yıl sonra kaç TL'ye mal olur?' Bugünkü değer modunda ise şu soruya yanıt verilir: 'N yıl sonra alacağım 100 TL, bugünkü değeriyle kaç TL eder?'",
      },
    ],
  },

  de: {
    title: "Inflationsrechner",
    short: "Berechnen Sie die Auswirkungen der Inflation auf Ihre Kaufkraft über die Zeit.",
    description:
      "Kostenloser Inflationsrechner. Berechnen Sie die zukünftigen Kosten von Waren, den Kaufkraftverlust und den heutigen Wert eines zukünftigen Geldbetrags.",
    keywords: [
      "Inflationsrechner",
      "Kaufkraft",
      "Zukunftswert Inflation",
      "VPI Rechner",
      "Lebenshaltungskosten",
      "Inflationsrate berechnen",
      "realer Geldwert",
    ],
    inputs: {
      amount: {
        label: "Betrag",
        help: "Der Geldbetrag, den Sie auf Inflation anpassen möchten.",
      },
      inflationRate: {
        label: "Jährliche Inflationsrate (%)",
        help: "Die erwartete oder historische durchschnittliche jährliche Inflationsrate. Die EZB strebt 2% an.",
      },
      years: {
        label: "Jahre",
        help: "Die Anzahl der Jahre, über die der Inflationseffekt berechnet werden soll.",
      },
      mode: {
        label: "Berechnungsmodus",
        help: "Zukünftige Kosten: Was wird Ihr Geld in der Zukunft kaufen? Barwert: Was ist ein zukünftiger Betrag in heutigem Geld wert?",
      },
    },
    outputs: {
      result: {
        label: "Ergebnis",
        help: "Im Modus zukünftige Kosten: äquivalenter zukünftiger Preis. Im Barwertmodus: heutiger Gegenwert des zukünftigen Betrags.",
      },
      purchasingPowerLoss: {
        label: "Kaufkraftverlust",
        help: "Der durch Inflation verlorene Prozentsatz der Kaufkraft über den Zeitraum.",
      },
      cumulativeInflation: {
        label: "Kumulative Inflation",
        help: "Der gesamte prozentuale Preisanstieg über den gesamten Zeitraum.",
      },
      realValueToday: {
        label: "Realer Wert in heutigen Euro",
        help: "Der inflationsbereinigte Wert in aktueller Währung.",
      },
    },
    options: {
      mode: {
        future_cost: "Zukünftige Kosten",
        present_value: "Barwert",
      },
    },
    errors: {
      amountRequired: "Der Betrag muss größer als null sein.",
      rateOutOfRange: "Die Inflationsrate muss zwischen 0% und 50% liegen.",
    },
    faq: [
      {
        q: "Was ist Inflation?",
        a: "Inflation ist die Rate, mit der das allgemeine Preisniveau von Waren und Dienstleistungen im Laufe der Zeit steigt und die Kaufkraft verringert. Ein Euro kauft heute weniger als vor 10 Jahren.",
      },
      {
        q: "Was ist das Inflationsziel der EZB?",
        a: "Die Europäische Zentralbank (EZB) strebt eine mittelfristige Inflationsrate von 2% an, gemessen am Harmonisierten Verbraucherpreisindex (HVPI).",
      },
      {
        q: "Was bedeutet kumulierte Inflation?",
        a: "Bei 3% jährlicher Inflation beträgt die kumulierte Inflation über 10 Jahre (1,03)^10 − 1 ≈ 34,4%, nicht 30%. Die Zinseszinsrechnung erhöht den Gesamteffekt.",
      },
      {
        q: "Was bedeutet Kaufkraftverlust?",
        a: "Bei 3% Inflation pro Jahr sinkt die Kaufkraft von heute 1 € auf etwa 0,74 € in 10 Jahren. Der Kaufkraftverlust beträgt etwa 25,6%.",
      },
    ],
  },

  fr: {
    title: "Calculateur d'Inflation",
    short: "Calculez l'impact de l'inflation sur votre pouvoir d'achat au fil du temps.",
    description:
      "Calculateur d'inflation gratuit. Trouvez le coût futur des biens, la perte de pouvoir d'achat et la valeur actuelle d'un montant futur.",
    keywords: [
      "calculateur inflation",
      "pouvoir d'achat",
      "valeur future inflation",
      "calculateur IPC",
      "coût de la vie",
      "taux d'inflation",
      "valeur réelle argent",
    ],
    inputs: {
      amount: {
        label: "Montant",
        help: "Le montant d'argent que vous souhaitez ajuster pour l'inflation.",
      },
      inflationRate: {
        label: "Taux d'inflation annuel (%)",
        help: "Le taux d'inflation annuel moyen attendu ou historique. La BCE vise 2%.",
      },
      years: {
        label: "Années",
        help: "Le nombre d'années sur lesquelles calculer l'effet de l'inflation.",
      },
      mode: {
        label: "Mode de calcul",
        help: "Coût futur : que pourra acheter votre argent ? Valeur actuelle : que vaut un montant futur en euros d'aujourd'hui ?",
      },
    },
    outputs: {
      result: {
        label: "Résultat",
        help: "En mode coût futur : prix futur équivalent. En mode valeur actuelle : équivalent aujourd'hui du montant futur.",
      },
      purchasingPowerLoss: {
        label: "Perte de pouvoir d'achat",
        help: "Le pourcentage de pouvoir d'achat érodé par l'inflation sur la période.",
      },
      cumulativeInflation: {
        label: "Inflation cumulée",
        help: "La hausse totale des prix en pourcentage sur l'ensemble de la période.",
      },
      realValueToday: {
        label: "Valeur réelle en euros actuels",
        help: "La valeur ajustée de l'inflation en monnaie actuelle.",
      },
    },
    options: {
      mode: {
        future_cost: "Coût futur",
        present_value: "Valeur actuelle",
      },
    },
    errors: {
      amountRequired: "Le montant doit être supérieur à zéro.",
      rateOutOfRange: "Le taux d'inflation doit être compris entre 0% et 50%.",
    },
    faq: [
      {
        q: "Qu'est-ce que l'inflation ?",
        a: "L'inflation est le taux auquel le niveau général des prix des biens et services augmente avec le temps, réduisant ainsi le pouvoir d'achat. Un euro aujourd'hui achète moins qu'il y a 10 ans.",
      },
      {
        q: "Quel est l'objectif d'inflation de la BCE ?",
        a: "La Banque Centrale Européenne vise un taux d'inflation de 2% à moyen terme, mesuré par l'Indice des Prix à la Consommation Harmonisé (IPCH).",
      },
      {
        q: "Comment l'inflation cumulée diffère-t-elle de l'inflation annuelle ?",
        a: "À 3% d'inflation annuelle, l'inflation cumulée sur 10 ans est de (1,03)^10 − 1 ≈ 34,4%, et non 30%. L'effet des intérêts composés amplifie le résultat total.",
      },
      {
        q: "Qu'est-ce que la perte de pouvoir d'achat ?",
        a: "À 3% d'inflation par an, 1 € aujourd'hui n'a que le pouvoir d'achat de 0,74 € dans 10 ans. La perte de pouvoir d'achat est d'environ 25,6%.",
      },
    ],
  },

  es: {
    title: "Calculadora de Inflación",
    short: "Calcula el impacto de la inflación en tu poder adquisitivo a lo largo del tiempo.",
    description:
      "Calculadora de inflación gratuita. Descubre el costo futuro de los bienes, la pérdida de poder adquisitivo y el valor presente de un monto futuro.",
    keywords: [
      "calculadora inflación",
      "poder adquisitivo",
      "valor futuro inflación",
      "calculadora IPC",
      "costo de vida",
      "tasa de inflación",
      "valor real dinero",
    ],
    inputs: {
      amount: {
        label: "Monto",
        help: "La cantidad de dinero que deseas ajustar por inflación.",
      },
      inflationRate: {
        label: "Tasa de inflación anual (%)",
        help: "La tasa de inflación anual promedio esperada o histórica. El BCE apunta al 2%.",
      },
      years: {
        label: "Años",
        help: "El número de años sobre los que calcular el efecto de la inflación.",
      },
      mode: {
        label: "Modo de cálculo",
        help: "Costo futuro: ¿qué comprará tu dinero en el futuro? Valor presente: ¿cuánto vale hoy un monto futuro?",
      },
    },
    outputs: {
      result: {
        label: "Resultado",
        help: "En modo costo futuro: precio futuro equivalente. En modo valor presente: equivalente hoy del monto futuro.",
      },
      purchasingPowerLoss: {
        label: "Pérdida de poder adquisitivo",
        help: "El porcentaje de poder adquisitivo erosionado por la inflación durante el período.",
      },
      cumulativeInflation: {
        label: "Inflación acumulada",
        help: "El aumento total de precios en porcentaje durante todo el período.",
      },
      realValueToday: {
        label: "Valor real en pesos actuales",
        help: "El valor ajustado por inflación en moneda actual.",
      },
    },
    options: {
      mode: {
        future_cost: "Costo futuro",
        present_value: "Valor presente",
      },
    },
    errors: {
      amountRequired: "El monto debe ser mayor que cero.",
      rateOutOfRange: "La tasa de inflación debe estar entre 0% y 50%.",
    },
    faq: [
      {
        q: "¿Qué es la inflación?",
        a: "La inflación es la tasa a la que el nivel general de precios de bienes y servicios sube con el tiempo, erosionando el poder adquisitivo. Un dólar hoy compra menos que hace 10 años debido a la inflación.",
      },
      {
        q: "¿Cuál es el objetivo de inflación de la Fed?",
        a: "La Reserva Federal de EE. UU. apunta a una inflación promedio del 2% anual, medida por el índice de precios PCE.",
      },
      {
        q: "¿Cómo difiere la inflación acumulada de la anual?",
        a: "Con una inflación anual del 3%, la inflación acumulada durante 10 años es (1,03)^10 − 1 ≈ 34,4%, no el 30%. El interés compuesto amplifica el efecto total.",
      },
      {
        q: "¿Qué significa la pérdida de poder adquisitivo?",
        a: "Si la inflación es del 3% anual durante 10 años, $1 hoy tiene el poder adquisitivo de aproximadamente $0,74 en 10 años. La pérdida es de aproximadamente el 25,6%.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Inflazione",
    short: "Calcola l'impatto dell'inflazione sul tuo potere d'acquisto nel tempo.",
    description:
      "Calcolatore di inflazione gratuito. Scopri il costo futuro dei beni, la perdita di potere d'acquisto e il valore attuale di un importo futuro.",
    keywords: [
      "calcolatore inflazione",
      "potere d'acquisto",
      "valore futuro inflazione",
      "calcolatore IPC",
      "costo della vita",
      "tasso di inflazione",
      "valore reale denaro",
    ],
    inputs: {
      amount: {
        label: "Importo",
        help: "L'importo di denaro che desideri adeguare all'inflazione.",
      },
      inflationRate: {
        label: "Tasso di inflazione annuo (%)",
        help: "Il tasso di inflazione annuo medio atteso o storico. La BCE mira al 2%.",
      },
      years: {
        label: "Anni",
        help: "Il numero di anni su cui calcolare l'effetto dell'inflazione.",
      },
      mode: {
        label: "Modalità di calcolo",
        help: "Costo futuro: cosa comprerà il tuo denaro in futuro? Valore attuale: quanto vale oggi un importo futuro?",
      },
    },
    outputs: {
      result: {
        label: "Risultato",
        help: "In modalità costo futuro: prezzo futuro equivalente. In modalità valore attuale: equivalente odierno dell'importo futuro.",
      },
      purchasingPowerLoss: {
        label: "Perdita di potere d'acquisto",
        help: "La percentuale di potere d'acquisto erosa dall'inflazione nel periodo.",
      },
      cumulativeInflation: {
        label: "Inflazione cumulativa",
        help: "L'aumento percentuale totale dei prezzi sull'intero periodo.",
      },
      realValueToday: {
        label: "Valore reale in euro attuali",
        help: "Il valore corretto per l'inflazione in valuta corrente.",
      },
    },
    options: {
      mode: {
        future_cost: "Costo futuro",
        present_value: "Valore attuale",
      },
    },
    errors: {
      amountRequired: "L'importo deve essere maggiore di zero.",
      rateOutOfRange: "Il tasso di inflazione deve essere compreso tra 0% e 50%.",
    },
    faq: [
      {
        q: "Cos'è l'inflazione?",
        a: "L'inflazione è il tasso con cui il livello generale dei prezzi di beni e servizi aumenta nel tempo, erodendo il potere d'acquisto. Un euro oggi compra meno di quanto faceva 10 anni fa.",
      },
      {
        q: "Qual è l'obiettivo di inflazione della BCE?",
        a: "La Banca Centrale Europea mira a un tasso di inflazione del 2% nel medio termine, misurato dall'Indice Armonizzato dei Prezzi al Consumo (IAPC).",
      },
      {
        q: "Cosa significa perdita di potere d'acquisto?",
        a: "Con un'inflazione del 3% annuo, 1 € oggi ha il potere d'acquisto di circa 0,74 € tra 10 anni. La perdita di potere d'acquisto è di circa il 25,6%.",
      },
    ],
  },

  ar: {
    title: "حاسبة التضخم",
    short: "احسب تأثير التضخم على قوتك الشرائية عبر الزمن.",
    description:
      "حاسبة تضخم مجانية. اكتشف التكلفة المستقبلية للسلع وفقدان القوة الشرائية والقيمة الحالية لمبلغ مستقبلي.",
    keywords: [
      "حاسبة التضخم",
      "القوة الشرائية",
      "القيمة المستقبلية للتضخم",
      "حاسبة مؤشر أسعار المستهلك",
      "تكلفة المعيشة",
      "معدل التضخم",
      "القيمة الحقيقية للمال",
    ],
    inputs: {
      amount: {
        label: "المبلغ",
        help: "المبلغ الذي تريد تعديله وفق التضخم.",
      },
      inflationRate: {
        label: "معدل التضخم السنوي (%)",
        help: "معدل التضخم السنوي المتوقع أو المتوسط التاريخي. يستهدف الاحتياطي الفيدرالي 2%.",
      },
      years: {
        label: "عدد السنوات",
        help: "عدد السنوات التي ستُحسب خلالها آثار التضخم.",
      },
      mode: {
        label: "وضع الحساب",
        help: "التكلفة المستقبلية: ماذا سيشتري مالك في المستقبل؟ القيمة الحالية: ما قيمة مبلغ مستقبلي بالدولار اليوم؟",
      },
    },
    outputs: {
      result: {
        label: "النتيجة",
        help: "في وضع التكلفة المستقبلية: السعر المستقبلي المعادل. في وضع القيمة الحالية: ما يعادل المبلغ المستقبلي اليوم.",
      },
      purchasingPowerLoss: {
        label: "فقدان القوة الشرائية",
        help: "النسبة المئوية للقوة الشرائية التي أكل منها التضخم خلال الفترة.",
      },
      cumulativeInflation: {
        label: "التضخم التراكمي",
        help: "الزيادة الإجمالية في الأسعار كنسبة مئوية على مدار الفترة بأكملها.",
      },
      realValueToday: {
        label: "القيمة الحقيقية بالدولار الحالي",
        help: "القيمة المعدّلة بالتضخم بالعملة الحالية.",
      },
    },
    options: {
      mode: {
        future_cost: "التكلفة المستقبلية",
        present_value: "القيمة الحالية",
      },
    },
    errors: {
      amountRequired: "يجب أن يكون المبلغ أكبر من الصفر.",
      rateOutOfRange: "يجب أن يكون معدل التضخم بين 0% و50%.",
    },
    faq: [
      {
        q: "ما هو التضخم؟",
        a: "التضخم هو معدل ارتفاع المستوى العام لأسعار السلع والخدمات مع مرور الوقت، مما يؤدي إلى تآكل القوة الشرائية. الدولار اليوم يشتري أقل مما كان يشتريه قبل 10 سنوات.",
      },
      {
        q: "ما هدف الاحتياطي الفيدرالي للتضخم؟",
        a: "يستهدف الاحتياطي الفيدرالي الأمريكي متوسط تضخم سنوي قدره 2%، مقاسًا بمؤشر أسعار نفقات الاستهلاك الشخصي (PCE).",
      },
      {
        q: "ما الفرق بين التضخم التراكمي والتضخم السنوي؟",
        a: "عند تضخم سنوي 3%، يبلغ التضخم التراكمي خلال 10 سنوات (1.03)^10 − 1 ≈ 34.4%، وليس 30%. يُضخّم التركيب المركب الأثر الإجمالي.",
      },
      {
        q: "ماذا يعني فقدان القوة الشرائية؟",
        a: "عند تضخم 3% سنويًا لمدة 10 سنوات، تصبح القوة الشرائية لدولار اليوم ما يعادل 0.74 دولار فقط بعد 10 سنوات. الخسارة نحو 25.6%.",
      },
    ],
  },

  ru: {
    title: "Калькулятор инфляции",
    short: "Рассчитайте влияние инфляции на покупательную способность ваших денег.",
    description:
      "Бесплатный калькулятор инфляции. Узнайте будущую стоимость товаров, потерю покупательной способности и реальную стоимость будущей суммы.",
    keywords: [
      "калькулятор инфляции",
      "покупательная способность",
      "будущая стоимость инфляция",
      "калькулятор ИПЦ",
      "стоимость жизни",
      "уровень инфляции",
      "реальная стоимость денег",
    ],
    inputs: {
      amount: {
        label: "Сумма",
        help: "Денежная сумма, которую вы хотите скорректировать с учётом инфляции.",
      },
      inflationRate: {
        label: "Годовой уровень инфляции (%)",
        help: "Ожидаемый или исторический среднегодовой уровень инфляции. Цель ФРС — 2%.",
      },
      years: {
        label: "Лет",
        help: "Количество лет, за которое рассчитывается эффект инфляции.",
      },
      mode: {
        label: "Режим расчёта",
        help: "Будущая стоимость: что купят ваши деньги в будущем? Текущая стоимость: сколько стоит сегодня будущая сумма?",
      },
    },
    outputs: {
      result: {
        label: "Результат",
        help: "В режиме будущей стоимости: эквивалентная будущая цена. В режиме текущей стоимости: сегодняшний эквивалент будущей суммы.",
      },
      purchasingPowerLoss: {
        label: "Потеря покупательной способности",
        help: "Процент покупательной способности, утраченный из-за инфляции за период.",
      },
      cumulativeInflation: {
        label: "Накопленная инфляция",
        help: "Общий процентный рост цен за весь период.",
      },
      realValueToday: {
        label: "Реальная стоимость в сегодняшних рублях",
        help: "Стоимость, скорректированная на инфляцию, в текущих деньгах.",
      },
    },
    options: {
      mode: {
        future_cost: "Будущая стоимость",
        present_value: "Текущая стоимость",
      },
    },
    errors: {
      amountRequired: "Сумма должна быть больше нуля.",
      rateOutOfRange: "Уровень инфляции должен быть от 0% до 50%.",
    },
    faq: [
      {
        q: "Что такое инфляция?",
        a: "Инфляция — это темп роста общего уровня цен на товары и услуги со временем, снижающий покупательную способность денег. Рубль сегодня покупает меньше, чем 10 лет назад.",
      },
      {
        q: "Каков целевой показатель инфляции ЦБ РФ?",
        a: "Банк России устанавливает целевой показатель инфляции на уровне 4% в год, ориентируясь на стабилизацию потребительских цен.",
      },
      {
        q: "Что означает потеря покупательной способности?",
        a: "При инфляции 3% в год за 10 лет 1 рубль сегодня обладает покупательной способностью примерно 0,74 рубля. Потеря составит около 25,6%.",
      },
    ],
  },

  zh: {
    title: "通货膨胀计算器",
    short: "计算通货膨胀对您购买力的影响，了解未来物价和现值。",
    description:
      "免费通货膨胀计算器。计算商品未来价格、购买力损失以及未来金额的现值。",
    keywords: [
      "通货膨胀计算器",
      "购买力",
      "未来价值通胀",
      "CPI计算器",
      "生活成本",
      "通胀率计算",
      "货币实际价值",
    ],
    inputs: {
      amount: {
        label: "金额",
        help: "您希望根据通胀率调整的货币金额。",
      },
      inflationRate: {
        label: "年通胀率（%）",
        help: "预期或历史平均年通胀率。美联储目标为2%。",
      },
      years: {
        label: "年数",
        help: "计算通胀影响的年限。",
      },
      mode: {
        label: "计算模式",
        help: "未来成本：您的钱未来能买什么？现值：未来的金额今天值多少钱？",
      },
    },
    outputs: {
      result: {
        label: "结果",
        help: "未来成本模式：等值未来价格。现值模式：未来金额的今日等值。",
      },
      purchasingPowerLoss: {
        label: "购买力损失",
        help: "通胀侵蚀的购买力百分比。",
      },
      cumulativeInflation: {
        label: "累计通胀率",
        help: "整个时期内价格上涨的总百分比。",
      },
      realValueToday: {
        label: "今日实际价值",
        help: "按通胀调整后的当前货币价值。",
      },
    },
    options: {
      mode: {
        future_cost: "未来成本",
        present_value: "现值",
      },
    },
    errors: {
      amountRequired: "金额必须大于零。",
      rateOutOfRange: "通胀率必须在0%至50%之间。",
    },
    faq: [
      {
        q: "什么是通货膨胀？",
        a: "通货膨胀是商品和服务的总体价格水平随时间上升的速率，会侵蚀购买力。今天的一元钱比10年前购买力更低。",
      },
      {
        q: "美联储的通胀目标是什么？",
        a: "美联储的目标是平均每年2%的通胀率，以PCE价格指数衡量。",
      },
      {
        q: "什么是购买力损失？",
        a: "年通胀率3%持续10年后，今天的1元钱在10年后只有约0.74元的购买力，购买力损失约为25.6%。",
      },
    ],
  },

  ja: {
    title: "インフレ計算機",
    short: "インフレが購買力に与える影響を計算し、将来の物価と現在価値を確認しましょう。",
    description:
      "無料のインフレ計算機。商品の将来コスト、購買力の低下、将来の金額の現在価値を計算します。",
    keywords: [
      "インフレ計算機",
      "購買力",
      "インフレ将来価値",
      "CPI計算",
      "生活費計算",
      "インフレ率計算",
      "実質価値",
    ],
    inputs: {
      amount: {
        label: "金額",
        help: "インフレで調整したい金額を入力してください。",
      },
      inflationRate: {
        label: "年間インフレ率（%）",
        help: "想定または過去の平均年間インフレ率。日銀は2%を目標としています。",
      },
      years: {
        label: "年数",
        help: "インフレの影響を計算する年数。",
      },
      mode: {
        label: "計算モード",
        help: "将来コスト：将来いくら必要になるか？現在価値：将来の金額が今日いくらに相当するか？",
      },
    },
    outputs: {
      result: {
        label: "結果",
        help: "将来コストモード：等価な将来価格。現在価値モード：将来の金額の今日の等価額。",
      },
      purchasingPowerLoss: {
        label: "購買力の低下",
        help: "期間中にインフレにより失われた購買力の割合。",
      },
      cumulativeInflation: {
        label: "累積インフレ率",
        help: "期間全体での価格上昇の合計割合。",
      },
      realValueToday: {
        label: "現在の実質価値",
        help: "インフレ調整後の現在の通貨での価値。",
      },
    },
    options: {
      mode: {
        future_cost: "将来コスト",
        present_value: "現在価値",
      },
    },
    errors: {
      amountRequired: "金額はゼロより大きくなければなりません。",
      rateOutOfRange: "インフレ率は0%から50%の範囲内でなければなりません。",
    },
    faq: [
      {
        q: "インフレとは何ですか？",
        a: "インフレ（インフレーション）は、財やサービスの一般的な価格水準が時間とともに上昇する率で、購買力を低下させます。今日の1万円は10年前の1万円より買えるものが少ないです。",
      },
      {
        q: "日本銀行のインフレ目標は何ですか？",
        a: "日本銀行は年率2%の物価上昇率を目標としており、消費者物価指数（CPI）で測定されます。",
      },
      {
        q: "購買力の低下とはどういう意味ですか？",
        a: "年率3%のインフレが10年続くと、今日の1万円は10年後に約7,400円の購買力しか持ちません。購買力の低下は約25.6%です。",
      },
    ],
  },

  ko: {
    title: "인플레이션 계산기",
    short: "인플레이션이 구매력에 미치는 영향을 계산하고 미래 물가와 현재 가치를 확인하세요.",
    description:
      "무료 인플레이션 계산기. 상품의 미래 비용, 구매력 손실, 미래 금액의 현재 가치를 계산하세요.",
    keywords: [
      "인플레이션 계산기",
      "구매력",
      "미래 가치 인플레이션",
      "소비자물가지수 계산",
      "생활비 계산",
      "인플레이션율 계산",
      "화폐 실질 가치",
    ],
    inputs: {
      amount: {
        label: "금액",
        help: "인플레이션으로 조정하려는 금액입니다.",
      },
      inflationRate: {
        label: "연간 인플레이션율 (%)",
        help: "예상 또는 역사적 평균 연간 인플레이션율입니다. 미 연준 목표는 2%입니다.",
      },
      years: {
        label: "연수",
        help: "인플레이션 효과를 계산할 연수입니다.",
      },
      mode: {
        label: "계산 모드",
        help: "미래 비용: 미래에 얼마가 필요한가요? 현재 가치: 미래의 금액이 오늘 얼마에 해당하나요?",
      },
    },
    outputs: {
      result: {
        label: "결과",
        help: "미래 비용 모드: 등가 미래 가격. 현재 가치 모드: 미래 금액의 현재 등가액.",
      },
      purchasingPowerLoss: {
        label: "구매력 손실",
        help: "인플레이션으로 인해 해당 기간 동안 손실된 구매력 비율.",
      },
      cumulativeInflation: {
        label: "누적 인플레이션율",
        help: "전체 기간 동안의 총 가격 상승 비율.",
      },
      realValueToday: {
        label: "현재 실질 가치",
        help: "인플레이션 조정 후 현재 화폐 가치.",
      },
    },
    options: {
      mode: {
        future_cost: "미래 비용",
        present_value: "현재 가치",
      },
    },
    errors: {
      amountRequired: "금액은 0보다 커야 합니다.",
      rateOutOfRange: "인플레이션율은 0%에서 50% 사이여야 합니다.",
    },
    faq: [
      {
        q: "인플레이션이란 무엇인가요?",
        a: "인플레이션은 재화와 서비스의 일반적인 가격 수준이 시간이 지남에 따라 상승하는 비율로, 구매력을 감소시킵니다. 오늘의 1만 원은 10년 전보다 구매할 수 있는 것이 적습니다.",
      },
      {
        q: "한국은행의 인플레이션 목표는 무엇인가요?",
        a: "한국은행은 소비자물가지수(CPI)를 기준으로 연간 2%의 물가 상승률을 목표로 합니다.",
      },
      {
        q: "구매력 손실이란 무엇을 의미하나요?",
        a: "연 3% 인플레이션이 10년간 지속되면, 오늘의 1만 원은 10년 후 약 7,440원의 구매력만 갖게 됩니다. 구매력 손실은 약 25.6%입니다.",
      },
    ],
  },

  hi: {
    title: "मुद्रास्फीति कैलकुलेटर",
    short: "मुद्रास्फीति का अपनी क्रय शक्ति पर प्रभाव जानें और भविष्य की लागत व वर्तमान मूल्य की गणना करें।",
    description:
      "निःशुल्क मुद्रास्फीति कैलकुलेटर। वस्तुओं की भविष्य की लागत, क्रय शक्ति की हानि और भविष्य की राशि का वर्तमान मूल्य जानें।",
    keywords: [
      "मुद्रास्फीति कैलकुलेटर",
      "क्रय शक्ति",
      "भविष्य मूल्य मुद्रास्फीति",
      "CPI कैलकुलेटर",
      "जीवन यापन लागत",
      "मुद्रास्फीति दर",
      "पैसे का वास्तविक मूल्य",
    ],
    inputs: {
      amount: {
        label: "राशि",
        help: "वह राशि जिसे आप मुद्रास्फीति के अनुसार समायोजित करना चाहते हैं।",
      },
      inflationRate: {
        label: "वार्षिक मुद्रास्फीति दर (%)",
        help: "अपेक्षित या ऐतिहासिक औसत वार्षिक मुद्रास्फीति दर। RBI का लक्ष्य 4% है।",
      },
      years: {
        label: "वर्ष",
        help: "मुद्रास्फीति के प्रभाव की गणना के लिए वर्षों की संख्या।",
      },
      mode: {
        label: "गणना मोड",
        help: "भविष्य की लागत: आपका पैसा भविष्य में क्या खरीद सकेगा? वर्तमान मूल्य: भविष्य की राशि आज कितने के बराबर है?",
      },
    },
    outputs: {
      result: {
        label: "परिणाम",
        help: "भविष्य की लागत मोड में: समतुल्य भविष्य की कीमत। वर्तमान मूल्य मोड में: भविष्य की राशि का आज का समतुल्य।",
      },
      purchasingPowerLoss: {
        label: "क्रय शक्ति की हानि",
        help: "मुद्रास्फीति से अवधि के दौरान खोई हुई क्रय शक्ति का प्रतिशत।",
      },
      cumulativeInflation: {
        label: "संचयी मुद्रास्फीति",
        help: "पूरी अवधि में कुल मूल्य वृद्धि का प्रतिशत।",
      },
      realValueToday: {
        label: "आज का वास्तविक मूल्य",
        help: "मुद्रास्फीति समायोजित, वर्तमान मुद्रा में मूल्य।",
      },
    },
    options: {
      mode: {
        future_cost: "भविष्य की लागत",
        present_value: "वर्तमान मूल्य",
      },
    },
    errors: {
      amountRequired: "राशि शून्य से अधिक होनी चाहिए।",
      rateOutOfRange: "मुद्रास्फीति दर 0% और 50% के बीच होनी चाहिए।",
    },
    faq: [
      {
        q: "मुद्रास्फीति क्या है?",
        a: "मुद्रास्फीति वह दर है जिस पर समय के साथ वस्तुओं और सेवाओं का सामान्य मूल्य स्तर बढ़ता है, जिससे क्रय शक्ति कम होती है। आज का ₹100 दस साल पहले के ₹100 से कम खरीद सकता है।",
      },
      {
        q: "RBI का मुद्रास्फीति लक्ष्य क्या है?",
        a: "भारतीय रिज़र्व बैंक (RBI) उपभोक्ता मूल्य सूचकांक (CPI) के आधार पर 4% (±2%) की मुद्रास्फीति दर को लक्षित करता है।",
      },
      {
        q: "क्रय शक्ति की हानि का क्या मतलब है?",
        a: "यदि मुद्रास्फीति 3% प्रति वर्ष है और 10 वर्षों तक चलती है, तो आज का ₹1 दस साल बाद लगभग ₹0.74 की क्रय शक्ति रखेगा। हानि लगभग 25.6% होगी।",
      },
    ],
  },
};

export default i18n;
