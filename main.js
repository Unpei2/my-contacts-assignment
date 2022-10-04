// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');

let contacts = []
// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  }
}
let contactstring = JSON.stringify(contacts)
// MENU FUNCTIONS
function displayContacts() {
  console.log('Display Contacts');
  outputEl.innerHTML = contactstring
  
}

function addContact() {
  let contname = prompt("Contact Name?")
  let contemail = prompt("Contact Email?")
  let contnumber = prompt("Contact Number?")
  let contcountry = prompt("Contact Country?")
  contacts.push(information(contname, contemail, contnumber, contcountry));
  let contactstring = JSON.stringify(contacts)
  localStorage.setItem(contname, contactstring)   
  displayContacts() 
}

function removeContact() {
  console.log('Remove Contact');
}

function displayByName() {
  console.log('Display by Name');
  
}

function displayByCountry() {
  console.log('Display by Country');
}

function information(name,email,number,country) {
  return {
    name, 
    email, 
    number, 
    country
  }
}