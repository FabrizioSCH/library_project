/*
Clase Books contiene un array de libros "books" con libros ya guardados dentro de la clase

Podemos añadir libros al arreglo mediante el método addBook, para ello debemos seguir los siguientes ejemplos

Manteniendo la instancia de la clase con:
* @example const book = new Books();

Añadimos los libros con el método addBook:
* @example book.addBook('title', 'writer', 'published', 'gender', 'stock');

Lo imprimimos en consola para visualizar todos los libros del array mediante:
* @example console.log(book);
*/

class Books {

  constructor() {
    this.books = [                                                                                                    // son los libros que están dentro del archivo JSON pero copiados para esta clase
      { title: "Steel Ball Run", writer: "Hirohiko Araki", published: 2004, gender: "manga", stock: 1 },
      { title: "Veinte mil leguas de viaje submarino", writer: "Julio Verne", published: 1869, gender: "novel", stock: 2 },
      { title: "Los juegos del hambre Sinsajo", writer: "Suzanne Collins", published: 2008, gender: "sci-fi", stock: 3 },
      { title: "El ultimo heroe del Olimpo", writer: "Rick Riordan", published: 2009, gender: "greek mythology", stock: 4 },
      { title: "The Maze Runner", writer: "James Dashner", published: 2009, gender: "young adult fiction", stock: 5 },
    ];
  }

  addBook(title, writer, published, gender, stock) {
    const book = { title, writer, published, gender, stock };
    this.books.push(book);
  };
}

const book = new Books();
book.addBook('Stardust Crusaders', 'Hirohiko Araki', 1989, 'Manga', 15);
book.addBook('zzzz', 'zzzz', 1234, 'zzz', 999);

console.log(book);
