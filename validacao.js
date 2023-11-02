function validar() {
        
            // Validação do campo Nome
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    const nameRegex = /^[A-z ]{4,100}/;

    if (!nameRegex.test(nameValue)) {
        nameInput.classList.add('invalid-input');

    return false;
    } else {
        nameInput.classList.remove('invalid-input');
    }


    // Validação do campo Sobrenome
    const middleNameInput = document.getElementById('middleName')
    const middleNameValue = middleNameInput.value;
    const middleNameRegex =  /^[A-z ]{4,100}/;

    if (!middleNameRegex.test(middleNameValue)) {
        middleNameInput.classList.add('invalid-input');

        return false;
    } else {
        middleNameInput.classList.remove('invalid-input');
    }

    // Validação do campo Cidade
    const cityInput = document.getElementById('city');
    const cityValue = cityInput.value;
    const cityRegex = /^[A-Za-zÀ-ú\s\-]+$/;

    if (!cityRegex.test(cityValue)) {
        cityInput.classList.add('invalid-input');
        return false;
    } else {
        cityInput.classList.remove('invalid-input');
    }

    // Validação do campo CEP
    const cepInput = document.getElementById('cep')
    const cepValue = cepInput.value;
    const cepRegex = /^\d{5}-\d{3}$/;

    if (!cepRegex.test(cepValue)) {
        cepInput.classList.add('invalid-input');
        return false;
    } else {
        cepInput.classList.remove('invalid-input');
    }

    // Validação do campo Endereço
    const addressInput = document.getElementById('address');
    const addressValue = addressInput.value;
    const addressRegex = /^[A-Za-zÀ-ú0-9\s\-.,()'"&]+$/;

    if (!addressRegex.test(addressValue)) {
        addressInput.classList.add('invalid-input');
        return false;
    } else {
        addressInput.classList.remove('invalid-input');
    }

    // Validação do campo Número
    const numberInput = document.getElementById('number');
    const numberValue = numberInput.value;
    const numberRegex = /^\d+$/;

    if (!numberRegex.test(numberValue)) {
        numberInput.classList.add('invalid-input');
        return false;
    } else {
        numberInput.classList.remove('invalid-input');
    }

        return true;
    }


    