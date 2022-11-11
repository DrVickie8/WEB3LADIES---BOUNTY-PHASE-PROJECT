let eye = document.querySelector('#toggle-eye');
let passwordInput = document.querySelector('#password');

console.log(passwordInput);
eye.addEventListener('click',()=> {
    if ( passwordInput.type === "password") {
        passwordInput.type = "text";
        eye.className="fa fa-eye-slash"
    } else {
        passwordInput.type = "password"
        eye.className="fa fa-eye"

    }
    console.log(passwordInput);
})


// image.png

// fa fa-eye-slash