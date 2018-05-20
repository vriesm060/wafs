var utils = {
  loader: {
    el: document.querySelector('#anime-shows'),
    show: function () {
      this.el.classList.add('show');
    },
    hide: function () {
      this.el.classList.remove('show');
    }
  },
  sortButton: {
    el: document.querySelector('#sort')
  },
  moreButton: {
    el: document.querySelector('#more')
  },
  searchAnime: {
    el: document.querySelector('[name="search-anime"]')
  }
};

export default utils;
