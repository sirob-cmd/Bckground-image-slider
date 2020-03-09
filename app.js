let leftBtn = document.querySelector('#left')
let rightBtn = document.querySelector('#right')
let img = document.querySelector('.img')

window.onload = function () {
    let imgArray = new Array
    let counter = 0

    imgArray[0] = new Image().src = './img/1.jpg'
    imgArray[1] = new Image().src = './img/2.jpg'
    imgArray[2] = new Image().src = './img/3.jpg'
    imgArray[3] = new Image().src = './img/4.jpg'
    imgArray[4] = new Image().src = './img/5.jpg'
    imgArray[5] = new Image().src = './img/6.jpg'
    imgArray[6] = new Image().src = './img/7.jpg'
    imgArray[7] = new Image().src = './img/8.jpg'

    leftBtn.addEventListener('click', prev)
    rightBtn.addEventListener('click', next)

    function next() {
        counter++
        img.style.backgroundImage = `url('${imgArray[counter]}')`

        if (counter >= imgArray.length) {
            img.style.backgroundImage = `url('${imgArray[0]}')`
            counter = 0
        }
    }

    function prev() {
        counter--
        img.style.backgroundImage = `url('${imgArray[counter]}')`

        if (counter < 0) {
            img.style.backgroundImage = `url('${imgArray[imgArray.length - 1]}')`
            counter = imgArray.length - 1
        }
    }


}