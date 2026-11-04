// Throwaway prototype server for K for Contact UI variants
// Usage: node prototype/serve.mjs
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PORT = Number(process.env.PORT) || 4173;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/manifest+json; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
};

createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${PORT}`);
  const filePath =
    url.pathname === '/manifest.json'
      ? join(__dirname, 'manifest.json')
      : join(__dirname, 'k-for-contact-prototype.html');

  try {
    const content = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': MIME[extname(filePath)] || 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    });
    res.end(content);
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  }
}).listen(PORT, () => {
  console.log(`\n✨ K for Contact UI Prototype running at:`);
  console.log(`   Variant A (Warm Community Pass):      http://localhost:${PORT}/?variant=A`);
  console.log(`   Variant B (Dual-Mode Civic Workspace): http://localhost:${PORT}/?variant=B`);
  console.log(`   Variant C (Context-Adaptive Bento):    http://localhost:${PORT}/?variant=C\n`);
});
