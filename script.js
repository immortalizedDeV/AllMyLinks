function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  // se tiver lightmode, adicionar a img light
  if (html.classList.contains("light")) {
    //se tiver sem lightmode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //substituir a img
    img.setAttribute("src", "./assets/avatar.png")
  }
}
