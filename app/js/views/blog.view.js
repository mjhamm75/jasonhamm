define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var blogTemplate = require('hbs!app.templates/blog.view');

  var Blog = Backbone.View.extend({
    template: blogTemplate,

    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });

  return Blog;
});