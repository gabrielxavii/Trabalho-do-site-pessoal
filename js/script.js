const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document
        .getElementById("nome")
        .value
        .trim();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const mensagem = document
        .getElementById("mensagem")
        .value
        .trim();

    // Verificar campos vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos.");
        return;
    }

    // Validar formato do e-mail
    const regexEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    // Simulação de envio
    formulario.reset();

    alert("Mensagem enviada com sucesso!");

});