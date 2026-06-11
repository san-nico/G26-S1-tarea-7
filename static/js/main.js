import { inicializarPaginacion } from "./ui.js";
import { loadTemplates, cargarPagina, cargarPokemon } from "./render.js";

async function main() {
    console.log("iniciando...");
    await loadTemplates();
    await inicializarPaginacion();
    await cargarPagina();


    // Escuchar cambios en el hash de la URL
    window.addEventListener("hashchange", () => {
        const hash = location.hash.replace("#", ""); // quita el símbolo #
        const indice = parseInt(hash, 10);
        if (!isNaN(indice)) {
            cargarPokemon(indice);
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
