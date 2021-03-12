// Boonie Code~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.addEventListener("DOMContentLoaded", () => {
  loginPage()
  // Main input box
  tinymce.init({
    selector: "#main_chat_box",
    plugins: "emoticons link image code lists save",
    toolbar_location: "bottom",
    hidden_input: false,
    menubar: false,
    statusbar: false,
    toolbar:
      "emoticons | undo redo | bold italic underline strikethrough | link image | code | bullist numlist",
    width: 1287,
    height: 120,
    setup: function (editor) {
      editor.on("keydown", submitMain)
    },
  })
})

USERS_URL = "http://localhost:3000/users/"
HOUSES_URL = "http://localhost:3000/houses/"
HOUSEUSERS_URL = "http://localhost:3000/house_users/"
MESSAGES_URL = "http://localhost:3000/messages/"
SORTINGHAT_URL = "https://www.potterapi.com/v1/sortinghat"

const clientContainer = document.querySelector(".client_container")
const loginSection = document.querySelector(".login-section")
const loginForm = document.querySelector(".login-form")
const sortingHatSection = document.querySelector(".sorting_hat_section")
const profileUser = document.querySelector(".profile_username")
const mainChatForm = document.querySelector(".main_chat_form")

function loginPage() {
  loginForm.addEventListener("submit", (event) => handleLoginSubmit(event))
}

function handleLoginSubmit(event) {
  event.preventDefault()
  const sessionUser = loginForm.username.value
  fetch(USERS_URL)
    .then((res) => res.json())
    .then((usersData) => {
      let found = false
      usersData.forEach((user) => {
        if (user.username === sessionUser) {
          found = true
          sortingHatSection.remove()
          return runHPChat()
        }
      })
      if (!found) {
        sortingHat(sessionUser)
      }
    })
  loginForm.reset()
}
function sortingHat(sessionUser) {
  fetch(SORTINGHAT_URL)
    .then((res) => res.json())
    .then((data) => {
      const outcome = document.createElement("h2")
      outcome.innerText = data
      document.querySelector(".sorting_hat_outcome").append(outcome)

      switch (data) {
        case "Gryffindor":
          houseId = 1
          break
        case "Hufflepuff":
          houseId = 2
          break
        case "Ravenclaw":
          houseId = 3
          break
        case "Slytherin":
          houseId = 4
          break
      }
      addUser(houseId, sessionUser)
    })

  loginSection.remove()
  sortingHatSection.style.display = "block"

  setTimeout(runHPChat, 6000)
}

function addUser(houseId, sessionUser) {
  const userObject = {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify({username: sessionUser}),
  }

  fetch(USERS_URL, userObject)
    .then((res) => res.json())
    .then((newUserData) => {
      const houseUserObject = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify({
          house_id: houseId,
          user_id: newUserData.id,
        }),
      }

      fetch(HOUSEUSERS_URL, houseUserObject)
        .then((res) => res.json())
        .then((newHouseUserData) => console.log(newHouseUserData))
    })
}

