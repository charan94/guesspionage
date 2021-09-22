<template>
<div class="jumbotron px-2">
    <form id="registerForm" @submit.prevent="onSubmit">
        <div class="form-group mb-2">
            <label for="userName" class="form-label">Select UserName</label>
            <input type="text" id="userName" class="form-control" v-model="userName" @keyup="onKeyUp" />
            <div class="form-text text-warning" v-if="!userName">
                UserName is required
            </div>
            <div class="form-text text-warning" v-if="userName && userName.length < 3">
                User Name should be atleast 3 characters.
            </div>
            <div class="form-text text-warning" v-if="!isUserNameAvailable">
                User Name is not available.
            </div>
        </div>
        <div class="form-group text-center">
            <button class="btn btn-primary" type="submit" :disabled="!userName || userName.length < 3">Play</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            userName: '',
            isUserNameAvailable: true
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
