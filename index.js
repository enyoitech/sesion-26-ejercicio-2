/**
 * aqui accedemos al document.
 * utilizamos el selector 'getElementById' el cual recibe el id del nodo o elemento 
 * del document que queremos accesar.
 * y  utilizamos el metodo addEventListener() el cual sirve para escuchar y recibe 2 argumentos 
 * 1er argumento es el nombre del evento que pondremos a escuchar
 * 2do argumento es una expresion funcion anonima o tambien puede recibir una funcion arrow
 */
document
  .getElementById("encryptacion-form")
  .addEventListener("submit", function (event) {

    /**
     * (event)  hace referencia al evento que se captura tambien es habitual usar (e)
     * event.preventDefault() se utiliza para evitar que el evento se ejecute por default
     *al cargar la pagina evitando que se envie el formulario vacio.
     */
    event.preventDefault();
    // hacemos el llamado a nuestra funcion verificar()
    verificar();

});


function verificar (){
    /**
     * guardamos en constantes los nodos que contienen los datos que ingreso el usuario 
     * (los numeros para las operaciones) y tambien guardamos el nodo donde vamos a mostrar 
     * el resultado el cual esta identificado con el id='resultado y los guardaremos en variables para poder modificarlo,
     * tambien guardamos el nodo donde mostraremos un mensaje de error en caso de que el usuario
     * envie el formulario vacio o no seleccione una opcion, nodo el cual 
     * esta identificado en nuestro html con el id='errorMsn' y lo guardamos 
     * en una variable para luego poder modificarlo
     */


      const nodoNumero1 = document.getElementById("numero1");
      const nodoNumero2 = document.getElementById("numero2");
      const nodoOpcion = document.getElementById("opcion");

      let nodoResultado = document.getElementById("resultado");
      let nodoErrorMsn = document.getElementById("errorMsn");

      /**
       * accedemos a la propiedad (.value) de cada nodo la cual guarda el valor en texto (string)
       * ingresado por el usuario y lo guaramos en constantes
       */
      const data1 = nodoNumero1.value;
      const data2 = nodoNumero2.value;

      
      const opcion = nodoOpcion.value;
      

    /**
     * validaremos que el usuario y la contraseña no lleguen vacios
     * en la expresion la expresion (===) se valida si las comparaciones son iguales
     * si se cumple la condicion sera suficiente para mostrar el mensaje de error
     */

    let mensaje;
    if (data1 === '') {
       mensaje = 'No se permiten <strong>campos vacios</strong>';

      /**
       * hacemos el llamado a nuestra funcion showMsnError() que sera la encargada 
       * de mostrar el mensaje de error
       * esta recibe como argumentos el mensaje de error que debera mostrar
       * y el nodo nodoErrorMsn donde se mostrara el mensaje que se envia
       */

      showMsnError(mensaje, nodoErrorMsn);
    } else if(opcion === 'Seleccione' ){
      mensaje = 'Debe selecciona <strong>almenos una opcion</strong>';
      /**
       * hacemos el llamado a nuestra funcion showMsnError() que sera la encargada 
       * de mostrar el mensaje de error
       * esta recibe como argumentos el mensaje de error que debera mostrar
       * y el nodo nodoErrorMsn donde se mostrara el mensaje que se envia
       */
      showMsnError(mensaje, nodoErrorMsn);
    }

    /**
     * creamos una variable para guardar la palabra o frase ya sea encryptada
     * o desencryptada (dataFinal);
     */
      let dataFinal;
      if (opcion === '1') {
        dataFinal = sumar(data1,data2)
        nodoResultado.innerHTML = `<strong>${dataFinal}</strong>`;

      } 
      else if(opcion === '2'){
        dataFinal = restar(data1,data2)
        nodoResultado.innerHTML = `<strong>${dataFinal}</strong>`;
      
      }
      else if(opcion === '3'){
        dataFinal = multiplicar(data1,data2)
        nodoResultado.innerHTML = `<strong>${dataFinal}</strong>`;
      
      }
      else if(opcion === '4'){
        dataFinal = dividir(data1,data2)
        nodoResultado.innerHTML = `<strong>${dataFinal}</strong>`;
      
      }
      // else if(nodoResultadoEncryptada.textContent !== data){
      //   /**
      //    * en la anterior condicional utilizo el nodo accediendo a su propiedad
      //    * textContent para tomar el texto  que tenga y compararlo con el texto
      //    * ingresado por el usuario y de esta manera evitar un doble proceso de 
      //    * encryptacion
      //    */
      //   dataFinal = desEncryptar(nodoResultadoEncryptada.textContent);
      //   nodoResultadoDesencryptada.innerHTML = `<strong>${dataFinal}</strong>`;;
      // }
   
}

