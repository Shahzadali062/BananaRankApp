export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SEARCHED_USER = 'SET_SEARCHED_USER';
export const SET_USER_LIST = 'SET_USER_LIST';
export const TOGGLE_SORT_BY_NAME = 'TOGGLE_SORT_BY_NAME';
export const TOGGLE_SHOW_LOWEST_RANKED = 'TOGGLE_SHOW_LOWEST_RANKED';
import { User } from "./types";

export interface SetSearchTermAction {
  type: typeof SET_SEARCH_TERM;
  payload: string;
}

export interface SetSearchedUserAction {
  type: typeof SET_SEARCHED_USER;
  payload: User;
}

export interface SetUserListAction {
  type: typeof SET_USER_LIST;
  payload: User[];
}

export interface ToggleSortByNameAction {
  type: typeof TOGGLE_SORT_BY_NAME;
}

export interface ToggleShowLowestRankedAction {
  type: typeof TOGGLE_SHOW_LOWEST_RANKED;
}

export type UserActions =
  | SetSearchTermAction
  | SetSearchedUserAction
  | SetUserListAction
  | ToggleSortByNameAction
  | ToggleShowLowestRankedAction;

export const setSearchTerm = (term: string): SetSearchTermAction => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const setSearchedUser = (user: User): SetSearchedUserAction => ({
  type: SET_SEARCHED_USER,
  payload: user,
});

export const setUserList = (list: User[]): SetUserListAction => ({
  type: SET_USER_LIST,
  payload: list,
});

export const toggleSortByName = (): ToggleSortByNameAction => ({
  type: TOGGLE_SORT_BY_NAME,
});

export const toggleShowLowestRanked = (): ToggleShowLowestRankedAction => ({
  type: TOGGLE_SHOW_LOWEST_RANKED,
});
