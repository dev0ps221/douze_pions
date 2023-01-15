class Pion{
    joueur  = null;
    couleur = null;
    colonne = null;

    changeColonne(colonne){
        this.colonne = this.colonne
    }

    getCouleur(){
        return this.couleur;
    }

    render(){
        let render = `<div class='pion ${this.couleur}'>
        </div>`;
        return render;
    }

    constructor(colonne,couleur,joueur){
        this.couleur = couleur;
        this.joueur = joueur;
        this.colonne = colonne;
    }

}
class Dame extends Pion{

}
