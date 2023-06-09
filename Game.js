let testimony = {
    "Lekzy": {"span": "#number", "div": "#Lekzy-part", "scores": 0},
    "Opponent": {"span": "#school", "div": "#Opponent-part", "scores": 0},
    "card": ["2.png", "3.png", "A.png", "J.png", "K.png"],
    "cardsMap": {"2.png": 2, "3.png": 3, "A.png": 5, "J.png": 7, "K.png": [1, 11]},
    "win": 0,
    "Lose": 0,
    "Draw": 0,
    "Wins": 0,
    "Losses": 0,
    "Draws": 0,
    "IsStand": false,
    "TurnOver": false,
}
const LEKZY = testimony["Lekzy"];
const OPPONENET = testimony["Opponent"];
const CARDSMAP = testimony["cardsMap"];
const LekzySound = new Audio("/Audio/standardlamp switch.mp3");
const OpponentSound = new Audio("/Audio/card drop 2.mp3");
const ReturnSound = new Audio("/Audio/pan 1.mp3")
const winsSound = new Audio("/Audio/clap1.mp3");
const LoseSound = new Audio("/Audio/pan 1.mp3");
const DrawSound = new Audio("/Audio/computer beep.mp3")
document.querySelector("#Lekan-button").addEventListener("click", Achiever);
document.querySelector("#Return-button").addEventListener("click", Returning);
document.querySelector("#Opponent-button").addEventListener("click", opponentset);

function Asleep(ms){
    return new Promise (resolve => setTimeout(resolve, ms))
}
async function Achiever(){
    if(testimony["IsStand"] === false){
        while(LEKZY["scores"] < 17){
    let card = elective(Random())
     relax(card, LEKZY)
     Complete(card, LEKZY);
     Telephone(LEKZY)
     LekzySound.play()
     await Asleep(1500)
     document.querySelector("#Replace").textContent = reflection(Telegram())
     document.querySelector("#Replace").style.color = Assignment(ComRandom())
        }
    }
}
function relax(card, selection){
    images = document.createElement("img");
    images.src = `/images/${card}`;
    document.querySelector(selection["div"]).appendChild(images)
}
function Random(){
    return Math.floor(Math.random() * 5)
}
function elective(number){
    return ["2.png", "3.png", "A.png", "J.png", "K.png"][number]
}

function Returning(){
    if(testimony["TurnOver"] === true){
        testimony["IsStand"] = false
    let Sport = document.querySelector("#Lekzy-part").querySelectorAll("img");
    for(let lekan = 0; lekan < Sport.length; lekan++){
        Sport[lekan].remove()
    }
    let Turning = document.querySelector("#Opponent-part").querySelectorAll("img");
    for(let segun = 0; segun < Turning.length; segun++){
        Turning[segun].remove()
    }
     ReturnSound.play()

    LEKZY["scores"] = 0;
    OPPONENET["scores"] = 0;

    document.querySelector("#number").textContent = 0;
    document.querySelector("#number").style.color = "white";
    document.querySelector("#school").textContent = 0;
    document.querySelector("#school").style.color = "white"
    document.querySelector("#Like").textContent = "Let's play"
    document.querySelector("#Like").style.color = "black"
    document.querySelector("#Love").textContent = "Let's play";
    document.querySelector("#Love").style.color = "black"
    testimony["TurnOver"] = true
}
}

function Complete(card, selection){
    if(card === "K.png"){
      if(selection["scores"] + CARDSMAP[card][1] <= 21){
        selection["scores"] += CARDSMAP[card][1]
      }
      else{
        selection["scores"] += CARDSMAP[card][0]
      }
    }
    else{
    selection["scores"] += CARDSMAP[card];
    }
}
function Telephone(selection){
    if(selection["scores"] > 21){
        document.querySelector(selection["span"]).textContent = "BUST!"
        document.querySelector(selection["span"]).style.color = "red"
    }
    else{
    document.querySelector(selection["span"]).textContent = selection["scores"]
    }
}
  function wakeup(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
  }

 async function opponentset(){
    testimony["IsStand"] = true
    while(OPPONENET["scores"] < 17 && testimony["IsStand"] === true){
    let card = elective(Random())
    relax(card, OPPONENET)
    Complete(card, OPPONENET);
    Telephone(OPPONENET)
    OpponentSound.play()
    await wakeup(1500)
    }
        testimony["TurnOver"] = true
        updatewinner(compute())
        updatewinnerResult(computewinner())   
}

