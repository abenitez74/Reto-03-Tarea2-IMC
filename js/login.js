let formulario = document.getElementById('formulario-usuario');
let alerta=document.getElementById('alerta');

const url = ('http://localhost:4000/usuarios')




window.addEventListener('DOMContentLoaded', async () => {
})

//Agregar un usuario
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    //capturando los datos del html y los voy a enviar a mi data.json
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    

        // atraves de una promesa url donde se van a guardar esos datos
    let resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            correo: email,
            password: pass
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    let data = resp.json();
    alert("Registro guardado con exito");
    window.location.replace("../pages/signin.html")
})



