/**
 * Módulo de interface do usuário
 * Gerencia renderização e interações com elementos da UI
 * @module ui
 */

import { languagesData } from '../data/languages.js';
import { updateStats, updatePreview } from './stats.js';

/**
 * Mapa de linguagens selecionadas (langId -> quantidade)
 * @type {Map<string, number>}
 */
export let selectedLanguages = new Map();

/**
 * Renderiza todas as linguagens organizadas por categoria
 */
export function renderLanguages() {
    const container = document.getElementById('languagesContainer');
    container.innerHTML = '';

    for (const [category, languages] of Object.entries(languagesData)) {
        const categoryDiv = createCategorySection(category, languages);
        container.appendChild(categoryDiv);
    }

    restoreSelectedLanguages();
    updateStats();
    updatePreview();
}

/**
 * Cria uma seção de categoria com seus ícones
 * @param {string} category - Nome da categoria
 * @param {Array} languages - Array de linguagens da categoria
 * @returns {HTMLElement} Elemento div da categoria
 */
function createCategorySection(category, languages) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'mb-6';

    categoryDiv.innerHTML = `
        <div class="category-header">
            <h3 class="text-sm font-bold text-white">${category}</h3>
            <div class="flex items-center gap-2">
                <span class="text-xs text-gray-400">${languages.length}</span>
                <button onclick="window.selectCategory('${category}', event)" class="btn btn-secondary text-xs py-1 px-3">
                    Selecionar
                </button>
            </div>
        </div>
    `;

    const grid = createIconsGrid(category, languages);
    categoryDiv.appendChild(grid);

    return categoryDiv;
}

/**
 * Cria o grid de ícones para uma categoria
 * @param {string} category - Nome da categoria
 * @param {Array} languages - Array de linguagens
 * @returns {HTMLElement} Elemento div do grid
 */
function createIconsGrid(category, languages) {
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-2';

    languages.forEach((lang, index) => {
        const card = createIconCard(category, lang, index);
        grid.appendChild(card);
    });

    return grid;
}

/**
 * Cria um card de ícone individual
 * @param {string} category - Categoria do ícone
 * @param {Object} lang - Dados da linguagem
 * @param {number} index - Índice na categoria
 * @returns {HTMLElement} Card do ícone
 */
function createIconCard(category, lang, index) {
    const langId = `${category.replace(/\s/g, '-')}-${index}`;
    const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${lang.devicon}/${lang.devicon}-original.svg`;

    const card = document.createElement('div');
    card.className = 'icon-card';
    card.dataset.name = lang.name.toLowerCase();
    card.dataset.category = category;
    card.dataset.langid = langId;
    card.dataset.langData = JSON.stringify(lang);
    card.onclick = () => toggleSelection(card, lang);

    card.innerHTML = `
        <img src="${iconUrl}" alt="${lang.name}">
        <p class="text-white text-xs font-semibold text-center leading-tight">${lang.name}</p>
        <div class="quantity-input w-full">
            <label class="text-xs text-gray-400">Qtd:</label>
            <input type="number" id="qty-${langId}" min="1" value="1"
                onchange="window.updateIconQuantity('${langId}', this.value)"
                onclick="event.stopPropagation()">
        </div>
    `;

    return card;
}

/**
 * Alterna a seleção de um ícone
 * @param {HTMLElement} card - Card do ícone
 * @param {Object} lang - Dados da linguagem
 */
export function toggleSelection(card, lang) {
    const langId = card.dataset.langid;
    const qtyInput = card.querySelector(`#qty-${langId}`);

    if (selectedLanguages.has(langId)) {
        selectedLanguages.delete(langId);
        card.classList.remove('selected');
        if (qtyInput) qtyInput.value = 1;
    } else {
        selectedLanguages.set(langId, 1);
        card.classList.add('selected');
        if (qtyInput) qtyInput.value = 1;
    }

    updateStats();
    updatePreview();
}

/**
 * Atualiza a quantidade de um ícone selecionado
 * @param {string} langId - ID da linguagem
 * @param {string|number} quantity - Nova quantidade
 */
export function updateIconQuantity(langId, quantity) {
    if (selectedLanguages.has(langId)) {
        const qty = parseInt(quantity);
        if (qty > 0) {
            selectedLanguages.set(langId, qty);
        } else {
            const card = document.querySelector(`[data-langid="${langId}"]`);
            if (card) card.click();
        }
    }
    updateStats();
    updatePreview();
}

/**
 * Seleciona ou desseleciona todos os ícones de uma categoria
 * @param {string} category - Nome da categoria
 * @param {Event} event - Evento do clique
 */
export function selectCategory(category, event) {
    event.stopPropagation();
    const cards = document.querySelectorAll(`[data-category="${category}"]`);
    const allSelected = Array.from(cards).every(card => selectedLanguages.has(card.dataset.langid));

    cards.forEach(card => {
        const langId = card.dataset.langid;
        const qtyInput = card.querySelector(`#qty-${langId}`);

        if (allSelected) {
            selectedLanguages.delete(langId);
            card.classList.remove('selected');
            if (qtyInput) qtyInput.value = 1;
        } else {
            selectedLanguages.set(langId, 1);
            card.classList.add('selected');
            if (qtyInput) qtyInput.value = 1;
        }
    });

    updateStats();
    updatePreview();
}

/**
 * Limpa todas as seleções
 */
export function clearSelection() {
    selectedLanguages.clear();
    document.querySelectorAll('[data-langid]').forEach(card => {
        card.classList.remove('selected');
        const qtyInput = card.querySelector('input[type="number"]');
        if (qtyInput) qtyInput.value = 1;
    });
    updateStats();
    updatePreview();
}

/**
 * Restaura as linguagens selecionadas após re-renderização
 */
function restoreSelectedLanguages() {
    for (const [langId, quantity] of selectedLanguages.entries()) {
        const card = document.querySelector(`[data-langid="${langId}"]`);
        if (card) {
            card.classList.add('selected');
            const qtyInput = card.querySelector(`#qty-${langId}`);
            if (qtyInput) qtyInput.value = quantity;
        }
    }
}

/**
 * Filtra linguagens por termo de busca
 */
export function filterLanguages() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('[data-langid]').forEach(card => {
        card.style.display = card.dataset.name.includes(searchTerm) ? 'flex' : 'none';
    });
}

// Expõe funções globalmente para uso inline no HTML
window.selectCategory = selectCategory;
window.updateIconQuantity = updateIconQuantity;
window.toggleSelection = toggleSelection;
window.clearSelection = clearSelection;
window.filterLanguages = filterLanguages;
