
'use strict';

(function () {

	var app = {
		init: function () {

			// Show loader:
			utils.loader.show();

			// Activate sort button:
			utils.sortButton.el.addEventListener('click', function () {
				collection.sortByRank();
			}, false);

			router.init();
		}
	};

	var router = {
		init: function () {
			routie({
				'': function () {
					api.getAnime();
					templates.toggle('#home');
				},
				'anime': function () {
					templates.toggle('#anime');
				},
				'details/:slug': function (slug) {
					templates.toggle('#details');
					collection.getDetails(slug);
				},
				'error': function () {
					templates.toggle('#error');
				}
			});
		}
	};

	// https://kitsu.io/api/edge/anime
	// https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=0
	// https://kitsu.io/api/edge/anime/1

	var api = {
		headers: {
			fieldset: [
				'slug',
				'canonicalTitle',
				'posterImage'
			],
			pageLimit: 20
		},
		getAnime: function () {
			var url = `https://kitsu.io/api/edge/anime?fields[anime]=${this.headers.fieldset.join()}&page[limit]=${this.headers.pageLimit}&page[offset]=0`;

			return fetch (url)
				.then(function (res, err) {
					return res.json();
				})
				.then(function (res, err) {

					console.log(res);

					// Render the overview:
					templates.render(res);

				})
				.catch(function (err) {
					// Handle errors:
					console.log(err);
				});
		}
	};

	var collection = {
		storeData: [],
		getDetails: function (slug) {
			var details = this.storeData.filter(function (item) {
				if (item.attributes.slug === slug) return item;
			});
			templates.renderDetail(details);
		},
		sortByRank: function () {
			var sort = this.storeData.sort(function (a, b) {
				return a.attributes.popularityRank - b.attributes.popularityRank;
			});
			templates.render(sort);
		}
	};

	var templates = {
		render: function (data) {
			var directives = {
				link: {
					href: function (params) { return params.value + '/' + this.attributes.slug; }
				},
				posterImage: {
					src: function () { return this.attributes.posterImage.small; }
				},
				title: {
					text: function () { return this.attributes.canonicalTitle; }
				}
			}

			Transparency.render(document.querySelector('#anime-shows'), data, directives);

			// Hide loader:
			utils.loader.hide();
		},
		renderDetail: function (data) {
			var directives = {
				coverImage: {
					src: function () { return this.attributes.coverImage.large; }
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
		}
	};

	app.init();

})();
