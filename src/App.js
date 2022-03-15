// el primer paso para definir un componen es el nombre
//El nombre de un componente siempre debe iniciar en mayuscula
//ahora el componen basicamente es una funcion, por ende podemos crearlo
// usando function o arrow function

const PrimerComponente=()=>{
  //esta funcion retorna una vista
  //en react usamos return() para indicar que lo que esta dentro del parantesis sera el objeto que vamos a retornar
  //algo importante es que react solo retorna un componente a la vez
  // es decir solo retorna un div
  return(
    <div>
      <h1>Hola mundo</h1>
      <div>
        <h4>Hola</h4>
      </div>
    </div>
  );
};

// luego de crear el componente debemos exportalo
//Este archivo unicamente esta exportando este componente
export default PrimerComponente;