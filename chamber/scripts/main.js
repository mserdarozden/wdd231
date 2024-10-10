//Hamburger Button open and close
const hamburgerElement = document.querySelector('#hamButton');
const navElement = document.querySelector('#animatedNav');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
    console.log("hambutoon clicked")
});

//Footer Last Modidfed Date and Time
function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  function getLastModified() {
    return new Date(document.lastModified).toLocaleString();
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');
    
    if (currentYearElement) {
      currentYearElement.textContent = getCurrentYear();
    }
    
    if (lastModifiedElement) {
      lastModifiedElement.textContent = getLastModified();
    }
    
  });
  console.log("main loaded");