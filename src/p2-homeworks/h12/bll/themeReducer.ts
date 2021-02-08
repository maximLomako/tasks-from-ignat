const CHANGE_COLOR = 'CHANGE-COLOR'

type ActionType = {
  type: 'CHANGE-COLOR'
  text: string
}
type InitStateType = {
  theme: string
}
const initState = {
  theme: 'some'
};

export const themeReducer = (state = initState, action: ActionType): InitStateType => {
  switch (action.type) {
    case CHANGE_COLOR: {
      return {theme: action.text};
    }
    default:
      return state;
  }
};

export const changeThemeC = (text: string): ActionType => ({type: CHANGE_COLOR, text})