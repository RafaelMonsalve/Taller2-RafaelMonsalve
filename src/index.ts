//Importa la clase persona
import {Persona} from "./class/Persona.js";
//Se crea una interfas para poder editar cada dato más adelante
interface persona{
   tipodocumento:string;
   numerodocumento:number;
   nombres:string;
   apellidos:string;
   telefono:number;
   correo:string;
   linkedin:string;
   github:string;
}
//Se crea una constantepara recibir la información del formulario
const enviar=document.getElementById("form") as HTMLButtonElement;
//Se crea un evento con el button y el typo submit e iniciar la validación de los datos recibidos
enviar.addEventListener("submit",(event)=>{
//Recepción de datos 
    const tipodocumento = (document.getElementById("tipoDocumento") as HTMLInputElement).value;
    const numerodocumento= (document.getElementById("numerodocumento")as HTMLInputElement).valueAsNumber;
    const nombres = (document.getElementById("Nombres")as HTMLInputElement).value;
    const apellidos = (document.getElementById("Apellidos")as HTMLInputElement).value;
    const telefono = (document.getElementById("Telefono")as HTMLInputElement).valueAsNumber;
    const correo = (document.getElementById("correo")as HTMLInputElement).value;
    const linkedin = (document.getElementById("linkedin")as HTMLInputElement).value;
    const github = (document.getElementById("github")as HTMLInputElement).value;
//Validación de datos
    if(!tipodocumento ||
        !numerodocumento ||
        !nombres ||
        !apellidos ||
        !telefono ||
        !correo ||
        !linkedin ||
        !github){
        alert("Debe ingresar todos los datos");
        return;
        }
        //detona el envío de la información a la clase
        else{    
    let NewPersona = new Persona (
        tipodocumento,
        numerodocumento,
        nombres,
        apellidos,
        telefono,
        correo,
        linkedin, 
        github);NewPersona.persona();
    }
});
