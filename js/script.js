//LOGIN
function mostrarSenha(id) {

    let senha = document.getElementById(id);

    if (senha.type === "password") {

        senha.type = "text";
    }

    else {

        senha.type = "password";
    }
}

function login() {

    let email = document.getElementById("loginEmail").value;

    let senha = document.getElementById("loginSenha").value;

    /* pega todos os user */
    let usuarios = JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

    /* procura user especifico*/
    let usuarioEncontrado = usuarios.find(usuario =>

        usuario.email === email &&
        usuario.senha === senha
    );

    /* VERIFICA LOGIN */

    if(usuarioEncontrado) {

        alert("Login com sucesso!");

        window.location.href = "aba.html";
    }

    else {

        alert("Email ou senha incorreto");
    }
}




//CADASTRO

function mostrarSenha(id) {

    let senha = document.getElementById(id);

    if (senha.type === "password") {
        senha.type = "text";
    }

    else {
        senha.type = "password";
    }
}

function cadastrar() {

    let email = document.getElementById("email").value;

    let username = document.getElementById("username").value;

    let senha = document.getElementById("senha").value;

    /* verifica se ta tudo com coisa */
    if(email === "" || username === "" || senha === "") {

        alert("Preencha todos os campos");

        return;
    }

    /* pega usuario salvo */
    let usuarios = JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

    /* verifica email */
    let usuarioExistente = usuarios.find(usuario =>
        usuario.email === email
    );

    if(usuarioExistente) {
        alert("Esse email ja foi registrado");
        return;
    }

    /* cria usuario */
    let novoUsuario = {
        email: email,
        username: username,
        senha: senha
    };

    /* adiciona no arrau */
    usuarios.push(novoUsuario);

    /* salva no localstorage */
    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    alert("Usuario registrado com sucesso!");

    window.location.href = "index.html";
}



//ABA PRINCIPAL

function enviarMensagem() {

    let nome =
    document.getElementById("nomeMensagem").value;

    let email =
    document.getElementById("emailMensagem").value;

    let mensagem =
    document.getElementById("mensagem").value;

    if(
        nome === "" ||
        email === "" ||
        mensagem === ""
    ) {

        alert("Fill all fields");

        return;
    }

    let mensagens = JSON.parse(
        localStorage.getItem("mensagens")
    ) || [];

    mensagens.push({
        nome,
        email,
        mensagem
    });
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
    alert("Message sent successfully!");
    document.getElementById("nomeMensagem").value = "";
    document.getElementById("emailMensagem").value = "";
    document.getElementById("mensagem").value = "";
}

/* mapa */
let map = L.map('map').setView(
    [-22.948641722116, -46.55851142609103], 17
);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution: '© OpenStreetMap'
}
).addTo(map);

L.marker([-22.94867630105869, -46.558495332836735])
.addTo(map)
.bindPopup("IFSP - Braganca Paulista")
.openPopup();



//USUARIOS (ta no html pq nao sei arrumar)
