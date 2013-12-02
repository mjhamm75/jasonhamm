define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  var BlogItem = Backbone.Model.extend({
    defaults: {
      tags: 'Javascript',
      date: null
    }
  });

  return BlogItem;
});