import imgContainerEl from './imgContainer.js';
import pokemonAbilities from './pokemonAbilities.js';
import pokemonStatistics from './pokemonStatistics.js';

const pokemonCard = (pokemon) => {
    const card = document.createElement('div');
    card.classList.add('pokemonContainer');
    card.append(
        imgContainerEl(pokemon.name, pokemon.sprites.front_default),
        pokemonAbilities(pokemon.abilities),
        pokemonStatistics(pokemon.stats)
    );

    return card;
};

export default pokemonCard;
