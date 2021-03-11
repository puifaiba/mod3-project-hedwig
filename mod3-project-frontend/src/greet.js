document.addEventListener("DOMContentLoaded", () => {
  loginPage()
})

const clientContainer = document.querySelector(".client_container")
const loginForm = document.querySelector(".login-form")
const profileUser = document.querySelector(".profile_username")

function loginPage() {
  clientContainer.style.display = "none"
  loginForm.addEventListener("submit", (event) => handleLoginSubmit(event))
}

function handleLoginSubmit(event) {
  event.preventDefault()
  const username = loginForm.username.value
  console.log(username)
  profileUser.innerText = username
  barResizer()
}
