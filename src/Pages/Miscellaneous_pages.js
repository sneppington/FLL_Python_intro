import React from 'react';
import { currentUrl } from '../Other/Global_vars';
import { user, changeUser, setCookie, sendPost } from '../Other/Server_communications.js';
import '../Other/styles.css';

// functions //

function Handle_log_in(type) {
	if (type) {
		changeUser("Unregistered");
		
		setCookie('user', "Unregistered", 10);
		sendPost({'operation': 'user_login', 'user': "Unregistered"});
		
		window.location.href = currentUrl + `/#Inicio`;
		
		return;
	}
	
	const user_name = document.getElementById('NameInput').value.replace(/\s/g, '').toLowerCase();
	
	if (user_name.length > 4) {
		changeUser(user_name);
		
		setCookie('user', user_name, 10);
		sendPost({'operation': 'user_login', 'user': user_name});
		
		window.location.href = currentUrl + `/#Inicio`;
	}
}

// Pages //

function Log_in_Page() {
	return (
	<>
	<div style={{ backgroundColor: '#202022', display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
		<div style={{backgroundColor: '#282829', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 10px 10px 10px', height: '50vh', width: '50%', position: 'relative' }}>
			<h1>Antes de entrar</h1>
			<h2>Porfavor escriba su nombre y codigo</h2>
			<p/>
			<div>
				<input id='NameInput' className='answer_field'/>
				<button onClick={ () => Handle_log_in(false) } id='Login' className='NavButton' style={{ borderRadius: '3px' }}>Entrar</button>
				<button onClick={ () => Handle_log_in(true) } className='NavButton' style={{ borderRadius: '3px' }}>Saltar</button>
			</div>
		</div>
	</div>
	</>
  );
}

// End of Pages //


export { Log_in_Page };