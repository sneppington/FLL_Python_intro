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

function Los_condicionales() {
	const next = "Uso_del_if";
	const previous = "Ejercicios_5";

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>El uso de los condicionales</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>

				<div style={{ marginLeft: '10px' }}>
					<p>Hasta ahora has aprendido a como programar de una forma bastante lineal, haz esto, haz lo otro, y luego haz esto otro.</p>
					<p>En esta lección aprenderás a hacer programas que ejecutarán un código u otro, o pararán de ejecutar un código dependiendo de una condición.</p>
					<br/>
					<h2>¿Qué son los condicionales?</h2>
					<p>Como ya ha sido antes dicho, los condicionales te permiten ejecutar un código si cierta condición es <code>True</code>.</p>
					<p>Además de esto, los condicionales también pueden ejecutar una porción de código hasta que otra condición sea <code>True</code>,</p>
					<p>o también ejecutar una porción de código por cuantos miembros haya en una lista.</p>
					<br/>
					
					<h3>El condicional <code>if</code></h3>
					<p>El condicional <code>if</code> se utiliza para ejecutar un bloque de código solo si una condición específica se evalúa como <code>True</code>.</p>
					<pre>
						<code>
{`# Ejemplo de uso del condicional if
edad = 18
if edad >= 18:
    print("Eres mayor de edad")  # Este mensaje se imprimirá porque la condición es True`}
						</code>
					</pre>
					<p>En este ejemplo, el mensaje "Eres mayor de edad" solo se imprimirá si la variable <code>edad</code> es mayor o igual a 18.</p>
					<br/>
					<h3>El bucle <code>while</code></h3>
					<p>El bucle <code>while</code> se utiliza para ejecutar un bloque de código repetidamente, siempre que una condición sea <code>True</code>. El bucle continuará ejecutándose hasta que la condición se evalúe como <code>False</code>.</p>
					<pre>
						<code>
{`# Ejemplo de uso del bucle while
contador = 0
while contador < 5:
    print("Contador:", contador)  # Este mensaje se imprimirá mientras contador sea menor que 5
    contador += 1  # Incrementa el valor de contador en 1 cada vez que se ejecuta el bucle`}
						</code>
					</pre>
					<p>En este ejemplo, el mensaje "Contador: [valor]" se imprimirá cinco veces, desde 0 hasta 4, ya que el bucle se ejecuta mientras la variable <code>contador</code> sea menor que 5.</p>

					<p>A continuacion entraremos en el uso del if mas a fondo.</p>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Uso_del_if() {
	const next = "Uso_del_while";
	const previous = "Los_condicionales";

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>El uso del <code>if</code></h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>

				<div style={{ marginLeft: '10px' }}>
					<p>En esta lección, aprenderás sobre la importancia de la indentación en Python y cómo usar los condicionales <code>elif</code> y <code>else</code> para manejar múltiples condiciones.</p>
					<br/>
					<h2>¿Que es y para que es usada la indentacion en python?</h2>
					<p>Antes de todo, con indentacion nos referimos a cuantos espacios hay entre una linea de codigo y el principio de la linea que lo habita.</p>
					<p>Hay dos formas de indentacion, la hecha con la tecla de espacio, y la hecha con la tecla tab, es preferible usar el tab.</p>
					<p>Cuando creamos un if, no hay ningun caracter especial que determine cuando se termina el bloque de codigo que tiene que ejecutar,</p>
					<p>pero si hay un caracter que indica que parte del codigo pertenece a ese if.</p>
					<p>Ese caracter, como ya ha sido dicho es el indentado y se coloca uno delante de cada una de las lineas de un if.</p>
					<p>Si ese if esta dentro de otro, se colocarian dos, etc.</p>
					<br/>
					<p>La indentacion tambien es usada en los bucles if y for, y tambien a la hora de crear una funcion</p>

					<pre>
						<code>
{`# Ejemplo de indentación
if True:
    print("Esta línea está correctamente indentada")
# print("Esta línea no está indentada y causará un error si está dentro de un bloque")`}
						</code>
					</pre>
					<p>En este ejemplo, la línea dentro del condicional <code>if</code> está correctamente indentada, lo que permite que el código se ejecute sin problemas.</p>
					<br/>
					<h3>El condicional <code>elif</code></h3>
					<p>El condicional <code>elif</code> (abreviatura de "else if") se utiliza para comprobar múltiples condiciones. Si la primera condición es <code>False</code>, se evaluará la condición del <code>elif</code>. Puedes tener tantos <code>elif</code> como necesites.</p>
					<pre>
						<code>
{`# Ejemplo de uso del condicional elif
edad = 20
if edad < 18:
    print("Eres menor de edad")
elif edad < 65:
    print("Eres adulto")
else:
    print("Eres senior")`}
						</code>
					</pre>
					<p>En este ejemplo, si <code>edad</code> es menor de 18, se imprimirá "Eres menor de edad". Si no, pero <code>edad</code> es menor de 65, se imprimirá "Eres adulto". Si ninguna de las anteriores condiciones es <code>True</code>, se imprimirá "Eres senior".</p>
					<br/>
					<h3>El condicional <code>else</code></h3>
					<p>El condicional <code>else</code> se utiliza para ejecutar un bloque de código si todas las condiciones anteriores son <code>False</code>. Siempre debe ir al final de una serie de condicionales <code>if</code> y <code>elif</code>.</p>
					<pre>
						<code>
{`# Ejemplo de uso del condicional else
puntaje = 85
if puntaje >= 90:
    print("Excelente")
elif puntaje >= 70:
    print("Bueno")
else:
    print("Necesitas mejorar")`}
						</code>
					</pre>
					<p>En este ejemplo, si <code>puntaje</code> es 90 o más, se imprimirá "Excelente". Si no, pero <code>puntaje</code> es 70 o más, se imprimirá "Bueno". Si ninguna de las condiciones anteriores es <code>True</code>, se imprimirá "Necesitas mejorar".</p>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Uso_del_while() {
	const next = "Ejercicios_6";
	const previous = "Uso_del_if";

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>El uso del bucle <code>while</code></h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>

				<div style={{ marginLeft: '10px' }}>
					<p>Hasta ahora has aprendido cómo utilizar el condicional <code>if</code>, <code>elif</code>, y <code>else</code> para tomar decisiones en tu código.</p>
					<p>En esta lección, aprenderás sobre el bucle <code>while</code>, que te permitirá ejecutar un bloque de código repetidamente mientras se cumpla una condición.</p>
					<br/>
					<h2>¿Qué es el bucle <code>while</code>?</h2>
					<p>El bucle <code>while</code> se utiliza para repetir un bloque de código siempre que una condición especificada sea <code>True</code>. El bucle continuará ejecutándose hasta que la condición se evalúe como <code>False</code>.</p>
					<br/>
					<h3>Estructura básica del bucle <code>while</code></h3>
					<pre>
						<code>
{`# Estructura básica del bucle while
while condición:
    # Bloque de código a repetir
    # Este bloque se ejecutará mientras la condición sea True`}
						</code>
					</pre>
					<br/>
					<h3>Ejemplo de uso del bucle <code>while</code></h3>
					<p>Veamos un ejemplo donde utilizamos el bucle <code>while</code> para imprimir los números del 1 al 5.</p>
					<pre>
						<code>
{`# Ejemplo de bucle while
contador = 1
while contador <= 5:
    print("Contador:", contador)
    contador += 1  # Incrementamos el contador en 1 cada vez que se ejecuta el bucle`}
						</code>
					</pre>
					<p>En este ejemplo, la variable <code>contador</code> comienza en 1. El bucle <code>while</code> continuará ejecutándose mientras <code>contador</code> sea menor o igual a 5. Cada vez que se ejecuta el bucle, se imprime el valor de <code>contador</code> y luego se incrementa en 1.</p>
					<br/>
					<h3>Evitar bucles infinitos</h3>
					<p>Es importante asegurarse de que la condición del bucle <code>while</code> eventualmente se evalúe como <code>False</code>. Si no, el bucle seguirá ejecutándose indefinidamente, lo que se conoce como un bucle infinito.</p>
					<pre>
						<code>
{`# Ejemplo de bucle infinito (¡No ejecutar!)
while True:
    print("Esto se imprimirá indefinidamente")`}
						</code>
					</pre>
					<p>En este ejemplo, el bucle <code>while</code> tiene una condición que siempre es <code>True</code>, lo que provoca un bucle infinito. Para evitar esto, asegúrate de que la condición del bucle pueda cambiar a <code>False</code> en algún punto.</p>
					<br/>
					<h3>Uso del bucle <code>while</code> con sentencias <code>break</code> y <code>continue</code></h3>
					<p>El bucle <code>while</code> se puede controlar aún más utilizando las sentencias <code>break</code> y <code>continue</code>:</p>
					<ul>
						<li><code>break</code>: Termina el bucle inmediatamente.</li>
						<li><code>continue</code>: Salta el resto del código dentro del bucle y vuelve a evaluar la condición.</li>
					</ul>
					<pre>
						<code>
{`# Ejemplo de uso de break y continue
contador = 0
while contador < 10:
    contador += 1
    if contador == 5:
        continue  # Salta la iteración cuando contador es 5
    if contador == 8:
        break  # Termina el bucle cuando contador es 8
    print("Contador:", contador)`}
						</code>
					</pre>
					<p>En este ejemplo, cuando <code>contador</code> es igual a 5, la sentencia <code>continue</code> hace que el bucle salte esa iteración y vuelva a evaluar la condición. Cuando <code>contador</code> es igual a 8, la sentencia <code>break</code> termina el bucle.</p>

					<p>El bucle <code>while</code> es una herramienta poderosa para repetir tareas en tu código. Asegúrate de manejar las condiciones y el control del bucle correctamente para evitar errores y bucles infinitos.</p>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Ejercicios_6() {
	const next = "El_array";
	const previous = "Uso_del_while";

	const answer1 = ["=="]
	const answer2 = ["if", ":"]
	const answer3 = ["True"]
	const answer4 = ["<=", "+="]

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
							<h3>Haz que el if se complete si var1 es igual a var2.</h3>
							<p>if var1 <input className='answer_field'/> var2:</p>
							<p style={{paddingLeft: '20px'}}>print("Las variables son iguales, di no a la discriminacion de variables por lo que se le hayan asignado al ser creadas!!!")</p>
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
							<h3>Completa este if</h3>
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
							<h3>Crea un loop infinito</h3>
							<p>while <input className='answer_field'/>:</p>
							<p style={{paddingLeft: '20px'}}>print("No usare chatgpt de nuevo profesor, un parte no porfavor!!!")</p>
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
					
					<div id='Exercise4' style={{backgroundColor: '#282829', padding: '10px 10px 10px 10px', height: '300px', width: '89%', position: 'relative' }}>
						<div className='Exercise'>
							<h3>Usando un operador de asignacion suma + 1 a contador, ademas haz que el loop pare cuando este sea mayor de 5.</h3>
							<p>while contador <input className='answer_field'/> 5:</p>
							<p style={{paddingLeft: '20px'}}>contador <input className='answer_field'/> 1</p>
						</div>

						<div className='Result' style={{display: 'none'}}>
							<h2>Result</h2>
							<button onClick={() => retry(document.getElementById('Exercise4'))} className="h3_button">Intentar de nuevo</button>
						</div>
						<div style={{ bottom: '5%', right: '2%', position: 'absolute'}}>
							<button style={{ marginRight: '10px' }} onClick={() => give_answers(document.getElementById('Exercise4'), answer4)} className='give_answers'>Respuestas</button>
							<button onClick={() => check_exercise(document.getElementById('Exercise4'), answer4)} className='check'>Verificar</button>
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

function El_array() {
	const next = "Funciones_utiles_listas";
	const previous = "Ejercicios_6";

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Los arrays y las listas</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>

				<div style={{ marginLeft: '10px' }}>
					<p>En Python los arrays son una categoria de unos cuantos tipos de datos.</p>
					<p>Estos estan especializados en guardar muchos mas datos de los que nunca le podrias asignar a una variable sola.</p>
					<p>De una manera mas simple, un array es un tipo de contenedor en el que puedes meter cualquier variable, y despues este contenedor se lo puedes asignar a una variable.</p>
					<p>Por ejemplo, yo podria crear un array que contuviese todos los colores del arcoiris, estos claramente contenidos en forma de cadena de texto,</p>
					<p>pero aun asi los tendrias a todos contenidos en una misma variable, en vez de tener que crear una nueva para cada color.</p>
					<p>Los arrays son bastante utiles cuando el numero de variables cambia demasiado durante el codigo y todas deben de ser procesadas por las mismas lineas de codigo.</p>
					<br/>
					<h2>Los tipos de array</h2>
					<h3>Listas</h3>
					<p>Son modificables</p>
					<p>Pueden contener cualquier tipo de dato</p>
					<p>Son declaradas usando corchetes []</p>
					<code>lista = [1, 2, 3, "a", "b"]</code>
					<br/>
					<h3>Tuples</h3>
					<p>No son modificables</p>
					<p>Pueden contener cualquier tipo de dato</p>
					<p>Son declaradas usando parentesis ()</p>
					<code>ListaNoModificable = (1, 2, 3, "a", "b")</code>
					<br/>
					<h3>Diccionario</h3>
					<p>Son modificables</p>
					<p>Pueden contener cualquier tipo de dato</p>
					<p>Son declaradas usando {}</p>
					<code>{'diccionario = {"huevos": 10, "galletas": 30, "carne": 21}'}</code>
					<br/>
					<h3>Sets</h3>
					<p>Son modificables</p>
					<p>Pueden contener cualquier tipo de dato</p>
					<p>Son declaradas usando {}</p>
					<p>No pueden tener valores duplicados</p>
					<p>No tienen ningun orden</p>
					<code>{'set = {"Lunes", "Martes", "Jueves"}'}</code>
					<br/><br/><br/>
					
					<h2>¿Qué es una lista?</h2>
					<p>Una lista es una colección ordenada y mutable de elementos que puede contener elementos de diferentes tipos de datos. Las listas en Python son similares a los arrays en otros lenguajes de programación.</p>
					<br/>
					<h3>Creación de listas</h3>
					<p>Las listas se crean utilizando corchetes <code>[]</code> y pueden contener cero o más elementos separados por comas.</p>
					<pre>
						<code>
{`# Creación de listas
lista_vacia = []
lista_numeros = [1, 2, 3, 4, 5]
lista_mixta = [1, "Hola", 3.14, True]`}
						</code>
					</pre>
					<br/>
					<h3>Acceso a elementos de una lista</h3>
					<p>Se puede acceder a los elementos de una lista utilizando índices. Los índices en Python comienzan en 0.</p>
					<p>Imagina los indices de una lista como un ranking, o posicion, coma ya ha sido dicho, los indices empiezan por el 0,</p>
					<p>esto significa que el primer elemento de una lista esta en la posicion 0.</p>
					<pre>
						<code>
{`# Acceso a elementos de una lista
primero = lista_numeros[0]  # 1
segundo = lista_numeros[1]  # 2
ultimo = lista_numeros[-1]  # 5 (índice negativo accede desde el final)`}
						</code>
					</pre>
					<br/>
					<h3>Modificación de elementos de una lista</h3>
					<p>Las listas son mutables, lo que significa que puedes cambiar sus elementos después de haberlas creado.</p>
					<pre>
						<code>
{`# Modificación de elementos de una lista
lista_numeros[0] = 10  # Cambia el primer elemento a 10
print(lista_numeros)  # [10, 2, 3, 4, 5]`}
						</code>
					</pre>
					<br/>
					<h3>Métodos útiles para listas</h3>
					<p>Las listas en Python tienen varios métodos incorporados que facilitan su manipulación:</p>
					<ul>
						<li><code>append(elemento)</code>: Agrega un elemento al final de la lista.</li>
						<li><code>remove(elemento)</code>: Elimina la primera ocurrencia del elemento en la lista.</li>
						<li><code>pop([índice])</code>: Elimina y devuelve el elemento en el índice especificado (por defecto, el último elemento).</li>
						<li><code>sort()</code>: Ordena los elementos de la lista en orden ascendente.</li>
						<li><code>reverse()</code>: Invierte el orden de los elementos en la lista.</li>
					</ul>
					<pre>
						<code>
{`# Uso de métodos de listas
lista_numeros.append(6)
print(lista_numeros)  # [10, 2, 3, 4, 5, 6]

lista_numeros.remove(10)
print(lista_numeros)  # [2, 3, 4, 5, 6]

elemento = lista_numeros.pop()
print(elemento)       # 6
print(lista_numeros)  # [2, 3, 4, 5]

lista_numeros.sort()
print(lista_numeros)  # [2, 3, 4, 5]

lista_numeros.reverse()
print(lista_numeros)  # [5, 4, 3, 2]`}
						</code>
					</pre>
					<br/>
					<p>Las listas son las más utilizadas para manipular secuencias de elementos debido a su flexibilidad.</p>

				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Funciones_utiles_listas() {
	const next = "Ejercicios_7";
	const previous = "El_array";

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Funciones útiles para las listas</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>

				<div style={{ marginLeft: '10px' }}>
					<p>En Python, las listas son una de las estructuras de datos más versátiles y ampliamente utilizadas. Para facilitar la manipulación de listas, Python ofrece varias funciones y métodos integrados que son muy útiles.</p>

					<h2>La función <code>len()</code></h2>
					<p>La función <code>len()</code> devuelve el número de elementos en una lista (o en cualquier otra estructura de datos que tenga una longitud definida).</p>
					<pre>
						<code>
{`# Uso de len() con listas
lista = [1, 2, 3, 4, 5]
longitud = len(lista)
print("Longitud de la lista:", longitud)  # Output: Longitud de la lista: 5`}
						</code>
					</pre>
					<br/>
					<h2>Otras funciones y métodos útiles para listas</h2>
					<p>Además de <code>len()</code>, las listas en Python tienen varios métodos incorporados que facilitan su manipulación:</p>
					<ul>
						<li><code>append(elemento)</code>: Agrega un elemento al final de la lista.</li>
						<li><code>remove(elemento)</code>: Elimina la primera ocurrencia del elemento en la lista.</li>
						<li><code>pop([índice])</code>: Elimina y devuelve el elemento en el índice especificado (por defecto, el último elemento).</li>
						<li><code>sort()</code>: Ordena los elementos de la lista en orden ascendente.</li>
						<li><code>reverse()</code>: Invierte el orden de los elementos en la lista.</li>
						<li><code>insert(índice, elemento)</code>: Inserta un elemento en la lista en la posición especificada.</li>
						<li><code>index(elemento)</code>: Devuelve el índice de la primera ocurrencia del elemento en la lista.</li>
						<li><code>count(elemento)</code>: Devuelve el número de veces que el elemento aparece en la lista.</li>
						<li><code>extend(iterable)</code>: Agrega todos los elementos de un iterable (como otra lista) al final de la lista actual.</li>
					</ul>
					<pre>
						<code>
{`# Ejemplos de métodos de listas
lista = [1, 2, 3]

lista.append(4)
print(lista)  # [1, 2, 3, 4]

lista.remove(2)
print(lista)  # [1, 3, 4]

ultimo = lista.pop()
print(ultimo)  # 4
print(lista)   # [1, 3]

lista.sort()
print(lista)  # [1, 3]

lista.reverse()
print(lista)  # [3, 1]

lista.insert(1, 2)
print(lista)  # [3, 2, 1]

indice = lista.index(2)
print(indice)  # 1

conteo = lista.count(1)
print(conteo)  # 1

lista.extend([4, 5, 6])
print(lista)  # [3, 2, 1, 4, 5, 6]`}
						</code>
					</pre>
				<br/>
				<div style={{ backgroundColor: '#282829', padding: '10px 10px 10px 10px' }}>
					<h3>Como saber si un elemento se encuentra en mi lista</h3>
					<p>Seguramente debes de recordar los operadores en Python, estos te pueden permitir resolver esta cuestion,</p>
					<p>pero como esto es bastante importante, va a ser repetido aquí.</p>
					<p>El operador <code>in</code> te puede permitir saber si una lista contiene x elemento, o no.</p>
					<p>Pequeño ejemplo adelante:</p>
					<pre>
						<code>
{`mi_lista = [1, 2, 3, "manzana", "sandia"]
print("manzana" in mi_lista) # True
print("avion" in mi_lista) #False`}
						</code>	
					</pre>
				</div>
				</div>
				<br/>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Ejercicios_7() {
	const next = "El_loop_for";
	const previous = "Funciones_utiles_listas";

	const answer1 = ["[", "]"]
	const answer2 = ["[0]", "[2]"]
	const answer3 = [".append", '"motocicleta"']
	const answer4 = ["in"]

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
							<h3>Completa esta lista</h3>
							<p>ListaDeLaCompra = <input className='answer_field'/>"perro", "aceite", "sarten"<input className='answer_field'/></p>
							<p style={{paddingLeft: '20px'}}>print("Las variables son iguales, di no a la discriminacion de variables por lo que se le hayan asignado al ser creadas!!!")</p>
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
							<h3>Accede al primer elemento, despues al tercero</h3>
							<p>ListaDeLaCompra<input className='answer_field'/></p>
							<p>ListaDeLaCompra<input className='answer_field'/></p>
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
							<h3>Añade "motocicleta" al final de la lista</h3>
							<p>Lista_Ranking_Seguridad<input className='answer_field'/>( <input className='answer_field'/> )</p>
							<p style={{paddingLeft: '20px'}}>print("No usare chatgpt de nuevo profesor, un parte no porfavor!!!")</p>
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
					
					<div id='Exercise4' style={{backgroundColor: '#282829', padding: '10px 10px 10px 10px', height: '300px', width: '89%', position: 'relative' }}>
						<div className='Exercise'>
							<h3>Haz que el if se ejecute si "x" esta en la lista abecedario</h3>
							<p>if "x" <input className='answer_field'/> abecedario:</p>
							<p style={{paddingLeft: '20px'}}>print("x es una letra")</p>
						</div>

						<div className='Result' style={{display: 'none'}}>
							<h2>Result</h2>
							<button onClick={() => retry(document.getElementById('Exercise4'))} className="h3_button">Intentar de nuevo</button>
						</div>
						<div style={{ bottom: '5%', right: '2%', position: 'absolute'}}>
							<button style={{ marginRight: '10px' }} onClick={() => give_answers(document.getElementById('Exercise4'), answer4)} className='give_answers'>Respuestas</button>
							<button onClick={() => check_exercise(document.getElementById('Exercise4'), answer4)} className='check'>Verificar</button>
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

function El_loop_for() {
	const next = "Ejercicios_8";
	const previous = "Ejercicios_7";

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>El uso del bucle <code>for</code> en Python</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>

				<div style={{ marginLeft: '10px' }}>
					<p>El bucle <code>for</code> es una herramienta muy útil en Python que te permite repetir una serie de instrucciones varias veces. Se utiliza principalmente para recorrer (iterar) sobre una secuencia de elementos, como una lista, una tupla, un diccionario, un conjunto o una cadena de caracteres.</p>
					
					<h2>¿Qué es un bucle <code>for</code>?</h2>
					<p>Un bucle <code>for</code> en Python itera sobre los elementos de una secuencia en el orden en que aparecen. Esto significa que puedes ejecutar el mismo bloque de código para cada elemento de la secuencia.</p>
					<br/>
					<h3>Ejemplo básico</h3>
					<p>Supongamos que tienes una lista de números y quieres imprimir cada número en la lista:</p>
					<pre>
						<code>
{`# Ejemplo básico de bucle for
numeros = [1, 2, 3, 4, 5]
for numero en numeros:
    print(numero)`}
						</code>
					</pre>
					<p>En este ejemplo, el bucle <code>for</code> recorre cada número en la lista <code>numeros</code> y lo imprime. La salida será:</p>
					<pre>
						<code>
{`1
2
3
4
5`}
						</code>
					</pre>
					<br/>
					<h3>Uso del bucle <code>for</code> con cadenas de caracteres</h3>
					<p>También puedes usar un bucle <code>for</code> para iterar sobre los caracteres de una cadena:</p>
					<pre>
						<code>
{`# Bucle for con una cadena de caracteres
mensaje = "Hola"
for caracter en mensaje:
    print(caracter)`}
						</code>
					</pre>
					<p>La salida será:</p>
					<pre>
						<code>
{`H
o
l
a`}
						</code>
					</pre>
					<br/>
					<h3>Uso del bucle <code>for</code> con la función <code>range()</code></h3>
					<p>La función <code>range()</code> es muy útil para generar una secuencia de números. Puedes usarla en un bucle <code>for</code> para repetir una acción un número específico de veces:</p>
					<pre>
						<code>
{`# Bucle for con la función range()
for i en range(5):
    print("Esto es una repetición", i)`}
						</code>
					</pre>
					<p>La salida será:</p>
					<pre>
						<code>
{`Esto es una repetición 0
Esto es una repetición 1
Esto es una repetición 2
Esto es una repetición 3
Esto es una repetición 4`}
						</code>
					</pre>
					<p>La función <code>range(5)</code> genera una secuencia de números desde 0 hasta 4 (5 números en total), y el bucle <code>for</code> itera sobre estos números, imprimiendo un mensaje en cada repetición.</p>
					<br/>
					<h3>Uso del bucle <code>for</code> con listas y diccionarios</h3>
					<p>También puedes usar un bucle <code>for</code> para iterar sobre los elementos de un diccionario:</p>
					<pre>
						<code>
{`# Bucle for con un diccionario
estudiantes = {"Ana": 90, "Juan": 85, "Maria": 95}
for nombre, calificacion en estudiantes.items():
    print(nombre, "tiene una calificación de", calificacion)`}
						</code>
					</pre>
					<p>La salida será:</p>
					<pre>
						<code>
{`Ana tiene una calificación de 90
Juan tiene una calificación de 85
Maria tiene una calificación de 95`}
						</code>
					</pre>

					<p>Usar un bucle <code>for</code> te permite automatizar tareas repetitivas y trabajar con secuencias de datos de manera más eficiente.</p>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Ejercicios_8() {
	const next = "diccionarios";
	const previous = "El_loop_for";

	const answer1 = ["lista_2", "numero"]
	const answer2 = ["range", "7"]

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
							<h3>Haz que este for escriba en la consola 1,2,3,5</h3>
							<p>lista_1 = [2,2,3,4,1]</p>
							<p>lista_2 = [1,2,3,4,5]</p>
							<p>for numero in <input className='answer_field'/></p>
							<p style={{paddingLeft: '20px'}}>print(numero)</p>
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
							<h3>Haz que este for sea ejecutado 7 veces</h3>
							<p>for numero in range(0, <input className='answer_field'/>)</p>
							<p style={{paddingLeft: '20px'}}>print(numero)</p>
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

export { Los_condicionales, Uso_del_if, Uso_del_while, Ejercicios_6, El_array, Funciones_utiles_listas, Ejercicios_7, El_loop_for, Ejercicios_8 };
