<template>
<div class="jumbotron px-2">
    <form id="answerForm" @submit.prevent="onSubmit">
        <div class="form-group mb-2">
            <label for="answer" class="form-label">Enter your answer...</label>
            <input type="text" id="answer" class="form-control" v-model="answer" />
            <div class="form-text text-danger" v-if="v$.$dirty && v$.answer.required.$invalid">
                Answer is required
            </div>
        </div>
        <div class="form-group text-center">
            <button class="btn btn-primary" type="submit" :disabled="v$.answer.required.$invalid ">
                Submit
            </button>
        </div>
    </form>
</div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {
    required
} from '@vuelidate/validators'
export default {
    setup: () => ({
        v$: useVuelidate()
    }),
    data: function () {
        return {
            answer: ''
        }
    },
    validations() {
        return {
            answer: {
                required,
                $autoDirty: true
            }
        }
    },
    methods: {
        onSubmit() {
            this.$emit('onSubmit', {
                answer: this.answer
            })
        }
    }
}
</script>

<style lang="scss">
</style>
