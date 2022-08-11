<template>
    <div class="pagination-container">
        <slot></slot>
        <div class="dot-container">
            <div
            @click="jump(index)"
            v-for="(item, index) in range"
            :key="index"
            class="dot-clickable"
            >
                <div class="dot-graphic" :class="active === index ? '--active' : ''"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['active', 'range'],
    methods: {
        jump(index) {
            this.$emit('jump', index)
        }
    }
}
</script>

<style lang="scss" scoped>
.dot {
    &-clickable {
        padding: 1em;
        cursor: pointer;
    }
    &-graphic {
        width: 1em;
        height: 1em;
        background: grey;
        border-radius: 50%;
        box-shadow: 0px 2px 4px 0px #00000094;
        &.--active {
            background: #ff5050;
            box-shadow: 0px 2px 4px 0px #611d1d;
        }
    }
    &-container {
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        margin: 0 auto;
        position: absolute;
        bottom: 1.5rem;
        left: 0;
        right: 0;
        z-index: 2;
    }
}
.pagination-container {
    position: relative;
}
</style>