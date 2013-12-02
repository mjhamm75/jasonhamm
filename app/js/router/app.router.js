/* global _ , hljs*/

define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Header = require('views/header.view');
  var About = require('views/about.view');
  var Blog = require('views/blog.collection.view');
  var Book = require('views/books.view');
  var Main = require('views/main.body.view');
  var Podcast = require('views/podcast.view');
  var Project = require('views/project.view');
  // require('DlHighlight');
  require('highlight');


  var Router = Backbone.Router.extend({
    currentView: null,
    routes: {
      '':'main'
    },

    initialize: function() {
      _.bind(this.router, this);
      Backbone.on('location', this.router, this);
    },

    router: function(data) {
      switch(data) {
      case 'about':
        var about = new About();
        $('#body').html(about.render().el);
        break;
      case 'blog':
        var blog = new Blog();
        $('#body').html(blog.render().el);
        $("pre").each(function (i, e) {
          hljs.highlightBlock(e);
        });
        break;
      case 'books':
        var book = new Book();
        $('#body').html(book.render().el);
        break;
      case 'main':
        var main = new Main();
        $('#body').html(main.render().el);
        break;
      case 'podcasts':
        var podcast = new Podcast();
        $('#body').html(podcast.render().el);
        break;
      case 'projects':
        var project = new Project();
        $('#body').html(project.render().el);
        break;
      default:
        var main1 = new Main();
        $('#body').html(main1.render());
        break;
      }
    },

    main: function(action) {
      var header = new Header();
      $('#header').html(header.render().el);

      this.router(action);
    },

    // test: function(action) {
    //   // debugger;
    // }
  });

  return Router;
});