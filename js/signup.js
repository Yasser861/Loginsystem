var allLogin=[];
var userName=document.querySelector('#name');
var userEmail=document.querySelector('#email');
var userPass=document.querySelector('#password');
var signupBtn=document.querySelector('#signup');
var loginBtn=document.querySelector('#login');
var loginSec=document.querySelector('section.login');
var message=document.querySelector('#message');
 
if(localStorage.getItem('users')!=null){
    allLogin=JSON.parse(localStorage.getItem('users'));
}

//signup=============================================
signupBtn.addEventListener( 'click' ,function() {
    for(var i=0;i<allLogin.length;i++){
        if(allLogin[i].email.toLowerCase()==userEmail.value ){
            message.innerHTML="email already exists";
            message.classList.remove('d-none');
            console.log(i);
            return;
        }
    }
    if(validEmail()){
        var user={
            name:userName.value,
            email:userEmail.value,
            password:userPass.value
        }
        allLogin.push(user);
        localStorage.setItem('users',JSON.stringify(allLogin));
        console.log(allLogin);
        deleteValue();
    }else if(validEmail()== false){
        message.innerHTML="Enter Valid Email";
        message.classList.remove('d-none');
    }
})

function deleteValue() {
    userName.value='';
    userEmail.value='';
    userPass.value='';
}

//validation

var emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validEmail() {
    return emailRegex.test(userEmail.value);
}
