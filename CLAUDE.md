# Home (linktree) da Cumbuca Criativa — Guia para Claude

Página única (linktree) com foto da equipe, logo e botões de link — inspirada no [beacons.ai/cumbucacriativa](https://beacons.ai/cumbucacriativa), no visual do [Joga na Cumbuca](../Joga%20na%20Cumbuca/) (mesma paleta/tipografia). HTML/CSS puro, sem framework, sem build.

**Produção WordPress:** https://cumbucacriativa.gt.tc/ (Página Inicial Estática no WordPress)
**Mirror GitHub Pages:** https://cumbucacriativa.github.io/ 
**Repo:** https://github.com/cumbucacriativa/cumbucacriativa.github.io
**FTP WordPress:** Credenciais em `_docs/cumbuca-ftp-gttc.md` (Host `ftpupload.net`)

Esse repo também guarda o `ads.txt` do AdSense na raiz (obrigatório ficar em `cumbucacriativa.github.io/ads.txt`).

## Regra: todo projeto/link novo da Cumbuca entra aqui

Ver a regra detalhada em [`_Dev/Cumbuca/CLAUDE.md`](../CLAUDE.md) — resumindo: qualquer coisa nova que a Cumbuca publique (produto, rede social, campanha, link de doação) deve virar um botão em `index.html`, dentro de `<nav class="links">`.

## Deploy e Publicação

1. **WordPress (`cumbucacriativa.gt.tc`)**:
   - A página existe no menu **Páginas** do WordPress (`Home`) e está definida como *Página Inicial Estática*.
   - O conteúdo do HTML fica em `htdocs/templates/home/index.html` e os assets em `htdocs/assets/`.
   - Upload feito via FTP (credenciais em `_docs/cumbuca-ftp-gttc.md`).

2. **GitHub Pages (`cumbucacriativa.github.io`)**:
   - Commit e push via Git normalmente usando o token em `_docs/github-cumbuca-criativa.md`.

## Estrutura

- `index.html` — a página em si (links usam caminhos relativos `joganacumbuca/` e `pix/`)
- `assets/css/style.css` — estilo (mesma paleta do Joga na Cumbuca)
- `assets/img/` — logos, foto da equipe (`foto-equipe.jpg`) e ícones dos links
- `scratch/` — scripts auxiliares de deploy e teste

### Seção "Conheça os Cumbuquers" (bolhas dos integrantes)

Cada integrante é uma bolha circular com foto que linka pro Instagram da pessoa — layout tipo "bubble chart" empacotado. Fotos ficam baixadas e versionadas em `assets/img/cumbuquers/`.
