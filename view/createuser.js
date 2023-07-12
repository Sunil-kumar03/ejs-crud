let userForm = document.getElementById('userForm');

let fName = document.getElementById('name');
let fEmail = document.getElementById('email');
let fMobile = document.getElementById('mobile');
let fAge = document.getElementById('age');


// not support addEvent listener
// userForm.addEventListener('submit',function(event){
//     event.preventDefault();
//     const data = {
//         name:fName.value,
//         email:fEmail.value,
//         mobile:fMobile.value,
//         age:fAge.value
//     }
//     console.log(`user data submitted`,data)
// });

function submitHandler(event){
    event.preventDefault();
    const data = {
        name:fName.value,
        email:fEmail.value,
        mobile:fMobile.value,
        age:fAge.value
    }
    console.log(`user data submitted`,data)
}