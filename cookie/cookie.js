document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector('.borrar').addEventListener('click', borrarCookie);
    document.querySelector('.recargar').addEventListener('click', ()=>{
        location.reload();
    });
    gestionarCookies();
});


function gestionarCookies(){
    let visitas = parseInt(leerCookie());
    const bienvenida =  document.querySelector('.bienvenida');
    const contador =  document.querySelector('.contador');
    
    if(!visitas){
        visitas = 1;
        bienvenida.innerHTML = "Bienvenido a la página de las cookies";
    }else{
        visitas++;
        bienvenida.innerHTML = '';
        contador.innerHTML = `Esta es su visita nº ${visitas}`;
    }
    document.cookie = `contador=${visitas}; expires=Fri, 31 Dec 9999 23:59:59 GMT";`;
}


function leerCookie(){
    const cookie = decodeURI(document.cookie);
    const pos = cookie.indexOf("=");
    const contenidoCookie = cookie.substring(pos + 1);
    return contenidoCookie;
}


function borrarCookie(){
    document.cookie = `contador=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    location.reload();
}
