const urlParams = new URLSearchParams(window.location.search);
const searchTerm = urlParams.get('q');
const searchType = urlParams.get('type');

document.getElementById('search-header').innerText = `Resultados de "${searchTerm}"`
document.getElementById('search-input').value = searchTerm;
