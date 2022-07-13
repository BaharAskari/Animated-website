const balloon = document.querySelector('#air-balloon')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
const javascript = document.getElementById('javascript')
const react = document.getElementById('react')
const graphql = document.getElementById('graphql')



//move around elements
function move() {
  const incrementer = window.scrollY
  balloon.style.bottom = 5 + incrementer * 0.1 + '%'
  cloudOne.style.bottom = 40 + incrementer * 0.2 + '%'
  cloudOne.style.left = 75 + incrementer * 0.1 + '%'
  cloudTwo.style.bottom = 80 + incrementer * 0.14 + '%'
  cloudTwo.style.left = 70 + incrementer * 0.15 + '%'
  cloudThree.style.bottom = 60 + incrementer * 0.12 + '%'
  cloudThree.style.left = 0 + incrementer * -0.12 + '%'
  cloudFour.style.bottom = 70 + incrementer * 0.16 + '%'
  cloudFour.style.left = 20 + incrementer * -0.15 + '%'
  cloudFive.style.bottom = 57 + incrementer * 0.2 + '%'
  cloudFive.style.left = 60 + incrementer * 0.16 + '%'
  javascript.style.left = 20 + incrementer * -0.3 + '%'
  react.style.left = 26 + incrementer * -0.2 + '%'
  graphql.style.left = 32 + incrementer * -0.1 + '%'
}

window.addEventListener('scroll', move)