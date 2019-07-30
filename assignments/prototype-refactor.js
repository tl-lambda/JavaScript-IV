/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
	constructor(attr){
		this.createdAt = Date.now();
		this.dimensions = attr.dimensions;
	};

	destroy(){
		console.log(`${this.name} was removed form the game`);
	}
}

class CharacterStats extends GameObject {
	constructor(attr){
		super(attr)
		this.healthPoints = attr.healthPoints
		this.name = attr.name
	}
	takeDamage(){
		console.log(`${this.name} took damage`)
	}
}

class Humanoid extends CharacterStats {
	constructor(attr){
		super(attr)
		this.faction = attr.faction
		this.weapons = attr.weapons
		this.language = attr.language
		this.team = attr.team
	}

	greet(){
		return `${this.name} offers a greeting in ${this.language}`
	}
}