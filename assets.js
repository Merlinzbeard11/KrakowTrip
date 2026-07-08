/* Offline hero images — local asset mapping.
   Images live in krakow-planner/img/ and are served alongside the app, so day
   heroes render with zero connectivity (the whole point on Tatra/Ojców day trips).
   Same UMD pattern: window.Assets in the browser, module.exports under Node. */
(function (root, factory) {
  var api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Assets = api;
})(typeof self !== 'undefined' ? self : this, function () {
  var DAY_IDS = ['day-1', 'day-2', 'day-3', 'day-4', 'day-5', 'day-6', 'day-7', 'day-8'];

  var HERO = {};
  for (var i = 0; i < DAY_IDS.length; i++) HERO[DAY_IDS[i]] = 'img/' + DAY_IDS[i] + '.jpg';

  function heroPath(id) {
    return Object.prototype.hasOwnProperty.call(HERO, id) ? HERO[id] : null;
  }

  return { DAY_IDS: DAY_IDS, HERO: HERO, heroPath: heroPath };
});
