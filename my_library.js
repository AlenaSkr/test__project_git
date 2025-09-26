class Library{
    constructor(libTitle){
        this.name = libTitle;
        this.books = [];
        this.totalBooks = 0;  //Общее кол-во книг
        this.borrowedBooks = 0; //кол-во выданных книг
    }
    // добавление новой книги, если "isbn" есть в базе, то увеличим кол-во книг 
     addBook(title, author, year, isbn, quantity = 1){
        const newBook = {
            title: title,
            author: author,
            year: year,
            isbn: isbn,
            totalQuantity : quantity, // кол-во экземпляров
            availableQuantity: quantity, // кол-во доступных для выдачи
            borrowedBy: [] // список читателей кто брал книгу
        }
        const findBook = this.books.filter(book => book.isbn == isbn);
        if (findBook.length) {
            for (var i = 0; i<= this.books.length; i++){
                if (this.books[i] == findBook[0]){
                    this.books[i].totalQuantity += quantity;
                    this.books[i].availableQuantity += quantity;
                }
            }
        } else{
            this.books.push(newBook);
        }
        return newBook;
    }
    // поиск книг
    findBook(searchTerm){
        return this.books.filter(book => book.title.includes(searchTerm));
    }
}
const library = new Library("Тестовая библиотека");

library.addBook("JavaScript для начинающих", "Иван Петров", 2023, "JS-001", 5);
library.addBook("React продвинутый", "Мария Сидорова", 2024, "REACT-002", 3);
library.addBook("React продвинутый", "Мария Сидорова", 2024, "REACT-002", 1);

console.log(library.books);
const foundBooks = library.findBook("JavaScript");
console.log(foundBooks.length);

