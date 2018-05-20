
'use strict';

(function () {

	var app = {
		init: function () {
			// Show loader:
			utils.loader.show();

			// Activate sort button:
			utils.sortButton.el.addEventListener('click', function () {
				var sort = JSON.parse(localStorage.getItem('anime')).data.sort(function (a, b) {
					return a.attributes.popularityRank - b.attributes.popularityRank;
				});
				templates.render(sort);
			}, false);

			// Activate more button:
			utils.moreButton.el.addEventListener('click', function () {
				// api.getAnime();
			}, false);

			router.init();
		}
	};

	var router = {
		init: function () {
			routie({
				'': function () {

					// Remove data from localStorage for dev:
					localStorage.removeItem('anime');

					if (localStorage.getItem('anime') !== null) {
						var storage = JSON.parse(localStorage.getItem('anime'));
						templates.render(storage.data);
					} else {
						api.getAnime();
					}

					templates.toggle('#home');
				},
				'manga': function () {
					templates.toggle('#manga');
				},
				'details/:slug': function (slug) {

					// Find a better way to do this..
					var anime = function () {
						if (localStorage.getItem('anime') === null) {
							return;
						} else {
							var storage = JSON.parse(localStorage.getItem('anime'));

							return storage.data.filter(function (item) {
								if (item.attributes.slug === slug) {
									return item;
								}
							});
						}
					}

					if (anime() !== undefined && anime().length > 0) {
						templates.renderDetail(anime()[0]);
						console.log('rendered through localStorage');
					} else {
						api.getDetails(slug);
						console.log('rendered through API call');
					}

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
				'posterImage',
				'coverImage',
				'synopsis'
			],
			pageLimit: 20,
			pageOffset: 0
		},
		getAnime: function () {
			var url = `https://kitsu.io/api/edge/anime?fields[anime]=${this.headers.fieldset.join()}&page[limit]=${this.headers.pageLimit}&page[offset]=${this.headers.pageOffset}`;

			return fetch (url)
				.then(function (res, err) {
					return res.json();
				})
				.then(function (res, err) {
					// Add the data to localStorage:
					localStorage.setItem('anime', JSON.stringify(res));

					// Render the overview:
					templates.render(res.data);

					// Add the length of the data to headers.pageOffset:
					api.headers.pageOffset += res.data.length;
				})
				.catch(function (err) {
					// Handle errors:
					console.log(err);
				});
		},
		getDetails: function (slug) {
			var url = `https://kitsu.io/api/edge/anime?filter[slug]=${slug}&fields[anime]=${this.headers.fieldset.join()}`;

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
		},
		moreButton: {
			el: document.querySelector('#more')
		}
	};

	app.init();

})();
