// document.addEventListener("DOMContentLoaded", () => {
//   loginPage()
// })

// USERS_URL = "http://localhost:3000/users/"
// SORTINGHAT_URL = "https://www.potterapi.com/v1/sortinghat"

// const clientContainer = document.querySelector(".client_container")
// const loginSection = document.querySelector(".login-section")
// const loginForm = document.querySelector(".login-form")
// const sortingHatSection = document.querySelector(".sorting_hat_section")
// const profileUser = document.querySelector(".profile_username")

// function loginPage() {
//   loginForm.addEventListener("submit", (event) => handleLoginSubmit(event))
// }

// function handleLoginSubmit(event) {
//   event.preventDefault()
//   const sessionUser = loginForm.username.value
//   fetch(USERS_URL)
//     .then((res) => res.json())
//     .then((usersData) => {
//       let found = false
//       usersData.forEach((user) => {
//         if (user.username === sessionUser) {
//           found = true
//           sortingHatSection.remove()
//           return runHPChat()
//         }
//       })
//       if (!found) {
//         return sortingHat(sessionUser)
//       }
//     })
//   loginForm.reset()
// }

// function sortingHat(sessionUser) {
//   fetch(SORTINGHAT_URL)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       const outcome = document.createElement("h2")
//       outcome.innerText = data
//       document.querySelector(".sorting_hat_outcome").append(outcome)
//     })

//   loginSection.remove()
//   sortingHatSection.style.display = "block"
// }
