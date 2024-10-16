const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_t3gowbf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Consultar';
      alert('Consulta enviada con éxito, pronto nos comunicaremos con usted.');
      document.getElementById("form").reset();
      
    }, (err) => {
      btn.value = 'Consultar';
      alert(JSON.stringify(err));
    });
});