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
        }
    }
}
