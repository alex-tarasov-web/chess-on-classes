import {Figure, FigureName} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whitePawnLogo from "../../assets/white-pawn.png";
import blackPawnLogo from "../../assets/black-pawn.png";

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.WHITE ? whitePawnLogo : blackPawnLogo;
    this.name = FigureName.PAWN;
  }
}