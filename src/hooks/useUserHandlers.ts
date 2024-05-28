import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { setSearchedUser, setUserList, toggleSortByName, toggleShowLowestRanked } from '../Redux/actions';
import { RootState, User } from '../Redux/types';
import { customSortKey } from '../utils/utils';
import data from '../components/UsersData/users.json';
import store from '../Redux/store';

export const useUserHandlers = () => {
    const dispatch = useDispatch<typeof store.dispatch>();
    const searchTerm = useSelector((state: RootState) => state.searchTerm);
    const searchedUser = useSelector((state: RootState) => state.searchedUser);
    const userList = useSelector((state: RootState) => state.userList);
    const sortByName = useSelector((state: RootState) => state.sortByName);
    const showLowestRanked = useSelector((state: RootState) => state.showLowestRanked);

    const handleSearch = () => {
        const allUsers: User[] = Object.values(data);
        const searchedUsers = allUsers.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

        if (searchedUsers.length === 0) {
            Alert.alert("Error", "This user name does not exist! Please specify an existing user name!");
            return;
        }

        const sortedUsers = allUsers.sort((a, b) => {
            if (b.bananas === a.bananas) {
                return customSortKey(a, b);
            }
            return b.bananas - a.bananas;
        });

        let topTenUsers = sortedUsers.slice(0, 10);
        const searchedUser = searchedUsers[0];

        const isUserInTopTen = topTenUsers.some(user => user.uid === searchedUser.uid);
        if (!isUserInTopTen) {
            const searchedUserRank = sortedUsers.findIndex(user => user.uid === searchedUser.uid) + 1;
            topTenUsers[9] = { ...searchedUser, rank: searchedUserRank };
        }

        dispatch(setSearchedUser(searchedUser));
        dispatch(setUserList(topTenUsers));
    };

    const handleToggleSort = () => {
        if (sortByName) {
            const sortedByRank = [...userList].sort((a, b) => {
                if (b.bananas === a.bananas) {
                    return customSortKey(a, b);
                }
                return b.bananas - a.bananas;
            });
            sortedByRank.forEach((user, index) => {
                if (user?.uid !== searchedUser?.uid) {
                    user.rank = index + 1;
                } else {
                    const allUsers: User[] = Object.values(data);
                    const searchedUsers = allUsers.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
                    const sortedUsers = allUsers.sort((a, b) => {
                        if (b.bananas === a.bananas) {
                            return customSortKey(a, b);
                        }
                        return b.bananas - a.bananas;
                    });
                    let topTenUsers = sortedUsers.slice(0, 10);
                    const searchedUser = searchedUsers[0];
                    const isUserInTopTen = topTenUsers.some(user => user.uid === searchedUser.uid);
                    if (!isUserInTopTen) {
                        const searchedUserRank = sortedUsers.findIndex(user => user.uid === searchedUser.uid) + 1;
                        topTenUsers[9] = { ...searchedUser, rank: searchedUserRank };
                        user.rank = searchedUserRank;
                    } else {
                        user.rank = index + 1;
                    }
                }
            });
            dispatch(setUserList(sortedByRank));
        } else {
            const sortedByName = [...userList].sort((a, b) => customSortKey(a, b));
            sortedByName.forEach((user, index) => {
                user.rank = index + 1;
            });
            dispatch(setUserList(sortedByName));
        }
        dispatch(toggleSortByName());
    };

    const handleToggleRankView = () => {
        const allUsers: User[] = Object.values(data);
        const sortedUsers = allUsers.sort((a, b) => {
            if (b.bananas === a.bananas) {
                return customSortKey(a, b);
            }
            return b.bananas - a.bananas;
        });

        let usersToShow: User[] = [];
        if (showLowestRanked) {
            usersToShow = sortedUsers.slice(0, 10);
        } else {
            usersToShow = sortedUsers.slice(-100).sort((a, b) => a.name.localeCompare(b.name));
        }

        dispatch(setUserList(usersToShow));
        dispatch(toggleShowLowestRanked());
    };

    return {
        handleSearch,
        handleToggleSort,
        handleToggleRankView,
    };
};
