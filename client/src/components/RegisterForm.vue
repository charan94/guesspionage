<template>
<div class="jumbotron px-2">
    <form id="registerForm" @submit.prevent="onSubmit">
        <div class="form-group mb-2">
            <label for="userName" class="form-label">Select UserName</label>
            <input type="text" id="userName" class="form-control" v-model="userName" @keyup="onKeyUp" />
            <div class="form-text text-danger" v-if="v$.$dirty && v$.userName.required.$invalid">
                UserName is required
            </div>
            <div class="form-text text-danger" v-if="v$.$dirty && v$.userName.minLength.$invalid">
                User Name should be atleast 3 characters.
            </div>
            <div class="form-text text-danger" v-if="v$.$dirty && !(v$.userName.required.$invalid || v$.userName.minLength.$invalid) && !isUserNameAvailable">
                User Name is not available.
            </div>
        </div>
        <div class="form-group text-center">
            <button class="btn btn-primary" type="submit" :disabled="v$.userName.minLength.$invalid || v$.userName.required.$invalid || !isUserNameAvailable || loading">
               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
               Play
            </button>
        </div>
    </form>
</div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {
    required,
    minLength
} from '@vuelidate/validators'

export default {
    setup: () => ({
        v$: useVuelidate()
    }),
    props: {
        isUserNameAvailable: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            userName: ''
        }
    },
    validations() {
        return {
            userName: {
                required,
                minLength: minLength(3),
                $autoDirty: true
            }
        }
    },
    methods: {
        onSubmit() {
            this.$emit('onSubmit', {
                userName: this.userName
            })
        },
        onKeyUp() {
                setTimeout(() => {
                    this.$emit('onChange', {
                        userName: this.userName
                    });
                }, 200);
        }
    }
}
</script>

<style lang="scss">

</style>
