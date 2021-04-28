/*Crea una malla de cuadrados de tal forma que el color de cada uno de ellos se determine de forma aleatoria y vaya cambiando cada segundo.

Añade también un botón que permita añadir un nuevo cuadrado a la maya con las mismas propiedades que los anteriores.
*/

'use strict';

import { randomNumber } from './helpers.js';

const tds = document.querySelectorAll('td');

function changeBackground() {
    for (const td of tds) {
        const color = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
        td.style.backgroundColor = color;
    }
}

setInterval(changeBackground, 1000);
