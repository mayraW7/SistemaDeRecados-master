document.querySelector('#cadastro').addEventListener('click', (w)=>{
    w.preventDefault();
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;

    if(email.length < 5) {
        alert("Preencha o campo com um e-mail válido.");
        return;
    }

    if(senha.length < 4) {
        alert("Preencha a senha com no mínimo 4 dígitos.");
        return;
    }


    salvar(email, senha);
});


function salvar(e, s){
    let db = JSON.parse(localStorage.getItem('usuarios') || '[]');

    let usuario = {
        id: db.length + 1,
        login: e,
        senha: s
    }
   
    db.push(usuario);
    
    localStorage.setItem('usuarios', JSON.stringify(db));
    location.href = 'index.html';    
}
