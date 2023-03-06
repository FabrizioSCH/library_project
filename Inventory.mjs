/**
*  Inventory
*  Esta clase se encarga de intermediar entre la biblioteca y los libros ubicados en el arreglo
*  @example const instance = new Object()
**/

class Inventory{
  
    #invBid;
    #invBs;
    #invRow;
    #invSto;
    #invSiz;
  
    constructor(bookId, bookSeller, row, stock, size){
        this.#invBid;
        this.#invBs;
        this.#invRow;
        this.#invSto;
        this.#invSiz;
    }
  
    store(){};
    identify(){};
    itemView(){};
    itemAcces(){};
    itemExtract(){};
    itemList(){}; 
}
