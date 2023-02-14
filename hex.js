const hex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'b', 'C', 'D', 'E', 'F']

//const colorHex = []
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const colorBox = document.querySelectorAll('.box')
const values = document.querySelectorAll('.value')


btn.addEventListener('click', function(){
 let randomColor = getRandomColor()
 
    color.textContent = randomColor
    document.body.style.backgroundColor = randomColor
    colorBox.forEach(function(boxcolor){
        boxcolor.style.backgroundColor = getRandomColor()
    });
    
    
    values.forEach(function(colorValue){
        let randomColor2 = getRandomColor()
        colorValue.textContent = randomColor2
        colorValue.style.color = 'black'
        colorValue.style.backgroundColor = randomColor2
    }); 
    
})


function getRandomNum() {
    return Math.floor(Math.random() * hex.length)

 }
 

function getRandomColor() {
   
        let randomhex = '#'
 
        for(let j = 0; j< 6; j++){

       randomhex += hex[getRandomNum()]
        }
   
    return randomhex
    
}









/*

btn.addEventListener('click', function(){
let hexColor ='#'
for(let i = 0; i<6; i++ ) {
    hexColor  += hex[getRandomColor()]
}


color.textContent = hexColor
document.body.style.backgroundColor = hexColor
})







function getRandomColor () {

    return Math.floor(Math.random()* hex.length) 
}
//console.log(getRandomColor)
getRandomColor()

*/