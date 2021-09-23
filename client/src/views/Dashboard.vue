<template>
<div className="container-fluid mt-5">
    <div class="row">
        <div class="col-12 float-right">

        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapState,
} from 'vuex';
export default {
    data() {

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
        this.loadSettingsAPI(settings ? true : false);
    },
    mounted() {

    },
    methods: {
        ...mapActions(['createGameAction', 'fetchGameFromLocal', 'loadSettingsAPI']),
        createGame() {
            console.log('this.user ', this.user);
            const userId = this.user?.user?.userId;
            if(userId) {
                this.createGameAction(userId);
            } else {
                this.$router.push('register');
            }
            
        }
    },
    computed: {
        ...mapState(['dashboard']),
        ...mapState(['user'])
    }

}
</script>

<style lang="scss">

</style>
