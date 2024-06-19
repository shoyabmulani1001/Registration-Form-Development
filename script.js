
document.getElementById('registrationForm').addEventListener('submit',function(event){
    event.preventDefault();

    const firstName = document.getElementById('firstName').Value;
    const lastName = document.getElementById('lastName').Value;
    const email = document.getElementById('email').Value;
    const address = document.getElementById('address').Value;
    const password = document.getElementById('password').Value;
    const conformPassword = document.getElementById('conformPassword').Value;
    const terms = document.getElementById('terms').checked;

    if (firstName && lastName &&email && address && password && conformPassword && terms) {
        if (password == conformPassword) {
            alert('Form Subimitted Sucissfully !');
        }else{
            alert('Password Do Not Match !');
        }
        
    }else{
        alert('Please Fill All Terms And Condition !')
    }
});