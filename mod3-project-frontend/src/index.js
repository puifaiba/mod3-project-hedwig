// document.addEventListener('DOMContentLoaded', () => {
//     barResizer()
// })

const barResizer = () => {
  clientContainer.style.display = "block"
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
      } else if (
        current_bar === document.querySelector(".workspace_right_bar")
      ) {
        const width = original_width - (event.pageX - original_mouse_x)
        if (width <= right_max_size && width >= right_min_size) {
          current_bar.style.width = width + "px"
          current_resize_bar.style.right = width + "px"
          workspace_container.style.gridTemplateColumns = `${left_width}px auto ${width}px`
        }
      }
    }
    const stopResize = () => {
      window.removeEventListener("mousemove", resize)
    }
  }
}
