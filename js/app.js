// Init Github
const github = new Github()
// Init UI
const ui = new UI()

// # *** --- USER SEARCH --- *** #

const searchEntry = document.getElementById('search-entry')
const searchSubmit1 = document.getElementById('search-icon')
const searchSubmit2 = document.getElementById('search-submit')

searchSubmit1.addEventListener('click', (e) => passSearchTerm())
searchSubmit2.addEventListener('click', (e) => passSearchTerm())
searchEntry.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    passSearchTerm()
  }
})

// # *** --- GIVE NO RESULT --- *** #
function passSearchTerm() {
  const userEntry = searchEntry.value

  github.getUser(userEntry).then((res) => {
    if (res.userProfile.message == 'Not Found') {
      // SHOW NO RESULT FOR 3 SECONDS
      document.getElementById('searchDisplay').style.display = 'block'
      setTimeout(function () {
        document.getElementById('searchDisplay').style.display = 'none'
      }, 3000)
    } else {
      // SHOW USER INFO
      ui.showProfile(res.userProfile)
    }
  })
}
