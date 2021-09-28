const SET_PAGE_STATUS = "ui/SET_PAGE_STATUS";

const setPageStatus = (payload) => ({
  type: SET_PAGE_STATUS,
  payload,
});

export const setGamePage = () => setPageStatus("GamePage");
export const setLoadingPage = () => setPageStatus("LoadingPage");

const initialState = {
  pageStatus: "WelcomePage",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_STATUS:
      return { pageStatus: action.payload };
    default:
      return { ...state };
  }
}
