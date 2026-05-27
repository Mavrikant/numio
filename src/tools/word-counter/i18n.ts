import type { ToolI18n } from "@/types/tool";
import { COMMON_UI } from "../_shared/ui";

const i18n: ToolI18n = {
  en: {
    title: "Word & Character Counter",
    short: "Count words, characters, sentences, paragraphs and reading time as you type.",
    description: "Free online word and character counter. Paste or type text to instantly see the number of words, characters (with and without spaces), sentences, paragraphs, lines and estimated reading time. Everything runs in your browser.",
    keywords: ["word counter", "character counter", "letter counter", "word count", "reading time", "text statistics"],
    ui: { ...COMMON_UI.en, placeholder: "Type or paste your text here…", characters: "Characters", charactersNoSpaces: "Characters (no spaces)", words: "Words", sentences: "Sentences", paragraphs: "Paragraphs", lines: "Lines", readingTime: "Reading time", min: "min" },
    faq: [
      { q: "How is reading time estimated?", a: "We divide the word count by 200 words per minute, an average adult silent-reading speed. Faster or slower readers will differ." },
      { q: "Is my text uploaded anywhere?", a: "No. All counting runs locally in your browser — your text never leaves your device." },
    ],
  },
  tr: {
    title: "Kelime ve Karakter Sayacı",
    short: "Yazarken kelime, karakter, cümle, paragraf sayısını ve okuma süresini sayın.",
    description: "Ücretsiz çevrimiçi kelime ve karakter sayacı. Metni yapıştırın veya yazın; kelime, karakter (boşluklu ve boşluksuz), cümle, paragraf, satır sayısını ve tahmini okuma süresini anında görün. Her şey tarayıcınızda çalışır.",
    keywords: ["kelime sayacı", "karakter sayacı", "harf sayacı", "kelime sayısı", "okuma süresi", "metin istatistikleri"],
    ui: { ...COMMON_UI.tr, placeholder: "Metninizi buraya yazın veya yapıştırın…", characters: "Karakter", charactersNoSpaces: "Karakter (boşluksuz)", words: "Kelime", sentences: "Cümle", paragraphs: "Paragraf", lines: "Satır", readingTime: "Okuma süresi", min: "dk" },
    faq: [
      { q: "Okuma süresi nasıl tahmin edilir?", a: "Kelime sayısını dakikada 200 kelimeye böleriz; bu, ortalama bir yetişkinin sessiz okuma hızıdır. Daha hızlı veya yavaş okuyanlarda değişir." },
      { q: "Metnim bir yere yükleniyor mu?", a: "Hayır. Tüm sayım tarayıcınızda yerel olarak çalışır — metniniz cihazınızdan çıkmaz." },
    ],
  },
  de: {
    title: "Wort- & Zeichenzähler",
    short: "Zählen Sie Wörter, Zeichen, Sätze, Absätze und Lesezeit beim Tippen.",
    description: "Kostenloser Online-Wort- und Zeichenzähler. Text einfügen oder tippen und sofort die Anzahl der Wörter, Zeichen (mit und ohne Leerzeichen), Sätze, Absätze, Zeilen und die geschätzte Lesezeit sehen. Alles läuft im Browser.",
    keywords: ["Wortzähler", "Zeichenzähler", "Buchstabenzähler", "Wortanzahl", "Lesezeit", "Textstatistik"],
    ui: { ...COMMON_UI.de, placeholder: "Text hier eingeben oder einfügen…", characters: "Zeichen", charactersNoSpaces: "Zeichen (ohne Leerzeichen)", words: "Wörter", sentences: "Sätze", paragraphs: "Absätze", lines: "Zeilen", readingTime: "Lesezeit", min: "Min" },
  },
  fr: {
    title: "Compteur de Mots et Caractères",
    short: "Comptez les mots, caractères, phrases, paragraphes et le temps de lecture.",
    description: "Compteur de mots et de caractères en ligne gratuit. Collez ou tapez du texte pour voir instantanément le nombre de mots, de caractères (avec et sans espaces), de phrases, de paragraphes, de lignes et le temps de lecture estimé.",
    keywords: ["compteur de mots", "compteur de caractères", "nombre de mots", "temps de lecture", "statistiques de texte"],
    ui: { ...COMMON_UI.fr, placeholder: "Tapez ou collez votre texte ici…", characters: "Caractères", charactersNoSpaces: "Caractères (sans espaces)", words: "Mots", sentences: "Phrases", paragraphs: "Paragraphes", lines: "Lignes", readingTime: "Temps de lecture", min: "min" },
  },
  es: {
    title: "Contador de Palabras y Caracteres",
    short: "Cuenta palabras, caracteres, oraciones, párrafos y el tiempo de lectura.",
    description: "Contador de palabras y caracteres en línea gratuito. Pega o escribe texto para ver al instante el número de palabras, caracteres (con y sin espacios), oraciones, párrafos, líneas y el tiempo de lectura estimado.",
    keywords: ["contador de palabras", "contador de caracteres", "número de palabras", "tiempo de lectura", "estadísticas de texto"],
    ui: { ...COMMON_UI.es, placeholder: "Escribe o pega tu texto aquí…", characters: "Caracteres", charactersNoSpaces: "Caracteres (sin espacios)", words: "Palabras", sentences: "Oraciones", paragraphs: "Párrafos", lines: "Líneas", readingTime: "Tiempo de lectura", min: "min" },
  },
  it: {
    title: "Contatore di Parole e Caratteri",
    short: "Conta parole, caratteri, frasi, paragrafi e il tempo di lettura.",
    description: "Contatore di parole e caratteri online gratuito. Incolla o digita il testo per vedere all'istante il numero di parole, caratteri (con e senza spazi), frasi, paragrafi, righe e il tempo di lettura stimato.",
    keywords: ["contatore di parole", "contatore di caratteri", "numero di parole", "tempo di lettura", "statistiche del testo"],
    ui: { ...COMMON_UI.it, placeholder: "Digita o incolla il testo qui…", characters: "Caratteri", charactersNoSpaces: "Caratteri (senza spazi)", words: "Parole", sentences: "Frasi", paragraphs: "Paragrafi", lines: "Righe", readingTime: "Tempo di lettura", min: "min" },
  },
  ar: {
    title: "عداد الكلمات والأحرف",
    short: "احسب الكلمات والأحرف والجمل والفقرات ووقت القراءة أثناء الكتابة.",
    description: "عداد كلمات وأحرف مجاني عبر الإنترنت. الصق أو اكتب النص لترى فورًا عدد الكلمات والأحرف (مع المسافات وبدونها) والجمل والفقرات والأسطر ووقت القراءة المقدّر. كل شيء يعمل في متصفحك.",
    keywords: ["عداد الكلمات", "عداد الأحرف", "عدد الكلمات", "وقت القراءة", "إحصاءات النص"],
    ui: { ...COMMON_UI.ar, placeholder: "اكتب أو الصق نصك هنا…", characters: "أحرف", charactersNoSpaces: "أحرف (بدون مسافات)", words: "كلمات", sentences: "جمل", paragraphs: "فقرات", lines: "أسطر", readingTime: "وقت القراءة", min: "د" },
  },
  ru: {
    title: "Счётчик Слов и Символов",
    short: "Считайте слова, символы, предложения, абзацы и время чтения по мере ввода.",
    description: "Бесплатный онлайн-счётчик слов и символов. Вставьте или напечатайте текст, чтобы мгновенно увидеть количество слов, символов (с пробелами и без), предложений, абзацев, строк и примерное время чтения. Всё работает в браузере.",
    keywords: ["счётчик слов", "счётчик символов", "количество слов", "время чтения", "статистика текста"],
    ui: { ...COMMON_UI.ru, placeholder: "Введите или вставьте текст здесь…", characters: "Символы", charactersNoSpaces: "Символы (без пробелов)", words: "Слова", sentences: "Предложения", paragraphs: "Абзацы", lines: "Строки", readingTime: "Время чтения", min: "мин" },
  },
  zh: {
    title: "字数与字符统计器",
    short: "输入时即时统计字数、字符数、句子、段落和阅读时间。",
    description: "免费的在线字数与字符统计器。粘贴或输入文本，即可立即查看字数、字符数（含空格与不含空格）、句子数、段落数、行数以及预计阅读时间。一切都在浏览器中运行。",
    keywords: ["字数统计", "字符统计", "字数", "阅读时间", "文本统计"],
    ui: { ...COMMON_UI.zh, placeholder: "在此输入或粘贴文本…", characters: "字符", charactersNoSpaces: "字符（不含空格）", words: "字数", sentences: "句子", paragraphs: "段落", lines: "行", readingTime: "阅读时间", min: "分钟" },
  },
  ja: {
    title: "文字数・単語数カウンター",
    short: "入力しながら単語数・文字数・文・段落・読了時間を数えます。",
    description: "無料のオンライン文字数・単語数カウンター。テキストを貼り付けるか入力すると、単語数、文字数（空白あり・なし）、文、段落、行数、推定読了時間が即座に表示されます。すべてブラウザ内で動作します。",
    keywords: ["文字数カウント", "単語数カウント", "文字数", "読了時間", "テキスト統計"],
    ui: { ...COMMON_UI.ja, placeholder: "ここにテキストを入力または貼り付け…", characters: "文字数", charactersNoSpaces: "文字数（空白なし）", words: "単語数", sentences: "文", paragraphs: "段落", lines: "行", readingTime: "読了時間", min: "分" },
  },
  ko: {
    title: "단어 및 문자 수 세기",
    short: "입력하는 동안 단어, 문자, 문장, 단락 수와 읽기 시간을 셉니다.",
    description: "무료 온라인 단어 및 문자 수 세기. 텍스트를 붙여넣거나 입력하면 단어 수, 문자 수(공백 포함·미포함), 문장, 단락, 줄 수, 예상 읽기 시간을 즉시 확인할 수 있습니다. 모든 것이 브라우저에서 실행됩니다.",
    keywords: ["단어 수 세기", "문자 수 세기", "글자 수", "읽기 시간", "텍스트 통계"],
    ui: { ...COMMON_UI.ko, placeholder: "여기에 텍스트를 입력하거나 붙여넣으세요…", characters: "문자", charactersNoSpaces: "문자(공백 제외)", words: "단어", sentences: "문장", paragraphs: "단락", lines: "줄", readingTime: "읽기 시간", min: "분" },
  },
  hi: {
    title: "शब्द और वर्ण गणक",
    short: "टाइप करते समय शब्द, वर्ण, वाक्य, अनुच्छेद और पढ़ने का समय गिनें।",
    description: "मुफ्त ऑनलाइन शब्द और वर्ण गणक। टेक्स्ट पेस्ट या टाइप करें और शब्दों, वर्णों (स्पेस सहित व बिना), वाक्यों, अनुच्छेदों, पंक्तियों की संख्या तथा अनुमानित पढ़ने का समय तुरंत देखें। सब कुछ आपके ब्राउज़र में चलता है।",
    keywords: ["शब्द गणक", "वर्ण गणक", "शब्द संख्या", "पढ़ने का समय", "टेक्स्ट आँकड़े"],
    ui: { ...COMMON_UI.hi, placeholder: "अपना टेक्स्ट यहाँ टाइप या पेस्ट करें…", characters: "वर्ण", charactersNoSpaces: "वर्ण (बिना स्पेस)", words: "शब्द", sentences: "वाक्य", paragraphs: "अनुच्छेद", lines: "पंक्तियाँ", readingTime: "पढ़ने का समय", min: "मि" },
  },
};

export default i18n;
