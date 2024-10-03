const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_7vkytu7';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Cotizar';
      alert('Enviado con éxito, pronto nos comunicaremos con usted.');
    }, (err) => {
      btn.value = 'Cotizar';
      alert(JSON.stringify(err));
    });
});