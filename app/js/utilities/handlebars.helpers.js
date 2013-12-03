/* r*/
define(function(require) {
  'use strict';

  var Handlebars = require('handlebars');
  var _ = require('underscore');

  Handlebars.registerHelper('getRandomCss', function() {
    return _.sample(['primary', 'success', 'info', 'warning', 'danger']);
  });

});