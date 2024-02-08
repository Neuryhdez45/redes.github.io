const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Validate form
	if (name.value === '' || email.value === '' || password.value === '') {
		alert('Por favor complete todos los campos');
		return;
	}

	// Registro exitoso
	alert('Registro exitoso');

	// Reiniciar formulario
	name.value = '';
	email.value = '';
	password.value = '';
});