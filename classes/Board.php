
    class Colonne{
        pion = null;
        
        function render(){
            render= "<div class='colonne' id='case_".(this->index+1)."'>
                ".(this->pion != null ? this->pion->render() : "")."
            </div>";
            return render;
        }

        function addPion(couleur,joueur){
            this->pion = new Pion(this,couleur,joueur);
        }

        function showRender(){
            echo this->render();
        }
        function __construct(index){
            this->index = index;
        }
    }

    class Ligne{
        cases = [];

        function getCases(){
            return this->cases;
        }

        function render(){
            render = "
                <section class='ligne' id='ligne_".(this->index+1)."'>
            ";
            foreach(this->cases as case){
                render = "render".case->render();
            }
            render = "render</section>";
            return render;
        }

        function setup(){
            indexcolonne = 0;
            while(indexcolonne < this->size){
                array_push(this->cases,new Colonne(indexcolonne));
                indexcolonne++;
            }
        }

        function showRender(){
            echo this->render();
        }

        function __construct(index,size){
            this->index = index;
            this->size = size;
            this->setup();
        }
    }

    class Board{

        lignes = [];
        size = 5;

        function renderBoard(){
            render="<section id='board'>";

            foreach(this->lignes as ligne){
                render = render.ligne->render();
            }

            render = render."</section>";
            echo render;
        }

        function setup(){
            indexligne = 0;
            couleurs = ['rouge','vert'];
            while(indexligne < this->size){
                array_push(this->lignes,new Ligne(indexligne,this->size));
                indexligne++;
            }
            limit = (int)((this->size/2));
            foreach(this->lignes as positionligne=>ligne){
                foreach(ligne->getCases() as positioncase => case){
                    if(positionligne < limit){
                        case->addPion(couleurs[0],1);
                    }
                    if(positionligne == limit){
                        if(positioncase!=limit){
                            if(positioncase < limit){
                                case->addPion(couleurs[0],1);
                            }
                            if(positioncase>limit){
                                case->addPion(couleurs[1],2);    
                            } 
                        }
                    }
                    if(positionligne>limit){
                        case->addPion(couleurs[1],2);    
                    }
                }
            }
        
        }

        function __construct(size = null){
            this->size = size ? size : this->size;
            this->setup();
        }

    }


