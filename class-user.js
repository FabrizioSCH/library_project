import { listBooks } from './books.js'

class User {
  #properties = ['id', 'name']

  constructor(id) {
    this.books = [];

    if(id) this.load(id);
  }

getBooks(books) {
    if(books.stock > 0) {
      return
    } else {
      if (this.books > 2) {
        return
      } else {
        this,books.push(books);
        //el cliente puede tener el libro
      }
    }
  }



  load(id) {

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




const gabriel = new User();

gabriel.getBook(listBooks.name[2]);
