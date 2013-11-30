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
      'click #book': 'book'
    },

    about: function() {
      Backbone.trigger('location:about', 'about');
    },

    blog: function() {
      Backbone.trigger('location:blog', 'blog');
    },

    book: function() {
      Backbone.trigger('location:book', 'book');
    }

  });

  return Header;
});