import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Linguagens & Frameworks',
    icon: Code2,
    skills: [
      { name: 'Go (Echo, Fiber, gRPC)', highlight: true },
      { name: 'Python (FastAPI, Django, Flask)', highlight: true },
      { name: 'Flutter & Dart', highlight: false },
      { name: 'PHP', highlight: false },
      { name: 'JavaScript', highlight: false },
      { name: 'HTML5 / CSS3', highlight: false },
      { name: 'Tailwind CSS', highlight: false },
    ],
  },
  {
    title: 'Bancos de Dados',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', highlight: false },
      { name: 'SQL Server', highlight: false },
      { name: 'Oracle', highlight: false },
      { name: 'MongoDB', highlight: false },
      { name: 'SQLite', highlight: false },
      { name: 'SQL & PL/pgSQL', highlight: false },
    ],
  },
  {
    title: 'Ferramentas & Conceitos',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', highlight: false },
      { name: 'Docker', highlight: false },
      { name: 'APIs REST/gRPC', highlight: false },
      { name: 'Mensageria (RabbitMQ, MQTT, SQS)', highlight: false },
      { name: 'Monitoramento (Grafana, Prometheus)', highlight: false },
      { name: 'Visualização (Power BI)', highlight: false },
      { name: 'Linux & Bash Scripting', highlight: false },
      { name: 'Metodologias Ágeis', highlight: false },
    ],
  },
];

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div ref={ref} className="space-y-12">
          {/* Section Title */}
          <div className={`text-center space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Habilidades <span className="text-accent">Técnicas</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className={`p-6 bg-card rounded-xl border border-border ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${catIndex * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
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
                          ? 'bg-accent/20 text-accent'
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
