//Actions

const CREATE_SHUFFLE_DECK = "CREATE_SHUFF_DECK";
const DEAL_CARDS = "DEAL_CARDS";
const RECEIVE_CARDS = "RECEIVE_CARDS";

export const receiveCards = (payload) => ({
  type: RECEIVE_CARDS,
  payload,
});
const dealCards = () => ({
  type: DEAL_CARDS,
});
//action creators
const createShuffledDeck = (payload) => ({
  type: CREATE_SHUFFLE_DECK,
  payload,
});

//Tthunsk
export const shuffle = () => async (dispatch) => {
  const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/");
  const { success, deck_id: deckId, remaining } = await res.json();
  if (success) {
    dispatch(createShuffledDeck(deckId));
  }
  if (!deckId) return;
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=21`
  );
  const data = await response.json();
  dispatch(receiveCards(data));
  dispatch(dealCards());
};

export const drawCards = (deckId) => async (dispatch) => {
  const res = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=21`
  );
  const data = await res.json();
  dispatch(receiveCards(data));
};

const initialState = {
  deckId: null,
  deck: [],
  columns: [[], [], []],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_SHUFFLE_DECK:
      return {
        ...state,
        deckId: action.payload,
      };
    case RECEIVE_CARDS:
      return {
        ...state,
        deck: action.payload,
      };
    case DEAL_CARDS:
      const [c1, c2, c3] = [[], [], []];
      state.deck.cards.forEach((card, index) => {
        0 === index % 3
          ? c1.push(card)
          : 1 === index % 3
          ? c2.push(card)
          : c3.push(card);
      });
      return {
        ...state,
        deck: [],
        columns: [c1, c2, c3],
      };

    default:
      return {
        ...state,
      };
  }
}
