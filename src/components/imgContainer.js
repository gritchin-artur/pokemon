const imgContainerEl = (name, img) => {
    const imgContainer = document.createElement('div');

    const namePokemon = document.createElement('h2');
    namePokemon.classList.add('pokemon-name');
    namePokemon.innerText = name;

    const frontImgPokemon = document.createElement('img');
    frontImgPokemon.classList.add('pokemonImage');
    frontImgPokemon.src = img;

    imgContainer.append(namePokemon, frontImgPokemon);
    return imgContainer;
};

export default imgContainerEl;
