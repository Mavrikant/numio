export interface HttpStatus {
  readonly code: number;
  readonly name: string;
}

// Standard reason phrases (kept in English, per the HTTP spec).
export const HTTP_STATUSES: ReadonlyArray<HttpStatus> = [
  { code: 100, name: "Continue" },
  { code: 101, name: "Switching Protocols" },
  { code: 200, name: "OK" },
  { code: 201, name: "Created" },
  { code: 202, name: "Accepted" },
  { code: 204, name: "No Content" },
  { code: 206, name: "Partial Content" },
  { code: 301, name: "Moved Permanently" },
  { code: 302, name: "Found" },
  { code: 304, name: "Not Modified" },
  { code: 307, name: "Temporary Redirect" },
  { code: 308, name: "Permanent Redirect" },
  { code: 400, name: "Bad Request" },
  { code: 401, name: "Unauthorized" },
  { code: 403, name: "Forbidden" },
  { code: 404, name: "Not Found" },
  { code: 405, name: "Method Not Allowed" },
  { code: 406, name: "Not Acceptable" },
  { code: 408, name: "Request Timeout" },
  { code: 409, name: "Conflict" },
  { code: 410, name: "Gone" },
  { code: 413, name: "Payload Too Large" },
  { code: 415, name: "Unsupported Media Type" },
  { code: 418, name: "I'm a teapot" },
  { code: 422, name: "Unprocessable Entity" },
  { code: 429, name: "Too Many Requests" },
  { code: 451, name: "Unavailable For Legal Reasons" },
  { code: 500, name: "Internal Server Error" },
  { code: 501, name: "Not Implemented" },
  { code: 502, name: "Bad Gateway" },
  { code: 503, name: "Service Unavailable" },
  { code: 504, name: "Gateway Timeout" },
  { code: 505, name: "HTTP Version Not Supported" },
];

export function statusClass(code: number): number {
  return Math.floor(code / 100);
}

export function searchStatuses(query: string): ReadonlyArray<HttpStatus> {
  const q = query.trim().toLowerCase();
  if (q === "") return HTTP_STATUSES;
  return HTTP_STATUSES.filter(
    (s) => String(s.code).includes(q) || s.name.toLowerCase().includes(q),
  );
}
