import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'M2M',
    role: 'Desenvolvedor de Software Júnior',
    period: 'Mai 2024 – Atual',
    description: [
      'Desenvolvimento de sistema CLI em Go para automação de relatórios gerenciais',
      'Criação de APIs (Python/FastAPI) e scripts para coleta e processamento de dados',
      'Desenvolvimento e manutenção de dashboards analíticos com Flutter',
    ],
    current: true,
  },
  {
    company: 'Destack Transportes',
    role: 'Desenvolvedor Freelancer – Sistema ADM',
    period: 'Jan 2025 – Atual',
    description: [
      'Projeto e desenvolvimento de sistema de análise e controle administrativo',
      'Criação de dashboards interativos e otimização de queries (SQL/NoSQL)',
      'Automação de processos e relatórios para suporte à gestão operacional',
    ],
    current: true,
  },
  {
    company: 'MpontoM',
    role: 'Analista de Suporte e Integração',
    period: 'Abr 2022 – Fev 2025',
    description: [
      'Integração de software (Windows/Linux) e suporte técnico N2/N3',
      'Monitoramento e análise de dados (SQL Server, PostgreSQL, MongoDB)',
      'Desenvolvimento de scripts e pequenas aplicações (Python, Go, PHP)',
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
                      <div className="flex items-center gap-2 text-accent">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-semibold">{exp.company}</span>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs bg-accent/20 text-accent rounded-full">
                            Atual
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
