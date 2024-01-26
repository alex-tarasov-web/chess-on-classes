import {Colors} from "../Colors";
import logo from '../../assets/black-knight.png'
import {Cell} from "../Cell";

export enum FigureName {
  FIGURE = 'Фигура',
  KING = 'Король',
  QUEEN = 'Королева',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
  KNIGHT = 'Конь',
  PAWN = 'Пешка'
}

export class Figure {
  color: Colors
  // Взяли этот black-knight просто, чтобы описать тип "logo"
  logo: typeof logo | null
  cell: Cell
  name: FigureName
  id: number

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null
    this.name = FigureName.FIGURE
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
   return true
  }

  moveFigure(target: Cell) {

  }


}