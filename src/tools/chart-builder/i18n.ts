import type { ToolI18n } from "@/types/tool";

/**
 * Default (English) UI strings. Locales that don't fully translate the
 * interface fall back to these so the tool always renders complete labels.
 */
const enUi = {
  chartType: "Chart type",
  typeLine: "Line",
  typeBar: "Bar",
  typeScatter: "Scatter",
  typeArea: "Area",
  typePie: "Pie",
  typeHistogram: "Histogram",
  typeBox: "Box plot",
  xAxis: "X axis / labels",
  ySeries: "Y series (values)",
  ySeriesHint: "Select one or more numeric columns",
  chartTitle: "Chart title",
  chartTitlePlaceholder: "My chart",
  options: "Options",
  stacked: "Stack bars",
  smooth: "Smooth lines",
  download: "Download",
  downloadPng: "PNG image",
  downloadSvg: "SVG vector",
  noDataYet: "Upload or paste a CSV above to start building your chart.",
  needColumns: "Pick an X column and at least one Y series to draw the chart.",
  needValues: "This chart type needs at least one numeric column.",
  sampleLabel: "Sample: monthly sales & profit",
} as const;

const trUi = {
  chartType: "Grafik türü",
  typeLine: "Çizgi",
  typeBar: "Çubuk",
  typeScatter: "Dağılım",
  typeArea: "Alan",
  typePie: "Pasta",
  typeHistogram: "Histogram",
  typeBox: "Kutu grafiği",
  xAxis: "X ekseni / etiketler",
  ySeries: "Y serileri (değerler)",
  ySeriesHint: "Bir veya daha fazla sayısal sütun seçin",
  chartTitle: "Grafik başlığı",
  chartTitlePlaceholder: "Grafiğim",
  options: "Seçenekler",
  stacked: "Çubukları yığ",
  smooth: "Çizgileri yumuşat",
  download: "İndir",
  downloadPng: "PNG görsel",
  downloadSvg: "SVG vektör",
  noDataYet: "Grafiğinizi oluşturmaya başlamak için yukarıdan bir CSV yükleyin veya yapıştırın.",
  needColumns: "Grafiği çizmek için bir X sütunu ve en az bir Y serisi seçin.",
  needValues: "Bu grafik türü için en az bir sayısal sütun gerekir.",
  sampleLabel: "Örnek: aylık satış ve kâr",
} as const;

