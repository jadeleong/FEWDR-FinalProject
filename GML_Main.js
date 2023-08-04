
const inputName = document.querySelector('#inputName')


function clearMsg(event) {
    event.preventDefault()

    inputName.value = "Nothing"

    console.log('Working!')
}

const formContact = document.querySelector('#GMLContact')
const btnClear = document.querySelector('#clearMsg')

formContact.addEventListener('submit', clearMsg)