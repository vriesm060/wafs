import templates from './templates.js';
import api from './api.js';

var router = {
  init: function () {
    routie({
      '': function () {
        // Remove data from localStorage for dev:
        localStorage.removeItem('anime');

        if (localStorage.getItem('anime') !== null) {
          var storage = JSON.parse(localStorage.getItem('anime'));
          templates.render(storage.data);
        } else {
          api.getAnime();
        }

        templates.toggle('#home');
      },
      'manga': function () {
        templates.toggle('#manga');
      },
      'details/:slug': function (slug) {

        // Find a better way to do this..
        var anime = function () {
          if (localStorage.getItem('anime') === null) {
            return;
          } else {
            var storage = JSON.parse(localStorage.getItem('anime'));

            return storage.data.filter(function (item) {
              if (item.attributes.slug === slug) {
                return item;
              }
            });
          }
        }

        if (anime() !== undefined && anime().length > 0) {
          templates.renderDetail(anime()[0]);
          console.log('rendered through localStorage');
        } else {
          api.getDetails(slug);
          console.log('rendered through API call');
        }

        templates.toggle('#details');
      },
      'error': function () {
        templates.toggle('#error');
      }
    });
  }
};

export default router;
