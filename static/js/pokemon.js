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
    let response=await fetch(url)
    let data=await response.json()

    return Promise.all(data.results.map(n=>get_pokemon_stats(n.url)))
}

async function poblar_pokemones(){   
    let index='https://pokeapi.co/api/v2/pokemon'
    let pokemones=document.getElementsByClassName('pokemones')[0];
    let data=await get_pokemones(index)
    data.forEach(pokemon=>(
        nodo=document.createElement('article'),
        nodo.classList.add('pokemon'),
        nodo.innerHTML=`
        <h3 class="pokemon__nombre">${pokemon.nombre}</h3>
        <img class="pokemon__imagen" src="${pokemon.imagen}" alt="${pokemon.nombre}">
        `,
        pokemones.appendChild(nodo)
    ))

}

poblar_pokemones()