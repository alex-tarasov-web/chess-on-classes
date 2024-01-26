import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackBishopLogo from '../../assets/black-bishop.png'
import whiteBishopLogo from '../../assets/white-bishop.png'

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.WHITE ? whiteBishopLogo : blackBishopLogo;
    this.name = FigureName.BISHOP;
  }
}