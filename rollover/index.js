document.addEventListener("DOMContentLoaded", eventosImagenes);


function eventosImagenes(){
    document.querySelector('.prim-dir').addEventListener('mouseenter', cambiarFondo);
    document.querySelector('.prim-dir').addEventListener('mouseleave', cambiarFondo);
    document.querySelector('.secun-dir').addEventListener('click', cerrarVentana);
}


function cambiarFondo(event){
    const [prim_dir, prim_indir] = [document.querySelector('.prim-dir'),document.querySelector('.prim-indir')];
    if(event.type === 'mouseenter'){
        prim_dir.src = 'img/secun-dir.gif';
        prim_indir.src = 'img/secun-indir.gif';
    }else{
        prim_dir.src = 'img/prim-dir.gif';
        prim_indir.src = 'img/prim-indir.gif';
    }
}

function cerrarVentana(){
    document.querySelector('.wrapper').style.display = 'none';
}