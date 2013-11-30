define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var projectTemplate = require('hbs!app.templates/project.view');

  var Project = Backbone.View.extend({
    template: projectTemplate,

    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });

  return Project;
});