let userScore = 0;
let CompScore = 0;
const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#computer-score");
choices.forEach(choices => {
    console.log(choices);
    choices.addEventListener("click",()=>{
        const user_choice = choices.getAttribute("id");
//playGame(user_choice);
        console.log("user choice = ",user_choice);
//output
    const CompChoice = genCompChoice();
    console.log("computer choice = ",CompChoice);
    if(user_choice === CompChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(user_choice === "rock"){
            //computer choice may be paper or scissors
            userWin = CompChoice === "paper"? false : true;
        }
        else if (user_choice==="paper") {
            //computer choice may be rock or scissors
            userWin = CompChoice === "rock"? true : false;
        } 
        else{
            //computer choice may be rock or paper
            userWin = CompChoice === "rock"? false : true;
        }
    showWinner(userWin,user_choice,CompChoice);
    }
    })    
});
//another method
// const playGame=(user_choice)=>{
//     console.log("user choice = ",user_choice);
//     //output
//     const CompChoice = genCompChoice();
//     console.log("computer choice = ",CompChoice);
//     if(user_choice === CompChoice){
//         drawGame();
//     }
//     else{
//         let userWin = true;
//         if(user_choice === "rock"){
//             //computer choice may be paper or scissors
//             userWin = CompChoice === "paper"? false : true;
//         }
//         else if (user_choice==="paper") {
//             //computer choice may be rock or scissors
//             userWin = CompChoice === "rock"? true : false;
//         } 
//         else{
//             //computer choice may be rock or paper
//             userWin = CompChoice === "rock"? false : true;
//         }
//     showWinner(userWin,user_choice,CompChoice);
//     }
// };
//to generate computer choice
const genCompChoice =()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = ()=>{
    console.log("game was draw");
    msg.innerText="Game was draw. Try Again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner=(userWin, user_choice, CompChoice)=>{
    if(userWin){
        userScore++;
        user.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You win! Your ${user_choice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        CompScore++;
        comp.innerText=CompScore;
        console.log("you lost!");
        msg.innerText=`You Lost ${CompChoice} beats Your ${user_choice}`;
        msg.style.backgroundColor = "red";
    }
}