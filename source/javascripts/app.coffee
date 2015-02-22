#= require_tree ./templates

$ ->
  ContactManager = new Marionette.Application()

  ContactManager.addRegions
    mainRegion: '#main-region'

  ContactView = Marionette.ItemView.extend
    template: JST['templates/contact']
    events:
      'click p': ->
        alert(this.model.escape 'phone_number')

  ContactManager.on 'start', ->
    alice = new Backbone.Model
      first_name: 'Alice'
      last_name: 'Arten'
      phone_number: '555-685'

    contactView = new ContactView
      model: alice

    ContactManager.mainRegion.show(contactView);

  ContactManager.start();
