import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Currency Converter",
    short: "Convert between 25 major world currencies using static reference rates.",
    description:
      "Quick currency converter using a static mid-market reference rate snapshot from January 2025. Covers 25 popular currencies. Reference only — not live data.",
    keywords: [
      "currency converter",
      "exchange rate",
      "FX calculator",
      "foreign exchange",
      "money converter",
      "USD EUR GBP",
      "reference rate",
    ],
    inputs: {
      amount: { label: "Amount", help: "Amount to convert in the source currency." },
      fromCurrency: { label: "From currency", help: "ISO 4217 currency code you are converting from." },
      toCurrency: { label: "To currency", help: "ISO 4217 currency code you are converting to." },
    },
    outputs: {
      convertedAmount: { label: "Converted amount", help: "Equivalent value in the target currency at the reference rate." },
      rate: { label: "Rate used", help: "Units of target currency per 1 unit of source currency." },
      reverseRate: { label: "Reverse rate", help: "Units of source currency per 1 unit of target currency." },
      lastUpdated: { label: "Reference date", help: "Snapshot date of the static reference rate table." },
    },
    errors: {
      amountOutOfRange: "Amount must be between 0 and 1,000,000,000,000.",
      unknownCurrency: "Currency code not supported.",
    },
    faq: [
      {
        q: "Are these rates live?",
        a: "No. The rates are a static snapshot from January 2025 and will drift over time. Use a bank or licensed FX provider for real transactions.",
      },
      {
        q: "Why does the rate not match my bank?",
        a: "Banks and FX providers charge a spread (typically 1–4%) on top of the mid-market rate. This calculator shows only the mid-market reference value.",
      },
      {
        q: "Which currencies are supported?",
        a: "25 of the world's most-traded currencies including USD, EUR, GBP, JPY, CNY, TRY, CAD, AUD, CHF, INR, BRL, MXN, KRW, SGD, HKD, ZAR, RUB, SEK, NOK, DKK, PLN, NZD, AED, SAR, and ILS.",
      },
      {
        q: "How is the conversion calculated?",
        a: "All rates are stored relative to USD. To convert from currency A to B, the amount is first expressed in USD (amount ÷ rate_A) and then multiplied by rate_B.",
      },
    ],
  },
  pt: {
    title: "Conversor de Moeda",
    short: "Converta valores entre as principais moedas do mundo.",
    description:
      "Conversor de moeda gratuito. Converta entre euros, dólares, libras, ienes e outras moedas com taxas de câmbio atualizadas.",
    keywords: ["conversor moeda", "câmbio", "euro dólar", "taxa câmbio", "conversão moedas"],
    inputs: {
      amount: { label: "Amount", help: "Amount to convert in the source currency." },
      fromCurrency: { label: "From currency", help: "ISO 4217 currency code you are converting from." },
      toCurrency: { label: "To currency", help: "ISO 4217 currency code you are converting to." },
    },
    outputs: {
      convertedAmount: { label: "Converted amount", help: "Equivalent value in the target currency at the reference rate." },
      rate: { label: "Rate used", help: "Units of target currency per 1 unit of source currency." },
      reverseRate: { label: "Reverse rate", help: "Units of source currency per 1 unit of target currency." },
      lastUpdated: { label: "Reference date", help: "Snapshot date of the static reference rate table." },
    },
    errors: {
      amountOutOfRange: "Amount must be between 0 and 1,000,000,000,000.",
      unknownCurrency: "Currency code not supported.",
    },
    faq: [
      {
        q: "Are these rates live?",
        a: "No. The rates are a static snapshot from January 2025 and will drift over time. Use a bank or licensed FX provider for real transactions.",
      },
      {
        q: "Why does the rate not match my bank?",
        a: "Banks and FX providers charge a spread (typically 1–4%) on top of the mid-market rate. This calculator shows only the mid-market reference value.",
      },
      {
        q: "Which currencies are supported?",
        a: "25 of the world's most-traded currencies including USD, EUR, GBP, JPY, CNY, TRY, CAD, AUD, CHF, INR, BRL, MXN, KRW, SGD, HKD, ZAR, RUB, SEK, NOK, DKK, PLN, NZD, AED, SAR, and ILS.",
      },
      {
        q: "How is the conversion calculated?",
        a: "All rates are stored relative to USD. To convert from currency A to B, the amount is first expressed in USD (amount ÷ rate_A) and then multiplied by rate_B.",
      },
    ],
  },
  id: {
    title: "Konverter Mata Uang",
    short: "Konversikan nilai antara mata uang utama dunia.",
    description:
      "Konverter mata uang gratis. Konversikan antara rupiah, dolar, euro, yen, dan mata uang lainnya dengan kurs terkini.",
    keywords: ["konverter mata uang", "kurs", "USD IDR", "kurs valas", "konversi mata uang"],
    inputs: {
      amount: { label: "Amount", help: "Amount to convert in the source currency." },
      fromCurrency: { label: "From currency", help: "ISO 4217 currency code you are converting from." },
      toCurrency: { label: "To currency", help: "ISO 4217 currency code you are converting to." },
    },
    outputs: {
      convertedAmount: { label: "Converted amount", help: "Equivalent value in the target currency at the reference rate." },
      rate: { label: "Rate used", help: "Units of target currency per 1 unit of source currency." },
      reverseRate: { label: "Reverse rate", help: "Units of source currency per 1 unit of target currency." },
      lastUpdated: { label: "Reference date", help: "Snapshot date of the static reference rate table." },
    },
    errors: {
      amountOutOfRange: "Amount must be between 0 and 1,000,000,000,000.",
      unknownCurrency: "Currency code not supported.",
    },
    faq: [
      {
        q: "Are these rates live?",
        a: "No. The rates are a static snapshot from January 2025 and will drift over time. Use a bank or licensed FX provider for real transactions.",
      },
      {
        q: "Why does the rate not match my bank?",
        a: "Banks and FX providers charge a spread (typically 1–4%) on top of the mid-market rate. This calculator shows only the mid-market reference value.",
      },
      {
        q: "Which currencies are supported?",
        a: "25 of the world's most-traded currencies including USD, EUR, GBP, JPY, CNY, TRY, CAD, AUD, CHF, INR, BRL, MXN, KRW, SGD, HKD, ZAR, RUB, SEK, NOK, DKK, PLN, NZD, AED, SAR, and ILS.",
      },
      {
        q: "How is the conversion calculated?",
        a: "All rates are stored relative to USD. To convert from currency A to B, the amount is first expressed in USD (amount ÷ rate_A) and then multiplied by rate_B.",
      },
    ],
  },


  tr: {
    title: "Döviz Çevirici",
    short: "Statik referans kurları ile 25 büyük döviz arasında dönüşüm yapın.",
    description:
      "Ocak 2025 tarihli statik orta piyasa referans kurları kullanan hızlı döviz çevirici. 25 popüler para birimini kapsar. Sadece referans amaçlıdır — canlı veri değildir.",
    keywords: [
      "döviz çevirici",
      "döviz kuru",
      "kur hesaplama",
      "para çevirici",
      "USD EUR TRY",
      "FX hesaplama",
      "referans kuru",
    ],
    inputs: {
      amount: { label: "Tutar", help: "Kaynak para birimi cinsinden çevrilecek tutar." },
      fromCurrency: { label: "Kaynak para birimi", help: "Dönüştürülecek ISO 4217 para birimi kodu." },
      toCurrency: { label: "Hedef para birimi", help: "Hedef ISO 4217 para birimi kodu." },
    },
    outputs: {
      convertedAmount: { label: "Çevrilen tutar", help: "Referans kura göre hedef para birimindeki karşılık." },
      rate: { label: "Kullanılan kur", help: "Kaynak para biriminin 1 biriminin hedefteki karşılığı." },
      reverseRate: { label: "Ters kur", help: "Hedef para biriminin 1 biriminin kaynaktaki karşılığı." },
      lastUpdated: { label: "Referans tarihi", help: "Statik referans kur tablosunun anlık görüntü tarihi." },
    },
    errors: {
      amountOutOfRange: "Tutar 0 ile 1.000.000.000.000 arasında olmalıdır.",
      unknownCurrency: "Desteklenmeyen para birimi kodu.",
    },
    faq: [
      {
        q: "Bu kurlar canlı mı?",
        a: "Hayır. Kurlar Ocak 2025'in statik bir görüntüsüdür ve zamanla geçerliliğini yitirir. Gerçek işlemler için banka veya lisanslı bir döviz sağlayıcısı kullanın.",
      },
      {
        q: "Neden bankamın kuru ile aynı değil?",
        a: "Bankalar ve döviz sağlayıcıları, orta piyasa kurunun üzerine genellikle %1–4 marj ekler. Bu hesaplayıcı yalnızca orta piyasa referans değerini gösterir.",
      },
      {
        q: "Hangi para birimleri destekleniyor?",
        a: "USD, EUR, GBP, JPY, CNY, TRY, CAD, AUD, CHF, INR, BRL, MXN, KRW, SGD, HKD, ZAR, RUB, SEK, NOK, DKK, PLN, NZD, AED, SAR ve ILS dahil dünyada en çok işlem gören 25 para birimi.",
      },
      {
        q: "Çevrim nasıl hesaplanıyor?",
        a: "Tüm kurlar USD'ye göre tutulur. A'dan B'ye çevirmek için tutar önce USD cinsine getirilir (tutar ÷ A_kuru), ardından B_kuru ile çarpılır.",
      },
    ],
  },

  de: {
    title: "Währungsrechner",
    short: "Rechnen Sie zwischen 25 wichtigen Weltwährungen mit statischen Referenzkursen um.",
    description:
      "Schneller Währungsrechner auf Basis einer statischen Mittelkurs-Momentaufnahme vom Januar 2025. Umfasst 25 beliebte Währungen. Nur Referenz — keine Live-Daten.",
    keywords: [
      "Währungsrechner",
      "Wechselkurs",
      "Devisenrechner",
      "Geld umrechnen",
      "Devisenkurs",
      "EUR USD GBP",
      "Referenzkurs",
    ],
    inputs: {
      amount: { label: "Betrag", help: "Umzurechnender Betrag in der Ausgangswährung." },
      fromCurrency: { label: "Von Währung", help: "ISO-4217-Code der Ausgangswährung." },
      toCurrency: { label: "In Währung", help: "ISO-4217-Code der Zielwährung." },
    },
    outputs: {
      convertedAmount: { label: "Umgerechneter Betrag", help: "Gegenwert in der Zielwährung zum Referenzkurs." },
      rate: { label: "Verwendeter Kurs", help: "Einheiten Zielwährung pro 1 Einheit Ausgangswährung." },
      reverseRate: { label: "Umkehrkurs", help: "Einheiten Ausgangswährung pro 1 Einheit Zielwährung." },
      lastUpdated: { label: "Referenzdatum", help: "Stichtag der statischen Referenzkurs-Tabelle." },
    },
    errors: {
      amountOutOfRange: "Der Betrag muss zwischen 0 und 1.000.000.000.000 liegen.",
      unknownCurrency: "Währungscode nicht unterstützt.",
    },
    faq: [
      {
        q: "Sind die Kurse aktuell?",
        a: "Nein. Die Kurse sind eine statische Momentaufnahme vom Januar 2025 und veralten mit der Zeit. Für echte Transaktionen nutzen Sie eine Bank oder einen lizenzierten Devisenanbieter.",
      },
      {
        q: "Warum weicht der Kurs von meiner Bank ab?",
        a: "Banken und Devisenanbieter schlagen üblicherweise einen Spread von 1–4% auf den Mittelkurs auf. Dieser Rechner zeigt nur den Mittelkurs.",
      },
      {
        q: "Welche Währungen werden unterstützt?",
        a: "25 der weltweit meistgehandelten Währungen, darunter USD, EUR, GBP, JPY, CNY, TRY, CAD, AUD, CHF, INR und weitere.",
      },
    ],
  },

  fr: {
    title: "Convertisseur de Devises",
    short: "Convertissez entre 25 grandes devises mondiales avec des taux de référence statiques.",
    description:
      "Convertisseur de devises rapide basé sur un instantané statique des taux de référence mi-marché de janvier 2025. Couvre 25 devises populaires. Référence uniquement — pas de données en direct.",
    keywords: [
      "convertisseur de devises",
      "taux de change",
      "calculateur FX",
      "change",
      "conversion monnaie",
      "EUR USD",
      "taux de référence",
    ],
    inputs: {
      amount: { label: "Montant", help: "Montant à convertir dans la devise source." },
      fromCurrency: { label: "Devise source", help: "Code ISO 4217 de la devise à convertir." },
      toCurrency: { label: "Devise cible", help: "Code ISO 4217 de la devise cible." },
    },
    outputs: {
      convertedAmount: { label: "Montant converti", help: "Équivalent dans la devise cible au taux de référence." },
      rate: { label: "Taux utilisé", help: "Unités de la devise cible pour 1 unité de la devise source." },
      reverseRate: { label: "Taux inverse", help: "Unités de la devise source pour 1 unité de la devise cible." },
      lastUpdated: { label: "Date de référence", help: "Date de l'instantané de la table de taux de référence." },
    },
    errors: {
      amountOutOfRange: "Le montant doit être compris entre 0 et 1 000 000 000 000.",
      unknownCurrency: "Code de devise non pris en charge.",
    },
    faq: [
      {
        q: "Ces taux sont-ils en temps réel ?",
        a: "Non. Les taux sont un instantané statique de janvier 2025 et deviendront obsolètes. Pour les transactions réelles, utilisez une banque ou un prestataire FX agréé.",
      },
      {
        q: "Pourquoi le taux ne correspond-il pas à ma banque ?",
        a: "Les banques ajoutent un spread (1 à 4%) au taux mi-marché. Ce calculateur n'affiche que le taux mi-marché de référence.",
      },
      {
        q: "Quelles devises sont prises en charge ?",
        a: "25 des devises les plus échangées au monde, dont USD, EUR, GBP, JPY, CNY, TRY, CAD, AUD, CHF, INR, etc.",
      },
    ],
  },

  es: {
    title: "Conversor de Divisas",
    short: "Convierte entre 25 monedas principales del mundo usando tipos de referencia estáticos.",
    description:
      "Conversor de divisas rápido basado en una instantánea estática de tipos de cambio medios del mercado de enero de 2025. Cubre 25 monedas populares. Solo referencia — no son datos en vivo.",
    keywords: [
      "conversor de divisas",
      "tipo de cambio",
      "calculadora FX",
      "cambio de moneda",
      "convertir dinero",
      "USD EUR",
      "tipo de referencia",
    ],
    inputs: {
      amount: { label: "Cantidad", help: "Cantidad a convertir en la moneda origen." },
      fromCurrency: { label: "Moneda origen", help: "Código ISO 4217 de la moneda a convertir." },
      toCurrency: { label: "Moneda destino", help: "Código ISO 4217 de la moneda destino." },
    },
    outputs: {
      convertedAmount: { label: "Cantidad convertida", help: "Equivalente en la moneda destino al tipo de referencia." },
      rate: { label: "Tipo aplicado", help: "Unidades de moneda destino por 1 unidad de moneda origen." },
      reverseRate: { label: "Tipo inverso", help: "Unidades de moneda origen por 1 unidad de moneda destino." },
      lastUpdated: { label: "Fecha de referencia", help: "Fecha de la instantánea de la tabla de tipos de referencia." },
    },
    errors: {
      amountOutOfRange: "La cantidad debe estar entre 0 y 1.000.000.000.000.",
      unknownCurrency: "Código de moneda no admitido.",
    },
    faq: [
      {
        q: "¿Son tipos en vivo?",
        a: "No. Los tipos son una instantánea estática de enero de 2025 y se desactualizarán. Para transacciones reales, usa un banco o proveedor FX autorizado.",
      },
      {
        q: "¿Por qué no coincide con mi banco?",
        a: "Los bancos aplican un margen (1–4%) sobre el tipo medio del mercado. Este calculador muestra solo el tipo medio de referencia.",
      },
      {
        q: "¿Qué monedas están soportadas?",
        a: "25 de las monedas más negociadas del mundo, incluidas USD, EUR, GBP, JPY, CNY, TRY, CAD, AUD, CHF, INR y más.",
      },
    ],
  },

  it: {
    title: "Convertitore di Valute",
    short: "Converti tra 25 valute mondiali principali usando tassi di riferimento statici.",
    description:
      "Convertitore di valute rapido basato su un'istantanea statica dei tassi di cambio medi di gennaio 2025. Copre 25 valute popolari. Solo riferimento — non sono dati in tempo reale.",
    keywords: [
      "convertitore valute",
      "tasso di cambio",
      "calcolatore FX",
      "cambio valuta",
      "convertire denaro",
      "EUR USD",
      "tasso di riferimento",
    ],
    inputs: {
      amount: { label: "Importo", help: "Importo da convertire nella valuta di origine." },
      fromCurrency: { label: "Valuta di origine", help: "Codice ISO 4217 della valuta da convertire." },
      toCurrency: { label: "Valuta di destinazione", help: "Codice ISO 4217 della valuta di destinazione." },
    },
    outputs: {
      convertedAmount: { label: "Importo convertito", help: "Controvalore nella valuta di destinazione al tasso di riferimento." },
      rate: { label: "Tasso usato", help: "Unità di valuta destinazione per 1 unità di valuta origine." },
      reverseRate: { label: "Tasso inverso", help: "Unità di valuta origine per 1 unità di valuta destinazione." },
      lastUpdated: { label: "Data di riferimento", help: "Data dell'istantanea della tabella dei tassi di riferimento." },
    },
    errors: {
      amountOutOfRange: "L'importo deve essere compreso tra 0 e 1.000.000.000.000.",
      unknownCurrency: "Codice valuta non supportato.",
    },
    faq: [
      {
        q: "Sono tassi in tempo reale?",
        a: "No. I tassi sono un'istantanea statica di gennaio 2025 e diventeranno obsoleti. Per transazioni reali, usa una banca o un operatore FX autorizzato.",
      },
      {
        q: "Perché il tasso non corrisponde alla mia banca?",
        a: "Le banche applicano uno spread (1–4%) sopra il tasso medio. Questo calcolatore mostra solo il tasso medio di riferimento.",
      },
      {
        q: "Quali valute sono supportate?",
        a: "25 tra le valute più scambiate al mondo, tra cui USD, EUR, GBP, JPY, CNY, TRY, CAD, AUD, CHF, INR e altre.",
      },
    ],
  },

  ar: {
    title: "محول العملات",
    short: "حوّل بين 25 عملة عالمية رئيسية باستخدام أسعار صرف مرجعية ثابتة.",
    description:
      "محول عملات سريع يعتمد على لقطة ثابتة لأسعار الصرف المتوسطة من يناير 2025. يغطي 25 عملة شائعة. للمرجعية فقط — ليست بيانات حية.",
    keywords: [
      "محول العملات",
      "سعر الصرف",
      "حاسبة العملات",
      "تحويل الأموال",
      "صرف أجنبي",
      "دولار يورو",
      "سعر مرجعي",
    ],
    inputs: {
      amount: { label: "المبلغ", help: "المبلغ المراد تحويله بعملة المصدر." },
      fromCurrency: { label: "من عملة", help: "رمز ISO 4217 للعملة التي تحوّل منها." },
      toCurrency: { label: "إلى عملة", help: "رمز ISO 4217 للعملة التي تحوّل إليها." },
    },
    outputs: {
      convertedAmount: { label: "المبلغ المحوَّل", help: "المعادل بعملة الوجهة وفقًا لسعر الصرف المرجعي." },
      rate: { label: "السعر المستخدم", help: "وحدات العملة الهدف مقابل وحدة واحدة من عملة المصدر." },
      reverseRate: { label: "السعر العكسي", help: "وحدات عملة المصدر مقابل وحدة واحدة من عملة الهدف." },
      lastUpdated: { label: "تاريخ المرجع", help: "تاريخ اللقطة لجدول الأسعار المرجعية الثابت." },
    },
    errors: {
      amountOutOfRange: "يجب أن يكون المبلغ بين 0 و1,000,000,000,000.",
      unknownCurrency: "رمز العملة غير مدعوم.",
    },
    faq: [
      {
        q: "هل هذه الأسعار حيّة؟",
        a: "لا. الأسعار لقطة ثابتة من يناير 2025 وستصبح قديمة مع الوقت. استخدم بنكًا أو مزوّد صرف مرخّصًا للمعاملات الفعلية.",
      },
      {
        q: "لماذا لا يتطابق السعر مع بنكي؟",
        a: "تضيف البنوك هامشًا (عادة 1–4%) فوق سعر الصرف المتوسط. تعرض هذه الحاسبة السعر المتوسط المرجعي فقط.",
      },
      {
        q: "ما العملات المدعومة؟",
        a: "25 من أكثر العملات تداولًا في العالم، تشمل الدولار الأمريكي واليورو والجنيه الإسترليني والين والريال السعودي والدرهم الإماراتي وغيرها.",
      },
    ],
  },

  ru: {
    title: "Конвертер валют",
    short: "Конвертируйте между 25 основными мировыми валютами по статическим справочным курсам.",
    description:
      "Быстрый конвертер валют на основе статического снимка среднерыночных справочных курсов на январь 2025 года. Охватывает 25 популярных валют. Только для справки — не актуальные данные.",
    keywords: [
      "конвертер валют",
      "курс валют",
      "обмен валют",
      "FX калькулятор",
      "конвертация денег",
      "USD EUR RUB",
      "справочный курс",
    ],
    inputs: {
      amount: { label: "Сумма", help: "Сумма для конвертации в исходной валюте." },
      fromCurrency: { label: "Из валюты", help: "Код ISO 4217 исходной валюты." },
      toCurrency: { label: "В валюту", help: "Код ISO 4217 целевой валюты." },
    },
    outputs: {
      convertedAmount: { label: "Конвертированная сумма", help: "Эквивалент в целевой валюте по справочному курсу." },
      rate: { label: "Применённый курс", help: "Единиц целевой валюты за 1 единицу исходной." },
      reverseRate: { label: "Обратный курс", help: "Единиц исходной валюты за 1 единицу целевой." },
      lastUpdated: { label: "Дата справки", help: "Дата снимка таблицы справочных курсов." },
    },
    errors: {
      amountOutOfRange: "Сумма должна быть от 0 до 1 000 000 000 000.",
      unknownCurrency: "Код валюты не поддерживается.",
    },
    faq: [
      {
        q: "Это актуальные курсы?",
        a: "Нет. Курсы — статический снимок на январь 2025 года, со временем они устареют. Для реальных операций обратитесь в банк или к лицензированному FX-оператору.",
      },
      {
        q: "Почему курс не совпадает с банковским?",
        a: "Банки и обменники добавляют спред (обычно 1–4%) к среднерыночному курсу. Этот калькулятор показывает только среднерыночный справочный курс.",
      },
      {
        q: "Какие валюты поддерживаются?",
        a: "25 из самых торгуемых мировых валют, включая USD, EUR, GBP, JPY, CNY, RUB, TRY, CAD, AUD, CHF, INR и другие.",
      },
    ],
  },

  zh: {
    title: "货币转换器",
    short: "使用静态参考汇率在25种主要世界货币之间转换。",
    description:
      "基于2025年1月静态中间市场参考汇率快照的快速货币转换器。覆盖25种热门货币。仅供参考——非实时数据。",
    keywords: [
      "货币转换器",
      "汇率",
      "外汇计算器",
      "货币兑换",
      "美元 欧元 人民币",
      "参考汇率",
      "外汇换算",
    ],
    inputs: {
      amount: { label: "金额", help: "以源货币表示的待转换金额。" },
      fromCurrency: { label: "源货币", help: "源货币的 ISO 4217 代码。" },
      toCurrency: { label: "目标货币", help: "目标货币的 ISO 4217 代码。" },
    },
    outputs: {
      convertedAmount: { label: "转换后金额", help: "按参考汇率折算的目标货币金额。" },
      rate: { label: "使用汇率", help: "每 1 单位源货币对应的目标货币单位数。" },
      reverseRate: { label: "反向汇率", help: "每 1 单位目标货币对应的源货币单位数。" },
      lastUpdated: { label: "参考日期", help: "静态参考汇率表的快照日期。" },
    },
    errors: {
      amountOutOfRange: "金额必须在 0 到 1,000,000,000,000 之间。",
      unknownCurrency: "不支持的货币代码。",
    },
    faq: [
      {
        q: "这些是实时汇率吗？",
        a: "不是。汇率是 2025 年 1 月的静态快照，会随时间变得过时。请使用银行或持牌外汇服务商办理实际交易。",
      },
      {
        q: "为什么与银行汇率不一致？",
        a: "银行和外汇服务商通常在中间市场汇率基础上加 1%–4% 点差。此计算器仅显示中间市场参考汇率。",
      },
      {
        q: "支持哪些货币？",
        a: "全球交易量最大的 25 种货币，包括 USD、EUR、GBP、JPY、CNY、HKD、KRW、SGD、TRY、CAD、AUD、CHF、INR 等。",
      },
    ],
  },

  ja: {
    title: "通貨換算機",
    short: "静的な参考レートを使って世界の主要25通貨を換算します。",
    description:
      "2025年1月時点の静的なミッドマーケット参考レートに基づく簡易通貨換算機。主要25通貨に対応。参考用途のみ — リアルタイムデータではありません。",
    keywords: [
      "通貨換算",
      "為替レート",
      "外貨計算機",
      "両替計算",
      "USD JPY",
      "参考レート",
      "FX 換算",
    ],
    inputs: {
      amount: { label: "金額", help: "換算元通貨で表した金額。" },
      fromCurrency: { label: "換算元通貨", help: "換算元通貨の ISO 4217 コード。" },
      toCurrency: { label: "換算先通貨", help: "換算先通貨の ISO 4217 コード。" },
    },
    outputs: {
      convertedAmount: { label: "換算後の金額", help: "参考レートで換算した換算先通貨の金額。" },
      rate: { label: "適用レート", help: "換算元通貨 1 単位あたりの換算先通貨の単位数。" },
      reverseRate: { label: "逆レート", help: "換算先通貨 1 単位あたりの換算元通貨の単位数。" },
      lastUpdated: { label: "参考日付", help: "静的参考レート表のスナップショット日付。" },
    },
    errors: {
      amountOutOfRange: "金額は 0 から 1,000,000,000,000 の範囲内で入力してください。",
      unknownCurrency: "サポートされていない通貨コードです。",
    },
    faq: [
      {
        q: "これはリアルタイムレートですか？",
        a: "いいえ。レートは 2025 年 1 月時点の静的なスナップショットで、時間とともに古くなります。実際の取引には銀行や認可された FX プロバイダーをご利用ください。",
      },
      {
        q: "銀行のレートと一致しないのはなぜですか？",
        a: "銀行や両替業者はミッドマーケットレートに対して 1〜4% のスプレッドを上乗せします。この計算機はミッドマーケットの参考値のみを表示します。",
      },
      {
        q: "対応している通貨は？",
        a: "USD、EUR、GBP、JPY、CNY、KRW、HKD、SGD、TRY、CAD、AUD、CHF、INR など世界で最も取引量の多い 25 通貨に対応しています。",
      },
    ],
  },

  ko: {
    title: "통화 환산기",
    short: "정적 참고 환율로 세계 주요 25개 통화 간 환산하세요.",
    description:
      "2025년 1월 기준 정적 미드마켓 참고 환율 스냅샷을 사용하는 빠른 통화 환산기. 25개 주요 통화 지원. 참고용 — 실시간 데이터가 아닙니다.",
    keywords: [
      "통화 환산기",
      "환율",
      "외환 계산기",
      "통화 변환",
      "USD KRW",
      "참고 환율",
      "FX 계산",
    ],
    inputs: {
      amount: { label: "금액", help: "원천 통화로 표시한 환산할 금액." },
      fromCurrency: { label: "원천 통화", help: "원천 통화의 ISO 4217 코드." },
      toCurrency: { label: "대상 통화", help: "대상 통화의 ISO 4217 코드." },
    },
    outputs: {
      convertedAmount: { label: "환산 금액", help: "참고 환율로 환산한 대상 통화 금액." },
      rate: { label: "적용 환율", help: "원천 통화 1단위당 대상 통화 단위 수." },
      reverseRate: { label: "역환율", help: "대상 통화 1단위당 원천 통화 단위 수." },
      lastUpdated: { label: "참고 일자", help: "정적 참고 환율표의 스냅샷 일자." },
    },
    errors: {
      amountOutOfRange: "금액은 0에서 1,000,000,000,000 사이여야 합니다.",
      unknownCurrency: "지원되지 않는 통화 코드입니다.",
    },
    faq: [
      {
        q: "실시간 환율인가요?",
        a: "아니요. 환율은 2025년 1월 시점의 정적 스냅샷이며 시간이 지나면 오래됩니다. 실거래에는 은행이나 인가된 FX 사업자를 이용하세요.",
      },
      {
        q: "왜 은행 환율과 다른가요?",
        a: "은행과 환전소는 미드마켓 환율 위에 1~4% 스프레드를 부과합니다. 이 계산기는 미드마켓 참고 값만 표시합니다.",
      },
      {
        q: "어떤 통화를 지원하나요?",
        a: "USD, EUR, GBP, JPY, CNY, KRW, HKD, SGD, TRY, CAD, AUD, CHF, INR 등 세계에서 가장 많이 거래되는 25개 통화입니다.",
      },
    ],
  },

  hi: {
    title: "मुद्रा परिवर्तक",
    short: "स्थिर संदर्भ दरों का उपयोग करके 25 प्रमुख विश्व मुद्राओं के बीच परिवर्तित करें।",
    description:
      "जनवरी 2025 के स्थिर मध्य-बाज़ार संदर्भ दर स्नैपशॉट पर आधारित त्वरित मुद्रा परिवर्तक। 25 लोकप्रिय मुद्राएँ शामिल। केवल संदर्भ हेतु — लाइव डेटा नहीं।",
    keywords: [
      "मुद्रा परिवर्तक",
      "विनिमय दर",
      "एफ़एक्स कैलकुलेटर",
      "विदेशी मुद्रा",
      "मुद्रा बदलें",
      "USD INR",
      "संदर्भ दर",
    ],
    inputs: {
      amount: { label: "राशि", help: "स्रोत मुद्रा में परिवर्तित की जाने वाली राशि।" },
      fromCurrency: { label: "स्रोत मुद्रा", help: "स्रोत मुद्रा का ISO 4217 कोड।" },
      toCurrency: { label: "लक्ष्य मुद्रा", help: "लक्ष्य मुद्रा का ISO 4217 कोड।" },
    },
    outputs: {
      convertedAmount: { label: "परिवर्तित राशि", help: "संदर्भ दर पर लक्ष्य मुद्रा में मूल्य।" },
      rate: { label: "उपयोग की गई दर", help: "स्रोत मुद्रा की 1 इकाई के लिए लक्ष्य मुद्रा की इकाइयाँ।" },
      reverseRate: { label: "विपरीत दर", help: "लक्ष्य मुद्रा की 1 इकाई के लिए स्रोत मुद्रा की इकाइयाँ।" },
      lastUpdated: { label: "संदर्भ तिथि", help: "स्थिर संदर्भ दर तालिका का स्नैपशॉट दिनांक।" },
    },
    errors: {
      amountOutOfRange: "राशि 0 और 1,000,000,000,000 के बीच होनी चाहिए।",
      unknownCurrency: "मुद्रा कोड समर्थित नहीं है।",
    },
    faq: [
      {
        q: "क्या ये दरें लाइव हैं?",
        a: "नहीं। दरें जनवरी 2025 का एक स्थिर स्नैपशॉट हैं और समय के साथ पुरानी हो जाएँगी। वास्तविक लेन-देन के लिए बैंक या लाइसेंस प्राप्त FX प्रदाता का उपयोग करें।",
      },
      {
        q: "मेरे बैंक की दर से मेल क्यों नहीं खाती?",
        a: "बैंक और मुद्रा प्रदाता मध्य-बाज़ार दर के ऊपर 1–4% का स्प्रेड लगाते हैं। यह कैलकुलेटर केवल मध्य-बाज़ार संदर्भ मूल्य दिखाता है।",
      },
      {
        q: "कौन-सी मुद्राएँ समर्थित हैं?",
        a: "दुनिया की सबसे अधिक कारोबार वाली 25 मुद्राएँ, जिनमें USD, EUR, GBP, JPY, CNY, INR, TRY, CAD, AUD, CHF आदि शामिल हैं।",
      },
    ],
  },
};

export default i18n;
