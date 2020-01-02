import {combineReducers, createStore} from "redux";
import * as Home from './home';

export type RootState = {
    home: Home.State;
};

export const rootReducer = combineReducers({
    home: Home.reducer,
});

export const actionCreator = {
    home: Home.actionCreator,
};
