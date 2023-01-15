class Game{

    target = null
    size = 5

    setTarget(target){
        this.target = target
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

    constructor(target){
        this.setTarget(target)
        this.board = new Board(this.size)
        this.setupBoard()
    }

}