import React,{ useState} from 'react'
import Board from './components/Board'
import { calculateWinner } from './helpers'
import "./styles/root.css"
const App = () => {
  
const [board, setBoard] = useState(Array(9).fill(null))
const [isXNext,setIsXNext] = useState(false);
const winner = calculateWinner(board);

const message = winner ? `Winner is Player ${winner}` : `Player ${isXNext ? 'X':'O'} 's Turn`
 const handleSquareClick = (position) => {
  if(board[position] || winner){
    return;
  }
  setBoard((prev)=>{

    return prev.map((square,pos)=>{
      if(pos === position)
      return isXNext ? 'X' : 'O';

      return square; 
    })
  })
  setIsXNext(prev => !prev)
 };

  return (
    <>
    <div className='app'>
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <div>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
    </div>
    </>
  )
}

export default App