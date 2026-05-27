import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Torque Calculator",
    short: "Solve for torque from force and distance, or vice versa using τ = F × r.",
    description:
      "Free torque calculator for rotational mechanics. Calculate torque (N·m) from force (N) and distance (m), or solve for force/distance given torque. Includes angular momentum, rotational inertia concepts.",
    keywords: ["torque calculator", "moment", "rotational force", "angular momentum", "mechanics"],
    inputs: {
      momentOrForce: {
        label: "Calculate",
        help: "Choose whether to find torque from force/distance, or force from torque/distance.",
      },
      force: {
        label: "Force (N) or Torque (N·m)",
        help: "Applied force in Newtons, or torque if solving for force.",
      },
      distance: {
        label: "Distance (m)",
        help: "Perpendicular distance from the axis of rotation (radius arm).",
      },
    },
    outputs: {
      torqueNm: {
        label: "Torque (N·m)",
        help: "Rotational force: τ = F × r.",
      },
      forceN: {
        label: "Force (N)",
        help: "Applied force perpendicular to the radius.",
      },
      distanceM: {
        label: "Distance (m)",
        help: "Perpendicular distance from rotation axis.",
      },
    },
    options: {
      momentOrForce: {
        force: "Calculate Torque from Force & Distance",
        moment: "Calculate Force from Torque & Distance",
      },
    },
    errors: {
      invalidInputs: "All inputs must be positive.",
    },
    faq: [
      {
        q: "What is torque?",
        a: "Torque (or moment) is a rotational force that causes angular acceleration. It equals force multiplied by the perpendicular distance (radius arm) from the axis: τ = F × r.",
      },
      {
        q: "Why does distance matter in torque?",
        a: "The further the force is applied from the axis, the greater the torque produced. A small force at a large distance can produce the same torque as a large force at a small distance.",
      },
      {
        q: "What if force is not perpendicular?",
        a: "If force is applied at an angle θ to the radius, multiply by sin(θ): τ = F × r × sin(θ).",
      },
    ],
  },

  tr: {
    title: "Tork Hesaplayıcı",
    short: "τ = F × r kullanarak torktan kuvvet ve mesafeyi veya tersini çözün.",
    description:
      "Dönme mekaniği için ücretsiz tork hesaplayıcı. Torkun (N·m) kuvvetinden (N) ve mesafeden (m) hesaplanması veya verilen torktan kuvvet/mesafe çözümü.",
    keywords: ["tork hesaplayıcı", "moment", "dönme kuvveti", "mekanik", "açısal hareket"],
    inputs: {
      momentOrForce: {
        label: "Hesapla",
        help: "Kuvvetten/mesafeden tork bulup bulmayacağınızı veya torktan kuvvet bulmayacağınızı seçin.",
      },
      force: {
        label: "Kuvvet (N) veya Tork (N·m)",
        help: "Uygulanan kuvvet Newton cinsinden, veya torktan kuvvet çözüyorsanız tork.",
      },
      distance: {
        label: "Mesafe (m)",
        help: "Dönme ekseni (kol) arasındaki dik mesafe.",
      },
    },
    outputs: {
      torqueNm: {
        label: "Tork (N·m)",
        help: "Dönme kuvveti: τ = F × r.",
      },
      forceN: {
        label: "Kuvvet (N)",
        help: "Yarıçapa dik uygulanan kuvvet.",
      },
      distanceM: {
        label: "Mesafe (m)",
        help: "Dönme ekseninden dik mesafe.",
      },
    },
    options: {
      momentOrForce: {
        force: "Kuvvet ve Mesafeden Torkuyu Hesapla",
        moment: "Tork ve Mesafeden Kuvveti Hesapla",
      },
    },
    errors: {
      invalidInputs: "Tüm girdiler pozitif olmalıdır.",
    },
    faq: [
      {
        q: "Tork nedir?",
        a: "Tork (veya moment), açısal ivme üreten dönme kuvvetidir. Kuvvetin eksen arasındaki dik mesafe (kol) ile çarpımına eşittir: τ = F × r.",
      },
      {
        q: "Neden mesafe torka önemli?",
        a: "Kuvvet eksenden ne kadar uzakta uygulanırsa, o kadar çok tork üretilir. Küçük bir kuvvet büyük bir mesafede aynı torkuyu üreten büyük bir kuvvete eşit olabilir.",
      },
      {
        q: "Kuvvet dik değilse?",
        a: "Kuvvet yarıçapa θ açısında uygulanırsa, sin(θ) ile çarpın: τ = F × r × sin(θ).",
      },
    ],
  },

  de: {
    title: "Drehmomentrechner",
    short: "Berechnen Sie Drehmoment aus Kraft und Abstand oder umgekehrt mit τ = F × r.",
    description:
      "Kostenlos Drehmomentrechner für Rotationsmechanik. Berechnen Sie Drehmoment (N·m) aus Kraft (N) und Abstand (m), oder lösen Sie für Kraft/Abstand mit gegebenem Drehmoment.",
    keywords: ["Drehmomentrechner", "Moment", "Rotationskraft", "Mechanik"],
    inputs: {
      momentOrForce: {
        label: "Berechnen",
        help: "Wählen Sie, ob Sie Drehmoment aus Kraft/Abstand finden oder Kraft aus Drehmoment/Abstand.",
      },
      force: {
        label: "Kraft (N) oder Drehmoment (N·m)",
        help: "Angewendete Kraft in Newton, oder Drehmoment wenn Kraft gelöst wird.",
      },
      distance: {
        label: "Abstand (m)",
        help: "Senkrechter Abstand von der Drehachse (Hebelarm).",
      },
    },
    outputs: {
      torqueNm: {
        label: "Drehmoment (N·m)",
        help: "Rotationskraft: τ = F × r.",
      },
      forceN: {
        label: "Kraft (N)",
        help: "Senkrecht zum Radius angewendete Kraft.",
      },
      distanceM: {
        label: "Abstand (m)",
        help: "Senkrechter Abstand von der Drehachse.",
      },
    },
    options: {
      momentOrForce: {
        force: "Drehmoment aus Kraft und Abstand berechnen",
        moment: "Kraft aus Drehmoment und Abstand berechnen",
      },
    },
    errors: {
      invalidInputs: "Alle Eingaben müssen positiv sein.",
    },
    faq: [
      {
        q: "Was ist Drehmoment?",
        a: "Drehmoment (oder Moment) ist eine Rotationskraft, die Winkelbeschleunigung verursacht. Es ist Kraft mal senkrechter Abstand (Hebelarm) von der Achse: τ = F × r.",
      },
      {
        q: "Warum ist Abstand wichtig?",
        a: "Je weiter die Kraft von der Achse entfernt ist, desto größer das erzeugte Drehmoment. Eine kleine Kraft über große Entfernung kann gleiches Drehmoment wie große Kraft über kleine Entfernung erzeugen.",
      },
      {
        q: "Was wenn Kraft nicht senkrecht ist?",
        a: "Wenn Kraft in Winkel θ zur Achse wirkt, multiplizieren Sie mit sin(θ): τ = F × r × sin(θ).",
      },
    ],
  },

  fr: {
    title: "Calculatrice de Couple",
    short: "Calculez le couple à partir de la force et de la distance, ou vice versa à l'aide de τ = F × r.",
    description:
      "Calculatrice gratuite de couple pour la mécanique rotationnelle. Calculez le couple (N·m) à partir de la force (N) et de la distance (m), ou résolvez pour la force/distance avec un couple donné.",
    keywords: ["calculatrice de couple", "moment", "force rotationnelle", "mécanique"],
    inputs: {
      momentOrForce: {
        label: "Calculer",
        help: "Choisissez si vous trouvez le couple à partir de force/distance ou force à partir de couple/distance.",
      },
      force: {
        label: "Force (N) ou Couple (N·m)",
        help: "Force appliquée en Newtons, ou couple si vous résolvez pour la force.",
      },
      distance: {
        label: "Distance (m)",
        help: "Distance perpendiculaire de l'axe de rotation (bras de levier).",
      },
    },
    outputs: {
      torqueNm: {
        label: "Couple (N·m)",
        help: "Force rotationnelle: τ = F × r.",
      },
      forceN: {
        label: "Force (N)",
        help: "Force appliquée perpendiculaire au rayon.",
      },
      distanceM: {
        label: "Distance (m)",
        help: "Distance perpendiculaire de l'axe de rotation.",
      },
    },
    options: {
      momentOrForce: {
        force: "Calculer le couple à partir de force et distance",
        moment: "Calculer la force à partir du couple et distance",
      },
    },
    errors: {
      invalidInputs: "Toutes les entrées doivent être positives.",
    },
    faq: [
      {
        q: "Qu'est-ce que le couple?",
        a: "Le couple (ou moment) est une force rotationnelle qui cause une accélération angulaire. Il est égal à la force multipliée par la distance perpendiculaire (bras de levier) de l'axe: τ = F × r.",
      },
      {
        q: "Pourquoi la distance est-elle importante?",
        a: "Plus la force est appliquée loin de l'axe, plus grand le couple produit. Une petite force à grande distance peut produire le même couple qu'une grande force à faible distance.",
      },
      {
        q: "Et si la force n'est pas perpendiculaire?",
        a: "Si la force s'applique à un angle θ au rayon, multipliez par sin(θ): τ = F × r × sin(θ).",
      },
    ],
  },

  es: {
    title: "Calculadora de Torque",
    short: "Calcule el torque a partir de la fuerza y distancia, o viceversa usando τ = F × r.",
    description:
      "Calculadora gratuita de torque para mecánica rotacional. Calcule torque (N·m) a partir de fuerza (N) y distancia (m), o resuelva para fuerza/distancia dado un torque.",
    keywords: ["calculadora de torque", "momento", "fuerza rotacional", "mecánica"],
    inputs: {
      momentOrForce: {
        label: "Calcular",
        help: "Elija si desea encontrar torque a partir de fuerza/distancia o fuerza a partir de torque/distancia.",
      },
      force: {
        label: "Fuerza (N) o Torque (N·m)",
        help: "Fuerza aplicada en Newtons, o torque si resuelve para fuerza.",
      },
      distance: {
        label: "Distancia (m)",
        help: "Distancia perpendicular del eje de rotación (brazo de palanca).",
      },
    },
    outputs: {
      torqueNm: {
        label: "Torque (N·m)",
        help: "Fuerza rotatoria: τ = F × r.",
      },
      forceN: {
        label: "Fuerza (N)",
        help: "Fuerza aplicada perpendicular al radio.",
      },
      distanceM: {
        label: "Distancia (m)",
        help: "Distancia perpendicular del eje de rotación.",
      },
    },
    options: {
      momentOrForce: {
        force: "Calcular Torque a partir de Fuerza y Distancia",
        moment: "Calcular Fuerza a partir de Torque y Distancia",
      },
    },
    errors: {
      invalidInputs: "Todas las entradas deben ser positivas.",
    },
    faq: [
      {
        q: "¿Qué es el torque?",
        a: "El torque (o momento) es una fuerza rotacional que causa aceleración angular. Es igual a la fuerza multiplicada por la distancia perpendicular (brazo de palanca) del eje: τ = F × r.",
      },
      {
        q: "¿Por qué es importante la distancia?",
        a: "Cuanto más lejos se aplique la fuerza del eje, mayor el torque producido. Una fuerza pequeña a gran distancia puede producir el mismo torque que una fuerza grande a poca distancia.",
      },
      {
        q: "¿Y si la fuerza no es perpendicular?",
        a: "Si la fuerza se aplica en ángulo θ al radio, multiplique por sin(θ): τ = F × r × sin(θ).",
      },
    ],
  },

  it: {
    title: "Calcolatore della Coppia",
    short: "Calcola la coppia dalla forza e dalla distanza, o viceversa usando τ = F × r.",
    description:
      "Calcolatore gratuito della coppia per la meccanica rotazionale. Calcola la coppia (N·m) da forza (N) e distanza (m), o risolvi per forza/distanza data una coppia.",
    keywords: ["calcolatore della coppia", "momento", "forza rotatoria", "meccanica"],
    inputs: {
      momentOrForce: {
        label: "Calcola",
        help: "Scegli se trovare la coppia da forza/distanza o forza da coppia/distanza.",
      },
      force: {
        label: "Forza (N) o Coppia (N·m)",
        help: "Forza applicata in Newton, o coppia se stai risolvendo per la forza.",
      },
      distance: {
        label: "Distanza (m)",
        help: "Distanza perpendicolare dall'asse di rotazione (braccio di leva).",
      },
    },
    outputs: {
      torqueNm: {
        label: "Coppia (N·m)",
        help: "Forza rotatoria: τ = F × r.",
      },
      forceN: {
        label: "Forza (N)",
        help: "Forza applicata perpendicolare al raggio.",
      },
      distanceM: {
        label: "Distanza (m)",
        help: "Distanza perpendicolare dall'asse di rotazione.",
      },
    },
    options: {
      momentOrForce: {
        force: "Calcola la Coppia da Forza e Distanza",
        moment: "Calcola la Forza da Coppia e Distanza",
      },
    },
    errors: {
      invalidInputs: "Tutti gli input devono essere positivi.",
    },
    faq: [
      {
        q: "Cos'è la coppia?",
        a: "La coppia (o momento) è una forza rotatoria che causa accelerazione angolare. È uguale alla forza moltiplicata per la distanza perpendicolare (braccio di leva) dall'asse: τ = F × r.",
      },
      {
        q: "Perché la distanza è importante?",
        a: "Quanto più lontano la forza è applicata dall'asse, maggiore la coppia prodotta. Una piccola forza a grande distanza può produrre la stessa coppia di una grande forza a breve distanza.",
      },
      {
        q: "E se la forza non è perpendicolare?",
        a: "Se la forza è applicata con angolo θ al raggio, moltiplica per sin(θ): τ = F × r × sin(θ).",
      },
    ],
  },

  ar: {
    title: "آلة حاسبة العزم",
    short: "احسب العزم من القوة والمسافة، أو العكس باستخدام τ = F × r.",
    description:
      "آلة حاسبة مجانية للعزم لميكانيكا الدوران. احسب العزم (N·m) من القوة (N) والمسافة (m)، أو حل للقوة/المسافة عند إعطاء عزم.",
    keywords: ["حاسبة العزم", "اللحظة", "قوة الدوران", "الميكانيكا"],
    inputs: {
      momentOrForce: {
        label: "احسب",
        help: "اختر ما إذا كنت تريد إيجاد العزم من القوة/المسافة أو القوة من العزم/المسافة.",
      },
      force: {
        label: "القوة (N) أو العزم (N·m)",
        help: "القوة المطبقة بالنيوتن، أو العزم إذا كنت تحل للقوة.",
      },
      distance: {
        label: "المسافة (m)",
        help: "المسافة العمودية من محور الدوران (ذراع الرافعة).",
      },
    },
    outputs: {
      torqueNm: {
        label: "العزم (N·m)",
        help: "قوة الدوران: τ = F × r.",
      },
      forceN: {
        label: "القوة (N)",
        help: "القوة المطبقة بشكل عمودي على نصف القطر.",
      },
      distanceM: {
        label: "المسافة (m)",
        help: "المسافة العمودية من محور الدوران.",
      },
    },
    options: {
      momentOrForce: {
        force: "احسب العزم من القوة والمسافة",
        moment: "احسب القوة من العزم والمسافة",
      },
    },
    errors: {
      invalidInputs: "جميع المدخلات يجب أن تكون موجبة.",
    },
    faq: [
      {
        q: "ما هو العزم؟",
        a: "العزم (أو اللحظة) هو قوة دوران تسبب تسارع زاوي. وهو يساوي القوة مضروبة في المسافة العمودية (ذراع الرافعة) من المحور: τ = F × r.",
      },
      {
        q: "لماذا المسافة مهمة؟",
        a: "كلما زاد بعد القوة عن محور الدوران، زاد العزم المُنتج. قوة صغيرة على مسافة كبيرة يمكن أن تُنتج نفس العزم كقوة كبيرة على مسافة صغيرة.",
      },
      {
        q: "ماذا لو كانت القوة ليست عمودية؟",
        a: "إذا طُبقت القوة بزاوية θ على نصف القطر، اضرب في sin(θ): τ = F × r × sin(θ).",
      },
    ],
  },

  ru: {
    title: "Калькулятор крутящего момента",
    short: "Вычислите крутящий момент из силы и расстояния, или наоборот, используя τ = F × r.",
    description:
      "Бесплатный калькулятор крутящего момента для вращательной механики. Вычислите крутящий момент (N·m) из силы (N) и расстояния (m), или решите для силы/расстояния при заданном крутящем моменте.",
    keywords: ["калькулятор крутящего момента", "момент", "вращательная сила", "механика"],
    inputs: {
      momentOrForce: {
        label: "Вычислить",
        help: "Выберите, нужно ли найти крутящий момент из силы/расстояния или силу из крутящего момента/расстояния.",
      },
      force: {
        label: "Сила (N) или Крутящий момент (N·m)",
        help: "Приложенная сила в Ньютонах, или крутящий момент, если решаете для силы.",
      },
      distance: {
        label: "Расстояние (m)",
        help: "Перпендикулярное расстояние от оси вращения (плечо рычага).",
      },
    },
    outputs: {
      torqueNm: {
        label: "Крутящий момент (N·m)",
        help: "Вращательная сила: τ = F × r.",
      },
      forceN: {
        label: "Сила (N)",
        help: "Сила, приложенная перпендикулярно радиусу.",
      },
      distanceM: {
        label: "Расстояние (m)",
        help: "Перпендикулярное расстояние от оси вращения.",
      },
    },
    options: {
      momentOrForce: {
        force: "Вычислить крутящий момент из силы и расстояния",
        moment: "Вычислить силу из крутящего момента и расстояния",
      },
    },
    errors: {
      invalidInputs: "Все входные данные должны быть положительными.",
    },
    faq: [
      {
        q: "Что такое крутящий момент?",
        a: "Крутящий момент (или момент силы) — это вращательная сила, вызывающая угловое ускорение. Он равен силе, умноженной на перпендикулярное расстояние (плечо рычага) от оси: τ = F × r.",
      },
      {
        q: "Почему расстояние важно?",
        a: "Чем дальше от оси приложена сила, тем больше произведенный крутящий момент. Малая сила на большом расстоянии может произвести такой же крутящий момент, как большая сила на малом расстоянии.",
      },
      {
        q: "Что если сила не перпендикулярна?",
        a: "Если сила приложена под углом θ к радиусу, умножьте на sin(θ): τ = F × r × sin(θ).",
      },
    ],
  },

  zh: {
    title: "扭矩计算器",
    short: "使用τ = F × r从力和距离计算扭矩，或反之亦然。",
    description:
      "用于旋转力学的免费扭矩计算器。从力(N)和距离(m)计算扭矩(N·m)，或在给定扭矩的情况下求解力/距离。",
    keywords: ["扭矩计算器", "力矩", "旋转力", "力学"],
    inputs: {
      momentOrForce: {
        label: "计算",
        help: "选择是从力/距离求扭矩，还是从扭矩/距离求力。",
      },
      force: {
        label: "力(N)或扭矩(N·m)",
        help: "以牛顿为单位的应用力，或若求解力则为扭矩。",
      },
      distance: {
        label: "距离(m)",
        help: "从旋转轴的垂直距离(力臂)。",
      },
    },
    outputs: {
      torqueNm: {
        label: "扭矩(N·m)",
        help: "旋转力：τ = F × r。",
      },
      forceN: {
        label: "力(N)",
        help: "垂直于半径施加的力。",
      },
      distanceM: {
        label: "距离(m)",
        help: "从旋转轴的垂直距离。",
      },
    },
    options: {
      momentOrForce: {
        force: "从力和距离计算扭矩",
        moment: "从扭矩和距离计算力",
      },
    },
    errors: {
      invalidInputs: "所有输入必须为正数。",
    },
    faq: [
      {
        q: "什么是扭矩?",
        a: "扭矩(或力矩)是导致角加速度的旋转力。它等于力乘以从轴的垂直距离(力臂)：τ = F × r。",
      },
      {
        q: "距离为什么重要?",
        a: "力距轴越远，产生的扭矩越大。小力在大距离处产生的扭矩可与大力在小距离处产生的扭矩相同。",
      },
      {
        q: "如果力不垂直怎么办?",
        a: "如果力以角度θ施加到半径，乘以sin(θ)：τ = F × r × sin(θ)。",
      },
    ],
  },

  ja: {
    title: "トルク計算機",
    short: "τ = F × rを使用して、力と距離からトルクを計算するか、その逆を行います。",
    description:
      "回転力学用の無料トルク計算機。力(N)と距離(m)からトルク(N·m)を計算するか、与えられたトルクから力/距離を解きます。",
    keywords: ["トルク計算機", "モーメント", "回転力", "力学"],
    inputs: {
      momentOrForce: {
        label: "計算",
        help: "力/距離からトルクを求めるのか、トルク/距離から力を求めるのかを選択します。",
      },
      force: {
        label: "力(N)またはトルク(N·m)",
        help: "ニュートン単位の加えられた力、または力を解く場合はトルク。",
      },
      distance: {
        label: "距離(m)",
        help: "回転軸からの垂直距離(力のアーム)。",
      },
    },
    outputs: {
      torqueNm: {
        label: "トルク(N·m)",
        help: "回転力：τ = F × r。",
      },
      forceN: {
        label: "力(N)",
        help: "半径に垂直に加えられた力。",
      },
      distanceM: {
        label: "距離(m)",
        help: "回転軸からの垂直距離。",
      },
    },
    options: {
      momentOrForce: {
        force: "力と距離からトルクを計算",
        moment: "トルクと距離から力を計算",
      },
    },
    errors: {
      invalidInputs: "すべての入力は正の値である必要があります。",
    },
    faq: [
      {
        q: "トルクとは何ですか?",
        a: "トルク(またはモーメント)は角加速度を引き起こす回転力です。これは力に軸からの垂直距離(力のアーム)を掛けたものに等しいです：τ = F × r。",
      },
      {
        q: "距離が重要なのはなぜですか?",
        a: "力が軸からさらに遠く離れて加えられるほど、生成されるトルクが大きくなります。小さな力が大きな距離で加えられると、大きな力が小さな距離で加えられるのと同じトルクを生成できます。",
      },
      {
        q: "力が垂直でない場合はどうしますか?",
        a: "力が半径にθの角度で加えられる場合、sin(θ)を掛けます：τ = F × r × sin(θ)。",
      },
    ],
  },

  ko: {
    title: "토크 계산기",
    short: "τ = F × r를 사용하여 힘과 거리에서 토크를 계산하거나 그 반대를 수행합니다.",
    description:
      "회전 역학을 위한 무료 토크 계산기입니다. 힘(N)과 거리(m)에서 토크(N·m)를 계산하거나 주어진 토크에서 힘/거리를 해결합니다.",
    keywords: ["토크 계산기", "모멘트", "회전력", "역학"],
    inputs: {
      momentOrForce: {
        label: "계산",
        help: "힘/거리에서 토크를 찾을지 또는 토크/거리에서 힘을 찾을지 선택합니다.",
      },
      force: {
        label: "힘(N) 또는 토크(N·m)",
        help: "뉴턴 단위의 적용된 힘, 또는 힘을 푸는 경우 토크입니다.",
      },
      distance: {
        label: "거리(m)",
        help: "회전축으로부터의 수직 거리(레버 암)입니다.",
      },
    },
    outputs: {
      torqueNm: {
        label: "토크(N·m)",
        help: "회전력: τ = F × r.",
      },
      forceN: {
        label: "힘(N)",
        help: "반지름에 수직으로 적용되는 힘입니다.",
      },
      distanceM: {
        label: "거리(m)",
        help: "회전축으로부터의 수직 거리입니다.",
      },
    },
    options: {
      momentOrForce: {
        force: "힘과 거리에서 토크 계산",
        moment: "토크와 거리에서 힘 계산",
      },
    },
    errors: {
      invalidInputs: "모든 입력은 양수여야 합니다.",
    },
    faq: [
      {
        q: "토크란 무엇인가요?",
        a: "토크(또는 모멘트)는 각가속도를 일으키는 회전력입니다. 이는 축으로부터의 수직 거리(레버 암)에 힘을 곱한 값과 같습니다: τ = F × r.",
      },
      {
        q: "거리가 중요한 이유는 무엇인가요?",
        a: "축으로부터 힘이 더 멀리 떨어져 있을수록 생성되는 토크가 더 큽니다. 큰 거리에서의 작은 힘은 작은 거리에서의 큰 힘과 동일한 토크를 생성할 수 있습니다.",
      },
      {
        q: "힘이 수직이 아니면 어떻게 되나요?",
        a: "힘이 반지름에 각도 θ로 적용되면 sin(θ)를 곱합니다: τ = F × r × sin(θ).",
      },
    ],
  },

  hi: {
    title: "टोक कैलकुलेटर",
    short: "τ = F × r का उपयोग करके बल और दूरी से टोक की गणना करें, या इसके विपरीत।",
    description:
      "रोटेशनल मैकेनिक्स के लिए मुफ्त टोक कैलकुलेटर। बल (N) और दूरी (m) से टोक (N·m) की गणना करें, या दिए गए टोक से बल/दूरी को हल करें।",
    keywords: ["टोक कैलकुलेटर", "मोमेंट", "रोटेशनल बल", "मैकेनिक्स"],
    inputs: {
      momentOrForce: {
        label: "गणना करें",
        help: "चुनें कि आप बल/दूरी से टोक खोज रहे हैं या टोक/दूरी से बल।",
      },
      force: {
        label: "बल (N) या टोक (N·m)",
        help: "न्यूटन में लागू बल, या यदि बल के लिए हल कर रहे हैं तो टोक।",
      },
      distance: {
        label: "दूरी (m)",
        help: "घूर्णन अक्ष से लंबवत दूरी (लीवर आर्म)।",
      },
    },
    outputs: {
      torqueNm: {
        label: "टोक (N·m)",
        help: "रोटेशनल बल: τ = F × r।",
      },
      forceN: {
        label: "बल (N)",
        help: "त्रिज्या के लिए लंबवत लागू बल।",
      },
      distanceM: {
        label: "दूरी (m)",
        help: "घूर्णन अक्ष से लंबवत दूरी।",
      },
    },
    options: {
      momentOrForce: {
        force: "बल और दूरी से टोक की गणना करें",
        moment: "टोक और दूरी से बल की गणना करें",
      },
    },
    errors: {
      invalidInputs: "सभी इनपुट सकारात्मक होने चाहिए।",
    },
    faq: [
      {
        q: "टोक क्या है?",
        a: "टोक (या मोमेंट) एक रोटेशनल बल है जो कोणीय त्वरण का कारण बनता है। यह अक्ष से लंबवत दूरी (लीवर आर्म) से गुणा किए गए बल के बराबर है: τ = F × r।",
      },
      {
        q: "दूरी महत्वपूर्ण क्यों है?",
        a: "जितना दूर बल अक्ष से लागू होता है, उतना ही अधिक टोक उत्पन्न होता है। एक छोटा बल बड़ी दूरी पर बड़े बल के समान टोक उत्पन्न कर सकता है।",
      },
      {
        q: "अगर बल लंबवत नहीं है?",
        a: "यदि बल त्रिज्या के कोण θ पर लागू होता है, तो sin(θ) से गुणा करें: τ = F × r × sin(θ)।",
      },
    ],
  },
};

export default i18n;
