ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _){
  Show.Controller = {
    showContact: function(model) {
      var contact = new Show.Contact({
        model: model
      });

      ContactManager.mainRegion.show(contact);
    }
  };
});
