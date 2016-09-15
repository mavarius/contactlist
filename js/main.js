// MVP
  // DONE: user can add contacts to the list
  // DONE: user can update an existing contact on the list
  // DONE: user can delete contacts from list
  // DONE: user can easily understand UI
// EXTRA FEATURES
  // DONE: user can view contact creation form in a modal seperate from the list view
  // DONE: user can view contact update form in a modal seperate from the list view
  // DONE: user can add images to the contacts
  // TODO: user can sort contacts by clicking on field headers
  // TODO: user can filter contacts with a search field
  // TODO: user can categorize contacts into groups and can filter by group
  // TODO: user only sees edit and delete options on hover
  // TODO: user can be wowed by beautiful UI

// declare global variables
let $contactForm, $saveContact, $cancelForm, $close, $contactList, $cfName, $cfPhone, $cfEmail, $cfAddress, $cfAvatar;
let currID = null;
let allContacts = {};

// document ready
$(() => {
  // initialize variables
  $contactForm = $('#contactForm');
  $saveContact = $('#saveContact');
  $cancelForm = $('#cancelForm');
  $close = $('.close');
  $contactList = $('#contactList');
  $cfName = $('#cfName');
  $cfPhone = $('#cfPhone');
  $cfEmail = $('#cfEmail');
  $cfAddress = $('#cfAddress');
  $cfAvatar = $('#cfAvatar');

  $saveContact.click(saveContact);
  $cancelForm.click(clearForm);
  $close.click(clearForm);
  $contactList.on('click', '.editBtn', editContact);
  $contactList.on('click', '.deleteBtn', deleteContact);
})

// add contact handler
function saveContact(event) {
  event.preventDefault();

  let name = $cfName.val();
  let phone = $cfPhone.val();
  let email = $cfEmail.val();
  let address = $cfAddress.val();
  let avatar = $cfAvatar.val();
  if (avatar == '') {
    avatar = `https://api.adorable.io/avatars/50/${Math.floor(Math.random() * 5000)}`;
  }

  clearForm();

  let $row = contactTemplate(name, phone, email, address, avatar);

  if (!currID) {
    $contactList.append($row);
    let date = new Date().valueOf().toString();
    $row.attr('id', date);
    currID = $row.attr('id');
  } else {
    $contactList.find(`#${currID}`).replaceWith($row);
  }

  allContacts[currID] = {
    'ID' : currID,
    'name' : name,
    'phone' : phone,
    'email' : email,
    'address' : address,
    'avatar' : avatar
  }
  console.log(allContacts);

  currID = null;
}

// edit contact handler
function editContact(event) {
  let $target = $(event.target).closest("tr");

  let name = $target.children('.name').text();
  let phone = $target.children('.phone').text();
  let email = $target.children('.email').text();
  let address = $target.children('.address').text();
  let avatar = $target.children('.avatar').children("img").attr('src');

  $cfName.val(name);
  $cfPhone.val(phone);
  $cfEmail.val(email);
  $cfAddress.val(address);
  $cfAvatar.val(avatar);

  currID = $target.attr('id');

  return currID;
}

// delete contact handler
function deleteContact(event) {
  let $target = $(event.target);

  $target.closest("tr").remove();
}

// clone template and fill with data
function contactTemplate(name, phone, email, address, avatar) {
  let $row = $('#contactTemplate').clone();

  $row.children('.name').text(name);
  $row.children('.phone').text(phone);
  $row.children('.email').text(email);
  $row.children('.address').text(address);
  $row.children('.avatar').children("img").attr('src', avatar);

  return $row;
}

// clear form
function clearForm() {
  $cfName.val('');
  $cfPhone.val('');
  $cfEmail.val('');
  $cfAddress.val('');
  $cfAvatar.val('');
}
