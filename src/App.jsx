import React,{ useState} from 'react'
import Board from './components/Board'
import { calculateWinner } from './helpers'
import "./styles/root.css"
const App = () => {
  const NEW_GAME =[{board: Array(9).fill(null),isXNext:true}];
const [board, setBoard] = useState(Array(9).fill(null))
const [isXNext,setIsXNext] = useState(false);

const [history,setHistory] = useState(NEW_GAME);
const [currentMove ,setCurrentMove ] =useState(0);
const current = history[currentMove]

const winner = calculateWinner(current.board);
const message = winner ? `Winner is Player ${winner}` : `Player ${current.isXNext ? 'X':'O'} 's Turn`
 const handleSquareClick = (position) => {
  if(current.board[position] || winner){
    return;
  }
  setHistory((prev)=>{
    const last = prev[prev.length-1];
    const newBoard = last.board.map((square,pos)=>{
      if(pos === position)
      return last.isXNext ? 'X' : 'O';

      return square; 
    })
    return prev.concat({ board: newBoard ,isXNext : !last.isXNext})
  })
  setCurrentMove(prev =>prev+1)
 };

 const onNewGame = () =>{
  setHistory(NEW_GAME)
  setCurrentMove(0);
 }
  return (
    <>
    <div className='app'>
    <h1 className='heading'>TIC TAC TOE</h1>
    <h2 className='status'>{message}</h2>
    <div>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <br />
      <button type="button" className='newgame' onClick={onNewGame}> Start New Game</button>
    </div>
    <footer>Designed by| Syed Munazir Ahmed</footer>
    </div>
    </>
  )
  }

export default App