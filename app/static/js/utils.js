var utils = {
  loader: {
    el: document.querySelector('.shows'),
    show: function () {
      this.el.classList.add('show');
    },
    hide: function () {
      this.el.classList.remove('show');
    }
  },
  sortButton: {
    el: document.querySelector('.sort')
  },
  searchInput: {
    el: document.querySelector('[name="search"]')
  }
};

export default utils;
