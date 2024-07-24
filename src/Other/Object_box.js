import React from 'react';
import { currentUrl } from './Global_vars.js'
import './styles.css';



function Nav_header() {
	const lessons = [
		['Inicio', 'Instalando_Python', 'Familiarizandote_con_Thony', 'Creando_variables', 'Ejercicios_1', 'Tipos_de_datos', 'Estableciendo_el_tipo_de_dato', 'Numeros_en_python', 'Ejercicios_2', 'Strings_y_Comentarios', 'Ejercicios_3', 'Valores_Booleanos', 'Ejercicios_4', 'Operadores_en_Python', 'Ejercicios_5'],
		['Los_condicionales', 'Uso_del_if', 'Uso_del_while', 'Ejercicios_6', 'El_array', 'Funciones_utiles_listas', 'Ejercicios_7', 'El_loop_for', 'Ejercicios_8'],
		['Diccionarios', 'Ejercicios_9', 'Las_Funciones', 'Ejercicios_10'],
	];

	const aciveLesson = window.location.href;
	let currentLesson = null;

	for (const lessonGroup of lessons) {
		for (const lesson of lessonGroup) {
			if (aciveLesson.includes(lesson)) {
				currentLesson = lesson;
				break;
			}
		}
		if (currentLesson) break;
	}

	document.title = "CurioPython " + currentLesson;

	const handlePageClick = (PageIndex) => {
		console.log("touched", `${currentUrl}/#` + PageIndex)
		window.location.href = `${currentUrl}/#` + PageIndex;
	};

	const handleLessonClick = (lessonIndex) => {
		const divElement = document.getElementById(`${lessonIndex}`);
		const button = document.getElementById(`Lesson_button${lessonIndex}`);
		const currentDisplay = divElement.style.display;

		if (currentDisplay === 'none') {
			divElement.style.display = 'flex';
			button.textContent = `Lección ${lessonIndex} ▼`;
		} else {
			divElement.style.display = 'none'
			button.textContent = `Lección ${lessonIndex} ▲`;
		}
	};

	return (
		<header id="Nav_header">
		<div className='nav_header_wrapper'>
			{lessons.map((pages, inx) => (
				<React.Fragment key={`Lección-${inx}`}>
				<div style={{ width: '100%', marginBottom: '10px'}}>
					<button
					id={`Lesson_button${inx}`}
					className='LessonDropdownButton'
					style={{ width: '90%', fontSize: '20px', color: 'white'}}
					onClick={() => handleLessonClick(inx)}>
					{`Lección ${inx} ${ pages.includes(currentLesson) ? '▼' : '▲' }`}
					</button>

					<div 
						id={inx} 
						style={{ 
							display: pages.includes(currentLesson) ? 'flex' : 'none',
							flexDirection: 'column',
							gap: '10px',
							marginTop: '9px',
						}}>
						{pages.map((page, index) => (
							<button
								style={{ width: '90%', color: 'white'}}
								key={`page-${inx}-${index}`}
								className={page === 'Inicio' ? 'inicio-item' : 'normal-item'}
								onClick={() => handlePageClick(page)}>
								{page.replace(/_/g, ' ')}
							</button>
						))}
					</div>
				</div>
				</React.Fragment>

			))}
		</div>
		</header>
	);
}




export default Nav_header;