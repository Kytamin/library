import {Book}from "./book";

export class BookManager {
    books: Book[] = []

    constructor() {
    }

    add(book: Book) {
        this.books.push(book)
    }

    getList(): Book[] {
        return this.books
    }

    findBook(ID: string) {
        let i = -1;
        this.books.forEach((book, index) => {
            if (book.ID === ID) {
                i = index;
            }
        })

        return i;
    }

    detele(ID: string) {
        if (this.findBook(ID) !== -1) {
            this.books.splice(this.findBook(ID), 1)
        } else {
            throw new Error(`Delete Error`)
        }
    }
    update(ID:string,name:string){
        if(this.findBook(ID)!==-1){
            this.books[this.findBook(ID)].setName(name);


        }else {
            throw new Error(`Update Error`)
        }
    }
}
