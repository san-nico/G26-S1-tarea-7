import { inicializarPaginacion, setPagina } from "./ui.js";
import { init as initRender, cargarPagina, cargarPokemon } from "./render.js";

function mainController() {
    // Quita el símbolo #
    const hash = location.hash.substring(1);

    // Usa URLSearchParams para interpretar clave=valor
    const params = new URLSearchParams(hash);

    const pokemon = params.get("pokemon");
    const pagina = params.get("pagina");

    console.log(pokemon, pagina);

    if (pokemon) {
        cargarPokemon(parseInt(pokemon, 10));
        return;
    }

    if (pagina) {
        const paginaNueva = parseInt(pagina, 10);
        setPagina(paginaNueva);
        cargarPagina(paginaNueva);
    }

}
async function main() {
    console.log("iniciando...");
    await initRender();
    await inicializarPaginacion();



    // Escuchar cambios en el hash de la URL
    window.addEventListener("hashchange", mainController);
    mainController();

}

window.addEventListener("DOMContentLoaded", main);
