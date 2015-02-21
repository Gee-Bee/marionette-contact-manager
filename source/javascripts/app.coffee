$ ->
  # $('#main-region').html($('#static-view-template').html());
  ContactManager = new Marionette.Application()

  ContactManager.addRegions
    mainRegion: '#main-region'

  StaticView = Marionette.ItemView.extend
    template: '#static-view-template'

  ContactManager.on 'start', ->
    ContactManager.mainRegion.show(new StaticView);

  ContactManager.start();
