<template>
<div className="layout-wrapper layout-overlay">
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-12 text-center mb-2">
                <h1>Guesspionage</h1>
                <p v-if="user !== null">User: {{user.userName}}</p>
                <button class="btn btn-secondary" @click="logout" v-if="user !== null">Logout</button>
            </div>
        </div>
    </div>
    <router-view />
</div>
</template>
<script>
export default {
    methods: {
        async logout() {
            localStorage.clear();
            await new Promise((r) => setTimeout(r, 500));
            window.location.reload();
        }
    },
    computed: {
        user: function(){
           return this.$store.state.user.user;
        }
    }
}
</script>
