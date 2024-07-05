const fs = require('fs');

function read() {
  //Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции

  const readMass = fs.readFileSync('C:/Users/User/Desktop/sudoku_solver/project-sudoku/puzzles.txt', 'utf-8')
  let sudokuField1st = readMass.slice(0, 81)

  let massived = sudokuField1st.match(/.{1}/g)

  const splitedSudoku = (arr, chunk) => 
    Array.from( { length: Math.ceil ( arr.length / chunk ) }, (v, i) => 
      arr.slice(i * chunk , i * chunk + chunk ))

  let SudokuArray = splitedSudoku(sudokuField1st.split(), 9)

  return SudokuArray
}

console.log(splitedSudoku(massived, 9));
console.log(splitedSudoku(sudokuField1st.split(), 9));

let sudokuField1st = readMass.slice(0, 81)

let massived = sudokuField1st.match(/.{1}/g)

const splitedSudoku = (arr, chunk) => 
  Array.from( { length: Math.ceil ( arr.length / chunk ) }, (v, i) => 
    arr.slice(i * chunk , i * chunk + chunk ))

console.log(splitedSudoku(massived, 9));
console.log(splitedSudoku(sudokuField1st.split(), 9));


function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
