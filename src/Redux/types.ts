export interface User {
    uid: string;
    name: string;
    bananas: number;
    rank?: number;
  }
  
  export interface RootState {
    searchTerm: string;
    searchedUser: User | null;
    userList: User[];
    sortByName: boolean;
    showLowestRanked: boolean;
  }
  