// Keep search toggling out of the global scope
(function(window, document, undefined) {
    // Variables
    var open = document.querySelector('.button-open');
    var close = document.querySelector('.button-close');
    var overlay = document.querySelector('.overlay');
    var search = document.querySelector('.input-search');
    
    // Focus on an element
    var focusOn = function(element) {
      // Only focus on the element if it contains the relevant
      // class name that means it’s actually visible
      if (overlay.classList.contains('showing')) {
        element.focus();
      }
      // Otherwise remove the focus from the element
      else {
        element.blur();
      }
    }
    
    // Toggles a set of class names on an element
    var toggler = function() {
      // Toggle the classes which set off the transition
      overlay.classList.toggle('hiding');
      overlay.classList.toggle('showing');
      
      // Once the overlay’s transition ends focus the search field
      overlay.addEventListener('transitionend', focusOn.bind(null, search), false);
      
      // Prevent the clicks from navigating away
      return false;
    }
    
    // Add the event listener to the toggle
    open.addEventListener('click', toggler, false);
    close.addEventListener('click', toggler, false);
  })(window, document);