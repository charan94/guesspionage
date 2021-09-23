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
        ...mapActions(['createGameAction', 'fetchGameFromLocal', 'loadSettingsAction', 'updateQuestionAction']),
        createGame() {
            const userId = this.user?.user?.userId;
            if (userId) {
                this.createGameAction(userId);
            } else {
                this.$router.push('register');
            }
        },
        updateQuestion(props) {
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
