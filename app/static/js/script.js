
'use strict';

(function () {

	var app = {
		init: function () {
			routes.init();
		}
	}

	var routes = {
		init: function () {
			routes.findHash();
		},
		findHash: function () {
			if (hash().length) sections.toggle(hash());

			window.addEventListener('hashchange', function () {
				sections.toggle(hash());
			}, false);
		}
	}

	var sections = {
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
	}

	var hash = function () { return window.location.hash; }

	app.init();

})();
