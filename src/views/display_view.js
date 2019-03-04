const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function(section) {
  this.section = section
};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:data-ready', (evt)=> {
    const filmsObject = evt.detail;
    this.render(filmsObject);
  });
};

DisplayView.prototype.render = function (films) {
  list = this.createElement("ul");
  films.forEach((film) => {
    title = this.createElement("li", `Title: ${film.title}`);
    producer = this.createElement("li", `Producer: ${film.producer}`);
    date = this.createElement("li", `Release Date: ${film.relese_date}`)
    lineBreak = this.createElement("br");
    list.append(title);
    list.append(producer);
    list.append(date);
    list.append(lineBreak);
  });
    this.section.append(list);
};

DisplayView.prototype.createElement = function (elementName, text) {
  const newElement = document.createElement(elementName)
  newElement.textContent = text;
  return newElement;
};

module.exports = DisplayView;