function addComment() {
  mainChatForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const newMessage = document.createElement("p")
    newMessage.innerText = event.target.main_chat_box.value
    const mainWorkspace = document.querySelector(".workspace_main_content")
    mainWorkspace.append(newMessage)

    const commentObject = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify({
        chatroom_id: xx,
        user_id: xx,
        text: newMessage,
      }),
    }

    fetch(MESSAGES_URL, commentObject)
      .then((res) => res.json())
      .then((newMessageData) => console.log(newMessageData))
  })
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Abraham Code~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const runHPChat = () => {
  barResizer()
  buttonEvents()
}
const buttonEvents = () => {
  document.querySelector(".right_close").addEventListener("click", closeRight)
  document.querySelector(".open_right").addEventListener("click", openRight)
  document.querySelector(".open_details").addEventListener("click", openDetails)
  document.querySelector(".new_msg").addEventListener("click", newMsg)
}
const barResizer = () => {
  clientContainer.style.display = "block"
  sortingHatSection.style.display = "none"
  const left_min_size = 180
  const left_max_size = 600
  const right_min_size = 260
  const right_max_size = 1000
  let original_width = 0
  let original_mouse_x = 0
  const resize_bars = document.querySelectorAll(".resizer")
  for (let i = 0; i < resize_bars.length; i++) {
    const current_resize_bar = resize_bars[i]
    const current_bar = current_resize_bar.parentNode
    current_resize_bar.addEventListener("mousedown", (event) => {
      event.preventDefault()
      original_width = parseFloat(
        getComputedStyle(current_bar, null)
          .getPropertyValue("width")
          .replace("px", "")
      )
      original_mouse_x = event.pageX
      window.addEventListener("mousemove", resize)
      window.addEventListener("mouseup", stopResize)
    })
    current_resize_bar.addEventListener("dblclick", (event) => {
      event.preventDefault()
      const workspace_container = current_bar.parentNode
      const left_bar = document.querySelector(".workspace_left_bar")
      const left_width = parseFloat(
        getComputedStyle(left_bar, null)
          .getPropertyValue("width")
          .replace("px", "")
      )
      const right_bar = document.querySelector(".workspace_right_bar")
      const right_width = parseFloat(
        getComputedStyle(right_bar, null)
          .getPropertyValue("width")
          .replace("px", "")
      )
      if (current_bar === document.querySelector(".workspace_left_bar")) {
        current_bar.style.width = "250px"
        current_resize_bar.style.left = "250px"
        workspace_container.style.gridTemplateColumns = `250px auto ${right_width}px`
      } else if (
        current_bar === document.querySelector(".workspace_right_bar")
      ) {
        current_bar.style.width = "350px"
        current_resize_bar.style.right = "350px"
        workspace_container.style.gridTemplateColumns = `${left_width}px auto 350px`
      }
    })
  }
  const resize = (event) => {
    const current_bar = current_resize_bar.parentNode
    const workspace_container = current_bar.parentNode
    const left_bar = document.querySelector(".workspace_left_bar")
    const left_width = parseFloat(
      getComputedStyle(left_bar, null)
        .getPropertyValue("width")
        .replace("px", "")
    )
    const right_bar = document.querySelector(".workspace_right_bar")
    const right_width = parseFloat(
      getComputedStyle(right_bar, null)
        .getPropertyValue("width")
        .replace("px", "")
    )
    if (current_bar === document.querySelector(".workspace_left_bar")) {
      const width = original_width + (event.pageX - original_mouse_x)
      if (width <= left_max_size && width >= left_min_size) {
        current_bar.style.width = width + "px"
        current_resize_bar.style.left = width + "px"
        workspace_container.style.gridTemplateColumns = `${width}px auto ${right_width}px`
      }
    } else if (current_bar === document.querySelector(".workspace_right_bar")) {
      const width = original_width - (event.pageX - original_mouse_x)
      if (width <= right_max_size && width >= right_min_size) {
        current_bar.style.width = width + "px"
        current_resize_bar.style.right = width + "px"
        workspace_container.style.gridTemplateColumns = `${left_width}px auto ${width}px`
      }
    }
  }
}
const closeRight = () => {
  const rightBar = document.querySelector(".workspace_right_bar")
  const leftBar = document.querySelector(".workspace_left_bar")
  const left_width = parseFloat(
    getComputedStyle(leftBar, null).getPropertyValue("width").replace("px", "")
  )
  const workContainer = document.querySelector(".workspace_container")
  rightBar.style.display = "none"
  workContainer.style.gridTemplateColumns = `${left_width}px auto 0px`
  document.querySelector(".open_right").style.display = "inline-flex"
}
const openRight = () => {
  const rightBar = document.querySelector(".workspace_right_bar")
  const leftBar = document.querySelector(".workspace_left_bar")
  const left_width = parseFloat(
    getComputedStyle(leftBar, null).getPropertyValue("width").replace("px", "")
  )
  const right_width = parseFloat(
    getComputedStyle(rightBar, null).getPropertyValue("width").replace("px", "")
  )
  const workContainer = document.querySelector(".workspace_container")
  rightBar.style.display = "grid"
  workContainer.style.gridTemplateColumns = `${left_width}px auto ${right_width}px`
  document.querySelector(".open_right").style.display = "none"
}
const openDetails = () => {
  const rightText = document.querySelector(".right_head_text")
  rightText.innerText = rightText.innerText === "Thread" ? "Details" : "Thread"
}
const submitMain = (event) => {
  if (event.key === "Enter" && event.shiftKey === false) {
    event.preventDefault()
    console.log(event.target)
  }
}
const newMsg = () => {
  console.log("new msg")
}
