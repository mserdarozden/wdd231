import aSplit from "./split.mjs";


const fname = document.querySelector('#fname');
fname.textContent = `First name: ${aSplit.show("fname")}`;

const lname = document.querySelector('#lname');
lname.textContent = `Last name: ${aSplit.show("lname")}`;

const email = document.querySelector('#email');
email.textContent = `E-mail: ${aSplit.show("email")}`;

const phone = document.querySelector('#phone');
phone.textContent = `Mobile Phone Number: ${aSplit.show("phone")}`;

const ttype = document.querySelector('#ttype');
ttype.textContent = `Registered Training: ${aSplit.show("training")}`;

const timestamp = document.querySelector('#timestamp');
timestamp.textContent = `Date and time: ${aSplit.show("timestamp")}`;