const Films = require('./models/films.js')
const DisplayView = require('./views/display_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const films = new Films()
  films.getData();

  const section = document.querySelector('#films-display')
  const displayView = new DisplayView(section);
  displayView.bindEvents();
});
