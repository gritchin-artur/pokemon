import dom from '../dom.js';
import getData from '../data.js'

const defaultMessage = (param) => {
    if (!dom.input.value) {
        dom.card.style.display = 'flex';
        dom.card.innerHTML = 'Please enter some number';
    }
    if (dom.input.value <= 0) {
        dom.card.style.display = 'flex';
        dom.card.innerHTML = 'Please enter valid number';
    } else {
        getData(param);
    }
};

export default defaultMessage;
