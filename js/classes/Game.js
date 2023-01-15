class Options{

    renderOptions(target){
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
        this.setupBoard()
        this.refreshOptions()
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
    refreshOptions(){
        if(this.target){
            this.options.renderOptions(this.target)
        }
    }

    constructor(target){
        this.setTarget(target)
        this.board = new Board(this.size)
        this.options = new Options()
        this.setup()
    }

}