
'use strict';

(function () {

	var app = {
		init: function () {
			routes.init();
		}
	}

	var routes = {
		init: function () {
			routes.getApi();
			routes.findHash();
		},
		getApi: function () {
			fetch ('https://kitsu.io/api/edge/anime')
				.then(function (res, err) {
					return res.json();
				})
				.then(function (res, err) {

					localStorage.setItem('data', JSON.stringify(res));
					sections.insert(res.data);

				})
				.catch(function (err) {
					console.log(err);
				});
		},
		findHash: function () {
			routie({
				'home': function () {
					sections.toggle('#home');
				},
				'anime': function () {
					sections.toggle('#anime');
				},
				'episodes': function () {
					sections.toggle('#episodes');
				}
			});
		}
	};

	var sections = {
		insert: function (data) {
			console.log(data[0].attributes.abbreviatedTitles[0]);
			for (var i = 0; i < data.length; i++) {
				var span = document.createElement('SPAN');
				span.setAttribute('data-bind', 'title' + i);
				span.textContent = data[i].attributes.abbreviatedTitles[0];
			}
			/*var homeContent = {
				titles: 
			};

			Transparency.render(document.querySelector('#home'), homeContent);*/
		},
		toggle: function (route) {
			var section = document.querySelectorAll('section');
			var current = document.querySelector(route);

			section.forEach(function (item) {
				if (item === current) {
					item.classList.add('show');
				} else {
					item.classList.remove('show');
				}
			});
		}
	};

	var hash = function () { return window.location.hash; };

	app.init();



	// Oude routes:
	/*var routes = {
		init: function () {
			routes.findHash();
		},
		findHash: function () {
			if (hash().length) sections.toggle(hash());

			window.addEventListener('hashchange', function () {
				sections.toggle(hash());
			}, false);
		}
	}*/



})();
