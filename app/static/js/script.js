
'use strict';

(function () {

	var app = {
		init: function () {
			routes.init();
		}
	};

	var routes = {
		init: function () {
			routes.getApi();
		},
		getApi: function () {
			fetch ('https://kitsu.io/api/edge/anime')
				.then(function (res, err) {
					return res.json();
				})
				.then(function (res, err) {

					localStorage.setItem('data', JSON.stringify(res.data));
					sections.insert(res.data);
					routes.findHash(res.data);

				})
				.catch(function (err) {
					console.log(err);
				});
		},
		findHash: function (data) {
			routie({
				'home': function () {
					sections.toggle('#home');
				},
				'anime': function () {
					sections.toggle('#anime');
				},
				'episodes': function () {
					sections.toggle('#episodes');
				},
				'details/:slug': function (slug) {
					sections.toggle('#details');

					var filterTitles = data.filter(function (item) {
						if (item.attributes.slug === slug) return item;
					});

					var directives = {
						posterImage: {
							src: function () { return this.attributes.posterImage.small; }
						},
						title: {
							text: function () { return this.attributes.titles.en_jp; }
						},
						synopsis: {
							text: function () { return this.attributes.synopsis; }
						}
					}

					Transparency.render(document.querySelector('#details'), filterTitles, directives);
				}
			});
		}
	};

	var sections = {
		insert: function (data) {
			var mapTitles = data.map(function (item) {
				return item;
			});

			var directives = {
				title: {
					text: function () {
						return this.attributes.titles.en_jp;
					},
					href: function (params) {
						return params.value + '/' + this.attributes.slug;
					}
				}
			}

			Transparency.render(document.querySelector('#anime-shows'), mapTitles, directives);
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

	app.init();

})();
