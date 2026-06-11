import { inicializarPaginacion } from "./ui.js";
import { loadTemplates, cargarPagina, cargarPokemon } from "./render.js";

async function main() {
  console.log("iniciando...");
  await loadTemplates();
  await inicializarPaginacion();
  await cargarPagina();

  // Escuchar cambios en el hash de la URL
  window.addEventListener("hashchange", () => {
    // Quita el símbolo #
    const hash = location.hash.substring(1);

    // Usa URLSearchParams para interpretar clave=valor
    const params = new URLSearchParams(hash);

    const pokemon = params.get("pokemon");
    const pagina = params.get("pagina");

    if (pokemon) {
      cargarPokemon(parseInt(pokemon, 10));
    }

    if (pagina) {
      cargarPagina(parseInt(pagina, 10));
    }
  });

  // También puedes disparar al inicio si ya hay un hash en la URL
  const initialHash = location.hash.replace("#", "");
  const initialIndice = parseInt(initialHash, 10);
  if (!isNaN(initialIndice)) {
    cargarPokemon(initialIndice);
  }
}

window.addEventListener("DOMContentLoaded", main);
