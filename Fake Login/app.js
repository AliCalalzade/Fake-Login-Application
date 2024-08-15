const CreateEmailInput = document.getElementById('CreateEmail')
const CreatePasswordInput = document.getElementById('CreatePassword')
const SignUpButton = document.getElementById('SignUpButton')
const CreateNamesInput = document.getElementById('CreateNames')
const EnterEmail = document.getElementById('EnterEmail')
const EnterPassword = document.getElementById('EnterPassword')
const LoginButton = document.getElementById('LoginButton')

let Names = []
let Emails = []
let Passwords = []


if (SignUpButton != null) {
    SignUpButton.addEventListener('click', (e) => {
        const Value = CreateEmailInput.value
        const Value2 = CreatePasswordInput.value
        const Value3 = CreateNamesInput.value

        if (Value.includes('@gmail.com') && Value2.length >= 8 && Value3.length >= 1) {
            addStorage(Value, Value2, Value3)
            e.preventDefault()
            window.location.href = 'file:///Users/ali/Desktop/Login/Homepage.html'
        } else {
            if (!Value.includes('@gmail.com')) {
                e.preventDefault()
                document.getElementById('problem').textContent = 'Gmail problem  ...@gmail.com'
            } else if (!Value3.length >= 1) {
                e.preventDefault()
                document.getElementById('problem').textContent = 'Enter Name , pleace'
            }
            else {
                e.preventDefault()
                document.getElementById('problem').textContent = 'Password minimum - 8 simvol'
            }
        }
    })
}

function addStorage(Value, Value2, Value3) {
    reloadpage()
    Names.push(Value3)
    Emails.push(Value)
    Passwords.push(Value2)
    localStorage.setItem('Emails', Emails)
    localStorage.setItem('Passwords', Passwords)
    localStorage.setItem('Names', Names)
}

function reloadpage() {
    if (localStorage.getItem('Names') == '' || localStorage.getItem('Names') == null) {
        localStorage.setItem('Emails', Emails)
        localStorage.setItem('Passwords', Passwords)
        localStorage.setItem('Names', Names)
    }

    Names = localStorage.getItem('Names').split(",")
    Emails = localStorage.getItem('Emails').split(",")
    Passwords = localStorage.getItem('Passwords').split(",")
}

if (LoginButton != null) {
    LoginButton.addEventListener('click', (e) => {
        reloadpage()
        e.preventDefault()
        for (let i = 0; i <= Emails.length; i++) {
            if (EnterEmail.value == Emails[i] && EnterEmail.value !== '') {
                if (EnterPassword.value == Passwords[i] && EnterEmail.value !== '') {
                    window.location.href = 'file:///Users/ali/Desktop/Login/Homepage.html'
                    break;
                }
            }
        }

        if (window.location.href != 'file:///Users/ali/Desktop/Login/Homepage.html') {
            document.querySelector('#ErrorMessage').textContent = `False  -`
            document.querySelector('#Err').style.display = 'inline'
        }
    })
}