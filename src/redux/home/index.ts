import {setString, SetStringAction} from "./SetString";

type Actions
    = SetStringAction;

export type State = {
    text: string;
};

const init = (): State => {
    return {
        text: "hello world"
    };
};

export const reducer = (state: State = init(), action: Actions) => {
    switch (action.type) {
        case 'SET_STRING':
            return {
                text: action.payload.text
            };
        default:
            return state;
    }
};

export const actionCreator = {
    setString,
};
