const form = document.querySelector("form");
  const boasVindas = document.getElementById("boas-vindas");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos!");
    } else {
      boasVindas.textContent = `Olá, ${nome}! Obrigado por entrar em contato.`;
      form.reset();
    }
  });