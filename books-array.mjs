/* 
* años libros                                 / @example let search = books.map(books => books.published);
* libros menores al año 2008                  / @example let search = books.filter(books => books.published < 2008);
* libros genero manga                         / @example let search = books.filter(books => books.gender == 'manga');
* libros sci-fi mayor al año 2010             / @example let search = books.filter(books => books.gender == 'sci-fi' && books.published > 2010);
                                                          if (search == ''){console.log('No hay resultado de busqueda')};

* primer elemento que cueste menos de 25000 / @example let search = Automoviles.find(Automoviles => Automoviles.prize < 25000);

* reduce = metodo que sume la cantidad de elementos tipo diesel

* A cada linea de código agregarle una nueva linea debajo con el código / @example console.log(search); 
*/

const books = [

    {
        title: "Steel Ball Run",
        writer: "Hirohiko Araki",
        published: 2004,
        gender: "manga",
        numbItem: 01
    }, {
        title: "Veinte mil leguas de viaje submarino",
        writer: "Julio Verne",
        published: 1869,
        gender: "novel",
        numbItem: 02
    }, {
        title: "Los juegos del hambre Sinsajo",
        writer: "Suzanne Collins",
        published: 2008,
        gender: "sci-fi",
        numbItem: 03
    }, {
        title: "El ultimo heroe del Olimpo",
        writer: "Rick Riordan",
        published: 2009,
        gender: "greek mythology",
        numbItem: 04

    }, {
        title: "The Maze Runner",
        writer: "James Dashner",
        published: 2009,
        gender: "young adult fiction",
        numbItem: 05
    },
]
