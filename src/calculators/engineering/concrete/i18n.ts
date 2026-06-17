import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Concrete Volume Calculator",
    short: "Calculate concrete volume and cement bags for slabs, columns, cylinders, and footings.",
    description:
      "Free concrete volume calculator for construction projects. Enter dimensions for slabs, columns, cylinders, or footings and get the concrete volume in m³ and yd³, plus the number of cement bags needed.",
    keywords: [
      "concrete volume calculator",
      "cement bags calculator",
      "concrete slab calculator",
      "concrete footing calculator",
      "concrete column calculator",
      "construction calculator",
      "concrete estimator",
    ],
    inputs: {
      shape: { label: "Shape", help: "Select the concrete element type." },
      unit: { label: "Unit system", help: "Metric (metres) or imperial (feet)." },
      length: { label: "Length", help: "Length of the element (m or ft)." },
      width: { label: "Width", help: "Width of the element (m or ft)." },
      thickness: { label: "Thickness / Depth", help: "Thickness for slabs or depth for footings (m or ft)." },
      diameter: { label: "Diameter", help: "Diameter of the cylindrical element (m or ft)." },
      height: { label: "Height", help: "Height of the column or cylinder (m or ft)." },
    },
    outputs: {
      volumeM3: { label: "Volume (m³)", help: "Concrete volume in cubic metres." },
      volumeYd3: { label: "Volume (yd³)", help: "Concrete volume in cubic yards." },
      bags40kg: { label: "40 kg Bags", help: "Estimated number of 40 kg cement bags (1:2:3 mix)." },
      bags60lb: { label: "60 lb Bags", help: "Estimated number of 60 lb cement bags (US standard mix)." },
    },
    options: {
      shape: { slab: "Slab", column: "Rectangular Column", cylinder: "Cylinder / Round Column", footing: "Footing (Rectangular)" },
      unit: { metric: "Metric (m)", imperial: "Imperial (ft)" },
    },
    errors: {
      missingDimensions: "Please provide all required dimensions for the selected shape.",
    },
    faq: [
      {
        q: "How many bags of cement do I need per m³?",
        a: "For a standard 1:2:3 mix (cement:sand:aggregate), approximately 8 bags of 40 kg cement are needed per cubic metre of concrete. Always add 5–10% for waste.",
      },
      {
        q: "Should I add extra concrete for waste?",
        a: "Yes. Add at least 5% for small pours and up to 10% for large or complex pours to account for spillage, uneven sub-base, and form irregularities.",
      },
      {
        q: "What is a 1:2:3 concrete mix?",
        a: "A 1:2:3 mix contains 1 part cement, 2 parts sand, and 3 parts coarse aggregate by volume or weight. It produces a general-purpose concrete suitable for footings, slabs, and columns.",
      },
    ],
  },
  nl: {
    title: "Beton Volume Calculator",
    short: "Bereken concrete volume and cement bags for slabs, columns, cylinders, and footings.",
    description:
      "Gratis concrete volume calculator for construction projects. Enter dimensions for slabs, columns, cylinders, or footings and get the concrete volume in m³ and yd³, plus the nummer of cement bags needed.",
    keywords: [
      "concrete volume calculator",
      "cement bags calculator",
      "concrete slab calculator",
      "concrete footing calculator",
      "concrete column calculator",
      "construction calculator",
      "concrete estimator",
    ],
    inputs: {
      shape: { label: "Shape", help: "Select the concrete element type." },
      unit: { label: "Unit system", help: "Metric (metres) or imperial (feet)." },
      length: { label: "Lengte", help: "Lengte of the element (m or ft)." },
      width: { label: "Breedte", help: "Breedte of the element (m or ft)." },
      thickness: { label: "Thickness / Depth", help: "Thickness for slabs or depth for footings (m or ft)." },
      diameter: { label: "Diameter", help: "Diameter of the cylindrical element (m or ft)." },
      height: { label: "Hoogte", help: "Hoogte of the column or cylinder (m or ft)." },
    },
    outputs: {
      volumeM3: { label: "Volume (m³)", help: "Beton volume in cubic metres." },
      volumeYd3: { label: "Volume (yd³)", help: "Beton volume in cubic yards." },
      bags40kg: { label: "40 kg Bags", help: "Estimated nummer of 40 kg cement bags (1:2:3 mix)." },
      bags60lb: { label: "60 lb Bags", help: "Estimated nummer of 60 lb cement bags (US standard mix)." },
    },
    options: {
      shape: { slab: "Slab", column: "Rectangular Column", cylinder: "Cylinder / Afronden Column", footing: "Footing (Rectangular)" },
      unit: { metric: "Metric (m)", imperial: "Imperial (ft)" },
    },
    errors: {
      missingDimensions: "Please provide all required dimensions for the selected shape.",
    },
    faq: [
      {
        q: "How many bags of cement do I need per m³?",
        a: "For a standard 1:2:3 mix (cement:sand:aggregate), approximately 8 bags of 40 kg cement are needed per cubic metre of concrete. Always add 5–10% for waste.",
      },
      {
        q: "Should I add extra concrete for waste?",
        a: "Yes. Add at least 5% for small pours and up to 10% for large or complex pours to account for spillage, uneven sub-base, and form irregularities.",
      },
      {
        q: "What is a 1:2:3 concrete mix?",
        a: "A 1:2:3 mix contains 1 part cement, 2 parts sand, and 3 parts coarse aggregate by volume or weight. It produces a general-purpose concrete suitable for footings, slabs, and columns.",
      },
    ],
  },

  pl: {
    title: "Beton Volume Kalkulator",
    short: "Oblicz concrete volume and cement bags for slabs, columns, cylinders, and footings.",
    description:
      "Darmowy concrete volume kalkulator for construction projects. Enter dimensions for slabs, columns, cylinders, or footings and get the concrete volume in m³ and yd³, plus the liczba of cement bags needed.",
    keywords: [
      "concrete volume kalkulator",
      "cement bags kalkulator",
      "concrete slab kalkulator",
      "concrete footing kalkulator",
      "concrete column kalkulator",
      "construction kalkulator",
      "concrete estimator",
    ],
    inputs: {
      shape: { label: "Shape", help: "Select the concrete element type." },
      unit: { label: "Unit system", help: "Metric (metres) or imperial (feet)." },
      length: { label: "Długość", help: "Długość of the element (m or ft)." },
      width: { label: "Szerokość", help: "Szerokość of the element (m or ft)." },
      thickness: { label: "Thickness / Depth", help: "Thickness for slabs or depth for footings (m or ft)." },
      diameter: { label: "Diameter", help: "Diameter of the cylindrical element (m or ft)." },
      height: { label: "Wysokość", help: "Wysokość of the column or cylinder (m or ft)." },
    },
    outputs: {
      volumeM3: { label: "Volume (m³)", help: "Beton volume in cubic metres." },
      volumeYd3: { label: "Volume (yd³)", help: "Beton volume in cubic yards." },
      bags40kg: { label: "40 kg Bags", help: "Estimated liczba of 40 kg cement bags (1:2:3 mix)." },
      bags60lb: { label: "60 lb Bags", help: "Estimated liczba of 60 lb cement bags (US standard mix)." },
    },
    options: {
      shape: { slab: "Slab", column: "Rectangular Column", cylinder: "Cylinder / Zaokrąglanie Column", footing: "Footing (Rectangular)" },
      unit: { metric: "Metric (m)", imperial: "Imperial (ft)" },
    },
    errors: {
      missingDimensions: "Please provide all required dimensions for the selected shape.",
    },
    faq: [
      {
        q: "How many bags of cement do I need per m³?",
        a: "For a standard 1:2:3 mix (cement:sand:aggregate), approximately 8 bags of 40 kg cement are needed per cubic metre of concrete. Always add 5–10% for waste.",
      },
      {
        q: "Should I add extra concrete for waste?",
        a: "Yes. Add at least 5% for small pours and up to 10% for large or complex pours to account for spillage, uneven sub-base, and form irregularities.",
      },
      {
        q: "What is a 1:2:3 concrete mix?",
        a: "A 1:2:3 mix contains 1 part cement, 2 parts sand, and 3 parts coarse aggregate by volume or weight. It produces a general-purpose concrete suitable for footings, slabs, and columns.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Betão",
    short: "Calcule a quantidade de betão necessária para a sua obra.",
    description:
      "Calculadora gratuita de betão. Calcule o volume de betão necessário para lajes, sapatas, colunas e outras estruturas.",
    keywords: ["betão", "concreto", "volume betão", "calculadora obra", "construção"],
    inputs: {
      shape: { label: "Shape", help: "Select the concrete element type." },
      unit: { label: "Unit system", help: "Metric (metres) or imperial (feet)." },
      length: { label: "Length", help: "Length of the element (m or ft)." },
      width: { label: "Width", help: "Width of the element (m or ft)." },
      thickness: { label: "Thickness / Depth", help: "Thickness for slabs or depth for footings (m or ft)." },
      diameter: { label: "Diameter", help: "Diameter of the cylindrical element (m or ft)." },
      height: { label: "Height", help: "Height of the column or cylinder (m or ft)." },
    },
    outputs: {
      volumeM3: { label: "Volume (m³)", help: "Concrete volume in cubic metres." },
      volumeYd3: { label: "Volume (yd³)", help: "Concrete volume in cubic yards." },
      bags40kg: { label: "40 kg Bags", help: "Estimated number of 40 kg cement bags (1:2:3 mix)." },
      bags60lb: { label: "60 lb Bags", help: "Estimated number of 60 lb cement bags (US standard mix)." },
    },
    options: {
      shape: { slab: "Slab", column: "Rectangular Column", cylinder: "Cylinder / Round Column", footing: "Footing (Rectangular)" },
      unit: { metric: "Metric (m)", imperial: "Imperial (ft)" },
    },
    errors: {
      missingDimensions: "Please provide all required dimensions for the selected shape.",
    },
    faq: [
      {
        q: "How many bags of cement do I need per m³?",
        a: "For a standard 1:2:3 mix (cement:sand:aggregate), approximately 8 bags of 40 kg cement are needed per cubic metre of concrete. Always add 5–10% for waste.",
      },
      {
        q: "Should I add extra concrete for waste?",
        a: "Yes. Add at least 5% for small pours and up to 10% for large or complex pours to account for spillage, uneven sub-base, and form irregularities.",
      },
      {
        q: "What is a 1:2:3 concrete mix?",
        a: "A 1:2:3 mix contains 1 part cement, 2 parts sand, and 3 parts coarse aggregate by volume or weight. It produces a general-purpose concrete suitable for footings, slabs, and columns.",
      },
    ],
  },
  id: {
    title: "Kalkulator Beton",
    short: "Hitung jumlah beton yang diperlukan untuk proyek Anda.",
    description:
      "Kalkulator beton gratis. Hitung volume beton yang dibutuhkan untuk plat lantai, pondasi, kolom, dan struktur lainnya.",
    keywords: ["beton", "volume beton", "kalkulator konstruksi", "bangunan", "campuran beton"],
    inputs: {
      shape: { label: "Shape", help: "Select the concrete element type." },
      unit: { label: "Unit system", help: "Metric (metres) or imperial (feet)." },
      length: { label: "Length", help: "Length of the element (m or ft)." },
      width: { label: "Width", help: "Width of the element (m or ft)." },
      thickness: { label: "Thickness / Depth", help: "Thickness for slabs or depth for footings (m or ft)." },
      diameter: { label: "Diameter", help: "Diameter of the cylindrical element (m or ft)." },
      height: { label: "Height", help: "Height of the column or cylinder (m or ft)." },
    },
    outputs: {
      volumeM3: { label: "Volume (m³)", help: "Concrete volume in cubic metres." },
      volumeYd3: { label: "Volume (yd³)", help: "Concrete volume in cubic yards." },
      bags40kg: { label: "40 kg Bags", help: "Estimated number of 40 kg cement bags (1:2:3 mix)." },
      bags60lb: { label: "60 lb Bags", help: "Estimated number of 60 lb cement bags (US standard mix)." },
    },
    options: {
      shape: { slab: "Slab", column: "Rectangular Column", cylinder: "Cylinder / Round Column", footing: "Footing (Rectangular)" },
      unit: { metric: "Metric (m)", imperial: "Imperial (ft)" },
    },
    errors: {
      missingDimensions: "Please provide all required dimensions for the selected shape.",
    },
    faq: [
      {
        q: "How many bags of cement do I need per m³?",
        a: "For a standard 1:2:3 mix (cement:sand:aggregate), approximately 8 bags of 40 kg cement are needed per cubic metre of concrete. Always add 5–10% for waste.",
      },
      {
        q: "Should I add extra concrete for waste?",
        a: "Yes. Add at least 5% for small pours and up to 10% for large or complex pours to account for spillage, uneven sub-base, and form irregularities.",
      },
      {
        q: "What is a 1:2:3 concrete mix?",
        a: "A 1:2:3 mix contains 1 part cement, 2 parts sand, and 3 parts coarse aggregate by volume or weight. It produces a general-purpose concrete suitable for footings, slabs, and columns.",
      },
    ],
  },


  tr: {
    title: "Beton Hacmi Hesaplayıcı",
    short: "Döşeme, kolon, silindir ve temel için beton hacmi ve çimento torbası sayısını hesaplayın.",
    description:
      "İnşaat projeleri için ücretsiz beton hacmi hesaplayıcısı. Döşeme, kolon, silindir veya temel boyutlarını girerek beton hacmini m³ ve yd³ cinsinden ve gereken çimento torbası sayısını öğrenin.",
    keywords: [
      "beton hacmi hesaplayıcı",
      "çimento torbası hesaplama",
      "beton döşeme hesaplayıcı",
      "temel beton hesabı",
      "kolon beton hesabı",
      "inşaat hesaplayıcı",
      "beton tahmini",
    ],
    inputs: {
      shape: { label: "Şekil", help: "Beton eleman türünü seçin." },
      unit: { label: "Birim sistemi", help: "Metrik (metre) veya İngiliz birimi (fit)." },
      length: { label: "Uzunluk", help: "Elemanın uzunluğu (m veya ft)." },
      width: { label: "Genişlik", help: "Elemanın genişliği (m veya ft)." },
      thickness: { label: "Kalınlık / Derinlik", help: "Döşeme kalınlığı veya temel derinliği (m veya ft)." },
      diameter: { label: "Çap", help: "Silindirik elemanın çapı (m veya ft)." },
      height: { label: "Yükseklik", help: "Kolon veya silindirin yüksekliği (m veya ft)." },
    },
    outputs: {
      volumeM3: { label: "Hacim (m³)", help: "Küp metre cinsinden beton hacmi." },
      volumeYd3: { label: "Hacim (yd³)", help: "Küp yarda cinsinden beton hacmi." },
      bags40kg: { label: "40 kg Torba", help: "Gereken 40 kg çimento torbası sayısı (1:2:3 karışım)." },
      bags60lb: { label: "60 lb Torba", help: "Gereken 60 lb çimento torbası sayısı (ABD standardı)." },
    },
    options: {
      shape: { slab: "Döşeme", column: "Dikdörtgen Kolon", cylinder: "Silindir / Yuvarlak Kolon", footing: "Temel (Dikdörtgen)" },
      unit: { metric: "Metrik (m)", imperial: "İngiliz birimi (ft)" },
    },
    errors: { missingDimensions: "Seçili şekil için gerekli tüm boyutları girin." },
    faq: [
      {
        q: "1 m³ beton için kaç çimento torbası gerekir?",
        a: "Standart 1:2:3 karışım (çimento:kum:agrega) için yaklaşık 8 adet 40 kg çimento torbası gerekmektedir. Fire payı için %5–10 ekleyin.",
      },
      {
        q: "Neden ekstra beton eklemelisiniz?",
        a: "Küçük dökümler için en az %5, büyük veya karmaşık dökümler için %10'a kadar ek beton ekleyin. Bu; dökülme, düzensiz zemin ve kalıp düzensizliklerini karşılar.",
      },
    ],
  },

  de: {
    title: "Betonvolumen Rechner",
    short: "Betonvolumen und Zementsäcke für Platten, Stützen, Zylinder und Fundamente berechnen.",
    description:
      "Kostenloser Betonvolumen-Rechner für Bauprojekte. Geben Sie die Maße für Platten, Stützen, Zylinder oder Fundamente ein und erhalten Sie das Betonvolumen in m³ und yd³ sowie die benötigte Anzahl Zementsäcke.",
    keywords: ["Betonvolumen Rechner", "Zementsäcke Rechner", "Betonplatten Rechner", "Betonkalkulator", "Fundamentbeton", "Baurechner"],
    inputs: {
      shape: { label: "Form", help: "Wählen Sie den Betonelement-Typ." },
      unit: { label: "Einheitensystem", help: "Metrisch (Meter) oder imperial (Fuß)." },
      length: { label: "Länge", help: "Länge des Elements (m oder ft)." },
      width: { label: "Breite", help: "Breite des Elements (m oder ft)." },
      thickness: { label: "Dicke / Tiefe", help: "Plattendicke oder Fundamenttiefe (m oder ft)." },
      diameter: { label: "Durchmesser", help: "Durchmesser des zylindrischen Elements (m oder ft)." },
      height: { label: "Höhe", help: "Höhe der Stütze oder des Zylinders (m oder ft)." },
    },
    outputs: {
      volumeM3: { label: "Volumen (m³)", help: "Betonvolumen in Kubikmeter." },
      volumeYd3: { label: "Volumen (yd³)", help: "Betonvolumen in Kubikyard." },
      bags40kg: { label: "40-kg-Säcke", help: "Geschätzte Anzahl 40-kg-Zementsäcke (1:2:3-Mischung)." },
      bags60lb: { label: "60-lb-Säcke", help: "Geschätzte Anzahl 60-lb-Zementsäcke (US-Standard)." },
    },
    options: {
      shape: { slab: "Platte", column: "Rechteckstütze", cylinder: "Zylinder / Rundstütze", footing: "Fundament (rechteckig)" },
      unit: { metric: "Metrisch (m)", imperial: "Imperial (ft)" },
    },
    errors: { missingDimensions: "Bitte geben Sie alle erforderlichen Maße für die gewählte Form ein." },
    faq: [
      { q: "Wie viele Zementsäcke brauche ich pro m³?", a: "Für eine Standard-1:2:3-Mischung werden ca. 8 Säcke à 40 kg Zement pro Kubikmeter Beton benötigt. Addieren Sie 5–10 % für Verluste." },
    ],
  },

  fr: {
    title: "Calculateur Volume de Béton",
    short: "Calculez le volume de béton et le nombre de sacs de ciment pour dalles, colonnes, cylindres et semelles.",
    description:
      "Calculateur gratuit de volume de béton pour projets de construction. Entrez les dimensions de dalles, colonnes, cylindres ou semelles et obtenez le volume en m³ et yd³ ainsi que le nombre de sacs de ciment nécessaires.",
    keywords: ["calculateur béton", "calculateur sacs ciment", "calculateur dalle béton", "calculateur fondation", "estimation béton"],
    inputs: {
      shape: { label: "Forme", help: "Sélectionnez le type d'élément en béton." },
      unit: { label: "Système d'unités", help: "Métrique (mètres) ou impérial (pieds)." },
      length: { label: "Longueur", help: "Longueur de l'élément (m ou ft)." },
      width: { label: "Largeur", help: "Largeur de l'élément (m ou ft)." },
      thickness: { label: "Épaisseur / Profondeur", help: "Épaisseur de la dalle ou profondeur de la semelle (m ou ft)." },
      diameter: { label: "Diamètre", help: "Diamètre de l'élément cylindrique (m ou ft)." },
      height: { label: "Hauteur", help: "Hauteur de la colonne ou du cylindre (m ou ft)." },
    },
    outputs: {
      volumeM3: { label: "Volume (m³)", help: "Volume de béton en mètres cubes." },
      volumeYd3: { label: "Volume (yd³)", help: "Volume de béton en yards cubes." },
      bags40kg: { label: "Sacs 40 kg", help: "Nombre estimé de sacs de ciment de 40 kg (dosage 1:2:3)." },
      bags60lb: { label: "Sacs 60 lb", help: "Nombre estimé de sacs de ciment de 60 lb (standard US)." },
    },
    options: {
      shape: { slab: "Dalle", column: "Colonne rectangulaire", cylinder: "Cylindre / Colonne ronde", footing: "Semelle (rectangulaire)" },
      unit: { metric: "Métrique (m)", imperial: "Impérial (ft)" },
    },
    errors: { missingDimensions: "Veuillez fournir toutes les dimensions requises pour la forme sélectionnée." },
    faq: [
      { q: "Combien de sacs de ciment par m³ ?", a: "Pour un dosage 1:2:3, environ 8 sacs de 40 kg sont nécessaires par mètre cube de béton. Ajoutez 5 à 10 % pour les pertes." },
    ],
  },

  es: {
    title: "Calculadora de Volumen de Hormigón",
    short: "Calcula el volumen de hormigón y sacos de cemento para losas, columnas, cilindros y cimientos.",
    description:
      "Calculadora gratuita de volumen de hormigón para proyectos de construcción. Introduce las dimensiones de losas, columnas, cilindros o cimientos y obtén el volumen en m³ y yd³, más el número de sacos de cemento necesarios.",
    keywords: ["calculadora hormigón", "calculadora sacos cemento", "calculadora losa hormigón", "calculadora cimentación", "estimación hormigón"],
    inputs: {
      shape: { label: "Forma", help: "Selecciona el tipo de elemento de hormigón." },
      unit: { label: "Sistema de unidades", help: "Métrico (metros) o imperial (pies)." },
      length: { label: "Longitud", help: "Longitud del elemento (m o ft)." },
      width: { label: "Anchura", help: "Anchura del elemento (m o ft)." },
      thickness: { label: "Espesor / Profundidad", help: "Espesor de la losa o profundidad del cimiento (m o ft)." },
      diameter: { label: "Diámetro", help: "Diámetro del elemento cilíndrico (m o ft)." },
      height: { label: "Altura", help: "Altura de la columna o cilindro (m o ft)." },
    },
    outputs: {
      volumeM3: { label: "Volumen (m³)", help: "Volumen de hormigón en metros cúbicos." },
      volumeYd3: { label: "Volumen (yd³)", help: "Volumen de hormigón en yardas cúbicas." },
      bags40kg: { label: "Sacos 40 kg", help: "Número estimado de sacos de cemento de 40 kg (mezcla 1:2:3)." },
      bags60lb: { label: "Sacos 60 lb", help: "Número estimado de sacos de cemento de 60 lb (estándar EE.UU.)." },
    },
    options: {
      shape: { slab: "Losa", column: "Columna rectangular", cylinder: "Cilindro / Columna redonda", footing: "Cimiento (rectangular)" },
      unit: { metric: "Métrico (m)", imperial: "Imperial (ft)" },
    },
    errors: { missingDimensions: "Proporciona todas las dimensiones requeridas para la forma seleccionada." },
    faq: [
      { q: "¿Cuántos sacos de cemento por m³?", a: "Para una mezcla 1:2:3, se necesitan aproximadamente 8 sacos de 40 kg por metro cúbico de hormigón. Añade un 5–10% para desperdicios." },
    ],
  },

  it: {
    title: "Calcolatore Volume Calcestruzzo",
    short: "Calcola il volume di calcestruzzo e i sacchi di cemento per solette, colonne, cilindri e fondamenta.",
    description:
      "Calcolatore gratuito del volume di calcestruzzo per progetti edilizi. Inserisci le dimensioni di solette, colonne, cilindri o fondamenta e ottieni il volume in m³ e yd³ e il numero di sacchi di cemento necessari.",
    keywords: ["calcolatore calcestruzzo", "calcolatore sacchi cemento", "calcolatore soletta", "calcolo fondamenta", "stima calcestruzzo"],
    inputs: {
      shape: { label: "Forma", help: "Seleziona il tipo di elemento in calcestruzzo." },
      unit: { label: "Sistema di unità", help: "Metrico (metri) o imperiale (piedi)." },
      length: { label: "Lunghezza", help: "Lunghezza dell'elemento (m o ft)." },
      width: { label: "Larghezza", help: "Larghezza dell'elemento (m o ft)." },
      thickness: { label: "Spessore / Profondità", help: "Spessore della soletta o profondità della fondazione (m o ft)." },
      diameter: { label: "Diametro", help: "Diametro dell'elemento cilindrico (m o ft)." },
      height: { label: "Altezza", help: "Altezza della colonna o del cilindro (m o ft)." },
    },
    outputs: {
      volumeM3: { label: "Volume (m³)", help: "Volume di calcestruzzo in metri cubi." },
      volumeYd3: { label: "Volume (yd³)", help: "Volume di calcestruzzo in yard cubi." },
      bags40kg: { label: "Sacchi 40 kg", help: "Numero stimato di sacchi di cemento da 40 kg (mix 1:2:3)." },
      bags60lb: { label: "Sacchi 60 lb", help: "Numero stimato di sacchi da 60 lb (standard USA)." },
    },
    options: {
      shape: { slab: "Soletta", column: "Colonna rettangolare", cylinder: "Cilindro / Colonna tonda", footing: "Fondazione (rettangolare)" },
      unit: { metric: "Metrico (m)", imperial: "Imperiale (ft)" },
    },
    errors: { missingDimensions: "Inserisci tutte le dimensioni richieste per la forma selezionata." },
    faq: [
      { q: "Quanti sacchi di cemento per m³?", a: "Per una miscela 1:2:3, servono circa 8 sacchi da 40 kg per metro cubo di calcestruzzo. Aggiungere il 5–10% per gli scarti." },
    ],
  },

  ar: {
    title: "حاسبة حجم الخرسانة",
    short: "احسب حجم الخرسانة وعدد أكياس الإسمنت للبلاطات والأعمدة والأسطوانات والأساسات.",
    description:
      "حاسبة مجانية لحجم الخرسانة لمشاريع البناء. أدخل أبعاد البلاطات أو الأعمدة أو الأسطوانات أو الأساسات للحصول على الحجم بالمتر المكعب والياردة المكعبة وعدد أكياس الإسمنت اللازمة.",
    keywords: ["حاسبة حجم الخرسانة", "حاسبة أكياس الإسمنت", "حسابات البناء", "حجم البلاطة الخرسانية"],
    inputs: {
      shape: { label: "الشكل", help: "اختر نوع العنصر الخرساني." },
      unit: { label: "نظام الوحدات", help: "متري (متر) أو إمبراطوري (قدم)." },
      length: { label: "الطول", help: "طول العنصر (م أو قدم)." },
      width: { label: "العرض", help: "عرض العنصر (م أو قدم)." },
      thickness: { label: "السُّمك / العمق", help: "سُمك البلاطة أو عمق الأساس (م أو قدم)." },
      diameter: { label: "القطر", help: "قطر العنصر الأسطواني (م أو قدم)." },
      height: { label: "الارتفاع", help: "ارتفاع العمود أو الأسطوانة (م أو قدم)." },
    },
    outputs: {
      volumeM3: { label: "الحجم (م³)", help: "حجم الخرسانة بالمتر المكعب." },
      volumeYd3: { label: "الحجم (yd³)", help: "حجم الخرسانة بالياردة المكعبة." },
      bags40kg: { label: "أكياس 40 كجم", help: "العدد التقديري من أكياس الإسمنت 40 كجم (خلط 1:2:3)." },
      bags60lb: { label: "أكياس 60 رطل", help: "العدد التقديري من أكياس 60 رطل (المعيار الأمريكي)." },
    },
    options: {
      shape: { slab: "بلاطة", column: "عمود مستطيل", cylinder: "أسطوانة / عمود دائري", footing: "أساس (مستطيل)" },
      unit: { metric: "متري (م)", imperial: "إمبراطوري (قدم)" },
    },
    errors: { missingDimensions: "يرجى توفير جميع الأبعاد المطلوبة للشكل المحدد." },
    faq: [
      { q: "كم عدد أكياس الإسمنت لكل متر مكعب؟", a: "لخلط 1:2:3 المعياري، تُحتاج نحو 8 أكياس بوزن 40 كجم لكل متر مكعب من الخرسانة. أضف 5–10% للهدر." },
    ],
  },

  ru: {
    title: "Калькулятор объёма бетона",
    short: "Рассчитайте объём бетона и количество мешков цемента для плит, колонн, цилиндров и фундаментов.",
    description:
      "Бесплатный калькулятор объёма бетона для строительных проектов. Введите размеры плит, колонн, цилиндров или фундаментов и получите объём в м³ и yd³, а также количество мешков цемента.",
    keywords: ["калькулятор бетона", "калькулятор мешков цемента", "расчёт плиты перекрытия", "расчёт фундамента", "объём бетона"],
    inputs: {
      shape: { label: "Форма", help: "Выберите тип бетонного элемента." },
      unit: { label: "Система единиц", help: "Метрическая (метры) или имперская (футы)." },
      length: { label: "Длина", help: "Длина элемента (м или фут)." },
      width: { label: "Ширина", help: "Ширина элемента (м или фут)." },
      thickness: { label: "Толщина / Глубина", help: "Толщина плиты или глубина фундамента (м или фут)." },
      diameter: { label: "Диаметр", help: "Диаметр цилиндрического элемента (м или фут)." },
      height: { label: "Высота", help: "Высота колонны или цилиндра (м или фут)." },
    },
    outputs: {
      volumeM3: { label: "Объём (м³)", help: "Объём бетона в кубических метрах." },
      volumeYd3: { label: "Объём (yd³)", help: "Объём бетона в кубических ярдах." },
      bags40kg: { label: "Мешки 40 кг", help: "Расчётное количество мешков цемента по 40 кг (смесь 1:2:3)." },
      bags60lb: { label: "Мешки 60 фунтов", help: "Расчётное количество мешков по 60 фунтов (стандарт США)." },
    },
    options: {
      shape: { slab: "Плита", column: "Прямоугольная колонна", cylinder: "Цилиндр / Круглая колонна", footing: "Фундамент (прямоугольный)" },
      unit: { metric: "Метрическая (м)", imperial: "Имперская (фут)" },
    },
    errors: { missingDimensions: "Введите все необходимые размеры для выбранной формы." },
    faq: [
      { q: "Сколько мешков цемента на 1 м³ бетона?", a: "При смеси 1:2:3 на один кубометр бетона требуется около 8 мешков по 40 кг. Добавьте 5–10% на потери." },
    ],
  },

  zh: {
    title: "混凝土体积计算器",
    short: "计算板、柱、圆柱体和基础所需的混凝土体积及水泥袋数。",
    description:
      "免费混凝土体积计算器，适用于建筑工程项目。输入板、柱、圆柱体或基础的尺寸，即可获得混凝土体积（m³和yd³）及所需水泥袋数。",
    keywords: ["混凝土体积计算器", "水泥袋数计算", "混凝土板计算", "基础混凝土计算", "建筑计算器"],
    inputs: {
      shape: { label: "形状", help: "选择混凝土构件类型。" },
      unit: { label: "单位制", help: "公制（米）或英制（英尺）。" },
      length: { label: "长度", help: "构件长度（m或ft）。" },
      width: { label: "宽度", help: "构件宽度（m或ft）。" },
      thickness: { label: "厚度/深度", help: "板的厚度或基础的深度（m或ft）。" },
      diameter: { label: "直径", help: "圆柱形构件的直径（m或ft）。" },
      height: { label: "高度", help: "柱或圆柱体的高度（m或ft）。" },
    },
    outputs: {
      volumeM3: { label: "体积（m³）", help: "混凝土体积，以立方米为单位。" },
      volumeYd3: { label: "体积（yd³）", help: "混凝土体积，以立方码为单位。" },
      bags40kg: { label: "40千克袋数", help: "所需40千克水泥袋的估算数量（1:2:3配合比）。" },
      bags60lb: { label: "60磅袋数", help: "所需60磅水泥袋的估算数量（美国标准）。" },
    },
    options: {
      shape: { slab: "板", column: "矩形柱", cylinder: "圆柱体/圆柱", footing: "基础（矩形）" },
      unit: { metric: "公制（m）", imperial: "英制（ft）" },
    },
    errors: { missingDimensions: "请提供所选形状所需的所有尺寸。" },
    faq: [
      { q: "每立方米混凝土需要多少袋水泥？", a: "对于标准1:2:3配合比，每立方米混凝土约需8袋40千克水泥。额外增加5–10%以备损耗。" },
    ],
  },

  ja: {
    title: "コンクリート体積計算機",
    short: "スラブ、柱、円柱、フーチングのコンクリート量とセメント袋数を計算します。",
    description:
      "建設プロジェクト向けの無料コンクリート体積計算機。スラブ、柱、円柱、フーチングの寸法を入力すると、コンクリート量（m³・yd³）と必要なセメント袋数が分かります。",
    keywords: ["コンクリート体積計算機", "セメント袋数計算", "コンクリートスラブ計算", "基礎コンクリート計算", "建設計算機"],
    inputs: {
      shape: { label: "形状", help: "コンクリート部材の種類を選択してください。" },
      unit: { label: "単位系", help: "メートル法（メートル）またはヤード・ポンド法（フィート）。" },
      length: { label: "長さ", help: "部材の長さ（mまたはft）。" },
      width: { label: "幅", help: "部材の幅（mまたはft）。" },
      thickness: { label: "厚さ / 深さ", help: "スラブの厚さまたはフーチングの深さ（mまたはft）。" },
      diameter: { label: "直径", help: "円筒形部材の直径（mまたはft）。" },
      height: { label: "高さ", help: "柱または円柱の高さ（mまたはft）。" },
    },
    outputs: {
      volumeM3: { label: "体積（m³）", help: "コンクリート体積（立方メートル）。" },
      volumeYd3: { label: "体積（yd³）", help: "コンクリート体積（立方ヤード）。" },
      bags40kg: { label: "40kgセメント袋数", help: "必要な40kgセメント袋の推定数（1:2:3配合）。" },
      bags60lb: { label: "60lbセメント袋数", help: "必要な60lb袋の推定数（米国標準）。" },
    },
    options: {
      shape: { slab: "スラブ", column: "矩形柱", cylinder: "円柱 / 丸柱", footing: "フーチング（矩形）" },
      unit: { metric: "メートル法（m）", imperial: "ヤード・ポンド法（ft）" },
    },
    errors: { missingDimensions: "選択した形状に必要なすべての寸法を入力してください。" },
    faq: [
      { q: "1m³あたり何袋のセメントが必要ですか？", a: "1:2:3配合では、1m³のコンクリートに約8袋（40kg）のセメントが必要です。ロスのために5〜10%を追加してください。" },
    ],
  },

  ko: {
    title: "콘크리트 부피 계산기",
    short: "슬래브, 기둥, 원기둥, 기초에 필요한 콘크리트 부피와 시멘트 포대 수를 계산합니다.",
    description:
      "건설 프로젝트를 위한 무료 콘크리트 부피 계산기. 슬래브, 기둥, 원기둥, 기초의 치수를 입력하면 m³ 및 yd³ 단위의 콘크리트 부피와 필요한 시멘트 포대 수를 얻을 수 있습니다.",
    keywords: ["콘크리트 부피 계산기", "시멘트 포대 계산", "콘크리트 슬래브 계산기", "기초 콘크리트 계산", "건설 계산기"],
    inputs: {
      shape: { label: "형상", help: "콘크리트 부재 유형을 선택하세요." },
      unit: { label: "단위 시스템", help: "미터법(미터) 또는 야드파운드법(피트)." },
      length: { label: "길이", help: "부재의 길이(m 또는 ft)." },
      width: { label: "너비", help: "부재의 너비(m 또는 ft)." },
      thickness: { label: "두께 / 깊이", help: "슬래브 두께 또는 기초 깊이(m 또는 ft)." },
      diameter: { label: "직경", help: "원기둥형 부재의 직경(m 또는 ft)." },
      height: { label: "높이", help: "기둥 또는 원기둥의 높이(m 또는 ft)." },
    },
    outputs: {
      volumeM3: { label: "부피 (m³)", help: "세제곱미터 단위의 콘크리트 부피." },
      volumeYd3: { label: "부피 (yd³)", help: "세제곱야드 단위의 콘크리트 부피." },
      bags40kg: { label: "40kg 포대 수", help: "필요한 40kg 시멘트 포대 수 추정치(1:2:3 배합)." },
      bags60lb: { label: "60lb 포대 수", help: "필요한 60lb 시멘트 포대 수 추정치(미국 표준)." },
    },
    options: {
      shape: { slab: "슬래브", column: "직사각형 기둥", cylinder: "원기둥 / 원형 기둥", footing: "기초(직사각형)" },
      unit: { metric: "미터법 (m)", imperial: "야드파운드법 (ft)" },
    },
    errors: { missingDimensions: "선택한 형상에 필요한 모든 치수를 입력하세요." },
    faq: [
      { q: "1m³당 시멘트 포대가 몇 개 필요한가요?", a: "표준 1:2:3 배합에서는 콘크리트 1세제곱미터당 약 40kg 포대 8개가 필요합니다. 손실을 위해 5–10%를 추가하세요." },
    ],
  },

  hi: {
    title: "कंक्रीट आयतन कैलकुलेटर",
    short: "स्लैब, कॉलम, सिलेंडर और फुटिंग के लिए कंक्रीट की मात्रा और सीमेंट बैग की संख्या गणना करें।",
    description:
      "निर्माण परियोजनाओं के लिए निःशुल्क कंक्रीट आयतन कैलकुलेटर। स्लैब, कॉलम, सिलेंडर या फुटिंग के आयाम दर्ज करें और m³ और yd³ में कंक्रीट की मात्रा तथा आवश्यक सीमेंट बैग की संख्या प्राप्त करें।",
    keywords: ["कंक्रीट आयतन कैलकुलेटर", "सीमेंट बैग कैलकुलेटर", "कंक्रीट स्लैब कैलकुलेटर", "निर्माण कैलकुलेटर"],
    inputs: {
      shape: { label: "आकार", help: "कंक्रीट तत्व का प्रकार चुनें।" },
      unit: { label: "माप प्रणाली", help: "मेट्रिक (मीटर) या इम्पीरियल (फुट)।" },
      length: { label: "लंबाई", help: "तत्व की लंबाई (m या ft)।" },
      width: { label: "चौड़ाई", help: "तत्व की चौड़ाई (m या ft)।" },
      thickness: { label: "मोटाई / गहराई", help: "स्लैब की मोटाई या फुटिंग की गहराई (m या ft)।" },
      diameter: { label: "व्यास", help: "बेलनाकार तत्व का व्यास (m या ft)।" },
      height: { label: "ऊंचाई", help: "कॉलम या सिलेंडर की ऊंचाई (m या ft)।" },
    },
    outputs: {
      volumeM3: { label: "आयतन (m³)", help: "घन मीटर में कंक्रीट की मात्रा।" },
      volumeYd3: { label: "आयतन (yd³)", help: "घन गज में कंक्रीट की मात्रा।" },
      bags40kg: { label: "40 kg बैग", help: "40 kg सीमेंट बैग की अनुमानित संख्या (1:2:3 मिश्रण)।" },
      bags60lb: { label: "60 lb बैग", help: "60 lb सीमेंट बैग की अनुमानित संख्या (अमेरिकी मानक)।" },
    },
    options: {
      shape: { slab: "स्लैब", column: "आयताकार कॉलम", cylinder: "सिलेंडर / गोल कॉलम", footing: "फुटिंग (आयताकार)" },
      unit: { metric: "मेट्रिक (m)", imperial: "इम्पीरियल (ft)" },
    },
    errors: { missingDimensions: "चयनित आकार के लिए सभी आवश्यक आयाम दर्ज करें।" },
    faq: [
      { q: "1 m³ कंक्रीट के लिए कितने सीमेंट बैग चाहिए?", a: "मानक 1:2:3 मिश्रण के लिए प्रति घन मीटर कंक्रीट में लगभग 8 बैग 40 kg सीमेंट की जरूरत होती है। बर्बादी के लिए 5–10% अतिरिक्त जोड़ें।" },
    ],
  },
};

export default i18n;
