import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { currentUrl } from './Other/Global_vars.js';
import { Inicio, Instalando_Python, Familiarizandote_con_Thony, Creando_variables, Ejercicios_1, Tipos_de_datos, Estableciendo_el_tipo_de_dato, Numeros_en_python, Ejercicios_2, Strings_y_Comentarios, Ejercicios_3, Valores_Booleanos, Ejercicios_4, Operadores_en_Python, Ejercicios_5 } from './Pages/First_lesson';
import { Los_condicionales, Uso_del_if, Uso_del_while, Ejercicios_6, El_array, Funciones_utiles_listas, Ejercicios_7, El_loop_for, Ejercicios_8 } from './Pages/Second_lesson.js';
import { Diccionarios, Ejercicios_9, Las_Funciones, Ejercicios_10 } from './Pages/Third_lesson.js';
import { user, changeUser } from './Other/Server_communications.js';
import { Log_in_Page } from './Pages/Miscellaneous_pages.js';

const pages = [
    ['', Inicio],
    ['Inicio_de_Sesion', Log_in_Page],
    ['Inicio', Inicio],
    ['Instalando_Python', Instalando_Python],
    ['Familiarizandote_con_Thony', Familiarizandote_con_Thony],
    ['Creando_variables', Creando_variables],
    ['Ejercicios_1', Ejercicios_1],
    ['Tipos_de_datos', Tipos_de_datos],
    ['Estableciendo_el_tipo_de_dato', Estableciendo_el_tipo_de_dato],
    ['Numeros_en_python', Numeros_en_python],
    ['Ejercicios_2', Ejercicios_2],
    ['Strings_y_Comentarios', Strings_y_Comentarios],
    ['Ejercicios_3', Ejercicios_3],
    ['Valores_Booleanos', Valores_Booleanos],
    ['Ejercicios_4', Ejercicios_4],
    ['Operadores_en_Python', Operadores_en_Python],
    ['Ejercicios_5', Ejercicios_5],
    ['Los_condicionales', Los_condicionales],
    ['Uso_del_if', Uso_del_if],
    ['Uso_del_while', Uso_del_while],
    ['Ejercicios_6', Ejercicios_6],
    ['El_array', El_array],
    ['Funciones_utiles_listas', Funciones_utiles_listas],
    ['Ejercicios_7', Ejercicios_7],
    ['El_loop_for', El_loop_for],
    ['Ejercicios_8', Ejercicios_8],
    ['Diccionarios', Diccionarios],
    ['Ejercicios_9', Ejercicios_9],
    ['Las_Funciones', Las_Funciones],
    ['Ejercicios_10', Ejercicios_10],
];

function App() {
    return (
        <Router>
            <Routes>
                {pages.map(([path, Component], index) => (
                    <Route key={index + 1} path={`/${path}`} element={<Component />} />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
