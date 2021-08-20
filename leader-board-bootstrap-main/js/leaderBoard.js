// h3 color change
document.getElementById('top-player').style.color = '#ff0000';
document.getElementById('top-blog').style.color = '#ff0000';

//top players background
document.getElementById('top-players').style.backgroundColor = 'rgba(219, 219, 161, 1)';

// add ul

const courses = document.getElementsByClassName('course');
for (const course of courses) {
    course.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}
document.getElementById('add-course').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'The Complete JavaScript Course 2021';
    li.classList.add('course');
    const parent = document.getElementById('course-container');
    parent.appendChild(li);
});

document.getElementById('course-container').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
});
