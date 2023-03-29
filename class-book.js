/* 
Clase Book, define las propiedades de los libros y se hace una instancia para añadir libros nuevos 
* @example  let bookX = new Book('title', 'writer', 'year', 'gender', 'stock');

Para modificar la cantidad de libros que hay en stock del mismo libro, se utiliza el siguiente ejemplo: 
* @example  bookX.setNumUnits(999);

Para mostrar el libro en consola, se utiliza el siguiente ejemplo:
* @example  console.log(bookX);
*/


class Book {

  constructor(title, writer, year, gender, stock) {
    this.title = title;
    this.writer = writer;
    this.published = year;
    this.gender = gender;
    this.originalUnits = stock;
  }

  setNumUnits(stock) {
    this.actualUnits = stock;
  }
}


let bookOne = new Book('title', 'writer', 'year', 'gender', 2);
let bookTwo = new Book('title', 'writer', 'year', 'gender', 2);
let bookThree = new Book('title', 'writer', 'year', 'gender', 2);
  
bookOne.setNumUnits(1);
bookTwo.setNumUnits(1);
bookThree.setNumUnits(1);
  
console.log(bookOne);
console.log(bookTwo);
console.log(bookThree);
