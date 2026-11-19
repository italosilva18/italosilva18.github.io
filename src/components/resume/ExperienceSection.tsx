import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar } from 'lucide-react';

type Experience = {
  company: string;
  companyMeta?: string;
  role: string;
  period: string;
  description: string[];
  stack?: string[];
  current: boolean;
};

const experiences: Experience[] = [
  {
    company: 'Pacífico Serviços em Informática LTDA',
    companyMeta: 'CNPJ 64.026.978/0001-05',
    role: 'Desenvolvedor de Software (Go · Dados · Mobile Flutter)',
    period: 'Jan 2026 – Atual',
    description: [
      'Desenvolvimento e operação da suíte modular Oceano para redes de varejo (módulos Atlas, ComoFoi, Feitto, Farol e Radar) em oceanoapp.com.br',
      'Backends Go (Gin) + pipeline ETL multi-ERP (Oracle, Firebird, PostgreSQL, MySQL) → RabbitMQ → MongoDB com 2,3M+ documentos',
      'Painel administrativo unificado (oceano-gestor) com RBAC granular e modules_access por loja/unidade',
      'Dashboards e módulos mobile em Flutter/Dart (iOS e Android) + CLIs em Go para automação de relatórios',
      'Operação híbrida: VPS dedicado (Docker Compose + Traefik) e cluster Kubernetes gerenciado (DigitalOcean DOKS)',
    ],
    stack: ['Go', 'Gin', 'Python ETL', 'RabbitMQ', 'MongoDB', 'PostgreSQL', 'Flutter', 'Docker', 'Kubernetes'],
    current: true,
  },
  {
    company: 'GiscTech',
    role: 'Fundador & Lead Software Engineer',
    period: '2022 – Atual',
    description: [
      'Arquitetura full-cycle (Backend Go/Python, SQL/NoSQL, Web e Mobile Flutter iOS/Android) de 10+ sistemas B2B em produção',
      'Oceano / Atlas (Retail Analytics): 4 microsserviços Go (~100 endpoints), ETL de 55+ ERPs via RabbitMQ (Outbox/DLQ) → MongoDB, Prometheus/Grafana e hardening de segurança (IDOR, JWT, rate limit)',
      'Apps Mobile iOS & Android + SaaS: MyPila (Go/Fiber + PostgreSQL 16 + Flutter 3), Feitto (Go + MongoDB 7 replica set + Flutter 3), BarberGo e Sancus',
      'Context-Memory MCP & aimemd: ingestão Python + PostgreSQL FTS + daemon Go BM25 em RAM (0,33 ms mediana) e DBPonte (túnel TCP/SSH multi-arch)',
      'FabraFarma (Python/Django + assistente LLM → Go v2 + Postgres 16 + MinIO) e Polypod (open-source em Go para 16 LLMs)',
    ],
    stack: ['Go', 'Python', 'PostgreSQL', 'MongoDB', 'Flutter iOS/Android', 'RabbitMQ', 'Docker', 'Traefik', 'Prometheus'],
    current: true,
  },
  {
    company: 'Destack Transportes',
    role: 'Desenvolvedor Backend Freelancer (Go + Python)',
    period: 'Jan 2025 – Atual',
    description: [
      'Backend Go para sistema de análise e controle administrativo de transportadora',
      'Emissão e gestão de documentos fiscais (CT-e/MDF-e) com integração SEFAZ',
      'Otimização de queries SQL/NoSQL e automação de relatórios gerenciais',
    ],
    stack: ['Go', 'Python', 'PostgreSQL', 'Docker'],
    current: true,
  },
  {
    company: 'MpontoM',
    role: 'Analista de Suporte e Integração',
    period: 'Abr 2022 – Fev 2025',
    description: [
      'Integração de software (Windows/Linux) e suporte técnico N2/N3 em ambiente cliente',
      'Monitoramento e análise de dados em SQL Server, PostgreSQL e MongoDB',
      'Desenvolvimento de scripts e microaplicações em Python, Go e PHP para automação interna',
    ],
    stack: ['Go', 'Python', 'PHP', 'SQL Server', 'PostgreSQL', 'Linux'],
    current: false,
  },
  {
    company: 'Hospital do Exército',
    role: 'Auxiliar de Licitação · Setor de Aquisição',
    period: '2013 – 2020',
    description: [
      '7 anos de atuação no setor público — base de disciplina operacional e atenção a processos',
      'Operação dos sistemas SIAFI / SIASG / Comprasnet, gestão de contratos em saúde',
      'Elaboração de atas em sessões públicas (Pregão, Dispensa, Inexigibilidade) e publicação de editais',
    ],
    current: false,
  },
];

export const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div ref={ref} className="space-y-12">
          {/* Section Title */}
          <div className={`text-center space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Experiência <span className="text-accent">Profissional</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`relative mb-12 last:mb-0 ${
                  isVisible
                    ? index % 2 === 0
                      ? 'animate-fade-in-left'
                      : 'animate-fade-in-right'
                    : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${
                      exp.current ? 'bg-accent animate-pulse-glow' : 'bg-muted-foreground'
                    }`}
                  />

                  {/* Card */}
                  <div className="ml-8 md:ml-0 p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group">
                    <div className="space-y-3">
                      <div className={`flex flex-col gap-1 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        <div className="flex items-center gap-2 text-accent flex-wrap">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs bg-accent/20 text-accent rounded-full">
                              Atual
                            </span>
                          )}
                        </div>
                        {exp.companyMeta && (
                          <span className="text-[11px] text-muted-foreground/70 font-mono tracking-tight">
                            {exp.companyMeta}
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </div>
                      <ul className="space-y-2 pt-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className={`text-sm text-muted-foreground flex items-start gap-2 ${
                              index % 2 === 0 ? 'md:justify-end' : ''
                            }`}
                          >
                            <span className="text-accent mt-1.5 shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.stack && exp.stack.length > 0 && (
                        <div
                          className={`flex flex-wrap gap-1.5 pt-3 ${
                            index % 2 === 0 ? 'md:justify-end' : ''
                          }`}
                        >
                          {exp.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
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
