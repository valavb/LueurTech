const name = document.getElementById('name');
const userName = document.getElementById('username');
const mail = document.getElementById('mail');
const pass = document.getElementById('pass');
const signupForm = document.getElementById('signup-form');
let errorMsg = document.getElementById('error-msg');

signupForm.addEventListener('submit',(e)=>{
    let messages = [];

    if(name.value === '' || name.value == null){
        messages.push('Name is required');
        name.style.border = '1px solid rgba(255,0,0,0.5)';
    }
    else{
        name.style.border = 'unset';
    }

    if(userName.value === '' || userName.value == null){
        messages.push('Username is required');
        userName.style.border = '1px solid rgba(255,0,0,0.5)';
    }
    else{
        userName.style.border = 'unset';
    }

    if(mail.value === '' || mail.value == null){
        messages.push('Mail is required');
        mail.style.border = '1px solid rgba(255,0,0,0.5)';
    }
    else{
        mail.style.border = 'unset';
    }
    if(pass.value === '' || pass.value == null){
        messages.push('Password is required');
        pass.style.border = '1px solid rgba(255,0,0,0.5)';
    }
    else{
       pass.style.border = 'unset';
    }
 
    if(pass.value.length < 8 ){
        messages.push('Password must be greater then 7 charater');
        pass.style.border = '1px solid rgba(255,0,0,0.5)';
    }
    else{
        pass.style.border = 'unset';
    }

    if(messages.length > 0){
        e.preventDefault();
        errorMsg.innerText = messages.join(',');
        errorMsg.style.background = '#F8D7DA';
        errorMsg.style.padding = '1rem';
        errorMsg.style.color = '#721c24';
        errorMsg.style.borderColor = '#f5c2c7';
        errorMsg.style.border = '2px solid transparent';
        errorMsg.style.borderRadius = '0.25rem';
    }
    else{
        alert('Signup success!!');
    }



})