var utils = {
  loader: {
    el: document.querySelector('.loader'),
    show: function () {
      this.el.classList.add('show');
    },
    hide: function () {
      this.el.classList.remove('show');
    }
  },
  sortButtons: {
    el: document.querySelectorAll('.sort')
  },
  searchInputs: {
    el: document.querySelectorAll('[name="search"]')
  }
};

export default utils;
