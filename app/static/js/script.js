
'use strict';

(function () {

	var app = {
		init: function () {
			routes.init();
		}
	}

	var routes = {
		init: function () {
			if (location.getHash().length) {
				sections.toggle(location.getHash());
			}

			window.addEventListener('hashchange', function () {
				sections.toggle(location.getHash());
			}, false)
		}
	}

	var sections = {
		toggle: function (route) {
			var section = document.querySelectorAll('section');
			var current = document.getElementById(route.slice(1));

			for (var i = 0; i < section.length; i++) {
				section[i].classList.add('hide');
			}

			current.classList.remove('hide');
		}
	}

	var location = {
		getHash: function () { return window.location.hash; }
	}

	app.init();

})();
