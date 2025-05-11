const emailEl = document.querySelector('#email')
const passwordEl = document.querySelector('#password')
const buttonEl = document.querySelector('button')


buttonEl.addEventListener('click', function() {
    const passwordElValue = passwordEl.value
    const emailElValue = emailEl.value
        console.log(emailElValue)
        console.log(passwordElValue)
    if(passwordElValue.length>6){
        console.log("password okay")
    }
    else{
        console.log("weak password")
    }
})