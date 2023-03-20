/**
*  Inventory
*  Esta clase se encarga de intermediar entre la biblioteca y los libros ubicados en el arreglo
*  @example const instance = new Object()
**/

class Inventory{
  
    #id;
    #seller;
    #row;
    #stock;
    #size;
  
    constructor(bookId, bookSeller, row, stock, size){
        this.#id;
        this.#seller;
        this.#row;
        this.#stock;
        this.#size;
    }
  
    store(){};
    identify(){};
    itemView(){};
    itemAcces(){};
    itemExtract(){};
    itemList(){}; 
}
