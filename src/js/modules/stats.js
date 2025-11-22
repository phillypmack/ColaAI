/**
 * Módulo de estatísticas e cálculos
 * @module stats
 */

import CONFIG from '../config/config.js';
import { selectedLanguages } from './ui.js';

/**
 * Obtém dimensões do papel selecionado
 * @returns {{width: number, height: number}} Dimensões em mm
 */
export function getPaperDimensions() {
    const paperFormat = document.getElementById('paperFormat').value;

    if (paperFormat === 'custom') {
        const width = parseInt(document.getElementById('customWidth').value) || CONFIG.PAPER_FORMATS.A4.width;
        const height = parseInt(document.getElementById('customHeight').value) || CONFIG.PAPER_FORMATS.A4.height;
        return { width, height };
    } else {
        const [width, height] = paperFormat.split(',').map(Number);
        return { width, height };
    }
}

/**
 * Calcula quantos adesivos cabem em uma folha
 * @param {number} stickerSize - Tamanho do adesivo em mm
 * @param {number} spacing - Espaçamento entre adesivos em mm
 * @returns {number} Quantidade de adesivos que cabem
 */
export function calculateMaxFit(stickerSize, spacing) {
    const { width, height } = getPaperDimensions();
    const margin = CONFIG.LAYOUT.MARGIN;

    const cellSize = stickerSize + spacing;
    const cols = Math.floor((width - 2 * margin) / cellSize);
    const rows = Math.floor((height - 2 * margin) / cellSize);

    return cols * rows;
}

/**
 * Atualiza todas as estatísticas na interface
 */
export function updateStats() {
    const count = selectedLanguages.size;
    let totalStickers = 0;
    selectedLanguages.forEach(quantity => {
        totalStickers += quantity;
    });

    document.getElementById('selectedCount').textContent = count;
    document.getElementById('selectedIcons').textContent = count;
    document.getElementById('totalStickers').textContent = totalStickers;

    const stickerSize = parseInt(document.getElementById('stickerSize').value);
    const spacing = parseInt(document.getElementById('spacing').value);
    const maxFit = calculateMaxFit(stickerSize, spacing);
    document.getElementById('maxFit').textContent = maxFit;

    const sheetsNeeded = Math.ceil(totalStickers / maxFit);
    document.getElementById('sheetsNeeded').textContent = totalStickers > 0 ? sheetsNeeded : 0;

    document.getElementById('generateBtn').disabled = count === 0;
}

/**
 * Gerencia mudança no formato do papel
 */
export function handlePaperFormatChange() {
    const paperFormat = document.getElementById('paperFormat').value;
    const customDiv = document.getElementById('customPaperSize');

    if (paperFormat === 'custom') {
        customDiv.style.display = 'block';
    } else {
        customDiv.style.display = 'none';
    }

    updateStats();
    updatePreview();
}

/**
 * Atualiza o preview (importado dinamicamente para evitar dependência circular)
 */
export async function updatePreview() {
    const { updatePreview: updatePreviewFn } = await import('./preview.js');
    updatePreviewFn();
}

// Expõe funções globalmente
window.handlePaperFormatChange = handlePaperFormatChange;
window.updateStats = updateStats;
