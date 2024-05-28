import { combineReducers } from 'redux';
import {
  SET_SEARCH_TERM,
  SET_SEARCHED_USER,
  SET_USER_LIST,
  TOGGLE_SORT_BY_NAME,
  TOGGLE_SHOW_LOWEST_RANKED,
  UserActions
} from './actions';
import { RootState, User } from './types';

const initialState: RootState = {
  searchTerm: '',
  searchedUser: null,
  userList: [],
  sortByName: false,
  showLowestRanked: false,
};

const searchTerm = (state = initialState.searchTerm, action: UserActions): string => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

const searchedUser = (state = initialState.searchedUser, action: UserActions): User | null => {
  switch (action.type) {
    case SET_SEARCHED_USER:
      return action.payload;
    default:
      return state;
  }
};

const userList = (state = initialState.userList, action: UserActions): User[] => {
  switch (action.type) {
    case SET_USER_LIST:
      return action.payload;
    default:
      return state;
  }
};

const sortByName = (state = initialState.sortByName, action: UserActions): boolean => {
  switch (action.type) {
    case TOGGLE_SORT_BY_NAME:
      return !state;
    default:
      return state;
  }
};

const showLowestRanked = (state = initialState.showLowestRanked, action: UserActions): boolean => {
  switch (action.type) {
    case TOGGLE_SHOW_LOWEST_RANKED:
      return !state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchTerm,
  searchedUser,
  userList,
  sortByName,
  showLowestRanked,
});

export default rootReducer;
