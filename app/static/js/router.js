import api from './api.js';
import templates from './templates.js';
import utils from './utils.js';

var router = {
  init: function () {
    routie({
      '': async function () {
        // Show loader:
  			utils.loader.show();

        // Fetch the anime data:
        var anime = await api.getData('anime');

        // Add the data to localStorage:
        localStorage.setItem('anime', JSON.stringify(anime.data));

        // Render the overview:
        templates.renderOverview('anime', anime.data);
        templates.toggle('#anime');

        // Hide loader when done:
        utils.loader.hide();
      },
      'manga': async function () {
        // Show loader:
        utils.loader.show();

        // Fetch the manga data:
        var manga = await api.getData('manga');

        // Add the data to localStorage:
        localStorage.setItem('manga', JSON.stringify(manga.data));

        // Render the overview:
        templates.renderOverview('manga', manga.data);
        templates.toggle('#manga');

        // Hide loader when done:
        utils.loader.hide();
      },
      'details/:type/:slug': async function (type, slug) {
        var detail;

        if (localStorage.getItem(type)) {
          var storage = JSON.parse(localStorage.getItem(type));

          // If the anime/manga is stored in localStorage...
          storage = storage.filter(function (item) {
            if (item.attributes.slug === slug) {
              return item;
            }
          });

          // ...use the data from there, else fetch the data using the slug:
          if (storage.length) {
            detail = storage[0];
          } else {
            detail = await api.getDetails(type, slug);
          }
        } else {
          detail = await api.getDetails(type, slug);
        }

        // Render the details:
        templates.renderDetail(detail);
        templates.toggle('#details');
      },
      'error': function () {
        templates.toggle('#error');
      }
    });
  }
};

export default router;
