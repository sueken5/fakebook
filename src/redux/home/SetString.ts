import { Action } from 'redux';

export type SetStringPayload = {
    text: string;
};

export interface SetStringAction extends Action {
    type: 'SET_STRING';
    payload: SetStringPayload;
}

export const setString = (payload: SetStringPayload): SetStringAction => {
    return {
        payload,
        type: 'SET_STRING',
    };
};
