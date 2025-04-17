import getPokemon from '../../api/getPokemon.js';
import dom from '../dom.js';
import pokemonCard from '../components/pokemonCard.js';

const getData = async (id) => {
    const data = await getPokemon(id);
    dom.card.style.display = 'inline-flex';
    dom.card.innerHTML = '';

    dom.card.appendChild(pokemonCard(data));
};

export default getData;
