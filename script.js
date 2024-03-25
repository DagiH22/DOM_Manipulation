redBtn = document.getElementById('red')
yellowBtn = document.getElementById('yellow')
greenBtn = document.getElementById('green')
clearScore = document.getElementById('clear')
let clickCounter = {'red': 0 , 'yellow' : 0, 'green': 0}
thedivs = document.querySelectorAll('.buttons')



thedivs.forEach(square => {
     square.onclick = () => {
          clickCounter[square.value] += 1
          square.innerText = clickCounter[square.value]
     }   
}) 

clearScore.onclick = () => {
     thedivs.forEach(square => square.innerText = '')
     
}