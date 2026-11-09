const formulario = document.getElementById("loginForm");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const mensaje = document.getElementById("mensaje");
const togglePassword = document.getElementById("togglePassword");

// Mostrar u ocultar contraseña
togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Ocultar";
    } else {
        password.type = "password";
        togglePassword.textContent = "Mostrar";
    }
});

// Validación inicial del formulario
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (correo.value.trim() === "" || password.value.trim() === "") {
        mensaje.textContent = "Completa todos los campos.";
        mensaje.style.color = "red";
        return;
    }

    mensaje.textContent = "Formulario enviado correctamente (demostración).";
    mensaje.style.color = "green";
});