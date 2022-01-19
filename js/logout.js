
window.addEventListener('load', function(){
    var guardado = localStorage.getItem('datos');
    userLogin= document.getElementById('login-user')
    data=JSON.parse(guardado);
    userLogin.innerHTML+=` ${data}`
    
	})
