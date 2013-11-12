define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var headerTemplate = require('hbs!app.templates/header.view');

  var Header = Backbone.View.extend({
    template: headerTemplate,

    render: function() {
      return this.template();
    }
  });

  return Header;
});