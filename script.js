document.addEventListener("DOMContentLoaded", function() {
    // Mostrar registro de login
    document.getElementById("register-link").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("register-section").style.display = "block";
        document.getElementById("login-section").style.display = "none";
    });

    document.getElementById("back-button").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("register-section").style.display = "none";
        document.getElementById("login-section").style.display = "block";
    });

    document.getElementById("register-form").addEventListener("submit", function(event) {
        event.preventDefault();
        // parte do envio do formulário de cadastro
        
        window.location.href = "index.html"; 
    });

    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        // envio do formulário de login
        
        window.location.href = "index.html"; 
    });

    document.getElementById("forgot-password").addEventListener("click", function(event) {
        event.preventDefault();
        var email = prompt("Por favor, insira seu endereço de e-mail para redefinir a senha:");
        if (email) {
            fetch('/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            // opção de definir a nova senha 
            .then(response => {
                if (response.ok) {
                    window.location.href = "definir-nova-senha.html";
                } else {
                    alert("Ocorreu um erro ao enviar o e-mail de redefinição de senha. Tente novamente mais tarde.");
                }
            })
            .catch(error => {
                console.error('Erro ao enviar requisição:', error);
                alert("Ocorreu um erro ao enviar a solicitação. Tente novamente mais tarde.");
            });
        }
    });
});
