window.onload = () => {
	if (localStorage.getItem('which-game')) {
		change(localStorage.getItem('which-game'), true)
	} else {

	}
}


function change(who, no_reload) {
	if ('rasmus mads'.includes(who.toLowerCase())) {
		let script = document.createElement('script')
		script.src = who + '.js'

		document.body.appendChild(script)

		localStorage.setItem('which-game', who)

		document.getElementById(who).classList.add('selected')

		if (!no_reload) window.location.reload()
	}
}