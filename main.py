import random
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flaskcrud'


mysql = MySQL(app)


@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute('SELECT nombre,precio FROM tablero')
    data = cur.fetchall()
    cur.close()
    return render_template('index.html', tablero=data)

def saberpos():
    cur = mysql.connection.cursor()
    cur.execute('SELECT id,nombre,posicion,dineroDisponible FROM jugador')
    date = cur.fetchall()
    cur.close()
    return render_template('index.html', jugador=date)
# np=data[0,1]
# ndes=data[0,2]

def dado(posicion): 
    avance=random.randint(1, 6)
    posicion=posicion+avance
    return posicion

# def propiedad(posicion):
#     if( disponibilidad in posicion != '' ):
#         # como llamo a disponibilidad, como obtengo ese dato de la bd?
#         if( dineroDisponible >= precio):
#         #de la tabla jugador     #de la tabla Tablero
#             disponibilidad= nombre 
#             dineroDisponible= dineroDisponible-precio
#             #de Tablero     #del Jugador
#         else: 
#             print("No cuenta con el dinero disponible")
#             gameover()
#     else: print("Esta propiedad pertenece a ",nombre)
#     #                                          nombre del Jugador
#     #Puedo poner como una constante todos los datos extraídos de la bd y trabajar con eso directamente?
#     #Ejemplo: extraer el nombre del jugador y almacenar en una variable llamada nomjug...

# def gameover():
#     #Limpiar todas las varibles
#     print("Juego terminado")

# if __name__ == "__main__":
#     app.run(port=3306, debug=True)