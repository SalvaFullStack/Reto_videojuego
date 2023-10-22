// entrypoint



window.addEventListener("load", () => {
  const section = document.querySelector('section')
  const button = document.querySelector('button')
  
  button.addEventListener('click', () => {

    section.style.display = "none"

    

    Game.init();
  })
  
});
