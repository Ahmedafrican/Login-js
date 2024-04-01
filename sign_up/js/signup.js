let userName=document.querySelector('#name')
let userEmail=document.querySelector(".email")
let userPassWord=document.querySelector("#password")
let btn=document.querySelector("button")
let warning=document.querySelector(".warning")
// let inputParent=document.querySelector(".inputParent")


let signupList;
if(localStorage.getItem('userData')==null){
    signupList=[]
}else{
    signupList=JSON.parse(localStorage.getItem('userData'))
}

function login(){
    location.href='.././sign_in/signin.html'
}

function signUp(){
    if(userName.value==""||userEmail.value==""||userPassWord.value==""){
        // let x=document.createElement("p")
        // x.style.color="red"
        // x.innerHTML='all inputs are required'
        // inputParent.appendChild(x)
        warning.innerHTML=`<p class='text-danger'>all inputs are required</p>`
    }else{
        if(check()){
            warning.innerHTML=`<p class='text-danger'>that email already exists</p>`;
        }else{
            let userData={
                userName:userName.value,
                userEmail:userEmail.value,
                userPassWord:userPassWord.value
            }
            signupList.push(userData)
            localStorage.setItem('userData',JSON.stringify(signupList))
            warning.innerHTML=`<p class='text-success'>Success</p>`
            location.href='../../sign_in/signin.html'
        }
     }
}


function check(){
    for(let i = 0 ; i<signupList.length; i++){
        if(signupList[i].userEmail== userEmail.value){
            return true
        }
    }
}









