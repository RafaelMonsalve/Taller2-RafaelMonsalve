export class Persona {

    constructor(
      public tipoDocumento: string,
      public numeroDocumento: number,
      public nombres: string,
      public apellidos: string,
      public telefono: number,
      public correo: string,
      public linkedin: string,
      public github: string
    ) {}
  
    persona() {
      console.log(
        `Tipo de documento: ${this.tipoDocumento}\n
        Número de documento: ${this.numeroDocumento}\n
        Nombres: ${this.nombres}\n
        Apellidos: ${this.apellidos}\n
        Teléfono: ${this.telefono}\n
        Correo: ${this.correo}\n
        LinkedIn: ${this.linkedin}\n
        Github: ${this.github}`);
    }
  }
