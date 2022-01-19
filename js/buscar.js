let formularioLogin = document.getElementById('formulario-login');

const url = ('http://localhost:4000/usuarios')


window.addEventListener('load', function(){
    let alerta=document.getElementById('alerta')
    alerta.style.display='none'
	})


/*Buscador Usuario */
formularioLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    let emailUser = document.getElementById('email').value;
    let passuser = document.getElementById('passwordLogin').value;

    

    let resp = await fetch(url);
    let data = await resp.json();
    

    //busqueda a trave de un filtro
    let filtro = data.filter(usuarios => usuarios.correo.toLowerCase() === emailUser.toLowerCase())
    console.log(filtro)
    
    localStorage.setItem('datos',JSON.stringify(emailUser)),

    alerta.innerHTML = '';
    alerta.style.display='block'
    filtro.length === 0 ?
        
        alerta.innerHTML += `
                <h5 class="modal-title" id="exampleModalLabel">Registro no existe</h5>`
        :
        (
            window.location.replace("../pages/calculadora.html")
        )
})




