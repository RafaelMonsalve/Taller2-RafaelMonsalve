interface FormData {
  tipoIdentificacion: number;
  numeroIdentificacion: number;
  nombres:string;
  apellidos:string;
  celular:number;
  correo:string;
  linkedin:string;
  github: string;
}

interface ApiResponse {
  success: boolean;
  data: FormData[];
}

const fetchFormData = async () => {
  const response = await fetch('https://apiestudiantes.maosystems.dev/estudiantes', {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAzMjQ1NDUzMSwiY29ycmVvIjoibWxyaDI2QGhvdG1haWwuY29tIiwiaWF0IjoxNjgxODI1NjY0LCJleHAiOjE2ODI0MzA0NjR9.41E8OhSlDagldUpUqzMgN5Ykp3czXqnHQlbHxOijw3s'
    }
  });

  if (!response.ok) {
    throw new Error('Ha ocurrido un error al obtener los datos.');
  }

  const data: ApiResponse = await response.json();

  if (!data.success) {
    throw new Error('El API ha respondido con un error.');
  }

  return data.data;
};

const renderFormData = (data: FormData[]) => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Crea la cabecera de la tabla
  const headerRow = document.createElement('tr');
  const TipoDocumentoHeader = document.createElement('th');
  const NumeroDocumentoHeader = document.createElement('th');
  const NombresHeader = document.createElement('th');
  const ApellidosHeader = document.createElement('th');
  const TelefonoHeader = document.createElement('th');
  const CorreoHeader = document.createElement('th');
  const LinkedinHeader = document.createElement('th');
  const GithubHeader = document.createElement('th');
  TipoDocumentoHeader.textContent = 'tipoIdentificacion';
  NumeroDocumentoHeader.textContent = 'numeroIdentificacion';
  NombresHeader.textContent = 'nombres';
  ApellidosHeader.textContent = 'apellidos';
  TelefonoHeader.textContent = 'celular';
  CorreoHeader.textContent = 'correo';
  LinkedinHeader.textContent = 'linkedin';
  GithubHeader.textContent = 'github';
  headerRow.appendChild(TipoDocumentoHeader);
  headerRow.appendChild(NumeroDocumentoHeader);
  headerRow.appendChild(NombresHeader);
  headerRow.appendChild(ApellidosHeader);
  headerRow.appendChild(TelefonoHeader);
  headerRow.appendChild(CorreoHeader);
  headerRow.appendChild(LinkedinHeader);
  headerRow.appendChild(GithubHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Crea las filas de la tabla con los datos del formulario
  data.forEach(formData => {
    const row = document.createElement('tr');
    const TipoDocumentoCell = document.createElement('td');
    const NumeroDocumentoCell = document.createElement('td');
    const nombresCell = document.createElement('td');
    const apellidosCell = document.createElement('td');
    const celularCell = document.createElement('td');
    const correoCell = document.createElement('td');
    const linkedinCell = document.createElement('td');
    const githubCell = document.createElement('td');
    TipoDocumentoCell.textContent = formData.tipoIdentificacion.toString();
    NumeroDocumentoCell.textContent = formData.numeroIdentificacion.toString();
    nombresCell.textContent = formData.nombres;
    apellidosCell.textContent = formData.apellidos;
    celularCell.textContent = formData.celular.toString();
    correoCell.textContent = formData.correo;
    linkedinCell.textContent = formData.linkedin;
    githubCell.textContent = formData.github;
    row.appendChild(TipoDocumentoCell);
    row.appendChild(NumeroDocumentoCell);
    row.appendChild(nombresCell);
    row.appendChild(apellidosCell);
    row.appendChild(celularCell);
    row.appendChild(correoCell);
    row.appendChild(linkedinCell);
    row.appendChild(githubCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Agrega la tabla al documento HTML
  const container = document.getElementById('Tabla');
  container!.appendChild(table);
};

const showFormData = async () => {
  try {
    const formData = await fetchFormData();
    renderFormData(formData);
  } catch (error) {
    console.error(error);
  }
};

showFormData();
