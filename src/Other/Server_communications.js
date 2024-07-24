import { currentUrl } from './Global_vars.js'

var user = "Unregistered";

var session_timer = 0
var afk_timer = 0

var words = 0

function setCookie(name, value, daysToExpire) {
  let expires = "";
  if (daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
	return null;
}

function updateCookie(name, newValue, daysToExpire) {
  // Retrieve the existing cookie value
  let existingValue = getCookie(name);

  // Update the value
  existingValue = newValue;

  // Set the updated cookie
  setCookie(name, existingValue, daysToExpire);
}

function pageTimer() {
	afk_timer++;
	session_timer += (afk_timer <= 360) && 1;

	if (afk_timer == 360) {
		updateCookie('session', 0, 7);
		updateCookie('session_timer', 0, 7);
		sendPost({'user': user, 'operation': 'session', 'reason': 'timeout', 'time': session_timer});
		session_timer = 0;
	}
}

function sendPost(info) {
    console.log("sending");

    const url = `https://script.google.com/macros/s/AKfycbygpD0yO3rc3dF4r_hk7qbXlHvhOcECxP4hNpf9klimB_72WEv2PPlao5jW_Qtq2KxeAg/exec`;

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return response.text().then(text => {
                throw new Error(`Network response was not ok: ${response.statusText}. Response body: ${text}`);
            });
        }
    })
    .then(data => {
        console.log('Response data:', data);
    })
    .catch(error => {
        console.error('Error sending POST request:', error.message);
    });
}


function log_wordcount(n_words) {
	words = n_words
}

function changeUser(new_user) {
	user = new_user
}

function enterPage(n_words) {
	if (session_timer * 2.3 > n_words*(2/3)) {
		sendPost({'user': user, 'operation': 'page_read', 'words_read': parseInt(getCookie('words_last_page')), 'reading_type': 'normal'});
	} else {
		if (session_timer * 2.3 > n_words*(1/3)) {
			sendPost({'user': user, 'operation': 'page_read', 'words_read': parseInt(getCookie('words_last_page')), 'reading_type': 'fast'});
		}
	}
}

function check_user() {
	changeUser(getCookie("user"));
	console.log("logged");
	if (user == null) {
		if (window.location.href != currentUrl + '/#Inicio_de_Sesion') {
			window.location.href = currentUrl + `/#Inicio_de_Sesion`
		}
	}
}

function check_session() {
	
	console.log('session check:', getCookie('session'));
	
	if (getCookie('session') == null) {
		setCookie('session', 1, 0.1);
		sendPost({'user': user, 'operation': 'session', 'reason': 'start', 'time': 0});
		
	} else {
		updateCookie('session', 1, 0.1);
	}
}

// Events //

const UserInputComponent = () => {
	afk_timer = 0;
};

window.addEventListener('mousemove', UserInputComponent);

window.addEventListener('beforeunload', function(event) {
	console.log(session_timer);
	
	enterPage(words);
	
	sendPost({'user': user, 'operation': 'session', 'reason': 'refresh', 'time': session_timer});
});

// final setup //

check_user();

check_session();

setInterval(pageTimer, 1000);

// end of final setup //

export { user, changeUser, setCookie, sendPost, log_wordcount};