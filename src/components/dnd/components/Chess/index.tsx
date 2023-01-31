import React from 'react';
import Board from './board';
import styles from "./index.module.scss";

class ChessDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      knightPosition: [2, 3],
    };
    this.moveKnight = this.moveKnight.bind(this);
  }

  moveKnight(toX: number, toY: number) {
    this.setState({ knightPosition: [toX, toY] });
  }

  render() {
    const { knightPosition } = this.state;
    return (
      <div className={styles['chess-container']}>
        <Board knightPosition={knightPosition} moveKnight={this.moveKnight} />
      </div>
    );
  }
}

export default ChessDemo;
