module.exports = {
    board: function board(){
    for(var x=8; x>=1;x--) {
      for(var y=1; y<9;y++) {
      var file = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
      if(x%2==0){
        if(y%2==0){
        var board = document.createElement('div');
        board.id = "black";
        board.className = file[y] + x;
        document.getElementById('chess_square').appendChild(board);
        }else{
          var board = document.createElement('div');
          board.id = "white";
          board.className = file[y] + x;
        document.getElementById('chess_square').appendChild(board);
        }
      }else{
          if(y%2==0){
        var board = document.createElement('div');
        board.id = "white";
        board.className = file[y] + x;
        document.getElementById('chess_square').appendChild(board);
        }else{
          var board = document.createElement('div');
          board.id = "black";
          board.className = file[y] + x;
        document.getElementById('chess_square').appendChild(board);
          }
        }
        //notation
        if(x==1){
          var nots = document.createElement('div');
          nots.id = "notH";
          nots.innerHTML = file[y];
          document.getElementsByClassName(board.className)[0].appendChild(nots);
        }
        if(y==1){
          var nots = document.createElement('div');
          nots.id = "notV";
          nots.innerHTML = x;
          document.getElementsByClassName(board.className)[0].appendChild(nots);
        }
      }
    }
  }
}