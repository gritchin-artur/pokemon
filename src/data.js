import getPokemon from '../api/getPokemon.js';
import pokemonCard from './components/pokemonCard.js';

const getData = async (id) => {
    pokemonCard(await getPokemon(id));
};

export default getData;
