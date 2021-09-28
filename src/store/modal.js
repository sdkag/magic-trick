import { SET_USER } from "./session";
const SHOW_MODAL = "/SHOW_MODAL";
const HIDE_MODAL = "/HIDE_MODAL";
const SET_CONTENT = "/SET_CONTENT";
const CLEAR_CONTENT = "/CLEAR_CONTENT";

export const showModal = () => ({
  type: SHOW_MODAL,
});

export const setContent = (payload) => ({
  type: SET_CONTENT,
  payload,
});

export const removeContent = (payload) => ({
  type: CLEAR_CONTENT,
});

export const destroyModal = () => ({
  type: HIDE_MODAL,
});

//TODO: loook into grabbign form from backend
export const getForm = (whichForm) => (dispatch) => {
  dispatch(setContent(whichForm));
};

const initialState = { modalContent: null, isVisible: null, loaded: null };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isVisible: true, loaded: true }; //loaded and isVisible might be the same depneding on whether youget the formcontents async
    case HIDE_MODAL:
      return { ...state, isVisible: null, loaded: null };
    case SET_CONTENT:
      return { modalContent: action.payload, isVisible: true, loaded: true };
    case CLEAR_CONTENT:
      return { ...state, modalContent: null };
    case SET_USER:
      return { modalContent: null, isVisible: null, loaded: null };
    default:
      return state;
  }
}
