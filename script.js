const sliderValue = document.querySelector('.pass-lenght input');
const sliderText = document.querySelector('.pass-lenght span')
const generateBtn = document.querySelector('.generate')
const options = document.querySelectorAll('.option input')

const output = document.querySelector('.input input')

const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()-+={}[];:|<>,./?'
}
sliderValue.addEventListener('input', updateSlider)
generateBtn.addEventListener('click', Generate)

function updateSlider(){
    //update text value with slide input
    sliderText.innerHTML = sliderValue.value
}
updateSlider()

function Generate(){
    let emptyPassword = '';
    let randomPassword = '';
    let passwordLenght = sliderValue.value

    //loooping through the checkboxes
    options.forEach(option =>{
        //if checked, then...
        if(option.checked){
            //adding option with particular 'id' from characters emptyPassword
            emptyPassword += characters[option.id]
        }
    })

    //loop 'passwordLenght' times stores random variables(Math function) which are depending on emptyPassword lenght in 'randomPassword'
    for (let i = 0; i < passwordLenght ; i++) {
        randomPassword += emptyPassword[Math.floor(Math.random() * emptyPassword.length)];       
    }

    console.log(randomPassword)
    output.value = randomPassword;
}


