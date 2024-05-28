// __tests__/actions.test.ts
import {
    setSearchTerm,
    setSearchedUser,
    setUserList,
    toggleSortByName,
    toggleShowLowestRanked,
    SET_SEARCH_TERM,
    SET_SEARCHED_USER,
    SET_USER_LIST,
    TOGGLE_SORT_BY_NAME,
    TOGGLE_SHOW_LOWEST_RANKED,
  } from '../src/Redux/actions';
  import { User } from '../src/Redux/types';
  
  describe('actions', () => {
    it('should create an action to set search term', () => {
      const term = 'test';
      const expectedAction = {
        type: SET_SEARCH_TERM,
        payload: term,
      };
      expect(setSearchTerm(term)).toEqual(expectedAction);
    });
  
    it('should create an action to set searched user', () => {
      const user: User = { uid: '1', name: 'John Doe', bananas: 10 };
      const expectedAction = {
        type: SET_SEARCHED_USER,
        payload: user,
      };
      expect(setSearchedUser(user)).toEqual(expectedAction);
    });
  
    it('should create an action to set user list', () => {
      const userList: User[] = [{ uid: '1', name: 'John Doe', bananas: 10 }];
      const expectedAction = {
        type: SET_USER_LIST,
        payload: userList,
      };
      expect(setUserList(userList)).toEqual(expectedAction);
    });
  
    it('should create an action to toggle sort by name', () => {
      const expectedAction = {
        type: TOGGLE_SORT_BY_NAME,
      };
      expect(toggleSortByName()).toEqual(expectedAction);
    });
  
    it('should create an action to toggle show lowest ranked', () => {
      const expectedAction = {
        type: TOGGLE_SHOW_LOWEST_RANKED,
      };
      expect(toggleShowLowestRanked()).toEqual(expectedAction);
    });
  });
  