let api_root = "https://pokeapi.co/api/v2/pokemon";
async function get_pokemon_stats(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return {
      id: data.id ?? null,
      name: data.name ?? "unknown",
      sprite: data.sprites?.front_default ?? null,
    };
  } catch (error) {
    console.error(`Error obteniendo pokemon desde ${url}:`, error);
    return null;
  }
}
async function get_pokemones(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    const pokemones = await Promise.all(
      data.results.map((pokemon) => get_pokemon_stats(pokemon.url)),
    );
    return pokemones.filter(Boolean);
  } catch (error) {
    console.error("Error obteniendo lista de pokemones:", error);
    return [];
  }
}
function fix_nombre(nombre) {
  return nombre[0].toUpperCase() + nombre.slice(1);
}
function renderPokemon(pokemon) {
  const nodo = document.createElement("article");
  nodo.classList.add("pokemon__card");
  nodo.innerHTML = `
    <span class="pokemon__id">${pokemon.id}</span>
    <h3 class="pokemon__nombre">${fix_nombre(pokemon.name)}</h3>
    <img class="pokemon__imagen" src="${pokemon.sprite}" alt="${pokemon.name}">
  `;
  document.querySelector(".pokemones").appendChild(nodo);
}
async function main() {
  const pokemones = await get_pokemones(api_root);
  pokemones.forEach(renderPokemon);
}
window.addEventListener("DOMContentLoaded", main);