const i18n: ToolI18n = {
  en: {
    title: "Chart Builder — CSV to Graph",
    short: "Upload a CSV and build interactive line, bar, scatter, area, pie, histogram or box charts, then download them as PNG or SVG images.",
    description: "Free online chart maker. Upload your own CSV file or paste data, choose any chart type — line, bar, scatter, area, pie, histogram, box plot — pick the columns to plot, and download the result as a high-resolution PNG or SVG image. Everything runs in your browser; your data is never uploaded.",
    keywords: ["chart maker", "graph maker", "csv to chart", "online chart", "data visualization", "line chart", "bar chart", "pie chart", "scatter plot", "download chart image", "plotly"],
    ui: enUi,
    faq: [
      {
        q: "Does my data get uploaded to a server?",
        a: "No. The CSV is read and rendered entirely in your browser using JavaScript. Nothing is sent over the network, so it's safe to use with private or sensitive data.",
      },
      {
        q: "What chart types are supported?",
        a: "Line, bar (grouped or stacked), scatter, area, pie, histogram, and box plot. Pick an X column for the categories or horizontal axis and one or more numeric Y columns for the values.",
      },
      {
        q: "How do I download the chart as an image?",
        a: "Use the Download buttons above the chart to save a PNG raster image or an SVG vector file. SVG stays sharp at any size and is ideal for print or further editing.",
      },
      {
        q: "What file formats can I upload?",
        a: "Any comma, semicolon, tab, or pipe-separated text file (.csv, .tsv, .txt). The delimiter and header row are auto-detected, and both US (1,234.56) and EU (1.234,56) number formats are handled.",
      },
    ],
  },
  pt: {
    title: "Chart Builder — CSV to Graph",
    short: "Upload a CSV and build interactive line, bar, scatter, area, pie, histogram or box charts, then download them as PNG or SVG images.",
    description: "Free online chart maker. Upload your own CSV file or paste data, choose any chart type — line, bar, scatter, area, pie, histogram, box plot — pick the columns to plot, and download the result as a high-resolution PNG or SVG image. Everything runs in your browser; your data is never uploaded.",
    keywords: ["chart maker", "graph maker", "csv to chart", "online chart", "data visualization", "line chart", "bar chart", "pie chart", "scatter plot", "download chart image", "plotly"],
    ui: enUi,
    faq: [
      {
        q: "Does my data get uploaded to a server?",
        a: "No. The CSV is read and rendered entirely in your browser using JavaScript. Nothing is sent over the network, so it's safe to use with private or sensitive data.",
      },
      {
        q: "What chart types are supported?",
        a: "Line, bar (grouped or stacked), scatter, area, pie, histogram, and box plot. Pick an X column for the categories or horizontal axis and one or more numeric Y columns for the values.",
      },
      {
        q: "How do I download the chart as an image?",
        a: "Use the Download buttons above the chart to save a PNG raster image or an SVG vector file. SVG stays sharp at any size and is ideal for print or further editing.",
      },
      {
        q: "What file formats can I upload?",
        a: "Any comma, semicolon, tab, or pipe-separated text file (.csv, .tsv, .txt). The delimiter and header row are auto-detected, and both US (1,234.56) and EU (1.234,56) number formats are handled.",
      },
    ],
  },
  id: {
    title: "Chart Builder — CSV to Graph",
    short: "Upload a CSV and build interactive line, bar, scatter, area, pie, histogram or box charts, then download them as PNG or SVG images.",
    description: "Free online chart maker. Upload your own CSV file or paste data, choose any chart type — line, bar, scatter, area, pie, histogram, box plot — pick the columns to plot, and download the result as a high-resolution PNG or SVG image. Everything runs in your browser; your data is never uploaded.",
    keywords: ["chart maker", "graph maker", "csv to chart", "online chart", "data visualization", "line chart", "bar chart", "pie chart", "scatter plot", "download chart image", "plotly"],
    ui: enUi,
    faq: [
      {
        q: "Does my data get uploaded to a server?",
        a: "No. The CSV is read and rendered entirely in your browser using JavaScript. Nothing is sent over the network, so it's safe to use with private or sensitive data.",
      },
      {
        q: "What chart types are supported?",
        a: "Line, bar (grouped or stacked), scatter, area, pie, histogram, and box plot. Pick an X column for the categories or horizontal axis and one or more numeric Y columns for the values.",
      },
      {
        q: "How do I download the chart as an image?",
        a: "Use the Download buttons above the chart to save a PNG raster image or an SVG vector file. SVG stays sharp at any size and is ideal for print or further editing.",
      },
      {
        q: "What file formats can I upload?",
        a: "Any comma, semicolon, tab, or pipe-separated text file (.csv, .tsv, .txt). The delimiter and header row are auto-detected, and both US (1,234.56) and EU (1.234,56) number formats are handled.",
      },
    ],
  },

  tr: {
    title: "Grafik Oluşturucu — CSV'den Grafiğe",
    short: "Bir CSV yükleyin; çizgi, çubuk, dağılım, alan, pasta, histogram veya kutu grafikleri oluşturun ve PNG ya da SVG görsel olarak indirin.",
    description: "Ücretsiz çevrimiçi grafik oluşturucu. Kendi CSV dosyanızı yükleyin veya veri yapıştırın, herhangi bir grafik türünü seçin — çizgi, çubuk, dağılım, alan, pasta, histogram, kutu grafiği — çizilecek sütunları belirleyin ve sonucu yüksek çözünürlüklü PNG veya SVG görsel olarak indirin. Her şey tarayıcınızda çalışır; verileriniz hiçbir zaman yüklenmez.",
    keywords: ["grafik oluşturucu", "grafik yapma", "csv grafik", "çevrimiçi grafik", "veri görselleştirme", "çizgi grafik", "çubuk grafik", "pasta grafik", "dağılım grafiği", "grafik indir", "plotly"],
    ui: trUi,
    faq: [
      {
        q: "Verilerim bir sunucuya yükleniyor mu?",
        a: "Hayır. CSV tamamen tarayıcınızda JavaScript ile okunur ve çizilir. Hiçbir veri ağ üzerinden gönderilmez, bu yüzden özel veya hassas verilerle güvenle kullanabilirsiniz.",
      },
      {
        q: "Hangi grafik türleri destekleniyor?",
        a: "Çizgi, çubuk (gruplu veya yığılmış), dağılım, alan, pasta, histogram ve kutu grafiği. Kategoriler veya yatay eksen için bir X sütunu ve değerler için bir ya da daha fazla sayısal Y sütunu seçin.",
      },
      {
        q: "Grafiği görsel olarak nasıl indiririm?",
        a: "Grafiğin üzerindeki İndir düğmelerini kullanarak PNG raster görsel veya SVG vektör dosyası kaydedin. SVG her boyutta net kalır ve baskı ya da düzenleme için idealdir.",
      },
      {
        q: "Hangi dosya biçimlerini yükleyebilirim?",
        a: "Virgül, noktalı virgül, sekme veya dikey çizgi ile ayrılmış herhangi bir metin dosyası (.csv, .tsv, .txt). Ayraç ve başlık satırı otomatik algılanır; hem ABD (1,234.56) hem de AB (1.234,56) sayı biçimleri desteklenir.",
      },
    ],
  },
  de: {
    title: "Diagramm-Generator — CSV zu Grafik",
    short: "CSV hochladen und interaktive Linien-, Balken-, Streu-, Flächen-, Kreis-, Histogramm- oder Boxdiagramme erstellen und als PNG oder SVG herunterladen.",
    description: "Kostenloser Online-Diagramm-Generator. Eigene CSV-Datei hochladen oder Daten einfügen, beliebigen Diagrammtyp wählen — Linie, Balken, Streuung, Fläche, Kreis, Histogramm, Boxplot — Spalten auswählen und das Ergebnis als hochauflösendes PNG oder SVG herunterladen. Alles läuft im Browser; Ihre Daten werden nie hochgeladen.",
    keywords: ["Diagramm erstellen", "Grafik-Generator", "CSV zu Diagramm", "Online-Diagramm", "Datenvisualisierung", "Liniendiagramm", "Balkendiagramm", "Kreisdiagramm", "Streudiagramm", "Diagramm herunterladen"],
    ui: { ...enUi, chartType: "Diagrammtyp", typeLine: "Linie", typeBar: "Balken", typeScatter: "Streuung", typeArea: "Fläche", typePie: "Kreis", typeBox: "Boxplot", xAxis: "X-Achse / Beschriftungen", ySeries: "Y-Reihen (Werte)", chartTitle: "Diagrammtitel", download: "Herunterladen", downloadPng: "PNG-Bild", downloadSvg: "SVG-Vektor", options: "Optionen" },
  },
  fr: {
    title: "Créateur de Graphiques — CSV vers Graphique",
    short: "Téléversez un CSV et créez des graphiques interactifs en ligne, à barres, nuage de points, aire, secteurs, histogramme ou boîte, puis téléchargez-les en PNG ou SVG.",
    description: "Créateur de graphiques en ligne gratuit. Téléversez votre fichier CSV ou collez des données, choisissez n'importe quel type de graphique — ligne, barres, nuage de points, aire, secteurs, histogramme, boîte à moustaches — sélectionnez les colonnes et téléchargez le résultat en image PNG ou SVG haute résolution. Tout s'exécute dans votre navigateur ; vos données ne sont jamais envoyées.",
    keywords: ["créateur de graphiques", "générateur de graphiques", "csv vers graphique", "graphique en ligne", "visualisation de données", "graphique linéaire", "diagramme à barres", "camembert", "nuage de points", "télécharger graphique"],
    ui: { ...enUi, chartType: "Type de graphique", typeLine: "Ligne", typeBar: "Barres", typeScatter: "Nuage de points", typeArea: "Aire", typePie: "Secteurs", typeBox: "Boîte", xAxis: "Axe X / étiquettes", ySeries: "Séries Y (valeurs)", chartTitle: "Titre du graphique", download: "Télécharger", downloadPng: "Image PNG", downloadSvg: "Vecteur SVG", options: "Options" },
  },
  es: {
    title: "Creador de Gráficos — CSV a Gráfico",
    short: "Suba un CSV y cree gráficos interactivos de líneas, barras, dispersión, área, circular, histograma o caja, y descárguelos como imágenes PNG o SVG.",
    description: "Creador de gráficos en línea gratuito. Suba su archivo CSV o pegue datos, elija cualquier tipo de gráfico — línea, barras, dispersión, área, circular, histograma, diagrama de caja — seleccione las columnas y descargue el resultado como imagen PNG o SVG de alta resolución. Todo se ejecuta en su navegador; sus datos nunca se suben.",
    keywords: ["creador de gráficos", "generador de gráficos", "csv a gráfico", "gráfico en línea", "visualización de datos", "gráfico de líneas", "gráfico de barras", "gráfico circular", "diagrama de dispersión", "descargar gráfico"],
    ui: { ...enUi, chartType: "Tipo de gráfico", typeLine: "Líneas", typeBar: "Barras", typeScatter: "Dispersión", typeArea: "Área", typePie: "Circular", typeBox: "Caja", xAxis: "Eje X / etiquetas", ySeries: "Series Y (valores)", chartTitle: "Título del gráfico", download: "Descargar", downloadPng: "Imagen PNG", downloadSvg: "Vector SVG", options: "Opciones" },
  },
  it: {
    title: "Creatore di Grafici — da CSV a Grafico",
    short: "Carica un CSV e crea grafici interattivi a linee, barre, dispersione, area, torta, istogramma o box, poi scaricali come immagini PNG o SVG.",
    description: "Creatore di grafici online gratuito. Carica il tuo file CSV o incolla i dati, scegli qualsiasi tipo di grafico — linea, barre, dispersione, area, torta, istogramma, box plot — seleziona le colonne e scarica il risultato come immagine PNG o SVG ad alta risoluzione. Tutto avviene nel browser; i tuoi dati non vengono mai caricati.",
    keywords: ["creatore di grafici", "generatore di grafici", "csv a grafico", "grafico online", "visualizzazione dati", "grafico a linee", "grafico a barre", "grafico a torta", "grafico a dispersione", "scarica grafico"],
    ui: { ...enUi, chartType: "Tipo di grafico", typeLine: "Linea", typeBar: "Barre", typeScatter: "Dispersione", typeArea: "Area", typePie: "Torta", typeBox: "Box", xAxis: "Asse X / etichette", ySeries: "Serie Y (valori)", chartTitle: "Titolo del grafico", download: "Scarica", downloadPng: "Immagine PNG", downloadSvg: "Vettore SVG", options: "Opzioni" },
  },
  ar: {
    title: "منشئ الرسوم البيانية — من CSV إلى رسم بياني",
    short: "ارفع ملف CSV وأنشئ رسومًا بيانية تفاعلية خطية أو شريطية أو مبعثرة أو مساحية أو دائرية أو مدرجًا تكراريًا أو صندوقيًا، ثم نزّلها كصور PNG أو SVG.",
    description: "أداة مجانية لإنشاء الرسوم البيانية عبر الإنترنت. ارفع ملف CSV الخاص بك أو الصق البيانات، اختر أي نوع رسم بياني — خطي، شريطي، مبعثر، مساحي، دائري، مدرج تكراري، صندوقي — حدد الأعمدة ونزّل النتيجة كصورة PNG أو SVG عالية الدقة. كل شيء يعمل في متصفحك؛ بياناتك لا تُرفع أبدًا.",
    keywords: ["منشئ الرسوم البيانية", "إنشاء رسم بياني", "csv إلى رسم بياني", "رسم بياني عبر الإنترنت", "تصور البيانات", "رسم خطي", "رسم شريطي", "رسم دائري", "مخطط مبعثر", "تنزيل الرسم البياني"],
    ui: { ...enUi, chartType: "نوع الرسم البياني", typeLine: "خطي", typeBar: "شريطي", typeScatter: "مبعثر", typeArea: "مساحي", typePie: "دائري", typeBox: "صندوقي", xAxis: "المحور X / التسميات", ySeries: "سلاسل Y (القيم)", chartTitle: "عنوان الرسم البياني", download: "تنزيل", downloadPng: "صورة PNG", downloadSvg: "متجه SVG", options: "خيارات" },
  },
  ru: {
    title: "Конструктор Графиков — из CSV в График",
    short: "Загрузите CSV и постройте интерактивные линейные, столбчатые, точечные, площадные, круговые, гистограммные или диаграммы размаха, затем скачайте их как PNG или SVG.",
    description: "Бесплатный онлайн-конструктор графиков. Загрузите свой CSV-файл или вставьте данные, выберите любой тип графика — линия, столбцы, точечный, область, круговая, гистограмма, ящик с усами — укажите столбцы и скачайте результат как изображение PNG или SVG высокого разрешения. Всё работает в браузере; ваши данные никогда не загружаются.",
    keywords: ["конструктор графиков", "построение графиков", "csv в график", "онлайн график", "визуализация данных", "линейный график", "столбчатая диаграмма", "круговая диаграмма", "точечная диаграмма", "скачать график"],
    ui: { ...enUi, chartType: "Тип графика", typeLine: "Линия", typeBar: "Столбцы", typeScatter: "Точечный", typeArea: "Область", typePie: "Круговая", typeBox: "Ящик", xAxis: "Ось X / метки", ySeries: "Ряды Y (значения)", chartTitle: "Заголовок графика", download: "Скачать", downloadPng: "Изображение PNG", downloadSvg: "Вектор SVG", options: "Параметры" },
  },
  zh: {
    title: "图表生成器 — CSV 转图表",
    short: "上传 CSV 即可创建交互式折线图、柱状图、散点图、面积图、饼图、直方图或箱线图，并下载为 PNG 或 SVG 图片。",
    description: "免费在线图表制作工具。上传您自己的 CSV 文件或粘贴数据，选择任意图表类型——折线图、柱状图、散点图、面积图、饼图、直方图、箱线图——选择要绘制的列，并将结果下载为高分辨率 PNG 或 SVG 图片。一切都在浏览器中运行；您的数据不会被上传。",
    keywords: ["图表制作", "图表生成器", "csv 转图表", "在线图表", "数据可视化", "折线图", "柱状图", "饼图", "散点图", "下载图表"],
    ui: { ...enUi, chartType: "图表类型", typeLine: "折线", typeBar: "柱状", typeScatter: "散点", typeArea: "面积", typePie: "饼图", typeBox: "箱线图", xAxis: "X 轴 / 标签", ySeries: "Y 系列（数值）", chartTitle: "图表标题", download: "下载", downloadPng: "PNG 图片", downloadSvg: "SVG 矢量", options: "选项" },
  },
  ja: {
    title: "グラフ作成ツール — CSV からグラフへ",
    short: "CSV をアップロードして折れ線・棒・散布図・面・円・ヒストグラム・箱ひげ図を作成し、PNG または SVG 画像としてダウンロードできます。",
    description: "無料のオンライングラフ作成ツール。自分の CSV ファイルをアップロードするかデータを貼り付け、任意のグラフ種類（折れ線、棒、散布図、面、円、ヒストグラム、箱ひげ図）を選び、描画する列を指定して、結果を高解像度の PNG または SVG 画像としてダウンロードできます。すべてブラウザ内で動作し、データがアップロードされることはありません。",
    keywords: ["グラフ作成", "グラフメーカー", "csv グラフ", "オンライングラフ", "データ可視化", "折れ線グラフ", "棒グラフ", "円グラフ", "散布図", "グラフ ダウンロード"],
    ui: { ...enUi, chartType: "グラフの種類", typeLine: "折れ線", typeBar: "棒", typeScatter: "散布図", typeArea: "面", typePie: "円", typeBox: "箱ひげ図", xAxis: "X 軸 / ラベル", ySeries: "Y 系列（値）", chartTitle: "グラフのタイトル", download: "ダウンロード", downloadPng: "PNG 画像", downloadSvg: "SVG ベクター", options: "オプション" },
  },
  ko: {
    title: "차트 빌더 — CSV를 그래프로",
    short: "CSV를 업로드하여 대화형 선, 막대, 산점도, 영역, 원형, 히스토그램 또는 상자 차트를 만들고 PNG 또는 SVG 이미지로 다운로드하세요.",
    description: "무료 온라인 차트 제작 도구. 자신의 CSV 파일을 업로드하거나 데이터를 붙여넣고, 원하는 차트 유형(선, 막대, 산점도, 영역, 원형, 히스토그램, 상자 그림)을 선택한 뒤 그릴 열을 지정하고 결과를 고해상도 PNG 또는 SVG 이미지로 다운로드하세요. 모든 작업은 브라우저에서 실행되며 데이터는 업로드되지 않습니다.",
    keywords: ["차트 제작", "그래프 만들기", "csv 차트", "온라인 차트", "데이터 시각화", "선 차트", "막대 차트", "원형 차트", "산점도", "차트 다운로드"],
    ui: { ...enUi, chartType: "차트 유형", typeLine: "선", typeBar: "막대", typeScatter: "산점도", typeArea: "영역", typePie: "원형", typeBox: "상자 그림", xAxis: "X축 / 레이블", ySeries: "Y 계열(값)", chartTitle: "차트 제목", download: "다운로드", downloadPng: "PNG 이미지", downloadSvg: "SVG 벡터", options: "옵션" },
  },
  hi: {
    title: "चार्ट बिल्डर — CSV से ग्राफ़",
    short: "CSV अपलोड करें और इंटरैक्टिव लाइन, बार, स्कैटर, एरिया, पाई, हिस्टोग्राम या बॉक्स चार्ट बनाएं, फिर उन्हें PNG या SVG छवि के रूप में डाउनलोड करें।",
    description: "मुफ्त ऑनलाइन चार्ट निर्माता। अपनी CSV फ़ाइल अपलोड करें या डेटा पेस्ट करें, कोई भी चार्ट प्रकार चुनें — लाइन, बार, स्कैटर, एरिया, पाई, हिस्टोग्राम, बॉक्स प्लॉट — प्लॉट करने के लिए कॉलम चुनें और परिणाम को उच्च-रिज़ॉल्यूशन PNG या SVG छवि के रूप में डाउनलोड करें। सब कुछ आपके ब्राउज़र में चलता है; आपका डेटा कभी अपलोड नहीं होता।",
    keywords: ["चार्ट निर्माता", "ग्राफ़ मेकर", "csv से चार्ट", "ऑनलाइन चार्ट", "डेटा विज़ुअलाइज़ेशन", "लाइन चार्ट", "बार चार्ट", "पाई चार्ट", "स्कैटर प्लॉट", "चार्ट डाउनलोड"],
    ui: { ...enUi, chartType: "चार्ट प्रकार", typeLine: "लाइन", typeBar: "बार", typeScatter: "स्कैटर", typeArea: "एरिया", typePie: "पाई", typeBox: "बॉक्स प्लॉट", xAxis: "X अक्ष / लेबल", ySeries: "Y श्रृंखला (मान)", chartTitle: "चार्ट शीर्षक", download: "डाउनलोड", downloadPng: "PNG छवि", downloadSvg: "SVG वेक्टर", options: "विकल्प" },
  },
};

export default i18n;
