define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  var BlogItem = Backbone.Model.extend({
    defaults: {
      tags: null,
      date: null
    }
  });

  return BlogItem;
});