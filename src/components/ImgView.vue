<template>
    <div class="img-container-c">
        <div
        class="img-container" target="_blank">
            <img :src="require('../assets/img/'+src)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: ['src', 'link']
}
</script>

<style lang="scss" scoped>
    .img-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        height: 100%;
        img {
            height: 100%;
            object-fit: cover;
        }
        /* fade */
        &::after, &::before {
            --bg: #151b22;
            --bg-t: hsla(212, 24%, 11%, 0);
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            height: 1rem;
            width: 100%;
            z-index: 2;
            pointer-events: none;
        }
        &::after {
            bottom: 0;
            background: linear-gradient(to top, var(--bg), var(--bg-t) 100%);
        }
        &::before {
            top: 0;
            background: linear-gradient(to bottom, var(--bg), var(--bg-t) 100%);
        }
    }
    .img-container-c {
        padding: 0.5rem;
        background: #151b22;
        position: relative;
        height: 450px;
        overflow: hidden;
        @media only screen and (min-width: 768px) {
            padding: 2rem;
        }
        &::after {
            content: attr(screenshot);
            text-align: right;
            position: absolute;
            color: white;
            top: 1em;
            right: 1em;
            left: 0;
            height: 2rem;
            width: 15ch;
            margin-left: auto;
            line-height: 1;
            padding: .5rem 1em;
            display: inline-block;
            background: black;
        }
    }
</style>