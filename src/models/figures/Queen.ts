import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteQueenLogo from "../../assets/white-queen.png";
import blackQueenLogo from "../../assets/black-queen.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.WHITE ? whiteQueenLogo : blackQueenLogo;
    this.name = FigureName.QUEEN;
  }
}