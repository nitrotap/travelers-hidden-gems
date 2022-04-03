displayingNewUserForm = false;

function init() {
	const emailInputEl = document.querySelector('#email-input');
	const usernameInputEl = document.querySelector('#username-input');
	const passwordInputEl = document.querySelector('#password-input');
	if (emailInputEl) { emailInputEl.value = null };
	if (usernameInputEl) { usernameInputEl.value = null };
	if (passwordInputEl) { passwordInputEl.value = null };
}
function switchForms() {
	// event.preventDefault();
	console.log('click');
	init();
	const formLabelEl = document.querySelector('#form-label');
	const emailInputEl = document.querySelector('.signup-form');
	const submitButtonEl = document.querySelector('#input-submit');
	const switchFormsButtonEl = document.querySelector('#switch-forms');
	
	if(!displayingNewUserForm) {
		displayingNewUserForm = true;
		formLabelEl.innerText = 'New User Signup';
		emailInputEl.style.display = 'inline';
		submitButtonEl.innerText = 'signup';
		switchFormsButtonEl.innerText = 'Have a login? - click here';
		return;
	}
	displayingNewUserForm = false;
	formLabelEl.innerText = 'User Login';
	emailInputEl.style.display = 'none';
	submitButtonEl.innerText = 'login';
	switchFormsButtonEl.innerText = 'New user? - click here';
	return;
}
async function inputFormHandler(event) {
	event.preventDefault();

	const username = document.querySelector('#username-input').value.trim();
	const email = document.querySelector('#email-input').value.trim();
	const password = document.querySelector('#password-input').value.trim();
	console.log(username, email, password, displayingNewUserForm)
	if(!displayingNewUserForm) {
		if (email && password) {
			const response = await fetch('/api/users/login', {
				  method: 'post',
				  body: JSON.stringify({
				username,
				password
				  }),
				  headers: { 'Content-Type': 'application/json' }
			});
		
			if (response.ok) {
				  document.location.replace('/');
			} else {
				  alert(response.statusText);
			}
		  }
	} else {
		if (username && email && password) {
			const response = await fetch('/api/users', {
				method: 'post',
				body: JSON.stringify({
					username,
					email,
					password
				}),
				headers: { 'Content-Type': 'application/json' }
			});
	  
			// check the response status
			if (response.ok) {
				console.log('success');
			} else {
				alert(response.statusText);
			}
		}
	}

}
  
document.querySelector('#input-submit').addEventListener('click', inputFormHandler);
document.querySelector('#switch-forms').addEventListener('click', switchForms);

init();