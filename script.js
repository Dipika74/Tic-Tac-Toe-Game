let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newGameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let msgDraw = document.querySelector(".msg-draw");
let draw = document.querySelector("#draw");

let turnO = true;


const winPattern =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msgDraw.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO=false;

        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}

const showWinner = (winner) => {
    msg.innerText= `Congratulations, The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showDraw = (draw) => {
    msg.innerText= "Oops! It is a Draw"
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    let winnerFound = false;
    for(let pattern of winPattern){

        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                winnerFound = true;
                break;
            }
        }


    }
    


 if(!winnerFound){
     let allFilled = true;
     for(let box of boxes){
         if(box.innerText===""){
             allFilled = false;
         break;
          }
         
        
        }
        if(allFilled){
             showDraw();
        }
    
 }
};
newGameButton.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
