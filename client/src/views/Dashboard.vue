<template>
<div class="grid">
    <h1>Hello </h1>
</div>
</template>

<script>
export default {
    props: {

    },

    data() {

    },

    mounted() {
        const state = this.$store.state.user;
        if (!state.user) {
            this.$router.push('register')
        }
    },

    methods: {

    },

}
</script>

<style lang="scss">

</style>
