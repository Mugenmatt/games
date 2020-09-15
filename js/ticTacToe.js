window.onload = function() {

    // ----------- Query Selectors -----------

    const status = document.querySelector('.status');
    const resetGame = document.querySelector('.resetTictacToe');
    const cellDiv = document.querySelectorAll('.cell');

    // ----------- Game Variables -----------
    
    let gameIsLive = true;
    let xIsNext = true;
    let winner = null;
    let counter = 1;

    const xSymbol = '×';
    const oSymbol = '○'

    // ----------- Functions -----------

    const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

    let handleWin = letter => {
        gameIsLive = false;
        winner = letter;
        if(winner === 'x') {
            status.innerHTML = `<span class="spanStatus">${letterToSymbol(winner)} has Won!😎</span>`;
        } else if(winner === 'o') {
            status.innerHTML = `<span class="spanStatus">${letterToSymbol(winner)} has Won!😎</span>`;
        } 
    }

    const checkGameStatus = () => {
        const topLeft = cellDiv[0].classList[2];
        const topMiddle = cellDiv[1].classList[2];
        const topRight = cellDiv[2].classList[2];
        const middleLeft = cellDiv[3].classList[2];
        const middleMiddle = cellDiv[4].classList[2];
        const middleRight = cellDiv[5].classList[2];
        const bottomLeft = cellDiv[6].classList[2];
        const bottomMiddle = cellDiv[7].classList[2];
        const bottomRight = cellDiv[8].classList[2];

        if(xIsNext) {
            status.innerHTML = '× is Next!';
            status.style.color = "#000"
        } else {
            status.innerHTML = '○ is Next!';
            status.style.color = "#fff"
        }

        let result;

        if(topLeft && topLeft === topMiddle && topLeft === topRight) {
            handleWin(topLeft);
            gameIsLive = false
            result = 1

        }  else if(middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
            handleWin(middleLeft)
            gameIsLive = false
            result = 2
            
        } else if(bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
            handleWin(bottomLeft)
            gameIsLive = false
            result = 3
            
        } else if(topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
            handleWin(topLeft)
            gameIsLive = false
            result = 4
            
        } else if(topRight && topRight === middleMiddle && topRight === bottomLeft) {
            handleWin(topRight)
            gameIsLive = false
            result = 5
            
        }   else if(topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
            handleWin(topLeft)
            gameIsLive = false
            result = 6
            
        } else if(topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
            handleWin(topMiddle)
            gameIsLive = false
            result = 7
            
        } else if(topRight && topRight === middleRight && topRight === bottomRight) {
            handleWin(topRight) 
            gameIsLive = false
            result = 8
            
        } else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
            status.innerHTML = 'Game is Tied😔';
            status.style.color = 'gray';
        }

        // ACA (u otro lado) DEBERIA CAMBIAR LA LINEA GANADORA A COLOR ROJO(BROWN)
        // cellDiv.forEach(cell => {
        //     if(result == 1) {

        //     } else if(result == 2) {

        //     } else if(result == 3) {
                
        //     } else if(result == 4) {
                
        //     } else if(result == 5) {
                
        //     } else if(result == 6) {
                
        //     } else if(result == 7) {
                
        //     } else if(result == 8) {
                
        //     }
        // })

    }

    // ----------- Event Listeners -----------

    resetGame.addEventListener('click', function(e) {

        gameIsLive = true;

        cellDiv.forEach( cell => {
            
            cell.classList.remove('x')
            cell.classList.remove('o')

            if(counter % 2 == 0) {
                status.innerHTML = `× is Next!`;
                status.style.color = "#000"
                xIsNext = true;
            } else {
                status.innerHTML = `○ is Next!`;
                status.style.color = "#fff"
                xIsNext = false
            }

        })
        
    })


    cellDiv.forEach( cell => {

        cell.addEventListener('click', function() {

            const classList = cell.classList

            // Pair for O, impair for X (counter)
            // console.log(counter++);

            if(counter % 2 == 0 && cell.clicked == true) {
                status.innerHTML = `× is Next!`;
                counter++
            } else if(counter % 2 != 0 && cell.clicked == true) {
                status.innerHTML = `o is Next!`;
                counter++
            }

            if(classList[2] === 'x' || classList[2] === 'o'){
                return;
            }
                if(xIsNext) {
                    classList.add('x');
                    xIsNext = !xIsNext;
                    checkGameStatus()
                } else {
                    classList.add('o');
                    xIsNext = !xIsNext;
                    checkGameStatus()
                }

        })

    })


}