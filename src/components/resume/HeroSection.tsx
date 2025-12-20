import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import profilePhoto from '@/assets/profile-photo.jpeg';

export const HeroSection = () => {
  const { displayedText: nameText, isComplete: nameComplete } = useTypingEffect(
    'Italo da Silva Costa',
    100,
    500
  );
  const { displayedText: roleText } = useTypingEffect(
    'Backend Developer | Go & Python',
    50,
    nameComplete ? 200 : 10000
  );

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center relative px-4 pt-20">
      <div className="text-center space-y-8 animate-fade-in-up">
        {/* Profile Photo */}
        <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/50 to-primary/30 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
          <img
            src={profilePhoto}
            alt="Italo da Silva Costa"
            className="relative w-full h-full rounded-full object-cover border-4 border-accent/30 shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Name with typing effect */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground">
            {nameText}
            <span className="border-r-2 border-accent animate-typing-cursor ml-1" />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body min-h-[28px]">
            {roleText}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-110"
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
            className="rounded-full w-12 h-12 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-110"
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
            className="rounded-full w-12 h-12 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-110"
            asChild
          >
            <a href="mailto:italosilva14@hotmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-label="Scroll to content"
      >
        <span className="text-sm font-body">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-scroll-indicator" />
      </button>
    </section>
  );
};
