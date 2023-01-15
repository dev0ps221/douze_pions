class Pion{
    joueur  = null;
    couleur = null;
    colonne = null;
    getCouleur(){
        return this.couleur;
    }

    render(){
        render = `<div class='pion ${this.couleur}'>
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
