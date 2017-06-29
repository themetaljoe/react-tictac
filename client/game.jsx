import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

const check = [[0,1,2],[0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8]];
const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneSymbol : "X",
      playerTwoSymbol : "O",
      currentTurn : "X", 
      board : ["", "", "", "", "", "", "", "", ""],
      
    }
  }
  
  handleClick(index) {
    if (this.state.board[index] === "")  {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.playerOneSymbol ? this.state.playerTwoSymbol : this.state.playerOneSymbol,
      })
    }
  }

  computerMove() {
    return this.state.currentTurn === this.state.playerTwoSymbol;
    
   /* else {
      if (this.state.board[index] === "") {
        return Math.random(this.state.playerTwoSymbol[index]);
      }
    }*/
  }
  
  computerAi() {
    console.log('yo', this.computerMove())
    if (this.computerMove()) {
    //  if (this.state.board[index] === "")
      const result = grid.map(num => this.state.board[num] === "" ? num : false)
        .filter(num => num);
      const move = Math.floor(Math.random() * result.length);
      console.log(result[move])
      const board = this.state.board;
      board[result[move]] = this.playerTwoSymbol;
      this.setState({
        board
        
      })
    }
  }
 
  checkForWinner() {
    const allRules = check.map(coordinateSet => this.checkBoardForCoordinates(coordinateSet));
    return allRules.filter(rule => rule).length > 0;
  }
  
  endGame() {
    if (this.checkForWinner()) {
      document.location.reload();
    }
  }

  checkBoardForCoordinates(coords) {
    const coordinateSet = coords.map(coordinate => this.state.board[coordinate]);
    return !!coordinateSet.reduce((a, b) => (a === b) && a !== "" ? a : NaN);
  }

  render() {
    this.computerMove();
    this.endGame();
    console.log(this.checkForWinner());

    return (
      <div>
        <div className="board">
          { 
            this.state.board.map((cell, index) => {
                return (
                  <div 
                    key={`tictactoe-board-${index}`}
                    onClick={() => this.handleClick(index)} className="square"
                  >
                    { cell }
                  </div>
                );
              })
          }
        </div>

      </div>
    );
  };
      
} 