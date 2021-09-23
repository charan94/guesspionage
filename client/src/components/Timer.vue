<template>
<div>
    <h3 class="display-5 fw-bold text-center">Time: {{count}} second</h3>
</div>
</template>

<script>
export default {
    props: {
        countDown: {
            type: Number
        },
    },
    data: function () {
        return {
            count: 0
        }
    },
    mounted() {
       if(this.countDown !== 0) {
           this.count = this.countDown;
           this.startTimer();
       }
    },
    methods: {
        startTimer() {
            if(this.count <= 0) {
                this.$emit('countdownEnd', this.count);
            }
            if (this.count > 0) {
                setTimeout(() => {
                    this.count -= 1
                    this.startTimer()
                }, 1000)
            }

        }
    }

}
</script>

<style lang="scss">

</style>
