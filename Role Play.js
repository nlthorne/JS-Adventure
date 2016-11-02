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
		"questObjective": "It is early in the morning and you feel a rumble in your stomach. You believe that you are hungry but are unsure where to get food. While wandering through the woods you come across a batch of off-colored berries. Do you want to pick the berries to fight the hungry?",
		"questWinResult": "The berries satisfy your hunger and feel much better!",
		"questLoseResult" : "The berries are poisionous! You being to feel sick and throw up every where.",
		"questXp": 50,
		"questGold": 20,
		"chanceOfDamage": 5
	},
	"questTwo" : {
		"questClass": "Resource",
		"questName": "Gather water",
		"questObjective": "Parched is an understatement and you must find water. You come across a riverbend of a darkish color and can not see the bottom. Do you wish to drink from the riverbend?",
		"questWinResult": "The water is refreshing and you are no longer thirsty. Today is a lovely, lovely day.",
		"questLoseResult" : "The water from the river bend tastes terrible! You look down the bend and see that it is attached to the city sewage.",
		"questXp": 75,
		"questGold": 35,
		"chanceOfDamage": 10
	},
	"questThree" : {
		"questClass": "Resource",
		"questName": "Gather wood",
		"questObjective": "The day has turned to night and you must gather wood to create a fire as the temperature is dropping at a rapid pace. You hear howling and screeching in the woods. Do you want to go and gather wood for the night?",
		"questWinResult": "A pack of wolves surround you. While waving your hands in the air, a giant bear storms through the area and takes out the wolves and lets you be. Although the encounter was close, you leave with no damage and gather enough wood for the month. Congratulations!",
		"questLoseResult" : "While chopping down a tree, a pack of wolves surround ready to attack. Although you were able to fend them off, you barely leave the wretched woods with your life.",
		"questXp": 100,
		"questGold": 50,
		"chanceOfDamage": 15
	},
	"questFour" : {
		"questClass": "Resource",
		"questName": "Build weapon",
		"questObjective": "After the previous encounter in the woods, you decide it is time to create a weapon to protect yourself from the evils. With little experience in weapon crafting, incidents are bound to happen. Would you like to continue to create a weapon?",
		"questWinResult": "Other than a bruised thumb from swinging the hammer, you have successfully created a weapon to carry with you!",
		"questLoseResult" : "As expected, the weapon you were creating is slightly malfunctioning. During a test to see how it works, the weapon explodes in your hands and pieces pierce your skin.",
		"questXp": 125,
		"questGold": 75,
		"chanceOfDamage": 35
	},
	"questFive" : {
		"questClass": "Resource",
		"questName": "Gather information",
		"questObjective": "You hear that an evil is taking over the country and need to know more about what is happening. You must sneak into the local library, and Google what exactly this 'Evil' is and how to stop it. Do you dare risk your own life to save the world?",
		"questWinResult": "Sneaking behind trees and tumbling through bushes, you finally reach your destination. Breaking the glass to the back door, you realize it was left unlocked and walk in. After your search for 'Evil', you quickly realize it is not just one evil, but two...",
		"questLoseResult" : "SPOTTED! You are not so slick young padawan! The police arrive and you spend a night in jail with your new 'best friend', Bubba.",
		"questXp": 200,
		"questGold": 150,
		"chanceOfDamage": 50
	},
	"questSix" : {
		"questClass": "Resource",
		"questName": "Final Plan",
		"questObjective": "You must defeat the 'Evil' but you need a good plan to do such. After gathering all the information of what you know on the 'Evil' you realize this will not be as easy as it sounds. Do you want to come up with a grand final plan to take them down?",
		"questWinResult": "The plan is final and all possibily of threat has been eliminated.",
		"questLoseResult" : "The plan looks....well....terrible. You realize you are terrible at creating plans and find the closest bar. Waking up you realize you are in a hospital with alcohol poisioning.",
		"questXp": 350,
		"questGold": 275,
		"chanceOfDamage": 35
	}
};

