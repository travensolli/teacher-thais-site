# Teacher Thaís - Website

Site profissional para Teacher Thaís, professora de inglês em Jacareí – SP. Desenvolvido com HTML5, CSS modular e JavaScript vanilla.

## 📋 Requisitos

- Node.js 16+
- npm ou yarn

## 🚀 Instalação Rápida

```bash
# 1. Clonar repositório
git clone <seu-repositorio>
cd teacher-thais-site

# 2. Instalar dependências
npm install

# 3. Iniciar servidor de desenvolvimento
npm run dev

# 4. Abrir no navegador
# http://localhost:3000
```

## 📁 Estrutura do Projeto

```
teacher-thais-site/
├── src/
│   └── server.js              # Servidor Express
├── public/
│   ├── pages/
│   │   └── index.html         # Página principal
│   ├── privacy.html           # Política de Privacidade
│   ├── terms.html             # Termos de Uso
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css       # Imports centralizados
│   │   │   ├── base.css       # Reset, variáveis, estilos base
│   │   │   ├── components.css # Navegação, botões, forms
│   │   │   └── sections.css   # Seções específicas
│   │   ├── js/
│   │   │   ├── main.js        # Inicialização
│   │   │   ├── data/
│   │   │   │   └── site-data.js      # Dados centralizados
│   │   │   └── dom/
│   │   │       ├── dom-utils.js      # Utilitários
│   │   │       ├── render-sections.js # Renderização dinâmica
│   │   │       └── ui-interactions.js # Interatividade
│   │   ├── icons/
│   │   │   └── favicon.svg
│   │   └── seo/
│   │       └── og-image.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── .eslintrc.json             # Configuração ESLint
├── .prettierrc.json           # Configuração Prettier
├── .gitignore
└── package.json
```

## 🛠️ Scripts Disponíveis

```bash
# Iniciar servidor em modo watch (desenvolvimento)
npm run dev

# Iniciar servidor normal
npm start

# Validar código com ESLint
npm run lint

# Formatar código com Prettier
npm run format
```

## 🎨 Customização

### Editar Dados do Site

Todos os dados dinâmicos estão centralizados em `public/assets/js/data/site-data.js`:

```javascript
const SITE = {
  name: 'Teacher Thaís',
  firstName: 'Thaís',
  email: 'thais@email.com',
  whatsapp: '5512999999999',
  bookingLink: 'https://calendly.com/teacherthais',
  // ... mais dados
};
```

### Alterar Cores

Cores estão em `public/assets/css/base.css` como CSS variables:

```css
:root {
  --color-primary: #1f3a5f;
  --color-secondary: #c58b4f;
  /* ... mais cores */
}
```

## 📊 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Navegação com menu hamburger
- ✅ Formulário de contato com validação
- ✅ FAQ interativo (acordeão)
- ✅ Animações de scroll (fade-in)
- ✅ SEO otimizado (schema.org, meta tags, sitemap)
- ✅ PWA manifest support
- ✅ Acessibilidade (ARIA labels, semantic HTML)
- ✅ Google Analytics ready

## 🔍 SEO

- Schema JSON-LD (Person + FAQ)
- Meta tags OG para redes sociais
- Sitemap.xml
- robots.txt
- Favicon SVG
- Canonical URLs

**Nota:** Lembrar de adicionar ID do Google Analytics em `public/pages/index.html` (substituir `G-XXXXXXXXXX`).

## 🔒 Segurança

- Validação de email e telefone no formulário
- Proteção contra XSS (usando textContent, não innerHTML)
- Links externos com `target="_blank" rel="noopener"`
- HTTPS recomendado para produção

## 📱 Responsividade

Breakpoints implementados:

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: até 767px

## 🚢 Deployment

### Netlify / Vercel

1. Conectar repositório GitHub
2. Build command: `npm install`
3. Publish directory: `public/`
4. Adicionar variáveis de ambiente se necessário

### Servidor Node.js próprio

```bash
# Instalar dependências de produção
npm install --production

# Iniciar servidor
npm start

# (Usar PM2 ou similar para gerenciar processo)
npm install -g pm2
pm2 start src/server.js --name "teacher-thais"
```

### Variáveis de Ambiente

Se usar variáveis, criar arquivo `.env`:

```
PORT=3000
NODE_ENV=production
```

## 🧪 Testes e Qualidade

```bash
# Validar código
npm run lint

# Formatar código
npm run format
```

## 📝 Atualizações Recentes

- Validação robusta de formulário (email e telefone)
- Schema FAQ para melhor SEO
- Menu mobile com focus trap
- Otimização de IntersectionObserver
- Páginas de Privacy e Terms
- Configuração ESLint/Prettier

## 📄 Licença

Todos os direitos reservados © 2025 Teacher Thaís
