/* global Blog */

define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  var BlogCollection = Backbone.Collection.extend({
    model: Blog
  });

  return BlogCollection;
});