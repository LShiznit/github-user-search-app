let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#toggle-theme')

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.documentElement.classList.remove('light')
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled')
  // 3. Switch icon image = remove active class
  darkModeToggle.classList.remove('active')
  darkModeToggle.innerHTML = 'LIGHT '
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.documentElement.classList.add('light')
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', null)
  // 3. Switch icon image = remove active class
  darkModeToggle.classList.add('active')
  darkModeToggle.innerHTML = 'DARK'
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode()
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode')

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode()
    // if it has been enabled, turn it off
  } else {
    disableDarkMode()
  }
})
