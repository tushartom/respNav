// SHOW MENU
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show-menu');
  toggle.classList.toggle('show-icon');
});


// SHOW DROPDOWN MENU
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector('.dropdown__button');
  dropdownButton.addEventListener('click', () => {
    // Select the current show-dropdown class
    const showDropdown = document.querySelector('.show-dropdown')
    toggleItem(item);
    // Remove the show-dropdown class from other items
    if (showDropdown && showDropdown!= item) {
      toggleItem(showDropdown);
    }
  })
})
// Create a function to display the dropdown
function toggleItem(item) {
  const dropdownContainer = item.querySelector('.dropdown__container');
  // If same item contains the show-dropdown clas then remove it
  if (item.classList.contains('show-dropdown')) {
    dropdownContainer.removeAttribute('style')
    item.classList.remove('show-dropdown');
  } else {
    // Add maximum height to the dropdown content and add show-dropdown class
    dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
    item.classList.add('show-dropdown');
  }
 
}

// delete dropdown styles
const mediaQuery = matchMedia('(min-width: 1118px)');
const dropdownContainer = document.querySelectorAll('.dropdown__container');

const removeStyle = () => {
  if (mediaQuery.matches) {
    dropdownContainer.forEach((e => {
      e.removeAttribute('style');
    }));

    dropdownItems.classList.remove('show-dropdown');
  }
}
addEventListener('resize', removeStyle);