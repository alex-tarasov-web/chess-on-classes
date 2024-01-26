import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteKnightLogo from "../../assets/white-knight.png";
import blackKnightLogo from "../../assets/black-knight.png";

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.WHITE ? whiteKnightLogo : blackKnightLogo;
    this.name = FigureName.KNIGHT;
  }
}