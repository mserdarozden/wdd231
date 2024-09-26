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

  document.addEventListener('DOMContentLoaded', function() {
    // Get all the links in the navigation
    const navLinks = document.querySelectorAll('nav a');
    
    // Get the current URL path, ignoring query strings or parameters
    const currentPage = window.location.pathname.split('/').pop().split('?')[0];
    
    // Loop through the links to find the one that matches the current page
    navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        
        // If the href matches the current page, add the "active" class
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});
  

