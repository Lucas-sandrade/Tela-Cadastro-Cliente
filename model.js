//CRUD - BACKEND

const formRegister = {
    client: [
        {
            id: Date.now(),
            name: '',
            middleName: '',
            DateBirth: '',
            city: '',
            address: '',
        }
    ],

    // READ - BACKEND
    readClients() {
        formRegister.client.forEach(({ name, DateBirth, city, address }) => {
            formRegister.insetClient({ name: name, DateBirth: DateBirth, city: city, address: address }, true);
        });
    },

    // CREATE - BACKEND
    insetClient(dados, htmlOnly = false) {
        const idInside = Date.now();
        if (!htmlOnly) {
            formRegister.client.push({
                id: dados.id || idInside,
                name: dados.name,
                middleName: dados.middleName,
                DateBirth: dados.DateBirth,
                city: dados.city,
                address: dados.address,
            });
        }

        const $list = document.querySelector('.listClient');
        $list.insertAdjacentHTML('afterbegin',
            `<li date-id="${idInside}">
                <button class="btn-delete">Excluir</button>
                <span contenteditable>
                ${dados.name} ${dados.DateBirth} ${dados.city} ${dados.address}
                </span>
            </li>`
        );
    },

    //DELETE - BACKEND
    deletePost(id) {
        const listaDePostsAtualizada = formRegister.client.filter((postAtual) => {
            return postAtual.id !== Number(id);
        })
        console.log(listaDePostsAtualizada);
        formRegister.client = listaDePostsAtualizada;
    },

    //UPDATE - BACKEND
    updateClients(id, newContent) {
        const clientUpdate = formRegister.client.find((client) => {
            return client.id === Number(id);
        });
        console.log(clientUpdate)
        clientUpdate.content = newContent
    }

};

document.addEventListener("DOMContentLoaded", function () {

    //codigo de front end
    const $myForm = document.querySelectorAll('form');
    console.log($myForm);

    //CRUD: READ - FORNTEND
    formRegister.readClients();

    //CRUD: CREATE - FORNTEND
    $myForm.forEach(form => {
        form.addEventListener('submit', function controllerForm(infosEvent) {
            infosEvent.preventDefault();
            console.log('Estamos criando um cadastro')

            const $inputName = document.querySelector('input[name="name"]');
            const $inputDateBirth = document.querySelector('input[name="DateBirth"]');
            const $inputCity = document.querySelector('input[name="city"]');
            const $inputAddress = document.querySelector('input[name="address"]');

            // Cadastrando cliente se a função validar esteja retornando true
            if (validar()) {
                formRegister.insetClient({
                    name: $inputName.value,
                    DateBirth: $inputDateBirth.value,
                    city: $inputCity.value,
                    address: $inputAddress.value
                });

                // Limpando os campos após a inserção bem-sucedida
                $inputName.value = '';
                $inputDateBirth.value = '';
                $inputCity.value = '';
                $inputAddress.value = '';
            }
        });
    });


    //CRUD: DELETE - FORNTEND
    document.querySelector('.listClient').addEventListener('click', function (infosEvent) {
        console.log('Houve um clique');
        const elementCurrent = infosEvent.target;
        const isBtnDeleteClick = infosEvent.target.classList.contains('btn-delete');
        if (isBtnDeleteClick) {
            console.log('Clicou no botão de apagar');
            const id = elementCurrent.parentNode.getAttribute('date-id');

            // Manipula o lado do ServerSide/Banco De Dados/Arquivo/Fonte!
            formRegister.deletePost(id);

            // Remove o elemento pai do botão de exclusão
            elementCurrent.parentNode.remove();

            console.log(formRegister.client);
        }
    });

    // CRUD: [UPDATE] - - FORNTEND
    document.querySelector('.listClient').addEventListener('input', function (infosEvent) {
        console.log('Houve uma digitação');
        const elementCurrent = infosEvent.target;
        const id = elementCurrent.parentNode.getAttribute('data-id');

        formRegister.updateClients(id, elementCurrent.innerText)
    });
});


