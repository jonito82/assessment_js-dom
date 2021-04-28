/* Escribe una función que devuelva un array de usuarios. De cada usuario guardaremos el username, el nombre y apellido, el sexo, el país, el email y un enlace a su foto de perfil.

El número de usuarios a obtener se debe indicar con un parámetro de dicha función.

Sírvete de la API: https://randomuser.me/
 */

'use strict';

 fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(json => console.log(json)) 


Aquí me he quedado después de 3 horas sin entender por qué no me funcionan las siguientes líneas.

/*  .then((data) =>
      fetch(data.results)
          .then((response) => response.json())
          .then((data) => console.log(data.results[0].gender))
  );


 */