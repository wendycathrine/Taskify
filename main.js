
/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

//show password - login page

const checkbox = document.querySelector('#show_password');
const password_input = document.querySelector('#password_input');

checkbox.addEventListener('change',(event)=>{
      if(checkbox.checked){
 
    password_input.setAttribute('type','text')
      }else{
         
    password_input.setAttribute('type','password')
      }


});

//show password  in signup
const checkbox_signup = document.querySelector('#show_password_signup');
const password_1 = document.querySelector('#password_1');
const password_2 = document.querySelector('#password_2');

checkbox_signup.addEventListener('change',(event)=>{
    if(checkbox_signup.checked){
      password_1.setAttribute('type','text')
      password_2.setAttribute('type','text')
    }else{
        password_1.setAttribute('type','password')
        password_2.setAttribute('type','password')
    }
})
// login validation
const login__button =document.querySelector('.login__button');
const loginInputs =document.querySelectorAll('.loginInput');
const loginBoxes =document.querySelectorAll('.loginBox');
let isValid =false;

login__button.addEventListener('click',()=>{
    for (let index = 0; index < loginInputs.length; index++) {
        let element = loginInputs[index];
        let loginBox = loginBoxes[index];
        let val = element.value;
        let elName = element.name
       if(val===''){
        loginBox.classList.add('validation-error');
        if(elName ==='username'){
          document.querySelector('.username-error').innerHTML = 'Username is required';
        }else if(elName ==='password'){
         document.querySelector('.password-error').innerHTML = 'Password is required';
        }
       }

        
    }
})


for (let index = 0; index < loginInputs.length; index++) {
  let element = loginInputs[index];
  let loginBox = loginBoxes[index];
  let val = element.value;
  let elName = element.name
  element.addEventListener('keyup',()=>{
    loginBox.classList.remove('validation-error');
  if(elName ==='username'){
    document.querySelector('.username-error').innerHTML = '';
  }else if(elName ==='password'){
   document.querySelector('.password-error').innerHTML = '';
  }
  })


  
}
//  sigup validation
const signup__button =document.querySelector('.signup_button');
const signupInputs =document.querySelectorAll('.signupInput');
const signupBoxes =document.querySelectorAll('.signupBox');


signup__button.addEventListener('click',()=>{
    for (let index = 0; index < signupInputs.length; index++) {
        let element = signupInputs[index];
        let signupBox = signupBoxes[index];
        let val = element.value;
        let elName = element.name
        console.log(elName);
       if(val===''){
        signupBox.classList.add('validation-error');
        if(elName ==='username'){
          document.querySelector('.username_signup_error').innerHTML = 'Username is required';
        }else if(elName ==='password'){
         document.querySelector('.password_signup_error').innerHTML = 'Password is required';
        }else if(elName ==='password_confirmation'){
          document.querySelector('.password_confirmation_error').innerHTML = 'Please re-enter your password';
        }
       }

        
    }
})

for (let index = 0; index < signupInputs.length; index++) {
  let element = signupInputs[index];
  let signupBox = signupBoxes[index];
  let val = element.value;
  let elName = element.name
  element.addEventListener('keyup',()=>{
    signupBox.classList.remove('validation-error');
    if(elName ==='username'){
      document.querySelector('.username_signup_error').innerHTML = '';
    }else if(elName ==='password'){
     document.querySelector('.password_signup_error').innerHTML = '';
    }else if(elName ==='password_confirmation'){
      document.querySelector('.password_confirmation_error').innerHTML = '';
    }
  })


  
}

// password does not match

password_1.addEventListener('keyup', (e) => {
  if (password_1.value!== password_2.value) {
    document.querySelector('.password_confirmation_error').innerHTML = 'Password does not match'
  } else {
    document.querySelector('.password_confirmation_error').innerHTML = ''
  }
})
password_2.addEventListener('keyup', (e) => {
  if (password_1.value!== password_2.value) {
    document.querySelector('.password_confirmation_error').innerHTML = 'Password does not match'
  } else {
    document.querySelector('.password_confirmation_error').innerHTML = ''
  }
})





