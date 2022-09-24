// Counting Cards
// In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high //and low cards remaining in the deck. This is called Card Counting.

// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player //should bet high. When the count is zero or negative, the player should bet low.

// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable //according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the //count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// Example Outputs: -3 Hold or 5 Bet

// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.
//Programm

let count = 0;

function cc(card) {
  // Only change code below this line
  if(card>1 && card<7){
    count++;
    return `${count} Bet`;
  }else if(card>6 && card<10){
     if(count>0){
        return `${count} Bet`;
    } else
    return `${count} Hold`;
  }else if(card === 10 || card === 'A' || card === 'K' || card === 'Q' || card === 'J'){
    count--;
    if(count>0){
        return `${count} Bet`;
    } else
    return `${count} Hold`;
  }
 else
  return "Change Me";
  // Only change code above this line
}

// cc(2); cc('J'); cc(9); cc(2); cc(7);
cc(2, 2, 10)
