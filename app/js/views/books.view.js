define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var booksTemplate = require('hbs!app.templates/book.view');

  var Books = Backbone.View.extend({
    template: booksTemplate,

    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });

  return Books;
});