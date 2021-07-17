const darkModeToggle = document.querySelector('#dark__mode__toggle')
const tableBody = document.querySelector('.table__body')

function toggleMenu (event) {
  const regex = /^actions__input/
  if (event.target.id.match(regex)) {
    event.target.nextElementSibling.classList.toggle('hidden')
  }
}

function toggleDarkMode (event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

function toggleRowHighlight (event) {
  if (event.target.checked) {
    event.target.closest('.table__row').setAttribute('data-theme', 'highlight')
  } else {
    event.target.closest('.table__row').setAttribute('data-theme', 'normal')
  }
}

darkModeToggle.addEventListener('change', toggleDarkMode)
tableBody.addEventListener('click', toggleMenu)
tableBody.addEventListener('change', toggleRowHighlight)
