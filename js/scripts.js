function Player (player) {
  this.playerName = player;
  this.subTotal = [];
  this.grand = 0;
  this.whoTurn = 0;

}

Player.prototype.getRandomNumber=function(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Player.prototype.grandTotal = function() {
  if (this.subTotal.length > 0) {
  var sum = this.subTotal.reduce((a, b)=> a+b);
  return sum + this.grand;
}
else {
  return this.grand;
}
}

  Player.prototype.zero = function () {
    alert("You rolled a 1, you lose all points this round");
  }

// Player.prototype.gameWin = function () {
// if (this.grand >= 100) {
//   alert("You win!");
// }
// }

$(document).ready(function(){

  var newPlayer1 = new Player("Player 1");
  var newPlayer2 = new Player("Player2");

  $("#roll1").click(function(event) {
    event.preventDefault();

    var player1Roll = newPlayer1.getRandomNumber();

    if (player1Roll === 1) {
      $("ul#bank1").text("");
      newPlayer1.zero();
      newPlayer1.grandTotal();
      // newPlayer1.nextPlayer();

    } else {
      $("#bank1").prepend("<li>" + player1Roll + "</li>");
      var player1RollInt = parseInt(player1Roll);
      newPlayer1.subTotal.push(player1RollInt);

    }
  });

  $("#hold1").click(function(event) {
    event.preventDefault();
    var player1gT = newPlayer1.grandTotal();
    $("#total1").text(player1gT);
    $("#bank1").text("");
    if (player1gT >= 100) {
      alert("You win!");
    }
    alert("Player 2's turn")
  });

  $("#roll2").click(function(event) {
    event.preventDefault();

    var player2Roll = newPlayer2.getRandomNumber();

    if (player2Roll === 1) {
      $("ul#bank2").text("");
      newPlayer2.zero();
      newPlayer2.grandTotal();
      // newPlayer2.nextPlayer();
    } else {
      $("#bank2").prepend("<li>" + player2Roll + "</li>");
      var player2RollInt = parseInt(player2Roll);
      newPlayer2.subTotal.push(player2RollInt);

    }
  });

  $("#hold2").click(function(event) {
    event.preventDefault();
    var player2gT = newPlayer2.grandTotal();
    $("#total2").text(player2gT);
    $("#bank2").text("");
    if (player2gT >= 100) {
      alert("You win!");
    }
    alert("Player 1's turn")
  });

});
