let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#rst-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    // [5,4,3],
    [6, 3, 0],
    // [6,4,2],
    [6, 7, 8],
    // [7,4,1],
    // [8,5,2],
    // [8,7,6],
    // [8,4,0]
];
const resetGame = (box) => {
    turnO = true;
    enableBoxes();
    box.innerText = "";
    msgContainer.classList.add("hide");


}
const showWin = (winner) => {
    msg.innerText = ` Congratulations , Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    // console.log("fires")
    disableBoxes();
};
const checkWin = () => {
    for (let pattern of winPattern) {
        // console.log(
        //    boxes[pattern[0].innerText],
        //    boxes[pattern[1].innerText],
        //    boxes[pattern[2].innerText]
        // );

        let p1val = boxes[pattern[0]].innerText;
        let p2val = boxes[pattern[1]].innerText;
        let p3val = boxes[pattern[2]].innerText;

        if (p1val != "" && p2val != "" && p3val != "") {
            if (p1val === p2val && p2val === p3val) {
                console.log("Winner", p1val);
                showWin(p1val);
            }
        }
    }
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWin();

    });
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


// reset game
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
    });
});


// new game btn 
newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
