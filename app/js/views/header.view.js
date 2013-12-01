define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var headerTemplate = require('hbs!app.templates/header.view');

  var Header = Backbone.View.extend({
    template: headerTemplate,

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    events: {
      'click #about': 'about',
      'click #blog': 'blog',
      'click #books': 'books',
      'click #main': 'main',
      'click #podcasts': 'podcasts',
      'click #projects': 'projects'
    },

    about: function() {
      Backbone.trigger('location', 'about');
    },

    blog: function() {
      Backbone.trigger('location', 'blog');
    },

    books: function() {
      Backbone.trigger('location', 'books');
    },

    main: function() {
      Backbone.trigger('location', 'main');
    },

    podcasts: function() {
      Backbone.trigger('location', 'podcasts');
    },

    projects: function() {
      Backbone.trigger('location', 'projects');
    }

  });

  return Header;
});