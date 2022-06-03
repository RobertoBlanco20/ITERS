
const slider_img = document.querySelector('.slider-img');
const p = document.querySelector('.paragraph')
const images = [
    { text: 'Gallardo debutó en la prenovena de River Plate a los doce años, en 1988, y tres años después en la reserva. El 18 de abril de 1993 debutó en la Primera División en un partido contra Newell s Old Boys que finalizó en una victoria por 2-0. El 11 de diciembre de 1994, Gallardo le anotó su primer gol a Boca Juniors, mediante un penal al minuto 25 del segundo tiempo. El encuentro acabó 3:0 a favor de River. Allí permanecería durante 6 años, la cual fue su primera etapa en el club. Gallardo tuvo otras dos etapas en el club «Millonario» las cuales fueron en 2003-06 y 2009-10 respectivamente. En River se consagró campeón en múltiples ocasiones, sumando en total ocho títulos. Estos fueron los Torneos Apertura de 1993, 1994 (campeón invicto), 1996 y 1997, los Torneo Clausura de 1997 y 2004, la Copa Libertadores de 1996 y la Supercopa Sudamericana de 1997. Se convirtió en uno de los jugadores más queridos por la hinchada riverplatense, destacando por ser figura en varios de los títulos que supo conseguir. Además de ser capitán y referente en varios de los planteles que integró.', img: 'images/gallardo-1.jpg' },

    { text: 'En 1999, tras consagrarse campeón de diversos torneos con River, Gallardo fichó por el A. S. Mónaco de Francia, donde rápidamente se convirtió en una de las figuras del equipo. En su estancia en el conjunto francés, el futbolista ganó el título de liga, la Supercopa de Francia y la Copa de la Liga. En agosto de 2003, ya enterado de que el entrenador Didier Deschamps no lo tendría en cuenta, Gallardo regresó a River Plate.9​ En su segunda etapa en el club argentino, Gallardo ganó el Torneo Clausura de 2004, donde en el partido definitorio contra Atlético Rafaela anotó un gol.', img: 'images/gallardo-2.jpg' },
    { text: 'En 2006 comenzó a perder titularidad en el equipo, debido a la preferencia del entrenador Daniel Passarella por el centrocampista Fernando Belluschi. En diciembre de ese año, después de que clubes como Olympique de Marsella y París Saint-Germain mostraran interés en él, Gallardo decidió fichar por este último.11​ Su debut en el conjunto francés ocurrió el 7 de enero de 2007, en la goleada por 3:0 frente al Nîmes. Gallardo mostró un buen rendimiento a lo largo del encuentro, válido por los treintaidosavos de final de la Copa de Francia.', img: 'images/gallardo-3.jpg' },
    { text: 'En enero de 2008 fue transferido al D. C. United de la Major League Soccer.14​ Marcó su primer gol en el club estadounidense el 5 de abril, en la victoria por 4:1 al Toronto F. C.', img: 'images/gallardo-4.jpg' },
    { text: 'Tras su paso sin notoriedad por el fútbol estadounidense, en enero de 2009 se confirmó su retorno a River Plate, a pesar de que el club Estudiantes de La Plata estaba interesado en él. Gallardo se convirtió en la primera incorporación al plantel conducido por Néstor Gorosito.16​ El 8 de marzo, ingresó en el segundo tiempo de la victoria por 3:1 a Arsenal y anotó dos goles.17​ El 15 de mayo de 2010 jugó su último partido en River, en la derrota por 5:1 frente a Tigre que Gallardo vio desde el banco de suplentes.', img: 'images/gallardo-5.jpg' },
    { text: 'El 10 de junio de 2011 anunció su retiro concluido el campeonato uruguayo por motivos personales. Su último partido fue el 12 de junio contra Defensor Sporting en el Estadio Centenario. Gallardo ingresó al campo de juego al minuto 66 en lugar de Richard Porta y Nacional ganó 1-0, consagrándose así campeón.', img: 'images/gallardo-6.jpg'},
    { text: 'Pocos días después de su retiro, Nacional anunció que el exfutbolista asumiría como nuevo director técnico del equipo, con Pablo Rodríguez como asistente y Marcelo Tulbovitz como preparador físico. En su primer semestre obtuvo el torneo apertura que clasificó al equipo a la definición del campeonato a disputarse a mitad del año 2012. El 16 de junio del mismo año se consagra campeón Uruguayo 2011-2012 con el Club Nacional de Football, siendo bicampeón con el club uruguayo, como jugador y técnico. ', img: 'images/gallardo-7.jpg' },
    { text: 'Como director técnico de River Plate obtuvo siete títulos nacionales: un Campeonato de Primera División, tres Copas Argentina, dos Supercopas Argentina y un Trofeo de Campeones. En el plano internacional obtuvo siete títulos: dos Copas Libertadores, una Copa Sudamericana, tres Recopas Sudamericanas y una Suruga Bank. Con un total de catorce títulos se convirtió en el entrenador más exitoso del club «Millonario», superando a Ramón Díaz como anterior poseedor del récord con 9 conquistas.3​ Además, es el único entrenador en ganar la Copa Libertadores en dos ocasiones y también el único en ganar la Copa Libertadores como jugador y como director técnico. Sumando sus conquistas como jugador y director técnico en River Plate, Marcelo Gallardo y Ángel Labruna comparten el récord de ser los más ganadores de la historia del club con 22 títulos.', img: 'images/gallardo-8.jpg' }
]

let i = 0;


function prev(){
    if( i <= 0 ) i = images.length;
    i--;
    return setImg()
}

function next(){
    if( i >= images.length - 1 ) i = -1;
    i++
    return setImg()
}

function setImg(){
    setText();
    return slider_img.setAttribute('src', images[i].img );
}

function setText(){
    return p.innerHTML = images[i].text;
}

alert('Bienvenido, este es mi primer proyecto/TP de ITERS. Gracias por visitarlo.')