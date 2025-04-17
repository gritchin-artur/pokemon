const pokemonAbilities = (abilities) => {
    const propertiesContainer = document.createElement('div');
    propertiesContainer.classList.add('propertiesContainer');

    const abilitiesTitle = document.createElement('h3');
    abilitiesTitle.classList.add('abilitiesTitle');
    abilitiesTitle.innerHTML = 'Abilities:';
    propertiesContainer.append(abilitiesTitle);

    abilities.forEach((ab) => {
        const ability = document.createElement('p');
        ability.innerHTML = ab.ability.name;
        propertiesContainer.appendChild(ability);
    });

    return propertiesContainer;
};

export default pokemonAbilities;
