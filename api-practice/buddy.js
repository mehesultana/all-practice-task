const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => displayBuddies(data));
};

loadBuddies();

const displayBuddies = (data) => {
    const buddies = data.results;
    //console.log(data.results);
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        //console.log(buddy);
        //console.log(buddy.email);
        console.log(buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        //p.innerText = buddy.email;
        p.innerText = `name: ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }
};
