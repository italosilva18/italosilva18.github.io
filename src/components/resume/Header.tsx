import { ThemeToggle } from './ThemeToggle';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-heading text-lg font-semibold text-foreground">
          ISC<span className="text-accent">.</span>
        </span>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            asChild
          >
            <a
              href={`${import.meta.env.BASE_URL}cv-italo-costa.pdf`}
              download="Curriculo-Italo-Silva-Costa.pdf"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download CV</span>
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
