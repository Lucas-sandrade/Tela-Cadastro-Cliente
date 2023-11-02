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
}