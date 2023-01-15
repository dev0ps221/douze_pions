
class GameOptions{


    renderGameOptions(target){
        const gameoptions = document.createElement('section')
        gameoptions.id = 'options'
        target.appendChild(gameoptions);
    }
    constructor(game){
        this.game = game
    }
}
class Game{

    target = null
    size = 5
    started = false

    setTarget(target){
        this.target = target
    }

    setup(){
        this.setupBoard(

        )
        this.refreshGameOptions()
    }

    setupBoard(){
        this.board.setup()
        this.refreshBoard()
    }

    refreshBoard(){
        if(this.target){
            this.board.renderBoard(this.target)
        }
    }

    refreshGameOptions(){
        if(this.target){

            this.options.renderGameOptions(this.target)
        }
    }

    constructor(target){
        this.setTarget(target)
        this.board = new Board(
            this.size)
        this.options = new GameOptions()
        this.setup()
    }

}