// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');
let contacts = loadContacts()
displayContacts()

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
  let output = "  ";
  for (i = 0;i < contacts.length;i ++){
    
    output += getContactHTMLStr(i,contacts[i])
    
  }
  outputEl.innerHTML = output
}
function getContactHTMLStr(i, contact){
  return `
    <div class="${contact.name}">
      <h3>${i}: ${contact.name}</h3>
      <p>${contact.email}</p>
      <p>${contact.number} (${contact.country})<p>
    </div>
  `;
}
function addContact() {
  contname = prompt("Contact Name?").toLowerCase()
  console.log(contname)
  contemail = prompt("Contact Email?")
  contnumber = prompt("Contact Number?")
  contcountry = prompt("Contact Country?").toLowerCase()
  contacts.push(information(contname, contemail, contnumber, contcountry));
  savelocal()
}
function removeContact() {
  let removecont = +prompt("Which contact do you want to remove?")
  contacts.splice(removecont, 1)
  savelocal()
  displayContacts()
  alert(`Contact ${removecont} has been removed.`)
}
function displayByName() {
  askname = prompt("What name are you looking for?").toLowerCase()  
  let output = "  ";
  for (i = 0;i < contacts.length;i ++){
    if (contacts[i].name === askname){
        output += getContactHTMLStr(i,contacts[i])
    }
  }
  outputEl.innerHTML = output
}
function displayByCountry() {
  askcountry = prompt("What country are you looking for?").toLowerCase()  
  let output = "  ";
  for (i = 0;i < contacts.length;i++){
    if (contacts[i].country === askcountry){
        output += getContactHTMLStr(i,contacts[i])
    }
  }
  outputEl.innerHTML = output
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
function savelocal(){
  let contactstring = JSON.stringify(contacts)
  localStorage.setItem("Contacts", contactstring)   
  displayContacts() 
}
