import { Github, Linkedin, Mail, MapPin, Phone, Download, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EMAIL = 'italosilva1418@gmail.com';
const PHONE_TEL = '+5571991655113';
const PHONE_DISPLAY = '(71) 99165-5113';
const LINKEDIN_URL = 'https://www.linkedin.com/in/i-s-c';
const GITHUB_URL = 'https://github.com/italosilva18';
const GISCTECH_URL = 'https://gisctech.com.br';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const cvHref = `${import.meta.env.BASE_URL}cv-italo-costa.pdf`;

  return (
    <footer id="contact" className="py-12 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Vamos <span className="text-accent">Conversar?</span>
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-medium text-emerald-100">
                Open to Backend Go · Python (Data/ETL) · Mobile Flutter roles
              </span>
            </div>
            <p className="text-primary-foreground/80 max-w-lg mx-auto">
              Salvador-based · 100% Remoto · Disponível para <strong>CLT</strong>, <strong>PJ</strong> ou <strong>contratos internacionais</strong>.
              Resposta em até 24h.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              {EMAIL}
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Salvador, Bahia, Brasil
            </span>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-transparent border-primary-foreground/30 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
              asChild
            >
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-transparent border-primary-foreground/30 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
              asChild
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-transparent border-primary-foreground/30 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
              asChild
            >
              <a href={GISCTECH_URL} target="_blank" rel="noopener noreferrer" aria-label="GiscTech">
                <Globe className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-transparent border-primary-foreground/30 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
              asChild
            >
              <a href={`mailto:${EMAIL}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 px-8"
              size="lg"
              asChild
            >
              <a href={cvHref} download="Curriculo-Italo-Silva-Costa.pdf">
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="text-center text-sm text-primary-foreground/60 pt-8 border-t border-primary-foreground/10">
            <p>© {currentYear} Ítalo da Silva Costa. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
