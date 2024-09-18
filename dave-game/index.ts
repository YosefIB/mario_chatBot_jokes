interface position{
    x: number;
    y: number;
}

class mario{
    position: position;
    mario_URLimage: string;
    id: number;
    domElement: HTMLElement;

    constructor(position: position, mario_URLimage: string, id: number){
        this.position = position;
        this.mario_URLimage = mario_URLimage;
        this.id = id;

}

renderMario(gameBord: HTMLDivElement): void {
    
}
}
