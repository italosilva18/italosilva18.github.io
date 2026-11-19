# Deploy — portfólio pessoal

## Origem e destino

- Repositório: `italosilva18/italosilva18.github.io`.
- Destino: `https://italosilva18.github.io/`.
- Publicação atual: GitHub Pages por workflow, origem `main`, path `/`.
- Workflow: `.github/workflows/deploy.yml`, disparado por push em `main` ou `workflow_dispatch`.
- Release preparada na branch `release/sites-20261030`, com SHA completo registrado pelo operador.

## Preparação e publicação

Após revisão, numa árvore limpa que contenha exatamente o SHA revisado:

```bash
npm ci
npm run lint
npx --no-install tsc --noEmit -p tsconfig.app.json
npm run build
release_sha=$(git rev-parse HEAD)
git ls-remote origin refs/heads/main
```

Compare o HEAD remoto com a base conhecida antes de avançar `main`. Preserve o WIP da árvore principal; use a worktree de release. O operador pode enviar o commit revisado à `main` por fast-forward quando a base remota continuar a mesma:

```bash
git push origin "$release_sha:refs/heads/main"
gh run list --repo italosilva18/italosilva18.github.io --workflow deploy.yml --commit "$release_sha" --limit 5
```

Acompanhe o run encontrado com `gh run watch RUN_ID --repo italosilva18/italosilva18.github.io --exit-status`. Registrar o SHA, run, resultado e asset público. O push dispara publicação pública; upload de artifact ou build local não confirma a disponibilidade no Pages.

## Verificação pública

No site publicado em Chrome desktop e mobile:

- Projetos: Destack aponta para `https://destacktransporte.com/`; GISC Tech descreve contato direto e stack React/TypeScript/Tailwind/Vite.
- Cabeçalho e rodapé: `Solicitar CV` abre o link de e-mail público com assunto. Não há promessa de download de PDF.
- Tema claro/escuro, botão de rolagem e links de contato funcionam sem overflow horizontal.
- Comparar o asset JS público ao asset de `dist/` do SHA release.

## Rollback

Antes do push, registrar o SHA remoto anterior e o último run de Pages bem-sucedido. Base observada em 30/10/2026: `f93d841d27a658ca6e0286c95fde777f927b9495`. Revalidar esse estado no momento da publicação.

Se a release precisar voltar, usar uma worktree limpa em `origin/main`, reverter o commit da release e enviar o novo commit a `main` (sem force push):

```bash
git revert --no-edit SHA_DA_RELEASE
git push origin HEAD:refs/heads/main
```

Acompanhar o novo workflow e confirmar o asset e a navegação públicos restaurados. Se a release tiver mais de um commit, revisar a sequência de reversão antes de executá-la.
