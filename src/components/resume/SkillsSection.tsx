import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Database, Wrench, Network, ShieldCheck, Sparkles } from 'lucide-react';

type Skill = { name: string; highlight?: boolean };
type Category = { title: string; icon: typeof Code2; skills: Skill[] };

const skillCategories: Category[] = [
  {
    title: 'Backend Go (Principal)',
    icon: Code2,
    skills: [
      { name: 'Go (Gin · Fiber · net/http)', highlight: true },
      { name: 'Goroutines & Channels', highlight: true },
      { name: 'context.Context · errgroup · sync', highlight: true },
      { name: 'Worker pools & rate limiting' },
      { name: 'JSON-RPC 2.0 & Unix sockets' },
      { name: 'testing · testify · httptest · table-driven' },
      { name: 'Static binaries (CGO_ENABLED=0)' },
      { name: 'Go Modules · SemVer · pprof' },
    ],
  },
  {
    title: 'Python (Dados, ETL & IA)',
    icon: Sparkles,
    skills: [
      { name: 'Pipelines ETL Multi-ERP', highlight: true },
      { name: 'Django & Django REST Framework', highlight: true },
      { name: 'FastAPI · Automação & Ingestão', highlight: true },
      { name: 'LLMs (OpenAI · Anthropic · Gemini · DeepSeek)' },
      { name: 'MCP Servers · RAG · Busca BM25' },
      { name: 'Processamento Documental & OCR' },
      { name: 'Sanitização & Deduplicação SHA-256' },
    ],
  },
  {
    title: 'Bancos SQL & NoSQL + Mensageria',
    icon: Database,
    skills: [
      { name: 'MongoDB (2,3M+ docs · replica set · aggregation)', highlight: true },
      { name: 'PostgreSQL 16 (pgx/v5 · FTS/tsvector · ACID)', highlight: true },
      { name: 'RabbitMQ (DLQ · Outbox Pattern · Idempotência)', highlight: true },
      { name: 'Redis (cache · sessões · rate-limit)' },
      { name: 'MySQL · SQLite' },
      { name: 'Extração Oracle · Firebird · SQL Server' },
    ],
  },
  {
    title: 'Mobile Flutter (iOS & Android) & Web',
    icon: Network,
    skills: [
      { name: 'Flutter 3 & Dart 3 (iOS & Android)', highlight: true },
      { name: 'Riverpod · GoRouter · Dio', highlight: true },
      { name: 'JWT Access/Refresh & Multi-Flavor', highlight: true },
      { name: 'Resiliência Offline & Contratos OpenAPI' },
      { name: 'React (Vite · Next.js) · TypeScript' },
      { name: 'Angular · Tailwind CSS' },
    ],
  },
  {
    title: 'DevOps, Cloud & Observabilidade',
    icon: Wrench,
    skills: [
      { name: 'Docker · Docker Compose · Kubernetes (DOKS)', highlight: true },
      { name: 'Traefik v3.6 · NGINX · Let\'s Encrypt', highlight: true },
      { name: 'Prometheus · Grafana · Alertmanager', highlight: true },
      { name: 'GitHub Actions (CI/CD · GHCR) · Gitea Runner' },
      { name: 'MinIO (S3-compatible) · Cloudflare DNS' },
      { name: 'Linux · Túneis SSH / TCP · OpenVPN' },
      { name: 'Structured logs (slog · zap) · 5 exporters' },
    ],
  },
  {
    title: 'Segurança & Engenharia',
    icon: ShieldCheck,
    skills: [
      { name: 'JWT (HS256/RS256) · OAuth2 · RBAC granular', highlight: true },
      { name: 'Mitigação IDOR · XSS · SSRF · Injection', highlight: true },
      { name: 'Rate limiting por rota · CORS whitelist' },
      { name: 'Token revocation & sessões multi-tenant' },
      { name: 'TLS · SPF/DKIM/DMARC' },
      { name: 'Clean Architecture · SOLID · Code Review' },
    ],
  },
];

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className="space-y-12">
          <div className={`text-center space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Habilidades <span className="text-accent">Técnicas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Foco principal em <strong className="text-accent">Go</strong> para backends de alta performance,
              microsserviços e pipelines de dados em produção.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className={`p-6 bg-card rounded-xl border border-border hover:border-accent/40 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${catIndex * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-sm rounded-md font-medium ${
                        skill.highlight
                          ? 'bg-accent/20 text-accent ring-1 ring-accent/30'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
