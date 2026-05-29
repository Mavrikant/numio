import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "GPA Calculator",
    short: "Calculate your credit-weighted grade point average from grade points and credit hours.",
    description:
      "Free GPA calculator. Enter your grade points and matching credit hours as comma-separated lists to get your weighted GPA, total credits and total quality points. Leave credits blank to weight every course equally.",
    keywords: ["gpa calculator", "grade point average", "weighted gpa", "college gpa calculator", "semester gpa", "cumulative gpa"],
    inputs: {
      gradePoints: { label: "Grade points", help: "Comma-separated, e.g. 4, 3.7, 3.3 (use your school's scale)." },
      creditHours: { label: "Credit hours", help: "Comma-separated, matching each grade. Leave blank for equal weighting." },
    },
    outputs: {
      gpa: { label: "GPA", help: "Credit-weighted grade point average." },
      totalCredits: { label: "Total credits" },
      totalQualityPoints: { label: "Total quality points", help: "Σ(grade point × credits)." },
      courseCount: { label: "Courses counted" },
    },
    faq: [
      { q: "How is GPA calculated?", a: "Multiply each course's grade points by its credit hours, sum those, and divide by the total credits. For example, grades 4, 3, 4 with credits 3, 4, 3 give (12+12+12)/10 = 3.6." },
      { q: "What if I don't enter credits?", a: "If you leave the credit field blank, every course is weighted equally — the result is the simple average of your grade points." },
      { q: "How do I convert letter grades to points?", a: "Use your school's scale. A common US 4.0 scale is A=4.0, A−=3.7, B+=3.3, B=3.0, and so on. Convert each letter to its point value before entering it." },
    ],
  },
  pt: {
    title: "Calculadora de Média Académica (GPA)",
    short: "Calcule a sua média académica em escala 4.0, 5.0 ou 20.",
    description:
      "Calculadora gratuita de média académica. Calcule o GPA em diferentes escalas com base nas notas e créditos das disciplinas.",
    keywords: ["GPA", "média académica", "média notas", "escala 4.0", "calculadora notas"],
    inputs: {
      gradePoints: { label: "Grade points", help: "Comma-separated, e.g. 4, 3.7, 3.3 (use your school's scale)." },
      creditHours: { label: "Credit hours", help: "Comma-separated, matching each grade. Leave blank for equal weighting." },
    },
    outputs: {
      gpa: { label: "GPA", help: "Credit-weighted grade point average." },
      totalCredits: { label: "Total credits" },
      totalQualityPoints: { label: "Total quality points", help: "Σ(grade point × credits)." },
      courseCount: { label: "Courses counted" },
    },
    faq: [
      { q: "How is GPA calculated?", a: "Multiply each course's grade points by its credit hours, sum those, and divide by the total credits. For example, grades 4, 3, 4 with credits 3, 4, 3 give (12+12+12)/10 = 3.6." },
      { q: "What if I don't enter credits?", a: "If you leave the credit field blank, every course is weighted equally — the result is the simple average of your grade points." },
      { q: "How do I convert letter grades to points?", a: "Use your school's scale. A common US 4.0 scale is A=4.0, A−=3.7, B+=3.3, B=3.0, and so on. Convert each letter to its point value before entering it." },
    ],
  },
  id: {
    title: "Kalkulator IPK",
    short: "Hitung Indeks Prestasi Kumulatif (IPK) Anda dalam skala 4.0, 5.0, atau 100.",
    description:
      "Kalkulator IPK gratis. Hitung IPK dalam berbagai skala berdasarkan nilai dan SKS mata kuliah.",
    keywords: ["IPK", "indeks prestasi", "nilai akhir", "skala 4.0", "kalkulator nilai"],
    inputs: {
      gradePoints: { label: "Grade points", help: "Comma-separated, e.g. 4, 3.7, 3.3 (use your school's scale)." },
      creditHours: { label: "Credit hours", help: "Comma-separated, matching each grade. Leave blank for equal weighting." },
    },
    outputs: {
      gpa: { label: "GPA", help: "Credit-weighted grade point average." },
      totalCredits: { label: "Total credits" },
      totalQualityPoints: { label: "Total quality points", help: "Σ(grade point × credits)." },
      courseCount: { label: "Courses counted" },
    },
    faq: [
      { q: "How is GPA calculated?", a: "Multiply each course's grade points by its credit hours, sum those, and divide by the total credits. For example, grades 4, 3, 4 with credits 3, 4, 3 give (12+12+12)/10 = 3.6." },
      { q: "What if I don't enter credits?", a: "If you leave the credit field blank, every course is weighted equally — the result is the simple average of your grade points." },
      { q: "How do I convert letter grades to points?", a: "Use your school's scale. A common US 4.0 scale is A=4.0, A−=3.7, B+=3.3, B=3.0, and so on. Convert each letter to its point value before entering it." },
    ],
  },

  tr: {
    title: "GPA (Not Ortalaması) Hesaplama",
    short: "Not puanları ve kredi saatlerinden kredi ağırlıklı genel not ortalamanızı hesaplayın.",
    description:
      "Ücretsiz GPA hesaplama. Not puanlarınızı ve eşleşen kredi saatlerinizi virgülle ayrılmış listeler olarak girin; ağırlıklı GPA'nızı, toplam kredinizi ve toplam kalite puanınızı öğrenin. Kredileri boş bırakırsanız her ders eşit ağırlıklandırılır.",
    keywords: ["gpa hesaplama", "not ortalaması", "ağırlıklı gpa", "üniversite gpa", "dönem gpa", "genel not ortalaması"],
    inputs: {
      gradePoints: { label: "Not puanları", help: "Virgülle ayrılmış, örn. 4, 3.7, 3.3 (okulunuzun ölçeğini kullanın)." },
      creditHours: { label: "Kredi saatleri", help: "Her notla eşleşen, virgülle ayrılmış. Eşit ağırlık için boş bırakın." },
    },
    outputs: {
      gpa: { label: "GPA", help: "Kredi ağırlıklı not ortalaması." },
      totalCredits: { label: "Toplam kredi" },
      totalQualityPoints: { label: "Toplam kalite puanı", help: "Σ(not puanı × kredi)." },
      courseCount: { label: "Sayılan ders" },
    },
    faq: [
      { q: "GPA nasıl hesaplanır?", a: "Her dersin not puanını kredi saatiyle çarpın, bunları toplayın ve toplam krediye bölün. Örneğin 4, 3, 4 notları ve 3, 4, 3 kredileri (12+12+12)/10 = 3,6 verir." },
      { q: "Kredi girmezsem ne olur?", a: "Kredi alanını boş bırakırsanız her ders eşit ağırlıklandırılır — sonuç, not puanlarınızın basit ortalamasıdır." },
      { q: "Harf notlarını puana nasıl çeviririm?", a: "Okulunuzun ölçeğini kullanın. Yaygın bir ABD 4.0 ölçeği A=4.0, A−=3.7, B+=3.3, B=3.0 şeklindedir. Girmeden önce her harfi puan değerine çevirin." },
    ],
  },
  de: {
    title: "GPA-Rechner (Notendurchschnitt)",
    short: "Berechnen Sie Ihren leistungspunktgewichteten Notendurchschnitt aus Notenpunkten und Credits.",
    description: "Kostenloser GPA-Rechner. Geben Sie Notenpunkte und zugehörige Credits als kommagetrennte Listen ein, um Ihren gewichteten GPA, die Gesamt-Credits und die Qualitätspunkte zu erhalten.",
    keywords: ["GPA Rechner", "Notendurchschnitt", "gewichteter GPA", "Hochschul-GPA", "Semester-GPA"],
    inputs: {
      gradePoints: { label: "Notenpunkte", help: "Kommagetrennt, z. B. 4, 3.7, 3.3." },
      creditHours: { label: "Credits", help: "Kommagetrennt, passend zu jeder Note. Leer lassen für gleiche Gewichtung." },
    },
    outputs: {
      gpa: { label: "GPA" },
      totalCredits: { label: "Gesamt-Credits" },
      totalQualityPoints: { label: "Qualitätspunkte" },
      courseCount: { label: "Gezählte Kurse" },
    },
  },
  fr: {
    title: "Calculateur de GPA (Moyenne)",
    short: "Calculez votre moyenne pondérée par crédits à partir des points et des crédits.",
    description: "Calculateur de GPA gratuit. Saisissez vos points de notes et les crédits correspondants en listes séparées par des virgules pour obtenir votre GPA pondéré, le total des crédits et des points de qualité.",
    keywords: ["calculateur GPA", "moyenne pondérée", "GPA universitaire", "GPA semestre"],
    inputs: {
      gradePoints: { label: "Points de notes", help: "Séparés par des virgules, p. ex. 4, 3.7, 3.3." },
      creditHours: { label: "Crédits", help: "Séparés par des virgules, correspondant à chaque note. Laisser vide pour une pondération égale." },
    },
    outputs: {
      gpa: { label: "GPA" },
      totalCredits: { label: "Total des crédits" },
      totalQualityPoints: { label: "Points de qualité" },
      courseCount: { label: "Cours comptés" },
    },
  },
  es: {
    title: "Calculadora de GPA (Promedio)",
    short: "Calcula tu promedio ponderado por créditos a partir de los puntos y los créditos.",
    description: "Calculadora de GPA gratuita. Introduce tus puntos de calificación y los créditos correspondientes como listas separadas por comas para obtener tu GPA ponderado, los créditos totales y los puntos de calidad.",
    keywords: ["calculadora GPA", "promedio ponderado", "GPA universitario", "GPA semestre", "promedio acumulado"],
    inputs: {
      gradePoints: { label: "Puntos de calificación", help: "Separados por comas, p. ej. 4, 3.7, 3.3." },
      creditHours: { label: "Créditos", help: "Separados por comas, correspondientes a cada nota. Deja vacío para ponderación igual." },
    },
    outputs: {
      gpa: { label: "GPA" },
      totalCredits: { label: "Créditos totales" },
      totalQualityPoints: { label: "Puntos de calidad" },
      courseCount: { label: "Cursos contados" },
    },
  },
  it: {
    title: "Calcolatore GPA (Media)",
    short: "Calcola la media ponderata per crediti a partire dai punti e dai crediti.",
    description: "Calcolatore GPA gratuito. Inserisci i punti dei voti e i crediti corrispondenti come elenchi separati da virgole per ottenere il GPA ponderato, i crediti totali e i punti di qualità.",
    keywords: ["calcolatore GPA", "media ponderata", "GPA universitario", "GPA semestre", "media cumulativa"],
    inputs: {
      gradePoints: { label: "Punti dei voti", help: "Separati da virgole, es. 4, 3.7, 3.3." },
      creditHours: { label: "Crediti", help: "Separati da virgole, corrispondenti a ogni voto. Lascia vuoto per ponderazione uguale." },
    },
    outputs: {
      gpa: { label: "GPA" },
      totalCredits: { label: "Crediti totali" },
      totalQualityPoints: { label: "Punti di qualità" },
      courseCount: { label: "Corsi conteggiati" },
    },
  },
  ar: {
    title: "حاسبة المعدل التراكمي (GPA)",
    short: "احسب معدلك المرجّح بالساعات من نقاط الدرجات والساعات المعتمدة.",
    description: "حاسبة GPA مجانية. أدخل نقاط درجاتك والساعات المعتمدة المقابلة كقوائم مفصولة بفواصل للحصول على المعدل المرجّح وإجمالي الساعات ونقاط الجودة.",
    keywords: ["حاسبة المعدل التراكمي", "المعدل المرجّح", "GPA الجامعة", "معدل الفصل"],
    inputs: {
      gradePoints: { label: "نقاط الدرجات", help: "مفصولة بفواصل، مثل 4، 3.7، 3.3." },
      creditHours: { label: "الساعات المعتمدة", help: "مفصولة بفواصل، مطابقة لكل درجة. اتركها فارغة للوزن المتساوي." },
    },
    outputs: {
      gpa: { label: "المعدل (GPA)" },
      totalCredits: { label: "إجمالي الساعات" },
      totalQualityPoints: { label: "نقاط الجودة" },
      courseCount: { label: "المقررات المحتسبة" },
    },
  },
  ru: {
    title: "Калькулятор GPA (Средний Балл)",
    short: "Рассчитайте средневзвешенный балл по оценкам и кредитам.",
    description: "Бесплатный калькулятор GPA. Введите баллы оценок и соответствующие кредиты списками через запятую, чтобы получить взвешенный GPA, сумму кредитов и баллы качества.",
    keywords: ["калькулятор GPA", "средний балл", "взвешенный GPA", "GPA университета", "GPA за семестр"],
    inputs: {
      gradePoints: { label: "Баллы оценок", help: "Через запятую, напр. 4, 3.7, 3.3." },
      creditHours: { label: "Кредиты", help: "Через запятую, по каждой оценке. Оставьте пустым для равного веса." },
    },
    outputs: {
      gpa: { label: "GPA" },
      totalCredits: { label: "Всего кредитов" },
      totalQualityPoints: { label: "Баллы качества" },
      courseCount: { label: "Учтено курсов" },
    },
  },
  zh: {
    title: "GPA（绩点）计算器",
    short: "根据绩点和学分计算按学分加权的平均绩点。",
    description: "免费的 GPA 计算器。以逗号分隔的列表输入绩点和对应学分，即可得到加权 GPA、总学分和总质量分。学分留空则各科等权重。",
    keywords: ["GPA计算器", "平均绩点", "加权GPA", "大学GPA", "学期GPA"],
    inputs: {
      gradePoints: { label: "绩点", help: "逗号分隔，例如 4, 3.7, 3.3。" },
      creditHours: { label: "学分", help: "逗号分隔，与每个绩点对应。留空则等权重。" },
    },
    outputs: {
      gpa: { label: "GPA" },
      totalCredits: { label: "总学分" },
      totalQualityPoints: { label: "总质量分" },
      courseCount: { label: "计入课程数" },
    },
  },
  ja: {
    title: "GPA計算機",
    short: "成績点と単位数から単位加重平均（GPA）を計算します。",
    description: "無料のGPA計算機。成績点と対応する単位数をカンマ区切りで入力すると、加重GPA、合計単位、合計クオリティポイントが得られます。単位を空欄にすると各科目が等しく重み付けされます。",
    keywords: ["GPA計算機", "成績平均", "加重GPA", "大学GPA", "学期GPA"],
    inputs: {
      gradePoints: { label: "成績点", help: "カンマ区切り、例: 4, 3.7, 3.3。" },
      creditHours: { label: "単位数", help: "カンマ区切りで各成績に対応。等しい重みにするには空欄。" },
    },
    outputs: {
      gpa: { label: "GPA" },
      totalCredits: { label: "合計単位" },
      totalQualityPoints: { label: "クオリティポイント" },
      courseCount: { label: "計上した科目数" },
    },
  },
  ko: {
    title: "GPA(평점) 계산기",
    short: "성적 점수와 학점으로 학점 가중 평균 평점을 계산합니다.",
    description: "무료 GPA 계산기. 성적 점수와 해당 학점을 쉼표로 구분된 목록으로 입력하면 가중 GPA, 총 학점, 총 퀄리티 포인트를 얻을 수 있습니다. 학점을 비우면 각 과목이 동일 가중치를 가집니다.",
    keywords: ["GPA 계산기", "평점 평균", "가중 GPA", "대학 GPA", "학기 GPA"],
    inputs: {
      gradePoints: { label: "성적 점수", help: "쉼표로 구분, 예: 4, 3.7, 3.3." },
      creditHours: { label: "학점", help: "쉼표로 구분, 각 성적에 대응. 동일 가중치는 비워 두세요." },
    },
    outputs: {
      gpa: { label: "GPA" },
      totalCredits: { label: "총 학점" },
      totalQualityPoints: { label: "총 퀄리티 포인트" },
      courseCount: { label: "계산된 과목 수" },
    },
  },
  hi: {
    title: "GPA (ग्रेड औसत) कैलकुलेटर",
    short: "ग्रेड अंक और क्रेडिट घंटों से क्रेडिट-भारित ग्रेड औसत की गणना करें।",
    description: "मुफ्त GPA कैलकुलेटर। अपने ग्रेड अंक और संगत क्रेडिट घंटे अल्पविराम से अलग सूची के रूप में दर्ज करें और भारित GPA, कुल क्रेडिट तथा कुल क्वालिटी अंक पाएं। क्रेडिट खाली छोड़ने पर हर कोर्स समान भार पाता है।",
    keywords: ["GPA कैलकुलेटर", "ग्रेड औसत", "भारित GPA", "कॉलेज GPA", "सेमेस्टर GPA"],
    inputs: {
      gradePoints: { label: "ग्रेड अंक", help: "अल्पविराम से अलग, जैसे 4, 3.7, 3.3।" },
      creditHours: { label: "क्रेडिट घंटे", help: "अल्पविराम से अलग, प्रत्येक ग्रेड के अनुरूप। समान भार के लिए खाली छोड़ें।" },
    },
    outputs: {
      gpa: { label: "GPA" },
      totalCredits: { label: "कुल क्रेडिट" },
      totalQualityPoints: { label: "कुल क्वालिटी अंक" },
      courseCount: { label: "गिने गए कोर्स" },
    },
  },
};

export default i18n;
