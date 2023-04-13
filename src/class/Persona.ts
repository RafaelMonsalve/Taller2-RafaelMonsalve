export class Persona {
   tipodocumento:string;
   numerodocumento:number;
   nombres:string;
   apellidos:string;
   telefono:number;
   correo:string;
   linkedin:string;
   github:string;

   constructor(tipodocumento:string,
            numerodocumento:number,
            nombres:string,
            apellidos:string,
            telefono:number,
            correo:string,
            linkedin:string,
            github:string) {
                this.tipodocumento = tipodocumento;
                this.numerodocumento=numerodocumento;
                this.nombres = nombres;
                this.apellidos = apellidos;
                this.telefono = telefono;
                this.correo = correo;
                this.linkedin = linkedin;
                this.github = github;
            }
    persona(){
        let personaArray:any[]=[
            this.tipodocumento,
            this.numerodocumento,
            this.nombres,
            this.apellidos,
            this.telefono,
            this.correo,
            this.linkedin,
            this.github
        ];
        return(personaArray.length);
    }
        }
    

