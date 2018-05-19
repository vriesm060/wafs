
'use strict';

(function () {

	var app = {
		init: function () {
			router.init();
		}
	};

	var router = {
		init: function () {

			// Show loader:
			utils.loader.show();

			// Activate sort button:
			utils.sortButton.el.addEventListener('click', function () {
				collection.sortByRank();
			}, false);

			// Get data:
			api.getData();

			routie({
				'': function () {
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

	var api = {
		getData: function () {
			return fetch ('https://kitsu.io/api/edge/anime')
				.then(function (res, err) {
					return res.json();
				})
				.then(function (res, err) {

					var map = res.data.map(function (item) {
						return {
							id: item.id,
							attributes: {
								'canonicalTitle': item.attributes.canonicalTitle,
								'coverImage': item.attributes.coverImage,
								'popularityRank': item.attributes.popularityRank,
								'posterImage': item.attributes.posterImage,
								'slug': item.attributes.slug,
								'synopsis': item.attributes.synopsis
							}
						}
					});

					// Store the data in the storeData array in collection:
					collection.storeData = map;

					// Render the overview:
					templates.render(map);

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
