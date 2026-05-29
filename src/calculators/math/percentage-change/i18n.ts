import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Percentage Change Calculator",
    short: "Calculate percent change between two values: ((new − original) / |original|) × 100.",
    description:
      "Free percentage change calculator. Enter an original and a new value to get the percent change, signed absolute change, relative change ratio, and the direction (increase / decrease / no change). Correctly handles negative bases by using |original| as the denominator.",
    keywords: [
      "percentage change calculator",
      "percent change",
      "percent increase",
      "percent decrease",
      "growth rate",
      "relative change",
      "delta percent",
    ],
    inputs: {
      originalValue: { label: "Original Value", help: "The starting value (V_old)." },
      newValue: { label: "New Value", help: "The ending value (V_new)." },
    },
    outputs: {
      percentChange: { label: "Percent Change (%)", help: "((new − original) / |original|) × 100." },
      absoluteChange: { label: "Absolute Change", help: "Signed difference: new − original." },
      relativeChange: { label: "Relative Change", help: "Absolute change divided by |original|." },
      direction: {
        label: "Direction",
        help: "increase, decrease, no-change, or from-zero when the base is 0.",
      },
      fromZero: {
        label: "From Zero?",
        help: "1 when the original value is 0 and the new value is non-zero (undefined percent).",
      },
      explanation: { label: "Explanation", help: "Step-by-step description of the result." },
    },
    errors: {
      nonFinite: "Inputs must be finite numbers.",
      fromZero: "Percentage change from zero is undefined. Report the absolute change instead.",
    },
    faq: [
      {
        q: "What is percentage change?",
        a: "Percentage change is the relative size of the difference between two numbers, expressed as a percent of the original. Formula: ((new − original) / |original|) × 100. A positive result is an increase; a negative result is a decrease.",
      },
      {
        q: "What if the original value is zero?",
        a: "Then percentage change is mathematically undefined (you'd divide by zero). The calculator flags this as 'from-zero' so you can communicate the absolute change instead of a misleading percentage. If both original and new are zero, the change is reported as 0%.",
      },
      {
        q: "How are negative starting values handled?",
        a: "We use |original| in the denominator so going from -100 to -50 (a +50 improvement) shows as +50%, not -50%. This matches the convention used by financial and economic reporting.",
      },
      {
        q: "Can percentage change be greater than 100%?",
        a: "Yes. Going from 50 to 200 is a +300% change. There is no upper bound when the new value grows arbitrarily large.",
      },
    ],
  },
  pt: {
    title: "Percentage Change Calculator",
    short: "Calculate percent change between two values: ((new − original) / |original|) × 100.",
    description:
      "Free percentage change calculator. Enter an original and a new value to get the percent change, signed absolute change, relative change ratio, and the direction (increase / decrease / no change). Correctly handles negative bases by using |original| as the denominator.",
    keywords: [
      "percentage change calculator",
      "percent change",
      "percent increase",
      "percent decrease",
      "growth rate",
      "relative change",
      "delta percent",
    ],
    inputs: {
      originalValue: { label: "Original Value", help: "The starting value (V_old)." },
      newValue: { label: "New Value", help: "The ending value (V_new)." },
    },
    outputs: {
      percentChange: { label: "Percent Change (%)", help: "((new − original) / |original|) × 100." },
      absoluteChange: { label: "Absolute Change", help: "Signed difference: new − original." },
      relativeChange: { label: "Relative Change", help: "Absolute change divided by |original|." },
      direction: {
        label: "Direction",
        help: "increase, decrease, no-change, or from-zero when the base is 0.",
      },
      fromZero: {
        label: "From Zero?",
        help: "1 when the original value is 0 and the new value is non-zero (undefined percent).",
      },
      explanation: { label: "Explanation", help: "Step-by-step description of the result." },
    },
    errors: {
      nonFinite: "Inputs must be finite numbers.",
      fromZero: "Percentage change from zero is undefined. Report the absolute change instead.",
    },
    faq: [
      {
        q: "What is percentage change?",
        a: "Percentage change is the relative size of the difference between two numbers, expressed as a percent of the original. Formula: ((new − original) / |original|) × 100. A positive result is an increase; a negative result is a decrease.",
      },
      {
        q: "What if the original value is zero?",
        a: "Then percentage change is mathematically undefined (you'd divide by zero). The calculator flags this as 'from-zero' so you can communicate the absolute change instead of a misleading percentage. If both original and new are zero, the change is reported as 0%.",
      },
      {
        q: "How are negative starting values handled?",
        a: "We use |original| in the denominator so going from -100 to -50 (a +50 improvement) shows as +50%, not -50%. This matches the convention used by financial and economic reporting.",
      },
      {
        q: "Can percentage change be greater than 100%?",
        a: "Yes. Going from 50 to 200 is a +300% change. There is no upper bound when the new value grows arbitrarily large.",
      },
    ],
  },
  id: {
    title: "Percentage Change Calculator",
    short: "Calculate percent change between two values: ((new − original) / |original|) × 100.",
    description:
      "Free percentage change calculator. Enter an original and a new value to get the percent change, signed absolute change, relative change ratio, and the direction (increase / decrease / no change). Correctly handles negative bases by using |original| as the denominator.",
    keywords: [
      "percentage change calculator",
      "percent change",
      "percent increase",
      "percent decrease",
      "growth rate",
      "relative change",
      "delta percent",
    ],
    inputs: {
      originalValue: { label: "Original Value", help: "The starting value (V_old)." },
      newValue: { label: "New Value", help: "The ending value (V_new)." },
    },
    outputs: {
      percentChange: { label: "Percent Change (%)", help: "((new − original) / |original|) × 100." },
      absoluteChange: { label: "Absolute Change", help: "Signed difference: new − original." },
      relativeChange: { label: "Relative Change", help: "Absolute change divided by |original|." },
      direction: {
        label: "Direction",
        help: "increase, decrease, no-change, or from-zero when the base is 0.",
      },
      fromZero: {
        label: "From Zero?",
        help: "1 when the original value is 0 and the new value is non-zero (undefined percent).",
      },
      explanation: { label: "Explanation", help: "Step-by-step description of the result." },
    },
    errors: {
      nonFinite: "Inputs must be finite numbers.",
      fromZero: "Percentage change from zero is undefined. Report the absolute change instead.",
    },
    faq: [
      {
        q: "What is percentage change?",
        a: "Percentage change is the relative size of the difference between two numbers, expressed as a percent of the original. Formula: ((new − original) / |original|) × 100. A positive result is an increase; a negative result is a decrease.",
      },
      {
        q: "What if the original value is zero?",
        a: "Then percentage change is mathematically undefined (you'd divide by zero). The calculator flags this as 'from-zero' so you can communicate the absolute change instead of a misleading percentage. If both original and new are zero, the change is reported as 0%.",
      },
      {
        q: "How are negative starting values handled?",
        a: "We use |original| in the denominator so going from -100 to -50 (a +50 improvement) shows as +50%, not -50%. This matches the convention used by financial and economic reporting.",
      },
      {
        q: "Can percentage change be greater than 100%?",
        a: "Yes. Going from 50 to 200 is a +300% change. There is no upper bound when the new value grows arbitrarily large.",
      },
    ],
  },


  tr: {
    title: "Yüzde Değişim Hesaplayıcı",
    short: "İki değer arasındaki yüzde değişimi hesaplayın: ((yeni − orijinal) / |orijinal|) × 100.",
    description:
      "Ücretsiz yüzde değişim hesaplayıcı. Orijinal ve yeni değeri girin; yüzde değişim, mutlak değişim, göreli değişim ve yön (artış / azalış / değişim yok) sonuçlarını alın. Negatif tabanları doğru ele alır: paydada |orijinal| kullanılır.",
    keywords: [
      "yüzde değişim hesaplayıcı",
      "yüzde değişim",
      "yüzde artış",
      "yüzde azalış",
      "büyüme oranı",
      "göreli değişim",
      "değişim yüzdesi",
    ],
    inputs: {
      originalValue: { label: "Orijinal Değer", help: "Başlangıç değeri (V_eski)." },
      newValue: { label: "Yeni Değer", help: "Bitiş değeri (V_yeni)." },
    },
    outputs: {
      percentChange: { label: "Yüzde Değişim (%)", help: "((yeni − orijinal) / |orijinal|) × 100." },
      absoluteChange: { label: "Mutlak Değişim", help: "İşaretli fark: yeni − orijinal." },
      relativeChange: { label: "Göreli Değişim", help: "Mutlak değişim / |orijinal|." },
      direction: {
        label: "Yön",
        help: "artış, azalış, değişim yok ya da taban 0 ise 'sıfırdan'.",
      },
      fromZero: {
        label: "Sıfırdan mı?",
        help: "Orijinal değer 0 ve yeni değer 0 değilse 1 (yüzde tanımsızdır).",
      },
      explanation: { label: "Açıklama", help: "Sonucun adım adım açıklaması." },
    },
    errors: {
      nonFinite: "Girdiler sonlu sayılar olmalıdır.",
      fromZero: "Sıfırdan yüzde değişim tanımsızdır. Mutlak değişimi raporlayın.",
    },
    faq: [
      {
        q: "Yüzde değişim nedir?",
        a: "İki sayı arasındaki farkın, orijinalin yüzdesi olarak ifade edilmiş büyüklüğüdür. Formül: ((yeni − orijinal) / |orijinal|) × 100. Pozitif sonuç artış, negatif sonuç azalıştır.",
      },
      {
        q: "Orijinal değer sıfırsa ne olur?",
        a: "Bu durumda yüzde değişim matematiksel olarak tanımsızdır (sıfıra bölme). Hesaplayıcı bunu 'sıfırdan' olarak işaretler; bunun yerine mutlak değişimi raporlayın. Her iki değer de 0 ise değişim %0 olarak verilir.",
      },
      {
        q: "Negatif başlangıç değerleri nasıl ele alınır?",
        a: "Paydada |orijinal| kullanılır; böylece -100'den -50'ye geçiş (+50 iyileşme) +%50 olarak gösterilir, -%50 olarak değil. Bu, finans ve ekonomide kullanılan yaygın yöntemdir.",
      },
      {
        q: "Yüzde değişim %100'ün üzerine çıkabilir mi?",
        a: "Evet. 50'den 200'e geçiş +%300'lük bir değişimdir. Yeni değer büyüdükçe üst sınır yoktur.",
      },
    ],
  },

  de: {
    title: "Prozentuale Änderung Rechner",
    short:
      "Berechne die prozentuale Änderung zwischen zwei Werten: ((neu − alt) / |alt|) × 100.",
    description:
      "Kostenloser Rechner für prozentuale Änderungen. Geben Sie Ausgangs- und Endwert ein und erhalten Sie prozentuale Änderung, absolute Differenz, relative Änderung und die Richtung (Anstieg / Rückgang / keine Änderung). Negative Ausgangswerte werden korrekt mit |alt| im Nenner behandelt.",
    keywords: [
      "prozentuale Änderung",
      "prozentualer Anstieg",
      "prozentuale Abnahme",
      "Wachstumsrate",
      "relative Änderung",
      "Veränderung in Prozent",
      "Delta Prozent",
    ],
    inputs: {
      originalValue: { label: "Ausgangswert", help: "Anfangswert (V_alt)." },
      newValue: { label: "Neuer Wert", help: "Endwert (V_neu)." },
    },
    outputs: {
      percentChange: { label: "Prozentuale Änderung (%)", help: "((neu − alt) / |alt|) × 100." },
      absoluteChange: { label: "Absolute Differenz", help: "Vorzeichenbehaftete Differenz: neu − alt." },
      relativeChange: { label: "Relative Änderung", help: "Absolute Differenz / |alt|." },
      direction: {
        label: "Richtung",
        help: "Anstieg, Rückgang, keine Änderung oder 'von-Null' wenn Basis 0.",
      },
      fromZero: {
        label: "Von Null?",
        help: "1, wenn Ausgangswert 0 und Endwert ungleich 0 (undefiniert).",
      },
      explanation: { label: "Erklärung", help: "Schrittweise Beschreibung des Ergebnisses." },
    },
    errors: {
      nonFinite: "Eingaben müssen endliche Zahlen sein.",
      fromZero: "Prozentuale Änderung ausgehend von Null ist undefiniert. Geben Sie die absolute Differenz an.",
    },
    faq: [
      {
        q: "Was ist prozentuale Änderung?",
        a: "Die prozentuale Änderung ist die relative Differenz zwischen zwei Werten, ausgedrückt als Prozentsatz des Ausgangswerts: ((neu − alt) / |alt|) × 100.",
      },
      {
        q: "Was passiert, wenn der Ausgangswert 0 ist?",
        a: "Dann ist die prozentuale Änderung undefiniert (Division durch null). Der Rechner markiert dies als 'von-Null', damit Sie stattdessen die absolute Differenz angeben können.",
      },
      {
        q: "Wie werden negative Ausgangswerte behandelt?",
        a: "Wir verwenden |alt| im Nenner. So zeigt der Wechsel von -100 auf -50 (eine Verbesserung um +50) eine Änderung von +50 % an.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Variation en Pourcentage",
    short:
      "Calculez la variation en pourcentage entre deux valeurs : ((nouveau − ancien) / |ancien|) × 100.",
    description:
      "Calculateur gratuit de variation en pourcentage. Entrez la valeur d'origine et la nouvelle valeur pour obtenir la variation en pourcentage, la différence absolue, le ratio de variation relative et la direction (augmentation / diminution / aucune variation). Gère correctement les bases négatives en utilisant |ancien| au dénominateur.",
    keywords: [
      "variation en pourcentage",
      "pourcentage d'augmentation",
      "pourcentage de diminution",
      "taux de croissance",
      "variation relative",
      "delta en pourcentage",
      "calcul variation",
    ],
    inputs: {
      originalValue: { label: "Valeur d'origine", help: "Valeur initiale (V_ancien)." },
      newValue: { label: "Nouvelle valeur", help: "Valeur finale (V_nouveau)." },
    },
    outputs: {
      percentChange: { label: "Variation en pourcentage (%)", help: "((nouveau − ancien) / |ancien|) × 100." },
      absoluteChange: { label: "Variation absolue", help: "Différence signée : nouveau − ancien." },
      relativeChange: { label: "Variation relative", help: "Variation absolue / |ancien|." },
      direction: {
        label: "Direction",
        help: "augmentation, diminution, aucune variation, ou 'depuis-zéro' quand la base vaut 0.",
      },
      fromZero: {
        label: "Depuis zéro ?",
        help: "1 si la valeur d'origine est 0 et la nouvelle non (variation indéfinie).",
      },
      explanation: { label: "Explication", help: "Description pas à pas du résultat." },
    },
    errors: {
      nonFinite: "Les entrées doivent être des nombres finis.",
      fromZero: "La variation en pourcentage à partir de zéro n'est pas définie. Indiquez plutôt la variation absolue.",
    },
    faq: [
      {
        q: "Qu'est-ce que la variation en pourcentage ?",
        a: "C'est la différence relative entre deux nombres, exprimée en pourcentage de la valeur d'origine : ((nouveau − ancien) / |ancien|) × 100.",
      },
      {
        q: "Que se passe-t-il si la valeur d'origine est zéro ?",
        a: "La variation en pourcentage est alors mathématiquement indéfinie (division par zéro). Le calculateur signale ce cas comme 'depuis-zéro' afin que vous puissiez indiquer la variation absolue à la place.",
      },
      {
        q: "Comment les valeurs d'origine négatives sont-elles gérées ?",
        a: "Nous utilisons |ancien| au dénominateur : ainsi, passer de -100 à -50 (une amélioration de +50) affiche +50 %.",
      },
    ],
  },

  es: {
    title: "Calculadora de Cambio Porcentual",
    short:
      "Calcula el cambio porcentual entre dos valores: ((nuevo − original) / |original|) × 100.",
    description:
      "Calculadora gratuita de cambio porcentual. Introduce un valor original y uno nuevo para obtener el cambio porcentual, la diferencia absoluta, la razón de cambio relativo y la dirección (aumento / disminución / sin cambio). Maneja correctamente bases negativas usando |original| en el denominador.",
    keywords: [
      "calculadora cambio porcentual",
      "cambio porcentual",
      "porcentaje de aumento",
      "porcentaje de disminución",
      "tasa de crecimiento",
      "variación relativa",
      "delta porcentaje",
    ],
    inputs: {
      originalValue: { label: "Valor original", help: "Valor inicial (V_antiguo)." },
      newValue: { label: "Nuevo valor", help: "Valor final (V_nuevo)." },
    },
    outputs: {
      percentChange: { label: "Cambio porcentual (%)", help: "((nuevo − original) / |original|) × 100." },
      absoluteChange: { label: "Cambio absoluto", help: "Diferencia con signo: nuevo − original." },
      relativeChange: { label: "Cambio relativo", help: "Cambio absoluto / |original|." },
      direction: {
        label: "Dirección",
        help: "aumento, disminución, sin cambio o 'desde-cero' si la base es 0.",
      },
      fromZero: {
        label: "¿Desde cero?",
        help: "1 si el valor original es 0 y el nuevo es distinto (cambio indefinido).",
      },
      explanation: { label: "Explicación", help: "Descripción paso a paso del resultado." },
    },
    errors: {
      nonFinite: "Las entradas deben ser números finitos.",
      fromZero: "El cambio porcentual desde cero es indefinido. Informa el cambio absoluto en su lugar.",
    },
    faq: [
      {
        q: "¿Qué es el cambio porcentual?",
        a: "Es la diferencia relativa entre dos números, expresada como un porcentaje del valor original: ((nuevo − original) / |original|) × 100.",
      },
      {
        q: "¿Qué pasa si el valor original es cero?",
        a: "Entonces el cambio porcentual es indefinido (división por cero). La calculadora lo marca como 'desde-cero' para que reportes el cambio absoluto.",
      },
      {
        q: "¿Cómo se manejan los valores originales negativos?",
        a: "Usamos |original| en el denominador, así pasar de -100 a -50 (una mejora de +50) se muestra como +50 %.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Variazione Percentuale",
    short:
      "Calcola la variazione percentuale tra due valori: ((nuovo − originale) / |originale|) × 100.",
    description:
      "Calcolatore gratuito di variazione percentuale. Inserisci il valore originale e quello nuovo per ottenere la variazione percentuale, la differenza assoluta, il rapporto di variazione relativa e la direzione (aumento / diminuzione / nessuna variazione). Gestisce correttamente le basi negative usando |originale| al denominatore.",
    keywords: [
      "calcolatore variazione percentuale",
      "variazione percentuale",
      "aumento percentuale",
      "diminuzione percentuale",
      "tasso di crescita",
      "variazione relativa",
      "delta percentuale",
    ],
    inputs: {
      originalValue: { label: "Valore originale", help: "Valore iniziale (V_vecchio)." },
      newValue: { label: "Nuovo valore", help: "Valore finale (V_nuovo)." },
    },
    outputs: {
      percentChange: { label: "Variazione percentuale (%)", help: "((nuovo − originale) / |originale|) × 100." },
      absoluteChange: { label: "Variazione assoluta", help: "Differenza con segno: nuovo − originale." },
      relativeChange: { label: "Variazione relativa", help: "Variazione assoluta / |originale|." },
      direction: {
        label: "Direzione",
        help: "aumento, diminuzione, nessuna variazione, o 'da-zero' se la base è 0.",
      },
      fromZero: {
        label: "Da zero?",
        help: "1 se il valore originale è 0 e il nuovo no (variazione indefinita).",
      },
      explanation: { label: "Spiegazione", help: "Descrizione passo passo del risultato." },
    },
    errors: {
      nonFinite: "Gli input devono essere numeri finiti.",
      fromZero: "La variazione percentuale da zero è indefinita. Riporta la variazione assoluta.",
    },
    faq: [
      {
        q: "Cos'è la variazione percentuale?",
        a: "È la differenza relativa tra due numeri espressa come percentuale del valore originale: ((nuovo − originale) / |originale|) × 100.",
      },
      {
        q: "Cosa succede se il valore originale è zero?",
        a: "La variazione percentuale è matematicamente indefinita (divisione per zero). Il calcolatore lo segnala come 'da-zero' affinché tu possa riportare la variazione assoluta.",
      },
      {
        q: "Come vengono gestiti i valori originali negativi?",
        a: "Usiamo |originale| al denominatore: passare da -100 a -50 (un miglioramento di +50) viene mostrato come +50 %.",
      },
    ],
  },

  ar: {
    title: "حاسبة التغير المئوي",
    short: "احسب التغير المئوي بين قيمتين: ((الجديد − الأصلي) / |الأصلي|) × 100.",
    description:
      "حاسبة تغير مئوي مجانية. أدخل قيمة أصلية وقيمة جديدة لتحصل على نسبة التغير المئوي والتغير المطلق والنسبة النسبية والاتجاه (زيادة / نقصان / بدون تغير). تتعامل بشكل صحيح مع القيم السالبة عبر استخدام |الأصلي| في المقام.",
    keywords: [
      "حاسبة التغير المئوي",
      "النسبة المئوية للتغير",
      "نسبة الزيادة",
      "نسبة النقصان",
      "معدل النمو",
      "التغير النسبي",
      "دلتا النسبة المئوية",
    ],
    inputs: {
      originalValue: { label: "القيمة الأصلية", help: "القيمة الابتدائية (V_قديم)." },
      newValue: { label: "القيمة الجديدة", help: "القيمة النهائية (V_جديد)." },
    },
    outputs: {
      percentChange: { label: "التغير المئوي (%)", help: "((الجديد − الأصلي) / |الأصلي|) × 100." },
      absoluteChange: { label: "التغير المطلق", help: "الفرق ذو الإشارة: الجديد − الأصلي." },
      relativeChange: { label: "التغير النسبي", help: "التغير المطلق / |الأصلي|." },
      direction: {
        label: "الاتجاه",
        help: "زيادة أو نقصان أو بدون تغير، أو 'من-صفر' عند كون الأصلي صفرًا.",
      },
      fromZero: {
        label: "من صفر؟",
        help: "1 إذا كانت القيمة الأصلية 0 والجديدة غير صفر (التغير غير معرّف).",
      },
      explanation: { label: "الشرح", help: "وصف خطوة بخطوة للنتيجة." },
    },
    errors: {
      nonFinite: "يجب أن تكون المدخلات أرقامًا منتهية.",
      fromZero: "التغير المئوي من صفر غير معرّف. أبلغ عن التغير المطلق بدلاً من ذلك.",
    },
    faq: [
      {
        q: "ما هو التغير المئوي؟",
        a: "هو الفرق النسبي بين رقمين معبَّر عنه كنسبة مئوية من القيمة الأصلية: ((الجديد − الأصلي) / |الأصلي|) × 100.",
      },
      {
        q: "ماذا لو كانت القيمة الأصلية صفر؟",
        a: "عندئذٍ التغير المئوي غير معرّف رياضيًا (قسمة على صفر). تصنّف الحاسبة هذه الحالة كـ 'من-صفر' حتى يمكنك الإبلاغ عن التغير المطلق بدلاً منه.",
      },
      {
        q: "كيف تُعامَل القيم الأصلية السالبة؟",
        a: "نستخدم |الأصلي| في المقام؛ هكذا يظهر الانتقال من -100 إلى -50 (تحسن بـ +50) كزيادة بنسبة +50٪.",
      },
    ],
  },

  ru: {
    title: "Калькулятор процентного изменения",
    short:
      "Рассчитайте процентное изменение между двумя значениями: ((новое − исходное) / |исходное|) × 100.",
    description:
      "Бесплатный калькулятор процентного изменения. Введите исходное и новое значение, чтобы получить процентное изменение, абсолютную разность, относительное изменение и направление (увеличение / уменьшение / без изменений). Отрицательные базы обрабатываются корректно — в знаменателе используется |исходное|.",
    keywords: [
      "калькулятор процентного изменения",
      "процентное изменение",
      "процент увеличения",
      "процент уменьшения",
      "темп роста",
      "относительное изменение",
      "дельта процентов",
    ],
    inputs: {
      originalValue: { label: "Исходное значение", help: "Начальное значение (V_старое)." },
      newValue: { label: "Новое значение", help: "Конечное значение (V_новое)." },
    },
    outputs: {
      percentChange: { label: "Процентное изменение (%)", help: "((новое − исходное) / |исходное|) × 100." },
      absoluteChange: { label: "Абсолютное изменение", help: "Разность со знаком: новое − исходное." },
      relativeChange: { label: "Относительное изменение", help: "Абсолютное изменение / |исходное|." },
      direction: {
        label: "Направление",
        help: "увеличение, уменьшение, без изменений или 'от-нуля', если база равна 0.",
      },
      fromZero: {
        label: "От нуля?",
        help: "1, если исходное значение 0, а новое не равно 0 (процент не определён).",
      },
      explanation: { label: "Объяснение", help: "Пошаговое описание результата." },
    },
    errors: {
      nonFinite: "Входные значения должны быть конечными числами.",
      fromZero: "Процентное изменение от нуля не определено. Сообщайте абсолютное изменение.",
    },
    faq: [
      {
        q: "Что такое процентное изменение?",
        a: "Это относительная разница между двумя числами, выраженная в процентах от исходного значения: ((новое − исходное) / |исходное|) × 100.",
      },
      {
        q: "Что делать, если исходное значение равно нулю?",
        a: "Тогда процентное изменение математически не определено (деление на ноль). Калькулятор помечает это как 'от-нуля', чтобы вы сообщили абсолютное изменение вместо неинформативного процента.",
      },
      {
        q: "Как обрабатываются отрицательные исходные значения?",
        a: "Мы используем |исходное| в знаменателе: переход от -100 к -50 (улучшение на +50) показывается как +50 %.",
      },
    ],
  },

  zh: {
    title: "百分比变化计算器",
    short: "计算两个数值之间的百分比变化：((新值 − 原值) / |原值|) × 100。",
    description:
      "免费百分比变化计算器。输入原始值与新值，即可获得百分比变化、有符号的绝对变化、相对变化比率以及方向（增加 / 减少 / 无变化）。通过在分母中使用 |原值| 正确处理负数基数。",
    keywords: [
      "百分比变化计算器",
      "百分比变化",
      "百分比增长",
      "百分比下降",
      "增长率",
      "相对变化",
      "百分比差",
    ],
    inputs: {
      originalValue: { label: "原始值", help: "起始值 (V_旧)。" },
      newValue: { label: "新值", help: "结束值 (V_新)。" },
    },
    outputs: {
      percentChange: { label: "百分比变化 (%)", help: "((新值 − 原值) / |原值|) × 100。" },
      absoluteChange: { label: "绝对变化", help: "带符号的差：新值 − 原值。" },
      relativeChange: { label: "相对变化", help: "绝对变化 / |原值|。" },
      direction: {
        label: "方向",
        help: "增加、减少、无变化，或当基数为 0 时为 '从零开始'。",
      },
      fromZero: {
        label: "是否从零开始？",
        help: "原始值为 0 且新值不为 0 时为 1（百分比未定义）。",
      },
      explanation: { label: "说明", help: "结果的逐步说明。" },
    },
    errors: {
      nonFinite: "输入必须为有限数。",
      fromZero: "从零开始的百分比变化未定义。请改用绝对变化。",
    },
    faq: [
      {
        q: "百分比变化是什么？",
        a: "它是两个数值之间相对差值占原始值的百分比：((新值 − 原值) / |原值|) × 100。",
      },
      {
        q: "原始值为零时怎么办？",
        a: "此时百分比变化在数学上未定义（除以零）。计算器会将其标记为 '从零开始'，让您改用绝对变化。",
      },
      {
        q: "负的原始值如何处理？",
        a: "在分母中使用 |原值|。例如从 -100 变为 -50（改善 +50）将显示为 +50%。",
      },
    ],
  },

  ja: {
    title: "パーセント変化計算機",
    short: "2 つの値の間のパーセント変化を計算します：((新 − 元) / |元|) × 100。",
    description:
      "無料のパーセント変化計算機。元の値と新しい値を入力するだけで、パーセント変化、符号付きの絶対差、相対変化比、方向（増加 / 減少 / 変化なし）を表示します。負の基準値も分母に |元| を用いて正しく扱います。",
    keywords: [
      "パーセント変化計算機",
      "パーセント変化",
      "増加率",
      "減少率",
      "成長率",
      "相対変化",
      "デルタパーセント",
    ],
    inputs: {
      originalValue: { label: "元の値", help: "開始値 (V_旧)。" },
      newValue: { label: "新しい値", help: "終了値 (V_新)。" },
    },
    outputs: {
      percentChange: { label: "パーセント変化 (%)", help: "((新 − 元) / |元|) × 100。" },
      absoluteChange: { label: "絶対変化", help: "符号付き差：新 − 元。" },
      relativeChange: { label: "相対変化", help: "絶対変化 / |元|。" },
      direction: {
        label: "方向",
        help: "増加、減少、変化なし、または基準が 0 の場合は 'ゼロから'。",
      },
      fromZero: {
        label: "ゼロから？",
        help: "元の値が 0 で新しい値が 0 でない場合は 1（パーセントは未定義）。",
      },
      explanation: { label: "説明", help: "結果のステップごとの説明。" },
    },
    errors: {
      nonFinite: "入力は有限の数値である必要があります。",
      fromZero: "ゼロからのパーセント変化は未定義です。代わりに絶対変化を報告してください。",
    },
    faq: [
      {
        q: "パーセント変化とは何ですか？",
        a: "2 つの数の相対的な差を元の値に対する百分率で表したものです：((新 − 元) / |元|) × 100。",
      },
      {
        q: "元の値が 0 の場合はどうなりますか？",
        a: "数学的に未定義です（ゼロ除算）。計算機はこれを 'ゼロから' としてフラグ立てし、代わりに絶対変化を伝えられるようにします。",
      },
      {
        q: "元の値が負の場合はどう扱いますか？",
        a: "分母に |元| を使用します。たとえば -100 から -50 への変化（+50 の改善）は +50% と表示されます。",
      },
    ],
  },

  ko: {
    title: "백분율 변화 계산기",
    short: "두 값 사이의 백분율 변화를 계산합니다: ((새값 − 원래값) / |원래값|) × 100.",
    description:
      "무료 백분율 변화 계산기. 원래 값과 새 값을 입력하면 백분율 변화, 부호 있는 절대 변화, 상대 변화 비율, 방향(증가 / 감소 / 변화 없음)을 보여줍니다. 분모에 |원래값|을 사용하여 음수 기준값을 올바르게 처리합니다.",
    keywords: [
      "백분율 변화 계산기",
      "백분율 변화",
      "증가율",
      "감소율",
      "성장률",
      "상대 변화",
      "퍼센트 변화",
    ],
    inputs: {
      originalValue: { label: "원래 값", help: "시작 값 (V_옛)." },
      newValue: { label: "새 값", help: "끝 값 (V_새)." },
    },
    outputs: {
      percentChange: { label: "백분율 변화 (%)", help: "((새값 − 원래값) / |원래값|) × 100." },
      absoluteChange: { label: "절대 변화", help: "부호 있는 차이: 새값 − 원래값." },
      relativeChange: { label: "상대 변화", help: "절대 변화 / |원래값|." },
      direction: {
        label: "방향",
        help: "증가, 감소, 변화 없음, 또는 기준이 0이면 '제로에서'.",
      },
      fromZero: {
        label: "제로에서 시작?",
        help: "원래 값이 0이고 새 값이 0이 아닐 때 1 (백분율 정의되지 않음).",
      },
      explanation: { label: "설명", help: "결과에 대한 단계별 설명." },
    },
    errors: {
      nonFinite: "입력은 유한한 숫자여야 합니다.",
      fromZero: "제로에서 시작한 백분율 변화는 정의되지 않습니다. 대신 절대 변화를 보고하세요.",
    },
    faq: [
      {
        q: "백분율 변화란 무엇인가요?",
        a: "두 숫자의 상대적 차이를 원래 값에 대한 백분율로 표현한 것입니다: ((새값 − 원래값) / |원래값|) × 100.",
      },
      {
        q: "원래 값이 0이면 어떻게 하나요?",
        a: "수학적으로 정의되지 않습니다(0으로 나누기). 계산기는 이를 '제로에서'로 표시하여 절대 변화로 보고하도록 안내합니다.",
      },
      {
        q: "원래 값이 음수일 때는 어떻게 처리하나요?",
        a: "분모에 |원래값|을 사용합니다. -100에서 -50으로의 변화(+50 개선)는 +50%로 표시됩니다.",
      },
    ],
  },

  hi: {
    title: "प्रतिशत परिवर्तन कैलकुलेटर",
    short: "दो मानों के बीच प्रतिशत परिवर्तन की गणना करें: ((नया − मूल) / |मूल|) × 100।",
    description:
      "मुफ्त प्रतिशत परिवर्तन कैलकुलेटर। मूल और नया मान दर्ज करें और प्रतिशत परिवर्तन, चिन्हित निरपेक्ष परिवर्तन, सापेक्ष परिवर्तन अनुपात तथा दिशा (वृद्धि / कमी / कोई परिवर्तन नहीं) प्राप्त करें। ऋणात्मक आधार को सही ढंग से संभालता है क्योंकि भाजक में |मूल| का उपयोग होता है।",
    keywords: [
      "प्रतिशत परिवर्तन कैलकुलेटर",
      "प्रतिशत परिवर्तन",
      "प्रतिशत वृद्धि",
      "प्रतिशत कमी",
      "वृद्धि दर",
      "सापेक्ष परिवर्तन",
      "डेल्टा प्रतिशत",
    ],
    inputs: {
      originalValue: { label: "मूल मान", help: "प्रारंभिक मान (V_पुराना)।" },
      newValue: { label: "नया मान", help: "अंतिम मान (V_नया)।" },
    },
    outputs: {
      percentChange: { label: "प्रतिशत परिवर्तन (%)", help: "((नया − मूल) / |मूल|) × 100।" },
      absoluteChange: { label: "निरपेक्ष परिवर्तन", help: "चिन्हित अंतर: नया − मूल।" },
      relativeChange: { label: "सापेक्ष परिवर्तन", help: "निरपेक्ष परिवर्तन / |मूल|।" },
      direction: {
        label: "दिशा",
        help: "वृद्धि, कमी, कोई परिवर्तन नहीं, या आधार 0 होने पर 'शून्य-से'।",
      },
      fromZero: {
        label: "शून्य से?",
        help: "मूल मान 0 और नया मान शून्य न होने पर 1 (प्रतिशत अपरिभाषित)।",
      },
      explanation: { label: "व्याख्या", help: "परिणाम का चरण-दर-चरण विवरण।" },
    },
    errors: {
      nonFinite: "इनपुट परिमित संख्याएँ होनी चाहिए।",
      fromZero: "शून्य से प्रतिशत परिवर्तन अपरिभाषित है। इसके बजाय निरपेक्ष परिवर्तन रिपोर्ट करें।",
    },
    faq: [
      {
        q: "प्रतिशत परिवर्तन क्या है?",
        a: "यह दो संख्याओं के बीच का सापेक्ष अंतर है, जिसे मूल मान के प्रतिशत के रूप में व्यक्त किया जाता है: ((नया − मूल) / |मूल|) × 100।",
      },
      {
        q: "यदि मूल मान शून्य हो तो क्या होगा?",
        a: "तब प्रतिशत परिवर्तन गणितीय रूप से अपरिभाषित है (शून्य से विभाजन)। कैलकुलेटर इसे 'शून्य-से' के रूप में चिन्हित करता है ताकि आप निरपेक्ष परिवर्तन की रिपोर्ट कर सकें।",
      },
      {
        q: "ऋणात्मक मूल मानों को कैसे संभाला जाता है?",
        a: "हम भाजक में |मूल| का उपयोग करते हैं; इस तरह -100 से -50 (एक +50 सुधार) +50% के रूप में दिखाया जाता है।",
      },
    ],
  },
};

export default i18n;
