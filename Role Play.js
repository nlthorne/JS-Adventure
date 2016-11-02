// Two player game
// Three choices a player can pick from when they begin the game: Alien, Ninja, Cowboy
// Goal of the game is to survive the longest while collecting gold.
// Upon death, score is determined by the amount of gold accumulated.
// Each player start at 100 health points which decrement (non-linearly) over the course of the game.
// Must be at least 5 minutes of gameplay.
var resourceQuests = {
	"questOne" : {
		"questClass": "Resource",
		"questName": "Gather food",
		"questObjective": "Increase experience points and gold at a low risk to user",
		"questResult": "Some text",
		"questXp": 50,
		"questGold": 20,
		"chanceOfDamage": 5
	},
	"questTwo" : {
		"questClass": "Resource",
		"questName": "Gather water",
		"questObjective": "Increase experience points and gold at a low risk to user",
		"questResult": "Some text",
		"questXp": 75,
		"questGold": 35,
		"chanceOfDamage": 10
	},
	"questThree" : {
		"questClass": "Resource",
		"questName": "Gather wood",
		"questObjective": "Increase experience points and gold at a low risk to user",
		"questResult": "Some text",
		"questXp": 100,
		"questGold": 50,
		"chanceOfDamage": 15
	},
	"questFour" : {
		"questClass": "Resource",
		"questName": "Build weapon",
		"questObjective": "Increase experience points and gold at a low risk to user",
		"questResult": "Some text",
		"questXp": 125,
		"questGold": 75,
		"chanceOfDamage": 35
	},
	"questFive" : {
		"questClass": "Resource",
		"questName": "Gather information",
		"questObjective": "Increase experience points and gold at a low risk to user",
		"questResult": "Some text",
		"questXp": 200,
		"questGold": 150,
		"chanceOfDamage": 50
	},
	"questSix" : {
		"questClass": "Resource",
		"questName": "Final Plan",
		"questObjective": "Increase experience points and gold at a low risk to user",
		"questResult": "Some text",
		"questXp": 350,
		"questGold": 275,
		"chanceOfDamage": 35
	}
};

var fightingQuests = {
	"questOne" : {
		"questClass": "Fighting",
		"questName" : "The training begins...",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 50,
		"questGold" : 50,
		"chanceOfDamage" : 5
	},
	"questTwo" : {
		"questClass": "Fighting",
		"questName" : "Kill the boar!",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 75,
		"questGold" : 75,
		"chanceOfDamage" : 10
	},
	"questThree" : {
		"questClass": "Fighting",
		"questName" : "A new opponent arrives",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 100,
		"questGold" : 150,
		"chanceOfDamage" : 20
	},
	"questFour" : {
		"questClass": "Fighting",
		"questName" : "Get to the choppa!",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 150,
		"questGold" : 250,
		"chanceOfDamage" : 35
	},
	"questFive" : {
		"questClass": "Fighting",
		"questName" : "Take out the paparazzi...",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 300,
		"questGold" : 500,
		"chanceOfDamage" : 65
	},
	"questSix" : {
		"questClass": "Fighting",
		"questName" : "Free the country!",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	}
};

var exploreQuests = {
	"questOne" : {
		"questClass": "Explore",
		"questName" : "What's over there?",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	},
	"questTwo" : {
		"questClass": "Explore",
		"questName" : "Ain't nobody got time for dat!",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	},
	"questThree" : {
		"questClass": "Explore",
		"questName" : "What's in the box!",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	},
	"questFour" : {
		"questClass": "Explore",
		"questName" : "Is... is that what I think it is?",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	},
	"questFive" : {
		"questClass": "Explore",
		"questName" : "Oh, a secret passage",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	},
	"questSix" : {
		"questClass": "Explore",
		"questName" : "Infiltrate the facility.",
		"questObjective" : "Increase experience points and gold at a high risk to user with increased results",
		"questResult" : "Some text",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	},
};
var quests = [];
var completedQuests = [];
questArray();
choosePath();

