// 1. Agrupamento dos Imports
import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initfetchAnimais from "./modules/fetchanimais.js";

// ---

// 2. Função de Inicialização Principal

function init() {
  // 3 Inicialização de Classes (Instância com 'new')

  const tabNav = new TabNav(
    '[data-tab="menu"] li',
    '[data-tab="content"] section'
  );
  tabNav.init();

  const modal = new Modal(
    '[data-modal="abrir"]',
    '[data-modal="fechar"]',
    '[data-modal="container"]'
  );
  modal.init();

  const tooltip = new Tooltip("[data-tooltip]");
  tooltip.init();

  // 4 Inicialização de Módulos Simples (Apenas chamando a função)

  initScrollSuave();
  initAnimacaoScroll();
  initAccordion();
  initDropdownMenu();
  initMenuMobile();
  initFuncionamento();
  initfetchAnimais();
  initFetchBitcoin();
}

// 3. Execução
document.addEventListener("DOMContentLoaded", init);
