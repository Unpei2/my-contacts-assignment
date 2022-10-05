// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');
let contacts = loadContacts()


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
// MENU FUNCTIONS
function displayContacts() {
  
  for (i = 0;i<contacts.length;i ++){
    let output = " "
    output += getContactHTMLStr(i,contacts[i])
  }
  outputEl.innerHTML = output

}
function getContactHTMLStr(i, contact){
  return `
    <div class="${contact.name}">
      <h3>${i}: ${contact.name}</h3>
      <p>${contact.email}</p>
      <p>${contact.number}(${contact.country})<p>
    </div>
  `;
}
function addContact() {
  let contname = prompt("Contact Name?")
  let contemail = prompt("Contact Email?")
  let contnumber = prompt("Contact Number?")
  let contcountry = prompt("Contact Country?")
  contacts.push(information(contname, contemail, contnumber, contcountry));
  savecont()
}

function removeContact() {
  let removecont = +prompt("Which contact do you want to remove?")
  contacts.splice(removecont, 1)
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
function loadContacts(){
  let contactsStr = localStorage.getItem("Contacts");
  return JSON.parse(contactsStr) ?? []
}
function savecont(){
  let contactstring = JSON.stringify(contacts)
  localStorage.setItem("Contacts", contactstring)   
  displayContacts() 
}