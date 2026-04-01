function converter() {
  let real = parseFloat(document.getElementById("valorReal").value);

  if (isNaN(real)) {
    document.getElementById("resultado").innerText = "Digite um valor válido!";
    return;
  }

  let dolar = real / 5.30;

  document.getElementById("resultado").innerText =
    "$ " + dolar.toFixed(2);
}