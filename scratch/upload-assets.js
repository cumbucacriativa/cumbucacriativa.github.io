const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.GH_TOKEN;
const REPO = 'cumbucacriativa/cumbucacriativa.github.io';
const BASE = 'G:/Meu Drive/CLIENTES/_Dev/Cumbuca/Home';

const files = [
  'assets/img/foto-equipe.jpg',
  'assets/img/logo-claro.png',
  'assets/img/dado.svg',
  'assets/img/icon-tiktok.svg',
  'assets/img/icon-youtube.svg',
  'assets/img/icon-instagram-dark.svg',
  'assets/img/icon-whatsapp.svg',
  'assets/img/icon-pix.svg',
  'assets/img/icone-claro.png',
];

function put(filePath) {
  return new Promise((resolve, reject) => {
    const content = fs.readFileSync(path.join(BASE, filePath)).toString('base64');
    const body = JSON.stringify({ message: `Adiciona ${filePath}`, content });
    const req = https.request({
      hostname: 'api.github.com',
      path: `/repos/${REPO}/contents/${filePath}`,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'cumbuca-home-uploader',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    }, (res) => {
      let data = '';
      res.on('data', (c) => data += c);
      res.on('end', () => resolve({ filePath, status: res.statusCode }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

(async () => {
  for (const f of files) {
    const r = await put(f);
    console.log(r.filePath, r.status);
  }
})();