var fightingQuests = {
	"questOne" : {
		"questClass": "Fighting",
		"questName" : "The training begins...",
		"questObjective" : "You need to begin your training! You find a large stick and need to head into the woods to practice hitting a tree. Do you want to go into the dangers of the woods to practice?",
		"questWinResult" : "You wack away at a tree for hours until the tree is ravished and torn. You can accomplish anything!",
		"questLoseResult" : "While practicing, you sprain your wrist when you strike the tree too hard.",
		"questXp" : 50,
		"questGold" : 50,
		"chanceOfDamage" : 5
	},
	"questTwo" : {
		"questClass": "Fighting",
		"questName" : "Kill the boar!",
		"questObjective" : "Feeling confident, you decide that you need to find a real opponent. 'A BOAR!' you scream aloud. Do you want to find a boar to increase your fighting techniques?",
		"questWinResult" : "You find a boar and raise your mighty stick in the air. 'Prepare for death' is what you bellow at the boar and attack. You have successfully eliminated the opponent.",
		"questLoseResult" : "Searching for a boar is not easy to find, but wolves are! Finding a wolf was easy enough, but not so easy to defeat. You leave defeated, battered, and bruised.",
		"questXp" : 75,
		"questGold" : 75,
		"chanceOfDamage" : 10
	},
	"questThree" : {
		"questClass": "Fighting",
		"questName" : "A new opponent arrives",
		"questObjective" : "You are abruptly awoken by a sound. Someone is nearby, but why here? Crawling to the top of the hill you spot three men in black suits. 'OVER THERE' one man says while pointing a finger at you. Do you stand and fight or run?",
		"questWinResult" : "You charge the three men while screaming 'THIS IS SPARTA!'. Right hook...one down. Roundhouse kick...two down. Third one can see the crazy in your eye, he turns and runs. You chase him down and bite off his ear. Inside his pocket you find a key.",
		"questLoseResult" : "As you charge the three men you trip over a rock and tumble down the hill to their feet. A large shock of electricity surrounds you, you have been tased. Awaking several hours later in a daze, you stumble across a key. What is this for?",
		"questXp" : 100,
		"questGold" : 150,
		"chanceOfDamage" : 20
	},
	"questFour" : {
		"questClass": "Fighting",
		"questName" : "Get to the choppa!",
		"questObjective" : "You enter an arena and in front of you is Arnold \"Freakin\" Schwarzenegger.  This could get ugly very quickly!",
 		"questWinResult" : "Wait, isn't Arnold Schwarzenegger like 100 years old?  Yeah, that was a super easy fight.  You da champ!",
 		"questLoseResult" : "Unfortunatly this is the Terminator version of Arnie and he even learned karate.  It wasn't even close!",
		"questXp" : 150,
		"questGold" : 250,
		"chanceOfDamage" : 35
	},
	"questFive" : {
		"questClass": "Fighting",
		"questName" : "Take out the paparazzi...",
		"questObjective" : "You are surrounded by a group of paparazzi.  They are really Yakuza gangsters in disguise.  You are surrounded and there is no way out!",
 		"questWinResult" : "You disarm one of the members and obtain his machine gun.  You use him as a sheild while killing off his friends.",
 		"questLoseResult" : "You are no match for them.  They beat you up and then they take a picture of you and send it to your mother.  Pretty Rude!",
		"questXp" : 300,
		"questGold" : 500,
		"chanceOfDamage" : 65
	},
	"questSix" : {
		"questClass": "Fighting",
		"questName" : "Free the country!",
		"questObjective" : "This is the final stage, you must defeat the two headed Hillary-Trump beast to truely make America great again!",
		"questWinResult" : "The Hillary-Trump beast punches you in the face but it's tiny little hands cannot hurt you!  You find the beast's weakness which is it's heart and slay the beast, thus freeing the people!",
 		"questLoseResult" : "The Hillary-Trump beast grabbed you by your pussy taking away all of your health points.  You wonder if this fight was rigged but we will never know?",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	}
};

