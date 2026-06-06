let api_root = "https://pokeapi.co/api/v2/pokemon";

async function get_pokemon_stats(url) {
  let response = await fetch(url);
  let data = await response.json();

  return data;
}
async function get_pokemones(url) {
  let response = await fetch(url);
  let data = await response.json();

  return Promise.all(data.results.map((n) => get_pokemon_stats(n.url)));
}
function renderPokemon(pokemon) {
  let nodo = document.createElement("article");
  nodo.classList.add("pokemon");
  nodo.innerHTML = `
        <span class="pokemon__id">${pokemon.id}</span>
        <h3 class="pokemon__nombre">${pokemon.name}</h3>
        <img class="pokemon__imagen" src="${pokemon.sprites.front_default}" alt="${pokemon.nombre}">
    `;

  document.getElementsByClassName("pokemones")[0].appendChild(nodo);
}
async function main() {
  let cosas = await get_pokemones(api_root);
  cosas.forEach((pokemon) => renderPokemon(pokemon));
  cosas.forEach((pokemon) => console.log(pokemon));
}
main();
