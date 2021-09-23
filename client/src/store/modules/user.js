import { checkUserAPI, createUserAPI } from "../api/user.api";

export default {
    state: () => ({
        user: null,
        isUserNameAvailable: true,
        checkUserNameLoading: false
    }),
    getters: {
        getIsUserNameAvailable: state => state.isUserNameAvailable,
        getUserDetails: state => state.user
    },
    mutations: {
        updateUserNameAvailability(state, payload) {
            state.isUserNameAvailable = payload
        },
        updateCheckUserNameLoadingIndicator(state, payload) {
            state.checkUserNameLoading = payload;
        },
        updateUser(state, payload) {
            localStorage.setItem('user', JSON.stringify(payload));
            state.user = payload;
        }
    },
    actions: {
        async registerUserAction({ commit }, userName) {
            commit('updateCheckUserNameLoadingIndicator', true);
            if (userName && userName.length) {
                const result = await createUserAPI(userName);
                if (result && result.statusCode === 200) {
                    commit('updateUser', result.data.user);
                }
            }
            commit('updateCheckUserNameLoadingIndicator', false);
        },
        async checkUserName({ commit }, userName) {
            commit('updateCheckUserNameLoadingIndicator', true);
            if (userName && userName.length) {
                const result = await checkUserAPI(userName);
                if (result && result.statusCode === 200) {
                    commit('updateUserNameAvailability', result.data.available);
                }
            }
            commit('updateCheckUserNameLoadingIndicator', false);
        },
        checkIfUserExists({ commit }) {
            commit('updateCheckUserNameLoadingIndicator', true);
            const user = localStorage.getItem('user');
            if (user && user.length) {
                commit('updateUser', JSON.parse(user));
            }
            commit('updateCheckUserNameLoadingIndicator', false);
        }
    }
}