import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Discount Calculator",
    short: "Calculate sale price, savings, and final price after discount and tax.",
    description:
      "Free discount calculator. Find the discounted price, total savings, and final price after sales tax. Also calculate the discount percentage from original and sale prices.",
    keywords: [
      "discount calculator",
      "sale price calculator",
      "savings calculator",
      "percent off calculator",
      "sale discount",
      "original price calculator",
      "price reduction",
    ],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Discount %: enter original price and discount percentage to find sale price. Final Price: enter original and sale prices to find the discount percentage.",
      },
      originalPrice: {
        label: "Original Price",
        help: "The original or regular price before any discount.",
      },
      discountPct: {
        label: "Discount (%)",
        help: "The percentage discount applied to the original price.",
      },
      salePrice: {
        label: "Sale Price",
        help: "The discounted or sale price (used in final price mode to calculate the discount percentage).",
      },
      taxRate: {
        label: "Sales Tax Rate (%)",
        help: "Optional: add sales tax to the discounted price to get the final checkout price.",
      },
    },
    outputs: {
      salePrice: {
        label: "Sale Price",
        help: "The price after applying the discount.",
      },
      savings: {
        label: "You Save",
        help: "The dollar amount saved compared to the original price.",
      },
      discountPct: {
        label: "Discount %",
        help: "The percentage off the original price (shown in final price mode).",
      },
      finalPriceWithTax: {
        label: "Final Price (with Tax)",
        help: "Sale price plus sales tax — the actual amount you pay at checkout.",
      },
      savingsPct: {
        label: "Savings %",
        help: "Percentage savings relative to the original price.",
      },
    },
    options: {
      mode: {
        discount_pct: "Discount %",
        final_price: "Final Price → Discount %",
      },
    },
    errors: {
      originalPriceRequired: "Original price must be greater than zero.",
      salePriceExceedsOriginal: "Sale price cannot exceed original price.",
    },
    faq: [
      {
        q: "How do I calculate a percentage discount?",
        a: "Sale Price = Original Price × (1 − Discount% ÷ 100). For a 30% discount on $80: Sale Price = $80 × 0.70 = $56. You save $24.",
      },
      {
        q: "How do I find the discount percentage from two prices?",
        a: "Discount% = (Original Price − Sale Price) ÷ Original Price × 100. If an item was $120 and is now $84: Discount% = (120 − 84) ÷ 120 × 100 = 30%.",
      },
      {
        q: "Does the discount apply before or after tax?",
        a: "Discounts are always applied to the pre-tax price. Sales tax is then calculated on the discounted (sale) price. This calculator follows that order.",
      },
      {
        q: "What is a compound discount?",
        a: "A compound discount applies multiple discounts successively. For example, 20% off followed by an additional 10% off is not 30% off — it is 28% off (you pay 80% then 90% of that = 72%, saving 28%).",
      },
      {
        q: "What is the difference between discount and markdown?",
        a: "A discount is a temporary price reduction (a sale), while a markdown is a permanent price reduction because the item no longer sells at the original price. Both result in a lower selling price but have different retail accounting implications.",
      },
    ],
  },
  pt: {
    title: "Calculadora de Desconto",
    short: "Calcule o preço final após aplicar um desconto percentual.",
    description:
      "Calculadora gratuita de desconto. Introduza o preço original e a percentagem de desconto para ver o preço final e a poupança.",
    keywords: ["desconto", "calculadora desconto", "preço promocional", "saldos", "promoção"],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Discount %: enter original price and discount percentage to find sale price. Final Price: enter original and sale prices to find the discount percentage.",
      },
      originalPrice: {
        label: "Original Price",
        help: "The original or regular price before any discount.",
      },
      discountPct: {
        label: "Discount (%)",
        help: "The percentage discount applied to the original price.",
      },
      salePrice: {
        label: "Sale Price",
        help: "The discounted or sale price (used in final price mode to calculate the discount percentage).",
      },
      taxRate: {
        label: "Sales Tax Rate (%)",
        help: "Optional: add sales tax to the discounted price to get the final checkout price.",
      },
    },
    outputs: {
      salePrice: {
        label: "Sale Price",
        help: "The price after applying the discount.",
      },
      savings: {
        label: "You Save",
        help: "The dollar amount saved compared to the original price.",
      },
      discountPct: {
        label: "Discount %",
        help: "The percentage off the original price (shown in final price mode).",
      },
      finalPriceWithTax: {
        label: "Final Price (with Tax)",
        help: "Sale price plus sales tax — the actual amount you pay at checkout.",
      },
      savingsPct: {
        label: "Savings %",
        help: "Percentage savings relative to the original price.",
      },
    },
    options: {
      mode: {
        discount_pct: "Discount %",
        final_price: "Final Price → Discount %",
      },
    },
    errors: {
      originalPriceRequired: "Original price must be greater than zero.",
      salePriceExceedsOriginal: "Sale price cannot exceed original price.",
    },
    faq: [
      {
        q: "How do I calculate a percentage discount?",
        a: "Sale Price = Original Price × (1 − Discount% ÷ 100). For a 30% discount on $80: Sale Price = $80 × 0.70 = $56. You save $24.",
      },
      {
        q: "How do I find the discount percentage from two prices?",
        a: "Discount% = (Original Price − Sale Price) ÷ Original Price × 100. If an item was $120 and is now $84: Discount% = (120 − 84) ÷ 120 × 100 = 30%.",
      },
      {
        q: "Does the discount apply before or after tax?",
        a: "Discounts are always applied to the pre-tax price. Sales tax is then calculated on the discounted (sale) price. This calculator follows that order.",
      },
      {
        q: "What is a compound discount?",
        a: "A compound discount applies multiple discounts successively. For example, 20% off followed by an additional 10% off is not 30% off — it is 28% off (you pay 80% then 90% of that = 72%, saving 28%).",
      },
      {
        q: "What is the difference between discount and markdown?",
        a: "A discount is a temporary price reduction (a sale), while a markdown is a permanent price reduction because the item no longer sells at the original price. Both result in a lower selling price but have different retail accounting implications.",
      },
    ],
  },
  id: {
    title: "Kalkulator Diskon",
    short: "Hitung harga akhir setelah menerapkan diskon persentase.",
    description:
      "Kalkulator diskon gratis. Masukkan harga asli dan persentase diskon untuk melihat harga akhir dan penghematan.",
    keywords: ["diskon", "kalkulator diskon", "harga promo", "obral", "promosi"],
    inputs: {
      mode: {
        label: "Calculation Mode",
        help: "Discount %: enter original price and discount percentage to find sale price. Final Price: enter original and sale prices to find the discount percentage.",
      },
      originalPrice: {
        label: "Original Price",
        help: "The original or regular price before any discount.",
      },
      discountPct: {
        label: "Discount (%)",
        help: "The percentage discount applied to the original price.",
      },
      salePrice: {
        label: "Sale Price",
        help: "The discounted or sale price (used in final price mode to calculate the discount percentage).",
      },
      taxRate: {
        label: "Sales Tax Rate (%)",
        help: "Optional: add sales tax to the discounted price to get the final checkout price.",
      },
    },
    outputs: {
      salePrice: {
        label: "Sale Price",
        help: "The price after applying the discount.",
      },
      savings: {
        label: "You Save",
        help: "The dollar amount saved compared to the original price.",
      },
      discountPct: {
        label: "Discount %",
        help: "The percentage off the original price (shown in final price mode).",
      },
      finalPriceWithTax: {
        label: "Final Price (with Tax)",
        help: "Sale price plus sales tax — the actual amount you pay at checkout.",
      },
      savingsPct: {
        label: "Savings %",
        help: "Percentage savings relative to the original price.",
      },
    },
    options: {
      mode: {
        discount_pct: "Discount %",
        final_price: "Final Price → Discount %",
      },
    },
    errors: {
      originalPriceRequired: "Original price must be greater than zero.",
      salePriceExceedsOriginal: "Sale price cannot exceed original price.",
    },
    faq: [
      {
        q: "How do I calculate a percentage discount?",
        a: "Sale Price = Original Price × (1 − Discount% ÷ 100). For a 30% discount on $80: Sale Price = $80 × 0.70 = $56. You save $24.",
      },
      {
        q: "How do I find the discount percentage from two prices?",
        a: "Discount% = (Original Price − Sale Price) ÷ Original Price × 100. If an item was $120 and is now $84: Discount% = (120 − 84) ÷ 120 × 100 = 30%.",
      },
      {
        q: "Does the discount apply before or after tax?",
        a: "Discounts are always applied to the pre-tax price. Sales tax is then calculated on the discounted (sale) price. This calculator follows that order.",
      },
      {
        q: "What is a compound discount?",
        a: "A compound discount applies multiple discounts successively. For example, 20% off followed by an additional 10% off is not 30% off — it is 28% off (you pay 80% then 90% of that = 72%, saving 28%).",
      },
      {
        q: "What is the difference between discount and markdown?",
        a: "A discount is a temporary price reduction (a sale), while a markdown is a permanent price reduction because the item no longer sells at the original price. Both result in a lower selling price but have different retail accounting implications.",
      },
    ],
  },


  tr: {
    title: "İndirim Hesaplayıcı",
    short: "İndirimli fiyatı, tasarrufu ve vergi sonrası nihai fiyatı hesaplayın.",
    description:
      "Ücretsiz indirim hesaplayıcı. İndirimli fiyatı, toplam tasarrufu ve satış vergisi sonrası nihai fiyatı hesaplayın. Orijinal ve indirimli fiyattan indirim yüzdesini de bulun.",
    keywords: [
      "indirim hesaplayıcı",
      "indirimli fiyat hesaplayıcı",
      "tasarruf hesaplayıcı",
      "yüzde indirim",
      "satış indirimi",
      "fiyat düşürme",
      "kampanya hesaplayıcı",
    ],
    inputs: {
      mode: {
        label: "Hesaplama Modu",
        help: "İndirim %: orijinal fiyat ve indirim yüzdesinden satış fiyatını bulur. Nihai Fiyat: orijinal ve satış fiyatından indirim yüzdesini hesaplar.",
      },
      originalPrice: {
        label: "Orijinal Fiyat",
        help: "İndirim öncesi normal fiyat.",
      },
      discountPct: {
        label: "İndirim (%)",
        help: "Orijinal fiyata uygulanan indirim yüzdesi.",
      },
      salePrice: {
        label: "İndirimli Fiyat",
        help: "İndirimli satış fiyatı (nihai fiyat modunda indirim yüzdesi hesaplamak için kullanılır).",
      },
      taxRate: {
        label: "Satış Vergisi Oranı (%)",
        help: "İsteğe bağlı: nihai ödeme fiyatını hesaplamak için indirimli fiyata KDV ekleyin.",
      },
    },
    outputs: {
      salePrice: {
        label: "İndirimli Fiyat",
        help: "İndirim uygulandıktan sonraki fiyat.",
      },
      savings: {
        label: "Tasarruf",
        help: "Orijinal fiyata kıyasla elde edilen tasarruf tutarı.",
      },
      discountPct: {
        label: "İndirim %",
        help: "Orijinal fiyattan düşülen yüzde (nihai fiyat modunda gösterilir).",
      },
      finalPriceWithTax: {
        label: "Vergi Dahil Nihai Fiyat",
        help: "İndirimli fiyat artı satış vergisi — kasada ödeyeceğiniz gerçek tutar.",
      },
      savingsPct: {
        label: "Tasarruf %",
        help: "Orijinal fiyata göre tasarruf yüzdesi.",
      },
    },
    options: {
      mode: {
        discount_pct: "İndirim %",
        final_price: "Nihai Fiyat → İndirim %",
      },
    },
    errors: {
      originalPriceRequired: "Orijinal fiyat sıfırdan büyük olmalıdır.",
      salePriceExceedsOriginal: "İndirimli fiyat orijinal fiyatı aşamaz.",
    },
    faq: [
      {
        q: "Yüzde indirim nasıl hesaplanır?",
        a: "İndirimli Fiyat = Orijinal Fiyat × (1 − İndirim% ÷ 100). 80 TL ürüne %30 indirim: 80 × 0,70 = 56 TL. 24 TL tasarruf edilir.",
      },
      {
        q: "İki fiyattan indirim yüzdesini nasıl bulurum?",
        a: "İndirim% = (Orijinal − İndirimli) ÷ Orijinal × 100. 120 TL olan ürün 84 TL'ye düşmüşse: (120 − 84) ÷ 120 × 100 = %30 indirim.",
      },
      {
        q: "İndirim vergiden önce mi sonra mı uygulanır?",
        a: "İndirimler her zaman vergisiz fiyata uygulanır. Ardından satış vergisi indirimli (satış) fiyat üzerinden hesaplanır.",
      },
    ],
  },

  de: {
    title: "Rabatt-Rechner",
    short: "Berechnen Sie den Verkaufspreis, die Ersparnisse und den Endpreis nach Rabatt und Steuer.",
    description:
      "Kostenloser Rabatt-Rechner. Berechnen Sie den Rabattpreis, Gesamtersparnis und den Endpreis inklusive Mehrwertsteuer.",
    keywords: [
      "Rabatt-Rechner",
      "Verkaufspreis berechnen",
      "Ersparnis berechnen",
      "Prozent Rabatt",
      "Sonderangebot berechnen",
      "Preisreduzierung",
      "Angebot Kalkulator",
    ],
    inputs: {
      mode: {
        label: "Berechnungsmodus",
        help: "Rabatt %: Originalpreis und Rabattprozentsatz eingeben. Endpreis: Original- und Verkaufspreis eingeben, um den Rabattprozentsatz zu ermitteln.",
      },
      originalPrice: {
        label: "Originalpreis",
        help: "Der ursprüngliche Preis vor dem Rabatt.",
      },
      discountPct: {
        label: "Rabatt (%)",
        help: "Der auf den Originalpreis angewandte Rabattprozentsatz.",
      },
      salePrice: {
        label: "Verkaufspreis",
        help: "Der rabattierte Verkaufspreis (im Endpreis-Modus für die Berechnung des Rabattprozentsatzes).",
      },
      taxRate: {
        label: "Umsatzsteuersatz (%)",
        help: "Optional: MwSt. auf den rabattierten Preis hinzufügen.",
      },
    },
    outputs: {
      salePrice: {
        label: "Verkaufspreis",
        help: "Der Preis nach Anwendung des Rabatts.",
      },
      savings: {
        label: "Sie sparen",
        help: "Der in Euro gesparte Betrag im Vergleich zum Originalpreis.",
      },
      discountPct: {
        label: "Rabatt %",
        help: "Prozentualer Nachlass vom Originalpreis.",
      },
      finalPriceWithTax: {
        label: "Endpreis (inkl. MwSt.)",
        help: "Verkaufspreis plus Umsatzsteuer — der tatsächlich zu zahlende Betrag.",
      },
      savingsPct: {
        label: "Ersparnis %",
        help: "Prozentualer Rabatt relativ zum Originalpreis.",
      },
    },
    options: {
      mode: {
        discount_pct: "Rabatt %",
        final_price: "Endpreis → Rabatt %",
      },
    },
    errors: {
      originalPriceRequired: "Der Originalpreis muss größer als null sein.",
      salePriceExceedsOriginal: "Der Verkaufspreis darf den Originalpreis nicht übersteigen.",
    },
    faq: [
      {
        q: "Wie berechnet man einen prozentualen Rabatt?",
        a: "Verkaufspreis = Originalpreis × (1 − Rabatt% ÷ 100). Bei 30% Rabatt auf 80 €: 80 × 0,70 = 56 €. Ersparnis: 24 €.",
      },
      {
        q: "Wie findet man den Rabattprozentsatz aus zwei Preisen?",
        a: "Rabatt% = (Originalpreis − Verkaufspreis) ÷ Originalpreis × 100. Bei 120 € heruntergesetzt auf 84 €: (120 − 84) ÷ 120 × 100 = 30%.",
      },
      {
        q: "Wird der Rabatt vor oder nach der Steuer angewandt?",
        a: "Rabatte werden immer auf den Netto-Preis angewandt. Die MwSt. wird dann auf den rabattierten Preis berechnet.",
      },
    ],
  },

  fr: {
    title: "Calculateur de Remise",
    short: "Calculez le prix soldé, les économies et le prix final après remise et taxe.",
    description:
      "Calculateur de remise gratuit. Trouvez le prix soldé, les économies totales et le prix final avec TVA.",
    keywords: [
      "calculateur remise",
      "calculateur prix soldé",
      "calculateur économies",
      "pourcentage remise",
      "promotion calcul",
      "réduction prix",
      "soldes calculateur",
    ],
    inputs: {
      mode: {
        label: "Mode de calcul",
        help: "Remise % : entrez le prix original et le pourcentage de remise. Prix final : entrez le prix original et le prix soldé pour obtenir le pourcentage de remise.",
      },
      originalPrice: {
        label: "Prix original",
        help: "Le prix original ou habituel avant toute remise.",
      },
      discountPct: {
        label: "Remise (%)",
        help: "Le pourcentage de remise appliqué au prix original.",
      },
      salePrice: {
        label: "Prix soldé",
        help: "Le prix après remise (utilisé en mode prix final pour calculer le pourcentage de remise).",
      },
      taxRate: {
        label: "TVA (%)",
        help: "Optionnel : ajoutez la TVA au prix soldé pour obtenir le prix final.",
      },
    },
    outputs: {
      salePrice: {
        label: "Prix soldé",
        help: "Le prix après application de la remise.",
      },
      savings: {
        label: "Économies",
        help: "Le montant économisé par rapport au prix original.",
      },
      discountPct: {
        label: "Remise %",
        help: "Le pourcentage de réduction par rapport au prix original.",
      },
      finalPriceWithTax: {
        label: "Prix final (avec TVA)",
        help: "Prix soldé plus TVA — le montant réellement payé à la caisse.",
      },
      savingsPct: {
        label: "% d'économies",
        help: "Pourcentage d'économies par rapport au prix original.",
      },
    },
    options: {
      mode: {
        discount_pct: "Remise %",
        final_price: "Prix final → Remise %",
      },
    },
    errors: {
      originalPriceRequired: "Le prix original doit être supérieur à zéro.",
      salePriceExceedsOriginal: "Le prix soldé ne peut pas dépasser le prix original.",
    },
    faq: [
      {
        q: "Comment calculer un pourcentage de remise ?",
        a: "Prix soldé = Prix original × (1 − Remise% ÷ 100). Pour 30% de remise sur 80 € : 80 × 0,70 = 56 €. Économies : 24 €.",
      },
      {
        q: "Comment trouver le pourcentage de remise à partir de deux prix ?",
        a: "Remise% = (Prix original − Prix soldé) ÷ Prix original × 100. Si 120 € devient 84 € : (120 − 84) ÷ 120 × 100 = 30%.",
      },
      {
        q: "La remise est-elle appliquée avant ou après la TVA ?",
        a: "Les remises sont toujours appliquées au prix hors taxe. La TVA est ensuite calculée sur le prix soldé.",
      },
    ],
  },

  es: {
    title: "Calculadora de Descuento",
    short: "Calcula el precio con descuento, el ahorro y el precio final después de descuento e impuesto.",
    description:
      "Calculadora de descuento gratuita. Encuentra el precio rebajado, el ahorro total y el precio final con IVA.",
    keywords: [
      "calculadora descuento",
      "calculadora precio rebajado",
      "calculadora ahorro",
      "porcentaje descuento",
      "precio oferta",
      "reducción precio",
      "calculadora oferta",
    ],
    inputs: {
      mode: {
        label: "Modo de cálculo",
        help: "Descuento %: ingresa precio original y porcentaje de descuento. Precio final: ingresa precio original y precio de venta para obtener el porcentaje de descuento.",
      },
      originalPrice: {
        label: "Precio original",
        help: "El precio original o regular antes de cualquier descuento.",
      },
      discountPct: {
        label: "Descuento (%)",
        help: "El porcentaje de descuento aplicado al precio original.",
      },
      salePrice: {
        label: "Precio de venta",
        help: "El precio con descuento (usado en modo precio final para calcular el porcentaje de descuento).",
      },
      taxRate: {
        label: "IVA/Impuesto (%)",
        help: "Opcional: agrega impuesto al precio con descuento para obtener el precio final.",
      },
    },
    outputs: {
      salePrice: {
        label: "Precio con descuento",
        help: "El precio después de aplicar el descuento.",
      },
      savings: {
        label: "Ahorras",
        help: "El monto ahorrado comparado con el precio original.",
      },
      discountPct: {
        label: "Descuento %",
        help: "El porcentaje de descuento sobre el precio original.",
      },
      finalPriceWithTax: {
        label: "Precio final (con impuesto)",
        help: "Precio con descuento más impuesto — lo que pagas en caja.",
      },
      savingsPct: {
        label: "% de ahorro",
        help: "Porcentaje de ahorro sobre el precio original.",
      },
    },
    options: {
      mode: {
        discount_pct: "Descuento %",
        final_price: "Precio final → Descuento %",
      },
    },
    errors: {
      originalPriceRequired: "El precio original debe ser mayor que cero.",
      salePriceExceedsOriginal: "El precio de venta no puede superar el precio original.",
    },
    faq: [
      {
        q: "¿Cómo se calcula un descuento porcentual?",
        a: "Precio con descuento = Precio original × (1 − Descuento% ÷ 100). Para un 30% de descuento en $80: $80 × 0,70 = $56. Ahorras $24.",
      },
      {
        q: "¿Cómo se calcula el porcentaje de descuento a partir de dos precios?",
        a: "Descuento% = (Precio original − Precio con descuento) ÷ Precio original × 100. Si $120 baja a $84: (120 − 84) ÷ 120 × 100 = 30%.",
      },
      {
        q: "¿El descuento se aplica antes o después del impuesto?",
        a: "Los descuentos siempre se aplican al precio sin impuesto. El IVA se calcula sobre el precio con descuento.",
      },
    ],
  },

  it: {
    title: "Calcolatore di Sconto",
    short: "Calcola il prezzo scontato, il risparmio e il prezzo finale dopo sconto e tasse.",
    description:
      "Calcolatore di sconto gratuito. Trova il prezzo scontato, il risparmio totale e il prezzo finale con IVA.",
    keywords: [
      "calcolatore sconto",
      "calcolo prezzo scontato",
      "risparmio calcolo",
      "percentuale sconto",
      "prezzo in offerta",
      "riduzione prezzo",
      "calcolatore saldi",
    ],
    inputs: {
      mode: {
        label: "Modalità di calcolo",
        help: "Sconto %: inserisci prezzo originale e percentuale di sconto. Prezzo finale: inserisci prezzo originale e prezzo scontato per ottenere la percentuale di sconto.",
      },
      originalPrice: {
        label: "Prezzo originale",
        help: "Il prezzo originale prima di qualsiasi sconto.",
      },
      discountPct: {
        label: "Sconto (%)",
        help: "La percentuale di sconto applicata al prezzo originale.",
      },
      salePrice: {
        label: "Prezzo scontato",
        help: "Il prezzo in offerta (usato in modalità prezzo finale per calcolare la percentuale di sconto).",
      },
      taxRate: {
        label: "IVA (%)",
        help: "Opzionale: aggiungi l'IVA al prezzo scontato per ottenere il prezzo finale.",
      },
    },
    outputs: {
      salePrice: {
        label: "Prezzo scontato",
        help: "Il prezzo dopo l'applicazione dello sconto.",
      },
      savings: {
        label: "Risparmio",
        help: "L'importo risparmiato rispetto al prezzo originale.",
      },
      discountPct: {
        label: "Sconto %",
        help: "La percentuale di sconto rispetto al prezzo originale.",
      },
      finalPriceWithTax: {
        label: "Prezzo finale (con IVA)",
        help: "Prezzo scontato più IVA — ciò che paghi alla cassa.",
      },
      savingsPct: {
        label: "% di risparmio",
        help: "Percentuale di risparmio rispetto al prezzo originale.",
      },
    },
    options: {
      mode: {
        discount_pct: "Sconto %",
        final_price: "Prezzo finale → Sconto %",
      },
    },
    errors: {
      originalPriceRequired: "Il prezzo originale deve essere maggiore di zero.",
      salePriceExceedsOriginal: "Il prezzo scontato non può superare il prezzo originale.",
    },
    faq: [
      {
        q: "Come si calcola uno sconto percentuale?",
        a: "Prezzo scontato = Prezzo originale × (1 − Sconto% ÷ 100). Con il 30% di sconto su 80 €: 80 × 0,70 = 56 €. Risparmio: 24 €.",
      },
      {
        q: "Come si trova la percentuale di sconto da due prezzi?",
        a: "Sconto% = (Prezzo originale − Prezzo scontato) ÷ Prezzo originale × 100. Se 120 € diventa 84 €: (120 − 84) ÷ 120 × 100 = 30%.",
      },
      {
        q: "Lo sconto viene applicato prima o dopo le tasse?",
        a: "Gli sconti vengono sempre applicati al prezzo al netto delle tasse. L'IVA viene poi calcolata sul prezzo scontato.",
      },
    ],
  },

  ar: {
    title: "حاسبة الخصم",
    short: "احسب سعر البيع والتوفير والسعر النهائي بعد الخصم والضريبة.",
    description:
      "حاسبة خصم مجانية. اعثر على السعر المخفَّض وإجمالي التوفير والسعر النهائي شاملًا ضريبة المبيعات.",
    keywords: [
      "حاسبة الخصم",
      "حساب سعر البيع",
      "حساب التوفير",
      "نسبة الخصم",
      "سعر العرض",
      "تخفيض الأسعار",
      "حاسبة التخفيضات",
    ],
    inputs: {
      mode: {
        label: "وضع الحساب",
        help: "الخصم %: أدخل السعر الأصلي ونسبة الخصم. السعر النهائي: أدخل السعر الأصلي وسعر البيع لحساب نسبة الخصم.",
      },
      originalPrice: {
        label: "السعر الأصلي",
        help: "السعر الأصلي أو المعتاد قبل أي خصم.",
      },
      discountPct: {
        label: "الخصم (%)",
        help: "نسبة الخصم المطبَّقة على السعر الأصلي.",
      },
      salePrice: {
        label: "سعر البيع",
        help: "السعر المخفَّض (يُستخدم في وضع السعر النهائي لحساب نسبة الخصم).",
      },
      taxRate: {
        label: "معدل ضريبة المبيعات (%)",
        help: "اختياري: أضف الضريبة إلى السعر المخفَّض للحصول على السعر النهائي.",
      },
    },
    outputs: {
      salePrice: {
        label: "سعر البيع",
        help: "السعر بعد تطبيق الخصم.",
      },
      savings: {
        label: "التوفير",
        help: "المبلغ الموفَّر مقارنةً بالسعر الأصلي.",
      },
      discountPct: {
        label: "الخصم %",
        help: "نسبة الخصم عن السعر الأصلي.",
      },
      finalPriceWithTax: {
        label: "السعر النهائي (شامل الضريبة)",
        help: "سعر البيع زائد ضريبة المبيعات — المبلغ الفعلي الذي ستدفعه.",
      },
      savingsPct: {
        label: "نسبة التوفير %",
        help: "نسبة التوفير مقارنةً بالسعر الأصلي.",
      },
    },
    options: {
      mode: {
        discount_pct: "الخصم %",
        final_price: "السعر النهائي ← الخصم %",
      },
    },
    errors: {
      originalPriceRequired: "يجب أن يكون السعر الأصلي أكبر من الصفر.",
      salePriceExceedsOriginal: "لا يمكن أن يتجاوز سعر البيع السعر الأصلي.",
    },
    faq: [
      {
        q: "كيف يُحسب الخصم بالنسبة المئوية؟",
        a: "سعر البيع = السعر الأصلي × (1 − الخصم% ÷ 100). لخصم 30% على 80 دولارًا: 80 × 0.70 = 56 دولارًا. التوفير: 24 دولارًا.",
      },
      {
        q: "كيف أجد نسبة الخصم من سعرين؟",
        a: "الخصم% = (السعر الأصلي − سعر البيع) ÷ السعر الأصلي × 100. إذا انخفض 120 دولارًا إلى 84 دولارًا: (120 − 84) ÷ 120 × 100 = 30%.",
      },
      {
        q: "هل يُطبَّق الخصم قبل الضريبة أم بعدها؟",
        a: "تُطبَّق الخصومات دائمًا على السعر قبل الضريبة، ثم تُحسَب الضريبة على السعر المخفَّض.",
      },
    ],
  },

  ru: {
    title: "Калькулятор скидки",
    short: "Рассчитайте цену со скидкой, экономию и итоговую цену с учётом скидки и налога.",
    description:
      "Бесплатный калькулятор скидки. Узнайте цену с учётом скидки, общую экономию и итоговую стоимость с НДС.",
    keywords: [
      "калькулятор скидки",
      "расчёт цены со скидкой",
      "расчёт экономии",
      "процент скидки",
      "акционная цена",
      "снижение цены",
      "расчёт распродажи",
    ],
    inputs: {
      mode: {
        label: "Режим расчёта",
        help: "Скидка %: введите исходную цену и процент скидки. Итоговая цена: введите исходную и продажную цены, чтобы вычислить процент скидки.",
      },
      originalPrice: {
        label: "Исходная цена",
        help: "Первоначальная или обычная цена до скидки.",
      },
      discountPct: {
        label: "Скидка (%)",
        help: "Процент скидки от исходной цены.",
      },
      salePrice: {
        label: "Цена со скидкой",
        help: "Продажная цена (используется в режиме итоговой цены для вычисления процента скидки).",
      },
      taxRate: {
        label: "Налог с продаж (%)",
        help: "Необязательно: добавьте налог к цене со скидкой, чтобы получить итоговую стоимость.",
      },
    },
    outputs: {
      salePrice: {
        label: "Цена со скидкой",
        help: "Цена после применения скидки.",
      },
      savings: {
        label: "Экономия",
        help: "Сумма сэкономленных денег по сравнению с исходной ценой.",
      },
      discountPct: {
        label: "Скидка %",
        help: "Процент снижения от исходной цены.",
      },
      finalPriceWithTax: {
        label: "Итоговая цена (с налогом)",
        help: "Цена со скидкой плюс налог — сумма, которую вы фактически платите.",
      },
      savingsPct: {
        label: "% экономии",
        help: "Процент экономии относительно исходной цены.",
      },
    },
    options: {
      mode: {
        discount_pct: "Скидка %",
        final_price: "Итоговая цена → Скидка %",
      },
    },
    errors: {
      originalPriceRequired: "Исходная цена должна быть больше нуля.",
      salePriceExceedsOriginal: "Цена со скидкой не может превышать исходную цену.",
    },
    faq: [
      {
        q: "Как рассчитать процентную скидку?",
        a: "Цена со скидкой = Исходная цена × (1 − Скидка% ÷ 100). При скидке 30% на 80 ₽: 80 × 0,70 = 56 ₽. Экономия: 24 ₽.",
      },
      {
        q: "Как найти процент скидки по двум ценам?",
        a: "Скидка% = (Исходная − Продажная) ÷ Исходная × 100. Если 120 ₽ → 84 ₽: (120 − 84) ÷ 120 × 100 = 30%.",
      },
      {
        q: "Скидка применяется до или после налога?",
        a: "Скидки всегда применяются к цене без налога. НДС рассчитывается на цену со скидкой.",
      },
    ],
  },

  zh: {
    title: "折扣计算器",
    short: "计算折扣后价格、节省金额以及含税最终价格。",
    description:
      "免费折扣计算器。找出折扣价、总节省金额和含税最终价格。也可从原价和售价计算折扣率。",
    keywords: [
      "折扣计算器",
      "折扣价计算",
      "节省计算",
      "折扣百分比",
      "促销价格",
      "降价计算",
      "打折计算器",
    ],
    inputs: {
      mode: {
        label: "计算模式",
        help: "折扣%：输入原价和折扣率计算售价。最终价格：输入原价和售价计算折扣率。",
      },
      originalPrice: {
        label: "原价",
        help: "折扣前的原始价格。",
      },
      discountPct: {
        label: "折扣（%）",
        help: "原价的折扣百分比。",
      },
      salePrice: {
        label: "售价",
        help: "折扣后的价格（在最终价格模式下用于计算折扣率）。",
      },
      taxRate: {
        label: "税率（%）",
        help: "可选：在折扣价上加税以获得最终价格。",
      },
    },
    outputs: {
      salePrice: {
        label: "折扣价",
        help: "应用折扣后的价格。",
      },
      savings: {
        label: "节省金额",
        help: "与原价相比节省的金额。",
      },
      discountPct: {
        label: "折扣率",
        help: "相对原价的折扣百分比。",
      },
      finalPriceWithTax: {
        label: "含税最终价格",
        help: "折扣价加税——实际结账金额。",
      },
      savingsPct: {
        label: "节省百分比",
        help: "相对原价的节省比例。",
      },
    },
    options: {
      mode: {
        discount_pct: "折扣%",
        final_price: "最终价格 → 折扣%",
      },
    },
    errors: {
      originalPriceRequired: "原价必须大于零。",
      salePriceExceedsOriginal: "售价不能超过原价。",
    },
    faq: [
      {
        q: "如何计算百分比折扣？",
        a: "折扣价 = 原价 × (1 − 折扣% ÷ 100)。$80打七折：$80 × 0.70 = $56。节省$24。",
      },
      {
        q: "如何从两个价格计算折扣率？",
        a: "折扣% = （原价 − 售价）÷ 原价 × 100。$120降至$84：(120 − 84) ÷ 120 × 100 = 30%。",
      },
      {
        q: "折扣是在税前还是税后应用？",
        a: "折扣始终在税前价格上应用，然后在折扣价上计算税款。",
      },
    ],
  },

  ja: {
    title: "割引計算機",
    short: "割引後の価格、節約額、税込み最終価格を計算します。",
    description:
      "無料の割引計算機。割引価格、節約額、消費税込みの最終価格を計算します。原価と販売価格から割引率も求められます。",
    keywords: [
      "割引計算機",
      "セール価格計算",
      "節約額計算",
      "割引率計算",
      "特売価格",
      "値引き計算",
      "割引計算ツール",
    ],
    inputs: {
      mode: {
        label: "計算モード",
        help: "割引%：元の価格と割引率から販売価格を計算。最終価格：元の価格と販売価格から割引率を計算。",
      },
      originalPrice: {
        label: "元の価格",
        help: "割引前の元の価格または定価。",
      },
      discountPct: {
        label: "割引率（%）",
        help: "元の価格に適用される割引率。",
      },
      salePrice: {
        label: "販売価格",
        help: "割引後の価格（最終価格モードで割引率を計算するために使用）。",
      },
      taxRate: {
        label: "消費税率（%）",
        help: "オプション：割引価格に消費税を加えて最終価格を求めます。",
      },
    },
    outputs: {
      salePrice: {
        label: "販売価格",
        help: "割引適用後の価格。",
      },
      savings: {
        label: "節約額",
        help: "元の価格と比べて節約できる金額。",
      },
      discountPct: {
        label: "割引率",
        help: "元の価格からの割引率（最終価格モードで表示）。",
      },
      finalPriceWithTax: {
        label: "税込み最終価格",
        help: "販売価格に消費税を加えた額 — 実際に支払う金額。",
      },
      savingsPct: {
        label: "節約率",
        help: "元の価格に対する節約の割合。",
      },
    },
    options: {
      mode: {
        discount_pct: "割引%",
        final_price: "最終価格 → 割引%",
      },
    },
    errors: {
      originalPriceRequired: "元の価格はゼロより大きくなければなりません。",
      salePriceExceedsOriginal: "販売価格は元の価格を超えることができません。",
    },
    faq: [
      {
        q: "パーセント割引を計算するには？",
        a: "販売価格 = 元の価格 × (1 − 割引% ÷ 100)。80円の30%割引：80 × 0.70 = 56円。節約額：24円。",
      },
      {
        q: "2つの価格から割引率を求めるには？",
        a: "割引% = (元の価格 − 販売価格) ÷ 元の価格 × 100。120円が84円になった場合：(120 − 84) ÷ 120 × 100 = 30%。",
      },
      {
        q: "割引は税前と税後のどちらに適用されますか？",
        a: "割引は常に税抜き価格に適用され、その後に割引後の価格に消費税が計算されます。",
      },
    ],
  },

  ko: {
    title: "할인 계산기",
    short: "할인 후 가격, 절약 금액, 세금 포함 최종 가격을 계산하세요.",
    description:
      "무료 할인 계산기. 할인된 가격, 총 절약 금액, 세금 포함 최종 가격을 계산하세요. 원가와 판매가로 할인율도 구할 수 있습니다.",
    keywords: [
      "할인 계산기",
      "세일 가격 계산",
      "절약 계산기",
      "할인율 계산",
      "세일 가격",
      "가격 인하 계산",
      "할인 계산 도구",
    ],
    inputs: {
      mode: {
        label: "계산 모드",
        help: "할인%: 원가와 할인율로 판매가 계산. 최종 가격: 원가와 판매가로 할인율 계산.",
      },
      originalPrice: {
        label: "원래 가격",
        help: "할인 전의 원래 또는 정가.",
      },
      discountPct: {
        label: "할인율 (%)",
        help: "원래 가격에 적용되는 할인 비율.",
      },
      salePrice: {
        label: "판매 가격",
        help: "할인된 가격(최종 가격 모드에서 할인율을 계산하는 데 사용).",
      },
      taxRate: {
        label: "세율 (%)",
        help: "선택 사항: 최종 결제 가격을 얻으려면 할인가에 세금을 추가하세요.",
      },
    },
    outputs: {
      salePrice: {
        label: "할인 가격",
        help: "할인 적용 후의 가격.",
      },
      savings: {
        label: "절약 금액",
        help: "원래 가격 대비 절약한 금액.",
      },
      discountPct: {
        label: "할인율 %",
        help: "원래 가격 대비 할인 비율.",
      },
      finalPriceWithTax: {
        label: "최종 가격(세금 포함)",
        help: "할인가에 세금을 더한 금액 — 실제 결제 금액.",
      },
      savingsPct: {
        label: "절약 비율 %",
        help: "원래 가격 대비 절약 비율.",
      },
    },
    options: {
      mode: {
        discount_pct: "할인%",
        final_price: "최종 가격 → 할인%",
      },
    },
    errors: {
      originalPriceRequired: "원래 가격은 0보다 커야 합니다.",
      salePriceExceedsOriginal: "판매 가격은 원래 가격을 초과할 수 없습니다.",
    },
    faq: [
      {
        q: "할인율은 어떻게 계산하나요?",
        a: "할인 가격 = 원래 가격 × (1 − 할인% ÷ 100). $80에 30% 할인: $80 × 0.70 = $56. 절약 금액: $24.",
      },
      {
        q: "두 가격으로 할인율을 구하는 방법은?",
        a: "할인% = (원래 가격 − 판매 가격) ÷ 원래 가격 × 100. $120이 $84가 되면: (120 − 84) ÷ 120 × 100 = 30%.",
      },
      {
        q: "할인은 세금 전후 중 언제 적용되나요?",
        a: "할인은 항상 세전 가격에 적용되며, 그 후 할인가에 세금이 계산됩니다.",
      },
    ],
  },

  hi: {
    title: "छूट कैलकुलेटर",
    short: "छूट के बाद की कीमत, बचत और कर सहित अंतिम मूल्य की गणना करें।",
    description:
      "निःशुल्क छूट कैलकुलेटर। छूट वाली कीमत, कुल बचत और बिक्री कर के साथ अंतिम मूल्य जानें।",
    keywords: [
      "छूट कैलकुलेटर",
      "बिक्री मूल्य कैलकुलेटर",
      "बचत कैलकुलेटर",
      "प्रतिशत छूट",
      "सेल कीमत",
      "मूल्य कमी",
      "ऑफर कैलकुलेटर",
    ],
    inputs: {
      mode: {
        label: "गणना मोड",
        help: "छूट %: मूल कीमत और छूट प्रतिशत से बिक्री मूल्य निकालें। अंतिम मूल्य: मूल और बिक्री मूल्य से छूट प्रतिशत निकालें।",
      },
      originalPrice: {
        label: "मूल कीमत",
        help: "किसी भी छूट से पहले की मूल या नियमित कीमत।",
      },
      discountPct: {
        label: "छूट (%)",
        help: "मूल कीमत पर लागू छूट का प्रतिशत।",
      },
      salePrice: {
        label: "बिक्री मूल्य",
        help: "छूट के बाद की कीमत (अंतिम मूल्य मोड में छूट प्रतिशत निकालने के लिए उपयोग)।",
      },
      taxRate: {
        label: "बिक्री कर दर (%)",
        help: "वैकल्पिक: अंतिम भुगतान मूल्य के लिए छूट वाली कीमत पर कर जोड़ें।",
      },
    },
    outputs: {
      salePrice: {
        label: "बिक्री मूल्य",
        help: "छूट लागू करने के बाद की कीमत।",
      },
      savings: {
        label: "बचत",
        help: "मूल कीमत की तुलना में बचाई गई राशि।",
      },
      discountPct: {
        label: "छूट %",
        help: "मूल कीमत से छूट का प्रतिशत।",
      },
      finalPriceWithTax: {
        label: "कर सहित अंतिम मूल्य",
        help: "बिक्री मूल्य और कर का योग — वास्तविक भुगतान राशि।",
      },
      savingsPct: {
        label: "बचत %",
        help: "मूल कीमत के सापेक्ष बचत का प्रतिशत।",
      },
    },
    options: {
      mode: {
        discount_pct: "छूट %",
        final_price: "अंतिम मूल्य → छूट %",
      },
    },
    errors: {
      originalPriceRequired: "मूल कीमत शून्य से अधिक होनी चाहिए।",
      salePriceExceedsOriginal: "बिक्री मूल्य मूल कीमत से अधिक नहीं हो सकता।",
    },
    faq: [
      {
        q: "प्रतिशत छूट की गणना कैसे करें?",
        a: "बिक्री मूल्य = मूल कीमत × (1 − छूट% ÷ 100)। ₹80 पर 30% छूट: 80 × 0.70 = ₹56। बचत: ₹24।",
      },
      {
        q: "दो कीमतों से छूट प्रतिशत कैसे निकालें?",
        a: "छूट% = (मूल − बिक्री) ÷ मूल × 100। ₹120 से ₹84 हो जाए: (120 − 84) ÷ 120 × 100 = 30%।",
      },
      {
        q: "क्या छूट कर से पहले या बाद में लागू होती है?",
        a: "छूट हमेशा कर-पूर्व मूल्य पर लागू होती है। फिर छूट वाली कीमत पर बिक्री कर की गणना होती है।",
      },
    ],
  },
};

export default i18n;
