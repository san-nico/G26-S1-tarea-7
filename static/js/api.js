const api_root = "https://pokeapi.co/api/v2/pokemon";
const cache = new Map();

export async function get_endpoint(url) {
    
    if (url.endsWith("/")) {
        url = url.slice(0, -1);
    }
    console.log("cache?", cache.has(url), url);
    if (cache.has(url)) {
        return cache.get(url);
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        cache.set(url, data);
        return data;

    } catch (error) {
        return null;
    }
}

export async function get_pokemon(id) {
    const url = `${api_root}/${id}`;
    return await get_endpoint(url);
}

export async function get_pokemones(pagina) {
    try {
        const limit = 20;
        const offset = pagina * limit;
        const url = `${api_root}?limit=${limit}&offset=${offset}`;
        const data = await get_endpoint(url);
   
        return data.results.map((pokemon) => get_endpoint(pokemon.url));

    } catch (error) {
        return [];
    }
}
