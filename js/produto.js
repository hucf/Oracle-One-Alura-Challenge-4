document.addEventListener('DOMContentLoaded', (event) => {
  const parameters = new URLSearchParams(window.location.search);
  const data = parameters.get('input-data');

  //console.log(data);
  event.preventDefault();

  var display = document.querySelector('.container-descricao-produto');
  //display.innerHTML += ' ' + data; 

  var img = document.createElement("img");
  img.src = data;

  //display.appendChild(img);
  display.prepend(img);  //  append as 1rst child


});