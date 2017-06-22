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
    if (this.state.currentTurn !== this.state.playerTwoSymbol) return false;
    
   /* else {
      if (this.state.board[index] === "") {
        return Math.random(this.state.playerTwoSymbol[index]);
      }
    }*/
  }
  
  computerAi() {
    if (this.computerMove !== false)
      return (Math.floor(Math.random(grid) * 9));

  }
 
  checkForWinner() {
    const allRules = check.map(coordinateSet => this.checkBoardForCoordinates(coordinateSet));
    return allRules.filter(rule => rule).length > 0;
  }
  
  checkBoardForCoordinates(coords) {
    const coordinateSet = coords.map(coordinate => this.state.board[coordinate]);
    return !!coordinateSet.reduce((a, b) => (a === b) && a !== "" ? a : NaN);
  }

  render() {
    this.computerMove();
    console.log(this.checkForWinner());
    console.log(this.computerAi());

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




          
    