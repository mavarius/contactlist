// MVP
// TODO: user can add contacts to the list
// TODO: user can update an existing contact on the list
// TODO: user can delete contacts from list
// TODO: user can easily understand UI
// EXTRA FEATURES
// TODO: user can view contact creation form in a modal seperate from the list view
// TODO: user can add images to the contacts
// TODO: user can sort contacts by clicking on field headers
// TODO: user can filter contacts with a search field
// TODO: user can categorize contacts into groups and can filter by group

// declare global variables
let $newContact, $contactList;

// document ready
$(() => {
  // initialize variables
  $newContact = $('#newContact');
  $contactList = $('#contactList')

  $newContact.click(newContact);
})

// add contact handler
function newContact() {

}
