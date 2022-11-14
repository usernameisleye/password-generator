const sliderValue = document.querySelector('.pass-lenght input');
const sliderText = document.querySelector('.pass-lenght span');
const generateBtn = document.querySelector('.generate');
const options = document.querySelectorAll('.option input');
const passStrenght = document.querySelector('.pass-strenght');
const copyBtn = document.querySelector('.input span');

const output = document.querySelector('.input input')

const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()-+={}[];:|<>,./?'
}
sliderValue.addEventListener('input', updateSlider)
generateBtn.addEventListener('click', Generate)
copyBtn.addEventListener('click', copyOutput)

function updateSlider(){
    //update text value with slide input
    sliderText.innerHTML = sliderValue.value
    updatePassStrenght()
}
updateSlider()

function Generate(){
    let emptyPassword = '';
    let randomPassword = ''; 
    let passwordLenght = sliderValue.value
    let removeDuplicate = false;
    
    //loooping through the checkboxes
    options.forEach(option =>{
        if(option.checked){
            //if checkbox isn't duplicate and spaces
            if(option.id != 'duplicate' && option.id != 'spaces'){
                //adding option with particular 'id' from characters emptyPassword
                emptyPassword += characters[option.id]
            }
            //if checked is spaces
            else if(option.id === 'spaces'){
                emptyPassword += ` ${emptyPassword} `
            }
            else{
                removeDuplicate = true;
            }
        } 
    })

    //loop 'passwordLenght' times stores random variables(Math function) which are depending on emptyPassword lenght in 'randomPassword'
    for (let i = 0; i < passwordLenght ; i++) {
        //random variable for empty password
        randomVar = ''
        randomVar += emptyPassword[Math.floor(Math.random() * emptyPassword.length)];       

        //if removeDuplicate is true
        if(removeDuplicate){
            //if randomPassword doesn't contain the current random variable or variable is equal to ''then append variable to password else decresae e by 1
            if(!randomPassword.includes(randomVar) || randomVar === ''){ 
                randomPassword += randomVar;
            }
            else{
                i--;
            }
        }
        else{
            randomPassword += randomVar;
        }
    }
     
    output.value = randomPassword;
}

function updatePassStrenght(){
    if(sliderValue.value <= 8){
        passStrenght.id = 'weak';
    }
    else if(sliderValue.value <= 16){
        passStrenght.id = 'medium';
    }
    else{
        passStrenght.id = 'strong';
    }
}


function copyOutput(){
    //JS function for copying text(our password)
    navigator.clipboard.writeText(output.value);

    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    copyBtn.style.color = '#55A630'
    setTimeout(e =>{
        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>'
        copyBtn.style.color = '#000'
    }, 2000)
}

alert("Here is the Password Generator, hope you like it and don't forget to drop a star (Tutor:@CodingNepal)")