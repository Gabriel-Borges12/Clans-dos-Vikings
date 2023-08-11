function criar() {

    var info = [
        document.getElementById('nome').value,
        $('#classe').val,
        $('#servidor').val,
        $('#cidade').val,
        document.getElementById('email').value,
        document.getElementById('senha').value
    ]

    console.log(info);
    let sess = [document.getElementById('nome-aws'), document.getElementById('classe-aws'), document.getElementById('serv-aws')]
    sess[0].innerHTML = `${info[0]}`;
}