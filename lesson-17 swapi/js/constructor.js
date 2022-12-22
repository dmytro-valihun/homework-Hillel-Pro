function constructor(elem, text, className, handler, parrentElem) {
    const element = document.createElement(elem);
    element.textContent = text;
    element.classList = className;
    element.addEventListener('click', handler);
    return parrentElem.appendChild(element);
};