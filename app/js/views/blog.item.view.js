define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var blogItemTemplate = require('hbs!app.templates/blog.item.view');
  require('utilities/handlebars.helpers');

  var BlogItemView = Backbone.View.extend({
    template: blogItemTemplate,

    render: function(blog) {
      this.$el.html(this.template({blog: blog.model.toJSON()}));
      return this;
    }
  });

  return BlogItemView;
});