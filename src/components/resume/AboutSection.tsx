import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Network, Rocket } from 'lucide-react';

const specialties = [
  {
    icon: Code2,
    label: 'Backend Go & Python (Dados)',
    description:
      'Microsserviços concorrentes em Go (Gin/Fiber), daemons sub-milissegundo (aimemd 0,33 ms) e pipelines ETL multi-ERP em Python.',
  },
  {
    icon: Network,
    label: 'SQL & NoSQL em Escala',
    description:
      'PostgreSQL 16 (pgx/v5, multi-tenant, FTS), MongoDB com 2,3M+ documentos, Redis e extração de Oracle, Firebird e SQL Server.',
  },
  {
    icon: Rocket,
    label: 'Mobile Flutter (iOS & Android) + Ops',
    description:
      'Apps nativos iOS/Android em Flutter 3 (Riverpod, GoRouter, Dio) integrados às próprias APIs, com deploy Docker, K8s e Prometheus.',
  },
];

const stats = [
  { value: '4+', label: 'anos focado em Go' },
  { value: '10+', label: 'sistemas em produção' },
  { value: '2,3M+', label: 'docs MongoDB + SQL' },
  { value: '55+', label: 'ERPs integrados' },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div ref={ref} className={`space-y-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Sobre <span className="text-accent">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="space-y-5 max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou <strong className="text-foreground">Tecnólogo em ADS</strong> e fundador da{' '}
              <a
                href="https://gisctech.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GiscTech
              </a>
              , empresa de software B2B com mais de <strong className="text-foreground">10 sistemas em produção</strong>{' '}
              atendendo clientes em varejo, condomínios, saúde, jurídico e fiscal.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Combino <strong className="text-accent">Go (Gin · Fiber)</strong> para APIs concorrentes e daemons de baixa latência,{' '}
              <strong className="text-foreground">Python</strong> para engenharia de dados, pipelines ETL multi-ERP e IA/MCP,{' '}
              bancos <strong className="text-foreground">SQL e NoSQL</strong> (PostgreSQL 16, MongoDB 2,3M+ docs, Redis, Oracle/Firebird) e{' '}
              <strong className="text-accent">Flutter / Dart (iOS &amp; Android)</strong> para entregar produtos ponta a ponta com Docker, Kubernetes e Prometheus/Grafana.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Antes da TI, foram <strong className="text-foreground">7 anos no Exército</strong> — disciplina
              operacional que combino com mentalidade de produto. Entrego do código ao deploy, e o que mais for
              preciso para o sistema funcionar em produção.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center p-5 rounded-xl bg-card border border-border ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-4">
            {specialties.map((specialty, index) => (
              <div
                key={specialty.label}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <specialty.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{specialty.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
