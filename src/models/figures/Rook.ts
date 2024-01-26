import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteRookLogo from "../../assets/white-rook.png";
import blackRookLogo from "../../assets/black-rook.png";

export class Rook extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.WHITE ? whiteRookLogo : blackRookLogo;
    this.name = FigureName.ROOK;
  }
}