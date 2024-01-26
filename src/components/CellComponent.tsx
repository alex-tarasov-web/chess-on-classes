import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps {
  cell: Cell
}

const CellComponent: FC<CellProps> = (props) => {
  const {cell} = props

  return (
    <div className={`cell ${cell.color}`}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
    </div>
  );
};

export default CellComponent;