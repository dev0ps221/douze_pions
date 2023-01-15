
    class Colonne{
        pion = null;
        
        render(){
        }

        addPion(couleur,joueur){
            this.pion = new Pion(this,couleur,joueur);
        }

        showRender(target){

        }
        
        constructor(index){
            this.index = index;
        }
    }

    class Ligne{
        cases = [];

        getCases(){
            return this.cases;
        }

        render(){
            const render = `
                <section class='ligne' id='ligne_(${this.index+1})'>
            `;
            this.cases.forEach(colonne=>{
                render = `${render} ${colonne.render()}`;
            })
            render = `${render}</section>`;
            return render;
        }

        setup(){
            indexcolonne = 0;
            while(indexcolonne < this.size){
                this.cases.push(new Colonne(indexcolonne));
                indexcolonne++;
            }
        }

        showRender(target){
            target.innerHTML = this.render();
        }

        constructor(index,size){
            this.index = index;
            this.size = size;
            this.setup();
        }
    }

    class Board{

        lignes = [];
        size = 5;

        renderBoard(target){
            render="<section id='board'>";

            this.lignes.forEach(ligne=>{
                render = render+ligne.render();
            })

            render = render+"</section>";
            target.innerHTML = render;
        }

        setup(){
            indexligne = 0;
            couleurs = ['rouge','vert'];
            while(indexligne < this.size){
                array_push(this.lignes,new Ligne(indexligne,this.size));
                indexligne++;
            }
            limit = (int)((this.size/2));
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
            this.size = size ? size : this.size;
            this.setup();
        }

    }


