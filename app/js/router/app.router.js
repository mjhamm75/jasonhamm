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
      _.bindAll(this, 'about');
      Backbone.on('location:about', this.about, this);
      Backbone.on('location:blog', this.blog, this);
      Backbone.on('location:book', this.book, this);
    },

    main: function() {
      var header = new Header();
      $('#header').html(header.render().el);

      this.currentView = new MainBody();
      $('#body').html(this.currentView.render());
    },

    about: function() {
      // this.currentView.close();
      var about = new About();
      $('#body').html(about.render().el);
    },

    blog: function() {
      // this.currentView.close();
      var blog = new Blog();
      $('#body').html(blog.render().el);
    },

    book: function() {
      // this.currentView.close();
      var book = new Book();
      $('#body').html(book.render().el);
    }
  });

  return Router;
});