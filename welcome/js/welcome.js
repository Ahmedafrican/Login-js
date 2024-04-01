let welcome=document.querySelector('.welcome')
let userName=localStorage.getItem('userName')



welcome.innerHTML=`<h1>Welcome ${userName}</h1>`;

function logout(){
    localStorage.removeItem('userName')
    location.href='.././sign_in/signin.html'
}

// // start of special case
// let navbar=document.querySelector('.navbar')

// window.addEventListener('scroll',function(){
//     // console.log(window.pageYOffset);
//     let x=window.pageYOffset
//     console.log(x);
//     if(x>=345){
//         navbar.setAttribute("style","background-color:red")

//     }else{
//         navbar.setAttribute("style","background-color: #24353f")
//     }
//     }
// )
// // end of special case