const books = ['A Smarter Way to Learn JavaScript', 'JavaScript: The Definitive Guide', 'DOM Enlightenment', 'Head First JavaScript Programming: A Brain-Friendly Guide', 'JavaScript: The Good Parts', 'ou Do not Know JS', 'Single Page Apps in Depth'];

const searching = 'javascript';
const output = [];
for (const book of books) {
    if (book.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(book);
    }
}
console.log(output);
