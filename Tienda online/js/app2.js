document.addEventListener('DOMContentLoaded', function (){

    const formu = {
        email: '',
        asunto: '',
        mensaje: '' 
    }
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSend = document.querySelector('#botonEnviar');
    const btnReset = document.querySelector('#botonResetear');
    const spiner = document.querySelector('#spiner')
    
    inputEmail.addEventListener('input', validar)
    inputAsunto.addEventListener('input', validar)
    inputMensaje.addEventListener('input', validar)
    btnSend.addEventListener ('click', enviarEmail);
  
    btnReset.addEventListener('click', function(e){  

    
    formu.email = '';
    formu.asunto ='';
    formu.mensaje = '';

    formulario.reset();
     comprobarForm();
   

    })

    function enviarEmail(e){
        
     e.preventDefault();
     spiner.classList.remove('d-none');

     setTimeout(()=>{spiner.classList.add('d-none');
     
     formu.email = '';
     formu.asunto ='';
     formu.mensaje = '';

     console.log(formulario)
 
     formulario.reset();
      comprobarForm();
    }, 3000)

    }

    function validar(e){
        
     if(e.target.value.trim() === ''){
        mostrarAlerta(e, e.target.parentElement,'Obligatorio');
        formu[e.target.id] = '';
        comprobarForm();
        return;
     } 
     

     if(e.target.id === 'email' && !validarEmail(e.target.value,e.target.parentElement)){
        mostrarAlerta(e, e.target.parentElement, 'Correo no valido');   
        formu[e.target.id] = '';
        comprobarForm();
        return;
     }
    
     limpiarAlerta(e.target.parentElement);

     // asignar valores

     formu[e.target.id] = e.target.value.trim().toLowerCase();
     
     comprobarForm();
    }

    function mostrarAlerta(e, ref, mensaje){

        const alerta = ref.querySelector('.text-danger');
      

        if(alerta){
            alerta.remove();
        }

         e.target.classList.add('is-invalid')
         const error = document.createElement('P')
         error.textContent = `${mensaje}`
         error.classList.add('text-danger', 'position-relative')

         ref.appendChild(error);

    }
    function limpiarAlerta(ref){
        
        const alerta = ref.querySelector('.text-danger');
        

        if(alerta){
            
            console.log(alerta.remove())
            alerta.remove();
            ref.lastElementChild.classList.remove('is-invalid');
        } }

    function validarEmail(email, e){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    const resultado= regex.test(email);
    return resultado;}

   function comprobarForm(){
    if(Object.values(formu).includes('')){
        btnSend.disabled = true;

    }else {
        btnSend.disabled = false;
    }
   }

})