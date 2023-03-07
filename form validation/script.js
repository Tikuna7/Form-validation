var form = document.querySelector('.form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');


//Show input Error massage
function showError(input, message){
    var formControl = input.parentElement;
    formControl.className = "form-control error";
    var small = formControl.querySelector('small');
    small.textContent = message;
    console.log(formControl);
    
}

 //Show Success Outline
 function showSuccess(input){
    var formControl = input.parentElement;
    formControl.className = "form-control success";

 }

 //Check email is valid
 function checkEmail(input){
    var re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(String(input.value).toLocaleLowerCase())){
            showSuccess(input);
    }else{
        showError(input, "Email is not valid")
    }

}

//Get field Name
function getFieldName(input){
    if(input.id ==='password2')return 'Confirm Password'
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check Required fields
function checkRequired(inputArr){
    for (var index = 0; index < inputArr.length; index++) {
     var element = inputArr [index];
     if(element.value.trim() ===''){
        console.log(element.id)
        showError(element, getFieldName(element) + ' is required');
     }else{
        showSuccess(element);
     }
    }
}

//Check input length
function checkLength(input , min, max){
    if(input.value.length < min){
    showError(input, getFieldName(input) +" must be at least " + min +" characters");
    }else if (input.value.length > max){
        showError(input, getFieldName(input) + " must be less than " + max + " characters");
    }else{
      showSuccess(input);
    }
}

//check password match
function checkPasswords(input1 , input2){
    if(input1.value !==input2.value){
        showError(input2, 'Passwords do not match');
    }
}

//Event listeners
form.addEventListener('submit', function(e){
     e.preventDefault();

     checkRequired([username, email, password, password2]);
     checkLength(username, 3, 15);
     checkLength(password, 8, 25);
     checkEmail(email);
     checkPasswords(password ,password2);
});





















/* if(username.value ===''){
     showError(username , 'Username is required');

   }else{
     showSuccess(username);
   }

   if(email.value ===''){
    showError(email , 'Email is required');

  }else if(!isValidEmail(email.value)){
      showError(email, "Email is not valid")
  } else{
    showSuccess(email);
  }

  if(password.value ===''){
    showError(password , 'Password is required');

  }else{
    showSuccess(password);
  }

  if(password2.value ===''){
    showError(password2 , 'Confirm password is required');

  }else{
    showSuccess(password2);
  }
  */