import { Header } from '@/components/resume/Header';
import { HeroSection } from '@/components/resume/HeroSection';
import { AboutSection } from '@/components/resume/AboutSection';
import { ExperienceSection } from '@/components/resume/ExperienceSection';
import { ProjectsSection } from '@/components/resume/ProjectsSection';
import { SkillsSection } from '@/components/resume/SkillsSection';
import { EducationSection } from '@/components/resume/EducationSection';
import { Footer } from '@/components/resume/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
