
const inputName = document.querySelector('#inputName')
const inputEmail = document.querySelector('#inputEmail')
const inputMsg = document.querySelector('#inputMsg')


function clearMsg(event) {
    event.preventDefault()

    inputName.value = ""
    inputEmail.value = ""
    inputMsg.value = ""
    
}

const formContact = document.querySelector('#GMLContact')
const btnClear = document.querySelector('#clearMsg')

btnClear.addEventListener('click', clearMsg)