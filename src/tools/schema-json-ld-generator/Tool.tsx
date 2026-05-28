import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import {
  buildArticle, buildProduct, buildFaq, buildLocalBusiness, buildBreadcrumb,
  type SchemaType, type FaqItem, type BreadcrumbItem,
} from "./logic";

const TYPES: SchemaType[] = ["Article", "Product", "FAQPage", "LocalBusiness", "BreadcrumbList"];

const field = (label: string, val: string, set: (v: string) => void) => (
  <label className="block space-y-1">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
    <input type="text" value={val} onChange={(e) => set(e.target.value)} className={inputClass} />
  </label>
);

export default function SchemaJsonLdGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [type, setType] = useState<SchemaType>("Article");

  // Article state
  const [headline, setHeadline] = useState("Numio launches free SEO tools");
  const [author, setAuthor] = useState("Numio Team");
  const [datePublished, setDatePublished] = useState("2026-01-01");
  const [image, setImage] = useState("https://numio.app/og.png");
  const [description, setDescription] = useState("");

  // Product state
  const [name, setName] = useState("Acme Widget");
  const [brand, setBrand] = useState("Acme");
  const [price, setPrice] = useState("19.99");
  const [currency, setCurrency] = useState("USD");

  // FAQ state
  const [faqs, setFaqs] = useState<FaqItem[]>([{ question: "What is Numio?", answer: "A free tool site." }]);

  // Local business state
  const [bizName, setBizName] = useState("Numio Cafe");
  const [street, setStreet] = useState("123 Main St");
  const [locality, setLocality] = useState("Springfield");
  const [region, setRegion] = useState("CA");
  const [postal, setPostal] = useState("94000");
  const [country, setCountry] = useState("US");
  const [telephone, setTelephone] = useState("+1-555-0100");
  const [url, setUrl] = useState("https://numio.app/");

  // Breadcrumb state
  const [crumbs, setCrumbs] = useState<BreadcrumbItem[]>([
    { name: "Home", url: "https://numio.app/" },
    { name: "Tools", url: "https://numio.app/tools" },
  ]);

  const output = (() => {
    switch (type) {
      case "Article": return buildArticle({ headline, author, datePublished, image, description });
      case "Product": return buildProduct({ name, description, image, brand, price, currency });
      case "FAQPage": return buildFaq(faqs);
      case "LocalBusiness": return buildLocalBusiness({ name: bizName, streetAddress: street, addressLocality: locality, addressRegion: region, postalCode: postal, addressCountry: country, telephone, url });
      case "BreadcrumbList": return buildBreadcrumb(crumbs);
    }
  })();

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.type}</span>
        <select value={type} onChange={(e) => setType(e.target.value as SchemaType)} className={inputClass + " w-auto"}>
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </label>

      {type === "Article" && (
        <div className="grid gap-3 sm:grid-cols-2">
          {field(ui.headline, headline, setHeadline)}
          {field(ui.author, author, setAuthor)}
          {field(ui.datePublished, datePublished, setDatePublished)}
          {field(ui.image, image, setImage)}
          <label className="block space-y-1 sm:col-span-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.descriptionField}</span>
            <TextArea value={description} onChange={setDescription} rows={2} />
          </label>
        </div>
      )}

      {type === "Product" && (
        <div className="grid gap-3 sm:grid-cols-2">
          {field(ui.name, name, setName)}
          {field(ui.brand, brand, setBrand)}
          {field(ui.price, price, setPrice)}
          {field(ui.currency, currency, setCurrency)}
          {field(ui.image, image, setImage)}
          <label className="block space-y-1 sm:col-span-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.descriptionField}</span>
            <TextArea value={description} onChange={setDescription} rows={2} />
          </label>
        </div>
      )}

      {type === "FAQPage" && (
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="grid gap-2 rounded-lg border border-slate-200 p-3 sm:grid-cols-2 dark:border-slate-700">
              <label className="block space-y-1">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.question}</span>
                <input type="text" value={f.question} onChange={(e) => setFaqs(faqs.map((x, j) => j === i ? { ...x, question: e.target.value } : x))} className={inputClass} />
              </label>
              <label className="block space-y-1">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.answer}</span>
                <input type="text" value={f.answer} onChange={(e) => setFaqs(faqs.map((x, j) => j === i ? { ...x, answer: e.target.value } : x))} className={inputClass} />
              </label>
            </div>
          ))}
          <button type="button" onClick={() => setFaqs([...faqs, { question: "", answer: "" }])} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
            {ui.addQuestion}
          </button>
        </div>
      )}

      {type === "LocalBusiness" && (
        <div className="grid gap-3 sm:grid-cols-2">
          {field(ui.name, bizName, setBizName)}
          {field(ui.telephone, telephone, setTelephone)}
          {field(ui.url, url, setUrl)}
          {field(ui.street, street, setStreet)}
          {field(ui.locality, locality, setLocality)}
          {field(ui.region, region, setRegion)}
          {field(ui.postal, postal, setPostal)}
          {field(ui.country, country, setCountry)}
        </div>
      )}

      {type === "BreadcrumbList" && (
        <div className="space-y-2">
          {crumbs.map((c, i) => (
            <div key={i} className="grid gap-2 sm:grid-cols-2">
              <input type="text" placeholder={ui.crumbName} value={c.name} onChange={(e) => setCrumbs(crumbs.map((x, j) => j === i ? { ...x, name: e.target.value } : x))} className={inputClass} />
              <input type="text" placeholder={ui.crumbUrl} value={c.url} onChange={(e) => setCrumbs(crumbs.map((x, j) => j === i ? { ...x, url: e.target.value } : x))} className={inputClass} />
            </div>
          ))}
          <button type="button" onClick={() => setCrumbs([...crumbs, { name: "", url: "" }])} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
            {ui.addCrumb}
          </button>
        </div>
      )}

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.output}</span>
          <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <TextArea value={output} rows={12} readOnly />
      </div>
    </div>
  );
}
