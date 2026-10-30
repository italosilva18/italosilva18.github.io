# Publicação — portfólio pessoal — 30/10/2026

## Resultado público

- URL: https://italosilva18.github.io/ — HTTP 200 conferido às 06:22:21 UTC.
- Fonte funcional: `74298fdd0c7c3c53fb7c55ee799436e16b543dcb`.
- Branch publicada: `main`, avançada sem force a partir de `f93d841d27a658ca6e0286c95fde777f927b9495`.
- Conta GitHub ativa conferida antes do push: `italosilva18`.
- Workflow [41013532661 — Deploy to GitHub Pages](https://github.com/italosilva18/italosilva18.github.io/actions/runs/41013532661): **success**, build e deploy do SHA funcional acima.
- Deploy concluído às 06:21:32 UTC; status `success` registrado às 06:21:34 UTC.
- Deployment GitHub Pages: `7432147208`, ambiente `github-pages`, mesmo SHA.

## Artefato público

- Asset: https://italosilva18.github.io/assets/index-ChWN9sdP.js — HTTP 200.
- SHA-256: `f61304c66596a0fd47f6c61d4f3b3dffacdfd95f3ca7ca0381fd7a1f0c425a2c`.
- O hash público coincide com o build local revisado.
- Conteúdo conferido no arquivo público: domínio `https://destacktransporte.com/` e “Solicitar CV” presentes; domínio antigo Destack e caminho `cv-italo-costa.pdf` ausentes.

## Verificação no Chrome público

Chrome 156 em sessão própria, desktop 1440 × 1000 e mobile 390 × 844. Hero, projetos, links de currículo e tema verificados no site público. `documentWidth == innerWidth` nas duas larguras e nenhum erro JS observado. Os dois links de currículo mantêm o e-mail público e o assunto de solicitação; nenhuma mensagem foi enviada.

Evidências locais fora do Git: `apps/italosilva18-site/output/playwright/publication-20261030/`, incluindo `evidence.json` com HTTP, hash e status do deployment, e capturas desktop/mobile.

## Registro separado da fonte funcional

Este registro é um commit posterior de documentação na branch `release/sites-20261030`; não altera nem reescreve o commit funcional publicado em `main`. Publicar a branch de evidência não dispara o workflow, configurado somente para `main`. O conteúdo funcional e os checks locais estão em `RELEASE-2026-10-30.md`.

WIP original preservado: as 8 mudanças rastreadas existentes em `apps/italosilva18-site` permanecem fora da release. Não houve mudança de código depois do aceite do reviewer. Permanecem as dívidas documentadas: 5 pacotes sinalizados no audit (3 moderate, 2 high, 0 critical) e 7 warnings de fast refresh no lint.

## Rollback disponível

Antes desta publicação, `main` e o último Pages bem-sucedido apontavam para `f93d841d27a658ca6e0286c95fde777f927b9495`; run anterior [20453955676](https://github.com/italosilva18/italosilva18.github.io/actions/runs/20453955676), deployment `3522859018`.

Se o operador decidir reverter, usar uma nova worktree limpa a partir de `origin/main`, revalidar o HEAD remoto e executar o revert sem force push:

```bash
git fetch origin main
git worktree add -b rollback/pages-20261030 /tmp/italosilva18-pages-rollback-20261030 origin/main
cd /tmp/italosilva18-pages-rollback-20261030
git revert --no-edit 74298fdd0c7c3c53fb7c55ee799436e16b543dcb
git push origin HEAD:refs/heads/main
```

Acompanhar o novo workflow e verificar o conteúdo público. Asset anterior observado: `index-B9W5MbSb.js`, SHA-256 `fd1ce4798271073c638829b9b1b3b4d85845fa4cf8fec7a04ae7677e3fa6daa3`. O rollback não foi executado nesta publicação.
