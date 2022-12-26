const usersContainer = document.querySelector(".users");


function getUsers() {
    fetch(`https://randomuser.me/api`)
        .then(res => res.json())
        .then((data) => renderUser(data.results[0]));
}

function renderUser(user) {
    console.log(user);
    const html = `<article class="user">
    <img class = "user__img" src="${user.picture.thumbnail}" />
    <div class = "user__data">
        <div class = "header">
            <h3 class = "user__name">${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <h4 class = "user__email">${user.email}</h4>
            <h4 class = "user__cell">${user.cell}</h4>
        </div>
            <p class="user__row"><span>🔵</span> Age: ${user.dob.age}</p>
            <p class="user__row"><span>🟣</span> Gender: ${user.gender}</p>
            <p class="user__row"><span>🔴</span> Location: ${user.location.city} / ${user.location.country}</p>
    </div>
  </article>`;
    usersContainer.innerHTML = html;
}

getUsers();