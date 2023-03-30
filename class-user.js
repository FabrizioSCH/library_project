import { listBooks } from './books.js'

class User {
  #properties = ['id', 'name']

  constructor(id) {
    this.books = [];

    if(id) this.load(id);
  }

  getBook(books){
    if(books.stock > 0){
      this.books.push(books.name);

    }
  };


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


const user = new User();

user.set({id: 95937551, name: 'Julio Rodriguez'});
console.log(user);

const userOne = new User();

userOne.set({id: 43424784, name: 'Fabrizio Schwindt'});
console.log(userOne);
