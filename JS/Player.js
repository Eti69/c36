class Player{
    constructor(){

    }

    updateCount(count){
        database.ref("/").update({
            playercount:count
        })
    }

    update(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }

    getCount(){
        database.ref("playercount").on("value",function(data){
            playerCount=data.val();
        })
    }
    
}