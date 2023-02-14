const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const colorEL = document.querySelector('.color') 



function getRandomNum() {
   return Math.floor(Math.random() * colors.length)
}


btn.addEventListener('click', function(){
    let randomNumber = getRandomNum()
    document.body.style.backgroundColor = colors[randomNumber];
    colorEL.textContent = colors[randomNumber]

})


