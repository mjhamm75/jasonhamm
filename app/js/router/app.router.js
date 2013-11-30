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

    initialize: function() {
      Backbone.on('location', this.test);
    },

    main: function() {
      var header = new Header();
      $('#header').html(header.render().el);

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