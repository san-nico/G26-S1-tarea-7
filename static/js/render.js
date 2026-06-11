import { get_pokemones, get_pokemon} from "./api.js";
let cardTemplate;
let pokemonTemplate;

export async function loadTemplates() {
  cardTemplate = await (await fetch("static/ejs/card.ejs")).text();
  pokemonTemplate = await (await fetch("static/ejs/modal.ejs")).text();
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


export async function cargarPagina(pagina = 0) {

  const pokemones = await get_pokemones(pagina);
  clearPokemones();
  pokemones.forEach(renderPokemon);
}

export function fix_nombre(nombre) {
  return nombre ? nombre[0].toUpperCase() + nombre.slice(1) : "";
}

export function renderPokemon(pokemon) {
  const html = ejs.render(cardTemplate, pokemon);
  document.querySelector(".pokemones").insertAdjacentHTML("beforeend", html);
}

export function clearPokemones() {
  const contenedor = document.querySelector(".pokemones");
  contenedor.innerHTML = "";
}
