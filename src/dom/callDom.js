export const loadElemToContainer = (container, element, id) => {
    const containerElement = document.querySelector(container);
    const newElem = document.createElement(element);
    newElem.setAttribute('id', id);
    containerElement.appendChild(newElem);
}

export const addAttributeToElem = (element, attName, attVal) => {
    const elem = document.querySelector(element);
    elem.setAttribute(attName, attVal);
}

export const addTextToElem = (element, text) => {
    const elem = document.querySelector(element);
    elem.textContent = text;
}

export const clearDisplay = () => {
    const elem = document.querySelector(element);
    const childrenCount = elem.children.length;
    for (let i = 0; i < childrenCount; i += 1) {
        elem.children[0].remove();
    }
}

export const priorityColor = (priorityNum) => {
    switch(Number(priorityNum)) {
        case 0: 
            return '#A41623';
        case 1: 
            return '#FFB563';
        case 2: 
            return '#FFD700';
        default:
            return '';
    }
}
