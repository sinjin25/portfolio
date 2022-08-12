<template>
    <div class="thumb-container">
        <div class="thumb-box" :class="active === index ? '--active' : ''"
        @click="clickHandler(index)"
        v-for="(item, index) in urls" :key="index">
            <img
            :src="require('../assets/img/'+item)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: ['urls'],
    data() {
        return {
            active: 0
        }
    },
    watch: {
        urls() {
            this.active = 0
        }
    },
    methods: {
        clickHandler(index) {
            this.active = index
            this.$emit('activated', index)
        }
    }
}
</script>

<style lang="scss" scoped>
.thumb {
    &-container {
        display: flex;
        flex-direction: column;
        background: var(--dark);
        padding: 1rem 1em;
    }
    &-box {
        width: 5em;
        height: 5em;
        overflow: hidden;
        background: black;
        margin: .5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &.--active {
            border: 2px solid var(--accent);
        }
        img {
            object-fit: cover;
            max-height: 100%;
            width: auto;
        }
    }
}
</style>