class LibraryCollection{
    constructor(capacity){
        this.capacity=capacity;
        this.books=[];
    }

    addBook (bookName, bookAuthor){
        if(this.capacity<this.books.length+1){
throw new Error("Not enough space in the collection.");
        }
        this.books.push({bookName, bookAuthor, payed: false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook( bookName ) {
        let theBook = this.books.find(a=>a.bookName==bookName);
        if(theBook == undefined){
            return `${bookName} is not in the collection.`;
        }
        if(theBook.payed == true){
            throw new Error(`${bookName} has already been paid.`);
        }
theBook.payed=true;
        return `${bookName} has been successfully paid.`;
    }



    removeBook(bookName) {
        let theBook = this.books.find(a=>a.bookName==bookName);
        if(theBook == undefined){
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if(theBook.payed == false){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let index = this.books.indexOf(theBook);
this.books.splice(index,1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor){
        if(!bookAuthor){
let output = `The book collection has ${ this.capacity-this.books.length } empty spots left.`;
let sortedBooks = this.books.sort((a,b) => a.bookName - b.bookName);

for (const book of sortedBooks) {
    output+= `\n${book.bookName} == ${book.bookAuthor} - ${book.payed==true? 'Has Paid': 'Not Paid'}.`
}
return output;

        }else{      
        let author = this.books.find(a=>a.bookAuthor == bookAuthor);
        if(author == undefined){
            throw new Error(`${bookAuthor} is not in the collection.`);
        }
        return `${author.bookName} == ${author.bookAuthor} - ${author.payed==true? 'Has Paid': 'Not Paid'}.`;
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());




