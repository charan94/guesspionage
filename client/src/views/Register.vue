<template>
<div class="container-fluid mt-5">
    <div className="row">
        <div class="col-12 col-lg-4 offset-lg-4">
            <RegisterForm :loading="user.checkUserNameLoading" :is-user-name-available="getIsUserNameAvailable()" @onSubmit="registerUser" @onChange="checkIfUserNameExists" />
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapState
} from 'vuex';

import RegisterForm from '../components/RegisterForm';

export default {
    data: function () {
        return {}
    },
    created() {
        this.checkIfUserExists();
    },
    mounted() {
        if (this.user.user !== null) {
            this.$router.push('dashboard');
        }
    },
    methods: {
        ...mapActions(['registerUserAction', 'checkUserName', 'checkIfUserExists']),
        ...mapGetters(['getIsUserNameAvailable', 'getUserDetails']),
        registerUser(event) {
            const {
                userName
            } = event;
            this.registerUserAction(userName);
        },
        checkIfUserNameExists(event) {
            const {
                userName
            } = event;
            this.checkUserName(userName);
        }
    },
    updated() {
        const user = this.getUserDetails();
        if (user && user.userName) {
            this.$router.push('dashboard');
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
