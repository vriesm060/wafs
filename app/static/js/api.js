import templates from './templates.js';

var api = {
  headers: {
    fieldset: [
      'slug',
      'canonicalTitle',
      'posterImage',
      'coverImage',
      'synopsis',
      'popularityRank'
    ],
    pageLimit: 20,
    pageOffset: 0
  },
  getData: async function (type) {
    return await fetch (`https://kitsu.io/api/edge/${type}?fields[${type}]=${this.headers.fieldset.join()}&page[limit]=${this.headers.pageLimit}&page[offset]=${this.headers.pageOffset}`)
      .then((res, err) => res.json())
      .catch(err => {
        // Handle errors:
        templates.renderError(err.toString());
        routie('error');
      });
  },
  getDetails: async function (type, slug) {
    return await fetch (`https://kitsu.io/api/edge/${type}?fields[${type}]=${this.headers.fieldset.join()}&filter[slug]=${slug}`)
      .then((res, err) => { return res.json(); })
      .then((res, err) => {
        if (res.data.length) {
          return res.data;
        } else {
          // When there are no matches:
          templates.renderError(`No ${type} found.`);
          routie('error');
        }
      })
      .catch(err => {
        // Handle errors:
        templates.renderError(err.toString());
        routie('error');
      });
  }
};

export default api;
