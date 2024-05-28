// __tests__/reducers.test.ts
import rootReducer from '../src/Redux/reducers';
import {
  setSearchTerm,
  setSearchedUser,
  setUserList,
  toggleSortByName,
  toggleShowLowestRanked,
} from '../src/Redux/actions';
import { User } from '../src/Redux/types';

const initialState = {
  searchTerm: '',
  searchedUser: null,
  userList: [],
  sortByName: false,
  showLowestRanked: false,
};

describe('reducers', () => {
  it('should return the initial state', () => {
    // Providing a dummy action with type 'DUMMY_ACTION' instead of 'undefined'
    expect(rootReducer(undefined, { type: 'DUMMY_ACTION' } as any)).toEqual(initialState);
  });

  it('should handle SET_SEARCH_TERM', () => {
    const searchTerm = 'test';
    expect(rootReducer(initialState, setSearchTerm(searchTerm))).toEqual({
      ...initialState,
      searchTerm,
    });
  });

  it('should handle SET_SEARCHED_USER', () => {
    const user: User = { uid: '1', name: 'John Doe', bananas: 10 };
    expect(rootReducer(initialState, setSearchedUser(user))).toEqual({
      ...initialState,
      searchedUser: user,
    });
  });

  it('should handle SET_USER_LIST', () => {
    const userList: User[] = [{ uid: '1', name: 'John Doe', bananas: 10 }];
    expect(rootReducer(initialState, setUserList(userList))).toEqual({
      ...initialState,
      userList,
    });
  });

  it('should handle TOGGLE_SORT_BY_NAME', () => {
    expect(rootReducer(initialState, toggleSortByName())).toEqual({
      ...initialState,
      sortByName: !initialState.sortByName,
    });
  });

  it('should handle TOGGLE_SHOW_LOWEST_RANKED', () => {
    expect(rootReducer(initialState, toggleShowLowestRanked())).toEqual({
      ...initialState,
      showLowestRanked: !initialState.showLowestRanked,
    });
  });
});
