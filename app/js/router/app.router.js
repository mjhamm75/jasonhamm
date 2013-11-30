define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Header = require('views/header.view');
  var MainBody = require('views/main.body.view');

  var Router = Backbone.Router.extend({
    routes: {
      "": "list"
    },

    list: function() {
      var header = new Header();
      $('#header').html(header.render());

      var body = new MainBody();
      $('#app').html(body.render());
    }
  });

  return Router;
});