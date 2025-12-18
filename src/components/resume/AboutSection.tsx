import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Database, Zap } from 'lucide-react';

const specialties = [
  { icon: Code2, label: 'Go & Python', description: 'APIs de alta performance e sistemas escaláveis' },
  { icon: Database, label: 'Bancos de Dados', description: 'SQL & NoSQL, otimização de queries' },
  { icon: Zap, label: 'Automação', description: 'Dashboards e processos inteligentes' },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`space-y-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Sobre <span className="text-accent">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
            Backend Developer focado em construir sistemas de alta performance e automações inteligentes. 
            Especializado em Go e Python para criar APIs escaláveis e soluções robustas.
            Foco em construir APIs robustas (REST/gRPC), otimizar performance de bancos de dados (SQL & NoSQL) 
            e criar dashboards interativos que transformam dados em insights acionáveis.
          </p>

          {/* Specialties */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
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
                  <p className="text-sm text-muted-foreground">{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
