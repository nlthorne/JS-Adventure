// Two player game
// Three choices a player can pick from when they begin the game: Alien, Ninja, Cowboy
// Goal of the game is to survive the longest while collecting gold.
// Upon death, score is determined by the amount of gold accumulated.
// Each player start at 100 health points which decrement (non-linearly) over the course of the game.
// Must be at least 5 minutes of gameplay.

function getUser(){
	var userName = new Player(prompt("Enter your username: "));
}

function introduction(){
	
}

function choosePath(user){
	var choice = prompt("Choose a path: \n\nCowboy \nNinja \nAlien")
	switch(choice){
		case "cowboy":
		user = new cowboy(player);
		break;
		
		case "ninja":
		user = new ninja(player);
		break;
		
		case "alien":
		user = new alien(player);
		break;
		
		default:
		alert("Invalid selection");
		choosePath(user)
		break;
	}
}
function Player (user){
	var healthPoints = 100;
	var playerLevel = 0;
	var expierencePoints = 0;
	var shortRangeMax = 100;
	var shortRangeMin = 0;
	var longRangeMax = 100;
	var longRangeMin = 0;
	var shortRange = 50;
	var longRange = 50;
}
// Classes
function cowboy(player){
	var shortRange = player.shortRange - 5;
	var longRange = player.longRange + 10;
}

function ninja(player){
	var shortRange = player.shortRange + 10;
	var longRange = player.longRange - 5;
}

function alien(player){
	var healthPoints = player.healthPoints + 10;
}
// Sub-Classes
function samaruai(ninja, player){
	var shortRange = player.shortRange - 10;
	var longRange = player.longRange + 10;
}

function shinobi(ninja, player){
	var shortRange = player.shortRange + 10;
	var shortRange = player.longRange - 10;
}

function gunslinger(cowboy, player){
	var shortRange = player.shortRange - 10;
	var longRange = player.longRange + 10;
}

function brawler(cowboy, player){
	var shortRange = player.shortRange + 10;
	var longRange = player.longRange - 10;
}

function wookie(alien, player){
	var shortRange = player.shortRange - 10;
	var longRange = player.longRange + 10;
}

function luggabeast(alien, player){
	var shortRange = player.shortRange + 10;
	var longRange = player.longRange - 10;
}
// Weapons
function revolver(cowboy, player){
	var longRange = player.longRange + 10;
}



function fibonacci(nth){
	if (nth == 1 || nth == 2){
		return 1;
	}else{
		return fibonacci(nth-1) + fibonacci(nth-2);
	}
}