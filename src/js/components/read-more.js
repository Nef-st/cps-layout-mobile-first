function readMore() {
  const button = document.querySelector('.about-us__button')
  const hiddenContainer = document.querySelector('.hidden-container')
  const hiddenElements = hiddenContainer.querySelectorAll('.hidden')

  if (hiddenContainer.style.maxHeight) {
    hiddenContainer.style.maxHeight = null
    button.innerHTML =
      '<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/ ><p >Читать далее</p >'
    hiddenElements.forEach((element) = >{
      element.style.opacity = 0
      element.style.transform = 'translateY(-10px)'
    })
  } else {
    hiddenContainer.style.maxHeight = 462 + 'px'
    hiddenContainer.style.height = 462 + 'px'
    button.innerHTML =
      '<img width="24px" height="24px" src="./img/button-expand.svg" alt="|"/ ><p >Свернуть</p >'
    hiddenElements.forEach((element) = >{
      element.style.opacity = 1
      element.style.transform = 'translateY(0)'
    })
  }
}

document.querySelector('.about-us__button').addEventListener('click', readMore)
