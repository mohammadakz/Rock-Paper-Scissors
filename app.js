const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector(".match")

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn")
        })
    }
    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button")
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")
        const hands = document.querySelectorAll('.hands img')

        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            })
        })
        // Computer Options
        const computerOptions = ["rock", "paper", "scissors"]
        options.forEach((option)=>{
            option.addEventListener("click", function(){
                //computer choise
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoise = computerOptions[computerNumber];

                setTimeout(()=>{
                    compareHands(this.textContent, computerChoise)
                    //update images
                    playerHand.src = `./assets/${this.textContent}.png`
                    computerHand.src = `./assets/${computerChoise}.png`
                }, 2000)
                // animation
                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"


            })
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }

    const compareHands = (playerChoise, computerChoise) => {
        //updating text
        const winner = document.querySelector(".winner")
        if (playerChoise === computerChoise){
            winner.textContent  = "it is a tie"
            return
        }

        if (playerChoise === "rock") {
            if (computerChoise == "scissors"){
                winner.textContent = " Player Wins"
                pScore++
                updateScore()
                return
            } else{
                winner.textContent = " Computer Wins"
                cScore++
                updateScore()
                return
            }
        }

        if (playerChoise === "paper") {
            if (computerChoise == "scissors"){
                winner.textContent = " Computer Wins"
                cScore++
                updateScore()
                return
            } else{
                winner.textContent = " Player Wins"
                pScore++
                updateScore()
                return
            }
        }

        if (playerChoise === "scissors") {
            if (computerChoise == "rock"){
                winner.textContent = " Computer Wins"
                cScore++
                updateScore()
                return
            } else{
                winner.textContent = " Player Wins"
                pScore++
                updateScore()
                return
            }
        }
    }
    // call all the inner functions
    startGame();
    playMatch();
}
game()
