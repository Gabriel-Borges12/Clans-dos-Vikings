function criar() {

    var info = [
        document.getElementById('nome').value,
        document.getElementById('email').value,
        document.getElementById('senha').value
    ]

    console.log(info);

    document.getElementById("nome-aws").textContent = `<span>${info}</span>`;
}

