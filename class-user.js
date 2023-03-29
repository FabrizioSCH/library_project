/*

Clase Usuario "User", define al usuario cliente de la biblioteca el cual tendrá un nombre de referencia y un correo como también una mochila en la cual
se guardarán los libros que tomó prestados actualmente

Para añadir libros nuevos a la biblioteca:
* @example let bookX = new Book('titulo', 'autor', 'año', 'genero', 'stock inicial');

Para añadir un nuevo usuario:
* @example let userX = new User('Nombre', 'Correo');

Para añadir un libro a la mochila del usuario:
* @example userX.lendBooks(bookX);

Para visualizar los libros que estan en la biblioteca por cada libro utilizamos:
* @example console.log(bookX);

Para visualizar los usuarios que estan registrados usamos para cada usuario:
* @example console.log(userX);

*/


class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.bag = [];
  };

  lendBooks(book) {
    this.bag.push(book)
  };
}


// Probando la clase Book repetida pero dentro del archivo perteneciente a User (para no utilizar export e import por el momento)

class Book {
  constructor(title, writer, published, gender, stock) {
    this.title = title;
    this.writer = writer;
    this.published = published;
    this.gender = gender;
    this.stock = stock;
  };

/*
  Método en revision 
  addBook(title, writer, published, gender, stock) {
    const book = { title, writer, published, gender, stock };
    this.library.push(book);
  };
  */
}


let book1 = new Book('ej 1', 'ej 1', 2001 , 'ej 1', 1);
let book2 = new Book('ej 2', 'ej 2', 2023 , 'ej 2', 2);

let userOne = new User('Fabrizio', 'fabr_25@hotmail.com');
userOne.lendBooks(book1);



console.log(book1);
console.log(book2);

console.log(userOne);
