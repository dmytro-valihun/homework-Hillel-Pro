function createElementConstructor(elem, attribute, text, handler, parentElem) {
    const element = document.createElement(elem);
    for (let key in attribute) {
        element.setAttribute(key, attribute[key]);
    }
    element.textContent = text;
    element.addEventListener('click', handler);
    return parentElem.appendChild(element);
};