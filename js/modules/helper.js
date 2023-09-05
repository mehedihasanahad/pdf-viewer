class CustomScript {
    setActive(elementCollection, currentElement, activeClassName) {
        Array.prototype.forEach.call(elementCollection, (element) => {
          if (currentElement.isEqualNode(element))
            element.classList.add(activeClassName);
          else element.classList.remove(activeClassName);
        });
      }
}

export default new CustomScript();