/* global _ */

define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Header = require('views/header.view');
  var About = require('views/about.view');
  var Blog = require('views/blog.view');
  var Book = require('views/books.view');
  var MainBody = require('views/main.body.view');

  var Router = Backbone.Router.extend({
    currentView: null,
    routes: {
      '': 'main'

    },

    initialize: function() {
      _.bind(this.router, this);
      Backbone.on('location', this.router, this);
    },

    router: function(data) {
      switch(data) {
      case 'about':
        var about = new About();
        $('#body').html(about.render().el);
        break;
      case 'blog':
        var blog = new Blog();
        $('#body').html(blog.render().el);
        break;
      case 'book':
        var book = new Book();
        $('#body').html(book.render().el);
        break;
      }
    },

    main: function() {
      var header = new Header();
      $('#header').html(header.render().el);

      this.currentView = new MainBody();
      $('#body').html(this.currentView.render());
    }
  });

  return Router;
});