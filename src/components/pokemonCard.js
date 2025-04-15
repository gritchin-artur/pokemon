import dom from '../dom.js';

const pokemonCard = (pokemon) => {
    console.log(pokemon);
    dom.card.innerHTML = '';
    if (pokemon) {
        dom.card.style.display = 'flex';

        const namePokemon = document.createElement('h2');
        namePokemon.classList.add('pokemon-name');
        namePokemon.innerText = pokemon.name;

        const imgPokemon = document.createElement('img');
        imgPokemon.classList.add('pokemonImage');
        imgPokemon.src = pokemon.sprites.back_default;

        const propertiesContainer = document.createElement('div');
        propertiesContainer.classList.add('propertiesContainer');

        const abilitiesTitle = document.createElement('h3');
        abilitiesTitle.classList.add('abilitiesTitle');
        abilitiesTitle.innerHTML = 'Abilities:';

        dom.card.append(namePokemon, imgPokemon, propertiesContainer);

        propertiesContainer.append(abilitiesTitle);
    }
};

export default pokemonCard;

//   Abilities:
// good-as-gold
// Statistics:
// hp : 87
// attack : 60
// defense : 95
// special-attack : 133
// special-defense : 91
// speed : 84
