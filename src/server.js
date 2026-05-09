import express from 'express';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const publicDir = fileURLToPath(new URL('../public', import.meta.url));
const port = process.env.PORT || 3001;

const app = express();

app.use(express.static(publicDir, { extensions: ['html'] }));

app.get('/', (_request, response) => {
  response.sendFile(join(publicDir, 'pages/index.html'));
});

app.use((_request, response) => {
  response.status(404).type('text/plain; charset=utf-8').send('Not found');
});

app.listen(port, () => {
  console.log(`Teacher Thaís site running at http://localhost:${port}`);
});
