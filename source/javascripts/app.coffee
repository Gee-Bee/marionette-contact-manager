$ ->
  ContactManager = new Marionette.Application()

  ContactManager.addRegions
    mainRegion: '#main-region'

  ContactView = Marionette.ItemView.extend
    template: '#contact-view-template'
    events:
      'click p': ->
        alert(this.model.escape 'phone_number')

  ContactManager.on 'start', ->
    contactView = new ContactView
      model: new Backbone.Model
        first_name: 'Alice'
        last_name: 'Arten'
        phone_number: '555-685'
    ContactManager.mainRegion.show(contactView);

  ContactManager.start();
