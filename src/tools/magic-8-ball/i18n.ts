import type { ToolI18n } from "@/types/tool";
import { COMMON_UI } from "../_shared/ui";

const data = {
  en: { title: "Magic 8-Ball", short: "Ask a yes/no question and shake the ball.", description: "Free Magic 8-Ball. Ask a yes-or-no question, shake the ball and get one of the 20 classic answers — entirely random, entirely in your browser.", keywords: ["magic 8 ball", "yes or no answer", "ask a question", "decision maker", "fortune teller"], question: "Your question", shake: "Shake the ball" },
  pt: { title: "Bola Mágica 8", short: "Ask a yes/no question e shake the ball.", description: "Gratuito - Magic 8-Ball. Ask a yes-ou-no question, shake the ball e get one de the 20 classic answers â entirely random, entirely no seu navegador.", keywords: ["magic 8 ball", "yes or no answer", "ask a question", "decision maker", "fortune teller"], question: "Your question", shake: "Shake the ball" },
  id: { title: "Bola Ajaib 8", short: "Ask a yes/no question dan shake the ball.", description: "Gratis - Magic 8-Ball. Ask a yes-atau-no question, shake the ball dan get one dari the 20 classic answers â entirely random, entirely di browser Anda.", keywords: ["magic 8 ball", "yes or no answer", "ask a question", "decision maker", "fortune teller"], question: "Your question", shake: "Shake the ball" },

  tr: { title: "Sihirli 8 Topu", short: "Bir evet/hayır sorusu sor ve topu salla.", description: "Ücretsiz Sihirli 8 Topu. Bir evet veya hayır sorusu sorun, topu sallayın ve 20 klasik cevaptan birini alın — tamamen rastgele, tamamen tarayıcınızda.", keywords: ["sihirli 8 topu", "evet veya hayır cevap", "soru sor", "karar verici", "falcı"], question: "Sorunuz", shake: "Topu salla" },
  de: { title: "Magische 8-Kugel", short: "Stelle eine Ja/Nein-Frage und schüttle die Kugel.", description: "Kostenlose Magische 8-Kugel. Stellen Sie eine Ja-oder-Nein-Frage, schütteln Sie die Kugel und erhalten Sie eine der 20 klassischen Antworten — vollständig zufällig, vollständig im Browser.", keywords: ["magische 8 kugel", "ja oder nein antwort", "frage stellen", "entscheidungshelfer", "wahrsager"], question: "Ihre Frage", shake: "Kugel schütteln" },
  fr: { title: "Boule Magique 8", short: "Posez une question oui/non et secouez la boule.", description: "Boule Magique 8 gratuite. Posez une question par oui ou non, secouez la boule et obtenez l'une des 20 réponses classiques — entièrement aléatoire, entièrement dans votre navigateur.", keywords: ["boule magique 8", "réponse oui ou non", "poser une question", "aide à la décision", "diseur de bonne aventure"], question: "Votre question", shake: "Secouer la boule" },
  es: { title: "Bola Mágica 8", short: "Haz una pregunta sí/no y agita la bola.", description: "Bola Mágica 8 gratuita. Haz una pregunta de sí o no, agita la bola y obtén una de las 20 respuestas clásicas — completamente aleatorio, completamente en tu navegador.", keywords: ["bola mágica 8", "respuesta sí o no", "hacer pregunta", "tomador de decisiones", "adivino"], question: "Tu pregunta", shake: "Agitar la bola" },
  it: { title: "Palla Magica 8", short: "Fai una domanda sì/no e scuoti la palla.", description: "Palla Magica 8 gratuita. Fai una domanda sì o no, scuoti la palla e ottieni una delle 20 risposte classiche — completamente casuale, completamente nel browser.", keywords: ["palla magica 8", "risposta sì o no", "fare domanda", "decisore", "indovino"], question: "La tua domanda", shake: "Scuoti la palla" },
  ar: { title: "كرة 8 السحرية", short: "اطرح سؤال نعم/لا وحرّك الكرة.", description: "كرة 8 سحرية مجانية. اطرح سؤال نعم أو لا، حرّك الكرة، واحصل على إحدى الإجابات الـ 20 الكلاسيكية — عشوائي تمامًا، بالكامل في متصفحك.", keywords: ["كرة 8 السحرية", "إجابة نعم أو لا", "اطرح سؤالاً", "صانع القرار", "العرّاف"], question: "سؤالك", shake: "حرّك الكرة" },
  ru: { title: "Шар судьбы (Magic 8-Ball)", short: "Задайте вопрос да/нет и потрясите шар.", description: "Бесплатный шар судьбы. Задайте вопрос «да или нет», потрясите шар и получите один из 20 классических ответов — полностью случайно, полностью в браузере.", keywords: ["шар судьбы", "ответ да или нет", "задать вопрос", "принятие решений", "гадалка"], question: "Ваш вопрос", shake: "Потрясти шар" },
  zh: { title: "魔法八球", short: "提出是/否问题并摇一摇球。", description: "免费的魔法八球。提出是或否的问题，摇一摇球，获得 20 个经典答案之一——完全随机，完全在浏览器中。", keywords: ["魔法八球", "是或否答案", "提问", "决策器", "算命"], question: "你的问题", shake: "摇球" },
  ja: { title: "マジック 8 ボール", short: "はい/いいえの質問をしてボールを振る。", description: "無料のマジック 8 ボール。はいかいいえで答えられる質問をして、ボールを振ると、20 の古典的な答えの 1 つが得られます——完全にランダム、すべてブラウザ内で。", keywords: ["マジック 8 ボール", "はい か いいえ 答え", "質問する", "意思決定", "占い"], question: "あなたの質問", shake: "ボールを振る" },
  ko: { title: "매직 8 볼", short: "예/아니오 질문을 하고 공을 흔드세요.", description: "무료 매직 8 볼. 예 또는 아니오로 답할 수 있는 질문을 하고 공을 흔들면 20개의 고전 답변 중 하나를 얻습니다 — 완전히 무작위, 모두 브라우저에서.", keywords: ["매직 8 볼", "예 또는 아니오 답변", "질문하기", "의사 결정", "점쟁이"], question: "당신의 질문", shake: "공 흔들기" },
  hi: { title: "मैजिक 8-बॉल", short: "हाँ/नहीं प्रश्न पूछें और गेंद को हिलाएं।", description: "मुफ्त मैजिक 8-बॉल। हाँ या नहीं वाला प्रश्न पूछें, गेंद को हिलाएं और 20 क्लासिक उत्तरों में से एक प्राप्त करें — पूरी तरह यादृच्छिक, पूरी तरह आपके ब्राउज़र में।", keywords: ["मैजिक 8 बॉल", "हाँ या नहीं उत्तर", "प्रश्न पूछें", "निर्णय निर्माता", "भविष्यवक्ता"], question: "आपका प्रश्न", shake: "गेंद हिलाएं" },
};

const i18n = Object.fromEntries(
  (Object.keys(data) as Array<keyof typeof data>).map((loc) => {
    const { title, short, description, keywords, ...rest } = data[loc];
    return [loc, { title, short, description, keywords, ui: { ...COMMON_UI[loc], ...rest } }];
  }),
) as unknown as ToolI18n;

export default i18n;
