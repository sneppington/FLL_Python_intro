import React from 'react';
import Nav_header from '../Other/Object_box';
import '../Other/styles.css';
import download_image from '../Images/descarga_python.png'
import thonny_icon from '../Images/thonny_icon.png'
import thonnny_gui from '../Images/thonnny_gui.png'
import thonny_icons from '../Images/thonny_iconos.png'
import { log_wordcount, sendPost, user } from '../Other/Server_communications.js'
import { currentUrl } from '../Other/Global_vars.js'

const lessons = [
	['Inicio'],
	['Instalando']
];

const lessons_max_inx = lessons.length - 1

//Inner Functions //

function arraysAreEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}

function check_exercise(div, answers) {
	const inputs = div.querySelectorAll('input');
	const answerArray = Array.from(inputs).map(input => input.value);

	div.getElementsByClassName('check')[0].style.visibility = 'hidden';;
	div.getElementsByClassName('give_answers')[0].style.visibility = 'hidden';
	div.getElementsByClassName('Exercise')[0].style.display = 'none';
	div.getElementsByClassName('Result')[0].style.display = 'block';

	if (arraysAreEqual(answerArray, answers)) {
		div.getElementsByClassName('Result')[0].getElementsByTagName('h2')[0].textContent = 'Correcto';
		sendPost({'user': user, 'operation': 'exercise', 'reason': 'correct'});
		
	} else {
		div.getElementsByClassName('Result')[0].getElementsByTagName('h2')[0].textContent = 'Incorrecto';
		sendPost({'user': user, 'operation': 'exercise', 'reason': 'incorrect'});
	}
}

function give_answers(div, answers) {
	const inputs = div.querySelectorAll('input');
	
	sendPost({'user': user, 'operation': 'exercise', 'reason': 'solution'});
	
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = answers[i]
	}
}

function retry(div) {
	div.getElementsByClassName('check')[0].style.visibility = 'visible';
	div.getElementsByClassName('give_answers')[0].style.visibility = 'visible';
	div.getElementsByClassName('Exercise')[0].style.display = 'block';
	div.getElementsByClassName('Result')[0].style.display = 'none';
}

// Pages //

