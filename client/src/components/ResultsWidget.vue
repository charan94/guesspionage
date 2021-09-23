<template>
<div class="col-12">
    <div class="container-fluid">
        <h6 class="fw-bold text-center">Total Questions: {{loading ? 'loading' : total}}</h6>
        <h6 class="fw-bold text-center">Correct Responses: {{loading ? 'loading' : correct}}</h6>
        <h6 class="fw-bold text-center">Incorrect Responses: {{loading ? 'loading' : incorrect}}</h6>
        <h6 class="fw-bold text-center">Score: {{loading ? 'loading' : score}}</h6>
    </div>
    <div class="container-fluid text-center">
       <button className="btn btn-primary text-center" @click="playAgain">Play Again</button>
    </div>
    <div class="container-fluid text-center">
    <div className="row" >
    <div className="col-6 offset-md-3 text-center" style="height: 250px">
       <DemoChart :game="game" />
       </div>
    </div>
    </div>
</div>
</template>

<script>
import DemoChart from './DemoChart';
export default {
    props: {
        game: {
            type: Object
        }
    },
    data: function () {
        return {
            loading: true,
            total: 0,
            correct: 0,
            incorrect: 0,
            score: 0
        }
    },
    mounted() {
        if (this.game) {
            this.total = this.game.questions.length;
            this.score = this.game.questions.map(({
                score
            }) => score).reduce((a, b) => a + b);
            this.correct = this.game.questions.filter(({
                score
            }) => !!score).length;
            this.incorrect = this.game.questions.filter(({
                score
            }) => !score).length;
            this.loading = false;
        }
    },
    methods: {
        playAgain() {
            this.$emit('play', true);
        }
    },
    components: {
        DemoChart
    }
}
</script>

<style lang="scss">

</style>