var exploreQuests = {
	"questOne" : {
		"questClass": "Explore",
		"questName" : "What's over there?",
		"questObjective" : "Your objective for the first exploration quest is to gain experience, collect gold and keep on surviving!",
 		"questWinResult" : "You have gained experience and gold without taking any damage!",
 		"questLoseResult" : "You are attacked by a wolf, you survived but have taken some damage",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	},
	"questTwo" : {
		"questClass": "Explore",
		"questObjective" : "On your journey you are stopped by one of the villages peasants asking for a donation",
 		"questWinResult" : "You give the kind gentleman some of your gold.  He is really a prince who is so impressed by your generosity the he gives you 1000 gold",
 		"questLoseResult" : "You tell the begger to get a job and he sends his dogs on you, the dogs have inflicted damage",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	},
	"questThree" : {
		"questClass": "Explore",
		"questName" : "What's in the box!",
		"questObjective" : "You enter a cave and after exploring for about an hour you find a jewel encrusted box",
 		"questWinResult" : "You open the box and it contains 1000 gold!  Today is your lucky day!!",
 		"questLoseResult" : "You open the box and a snake jumps out at you.  You are bitten but manage to suck out the poison.  You are alive but have taken damage",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	},
	"questFour" : {
		"questClass": "Explore",
		"questName" : "Is... is that what I think it is?",
		"questObjective" : "While exploring in the desert you come across an abandoned house in the middle of nowhere, you go in to investigate",
 		"questWinResult" : "The house belongs to a great wizard, he invites you in and feeds you.  Then you stab him in the back and take his gold",
 		"questLoseResult" : "You enter the old house and fall through the floor.  You are pissing blood.  You should really go to the hospital",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	},
	"questFive" : {
		"questClass": "Explore",
		"questName" : "Oh, a secret passage",
		"questObjective" : "You hear from one of the villagers that there is a secret passage by the old mill that will lead you into the castle",
 		"questWinResult" : "You find the secret passage behind and old bookshelf.  It leads to the castle vault.  Pay Dirt!!!",
 		"questLoseResult" : "You search all day and find nothing.  Then you realize that the whole village has been watching and laughing at you.  You are inflicted damage from a bruised ego!",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	},
	"questSix" : {
		"questClass": "Explore",
		"questName" : "Infiltrate the facility.",
		"questObjective" : "You found the secret passage and are deep inside the facility.  The village said there would be a great treasure beyond any amount of gold.",
		"questWinResult" : "You explore and find famous adult film star Alexis Texas being held prisoner.  You unlock the chains and are GREATLY rewarded!  Way better then gold!!",
 		"questLoseResult" : "You fall through a trap are attacked by alligators.  You'd be luck to survive...  You don't!",
		"questXp" : 500,
		"questGold" : 1000,
		"chanceOfDamage" : 100
	}
};

var resourceQuestLine = [];
var fightingQuestLine = [];
var exploreQuestLine = [];

questArray();

function getUser(){
	let userName = prompt("Enter a username: ");
	let user = new Player();
	
	setName.call(user, userName);
	return user;
}

function choosePath(user, choice){
	this.user = user;
	this.choice = choice;
	var everything = function(){
		return (user, choice);
	}
	window.location.href = "player.html";
}

