document.addEventListener('DOMContentLoaded', () => {
	const signupBtn = document.getElementById('signup-btn');
	const loginBtn = document.getElementById('login-btn');
	const formContainer = document.getElementById('form-container');
	const welcomeContainer = document.getElementById('welcome-container');
	const loginError = document.getElementById('login-error');
	const signupError = document.getElementById('signup-error');
	const logintitle = document.getElementById('login');
    const signuptitle = document.getElementById('signup');
	const loginForm = document.querySelector('.login .center');
	const signupForm = document.querySelector('.signup');

    logintitle.addEventListener('click', (e) => {
		if (!loginForm.parentNode.classList.contains('slide-up')) {
			loginForm.parentNode.classList.add('slide-up');
			signupForm.classList.remove('slide-up');
		} else {
			loginForm.parentNode.classList.remove('slide-up');
			signupForm.classList.add('slide-up');
		}
    });

    signuptitle.addEventListener('click', (e) => {
		if (!signupForm.classList.contains('slide-up')) {
			signupForm.classList.add('slide-up');
			loginForm.parentNode.classList.remove('slide-up');
		} else {
			signupForm.classList.remove('slide-up');
			loginForm.parentNode.classList.add('slide-up');
		}
	});

	signupBtn.addEventListener('click', () => {
		const name = document.getElementById('name').value.trim();
		const email = document.getElementById('signup-email').value.trim();
		const password = document.getElementById('signup-password').value.trim();

		if (!name || !email || !password) {
			signupError.style.display = 'block';
		} else {
			signupError.style.display = 'none';
			
			loginForm.parentNode.classList.remove('slide-up');
			signupForm.classList.add('slide-up');
		}
	});

	loginBtn.addEventListener('click', () => {
		const email = document.getElementById('login-email').value.trim();
		const password = document.getElementById('login-password').value.trim();

		if (!email || !password) {
			loginError.style.display = 'block';
		} else {
			loginError.style.display = 'none';
			formContainer.style.display = 'none';
			welcomeContainer.style.display = 'block';
		}
	});
});
