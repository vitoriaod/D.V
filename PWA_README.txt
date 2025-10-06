Arquivos gerados para transformar seu projeto em PWA:

- /mnt/data/manifest.json
- /mnt/data/sw.js
- /mnt/data/offline.html
- /mnt/data/index_film_pwa.html  (versão do index atualizada para registrar o service worker e linkar o manifest)

O que fazer:
1. Substitua ou renomeie index_film.html para index_film_pwa.html (ou ajuste o servidor para servir index_film_pwa.html como página inicial).
2. Sirva os arquivos por um servidor HTTP (PWA só funciona via HTTPS ou localhost). No VS Code com Live Server isso funciona em http://127.0.0.1:5500.
3. Verifique no DevTools -> Application que o manifest foi carregado e que o service worker está ativo.
4. Teste desconectando a internet: a página offline.html será mostrada para navegações quando estiver offline.

Observações:
- O manifest usa ./img/img1.png como ícone — você pode adicionar ícones square 192x192 e 512x512 nas mesmas paths para melhores resultados.
- Se quiser que o start_url seja '/', ajuste manifest.json.
