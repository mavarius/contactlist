// MVP
  // DONE: user can add contacts to the list
  // TODO: user can update an existing contact on the list
  // TODO: user can delete contacts from list
  // TODO: user can easily understand UI
// EXTRA FEATURES
  // DONE: user can view contact creation form in a modal seperate from the list view
  // TODO: user can view contact update form in a modal seperate from the list view
  // TODO: user can add images to the contacts
  // TODO: user can sort contacts by clicking on field headers
  // TODO: user can filter contacts with a search field
  // TODO: user can categorize contacts into groups and can filter by group
  // TODO: user only sees edit and delete options on hover

// declare global variables
let $contactForm, $addNewContact, $cancelForm, $close, $contactList, $cfName, $cfPhone, $cfEmail, $cfAddress;

// document ready
$(() => {
  // initialize variables
  $contactForm = $('#contactForm');
  $addNewContact = $('#addNewContact');
  $cancelForm = $('#cancelForm');
  $close = $('.close');
  $contactList = $('#contactList');
  $cfName = $('#cfName');
  $cfPhone = $('#cfPhone');
  $cfEmail = $('#cfEmail');
  $cfAddress = $('#cfAddress');

  $addNewContact.click(addNewContact);
  $cancelForm.click(clearForm);
  $close.click(clearForm);
  $contactList.on('click', '.editBtn', editContact);
  $contactList.on('click', '.deleteBtn', deleteContact);
})

// add contact handler
function addNewContact(event) {
  event.preventDefault();

  let name = $cfName.val();
  let phone = $cfPhone.val();
  let email = $cfEmail.val();
  let address = $cfAddress.val();

  clearForm();

  let $row = contactTemplate(name, phone, email, address);
  $contactList.append($row);
}

// edit contact handler
function editContact(event) {
  let $target = $(event.target);

  console.log($target.closest("tr").children('.name').text());
  console.log($target.closest("tr").children('.phone').text());
  console.log($target.closest("tr").children('.email').text());
  console.log($target.closest("tr").children('.address').text());
}

// delete contact handler
function deleteContact(event) {
  let $target = $(event.target);

  $target.closest("tr").remove();
}

// clone template and fill with data
function contactTemplate(name, phone, email, address) {
  let $row = $('#contactTemplate').clone();

  $row.children('.name').text(name);
  $row.children('.phone').text(phone);
  $row.children('.email').text(email);
  $row.children('.address').text(address);

  return $row;
}

// clear form
function clearForm() {
  $cfName.val('');
  $cfPhone.val('');
  $cfEmail.val('');
  $cfAddress.val('');
}
