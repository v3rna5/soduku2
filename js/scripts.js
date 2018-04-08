// Bussiness logic.

// Constractor of Map object (to map the board).

// Function to check the row for the duplicates.
var checkRow = function() {
  
}



// UI logic.

var map = {
 "0": ["", "", "", "", "", "", "", ""],
 "1": ["", "", "", "", "", "", "", ""],
 "2": ["", "", "", "", "", "", "", ""],
 "3": ["", "", "", "", "", "", "", ""],
 "4": ["", "", "", "", "", "", "", ""],
 "5": ["", "", "", "", "", "", "", ""],
 "6": ["", "", "", "", "", "", "", ""],
 "7": ["", "", "", "", "", "", "", ""],
 "8": ["", "", "", "", "", "", "", ""]
};

$(document).ready(function(){
  $("#table input").keyup(function(e) {
    var $target = $(e.target);
    var userInput = $("input#" + $target.data("x") + $target.data("y")).val();
    console.log($target.data("x"));
    console.log($target.data("y"));
    //$target.val("hi");
    //console.log(map[$target.data("y")][$target.data("x")]);
    map[$target.data("y")][$target.data("x")] = userInput;
    console.log(userInput);
  })
})
