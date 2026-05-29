import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Triangle Calculator",
    short: "Solve triangles using sides and angles. Calculate missing sides, angles, area, and type.",
    description:
      "Free triangle calculator using law of cosines, law of sines, and Heron's formula. Solve SSS, SAS, ASA, AAS, or SSA triangles and find area, perimeter, and triangle type.",
    keywords: [
      "triangle calculator",
      "triangle solver",
      "law of cosines",
      "law of sines",
      "area calculator",
      "geometry",
      "triangle type",
    ],
    inputs: {
      method: {
        label: "Solution method",
        help: "Choose how to specify triangle: SSS (three sides), SAS (two sides and included angle), ASA (two angles and included side), AAS (two angles and opposite side), or SSA (two sides and opposite angle).",
      },
      sideA: {
        label: "Side A",
        help: "Length of side A.",
      },
      sideB: {
        label: "Side B",
        help: "Length of side B.",
      },
      sideC: {
        label: "Side C",
        help: "Length of side C.",
      },
      angleA: {
        label: "Angle A (degrees)",
        help: "Angle A in degrees.",
      },
      angleB: {
        label: "Angle B (degrees)",
        help: "Angle B in degrees.",
      },
      angleC: {
        label: "Angle C (degrees)",
        help: "Angle C in degrees.",
      },
    },
    outputs: {
      sideA: { label: "Side A", help: "Length of side A." },
      sideB: { label: "Side B", help: "Length of side B." },
      sideC: { label: "Side C", help: "Length of side C." },
      angleA: { label: "Angle A", help: "Angle A in degrees." },
      angleB: { label: "Angle B", help: "Angle B in degrees." },
      angleC: { label: "Angle C", help: "Angle C in degrees." },
      area: {
        label: "Area",
        help: "The area of the triangle.",
      },
      perimeter: {
        label: "Perimeter",
        help: "The sum of all three sides.",
      },
      triangleType: {
        label: "Triangle Type",
        help: "Classification: equilateral, isosceles, scalene, or right.",
      },
    },
    options: {
      method: {
        sss: "SSS (Side-Side-Side)",
        sas: "SAS (Side-Angle-Side)",
        asa: "ASA (Angle-Side-Angle)",
        aas: "AAS (Angle-Angle-Side)",
        ssa: "SSA (Side-Side-Angle)",
      },
    },
    errors: {
      invalidTriangle: "The given sides or angles do not form a valid triangle.",
      triangleInequalityViolated: "Triangle inequality violated.",
      ambiguousSSA: "SSA case has no unique solution (ambiguous case).",
    },
    faq: [
      {
        q: "What is the law of cosines?",
        a: "The law of cosines states: c² = a² + b² - 2ab·cos(C). It relates the sides of a triangle to one of its angles and is used to find missing sides or angles.",
      },
      {
        q: "What is the law of sines?",
        a: "The law of sines states: a/sin(A) = b/sin(B) = c/sin(C). It relates the sides of a triangle to the sines of their opposite angles.",
      },
      {
        q: "How does Heron's formula work?",
        a: "Heron's formula calculates area from three side lengths: A = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2 is the semi-perimeter.",
      },
      {
        q: "What does SSA (ambiguous case) mean?",
        a: "When you have two sides and an angle opposite one of them, the solution may not be unique. Depending on the values, there can be 0, 1, or 2 valid triangles.",
      },
      {
        q: "What are the different triangle types?",
        a: "Equilateral (all sides equal), isosceles (two sides equal), scalene (all sides different), and right (one 90° angle).",
      },
    ],
  },
  pt: {
    title: "Calculadora de Triângulo",
    short: "Calcule área, perímetro, ângulos e lados de um triângulo.",
    description:
      "Calculadora gratuita de triângulo. Calcule área (Heron), perímetro, ângulos internos e tipos de triângulo a partir dos lados ou ângulos.",
    keywords: ["triângulo", "área triângulo", "Heron", "ângulos triângulo", "geometria"],
    inputs: {
      method: {
        label: "Solution method",
        help: "Choose how to specify triangle: SSS (three sides), SAS (two sides and included angle), ASA (two angles and included side), AAS (two angles and opposite side), or SSA (two sides and opposite angle).",
      },
      sideA: {
        label: "Side A",
        help: "Length of side A.",
      },
      sideB: {
        label: "Side B",
        help: "Length of side B.",
      },
      sideC: {
        label: "Side C",
        help: "Length of side C.",
      },
      angleA: {
        label: "Angle A (degrees)",
        help: "Angle A in degrees.",
      },
      angleB: {
        label: "Angle B (degrees)",
        help: "Angle B in degrees.",
      },
      angleC: {
        label: "Angle C (degrees)",
        help: "Angle C in degrees.",
      },
    },
    outputs: {
      sideA: { label: "Side A", help: "Length of side A." },
      sideB: { label: "Side B", help: "Length of side B." },
      sideC: { label: "Side C", help: "Length of side C." },
      angleA: { label: "Angle A", help: "Angle A in degrees." },
      angleB: { label: "Angle B", help: "Angle B in degrees." },
      angleC: { label: "Angle C", help: "Angle C in degrees." },
      area: {
        label: "Area",
        help: "The area of the triangle.",
      },
      perimeter: {
        label: "Perimeter",
        help: "The sum of all three sides.",
      },
      triangleType: {
        label: "Triangle Type",
        help: "Classification: equilateral, isosceles, scalene, or right.",
      },
    },
    options: {
      method: {
        sss: "SSS (Side-Side-Side)",
        sas: "SAS (Side-Angle-Side)",
        asa: "ASA (Angle-Side-Angle)",
        aas: "AAS (Angle-Angle-Side)",
        ssa: "SSA (Side-Side-Angle)",
      },
    },
    errors: {
      invalidTriangle: "The given sides or angles do not form a valid triangle.",
      triangleInequalityViolated: "Triangle inequality violated.",
      ambiguousSSA: "SSA case has no unique solution (ambiguous case).",
    },
    faq: [
      {
        q: "What is the law of cosines?",
        a: "The law of cosines states: c² = a² + b² - 2ab·cos(C). It relates the sides of a triangle to one of its angles and is used to find missing sides or angles.",
      },
      {
        q: "What is the law of sines?",
        a: "The law of sines states: a/sin(A) = b/sin(B) = c/sin(C). It relates the sides of a triangle to the sines of their opposite angles.",
      },
      {
        q: "How does Heron's formula work?",
        a: "Heron's formula calculates area from three side lengths: A = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2 is the semi-perimeter.",
      },
      {
        q: "What does SSA (ambiguous case) mean?",
        a: "When you have two sides and an angle opposite one of them, the solution may not be unique. Depending on the values, there can be 0, 1, or 2 valid triangles.",
      },
      {
        q: "What are the different triangle types?",
        a: "Equilateral (all sides equal), isosceles (two sides equal), scalene (all sides different), and right (one 90° angle).",
      },
    ],
  },
  id: {
    title: "Kalkulator Segitiga",
    short: "Hitung luas, keliling, sudut, dan sisi segitiga.",
    description:
      "Kalkulator segitiga gratis. Hitung luas (Heron), keliling, sudut dalam, dan jenis segitiga dari sisi atau sudut.",
    keywords: ["segitiga", "luas segitiga", "Heron", "sudut segitiga", "geometri"],
    inputs: {
      method: {
        label: "Solution method",
        help: "Choose how to specify triangle: SSS (three sides), SAS (two sides and included angle), ASA (two angles and included side), AAS (two angles and opposite side), or SSA (two sides and opposite angle).",
      },
      sideA: {
        label: "Side A",
        help: "Length of side A.",
      },
      sideB: {
        label: "Side B",
        help: "Length of side B.",
      },
      sideC: {
        label: "Side C",
        help: "Length of side C.",
      },
      angleA: {
        label: "Angle A (degrees)",
        help: "Angle A in degrees.",
      },
      angleB: {
        label: "Angle B (degrees)",
        help: "Angle B in degrees.",
      },
      angleC: {
        label: "Angle C (degrees)",
        help: "Angle C in degrees.",
      },
    },
    outputs: {
      sideA: { label: "Side A", help: "Length of side A." },
      sideB: { label: "Side B", help: "Length of side B." },
      sideC: { label: "Side C", help: "Length of side C." },
      angleA: { label: "Angle A", help: "Angle A in degrees." },
      angleB: { label: "Angle B", help: "Angle B in degrees." },
      angleC: { label: "Angle C", help: "Angle C in degrees." },
      area: {
        label: "Area",
        help: "The area of the triangle.",
      },
      perimeter: {
        label: "Perimeter",
        help: "The sum of all three sides.",
      },
      triangleType: {
        label: "Triangle Type",
        help: "Classification: equilateral, isosceles, scalene, or right.",
      },
    },
    options: {
      method: {
        sss: "SSS (Side-Side-Side)",
        sas: "SAS (Side-Angle-Side)",
        asa: "ASA (Angle-Side-Angle)",
        aas: "AAS (Angle-Angle-Side)",
        ssa: "SSA (Side-Side-Angle)",
      },
    },
    errors: {
      invalidTriangle: "The given sides or angles do not form a valid triangle.",
      triangleInequalityViolated: "Triangle inequality violated.",
      ambiguousSSA: "SSA case has no unique solution (ambiguous case).",
    },
    faq: [
      {
        q: "What is the law of cosines?",
        a: "The law of cosines states: c² = a² + b² - 2ab·cos(C). It relates the sides of a triangle to one of its angles and is used to find missing sides or angles.",
      },
      {
        q: "What is the law of sines?",
        a: "The law of sines states: a/sin(A) = b/sin(B) = c/sin(C). It relates the sides of a triangle to the sines of their opposite angles.",
      },
      {
        q: "How does Heron's formula work?",
        a: "Heron's formula calculates area from three side lengths: A = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2 is the semi-perimeter.",
      },
      {
        q: "What does SSA (ambiguous case) mean?",
        a: "When you have two sides and an angle opposite one of them, the solution may not be unique. Depending on the values, there can be 0, 1, or 2 valid triangles.",
      },
      {
        q: "What are the different triangle types?",
        a: "Equilateral (all sides equal), isosceles (two sides equal), scalene (all sides different), and right (one 90° angle).",
      },
    ],
  },


  tr: {
    title: "Üçgen Hesaplayıcı",
    short: "Kenarları ve açılarını kullanarak üçgen çözün. Eksik kenarları, açıları, alanı ve türünü hesaplayın.",
    description:
      "Kosinüs teoremi, sinüs teoremi ve Heron formülünü kullanan ücretsiz üçgen hesaplayıcı. SSS, SAS, ASA, AAS veya SSA üçgenlerini çözün ve alan, çevre ve üçgen türünü bulun.",
    keywords: [
      "üçgen hesaplayıcı",
      "üçgen çözücü",
      "kosinüs teoremi",
      "sinüs teoremi",
      "alan hesaplama",
      "geometri",
      "üçgen türü",
    ],
    inputs: {
      method: {
        label: "Çözüm yöntemi",
        help: "Üçgeni belirtme yöntemini seçin: SSS (üç kenar), SAS (iki kenar ve aralarındaki açı), ASA (iki açı ve aralarındaki kenar), AAS (iki açı ve karşı kenar) veya SSA (iki kenar ve karşı açı).",
      },
      sideA: { label: "Kenar A", help: "A kenarının uzunluğu." },
      sideB: { label: "Kenar B", help: "B kenarının uzunluğu." },
      sideC: { label: "Kenar C", help: "C kenarının uzunluğu." },
      angleA: {
        label: "Açı A (derece)",
        help: "A açısı derece cinsinden.",
      },
      angleB: {
        label: "Açı B (derece)",
        help: "B açısı derece cinsinden.",
      },
      angleC: {
        label: "Açı C (derece)",
        help: "C açısı derece cinsinden.",
      },
    },
    outputs: {
      sideA: { label: "Kenar A", help: "A kenarının uzunluğu." },
      sideB: { label: "Kenar B", help: "B kenarının uzunluğu." },
      sideC: { label: "Kenar C", help: "C kenarının uzunluğu." },
      angleA: { label: "Açı A", help: "A açısı derece cinsinden." },
      angleB: { label: "Açı B", help: "B açısı derece cinsinden." },
      angleC: { label: "Açı C", help: "C açısı derece cinsinden." },
      area: { label: "Alan", help: "Üçgenin alanı." },
      perimeter: { label: "Çevre", help: "Üç kenarın toplamı." },
      triangleType: {
        label: "Üçgen Türü",
        help: "Sınıflandırma: eşkenar, ikizkenar, çeşitkenar veya dik.",
      },
    },
    options: {
      method: {
        sss: "SSS (Kenar-Kenar-Kenar)",
        sas: "SAS (Kenar-Açı-Kenar)",
        asa: "ASA (Açı-Kenar-Açı)",
        aas: "AAS (Açı-Açı-Kenar)",
        ssa: "SSA (Kenar-Kenar-Açı)",
      },
    },
    errors: {
      invalidTriangle: "Verilen kenarlar veya açılar geçerli bir üçgen oluşturmaz.",
      triangleInequalityViolated: "Üçgen eşitsizliği ihlal edilmiş.",
      ambiguousSSA: "SSA durumunun benzersiz çözümü yoktur (belirsiz durum).",
    },
    faq: [
      {
        q: "Kosinüs teoremi nedir?",
        a: "Kosinüs teoremi şöyle ifade edilir: c² = a² + b² - 2ab·cos(C). Bir üçgenin kenarlarını açılarıyla ilişkilendirir ve eksik kenarları veya açıları bulmak için kullanılır.",
      },
      {
        q: "Sinüs teoremi nedir?",
        a: "Sinüs teoremi şöyle ifade edilir: a/sin(A) = b/sin(B) = c/sin(C). Bir üçgenin kenarlarını açılarının sinüsleriyle ilişkilendirir.",
      },
      {
        q: "Heron formülü nasıl çalışır?",
        a: "Heron formülü üç kenar uzunluğundan alanı hesaplar: A = √[s(s-a)(s-b)(s-c)], burada s = (a+b+c)/2 yarı çevredir.",
      },
      {
        q: "SSA (belirsiz durum) ne anlama gelir?",
        a: "İki kenar ve bunlardan birinin karşısındaki açı verildiğinde, çözüm benzersiz olmayabilir. Değerlere bağlı olarak 0, 1 veya 2 geçerli üçgen olabilir.",
      },
      {
        q: "Farklı üçgen türleri nelerdir?",
        a: "Eşkenar (tüm kenarlar eşit), ikizkenar (iki kenar eşit), çeşitkenar (tüm kenarlar farklı) ve dik (bir 90° açı).",
      },
    ],
  },

  de: {
    title: "Dreiecksrechner",
    short: "Lösen Sie Dreiecke mit Seiten und Winkeln. Berechnen Sie fehlende Seiten, Winkel, Fläche und Typ.",
    description:
      "Kostenloser Dreiecksrechner mit Kosinussatz, Sinussatz und Herons Formel. Lösen Sie SSS-, SAS-, ASA-, AAS- oder SSA-Dreiecke und bestimmen Sie Fläche, Umfang und Dreieckstyp.",
    keywords: [
      "Dreiecksrechner",
      "Dreieckslöser",
      "Kosinussatz",
      "Sinussatz",
      "Flächenrechner",
      "Geometrie",
      "Dreieckstyp",
    ],
    inputs: {
      method: {
        label: "Lösungsmethode",
        help: "Wählen Sie, wie Sie das Dreieck angeben: SSS (drei Seiten), SAS (zwei Seiten und eingeschlossener Winkel), ASA (zwei Winkel und eingeschlossene Seite), AAS (zwei Winkel und gegenüberliegende Seite) oder SSA (zwei Seiten und gegenüberliegender Winkel).",
      },
      sideA: { label: "Seite A", help: "Länge der Seite A." },
      sideB: { label: "Seite B", help: "Länge der Seite B." },
      sideC: { label: "Seite C", help: "Länge der Seite C." },
      angleA: { label: "Winkel A (Grad)", help: "Winkel A in Grad." },
      angleB: { label: "Winkel B (Grad)", help: "Winkel B in Grad." },
      angleC: { label: "Winkel C (Grad)", help: "Winkel C in Grad." },
    },
    outputs: {
      sideA: { label: "Seite A", help: "Länge der Seite A." },
      sideB: { label: "Seite B", help: "Länge der Seite B." },
      sideC: { label: "Seite C", help: "Länge der Seite C." },
      angleA: { label: "Winkel A", help: "Winkel A in Grad." },
      angleB: { label: "Winkel B", help: "Winkel B in Grad." },
      angleC: { label: "Winkel C", help: "Winkel C in Grad." },
      area: { label: "Fläche", help: "Die Fläche des Dreiecks." },
      perimeter: { label: "Umfang", help: "Die Summe aller drei Seiten." },
      triangleType: {
        label: "Dreieckstyp",
        help: "Klassifikation: gleichseitig, gleichschenklig, unregelmäßig oder rechtwinklig.",
      },
    },
    options: {
      method: {
        sss: "SSS (Seite-Seite-Seite)",
        sas: "SAS (Seite-Winkel-Seite)",
        asa: "ASA (Winkel-Seite-Winkel)",
        aas: "AAS (Winkel-Winkel-Seite)",
        ssa: "SSA (Seite-Seite-Winkel)",
      },
    },
    errors: {
      invalidTriangle: "Die angegebenen Seiten oder Winkel bilden kein gültiges Dreieck.",
      triangleInequalityViolated: "Dreiecksungleichung verletzt.",
      ambiguousSSA: "SSA-Fall hat keine eindeutige Lösung (mehrdeutiger Fall).",
    },
    faq: [
      {
        q: "Was ist der Kosinussatz?",
        a: "Der Kosinussatz besagt: c² = a² + b² - 2ab·cos(C). Er bezieht die Seiten eines Dreiecks auf einen seiner Winkel und wird verwendet, um fehlende Seiten oder Winkel zu finden.",
      },
      {
        q: "Was ist der Sinussatz?",
        a: "Der Sinussatz besagt: a/sin(A) = b/sin(B) = c/sin(C). Er bezieht die Seiten eines Dreiecks auf die Sinus ihrer gegenüberliegenden Winkel.",
      },
      {
        q: "Wie funktioniert Herons Formel?",
        a: "Herons Formel berechnet die Fläche aus drei Seitenlängen: A = √[s(s-a)(s-b)(s-c)], wobei s = (a+b+c)/2 der Halbumfang ist.",
      },
      {
        q: "Was bedeutet SSA (mehrdeutiger Fall)?",
        a: "Wenn Sie zwei Seiten und einen Winkel gegenüber einer davon haben, ist die Lösung möglicherweise nicht eindeutig. Je nach Werten können 0, 1 oder 2 gültige Dreiecke existieren.",
      },
      {
        q: "Welche verschiedenen Dreieckstypen gibt es?",
        a: "Gleichseitig (alle Seiten gleich), gleichschenklig (zwei Seiten gleich), unregelmäßig (alle Seiten verschieden) und rechtwinklig (ein 90°-Winkel).",
      },
    ],
  },

  fr: {
    title: "Calculateur de Triangle",
    short: "Résolvez des triangles avec des côtés et des angles. Calculez les côtés, angles, aire et type manquants.",
    description:
      "Calculateur de triangle gratuit utilisant la loi des cosinus, la loi des sinus et la formule de Heron. Résolvez les triangles SSS, SAS, ASA, AAS ou SSA et trouvez l'aire, le périmètre et le type de triangle.",
    keywords: [
      "calculateur de triangle",
      "solveur de triangle",
      "loi des cosinus",
      "loi des sinus",
      "calculateur d'aire",
      "géométrie",
      "type de triangle",
    ],
    inputs: {
      method: {
        label: "Méthode de résolution",
        help: "Choisissez comment spécifier le triangle: SSS (trois côtés), SAS (deux côtés et angle compris), ASA (deux angles et côté compris), AAS (deux angles et côté opposé) ou SSA (deux côtés et angle opposé).",
      },
      sideA: { label: "Côté A", help: "Longueur du côté A." },
      sideB: { label: "Côté B", help: "Longueur du côté B." },
      sideC: { label: "Côté C", help: "Longueur du côté C." },
      angleA: { label: "Angle A (degrés)", help: "Angle A en degrés." },
      angleB: { label: "Angle B (degrés)", help: "Angle B en degrés." },
      angleC: { label: "Angle C (degrés)", help: "Angle C en degrés." },
    },
    outputs: {
      sideA: { label: "Côté A", help: "Longueur du côté A." },
      sideB: { label: "Côté B", help: "Longueur du côté B." },
      sideC: { label: "Côté C", help: "Longueur du côté C." },
      angleA: { label: "Angle A", help: "Angle A en degrés." },
      angleB: { label: "Angle B", help: "Angle B en degrés." },
      angleC: { label: "Angle C", help: "Angle C en degrés." },
      area: { label: "Aire", help: "L'aire du triangle." },
      perimeter: { label: "Périmètre", help: "La somme des trois côtés." },
      triangleType: {
        label: "Type de Triangle",
        help: "Classification: équilatéral, isocèle, scalène ou rectangle.",
      },
    },
    options: {
      method: {
        sss: "SSS (Côté-Côté-Côté)",
        sas: "SAS (Côté-Angle-Côté)",
        asa: "ASA (Angle-Côté-Angle)",
        aas: "AAS (Angle-Angle-Côté)",
        ssa: "SSA (Côté-Côté-Angle)",
      },
    },
    errors: {
      invalidTriangle: "Les côtés ou les angles donnés ne forment pas un triangle valide.",
      triangleInequalityViolated: "Inégalité triangulaire violée.",
      ambiguousSSA: "Le cas SSA n'a pas de solution unique (cas ambigu).",
    },
    faq: [
      {
        q: "Qu'est-ce que la loi des cosinus?",
        a: "La loi des cosinus stipule: c² = a² + b² - 2ab·cos(C). Elle relie les côtés d'un triangle à l'un de ses angles et est utilisée pour trouver les côtés ou les angles manquants.",
      },
      {
        q: "Qu'est-ce que la loi des sinus?",
        a: "La loi des sinus stipule: a/sin(A) = b/sin(B) = c/sin(C). Elle relie les côtés d'un triangle aux sinus de leurs angles opposés.",
      },
      {
        q: "Comment fonctionne la formule de Heron?",
        a: "La formule de Heron calcule l'aire à partir de trois longueurs de côtés: A = √[s(s-a)(s-b)(s-c)] où s = (a+b+c)/2 est le semi-périmètre.",
      },
      {
        q: "Qu'est-ce que le cas SSA (cas ambigu)?",
        a: "Lorsque vous avez deux côtés et un angle opposé à l'un d'eux, la solution peut ne pas être unique. Selon les valeurs, il peut y avoir 0, 1 ou 2 triangles valides.",
      },
      {
        q: "Quels sont les différents types de triangles?",
        a: "Équilatéral (tous les côtés égaux), isocèle (deux côtés égaux), scalène (tous les côtés différents) et rectangle (un angle de 90°).",
      },
    ],
  },

  es: {
    title: "Calculadora de Triángulos",
    short: "Resuelve triángulos usando lados y ángulos. Calcula lados, ángulos, área y tipo faltantes.",
    description:
      "Calculadora de triángulos gratuita que utiliza la ley de cosenos, ley de senos y fórmula de Herón. Resuelve triángulos SSS, SAS, ASA, AAS o SSA y encuentra el área, perímetro y tipo de triángulo.",
    keywords: [
      "calculadora de triángulo",
      "solucionador de triángulo",
      "ley de cosenos",
      "ley de senos",
      "calculadora de área",
      "geometría",
      "tipo de triángulo",
    ],
    inputs: {
      method: {
        label: "Método de solución",
        help: "Elija cómo especificar el triángulo: SSS (tres lados), SAS (dos lados y ángulo incluido), ASA (dos ángulos y lado incluido), AAS (dos ángulos y lado opuesto) o SSA (dos lados y ángulo opuesto).",
      },
      sideA: { label: "Lado A", help: "Longitud del lado A." },
      sideB: { label: "Lado B", help: "Longitud del lado B." },
      sideC: { label: "Lado C", help: "Longitud del lado C." },
      angleA: { label: "Ángulo A (grados)", help: "Ángulo A en grados." },
      angleB: { label: "Ángulo B (grados)", help: "Ángulo B en grados." },
      angleC: { label: "Ángulo C (grados)", help: "Ángulo C en grados." },
    },
    outputs: {
      sideA: { label: "Lado A", help: "Longitud del lado A." },
      sideB: { label: "Lado B", help: "Longitud del lado B." },
      sideC: { label: "Lado C", help: "Longitud del lado C." },
      angleA: { label: "Ángulo A", help: "Ángulo A en grados." },
      angleB: { label: "Ángulo B", help: "Ángulo B en grados." },
      angleC: { label: "Ángulo C", help: "Ángulo C en grados." },
      area: { label: "Área", help: "El área del triángulo." },
      perimeter: { label: "Perímetro", help: "La suma de los tres lados." },
      triangleType: {
        label: "Tipo de Triángulo",
        help: "Clasificación: equilátero, isósceles, escaleno o rectángulo.",
      },
    },
    options: {
      method: {
        sss: "SSS (Lado-Lado-Lado)",
        sas: "SAS (Lado-Ángulo-Lado)",
        asa: "ASA (Ángulo-Lado-Ángulo)",
        aas: "AAS (Ángulo-Ángulo-Lado)",
        ssa: "SSA (Lado-Lado-Ángulo)",
      },
    },
    errors: {
      invalidTriangle: "Los lados o ángulos dados no forman un triángulo válido.",
      triangleInequalityViolated: "Desigualdad triangular violada.",
      ambiguousSSA: "El caso SSA no tiene una solución única (caso ambiguo).",
    },
    faq: [
      {
        q: "¿Qué es la ley de cosenos?",
        a: "La ley de cosenos establece: c² = a² + b² - 2ab·cos(C). Relaciona los lados de un triángulo con uno de sus ángulos y se utiliza para encontrar lados o ángulos faltantes.",
      },
      {
        q: "¿Qué es la ley de senos?",
        a: "La ley de senos establece: a/sin(A) = b/sin(B) = c/sin(C). Relaciona los lados de un triángulo con los senos de sus ángulos opuestos.",
      },
      {
        q: "¿Cómo funciona la fórmula de Herón?",
        a: "La fórmula de Herón calcula el área a partir de tres longitudes de lados: A = √[s(s-a)(s-b)(s-c)] donde s = (a+b+c)/2 es el semiperímetro.",
      },
      {
        q: "¿Qué significa el caso SSA (caso ambiguo)?",
        a: "Cuando tienes dos lados y un ángulo opuesto a uno de ellos, la solución puede no ser única. Dependiendo de los valores, puede haber 0, 1 o 2 triángulos válidos.",
      },
      {
        q: "¿Cuáles son los diferentes tipos de triángulos?",
        a: "Equilátero (todos los lados iguales), isósceles (dos lados iguales), escaleno (todos los lados diferentes) y rectángulo (un ángulo de 90°).",
      },
    ],
  },

  it: {
    title: "Calcolatrice per Triangoli",
    short: "Risolvi i triangoli utilizzando lati e angoli. Calcola i lati, gli angoli, l'area e il tipo mancanti.",
    description:
      "Calcolatrice gratuita per triangoli utilizzando la legge dei coseni, la legge dei seni e la formula di Erone. Risolvi triangoli SSS, SAS, ASA, AAS o SSA e trova l'area, il perimetro e il tipo di triangolo.",
    keywords: [
      "calcolatrice per triangoli",
      "solutore di triangoli",
      "legge dei coseni",
      "legge dei seni",
      "calcolatrice area",
      "geometria",
      "tipo di triangolo",
    ],
    inputs: {
      method: {
        label: "Metodo di soluzione",
        help: "Scegli come specificare il triangolo: SSS (tre lati), SAS (due lati e angolo incluso), ASA (due angoli e lato incluso), AAS (due angoli e lato opposto) o SSA (due lati e angolo opposto).",
      },
      sideA: { label: "Lato A", help: "Lunghezza del lato A." },
      sideB: { label: "Lato B", help: "Lunghezza del lato B." },
      sideC: { label: "Lato C", help: "Lunghezza del lato C." },
      angleA: { label: "Angolo A (gradi)", help: "Angolo A in gradi." },
      angleB: { label: "Angolo B (gradi)", help: "Angolo B in gradi." },
      angleC: { label: "Angolo C (gradi)", help: "Angolo C in gradi." },
    },
    outputs: {
      sideA: { label: "Lato A", help: "Lunghezza del lato A." },
      sideB: { label: "Lato B", help: "Lunghezza del lato B." },
      sideC: { label: "Lato C", help: "Lunghezza del lato C." },
      angleA: { label: "Angolo A", help: "Angolo A in gradi." },
      angleB: { label: "Angolo B", help: "Angolo B in gradi." },
      angleC: { label: "Angolo C", help: "Angolo C in gradi." },
      area: { label: "Area", help: "L'area del triangolo." },
      perimeter: { label: "Perimetro", help: "La somma di tutti e tre i lati." },
      triangleType: {
        label: "Tipo di Triangolo",
        help: "Classificazione: equilatero, isoscele, scaleno o rettangolo.",
      },
    },
    options: {
      method: {
        sss: "SSS (Lato-Lato-Lato)",
        sas: "SAS (Lato-Angolo-Lato)",
        asa: "ASA (Angolo-Lato-Angolo)",
        aas: "AAS (Angolo-Angolo-Lato)",
        ssa: "SSA (Lato-Lato-Angolo)",
      },
    },
    errors: {
      invalidTriangle: "I lati o gli angoli dati non formano un triangolo valido.",
      triangleInequalityViolated: "Disuguaglianza triangolare violata.",
      ambiguousSSA: "Il caso SSA non ha una soluzione unica (caso ambiguo).",
    },
    faq: [
      {
        q: "Cos'è la legge dei coseni?",
        a: "La legge dei coseni afferma: c² = a² + b² - 2ab·cos(C). Mette in relazione i lati di un triangolo con uno dei suoi angoli ed è utilizzata per trovare i lati o gli angoli mancanti.",
      },
      {
        q: "Cos'è la legge dei seni?",
        a: "La legge dei seni afferma: a/sin(A) = b/sin(B) = c/sin(C). Mette in relazione i lati di un triangolo con i seni dei loro angoli opposti.",
      },
      {
        q: "Come funziona la formula di Erone?",
        a: "La formula di Erone calcola l'area da tre lunghezze di lati: A = √[s(s-a)(s-b)(s-c)] dove s = (a+b+c)/2 è il semiperimetro.",
      },
      {
        q: "Cosa significa il caso SSA (caso ambiguo)?",
        a: "Quando hai due lati e un angolo opposto a uno di essi, la soluzione potrebbe non essere unica. A seconda dei valori, possono esserci 0, 1 o 2 triangoli validi.",
      },
      {
        q: "Quali sono i diversi tipi di triangoli?",
        a: "Equilatero (tutti i lati uguali), isoscele (due lati uguali), scaleno (tutti i lati diversi) e rettangolo (un angolo di 90°).",
      },
    ],
  },

  ar: {
    title: "حاسبة المثلثات",
    short: "حل المثلثات باستخدام الأضلاع والزوايا. احسب الأضلاع والزوايا والمساحة والنوع المفقودة.",
    description:
      "حاسبة مثلثات مجانية تستخدم قانون الجيب وقانون جيب التمام وصيغة هيرون. حل المثلثات SSS و SAS و ASA و AAS و SSA وابحث عن المساحة والمحيط ونوع المثلث.",
    keywords: [
      "حاسبة المثلثات",
      "حل المثلثات",
      "قانون جيب التمام",
      "قانون الجيب",
      "حاسبة المساحة",
      "الهندسة",
      "نوع المثلث",
    ],
    inputs: {
      method: {
        label: "طريقة الحل",
        help: "اختر كيفية تحديد المثلث: SSS (ثلاثة أضلاع)، SAS (ضلعان وزاوية محصورة)، ASA (زاويتان وضلع محصور)، AAS (زاويتان وضلع متقابل) أو SSA (ضلعان وزاوية متقابلة).",
      },
      sideA: { label: "الضلع أ", help: "طول الضلع أ." },
      sideB: { label: "الضلع ب", help: "طول الضلع ب." },
      sideC: { label: "الضلع ج", help: "طول الضلع ج." },
      angleA: { label: "الزاوية أ (درجات)", help: "الزاوية أ بالدرجات." },
      angleB: { label: "الزاوية ب (درجات)", help: "الزاوية ب بالدرجات." },
      angleC: { label: "الزاوية ج (درجات)", help: "الزاوية ج بالدرجات." },
    },
    outputs: {
      sideA: { label: "الضلع أ", help: "طول الضلع أ." },
      sideB: { label: "الضلع ب", help: "طول الضلع ب." },
      sideC: { label: "الضلع ج", help: "طول الضلع ج." },
      angleA: { label: "الزاوية أ", help: "الزاوية أ بالدرجات." },
      angleB: { label: "الزاوية ب", help: "الزاوية ب بالدرجات." },
      angleC: { label: "الزاوية ج", help: "الزاوية ج بالدرجات." },
      area: { label: "المساحة", help: "مساحة المثلث." },
      perimeter: { label: "المحيط", help: "مجموع الأضلاع الثلاثة." },
      triangleType: {
        label: "نوع المثلث",
        help: "التصنيف: متساوي الأضلاع، متساوي الساقين، مختلف الأضلاع أو قائم الزاوية.",
      },
    },
    options: {
      method: {
        sss: "SSS (ضلع-ضلع-ضلع)",
        sas: "SAS (ضلع-زاوية-ضلع)",
        asa: "ASA (زاوية-ضلع-زاوية)",
        aas: "AAS (زاوية-زاوية-ضلع)",
        ssa: "SSA (ضلع-ضلع-زاوية)",
      },
    },
    errors: {
      invalidTriangle: "الأضلاع أو الزوايا المعطاة لا تشكل مثلثاً صحيحاً.",
      triangleInequalityViolated: "انتهاك متراجحة المثلث.",
      ambiguousSSA: "حالة SSA ليس لها حل فريد (حالة غامضة).",
    },
    faq: [
      {
        q: "ما قانون جيب التمام؟",
        a: "ينص قانون جيب التمام على: c² = a² + b² - 2ab·cos(C). يربط أضلاع المثلث بإحدى زواياه ويُستخدم للعثور على الأضلاع أو الزوايا المفقودة.",
      },
      {
        q: "ما قانون الجيب؟",
        a: "ينص قانون الجيب على: a/sin(A) = b/sin(B) = c/sin(C). يربط أضلاع المثلث بجيوب زواياه المتقابلة.",
      },
      {
        q: "كيف تعمل صيغة هيرون؟",
        a: "تحسب صيغة هيرون المساحة من ثلاثة أطوال أضلاع: A = √[s(s-a)(s-b)(s-c)] حيث s = (a+b+c)/2 هو نصف المحيط.",
      },
      {
        q: "ماذا يعني حالة SSA (الحالة الغامضة)؟",
        a: "عندما يكون لديك ضلعان وزاوية متقابلة لأحدهما، قد لا يكون الحل فريداً. حسب القيم، قد يكون هناك 0 أو 1 أو 2 مثلث صحيح.",
      },
      {
        q: "ما أنواع المثلثات المختلفة؟",
        a: "متساوي الأضلاع (جميع الأضلاع متساوية)، متساوي الساقين (ضلعان متساويان)، مختلف الأضلاع (جميع الأضلاع مختلفة) وقائم الزاوية (زاوية واحدة بقياس 90°).",
      },
    ],
  },

  ru: {
    title: "Калькулятор треугольника",
    short: "Решайте треугольники, используя стороны и углы. Найдите недостающие стороны, углы, площадь и тип.",
    description:
      "Бесплатный калькулятор треугольников с использованием закона косинусов, закона синусов и формулы Герона. Решайте треугольники SSS, SAS, ASA, AAS или SSA и найдите площадь, периметр и тип треугольника.",
    keywords: [
      "калькулятор треугольника",
      "решение треугольников",
      "закон косинусов",
      "закон синусов",
      "расчет площади",
      "геометрия",
      "тип треугольника",
    ],
    inputs: {
      method: {
        label: "Метод решения",
        help: "Выберите способ задания треугольника: SSS (три стороны), SAS (две стороны и включенный угол), ASA (два угла и включенная сторона), AAS (два угла и противолежащая сторона) или SSA (две стороны и противолежащий угол).",
      },
      sideA: { label: "Сторона A", help: "Длина стороны A." },
      sideB: { label: "Сторона B", help: "Длина стороны B." },
      sideC: { label: "Сторона C", help: "Длина стороны C." },
      angleA: { label: "Угол A (градусы)", help: "Угол A в градусах." },
      angleB: { label: "Угол B (градусы)", help: "Угол B в градусах." },
      angleC: { label: "Угол C (градусы)", help: "Угол C в градусах." },
    },
    outputs: {
      sideA: { label: "Сторона A", help: "Длина стороны A." },
      sideB: { label: "Сторона B", help: "Длина стороны B." },
      sideC: { label: "Сторона C", help: "Длина стороны C." },
      angleA: { label: "Угол A", help: "Угол A в градусах." },
      angleB: { label: "Угол B", help: "Угол B в градусах." },
      angleC: { label: "Угол C", help: "Угол C в градусах." },
      area: { label: "Площадь", help: "Площадь треугольника." },
      perimeter: { label: "Периметр", help: "Сумма всех трех сторон." },
      triangleType: {
        label: "Тип треугольника",
        help: "Классификация: равносторонний, равнобедренный, разносторонний или прямоугольный.",
      },
    },
    options: {
      method: {
        sss: "SSS (Сторона-Сторона-Сторона)",
        sas: "SAS (Сторона-Угол-Сторона)",
        asa: "ASA (Угол-Сторона-Угол)",
        aas: "AAS (Угол-Угол-Сторона)",
        ssa: "SSA (Сторона-Сторона-Угол)",
      },
    },
    errors: {
      invalidTriangle: "Заданные стороны или углы не образуют валидный треугольник.",
      triangleInequalityViolated: "Нарушено неравенство треугольника.",
      ambiguousSSA: "Случай SSA не имеет уникального решения (неоднозначный случай).",
    },
    faq: [
      {
        q: "Что такое закон косинусов?",
        a: "Закон косинусов гласит: c² = a² + b² - 2ab·cos(C). Он связывает стороны треугольника с одним из его углов и используется для нахождения недостающих сторон или углов.",
      },
      {
        q: "Что такое закон синусов?",
        a: "Закон синусов гласит: a/sin(A) = b/sin(B) = c/sin(C). Он связывает стороны треугольника с синусами противолежащих углов.",
      },
      {
        q: "Как работает формула Герона?",
        a: "Формула Герона вычисляет площадь из трех длин сторон: A = √[s(s-a)(s-b)(s-c)], где s = (a+b+c)/2 — полупериметр.",
      },
      {
        q: "Что означает случай SSA (неоднозначный случай)?",
        a: "Когда у вас есть две стороны и угол, противолежащий одной из них, решение может быть не уникальным. В зависимости от значений может быть 0, 1 или 2 валидных треугольника.",
      },
      {
        q: "Какие существуют различные типы треугольников?",
        a: "Равносторонний (все стороны равны), равнобедренный (две стороны равны), разносторонний (все стороны разные) и прямоугольный (один угол 90°).",
      },
    ],
  },

  zh: {
    title: "三角形计算器",
    short: "使用边和角来解决三角形问题。计算缺失的边、角、面积和类型。",
    description:
      "使用余弦定理、正弦定理和海伦公式的免费三角形计算器。解决SSS、SAS、ASA、AAS或SSA三角形，并求出面积、周长和三角形类型。",
    keywords: [
      "三角形计算器",
      "三角形求解器",
      "余弦定理",
      "正弦定理",
      "面积计算器",
      "几何",
      "三角形类型",
    ],
    inputs: {
      method: {
        label: "求解方法",
        help: "选择如何指定三角形：SSS（三条边）、SAS（两条边和夹角）、ASA（两个角和夹边）、AAS（两个角和对边）或SSA（两条边和对角）。",
      },
      sideA: { label: "边A", help: "边A的长度。" },
      sideB: { label: "边B", help: "边B的长度。" },
      sideC: { label: "边C", help: "边C的长度。" },
      angleA: { label: "角A（度数）", help: "角A的度数。" },
      angleB: { label: "角B（度数）", help: "角B的度数。" },
      angleC: { label: "角C（度数）", help: "角C的度数。" },
    },
    outputs: {
      sideA: { label: "边A", help: "边A的长度。" },
      sideB: { label: "边B", help: "边B的长度。" },
      sideC: { label: "边C", help: "边C的长度。" },
      angleA: { label: "角A", help: "角A的度数。" },
      angleB: { label: "角B", help: "角B的度数。" },
      angleC: { label: "角C", help: "角C的度数。" },
      area: { label: "面积", help: "三角形的面积。" },
      perimeter: { label: "周长", help: "三条边的总和。" },
      triangleType: {
        label: "三角形类型",
        help: "分类：等边、等腰、不等边或直角。",
      },
    },
    options: {
      method: {
        sss: "SSS（边-边-边）",
        sas: "SAS（边-角-边）",
        asa: "ASA（角-边-角）",
        aas: "AAS（角-角-边）",
        ssa: "SSA（边-边-角）",
      },
    },
    errors: {
      invalidTriangle: "给定的边或角不能构成有效的三角形。",
      triangleInequalityViolated: "三角形不等式被违反。",
      ambiguousSSA: "SSA情况没有唯一解（不确定情况）。",
    },
    faq: [
      {
        q: "什么是余弦定理？",
        a: "余弦定理规定：c² = a² + b² - 2ab·cos(C)。它将三角形的边与其中一个角相联系，用于找到缺失的边或角。",
      },
      {
        q: "什么是正弦定理？",
        a: "正弦定理规定：a/sin(A) = b/sin(B) = c/sin(C)。它将三角形的边与其对角的正弦相联系。",
      },
      {
        q: "海伦公式如何工作？",
        a: "海伦公式从三条边的长度计算面积：A = √[s(s-a)(s-b)(s-c)]，其中s = (a+b+c)/2是半周长。",
      },
      {
        q: "SSA（不确定情况）是什么意思？",
        a: "当您有两条边和其中一条的对角时，解可能不是唯一的。根据数值，可能有0、1或2个有效的三角形。",
      },
      {
        q: "三角形有哪些不同的类型？",
        a: "等边三角形（所有边相等）、等腰三角形（两条边相等）、不等边三角形（所有边不同）和直角三角形（一个90°角）。",
      },
    ],
  },

  ja: {
    title: "三角形計算機",
    short: "辺と角を使用して三角形を解きます。不足している辺、角、面積、タイプを計算します。",
    description:
      "余弦定理、正弦定理、ヘロンの公式を使用した無料の三角形計算機。SSS、SAS、ASA、AAS、またはSSA三角形を解き、面積、周囲、および三角形の種類を求めます。",
    keywords: [
      "三角形計算機",
      "三角形ソルバー",
      "余弦定理",
      "正弦定理",
      "面積計算機",
      "幾何学",
      "三角形の種類",
    ],
    inputs: {
      method: {
        label: "解法方法",
        help: "三角形の指定方法を選択: SSS（3辺）、SAS（2辺と挟まれた角）、ASA（2角と挟まれた辺）、AAS（2角と対辺）またはSSA（2辺と対角）。",
      },
      sideA: { label: "辺A", help: "辺Aの長さ。" },
      sideB: { label: "辺B", help: "辺Bの長さ。" },
      sideC: { label: "辺C", help: "辺Cの長さ。" },
      angleA: { label: "角A（度）", help: "角A（度数）。" },
      angleB: { label: "角B（度）", help: "角B（度数）。" },
      angleC: { label: "角C（度）", help: "角C（度数）。" },
    },
    outputs: {
      sideA: { label: "辺A", help: "辺Aの長さ。" },
      sideB: { label: "辺B", help: "辺Bの長さ。" },
      sideC: { label: "辺C", help: "辺Cの長さ。" },
      angleA: { label: "角A", help: "角A（度数）。" },
      angleB: { label: "角B", help: "角B（度数）。" },
      angleC: { label: "角C", help: "角C（度数）。" },
      area: { label: "面積", help: "三角形の面積。" },
      perimeter: { label: "周囲", help: "3辺の合計。" },
      triangleType: {
        label: "三角形の種類",
        help: "分類：正三角形、二等辺三角形、不等辺三角形、または直角三角形。",
      },
    },
    options: {
      method: {
        sss: "SSS（辺-辺-辺）",
        sas: "SAS（辺-角-辺）",
        asa: "ASA（角-辺-角）",
        aas: "AAS（角-角-辺）",
        ssa: "SSA（辺-辺-角）",
      },
    },
    errors: {
      invalidTriangle: "指定された辺または角は有効な三角形を形成しません。",
      triangleInequalityViolated: "三角形の不等式が違反されています。",
      ambiguousSSA: "SSAの場合は一意の解がありません（曖昧な場合）。",
    },
    faq: [
      {
        q: "余弦定理とは何ですか？",
        a: "余弦定理は次のように述べています：c² = a² + b² - 2ab·cos(C)。三角形の辺とその角を関連付け、不足している辺または角を見つけるのに使用されます。",
      },
      {
        q: "正弦定理とは何ですか？",
        a: "正弦定理は次のように述べています：a/sin(A) = b/sin(B) = c/sin(C)。三角形の辺とその対角の正弦を関連付けます。",
      },
      {
        q: "ヘロンの公式はどのように機能しますか？",
        a: "ヘロンの公式は3辺の長さから面積を計算します：A = √[s(s-a)(s-b)(s-c)]、ここでs = (a+b+c)/2は半周。",
      },
      {
        q: "SSA（曖昧な場合）は何を意味しますか？",
        a: "2辺とその一つの対角がある場合、解が唯一でない可能性があります。値によって、0、1、または2個の有効な三角形が存在する可能性があります。",
      },
      {
        q: "異なる種類の三角形は何ですか？",
        a: "正三角形（全辺が等しい）、二等辺三角形（2辺が等しい）、不等辺三角形（全辺が異なる）、直角三角形（1つの90°角）。",
      },
    ],
  },

  ko: {
    title: "삼각형 계산기",
    short: "변과 각을 사용하여 삼각형을 풉니다. 누락된 변, 각, 면적 및 유형을 계산합니다.",
    description:
      "코사인 법칙, 사인 법칙 및 헤론의 공식을 사용하는 무료 삼각형 계산기. SSS, SAS, ASA, AAS 또는 SSA 삼각형을 풀고 면적, 둘레 및 삼각형 유형을 찾습니다.",
    keywords: [
      "삼각형 계산기",
      "삼각형 풀이",
      "코사인 법칙",
      "사인 법칙",
      "면적 계산기",
      "기하학",
      "삼각형 유형",
    ],
    inputs: {
      method: {
        label: "풀이 방법",
        help: "삼각형을 지정하는 방법을 선택: SSS(세 변), SAS(두 변과 포함 각), ASA(두 각과 포함 변), AAS(두 각과 대변) 또는 SSA(두 변과 대각).",
      },
      sideA: { label: "변 A", help: "변 A의 길이." },
      sideB: { label: "변 B", help: "변 B의 길이." },
      sideC: { label: "변 C", help: "변 C의 길이." },
      angleA: { label: "각 A(도)", help: "각 A(도 단위)." },
      angleB: { label: "각 B(도)", help: "각 B(도 단위)." },
      angleC: { label: "각 C(도)", help: "각 C(도 단위)." },
    },
    outputs: {
      sideA: { label: "변 A", help: "변 A의 길이." },
      sideB: { label: "변 B", help: "변 B의 길이." },
      sideC: { label: "변 C", help: "변 C의 길이." },
      angleA: { label: "각 A", help: "각 A(도 단위)." },
      angleB: { label: "각 B", help: "각 B(도 단위)." },
      angleC: { label: "각 C", help: "각 C(도 단위)." },
      area: { label: "면적", help: "삼각형의 면적." },
      perimeter: { label: "둘레", help: "세 변의 합." },
      triangleType: {
        label: "삼각형 유형",
        help: "분류: 정삼각형, 이등변삼각형, 부등변삼각형 또는 직각삼각형.",
      },
    },
    options: {
      method: {
        sss: "SSS(변-변-변)",
        sas: "SAS(변-각-변)",
        asa: "ASA(각-변-각)",
        aas: "AAS(각-각-변)",
        ssa: "SSA(변-변-각)",
      },
    },
    errors: {
      invalidTriangle: "주어진 변 또는 각이 유효한 삼각형을 형성하지 않습니다.",
      triangleInequalityViolated: "삼각형 부등식이 위반되었습니다.",
      ambiguousSSA: "SSA 경우는 고유 해가 없습니다(모호한 경우).",
    },
    faq: [
      {
        q: "코사인 법칙이란 무엇입니까?",
        a: "코사인 법칙은 다음과 같이 나타냅니다: c² = a² + b² - 2ab·cos(C). 삼각형의 변을 각과 연결하며 누락된 변이나 각을 찾는 데 사용됩니다.",
      },
      {
        q: "사인 법칙이란 무엇입니까?",
        a: "사인 법칙은 다음과 같이 나타냅니다: a/sin(A) = b/sin(B) = c/sin(C). 삼각형의 변을 대각의 정현과 연결합니다.",
      },
      {
        q: "헤론의 공식은 어떻게 작동합니까?",
        a: "헤론의 공식은 세 변의 길이에서 면적을 계산합니다: A = √[s(s-a)(s-b)(s-c)], 여기서 s = (a+b+c)/2는 반둘레입니다.",
      },
      {
        q: "SSA(모호한 경우)는 무엇을 의미합니까?",
        a: "두 변과 하나의 대각이 있을 때 해가 고유하지 않을 수 있습니다. 값에 따라 0, 1 또는 2개의 유효한 삼각형이 존재할 수 있습니다.",
      },
      {
        q: "다양한 종류의 삼각형은 무엇입니까?",
        a: "정삼각형(모든 변이 같음), 이등변삼각형(두 변이 같음), 부등변삼각형(모든 변이 다름), 직각삼각형(하나의 90° 각).",
      },
    ],
  },

  hi: {
    title: "त्रिभुज कैलकुलेटर",
    short: "भुजाओं और कोणों का उपयोग करके त्रिभुज हल करें। लुप्त भुजाओं, कोणों, क्षेत्र और प्रकार की गणना करें।",
    description:
      "कोसाइन नियम, साइन नियम और हेरॉन के सूत्र का उपयोग करने वाला मुफ़्त त्रिभुज कैलकुलेटर। SSS, SAS, ASA, AAS या SSA त्रिभुज को हल करें और क्षेत्र, परिमाप और त्रिभुज प्रकार खोजें।",
    keywords: [
      "त्रिभुज कैलकुलेटर",
      "त्रिभुज समाधान",
      "कोसाइन नियम",
      "साइन नियम",
      "क्षेत्र कैलकुलेटर",
      "ज्यामिति",
      "त्रिभुज प्रकार",
    ],
    inputs: {
      method: {
        label: "समाधान विधि",
        help: "त्रिभुज को निर्दिष्ट करने का तरीका चुनें: SSS (तीन भुजाएं), SAS (दो भुजाएं और अंतर्निहित कोण), ASA (दो कोण और अंतर्निहित भुजा), AAS (दो कोण और विपरीत भुजा) या SSA (दो भुजाएं और विपरीत कोण)।",
      },
      sideA: { label: "भुजा A", help: "भुजा A की लंबाई।" },
      sideB: { label: "भुजा B", help: "भुजा B की लंबाई।" },
      sideC: { label: "भुजा C", help: "भुजा C की लंबाई।" },
      angleA: { label: "कोण A (डिग्री)", help: "कोण A डिग्री में।" },
      angleB: { label: "कोण B (डिग्री)", help: "कोण B डिग्री में।" },
      angleC: { label: "कोण C (डिग्री)", help: "कोण C डिग्री में।" },
    },
    outputs: {
      sideA: { label: "भुजा A", help: "भुजा A की लंबाई।" },
      sideB: { label: "भुजा B", help: "भुजा B की लंबाई।" },
      sideC: { label: "भुजा C", help: "भुजा C की लंबाई।" },
      angleA: { label: "कोण A", help: "कोण A डिग्री में।" },
      angleB: { label: "कोण B", help: "कोण B डिग्री में।" },
      angleC: { label: "कोण C", help: "कोण C डिग्री में।" },
      area: { label: "क्षेत्र", help: "त्रिभुज का क्षेत्र।" },
      perimeter: { label: "परिमाप", help: "तीनों भुजाओं का योग।" },
      triangleType: {
        label: "त्रिभुज प्रकार",
        help: "वर्गीकरण: समबाहु, समद्विबाहु, विषमबाहु या समकोण।",
      },
    },
    options: {
      method: {
        sss: "SSS (भुजा-भुजा-भुजा)",
        sas: "SAS (भुजा-कोण-भुजा)",
        asa: "ASA (कोण-भुजा-कोण)",
        aas: "AAS (कोण-कोण-भुजा)",
        ssa: "SSA (भुजा-भुजा-कोण)",
      },
    },
    errors: {
      invalidTriangle: "दी गई भुजाएं या कोण एक मान्य त्रिभुज नहीं बनाते हैं।",
      triangleInequalityViolated: "त्रिभुज असमानता का उल्लंघन।",
      ambiguousSSA: "SSA केस का कोई अद्वितीय समाधान नहीं है (अस्पष्ट केस)।",
    },
    faq: [
      {
        q: "कोसाइन नियम क्या है?",
        a: "कोसाइन नियम कहता है: c² = a² + b² - 2ab·cos(C)। यह त्रिभुज की भुजाओं को इसके कोणों से संबंधित करता है और लुप्त भुजाओं या कोणों को खोजने के लिए उपयोग किया जाता है।",
      },
      {
        q: "साइन नियम क्या है?",
        a: "साइन नियम कहता है: a/sin(A) = b/sin(B) = c/sin(C)। यह त्रिभुज की भुजाओं को उनके विपरीत कोणों की साइन से संबंधित करता है।",
      },
      {
        q: "हेरॉन का सूत्र कैसे काम करता है?",
        a: "हेरॉन का सूत्र तीन भुजा की लंबाई से क्षेत्र की गणना करता है: A = √[s(s-a)(s-b)(s-c)] जहां s = (a+b+c)/2 अर्ध-परिमाप है।",
      },
      {
        q: "SSA (अस्पष्ट केस) का क्या अर्थ है?",
        a: "जब आपके पास दो भुजाएं और इनमें से किसी की विपरीत कोण हो, तो समाधान अद्वितीय नहीं हो सकता। मानों के आधार पर, 0, 1 या 2 मान्य त्रिभुज हो सकते हैं।",
      },
      {
        q: "त्रिभुज के विभिन्न प्रकार क्या हैं?",
        a: "समबाहु (सभी भुजाएं बराबर), समद्विबाहु (दो भुजाएं बराबर), विषमबाहु (सभी भुजाएं अलग) और समकोण (एक 90° कोण)।",
      },
    ],
  },
};

export default i18n;
