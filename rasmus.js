const possibleCards = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2]


// knapper
const startBtn = document.getElementById('start')
const drawBtn = document.getElementById('draw')
const endBtn = document.getElementById('end')


// labels
const playerPointsLbl = document.getElementById('points')
const enemyPointsLbl = document.getElementById('enemyPoints')
const resultLbl = document.getElementById('result')


window.addEventListener('load', reset(true))


function reset(hardReset) {
	startBtn.disabled = !hardReset
	startBtn.innerText = 'Start'
	drawBtn.disabled = hardReset
	endBtn.disabled = hardReset

	playerPointsLbl.innerText = 0
	enemyPointsLbl.innerText = 0
	resultLbl.innerText = ''

	if (!hardReset) startFunc()
}



function startFunc() {
	if (resultLbl.innerText == '') {
		// fordi så er spillet ikke afsluttet endnu

		// draw two cards
		drawCard(playerPointsLbl, 2)
		startBtn.disabled = true

		drawBtn.disabled = (Number(playerPointsLbl.innerText) < 21) ? false:true
		endBtn.disabled = false
	} else {
		reset()
	}
}


function drawFunc() {
	let totalPoints = drawCard(playerPointsLbl)

	if (totalPoints >= 21) {
		endBtn.click()
	}
}


function endFunc() {
	drawBtn.disabled = true
	endBtn.disabled = true

	// dealeren bliver ved med at trække hvis hans point er mindre end 17
	while (Number(enemyPointsLbl.innerText) < 17) {
		drawCard(enemyPointsLbl)
	}


	// spillerens point
	let playerPoints = Number(playerPointsLbl.innerText)
	// dealerens points
	let dealerPoints = Number(enemyPointsLbl.innerText)

	resultLbl.innerText = 'Du tabte!' // bliver alligevel overskrevet, hvis man vinder
	if ( playerPoints <= 21 && (dealerPoints <= playerPoints || dealerPoints > 21) )
		resultLbl.innerText = 'Du vandt!'

	startBtn.disabled = false
	startBtn.innerText = 'Prøv igen'
}


function drawCard(label, opt_iterations) { // opt = optional
	let lblValue = Number(label.innerText)
	let randomCard = possibleCards[Math.floor(Math.random() * (13) + 0)]

	let cardValue = ('KQJ'.includes(randomCard)) ? 10 : randomCard

	if (randomCard == 'A') {
		cardValue = 1 // bliver overskrevet
		if (lblValue + 11 <= 21) cardValue = 11
	}

	label.innerText = lblValue + cardValue

	if (opt_iterations > 1)
		return drawCard(label, opt_iterations - 1)

	return Number(label.innerText)
}