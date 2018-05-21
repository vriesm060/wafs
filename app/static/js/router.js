import templates from './templates.js';
import api from './api.js';

var router = {
  init: function () {
    routie({
      '': async function () {
        // Remove data temporary from localStorage for dev:
        localStorage.removeItem('anime');

        var anime = await api.getData('anime');

        console.log('anime', anime);

        // Add the data to localStorage:
        localStorage.setItem('anime', JSON.stringify(anime.data));

        // Add the length of the data to headers.pageOffset:
        // api.headers.pageOffset += data.length;

        // Render the overview:
        templates.render('anime', anime.data);
        templates.toggle('#anime');
      },
      'manga': async function () {
        // Remove data temporary from localStorage for dev:
        localStorage.removeItem('manga');

        var manga = await api.getData('manga');

        console.log('manga', manga);

        // Add the data to localStorage:
        localStorage.setItem('manga', JSON.stringify(manga.data));

        // Add the length of the data to headers.pageOffset:
        // api.headers.pageOffset += data.length;

        // Render the overview:
        templates.render('manga', manga.data);
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
