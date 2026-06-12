const api_root = "https://pokeapi.co/api/v2/pokemon";

export async function get_pokemon_stats(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return data
  } catch (error) {
    return null;
  }
}
export async function get_pokemon(id){
    const url=`${api_root}/${id}`;
    console.log(url);
    return await get_pokemon_stats(url);
}

export async function get_pokemones(pagina) {
  try {
    const url = buildUrl(pagina);
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
    return [];
  }
}

export function buildUrl(pagina = 0, limit = 20) {
  const offset = pagina * limit;
  return `${api_root}?limit=${limit}&offset=${offset}`;
}