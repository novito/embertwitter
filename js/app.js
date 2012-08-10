var EmberTwitter = Em.Application.create({
  ready: function(){
    alert('Launching the EmberTwitter App!');
  }
});
/* Models */
EmberTwitter.store = DS.Store.create({
  revision: 4,
  adapter: DS.RESTAdapter.create({ bulkCommit: false })
});


/* Views */
EmberTwitter.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("Ember Twitter App!");
  }
});
