angular
  .module('contacts-service', [])
  .service('contactsService', function ContactsService() {

    var CONTACT_DATA = [
      {
        id: 0,
        name: 'Sahil Malik',
        email: 'sahilmalik@winsmarts.com'
      },
      {
        id: 1,
        name: 'Mickey Mouse',
        email: 'contact@winsmarts.com'
      },
      {
        id: 2,
        name: 'Goofy',
        email: 'goofy@winsmarts.com'
      }
    ];

    this.getContacts = function () {
      return CONTACT_DATA;
    };

    this.getContact = function (id) {
      return this.getContacts()
        .find(function (contact) {
          return contact.id == id;
        })
    }
  });
