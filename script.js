let boxes = document.querySelectorAll(".inner");

let winner = document.querySelector(".winner");
let winnerst = document.querySelector("#winner");
let n = document.querySelector("#new");

let reset = document.querySelector("#reset");

let o_score = document.querySelector("#o_score");
let x_score = document.querySelector("#x_score");

let os = 0;
let xs = 0;

let o = true;
let count = 0;

function clear(){
    o = true;
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    winner.classList.add("hide");
    count = 0;
}

function disable(){
    for (let box of boxes){
        box.disabled = true;
    }
}

reset.addEventListener("click",clear);
n.addEventListener("click",clear);

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (o){
            o = false;
            box.innerText = "O";
        }
        else{
            o = true;
            box.innerText = "X";
        }
        box.disabled = true;

        let draw = win();
        count++;

        if (count === 9 && !draw){
            winner.classList.remove("hide");
            winnerst.innerText = "Draw";
        }
    });
});


const positions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
function win(){
    for (pos of positions){
        let b1 = boxes[pos[0]].innerText;
        let b2 = boxes[pos[1]].innerText;
        let b3 = boxes[pos[2]].innerText;
        if (b1 != ""&&b2 != ""&&b3 != ""){
            if (b1===b2 && b2===b3){
                winner.classList.remove("hide");
                winnerst.innerText = `Congratulations the winner is ${b1}`;
                if (b1==="O"){
                    os++;
                    o_score.innerText = os;
                }
                else{
                    xs++;
                    x_score.innerText = xs;
                }
                disable();
                return true;
            }
        }
    }
    return false;
}