function sumar(data1, data2){

  /**
   * utilizaremos la función .parseInt() función que recibe como argumento un string,
   * y convierte y retorna un entero, esto lo haremos para realizar las respectivas operaciones 
   * matemáticas en cada función propuesta,el resultado de este proceso lo guardamos en una constante 
   * llamada resultadoSuma dicho resultado sera también el retorno de la función para ser
   * mostrado en la vista
   */
  const resultadoSuma = parseInt(data1)+parseInt(data2);
 
  console.log('estoy sumando');
  return resultadoSuma;
}

function restar(data1, data2){
  
  /**
   * utilizaremos la función .parseInt() función que recibe como argumento un string,
   * y convierte y retorna un entero, esto lo haremos para realizar las respectivas operaciones 
   * matemáticas en cada función propuesta,el resultado de este proceso lo guardamos en una constante 
   * llamada resultadoResta dicho resultado sera también el retorno de la función para ser
   * mostrado en la vista
   */
   const resultadoResta = parseInt(data1)-parseInt(data2);
   console.log('estoy restando')
 
  
   return resultadoResta;
}
function multiplicar(data1, data2){

  /**
   * utilizaremos la función .parseInt() función que recibe como argumento un string,
   * y convierte y retorna un entero, esto lo haremos para realizar las respectivas operaciones 
   * matemáticas en cada función propuesta,el resultado de este proceso lo guardamos en una constante 
   * llamada resultadoMultiplicar dicho resultado sera también el retorno de la función para ser
   * mostrado en la vista
   */
   const resultadoMultiplicar = parseInt(data1)*parseInt(data2);
   console.log('estoy restando')
 
  
   return resultadoMultiplicar;
}

function dividir(data1, data2){

  /**
   * utilizaremos la función .parseInt() función que recibe como argumento un string,
   * y convierte y retorna un entero, esto lo haremos para realizar las respectivas operaciones 
   * matemáticas en cada función propuesta,el resultado de este proceso lo guardamos en una constante 
   * llamada resultadoDividir dicho resultado sera también el retorno de la función para ser
   * mostrado en la vista
   */
   const resultadoDividir = parseInt(data1)/parseInt(data2);
   console.log('estoy restando')
 
  
   return resultadoDividir;
}

function showMsnError (mensajeError, nodoErrorMsn){
  /**
         * en nuestro nodoErrorMsn accedemos al metodo .setAttribute()
         * el cual recibe como primer argumento el nombre de la propiead html que desamos modificar
         * para este caso vamos modificar la propiedad 'class' y como segundo argumento
         * enviamos las clases de estilo que seran asignadas a la propiedad 'class' en este caso
         * asignaremos algunas clases de estilos pertenecientes al framework de estilos boostrap
         * bg-danger --> genera un fondo rojo
         * rounded-3 --> redondea las esquinas 
         * mb-2 ---> margin-bottom agrega un margen en la parte inferior del nodoErrorMsn
         * p-2 ---> agrega un padding alrededor de todo el nodoErrorMsn 
         * 
         */
        
   nodoErrorMsn.setAttribute('class', 'bg-danger rounded-3 mb-2 p-2');
   /**
    * modificamos el nodoErrorMsn accediendo a su propiedad .innerHTML
    * la cual nos permite utilizar la sintaxis html para crear etiquetas 
    * desde javaScript en este caso crearemos una etiqueta 'strong'
    * para poner en negrita la palabra campos vacios
    */
    nodoErrorMsn.innerHTML = mensajeError;
   
   /**
    * utilizamos la instruccion de return para romper el flujo de nuestra aplicacion
    * y evitar que se continue ejecutando el codigo que pueda seguir
   */
    return;

}