function chooseQuest(questType, decision, nextQuest, user, choice){
	user = choosePath.call(user);
	choice = choosePath.call(choice);
	var completedQuests = [];
	displayPlayerInformation(user);
	do{
		if (questType == "resources"){
		for (var i=0; i < resourceQuestLine.length; i++){
			for (var j=0; j++ < completedQuests.length; j++){
				if (resourceQuestLine[i].id != completedQuests[j].id && resourceQuestLine[i].questClass != completedQuests[j].questClass){
					document.getElementById("questName").innerHTML = resourceQuestLine[i].questName;
					document.getElementById("questDescription").innerHTML = resourceQuestLine[i].questObjective;
					switch (decision){
						case "continue":
						completedQuests.push(resourceQuestLine[i]);
						computeQuestOutcome(resourceQuestLine[i].questWinResult, resourceQuestLine[i].questLoseResult, resourceQuestLine[i].questXp, resourceQuestLine[i].questGold, resourceQuestLine[i].chanceOfDamage, user);
						switch (nextQuest){
							case "continue":
							continue;
							
							case "quit":
							continueQuest = "quit";
							break;
						}
						break;
			
						case "back":
						window.history.back();
						break;
					}			
				}else{
					return undefined;
				}
			}
		}
	}
	else if (questType == "fighting"){
		for (var i=0; i < fightingQuestLine.length; i++){
			for (var j=0; j < completedQuests.length; j++){
				if (fightingQuestLine[i].id != completedQuests[j].id && fightingQuestLine[i].questClass != completedQuests[j].questClass){
					document.getElementById("questName").innerHTML = fightingQuestLine[i].questName;
					document.getElementById("questDescription").innerHTML = fightingQuestLine[i].questObjective;
					switch (decision){
						case "continue":
						completedQuests.push(fightingQuestLine[i]);
						computeQuestOutcome(fightingQuestLine[i].questWinResult, fightingQuestLine[i].questLoseResult, fightingQuestLine[i].questXp, fightingQuestLine[i].questGold, fightingQuestLine[i].chanceOfDamage, user);
						switch (nextQuest){
							case "continue":
							continue;
							
							case "quit":
							continueQuest = "quit";
							break;
						}
						break;
						
						case "back":
						window.history.back();
						break;
					}
				}else{
					return undefined;
				}
			}
		}
	}
	else if (questType == "explore"){
		for (var i=0; i < exploreQuestLine.length; i++){
			for (var j=0; j < completedQuests.length; j++){
				if (exploreQuestLine[i].id != completedQuests[j].id && exploreQuestLine[i].questClass != completedQuests[j].questClass){
					document.getElementById("questName").innerHTML = exploreQuestLine[i].questName;
					document.getElementById("questDescription").innerHTML = exploreQuestLine[i].questObjective;
					switch (decision){
						case "continue":
						completedQuests.push(exploreQuestLine[i]);
						computeQuestOutcome(exploreQuestLine[i].questWinResult, exploreQuestLine[i].questLoseResult, exploreQuestLine[i].questXp, exploreQuestLine[i].questGold, exploreQuestLine[i].chanceOfDamage, user);
						switch (nextQuest){
							case "continue":
							continue;
							
							case "quit":
							continueQuest = "quit";
							break;
						}
						break;
						
						case "back":
						window.history.back();
						break;
					}
				}else{
					return undefined;
				}
			}
		}
	}checkIfAlive();
	}while(checkIfAlive(user) = false);
	document.getElementById("gameOver").innerHTML = (user.name + " Score: \n\n" + user.getScore());
}

function computeQuestOutcome(questWinResult, questLoseResult, questXp, questGold, chanceOfDamage, user){
	var battleType = Math.floor((Math.random()*100)+1);
	if (battleType <= 50){
		if (chanceOfDamage <= user.getShortRange){
			document.getElementById("questResult").innerHTML = questWinResult;
			user.getGold(questGold);
			user.getExperiencePoints(questXp);
		}else{
			document.getElementById("questResult").innerHTML = questLoseResult;
			user.getExperiencePoints(questXp/2);
		}
	}
	else if (battleType > 50){
		if (chanceOfDamage <= user.getLongRange){
			document.getElementById("questResult").innerHTML = questWinResult;
			user.getGold(questGold);
			user.getExperiencePoints(questXp);
		}else{
			document.getElementById("questResult").innerHTML = questLoseResult;
			user.getExperiencePoints(questXp/2);
		}
	}
}

function checkIfAlive(user){
	this.isAlive = true
		if (user.getHealth() <= 0){
			this.isAlive = false;
		}
	return this.isAlive;
}

