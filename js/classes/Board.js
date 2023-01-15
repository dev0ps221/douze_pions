
    class Colonne{
        pion = null;
        
        render(){
            this.elem.innerHTML = ""
            if(this.pion != null){
                this.elem.appendChild(this.pion.render()) 
            } 
            return this.elem;
        }

        highlight(doit=false){
            this.elem.classList[doit?'add':'remove']('highlighted')
            this.board.highlighted.push(this)
            this.refresh()
        }

        addPion(couleur,joueur){
            this.pion = new Pion(this,couleur,joueur);
        }

        showRender(target){
            target.appendChild(this.render)
        }

        refresh(){
            this.render()
        }
        
        constructor(ligne,index){
            this.ligne = ligne
            this.board = this.ligne.board
            this.index = index;
            this.elem  = document.createElement('div')
            this.elem.classList.add('colonne')
            this.elem.id=`case_${(this.index+1)}`
        }
    }

    class Ligne{
        cases = [];

        getCases(){
            return this.cases;
        }

        render(){
            this.cases.forEach(colonne=>{
                this.elem.appendChild(colonne.render())
            })
            return this.elem;
        }

        setup(){
            let indexcolonne = 0;
            while(indexcolonne < this.size){
                this.cases.push(new Colonne(this,indexcolonne));
                indexcolonne++;
            }
        }

        showRender(target){
            target.appendChild(this.render());
        }

        constructor(board,index,size){
            this.board = board;
            this.index = index;
            this.size = size;
            this.elem  = document.createElement('div')
            this.elem.classList.add('ligne')
            this.elem.id=`ligne_${(this.index+1)}`
            this.setup();
        }
    }

    class Board{

        lignes = [];
        size = 5;
        highlighted = []
        selected = null
        getLigne(index){
            let match = null
            this.lignes.forEach(
                ligne=>{
                    if(ligne.index==index) match = ligne
                }
            )
            return match
        }

        getColonne(at){
            let match = null
            const ligne = this.getLigne(at.y)
            if(ligne){
                ligne.cases.forEach(
                    colonne=>{
                        if(colonne.index == at.x) match = colonne
                    }
                )
            }
            return match
        }

        setSize(size=5){
            this.size = size
        }

        renderBoard(target){
            const gameboard = document.createElement('section')
            gameboard.id = 'gameboard'
            let render= document.createElement('section')
            render.id = 'board'
            this.lignes.forEach(ligne=>{
                render.appendChild(ligne.render());
            })
            gameboard.appendChild(render)
            target.appendChild(gameboard);
        }

        unhighlight(){
            this.highlighted.forEach(
                highlighted=>{
                    highlighted.highlight(0)
                }
            )
            this.highlighted = []
        }

        unselect(){
            if(this.selected){
                this.selected.select(0)
            }
            this.selected=null
        }

        setup(){
            this.lignes = []
            let indexligne = 0;
            const couleurs = ['rouge','vert'];
            while(indexligne < this.size){
                this.lignes.push(new Ligne(this,indexligne,this.size));
                indexligne++;
            }
            const limit = parseInt((this.size/2));
            this.lignes.forEach((ligne,positionligne)=>{
                ligne.getCases().forEach((colonne,positioncolonne)=>{
                    if(positionligne < limit){
                        colonne.addPion(couleurs[0],1);
                    }
                    if(positionligne == limit){
                        if(positioncolonne!=limit){
                            if(positioncolonne < limit){
                                colonne.addPion(couleurs[0],1);
                            }
                            if(positioncolonne>limit){
                                colonne.addPion(couleurs[1],2);    
                            } 
                        }
                    }
                    if(positionligne>limit){
                        colonne.addPion(couleurs[1],2);    
                    }
                })
            })
        
        }

        constructor(size = null){
            this.setSize(size ? size : this.size);
            this.setup();
        }

    }


