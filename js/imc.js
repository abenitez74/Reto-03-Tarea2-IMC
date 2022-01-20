let formularioImc = document.getElementById('formulario-imc');
const resultado=document.getElementById('text-resul');
const escala=document.getElementById('scale');
const MensajeMostrar=document.getElementById('mensaje');
let mensaje='';
let data='';

const url1 = ('http://localhost:4000/imc')



window.addEventListener('load', function(){
    var guardado = localStorage.getItem('datos');
    userLogin= document.getElementById('login-user')
    data=JSON.parse(guardado);
    userLogin.innerHTML+=` ${data}`
    
	})


    formularioImc.addEventListener('submit', async (e) => {
        e.preventDefault();

        let edad=document.getElementById('edad').value
        let peso=document.getElementById('peso').value
        let altura=document.getElementById('altura').value
  
        let = alturaCm=altura/100;
        let potencia =  Math.pow((alturaCm),2);
        let imc= peso / potencia;
        
        if(imc <18.5){
            MensajeMostrar.innerHTML = '';
            mensaje="bajo de peso"
            MensajeMostrar.innerHTML+=`${mensaje}`
        }
        else if (imc >18.5 && imc<24.99){
            MensajeMostrar.innerHTML = '';
            mensaje="saludable"
            MensajeMostrar.innerHTML+=`${mensaje}`
        }
        else if (imc >25 && imc<29.9){
            MensajeMostrar.innerHTML = '';
            mensaje="Con Sobrepeso"
            MensajeMostrar.innerHTML+=`${mensaje}`
        }
        else if (imc >30 && imc<39.9){
            MensajeMostrar.innerHTML = '';
            mensaje="Obeso"
            MensajeMostrar.innerHTML+=`${mensaje}`
        }
        
        resultado.innerHTML = '';
        resultado.innerHTML+= `El IMC es de ${imc.toFixed(2)}`        

        escala.value=imc

        //guardar datos IMC

let resp1 = await fetch(url1, {
    method: 'POST',
    body: JSON.stringify({
        usuario:data,
        edad: edad,
        peso: peso,
        altura: potencia,
        imc:imc.toFixed(2)
    }),
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
})


})


function cerrarSesion(){
    localStorage.clear();
}

    
    
    
    
    

