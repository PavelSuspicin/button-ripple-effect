const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonX = e.target.offsetLeft
    const buttonY = e.target.offsetTop

    const xInside = x - buttonX
    const yInside = y - buttonY

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.left = xInside + 'px'
    circle.style.top = yInside + 'px'
    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})
