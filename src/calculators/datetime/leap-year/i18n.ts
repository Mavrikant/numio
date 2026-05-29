import type { CalculatorI18n } from "@/types/i18n";

const io = (y: string, diy: string, dif: string, nl: string, pl: string) => ({
  inputs: { year: { label: y } },
  outputs: { daysInYear: { label: diy }, daysInFebruary: { label: dif }, nextLeapYear: { label: nl }, previousLeapYear: { label: pl } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Leap Year Calculator", short: "Check whether a year is a leap year and find the nearest leap years.",
    description: "Free leap year calculator. Enter a year to see whether it's a leap year (366 days, February has 29), plus the next and previous leap years. Uses the Gregorian rule: divisible by 4, except centuries unless divisible by 400.",
    keywords: ["leap year", "is it a leap year", "leap year checker", "days in february", "leap year list"],
    ...io("Year", "Days in year", "Days in February", "Next leap year", "Previous leap year"),
    faq: [
      { q: "How do I know if a year is a leap year?", a: "A year is a leap year if it is divisible by 4 — except for century years (like 1900), which must also be divisible by 400. So 2000 and 2024 are leap years, but 1900 and 2100 are not." },
      { q: "Why do leap years exist?", a: "Earth takes about 365.2422 days to orbit the Sun. Adding a leap day (29 February) every four years keeps the calendar aligned with the seasons; the 100/400 rule fine-tunes the small remaining drift." },
    ],
  },
  pt: {
    title: "Leap Year Calculator", short: "Check whether a year is a leap year and find the nearest leap years.",
    description: "Free leap year calculator. Enter a year to see whether it's a leap year (366 days, February has 29), plus the next and previous leap years. Uses the Gregorian rule: divisible by 4, except centuries unless divisible by 400.",
    keywords: ["leap year", "is it a leap year", "leap year checker", "days in february", "leap year list"],
    ...io("Year", "Days in year", "Days in February", "Next leap year", "Previous leap year"),
    faq: [
      { q: "How do I know if a year is a leap year?", a: "A year is a leap year if it is divisible by 4 — except for century years (like 1900), which must also be divisible by 400. So 2000 and 2024 are leap years, but 1900 and 2100 are not." },
      { q: "Why do leap years exist?", a: "Earth takes about 365.2422 days to orbit the Sun. Adding a leap day (29 February) every four years keeps the calendar aligned with the seasons; the 100/400 rule fine-tunes the small remaining drift." },
    ],
  },
  id: {
    title: "Leap Year Calculator", short: "Check whether a year is a leap year and find the nearest leap years.",
    description: "Free leap year calculator. Enter a year to see whether it's a leap year (366 days, February has 29), plus the next and previous leap years. Uses the Gregorian rule: divisible by 4, except centuries unless divisible by 400.",
    keywords: ["leap year", "is it a leap year", "leap year checker", "days in february", "leap year list"],
    ...io("Year", "Days in year", "Days in February", "Next leap year", "Previous leap year"),
    faq: [
      { q: "How do I know if a year is a leap year?", a: "A year is a leap year if it is divisible by 4 — except for century years (like 1900), which must also be divisible by 400. So 2000 and 2024 are leap years, but 1900 and 2100 are not." },
      { q: "Why do leap years exist?", a: "Earth takes about 365.2422 days to orbit the Sun. Adding a leap day (29 February) every four years keeps the calendar aligned with the seasons; the 100/400 rule fine-tunes the small remaining drift." },
    ],
  },

  tr: {
    title: "Artık Yıl Hesaplayıcı", short: "Bir yılın artık yıl olup olmadığını kontrol edin ve en yakın artık yılları bulun.",
    description: "Ücretsiz artık yıl hesaplayıcı. Bir yıl girerek artık yıl olup olmadığını (366 gün, Şubat 29 çeker), ayrıca bir sonraki ve önceki artık yılları görün. Gregoryen kuralı: 4'e bölünen, 400'e bölünmedikçe yüzyıllar hariç.",
    keywords: ["artık yıl", "artık yıl mı", "artık yıl kontrol", "şubat kaç gün", "artık yıl listesi"],
    ...io("Yıl", "Yıldaki gün", "Şubat'taki gün", "Sonraki artık yıl", "Önceki artık yıl"),
    faq: [
      { q: "Bir yılın artık yıl olduğunu nasıl anlarım?", a: "Bir yıl 4'e bölünüyorsa artık yıldır — ancak yüzyıl yılları (1900 gibi) ayrıca 400'e de bölünmelidir. Yani 2000 ve 2024 artık yıldır, 1900 ve 2100 değildir." },
      { q: "Artık yıllar neden vardır?", a: "Dünya'nın Güneş çevresindeki turu yaklaşık 365,2422 gün sürer. Her dört yılda bir artık gün (29 Şubat) eklemek takvimi mevsimlerle hizalı tutar; 100/400 kuralı küçük sapmayı ince ayarlar." },
    ],
  },
  de: { title: "Schaltjahr-Rechner", short: "Prüfen Sie, ob ein Jahr ein Schaltjahr ist, und finden Sie die nächsten Schaltjahre.", description: "Kostenloser Schaltjahr-Rechner. Geben Sie ein Jahr ein, um zu sehen, ob es ein Schaltjahr ist (366 Tage, Februar hat 29), samt nächstem und vorherigem Schaltjahr.", keywords: ["schaltjahr", "ist es ein schaltjahr", "schaltjahr prüfen", "tage im februar", "schaltjahr liste"], ...io("Jahr", "Tage im Jahr", "Tage im Februar", "Nächstes Schaltjahr", "Vorheriges Schaltjahr") },
  fr: { title: "Calculateur d'Année Bissextile", short: "Vérifiez si une année est bissextile et trouvez les années bissextiles voisines.", description: "Calculateur d'année bissextile gratuit. Saisissez une année pour savoir si elle est bissextile (366 jours, février a 29), ainsi que les années bissextiles suivante et précédente.", keywords: ["année bissextile", "est-ce une année bissextile", "vérifier année bissextile", "jours en février", "liste années bissextiles"], ...io("Année", "Jours dans l'année", "Jours en février", "Prochaine année bissextile", "Année bissextile précédente") },
  es: { title: "Calculadora de Año Bisiesto", short: "Comprueba si un año es bisiesto y encuentra los años bisiestos cercanos.", description: "Calculadora de año bisiesto gratuita. Introduce un año para ver si es bisiesto (366 días, febrero tiene 29), además del año bisiesto siguiente y anterior.", keywords: ["año bisiesto", "es año bisiesto", "comprobar año bisiesto", "días en febrero", "lista años bisiestos"], ...io("Año", "Días del año", "Días en febrero", "Próximo año bisiesto", "Año bisiesto anterior") },
  it: { title: "Calcolatore Anno Bisestile", short: "Controlla se un anno è bisestile e trova gli anni bisestili vicini.", description: "Calcolatore di anno bisestile gratuito. Inserisci un anno per vedere se è bisestile (366 giorni, febbraio ha 29), oltre all'anno bisestile successivo e precedente.", keywords: ["anno bisestile", "è un anno bisestile", "controlla anno bisestile", "giorni a febbraio", "lista anni bisestili"], ...io("Anno", "Giorni nell'anno", "Giorni a febbraio", "Prossimo anno bisestile", "Anno bisestile precedente") },
  ar: { title: "حاسبة السنة الكبيسة", short: "تحقق مما إذا كانت السنة كبيسة وأوجد أقرب السنوات الكبيسة.", description: "حاسبة سنة كبيسة مجانية. أدخل سنة لمعرفة ما إذا كانت كبيسة (366 يومًا، فبراير 29)، بالإضافة إلى السنة الكبيسة التالية والسابقة.", keywords: ["سنة كبيسة", "هل هي سنة كبيسة", "فحص السنة الكبيسة", "أيام فبراير", "قائمة السنوات الكبيسة"], ...io("السنة", "أيام السنة", "أيام فبراير", "السنة الكبيسة التالية", "السنة الكبيسة السابقة") },
  ru: { title: "Калькулятор Високосного Года", short: "Проверьте, високосный ли год, и найдите ближайшие високосные годы.", description: "Бесплатный калькулятор високосного года. Введите год, чтобы узнать, високосный ли он (366 дней, в феврале 29), а также следующий и предыдущий високосные годы.", keywords: ["високосный год", "это високосный год", "проверка високосного года", "дней в феврале", "список високосных лет"], ...io("Год", "Дней в году", "Дней в феврале", "Следующий високосный год", "Предыдущий високосный год") },
  zh: { title: "闰年计算器", short: "检查某一年是否为闰年并找出最近的闰年。", description: "免费的闰年计算器。输入年份即可查看它是否为闰年（366 天，2 月有 29 天），以及下一个和上一个闰年。采用公历规则：能被 4 整除，世纪年须能被 400 整除。", keywords: ["闰年", "是不是闰年", "闰年检查", "二月有几天", "闰年列表"], ...io("年份", "全年天数", "二月天数", "下一个闰年", "上一个闰年") },
  ja: { title: "うるう年計算機", short: "ある年がうるう年か確認し、最も近いうるう年を求めます。", description: "無料のうるう年計算機。年を入力すると、うるう年かどうか（366 日、2 月は 29 日）と、次および前のうるう年が表示されます。グレゴリオ暦の規則：4 で割り切れ、世紀年は 400 で割り切れる場合のみ。", keywords: ["うるう年", "うるう年かどうか", "うるう年 判定", "2月の日数", "うるう年 一覧"], ...io("年", "年内日数", "2月の日数", "次のうるう年", "前のうるう年") },
  ko: { title: "윤년 계산기", short: "어떤 해가 윤년인지 확인하고 가장 가까운 윤년을 찾습니다.", description: "무료 윤년 계산기. 연도를 입력하면 윤년인지(366일, 2월은 29일)와 다음/이전 윤년을 확인할 수 있습니다. 그레고리력 규칙: 4로 나누어떨어지며 세기 연도는 400으로 나누어떨어져야 함.", keywords: ["윤년", "윤년인가", "윤년 확인", "2월 일수", "윤년 목록"], ...io("연도", "연중 일수", "2월 일수", "다음 윤년", "이전 윤년") },
  hi: { title: "लीप वर्ष कैलकुलेटर", short: "जांचें कि कोई वर्ष लीप वर्ष है या नहीं और निकटतम लीप वर्ष खोजें।", description: "मुफ्त लीप वर्ष कैलकुलेटर। एक वर्ष दर्ज करें और देखें कि वह लीप वर्ष है या नहीं (366 दिन, फरवरी में 29), साथ ही अगला और पिछला लीप वर्ष। ग्रेगोरियन नियम: 4 से विभाज्य, शताब्दी वर्ष 400 से विभाज्य होने पर ही।", keywords: ["लीप वर्ष", "क्या यह लीप वर्ष है", "लीप वर्ष जांच", "फरवरी में दिन", "लीप वर्ष सूची"], ...io("वर्ष", "वर्ष में दिन", "फरवरी में दिन", "अगला लीप वर्ष", "पिछला लीप वर्ष") },
};

export default i18n;
