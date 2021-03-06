
const url = 'https://api.github.com/users';
const main = document.getElementById('main')
// let user = 'marcelocant'
let text = ''

function getUser(user) {

    fetch(`${url}/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            text = `<p>${data.name} Username ${data.login} <br> 
            ${data.public_repos} repositórios públicos<br>
            ${data.followers} seguidores<br>
            ${data.html_url} </p>`
            main.innerHTML = text
        })
        .catch((error) => console.error('Erro: ', error.message || error))

}

const userInput = document.getElementById('username')

userInput.addEventListener('focusout', function(event){
    getUser(event.target.value)
})


