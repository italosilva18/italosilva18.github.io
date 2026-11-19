import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, ShoppingBag, Globe, Terminal, BarChart3, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Project = {
  title: string;
  description: string;
  icon: typeof Globe;
  tags: string[];
  link: string;
  linkLabel?: string;
};

const projects: Project[] = [
  {
    title: 'Suíte Oceano & Atlas — Analytics & ETL',
    description:
      '4 microsserviços em Go (Gin) (~100 endpoints) + pipeline ETL multi-ERP (55+ bancos legados: Oracle, Firebird, Postgres, MySQL) via RabbitMQ (Outbox/DLQ) → MongoDB com 2,3M+ documentos e dashboards Flutter.',
    icon: BarChart3,
    tags: ['Go', 'Python ETL', 'RabbitMQ', 'MongoDB', 'Flutter'],
    link: 'https://app.oceanoapp.com.br',
    linkLabel: 'Ver Plataforma',
  },
  {
    title: 'Context-Memory MCP & aimemd',
    description:
      'Pipeline Python (ingestão incremental SHA-256 + sanitização) + Full-Text Search em PostgreSQL pareado ao daemon aimemd em Go (BM25 em RAM via Unix socket/MCP), reduzindo a latência mediana de 7,3 ms para 0,33 ms.',
    icon: Terminal,
    tags: ['Go', 'Python', 'PostgreSQL FTS', 'MCP', 'BM25'],
    link: 'https://github.com/italosilva18',
    linkLabel: 'Ver Perfil GitHub',
  },
  {
    title: 'MyPila · Feitto · Apps Mobile',
    description:
      'Produtos SaaS multi-tenant com APIs Go (Fiber/Gin), PostgreSQL 16 (pgx/v5), MongoDB 7 replica set, MinIO S3 e aplicativos nativos Flutter 3 (iOS & Android) com Riverpod, GoRouter e Dio.',
    icon: Briefcase,
    tags: ['Flutter iOS/Android', 'Go', 'PostgreSQL', 'MongoDB', 'Riverpod'],
    link: 'https://gisctech.com.br',
    linkLabel: 'Sobre os produtos',
  },
  {
    title: 'DBPonte — Túnel TCP & Agente Windows',
    description:
      'Conectividade segura a bancos SQL/NoSQL remotos (Oracle, Firebird, Postgres, SQL Server, MongoDB) via binários Go CGO_ENABLED=0 (x86/x64/ARM64), serviço Windows nativo e ponte SSH sem abrir portas em firewall.',
    icon: Globe,
    tags: ['Go', 'TCP/SSH', 'Windows Service', 'SQL/NoSQL', 'Python QA'],
    link: 'https://gisctech.com.br',
    linkLabel: 'Arquitetura GiscTech',
  },
  {
    title: 'Polypod — Gateway CLI de IA',
    description:
      'Open-source escrito 100% em Go (v0.5.0, 92 pacotes). Gateway unificado para 16 provedores de LLM (OpenAI, Anthropic, DeepSeek, Gemini, Groq, OpenRouter) com streaming, retry/backoff, cache e GitHub Actions.',
    icon: Terminal,
    tags: ['Go', 'CLI', 'LLMs', 'Concorrência', 'Open Source'],
    link: 'https://github.com/italosilva18',
    linkLabel: 'Ver no GitHub',
  },
  {
    title: 'FabraFarma & Destack Transporte',
    description:
      'FabraFarma: e-commerce farmacêutico evoluído de Python/Django + assistente LLM para API Go + PostgreSQL 16 + MinIO + WhatsApp. Destack: gestão de CT-e/MDF-e e relatórios em Go, Python e PostgreSQL.',
    icon: ShoppingBag,
    tags: ['Python/Django', 'Go', 'PostgreSQL 16', 'MinIO S3', 'Docker'],
    link: 'https://www.fabrafarma.com.br/',
    linkLabel: 'Visitar FabraFarma',
  },
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div ref={ref} className="space-y-12">
          {/* Section Title */}
          <div className={`text-center space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Projetos <span className="text-accent">Destacados</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="p-3 w-fit rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <project.icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-4 flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {project.linkLabel ?? 'Visitar Site'}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
