document.addEventListener("DOMContentLoaded", obtenerLinks);

function obtenerLinks(){
    
    document.querySelector('.abrir-popup').addEventListener("click", popup);
    document.querySelector('.cerrar').addEventListener("click", popup);
    document.querySelector('.cambiar-color').addEventListener("click", cambiarColor);
    
}



function popup(){
    const popup =  document.querySelector('.popup');
    popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'flex' : 'none';
}


function cambiarColor(){
    const [red, green, blue] = [parseFloat(document.querySelector('.red').value), parseFloat(document.querySelector('.green').value), parseFloat(document.querySelector('.blue').value)];
    if(fueraDeRango(red) || fueraDeRango(green) || fueraDeRango(blue)){
        alert('El rango de valores admitido para los colores son números entre 0 y 255');
        return;
    }
    const hexadecimal = rgbToHex(red,green,blue);
    const atributo = document.querySelector('.atributo');
    cambiarAtributo(atributo.value, hexadecimal);
}


function fueraDeRango(valor){
    if(parseFloat(valor) < 0 || parseFloat(valor) > 255 || isNaN(valor)) return true;
    return false;
}

function rgbToHex(red,green,blue){
    return `#${integerToHex(parseInt(red))}${integerToHex(green)}${integerToHex(blue)}`;
}



function integerToHex(color) {
    const hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? `0${hexadecimal}` : hexadecimal;
  }
  

  function cambiarAtributo(atributo, color){
      if(atributo == 'bg-color'){ 
            document.body.style.backgroundColor = `${color}`;
            return;
      }
      if(atributo == 'font-color'){
        document.body.style.color = `${color}`;
        return;
      }
      if(atributo == 'link-color'){
          const links = [...document.links];
          links.forEach(link => {
              link.style.color = `${color}`;
          })
          return;
        }
        if(atributo == 'active-color'){
           document.documentElement.style.setProperty('--activo', `${color}`);
            
        }
        if(atributo == 'visited-color'){
            //const visitados = document.querySelectorAll('.visitado');
            //visitados.forEach(enlace =>{
              //  enlace.style.color = `${color}`;
            //})
            document.documentElement.style.setProperty('--visitado', `${color}`);
        }
      
  }
  