import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Square extends React.Component {

    /*Nelle classi JavaScript, devi sempre chiamare super quando definisci 
    il costruttore di una sottoclasse (classe derivata). 
    Tutte le classi componente React che hanno un constructor devono 
    sempre richiamare super(props) come prima istruzione nel costruttore.*/ 
    constructor(props){
        super(props);
        this.state={
            value: null,
        };
    }

    render() {
      return (
          /*Richiamando this.setState dall’handler onClick nel 
          metodo render di Square, fondamentalmente stiamo dicendo 
          a React di ridisegnare quello Square ogni qual volta il suo 
          <button> viene cliccato*/ 
          
        <button className="square" 
        onClick={() => this.setState({value: 'X'})}
        >
            
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
 
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  