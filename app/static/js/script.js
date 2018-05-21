'use strict';

import router from './router.js';
import templates from './templates.js';
import utils from './utils.js';

(function () {

	var app = {
		init: function () {
			// Activate sort buttons:
			utils.sortButtons.el.forEach(function (el) {
				el.addEventListener('click', function (e) {
					var self = this;
					var type = self.parentNode.parentNode.id;

					var sort = JSON.parse(localStorage.getItem(type)).sort(function (a, b) {
						return a.attributes.popularityRank - b.attributes.popularityRank;
					});

					templates.renderOverview(type, sort);

					e.preventDefault();
				}, false);
			});

			// Activate searchbars:
			utils.searchInputs.el.forEach(function (el) {
				el.addEventListener('input', function (e) {
					var self = this;
					var type = self.parentNode.parentNode.id;

					var search = JSON.parse(localStorage.getItem(type)).filter(function (item) {
						if (item.attributes.canonicalTitle.toLowerCase().includes(self.value.toLowerCase())) {
							return item;
						}
					});

					templates.renderOverview(type, search);

					e.preventDefault();
				}, false);
			});

			router.init();
		}
	};

	app.init();

})();
