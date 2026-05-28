export interface PortEntry {
  readonly port: number;
  readonly protocol: "TCP" | "UDP" | "TCP/UDP";
  readonly name: string;
  readonly description: string;
}

/** Common IANA well-known ports and a handful of widely-used registered ports. */
export const PORTS: PortEntry[] = [
  { port: 7, protocol: "TCP/UDP", name: "echo", description: "Echo protocol." },
  { port: 20, protocol: "TCP", name: "ftp-data", description: "FTP data transfer." },
  { port: 21, protocol: "TCP", name: "ftp", description: "FTP control." },
  { port: 22, protocol: "TCP", name: "ssh", description: "Secure Shell." },
  { port: 23, protocol: "TCP", name: "telnet", description: "Telnet — unencrypted, legacy." },
  { port: 25, protocol: "TCP", name: "smtp", description: "Mail submission (server-to-server)." },
  { port: 53, protocol: "TCP/UDP", name: "dns", description: "Domain Name System." },
  { port: 67, protocol: "UDP", name: "dhcp-server", description: "DHCP server." },
  { port: 68, protocol: "UDP", name: "dhcp-client", description: "DHCP client." },
  { port: 69, protocol: "UDP", name: "tftp", description: "Trivial FTP." },
  { port: 80, protocol: "TCP", name: "http", description: "Hypertext Transfer Protocol." },
  { port: 88, protocol: "TCP/UDP", name: "kerberos", description: "Kerberos authentication." },
  { port: 110, protocol: "TCP", name: "pop3", description: "POP3 mail retrieval." },
  { port: 111, protocol: "TCP/UDP", name: "rpcbind", description: "ONC RPC portmapper." },
  { port: 119, protocol: "TCP", name: "nntp", description: "Network News Transfer Protocol." },
  { port: 123, protocol: "UDP", name: "ntp", description: "Network Time Protocol." },
  { port: 135, protocol: "TCP", name: "msrpc", description: "Microsoft RPC endpoint mapper." },
  { port: 137, protocol: "UDP", name: "netbios-ns", description: "NetBIOS Name Service." },
  { port: 138, protocol: "UDP", name: "netbios-dgm", description: "NetBIOS Datagram Service." },
  { port: 139, protocol: "TCP", name: "netbios-ssn", description: "NetBIOS Session Service." },
  { port: 143, protocol: "TCP", name: "imap", description: "IMAP mail." },
  { port: 161, protocol: "UDP", name: "snmp", description: "SNMP." },
  { port: 162, protocol: "UDP", name: "snmptrap", description: "SNMP traps." },
  { port: 389, protocol: "TCP/UDP", name: "ldap", description: "LDAP." },
  { port: 443, protocol: "TCP", name: "https", description: "HTTP over TLS." },
  { port: 445, protocol: "TCP", name: "microsoft-ds", description: "SMB over TCP." },
  { port: 465, protocol: "TCP", name: "smtps", description: "SMTP over TLS (deprecated submission port)." },
  { port: 514, protocol: "UDP", name: "syslog", description: "Syslog." },
  { port: 587, protocol: "TCP", name: "submission", description: "Mail submission (STARTTLS)." },
  { port: 636, protocol: "TCP", name: "ldaps", description: "LDAP over TLS." },
  { port: 853, protocol: "TCP/UDP", name: "dns-over-tls", description: "DNS over TLS." },
  { port: 873, protocol: "TCP", name: "rsync", description: "rsync." },
  { port: 989, protocol: "TCP", name: "ftps-data", description: "FTPS data." },
  { port: 990, protocol: "TCP", name: "ftps", description: "FTPS control." },
  { port: 993, protocol: "TCP", name: "imaps", description: "IMAP over TLS." },
  { port: 995, protocol: "TCP", name: "pop3s", description: "POP3 over TLS." },
  { port: 1080, protocol: "TCP", name: "socks", description: "SOCKS proxy." },
  { port: 1194, protocol: "UDP", name: "openvpn", description: "OpenVPN." },
  { port: 1433, protocol: "TCP", name: "ms-sql-s", description: "Microsoft SQL Server." },
  { port: 1521, protocol: "TCP", name: "oracle", description: "Oracle database." },
  { port: 1701, protocol: "UDP", name: "l2tp", description: "L2TP." },
  { port: 1723, protocol: "TCP", name: "pptp", description: "PPTP — legacy VPN." },
  { port: 1883, protocol: "TCP", name: "mqtt", description: "MQTT." },
  { port: 3306, protocol: "TCP", name: "mysql", description: "MySQL." },
  { port: 3389, protocol: "TCP", name: "rdp", description: "Remote Desktop Protocol." },
  { port: 5060, protocol: "TCP/UDP", name: "sip", description: "Session Initiation Protocol." },
  { port: 5222, protocol: "TCP", name: "xmpp-client", description: "XMPP client." },
  { port: 5269, protocol: "TCP", name: "xmpp-server", description: "XMPP server-to-server." },
  { port: 5432, protocol: "TCP", name: "postgresql", description: "PostgreSQL." },
  { port: 5672, protocol: "TCP", name: "amqp", description: "AMQP." },
  { port: 5900, protocol: "TCP", name: "vnc", description: "VNC." },
  { port: 6379, protocol: "TCP", name: "redis", description: "Redis." },
  { port: 8080, protocol: "TCP", name: "http-alt", description: "Common alternative HTTP." },
  { port: 8443, protocol: "TCP", name: "https-alt", description: "Common alternative HTTPS." },
  { port: 8883, protocol: "TCP", name: "mqtt-tls", description: "MQTT over TLS." },
  { port: 9200, protocol: "TCP", name: "elasticsearch", description: "Elasticsearch HTTP." },
  { port: 9418, protocol: "TCP", name: "git", description: "Git protocol." },
  { port: 27017, protocol: "TCP", name: "mongodb", description: "MongoDB." },
];

/** Search by port number, name, description or protocol (case-insensitive). */
export function searchPorts(query: string): PortEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return PORTS;
  return PORTS.filter((p) =>
    String(p.port) === q ||
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.protocol.toLowerCase().includes(q),
  );
}
