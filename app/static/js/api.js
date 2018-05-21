import templates from './templates.js';

var api = {
  headers: {
    fieldset: [
      'slug',
      'canonicalTitle',
      'posterImage',
      'coverImage',
      'synopsis'
    ],
    pageLimit: 20,
    pageOffset: 0
  },
  getData: async function (type) {
    var url = `https://kitsu.io/api/edge/${type}?fields[${type}]=${this.headers.fieldset.join()}&page[limit]=${this.headers.pageLimit}&page[offset]=${this.headers.pageOffset}`;

    return await fetch (url)
      .then((res, err) => res.json())
      .catch(function (err) {
        // Handle errors:
        templates.renderError(err.toString());
        routie('error');
      });
  },
  getDetails: function (slug) {
    var url = `https://kitsu.io/api/edge/anime?filter[slug]=${slug}&fields[anime]=${this.headers.fieldset.join()}`;

    return fetch (url)
      .then(function (res, err) {
        return res.json();
      })
      .then(function (res, err) {
        if (res.data.length) {
          templates.renderDetail(res.data[0]);
        } else {
          templates.renderError('No anime found.');
          routie('error');
        }
      })
      .catch(function (err) {
        // Handle errors:
        templates.renderError(err.toString());
        routie('error');
      });
  }
};

export default api;
