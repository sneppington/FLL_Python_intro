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


// Database Functions //

function send_session() {
	
}

// Pages //

function Inicio() {
	const page = "Inicio"
	
	const next = "Instalando_Python";
	const previous = page;

	log_wordcount(217);

	return (
	<>
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
	<Nav_header page="Inicio"/>
	<div id="main">
	<div>
	</div>
		<div style={{backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px'}}>
		<h1 style={{marginTop: '40px'}}>Introducción a Python</h1>
		</div>
		<div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto'}}>
		<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
		<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
		</div>
		
		<div style={{marginLeft: '10px'}}>
			<h2>¿Qué es Python?</h2>
			<p>Python es un lenguaje de programación popular. Fue creado por Guido van Rossum y lanzado en 1991.</p>

			<p>Se utiliza para:</p>

			<ul>
				<li>desarrollo web (lado del servidor), </li>
				<li>desarrollo de software, </li>
				<li>matemáticas,</li>
				<li>scripting del sistema.</li>
			</ul>

			<h3>¿Qué puede hacer Python?</h3>
			<ul>
				<li>Python se puede utilizar en un servidor para crear aplicaciones web.</li>
				<li>Python se puede usar junto con software para crear flujos de trabajo.</li>
				<li>Python puede conectarse a sistemas de bases de datos. También puede leer y modificar archivos.</li>
				<li>Python se puede utilizar para manejar grandes volúmenes de datos y realizar matemáticas complejas.</li>
				<li>Python se puede utilizar para prototipado rápido o para el desarrollo de software listo para producción.</li>
			</ul>

			<h3>¿Por qué Python?</h3>
			<ul>
				<li>Python funciona en diferentes plataformas (Windows, Mac, Linux, Raspberry Pi, etc).</li>
				<li>Python tiene una sintaxis simple similar al lenguaje inglés.</li>
				<li>Python tiene una sintaxis que permite a los desarrolladores escribir programas con menos líneas que algunos otros lenguajes de programación.</li>
				<li>Python se ejecuta en un sistema de intérprete, lo que significa que el código puede ejecutarse tan pronto como se escribe. Esto significa que el prototipado puede ser muy rápido.</li>
				<li>Python se puede tratar de manera procedural, orientada a objetos o funcional.</li>
			</ul>
			
			<h3>Importante saber</h3>
			<ul>
				<li>La versión mayor más reciente de Python es Python 3, que utilizaremos en este tutorial. Sin embargo, Python 2, aunque no se actualiza con nada más que actualizaciones de seguridad, sigue siendo bastante popular.</li>
				<li>En este tutorial, Python se escribirá en un editor de texto. Es posible escribir Python en un Entorno de Desarrollo Integrado, como Thonny, Pycharm, Netbeans o Eclipse, que son especialmente útiles cuando se manejan colecciones más grandes de archivos Python.</li>
			</ul>

			<h3>Sintaxis de Python en comparación con otros lenguajes de programación</h3>
			<ul>
				<li>Python fue diseñado para ser legible y tiene algunas similitudes con el lenguaje inglés con influencia de las matemáticas.</li>
				<li>Python utiliza saltos de línea para completar un comando, a diferencia de otros lenguajes de programación que a menudo utilizan punto y coma o paréntesis.</li>
				<li>Python depende de la indentación, usando espacios en blanco, para definir el alcance; como el alcance de bucles, funciones y clases. Otros lenguajes de programación a menudo usan llaves ({}) para este propósito.</li>
			</ul>
		</div>
		<div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto'}}>
		<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
		<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
		</div>
	</div>



	</>
  );
}

function Instalando_Python() {
	const page = "Instalando_Python"
	
	const next = "Familiarizandote_con_Thony";
	const previous = "Inicio";

	log_wordcount(153);

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header page="Inicio"/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Instalando Python</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>

				<div style={{ marginLeft: '10px' }}>
					<h2>¿Como descargarlo?</h2>
					<p>Python es un lenguage relativamente facil de descargar y ejecutar</p>
					<p>evidente es porqué es uno de los lenguages mas extendidos</p>
					<p>por todo el mundo, a la par de la familia de C.</p>
					<br/>
					
					<h3>¿Donde descargarlo?</h3>
					<p>Tendras que navegar hacia <a href='https://www.python.org/downloads/'>esta web.</a></p>
					<p>Deberas de seleccionar la instalacion adecuada para tu sistema operativo(Windows, linux, etc.)</p>
					<br/>
					
					<h3>¿Que hacer despues?</h3>
					<p>Busca en tu carpeta de descargas el archivo y abrelo.</p>
					<p>Selecciona descargar y marca todas las casillas.</p>
					<img src={download_image} />
					<br/><br/><br/>
					
					<h2>¿Y mi editor de codigo?</h2>
					<p>Como habras ya adivinado, para escribir codigo hay que escribir.</p>
					<p>Normalmente los programadores no usan sencillos editores de texto, sino editores de codigo,</p>
					<p>Nosotros vamos a usar un editor de texto especializado para python, llamado 'Thonny'.</p>
					<p>Siempre puedes usar otro editor de codigo si ya tienes uno.</p>
					<br/>
					
					<div style={{backgroundColor: '#282829', padding: '10px 10px 10px 10px'}}>
						<h3>Descargando Thonny</h3>
						<p>Sigue los siguientes pasos:</p>
						<ul style={{marginBottom: '20px'}}>
							<li>Abre la consola de comandos</li>
							<li>En esta escribe 'pip install thonny'</li>
							<li>Espera un rato...</li>
							<li>Y descargado</li>
						</ul>
						<h3>¿Como encontrar Thonny?</h3>
						<p>Presiona el boton de windows y escribe Thonny,</p>
						<p>el icono de Thonny se deberia de ver como una hoja de papel con una serpiente amarilla a su lado.</p>
						<img src={thonny_icon} />
					</div>
					<br/>
				</div>
				<div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto'}}>
				<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
				<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Familiarizandote_con_Thony() {
	const page = "Familiarizandote_con_Thony"
	
	const next = "Creando_variables";
	const previous = "Instalando_Python";

	log_wordcount(297);

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Familirizandote con Thonny</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>

				<div style={{ marginLeft: '10px' }}>
					<h2>¿Por que Thonny?</h2>
					<p>Aunque editores de codigo como vscode abunden y sean capaces de</p>
					<p>reconocer cualquier lenguage de codigo, estos a su vez no son</p>
					<p>Por eso usaremso un editor de codigo hecho para python.</p>
					<br/>
					
					<h3>¿Como abrirlo?</h3>
					<p>Tendras que presionar el boton de windows y buscar 'Thonny', es importante escribirlo con 2 'n'.</p>
					<p>Despues simplemente abre el programa.</p>
					<img src={thonny_icon} />
					<br/>
					
					<h3>Una vez abierto</h3>
					<p>Despues de aberlo abierto deberias de ver la siguiente interfaz.</p>
					<img src={thonnny_gui} style={{height: 'auto', width: '70vw'}} />
					<p>Esta es la interfaz en la que programaras.</p>
					<p>El gran recuadro de arriba es donde el codigo es escrito.</p>
					<p>El pequeño recuadro de abajo es donde encontraras el resultado de tu codigo despues de haberlo ejecutado</p>
					
					<br/>
					
					<h3>Ejecutado, guardado y más</h3>
					<p>Para ejecutar el codigo puedes guardar el codigo y usar comandos para ejecutarlo(lento),</p>
					<p>o puedes presionar un boton como a todo profesional al que le importe su tiempo.</p>
					<p>A continuacion la hubicacion de este boton.</p>
					<img src={thonny_icons} />
					<p>Es el boton verde con una flecha blanca.</p>
					<p>Ademas de el boton que ejecuta el codigo, se puede ver otros 9 botones</p>
					<p>A continuacion el nombre y funcionalidad de cada uno:</p>
					<ul>
						<li><b>Nueva Pagina:</b> Crea una nueva pagina en blanco donde programar.</li>
						<li><b>Abrir desde:</b> Permite abrir un archivo .py, este es codigo de python.</li>
						<li><b>Guardar:</b> Guarda tu codigo.</li>
						<li><b>Ejecutar:</b> Ejecuta tu codigo.</li>
						<li><b>Debug:</b> Es como ejecutar pero te permite ejecutar las lineas de codigo una a una.</li>
						<li><b>Paso adelante:</b> En modo de debug, te permite saltar a la siguiente linea.</li>
						<li><b>Paso adentro:</b> En modo de debug, te permite avanzar a el siguiente paso.</li>
						<li><b>Paso afuera:</b> En modo de debug, te permite salir de el modo paso adentro, si no estas en este modo parara el modo debug.</li>
						<li><b>Resumir:</b> En modo de debug, para este mismo modo.</li>
						<li><b>Stop:</b> Para la ejecucion de el codigo</li>
					</ul>
					<p>Siempre puedes usar otro editor de codigo si ya tienes uno.</p>
					<br/>
					
				</div>
				<div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto'}}>
				<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
				<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function format_() {
	const page = "format"
	
	const next = page;
	const previous = "";

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Title of lesson</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>

				<div style={{ marginLeft: '10px' }}>
					<h2>Important theme</h2>
					<p>Aunque editores de codigo como vscode abunden y sean capaces de</p>
					<p>reconocer cualquier lenguage de codigo, estos a su vez no son</p>
					<p>Por eso usaremso un editor de codigo hecho para python.</p>
					<br/>
					
					<h3>theme</h3>
					<p>Tendras que presionar el boton de windows y buscar 'Thonny', es importante escribirlo con 2 'n'.</p>
					<p>Despues simplemente abre el programa.</p>
					<img src={thonny_icon} />
					<br/>
					
					<h3>Theme</h3>
					<p>Despues de aberlo abierto deberias de ver la siguiente interfaz.</p>
					<img src={thonnny_gui} style={{height: 'auto', width: '70vw'}} />
					<p>Esta es la interfaz en la que programaras.</p>
					<p>El gran recuadro de arriba es donde el codigo es escrito.</p>
					<p>El pequeño recuadro de abajo es donde encontraras el resultado de tu codigo despues de haberlo ejecutado</p>
					
					<br/>
					
					<h3>theme</h3>
					<p>Para ejecutar el codigo puedes guardar el codigo y usar comandos para ejecutarlo(lento),</p>
					<p>o puedes presionar un boton como a todo profesional al que le importe su tiempo.</p>
					<p>A continuacion la hubicacion de este boton.</p>
					<img src={thonny_icons} />
					<p>Es el boton verde con una flecha blanca.</p>
					<p>Ademas de el boton que ejecuta el codigo, se puede ver otros 9 botones</p>
					<p>A continuacion el nombre y funcionalidad de cada uno:</p>
					<ul>
						<li><b>Nueva Pagina:</b> Crea una nueva pagina en blanco donde programar.</li>
						<li><b>Abrir desde:</b> Permite abrir un archivo .py, este es codigo de python.</li>
						<li><b>Guardar:</b> Guarda tu codigo.</li>
						<li><b>Ejecutar:</b> Ejecuta tu codigo.</li>
						<li><b>Debug:</b> Es como ejecutar pero te permite ejecutar las lineas de codigo una a una.</li>
						<li><b>Paso adelante:</b> En modo de debug, te permite saltar a la siguiente linea.</li>
						<li><b>Paso adentro:</b> En modo de debug, te permite avanzar a el siguiente paso.</li>
						<li><b>Paso afuera:</b> En modo de debug, te permite salir de el modo paso adentro, si no estas en este modo parara el modo debug.</li>
						<li><b>Resumir:</b> En modo de debug, para este mismo modo.</li>
						<li><b>Stop:</b> Para la ejecucion de el codigo</li>
					</ul>
					<p>Siempre puedes usar otro editor de codigo si ya tienes uno.</p>
					<br/><br/>
					<div style={{backgroundColor: '#282829', padding: '10px 10px 10px 10px'}}>
						<h3>Really important and short theme</h3>
						<p>Sigue los siguientes pasos:</p>
						<ul style={{marginBottom: '20px'}}>
							<li>Abre la consola de comandos</li>
							<li>En esta escribe 'pip install thonny'</li>
							<li>Espera un rato...</li>
							<li>Y descargado</li>
						</ul>
						<h3>¿Como encontrar Thonny?</h3>
						<p>Presiona el boton de windows y escribe Thonny,</p>
						<p>el icono de Thonny se deberia de ver como una hoja de papel con una serpiente amarilla a su lado.</p>
						<img src={thonny_icon} />
					</div>
				</div>
				<div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto'}}>
				<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
				<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Creando_variables() {
	const page = "Creando_variables";
	
	const next = 'Ejercicios_1';
	const previous = "Familiarizandote_con_Thony";

	log_wordcount(469);

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Creando variables</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>

				<div style={{ marginLeft: '10px' }}>
					<h2>¿Que es una variable?</h2>
					<p>Seguramente habreis oido en clase de matematicas sobre variables,</p>
					<p>en python las variables son como las variables en matematicas, pueden variar, con la diferencia de que pueden ser mas que numeros.</p>
					<p>En una variable se contiene un valor, este valor puede ser cambiado por el programa si asi ha sido escrito.</p>
					<br/>
					
					<h3>Creando una variable</h3>
					<p>En Python, puedes crear una variable simplemente asignando un valor a un nombre:</p>
					<pre>
						<code>{`edad = 30
nombre = 'Juan'
es_admin = False`}</code>
					</pre>

					<h3>Nombre de variable</h3>
					<p>Un nombre de variable debe comenzar con una letra o el carácter de subrayado. Puede contener letras, dígitos y guiones bajos pero no espacios. Ejemplos:</p>
					<pre>
						<code>{`mi_variable = 'valor'
_usuario = 'nombre_usuario'
salario_2021 = 50000`}</code>
					</pre>

					<h3>Nombres de variables con varias palabras</h3>
					<p>Usa guiones bajos para separar palabras en nombres de variables (snake_case):</p>
					<pre>
						<code>{`primer_nombre = 'Juan'
numero_de_estudiantes = 50
mi_color_favorito = 'azul'`}</code>
					</pre>

					<h3>Asignar múltiples valores</h3>
					<p>Puedes asignar múltiples valores a múltiples variables en una sola línea:</p>
					<pre>
						<code>{`a, b, c = 1, 2, 3
a = 1, b = 2, c = 3`}</code>
					</pre>

					<h3>Un valor a múltiples variables</h3>
					<p>Asigna un valor a múltiples variables en una sola línea:</p>
					<pre>
						<code>{`x = y = z = 10
x = 10, y = 10, z = 10`}</code>
					</pre>

					<div style={{ backgroundColor: '#282829', padding: '10px 10px 10px 10px' }}>
						<h3>¿Como saber que contiene mi variable?</h3>
						<p>En la mayoria de lenguajes de programacion hay un comando que te da lo que contiene cualquiera de tus variable,</p>
						<p>en python ese comando se llama 'print'</p>
						<p>para sacar el valor de cualquier variable deberias de escribir lo siguiente</p>
						<pre>
							<code>{`Nombre_de_tu_variable = 10
print(Nombre_de_tu_variable)`}
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

function Ejercicios_1() {
	const page = "Ejercicios_1"
	
	const next = "Tipos_de_datos";
	const previous = "Creando_variables";

	const answer1 = ["Volvo"]
	const answer2 = ["nublado"]
	const answer3 = ["print", "color"]
	const answer4 = ["coche", '"Ferrari"', "print", "coche"]

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
							<h3>Asigna el valor "Volvo" a la variable coche.</h3>
							<p>coche = "<input className='answer_field'/>"</p>
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
							<h3>Crea una variable llamada tiempo y asignale el valor "nublado"</h3>
							<p>tiempo = "<input className='answer_field'/>"</p>
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
							<h3>Haz que la variable color sea escrita en la consola, usa la funcion print.</h3>
							<p>color = "rojo"</p>
							<p><input className='answer_field'/> ( <input className='answer_field'/> )</p>
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
							<h3>Crea la variable coche, asignale "Ferrari" y haz que sea escrita en la consola.</h3>
							<p><input className='answer_field'/> = <input className='answer_field'/></p>
							<p><input className='answer_field'/> ( <input className='answer_field'/> )</p>
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

function format_ejercicios() {
	const page = "format"
	
	const next = page;
	const previous = "";

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Title of lesson</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
				<br/>
				<div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

					<div id='Exercise1' style={{backgroundColor: '#282829', padding: '10px 10px 10px 10px', height: '300px', width: '89%', position: 'relative' }}>
						<div className='Exercise'>
							<h3>Really important and short theme</h3>
							<p>question <input className='answer_field'/></p>
						</div>

						<div className='Result' style={{display: 'none'}}>
							<h2>Result</h2>
							<button onClick={() => retry(document.getElementById('Exercise1'))} className="h3_button">Intentar de nuevo</button>
						</div>
						<div style={{ bottom: '5%', right: '2%', position: 'absolute'}}>
							<button style={{ marginRight: '10px' }} onClick={() => give_answers(document.getElementById('Exercise1'), ['answer'])} className='give_answers'>Respuestas</button>
							<button onClick={() => check_exercise(document.getElementById('Exercise1'), ['answer'])} className='check'>Verificar</button>
						</div>
					</div>
					<br/><br/><br/>


				</div>
				<div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto'}}>
				<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
				<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Tipos_de_datos() {
	const page = "Tipos_de_datos"
	
	const next = "Estableciendo_el_tipo_de_dato";
	const previous = "Ejercicios_1";

	log_wordcount(400);

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Tipos de datos en python</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
				<br/>
				<div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
					<h2>Tipos de Datos Importantes</h2>
					<p>En Python, los tipos de datos son como etiquetas que nos dicen qué tipo de información estamos manejando. Aquí están algunos de los tipos de datos más importantes en Python:</p>
					<ul style={{ listStyleType: 'none', padding: 0, display: 'grid', gap: '20px' }}>
						<li>
							<strong>int</strong> - Entero, un número sin decimales.
							<br/><em>Ejemplo:</em> 42, -3, 1024
						</li>
						<li>
							<strong>float</strong> - Número decimal, un número con decimales.
							<br/><em>Ejemplo:</em> 3.14, -0.5, 2.0
						</li>
						<li>
							<strong>str</strong> - Cadena de texto, una secuencia de letras, números y símbolos.
							<br/><em>Ejemplo:</em> "Hola", "Python", "123"
						</li>
						<li>
							<strong>bool</strong> - Booleano, puede ser verdadero o falso.
							<br/><em>Ejemplo:</em> True (Verdadero), False (Falso)
						</li>
						<li>
							<strong>list</strong> - Lista, una colección ordenada de elementos que puede cambiar.
							<br/><em>Ejemplo:</em> [1, 2, 3], ["a", "b", "c"]
						</li>
						<li>
							<strong>tuple</strong> - Tuple, una colección ordenada de elementos que no puede cambiar.
							<br/><em>Ejemplo:</em> (1, 2, 3), ("x", "y", "z")
						</li>
						<li>
							<strong>dict</strong> - Diccionario, una colección de pares clave-valor, como un diccionario de palabras y significados.
							<br/><em>Ejemplo:</em> {'{ "nombre": "Juan", "edad": 15 }'}
						</li>
						<li>
							<strong>set</strong> - Conjunto, una colección de elementos únicos, sin orden.
							<br/><em>Ejemplo:</em> {'{1, 2, 3}, {"a", "b", "c"}'}
						</li>
					</ul>
					

					<div style={{ backgroundColor: '#282829', padding: '10px 10px 10px 10px' }}>
						<h3>¿Como saber de que tipo es mi variable?</h3>
						<p>Saber de que tipo es tu variable es bastante importante, por ejemplo:</p>
						<p>Imagina que vas a sumar 3 mas 3, si estos 3 son numeros te dara 6, pero so son texto te dara 33,</p>
						<p>como cuando aquel amigo decia que 1 + 1 son 11 porque si los pones al lado forman el numero 11.</p>
						<p>Normalmente quieres que tus variables sean de 'x' tipo para que el codigo funcione como deseado.</p>
						<br/>
						<p>la funcion que te da el tipo de variable es 'type',</p>
						<p>sin embargo, esta funcion no escribe en la consola,</p>
						<p>esto es resuelto insertandola dentro de un 'print'.</p>
						<br/>
						<h3>Ejemplo de uso de 'type':</h3>
						<code>
						coche = "Audi"
						<br/>
						print(type(coche))
						</code>
						<p><b>Consola:</b></p>
						<p>{`<class 'str'>`}</p>

					</div>
					<br/>
				</div>	
				<div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto'}}>
				<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
				<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Estableciendo_el_tipo_de_dato() {
	const next = 'Ejercicios_2';
	const previous = "Tipos_de_datos";

	log_wordcount(300);

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Estableciendo el tipo de dato</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
				<br/>
				<div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
					<h2>¿Cuándo se establece el tipo de dato?</h2>
					<p>Python es un lenguaje de programación dinámico.</p>
					<p>Esto significa que cada vez que una variable es asignada o reasignada, el tipo de dato se establece de nuevo.</p>
					<br/>
					<p>En otras palabras, el nombre de la variable no tiene mucho que ver con el tipo de dato;</p>
					<p>lo que le asignas contiene el tipo de dato.</p>
					<br/>
					<br/>
					<p><b>Creación de Variables</b></p>
					<p>En Python, puedes crear variables de diferentes tipos de datos de manera muy sencilla. Aquí te muestro cómo crear variables booleanas, enteras, flotantes y de cadena de texto:</p>
					<pre>
						<code>
{`# Booleano
es_verdadero = True
es_falso = False

# Entero
numero_entero = 10

# Flotante
numero_flotante = 10.5

# Cadena de texto
cadena_texto = "Hola, mundo"`}
						</code>
					</pre>
					<br/>
					<p><b>Conversión de Tipos</b></p>
					<p>A veces, es necesario convertir una variable de un tipo a otro. Python proporciona funciones integradas para realizar estas conversiones:</p>
					<p>- <code>int()</code>: Convierte un valor a un entero.</p>
					<p>- <code>float()</code>: Convierte un valor a un flotante.</p>
					<p>- <code>str()</code>: Convierte un valor a una cadena de texto.</p>
					<p>- <code>bool()</code>: Convierte un valor a un booleano.</p>
					<p>Veamos algunos ejemplos:</p>
					<pre>
						<code>
{`# Convertir de cadena a entero
cadena = "123"
entero = int(cadena)
print(type(entero))  # <class 'int'>

# Convertir de entero a flotante
entero = 10
flotante = float(entero)
print(type(flotante))  # <class 'float'>

# Convertir de flotante a cadena
flotante = 10.5
cadena = str(flotante)
print(type(cadena))  # <class 'str'>

# Convertir de entero a booleano
entero = 0
booleano = bool(entero)
print(type(booleano))  # <class 'bool'>`}
						</code>
					</pre>
					<br/>
					<p>Como se mencionó al principio, en Python el tipo de dato se establece cada vez que una variable es asignada o reasignada. Por ejemplo:</p>
					<pre>
						<code>
{`variable = 10
print(type(variable))  # <class 'int'>

variable = 10.5
print(type(variable))  # <class 'float'>

variable = "Hola"
print(type(variable))  # <class 'str'>`}
						</code>
					</pre>
					<p>Cada vez que se reasigna <code>variable</code>, el tipo de dato cambia según el valor que se le asigna.</p>
					<p>Esto hace que Python sea muy flexible y fácil de usar, permitiendo a los programadores centrarse más en la lógica del programa y menos en la gestión de tipos de datos.</p>
					<br/>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Numeros_en_python() {
	const next = "Ejercicios_2";
	const previous = "Estableciendo_el_tipo_de_dato";

	log_wordcount(300);

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Numeros en Python</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
				<br/>
				<div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
					<h2>¿Como representa un numero Python?</h2>
					<p>En Python hay 3 tipos de datos que representan un numero:</p>
					<ul>
						<li><b>int:</b> Tambien llamado integro</li>
						<li><b>float:</b> Tambien llamado numero de punto flotante</li>
						<li><b>complex:</b> Bastante popular entre ingenieros y cientificos</li>
					</ul>
					
					<h3>Entero (`int`)</h3>
					<p>Un entero es un número sin parte decimal. Se utiliza para contar o realizar operaciones matemáticas que no requieren fracciones ni decimales.</p>
					<pre>
						<code>
{`# Ejemplo de entero
numero_entero = 10
print(type(numero_entero))  # <class 'int'>`}
						</code>
					</pre>
					
					<h3>Flotante (`float`)</h3>
					<p>Un flotante es un número que incluye una parte decimal. Se utiliza cuando se necesitan representaciones más precisas, como en cálculos científicos, financieros, o cualquier situación donde se manejen decimales.</p>
					<pre>
						<code>
{`# Ejemplo de flotante
numero_flotante = 10.5
print(type(numero_flotante))  # <class 'float'>`}
						</code>
					</pre>
					
					<h3>Complejo (`complex`)</h3>
					<p>Un número complejo se utiliza en matemáticas e ingeniería para representar números que tienen una parte real y una parte imaginaria. En Python, los números complejos se crean utilizando la letra <code>j</code> para denotar la parte imaginaria.</p>
					<pre>
						<code>
{`# Ejemplo de número complejo
numero_complejo = 3 + 4j
print(type(numero_complejo))  # <class 'complex'>`}
						</code>
					</pre>
					
					<div style={{ backgroundColor: '#282829', padding: '10px 10px 10px 10px' }}>
						<p><b>Conversión:</b></p>
						<p>Puedes convertir entre estos tipos utilizando las funciones integradas <code>int()</code>, <code>float()</code>, y <code>complex()</code>.</p>
						<pre>
							<code>
{`# Conversión de tipos
entero = 10
flotante = float(entero)
print(type(flotante))  # <class 'float'>

flotante = 10.5
entero = int(flotante)
print(type(entero))  # <class 'int'>

cadena_complejo = "3+4j"
complejo = complex(cadena_complejo)
print(type(complejo))  # <class 'complex'>`}
							</code>
						</pre>
					</div>
					<br/>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Strings_y_Comentarios() {
	const next = "Valores_Booleanos";
	const previous = "Ejercicios_2";

	log_wordcount(300);

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Strings y Comentarios</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
				<br/>
				<div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
					<h2>Cadenas de texto y comentarios</h2>
					<p>Seguramente ya sabras que es una cadena de texto, pero seguramente no sabras lo que un comentario es.</p>
					<p>Un comentario es texto que no es ejecutado de ninguna manera por el lenguage de programacion.</p>
					<p>Esto es bastante util para explicar que hace tu codigo o cualquier otra cosa importante.</p>
					<p>En esta parte de la leccion 0 aprenderas como crear strings y comentarios de codigo:</p>
					<br/>

					<h3>Cadenas de texto (strings)</h3>
					<p>Las cadenas de texto, o strings, en Python se utilizan para representar texto. Puedes crear una cadena de texto utilizando comillas simples (<code>'</code>) o comillas dobles (<code>"</code>).</p>
					<pre>
						<code>
{`# Ejemplos de cadenas de texto
cadena_simple = 'Hola, mundo'
cadena_doble = "Hola, mundo"
print(type(cadena_simple))  # <class 'str'>
print(type(cadena_doble))   # <class 'str'>`}
						</code>
					</pre>
					<p>Ambos tipos de comillas funcionan de la misma manera, y puedes usar la que prefieras.</p>
					<br/>
					<h3>Comentarios</h3>
					<p>Los comentarios en Python se utilizan para añadir notas o descripciones en el código y se ignoran durante la ejecución. Para agregar un comentario de una sola línea, utiliza el símbolo de almohadilla (<code>#</code>).</p>
					<pre>
						<code>
{`# Esto es un comentario de una sola línea
print("Este código se ejecutará")  # Este comentario también se ignora`}
						</code>
					</pre>
					<br/>
					<h3>Comentarios de múltiples líneas</h3>
					<p>Para añadir comentarios de múltiples líneas, puedes utilizar comillas triples (<code>'''</code> o <code>"""</code>). Aunque también se pueden usar para cadenas de texto, cuando se utilizan de esta manera, Python los interpreta como comentarios.</p>
					<pre>
						<code>
{`"""
Este es un comentario de múltiples líneas.
Puede abarcar varias líneas y se ignora durante la ejecución.
"""
print("Este código también se ejecutará")`}
						</code>
					</pre>

					<p>Usar comentarios y cadenas de texto correctamente en tu código ayuda a mejorar la legibilidad y a entender mejor el propósito de cada parte del programa.</p>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Ejercicios_3() {
	const next = "Valores_Booleanos";
	const previous = "Strings_y_Comentarios";

	const answer1 = ['"string"', "'string'"]
	const answer2 = ["#"]
	const answer3 = ['"""', '"""']
	const answer4 = ["'''", "'''"]

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
							<h3>Asigna la primera variable como una cadena de texto sin usar '', despues asigna la segunda variable como una cadena de texto sin usar "", ambas deben de contener la palabra string.</h3>
							<p>string1 = <input className='answer_field'/></p>
							<p>string2 = <input className='answer_field'/></p>
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
							<h3>Convierte el siguiente texto en un comentario de una sola linea.</h3>
							<p><input className='answer_field'/> Esto es un comentario de una sola linea</p>
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
							<h3>Crea un comentario de multiples lineas sin usar ''</h3>
							<p><input className='answer_field'/></p>
							<p>Esto es un comentario de multiples lineas</p>
							<p><input className='answer_field'/></p>
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
							<h3>Crea un comentario de multiples lineas sin usar ""</h3>
							<p><input className='answer_field'/></p>
							<p>Esto es un comentario de multiples lineas</p>
							<p><input className='answer_field'/></p>
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

function Ejercicios_2() {
	const next = "Strings_y_Comentarios";
	const previous = "Numeros_en_python";

	const answer1 = ["5", "type"]
	const answer2 = ['"Mercedes"', "False"]
	const answer3 = ["int", "float", "str"]
	const answer4 = ["3"]

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
							<h3>Define al valor de numero como 5 y despues consigue que tipo de variable es.</h3>
							<p>numero = <input className='answer_field'/></p>
							<p>print( <input className='answer_field'/> (numero))</p>
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
							<h3>Establece la marca del coche como una cadena de texto con Mercedes en ella,<br/>despues define que no esta en venta con una variable booleana(False, True).</h3>
							<p>marca_de_coche = <input className='answer_field'/></p>
							<p>en_venta = <input className='answer_field'/></p>
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
							<h3>Convierte numero1 a int, numero2 a float y numero3 a string.</h3>
							<p>numero1 = <input className='answer_field'/>(numero1)</p>
							<p>numero2 = <input className='answer_field'/>(numero2)</p>
							<p>numero3 = <input className='answer_field'/>(numero3)</p>
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
							<h3>Si este comando fuese ejecutado, que daría: <code>print(int(3.14))</code></h3>
							<p><input className='answer_field'/></p>
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

function Valores_Booleanos() {
	const next = "Ejercicios_4";
	const previous = "Tipos_de_datos";

	log_wordcount(300);

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Valores booleanos en Python</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
				<br/>
				<div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
					<h2>¿Qué son los valores booleanos?</h2>
					<p>Para empezar, un valor booleano, que puede este ser en la vida real... puede ser el numero 0, o la letra Y.</p>
					<p>No parece ser muy descriptivo, pero si en vez de ver que puede ser, miramos que representa todo cambia.</p>
					<p>Siguiendo una definicion dada por el tutor favorito de todo estudiante(chatgpt), un valor booleano representa la verdad de un argumento.</p>
					<p>Por ejemplo, 'Nadie miente' seria falso y que nadie miente sea falso es a su vez verdadero.</p>
					<p>En Python estos son representados con <code>True</code> y <code>False</code>.</p>
					
					<pre>
						<code>
{`# Ejemplos de valores booleanos
es_verdadero = True
es_falso = False
print(type(es_verdadero))  # <class 'bool'>
print(type(es_falso))      # <class 'bool'>`}
						</code>
					</pre>

					<h3>La función <code>bool()</code></h3>
					<p>La función <code>bool()</code> se utiliza para convertir un valor a booleano. Cualquier valor puede ser evaluado en un contexto booleano, y <code>bool()</code> sigue reglas específicas para determinar su valor de verdad.</p>
					<p>En general, los valores "vacíos" o "nulos" se evalúan como <code>False</code>, mientras que los valores "no vacíos" o "no nulos" se evalúan como <code>True</code>.</p>
					<pre>
						<code>
{`# Ejemplos de uso de bool()
print(bool(0))        # False
print(bool(1))        # True
print(bool(""))       # False
print(bool("Hola"))   # True
print(bool([]))       # False
print(bool([1, 2, 3]))# True`}
						</code>
					</pre>

					<h3>Contexto booleano en condicionales</h3>
					<p>Los valores booleanos se utilizan frecuentemente en condicionales para tomar decisiones en el código.</p>
					<pre>
						<code>
{`# Ejemplo de uso de booleanos en condicionales
edad = 18
if edad >= 18:
    print("Eres mayor de edad")  # Esta línea se ejecuta porque la condición es True
else:
    print("Eres menor de edad")`}
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

function Ejercicios_4() {
	const next = "Operadores_en_Python";
	const previous = "Valores_Booleanos";

	const answer1 = ["False"]
	const answer2 = ["bool"]
	const answer3 = ["True"]
	const answer4 = ["0"]

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
							<h3>Si yo asignase 10 a la variable edad y despues dijesa 'edad es menor de 10', seria eso True o False.</h3>
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
							<h3>Que funcion es usada para determinar si un objeto es True o False.</h3>
							<p><input className='answer_field'/>(Variable1)</p>
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
							<h3>¿Que daria el siguiente codigo?</h3>
							<p>Variable1 = 1</p>
							<p>print(bool(Variable1))</p>
							<p><input className='answer_field'/></p>
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
							<h3>Con un numero integro, haz que este codigo escriba en la consola False.</h3>
							<p>var1 = <input className='answer_field'/></p>
							<p>es_var1_True = bool(var1)</p>
							<p>print(es_var1_True)</p>
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

function Operadores_en_Python() {
	const next = "Ejercicios_5";
	const previous = "Ejercicios_4";

	log_wordcount(300);

	return (
		<>
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
			<Nav_header/>
			<div id="main">
				<div style={{ backgroundColor: '#282829', height: '90px', display: 'flex', paddingLeft: '10px' }}>
					<h1 style={{ marginTop: '40px' }}>Operadores en Python</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
				<br/>
				<div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
					<h2>¿Que son los operadores?</h2>
					<p>Basicamente los operadores son un conjunto de pequeños conjuntos de caracteres que hacen alguna accion.</p>
					<p>Esta accion puede ser comprobar si does valores son verdaderos, sumar 5 a una variable, etc.</p>
					<br/>

					<h3>Operadores aritméticos</h3>
					<p>Los operadores aritméticos se utilizan para realizar operaciones matemáticas comunes como la suma, resta, multiplicación, y división.</p>
					<pre>
						<code>
{`# Operadores aritméticos
a = 10
b = 3

print(a + b)  # Suma: 13
print(a - b)  # Resta: 7
print(a * b)  # Multiplicación: 30
print(a / b)  # División: 3.333...
print(a % b)  # Módulo: 1
print(a ** b) # Exponenciación: 1000
print(a // b) # División entera: 3`}
						</code>
					</pre>

					<h3>Operadores de comparación</h3>
					<p>Los operadores de comparación se utilizan para comparar dos valores. Devuelven un valor booleano (<code>True</code> o <code>False</code>).</p>
					<pre>
						<code>
{`# Operadores de comparación
a = 10
b = 3

print(a == b)  # Igual a: False
print(a != b)  # Distinto de: True
print(a > b)   # Mayor que: True
print(a < b)   # Menor que: False
print(a >= b)  # Mayor o igual que: True
print(a <= b)  # Menor o igual que: False`}
						</code>
					</pre>

					<h3>Operadores lógicos</h3>
					<p>Los operadores lógicos se utilizan para combinar expresiones condicionales.</p>
					<pre>
						<code>
{`# Operadores lógicos
x = True
y = False

print(x and y) # AND lógico: False
print(x or y)  # OR lógico: True
print(not x)   # NOT lógico: False`}
						</code>
					</pre>

					<h3>Operadores de asignación</h3>
					<p>Los operadores de asignación se utilizan para asignar valores a las variables.</p>
					<pre>
						<code>
{`# Operadores de asignación
a = 10
a += 3  # a = a + 3: 13
a -= 3  # a = a - 3: 10
a *= 3  # a = a * 3: 30
a /= 3  # a = a / 3: 10.0
a %= 3  # a = a % 3: 1.0
a **= 3 # a = a ** 3: 1.0
a //= 3 # a = a // 3: 0.0`}
						</code>
					</pre>

					<h3>Operadores de pertenencia</h3>
					<p>Los operadores de pertenencia se utilizan para verificar si un valor se encuentra en una secuencia.</p>
					<pre>
						<code>
{`# Operadores de pertenencia
lista = [1, 2, 3, 4, 5]

print(3 in lista)     # True
print(6 in lista)     # False
print(3 not in lista) # False
print(6 not in lista) # True`}
						</code>
					</pre>

					<h3>Operadores de identidad</h3>
					<p>Los operadores de identidad se utilizan para comparar si dos objetos son el mismo objeto (no solo si son iguales).</p>
					<pre>
						<code>
{`# Operadores de identidad
a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a is b)  # True, porque b es el mismo objeto que a
print(a is c)  # False, porque c es un objeto distinto con el mismo contenido
print(a == c)  # True, porque a y c tienen el mismo contenido`}
						</code>
					</pre>

					<p>Entender estos operadores es fundamental para realizar operaciones básicas y complejas en Python, permitiéndote escribir código más eficiente y legible.</p>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px', backgroundColor: '#282829', flex: '0 0 auto' }}>
					<a href={`${currentUrl}/#` + previous} className="NavButton">◀ Anterior</a>
					<a href={`${currentUrl}/#` + next} className="NavButton">Siguiente ▶</a>
				</div>
			</div>
		</>
	);
}

function Ejercicios_5() {
	const next = "Los_condicionales";
	const previous = "Valores_Booleanos";

	const answer1 = ["==", "is"]
	const answer2 = ["+", "/"]
	const answer3 = ["or", "not", "and"]
	const answer4 = ["+=", "-="]

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
							<h3>Comprueba que el valor dentro de var1 es igual al de var2, despues comprueba si var1 es var2.</h3>
							<p>var1 <input className='answer_field'/> var2</p>
							<p>var1 <input className='answer_field'/> var2</p>
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
							<h3>Suma var1 con var2, despues divide var1 por var2.</h3>
							<p>var1 <input className='answer_field'/> var2</p>
							<p>var1 <input className='answer_field'/> var2</p>
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
							<h3>Comprueba si almenos una de las dos vars es True, despues comprueba si var1 es False y var2 es True.</h3>
							<p>var1 <input className='answer_field'/> var2</p>
							<p><input className='answer_field'/> var1 <input className='answer_field'/> var2</p>
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
							<h3>Utiliza on operador de asignacion para sumarle 5 a var1, despues usa otro operador de asignacion para restarle 77 a var2.</h3>
							<p>var1 <input className='answer_field'/> 5</p>
							<p>var2 <input className='answer_field'/> 77</p>
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

export { Inicio, Instalando_Python, Familiarizandote_con_Thony, Creando_variables, Ejercicios_1, Tipos_de_datos, Estableciendo_el_tipo_de_dato, Numeros_en_python, Ejercicios_2, Strings_y_Comentarios, Ejercicios_3, Valores_Booleanos, Ejercicios_4, Operadores_en_Python, Ejercicios_5 };
