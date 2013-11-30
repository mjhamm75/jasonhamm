define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var podcastTemplate = require('hbs!app.templates/podcast.view');

  var Podcast = Backbone.View.extend({
    template: podcastTemplate,

    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });

  return Podcast;
});