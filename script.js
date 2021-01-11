const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isjumping = false;
let position = 0;

function handlekeyup(event){
    if(event.keyCode == 32){
        if (!isjumping){
            jump();
        }
    }
}

function jump(){
    
    isjumping = true;

    let upInterval = setInterval(() =>{
        if(position >= 150){
            clearInterval(upInterval);

            let downIntervel = setInterval(() => {
            if(position <= 0){
                clearInterval(downIntervel);
                isjumping = false;
            }else{
                position -= 20;
                dino.style.bottom = position + 'px';
            }
            }, 10);
        }else {
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 20  );
}

function createcactus(){
    const cactus = document.createElement('div');
    let cactusposition = 1000;
    let randomtime = Math.random() * 6000;
    
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftinterval = setInterval(() => {
        if(cactusposition < -60){
            clearInterval(leftinterval);
            background.removeChild(cactus);
        }else if (cactusposition > 0 && cactusposition < 60 && position < 60){
            clearInterval(leftinterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        }
        else{
            cactusposition -= 10;
            cactus.style.left = cactusposition + 'px'
        }
    }, 20);

    setTimeout(createcactus, randomtime);
}

createcactus();
document.addEventListener('keyup', handlekeyup);

