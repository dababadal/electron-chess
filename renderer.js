for(var x=1; x<9;x++) {
  for(var y=1; y<9;y++) {
  var file = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  if(x%2==0){
    if(y%2==0){
    var board = document.createElement('div');
    board.className = "white";
    board.id = file[y] + x;
    document.getElementById('chessboard').appendChild(board);
    }else{
      var board = document.createElement('div');
    board.className = "black";
    board.id = file[y] + x;
    document.getElementById('chessboard').appendChild(board);
    }
  }else{
      if(y%2==0){
    var board = document.createElement('div');
    board.className = "black";
    board.id = file[y] + x;
    document.getElementById('chessboard').appendChild(board);
    }else{
      var board = document.createElement('div');
    board.className = "white";
    board.id = file[y] + x;
    document.getElementById('chessboard').appendChild(board);
    }
  }
  }
}