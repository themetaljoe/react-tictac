try {
import React from 'react';
import ReactDOM from 'react-dom';

export default class Game extends React.Component{
  
  constructor(props) {
     super(props)
      this.state = {
        playerOneSymbol : "X",
        playerTwoSymbol : "O",
        currentTurn : "X", 
        board : ["", "", "", "", "", "", "", "", ""]
    }
  }
  
handleClick(index) {
  this.state.board[index] = this.state.currentTurn
  this.setState[{
    board: this.setState.board,
    currentTurn: this.setState.currentTurn ===             this.setState.playerOneSymbol ? this.setState.playerTwoSymbol   :     this.setState.playerOneSymbol
  }]
}
  
  
    render{
        return(
            <div className="board">
            { this.state.board.map((cell, index) => {
              return (
              <div onClick={} className="square">(cell)</div>)
            }
            )})
          
          </div>
          };
    }
          catch(err) {
          console.log(err);
          }
    }
          
    