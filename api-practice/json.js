// JavaScript Object Notation -> JSON
const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
//console.log(user);

const stringified = JSON.stringify(user);
// console.log(stringified);

const book = {
    name: 'The Alchemist',
    author: 'Paulo Coelho',
    Genre: ['Quest', 'adventure', 'fantasy'],
    mediaType: ['Print', 'Audiobook'],
    isNovel: true,
};
//console.log(book);

const bookStringified = JSON.stringify(book);
console.log(bookStringified);

const bookConverted = JSON.parse(bookStringified);
console.log(bookConverted);
console.log(bookConverted.Genre);
