/**
 * Configurações globais da aplicação HardSkills - Gerador de Adesivos DTF UV
 * @module config
 */

export const CONFIG = {
    /**
     * Configurações de layout e margens
     */
    LAYOUT: {
        /** Margem padrão da folha em mm */
        MARGIN: 10,
        /** Tamanho padrão do adesivo em mm */
        DEFAULT_STICKER_SIZE: 30,
        /** Espaçamento padrão entre adesivos em mm */
        DEFAULT_SPACING: 10,
        /** Fundo padrão do adesivo */
        DEFAULT_BACKGROUND: 'transparent'
    },

    /**
     * Tamanhos disponíveis para adesivos
     */
    STICKER_SIZES: [10, 15, 20, 25, 30, 35, 40],

    /**
     * Espaçamentos disponíveis entre adesivos
     */
    SPACINGS: [5, 10, 15],

    /**
     * Formas disponíveis para adesivos
     */
    SHAPES: {
        CIRCLE: 'circle',
        SQUARE: 'square',
        ROUNDED: 'rounded'
    },

    /**
     * Configurações da lupa de ampliação
     */
    MAGNIFIER: {
        /** Tamanho da lupa em pixels */
        SIZE: 150,
        /** Zoom mínimo */
        MIN_ZOOM: 1.5,
        /** Zoom máximo */
        MAX_ZOOM: 4.5,
        /** Tamanho mínimo do adesivo para cálculo de zoom */
        MIN_STICKER_SIZE: 10,
        /** Tamanho máximo do adesivo para cálculo de zoom */
        MAX_STICKER_SIZE: 40,
        /** Cor da borda da lupa */
        BORDER_COLOR: '#4b2bee',
        /** Largura da borda em pixels */
        BORDER_WIDTH: 3,
        /** Sombra da lupa */
        SHADOW: '0 0 20px rgba(75, 43, 238, 0.5)'
    },

    /**
     * Formatos de papel disponíveis (largura x altura em mm)
     */
    PAPER_FORMATS: {
        A4: { width: 210, height: 297, label: 'A4 (210x297mm)' },
        A5: { width: 148, height: 210, label: 'A5 (148x210mm)' },
        A3: { width: 297, height: 420, label: 'A3 (297x420mm)' },
        CARTA: { width: 216, height: 279, label: 'Carta (216x279mm)' },
        OFICIO: { width: 216, height: 356, label: 'Ofício (216x356mm)' }
    },

    /**
     * Configurações das camadas de impressão DTF UV
     */
    LAYERS: {
        CORES: {
            type: 'cores',
            title: 'Adesivos CORES (CMYK)',
            bgColor: 'white',
            description: 'Camada de impressão colorida - Enviar para impressora CMYK',
            filePrefix: 'adesivos-CORES'
        },
        BRANCO: {
            type: 'branco',
            title: 'Adesivos BRANCO (White Layer)',
            bgColor: 'black',
            description: 'Camada de tinta branca - Define base opaca para cores',
            filePrefix: 'adesivos-BRANCO'
        },
        VERNIZ: {
            type: 'verniz',
            title: 'Adesivos VERNIZ (UV Relief)',
            bgColor: 'black',
            description: 'Camada de verniz UV - Define áreas com efeito 3D em alto relevo',
            filePrefix: 'adesivos-VERNIZ'
        }
    },

    /**
     * Configurações de ícones
     */
    ICONS: {
        /** URL base do CDN DevIcon */
        CDN_BASE_URL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons',
        /** ViewBox padrão para ícones SVG */
        DEFAULT_VIEWBOX: '0 0 128 128',
        /** Timeout para requisições de ícones em ms */
        FETCH_TIMEOUT: 10000
    },

    /**
     * Configurações de interface
     */
    UI: {
        /** Cores do tema */
        COLORS: {
            PRIMARY: '#4b2bee',
            BACKGROUND: '#131022',
            SIDEBAR: '#1e1933',
            CARD: '#2a2440',
            BORDER: '#2d2640',
            TEXT_PRIMARY: '#e5e7eb',
            TEXT_SECONDARY: '#9ca3af'
        },
        /** Duração das animações em ms */
        ANIMATION_DURATION: 200
    },

    /**
     * Mensagens da aplicação
     */
    MESSAGES: {
        SUCCESS: {
            FILES_GENERATED: (totalFiles, uniqueIcons, totalStickers) =>
                `✅ ${totalFiles} arquivo(s) SVG gerado(s)!\n\n` +
                `📊 ${uniqueIcons} ícone(s) único(s) = ${totalStickers} adesivo(s)\n` +
                `🎨 CORES: Impressão CMYK\n` +
                `⚪ BRANCO: Camada base\n` +
                `✨ VERNIZ: Relevo UV 3D\n\n` +
                `Envie os 3 arquivos para gráfica!`
        },
        ERROR: {
            NO_ICONS_SELECTED: 'Selecione pelo menos um ícone',
            ICON_FETCH_FAILED: (iconName) => `Erro ao buscar ícone: ${iconName}`,
            GENERATION_FAILED: 'Erro ao gerar arquivos SVG'
        },
        INFO: {
            LOADING_ICONS: 'Baixando ícones...',
            GENERATING_FILES: 'Gerando arquivos DTF UV...',
            GENERATING_SVG: 'Gerando SVG...',
            NO_ICONS_PREVIEW: 'Selecione ícones',
            GENERATING_PREVIEW: 'Gerando...'
        }
    },

    /**
     * Configurações de performance
     */
    PERFORMANCE: {
        /** Cache de ícones em memória */
        ENABLE_ICON_CACHE: true,
        /** Debounce para preview em ms */
        PREVIEW_DEBOUNCE: 300,
        /** Limite de ícones por requisição paralela */
        MAX_PARALLEL_REQUESTS: 5
    }
};

/**
 * Valores padrão para papel personalizado
 */
export const CUSTOM_PAPER_DEFAULTS = {
    MIN_WIDTH: 50,
    MAX_WIDTH: 1000,
    MIN_HEIGHT: 50,
    MAX_HEIGHT: 1000,
    DEFAULT_WIDTH: 210,
    DEFAULT_HEIGHT: 297
};

/**
 * Calcula o nível de zoom dinâmico baseado no tamanho do adesivo
 * @param {number} stickerSize - Tamanho do adesivo em mm
 * @returns {number} Nível de zoom calculado
 */
export function calculateZoomLevel(stickerSize) {
    const { MIN_ZOOM, MAX_ZOOM, MIN_STICKER_SIZE, MAX_STICKER_SIZE } = CONFIG.MAGNIFIER;
    return MAX_ZOOM - ((stickerSize - MIN_STICKER_SIZE) * (MAX_ZOOM - MIN_ZOOM)) / (MAX_STICKER_SIZE - MIN_STICKER_SIZE);
}

export default CONFIG;
