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

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => displayUsers(data));
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function displayUsers(data) {
    //console.log(data);
    const ul = document.getElementById('users');
    for (const user of data) {
        //console.log(user);
        //console.log(user.name);
        const li = document.createElement('li');
        //li.innerText = user.name;
        li.innerText = `name: ${user.name} email: ${user.email}`;

        ul.appendChild(li);
    }
}