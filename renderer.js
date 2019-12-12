var board = document.createElement('div');
            board.className = "blah";
            for(var x=1; x<9;x++) {
                for(var y=1; y<9;y++) {
                if(x%2==0){
                  if(y%2==0){
                  var board = document.createElement('div');
                  board.className = "black";
                  document.getElementById('chessboard').appendChild(board);
                  }else{
                    var board = document.createElement('div');
                  board.className = "white";
                  document.getElementById('chessboard').appendChild(board);
                  }
                }else{
                    if(y%2==0){
                  var board = document.createElement('div');
                  board.className = "white";
                  document.getElementById('chessboard').appendChild(board);
                  }else{
                    var board = document.createElement('div');
                  board.className = "black";
                  document.getElementById('chessboard').appendChild(board);
                  }
                }
                }
              }