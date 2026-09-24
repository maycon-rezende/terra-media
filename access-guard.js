// Impede o acesso direto às páginas de conteúdo antes da passagem pela intro.
if (!sessionStorage.getItem('terraMediaEntered')) {
  window.location.replace('index.html');
}
