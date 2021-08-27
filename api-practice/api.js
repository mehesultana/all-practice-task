/* 
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    //.then((json) => console.log(json))
    //.then((json) => console.log(json.userId))
    .then((json) => console.log(json.title)); 
    */

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((data) => console.log(data));
}
