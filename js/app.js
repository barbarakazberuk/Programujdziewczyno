'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // Dropdown element in navigation
    var elementWithDropdown = document.querySelector('.for-dropdown');
    
    console.log(elementWithDropdown);
    
    var dropdown = document.querySelector('.dropdown');
    
    // console.log(dropdown);
    
    elementWithDropdown.addEventListener('mouseover', function() {
        // console.log('myszka jest tu');
        dropdown.style.display = "block";
        });
      
    elementWithDropdown.addEventListener('mouseout', function() {
    dropdown.style.display = "none";
    });

    
    
    var buttons = document.querySelectorAll('.read-more');
    console.log(buttons);
    console.log(buttons[0].previousElementSibling); 
    
    buttons[0].addEventListener('click', function() {
      console.log('działa', this); // To powinnaś zobaczyć w konsoli po kliknięciu w pierwszy przycisk
    });
    
   
    
        
    });