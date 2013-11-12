define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Header = require('views/header.view');

  var Router = Backbone.Router.extend({
    routes: {
      "": "list"
    },

    list: function() {
      var header = new Header();
      $('#app').html(header.render());
    }
  });

  return Router;
});