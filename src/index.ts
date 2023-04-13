import {Persona} from "./class/Persona";
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

function PersonaNew() {
    const tipodocumento = document.getElementById("tipodocumento") as HTMLInputElement;
    const numerodocumento=document.getElementById("numerodocumento")as HTMLInputElement;
    const nombres = document.getElementById("Nombres")as HTMLInputElement;
    const apellidos = document.getElementById("Apellidos")as HTMLInputElement;
    const telefono = document.getElementById("Telefono")as HTMLInputElement;
    const correo = document.getElementById("correo")as HTMLInputElement;
    const linkedin =document.getElementById("linkedin")as HTMLInputElement;
    const github = document.getElementById("github")as HTMLInputElement;
    
    let NewPersona = new Persona (
        tipodocumento.value,
        numerodocumento.valueAsNumber,
        nombres.value,
        apellidos.value,
        telefono.valueAsNumber,
        correo.value,
        linkedin.value, 
        github.value);NewPersona.persona();
    
}