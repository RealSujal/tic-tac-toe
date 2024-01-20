let btn = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#resetBtn');
let count = 0;


let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

btn.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        count++;
        box.disabled = true;
        detectWin();
    });
});

function detectWin() {
    for (let pattern of winPatterns) {
        let pos0 = btn[pattern[0]].innerText;
        let pos1 = btn[pattern[1]].innerText;
        let pos2 = btn[pattern[2]].innerText;

        if (pos0 != '' && pos1 != '' && pos2 != '') {
            if (pos0 === 'X' && pos1 === 'X' && pos2 === 'X') {
                alert('Player X Wins!');
                clear();
            } else if (pos0 === 'O' && pos1 === 'O' && pos2 === 'O') {
                alert('Player O Wins!')
                clear();
                return;
            }

        }

    }
    if (count === 9) {
        alert('Draw!');
        clear();
    }
}





resetBtn.addEventListener('click', () => {
    btn.forEach((box) => {
        clear();
    })
})

function clear() {
    btn.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
    })
    count = 0;
    turnO = true;
}
