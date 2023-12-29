var allLogin=[];
var userName=document.querySelector('#name');
var userEmail=document.querySelector('#email');
var userPass=document.querySelector('#password');
var loginBtn=document.querySelector('#login');
var loginSec=document.querySelector('section div');
var reloadBtn=document.querySelector('#reload');
var message=document.querySelector('#message');


if(localStorage.getItem('users')!=null){
    allLogin=JSON.parse(localStorage.getItem('users'));
}





//login

loginBtn.addEventListener( 'click' ,function(e) {
    for(var i=0;i<allLogin.length;i++){
        if(allLogin[i].email.toLowerCase()==userEmail.value && allLogin[i].password.toLowerCase()==userPass.value){
            loginSec.innerHTML=`<h1 class="text-info">Welcome ${allLogin[i].name}</h1>`
            document.querySelector('.navbar').classList.remove('d-none');
        }else{
            message.innerHTML="incorrect email or password";
            message.classList.remove('d-none');
            console.log('error');
        }
    }
})
//reload

reloadBtn.addEventListener('click', function(e){
    window.location.reload();
})