function choosePath(){
	let userName = prompt("Enter a username: ");
	let user = new Player();
	
	setName.call(user, userName);
	
	var choice = prompt("Choose a path " + user.name + ": \n\nCowboy \nNinja \nAlien");
	var confirmChoice = confirm("You chose the " + choice + " class. \n\nClass description: \n" + classDescriptionConvert(choice) + "\n\nPress OK to continue or Cancel to choose a different class");
	if (confirmChoice == true){
		txt = "You pressed OK!";
	} else {
		txt = "You pressed Cancel!";
		choosePath();
	}
	switch(choice.toLowerCase()){
		case "cowboy":
		Object.assign(new cowboy(user));
		storyline(user);
		break;
		
		case "ninja":
		Object.assign(new ninja(user));
		break;
		
		case "alien":
		Object.assign(new alien(user));
		break;
		
		default:
		alert("Invalid selection");
		choosePath()
		break;
	}
}

function classDescriptionConvert(choice){
	if (choice === "cowboy"){
		return cowboy.description;
	}
	else if (choice === "ninja"){
		return ninja.description;
	}
	else if (choice === "alien"){
		return alien.description;
	}
	else{
		alert("Invalid selection");
		choosePath();
	}
}
function Player(){
	this.name;
	var gold = 0;
	var healthPoints = 100;
	var playerLevel = 0;
	var experiencePoints = 0;
	var shortRange = 50;
	var longRange = 50;
	
	Player.prototype.getName = function(){
		return this.name;
	};
	this.addGold = function(amount){
		gold +=amount;
	};
	this.addHealth = function(amount){
		healthPoints +=amount;
	};
	this.addexperiencePoints = function(amount){
		experiencePoints +=amount;
	};
	this.increasePlayerLevel = function(amount){
		playerLevel +=amount;
	};
	this.addShortRange = function(amount){
		shortRange +=amount;
	};
	this.addLongRange = function(amount){
		longRange +=amount;
	};
	this.depleteHealth = function(amount){
		healthPoints -=amount;
	};
	this.depleteShortRange = function(amount){
		shortRange -=amount;
	};
	this.depleteLongRange = function(amount){
		longRange -=amount;
	};
	this.getGold = function(){
		return gold;
	};
	this.getHealth = function(){
		return healthPoints;
	};
	this.getexperiencePoints = function(){
		return experiencePoints;
	};
	this.getShortRange = function(){
		return shortRange;
	};
	this.getLongRange = function(){
		return longRange;
	};
	this.getPlayerLevel = function(){
		return playerLevel;
	};
	this.getTotalScore = function(){
		var calculateScore = function(){
			return gold * experiencePoints + healthPoints;
		};
		return calculateScore;
	};
}
function setName(name){
	this.name = name;
}
function setRanges(shortRange, longRange){
	this.depleteShortRange(shortRange);
	this.addLongRange(longRange);
}
// Classes
function cowboy(user){
	this.name = "Cowboy";
	this.description = ("Cowboy description \n\nAttributes: \n-5 to short range \n+10 to long range");
	var shortRange = 5;
	var longRange = 10;
	
	setRanges.apply(user, [shortRange, longRange]);	
}

function ninja(user){
	this.name = "Ninja";
	this.description = "Ninja description \n\nAttributes: \n+10 to short range \n-5 to long range";
	user.addShortRange(10);
	user.depleteLongRange(5);
}

function alien(user){
	this.name = "Alien";
	this.description = "Alien description \n\nAttributes: \n+10 to player health";
	user.addHealth(10);
}

