define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var mainBodyTemplate = require('hbs!app.templates/main.body.view');

  var Body = Backbone.View.extend({
    template: mainBodyTemplate,

    render: function() {
      return this.template();
    }
  });

  return Body;
});