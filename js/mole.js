// ---------- Query Selectors ---------- 

let score = document.querySelector('.scoreWhackAMole');
let scoreNumber = 0;
let moles = document.querySelectorAll('.mole')
let holes = document.querySelectorAll('.hole')
let start = document.querySelector('.startWhackAMole')
// ---------- Functions ----------

// Una funcion que devuelva de un numero entre un minimo y un maximo

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Una funcion que devuelva un hoyo random y que no se repita

let lastHole;

function randomHole(holes) {
    let index = Math.floor(Math.random() * holes.length)
    let hole = holes[index]
    if(lastHole == hole) {
        console.log('Oops, same number');
        return randomHole(holes)
    }

    lastHole = hole;

    return hole;
}

// Una funcion que tome las otras dos funciones que haga salir los topos y luego vuelvan. La funcion se tiene que repetir. Y que se detenga en algun momento con true o false

let timeUp = true;

function popUpMole() {
    let time = randomTime(200, 1000);
    let hole = randomHole(holes);
    hole.classList.add('moleUp');
    setTimeout( () => {
        hole.classList.remove('moleUp');
        if(timeUp) popUpMole()
    } , time )
}



// Una funcion que inicie el juego cuando se haga click en Start y se detenga el juego despues de 10segs(10000).

function startGame() {

    if(scoreNumber != 0) {
        scoreNumber = 0;
    }

    score.textContent = 0;
    start.style.opacity = '0'
    start.disabled = true;
    timeUp = true;
    popUpMole();
    setTimeout( () => {
        timeUp = false
        console.log('Whack-A-Mole: The End')
        start.style.opacity = '1'
        start.disabled = false;
    } , 10000)
}
start.addEventListener('click', startGame)


// Una funcion que cuando se haga click en un topo suba un punto y que ademas cuando se haga click en el mismo lugar y no esté el topo, no cuente (isTrusted del elemento)

function scoreChange() {
    if(e.isTrusted) return;
    scoreNumber++;
    this.classList.remove('moleUp');    
    score.textContent = scoreNumber
}

moles.forEach( mole => mole.addEventListener('click', scoreChange))