function storyline(player1){
	var availableQuests = [];
	for(var i=0; i < quests.length; i++){
		if(quests[i].questClass == "Fighting"){
			return quests[i];
		}
		else if (quests[i].questClass == "Resources"){
			return quests[i];
		}
	}
	alert(quests[0].questXp);
}
// Sub-Classes
function chooseSubClass(user){
	var choice = alert("You are now a warrior! \nYou can now increase your skills.");
	retrieveSubClass(user);
	switch(choice.toLowerCase()){
		case 1:
		//choice method here
		break;
		
		case 2:
		//choice method here
		break;
		
		default:
		alert("Invalid selection");
		chooseSubClass(user);
		break;
	}
}

function retrieveSubClass(user){
	var subClassOptions = [];
	var optionOne;
	var optionTwo;
	if (user.choosePath.name == "cowboy"){
		optionOne = Object.assign(new gunslinger(user));
		optionTwo = Object.assign(new brawler(user));
	}
	else if (user.choosePath.name == "ninja"){
		optionOne = Object.assign(new samaruai(user));
		optionTwo = Object.assign(new shinobi(user));
	}
	else if (user.choosePath.name == "alien"){
		optionOne = Object.assign(new wookie(user));
		optionTwo = Object.assign(new luggabeast(user));
	}
	subClassOptions.push(optionOne,optionTwo);
	return subClassOptions;
}

function samaruai(user){
	this.name = "Samaruai";
	this.description = "Samaruai description \n\nAttributes: \n-10 to short range \n+10 to long range";
	
	user.depleteShortRange(10);
	user.addLongRange(10);
}

function shinobi(user){
	this.name = "Shinobi";
	this.description = "Shinobi description \n\nAttributes: \n+10 to short range \n-10 to long range";
	user.addShortRange(10);
	user.depleteLongRange(10);
}

function gunslinger(user){
	this.name = "Gunslinger";
	this.description = "Gunslinger description \n\nAttributes: \n-10 to short range \n+10 to long range";
	user.depleteShortRange(10);
	user.addLongRange(10);
}

function brawler(user){
	this.name = "Brawler";
	this.description = "Brawler description \n\nAttributes: \n+10 to short range \n-10 to long range";
	user.addShortRange(10);
	user.depleteLongRange(10);
}

function wookie(user){
	this.name = "Wookie";
	this.description = "Wookie description \n\nAttributes: \n-10 to short range \n+10 to long range";
	user.depleteShortRange(10);
	user.addLongRange(10);
}

function luggabeast(user){
	this.name = "LuggaBeast"
	this.description = "Luggabeast description \n\nAttributes: \n+10 to short range \n-10 to long range";
	user.addShortRange(10);
	user.depleteShortRange(10);
}
// Long Range Weapons
function revolver(user){
	this.name = "Revolver";
	this.description = "Revolover description \n\nAttributes: \n+5 to long range \n-5 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(5);
	user.depleteShortRange(5);
}

function rifle(user){
	this.name = "Rifle";
	this.description = "Rifle description \n\nAttributes: \n+10 to long range \n-10 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(10);
	user.depleteShortRange(10);
}

function shuriken(user){
	this.name = "Shuriken";
	this.description = "Shuriken description \n\nAttributes: \n+10 to long range \n-10 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(10);
	user.depleteShortRange(10);
}

function bowAndArrow(user){
	this.name = "Bow and Arrow";
	this.description = "Bow and Arrow description \n\nAttributes: \n+5 to long range \n-5 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(5);
	user.depleteShortRange(5);
}

function rayGun(user){
	this.name = "Ray Gun";
	this.description = "Ray gun description \n\nAttributes: \n+5 to long range \n-5 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(5);
	user.depleteShortRange(5);
}

function plasmaRifle(user){
	this.name = "Plasma Rifle";
	this.description = "Plasma rifle description \n\nAttributes: \n+10 to long range \n-10 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(10);
	user.depleteShortRange(10);
}
// Short Range Weapons
function bowieKnife(user){
	this.name = "Bowie Knife";
	this.description = "Bowie Knife description \n\nAttributes: \n+5 to short range \n-5 to long range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addShortRange(5);
	user.depleteLongRange(5);
}

