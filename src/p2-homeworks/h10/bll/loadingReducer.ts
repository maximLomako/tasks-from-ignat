const TOGGLE_LOADING = 'TOGGLE-LOADING';

type ActionType = {
  type: 'TOGGLE-LOADING'
  loading: boolean
}

const initState = {
  loading: true
};

export const loadingReducer = (state = initState, action: ActionType) => {
  switch (action.type) {
    case TOGGLE_LOADING: {
      return {
        ...state,
        loading: action.loading
      };
    }
    default:
      return state;
  }
};

export const loadingAC = (loading: boolean): ActionType => ({type: TOGGLE_LOADING, loading});