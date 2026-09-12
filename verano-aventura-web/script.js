const formulario = document.querySelector("form");
const inputCorreo = document.querySelector("#correo");
const inputContrasena = document.querySelector("#contrasena");

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  const correo = inputCorreo.value;
  const contrasena = inputContrasena.value;

  const datosLogin = {
    email: correo,
    password: contrasena,
  };

  const datosJson = JSON.stringify(datosLogin);
  const respuesta = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: datosJson,
  });

  console.log("Estado:", respuesta.status);
});
