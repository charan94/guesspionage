<template>
<div className="container-fluid">
    <GameContainer 
    :currentGame="dashboard.currentGame" 
    :games="dashboard.games" 
    :settings="dashboard.settings" 
    :currentLevel="dashboard.currentLevel" 
    @updateQuestion="updateQuestion"
    v-if="!dashboard.loading"
    />
    <span class="spinner-border spinner-border-sm" style="position: absolute; top: 50%; left: 50%;" role="status" aria-hidden="true" v-if="dashboard.loading"></span>
</div>
</template>

<script>
import GameContainer from '../components/GameContainer.vue';
import {
    mapActions,
    mapState,
} from 'vuex';
export default {
    data() {
        return {
            
        }
    },
    created() {
        if (this.user.user === null) {
            this.$router.push('register');
        }
        const currentGame = localStorage.getItem('currentGame');
        if (currentGame) {
            this.fetchGameFromLocal();
        } else {
            this.createGame();
        }
        const settings = localStorage.getItem('settings');
        this.loadSettingsAction(settings ? false : true);
    },
    mounted() {
          
    },
    methods: {
        ...mapActions(['createGameAction', 'fetchGameFromLocal', 'loadSettingsAction', 'updateQuestionAction', 'updateDifficultyLevelAction', 'updateGameStatusAction']),
        createGame() {
            const userId = this.user?.user?.userId;
            if (userId) {
                this.createGameAction(userId);
            } else {
                this.$router.push('register');
            }
        },
        async updateQuestion(props) {
            const currentGame = this.dashboard.currentGame;
            const currentLevel = this.dashboard.currentLevel;
            const threshold = this.dashboard.settings.threshold;
            const {difficulty: currentDifficultyLevel, count} = this.dashboard.settings.settings[currentLevel];
            const totalCount = currentGame.questions.length ? [...currentGame.questions.filter(({level}) => level === currentLevel), {...props}].length : 1;
            const totalScore = currentGame.questions.length ? [...currentGame.questions.filter(({level}) => level === currentLevel).map(({score}) => score), ...[props.score]].reduce((a, b) => a + b)  : 0;
            if(totalCount > count) {
                const successPercentage = (totalScore/totalCount) * 100;
                if(successPercentage >= threshold) {
                    const difficultyLevel = currentDifficultyLevel + 1;
                    if(difficultyLevel === 7) {
                         this.updateGameStatusAction({gameId: currentGame.gameId, status: 'FINISHED'});
                         this.$router.push({name: 'results', params: {gameId: currentGame.gameId}});
                         return;
                    }
                    const keys = Object.keys(this.dashboard.settings.settings);
                    let newLevel = null;
                    for(let i = 0; i < keys.length; i ++) {
                          if(this.dashboard.settings.settings[keys[i]].difficulty === difficultyLevel) {
                              newLevel = keys[i];
                          }
                    }
                    if(newLevel) {
                       await this.updateDifficultyLevelAction(newLevel);
                    }
                }
            }
           this.updateQuestionAction(props);
        }
    },
    computed: {
        ...mapState(['dashboard']),
        ...mapState(['user'])
    },
    components: {
        GameContainer
    }

}
</script>

<style lang="scss">

</style>
