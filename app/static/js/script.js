
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
					api.getDetails(slug);
					templates.toggle('#details');
				},
				'error': function () {
					templates.toggle('#error');
				}
			});
		}
	};

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
					// Render the overview:
					templates.render(res.data);
				})
				.catch(function (err) {
					// Handle errors:
					console.log(err);
				});
		},
		getDetails: function (slug) {
			var url = `https://kitsu.io/api/edge/anime?filter[slug]=${slug}`;

			return fetch (url)
				.then(function (res, err) {
					return res.json();
				})
				.then(function (res, err) {
					templates.renderDetail(res.data[0]);
				})
				.catch(function (err) {
					// Handle errors:
					console.log(err);
				});
		}
	};

	var collection = {
		sortByRank: function () {
			var sort = this.storeData.sort(function (a, b) {
				return a.attributes.popularityRank - b.attributes.popularityRank;
			});
			templates.render(sort);
		}
	};

	// Add local storage somewhere

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
