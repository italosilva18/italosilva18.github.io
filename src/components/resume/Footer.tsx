import { Github, Linkedin, Mail, MapPin, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-italo-costa.pdf';
    link.download = 'CV-Italo-Silva-Costa.pdf';
    link.click();
  };

  return (
    <footer id="contact" className="py-12 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          {/* Contact Info */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Vamos <span className="text-accent">Conversar?</span>
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto">
              Estou disponível para novas oportunidades, projetos freelancer ou apenas para trocar ideias sobre tecnologia.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="mailto:italosilva14@hotmail.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              italosilva14@hotmail.com
            </a>
            <a
              href="tel:+5571991655113"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              (71) 99165-5113
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Salvador, Bahia, Brasil
            </span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-transparent border-primary-foreground/30 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
              asChild
            >
              <a
                href="https://linkedin.com/in/i-s-c"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-transparent border-primary-foreground/30 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/italosilva18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-transparent border-primary-foreground/30 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
              asChild
            >
              <a href="mailto:italosilva14@hotmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Download CV Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleDownloadCV}
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 px-8"
              size="lg"
            >
              <Download className="h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/60 pt-8 border-t border-primary-foreground/10">
            <p>© {currentYear} Ítalo da Silva Costa. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
