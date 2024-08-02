/*winning patterns
1) horizontal= 0,1,2 & 3,4,5 & 6,7,8
2)vertical= 0,3,6 & 1,4,7 & 2,5,8
3)diag= 0,4,8 & 2,4,6
*/
let heading=document.querySelector("h1");
let div=document.querySelector(".container");
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO= true; //playerO so prints O
//2D array
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})



const checkWinner=() =>{
    for(let pattern of wins){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2&&pos1===pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }

}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

   /* div.classList.add("hide");
    heading.classList.add("hide");
    reset.classList.add("hide");*/



const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    div.classList.remove("hide");
    heading.classList.remove("hide");
    reset.classList.remove("hide");
}

reset.addEventListener("click",resetGame);
newgame.addEventListener("click",resetGame);