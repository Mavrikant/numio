import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Cholesterol Calculator",
    short: "Evaluate cardiovascular risk from your lipid panel (TC, HDL, LDL, TG).",
    description:
      "Free cholesterol calculator using the Friedewald equation and NCEP ATP III thresholds. Enter total cholesterol, HDL, triglycerides (and optionally LDL) to get ratios, non-HDL cholesterol and an LDL risk category.",
    keywords: [
      "cholesterol calculator",
      "LDL calculator",
      "HDL ratio",
      "Friedewald equation",
      "lipid panel",
      "non-HDL cholesterol",
      "cardiovascular risk",
    ],
    inputs: {
      totalCholesterol: {
        label: "Total cholesterol",
        help: "TC from your lipid panel in mg/dL (50–500).",
      },
      hdl: {
        label: "HDL cholesterol",
        help: "High-density lipoprotein in mg/dL (10–200).",
      },
      triglycerides: {
        label: "Triglycerides",
        help: "Fasting triglycerides in mg/dL (30–1000).",
      },
      ldl: {
        label: "LDL cholesterol (optional)",
        help: "Direct LDL measurement in mg/dL, or 0 to estimate via the Friedewald equation.",
      },
    },
    outputs: {
      ldlComputed: {
        label: "LDL cholesterol",
        help: "Either your direct LDL or the Friedewald estimate (TC − HDL − TG/5).",
      },
      totalHdlRatio: {
        label: "Total / HDL ratio",
        help: "Target <5.0 — lower is better.",
      },
      ldlHdlRatio: {
        label: "LDL / HDL ratio",
        help: "Target <3.5 — lower is better.",
      },
      nonHdlCholesterol: {
        label: "Non-HDL cholesterol",
        help: "TC − HDL. Includes all atherogenic particles. Target <130 mg/dL.",
      },
      category: {
        label: "LDL category",
        help: "NCEP ATP III LDL classification: optimal <100, near-optimal <130, borderline <160, high <190, very high ≥190.",
      },
    },
    errors: {
      tcOutOfRange: "Total cholesterol must be between 50 and 500 mg/dL.",
      hdlOutOfRange: "HDL must be between 10 and 200 mg/dL.",
      tgOutOfRange: "Triglycerides must be between 30 and 1000 mg/dL.",
      ldlOutOfRange: "LDL must be 0 (auto-compute) or between 30 and 400 mg/dL.",
    },
    faq: [
      {
        q: "What is the Friedewald equation?",
        a: "Friedewald (1972) estimates LDL as TC − HDL − TG/5. It is reliable when triglycerides are below 400 mg/dL; above that, direct LDL measurement is recommended.",
      },
      {
        q: "Why is non-HDL cholesterol important?",
        a: "Non-HDL cholesterol (TC − HDL) captures every atherogenic lipoprotein (LDL, VLDL, IDL, Lp(a)). The 2018 AHA/ACC guideline highlights it as a key secondary target.",
      },
      {
        q: "What is a good total cholesterol level?",
        a: "Generally, total cholesterol below 200 mg/dL is considered desirable, but treatment decisions are driven primarily by LDL, non-HDL, and overall cardiovascular risk.",
      },
      {
        q: "Should I use direct LDL or Friedewald?",
        a: "Direct LDL is preferred when triglycerides exceed 400 mg/dL or in non-fasting samples. Otherwise Friedewald is accurate enough for routine assessment.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Colesterol",
    short: "Avalie os seus valores de colesterol total, LDL, HDL e triglicéridos.",
    description:
      "Calculadora gratuita de colesterol. Veja a sua relação de colesterol e classificação de risco cardiovascular.",
    keywords: ["colesterol", "LDL HDL", "triglicéridos", "colesterol mau", "risco cardiovascular"],
    inputs: {
      totalCholesterol: {
        label: "Total cholesterol",
        help: "TC from your lipid panel in mg/dL (50–500).",
      },
      hdl: {
        label: "HDL cholesterol",
        help: "High-density lipoprotein in mg/dL (10–200).",
      },
      triglycerides: {
        label: "Triglycerides",
        help: "Fasting triglycerides in mg/dL (30–1000).",
      },
      ldl: {
        label: "LDL cholesterol (optional)",
        help: "Direct LDL measurement in mg/dL, or 0 to estimate via the Friedewald equation.",
      },
    },
    outputs: {
      ldlComputed: {
        label: "LDL cholesterol",
        help: "Either your direct LDL or the Friedewald estimate (TC − HDL − TG/5).",
      },
      totalHdlRatio: {
        label: "Total / HDL ratio",
        help: "Target <5.0 — lower is better.",
      },
      ldlHdlRatio: {
        label: "LDL / HDL ratio",
        help: "Target <3.5 — lower is better.",
      },
      nonHdlCholesterol: {
        label: "Non-HDL cholesterol",
        help: "TC − HDL. Includes all atherogenic particles. Target <130 mg/dL.",
      },
      category: {
        label: "LDL category",
        help: "NCEP ATP III LDL classification: optimal <100, near-optimal <130, borderline <160, high <190, very high ≥190.",
      },
    },
    errors: {
      tcOutOfRange: "Total cholesterol must be between 50 and 500 mg/dL.",
      hdlOutOfRange: "HDL must be between 10 and 200 mg/dL.",
      tgOutOfRange: "Triglycerides must be between 30 and 1000 mg/dL.",
      ldlOutOfRange: "LDL must be 0 (auto-compute) or between 30 and 400 mg/dL.",
    },
    faq: [
      {
        q: "What is the Friedewald equation?",
        a: "Friedewald (1972) estimates LDL as TC − HDL − TG/5. It is reliable when triglycerides are below 400 mg/dL; above that, direct LDL measurement is recommended.",
      },
      {
        q: "Why is non-HDL cholesterol important?",
        a: "Non-HDL cholesterol (TC − HDL) captures every atherogenic lipoprotein (LDL, VLDL, IDL, Lp(a)). The 2018 AHA/ACC guideline highlights it as a key secondary target.",
      },
      {
        q: "What is a good total cholesterol level?",
        a: "Generally, total cholesterol below 200 mg/dL is considered desirable, but treatment decisions are driven primarily by LDL, non-HDL, and overall cardiovascular risk.",
      },
      {
        q: "Should I use direct LDL or Friedewald?",
        a: "Direct LDL is preferred when triglycerides exceed 400 mg/dL or in non-fasting samples. Otherwise Friedewald is accurate enough for routine assessment.",
      },
    ],
  },
  id: {
    title: "Kalkulator Kolesterol",
    short: "Evaluasi nilai kolesterol total, LDL, HDL, dan trigliserida Anda.",
    description:
      "Kalkulator kolesterol gratis. Lihat rasio kolesterol dan klasifikasi risiko kardiovaskular.",
    keywords: ["kolesterol", "LDL HDL", "trigliserida", "kolesterol jahat", "risiko jantung"],
    inputs: {
      totalCholesterol: {
        label: "Total cholesterol",
        help: "TC from your lipid panel in mg/dL (50–500).",
      },
      hdl: {
        label: "HDL cholesterol",
        help: "High-density lipoprotein in mg/dL (10–200).",
      },
      triglycerides: {
        label: "Triglycerides",
        help: "Fasting triglycerides in mg/dL (30–1000).",
      },
      ldl: {
        label: "LDL cholesterol (optional)",
        help: "Direct LDL measurement in mg/dL, or 0 to estimate via the Friedewald equation.",
      },
    },
    outputs: {
      ldlComputed: {
        label: "LDL cholesterol",
        help: "Either your direct LDL or the Friedewald estimate (TC − HDL − TG/5).",
      },
      totalHdlRatio: {
        label: "Total / HDL ratio",
        help: "Target <5.0 — lower is better.",
      },
      ldlHdlRatio: {
        label: "LDL / HDL ratio",
        help: "Target <3.5 — lower is better.",
      },
      nonHdlCholesterol: {
        label: "Non-HDL cholesterol",
        help: "TC − HDL. Includes all atherogenic particles. Target <130 mg/dL.",
      },
      category: {
        label: "LDL category",
        help: "NCEP ATP III LDL classification: optimal <100, near-optimal <130, borderline <160, high <190, very high ≥190.",
      },
    },
    errors: {
      tcOutOfRange: "Total cholesterol must be between 50 and 500 mg/dL.",
      hdlOutOfRange: "HDL must be between 10 and 200 mg/dL.",
      tgOutOfRange: "Triglycerides must be between 30 and 1000 mg/dL.",
      ldlOutOfRange: "LDL must be 0 (auto-compute) or between 30 and 400 mg/dL.",
    },
    faq: [
      {
        q: "What is the Friedewald equation?",
        a: "Friedewald (1972) estimates LDL as TC − HDL − TG/5. It is reliable when triglycerides are below 400 mg/dL; above that, direct LDL measurement is recommended.",
      },
      {
        q: "Why is non-HDL cholesterol important?",
        a: "Non-HDL cholesterol (TC − HDL) captures every atherogenic lipoprotein (LDL, VLDL, IDL, Lp(a)). The 2018 AHA/ACC guideline highlights it as a key secondary target.",
      },
      {
        q: "What is a good total cholesterol level?",
        a: "Generally, total cholesterol below 200 mg/dL is considered desirable, but treatment decisions are driven primarily by LDL, non-HDL, and overall cardiovascular risk.",
      },
      {
        q: "Should I use direct LDL or Friedewald?",
        a: "Direct LDL is preferred when triglycerides exceed 400 mg/dL or in non-fasting samples. Otherwise Friedewald is accurate enough for routine assessment.",
      },
    ],
  },


  tr: {
    title: "Kolesterol Hesaplayıcı",
    short: "Lipid panelinizden (TK, HDL, LDL, TG) kardiyovasküler riski değerlendirin.",
    description:
      "Friedewald denklemi ve NCEP ATP III eşiklerine dayalı ücretsiz kolesterol hesaplayıcı. Toplam kolesterol, HDL, trigliserit (isteğe bağlı LDL) girerek oranları, non-HDL kolesterolü ve LDL risk kategorisini öğrenin.",
    keywords: [
      "kolesterol hesaplayıcı",
      "LDL hesaplayıcı",
      "HDL oranı",
      "Friedewald denklemi",
      "lipid paneli",
      "non-HDL kolesterol",
      "kardiyovasküler risk",
    ],
    inputs: {
      totalCholesterol: {
        label: "Toplam kolesterol",
        help: "Lipid panelinden toplam kolesterol değeri (mg/dL, 50–500).",
      },
      hdl: {
        label: "HDL kolesterol",
        help: "Yüksek yoğunluklu lipoprotein (mg/dL, 10–200).",
      },
      triglycerides: {
        label: "Trigliserit",
        help: "Açlık trigliserit değeri (mg/dL, 30–1000).",
      },
      ldl: {
        label: "LDL kolesterol (isteğe bağlı)",
        help: "Doğrudan ölçülen LDL (mg/dL) veya Friedewald ile tahmin için 0 girin.",
      },
    },
    outputs: {
      ldlComputed: {
        label: "LDL kolesterol",
        help: "Doğrudan ölçüm veya Friedewald tahmini (TK − HDL − TG/5).",
      },
      totalHdlRatio: { label: "Toplam / HDL oranı", help: "Hedef <5,0 — düşük olması iyidir." },
      ldlHdlRatio: { label: "LDL / HDL oranı", help: "Hedef <3,5 — düşük olması iyidir." },
      nonHdlCholesterol: {
        label: "Non-HDL kolesterol",
        help: "TK − HDL. Tüm aterojenik partikülleri içerir. Hedef <130 mg/dL.",
      },
      category: {
        label: "LDL kategorisi",
        help: "NCEP ATP III LDL sınıflaması: optimal <100, optimale yakın <130, sınırda <160, yüksek <190, çok yüksek ≥190.",
      },
    },
    errors: {
      tcOutOfRange: "Toplam kolesterol 50–500 mg/dL arasında olmalıdır.",
      hdlOutOfRange: "HDL 10–200 mg/dL arasında olmalıdır.",
      tgOutOfRange: "Trigliserit 30–1000 mg/dL arasında olmalıdır.",
      ldlOutOfRange: "LDL ya 0 (otomatik hesap) ya da 30–400 mg/dL arasında olmalıdır.",
    },
    faq: [
      {
        q: "Friedewald denklemi nedir?",
        a: "Friedewald (1972) LDL'yi TK − HDL − TG/5 olarak tahmin eder. Trigliserit 400 mg/dL altında güvenilirdir; üzerindeyse doğrudan LDL ölçümü önerilir.",
      },
      {
        q: "Non-HDL kolesterol neden önemlidir?",
        a: "Non-HDL kolesterol (TK − HDL) tüm aterojenik lipoproteinleri (LDL, VLDL, IDL, Lp(a)) kapsar. 2018 AHA/ACC kılavuzu ikincil önemli hedef olarak vurgular.",
      },
      {
        q: "İyi bir toplam kolesterol değeri nedir?",
        a: "Genel olarak 200 mg/dL altı arzu edilen sınır kabul edilir; ancak tedavi kararları LDL, non-HDL ve genel kardiyovasküler risk üzerinden verilir.",
      },
      {
        q: "Doğrudan LDL mi, Friedewald mi kullanmalıyım?",
        a: "Trigliserit 400 mg/dL üzerindeyse veya tokluk örneğinde doğrudan LDL tercih edilir; aksi halde Friedewald rutin değerlendirme için yeterlidir.",
      },
    ],
  },

  de: {
    title: "Cholesterin-Rechner",
    short: "Bewerten Sie das Herz-Kreislauf-Risiko anhand Ihres Lipidprofils (TC, HDL, LDL, TG).",
    description:
      "Kostenloser Cholesterin-Rechner mit Friedewald-Formel und NCEP-ATP-III-Grenzwerten. Geben Sie Gesamtcholesterin, HDL, Triglyzeride (optional LDL) ein, um Quotienten, Non-HDL-Cholesterin und eine LDL-Risikoeinstufung zu erhalten.",
    keywords: [
      "Cholesterin Rechner",
      "LDL Rechner",
      "HDL Quotient",
      "Friedewald Formel",
      "Lipidprofil",
      "Non-HDL Cholesterin",
      "Herz-Kreislauf-Risiko",
    ],
    inputs: {
      totalCholesterol: { label: "Gesamtcholesterin", help: "Aus dem Lipidprofil in mg/dL (50–500)." },
      hdl: { label: "HDL-Cholesterin", help: "High-Density Lipoprotein in mg/dL (10–200)." },
      triglycerides: { label: "Triglyzeride", help: "Nüchtern-Triglyzeride in mg/dL (30–1000)." },
      ldl: {
        label: "LDL-Cholesterin (optional)",
        help: "Direkter LDL-Wert in mg/dL oder 0, um die Friedewald-Schätzung zu nutzen.",
      },
    },
    outputs: {
      ldlComputed: { label: "LDL-Cholesterin", help: "Direkter Wert oder Friedewald-Schätzung (TC − HDL − TG/5)." },
      totalHdlRatio: { label: "Gesamt-/HDL-Quotient", help: "Zielwert <5,0 — niedriger ist besser." },
      ldlHdlRatio: { label: "LDL-/HDL-Quotient", help: "Zielwert <3,5 — niedriger ist besser." },
      nonHdlCholesterol: {
        label: "Non-HDL-Cholesterin",
        help: "TC − HDL. Umfasst alle atherogenen Partikel. Ziel <130 mg/dL.",
      },
      category: {
        label: "LDL-Kategorie",
        help: "NCEP ATP III: optimal <100, fast optimal <130, grenzwertig <160, hoch <190, sehr hoch ≥190.",
      },
    },
    errors: {
      tcOutOfRange: "Gesamtcholesterin muss zwischen 50 und 500 mg/dL liegen.",
      hdlOutOfRange: "HDL muss zwischen 10 und 200 mg/dL liegen.",
      tgOutOfRange: "Triglyzeride müssen zwischen 30 und 1000 mg/dL liegen.",
      ldlOutOfRange: "LDL muss 0 (Auto) oder zwischen 30 und 400 mg/dL liegen.",
    },
    faq: [
      {
        q: "Was ist die Friedewald-Formel?",
        a: "Friedewald (1972) schätzt LDL als TC − HDL − TG/5. Sie ist bei Triglyzeriden unter 400 mg/dL zuverlässig; darüber sollte direkt gemessen werden.",
      },
      {
        q: "Warum ist Non-HDL-Cholesterin wichtig?",
        a: "Non-HDL-Cholesterin erfasst alle atherogenen Lipoproteine. Die AHA/ACC-Leitlinie 2018 nennt es als wichtigen sekundären Zielwert.",
      },
      {
        q: "Was ist ein guter Gesamtcholesterinwert?",
        a: "Werte unter 200 mg/dL gelten als wünschenswert, Behandlungsentscheidungen folgen aber LDL, Non-HDL und Gesamtrisiko.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Cholestérol",
    short: "Évaluez le risque cardiovasculaire à partir de votre bilan lipidique (CT, HDL, LDL, TG).",
    description:
      "Calculateur gratuit utilisant l'équation de Friedewald et les seuils NCEP ATP III. Entrez le cholestérol total, le HDL, les triglycérides (et éventuellement le LDL) pour obtenir les ratios, le cholestérol non-HDL et une catégorie de risque LDL.",
    keywords: [
      "calculateur cholestérol",
      "calculateur LDL",
      "ratio HDL",
      "équation Friedewald",
      "bilan lipidique",
      "cholestérol non-HDL",
      "risque cardiovasculaire",
    ],
    inputs: {
      totalCholesterol: { label: "Cholestérol total", help: "Issu du bilan lipidique en mg/dL (50–500)." },
      hdl: { label: "Cholestérol HDL", help: "Lipoprotéine de haute densité en mg/dL (10–200)." },
      triglycerides: { label: "Triglycérides", help: "Triglycérides à jeun en mg/dL (30–1000)." },
      ldl: {
        label: "Cholestérol LDL (optionnel)",
        help: "Mesure directe en mg/dL, ou 0 pour estimer via Friedewald.",
      },
    },
    outputs: {
      ldlComputed: { label: "Cholestérol LDL", help: "Mesure directe ou estimation de Friedewald (CT − HDL − TG/5)." },
      totalHdlRatio: { label: "Ratio total/HDL", help: "Objectif <5,0 — plus bas, mieux." },
      ldlHdlRatio: { label: "Ratio LDL/HDL", help: "Objectif <3,5 — plus bas, mieux." },
      nonHdlCholesterol: {
        label: "Cholestérol non-HDL",
        help: "CT − HDL. Couvre toutes les particules athérogènes. Objectif <130 mg/dL.",
      },
      category: {
        label: "Catégorie LDL",
        help: "NCEP ATP III : optimal <100, presque optimal <130, limite <160, élevé <190, très élevé ≥190.",
      },
    },
    errors: {
      tcOutOfRange: "Le cholestérol total doit être entre 50 et 500 mg/dL.",
      hdlOutOfRange: "HDL doit être entre 10 et 200 mg/dL.",
      tgOutOfRange: "Triglycérides doivent être entre 30 et 1000 mg/dL.",
      ldlOutOfRange: "LDL doit être 0 (auto) ou entre 30 et 400 mg/dL.",
    },
    faq: [
      {
        q: "Qu'est-ce que l'équation de Friedewald ?",
        a: "Friedewald (1972) estime LDL = CT − HDL − TG/5. Fiable pour TG < 400 mg/dL ; au-delà, mesure directe recommandée.",
      },
      {
        q: "Pourquoi le cholestérol non-HDL est-il important ?",
        a: "Le non-HDL inclut toutes les lipoprotéines athérogènes. Les recommandations AHA/ACC 2018 en font une cible secondaire clé.",
      },
      {
        q: "Quel est un bon taux de cholestérol total ?",
        a: "Un total < 200 mg/dL est généralement souhaitable, mais les décisions thérapeutiques reposent sur LDL, non-HDL et risque global.",
      },
    ],
  },

  es: {
    title: "Calculadora de Colesterol",
    short: "Evalúa el riesgo cardiovascular a partir de tu perfil lipídico (CT, HDL, LDL, TG).",
    description:
      "Calculadora gratuita basada en la ecuación de Friedewald y los umbrales NCEP ATP III. Introduce colesterol total, HDL, triglicéridos (y opcionalmente LDL) para obtener ratios, colesterol no-HDL y una categoría de riesgo LDL.",
    keywords: [
      "calculadora colesterol",
      "calculadora LDL",
      "ratio HDL",
      "ecuación Friedewald",
      "perfil lipídico",
      "colesterol no-HDL",
      "riesgo cardiovascular",
    ],
    inputs: {
      totalCholesterol: { label: "Colesterol total", help: "Del perfil lipídico en mg/dL (50–500)." },
      hdl: { label: "Colesterol HDL", help: "Lipoproteína de alta densidad en mg/dL (10–200)." },
      triglycerides: { label: "Triglicéridos", help: "Triglicéridos en ayunas en mg/dL (30–1000)." },
      ldl: {
        label: "Colesterol LDL (opcional)",
        help: "Medida directa en mg/dL, o 0 para estimar mediante Friedewald.",
      },
    },
    outputs: {
      ldlComputed: { label: "Colesterol LDL", help: "Valor directo o estimación de Friedewald (CT − HDL − TG/5)." },
      totalHdlRatio: { label: "Ratio total/HDL", help: "Objetivo <5,0 — más bajo, mejor." },
      ldlHdlRatio: { label: "Ratio LDL/HDL", help: "Objetivo <3,5 — más bajo, mejor." },
      nonHdlCholesterol: {
        label: "Colesterol no-HDL",
        help: "CT − HDL. Incluye todas las partículas aterogénicas. Objetivo <130 mg/dL.",
      },
      category: {
        label: "Categoría LDL",
        help: "NCEP ATP III: óptimo <100, casi óptimo <130, límite <160, alto <190, muy alto ≥190.",
      },
    },
    errors: {
      tcOutOfRange: "El colesterol total debe estar entre 50 y 500 mg/dL.",
      hdlOutOfRange: "HDL debe estar entre 10 y 200 mg/dL.",
      tgOutOfRange: "Triglicéridos deben estar entre 30 y 1000 mg/dL.",
      ldlOutOfRange: "LDL debe ser 0 (auto) o estar entre 30 y 400 mg/dL.",
    },
    faq: [
      {
        q: "¿Qué es la ecuación de Friedewald?",
        a: "Friedewald (1972) estima LDL = CT − HDL − TG/5. Es fiable cuando los triglicéridos están por debajo de 400 mg/dL.",
      },
      {
        q: "¿Por qué es importante el colesterol no-HDL?",
        a: "El no-HDL incluye todas las lipoproteínas aterogénicas. La guía AHA/ACC 2018 lo destaca como objetivo secundario clave.",
      },
      {
        q: "¿Cuál es un buen nivel de colesterol total?",
        a: "En general, un total <200 mg/dL es deseable, pero las decisiones de tratamiento dependen de LDL, no-HDL y riesgo global.",
      },
    ],
  },

  it: {
    title: "Calcolatore del Colesterolo",
    short: "Valuta il rischio cardiovascolare dal tuo profilo lipidico (CT, HDL, LDL, TG).",
    description:
      "Calcolatore gratuito basato sull'equazione di Friedewald e sulle soglie NCEP ATP III. Inserisci colesterolo totale, HDL, trigliceridi (e opzionalmente LDL) per ottenere rapporti, colesterolo non-HDL e categoria di rischio LDL.",
    keywords: [
      "calcolatore colesterolo",
      "calcolatore LDL",
      "rapporto HDL",
      "equazione Friedewald",
      "profilo lipidico",
      "colesterolo non-HDL",
      "rischio cardiovascolare",
    ],
    inputs: {
      totalCholesterol: { label: "Colesterolo totale", help: "Dal profilo lipidico in mg/dL (50–500)." },
      hdl: { label: "Colesterolo HDL", help: "Lipoproteina ad alta densità in mg/dL (10–200)." },
      triglycerides: { label: "Trigliceridi", help: "Trigliceridi a digiuno in mg/dL (30–1000)." },
      ldl: {
        label: "Colesterolo LDL (opzionale)",
        help: "Misura diretta in mg/dL, o 0 per stimare con Friedewald.",
      },
    },
    outputs: {
      ldlComputed: { label: "Colesterolo LDL", help: "Valore diretto o stima di Friedewald (CT − HDL − TG/5)." },
      totalHdlRatio: { label: "Rapporto totale/HDL", help: "Obiettivo <5,0 — più basso è meglio." },
      ldlHdlRatio: { label: "Rapporto LDL/HDL", help: "Obiettivo <3,5 — più basso è meglio." },
      nonHdlCholesterol: {
        label: "Colesterolo non-HDL",
        help: "CT − HDL. Include tutte le particelle aterogene. Obiettivo <130 mg/dL.",
      },
      category: {
        label: "Categoria LDL",
        help: "NCEP ATP III: ottimale <100, quasi ottimale <130, limite <160, alto <190, molto alto ≥190.",
      },
    },
    errors: {
      tcOutOfRange: "Il colesterolo totale deve essere tra 50 e 500 mg/dL.",
      hdlOutOfRange: "HDL deve essere tra 10 e 200 mg/dL.",
      tgOutOfRange: "I trigliceridi devono essere tra 30 e 1000 mg/dL.",
      ldlOutOfRange: "LDL deve essere 0 (auto) o tra 30 e 400 mg/dL.",
    },
    faq: [
      {
        q: "Cos'è l'equazione di Friedewald?",
        a: "Friedewald (1972) stima LDL = CT − HDL − TG/5. È affidabile con trigliceridi <400 mg/dL.",
      },
      {
        q: "Perché il colesterolo non-HDL è importante?",
        a: "Il non-HDL include tutte le lipoproteine aterogene. Le linee guida AHA/ACC 2018 lo evidenziano come obiettivo secondario chiave.",
      },
      {
        q: "Qual è un buon livello di colesterolo totale?",
        a: "Generalmente, un totale <200 mg/dL è desiderabile, ma le decisioni terapeutiche dipendono da LDL, non-HDL e rischio complessivo.",
      },
    ],
  },

  ar: {
    title: "حاسبة الكوليسترول",
    short: "قيّم خطر أمراض القلب من نتائج فحص الدهون (TC، HDL، LDL، TG).",
    description:
      "حاسبة كوليسترول مجانية تعتمد على معادلة Friedewald وحدود NCEP ATP III. أدخل الكوليسترول الكلي، HDL، الدهون الثلاثية (وLDL اختياريًا) للحصول على النسب وكوليسترول non-HDL وفئة خطورة LDL.",
    keywords: [
      "حاسبة الكوليسترول",
      "حاسبة LDL",
      "نسبة HDL",
      "معادلة فريدوالد",
      "تحليل الدهون",
      "كوليسترول non-HDL",
      "مخاطر القلب",
    ],
    inputs: {
      totalCholesterol: {
        label: "الكوليسترول الكلي",
        help: "من فحص الدهون بالـ mg/dL (50–500).",
      },
      hdl: { label: "كوليسترول HDL", help: "البروتين الدهني عالي الكثافة بالـ mg/dL (10–200)." },
      triglycerides: {
        label: "الدهون الثلاثية",
        help: "قياس صائم بالـ mg/dL (30–1000).",
      },
      ldl: {
        label: "كوليسترول LDL (اختياري)",
        help: "قياس مباشر بالـ mg/dL، أو 0 للتقدير عبر Friedewald.",
      },
    },
    outputs: {
      ldlComputed: { label: "كوليسترول LDL", help: "قياس مباشر أو تقدير Friedewald (TC − HDL − TG/5)." },
      totalHdlRatio: { label: "نسبة الكلي / HDL", help: "الهدف <5.0 — كلما قلّ أفضل." },
      ldlHdlRatio: { label: "نسبة LDL / HDL", help: "الهدف <3.5 — كلما قلّ أفضل." },
      nonHdlCholesterol: {
        label: "كوليسترول non-HDL",
        help: "TC − HDL. يشمل كل الجسيمات المتسببة بالتصلب. الهدف <130 mg/dL.",
      },
      category: {
        label: "فئة LDL",
        help: "NCEP ATP III: مثالي <100، قريب من المثالي <130، حدّي <160، مرتفع <190، مرتفع جدًا ≥190.",
      },
    },
    errors: {
      tcOutOfRange: "الكوليسترول الكلي بين 50 و500 mg/dL.",
      hdlOutOfRange: "HDL بين 10 و200 mg/dL.",
      tgOutOfRange: "الدهون الثلاثية بين 30 و1000 mg/dL.",
      ldlOutOfRange: "LDL يجب أن يكون 0 (حساب تلقائي) أو بين 30 و400 mg/dL.",
    },
    faq: [
      {
        q: "ما معادلة فريدوالد؟",
        a: "تقدّر LDL بالعلاقة TC − HDL − TG/5. موثوقة عندما تكون الدهون الثلاثية أقل من 400 mg/dL.",
      },
      {
        q: "لماذا non-HDL مهم؟",
        a: "يشمل جميع البروتينات الدهنية المسببة للتصلب. أبرزه دليل AHA/ACC 2018 كهدف ثانوي رئيسي.",
      },
      {
        q: "ما الكوليسترول الكلي الجيد؟",
        a: "عمومًا، الأقل من 200 mg/dL مرغوب، لكن قرارات العلاج تعتمد على LDL وnon-HDL والخطر العام.",
      },
    ],
  },

  ru: {
    title: "Калькулятор холестерина",
    short: "Оцените сердечно-сосудистый риск по липидному профилю (ОХ, HDL, LDL, ТГ).",
    description:
      "Бесплатный калькулятор холестерина по уравнению Фридвальда и порогам NCEP ATP III. Введите общий холестерин, HDL, триглицериды (и при желании LDL), чтобы получить соотношения, non-HDL и категорию риска LDL.",
    keywords: [
      "калькулятор холестерина",
      "калькулятор LDL",
      "соотношение HDL",
      "уравнение Фридвальда",
      "липидный профиль",
      "non-HDL холестерин",
      "сердечно-сосудистый риск",
    ],
    inputs: {
      totalCholesterol: { label: "Общий холестерин", help: "Из липидного профиля в мг/дл (50–500)." },
      hdl: { label: "HDL-холестерин", help: "Липопротеин высокой плотности в мг/дл (10–200)." },
      triglycerides: { label: "Триглицериды", help: "Натощак, мг/дл (30–1000)." },
      ldl: {
        label: "LDL-холестерин (необязательно)",
        help: "Прямое измерение в мг/дл, или 0 для оценки по Фридвальду.",
      },
    },
    outputs: {
      ldlComputed: { label: "LDL-холестерин", help: "Прямое значение или оценка Фридвальда (ОХ − HDL − ТГ/5)." },
      totalHdlRatio: { label: "Общий / HDL", help: "Цель <5,0 — чем меньше, тем лучше." },
      ldlHdlRatio: { label: "LDL / HDL", help: "Цель <3,5 — чем меньше, тем лучше." },
      nonHdlCholesterol: {
        label: "Non-HDL холестерин",
        help: "ОХ − HDL. Включает все атерогенные частицы. Цель <130 мг/дл.",
      },
      category: {
        label: "Категория LDL",
        help: "NCEP ATP III: оптимальный <100, близкий к оптимальному <130, пограничный <160, высокий <190, очень высокий ≥190.",
      },
    },
    errors: {
      tcOutOfRange: "Общий холестерин должен быть от 50 до 500 мг/дл.",
      hdlOutOfRange: "HDL должен быть от 10 до 200 мг/дл.",
      tgOutOfRange: "Триглицериды должны быть от 30 до 1000 мг/дл.",
      ldlOutOfRange: "LDL должен быть 0 (авто) или от 30 до 400 мг/дл.",
    },
    faq: [
      {
        q: "Что такое уравнение Фридвальда?",
        a: "Фридвальд (1972) оценивает LDL как ОХ − HDL − ТГ/5. Надёжно при ТГ <400 мг/дл; иначе нужно прямое измерение.",
      },
      {
        q: "Почему важен non-HDL?",
        a: "Non-HDL охватывает все атерогенные липопротеины. Руководство AHA/ACC 2018 выделяет его как ключевую вторичную цель.",
      },
      {
        q: "Какой уровень общего холестерина считается хорошим?",
        a: "Обычно <200 мг/дл считается желательным, но решения о лечении принимаются по LDL, non-HDL и общему риску.",
      },
    ],
  },

  zh: {
    title: "胆固醇计算器",
    short: "根据血脂报告（TC、HDL、LDL、TG）评估心血管风险。",
    description:
      "基于Friedewald公式和NCEP ATP III阈值的免费胆固醇计算器。输入总胆固醇、HDL、甘油三酯（可选LDL），获得比值、非HDL胆固醇及LDL风险分级。",
    keywords: [
      "胆固醇计算器",
      "LDL计算器",
      "HDL比值",
      "Friedewald公式",
      "血脂",
      "非HDL胆固醇",
      "心血管风险",
    ],
    inputs: {
      totalCholesterol: { label: "总胆固醇", help: "血脂报告中的TC（mg/dL，50–500）。" },
      hdl: { label: "HDL胆固醇", help: "高密度脂蛋白（mg/dL，10–200）。" },
      triglycerides: { label: "甘油三酯", help: "空腹甘油三酯（mg/dL，30–1000）。" },
      ldl: {
        label: "LDL胆固醇（可选）",
        help: "直接测量值（mg/dL），或输入0使用Friedewald估算。",
      },
    },
    outputs: {
      ldlComputed: { label: "LDL胆固醇", help: "直接值或Friedewald估算（TC − HDL − TG/5）。" },
      totalHdlRatio: { label: "总/HDL比值", help: "目标<5.0，越低越好。" },
      ldlHdlRatio: { label: "LDL/HDL比值", help: "目标<3.5，越低越好。" },
      nonHdlCholesterol: {
        label: "非HDL胆固醇",
        help: "TC − HDL。涵盖所有致动脉粥样硬化颗粒。目标<130 mg/dL。",
      },
      category: {
        label: "LDL分级",
        help: "NCEP ATP III：理想<100、接近理想<130、临界<160、高<190、极高≥190。",
      },
    },
    errors: {
      tcOutOfRange: "总胆固醇应在50至500 mg/dL之间。",
      hdlOutOfRange: "HDL应在10至200 mg/dL之间。",
      tgOutOfRange: "甘油三酯应在30至1000 mg/dL之间。",
      ldlOutOfRange: "LDL须为0（自动）或在30至400 mg/dL之间。",
    },
    faq: [
      {
        q: "什么是Friedewald公式？",
        a: "Friedewald（1972）估算LDL = TC − HDL − TG/5。当甘油三酯<400 mg/dL时可靠，超过则需直接测量。",
      },
      {
        q: "为什么非HDL胆固醇重要？",
        a: "非HDL包括所有致动脉粥样硬化的脂蛋白。AHA/ACC 2018指南将其列为重要的次要目标。",
      },
      {
        q: "总胆固醇多少算正常？",
        a: "一般<200 mg/dL较理想，但治疗决策主要依据LDL、非HDL和总体心血管风险。",
      },
    ],
  },

  ja: {
    title: "コレステロール計算機",
    short: "脂質パネル（TC、HDL、LDL、TG）から心血管リスクを評価します。",
    description:
      "Friedewald式とNCEP ATP III基準に基づく無料コレステロール計算機。総コレステロール、HDL、中性脂肪（任意でLDL）を入力すると、比率、非HDLコレステロール、LDLリスク分類が表示されます。",
    keywords: [
      "コレステロール計算機",
      "LDL計算機",
      "HDL比",
      "Friedewald式",
      "脂質検査",
      "非HDLコレステロール",
      "心血管リスク",
    ],
    inputs: {
      totalCholesterol: { label: "総コレステロール", help: "脂質パネルの値（mg/dL、50〜500）。" },
      hdl: { label: "HDLコレステロール", help: "高比重リポタンパク（mg/dL、10〜200）。" },
      triglycerides: { label: "中性脂肪", help: "絶食時中性脂肪（mg/dL、30〜1000）。" },
      ldl: {
        label: "LDLコレステロール（任意）",
        help: "直接測定値（mg/dL）、または0でFriedewald推定。",
      },
    },
    outputs: {
      ldlComputed: { label: "LDLコレステロール", help: "直接値またはFriedewald推定（TC − HDL − TG/5）。" },
      totalHdlRatio: { label: "総/HDL比", help: "目標<5.0、低いほどよい。" },
      ldlHdlRatio: { label: "LDL/HDL比", help: "目標<3.5、低いほどよい。" },
      nonHdlCholesterol: {
        label: "非HDLコレステロール",
        help: "TC − HDL。すべての動脈硬化性粒子を含む。目標<130 mg/dL。",
      },
      category: {
        label: "LDL分類",
        help: "NCEP ATP III：適正<100、ほぼ適正<130、境界<160、高値<190、超高値≥190。",
      },
    },
    errors: {
      tcOutOfRange: "総コレステロールは50〜500 mg/dLで入力してください。",
      hdlOutOfRange: "HDLは10〜200 mg/dLで入力してください。",
      tgOutOfRange: "中性脂肪は30〜1000 mg/dLで入力してください。",
      ldlOutOfRange: "LDLは0（自動）または30〜400 mg/dLで入力してください。",
    },
    faq: [
      {
        q: "Friedewald式とは？",
        a: "Friedewald（1972）はLDLをTC − HDL − TG/5で推定します。中性脂肪が400 mg/dL未満で信頼でき、それ以上なら直接測定が推奨されます。",
      },
      {
        q: "非HDLコレステロールはなぜ重要？",
        a: "非HDLは動脈硬化性のすべてのリポタンパクを含みます。AHA/ACC 2018ガイドラインで主要な副次目標とされています。",
      },
      {
        q: "良い総コレステロール値は？",
        a: "一般に200 mg/dL未満が望ましいですが、治療判断はLDL、非HDL、全体的なリスクで決まります。",
      },
    ],
  },

  ko: {
    title: "콜레스테롤 계산기",
    short: "지질 패널(TC, HDL, LDL, TG)로 심혈관 위험을 평가하세요.",
    description:
      "Friedewald 공식과 NCEP ATP III 기준에 기반한 무료 콜레스테롤 계산기. 총 콜레스테롤, HDL, 중성지방(선택적으로 LDL)을 입력하면 비율, 비HDL 콜레스테롤, LDL 위험 등급을 확인할 수 있습니다.",
    keywords: [
      "콜레스테롤 계산기",
      "LDL 계산기",
      "HDL 비율",
      "Friedewald 공식",
      "지질 검사",
      "비HDL 콜레스테롤",
      "심혈관 위험",
    ],
    inputs: {
      totalCholesterol: { label: "총 콜레스테롤", help: "지질 패널 값(mg/dL, 50~500)." },
      hdl: { label: "HDL 콜레스테롤", help: "고밀도 지단백(mg/dL, 10~200)." },
      triglycerides: { label: "중성지방", help: "공복 시 중성지방(mg/dL, 30~1000)." },
      ldl: {
        label: "LDL 콜레스테롤 (선택)",
        help: "직접 측정값(mg/dL) 또는 0을 입력해 Friedewald로 추정합니다.",
      },
    },
    outputs: {
      ldlComputed: { label: "LDL 콜레스테롤", help: "직접 값 또는 Friedewald 추정(TC − HDL − TG/5)." },
      totalHdlRatio: { label: "총/HDL 비율", help: "목표 <5.0 — 낮을수록 좋습니다." },
      ldlHdlRatio: { label: "LDL/HDL 비율", help: "목표 <3.5 — 낮을수록 좋습니다." },
      nonHdlCholesterol: {
        label: "비HDL 콜레스테롤",
        help: "TC − HDL. 모든 동맥경화성 입자를 포함. 목표 <130 mg/dL.",
      },
      category: {
        label: "LDL 분류",
        help: "NCEP ATP III: 최적 <100, 거의 최적 <130, 경계 <160, 높음 <190, 매우 높음 ≥190.",
      },
    },
    errors: {
      tcOutOfRange: "총 콜레스테롤은 50~500 mg/dL이어야 합니다.",
      hdlOutOfRange: "HDL은 10~200 mg/dL이어야 합니다.",
      tgOutOfRange: "중성지방은 30~1000 mg/dL이어야 합니다.",
      ldlOutOfRange: "LDL은 0(자동) 또는 30~400 mg/dL이어야 합니다.",
    },
    faq: [
      {
        q: "Friedewald 공식이란?",
        a: "Friedewald(1972)는 LDL = TC − HDL − TG/5로 추정합니다. 중성지방 <400 mg/dL일 때 신뢰할 수 있습니다.",
      },
      {
        q: "비HDL 콜레스테롤이 중요한 이유?",
        a: "비HDL은 모든 동맥경화성 지단백을 포함합니다. AHA/ACC 2018 지침에서 핵심 부차 목표로 강조됩니다.",
      },
      {
        q: "좋은 총 콜레스테롤 수치는?",
        a: "일반적으로 <200 mg/dL이 바람직하지만, 치료 결정은 LDL, 비HDL 및 전체 심혈관 위험으로 이루어집니다.",
      },
    ],
  },

  hi: {
    title: "कोलेस्ट्रॉल कैलकुलेटर",
    short: "अपने लिपिड पैनल (TC, HDL, LDL, TG) से हृदय-संबंधी जोखिम का मूल्यांकन करें।",
    description:
      "Friedewald समीकरण और NCEP ATP III सीमाओं पर आधारित मुफ़्त कोलेस्ट्रॉल कैलकुलेटर। कुल कोलेस्ट्रॉल, HDL, ट्राइग्लिसराइड (और वैकल्पिक रूप से LDL) दर्ज करके अनुपात, non-HDL कोलेस्ट्रॉल और LDL जोखिम श्रेणी प्राप्त करें।",
    keywords: [
      "कोलेस्ट्रॉल कैलकुलेटर",
      "LDL कैलकुलेटर",
      "HDL अनुपात",
      "Friedewald समीकरण",
      "लिपिड पैनल",
      "non-HDL कोलेस्ट्रॉल",
      "हृदय जोखिम",
    ],
    inputs: {
      totalCholesterol: { label: "कुल कोलेस्ट्रॉल", help: "लिपिड पैनल मान mg/dL में (50–500)।" },
      hdl: { label: "HDL कोलेस्ट्रॉल", help: "उच्च घनत्व लिपोप्रोटीन mg/dL में (10–200)।" },
      triglycerides: { label: "ट्राइग्लिसराइड", help: "उपवास के समय mg/dL में (30–1000)।" },
      ldl: {
        label: "LDL कोलेस्ट्रॉल (वैकल्पिक)",
        help: "प्रत्यक्ष मान mg/dL में, या Friedewald अनुमान हेतु 0 दर्ज करें।",
      },
    },
    outputs: {
      ldlComputed: { label: "LDL कोलेस्ट्रॉल", help: "प्रत्यक्ष मान या Friedewald अनुमान (TC − HDL − TG/5)।" },
      totalHdlRatio: { label: "कुल / HDL अनुपात", help: "लक्ष्य <5.0 — कम बेहतर है।" },
      ldlHdlRatio: { label: "LDL / HDL अनुपात", help: "लक्ष्य <3.5 — कम बेहतर है।" },
      nonHdlCholesterol: {
        label: "non-HDL कोलेस्ट्रॉल",
        help: "TC − HDL। सभी एथेरोजेनिक कणों को शामिल करता है। लक्ष्य <130 mg/dL।",
      },
      category: {
        label: "LDL श्रेणी",
        help: "NCEP ATP III: इष्टतम <100, लगभग इष्टतम <130, सीमा <160, उच्च <190, बहुत उच्च ≥190।",
      },
    },
    errors: {
      tcOutOfRange: "कुल कोलेस्ट्रॉल 50–500 mg/dL के बीच होना चाहिए।",
      hdlOutOfRange: "HDL 10–200 mg/dL के बीच होना चाहिए।",
      tgOutOfRange: "ट्राइग्लिसराइड 30–1000 mg/dL के बीच होना चाहिए।",
      ldlOutOfRange: "LDL 0 (स्वतः गणना) या 30–400 mg/dL के बीच होना चाहिए।",
    },
    faq: [
      {
        q: "Friedewald समीकरण क्या है?",
        a: "Friedewald (1972) LDL को TC − HDL − TG/5 के रूप में अनुमानित करता है। यह TG <400 mg/dL पर विश्वसनीय है।",
      },
      {
        q: "non-HDL कोलेस्ट्रॉल क्यों महत्वपूर्ण है?",
        a: "non-HDL सभी एथेरोजेनिक लिपोप्रोटीन को कवर करता है। AHA/ACC 2018 दिशानिर्देश इसे प्रमुख द्वितीयक लक्ष्य के रूप में रेखांकित करता है।",
      },
      {
        q: "अच्छा कुल कोलेस्ट्रॉल स्तर क्या है?",
        a: "सामान्यतः <200 mg/dL वांछनीय माना जाता है, परंतु उपचार निर्णय LDL, non-HDL और कुल जोखिम पर आधारित होते हैं।",
      },
    ],
  },
};

export default i18n;
