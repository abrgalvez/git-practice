const form = document.getElementById('contactForm');



form.addEventListener('submit', function (event) {

event.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const coment = document.getElementById('coment').value;
const age = document.getElementById('age').value;


if (name === '' || email === '' || coment === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

if (age<18){
    alert('usted es menor de edad');
    return;
}

alert('formulario enviado correctamente');
form.reset();

});


let favoritos = [];

$(document).ready(function () {

  $('.fav').on('click', function () {

    const boton = $(this);
    const id = boton.data('id');
    const icono = boton.find('i');

    const index = favoritos.indexOf(id);

    if (index === -1) {
      favoritos.push(id);

      icono.removeClass('bi-suit-heart-fill')
            .addClass('bi-heart-fill');

      alert('Añadido a favoritos ❤️');
    }

    else {
      favoritos.splice(index, 1);

      icono.removeClass('bi-heart-fill text-danger')
            .addClass('bi-suit-heart-fill');

      alert('Eliminado de favoritos 🤍');
    }

    console.log('Favoritos:', favoritos);
  });

});