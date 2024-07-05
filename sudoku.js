const fs = require('fs');

function read() {
  //Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции

  const readMass = fs.readFileSync('./puzzles.txt', 'utf-8')
  let sudokuField1st = readMass.slice(0, 81)

  let massived = sudokuField1st.match(/.{1}/g)

  const splitedSudoku = (arr, chunk) => 
    Array.from( { length: Math.ceil ( arr.length / chunk ) }, (v, i) => 
      arr.slice(i * chunk , i * chunk + chunk ))

  let SudokuArray = splitedSudoku(massived, 9)

  return SudokuArray
}

console.log(splitedSudoku(massived, 9));
console.log(splitedSudoku(sudokuField1st.split(), 9));

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved(board) {
  const validate = (num, pos, board) => {
    const [row, col] = pos; // разбиваем на строки и столбцы

    for (let i = 0; i < size; i++) {
      if (board[i][col] === num && i !== r) { // если в колонке уже есть число и строка не совпадает с текущей
        return false; 
      }
    }

    // проверка столбцов
    for (let i = 0; i < size; i++) {
      if (board[i][row] = num && i !== c) { // если в сторке уже есть число и столбец не совпадает с текущей
        return false;
      }
    }

    // проверка блока
    const boxRow = Math.floor(r / boxRow) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }
  }
  return true;
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
