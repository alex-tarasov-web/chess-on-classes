import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteKingLogo from "../../assets/white-king.png";
import blackKingLogo from "../../assets/black-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.WHITE ? whiteKingLogo : blackKingLogo;
    this.name = FigureName.KING;
  }
}