function Diccionarios() {
	const next = "Ejercicios_9";
	const previous = "Ejercicios_8";

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Diccionarios en Python</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
				
				<div style={{ marginLeft: '10px' }}>
					<h2>¿Qué es un diccionario?</h2>
					<p>Un diccionario es un tipo de array que te permite relacionar un nombre con una variable.</p>
		
					<h3>Creando un diccionario</h3>
					<p>Para crear un diccionario, usas llaves <code>{}</code> y separas las claves de los valores con dos puntos <code>:</code>.</p>
					<p>Aquí tienes un ejemplo:</p>
					<pre>
						<code>
{`# Creando un diccionario
estudiantes = {
    "Ana": 90,
    "Juan": 85,
    "Maria": 95
}`}
						</code>
					</pre>
					<br/>
					<h2>Accediendo a los valores</h2>
					<p>Para acceder a los valores en un diccionario, usas las claves correspondientes. Aquí tienes un ejemplo:</p>
					<pre>
						<code>
{`# Accediendo a los valores
calificacion_ana = estudiantes["Ana"]
print("La calificación de Ana es:", calificacion_ana)  # Output: La calificación de Ana es: 90`}
						</code>
					</pre>
					<p>Si intentas acceder a una clave que no existe, obtendrás un error. Para evitar esto, puedes usar el método <code>get()</code>, que devuelve <code>None</code> (o un valor por defecto que especifiques) si la clave no se encuentra:</p>
					<pre>
						<code>
{`# Usando el método get()
calificacion_pedro = estudiantes.get("Pedro", "No encontrado")
print("La calificación de Pedro es:", calificacion_pedro)  # Output: La calificación de Pedro es: No encontrado`}
						</code>
					</pre>
					<br/>
					<h2>Añadiendo y modificando elementos</h2>
					<p>Para añadir un nuevo par clave-valor o modificar un valor existente, usas la sintaxis de corchetes <code>[]</code>:</p>
					<pre>
						<code>
{`# Añadiendo y modificando elementos
estudiantes["Pedro"] = 88  # Añadiendo un nuevo estudiante
print(estudiantes)  # {"Ana": 90, "Juan": 85, "Maria": 95, "Pedro": 88}

estudiantes["Ana"] = 92  # Modificando la calificación de Ana
print(estudiantes)  # {"Ana": 92, "Juan": 85, "Maria": 95, "Pedro": 88}`}
						</code>
					</pre>
					<br/>
					<h2>Eliminando elementos</h2>
					<p>Para eliminar un par clave-valor, puedes usar el operador <code>del</code> o el método <code>pop()</code>:</p>
					<pre>
						<code>
{`# Eliminando elementos
del estudiantes["Juan"]
print(estudiantes)  # {"Ana": 92, "Maria": 95, "Pedro": 88}

calificacion_maria = estudiantes.pop("Maria")
print(calificacion_maria)  # 95
print(estudiantes)  # {"Ana": 92, "Pedro": 88}`}
						</code>
					</pre>
					<br/>
					<h2>Iterando sobre un diccionario</h2>
					<p>Puedes usar un bucle <code>for</code> para iterar sobre las claves, los valores o los pares clave-valor de un diccionario:</p>
					<pre>
						<code>
{`# Iterando sobre un diccionario
for nombre in estudiantes:
    print(nombre)

for nombre, calificacion en estudiantes.items():
    print(nombre, "tiene una calificación de", calificacion)`}
						</code>
					</pre>
					<p>La primera iteración recorre solo las claves, mientras que la segunda iteración usa el método <code>items()</code> para recorrer los pares clave-valor.</p>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Ejercicios_9() {
	const next = "Las_Funciones";
	const previous = "Diccionarios";

	const answer1 = ["{", "}"]
	const answer2 = ['"color"', "del"]
	const answer3 = [".items()"]

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Demuestra lo que sabes</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
				<br/>
				<div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

					<div id='Exercise1' style={{backgroundColor: '#282829', padding: '10px 10px 10px 10px', height: '300px', width: '89%', position: 'relative' }}>
						<div className='Exercise'>
							<h3>Termina este diccionario</h3>
							<p><input className='answer_field'/></p>
							<p style={{paddingLeft: '20px'}}>{`"raza": "pastor aleman",`}</p>
							<p><input className='answer_field'/></p>
						</div>

						<div className='Result' style={{display: 'none'}}>
							<h2>Result</h2>
							<button onClick={() => retry(document.getElementById('Exercise1'))} className="h3_button">Intentar de nuevo</button>
						</div>
						<div style={{ bottom: '5%', right: '2%', position: 'absolute'}}>
							<button style={{ marginRight: '10px' }} onClick={() => give_answers(document.getElementById('Exercise1'), answer1)} className='give_answers'>Respuestas</button>
							<button onClick={() => check_exercise(document.getElementById('Exercise1'), answer1)} className='check'>Verificar</button>
						</div>
					</div>
					<br/>
					
					<div id='Exercise2' style={{backgroundColor: '#282829', padding: '10px 10px 10px 10px', height: '300px', width: '89%', position: 'relative' }}>
						<div className='Exercise'>
							<h3>Accede a el indice color y despues edestruye el indice raza</h3>
							<p><input className='answer_field'/> numero_de_matricula == coche_vendido <input className='answer_field'/></p>
							<p style={{paddingLeft: '20px'}}>print(coche_vendido, "ha sido vendido")</p>
						</div>

						<div className='Result' style={{display: 'none'}}>
							<h2>Result</h2>
							<button onClick={() => retry(document.getElementById('Exercise2'))} className="h3_button">Intentar de nuevo</button>
						</div>
						<div style={{ bottom: '5%', right: '2%', position: 'absolute'}}>
							<button style={{ marginRight: '10px' }} onClick={() => give_answers(document.getElementById('Exercise2'), answer2)} className='give_answers'>Respuestas</button>
							<button onClick={() => check_exercise(document.getElementById('Exercise2'), answer2)} className='check'>Verificar</button>
						</div>
					</div>
					<br/>
					
					<div id='Exercise3' style={{backgroundColor: '#282829', padding: '10px 10px 10px 10px', height: '300px', width: '89%', position: 'relative' }}>
						<div className='Exercise'>
							<h3>Termine el for</h3>
							<p>for indice in diccionario<input className='answer_field'/>:</p>
							<p style={{paddingLeft: '20px'}}>print(indice)</p>
						</div>

						<div className='Result' style={{display: 'none'}}>
							<h2>Result</h2>
							<button onClick={() => retry(document.getElementById('Exercise3'))} className="h3_button">Intentar de nuevo</button>
						</div>
						<div style={{ bottom: '5%', right: '2%', position: 'absolute'}}>
							<button style={{ marginRight: '10px' }} onClick={() => give_answers(document.getElementById('Exercise3'), answer3)} className='give_answers'>Respuestas</button>
							<button onClick={() => check_exercise(document.getElementById('Exercise3'), answer3)} className='check'>Verificar</button>
						</div>
					</div>
					<br/>
					<br/><br/>


				</div>
				<div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto'}}>
				<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
				<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Las_Funciones() {
	const next = "Ejercicios_10";
	const previous = "Ejercicios_9";

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Funciones en Python</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>

				<div style={{ marginLeft: '10px' }}>
					<p>En programación, una función es un bloque de código reutilizable que realiza una tarea específica. Las funciones son fundamentales para escribir código organizado y modular, facilitando la comprensión, el mantenimiento y la reutilización de tu código.</p>
					<br/>
					<h2>¿Qué es una función?</h2>
					<p>Una función es una sección de un programa que realiza una tarea específica y puede ser invocada en cualquier momento, tantas veces como sea necesario. Las funciones pueden recibir datos de entrada (argumentos) y pueden devolver un valor como resultado.</p>
					<br/>
					<h2>¿Para qué son útiles las funciones?</h2>
					<p>Las funciones son útiles por varias razones:</p>
					<ul>
						<li><strong>Reutilización del código:</strong> Una vez que escribes una función, puedes usarla en cualquier parte de tu programa sin tener que reescribir el mismo código.</li>
						<li><strong>Modularidad:</strong> Las funciones ayudan a dividir un programa grande en partes más pequeñas y manejables, facilitando la comprensión y el mantenimiento del código.</li>
						<li><strong>Abstracción:</strong> Las funciones permiten ocultar los detalles de implementación, mostrando solo la interfaz necesaria para su uso.</li>
					</ul>
					
					<h2>¿Cómo se declara una función en Python?</h2>
					<p>Para declarar una función en Python, utilizas la palabra clave <code>def</code>, seguida del nombre de la función, paréntesis <code>()</code> y dos puntos <code>:</code></p>
					<p>El cuerpo de la función se indenta debajo de esta línea. Aquí tienes un ejemplo básico:</p>
					<pre>
						<code>
{`# Declaración de una función
def saludar():
    print("¡Hola, mundo!")

# Llamando a la función
saludar()`}
						</code>
					</pre>
					<p>La salida será:</p>
					<pre>
						<code>
{`¡Hola, mundo!`}
						</code>
					</pre>
					<br/>
					<h2>Funciones con argumentos</h2>
					<p>Las funciones pueden aceptar datos de entrada, conocidos como argumentos, que les permiten realizar tareas más dinámicas. Aquí tienes un ejemplo de una función que toma un argumento:</p>
					<pre>
						<code>
{`# Función con un argumento
def saludar(nombre):
    print("¡Hola,", nombre, "!")

# Llamando a la función con un argumento
saludar("Ana")`}
						</code>
					</pre>
					<p>La salida será:</p>
					<pre>
						<code>
{`¡Hola, Ana!`}
						</code>
					</pre>
					<br/>
					<h3>Funciones con mas de un argumento</h3>
					<p>Cuando se quiera que la funcion reciba mas de un argumento habra que escribir esos argumentos extra en el constructor de la funcion separados por comas.</p>
					<p>Alternativamente puedes pasar cualquier tipo de array que te sea conveniente.</p>
					<p>Ejemplo de ambos adelante:</p>
					<pre>
						<code>
{`def sumar(num1, num2, num3):
	return num1 + num2 + num3

sumar(1, 2, 3) # 6

def sumatorio(numeros):
	sumatorio = 0
	
	for numero in numeros:
		sumatorio += numero
	
	return sumatorio

sumatorio([1, 2, 3]) # 6`}
						</code>
					</pre>
					<br/>
					<h2>Funciones que devuelven un valor</h2>
					<p>Las funciones pueden devolver un valor utilizando la palabra clave <code>return</code>. Aquí tienes un ejemplo:</p>
					<pre>
						<code>
{`# Función que devuelve un valor
def sumar(a, b):
    return a + b

# Llamando a la función y almacenando el resultado
resultado = sumar(3, 5)
print("El resultado es:", resultado)`}
						</code>
					</pre>
					<p>La salida será:</p>
					<pre>
						<code>
{`El resultado es: 8`}
						</code>
					</pre>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Ejercicios_10() {
	const next = "Ejercicios_10";
	const previous = "Las_Funciones";

	const answer1 = ["def", "()"]
	const answer2 = ["coche", '"Ferrari"']

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Demuestra lo que sabes</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
				<br/>
				<div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

					<div id='Exercise1' style={{backgroundColor: '#282829', padding: '10px 10px 10px 10px', height: '300px', width: '89%', position: 'relative' }}>
						<div className='Exercise'>
							<h3>Declara esta funcion</h3>
							<p><input className='answer_field'/> select_tree<input className='answer_field'/>:</p>
							<p style={{paddingLeft: '20px'}}>print("Arbol seleccionado")</p>
						</div>

						<div className='Result' style={{display: 'none'}}>
							<h2>Result</h2>
							<button onClick={() => retry(document.getElementById('Exercise1'))} className="h3_button">Intentar de nuevo</button>
						</div>
						<div style={{ bottom: '5%', right: '2%', position: 'absolute'}}>
							<button style={{ marginRight: '10px' }} onClick={() => give_answers(document.getElementById('Exercise1'), answer1)} className='give_answers'>Respuestas</button>
							<button onClick={() => check_exercise(document.getElementById('Exercise1'), answer1)} className='check'>Verificar</button>
						</div>
					</div>
					<br/>
					
					<div id='Exercise2' style={{backgroundColor: '#282829', padding: '10px 10px 10px 10px', height: '300px', width: '89%', position: 'relative' }}>
						<div className='Exercise'>
							<h3>Añade el argumento coche a la funcion, despues llamala pasandole el argumento coche como "Ferrari"</h3>
							<p>def matricula(<input className='answer_field'/>)</p>
							<p style={{paddingLeft: '20px'}}>return matriculas[coche]</p>
							<p></p>
							<p>matriculaFerrari = matricula(<input className='answer_field'/>)</p>
						</div>

						<div className='Result' style={{display: 'none'}}>
							<h2>Result</h2>
							<button onClick={() => retry(document.getElementById('Exercise2'))} className="h3_button">Intentar de nuevo</button>
						</div>
						<div style={{ bottom: '5%', right: '2%', position: 'absolute'}}>
							<button style={{ marginRight: '10px' }} onClick={() => give_answers(document.getElementById('Exercise2'), answer2)} className='give_answers'>Respuestas</button>
							<button onClick={() => check_exercise(document.getElementById('Exercise2'), answer2)} className='check'>Verificar</button>
						</div>
					</div>
					<br/>
					<br/><br/>
				</div>
				<div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto'}}>
				<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
				<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

export { Diccionarios, Ejercicios_9, Las_Funciones, Ejercicios_10 };
