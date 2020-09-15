// --------- Query Selectors ---------
    let s = document.querySelector('.s');
    let d = document.querySelector('.d');
    let e = document.querySelector('.e');
    let f = document.querySelector('.f');
    let h = document.querySelector('.h');
    let j = document.querySelector('.j');
    let u = document.querySelector('.u');
    let k = document.querySelector('.k');
    let l = document.querySelector('.l');

    let rideSound = document.querySelector('#ride');
    let openHiHat = document.querySelector('#openHiHat');
    let closedHiHat = document.querySelector('#closedHihat');
    let bassDrum = document.querySelector('#bassDrum');
    let snare = document.querySelector('#snare');
    let tomOne = document.querySelector('#tom1');
    let tomTwo = document.querySelector('#tom2');
    let floorTom = document.querySelector('#floorTom');
    let crash = document.querySelector('#crash');

// --------- Event Listeners ---------


    window.addEventListener('keydown', event => {
        
        switch (event.code) {

            case 'KeyS':
                setTimeout( () => {
                    rideSound.play()
                    rideSound.currentTime = 0;
                    s.classList.add('clicked')
                    s.style.transform = 'scale(1.1)'
                    setTimeout(remove => {
                        s.classList.remove('clicked')
                        s.style.transform = 'scale(1)'
                    }, 80)
                } , 100)
            break;

            case 'KeyD':
                setTimeout( () => {
                    openHiHat.play()
                    openHiHat.currentTime = 0;
                    d.classList.add('clicked')
                    d.style.transform = 'scale(1.1)'
                    setTimeout(remove => {
                        d.classList.remove('clicked')
                        d.style.transform = 'scale(1)'
                    }, 80)
                } , 100)
            break;

            case 'KeyE':
                setTimeout( () => {
                    closedHiHat.play()
                    closedHiHat.currentTime = 0;
                    e.classList.add('clicked')
                    e.style.transform = 'scale(1.1)'
                    setTimeout(remove => {
                        e.classList.remove('clicked')
                        e.style.transform = 'scale(1)'
                    }, 80)
                } , 100)
            break;

            case 'KeyF':
                setTimeout( () => {
                    bassDrum.play()
                    bassDrum.currentTime = 0;
                    f.classList.add('clicked')
                    f.style.transform = 'scale(1.1)'
                    setTimeout(remove => {
                        f.classList.remove('clicked')
                        f.style.transform = 'scale(1)'
                    }, 80)
                } , 100)
            break;

            case 'KeyH':
                setTimeout( () => {
                    snare.play()
                    snare.currentTime = 0;
                    h.classList.add('clicked')
                    h.style.transform = 'scale(1.1)'
                    setTimeout(remove => {
                        h.classList.remove('clicked')
                        h.style.transform = 'scale(1)'
                    }, 80)
                } , 100)
            break;

            case 'KeyJ':
                setTimeout( () => {
                    tomOne.play()
                    tomOne.currentTime = 0;
                    j.classList.add('clicked')
                    j.style.transform = 'scale(1.1)'
                    setTimeout(remove => {
                        j.classList.remove('clicked')
                        j.style.transform = 'scale(1)'
                    }, 80)
                } , 100)
            break;

            case 'KeyU':
                setTimeout( () => {
                    tomTwo.play()
                    tomTwo.currentTime = 0;
                    u.classList.add('clicked')
                    u.style.transform = 'scale(1.1)'
                    setTimeout(remove => {
                        u.classList.remove('clicked')
                        u.style.transform = 'scale(1)'
                    }, 80)
                } , 100)
            break;

            case 'KeyK':
                setTimeout( () => {
                    floorTom.play()
                    floorTom.currentTime = 0;
                    k.classList.add('clicked')
                    k.style.transform = 'scale(1.1)'
                    setTimeout(remove => {
                        k.classList.remove('clicked')
                        k.style.transform = 'scale(1)'
                    }, 80)
                } , 100)
            break;
    
            case 'KeyL':
                setTimeout( () => {
                    crash.play()
                    crash.currentTime = 0;
                    l.classList.add('clicked')
                    l.style.transform = 'scale(1.1)'
                    setTimeout(remove => {
                        l.classList.remove('clicked')
                        l.style.transform = 'scale(1)'
                    }, 80)
                } , 100)
            break;

            default:
                break;
        }

    })

