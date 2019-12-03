var iFileName = "ua_20191125_Psionics.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Psionics article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:Psi"] = {
	name : "Unearthed Arcana: Psionics",
	abbreviation : "UA:Psi",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-PsychicSoulPsionics.pdf",
	date : "2019/11/25"
};

// Add a subclass for the Fighter
AddSubClass("fighter", "psychic warrior", {
	regExpSearch : /^(?=.*psychic)(?=.*warrior).*$/i,
	subname : "Psychic Warrior",
	source : ["UA:Psi", 1],
	fullname : "Psychic Warrior",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Psionic Armament",
			source : ["UA:Psi", 1],
			minlevel : 3,
			description : desc([
				"I choose between Augmented Defenses or Augmented Strikes every long rest",
				"Augmented Defense: as a reaction when a creature I can see within 30 ft of me takes damage, I can intercept",
				"I reduce the damage the target takes by 1d10 (min 0 damage)",
				"At 10th level, the die increases to 1d12",
				"Augmented Strikes: once on each of my turns, I can deal 1d4 psychic damage to a creature I hit with a weapon attack",
				"At 10th level, the damage increases to 1d6"
			]),
		},
		"subclassfeature3.1" : {
			name : "Telekinetic Hand",
			source : ["UA:Psi", 1],
			minlevel : 3,
			description : desc([
				"I know the Mage Hand cantrip and can cast it without components",
				"The hand created can be invisible",
				"Intelligence is my spellcasting ability for this"
			]),
			spellcastingBonus : {
				name : "Telekinetic Hand",
				spells : ["mage hand"],
				selection : ["mage hand"],
				firstCol : 'atwill'
			},
			spellChanges : {
				"mage hand" : {
					components : "",
					changes : "I can cast mage hand without material components and the hand can be invisible."
				}
			}
		},
		"subclassfeature7" : {
			name : "Strength of Mind",
			source : ["UA:Psi", 1],
			minlevel : 7,
			description : desc([
				"As a bonus action, I can attempt to force a creature within 20 feet of me to move",
				"The creature must make a Strength save against DC 8 + my proficiency bonus + my Intelligence modifier",
				"On a fail, the creature takes 2d6 + my Intelligence modifier in psychic damage and is moved 15 feet closer or further",
				"On a success, the creature takes half damage and isn't moved"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Telekinetic Bulwark",
			source : ["UA:Psi", 1],
			minlevel : 10,
			description : desc([
				"When I take the Attack action, I can forgo one of my attacks to create a 10-foot radius aura for 1 minute or until I'm incapacitated",
				"Me and allies in the aura have half cover and advantage on Strength saves",
				"I can use this feature again once I use my Second Wind"
			]),
			recovery : "long rest"
		},
		"subclassfeature15" : {
			name : "Agonizing Strikes",
			source : ["UA:Psi", 2],
			minlevel : 15,
			description : desc([
				"When I hit a creature with a weapon attack, I can deal an additional 2d10 psychic damage to the target and force it to make a Constitution save with a DC of 8 + my proficiency bonus + my Intelligence modifier",
				"If the target fails, it falls prone and has disadvantage on all ability checks until the end of my next turn"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Psychic Dreadnought",
			source : ["UA:Psi", 2],
			minlevel : 18,
			description : desc([
				"When I take damage, I can give myself multiple benefits for a minute or until I am incapacitated as a reaction",
				"\u2022 I regain 10 missing hit points at the start of my turn",
				"\u2022 My walking speed increases by 10 feet",
				"\u2022 If I am prone, I can stand up using 5 feet of movement"
			]),
			recovery : "long rest",
			action : ["reaction", ""]
		}
	}
});
// Add a subclass for the Rogue
AddSubClass("rogue", "rogue-soul knife", {
	regExpSearch : /^(?=.*soul)(?=.*knife).*$/i,
	subname : "Soulknife",
	source : ["UA:Psi", 2],
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Psychic Blade",
			source : ["UA:Psi", 2],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can create one or two magic psychic blades from my hands",
				"While the blades are manifested, I cannot use the hand creating them",
				"They can be dismissed without an action and they disappear if I am incapacitated",
				"If thrown, they vanish after hitting or missing"
			]),
			weaponsAdd : ["Psychic Blade"],
			weaponOptions : [{
				regExpSearch : /^(?=.*psychic)(?=.*blade).*$/i,
				name : "Psychic Blade",
				source : ["UA:Psi", 2],
				list : "melee",
				ability : 1,
				type : "Simple",
				damage : [1, 6, "psychic"],
				range : "Melee, 30/60 ft",
				description : "Finesse, light, thrown",
				abilitytodamage : true,
				monkweapon : true
		}]
		},
		"subclassfeature3.1" : {
			name : "Psionic Enhancment",
			source : ["UA:Psi", 2],
			minlevel : 3,
			description : desc([
				"I gain one of the following benefits when I finish a long rest, which lasts until I finish a long rest",
				"\u2022 I can communicate telepathically with any creature I can see within 30 feet of me \nIf a creature can speak at least one language, it can respond to me telepathically",
				"\u2022 My walking speed increases by 5 feet",
				"\u2022 My hit point maximum and my current hit points increase by an amount equal to my Intelligence modifier plus my rogue level"
			])
		},
		"subclassfeature9" : {
			name : "Terrifying Blade",
			source : ["UA:Psi", 3],
			minlevel : 9,
			description : desc([
				"When I damage a creature with a Psychic Blade I can force it to make a Wisdom save, with a DC of 8 + my proficiency bonus + my Intelligence modifier",
				"If the creature fails, it is frightened of me until the start of my next turn",
				"If the creature succeeds, it is not frightened and is immune to my Terrifying Blade for 24 hours"
			]),
		},
		"subclassfeature13" : {
			name : "Psychic Veil",
			source : ["UA:Psi", 3],
			minlevel : 13,
			description : desc([
				"As an action, I can magically turn myself and everything I am wearing and carrying invisible",
				"This lasts until for 10 minutes, I make an attack or force a creature to make a save"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action : ["action", ""]
		},
			"subclassfeature17" : {
			name : "Rend Mind",
			source : ["UA:Psi", 3],
			minlevel : 17,
			description : desc([
				"As an action with a Psychic Blade out, I can force a creature within 30 feet to make an Intelligence saving throw with a DC of 8 + my proficiency modifier + my Intelligence modifier",
				"If the target fails, it takes 12d6 psychic damage and is stunned until the start of my next turn",
				"If the target succeeds, it takes half damage and isn't stunned",
				"If I am hidden from the target, it has disadvantage on the save"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action : ["action", ""]
		}
	}
});
AddSubClass("wizard", "psionics", {
	regExpSearch : /psionics|psion/i,
	subname : "Psionics",
	source : ["UA:Psi", 3],
	fullname : "Psion",
	features : {
		"subclassfeature2" : {
			name : "Psionic Focus",
			source : ["UA:Psi", 3],
			minlevel : 2,
			description : desc([
				"I gain an item called a Psionic Focus",
				"While it is on my person, I can use it as a spellcasting focus",
				"While it is on my person, I can reroll any damage dice that rolls a 1 on any Wizard spell that deals force or psychic damage, but I must use the new roll",
				"If I lose the Psionic focus, I magically recreate it by meditating for 1 hour during a short or long rest"
			])
		},
		"subclassfeature2.1" : {
			name : "Psionic Devotion",
			source : ["UA:Psi", 4],
			minlevel : 2,
			description : "\n   " + "Choose Friends, Mage Hand, or Message with the \"Choose Feature\" button",
				choices : ["Friends", "Mage Hand", "Message"],
				"friends" : {
					name : "Psionic Devotion: Friends",
					description : "\n   " + "I learn the Friends cantrip, and when the spell ends, the target doesn't become hostile to me",
					spellcastingBonus : {
						name : "Psionic Devotion: Friends",
						spells : ["friends"],
						selection : ["friends"],
						firstCol : 'atwill'
						},
					spellChanges : {
						"friends" : {
						changes : "I can cast friends, and when the spell ends, the target doesn't become hostile to me."
						}
					}
				},
				"mage hand" : {
					name : "Psionic Devotion: Mage Hand",
					description : "\n   " + "I learn the Mage Hand cantrip, and I can make the hand invisible when I cast the spell, and controlling the spell is only a bonus action for me",
					spellcastingBonus : {
						name : "Psionic Devotion: Mage Hand",
						spells : ["mage hand"],
						selection : ["mage hand"],
						firstCol : 'atwill'
						},
					spellChanges : {
						"mage hand" : {
						changes : "I can cast mage hand, which can be invisible, and I can use a bonus action to control it."
						}
					}
				},
				"message" : {
					name : "Psionic Devotion: Message",
					description : "\n   " + "I learn the Message cantrip, and I don't need to point towards the target or whisper my message out loud",
					spellcastingBonus : {
						name : "Psionic Devotion: Message",
						spells : ["message"],
						selection : ["message"],
						firstCol : 'atwill'
						},
					spellChanges : {
						"message" : {
						changes : "I can cast maessage, and I don't need to point at a target or whisper the message out loud."
						}
					}
				}
		},
		"subclassfeature6" : {
			name : "Thought Form",
			source : ["UA:Psi", 4],
			minlevel : 6,
			description : desc([
				"As a bonus action while carrying my Psionic Focus, I can magically transform into psionic energy for 10 minutes",
				"While transformed, I am the same size as normal and can appear as anything, shedding dim light up to 5 feet",
				"I gain the following benefits while transformed:",
				"\u2022 When I cast a spell in thought form, I can cast it without verbal, somatic or material components that do not require a gold cost",
				"\u2022 I gain resistance to psychic damage and to bludgeoning, piercing or slashing damage from nonmagical attacks"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Mental Discipline",
			source : ["UA:Psi", 4],
			minlevel : 10,
			description : desc([
				"I add one of the following spells to my spellbook: Dominate Person, Scrying or Telekinesis",
				"I can cast the chosen spell without components, and can cast it once per long rest without spending a spell slot"
			]),
		},
		"subclassfeature10.1" : {
			name : "Empowered Psionics",
			source : ["UA:Psi", 5],
			minlevel : 10,
			description : desc([
				"When I deal force or psychic damage with a Wizard spell, I can add my Intelligence modifier to one of the spell's damage rolls"
			]),
		},
		"subclassfeature14" : {
			name : "Thought Travel",
			source : ["UA:Psi", 5],
			minlevel : 14,
			description : desc([
				"While in my Thought Form, I can fly with a speed equal to my walking speed, hover and move through other creatures and objects as if they were difficult terrain",
				"I take 1d10 force damage if I end my turn in an object",
				"If I return to normal inside an object, I am shunted to the nearest unoccupied space, and will take 1d10 force damage for every 5 feet moved"
			])
		}
	}
});
FeatsList["telekinetic"] = {
	name : "Telekinetic",
	source : ["UA:Psi", 8],
	descriptionFull : "You learn to move things with your mind. You gain the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You learn the mage hand cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible.\n \u2022 As a bonus action, you can try to shove one creature you can see within 5 feet of the spectral hand created by your mage hand spell. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Intelligence modifier) or be pushed 5 feet away from you.",
	spellcastingBonus : {
				name : "Telekinetic",
				spells : ["mage hand"],
				selection : ["mage hand"],
				firstCol : 'atwill'
			},
			spellChanges : {
				"mage hand" : {
					components : "",
					changes : "I can cast mage hand without verbal or somatic components and the hand can be invisible."
				}
			},
	scores : [0, 0, 0, 1, 0, 0]
};
FeatsList["telepathic"] = {
	name : "Telepathic",
	source : ["UA:Psi", 8],
	descriptionFull : "You awaken the ability to mentally connect with others. You gain the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in one skill of your choice from the following list: Deception, Insight, Intimidation, or Persuasion.\n \u2022 You can communicate telepathically with any creature you can see within 30 feet of you. If it understands at least one language, it can respond to you telepathically.",
	scores : [0, 0, 0, 1, 0, 0],
	skillstxt : "Choose one from Deception, Intimidation, Insight, and Persuasion"
};
SpellsList["ego whip"] = {
	name : "Ego Whip",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["UA:Psi", 7],
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or have dis. on attacks, saves and ability checks, and can't cast spells; extra save/rnd",
	descriptionFull : "You lash the mind of one creature you can see within range, filling it with despair. The target must succeed on an Intelligence saving throw or suffer disadvantage on attack rolls, ability checks, and saving throws, and it can't cast spells. At the end of each of its turns, the target can make another Intelligence saving throw. On a success, the spell ends on the target."
};
SpellsList["id insinuation"] = {
	name : "Id Insinuation",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["UA:Psi", 7],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or incapacitated, takes 1d12 Psychic dmg at the end of turn; extra save/rnd",
	descriptionFull : "You unleash a torrent of conflicting desires in the mind of one creature you can see within range, impairing its ability to make decisions. The target must succeed on a Wisdom saving throw or be incapacitated. At the end of each of its turns, it takes 1d12 psychic damage, and it can. then make another Wisdom saving throw. On a success, the spell ends on the target."
};
SpellsList["intellect fortress-spell"] = {
	name : "Intellect Fortress",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["UA:Psi", 7],
	level : 5,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "I have adv. on all saves, can spend reaction when a creature within 30 ft. fails a save, granting a reroll",
	descriptionFull : "You create a faintly shimmering barrier of protective psychic power around you. For the duration, you have advantage on all saving throws. \nWhen another creature that you can see within 30 feet of you fails a saving throw, you can use your reaction to allow them to reroll the save. They must use the new roll."
};
SpellsList["mental barrier"] = {
	name : "Mental Barrier",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["UA:Psi", 7],
	level : 2,
	school : "Abjur",
	time : "1 rea",
	range : "Self",
	components : "V",
	duration : "1 rnd",
	description : "I have adv. on Int, Wis and Cha saves, and resist Psychic dmg",
	descriptionFull : "You protect your mind with a wall of looping, repetitive thought. Until the start of your next turn, you have advantage on Intelligence, Wisdom, and Charisma saving throws, and you have resistance to psychic damage."
};
SpellsList["mind sliver-ua"] = {
	name : "Mind Sliver",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:SnW", 4], ["UA:Psi", 7]],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "1 rnd",
	save : "Int",
	description : "1 crea save or 1d6 Psychic dmg, -1d4 on first save before my next turn ends; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "1 crea save or `CD`d6 Psychic dmg and subtract 1d4 from first saving throw before my next turn ends",
	descriptionFull : "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must make an Intelligence saving throw. Unless the saving throw is successful, the target takes 1d6 psychic damage, and the first time it makes a saving throw before the end of your next turn, it must roll a d4 and subtract the number rolled from the save." + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["mind thrust-spell"] = {
	name : "Mind Thrust",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["UA:Psi", 7],
	level : 2,
	school : "Ench",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Int",
	description : "1+1/SL crea make a save or take 3d6 Psychic dmg, and must Dash or Disengage next turn; save halves",
	descriptionFull : "You propel a lance of psionic disruption into the mind of one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can use its action only to Dash or Disengage on its next turn. On a successful save, the target takes half as much damage, and this spell doesn't limit its action options." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["psionic blast"] = {
	name : "Psionic Blast",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["UA:Psi", 8],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "30-ft cone",
	components : "V",
	duration : "Instantaneous",
	save : "Dex",
	description : "5d8+1d8/SL Force dmg; save halves; save or pushed 20 ft. and knocked prone",
	descriptionFull : "You unleash a destructive wave of mental power in a 30-foot cone. Each creature in the area must make a Dexterity saving throw. On a failed save, a target takes 5d8 force damage, is pushed 20 feet directly away from you, and is knocked prone. On a successful save, a target takes half as much damage and isn't pushed or knocked prone." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};
SpellsList["psychic crush"] = {
	name : "Psychic Crush",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["UA:Psi", 8],
	level : 6,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 min",
	save : "Int",
	description : "A crea make a save or 12d6 Psychic dmg and stunned; save halves",
	descriptionFull : "You overload the mind of one creature you can see within range, filling its psyche with discordant emotions. The target must make an Intelligence saving throw. On a failed save, the target takes 12d6 psychic damage and is stunned for 1 minute. On a successful save, the target takes half as much damage and isn't stunned." + "\n   " + "The stunned target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the spell ends on the target."
};
SpellsList["thought shield"] = {
	name : "Thought Shield",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["UA:Psi", 8],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "8 h",
	description : "1 mind of crea can't be read or detected, can't use telepathy unless willing, has adv. against saves for truth telling",
	descriptionFull : "You weave a clouding veil over the mind of one creature you touch. For the duration, the target's mind can't be read or detected, creatures can't telepathically communicate with the target unless the target allows it, and the target has advantage on saving throws against any effect that would determine whether it is telling the truth."
};
