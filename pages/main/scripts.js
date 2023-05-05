const signOut = document.querySelector('.signout-icon');
const btnAdd = document.querySelector('.add-button');
const modalAdd = document.querySelector('#modalAdd');
const modalDelete = document.querySelector('#modalDelete');
const addUser = document.querySelector('.add');
const closeBtnDel = document.querySelector('#btnClose-del');
const closeBtnAdd = document.querySelector('#btnClose-add');
const clientData = document.querySelectorAll('.panel-line > img');
const inputAdd = document.querySelectorAll('.input-add');
const btnClear = document.querySelector('.btn-clear-data')
const btnDelete = document.querySelector('.delete');
const btnCancel = document.querySelector('.cancel');


signOut.onclick = function () {
    window.location = '../sign-in/index.html';
}

btnAdd.onclick = function () {
    modalAdd.showModal()
    modalAdd.classList.add('modal-add');
}

addUser.onclick = function () {
    for (const dado of inputAdd) {
        if (dado.value.length > 0) {
            modalAdd.classList.remove('modal-add');
            modalAdd.close()
        }
    }
    for (let data = 0; data < inputAdd.length; data++) {
        inputAdd[data].value = "";
    }

}

btnClear.onclick = function () {
    for (let data = 0; data < inputAdd.length; data++) {
        inputAdd[data].value = "";
    }
}

closeBtnDel.onclick = function () {

    modalDelete.classList.remove('modal-delete');
    modalDelete.close()
}

closeBtnAdd.onclick = function () {
    modalAdd.classList.remove('modal-add');
    modalAdd.close()
}

clientData[0].onclick = function () {
    modalDelete.showModal()
    modalDelete.classList.add('modal-delete');
}
clientData[1].onclick = function () {
    modalDelete.showModal()
    modalDelete.classList.add('modal-delete');
}
clientData[2].onclick = function () {
    modalDelete.showModal()
    modalDelete.classList.add('modal-delete');
}
clientData[3].onclick = function () {
    modalDelete.showModal()
    modalDelete.classList.add('modal-delete');
}
clientData[4].onclick = function () {
    modalDelete.showModal()
    modalDelete.classList.add('modal-delete');
}
clientData[5].onclick = function () {
    modalDelete.showModal()
    modalDelete.classList.add('modal-delete');
}

btnCancel.onclick = function () {
    modalDelete.classList.remove('modal-delete');
    modalDelete.close()
}

btnDelete.onclick = function () {
    modalDelete.classList.remove('modal-delete');
    modalDelete.close()
}