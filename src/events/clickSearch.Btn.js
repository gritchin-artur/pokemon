import dom from '../dom.js';
import defaultMessage from '../handlers/defaultMessage.js';

const clickButton = () => {
    dom.button.addEventListener('click', () => {
        const param = dom.input.value;
        defaultMessage(param);
    });
};

export default clickButton;
