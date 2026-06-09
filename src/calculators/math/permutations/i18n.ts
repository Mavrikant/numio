import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Permutations Calculator (nPr)",
    short:
      "Count how many ordered arrangements of r items you can make from a set of n, with or without repetition.",
    description:
      "Free permutations calculator. Compute nPr = n!/(n−r)! for arrangements where order matters, or n^r when repetition is allowed.",
    keywords: [
      "permutations calculator",
      "nPr calculator",
      "permutation formula",
      "arrangements",
      "combinatorics",
      "ordered selections",
    ],
    inputs: {
      n: { label: "Total items (n)", help: "The size of the set you are choosing from." },
      r: { label: "Items chosen (r)", help: "How many items are arranged in order." },
      allowRepetition: {
        label: "Allow repetition",
        help: "On: an item can be reused (n^r). Off: each item used at most once (nPr).",
      },
    },
    outputs: {
      permutations: { label: "Permutations", help: "Number of distinct ordered arrangements." },
    },
    faq: [
      {
        q: "What is a permutation?",
        a: "A permutation is an ordered arrangement of items. Unlike combinations, the order matters: ABC and CBA are two different permutations of the same three letters.",
      },
      {
        q: "What is the difference between nPr and nCr?",
        a: "nPr counts ordered arrangements, while nCr (combinations) counts unordered selections. Because each combination can be ordered in r! ways, nPr = nCr × r!.",
      },
      {
        q: "When should I allow repetition?",
        a: "Allow repetition when an item can appear more than once, such as digits in a PIN. The count is then n^r. Without repetition (e.g. seating distinct people), use nPr = n!/(n−r)!.",
      },
    ],
  },
  tr: {
    title: "Permütasyon Hesaplama (nPr)",
    short:
      "n elemanlı bir kümeden r elemanın kaç farklı sıralı dizilişini yapabileceğinizi hesaplayın.",
    description:
      "Ücretsiz permütasyon hesaplayıcı. Sıranın önemli olduğu dizilişler için nPr = n!/(n−r)! veya tekrara izin verildiğinde n^r hesaplar.",
    keywords: [
      "permütasyon hesaplama",
      "nPr hesaplama",
      "permütasyon formülü",
      "diziliş",
      "kombinatorik",
      "sıralı seçim",
    ],
    inputs: {
      n: { label: "Toplam eleman (n)", help: "Seçim yaptığınız kümenin boyutu." },
      r: { label: "Seçilen eleman (r)", help: "Sıralı olarak dizilen eleman sayısı." },
      allowRepetition: {
        label: "Tekrara izin ver",
        help: "Açık: bir eleman tekrar kullanılabilir (n^r). Kapalı: her eleman en fazla bir kez (nPr).",
      },
    },
    outputs: {
      permutations: { label: "Permütasyon", help: "Farklı sıralı diziliş sayısı." },
    },
  },
  de: {
    title: "Permutationsrechner (nPr)",
    short:
      "Berechnen Sie, wie viele geordnete Anordnungen von r Elementen aus n möglich sind – mit oder ohne Wiederholung.",
    description:
      "Kostenloser Permutationsrechner. Berechnet nPr = n!/(n−r)! für geordnete Anordnungen oder n^r, wenn Wiederholung erlaubt ist.",
    keywords: [
      "permutationsrechner",
      "nPr berechnen",
      "permutation formel",
      "anordnungen",
      "kombinatorik",
      "geordnete auswahl",
    ],
    inputs: {
      n: { label: "Elemente gesamt (n)", help: "Größe der Menge, aus der gewählt wird." },
      r: { label: "Gewählte Elemente (r)", help: "Wie viele Elemente geordnet angeordnet werden." },
      allowRepetition: {
        label: "Wiederholung erlauben",
        help: "An: ein Element darf mehrfach vorkommen (n^r). Aus: jedes höchstens einmal (nPr).",
      },
    },
    outputs: {
      permutations: { label: "Permutationen", help: "Anzahl unterschiedlicher geordneter Anordnungen." },
    },
  },
  fr: {
    title: "Calculateur de permutations (nPr)",
    short:
      "Comptez le nombre d'arrangements ordonnés de r éléments parmi n, avec ou sans répétition.",
    description:
      "Calculateur de permutations gratuit. Calcule nPr = n!/(n−r)! pour les arrangements où l'ordre compte, ou n^r quand la répétition est autorisée.",
    keywords: [
      "calculateur permutations",
      "nPr",
      "formule permutation",
      "arrangements",
      "combinatoire",
      "sélection ordonnée",
    ],
    inputs: {
      n: { label: "Éléments au total (n)", help: "Taille de l'ensemble dans lequel on choisit." },
      r: { label: "Éléments choisis (r)", help: "Nombre d'éléments arrangés dans l'ordre." },
      allowRepetition: {
        label: "Autoriser la répétition",
        help: "Activé : un élément peut se répéter (n^r). Désactivé : chacun au plus une fois (nPr).",
      },
    },
    outputs: {
      permutations: { label: "Permutations", help: "Nombre d'arrangements ordonnés distincts." },
    },
  },
  es: {
    title: "Calculadora de permutaciones (nPr)",
    short:
      "Cuenta cuántos arreglos ordenados de r elementos puedes formar a partir de n, con o sin repetición.",
    description:
      "Calculadora de permutaciones gratuita. Calcula nPr = n!/(n−r)! para arreglos donde importa el orden, o n^r cuando se permite la repetición.",
    keywords: [
      "calculadora permutaciones",
      "nPr",
      "fórmula permutación",
      "arreglos ordenados",
      "combinatoria",
      "selección ordenada",
    ],
    inputs: {
      n: { label: "Elementos totales (n)", help: "Tamaño del conjunto del que se elige." },
      r: { label: "Elementos elegidos (r)", help: "Cuántos elementos se ordenan." },
      allowRepetition: {
        label: "Permitir repetición",
        help: "Activado: un elemento puede repetirse (n^r). Desactivado: cada uno una vez (nPr).",
      },
    },
    outputs: {
      permutations: { label: "Permutaciones", help: "Número de arreglos ordenados distintos." },
    },
  },
  it: {
    title: "Calcolatore di permutazioni (nPr)",
    short:
      "Conta quante disposizioni ordinate di r elementi puoi formare da un insieme di n, con o senza ripetizione.",
    description:
      "Calcolatore di permutazioni gratuito. Calcola nPr = n!/(n−r)! per disposizioni in cui l'ordine conta, oppure n^r quando è ammessa la ripetizione.",
    keywords: [
      "calcolatore permutazioni",
      "nPr",
      "formula permutazione",
      "disposizioni",
      "calcolo combinatorio",
      "selezione ordinata",
    ],
    inputs: {
      n: { label: "Elementi totali (n)", help: "Dimensione dell'insieme da cui si sceglie." },
      r: { label: "Elementi scelti (r)", help: "Quanti elementi vengono ordinati." },
      allowRepetition: {
        label: "Consenti ripetizione",
        help: "Attivo: un elemento può ripetersi (n^r). Disattivo: ciascuno al più una volta (nPr).",
      },
    },
    outputs: {
      permutations: { label: "Permutazioni", help: "Numero di disposizioni ordinate distinte." },
    },
  },
  pt: {
    title: "Calculadora de permutações (nPr)",
    short:
      "Conte quantos arranjos ordenados de r itens você pode formar a partir de um conjunto de n, com ou sem repetição.",
    description:
      "Calculadora de permutações gratuita. Calcula nPr = n!/(n−r)! para arranjos em que a ordem importa, ou n^r quando a repetição é permitida.",
    keywords: [
      "calculadora permutações",
      "nPr",
      "fórmula de permutação",
      "arranjos",
      "análise combinatória",
      "seleção ordenada",
    ],
    inputs: {
      n: { label: "Total de itens (n)", help: "Tamanho do conjunto do qual você escolhe." },
      r: { label: "Itens escolhidos (r)", help: "Quantos itens são organizados em ordem." },
      allowRepetition: {
        label: "Permitir repetição",
        help: "Ligado: um item pode se repetir (n^r). Desligado: cada item no máximo uma vez (nPr).",
      },
    },
    outputs: {
      permutations: { label: "Permutações", help: "Número de arranjos ordenados distintos." },
    },
  },
  id: {
    title: "Kalkulator Permutasi (nPr)",
    short:
      "Hitung berapa banyak susunan berurutan dari r item yang dapat dibuat dari himpunan n, dengan atau tanpa pengulangan.",
    description:
      "Kalkulator permutasi gratis. Menghitung nPr = n!/(n−r)! untuk susunan yang mementingkan urutan, atau n^r jika pengulangan diizinkan.",
    keywords: [
      "kalkulator permutasi",
      "nPr",
      "rumus permutasi",
      "susunan",
      "kombinatorika",
      "pemilihan berurutan",
    ],
    inputs: {
      n: { label: "Total item (n)", help: "Ukuran himpunan tempat Anda memilih." },
      r: { label: "Item dipilih (r)", help: "Berapa item yang disusun secara berurutan." },
      allowRepetition: {
        label: "Izinkan pengulangan",
        help: "Aktif: item dapat dipakai ulang (n^r). Nonaktif: tiap item paling banyak sekali (nPr).",
      },
    },
    outputs: {
      permutations: { label: "Permutasi", help: "Jumlah susunan berurutan yang berbeda." },
    },
  },
  ar: {
    title: "حاسبة التباديل (nPr)",
    short:
      "احسب عدد الترتيبات المرتبة لـ r عنصر من مجموعة من n عنصر، مع التكرار أو بدونه.",
    description:
      "حاسبة التباديل المجانية. تحسب nPr = n!/(n−r)! للترتيبات التي يهم فيها الترتيب، أو n^r عند السماح بالتكرار.",
    keywords: [
      "حاسبة التباديل",
      "nPr",
      "قانون التباديل",
      "الترتيبات",
      "التوافيق والتباديل",
      "اختيار مرتب",
    ],
    inputs: {
      n: { label: "إجمالي العناصر (n)", help: "حجم المجموعة التي تختار منها." },
      r: { label: "العناصر المختارة (r)", help: "عدد العناصر المرتبة." },
      allowRepetition: {
        label: "السماح بالتكرار",
        help: "مفعّل: يمكن تكرار العنصر (n^r). معطّل: كل عنصر مرة واحدة على الأكثر (nPr).",
      },
    },
    outputs: {
      permutations: { label: "التباديل", help: "عدد الترتيبات المرتبة المختلفة." },
    },
  },
  ru: {
    title: "Калькулятор размещений (nPr)",
    short:
      "Подсчитайте число упорядоченных размещений r элементов из n — с повторениями или без.",
    description:
      "Бесплатный калькулятор размещений. Вычисляет nPr = n!/(n−r)! для упорядоченных размещений или n^r, если повторения разрешены.",
    keywords: [
      "калькулятор размещений",
      "nPr",
      "формула размещений",
      "перестановки",
      "комбинаторика",
      "упорядоченный выбор",
    ],
    inputs: {
      n: { label: "Всего элементов (n)", help: "Размер множества, из которого выбираем." },
      r: { label: "Выбрано элементов (r)", help: "Сколько элементов упорядочивается." },
      allowRepetition: {
        label: "Разрешить повторения",
        help: "Вкл: элемент можно повторять (n^r). Выкл: каждый не более одного раза (nPr).",
      },
    },
    outputs: {
      permutations: { label: "Размещения", help: "Число различных упорядоченных размещений." },
    },
  },
  zh: {
    title: "排列计算器 (nPr)",
    short: "计算从 n 个元素中取 r 个进行有序排列的方式数，可选是否允许重复。",
    description:
      "免费排列计算器。计算考虑顺序的排列数 nPr = n!/(n−r)!，或在允许重复时计算 n^r。",
    keywords: ["排列计算器", "nPr", "排列公式", "有序排列", "组合数学", "有序选取"],
    inputs: {
      n: { label: "元素总数 (n)", help: "可供选取的集合大小。" },
      r: { label: "选取数量 (r)", help: "进行有序排列的元素个数。" },
      allowRepetition: {
        label: "允许重复",
        help: "开：元素可重复使用 (n^r)。关：每个元素至多一次 (nPr)。",
      },
    },
    outputs: {
      permutations: { label: "排列数", help: "不同有序排列的数量。" },
    },
  },
  ja: {
    title: "順列計算ツール (nPr)",
    short: "n 個の中から r 個を順序付きで並べる方法の数を計算します。重複の有無を選べます。",
    description:
      "無料の順列計算ツール。順序が重要な並べ方の数 nPr = n!/(n−r)! を計算し、重複を許す場合は n^r を求めます。",
    keywords: ["順列 計算", "nPr", "順列の公式", "並べ方", "組合せ論", "順序付き選択"],
    inputs: {
      n: { label: "全要素数 (n)", help: "選ぶ対象となる集合の大きさ。" },
      r: { label: "選ぶ数 (r)", help: "順序付きで並べる要素の数。" },
      allowRepetition: {
        label: "重複を許可",
        help: "オン：要素を再利用できる (n^r)。オフ：各要素は最大1回 (nPr)。",
      },
    },
    outputs: {
      permutations: { label: "順列数", help: "異なる順序付きの並べ方の数。" },
    },
  },
  ko: {
    title: "순열 계산기 (nPr)",
    short: "n개에서 r개를 순서 있게 배열하는 경우의 수를 계산합니다. 중복 허용 여부를 선택하세요.",
    description:
      "무료 순열 계산기. 순서가 중요한 배열의 수 nPr = n!/(n−r)!을 계산하고, 중복을 허용하면 n^r을 구합니다.",
    keywords: ["순열 계산기", "nPr", "순열 공식", "배열", "조합론", "순서 있는 선택"],
    inputs: {
      n: { label: "전체 개수 (n)", help: "선택 대상이 되는 집합의 크기." },
      r: { label: "선택 개수 (r)", help: "순서 있게 배열할 원소의 수." },
      allowRepetition: {
        label: "중복 허용",
        help: "켜짐: 원소를 재사용 가능 (n^r). 꺼짐: 각 원소 최대 한 번 (nPr).",
      },
    },
    outputs: {
      permutations: { label: "순열 수", help: "서로 다른 순서 있는 배열의 수." },
    },
  },
  hi: {
    title: "क्रमचय कैलकुलेटर (nPr)",
    short:
      "n वस्तुओं के समुच्चय से r वस्तुओं के क्रमबद्ध विन्यासों की संख्या गिनें — दोहराव के साथ या बिना।",
    description:
      "मुफ़्त क्रमचय कैलकुलेटर। क्रम महत्वपूर्ण होने पर nPr = n!/(n−r)! की गणना करें, या दोहराव की अनुमति होने पर n^r।",
    keywords: [
      "क्रमचय कैलकुलेटर",
      "nPr",
      "क्रमचय सूत्र",
      "विन्यास",
      "साहचर्य गणित",
      "क्रमबद्ध चयन",
    ],
    inputs: {
      n: { label: "कुल वस्तुएँ (n)", help: "जिस समुच्चय से चयन किया जाता है उसका आकार।" },
      r: { label: "चुनी गई वस्तुएँ (r)", help: "क्रम में व्यवस्थित की जाने वाली वस्तुओं की संख्या।" },
      allowRepetition: {
        label: "दोहराव की अनुमति",
        help: "चालू: वस्तु पुनः प्रयोग हो सकती है (n^r)। बंद: प्रत्येक अधिकतम एक बार (nPr)।",
      },
    },
    outputs: {
      permutations: { label: "क्रमचय", help: "भिन्न क्रमबद्ध विन्यासों की संख्या।" },
    },
  },
};

export default i18n;