function Player(){
	this.name;
	var gold = 0;
	var healthPoints = 100;
	var playerLevel = 0;
	var experiencePoints = 0;
	var shortRange = 50;
	var longRange = 50;
	var playerScore = 0;
	
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
	this.getExperiencePoints = function(){
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
	this.calculateScore = function(){
		playerScore += ((gold*experiencePoints) + healthPoints);
	}
	this.getScore = function(){
		return playerScore;
	};
}
function setName(name){
	this.name = name;
}
function setRanges(shortRange, longRange){
	this.depleteShortRange(shortRange);
	this.addLongRange(longRange);
}

function setRangesForNinja(shortRange, longRange){
	this.addShortRange(shortRange);
	this.depleteLongRange(longRange);
}
// Classes
function cowboy(user){
	user = getUser()
	this.name = "Cowboy";
	this.description = ("A cowboy's weapon of choice is a six-shoter and has an outstanding long range shot\n\nAttributes: \n-5 to short range \n+10 to long range");
	var shortRange = 5;
	var longRange = 10;
	
	setRanges.apply(user, [shortRange, longRange]);
	
	choosePath("cowboy", user);
}

function ninja(user){
	user = getUser()
	this.name = "Ninja";
	this.description = "A ninja is a mercenary, highly trained in martial arts and stealth (ninjutsu) it's advantage is in short range attacks.  You won't know what hit you.\n\nAttributes: \n+10 to short range \n-5 to long range";
	user.addShortRange(10);
	user.depleteLongRange(5);

	//user.addShortRange(10);
	//user.depleteLongRange(5);	
	//choosePath("ninja");

	var shortRange = 10;
	var longRange = 5;
	
	var setRanges = setRangesForNinja.bind(user);
	setRanges(shortRange, longRange);
	
	choosePath("ninja", user);

}

function alien(user){
	user = getUser()
	this.name = "Alien";
	this.description = "Alien's are physically imposing.  They stand 8' tall and weigh 375 lbs.  Their weapon of choice is the probe.  They are very hard to kill!\n\nAttributes: \n+10 to player health";
	user.addHealth(10);
	
	choosePath("alien", user);
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
	this.description = "Samurai are fearsome warriors who are experts in jujitsu, kendo and archery.\n\nAttributes: \n-10 to short range \n+10 to long range";
	
	user.depleteShortRange(10);
	user.addLongRange(10);
}

function shinobi(user){
	this.name = "Shinobi";
	this.description = "Shinobi are super ninja's they are experts in espionage, sabotage, infiltration, assassination and guerrilla warfare\n\nAttributes: \n+10 to short range \n-10 to long range";
	user.addShortRange(10);
	user.depleteLongRange(10);
}

function gunslinger(user){
	this.name = "Gunslinger";
	this.description = "Gunslingers are flashy and confident New Age warriors that rely on a wide array of guns and powerful skills to deal as much damage as possible in a short amount of time to their enemies. \n\nAttributes: \n-10 to short range \n+10 to long range";
	user.depleteShortRange(10);
	user.addLongRange(10);
}

function brawler(user){
	this.name = "Brawler";
	this.description = "Brawler's are excellent at hand to hand combat and they have big knockout power!\n\nAttributes: \n+10 to short range \n-10 to long range";
	user.addShortRange(10);
	user.depleteLongRange(10);
}

function wookie(user){
	this.name = "Wookie";
	this.description = "Wookie's are a species of intelligent bipeds from the planet Kashyyyk.  They possess enormous strength and are armed with laser blasters\n\nAttributes: \n-10 to short range \n+10 to long range";
	user.depleteShortRange(10);
	user.addLongRange(10);
}

function luggabeast(user){
	this.name = "LuggaBeast"
	this.description = "Luggabeast are more machine than beast, this alien creature's pedigree is lost somewhere underneath all of those implants and armor. They stand 9' tall and weight 1.5 tons\n\nAttributes: \n+10 to short range \n-10 to long range";
	user.addShortRange(10);
	user.depleteShortRange(10);
}
// Long Range Weapons
function revolver(user){
	this.name = "Revolver";
	this.description = "A pistol with revolving chambers enabling several shots to be fired without reloading\n\nAttributes: \n+5 to long range \n-5 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(5);
	user.depleteShortRange(5);
}

function rifle(user){
	this.name = "Rifle";
	this.description = "A gun, especially one fired from shoulder level, having a long spirally grooved barrel intended to make a bullet spin and thereby have greater accuracy over a long distance.\n\nAttributes: \n+10 to long range \n-10 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(10);
	user.depleteShortRange(10);
}

function shuriken(user){
	this.name = "Shuriken";
	this.description = "A weapon in the form of a star with projecting blades or points, used as a missile in some martial arts.\n\nAttributes: \n+10 to long range \n-10 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(10);
	user.depleteShortRange(10);
}

function bowAndArrow(user){
	this.name = "Bow and Arrow";
	this.description = "A weapon consisting of arrows and the bow to shoot them. arrow - a projectile with a straight thin shaft and an arrowhead on one end.\n\nAttributes: \n+5 to long range \n-5 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(5);
	user.depleteShortRange(5);
}

function rayGun(user){
	this.name = "Ray Gun";
	this.description = "A gun causing injury or damage by the emission of rays.\n\nAttributes: \n+5 to long range \n-5 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(5);
	user.depleteShortRange(5);
}

function plasmaRifle(user){
	this.name = "Plasma Rifle";
	this.description = "A plasma weapon is a type of raygun that fires a stream, bolt(s), pulse or toroid of plasma\n\nAttributes: \n+10 to long range \n-10 to short range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addLongRange(10);
	user.depleteShortRange(10);
}
// Short Range Weapons
function bowieKnife(user){
	this.name = "Bowie Knife";
	this.description = "A long knife with a blade double-edged at the point.\n\nAttributes: \n+5 to short range \n-5 to long range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addShortRange(5);
	user.depleteLongRange(5);
}

function sword(user){
	this.name = "Sword";
	this.description = "A weapon with a long metal blade and a hilt with a hand guard, used for thrusting or striking\n\nAttributes: \n+10 to short range \n-10 to long range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addShortRange(10);
	user.depleteLongRange(10);
}

function katana(user){
	this.name = "Katana";
	this.description = "The katana is a sword characterized by its distinctive appearance: a curved, slender, single-edged blade with a circular or squared guard and long grip to accommodate two hand\n\nAttributes: \n+10 to short range \n-10 to long range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addShortRange(10);
	user.depleteLongRange(10);
}

function wakizashi(user){
	this.name = "Wakizashi";
	this.description = "A Japanese sword shorter than a katana.  The wakizashi being worn together with the katana was the official sign that the wearer was a samurai or swordsman of feudal JapanWakizashi description \n\nAttributes: \n+10 to short range \n-10 to long range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addShortRange(10);
	user.depleteLongRange(10);
}

function electron(user){
	this.name = "Electron";
	this.description = "Electron is an energy pulse weapons that disables it's victims on a sub-atomic level\n\nAttributes: \n+5 to short range \n-5 to long range";
	this.equip = function(){
		Object.assign(user);
	};
	user.addShortRange(5);
	user.depleteLongRange(5);
}

function probe(user){
	this.name = "Probe";
	this.description = "The 'A' probe is an alien's weapon of choice.  Once inserted in the victim, the victim will never regain 100% health\n\nAttributes: \n+10 to short range \n-10 to long range";
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
		resourceQuestLine[index] = new Quest(key, resourceQuests[key].questClass, resourceQuests[key].questName, resourceQuests[key].questObjective, resourceQuests[key].questWinResult, resourceQuests[key].questLoseResult, resourceQuests[key].questXp, resourceQuests[key].questGold, resourceQuests[key].chanceOfDamage);
		index++;
	}
	index = 0;
	for(var key in fightingQuests){
		fightingQuestLine[index] = new Quest(key, fightingQuests[key].questClass, fightingQuests[key].questName, fightingQuests[key].questObjective, fightingQuests[key].questWinResult, resourceQuests[key].questLoseResult, fightingQuests[key].questXp, fightingQuests[key].questGold, fightingQuests[key].chanceOfDamage);
		index++;
	}
	index = 0;
	for(var key in exploreQuests){
		exploreQuestLine[index] = new Quest(key, exploreQuests[key].questClass, exploreQuests[key].questName, exploreQuests[key].questObjective, exploreQuests[key].questWinResult, resourceQuests[key].questLoseResult, exploreQuests[key].questXp, exploreQuests[key].questGold, exploreQuests[key].chanceOfDamage);
		index++;
	}
}

