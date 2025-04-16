import dom from '../dom.js';

const pokemonCard = (pokemon) => {
    console.log(pokemon);
    dom.card.innerHTML = '';

    dom.card.style.display = 'inline-flex';

    const imgContainer = document.createElement('div');

    const namePokemon = document.createElement('h2');
    namePokemon.classList.add('pokemon-name');
    namePokemon.innerText = pokemon.name;

    const frontImgPokemon = document.createElement('img');
    frontImgPokemon.classList.add('pokemonImage');
    frontImgPokemon.src = pokemon.sprites.front_default;

    const propertiesContainer = document.createElement('div');
    propertiesContainer.classList.add('propertiesContainer');

    imgContainer.append(namePokemon, frontImgPokemon);

    dom.card.append(imgContainer, propertiesContainer);

    const abilitiesTitle = document.createElement('h3');
    abilitiesTitle.classList.add('abilitiesTitle');
    abilitiesTitle.innerHTML = 'Abilities:';

    propertiesContainer.appendChild(abilitiesTitle);

    pokemon.abilities.forEach((ab) => {
        const ability = document.createElement('p');
        ability.innerHTML = ab.ability.name;
        propertiesContainer.appendChild(ability);
    });

    const statisticsTitle = document.createElement('h3');
    statisticsTitle.innerHTML = 'Statistics:';

    propertiesContainer.appendChild(statisticsTitle);

    pokemon.stats.forEach((stat) => {
        const statistic = document.createElement('p');
        statistic.innerHTML = `${stat.stat.name}: ${stat.base_stat}`;
        propertiesContainer.appendChild(statistic);
    });
};

export default pokemonCard;
