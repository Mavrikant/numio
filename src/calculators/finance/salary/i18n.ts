import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "Salary & Take-Home Pay Calculator",
    description:
      "Estimate your US take-home pay after federal income tax, Social Security, Medicare, and state income tax.",
    inputs: {
      annualSalary: { label: "Annual Salary", help: "Your gross annual salary before any taxes or deductions." },
      filingStatus: {
        label: "Filing Status",
        help: "Your federal tax filing status. 'Head of Household' applies if you are unmarried and pay more than half the cost of supporting a qualifying person.",
      },
      stateIncomeTaxRate: {
        label: "State Income Tax Rate",
        help: "Your state's flat income tax rate as a percentage. Use 0 if you live in a state with no income tax.",
      },
      preTaxDeductions: {
        label: "Pre-Tax Deductions",
        help: "Annual contributions to tax-advantaged accounts such as 401(k), health insurance premiums, or HSA that reduce your taxable income.",
      },
    },
    outputs: {
      netAnnual: { label: "Annual Take-Home Pay", help: "Your salary after all taxes and deductions." },
      netMonthly: { label: "Monthly Take-Home Pay", help: "Your annual net pay divided by 12." },
      federalIncomeTax: { label: "Federal Income Tax", help: "Tax based on 2024 US federal progressive brackets." },
      socialSecurityTax: { label: "Social Security Tax", help: "6.2% on wages up to $168,600 (2024 wage base)." },
      medicareTax: { label: "Medicare Tax", help: "1.45% on all wages, plus 0.9% on wages above $200,000." },
      stateIncomeTax: { label: "State Income Tax", help: "Calculated at the flat rate you provided." },
      totalTax: { label: "Total Tax", help: "Sum of all taxes withheld." },
      effectiveTaxRate: { label: "Effective Tax Rate", help: "Total tax as a percentage of gross salary." },
    },
    options: {
      filingStatus: {
        single: "Single",
        married: "Married Filing Jointly",
        head: "Head of Household",
      },
    },
  },
  tr: {
    title: "Maaş ve Elde Kalacak Gelir Hesaplayıcısı",
    description:
      "Federal gelir vergisi, Sosyal Güvenlik, Medicare ve eyalet gelir vergisi düşüldükten sonra ABD'de elde kalacak gelirinizi tahmin edin.",
    inputs: {
      annualSalary: { label: "Yıllık Maaş", help: "Vergi ve kesintiler öncesi brüt yıllık maaşınız." },
      filingStatus: {
        label: "Vergi Beyanname Durumu",
        help: "Federal vergi beyanname durumunuz. 'Hane Reisi' durumu, bekar olup bir bakmakla yükümlü olduğunuz kişinin giderlerinin yarısından fazlasını karşılıyorsanız geçerlidir.",
      },
      stateIncomeTaxRate: {
        label: "Eyalet Gelir Vergisi Oranı",
        help: "Eyaletinizin düz oranlı gelir vergisi yüzdesi. Gelir vergisi olmayan bir eyalette yaşıyorsanız 0 girin.",
      },
      preTaxDeductions: {
        label: "Vergi Öncesi Kesintiler",
        help: "401(k), sağlık sigortası primleri veya HSA gibi vergi avantajlı hesaplara yıllık katkılar; vergilendirilebilir gelirinizi azaltır.",
      },
    },
    outputs: {
      netAnnual: { label: "Yıllık Net Gelir", help: "Tüm vergi ve kesintilerden sonraki maaşınız." },
      netMonthly: { label: "Aylık Net Gelir", help: "Yıllık net gelirinizin 12'ye bölümü." },
      federalIncomeTax: { label: "Federal Gelir Vergisi", help: "2024 ABD federal kademeli vergi dilimleri." },
      socialSecurityTax: { label: "Sosyal Güvenlik Vergisi", help: "168.600 dolara kadar %6,2." },
      medicareTax: { label: "Medicare Vergisi", help: "Tüm ücretlerde %1,45; 200.000 doların üzerinde ek %0,9." },
      stateIncomeTax: { label: "Eyalet Gelir Vergisi", help: "Girdiğiniz düz oran üzerinden hesaplanır." },
      totalTax: { label: "Toplam Vergi", help: "Kesilen tüm vergilerin toplamı." },
      effectiveTaxRate: { label: "Efektif Vergi Oranı", help: "Brüt maaşın yüzdesi olarak toplam vergi." },
    },
    options: {
      filingStatus: {
        single: "Bekar",
        married: "Evli (Birlikte Beyanname)",
        head: "Hane Reisi",
      },
    },
  },
  de: {
    title: "Gehaltsrechner und Nettolohn-Rechner",
    description:
      "Schätzen Sie Ihren US-amerikanischen Nettolohn nach Bundeseinkommensteuer, Sozialversicherung, Medicare und Staatseinkommensteuer.",
    inputs: {
      annualSalary: { label: "Jahresgehalt", help: "Ihr Brutto-Jahresgehalt vor Steuern und Abzügen." },
      filingStatus: {
        label: "Steuerstatus",
        help: "Ihr Bundessteuerstatus. 'Haushaltsvorstand' gilt, wenn Sie ledig sind und mehr als die Hälfte der Kosten für eine anspruchsberechtigte Person tragen.",
      },
      stateIncomeTaxRate: {
        label: "Staatlicher Einkommensteuersatz",
        help: "Der Pauschalsteuersatz Ihres Bundesstaates in Prozent. Geben Sie 0 ein, wenn Ihr Bundesstaat keine Einkommensteuer erhebt.",
      },
      preTaxDeductions: {
        label: "Vorsteuerbeiträge",
        help: "Jährliche Beiträge zu steuerlich begünstigten Konten wie 401(k), Krankenversicherungsprämien oder HSA, die Ihr zu versteuerndes Einkommen mindern.",
      },
    },
    outputs: {
      netAnnual: { label: "Jährlicher Nettolohn", help: "Ihr Gehalt nach allen Steuern und Abzügen." },
      netMonthly: { label: "Monatlicher Nettolohn", help: "Ihr jährlicher Nettolohn geteilt durch 12." },
      federalIncomeTax: { label: "Bundeseinkommensteuer", help: "Steuer basierend auf den US-Bundessteuerstufen 2024." },
      socialSecurityTax: { label: "Sozialversicherungssteuer", help: "6,2 % bis 168.600 $ Lohnbemessungsgrundlage 2024." },
      medicareTax: { label: "Medicare-Steuer", help: "1,45 % auf alle Löhne; zusätzliche 0,9 % über 200.000 $." },
      stateIncomeTax: { label: "Staatseinkommensteuer", help: "Berechnet zum von Ihnen eingegebenen Pauschalsteuersatz." },
      totalTax: { label: "Gesamtsteuer", help: "Summe aller einbehaltenen Steuern." },
      effectiveTaxRate: { label: "Effektiver Steuersatz", help: "Gesamtsteuer als Prozentsatz des Bruttogehalts." },
    },
    options: {
      filingStatus: {
        single: "Ledig",
        married: "Verheiratet (gemeinsame Veranlagung)",
        head: "Haushaltsvorstand",
      },
    },
  },
  fr: {
    title: "Calculateur de Salaire Net",
    description:
      "Estimez votre salaire net américain après l'impôt fédéral sur le revenu, la Sécurité sociale, Medicare et l'impôt sur le revenu de l'État.",
    inputs: {
      annualSalary: { label: "Salaire annuel brut", help: "Votre salaire annuel brut avant impôts et déductions." },
      filingStatus: {
        label: "Statut fiscal",
        help: "Votre statut de déclaration fiscale fédérale. Le statut « Chef de foyer » s'applique si vous êtes célibataire et payez plus de la moitié du coût d'entretien d'une personne à charge.",
      },
      stateIncomeTaxRate: {
        label: "Taux d'imposition de l'État",
        help: "Le taux d'imposition forfaitaire de votre État en pourcentage. Utilisez 0 si votre État n'a pas d'impôt sur le revenu.",
      },
      preTaxDeductions: {
        label: "Déductions avant impôt",
        help: "Cotisations annuelles à des comptes à avantages fiscaux comme le 401(k), les primes d'assurance maladie ou le HSA, qui réduisent votre revenu imposable.",
      },
    },
    outputs: {
      netAnnual: { label: "Salaire net annuel", help: "Votre salaire après toutes les taxes et déductions." },
      netMonthly: { label: "Salaire net mensuel", help: "Votre salaire net annuel divisé par 12." },
      federalIncomeTax: { label: "Impôt fédéral sur le revenu", help: "Impôt basé sur les tranches fédérales américaines 2024." },
      socialSecurityTax: { label: "Cotisation Sécurité sociale", help: "6,2 % sur les salaires jusqu'à 168 600 $ (base 2024)." },
      medicareTax: { label: "Taxe Medicare", help: "1,45 % sur tous les salaires ; 0,9 % supplémentaire au-delà de 200 000 $." },
      stateIncomeTax: { label: "Impôt de l'État", help: "Calculé au taux forfaitaire que vous avez saisi." },
      totalTax: { label: "Total des impôts", help: "Somme de toutes les retenues fiscales." },
      effectiveTaxRate: { label: "Taux d'imposition effectif", help: "Total des impôts en pourcentage du salaire brut." },
    },
    options: {
      filingStatus: {
        single: "Célibataire",
        married: "Marié(e) déclarant conjointement",
        head: "Chef de foyer",
      },
    },
  },
  es: {
    title: "Calculadora de Salario Neto",
    description:
      "Estime su salario neto en EE. UU. después del impuesto federal sobre la renta, el Seguro Social, Medicare y el impuesto estatal sobre la renta.",
    inputs: {
      annualSalary: { label: "Salario anual bruto", help: "Su salario anual bruto antes de impuestos y deducciones." },
      filingStatus: {
        label: "Estado civil fiscal",
        help: "Su estado de declaración de impuestos federales. El estado 'Cabeza de familia' aplica si es soltero/a y paga más de la mitad de los gastos de manutención de una persona dependiente.",
      },
      stateIncomeTaxRate: {
        label: "Tasa de impuesto estatal",
        help: "La tasa de impuesto fija de su estado en porcentaje. Use 0 si vive en un estado sin impuesto sobre la renta.",
      },
      preTaxDeductions: {
        label: "Deducciones antes de impuestos",
        help: "Contribuciones anuales a cuentas con ventajas fiscales como 401(k), primas de seguro médico o HSA, que reducen su renta imponible.",
      },
    },
    outputs: {
      netAnnual: { label: "Salario neto anual", help: "Su salario después de todos los impuestos y deducciones." },
      netMonthly: { label: "Salario neto mensual", help: "Su salario neto anual dividido entre 12." },
      federalIncomeTax: { label: "Impuesto federal sobre la renta", help: "Impuesto basado en los tramos federales de EE. UU. 2024." },
      socialSecurityTax: { label: "Seguro Social", help: "6,2 % sobre salarios hasta $168.600 (base salarial 2024)." },
      medicareTax: { label: "Medicare", help: "1,45 % sobre todos los salarios; 0,9 % adicional sobre $200.000." },
      stateIncomeTax: { label: "Impuesto estatal", help: "Calculado a la tasa fija que ingresó." },
      totalTax: { label: "Total de impuestos", help: "Suma de todas las retenciones fiscales." },
      effectiveTaxRate: { label: "Tasa impositiva efectiva", help: "Total de impuestos como porcentaje del salario bruto." },
    },
    options: {
      filingStatus: {
        single: "Soltero/a",
        married: "Casado/a declarando conjuntamente",
        head: "Cabeza de familia",
      },
    },
  },
  it: {
    title: "Calcolatore dello Stipendio Netto",
    description:
      "Stima il tuo stipendio netto negli USA dopo l'imposta federale sul reddito, la Previdenza sociale, Medicare e l'imposta statale sul reddito.",
    inputs: {
      annualSalary: { label: "Stipendio annuo lordo", help: "Il vostro stipendio annuo lordo prima di tasse e detrazioni." },
      filingStatus: {
        label: "Stato civile fiscale",
        help: "Il vostro stato di dichiarazione fiscale federale. 'Capo famiglia' si applica se siete celibi/nubili e pagate più della metà dei costi di mantenimento di un familiare a carico.",
      },
      stateIncomeTaxRate: {
        label: "Aliquota fiscale statale",
        help: "L'aliquota forfettaria dell'imposta sul reddito del vostro stato in percentuale. Inserite 0 se vivete in uno stato senza imposta sul reddito.",
      },
      preTaxDeductions: {
        label: "Detrazioni al lordo delle imposte",
        help: "Contributi annuali a conti con agevolazioni fiscali come 401(k), premi assicurativi sanitari o HSA, che riducono il reddito imponibile.",
      },
    },
    outputs: {
      netAnnual: { label: "Stipendio netto annuo", help: "Il vostro stipendio dopo tutte le imposte e detrazioni." },
      netMonthly: { label: "Stipendio netto mensile", help: "Il vostro stipendio netto annuo diviso per 12." },
      federalIncomeTax: { label: "Imposta federale sul reddito", help: "Imposta basata sulle aliquote federali USA 2024." },
      socialSecurityTax: { label: "Previdenza sociale", help: "6,2% sui salari fino a $168.600 (base imponibile 2024)." },
      medicareTax: { label: "Medicare", help: "1,45% su tutti i salari; 0,9% aggiuntivo oltre $200.000." },
      stateIncomeTax: { label: "Imposta statale", help: "Calcolata all'aliquota forfettaria inserita." },
      totalTax: { label: "Totale imposte", help: "Somma di tutte le ritenute fiscali." },
      effectiveTaxRate: { label: "Aliquota fiscale effettiva", help: "Totale imposte come percentuale dello stipendio lordo." },
    },
    options: {
      filingStatus: {
        single: "Celibe/Nubile",
        married: "Coniugati (dichiarazione congiunta)",
        head: "Capo famiglia",
      },
    },
  },
  ar: {
    title: "حاسبة الراتب الصافي",
    description:
      "احسب راتبك الصافي في الولايات المتحدة بعد ضريبة الدخل الفيدرالية والضمان الاجتماعي وميديكير وضريبة دخل الولاية.",
    inputs: {
      annualSalary: { label: "الراتب السنوي الإجمالي", help: "راتبك السنوي الإجمالي قبل الضرائب والخصومات." },
      filingStatus: {
        label: "حالة تقديم الإقرار الضريبي",
        help: "حالتك الضريبية الفيدرالية. تنطبق حالة 'رب الأسرة' إذا كنت أعزباً وتدفع أكثر من نصف تكاليف إعالة شخص مؤهل.",
      },
      stateIncomeTaxRate: {
        label: "معدل ضريبة دخل الولاية",
        help: "معدل ضريبة الدخل الثابت لولايتك بالنسبة المئوية. استخدم 0 إذا كنت تعيش في ولاية بدون ضريبة دخل.",
      },
      preTaxDeductions: {
        label: "الخصومات قبل الضريبة",
        help: "المساهمات السنوية في الحسابات ذات المزايا الضريبية مثل 401(k) وأقساط التأمين الصحي وHSA التي تقلل دخلك الخاضع للضريبة.",
      },
    },
    outputs: {
      netAnnual: { label: "الراتب الصافي السنوي", help: "راتبك بعد جميع الضرائب والخصومات." },
      netMonthly: { label: "الراتب الصافي الشهري", help: "راتبك الصافي السنوي مقسوماً على 12." },
      federalIncomeTax: { label: "ضريبة الدخل الفيدرالية", help: "ضريبة بناءً على الشرائح الفيدرالية الأمريكية لعام 2024." },
      socialSecurityTax: { label: "ضريبة الضمان الاجتماعي", help: "6.2% على الرواتب حتى 168,600$ (قاعدة الأجور 2024)." },
      medicareTax: { label: "ضريبة ميديكير", help: "1.45% على جميع الرواتب؛ 0.9% إضافية فوق 200,000$." },
      stateIncomeTax: { label: "ضريبة دخل الولاية", help: "محسوبة بالمعدل الثابت الذي أدخلته." },
      totalTax: { label: "إجمالي الضرائب", help: "مجموع جميع الضرائب المحتجزة." },
      effectiveTaxRate: { label: "معدل الضريبة الفعلي", help: "إجمالي الضرائب كنسبة مئوية من الراتب الإجمالي." },
    },
    options: {
      filingStatus: {
        single: "أعزب / عزباء",
        married: "متزوج (إقرار مشترك)",
        head: "رب الأسرة",
      },
    },
  },
  ru: {
    title: "Калькулятор заработной платы",
    description:
      "Рассчитайте свою чистую зарплату в США после федерального налога на доходы, взносов в Социальное обеспечение, Medicare и налога штата.",
    inputs: {
      annualSalary: { label: "Годовая зарплата (брутто)", help: "Ваша годовая зарплата до налогов и удержаний." },
      filingStatus: {
        label: "Налоговый статус",
        help: "Ваш статус подачи федеральной налоговой декларации. «Глава домохозяйства» применяется, если вы не состоите в браке и оплачиваете более половины расходов на содержание соответствующего лица.",
      },
      stateIncomeTaxRate: {
        label: "Ставка налога штата",
        help: "Фиксированная ставка подоходного налога вашего штата в процентах. Введите 0, если ваш штат не взимает подоходный налог.",
      },
      preTaxDeductions: {
        label: "Вычеты до налогов",
        help: "Годовые взносы на счета с налоговыми льготами, такими как 401(k), страховые взносы на здоровье или HSA, уменьшающие налогооблагаемый доход.",
      },
    },
    outputs: {
      netAnnual: { label: "Чистая годовая зарплата", help: "Ваша зарплата после всех налогов и удержаний." },
      netMonthly: { label: "Чистая ежемесячная зарплата", help: "Годовая чистая зарплата, делённая на 12." },
      federalIncomeTax: { label: "Федеральный подоходный налог", help: "Налог по прогрессивным ставкам США 2024 года." },
      socialSecurityTax: { label: "Взносы в Социальное обеспечение", help: "6,2% с зарплаты до $168 600 (база 2024 года)." },
      medicareTax: { label: "Налог Medicare", help: "1,45% со всей зарплаты; дополнительно 0,9% свыше $200 000." },
      stateIncomeTax: { label: "Налог штата", help: "Рассчитан по введённой вами ставке." },
      totalTax: { label: "Итого налогов", help: "Сумма всех удержанных налогов." },
      effectiveTaxRate: { label: "Эффективная налоговая ставка", help: "Общий налог как процент от брутто-зарплаты." },
    },
    options: {
      filingStatus: {
        single: "Холостой/Незамужняя",
        married: "Женат/Замужем (совместная декларация)",
        head: "Глава домохозяйства",
      },
    },
  },
  zh: {
    title: "薪资税后收入计算器",
    description:
      "估算扣除美国联邦所得税、社会保障税、医疗保险税和州所得税后的税后收入。",
    inputs: {
      annualSalary: { label: "年薪（税前）", help: "扣税及其他扣款前的年薪总额。" },
      filingStatus: {
        label: "报税身份",
        help: '您的联邦税务申报身份。如果您未婚且支付了供养合格人员超过一半的费用，则适用"户主"身份。',
      },
      stateIncomeTaxRate: {
        label: "州所得税率",
        help: "您所在州的单一税率（百分比）。如您所在州无州所得税，请填写0。",
      },
      preTaxDeductions: {
        label: "税前扣除额",
        help: "每年向401(k)、健康保险费或HSA等税收优惠账户缴纳的金额，可减少应税收入。",
      },
    },
    outputs: {
      netAnnual: { label: "年税后收入", help: "扣除所有税款和扣款后的年薪。" },
      netMonthly: { label: "月税后收入", help: "年税后收入除以12。" },
      federalIncomeTax: { label: "联邦所得税", help: "依据2024年美国联邦累进税率计算。" },
      socialSecurityTax: { label: "社会保障税", help: "对$168,600以下工资征收6.2%（2024年工资基数）。" },
      medicareTax: { label: "医疗保险税", help: "全部工资征收1.45%；超过$200,000部分额外征收0.9%。" },
      stateIncomeTax: { label: "州所得税", help: "按您输入的固定税率计算。" },
      totalTax: { label: "税款合计", help: "所有代扣税款之和。" },
      effectiveTaxRate: { label: "实际税率", help: "税款总额占税前薪资的百分比。" },
    },
    options: {
      filingStatus: {
        single: "单身",
        married: "已婚联合申报",
        head: "户主",
      },
    },
  },
  ja: {
    title: "給与・手取り計算ツール",
    description:
      "米国の連邦所得税、社会保障税、メディケア税、州所得税を差し引いた手取り額を試算します。",
    inputs: {
      annualSalary: { label: "年収（税引き前）", help: "税金や控除前の年収総額。" },
      filingStatus: {
        label: "申告区分",
        help: "連邦税の申告区分。「世帯主」は、未婚で扶養家族の生活費の半分以上を負担している場合に適用されます。",
      },
      stateIncomeTaxRate: {
        label: "州所得税率",
        help: "お住まいの州の一律税率（パーセント）。州所得税のない州にお住まいの場合は0を入力してください。",
      },
      preTaxDeductions: {
        label: "税引き前控除額",
        help: "401(k)、健康保険料、HSAなどの税制優遇口座への年間拠出額。課税所得を減らします。",
      },
    },
    outputs: {
      netAnnual: { label: "年間手取り額", help: "すべての税金・控除後の年収。" },
      netMonthly: { label: "月間手取り額", help: "年間手取り額を12で割った額。" },
      federalIncomeTax: { label: "連邦所得税", help: "2024年の米国連邦累進税率に基づく税額。" },
      socialSecurityTax: { label: "社会保障税", help: "168,600ドルまでの賃金に6.2%（2024年の課税賃金上限）。" },
      medicareTax: { label: "メディケア税", help: "全賃金に1.45%；200,000ドル超の部分に追加0.9%。" },
      stateIncomeTax: { label: "州所得税", help: "入力した一律税率で計算。" },
      totalTax: { label: "税額合計", help: "差し引かれるすべての税金の合計。" },
      effectiveTaxRate: { label: "実効税率", help: "総税額の税引き前年収に対する割合。" },
    },
    options: {
      filingStatus: {
        single: "独身",
        married: "既婚（共同申告）",
        head: "世帯主",
      },
    },
  },
  ko: {
    title: "급여 및 실수령액 계산기",
    description:
      "미국 연방 소득세, 사회보장세, 메디케어세, 주 소득세를 공제한 후의 실수령액을 추정합니다.",
    inputs: {
      annualSalary: { label: "연봉 (세전)", help: "세금 및 공제 전 총 연봉." },
      filingStatus: {
        label: "세금 신고 상태",
        help: "연방세 신고 상태. '세대주'는 미혼으로 부양가족 생활비의 절반 이상을 부담하는 경우에 해당합니다.",
      },
      stateIncomeTaxRate: {
        label: "주 소득세율",
        help: "거주하는 주의 단일 소득세율(퍼센트). 주 소득세가 없는 주에 거주하면 0을 입력하세요.",
      },
      preTaxDeductions: {
        label: "세전 공제액",
        help: "401(k), 건강보험료, HSA 등 세금 혜택 계좌에 대한 연간 기여금으로, 과세 소득을 줄입니다.",
      },
    },
    outputs: {
      netAnnual: { label: "연간 실수령액", help: "모든 세금 및 공제 후 연봉." },
      netMonthly: { label: "월 실수령액", help: "연간 실수령액을 12로 나눈 금액." },
      federalIncomeTax: { label: "연방 소득세", help: "2024년 미국 연방 누진 세율 기준 세액." },
      socialSecurityTax: { label: "사회보장세", help: "$168,600까지의 급여에 6.2% (2024년 과세 임금 기준)." },
      medicareTax: { label: "메디케어세", help: "모든 급여에 1.45%; $200,000 초과분에 추가 0.9%." },
      stateIncomeTax: { label: "주 소득세", help: "입력한 고정 세율로 계산." },
      totalTax: { label: "총 세금", help: "공제되는 모든 세금의 합계." },
      effectiveTaxRate: { label: "실효 세율", help: "총 세금의 세전 연봉 대비 비율." },
    },
    options: {
      filingStatus: {
        single: "미혼",
        married: "기혼 (공동 신고)",
        head: "세대주",
      },
    },
  },
  hi: {
    title: "वेतन और हाथ में आने वाला वेतन कैलकुलेटर",
    description:
      "संघीय आयकर, सामाजिक सुरक्षा, Medicare और राज्य आयकर के बाद अमेरिका में हाथ में आने वाले वेतन का अनुमान लगाएं।",
    inputs: {
      annualSalary: { label: "वार्षिक वेतन (सकल)", help: "करों और कटौतियों से पहले आपका सकल वार्षिक वेतन।" },
      filingStatus: {
        label: "कर दाखिल करने की स्थिति",
        help: "आपकी संघीय कर दाखिल करने की स्थिति। 'घर का मुखिया' तब लागू होता है जब आप अविवाहित हों और किसी योग्य व्यक्ति के भरण-पोषण की आधे से अधिक लागत वहन करते हों।",
      },
      stateIncomeTaxRate: {
        label: "राज्य आयकर दर",
        help: "आपके राज्य की समान आयकर दर प्रतिशत में। यदि आप बिना आयकर वाले राज्य में रहते हैं तो 0 दर्ज करें।",
      },
      preTaxDeductions: {
        label: "कर-पूर्व कटौतियां",
        help: "401(k), स्वास्थ्य बीमा प्रीमियम, या HSA जैसे कर-सुविधा युक्त खातों में वार्षिक योगदान, जो आपकी कर योग्य आय को कम करते हैं।",
      },
    },
    outputs: {
      netAnnual: { label: "वार्षिक शुद्ध वेतन", help: "सभी करों और कटौतियों के बाद आपका वेतन।" },
      netMonthly: { label: "मासिक शुद्ध वेतन", help: "वार्षिक शुद्ध वेतन को 12 से विभाजित किया गया।" },
      federalIncomeTax: { label: "संघीय आयकर", help: "2024 अमेरिकी संघीय प्रगतिशील कर दरों के आधार पर।" },
      socialSecurityTax: { label: "सामाजिक सुरक्षा कर", help: "$168,600 तक के वेतन पर 6.2% (2024 वेतन आधार)।" },
      medicareTax: { label: "Medicare कर", help: "सभी वेतन पर 1.45%; $200,000 से अधिक पर अतिरिक्त 0.9%।" },
      stateIncomeTax: { label: "राज्य आयकर", help: "आपके द्वारा दर्ज की गई समान दर पर गणना।" },
      totalTax: { label: "कुल कर", help: "सभी रोके गए करों का योग।" },
      effectiveTaxRate: { label: "प्रभावी कर दर", help: "सकल वेतन के प्रतिशत के रूप में कुल कर।" },
    },
    options: {
      filingStatus: {
        single: "अविवाहित",
        married: "विवाहित (संयुक्त दाखिला)",
        head: "घर का मुखिया",
      },
    },
  },
};

export default i18n;
