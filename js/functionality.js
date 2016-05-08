    /**
     * Created by aaronendsley on 5/6/16.
     */
    'use strict'

    var getMyCard=function(card){
        var myCard=card;
        for(var cards in deck){
            if(myCard == deck[cards].cardName){
                console.log(deck[cards].cardName);
                console.log(deck[cards].cardType);
                console.log(deck[cards].points);
                console.log(deck[cards].runAway);
                console.log(deck[cards].cardValue);
    
                usersCard=deck[cards];
            }else{
                console.log('That card does not exist in the deck');
            }
        }

        //Not Sure if the UI will have to be dynamically changed when this is called, still deciding
    };

    var addToUser=function(){
        userDeck.push(usersCard);
        usersCard.points=parseInt(usersCard.points);
        userStats.points=parseInt(userStats.points);
        userStats.runAway=parseInt(userStats.runAway);
        usersCard.runAway=parseInt(usersCard.runAway);
        usersCard.cardValue=parseInt(usersCard.cardValue);
        userStats.totalWorth=parseInt(userStats.totalWorth);
        userStats.points=userStats.points + usersCard.points;
        userStats.totalWorth=userStats.totalWorth + usersCard.cardValue;
        userStats.runAway+=usersCard.runAway;

        if(usersCard.cardType !== 'race') {
            userStats.gear.push(usersCard.cardName);
        }
        usersCard='';

        //Each call of this will have to reload all the ui elements being effect by this data
    };

    var removeFromUser=function(card){
        var removeCard=card;
        for(var i=0; i < userDeck.length; i++){
            if(userDeck[i].cardName == card){
                console.log(userDeck[i].cardName + ' will be removed')
                userDeck.splice(i);

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
        userStats.level-=1;
        //The UI for the level will have to be dynamically changed when this function is called
    }

    var usersCard={};

    var userDeck=[];

    var userStats={
        name:'',
        level:1,
        points:0,
        gear:[],
        runAway:0,
        totalWorth:0
    };


