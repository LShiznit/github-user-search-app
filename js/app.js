// Init Github
const github = new Github()
// Init UI
const ui = new UI()

// # *** --- USER SEARCH --- *** #

const searchEntry = document.getElementById('search-entry')
const searchSubmit1 = document.getElementById('search-icon')
const searchSubmit2 = document.getElementById('search-submit')

console.log(typeof searchSubmit)

searchSubmit1.addEventListener('click', (e) => {
  const userEntry = searchEntry.value
  console.log(userEntry)

  github.getUser(userEntry).then((res) => {
    console.log(res.userProfile)
    if (res.userProfile.message == 'Not Found') {
      console.log(res.userProfile.message)
    } else {
      console.log(res.userProfile)
    }
  })
})
