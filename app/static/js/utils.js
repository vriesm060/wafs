var utils = {
  loader: {
    el: document.querySelector('.shows'),
    // Change for all loaders:
    show: function () {
      this.el.classList.add('show');
    },
    hide: function () {
      this.el.classList.remove('show');
    }
  },
  sortButton: {
    el: document.querySelectorAll('.sort')
  },
  searchInputs: {
    el: document.querySelectorAll('[name="search"]')
  }
};

export default utils;
