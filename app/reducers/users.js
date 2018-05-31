import {
	NEW_USER,
} from '../actions';

const users = (state = [
		{
			id: 0,
			username: "Chris",
			picture: "https://magiccards.info/scans/en/nph/9.jpg",
			counters: {
				life: 20,
				poison: 0,
				white: 0,
				blue: 0,
				black: 0,
				red: 0,
				green: 0,
			},
			hand: [
				{
	        "artist": "Jason Chan",
	        "cmc": 7,
	        "foreignNames": [
	          {
	            "language": "German",
	            "name": "Karn der Befreite",
	            "multiverseid": 247659
	          },
	          {
	            "language": "French",
	            "name": "Karn libéré",
	            "multiverseid": 247834
	          },
	          {
	            "language": "Portuguese (Brazil)",
	            "name": "Karn Liberto",
	            "multiverseid": 248009
	          },
	          {
	            "language": "Italian",
	            "name": "Karn Liberato",
	            "multiverseid": 248184
	          },
	          {
	            "language": "Spanish",
	            "name": "Karn liberado",
	            "multiverseid": 248359
	          },
	          {
	            "language": "Chinese Simplified",
	            "name": "重获自由的卡恩",
	            "multiverseid": 248534
	          },
	          {
	            "language": "Japanese",
	            "name": "解放された者、カーン",
	            "multiverseid": 248709
	          },
	          {
	            "language": "Russian",
	            "name": "Карн Освобожденный",
	            "multiverseid": 248884
	          },
	          {
	            "language": "Chinese Traditional",
	            "name": "重獲自由的卡恩",
	            "multiverseid": 249059
	          }
	        ],
	        "id": "d4225f1fca46126bbcd22aa2edf5e16b55b97ff9",
	        "imageName": "karn liberated",
	        "layout": "normal",
	        "legalities": [
	          {
	            "format": "Commander",
	            "legality": "Legal"
	          },
	          {
	            "format": "Legacy",
	            "legality": "Legal"
	          },
	          {
	            "format": "Modern",
	            "legality": "Legal"
	          },
	          {
	            "format": "Scars of Mirrodin Block",
	            "legality": "Legal"
	          },
	          {
	            "format": "Vintage",
	            "legality": "Legal"
	          }
	        ],
	        "loyalty": 6,
	        "manaCost": "{7}",
	        "mciNumber": "1",
	        "multiverseid": 214350,
	        "name": "Karn Liberated",
	        "number": "1",
	        "originalText": "+4: Target player exiles a card from his or her hand.\n-3: Exile target permanent.\n-14: Restart the game, leaving in exile all non-Aura permanent cards exiled with Karn Liberated. Then put those cards onto the battlefield under your control.",
	        "originalType": "Planeswalker — Karn",
	        "printings": [
	          "NPH",
	          "MM2"
	        ],
	        "rarity": "Mythic Rare",
	        "rulings": [
	          {
	            "date": "2011-06-01",
	            "text": "Karn's first and third abilities are linked. Similarly, Karn's second and third abilities are linked. Only cards exiled by either of Karn's first two abilities will remain in exile when the game restarts."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "A game that restarts immediately ends. The players in that game then immediately begin a new game. No player wins, loses, or draws the original game as a result of Karn's ability."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "In a multiplayer games (a game that started with three or more players in it), any player that left the game before it was restarted with Karn's ability won't be involved in the new game."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "The player who controlled the ability that restarted the game is the starting player in the new game. The new game starts like a game normally does: -- Each player shuffles their deck (except the cards left in exile by Karn's ability). -- Each player's life total becomes 20 (or the starting life total for whatever format you're playing). -- Players draw a hand of seven cards. Players may take mulligans. -- Players may take actions based on cards in their opening hands, such as Chancellors and Leylines."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "After the pre-game procedure is complete, but before the new game's first turn, Karn's ability finishes resolving and the cards left in exile are put onto the battlefield. If this causes any triggered abilities to trigger, those abilities are put onto the stack at the beginning of the first upkeep step."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "Creatures put onto the battlefield due to Karn's ability will have been under their controller's control continuously since the beginning of the first turn. They can attack and their activated abilities with {T} in the cost can be activated."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "Any permanents put onto the battlefield with Karn's ability that entered the battlefield tapped will untap during their controller's first untap step."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "No actions taken in the game that was restarted apply to the new game. For example, if you were dealt damage by Stigma Lasher in the original game, the effect that states you can't gain life doesn't carry over to the new game."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "Players won't have any poison counters or emblems they had in the original game."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "In a Commander game, players put their commanders into the command zone before shuffling their deck."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "The number of times a player has cast their commander from the command zone resets to zero. Also, the amount of combat damage dealt to players by each commander is reset to 0."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "If a player's commander was exiled with Karn at the game restarted, that commander won't be put into the command zone at the beginning of the game. It will be put onto the battlefield when Karn's ability finishes resolving."
	          },
	          {
	            "date": "2011-06-01",
	            "text": "In a multiplayer game using the limited range of influence option, all players are affected and will restart the game, not just those within the range of influence of the ability's controller."
	          }
	        ],
	        "subtypes": [
	          "Karn"
	        ],
	        "supertypes": [
	          "Legendary"
	        ],
	        "text": "+4: Target player exiles a card from their hand.\n−3: Exile target permanent.\n−14: Restart the game, leaving in exile all non-Aura permanent cards exiled with Karn Liberated. Then put those cards onto the battlefield under your control.",
	        "type": "Legendary Planeswalker — Karn",
	        "types": [
	          "Planeswalker"
	        ],
					"MTG_SELECTED_TYPE": "nph"
	      }
			],
			piles: {
				deck: [

				],
				graveyard: [

				],
				exile: [

				]
			},
			battlefield: [
				{
        "artist": "Igor Kieryluk",
        "cmc": 7,
        "colorIdentity": [
          "W"
        ],
        "colors": [
          "White"
        ],
        "flavor": "\"The Gitaxians whisper among themselves of other worlds. If they exist, we must bring Phyrexia's magnificence to them.\"",
        "foreignNames": [
          {
            "language": "Chinese Simplified",
            "name": "大修道士艾蕾侬"
          },
          {
            "language": "Chinese Traditional",
            "name": "大修道士艾蕾儂"
          },
          {
            "language": "French",
            "name": "Elesh Norn, Grand Cénobite"
          },
          {
            "language": "German",
            "name": "Elesh Norn, Hohe Zönobitin"
          },
          {
            "language": "Italian",
            "name": "Elesh Norn, Grande Cenobita"
          },
          {
            "language": "Japanese",
            "name": "大修道士、エリシュ・ノーン"
          },
          {
            "language": "Portuguese (Brazil)",
            "name": "Elesh Norn, Cenobita-Mor"
          },
          {
            "language": "Russian",
            "name": "Элиш Норн, Великая Инокиня"
          },
          {
            "language": "Spanish",
            "name": "Elesh Norn, Gran Cenobita"
          }
        ],
        "id": "f2eb06047a3a8e515bff62b55f29468fcde6332a",
        "imageName": "elesh norn, grand cenobite",
        "layout": "normal",
        "legalities": [
          {
            "format": "Commander",
            "legality": "Legal"
          },
          {
            "format": "Legacy",
            "legality": "Legal"
          },
          {
            "format": "Modern",
            "legality": "Legal"
          },
          {
            "format": "Scars of Mirrodin Block",
            "legality": "Legal"
          },
          {
            "format": "Vintage",
            "legality": "Legal"
          }
        ],
        "manaCost": "{5}{W}{W}",
        "mciNumber": "87",
        "name": "Elesh Norn, Grand Cenobite",
        "number": "87",
        "power": "4",
        "printings": [
          "pJGP",
          "NPH",
          "MM2",
          "IMA"
        ],
        "rarity": "Special",
        "releaseDate": "2014",
        "rulings": [
          {
            "date": "2017-11-17",
            "text": "If a second Elesh Norn, Grand Cenobite comes under your control, you'll put one into its owner's graveyard due to the \"legend rule\" at the same time that any of your opponents' creatures getting -4/-4 are put into their owner's graveyard for having 0 or less toughness."
          }
        ],
        "source": "Judge reward",
        "subtypes": [
          "Praetor"
        ],
        "supertypes": [
          "Legendary"
        ],
        "text": "Vigilance\nOther creatures you control get +2/+2.\nCreatures your opponents control get -2/-2.",
        "toughness": "7",
        "type": "Legendary Creature — Praetor",
        "types": [
          "Creature"
        ],
				"MTG_SELECTED_TYPE": "nph",
      },
			{
        "artist": "Mark Tedin",
        "cmc": 15,
        "foreignNames": [
          {
            "language": "Chinese Simplified",
            "name": "万世创伤伊莫库",
            "multiverseid": 398154
          },
          {
            "language": "Japanese",
            "name": "引き裂かれし永劫、エムラクール",
            "multiverseid": 398403
          }
        ],
        "id": "8d8ea93bf3ac0c23b7789088b16ce21b0637d05c",
        "imageName": "emrakul, the aeons torn",
        "layout": "normal",
        "legalities": [
          {
            "format": "Commander",
            "legality": "Banned"
          },
          {
            "format": "Legacy",
            "legality": "Legal"
          },
          {
            "format": "Modern",
            "legality": "Legal"
          },
          {
            "format": "Vintage",
            "legality": "Legal"
          },
          {
            "format": "Zendikar Block",
            "legality": "Legal"
          }
        ],
        "manaCost": "{15}",
        "mciNumber": "3",
        "multiverseid": 397905,
        "name": "Emrakul, the Aeons Torn",
        "number": "3",
        "originalText": "Emrakul, the Aeons Torn can't be countered.\nWhen you cast Emrakul, take an extra turn after this one.\nFlying, protection from colored spells, annihilator 6\nWhen Emrakul is put into a graveyard from anywhere, its owner shuffles his or her graveyard into his or her library.",
        "originalType": "Legendary Creature — Eldrazi",
        "power": "15",
        "printings": [
          "pPRE",
          "ROE",
          "MM2"
        ],
        "rarity": "Mythic Rare",
        "rulings": [
          {
            "date": "2010-06-15",
            "text": "Annihilator abilities trigger and resolve during the declare attackers step. The defending player chooses and sacrifices the required number of permanents before they declare blockers. Any creatures sacrificed this way won't be able to block."
          },
          {
            "date": "2010-06-15",
            "text": "If a creature with annihilator is attacking a planeswalker, and the defending player chooses to sacrifice that planeswalker, the attacking creature continues to attack. It may be blocked. If it isn't blocked, it simply won't deal combat damage to anything."
          },
          {
            "date": "2010-06-15",
            "text": "Emrakul can be targeted by spells that try to counter it (such as Lay Bare). Those spells will resolve, but the part of their effect that would counter Emrakul won't do anything. Any other effects those spells have will work as normal."
          },
          {
            "date": "2010-06-15",
            "text": "\"Protection from colored spells\" means that Emrakul can't be the target of colored spells (including colored Aura spells) or of abilities whose sources are colored spells (such as the \"when you cast\" ability of an Ulamog, the Infinite Gyre that's been turned red by Painter's Servant). It also means that all damage that would be dealt to Emrakul by colored spells is prevented. Like every protection ability, it works only while Emrakul is on the battlefield."
          },
          {
            "date": "2010-06-15",
            "text": "\"Colored spells\" is not synonymous with \"colored instants and sorceries.\" For example, if a player cycles Choking Tethers, its triggered ability may target Emrakul because Choking Tethers wasn't cast as a spell."
          },
          {
            "date": "2010-06-15",
            "text": "Emrakul may be affected by colored spells that don't target it or deal damage to it, including those that cause it to become blocked. Abilities of colored permanents (such as Journey to Nowhere) may target it. Auras may be moved onto it by abilities or by colored spells that don't target it (such as Aura Graft)."
          }
        ],
        "subtypes": [
          "Eldrazi"
        ],
        "supertypes": [
          "Legendary"
        ],
        "text": "This spell can't be countered.\nWhen you cast this spell, take an extra turn after this one.\nFlying, protection from colored spells, annihilator 6\nWhen Emrakul, the Aeons Torn is put into a graveyard from anywhere, its owner shuffles their graveyard into their library.",
        "toughness": "15",
        "type": "Legendary Creature — Eldrazi",
        "types": [
          "Creature"
        ],
				"MTG_SELECTED_TYPE": "roe",
      },
			{
        "artist": "Drew Tucker",
        "cmc": 5,
        "colorIdentity": [
          "W",
          "B"
        ],
        "colors": [
          "White",
          "Black"
        ],
        "foreignNames": [
          {
            "language": "Spanish",
            "name": "Siervo mortal",
            "multiverseid": 180713
          },
          {
            "language": "Chinese Simplified",
            "name": "夺命王侯",
            "multiverseid": 180893
          },
          {
            "language": "Japanese",
            "name": "死を運ぶ者のしもべ",
            "multiverseid": 181073
          },
          {
            "language": "Russian",
            "name": "Смертоносный Вассал",
            "multiverseid": 181253
          },
          {
            "language": "Italian",
            "name": "Vassallo Latore di Morte",
            "multiverseid": 181433
          },
          {
            "language": "German",
            "name": "Vasall der Todesbringer",
            "multiverseid": 181613
          },
          {
            "language": "French",
            "name": "Noble féal de Portemort",
            "multiverseid": 181793
          },
          {
            "language": "Portuguese (Brazil)",
            "name": "Soberano Fatífero",
            "multiverseid": 181973
          }
        ],
        "id": "67ecdbf2f77569f6b759f8716d51baaed4de8f08",
        "imageName": "deathbringer liege",
        "layout": "normal",
        "legalities": [
          {
            "format": "Commander",
            "legality": "Legal"
          },
          {
            "format": "Legacy",
            "legality": "Legal"
          },
          {
            "format": "Lorwyn-Shadowmoor Block",
            "legality": "Legal"
          },
          {
            "format": "Modern",
            "legality": "Legal"
          },
          {
            "format": "Vintage",
            "legality": "Legal"
          }
        ],
        "manaCost": "{2}{W/B}{W/B}{W/B}",
        "mciNumber": "85",
        "multiverseid": 157288,
        "name": "Deathbringer Liege",
        "number": "85",
        "originalText": "Other white creatures you control get +1/+1.\nOther black creatures you control get +1/+1.\nWhenever you play a white spell, you may tap target creature.\nWhenever you play a black spell, you may destroy target creature if it's tapped.",
        "originalType": "Creature — Horror",
        "power": "3",
        "printings": [
          "EVE"
        ],
        "rarity": "Rare",
        "rulings": [
          {
            "date": "2008-08-01",
            "text": "The abilities are separate and cumulative. If another creature you control is both of the listed colors, it will get a total of +2/+2."
          },
          {
            "date": "2008-08-01",
            "text": "If you cast a spell that's both white and black, the last two abilities will both trigger. You may use them together to destroy any creature. To do so, put the \"destroy\" ability on the stack first, then put the \"tap\" ability on the stack, with each one targeting the same creature. When the abilities resolve, they'll tap the creature, then destroy it."
          },
          {
            "date": "2010-06-15",
            "text": "The last ability can target any creature, not just a tapped creature (it doesn't say \"target tapped creature\"). When the ability resolves, check whether the creature is tapped or not. If it's tapped, you may destroy it. If it's not tapped, the ability does nothing."
          }
        ],
        "subtypes": [
          "Horror"
        ],
        "text": "Other white creatures you control get +1/+1.\nOther black creatures you control get +1/+1.\nWhenever you cast a white spell, you may tap target creature.\nWhenever you cast a black spell, you may destroy target creature if it's tapped.",
        "toughness": "4",
        "type": "Creature — Horror",
        "types": [
          "Creature"
        ],
				"MTG_SELECTED_TYPE": "eve",
      },
		]
	},
			{
				id: 1,
				username: "Cam",
				picture: "https://magiccards.info/scans/en/eve/85.jpg",
				counters: {
					life: 20,
					poison: 0,
					white: 0,
					blue: 0,
					black: 0,
					red: 0,
					green: 0,
				},
				hand: [

				],
				piles: {
					deck: [

					],
					graveyard: [

					],
					exile: [

					]
				},
				battlefield: [
					{
		        "artist": "Jason Chan",
		        "cmc": 7,
		        "foreignNames": [
		          {
		            "language": "Chinese Simplified",
		            "name": "重获自由的卡恩",
		            "multiverseid": 398077
		          },
		          {
		            "language": "Japanese",
		            "name": "解放された者、カーン",
		            "multiverseid": 398326
		          }
		        ],
		        "id": "6dbb000f1dffa20fbb9159b7ac36b814d209558c",
		        "imageName": "karn liberated",
		        "layout": "normal",
		        "legalities": [
		          {
		            "format": "Commander",
		            "legality": "Legal"
		          },
		          {
		            "format": "Legacy",
		            "legality": "Legal"
		          },
		          {
		            "format": "Modern",
		            "legality": "Legal"
		          },
		          {
		            "format": "Scars of Mirrodin Block",
		            "legality": "Legal"
		          },
		          {
		            "format": "Vintage",
		            "legality": "Legal"
		          }
		        ],
		        "loyalty": 6,
		        "manaCost": "{7}",
		        "mciNumber": "4",
		        "multiverseid": 397828,
		        "name": "Karn Liberated",
		        "number": "4",
		        "originalText": "+4: Target player exiles a card from his or her hand.\n−3: Exile target permanent.\n−14: Restart the game, leaving in exile all non-Aura permanent cards exiled with Karn Liberated. Then put those cards onto the battlefield under your control.",
		        "originalType": "Planeswalker — Karn",
		        "printings": [
		          "NPH",
		          "MM2"
		        ],
		        "rarity": "Mythic Rare",
		        "rulings": [
		          {
		            "date": "2011-06-01",
		            "text": "Karn's first and third abilities are linked. Similarly, Karn's second and third abilities are linked. Only cards exiled by either of Karn's first two abilities will remain in exile when the game restarts."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "A game that restarts immediately ends. The players in that game then immediately begin a new game. No player wins, loses, or draws the original game as a result of Karn's ability."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "In a multiplayer games (a game that started with three or more players in it), any player that left the game before it was restarted with Karn's ability won't be involved in the new game."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "The player who controlled the ability that restarted the game is the starting player in the new game. The new game starts like a game normally does: -- Each player shuffles their deck (except the cards left in exile by Karn's ability). -- Each player's life total becomes 20 (or the starting life total for whatever format you're playing). -- Players draw a hand of seven cards. Players may take mulligans. -- Players may take actions based on cards in their opening hands, such as Chancellors and Leylines."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "After the pre-game procedure is complete, but before the new game's first turn, Karn's ability finishes resolving and the cards left in exile are put onto the battlefield. If this causes any triggered abilities to trigger, those abilities are put onto the stack at the beginning of the first upkeep step."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "Creatures put onto the battlefield due to Karn's ability will have been under their controller's control continuously since the beginning of the first turn. They can attack and their activated abilities with {T} in the cost can be activated."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "Any permanents put onto the battlefield with Karn's ability that entered the battlefield tapped will untap during their controller's first untap step."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "No actions taken in the game that was restarted apply to the new game. For example, if you were dealt damage by Stigma Lasher in the original game, the effect that states you can't gain life doesn't carry over to the new game."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "Players won't have any poison counters or emblems they had in the original game."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "In a Commander game, players put their commanders into the command zone before shuffling their deck."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "The number of times a player has cast their commander from the command zone resets to zero. Also, the amount of combat damage dealt to players by each commander is reset to 0."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "If a player's commander was exiled with Karn at the game restarted, that commander won't be put into the command zone at the beginning of the game. It will be put onto the battlefield when Karn's ability finishes resolving."
		          },
		          {
		            "date": "2011-06-01",
		            "text": "In a multiplayer game using the limited range of influence option, all players are affected and will restart the game, not just those within the range of influence of the ability's controller."
		          }
		        ],
		        "subtypes": [
		          "Karn"
		        ],
		        "supertypes": [
		          "Legendary"
		        ],
		        "text": "+4: Target player exiles a card from their hand.\n−3: Exile target permanent.\n−14: Restart the game, leaving in exile all non-Aura permanent cards exiled with Karn Liberated. Then put those cards onto the battlefield under your control.",
		        "type": "Legendary Planeswalker — Karn",
		        "types": [
		          "Planeswalker"
		        ],
						"MTG_SELECTED_TYPE": "roe",
		      	}
				],
			},
	], action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default ({
	users,
});
