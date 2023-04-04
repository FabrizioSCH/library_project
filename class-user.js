import { listBooks } from './books.js'

class User {
  #properties = ['id', 'name']

  constructor(id) {
    this.books = [];

    if(id) {
      this.load(id);
    }
  }

  getBooks(books) {
    const book = listBooks.find((book) => book.id === books);
    if(!book) {
      return 'Libro no encontrado';
    } else if (book.stock === 0) {
      return 'Libro no disponible';
    } else if (this.books.length >= 2) {
      return 'No puede pedir más libros';
    } else if (this.books.find((b) => b.id === books)) {
      return 'Ya tienes este libro prestado';
    } else {
      book.stock--;
      this.books.push(book);
      return 'Libro tomado prestado exitosamente';
    }
  }

  set(data) {
    const keys = Object.keys(data);
    keys.forEach(item=>{
      if(this.#properties.includes(item)){
       this[item] = data[item];
      }
    });
  }
}

const user = new User();

user.set({id: 95937551, name: 'Julio Rodriguez'});

console.log(user.getBooks(1));
console.log(user.getBooks(2)); 
console.log(user);

const userOne = new User();

userOne.set({id: 43424784, name: 'Fabrizio Schwindt'});

console.log(userOne.getBooks(4));
console.log(userOne.getBooks(4));
console.log(userOne);
