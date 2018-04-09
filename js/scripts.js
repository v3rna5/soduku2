// Bussiness logic.

// Constractor of Map objects (to map the board).
function Board() {
  this.rows = [[], [], [], [], [], [], [], [], []];
  this.columns = [[], [], [], [], [], [], [], [], []];
  this.boxes = [[], [], [], [], [], [], [], [], []];
  this.history = [];
}

// Function to check the value for the duplicates in a row, column and 3 by 3 box.
Board.prototype.set = function(num, row, col) {
  if (this.rows[row].includes(num) || this.columns[col].includes(num) || this.boxes[this.toBoxIndex(row, col)].includes(num)) {
    return false;
  }

  this.rows[row].push(num);
  this.columns[col].push(num);
  this.boxes[board.toBoxIndex(row, col)].push(num);
  this.history.push([row, col]);

  return true;
}

function restart(){
  renew();
  timer();
}



// UI logic.

$(document).ready(function(){
  var board = new Board();

  $("#table input").keyup(function(e) {
    var $target = $(e.target);
    var userInput = $target.val();

    if (!board.set(userInput, $target.data("col"), $target.data("row"))) {
      $target.val("");
    }


  })
})
