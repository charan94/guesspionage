<template>
<canvas id="demoChart" width="250" height="250"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
    props: {
        game: {
            type: Object
        }
    },
    data: function () {
        return {
            loading: true
        }
    },
    mounted() {
        console.log('game ', this.game);
        if (this.game) {
            const ctx = document.getElementById('demoChart');
            const correct = this.game.questions?.filter(({
                score
            }) => !!score)?.length || 0;
            const incorrect = this.game.questions?.filter(({
                score
            }) => !score)?.length || 0;
            const config = {
                type: 'doughnut',
                data: {
                    labels: ['Correct', 'Incorrect'],
                    datasets: [{
                        label: 'Results',
                        data: [correct, incorrect],
                        backgroundColor: ['#379683', '#C3073F']
                    }]

                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Visualize Results'
                        }
                    }
                },
            };
            new Chart(ctx, config);
        }
    }
}
</script>

<style lang="scss">

</style>
