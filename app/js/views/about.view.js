define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var aboutTemplate = require('hbs!app.templates/about.view');

  var About = Backbone.View.extend({
    template: aboutTemplate,

    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });

  return About;
});