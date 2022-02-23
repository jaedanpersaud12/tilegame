const pairs = [
    [1, 11],
    [2, 7],
    [3, 15],
    [4, 5],
    [6, 12],
    [8, 10],
    [9, 14],
    [13, 16],
]

let myPair = [2, 7]
let currentPair = []
let lastPick
let solvedPairs = []

const squares = document.querySelectorAll(".image-main")
const header = document.querySelector(".header")

function checkIfPair(array) {
    for (let i = 0; i < pairs.length; i++) {
        if (array[0] == pairs[i][0] && array[1] == pairs[i][1] || array[1] == pairs[i][0] && array[0] == pairs[i][1]) {
            return true
        }
    }
}

const images = [
    "images/addison.jpg",
    "images/bella.jpg",
    "images/charlie.jpg",
    "images/keith.jpg",
    "images/kim.jpg",
    "images/trump.jpg",
    "images/elchapo.jpg",
    "images/putin.jpg",
]

const container = document.querySelector("#container");
const button = document.querySelector("#reset")

const tileCheck = function (e) {
    if(!(solvedPairs == 8))
    if (!(e.target.id == lastPick)) {
        if (currentPair.length < 2) {
            currentPair.push(parseInt(e.target.id))
            lastPick = e.target.id
            changeImage(e.target.id)
            console.log(currentPair);
            while (currentPair.length == 2) {
                if (checkIfPair(currentPair) == true) {
                    solvedPairs.push(currentPair)
                    console.log("FOUND A PAIR");
                } else {
                    console.log("TRY AGAIN");
                    lastPick = undefined
                    solvedPairs = []
                    setTimeout(clearImage, 1000);
                }
                currentPair = []
            }
        } else {
            currentPair.push(parseInt(e.target.id))
        }
    } else {
        alert("CHOOSE ANOTHER TILE")
    }

    if (solvedPairs.length == 8) {
        header.textContent = "YOU WIN"
    }

}


container.addEventListener('click', tileCheck)
button.addEventListener("click", reset)

const clearImage = function () {
    for (let j = 0; j < squares.length; j++) {
        squares[j].src = "images/tiktok1.jpg"
    }
}

const changeImage = function (target) {
    switch (parseInt(target)) {
        case 1:
            squares[0].src = images[0]
            break;
        case 2:
            squares[1].src = images[1]
            break;
        case 3:
            squares[2].src = images[2]
            break;
        case 4:
            squares[3].src = images[3]
            break;
        case 5:
            squares[4].src = images[3]
            break;
        case 6:
            squares[5].src = images[4]
            break;
        case 7:
            squares[6].src = images[1]
            break;
        case 8:
            squares[7].src = images[5]
            break;
        case 9:
            squares[8].src = images[6]
            break;
        case 10:
            squares[9].src = images[5]
            break;
        case 11:
            squares[10].src = images[0]
            break;
        case 12:
            squares[11].src = images[4]
            break;
        case 13:
            squares[12].src = images[7]
            break;
        case 14:
            squares[13].src = images[6]
            break;
        case 15:
            squares[14].src = images[2]
            break;
        case 16:
            squares[15].src = images[7]
            break;
    }
}

function reset(){
    lastPick = undefined
    solvedPairs = []
    clearImage()
}

