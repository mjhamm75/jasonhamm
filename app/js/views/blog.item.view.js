define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var blogItemTemplate = require('hbs!app.templates/blog.item.view');

  var BlogItemView = Backbone.View.extend({
    template: blogItemTemplate,

    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });

  return BlogItemView;
});