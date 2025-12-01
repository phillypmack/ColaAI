# 🚀 Como Usar Modelos Locais

## Problema: CORS Policy

Navegadores bloqueiam o acesso a arquivos locais (protocolo `file://`) por segurança. Para usar os modelos locais da pasta `svg/`, você precisa executar um servidor HTTP local.

## ✅ Solução Rápida - 3 Opções

### Opção 1: Usar o Script Automático (Mais Fácil)

1. **Dê duplo clique no arquivo**: `start-server.bat`
2. O servidor será iniciado automaticamente
3. Seu navegador abrirá em: `http://localhost:5173`
4. Pronto! Agora pode usar "Modelos Locais" normalmente

### Opção 2: Usar Python (Se tiver instalado)

```bash
# Abra o terminal na pasta do projeto
cd "c:\Users\felip\Downloads\Aplicações\Cola"

# Execute o servidor
python -m http.server 5173

# Acesse: http://localhost:5173
```

### Opção 3: Usar Node.js (Se tiver instalado)

```bash
# Opção A: Com npx (sem instalar nada)
npx http-server -p 5173

# Opção B: Usar Vite (recomendado para desenvolvimento)
npm run dev
```

## 📋 Passo a Passo Detalhado

### Windows

1. **Abra o Explorador de Arquivos**
2. Navegue até: `c:\Users\felip\Downloads\Aplicações\Cola`
3. **Dê duplo clique** em `start-server.bat`
4. Uma janela preta (terminal) abrirá
5. Aguarde a mensagem: "Servidor rodando em http://localhost:5173"
6. Abra seu navegador e acesse: `http://localhost:5173`

### Alternativa: Usar Vite (Já está configurado!)

Você já tem o Vite configurado no projeto:

```bash
# Instale as dependências (só na primeira vez)
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O Vite abrirá automaticamente em `http://localhost:5173`

## ✅ Como Saber se Funcionou?

1. Acesse `http://localhost:5173` no navegador
2. Clique no botão **"Modelos Locais"**
3. Você deve ver a grade de ícones carregando
4. Clique em algum modelo
5. Veja o preview aparecer com as cores originais

## ❌ Solução de Problemas

### Erro: "Porta 5173 já está em uso"

Mude a porta no comando:

```bash
# Python
python -m http.server 8080

# Node.js
npx http-server -p 8080
```

Depois acesse: `http://localhost:8080`

### Erro: "Python/Node não encontrado"

**Instale uma das opções:**

- **Python**: https://www.python.org/downloads/ (marque "Add to PATH")
- **Node.js**: https://nodejs.org/ (versão LTS)

### Os modelos não aparecem

1. Verifique se está acessando via `http://` e não `file://`
2. Abra o Console do navegador (F12)
3. Procure por erros relacionados a CORS
4. Certifique-se de que a pasta `svg/` existe no mesmo diretório

## 🎯 Comparação

| Método | Prós | Contras |
|--------|------|---------|
| `start-server.bat` | Automático, fácil | Precisa Python ou Node |
| Python | Simples, sem dependências | Precisa Python instalado |
| Node.js | Rápido | Precisa Node instalado |
| Vite | Hot reload, rápido | Precisa npm install |
| Abrir direto (file://) | ❌ Não funciona | Bloqueado por CORS |

## 💡 Recomendação

Para **uso casual**: Use `start-server.bat` (duplo clique)
Para **desenvolvimento**: Use `npm run dev` (Vite)

## 📝 Observações

- O servidor **DEVE** estar rodando enquanto você usa a aplicação
- Você pode fechar o servidor pressionando `Ctrl+C` no terminal
- Cada vez que quiser usar, execute o servidor novamente
- O servidor é apenas local, não fica acessível pela internet

---

**Dica**: Adicione `start-server.bat` aos favoritos ou área de trabalho para acesso rápido!
