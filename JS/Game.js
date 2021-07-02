class Game{
    constructor(){
    
    }

    getState(){
        database.ref('gamestate').on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gamestate : state
        })
    }

    start(){
        if(gameState === 0){
            form = new Form();
            form.display();

            player = new Player();
            player.getCount();
        }
        
    }
}
