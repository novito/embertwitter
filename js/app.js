var EmberTwitter = Em.Application.create({
  authors: "James and Joan",
  ready: function(){
    alert('Launching the EmberTwitter App!');
  }
});
/* Models */
EmberTwitter.store = DS.Store.create({
  revision: 4,
  adapter: DS.RESTAdapter.create({ bulkCommit: false })
});

EmberTwitter.Tweet = DS.Model.extend({
  avatar: null,
  screen_name: null,
  text: null,
  date: null
});


/* Views */
EmberTwitter.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("Ember Twitter App!");
  }
});
