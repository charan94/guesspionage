<template>
<div class="p-5 mb-4 bg-light rounded-3">
    <div class="col-12 float-right">
        <div class="container-fluid" v-if="!isTimerRunning && question === 0">
            <h1 class="display-5 fw-bold text-center">Generating new question....</h1>
        </div>
        <div class="container-fluid" v-if="isTimerRunning && countDown !== 0">
            <Timer @countdownEnd="onCountdownEnd" :countDown="countDown" />
            <h1 class="display-5 fw-bold text-center">{{question}}</h1>
        </div>
        <div class="container-fluid" v-if="!isTimerRunning && question !== 0">
            <AnswerWidget @onSubmit="onAnswerSubmit" />
        </div>
    </div>
</div>
</template>

<script>
import Timer from './Timer';
import AnswerWidget from './AnswerWidget';
import {
    generateRandomNumber
} from '../helper.js';
export default {
    props: {
        currentGame: {
            type: Object,
        },
        games: {
            type: Array,
        },
        settings: {
            type: Object,
        },
        currentLevel: {
            type: String
        }
    },

    data: function () {
        return {
            question: 0,
            isTimerRunning: false,
            countDown: 0
        }
    },
    mounted() {
        if (this.settings && this.currentLevel) {
            this.generateQuestion();
        }
    },
    methods: {
        onCountdownEnd() {
            this.isTimerRunning = false;
        },
        generateQuestion() {
            const {
                max,
                time
            } = this.settings.settings[`${this.currentLevel}`];
            const number = generateRandomNumber(max);
            this.isTimerRunning = true;
            this.question = number;
            this.countDown = time;
        },
        onAnswerSubmit(event) {
            const props = {
                level: this.currentLevel,
                question: this.question,
                answer: parseInt(event.answer),
                score: this.question === parseInt(event.answer) ? 1 : 0
            }
            this.question = 0;
            this.isTimerRunning = false;
            this.countDown = 0;
            this.$emit('updateQuestion', props);
        }
    },

    components: {
        Timer,
        AnswerWidget
    }

}
</script>

<style lang="scss">

</style>
