ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _) {
  Entities.Contact = Backbone.Model.extend({
    defaults: {
      phoneNumber: 'No phone number!'
    }
  });

  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
    comparator: function(c1, c2) {
      if (c1.get('firstName') === c2.get('firstName'))
        if (c1.get('lastName') === c2.get('lastName'))
          return 0
        else
          return c1.get('lastName')  < c2.get('lastName')  ? -1 : 1
      else
        return c1.get('firstName') < c2.get('firstName') ? -1 : 1
    }
  });

  var contacts;

  var initializeContacts = function(){
    contacts = new ContactManager.Entities.ContactCollection([
      {
        firstName: 'Alice',
        lastName: 'Tampen',
        phoneNumber: '555-0148'
      },
      {
        firstName: 'Bob',
        lastName: 'Brigham',
        phoneNumber: '555-0163'
      },
      {
        firstName: 'Alice',
        lastName: 'Artsy',
        phoneNumber: '555-0284'
      },
      {
        firstName: 'Alice',
        lastName: 'Arten',
        phoneNumber: '555-0184'
      },
      {
        firstName: 'Charlie',
        lastName: 'Campbell',
        phoneNumber: '555-0129'
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        phoneNumber: '555-0344'
      }
    ]);
  };

  var API = {
    getContactEntities: function() {
      if(contacts === undefined) {
        initializeContacts();
      }
      return contacts;
    }
  };

  ContactManager.reqres.setHandler('contact:entities', function(){
    return API.getContactEntities();
  });


});
