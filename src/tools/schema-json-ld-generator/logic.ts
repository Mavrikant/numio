export type SchemaType = "Article" | "Product" | "FAQPage" | "LocalBusiness" | "BreadcrumbList";

export interface ArticleInput {
  readonly headline: string;
  readonly author: string;
  readonly datePublished: string;
  readonly image: string;
  readonly description: string;
}

export interface ProductInput {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly brand: string;
  readonly price: string;
  readonly currency: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface LocalBusinessInput {
  readonly name: string;
  readonly streetAddress: string;
  readonly addressLocality: string;
  readonly addressRegion: string;
  readonly postalCode: string;
  readonly addressCountry: string;
  readonly telephone: string;
  readonly url: string;
}

export interface BreadcrumbItem {
  readonly name: string;
  readonly url: string;
}

function wrap(graph: Record<string, unknown>): string {
  // Escape "<" so content like "</script>" can't terminate the script element
  // when the snippet is pasted into an HTML page (still valid JSON-LD).
  const json = JSON.stringify(graph, null, 2).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">\n${json}\n</script>`;
}

function nonEmpty<T extends Record<string, unknown>>(obj: T): Partial<T> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== "" && v !== null && v !== undefined) out[k] = v;
  }
  return out as Partial<T>;
}

export function buildArticle(input: ArticleInput): string {
  return wrap({
    "@context": "https://schema.org",
    "@type": "Article",
    ...nonEmpty({
      headline: input.headline,
      image: input.image,
      datePublished: input.datePublished,
      description: input.description,
      author: input.author ? { "@type": "Person", name: input.author } : undefined,
    }),
  });
}

export function buildProduct(input: ProductInput): string {
  const offers = input.price && input.currency ? { "@type": "Offer", price: input.price, priceCurrency: input.currency } : undefined;
  return wrap({
    "@context": "https://schema.org",
    "@type": "Product",
    ...nonEmpty({
      name: input.name,
      description: input.description,
      image: input.image,
      brand: input.brand ? { "@type": "Brand", name: input.brand } : undefined,
      offers,
    }),
  });
}

export function buildFaq(items: FaqItem[]): string {
  const mainEntity = items
    .filter((i) => i.question && i.answer)
    .map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } }));
  return wrap({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity });
}

export function buildLocalBusiness(input: LocalBusinessInput): string {
  const address = nonEmpty({
    "@type": "PostalAddress",
    streetAddress: input.streetAddress,
    addressLocality: input.addressLocality,
    addressRegion: input.addressRegion,
    postalCode: input.postalCode,
    addressCountry: input.addressCountry,
  });
  return wrap({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    ...nonEmpty({
      name: input.name,
      telephone: input.telephone,
      url: input.url,
      address: Object.keys(address).length > 1 ? address : undefined,
    }),
  });
}

export function buildBreadcrumb(items: BreadcrumbItem[]): string {
  const itemListElement = items
    .filter((i) => i.name && i.url)
    .map((i, idx) => ({ "@type": "ListItem", position: idx + 1, name: i.name, item: i.url }));
  return wrap({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement });
}
