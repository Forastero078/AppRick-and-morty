const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexNum = /[0-9]{1}|[a-z0-9]{11}/

function validate(input) {
   let errors = {};

   if (input.username.length < 1) {
      errors.username = 'Se requiere un usuario'
   }
   else if (input.username.length > 35) {
      errors.username = 'Debe tener menos de 35 caracteres'
   }
   else if (!regexEmail.test(input.username)) {
      errors.username = 'Debe ser un E-mail'
   }
   else if (!regexNum.test(input.password)) {
      errors.password = 'Debe tener al menos un número'
   }
   else if (input.password.length >= 6 && input.password.length <= 10) {
      errors.password = '';
   }
   else if (input.password.length < 6 || input.password.length > 10) {
      errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
   }

   return errors;
}

module.exports = { validate };