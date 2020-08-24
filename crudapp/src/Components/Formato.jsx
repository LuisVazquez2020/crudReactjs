import React from 'react';


const Formato = () => {
/*     let a = prompt('ingrese un numero')
    let b = prompt('ingrese un numero')
   let  num1= parseInt(a);
   let num2 = parseInt(b); */
   const renderObj = (obj)=> {
        return(
            obj.nombre + " " + obj.apellido
        )
   }
   const obj = {
       nombre : 'Luis ',
       apellido: 'Vazquez'
   }
    return(
        <div>
            <h3>este es el formato</h3>
            <p>el dato  es : {renderObj(obj)}</p>
        </div>
    );
}

export default Formato;