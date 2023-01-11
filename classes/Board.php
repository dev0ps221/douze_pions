<?php

    include_once('Pion.php');
    class Colonne{
        private $pion = null;
        
        function render(){
            $render= "<div class='colonne' id='case_".($this->index+1)."'>
                ".($this->pion?$this->pion->render():"")."
            </div>";
            return $render;
        }

        function addPion($couleur){
            $this->pion = new Pion($this,$couleur,$joueur);
        }

        function showRender(){
            echo $this->render();
        }
        function __construct($index){
            $this->index = $index;
        }
    }

    class Ligne{
        private $cases = [];

        function getCases(){
            return $this->cases;
        }

        function render(){
            $render = "
                <section class='ligne' id='ligne_".($this->index+1)."'>
            ";
            foreach($this->cases as $case){
                $render = "$render".$case->render();
            }
            $render = "$render</section>";
            return $render;
        }

        function setup(){
            $indexcolonne = 0;
            while($indexcolonne < $this->size){
                array_push($this->cases,new Colonne($indexcolonne));
                $indexcolonne++;
            }
        }

        function showRender(){
            echo $this->render();
        }

        function __construct($index,$size){
            $this->index = $index;
            $this->size = $size;
            $this->setup();
        }
    }

    class Board{

        private $lignes = [];
        private $size = 5;

        function renderBoard(){
            $render="<section id='board'>";

            foreach($this->lignes as $ligne){
                $render = $render.$ligne->render();
            }

            $render = $render."</section>";
            echo $render;
        }

        function setup(){
            $indexligne = 0;
            $couleurs = ['rouge','vert'];
            while($indexligne < $this->size){
                array_push($this->lignes,new Ligne($indexligne,$this->size));
                $indexligne++;
            }
            $limit = ($this->size/2)+1;
            $couleur = 0;
            while($couleur < count($couleurs)){
                $positionligne = 0;
                while($positionligne < $limit){
                    $ligne = $this->lignes[$positionligne];
                    $positioncase = 0;
                    if($positionligne+1 == $limit){
                        while($positioncase < $limit){
                            $case = $ligne->getCases()[$positioncase];
                            $case->addPion($couleurs[$couleur],$joueur+1);
                            $positioncase++;
                        }
                    }
                    $positionligne++;
                }
            }
        }

        function __construct($size = null){
            $this->size = $size ? $size : $this->size;
            $this->setup();
        }

    }


?>