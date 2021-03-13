import React from 'react';
import Square from './Square'

const Board=({squares,pieces, onClick, selectedPiece})=>{
    return(
    <div className="board">
        {squares.map((row,i)=>
        row.map((square,j)=>
        {

            return <Square key={`${i}-${j}`}
            square={square}
            // valid={square.isValid}
            // piece={square}
            isSelected={(selectedPiece!=null && (selectedPiece.i===i &&selectedPiece.j===j)) ? true : false}
            
            onClick={()=>onClick(i,j)}/>
        }
        
        ))}
       
    </div>
    )
}

export default Board;