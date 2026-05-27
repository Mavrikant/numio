import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Area / Square Footage Calculator",
    short: "Calculate area and perimeter for rectangles, circles, and triangles in m² and ft².",
    description:
      "Free area calculator for rectangles, circles, and triangles. Get instant results in square meters and square feet with perimeter calculations.",
    keywords: [
      "area calculator",
      "square footage",
      "square meter calculator",
      "rectangle area",
      "circle area",
      "triangle area",
      "perimeter calculator",
    ],
    inputs: {
      shape: {
        label: "Shape",
        help: "Select a geometric shape to calculate.",
      },
      length: {
        label: "Length",
        help: "Length of the rectangle in meters.",
      },
      width: {
        label: "Width",
        help: "Width of the rectangle in meters.",
      },
      radius: {
        label: "Radius",
        help: "Radius of the circle in meters.",
      },
      diameter: {
        label: "Diameter",
        help: "Diameter of the circle in meters.",
      },
      base: {
        label: "Base",
        help: "Base length of the triangle in meters.",
      },
      height: {
        label: "Height",
        help: "Perpendicular height of the triangle in meters.",
      },
    },
    outputs: {
      areaM2: {
        label: "Area (m²)",
        help: "Total area in square meters.",
      },
      areaFt2: {
        label: "Area (ft²)",
        help: "Total area in square feet.",
      },
      perimeterM: {
        label: "Perimeter (m)",
        help: "Total perimeter or circumference in meters.",
      },
      perimeterFt: {
        label: "Perimeter (ft)",
        help: "Total perimeter or circumference in feet.",
      },
    },
    options: {
      shape: {
        rectangle: "Rectangle",
        circle: "Circle",
        triangle: "Triangle",
      },
    },
    errors: {
      invalidInput: "Please provide valid dimensions for the selected shape.",
      rectangleRequired: "Rectangle requires length and width.",
      circleRequired: "Circle requires radius or diameter.",
      triangleRequired: "Triangle requires base and height.",
    },
    faq: [
      {
        q: "What is the difference between area and perimeter?",
        a: "Area measures the space inside a shape (in m² or ft²), while perimeter measures the distance around the outside boundary.",
      },
      {
        q: "How do I convert square feet to square meters?",
        a: "Divide square feet by 10.764. For example, 100 ft² ÷ 10.764 ≈ 9.29 m².",
      },
      {
        q: "What if my triangle is not a right triangle?",
        a: "The calculator assumes a right triangle for perimeter. For accurate results with oblique triangles, measure all three side lengths.",
      },
      {
        q: "Can I use this for land area calculation?",
        a: "Yes, if the land parcel is rectangular or circular. For irregular shapes, divide the area into simple shapes and add them together.",
      },
    ],
  },

  tr: {
    title: "Alan / Metrekare Hesaplayıcı",
    short: "Dikdörtgen, daire ve üçgen alan ve çevresini m² ve ft² olarak hesapla.",
    description:
      "Dikdörtgen, daire ve üçgen alanı hesaplamak için ücretsiz araç. Metrekare ve feet cinsinden anında sonuç ve çevre hesaplaması.",
    keywords: [
      "alan hesaplayıcı",
      "metrekare hesaplayıcı",
      "alan formülü",
      "dikdörtgen alanı",
      "daire alanı",
      "üçgen alanı",
      "çevre hesaplayıcı",
    ],
    inputs: {
      shape: {
        label: "Şekil",
        help: "Alan hesaplamak için geometrik şekli seçin.",
      },
      length: {
        label: "Uzunluk",
        help: "Dikdörtgenin uzunluğu (metre cinsinden).",
      },
      width: {
        label: "Genişlik",
        help: "Dikdörtgenin genişliği (metre cinsinden).",
      },
      radius: {
        label: "Yarıçap",
        help: "Dairenin yarıçapı (metre cinsinden).",
      },
      diameter: {
        label: "Çap",
        help: "Dairenin çapı (metre cinsinden).",
      },
      base: {
        label: "Taban",
        help: "Üçgenin taban uzunluğu (metre cinsinden).",
      },
      height: {
        label: "Yükseklik",
        help: "Üçgenin yüksekliği (metre cinsinden).",
      },
    },
    outputs: {
      areaM2: {
        label: "Alan (m²)",
        help: "Toplam alan (metrekare).",
      },
      areaFt2: {
        label: "Alan (ft²)",
        help: "Toplam alan (feet kare).",
      },
      perimeterM: {
        label: "Çevre (m)",
        help: "Toplam çevre veya çember uzunluğu (metre).",
      },
      perimeterFt: {
        label: "Çevre (ft)",
        help: "Toplam çevre veya çember uzunluğu (feet).",
      },
    },
    options: {
      shape: {
        rectangle: "Dikdörtgen",
        circle: "Daire",
        triangle: "Üçgen",
      },
    },
    errors: {
      invalidInput: "Seçilen şekil için geçerli boyutları lütfen sağlayın.",
      rectangleRequired: "Dikdörtgen uzunluk ve genişlik gerektirir.",
      circleRequired: "Daire yarıçap veya çap gerektirir.",
      triangleRequired: "Üçgen taban ve yükseklik gerektirir.",
    },
    faq: [
      {
        q: "Alan ve çevre arasındaki fark nedir?",
        a: "Alan, bir şeklin içindeki alanı ölçer (m² veya ft²), çevre ise dış sınırın uzunluğunu ölçer.",
      },
      {
        q: "Feet kareyi metrekareye nasıl çeviririm?",
        a: "Feet kareyi 10.764'e bölün. Örneğin, 100 ft² ÷ 10.764 ≈ 9.29 m².",
      },
      {
        q: "Üçgenim dik üçgen değilse?",
        a: "Hesaplayıcı çevre için dik üçgen varsayar. Kesin sonuçlar için üç kenarın da uzunluğunu ölçün.",
      },
      {
        q: "Arazi alanı hesaplaması için kullanabilir miyim?",
        a: "Evet, arazi dikdörtgen veya dairesel ise. Düzensiz şekiller için alanı basit şekillere bölün ve toplayın.",
      },
    ],
  },

  de: {
    title: "Fläche / Quadratmeter-Rechner",
    short: "Berechnen Sie Fläche und Umfang von Rechtecken, Kreisen und Dreiecken in m² und ft².",
    description:
      "Kostenloser Flächenrechner für Rechtecke, Kreise und Dreiecke. Sofortige Ergebnisse in Quadratmetern und Quadratfuß mit Umfangsberechnung.",
    keywords: [
      "Flächenrechner",
      "Quadratmeter-Rechner",
      "Rechteckfläche",
      "Kreisfläche",
      "Dreiecksfläche",
      "Umfangsrechner",
    ],
    inputs: {
      shape: {
        label: "Form",
        help: "Wählen Sie eine geometrische Form zur Berechnung.",
      },
      length: {
        label: "Länge",
        help: "Länge des Rechtecks in Metern.",
      },
      width: {
        label: "Breite",
        help: "Breite des Rechtecks in Metern.",
      },
      radius: {
        label: "Radius",
        help: "Radius des Kreises in Metern.",
      },
      diameter: {
        label: "Durchmesser",
        help: "Durchmesser des Kreises in Metern.",
      },
      base: {
        label: "Grundseite",
        help: "Basislänge des Dreiecks in Metern.",
      },
      height: {
        label: "Höhe",
        help: "Senkrechte Höhe des Dreiecks in Metern.",
      },
    },
    outputs: {
      areaM2: {
        label: "Fläche (m²)",
        help: "Gesamtfläche in Quadratmetern.",
      },
      areaFt2: {
        label: "Fläche (ft²)",
        help: "Gesamtfläche in Quadratfuß.",
      },
      perimeterM: {
        label: "Umfang (m)",
        help: "Gesamtumfang oder Umfangslänge in Metern.",
      },
      perimeterFt: {
        label: "Umfang (ft)",
        help: "Gesamtumfang oder Umfangslänge in Fuß.",
      },
    },
    options: {
      shape: {
        rectangle: "Rechteck",
        circle: "Kreis",
        triangle: "Dreieck",
      },
    },
    errors: {
      invalidInput: "Bitte geben Sie gültige Abmessungen für die ausgewählte Form ein.",
      rectangleRequired: "Rechteck erfordert Länge und Breite.",
      circleRequired: "Kreis erfordert Radius oder Durchmesser.",
      triangleRequired: "Dreieck erfordert Grundseite und Höhe.",
    },
    faq: [
      {
        q: "Was ist der Unterschied zwischen Fläche und Umfang?",
        a: "Fläche misst den Platz innerhalb einer Form (in m² oder ft²), während Umfang die Entfernung um die äußere Grenze misst.",
      },
      {
        q: "Wie konvertiere ich Quadratfuß in Quadratmeter?",
        a: "Teilen Sie Quadratfuß durch 10,764. Beispiel: 100 ft² ÷ 10,764 ≈ 9,29 m².",
      },
      {
        q: "Was ist, wenn mein Dreieck nicht rechtwinklig ist?",
        a: "Der Rechner geht von einem rechtwinkligen Dreieck aus. Messen Sie alle drei Seitenlängen für genaue Ergebnisse.",
      },
      {
        q: "Kann ich dies für Grundstücksflächen verwenden?",
        a: "Ja, wenn das Grundstück rechteckig oder kreisförmig ist. Teilen Sie unregelmäßige Formen in einfache Formen auf.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Superficie / Mètres Carrés",
    short: "Calculez la surface et le périmètre de rectangles, cercles et triangles en m² et ft².",
    description:
      "Calculateur de surface gratuit pour rectangles, cercles et triangles. Résultats instantanés en mètres carrés et pieds carrés avec calcul du périmètre.",
    keywords: [
      "calculateur de surface",
      "mètres carrés",
      "calculateur de superficie",
      "surface rectangulaire",
      "surface circulaire",
      "surface triangulaire",
      "calculateur de périmètre",
    ],
    inputs: {
      shape: {
        label: "Forme",
        help: "Sélectionnez une forme géométrique à calculer.",
      },
      length: {
        label: "Longueur",
        help: "Longueur du rectangle en mètres.",
      },
      width: {
        label: "Largeur",
        help: "Largeur du rectangle en mètres.",
      },
      radius: {
        label: "Rayon",
        help: "Rayon du cercle en mètres.",
      },
      diameter: {
        label: "Diamètre",
        help: "Diamètre du cercle en mètres.",
      },
      base: {
        label: "Base",
        help: "Longueur de base du triangle en mètres.",
      },
      height: {
        label: "Hauteur",
        help: "Hauteur perpendiculaire du triangle en mètres.",
      },
    },
    outputs: {
      areaM2: {
        label: "Surface (m²)",
        help: "Surface totale en mètres carrés.",
      },
      areaFt2: {
        label: "Surface (ft²)",
        help: "Surface totale en pieds carrés.",
      },
      perimeterM: {
        label: "Périmètre (m)",
        help: "Périmètre ou circonférence totale en mètres.",
      },
      perimeterFt: {
        label: "Périmètre (ft)",
        help: "Périmètre ou circonférence totale en pieds.",
      },
    },
    options: {
      shape: {
        rectangle: "Rectangle",
        circle: "Cercle",
        triangle: "Triangle",
      },
    },
    errors: {
      invalidInput: "Veuillez fournir des dimensions valides pour la forme sélectionnée.",
      rectangleRequired: "Le rectangle nécessite une longueur et une largeur.",
      circleRequired: "Le cercle nécessite un rayon ou un diamètre.",
      triangleRequired: "Le triangle nécessite une base et une hauteur.",
    },
    faq: [
      {
        q: "Quelle est la différence entre la surface et le périmètre?",
        a: "La surface mesure l'espace à l'intérieur d'une forme (en m² ou ft²), tandis que le périmètre mesure la distance autour de la limite extérieure.",
      },
      {
        q: "Comment convertir les pieds carrés en mètres carrés?",
        a: "Divisez les pieds carrés par 10,764. Par exemple, 100 ft² ÷ 10,764 ≈ 9,29 m².",
      },
      {
        q: "Et si mon triangle n'est pas un triangle rectangle?",
        a: "Le calculateur suppose un triangle rectangle pour le périmètre. Mesurez les trois côtés pour des résultats précis.",
      },
      {
        q: "Puis-je l'utiliser pour la surface des terres?",
        a: "Oui, si la parcelle est rectangulaire ou circulaire. Divisez les formes irrégulières en formes simples.",
      },
    ],
  },

  es: {
    title: "Calculadora de Área / Pies Cuadrados",
    short: "Calcula el área y perímetro de rectángulos, círculos y triángulos en m² y ft².",
    description:
      "Calculadora de área gratuita para rectángulos, círculos y triángulos. Resultados instantáneos en metros cuadrados y pies cuadrados con cálculo de perímetro.",
    keywords: [
      "calculadora de área",
      "pies cuadrados",
      "metro cuadrado",
      "área rectangular",
      "área circular",
      "área triangular",
      "calculadora de perímetro",
    ],
    inputs: {
      shape: {
        label: "Forma",
        help: "Selecciona una forma geométrica para calcular.",
      },
      length: {
        label: "Largo",
        help: "Largo del rectángulo en metros.",
      },
      width: {
        label: "Ancho",
        help: "Ancho del rectángulo en metros.",
      },
      radius: {
        label: "Radio",
        help: "Radio del círculo en metros.",
      },
      diameter: {
        label: "Diámetro",
        help: "Diámetro del círculo en metros.",
      },
      base: {
        label: "Base",
        help: "Longitud de la base del triángulo en metros.",
      },
      height: {
        label: "Altura",
        help: "Altura perpendicular del triángulo en metros.",
      },
    },
    outputs: {
      areaM2: {
        label: "Área (m²)",
        help: "Área total en metros cuadrados.",
      },
      areaFt2: {
        label: "Área (ft²)",
        help: "Área total en pies cuadrados.",
      },
      perimeterM: {
        label: "Perímetro (m)",
        help: "Perímetro o circunferencia total en metros.",
      },
      perimeterFt: {
        label: "Perímetro (ft)",
        help: "Perímetro o circunferencia total en pies.",
      },
    },
    options: {
      shape: {
        rectangle: "Rectángulo",
        circle: "Círculo",
        triangle: "Triángulo",
      },
    },
    errors: {
      invalidInput: "Por favor proporciona dimensiones válidas para la forma seleccionada.",
      rectangleRequired: "Rectángulo requiere largo y ancho.",
      circleRequired: "Círculo requiere radio o diámetro.",
      triangleRequired: "Triángulo requiere base y altura.",
    },
    faq: [
      {
        q: "¿Cuál es la diferencia entre área y perímetro?",
        a: "El área mide el espacio dentro de una forma (en m² o ft²), mientras que el perímetro mide la distancia alrededor del límite exterior.",
      },
      {
        q: "¿Cómo convierto pies cuadrados a metros cuadrados?",
        a: "Divide pies cuadrados por 10.764. Por ejemplo, 100 ft² ÷ 10.764 ≈ 9.29 m².",
      },
      {
        q: "¿Y si mi triángulo no es un triángulo rectángulo?",
        a: "La calculadora asume un triángulo rectángulo para el perímetro. Mide los tres lados para resultados precisos.",
      },
      {
        q: "¿Puedo usarlo para cálculo de área de terreno?",
        a: "Sí, si la parcela es rectangular o circular. Divide formas irregulares en formas simples.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Area / Metratura",
    short: "Calcola l'area e il perimetro di rettangoli, cerchi e triangoli in m² e ft².",
    description:
      "Calcolatore di area gratuito per rettangoli, cerchi e triangoli. Risultati istantanei in metri quadrati e piedi quadrati con calcolo del perimetro.",
    keywords: [
      "calcolatore di area",
      "metratura",
      "metro quadrato",
      "area rettangolare",
      "area circolare",
      "area triangolare",
      "calcolatore di perimetro",
    ],
    inputs: {
      shape: {
        label: "Forma",
        help: "Seleziona una forma geometrica da calcolare.",
      },
      length: {
        label: "Lunghezza",
        help: "Lunghezza del rettangolo in metri.",
      },
      width: {
        label: "Larghezza",
        help: "Larghezza del rettangolo in metri.",
      },
      radius: {
        label: "Raggio",
        help: "Raggio del cerchio in metri.",
      },
      diameter: {
        label: "Diametro",
        help: "Diametro del cerchio in metri.",
      },
      base: {
        label: "Base",
        help: "Lunghezza della base del triangolo in metri.",
      },
      height: {
        label: "Altezza",
        help: "Altezza perpendicolare del triangolo in metri.",
      },
    },
    outputs: {
      areaM2: {
        label: "Area (m²)",
        help: "Area totale in metri quadrati.",
      },
      areaFt2: {
        label: "Area (ft²)",
        help: "Area totale in piedi quadrati.",
      },
      perimeterM: {
        label: "Perimetro (m)",
        help: "Perimetro o circonferenza totale in metri.",
      },
      perimeterFt: {
        label: "Perimetro (ft)",
        help: "Perimetro o circonferenza totale in piedi.",
      },
    },
    options: {
      shape: {
        rectangle: "Rettangolo",
        circle: "Cerchio",
        triangle: "Triangolo",
      },
    },
    errors: {
      invalidInput: "Fornisci dimensioni valide per la forma selezionata.",
      rectangleRequired: "Rettangolo richiede lunghezza e larghezza.",
      circleRequired: "Cerchio richiede raggio o diametro.",
      triangleRequired: "Triangolo richiede base e altezza.",
    },
    faq: [
      {
        q: "Qual è la differenza tra area e perimetro?",
        a: "L'area misura lo spazio all'interno di una forma (in m² o ft²), mentre il perimetro misura la distanza attorno al confine esterno.",
      },
      {
        q: "Come converto i piedi quadrati in metri quadrati?",
        a: "Dividi i piedi quadrati per 10,764. Ad esempio, 100 ft² ÷ 10,764 ≈ 9,29 m².",
      },
      {
        q: "E se il mio triangolo non è un triangolo rettangolo?",
        a: "La calcolatrice assume un triangolo rettangolo per il perimetro. Misura tutti e tre i lati per risultati precisi.",
      },
      {
        q: "Posso usarlo per il calcolo dell'area del terreno?",
        a: "Sì, se la parcella è rettangolare o circolare. Dividi le forme irregolari in forme semplici.",
      },
    ],
  },

  ar: {
    title: "حاسبة المساحة / الأقدام المربعة",
    short: "احسب المساحة والمحيط للمستطيلات والدوائر والمثلثات بالمتر المربع والقدم المربع.",
    description:
      "حاسبة مساحة مجانية للمستطيلات والدوائر والمثلثات. النتائج الفورية بالمتر المربع والقدم المربع مع حساب المحيط.",
    keywords: [
      "حاسبة المساحة",
      "أقدام مربعة",
      "متر مربع",
      "مساحة المستطيل",
      "مساحة الدائرة",
      "مساحة المثلث",
      "حاسبة المحيط",
    ],
    inputs: {
      shape: {
        label: "الشكل",
        help: "اختر شكلاً هندسياً للحساب.",
      },
      length: {
        label: "الطول",
        help: "طول المستطيل بالمتر.",
      },
      width: {
        label: "العرض",
        help: "عرض المستطيل بالمتر.",
      },
      radius: {
        label: "نصف القطر",
        help: "نصف قطر الدائرة بالمتر.",
      },
      diameter: {
        label: "القطر",
        help: "قطر الدائرة بالمتر.",
      },
      base: {
        label: "القاعدة",
        help: "طول قاعدة المثلث بالمتر.",
      },
      height: {
        label: "الارتفاع",
        help: "ارتفاع المثلث بالمتر.",
      },
    },
    outputs: {
      areaM2: {
        label: "المساحة (m²)",
        help: "المساحة الإجمالية بالمتر المربع.",
      },
      areaFt2: {
        label: "المساحة (ft²)",
        help: "المساحة الإجمالية بالقدم المربع.",
      },
      perimeterM: {
        label: "المحيط (m)",
        help: "المحيط الإجمالي بالمتر.",
      },
      perimeterFt: {
        label: "المحيط (ft)",
        help: "المحيط الإجمالي بالقدم.",
      },
    },
    options: {
      shape: {
        rectangle: "مستطيل",
        circle: "دائرة",
        triangle: "مثلث",
      },
    },
    errors: {
      invalidInput: "يرجى تقديم أبعاد صحيحة للشكل المحدد.",
      rectangleRequired: "المستطيل يتطلب الطول والعرض.",
      circleRequired: "الدائرة تتطلب نصف القطر أو القطر.",
      triangleRequired: "المثلث يتطلب القاعدة والارتفاع.",
    },
    faq: [
      {
        q: "ما الفرق بين المساحة والمحيط؟",
        a: "تقيس المساحة المساحة داخل الشكل (بالمتر المربع أو القدم المربع)، بينما يقيس المحيط المسافة حول الحدود الخارجية.",
      },
      {
        q: "كيف أحول الأقدام المربعة إلى متر مربع؟",
        a: "اقسم الأقدام المربعة على 10.764. مثال: 100 قدم² ÷ 10.764 ≈ 9.29 متر².",
      },
      {
        q: "ماذا لو لم يكن مثلثي مثلثاً قائماً؟",
        a: "تفترض الحاسبة مثلثاً قائماً للمحيط. قس جميع الأضلاع الثلاثة للحصول على نتائج دقيقة.",
      },
      {
        q: "هل يمكنني استخدام هذا لحساب مساحة الأرض؟",
        a: "نعم، إذا كانت المساحة مستطيلة أو دائرية. قسّم الأشكال غير المنتظمة إلى أشكال بسيطة.",
      },
    ],
  },

  ru: {
    title: "Калькулятор Площади / Квадратные Метры",
    short: "Рассчитайте площадь и периметр прямоугольников, кругов и треугольников в м² и ft².",
    description:
      "Бесплатный калькулятор площади для прямоугольников, кругов и треугольников. Мгновенные результаты в квадратных метрах и квадратных футах с расчетом периметра.",
    keywords: [
      "калькулятор площади",
      "квадратные метры",
      "калькулятор кв м",
      "площадь прямоугольника",
      "площадь круга",
      "площадь треугольника",
      "калькулятор периметра",
    ],
    inputs: {
      shape: {
        label: "Форма",
        help: "Выберите геометрическую форму для расчета.",
      },
      length: {
        label: "Длина",
        help: "Длина прямоугольника в метрах.",
      },
      width: {
        label: "Ширина",
        help: "Ширина прямоугольника в метрах.",
      },
      radius: {
        label: "Радиус",
        help: "Радиус круга в метрах.",
      },
      diameter: {
        label: "Диаметр",
        help: "Диаметр круга в метрах.",
      },
      base: {
        label: "Основание",
        help: "Длина основания треугольника в метрах.",
      },
      height: {
        label: "Высота",
        help: "Перпендикулярная высота треугольника в метрах.",
      },
    },
    outputs: {
      areaM2: {
        label: "Площадь (m²)",
        help: "Общая площадь в квадратных метрах.",
      },
      areaFt2: {
        label: "Площадь (ft²)",
        help: "Общая площадь в квадратных футах.",
      },
      perimeterM: {
        label: "Периметр (m)",
        help: "Общий периметр или длина окружности в метрах.",
      },
      perimeterFt: {
        label: "Периметр (ft)",
        help: "Общий периметр или длина окружности в футах.",
      },
    },
    options: {
      shape: {
        rectangle: "Прямоугольник",
        circle: "Круг",
        triangle: "Треугольник",
      },
    },
    errors: {
      invalidInput: "Пожалуйста, введите правильные размеры для выбранной формы.",
      rectangleRequired: "Прямоугольник требует длину и ширину.",
      circleRequired: "Круг требует радиус или диаметр.",
      triangleRequired: "Треугольник требует основание и высоту.",
    },
    faq: [
      {
        q: "В чем разница между площадью и периметром?",
        a: "Площадь измеряет пространство внутри формы (в м² или ft²), периметр измеряет расстояние вокруг границы.",
      },
      {
        q: "Как перевести квадратные футы в квадратные метры?",
        a: "Разделите квадратные футы на 10,764. Например, 100 ft² ÷ 10,764 ≈ 9,29 m².",
      },
      {
        q: "Что если мой треугольник не прямоугольный?",
        a: "Калькулятор предполагает прямоугольный треугольник для периметра. Для точных результатов измерьте все три стороны.",
      },
      {
        q: "Могу ли я использовать это для расчета площади земельного участка?",
        a: "Да, если участок прямоугольный или круглый. Разделите неправильные формы на простые формы.",
      },
    ],
  },

  zh: {
    title: "面积/平方英尺计算器",
    short: "计算矩形、圆形和三角形的面积和周长（平方米和平方英尺）。",
    description:
      "矩形、圆形和三角形的免费面积计算器。以平方米和平方英尺显示即时结果，并计算周长。",
    keywords: [
      "面积计算器",
      "平方英尺",
      "平方米",
      "矩形面积",
      "圆形面积",
      "三角形面积",
      "周长计算器",
    ],
    inputs: {
      shape: {
        label: "形状",
        help: "选择要计算的几何形状。",
      },
      length: {
        label: "长度",
        help: "矩形的长度（米）。",
      },
      width: {
        label: "宽度",
        help: "矩形的宽度（米）。",
      },
      radius: {
        label: "半径",
        help: "圆的半径（米）。",
      },
      diameter: {
        label: "直径",
        help: "圆的直径（米）。",
      },
      base: {
        label: "底边",
        help: "三角形的底边长度（米）。",
      },
      height: {
        label: "高度",
        help: "三角形的垂直高度（米）。",
      },
    },
    outputs: {
      areaM2: {
        label: "面积（m²）",
        help: "总面积（平方米）。",
      },
      areaFt2: {
        label: "面积（ft²）",
        help: "总面积（平方英尺）。",
      },
      perimeterM: {
        label: "周长（m）",
        help: "总周长或圆周长（米）。",
      },
      perimeterFt: {
        label: "周长（ft）",
        help: "总周长或圆周长（英尺）。",
      },
    },
    options: {
      shape: {
        rectangle: "矩形",
        circle: "圆形",
        triangle: "三角形",
      },
    },
    errors: {
      invalidInput: "请为所选形状提供有效的尺寸。",
      rectangleRequired: "矩形需要长度和宽度。",
      circleRequired: "圆形需要半径或直径。",
      triangleRequired: "三角形需要底边和高度。",
    },
    faq: [
      {
        q: "面积和周长有什么区别？",
        a: "面积测量形状内部的空间（以m²或ft²为单位），周长测量外部边界的距离。",
      },
      {
        q: "如何将平方英尺转换为平方米？",
        a: "将平方英尺除以10.764。例如，100 ft² ÷ 10.764 ≈ 9.29 m²。",
      },
      {
        q: "如果我的三角形不是直角三角形怎么办？",
        a: "计算器假设周长为直角三角形。测量所有三条边以获得准确结果。",
      },
      {
        q: "我可以用这个来计算土地面积吗？",
        a: "可以，如果地块是矩形或圆形的话。将不规则形状分为简单形状。",
      },
    ],
  },

  ja: {
    title: "面積/平方メートル計算機",
    short: "長方形、円、三角形の面積と周囲をm²とft²で計算します。",
    description:
      "長方形、円、三角形の無料面積計算機。平方メートルと平方フィートでの即座の結果と周囲計算。",
    keywords: [
      "面積計算機",
      "平方メートル",
      "平方フィート",
      "長方形の面積",
      "円の面積",
      "三角形の面積",
      "周囲計算機",
    ],
    inputs: {
      shape: {
        label: "形状",
        help: "計算する幾何学的形状を選択してください。",
      },
      length: {
        label: "長さ",
        help: "長方形の長さ（メートル）。",
      },
      width: {
        label: "幅",
        help: "長方形の幅（メートル）。",
      },
      radius: {
        label: "半径",
        help: "円の半径（メートル）。",
      },
      diameter: {
        label: "直径",
        help: "円の直径（メートル）。",
      },
      base: {
        label: "底辺",
        help: "三角形の底辺の長さ（メートル）。",
      },
      height: {
        label: "高さ",
        help: "三角形の垂直高さ（メートル）。",
      },
    },
    outputs: {
      areaM2: {
        label: "面積（m²）",
        help: "総面積（平方メートル）。",
      },
      areaFt2: {
        label: "面積（ft²）",
        help: "総面積（平方フィート）。",
      },
      perimeterM: {
        label: "周囲（m）",
        help: "総周囲または円周長（メートル）。",
      },
      perimeterFt: {
        label: "周囲（ft）",
        help: "総周囲または円周長（フィート）。",
      },
    },
    options: {
      shape: {
        rectangle: "長方形",
        circle: "円",
        triangle: "三角形",
      },
    },
    errors: {
      invalidInput: "選択した形状の有効な寸法を指定してください。",
      rectangleRequired: "長方形は長さと幅が必要です。",
      circleRequired: "円は半径または直径が必要です。",
      triangleRequired: "三角形は底辺と高さが必要です。",
    },
    faq: [
      {
        q: "面積と周囲の違いは何ですか？",
        a: "面積は形状内のスペースを測定し（m²またはft²）、周囲は外側の境界までの距離を測定します。",
      },
      {
        q: "平方フィートを平方メートルに変換するにはどうすればよいですか？",
        a: "平方フィートを10.764で割ります。例：100 ft² ÷ 10.764 ≈ 9.29 m²。",
      },
      {
        q: "三角形が直角三角形でない場合はどうなりますか？",
        a: "計算機は周囲に直角三角形を想定します。正確な結果のために3つの辺すべてを測定します。",
      },
      {
        q: "これを土地面積の計算に使用できますか？",
        a: "はい、区画が長方形または円形の場合。不規則な形状を単純な形状に分けてください。",
      },
    ],
  },

  ko: {
    title: "면적 / 평방피트 계산기",
    short: "직사각형, 원, 삼각형의 면적과 둘레를 m²와 ft²로 계산합니다.",
    description:
      "직사각형, 원, 삼각형을 위한 무료 면적 계산기. 제곱미터 및 제곱피트의 즉각적인 결과 및 둘레 계산.",
    keywords: [
      "면적 계산기",
      "평방미터",
      "평방피트",
      "직사각형 면적",
      "원의 면적",
      "삼각형의 면적",
      "둘레 계산기",
    ],
    inputs: {
      shape: {
        label: "도형",
        help: "계산할 기하학적 도형을 선택하세요.",
      },
      length: {
        label: "길이",
        help: "직사각형의 길이(미터).",
      },
      width: {
        label: "너비",
        help: "직사각형의 너비(미터).",
      },
      radius: {
        label: "반지름",
        help: "원의 반지름(미터).",
      },
      diameter: {
        label: "지름",
        help: "원의 지름(미터).",
      },
      base: {
        label: "밑변",
        help: "삼각형의 밑변 길이(미터).",
      },
      height: {
        label: "높이",
        help: "삼각형의 수직 높이(미터).",
      },
    },
    outputs: {
      areaM2: {
        label: "면적(m²)",
        help: "총 면적(제곱미터).",
      },
      areaFt2: {
        label: "면적(ft²)",
        help: "총 면적(제곱피트).",
      },
      perimeterM: {
        label: "둘레(m)",
        help: "총 둘레 또는 원주 길이(미터).",
      },
      perimeterFt: {
        label: "둘레(ft)",
        help: "총 둘레 또는 원주 길이(피트).",
      },
    },
    options: {
      shape: {
        rectangle: "직사각형",
        circle: "원",
        triangle: "삼각형",
      },
    },
    errors: {
      invalidInput: "선택한 도형에 대해 유효한 치수를 제공하세요.",
      rectangleRequired: "직사각형은 길이와 너비가 필요합니다.",
      circleRequired: "원은 반지름 또는 지름이 필요합니다.",
      triangleRequired: "삼각형은 밑변과 높이가 필요합니다.",
    },
    faq: [
      {
        q: "면적과 둘레의 차이는 무엇입니까?",
        a: "면적은 도형 내부의 공간을 측정하고(m² 또는 ft²), 둘레는 외부 경계의 거리를 측정합니다.",
      },
      {
        q: "평방피트를 제곱미터로 변환하려면 어떻게 합니까?",
        a: "평방피트를 10.764로 나눕니다. 예: 100 ft² ÷ 10.764 ≈ 9.29 m².",
      },
      {
        q: "내 삼각형이 직각삼각형이 아니면 어떻게 됩니까?",
        a: "계산기는 둘레에 직각삼각형을 가정합니다. 정확한 결과를 위해 세 변을 모두 측정하세요.",
      },
      {
        q: "토지 면적 계산에 사용할 수 있습니까?",
        a: "네, 필지가 직사각형 또는 원형인 경우. 불규칙한 도형을 단순한 도형으로 나누세요.",
      },
    ],
  },

  hi: {
    title: "क्षेत्र / स्क्वायर फुटेज कैलकुलेटर",
    short: "आयतों, वृत्तों और त्रिकोणों के क्षेत्र और परिमाप को m² और ft² में गणना करें।",
    description:
      "आयतों, वृत्तों और त्रिकोणों के लिए मुफ्त क्षेत्र कैलकुलेटर। वर्ग मीटर और वर्ग फीट में तत्काल परिणाम और परिमाप गणना।",
    keywords: [
      "क्षेत्र कैलकुलेटर",
      "स्क्वायर फुटेज",
      "वर्ग मीटर",
      "आयत का क्षेत्र",
      "वृत्त का क्षेत्र",
      "त्रिकोण का क्षेत्र",
      "परिमाप कैलकुलेटर",
    ],
    inputs: {
      shape: {
        label: "आकार",
        help: "गणना के लिए एक ज्यामितीय आकार चुनें।",
      },
      length: {
        label: "लंबाई",
        help: "मीटर में आयत की लंबाई।",
      },
      width: {
        label: "चौड़ाई",
        help: "मीटर में आयत की चौड़ाई।",
      },
      radius: {
        label: "त्रिज्या",
        help: "मीटर में वृत्त की त्रिज्या।",
      },
      diameter: {
        label: "व्यास",
        help: "मीटर में वृत्त का व्यास।",
      },
      base: {
        label: "आधार",
        help: "मीटर में त्रिकोण के आधार की लंबाई।",
      },
      height: {
        label: "ऊंचाई",
        help: "मीटर में त्रिकोण की लंबवत ऊंचाई।",
      },
    },
    outputs: {
      areaM2: {
        label: "क्षेत्र (m²)",
        help: "वर्ग मीटर में कुल क्षेत्र।",
      },
      areaFt2: {
        label: "क्षेत्र (ft²)",
        help: "वर्ग फीट में कुल क्षेत्र।",
      },
      perimeterM: {
        label: "परिमाप (m)",
        help: "मीटर में कुल परिमाप या परिधि।",
      },
      perimeterFt: {
        label: "परिमाप (ft)",
        help: "फीट में कुल परिमाप या परिधि।",
      },
    },
    options: {
      shape: {
        rectangle: "आयत",
        circle: "वृत्त",
        triangle: "त्रिकोण",
      },
    },
    errors: {
      invalidInput: "कृपया चयनित आकार के लिए वैध आयाम प्रदान करें।",
      rectangleRequired: "आयत को लंबाई और चौड़ाई की आवश्यकता है।",
      circleRequired: "वृत्त को त्रिज्या या व्यास की आवश्यकता है।",
      triangleRequired: "त्रिकोण को आधार और ऊंचाई की आवश्यकता है।",
    },
    faq: [
      {
        q: "क्षेत्र और परिमाप में क्या अंतर है?",
        a: "क्षेत्र किसी आकार के अंदर की जगह को मापता है (m² या ft² में), जबकि परिमाप बाहरी सीमा के चारों ओर की दूरी को मापता है।",
      },
      {
        q: "मैं वर्ग फीट को वर्ग मीटर में कैसे परिवर्तित करूं?",
        a: "वर्ग फीट को 10.764 से विभाजित करें। उदाहरण: 100 ft² ÷ 10.764 ≈ 9.29 m²।",
      },
      {
        q: "यदि मेरा त्रिकोण समकोण त्रिकोण नहीं है तो क्या होगा?",
        a: "कैलकुलेटर परिमाप के लिए समकोण त्रिकोण मानता है। सटीक परिणामों के लिए सभी तीन भुजाओं को मापें।",
      },
      {
        q: "क्या मैं इसे भूमि क्षेत्र गणना के लिए उपयोग कर सकता हूं?",
        a: "हां, यदि पार्सल आयताकार या गोलाकार है। अनियमित आकारों को सरल आकारों में विभाजित करें।",
      },
    ],
  },
};

export default i18n;
