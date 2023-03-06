const login = document.getElementById('login')
const moveOverla=()=> login.classList.toggle('move')

document.getElementById('cadastra').addEventListener('click', moveOverla )
document.getElementById('entra').addEventListener('click', moveOverla )