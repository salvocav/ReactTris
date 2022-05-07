import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Square extends React.Component {

    render() {
      return (
          /*Richiamando this.setState dall’handler onClick nel 
          metodo render di Square, fondamentalmente stiamo dicendo 
          a React di ridisegnare quello Square ogni qual volta il suo 
          <button> viene cliccato*/ 

        <button className="square" 
        onClick={() => this.props.onClick()}  /*event handler per il click*/ 
        >
            
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {

    constructor(props){
        super(props);
        this.state={
            squares: Array(9).fill(null),
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i]='X';
        this.setState({squares: squares});
    }


    renderSquare(i) {
      return <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />;
    } /*Ogni Square adesso riceverà una prop value che sarà valorizzata 
    con 'X', 'O', o null nel caso dei quadrati vuoti.*/
  
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
  