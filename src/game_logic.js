// class Deck{
// 	constructor(){
// 		this.shuffle();
// 	}
// 	async shuffle(){
// 		const res = await fetch('"https://deckofcardsapi.com/api/deck/new/shuffle/")')
// 		const {success, deck_id, remaining} = await res.json();

// 		if (success){

// 			this.deck_id = deck_id;
// 			this.remaining = remaining;
// 		}
// 	}

// };
// ("https://deckofcardsapi.com/api/deck/new/shuffle/");
// {
// 	"success": true,
// 	"deck_id": "3p40paa87x90",
// 	"shuffled": true,
// 	"remaining": 52
// }
// // DRAW cards
// "https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2"
