var cards = ["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2]
var points = document.getElementById("points")
var start = document.getElementById("start")
var draw = document.getElementById("draw")
var result = document.getElementById("result")
var end = document.getElementById("end")
var enemyPoints = document.getElementById("enemyPoints")
var cardsValue
var cardPicked
var enemyCardValue
draw.disabled = true
end.disabled = true
function startFunc() {
	start.disabled = true
	cardsValue = undefined
	enemyCardValue = undefined
	result.innerHTML = ""
	points.innerHTML = 0
	enemyPoints.innerHTML = 0
	var cardOne = cards[Math.floor(Math.random() * (12 - 0 + 1) + 0)]
	var cardTwo = cards[Math.floor(Math.random() * (12 - 0 + 1) + 0)]
	console.log(cardOne, cardTwo)
	if (cardOne == "A") {
		cardOne = 11
	}
	else if (cardOne == "K" || cardOne == "Q" || cardOne == "J") {
		cardOne = 10
	}
	if (cardTwo == "A") {
		cardTwo = 11
	}
	else if (cardTwo == "K" || cardTwo == "Q" || cardTwo == "J") {
		cardTwo = 10
	}
	cardsValue = cardOne + cardTwo
	points.innerHTML = cardsValue
	end.disabled = false
	if (cardOne+cardTwo < 21)	{
		draw.disabled = false	
	}
}
function drawFunc() {
	if (cardsValue <= 21) {
		cardPicked = cards[Math.floor(Math.random() * (12 - 0 + 1) + 0)]
		console.log(cardPicked)
		if (cardPicked == "A") {
			cardPicked = 1
		}
		if (cardPicked == "K" || cardPicked == "Q" || cardPicked == "J") {
			cardPicked = 10
		}
		cardsValue += cardPicked
		points.innerHTML = cardsValue
		if (cardsValue >= 21) {
			draw.disabled = true
		}
	} 
}
function randomCard() {
	cardPicked = cards[Math.floor(Math.random() * (12 - 0 + 1) + 0)]
	if (cardPicked == "A") {
			cardPicked = 1
	}
	if (cardPicked == "K" || cardPicked == "Q" || cardPicked == "J") {
			cardPicked = 10
	}
	return cardPicked
}
function endFunc() {
	enemyDraw()
	end.disabled = true
	draw.disabled = true
	enemyPoints.innerHTML = enemyCardValue
	if (cardsValue == 21 && enemyCardValue != 21 || cardsValue > enemyCardValue && cardsValue < 21 || cardsValue < enemyCardValue && enemyCardValue > 21) {
		result.innerHTML = "You Won!"
	}
	else if (cardsValue == enemyCardValue) {
		result.innerHTML = "It's a Draw!"
	}
	else {
		result.innerHTML = "You Lost!"
	}
	start.innerHTML = "Try Again"
	start.disabled = false
	console.log(result.innerHTML)
}
function enemyDraw() {
	if (enemyCardValue == undefined) {
		var cardOne = cards[Math.floor(Math.random() * (12 - 0 + 1) + 0)]
		var cardTwo = cards[Math.floor(Math.random() * (12 - 0 + 1) + 0)]
		console.log(cardOne, cardTwo)
		if (cardOne == "A") {
			cardOne = 11
		}
		else if (cardOne == "K" || cardOne == "Q" || cardOne == "J") {
			cardOne = 10
		}
		if (cardTwo == "A") {
			cardTwo = 11
		}
		else if (cardTwo == "K" || cardTwo == "Q" || cardTwo == "J") {
			cardTwo = 10
		}
		enemyCardValue = cardOne + cardTwo
		console.log(enemyCardValue)
	}
	for (0; enemyCardValue < 11; 0) {
		cardPicked = randomCard()
		enemyCardValue += cardPicked
		console.log(enemyCardValue)
	}
	if (enemyCardValue == 12 && Math.random() < 0.9) {
		cardPicked = randomCard()
		enemyCardValue += cardPicked
		console.log(enemyCardValue)
	}
	if (enemyCardValue == 13 && Math.random() < 0.8) {
		cardPicked = randomCard()
		enemyCardValue += cardPicked
		console.log(enemyCardValue)
	}
	if (enemyCardValue == 14 && Math.random() < 0.7) {
		cardPicked = randomCard()
		enemyCardValue += cardPicked
		console.log(enemyCardValue)
	}
	if (enemyCardValue == 15 && Math.random() < 0.6) {
		cardPicked = randomCard()
		enemyCardValue += cardPicked
		console.log(enemyCardValue)
	}
	if (enemyCardValue == 16 && Math.random() < 0.5) {
		cardPicked = randomCard()
		enemyCardValue += cardPicked
		console.log(enemyCardValue)
	}
	if (enemyCardValue == 17 && Math.random() < 0.4) {
		cardPicked = randomCard()
		enemyCardValue += cardPicked
		console.log(enemyCardValue)
	}
	if (enemyCardValue == 18 && Math.random() < 0.3) {
		cardPicked = randomCard()
		enemyCardValue += cardPicked
		console.log(enemyCardValue)
	}
	if (enemyCardValue == 19 && Math.random() < 0.2) {
		cardPicked = randomCard()
		enemyCardValue += cardPicked
		console.log(enemyCardValue)
	}
	if (enemyCardValue == 20 && Math.random() < 0.1) {
		cardPicked = randomCard()
		enemyCardValue += cardPicked
		console.log(enemyCardValue)
	}
}