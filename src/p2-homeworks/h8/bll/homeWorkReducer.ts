import {InitialPeopleType} from "../HW8";

export const UP = 'up';
export const DOWN = 'down';
export const AGE_LIMIT = 18;

export type ActionsTypes = ReturnType<typeof sortAC>
  | ReturnType<typeof checkAC>

export const homeWorkReducer = (state: Array<InitialPeopleType>, action: ActionsTypes): any => {
  switch (action.type) {
    case "sort": {
      const sortedState = [...state];
      const sortAlphabeticallyByName = ((a: InitialPeopleType, b: InitialPeopleType) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
      const sortReverseAlphabeticallyByName = ((a: InitialPeopleType, b: InitialPeopleType) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      })
      action.payload === "up" ? sortedState.sort(sortAlphabeticallyByName) : sortedState.sort(sortReverseAlphabeticallyByName)
      return sortedState
    }
    case "check": {
      return state.filter(u => u.age >= action.payload)
    }
    default:
      return state
  }
};

export const sortAC = (payload: string) => ({type: 'sort', payload}) as const
export const checkAC = (payload: number) => ({type: "check", payload}) as const
