<template>
<div className="container-fluid">
    <div class="p-5 mb-4 bg-light rounded-3">
        <div class="col-12">
            <div class="container-fluid">
                <h6 class="fw-bold text-center">Results</h6>
            </div>
        </div>
        <ResultsWidget :game="dashboard.currentGame" @play="playAgain" v-if="!dashboard.loading" />
        <span class="spinner-border spinner-border-sm" style="position: absolute; top: 50%; left: 50%;" role="status" aria-hidden="true" v-if="dashboard.loading"></span>
    </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ResultsWidget from '../components/ResultsWidget';
export default {
    data: function() {
        return {}
    },
    methods: {
       ...mapActions(['loadGameAction']),
       playAgain() {
           localStorage.removeItem('currentGame');
           setTimeout(() => {
             window.location.href="/register";
           }, 500);
       }
    },
    mounted() {
      const gameId = this.$router.params?.gameId || 'WhqKEjhaE';
      if(gameId) {
         this.loadGameAction(gameId);
      }
    },
    computed: {
        ...mapState(['dashboard']),
        ...mapState(['user'])
    },
    components: {
        ResultsWidget
    }
}
</script>

<style lang="scss" >
</style>
