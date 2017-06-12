import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Game from './game';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '80%',
  height: 80,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
 

export default class Home extends React.Component {
   render() {
     return (
       <div>
         <div className="home">
           <Game />
         </div>  
       </div>
     );
   }
 }