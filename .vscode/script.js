function togglemode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/silvio.png")
      img.setAttribute("alt", "silvio")
    } else {
      img.setAttribute("src", "./assets/woody.png")
      img.setAttribute("alt", "woody")
    }
  }