define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var blogCollectionTemplate = require('hbs!app.templates/blog.collection.view');
  var BlogModel = require('models/blog.item.model');
  var BlogModelView = require('views/blog.item.view');

  var BlogCollectionView = Backbone.View.extend({
    template: blogCollectionTemplate,

    initialize: function() {
      var model1 = new BlogModel({ tags: 'Javascript'});
      var model2 = new BlogModel({ tags: 'Ruby'});
      var model3 = new BlogModel({ tags: 'Angular'});
      this.collection = new Backbone.Collection();
      this.collection.push(model1);
      this.collection.push(model2);
      this.collection.push(model3);
    },

    render: function() {
      this.$el.html(this.template());
      this.renderAll();
      return this;
    },

    renderAll: function() {
      var that = this;
      this.collection.each(function(blog) {
        that.renderItem(new BlogModelView({model: blog}));
      });
    },

    renderItem: function(blog) {
      this.$el.find('#blog-posts').append(blog.render().el);
    }
  });

  return BlogCollectionView;
});