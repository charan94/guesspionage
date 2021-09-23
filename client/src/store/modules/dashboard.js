import { createGameAPI, loadSettingsAPI } from "../api/dashboard.api"

export default {
    state: {
        games: [],
        loading: false,
        errors: [],
        currentGame: null,
        settings: null
    },
    getters: {

    },
    mutations: {
        updateGame(state, payload) {
            if (payload.new) {
                localStorage.setItem('currentGame', JSON.stringify(payload.game));
                state.currentGame = payload.game;
            } else {
                localStorage.setItem('games', JSON.stringify(payload.game));
                payload.games = [...payload.games, payload.game];
            }
        },
        updateLoading(state, payload) {
            state.loading = payload;
        },
        updateSettings(state, payload) {
            state.settings = payload;
        }
    },
    actions: {
        async createGameAction({ commit }, userId) {
            commit('updateLoading', true);
            const result = await createGameAPI(userId);
            if (result && result.statusCode === 200) {
                commit('updateGame', { game: result.data.game, new: true });
            }
            commit('updateLoading', false);
        },

        fetchGameFromLocal({ commit }) {
            commit('updateLoading', true);
            const currentGame = localStorage.getItem('currentGame');
            commit('updateGame', JSON.parse(currentGame));
            commit('updateLoading', false);
        },

        async loadSettingsAPI({ commit }, isLocal = false) {
            commit('updateLoading', true);
            if (isLocal) {
                const result = await loadSettingsAPI();
                if (result && result.statusCode === 200) {
                    localStorage.setItem('settings', result.data);
                    commit('updateSettings', result.data);
                }
            } else {
                commit('updateSettings', JSON.parse(localStorage.getItem('settings')));
            }

        }
    }
}