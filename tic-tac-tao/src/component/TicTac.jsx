import React from 'react'
import useTicTacTeo from './Hooks/useTicTacTao'

export const TicTac = () => {
     const {board,handleClick,getStatusMessage,resetGame} = useTicTacTeo()
  return (
    <div className='container'>
           <h2>Tic Tac Tao App</h2>
              
              <h4>{getStatusMessage()}</h4>
                  <button className='btn' onClick={resetGame}>Reset</button>
              <div className='board'>
                  {board.map((el,index)=>{
                    return <button key={index}  disabled={el!==null} onClick={()=>handleClick(index)} className='box'>{el}</button>
                  })}
              </div>

    </div>
  )
}
