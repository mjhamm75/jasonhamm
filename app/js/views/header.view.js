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
      'click #about': 'about'
    },

    about: function() {
      this.trigger('location', 'about');
    }
  });

  return Header;
});