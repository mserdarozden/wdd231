//Grab the entire URL for this page including the attached GET values
const currentUrl = window.location.href;
console.log(currentUrl);

//Divide the url into two halves
const everything = currentUrl.split('?');
console.log(everything);

//Grab just the second half
let formData = everything[1].split('&');
console.log(formData);

function show(cup) {
    let result = null; 
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element
                .split('=')[1]
                .replace(/%40/g, "@")  
                .replace(/%2C/g, ",")  
                .replace(/\+/g, " ")
                .replace(/%2F/g, "/")
                .replace(/%3A/g, ":");  
        } 
    });
    return result; 
} 

const fname = document.querySelector('#fname');
fname.textContent = `First name: ${show("fname")}`;

const lname = document.querySelector('#lname');
lname.textContent = `Last name: ${show("lname")}`;

const email = document.querySelector('#email');
email.textContent = `E-mail: ${show("email")}`;

const phone = document.querySelector('#phone');
phone.textContent = `Mobile Phone Number: ${show("phone")}`;

const bname = document.querySelector('#bname');
bname.textContent = `Business/organization's name: ${show("bname")}`;

const timestamp = document.querySelector('#timestamp');
timestamp.textContent = `Date and time: ${show("timestamp")}`;