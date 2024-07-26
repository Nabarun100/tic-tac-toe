let boxes = document.querySelectorAll(".boc");
let reset = document.querySelector(".reset");
let neww = document.querySelector(".new");
let msg = document.querySelector("#msg");
let msgcont = document.querySelector(".msg-container");

let turn0 = false;
const win = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box click");
        if (!turn0) {
            box.innerText = "X";
            turn0 = true;
        } else {
            box.innerText = "O";
            turn0 = false;
        }
        box.disabled = true;
        check();
    });
});

const dis=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enable=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner = (x) => {
    msg.innerText = `Congrats, Winner is ${x}`;
    msgcont.classList.remove("hide");
    dis();

};

const check = () => {
    for (let pa of win) {
        let pos1 = boxes[pa[0]].innerText;
        let pos2 = boxes[pa[1]].innerText;
        let pos3 = boxes[pa[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos1 === pos3) {
                console.log("You are the winner", pos1);

                showwinner(pos1);
            }
        }
    }
};
const resetgame=()=>{
    enable();
    msgcont.classList.add("hide");  
    turn0=true; 
}

neww.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);