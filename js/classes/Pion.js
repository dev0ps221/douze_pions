class Pion{
    joueur  = null;
    couleur = null;
    colonne = null;
    playerdirection = null;

    kill(target){
        
    }

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
    highlightMovable(moves){
        Object.keys(moves).forEach(
            direction=>{
                moves[direction].forEach(
                    coords=>{
                        const colonne = this.board.getColonne(coords) 
                        colonne.highlight(1)
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
        return this.elem;
    }

    select(doit=false){
        this.elem.classList[doit?'add':'remove']('selected')
        this.board.selected = this
    }

    processClicked(e){
        if(this.elem.classList.contains('selected')){
            this.board.unselect()
            this.board.unhighlight()
        }else{
            this.board.unselect()
            this.select(1)
            this.movable()
        }
        
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
        this.elem.removeEventListener(
            'click',(e)=>{
                this.processClicked(e)
            }
        )
        this.elem.addEventListener(
            'click',(e)=>{
                this.processClicked(e)
            }
        )
    }

}
class Dame extends Pion{

}
