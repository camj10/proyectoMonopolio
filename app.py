import random
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'monopolysimpl'


mysql = MySQL(app)

@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute('SELECT nombre,precio,disponibilidad FROM tablero')
    data = cur.fetchall()
    cur.close()
    return render_template('index.html', tablero=data)

if __name__ == "__main__":
    app.run(debug=True)
