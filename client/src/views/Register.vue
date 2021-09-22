<template>
<div class="container-fluid mt-5">
    <div className="row">
        <div class="col-12 text-center mb-2">
            <h1>Guesspionage</h1>
        </div>
        <div class="col-12 col-lg-4 offset-lg-4">
            <RegisterForm @onSubmit="registerUser" @onChange="checkIfUserNameExists" />
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex';

import RegisterForm from '../components/RegisterForm';

export default {
    data: function () {
        return {

        }
    },
    methods: {
        ...mapActions(['registerUser']),
        registerUser(e) {
            console.log('e ', e);
        },
        checkIfUserNameExists(event) {
            console.log('event ', event);
        }
    },
    computed: {
        ...mapState(['user'])
    },
    components: {
        RegisterForm
    }
}
</script>

<style lang="scss" >

</style>
