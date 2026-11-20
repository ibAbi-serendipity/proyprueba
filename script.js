
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

// Validación del formulario
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const correoValor = correo.value.trim();
    const passwordValor = password.value;

    // Validar campos vacíos
    if (correoValor === "" || passwordValor.trim() === "") {
        mensaje.textContent = "Completa todos los campos.";
        mensaje.style.color = "red";
        return;
    }

    // Validar formato del correo
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correoValor)) {
        mensaje.textContent = "Ingresa un correo electrónico válido.";
        mensaje.style.color = "red";
        return;
    }

    // Validar longitud de contraseña
    if (passwordValor.length < 8) {
        mensaje.textContent = "La contraseña debe tener al menos 8 caracteres.";
        mensaje.style.color = "red";
        return;
    }

    // Mensaje de demostración
    mensaje.textContent = "Formulario enviado correctamente (demostración).";
    mensaje.style.color = "green";
});

// Limpiar mensaje cuando el usuario modifica los campos
correo.addEventListener("input", function () {
    mensaje.textContent = "";
});

password.addEventListener("input", function () {
    mensaje.textContent = "";
});
