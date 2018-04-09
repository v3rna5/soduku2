// Bussiness logic.

// Constractor of Map objects (to map the board).
function Board() {
  this.rows = [[], [], [], [], [], [], [], [], []];
  this.columns = [[], [], [], [], [], [], [], [], []];
  this.boxes = [[], [], [], [], [], [], [], [], []];
  this.history = [];
}

// Function to check the value for the duplicates in a row, column and 3 by 3 box.
Board.prototype.getSet = function(num, row, col) {
  if (this.rows[row].includes(num) || this.columns[col].includes(num) || this.boxes[this.toBoxIndex(row, col)].includes(num)) {
    return false;
  } else {
  this.rows[row].push(num);
  this.columns[col].push(num);
  this.boxes[this.toBoxIndex(row, col)].push(num);
  this.history.push([row, col]);
}
  return true;
}

function restart(){
  renew();
  timer();
}
Board.prototype.toBoxIndex = function(row, col) {
  return Math.floor(row / 3) * 3 + Math.floor(col/3);
}

Board.prototype.validation = function(input){
  if (!(/^\d+$/.test(input))){
    return false;
  } else if(parseInt(input) > 9 || parseInt(input) < 1) {
    return false;
  } else {
    return true;
  }
}

Board.prototype.generate = function(level) {
  var set = 0;
  var col = 0;
  var row = 0;
  var num = 0;
  while (set <= level){
    set++;
    col = Math.floor(Math.random() * 8);
    row = Math.floor(Math.random() * 8);
    num = Math.floor(Math.random() * 9 + 1);
    this.getSet(num, row, col);
    while (!this.getSet(num, row, col)){
      this.getSet(num, row, col)
      col = Math.floor(Math.random() * 8);
      row = Math.floor(Math.random() * 8);
      num = Math.floor(Math.random() * 9 + 1);
    }
    $("input#" + col + row).val(num);
  }
  return this.Board;

}




// UI logic.

$(document).ready(function(){
  var board = new Board();

  board.generate(35);
  console.log(board);

  /* $("input#" + $target.data("col") + $target.data("row")).val("hey")*/
  $("#table input").keyup(function(e) {
    var $target = $(e.target);
    var userInput = $target.val();

    if (!board.validation(userInput)){
      alert("Input is out of range");
    }
    console.log($target.data("col"));
    if (!board.getSet(userInput, $target.data("row"), $target.data("col"))) {
      $target.val("");
    }
    console.log(board);


  })
})
