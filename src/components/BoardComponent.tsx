import React, {FC, SetStateAction} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board
  setBoard: (setStateBoard: SetStateAction<Board>) => void
}

const BoardComponent:FC<BoardProps> = (props) => {
  const { board, setBoard } = props

  return (
    <div className='board'>
      {board.cells.map((row, index) =>
        <React.Fragment key={index}>
          {row.map(cell =>
            <CellComponent cell={cell} key={cell.id} />
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default BoardComponent;