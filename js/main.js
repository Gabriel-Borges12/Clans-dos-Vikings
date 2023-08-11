function criar() {
    var classe = document.getElementById('classe').value;
    var server = document.getElementById('servidor').value;
    var cidade = document.getElementById('cidade').value;


    var info = [
        document.getElementById('nome'),
        classe,
        server,
        cidade,
        document.getElementById('email'),
        document.getElementById('senha')
    ]

    console.log(info);
    let sess = [document.getElementById('nome-aws'), document.getElementById('classe-aws'), document.getElementById('serv-aws')]

    for (i = 0; i < 2; i++) {
        sess[i].innerHTML = `${info[i]}`;
    }
}