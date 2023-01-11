<?php
    class Pion{
        private $joueur  = null;
        private $couleur = null;
        private $colonne = null;
        function getCouleur(){
            return $this->couleur;
        }

        function render(){
            $render = '<div class="pion '.$this->couleur.'<"></div>';
            return $render;
        }

        function __construct($colonne,$couleur,$joueur){
            $this->couleur = $couleur;
            $this->joueur = $joueur;
            $this->colonne = $colonne;
        }

    }
    class Dame extends Pion{

    }
?>
