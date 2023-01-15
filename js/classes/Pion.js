class Pion{
    joueur  = null;
    couleur = null;
    colonne = null;
    playerdirection = null;

    getPosition(){
        return {x:this.colonne.index,y:this.colonne.ligne.index}
    }

    movable(){
        const moves = {
            rightMoves : this.checkRightMoves(),
            letfMoves : this.checkLeftMoves(),
            upmoves : this.checkUpMoves(),
            downmoves : this.checkDownMoves(),
        }
        this.highlightMovable(moves)
    }
    highlightMovable(){
        Object.keys(moves).forEach(
            direction=>{
                moves[direction].forEach(
                    coords=>{
                        
                    }
                )
            }
        )
    }
    checkDownMoves(){
        const moves = []
        const nextindex = this.linenumber+1
        this.board.lignes.forEach(
            ligne=>{
                if(ligne.index == nextindex){
                    ligne.cases.forEach(
                        colonne=>{
                            if(colonne.index == this.colnumber){
                                if(colonne.pion==null){
                                    moves.push(
                                        {x:this.colnumber,y:nextindex}
                                    )
                                }
                            }
                        }
                    )
                }
            }
        )
        return moves
    }
    checkUpMoves(){
        const moves = []
        const nextindex = this.linenumber-1
        this.board.lignes.forEach(
            ligne=>{
                if(ligne.index == nextindex){
                    ligne.cases.forEach(
                        colonne=>{
                            if(colonne.index == this.colnumber){
                                if(colonne.pion==null){
                                    moves.push(
                                        {x:this.colnumber,y:nextindex}
                                    )
                                }
                            }
                        }
                    )
                }
            }
        )
        return moves
    }
    checkRightMoves(){
        const moves = []
        const nextindex = this.colnumber+1
        this.board.lignes.forEach(
            ligne=>{
                if(ligne.index == this.linenumber){
                    ligne.cases.forEach(
                        colonne=>{
                            if(colonne.index == nextindex){
                                if(colonne.pion==null){
                                    moves.push(
                                        {x:nextindex,y:this.linenumber}
                                    )
                                }
                            }
                        }
                    )
                }
            }
        )
        return moves
    }
    checkLeftMoves(){
        const moves = []
        const nextindex = this.colnumber-1
        this.board.lignes.forEach(
            ligne=>{
                if(ligne.index == this.linenumber){
                    ligne.cases.forEach(
                        colonne=>{
                            if(colonne.index == nextindex){
                                if(colonne.pion==null){
                                    moves.push(
                                        {x:nextindex,y:this.linenumber}
                                    )
                                }
                            }
                        }
                    )
                }
            }
        )
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
        this.coords = this.getPosition()
        this.linenumber = this.coords['y']
        this.colnumber = this.coords['x']
    }

}
class Dame extends Pion{

}
