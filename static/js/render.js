import { get_pokemones, get_pokemon } from "./api.js";
let cardTemplate;
let pokemonTemplate;
const mainholder = document.querySelector("#main-holder");

export async function init() {
    await loadTemplates();
    await initHolders();
}

async function loadTemplates() {
    cardTemplate = await (await fetch("static/ejs/card.ejs")).text();
    pokemonTemplate = await (await fetch("static/ejs/modal.ejs")).text();
}
async function initHolders() {
    mainholder.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        let data = {
            "id": "",
            "name":" ",
            "sprites": { front_default: "" }
        }
        let html = ejs.render(cardTemplate, data);
        mainholder.insertAdjacentHTML("beforeend", html)
        let holder=mainholder.lastElementChild //hack para convertir el html a elemento
        holder.style.pointerEvents="none";
    }
}
export async function cargarPokemon(indice) {
    const pokemon = await get_pokemon(indice);
    const html = ejs.render(pokemonTemplate, pokemon);
    document.body.insertAdjacentHTML("beforeend", html);

    // Selecciona el botón de cerrar dentro del modal recién insertado
    const cerrarBtn = document.getElementById("pokemon-modal__cerrar");
    if (cerrarBtn) {
        cerrarBtn.addEventListener("click", () => {
            const modal = cerrarBtn.closest(".pokemon-modal"); // ajusta al selector real de tu modal
            if (modal) {
                modal.parentNode.remove(); // destruye el modal
            }
        });
    }
}


export async function cargarPagina(pagina = 1) {
    pagina-=1
    initHolders();
    let promesas = await get_pokemones(pagina)
    Array.from(mainholder.querySelectorAll('.pokemon__card')).forEach(
        child => child.pointerEvents="none"
    );

    promesas.forEach(async (pokemon_promesa, i) => {
        let pokemon = await pokemon_promesa;
        let elemento = mainholder.querySelectorAll('.pokemon__card')[i];
        let card = ejs.render(cardTemplate, pokemon);
        elemento.outerHTML = card;
        elemento.pointerEvents="";
    })

}

