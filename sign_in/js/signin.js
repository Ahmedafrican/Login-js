let email=document.querySelector('#email')
let password=document.querySelector('#password')
let warning=document.querySelector(".warning")
let currentIndex;

let userList;
 userList=JSON.parse(localStorage.getItem('userData'))

function login(){
        if(password.value==''||email.value==''){
            alert('all inputs are required','red')
        }else{
           if(isValidate()){
            let userName=userList[currentIndex].userName
            localStorage.setItem('userName',userName)
            location.href='.././welcome/welcome.html'
           }
            else if(emailWrong()){
            alert('Wrong E-mail','red')
            }
            else if(passwordWrong()){
                alert('Wrong Password','red')
            }
            else if(bothWrong()){
                alert('Wrong E-mail and Password','red')
            }
           }
        }


function signup(){
    location.href='.././sign_up/index.html'
}

function alert(text,color){
warning.innerHTML=text
warning.style.color=color
}

function isValidate(){
    for(let i=0;i<userList.length;i++){
        if(userList[i].userEmail==email.value&&userList[i].userPassWord==password.value){
            currentIndex = i
           return true
        }
    }
}



function emailWrong(){
    for(let i=0;i<userList.length;i++){
        if(userList[i].userEmail!==email.value&&userList[i].userPassWord==password.value){
           return true
        }
    }
}

function passwordWrong(){
    for(let i=0;i<userList.length;i++){
        if(userList[i].userPassWord!==password.value&&userList[i].userEmail==email.value){
           return true
        }
    }
}


function bothWrong(){
    for(let i=0;i<userList.length;i++){
        if(userList[i].userPassWord!==password.value&&userList[i].userEmail!==email.value){
           return true
        }
    }
}


