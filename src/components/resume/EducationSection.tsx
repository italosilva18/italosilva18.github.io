import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Calendar, Award, Globe } from 'lucide-react';

const education = [
  {
    institution: 'UniRuy Wyden',
    degree: 'Análise e Desenvolvimento de Sistemas',
    period: 'Concluído em 2020',
    description: 'Formação técnica focada em desenvolvimento de software, banco de dados e engenharia de sistemas.',
  },
];

const certifications = [
  'Python: Interface Gráfica (Fund. Bradesco, 2024)',
  'Python: Orientado a Objetos (Fund. Bradesco, 2024)',
  'Python: Estrutura de Dados (Fund. Bradesco, 2023)',
  'Python: Fundamentos (Fund. Bradesco, 2023)',
  'PCAP: Programming Essentials (Cisco, 2023)',
  'Lógica de Programação (Fund. Bradesco, 2024)',
  'Projetos de Sistemas de TI (Fund. Bradesco, 2023)',
  'Git & GitHub (Simulador Entr., 2022)',
  'MongoDB & NoSQL (Simulador Entr., 2022)',
  'Introdução ao PHP (DIO, 2023)',
];

const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário (Leitura Técnica)' },
];

export const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="education" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div ref={ref} className="space-y-12">
          {/* Section Title */}
          <div className={`text-center space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Formação <span className="text-accent">Acadêmica</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div
              className={`p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-lg bg-accent/10 text-accent">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">
                  {education[0].institution}
                </h3>
                <p className="font-medium text-accent">{education[0].degree}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{education[0].period}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {education[0].description}
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div
              className={`p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '150ms' }}
            >
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-lg bg-accent/10 text-accent">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">
                  Certificações
                </h3>
                <ul className="space-y-2 max-h-64 overflow-y-auto">
                  {certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent mt-0.5">•</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div
            className={`p-6 bg-card rounded-xl border border-border max-w-md mx-auto ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">
                Idiomas
              </h3>
            </div>
            <div className="flex justify-center gap-8">
              {languages.map((lang) => (
                <div key={lang.name} className="text-center">
                  <p className="font-medium text-foreground">{lang.name}</p>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
