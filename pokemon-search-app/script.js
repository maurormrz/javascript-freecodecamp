document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase().trim();

        const typesElement = document.getElementById('types');
        typesElement.innerHTML = '';

        const isNumeric = /^\d+$/.test(searchTerm);
        const apiUrl = isNumeric ?
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchTerm}` :
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${encodeURIComponent(searchTerm)}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokemon not found');
                }
                return response.json();
            })
            .then(data => {
                updatePokemonInfo(data);
            })
            .catch(error => {
                alert(error.message);
            });
    });

    function updatePokemonInfo(data) {
        const pokemonNameElement = document.getElementById('pokemon-name');
        const pokemonIdElement = document.getElementById('pokemon-id');
        const weightElement = document.getElementById('weight');
        const heightElement = document.getElementById('height');
        const hpElement = document.getElementById('hp');
        const attackElement = document.getElementById('attack');
        const defenseElement = document.getElementById('defense');
        const specialAttackElement = document.getElementById('special-attack');
        const specialDefenseElement = document.getElementById('special-defense');
        const speedElement = document.getElementById('speed');

        pokemonNameElement.textContent = data.name;
        pokemonIdElement.textContent = data.id;
        weightElement.textContent = data.weight;
        heightElement.textContent = data.height;

        data.stats.forEach(stat => {
            switch (stat.stat.name) {
                case 'hp':
                    hpElement.textContent = stat.base_stat;
                    break;
                case 'attack':
                    attackElement.textContent = stat.base_stat;
                    break;
                case 'defense':
                    defenseElement.textContent = stat.base_stat;
                    break;
                case 'special-attack':
                    specialAttackElement.textContent = stat.base_stat;
                    break;
                case 'special-defense':
                    specialDefenseElement.textContent = stat.base_stat;
                    break;
                case 'speed':
                    speedElement.textContent = stat.base_stat;
                    break;
            }
        });

        const pokemonImageElement = document.querySelector('.pokemon-image');
        pokemonImageElement.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;

        const typesElement = document.getElementById('types');
        data.types.forEach(type => {
            const typeName = type.type.name;
            const typeElement = document.createElement('div');
            typeElement.textContent = typeName;
            typesElement.appendChild(typeElement);
        });
    }
});
