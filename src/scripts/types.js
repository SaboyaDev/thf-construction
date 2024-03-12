import Typed from 'typed.js'

document.addEventListener('DOMContentLoaded', function () {
	var typed = new Typed('.typed', {
		strings: ['kitchen', 'bathroom', 'basement', 'home remodel'],
		typeSpeed: 80,
		loop: true,
		backSpeed: 30,
		cursorChar: '|',
		smartBackspace: false,
		backDelay: 5000,
	})
})
