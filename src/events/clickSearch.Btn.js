import pokemonCard from '../components/pokemonCard.js';
import dom from '../dom.js';
import getData from '../data.js';

const clickButton = () => {
    dom.button.addEventListener('click', () => {
        getData(dom.input.value);
    });
};

export default clickButton;
