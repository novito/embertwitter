var App = Em.Application.create();
/* Models */
App.store = DS.Store.create({
  revision: 4
});


/* Views */
App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  }
});
