let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cantidad = document.getElementById("cantidad");
let total_pagar = document.getElementById("total_pagar");
let select = document.getElementById("select");
let borrar = document.getElementById("borrar");
let resumen = document.getElementById("resumen");

function calcular_precio(){
    if(select.value == "Estudiante"){
       total_pagar.value = 200 - ( 200 * 0.8); 
    }else if(select.value == "Trainee"){
       total_pagar.value = 200 - (200 * 0.5);
    }else if(select.value == "Junior"){
       total_pagar.value = 200 - (200 * 0.15);
    }else if(select.value == "Ninguna"){
       total_pagar.value = 200;
    }
};

function limpiar_canpos(){
   nombre.value = "";
   apellido.value = "";
   correo.value = "";
   cantidad.value = "";
   total_pagar.value = "";
   select.value = "Ninguna";  
};

select.addEventListener('change', () => {
   calcular_precio();
})

borrar.addEventListener('click', () => {
   limpiar_canpos();
});

resumen.addEventListener('click', () => {
   limpiar_canpos();
   alert('Compra reaalizada con exito');
})  