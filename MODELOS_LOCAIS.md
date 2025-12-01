# Modelos Locais - Documentação

## ⚠️ IMPORTANTE: Como Executar

**ATENÇÃO**: Para usar os Modelos Locais, você DEVE executar a aplicação através de um servidor HTTP local. Não funciona abrindo o arquivo HTML diretamente!

### 🚀 Início Rápido

**Opção 1 - Mais Fácil**: Dê duplo clique em `start-server.bat`
**Opção 2 - Manual**: Execute `python -m http.server 5173` no terminal
**Opção 3 - Vite**: Execute `npm run dev` no terminal

Depois acesse: **http://localhost:5173**

📖 **Leia o arquivo**: [COMO_USAR_MODELOS_LOCAIS.md](COMO_USAR_MODELOS_LOCAIS.md) para instruções detalhadas

---

## Visão Geral

A funcionalidade de **Modelos Locais** permite que você utilize SVGs armazenados localmente na pasta `svg/` do projeto, mantendo suas cores originais durante a geração dos adesivos DTF UV.

## Como Usar

### 1. Acessar a Aba de Modelos Locais

Na interface principal, você verá 3 botões de visualização:
- **Agrupado** - Visualização padrão com ícones agrupados por categoria
- **Todos** - Todos os ícones em uma única lista
- **Modelos Locais** ⭐ NOVO - Mostra apenas os SVGs da pasta local `svg/`

### 2. Selecionar Modelos

1. Clique no botão **Modelos Locais**
2. Navegue pela galeria de modelos disponíveis (401 modelos)
3. Clique nos modelos que deseja imprimir
4. Ajuste a quantidade de cada modelo conforme necessário

### 3. Configurações Individuais

Cada modelo selecionado permite configurar:
- **Fundo**: Transparente, cor do ícone, branco, preto, etc.
- **Contorno**: Sem contorno, automático, duplo, etc.

### 4. Gerar Arquivos DTF UV

1. Configure o formato da folha (A4, A5, A3, etc.)
2. Defina o tamanho dos adesivos
3. Clique em **Gerar Arquivos DTF UV**
4. Receba 3 arquivos por folha:
   - **CORES** - Com as cores originais do SVG mantidas ✅
   - **BRANCO** - Camada base branca
   - **VERNIZ** - Camada de verniz UV para relevo 3D

## Diferença dos Ícones Online

### Ícones Online (DevIcon/SimpleIcons)
- Cores podem ser personalizadas
- Baixados da internet via CDN
- Limitados às bibliotecas disponíveis

### Modelos Locais
- **Cores originais sempre preservadas** na camada CORES
- Armazenados localmente na pasta `svg/`
- Você pode adicionar seus próprios SVGs

## Adicionar Novos Modelos

Para adicionar novos modelos locais:

1. Coloque o arquivo `.svg` na pasta `svg/`
2. Abra o arquivo `js/script.js`
3. Localize a função `loadLocalModels()`
4. Adicione o nome do arquivo no array `svgFiles`

Exemplo:
```javascript
const svgFiles = [
    ".NET.svg",
    "React.svg",
    "SEU-NOVO-MODELO.svg",  // Adicione aqui
    // ... outros arquivos
];
```

## Características Técnicas

### Manutenção de Cores Originais

A implementação garante que:
- Na camada **CORES**: As cores originais do SVG são mantidas
- Na camada **BRANCO**: Todos os elementos ficam brancos (camada base)
- Na camada **VERNIZ**: Todos os elementos ficam brancos (área de relevo UV)

### Código Relevante

A lógica de preservação de cores está em `generateSheetSVG()`:

```javascript
const isLocalModel = iconData.keepOriginalColors === true;

if (isLocalModel && layerType === 'cores') {
    // Modelos locais: mantém cores originais
    shouldReplaceColor = false;
} else if (layerType === 'branco' || layerType === 'verniz') {
    // Camadas BRANCO e VERNIZ: sempre branco
    shouldReplaceColor = true;
}
```

## Limitações

- Os modelos locais devem estar na pasta `svg/` no mesmo diretório do `index.html`
- Arquivos SVG muito grandes podem deixar o carregamento mais lento
- Recomenda-se usar SVGs otimizados (sem código desnecessário)

## Suporte

Para problemas ou dúvidas:
1. Verifique se os arquivos SVG estão na pasta `svg/`
2. Abra o console do navegador (F12) para ver erros
3. Certifique-se de que os nomes dos arquivos coincidem com a lista em `loadLocalModels()`

---

**Versão**: 1.0.0
**Data**: Novembro 2024
**Compatibilidade**: Todos os navegadores modernos
