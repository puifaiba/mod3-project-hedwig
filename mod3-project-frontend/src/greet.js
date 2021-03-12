document.addEventListener("DOMContentLoaded", () => {
  loginPage()
})

USERS_URL = "http://localhost:3000/users/"
SORTINGHAT_URL = "https://www.potterapi.com/v1/sortinghat"

const clientContainer = document.querySelector(".client_container")
const loginSection = document.querySelector(".login-section")
const loginForm = document.querySelector(".login-form")
const sortingHatSection = document.querySelector(".sorting_hat_section")
const profileUser = document.querySelector(".profile_username")

function loginPage() {
  clientContainer.style.display = "none"
  sortingHatSection.style.display = "none"
  loginForm.addEventListener("submit", (event) => handleLoginSubmit(event))
}

function handleLoginSubmit(event) {
  event.preventDefault()
  const sessionUser = loginForm.username.value
  let found = false
  fetch(USERS_URL)
    .then((res) => res.json())
    .then((usersData) => {
      usersData.forEach((user) => {
        if (user.username === sessionUser) {
          found = true
          console.log(found)
          sortingHatSection.remove()
          return runHPChat()
        }
      })
    })
  if (found === false) {
    console.log(found)
    return sortingHat(sessionUser)
  }
  loginForm.reset()
}

function sortingHat(sessionUser) {
  fetch(SORTINGHAT_URL)
    .then((res) => res.json())
    .then((data) => console.log(data))

  loginSection.remove()
  sortingHatSection.style.display = "block"
}
