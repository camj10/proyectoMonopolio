Proyecto Juego Monopolio:
Es un proyecto que está hecho con tecnologías como Javascript,HTML,CSS, Python y MySQL.
La base de datos MySQL almacena los datos del tablero como el nombre, precio y la disponibilidad. Estos son extraídos por medio de una conexión hecha con Python
y renderizados al archivo HTML. En Javascript está hecha la mayor parte de la funcionalidad, los movimientos, mensajes y los ajustes a los colores
de acuerdo a los movimientos realizados en el tablero. La conexión al archivo Javascript es realizada al final del body por medio de la etiqueta script,
lo que nos permite trabajar con un archivo separado y no in line.
El estilo está configurado en una una hora de estilos CSS separada, conectada al HTML por medio de un llamado.

En qué consiste la dinámica del juego?
Está diseñado para un jugador, el cual tiene una cierta cantidad de dinero al empezar, al presionar el botón jugar, se habilita el juego que consiste en en lanzar el dado,
obtener un número aleatorio e ir desplazándome por el tablero a través de las casillas. En cada casilla, nuestro jugador obtiene una propiedad 
y el dinero va descontándose.
El fin del juego ocurre cuando el jugador ya no posea el dinero necesario para la compra o cuando haya comprado todas las propiedades disponibles. 