function Quest(id, questClass, questName, questObjective, questWinResult, questLoseResult, questXp, questGold, chanceOfDamage){
	this.id = id;
	this.questClass = questClass
	this.questName = questName;
	this.questObjective = questObjective;
	this.questWinResult = questWinResult;
	this.questLoseResult = questLoseResult;
	this.questXp = questXp;
	this.questGold = questGold;
	this.chanceOfDamage = chanceOfDamage;
}

function displayPlayerInformation(user){
	document.getElementById("playerName").innerHTML = "Name: " + user.getName();
	document.getElementById("playerHealth").innerHTML = "Health: " + user.getHealth();
	document.getElementById("playerGold").innerHTML = "Gold: " + user.getGold();
	document.getElementById("playerXp").innerHTML = "Experience: " + user.getExperiencePoints();
	document.getElementById("playerShortRange").innerHTML = "Short Range: " + user.getShortRange();
	document.getElementById("playerLongRange").innerHTML = "Long Range: " + user.getLongRange();
}

function startQuest(){
	document.getElementById("resources").style.display = "none";
	document.getElementById("fighting").style.display = "none";
	document.getElementById("explore").style.display = "none";
}

function displayResourceQuest(){
	document.getElementById("resourceQuestOne").innerHTML = resourceQuestLine.questOne.description;
	document.getElementById("resourceQuestTwo").innerHTML = resourceQuestLine.questTwo.description;
	document.getElementById("resourceQuestThree").innerHTML = resourceQuestLine.questThree.description;
	document.getElementById("resourceQuestFour").innerHTML = resourceQuestLine.questFour.description;
	document.getElementById("resourceQuestFive").innerHTML = resourceQuestLine.questFive.description;
	document.getElementById("resourceQuestSix").innerHTML = resourceQuestLine.questFive.description;
}

function displayFightingQuest(){
	document.getElementById("fightingQuestOne").innerHTML = fightingQuestLine.questOne.description;
	document.getElementById("fightingQuestTwo").innerHTML = fightingQuestLine.questTwo.description;
	document.getElementById("fightingQuestThree").innerHTML = fightingQuestLine.questThree.description;
	document.getElementById("fightingQuestFour").innerHTML = fightingQuestLine.questFour.description;
	document.getElementById("fightingQuestFive").innerHTML = fightingQuestLine.questFive.description;
	document.getElementById("fightingQuestSix").innerHTML = fightingQuestLine.questSix.description;
}

function displayExploreQuest(){
	document.getElementById("exploreQuestOne").innerHTML = exploreQuestLine.questOne.description;
	document.getElementById("exploreQuestTwo").innerHTML = exploreQuestLine.questTwo.description;
	document.getElementById("exploreQuestThree").innerHTML = exploreQuestLine.questThree.description;
	document.getElementById("exploreQuestFour").innerHTML = exploreQuestLine.questFour.description;
	document.getElementById("exploreQuestFive").innerHTML = exploreQuestLine.questFive.description;
	document.getElementById("exploreQuestSix").innerHTML = exploreQuestLine.questSix.description;
}