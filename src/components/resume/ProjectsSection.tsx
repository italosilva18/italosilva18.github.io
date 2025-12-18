import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Truck, ShoppingBag, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Destack Transporte',
    description: 'Sistema completo de gestão para transportadora com dashboards analíticos, controle de documentos fiscais (CT-e/MDF-e), relatórios gerenciais e automação de processos.',
    icon: Truck,
    tags: ['Go', 'Python', 'PostgreSQL', 'Docker'],
    link: 'https://destacktransporte.site/',
  },
  {
    title: 'FabraFarma',
    description: 'E-commerce farmacêutico completo com catálogo de produtos, sistema de pedidos, integração WhatsApp e painel administrativo para gestão de estoque e vendas.',
    icon: ShoppingBag,
    tags: ['Python', 'Django', 'PostgreSQL', 'E-commerce'],
    link: 'https://www.fabrafarma.com.br/',
  },
  {
    title: 'GISC Tech',
    description: 'Website institucional da empresa de tecnologia com apresentação de serviços, portfólio de projetos, formulário de contato e design responsivo moderno.',
    icon: Globe,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
    link: 'https://www.gisctech.com.br/',
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
                        Visitar Site
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
