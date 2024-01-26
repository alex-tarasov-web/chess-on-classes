import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Pawn} from "./figures/Pawn";
import {King} from "./figures/King";
import {Queen} from "./figures/Queen";
import {Rook} from "./figures/Rook";
import {Knight} from "./figures/Knight";
import {Bishop} from "./figures/Bishop";

const KING_INITIAL_X = 4
const QUEEN_INITIAL_X = 3

const FIRST_ROOK_INITIAL_X = 0
const SECOND_ROOK_INITIAL_X = 7

const FIRST_KNIGHT_INITIAL_X = 1
const SECOND_KNIGHT_INITIAL_X = 6

const FIRST_BISHOP_INITIAL_X = 2
const SECOND_BISHOP_INITIAL_X = 5

const WHITE_PAWN_INITIAL_Y = 1
const BLACK_PAWN_INITIAL_Y = 6

export class Board {
  cells: Cell[][] = []

  public initCells() {
    // Generate columns. "i" will be "y" for cell
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []

      // Generate rows. "j" will be "x" for cell
      for (let j = 0; j < 8; j++) {
        const isBlackCell = (i + j) % 2 !== 0
        if (isBlackCell) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)) // Black cell
        } else {
          row.push(new Cell(this, j ,i, Colors.WHITE, null)) // White Cell
        }
      }

      this.cells.push(row)
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x]
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.WHITE, this.getCell(i, WHITE_PAWN_INITIAL_Y) )
      new Pawn(Colors.BLACK, this.getCell(i, BLACK_PAWN_INITIAL_Y))
    }
  }

  private addKings() {
    new King(Colors.WHITE, this.getCell(KING_INITIAL_X, 0))
    new King(Colors.BLACK, this.getCell(KING_INITIAL_X, 7))
  }

   private addQueens() {
     new Queen(Colors.WHITE, this.getCell(QUEEN_INITIAL_X, 0))
     new Queen(Colors.BLACK, this.getCell(QUEEN_INITIAL_X, 7))
  }

  private addRooks() {
    new Rook(Colors.WHITE, this.getCell(FIRST_ROOK_INITIAL_X, 0))
    new Rook(Colors.WHITE, this.getCell(SECOND_ROOK_INITIAL_X, 0))

    new Rook(Colors.BLACK, this.getCell(FIRST_ROOK_INITIAL_X, 7))
    new Rook(Colors.BLACK, this.getCell(SECOND_ROOK_INITIAL_X, 7))
  }

  private addKnights() {
    new Knight(Colors.WHITE, this.getCell(FIRST_KNIGHT_INITIAL_X, 0))
    new Knight(Colors.WHITE, this.getCell(SECOND_KNIGHT_INITIAL_X, 0))

    new Knight(Colors.BLACK, this.getCell(FIRST_KNIGHT_INITIAL_X, 7))
    new Knight(Colors.BLACK, this.getCell(SECOND_KNIGHT_INITIAL_X, 7))
  }

   private addBishops() {
     new Bishop(Colors.WHITE, this.getCell(FIRST_BISHOP_INITIAL_X, 0))
     new Bishop(Colors.WHITE, this.getCell(SECOND_BISHOP_INITIAL_X, 0))

     new Bishop(Colors.BLACK, this.getCell(FIRST_BISHOP_INITIAL_X, 7))
     new Bishop(Colors.BLACK, this.getCell(SECOND_BISHOP_INITIAL_X, 7))
  }

  public addFigures() {
    this.addPawns()
    this.addKings()
    this.addQueens()
    this.addRooks()
    this.addBishops()
    this.addKnights()
  }

}