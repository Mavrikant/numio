import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "CAGR Calculator",
    short:
      "Find the compound annual growth rate of an investment from its starting value, ending value, and time.",
    description:
      "Free CAGR calculator. Enter a beginning value, ending value, and number of years to compute the compound annual growth rate, total return, and growth multiple.",
    keywords: [
      "cagr calculator",
      "compound annual growth rate",
      "annualized return",
      "investment growth rate",
      "total return",
      "growth multiple",
    ],
    inputs: {
      beginningValue: { label: "Beginning Value", help: "The investment's value at the start." },
      endingValue: { label: "Ending Value", help: "The investment's value at the end." },
      years: { label: "Number of Years", help: "Length of the holding period in years (decimals allowed)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "Smoothed annual growth rate over the period." },
      totalReturn: { label: "Total Return", help: "Cumulative percentage gain over the whole period." },
      multiple: { label: "Growth Multiple", help: "Ending value divided by beginning value (e.g. 2× means doubled)." },
    },
    faq: [
      {
        q: "What is CAGR?",
        a: "CAGR (compound annual growth rate) is the constant yearly rate that would grow an investment from its beginning value to its ending value over a given number of years, assuming the gains compound each year.",
      },
      {
        q: "How is CAGR different from total return?",
        a: "Total return is the overall percentage gain across the whole period; CAGR converts that into a single per-year rate. An investment that doubles over 5 years has a 100% total return but a CAGR of about 14.87%.",
      },
      {
        q: "What are the limitations of CAGR?",
        a: "CAGR smooths over volatility — it assumes steady compounding and ignores the ups and downs along the way. It also does not account for cash added or withdrawn during the period.",
      },
    ],
  },
  nl: {
    title: "CAGR Calculator",
    short:
      "Find the compound annual growth rate of an investment from its starting value, ending value, and time.",
    description:
      "Gratis CAGR calculator. Enter a beginning value, ending value, and nummer of jaren to compute the compound annual growth rate, total return, and growth multiple.",
    keywords: [
      "cagr calculator",
      "compound annual growth rate",
      "annualized return",
      "investment growth rate",
      "total return",
      "growth multiple",
    ],
    inputs: {
      beginningValue: { label: "Beginning Waarde", help: "The investment's value at the start." },
      endingValue: { label: "Ending Waarde", help: "The investment's value at the end." },
      years: { label: "Nummer of Years", help: "Lengte of the holding period in jaren (decimals allowed)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "Smoothed annual growth rate over the period." },
      totalReturn: { label: "Total Return", help: "Cumulative percentage gain over the whole period." },
      multiple: { label: "Growth Multiple", help: "Ending value divided by beginning value (e.g. 2× means doubled)." },
    },
    faq: [
      {
        q: "What is CAGR?",
        a: "CAGR (compound annual growth rate) is the constant yearly rate that would grow an investment from its beginning value to its ending value over a given nummer of jaren, assuming the gains compound each year.",
      },
      {
        q: "How is CAGR different from total return?",
        a: "Total return is the overall percentage gain across the whole period; CAGR converteers that into a single per-year rate. An investment that doubles over 5 jaren has a 100% total return but a CAGR of about 14.87%.",
      },
      {
        q: "What are the limitations of CAGR?",
        a: "CAGR smooths over volatility — it assumes steady compounding and ignores the ups and downs along the way. It also does not account for cash added or withdrawn during the period.",
      },
    ],
  },

  pl: {
    title: "CAGR Kalkulator",
    short:
      "Find the compound annual growth rate of an investment from its starting value, ending value, and time.",
    description:
      "Darmowy CAGR kalkulator. Enter a beginning value, ending value, and liczba of lat to compute the compound annual growth rate, total return, and growth multiple.",
    keywords: [
      "cagr kalkulator",
      "compound annual growth rate",
      "annualized return",
      "investment growth rate",
      "total return",
      "growth multiple",
    ],
    inputs: {
      beginningValue: { label: "Beginning Wartość", help: "The investment's value at the start." },
      endingValue: { label: "Ending Wartość", help: "The investment's value at the end." },
      years: { label: "Liczba of Years", help: "Długość of the holding period in lat (decimals allowed)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "Smoothed annual growth rate over the period." },
      totalReturn: { label: "Total Return", help: "Cumulative percentage gain over the whole period." },
      multiple: { label: "Growth Multiple", help: "Ending value divided by beginning value (e.g. 2× means doubled)." },
    },
    faq: [
      {
        q: "What is CAGR?",
        a: "CAGR (compound annual growth rate) is the constant yearly rate that would grow an investment from its beginning value to its ending value over a given liczba of lat, assuming the gains compound each year.",
      },
      {
        q: "How is CAGR different from total return?",
        a: "Total return is the overall percentage gain across the whole period; CAGR konwertujs that into a single per-year rate. An investment that doubles over 5 lat has a 100% total return but a CAGR of about 14.87%.",
      },
      {
        q: "What are the limitations of CAGR?",
        a: "CAGR smooths over volatility — it assumes steady compounding and ignores the ups and downs along the way. It also does not account for cash added or withdrawn during the period.",
      },
    ],
  },
  tr: {
    title: "CAGR Hesaplama (Bileşik Yıllık Büyüme Oranı)",
    short:
      "Bir yatırımın başlangıç değeri, bitiş değeri ve süresinden bileşik yıllık büyüme oranını bulun.",
    description:
      "Ücretsiz CAGR hesaplayıcı. Başlangıç değeri, bitiş değeri ve yıl sayısını girerek bileşik yıllık büyüme oranını, toplam getiriyi ve büyüme katını hesaplayın.",
    keywords: [
      "cagr hesaplama",
      "bileşik yıllık büyüme oranı",
      "yıllıklandırılmış getiri",
      "yatırım büyüme oranı",
      "toplam getiri",
      "büyüme katı",
    ],
    inputs: {
      beginningValue: { label: "Başlangıç Değeri", help: "Yatırımın başlangıçtaki değeri." },
      endingValue: { label: "Bitiş Değeri", help: "Yatırımın sonundaki değer." },
      years: { label: "Yıl Sayısı", help: "Yatırım süresi (ondalık girilebilir)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "Dönem boyunca düzleştirilmiş yıllık büyüme oranı." },
      totalReturn: { label: "Toplam Getiri", help: "Tüm dönem boyunca toplam yüzde kazanç." },
      multiple: { label: "Büyüme Katı", help: "Bitiş değerinin başlangıca oranı (örn. 2× = iki katı)." },
    },
  },
  de: {
    title: "CAGR-Rechner (durchschnittliche jährliche Wachstumsrate)",
    short:
      "Ermitteln Sie die durchschnittliche jährliche Wachstumsrate aus Anfangswert, Endwert und Laufzeit.",
    description:
      "Kostenloser CAGR-Rechner. Geben Sie Anfangswert, Endwert und Anzahl der Jahre ein, um die jährliche Wachstumsrate, Gesamtrendite und das Wachstumsvielfache zu berechnen.",
    keywords: [
      "cagr rechner",
      "jährliche wachstumsrate",
      "annualisierte rendite",
      "investitionswachstum",
      "gesamtrendite",
      "wachstumsfaktor",
    ],
    inputs: {
      beginningValue: { label: "Anfangswert", help: "Wert der Anlage zu Beginn." },
      endingValue: { label: "Endwert", help: "Wert der Anlage am Ende." },
      years: { label: "Anzahl der Jahre", help: "Haltedauer in Jahren (Dezimalstellen erlaubt)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "Geglättete jährliche Wachstumsrate über den Zeitraum." },
      totalReturn: { label: "Gesamtrendite", help: "Kumulierter prozentualer Gewinn über den Zeitraum." },
      multiple: { label: "Wachstumsvielfaches", help: "Endwert geteilt durch Anfangswert (z. B. 2× = verdoppelt)." },
    },
  },
  fr: {
    title: "Calculateur de TCAC (CAGR)",
    short:
      "Trouvez le taux de croissance annuel composé d'un investissement à partir des valeurs initiale, finale et de la durée.",
    description:
      "Calculateur de TCAC gratuit. Saisissez une valeur initiale, une valeur finale et un nombre d'années pour calculer le taux de croissance annuel composé, le rendement total et le multiple de croissance.",
    keywords: [
      "calculateur cagr",
      "taux croissance annuel composé",
      "rendement annualisé",
      "croissance investissement",
      "rendement total",
      "multiple de croissance",
    ],
    inputs: {
      beginningValue: { label: "Valeur initiale", help: "Valeur de l'investissement au départ." },
      endingValue: { label: "Valeur finale", help: "Valeur de l'investissement à la fin." },
      years: { label: "Nombre d'années", help: "Durée de détention en années (décimales autorisées)." },
    },
    outputs: {
      cagr: { label: "TCAC", help: "Taux de croissance annuel lissé sur la période." },
      totalReturn: { label: "Rendement total", help: "Gain cumulé en pourcentage sur la période." },
      multiple: { label: "Multiple de croissance", help: "Valeur finale divisée par la valeur initiale (ex. 2× = doublé)." },
    },
  },
  es: {
    title: "Calculadora de CAGR (tasa de crecimiento anual compuesto)",
    short:
      "Calcula la tasa de crecimiento anual compuesto de una inversión a partir de su valor inicial, final y el tiempo.",
    description:
      "Calculadora de CAGR gratuita. Ingresa un valor inicial, un valor final y el número de años para calcular la tasa de crecimiento anual compuesto, el retorno total y el múltiplo de crecimiento.",
    keywords: [
      "calculadora cagr",
      "tasa crecimiento anual compuesto",
      "retorno anualizado",
      "crecimiento inversión",
      "retorno total",
      "múltiplo de crecimiento",
    ],
    inputs: {
      beginningValue: { label: "Valor inicial", help: "Valor de la inversión al comienzo." },
      endingValue: { label: "Valor final", help: "Valor de la inversión al final." },
      years: { label: "Número de años", help: "Duración del período en años (se permiten decimales)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "Tasa anual de crecimiento suavizada del período." },
      totalReturn: { label: "Retorno total", help: "Ganancia porcentual acumulada del período." },
      multiple: { label: "Múltiplo de crecimiento", help: "Valor final dividido por el inicial (p. ej. 2× = duplicado)." },
    },
  },
  it: {
    title: "Calcolatore CAGR (tasso di crescita annuo composto)",
    short:
      "Trova il tasso di crescita annuo composto di un investimento da valore iniziale, finale e durata.",
    description:
      "Calcolatore CAGR gratuito. Inserisci valore iniziale, valore finale e numero di anni per calcolare il tasso di crescita annuo composto, il rendimento totale e il multiplo di crescita.",
    keywords: [
      "calcolatore cagr",
      "tasso crescita annuo composto",
      "rendimento annualizzato",
      "crescita investimento",
      "rendimento totale",
      "multiplo di crescita",
    ],
    inputs: {
      beginningValue: { label: "Valore iniziale", help: "Valore dell'investimento all'inizio." },
      endingValue: { label: "Valore finale", help: "Valore dell'investimento alla fine." },
      years: { label: "Numero di anni", help: "Durata del periodo in anni (decimali ammessi)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "Tasso di crescita annuo livellato sul periodo." },
      totalReturn: { label: "Rendimento totale", help: "Guadagno percentuale cumulato sul periodo." },
      multiple: { label: "Multiplo di crescita", help: "Valore finale diviso per quello iniziale (es. 2× = raddoppiato)." },
    },
  },
  pt: {
    title: "Calculadora de CAGR (taxa de crescimento anual composta)",
    short:
      "Encontre a taxa de crescimento anual composta de um investimento a partir do valor inicial, final e do tempo.",
    description:
      "Calculadora de CAGR gratuita. Informe um valor inicial, um valor final e o número de anos para calcular a taxa de crescimento anual composta, o retorno total e o múltiplo de crescimento.",
    keywords: [
      "calculadora cagr",
      "taxa crescimento anual composta",
      "retorno anualizado",
      "crescimento de investimento",
      "retorno total",
      "múltiplo de crescimento",
    ],
    inputs: {
      beginningValue: { label: "Valor inicial", help: "Valor do investimento no começo." },
      endingValue: { label: "Valor final", help: "Valor do investimento no fim." },
      years: { label: "Número de anos", help: "Duração do período em anos (decimais permitidos)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "Taxa de crescimento anual suavizada no período." },
      totalReturn: { label: "Retorno total", help: "Ganho percentual acumulado no período." },
      multiple: { label: "Múltiplo de crescimento", help: "Valor final dividido pelo inicial (ex.: 2× = dobrou)." },
    },
  },
  id: {
    title: "Kalkulator CAGR (laju pertumbuhan tahunan majemuk)",
    short:
      "Temukan laju pertumbuhan tahunan majemuk sebuah investasi dari nilai awal, nilai akhir, dan waktu.",
    description:
      "Kalkulator CAGR gratis. Masukkan nilai awal, nilai akhir, dan jumlah tahun untuk menghitung laju pertumbuhan tahunan majemuk, total imbal hasil, dan kelipatan pertumbuhan.",
    keywords: [
      "kalkulator cagr",
      "laju pertumbuhan tahunan majemuk",
      "imbal hasil tahunan",
      "pertumbuhan investasi",
      "total imbal hasil",
      "kelipatan pertumbuhan",
    ],
    inputs: {
      beginningValue: { label: "Nilai awal", help: "Nilai investasi pada awal periode." },
      endingValue: { label: "Nilai akhir", help: "Nilai investasi pada akhir periode." },
      years: { label: "Jumlah tahun", help: "Lama periode dalam tahun (boleh desimal)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "Laju pertumbuhan tahunan yang diratakan selama periode." },
      totalReturn: { label: "Total imbal hasil", help: "Keuntungan persentase kumulatif selama periode." },
      multiple: { label: "Kelipatan pertumbuhan", help: "Nilai akhir dibagi nilai awal (mis. 2× = dua kali lipat)." },
    },
  },
  ar: {
    title: "حاسبة معدل النمو السنوي المركب (CAGR)",
    short:
      "احسب معدل النمو السنوي المركب لاستثمار من قيمته الابتدائية والنهائية والمدة.",
    description:
      "حاسبة CAGR المجانية. أدخل القيمة الابتدائية والقيمة النهائية وعدد السنوات لحساب معدل النمو السنوي المركب والعائد الكلي ومضاعف النمو.",
    keywords: [
      "حاسبة cagr",
      "معدل النمو السنوي المركب",
      "العائد السنوي",
      "نمو الاستثمار",
      "العائد الكلي",
      "مضاعف النمو",
    ],
    inputs: {
      beginningValue: { label: "القيمة الابتدائية", help: "قيمة الاستثمار في البداية." },
      endingValue: { label: "القيمة النهائية", help: "قيمة الاستثمار في النهاية." },
      years: { label: "عدد السنوات", help: "مدة الاستثمار بالسنوات (يُسمح بالكسور)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "معدل النمو السنوي المنتظم خلال الفترة." },
      totalReturn: { label: "العائد الكلي", help: "نسبة الربح التراكمية خلال الفترة." },
      multiple: { label: "مضاعف النمو", help: "القيمة النهائية مقسومة على الابتدائية (مثل 2× = الضعف)." },
    },
  },
  ru: {
    title: "Калькулятор CAGR (среднегодовой темп роста)",
    short:
      "Найдите среднегодовой темп роста инвестиции по начальной, конечной стоимости и сроку.",
    description:
      "Бесплатный калькулятор CAGR. Введите начальную и конечную стоимость и число лет, чтобы рассчитать среднегодовой темп роста, общую доходность и кратность роста.",
    keywords: [
      "калькулятор cagr",
      "среднегодовой темп роста",
      "годовая доходность",
      "рост инвестиций",
      "общая доходность",
      "кратность роста",
    ],
    inputs: {
      beginningValue: { label: "Начальная стоимость", help: "Стоимость инвестиции в начале." },
      endingValue: { label: "Конечная стоимость", help: "Стоимость инвестиции в конце." },
      years: { label: "Число лет", help: "Срок в годах (допускаются десятичные)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "Сглаженный годовой темп роста за период." },
      totalReturn: { label: "Общая доходность", help: "Накопленная процентная прибыль за период." },
      multiple: { label: "Кратность роста", help: "Конечная стоимость, делённая на начальную (напр. 2× = удвоение)." },
    },
  },
  zh: {
    title: "复合年增长率 (CAGR) 计算器",
    short: "根据初始值、终值和年数，计算投资的复合年增长率。",
    description:
      "免费 CAGR 计算器。输入初始值、终值和年数，计算复合年增长率、总回报率和增长倍数。",
    keywords: ["cagr 计算器", "复合年增长率", "年化收益率", "投资增长率", "总回报率", "增长倍数"],
    inputs: {
      beginningValue: { label: "初始值", help: "投资在开始时的价值。" },
      endingValue: { label: "终值", help: "投资在结束时的价值。" },
      years: { label: "年数", help: "持有期年数（允许小数）。" },
    },
    outputs: {
      cagr: { label: "CAGR", help: "整个期间平滑后的年增长率。" },
      totalReturn: { label: "总回报率", help: "整个期间的累计百分比收益。" },
      multiple: { label: "增长倍数", help: "终值除以初始值（如 2× 表示翻倍）。" },
    },
  },
  ja: {
    title: "CAGR（年平均成長率）計算ツール",
    short: "初期値・最終値・年数から投資の年平均成長率（CAGR）を求めます。",
    description:
      "無料の CAGR 計算ツール。初期値、最終値、年数を入力して、年平均成長率、トータルリターン、成長倍率を計算します。",
    keywords: ["cagr 計算", "年平均成長率", "年率リターン", "投資成長率", "トータルリターン", "成長倍率"],
    inputs: {
      beginningValue: { label: "初期値", help: "開始時点の投資価値。" },
      endingValue: { label: "最終値", help: "終了時点の投資価値。" },
      years: { label: "年数", help: "保有期間（年・小数可）。" },
    },
    outputs: {
      cagr: { label: "CAGR", help: "期間を通じて平準化した年成長率。" },
      totalReturn: { label: "トータルリターン", help: "期間全体の累計リターン（％）。" },
      multiple: { label: "成長倍率", help: "最終値 ÷ 初期値（例：2× は2倍）。" },
    },
  },
  ko: {
    title: "CAGR(연평균 성장률) 계산기",
    short: "초기 가치, 최종 가치, 기간으로 투자의 연평균 성장률(CAGR)을 구합니다.",
    description:
      "무료 CAGR 계산기. 초기 가치, 최종 가치, 연수를 입력해 연평균 성장률, 총수익률, 성장 배수를 계산합니다.",
    keywords: ["cagr 계산기", "연평균 성장률", "연환산 수익률", "투자 성장률", "총수익률", "성장 배수"],
    inputs: {
      beginningValue: { label: "초기 가치", help: "시작 시점의 투자 가치." },
      endingValue: { label: "최종 가치", help: "종료 시점의 투자 가치." },
      years: { label: "연수", help: "보유 기간(연, 소수 허용)." },
    },
    outputs: {
      cagr: { label: "CAGR", help: "기간 전체에 걸쳐 평활화된 연간 성장률." },
      totalReturn: { label: "총수익률", help: "기간 전체의 누적 수익률(%)." },
      multiple: { label: "성장 배수", help: "최종 가치 ÷ 초기 가치(예: 2×는 2배)." },
    },
  },
  hi: {
    title: "CAGR कैलकुलेटर (चक्रवृद्धि वार्षिक वृद्धि दर)",
    short:
      "किसी निवेश के आरंभिक मूल्य, अंतिम मूल्य और अवधि से चक्रवृद्धि वार्षिक वृद्धि दर ज्ञात करें।",
    description:
      "मुफ़्त CAGR कैलकुलेटर। आरंभिक मूल्य, अंतिम मूल्य और वर्षों की संख्या दर्ज करके चक्रवृद्धि वार्षिक वृद्धि दर, कुल प्रतिफल और वृद्धि गुणक की गणना करें।",
    keywords: [
      "cagr कैलकुलेटर",
      "चक्रवृद्धि वार्षिक वृद्धि दर",
      "वार्षिक प्रतिफल",
      "निवेश वृद्धि दर",
      "कुल प्रतिफल",
      "वृद्धि गुणक",
    ],
    inputs: {
      beginningValue: { label: "आरंभिक मूल्य", help: "आरंभ में निवेश का मूल्य।" },
      endingValue: { label: "अंतिम मूल्य", help: "अंत में निवेश का मूल्य।" },
      years: { label: "वर्षों की संख्या", help: "अवधि वर्षों में (दशमलव मान्य)।" },
    },
    outputs: {
      cagr: { label: "CAGR", help: "अवधि भर की समतल वार्षिक वृद्धि दर।" },
      totalReturn: { label: "कुल प्रतिफल", help: "पूरी अवधि में संचयी प्रतिशत लाभ।" },
      multiple: { label: "वृद्धि गुणक", help: "अंतिम मूल्य ÷ आरंभिक मूल्य (जैसे 2× = दोगुना)।" },
    },
  },
};

export default i18n;
