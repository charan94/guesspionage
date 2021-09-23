import { createGameAPI, createQuestionAPI, loadGameAPI, loadSettingsAPI, updateGameStatusAPI } from "../api/dashboard.api"

export default {
    state: {
        games: [],
        loading: false,
        errors: [],
        currentGame: null,
        settings: null,
        currentLevel: 'VERY_EASY',
    },
    getters: {

    },
    mutations: {
        updateGame(state, payload) {
            if (payload.new) {
                localStorage.setItem('currentGame', JSON.stringify(payload.game));
                state.currentGame = payload.game;
            } else {
                localStorage.setItem('games', JSON.stringify([...state.games, payload.game]));
                state.games = [...state.games, payload.game];
            }
        },
        updateLoading(state, payload) {
            state.loading = payload;
        },
        updateSettings(state, payload) {
            state.settings = payload;
        },
        updateDifficultyLevel(state, payload) {
            state.currentLevel = payload;
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
            commit('updateGame', { game: JSON.parse(currentGame), new: true });
            commit('updateLoading', false);
        },

        async loadSettingsAction({ commit }, isLocal = false) {
            commit('updateLoading', true);
            if (isLocal) {
                const result = await loadSettingsAPI();
                if (result && result.statusCode === 200) {
                    localStorage.setItem('settings', JSON.stringify(result.data));
                    commit('updateSettings', result.data);
                }
            } else {
                commit('updateSettings', JSON.parse(localStorage.getItem('settings')));
            }
            commit('updateLoading', false);
        },
        async loadGameAction({ commit }, gameId) {
            commit('updateLoading', true);
            const result = await loadGameAPI(gameId);
            if (result && result.statusCode === 200) {
                commit('updateGame', { game: result.data, new: true });
            }
            commit('updateLoading', false);
        },
        async updateQuestionAction({ commit, dispatch, state }, body) {
            commit('updateLoading', true);
            await createQuestionAPI(state.currentGame.gameId, JSON.stringify(body));
            dispatch('loadGameAction', state.currentGame.gameId);
        },
        async updateGameStatusAction({commit, dispatch}, {gameId, status}) {
            commit('updateLoading', true);
            await updateGameStatusAPI(gameId, status);
            dispatch('loadGameAction', gameId);
        },
        updateDifficultyLevelAction({ commit }, level) {
           commit('updateDifficultyLevel', level);
        }
    }
}