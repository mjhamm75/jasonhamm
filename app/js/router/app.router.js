define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Header = require('views/header.view');
  var MainBody = require('views/main.body.view');

  var Router = Backbone.Router.extend({
    routes: {
      "": "main",
      "about": "about"
    },

    list: function() {
      var header = new Header();
      $('#header').html(header.render());

      var body = new MainBody();
      $('#app').html(body.render());
    },

    about: function() {
      var header = new Header();
      $('#header').html(header.render().el);
    },

    test: function() {
      console.log('Test');
    }
  });

  return Router;
});