function compute(){
    let winner;

    if(LEKZY["scores"] <= 21){
        if(LEKZY["scores"] > OPPONENET["scores"] ?? OPPONENET["scores"] > 21){
            winner = LEKZY
            testimony["win"]++
        }
        else if(LEKZY["scores"] < OPPONENET["scores"]){
            winner = OPPONENET
            testimony["Lose"]++
        }
        else if(LEKZY["scores"] === OPPONENET["scores"]){
            testimony["Draw"]++
        }
        else if(LEKZY["scores"] > 12 && OPPONENET["scores"] <= 12){
            winner = OPPONENET
            testimony["Lose"]++
        }
        else if(LEKZY["scores"] > 21 && OPPONENET["scores"] > 21){
            testimony["Draw"]++
        }
    }
    return winner;
}
 function updatewinner(winner){
    let message, messageColor;
    if(testimony["TurnOver"] === true){
    if(winner === LEKZY){
        message = "Lekzy Won!"
        messageColor = "green"
        winsSound.play()
    }
    else if(winner === OPPONENET){
        message = "Lekzy Lost!"
        messageColor = "red"
        LoseSound.play()
    }
    else{
        message = "Draw!"
        messageColor = "black"
        DrawSound.play()
    }
    document.querySelector("#Like").textContent = message;
    document.querySelector("#Like").style.color = messageColor;
    document.querySelector("#lekzy-wins").textContent = testimony["win"];
    document.querySelector("#lekzy-wins").style.color = "green"
    document.querySelector("#lekzy-losses").textContent = testimony["Lose"];
    document.querySelector("#lekzy-losses").style.color = "red"
    document.querySelector("#lekzy-draw").textContent = testimony["Draw"]
    document.querySelector("#lekzy-draw").style.color = "black"
}
 }
 function computewinner(){
    let winner;
    
    if(OPPONENET["scores"] <= 21){
        if(OPPONENET["scores"] > LEKZY["scores"] ?? LEKZY["scores"] > 21){
            winner = OPPONENET
            testimony["Wins"]++
        }
        else if(OPPONENET["scores"] < LEKZY["scores"]){
            winner = LEKZY
            testimony["Losses"]++
        }
        else if(OPPONENET["scores"] === LEKZY["scores"]){
            testimony["Draws"]++
        }
        else if(OPPONENET["scores"] > 12 && LEKZY["scores"] <= 12){
            winner = LEKZY
            testimony["Losses"]++
        }
        else if(OPPONENET["scores"] > 21 && LEKZY["scores"] > 21){
            testimony["Draws"]++
        }
    }
    return winner;
 }
 function updatewinnerResult(winner){
    let message, messageColor;
    if(testimony["TurnOver"] === true){
    if(winner === OPPONENET){
        message = "Opponent Won!"
        messageColor = "green"
    }
    else if(winner === LEKZY){
        message = "Opponent Lost!"
        messageColor = "red"
    }
    else{
        message = "Draw!"
        messageColor = "black"
    }
    document.querySelector("#Love").textContent = message;
    document.querySelector("#Love").style.color = messageColor;
    document.querySelector("#opponent-wins").textContent = testimony["Wins"];
    document.querySelector("#opponent-wins").style.color = "green"
    document.querySelector("#opponent-losses").textContent = testimony["Losses"];
    document.querySelector("#opponent-losses").style.color = "red"
    document.querySelector("#opponent-draw").textContent = testimony["Draws"]
    document.querySelector("#opponent-draw").style.color = "black"
}
 }
 function Telegram(){
    return Math.floor(Math.random() * 4)
 }
 function reflection(number){
    return ["LEKZY GAME", "COMPANSIONATE GAME", "FRIENDSHIP GAME", "INTERESTING GAME"][number]
 }
 function ComRandom(){
    return Math.floor(Math.random() * 4)
 }
 function Assignment(number){
    return ["white", "blue", "red", "black"] [number]
 }
 