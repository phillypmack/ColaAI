# 🚀 Guia de Instalação e Configuração

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** versão 18 ou superior ([Download](https://nodejs.org/))
- **Git** ([Download](https://git-scm.com/))
- Um navegador moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (recomendado: VS Code)

---

## 🎯 Instalação Rápida

### Opção 1: Uso Imediato (Sem Build)

Se você quer apenas usar a aplicação sem modificar:

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/hardskills-adesivos.git
cd hardskills-adesivos

# 2. Abra o index.html no navegador
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

✅ **Pronto!** A aplicação já está funcionando.

---

### Opção 2: Ambiente de Desenvolvimento

Para desenvolvedores que querem modificar o código:

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/hardskills-adesivos.git
cd hardskills-adesivos

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

**Hot Reload ativado!** Qualquer modificação será refletida automaticamente.

---

### Opção 3: Build para Produção

Para criar uma versão otimizada para deploy:

```bash
# 1. Faça o build
npm run build

# 2. Preview do build
npm run preview

# Os arquivos otimizados estarão em ./dist/
```

---

## 📁 Estrutura Após Instalação

```
hardskills-adesivos/
├── src/                    # Código fonte
│   ├── index.html         # Página principal
│   ├── css/               # Estilos
│   ├── js/                # JavaScript modular
│   └── assets/            # Assets estáticos
├── dist/                   # Build de produção (gerado)
├── node_modules/           # Dependências (gerado)
├── docs/                   # Documentação
├── tests/                  # Testes
├── package.json           # Configuração do projeto
├── vite.config.js         # Configuração do Vite
└── README.md              # Documentação principal
```

---

## 🔧 Configuração do Ambiente

### 1. Visual Studio Code (Recomendado)

#### Extensões Recomendadas

Instale estas extensões para melhor experiência:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ritwickdey.liveserver",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

#### Configurações do Workspace

Crie `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

### 2. Configurar ESLint (Opcional)

```bash
npm install --save-dev eslint
npx eslint --init
```

Responda as perguntas:
- ✅ To check syntax and find problems
- ✅ JavaScript modules (import/export)
- ✅ None of these
- ✅ Browser
- ✅ JavaScript

### 3. Configurar Prettier (Opcional)

Crie `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

---

## 🧪 Rodando Testes

### Testes Unitários

```bash
# Rodar todos os testes
npm test

# Rodar em modo watch
npm test -- --watch

# Ver coverage
npm test -- --coverage
```

### Testes com UI

```bash
# Abre interface gráfica de testes
npm run test:ui
```

---

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run preview` | Preview do build |
| `npm test` | Roda testes |
| `npm run lint` | Verifica código com ESLint |
| `npm run format` | Formata código com Prettier |
| `npm run docs` | Gera documentação JSDoc |

---

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Instale o Vercel CLI
npm install -g vercel

# Faça deploy
vercel
```

### Netlify

```bash
# Build local
npm run build

# Deploy a pasta dist/
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
# Adicione ao package.json:
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}

# Deploy
npm run build
npm run deploy
```

---

## 🐛 Troubleshooting

### Problema: "Module not found"

**Solução**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema: "Port 5173 already in use"

**Solução**:
```bash
# Mude a porta no vite.config.js
server: {
  port: 3000  // ou outra porta
}
```

### Problema: Tailwind CSS não funciona

**Solução**:
```bash
# Certifique-se de que o CDN está carregando
# Ou instale localmente:
npm install -D tailwindcss
npx tailwindcss init
```

---

## 🔄 Atualizações

### Atualizar Dependências

```bash
# Ver versões disponíveis
npm outdated

# Atualizar todas
npm update

# Atualizar específica
npm install vite@latest
```

### Verificar Segurança

```bash
# Audit de segurança
npm audit

# Corrigir automaticamente
npm audit fix
```

---

## 💡 Dicas de Desenvolvimento

### 1. Use o Hot Reload

O Vite oferece hot reload instantâneo. Deixe `npm run dev` rodando enquanto desenvolve.

### 2. Debug no DevTools

```javascript
// Adicione breakpoints no código
debugger;

// Use console.log estrategicamente
console.log('Estado:', selectedLanguages);
```

### 3. Performance

```bash
# Analise o bundle
npm run build
npx vite-bundle-visualizer
```

---

## 📚 Próximos Passos

Agora que está tudo configurado:

1. 📖 Leia a [Documentação de Arquitetura](./ARCHITECTURE.md)
2. 🎨 Explore o [README principal](../README.md)
3. 💻 Comece a desenvolver!
4. 🧪 Escreva testes para suas features
5. 🚀 Faça deploy da sua versão

---

## 🆘 Suporte

Precisa de ajuda?

- 📖 [Documentação Completa](../README.md)
- 🐛 [Reportar Bug](https://github.com/seu-usuario/hardskills-adesivos/issues)
- 💬 [Discussões](https://github.com/seu-usuario/hardskills-adesivos/discussions)

---

<div align="center">

**Happy Coding!** 🎉

[⬆ Voltar para README](../README.md)

</div>
