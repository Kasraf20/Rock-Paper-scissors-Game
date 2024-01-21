const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice")
const userCText = document.querySelector("#uctext")
const compCText = document.querySelector("#cctext")
const msg = document.querySelector("#msg")

let uScore = 0
let coScore = 0

choices.forEach((choice) => {
    choice.addEventListener('click',() => {
        const userChoice = choice.getAttribute("id")
        userCText.innerText = userChoice
        console.log("user choice = ", userChoice)
        const compChoice = compRadChoice()
        playGame(userChoice,compChoice)

    })
})

//generate random choice from computer
const compRadChoice = () => {
    const randomList = ['rock','paper','scissors']
    let compChoice = Math.floor(Math.random() * 3)
    compCText.innerText = randomList[compChoice]
    console.log("computer Choice = ", randomList[compChoice])
    return randomList[compChoice]
}

const draw = () => {
    msg.innerText = "It's Draw, Play Again"
    msg.style.backgroundColor = "#F8DD19"
    console.log("It's Draw, Play Again")
}

//playGame function

const playGame = (uChoice,coChoice) => { 
    if (uChoice === coChoice){
        draw()
    }
    else{
        userWin = true
        if (uChoice ===  "rock"){
            //paper,scissores
            userWin = coChoice === 'paper' ? false : true
        }else if(uChoice === "paper"){
            //scissores,rock
            userWin = coChoice === "scissors" ? false : true
        }else{
            //rock,paper
            userWin = coChoice === "rock" ? false : true
        }

        showWin(userWin)
    }
}


function showWin(uWin){
    if (uWin === true){
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "#4FF31F"
    }
    else{
        msg.innerText = "You Lose, Try Again"
        msg.style.backgroundColor = "#F3381F"
    }
    countScore(uWin)
}

function countScore(uWin){
    if(uWin === true){
        uScore += 1
        userScore.innerText = uScore
    }else{
        coScore += 1
        compScore.innerText = coScore
    }
}