function sword(user){
	this.name = "Sword";
	this.description = "Sword description \n\nAttributes: \n+10 to short range \n-10 to long range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addShortRange(10);
	user.depleteLongRange(10);
}

function katana(user){
	this.name = "Katana";
	this.description = "Katana description \n\nAttributes: \n+10 to short range \n-10 to long range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addShortRange(10);
	user.depleteLongRange(10);
}

function wakizashi(user){
	this.name = "Wakizashi";
	this.description = "Wakizashi description \n\nAttributes: \n+10 to short range \n-10 to long range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addShortRange(10);
	user.depleteLongRange(10);
}

function electron(user){
	this.name = "Electron";
	this.description = "Electron description \n\nAttributes: \n+5 to short range \n-5 to long range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addShortRange(5);
	user.depleteLongRange(5);
}

function probe(user){
	this.name = "Probe";
	this.description = "Probe description \n\nAttributes: \n+10 to short range \n-10 to long range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addShortRange(10);
	user.depleteShortRange(10);
}

function equipWeapon(weapon){
	var choice = prompt("Would you like to equip this weapon? \n\nYes \nNo");
	switch(choice.toLowerCase()){
		case "yes":
		weapon.equip(user);
		alert(weapon.name + " has been equipped.");
		break;
		
		case "no":
		alert(weapon.name + " has not been equipped");
		break;
		
		default:
		alert("Invalid selection");
		equipWeapon(weapon);
		break;
	}
}

function completedQuests(user){
	var nextQuest = [];
	for(var i=0; i < quests.length; i++){
		for(var c=0; c < completedQuests.length; c++){
			if (quests[i].id != completedQuests[c].id){
				nextQuest.push(quests[i]);
			}
			else {
				nextQuest.push(quests[i]++);
			}
		}
	}
	return nextQuest;
}

function questOptions(){
	var choice = prompt("Choose one of three options: ");
	switch(choice.toLowerCase()){
		case "resources":
		//does something
		break;
		
		case "fight":
		//does something else
		break;
	
		case "explore":
		// does something else
		break;
	
		default:
		alert("Invalid selection");
		questOptions();
		break;
	}
}

function takeDamage(){
	return damageTaken = Math.floor((playerLevel * fibonacci(1))/2);
}

function fibonacci(nth){
	if (nth == 1 || nth == 2){
		return 1;
	}else{
		return fibonacci(nth-1) + fibonacci(nth-2);
	}
}

function questArray(){
	var index = 0;
	for(var key in resourceQuests){
		quests[index] = new Quest(key, resourceQuests[key].questClass, resourceQuests[key].questName, resourceQuests[key].questObjective, resourceQuests[key].questResult, resourceQuests[key].questXp, resourceQuests[key].questGold, resourceQuests[key].chanceOfDamage);
		index++;
	}
	for(var key in fightingQuests){
		quests[index] = new Quest(key, fightingQuests[key].questClass, fightingQuests[key].questName, fightingQuests[key].questObjective, fightingQuests[key].questResult, fightingQuests[key].questXp, fightingQuests[key].questGold, fightingQuests[key].chanceOfDamage);
		index++;
	}
	for(var key in exploreQuests){
		quests[index] = new Quest(key, exploreQuests[key].questClass, exploreQuests[key].questName, exploreQuests[key].questObjective, exploreQuests[key].questResult, exploreQuests[key].questXp, exploreQuests[key].questGold, exploreQuests[key].chanceOfDamage);
		index++;
	}
}

function Quest(id, questClass, questName, questObjective, questResult, questXp, questGold, chanceOfDamage){
	this.id = id;
	this.questClass = questClass
	this.questName = questName;
	this.questObjective = questObjective;
	this.questResult = questResult;
	this.questXp = questXp;
	this.questGold = questGold;
	this.chanceOfDamage = chanceOfDamage;
}