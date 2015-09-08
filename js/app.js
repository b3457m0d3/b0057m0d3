define(['jquery','lodash','backbone','controller'],
function($, _, Backbone){
  var Controller = Backbone.Controller.extend({
    routes: {
      '': 'index',
      'wizard(/)': 'wizard'
    },
    initialize: function() {
      // Use absolute URLs to navigate to anything not in your Router.
      $(document).delegate("a", "click", function(evt) {
        var href = $(this).attr("href");
        var protocol = this.protocol + "//";
        if (href.slice(protocol.length) !== protocol && protocol !== 'javascript://' && href.substring(0, 1) !== '#') {
          evt.preventDefault();
          Backbone.history.navigate(href, true);
        }
      });
    },
    index: function(){
      require(["Wizard"], function(Wizard){
        var wizard = new Wizard();
        wizard.$el.appendTo($('.modal-body'));
        wizard.render();
      });
    },
    wizard: function(){
      console.log("~~wizard~~");
      require(["scrollSpyView"],function(ssView){
        var ss = new ssView({el:$(".container"),context:$("#scrollContent")});
      });
    },
    onBeforeRoute : function(url) {
      console.log('before route');
    },
    onAfterRoute : function() {
      console.log('after route');
    }
  });
  return {
    init: function(){
      var main = new Controller({router : true});
      Backbone.history.start({ pushState: true, root: "/" });
    }
  }
});
