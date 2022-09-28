
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //set new var triangles to equal #
    var triangle = "";
    //create loop for triangle
    for(var i = 1; i <= num; i++){
      //set triangle plus equal to itself and #
      triangle += "#";
      //print triangle
      console.log(triangle);
    }
  }

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //create loop that starts at 1 and ends at 15
  for(var i = 1; i <= 15; i++){
    //if statement for 3, 5, and 15
    if(i % 15 === 0){
      console.log("fizzbuzz");
    } else if(i % 5 === 0){
      console.log("buzz");
    } else if(i % 3 === 0){
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

  function drawChessboard(num){
    //let size be the size of the board aka num
    let size = num;
    //create the board which is nothing right now
    let board = "";
    //we're gonna need some loops
    for(var x = 0; x < size; x++){
      for(var y = 0; y < size; y++){
        //determine if which square we're on
        if((x + y) % 2 === 0){
          //set board equal to empty space
          board += " ";
        } else {
          //otherwise set it equal to a #
          board += "#";
        }
        //set each board to show up on different line
      }
      board += "\n";
    }
    console.log(board); 
  }
  


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
