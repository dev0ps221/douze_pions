class Pion{
    joueur  = null;
    couleur = null;
    colonne = null;
    playerdirection = null;

    getPosition(){
        return {x:this.colonne.index,y:this.colonne.ligne.index}
    }

    movable(){
        const rightMoves = this.checkRightMoves()
        const letfMoves = this.checkLetfMoves()
        const upmoves = this.checkUpMoves()
        const downmoves = this.checkDownMoves()
        alert(this.playerdirection)
    }
    checkDownMoves(){
        const moves = []

        return moves
    }
    checkUpMoves(){
        const moves = []

        return moves
    }
    checkRightMoves(){
        const moves = []

        return moves
    }
    checkUpMoves(){
        const moves = []
        
        return moves
    }
    changeColonne(colonne){
        this.colonne = this.colonne
    }

    getCouleur(){
        return this.couleur;
    }

    render(){
        this.elem.removeEventListener(
            'click',(e)=>this.movable()
        )
        this.elem.addEventListener(
            'click',(e)=>this.movable()
        )
        return this.elem;
    }

    constructor(colonne,couleur,joueur){
        this.couleur = couleur;
        this.elem  = document.createElement('div')
        this.elem.classList.add('pion')
        this.elem.classList.add(this.couleur)
        this.joueur = joueur;
        this.playerdirection = joueur == 1 ? 'down' : 'up'
        this.colonne = colonne;
        this.board = this.colonne.board
    }

}
class Dame extends Pion{

}
