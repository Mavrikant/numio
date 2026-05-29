import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Macro Calculator",
    short: "Calculate your daily protein, fat, and carb targets from your TDEE and fitness goal.",
    description:
      "Free macro calculator. Enter your total daily energy expenditure and fitness goal to get your optimal protein, fat, and carbohydrate targets in grams and calories.",
    keywords: [
      "macro calculator",
      "macronutrient calculator",
      "protein fat carbs calculator",
      "TDEE macros",
      "cutting macros",
      "bulking macros",
      "diet macros",
    ],
    inputs: {
      tdee: {
        label: "Total Daily Energy Expenditure (TDEE)",
        help: "Your total daily calorie burn including activity. Use a BMR calculator to find this.",
      },
      goal: {
        label: "Fitness Goal",
        help: "Your primary nutrition goal — this sets the default macro percentages.",
      },
      proteinPct: {
        label: "Protein %",
        help: "Percentage of total calories from protein. Each gram of protein = 4 kcal.",
      },
      fatPct: {
        label: "Fat %",
        help: "Percentage of total calories from fat. Each gram of fat = 9 kcal. Carbs automatically fill the remainder.",
      },
    },
    outputs: {
      proteinG: {
        label: "Protein",
        help: "Daily protein target in grams.",
        suffix: "g",
      },
      fatG: {
        label: "Fat",
        help: "Daily fat target in grams.",
        suffix: "g",
      },
      carbsG: {
        label: "Carbohydrates",
        help: "Daily carbohydrate target in grams.",
        suffix: "g",
      },
      proteinKcal: {
        label: "Protein (kcal)",
        help: "Calories from protein.",
        suffix: "kcal",
      },
      fatKcal: {
        label: "Fat (kcal)",
        help: "Calories from fat.",
        suffix: "kcal",
      },
      carbsKcal: {
        label: "Carbs (kcal)",
        help: "Calories from carbohydrates.",
        suffix: "kcal",
      },
      totalKcal: {
        label: "Total Calories",
        help: "Total daily calorie target (equals your TDEE).",
        suffix: "kcal",
      },
    },
    options: {
      goal: {
        cutting: "Cutting (fat loss)",
        maintenance: "Maintenance",
        bulking: "Bulking (muscle gain)",
      },
    },
    errors: {
      tdeeOutOfRange: "TDEE must be between 800 and 10,000 kcal.",
      macroSumExceeds90: "Protein % + Fat % must not exceed 90% (carbs must be at least 10%).",
    },
    faq: [
      {
        q: "What are macros?",
        a: "Macros (macronutrients) are the three main energy-providing nutrients: protein, fat, and carbohydrates. Protein and carbs each provide 4 kcal per gram; fat provides 9 kcal per gram.",
      },
      {
        q: "What is TDEE?",
        a: "Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns in a day, including your basal metabolic rate (BMR) plus calories burned through activity. Use a BMR/TDEE calculator to estimate yours.",
      },
      {
        q: "What macro split should I use for cutting?",
        a: "For fat loss (cutting), a higher protein intake (35–40% of calories) helps preserve muscle mass while in a caloric deficit. Fat is typically kept at 25–30% and carbs make up the rest.",
      },
      {
        q: "Can I change the default percentages?",
        a: "Yes. The defaults shown are evidence-based starting points for each goal. You can adjust protein and fat percentages manually; carbs are automatically calculated as the remainder.",
      },
      {
        q: "How accurate are these macro targets?",
        a: "These are evidence-based estimates. Individual responses to macro ratios vary based on genetics, training type, age, and metabolic health. A registered dietitian can provide personalised guidance.",
      },
    ],
  },
  pt: {
    title: "Macro Calculator",
    short: "Calculate your daily protein, fat, and carb targets from your TDEE and fitness goal.",
    description:
      "Free macro calculator. Enter your total daily energy expenditure and fitness goal to get your optimal protein, fat, and carbohydrate targets in grams and calories.",
    keywords: [
      "macro calculator",
      "macronutrient calculator",
      "protein fat carbs calculator",
      "TDEE macros",
      "cutting macros",
      "bulking macros",
      "diet macros",
    ],
    inputs: {
      tdee: {
        label: "Total Daily Energy Expenditure (TDEE)",
        help: "Your total daily calorie burn including activity. Use a BMR calculator to find this.",
      },
      goal: {
        label: "Fitness Goal",
        help: "Your primary nutrition goal — this sets the default macro percentages.",
      },
      proteinPct: {
        label: "Protein %",
        help: "Percentage of total calories from protein. Each gram of protein = 4 kcal.",
      },
      fatPct: {
        label: "Fat %",
        help: "Percentage of total calories from fat. Each gram of fat = 9 kcal. Carbs automatically fill the remainder.",
      },
    },
    outputs: {
      proteinG: {
        label: "Protein",
        help: "Daily protein target in grams.",
        suffix: "g",
      },
      fatG: {
        label: "Fat",
        help: "Daily fat target in grams.",
        suffix: "g",
      },
      carbsG: {
        label: "Carbohydrates",
        help: "Daily carbohydrate target in grams.",
        suffix: "g",
      },
      proteinKcal: {
        label: "Protein (kcal)",
        help: "Calories from protein.",
        suffix: "kcal",
      },
      fatKcal: {
        label: "Fat (kcal)",
        help: "Calories from fat.",
        suffix: "kcal",
      },
      carbsKcal: {
        label: "Carbs (kcal)",
        help: "Calories from carbohydrates.",
        suffix: "kcal",
      },
      totalKcal: {
        label: "Total Calories",
        help: "Total daily calorie target (equals your TDEE).",
        suffix: "kcal",
      },
    },
    options: {
      goal: {
        cutting: "Cutting (fat loss)",
        maintenance: "Maintenance",
        bulking: "Bulking (muscle gain)",
      },
    },
    errors: {
      tdeeOutOfRange: "TDEE must be between 800 and 10,000 kcal.",
      macroSumExceeds90: "Protein % + Fat % must not exceed 90% (carbs must be at least 10%).",
    },
    faq: [
      {
        q: "What are macros?",
        a: "Macros (macronutrients) are the three main energy-providing nutrients: protein, fat, and carbohydrates. Protein and carbs each provide 4 kcal per gram; fat provides 9 kcal per gram.",
      },
      {
        q: "What is TDEE?",
        a: "Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns in a day, including your basal metabolic rate (BMR) plus calories burned through activity. Use a BMR/TDEE calculator to estimate yours.",
      },
      {
        q: "What macro split should I use for cutting?",
        a: "For fat loss (cutting), a higher protein intake (35–40% of calories) helps preserve muscle mass while in a caloric deficit. Fat is typically kept at 25–30% and carbs make up the rest.",
      },
      {
        q: "Can I change the default percentages?",
        a: "Yes. The defaults shown are evidence-based starting points for each goal. You can adjust protein and fat percentages manually; carbs are automatically calculated as the remainder.",
      },
      {
        q: "How accurate are these macro targets?",
        a: "These are evidence-based estimates. Individual responses to macro ratios vary based on genetics, training type, age, and metabolic health. A registered dietitian can provide personalised guidance.",
      },
    ],
  },
  id: {
    title: "Macro Calculator",
    short: "Calculate your daily protein, fat, and carb targets from your TDEE and fitness goal.",
    description:
      "Free macro calculator. Enter your total daily energy expenditure and fitness goal to get your optimal protein, fat, and carbohydrate targets in grams and calories.",
    keywords: [
      "macro calculator",
      "macronutrient calculator",
      "protein fat carbs calculator",
      "TDEE macros",
      "cutting macros",
      "bulking macros",
      "diet macros",
    ],
    inputs: {
      tdee: {
        label: "Total Daily Energy Expenditure (TDEE)",
        help: "Your total daily calorie burn including activity. Use a BMR calculator to find this.",
      },
      goal: {
        label: "Fitness Goal",
        help: "Your primary nutrition goal — this sets the default macro percentages.",
      },
      proteinPct: {
        label: "Protein %",
        help: "Percentage of total calories from protein. Each gram of protein = 4 kcal.",
      },
      fatPct: {
        label: "Fat %",
        help: "Percentage of total calories from fat. Each gram of fat = 9 kcal. Carbs automatically fill the remainder.",
      },
    },
    outputs: {
      proteinG: {
        label: "Protein",
        help: "Daily protein target in grams.",
        suffix: "g",
      },
      fatG: {
        label: "Fat",
        help: "Daily fat target in grams.",
        suffix: "g",
      },
      carbsG: {
        label: "Carbohydrates",
        help: "Daily carbohydrate target in grams.",
        suffix: "g",
      },
      proteinKcal: {
        label: "Protein (kcal)",
        help: "Calories from protein.",
        suffix: "kcal",
      },
      fatKcal: {
        label: "Fat (kcal)",
        help: "Calories from fat.",
        suffix: "kcal",
      },
      carbsKcal: {
        label: "Carbs (kcal)",
        help: "Calories from carbohydrates.",
        suffix: "kcal",
      },
      totalKcal: {
        label: "Total Calories",
        help: "Total daily calorie target (equals your TDEE).",
        suffix: "kcal",
      },
    },
    options: {
      goal: {
        cutting: "Cutting (fat loss)",
        maintenance: "Maintenance",
        bulking: "Bulking (muscle gain)",
      },
    },
    errors: {
      tdeeOutOfRange: "TDEE must be between 800 and 10,000 kcal.",
      macroSumExceeds90: "Protein % + Fat % must not exceed 90% (carbs must be at least 10%).",
    },
    faq: [
      {
        q: "What are macros?",
        a: "Macros (macronutrients) are the three main energy-providing nutrients: protein, fat, and carbohydrates. Protein and carbs each provide 4 kcal per gram; fat provides 9 kcal per gram.",
      },
      {
        q: "What is TDEE?",
        a: "Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns in a day, including your basal metabolic rate (BMR) plus calories burned through activity. Use a BMR/TDEE calculator to estimate yours.",
      },
      {
        q: "What macro split should I use for cutting?",
        a: "For fat loss (cutting), a higher protein intake (35–40% of calories) helps preserve muscle mass while in a caloric deficit. Fat is typically kept at 25–30% and carbs make up the rest.",
      },
      {
        q: "Can I change the default percentages?",
        a: "Yes. The defaults shown are evidence-based starting points for each goal. You can adjust protein and fat percentages manually; carbs are automatically calculated as the remainder.",
      },
      {
        q: "How accurate are these macro targets?",
        a: "These are evidence-based estimates. Individual responses to macro ratios vary based on genetics, training type, age, and metabolic health. A registered dietitian can provide personalised guidance.",
      },
    ],
  },


  tr: {
    title: "Makro Hesaplayıcı",
    short: "TDEE ve fitness hedefinize göre günlük protein, yağ ve karbonhidrat hedeflerinizi hesaplayın.",
    description:
      "Ücretsiz makro hesaplayıcı. Toplam günlük enerji harcamanızı ve fitness hedefinizi girerek optimal protein, yağ ve karbonhidrat hedeflerinizi gram ve kalori olarak öğrenin.",
    keywords: [
      "makro hesaplayıcı",
      "makrobesin hesaplayıcı",
      "protein yağ karbonhidrat hesaplayıcı",
      "TDEE makro",
      "kilo verme makro",
      "kas yapma makro",
      "diyet makroları",
    ],
    inputs: {
      tdee: {
        label: "Toplam Günlük Enerji Harcaması (TDEE)",
        help: "Aktivite dahil toplam günlük kalori yakımınız. Bunu bulmak için bir BMH hesaplayıcı kullanın.",
      },
      goal: {
        label: "Fitness Hedefi",
        help: "Birincil beslenme hedefiniz — varsayılan makro yüzdelerini belirler.",
      },
      proteinPct: {
        label: "Protein %",
        help: "Toplam kalorinin proteine ayrılan yüzdesi. Her gram protein = 4 kcal.",
      },
      fatPct: {
        label: "Yağ %",
        help: "Toplam kalorinin yağa ayrılan yüzdesi. Her gram yağ = 9 kcal. Karbonhidrat otomatik olarak kalan yüzdeyi oluşturur.",
      },
    },
    outputs: {
      proteinG: {
        label: "Protein",
        help: "Günlük protein hedefi (gram).",
        suffix: "g",
      },
      fatG: {
        label: "Yağ",
        help: "Günlük yağ hedefi (gram).",
        suffix: "g",
      },
      carbsG: {
        label: "Karbonhidrat",
        help: "Günlük karbonhidrat hedefi (gram).",
        suffix: "g",
      },
      proteinKcal: {
        label: "Protein (kcal)",
        help: "Proteinden gelen kalori.",
        suffix: "kcal",
      },
      fatKcal: {
        label: "Yağ (kcal)",
        help: "Yağdan gelen kalori.",
        suffix: "kcal",
      },
      carbsKcal: {
        label: "Karbonhidrat (kcal)",
        help: "Karbonhidrattan gelen kalori.",
        suffix: "kcal",
      },
      totalKcal: {
        label: "Toplam Kalori",
        help: "Toplam günlük kalori hedefi (TDEE'ye eşittir).",
        suffix: "kcal",
      },
    },
    options: {
      goal: {
        cutting: "Yağ Yakma (Cutting)",
        maintenance: "İdame",
        bulking: "Kas Kazanma (Bulking)",
      },
    },
    errors: {
      tdeeOutOfRange: "TDEE 800 ile 10.000 kcal arasında olmalıdır.",
      macroSumExceeds90: "Protein % + Yağ % toplamı %90'ı geçemez (Karbonhidrat en az %10 olmalıdır).",
    },
    faq: [
      {
        q: "Makrolar nedir?",
        a: "Makrolar (makro besinler), enerji sağlayan üç ana besin öğesidir: protein, yağ ve karbonhidrat. Protein ve karbonhidrat gram başına 4 kcal; yağ ise gram başına 9 kcal sağlar.",
      },
      {
        q: "TDEE nedir?",
        a: "Toplam Günlük Enerji Harcaması (TDEE), vücudunuzun bir günde yaktığı toplam kaloridir; bazal metabolik hızınız (BMH) ile aktiviteyle yakılan kalorileri içerir.",
      },
      {
        q: "Kilo vermek için hangi makro oranı kullanmalıyım?",
        a: "Yağ yakma (cutting) sürecinde yüksek protein alımı (%35–40) kalori açığındayken kas kütlesini korumaya yardımcı olur. Yağ genellikle %25–30 olarak tutulur, kalan kısım karbonhidrattan oluşur.",
      },
      {
        q: "Varsayılan yüzdeleri değiştirebilir miyim?",
        a: "Evet. Gösterilen varsayılanlar, her hedef için kanıta dayalı başlangıç noktalarıdır. Protein ve yağ yüzdelerini manuel olarak ayarlayabilirsiniz; karbonhidrat kalan yüzdeyi otomatik doldurur.",
      },
    ],
  },

  de: {
    title: "Makro-Rechner",
    short: "Berechnen Sie Ihren täglichen Protein-, Fett- und Kohlenhydratbedarf aus Ihrem TDEE und Fitnessziel.",
    description:
      "Kostenloser Makro-Rechner. Geben Sie Ihren Gesamtenergieumsatz und Ihr Fitnessziel ein und erhalten Sie optimale Makronährstoffziele in Gramm und Kalorien.",
    keywords: [
      "Makro-Rechner",
      "Makronährstoff-Rechner",
      "Protein Fett Kohlenhydrate Rechner",
      "TDEE Makros",
      "Diät Makros",
      "Muskelaufbau Makros",
      "Kalorienrechner",
    ],
    inputs: {
      tdee: {
        label: "Gesamtenergieumsatz (TDEE)",
        help: "Ihr gesamter täglicher Kalorienverbrauch einschließlich Aktivität.",
      },
      goal: {
        label: "Fitnessziel",
        help: "Ihr primäres Ernährungsziel — legt die Standard-Makroprozentsätze fest.",
      },
      proteinPct: {
        label: "Protein %",
        help: "Anteil der Gesamtkalorien aus Protein. Jedes Gramm Protein = 4 kcal.",
      },
      fatPct: {
        label: "Fett %",
        help: "Anteil der Gesamtkalorien aus Fett. Jedes Gramm Fett = 9 kcal. Kohlenhydrate füllen den Rest automatisch auf.",
      },
    },
    outputs: {
      proteinG: {
        label: "Protein",
        help: "Tägliches Proteinziel in Gramm.",
        suffix: "g",
      },
      fatG: {
        label: "Fett",
        help: "Tägliches Fettziel in Gramm.",
        suffix: "g",
      },
      carbsG: {
        label: "Kohlenhydrate",
        help: "Tägliches Kohlenhydratziel in Gramm.",
        suffix: "g",
      },
      proteinKcal: {
        label: "Protein (kcal)",
        help: "Kalorien aus Protein.",
        suffix: "kcal",
      },
      fatKcal: {
        label: "Fett (kcal)",
        help: "Kalorien aus Fett.",
        suffix: "kcal",
      },
      carbsKcal: {
        label: "Kohlenhydrate (kcal)",
        help: "Kalorien aus Kohlenhydraten.",
        suffix: "kcal",
      },
      totalKcal: {
        label: "Gesamtkalorien",
        help: "Tägliches Gesamtkalorienziel (entspricht Ihrem TDEE).",
        suffix: "kcal",
      },
    },
    options: {
      goal: {
        cutting: "Fettabbau (Cutting)",
        maintenance: "Gewichtserhalt",
        bulking: "Muskelaufbau (Bulking)",
      },
    },
    errors: {
      tdeeOutOfRange: "TDEE muss zwischen 800 und 10.000 kcal liegen.",
      macroSumExceeds90: "Protein % + Fett % darf 90 % nicht überschreiten (Kohlenhydrate müssen mindestens 10 % betragen).",
    },
    faq: [
      {
        q: "Was sind Makros?",
        a: "Makros (Makronährstoffe) sind die drei energieliefernden Hauptnährstoffe: Protein, Fett und Kohlenhydrate. Protein und Kohlenhydrate liefern je 4 kcal/g; Fett liefert 9 kcal/g.",
      },
      {
        q: "Was ist TDEE?",
        a: "Der Gesamtenergieumsatz (TDEE) ist die Gesamtzahl der Kalorien, die Ihr Körper pro Tag verbrennt, einschließlich Grundumsatz (BMR) und Aktivitätskalorien.",
      },
      {
        q: "Welche Makroaufteilung eignet sich zum Fettabbau?",
        a: "Beim Fettabbau (Cutting) hilft eine höhere Proteinzufuhr (35–40 % der Kalorien), die Muskelmasse im Kaloriendefizit zu erhalten. Fett liegt typischerweise bei 25–30 %, den Rest füllen Kohlenhydrate.",
      },
    ],
  },

  fr: {
    title: "Calculateur de macros",
    short: "Calculez vos besoins quotidiens en protéines, lipides et glucides à partir de votre TDEE et objectif fitness.",
    description:
      "Calculateur de macronutriments gratuit. Entrez votre dépense énergétique totale quotidienne et votre objectif pour obtenir vos cibles optimales en protéines, lipides et glucides.",
    keywords: [
      "calculateur macros",
      "calculateur macronutriments",
      "protéines lipides glucides",
      "TDEE macros",
      "régime sèche",
      "prise de masse macros",
      "calculateur nutrition",
    ],
    inputs: {
      tdee: {
        label: "Dépense énergétique totale quotidienne (TDEE)",
        help: "Le total de vos calories brûlées par jour, activité incluse.",
      },
      goal: {
        label: "Objectif fitness",
        help: "Votre objectif nutritionnel principal — définit les pourcentages de macros par défaut.",
      },
      proteinPct: {
        label: "Protéines %",
        help: "Pourcentage des calories totales provenant des protéines. Chaque gramme = 4 kcal.",
      },
      fatPct: {
        label: "Lipides %",
        help: "Pourcentage des calories totales provenant des lipides. Chaque gramme = 9 kcal. Les glucides complètent automatiquement le reste.",
      },
    },
    outputs: {
      proteinG: {
        label: "Protéines",
        help: "Cible quotidienne en protéines (grammes).",
        suffix: "g",
      },
      fatG: {
        label: "Lipides",
        help: "Cible quotidienne en lipides (grammes).",
        suffix: "g",
      },
      carbsG: {
        label: "Glucides",
        help: "Cible quotidienne en glucides (grammes).",
        suffix: "g",
      },
      proteinKcal: {
        label: "Protéines (kcal)",
        help: "Calories issues des protéines.",
        suffix: "kcal",
      },
      fatKcal: {
        label: "Lipides (kcal)",
        help: "Calories issues des lipides.",
        suffix: "kcal",
      },
      carbsKcal: {
        label: "Glucides (kcal)",
        help: "Calories issues des glucides.",
        suffix: "kcal",
      },
      totalKcal: {
        label: "Calories totales",
        help: "Objectif calorique quotidien total (égal à votre TDEE).",
        suffix: "kcal",
      },
    },
    options: {
      goal: {
        cutting: "Sèche (perte de graisse)",
        maintenance: "Maintien",
        bulking: "Prise de masse",
      },
    },
    errors: {
      tdeeOutOfRange: "Le TDEE doit être compris entre 800 et 10 000 kcal.",
      macroSumExceeds90: "Protéines % + Lipides % ne doit pas dépasser 90 % (les glucides doivent représenter au moins 10 %).",
    },
    faq: [
      {
        q: "Que sont les macros ?",
        a: "Les macros (macronutriments) sont les trois principaux nutriments énergétiques : protéines, lipides et glucides. Les protéines et glucides apportent 4 kcal/g ; les lipides apportent 9 kcal/g.",
      },
      {
        q: "Qu'est-ce que le TDEE ?",
        a: "La dépense énergétique totale quotidienne (TDEE) est le nombre total de calories que votre corps brûle en une journée, incluant le métabolisme de base et les calories brûlées par l'activité.",
      },
      {
        q: "Quelle répartition de macros utiliser en sèche ?",
        a: "En sèche, une protéinémie plus élevée (35–40 % des calories) aide à préserver la masse musculaire en déficit calorique. Les lipides se situent généralement à 25–30 %, le reste étant comblé par les glucides.",
      },
    ],
  },

  es: {
    title: "Calculadora de macros",
    short: "Calcula tus objetivos diarios de proteínas, grasas e hidratos de carbono a partir de tu TDEE y objetivo fitness.",
    description:
      "Calculadora de macronutrientes gratuita. Introduce tu gasto energético total diario y tu objetivo para obtener tus metas óptimas de proteínas, grasas e hidratos de carbono.",
    keywords: [
      "calculadora macros",
      "calculadora macronutrientes",
      "proteínas grasas carbohidratos",
      "TDEE macros",
      "macros definición",
      "macros volumen",
      "calculadora nutrición",
    ],
    inputs: {
      tdee: {
        label: "Gasto energético total diario (TDEE)",
        help: "El total de calorías que quemas por día, incluyendo actividad física.",
      },
      goal: {
        label: "Objetivo fitness",
        help: "Tu objetivo nutricional principal — establece los porcentajes de macros predeterminados.",
      },
      proteinPct: {
        label: "Proteínas %",
        help: "Porcentaje de calorías totales proveniente de proteínas. Cada gramo = 4 kcal.",
      },
      fatPct: {
        label: "Grasas %",
        help: "Porcentaje de calorías totales proveniente de grasas. Cada gramo = 9 kcal. Los hidratos completan automáticamente el resto.",
      },
    },
    outputs: {
      proteinG: {
        label: "Proteínas",
        help: "Objetivo diario de proteínas en gramos.",
        suffix: "g",
      },
      fatG: {
        label: "Grasas",
        help: "Objetivo diario de grasas en gramos.",
        suffix: "g",
      },
      carbsG: {
        label: "Carbohidratos",
        help: "Objetivo diario de carbohidratos en gramos.",
        suffix: "g",
      },
      proteinKcal: {
        label: "Proteínas (kcal)",
        help: "Calorías procedentes de proteínas.",
        suffix: "kcal",
      },
      fatKcal: {
        label: "Grasas (kcal)",
        help: "Calorías procedentes de grasas.",
        suffix: "kcal",
      },
      carbsKcal: {
        label: "Carbohidratos (kcal)",
        help: "Calorías procedentes de carbohidratos.",
        suffix: "kcal",
      },
      totalKcal: {
        label: "Calorías totales",
        help: "Objetivo calórico diario total (igual a tu TDEE).",
        suffix: "kcal",
      },
    },
    options: {
      goal: {
        cutting: "Definición (pérdida de grasa)",
        maintenance: "Mantenimiento",
        bulking: "Volumen (ganancia muscular)",
      },
    },
    errors: {
      tdeeOutOfRange: "El TDEE debe estar entre 800 y 10.000 kcal.",
      macroSumExceeds90: "Proteínas % + Grasas % no puede superar el 90 % (los carbohidratos deben ser al menos el 10 %).",
    },
    faq: [
      {
        q: "¿Qué son los macros?",
        a: "Los macros (macronutrientes) son los tres nutrientes energéticos principales: proteínas, grasas e hidratos de carbono. Las proteínas y los carbohidratos aportan 4 kcal/g; las grasas aportan 9 kcal/g.",
      },
      {
        q: "¿Qué es el TDEE?",
        a: "El gasto energético total diario (TDEE) es el total de calorías que tu cuerpo quema en un día, incluyendo el metabolismo basal y las calorías quemadas por actividad.",
      },
      {
        q: "¿Qué distribución de macros usar en definición?",
        a: "En definición, una ingesta más alta de proteínas (35–40 % de las calorías) ayuda a preservar la masa muscular en déficit calórico. Las grasas se sitúan normalmente en el 25–30 %, y el resto lo cubren los carbohidratos.",
      },
    ],
  },

  it: {
    title: "Calcolatore di macro",
    short: "Calcola i tuoi obiettivi giornalieri di proteine, grassi e carboidrati dal tuo TDEE e obiettivo fitness.",
    description:
      "Calcolatore di macronutrienti gratuito. Inserisci la tua spesa energetica totale giornaliera e il tuo obiettivo per ottenere i target ottimali di proteine, grassi e carboidrati.",
    keywords: [
      "calcolatore macro",
      "calcolatore macronutrienti",
      "proteine grassi carboidrati",
      "TDEE macro",
      "macro definizione",
      "macro massa muscolare",
      "calcolatore nutrizione",
    ],
    inputs: {
      tdee: {
        label: "Dispendio energetico totale giornaliero (TDEE)",
        help: "Il totale delle calorie che bruci al giorno, attività inclusa.",
      },
      goal: {
        label: "Obiettivo fitness",
        help: "Il tuo obiettivo nutrizionale principale — imposta le percentuali di macro predefinite.",
      },
      proteinPct: {
        label: "Proteine %",
        help: "Percentuale delle calorie totali proveniente dalle proteine. Ogni grammo = 4 kcal.",
      },
      fatPct: {
        label: "Grassi %",
        help: "Percentuale delle calorie totali proveniente dai grassi. Ogni grammo = 9 kcal. I carboidrati completano automaticamente il resto.",
      },
    },
    outputs: {
      proteinG: {
        label: "Proteine",
        help: "Obiettivo giornaliero di proteine in grammi.",
        suffix: "g",
      },
      fatG: {
        label: "Grassi",
        help: "Obiettivo giornaliero di grassi in grammi.",
        suffix: "g",
      },
      carbsG: {
        label: "Carboidrati",
        help: "Obiettivo giornaliero di carboidrati in grammi.",
        suffix: "g",
      },
      proteinKcal: {
        label: "Proteine (kcal)",
        help: "Calorie provenienti dalle proteine.",
        suffix: "kcal",
      },
      fatKcal: {
        label: "Grassi (kcal)",
        help: "Calorie provenienti dai grassi.",
        suffix: "kcal",
      },
      carbsKcal: {
        label: "Carboidrati (kcal)",
        help: "Calorie provenienti dai carboidrati.",
        suffix: "kcal",
      },
      totalKcal: {
        label: "Calorie totali",
        help: "Obiettivo calorico giornaliero totale (uguale al tuo TDEE).",
        suffix: "kcal",
      },
    },
    options: {
      goal: {
        cutting: "Definizione (perdita di grasso)",
        maintenance: "Mantenimento",
        bulking: "Massa muscolare",
      },
    },
    errors: {
      tdeeOutOfRange: "Il TDEE deve essere compreso tra 800 e 10.000 kcal.",
      macroSumExceeds90: "Proteine % + Grassi % non deve superare il 90 % (i carboidrati devono essere almeno il 10 %).",
    },
    faq: [
      {
        q: "Cosa sono i macro?",
        a: "I macro (macronutrienti) sono i tre principali nutrienti energetici: proteine, grassi e carboidrati. Proteine e carboidrati apportano 4 kcal/g; i grassi apportano 9 kcal/g.",
      },
      {
        q: "Cos'è il TDEE?",
        a: "La spesa energetica totale giornaliera (TDEE) è il numero totale di calorie che il tuo corpo brucia in un giorno, includendo il metabolismo basale e le calorie bruciate dall'attività.",
      },
      {
        q: "Quale distribuzione di macro usare in definizione?",
        a: "In definizione, un'assunzione più elevata di proteine (35–40 % delle calorie) aiuta a preservare la massa muscolare in deficit calorico. I grassi si attestano tipicamente al 25–30 %, il resto è coperto dai carboidrati.",
      },
    ],
  },

  ar: {
    title: "حاسبة الماكرو",
    short: "احسب أهدافك اليومية من البروتين والدهون والكربوهيدرات بناءً على TDEE وهدفك الرياضي.",
    description:
      "حاسبة مجانية للمغذيات الكبرى. أدخل إجمالي إنفاقك اليومي من السعرات الحرارية وهدفك الرياضي للحصول على أهداف مثلى من البروتين والدهون والكربوهيدرات.",
    keywords: [
      "حاسبة ماكرو",
      "حاسبة المغذيات الكبرى",
      "بروتين دهون كربوهيدرات",
      "TDEE ماكرو",
      "ماكرو تخفيف الوزن",
      "ماكرو بناء العضلات",
      "حاسبة التغذية",
    ],
    inputs: {
      tdee: {
        label: "إجمالي الإنفاق اليومي من الطاقة (TDEE)",
        help: "إجمالي السعرات الحرارية التي يحرقها جسمك يومياً بما في ذلك النشاط البدني.",
      },
      goal: {
        label: "الهدف الرياضي",
        help: "هدفك الغذائي الأساسي — يُحدد النسب الافتراضية للماكرو.",
      },
      proteinPct: {
        label: "نسبة البروتين %",
        help: "نسبة السعرات الإجمالية من البروتين. كل غرام = 4 سعرة.",
      },
      fatPct: {
        label: "نسبة الدهون %",
        help: "نسبة السعرات الإجمالية من الدهون. كل غرام = 9 سعرات. تملأ الكربوهيدرات الباقي تلقائياً.",
      },
    },
    outputs: {
      proteinG: {
        label: "البروتين",
        help: "هدف البروتين اليومي بالغرام.",
        suffix: "غ",
      },
      fatG: {
        label: "الدهون",
        help: "هدف الدهون اليومي بالغرام.",
        suffix: "غ",
      },
      carbsG: {
        label: "الكربوهيدرات",
        help: "هدف الكربوهيدرات اليومي بالغرام.",
        suffix: "غ",
      },
      proteinKcal: {
        label: "البروتين (سعرة)",
        help: "السعرات الحرارية من البروتين.",
        suffix: "سعرة",
      },
      fatKcal: {
        label: "الدهون (سعرة)",
        help: "السعرات الحرارية من الدهون.",
        suffix: "سعرة",
      },
      carbsKcal: {
        label: "الكربوهيدرات (سعرة)",
        help: "السعرات الحرارية من الكربوهيدرات.",
        suffix: "سعرة",
      },
      totalKcal: {
        label: "إجمالي السعرات",
        help: "الهدف اليومي الإجمالي من السعرات الحرارية (يساوي TDEE).",
        suffix: "سعرة",
      },
    },
    options: {
      goal: {
        cutting: "تخفيف الدهون (Cutting)",
        maintenance: "المحافظة على الوزن",
        bulking: "بناء العضلات (Bulking)",
      },
    },
    errors: {
      tdeeOutOfRange: "يجب أن يكون TDEE بين 800 و10,000 سعرة حرارية.",
      macroSumExceeds90: "نسبة البروتين + نسبة الدهون يجب ألا تتجاوز 90% (يجب أن تكون الكربوهيدرات 10% على الأقل).",
    },
    faq: [
      {
        q: "ما هي الماكرو؟",
        a: "الماكرو (المغذيات الكبرى) هي المجموعات الغذائية الثلاث الرئيسية المولّدة للطاقة: البروتين والدهون والكربوهيدرات. يُعطي كل من البروتين والكربوهيدرات 4 سعرات حرارية لكل غرام، بينما تُعطي الدهون 9 سعرات لكل غرام.",
      },
      {
        q: "ما هو TDEE؟",
        a: "إجمالي الإنفاق اليومي من الطاقة (TDEE) هو إجمالي السعرات الحرارية التي يحرقها جسمك في اليوم، شاملاً معدل الأيض الأساسي (BMR) والسعرات المحروقة بالنشاط.",
      },
      {
        q: "ما توزيع الماكرو المناسب لتخفيف الدهون؟",
        a: "في مرحلة تخفيف الدهون، تساعد نسبة بروتين أعلى (35–40% من السعرات) على الحفاظ على الكتلة العضلية في حالة عجز السعرات. تُحافظ الدهون عادةً عند 25–30%، ويملأ الباقي الكربوهيدرات.",
      },
      {
        q: "هل يمكنني تغيير النسب الافتراضية؟",
        a: "نعم. النسب الافتراضية هي نقاط بداية قائمة على الأدلة لكل هدف. يمكنك ضبط نسب البروتين والدهون يدوياً؛ وتُحسب الكربوهيدرات تلقائياً بوصفها الباقي.",
      },
    ],
  },

  ru: {
    title: "Калькулятор макроэлементов",
    short: "Рассчитайте дневные цели по белкам, жирам и углеводам на основе TDEE и вашей цели.",
    description:
      "Бесплатный калькулятор макроэлементов. Введите суммарный суточный расход энергии и цель, чтобы получить оптимальные значения белков, жиров и углеводов в граммах и калориях.",
    keywords: [
      "калькулятор макросов",
      "калькулятор макроэлементов",
      "белки жиры углеводы",
      "TDEE макросы",
      "макросы на сушку",
      "макросы на массу",
      "калькулятор питания",
    ],
    inputs: {
      tdee: {
        label: "Суммарный суточный расход энергии (TDEE)",
        help: "Общее количество сжигаемых калорий в день с учётом активности.",
      },
      goal: {
        label: "Фитнес-цель",
        help: "Ваша основная цель в питании — определяет стандартные проценты макросов.",
      },
      proteinPct: {
        label: "Белок %",
        help: "Доля белка в общих калориях. 1 г белка = 4 ккал.",
      },
      fatPct: {
        label: "Жиры %",
        help: "Доля жиров в общих калориях. 1 г жира = 9 ккал. Углеводы автоматически заполняют остаток.",
      },
    },
    outputs: {
      proteinG: {
        label: "Белок",
        help: "Дневная норма белка в граммах.",
        suffix: "г",
      },
      fatG: {
        label: "Жиры",
        help: "Дневная норма жиров в граммах.",
        suffix: "г",
      },
      carbsG: {
        label: "Углеводы",
        help: "Дневная норма углеводов в граммах.",
        suffix: "г",
      },
      proteinKcal: {
        label: "Белок (ккал)",
        help: "Калории из белка.",
        suffix: "ккал",
      },
      fatKcal: {
        label: "Жиры (ккал)",
        help: "Калории из жиров.",
        suffix: "ккал",
      },
      carbsKcal: {
        label: "Углеводы (ккал)",
        help: "Калории из углеводов.",
        suffix: "ккал",
      },
      totalKcal: {
        label: "Всего калорий",
        help: "Общая суточная цель по калориям (равна вашему TDEE).",
        suffix: "ккал",
      },
    },
    options: {
      goal: {
        cutting: "Сушка (сжигание жира)",
        maintenance: "Поддержание веса",
        bulking: "Набор мышечной массы",
      },
    },
    errors: {
      tdeeOutOfRange: "TDEE должен быть от 800 до 10 000 ккал.",
      macroSumExceeds90: "Белок % + Жиры % не должны превышать 90 % (углеводы должны составлять не менее 10 %).",
    },
    faq: [
      {
        q: "Что такое макросы?",
        a: "Макросы (макроэлементы) — три основных энергетических нутриента: белки, жиры и углеводы. Белки и углеводы дают по 4 ккал/г; жиры — 9 ккал/г.",
      },
      {
        q: "Что такое TDEE?",
        a: "Суммарный суточный расход энергии (TDEE) — общее количество калорий, которое сжигает организм за день, включая основной обмен (BMR) и активность.",
      },
      {
        q: "Какое соотношение макросов подходит для сушки?",
        a: "При сушке повышенное потребление белка (35–40 % калорий) помогает сохранить мышечную массу в условиях дефицита калорий. Жиры обычно составляют 25–30 %, остальное — углеводы.",
      },
    ],
  },

  zh: {
    title: "宏量营养素计算器",
    short: "根据您的TDEE和健身目标，计算每日蛋白质、脂肪和碳水化合物的目标量。",
    description:
      "免费宏量营养素计算器。输入您的每日总能量消耗和健身目标，获取最优蛋白质、脂肪和碳水化合物的克数和卡路里目标。",
    keywords: [
      "宏量营养素计算器",
      "蛋白质脂肪碳水化合物计算",
      "TDEE宏量",
      "减脂宏量",
      "增肌宏量",
      "饮食宏量计算",
      "营养计算器",
    ],
    inputs: {
      tdee: {
        label: "每日总能量消耗（TDEE）",
        help: "包括体力活动在内的每日总卡路里消耗量。",
      },
      goal: {
        label: "健身目标",
        help: "您的主要营养目标——决定默认的宏量营养素比例。",
      },
      proteinPct: {
        label: "蛋白质 %",
        help: "总热量中来自蛋白质的百分比。每克蛋白质 = 4千卡。",
      },
      fatPct: {
        label: "脂肪 %",
        help: "总热量中来自脂肪的百分比。每克脂肪 = 9千卡。碳水化合物自动填充剩余比例。",
      },
    },
    outputs: {
      proteinG: {
        label: "蛋白质",
        help: "每日蛋白质目标（克）。",
        suffix: "克",
      },
      fatG: {
        label: "脂肪",
        help: "每日脂肪目标（克）。",
        suffix: "克",
      },
      carbsG: {
        label: "碳水化合物",
        help: "每日碳水化合物目标（克）。",
        suffix: "克",
      },
      proteinKcal: {
        label: "蛋白质（千卡）",
        help: "来自蛋白质的热量。",
        suffix: "千卡",
      },
      fatKcal: {
        label: "脂肪（千卡）",
        help: "来自脂肪的热量。",
        suffix: "千卡",
      },
      carbsKcal: {
        label: "碳水化合物（千卡）",
        help: "来自碳水化合物的热量。",
        suffix: "千卡",
      },
      totalKcal: {
        label: "总热量",
        help: "每日总热量目标（等于您的TDEE）。",
        suffix: "千卡",
      },
    },
    options: {
      goal: {
        cutting: "减脂（切割期）",
        maintenance: "维持体重",
        bulking: "增肌（增重期）",
      },
    },
    errors: {
      tdeeOutOfRange: "TDEE必须在800到10,000千卡之间。",
      macroSumExceeds90: "蛋白质% + 脂肪%之和不得超过90%（碳水化合物至少需占10%）。",
    },
    faq: [
      {
        q: "什么是宏量营养素？",
        a: "宏量营养素（简称'宏量'）是三大主要供能营养素：蛋白质、脂肪和碳水化合物。蛋白质和碳水化合物每克提供4千卡，脂肪每克提供9千卡。",
      },
      {
        q: "什么是TDEE？",
        a: "每日总能量消耗（TDEE）是您的身体每天消耗的总热量，包括基础代谢率（BMR）和活动消耗的热量。",
      },
      {
        q: "减脂期应该用什么宏量比例？",
        a: "减脂期间，较高的蛋白质摄入（35–40%的热量）有助于在热量缺口下保留肌肉量。脂肪通常保持在25–30%，其余由碳水化合物补充。",
      },
    ],
  },

  ja: {
    title: "マクロ栄養素計算機",
    short: "TDEEとフィットネス目標から、1日のたんぱく質・脂質・糖質の目標量を計算します。",
    description:
      "無料のマクロ栄養素計算機です。1日の総消費エネルギー（TDEE）と目標を入力して、最適なたんぱく質・脂質・糖質の目標量をグラムとカロリーで算出します。",
    keywords: [
      "マクロ栄養素計算機",
      "たんぱく質脂質糖質計算",
      "TDEEマクロ",
      "ダイエットマクロ",
      "増量マクロ",
      "栄養計算機",
      "マクロ計算",
    ],
    inputs: {
      tdee: {
        label: "1日の総消費エネルギー（TDEE）",
        help: "活動量を含む1日の総消費カロリーです。",
      },
      goal: {
        label: "フィットネス目標",
        help: "主な栄養目標——デフォルトのマクロ比率を設定します。",
      },
      proteinPct: {
        label: "たんぱく質 %",
        help: "総カロリーに占めるたんぱく質の割合。1 g = 4 kcal。",
      },
      fatPct: {
        label: "脂質 %",
        help: "総カロリーに占める脂質の割合。1 g = 9 kcal。糖質は自動的に残りを補います。",
      },
    },
    outputs: {
      proteinG: {
        label: "たんぱく質",
        help: "1日のたんぱく質目標（g）。",
        suffix: "g",
      },
      fatG: {
        label: "脂質",
        help: "1日の脂質目標（g）。",
        suffix: "g",
      },
      carbsG: {
        label: "糖質",
        help: "1日の糖質目標（g）。",
        suffix: "g",
      },
      proteinKcal: {
        label: "たんぱく質（kcal）",
        help: "たんぱく質由来のカロリー。",
        suffix: "kcal",
      },
      fatKcal: {
        label: "脂質（kcal）",
        help: "脂質由来のカロリー。",
        suffix: "kcal",
      },
      carbsKcal: {
        label: "糖質（kcal）",
        help: "糖質由来のカロリー。",
        suffix: "kcal",
      },
      totalKcal: {
        label: "総カロリー",
        help: "1日の総カロリー目標（TDEEと同値）。",
        suffix: "kcal",
      },
    },
    options: {
      goal: {
        cutting: "減量・絞り込み（カッティング）",
        maintenance: "維持",
        bulking: "増量・筋肉量増加（バルキング）",
      },
    },
    errors: {
      tdeeOutOfRange: "TDEEは800〜10,000 kcalの範囲で入力してください。",
      macroSumExceeds90: "たんぱく質 % + 脂質 % の合計が90 %を超えてはいけません（糖質は最低10 %必要です）。",
    },
    faq: [
      {
        q: "マクロ栄養素とは何ですか？",
        a: "マクロ栄養素とは、エネルギーを供給する3つの主要栄養素：たんぱく質・脂質・糖質のことです。たんぱく質と糖質は1 gあたり4 kcal、脂質は1 gあたり9 kcalを供給します。",
      },
      {
        q: "TDEEとは何ですか？",
        a: "1日の総消費エネルギー（TDEE）は、基礎代謝量（BMR）と活動量を合わせた1日の総消費カロリーです。",
      },
      {
        q: "減量時のマクロ比率は？",
        a: "減量（カッティング）では、高たんぱく食（カロリーの35〜40%）がカロリー制限中の筋肉量維持に役立ちます。脂質は25〜30%程度に抑え、残りを糖質で補います。",
      },
    ],
  },

  ko: {
    title: "매크로 계산기",
    short: "TDEE와 피트니스 목표에 따른 일일 단백질, 지방, 탄수화물 목표량을 계산하세요.",
    description:
      "무료 매크로 영양소 계산기입니다. 하루 총 에너지 소비량과 목표를 입력하면 최적의 단백질, 지방, 탄수화물 목표량을 그램과 칼로리로 알 수 있습니다.",
    keywords: [
      "매크로 계산기",
      "다량영양소 계산기",
      "단백질 지방 탄수화물",
      "TDEE 매크로",
      "다이어트 매크로",
      "벌크업 매크로",
      "영양 계산기",
    ],
    inputs: {
      tdee: {
        label: "일일 총 에너지 소비량 (TDEE)",
        help: "활동량을 포함한 하루 총 칼로리 소비량입니다.",
      },
      goal: {
        label: "피트니스 목표",
        help: "주요 영양 목표——기본 매크로 비율을 설정합니다.",
      },
      proteinPct: {
        label: "단백질 %",
        help: "총 칼로리 중 단백질 비율. 1g = 4kcal.",
      },
      fatPct: {
        label: "지방 %",
        help: "총 칼로리 중 지방 비율. 1g = 9kcal. 탄수화물은 자동으로 나머지를 채웁니다.",
      },
    },
    outputs: {
      proteinG: {
        label: "단백질",
        help: "일일 단백질 목표(그램).",
        suffix: "g",
      },
      fatG: {
        label: "지방",
        help: "일일 지방 목표(그램).",
        suffix: "g",
      },
      carbsG: {
        label: "탄수화물",
        help: "일일 탄수화물 목표(그램).",
        suffix: "g",
      },
      proteinKcal: {
        label: "단백질 (kcal)",
        help: "단백질에서 오는 칼로리.",
        suffix: "kcal",
      },
      fatKcal: {
        label: "지방 (kcal)",
        help: "지방에서 오는 칼로리.",
        suffix: "kcal",
      },
      carbsKcal: {
        label: "탄수화물 (kcal)",
        help: "탄수화물에서 오는 칼로리.",
        suffix: "kcal",
      },
      totalKcal: {
        label: "총 칼로리",
        help: "일일 총 칼로리 목표(TDEE와 동일).",
        suffix: "kcal",
      },
    },
    options: {
      goal: {
        cutting: "감량 (체지방 감소)",
        maintenance: "유지",
        bulking: "벌크업 (근육 증가)",
      },
    },
    errors: {
      tdeeOutOfRange: "TDEE는 800~10,000 kcal 범위 내여야 합니다.",
      macroSumExceeds90: "단백질 % + 지방 %의 합이 90%를 초과할 수 없습니다(탄수화물은 최소 10% 이상이어야 합니다).",
    },
    faq: [
      {
        q: "매크로란 무엇인가요?",
        a: "매크로(다량영양소)는 에너지를 공급하는 세 가지 주요 영양소입니다: 단백질, 지방, 탄수화물. 단백질과 탄수화물은 그램당 4kcal, 지방은 그램당 9kcal를 제공합니다.",
      },
      {
        q: "TDEE란 무엇인가요?",
        a: "일일 총 에너지 소비량(TDEE)은 기초대사량(BMR)과 활동으로 소비되는 칼로리를 합한 하루 총 칼로리 소비량입니다.",
      },
      {
        q: "감량할 때 어떤 매크로 비율을 사용해야 하나요?",
        a: "감량 시 높은 단백질 섭취량(칼로리의 35–40%)이 칼로리 부족 상태에서 근육량 유지에 도움이 됩니다. 지방은 보통 25–30%로 유지하고 나머지는 탄수화물로 채웁니다.",
      },
    ],
  },

  hi: {
    title: "मैक्रो कैलकुलेटर",
    short: "अपने TDEE और फिटनेस लक्ष्य के आधार पर दैनिक प्रोटीन, वसा और कार्बोहाइड्रेट लक्ष्य की गणना करें।",
    description:
      "मुफ़्त मैक्रो कैलकुलेटर। अपना कुल दैनिक ऊर्जा व्यय और फिटनेस लक्ष्य दर्ज करें और ग्राम एवं कैलोरी में इष्टतम प्रोटीन, वसा और कार्बोहाइड्रेट लक्ष्य प्राप्त करें।",
    keywords: [
      "मैक्रो कैलकुलेटर",
      "मैक्रोन्यूट्रिएंट कैलकुलेटर",
      "प्रोटीन वसा कार्बोहाइड्रेट",
      "TDEE मैक्रो",
      "वज़न घटाने के मैक्रो",
      "मसल बनाने के मैक्रो",
      "पोषण कैलकुलेटर",
    ],
    inputs: {
      tdee: {
        label: "कुल दैनिक ऊर्जा व्यय (TDEE)",
        help: "गतिविधि सहित आपका कुल दैनिक कैलोरी जलना।",
      },
      goal: {
        label: "फिटनेस लक्ष्य",
        help: "आपका प्राथमिक पोषण लक्ष्य — डिफ़ॉल्ट मैक्रो प्रतिशत निर्धारित करता है।",
      },
      proteinPct: {
        label: "प्रोटीन %",
        help: "कुल कैलोरी में प्रोटीन का प्रतिशत। प्रति ग्राम = 4 kcal।",
      },
      fatPct: {
        label: "वसा %",
        help: "कुल कैलोरी में वसा का प्रतिशत। प्रति ग्राम = 9 kcal। कार्बोहाइड्रेट स्वचालित रूप से शेष भरते हैं।",
      },
    },
    outputs: {
      proteinG: {
        label: "प्रोटीन",
        help: "दैनिक प्रोटीन लक्ष्य (ग्राम में)।",
        suffix: "ग्राम",
      },
      fatG: {
        label: "वसा",
        help: "दैनिक वसा लक्ष्य (ग्राम में)।",
        suffix: "ग्राम",
      },
      carbsG: {
        label: "कार्बोहाइड्रेट",
        help: "दैनिक कार्बोहाइड्रेट लक्ष्य (ग्राम में)।",
        suffix: "ग्राम",
      },
      proteinKcal: {
        label: "प्रोटीन (kcal)",
        help: "प्रोटीन से प्राप्त कैलोरी।",
        suffix: "kcal",
      },
      fatKcal: {
        label: "वसा (kcal)",
        help: "वसा से प्राप्त कैलोरी।",
        suffix: "kcal",
      },
      carbsKcal: {
        label: "कार्बोहाइड्रेट (kcal)",
        help: "कार्बोहाइड्रेट से प्राप्त कैलोरी।",
        suffix: "kcal",
      },
      totalKcal: {
        label: "कुल कैलोरी",
        help: "कुल दैनिक कैलोरी लक्ष्य (TDEE के बराबर)।",
        suffix: "kcal",
      },
    },
    options: {
      goal: {
        cutting: "वसा घटाना (Cutting)",
        maintenance: "वज़न बनाए रखना",
        bulking: "मसल बनाना (Bulking)",
      },
    },
    errors: {
      tdeeOutOfRange: "TDEE 800 से 10,000 kcal के बीच होना चाहिए।",
      macroSumExceeds90: "प्रोटीन % + वसा % का योग 90% से अधिक नहीं होना चाहिए (कार्बोहाइड्रेट कम से कम 10% होना चाहिए)।",
    },
    faq: [
      {
        q: "मैक्रो क्या हैं?",
        a: "मैक्रो (मैक्रोन्यूट्रिएंट्स) तीन मुख्य ऊर्जा प्रदान करने वाले पोषक तत्व हैं: प्रोटीन, वसा और कार्बोहाइड्रेट। प्रोटीन और कार्बोहाइड्रेट प्रति ग्राम 4 kcal देते हैं; वसा प्रति ग्राम 9 kcal देती है।",
      },
      {
        q: "TDEE क्या है?",
        a: "कुल दैनिक ऊर्जा व्यय (TDEE) वह कुल कैलोरी है जो आपका शरीर एक दिन में जलाता है, जिसमें बेसल मेटाबॉलिक रेट (BMR) और गतिविधि से जली कैलोरी शामिल हैं।",
      },
      {
        q: "वसा घटाने के लिए कौन सा मैक्रो अनुपात उपयोग करें?",
        a: "वसा घटाने (Cutting) के दौरान, उच्च प्रोटीन सेवन (35–40% कैलोरी) कैलोरी घाटे में मांसपेशियों को बनाए रखने में मदद करता है। वसा आमतौर पर 25–30% रखी जाती है, शेष कार्बोहाइड्रेट से आता है।",
      },
      {
        q: "क्या मैं डिफ़ॉल्ट प्रतिशत बदल सकता/सकती हूँ?",
        a: "हाँ। दिखाए गए डिफ़ॉल्ट प्रत्येक लक्ष्य के लिए साक्ष्य-आधारित शुरुआती बिंदु हैं। आप प्रोटीन और वसा प्रतिशत को मैन्युअल रूप से समायोजित कर सकते हैं; कार्बोहाइड्रेट स्वचालित रूप से शेष की गणना करता है।",
      },
    ],
  },
};

export default i18n;
