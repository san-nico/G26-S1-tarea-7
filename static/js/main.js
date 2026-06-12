import { inicializarPaginacion, setPagina } from "./ui.js";
import { loadTemplates, cargarPagina, cargarPokemon } from "./render.js";


function mainController(){
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
      const paginaNueva = parseInt(pagina, 10);
      setPagina(paginaNueva);
      cargarPagina(paginaNueva);
    }
}
async function main() {
  console.log("iniciando...");
  await loadTemplates();
  await inicializarPaginacion();

  // Escuchar cambios en el hash de la URL
  window.addEventListener("hashchange", mainController);
  mainController();

}

window.addEventListener("DOMContentLoaded", main);
