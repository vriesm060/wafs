'use strict';

import router from './router.js';
import api from './api.js';
import templates from './templates.js';
import utils from './utils.js';

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

			// Activate anime searchbar:
			utils.searchAnime.el.addEventListener('input', function (e) {
				var self = this;
				console.log(self.value);

				var search = JSON.parse(localStorage.getItem('anime')).data.filter(function (item) {
					if (item.attributes.canonicalTitle.toLowerCase().includes(self.value.toLowerCase())) {
						return item;
					}
				});

				console.log(search);

				templates.render(search);

				e.preventDefault();
			}, false);

			router.init();
		}
	};

	app.init();

})();
