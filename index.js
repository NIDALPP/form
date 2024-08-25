const name=document.getElementById('name');
const email=document.getElementById('email');
const number=document.getElementById('number');
const password=document.getElementById('password');
const form =document.getElementById('form');
const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
const number_error=document.getElementById('number_error');
const password_error=document.getElementById('password_error');




form.addEventListener('submit',(e)=>{
    var email_check=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var number_check= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var password_check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(name.value.length<=6 )
    {
        e.preventDefault();
        name_error.innerHTML='atleast 5 character is required';

    }
    else{
        name_error.innerHTML='';

    }
    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML='Valid email is needed';
    }
    else{
        email_error.innerHTML='';

    }
    if(!number.value.match(number_check)){
        e.preventDefault();
        number_error.innerHTML='Valid phone number is needed';
    }
    else{
        number_error.innerHTML='';
    }
    if(password.value.length <=9 )
        {
            e.preventDefault();
            password_error.innerHTML='atleast 8 character should included';
    
        }
        else if (!password.value.match(password_check)) {
            e.preventDefault();
            password_error.innerHTML = 'Password must include uppercase, lowercase, number, and special character';
        }
        else{
            password_error.innerHTML=' ';
        }

})