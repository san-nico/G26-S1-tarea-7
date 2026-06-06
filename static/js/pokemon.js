async function get_pokemon_stats(url){
    let response=await fetch(url)
    let data=await response.json()

    let pokemon={
        nombre:data.name,
        imagen:data.sprites.front_default,
    }
    
    return pokemon
}
async function get_pokemones(url){
    let response = await fetch(url)
    let data = await response.json()

    let container = document.querySelector(".pokemones")

    let promises = data.results.map(async (nodo) => {
        let pokemon = await get_pokemon_stats(nodo.url)

        let div = document.createElement("div")
        div.classList.add("pokemon")
        div.innerHTML = `
            <h3>${pokemon.nombre}</h3>
            <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
        `

        container.appendChild(div)
    })

    await Promise.all(promises)
}

async function poblar_pokemones(){
    let url="https://pokeapi.co/api/v2/pokemon"
    get_pokemones(url)
}
poblar_pokemones()