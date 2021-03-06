    /**
     * Created by aaronendsley on 5/6/16.
     */
    'use strict'
    var getUserName=function(){
        var name=$('#name').val();
        var nameSection =$('.nameSection');
        userStats.name=name;
        nameSection.empty();
    };
    var getMyCard=function(card){
            var myCard = card;
            for (var cards in deck) {
                if (myCard == deck[cards].id ) {
                    usersCard = deck[cards];
                };
        }
        //Not Sure if the UI will have to be dynamically changed when this is called, still deciding 
    };
    var addToUser=function(){
        if($.isEmptyObject(usersCard)) {
        }else{
            userDeck.push(usersCard);
            usersCard.points = parseInt(usersCard.points);
            userStats.points = parseInt(userStats.points);
            userStats.runAway = parseInt(userStats.runAway);
            usersCard.runAway = parseInt(usersCard.runAway);
            usersCard.cardValue = parseInt(usersCard.cardValue);
            userStats.totalWorth = parseInt(userStats.totalWorth);
            userStats.points = userStats.points + usersCard.points;
            userStats.totalWorth = userStats.totalWorth + usersCard.cardValue;
            userStats.runAway += usersCard.runAway;
            usersCard='';
        }
        //Each call of this will have to reload all the ui elements being effect by this data
    };
    var removeFromUser=function(card){
        var removeCard=card;
        for(var i=0; i < userDeck.length; i++){
            if(userDeck[i].id === removeCard){
                userStats.points-=userDeck[i].points;
                userStats.runAway -= userDeck[i].runAway;
                userStats.totalWorth -= userDeck[i].cardValue;
                //remove the rest of the elements by using the elements off the userDeck, userDeck.splice should be the
                //last thing that happens so that the code still has a data source to reference from
                userDeck.splice(i,1);
            }
        }
        //each call of removeFromUser will have the argument passed in dynamically
        //each call will also have to reload the list of userDeck and other related items when the ui is added
    };
    var goUpALevel=function(){
        userStats.level+=1;
        if(userStats.level === 10){
            alert('You won the game now no one likes you...jk');
            //The Ui will have to be dynamically changed when this occurs
        }
    }
    var goDownALevel=function(){
        if(userStats.level > 1) {
            userStats.level -= 1;
        }
        //The UI for the level will have to be dynamically changed when this function is called
    }
    var usersCard={};
    var userDeck=[];
    var userStats={
        name:'',
        level:1,
        points:0,
        runAway:0,
        totalWorth:0
    };
   var titles={
        level:'Level',
        points:'Strength',
        runAway:'Run Away'
   };

