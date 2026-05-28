const FIRST = ["Alex", "Sam", "Jordan", "Taylor", "Casey", "Morgan", "Riley", "Robin", "Charlie", "Drew", "Avery", "Quinn", "Hayden", "Sage", "Sky", "Noor", "Mira", "Leo", "Ada", "Iris", "Liam", "Maya", "Nate", "Zoe"];
const LAST = ["Smith", "Johnson", "Garcia", "Lee", "Brown", "Davis", "Martin", "Patel", "Khan", "Nguyen", "Singh", "Kim", "Silva", "Rossi", "Yilmaz", "Müller", "Cohen", "Ivanov", "Hassan", "Adams", "Reyes", "Walker", "Hughes", "Bell"];
const STREETS = ["Maple", "Oak", "Pine", "Elm", "Cedar", "Birch", "Walnut", "Park", "Lake", "River", "Mountain", "Forest", "Hill", "Meadow", "Sunset"];
const SUFFIX = ["St", "Ave", "Rd", "Blvd", "Ln", "Way", "Dr", "Ct"];
const CITIES = ["Springfield", "Riverside", "Greenville", "Franklin", "Bristol", "Clinton", "Salem", "Madison", "Georgetown", "Arlington", "Burlington", "Auburn"];
const STATES = ["CA", "TX", "NY", "FL", "IL", "PA", "OH", "GA", "NC", "MI", "WA", "AZ"];
const DOMAINS = ["example.com", "mail.test", "demo.dev", "sample.app", "fake.email"];
const COMPANIES = ["Acme", "Globex", "Initech", "Umbrella", "Soylent", "Wayne", "Stark", "Wonka", "Bluth", "Pied Piper"];
const SUFFIXES = ["Corp", "LLC", "Inc", "Co", "Group"];

export interface FakePerson {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullName: string;
  readonly email: string;
  readonly phone: string;
  readonly street: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly company: string;
}

function pick<T>(arr: readonly T[], rand: () => number): T {
  return arr[Math.floor(rand() * arr.length)]!;
}

function pad(n: number, width: number): string {
  return String(n).padStart(width, "0");
}

function randomPhone(rand: () => number): string {
  const area = 200 + Math.floor(rand() * 800);
  const mid = 100 + Math.floor(rand() * 900);
  const tail = Math.floor(rand() * 10000);
  return `(${area}) ${pad(mid, 3)}-${pad(tail, 4)}`;
}

/** Generate one fake person record using the supplied random source. */
export function fakePerson(rand: () => number): FakePerson {
  const first = pick(FIRST, rand);
  const last = pick(LAST, rand);
  const company = `${pick(COMPANIES, rand)} ${pick(SUFFIXES, rand)}`;
  return {
    firstName: first,
    lastName: last,
    fullName: `${first} ${last}`,
    email: `${first.toLowerCase()}.${last.toLowerCase()}@${pick(DOMAINS, rand)}`,
    phone: randomPhone(rand),
    street: `${100 + Math.floor(rand() * 9900)} ${pick(STREETS, rand)} ${pick(SUFFIX, rand)}`,
    city: pick(CITIES, rand),
    state: pick(STATES, rand),
    zip: pad(Math.floor(rand() * 100000), 5),
    company,
  };
}

/** Generate an array of `n` fake people. */
export function fakePeople(n: number, rand: () => number): FakePerson[] {
  return Array.from({ length: Math.max(0, Math.floor(n)) }, () => fakePerson(rand));
}

/** Format a list of records as CSV. */
export function peopleToCsv(rows: FakePerson[]): string {
  if (rows.length === 0) return "";
  const headers = Object.keys(rows[0]!) as (keyof FakePerson)[];
  const escape = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
  const lines = [headers.join(",")];
  for (const r of rows) lines.push(headers.map((h) => escape(String(r[h]))).join(","));
  return lines.join("\n");
}
