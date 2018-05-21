import api from './api.js';
import templates from './templates.js';
import utils from './utils.js';

var router = {
  init: function () {
    routie({
      '': async function () {
        // Show loader:
  			utils.loader.show();

        // Remove data temporary from localStorage for dev:
        localStorage.removeItem('anime');

        var anime = await api.getData('anime');

        console.log('anime', anime);

        // Add the data to localStorage:
        localStorage.setItem('anime', JSON.stringify(anime.data));

        // Add the length of the data to headers.pageOffset:
        // api.headers.pageOffset += data.length;

        // Render the overview:
        templates.renderOverview('anime', anime.data);
        templates.toggle('#anime');

        // Hide loader:
        utils.loader.hide();
      },
      'manga': async function () {
        // Show loader:
        utils.loader.show();

        // Remove data temporary from localStorage for dev:
        localStorage.removeItem('manga');

        var manga = await api.getData('manga');

        console.log('manga', manga);

        // Add the data to localStorage:
        localStorage.setItem('manga', JSON.stringify(manga.data));

        // Add the length of the data to headers.pageOffset:
        // api.headers.pageOffset += data.length;

        // Render the overview:
        templates.renderOverview('manga', manga.data);
        templates.toggle('#manga');

        // Hide loader:
        utils.loader.hide();
      },
      'details/:type/:slug': async function (type, slug) {
        var detail;

        if (localStorage.getItem(type)) {
          console.log(`${type} is in storage`);
          var storage = JSON.parse(localStorage.getItem(type));

          storage = storage.filter(function (item) {
            if (item.attributes.slug === slug) {
              return item;
            }
          });

          if (storage.length) {
            detail = storage[0];
          } else {
            detail = await api.getDetails(type, slug);
          }
        } else {
          console.log(`${type} is not in storage`);
          detail = await api.getDetails(type, slug);
        }

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
