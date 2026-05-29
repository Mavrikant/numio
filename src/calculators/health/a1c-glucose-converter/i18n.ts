import type { CalculatorI18n } from "@/types/i18n";

const io = (m: string, v: string, a: string, mg: string, mm: string, ag: string, ga: string) => ({
  inputs: { mode: { label: m }, value: { label: v } },
  outputs: { a1cPercent: { label: a }, glucoseMgDl: { label: mg }, glucoseMmol: { label: mm } },
  options: { mode: { "a1c-to-glucose": ag, "glucose-to-a1c": ga } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "A1C ⇄ Average Glucose Converter", short: "Convert HbA1c to estimated average glucose (mg/dL and mmol/L) and back.",
    description: "Free A1C to glucose converter. Convert an HbA1c percentage to estimated average glucose (eAG) in mg/dL and mmol/L, or convert a glucose reading back to an estimated A1C, using the ADAG formula.",
    keywords: ["a1c to glucose", "eag calculator", "hba1c converter", "average glucose calculator", "a1c chart"],
    ...io("Conversion", "Value", "A1C", "Glucose (mg/dL)", "Glucose (mmol/L)", "A1C → Glucose", "Glucose → A1C"),
    faq: [
      { q: "How is A1C converted to average glucose?", a: "Using the ADAG formula eAG(mg/dL) = 28.7 × A1C − 46.7. For example, an A1C of 6.5% ≈ 140 mg/dL (7.8 mmol/L)." },
      { q: "Is estimated average glucose the same as my meter reading?", a: "No. eAG is a long-term average derived from A1C; individual meter readings vary throughout the day and may differ from this estimate." },
    ],
  },
  pt: {
    title: "Conversor A1c / Glicose", short: "Converta entre hemoglobina glicada (A1c) e glicose média estimada.",
    description: "Conversor gratuito A1c. Converta entre o valor de hemoglobina A1c (%) e a glicose plasmática média estimada (mg/dL ou mmol/L).",
    keywords: ["A1c", "hemoglobina glicada", "glicose média", "diabetes", "HbA1c"],
    ...io("Conversion", "Value", "A1C", "Glucose (mg/dL)", "Glucose (mmol/L)", "A1C → Glucose", "Glucose → A1C"),
    faq: [
      { q: "How is A1C converted to average glucose?", a: "Using the ADAG formula eAG(mg/dL) = 28.7 × A1C − 46.7. For example, an A1C of 6.5% ≈ 140 mg/dL (7.8 mmol/L)." },
      { q: "Is estimated average glucose the same as my meter reading?", a: "No. eAG is a long-term average derived from A1C; individual meter readings vary throughout the day and may differ from this estimate." },
    ],
  },
  id: {
    title: "Konverter A1c / Glukosa", short: "Konversikan antara hemoglobin A1c dan estimasi glukosa rata-rata.",
    description: "Konverter A1c gratis. Konversikan antara nilai hemoglobin A1c (%) dan estimasi glukosa darah rata-rata (mg/dL atau mmol/L).",
    keywords: ["A1c", "HbA1c", "glukosa rata-rata", "diabetes", "gula darah"],
    ...io("Conversion", "Value", "A1C", "Glucose (mg/dL)", "Glucose (mmol/L)", "A1C → Glucose", "Glucose → A1C"),
    faq: [
      { q: "How is A1C converted to average glucose?", a: "Using the ADAG formula eAG(mg/dL) = 28.7 × A1C − 46.7. For example, an A1C of 6.5% ≈ 140 mg/dL (7.8 mmol/L)." },
      { q: "Is estimated average glucose the same as my meter reading?", a: "No. eAG is a long-term average derived from A1C; individual meter readings vary throughout the day and may differ from this estimate." },
    ],
  },

  tr: {
    title: "A1C ⇄ Ortalama Glikoz Dönüştürücü", short: "HbA1c'yi tahmini ortalama glikoza (mg/dL ve mmol/L) ve geri çevirin.",
    description: "Ücretsiz A1C'den glikoza dönüştürücü. ADAG formülünü kullanarak bir HbA1c yüzdesini mg/dL ve mmol/L cinsinden tahmini ortalama glikoza (eAG) çevirin veya bir glikoz değerini tahmini A1C'ye geri dönüştürün.",
    keywords: ["a1c glikoz", "eag hesaplama", "hba1c dönüştürücü", "ortalama glikoz hesaplama", "a1c tablosu"],
    ...io("Dönüşüm", "Değer", "A1C", "Glikoz (mg/dL)", "Glikoz (mmol/L)", "A1C → Glikoz", "Glikoz → A1C"),
    faq: [
      { q: "A1C ortalama glikoza nasıl çevrilir?", a: "ADAG formülü eAG(mg/dL) = 28,7 × A1C − 46,7 kullanılır. Örneğin %6,5 A1C ≈ 140 mg/dL (7,8 mmol/L)." },
      { q: "Tahmini ortalama glikoz, cihaz ölçümümle aynı mı?", a: "Hayır. eAG, A1C'den türetilen uzun vadeli bir ortalamadır; bireysel cihaz ölçümleri gün boyunca değişir ve bu tahminden farklı olabilir." },
    ],
  },
  de: { title: "A1C ⇄ Durchschnittsglukose-Umrechner", short: "HbA1c in geschätzte Durchschnittsglukose (mg/dL und mmol/L) umrechnen und zurück.", description: "Kostenloser A1C-zu-Glukose-Umrechner. Rechnen Sie einen HbA1c-Prozentwert in die geschätzte Durchschnittsglukose (eAG) in mg/dL und mmol/L um oder zurück, mit der ADAG-Formel.", keywords: ["a1c zu glukose", "eag rechner", "hba1c umrechner", "durchschnittsglukose", "a1c tabelle"], ...io("Umrechnung", "Wert", "A1C", "Glukose (mg/dL)", "Glukose (mmol/L)", "A1C → Glukose", "Glukose → A1C") },
  fr: { title: "Convertisseur A1C ⇄ Glycémie Moyenne", short: "Convertissez l'HbA1c en glycémie moyenne estimée (mg/dL et mmol/L) et inversement.", description: "Convertisseur A1C-glycémie gratuit. Convertissez un pourcentage d'HbA1c en glycémie moyenne estimée (eAG) en mg/dL et mmol/L, ou inversement, avec la formule ADAG.", keywords: ["a1c en glycémie", "calculateur eag", "convertisseur hba1c", "glycémie moyenne", "tableau a1c"], ...io("Conversion", "Valeur", "A1C", "Glycémie (mg/dL)", "Glycémie (mmol/L)", "A1C → Glycémie", "Glycémie → A1C") },
  es: { title: "Conversor A1C ⇄ Glucosa Media", short: "Convierte la HbA1c a glucosa media estimada (mg/dL y mmol/L) y viceversa.", description: "Conversor de A1C a glucosa gratuito. Convierte un porcentaje de HbA1c a glucosa media estimada (eAG) en mg/dL y mmol/L, o viceversa, con la fórmula ADAG.", keywords: ["a1c a glucosa", "calculadora eag", "conversor hba1c", "glucosa media", "tabla a1c"], ...io("Conversión", "Valor", "A1C", "Glucosa (mg/dL)", "Glucosa (mmol/L)", "A1C → Glucosa", "Glucosa → A1C") },
  it: { title: "Convertitore A1C ⇄ Glicemia Media", short: "Converti l'HbA1c in glicemia media stimata (mg/dL e mmol/L) e viceversa.", description: "Convertitore A1C-glicemia gratuito. Converti una percentuale di HbA1c in glicemia media stimata (eAG) in mg/dL e mmol/L, o viceversa, con la formula ADAG.", keywords: ["a1c a glicemia", "calcolatore eag", "convertitore hba1c", "glicemia media", "tabella a1c"], ...io("Conversione", "Valore", "A1C", "Glicemia (mg/dL)", "Glicemia (mmol/L)", "A1C → Glicemia", "Glicemia → A1C") },
  ar: { title: "محوّل A1C ⇄ متوسط الجلوكوز", short: "حوّل HbA1c إلى متوسط الجلوكوز المقدّر (mg/dL و mmol/L) والعكس.", description: "محوّل A1C إلى جلوكوز مجاني. حوّل نسبة HbA1c إلى متوسط جلوكوز مقدّر (eAG) بالـ mg/dL و mmol/L أو العكس، باستخدام صيغة ADAG.", keywords: ["a1c إلى جلوكوز", "حاسبة eag", "محول hba1c", "متوسط الجلوكوز", "جدول a1c"], ...io("التحويل", "القيمة", "A1C", "الجلوكوز (mg/dL)", "الجلوكوز (mmol/L)", "A1C → جلوكوز", "جلوكوز → A1C") },
  ru: { title: "Конвертер A1C ⇄ Средняя Глюкоза", short: "Конвертируйте HbA1c в оценочную среднюю глюкозу (mg/dL и ммоль/л) и обратно.", description: "Бесплатный конвертер A1C в глюкозу. Преобразуйте процент HbA1c в оценочную среднюю глюкозу (eAG) в mg/dL и ммоль/л или обратно по формуле ADAG.", keywords: ["a1c в глюкозу", "калькулятор eag", "конвертер hba1c", "средняя глюкоза", "таблица a1c"], ...io("Преобразование", "Значение", "A1C", "Глюкоза (mg/dL)", "Глюкоза (ммоль/л)", "A1C → Глюкоза", "Глюкоза → A1C") },
  zh: { title: "A1C ⇄ 平均血糖转换器", short: "在 HbA1c 与估算平均血糖（mg/dL 和 mmol/L）之间相互转换。", description: "免费的 A1C 转血糖转换器。使用 ADAG 公式将 HbA1c 百分比转换为估算平均血糖（eAG，mg/dL 和 mmol/L），或反向转换。", keywords: ["a1c转血糖", "eag计算器", "hba1c转换器", "平均血糖", "a1c对照表"], ...io("转换", "数值", "A1C", "血糖 (mg/dL)", "血糖 (mmol/L)", "A1C → 血糖", "血糖 → A1C") },
  ja: { title: "A1C ⇄ 平均血糖 換算", short: "HbA1c を推定平均血糖（mg/dL・mmol/L）に、またその逆に換算します。", description: "無料の A1C ⇄ 血糖 換算ツール。ADAG の式を用いて、HbA1c の割合を推定平均血糖（eAG, mg/dL・mmol/L）に、またはその逆に換算します。", keywords: ["a1c 血糖 換算", "eag 計算機", "hba1c 換算", "平均血糖", "a1c 対応表"], ...io("換算", "値", "A1C", "血糖 (mg/dL)", "血糖 (mmol/L)", "A1C → 血糖", "血糖 → A1C") },
  ko: { title: "A1C ⇄ 평균 혈당 변환기", short: "HbA1c를 추정 평균 혈당(mg/dL 및 mmol/L)으로, 또는 그 반대로 변환합니다.", description: "무료 A1C-혈당 변환기. ADAG 공식을 사용해 HbA1c 백분율을 추정 평균 혈당(eAG, mg/dL 및 mmol/L)으로, 또는 그 반대로 변환합니다.", keywords: ["a1c 혈당 변환", "eag 계산기", "hba1c 변환기", "평균 혈당", "a1c 표"], ...io("변환", "값", "A1C", "혈당 (mg/dL)", "혈당 (mmol/L)", "A1C → 혈당", "혈당 → A1C") },
  hi: { title: "A1C ⇄ औसत ग्लूकोज कन्वर्टर", short: "HbA1c को अनुमानित औसत ग्लूकोज (mg/dL और mmol/L) में और वापस बदलें।", description: "मुफ्त A1C-से-ग्लूकोज कन्वर्टर। ADAG सूत्र का उपयोग करके HbA1c प्रतिशत को अनुमानित औसत ग्लूकोज (eAG) mg/dL और mmol/L में, या वापस बदलें।", keywords: ["a1c से ग्लूकोज", "eag कैलकुलेटर", "hba1c कन्वर्टर", "औसत ग्लूकोज", "a1c चार्ट"], ...io("रूपांतरण", "मान", "A1C", "ग्लूकोज (mg/dL)", "ग्लूकोज (mmol/L)", "A1C → ग्लूकोज", "ग्लूकोज → A1C") },
};

export default i18n;
