import type { CalculatorI18n } from "@/types/i18n";

const io = (w: string, r: string, avg: string, ep: string, br: string, w90: string, w80: string) => ({
  inputs: { weight: { label: w }, reps: { label: r } },
  outputs: { average: { label: avg }, epley: { label: ep }, brzycki: { label: br }, weightAt90: { label: w90 }, weightAt80: { label: w80 } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "One-Rep Max Calculator", short: "Estimate your 1RM from a weight and reps, with training-load percentages.",
    description: "Free one-rep max (1RM) calculator. Enter the weight you lifted and for how many reps to estimate your one-rep maximum using the Epley and Brzycki formulas, plus suggested loads at 90% and 80% for training.",
    keywords: ["one rep max calculator", "1rm calculator", "max lift estimate", "epley formula", "brzycki formula", "strength calculator"],
    ...io("Weight lifted", "Repetitions", "Estimated 1RM (avg)", "Epley 1RM", "Brzycki 1RM", "90% load", "80% load"),
    faq: [
      { q: "How is one-rep max estimated?", a: "From a sub-maximal set: Epley gives 1RM = weight x (1 + reps/30); Brzycki gives weight x 36/(37 - reps). We show both and their average." },
      { q: "How accurate is it?", a: "Most accurate for sets of 1-5 reps. Above ~10 reps, fatigue and form make estimates diverge and overstate your true max." },
      { q: "What are the 90% and 80% loads for?", a: "They're common training intensities — useful for planning strength (~90%) and hypertrophy (~80%) work off your estimated max." },
      { q: "Can I use this for any exercise?", a: "Yes — the formulas work for any compound or isolation exercise where you lift a weight for a known number of reps. Common applications include bench press, squat, deadlift, overhead press, and barbell row." },
      { q: "Why do the Epley and Brzycki formulas give different results?", a: "Epley and Brzycki use slightly different regression models. Epley tends to give slightly higher estimates for low-rep sets (1-5 reps), while Brzycki is more conservative. The average of both is shown as a balanced estimate." },
    ],
  },
  nl: {
    title: "One-Rep Max Calculator", short: "Estimate your 1RM from a weight and reps, with training-load percentages.",
    description: "Gratis one-rep max (1RM) calculator. Enter the weight you lifted and for how many reps to estimate your one-rep maximum using the Epley and Brzycki formulas, plus suggested loads at 90% and 80% for training.",
    keywords: ["one rep max calculator", "1rm calculator", "max lift estimate", "epley formula", "brzycki formula", "strength calculator"],
    ...io("Weight lifted", "Repetitions", "Estimated 1RM (avg)", "Epley 1RM", "Brzycki 1RM", "90% load", "80% load"),
    faq: [
      { q: "How is one-rep max estimated?", a: "From a sub-maximal set: Epley gives 1RM = weight x (1 + reps/30); Brzycki gives weight x 36/(37 - reps). We show both and their average." },
      { q: "How accurate is it?", a: "Most accurate for sets of 1-5 reps. Above ~10 reps, fatigue and form make estimates diverge and overstate your true max." },
      { q: "What are the 90% and 80% loads for?", a: "They're common training intensities — useful for planning strength (~90%) and hypertrophy (~80%) work off your estimated max." },
    ],
  },

  pl: {
    title: "One-Rep Max Kalkulator", short: "Estimate your 1RM from a weight and reps, with training-load percentages.",
    description: "Darmowy one-rep max (1RM) kalkulator. Enter the weight you lifted and for how many reps to estimate your one-rep maximum using the Epley and Brzycki formulas, plus suggested loads at 90% and 80% for training.",
    keywords: ["one rep max kalkulator", "1rm kalkulator", "max lift estimate", "epley formula", "brzycki formula", "strength kalkulator"],
    ...io("Weight lifted", "Repetitions", "Estimated 1RM (avg)", "Epley 1RM", "Brzycki 1RM", "90% load", "80% load"),
    faq: [
      { q: "How is one-rep max estimated?", a: "From a sub-maximal set: Epley gives 1RM = weight x (1 + reps/30); Brzycki gives weight x 36/(37 - reps). We show both and their average." },
      { q: "How accurate is it?", a: "Most accurate for sets of 1-5 reps. Above ~10 reps, fatigue and form make estimates diverge and overstate your true max." },
      { q: "What are the 90% and 80% loads for?", a: "They're common training intensities — useful for planning strength (~90%) and hypertrophy (~80%) work off your estimated max." },
    ],
  },
  pt: {
    title: "Calculadora de 1RM (Uma Repeticao Maxima)", short: "Estime a sua repeticoes maxima (1RM) em exercicios de forca.",
    description: "Calculadora gratuita de 1RM. Estime a sua uma repeticao maxima a partir do peso levantado e numero de repeticoes.",
    keywords: ["1RM", "repeticao maxima", "forca maxima", "levantamento peso", "musculacao"],
    ...io("Weight lifted", "Repetitions", "Estimated 1RM (avg)", "Epley 1RM", "Brzycki 1RM", "90% load", "80% load"),
    faq: [
      { q: "How is one-rep max estimated?", a: "From a sub-maximal set: Epley gives 1RM = weight x (1 + reps/30); Brzycki gives weight x 36/(37 - reps). We show both and their average." },
      { q: "How accurate is it?", a: "Most accurate for sets of 1-5 reps. Above ~10 reps, fatigue and form make estimates diverge and overstate your true max." },
      { q: "What are the 90% and 80% loads for?", a: "They're common training intensities — useful for planning strength (~90%) and hypertrophy (~80%) work off your estimated max." },
    ],
  },
  id: {
    title: "Kalkulator 1RM", short: "Estimasi 1 repetisi maksimum (1RM) Anda dalam latihan beban.",
    description: "Kalkulator 1RM gratis. Estimasi one rep max berdasarkan beban yang diangkat dan jumlah repetisi.",
    keywords: ["1RM", "one rep max", "kekuatan maksimum", "angkat beban", "gym"],
    ...io("Weight lifted", "Repetitions", "Estimated 1RM (avg)", "Epley 1RM", "Brzycki 1RM", "90% load", "80% load"),
    faq: [
      { q: "How is one-rep max estimated?", a: "From a sub-maximal set: Epley gives 1RM = weight x (1 + reps/30); Brzycki gives weight x 36/(37 - reps). We show both and their average." },
      { q: "How accurate is it?", a: "Most accurate for sets of 1-5 reps. Above ~10 reps, fatigue and form make estimates diverge and overstate your true max." },
      { q: "What are the 90% and 80% loads for?", a: "They're common training intensities — useful for planning strength (~90%) and hypertrophy (~80%) work off your estimated max." },
    ],
  },

  tr: {
    title: "Tek Tekrar Maksimum (1RM) Hesaplayici", short: "Agirlik ve tekrardan 1RM'nizi, antrenman yuzdeleriyle tahmin edin.",
    description: "Ucretsiz tek tekrar maksimum (1RM) hesaplayici. Kaldirdiginiz agirligi ve tekrar sayisini girerek Epley ve Brzycki formulleriyle 1RM'nizi, ayrica antrenman icin %90 ve %80 onerilen yukleri tahmin edin.",
    keywords: ["tek tekrar maksimum hesaplama", "1rm hesaplama", "maksimum kaldiris", "epley formulu", "brzycki formulu", "kuvvet hesaplama"],
    ...io("Kaldirilan agirlik", "Tekrar sayisi", "Tahmini 1RM (ort.)", "Epley 1RM", "Brzycki 1RM", "%90 yuk", "%80 yuk"),
    faq: [
      { q: "Tek tekrar maksimum nasil tahmin edilir?", a: "Maksimum alti bir setten: Epley 1RM = agirlik x (1 + tekrar/30); Brzycki agirlik x 36/(37 - tekrar) verir. Ikisini ve ortalamasini gosteririz." },
      { q: "Ne kadar dogru?", a: "1-5 tekrarli setlerde en dogru. ~10 tekrarin uzerinde yorgunluk ve form, tahminleri saptirir ve gercek maksimumu abartir." },
      { q: "%90 ve %80 yukler ne ise yarar?", a: "Yaygin antrenman yogunluklaridir — tahmini maksimumunuza gore kuvvet (~%90) ve hipertrofi (~%80) calismasi planlamak icin kullanisli." },
    ],
  },
  de: { title: "One-Rep-Max-Rechner", short: "Schaetzen Sie Ihr 1RM aus Gewicht und Wiederholungen, mit Trainingslasten.", description: "Kostenloser One-Rep-Max-Rechner (1RM). Geben Sie das gehobene Gewicht und die Wiederholungen ein, um Ihr 1RM mit den Epley- und Brzycki-Formeln zu schaetzen, plus 90%- und 80%-Lasten fuer das Training.", keywords: ["one rep max rechner", "1rm rechner", "maximalkraft schaetzen", "epley formel", "brzycki formel"], ...io("Gehobenes Gewicht", "Wiederholungen", "Geschaetztes 1RM (O)", "Epley 1RM", "Brzycki 1RM", "90% Last", "80% Last") },
  fr: { title: "Calculateur de 1RM (Max sur 1 Rep.)", short: "Estimez votre 1RM a partir d'un poids et de repetitions, avec les charges d'entrainement.", description: "Calculateur de 1RM gratuit. Saisissez le poids souleve et le nombre de repetitions pour estimer votre max sur une repetition avec les formules d'Epley et de Brzycki, plus les charges a 90% et 80%.", keywords: ["calculateur 1rm", "max une repetition", "estimation force max", "formule epley", "formule brzycki"], ...io("Poids souleve", "Repetitions", "1RM estime (moy.)", "1RM Epley", "1RM Brzycki", "Charge 90%", "Charge 80%") },
  es: { title: "Calculadora de 1RM (Max. una Repeticion)", short: "Estima tu 1RM a partir de un peso y repeticiones, con cargas de entrenamiento.", description: "Calculadora de 1RM gratuita. Introduce el peso levantado y las repeticiones para estimar tu maximo de una repeticion con las formulas de Epley y Brzycki, ademas de las cargas al 90% y 80%.", keywords: ["calculadora 1rm", "maximo una repeticion", "estimar fuerza maxima", "formula epley", "formula brzycki"], ...io("Peso levantado", "Repeticiones", "1RM estimado (prom.)", "1RM Epley", "1RM Brzycki", "Carga 90%", "Carga 80%") },
  it: { title: "Calcolatore 1RM (Massimale)", short: "Stima il tuo 1RM da peso e ripetizioni, con i carichi di allenamento.", description: "Calcolatore 1RM gratuito. Inserisci il peso sollevato e le ripetizioni per stimare il tuo massimale con le formule di Epley e Brzycki, oltre ai carichi al 90% e 80%.", keywords: ["calcolatore 1rm", "massimale", "stima forza massima", "formula epley", "formula brzycki"], ...io("Peso sollevato", "Ripetizioni", "1RM stimato (media)", "1RM Epley", "1RM Brzycki", "Carico 90%", "Carico 80%") },
  ar: { title: "Hasp alaksaer 1RM", short: "Data 1RM mn wzn wd tkrarat, ma nsb ahmalt altadrib.", description: "Hasbt alaksaer alwahd (1RM) lmjan. adkhl alwzn almarfwe wd altkrarat ltdir alwhed baistikhdam Epley w Brzycki.", keywords: ["1rm hasbt", "alaksaer alwahd", "tdir alqw alqsra", "sight epley", "sight brzycki"], ...io("alwzn almarfwe", "tkrarat", "1RM almqdr (mtwst)", "1RM Epley", "1RM Brzycki", "hml 90%", "hml 80%") },
  ru: { title: "Kalkulator Razovogo Maksimuma (1PM)", short: "Otsenite 1PM po vesu i povtoram, s trenirovochnymi nagruzkami.", description: "Besplatnyi kalkulator razovogo maksimuma (1PM). Vvedite podnyatyi ves i chislo povtorov, chtoby otseniti maksimum na odno povtorenie po formulam Epli i Bzhitski, plyus nagruzki 90% i 80%.", keywords: ["kalkulator 1pm", "razovyi maksimum", "otsenika maks sily", "formula epli", "formula bzhitski"], ...io("Podnyatyi ves", "Povtoreniya", "Otsenka 1PM (sred.)", "1PM Epli", "1PM Bzhitski", "Nagruzka 90%", "Nagruzka 80%") },
  zh: { title: "zui da dan ci zhong liang (1RM) ji suan qi", short: "gen ju zhong liang he ci shu gu suan 1RM, bing gei chu xun lian fu he bai fen bi.", description: "mian fei de zui da dan ci zhong liang (1RM) ji suan qi. shu ru ju qi de zhong liang he ci shu, shi yong Epley he Brzycki gong shi gu suan ni de dan ci zui da zhong liang, bing gei chu 90% he 80% de xun lian fu he.", keywords: ["1rm ji suan", "zui da dan ci zhong liang", "zui da li liang gu suan", "epley gong shi", "brzycki gong shi"], ...io("ju qi de zhong liang", "ci shu", "gu suan 1RM (jun zhi)", "Epley 1RM", "Brzycki 1RM", "90% fu he", "80% fu he") },
  ja: { title: "1RM (zui da kyo joju ryoo) keisan ki", short: "jyo ryoo to repu su kara 1RM o suitei shi, toreningu fuka no wariai mo hyoji.", description: "muryo no 1RM (zui da kyo joju ryoo) keisan ki. ageta jyo ryoo to repu su o nyuryoku suru to, Epley to Brzycki no koshiki de 1RM o suitei shi, toreningu yo ni 90% 80% no fuka mo shimasu.", keywords: ["1rm keisan ki", "zui da kyo joju ryoo", "zui da kinyoku suitei", "epley koshiki", "brzycki koshiki"], ...io("ageta jyo ryoo", "repu su", "suitei 1RM (heikin)", "Epley 1RM", "Brzycki 1RM", "90% fuka", "80% fuka") },
  ko: { title: "1RM(1hoe choedae jungryang) gyesangi", short: "muggewa banbok hoesuro 1RMeul chujeonghago hunryeon buha bireul jegonghabnida.", description: "muryo 1RM(1hoe choedae jungryang) gyesangi. deun muggewa banbok hoesureul imryeokhamyeon Epleywa Brzycki gongsigeuro 1hoe choedae jungryangeul chujeonghago, hunryeonyong 90% mit 80% buhareul jegonghabnida.", keywords: ["1rm gyesangi", "1hoe choedae jungryang", "choedae geunryeok chujeong", "epley gongsik", "brzycki gongsik"], ...io("deun mugge", "banbok hoesu", "chujeong 1RM(pyeongyun)", "Epley 1RM", "Brzycki 1RM", "90% buha", "80% buha") },
  hi: { title: "Van-rep Max (1RM) Kailakuleatar", short: "vajan aur repas se apna 1RM anumaanit karen, prashikshan bhaar pratishat ke saath.", description: "muft van-rep max (1RM) kailakuleatar. uthaaya gaya vajan aur kitane repas darj karen aur Epley tatha Brzycki sutron se apana ek-rep adhikatam anumaanit karen, saath hi prashikshan ke liye 90% aur 80% bhaar.", keywords: ["1rm kailakuleatar", "van rep max", "adhikatam lift anumaan", "epley sutr", "brzycki sutr"], ...io("uthaaya vajan", "repas", "anumaanit 1RM (ausat)", "Epley 1RM", "Brzycki 1RM", "90% bhaar", "80% bhaar") },
};

export default i18n;