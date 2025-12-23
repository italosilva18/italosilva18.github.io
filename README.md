# Portfolio - Italo da Silva Costa

Portfolio pessoal desenvolvido com React, TypeScript e Tailwind CSS.

**Live**: [italosilva18.github.io](https://italosilva18.github.io)

## Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estatica
- **Vite** - Build tool
- **Tailwind CSS** - Estilizacao
- **shadcn/ui** - Componentes UI
- **Lucide React** - Icones
- **GitHub Actions** - CI/CD

## Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos
├── components/
│   ├── resume/      # Componentes do portfolio
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   └── ui/          # Componentes shadcn/ui
├── hooks/           # Custom hooks
├── lib/             # Utilitarios
├── pages/           # Paginas
└── main.tsx         # Entry point
```

## Desenvolvimento Local

```bash
# Clonar repositorio
git clone https://github.com/italosilva18/italosilva18.github.io.git

# Instalar dependencias
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para producao
npm run build

# Preview do build
npm run preview
```

## Deploy

O deploy e feito automaticamente via GitHub Actions quando ha push na branch `main`.

O workflow:
1. Faz checkout do codigo
2. Instala Node.js 20
3. Instala dependencias (`npm ci`)
4. Build do projeto (`npm run build`)
5. Deploy para GitHub Pages

## Funcionalidades

- Design responsivo (mobile-first)
- Tema claro/escuro
- Animacoes suaves
- Download de CV
- Links para redes sociais
- Secoes: Hero, Sobre, Experiencia, Projetos, Skills, Contato

## Autor

**Italo da Silva Costa**
- Backend Developer | Go & Python
- LinkedIn: [i-s-c](https://linkedin.com/in/i-s-c)
- GitHub: [italosilva18](https://github.com/italosilva18)
- Email: italosilva14@hotmail.com

## Licenca

MIT
