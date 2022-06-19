const xhr = new XMLHttpRequest();

let pokemon = [];

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        pokemon = data.objects[0].pokemon;
        displayPokemonList(pokemon);
    }

}

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

function displayPokemonList(pokemonList) {
    for (let pokemon of pokemonList) {
        const h2 = document.createElement("h2");
        h2.textContent = `${pokemon.name}, ${pokemon.resource_uri}`
        document.body.appendChild(h2);
    }
}