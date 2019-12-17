module.exports = {
    piece: function piece(){
        
        place = 'rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR';
        count = 0;
        var nota = [];

        for (let a = 1; a < 9; a++) {
            for (let b = 1; b < 9; b++) {
                temp = (b+9).toString(36) + a;
                nota.push(temp);
            }
        }
        
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                
                if(place[j+count] == '.'){}
                
                else{
                    if(place[j+count] == 'r'){
                        var rook = document.createElement('img');
                        rook.id = 'r';
                        rook.className = 'piece';
                        rook.src = 'pieces/50px-Chess_rlt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(rook);
                    }
                    if(place[j+count] == 'n'){
                        var knight = document.createElement('img');
                        knight.id = 'n';
                        knight.className = 'piece';
                        knight.src = 'pieces/Chess_klt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(knight);
                    }
                    if(place[j+count] == 'b'){
                        var bishop = document.createElement('img');
                        bishop.id = 'b';
                        bishop.className = 'piece';
                        bishop.src = 'pieces/Chess_blt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(bishop);
                    }
                    if(place[j+count] == 'q'){
                        var queen = document.createElement('img');
                        queen.id = 'q';
                        queen.className = 'piece';
                        queen.src = 'pieces/50px-Chess_qlt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(queen);
                    }
                    if(place[j+count] == 'k'){
                        var king = document.createElement('img');
                        king.id = 'k';
                        king.className = 'piece';
                        king.src = 'pieces/Chess_klt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(king);
                    }
                    if(place[j+count] == 'p'){
                        var pawn = document.createElement('img');
                        pawn.id = 'p';
                        pawn.className = 'piece';
                        pawn.src = 'pieces/Chess_plt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(pawn);
                    }
                    if(place[j+count] == 'P'){
                        var pawnB = document.createElement('img');
                        pawnB.id = 'P';
                        pawnB.className = 'piece';
                        pawnB.src = 'pieces/50px-Chess_pdt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(pawnB);
                    }
                    if(place[j+count] == 'K'){
                        var kingB = document.createElement('img');
                        kingB.id = 'K';
                        kingB.className = 'piece';
                        kingB.src = 'pieces/50px-Chess_kdt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(kingB);
                    }
                    if(place[j+count] == 'Q'){
                        var queenB = document.createElement('img');
                        queenB.id = 'Q';
                        queenB.className = 'piece';
                        queenB.src = 'pieces/50px-Chess_qdt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(queenB);
                    }
                    if(place[j+count] == 'B'){
                        var bishopB = document.createElement('img');
                        bishopB.id = 'B';
                        bishopB.className = 'piece';
                        bishopB.src = 'pieces/50px-Chess_bdt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(bishopB);
                    }
                    if(place[j+count] == 'N'){
                        var knightB = document.createElement('img');
                        knightB.id = 'N';
                        knightB.className = 'piece';
                        knightB.src = 'pieces/50px-Chess_ndt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(knightB);
                    }
                    if(place[j+count] == 'R'){
                        var rookB = document.createElement('img');
                        rookB.id = 'R';
                        rookB.className = 'piece';
                        rookB.src = 'pieces/50px-Chess_rdt45.svg.png';
                        document.getElementsByClassName(nota[j+count])[0].appendChild(rookB);
                    }
                }
                if(j == 7){
                    count += 8;
                }
            }
        }
    }
}