document.querySelector("#abrirModal").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "block"; // Mostrar el modal al hacer clic en el botón
  });
  
  document.querySelector(".cerrar").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "none"; // Ocultar el modal al hacer clic en el botón de cerrar
  });
  
