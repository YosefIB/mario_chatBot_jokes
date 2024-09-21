var first_time = true;

interface position{
    x: number;
    y: number;
}

class Mario{
    position: position;
    mario_URLimage: string;
    id: number;
    domElement: HTMLDivElement; // תמונת רקע ראשית
    marioelement: HTMLImageElement; //תמונת השחקן

    constructor(position: position){
        this.position = position;
        this.mario_URLimage = 'images/mario_player.png';
        this.id = Math.random();
        this.domElement = document.createElement("div");


}

renderGameBord(): void {
    const gameBord = document.getElementById("gameBord");
    if (!gameBord) throw new Error("error");
    
    gameBord.style.backgroundImage = 'url(images/background_game.avif)';
    gameBord.style.backgroundRepeat = "no-repeat";
    gameBord.style.width = "60vw";
    gameBord.style.height = "40vh";
    gameBord.style.border = 'none';
    gameBord.style.margin="0px";

    this.domElement.appendChild(gameBord);
    document.body.appendChild(this.domElement);


    // this.domElement.style.backgroundImage = 'url(images/background_game.avif)';
    // this.domElement.style.width = "50%";
    // this.domElement.style.height = "50%";
    // this.domElement.innerHTML = "assdad"
    // gameBord.style.backgroundImage = 'url(images/background_game.avif)'
    // gameBord.style.width = "70vw";
    // gameBord.style.height = "70vh";
    // gameBord.style.backgroundRepeat = "no-repeat";

    
}

renderMario(position_mario: position): void {
    if (!this.marioelement)
    this.marioelement=document.createElement("img");


    this.marioelement.src = this.mario_URLimage;
    this.marioelement.id = String(this.id);
    this.marioelement.style.width = "3rem";
    this.marioelement.style.height = "3rem";
    this.marioelement.style.position = "absolute";
    this.marioelement.style.left = `${position_mario.x}px`;
    this.marioelement.style.top = `${position_mario.y}px`;
    this.domElement.appendChild(this.marioelement);
 
}


moveMario(event: KeyboardEvent): void {
    if (first_time){
        this.position.x=0;
         this.position.y=335.5;
         first_time = false;
    }
switch (event.key){
    case 'ArrowUp':
        // this.position.y -= 7;
        // this.marioelement.style.transform = "rotate(-90deg)";
        this.renderMario(this.position)
        const marioElement = this.domElement.querySelector("img");
        if (!marioElement) throw console.error();
        
        const jumpHeight = -100; // גובה הקפיצה בפיקסלים
        const originalTop = parseInt(window.getComputedStyle(marioElement).top) || 0;

        marioElement.style.transition = "top 0.9s"; // זמן הקפיצה
        marioElement.style.position = "absolute"; // קבע את המיקום לאבסולוטי

        // קפיצה למעלה
        marioElement.style.top = `${originalTop - jumpHeight}px`;

        // החזרת הדמות למקום המקורי לאחר הקפיצה
        setTimeout(() => {
            marioElement.style.top = `${originalTop+10}px`;
        }, 500); // זמן חזרה
        break;
    case 'ArrowDown':
        this.position.y += 7;
        this.marioelement.style.transform = "rotate(90deg)";
        this.renderMario(this.position)
        break;
    case 'ArrowLeft':
        this.position.x -= 7;
        this.marioelement.style.transform = "scaleX(-1)";
        this.renderMario(this.position);
        break;
    case 'ArrowRight':
        this.position.x += 7;
        this.marioelement.style.transform = "rotate(0deg)";
        this.renderMario(this.position)
        break;
    default:
        break;

}


}

move_right(){
    this.position.x += 100;
    this.renderMario(this.position,)
}
}
function main{
    const mario = new Mario({x: 100, y: 100},);
    mario.renderGameBord();
    mario.renderMario({x: 1, y: 335.5});

document.addEventListener('keydown', (event) => {
    mario.moveMario(event);});
}

