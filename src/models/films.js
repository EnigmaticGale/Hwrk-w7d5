const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Film = function() {
  this.data = null;
};

Film.prototype.getData = function () {
  const url = 'https://ghibliapi.herokuapp.com/films';
  const request = new RequestHelper(url)
  const FilmPromise = request.get()
  FilmPromise.then(value => {
    this.data = value;
    PubSub.publish("Films:data-ready", this.data)
  })
};



module.exports = Film;
