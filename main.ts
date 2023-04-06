import {Book} from "./book";
import {BookManager} from "./BookManager";

let book1 = new Book("A001","Lập trình java")
let book2 = new Book("A002","Lập trình PHP")
let book3 = new Book("A003","Lập trình TS")

let BookManager1 =new BookManager()
BookManager1.add(book1)
BookManager1.add(book2)
BookManager1.add(book3)
BookManager1.update('A003', 'lập trình MySQL')
console.log(BookManager1.findBook("A003"))
console.log(BookManager1.getList())
