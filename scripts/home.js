//Hamburger Navigation
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.ham-nav');
let isMoved = false;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
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

  // Wayfinding 

  const currentPath = window.location.pathname;

  const menuItems = document.querySelectorAll('nav a');

  menuItems.forEach(item => {

    if (item.getAttribute('href') === currentPath) {
 
      item.classList.add('active');
    }
  });
  