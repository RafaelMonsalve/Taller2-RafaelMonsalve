 // Evita que el formulario se envíe de forma automática 
const submitForm = async(event:Event) => {
    event.preventDefault();
 // Obtiene los valores de los campos del formulario 
    const { form } = event.target as HTMLFormElement;

    const  TipoDocumento = form.tipoDocumento.value;
    const  NumeroDocumento = form.numerodocumento.value;
    const  Nombres = form.Nombres.value;
    const  Apellidos= form.Apellidos.value;
    const  Telefono= form.Telefono.value;
    const  Correo= form.Correo.value;
    const  Linkedin= form.linkedin.value;
    const  Github= form.Github.vale;
// Envía los datos del formulario al API con token
    const response = await fetch('https://apiestudiantes.maosystems.dev/estudiantes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAzMjQ1NDUzMSwiY29ycmVvIjoibWxyaDI2QGhvdG1haWwuY29tIiwiaWF0IjoxNjgxODI1NjY0LCJleHAiOjE2ODI0MzA0NjR9.41E8OhSlDagldUpUqzMgN5Ykp3czXqnHQlbHxOijw3s'
    },
    body: JSON.stringify({ TipoDocumento, NumeroDocumento, Nombres, Apellidos, Telefono, Correo, Linkedin, Github })
  });
  if (response.ok) {
    // Si la respuesta del API es exitosa, muestra un mensaje de confirmación
    alert('¡Usuario registrado!');
  } else {
    // Si la respuesta del API no es exitosa, muestra un mensaje de error
    alert('No fue poible crear el registro');
  }
};
// Agrega un evento "submit" al formulario para procesarlo cuando se envíe
const form = document.getElementById('formluario');
form!.addEventListener('submit', submitForm);