// api url
let url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let address = document.querySelector('#address');

// user data
let user = {};

function startApp() {
    axios
        .get(url)
        .then(function (response) {
            console.log(response);
            user = response.data;
            // TODO: 이름, 이메일, 주소 표시하기
            console.log(user);
            username.innerText = user.name;
            email.innerText = user.name;
            address.innerText = user.address.city;
        })
        .catch(function (error) {
            console.log(error);
        });
}

startApp();
