var templates = {
  renderOverview: function (type, data) {
    var directives = {
      link: {
        href: function (params) { return `${params.value}/${type}/${this.attributes.slug}`; }
      },
      posterImage: {
        src: function () { return this.attributes.posterImage.small; }
      },
      title: {
        text: function () { return this.attributes.canonicalTitle; }
      },
      rank: {
        text: function (params) { return params.value + this.attributes.popularityRank; }
      }
    }

    Transparency.render(document.querySelector(`#${type}-shows`), data, directives);
  },
  renderDetail: function (data) {
    var directives = {
      coverImage: {
        src: function () {
          if (this.attributes.coverImage !== null) {
            return this.attributes.coverImage.large;
          } else if (this.attributes.posterImage !== null) {
            return this.attributes.posterImage.large;
          } else {
            return;
          }
        }
      },
      title: {
        text: function () { return this.attributes.canonicalTitle; }
      },
      synopsis: {
        text: function () { return this.attributes.synopsis; }
      }
    }

    Transparency.render(document.querySelector('#details'), data, directives);
  },
  renderError: function (msg) {
    var directives = {
      errorMsg: {
        text: function () { return this.value; }
      }
    }

    Transparency.render(document.querySelector('#error'), msg, directives);
  },
  toggle: function (route) {
    var section = document.querySelectorAll('section');
    var current = document.querySelector(route);

    section.forEach(function (item) {
      if (item === current) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
};

export default templates;
